package com.skillio.api_v1.domain;

import com.skillio.api_v1.enums.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.Transient;
import lombok.*;

import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Admin extends Usuario{

    @Transient
    private Role role = Role.ADMIN;

    public static AdminBuilder adminBuilder() {
        return new AdminBuilder();
    }

    public static class AdminBuilder {
        private UUID id;
        private String nombres;
        private String apellidos;
        private String email;
        private String password;

        public AdminBuilder id(UUID id) {
            this.id = id;
            return this;
        }

        public AdminBuilder nombres(String nombres) {
            this.nombres = nombres;
            return this;
        }

        public AdminBuilder apellidos(String apellidos) {
            this.apellidos = apellidos;
            return this;
        }

        public AdminBuilder email(String email) {
            this.email = email;
            return this;
        }

        public AdminBuilder password(String password) {
            this.password = password;
            return this;
        }

        public Admin build() {
            Admin admin = new Admin();
            admin.setId(id);
            admin.setNombres(nombres);
            admin.setApellidos(apellidos);
            admin.setEmail(email);
            admin.setPassword(password);
            return admin;
        }
    }
}
