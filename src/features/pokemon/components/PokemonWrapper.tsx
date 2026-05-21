"use client";

import { useState } from "react";

import SearchInput from "@/components/commons/SearchInput";
import PokemonList from "@/features/pokemon/components/PokemonList";

import type { Pokemon } from "@/features/pokemon/utils/types";

type Props = {
  pokemons: Pokemon[];
};

export default function PokemonWrapper({ pokemons }: Props) {
  const [pokemonsState, setPokemonsState] = useState(pokemons);

  const handleSearch = (search: string) => {
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.trim().toLowerCase()),
    );

    setPokemonsState(filteredPokemons);
  };

  return (
    <>
      <SearchInput placeholder="Search Pokemon..." onSearch={handleSearch} />

      <PokemonList pokemons={pokemonsState} />
    </>
  );
}
