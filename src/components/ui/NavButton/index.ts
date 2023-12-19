import Block, { BlockProps } from '../../../utils/Block';
import { render, ROUTES } from '../../../utils/render';

import template from './NavButton.hbs';

export interface NavButtonProps extends BlockProps {
  label: string;
  page: string;
  class?: string;
}

export class NavButton extends Block<NavButtonProps> {
  constructor(props: NavButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLElement | HTMLButtonElement;
          let pageName = '';

          if (!(target instanceof HTMLButtonElement)) {
            const parentElement = target.closest(
              '.navbtn'
            ) as HTMLButtonElement;

            if (parentElement) {
              pageName = parentElement.dataset.page || '';
            }
          } else {
            if (target.dataset.page) {
              pageName = target.dataset.page;
            }
          }

          render(pageName as keyof typeof ROUTES);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
