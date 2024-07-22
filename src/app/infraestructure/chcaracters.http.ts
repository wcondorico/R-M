import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CharactersRepository } from "../domain/repository/characters.repository";
import { Observable } from "rxjs";
import { Characters } from "../core/interfaces/characters";
import { environment } from "../../environments/environment";

@Injectable()
export class CharactersHttp extends CharactersRepository {
private readonly http: HttpClient = inject(HttpClient)
url = `${environment.api}`

  getCharacters(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.url)
  }

}
