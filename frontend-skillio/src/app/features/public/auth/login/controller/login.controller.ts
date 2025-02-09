import { inject, Injectable } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class LoginController {
    loginService = inject(LoginService);

    toLogin(username: string, password: string): Observable<any> {
      return  this.loginService.login({email: username, password: password});
    }
}