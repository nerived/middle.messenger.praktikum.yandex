import Block, { BlockProps } from '../../utils/Block';
import { connect } from '../../utils/Store';

import AuthController from '../../controllers/AuthController';

import template from './Profile.hbs';

export interface ProfilePageProps extends BlockProps {
  onLogout: () => void;
}

export class ProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    AuthController.fetchUser();
    super({
      ...props,
      onLogout: () => {
        AuthController.logout();
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
export default connect((state) => state.user)(ProfilePage as typeof Block);
