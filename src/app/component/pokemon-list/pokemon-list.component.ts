import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      this.pokemons = data.results;
    });
  }

  getPokemonImgUrl(pokemon: Pokemon): string {
    const imageEndpoint: string =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const pokemonId: string = pokemon.url.split('/')[6];
    const extention: string = '.png';

    return imageEndpoint + pokemonId + extention;
  }

  goToPokemonDetails(pokemon: Pokemon) {
    const id = +pokemon.url.split('/')[6];
    if (id && id > 0) {
      this.router.navigate(['/pokemon', id]);
    }
  }
}
