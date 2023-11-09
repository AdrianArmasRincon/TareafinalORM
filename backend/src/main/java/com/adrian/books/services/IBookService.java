package com.adrian.books.services;

import java.util.List;

import com.adrian.books.entity.model.Book;

public interface IBookService {
	
	public Book findOne(Long id);
    public List<Book> findAll();
    public List<Book> getAllBooksByCategoryId(long category_id);
    public List<Book> getAllBooksByReviewId(long review_id);
    public void save(Book book);
    public void saveBookInCategoryByCategoryId(Book book, long category_id);
    public void saveBookInReviewByReviewId(Book book, long review_id);
    public void update(Book book, long id);
    public void delete(long id);

    public void addCategoryToBook(long category_id, long id);
    public void addBookTypeToBook(long book_type_id, long id);
}
