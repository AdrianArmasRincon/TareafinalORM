import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Encoder
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  }),
};

//Encoder Put
const httpOptionsPut = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  endpoint = 'http://localhost:8080/books';
  endpointCategory = 'http://localhost:8080/category';
  endpointReview = 'http://localhost:8080/review';

  constructor(private httpClient: HttpClient) { }


  //Books
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Get books
  getBooks() {
    return this.httpClient.get(this.endpoint);
  }

  //Post book
  addBooks(task: any) {
    console.log("service post");
    let body = new URLSearchParams();
    body.append("title", task.book);
    body.append("author", task.author);
    body.append("category_id", task.category);
    body.append("review_id", task.review);

    console.log("category id: "+task.category);
    console.log("author: "+ task.author);
    console.log("title: "+task.book);
    console.log("review_id: "+task.review);


    return this.httpClient.post(this.endpoint, body, httpOptions);
  }

  // Delete a book by ID
  deleteBooks(id: string) {
    console.log("Deleting book with ID:", id);
    return this.httpClient.delete(this.endpoint + `/${id}`, httpOptions);
  }

  //Put
  updateBooks(id: string, title: string, author: string, category_id: string, review_id: string, ) {
    //const putEndpoint = this.endpoint+`/${id}`;

    let body = new URLSearchParams();
    //bodyEncoded.append("id", bookId);
    body.append("title", title);
    body.append("author", author);
    body.append("category_id", category_id);
    body.append("review_id", review_id);
    
    console.log(title);
    console.log(author);
    console.log(category_id);
    console.log(review_id);

    return this.httpClient.put(this.endpoint + `/${id}`, body, httpOptions);
  }

  //Category
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Get books
  getCategories() {
    return this.httpClient.get(this.endpointCategory);
  }

  //Post book
  addCategories(task: any) {
    console.log("service post");
    let body = new URLSearchParams();
    body.append("book_categories", task.category);

    console.log("book_categories: "+task.category);

    return this.httpClient.post(this.endpointCategory, body, httpOptions);
  }

  // Delete a book by ID
  deleteCategories(id: string) {
    console.log("Deleting category with ID:", id);
    return this.httpClient.delete(this.endpointCategory + `/${id}`, httpOptions);
  }

  //Put
  updateCategories(id: string, task: string) {
    //const putEndpoint = this.endpoint+`/${id}`;

    let body = new URLSearchParams();
    //bodyEncoded.append("id", bookId);
    body.append("category_name", task);

    return this.httpClient.put(this.endpointCategory + `/${id}`, body, httpOptions);
  }

    //Reviews
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Get Reviews
  getReviews() {
    return this.httpClient.get(this.endpointReview);
  }

  //Post Review
  addReviews(task: any) {
    console.log("service post");
    let body = new URLSearchParams();
    body.append("rating", task.rating);
    body.append("book_id", task.bookId);

    console.log("rating: "+task.rating);
    console.log("book_id: "+task.bookId);

    return this.httpClient.post(this.endpointReview, body, httpOptions);
  }

  // Delete a Review by ID
  deleteReviews(id: string) {
    console.log("Deleting category with ID:", id);
    return this.httpClient.delete(this.endpointReview + `/${id}`, httpOptions);
  }

  //Put
  updateReviews(id: string, task: string) {
    
    let body = new URLSearchParams();
    //bodyEncoded.append("id", bookId);
    body.append("rating", task);

    return this.httpClient.put(this.endpointReview + `/${id}`, body, httpOptions);
  }
}
