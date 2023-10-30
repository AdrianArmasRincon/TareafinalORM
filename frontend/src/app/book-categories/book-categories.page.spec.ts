import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookCategoriesPage } from './book-categories.page';

describe('BookCategoriesPage', () => {
  let component: BookCategoriesPage;
  let fixture: ComponentFixture<BookCategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
