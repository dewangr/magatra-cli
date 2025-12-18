<script setup>
import "@/assets/main.css";

import NamaPengantinDynalight from '../namaPengantin/NamaPengantinDynalight.vue';
</script>
<template>
  <div class=" relative h-screen w-full flex flex-col justify-around">
    <div class="absolute inset-0 bg-black opacity-70 z-10"></div>
    <div class="cover-header absolute inset-0 z-0"></div>
    <div class="z-20 relative flex flex-col py-3 bg-black/20 backdrop-blur-md ">
      <NamaPengantinDynalight class="animated text-4xl mb-4" :bride-name="'Dewi'" :groom-name="'Mang Agus'"
        :title-text="'Pawiwahan'" />
      <h4 class="flex justify-center text-putih-keabuan tracking-widest animated">18 Oktober 2025</h4>
    </div>
    <div class="flex flex-col text-center text-putih-keabuan z-20 mx-4">
      <p class="text-sm">
        <!-- “Ihaiva stam ma vi yaustam, visvam ayur vyasnutam, kridantau putrair naptrbhih, modamanau sve grhe.” -->
        “Wahai pasangan suami-istri, semoga kalian tetap bersatu dan tidak
        pernah terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan,
        tinggal di rumah yang penuh kegembiraan bersama seluruh
        keturunanmu.”
      </p>
      <p class="text-base">
        <strong>(Rg Veda X.85.42)</strong>
      </p>
    </div>
  </div>
</template>

<style>
.cover-header {
  background-image: url("../../assets/photo/mangagus-dewi/background/beratan1.webp");
  background-size: cover;
  background-position: center;
}
</style>
