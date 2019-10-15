import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule],
  exports: [MatButtonModule, MatInputModule, MatProgressSpinnerModule, MatSnackBarModule]
})
export class MaterialModule {}
