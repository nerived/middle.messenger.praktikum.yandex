import Block from "../../../utils/Block";

import template from "./InputFile.hbs";

export interface InputFileProps {
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

export class InputFile extends Block {
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
