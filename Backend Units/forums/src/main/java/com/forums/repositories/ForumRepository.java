package com.forums.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.forums.models.ForumModel;

@Repository
public interface ForumRepository extends MongoRepository<ForumModel, String>{

}
