import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-categories',
  templateUrl: './book-categories.page.html',
  styleUrls: ['./book-categories.page.scss'],
})
export class BookCategoriesPage implements OnInit {

  CategoriesList: any = [];
  categoryNameUpdate: string = "";
  category: string = "";////////////////////////////////////////////////////////////////

  public alertButtons = ['OK'];

  constructor(private bookService: BookService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.getAllCategories();
  }

  //Get categories from db
  getAllCategories() {
    this.bookService.getCategories().subscribe(response => {
      this.CategoriesList = response;
    });
  }

  // Delete category
  deleteCategory(id: string) {
    console.log("delete category: " + id);
    this.bookService.deleteCategories(id).subscribe(response => {
      this.CategoriesList = response;
      this.getAllCategories();//listaResult update
    })
  }

  //Update
  updateCategory(id: string, category: string) {
    console.log("update category with id: " + id);
    if (this.categoryNameUpdate) {
      this.category = this.categoryNameUpdate;
      console.log("update category with category updated: " + this.categoryNameUpdate);
      console.log("update category to category: " + this.category);
    } else {
      if (this.categoryNameUpdate) {
        this.category = this.categoryNameUpdate;
      }  
    }
    
    let CategoriesList = {
      category: this.category,
    }
    console.log(category);
    this.bookService.updateCategories(id, this.CategoriesList).subscribe(response => {
      this.CategoriesList = response;
      this.getAllCategories();//listaResult update
    });
  }

}
