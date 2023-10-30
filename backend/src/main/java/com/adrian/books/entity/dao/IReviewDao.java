package com.adrian.books.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.adrian.books.entity.model.Review;

public interface IReviewDao extends CrudRepository<Review, Long>{

}