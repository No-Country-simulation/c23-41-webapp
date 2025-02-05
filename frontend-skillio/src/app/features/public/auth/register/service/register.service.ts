import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define el modelo de Estudiante
export interface NewUser {
  nombreCompleto: string;
  email: string;
  password: string;
  telefono?: number;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly apiUrl = 'https://skillio-api.zeabur.app/estudiante';

  constructor(private http: HttpClient) {}

  /**
   * Crea un nuevo estudiante enviando los datos a la API
   * @param estudiante Información del nuevo estudiante
   * @returns Observable con la respuesta de la API
   */
  registerUser(estudiante: NewUser): Observable<any> {
    const endpoint = `${this.apiUrl}/nuevoEstudiante`;
    return this.http.post(endpoint, estudiante);
  }
}
