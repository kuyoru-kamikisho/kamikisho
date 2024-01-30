package com.example.kzu;

import com.example.kzu.util.EnvironmentCoreC;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KzuApplication {
    private static final Logger logger = LoggerFactory.getLogger(KzuApplication.class);
    public static void main(String[] args) {
        SpringApplication.run(KzuApplication.class, args);
        logger.info("Application start success.");
        logger.info(EnvironmentCoreC.currentPath);
        logger.info(EnvironmentCoreC.getProgramPath());
    }
}
