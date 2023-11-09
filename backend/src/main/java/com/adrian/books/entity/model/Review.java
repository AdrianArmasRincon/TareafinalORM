package com.adrian.books.entity.model;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "book_reviews")
public class Review implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Valor autoincrementado
	private long review_id;// PK tabla

	private String rating;
	
	@JsonIgnore
    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL)
    private List<Book> books;

	// GETTER Y SETTERS
	public long getReview_id() {
		return review_id;
	}
	
	public void setReview_id(long review_id) {
		this.review_id = review_id;
	}
	
	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public List<Book> getBooks(){
		return books;
	}
	
	public void setBooks(List<Book> books)  {
		this.books = books;
	}
	
	// CONSTRUCTOR
	public Review(String rating) {
		super();
		this.rating = rating;
	}
	
	// Constructor vacio (necesario)
	public Review() {
		
	}	
}