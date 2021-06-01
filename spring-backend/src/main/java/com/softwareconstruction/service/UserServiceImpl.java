package com.softwareconstruction.service;

import com.softwareconstruction.domain.dao.UserDao;
import com.softwareconstruction.domain.entity.UserBean;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserDao userDao;

    @Override
    @Transactional(readOnly = true)
    public UserBean getUserById(Long Id) {
        return userDao.findById(Id).get();
    }
}
