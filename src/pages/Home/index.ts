import Block from "../../utils/Block";
import { render } from "../../utils/render";

import template from "./Home.hbs";

export class HomePage extends Block {
  constructor() {
    super({
      goToLogin: () => {
        render("login");
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
export default HomePage;
