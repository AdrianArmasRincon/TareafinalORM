import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBookCategoriesPage } from './add-book-categories.page';

describe('AddBookCategoriesPage', () => {
  let component: AddBookCategoriesPage;
  let fixture: ComponentFixture<AddBookCategoriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddBookCategoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
