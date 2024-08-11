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
    beforeEnter(routeTo, routeFrom, next) {
      let id: number = Number(routeTo.params.id);
      if (Number.isNaN(id)) {
        next({ name: "NotFound" });
      } else {
        next();
      }
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
