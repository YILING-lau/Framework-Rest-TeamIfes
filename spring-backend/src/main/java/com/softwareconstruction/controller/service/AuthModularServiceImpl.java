package com.softwareconstruction.controller.service;

import com.softwareconstruction.domain.entity.UserBean;
import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.model.UserModel;
import com.softwareconstruction.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthModularServiceImpl implements AuthModularService {
    private final UserService userService;

    @Override
    public ResponseModel<String> makeUpdate(UserModel userModel) {
        final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        if (userService.isEmailUnique(userModel.getEmail())) {
            UserBean userBean = new UserBean();
            userBean.setName(userModel.getName());
            userBean.setEmail(userModel.getEmail());
            userBean.setPassword(encoder.encode(userModel.getPassword()));
            userService.makeUpdate(userBean);
            return null;
        }
        return new ResponseModel<String>().fail("The email already exists, please try again");
    }
}