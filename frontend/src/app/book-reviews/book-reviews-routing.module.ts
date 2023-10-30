import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookReviewsPage } from './book-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: BookReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookReviewsPageRoutingModule {}
