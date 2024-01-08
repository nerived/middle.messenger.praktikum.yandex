import Block from '../../../utils/Block';
import { connect } from '../../../utils/Store';

import { ChatInfo } from '../../../api/ChatsAPI';

import ChatsController from '../../../controllers/ChatsController';

import template from './ChatsList.hbs';

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

export class ChatsList extends Block {
  constructor(props: ChatsListProps) {
    super({ ...props });
  }

  protected init() {
    ChatsController.fetchChats().finally(() => {
      this.setProps({
        isLoaded: true,
      });
    });
  }

  protected componentDidUpdate(): boolean {
    return true;
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default connect((state) => ({
  chats: [...(state.chats || [])],
  selectedChat: state.selectedChat,
}))(ChatsList as typeof Block);
