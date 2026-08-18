import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok10 } from './ok-10';

describe('Ok10', () => {
  let component: Ok10;
  let fixture: ComponentFixture<Ok10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok10],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
