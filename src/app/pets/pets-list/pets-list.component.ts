import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/shared/services/pets.service';
import { IPet } from 'src/app/shared/models/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent implements OnInit {
  pets: IPet[];

  constructor(private petsService: PetsService) {}

  ngOnInit(): void {
    this.petsService.getPets().subscribe((pets) => {
      this.pets = pets.map((pet) => {
        let id = pet.payload.doc.id;
        let info = pet.payload.doc.data() as IPet;
        return { ...info, id };
      });
    });
  }
}
