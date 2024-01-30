package com.example.kzu.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ping")
public class RestPingC {
    @GetMapping
    public String getPing() {
        return "alive";
    }

    @GetMapping("/{status}")
    public String getPingByStatus(@PathVariable String status) {
        return "alive: " + status;
    }
}
