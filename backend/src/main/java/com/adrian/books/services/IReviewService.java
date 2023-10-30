package com.adrian.books.services;

import java.util.List;

import com.adrian.books.entity.model.Review;

public interface IReviewService {
	public Review findOne(Long review_id);
    public List<Review> findAll();
    public void save(Review review);
    public void update(Review review, long review_id);
    public void delete(long review_id);
}
