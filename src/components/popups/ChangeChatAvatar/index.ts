import Block, { BlockProps } from '../../../utils/Block';
import { connect } from '../../../utils/Store';

import { ChangeChatAvatar as ChangeChatAvatarData } from '../../../api/ChatsAPI';

import ChatsController from '../../../controllers/ChatsController';
import PopupsController from '../../../controllers/PopupsController';

import template from './ChangeChatAvatar.hbs';

export interface ChangeChatAvatarProps extends BlockProps {
  onSubmit: (...args: any) => void;
}

export class ChangeChatAvatar extends Block {
  constructor(props: ChangeChatAvatarProps) {
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
        formDataElem.set('chatId', props.selectedChat);

        ChatsController.changeAvatar(formDataElem as ChangeChatAvatarData).then(
          () => {
            ChatsController.fetchChats();
            PopupsController.delete();
          }
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
  };
})(ChangeChatAvatar as typeof Block);
