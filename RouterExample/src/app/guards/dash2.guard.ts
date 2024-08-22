import { CanActivateChildFn, Resolve, ResolveFn } from '@angular/router';

export const dash2Guard: ResolveFn<any> = () => {

  const data={
    id:1,
    name:"siva"
  }
  return (data);
};
