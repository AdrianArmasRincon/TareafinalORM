import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookCategoriesPage } from './add-book-categories.page';

const routes: Routes = [
  {
    path: '',
    component: AddBookCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBookCategoriesPageRoutingModule {}
