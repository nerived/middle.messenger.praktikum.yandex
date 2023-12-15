import Block from '../../../utils/Block';
import { isValidValue, ValidationRules } from '../../../utils/validate';

import { InputProps } from '../Input';
import template from './Field.hbs';

export interface FieldProps extends InputProps {
  mod?: string;
  errorMessage: string;
  label: string;
  onBlur: (...args: any) => void;
}

export class Field extends Block<FieldProps> {
  constructor(props: FieldProps) {
    super({
      ...props,
      onBlur: (e: Event & { target: HTMLFormElement }) => {
        this.validateService(e);
      },
    });

    this.validateService = this.validateService.bind(this);
  }

  validateService(e: Event & { target: HTMLFormElement }) {
    const name = e.target.name as ValidationRules;
    const value = e.target.value;

    const validationMessage = isValidValue(name, value);
    this.setProps({ errorMessage: validationMessage, value });
  }

  render() {
    return this.compile(template, this.props);
  }
}
