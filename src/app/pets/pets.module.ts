import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PetsComponent, PetsListComponent, PetCardComponent],
  imports: [CommonModule, PetsRoutingModule, SharedModule],
})
export class PetsModule {}
