package com.softwareconstruction.controller.api;

import com.softwareconstruction.controller.service.AuthModularService;
import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.model.UserModel;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class AuthRestController {
    private final AuthModularService authService;

    @PostMapping("/create")
    public ResponseModel<String> makeUpdate(@RequestBody UserModel userModel) throws Exception {
        return authService.makeUpdate(userModel);
    }
}