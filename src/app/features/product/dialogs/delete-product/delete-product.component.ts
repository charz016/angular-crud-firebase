import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { id:string },)
     {

  }

  ngOnInit(): void {    
  }

  onSubmit() {

    this.productService.deleteProduct(this.data.id).then(() => {
      this.dialogRef.close();
    })
  }

}
