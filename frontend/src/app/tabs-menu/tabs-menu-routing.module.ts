import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsMenuPage } from './tabs-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TabsMenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'my-books',
        loadChildren: () => import('../my-books/my-books.module').then(m => m.MyBooksPageModule)
      },

      {
        path: 'add-books',
        loadChildren: () => import('../add-books/add-books.module').then(m => m.AddBooksPageModule)
      },
      {
        path: 'book-categories',
        loadChildren: () => import('../book-categories/book-categories.module').then( m => m.BookCategoriesPageModule)
      },
      {
        path: 'add-book-categories',
        loadChildren: () => import('../add-book-categories/add-book-categories.module').then( m => m.AddBookCategoriesPageModule)
      },
      {
        path: 'book-reviews',
        loadChildren: () => import('../book-reviews/book-reviews.module').then( m => m.BookReviewsPageModule)
      },
      {
        path: 'add-book-reviews',
        loadChildren: () => import('../add-book-reviews/add-book-reviews.module').then( m => m.AddBookReviewsPageModule)
      },
    
    ]
  }, {
    path: '',
    redirectTo: '/tabs-menu/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsMenuPageRoutingModule { }
