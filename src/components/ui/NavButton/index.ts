import Block, { BlockProps } from '../../../utils/Block.ts';
import Router from '../../../utils/Router.ts';

import template from './NavButton.hbs';

export interface NavButtonProps extends BlockProps {
  label: string;
  route: string;
  class?: string;
}

export class NavButton extends Block<NavButtonProps> {
  constructor(props: NavButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          const target = e.target as HTMLElement | HTMLButtonElement;
          let routeName = '';

          if (!(target.tagName !== 'BUTTON')) {
            const parentElement = target.closest(
              '.navbtn'
            ) as HTMLButtonElement;

            if (parentElement) {
              routeName = parentElement.dataset.route || '';
            }
          } else {
            if (target.dataset.route) {
              routeName = target.dataset.route;
            }
          }
          Router.go(routeName);
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
