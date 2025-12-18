<script setup>
import "@/assets/main.css";
import GetCountdownIndo from "../GetCountdownIndo.vue";

const targetDate = new Date("2026-01-04T08:00:00");
</script>
<template>
    <div class="relative w-full flex flex-col justify-evenly pt-8 pb-6">
        <div class="absolute inset- z-10"></div>
        <div class="background-layer absolute inset-0 z-0"></div>
        <div class="text-gold-dark z-20 relative text-center">
            <p class="font-parisienne text-4xl">
                Hari Bahagia
            </p>
        </div>
        <div
            class="relative z-20 flex flex-col text-center mx-5 my-5 pt-7 rounded-lg shadow-md bg-gold-dark/5 backdrop-blur-xs text-alt-dark">
            <div class="waktuPelaksanaan ">
                <p class="font-parisienne text-2xl tracking-widest leading-5 mb-2">
                    Minggu
                </p>
                <div class="hariTanggal ">
                    <p class="bold">04 Januari 2026</p>
                    <p>08.00 WITA - Selesai</p>
                </div>
            </div>
            <br>
            <div class="hitungMundur flex mt-2 text-sm justify-center py-2 ">
                <GetCountdownIndo :targetDate="targetDate" />
            </div>

            <div class="tempatPelaksanaan mt-6 mx-6 ">
                <h4>Jalan Babakan, Gang Nangka, Sambangan, Buleleng</h4>
            </div>

            <div class="googleMaps my-6 ">
                <a href="https://maps.app.goo.gl/CbDss5MtSvgskXvF7" type="button"
                    class="z-20 rounded-md border border-putih-keabuan/40 bg-putih-keabuan/10 px-5 py-2" target="_blank"
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

<style scoped></style>
