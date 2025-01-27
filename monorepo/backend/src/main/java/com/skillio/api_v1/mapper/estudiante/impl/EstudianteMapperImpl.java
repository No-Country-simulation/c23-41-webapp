package com.skillio.api_v1.mapper.estudiante.impl;

import com.skillio.api_v1.domain.Estudiante;
import com.skillio.api_v1.mapper.estudiante.EstudianteMapper;
import com.skillio.api_v1.models.estudiante.EstudianteDTO;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Component
@AllArgsConstructor
public class EstudianteMapperImpl implements EstudianteMapper {

    private PasswordEncoder passwordEncoder;
    @Override
    public Estudiante estudianteDTOtoEstudiante(EstudianteDTO estudianteDTO) {
        Estudiante.EstudianteBuilder builder = Estudiante.estudianteBuilder()
                .id(UUID.fromString(estudianteDTO.getId()))
                .nombres(estudianteDTO.getNombres())
                .apellidos(estudianteDTO.getApellidos())
                .email(estudianteDTO.getEmail())
                .password(passwordEncoder.encode(estudianteDTO.getPassword()))
                .telefono(Long.valueOf(estudianteDTO.getTelefono()))
                .fechaNacimiento(getLocalDate(estudianteDTO.getFechaNacimiento()))
                .fechaRegistro(LocalDate.now())
                .institucion(estudianteDTO.getInstitucion())
                .educacion(estudianteDTO.getEducacion())
                .preferencias(estudianteDTO.getPreferencias());

        if(estudianteDTO.getImagenPerfilUrl() != null && !estudianteDTO.getImagenPerfilUrl().isBlank()){
            builder.imagenPerfilUrl(estudianteDTO.getImagenPerfilUrl());
        }

        return builder.build();
    }

    @Override
    public EstudianteDTO estudianteToEstudianteDTO(Estudiante estudiante) {
        EstudianteDTO.EstudianteDTOBuilder builder = EstudianteDTO.builder()
                .id(estudiante.getId().toString())
                .nombres(estudiante.getNombres())
                .apellidos(estudiante.getApellidos())
                .email(estudiante.getEmail())
                .fechaNacimiento(getLocalDate(estudiante.getFechaNacimiento()))
                .fechaRegistro(getLocalDate(estudiante.getFechaRegistro()));

        if (estudiante.getImagenPerfilUrl() != null && !estudiante.getImagenPerfilUrl().isEmpty()){
            builder.imagenPerfilUrl(estudiante.getImagenPerfilUrl());
        }

        return builder.build();
    }

    private String getLocalDate(LocalDate localDate){
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        return localDate.format(formato);
    }

    private LocalDate getLocalDate(String localDate){
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        return LocalDate.parse(localDate, formato);
    }
}
