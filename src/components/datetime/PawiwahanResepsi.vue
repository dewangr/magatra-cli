<script setup>
import "@/assets/main.css";
import GetCountdownInBahasa from "@/components/countdowns/GetCoundownInBahasa.vue";
import { defineProps, computed } from "vue";
import { formatEventDate } from "@/process/datetime/formatEventDate";
import { getStartTime } from "@/process/datetime/getStartTime";
import { generateTargetDate } from "@/process/datetime/generateTargetDate";

const props = defineProps({
    bgPath: {
        type: String,
            // default: "bg-odesaktu",
            required:true,
    },
    pwhDate: {
        type: String,
        // default: "18/10/2025",
        required:true,
    },
    pwhTimeRange: {
        type: String,
        // default: "07.00 - Selesai",
        required:true,
    },
    rspDate: {
        type: String,
        // default: "18/10/2025",
        required:true,
    },
    rspTimeRange: {
        type: String,
        // default: "17.00 - Selesai",
        required:true,
    },
    venueAddress: {
        type: String,
        required:true,
    },
    mapsLink: {
        type: String,
        // default: "https://maps.app.goo.gl/CbDss5MtSvgskXvF7",
        required:true,
    }
})

const formattedPwhDate = computed(() => formatEventDate(props.pwhDate));
const formattedRspDate = computed(() => formatEventDate(props.rspDate));

const pwhTargetDate = computed(() =>
    generateTargetDate(props.pwhDate, getStartTime(props.pwhTimeRange))
);
const rspTargetDate = computed(() =>
    generateTargetDate(props.rspDate, getStartTime(props.rspTimeRange))
);

let bgImage = require(`../../assets/photo/${props.bgPath}`);
</script>
<template>
    <div class="relative w-full flex flex-col justify-evenly py-10">
        <div class="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div class="absolute inset-0 z-0"></div>
        <div class="text-off-white z-20 relative text-center">
             <img
                :src="bgImage"
                class="object-cover absolute" 
                alt="..."
            />
            <p class="font-dynalight text-4xl tracking-widest leading-10 animated pt-6">
                Acara dan Resepsi
            </p>
        </div>
        <div
            class="relative z-20 flex flex-col text-center mx-5 my-14 pt-3 bg-black/20 backdrop-blur-sm text-off-white animated">
            <div class="waktuPelaksanaan animated">
                <p class="font-dynalight text-2xl tracking-widest leading-10 mb-1">
                    Pawiwahan
                </p>
                <div class="hariTanggal ">
                    <p class="bold">{{ formattedPwhDate }}</p>
                    <p>{{ props.pwhTimeRange }}</p>
                </div>
            </div>
            <div class="hitungMundur flex mt-3 text-sm justify-center py-2 animated">
                <GetCountdownInBahasa :targetDate="pwhTargetDate" />
            </div>
            <br>
            <div class="waktuPelaksanaan animated">
                <p class="font-dynalight text-2xl tracking-widest leading-10 mb-1">
                    Resepsi
                </p>
                <div class="hariTanggal ">
                    <p class="bold">{{ formattedRspDate }}</p>
                    <p>{{ props.rspTimeRange }}</p>
                </div>
            </div>
            <div class="hitungMundur flex mt-3 text-sm justify-center py-2 animated">
                <GetCountdownInBahasa :targetDate="rspTargetDate" />
            </div>

            <div class="tempatPelaksanaan mt-6 mx-6 animated">
                <h4>{{ props.venueAddress }}</h4>
            </div>

            <div class="googleMaps my-6 animated">
                <a :href="props.mapsLink" type="button"
                    class="z-20 border border-putih-keabuan/80 bg-putih-keabuan/10 px-5 py-2" target="_blank"
                    rel="noopener">
                    Google Maps
                </a>
            </div>
        </div>
        <!-- <p class=" text-putih-keabuan z-20 relative text-center px-5">
            Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i, kami ucapkan terima kasih.
        </p> -->
    </div>
</template>

<style scoped>
.background-layer {
    background-image: url("../../assets/photo/mangagus-dewi/background/beratan2.webp");
    background-size: cover;
    background-position: center;
}
</style>
