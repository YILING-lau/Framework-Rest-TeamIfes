package com.softwareconstruction.service;

import com.softwareconstruction.domain.dao.UserDao;
import com.softwareconstruction.domain.entity.UserBean;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserDetailsService, UserService {

    private final UserDao userDao;

    @Override
    @Transactional(readOnly = true)
    public UserBean getUserById(Long Id) {
        return userDao.findById(Id).get();
    }

    @Override
    @Transactional(readOnly = true)
    public UserBean getUserByEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    @Transactional
    public void makeUpdate(UserBean userBean) {
        userDao.save(userBean);
    }

    @Override
    public boolean isEmailUnique(String email) {
//        if(email.isEmpty()) return false;
        UserDetails details = userDao.findByEmail(email);
        return details == null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDao.findByEmail(username);
    }
}
