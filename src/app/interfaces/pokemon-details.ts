export interface PokemonDetails {
  name: string;
  types: {
    type: { name: string };
  }[];
  sprites: {
    front_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
