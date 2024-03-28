import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const canActivateAdminGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const toastrService = inject(ToastrService);

  // Store the attempted route before triggering login
  authService.storeRedirectUrl(state.url);

  if (
    authService.isLoggedIn &&
    authService.userRoles.filter((f) => f === 'Admin').length > 0
  ) {
    return true;
  } else if (
    authService.isLoggedIn &&
    authService.userRoles.filter((f) => f === 'Admin').length === 0
  ) {
    toastrService.error(
      'You do not have access to Admin Module',
      'Access Denied'
    );
    inject(Router).navigate(['/home']); // Use inject(Router) to get the Router service
    return false;
  } else {
    authService.login(); //This triggers ad b2c login flow.
    return false;
  }
};
