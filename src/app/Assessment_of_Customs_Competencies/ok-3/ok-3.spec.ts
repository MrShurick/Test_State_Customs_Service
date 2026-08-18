import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok3 } from './ok-3';

describe('Ok3', () => {
  let component: Ok3;
  let fixture: ComponentFixture<Ok3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok3],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
