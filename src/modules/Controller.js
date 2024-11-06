import { api } from "./API";
import { ui } from "./UI";

export const controller = (() => {
  const handleLocationInput = async (location) => {
    const data = await api.getWeatherData(location);
    if (data !== null) ui.render(data);
  };

  return { handleLocationInput };
})();
