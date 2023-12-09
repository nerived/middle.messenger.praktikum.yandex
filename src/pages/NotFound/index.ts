import Block from "../../utils/Block";

import template from "./NotFound.hbs";

export class NotFoundPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default NotFoundPage;
