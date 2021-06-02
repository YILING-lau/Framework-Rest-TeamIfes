package com.softwareconstruction.domain.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "EXPENSE_INFO")
public class ExpensesInfoBean implements Serializable{

    private static final long serialVersionUID = -204719885960204229L;
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "AMOUNT")
    private Double amount;

    @Column(name = "TIME_STAMP")
    private LocalDateTime timeStamp = LocalDateTime.now();

    @ManyToOne(optional = false)
    @JoinColumn(name = "USER_ID", referencedColumnName = "ID")
    private UserBean userBean;

    @ManyToOne()
    @JoinColumn(name = "CATEGORY_ID", referencedColumnName = "CATEGORY_ID")
    private CategoryBean categoryBean;
}
