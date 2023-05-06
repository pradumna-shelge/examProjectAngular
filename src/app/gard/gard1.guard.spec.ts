import { TestBed } from '@angular/core/testing';

import { Gard1Guard } from './gard1.guard';

describe('Gard1Guard', () => {
  let guard: Gard1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Gard1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
