import { Injectable, inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CharactersRepository } from "../../domain/repository/characters.repository";
import { Observable } from "rxjs";
import { Characters, Results } from "../../core/interfaces/characters";
import { environment } from "../../../../../environments/environment";

@Injectable()
export class CharactersHttp extends CharactersRepository {
private readonly http: HttpClient = inject(HttpClient)
url = `${environment.api}`

  getCharacters(page: number): Observable<Characters> {
    return this.http.get<Characters>(`${this.url}/?page=${page}`);
  }

  getCharactersPage(param: string): Observable<Characters> {
    return this.http.get<Characters>(param);
  }

  getCharacterDetail(id: number): Observable<Results> {
    return this.http.get<Results>(`${this.url}/${id}`);
  }

}
