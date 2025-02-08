import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from './shared/settings/firebase-config';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { HandleErrorInterceptor } from './shared/interceptors/handle-error-interceptor';
import { LoggerInterceptor } from './shared/interceptors/logger-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
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
    ),

    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
  ]
};
