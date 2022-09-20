package com.kuyoru.controler;

import com.kuyoru.mapper.UserMapper;
import com.kuyoru.pojo.User;
import com.kuyoru.service.UserService;
import com.kuyoru.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 *  Rest模式
 */
@RestController
@RequestMapping("/Login")
public class LoginControler {
    @Autowired
    private UserMapper userMapper;

    @PostMapping()
    public User query(@RequestParam String queryId,@RequestParam String queryPwd){
        int id = Integer.parseInt(queryId);
        User user = userMapper.selectById(id);
        if (user!=null&&user.getPassword().equals(queryPwd)){
            return user;
        }
        return new User(0);
    }
}
