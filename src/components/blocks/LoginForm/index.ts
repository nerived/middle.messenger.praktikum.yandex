import Block, { BlockProps } from '../../../utils/Block';

import AuthController from '../../../controllers/AuthController';
import { SignupData } from '../../../api/AuthAPI';

import template from './LoginForm.hbs';

export interface LoginFormProps extends BlockProps {
  onSubmit: (...args: any) => void;
}

export class LoginForm extends Block {
  constructor(props: LoginFormProps) {
    super({
      ...props,
      onSubmit: (
        e: Event & { target: HTMLElement; submitter: HTMLElement }
      ) => {
        e.preventDefault();

        if (!(e.target instanceof HTMLFormElement)) {
          return;
        }

        [...e.target.elements].forEach((element) => {
          if (element.tagName === 'INPUT') {
            let event = new Event('blur');
            element.dispatchEvent(event);
          }
        });

        const formDataElem = new FormData(e.target);
        const formData = [...formDataElem].reduce((acc, item) => {
          const [key, value] = item;
          // @ts-expect-error
          acc[key] = value;
          return acc;
        }, {} as SignupData);

        AuthController.signin(formData);
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
