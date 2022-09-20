package com.kuyoru.service.impl;

import com.kuyoru.mapper.UserMapper;
import com.kuyoru.pojo.User;
import com.kuyoru.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public Boolean save(User user) {
        return null;
    }

    @Override
    public Boolean update(User user) {
        return null;
    }

    @Override
    public Boolean delete(User user) {
        return null;
    }

    @Override
    public List<User> getAll() {
        return null;
    }

    @Override
    public User query(Integer id, String pwd) {
        User user = userMapper.selectById(id);
        return user;
    }
}
