import { registerComponent } from "./utils/registerComponent";
import { render } from "./utils/render";

import { Button } from "./components/Button";
import Card from "./components/Card";

registerComponent("Button", Button);
registerComponent("Card", Card);

window.addEventListener("DOMContentLoaded", () => {
  render("home");
});
