import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { CharactersFacade } from '../../aplication/facade/characters.facade';
import { Results } from '../../core/interfaces/characters';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'character-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './character-detail.view.html',
  styleUrl: './character-detail.view.scss',
})
export class CharacterDetailView implements OnInit {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly charactersService: CharactersFacade = inject(CharactersFacade);
  private readonly fb: FormBuilder = inject(FormBuilder)

  textNote: FormGroup = this.fb.group({
    textNoteArea: ['']
  });

  id!: number;
  data!: Results;
  listNotes: string[] = [];

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.charactersService.getCharacterDetail(id)))
      .subscribe( character => {
        this.data = character;
        console.log(this.data);
      });
  }

  addNote() {
    const text = this.textNote.get('textNoteArea')?.value.trim();
    if (text) {
      this.listNotes.push(text);
      this.textNote.reset();
    }
  }

  deleteNote(index: number) {
    this.listNotes.splice(index, 1)
  }
}
