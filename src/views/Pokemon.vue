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
              height="400"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
            >
            </v-img>
          </v-col>
          <v-col cols="12" md="8">
            <v-card flat height="100%" color="transparent">
              <v-card-title
                class="mt-4 text-h4 text-uppercase font-weight-black"
              >
                {{ pokemon.name }}
              </v-card-title>
              <v-card-subtitle class="text-h6 font-italic">
                # {{ pokemon.id }}
              </v-card-subtitle>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-row>
                      <v-col cols="2" class="mt-4"> Types: </v-col>
                      <v-col
                        v-for="pokemonType in pokemon.types"
                        :key="pokemonType.slot"
                        cols="1"
                      >
                        <v-sheet
                          :elevation="4"
                          :height="50"
                          :width="40"
                          rounded
                          color="black"
                        >
                          <v-img
                            :alt="pokemonType.type.name"
                            :src="getTypeImage(pokemonType.type.name)"
                            cover
                          ></v-img>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-col>
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
