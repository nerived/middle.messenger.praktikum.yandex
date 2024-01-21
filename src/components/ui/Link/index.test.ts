import { expect } from 'chai';
import sinon from 'sinon';

import { Link } from './index.ts';

const onClick = sinon.fake();

describe('Link', () => {
  it('should render', () => {
    new Link({ href: '/', onClick, label: 'link' });
  });

  it('element should return a', () => {
    const link = new Link({ href: '/', onClick, label: 'link' });
    const element = link.element;

    expect(element).to.be.instanceof(window.HTMLAnchorElement);
  });

  it('should render label', () => {
    const label = 'link';
    const navBtn = new Link({ href: '/', onClick, label: 'link' });
    const element = navBtn.element as HTMLAnchorElement;

    expect(element.innerHTML).to.eq(label);
  });

  it('should call onClick when click', () => {
    const link = new Link({ href: '/', onClick, label: 'link' });
    const element = link.element;
    element?.click();

    expect(onClick.calledOnce).to.be.eq(true);
  });
});
