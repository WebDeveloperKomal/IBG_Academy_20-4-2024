import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails4Component } from './courses-details4.component';

describe('CoursesDetails4Component', () => {
  let component: CoursesDetails4Component;
  let fixture: ComponentFixture<CoursesDetails4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails4Component]
    });
    fixture = TestBed.createComponent(CoursesDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
