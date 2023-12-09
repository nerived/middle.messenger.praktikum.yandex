import Block from "../../../utils/Block";

import templateField from "./ChatsField.hbs";
import templateHead from "./ChatsHead.hbs";
import templateLeft from "./ChatsLeft.hbs";
import templateRight from "./ChatsRight.hbs";
import templateBox from "./ChatsBox.hbs";

export class ChatsBox extends Block {
  render() {
    return this.compile(templateBox, this.props);
  }
}

export class ChatsLeft extends Block {
  render() {
    return this.compile(templateLeft, this.props);
  }
}

export class ChatsRight extends Block {
  render() {
    return this.compile(templateRight, this.props);
  }
}

export class ChatsField extends Block {
  render() {
    return this.compile(templateField, this.props);
  }
}

export class ChatsHead extends Block {
  render() {
    return this.compile(templateHead, this.props);
  }
}
