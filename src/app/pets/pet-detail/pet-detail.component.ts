import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/shared/services/pets.service';
import { IPet } from 'src/app/shared/models/pet';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
})
export class PetDetailComponent implements OnInit {
  id: string;
  petInfo: IPet;

  constructor(
    private activatedRoute: ActivatedRoute,
    private petsService: PetsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.petsService.getPetByDocId(this.id).subscribe((pet) => {
      this.petInfo = pet as IPet;
    });
  }

  showEditButton(): boolean {
    if (
      this.authService.getCurrentUserInfo()?.email ===
      this.petInfo?.pet_ownerEmail
    ) {
      return true;
    } else {
      return false;
    }
  }
}
