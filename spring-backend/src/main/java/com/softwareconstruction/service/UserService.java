package com.softwareconstruction.service;

import com.softwareconstruction.domain.entity.UserBean;

public interface UserService {
    UserBean getUserById (Long Id);
    UserBean getUserByEmail(String email);
    void makeUpdate(UserBean userBean);
    boolean isEmailUnique(String email);
}
