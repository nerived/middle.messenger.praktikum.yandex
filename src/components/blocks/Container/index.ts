import Block from '../../../utils/Block';

import template from './Container.hbs';

export class Container extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
