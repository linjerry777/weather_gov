import { ref, computed } from "vue";
import { defineStore } from "pinia";

import axios from "axios";
export const useWeatherStore = defineStore("weather", () => {
  let weatherData = reactive([]);
  async function getWeather() {
    let {
      data: { records },
    } = await axios.get(
      "https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-0F5E6A37-DF69-4EB0-849C-8295DCC0184A"
    );
    console.log(records);

    for (let i = 0; i < records.location.length; i++) {
      let location = records.location[i];

      let place = location.locationName;
      let low = "";
      let high = "";
      let weather = "";

      for (let i = 0; i < location.weatherElement.length; i++) {
        let weatherElement = location.weatherElement[i];
        if (weatherElement.elementName == "MaxT") {
          high = weatherElement.time[0].parameter.parameterName;
        }
        if (weatherElement.elementName == "MinT") {
          low = weatherElement.time[0].parameter.parameterName;
        }
        if (weatherElement.elementName == "Wx") {
          weather = weatherElement.time[0].parameter.parameterName;
        }
      }
      weatherData.push({
        place: place,
        low: low,
        high: high,
        weather: weather,
      });
    }
    console.log(weatherData);
  }
  onMounted(() => {
    // console.log(123);
    getWeather();
  });


  let weatherInfo= {
    place: '',
    low: '',
    high: '',
    weather: ''
  }
  return { weatherData,weatherInfo};
});
