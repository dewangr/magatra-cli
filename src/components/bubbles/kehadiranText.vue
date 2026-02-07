<script setup>
import { updateCommentsTimestamp } from "@/process/updateCommentsTimestamp";
import { ref, onMounted, onUnmounted, defineProps } from "vue";

const props = defineProps({
  namaTamu: {
    type: String,
    required: true,
  },
  ucapan: {
    type: String,
    required: true,
  },
  timestampKomentar: {
    type: String,
    required: true,
  },
  konfirmasiKehadiran: {
    type: Number,
    required: false,
  },
});

const hadirString = props.konfirmasiKehadiran === 1 ? "Akan hadir" : props.konfirmasiKehadiran === 0 ? "Maaf, tidak bisa hadir" : "Masih ragu";

const waktuKomentar = ref("");
let intervalId;
onMounted(() => {
  waktuKomentar.value = updateCommentsTimestamp(props.timestampKomentar);
  intervalId = setInterval(() => {
    waktuKomentar.value = updateCommentsTimestamp(props.timestampKomentar);
  }, 60000); // update every minute
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template>
  <div class="textUcapan p-3 rounded-sm mb-4 mx-2 opacity-70">
    <div class="namaDanKonfirmasi flex flex-row text-[16px] items-center justify-between">
      <p class="namaTamuReservasi text-alt-dark tracking-wider">
        <b>{{ namaTamu }} &nbsp;</b>
      </p>
     <span :hidden="!props.konfirmasiKehadiran" class="text-off-white bg-alt-dark w-max px-2 py-1 rounded-xl text-[11px] flex items-center"> <i
                   aria-hidden="true"></i> &nbsp; {{
                        hadirString
                    }}</span>
    </div>
    <p class="text-[16px] text-alt-dark mb-1">{{ ucapan }}</p>
    <p class="text-[10px] text-alt-dark/50 italic">{{ waktuKomentar }}</p>
  </div>
</template>
<style scoped>
</style>
