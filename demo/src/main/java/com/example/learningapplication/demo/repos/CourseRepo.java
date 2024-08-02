package com.example.learningapplication.demo.repos;

import com.example.learningapplication.demo.model.Course;
import com.example.learningapplication.demo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepo extends JpaRepository<Course, Long> {
    public Course findByTitle(String title);
}