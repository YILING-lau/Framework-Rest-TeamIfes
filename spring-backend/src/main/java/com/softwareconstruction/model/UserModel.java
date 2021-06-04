package com.softwareconstruction.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserModel {
    private Long id;
    private String name;
    private String password;
    private String email;
    private String jwtToken;
}
