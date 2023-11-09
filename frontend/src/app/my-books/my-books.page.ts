import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.page.html',
  styleUrls: ['./my-books.page.scss'],
})
export class MyBooksPage implements OnInit {

  booksList: any = [];
  authorUpdate: string = "";
  titleUpdate: string = "";
  categoryUpdate:string = "";////////////////////////////////////////////////////////////////
  reviewUpdate: string="";
  title: string = "";
  author: string = "";
  category: string = "";////////////////////////////////////////////////////////////////
  review: string = "";

  public alertButtons = ['OK'];

  constructor(private bookService: BookService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.getAllBooks();
  }

  //Get books from db
  getAllBooks() {
    this.bookService.getBooks().subscribe(response => {
      this.booksList = response;
    });
  }

  // Delete book
  deleteBook(id: string) {
    console.log("delete book: " + id);
    //this.bookService.deleteBooks(id);
    this.bookService.deleteBooks(id).subscribe(response => {
      this.booksList = response;
      this.getAllBooks();//listaResult update
    })
  }

  //Update
  updateBook(id: string, title: string, author: string, category_id: string ,review_id: string) {
    console.log("update book with id: " + id);
    if (this.titleUpdate && this.authorUpdate && this.categoryUpdate && this.reviewUpdate) {
      this.title = this.titleUpdate;
      this.author = this.authorUpdate;
      this.category = this.categoryUpdate;
      this.review = this.reviewUpdate;
      console.log("update book with title updated: " + this.title);
      console.log("update book to title: " + this.titleUpdate);
      console.log("update book with author updated: " + this.author);
      console.log("update book to author: " + this.author);
      console.log("update book with category updated: " + this.categoryUpdate);
      console.log("update book to category: " + this.category);
      console.log("update book with review updated: " + this.reviewUpdate);
      console.log("update book to review: " + this.review);
    } else {
      if (this.titleUpdate) {
        this.title = this.titleUpdate;
      } 
      if (this.authorUpdate) {
        this.author = this.authorUpdate;
      } 
      if (this.categoryUpdate) {
        this.category = this.categoryUpdate;
      }  
      if (this.reviewUpdate) {
        this.review = this.reviewUpdate;
      } 
    }
    
    
    this.bookService.updateBooks(id, this.title, this.author, this.category, this.review).subscribe(response => {
      this.booksList = response;
      this.getAllBooks();//listaResult update
    });
  }
}
