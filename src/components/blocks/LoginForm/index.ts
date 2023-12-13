import Block from '../../../utils/Block';

import template from './LoginForm.hbs';

export class LoginForm extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
