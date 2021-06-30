import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Office } from '../models/office';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private angularFirestore: AngularFirestore) { }

  getOfficeDoc(id: string) {
    return this.angularFirestore
      .collection('office-collection')
      .doc(id)
      .valueChanges()
  }

  getOfficeList() {
    return this.angularFirestore
      .collection("office-collection")
      .snapshotChanges();
  }

  createOffice(office: Office) {
    return this.angularFirestore
      .collection("office-collection")
      .add(office)
  }

  deleteOffice(id: string) {
    return this.angularFirestore
      .collection("office-collection")
      .doc(id)
      .delete();
  }

  updateOffice(office: Office, id: string) {
    return this.angularFirestore
      .collection("office-collection")
      .doc(id)
      .update({
        name: office.name,
      });
  }

}