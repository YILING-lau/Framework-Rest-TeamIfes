package com.softwareconstruction.model;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ExpensesModel {
    private Long Id;
    private Double amount;
    private String categoryLabel;
    private String categoryColor;
}
