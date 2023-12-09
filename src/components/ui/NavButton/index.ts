import Block from "../../../utils/Block";
import { render, ROUTES } from "../../../utils/render";

import template from "./NavButton.hbs";

export interface NavButtonProps {
  events: {
    click: (e: Event) => void;
  };
}

export class NavButton extends Block {
  constructor(props: NavButtonProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          if (!(e.target instanceof HTMLButtonElement)) {
            return;
          }
          if (e.target.dataset.page) {
            render(e.target.dataset.page as keyof typeof ROUTES);
          }
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
