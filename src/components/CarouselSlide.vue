<script setup></script>
<template>
  <div class="slide">
    <transition name="slide">
      <slot></slot>
    </transition>
  </div>
</template>
<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0.3;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
