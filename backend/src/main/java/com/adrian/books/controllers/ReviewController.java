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

import com.adrian.books.entity.model.Review;
import com.adrian.books.services.IReviewService;

@RestController
@CrossOrigin(origins = "*")
public class ReviewController {
	@Autowired
    IReviewService reviewService;

    @GetMapping("/review")
    public List<Review> getAllReview(){
        return reviewService.findAll();
    }

    @GetMapping("/review/{review_id}")
    public Review getReviewType(@PathVariable(value = "review_id") long review_id) {
        return reviewService.findOne(review_id);
    }

    @PostMapping("/review")
    public void save(Review review) {
        reviewService.save(review);
    }

    @PutMapping("/review/{review_id}")
    public void update(Review review, @PathVariable(value = "review_id") long review_id) {
        reviewService.update(review, review_id);
    }

    @DeleteMapping("/review/{review_id}")
    public void delete(@PathVariable(value = "review_id") long review_id) {
    	reviewService.delete(review_id);
    }
}
