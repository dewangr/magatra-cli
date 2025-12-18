<script setup>
import { defineComponent, defineProps } from "vue";
import "./../../assets/main.css";

defineProps({
    tanggalAcara: {
        type: String,
        default: "Anak Andika",
    },
    titleText: {
        type: String,
        default: "3 Bulanan",
    },
});
defineComponent({
    name: "namaAcara",
});
</script>
<template>
    <div class="ds-text-nama-pengantin flex flex-col">
        <h2 class="txt-nama-acara font-parisienne">{{ titleText }}</h2>
        <h4 class="txt-tanggal font-white font-karla">
            {{ tanggalAcara }}
        </h4>
    </div>
</template>
<style scoped>
.txt-nama-acara {
    font-display: uppercase;
    font-stretch: extra-expanded;
    font-size: 22px;
    color: var(--color-putih-keabuan);
    -webkit-text-fill-color: var(--color-putih-keabuan);
    text-align: center;
    margin-top: 30px;
    margin-bottom: -7px;
    padding: 0px;
}

.txt-tanggal {
    font-stretch: extra-expanded;
    font-size: 48px;
    color: var(--color-off-white);
    -webkit-text-fill-color: var(--color-off-white);
    margin-top: -10px;
    text-align: center;
}
</style>
