import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {
  @Input() pet_name: string;
  @Input() pet_ownerEmail: string;
  @Input() pet_ownerImage: string;
  @Input() pet_image: string;
  @Input() description: string;

  constructor() {}

  ngOnInit(): void {}

  getOwnerImage(): string {
    return `url(${this.pet_ownerImage})`;
  }
}
