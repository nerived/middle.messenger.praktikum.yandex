import Block from "../../../utils/Block";

import template from "./Nav.hbs";

export class Nav extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
