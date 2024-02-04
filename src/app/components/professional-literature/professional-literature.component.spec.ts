import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLiteratureComponent } from './professional-literature.component';

describe('ProfessionalLiteratureComponent', () => {
  let component: ProfessionalLiteratureComponent;
  let fixture: ComponentFixture<ProfessionalLiteratureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalLiteratureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
