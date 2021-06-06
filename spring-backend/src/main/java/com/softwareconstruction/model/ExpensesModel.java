package com.softwareconstruction.model;

import lombok.Data;

@Data
public class ExpensesModel {
    private Long Id;
    private Double amount;
    private String categoryLabel;
    private String categoryColor;
    private String date;
}
