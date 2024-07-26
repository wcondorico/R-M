import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { CharactersFacade } from '../../aplication/facade/characters.facade';
import { Results } from '../../core/interfaces/characters';

@Component({
  selector: 'character-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatListModule],
  templateUrl: './character-detail.view.html',
  styleUrl: './character-detail.view.scss',
})
export class CharacterDetailView implements OnInit {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly charactersService: CharactersFacade =
    inject(CharactersFacade);

  id!: number;
  data!: Results;

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.charactersService.getCharacterDetail(id)))
      .subscribe( character => {
        this.data = character;
        console.log(this.data);
      });
  }
}
