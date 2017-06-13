package com.nullpaperexception.almanach.controllers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
public class EmbeddingController {

    @RequestMapping("/oembed")
    String home() {
        return "Graou \\o/ or Waou?";
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(EmbeddingController.class, args);
    }
}