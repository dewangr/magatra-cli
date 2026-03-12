<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Lightgallery from "lightgallery/vue/LightGalleryVue.umd.js";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import { ref } from "vue";

const plugins = [lgThumbnail, lgZoom];

const visibleCount = ref(8);

const props = defineProps({
  bgPath: {
    type: String,
    default: "background/bg-galeri.webp",
  },
  totalImages: {
    type: Number,
    default: 20,
  },
  folderPath: {
    type: String,
    default: "odesaktu/galeri",
  },
});

let allImages = [];
let imagePath = `/photos/${props.folderPath}/img`;

for (let i = 1; i <= props.totalImages; i++) {
  allImages.push(`${imagePath} (${i}).webp`);
}

</script>

<template>
  <div class="relative w-full flex flex-col h-fit">
    <div
      class="shadow-layer absolute h-fit inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="relative">
      <img
         :src="require(`../../assets/photo/${bgPath}`)"
        class="object-cover absolute opacity-8"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-center text-center h-[80%] mx-7"
      >
        <div class="textAwalan text-off-white pt-20">
          <p class="font-dynalight text-4xl mb-3 animated">
                        Galeri Foto
          </p>
        </div>
        <div class="galeriFoto mt-3 h-[60%]" id="galeri-foto">
          <Lightgallery
            :settings="{ speed: 500, plugins: plugins }"
            class="flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-y-hidden"
          >
            <a
              v-for="(img, i) in allImages.slice(0, visibleCount)"
              :key="img"
              :href="img"
              :data-src="img"
            >
              <div class="flex relative">
                <img
                  class="rounded-[4px] object-cover shadow-md lg:w-34 lg:h-34 w-32 h-32 animated"
                  :src="img"
                  loading="lazy"
                />
                <p
                  v-if="i === visibleCount - 1"
                  class="absolute lg:w-34 lg:h-34 w-32 h-32 flex items-center justify-center text-off-white bg-alt-dark/60 animated"
                >
                  Show more...
                </p>
              </div>
            </a>
            <a
              v-for="(img, i) in allImages.slice(8, allImages.length)"
              :key="i"
              :href="img"
              :data-src="img"
            >
              <img
                class="opacity-0 h-0 w-20 md:w-40 animated"
                :src="img"
                loading="lazy"
              />
            </a>
          </Lightgallery>
        </div>
      </div>
    </div>
  </div>
</template>
