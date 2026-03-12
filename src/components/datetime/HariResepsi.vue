<script setup>
import "@/assets/main.css";
import GetCountdownInBahasa from "@/components/countdowns/GetCoundownInBahasa.vue";
import { defineProps, computed } from "vue";
import { getStartTime } from "@/process/datetime/getStartTime";
import { generateTargetDate } from "@/process/datetime/generateTargetDate";
import { formatDateWithNoDay } from "@/process/datetime/formatDateWithNoDay";
import dayjs from "dayjs";

const props = defineProps({
    bgPath: {
        type: String,
            // default: "bg-odesaktu",
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

const formattedRspDate = computed(() => formatDateWithNoDay(props.rspDate));

const rspTargetDate = computed(() =>
    generateTargetDate(props.rspDate, getStartTime(props.rspTimeRange))
);

let bgImage = require(`../../assets/photo/${props.bgPath}`);
</script>
<template>
    <div class="relative w-full flex flex-col justify-evenly">
        <div class="relative top-0 inset-0 h-6 w-full bg-gradient-to-b from-black to-transparent z-10 "></div>
        <div class="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div class="absolute inset-0 z-0"><img
                :src="bgImage"
                class="object-cover absolute" 
                alt="..."
            />
        </div>
        <div class="text-off-white z-20 relative text-center">
            <p class="font-dynalight text-4xl tracking-widest leading-10 animated mt-10">
                Resepsi Pernikahan
            </p>
        </div>
        <div
            class="relative z-20 flex flex-col text-center mx-5 my-10 pt-3 bg-black/20 backdrop-blur-sm text-off-white animated">
            <div class="waktuPelaksanaan animated">
                <div class="waktuPelaksanaan animated">
                    <p class="font-dynalight text-2xl tracking-widest leading-10 mb-1">
                        {{dayjs(props.rspDate, "DD/MM/YYYY").format("dddd")}}
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
        </div>
        <div class="relative inset-0 h-8 w-full bg-gradient-to-b from-transparent to-black/100 "></div>
    </div>
</template>
<style scoped>
</style>
