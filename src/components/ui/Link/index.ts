import Block from "../../../utils/Block";

import template from "./Link.hbs";

export class Link extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
