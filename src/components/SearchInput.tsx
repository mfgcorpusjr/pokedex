"use client";

import { LucideSearch } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

type Props = {
  onSearch: (search: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
  return (
    <InputGroup className="max-w-xl mx-auto">
      <InputGroupInput
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search Pokemon..."
      />

      <InputGroupAddon align="inline-start">
        <LucideSearch className="text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}
