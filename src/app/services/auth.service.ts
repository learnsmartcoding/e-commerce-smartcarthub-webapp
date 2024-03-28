import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MsalService, MsalBroadcastService, MsalGuardConfiguration, MSAL_GUARD_CONFIG } from '@azure/msal-angular';
import {
  EventMessage,
  AuthenticationResult,
  InteractionStatus,
  EventType,
  InteractionType,
  PopupRequest,
  RedirectRequest,
  PromptValue,
} from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
import { createClaimsTable } from '../claim-utils';
import { Claim } from '../models/claim';
import { b2cPolicies } from '../auth-config';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userRoles: string[] = [];
  // Use BehaviorSubject to provide an observable for claims availability
  private claimsSubject = new BehaviorSubject<Claim[]>([]);
  claims$ = this.claimsSubject.asObservable();

  loginDisplay = false;
  isLoggedIn = false;
  displayedColumns: string[] = ['claim', 'value', 'description'];
  redirectUrl: string | null = null; // Variable to store the attempted route
  
  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration
  ) {
    this.getClaims(undefined);
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS)
      )
      .subscribe((result: EventMessage) => {
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
        const claims =
          this.authService.instance.getActiveAccount()?.idTokenClaims;
        this.getClaims(claims);
      });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    this.isLoggedIn = this.loginDisplay;
  }

  getClaims(claims: any) {
    console.log(JSON.stringify(claims));
    if (claims) {
      const claimsTable = createClaimsTable(claims);
      this.claimsSubject.next([...claimsTable]);
      // Type check before accessing extension_userRoles property
      if (
        'extension_userRoles' in claims &&
        typeof claims.extension_userRoles === 'string'
      ) {
        this.userRoles = claims.extension_userRoles.split(',');
      } else {
        this.userRoles = [];
      }
  
    } else {
      this.claimsSubject.next([]); // No claims available
      this.userRoles = [];
    }
    console.log('user-roles: '+ JSON.stringify(this.userRoles));

  }

  storeRedirectUrl(url: string) {
    sessionStorage.setItem('redirectUrl', url);
  }

  login(userFlowRequest?: RedirectRequest | PopupRequest) {   

    let signUpSignInFlowRequest: RedirectRequest | PopupRequest = {
      authority: b2cPolicies.authorities.signUpSignIn.authority,
      prompt: PromptValue.LOGIN, // force user to reauthenticate with their new password
      scopes: [],
    };
    
    userFlowRequest = signUpSignInFlowRequest;

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

}
