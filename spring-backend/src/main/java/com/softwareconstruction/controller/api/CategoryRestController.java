package com.softwareconstruction.controller.api;

import com.softwareconstruction.controller.service.CategoryModularService;
import com.softwareconstruction.model.CategoryModel;
import com.softwareconstruction.model.ResponseModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
public class CategoryRestController {
    private final CategoryModularService categoryService;

    @GetMapping("/get-all-category")
    public ResponseModel<List<CategoryModel>> getAllCategory() throws Exception {
        return categoryService.getAllCategory();
    }
}
