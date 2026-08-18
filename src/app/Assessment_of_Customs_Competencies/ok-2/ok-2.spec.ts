import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok2 } from './ok-2';

describe('Ok2', () => {
  let component: Ok2;
  let fixture: ComponentFixture<Ok2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok2],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
