package com.softwareconstruction.domain.dao;

import com.softwareconstruction.domain.entity.CategoryBean;
import org.springframework.data.repository.CrudRepository;

public interface CategoryDao extends CrudRepository<CategoryBean, String> {
}
