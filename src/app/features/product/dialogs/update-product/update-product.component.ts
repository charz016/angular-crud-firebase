import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { product: Product },
  ) {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    this.form.patchValue({
      ...this.data.product
    })    
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.productService.updateProduct(this.form.value, this.data.product.id).then(() => {
      this.dialogRef.close();
    })
  }

}
