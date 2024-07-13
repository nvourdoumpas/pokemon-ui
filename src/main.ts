import { createApp } from "vue";

// Vuetify
import vuetify from "@/plugins/vuetify";

// Components
import App from "@/App.vue";
import router from "@/router/router.ts";

createApp(App).use(vuetify).use(router).mount("#app");
