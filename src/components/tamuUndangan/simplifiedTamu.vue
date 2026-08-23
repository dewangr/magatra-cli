<script setup>
import clickBukaUndangan from "@/process/clickBukaUndangan.js";
import { defineProps } from "vue";
import TransparentButton from "../buttons/transparentButton.vue";

defineProps({
    invitedPerson: {
        type: String,
        default: "Tamu Undangan",
    },
});
</script>

<template>
    <div class=" gelar-tamu flex flex-col items-center">
        <p class="uppercase mt-3 tracking-widest">Kepada Yth.</p>
    </div>
    <h3 class="nama-tamu mb-5 text-xl font-playfairDisplay tracking-wide">
        {{ invitedPerson }}
    </h3>
    <TransparentButton class="font-karla" :buttonName="'Buka Undangan'" @click="clickBukaUndangan" />
</template>

<style scoped>
.nama-tamu {
    color: var(--color-off-white);
    text-align: center;
}

.gelar-tamu {
    font-size: 10px;
    color: var(--color-off-white);
    text-align: center;
}
</style>