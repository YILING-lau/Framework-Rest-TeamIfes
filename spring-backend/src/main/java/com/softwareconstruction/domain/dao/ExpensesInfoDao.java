package com.softwareconstruction.domain.dao;

import com.softwareconstruction.domain.entity.ExpensesInfoBean;
import org.springframework.data.repository.CrudRepository;

public interface ExpensesInfoDao extends CrudRepository<ExpensesInfoBean, String> {
}
