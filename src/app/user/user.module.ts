import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user-shared/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [UserService],
})
export class UserModule {}
