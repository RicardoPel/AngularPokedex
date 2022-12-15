import { Pokemon } from "./pokemon";

export interface fetchPokemon {
  count: number;
  next: string;
  prev: string;
  results: Pokemon[];
}