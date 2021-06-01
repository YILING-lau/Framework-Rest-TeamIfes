package com.softwareconstruction.controller.api;

import com.softwareconstruction.controller.service.ExpensesInfoModularService;
import com.softwareconstruction.model.ExpensesInfoModel;
import com.softwareconstruction.model.ExpensesInfoUpdateModel;
import com.softwareconstruction.model.ResponseModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/expenses-info")
public class ExpensesInfoRestController {
    private final ExpensesInfoModularService expensesInfoService;

    @PostMapping("/create")
    public ResponseModel<String> makeUpdate(@RequestBody ExpensesInfoUpdateModel expensesInfoModel) throws Exception {
        return expensesInfoService.makeUpdate(expensesInfoModel);
    }

    @GetMapping("/id" + "/{Id}")
    public ResponseModel<ExpensesInfoModel> getExpensesById(@PathVariable Long Id){
        return expensesInfoService.getExpensesById(Id);
    }

    @PostMapping("/delete" + "/{Id}")
    public ResponseModel<String> deleteExpensesById(@PathVariable Long Id){
        return expensesInfoService.deleteExpensesById(Id);
    }
}
