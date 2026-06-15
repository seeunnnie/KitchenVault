package com.kitchenvault.backend.repository;

import com.kitchenvault.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}