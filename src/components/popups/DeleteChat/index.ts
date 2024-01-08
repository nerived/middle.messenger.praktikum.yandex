import Block, { BlockProps } from '../../../utils/Block';
import { connect } from '../../../utils/Store';

import ChatsController from '../../../controllers/ChatsController';
import PopupsController from '../../../controllers/PopupsController';

import template from './DeleteChat.hbs';

export interface DeleteChatProps extends BlockProps {
  onDeleteChat: () => void;
}

export class DeleteChat extends Block {
  constructor(props: DeleteChatProps) {
    super({
      ...props,
      onDeleteChat: () => {
        ChatsController.delete(props.selectedChat);
        ChatsController.resetSelectChat();
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
})(DeleteChat as typeof Block);
