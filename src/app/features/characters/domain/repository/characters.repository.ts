import { Observable } from "rxjs";
import { Characters, Results } from "../../core/interfaces/characters";

export abstract class CharactersRepository {
  abstract getCharacters(): Observable<Characters>;
  abstract getCharactersPage(param: string): Observable<Characters>;
  abstract getCharacterDetail(id: number): Observable<Results>;
}
