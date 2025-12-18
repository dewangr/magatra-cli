<script setup>
import { defineProps } from "vue";

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

// Set the date we're counting down to
const countDownDate = props.targetDate.getTime();
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
// Update the count down every 1 second
setInterval(function () {
  const currentDate = new Date().getTime();
  // Get today's date and time

  // Find the distance between now and the count down date
  const dateDistance = countDownDate - currentDate;

  // Time calculations for days, hours, minutes and seconds
  days = Math.floor(dateDistance / (1000 * 60 * 60 * 24));
  hours = Math.floor((dateDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((dateDistance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((dateDistance % (1000 * 60)) / 1000);

  if (days < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  // Display the result in the element with id="demo"
  document.getElementById("daysDigit").innerHTML = days;
  document.getElementById("hoursDigit").innerHTML = hours;
  document.getElementById("minutesDigit").innerHTML = minutes;
  document.getElementById("secondsDigit").innerHTML = seconds;
}, 1000);

</script>
<template>
  <div class="flex justify-center">
    <div class="countDays flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 id="daysDigit" class="numberDigit"></h5>
      <p>hari</p>
    </div>
    <div class="countHours flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 id="hoursDigit" class="numberDigit"></h5>
      <p>jam</p>
    </div>
    <div class="countMinutes flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 id="minutesDigit" class="numberDigit"></h5>
      <p>menit</p>
    </div>
    <div :hidden="props.hideSeconds"
      class="countSeconds flex flex-col w-12 p-1 mx-1 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10">
      <h5 id="secondsDigit" class="numberDigit"></h5>
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