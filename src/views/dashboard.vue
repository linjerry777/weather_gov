<template>
    <div class="flex flex-col  bg-gray-800 w-full dashboard">
        <!-- 文字區 -->
        <div class="wenzi    font-semibold text-center text-white   ">
            <span class="">Seeing the weather of the whole world with </span>
        </div>

        <!-- 篩選 -->
        <div class="shaixuan justify-center w-full ">
            <div class="">
                <div
                    class="justify-center items-start self-stretch  my-auto w-full text-2xl text-center text-white whitespace-nowrap rounded-xl shadow-lg bg-slate-800 font-[275] leading-[65px] max-md:px-5 max-md:mt-10">
                    搜尋地區
                </div>


            </div>
        </div>
        <!-- 卡片 -->

        <div class="flex card-group ">
            <div class="flex flex-col card ">
                <img src="/src/dist/04.svg" alt="">
                <div><span class="">wind speed : </span>11 km</div>
                <div><span class="">Tuesday : </span>19:52</div>
                <div>Cloudy</div>
            </div>
            <div class="flex flex-col card ">
                <img src="/src/dist/04.svg" alt="">
                <div><span class="">wind speed : </span>11 km</div>
                <div><span class="">Tuesday : </span>19:52</div>
                <div>Cloudy</div>

            </div>
            <div class="flex flex-col card">
                <img src="/src/dist/04.svg" alt="">
                <div><span class="">wind speed : </span>11 km</div>
                <div><span class="">Tuesday : </span>19:52</div>
                <div>123{{ weatherInfo.weather }}</div>

            </div>

        </div>


    </div>

</template>
<script setup>

import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weather';
const { weatherData, weatherInfo } = useWeatherStore();
console.log(weatherData);
</script>

<style lang="scss" scoped></style>