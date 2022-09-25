package com.kuyoru.utils;

import com.kuyoru.controler.TamagoController;
import com.kuyoru.mapper.TamagoMapper;
import com.kuyoru.pojo.Tamago;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.LineIterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * 工具类
 *
 * @author Kty
 */
@Slf4j
public class KTool {

    /**
     * 获取tamago.json并返回其内容
     *
     * @param fileName 直接写名称即可，需要加后缀，例：a.json
     * @return 返回文件中的内容
     * @apiNote 本方法仅适用Tamago
     */
    public static String tamago(String fileName) {
        StringBuilder sb = null;
        try {
            sb = new StringBuilder();
            File v1 = new File(TamagoController.class.getResource("").getPath() + "/" + fileName);
            List<String> lines = FileUtils.readLines(v1, "UTF-8");
            LineIterator it = FileUtils.lineIterator(v1, "UTF-8");
            while (it.hasNext()) {
                String line = it.nextLine();
                sb.append(line + "\n");
            }
        } catch (IOException e) {
            log.info(e.getMessage());
        }
        return sb.toString();
    }

}
