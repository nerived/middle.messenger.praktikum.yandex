import Block from '../../../utils/Block';

import template from './ChatItem.hbs';

export class ChatItem extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
