<template>
  <div>
    <v-carousel
      class="carousel"
      :show-arrows="false"
      hide-delimiters
      hide-delimiter-background
    >
      <v-carousel-item>
        <iframe
          src="https://www.youtube.com/embed/DX1aBG9AdQU?autoplay=1&mute=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        >
        </iframe>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
#app iframe {
  width: 100%;
  height: 90%;
}

.carousel {
  max-height: calc(100vh - 6rem);
}
</style>
