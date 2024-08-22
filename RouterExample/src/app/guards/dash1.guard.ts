import { CanActivateChildFn } from '@angular/router';

export const dash1Guard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
