import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-book-reviews',
  templateUrl: './add-book-reviews.page.html',
  styleUrls: ['./add-book-reviews.page.scss'],
})
export class AddBookReviewsPage implements OnInit {

  BookId!: string;
  BookReview!: string;

  task: Array<{book: string; review: string; category: string}>=[];///////////////////

  public alertButtons = ['OK'];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }
  
  //addBook
  addReview() {
    console.log("ts adbook");
    if(this.BookId && this.BookReview){////////////////////////
      let task={
        book: this.BookId,
        review: this.BookReview,
      }
      this.bookService.addReviews(task).subscribe(Response =>{
        console.log("ts addReview suscribe");
        console.log(Response);
      });
      //Var reset values
      this.BookId='';
      this.BookReview='';
      console.log("ts final");
    }
  }
}