package com.softwareconstruction.controller.service;

import com.softwareconstruction.domain.entity.CategoryBean;
import com.softwareconstruction.model.CategoryModel;
import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class CategoryModularServiceImpl implements CategoryModularService {
    private final CategoryService categoryService;

    @Override
    public ResponseModel<List<CategoryModel>> getAllCategory() throws Exception {
        List<CategoryBean> categoryBeanList = categoryService.getAllCategory();
        List<CategoryModel> categoryModelList = categoryBeanList.stream().map(
                categoryBean -> {
                    CategoryModel model = new CategoryModel();
                    model.setId(categoryBean.getCategoryId());
                    model.setLabel(categoryBean.getLabel());
                    model.setColor(categoryBean.getColor());
                    return model;
                }
        ).collect(Collectors.toList());

        return new ResponseModel<List<CategoryModel>>().success(categoryModelList);
    }
}
