import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails8Component } from './courses-details8.component';

describe('CoursesDetails8Component', () => {
  let component: CoursesDetails8Component;
  let fixture: ComponentFixture<CoursesDetails8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails8Component]
    });
    fixture = TestBed.createComponent(CoursesDetails8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
