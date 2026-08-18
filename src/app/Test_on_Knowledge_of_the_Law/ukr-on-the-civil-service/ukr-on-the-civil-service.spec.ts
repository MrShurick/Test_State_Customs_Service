import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkrOnTheCivilService } from './ukr-on-the-civil-service';

describe('UkrOnTheCivilService', () => {
  let component: UkrOnTheCivilService;
  let fixture: ComponentFixture<UkrOnTheCivilService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkrOnTheCivilService],
    }).compileComponents();

    fixture = TestBed.createComponent(UkrOnTheCivilService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
