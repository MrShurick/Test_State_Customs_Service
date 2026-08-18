import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ok13 } from './ok-13';

describe('Ok13', () => {
  let component: Ok13;
  let fixture: ComponentFixture<Ok13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ok13],
    }).compileComponents();

    fixture = TestBed.createComponent(Ok13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
