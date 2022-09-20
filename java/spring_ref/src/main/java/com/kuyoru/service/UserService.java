package com.kuyoru.service;

import com.kuyoru.pojo.User;

import java.util.List;

/**
 * @author Kty
 * 用户业务接口
 */
public interface UserService {
    Boolean save(User user);
    Boolean update(User user);
    Boolean delete(User user);
    List<User> getAll();
    User query(Integer id,String pwd);
}
