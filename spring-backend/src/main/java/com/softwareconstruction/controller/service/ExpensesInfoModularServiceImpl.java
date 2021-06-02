package com.softwareconstruction.controller.service;

import com.softwareconstruction.domain.entity.CategoryBean;
import com.softwareconstruction.domain.entity.ExpensesInfoBean;
import com.softwareconstruction.domain.entity.UserBean;
import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ExpensesInfoUpdateModel;
import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.service.CategoryService;
import com.softwareconstruction.service.ExpensesInfoService;
import com.softwareconstruction.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ExpensesInfoModularServiceImpl implements ExpensesInfoModularService {
    private final ExpensesInfoService expensesInfoService;
    private final CategoryService categoryService;
    private final UserService userService;

    @Override
    public ResponseModel<String> makeUpdate(ExpensesInfoUpdateModel expensesInfoModel) throws Exception {
        validateExpensesInput(expensesInfoModel);
        ExpensesInfoBean expensesInfoBean = new ExpensesInfoBean();
        CategoryBean categoryBean = categoryService.getCategoryById(expensesInfoModel.getCategoryId());
        UserBean userBean = userService.getUserById(expensesInfoModel.getUserId());

        userBean.setId(expensesInfoModel.getUserId());
        expensesInfoBean.setAmount(expensesInfoModel.getAmount());
        expensesInfoBean.setCategoryBean(categoryBean);
        expensesInfoBean.setUserBean(userBean);
        expensesInfoService.makeUpdate(expensesInfoBean);
        return null;
    }

    @Override
    public ResponseModel<ExpensesInfoModel> getExpensesById(Long id) {
        ExpensesInfoBean expensesInfoBean = expensesInfoService.getExpensesById(id);
        ExpensesInfoModel expensesInfoModel = new ExpensesInfoModel();
        expensesInfoModel.setAmount(expensesInfoBean.getAmount());
        expensesInfoModel.setId(expensesInfoBean.getId());
        expensesInfoModel.setTimeStamp(expensesInfoBean.getTimeStamp());
        return new ResponseModel<ExpensesInfoModel>().success(expensesInfoModel);
    }

    @Override
    public ResponseModel<String> deleteExpensesById(Long id) {
        expensesInfoService.deleteExpensesById(id);
        return new ResponseModel<String>().success("expenses.voided");
    }

    private void validateExpensesInput(ExpensesInfoUpdateModel expensesInfoModel) throws Exception {
        if (Double.isNaN(expensesInfoModel.getAmount()))
            throw new Exception("Exception");
    }
}
