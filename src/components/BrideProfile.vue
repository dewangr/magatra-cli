<script setup>
import "./../assets/main.css";
import { defineProps } from "vue";

defineProps({
  brideName: {
    type: String,
    default: "Luh Rika Triana Savitri, S.Kes",
  },
  anakKe: {
    type: String,
    default: "pertama",
  },
  fatherName: {
    type: String,
    default: "I Gede Karang",
  },
  motherName: {
    type: String,
    default: "Made Tuty Asrini, S.Sos",
  },
  igName: {
    type: String,
    default: "riikatriana_",
  },
});
</script>
<template>
  <div class="relative w-full flex flex-col">
    <div
      class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="relative h-screen">
      <img
        src="../assets/photo/background/bg-bride.webp"
        class="object-cover absolute h-screen"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-end text-start h-screen mx-7 pb-14 text-off-white"
      >
        <div class="infoPengantin">
          <p class="uppercase groomBride animated">The Bride</p>
          <h3 class="font-basic text-2xl my-1 animated">
            {{ brideName }}
          </h3>
          <div class="animated">
            <p>Putri {{ anakKe }} dari</p>
            <p>
              {{ fatherName }} <br />
              & {{motherName}}
            </p>
          </div>
          <div class="namaInstagram flex flex-col justify-center animated">
            <a
              :href="`https://www.instagram.com/${igName}`"
              type="button"
              target="_blank"
              rel="noopener"
              class="my-2 underline"
              ><i class="fa fa-instagram" aria-hidden="true"></i>
              {{ igName }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.groomBride {
  font-size: 18px;
  letter-spacing: 0.2em;
}
</style>
