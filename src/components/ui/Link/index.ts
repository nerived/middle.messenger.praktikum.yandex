import Block, { BlockProps } from '../../../utils/Block.ts';

import template from './Link.hbs';

export interface LinkProps extends BlockProps {
  href: string;
  label: string;
  class?: string;
  onClick: (...args: any) => void;
  events?: Record<string, (...args: any) => void>;
}

export class Link extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
