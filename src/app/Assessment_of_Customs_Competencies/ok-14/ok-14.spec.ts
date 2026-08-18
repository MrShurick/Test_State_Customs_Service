import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok14 } from './ok-14';

describe('Ok14', () => {
  let component: Ok14;
  let fixture: ComponentFixture<Ok14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok14],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
