package com.skillio.api_v1.models.estudiante;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EstudianteDTO {
    private String id;
    private String nombres;
    private String apellidos;
    private String email;
    private String password;
    private String telefono;
    private String imagenPerfilUrl;
    private String fechaNacimiento;
    private String fechaRegistro;
    private String institucion;
    private String educacion;
    private List<String> preferencias;
    private String role;
}
