package com.skillio.api_v1.mapper.usuario.impl;

import com.skillio.api_v1.domain.Usuario;
import com.skillio.api_v1.mapper.usuario.UsuarioMapper;
import com.skillio.api_v1.models.usuario.UsuarioDTO;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@AllArgsConstructor
public class UsuarioMapperImpl implements UsuarioMapper {

    private final PasswordEncoder passwordEncoder;

    @Override
    public Usuario usuarioDTOtoUsuario(UsuarioDTO usuarioDTO) {
        Usuario.UsuarioBuilder builder = Usuario.builder()
                .id(UUID.randomUUID())
                .nombres(usuarioDTO.getNombres())
                .apellidos(usuarioDTO.getApellidos())
                .email(usuarioDTO.getEmail())
                .password(passwordEncoder.encode(usuarioDTO.getPassword()));
        return null;
    }

    @Override
    public UsuarioDTO usuarioToUsuarioDTO(Usuario usuario) {

        return null;
    }
}
