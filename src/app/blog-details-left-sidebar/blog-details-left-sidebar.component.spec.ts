import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsLeftSidebarComponent } from './blog-details-left-sidebar.component';

describe('BlogDetailsLeftSidebarComponent', () => {
  let component: BlogDetailsLeftSidebarComponent;
  let fixture: ComponentFixture<BlogDetailsLeftSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailsLeftSidebarComponent]
    });
    fixture = TestBed.createComponent(BlogDetailsLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
