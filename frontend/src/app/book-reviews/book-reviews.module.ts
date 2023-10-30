import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookReviewsPageRoutingModule } from './book-reviews-routing.module';

import { BookReviewsPage } from './book-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookReviewsPageRoutingModule
  ],
  declarations: [BookReviewsPage]
})
export class BookReviewsPageModule {}
