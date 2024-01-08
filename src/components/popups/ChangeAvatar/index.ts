import Block, { BlockProps } from '../../../utils/Block';

import UserController from '../../../controllers/UserController';
import AuthController from '../../../controllers/AuthController';
import PopupsController from '../../../controllers/PopupsController';

import template from './ChangeAvatar.hbs';

export interface ChangeAvatarProps extends BlockProps {
  onSubmit: (...args: any) => void;
}

export class ChangeAvatar extends Block {
  constructor(props: ChangeAvatarProps) {
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

        UserController.changeAvatar(formDataElem).then(() => {
          AuthController.fetchUser();
          PopupsController.delete();
        });
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
