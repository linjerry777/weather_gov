<template>
    <div class="detailList" @mouseleave="clearHover">

        <ol class="flex flex-wrap">
            <li @click="SelectCity(area.place)" v-for="(area, index) in weatherData" :key="index"
                :class="{ 'bg-[#ddd]': area.place == selectedPlace.hover }"
                class=" flex flex-nowrap justify-center items-center border border-solid border-[#ddd] w-2/4 min-h-[55px] hover:bg-[#ddd]">
                <a 
                    class="flex flex-nowrap justify-center items-center   min-h-[55px]  w-full ">
                    <span class="pr-1 w-full text-center">{{ area.place }}</span>
                    <span class="pr-1 w-full text-center"><img class="w-6 h-6 my-0 mx-auto  " src="/src/dist/01.svg"
                            alt=""></span>
                    <span class="pr-1 w-full text-center">{{ area.CityData[0].low }} - {{ area.CityData[0].high
                        }}˚C</span>
                </a>
            </li>

        </ol>

    </div>

</template>

<script setup>
import { useWeatherStore } from '@/stores/weather'
import { RouterView, RouterLink } from 'vue-router';
let { weatherData, selectedPlace } = useWeatherStore();
// const router = useRouter();
// console.log(weatherData,1);
// console.log(selectedPlace);




function SelectCity(area) {
    selectedPlace.place = area
    router.push({
        name:'db'
    })
    // console.log(selectedPlace);
}

</script>

<style scoped></style>
