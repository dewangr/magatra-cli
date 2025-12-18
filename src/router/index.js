import { createRouter, createWebHistory } from "vue-router";
import Wedding1Views from "../views/Wedding1Views.vue";
import TextOnlyViews1 from "../views/TextOnlyViews1.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import OtonanTelubulanan from "@/views/OtonanTelubulanan.vue";

const routes = [
  {
    path: "/indra-rika/",
    name: "Wedding1Views",
    component: Wedding1Views,
    props: true,
  },
  {
    path: "/mangagus-dewi/",
    name: "TextOnlyViews1",
    component: TextOnlyViews1,
    props: true,
  },
  {
    path: "/telubulanan/anakdika",
    name: "OtonanTelubulanan",
    component: OtonanTelubulanan,
    props: true,
  },
  {
    path: "/not-found",
    name: "NotFoundView",
    component: NotFoundView,
  },

  {
    path: "/",
    redirect: "/telubulanan/anakdika",
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
