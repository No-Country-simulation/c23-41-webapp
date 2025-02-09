import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class RecoveryService {
    private http = inject(HttpClient);
    private apiUrl = 'https://skillio-api.zeabur.app/estudiante'

    sendPasswordResetEmail(email: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/reset-password/email`, { email });
      }
    
      sendPasswordResetSMS(phone: string) {
        return this.http.post(`${this.apiUrl}/auth/reset-password/phone`, { phone });
      }
}