import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './shared/settings/firebase-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),

    importProvidersFrom(
      //   // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      //   // provideAuth(() => getAuth()),
      //   // provideFirestore(() => getFirestore()),
      //   // provideStorage(() => getStorage())

      //   provideFirebaseApp(() => initializeApp(firebaseConfig)),
      //   provideFirestore(() => getFirestore()),
      AngularFireModule.initializeApp(firebaseConfig),
    )
  ]
};
