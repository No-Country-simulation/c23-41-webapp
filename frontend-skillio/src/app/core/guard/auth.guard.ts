import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { NavigateController } from '../../shared/controllers/navigate.controller';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const naviagetController = inject(NavigateController);


  if (!sessionService.isAuthenticated()) {
    naviagetController.navigateToLoginFromAuthOutlet();
    return false;
  }

  return true;
};