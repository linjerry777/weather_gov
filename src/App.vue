<template>
  <Header />
  <div class="max-w-6xl m-auto">

    <el-row justify="space-around">
      <el-col :span="12">
        <Taiwan />
      </el-col>
      <el-col :span="12" class="detail">
        <detailList />
      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import detailList from '@/views/detailList.vue';
import Taiwan from '@/views/Taiwan.vue';
import dashboard from '@/views/dashboard.vue';
import Header from '@/components/Header.vue';
</script>

<style scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>