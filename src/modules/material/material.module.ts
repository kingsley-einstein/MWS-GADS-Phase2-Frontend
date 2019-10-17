import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatSnackBarModule,
  MatToolbarModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, 
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule, 
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class MaterialModule {}
