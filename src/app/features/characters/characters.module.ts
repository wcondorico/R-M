import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CharactersRoutes } from './characters.routes';
import { CharactersFacade } from './aplication/facade/characters.facade';
import { CharactersHttp } from './infraestructure/http/chcaracters.http';

@NgModule({
  providers: [
    provideRouter(CharactersRoutes),
    {
      provide: CharactersFacade,
      useClass: CharactersHttp
    }
  ],
})
export class CharactersModule {}
