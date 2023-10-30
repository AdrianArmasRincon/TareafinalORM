package com.adrian.books.services;

import java.util.List;

import com.adrian.books.entity.model.Book;

public interface IBookService {
	
	public Book findOne(Long book_id);
    public List<Book> findAll();
    public List<Book> getAllBooksByCategoryId(long category_id);
    public List<Book> getAllBooksByReviewId(long review_id);
    public void save(Book book);
    public void saveBookInCategoryByCategoryId(Book book, long category_id);
    public void saveBookInBookTypeByReviewId(Book book, long review_id);
    public void update(Book book, long book_id);
    public void delete(long book_id);

    public void addCategoryToBook(long category_id, long book_id);
    public void addBookTypeToBook(long book_type_id, long book_id);
}
