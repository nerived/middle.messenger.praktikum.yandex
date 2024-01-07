import Block, { BlockProps } from '../../../utils/Block';
import { ChatInfo } from '../../../api/ChatsAPI';
import ChatsController from '../../../controllers/ChatsController';

import template from './ChatItem.hbs';

export interface ChatItemProps extends BlockProps {
  info: ChatInfo;
  onClick: (...args: any) => void;
}

export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: () => {
          ChatsController.selectChat(props.info.id);
        },
      },
    });
  }

  render() {
    const isSelected = this.props.selectedChat === this.props.info.id;

    return this.compile(template, { ...this.props, isSelected });
  }
}
