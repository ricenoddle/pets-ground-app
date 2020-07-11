import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactive {
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactiveWithoutSaveGuard implements CanDeactivate<CanDeactive> {
  canDeactivate(
    component: CanDeactive
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.canDeactive) {
      return component.canDeactive();
    }
    return true;
  }
}
