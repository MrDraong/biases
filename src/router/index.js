import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";
import Party from "../views/Party.vue";
const routes = [
  {
    path: "/",
    name: "Game",
    component: Game,
  },
  {
    path: "/party/:username",
    name: "Party",
    component: Party,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
