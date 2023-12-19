import Block from '../../../utils/Block';

import { InputProps } from '../Input';

import template from './InputFile.hbs';

export interface InputFileProps extends InputProps {
  label: string;
  onChange: (...args: any) => void;
  onBlur: (...args: any) => void;
}

export class InputFile extends Block<InputFileProps> {
  constructor(props: InputFileProps) {
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
