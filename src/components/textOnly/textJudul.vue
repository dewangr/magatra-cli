<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

defineProps({
    title: {
        type: String,
        default: "RESERVASI",
    },
    description: {
        type: String,
        default:
        "Mohon doa restu untuk kedua mempelai, dan silakan isi form di bawah ini untuk mengirimkan ucapan atau konfirmasi kehadiran Anda.",
    },
});

</script>
<template>
    <div class="textJudul animated text-off-white">
            <h2 class="uppercase font-basic mb-2 tracking-[0.3rem] text-2xl">
              {{ title }}
            </h2>
            <hr />
            <p class="my-2">
              {{ description }}
              
            </p>
          </div>
</template>
<style scoped></style>