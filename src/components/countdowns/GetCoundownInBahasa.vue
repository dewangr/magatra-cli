<script setup>
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";

const props = defineProps({
  targetDate: {
    type: String,
    required: true,
  },
  hideSeconds: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// compute the target timestamp once
const countDownDate = dayjs(props.targetDate).valueOf();

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

let intervalId;

function updateCountdown() {
  const now = dayjs().valueOf();
  let distance = countDownDate - now;

  if (distance < 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);
}

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<template>
  <div class="flex justify-center">
    <div class="countDays flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 class="numberDigit">{{ days }}</h5>
      <p>hari</p>
    </div>
    <div class="countHours flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 class="numberDigit">{{ hours }}</h5>
      <p>jam</p>
    </div>
    <div class="countMinutes flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 class="numberDigit">{{ minutes }}</h5>
      <p>menit</p>
    </div>
    <div v-if="!props.hideSeconds"
      class="countSeconds flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 class="numberDigit">{{ seconds }}</h5>
      <p>detik</p>
    </div>
  </div>
</template>
<style scoped>
.numberDigit {
  font-size: 24px;
  padding-bottom: 1px;
}
</style>