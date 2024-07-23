import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersView } from './view/characters/characters.view';
import { CharacterDetailView } from './view/character-detail/character-detail.view';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharactersView,
    CharacterDetailView
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
