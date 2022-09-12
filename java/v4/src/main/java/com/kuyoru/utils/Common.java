package com.kuyoru.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author Kty
 * 通用工具类，类中只允许写静态方法
 */
public class Common {
    public static Logger logback(Class aClass){
        final Logger log = LoggerFactory.getLogger(aClass);
        return log;
    }
}
