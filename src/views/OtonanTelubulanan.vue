<script setup>
import "@/assets/main.css";

import { useRoute } from "vue-router";
import { ref } from "vue";
import MagatraCopyright from "@/components/textOnly/MagatraCopyright.vue";
import NamaAcara from "@/components/otonanTelubulanan/namaAcara.vue";
import CarouselThree from "@/components/otonanTelubulanan/CarouselThree.vue";
import WaktuTanggalAcara from "@/components/otonanTelubulanan/WaktuTanggalAcara.vue";
import OmSwastyastuGold from "@/components/otonanTelubulanan/OmSwastyastuGold.vue";
import NamaAnak from "@/components/namaPengantin/NamaAnak.vue";
import QuotesVeda from "@/components/textOnly/quotesVeda.vue";
import FotoAnakDika from "@/components/layoutGaleri/fotoAnakDika.vue";
import DapatHadir from "@/components/textOnly/DapatHadir.vue";
import UcapanDoa from "@/components/textOnly/UcapanDoa.vue";

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

const quote = "Ya Tuhan Kau – adalah sumber cahaya, berilah hamba cahaya. Kau adalah sumber semangat, berkahi hamba semangat.Kau adalah sumber kekuatan, berilah hamba kekuatan itu. Kau adalah sumber cahaya cemerlang, berikan hamba kecemerlangan. ";
const sumberQuote = "Yayur Weda 1.1.6";
const descReservasi = "Silakan isi form dibawah ini untuk konfirmasi kehadiran Anda dan mengirimkan doa untuk anak kami..";

</script>

<template>
  <main class="w-screen h-screen z-30">
    <div id="sampulDepan" class="absolute z-10 inset-y-0 right-0 w-screen md:w-96 h-screen">
      <div class="relative w-full h-full">
        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div class="background-sampul absolute inset-0 z-0"></div>
        <div class="konten-sampul flex flex-col items-center justify-between h-full pt-6 pb-24 z-20 relative">
          <NamaAcara class=" mb-4 text-center animated" :title-text="'Telubulanan'">
          </NamaAcara>
          <div class=" ds-tamu-undangan flex flex-col items-center float-end mt-30">
            <div class="gelar-tamu animated flex flex-col items-center text-[10px]">
              <p class="kepada mb-0 pd-0 animated">Kepada</p>
              <p class="bapak-ibu -mt-1 -mb-5 animated">
                Yth. Bapak/Ibu/Saudara/i
              </p>
            </div>
            <h3 class="nama-tamu drop-shadow-2xl capitalize mb-5 animated">
              {{ invitedPerson }}
            </h3>
            <div class="btn-buka text-center animated">
              <button type="button" class="btn-buka-undangan text-alt-dark animated" id="btn-buka"
                @click="clickBukaUndangan()">
                <i class="fa-solid fa-envelope-open"></i>&nbsp; Buka Undangan
              </button>
              <p class="text-[10px] mt-1">Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="kontenUtama" class="hidden absolute md:w-96 inset-y-0 right-0 ">
      <div class="isiUndangan relative">
        <CarouselThree></CarouselThree>
        <OmSwastyastuGold></OmSwastyastuGold>
        <NamaAnak></NamaAnak>
        <QuotesVeda :isi-quote="quote" :sumber-quote="sumberQuote"></QuotesVeda>
        <WaktuTanggalAcara></WaktuTanggalAcara>
        <DapatHadir></DapatHadir>
        <FotoAnakDika></FotoAnakDika>
        <UcapanDoa :desc-section="descReservasi"></UcapanDoa>
        <!-- <div style="background-image: url('../../public/photos/background/blank.webp');"
          class="w-full items-center justify-center pt-12">
          <img class="w-48" src="../../public/photos/png/peony.webp" alt="">
        </div> -->
        <div class="h-32 bg-gradient-to-b from-black/0 to-black/100"></div>
        <MagatraCopyright class="bg-black pt-4 mt-0"></MagatraCopyright>
        <audio loop class=" hidden" preload="none" id="bgm" controlsList="nodownload" controls>
          <source src="../assets/music/HarmoniA_ft_Rusmina_Dewi_-_Sehidup_Semati.mp3" type="audio/mp3" />
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
  background-image: url("../assets/photo/telubulanan/anakdika/cover1.webp");
  background-size: cover;
  background-position: center;
}

.isiUndangan {
  background-image: url("../../public/photos/background/peony1.webp");
  background-size: contain;
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
