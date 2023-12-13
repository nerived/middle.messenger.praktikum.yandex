import Block from '../../../utils/Block';

import templateBox from './PopupBox.hbs';
import templateContent from './PopupContent.hbs';

export class PopupBox extends Block {
  render() {
    return this.compile(templateBox, this.props);
  }
}

export class PopupContent extends Block {
  render() {
    return this.compile(templateContent, this.props);
  }
}
