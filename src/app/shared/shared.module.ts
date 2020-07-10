import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { PetsService } from './services/pets.service';
import { AlertLoginDialogComponent } from './popups/alert-login-dialog/alert-login-dialog.component';
import { IsLoginGuard } from './route-guard/is-login.guard';

@NgModule({
  declarations: [AlertLoginDialogComponent],
  imports: [CommonModule, RouterModule, MatDialogModule, MatButtonModule],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [PetsService, IsLoginGuard],
})
export class SharedModule {}
