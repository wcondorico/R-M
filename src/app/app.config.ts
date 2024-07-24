import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';
import localeEsPE from '@angular/common/locales/es-PE';

import { routes } from './app.routes';
import { CharactersFacade } from './aplication/facade/characters.facade';
import { CharactersHttp } from './infraestructure/chcaracters.http';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(localeEsPE, 'es-PE');

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'es-PE' },
    {
      provide: CharactersFacade,
      useClass: CharactersHttp
    }
  ]

};
