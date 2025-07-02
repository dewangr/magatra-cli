<!-- eslint-disable prettier/prettier -->
<script setup>
import "@/assets/main.css";
import CardUcapan from "./cardUcapan.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const apiURL = 'https://api.magatra.top'

const rspvData = ref([]);

async function getRsvpData() {
  try {
    const response = await axios.get(
      `${apiURL}/api/rsvps`
    );
    rspvData.value = response.data.data;
    return;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

onMounted(() => {
  getRsvpData();
});

setInterval(async () => {
  await getRsvpData();
  console.log("Data refreshed");
}, 5000); // Refresh every minute

const namaTamu = ref("");
const ucapan = ref("");

async function addItem() {
  try {
    const response = await axios.post(
      `${apiURL}/api/rsvps`,
      {
        nama_tamu: namaTamu.value,
        ucapan: ucapan.value,
      }
    );
    console.log(response);
  } catch (err) {
    console.error("There has been a problem with your fetch operation: ", err);
  }
  await getRsvpData(); // Refresh data after adding new item
  namaTamu.value = "";
  ucapan.value = "";
}
</script>
<template>
  <div class="relative w-full flex flex-col">
    <div
      class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="relative h-screen">
      <img
        src="../assets/photo/background/bg-rsvp.webp"
        class="object-cover absolute h-screen"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-center h-screen mx-7"
      >
        <div class="formReservasi flex flex-col">
          <div class="textJudul animated text-off-white">
            <h2 class="uppercase font-basic mb-2 tracking-[0.3rem] text-2xl">
              RESERVASI
            </h2>
            <hr />
            <p class="my-2">
              Mohon doa restu untuk kedua mempelai, dan silakan isi form di
              bawah ini untuk mengirimkan ucapan atau konfirmasi kehadiran Anda.
            </p>
          </div>

          <form
            @submit.prevent="addItem"
            action=""
            method="post"
            class="formReservasi flex flex-col animated"
          >
            <label for="namaTamu" class="mt-3 text-off-white">Nama</label>
            <input
              v-model="namaTamu"
              name="namaTamu"
              type="text"
              class="bg-alt-dark text-off-white opacity-70 rounded-sm py-1 px-2"
              placeholder="Masukkan nama"
              required
            />
            <label for="pesanUcapan" class="mt-3 text-off-white">Ucapan</label>
            <textarea
              v-model="ucapan"
              required
              name="pesanUcapan"
              rows="2"
              class="bg-alt-dark text-off-white opacity-70 rounded-sm py-1 px-2"
              placeholder="Mohon doa restu untuk kedua mempelai"
            ></textarea>
            <button
              type="submit"
              class="mt-3 btn-submit px-4 py-1 rounded-md bg-alt-dark text-off-white w-max"
            >
              Kirim
            </button>
          </form>
          <div
            class="hasilReservasi mt-7 flex flex-col max-h-56 overflow-y-scroll animated"
          >
            <CardUcapan
              v-for="(data, id) in rspvData"
              :key="id"
              :namaTamu="data.nama_tamu"
              :ucapan="data.ucapan"
              :timestampKomentar="data.created_at"
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
