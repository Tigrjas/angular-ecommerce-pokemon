import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../common/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'http://localhost:8080/api/pokemons';

  constructor(private httpClient: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.pokemons)
    );
  }
}

interface GetResponse {
  _embedded: {
    pokemons: Pokemon[];
  }
}
