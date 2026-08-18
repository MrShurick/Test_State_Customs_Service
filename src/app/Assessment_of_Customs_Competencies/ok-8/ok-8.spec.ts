import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok8 } from './ok-8';

describe('Ok8', () => {
  let component: Ok8;
  let fixture: ComponentFixture<Ok8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok8],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
