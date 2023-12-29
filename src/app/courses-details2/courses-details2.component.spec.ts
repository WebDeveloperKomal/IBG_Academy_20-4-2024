import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails2Component } from './courses-details2.component';

describe('CoursesDetails2Component', () => {
  let component: CoursesDetails2Component;
  let fixture: ComponentFixture<CoursesDetails2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails2Component]
    });
    fixture = TestBed.createComponent(CoursesDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
