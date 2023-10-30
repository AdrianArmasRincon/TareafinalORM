package com.adrian.books.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.adrian.books.services.ICategoryService;

import com.adrian.books.entity.model.Category;

@RestController
@CrossOrigin(origins = "*")
public class CategoryController {

	@Autowired
    ICategoryService categoryService;

    @GetMapping("/category")
    public List<Category> getAllCategory(){
        return categoryService.findAll();
    }

    @GetMapping("/category/{category_id}")
    public Category getAnimalType(@PathVariable(value = "category_id") long category_id) {
        return categoryService.findOne(category_id);
    }

    @PostMapping("/category")
    public void save(Category category) {
        categoryService.save(category);
    }

    @PutMapping("/category/{category_id}")
    public void update(Category category, @PathVariable(value = "category_id") long category_id) {
        categoryService.update(category, category_id);
    }

    @DeleteMapping("/category/{category_id}")
    public void delete(@PathVariable(value = "category_id") long category_id) {
        categoryService.delete(category_id);
    }
    
}
