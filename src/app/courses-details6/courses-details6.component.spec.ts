import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails6Component } from './courses-details6.component';

describe('CoursesDetails6Component', () => {
  let component: CoursesDetails6Component;
  let fixture: ComponentFixture<CoursesDetails6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails6Component]
    });
    fixture = TestBed.createComponent(CoursesDetails6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
