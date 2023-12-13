import Block from '../../../utils/Block';

import template from './Input.hbs';

export class Input extends Block {
  constructor(props: Record<string | symbol, unknown>) {
    super({
      ...props,
      events: {
        change: props.onChange,
        blur: props.onBlur,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
