import Block from "../../../utils/Block";

import template from "./FieldProfile.hbs";

import { InputProps } from "../Input";

interface FieldProfileProps extends InputProps {
  errorMessage?: string;
  label?: string;
}

export class FieldProfile extends Block {
  constructor(props: FieldProfileProps) {
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
