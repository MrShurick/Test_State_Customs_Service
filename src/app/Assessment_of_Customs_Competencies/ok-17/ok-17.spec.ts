import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok17 } from './ok-17';

describe('Ok17', () => {
  let component: Ok17;
  let fixture: ComponentFixture<Ok17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok17],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
