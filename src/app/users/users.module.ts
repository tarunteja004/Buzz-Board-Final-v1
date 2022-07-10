import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { FormControl, Validators } from '@angular/forms';

@NgModule({
  declarations: [AddUsersComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    // FormControl,
    // Validators,
  ],
  exports: [AddUsersComponent],
})
export class UsersModule {}
