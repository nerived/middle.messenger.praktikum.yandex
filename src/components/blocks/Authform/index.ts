import Block from "../../../utils/Block";

import templateBody from "./AuthformBody.hbs";
import templateBox from "./AuthformBox.hbs";
import templateFooter from "./AuthformFooter.hbs";
import templateHead from "./AuthformHead.hbs";

export class AuthformBody extends Block {
  render() {
    return this.compile(templateBody, this.props);
  }
}

export class AuthformBox extends Block {
  render() {
    return this.compile(templateBox, this.props);
  }
}

export class AuthformFooter extends Block {
  render() {
    return this.compile(templateFooter, this.props);
  }
}

export class AuthformHead extends Block {
  render() {
    return this.compile(templateHead, this.props);
  }
}
