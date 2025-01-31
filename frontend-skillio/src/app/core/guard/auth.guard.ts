import { computed, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NavigateController } from '../../shared/controllers/navigate.controller';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const naviagetController = inject(NavigateController);


  if (!authService.isAuthenticated()) {
    naviagetController.navigateToLoginFromAuthOutlet();
    return false;
  }

  return true;
};