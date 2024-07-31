import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CharactersRoutes } from './characters.routes';

@NgModule({
  providers: [
    provideRouter(CharactersRoutes),
  ],
})
export class CharactersModule {}
