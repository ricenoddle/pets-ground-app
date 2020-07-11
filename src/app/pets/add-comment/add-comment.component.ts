import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PetsService } from 'src/app/shared/services/pets.service';
import { IPetComment } from 'src/app/shared/models/PetComment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent implements OnInit {
  @Input() petId: string;
  @Output() cancelSubmit: EventEmitter<boolean> = new EventEmitter<boolean>();

  comment: string;
  userName: string;

  constructor(
    private authService: AuthService,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getCurrentUserInfo()?.displayName;
  }

  onSubmit() {
    const comment: IPetComment = {
      comment: this.comment,
      petId: this.petId,
      commentGiver: this.userName,
    };
    this.petsService.addPetComment(comment).then((res) => {
      this.comment = null;
      this.cancelSubmit.emit(true);
    });
  }

  onCancelSubmit() {
    this.comment = null;
    this.cancelSubmit.emit(true);
  }
}
