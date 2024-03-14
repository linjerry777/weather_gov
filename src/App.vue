<template>
  <Header />

  <div class="box">
    <Taiwan />
    <RouterView></RouterView>
  </div>

</template>

<script setup>

import Taiwan from '@/views/Taiwan.vue';
import Header from '@/components/Header.vue';
import { RouterView, RouterLink } from 'vue-router';
import '@/style/dashboard.scss'
import { useWeatherStore } from '@/stores/weather';
const { weatherData, weatherInfo } = useWeatherStore();
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>