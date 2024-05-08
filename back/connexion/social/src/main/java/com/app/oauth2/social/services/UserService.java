package com.app.oauth2.social.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.app.oauth2.social.models.User;
import com.app.oauth2.social.repositories.UserRepository;

public class UserService {
    @Autowired
    private UserRepository repository;

    public void saveUser(User user) {
        repository.save(user);
    }
    public User getUser(String id) {
        return repository.findById(id).orElse(null);
    }
    public List<User> getAllUsers(){
        return repository.findAll();
    }
    public void deleteUser(String id) {
        repository.deleteById(id);
    }
}
