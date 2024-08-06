import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { charactersRoutes } from './characters.routes';
import { CharactersFacade } from './aplication/facade/characters.facade';
import { CharactersHttp } from './infraestructure/http/chcaracters.http';

@NgModule({
  providers: [
    provideRouter(charactersRoutes),
    {
      provide: CharactersFacade,
      useClass: CharactersHttp
    }
  ],
})
export class CharactersModule {}
