import { TestBed } from '@angular/core/testing';

import { QestionDataService } from './qestion-data.service';

describe('QestionDataService', () => {
  let service: QestionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QestionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
