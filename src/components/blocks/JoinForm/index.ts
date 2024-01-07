import Block, { BlockProps } from '../../../utils/Block';

import AuthController from '../../../controllers/AuthController';
import { SignupData } from '../../../api/AuthAPI';

import template from './JoinForm.hbs';

export interface JoinFormProps extends BlockProps {
  onSubmit: (...args: any) => void;
}

export class JoinForm extends Block {
  constructor(props: JoinFormProps) {
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
          // @ts-ignore
          acc[key] = value;
          return acc;
        }, {} as SignupData);

        AuthController.signup(formData);
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
