import Block from '../../utils/Block';

import template from './EditProfile.hbs';

export class EditProfilePage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default EditProfilePage;
