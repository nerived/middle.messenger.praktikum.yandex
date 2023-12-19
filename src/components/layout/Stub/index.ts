import Block, { BlockProps } from '../../../utils/Block';

import template from './Stub.hbs';

export interface StubProps extends BlockProps {
  title?: string;
  descr?: string;
  btnLabel?: string;
  page?: string;
}

export class Stub extends Block<StubProps> {
  render() {
    return this.compile(template, this.props);
  }
}
