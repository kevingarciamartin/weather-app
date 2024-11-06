import "./styles/reset.css";
import "./styles/style.css";
import { api } from "./modules/API";
import { ui } from "./modules/UI";
import { controller } from "./modules/Controller";

const input = ui.getLocationInputField();
const unitButtons = ui.getUnitButtons();

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    controller.handleLocationInput(input.value);
  }
});

unitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ui.handleUnitButtons(button);
    api.setUnitGroup(button.id);
  });
});
