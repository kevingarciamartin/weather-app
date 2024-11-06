import { api } from "./API";

export const ui = (() => {
  const render = (data) => {
    renderLocationInput();
    renderError("");
    renderLocation(data);
    renderTemperature(data);
    renderDescription(data);
  };

  const renderLocationInput = () => {
    const locationInput = document.querySelector("form input");
    locationInput.value = "";
  };

  const renderLocation = (data) => {
    const locationContainer = document.querySelector("#location");
    if (data) {
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
    }
  };

  const renderTemperature = (data) => {
    const temperatureContainer = document.querySelector("#temperature");
    if (data) {
      const unitGroup = api.getUnitGroup();
      const unit = unitGroup === "metric" ? "°C" : "°F";
      temperatureContainer.innerHTML = `
        <h2>${data.currentConditions.temp}${unit}</h2>
        <p>Feels like: ${data.currentConditions.feelslike}${unit}</p>
      `;
    }
  };

  const renderDescription = (data) => {
    const descriptionContainer = document.querySelector("#description");
    if (data) {
      descriptionContainer.innerHTML = `
        <p>${data.currentConditions.conditions}</p>
      `;
    }
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
