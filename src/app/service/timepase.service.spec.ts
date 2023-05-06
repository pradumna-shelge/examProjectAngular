import { TestBed } from '@angular/core/testing';

import { TimepaseService } from './timepase.service';

describe('TimepaseService', () => {
  let service: TimepaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimepaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
