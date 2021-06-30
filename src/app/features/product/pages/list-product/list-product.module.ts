import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductPage } from './list-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ListProductPage
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
  ],
  exports:[
    ListProductPage
  ]
})
export class ListProductModule { }
