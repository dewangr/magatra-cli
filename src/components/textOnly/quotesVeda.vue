<script setup>
import "@/assets/main.css";
import { defineProps } from "vue";

const props = defineProps({
    isiQuote: {
        type: String,
        required: true,
    }, sumberQuote: {
        type: String,
        required: true,
    }
});

</script>
<template>
    <div class="relative w-full flex flex-col">
        <div class="flex relative h-fit justify-end py-10">
            <div
                class="main-content relative z-20 flex flex-col justify-center text-center sm:w-[60%] md:w-full h-[55%] mx-7">
                <div class="ayatWeda flex flex-col mx-5 text-center text-alt-dark">
                    <p>
                        {{ props.isiQuote }}
                    </p>
                    <p class="text-[16px]">
                        <strong>{{ props.sumberQuote }}</strong>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
