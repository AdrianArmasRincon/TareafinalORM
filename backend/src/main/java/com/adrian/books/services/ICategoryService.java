package com.adrian.books.services;

import java.util.List;

import com.adrian.books.entity.model.Category;

public interface ICategoryService {
	public Category findOne(Long category_id);
    public List<Category> findAll();
    public void save(Category category);
    public void update(Category category, long category_id);
    public void delete(long category_id);
}
