package com.adrian.books.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adrian.books.entity.dao.IBookDao;
import com.adrian.books.entity.dao.ICategoryDao;
import com.adrian.books.entity.dao.IReviewDao;
import com.adrian.books.entity.model.Book;

@Service
public class BookServiceImpl implements IBookService{
	
	@Autowired
	private IBookDao bookDao;
	
	@Autowired
	private ICategoryDao categoryDao;
	
	@Autowired
	private IReviewDao reviewDao;
	
	@Override
	public Book findOne(Long id) {
		return bookDao.findById(id).get();
	}
	
	@Override
	public List<Book> findAll() {
		return (List<Book>) bookDao.findAll();
	}

	@Override
	public List<Book> getAllBooksByCategoryId(long category_id) {
		List<Book> books = bookDao.findByCategoryId(category_id);
		return books;
	}

	@Override
	public List<Book> getAllBooksByReviewId(long review_id) {
		List<Book> books = bookDao.findByCategoryId(review_id);
		return books;
	}

	@Override
	public void save(Book book) {
		bookDao.save(book);
	}

	@Override
	public void saveBookInCategoryByCategoryId(Book book, long category_id) {
		categoryDao.findById(category_id).ifPresent((x) -> {
			book.setCategory(x);
			bookDao.save(book);
		});
	}

	@Override
	public void saveBookInReviewByReviewId(Book book, long review_id) {
		reviewDao.findById(review_id).ifPresent((x) -> {
			book.setReview(x);
			bookDao.save(book);
		});	
	}

	@Override
	public void update(Book book, long id) {
		bookDao.findById(id).ifPresent((x) ->{
			book.setId(x.getId());
			bookDao.save(book);
		});
	}

	@Override
	public void delete(long id) {
		bookDao.deleteById(id);
	}

	@Override
	public void addCategoryToBook(long category_id, long id) {
		bookDao.findById(id).ifPresent((x) -> {
			categoryDao.findById(category_id).ifPresent((y) -> {
				x.setCategory(y);
				bookDao.save(x);
			});
		});
	}

	@Override
	public void addBookTypeToBook(long category_id, long id) {
		bookDao.findById(id).ifPresent((x) -> {
			reviewDao.findById(category_id).ifPresent((y) -> {
				x.setReview(y);
				bookDao.save(x);
			});
		});
	}

}