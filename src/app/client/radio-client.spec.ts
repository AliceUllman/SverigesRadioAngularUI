import { TestBed } from '@angular/core/testing';
import { RadioClient } from './radio-client';

describe('RadioClient', () => {
  let service: RadioClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
