import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok16 } from './ok-16';

describe('Ok16', () => {
  let component: Ok16;
  let fixture: ComponentFixture<Ok16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok16],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
