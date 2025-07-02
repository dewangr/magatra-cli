import { createRouter, createWebHistory } from "vue-router";
import Wedding1Views from "../views/Wedding1Views.vue";

const routes = [
  {
    path: "/indra-rika/",
    name: "Wedding1Views",
    component: Wedding1Views,
    props: true,
  },
  {
    path: "/",
    redirect: "/indra-rika/",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
