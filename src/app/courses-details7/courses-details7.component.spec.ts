import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails7Component } from './courses-details7.component';

describe('CoursesDetails7Component', () => {
  let component: CoursesDetails7Component;
  let fixture: ComponentFixture<CoursesDetails7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails7Component]
    });
    fixture = TestBed.createComponent(CoursesDetails7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
