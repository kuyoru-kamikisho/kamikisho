package com.kuyoru.controler;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *  Rest模式
 */
@RestController
@RequestMapping("/v4")
public class BookControler {

    @GetMapping
    public String getById(){
        System.out.println("spring hello");
        return "spring hello.";
    }
}
