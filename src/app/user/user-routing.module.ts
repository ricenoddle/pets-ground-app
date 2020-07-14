import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { CanActiveUserDetailGuard } from './user-shared/can-active-user-detail.guard';

const routes: Routes = [
  {
    path: 'detail',
    component: UserComponent,
    canActivate: [CanActiveUserDetailGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
