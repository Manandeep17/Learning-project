package com.example.learningapplication.demo.controllers;

import com.example.learningapplication.demo.model.Course;
import com.example.learningapplication.demo.model.Student;
import com.example.learningapplication.demo.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getAllCourses(){
        return courseService.getAllCourses();
    }
    @PostMapping
    public Course createCourse(@RequestBody Course course){
        return courseService.saveCourse(course);
    }

    @DeleteMapping("{title}")
    public ResponseEntity<String> deleteCourse(@RequestBody Course course){
        if (courseService.deleteCourseByName(course.getTitle()))
            return new ResponseEntity<>("Course Deleted", HttpStatus.OK);
        return new ResponseEntity<>("No Course Found to delete", HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateCourse(@PathVariable Long id, @RequestBody Course course){
        Course updated= courseService.updateCourse(course,id);
        if(updated==null){
            return  new ResponseEntity<>("No Course Found to update",HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(updated,HttpStatus.OK);
    }
//    public Course updateCourse(@RequestBody Course course){
//        return courseService.saveCourse(course);
//    }
}