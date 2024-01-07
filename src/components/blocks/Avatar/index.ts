import Block, { BlockProps } from '../../../utils/Block';

import PopupsController from '../../../controllers/PopupsController';

import template from './Avatar.hbs';

export interface AvatarProps extends BlockProps {
  isEditAlloved?: boolean;
  name: string;
  onChangeAvatar: () => void;
}

export class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super({
      ...props,
      onChangeAvatar: () => {
        PopupsController.add('CHANGE_USER_AVATAR');
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
