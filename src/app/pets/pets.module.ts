import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PetsRoutingModule } from './pets-routing.module';
import { PetsComponent } from './pets.component';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { SharedModule } from '../shared/shared.module';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetCommentComponent } from './pet-comment/pet-comment.component';

@NgModule({
  declarations: [
    PetsComponent,
    PetsListComponent,
    PetCardComponent,
    PetDetailComponent,
    AddCommentComponent,
    PetCreateComponent,
    PetEditComponent,
    PetCommentComponent,
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PetsModule {}
