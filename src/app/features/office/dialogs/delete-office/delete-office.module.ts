import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteOfficeComponent } from './delete-office.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DeleteOfficeComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports:[DeleteOfficeComponent],
  entryComponents:[DeleteOfficeComponent],
})
export class DeleteOfficeModule { }
