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
  urutPutri:{
    type: Number,
    default: 1,
  }
});

const anakPutra = props.urutPutra === 1 ? "pertama" : props.urutPutra === 2 ? "kedua" : props.urutPutra === 3 ? "ketiga" : `ke-${props.urutPutra}`;
const anakPutri = props.urutPutri === 1 ? "pertama" : props.urutPutri === 2 ? "kedua" : props.urutPutri === 3 ? "ketiga" : `ke-${props.urutPutri}`;

const bgGroom = require(`../../assets/photo/bg-${props.folderPath}/bg-groom.webp`);
const bgBride = require(`../../assets/photo/bg-${props.folderPath}/bg-bride.webp`);

</script>

<template>
    <div class="flex h-fit justify-center bg-black py-3 pb-20">
        <div class="main-content flex flex-col justify-center text-center">
            <div class="text-off-white">
                <div
                    class="infoPengantin py-8 px-1 flex flex-col items-center justify-center gap-5 w-full h-full">
                    <div class="profileGroom ">
                        <div class="imageGroom animated">
                            <div class="relative ">
                                <div
                                class="absolute top-[10%] -right-10 w-32 h-[80%] rounded-full
                                bg-gradient-to-r from-off-white/25 to-transparent blur-xl"
                                ></div>

                                <div class="w-full h-full rounded-full overflow-hidden relative z-10 border-2 border-off-white/70">
                                <img
                                    :src="bgGroom"
                                    class="w-56 h-56 object-cover scale-125 "
                                />
                                </div>
                            </div>
                        </div>
                        <h3 class="font-dynalight text-2xl animated">
                        I Dewa Gede Budadnyana Putra A. N.
                        </h3>
                        <div class="mt-3 text-sm text-putih-keabuan animated">
                            <p>Putra {{ anakPutra }} dari pasangan</p>
                            <p class="text-off-white">
                                Bapak I Dewa Nyoman Adnyana (Alm)
                                <br />
                                & Ibu Luh Widiasih Candradewi
                            </p>
                        </div>
                        <p class="mt-1 text-sm animated">Jalan Pulau Obi, Banyuning, Buleleng</p>
                        <!-- <br> -->
                    </div>
                    <h3 class="font-dynalight text-4xl my-5 animated">
                        &
                    </h3>
                    <!-- <br> -->
                    <div class="profileBride">
                        <div class="imageBride animated">
                            <div class="relative max-w-48 max-h-48">
                                <div
                                class="absolute top-[10%] -right-10 w-32 h-[80%] rounded-full
                                bg-gradient-to-r from-off-white/25 to-transparent blur-xl"
                                ></div>
                            </div>
                            <div class="rounded-full overflow-hidden relative z-10 border-2 border-off-white/70" >
                                <img
                                    :src="bgBride"
                                    class="w-56 h-56 object-cover scale-125"
                                />
                            </div>
                        </div>
                        <h3 class="font-dynalight text-2xl animated">
                            Desak Putu Suriyastini
                        </h3>
                        <div class="mt-3 text-sm text-putih-keabuan animated">
                            <p>Putri {{ anakPutri }} dari pasangan</p>
                            <p class="text-off-white">
                                Bapak I Dewa Komang Mahayasa
                                <br />
                                & Ibu Desak Komang Sukarini (Alm)
                            </p>
                        </div>
                        <p class="mt-1 text-sm animated">Perumahan Permai Lestari, Penglatan Dauh Tukad, Buleleng</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
img{
    max-width: 160px;
    max-height: 160px;
}

.profileGroom, .profileBride{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imageGroom, .imageBride{
    margin-bottom: 26px;
}

</style>
