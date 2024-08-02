package com.example.learningapplication.demo.service;

import com.example.learningapplication.demo.model.Course;

import java.util.List;

public interface CourseService {
    public List<Course> getAllCourses();
    public Course saveCourse(Course course);

    public Course updateCourse(Course course, Long id);
    public boolean deleteCourseByName(String title);

}