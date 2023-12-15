import Block, { BlockProps } from '../../../utils/Block';

import template from './Input.hbs';

export interface InputProps extends BlockProps {
  placeholder?: string;
  value: string;
  name: string;
  type?: string;
  readonly?: string;
  events?: Record<string, (...args: any) => void>;
}

export class Input extends Block<InputProps> {
  constructor(props: InputProps) {
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
