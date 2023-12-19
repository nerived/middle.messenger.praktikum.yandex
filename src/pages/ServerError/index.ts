import Block from '../../utils/Block';

import template from './ServerError.hbs';

export class ServerErrorPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default ServerErrorPage;
