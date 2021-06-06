package com.softwareconstruction.model;

import lombok.Data;

@Data
public class ExpensesInfoUpdateModel {
    private Long userId;
    private String categoryId;
    private Double amount;
    private Long timestamp;
}
