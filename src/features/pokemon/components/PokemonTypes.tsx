import { Badge } from "@/components/ui/badge";

type Props = {
  types: string[];
};

const colors: { [key: string]: string } = {
  normal: "#aab09f",
  fighting: "#cb5f48",
  flying: "#7da6de",
  poison: "#b468b7",
  ground: "#cc9f4f",
  rock: "#b2a061",
  bug: "#94bc4a",
  ghost: "#846ab6",
  steel: "#89a1b0",
  fire: "#ea7a3c",
  water: "#539ae2",
  grass: "#71c558",
  electric: "#e5c531",
  psychic: "#e5709b",
  ice: "#70cbd4",
  dragon: "#6a7baf",
  dark: "#736c75",
  fairy: "#e397d1",
  stellar: "#40b5a4",
  unknown: "#81a596",
};

export default function PokemonTypes({ types }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {types.map((type, index) => {
        const color = colors[type.toLowerCase()];

        return (
          <Badge
            key={index}
            variant="secondary"
            style={{
              color,
              backgroundColor: `${color + 20}`,
            }}
          >
            {type}
          </Badge>
        );
      })}
    </div>
  );
}
