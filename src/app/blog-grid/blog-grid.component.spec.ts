import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogGridComponent } from './blog-grid.component';

describe('BlogGridComponent', () => {
  let component: BlogGridComponent;
  let fixture: ComponentFixture<BlogGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogGridComponent]
    });
    fixture = TestBed.createComponent(BlogGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});