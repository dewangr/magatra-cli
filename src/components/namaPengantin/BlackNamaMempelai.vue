<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

const props = defineProps({
    folderPath: {
        type: String,
        required: true,
        default: "odesaktu",
    },
    urutPutra: {
        type: Number,
        default: 1,
    },
    urutPutri: {
        type: Number,
        default: 1,
    },
    bgPath: {
        type: String,
        default: "bg/bg-pengantin.webp",
        required: true,
    },
    namaPria: {
        type: String,
        default: "I Dewa Gede Budadnyana Putra A. N.",
    },
    namaWanita: {
        type: String,
        default: "Desak Putu Suriyastini",
    },
    ayahPria: {
        type: String,
        default: "I Dewa Nyoman Adnyana (Alm)",
    },
    ibuPria: {
        type: String,
        default: "Ibu Luh Widiasih Candradewi",
    },
    ayahWanita: {
        type: String,
        default: "I Dewa Komang Mahayasa",
    },
    ibuWanita: {
        type: String,
        default: "Ibu Desak Komang Sukarini (Alm)",
    },
    alamatPria: {
        type: String,
        default: "Jalan Pulau Obi, Banyuning, Buleleng",
    },
    alamatWanita: {
        type: String,
        default: "Perumahan Permai Lestari, Penglatan Dauh Tukad, Buleleng",
    },
});

const anakPutra = `ke-${props.urutPutra}`;
const anakPutri = `ke-${props.urutPutri}`;

const bgGroom = require(`../../assets/photo/bg-${props.folderPath}/bg-groom.webp`);
const bgBride = require(`../../assets/photo/bg-${props.folderPath}/bg-bride.webp`);


let bgImage = require(`../../assets/photo/${props.bgPath}`);
</script>

<template>
    <div class="relative flex flex-col h-fit justify-center bg-black py-3 pb-20">
        <div class="absolute inset-0 z-0 h-full w-full"><img :src="bgImage"
                class="object-cover absolute opacity-50 w-full h-full" alt="..." /></div>
        <div class="main-content flex flex-col justify-center text-center">
            <div class="text-off-white">
                <div class="infoPengantin py-8 px-1 flex flex-col items-center justify-center gap-5 w-full h-full">
                    <div class="profileGroom ">
                        <div class="imageGroom animated">
                            <div class="relative ">
                                <div class="absolute top-[10%] -right-10 w-32 h-[80%] rounded-full
                                bg-gradient-to-r from-off-white/25 to-transparent blur-xl"></div>

                                <div class="rounded-full overflow-hidden relative z-10 border-2 border-off-white/70">
                                    <img :src="bgGroom" class="w-48 h-48 object-cover scale-150 rounded-full" style="object-position: center 68%;" />
                                </div>
                            </div>
                        </div>
                        <h3 class="font-dynalight text-2xl animated">
                            {{ namaPria }}
                        </h3>
                        <div class="mt-3 text-sm text-putih-keabuan animated">
                            <p>Putra {{ anakPutra }} dari pasangan</p>
                            <p class="text-off-white">
                                Bapak {{ ayahPria }}
                                <br />
                                & Ibu {{ ibuPria }}
                            </p>
                        </div>
                        <p class="alamat text-sm animated">{{ alamatPria }}</p>
                        <!-- <br> -->
                    </div>
                    <h3 class="font-dynalight text-4xl my-5 animated">
                        &
                    </h3>
                    <!-- <br> -->
                    <div class="profileBride">
                        <div class="imageBride animated">
                            <div class="relative max-w-48 max-h-48">
                                <div class="absolute top-[10%] -right-10 w-32 h-[80%] rounded-full
                                bg-gradient-to-r from-off-white/25 to-transparent blur-xl"></div>
                            </div>
                            <div class="rounded-full overflow-hidden relative z-10 border-2 border-off-white/70">
                                <img :src="bgBride" class="w-48 h-48 object-cover scale-125" />
                            </div>
                        </div>
                        <h3 class="font-dynalight text-2xl animated">
                            {{ namaWanita }}
                        </h3>
                        <div class="mt-3 text-sm text-putih-keabuan animated">
                            <p>Putri {{ anakPutri }} dari pasangan</p>
                            <p class="text-off-white">
                                Bapak {{ ayahWanita }}
                                <br />
                                & Ibu {{ ibuWanita }}
                            </p>
                        </div>
                        <p class="alamat text-sm animated">{{ alamatWanita }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profileGroom,
.profileBride {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imageGroom,
.imageBride {
    margin-bottom: 26px;
}

.alamat {
    margin-top: 4px;
    color: var(--color-putih-keabuan);
}
</style>
