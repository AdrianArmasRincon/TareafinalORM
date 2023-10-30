import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-book-categories',
  templateUrl: './add-book-categories.page.html',
  styleUrls: ['./add-book-categories.page.scss'],
})
export class AddBookCategoriesPage implements OnInit {

  categoryName!: string;


  task: Array<{categoryName: string}>=[];///////////////////

  public alertButtons = ['OK'];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }
  
  //addCategory
  addCategory() {
    console.log("ts addCategory");
    if(this.categoryName){////////////////////////
      let task={
        category: this.categoryName,
        
      }
      this.bookService.addCategories(task).subscribe(Response =>{
        console.log("ts addCategory suscribe");
        console.log(Response);
      });
      //Var reset values
      this.categoryName='';
      console.log("ts final");
    }
  }
}