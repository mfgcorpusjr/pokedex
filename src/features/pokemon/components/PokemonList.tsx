import PokemonListItem from "@/features/pokemon/components/PokemonListItem";

import type { Pokemon } from "@/features/pokemon/utils/types";

type Props = {
  pokemons: Pokemon[];
};

export default function PokemonList({ pokemons }: Props) {
  if (pokemons.length === 0) {
    return <p className="text-center text-sm">No Pokemon found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-0">
      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
