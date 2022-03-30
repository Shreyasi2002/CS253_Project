package com.clubzen.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.clubzen.models.NewsandeventsModel;


@Repository
public interface NewsandeventsRepository extends MongoRepository<NewsandeventsModel, String>{

}
