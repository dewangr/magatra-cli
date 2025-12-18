<script setup>
import "@/assets/main.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Lightgallery from "lightgallery/vue/LightGalleryVue.umd.js";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import { ref } from "vue";

const plugins = [lgThumbnail, lgZoom];

const visibleCount = ref(5);

const allImages = [
  "/photos/anakdika/img1.webp",
  "/photos/anakdika/img2.webp",
  "/photos/anakdika/img3.webp", "/photos/anakdika/img1.webp",
  "/photos/anakdika/img2.webp",
  "/photos/anakdika/img3.webp", "/photos/anakdika/img1.webp",
  "/photos/anakdika/img2.webp",
  "/photos/anakdika/img3.webp", "/photos/anakdika/img1.webp",
  "/photos/anakdika/img2.webp",
  "/photos/anakdika/img3.webp", "/photos/anakdika/img1.webp",
  "/photos/anakdika/img2.webp",
  "/photos/anakdika/img3.webp",
];
</script>

<template>
  <div class="relative w-full flex flex-col">
    <div class="relative h-fit">
      <div class="main-content relative z-10 flex flex-col justify-center h-[80%] mx-7">
        <div class="text-gold-dark z-20 relative text-center ">
          <p class="font-parisienne text-4xl">
            Album Foto
          </p>
        </div>
        <div class="galeriFoto mt-5 " id="galeri-foto">
          <Lightgallery :settings="{ speed: 500, plugins: plugins }"
            class="flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-y-hidden">
            <a v-for="(img, i) in allImages.slice(0, visibleCount)" :key="img" :href="img" :data-src="img">
              <div class="flex relative">
                <img class="rounded-md object-cover shadow-md lg:w-80 lg:h-52 w-80 h-52" :src="img" loading="lazy" />
                <p v-if="i === visibleCount - 1"
                  class="rounded-md absolute lg:w-80 lg:h-52 w-80 h-52 flex items-center justify-center text-off-white bg-alt-dark/60">
                  Show more...
                </p>
              </div>
            </a>
            <a v-for="(img, i) in allImages.slice(5, allImages.length)" :key="i" :href="img" :data-src="img">
              <img class="rounded-md opacity-0 h-0 w-20 md:w-40" :src="img" loading="lazy" />
            </a>
          </Lightgallery>
        </div>
      </div>
    </div>
  </div>
</template>
