import { api } from "./API";

export const controller = (() => {
  async function getCurrentConditions(location) {
    const data = await api.getWeatherData(location);
    // console.log(data);
  }

  return { getCurrentConditions };
})();
