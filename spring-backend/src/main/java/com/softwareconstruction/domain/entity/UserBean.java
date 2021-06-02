package com.softwareconstruction.domain.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "USER")
public class UserBean implements Serializable {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(mappedBy = "userBean")
    private List<ExpensesInfoBean> expensesInfoBeanList;
}
