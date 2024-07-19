export default interface getPokemonsResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: NamedAPIResource[];
  moves: NamedAPIResource[];
  types: Types[];
}

type NamedAPIResource = {
  name: string;
  url: string;
};

type Types = {
  slot: number;
  type: NamedAPIResource;
};
