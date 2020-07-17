import DecoratorView from "./decorator.js";
import { Dom, Diff } from "presentation-dom";

/**
 * ReactiveView - A reactive model-change managed view using virtual dom for reactive web components
 * @extends DecoratorView
 */
class ReactiveView extends DecoratorView {
  constructor(options = {}) {
    super(options);
  };

  /**
   * Render the template (this.template)
   * @returns this Context of the view
   */
  async render() {
    if (this._el && this.template) {
      await this.undelegateEvents();
      const el = await Dom.selector(this._el);
      if (el) {
        const changed = await el.cloneNode(false);
        changed.innerHTML = this.template;
        // do the virtual dom magic
        const templateMap = await Diff.createDOMMap(changed, false);
        const orgMap = await Diff.createDOMMap(el, false);
        // will use virtual dom to render updates

        // console.debug("templateMap", templateMap);
        // console.debug("orgMap", orgMap);
        // console.debug("el", el);

        await Diff.diff(templateMap, orgMap, el);
        await this.delegateEvents();
      } else {
        console.warn(`${this.name} could not render without an element to render to or a template.  Element defined is "${this._el}."`);
      }
    } else {
      console.warn(`${this.name} could not render without an element to render to or a template."`);
    }
    return this;
  };

  /**
   * Remove the view and all binds
   */
  async remove() {
    /* off to unbind the events */
    await this.undelegateEvents();
    await this.off();
    await this.stopListening();
    if (this._el) {
      await Dom.empty(this._el);
    }
    return this;
  };
};

export default ReactiveView;
