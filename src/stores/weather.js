import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

import axios from "axios";
export const useWeatherStore = defineStore({
  id: "weather",
  state: () => ({
    weatherData: [],
    selectedPlace: { place: "", hover: "" },
  }),
  actions: {
    async getWeather() {
      try {
        const response = await axios.get(
          // "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0F5E6A37-DF69-4EB0-849C-8295DCC0184A"
          `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${import.meta.env.VITE_KEY}`
        );
        const records = response.data.records;
        console.log(records, "rcds");
        const enPlace = [
          { 基隆市: "Keelung" },
          { 新北市: "New_Taipei_City" },
          { 臺北市: "Taipei_City" },
          { 桃園市: "Taoyuan_City" },
          { 新竹縣: "Hsinchu_County" },
          { 新竹市: "Hsinchu_City" },

          { 苗栗縣: "Miaoli_County" },
          { 臺中市: "Taichung_City" },
          { 彰化縣: "Changhua_County" },
          { 南投縣: "Nantou_County" },
          { 雲林縣: "Yunlin_County" },

          { 嘉義縣: "Chiayi_County" },
          { 嘉義市: "Chiayi_City" },
          { 臺南市: "Tainan_City" },
          { 高雄市: "Kaohsiung_City" },
          { 屏東縣: "Pingtung_County" },

          { 宜蘭縣: "Yilan_County" },
          { 花蓮縣: "Hualien_County" },
          { 臺東縣: "Taitung_County" },
          { 澎湖縣: "Penghu_County" },
          { 連江縣: "Lienchiang_County" },
          { 金門縣: "Kinmen_County" },
          { 連江縣: "Lienchiang_County" },
        ];
        records.location.forEach((location) => {
          let place = location.locationName;
          let weatherDataForLocation = [];
          let titleArr = ["今日白天", "今晚明晨", "明日白天"];
          let matchingEntry = enPlace.find((entry) =>
            entry.hasOwnProperty(place)
          );
          let enPlaceName = matchingEntry ? matchingEntry[place] : ""; // 如果找到匹配的英文地点名称，则存储；否则存储空字符串
          for (let day = 0; day < 3; day++) {
            let low = "";
            let high = "";
            let weather = "";
            let startTime = "";
            let endTime = "";

            let maxT = location.weatherElement.find(
              (weatherElement) => weatherElement.elementName === "MaxT"
            );
            if (maxT) {
              high = maxT.time[day].parameter.parameterName;
            }

            let minT = location.weatherElement.find(
              (weatherElement) => weatherElement.elementName === "MinT"
            );
            if (minT) {
              low = minT.time[day].parameter.parameterName;
              startTime = minT.time[day].startTime;
              endTime = minT.time[day].endTime;
            }

            let wx = location.weatherElement.find(
              (weatherElement) => weatherElement.elementName === "Wx"
            );
            if (wx) {
              weather = wx.time[day].parameter.parameterName;
            }

            let pop = location.weatherElement.find(
              (weatherElement) => weatherElement.elementName === "PoP"
            );
            if (pop) {
              pop = pop.time[day].parameter.parameterName;
            }

            let ci = location.weatherElement.find(
              (weatherElement) => weatherElement.elementName === "CI"
            );
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
            enPlace: enPlaceName,
            CityData: weatherDataForLocation,
          });
        });

        console.log(this.weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
  getters: {
    cityInfo: (state) => {
      console.log(state.selectedPlace.place);
      let cityInfo = [];
      if (state.weatherData) {
        cityInfo = state.weatherData.find(
          (city) => city.place == state.selectedPlace.place
        );
      }
      return cityInfo;
    },
  },
});
