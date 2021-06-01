package com.softwareconstruction.domain.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name= "CATEGORY")
public class CategoryBean implements Serializable {

    @Id
    @Column(name = "CATEGORY_ID")
    private String categoryId;

    @Column(name = "LABEL")
    private String label;

    @Column(name = "COLOR")
    private String color;

    @OneToMany(mappedBy = "categoryBean")
    private List<ExpensesInfoBean> expensesInfoBeanList;
}
