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
        <div class="waktuPelaksanaan text-off-white">
          <h2
            class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl animated"
          >
            Resepsi
          </h2>
          <hr />
          <div class="hariTanggal my-2 animated">
            <h3 class="bold text-2xl">{{ hariAcara }}, {{ tanggalAcara }}</h3>
            <p>{{ waktuMulai }} - {{ waktuSelesai }}</p>
            <div class="hitungMundur flex flex-row mb-2 mt-4 text-center">
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
          <iframe class="max-w-80 h-60" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5657590095348!2d115.08634149999999!3d-8.145610399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd19a9b3ea240df%3A0xe3789632e8bad876!2sPerumahan%20Kirana%201%20Desa%20Panji!5e0!3m2!1sen!2sid!4v1769923634706!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
