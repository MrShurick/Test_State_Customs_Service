import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok11 } from './ok-11';

describe('Ok11', () => {
  let component: Ok11;
  let fixture: ComponentFixture<Ok11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok11],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
