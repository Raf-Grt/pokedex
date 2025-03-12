import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from '../../interfaces/pokemon-details';
import { PokemonService } from '../../services/pokemon.service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [UpperCasePipe, TitleCasePipe, RouterLink],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: PokemonDetails | null = null;

  constructor(
    private pokeService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokeService.getPokemonDetails(+id).subscribe((data) => {
        this.pokemonDetails = data;
      });
    }
  }
}
