package com.softwareconstruction.controller.service;

import com.softwareconstruction.model.ResponseModel;
import com.softwareconstruction.model.UserModel;

public interface AuthModularService {
    ResponseModel<String> makeUpdate(UserModel userModel);
}
