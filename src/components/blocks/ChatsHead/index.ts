import Block, { BlockProps } from '../../../utils/Block';

import PopupsController from '../../../controllers/PopupsController';

import template from './ChatsHead.hbs';

export interface ChatsHeadProps extends BlockProps {
  onCreateChat: (...args: any) => void;
}

export class ChatsHead extends Block {
  constructor(props: ChatsHeadProps) {
    super({
      ...props,
      onCreateChat: (e: any) => {
        e.preventDefault();
        PopupsController.add('CREATE_CHAT');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
