package com.todolistspringbootreactfullstack.repository;

import com.todolistspringbootreactfullstack.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
