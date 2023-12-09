import Block from "../../utils/Block";
import { render } from "../../utils/render";

import template from "./Login.hbs";

export class LoginPage extends Block {
  constructor() {
    super({
      buttons: [
        {
          label: "Home",
          onClick: () => {
            render("home");
          },
        },
        {
          label: "Button 2",
          onClick: () => {
            console.log("Clicked");
          },
        },
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
