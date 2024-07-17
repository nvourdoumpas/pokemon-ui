import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "Home",
    },
  },
  {
    path: "/pokemons",
    name: "pokemons",
    component: () => import("@/views/Pokemons.vue"),
    meta: {
      title: "Pokemons",
    },
  },
  {
    path: "/pokemons/:id",
    name: "pokemon",
    component: () => import("@/views/Pokemon.vue"),
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
