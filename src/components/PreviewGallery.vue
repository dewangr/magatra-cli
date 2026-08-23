<template>
  <pre>{{ images }}</pre>
  <div
    class="galeri-foto flex flex-row w-full flex-wrap lg:gap-6 gap-5 justify-center overflow-y-hidden animated"
  >
    <a
      class="open-btn"
      v-for="(img, i) in images"
      :key="i"
      :href="img.href"
      :data-src="img.href"
      @click="handleOpen(i)"
    >
      {{ console.log(img.href) }}
      <div class="flex relative">
        <img
          class="to-display lg:w-40 lg:h-40 w-34 h-34"
          :src="img.href"
          loading="lazy"
        />
        <p
          v-if="i === 5"
          class="absolute lg:w-40 lg:h-40 w-34 h-34 flex items-center justify-center text-off-white bg-alt-dark/60"
        >
          Show more...
        </p>
      </div>
    </a>
  </div>
  <Gallery class="to display" :list="images" :config="{ immediate: false }" />
</template>

<script>
import "@/assets/main.css";
import { setGallery, Gallery } from "vue-preview-imgs";

export default {
  components: { Gallery },
  props: {
    images: {
      type: Array,
      required: true,
    },
    galleryID: {
      type: String,
      default: "gallery",
    },
  },
  mounted() {
    this.lightbox = setGallery(
      {
        dataSource: this.images,
      },
      {
        immediate: false,
        beforeInit: (lightbox) => {
          lightbox.addFilter("thumbEl", (thumbEl, data, index) => {
            const el = document.querySelectorAll(".open-btn")[index];
            if (el) {
              return el;
            }
            return thumbEl;
          });
        },
      }
    );
  },
  methods: {
    handleOpen(index) {
      if (this.lightbox) this.lightbox.loadAndOpen(index);
    },
  },
};
</script>

<style>
.to-display {
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 var(--color-alt-dark);
  object-fit: cover;
}
</style>
