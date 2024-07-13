<template>
  <div>
    <div v-if="loading" class="loader"></div>
    <div v-else>
      <v-row v-if="pokemons" justify="center">
        <v-col
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          cols="6"
          sm="4"
          lg="3"
        >
          <v-card color="indigo" variant="tonal" class="mx-auto" link>
            <v-img
              color="surface-variant"
              height="300"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
                pokemon
              )}.png`"
              cover
            >
              <v-toolbar color="transparent">
                <v-toolbar-title
                  class="text-h6"
                  :text="`# ${getPokemonId(pokemon)}`"
                ></v-toolbar-title>

                <template v-slot:append>
                  <v-btn icon="mdi-heart-outline" variant="text"></v-btn>
                </template>
              </v-toolbar>
            </v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0 text-uppercase">
                  {{ pokemon.name }}
                </h3>
              </div>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-pagination
        v-if="totalItems != 0"
        v-model="page"
        :length="totalItems / itemsPerPage"
        class="mt-4"
      ></v-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pokemons from "@/types/getPokemonsResponse";
import pokemonService from "@/services/pokemonService";
import logo from "@/assets/pokemon.png";

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      pokemons: [] as Pokemons[],
      loading: false as boolean,
      page: 1 as number,
      totalItems: 0 as number,
      itemsPerPage: 20 as number,
      totalPages: 0 as number,
      logo,
    };
  },
  watch: {
    totalItems() {
      this.totalPages = this.totalItems / this.itemsPerPage;
    },
    page() {
      this.pokemons = [];
      var offset = (this.page - 1) * this.itemsPerPage;
      this.getPokemons(offset, this.itemsPerPage);
    },
  },

  created() {
    this.loading = true;
    this.getPokemons(0, this.itemsPerPage);
  },
  methods: {
    getPokemons(offset: number, limit: number) {
      this.loading = true;
      pokemonService
        .getPokemons(offset, limit)
        .then((response: any) => {
          this.pokemons = response.data.results;
          this.totalItems = response.data.count;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getPokemonId(pokemon: any) {
      var splittedUrl = pokemon.url.split("/");
      var id = splittedUrl[splittedUrl.length - 2];
      return id;
    },
  },
});
</script>

<style scoped>
.loader {
  display: inline-grid;
  font-size: 50px;
}
.loader:before,
.loader:after {
  content: url("../assets/pokemon.png");
  grid-area: 1/1;
}
.loader:after {
  animation: l10 1s infinite;
}
@keyframes l10 {
  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
