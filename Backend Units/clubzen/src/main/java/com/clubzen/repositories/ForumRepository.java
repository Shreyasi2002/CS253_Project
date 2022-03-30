package com.clubzen.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.clubzen.models.ForumModel;

@Repository
public interface ForumRepository extends MongoRepository<ForumModel, String>{

}
