<script setup>
import "./../assets/main.css";

import { defineProps } from "vue";
defineProps({
  textJudul: {
    type: String,
    default: "Om Swastyastu",
    required: false,
  },
  textParagraf: {
    type: String,
    default: "Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada upacara Manusa Yadnya pawiwahan putra-putri kami.",
  },
  bgPath: {
    type: String,
    default: "background/bg-swastyastu.webp",
  },
});
</script>

<template>
  <div class="relative w-full flex flex-col">
    <div
      class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="flex relative h-screen justify-end">
      <img
        :src="require(`../assets/photo/${bgPath}`)"
        class="object-cover absolute h-screen"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-center text-end sm:w-[60%] md:w-full h-[55%] mx-7"
      >
        <div class="text-off-white">
          <p
            class="font-basic tracking-widest leading-10 uppercase text-2xl animated"
          >
            {{ textJudul }}
          </p>
          <p class="animated">
              {{ textParagraf }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
