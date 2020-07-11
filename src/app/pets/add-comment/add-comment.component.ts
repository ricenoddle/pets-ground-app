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
  userId: string;

  constructor(
    private authService: AuthService,
    private petsService: PetsService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getCurrentUserInfo()?.email;
  }

  onSubmit() {
    const comment: IPetComment = {
      comment: this.comment,
      petId: this.petId,
      commentGiver: this.userId,
    };
    this.petsService.addPetComment(comment).then((res) => {
      this.comment = null;
      this.cancelSubmit.emit(true);
      console.log('add Successfully');
    });
  }

  onCancelSubmit() {
    this.comment = null;
    this.cancelSubmit.emit(true);
  }
}
