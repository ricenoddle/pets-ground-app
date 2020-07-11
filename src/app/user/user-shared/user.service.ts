import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UpdatedInfo } from './updated-info';

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}

  getCurrentUser() {
    return this.authService.getCurrentUserInfo();
  }

  updateUserInfo() {
    // return this.authService.getCurrentUserInfo().updateProfile({
    //   photoURL:
    //     'https://images.unsplash.com/photo-1565436381579-52471481f017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    // });
  }
}
