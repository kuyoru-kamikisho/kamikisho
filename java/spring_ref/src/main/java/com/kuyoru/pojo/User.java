package com.kuyoru.pojo;

import lombok.Data;

/**
 * @author Kty
 *
 * 用户实体类
 */
@Data
public class User {
    private Integer uid;
    private Boolean admin;
    private String password;
    private String nickName;
    private Boolean status;
    private String qq;
    private String wx;
    private String mp;

    /**
     * 输入一个任意值，该构造器将唯一指定对象为初始化占位实例。
     * <br>传入的参数将会成为uid的值，保证即使出错也会得到一目了然的返回值。
     * @param k any
     */
    public User(int k) {
        this.uid=k;
        this.admin = false;
        this.password = "error";
        this.nickName = "error";
        this.status = false;
        this.qq = "error";
        this.wx = "error";
        this.mp = "error";
    }

}
