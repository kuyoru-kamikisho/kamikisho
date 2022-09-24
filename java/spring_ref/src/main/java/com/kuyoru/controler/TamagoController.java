package com.kuyoru.controler;

import com.kuyoru.utils.KTool;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.LineIterator;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * @author Kty
 * 请求的参数有v1,v2,h1,h2...
 */
@Slf4j
@RestController
@RequestMapping("/Tamago")
public class TamagoController {
    @PostMapping
    public String net(@RequestParam String type) {
        switch (type) {
            case "v1":
                log.info("v1 has been asked.");
                return KTool.tamago("tamago-key.v1.json");
            case "v2":
                log.info("v2 has been asked.");
                return KTool.tamago("tamago-key.v2.json");
            case "h1":
                log.info("h1 has been asked.");
                return KTool.tamago("tamago-key.h1.json");
            case "h2":
                log.info("h2 has been asked.");
                return KTool.tamago("tamago-key.h2.json");
            default:
                return "Something error";
        }
    }
}
