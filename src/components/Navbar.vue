<template>
  <div>
    <v-app-bar
      color="teal-darken-4"
      image="https://i.insider.com/5d0bf7bc0a284967e94ab267?width=1000&format=jpeg&auto=webp"
    >
      <router-link to="/" class="text-decoration-none text-white mx-6">
        <v-img width="100" max-width="100" class="mx-6" :src="logo"></v-img>
      </router-link>

      <router-link to="/pokemons" class="text-decoration-none text-white mx-6">
        <v-app-bar-title>Pokemons</v-app-bar-title>
      </router-link>

      <router-link to="/about" class="text-decoration-none text-white mx-6">
        <v-app-bar-title>About</v-app-bar-title>
      </router-link>

      <template v-slot:image>
        <v-img
          gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/pokemon.png";

export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      logo,
    };
  },
});
</script>

<style scoped></style>
