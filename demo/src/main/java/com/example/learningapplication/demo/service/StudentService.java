package com.example.learningapplication.demo.service;

import com.example.learningapplication.demo.model.Student;

import java.util.List;

public interface StudentService {
    public List<Student> getAllStudents();
    public Student saveStudent(Student student);
    public Student login(String email, String password);
    public void makeAdmin(Long id);
    public Student registerCourse(Long cid,Long sid);
}