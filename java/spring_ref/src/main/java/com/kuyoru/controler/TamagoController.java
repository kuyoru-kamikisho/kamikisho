package com.kuyoru.controler;

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

                return "v1";
            case "v2":
                System.out.println("v2");
                return "v2";
            case "h1":
                System.out.println("h1");
                return "h1";
            case "h2":
                System.out.println("h2");
                return "h2";
            default:
                return "Something error";
        }
    }
}
