import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookReviewsPage } from './add-book-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: AddBookReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBookReviewsPageRoutingModule {}
