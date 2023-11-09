package com.adrian.books.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adrian.books.entity.dao.IReviewDao;
import com.adrian.books.entity.model.Review;

@Service
public class ReviewServiceImpl implements IReviewService{
	
	@Autowired
	private IReviewDao reviewDao;
	
	@Override
	public Review findOne(Long review_id) {
		return reviewDao.findById(review_id).get();
	}

	@Override
	public List<Review> findAll() {
		return (List<Review>) reviewDao.findAll();
	}

	@Override
	public void save(Review review) {
		reviewDao.save(review);
	}

	@Override
	public void update(Review review, long review_id) {
		reviewDao.findById(review_id).ifPresent((x) ->{
			review.setReview_id(x.getReview_id());
			reviewDao.save(review);
		});
	}

	@Override
	public void delete(long review_id) {
		reviewDao.deleteById(review_id);
	}
}