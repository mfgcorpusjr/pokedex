import PokemonWrapper from "@/features/pokemon/components/PokemonWrapper";

import getPokemons from "@/features/pokemon/queries/getPokemons";

export default async function HomePage() {
  const pokemons = await getPokemons();

  return (
    <main className="container mx-auto px-4 sm:px-8 py-16 space-y-8">
      <h1 className="text-2xl text-primary text-center font-black tracking-tight">
        Pokedex
      </h1>

      <PokemonWrapper pokemons={pokemons} />
    </main>
  );
}
