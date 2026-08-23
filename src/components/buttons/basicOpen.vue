<script setup>
import "@/assets/main.css";

</script>

<template>
    <button type="button" class="btn-buka-undangan z-30 animated text-alt-dark" id="btn-buka">
        <i class="fa-solid fa-envelope-open"></i>&nbsp; Buka Undangan
    </button>
</template>

<style scoped>
.btn-buka-undangan {
    background-color: var(--color-off-white);
    color: var(--color-alt-dark);
    border: none;
    padding: 5px 12px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
}

.btn-buka-undangan:hover {
    transition: 0.2s;
    transform: scale(1.05);
}
</style>