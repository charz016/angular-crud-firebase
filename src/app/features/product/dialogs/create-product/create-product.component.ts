import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private dialogRef: MatDialogRef<CreateProductComponent>,) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    })

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.productService.createProduct(this.form.value).then(() => {
      this.dialogRef.close();
    })
  }

}
