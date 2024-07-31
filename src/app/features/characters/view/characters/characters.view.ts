import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { CharactersFacade } from '../../aplication/facade/characters.facade';
import { Characters, Info } from '../../core/interfaces/characters';

@Component({
  selector: 'characters',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    AsyncPipe,
  ],
  templateUrl: './characters.view.html',
  styleUrl: './characters.view.scss',
})
export class CharactersView {
  private readonly charactersService: CharactersFacade = inject(CharactersFacade);
  characters$: Observable<Characters> = this.charactersService.getCharacters();

  page = signal<number>(1);

  prevPage(info: Info) {
    if (!info.prev) return;

    this.characters$ = this.charactersService.getCharactersPage(info.prev);
    this.page.update(value => value - 1);
  }

  nextPage(info: Info) {
    if (!info.next) return;

    this.characters$ = this.charactersService.getCharactersPage(info.next);
    this.page.update(value => value + 1);
  }
}
