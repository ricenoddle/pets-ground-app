import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
@Injectable()
export class PetsService {
  constructor(private afs: AngularFirestore) {}

  getPets() {
    return this.afs.collection('pets_info').snapshotChanges();
  }
}
