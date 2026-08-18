import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsCodeOfUkr } from './customs-code-of-ukr';

describe('CustomsCodeOfUkr', () => {
  let component: CustomsCodeOfUkr;
  let fixture: ComponentFixture<CustomsCodeOfUkr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomsCodeOfUkr],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomsCodeOfUkr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
