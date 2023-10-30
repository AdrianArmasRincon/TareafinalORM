package com.adrian.books.entity.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.adrian.books.entity.model.Book;


public interface IBookDao extends CrudRepository<Book, Long>{
	@Query("select b from Book b where b.id = :id")
    List<Book> findByCategoryId(@Param("id") long category_id);
	
	@Query("select b from Book b where b.id = :id")
    List<Book> findByReviewId(@Param("id") long review_id);
}
