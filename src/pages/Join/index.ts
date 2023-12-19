import Block from '../../utils/Block';

import template from './Join.hbs';

export class JoinPage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default JoinPage;
