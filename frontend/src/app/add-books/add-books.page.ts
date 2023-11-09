import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.page.html',
  styleUrls: ['./add-books.page.scss'],
})

export class AddBooksPage implements OnInit {
  bookTitle!: string;
  authorName!: string;
  categoryId!:string;////////////////////////////////////////////////////////////////
  ReviewId!: string;

  task: Array<{book: string; author: string; category: string, review: string;}>=[];///////////////////

  public alertButtons = ['OK'];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }
  
  //addBook
  addBook() {
    console.log("ts adbook");
    if(this.bookTitle && this.authorName && this.categoryId && this.ReviewId){////////////////////////
      let task={
        book: this.bookTitle,
        author: this.authorName,
        category: this.categoryId,////////////////////////////////////////////////////
        review:  this.ReviewId
    }
      this.bookService.addBooks(task).subscribe(Response =>{
        console.log("ts adbook suscribe");
        console.log(Response);
      });
      //Var reset values
      this.bookTitle='';
      this.authorName='';
      this.categoryId='';
      this.ReviewId='';
      console.log("ts final");
    }
  }
}
