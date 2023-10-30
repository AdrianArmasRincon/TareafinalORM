import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.page.html',
  styleUrls: ['./book-reviews.page.scss'],
})
export class BookReviewsPage implements OnInit {

  
  ReviewsList: any = [];
  reviewUpdate: string = "";
  review: string = "";////////////////////////////////////////////////////////////////
  bookIdUpdate: string = "";
  bookId: string = "";

  public alertButtons = ['OK'];

  constructor(private bookService: BookService, private router: Router, private modalController: ModalController) { }

 ngOnInit() {
    this.getAllReviews();
  }

  //Get reviews from db
  getAllReviews() {
    this.bookService.getReviews().subscribe(response => {
      this.ReviewsList = response;
    });
  }

  // Delete reviews
  deleteReview(id: string) {
    console.log("delete review: " + id);
    this.bookService.deleteReviews(id).subscribe(response => {
      this.ReviewsList = response;
      this.getAllReviews();//listaResult update
    })
  }

  //Update
  updateReview(id: string, review: string, bookId: string) {
    console.log("update review with id: " + id);
    if (this.reviewUpdate && this.bookIdUpdate) {
      this.review = this.reviewUpdate;
      this.bookId = this.bookIdUpdate;
      console.log("update review with category updated: " + this.reviewUpdate);
      console.log("update review to category: " + this.review);
      console.log("update bookId with category updated: " + this.bookIdUpdate);
      console.log("update bookId to category: " + this.bookId);
    } else {
      if (this.reviewUpdate) {
        this.review = this.reviewUpdate;
      } 
      if (this.bookIdUpdate) {
        this.bookId = this.bookIdUpdate;
      }
    }
    
    let ReviewsList = {
      review: this.review,
      bookId: this.bookId
    }
    console.log(review);
    console.log(bookId);
    this.bookService.updateReviews(id, this.ReviewsList).subscribe(response => {
      this.ReviewsList = response;
      this.getAllReviews();//listaResult update
    });
  }


}
