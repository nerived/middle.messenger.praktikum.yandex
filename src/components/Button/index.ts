// import Handlebars from "handlebars";
import Block from "../../utils/Block";

import template from "./Button.hbs";

// import clientTemplate from "./template";

interface ButtonProps {
  label: string;
  type?: "submit" | "button";
  onClick?: () => void;
  events: {
    click: () => void;
  };
}

export class Button extends Block {
  // static compiledTemplate = Handlebars.compile(clientTemplate);

  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
    // return this.compile(Button.compiledTemplate, this.props);
  }
}
