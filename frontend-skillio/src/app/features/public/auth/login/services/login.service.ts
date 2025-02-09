import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";

export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    accessToken: string;
    user: UserData;
  }
  
  export interface UserData {
    id: string;
    email: string;
    name: string;
  }

@Injectable({providedIn: 'root'})
export class LoginService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'https://skillio-api.zeabur.app/estudiante';
    login(credentials: LoginCredentials): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials, { withCredentials: true }).pipe(
          tap(response => this.handleAuthSuccess(response)),
          catchError(error => {
            console.error('Login failed:', error);
            throw error;
          })
        );
      }

      private handleAuthSuccess(response: AuthResponse): void {
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('userData', JSON.stringify(response.user));
      }
}