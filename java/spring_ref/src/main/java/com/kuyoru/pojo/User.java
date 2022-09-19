package com.kuyoru.pojo;

/**
 * @author Kty
 *
 * 用户实体类
 */
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

    public User() {
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getQq() {
        return qq;
    }

    public void setQq(String qq) {
        this.qq = qq;
    }

    public String getWx() {
        return wx;
    }

    public void setWx(String wx) {
        this.wx = wx;
    }

    public String getMp() {
        return mp;
    }

    public void setMp(String mp) {
        this.mp = mp;
    }

    @Override
    public String toString() {
        return "用户：{ " +
                "uid=" + uid +
                ", admin=" + admin +
                ", password='" + password + '\'' +
                ", nickName='" + nickName + '\'' +
                ", status=" + status +
                ", qq='" + qq + '\'' +
                ", wx='" + wx + '\'' +
                ", mp='" + mp + '\'' +
                " }";
    }
}
