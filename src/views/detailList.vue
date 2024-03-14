<template>
    <div style="width: 600px;" @mouseleave="clearHover">

        <ol class="flex flex-wrap">
            <li v-for="(area, index) in weatherData" :key="index"
                :class="{ 'bg-[#ddd]': area.place == weatherInfo.place }"
                class=" flex flex-nowrap justify-center items-center border border-solid border-[#ddd] w-2/4 min-h-[55px] hover:bg-[#ddd]">
                <RouterLink :to="{ path: '/dashboard' }"
                    class="flex flex-nowrap justify-center items-center   min-h-[55px]  w-full ">

                    <span class="pr-1 w-full text-center">{{ area.place }}</span>
                    <span class="pr-1 w-full text-center"><img class="w-6 h-6 my-0 mx-auto  " src="/src/dist/01.svg"
                            alt=""></span>
                    <span class="pr-1 w-full text-center">{{ area.low }} - {{ area.high }}˚C</span>
                </RouterLink>
            </li>

        </ol>
        
    </div>

</template>

<script setup>
import { useWeatherStore } from '@/stores/weather'
import { RouterView, RouterLink } from 'vue-router';
const { weatherData, weatherInfo } = useWeatherStore();
// const router = useRouter();



</script>

<style scoped></style>
