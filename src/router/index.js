import { createRouter, createWebHistory } from "vue-router";
import Wedding1Views from "../views/Wedding1Views.vue";
import TextOnlyViews1 from "../views/TextOnlyViews1.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import UnderConstructionView from "@/views/UnderConstructionView.vue";
import OtonanTelubulanan from "@/views/OtonanTelubulanan.vue";
import DekDwiManik from "@/views/DekDwiManik.vue";
import OdeSaktu from "@/views/OdeSaktu.vue";

const routes = [
  {
    path: "/indra-rika",
    name: "Wedding1Views",
    component: Wedding1Views,
    props: true,
  },
  {
    path: "/mangagus-dewi",
    name: "TextOnlyViews1",
    component: TextOnlyViews1,
    props: true,
  },
  {
    path: "/dekdwi-manik",
    name: "DekDwiManik",
    component: DekDwiManik,
    props: true,
    meta: {
      title: "Undangan Pawiwahan Dwi & Manik",
      description: "Resepsi pada 24 Maret 2026 di Perumahan Kirana 1, Ds. Panji, Buleleng",
      image: "https://magatra.site/photos/metaInfo/dwimanik.jpg"
    }
  },
  {
    path: "/ode-saktu",
    name: "OdeSaktu",
    component: OdeSaktu,
    props: true,
    meta: {
      title: "Undangan Pawiwahan Ode & Saktu",
      description: "24 Maret 2026 - Jln. Pulau Obi Gg. Juwet, Banyuning, Buleleng",
      image: "https://magatra.site/photos/metaInfo/odesaktu.jpg"
    }
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
