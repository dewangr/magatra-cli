<script setup>
    import "@/assets/main.css";
    import CardUcapan from "./../cardUcapan.vue";
    import { onMounted, ref, defineProps } from "vue";
    import { getDataRsvpByOwner } from "@/process/rsvp/getDataRsvpByOwner";
    import NewFormWithAttendance from "../forms/NewFormWithAttendance.vue";

    const props = defineProps({
        descSection: {
            type: String,
            required: false,
            default: "Mohon doa restu untuk kedua mempelai, dan silakan isi form dibawah ini untuk mengirimkan ucapan dan konfirmasi kehadiran Anda.",
        },
        bgPath: {
            type: String,
            default: "background/bg-reservasi.webp",
            required: true
        }, 
        ownerName: {
            type: String,
            required: true
        },
        ceremonyName: {
            type: String,
            default:"pawiwahan",
            required:true 
        }
    });

    const rspvData = ref([]);

    onMounted(() => {
    getDataRsvpByOwner(props.ownerName).then((data) => {
        rspvData.value = data.value;
    });
    });

    setInterval(async () => {
    await getDataRsvpByOwner(props.ownerName);
    console.log("Data refreshed");
    }, 5000); // Refresh every minute


    let bgImage = require(`../../assets/photo/${props.bgPath}`);
</script>
<template>
    <div class="relative w-full flex flex-col">
        <div class="flex relative h-fit justify-end bg-black">
            <div
                class="main-content relative z-20 flex flex-col justify-center sm:w-[60%] md:w-full h-[55%] mx-7 py-5">
                <div class="formReservasi flex flex-col ">
                    <div class="textJudul text-center mb-5 text-off-white">
                        <p class="font-dynalight text-4xl tracking-widest leading-10 mb-3 animated">
                            Ucapan & Doa
                        </p>
                        <p class="text-sm text-putih-keabuan animated">
                            {{ props.descSection }}
                        </p>
                    </div>
                    <NewFormWithAttendance :ownerName="props.ownerName" :ceremonyName="props.ceremonyName"/>
                    <!-- <div
                        class="hasilReservasi mt-7 flex flex-col max-h-56 lg:max-h-48 overflow-y-scroll animated">
                        <KehadiranText
                            v-for="(data, id) in rspvData"
                            :key="id"
                            :namaTamu="data.nama_tamu"
                            :ucapan="data.ucapan"
                            :timestampKomentar="data.created_at"
                            :konfirmasiKehadiran="data.kehadiran"
                        />
                    </div> -->
                </div>
            </div>
        </div>
        <div class="hasil-reservasi">
            <img
                :src="bgImage"
                class="object-cover absolute" 
                alt="..."
            />
            <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div class="kartu-ucapan relative z-20 py-8 flex px-5 flex-col overflow-y-scroll animated">
                <CardUcapan class="bg-putih-keabuan/70 backdrop-blur-md rounded-none text-start animated"
                    v-for="(data, id) in rspvData" :key="id" :namaTamu="data.guestName" :ucapan="data.guestMessage"
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

/* .hasil-reservasi {
    background-image: url("../../assets/photo/mangagus-dewi/background/lempuyang.webp");
    background-size: cover;
    background-position: center;
} */

.kartu-ucapan {
    max-height: 550px;
}
</style>
