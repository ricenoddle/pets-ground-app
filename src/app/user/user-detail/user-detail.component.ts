import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/app';
import { UserService } from '../user-shared/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userInfo: User;
  //DisplayName
  //photo
  //PhoneNumber

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo = this.userService.getCurrentUser();
    console.log(this.userInfo);
  }

  updateInfo() {
    // this.userService.updateUserInfo().then((res) => console.log(res));
  }
}
