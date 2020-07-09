import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/shared/services/pets.service';
import { IPet } from 'src/app/shared/models/pet';
import { IPetComment } from 'src/app/shared/models/PetComment';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.scss'],
})
export class PetDetailComponent implements OnInit {
  id: string;
  petInfo: IPet;
  petComments: IPetComment[];
  addComment: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private petsService: PetsService,
    private authService: AuthService
  ) {
    this.id = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.petsService.getPetByDocId(this.id).subscribe((pet) => {
      this.petInfo = pet as IPet;
    });
    this.petsService.getPetCommentsById(this.id).subscribe((comments) => {
      this.petComments = comments as IPetComment[];
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

  onAddComment() {
    this.addComment = true;
  }

  handleCancel(cancel: boolean) {
    if (cancel) {
      this.addComment = false;
    }
  }
}
