<script setup>
import "@/assets/main.css";
import GetCountdownIndo from "../GetCountdownIndo.vue";

const targetDate = new Date("2025-10-18T08:00:00");
</script>
<template>
    <div class="relative w-full flex flex-col justify-evenly py-10">
        <div class="absolute inset-0 bg-black opacity-70 z-10"></div>
        <div class="background-layer absolute inset-0 z-0"></div>
        <div class="text-off-white z-20 relative text-center">
            <p class="font-dynalight text-4xl tracking-widest leading-10 animated">
                Acara dan Resepsi
            </p>
        </div>
        <div
            class="relative z-20 flex flex-col text-center mx-5 my-10 pt-5 bg-black/30 backdrop-blur-md text-off-white animated">
            <div class="waktuPelaksanaan animated">
                <p class="font-dynalight text-2xl tracking-widest leading-10 mb-1">
                    Pawiwahan
                </p>
                <div class="hariTanggal ">
                    <p class="bold">Sabtu, 18 Oktober 2025</p>
                    <p>07.00 WITA - Selesai</p>
                </div>
            </div>
            <br>
            <div class="waktuPelaksanaan animated">
                <p class="font-dynalight text-2xl tracking-widest leading-10 mb-1">
                    Resepsi
                </p>
                <div class="hariTanggal ">
                    <p class="bold">Sabtu, 18 Oktober 2025</p>
                    <p>17.00 WITA - Selesai</p>
                </div>
            </div>
            <div class="hitungMundur flex mt-3 text-sm justify-center py-2 animated">
                <GetCountdownIndo :targetDate="targetDate" />
            </div>

            <div class="tempatPelaksanaan mt-6 mx-6 animated">
                <h4>Jalan Pulau Obi No. 12, Banyuning, Buleleng</h4>
            </div>

            <div class="googleMaps my-6 animated">
                <a href="https://maps.app.goo.gl/CbDss5MtSvgskXvF7" type="button"
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
