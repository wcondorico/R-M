import { Injectable, inject } from '@angular/core';
import { CharactersRepository } from '../../domain/repository/characters.repository';

@Injectable()
export class CharactersFacade {

  characters = inject(CharactersRepository)

  getCharacters() {
    return this.characters.getCharacters();
  }

  getCharactersPage(param: string) {
    return this.characters.getCharactersPage(param);
  }

  getCharacterDetail(id: number) {
    return this.characters.getCharacterDetail(id);
  }
}
