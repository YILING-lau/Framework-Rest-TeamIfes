package com.softwareconstruction.service;

import com.softwareconstruction.domain.entity.ExpensesInfoBean;

import java.util.List;

public interface ExpensesInfoService {
    void makeUpdate(ExpensesInfoBean expensesInfoBean);
    ExpensesInfoBean getExpensesById (Long Id);
    void deleteExpensesById(Long id);
    List<ExpensesInfoBean> getExpensesByUserId (Long userId);
}
