import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CharactersFacade } from '../../aplication/facade/characters.facade';
import { Results } from '../../core/interfaces/characters';


@Component({
  selector: 'characters',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './characters.view.html',
  styleUrl: './characters.view.scss'
})
export class CharactersView implements OnInit{
  private readonly charactersService: CharactersFacade = inject(CharactersFacade);

  characters!: Results[]

  ngOnInit(){
    this.getCharacters()
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe(list => {
      this.characters = list.results;
      console.log(this.characters)
    })
  }

}
