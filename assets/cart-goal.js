/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7345:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["MinimogSettings"];


class I18N {
  constructor() {
    var _this = this;

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "shop_locale", MinimogSettings.shop_locale?.current || 'en');

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "locales", {
      'default': {
        date_format: 'MM/dd/yyyy',
        add_button: "Add",
        added_button: "Added",
        bundle_button: "Add selected item(s)",
        bundle_saved: "Saved",
        bundle_select: "Select",
        bundle_selected: "Selected",
        bundle_this_item: "This item",
        bundle_total: "Total price",
        checkout: "Checkout",
        discount_summary: "You will get <strong>{discount_value} OFF</strong> on each product",
        discount_title: "SPECIAL OFFER",
        free: "FREE",
        incart_title: "Customers also bought with \"{product_title}\"",
        prepurchase_added: "You just added",
        prepurchase_title: "Frequently bought with \"{product_title}\"",
        qty_discount_note: "on each product",
        qty_discount_title: '{item_count} item(s) get {discount_value} OFF',
        sizechart_button: "Size chart",
        field_name: 'Enter your name',
        field_email: 'Enter your email',
        field_birthday: 'Date of birth',
        discount_noti: '* Discount will be calculated and applied at checkout',
        fox_discount_noti: `* You are entitled to 1 discount offer of <span>{price}</span> (<span>{discount_title}</span>). This offer <b>can't be combined</b> with any other discount you add here!`,
        bis_open: "Notify me when available",
        bis_heading: "Back in stock alert 📬",
        bis_desc: "We will send you a notification as soon as this product is available again.",
        bis_submit: "Notify me",
        bis_email: "Your email",
        bis_name: "Your name",
        bis_phone: "Your phone number",
        bis_note: "Your note",
        bis_signup: "Email me with news and offers",
        bis_thankyou: "Thank you! We'll send you an email when this product is available!",
        preorder_discount_title: "🎁 Preorder now to get <strong>{discount_value} OFF</strong>",
        preorder_shipping_note: "🚚 Item will be delivered on or before <strong>{eta}</strong>",
        preorder_end_note: "🔥 Preorder will end at <strong>{end_time}</strong>"
      }
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "tr", function (key) {
      let _params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      const {
        locales,
        shop_locale
      } = _this;
      let text = locales[shop_locale]?.[key] || locales['default'][key] || `Foxkit: translation missing for ${key}!`;
      const params = Object.keys(_params);

      if (params.length) {
        Object.entries(_params).forEach(_ref => {
          let [k, v] = _ref;
          return text = text.replace(`{${k}}`, v);
        });
      }

      return text;
    });

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(this, "setLocales", (locale, data) => {
      this.locales[locale] = data;
    });
  }

}

const i18n = window.__i18n || new I18N();
window.__i18n = window.__i18n || i18n;
/* harmony default export */ __webpack_exports__["default"] = (i18n);

/***/ }),

/***/ 4558:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinimogEvents": function() { return /* binding */ MinimogEvents; },
/* harmony export */   "MinimogTheme": function() { return /* binding */ MinimogTheme; },
/* harmony export */   "MinimogSettings": function() { return /* binding */ MinimogSettings; },
/* harmony export */   "MinimogStrings": function() { return /* binding */ MinimogStrings; },
/* harmony export */   "MinimogLibs": function() { return /* binding */ MinimogLibs; }
/* harmony export */ });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8971);

window.MinimogEvents = window.MinimogEvents || new _utils_events__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
window._ThemeEvent = window.MinimogEvents;
const MinimogEvents = window.MinimogEvents;
const MinimogTheme = window.MinimogTheme || {};
const MinimogSettings = window.MinimogSettings || {};
const MinimogStrings = window.MinimogStrings || {};
const MinimogLibs = window.MinimogLibs || {};

/***/ }),

/***/ 6295:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__);


class JSX {
  constructor() {
    this.component = this.component.bind(this);
    return this.component;
  }

  component(tagName, attrs) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (typeof tagName === 'function') {
      // Override children
      return tagName({ ...attrs,
        children
      });
    }

    if (children) {
      children = children.filter(val => val !== null);
    }

    if (attrs) {
      if (attrs.class) {
        attrs.className = attrs.class;
      }

      delete attrs.children;
    } // Normal DOM node tagName


    function createWithAttrs(tagName, attrs) {
      attrs = attrs || {};
      let elem = document.createElement(tagName);

      try {
        elem = Object.assign(elem, attrs);
      } catch {
        const attrKeys = Object.keys(attrs);

        for (let i = 0; i < attrKeys.length; i++) {
          if (attrs[i] !== 'dataSet') {
            elem.setAttribute(attrKeys[i], attrs[attrKeys[i]]);
          }
        }
      }

      return elem;
    }

    let elem = tagName !== 'fragment' ? createWithAttrs(tagName, attrs) : document.createDocumentFragment(); // Evaluate SVG DOM node tagName
    // All svg inner tags: https://developer.mozilla.org/en-US/docs/Web/SVG/Element

    const svgInnerTags = ['svg', 'path', 'rect', 'text', 'circle', 'g'];

    if (svgInnerTags.indexOf(tagName) !== -1) {
      elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);

      for (const key in attrs) {
        const attrName = key === 'className' ? 'class' : key;
        elem.setAttribute(attrName, attrs[key]);
      }
    } // Populate children to created DOM Node


    for (const child of children) {
      if (Array.isArray(child)) {
        elem.append(...child);
      } else {
        elem.append(child);
      }
    } // After elements are created


    if (attrs?.dataSet) {
      for (const key in attrs.dataSet) {
        if (Object.prototype.hasOwnProperty.call(attrs.dataSet, key)) {
          elem.dataset[key] = attrs.dataSet[key];
        }
      }
    }

    if (attrs && !window.__aleartedJSXData) {
      if (Object.keys(attrs).find(key => key.match(/^data-/))) {
        console.trace(`Your "${tagName}" component uses a data-* attribute! Use dataSet instead!!`);
        alert('Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info');
        window.__aleartedJSXData = true;
      }
    }

    if (attrs?.ref) {
      // Create a custom reference to DOM node
      if (typeof attrs.ref === 'function') {
        attrs.ref(elem);
      } else {
        attrs.ref = elem;
      }
    }

    if (attrs?.on) {
      Object.entries(attrs.on).forEach(_ref => {
        let [event, handler] = _ref;
        elem.addEventListener(event, handler);
      });
    } // Append style attributes to created DOM node


    if (attrs?.style) {
      Object.entries(attrs.style).forEach(_ref2 => {
        let [property, value] = _ref2;
        elem.style.setProperty(property, value);
      }); // Object.assign(elem.style, attrs.style);
    }

    return elem;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new JSX());

/***/ }),

/***/ 8971:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Event; }
/* harmony export */ });
/* unused harmony export addEventDelegate */
const addEventDelegate = _ref => {
  let {
    context = document.documentElement,
    event = 'click',
    selector,
    handler,
    capture = false
  } = _ref;

  const listener = function (e) {
    // loop parent nodes from the target to the delegation node
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches(selector)) {
        handler.call(target, e, target);
        break;
      }
    }
  };

  context.addEventListener(event, listener, capture);
  return () => {
    context.removeEventListener(event, listener, capture);
  };
};
class Event {
  constructor() {
    this.events = {};
  }

  get evts() {
    return Object.keys(this.events);
  }

  subscribe(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
    return () => this.unSubscribe(event, handler);
  }

  unSubscribe(event, handler) {
    const handlers = this.events[event];

    if (handlers && Array.isArray(handlers)) {
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }

  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    console.groupCollapsed(`Event emitted: ${event}`);
    console.trace();
    console.groupEnd();
    (this.events[event] || []).forEach(handler => {
      handler(...args);
    });
  }

}

/***/ }),

/***/ 2422:
/***/ (function() {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
        n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.appendChild(n);
  }

  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 643:
/***/ (function(module) {

var COMPLETE = 'complete',
    CANCELED = 'canceled';

function raf(task) {
  if ('requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task);
  }

  setTimeout(task, 16);
}

function setElementScroll(element, x, y) {
  Math.max(0, x);
  Math.max(0, y);

  if (element.self === element) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}

function getTargetScrollLocation(scrollSettings, parent) {
  var align = scrollSettings.align,
      target = scrollSettings.target,
      targetPosition = target.getBoundingClientRect(),
      parentPosition,
      x,
      y,
      differenceX,
      differenceY,
      targetWidth,
      targetHeight,
      leftAlign = align && align.left != null ? align.left : 0.5,
      topAlign = align && align.top != null ? align.top : 0.5,
      leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
      topOffset = align && align.topOffset != null ? align.topOffset : 0,
      leftScalar = leftAlign,
      topScalar = topAlign;

  if (scrollSettings.isWindow(parent)) {
    targetWidth = Math.min(targetPosition.width, parent.innerWidth);
    targetHeight = Math.min(targetPosition.height, parent.innerHeight);
    x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = scrollSettings.align.lockX ? parent.pageXOffset : x;
    y = scrollSettings.align.lockY ? parent.pageYOffset : y;
    differenceX = x - parent.pageXOffset;
    differenceY = y - parent.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x = scrollSettings.align.lockX ? parent.scrollLeft : x;
    y = scrollSettings.align.lockY ? parent.scrollTop : y;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }

  return {
    x: x,
    y: y,
    differenceX: differenceX,
    differenceY: differenceY
  };
}

function animate(parent) {
  var scrollSettings = parent._scrollSettings;

  if (!scrollSettings) {
    return;
  }

  var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
  var location = getTargetScrollLocation(scrollSettings, parent),
      time = Date.now() - scrollSettings.startTime,
      timeValue = Math.min(1 / scrollSettings.time * time, 1);

  if (scrollSettings.endIterations >= maxSynchronousAlignments) {
    setElementScroll(parent, location.x, location.y);
    parent._scrollSettings = null;
    return scrollSettings.end(COMPLETE);
  }

  var easeValue = 1 - scrollSettings.ease(timeValue);
  setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);

  if (time >= scrollSettings.time) {
    scrollSettings.endIterations++; // Align ancestor synchronously

    scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
    animate(parent);
    return;
  }

  raf(animate.bind(null, parent));
}

function defaultIsWindow(target) {
  return target.self === target;
}

function transitionScrollTo(target, parent, settings, scrollAncestor, callback) {
  var idle = !parent._scrollSettings,
      lastSettings = parent._scrollSettings,
      now = Date.now(),
      cancelHandler,
      passiveOptions = {
    passive: true
  };

  if (lastSettings) {
    lastSettings.end(CANCELED);
  }

  function end(endType) {
    parent._scrollSettings = null;

    if (parent.parentElement && parent.parentElement._scrollSettings) {
      parent.parentElement._scrollSettings.end(endType);
    }

    if (settings.debug) {
      console.log('Scrolling ended with type', endType, 'for', parent);
    }

    callback(endType);

    if (cancelHandler) {
      parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
      parent.removeEventListener('wheel', cancelHandler, passiveOptions);
    }
  }

  var maxSynchronousAlignments = settings.maxSynchronousAlignments;

  if (maxSynchronousAlignments == null) {
    maxSynchronousAlignments = 3;
  }

  parent._scrollSettings = {
    startTime: now,
    endIterations: 0,
    target: target,
    time: settings.time,
    ease: settings.ease,
    align: settings.align,
    isWindow: settings.isWindow || defaultIsWindow,
    maxSynchronousAlignments: maxSynchronousAlignments,
    end: end,
    scrollAncestor
  };

  if (!('cancellable' in settings) || settings.cancellable) {
    cancelHandler = end.bind(null, CANCELED);
    parent.addEventListener('touchstart', cancelHandler, passiveOptions);
    parent.addEventListener('wheel', cancelHandler, passiveOptions);
  }

  if (idle) {
    animate(parent);
  }

  return cancelHandler;
}

function defaultIsScrollable(element) {
  return 'pageXOffset' in element || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
}

function defaultValidTarget() {
  return true;
}

function findParentElement(el) {
  if (el.assignedSlot) {
    return findParentElement(el.assignedSlot);
  }

  if (el.parentElement) {
    if (el.parentElement.tagName === 'BODY') {
      return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
    }

    return el.parentElement;
  }

  if (el.getRootNode) {
    var parent = el.getRootNode();

    if (parent.nodeType === 11) {
      return parent.host;
    }
  }
}

module.exports = function (target, settings, callback) {
  if (!target) {
    return;
  }

  if (typeof settings === 'function') {
    callback = settings;
    settings = null;
  }

  if (!settings) {
    settings = {};
  }

  settings.time = isNaN(settings.time) ? 1000 : settings.time;

  settings.ease = settings.ease || function (v) {
    return 1 - Math.pow(1 - v, v / 2);
  };

  settings.align = settings.align || {};
  var parent = findParentElement(target),
      parents = 1;

  function done(endType) {
    parents--;

    if (!parents) {
      callback && callback(endType);
    }
  }

  var validTarget = settings.validTarget || defaultValidTarget;
  var isScrollable = settings.isScrollable;

  if (settings.debug) {
    console.log('About to scroll to', target);

    if (!parent) {
      console.error('Target did not have a parent, is it mounted in the DOM?');
    }
  }

  var scrollingElements = [];

  while (parent) {
    if (settings.debug) {
      console.log('Scrolling parent node', parent);
    }

    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents++;
      scrollingElements.push(parent);
    }

    parent = findParentElement(parent);

    if (!parent) {
      done(COMPLETE);
      break;
    }
  }

  return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
};

/***/ }),

/***/ 4942:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scroll_into_view_scrollIntoView = __webpack_require__(643);
;// CONCATENATED MODULE: ./src/js/utilities/load-assets.js
function load_assets_loadJS(src) {
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  let async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let defer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    const currScript = doc.querySelector(`script[src="${src}"]`);

    if (currScript) {
      if (currScript.dataset.loaded) return resolve(true);
      currScript.addEventListener("load", () => {
        currScript.dataset.loaded = true;
        resolve(true);
      });
      return;
    }

    const script = doc.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    script.addEventListener("load", () => {
      script.dataset.loaded = true;
      resolve(true);
    });
    script.onerror = reject;
    target.appendChild(script);
  });
}
function load_assets_loadCSS(href) {
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.head;
  return new Promise((resolve, reject) => {
    const doc = target.ownerDocument;
    const currLink = doc.querySelector(`link[href="${href}"]`);

    if (currLink) {
      if (currLink.dataset.loaded) return resolve(true);
      currLink.addEventListener("load", () => {
        currLink.dataset.loaded = true;
        resolve(true);
      });
      return;
    }

    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.addEventListener("load", () => {
      link.dataset.loaded = true;
      resolve(true);
    });
    link.onerror = reject;
    target.appendChild(link);
  });
}
const {
  themeScriptURLs,
  themeStyleURLs
} = window;
if (!themeScriptURLs || !themeStyleURLs) console.warn("Missing Assest URLs source");
const themeAssets = {
  'js': {
    urls: themeScriptURLs,
    load: load_assets_loadJS
  },
  'css': {
    urls: themeStyleURLs,
    load: load_assets_loadCSS
  }
};

function log(asset) {
  console.groupCollapsed('%c Asset loaded: ', '#f7a046', asset);
  console.trace();
  console.groupEnd();
}

function load_assets_loadAssets(param) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return new Promise((resolve, reject) => {
    const files = typeof param === "string" ? [param] : param;
    Promise.all(files.map(async file => {
      try {
        const [, name, type] = file.match(/(.*)\.(js|css)$/) || [, file, 'js'];
        const {
          urls: {
            [name]: {
              url
            }
          },
          load
        } = themeAssets[type];
        await load(url, ...rest);
        log(`${name}.${type}`);
      } catch (err) {
        console.warn(`Failed to load asset: ${file}.`, err);
      }
    })).then(resolve).catch(reject);
  });
}
;// CONCATENATED MODULE: ./src/js/utilities/index.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var createElement = __webpack_require__(6295)["default"];






window.__getSectionInstanceByType = type => window.Shopify.theme.sections.instances.find(inst => inst.type === type);

function productFormCheck(form) {
  const fieldSelectors = '[data-theme-fields] [name][required]:not([hidden]):not([type="hidden"])';
  const requiredFields = form.querySelectorAll(fieldSelectors);
  const missingFields = [];
  requiredFields.forEach(field => {
    if (field.type === 'radio') {
      const raidoButtons = form.querySelectorAll(`input[name="${field.name}"]`);
      const selected = Array.from(raidoButtons).some(btn => btn.checked);

      if (!selected) {
        missingFields.push(field);
      }
    } else if (!field.value) {
      missingFields.push(field);
    }
  });
  return missingFields;
}
function queryDomNodes() {
  let selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  const domNodes = Object.entries(selectors).reduce((acc, _ref) => {
    let [name, selector] = _ref;
    const findOne = typeof selector === 'string';
    const queryMethod = findOne ? 'querySelector' : 'querySelectorAll';
    const sl = findOne ? selector : selector[0];
    acc[name] = context?.[queryMethod]?.(sl);

    if (!findOne && acc[name]) {
      acc[name] = [...acc[name]];
    }

    return acc;
  }, {});
  return domNodes;
}
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
function animateReplace(oldNode, newNode) {
  if (!oldNode || !newNode) {
    return;
  }

  oldNode.classList.add('ar__old-node');
  newNode.classList.add('ar__new-node');
  oldNode.style.opacity = 0;
  oldNode.replaceWith(newNode);
  setTimeout(() => newNode.style.opacity = 1);
}
function createSearchLink(query) {
  const searchParams = new URLSearchParams({
    type: 'product',
    ['options[unavailable_products]']: 'last',
    ['options[prefix]']: 'last',
    q: query
  });
  return `${PredictiveSearch.SEARCH_PATH}?${searchParams.toString()}`;
}
function isInViewport(elem) {
  const rect = elem.getBoundingClientRect(); // NOTE: not accuracy in all cases but we only need this

  return rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}

function loadStyles() {
  const {
    themeStyleURLs = {}
  } = window;
  Object.values(themeStyleURLs).forEach(style => {
    const {
      url,
      required,
      afterWindowLoaded
    } = style;

    if (url && required) {
      if (!afterWindowLoaded || window?.__sfWindowLoaded) {
        loadCSS(url);
      } else {
        window.addEventListener("load", () => loadCSS(url));
      }
    }
  });
}

function loadScripts() {
  const {
    themeScriptURLs = {}
  } = window;
  Object.values(themeScriptURLs).forEach(script => {
    const {
      url,
      required,
      afterWindowLoaded
    } = script;

    if (url && required) {
      if (!afterWindowLoaded || window?.__sfWindowLoaded) {
        loadJS(url);
      } else {
        window.addEventListener("load", () => loadJS(url));
      }
    }
  });
}

function addCustomerFormHandlers() {
  addEventDelegate({
    selector: '.sf-customer__forms',
    handler: (e, form) => {
      if (e.target.classList.contains('sf-customer__reset-password-btn')) {
        form.classList.add('show-recover-password-form');
        return;
      }

      if (e.target.classList.contains('sf-customer__cancel-reset')) {
        form.classList.remove('show-recover-password-form');
        return;
      }
    }
  });

  if (document.querySelector('.sf-customer__recover-form-posted')) {
    document.querySelector('.sf-customer__forms')?.classList?.add('show-recover-password-form');
  }
}

function getVideoURL(id, host) {
  if (host === 'youtube') {
    return `https://www.youtube.com/watch?v=${id}&gl=true`;
  }

  if (host === 'vimeo') {
    return `https://vimeo.com/${id}`;
  }

  return '';
}

function showCookieConsent() {
  const {
    show_cookie_consent
  } = MinimogSettings;
  const cookieAccepted = getCookie('cookieconsent_status');

  if (show_cookie_consent && !cookieAccepted) {
    loadAssets(['cookieConsent.css', 'cookieConsent.js']);
  }
}

function initTermsCheckbox() {
  addEventDelegate({
    selector: '.agree-terms [name="agree_terms"]',
    event: 'change',
    handler: (e, target) => {
      const button = target.closest('.agree-terms').nextElementSibling;

      if (button && button.hasAttributes('data-terms-action')) {
        if (target.checked) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', true);
        }
      }
    }
  });
}

const scrollToTopTarget = document.querySelector('#scroll-to-top-target');
function scrollToTop(callback) {
  scrollIntoView(scrollToTopTarget, callback);
}

function initScrollTop() {
  const scrollTopButton = document.querySelector('#scroll-to-top-button');

  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', function () {
      const method = window.scrollY > 100 ? 'add' : 'remove';
      scrollTopButton.classList[method]('opacity-100');
    });
  }
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
}
function addRecentViewedProduct() {
  const cookies = getCookie('sf-recent-viewed-products');
  let products = cookies ? JSON.parse(cookies) : [];

  if (products.indexOf(MinimogSettings.productHandle) === -1) {
    products.unshift(MinimogSettings.productHandle);
    products = products.slice(0, 20);
    setCookie('sf-recent-viewed-products', JSON.stringify(products));
  }
}
const generateDomFromString = value => {
  const d = createElement("div", null);
  d.innerHTML = value;
  return d;
};
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function updateParam(key, value) {
  var {
    location
  } = window;
  var baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (urlParams.has(key)) {
    if (value !== '' && value !== 'undefined') {
      urlParams.set(key, value);
    }

    if (value === '' || value === 'undefined') {
      urlParams.delete(key);
    }
  } else {
    if (value) urlParams.append(key, value);
  }

  window.history.replaceState({}, "", baseUrl + '?' + urlParams.toString());
  return false;
}
function getParams() {
  let params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  for (const entry of urlParams.entries()) {
    params[entry[0]] = entry[1];
  }

  return params;
}

const setSwatchesOptions = () => {
  try {
    MinimogSettings._colorSwatches = [];
    MinimogSettings._imageSwatches = [];
    MinimogSettings.product_colors.split(',').filter(Boolean).forEach(colorSwatch => {
      const [key, value] = colorSwatch.split(':');

      MinimogSettings._colorSwatches.push({
        key: key.trim().toLowerCase(),
        value: value?.trim?.() || ''
      });
    });
    Object.keys(MinimogSettings).forEach(key => {
      if (key.includes('filter_color') && !key.includes('.png')) {
        if (MinimogSettings[`${key}.png`]) {
          MinimogSettings._imageSwatches.push({
            key: MinimogSettings[key].toLowerCase(),
            value: MinimogSettings[`${key}.png`]
          });
        }
      }
    });
  } catch (e) {
    console.error('Failed to convert color/image swatch structure!', e);
  }
};

const refreshProductReview = () => {
  if (typeof SMARTIFYAPPS !== 'undefined' && SMARTIFYAPPS.rv.installed) {
    SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
  }

  if (typeof Yotpo !== 'undefined' && typeof Yotpo.API === 'function') {
    const yotpoApi = new Yotpo.API(yotpo);
    yotpoApi?.refreshWidgets();
  }
};
const formatUrl = (pageType, handle, query) => {
  let url;
  const {
    routes
  } = MinimogSettings;
  const root = routes.root.endsWith('/') ? '' : routes.root;
  url = `${root}/${pageType}/${handle}`;
  if (query) url += `?${query}`;
  return url;
};
function runHelpers() {
  try {
    loadScripts();
    loadStyles(); ////////////////////

    setSwatchesOptions();
    showCookieConsent();
    initTermsCheckbox();
    initLocalization();
    addCustomerFormHandlers();
    initScrollTop();
  } catch (err) {
    console.error('Failed to run helpers.', err);
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-currency/currency.js
/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */
const moneyFormat = '${{amount}}';
/**
 * Format money values based on your shop currency settings
 * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
 * or 3.00 dollars
 * @param  {String} format - shop money_format setting
 * @return {String} value - formatted value
 */

function formatMoney(cents, format) {
  if (typeof cents === 'string') {
    cents = cents.replace('.', '');
  }

  let value = '';
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  const formatString = format || moneyFormat;

  function formatWithDelimiters(number) {
    let precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    let thousands = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';
    let decimal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';

    if (isNaN(number) || number == null) {
      return 0;
    }

    number = (number / 100.0).toFixed(precision);
    const parts = number.split('.');
    const dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousands}`);
    const centsAmount = parts[1] ? decimal + parts[1] : '';
    return dollarsAmount + centsAmount;
  }

  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;

    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;

    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;

    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }

  return formatString.replace(placeholderRegex, value);
}
;// CONCATENATED MODULE: ./src/js/foxkit/confetti.js


class Confetti {
  constructor(container) {
    (0,defineProperty/* default */.Z)(this, "confettiInterval", null);

    (0,defineProperty/* default */.Z)(this, "containerEl", null);

    (0,defineProperty/* default */.Z)(this, "confettiColors", ['#EF2964', '#00C09D', '#2D87B0', '#48485E', '#EFFF1D']);

    (0,defineProperty/* default */.Z)(this, "confettiAnimations", ['slow', 'medium', 'fast']);

    (0,defineProperty/* default */.Z)(this, "timeRun", 0);

    (0,defineProperty/* default */.Z)(this, "setupElement", () => {
      const containerEl = document.createElement('div');
      const elPosition = this.container.style.position;

      if (elPosition !== 'relative' || elPosition !== 'absolute') {
        this.container.style.position = 'relative';
      }

      containerEl.classList.add('confetti-container');
      this.container.appendChild(containerEl);
      this.containerEl = containerEl;
    });

    (0,defineProperty/* default */.Z)(this, "stopConfetti", () => {
      clearInterval(this.confettiInterval);
      setTimeout(() => this.containerEl.remove(), 1500);
    });

    (0,defineProperty/* default */.Z)(this, "render", () => {
      this.confettiInterval = setInterval(() => {
        this.timeRun += 1;
        if (this.timeRun >= 160) this.stopConfetti();
        const confettiEl = document.createElement('div');
        const confettiSize = Math.floor(Math.random() * 3) + 7 + 'px';
        const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
        const confettiLeft = Math.floor(Math.random() * this.container.offsetWidth) + 'px';
        const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
        confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
        confettiEl.style.left = confettiLeft;
        confettiEl.style.width = confettiSize;
        confettiEl.style.height = confettiSize;
        confettiEl.style.backgroundColor = confettiBackground;
        confettiEl.removeTimeout = setTimeout(function () {
          confettiEl.parentNode.removeChild(confettiEl);
        }, 3000);
        this.containerEl.appendChild(confettiEl);
      }, 20);
    });

    this.container = container;
    this.setupElement();
    this.render();
  }

}

/* harmony default export */ var confetti = (Confetti);
;// CONCATENATED MODULE: ./src/js/modules/cartgoal.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["MinimogTheme"];
/* provided dependency */ var cartgoal_MinimogSettings = __webpack_require__(4558)["MinimogSettings"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["MinimogEvents"];
/* provided dependency */ var cartgoal_createElement = __webpack_require__(6295)["default"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["MinimogStrings"];
/* provided dependency */ var i18n = __webpack_require__(7345)["default"];

// eslint-disable-next-line no-unused-vars




class CartGoal {
  constructor(settings) {
    (0,defineProperty/* default */.Z)(this, "selectors", {
      cartDrawer: '.scd__content',
      cartGoal: '.f-cartgoal',
      cartSummary: '[data-cart-summary]',
      cartSubtotal: '[data-cart-subtotal]',
      shippingNote: '[data-shipping-note]',
      title: '.f-cartgoal__title',
      progressBar: '[data-progress]',
      goalLeft: '[data-goal-left]',
      icon: '.f-cartgoal__icon'
    });

    (0,defineProperty/* default */.Z)(this, "defaultIcon", `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.56445.761719C5.69336.503906 5.90104.375 6.1875.375s.49414.128906.62305.386719L8.20703 3.59766l3.13677.47265c.2864.02865.4726.17904.5585.45117.086.27214.0287.50847-.1718.70899L9.45312 7.44336l.53711 3.13674c.04297.2721-.05013.487-.27929.6445-.22917.1719-.4655.1934-.70899.0645L6.1875 9.82812 3.37305 11.2891c-.24349.1432-.47982.1289-.70899-.043-.22916-.1719-.32226-.3939-.27929-.666l.53711-3.13674L.644531 5.23047C.44401 5.02995.386719 4.79362.472656 4.52148c.085938-.27213.272136-.42252.558594-.45117l3.13672-.47265L5.56445.761719z"/></svg>`);

    (0,defineProperty/* default */.Z)(this, "doneIcon", `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12"><path fill="currentColor" d="M5.56445.761719C5.69336.503906 5.90104.375 6.1875.375s.49414.128906.62305.386719L8.20703 3.59766l3.13677.47265c.2864.02865.4726.17904.5585.45117.086.27214.0287.50847-.1718.70899L9.45312 7.44336l.53711 3.13674c.04297.2721-.05013.487-.27929.6445-.22917.1719-.4655.1934-.70899.0645L6.1875 9.82812 3.37305 11.2891c-.24349.1432-.47982.1289-.70899-.043-.22916-.1719-.32226-.3939-.27929-.666l.53711-3.13674L.644531 5.23047C.44401 5.02995.386719 4.79362.472656 4.52148c.085938-.27213.272136-.42252.558594-.45117l3.13672-.47265L5.56445.761719z"/></svg>`);

    (0,defineProperty/* default */.Z)(this, "progress", 0);

    (0,defineProperty/* default */.Z)(this, "confettiShow", false);

    (0,defineProperty/* default */.Z)(this, "goalDone", false);

    (0,defineProperty/* default */.Z)(this, "enabled", true);

    (0,defineProperty/* default */.Z)(this, "init", () => {
      this.enabled = MinimogTheme?.Cart?.cart.requires_shipping;
      this.updateProgress(window.FoxKit?.newCart || MinimogTheme?.Cart?.cart);
      this.listenCartChange();
      this.confettiShow = this.goalDone;
    });

    (0,defineProperty/* default */.Z)(this, "updateProgress", cart => {
      const cartTotal = cart._foxCartPrices?.total_price || cart?.total_price;
      this.goalLeft = this.goal * 100 - cartTotal;
      this.progress = this.goalLeft > 0 ? cartTotal / this.goal : 100;
      this.goalDone = this.goalLeft <= 0;
      this.goalTitle = this.goalDone ? this.reached_message : this.message;
      this.domNodes.icon.innerHTML = this.goalDone ? this.doneIcon : this.defaultIcon;
      this.domNodes.cartGoal.style.setProperty('--progress', this.progress + '%');
      this.goalTitle = this.goalTitle.replace('{{variable}}', `<strong>${formatMoney(this.goalLeft, cartgoal_MinimogSettings.money_format)}</strong>`);
      setTimeout(() => this.domNodes.title.innerHTML = this.goalTitle, 500);
      this.setDone();
    });

    (0,defineProperty/* default */.Z)(this, "listenCartChange", () => {
      MinimogEvents.subscribe('ON_FOX_CART_UPDATE', async cart => {
        if (cart) {
          this.domNodes = queryDomNodes(this.selectors);
          this.enabled = cart.requires_shipping;
          this.updateProgress(cart);
          const method = this.goalDone ? 'add' : 'remove';
          this.domNodes.cartGoal.classList[method]('shakeY');

          if (this.goalLeft <= 0) {
            this.showConfetti();
          } else {
            this.confettiShow = false;
          }

          if (this.enabled) {
            this.domNodes.cartGoal.classList.remove('hidden');
          } else {
            this.domNodes.cartGoal.classList.add('hidden');
            this.shippingNote?.remove();
          }
        }
      });
    });

    (0,defineProperty/* default */.Z)(this, "setDone", () => {
      const method = this.goalDone ? 'add' : 'remove';
      this.domNodes.cartGoal.classList[method]('f-cartgoal--done');
      this.shippingNote?.remove();
      this.domNodes.shippingNote?.classList.remove('hidden');

      if (this.goalDone && this.enabled) {
        this.addShippingNote();
      }
    });

    (0,defineProperty/* default */.Z)(this, "showConfetti", () => {
      if (this.enabled && !this.confettiShow && cartgoal_MinimogSettings.template !== 'cart') {
        new confetti(this.domNodes.cartDrawer);
        this.confettiShow = true;
      }
    });

    (0,defineProperty/* default */.Z)(this, "addShippingNote", () => {
      this.shippingNote = cartgoal_createElement("div", {
        className: 'f-cartgoal-free-shipping flex justify-between items-center'
      }, cartgoal_createElement("span", null, MinimogStrings.shipping, ":"), " ", i18n.tr('free'));
      this.domNodes.cartSummary.insertBefore(this.shippingNote, this.domNodes.cartSubtotal);
      this.domNodes.shippingNote?.classList.add('hidden');
    });

    this.settings = settings;
    this.domNodes = queryDomNodes(this.selectors);
    this.goal = Number(this.settings.goal_amount) * Number(window.Shopify?.currency?.rate || 1) || 0;
    this.reached_message = this.settings.message_reached;
    this.message = this.settings.message;

    if (this.domNodes.cartGoal) {
      this.init();
      this.domNodes.cartDrawer.classList.add('scd--has-cartgoal');
    }
  }

}

window.FoxKit = window.FoxKit || {};
window.FoxKit.CartGoal = CartGoal;
}();
/******/ })()
;