package com.newsandevents.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.newsandevents.models.Newsandevents;


@Repository
public interface NewsandeventsRepository extends MongoRepository<Newsandevents, String>{

}
