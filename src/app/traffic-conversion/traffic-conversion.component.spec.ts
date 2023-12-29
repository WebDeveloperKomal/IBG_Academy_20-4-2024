import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficConversionComponent } from './traffic-conversion.component';

describe('TrafficConversionComponent', () => {
  let component: TrafficConversionComponent;
  let fixture: ComponentFixture<TrafficConversionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrafficConversionComponent]
    });
    fixture = TestBed.createComponent(TrafficConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
