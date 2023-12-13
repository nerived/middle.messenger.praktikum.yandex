import Block from '../../../utils/Block';

import template from './Stub.hbs';

export class Stub extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
