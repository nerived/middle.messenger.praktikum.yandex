import Block from "../../utils/Block";

import template from "./Card.hbs";

export default class Card extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
