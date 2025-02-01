import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavigateController } from '../../shared/controllers/navigate.controller';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const naviagetController = inject(NavigateController);


  if (!authService.isAuthenticated()) {
    naviagetController.navigateToLoginFromAuthOutlet();
    return false;
  }

  return true;
};