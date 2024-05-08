package com.app.oauth2.social;

import com.app.oauth2.social.models.User;
import com.app.oauth2.social.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SocialApplication implements CommandLineRunner {

	@Autowired
    private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(SocialApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception {
        // fetch all Albums
        System.out.println("Albums found with findAll():");
        System.out.println("-------------------------------");
        for (User Album : userRepository.findAll()) {
            System.out.println(Album.getName());
        }
        System.out.println();
    }

}
