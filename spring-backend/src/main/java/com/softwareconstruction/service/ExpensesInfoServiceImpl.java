package com.softwareconstruction.service;

import com.softwareconstruction.domain.dao.ExpensesInfoDao;
import com.softwareconstruction.domain.entity.ExpensesInfoBean;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExpensesInfoServiceImpl implements ExpensesInfoService {
    private final ExpensesInfoDao expensesInfoDao;

    @Override
    @Transactional
    public void makeUpdate(ExpensesInfoBean expensesInfoBean) {
        expensesInfoDao.save(expensesInfoBean);
    }

    @Override
    @Transactional(readOnly = true)
    public ExpensesInfoBean getExpensesById(Long Id) {
        return expensesInfoDao.findById(Id).get();
    }

    @Override
    @Transactional
    public void deleteExpensesById(Long id) {
        expensesInfoDao.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<ExpensesInfoBean> getExpensesByUserId(Long userId) {
        return expensesInfoDao.findAllByUserBean_Id(userId);
    }
}
