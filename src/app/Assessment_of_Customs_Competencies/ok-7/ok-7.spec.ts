import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok7 } from './ok-7';

describe('Ok7', () => {
  let component: Ok7;
  let fixture: ComponentFixture<Ok7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok7],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
