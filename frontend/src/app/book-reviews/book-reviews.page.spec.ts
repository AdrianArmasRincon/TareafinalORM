import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookReviewsPage } from './book-reviews.page';

describe('BookReviewsPage', () => {
  let component: BookReviewsPage;
  let fixture: ComponentFixture<BookReviewsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BookReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
