import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}

  getCurrentUser() {
    return this.authService.getCurrentUserInfo();
  }

  updateUserInfo(info: any) {
    return this.authService.getCurrentUserInfo().updateProfile(info);
  }
}
