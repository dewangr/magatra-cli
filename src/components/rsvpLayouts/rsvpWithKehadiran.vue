
<script setup>
import "@/assets/main.css";
import { onMounted, defineProps } from "vue";
import { getRsvpData } from "@/process/getRsvpData";
import TextJudul from "../textOnly/textJudul.vue";
import KehadiranText from "../bubbles/kehadiranText.vue";
import FormDgKehadiran from "../forms/formDgKehadiran.vue";

const rspvData = getRsvpData();

const props = defineProps({
  bgPath: {
    type: String,
    default: "background/bg-reservasi.webp",
  }
});

onMounted(() => {
  getRsvpData();
});

setInterval(async () => {
  await getRsvpData();
  console.log("Data refreshed");
}, 5000); // Refresh every minute

</script>
<template>
  <div class="relative w-full flex flex-col">
    <div
      class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="relative h-screen">
      <img
         :src="require(`../../assets/photo/${props.bgPath}`)"
        class="object-cover absolute h-screen"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-center h-screen mx-7"
      >
        <div class="formReservasi flex flex-col">
          <TextJudul :title="'RESERVASI'" :description="'Silakan isi form untuk mengirimkan ucapan dan doa untuk kedua mempelai'"></TextJudul>
          <FormDgKehadiran />
          <div
            class="hasilReservasi mt-7 flex flex-col max-h-56 lg:max-h-48 overflow-y-scroll animated"
          >
            <KehadiranText
              v-for="(data, id) in rspvData"
              :key="id"
              :namaTamu="data.nama_tamu"
              :ucapan="data.ucapan"
              :timestampKomentar="data.timestampKomentar"
              :konfirmasiKehadiran="data.konfirmasi_kehadiran"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main-content {
  grid-template-rows: 4fr 1fr;
}
</style>
