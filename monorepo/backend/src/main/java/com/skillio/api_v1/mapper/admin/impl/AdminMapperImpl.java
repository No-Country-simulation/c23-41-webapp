package com.skillio.api_v1.mapper.admin.impl;

import com.skillio.api_v1.domain.Admin;
import com.skillio.api_v1.mapper.admin.AdminMapper;
import com.skillio.api_v1.models.admin.AdminDTO;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@AllArgsConstructor
public class AdminMapperImpl implements AdminMapper {

    private PasswordEncoder passwordEncoder;
    @Override
    public Admin adminDTOtoAdmin(AdminDTO adminDTO) {
        Admin.AdminBuilder builder = Admin.builder()
                .nombres(adminDTO.getNombres())
                .apellidos(adminDTO.getApellidos())
                .email(adminDTO.getEmail())
                .password(passwordEncoder.encode(adminDTO.getPassword()));

        return builder.build();
    }

    @Override
    public AdminDTO adminToAdminDTO(Admin admin) {
        AdminDTO.AdminDTOBuilder builder = AdminDTO.builder()
                .id(admin.getId().toString())
                .nombres(admin.getNombres())
                .apellidos(admin.getApellidos())
                .email(admin.getEmail());

        return builder.build();
    }
}
