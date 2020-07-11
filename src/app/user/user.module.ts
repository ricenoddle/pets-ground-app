import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserService } from './user-shared/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [UserService],
})
export class UserModule {}
