import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductPage } from './list-product.component';



@NgModule({
  declarations: [
    ListProductPage
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListProductPage
  ]
})
export class ListProductModule { }
