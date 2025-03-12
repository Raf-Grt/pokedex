import { Routes } from '@angular/router';
import { PokemonListComponent } from './component/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './component/pokemon-details/pokemon-details.component';

export const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'pokemon/:id', component: PokemonDetailsComponent },
];
