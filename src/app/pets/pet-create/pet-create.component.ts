import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PetsService } from 'src/app/shared/services/pets.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss'],
})
export class PetCreateComponent implements OnInit {
  constructor(private fb: FormBuilder, private petsService: PetsService) {}

  petForm: FormGroup = this.fb.group({
    pet_name: ['', Validators.required],
    pet_ownerEmail: ['', [Validators.required, Validators.email]],
    pet_ownerImage: ['', Validators.required],
    pet_image: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit(): void {}

  getPetNameErrorMessage() {
    if (this.formControlNames.pet_name.hasError('required')) {
      return 'You must enter a value';
    }
  }

  getPetOwnerEmailErrorMessage() {
    if (this.formControlNames.pet_ownerEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.formControlNames.pet_ownerEmail.hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getPetOwnerImageErrorMessage() {
    if (this.formControlNames.pet_ownerImage.hasError('required')) {
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
      pet_ownerEmail: this.petForm.get('pet_ownerEmail'),
      pet_ownerImage: this.petForm.get('pet_ownerImage'),
      pet_image: this.petForm.get('pet_image'),
      description: this.petForm.get('description'),
    };
  }

  onSubmit() {
    if (this.petForm.valid) {
      this.petsService.createPet(this.petForm.value).then((res) => {
        window.history.back();
      });
    }
  }
}
