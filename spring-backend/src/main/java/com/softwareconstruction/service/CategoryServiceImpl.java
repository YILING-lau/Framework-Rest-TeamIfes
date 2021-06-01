package com.softwareconstruction.service;

import com.softwareconstruction.domain.dao.CategoryDao;
import com.softwareconstruction.domain.entity.CategoryBean;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryDao categoryDao;

    @Override
    @Transactional(readOnly = true)
    public CategoryBean getCategoryById(String Id) {
        return categoryDao.findById(Id).get();
    }
}
