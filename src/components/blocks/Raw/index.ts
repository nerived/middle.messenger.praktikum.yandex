import Block from "../../../utils/Block";

import template from "./Raw.hbs";

export class Raw extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
