package com.softwareconstruction.service;

import com.softwareconstruction.domain.dao.ExpensesInfoDao;
import com.softwareconstruction.domain.entity.ExpensesInfoBean;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ExpensesInfoServiceImpl implements ExpensesInfoService {
    private final ExpensesInfoDao expensesInfoDao;

    @Override
    public void makeUpdate(ExpensesInfoBean expensesInfoBean) {
        expensesInfoDao.save(expensesInfoBean);
    }
}
