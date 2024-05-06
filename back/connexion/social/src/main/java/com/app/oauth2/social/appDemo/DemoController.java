package com.app.oauth2.social.appDemo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/appDemo")
public class DemoController {
    
    @GetMapping
    public ResponseEntity<String> sayhello() {
        return ResponseEntity.ok("Hello World! Ca marche ? askip oue");
    }
}
