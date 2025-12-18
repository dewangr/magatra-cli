<script setup>
import { defineComponent, defineProps } from "vue";

defineProps({
  brideName: {
    type: String,
    default: "Rika",
  },
  groomName: {
    type: String,
    default: "Indra",
  },
  titleText: {
    type: String,
    default: "The Wedding Of",
  },
});
defineComponent({
  name: "NamaPengantin",
});
</script>
<template>
  <div class="ds-text-nama-pengantin flex flex-col">
    <h4 class="txt-wedding-of font-karla uppercase">{{ titleText }}</h4>
    <h2 class="txt-mempelai font-basic capitalize font-white">
      {{ groomName }} & {{ brideName }}
    </h2>
  </div>
</template>
<style scoped></style>
