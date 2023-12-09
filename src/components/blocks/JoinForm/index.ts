import Block from "../../../utils/Block";

import template from "./JoinForm.hbs";

export class JoinForm extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
