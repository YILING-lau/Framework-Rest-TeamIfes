package com.softwareconstruction.domain.dao;

import com.softwareconstruction.domain.entity.ExpensesInfoBean;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ExpensesInfoDao extends CrudRepository<ExpensesInfoBean, Long> {
    List<ExpensesInfoBean> findAllByUserBean_Id(Long userId);
}
