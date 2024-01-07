import Block from '../../utils/Block';
import { connect } from '../../utils/Store';

import { UserChangePassword } from '../../api/UserAPI';

import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';

import template from './ChangePassword.hbs';

export class ChangePasswordPage extends Block {
  constructor(props: Record<string | symbol, unknown>) {
    AuthController.fetchUser();
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
          if (key === 'newPasswordCheck') {
            return acc;
          }
          // @ts-ignore
          acc[key] = value;
          return acc;
        }, {} as UserChangePassword);

        UserController.changePassword(formData as UserChangePassword).then(
          () => {
            AuthController.fetchUser();
          }
        );
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default connect((state) => state.user)(
  ChangePasswordPage as typeof Block
);
