<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";
import BasicBankCard from "./cardBank/basicBankCard.vue";

const props = defineProps({
    textTittle: {
        type: String,
        default: "Amplop Digital"
    },
    textContent: {
        type: String,
        default: "Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan hadiah kepada kedua mempelai dapat mengirimnya melalui"
    },
    bgPath: {
        type: String,
        default: ""
    }, 
    bankAccounts: {
        type: Array,
        required: true,
    }
});


</script>
<template>
    <div class="relative w-full h-[80%] flex flex-col">
        <div class="bg-black flex relative justify-end py-20">
            <div class="relative">
                <img :src="require(`../../assets/photo/${bgPath}`)" class="object-cover absolute opacity-70"
                    alt="..." />
                <div
                    class="main-content mt-15 relative z-20 flex flex-col justify-center text-center sm:w-[60%] md:w-full h-[55%] mx-7">
                    <div>
                        <p class="font-parisienne text-off-white text-4xl mb-3 animated">
                            {{ props.textTittle }}
                        </p>
                        <p class="text-sm text-putih-keabuan animated">
                            {{ props.textContent }}
                        </p>
                        <BasicBankCard class="animated" v-for="(bank, i) in bankAccounts" 
                        :key="i" :bankNumber="bank.bankNumber" :accountHolder="bank.accountHolder" :bankName="bank.bankName"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
