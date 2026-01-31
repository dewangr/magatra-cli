<script setup>
import BankDetails from "./BankDetails.vue";
import "@/assets/main.css";
import { defineProps } from "vue";

const props = defineProps({
  bgPath: {
    type: String,
    default: "background/bg-reservasi.webp",
  },
});
</script>
<template>
  <div class="relative w-full flex flex-col">
    <div
      class="shadow-layer absolute h-screen inset-0 bg-black opacity-50 z-10"
    ></div>
    <div class="relative h-screen">
      <img
         :src="require(`../assets/photo/${props.bgPath}`)"
        class="object-cover absolute h-screen"
        alt="..."
      />
      <div
        class="main-content relative z-20 flex flex-col justify-center text-start h-screen mx-7"
      >
        <div class="textAwalan animated text-off-white">
          <h2 class="uppercase font-basic my-2 tracking-[0.3rem] text-2xl">
            Amplop Digital
          </h2>
          <hr />
        </div>
        <div class="hariTanggal my-2 animated text-off-white">
          <p>
            Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan
            hadiah kepada kedua mempelai dapat mengirimnya melalui :
          </p>
        </div>
        <div class="tujuanTransfer animated">
          <BankDetails
            bankName="BRI"
            bankNumber="0088 0104 5019 503"
            holderName="Kadek Dwi Septiawan"
            buttonId="salinBRI"
          />
          <BankDetails
            bankName="BPD"
            bankNumber="0140202809995"
            holderName="I Luh Sri Manik"
            buttonId="salinBPD"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.numberDigit {
  font-size: 20px;
}
</style>
