package com.porholdersdirectories.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.porholdersdirectories.models.porHolderModel;

@Repository
public interface porHolderModelRepository extends MongoRepository<porHolderModel, String>{

}
