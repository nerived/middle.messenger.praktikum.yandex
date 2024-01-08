import Block, { BlockProps } from '../../../utils/Block';
import { connect } from '../../../utils/Store';

import ChatsController from '../../../controllers/ChatsController';
import PopupsController from '../../../controllers/PopupsController';

import template from './DeleteUserFromChat.hbs';

export interface DeleteUserFromChatProps extends BlockProps {
  onSubmit: (...args: any) => void;
}

export class DeleteUserFromChat extends Block {
  constructor(props: DeleteUserFromChatProps) {
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

        ChatsController.deleteUsers(
          props.selectedChat,
          formData.login as number
        );
        PopupsController.delete();
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default connect((state) => {
  return {
    selectedChat: state.selectedChat,
  };
})(DeleteUserFromChat as typeof Block);
