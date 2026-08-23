<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

defineProps({
    buttonName: {
        type: String,
        default: "Buka Undangan",
    },
});

</script>

<template>
    <button type="button" class="btn-buka-undangan uppercase tracking-widest text-off-white/80 text-xl mt-4 bg-alt-dark/10 backdrop-blur-sm rounded-full border border-off-white/40 px-8 py-2" id="btn-buka">
        {{ buttonName }} 
    </button>
</template>

<style scoped>
.btn-buka-undangan {
    text-align: center;
    display: inline-block;
    cursor: pointer;
}

.btn-buka-undangan:hover {
    transition: 0.2s;
    transform: scale(1.05);
}
</style>