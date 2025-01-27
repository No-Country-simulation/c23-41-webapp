package com.skillio.api_v1.domain;

import com.skillio.api_v1.enums.EstadoAmistad;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Amistad {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(length = 36, columnDefinition = "varchar(150)", updatable = false, nullable = false)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "usuario1_id", nullable = false)
    private Usuario usuario1;

    @ManyToOne
    @JoinColumn(name = "usuario2_id", nullable = false)
    private Usuario usuario2;

    @Column(length = 15, columnDefinition = "varchar(15)", updatable = true, nullable = false)
    @Enumerated(EnumType.STRING)
    private EstadoAmistad estadoAmistad;

    private LocalDate fechaAmistad;
}
