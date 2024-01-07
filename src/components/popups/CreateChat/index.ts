import Block, { BlockProps } from '../../../utils/Block';

import ChatsController from '../../../controllers/ChatsController';
import PopupsController from '../../../controllers/PopupsController';

import template from './CreateChat.hbs';

export interface CreateChatProps extends BlockProps {
  isEditAlloved?: boolean;
  name: string;
}

export class CreateChat extends Block {
  constructor(props: Record<string | symbol, unknown>) {
    super({
      ...props,
      onSubmit: (
        e: Event & { target: HTMLElement; submitter: HTMLElement }
      ) => {
        e.preventDefault();

        if (!(e.target instanceof HTMLFormElement)) {
          return;
        }

        const formDataElem = new FormData(e.target);
        const formData = [...formDataElem].reduce<Record<string, unknown>>(
          (acc, item) => {
            const [key, value] = item;
            acc[key] = value;
            return acc;
          },
          {}
        );

        ChatsController.create(formData.title as string).then(() => {
          PopupsController.delete();
        });
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
