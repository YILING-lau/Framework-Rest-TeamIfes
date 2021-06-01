package com.softwareconstruction.controller.service;

import com.softwareconstruction.domain.entity.ExpensesInfoBean;
import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.service.ExpensesInfoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ExpensesInfoModularServiceImpl implements ExpensesInfoModularService {
    private final ExpensesInfoService expensesInfoService;

    @Override
    public ResponseModel<String> makeUpdate(ExpensesInfoModel expensesInfoModel) throws Exception {
        validateExpensesInput(expensesInfoModel);
        ExpensesInfoBean expensesInfoBean = new ExpensesInfoBean();
        expensesInfoBean.setAmount(expensesInfoModel.getAmount());
        expensesInfoService.makeUpdate(expensesInfoBean);
        return null;
    }

    private void validateExpensesInput(ExpensesInfoModel expensesInfoModel) throws Exception {
        if (Double.isNaN(expensesInfoModel.getAmount()))
            throw new Exception("Exception");
    }
}
