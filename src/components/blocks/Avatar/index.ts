import Block, { BlockProps } from '../../../utils/Block';

import template from './Avatar.hbs';

export interface AvatarProps extends BlockProps {
  isEditAlloved?: boolean;
  name: string;
}

export class Avatar extends Block<AvatarProps> {
  render() {
    return this.compile(template, this.props);
  }
}
