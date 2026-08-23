import { createRouter, createWebHistory } from "vue-router";
import TextOnlyViews1 from "../views/TextOnlyViews1.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import UnderConstructionView from "@/views/UnderConstructionView.vue";
import OtonanTelubulanan from "@/views/OtonanTelubulanan.vue";
import DekDwiManik from "@/views/DekDwiManik.vue";
import OdeSaktu from "@/views/OdeSaktu.vue";
// import DarmaAyuAlternative from "@/views/DarmaAyuAlternative.vue";
import DarmaAyudwi from "@/views/DarmaAyudwi.vue";

const routes = [
  // {
  //   path: "/indra-rika/",
  //   name: "Wedding1Views",
  //   component: Wedding1Views,
  //   props: true,
  // },
  {
    path: "/mangagus-dewi/",
    name: "TextOnlyViews1",
    component: TextOnlyViews1,
    props: true,
  },{
    path: "/dekdwi-manik/",
    name: "DekDwiManik",
    component: DekDwiManik,
    props: true,
  },
  {
    path: "/ode-saktu/",
    name: "OdeSaktu",
    component: OdeSaktu,
    props: true,

  },
  {
    path:"/darma-ayu/",
    name: "DarmaAyudwi",
    component: DarmaAyudwi,
    props: true,
  },
  // {
  //   path:"/darma-ayudwi/",
  //   name: "DarmaAyuAlternative",
  //   component: DarmaAyuAlternative,
  //   props: true,
  // },
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
    path: "/construction",
    name: "UnderConstructionView",
    component: UnderConstructionView,
  },
  {
    path: "/",
    redirect: "/construction",
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
