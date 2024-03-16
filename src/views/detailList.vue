<template>
    <div class="detailList" @mouseleave="clearHover">

        <ol class="flex flex-wrap">
            <li @click="SelectWeather(area)" v-for="(area, index) in weatherData" :key="index"
                :class="{ 'bg-[#ddd]': area.place == SelectedPlace.place }"
                class=" flex flex-nowrap justify-center items-center border border-solid border-[#ddd] w-2/4 min-h-[55px] hover:bg-[#ddd]">
                <RouterLink :to="{name: 'db' }"
                    class="flex flex-nowrap justify-center items-center   min-h-[55px]  w-full ">

                    <span class="pr-1 w-full text-center">{{ area.place }}</span>
                    <span class="pr-1 w-full text-center"><img class="w-6 h-6 my-0 mx-auto  " src="/src/dist/01.svg"
                            alt=""></span>
                    <span class="pr-1 w-full text-center">{{ area.weatherData[0].low }} - {{ area.weatherData[0].high
                        }}˚C</span>
                </RouterLink>
            </li>

        </ol>

    </div>

</template>

<script setup>
import { useWeatherStore } from '@/stores/weather'
import { RouterView, RouterLink } from 'vue-router';
const { weatherData, SelectedPlace } = useWeatherStore();
// const router = useRouter();


function SelectWeather(area){
    SelectedPlace.place = area.place
    console.log(SelectedPlace);
}

</script>

<style scoped></style>
