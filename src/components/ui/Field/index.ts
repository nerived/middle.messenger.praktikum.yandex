import Block from "../../../utils/Block";

import template from "./Field.hbs";

import { InputProps } from "../Input";

interface FieldProps extends InputProps {
  errorMessage?: string;
  label?: string;
}

export class Field extends Block {
  constructor(props: FieldProps) {
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
