import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBookReviewsPage } from './add-book-reviews.page';

describe('AddBookReviewsPage', () => {
  let component: AddBookReviewsPage;
  let fixture: ComponentFixture<AddBookReviewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddBookReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
