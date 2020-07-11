import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PetsService } from 'src/app/shared/services/pets.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss'],
})
export class PetCreateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private petsService: PetsService,
    private authService: AuthService
  ) {}

  petForm: FormGroup = this.fb.group({
    pet_name: ['', Validators.required],
    pet_ownerName: [''],
    pet_ownerImage: [''],
    pet_ownerEmail: [''],
    pet_image: ['', Validators.required],
    description: ['', Validators.required],
  });

  hasSaved: boolean = false;

  ngOnInit(): void {
    this.petForm
      .get('pet_ownerName')
      .setValue(this.authService.getCurrentUserInfo().displayName);
    this.petForm
      .get('pet_ownerImage')
      .setValue(this.authService.getCurrentUserInfo().photoURL);
    this.petForm
      .get('pet_ownerEmail')
      .setValue(this.authService.getCurrentUserInfo().email);
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
      pet_ownerEmail: this.petForm.get('pet_ownerEmail'),
      pet_ownerImage: this.petForm.get('pet_ownerImage'),
      pet_image: this.petForm.get('pet_image'),
      description: this.petForm.get('description'),
    };
  }

  onSubmit() {
    if (this.petForm.valid) {
      this.petsService.createPet(this.petForm.value).then((res) => {
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
