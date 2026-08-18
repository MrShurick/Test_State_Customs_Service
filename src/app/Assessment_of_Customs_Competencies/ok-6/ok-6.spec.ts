import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok6 } from './ok-6';

describe('Ok6', () => {
  let component: Ok6;
  let fixture: ComponentFixture<Ok6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok6],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
