
<script setup>
import "@/assets/main.css";
import { addItemRsvpCarousel } from "@/process/rsvp/addItemRsvpCarousel";
import { convertCeremonyNameToEnum } from "@/process/rsvp/convertCeremonyNameToEnum";
import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits(["submitted"]);

const props = defineProps ({
    ownerName: {
        type: String,
        required: true,
    },
    ceremonyName: {
        type: String,
        required: true,
    }
})

let ceremonyType = convertCeremonyNameToEnum(props.ceremonyName);

const guestName = ref("");
const guestMessage = ref("");
const guestAttendance = ref("");

async function clearafterSubmit() {
  guestName.value = "";
  guestMessage.value = "";
  guestAttendance.value = "";
}

async function handleSubmit() {
  await addItemRsvpCarousel(
    props.ownerName,
    ceremonyType,
    guestName,
    guestMessage,
    guestAttendance
  );
  clearafterSubmit();
  emit("submitted");
}
  
</script>
<template>
          <form
            @submit.prevent="handleSubmit"
            action=""
            method="post"
            class="formReservasi flex flex-col animated"
          >
            <label for="guestName" class="mt-3 text-off-white">Nama</label>
            <input
              v-model="guestName"
              name="guestName"
              type="text"
              class="bg-alt-dark text-off-white opacity-70 rounded-sm py-1 px-2"
              placeholder="Masukkan nama"
              required
            />
            <label for="guestMessage" class="mt-3 text-off-white">Ucapan</label>
            <textarea
              v-model="guestMessage"
              required
              name="guestMessage"
              rows="2"
              class="bg-alt-dark text-off-white opacity-70 rounded-sm py-1 px-2"
              placeholder="Mohon doa restu untuk kedua mempelai"
            ></textarea>
            <label for="guestAttendance" class="mt-3 text-off-white">Kehadiran</label>
            <select
              v-model="guestAttendance"
              name="guestAttendance"
              class="bg-alt-dark text-off-white opacity-70 rounded-sm py-1 px-2"
              required
              >
              <option class="opacity-20" value="" disabled>Mohon pilih kehadiran</option>
              <option value="1">Hadir</option>
              <option value="0">Tidak Hadir</option>
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
