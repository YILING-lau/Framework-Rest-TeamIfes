package com.softwareconstruction.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ExpensesInfoModel {
    private Long Id;
    private Double amount;
    private LocalDateTime timeStamp;
}
