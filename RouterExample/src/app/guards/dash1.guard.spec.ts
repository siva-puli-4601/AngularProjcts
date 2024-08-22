import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { dash1Guard } from './dash1.guard';

describe('dash1Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dash1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
