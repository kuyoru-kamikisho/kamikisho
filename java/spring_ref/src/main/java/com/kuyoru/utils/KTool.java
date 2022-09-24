package com.kuyoru.utils;

import com.kuyoru.controler.TamagoController;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.LineIterator;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * 工具类
 */
public class KTool {

    /**
     * 获取tamago.json并返回其内容
     *
     * @param fileName 直接写名称即可，需要加后缀，例：a.json
     * @return 返回文件中的内容
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
            System.out.println(e.getMessage());
        }

        return sb.toString();
    }
}
