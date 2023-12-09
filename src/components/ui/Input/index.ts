import Block from "../../../utils/Block";

import template from "./Input.hbs";

export interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  readonly?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  events: {
    change: (e: any) => void;
    blur: (e: any) => void;
  };
}

export class Input extends Block {
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
