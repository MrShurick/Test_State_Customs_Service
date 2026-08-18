import { TestBed } from '@angular/core/testing';

import { Utulits } from './utulits';

describe('Utulits', () => {
  let service: Utulits;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Utulits);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
