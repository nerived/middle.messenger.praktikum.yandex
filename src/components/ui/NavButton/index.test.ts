import { expect } from 'chai';
import sinon from 'sinon';

import { NavButton } from './index.ts';

import Router from '../../../utils/Router.ts';

describe('NavButton', () => {
  it('should render', () => {
    new NavButton({ route: '/', label: 'GoHome' });
  });

  it('element should return button', () => {
    const navBtn = new NavButton({ route: '/', label: 'GoHome' });
    const element = navBtn.element;

    expect(element).to.be.instanceof(window.HTMLButtonElement);
  });

  it('should render label', () => {
    const label = 'GoHome';
    const navBtn = new NavButton({ route: '/', label });
    const element = navBtn.element as HTMLButtonElement;

    expect(element.innerHTML).to.eq(label);
  });

  it('should go to passed route on click', () => {
    const navBtn = new NavButton({ route: '/', label: 'GoHome' });

    const spy = sinon.spy(Router, 'go');
    const element = navBtn.element as HTMLButtonElement;

    element.click();

    expect(spy.calledOnce).to.eq(true);
  });
});
