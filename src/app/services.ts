import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count, Observable } from "rxjs";
import { fetchPokemon } from './interfaces/fetchPokemon';
import { Pokemon } from './interfaces/pokemon';


@Injectable()
export class Services {
  private http: HttpClient
    private baseUrl:string=' https://pokeapi.co/api/v2/'
  constructor(http: HttpClient) {
    this.http = http
  }

  public getPokemons():Observable<fetchPokemon>   {
    return this.http.get<fetchPokemon>(`${this.baseUrl}pokemon/`)
  }
}