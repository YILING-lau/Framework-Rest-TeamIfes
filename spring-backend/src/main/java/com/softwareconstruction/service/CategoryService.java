package com.softwareconstruction.service;

import com.softwareconstruction.domain.entity.CategoryBean;

import java.util.List;

public interface CategoryService {
    CategoryBean getCategoryById (String Id);
    List<CategoryBean> getAllCategory();
}
