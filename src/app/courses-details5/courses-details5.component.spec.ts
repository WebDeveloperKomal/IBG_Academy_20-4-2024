import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails5Component } from './courses-details5.component';

describe('CoursesDetails5Component', () => {
  let component: CoursesDetails5Component;
  let fixture: ComponentFixture<CoursesDetails5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails5Component]
    });
    fixture = TestBed.createComponent(CoursesDetails5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
