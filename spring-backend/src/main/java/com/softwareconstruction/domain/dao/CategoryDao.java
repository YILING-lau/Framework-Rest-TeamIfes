package com.softwareconstruction.domain.dao;

import com.softwareconstruction.domain.entity.CategoryBean;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryDao extends CrudRepository<CategoryBean, String> {
    List<CategoryBean> findAll();
}
