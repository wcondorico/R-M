import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CharactersFacade } from '../../aplication/facade/characters.facade';
import { Characters, Info } from '../../core/interfaces/characters';

@Component({
  selector: 'characters',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule,
    FormsModule,
    AsyncPipe,
    MatTabsModule
  ],
  templateUrl: './characters.view.html',
  styleUrl: './characters.view.scss',
})
export class CharactersView {
  private readonly charactersService: CharactersFacade = inject(CharactersFacade);

  characters$: Observable<Characters> = this.charactersService.getCharacters(1);
  page = signal<number>(1);
  apiUrl = signal<string>(environment.api);
  searchByNameInput = signal<string | undefined>(undefined);

  filterGender = signal<string | undefined>(undefined);
  filterStatus = signal<string | undefined>(undefined);
  filterSpecie = signal<string | undefined>(undefined);
  readonly gender: string[] = ['Male', 'Female', 'Unknown'];
  readonly status: string[] = ['Alive', 'Dead', 'Unknown'];
  readonly specie: string[] = ['Alien', 'Human'];

  prevPage(info: Info) {
    if (!info.prev) return;
    this.characters$ = this.charactersService.getCharactersPage(info.prev);
    this.page.update((v) => v - 1);
  }

  nextPage(info: Info) {
    if (!info.next) return;
    this.characters$ = this.charactersService.getCharactersPage(info.next);
    this.page.update((v) => v + 1);
  }

  firstPage(page: number) {
    this.changeFinalPage(page);
    this.page.set(1);
  }

  lastPage(page: number) {
    this.changeFinalPage(page);
    this.page.set(page);
  }

  changeFinalPage(page: number){
    this.apiUrl() == environment.api
    ? (this.characters$ = this.charactersService.getCharactersPage(
        `${this.apiUrl()}?&page=${page}`
      ))
    : (this.characters$ = this.charactersService.getCharactersPage(
        `${this.apiUrl()}&page=${page}`
      ));
  }

  applyFilters() {
    let query = '';

    if (this.filterGender()) {
      query += `&gender=${this.filterGender()}`;
    }
    if (this.filterSpecie()) {
      query += `&species=${this.filterSpecie()}`;
    }
    if (this.filterStatus()) {
      query += `&status=${this.filterStatus()}`;
    }
    if (this.searchByNameInput()) {
      query += `&name=${this.searchByNameInput()}`;
    }

    this.apiUrl.set(`${environment.api}?${query}`);
    this.characters$ = this.charactersService.getCharactersPage(this.apiUrl());
    this.page.set(1);
  }

  cleanFilters() {
    this.characters$ = this.charactersService.getCharacters(1);
    this.filterGender.set('');
    this.filterSpecie.set('');
    this.filterStatus.set('');
    this.page.set(1);
    this.apiUrl.set(environment.api);
    this.searchByNameInput.set('');
  }

  searchByName() {
    setTimeout(() => {
      this.applyFilters();
    }, 2000);
  }
}
