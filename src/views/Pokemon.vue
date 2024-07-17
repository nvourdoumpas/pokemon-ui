<template>
  <div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Loader from "@/components/Loader/Loader.vue";

export default defineComponent({
  setup() {
    return {};
  },
  props: {
    id: String,
  },
  data() {
    return {
      loading: false,
    };
  },
  components: {
    Loader,
  },
  created() {
    this.loading = true;
  },
});
</script>

<style scoped></style>
