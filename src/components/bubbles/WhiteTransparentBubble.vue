<script setup>
import { updateCommentsTimestamp } from "@/process/updateCommentsTimestamp";
import { attendanceOptions } from "@/types/consts";
import { ref, onMounted, onUnmounted, defineProps } from "vue";

const props = defineProps({
  guestName: {
    type: String,
    required: true,
  },
  guestMessage: {
    type: String,
    required: true,
  },
  commentsTimestamp: {
    type: String,
    required: true,
  },
  attendanceEnum: {
    type: String,
    required: false,
  },
});

const attendanceStatus = attendanceOptions[props.attendanceEnum];

const commentsTime = ref("");
let intervalId;
onMounted(() => {
  commentsTime.value = updateCommentsTimestamp(props.commentsTimestamp);
  intervalId = setInterval(() => {
    commentsTime.value = updateCommentsTimestamp(props.commentsTimestamp);
  }, 60000); // update every minute
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template>
  <div class="textUcapan bg-putih-keabuan p-3 rounded-sm mb-4 mx-2 opacity-70">
    <div class="namaDanKonfirmasi flex flex-row text-[16px] items-center justify-between">
      <p class="namaTamuReservasi text-alt-dark tracking-wider text-sm">
        <b>{{ guestName }} &nbsp;</b>
      </p>
     <span :hidden="!props.attendanceEnum" class="bg-alt-dark/70 backdrop-blur-md text-off-white w-max px-2 py-1 rounded-xl text-[11px] flex items-center"> <i
                   aria-hidden="true"></i> &nbsp; {{
                        attendanceStatus
                    }}</span>
    </div>
    <p class="text-sm text-alt-dark mb-1">{{ guestMessage }}</p>
    <p class="text-[10px] text-alt-dark/50 italic">{{ commentsTime }}</p>
  </div>
</template>
<style scoped>
</style>
