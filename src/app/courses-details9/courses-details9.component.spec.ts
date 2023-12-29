import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails9Component } from './courses-details9.component';

describe('CoursesDetails9Component', () => {
  let component: CoursesDetails9Component;
  let fixture: ComponentFixture<CoursesDetails9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails9Component]
    });
    fixture = TestBed.createComponent(CoursesDetails9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
