package com.loginsignup.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.loginsignup.models.UserModel;


@Repository
public interface UserRepository extends MongoRepository<UserModel, String> {
    
}