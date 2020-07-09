import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsComponent } from './pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
  { path: '', component: PetsComponent },
  { path: 'detail/:id', component: PetDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsRoutingModule {}
