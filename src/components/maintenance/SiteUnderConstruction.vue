<template>
  <div class="construction-container">
    <div class="content">
        <span class="construction-icon">🚧</span>
        <h1>Website Sedang Dalam Proses Pengembangan</h1>
      <p>
        Maaf atas ketidaknyamanannya. Website ini saat ini masih dalam proses
        pengembangan dan akan segera tersedia.
      </p>

      <div class="progress-wrapper mx-auto">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
      <span class="progress-text">{{ progress }}%</span>

      <div class="contact mt-6">
        <p>Jika ada pertanyaan silakan hubungi kami</p>
        <div class="flex flex-row justify-center -mt-3">
            <a href="mailto:magatradigital@gmail.com" class="fa-solid fa-envelope mx-2" ></a>
          <a href="https://wa.me/+6285161615628" class="fa fa-whatsapp mx-2" target="_blank" rel="noopener"
              aria-hidden="true"></a>
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 75) {
      progress.value += 5;
    } else {
      clearInterval(interval);
    }
  }, 200);
});
</script>

<style scoped>
.construction-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #050238, #650cb8);
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  text-align: center;
  padding: 20px;
}

.content {
  max-width: 500px;
}
.construction-icon {
  font-size: 4rem;
  margin-bottom: 20px;}

h1 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

p {
  margin-bottom: 20px;
  line-height: 1.5;
}

.progress-wrapper {
  width: 80%;
  height: 20px;
  background: rgba(156, 156, 156, 0.3);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-bar {
  height: 100%;
  background: #1be063;
  transition: width 0.4s ease;
}

.progress-text {
  font-size: 0.9rem;
  opacity: 0.9;
}

.contact a {
    font-size: 1.2 rem;
  text-decoration: none;
}
</style>