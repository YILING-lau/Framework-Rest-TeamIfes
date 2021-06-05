package com.softwareconstruction.controller.service;

import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ExpensesInfoUpdateModel;
import com.softwareconstruction.model.ExpensesModel;
import com.softwareconstruction.model.ResponseModel;

import java.util.List;

public interface ExpensesInfoModularService {
    ResponseModel<String> makeUpdate(ExpensesInfoUpdateModel expensesInfoModel) throws Exception;
    ResponseModel<ExpensesInfoModel> getExpensesById(Long id);
    ResponseModel<String> deleteExpensesById(Long id);
    ResponseModel<List<ExpensesModel>> getExpensesByUserId(Long userId);
}
