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
  ratingUpdate: string = "";
  review_id: string = "";////////////////////////////////////////////////////////////////
  rating: string = "";

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
  updateReview(id: string, review: string) {
    console.log("update review with id: " + id);
    if (this.ratingUpdate) {
      this.rating = this.ratingUpdate;
      console.log("update review with category updated: " + this.ratingUpdate);
      console.log("update review to category: " + this.rating);
    } else {
      if (this.ratingUpdate) {
        this.rating = this.ratingUpdate;
      } 
    }
    
    // let ReviewsList = {
    //   // review_id: this.review_id,
    //   rating: this.ratingUpdate
    // }

    console.log(review);
    this.bookService.updateReviews(id, this.ratingUpdate).subscribe(response => {
      this.ReviewsList = response;
      this.getAllReviews();//listaResult update
    });
  }


}
