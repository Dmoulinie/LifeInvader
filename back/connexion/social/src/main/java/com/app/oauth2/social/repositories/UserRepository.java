package com.app.oauth2.social.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.app.oauth2.social.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByid(String id);
    List<User> findByname(String name);
    List<User> findBynode(String node);
    List<User> findByavatar(String avatar);
    List<User> findByhtml(String html);
    
}