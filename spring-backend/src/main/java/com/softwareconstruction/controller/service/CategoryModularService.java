package com.softwareconstruction.controller.service;

import com.softwareconstruction.model.CategoryModel;
import com.softwareconstruction.model.ResponseModel;

import java.util.List;

public interface CategoryModularService {
    ResponseModel<List<CategoryModel>> getAllCategory() throws Exception;
}
