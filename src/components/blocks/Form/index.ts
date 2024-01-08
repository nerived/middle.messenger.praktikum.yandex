import Block, { BlockProps } from '../../../utils/Block';

import template from './Form.hbs';

export class Form extends Block {
  constructor(props: BlockProps) {
    super({
      ...props,
      events: {
        submit: props.onSubmit,
      },
    });
  }

  render() {
    this.dispatchComponentDidMount();
    return this.compile(template, this.props);
  }
}
