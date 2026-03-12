<script setup>
import "@/assets/main.css";

import { useRoute } from "vue-router";
import { ref } from "vue";
import MagatraCopyright from "@/components/textOnly/MagatraCopyright.vue";
import NamaPengantinDynalight from "@/components/namaPengantin/NamaPengantinDynalight.vue";
import OmSwastyastuText from "@/components/textOnly/OmSwastyastuText.vue";
import BlurredName from "@/components/carousels/BlurredName.vue";
import BlackNamaMempelai from "@/components/namaPengantin/BlackNamaMempelai.vue";
import BlackNamaMepandes from "@/components/namaPengantin/BlackNamaMepandes.vue";
import GalerryRandomLayout from "@/components/layoutGaleri/GalleryRandomLayout.vue";
import NewRsvpWithAttendance from "@/components/rsvpLayouts/NewRsvpWithAttendance.vue";
import HariResepsi from "@/components/datetime/HariResepsi.vue";
import ListBankToTransfer from "@/components/bankTransfer/ListBankToTransfer.vue";

const ownerSlug = "ode-saktu";

const route = useRoute();
const invitedPerson = ref(route.query.to || "Tamu Undangan");

function clickBukaUndangan() {
  const el = document.getElementById("sampulDepan");
  const content = document.getElementById("kontenUtama");
  const bgm = document.getElementById("bgm");

  content.classList.remove("hidden");
  content.style.opacity = "1";
  content.style.zIndex = "1";

  el.style.transition = "transform 0.5s";
  el.style.transform = "translateY(-100%)";

  bgm.play();
  setTimeout(() => {
    el.style.display = "none";
  }, 500);
}

function playAudio() {
  const audio = document.getElementById("bgm");
  const audioOn = document.getElementById("audioOn");
  const audioOff = document.getElementById("audioOff");

  if (audio.paused) {
    audio.play();
    audioOn.style.display = "block";
    audioOff.style.display = "none";
  } else {
    audio.pause();
    audioOn.style.display = "none";
    audioOff.style.display = "block";
  }
}

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
        <div class="konten-sampul flex flex-col items-center justify-between h-full pb-40 z-20 relative">
          <NamaPengantinDynalight class="mb-2 mt-20 animated" :bride-name="'Saktu'" :groom-name="'Ode'"
            :title-text="'Pawiwahan'" />
          <div class="ds-tamu-undangan flex flex-col items-center float-end mt-30">
            <div class="gelar-tamu animated flex flex-col items-center">
              <p class="kepada mb-0 pd-0 animated">Kepada</p>
              <p class="bapak-ibu -mt-1 -mb-5 animated">
                Yth. Bapak/Ibu/Saudara/i
              </p>
            </div>
            <h3 class="nama-tamu drop-shadow-2xl capitalize mb-5 animated">
              {{ invitedPerson }}
            </h3>
            <button type="button" class="btn-buka-undangan z-30 animated text-alt-dark" id="btn-buka"
              @click="clickBukaUndangan()">
              <i class="fa-solid fa-envelope-open"></i>&nbsp; Buka Undangan
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="kontenUtama" class="hidden absolute md:w-96 inset-y-0 right-0 ">
      <div class="isiUndangan relative">
        <BlurredName :bride-name="'Saktu'" :groom-name="'Ode'" :total-images="4" :folder-path="'odesaktu/carousel'"></BlurredName>
        <OmSwastyastuText></OmSwastyastuText>
        <BlackNamaMempelai :bg-path="'bg-odesaktu/bg-galeri.webp'" :folder-path="'odesaktu'" :urutPutra="1" :urutPutri="1"></BlackNamaMempelai>
        <BlackNamaMepandes :bg-path="'bg-odesaktu/bg-galeri.webp'" :profile-path="'bg-odesaktu'" :urutPutra="3" :urutPutri="2"></BlackNamaMepandes>
        <HariResepsi :bg-path="'bg-odesaktu/bg-acara.webp'" :pwh-date="'23/03/2026'" :pwh-time-range="'07:30 - Selesai'" :rsp-date="'24/03/2026'" :rsp-time-range="'11:00 - Selesai'" :venue-address="'Jl. Pulau Obi Gang Juwet No. 12, Banyuning, Buleleng'" :maps-link="'https://maps.app.goo.gl/whcS9KNMvNWcbAqu8'"></HariResepsi>
        <GalerryRandomLayout :bg-path="'bg-odesaktu/bg-galeri.webp'" :total-images="14" :folder-path="'odesaktu/galeri'"></GalerryRandomLayout>
        <!-- <GalerryRandomLayout :bg-path="'bg-odesaktu/bg-galeri.webp'" :title-section="'Galeri Mepandes'" :total-images="12" :folder-path="'mepandes/dadas-ngr/galeri'"></GalerryRandomLayout> -->
        <NewRsvpWithAttendance :bg-path="'bg-odesaktu/bg-galeri.webp'" :ownerName="ownerSlug" :ceremonyName="'Pawiwahan'"></NewRsvpWithAttendance>
        <ListBankToTransfer
          :bg-path="'bg-odesaktu/bg-galeri.webp'"
          :text-tittle="'Amplop Digital'"
          :text-content="'Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan hadiah kepada kedua mempelai dapat mengirimnya melalui'"
          :bank-number="'8271056966'"
        ></ListBankToTransfer>
        <MagatraCopyright></MagatraCopyright>
        <audio loop class="hidden" preload="none" id="bgm" controlsList="nodownload" controls>
          <source src="../assets/music/Rizky_Febian_Ft._Mahalini-Bermuara_[Karaoke_Version].mp3" type="audio/mp3" />
        </audio>
      </div>
      <div class="audioButton fixed bottom-1 right-0 m-4 z-20">
        <button id="audioOn" @click="playAudio()" type="button"
          class="w-9 h-9 text-md rounded-full text-alt-dark bg-putih-keabuan/70 backdrop-blur-md">
          <i class="fa fa-volume-up" aria-hidden="true"></i>
        </button>
        <button id="audioOff" @click="playAudio()" type="button"
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

.btn-buka-undangan {
  background-color: var(--color-off-white);
  color: var(--color-alt-dark);
  border: none;
  padding: 5px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
}

.btn-buka-undangan:hover {
  transition: 0.2s;
  transform: scale(1.05);
}

.nama-tamu {
  font-size: 24px;
  color: var(--color-off-white);
  text-align: center;
  margin: 12px;
  font-weight: 400;
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
}

.gelar-tamu {
  font-size: 16px;
  color: var(--color-off-white);
  text-align: center;
  margin: 10px;
}
</style>
