import Block from '../../../utils/Block';

import templateBox from './ProfileBox.hbs';
import templateLeft from './ProfileLeft.hbs';
import templateRight from './ProfileRight.hbs';

export class ProfileBox extends Block {
  render() {
    return this.compile(templateBox, this.props);
  }
}

export class ProfileLeft extends Block {
  render() {
    return this.compile(templateLeft, this.props);
  }
}

export class ProfileRight extends Block {
  render() {
    return this.compile(templateRight, this.props);
  }
}
