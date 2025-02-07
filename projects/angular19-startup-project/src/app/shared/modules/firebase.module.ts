import { NgModule } from '@angular/core';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from '../settings/firebase-config';


const firebaseModules = [
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideFirestore(() => getFirestore()),
  AngularFireModule.initializeApp(firebaseConfig),
];

@NgModule({
  imports: firebaseModules,
  // exports: firebaseModules
})
export class FirebaseModule { }
