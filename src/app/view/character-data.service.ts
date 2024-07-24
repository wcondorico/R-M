import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class CharacterData {
  private dataCharacter = new ReplaySubject<number>(1);
  currentCharacter = this.dataCharacter.asObservable();

  sendCharacter(id: number) {
    this.dataCharacter.next(id);
    console.log(id)
  }
}
