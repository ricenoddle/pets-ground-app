import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from './pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { IsLoginGuard } from '../shared/route-guard/is-login.guard';

const routes: Routes = [
  { path: '', component: PetsComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  {
    path: 'create',
    component: PetCreateComponent,
    canActivate: [IsLoginGuard],
  },
  { path: 'edit/:id', component: PetEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
