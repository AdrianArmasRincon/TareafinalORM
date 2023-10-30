import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs-menu/home',
    pathMatch: 'full'
  },
  {
    path: 'tabs-menu',
    loadChildren: () => import('./tabs-menu/tabs-menu.module').then(m => m.TabsMenuPageModule)
  },
  {
    path: 'book-categories',
    loadChildren: () => import('./book-categories/book-categories.module').then( m => m.BookCategoriesPageModule)
  },  {
    path: 'add-book-categories',
    loadChildren: () => import('./add-book-categories/add-book-categories.module').then( m => m.AddBookCategoriesPageModule)
  },
  {
    path: 'book-reviews',
    loadChildren: () => import('./book-reviews/book-reviews.module').then( m => m.BookReviewsPageModule)
  },
  {
    path: 'add-book-reviews',
    loadChildren: () => import('./add-book-reviews/add-book-reviews.module').then( m => m.AddBookReviewsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
