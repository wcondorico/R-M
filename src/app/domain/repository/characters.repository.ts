import { Observable } from "rxjs";
import { Characters } from "../../core/interfaces/characters";

export abstract class CharactersRepository {
  abstract getCharacters(): Observable<Characters>;
  abstract getCharactersPage(param: string): Observable<Characters>;
}
