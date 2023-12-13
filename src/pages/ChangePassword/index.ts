import Block from '../../utils/Block';

import template from './ChangePassword.hbs';

export class ChangePasswordPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default ChangePasswordPage;
