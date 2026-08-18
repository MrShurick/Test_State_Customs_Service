import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok4 } from './ok-4';

describe('Ok4', () => {
  let component: Ok4;
  let fixture: ComponentFixture<Ok4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok4],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
