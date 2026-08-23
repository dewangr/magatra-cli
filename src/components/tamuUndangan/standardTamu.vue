<script setup>
import { defineProps } from "vue";
import "@/assets/main.css";
import clickBukaUndangan from "@/process/clickBukaUndangan.js";
import BasicOpen from "../buttons/basicOpen.vue";

defineProps({
    invitedPerson: {
        type: String,
        default: "Tamu Undangan",
    },
});

</script>

<template>
    <div class="gelar-tamu animated flex flex-col items-center">
        <p class="kepada mb-0 pd-0 animated">Kepada</p>
        <p class="bapak-ibu -mt-1 -mb-5 animated">
            Yth. Bapak/Ibu/Saudara/i
        </p>
    </div>
    <h3 class="nama-tamu drop-shadow-2xl capitalize mb-5 animated">
        {{ invitedPerson }}
    </h3>
    <BasicOpen class="animated" @click="clickBukaUndangan" />
</template>

<style scoped>
.nama-tamu {
    font-size: 24px;
    color: var(--color-off-white);
    text-align: center;
    margin: 12px;
    font-weight: 400;
    text-shadow: 1px 1px 1px rgb(0, 0, 0);
}

.gelar-tamu {
    font-size: 16px;
    color: var(--color-off-white);
    text-align: center;
    margin: 10px;
}

.btn-buka-undangan {
    background-color: var(--color-off-white);
    color: var(--color-alt-dark);
    border: none;
    padding: 5px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
}

.btn-buka-undangan:hover {
    transition: 0.2s;
    transform: scale(1.05);
}
</style>