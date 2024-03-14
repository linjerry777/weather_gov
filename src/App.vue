<template>
  <Header />

  <div class="box">
    <Taiwan />
    <RouterView></RouterView>
  </div>

</template>

<script setup>
import detailList from '@/views/detailList.vue';
import Taiwan from '@/views/Taiwan.vue';
import dashboard from '@/views/dashboard.vue';
import Header from '@/components/Header.vue';
import { RouterView, RouterLink } from 'vue-router';
import '@/style/dashboard.scss'
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>