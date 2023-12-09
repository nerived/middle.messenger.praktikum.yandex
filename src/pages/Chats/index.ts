import Block from "../../utils/Block";

import template from "./Chats.hbs";

export class ChatsPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default ChatsPage;
