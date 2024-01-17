import Block, { BlockProps } from '../../../utils/Block';
import { connect } from '../../../utils/Store';
import PopupsController from '../../../controllers/PopupsController';
import { ChatInfo } from '../../../api/ChatsAPI';

import template from './Messenger.hbs';

export interface MessengerProps extends BlockProps {
  onAddUser: () => void;
  onDeleteUser: () => void;
  onChageChatAvatar: () => void;
}

export class Messenger extends Block {
  constructor(props: MessengerProps) {
    super({
      ...props,
      onAddUser: () => {
        PopupsController.add('ADD_USER_TO_CHAT');
      },
      onDeleteUser: () => {
        PopupsController.add('DELETE_USER_FROM_CHAT');
      },
      onChageChatAvatar: () => {
        PopupsController.add('CHANGE_CHAT_AVATAR');
      },
      onDeleteChat: () => {
        PopupsController.add('DELETE_CHAT');
      },
    });
  }

  protected componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default connect((state) => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
      chat: {},
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    chat: state.chats.find((chat: ChatInfo) => chat.id === state.selectedChat),
    userId: state.user.id,
  };
})(Messenger as typeof Block);
