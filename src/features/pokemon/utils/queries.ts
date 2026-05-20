import type { Pokemon } from "@/features/pokemon/utils/types";

export const getPokemons = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=40");
    const data: { results: { url: string }[] } = await res.json();

    const pokemons: Pokemon[] = await Promise.all(
      data.results.map(async (result) => {
        const res = await fetch(result.url, { cache: "force-cache" });
        const data = await res.json();

        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other["official-artwork"].front_shiny,
          types: data.types.map(
            (type: { type: { name: string } }) => type.type.name,
          ),
        };
      }),
    );

    return pokemons;
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : "An unknown error occurred",
    );
  }

  return [];
};
