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
const { weatherData, weatherInfo, getWeather } = useWeatherStore();

onMounted(() => {
  // console.log(123);
  getWeather();
  setTimeout(() => {

    router.push({
      name: "list", // 路由的名稱
    });
  }, 1000)
});
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>