package com.softwareconstruction.domain.dao;

import com.softwareconstruction.domain.entity.UserBean;
import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<UserBean, Long> {
    UserBean findByEmail(String email);
}
