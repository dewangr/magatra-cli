<script setup>
import GetCountdown from "./GetCountdown.vue";
import "./../assets/main.css";
import { defineProps } from "vue";

const props = defineProps({
  bgPath: {
    type: String,
    default: "background/bg-waktu.webp",
  },
  hariAcara: {
    type: String,
    default: "Kamis",
  },
  tglAcara: {
    type: String,
    default: "28/08/2025",
  },
  waktuMulai: {
    type: String,
    default: "11:00",
  },
  waktuSelesai: {
    type: String,
    required: false,
    default: "Selesai",
  },
  alamatAcara: {
    type: String,
    default: "Jalan Desa Pendem, Jembrana",
  },
  linkMaps: {
    type: String,
    default: "https://www.google.com/maps?q=-8.3235101,114.6224752",
  },
});
const dayjs = require('dayjs');   
const customParseFormat = require('dayjs/plugin/customParseFormat');
require('dayjs/locale/id');

dayjs.extend(customParseFormat);
dayjs.locale('id');

let tanggalAcara = dayjs(props.tglAcara, "DD/MM/YYYY").format("DD MMMM YYYY");
const targetDate = dayjs(props.tglAcara + " " + props.waktuMulai,"DD/MM/YYYY HH:mm").format("YYYY-MM-DDTHH:mm:ss");
let targetDateFormatted = new Date(targetDate);

let bgImage = require(`../assets/photo/${props.bgPath}`);

console.log('bgPath = ' + props.bgPath);
console.log('bgImage = ' + bgImage);
</script>
<template>
  <div class="relative w-full flex flex-col">
    <div
      class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="relative h-screen">
      <img
        :src="bgImage"
        class="object-cover absolute h-screen"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-center text-start h-screen mx-7"
      >
        <div class="waktuPelaksanaan">
          <h2
            class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl animated"
          >
            Resepsi
          </h2>
          <hr />
          <div class="hariTanggal my-2 animated">
            <h4 class="bold text-xl">{{ hariAcara }}, {{ tanggalAcara }}</h4>
            <p>{{ waktuMulai }} - {{ waktuSelesai }}</p>
            <div class="hitungMundur flex flex-row my-2 text-center">
              <GetCountdown :targetDate="targetDateFormatted" :hideSeconds="false" />
            </div>
          </div>
        </div>
        <div class="tempatPelaksanaan mb-2 text-lg animated">
          <h4>{{ alamatAcara }}</h4>
        </div>

        <div class="googleMaps my-2 text-lg animated">
          <a
            :href="linkMaps"
            type="button"
            class="underline"
            target="_blank"
            rel="noopener"
            >Google Maps</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.numberDigit {
  font-size: 24px;
}
</style>
