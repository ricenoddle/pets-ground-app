import { TestBed } from '@angular/core/testing';

import { CanDeactiveWithoutSaveGuard } from './can-deactive-without-save.guard';

describe('CanDeactiveWithoutSaveGuard', () => {
  let guard: CanDeactiveWithoutSaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactiveWithoutSaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
