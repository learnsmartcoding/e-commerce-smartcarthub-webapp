import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const toastrService = inject(ToastrService);

  if (authService.isLoggedIn) {
    return true;
  } else {
    toastrService.info(
      'You need to login to access the feature.',
      'Login Required'
    );
    authService.login(); //This triggers ad b2c login flow.
    return false;
  }
};
