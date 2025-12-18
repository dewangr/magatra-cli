<script setup>
import "@/assets/main.css";
import CardUcapan from "./../cardUcapan.vue";
import axios from "axios";
import { onMounted, ref, defineProps } from "vue";

const props = defineProps({
    descSection: {
        type: String,
        required: false,
        default: "Mohon doa restu untuk kedua mempelai, dan silakan isi form dibawah ini untuk mengirimkan ucapan atau konfirmasi kehadiran Anda.",
    },
});


const apiURL = 'https://api.magatra.top'

const rspvData = ref([]);

async function getRsvpData() {
    try {
        const response = await axios.get(
            `${apiURL}/api/rsvps`
        );
        rspvData.value = response.data.data;
        return;
    } catch (error) {
        console.error("There has been a problem with your fetch operation:", error);
    }
}

onMounted(() => {
    getRsvpData();
});

setInterval(async () => {
    await getRsvpData();
    console.log("Data refreshed");
}, 5000); // Refresh every minute

const namaTamu = ref("");
const ucapan = ref("");

async function addItem() {
    try {
        const response = await axios.post(
            `${apiURL}/api/rsvps`,
            {
                nama_tamu: namaTamu.value,
                ucapan: ucapan.value,
            }
        );
        console.log(response);
    } catch (err) {
        console.error("There has been a problem with your fetch operation: ", err);
    }
    await getRsvpData(); // Refresh data after adding new item
    namaTamu.value = "";
    ucapan.value = "";
}
</script>
<template>
    <div class="relative w-full flex flex-col">
        <div class="flex relative h-fit justify-end bg-black py-10">
            <div
                class="main-content relative z-20 flex flex-col justify-center text-center sm:w-[60%] md:w-full h-[55%] mx-7 py-5">
                <div class="formReservasi flex flex-col ">
                    <div class="textJudul text-off-white">
                        <p class="font-dynalight text-4xl tracking-widest leading-10 mb-3 animated">
                            Ucapan & Doa
                        </p>
                        <p class="text-sm text-putih-keabuan animated">
                            {{ props.descSection }}
                        </p>
                    </div>
                    <form @submit.prevent="addItem" action="" method="post"
                        class="formReservasi flex flex-col mt-5 animated">
                        <label for="namaTamu" class="mt-3 text-off-white text-start mb-1 animated">Nama</label>
                        <input v-model="namaTamu" name="namaTamu" type="text"
                            class="border border-putih-keabuan/80 bg-putih-keabuan/10 backdrop-blur-md py-1 px-2 animated"
                            placeholder="Masukkan nama" required />
                        <label for="pesanUcapan" class="mt-3 text-off-white text-start mb-1 animated">Ucapan</label>
                        <textarea v-model="ucapan" required name="pesanUcapan" rows="3"
                            class="border border-putih-keabuan/80 bg-putih-keabuan/10 py-1 px-2 animated"
                            placeholder="Mohon doa restu untuk kedua mempelai"></textarea>
                        <button type="submit"
                            class="mt-3 btn-submit px-4 py-1 border border-putih-keabuan/80 bg-putih-keabuan/90 w-max text-black animated">
                            Kirim
                        </button>
                    </form>

                </div>
            </div>
        </div>
        <div class="hasil-reservasi">
            <div class="absolute inset-0 bg-black opacity-80 z-10"></div>
            <div class="kartu-ucapan relative z-20 py-8 flex px-5 flex-col overflow-y-scroll animated">
                <CardUcapan class="bg-putih-keabuan/20 backdrop-blur-md rounded-none text-start animated"
                    v-for="(data, id) in rspvData" :key="id" :namaTamu="data.nama_tamu" :ucapan="data.ucapan"
                    :timestampKomentar="data.created_at" />
            </div>
            <div class="relative z-20 py-16 flex px-5 flex-col text-sm text-putih-keabuan text-center animated">
                <p class="mb-2 animated">
                    Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
                    berkenan hadir di hari bahagia kami.
                </p>
                <p class="animated">
                    Atas kehadiran dan doa restu Bapak/Ibu/Saudara/i kami ucapkan terima
                    kasih.
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.main-content {
    grid-template-rows: 4fr 1fr;
}

.hasil-reservasi {
    background-image: url("../../assets/photo/mangagus-dewi/background/lempuyang.webp");
    background-size: cover;
    background-position: center;
}

.kartu-ucapan {
    max-height: 550px;
}
</style>
