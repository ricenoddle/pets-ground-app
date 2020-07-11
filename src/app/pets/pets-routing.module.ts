import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from './pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { IsLoginGuard } from '../shared/route-guard/is-login.guard';
import { CanDeactiveWithoutSaveGuard } from '../shared/route-guard/can-deactive-without-save.guard';

const routes: Routes = [
  { path: '', component: PetsComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  {
    path: 'create',
    component: PetCreateComponent,
    canActivate: [IsLoginGuard],
    canDeactivate: [CanDeactiveWithoutSaveGuard],
  },
  {
    path: 'edit/:id',
    component: PetEditComponent,
    canDeactivate: [CanDeactiveWithoutSaveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
