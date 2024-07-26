import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { CharactersFacade } from '../../aplication/facade/characters.facade';
import { Characters } from '../../core/interfaces/characters';

@Component({
  selector: 'characters',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './characters.view.html',
  styleUrl: './characters.view.scss',
})
export class CharactersView implements OnInit {
  private readonly charactersService: CharactersFacade = inject(CharactersFacade);

  characters!: Characters;
  page: number = 1;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe((list) => {
      this.characters = list;
    });
  }

  prevPage() {
    if (this.characters.info.prev)
      this.charactersService
        .getCharactersPage(this.characters.info.prev)
        .subscribe((list) => {
          this.characters = list;
        });
    if (this.page > 1) this.page--;
  }

  nextPage() {
    if (this.characters.info.next)
      this.charactersService
        .getCharactersPage(this.characters.info.next)
        .subscribe((list) => (this.characters = list));
    if (this.page < this.characters.info.pages) this.page++;
  }
}
