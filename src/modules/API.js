import { ui } from "./UI";

export const api = (() => {
  const baseURL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const params = {
    key: "WJ4D3458P72QN942CHCAYNYAJ",
    unitGroup: "metric",
    include: "current",
  };

  const getUnitGroup = () => params.unitGroup;
  const setUnitGroup = (unitGroup) => (params.unitGroup = unitGroup);

  const getWeatherData = async (location) => {
    const url = `${baseURL}${location}?${new URLSearchParams(params)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      ui.renderError("Enter a valid location");
      return null;
    }
  };

  return { getUnitGroup, setUnitGroup, getWeatherData };
})();
