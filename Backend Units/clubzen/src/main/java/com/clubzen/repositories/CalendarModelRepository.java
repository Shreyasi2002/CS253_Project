package com.clubzen.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.clubzen.models.CalendarModel;

@Repository
public interface CalendarModelRepository extends MongoRepository<CalendarModel, String>{

}
