import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCategoriesPage } from './book-categories.page';

const routes: Routes = [
  {
    path: '',
    component: BookCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCategoriesPageRoutingModule {}
