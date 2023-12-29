import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails1Component } from './courses-details1.component';

describe('CoursesDetails1Component', () => {
  let component: CoursesDetails1Component;
  let fixture: ComponentFixture<CoursesDetails1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails1Component]
    });
    fixture = TestBed.createComponent(CoursesDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
