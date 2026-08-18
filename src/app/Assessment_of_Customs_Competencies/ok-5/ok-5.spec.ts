import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok5 } from './ok-5';

describe('Ok5', () => {
  let component: Ok5;
  let fixture: ComponentFixture<Ok5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok5],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
