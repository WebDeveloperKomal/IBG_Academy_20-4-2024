import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetails3Component } from './courses-details3.component';

describe('CoursesDetails3Component', () => {
  let component: CoursesDetails3Component;
  let fixture: ComponentFixture<CoursesDetails3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDetails3Component]
    });
    fixture = TestBed.createComponent(CoursesDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
