import Block from '../../utils/Block';
import { connect } from '../../utils/Store';

import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';

import template from './EditProfile.hbs';

export class EditProfilePage extends Block {
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
        const formData = [...formDataElem].reduce<Record<string, unknown>>(
          (acc, item) => {
            const [key, value] = item;
            acc[key] = value;
            return acc;
          },
          {}
        );
        // @ts-expect-error
        UserController.changeUser(formData).then(() => {
          AuthController.fetchUser();
        });
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
export default connect((state) => state.user)(EditProfilePage as typeof Block);
