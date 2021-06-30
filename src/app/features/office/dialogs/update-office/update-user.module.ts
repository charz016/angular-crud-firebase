import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateOfficeComponent } from './update-office.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    UpdateOfficeComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports:[UpdateOfficeComponent],
  entryComponents:[UpdateOfficeComponent],
})
export class UpdateOfficeModule { }
