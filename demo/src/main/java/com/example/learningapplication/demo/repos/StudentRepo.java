package com.example.learningapplication.demo.repos;

import com.example.learningapplication.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepo extends JpaRepository<Student, Long> {
    //@Query("FROM Student where email= :email")
    public Student findByEmail(String email);
}