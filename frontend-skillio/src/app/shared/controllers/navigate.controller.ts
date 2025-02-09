import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";

type Outlets = 'auth' | 'admin';

@Injectable({
    providedIn: 'root'})
export class NavigateController {
    private readonly _router = inject(Router);

    public navigateToLoginFromAuthOutlet() {
        this._router.navigate(['authenticate', { outlets: { auth: ['login'] } }]);
      }
      
    public navigateToRegisterFromAuthOutlet() {
        this._router.navigate([ 'authenticate', { outlets: { auth: ['register'] } }]);
    }

    public navigateToFeedFromPrincipalOutlet() {
        this._router.navigate(['container', { outlets: { principal: ['feed'] } }]);
    }

    public navigateToDashboardFromAdminOutlet() {
        this._router.navigate(['admin', { outlets: { admin: ['dashboard'] } }]);
    }

    public navigateToUsersFromAdminOutlet() {
        this._router.navigate(['admin', { outlets: { admin: ['users'] } }]);
    }

    public navigateToProfile() {
        this._router.navigate(['container', { outlets: { principal: ['profile'] } }]);
    }

    public navigateToWelcome() {
        this._router.navigate(['welcome']);
    }

    public registerDetails() {
        this._router.navigate(['authenticate', { outlets: { auth: ['register-details'] } }]);
    }

    public navigateToRecoveryPassword() {
        this._router.navigate(['authenticate', { outlets: { auth: ['recovery-password'] } }]);
    }
}