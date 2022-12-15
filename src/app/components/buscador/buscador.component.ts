import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Services } from 'src/app/services';
import { fetchPokemon } from '../../interfaces/fetchPokemon';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  private api:Services
  public pokemons:Pokemon[]=[]
  constructor(api: Services) {
    this.api = api
  }

  
 
  public buscadorFormulario=new FormGroup({
    termino:new FormControl(),
  })



  public buscar() {
    console.log("hello")
    // console.log(this.buscadorFormulario.controls.termino.value)
    this.api.getPokemons().subscribe((resp: fetchPokemon) => {
      console.log(resp)
      this.pokemons=resp.results
    })
  }
}
