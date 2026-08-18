import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok9 } from './ok-9';

describe('Ok9', () => {
  let component: Ok9;
  let fixture: ComponentFixture<Ok9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok9],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
