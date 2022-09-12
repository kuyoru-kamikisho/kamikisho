import com.kuyoru.mapper.UserMapper;
import com.kuyoru.pojo.User;
import com.kuyoru.utils.SqlTools;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.lang.NonNull;

import java.util.List;

public class MyTest {

    private static final Logger log = LoggerFactory.getLogger(MyTest.class);


    @Test
    public void testSelectAll() {
        SqlTools sqlTools = new SqlTools();
        UserMapper userMapper = sqlTools.getMapperProxy(UserMapper.class);

        //4. 执行方法
        try {
            log.info("管理员：" + userMapper.selectById(100011).isAdmin());
        } catch (Exception e) {
            log.info("不存在");
            log.info(e.getMessage());
        }

        List<User> userList = userMapper.selectAll();
        log.info(userList.get(0).getNickName());

        User notadmin = userMapper.selectByAdmin(false);
        if (notadmin != null) {
            log.info(notadmin.getPassword());
        } else {
            log.info("查询不到");
        }

        //5. 释放资源
        sqlTools.close();
        sqlTools = null;

    }


    public static User selectByID(String uid, String pwd) {
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

    @Test
    public void test() {
        User user = selectByID("10001", "kuyou.0");
        log.info(user.toString());
    }
}
