<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else>
      <v-row v-if="pokemons" justify="center">
        <v-col
          v-for="pokemon in pokemons"
          :key="pokemon.name"
          cols="6"
          sm="4"
          lg="3"
        >
          <v-card
            color="indigo"
            variant="tonal"
            class="mx-auto"
            link
            @click="showPokemon(pokemon)"
          >
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
                  <v-btn
                    :icon="
                      checkPokemonIsFavorite(getPokemonId(pokemon)) === -1
                        ? 'mdi-heart-outline'
                        : 'mdi-heart'
                    "
                    variant="text"
                    @click="addToFavoritesPokemon(pokemon)"
                  ></v-btn>
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
import Loader from "@/components/Loader/Loader.vue";
import { usePokemonStore } from "@/store/pokemon";
import { mapActions } from "pinia";

export default defineComponent({
  // Option API
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
    };
  },
  components: {
    Loader,
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
    ...mapActions(usePokemonStore, [
      "checkPokemonIsFavorite",
      "addFavoritePokemon",
    ]),
    getPokemons(offset: number, limit: number) {
      this.loading = true;
      pokemonService
        .getPokemons(offset, limit)
        .then((response: any) => {
          this.pokemons = response.data.results;
          this.totalItems = response.data.count;
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
    showPokemon(pokemon: any) {
      let id = this.getPokemonId(pokemon);
      this.$router.push(`/pokemons/${id}`);
    },
    addToFavoritesPokemon(pokemon: any) {
      let id = this.getPokemonId(pokemon);
      pokemonService
        .getPokemon(id)
        .then((response: any) => {
          this.addFavoritePokemon(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
});
</script>

<style scoped></style>
