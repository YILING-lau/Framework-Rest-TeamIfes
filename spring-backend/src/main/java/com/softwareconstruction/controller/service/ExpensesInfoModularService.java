package com.softwareconstruction.controller.service;

import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ExpensesInfoUpdateModel;
import com.softwareconstruction.model.ResponseModel;

public interface ExpensesInfoModularService {
    ResponseModel<String> makeUpdate(ExpensesInfoUpdateModel expensesInfoModel) throws Exception;
    ResponseModel<ExpensesInfoModel> getExpensesById(Long id);
    ResponseModel<String> deleteExpensesById(Long id);
}
