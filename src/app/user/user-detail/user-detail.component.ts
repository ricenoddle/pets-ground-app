import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/app';
import { UserService } from '../user-shared/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userInfo: User;

  userName: FormControl = new FormControl('', [Validators.required]);
  phoneNumber: FormControl = new FormControl('');

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo = this.userService.getCurrentUser();
    this.userName.setValue(this.userInfo?.displayName);
    this.phoneNumber.setValue(this.userInfo?.phoneNumber);
  }

  onSave() {
    const updatedInfo = {
      displayName: this.userName.value,
      phoneNumber: this.phoneNumber.value,
    };
    this.userService
      .updateUserInfo(updatedInfo)
      .then((res) => {
        window.history.back();
      })
      .catch((err) => console.log(err));
  }

  onVerifyEmail() {
    this.userInfo
      .sendEmailVerification()
      .then((res) => {
        window.alert('Verify email has been send, please check your email.');
      })
      .catch((err) => {
        window.alert(err);
      });
  }
}
