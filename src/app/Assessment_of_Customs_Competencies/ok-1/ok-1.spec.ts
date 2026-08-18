import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok1 } from './ok-1';

describe('Ok1', () => {
  let component: Ok1;
  let fixture: ComponentFixture<Ok1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok1],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
