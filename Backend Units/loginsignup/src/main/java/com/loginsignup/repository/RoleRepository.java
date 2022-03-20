package com.loginsignup.repository;

import java.util.Optional;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.loginsignup.models.Erole;
import com.loginsignup.models.Role;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
	  Optional<Role> findByName(Erole name);
	}