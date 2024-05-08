package com.app.oauth2.social.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
    .csrf()
    .disable()
    .authorizeRequests()
        .requestMatchers("/github/connect").authenticated() // Specify the URL you want to protect
        .anyRequest().permitAll() // Allow all other requests
        .and()
        .oauth2Login()
    ;
    return http.build();
  }
}
