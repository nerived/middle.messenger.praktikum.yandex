import Block from "../../utils/Block";

import template from "./Popup.hbs";

export class PopupPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default PopupPage;
