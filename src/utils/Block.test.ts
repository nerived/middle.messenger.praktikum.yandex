import { expect } from 'chai';
import Handlebars from 'handlebars';

import BlockOrigin from './Block.ts';

describe('Block', () => {
  const templateString = '<button>{{label}}</button>';

  class TestComponent extends BlockOrigin<Record<string, any>> {
    render() {
      return this.compile(Handlebars.compile(templateString), this.props);
    }
  }

  it('Block should return element by call getContent', () => {
    const testComponent = new TestComponent({});
    expect(testComponent.getContent()).to.be.instanceof(
      window.HTMLButtonElement
    );
  });

  it('Block should render props value', () => {
    const testLabel = 'testLabel';
    const testComponent = new TestComponent({ label: testLabel });

    expect(testComponent.element?.innerHTML).to.eq(testLabel);
  });

  it('Block should hide block', () => {
    const testComponent = new TestComponent({});
    testComponent.hide();
    const el = testComponent.getContent();
    const result = el?.style.display;

    expect(result).to.be.equal('none');
  });

  it('Block should show block', () => {
    const testComponent = new TestComponent({});
    testComponent.show();
    const el = testComponent.getContent();
    const result = el?.style.display;

    expect(result).to.be.equal('block');
  });
});
