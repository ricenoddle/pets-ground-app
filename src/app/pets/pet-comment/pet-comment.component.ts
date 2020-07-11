import { Component, OnInit, Input } from '@angular/core';
import { IPetComment } from 'src/app/shared/models/PetComment';
import { PetsService } from 'src/app/shared/services/pets.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertLoginDialogComponent } from 'src/app/shared/popups/alert-login-dialog/alert-login-dialog.component';

@Component({
  selector: 'app-pet-comment',
  templateUrl: './pet-comment.component.html',
  styleUrls: ['./pet-comment.component.scss'],
})
export class PetCommentComponent implements OnInit {
  @Input() id: string;

  petComments: IPetComment[];
  addComment: boolean = false;

  constructor(
    private petsService: PetsService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.petsService.getPetCommentsById(this.id).subscribe((comments) => {
      this.petComments = comments as IPetComment[];
    });
  }

  onAddComment() {
    if (this.authService.getCurrentUserInfo() !== null) {
      this.addComment = true;
    } else {
      this.dialog.open(AlertLoginDialogComponent);
    }
  }

  handleCancel(cancel: boolean) {
    if (cancel) {
      this.addComment = false;
    }
  }
}
