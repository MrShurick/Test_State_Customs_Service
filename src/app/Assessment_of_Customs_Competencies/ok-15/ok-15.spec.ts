import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok15 } from './ok-15';

describe('Ok15', () => {
  let component: Ok15;
  let fixture: ComponentFixture<Ok15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok15],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
