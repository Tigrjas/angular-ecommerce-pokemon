import { Component } from '@angular/core';
import { Pokemon } from '../../common/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  // templateUrl: './pokemon-list.component.html',
  templateUrl: './pokemon-list-table.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.listPokemon();
  }

  listPokemon() {
    this.pokemonService.getPokemonList().subscribe(
      data => {
        this.pokemons = data;
      }
    )
  }

}
