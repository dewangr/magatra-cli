<script setup>
import { defineProps, ref, onMounted, onBeforeUnmount} from "vue";

const props = defineProps({
  targetDate: {
    type: Date,
    required: true,
  },
  hideSeconds: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// reactive countdown values
const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
let timerId = null;

function updateCountdown() {
  const countDownDate = props.targetDate.getTime();
  const now = new Date().getTime();
  let dateDistance = countDownDate - now;

  if (dateDistance <= 0) {
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    return;
  }

  days.value = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes.value = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((dateDistance % (1000 * 60)) / 1000);
}

onMounted(() => {
  updateCountdown();
  timerId = setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  if (timerId) clearInterval(timerId);
});

// const textDays = computed(() => (days.value <= 2 ? "day" : "days"));
// const textHours = computed(() => (hours.value <= 2 ? "hour" : "hours"));
// const textMinutes = computed(() => (minutes.value <= 2 ? "minute" : "minutes"));
// const textSeconds = computed(() => (seconds.value <= 2 ? "second" : "seconds"));
</script>

<template>
  <div class="countDays flex flex-col pr-2">
    <h5 id="daysDigit" class="numberDigit">{{ days }}</h5>
    <p>Hari</p>
  </div>
  <div class="countHours flex flex-col pr-2">
    <h5 id="hoursDigit" class="numberDigit">{{ hours }}</h5>
    <p>Jam</p>
  </div>
  <div class="countMinutes flex flex-col pr-2">
    <h5 id="minutesDigit" class="numberDigit">{{ minutes }}</h5>
    <p>Menit</p>
  </div>
  <div :hidden="props.hideSeconds" class="countSeconds flex flex-col">
    <h5 id="secondsDigit" class="numberDigit">{{ seconds }}</h5>
    <p>Detik</p>
  </div>
</template>
<style scoped>
.numberDigit {
  font-size: 24px;
}
</style>
