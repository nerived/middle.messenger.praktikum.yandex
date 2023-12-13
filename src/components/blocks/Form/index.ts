import Block from '../../../utils/Block';

import template from './Form.hbs';

export class Form extends Block {
  constructor(props: Record<string | symbol, unknown>) {
    super({
      ...props,
      events: {
        submit: (
          e: Event & { target: HTMLElement; submitter: HTMLElement }
        ) => {
          e.preventDefault();

          if (!(e.target instanceof HTMLFormElement)) {
            return;
          }

          [...e.target.elements].forEach((element) => {
            if (element.tagName === 'INPUT') {
              let event = new Event('blur');
              element.dispatchEvent(event);
            }
          });

          const formDataElem = new FormData(e.target);
          console.log(
            'form data',
            [...formDataElem].reduce<Record<string, unknown>>((acc, item) => {
              const [key, value] = item;
              acc[key] = value;
              return acc;
            }, {})
          );
        },
      },
    });
  }

  render() {
    this.dispatchComponentDidMount();
    return this.compile(template, this.props);
  }
}
