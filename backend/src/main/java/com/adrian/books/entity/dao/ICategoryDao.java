package com.adrian.books.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.adrian.books.entity.model.Category;

public interface ICategoryDao extends CrudRepository<Category, Long>{

}