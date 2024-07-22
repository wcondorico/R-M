import { Injectable, inject } from '@angular/core';
import { CharactersRepository } from '../../domain/repository/characters.repository';

@Injectable()
export class CharactersFacade {

  characters = inject(CharactersRepository)

  getCharacters() {
    return this.characters.getCharacters();
  }
}
