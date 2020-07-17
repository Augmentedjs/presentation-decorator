import DecoratorView from "./decorator.js";

/**
 * A DecoratorView that is designed to use templates and clean up when removed.
 * @extends DecoratorView
 */
class DirectiveView extends DecoratorView {
  constructor(options = {}) {
    super(options);
  };

  render() {
    return super.render();
  };

  remove() {
    this.removeTemplate(this.el, true);
    return super.remove();
  };
};

export default DirectiveView;
