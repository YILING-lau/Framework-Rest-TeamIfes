package com.softwareconstruction.controller.api;

import com.softwareconstruction.controller.service.ExpensesInfoModularService;
import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ResponseModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/expenses-info")
public class ExpensesInfoRestController {
    private final ExpensesInfoModularService expensesInfoService;

    @PostMapping("/create")
    public ResponseModel<String> makeUpdate(@RequestBody ExpensesInfoModel expensesInfoModel) throws Exception {
        System.out.println(expensesInfoModel.getAmount());
        System.out.println("Testing");

        return null;
//        return expensesInfoService.makeUpdate(expensesInfoModel);
    }
}
