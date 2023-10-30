import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookCategoriesPageRoutingModule } from './book-categories-routing.module';

import { BookCategoriesPage } from './book-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookCategoriesPageRoutingModule
  ],
  declarations: [BookCategoriesPage]
})
export class BookCategoriesPageModule {}
