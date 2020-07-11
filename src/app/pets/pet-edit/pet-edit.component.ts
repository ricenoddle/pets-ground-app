import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsService } from 'src/app/shared/services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IPet } from 'src/app/shared/models/pet';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss'],
})
export class PetEditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private petsService: PetsService,
    private activatedRoute: ActivatedRoute
  ) {}

  id: string;
  hasSaved: boolean = false;

  petForm: FormGroup = this.fb.group({
    pet_name: ['', Validators.required],
    pet_image: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.petsService.getPetByDocId(this.id).subscribe((pet) => {
      let tempPet = pet as IPet;
      this.petForm.setValue({
        pet_name: tempPet.pet_name,
        pet_image: tempPet.pet_image,
        description: tempPet.description,
      });
    });
  }

  getPetNameErrorMessage() {
    if (this.formControlNames.pet_name.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getPetImageErrorMessage() {
    if (this.formControlNames.pet_image.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getDescriptionErrorMessage() {
    if (this.formControlNames.description.hasError('required')) {
      return 'You must enter a value';
    }
  }

  get formControlNames() {
    return {
      pet_name: this.petForm.get('pet_name'),
      pet_image: this.petForm.get('pet_image'),
      description: this.petForm.get('description'),
    };
  }

  onSubmit() {
    if (this.petForm.valid) {
      this.petsService
        .updatePetInfo(this.id, this.petForm.value)
        .then((res) => {
          this.hasSaved = true;
          window.history.back();
        });
    }
  }

  canDeactive(): boolean {
    if (this.hasSaved) {
      return true;
    } else {
      const confirmResult = window.confirm(
        'Are you sure you wanna leave without saving ?'
      );
      return confirmResult ? true : false;
    }
  }
}
