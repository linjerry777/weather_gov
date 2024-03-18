<template>
    <div class="flex flex-col bg-gray-800 w-full dashboard">
        <!-- 文字區 -->
        <div class="wenzi font-semibold text-center text-white flex">
            <button @click="returnList" class="returnList">返回全台</button>
            <span v-if="cityInfo" class="citytitle">{{ cityInfo.place }} </span>
        </div>

        <!-- 篩選 -->
        <div class="shaixuan justify-center w-full">
            <div class="">
                <select class="searchArea" >
                    <option v-for="(cityName,idx) in weatherData" :key="idx" >{{ cityName.place }}</option>
                </select>
            </div>
        </div>
        <!-- 卡片 -->

        <div class="flex card-group">
            <div v-if="cityInfo" class="flex flex-col card" v-for="(city, idx) in cityInfo.CityData" :key="idx">
                <div>{{ city.dayTitle }}</div>
                <img src="/src/dist/04.svg" alt="" />
                <div>{{ city.low }} - {{ city.high }}˚C</div>
                <div class="flex items-center justify-center"> <img class="umbrella" src="/src/dist/umbrella.svg"
                        alt="" />{{ city.pop }}%</div>
                <div>{{ city.weather }}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useWeatherStore } from "@/stores/weather";
import { storeToRefs } from "pinia";

const weatherStore = useWeatherStore();
const { weatherData, cityInfo, selectedPlace } = storeToRefs(weatherStore);



onMounted(() => {
    if (selectedPlace.value.place == '') {
        router.push({ name: 'list' });
    }
});
function returnList() {
    router.push({ name: 'list' });
}
</script>

<style lang="scss" scoped></style>
