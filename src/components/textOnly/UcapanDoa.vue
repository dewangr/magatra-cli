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

const rspvData = ref([]);

async function getRsvpData() {
    try {
        const response = await axios.get(
            `${process.env.API_URL}/rsvps`
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
            `${process.env.API_URL}/rsvps`,
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
        <div class="flex relative h-fit justify-end py-8">
            <div
                class="main-content relative z-20 flex flex-col justify-center text-center sm:w-[60%] md:w-full h-[55%] mx-7 py-5">
                <div class="formReservasi flex flex-col ">
                    <div class="textJudul text-gold-dark">
                        <p class="font-parisienne text-4xl mb-3 ">
                            Ucapan & Doa
                        </p>
                        <p class="text-sm text-alt-dark">
                            {{ props.descSection }}
                        </p>
                    </div>
                    <form @submit.prevent="addItem" action="" method="post" class="formReservasi flex flex-col mt-5 ">
                        <label for="namaTamu" class="mt-3 text-alt-dark text-start mb-1 ">Nama</label>
                        <input v-model="namaTamu" name="namaTamu" type="text"
                            class="border border-gold-dark/40 bg-gold-dark/5 backdrop-blur-sm py-1 px-2 "
                            placeholder="Masukkan nama" required />
                        <label for="pesanUcapan" class="mt-3 text-alt-dark text-start mb-1 ">Ucapan</label>
                        <textarea v-model="ucapan" required name="pesanUcapan" rows="3"
                            class="border border-gold-dark/40 bg-gold-dark/5 py-1 px-2 backdrop-blur-sm"
                            placeholder="Mohon doa restu untuk kedua mempelai"></textarea>
                        <button type="submit"
                            class="mt-3 btn-submit px-4 py-1 border border-gold-dark/40 bg-gold-dark/5 w-max text-black ">
                            Kirim
                        </button>
                    </form>

                </div>
            </div>
        </div>
        <div class="hasil-reservasi">
            <div class="kartu-ucapan relative z-20 py-8 flex px-5 flex-col overflow-y-scroll ">
                <CardUcapan class=" backdrop-blur-md rounded-md border border-gold-dark/50 text-start "
                    v-for="(data, id) in rspvData" :key="id" :namaTamu="data.nama_tamu" :ucapan="data.ucapan"
                    :timestampKomentar="data.created_at" />
            </div>
            <div class="relative z-20 py-16 flex px-5 flex-col text-sm text-alt-dark text-center ">
                <p class="">
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

.kartu-ucapan {
    max-height: 550px;
}
</style>
