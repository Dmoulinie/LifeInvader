package com.app.oauth2.social.config;

import org. springframework.context.annotation. Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
            .allowedOrigins("http://localhost:5173")
            .allowedMethods("GET", "POST", "PUT", "DELETE")
            .allowedHeaders("*")
            .exposedHeaders ("Access-Control-Allow-Origin", "Access-Control-Allow-Headers")
            .allowCredentials (true)
            .maxAge(3600);
        }
}