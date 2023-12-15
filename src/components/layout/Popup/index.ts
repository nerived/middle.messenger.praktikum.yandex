import Block, { BlockProps } from '../../../utils/Block';

import templateBox from './PopupBox.hbs';
import templateContent from './PopupContent.hbs';

export interface PopupBoxProps extends BlockProps {
  title?: string;
  descr?: string;
}

export class PopupBox extends Block<PopupBoxProps> {
  render() {
    return this.compile(templateBox, this.props);
  }
}

export class PopupContent extends Block {
  render() {
    return this.compile(templateContent, this.props);
  }
}
