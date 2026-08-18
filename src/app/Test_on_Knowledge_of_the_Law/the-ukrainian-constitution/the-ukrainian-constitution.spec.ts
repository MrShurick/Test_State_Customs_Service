import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheUkrainianConstitution } from './the-ukrainian-constitution';

describe('TheUkrainianConstitution', () => {
  let component: TheUkrainianConstitution;
  let fixture: ComponentFixture<TheUkrainianConstitution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheUkrainianConstitution],
    }).compileComponents();

    fixture = TestBed.createComponent(TheUkrainianConstitution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
