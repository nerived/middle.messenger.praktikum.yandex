import Block from '../../../utils/Block';

import template from './UserDetails.hbs';

export class UserDetails extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
