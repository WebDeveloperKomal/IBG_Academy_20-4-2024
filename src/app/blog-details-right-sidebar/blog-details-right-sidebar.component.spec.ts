import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsRightSidebarComponent } from './blog-details-right-sidebar.component';

describe('BlogDetailsRightSidebarComponent', () => {
  let component: BlogDetailsRightSidebarComponent;
  let fixture: ComponentFixture<BlogDetailsRightSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogDetailsRightSidebarComponent]
    });
    fixture = TestBed.createComponent(BlogDetailsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
