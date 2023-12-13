import Block from '../../../utils/Block';

import template from './Avatar.hbs';

export class Avatar extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
