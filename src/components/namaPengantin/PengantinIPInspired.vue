<script setup>
import { defineComponent, defineProps } from "vue";

defineProps({
    brideName: {
        type: String,
        default: "Bride",
    },
    groomName: {
        type: String,
        default: "Groom",
    },
    titleText: {
        type: String,
        default: "Wedding",
    },
});
defineComponent({
    name: "NamaPengantin",
});
</script>

<template>
    <div class="ds-text-nama-pengantin flex flex-col align-center justify-center ">
        <h4 class="txt-acara font-karla uppercase tracking-widest">{{ titleText }}</h4>
        <h3 class="txt-nama font-playfairDisplay capitalize font-white my-1">
            {{ groomName }} <span class="text-lg italic"> & </span> {{ brideName }}
        </h3>
    </div>
</template>

<style scoped>
    .txt-acara {
        font-size: 12px;
        color: var(--color-putih-keabuan);
        font-stretch: ultra-expanded;
        -webkit-text-fill-color: var(--color-putih-keabuan);
        text-align: center;
        padding: 0px;
    }

    .txt-nama {
        font-size: 36px;
        color: var(--color-off-white);
        -webkit-text-fill-color: var(--color-off-white);
        text-align: center;
    }
</style>
