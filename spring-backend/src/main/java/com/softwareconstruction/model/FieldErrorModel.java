package com.softwareconstruction.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
public class FieldErrorModel {
    private String field;
    private String message;
}
