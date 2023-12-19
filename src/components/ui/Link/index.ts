import Block, { BlockProps } from '../../../utils/Block';

import template from './Link.hbs';

export interface LinkProps extends BlockProps {
  href: string;
  label: string;
  class?: string;
}

export class Link extends Block<LinkProps> {
  render() {
    return this.compile(template, this.props);
  }
}
