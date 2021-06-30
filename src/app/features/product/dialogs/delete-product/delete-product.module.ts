import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteProductComponent } from './delete-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DeleteProductComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports:[DeleteProductComponent],
  entryComponents:[DeleteProductComponent],
})
export class DeleteProductModule { }
