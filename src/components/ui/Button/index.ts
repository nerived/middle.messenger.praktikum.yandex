import Block from '../../../utils/Block';

import template from './Button.hbs';

export class Button extends Block {
  constructor(props: Record<string | symbol, unknown>) {
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
