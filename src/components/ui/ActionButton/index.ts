import Block, { BlockProps } from '../../../utils/Block';

import template from './ActionButton.hbs';

export interface ActionButtonProps extends BlockProps {
  type?: string;
  label?: string;
  onClick: (...args: any) => void;
  events?: Record<string, (...args: any) => void>;
}

export class ActionButton extends Block<ActionButtonProps> {
  constructor(props: ActionButtonProps) {
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
