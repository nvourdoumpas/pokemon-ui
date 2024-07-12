<template>
  <div>
    <v-responsive>
      <v-app>
        <Navbar />
        <v-main>
          <v-container>
            <router-view> </router-view>
          </v-container>
        </v-main>
      </v-app>
    </v-responsive>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<style scoped></style>
