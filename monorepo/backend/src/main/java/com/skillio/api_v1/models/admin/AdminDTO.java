package com.skillio.api_v1.models.admin;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdminDTO {
    private String id;
    private String nombres;
    private String apellidos;
    private String email;
    private String password;
}
