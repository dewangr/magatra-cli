
<script setup>
import "@/assets/main.css";
import { addItem } from "@/process/addItem";
import { ref } from "vue";

const namaTamu = ref("");
const ucapan = ref("");
const akanHadir = ref("");

async function clearafterSubmit() {
  namaTamu.value = "";
  ucapan.value = "";
  akanHadir.value = "";
}

async function handleSubmit() {
  await addItem(namaTamu, ucapan, akanHadir);
  clearafterSubmit();
}
  
</script>
<template>
          <form
            @submit.prevent="handleSubmit"
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
            <label for="akanHadir" class="mt-3 text-off-white">Kehadiran</label>
            <select
              v-model="akanHadir"
              name="akanHadir"
              class="bg-alt-dark text-off-white opacity-70 rounded-sm py-1 px-2"
              required
              >
              <option class="opacity-20" value="" disabled>Mohon pilih kehadiran</option>
              <option value="1">Hadir</option>
              <option value="0">Tidak Hadir</option>
              <option value="2">Ragu-ragu</option>
            </select>
            <button
              type="submit"
              class="mt-3 btn-submit px-4 py-1 rounded-md bg-alt-dark text-off-white w-max"
            >
              Kirim
            </button>
          </form>
</template>
<style scoped>
.main-content {
  grid-template-rows: 4fr 1fr;
}
</style>
