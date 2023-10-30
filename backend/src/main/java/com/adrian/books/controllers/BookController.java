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

import com.adrian.books.entity.model.Book;
import com.adrian.books.services.IBookService;

@RestController
@CrossOrigin(origins = "*")
public class BookController {
	
	@Autowired
	IBookService bookService;
	
	
	@GetMapping("/books")
	public List<Book> getAllBook(){
		return bookService.findAll();
	}
	
	@GetMapping("/books/{id}")
	public Book getBook(@PathVariable(value = "id") long id) {
		return bookService.findOne(id);
	}
	
	@GetMapping("/book_categories/{category_id}/book")
	public List<Book> getAllBooksByCategoryId(@PathVariable (value = "category_id") Long category_id){
		return bookService.getAllBooksByCategoryId(category_id);
	}
	
	@GetMapping("/book_reviews/{review_id}/book")
	public List<Book> getAllBooksReviewId(@PathVariable (value = "review_id") Long review_id){
		return bookService.getAllBooksByReviewId(review_id);
	}
	
	@PostMapping("/book")
	public void save(Book book) {
		bookService.save(book);
	}

	@PostMapping("/book/{id}/category/{category_id}")
	public void addcategoryToBook(@PathVariable(value = "category_id") long category_id, @PathVariable(value = "id") long id) {
		bookService.addCategoryToBook(category_id, id);
	}
	
	@PostMapping("/book/{id}/booktype/{review_id}")
	public void addReviewToBook(@PathVariable(value = "review_id") long review_id, @PathVariable(value = "id") long id) {
		bookService.addBookTypeToBook(review_id, id);
	}
	
	
	@PutMapping("/book/{id}")
	public void update(Book book, @PathVariable(value = "id") long id) {
		bookService.update(book, id);
	}
	
	@DeleteMapping("/book/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		bookService.delete(id);
	}
}