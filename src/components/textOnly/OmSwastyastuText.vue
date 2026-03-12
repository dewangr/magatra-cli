<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

const props = defineProps ({
    textTittle: {
        type: String,
        default: "Om Swastyastu"
    },
    textContent: {
        type: String,
        default: "Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir pada upacara pawiwahan anak kami."
    }
})
</script>
<template>
    <div class="relative w-full flex flex-col">
        <div class="bg-black flex relative h-fit justify-end py-20">
            <div
                class="main-content relative z-20 flex flex-col justify-center text-center sm:w-[60%] md:w-full h-[55%] mx-7">
                <div>
                    <p class="font-parisienne text-off-white text-4xl mb-3 animated">
                        {{props.textTittle}}
                    </p>
                    <p class="text-sm text-putih-keabuan animated">
                       {{props.textContent}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
