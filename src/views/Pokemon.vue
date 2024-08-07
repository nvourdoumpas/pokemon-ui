<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <v-card class="mt-6" color="blue-grey">
        <v-row>
          <v-col cols="12" md="4">
            <v-img
              color="surface-variant"
              height="100%"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="8">
            <v-card flat height="100%" color="transparent">
              <v-card-title
                class="mt-4 text-h5 text-uppercase font-weight-black"
              >
                <span class="font-italic"># {{ pokemon.id }}</span> -
                {{ pokemon.name }}
              </v-card-title>
              <v-divider class="mr-6"></v-divider>
              <v-card-text>
                <v-row>
                  <h4 class="mt-8 mr-4">Types:</h4>
                  <v-col
                    v-for="pokemonType in pokemon.types"
                    :key="pokemonType.slot"
                    cols="1"
                    class="mx-5"
                  >
                    <v-sheet
                      :elevation="4"
                      :height="52"
                      :width="45"
                      class="pa-1"
                      color="black"
                      rounded
                    >
                      <v-img
                        :alt="pokemonType.type.name"
                        :src="getTypeImage(pokemonType.type.name)"
                        cover
                      ></v-img>
                    </v-sheet>
                  </v-col>
                </v-row>
                <v-row class="mt-6">
                  <h4 class="mr-3">Dimensions:</h4>
                  <v-icon
                    icon="mdi-arrow-expand-vertical"
                    class="mr-4"
                  ></v-icon>
                  {{ pokemon.height }}
                  <v-icon icon="mdi-weight" class="mx-4"></v-icon>
                  {{ pokemon.weight }}
                </v-row>
                <v-row class="mt-9">
                  <h4 class="mr-9">Base XP:</h4>
                  {{ pokemon.base_experience }}
                </v-row>
                <v-row class="mt-9">
                  <h4 class="mr-6 mt-1">Abilities:</h4>
                  <v-chip
                    variant="elevated"
                    v-for="(ability, index) in pokemon.abilities"
                    :key="index"
                    class="mx-2"
                    color="white"
                  >
                    {{ ability.ability.name }}
                  </v-chip>
                </v-row>
                <v-row class="mt-9">
                  <h4 class="mb-2">Stats:</h4>
                  <v-table class="text-caption" density="compact" dense>
                    <tbody>
                      <tr>
                        <td></td>
                        <td v-for="(stat, index) in pokemon.stats" :key="index">
                          {{ stat.stat.name }}
                        </td>
                      </tr>
                      <tr>
                        <td>base</td>
                        <td
                          v-for="(stat, index) in pokemon.stats"
                          :key="index"
                          align="center"
                        >
                          {{ stat.base_stat }}
                        </td>
                      </tr>
                      <tr>
                        <td>effort</td>
                        <td
                          v-for="(stat, index) in pokemon.stats"
                          :key="index"
                          align="center"
                        >
                          {{ stat.effort }}
                        </td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-row>
                <v-row class="mt-9">
                  <h4 class="mr-6 mt-1">Moves:</h4>
                  <v-chip
                    variant="tonal"
                    label
                    v-for="(move, index) in pokemon.moves"
                    :key="index"
                    class="ma-1"
                    color="white"
                    size="x-small"
                  >
                    {{ move.move.name }}
                  </v-chip>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/Loader/Loader.vue";
import Pokemon from "@/types/getPokemonResponse";
import pokemonService from "@/services/pokemonService";

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      pokemon: {} as Pokemon,
    };
  },
  components: {
    Loader,
  },
  created() {
    this.loading = true;
    pokemonService
      .getPokemon(this.id)
      .then((response: any) => {
        this.pokemon = response.data;
      })
      .catch((e: Error) => {
        console.log(e);
      })
      .finally(() => {
        this.loading = false;
      });
  },
  methods: {
    getTypeImage(type: string) {
      return new URL(`../assets/pokemonTypes/${type}.jpg`, import.meta.url)
        .href;
    },
  },
});
</script>

<style scoped></style>
