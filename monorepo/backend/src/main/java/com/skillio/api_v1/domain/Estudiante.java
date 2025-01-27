package com.skillio.api_v1.domain;

import com.skillio.api_v1.enums.Role;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Estudiante extends  Usuario{

    @Column(length = 15, columnDefinition = "varchar(15)", nullable = true)
    private Long telefono;

    private LocalDate fechaNacimiento;

    private LocalDate fechaRegistro;

    @Column(length = 500, columnDefinition = "varchar(500)", updatable = true, nullable = true)
    private String imagenPerfilUrl;

    @OneToMany(mappedBy = "usuario1", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Amistad> amistadesEnviadas = new ArrayList<>();

    @OneToMany(mappedBy = "usuario2", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Amistad> amistadesRecibidas = new ArrayList<>();

    @OneToMany(mappedBy = "usuario")
    private List<Publicacion> publicaciones = new ArrayList<>();

    @OneToMany(mappedBy = "usuario")
    private List<Comentario> comentarios = new ArrayList<>();

    @Column(length = 150, columnDefinition = "varchar(150)", updatable = true, nullable = false)
    private String institucion;

    @Column(length = 150, columnDefinition = "varchar(150)", updatable = true, nullable = false)
    private String educacion;

    private List<String> preferencias;

    @Transient
    private Role role = Role.USUARIO;

    public static EstudianteBuilder estudianteBuilder() {
        return new EstudianteBuilder();
    }

    public static class EstudianteBuilder {
        private UUID id;
        private String nombres;
        private String apellidos;
        private String email;
        private String password;

        public EstudianteBuilder id(UUID id) {
            this.id = id;
            return this;
        }

        public EstudianteBuilder nombres(String nombres) {
            this.nombres = nombres;
            return this;
        }

        public EstudianteBuilder apellidos(String apellidos) {
            this.apellidos = apellidos;
            return this;
        }

        public EstudianteBuilder email(String email) {
            this.email = email;
            return this;
        }

        public EstudianteBuilder password(String password) {
            this.password = password;
            return this;
        }

        public Estudiante build() {
            Estudiante estudiante = new Estudiante();
            estudiante.setId(id);
            estudiante.setNombres(nombres);
            estudiante.setApellidos(apellidos);
            estudiante.setEmail(email);
            estudiante.setPassword(password);
            return estudiante;
        }
    }
}
