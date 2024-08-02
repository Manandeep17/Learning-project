package com.example.learningapplication.demo.service;

import com.example.learningapplication.demo.model.Course;
import com.example.learningapplication.demo.model.Student;
import com.example.learningapplication.demo.repos.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepo studentRepo;

    @Override
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public Student login(String email, String password) {
        Student student= studentRepo.findByEmail(email);
        System.out.println(student);
        if(student!=null){
            if(student.getPassword().equals(password)){
                return student;
            }
        }
        return null;
    }

    @Override
    public void makeAdmin(Long id) {
        Student found = studentRepo.findById(id).orElse(null);
        if(found!=null){
            found.setRole(true);
            studentRepo.save(found);
        }
    }

    @Override
    public Student registerCourse(Long cid, Long sid) {
        Student student= studentRepo.findById(sid).orElse(null);
        if(student!=null){
            Course course= new Course();
            course.setId(cid);
            Set<Course> set =student.getCourses();
            set.add(course);
            student.setCourses(set);
            return studentRepo.save(student);
        }
        return null;
    }
}