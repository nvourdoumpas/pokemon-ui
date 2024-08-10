import { defineStore } from "pinia";
import Pokemon from "@/types/getPokemonResponse";

export const usePokemonStore = defineStore("pokemon", {
  state: () => {
    return { favorites: [] as Pokemon[] };
  },
  actions: {
    checkPokemonIsFavorite(id: number): number {
      return this.favorites.findIndex((p) => p.id === id);
    },
    addFavoritePokemon(pokemon: Pokemon) {
      if (this.checkPokemonIsFavorite(pokemon.id) === -1) {
        this.favorites.push(pokemon);
      }
    },
  },
});
