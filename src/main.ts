import { createApp } from "vue";

// Pinia
import { createPinia } from "pinia";

// Vuetify
import vuetify from "@/plugins/vuetify";

// Components
import App from "@/App.vue";
import router from "@/router/router.ts";

createApp(App).use(createPinia()).use(vuetify).use(router).mount("#app");
