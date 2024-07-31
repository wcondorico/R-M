import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  private readonly charactersService: CharactersFacade = inject(CharactersFacade);
  private readonly fb: FormBuilder = inject(FormBuilder)

  id = input.required<number>();
  characterDetail$!: Observable<Results>;

  textNote: FormGroup = this.fb.group({
    textNoteArea: ['']
  });

  listNotes: string[] = [];

  ngOnInit() {
    this.characterDetail$ = this.charactersService.getCharacterDetail(this.id());
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
