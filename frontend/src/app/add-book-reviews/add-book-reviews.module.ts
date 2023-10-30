import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBookReviewsPageRoutingModule } from './add-book-reviews-routing.module';

import { AddBookReviewsPage } from './add-book-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBookReviewsPageRoutingModule
  ],
  declarations: [AddBookReviewsPage]
})
export class AddBookReviewsPageModule {}
