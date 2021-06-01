package com.softwareconstruction.controller.service;

import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ResponseModel;

public interface ExpensesInfoModularService {
    ResponseModel<String> makeUpdate(ExpensesInfoModel expensesInfoModel) throws Exception;
}
