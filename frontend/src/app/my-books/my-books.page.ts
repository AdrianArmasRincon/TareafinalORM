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
  title: string = "";
  author: string = "";
  category: string = "";////////////////////////////////////////////////////////////////

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
  updateBook(id: string, title: string, author: string, category: string) {
    console.log("update book with id: " + id);
    if (this.titleUpdate && this.authorUpdate && this.categoryUpdate) {
      this.title = this.titleUpdate;
      this.author = this.authorUpdate;
      this.category = this.categoryUpdate;
      console.log("update book with category updated: " + this.categoryUpdate);
      console.log("update book to category: " + this.category);
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
    }
    
    let booksList = {
      title: this.title,
      author: this.author,
      category: this.category,
    }
    console.log(category);
    this.bookService.updateBooks(id, booksList).subscribe(response => {
      this.booksList = response;
      this.getAllBooks();//listaResult update
    });
  }
}
