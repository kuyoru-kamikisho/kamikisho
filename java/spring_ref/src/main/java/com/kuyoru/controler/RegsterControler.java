package com.kuyoru.controler;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Register")
public class RegsterControler {
    @PostMapping
    public boolean add(
            @RequestParam String userName,
            @RequestParam String password,
            @RequestParam String pwdCheck ,
            @RequestParam String mailAddress ,
            @RequestParam String feedbackMethod ,
            @RequestParam String deadLine ,
            @RequestParam String illustType ,
            @RequestParam String background ,
            @RequestParam String budget ,
            @RequestParam String authorizedRelease ,
            @RequestParam String maskType ,
            @RequestParam String paymentInstrument ,
            @RequestParam String imgFormat ,
            @RequestParam String comments
            ){
        System.out.println(userName);
        return false;
    }
}
