import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertLoginDialogComponent } from '../popups/alert-login-dialog/alert-login-dialog.component';

@Injectable()
export class IsLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.getCurrentUserInfo() !== null) {
      return true;
    } else {
      this.dialog.open(AlertLoginDialogComponent);
      return false;
    }
  }
}
