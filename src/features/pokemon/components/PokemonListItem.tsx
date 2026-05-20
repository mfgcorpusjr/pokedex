import Image from "next/image";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import PokemonTypes from "@/features/pokemon/components/PokemonTypes";

import type { Pokemon } from "@/features/pokemon/utils/types";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonListItem({ pokemon }: Props) {
  return (
    <Card className="hover:scale-105 transition-transform duration-300">
      <CardHeader className="relative h-48">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          className="object-contain"
        />
      </CardHeader>

      <CardContent className="flex flex-col justify-center items-center gap-2">
        <p className="text-xs text-muted-foreground">
          #{pokemon.id.toString().padStart(3, "0")}
        </p>

        <h4 className="font-medium capitalize">{pokemon.name}</h4>

        <PokemonTypes types={pokemon.types} />
      </CardContent>
    </Card>
  );
}
