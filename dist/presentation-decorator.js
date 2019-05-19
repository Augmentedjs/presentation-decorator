!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("next-core-utilities"),require("presentation-mediator"),require("presentation-models"),require("presentation-dom"),require("presentation-widget")):"function"==typeof define&&define.amd?define("presentation-decorator",["next-core-utilities","presentation-mediator","presentation-models","presentation-dom","presentation-widget"],t):"object"==typeof exports?exports["presentation-decorator"]=t(require("next-core-utilities"),require("presentation-mediator"),require("presentation-models"),require("presentation-dom"),require("presentation-widget")):e["presentation-decorator"]=t(e["next-core-utilities"],e["presentation-mediator"],e["presentation-models"],e["presentation-dom"],e["presentation-widget"])}(this,function(e,t,n,i,r){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),r=n(4),o=n(5),s=l(n(6));l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}const u={CLICK:"data-click",FUNCTION:"data-function",STYLE:"data-style",APPEND_TEMPLATE:"data-append-template",PREPEND_TEMPLATE:"data-prepend-template"};t.default=class extends r.Colleague{constructor(e){super(e),e.events&&(e.customEvents=e.events),e.customEvents?this.customEvents=e.customEvents:this.customEvents={}}events(){const e=this.customEvents?this.customEvents:{};return this.name&&(e[`change input[${this.bindingAttribute()}]`]="_changed",e[`change textarea[${this.bindingAttribute()}]`]="_changed",e[`change select[${this.bindingAttribute()}]`]="_changed",e[`click *[${this.bindingAttribute()}][${u.CLICK}]`]="_click"),e}_changed(e){if(e){let t=e.currentTarget.getAttribute(this.bindingAttribute()),n=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(n=!!e.currentTarget.checked),this.model.set(t||e.currentTarget.name,n),this._func(e)}}_click(e){if(e){let t=e.currentTarget.getAttribute(u.CLICK);t&&this[t]&&this._executeFunctionByName(t,this,e),this._func(e)}}_func(e){if(e){let t=e.currentTarget.getAttribute(u.FUNCTION);t&&this[t]&&this._executeFunctionByName(t,this,e)}}initialize(e){this.init(e),this.model||(this.model=new o.Model)}remove(){return this.undelegateEvents(),this.off(),this.stopListening(),this}_executeFunctionByName(e,t,...n){const i=e.split("."),r=i.pop();if(i&&r){let e=0;const o=i.length;for(e=0;e<o;e++)t=t[i[e]];return t[r].apply(t,n)}return null}bindingAttribute(){return"data-"+this.name}injectTemplate(e,t){if(t||(t=this.el),(0,i.isString)(t)){const e=document.querySelector(t);if(!e)return;t=e}if((0,i.isString)(e)){const n=t.innerHTML;t.innerHTML=`${n}${e}`}else e.nodeType&&e.nodeName&&e.nodeType>0&&"template"!==e.nodeName&&"TEMPLATE"!==e.nodeName?t.appendChild(e):(e instanceof DocumentFragment||"template"===e.nodeName||"TEMPLATE"===e.nodeName)&&s.default.injectTemplate(e,t);this.delegateEvents()}removeTemplate(e,t){if(e){let n;if(n=(0,i.isString)(e)?s.default.selector(e):e){for(;n.firstChild;)n.removeChild(n.firstChild);if(!t){const e=n.parentNode;e&&e.removeChild(n)}this.delegateEvents()}else console.warn(`template not removed from ${e}`)}}boundElement(e){if(this.el&&e){let t=this.el;if((0,i.isString)(this.el)&&(t=document.querySelector(this.el)),t)return t.querySelector("["+this.bindingAttribute()+"="+e+"]")}return null}syncBoundElement(e){if(e){let t=new UIEvent("change",{view:window,bubbles:!0,cancelable:!0}),n=this.boundElement(e);n&&n.dispatchEvent(t)}}syncAllBoundElements(){const e=this.bindingAttribute();if(this.el&&e){const t=document.querySelectorAll(`${this.el}[${e}]`);if(t&&t.length>0){let e=0,n=t.length,i=new UIEvent("change",{view:window,bubbles:!0,cancelable:!0});for(e=0;e<n;e++)t[e].dispatchEvent(i)}}}addClass(e,t){const n=this.boundElement(e);n&&n.classList.add(t)}removeClass(e,t){const n=this.boundElement(e);n&&n.classList.remove(t)}bindModelChange(e){this.model||(this.model=new o.Model),this.model.on("change",e,this)}syncModelChange(e){this.model||(this.model=new o.Model),e?this.model.on("change:"+e,this._syncData.bind(this,e),this):this.model.on("change",this._syncAllData.bind(this,e),this)}_syncData(e){let t=this.boundElement(e);if(t){let n,i,r=this.model.get(e),o=t.getAttribute(u.STYLE),l=t.getAttribute(u.PREPEND_TEMPLATE),a=t.getAttribute(u.APPEND_TEMPLATE);if(l&&(n=document.createElement("div"),i=s.default.selector("#"+l),t.appendChild(n),this.injectTemplate(i,n)),o){let e;"list"===o||"unordered-list"===o?(e=Presentation.Widget.List(null,r,!1),s.default.empty(t),t.appendChild(e)):"ordered-list"===o?(e=Presentation.Widget.List(null,r,!0),s.default.empty(t),t.appendChild(e)):"description-list"===o&&(e=Presentation.Widget.DescriptionList(null,r),s.default.empty(t),t.appendChild(e))}else s.default.setValue(t,r||"");a&&(n=document.createElement("div"),i=s.default.selector("#"+a),t.appendChild(n),this.injectTemplate(i,n))}}_syncAllData(){const e=this.model.attributes;if(e){let t=0;const n=Object.keys(e),i=n.length;for(t=0;t<i;t++)this._syncData(n[t])}}unbindModelChange(e){this.model.unBind("change",e,this)}unbindModelSync(e){this.model.unBind("change:"+e,this._syncData,this)}}},function(e,t,n){"use strict";var i=o(n(2)),r=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}e.exports.DecoratorView=r.default,e.exports.DirectiveView=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(0),o=(i=r)&&i.__esModule?i:{default:i};t.default=class extends o.default{constructor(e){super(e)}render(){return super.render()}remove(){return this.removeTemplate(this.el,!0),super.remove()}}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=i},function(e,t){e.exports=r}])});
//# sourceMappingURL=presentation-decorator.js.map