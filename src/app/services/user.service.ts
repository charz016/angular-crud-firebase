import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularFirestore: AngularFirestore) { }

  getUserDoc(id: string) {
    return this.angularFirestore
      .collection('user-collection')
      .doc(id)
      .valueChanges()
  }

  getUserList() {
    return this.angularFirestore
      .collection("user-collection")
      .valueChanges();
  }

  createUser(user: User) {
    return this.angularFirestore
      .collection("user-collection")
      .add(user)
  }

  deleteUser(user: User) {
    return this.angularFirestore
      .collection("user-collection")
      .doc(user.id)
      .delete();
  }

  updateUser(user: User, id: string) {
    return this.angularFirestore
      .collection("user-collection")
      .doc(id)
      .update({
        name: user.name,
        user: user.user,
        password: user.password
      });
  }

}
