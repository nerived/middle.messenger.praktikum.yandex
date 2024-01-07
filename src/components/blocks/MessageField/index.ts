import Block, { BlockProps } from '../../../utils/Block';
import { connect } from '../../../utils/Store';

import MessagesController from '../../../controllers/MessagesController';

import template from './MessageField.hbs';

export interface JoinFormProps extends BlockProps {
  onSubmit: (...args: any) => void;
}

export class MessageField extends Block {
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

        const formDataElem = new FormData(e.target);
        const formData = [...formDataElem].reduce<Record<string, unknown>>(
          (acc, item) => {
            const [key, value] = item;
            acc[key] = value;
            return acc;
          },
          {}
        );
        e.target.reset();

        MessagesController.sendMessage(
          this.props.selectedChat!,
          formData.message as string
        );
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
    userId: state.user.id,
  };
})(MessageField as typeof Block);
