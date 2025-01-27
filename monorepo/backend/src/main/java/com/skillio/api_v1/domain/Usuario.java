package com.skillio.api_v1.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Usuario {

    @Id
    @GeneratedValue(generator = "UUID")
    @JdbcTypeCode(SqlTypes.CHAR)
    @Column(length = 50, columnDefinition = "varchar(50)", updatable = false, nullable = false)
    private UUID id;

    @Column(length = 150, columnDefinition = "varchar(150)", updatable = true, nullable = false)
    private String nombres;

    @Column(length = 150, columnDefinition = "varchar(150)", updatable = true, nullable = false)
    private String apellidos;

    @Column(length = 150, columnDefinition = "varchar(150)", updatable = true, nullable = false)
    private String email;

    @Column(nullable = false, updatable = true)
    private String password;

    @OneToMany(mappedBy = "usuario")
    private List<Comentario> comentarios = new ArrayList<>();

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", nombres='" + nombres + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
