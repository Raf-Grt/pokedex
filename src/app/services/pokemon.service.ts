import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';
import { PokemonDetails } from '../interfaces/pokemon-details';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private API_URL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(
      `${this.API_URL}/pokemon?limit=100000&offset=0`
    );
  }

  getPokemonDetails(id: number): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.API_URL}/pokemon/${id}`);
  }
}

export interface PokeApiResponse {
  results: Pokemon[];
}
