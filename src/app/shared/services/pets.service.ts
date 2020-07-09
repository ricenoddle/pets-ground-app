import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { IPetComment } from '../models/PetComment';

const petsCollection = {
  petsInfo: 'pets_info',
  petsComment: 'pets_comments',
};

@Injectable()
export class PetsService {
  constructor(private afs: AngularFirestore) {}

  getPets() {
    return this.afs.collection(petsCollection.petsInfo).snapshotChanges();
  }

  getPetByDocId(id: string) {
    return this.afs.collection(petsCollection.petsInfo).doc(id).valueChanges();
  }

  getPetCommentsById(id: string) {
    return this.afs
      .collection(petsCollection.petsComment)
      .valueChanges()
      .pipe(
        map((petComments) => {
          let target = petComments as IPetComment[];
          return target.filter((comment) => comment.petId === id);
        })
      );
  }

  addPetComment(comment: IPetComment) {
    return this.afs.collection(petsCollection.petsComment).add(comment);
  }
}
