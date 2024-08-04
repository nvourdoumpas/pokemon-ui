export default interface getPokemonsResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: Ability[];
  moves: Move[];
  types: Type[];
  stats: Stat[];
}

type NamedAPIResource = {
  name: string;
  url: string;
};

type Ability = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

type Move = {
  move: NamedAPIResource;
  version_group_details: MoveVersion;
};

type MoveVersion = {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};

type Type = {
  slot: number;
  type: NamedAPIResource;
};

type Stat = {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
};
