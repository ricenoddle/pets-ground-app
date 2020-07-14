import { TestBed } from '@angular/core/testing';

import { CanActiveUserDetailGuard } from './can-active-user-detail.guard';

describe('CanActiveUserDetailGuard', () => {
  let guard: CanActiveUserDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActiveUserDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
