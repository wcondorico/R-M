import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';
import localeEsPE from '@angular/common/locales/es-PE';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { CharactersFacade } from './features/characters/aplication/facade/characters.facade';
import { CharactersHttp } from './features/characters/infraestructure/http/chcaracters.http';

registerLocaleData(localeEsPE, 'es-PE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    { provide: LOCALE_ID, useValue: 'es-PE' },
    {
      provide: CharactersFacade,
      useClass: CharactersHttp
    }
  ]
};
