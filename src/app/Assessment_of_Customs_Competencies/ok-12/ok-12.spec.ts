import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok12 } from './ok-12';

describe('Ok12', () => {
  let component: Ok12;
  let fixture: ComponentFixture<Ok12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok12],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
