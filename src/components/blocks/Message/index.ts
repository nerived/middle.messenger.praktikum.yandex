import Block from '../../../utils/Block';

import { connect } from '../../../utils/Store';

import template from './Message.hbs';

interface MessageProps {
  content: string;
  isMine: boolean;
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    const isSelf = this.props.message.user_id === this.props.userId;

    return this.compile(template, { ...this.props, isSelf });
  }
}

export default connect((state) => {
  return {
    userId: state.user.id,
  };
})(Message as typeof Block);
