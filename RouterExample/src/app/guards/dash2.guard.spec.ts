import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { dash2Guard } from './dash2.guard';

describe('dash2Guard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dash2Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
