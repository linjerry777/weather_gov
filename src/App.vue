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
  import '@/style/dashboard.scss'

  import { useWeatherStore } from '@/stores/weather'
  const weatherStore = useWeatherStore();

  weatherStore.getWeather();
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>