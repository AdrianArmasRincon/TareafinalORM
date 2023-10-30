package com.adrian.books.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adrian.books.entity.model.Book;
import com.adrian.books.entity.model.Category;

import com.adrian.books.entity.dao.ICategoryDao;

@Service
public class CategoryServiceImpl implements ICategoryService{
	
	@Autowired
	private ICategoryDao categoryDao;
	@Override
	public Category findOne(Long category_id) {
		return categoryDao.findById(category_id).get();
	}

	@Override
	public List<Category> findAll() {
		return (List<Category>) categoryDao.findAll();
	}

	@Override
	public void save(Category category) {
		categoryDao.save(category);
		
	}

	@Override
	public void update(Category category, long category_id) {
		categoryDao.findById(category_id).ifPresent((x) ->{
			category.setCategory_id(x.getCategory_id());
			categoryDao.save(category);
		});
		
	}

	@Override
	public void delete(long category_id) {
		categoryDao.deleteById(category_id);
	}
}
