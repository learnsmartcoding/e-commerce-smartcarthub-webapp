import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import {
  AccountInfo,
  AuthenticationResult,
  EventMessage,
  IdTokenClaims,
  InteractionStatus,
  InteractionType,
  PopupRequest,
  PromptValue,
  RedirectRequest,
  SsoSilentRequest,
  EventType,
} from '@azure/msal-browser';
import {
  MSAL_GUARD_CONFIG,
  MsalGuardConfiguration,
  MsalService,
  MsalBroadcastService,
} from '@azure/msal-angular';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ToastrService } from 'ngx-toastr';
import { Subject, filter, takeUntil } from 'rxjs';
import { LoginService } from './services/login.service';
import { b2cPolicies } from './auth-config';
import { Claim } from './models/claim';
import { UserProfileModel, UserProfileService } from './services/user-profile.service';
import { OrderService } from './services/order.service';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

type IdTokenClaimsWithPolicyId = IdTokenClaims & {
  acr?: string;
  tfp?: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  claims: Claim[] = [];
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  title = 'lsc-smartcarthub-webapp';
  // some fields to store our state so we can display it in the UI
  idleState = 'NOT_STARTED';
  countdown?: number;
  lastPing?: Date;

  // add parameters for Idle and Keepalive (if using) so Angular will inject them from the module
  constructor(
    private idle: Idle,
    keepalive: Keepalive,
    cd: ChangeDetectorRef,
    private toastrService: ToastrService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private loginService: LoginService,
    private userProfileService:UserProfileService,
    private orderService: OrderService,
    private router: Router, private titleService: Title
  ) {
    // set idle parameters
    idle.setIdle(60); // how long can they be inactive before considered idle, in seconds
    idle.setTimeout(600); // how long can they be idle before considered timed out, in seconds
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    // do something when the user becomes idle
    idle.onIdleStart.subscribe(() => {
      this.idleState = 'IDLE';
    });
    // do something when the user is no longer idle
    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'NOT_IDLE';
      console.log(`${this.idleState} ${new Date()}`);
      this.countdown = undefined;
      cd.detectChanges(); // how do i avoid this kludge?
    });
    // do something when the user has timed out
    idle.onTimeout.subscribe(() => {
      this.idleState = 'TIMED_OUT';
      this.toastrService.info('Session expired!', 'Timeout');
    });
    // do something as the timeout countdown does its thing
    idle.onTimeoutWarning.subscribe((seconds) => {
      this.countdown = seconds;      
      // dhu
    });

    // set keepalive parameters, omit if not using keepalive
    keepalive.interval(15); // will ping at this interval while not idle, in seconds
    keepalive.onPing.subscribe(() => (this.lastPing = new Date())); // do something when it pings
  }

  reset() {
    // we'll call this method when we want to start/reset the idle process
    // reset any component state and be sure to call idle.watch()
    this.idle.watch();
    this.idleState = 'NOT_IDLE';
    this.countdown = undefined;
    this.lastPing = undefined;
  }

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateTitle(event.url);
      }
    });

    // right when the component initializes, start reset state and start watching
    this.reset();
    this.getProfile();
    this.getOrders();
    this.isIframe = window !== window.parent && !window.opener;
    this.setLoginDisplay();

    this.authService.instance.enableAccountStorageEvents(); // Optional - This will enable ACCOUNT_ADDED and ACCOUNT_REMOVED events emitted when a user logs in or out of another tab or window

    /**
     * You can subscribe to MSAL events as shown below. For more info,
     * visit: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-angular/docs/v2-docs/events.md
     */
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.ACCOUNT_ADDED ||
            msg.eventType === EventType.ACCOUNT_REMOVED
        )
      )
      .subscribe((result: EventMessage) => {
        if (this.authService.instance.getAllAccounts().length === 0) {
          window.location.pathname = '/';
        } else {
          this.setLoginDisplay();
        }
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter(
          (status: InteractionStatus) => status === InteractionStatus.None
        ),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        this.checkAndSetActiveAccount();
      });

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_SUCCESS ||
            msg.eventType === EventType.ACQUIRE_TOKEN_SUCCESS ||
            msg.eventType === EventType.SSO_SILENT_SUCCESS
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        let payload = result.payload as AuthenticationResult;
        let idtoken = payload.idTokenClaims as IdTokenClaimsWithPolicyId;

        if (
          idtoken.acr === b2cPolicies.names.signUpSignIn ||
          idtoken.tfp === b2cPolicies.names.signUpSignIn
        ) {
          this.authService.instance.setActiveAccount(payload.account);
        }

        /**
         * For the purpose of setting an active account for UI update, we want to consider only the auth response resulting
         * from SUSI flow. "acr" claim in the id token tells us the policy (NOTE: newer policies may use the "tfp" claim instead).
         * To learn more about B2C tokens, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
         */
        if (
          idtoken.acr === b2cPolicies.names.editProfile ||
          idtoken.tfp === b2cPolicies.names.editProfile
        ) {
          // retrieve the account from initial sing-in to the app
          const originalSignInAccount = this.authService.instance
            .getAllAccounts()
            .find(
              (account: AccountInfo) =>
                account.idTokenClaims?.oid === idtoken.oid &&
                account.idTokenClaims?.sub === idtoken.sub &&
                ((account.idTokenClaims as IdTokenClaimsWithPolicyId).acr ===
                  b2cPolicies.names.signUpSignIn ||
                  (account.idTokenClaims as IdTokenClaimsWithPolicyId).tfp ===
                    b2cPolicies.names.signUpSignIn)
            );

          let signUpSignInFlowRequest: SsoSilentRequest = {
            authority: b2cPolicies.authorities.signUpSignIn.authority,
            account: originalSignInAccount,
          };

          // silently login again with the signUpSignIn policy
          this.authService.ssoSilent(signUpSignInFlowRequest);
        }

        /**
         * Below we are checking if the user is returning from the reset password flow.
         * If so, we will ask the user to reauthenticate with their new password.
         * If you do not want this behavior and prefer your users to stay signed in instead,
         * you can replace the code below with the same pattern used for handling the return from
         * profile edit flow (see above ln. 74-92).
         */
        if (
          idtoken.acr === b2cPolicies.names.resetPassword ||
          idtoken.tfp === b2cPolicies.names.resetPassword
        ) {
          let signUpSignInFlowRequest: RedirectRequest | PopupRequest = {
            authority: b2cPolicies.authorities.signUpSignIn.authority,
            prompt: PromptValue.LOGIN, // force user to reauthenticate with their new password
            scopes: [],
          };

          this.login(signUpSignInFlowRequest);
        }

        return result;
      });

    this.msalBroadcastService.msalSubject$
      .pipe(
        filter(
          (msg: EventMessage) =>
            msg.eventType === EventType.LOGIN_FAILURE ||
            msg.eventType === EventType.ACQUIRE_TOKEN_FAILURE
        ),
        takeUntil(this._destroying$)
      )
      .subscribe((result: EventMessage) => {
        // Checking for the forgot password error. Learn more about B2C error codes at
        // https://learn.microsoft.com/azure/active-directory-b2c/error-codes
        if (result.error && result.error.message.indexOf('AADB2C90118') > -1) {
          let resetPasswordFlowRequest: RedirectRequest | PopupRequest = {
            authority: b2cPolicies.authorities.resetPassword.authority,
            scopes: [],
          };

          this.login(resetPasswordFlowRequest);
        }
      });

    //To subscribe for claims
    this.loginService.claims$.subscribe((c) => {
      this.claims = c;
    });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  checkAndSetActiveAccount() {
    /**
     * If no active account set but there are accounts signed in, sets first account to active account
     * To use active account set here, subscribe to inProgress$ first in your component
     * Note: Basic usage demonstrated. Your app may require more complicated account selection logic
     */
    let activeAccount = this.authService.instance.getActiveAccount();

    if (
      !activeAccount &&
      this.authService.instance.getAllAccounts().length > 0
    ) {
      let accounts = this.authService.instance.getAllAccounts();
      // add your code for handling multiple accounts here
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {
    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      if (this.msalGuardConfig.authRequest) {
        this.authService
          .loginPopup({
            ...this.msalGuardConfig.authRequest,
            ...userFlowRequest,
          } as PopupRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      } else {
        this.authService
          .loginPopup(userFlowRequest)
          .subscribe((response: AuthenticationResult) => {
            this.authService.instance.setActiveAccount(response.account);
          });
      }
    } else {
      if (this.msalGuardConfig.authRequest) {
        this.authService.loginRedirect({
          ...this.msalGuardConfig.authRequest,
          ...userFlowRequest,
        } as RedirectRequest);
      } else {
        this.authService.loginRedirect(userFlowRequest);
      }
    }
  }

  logout() {
    const activeAccount =
      this.authService.instance.getActiveAccount() ||
      this.authService.instance.getAllAccounts()[0];

    if (this.msalGuardConfig.interactionType === InteractionType.Popup) {
      this.authService.logoutPopup({
        account: activeAccount,
      });
    } else {
      this.authService.logoutRedirect({
        account: activeAccount,
      });
    }
  }

  editProfile() {
    let editProfileFlowRequest: RedirectRequest | PopupRequest = {
      authority: b2cPolicies.authorities.editProfile.authority,
      scopes: [],
    };

    this.login(editProfileFlowRequest);
  }

  // unsubscribe to events when component is destroyed
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  getProfile(){
    this.userProfileService.GetUserProfile().subscribe(s=>console.log(JSON.stringify(s)));
  }
  getOrders(){
    this.orderService.GetOrders().subscribe(data=>console.log(JSON.stringify(data)));
  }

  private updateTitle(url: string) {
    const defaultTitle='SmartCartHub Shopping Site | LearnSmartCoding';
    const lsc='| LearnSmartCoding'
    //this.toastrService.info(url,'URL');
    let pageTitle: string;

    switch (url) {
      case '/home':
        pageTitle = `Home ${lsc}`;
        break;
      case '/contact':
        pageTitle = `Contact ${lsc}`;
        break;
      case '/product/shop':
        pageTitle = `Browse Products ${lsc}`;
        break;
      case '/shopping':
        pageTitle = `Shopping ${lsc}`;
        break;
      case '/user/address/list' || '/user/address':
        pageTitle = `Address List ${lsc}`;
        break;
      case '/user/address/create':
        pageTitle = `Create Address ${lsc}`;
        break;
      case '/user/address/edit/:id':
        pageTitle = `Edit Address ${lsc}`;
        break;
      case '/admin/action':
        pageTitle = `Admin Action ${lsc}`;
        break;
      case '/admin/manage/products':
        pageTitle = `Manage Products ${lsc}`;
        break;
      case '/admin/manage/product/create':
        pageTitle = `Add Product ${lsc}`;
        break;
      case '/admin/manage/product/edit/:productId':
        pageTitle = `Edit Product ${lsc}`;
        break;
      case '/shopping/shop':
        pageTitle = `Shop ${lsc}`;
        break;
      case '/shopping/search':
        pageTitle = `Search ${lsc}`;
        break;
      case '/detail/:productId':
        pageTitle = `Product Details ${lsc}`;
        break;
      case '/shopping/cart':
        pageTitle = `Cart ${lsc}`;
        break;
      case '/shopping/wishlist':
        pageTitle = `Wishlist ${lsc}`;
        break;
      case '/shopping/checkout':
        pageTitle = `Checkout ${lsc}`;
        break;
      // Add more cases for other routes as needed
      default:
        pageTitle = defaultTitle;
    }

    this.titleService.setTitle(pageTitle);
  }
}
