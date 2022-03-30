package com.clubzen.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.clubzen.models.porHolderModel;

@Repository
public interface porHolderModelRepository extends MongoRepository<porHolderModel, String>{

}
