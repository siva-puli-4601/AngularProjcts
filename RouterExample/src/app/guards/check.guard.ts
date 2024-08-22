import { CanDeactivateFn } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const checkGuard: 
CanDeactivateFn<HomeComponent> = (component:HomeComponent, currentRoute, currentState, nextState) => {
  if(component.isDirty)
  {
    return confirm('Do you want to discard changes?');
  }
  return true;
};
