import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotCorrectionComponent } from './shot-correction.component';

describe('ShotCorrectionComponent', () => {
  let component: ShotCorrectionComponent;
  let fixture: ComponentFixture<ShotCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShotCorrectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShotCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
