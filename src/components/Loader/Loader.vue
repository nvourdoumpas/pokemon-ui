<template>
  <div class="loader"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.loader {
  display: inline-grid;
  font-size: 50px;
  width: 50px;
  min-height: 50px;
  padding: 5px;
  justify-content: center;
  align-items: center;

  /* position the div in center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loader:before,
.loader:after {
  content: url("@/assets/loader.png");
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
