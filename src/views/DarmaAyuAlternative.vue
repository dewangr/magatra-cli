<script setup>
import "@/assets/main.css";

import { useRoute } from "vue-router";
import { ref } from "vue";
import MagatraCopyright from "@/components/textOnly/MagatraCopyright.vue";
import PengantinIPInspired from "@/components/namaPengantin/PengantinIPInspired.vue";
import OmSwastyastuText from "@/components/textOnly/OmSwastyastuText.vue";
import BlurredName from "@/components/carousels/BlurredName.vue";
import BlackNamaMempelai from "@/components/namaPengantin/BlackNamaMempelai.vue";
import GalerryRandomLayout from "@/components/layoutGaleri/GalleryRandomLayout.vue";
import NewRsvpWithAttendance from "@/components/rsvpLayouts/NewRsvpWithAttendance.vue";
import HariResepsi from "@/components/datetime/HariResepsi.vue";
import ListBankToTransfer from "@/components/bankTransfer/ListBankToTransfer.vue";
import musicController from "@/process/musicController.js";
import SimplifiedTamu from "@/components/tamuUndangan/simplifiedTamu.vue";

const ownerSlug = "dharma-ayudwi";

const route = useRoute();
const invitedPerson = ref(route.query.to || "Tamu Undangan");


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-fade-in");
        entry.target.style.opacity = "1";
        return;
      }

      entry.target.classList.remove("animation-fade-in");
    });
  });

  const targetElements = document.querySelectorAll(".animated");

  targetElements.forEach((element) => observer.observe(element));
});
</script>

<template>
  <main class="w-screen h-screen z-30">
    <div id="sampulDepan" class="absolute z-10 inset-y-0 right-0 w-screen md:w-96 h-screen">
      <div class="relative w-full h-full">
        <div class="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div class="background-sampul absolute inset-0 z-0"></div>
        <div class="konten-sampul flex flex-col items-center justify-end h-full pb-20 z-20 relative">
          <PengantinIPInspired class="mt-20 text-off-white animated" :bride-name="'Ayudwi'" :groom-name="'Dharma'"
            :title-text="'The Wedding Of'" />
            <hr class="w-5/6 h-0.2 border-off-white/50 my-1 animated" />
          <div class="ds-tamu-undangan flex flex-col items-center float-end mt-30">
            <SimplifiedTamu class="animated" :invited-person="invitedPerson" />
          </div>
        </div>
      </div>
    </div>
    <div id="kontenUtama" class="hidden absolute md:w-96 inset-y-0 right-0 ">
      <div class="isiUndangan relative">
        <BlurredName :bride-name="'Saktu'" :groom-name="'Ode'" :total-images="4" :folder-path="'odesaktu/carousel'"></BlurredName>
        <OmSwastyastuText></OmSwastyastuText>
        <BlackNamaMempelai :bg-path="'bg-odesaktu/bg-galeri.webp'" :folder-path="'odesaktu'" :urutPutra="1" :urutPutri="1"></BlackNamaMempelai>
        <HariResepsi :bg-path="'bg-odesaktu/bg-acara.webp'" :pwh-date="'23/03/2026'" :pwh-time-range="'07:30 - Selesai'" :rsp-date="'24/03/2026'" :rsp-time-range="'11:00 - Selesai'" :venue-address="'Jl. Pulau Obi Gang Juwet No. 12, Banyuning, Buleleng'" :maps-link="'https://maps.app.goo.gl/whcS9KNMvNWcbAqu8'"></HariResepsi>
        <GalerryRandomLayout :bg-path="'bg-odesaktu/bg-galeri.webp'" :total-images="14" :folder-path="'odesaktu/galeri'"></GalerryRandomLayout>
        <ListBankToTransfer
          :bg-path="'bg-odesaktu/bg-galeri.webp'"
          :text-tittle="'Amplop Digital'"
          :text-content="'Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan hadiah kepada kedua mempelai dapat mengirimnya melalui'"
          :bank-number="'8271056966'"
        ></ListBankToTransfer>
        <NewRsvpWithAttendance :bg-path="'bg-odesaktu/bg-galeri.webp'" :ownerName="ownerSlug" :ceremonyName="'Pawiwahan'"></NewRsvpWithAttendance>  
        <MagatraCopyright></MagatraCopyright>
        <audio loop class="hidden" preload="none" id="bgm" controlsList="nodownload" controls>
          <source src="../assets/music/Rizky_Febian_Ft._Mahalini-Bermuara_[Karaoke_Version].mp3" type="audio/mp3" />
        </audio>
      </div>
      <div class="audioButton fixed bottom-1 right-0 m-4 z-20">
        <button id="musicOn" @click="musicController()" type="button"
          class="w-9 h-9 text-md rounded-full text-alt-dark bg-putih-keabuan/70 backdrop-blur-md">
          <i class="fa fa-volume-up" aria-hidden="true"></i>
        </button>
        <button id="musicOff" @click="musicController()" type="button"
          class="hidden w-9 h-9 text-md rounded-full text-alt-dark bg-putih-keabuan/70 backdrop-blur-md">
          <i class="fa fa-volume-off" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
#kontenUtama {
  background-color: #212529;
}

.background-sampul {
  background-image: url("../assets/photo/bg-odesaktu/bg-sampul.webp");
  background-size: cover;
  background-position: center;
}
</style>
