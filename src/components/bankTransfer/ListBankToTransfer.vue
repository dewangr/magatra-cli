<script setup>
import "@/assets/main.css";
import { defineProps, ref } from "vue";

const props = defineProps ({
    textTittle: {
        type: String,
        default: "Amplop Digital"
    },
    textContent: {
        type: String,
        default: "Tanpa mengurangi rasa hormat kami, bagi tamu yang ingin mengirimkan hadiah kepada kedua mempelai dapat mengirimnya melalui"
    },
    bankNumber: {
        type: String,
        default: "8271056966"
    },
    bgPath: {
        type: String,
        default: ""
    }
});

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
    <div class="relative w-full h-[80%] flex flex-col">
        <div class="bg-black flex relative justify-end py-20">
             <div class="relative">
                <img
                    :src="require(`../../assets/photo/${bgPath}`)"
                    class="object-cover absolute opacity-70"
                    alt="..."
                />
            <div
                class="main-content mt-15 relative z-20 flex flex-col justify-center text-center sm:w-[60%] md:w-full h-[55%] mx-7">
                <div>
                    <p class="font-parisienne text-off-white text-4xl mb-3 animated">
                        {{props.textTittle}}
                    </p>
                    <p class="text-sm text-putih-keabuan animated">
                       {{props.textContent}}
                    </p>
                    <div class="tujuanTransfer animated flex flex-row gap-3 text-center justify-center bg-putih-keabuan/60 rounded-md bg-blurbackdrop-blur-md py-5 px-7 mt-10">
                        <div class="flex flex-col justify-between w-[70%] mx-auto">
                            <img src="../../assets/photo/bankLogo/bca.svg" alt="logo-bca" class="opacity-80 w-20 mx-auto my-2"> 
                            <div class="bankAccountDetails flex flex-col">
                                <strong class="text-lg text-alt-dark">{{ props.bankNumber }}</strong>
                                <p class="text-sm text-alt-dark">I Dewa Gede Budadnyana Putra Adi Nugraha</p>
                            </div>
                        </div>
                         <div class="flex w-[20%] justify-end h-fit my-auto">
                                <button
                                    ref="buttonRef"
                                    type="button"
                                    @click="copyToClipboard($event)"
                                    class="tombolSalin rounded-md h-10px text-sm px-4 py-1 bg-black/50"
                                >
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
