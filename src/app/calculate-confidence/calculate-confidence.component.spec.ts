import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateConfidenceComponent } from './calculate-confidence.component';

describe('CalculateConfidenceComponent', () => {
  let component: CalculateConfidenceComponent;
  let fixture: ComponentFixture<CalculateConfidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateConfidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateConfidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
