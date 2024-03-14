<template>
    <div class="flex flex-col  bg-gray-800 ">
        <!-- 文字區 -->
        <div
            class="self-center mt-20 text-2xl font-semibold text-center text-white bg-clip-text leading-[65px]  ">
            <span class="font-medium">Seeing the weather of the whole world with </span>
        </div>

        <!-- 篩選 -->
        <div class="justify-center w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                    <div
                        class="justify-center items-start self-stretch py-2.5 pr-16 pl-8 my-auto w-full text-2xl text-center text-white whitespace-nowrap rounded-xl shadow-lg bg-slate-800 font-[275] leading-[65px] max-md:px-5 max-md:mt-10">
                        Search Here
                    </div>
                </div>
                <div class="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                    <div
                        class="flex grow gap-5 justify-between px-8 py-4 w-full text-2xl text-center text-white whitespace-nowrap rounded-xl bg-slate-800 leading-[65px] max-md:flex-wrap max-md:px-5 max-md:mt-10">
                        <div class="grow my-auto text-3xl font-medium">Filters</div>
                        <div
                            class="flex gap-2.5 justify-center px-4 py-1.5 rounded-2xl border border-white border-solid bg-gray-800 bg-opacity-40">
                            <div class="grow">Coldest</div>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c57ac763220e2b6551d51b9c17e9110a62f1e3c403dc351b551b2df24fdff3b?"
                                class="shrink-0 my-auto aspect-square w-[25px]" />
                        </div>
                        <div
                            class="flex gap-2.5 justify-center px-4 py-1.5 rounded-2xl border border-white border-solid bg-gray-800 bg-opacity-40">
                            <div class="grow">10°C - 20°C</div>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04af99412f036d20cbf362c8989a27f1a6b08d016d352d15932d57e44d3c063a?"
                                class="shrink-0 my-auto aspect-square w-[25px]" />
                        </div>
                        <div
                            class="flex gap-2.5 justify-center px-4 py-1.5 rounded-2xl border border-white border-solid bg-gray-800 bg-opacity-40">
                            <div>Rainy</div>
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04af99412f036d20cbf362c8989a27f1a6b08d016d352d15932d57e44d3c063a?"
                                class="shrink-0 my-auto aspect-square w-[25px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 卡片 -->
        <div class="mt-5 max-md:mr-1 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
                <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow pt-16 text-2xl font-light text-center text-white leading-[65px] max-md:mt-10">
                        <div class="flex flex-col pb-5 pl-14 rounded-3xl shadow-2xl bg-slate-800 max-md:pl-5">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/417b827ae459aad66aa48171c41eaddc6b59a5346ac2a56d201a333141be3197?"
                                class="z-10 self-start mt-0 ml-4 w-full aspect-[1.23] max-md:ml-2.5" />
                            <div class="mt-7 text-4xl font-semibold">
                                <span class="font-bold">Tehran</span>
                                <span class="font-light">35°C </span>
                            </div>
                            <div><span class="">wind speed : </span>11 km</div>
                            <div><span class="">Tuesday : </span>19:52</div>
                            <div>Cloudy</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow pt-16 pr-4 text-2xl font-light text-center text-white leading-[65px] max-md:mt-10">
                        <div class="flex flex-col pb-5 pl-14 rounded-3xl shadow-2xl bg-slate-800 max-md:pl-5">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5756be1135cdcbf440b5d7bab7d6fb26d8e4fb0e70f77dd6acd28d9b55ed328?"
                                class="z-10 self-end mt-0 max-w-full aspect-square w-[232px]" />
                            <div class="mt-7 text-4xl font-semibold">
                                <span class="font-bold">Qom</span>
                                <span class="font-light">41°C </span>
                            </div>
                            <div><span class="">wind speed : 5 </span>km</div>
                            <div><span class="">Tuesday : </span>19:52</div>
                            <div>Sunny</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow pt-14 pr-8 text-2xl font-light text-center text-white leading-[65px] max-md:mt-10">
                        <div
                            class="flex flex-col items-start pb-5 pl-14 rounded-3xl shadow-2xl bg-slate-800 max-md:pl-5">
                            <img loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/607ac5ac777a16506a22aa2342e58e33f476ed539d80c9479c26e31b412ddf6f?"
                                class="z-10 self-end mt-0 max-w-full aspect-[0.87] w-[258px]" />
                            <div class="text-4xl font-semibold">
                                <span class="font-bold">Gilan</span> 23<span class="font-light">°C
                                </span>
                            </div>
                            <div><span class="">wind speed : 23</span> km</div>
                            <div><span class="">Tuesday : </span>19:52</div>
                            <div>Rainy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
</template>
<script setup>

import { onMounted } from 'vue';

</script>

<style lang="scss" scoped></style>