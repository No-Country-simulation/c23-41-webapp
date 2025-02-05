import { inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { RegisterService } from '../service/register.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterController {
  isLoading = false;
  registerService = inject(RegisterService);
 

  /**
   * Mapea y envía los datos al backend
   * @param formData Datos del formulario de registro
   * @returns Observable de la respuesta
   */
  registrarEstudiante(formData: any): Observable<any> {
    const requestPayload = this.mapToBackendPayload(formData);

    this.isLoading = true;

    return this.registerService.registerUser(requestPayload).pipe(
      tap((r) => console.log('Estudiante registrado correctamente', r)),
      catchError((error) => {
        console.error('Error al registrar estudiante:', error);
        return throwError(() => error);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  /**
   * Mapea el formulario al formato esperado por el backend
   * @param formData Datos del formulario
   * @returns Objeto mapeado para la API
   */
  private mapToBackendPayload(formData: any): any {
    return {
      nombreCompleto: formData.name,
      email: formData.email,
      password: formData.password,
      telefono: formData.phone || null
    };
  }
}
