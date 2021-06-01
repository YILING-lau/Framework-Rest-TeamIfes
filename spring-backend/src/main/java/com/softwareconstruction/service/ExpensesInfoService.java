package com.softwareconstruction.service;

import com.softwareconstruction.domain.entity.ExpensesInfoBean;

public interface ExpensesInfoService {
    void makeUpdate(ExpensesInfoBean expensesInfoBean);
    ExpensesInfoBean getExpensesById (Long Id);
    void deleteExpensesById(Long id);
}
