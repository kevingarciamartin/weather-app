import { api } from "./API";
import clearDay from "../svg/clear-day.svg";
import clearNight from "../svg/clear-night.svg";
import cloudy from "../svg/cloudy.svg";
import fog from "../svg/fog.svg";
import hail from "../svg/hail.svg";
import partlyCloudyDay from "../svg/partly-cloudy-day.svg";
import partlyCloudyNight from "../svg/partly-cloudy-night.svg";
import rainSnowShowersDay from "../svg/rain-snow-showers-day.svg";
import rainSnowShowersNight from "../svg/rain-snow-showers-night.svg";
import rainSnow from "../svg/rain-snow.svg";
import rain from "../svg/rain.svg";
import showersDay from "../svg/showers-day.svg";
import showersNight from "../svg/showers-night.svg";
import sleet from "../svg/sleet.svg";
import snowShowersDay from "../svg/snow-showers-day.svg";
import snowShowersNight from "../svg/snow-showers-night.svg";
import snow from "../svg/snow.svg";
import thunderRain from "../svg/thunder-rain.svg";
import thunderShowersDay from "../svg/thunder-showers-day.svg";
import thunderShowersNight from "../svg/thunder-showers-night.svg";
import thunder from "../svg/thunder.svg";
import wind from "../svg/wind.svg";

export const ui = (() => {
  const render = (data) => {
    renderLocationInput();
    renderError("");
    renderLocation(data);
    renderTemperature(data);
    renderDescription(data);
    renderIcon(data);
  };

  const renderLocationInput = () => {
    const locationInput = document.querySelector("form input");
    locationInput.value = "";
  };

  const renderLocation = (data) => {
    if (!data) return;

    const locationContainer = document.querySelector("#location");

    const resolvedAddress = data.resolvedAddress;
    let title = resolvedAddress.split(",")[0];
    let subtitle;
    if (resolvedAddress.split(",").length > 1) {
      let [title, ...rest] = resolvedAddress.split(",");
      subtitle = rest.join(", ");
    }
    locationContainer.textContent = "";

    const locationTitle = document.createElement("h1");
    locationTitle.textContent = title;
    locationContainer.appendChild(locationTitle);

    if (subtitle !== undefined) {
      const locationSubtitle = document.createElement("p");
      locationSubtitle.textContent = subtitle;
      locationContainer.appendChild(locationSubtitle);
    }
  };

  const renderTemperature = (data) => {
    if (!data) return;

    const temperatureContainer = document.querySelector("#temperature");

    const unitGroup = api.getUnitGroup();
    const unit = unitGroup === "metric" ? "°C" : "°F";
    temperatureContainer.innerHTML = `
      <h2>${data.currentConditions.temp}${unit}</h2>
      <p>Feels like: ${data.currentConditions.feelslike}${unit}</p>
    `;
  };

  const renderDescription = (data) => {
    if (!data) return;

    const descriptionContainer = document.querySelector("#description");

    descriptionContainer.innerHTML = `
      <p>${data.currentConditions.conditions}</p>
      <div id="icon"></div>
    `;
  };

  const renderIcon = (data) => {
    if (!data) return;

    const icon = document.querySelector("#icon");
    const image = document.createElement("img");

    let src;

    switch (data.currentConditions.icon) {
      case "clear-day":
        src = clearDay;
        break;
      case "clear-night":
        src = clearNight;
        break;
      case "cloudy":
        src = cloudy;
        break;
      case "fog":
        src = fog;
        break;
      case "hail":
        src = hail;
        break;
      case "partly-cloudy-day":
        src = partlyCloudyDay;
        break;
      case "partly-cloudy-night":
        src = partlyCloudyNight;
        break;
      case "rain-snow-showers-day":
        src = rainSnowShowersDay;
        break;
      case "rain-snow-showers-night":
        src = rainSnowShowersNight;
        break;
      case "rain-snow":
        src = rainSnow;
        break;
      case "rain":
        src = rain;
        break;
      case "showers-day":
        src = showersDay;
        break;
      case "showers-night":
        src = showersNight;
        break;
      case "sleet":
        src = sleet;
        break;
      case "snow-showers-day":
        src = snowShowersDay;
        break;
      case "snow-showers-night":
        src = snowShowersNight;
        break;
      case "snow":
        src = snow;
        break;
      case "thunder-rain":
        src = thunderRain;
        break;
      case "thunder-showers-day":
        src = thunderShowersDay;
        break;
      case "thunder-showers-night":
        src = thunderShowersNight;
        break;
      case "thunder":
        src = thunder;
        break;
      case "wind":
        src = wind;
        break;
    }

    image.src = src;
    icon.appendChild(image);
  };

  const renderError = (message) => {
    const error = document.querySelector("#error-message");
    error.textContent = message;
  };

  const getLocationInputField = () => {
    return document.querySelector("#location-input");
  };

  const getUnitButtons = () => {
    return document.querySelectorAll(".unit-btn");
  };

  const getActiveUnitButton = () => {
    const activeButton = document.getElementsByClassName("unit-btn active");
    return activeButton[0];
  };

  const handleUnitButtons = (button) => {
    const activeUnitButton = getActiveUnitButton();
    activeUnitButton.classList.remove("active");
    button.classList.add("active");
  };

  return {
    render,
    renderLocationInput,
    renderError,
    getLocationInputField,
    getUnitButtons,
    getActiveUnitButton,
    handleUnitButtons,
  };
})();
