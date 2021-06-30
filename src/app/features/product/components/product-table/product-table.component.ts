import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Input() products: Product[] = [];

  @Output() update = new EventEmitter<Product>();

  @Output() delete = new EventEmitter<string>();



  displayedColumns = [
    'name',
    'price',
    'actions',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(product: Product) {
    this.update.emit(product);

  }

  onDelete(id: string) {
    this.delete.emit(id);

  }

}
