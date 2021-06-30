import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductPage } from './list-product.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProductModule } from '../../dialogs/create-product/create-product.module';
import { DeleteProductModule } from '../../dialogs/delete-product/delete-product.module';
import { ProductTableModule } from '../../components/product-table/product-table.module';




@NgModule({
  declarations: [
    ListProductPage
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    CreateProductModule,
    DeleteProductModule,
    ProductTableModule,
  ],
  exports:[
    ListProductPage
  ]
})
export class ListProductModule { }
