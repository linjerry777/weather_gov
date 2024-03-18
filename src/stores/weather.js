import { ref, computed,watch } from "vue";
import { defineStore } from "pinia";

import axios from "axios";
/* export const useWeatherStore = defineStore("weather", () => {
  let weatherData = reactive([]);
  async function getWeather() {
    let {
      data: { records },
    } = await axios.get(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0F5E6A37-DF69-4EB0-849C-8295DCC0184A"
    );
    console.log(records);

    records.location.forEach((location) => {
      let place = location.locationName;
      let weatherDataForLocation = []; // 新增一個陣列，用於存放每個地點的三天資料

      
      for (let day = 0; day < 3; day++) {
        let low = "";
        let high = "";
        let weather = "";

        
        let startTime = "";
        let endTime = "";

        //高溫
        let maxT = location.weatherElement.find(
          (weatherElement) => weatherElement.elementName === "MaxT"
        );
        if (maxT) {
          high = maxT.time[day].parameter.parameterName; 
        }

        //低溫
        let minT = location.weatherElement.find(
          (weatherElement) => weatherElement.elementName === "MinT"
        );
        if (minT) {
          low = minT.time[day].parameter.parameterName; 
          startTime = minT.time[day].startTime;
          endTime = minT.time[day].endTime;
        }

        //雲
        let wx = location.weatherElement.find(
          (weatherElement) => weatherElement.elementName === "Wx"
        );
        if (wx) {
          weather = wx.time[day].parameter.parameterName; 
        }

        //降雨機率
        let pop = location.weatherElement.find(
          (weatherElement) => weatherElement.elementName === "PoP"
        );
        if (pop) {
          pop = pop.time[day].parameter.parameterName;
        }

        //體感
        let ci = location.weatherElement.find(
          (weatherElement) => weatherElement.elementName === "CI"
        );
        if (ci) {
          ci = ci.time[day].parameter.parameterName; 
        }

        // 將當天的資料新增到地點的天氣資料陣列中
        weatherDataForLocation.push({
          day: day + 1, // 將 day 轉換為從 1 開始的索引
          startTime: startTime,
          endTime: endTime,
          low: low,
          high: high,
          weather: weather,
          ci: ci,
          pop: pop,
        });
      }

      // 將地點的三天資料新增到整體的天氣資料中
      weatherData.push({
        place: place,
        weatherData: weatherDataForLocation,
      });
    });

    console.log(weatherData);
  }
  onMounted(() => {
    // console.log(123);
    getWeather();
  });
  
  let SelectedPlace = reactive({
    place: "",
  });

  let cityInfo = reactive([''])


  watch(()=>SelectedPlace.place,(newValue, oldValue)=>{
      // console.log(newValue,'watch');
      
      cityInfo.push(weatherData.find((city) => city.place == newValue))
      console.log(cityInfo, 'cityInfo');
  });
 
  return { weatherData, SelectedPlace,cityInfo };
}); */

export const useWeatherStore = defineStore({
  id: 'weather',
  state: () => ({
    weatherData: [],
    selectedPlace: { place: '',hover:'' },
    
  }),
  actions: {
    async getWeather() {
      try {
        const response = await axios.get(
          'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0F5E6A37-DF69-4EB0-849C-8295DCC0184A'
        );
        const records = response.data.records;

        records.location.forEach(location => {
          let place = location.locationName;
          let weatherDataForLocation = [];
          let titleArr = ['今日','今日到明日','明日到後日']
          for (let day = 0; day < 3; day++) {
            let low = '';
            let high = '';
            let weather = '';
            let startTime = '';
            let endTime = '';

            let maxT = location.weatherElement.find(weatherElement => weatherElement.elementName === 'MaxT');
            if (maxT) {
              high = maxT.time[day].parameter.parameterName;
            }

            let minT = location.weatherElement.find(weatherElement => weatherElement.elementName === 'MinT');
            if (minT) {
              low = minT.time[day].parameter.parameterName;
              startTime = minT.time[day].startTime;
              endTime = minT.time[day].endTime;
            }

            let wx = location.weatherElement.find(weatherElement => weatherElement.elementName === 'Wx');
            if (wx) {
              weather = wx.time[day].parameter.parameterName;
            }

            let pop = location.weatherElement.find(weatherElement => weatherElement.elementName === 'PoP');
            if (pop) {
              pop = pop.time[day].parameter.parameterName;
            }

            let ci = location.weatherElement.find(weatherElement => weatherElement.elementName === 'CI');
            if (ci) {
              ci = ci.time[day].parameter.parameterName;
            }

            weatherDataForLocation.push({
              dayTitle: titleArr[day],
              day: day + 1,
              startTime: startTime,
              endTime: endTime,
              low: low,
              high: high,
              weather: weather,
              ci: ci,
              pop: pop,
            });
          }

          this.weatherData.push({
            place: place,
            CityData: weatherDataForLocation,
          });
        });

        
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
  },
  getters: {
    cityInfo: (state) => {
      console.log(state.selectedPlace.place);
      let cityInfo = [];
      if(state.weatherData){
        cityInfo = state.weatherData.find((city) => city.place == state.selectedPlace.place);
      }
      return cityInfo;
    } 
  },
  
});
