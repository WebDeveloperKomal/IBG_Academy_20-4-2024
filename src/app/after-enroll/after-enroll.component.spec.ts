import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterEnrollComponent } from './after-enroll.component';

describe('AfterEnrollComponent', () => {
  let component: AfterEnrollComponent;
  let fixture: ComponentFixture<AfterEnrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterEnrollComponent]
    });
    fixture = TestBed.createComponent(AfterEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
