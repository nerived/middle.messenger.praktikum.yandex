import Block from '../../../utils/Block';
import { isValidValue, ValidationRules } from '../../../utils/validate';

import template from './Field.hbs';

export class Field extends Block {
  constructor(props: Record<string | symbol, unknown>) {
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

    const isValid = isValidValue(name, value);

    if (!isValid) {
      this.setProps({
        errorMessage: value ? `invalid ${name} field` : 'Is required',
        value,
      });
    } else {
      this.setProps({ errorMessage: '', value });
    }
    return isValid;
  }

  render() {
    return this.compile(template, this.props);
  }
}
