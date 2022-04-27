import { TestBed } from '@angular/core/testing';

import { ExratesApisService } from './exrates-apis.service';

describe('ExratesApisService', () => {
  let service: ExratesApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExratesApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
