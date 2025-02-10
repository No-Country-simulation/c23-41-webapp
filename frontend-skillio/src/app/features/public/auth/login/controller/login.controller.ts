import { inject, Injectable } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Observable, tap } from "rxjs";
import { SessionService } from "../../../../../core/services/session.service";

@Injectable({providedIn: 'root'})
export class LoginController {
    loginService = inject(LoginService);
    sessionService = inject(SessionService)

    toLogin(username: string, password: string): Observable<any> {
      return  this.loginService.login({email: username, password: password}).pipe(
        tap((r) => {
          this.sessionService.setToken(r.token);
        })
      );
    }
}