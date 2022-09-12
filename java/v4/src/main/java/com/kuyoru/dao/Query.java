package com.kuyoru.dao;

import com.kuyoru.mapper.UserMapper;
import com.kuyoru.pojo.User;
import com.kuyoru.utils.SqlTools;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Kty
 * 查询管理器
 */
public class Query {
    private static final Logger log = LoggerFactory.getLogger(Query.class);

    public static User selectById(String uid, String pwd) {
        int id = Integer.parseInt(uid);
        SqlTools sqlTools = new SqlTools();
        UserMapper userMapper = sqlTools.getMapperProxy(UserMapper.class);

        try {
            log.info("正在查询id为 " + id + "的用户......");
            User user = userMapper.selectById(id);
            if (user != null) {
                log.info("已查询到该用户，开始验证密码...");
                if (user.getPassword().equals(pwd)) {
                    log.info("密码验证成功.");
                    return user;
                } else {
                    log.info("密码验证失败.");
                    return new User();
                }
            } else {
                log.info("ID为" + id + "的用户不存在...");
                return new User();
            }
        } catch (Exception e) {
            log.info("意料之外的错误.");
            log.info(e.getMessage());
            return new User(1);
        } finally {
            sqlTools.close();
        }
    }

}
