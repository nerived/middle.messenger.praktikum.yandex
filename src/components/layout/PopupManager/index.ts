import Block, { BlockProps } from '../../../utils/Block';
import { connect } from '../../../utils/Store';
import PopupsController from '../../../controllers/PopupsController';

import template from './PopupManager.hbs';

export interface PopupManagerProps extends BlockProps {
  title?: string;
  descr?: string;
}

export class PopupManager extends Block<PopupManagerProps> {
  constructor(props: PopupManagerProps) {
    super({
      ...props,
      onClosePopup: () => {
        PopupsController.delete();
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

export default connect((state) => ({
  popupId: state.popupId,
}))(PopupManager as typeof Block);
