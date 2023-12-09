import Block from "../../utils/Block";

import template from "./Profile.hbs";

export class ProfilePage extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
export default ProfilePage;
