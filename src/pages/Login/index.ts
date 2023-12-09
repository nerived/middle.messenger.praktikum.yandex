import Block from "../../utils/Block";

import template from "./Login.hbs";

export class LoginPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
