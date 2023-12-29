import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails10Component } from './courses-details10.component';

describe('CoursesDetails10Component', () => {
  let component: CoursesDetails10Component;
  let fixture: ComponentFixture<CoursesDetails10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails10Component]
    });
    fixture = TestBed.createComponent(CoursesDetails10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
