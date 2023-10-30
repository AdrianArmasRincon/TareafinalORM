import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBookCategoriesPageRoutingModule } from './add-book-categories-routing.module';

import { AddBookCategoriesPage } from './add-book-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBookCategoriesPageRoutingModule
  ],
  declarations: [AddBookCategoriesPage]
})
export class AddBookCategoriesPageModule {}
