import "./styles/reset.css";
import "./styles/style.css";
import { ui } from "./modules/UI";
import { controller } from "./modules/Controller";

const input = ui.getLocationInputField();
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    controller.handleLocationInput(input.value);
  }
});
