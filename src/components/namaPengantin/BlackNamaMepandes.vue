<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

const props = defineProps({
  profilePath: {
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
  }, 
  totalPerson: {
    type: Number,
    default: 2,
  }, 
  bgPath: {
    type: String,
    required: true,
  },
});

const anakPutra = props.urutPutra === 1 ? "pertama" : props.urutPutra === 2 ? "kedua" : props.urutPutra === 3 ? "ketiga" : `ke-${props.urutPutra}`;
const anakPutri = props.urutPutri === 1 ? "pertama" : props.urutPutri === 2 ? "kedua" : props.urutPutri === 3 ? "ketiga" : `ke-${props.urutPutri}`;

let photoProfiles = [];
for(let i=1; i<props.totalPerson+1; i++){
    photoProfiles.push(require(`../../assets/photo/${props.profilePath}/dp (${i}).webp`));
}

let bgImage = require(`../../assets/photo/${props.bgPath}`);
</script>

<template>
    <div class="relative flex flex-col h-fit justify-center bg-black py-3 pb-20">
        <div class="absolute inset-0 z-0 h-full w-full"><img
                :src="bgImage"
                class="object-cover absolute opacity-50 w-full h-full" 
                alt="..."
            /></div>
        <div class="textJudul text-center mb-3 text-off-white">
                        <p class="font-dynalight text-4xl tracking-widest leading-10 animated">
                            Mepandes
                        </p>
                    </div>
        <div class="main-content flex flex-col justify-center text-center">
            <div class="text-off-white">
                <div
                    class="infoPengantin py-8 px-1 flex flex-col items-center justify-center w-full h-full">
                    <div class="profileGroom ">
                        <div class="imageGroom animated">
                            <div class="relative ">
                                <div
                                class="absolute top-[10%] -right-10 w-32 h-[80%] rounded-full
                                bg-gradient-to-r from-off-white/25 to-transparent blur-xl"
                                ></div>

                                <div class="w-full h-full rounded-full overflow-hidden relative z-10 border-2 border-off-white/70">
                                <img
                                    :src="photoProfiles[0]"
                                    class="w-48 h-48 object-cover scale-125 "
                                />
                                </div>
                            </div>
                        </div>
                        <h3 class="font-dynalight text-2xl animated">
                        Dewa Ayu Dwi Astiti Satrianingrum
                        </h3>
                        <div class="mt-3 text-sm text-putih-keabuan animated">
                            <p>Putri {{ anakPutri }} dari pasangan</p>
                            <p class="text-off-white">
                                Bapak I Dewa Nyoman Adnyana (Alm)
                                <br />
                                & Ibu Luh Widiasih Candradewi
                            </p>
                        </div>
                        <p class="alamat text-sm animated">Jalan Pulau Obi, Banyuning, Buleleng</p>
                        <!-- <br> -->
                    </div>
                    <!-- <br> -->
                    <div class="profileBride pt-14 pb-20">
                        <div class="imageBride animated">
                            <div class="relative max-w-48 max-h-48">
                                <div
                                class="absolute top-[10%] -right-10 w-32 h-[80%] rounded-full
                                bg-gradient-to-r from-off-white/25 to-transparent blur-xl"
                                ></div>
                            </div>
                            <div class="rounded-full overflow-hidden relative z-10 border-2 border-off-white/70" >
                                <img
                                    :src="photoProfiles[1]"
                                    class="w-48 h-48 object-cover scale-125"
                                />
                            </div>
                        </div>
                        <h3 class="font-dynalight text-2xl animated">
                            I Dewa Ngurah Tri Hendrawan
                        </h3>
                        <div class="mt-3 text-sm text-putih-keabuan animated">
                            <p>Putra {{ anakPutra }} dari pasangan</p>
                            <p class="text-off-white">
                                Bapak I Dewa Nyoman Adnyana (Alm)
                                <br />
                                & Ibu Luh Widiasih Candradewi
                            </p>
                        </div>
                        <p class="alamat text-sm animated">Jln. Pulau Obi, Banyuning, Buleleng</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.profileGroom, .profileBride{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imageGroom, .imageBride{
    margin-bottom: 26px;
}

.alamat {
    margin-top: 4px;
    color: var(--color-putih-keabuan);
}
</style>
