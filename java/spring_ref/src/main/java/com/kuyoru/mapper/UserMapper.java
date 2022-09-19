package com.kuyoru.mapper;

import com.kuyoru.pojo.User;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author Kty
 * <p>
 * 用户侧Mapper
 */
@Mapper
public interface UserMapper {

    /**
     * 查询用户信息，所有
     *
     * @return
     */
    @Select("select * from user;")
    @Results(id = "userMap", value = {
            @Result(column = "adm", property = "admin"),
            @Result(column = "pwd", property = "password"),
            @Result(column = "nin", property = "nickName"),
            @Result(column = "sta", property = "status"),
            @Result(column = "wec", property = "wx"),
            @Result(column = "pho", property = "mp"),
    })
    List<User> selectAll();

    /**
     * 根据id查询用户
     *
     * @param id
     * @return
     */
    @Select("select * from user where uid = #{id};")
    @ResultMap("userMap")
    User selectById(@Param("id") int id);

    /**
     * 查询管理员
     * @param b
     * @return
     */
    User selectByAdmin(boolean b);
}
