import Block, { BlockProps } from '../../../utils/Block';

import template from './Button.hbs';

export interface ButtonProps extends BlockProps {
  type?: string;
  label?: string;
  onClick: (...args: any) => void;
  events?: Record<string, (...args: any) => void>;
}

export class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
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
