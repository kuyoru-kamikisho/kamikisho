package com.kuyoru.utils;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStream;

/**
 * @author Kty
 * <p>
 * SqlSession工具类
 * </p>
 * <p>
 * 默认使用 resources 资源目录下的 mybatis-config.xml 配置文件
 * </p>
 */
public class SqlTools {

    InputStream inputStream;
    SqlSessionFactory sqlSessionFactory;
    SqlSession sqlSession;

    private static final String resource = "mybatis-config.xml";
    private static final Logger log = LoggerFactory.getLogger(SqlTools.class);

    /**
     * <strong>创建sql工具实例</strong>
     * <p>
     * 本工具类使用的配置文件为
     * “mybatis-config.xml”
     * </p>
     */
    public SqlTools() {
        try {
            this.inputStream = Resources.getResourceAsStream(resource);
        } catch (IOException e) {
            log.error("静态资源加载失败，请检查mybatis配置文件是否存在");
            e.printStackTrace();
        }
        this.sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        this.sqlSession = sqlSessionFactory.openSession();
    }

    public SqlSession getSqlSession() {
        return sqlSession;
    }

    public InputStream getInputStream() {
        return inputStream;
    }

    public SqlSessionFactory getSqlSessionFactory() {
        return sqlSessionFactory;
    }

    /**
     * @return 返回使用的配置文件
     */
    public static String getResource() {
        return resource;
    }

    /**
     * <strong>获取Mapper代理</strong>
     *
     * @param aClass 接收一个Mapper接口作为参数
     * @param <T>    您应该传入的class类型应该为接口类
     * @return 返回相应的Mapper代理
     */
    public <T> T getMapperProxy(Class<T> aClass) {
        return (T) this.sqlSession.getMapper(aClass);
    }

    /**
     * 关闭sqlSession
     */
    public void close() {
        this.sqlSession.close();
    }
}
