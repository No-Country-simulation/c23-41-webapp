import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable } from "rxjs";
import { AuthResponse, AuthResponseRaw } from "../types/user-login";

export interface LoginCredentials {
    email: string;
    password: string;
  }
  

@Injectable({providedIn: 'root'})
export class LoginService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'https://skillio-api.zeabur.app';
    login(credentials: LoginCredentials): Observable<AuthResponse> {
        return this.http.post<AuthResponseRaw>(`${this.apiUrl}/login`, credentials, { withCredentials: true }).pipe(
          map(data => this.mapAuthResponse(data)),
          catchError(error => {
            console.error('Login failed:', error);
            throw error;
          })
        );
      }

      mapAuthResponse(rawData: AuthResponseRaw): AuthResponse {
        return {
          roles: rawData.Role.map(role => ({ authority: role.authority })),
          message: rawData.Message,
          fullName: rawData["Nombre Completo"],
          username: rawData.Username,
          token: rawData.Token,
          uuid: rawData.UUID,
        };
      }
}