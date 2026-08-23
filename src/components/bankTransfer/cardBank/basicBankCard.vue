<script setup>
import { defineProps, ref } from "vue";
import { bankIconSvg } from "@/types/consts";

const props = defineProps({
    bankNumber: {
        type: String,
        required: true,
    },
    accountHolder: {
        type: String,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    }
});

const bankSlug = props.bankName.toLowerCase();

const iconPath = require(`../../../assets/photo/bankLogo/${bankIconSvg[bankSlug]}`);
console.log(`Icon path for ${props.bankName}: ${iconPath}`);

    const buttonRef = ref(null);

function copyToClipboard(event) {
    // copy bank number to clipboard
    navigator.clipboard.writeText(props.bankNumber);
    // use the template ref or event target instead of querying by id
    const btn = buttonRef.value || event.target;
    if (!btn) return;

    btn.innerHTML = "Copied";
    setTimeout(() => {
        btn.innerHTML = "Copy";
    }, 1000);
}

</script>

<template>
    <div
        class="tujuanTransfer animated flex flex-row gap-3 text-center justify-center bg-putih-keabuan/60 rounded-md bg-blurbackdrop-blur-md py-5 px-7 mt-10">
        <div class="flex flex-col justify-between w-[70%] mx-auto">
            <img :src="iconPath" :alt="`logo-${props.bankName.toLowerCase()}`"
                class="opacity-80 w-20 mx-auto my-2">
            <div class="bankAccountDetails flex flex-col">
                <strong class="text-lg text-alt-dark">{{ props.bankNumber }}</strong>
                <p class="text-sm text-alt-dark">{{ props.accountHolder }}</p>
            </div>
        </div>
        <div class="flex w-[20%] justify-end h-fit my-auto">
            <button ref="buttonRef" type="button" @click="copyToClipboard($event)"
                class="tombolSalin rounded-md h-10px text-sm px-4 py-1 bg-black/50">
                Copy
            </button>
        </div>
    </div>
</template>
<style scoped></style>