import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CreateProductComponent } from '../../dialogs/create-product/create-product.component';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductPage implements OnInit {

  products: Product[] = [];
  loading: boolean = true;

  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((data: any) => {
      this.products = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as Product
      });
    });
  }


  createProduct() {
    this.dialog.open(CreateProductComponent);
  }

  updateProduct(product: Product) {

  }

  deleteProduct(id: string) {

  }

}
