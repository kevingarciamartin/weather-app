export const api = (() => {
  const baseURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const params = {
    key: "WJ4D3458P72QN942CHCAYNYAJ",
    unitGroup: "metric",
    include: "current",
  };

  async function getWeatherData(location) {
    const url = `${baseURL}${location}?${new URLSearchParams(params)}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  return { getWeatherData };
})();
