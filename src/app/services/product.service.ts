import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularFirestore: AngularFirestore) { }

  getProductDoc(id: string) {
    return this.angularFirestore
      .collection('product-collection')
      .doc(id)
      .valueChanges()
  }

  getProductList() {
    return this.angularFirestore
      .collection("product-collection")
      .snapshotChanges();
  }

  createProduct(product: Product) {
    return this.angularFirestore
      .collection("product-collection")
      .add(product)
  }

  deleteProduct(id: string) {
    return this.angularFirestore
      .collection("product-collection")
      .doc(id)
      .delete();
  }

  updateProduct(product: Product, id: string) {
    return this.angularFirestore
      .collection("product-collection")
      .doc(id)
      .update({
        name: product.name,
        price: product.price,
      });
  }

}
