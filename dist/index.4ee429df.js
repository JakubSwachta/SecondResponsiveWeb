// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3AS1F":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "e0dcefe8574811b2e7c6ae8a4ee429df";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"SXDIM":[function(require,module,exports) {
var _mixitup = require('mixitup');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _mixitupDefault = _parcelHelpers.interopDefault(_mixitup);
var _swiperBundle = require('swiper/bundle');
var _swiperBundleDefault = _parcelHelpers.interopDefault(_swiperBundle);
require('swiper/swiper-bundle.css');
var _swiperCore = require('swiper/core');
var _swiperCoreDefault = _parcelHelpers.interopDefault(_swiperCore);
/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');
/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');
let linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach(e => {
  e.addEventListener('click', linkAction);
});
/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');
let scrollActive = () => {
  const scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
};
window.addEventListener('scroll', scrollActive);
/*===== CHANGE BACKGROUND HEADER =====*/
let scrollHeader = () => {
  const header = document.getElementById('header');
  if (scrollY >= 200) {
    header.classList.add('scroll-header');
  } else header.classList.remove('scroll-header');
};
window.addEventListener('scroll', scrollHeader);
/*===== SHOW SCROLL TOP =====*/
let scrollTop = () => {
  const scrollTop = document.getElementById('scroll-top');
  if (scrollY >= 560) {
    scrollTop.classList.add('show-scroll');
  } else scrollTop.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollTop);
var mixer = _mixitupDefault.default('.portfolio__container', {
  selectors: {
    target: '.portfolio__content'
  },
  animation: {
    duration: 400
  }
});
/*Link active portfolio*/
const linkPortfolio = document.querySelectorAll('.portfolio__item');
function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
    this.classList.add('active-portfolio');
  }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));
_swiperCoreDefault.default.use([_swiperCore.Navigation, _swiperCore.Pagination]);
const swiper = new _swiperBundleDefault.default('.testimonial__container', {
  spaceBetween: 16,
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
/*===== GSAP ANIMATION =====*/
gsap.from('.home__img', {
  opacity: 0,
  duration: 2,
  delay: 0.3,
  x: 60
});
gsap.from('.home__data', {
  opacity: 0,
  duration: 2,
  delay: 0.6,
  y: 25
});
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {
  opacity: 0,
  duration: 2,
  delay: 0.8,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});
gsap.from('.nav__logo, .nav__toggle', {
  opacity: 0,
  duration: 2,
  delay: 1.3,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});
gsap.from('.nav__item', {
  opacity: 0,
  duration: 2,
  delay: 1.6,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});
gsap.from('.home__social-icon', {
  opacity: 0,
  duration: 2,
  delay: 2,
  y: 25,
  ease: 'expo.out',
  stagger: 0.2
});

},{"mixitup":"Qw9t3","swiper/bundle":"2NsZw","swiper/swiper-bundle.css":"4ildJ","swiper/core":"GxxLH","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"Qw9t3":[function(require,module,exports) {
var define;
/**!
* MixItUp v3.3.1
* A high-performance, dependency-free library for animated filtering, sorting and more
* Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
*
* @copyright Copyright 2014-2018 KunkaLabs Limited.
* @author    KunkaLabs Limited.
* @link      https://www.kunkalabs.com/mixitup/
*
* @license   Commercial use requires a commercial license.
*            https://www.kunkalabs.com/mixitup/licenses/
*
*            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
*            http://creativecommons.org/licenses/by-nc/3.0/
*/
(function (window) {
  "use strict";
  var mixitup = null, h = null;
  (function () {
    var VENDORS = ['webkit', 'moz', 'o', 'ms'], canary = window.document.createElement('div'), i = -1;
    // window.requestAnimationFrame
    for (i = 0; i < VENDORS.length && !window.requestAnimationFrame; i++) {
      window.requestAnimationFrame = window[VENDORS[i] + 'RequestAnimationFrame'];
    }
    // Element.nextElementSibling
    if (typeof canary.nextElementSibling === 'undefined') {
      Object.defineProperty(window.Element.prototype, 'nextElementSibling', {
        get: function () {
          var el = this.nextSibling;
          while (el) {
            if (el.nodeType === 1) {
              return el;
            }
            el = el.nextSibling;
          }
          return null;
        }
      });
    }
    // Element.matches
    (function (ElementPrototype) {
      ElementPrototype.matches = ElementPrototype.matches || ElementPrototype.machesSelector || ElementPrototype.mozMatchesSelector || ElementPrototype.msMatchesSelector || ElementPrototype.oMatchesSelector || ElementPrototype.webkitMatchesSelector || (function (selector) {
        return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(selector), this) > -1;
      });
    })(window.Element.prototype);
    // Object.keys
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (!Object.keys) {
      Object.keys = (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = false, dontEnums = [], dontEnumsLength = -1;
        hasDontEnumBug = !({
          toString: null
        }).propertyIsEnumerable('toString');
        dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
        dontEnumsLength = dontEnums.length;
        return function (obj) {
          var result = [], prop = '', i = -1;
          if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
            throw new TypeError('Object.keys called on non-object');
          }
          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }
          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }
          return result;
        };
      })();
    }
    // Array.isArray
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    if (!Array.isArray) {
      Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }
    // Object.create
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create
    if (typeof Object.create !== 'function') {
      Object.create = (function (undefined) {
        var Temp = function () {};
        return function (prototype, propertiesObject) {
          if (prototype !== Object(prototype) && prototype !== null) {
            throw TypeError('Argument must be an object, or null');
          }
          Temp.prototype = prototype || ({});
          var result = new Temp();
          Temp.prototype = null;
          if (propertiesObject !== undefined) {
            Object.defineProperties(result, propertiesObject);
          }
          if (prototype === null) {
            /*jshint ignore:start*/
            result.__proto__ = null;
          }
          return result;
        };
      })();
    }
    // String.prototyoe.trim
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }
    // Array.prototype.indexOf
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (searchElement) {
        var n, k, t, len;
        if (this === null) {
          throw new TypeError();
        }
        t = Object(this);
        len = t.length >>> 0;
        if (len === 0) {
          return -1;
        }
        n = 0;
        if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n !== n) {
            n = 0;
          } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }
        if (n >= len) {
          return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
          if ((k in t) && t[k] === searchElement) {
            return k;
          }
        }
        return -1;
      };
    }
    // Function.prototype.bind
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    if (!Function.prototype.bind) {
      Function.prototype.bind = function (oThis) {
        var aArgs, self, FNOP, fBound;
        if (typeof this !== 'function') {
          throw new TypeError();
        }
        aArgs = Array.prototype.slice.call(arguments, 1);
        self = this;
        FNOP = function () {};
        fBound = function () {
          return self.apply(this instanceof FNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
        };
        if (this.prototype) {
          FNOP.prototype = this.prototype;
        }
        fBound.prototype = new FNOP();
        return fBound;
      };
    }
    // Element.prototype.dispatchEvent
    if (!window.Element.prototype.dispatchEvent) {
      window.Element.prototype.dispatchEvent = function (event) {
        try {
          return this.fireEvent('on' + event.type, event);
        } catch (err) {}
      };
    }
  })();
  /**
  * The `mixitup()` "factory" function creates and returns individual instances
  * of MixItUp, known as "mixers", on which API methods can be called.
  *
  * When loading MixItUp via a script tag, the factory function is accessed
  * via the global variable `mixitup`. When using a module loading
  * system (e.g. ES2015, CommonJS, RequireJS), the factory function is
  * exported into your module when you require the MixItUp library.
  *
  * @example
  * mixitup(container [,config] [,foreignDoc])
  *
  * @example <caption>Example 1: Creating a mixer instance with an element reference</caption>
  * var containerEl = document.querySelector('.container');
  *
  * var mixer = mixitup(containerEl);
  *
  * @example <caption>Example 2: Creating a mixer instance with a selector string</caption>
  * var mixer = mixitup('.container');
  *
  * @example <caption>Example 3: Passing a configuration object</caption>
  * var mixer = mixitup(containerEl, {
  *     animation: {
  *         effects: 'fade scale(0.5)'
  *     }
  * });
  *
  * @example <caption>Example 4: Passing an iframe reference</caption>
  * var mixer = mixitup(containerEl, config, foreignDocument);
  *
  * @global
  * @namespace
  * @public
  * @kind        function
  * @since       3.0.0
  * @param       {(Element|string)}  container
  *      A DOM element or selector string representing the container(s) on which to instantiate MixItUp.
  * @param       {object}            [config]
  *      An optional "configuration object" used to customize the behavior of the MixItUp instance.
  * @param       {object}            [foreignDoc]
  *      An optional reference to a `document`, which can be used to control a MixItUp instance in an iframe.
  * @return      {mixitup.Mixer}
  *      A "mixer" object holding the MixItUp instance.
  */
  mixitup = function (container, config, foreignDoc) {
    var el = null, returnCollection = false, instance = null, facade = null, doc = null, output = null, instances = [], id = '', elements = [], i = -1;
    doc = foreignDoc || window.document;
    if (returnCollection = arguments[3]) {
      // A non-documented 4th paramater enabling control of multiple instances
      returnCollection = typeof returnCollection === 'boolean';
    }
    if (typeof container === 'string') {
      elements = doc.querySelectorAll(container);
    } else if (container && typeof container === 'object' && h.isElement(container, doc)) {
      elements = [container];
    } else if (container && typeof container === 'object' && container.length) {
      // Although not documented, the container may also be an array-like list of
      // elements such as a NodeList or jQuery collection, is returnCollection is true
      elements = container;
    } else {
      throw new Error(mixitup.messages.errorFactoryInvalidContainer());
    }
    if (elements.length < 1) {
      throw new Error(mixitup.messages.errorFactoryContainerNotFound());
    }
    for (i = 0; el = elements[i]; i++) {
      if (i > 0 && !returnCollection) break;
      if (!el.id) {
        id = 'MixItUp' + h.randomHex();
        el.id = id;
      } else {
        id = el.id;
      }
      if (mixitup.instances[id] instanceof mixitup.Mixer) {
        instance = mixitup.instances[id];
        if (!config || config && config.debug && config.debug.showWarnings !== false) {
          console.warn(mixitup.messages.warningFactoryPreexistingInstance());
        }
      } else {
        instance = new mixitup.Mixer();
        instance.attach(el, doc, id, config);
        mixitup.instances[id] = instance;
      }
      facade = new mixitup.Facade(instance);
      if (config && config.debug && config.debug.enable) {
        instances.push(instance);
      } else {
        instances.push(facade);
      }
    }
    if (returnCollection) {
      output = new mixitup.Collection(instances);
    } else {
      // Return the first instance regardless
      output = instances[0];
    }
    return output;
  };
  /**
  * The `.use()` static method is used to extend the functionality of mixitup with compatible
  * extensions and libraries in an environment with modular scoping e.g. ES2015, CommonJS, or RequireJS.
  *
  * You need only call the `.use()` function once per project, per extension, as module loaders
  * will cache a single reference to MixItUp inclusive of all changes made.
  *
  * @example
  * mixitup.use(extension)
  *
  * @example <caption>Example 1: Extending MixItUp with the Pagination Extension</caption>
  *
  * import mixitup from 'mixitup';
  * import mixitupPagination from 'mixitup-pagination';
  *
  * mixitup.use(mixitupPagination);
  *
  * // All mixers created by the factory function in all modules will now
  * // have pagination functionality
  *
  * var mixer = mixitup('.container');
  *
  * @public
  * @name     use
  * @memberof mixitup
  * @kind     function
  * @static
  * @since    3.0.0
  * @param    {*}  extension   A reference to the extension or library to be used.
  * @return   {void}
  */
  mixitup.use = function (extension) {
    mixitup.Base.prototype.callActions.call(mixitup, 'beforeUse', arguments);
    // Call the extension's factory function, passing
    // the mixitup factory as a paramater
    if (typeof extension === 'function' && extension.TYPE === 'mixitup-extension') {
      // Mixitup extension
      if (typeof mixitup.extensions[extension.NAME] === 'undefined') {
        extension(mixitup);
        mixitup.extensions[extension.NAME] = extension;
      }
    } else if (extension.fn && extension.fn.jquery) {
      // jQuery
      mixitup.libraries.$ = extension;
    }
    mixitup.Base.prototype.callActions.call(mixitup, 'afterUse', arguments);
  };
  mixitup.instances = {};
  mixitup.extensions = {};
  mixitup.libraries = {};
  /**
  * @private
  */
  h = {
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        cls
    * @return  {boolean}
    */
    hasClass: function (el, cls) {
      return !!el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        cls
    * @return  {void}
    */
    addClass: function (el, cls) {
      if (!this.hasClass(el, cls)) el.className += el.className ? ' ' + cls : cls;
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        cls
    * @return  {void}
    */
    removeClass: function (el, cls) {
      if (this.hasClass(el, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        el.className = el.className.replace(reg, ' ').trim();
      }
    },
    /**
    * Merges the properties of the source object onto the
    * target object. Alters the target object.
    *
    * @private
    * @param   {object}    destination
    * @param   {object}    source
    * @param   {boolean}   [deep=false]
    * @param   {boolean}   [handleErrors=false]
    * @return  {void}
    */
    extend: function (destination, source, deep, handleErrors) {
      var sourceKeys = [], key = '', i = -1;
      deep = deep || false;
      handleErrors = handleErrors || false;
      try {
        if (Array.isArray(source)) {
          for (i = 0; i < source.length; i++) {
            sourceKeys.push(i);
          }
        } else if (source) {
          sourceKeys = Object.keys(source);
        }
        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (!deep || typeof source[key] !== 'object' || this.isElement(source[key])) {
            // All non-object properties, or all properties if shallow extend
            destination[key] = source[key];
          } else if (Array.isArray(source[key])) {
            // Arrays
            if (!destination[key]) {
              destination[key] = [];
            }
            this.extend(destination[key], source[key], deep, handleErrors);
          } else {
            // Objects
            if (!destination[key]) {
              destination[key] = {};
            }
            this.extend(destination[key], source[key], deep, handleErrors);
          }
        }
      } catch (err) {
        if (handleErrors) {
          this.handleExtendError(err, destination);
        } else {
          throw err;
        }
      }
      return destination;
    },
    /**
    * @private
    * @param   {Error}  err
    * @param   {object} destination
    * @return  {void}
    */
    handleExtendError: function (err, destination) {
      var re = /property "?(\w*)"?[,:] object/i, matches = null, erroneous = '', message = '', suggestion = '', probableMatch = '', key = '', mostMatchingChars = -1, i = -1;
      if (err instanceof TypeError && (matches = re.exec(err.message))) {
        erroneous = matches[1];
        for (key in destination) {
          i = 0;
          while (i < erroneous.length && erroneous.charAt(i) === key.charAt(i)) {
            i++;
          }
          if (i > mostMatchingChars) {
            mostMatchingChars = i;
            probableMatch = key;
          }
        }
        if (mostMatchingChars > 1) {
          suggestion = mixitup.messages.errorConfigInvalidPropertySuggestion({
            probableMatch: probableMatch
          });
        }
        message = mixitup.messages.errorConfigInvalidProperty({
          erroneous: erroneous,
          suggestion: suggestion
        });
        throw new TypeError(message);
      }
      throw err;
    },
    /**
    * @private
    * @param   {string} str
    * @return  {function}
    */
    template: function (str) {
      var re = /\${([\w]*)}/g, dynamics = {}, matches = null;
      while (matches = re.exec(str)) {
        dynamics[matches[1]] = new RegExp('\\${' + matches[1] + '}', 'g');
      }
      return function (data) {
        var key = '', output = str;
        data = data || ({});
        for (key in dynamics) {
          output = output.replace(dynamics[key], typeof data[key] !== 'undefined' ? data[key] : '');
        }
        return output;
      };
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        type
    * @param   {function}      fn
    * @param   {boolean}       useCapture
    * @return  {void}
    */
    on: function (el, type, fn, useCapture) {
      if (!el) return;
      if (el.addEventListener) {
        el.addEventListener(type, fn, useCapture);
      } else if (el.attachEvent) {
        el['e' + type + fn] = fn;
        el[type + fn] = function () {
          el['e' + type + fn](window.event);
        };
        el.attachEvent('on' + type, el[type + fn]);
      }
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        type
    * @param   {function}      fn
    * @return  {void}
    */
    off: function (el, type, fn) {
      if (!el) return;
      if (el.removeEventListener) {
        el.removeEventListener(type, fn, false);
      } else if (el.detachEvent) {
        el.detachEvent('on' + type, el[type + fn]);
        el[type + fn] = null;
      }
    },
    /**
    * @private
    * @param   {string}      eventType
    * @param   {object}      detail
    * @param   {Document}    [doc]
    * @return  {CustomEvent}
    */
    getCustomEvent: function (eventType, detail, doc) {
      var event = null;
      doc = doc || window.document;
      if (typeof window.CustomEvent === 'function') {
        event = new window.CustomEvent(eventType, {
          detail: detail,
          bubbles: true,
          cancelable: true
        });
      } else if (typeof doc.createEvent === 'function') {
        event = doc.createEvent('CustomEvent');
        event.initCustomEvent(eventType, true, true, detail);
      } else {
        (event = doc.createEventObject(), event.type = eventType);
        event.returnValue = false;
        event.cancelBubble = false;
        event.detail = detail;
      }
      return event;
    },
    /**
    * @private
    * @param   {Event} e
    * @return  {Event}
    */
    getOriginalEvent: function (e) {
      if (e.touches && e.touches.length) {
        return e.touches[0];
      } else if (e.changedTouches && e.changedTouches.length) {
        return e.changedTouches[0];
      } else {
        return e;
      }
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        selector
    * @return  {Number}
    */
    index: function (el, selector) {
      var i = 0;
      while ((el = el.previousElementSibling) !== null) {
        if (!selector || el.matches(selector)) {
          ++i;
        }
      }
      return i;
    },
    /**
    * Converts a dash or snake-case string to camel case.
    *
    * @private
    * @param   {string}    str
    * @param   {boolean}   [isPascal]
    * @return  {string}
    */
    camelCase: function (str) {
      return str.toLowerCase().replace(/([_-][a-z])/g, function ($1) {
        return $1.toUpperCase().replace(/[_-]/, '');
      });
    },
    /**
    * Converts a dash or snake-case string to pascal case.
    *
    * @private
    * @param   {string}    str
    * @param   {boolean}   [isPascal]
    * @return  {string}
    */
    pascalCase: function (str) {
      return (str = this.camelCase(str)).charAt(0).toUpperCase() + str.slice(1);
    },
    /**
    * Converts a camel or pascal-case string to dash case.
    *
    * @private
    * @param   {string}    str
    * @return  {string}
    */
    dashCase: function (str) {
      return str.replace(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase();
    },
    /**
    * @private
    * @param   {HTMLElement}       el
    * @param   {HTMLHtmlElement}   [doc]
    * @return  {boolean}
    */
    isElement: function (el, doc) {
      doc = doc || window.document;
      if (window.HTMLElement && el instanceof window.HTMLElement) {
        return true;
      } else if (doc.defaultView && doc.defaultView.HTMLElement && el instanceof doc.defaultView.HTMLElement) {
        return true;
      } else {
        return el !== null && el.nodeType === 1 && typeof el.nodeName === 'string';
      }
    },
    /**
    * @private
    * @param   {string}            htmlString
    * @param   {HTMLHtmlElement}   [doc]
    * @return  {DocumentFragment}
    */
    createElement: function (htmlString, doc) {
      var frag = null, temp = null;
      doc = doc || window.document;
      frag = doc.createDocumentFragment();
      temp = doc.createElement('div');
      temp.innerHTML = htmlString.trim();
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
      return frag;
    },
    /**
    * @private
    * @param   {Node} node
    * @return  {void}
    */
    removeWhitespace: function (node) {
      var deleting;
      while (node && node.nodeName === '#text') {
        deleting = node;
        node = node.previousSibling;
        deleting.parentElement && deleting.parentElement.removeChild(deleting);
      }
    },
    /**
    * @private
    * @param   {Array<*>}  a
    * @param   {Array<*>}  b
    * @return  {boolean}
    */
    isEqualArray: function (a, b) {
      var i = a.length;
      if (i !== b.length) return false;
      while (i--) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    },
    /**
    * @private
    * @param   {object}  a
    * @param   {object}  b
    * @return  {boolean}
    */
    deepEquals: function (a, b) {
      var key;
      if (typeof a === 'object' && a && typeof b === 'object' && b) {
        if (Object.keys(a).length !== Object.keys(b).length) return false;
        for (key in a) {
          if (!b.hasOwnProperty(key) || !this.deepEquals(a[key], b[key])) return false;
        }
      } else if (a !== b) {
        return false;
      }
      return true;
    },
    /**
    * @private
    * @param   {Array<*>}  oldArray
    * @return  {Array<*>}
    */
    arrayShuffle: function (oldArray) {
      var newArray = oldArray.slice(), len = newArray.length, i = len, p = -1, t = [];
      while (i--) {
        p = ~~(Math.random() * len);
        t = newArray[i];
        newArray[i] = newArray[p];
        newArray[p] = t;
      }
      return newArray;
    },
    /**
    * @private
    * @param   {object}    list
    */
    arrayFromList: function (list) {
      var output, i;
      try {
        return Array.prototype.slice.call(list);
      } catch (err) {
        output = [];
        for (i = 0; i < list.length; i++) {
          output.push(list[i]);
        }
        return output;
      }
    },
    /**
    * @private
    * @param   {function}  func
    * @param   {Number}    wait
    * @param   {boolean}   immediate
    * @return  {function}
    */
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var self = this, args = arguments, callNow = immediate && !timeout, later = null;
        later = function () {
          timeout = null;
          if (!immediate) {
            func.apply(self, args);
          }
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(self, args);
      };
    },
    /**
    * @private
    * @param   {HTMLElement}   element
    * @return  {object}
    */
    position: function (element) {
      var xPosition = 0, yPosition = 0, offsetParent = element;
      while (element) {
        xPosition -= element.scrollLeft;
        yPosition -= element.scrollTop;
        if (element === offsetParent) {
          xPosition += element.offsetLeft;
          yPosition += element.offsetTop;
          offsetParent = element.offsetParent;
        }
        element = element.parentElement;
      }
      return {
        x: xPosition,
        y: yPosition
      };
    },
    /**
    * @private
    * @param   {object}    node1
    * @param   {object}    node2
    * @return  {Number}
    */
    getHypotenuse: function (node1, node2) {
      var distanceX = node1.x - node2.x, distanceY = node1.y - node2.y;
      (distanceX = distanceX < 0 ? distanceX * -1 : distanceX, distanceY = distanceY < 0 ? distanceY * -1 : distanceY);
      return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    },
    /**
    * Calcuates the area of intersection between two rectangles and expresses it as
    * a ratio in comparison to the area of the first rectangle.
    *
    * @private
    * @param   {Rect}  box1
    * @param   {Rect}  box2
    * @return  {number}
    */
    getIntersectionRatio: function (box1, box2) {
      var controlArea = box1.width * box1.height, intersectionX = -1, intersectionY = -1, intersectionArea = -1, ratio = -1;
      intersectionX = Math.max(0, Math.min(box1.left + box1.width, box2.left + box2.width) - Math.max(box1.left, box2.left));
      intersectionY = Math.max(0, Math.min(box1.top + box1.height, box2.top + box2.height) - Math.max(box1.top, box2.top));
      intersectionArea = intersectionY * intersectionX;
      ratio = intersectionArea / controlArea;
      return ratio;
    },
    /**
    * @private
    * @param   {object}            el
    * @param   {string}            selector
    * @param   {boolean}           [includeSelf]
    * @param   {HTMLHtmlElement}   [doc]
    * @return  {Element|null}
    */
    closestParent: function (el, selector, includeSelf, doc) {
      var parent = el.parentNode;
      doc = doc || window.document;
      if (includeSelf && el.matches(selector)) {
        return el;
      }
      while (parent && parent != doc.body) {
        if (parent.matches && parent.matches(selector)) {
          return parent;
        } else if (parent.parentNode) {
          parent = parent.parentNode;
        } else {
          return null;
        }
      }
      return null;
    },
    /**
    * @private
    * @param   {HTMLElement}       el
    * @param   {string}            selector
    * @param   {HTMLHtmlElement}   [doc]
    * @return  {NodeList}
    */
    children: function (el, selector, doc) {
      var children = [], tempId = '';
      doc = doc || window.doc;
      if (el) {
        if (!el.id) {
          tempId = 'Temp' + this.randomHexKey();
          el.id = tempId;
        }
        children = doc.querySelectorAll('#' + el.id + ' > ' + selector);
        if (tempId) {
          el.removeAttribute('id');
        }
      }
      return children;
    },
    /**
    * Creates a clone of a provided array, with any empty strings removed.
    *
    * @private
    * @param   {Array<*>} originalArray
    * @return  {Array<*>}
    */
    clean: function (originalArray) {
      var cleanArray = [], i = -1;
      for (i = 0; i < originalArray.length; i++) {
        if (originalArray[i] !== '') {
          cleanArray.push(originalArray[i]);
        }
      }
      return cleanArray;
    },
    /**
    * Abstracts an ES6 promise into a q-like deferred interface for storage and deferred resolution.
    *
    * @private
    * @param  {object} libraries
    * @return {h.Deferred}
    */
    defer: function (libraries) {
      var deferred = null, promiseWrapper = null, $ = null;
      promiseWrapper = new this.Deferred();
      if (mixitup.features.has.promises) {
        // ES6 native promise or polyfill
        promiseWrapper.promise = new Promise(function (resolve, reject) {
          promiseWrapper.resolve = resolve;
          promiseWrapper.reject = reject;
        });
      } else if (($ = window.jQuery || libraries.$) && typeof $.Deferred === 'function') {
        // jQuery
        deferred = $.Deferred();
        promiseWrapper.promise = deferred.promise();
        promiseWrapper.resolve = deferred.resolve;
        promiseWrapper.reject = deferred.reject;
      } else if (window.console) {
        // No implementation
        console.warn(mixitup.messages.warningNoPromiseImplementation());
      }
      return promiseWrapper;
    },
    /**
    * @private
    * @param   {Array<Promise>}    tasks
    * @param   {object}            libraries
    * @return  {Promise<Array>}
    */
    all: function (tasks, libraries) {
      var $ = null;
      if (mixitup.features.has.promises) {
        return Promise.all(tasks);
      } else if (($ = window.jQuery || libraries.$) && typeof $.when === 'function') {
        return $.when.apply($, tasks).done(function () {
          // jQuery when returns spread arguments rather than an array or resolutions
          return arguments;
        });
      }
      // No implementation
      if (window.console) {
        console.warn(mixitup.messages.warningNoPromiseImplementation());
      }
      return [];
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @param   {string}        property
    * @param   {Array<string>} vendors
    * @return  {string}
    */
    getPrefix: function (el, property, vendors) {
      var i = -1, prefix = '';
      if ((h.dashCase(property) in el.style)) return '';
      for (i = 0; prefix = vendors[i]; i++) {
        if ((prefix + property in el.style)) {
          return prefix.toLowerCase();
        }
      }
      return 'unsupported';
    },
    /**
    * @private
    * @return  {string}
    */
    randomHex: function () {
      return ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6).toUpperCase();
    },
    /**
    * @private
    * @param   {HTMLDocument}  [doc]
    * @return  {object}
    */
    getDocumentState: function (doc) {
      doc = typeof doc.body === 'object' ? doc : window.document;
      return {
        scrollTop: window.pageYOffset,
        scrollLeft: window.pageXOffset,
        docHeight: doc.documentElement.scrollHeight,
        docWidth: doc.documentElement.scrollWidth,
        viewportHeight: doc.documentElement.clientHeight,
        viewportWidth: doc.documentElement.clientWidth
      };
    },
    /**
    * @private
    * @param   {object}    obj
    * @param   {function}  fn
    * @return  {function}
    */
    bind: function (obj, fn) {
      return function () {
        return fn.apply(obj, arguments);
      };
    },
    /**
    * @private
    * @param   {HTMLElement}   el
    * @return  {boolean}
    */
    isVisible: function (el) {
      var styles = null;
      if (el.offsetParent) return true;
      styles = window.getComputedStyle(el);
      if (styles.position === 'fixed' && styles.visibility !== 'hidden' && styles.opacity !== '0') {
        // Fixed elements report no offsetParent,
        // but may still be invisible
        return true;
      }
      return false;
    },
    /**
    * @private
    * @param   {object}    obj
    */
    seal: function (obj) {
      if (typeof Object.seal === 'function') {
        Object.seal(obj);
      }
    },
    /**
    * @private
    * @param   {object}    obj
    */
    freeze: function (obj) {
      if (typeof Object.freeze === 'function') {
        Object.freeze(obj);
      }
    },
    /**
    * @private
    * @param   {string}    control
    * @param   {string}    specimen
    * @return  {boolean}
    */
    compareVersions: function (control, specimen) {
      var controlParts = control.split('.'), specimenParts = specimen.split('.'), controlPart = -1, specimenPart = -1, i = -1;
      for (i = 0; i < controlParts.length; i++) {
        controlPart = parseInt(controlParts[i].replace(/[^\d.]/g, ''));
        specimenPart = parseInt(specimenParts[i].replace(/[^\d.]/g, '') || 0);
        if (specimenPart < controlPart) {
          return false;
        } else if (specimenPart > controlPart) {
          return true;
        }
      }
      return true;
    },
    /**
    * @private
    * @constructor
    */
    Deferred: function () {
      this.promise = null;
      this.resolve = null;
      this.reject = null;
      this.id = h.randomHex();
    },
    /**
    * @private
    * @param   {object}  obj
    * @return  {boolean}
    */
    isEmptyObject: function (obj) {
      var key = '';
      if (typeof Object.keys === 'function') {
        return Object.keys(obj).length === 0;
      }
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    },
    /**
    * @param   {mixitup.Config.ClassNames}   classNames
    * @param   {string}                      elementName
    * @param   {string}                      [modifier]
    * @return  {string}
    */
    getClassname: function (classNames, elementName, modifier) {
      var classname = '';
      classname += classNames.block;
      if (classname.length) {
        classname += classNames.delineatorElement;
      }
      classname += classNames['element' + this.pascalCase(elementName)];
      if (!modifier) return classname;
      if (classname.length) {
        classname += classNames.delineatorModifier;
      }
      classname += modifier;
      return classname;
    },
    /**
    * Returns the value of a property on a given object via its string key.
    *
    * @param   {object}    obj
    * @param   {string}    stringKey
    * @return  {*} value
    */
    getProperty: function (obj, stringKey) {
      var parts = stringKey.split('.'), returnCurrent = null, current = '', i = 0;
      if (!stringKey) {
        return obj;
      }
      returnCurrent = function (obj) {
        if (!obj) {
          return null;
        } else {
          return obj[current];
        }
      };
      while (i < parts.length) {
        current = parts[i];
        obj = returnCurrent(obj);
        i++;
      }
      if (typeof obj !== 'undefined') {
        return obj;
      } else {
        return null;
      }
    }
  };
  mixitup.h = h;
  /**
  * The Base class adds instance methods to all other extensible MixItUp classes,
  * enabling the calling of any registered hooks.
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Base = function () {};
  mixitup.Base.prototype = {
    constructor: mixitup.Base,
    /**
    * Calls any registered hooks for the provided action.
    *
    * @memberof    mixitup.Base
    * @private
    * @instance
    * @since       2.0.0
    * @param       {string}    actionName
    * @param       {Array<*>}  args
    * @return      {void}
    */
    callActions: function (actionName, args) {
      var self = this, hooks = self.constructor.actions[actionName], extensionName = '';
      if (!hooks || h.isEmptyObject(hooks)) return;
      for (extensionName in hooks) {
        hooks[extensionName].apply(self, args);
      }
    },
    /**
    * Calls any registered hooks for the provided filter.
    *
    * @memberof    mixitup.Base
    * @private
    * @instance
    * @since       2.0.0
    * @param       {string}    filterName
    * @param       {*}         input
    * @param       {Array<*>}  args
    * @return      {*}
    */
    callFilters: function (filterName, input, args) {
      var self = this, hooks = self.constructor.filters[filterName], output = input, extensionName = '';
      if (!hooks || h.isEmptyObject(hooks)) return output;
      args = args || [];
      for (extensionName in hooks) {
        args = h.arrayFromList(args);
        args.unshift(output);
        output = hooks[extensionName].apply(self, args);
      }
      return output;
    }
  };
  /**
  * The BaseStatic class holds a set of static methods which are then added to all other
  * extensible MixItUp classes as a means of integrating extensions via the addition of new
  * methods and/or actions and hooks.
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.BaseStatic = function () {
    this.actions = {};
    this.filters = {};
    /**
    * Performs a shallow extend on the class's prototype, adding one or more new members to
    * the class in a single operation.
    *
    * @memberof    mixitup.BaseStatic
    * @public
    * @static
    * @since       2.1.0
    * @param       {object} extension
    * @return      {void}
    */
    this.extend = function (extension) {
      h.extend(this.prototype, extension);
    };
    /**
    * Registers a function to be called on the action hook of the provided name.
    *
    * @memberof    mixitup.BaseStatic
    * @public
    * @static
    * @since       2.1.0
    * @param       {string}    hookName
    * @param       {string}    extensionName
    * @param       {function}  func
    * @return      {void}
    */
    this.registerAction = function (hookName, extensionName, func) {
      (this.actions[hookName] = this.actions[hookName] || ({}))[extensionName] = func;
    };
    /**
    * Registers a function to be called on the filter of the provided name.
    *
    * @memberof    mixitup.BaseStatic
    * @public
    * @static
    * @since       2.1.0
    * @param       {string}    hookName
    * @param       {string}    extensionName
    * @param       {function}  func
    * @return      {void}
    */
    this.registerFilter = function (hookName, extensionName, func) {
      (this.filters[hookName] = this.filters[hookName] || ({}))[extensionName] = func;
    };
  };
  /**
  * The `mixitup.Features` class performs all feature and CSS prefix detection
  * neccessary for MixItUp to function correctly, as well as storing various
  * string and array constants. All feature decection is on evaluation of the
  * library and stored in a singleton instance for use by other internal classes.
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Features = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.boxSizingPrefix = '';
    this.transformPrefix = '';
    this.transitionPrefix = '';
    this.boxSizingPrefix = '';
    this.transformProp = '';
    this.transformRule = '';
    this.transitionProp = '';
    this.perspectiveProp = '';
    this.perspectiveOriginProp = '';
    this.has = new mixitup.Has();
    this.canary = null;
    this.BOX_SIZING_PROP = 'boxSizing';
    this.TRANSITION_PROP = 'transition';
    this.TRANSFORM_PROP = 'transform';
    this.PERSPECTIVE_PROP = 'perspective';
    this.PERSPECTIVE_ORIGIN_PROP = 'perspectiveOrigin';
    this.VENDORS = ['Webkit', 'moz', 'O', 'ms'];
    this.TWEENABLE = ['opacity', 'width', 'height', 'marginRight', 'marginBottom', 'x', 'y', 'scale', 'translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ'];
    this.callActions('afterConstruct');
  };
  mixitup.BaseStatic.call(mixitup.Features);
  mixitup.Features.prototype = Object.create(mixitup.Base.prototype);
  h.extend(mixitup.Features.prototype, /** @lends mixitup.Features*/
  {
    constructor: mixitup.Features,
    /**
    * @private
    * @return  {void}
    */
    init: function () {
      var self = this;
      self.callActions('beforeInit', arguments);
      self.canary = document.createElement('div');
      self.setPrefixes();
      self.runTests();
      self.callActions('beforeInit', arguments);
    },
    /**
    * @private
    * @return  {void}
    */
    runTests: function () {
      var self = this;
      self.callActions('beforeRunTests', arguments);
      self.has.promises = typeof window.Promise === 'function';
      self.has.transitions = self.transitionPrefix !== 'unsupported';
      self.callActions('afterRunTests', arguments);
      h.freeze(self.has);
    },
    /**
    * @private
    * @return  {void}
    */
    setPrefixes: function () {
      var self = this;
      self.callActions('beforeSetPrefixes', arguments);
      self.transitionPrefix = h.getPrefix(self.canary, 'Transition', self.VENDORS);
      self.transformPrefix = h.getPrefix(self.canary, 'Transform', self.VENDORS);
      self.boxSizingPrefix = h.getPrefix(self.canary, 'BoxSizing', self.VENDORS);
      self.boxSizingProp = self.boxSizingPrefix ? self.boxSizingPrefix + h.pascalCase(self.BOX_SIZING_PROP) : self.BOX_SIZING_PROP;
      self.transitionProp = self.transitionPrefix ? self.transitionPrefix + h.pascalCase(self.TRANSITION_PROP) : self.TRANSITION_PROP;
      self.transformProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.TRANSFORM_PROP) : self.TRANSFORM_PROP;
      self.transformRule = self.transformPrefix ? '-' + self.transformPrefix + '-' + self.TRANSFORM_PROP : self.TRANSFORM_PROP;
      self.perspectiveProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_PROP) : self.PERSPECTIVE_PROP;
      self.perspectiveOriginProp = self.transformPrefix ? self.transformPrefix + h.pascalCase(self.PERSPECTIVE_ORIGIN_PROP) : self.PERSPECTIVE_ORIGIN_PROP;
      self.callActions('afterSetPrefixes', arguments);
    }
  });
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Has = function () {
    this.transitions = false;
    this.promises = false;
    h.seal(this);
  };
  // Assign a singleton instance to `mixitup.features` and initialise:
  mixitup.features = new mixitup.Features();
  mixitup.features.init();
  /**
  * A group of properties defining the mixer's animation and effects settings.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        animation
  * @namespace
  * @public
  * @since       2.0.0
  */
  mixitup.ConfigAnimation = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A boolean dictating whether or not animation should be enabled for the MixItUp instance.
    * If `false`, all operations will occur instantly and syncronously, although callback
    * functions and any returned promises will still be fulfilled.
    *
    * @example <caption>Example: Create a mixer with all animations disabled</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         enable: false
    *     }
    * });
    *
    * @name        enable
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.enable = true;
    /**
    * A string of one or more space-seperated properties to which transitions will be
    * applied for all filtering animations.
    *
    * Properties can be listed any order or combination, although they will be applied in a specific
    * predefined order to produce consistent results.
    *
    * To learn more about available effects, experiment with our <a href="https://www.kunkalabs.com/mixitup/">
    * sandbox demo</a> and try out the "Export config" button in the Animation options drop down.
    *
    * @example <caption>Example: Apply "fade" and "translateZ" effects to all animations</caption>
    * // As targets are filtered in and out, they will fade between
    * // opacity 1 and 0 and transform between translateZ(-100px) and
    * // translateZ(0).
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effects: 'fade translateZ(-100px)'
    *     }
    * });
    *
    * @name        effects
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {string}
    * @default     'fade scale'
    */
    this.effects = 'fade scale';
    /**
    * A string of one or more space-seperated effects to be applied only to filter-in
    * animations, overriding `config.animation.effects` if set.
    *
    * @example <caption>Example: Apply downwards vertical translate to targets being filtered in</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effectsIn: 'fade translateY(-100%)'
    *     }
    * });
    *
    * @name        effectsIn
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {string}
    * @default     ''
    */
    this.effectsIn = '';
    /**
    * A string of one or more space-seperated effects to be applied only to filter-out
    * animations, overriding `config.animation.effects` if set.
    *
    * @example <caption>Example: Apply upwards vertical translate to targets being filtered out</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effectsOut: 'fade translateY(-100%)'
    *     }
    * });
    *
    * @name        effectsOut
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {string}
    * @default     ''
    */
    this.effectsOut = '';
    /**
    * An integer dictating the duration of all MixItUp animations in milliseconds, not
    * including any additional delay apllied via the `'stagger'` effect.
    *
    * @example <caption>Example: Apply an animation duration of 200ms to all mixitup animations</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         duration: 200
    *     }
    * });
    *
    * @name        duration
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {number}
    * @default     600
    */
    this.duration = 600;
    /**
    * A valid CSS3 transition-timing function or shorthand. For a full list of accepted
    * values, visit <a href="http://easings.net" target="_blank">easings.net</a>.
    *
    * @example <caption>Example 1: Apply "ease-in-out" easing to all animations</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         easing: 'ease-in-out'
    *     }
    * });
    *
    * @example <caption>Example 2: Apply a custom "cubic-bezier" easing function to all animations</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
    *     }
    * });
    *
    * @name        easing
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {string}
    * @default     'ease'
    */
    this.easing = 'ease';
    /**
    * A boolean dictating whether or not to apply perspective to the MixItUp container
    * during animations. By default, perspective is always applied and creates the
    * illusion of three-dimensional space for effects such as `translateZ`, `rotateX`,
    * and `rotateY`.
    *
    * You may wish to disable this and define your own perspective settings via CSS.
    *
    * @example <caption>Example: Prevent perspective from being applied to any 3D transforms</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         applyPerspective: false
    *     }
    * });
    *
    * @name        applyPerspective
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {bolean}
    * @default     true
    */
    this.applyPerspective = true;
    /**
    * The perspective distance value to be applied to the container during animations,
    * affecting any 3D-transform-based effects.
    *
    * @example <caption>Example: Set a perspective distance of 2000px</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effects: 'rotateY(-25deg)',
    *         perspectiveDistance: '2000px'
    *     }
    * });
    *
    * @name        perspectiveDistance
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {string}
    * @default     '3000px'
    */
    this.perspectiveDistance = '3000px';
    /**
    * The perspective-origin value to be applied to the container during animations,
    * affecting any 3D-transform-based effects.
    *
    * @example <caption>Example: Set a perspective origin in the top-right of the container</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effects: 'transateZ(-200px)',
    *         perspectiveOrigin: '100% 0'
    *     }
    * });
    *
    * @name        perspectiveOrigin
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {string}
    * @default     '50% 50%'
    */
    this.perspectiveOrigin = '50% 50%';
    /**
    * A boolean dictating whether or not to enable the queuing of operations.
    *
    * If `true` (default), and a control is clicked or an API call is made while another
    * operation is progress, the operation will go into the queue and will be automatically exectuted
    * when the previous operaitons is finished.
    *
    * If `false`, any requested operations will be ignored, and the `onMixBusy` callback and `mixBusy`
    * event will be fired. If `debug.showWarnings` is enabled, a console warning will also occur.
    *
    * @example <caption>Example: Disable queuing</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         queue: false
    *     }
    * });
    *
    * @name        queue
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.queue = true;
    /**
    * An integer dictacting the maximum number of operations allowed in the queue at
    * any time, when queuing is enabled.
    *
    * @example <caption>Example: Allow a maximum of 5 operations in the queue at any time</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         queueLimit: 5
    *     }
    * });
    *
    * @name        queueLimit
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {number}
    * @default     3
    */
    this.queueLimit = 3;
    /**
    * A boolean dictating whether or not to transition the height and width of the
    * container as elements are filtered in and out. If disabled, the container height
    * will change abruptly.
    *
    * It may be desirable to disable this on mobile devices as the CSS `height` and
    * `width` properties do not receive GPU-acceleration and can therefore cause stuttering.
    *
    * @example <caption>Example 1: Disable the transitioning of the container height and/or width</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         animateResizeContainer: false
    *     }
    * });
    *
    * @example <caption>Example 2: Disable the transitioning of the container height and/or width for mobile devices only</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         animateResizeContainer: myFeatureTests.isMobile ? false : true
    *     }
    * });
    *
    * @name        animateResizeContainer
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.animateResizeContainer = true;
    /**
    * A boolean dictating whether or not to transition the height and width of target
    * elements as they change throughout the course of an animation.
    *
    * This is often a must for flex-box grid layouts where the size of target elements may change
    * depending on final their position in relation to their siblings, or for `.changeLayout()`
    * operations where the size of targets change between layouts.
    *
    * NB: This feature requires additional calculations and manipulation to non-hardware-accelerated
    * properties which may adversely affect performance on slower devices, and is therefore
    * disabled by default.
    *
    * @example <caption>Example: Enable the transitioning of target widths and heights</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         animateResizeTargets: true
    *     }
    * });
    *
    * @name        animateResizeTargets
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.animateResizeTargets = false;
    /**
    * A custom function used to manipulate the order in which the stagger delay is
    * incremented when using the ‘stagger’ effect.
    *
    * When using the 'stagger' effect, the delay applied to each target element is incremented
    * based on its index. You may create a custom function to manipulate the order in which the
    * delay is incremented and create engaging non-linear stagger effects.
    *
    * The function receives the index of the target element as a parameter, and must
    * return an integer which serves as the multiplier for the stagger delay.
    *
    * @example <caption>Example 1: Stagger target elements by column in a 3-column grid</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effects: 'fade stagger(100ms)',
    *         staggerSequence: function(i) {
    *             return i % 3;
    *         }
    *     }
    * });
    *
    * @example <caption>Example 2: Using an algorithm to produce a more complex sequence</caption>
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effects: 'fade stagger(100ms)',
    *         staggerSequence: function(i) {
    *             return (2*i) - (5*((i/3) - ((1/3) * (i%3))));
    *         }
    *     }
    * });
    *
    * @name        staggerSequence
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {function}
    * @default     null
    */
    this.staggerSequence = null;
    /**
    * A boolean dictating whether or not to reverse the direction of `translate`
    * and `rotate` transforms for elements being filtered out.
    *
    * It can be used to create carousel-like animations where elements enter and exit
    * from opposite directions. If enabled, the effect `translateX(-100%)` for elements
    * being filtered in would become `translateX(100%)` for targets being filtered out.
    *
    * This functionality can also be achieved by providing seperate effects
    * strings for `config.animation.effectsIn` and `config.animation.effectsOut`.
    *
    * @example <caption>Example: Reverse the desired direction on any translate/rotate effect for targets being filtered out</caption>
    * // Elements being filtered in will be translated from '100%' to '0' while
    * // elements being filtered out will be translated from 0 to '-100%'
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         effects: 'fade translateX(100%)',
    *         reverseOut: true,
    *         nudge: false // Disable nudging to create a carousel-like effect
    *     }
    * });
    *
    * @name        reverseOut
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.reverseOut = false;
    /**
    * A boolean dictating whether or not to "nudge" the animation path of targets
    * when they are being filtered in and out simulatenously.
    *
    * This has been the default behavior of MixItUp since version 1, but it
    * may be desirable to disable this effect when filtering directly from
    * one exclusive set of targets to a different exclusive set of targets,
    * to create a carousel-like effect, or a generally more subtle animation.
    *
    * @example <caption>Example: Disable the "nudging" of targets being filtered in and out simulatenously</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         nudge: false
    *     }
    * });
    *
    * @name        nudge
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.nudge = true;
    /**
    * A boolean dictating whether or not to clamp the height of the container while MixItUp's
    * geometry tests are carried out before an operation.
    *
    * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
    * height of the container might affect its vertical positioning in the viewport
    * (e.g. a vertically-centered container), this should be turned off to ensure accurate
    * test results and a smooth animation.
    *
    * @example <caption>Example: Disable container height-clamping</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         clampHeight: false
    *     }
    * });
    *
    * @name        clampHeight
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.clampHeight = true;
    /**
    * A boolean dictating whether or not to clamp the width of the container while MixItUp's
    * geometry tests are carried out before an operation.
    *
    * To prevent scroll-bar flicker, clamping is turned on by default. But in the case where the
    * width of the container might affect its horitzontal positioning in the viewport
    * (e.g. a horizontall-centered container), this should be turned off to ensure accurate
    * test results and a smooth animation.
    *
    * @example <caption>Example: Disable container width-clamping</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     animation: {
    *         clampWidth: false
    *     }
    * });
    *
    * @name        clampWidth
    * @memberof    mixitup.Config.animation
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.clampWidth = true;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigAnimation);
  mixitup.ConfigAnimation.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigAnimation.prototype.constructor = mixitup.ConfigAnimation;
  /**
  * A group of properties relating to the behavior of the Mixer.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        behavior
  * @namespace
  * @public
  * @since       3.1.12
  */
  mixitup.ConfigBehavior = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A boolean dictating whether to allow "live" sorting of the mixer.
    *
    * Because of the expensive nature of sorting, MixItUp makes use of several
    * internal optimizations to skip redundant sorting operations, such as when
    * the newly requested sort command is the same as the active one. The caveat
    * to this optimization is that "live" edits to the value of a target's sorting
    * attribute will be ignored when requesting a re-sort by the same attribute.
    *
    * By setting to `behavior.liveSort` to `true`, the mixer will always re-sort
    * regardless of whether or not the sorting attribute and order have changed.
    *
    * @example <caption>Example: Enabling `liveSort` to allow for re-sorting</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     behavior: {
    *         liveSort: true
    *     },
    *     load: {
    *         sort: 'edited:desc'
    *     }
    * });
    *
    * var target = containerEl.children[3];
    *
    * console.log(target.getAttribute('data-edited')); // '2015-04-24'
    *
    * target.setAttribute('data-edited', '2017-08-10'); // Update the target's edited date
    *
    * mixer.sort('edited:desc')
    *     .then(function(state) {
    *         // The target is now at the top of the list
    *
    *         console.log(state.targets[0] === target); // true
    *     });
    *
    * @name        liveSort
    * @memberof    mixitup.Config.behavior
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.liveSort = false;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigBehavior);
  mixitup.ConfigBehavior.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigBehavior.prototype.constructor = mixitup.ConfigBehavior;
  /**
  * A group of optional callback functions to be invoked at various
  * points within the lifecycle of a mixer operation.
  *
  * Each function is analogous to an event of the same name triggered from the
  * container element, and is invoked immediately after it.
  *
  * All callback functions receive the current `state` object as their first
  * argument, as well as other more specific arguments described below.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        callbacks
  * @namespace
  * @public
  * @since       2.0.0
  */
  mixitup.ConfigCallbacks = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A callback function invoked immediately after any MixItUp operation is requested
    * and before animations have begun.
    *
    * A second `futureState` argument is passed to the function which represents the final
    * state of the mixer once the requested operation has completed.
    *
    * @example <caption>Example: Adding an `onMixStart` callback function</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixStart: function(state, futureState) {
    *              console.log('Starting operation...');
    *         }
    *     }
    * });
    *
    * @name        onMixStart
    * @memberof    mixitup.Config.callbacks
    * @instance
    * @type        {function}
    * @default     null
    */
    this.onMixStart = null;
    /**
    * A callback function invoked when a MixItUp operation is requested while another
    * operation is in progress, and the animation queue is full, or queueing
    * is disabled.
    *
    * @example <caption>Example: Adding an `onMixBusy` callback function</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixBusy: function(state) {
    *              console.log('Mixer busy');
    *         }
    *     }
    * });
    *
    * @name        onMixBusy
    * @memberof    mixitup.Config.callbacks
    * @instance
    * @type        {function}
    * @default     null
    */
    this.onMixBusy = null;
    /**
    * A callback function invoked after any MixItUp operation has completed, and the
    * state has been updated.
    *
    * @example <caption>Example: Adding an `onMixEnd` callback function</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixEnd: function(state) {
    *              console.log('Operation complete');
    *         }
    *     }
    * });
    *
    * @name        onMixEnd
    * @memberof    mixitup.Config.callbacks
    * @instance
    * @type        {function}
    * @default     null
    */
    this.onMixEnd = null;
    /**
    * A callback function invoked whenever an operation "fails", i.e. no targets
    * could be found matching the requested filter.
    *
    * @example <caption>Example: Adding an `onMixFail` callback function</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixFail: function(state) {
    *              console.log('No items could be found matching the requested filter');
    *         }
    *     }
    * });
    *
    * @name        onMixFail
    * @memberof    mixitup.Config.callbacks
    * @instance
    * @type        {function}
    * @default     null
    */
    this.onMixFail = null;
    /**
    * A callback function invoked whenever a MixItUp control is clicked, and before its
    * respective operation is requested.
    *
    * The clicked element is assigned to the `this` keyword within the function. The original
    * click event is passed to the function as the second argument, which can be useful if
    * using `<a>` tags as controls where the default behavior needs to be prevented.
    *
    * Returning `false` from the callback will prevent the control click from triggering
    * an operation.
    *
    * @example <caption>Example 1: Adding an `onMixClick` callback function</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixClick: function(state, originalEvent) {
    *              console.log('The control "' + this.innerText + '" was clicked');
    *         }
    *     }
    * });
    *
    * @example <caption>Example 2: Using `onMixClick` to manipulate the original click event</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixClick: function(state, originalEvent) {
    *              // Prevent original click event from bubbling up:
    *              originalEvent.stopPropagation();
    *
    *              // Prevent default behavior of clicked element:
    *              originalEvent.preventDefault();
    *         }
    *     }
    * });
    *
    * @example <caption>Example 3: Using `onMixClick` to conditionally cancel operations</caption>
    * var mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixClick: function(state, originalEvent) {
    *              // Perform some conditional check:
    *
    *              if (myApp.isLoading) {
    *                  // By returning false, we can prevent the control click from triggering an operation.
    *
    *                  return false;
    *              }
    *         }
    *     }
    * });
    *
    * @name        onMixClick
    * @memberof    mixitup.Config.callbacks
    * @instance
    * @type        {function}
    * @default     null
    */
    this.onMixClick = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigCallbacks);
  mixitup.ConfigCallbacks.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigCallbacks.prototype.constructor = mixitup.ConfigCallbacks;
  /**
  * A group of properties relating to clickable control elements.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        controls
  * @namespace
  * @public
  * @since       2.0.0
  */
  mixitup.ConfigControls = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A boolean dictating whether or not controls should be enabled for the mixer instance.
    *
    * If `true` (default behavior), MixItUp will search the DOM for any clickable elements with
    * `data-filter`, `data-sort` or `data-toggle` attributes, and bind them for click events.
    *
    * If `false`, no click handlers will be bound, and all functionality must therefore be performed
    * via the mixer's API methods.
    *
    * If you do not intend to use the default controls, setting this property to `false` will
    * marginally improve the startup time of your mixer instance, and will also prevent any other active
    * mixer instances in the DOM which are bound to controls from controlling the instance.
    *
    * @example <caption>Example: Disabling controls</caption>
    * var mixer = mixitup(containerEl, {
    *     controls: {
    *         enable: false
    *     }
    * });
    *
    * // With the default controls disabled, we can only control
    * // the mixer via its API methods, e.g.:
    *
    * mixer.filter('.cat-1');
    *
    * @name        enable
    * @memberof    mixitup.Config.controls
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.enable = true;
    /**
    * A boolean dictating whether or not to use event delegation when binding click events
    * to the default controls.
    *
    * If `false` (default behavior), each control button in the DOM will be found and
    * individually bound when a mixer is instantiated, with their corresponding actions
    * cached for performance.
    *
    * If `true`, a single click handler will be applied to the `window` (or container element - see
    * `config.controls.scope`), and any click events triggered by elements with `data-filter`,
    * `data-sort` or `data-toggle` attributes present will be handled as they propagate upwards.
    *
    * If you require a user interface where control buttons may be added, removed, or changed during the
    * lifetime of a mixer, `controls.live` should be set to `true`. There is a marginal but unavoidable
    * performance deficit when using live controls, as the value of each control button must be read
    * from the DOM in real time once the click event has propagated.
    *
    * @example <caption>Example: Setting live controls</caption>
    * var mixer = mixitup(containerEl, {
    *     controls: {
    *         live: true
    *     }
    * });
    *
    * // Control buttons can now be added, remove and changed without breaking
    * // the mixer's UI
    *
    * @name        live
    * @memberof    mixitup.Config.controls
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.live = false;
    /**
    * A string dictating the "scope" to use when binding or querying the default controls. The available
    * values are `'global'` or `'local'`.
    *
    * When set to `'global'` (default behavior), MixItUp will query the entire document for control buttons
    * to bind, or delegate click events from (see `config.controls.live`).
    *
    * When set to `'local'`, MixItUp will only query (or bind click events to) its own container element.
    * This may be desireable if you require multiple active mixer instances within the same document, with
    * controls that would otherwise intefere with each other if scoped globally.
    *
    * Conversely, if you wish to control multiple instances with a single UI, you would create one
    * set of controls and keep the controls scope of each mixer set to `global`.
    *
    * @example <caption>Example: Setting 'local' scoped controls</caption>
    * var mixerOne = mixitup(containerOne, {
    *     controls: {
    *         scope: 'local'
    *     }
    * });
    *
    * var mixerTwo = mixitup(containerTwo, {
    *     controls: {
    *         scope: 'local'
    *     }
    * });
    *
    * // Both mixers can now exist within the same document with
    * // isolated controls placed within their container elements.
    *
    * @name        scope
    * @memberof    mixitup.Config.controls
    * @instance
    * @type        {string}
    * @default     'global'
    */
    this.scope = 'global';
    // enum: ['local' ,'global']
    /**
    * A string dictating the type of logic to apply when concatenating the filter selectors of
    * active toggle buttons (i.e. any clickable element with a `data-toggle` attribute).
    *
    * If set to `'or'` (default behavior), selectors will be concatenated together as
    * a comma-seperated list. For example:
    *
    * `'.cat-1, .cat-2'` (shows any elements matching `'.cat-1'` OR `'.cat-2'`)
    *
    * If set to `'and'`, selectors will be directly concatenated together. For example:
    *
    * `'.cat-1.cat-2'` (shows any elements which match both `'.cat-1'` AND `'.cat-2'`)
    *
    * @example <caption>Example: Setting "and" toggle logic</caption>
    * var mixer = mixitup(containerEl, {
    *     controls: {
    *         toggleLogic: 'and'
    *     }
    * });
    *
    * @name        toggleLogic
    * @memberof    mixitup.Config.controls
    * @instance
    * @type        {string}
    * @default     'or'
    */
    this.toggleLogic = 'or';
    // enum: ['or', 'and']
    /**
    * A string dictating the filter behavior when all toggles are inactive.
    *
    * When set to `'all'` (default behavior), *all* targets will be shown by default
    * when no toggles are active, or at the moment all active toggles are toggled off.
    *
    * When set to `'none'`, no targets will be shown by default when no toggles are
    * active, or at the moment all active toggles are toggled off.
    *
    * @example <caption>Example 1: Setting the default toggle behavior to `'all'`</caption>
    * var mixer = mixitup(containerEl, {
    *     controls: {
    *         toggleDefault: 'all'
    *     }
    * });
    *
    * mixer.toggleOn('.cat-2')
    *     .then(function() {
    *         // Deactivate all active toggles
    *
    *         return mixer.toggleOff('.cat-2')
    *     })
    *     .then(function(state) {
    *          console.log(state.activeFilter.selector); // 'all'
    *          console.log(state.totalShow); // 12
    *     });
    *
    * @example <caption>Example 2: Setting the default toggle behavior to `'none'`</caption>
    * var mixer = mixitup(containerEl, {
    *     controls: {
    *         toggleDefault: 'none'
    *     }
    * });
    *
    * mixer.toggleOn('.cat-2')
    *     .then(function() {
    *         // Deactivate all active toggles
    *
    *         return mixer.toggleOff('.cat-2')
    *     })
    *     .then(function(state) {
    *          console.log(state.activeFilter.selector); // 'none'
    *          console.log(state.totalShow); // 0
    *     });
    *
    * @name        toggleDefault
    * @memberof    mixitup.Config.controls
    * @instance
    * @type        {string}
    * @default     'all'
    */
    this.toggleDefault = 'all';
    // enum: ['all', 'none']
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigControls);
  mixitup.ConfigControls.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigControls.prototype.constructor = mixitup.ConfigControls;
  /**
  * A group of properties defining the output and structure of class names programmatically
  * added to controls and containers to reflect the state of the mixer.
  *
  * Most commonly, class names are added to controls by MixItUp to indicate that
  * the control is active so that it can be styled accordingly - `'mixitup-control-active'` by default.
  *
  * Using a "BEM" like structure, each classname is broken into the three parts:
  * a block namespace (`'mixitup'`), an element name (e.g. `'control'`), and an optional modifier
  * name (e.g. `'active'`) reflecting the state of the element.
  *
  * By default, each part of the classname is concatenated together using single hyphens as
  * delineators, but this can be easily customised to match the naming convention and style of
  * your project.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        classNames
  * @namespace
  * @public
  * @since       3.0.0
  */
  mixitup.ConfigClassNames = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * The "block" portion, or top-level namespace added to the start of any class names created by MixItUp.
    *
    * @example <caption>Example 1: changing the `config.classNames.block` value</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         block: 'portfolio'
    *     }
    * });
    *
    * // Active control output: "portfolio-control-active"
    *
    * @example <caption>Example 2: Removing `config.classNames.block`</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         block: ''
    *     }
    * });
    *
    * // Active control output: "control-active"
    *
    * @name        block
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'mixitup'
    */
    this.block = 'mixitup';
    /**
    * The "element" portion of the class name added to container.
    *
    * @name        elementContainer
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'container'
    */
    this.elementContainer = 'container';
    /**
    * The "element" portion of the class name added to filter controls.
    *
    * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
    * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
    *
    * @example <caption>Example 1: changing the `config.classNames.elementFilter` value</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         elementFilter: 'filter'
    *     }
    * });
    *
    * // Active filter output: "mixitup-filter-active"
    *
    * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementFilter` values</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         block: 'portfolio',
    *         elementFilter: 'filter'
    *     }
    * });
    *
    * // Active filter output: "portfolio-filter-active"
    *
    * @name        elementFilter
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'control'
    */
    this.elementFilter = 'control';
    /**
    * The "element" portion of the class name added to sort controls.
    *
    * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
    * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
    *
    * @example <caption>Example 1: changing the `config.classNames.elementSort` value</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         elementSort: 'sort'
    *     }
    * });
    *
    * // Active sort output: "mixitup-sort-active"
    *
    * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementSort` values</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         block: 'portfolio',
    *         elementSort: 'sort'
    *     }
    * });
    *
    * // Active sort output: "portfolio-sort-active"
    *
    * @name        elementSort
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'control'
    */
    this.elementSort = 'control';
    /**
    * The "element" portion of the class name added to multimix controls.
    *
    * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
    * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
    *
    * @example <caption>Example 1: changing the `config.classNames.elementMultimix` value</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         elementMultimix: 'multimix'
    *     }
    * });
    *
    * // Active multimix output: "mixitup-multimix-active"
    *
    * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementMultimix` values</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         block: 'portfolio',
    *         elementSort: 'multimix'
    *     }
    * });
    *
    * // Active multimix output: "portfolio-multimix-active"
    *
    * @name        elementMultimix
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'control'
    */
    this.elementMultimix = 'control';
    /**
    * The "element" portion of the class name added to toggle controls.
    *
    * By default, all filter, sort, multimix and toggle controls take the same element value of `'control'`, but
    * each type's element value can be individually overwritten to match the unique classNames of your controls as needed.
    *
    * @example <caption>Example 1: changing the `config.classNames.elementToggle` value</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         elementToggle: 'toggle'
    *     }
    * });
    *
    * // Active toggle output: "mixitup-toggle-active"
    *
    * @example <caption>Example 2: changing the `config.classNames.block` and `config.classNames.elementToggle` values</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         block: 'portfolio',
    *         elementToggle: 'toggle'
    *     }
    * });
    *
    * // Active toggle output: "portfolio-toggle-active"
    *
    * @name        elementToggle
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'control'
    */
    this.elementToggle = 'control';
    /**
    * The "modifier" portion of the class name added to active controls.
    * @name        modifierActive
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'active'
    */
    this.modifierActive = 'active';
    /**
    * The "modifier" portion of the class name added to disabled controls.
    *
    * @name        modifierDisabled
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'disabled'
    */
    this.modifierDisabled = 'disabled';
    /**
    * The "modifier" portion of the class name added to the container when in a "failed" state.
    *
    * @name        modifierFailed
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     'failed'
    */
    this.modifierFailed = 'failed';
    /**
    * The delineator used between the "block" and "element" portions of any class name added by MixItUp.
    *
    * If the block portion is ommited by setting it to an empty string, no delineator will be added.
    *
    * @example <caption>Example: changing the delineator to match BEM convention</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         delineatorElement: '__'
    *     }
    * });
    *
    * // example active control output: "mixitup__control-active"
    *
    * @name        delineatorElement
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     '-'
    */
    this.delineatorElement = '-';
    /**
    * The delineator used between the "element" and "modifier" portions of any class name added by MixItUp.
    *
    * If the element portion is ommited by setting it to an empty string, no delineator will be added.
    *
    * @example <caption>Example: changing both delineators to match BEM convention</caption>
    * var mixer = mixitup(containerEl, {
    *     classNames: {
    *         delineatorElement: '__'
    *         delineatorModifier: '--'
    *     }
    * });
    *
    * // Active control output: "mixitup__control--active"
    *
    * @name        delineatorModifier
    * @memberof    mixitup.Config.classNames
    * @instance
    * @type        {string}
    * @default     '-'
    */
    this.delineatorModifier = '-';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigClassNames);
  mixitup.ConfigClassNames.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigClassNames.prototype.constructor = mixitup.ConfigClassNames;
  /**
  * A group of properties relating to MixItUp's dataset API.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        data
  * @namespace
  * @public
  * @since       3.0.0
  */
  mixitup.ConfigData = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A string specifying the name of the key containing your data model's unique
    * identifier (UID). To use the dataset API, a UID key must be specified and
    * be present and unique on all objects in the dataset you provide to MixItUp.
    *
    * For example, if your dataset is made up of MongoDB documents, the UID
    * key would be `'id'` or `'_id'`.
    *
    * @example <caption>Example: Setting the UID to `'id'`</caption>
    * var mixer = mixitup(containerEl, {
    *     data: {
    *         uidKey: 'id'
    *     }
    * });
    *
    * @name        uidKey
    * @memberof    mixitup.Config.data
    * @instance
    * @type        {string}
    * @default     ''
    */
    this.uidKey = '';
    /**
    * A boolean dictating whether or not MixItUp should "dirty check" each object in
    * your dataset for changes whenever `.dataset()` is called, and re-render any targets
    * for which a change is found.
    *
    * Depending on the complexity of your data model, dirty checking can be expensive
    * and is therefore disabled by default.
    *
    * NB: For changes to be detected, a new immutable instance of the edited model must be
    * provided to mixitup, rather than manipulating properties on the existing instance.
    * If your changes are a result of a DB write and read, you will most likely be calling
    * `.dataset()` with a clean set of objects each time, so this will not be an issue.
    *
    * @example <caption>Example: Enabling dirty checking</caption>
    *
    * var myDataset = [
    *     {
    *         id: 0,
    *         title: "Blog Post Title 0"
    *         ...
    *     },
    *     {
    *         id: 1,
    *         title: "Blog Post Title 1"
    *         ...
    *     }
    * ];
    *
    * // Instantiate a mixer with a pre-loaded dataset, and a target renderer
    * // function defined
    *
    * var mixer = mixitup(containerEl, {
    *     data: {
    *         uidKey: 'id',
    *         dirtyCheck: true
    *     },
    *     load: {
    *         dataset: myDataset
    *     },
    *     render: {
    *         target: function() { ... }
    *     }
    * });
    *
    * // For illustration, we will clone and edit the second object in the dataset.
    * // NB: this would typically be done server-side in response to a DB update,
    * and then re-queried via an API.
    *
    * myDataset[1] = Object.assign({}, myDataset[1]);
    *
    * myDataset[1].title = 'Blog Post Title 11';
    *
    * mixer.dataset(myDataset)
    *    .then(function() {
    *        // the target with ID "1", will be re-rendered reflecting its new title
    *    });
    *
    * @name        dirtyCheck
    * @memberof    mixitup.Config.data
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.dirtyCheck = false;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigData);
  mixitup.ConfigData.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigData.prototype.constructor = mixitup.ConfigData;
  /**
  * A group of properties allowing the toggling of various debug features.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        debug
  * @namespace
  * @public
  * @since       3.0.0
  */
  mixitup.ConfigDebug = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A boolean dictating whether or not the mixer instance returned by the
    * `mixitup()` factory function should expose private properties and methods.
    *
    * By default, mixer instances only expose their public API, but enabling
    * debug mode will give you access to various mixer internals which may aid
    * in debugging, or the authoring of extensions.
    *
    * @example <caption>Example: Enabling debug mode</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     debug: {
    *         enable: true
    *     }
    * });
    *
    * // Private properties and methods will now be visible on the mixer instance:
    *
    * console.log(mixer);
    *
    * @name        enable
    * @memberof    mixitup.Config.debug
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.enable = false;
    /**
    * A boolean dictating whether or not warnings should be shown when various
    * common gotchas occur.
    *
    * Warnings are intended to provide insights during development when something
    * occurs that is not a fatal, but may indicate an issue with your integration,
    * and are therefore turned on by default. However, you may wish to disable
    * them in production.
    *
    * @example <caption>Example 1: Disabling warnings</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     debug: {
    *         showWarnings: false
    *     }
    * });
    *
    * @example <caption>Example 2: Disabling warnings based on environment</caption>
    *
    * var showWarnings = myAppConfig.environment === 'development' ? true : false;
    *
    * var mixer = mixitup(containerEl, {
    *     debug: {
    *         showWarnings: showWarnings
    *     }
    * });
    *
    * @name        showWarnings
    * @memberof    mixitup.Config.debug
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.showWarnings = true;
    /**
    * Used for server-side testing only.
    *
    * @private
    * @name        fauxAsync
    * @memberof    mixitup.Config.debug
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.fauxAsync = false;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigDebug);
  mixitup.ConfigDebug.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigDebug.prototype.constructor = mixitup.ConfigDebug;
  /**
  * A group of properties relating to the layout of the container.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        layout
  * @namespace
  * @public
  * @since       3.0.0
  */
  mixitup.ConfigLayout = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A boolean dictating whether or not mixitup should query all descendants
    * of the container for targets, or only immediate children.
    *
    * By default, mixitup will query all descendants matching the
    * `selectors.target` selector when indexing targets upon instantiation.
    * This allows for targets to be nested inside a sub-container which is
    * useful when ring-fencing targets from locally scoped controls in your
    * markup (see `controls.scope`).
    *
    * However, if you are building a more complex UI requiring the nesting
    * of mixers within mixers, you will most likely want to limit targets to
    * immediate children of the container by setting this property to `false`.
    *
    * @example <caption>Example: Restricting targets to immediate children</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     layout: {
    *         allowNestedTargets: false
    *     }
    * });
    *
    * @name        allowNestedTargets
    * @memberof    mixitup.Config.layout
    * @instance
    * @type        {boolean}
    * @default     true
    */
    this.allowNestedTargets = true;
    /**
    * A string specifying an optional class name to apply to the container when in
    * its default state.
    *
    * By changing this class name or adding a class name to the container via the
    * `.changeLayout()` API method, the CSS layout of the container can be changed,
    * and MixItUp will attemp to gracefully animate the container and its targets
    * between states.
    *
    * @example <caption>Example 1: Specifying a container class name</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     layout: {
    *         containerClassName: 'grid'
    *     }
    * });
    *
    * @example <caption>Example 2: Changing the default class name with `.changeLayout()`</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     layout: {
    *         containerClassName: 'grid'
    *     }
    * });
    *
    * mixer.changeLayout('list')
    *     .then(function(state) {
    *          console.log(state.activeContainerClass); // "list"
    *     });
    *
    * @name        containerClassName
    * @memberof    mixitup.Config.layout
    * @instance
    * @type        {string}
    * @default     ''
    */
    this.containerClassName = '';
    /**
    * A reference to a non-target sibling element after which to insert targets
    * when there are no targets in the container.
    *
    * @example <caption>Example: Setting a `siblingBefore` reference element</caption>
    *
    * var addButton = containerEl.querySelector('button');
    *
    * var mixer = mixitup(containerEl, {
    *     layout: {
    *         siblingBefore: addButton
    *     }
    * });
    *
    * @name        siblingBefore
    * @memberof    mixitup.Config.layout
    * @instance
    * @type        {HTMLElement}
    * @default     null
    */
    this.siblingBefore = null;
    /**
    * A reference to a non-target sibling element before which to insert targets
    * when there are no targets in the container.
    *
    * @example <caption>Example: Setting an `siblingAfter` reference element</caption>
    *
    * var gap = containerEl.querySelector('.gap');
    *
    * var mixer = mixitup(containerEl, {
    *     layout: {
    *         siblingAfter: gap
    *     }
    * });
    *
    * @name        siblingAfter
    * @memberof    mixitup.Config.layout
    * @instance
    * @type        {HTMLElement}
    * @default     null
    */
    this.siblingAfter = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigLayout);
  mixitup.ConfigLayout.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigLayout.prototype.constructor = mixitup.ConfigLayout;
  /**
  * A group of properties defining the initial state of the mixer on load (instantiation).
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        load
  * @namespace
  * @public
  * @since       2.0.0
  */
  mixitup.ConfigLoad = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A string defining any filtering to be statically applied to the mixer on load.
    * As per the `.filter()` API, this can be any valid selector string, or the
    * values `'all'` or `'none'`.
    *
    * @example <caption>Example 1: Defining an initial filter selector to be applied on load</caption>
    *
    * // The mixer will show only those targets matching '.category-a' on load.
    *
    * var mixer = mixitup(containerEl, {
    *     load: {
    *         filter: '.category-a'
    *     }
    * });
    *
    * @example <caption>Example 2: Hiding all targets on load</caption>
    *
    * // The mixer will show hide all targets on load.
    *
    * var mixer = mixitup(containerEl, {
    *     load: {
    *         filter: 'none'
    *     }
    * });
    *
    * @name        filter
    * @memberof    mixitup.Config.load
    * @instance
    * @type        {string}
    * @default     'all'
    */
    this.filter = 'all';
    /**
    * A string defining any sorting to be statically applied to the mixer on load.
    * As per the `.sort()` API, this should be a valid "sort string" made up of
    * an attribute to sort by (or `'default'`) followed by an optional sorting
    * order, or the value `'random'`;
    *
    * @example <caption>Example: Defining sorting to be applied on load</caption>
    *
    * // The mixer will sort the container by the value of the `data-published-date`
    * // attribute, in descending order.
    *
    * var mixer = mixitup(containerEl, {
    *     load: {
    *         sort: 'published-date:desc'
    *     }
    * });
    *
    * @name        sort
    * @memberof    mixitup.Config.load
    * @instance
    * @type        {string}
    * @default     'default:asc'
    */
    this.sort = 'default:asc';
    /**
    * An array of objects representing the underlying data of any pre-rendered targets,
    * when using the `.dataset()` API.
    *
    * NB: If targets are pre-rendered when the mixer is instantiated, this must be set.
    *
    * @example <caption>Example: Defining the initial underyling dataset</caption>
    *
    * var myDataset = [
    *     {
    *         id: 0,
    *         title: "Blog Post Title 0",
    *         ...
    *     },
    *     {
    *         id: 1,
    *         title: "Blog Post Title 1",
    *         ...
    *     }
    * ];
    *
    * var mixer = mixitup(containerEl, {
    *     data: {
    *         uidKey: 'id'
    *     },
    *     load: {
    *         dataset: myDataset
    *     }
    * });
    *
    * @name        dataset
    * @memberof    mixitup.Config.load
    * @instance
    * @type        {Array.<object>}
    * @default     null
    */
    this.dataset = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigLoad);
  mixitup.ConfigLoad.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigLoad.prototype.constructor = mixitup.ConfigLoad;
  /**
  * A group of properties defining the selectors used to query elements within a mixitup container.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        selectors
  * @namespace
  * @public
  * @since       3.0.0
  */
  mixitup.ConfigSelectors = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A selector string used to query and index target elements within the container.
    *
    * By default, the class selector `'.mix'` is used, but this can be changed to an
    * attribute or element selector to match the style of your project.
    *
    * @example <caption>Example 1: Changing the target selector</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     selectors: {
    *         target: '.portfolio-item'
    *     }
    * });
    *
    * @example <caption>Example 2: Using an attribute selector as a target selector</caption>
    *
    * // The mixer will search for any children with the attribute `data-ref="mix"`
    *
    * var mixer = mixitup(containerEl, {
    *     selectors: {
    *         target: '[data-ref="mix"]'
    *     }
    * });
    *
    * @name        target
    * @memberof    mixitup.Config.selectors
    * @instance
    * @type        {string}
    * @default     '.mix'
    */
    this.target = '.mix';
    /**
    * A optional selector string used to add further specificity to the querying of control elements,
    * in addition to their mandatory data attribute (e.g. `data-filter`, `data-toggle`, `data-sort`).
    *
    * This can be used if other elements in your document must contain the above attributes
    * (e.g. for use in third-party scripts), and would otherwise interfere with MixItUp. Adding
    * an additional `control` selector of your choice allows MixItUp to restrict event handling
    * to only those elements matching the defined selector.
    *
    * @name        control
    * @memberof    mixitup.Config.selectors
    * @instance
    * @type        {string}
    * @default     ''
    *
    * @example <caption>Example 1: Adding a `selectors.control` selector</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     selectors: {
    *         control: '.mixitup-control'
    *     }
    * });
    *
    * // Will not be handled:
    * // <button data-filter=".category-a"></button>
    *
    * // Will be handled:
    * // <button class="mixitup-control" data-filter=".category-a"></button>
    */
    this.control = '';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigSelectors);
  mixitup.ConfigSelectors.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigSelectors.prototype.constructor = mixitup.ConfigSelectors;
  /**
  * A group of optional render functions for creating and updating elements.
  *
  * All render functions receive a data object, and should return a valid HTML string.
  *
  * @constructor
  * @memberof    mixitup.Config
  * @name        render
  * @namespace
  * @public
  * @since       3.0.0
  */
  mixitup.ConfigRender = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A function returning an HTML string representing a target element, or a reference to a
    * single DOM element.
    *
    * The function is invoked as part of the `.dataset()` API, whenever a new item is added
    * to the dataset, or an item in the dataset changes (if `dataset.dirtyCheck` is enabled).
    *
    * The function receives the relevant dataset item as its first parameter.
    *
    * @example <caption>Example 1: Using string concatenation</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     render: {
    *         target: function(item) {
    *             return (
    *                 '&lt;div class="mix"&gt;' +
    *                     '&lt;h2&gt;' + item.title + '&lt;/h2&gt;' +
    *                 '&lt;/div&gt;'
    *             );
    *         }
    *     }
    * });
    *
    * @example <caption>Example 2: Using an ES2015 template literal</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     render: {
    *         target: function(item) {
    *             return (
    *                 `&lt;div class="mix"&gt;
    *                     &lt;h2&gt;${item.title}&lt;/h2&gt;
    *                  &lt;/div&gt;`
    *             );
    *         }
    *     }
    * });
    *
    * @example <caption>Example 3: Using a Handlebars template</caption>
    *
    * var targetTemplate = Handlebars.compile('&lt;div class="mix"&gt;&lt;h2&gt;{{title}}&lt;/h2&gt;&lt;/div&gt;');
    *
    * var mixer = mixitup(containerEl, {
    *     render: {
    *         target: targetTemplate
    *     }
    * });
    *
    * @example <caption>Example 4: Returning a DOM element</caption>
    *
    * var mixer = mixitup(containerEl, {
    *     render: {
    *         target: function(item) {
    *              // Create a single element using your framework's built-in renderer
    *
    *              var el = ...
    *
    *              return el;
    *         }
    *     }
    * });
    *
    * @name        target
    * @memberof    mixitup.Config.render
    * @instance
    * @type        {function}
    * @default     'null'
    */
    this.target = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigRender);
  mixitup.ConfigRender.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigRender.prototype.constructor = mixitup.ConfigRender;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.ConfigTemplates = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ConfigTemplates);
  mixitup.ConfigTemplates.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ConfigTemplates.prototype.constructor = mixitup.ConfigTemplates;
  /**
  * `mixitup.Config` is an interface used for customising the functionality of a
  * mixer instance. It is organised into several semantically distinct sub-objects,
  * each one pertaining to a particular aspect of MixItUp functionality.
  *
  * An object literal containing any or all of the available properies,
  * known as the "configuration object", can be passed as the second parameter to
  * the `mixitup` factory function when creating a mixer instance to customise its
  * functionality as needed.
  *
  * If no configuration object is passed, the mixer instance will take on the default
  * configuration values detailed below.
  *
  * @example <caption>Example 1: Creating and passing the configuration object</caption>
  * // Create a configuration object with desired values
  *
  * var config = {
  *     animation: {
  *         enable: false
  *     },
  *     selectors: {
  *         target: '.item'
  *     }
  * };
  *
  * // Pass the configuration object to the mixitup factory function
  *
  * var mixer = mixitup(containerEl, config);
  *
  * @example <caption>Example 2: Passing the configuration object inline</caption>
  * // Typically, the configuration object is passed inline for brevity.
  *
  * var mixer = mixitup(containerEl, {
  *     controls: {
  *         live: true,
  *         toggleLogic: 'and'
  *     }
  * });
  *
  *
  * @constructor
  * @memberof    mixitup
  * @namespace
  * @public
  * @since       2.0.0
  */
  mixitup.Config = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.animation = new mixitup.ConfigAnimation();
    this.behavior = new mixitup.ConfigBehavior();
    this.callbacks = new mixitup.ConfigCallbacks();
    this.controls = new mixitup.ConfigControls();
    this.classNames = new mixitup.ConfigClassNames();
    this.data = new mixitup.ConfigData();
    this.debug = new mixitup.ConfigDebug();
    this.layout = new mixitup.ConfigLayout();
    this.load = new mixitup.ConfigLoad();
    this.selectors = new mixitup.ConfigSelectors();
    this.render = new mixitup.ConfigRender();
    this.templates = new mixitup.ConfigTemplates();
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Config);
  mixitup.Config.prototype = Object.create(mixitup.Base.prototype);
  mixitup.Config.prototype.constructor = mixitup.Config;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.MixerDom = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.document = null;
    this.body = null;
    this.container = null;
    this.parent = null;
    this.targets = [];
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.MixerDom);
  mixitup.MixerDom.prototype = Object.create(mixitup.Base.prototype);
  mixitup.MixerDom.prototype.constructor = mixitup.MixerDom;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.UiClassNames = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.base = '';
    this.active = '';
    this.disabled = '';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.UiClassNames);
  mixitup.UiClassNames.prototype = Object.create(mixitup.Base.prototype);
  mixitup.UiClassNames.prototype.constructor = mixitup.UiClassNames;
  /**
  * An object into which all arbitrary arguments sent to '.dataset()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandDataset = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.dataset = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandDataset);
  mixitup.CommandDataset.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandDataset.prototype.constructor = mixitup.CommandDataset;
  /**
  * An object into which all arbitrary arguments sent to '.multimix()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandMultimix = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.filter = null;
    this.sort = null;
    this.insert = null;
    this.remove = null;
    this.changeLayout = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandMultimix);
  mixitup.CommandMultimix.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandMultimix.prototype.constructor = mixitup.CommandMultimix;
  /**
  * An object into which all arbitrary arguments sent to '.filter()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandFilter = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.selector = '';
    this.collection = null;
    this.action = 'show';
    // enum: ['show', 'hide']
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandFilter);
  mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;
  /**
  * An object into which all arbitrary arguments sent to '.sort()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandSort = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.sortString = '';
    this.attribute = '';
    this.order = 'asc';
    this.collection = null;
    this.next = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandSort);
  mixitup.CommandSort.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandSort.prototype.constructor = mixitup.CommandSort;
  /**
  * An object into which all arbitrary arguments sent to '.insert()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandInsert = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.index = 0;
    this.collection = [];
    this.position = 'before';
    // enum: ['before', 'after']
    this.sibling = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandInsert);
  mixitup.CommandInsert.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandInsert.prototype.constructor = mixitup.CommandInsert;
  /**
  * An object into which all arbitrary arguments sent to '.remove()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandRemove = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.targets = [];
    this.collection = [];
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandRemove);
  mixitup.CommandRemove.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandRemove.prototype.constructor = mixitup.CommandRemove;
  /**
  * An object into which all arbitrary arguments sent to '.changeLayout()' are mapped.
  *
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.CommandChangeLayout = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.containerClassName = '';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.CommandChangeLayout);
  mixitup.CommandChangeLayout.prototype = Object.create(mixitup.Base.prototype);
  mixitup.CommandChangeLayout.prototype.constructor = mixitup.CommandChangeLayout;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  * @param       {string}        type
  * @param       {string}        selector
  * @param       {boolean}       [live]
  * @param       {string}        [parent]
  *     An optional string representing the name of the mixer.dom property containing a reference to a parent element.
  */
  mixitup.ControlDefinition = function (type, selector, live, parent) {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.type = type;
    this.selector = selector;
    this.live = live || false;
    this.parent = parent || '';
    this.callActions('afterConstruct');
    h.freeze(this);
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.ControlDefinition);
  mixitup.ControlDefinition.prototype = Object.create(mixitup.Base.prototype);
  mixitup.ControlDefinition.prototype.constructor = mixitup.ControlDefinition;
  mixitup.controlDefinitions = [];
  mixitup.controlDefinitions.push(new mixitup.ControlDefinition('multimix', '[data-filter][data-sort]'));
  mixitup.controlDefinitions.push(new mixitup.ControlDefinition('filter', '[data-filter]'));
  mixitup.controlDefinitions.push(new mixitup.ControlDefinition('sort', '[data-sort]'));
  mixitup.controlDefinitions.push(new mixitup.ControlDefinition('toggle', '[data-toggle]'));
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Control = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.el = null;
    this.selector = '';
    this.bound = [];
    this.pending = -1;
    this.type = '';
    this.status = 'inactive';
    // enum: ['inactive', 'active', 'disabled', 'live']
    this.filter = '';
    this.sort = '';
    this.canDisable = false;
    this.handler = null;
    this.classNames = new mixitup.UiClassNames();
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Control);
  mixitup.Control.prototype = Object.create(mixitup.Base.prototype);
  h.extend(mixitup.Control.prototype, /** @lends mixitup.Control*/
  {
    constructor: mixitup.Control,
    /**
    * @private
    * @param {HTMLElement} el
    * @param {string}      type
    * @param {string}      selector
    */
    init: function (el, type, selector) {
      var self = this;
      this.callActions('beforeInit', arguments);
      self.el = el;
      self.type = type;
      self.selector = selector;
      if (self.selector) {
        self.status = 'live';
      } else {
        self.canDisable = typeof self.el.disable === 'boolean';
        switch (self.type) {
          case 'filter':
            self.filter = self.el.getAttribute('data-filter');
            break;
          case 'toggle':
            self.filter = self.el.getAttribute('data-toggle');
            break;
          case 'sort':
            self.sort = self.el.getAttribute('data-sort');
            break;
          case 'multimix':
            self.filter = self.el.getAttribute('data-filter');
            self.sort = self.el.getAttribute('data-sort');
            break;
        }
      }
      self.bindClick();
      mixitup.controls.push(self);
      this.callActions('afterInit', arguments);
    },
    /**
    * @private
    * @param  {mixitup.Mixer} mixer
    * @return {boolean}
    */
    isBound: function (mixer) {
      var self = this, isBound = false;
      this.callActions('beforeIsBound', arguments);
      isBound = self.bound.indexOf(mixer) > -1;
      return self.callFilters('afterIsBound', isBound, arguments);
    },
    /**
    * @private
    * @param  {mixitup.Mixer} mixer
    * @return {void}
    */
    addBinding: function (mixer) {
      var self = this;
      this.callActions('beforeAddBinding', arguments);
      if (!self.isBound()) {
        self.bound.push(mixer);
      }
      this.callActions('afterAddBinding', arguments);
    },
    /**
    * @private
    * @param  {mixitup.Mixer} mixer
    * @return {void}
    */
    removeBinding: function (mixer) {
      var self = this, removeIndex = -1;
      this.callActions('beforeRemoveBinding', arguments);
      if ((removeIndex = self.bound.indexOf(mixer)) > -1) {
        self.bound.splice(removeIndex, 1);
      }
      if (self.bound.length < 1) {
        // No bindings exist, unbind event click handlers
        self.unbindClick();
        // Remove from `mixitup.controls` list
        removeIndex = mixitup.controls.indexOf(self);
        mixitup.controls.splice(removeIndex, 1);
        if (self.status === 'active') {
          self.renderStatus(self.el, 'inactive');
        }
      }
      this.callActions('afterRemoveBinding', arguments);
    },
    /**
    * @private
    * @return {void}
    */
    bindClick: function () {
      var self = this;
      this.callActions('beforeBindClick', arguments);
      self.handler = function (e) {
        self.handleClick(e);
      };
      h.on(self.el, 'click', self.handler);
      this.callActions('afterBindClick', arguments);
    },
    /**
    * @private
    * @return {void}
    */
    unbindClick: function () {
      var self = this;
      this.callActions('beforeUnbindClick', arguments);
      h.off(self.el, 'click', self.handler);
      self.handler = null;
      this.callActions('afterUnbindClick', arguments);
    },
    /**
    * @private
    * @param   {MouseEvent} e
    * @return  {void}
    */
    handleClick: function (e) {
      var self = this, button = null, mixer = null, isActive = false, returnValue = void 0, command = {}, clone = null, commands = [], i = -1;
      this.callActions('beforeHandleClick', arguments);
      this.pending = 0;
      mixer = self.bound[0];
      if (!self.selector) {
        button = self.el;
      } else {
        button = h.closestParent(e.target, mixer.config.selectors.control + self.selector, true, mixer.dom.document);
      }
      if (!button) {
        self.callActions('afterHandleClick', arguments);
        return;
      }
      switch (self.type) {
        case 'filter':
          command.filter = self.filter || button.getAttribute('data-filter');
          break;
        case 'sort':
          command.sort = self.sort || button.getAttribute('data-sort');
          break;
        case 'multimix':
          command.filter = self.filter || button.getAttribute('data-filter');
          command.sort = self.sort || button.getAttribute('data-sort');
          break;
        case 'toggle':
          command.filter = self.filter || button.getAttribute('data-toggle');
          if (self.status === 'live') {
            isActive = h.hasClass(button, self.classNames.active);
          } else {
            isActive = self.status === 'active';
          }
          break;
      }
      for (i = 0; i < self.bound.length; i++) {
        // Create a clone of the command for each bound mixer instance
        clone = new mixitup.CommandMultimix();
        h.extend(clone, command);
        commands.push(clone);
      }
      commands = self.callFilters('commandsHandleClick', commands, arguments);
      self.pending = self.bound.length;
      for (i = 0; mixer = self.bound[i]; i++) {
        command = commands[i];
        if (!command) {
          // An extension may set a command null to indicate that the click should not be handled
          continue;
        }
        if (!mixer.lastClicked) {
          mixer.lastClicked = button;
        }
        mixitup.events.fire('mixClick', mixer.dom.container, {
          state: mixer.state,
          instance: mixer,
          originalEvent: e,
          control: mixer.lastClicked
        }, mixer.dom.document);
        if (typeof mixer.config.callbacks.onMixClick === 'function') {
          returnValue = mixer.config.callbacks.onMixClick.call(mixer.lastClicked, mixer.state, e, mixer);
          if (returnValue === false) {
            // User has returned `false` from the callback, so do not handle click
            continue;
          }
        }
        if (self.type === 'toggle') {
          isActive ? mixer.toggleOff(command.filter) : mixer.toggleOn(command.filter);
        } else {
          mixer.multimix(command);
        }
      }
      this.callActions('afterHandleClick', arguments);
    },
    /**
    * @param   {object}          command
    * @param   {Array<string>}   toggleArray
    * @return  {void}
    */
    update: function (command, toggleArray) {
      var self = this, actions = new mixitup.CommandMultimix();
      self.callActions('beforeUpdate', arguments);
      self.pending--;
      self.pending = Math.max(0, self.pending);
      if (self.pending > 0) return;
      if (self.status === 'live') {
        // Live control (status unknown)
        self.updateLive(command, toggleArray);
      } else {
        // Static control
        actions.sort = self.sort;
        actions.filter = self.filter;
        self.callFilters('actionsUpdate', actions, arguments);
        self.parseStatusChange(self.el, command, actions, toggleArray);
      }
      self.callActions('afterUpdate', arguments);
    },
    /**
    * @param   {mixitup.CommandMultimix} command
    * @param   {Array<string>}           toggleArray
    * @return  {void}
    */
    updateLive: function (command, toggleArray) {
      var self = this, controlButtons = null, actions = null, button = null, i = -1;
      self.callActions('beforeUpdateLive', arguments);
      if (!self.el) return;
      controlButtons = self.el.querySelectorAll(self.selector);
      for (i = 0; button = controlButtons[i]; i++) {
        actions = new mixitup.CommandMultimix();
        switch (self.type) {
          case 'filter':
            actions.filter = button.getAttribute('data-filter');
            break;
          case 'sort':
            actions.sort = button.getAttribute('data-sort');
            break;
          case 'multimix':
            actions.filter = button.getAttribute('data-filter');
            actions.sort = button.getAttribute('data-sort');
            break;
          case 'toggle':
            actions.filter = button.getAttribute('data-toggle');
            break;
        }
        actions = self.callFilters('actionsUpdateLive', actions, arguments);
        self.parseStatusChange(button, command, actions, toggleArray);
      }
      self.callActions('afterUpdateLive', arguments);
    },
    /**
    * @param   {HTMLElement}             button
    * @param   {mixitup.CommandMultimix} command
    * @param   {mixitup.CommandMultimix} actions
    * @param   {Array<string>}           toggleArray
    * @return  {void}
    */
    parseStatusChange: function (button, command, actions, toggleArray) {
      var self = this, alias = '', toggle = '', i = -1;
      self.callActions('beforeParseStatusChange', arguments);
      switch (self.type) {
        case 'filter':
          if (command.filter === actions.filter) {
            self.renderStatus(button, 'active');
          } else {
            self.renderStatus(button, 'inactive');
          }
          break;
        case 'multimix':
          if (command.sort === actions.sort && command.filter === actions.filter) {
            self.renderStatus(button, 'active');
          } else {
            self.renderStatus(button, 'inactive');
          }
          break;
        case 'sort':
          if (command.sort.match(/:asc/g)) {
            alias = command.sort.replace(/:asc/g, '');
          }
          if (command.sort === actions.sort || alias === actions.sort) {
            self.renderStatus(button, 'active');
          } else {
            self.renderStatus(button, 'inactive');
          }
          break;
        case 'toggle':
          if (toggleArray.length < 1) self.renderStatus(button, 'inactive');
          if (command.filter === actions.filter) {
            self.renderStatus(button, 'active');
          }
          for (i = 0; i < toggleArray.length; i++) {
            toggle = toggleArray[i];
            if (toggle === actions.filter) {
              // Button matches one active toggle
              self.renderStatus(button, 'active');
              break;
            }
            self.renderStatus(button, 'inactive');
          }
          break;
      }
      self.callActions('afterParseStatusChange', arguments);
    },
    /**
    * @param   {HTMLElement}   button
    * @param   {string}        status
    * @return  {void}
    */
    renderStatus: function (button, status) {
      var self = this;
      self.callActions('beforeRenderStatus', arguments);
      switch (status) {
        case 'active':
          h.addClass(button, self.classNames.active);
          h.removeClass(button, self.classNames.disabled);
          if (self.canDisable) self.el.disabled = false;
          break;
        case 'inactive':
          h.removeClass(button, self.classNames.active);
          h.removeClass(button, self.classNames.disabled);
          if (self.canDisable) self.el.disabled = false;
          break;
        case 'disabled':
          if (self.canDisable) self.el.disabled = true;
          h.addClass(button, self.classNames.disabled);
          h.removeClass(button, self.classNames.active);
          break;
      }
      if (self.status !== 'live') {
        // Update the control's status propery if not live
        self.status = status;
      }
      self.callActions('afterRenderStatus', arguments);
    }
  });
  mixitup.controls = [];
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.StyleData = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.x = 0;
    this.y = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.marginRight = 0;
    this.marginBottom = 0;
    this.opacity = 0;
    this.scale = new mixitup.TransformData();
    this.translateX = new mixitup.TransformData();
    this.translateY = new mixitup.TransformData();
    this.translateZ = new mixitup.TransformData();
    this.rotateX = new mixitup.TransformData();
    this.rotateY = new mixitup.TransformData();
    this.rotateZ = new mixitup.TransformData();
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.StyleData);
  mixitup.StyleData.prototype = Object.create(mixitup.Base.prototype);
  mixitup.StyleData.prototype.constructor = mixitup.StyleData;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.TransformData = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.value = 0;
    this.unit = '';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.TransformData);
  mixitup.TransformData.prototype = Object.create(mixitup.Base.prototype);
  mixitup.TransformData.prototype.constructor = mixitup.TransformData;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.TransformDefaults = function () {
    mixitup.StyleData.apply(this);
    this.callActions('beforeConstruct');
    this.scale.value = 0.01;
    this.scale.unit = '';
    this.translateX.value = 20;
    this.translateX.unit = 'px';
    this.translateY.value = 20;
    this.translateY.unit = 'px';
    this.translateZ.value = 20;
    this.translateZ.unit = 'px';
    this.rotateX.value = 90;
    this.rotateX.unit = 'deg';
    this.rotateY.value = 90;
    this.rotateY.unit = 'deg';
    this.rotateX.value = 90;
    this.rotateX.unit = 'deg';
    this.rotateZ.value = 180;
    this.rotateZ.unit = 'deg';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.TransformDefaults);
  mixitup.TransformDefaults.prototype = Object.create(mixitup.StyleData.prototype);
  mixitup.TransformDefaults.prototype.constructor = mixitup.TransformDefaults;
  /**
  * @private
  * @static
  * @since   3.0.0
  * @type    {mixitup.TransformDefaults}
  */
  mixitup.transformDefaults = new mixitup.TransformDefaults();
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.EventDetail = function () {
    this.state = null;
    this.futureState = null;
    this.instance = null;
    this.originalEvent = null;
  };
  /**
  * The `mixitup.Events` class contains all custom events dispatched by MixItUp at various
  * points within the lifecycle of a mixer operation.
  *
  * Each event is analogous to the callback function of the same name defined in
  * the `callbacks` configuration object, and is triggered immediately before it.
  *
  * Events are always triggered from the container element on which MixItUp is instantiated
  * upon.
  *
  * As with any event, registered event handlers receive the event object as a parameter
  * which includes a `detail` property containting references to the current `state`,
  * the `mixer` instance, and other event-specific properties described below.
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @public
  * @since       3.0.0
  */
  mixitup.Events = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * A custom event triggered immediately after any MixItUp operation is requested
    * and before animations have begun.
    *
    * The `mixStart` event also exposes a `futureState` property via the
    * `event.detail` object, which represents the final state of the mixer once
    * the requested operation has completed.
    *
    * @name        mixStart
    * @memberof    mixitup.Events
    * @static
    * @type        {CustomEvent}
    */
    this.mixStart = null;
    /**
    * A custom event triggered when a MixItUp operation is requested while another
    * operation is in progress, and the animation queue is full, or queueing
    * is disabled.
    *
    * @name        mixBusy
    * @memberof    mixitup.Events
    * @static
    * @type        {CustomEvent}
    */
    this.mixBusy = null;
    /**
    * A custom event triggered after any MixItUp operation has completed, and the
    * state has been updated.
    *
    * @name        mixEnd
    * @memberof    mixitup.Events
    * @static
    * @type        {CustomEvent}
    */
    this.mixEnd = null;
    /**
    * A custom event triggered whenever a filter operation "fails", i.e. no targets
    * could be found matching the requested filter.
    *
    * @name        mixFail
    * @memberof    mixitup.Events
    * @static
    * @type        {CustomEvent}
    */
    this.mixFail = null;
    /**
    * A custom event triggered whenever a MixItUp control is clicked, and before its
    * respective operation is requested.
    *
    * This event also exposes an `originalEvent` property via the `event.detail`
    * object, which holds a reference to the original click event.
    *
    * @name        mixClick
    * @memberof    mixitup.Events
    * @static
    * @type        {CustomEvent}
    */
    this.mixClick = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Events);
  mixitup.Events.prototype = Object.create(mixitup.Base.prototype);
  mixitup.Events.prototype.constructor = mixitup.Events;
  /**
  * @private
  * @param   {string}      eventType
  * @param   {Element}     el
  * @param   {object}      detail
  * @param   {Document}    [doc]
  */
  mixitup.Events.prototype.fire = function (eventType, el, detail, doc) {
    var self = this, event = null, eventDetail = new mixitup.EventDetail();
    self.callActions('beforeFire', arguments);
    if (typeof self[eventType] === 'undefined') {
      throw new Error('Event type "' + eventType + '" not found.');
    }
    eventDetail.state = new mixitup.State();
    h.extend(eventDetail.state, detail.state);
    if (detail.futureState) {
      eventDetail.futureState = new mixitup.State();
      h.extend(eventDetail.futureState, detail.futureState);
    }
    eventDetail.instance = detail.instance;
    if (detail.originalEvent) {
      eventDetail.originalEvent = detail.originalEvent;
    }
    event = h.getCustomEvent(eventType, eventDetail, doc);
    self.callFilters('eventFire', event, arguments);
    el.dispatchEvent(event);
  };
  // Asign a singleton instance to `mixitup.events`:
  mixitup.events = new mixitup.Events();
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.QueueItem = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.args = [];
    this.instruction = null;
    this.triggerElement = null;
    this.deferred = null;
    this.isToggling = false;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.QueueItem);
  mixitup.QueueItem.prototype = Object.create(mixitup.Base.prototype);
  mixitup.QueueItem.prototype.constructor = mixitup.QueueItem;
  /**
  * The `mixitup.Mixer` class is used to hold discreet, user-configured
  * instances of MixItUp on a provided container element.
  *
  * Mixer instances are returned whenever the `mixitup()` factory function is called,
  * which expose a range of methods enabling API-based filtering, sorting,
  * insertion, removal and more.
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @public
  * @since       3.0.0
  */
  mixitup.Mixer = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.config = new mixitup.Config();
    this.id = '';
    this.isBusy = false;
    this.isToggling = false;
    this.incPadding = true;
    this.controls = [];
    this.targets = [];
    this.origOrder = [];
    this.cache = {};
    this.toggleArray = [];
    this.targetsMoved = 0;
    this.targetsImmovable = 0;
    this.targetsBound = 0;
    this.targetsDone = 0;
    this.staggerDuration = 0;
    this.effectsIn = null;
    this.effectsOut = null;
    this.transformIn = [];
    this.transformOut = [];
    this.queue = [];
    this.state = null;
    this.lastOperation = null;
    this.lastClicked = null;
    this.userCallback = null;
    this.userDeferred = null;
    this.dom = new mixitup.MixerDom();
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Mixer);
  mixitup.Mixer.prototype = Object.create(mixitup.Base.prototype);
  h.extend(mixitup.Mixer.prototype, /** @lends mixitup.Mixer*/
  {
    constructor: mixitup.Mixer,
    /**
    * @private
    * @instance
    * @since 3.0.0
    * @param {HTMLElement} container
    * @param {HTMLElement} document
    * @param {string}      id
    * @param {object}      [config]
    */
    attach: function (container, document, id, config) {
      var self = this, target = null, i = -1;
      self.callActions('beforeAttach', arguments);
      self.id = id;
      if (config) {
        h.extend(self.config, config, true, true);
      }
      self.sanitizeConfig();
      self.cacheDom(container, document);
      if (self.config.layout.containerClassName) {
        h.addClass(self.dom.container, self.config.layout.containerClassName);
      }
      if (!mixitup.features.has.transitions) {
        self.config.animation.enable = false;
      }
      if (typeof window.console === 'undefined') {
        self.config.debug.showWarnings = false;
      }
      if (self.config.data.uidKey) {
        // If the dataset API is in use, force disable controls
        self.config.controls.enable = false;
      }
      self.indexTargets();
      self.state = self.getInitialState();
      for (i = 0; target = self.lastOperation.toHide[i]; i++) {
        target.hide();
      }
      if (self.config.controls.enable) {
        self.initControls();
        self.buildToggleArray(null, self.state);
        self.updateControls({
          filter: self.state.activeFilter,
          sort: self.state.activeSort
        });
      }
      self.parseEffects();
      self.callActions('afterAttach', arguments);
    },
    /**
    * @private
    * @instance
    * @since 3.0.0
    * @return {void}
    */
    sanitizeConfig: function () {
      var self = this;
      self.callActions('beforeSanitizeConfig', arguments);
      // Sanitize enum/string config options
      self.config.controls.scope = self.config.controls.scope.toLowerCase().trim();
      self.config.controls.toggleLogic = self.config.controls.toggleLogic.toLowerCase().trim();
      self.config.controls.toggleDefault = self.config.controls.toggleDefault.toLowerCase().trim();
      self.config.animation.effects = self.config.animation.effects.trim();
      self.callActions('afterSanitizeConfig', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @return  {mixitup.State}
    */
    getInitialState: function () {
      var self = this, state = new mixitup.State(), operation = new mixitup.Operation();
      self.callActions('beforeGetInitialState', arguments);
      // Map initial values into a mock state object in order to construct an operation
      state.activeContainerClassName = self.config.layout.containerClassName;
      if (self.config.load.dataset) {
        // Dataset API
        if (!self.config.data.uidKey || typeof self.config.data.uidKey !== 'string') {
          throw new TypeError(mixitup.messages.errorConfigDataUidKeyNotSet());
        }
        operation.startDataset = operation.newDataset = state.activeDataset = self.config.load.dataset.slice();
        operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
        operation.show = self.targets.slice();
        state = self.callFilters('stateGetInitialState', state, arguments);
      } else {
        // DOM API
        state.activeFilter = self.parseFilterArgs([self.config.load.filter]).command;
        state.activeSort = self.parseSortArgs([self.config.load.sort]).command;
        state.totalTargets = self.targets.length;
        state = self.callFilters('stateGetInitialState', state, arguments);
        if (state.activeSort.collection || state.activeSort.attribute || state.activeSort.order === 'random' || state.activeSort.order === 'desc') {
          // Sorting on load
          operation.newSort = state.activeSort;
          self.sortOperation(operation);
          self.printSort(false, operation);
          self.targets = operation.newOrder;
        } else {
          operation.startOrder = operation.newOrder = self.targets;
        }
        operation.startFilter = operation.newFilter = state.activeFilter;
        operation.startSort = operation.newSort = state.activeSort;
        operation.startContainerClassName = operation.newContainerClassName = state.activeContainerClassName;
        if (operation.newFilter.selector === 'all') {
          operation.newFilter.selector = self.config.selectors.target;
        } else if (operation.newFilter.selector === 'none') {
          operation.newFilter.selector = '';
        }
      }
      operation = self.callFilters('operationGetInitialState', operation, [state]);
      self.lastOperation = operation;
      if (operation.newFilter) {
        self.filterOperation(operation);
      }
      state = self.buildState(operation);
      return state;
    },
    /**
    * Caches references of DOM elements neccessary for the mixer's functionality.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {HTMLElement}       el
    * @param   {HTMLHtmlElement}   document
    * @return  {void}
    */
    cacheDom: function (el, document) {
      var self = this;
      self.callActions('beforeCacheDom', arguments);
      self.dom.document = document;
      self.dom.body = self.dom.document.querySelector('body');
      self.dom.container = el;
      self.dom.parent = el;
      self.callActions('afterCacheDom', arguments);
    },
    /**
    * Indexes all child elements of the mixer matching the `selectors.target`
    * selector, instantiating a mixitup.Target for each one.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @return  {void}
    */
    indexTargets: function () {
      var self = this, target = null, el = null, dataset = null, i = -1;
      self.callActions('beforeIndexTargets', arguments);
      self.dom.targets = self.config.layout.allowNestedTargets ? self.dom.container.querySelectorAll(self.config.selectors.target) : h.children(self.dom.container, self.config.selectors.target, self.dom.document);
      self.dom.targets = h.arrayFromList(self.dom.targets);
      self.targets = [];
      if ((dataset = self.config.load.dataset) && dataset.length !== self.dom.targets.length) {
        throw new Error(mixitup.messages.errorDatasetPrerenderedMismatch());
      }
      if (self.dom.targets.length) {
        for (i = 0; el = self.dom.targets[i]; i++) {
          target = new mixitup.Target();
          target.init(el, self, dataset ? dataset[i] : void 0);
          target.isInDom = true;
          self.targets.push(target);
        }
        self.dom.parent = self.dom.targets[0].parentElement === self.dom.container ? self.dom.container : self.dom.targets[0].parentElement;
      }
      self.origOrder = self.targets;
      self.callActions('afterIndexTargets', arguments);
    },
    initControls: function () {
      var self = this, definition = '', controlElements = null, el = null, parent = null, delagators = null, control = null, i = -1, j = -1;
      self.callActions('beforeInitControls', arguments);
      switch (self.config.controls.scope) {
        case 'local':
          parent = self.dom.container;
          break;
        case 'global':
          parent = self.dom.document;
          break;
        default:
          throw new Error(mixitup.messages.errorConfigInvalidControlsScope());
      }
      for (i = 0; definition = mixitup.controlDefinitions[i]; i++) {
        if (self.config.controls.live || definition.live) {
          if (definition.parent) {
            delagators = self.dom[definition.parent];
            if (!delagators || delagators.length < 0) continue;
            if (typeof delagators.length !== 'number') {
              delagators = [delagators];
            }
          } else {
            delagators = [parent];
          }
          for (j = 0; el = delagators[j]; j++) {
            control = self.getControl(el, definition.type, definition.selector);
            self.controls.push(control);
          }
        } else {
          controlElements = parent.querySelectorAll(self.config.selectors.control + definition.selector);
          for (j = 0; el = controlElements[j]; j++) {
            control = self.getControl(el, definition.type, '');
            if (!control) continue;
            self.controls.push(control);
          }
        }
      }
      self.callActions('afterInitControls', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {HTMLElement} el
    * @param   {string}      type
    * @param   {string}      selector
    * @return  {mixitup.Control|null}
    */
    getControl: function (el, type, selector) {
      var self = this, control = null, i = -1;
      self.callActions('beforeGetControl', arguments);
      if (!selector) {
        // Static controls only
        for (i = 0; control = mixitup.controls[i]; i++) {
          if (control.el === el && control.isBound(self)) {
            // Control already bound to this mixer (as another type).
            // NB: This prevents duplicate controls from being registered where a selector
            // might collide, eg: "[data-filter]" and "[data-filter][data-sort]"
            return self.callFilters('controlGetControl', null, arguments);
          } else if (control.el === el && control.type === type && control.selector === selector) {
            // Another mixer is already using this control, add this mixer as a binding
            control.addBinding(self);
            return self.callFilters('controlGetControl', control, arguments);
          }
        }
      }
      // Create new control
      control = new mixitup.Control();
      control.init(el, type, selector);
      control.classNames.base = h.getClassname(self.config.classNames, type);
      control.classNames.active = h.getClassname(self.config.classNames, type, self.config.classNames.modifierActive);
      control.classNames.disabled = h.getClassname(self.config.classNames, type, self.config.classNames.modifierDisabled);
      // Add a reference to this mixer as a binding
      control.addBinding(self);
      return self.callFilters('controlGetControl', control, arguments);
    },
    /**
    * Creates a compound selector by joining the `toggleArray` value as per the
    * defined toggle logic.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @return  {string}
    */
    getToggleSelector: function () {
      var self = this, delineator = self.config.controls.toggleLogic === 'or' ? ', ' : '', toggleSelector = '';
      self.callActions('beforeGetToggleSelector', arguments);
      self.toggleArray = h.clean(self.toggleArray);
      toggleSelector = self.toggleArray.join(delineator);
      if (toggleSelector === '') {
        toggleSelector = self.config.controls.toggleDefault;
      }
      return self.callFilters('selectorGetToggleSelector', toggleSelector, arguments);
    },
    /**
    * Breaks compound selector strings in an array of discreet selectors,
    * as per the active `controls.toggleLogic` configuration option. Accepts
    * either a dynamic command object, or a state object.
    *
    * @private
    * @instance
    * @since   2.0.0
    * @param   {object}        [command]
    * @param   {mixitup.State} [state]
    * @return  {void}
    */
    buildToggleArray: function (command, state) {
      var self = this, activeFilterSelector = '';
      self.callActions('beforeBuildToggleArray', arguments);
      if (command && command.filter) {
        activeFilterSelector = command.filter.selector.replace(/\s/g, '');
      } else if (state) {
        activeFilterSelector = state.activeFilter.selector.replace(/\s/g, '');
      } else {
        return;
      }
      if (activeFilterSelector === self.config.selectors.target || activeFilterSelector === 'all') {
        activeFilterSelector = '';
      }
      if (self.config.controls.toggleLogic === 'or') {
        self.toggleArray = activeFilterSelector.split(',');
      } else {
        self.toggleArray = self.splitCompoundSelector(activeFilterSelector);
      }
      self.toggleArray = h.clean(self.toggleArray);
      self.callActions('afterBuildToggleArray', arguments);
    },
    /**
    * Takes a compound selector (e.g. `.cat-1.cat-2`, `[data-cat="1"][data-cat="2"]`)
    * and breaks into its individual selectors.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {string} compoundSelector
    * @return  {string[]}
    */
    splitCompoundSelector: function (compoundSelector) {
      // Break at a `.` or `[`, capturing the delineator
      var partials = compoundSelector.split(/([\.\[])/g), toggleArray = [], selector = '', i = -1;
      if (partials[0] === '') {
        partials.shift();
      }
      for (i = 0; i < partials.length; i++) {
        if (i % 2 === 0) {
          selector = '';
        }
        selector += partials[i];
        if (i % 2 !== 0) {
          toggleArray.push(selector);
        }
      }
      return toggleArray;
    },
    /**
    * Updates controls to their active/inactive state based on the command or
    * current state of the mixer.
    *
    * @private
    * @instance
    * @since   2.0.0
    * @param   {object} command
    * @return  {void}
    */
    updateControls: function (command) {
      var self = this, control = null, output = new mixitup.CommandMultimix(), i = -1;
      self.callActions('beforeUpdateControls', arguments);
      // Sanitise to defaults
      if (command.filter) {
        output.filter = command.filter.selector;
      } else {
        output.filter = self.state.activeFilter.selector;
      }
      if (command.sort) {
        output.sort = self.buildSortString(command.sort);
      } else {
        output.sort = self.buildSortString(self.state.activeSort);
      }
      if (output.filter === self.config.selectors.target) {
        output.filter = 'all';
      }
      if (output.filter === '') {
        output.filter = 'none';
      }
      h.freeze(output);
      for (i = 0; control = self.controls[i]; i++) {
        control.update(output, self.toggleArray);
      }
      self.callActions('afterUpdateControls', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {mixitup.CommandSort}   command
    * @return  {string}
    */
    buildSortString: function (command) {
      var self = this;
      var output = '';
      output += command.sortString;
      if (command.next) {
        output += ' ' + self.buildSortString(command.next);
      }
      return output;
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {object}        command
    * @param   {Operation}     operation
    * @return  {Promise.<mixitup.State>}
    */
    insertTargets: function (command, operation) {
      var self = this, nextSibling = null, insertionIndex = -1, frag = null, target = null, el = null, i = -1;
      self.callActions('beforeInsertTargets', arguments);
      if (typeof command.index === 'undefined') command.index = 0;
      nextSibling = self.getNextSibling(command.index, command.sibling, command.position);
      frag = self.dom.document.createDocumentFragment();
      if (nextSibling) {
        insertionIndex = h.index(nextSibling, self.config.selectors.target);
      } else {
        insertionIndex = self.targets.length;
      }
      if (command.collection) {
        for (i = 0; el = command.collection[i]; i++) {
          if (self.dom.targets.indexOf(el) > -1) {
            throw new Error(mixitup.messages.errorInsertPreexistingElement());
          }
          // Ensure elements are hidden when they are added to the DOM, so they can
          // be animated in gracefully
          el.style.display = 'none';
          frag.appendChild(el);
          frag.appendChild(self.dom.document.createTextNode(' '));
          if (!h.isElement(el, self.dom.document) || !el.matches(self.config.selectors.target)) continue;
          target = new mixitup.Target();
          target.init(el, self);
          target.isInDom = true;
          self.targets.splice(insertionIndex, 0, target);
          insertionIndex++;
        }
        self.dom.parent.insertBefore(frag, nextSibling);
      }
      // Since targets have been added, the original order must be updated
      operation.startOrder = self.origOrder = self.targets;
      self.callActions('afterInsertTargets', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Number}      [index]
    * @param   {Element}     [sibling]
    * @param   {string}      [position]
    * @return  {Element}
    */
    getNextSibling: function (index, sibling, position) {
      var self = this, element = null;
      index = Math.max(index, 0);
      if (sibling && position === 'before') {
        // Explicit sibling
        element = sibling;
      } else if (sibling && position === 'after') {
        // Explicit sibling
        element = sibling.nextElementSibling || null;
      } else if (self.targets.length > 0 && typeof index !== 'undefined') {
        // Index and targets exist
        element = index < self.targets.length || !self.targets.length ? self.targets[index].dom.el : self.targets[self.targets.length - 1].dom.el.nextElementSibling;
      } else if (self.targets.length === 0 && self.dom.parent.children.length > 0) {
        // No targets but other siblings
        if (self.config.layout.siblingAfter) {
          element = self.config.layout.siblingAfter;
        } else if (self.config.layout.siblingBefore) {
          element = self.config.layout.siblingBefore.nextElementSibling;
        } else {
          self.dom.parent.children[0];
        }
      } else {
        element === null;
      }
      return self.callFilters('elementGetNextSibling', element, arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    filterOperation: function (operation) {
      var self = this, testResult = false, index = -1, action = '', target = null, i = -1;
      self.callActions('beforeFilterOperation', arguments);
      action = operation.newFilter.action;
      for (i = 0; target = operation.newOrder[i]; i++) {
        if (operation.newFilter.collection) {
          // show via collection
          testResult = operation.newFilter.collection.indexOf(target.dom.el) > -1;
        } else {
          // show via selector
          if (operation.newFilter.selector === '') {
            testResult = false;
          } else {
            testResult = target.dom.el.matches(operation.newFilter.selector);
          }
        }
        self.evaluateHideShow(testResult, target, action, operation);
      }
      if (operation.toRemove.length) {
        for (i = 0; target = operation.show[i]; i++) {
          if (operation.toRemove.indexOf(target) > -1) {
            // If any shown targets should be removed, move them into the toHide array
            operation.show.splice(i, 1);
            if ((index = operation.toShow.indexOf(target)) > -1) {
              operation.toShow.splice(index, 1);
            }
            operation.toHide.push(target);
            operation.hide.push(target);
            i--;
          }
        }
      }
      operation.matching = operation.show.slice();
      if (operation.show.length === 0 && operation.newFilter.selector !== '' && self.targets.length !== 0) {
        operation.hasFailed = true;
      }
      self.callActions('afterFilterOperation', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {boolean}   testResult
    * @param   {Element}   target
    * @param   {string}    action
    * @param   {Operation} operation
    * @return  {void}
    */
    evaluateHideShow: function (testResult, target, action, operation) {
      var self = this, filteredTestResult = false, args = Array.prototype.slice.call(arguments, 1);
      filteredTestResult = self.callFilters('testResultEvaluateHideShow', testResult, args);
      self.callActions('beforeEvaluateHideShow', arguments);
      if (filteredTestResult === true && action === 'show' || filteredTestResult === false && action === 'hide') {
        operation.show.push(target);
        !target.isShown && operation.toShow.push(target);
      } else {
        operation.hide.push(target);
        target.isShown && operation.toHide.push(target);
      }
      self.callActions('afterEvaluateHideShow', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    sortOperation: function (operation) {
      var self = this, newOrder = [], target = null, el = null, i = -1;
      self.callActions('beforeSortOperation', arguments);
      operation.startOrder = self.targets;
      if (operation.newSort.collection) {
        // Sort by collection
        newOrder = [];
        for (i = 0; el = operation.newSort.collection[i]; i++) {
          if (self.dom.targets.indexOf(el) < 0) {
            throw new Error(mixitup.messages.errorSortNonExistentElement());
          }
          target = new mixitup.Target();
          target.init(el, self);
          target.isInDom = true;
          newOrder.push(target);
        }
        operation.newOrder = newOrder;
      } else if (operation.newSort.order === 'random') {
        // Sort random
        operation.newOrder = h.arrayShuffle(operation.startOrder);
      } else if (operation.newSort.attribute === '') {
        // Sort by default
        operation.newOrder = self.origOrder.slice();
        if (operation.newSort.order === 'desc') {
          operation.newOrder.reverse();
        }
      } else {
        // Sort by attribute
        operation.newOrder = operation.startOrder.slice();
        operation.newOrder.sort(function (a, b) {
          return self.compare(a, b, operation.newSort);
        });
      }
      if (h.isEqualArray(operation.newOrder, operation.startOrder)) {
        operation.willSort = false;
      }
      self.callActions('afterSortOperation', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {mixitup.Target}        a
    * @param   {mixitup.Target}        b
    * @param   {mixitup.CommandSort}   command
    * @return  {Number}
    */
    compare: function (a, b, command) {
      var self = this, order = command.order, attrA = self.getAttributeValue(a, command.attribute), attrB = self.getAttributeValue(b, command.attribute);
      if (isNaN(attrA * 1) || isNaN(attrB * 1)) {
        attrA = attrA.toLowerCase();
        attrB = attrB.toLowerCase();
      } else {
        attrA = attrA * 1;
        attrB = attrB * 1;
      }
      if (attrA < attrB) {
        return order === 'asc' ? -1 : 1;
      }
      if (attrA > attrB) {
        return order === 'asc' ? 1 : -1;
      }
      if (attrA === attrB && command.next) {
        return self.compare(a, b, command.next);
      }
      return 0;
    },
    /**
    * Reads the values of any data attributes present the provided target element
    * which match the current sort command.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {mixitup.Target}    target
    * @param   {string}            [attribute]
    * @return  {(String|Number)}
    */
    getAttributeValue: function (target, attribute) {
      var self = this, value = '';
      value = target.dom.el.getAttribute('data-' + attribute);
      if (value === null) {
        if (self.config.debug.showWarnings) {
          // Encourage users to assign values to all targets to avoid erroneous sorting
          // when types are mixed
          console.warn(mixitup.messages.warningInconsistentSortingAttributes({
            attribute: 'data-' + attribute
          }));
        }
      }
      // If an attribute is not present, return 0 as a safety value
      return self.callFilters('valueGetAttributeValue', value || 0, arguments);
    },
    /**
    * Inserts elements into the DOM in the appropriate
    * order using a document fragment for minimal
    * DOM thrashing
    *
    * @private
    * @instance
    * @since   2.0.0
    * @param   {boolean}   isResetting
    * @param   {Operation} operation
    * @return  {void}
    */
    printSort: function (isResetting, operation) {
      var self = this, startOrder = isResetting ? operation.newOrder : operation.startOrder, newOrder = isResetting ? operation.startOrder : operation.newOrder, nextSibling = startOrder.length ? startOrder[startOrder.length - 1].dom.el.nextElementSibling : null, frag = window.document.createDocumentFragment(), whitespace = null, target = null, el = null, i = -1;
      self.callActions('beforePrintSort', arguments);
      // Empty the container
      for (i = 0; target = startOrder[i]; i++) {
        el = target.dom.el;
        if (el.style.position === 'absolute') continue;
        h.removeWhitespace(el.previousSibling);
        el.parentElement.removeChild(el);
      }
      whitespace = nextSibling ? nextSibling.previousSibling : self.dom.parent.lastChild;
      if (whitespace && whitespace.nodeName === '#text') {
        h.removeWhitespace(whitespace);
      }
      for (i = 0; target = newOrder[i]; i++) {
        // Add targets into a document fragment
        el = target.dom.el;
        if (h.isElement(frag.lastChild)) {
          frag.appendChild(window.document.createTextNode(' '));
        }
        frag.appendChild(el);
      }
      // Insert the document fragment into the container
      // before any other non-target elements
      if (self.dom.parent.firstChild && self.dom.parent.firstChild !== nextSibling) {
        frag.insertBefore(window.document.createTextNode(' '), frag.childNodes[0]);
      }
      if (nextSibling) {
        frag.appendChild(window.document.createTextNode(' '));
        self.dom.parent.insertBefore(frag, nextSibling);
      } else {
        self.dom.parent.appendChild(frag);
      }
      self.callActions('afterPrintSort', arguments);
    },
    /**
    * Parses user-defined sort strings (i.e. `default:asc`) into sort commands objects.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {string}                sortString
    * @param   {mixitup.CommandSort}   command
    * @return  {mixitup.CommandSort}
    */
    parseSortString: function (sortString, command) {
      var self = this, rules = sortString.split(' '), current = command, rule = [], i = -1;
      // command.sortString = sortString;
      for (i = 0; i < rules.length; i++) {
        rule = rules[i].split(':');
        current.sortString = rules[i];
        current.attribute = h.dashCase(rule[0]);
        current.order = rule[1] || 'asc';
        switch (current.attribute) {
          case 'default':
            // treat "default" as sorting by no attribute
            current.attribute = '';
            break;
          case 'random':
            // treat "random" as an order not an attribute
            current.attribute = '';
            current.order = 'random';
            break;
        }
        if (!current.attribute || current.order === 'random') break;
        if (i < rules.length - 1) {
          // Embed reference to the next command
          current.next = new mixitup.CommandSort();
          h.freeze(current);
          current = current.next;
        }
      }
      return self.callFilters('commandsParseSort', command, arguments);
    },
    /**
    * Parses all effects out of the user-defined `animation.effects` string into
    * their respective properties and units.
    *
    * @private
    * @instance
    * @since   2.0.0
    * @return  {void}
    */
    parseEffects: function () {
      var self = this, transformName = '', effectsIn = self.config.animation.effectsIn || self.config.animation.effects, effectsOut = self.config.animation.effectsOut || self.config.animation.effects;
      self.callActions('beforeParseEffects', arguments);
      self.effectsIn = new mixitup.StyleData();
      self.effectsOut = new mixitup.StyleData();
      self.transformIn = [];
      self.transformOut = [];
      self.effectsIn.opacity = self.effectsOut.opacity = 1;
      self.parseEffect('fade', effectsIn, self.effectsIn, self.transformIn);
      self.parseEffect('fade', effectsOut, self.effectsOut, self.transformOut, true);
      for (transformName in mixitup.transformDefaults) {
        if (!(mixitup.transformDefaults[transformName] instanceof mixitup.TransformData)) {
          continue;
        }
        self.parseEffect(transformName, effectsIn, self.effectsIn, self.transformIn);
        self.parseEffect(transformName, effectsOut, self.effectsOut, self.transformOut, true);
      }
      self.parseEffect('stagger', effectsIn, self.effectsIn, self.transformIn);
      self.parseEffect('stagger', effectsOut, self.effectsOut, self.transformOut, true);
      self.callActions('afterParseEffects', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {string}    effectName
    * @param   {string}    effectString
    * @param   {StyleData} effects
    * @param   {String[]}  transform
    * @param   {boolean}   [isOut]
    */
    parseEffect: function (effectName, effectString, effects, transform, isOut) {
      var self = this, re = /\(([^)]+)\)/, propIndex = -1, str = '', match = [], val = '', units = ['%', 'px', 'em', 'rem', 'vh', 'vw', 'deg'], unit = '', i = -1;
      self.callActions('beforeParseEffect', arguments);
      if (typeof effectString !== 'string') {
        throw new TypeError(mixitup.messages.errorConfigInvalidAnimationEffects());
      }
      if (effectString.indexOf(effectName) < 0) {
        // The effect is not present in the effects string
        if (effectName === 'stagger') {
          // Reset stagger to 0
          self.staggerDuration = 0;
        }
        return;
      }
      // The effect is present
      propIndex = effectString.indexOf(effectName + '(');
      if (propIndex > -1) {
        // The effect has a user defined value in parentheses
        // Extract from the first parenthesis to the end of string
        str = effectString.substring(propIndex);
        // Match any number of characters between "(" and ")"
        match = re.exec(str);
        val = match[1];
      }
      switch (effectName) {
        case 'fade':
          effects.opacity = val ? parseFloat(val) : 0;
          break;
        case 'stagger':
          self.staggerDuration = val ? parseFloat(val) : 100;
          // TODO: Currently stagger must be applied globally, but
          // if seperate values are specified for in/out, this should
          // be respected
          break;
        default:
          // All other effects are transforms following the same structure
          if (isOut && self.config.animation.reverseOut && effectName !== 'scale') {
            effects[effectName].value = (val ? parseFloat(val) : mixitup.transformDefaults[effectName].value) * -1;
          } else {
            effects[effectName].value = val ? parseFloat(val) : mixitup.transformDefaults[effectName].value;
          }
          if (val) {
            for (i = 0; unit = units[i]; i++) {
              if (val.indexOf(unit) > -1) {
                effects[effectName].unit = unit;
                break;
              }
            }
          } else {
            effects[effectName].unit = mixitup.transformDefaults[effectName].unit;
          }
          transform.push(effectName + '(' + effects[effectName].value + effects[effectName].unit + ')');
      }
      self.callActions('afterParseEffect', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {State}
    */
    buildState: function (operation) {
      var self = this, state = new mixitup.State(), target = null, i = -1;
      self.callActions('beforeBuildState', arguments);
      // Map target elements into state arrays.
      // the real target objects should never be exposed
      for (i = 0; target = self.targets[i]; i++) {
        if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
          state.targets.push(target.dom.el);
        }
      }
      for (i = 0; target = operation.matching[i]; i++) {
        state.matching.push(target.dom.el);
      }
      for (i = 0; target = operation.show[i]; i++) {
        state.show.push(target.dom.el);
      }
      for (i = 0; target = operation.hide[i]; i++) {
        if (!operation.toRemove.length || operation.toRemove.indexOf(target) < 0) {
          state.hide.push(target.dom.el);
        }
      }
      state.id = self.id;
      state.container = self.dom.container;
      state.activeFilter = operation.newFilter;
      state.activeSort = operation.newSort;
      state.activeDataset = operation.newDataset;
      state.activeContainerClassName = operation.newContainerClassName;
      state.hasFailed = operation.hasFailed;
      state.totalTargets = self.targets.length;
      state.totalShow = operation.show.length;
      state.totalHide = operation.hide.length;
      state.totalMatching = operation.matching.length;
      state.triggerElement = operation.triggerElement;
      return self.callFilters('stateBuildState', state, arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {boolean}   shouldAnimate
    * @param   {Operation} operation
    * @return  {void}
    */
    goMix: function (shouldAnimate, operation) {
      var self = this, deferred = null;
      self.callActions('beforeGoMix', arguments);
      // If the animation duration is set to 0ms,
      // or no effects specified,
      // or the container is hidden
      // then abort animation
      if (!self.config.animation.duration || !self.config.animation.effects || !h.isVisible(self.dom.container)) {
        shouldAnimate = false;
      }
      if (!operation.toShow.length && !operation.toHide.length && !operation.willSort && !operation.willChangeLayout) {
        // If nothing to show or hide, and not sorting or
        // changing layout
        shouldAnimate = false;
      }
      if (!operation.startState.show.length && !operation.show.length) {
        // If nothing currently shown, nothing to show
        shouldAnimate = false;
      }
      mixitup.events.fire('mixStart', self.dom.container, {
        state: operation.startState,
        futureState: operation.newState,
        instance: self
      }, self.dom.document);
      if (typeof self.config.callbacks.onMixStart === 'function') {
        self.config.callbacks.onMixStart.call(self.dom.container, operation.startState, operation.newState, self);
      }
      h.removeClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
      if (!self.userDeferred) {
        // Queue empty, no pending operations
        deferred = self.userDeferred = h.defer(mixitup.libraries);
      } else {
        // Use existing deferred
        deferred = self.userDeferred;
      }
      self.isBusy = true;
      if (!shouldAnimate || !mixitup.features.has.transitions) {
        // Abort
        if (self.config.debug.fauxAsync) {
          setTimeout(function () {
            self.cleanUp(operation);
          }, self.config.animation.duration);
        } else {
          self.cleanUp(operation);
        }
        return self.callFilters('promiseGoMix', deferred.promise, arguments);
      }
      // If we should animate and the platform supports transitions, go for it
      if (window.pageYOffset !== operation.docState.scrollTop) {
        window.scrollTo(operation.docState.scrollLeft, operation.docState.scrollTop);
      }
      if (self.config.animation.applyPerspective) {
        self.dom.parent.style[mixitup.features.perspectiveProp] = self.config.animation.perspectiveDistance;
        self.dom.parent.style[mixitup.features.perspectiveOriginProp] = self.config.animation.perspectiveOrigin;
      }
      if (self.config.animation.animateResizeContainer && operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) {
        self.dom.parent.style.height = operation.startHeight + 'px';
      }
      if (self.config.animation.animateResizeContainer && operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) {
        self.dom.parent.style.width = operation.startWidth + 'px';
      }
      if (operation.startHeight === operation.newHeight) {
        self.dom.parent.style.height = operation.startHeight + 'px';
      }
      if (operation.startWidth === operation.newWidth) {
        self.dom.parent.style.width = operation.startWidth + 'px';
      }
      if (operation.startHeight === operation.newHeight && operation.startWidth === operation.newWidth) {
        self.dom.parent.style.overflow = 'hidden';
      }
      requestAnimationFrame(function () {
        self.moveTargets(operation);
      });
      return self.callFilters('promiseGoMix', deferred.promise, arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    getStartMixData: function (operation) {
      var self = this, parentStyle = window.getComputedStyle(self.dom.parent), parentRect = self.dom.parent.getBoundingClientRect(), target = null, data = {}, i = -1, boxSizing = parentStyle[mixitup.features.boxSizingProp];
      self.incPadding = boxSizing === 'border-box';
      self.callActions('beforeGetStartMixData', arguments);
      for (i = 0; target = operation.show[i]; i++) {
        data = target.getPosData();
        operation.showPosData[i] = {
          startPosData: data
        };
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        data = target.getPosData();
        operation.toHidePosData[i] = {
          startPosData: data
        };
      }
      operation.startX = parentRect.left;
      operation.startY = parentRect.top;
      operation.startHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
      operation.startWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
      self.callActions('afterGetStartMixData', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    setInter: function (operation) {
      var self = this, target = null, i = -1;
      self.callActions('beforeSetInter', arguments);
      // Prevent scrollbar flicker on non-inertial scroll platforms by clamping height/width
      if (self.config.animation.clampHeight) {
        self.dom.parent.style.height = operation.startHeight + 'px';
        self.dom.parent.style.overflow = 'hidden';
      }
      if (self.config.animation.clampWidth) {
        self.dom.parent.style.width = operation.startWidth + 'px';
        self.dom.parent.style.overflow = 'hidden';
      }
      for (i = 0; target = operation.toShow[i]; i++) {
        target.show();
      }
      if (operation.willChangeLayout) {
        h.removeClass(self.dom.container, operation.startContainerClassName);
        h.addClass(self.dom.container, operation.newContainerClassName);
      }
      self.callActions('afterSetInter', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    getInterMixData: function (operation) {
      var self = this, target = null, i = -1;
      self.callActions('beforeGetInterMixData', arguments);
      for (i = 0; target = operation.show[i]; i++) {
        operation.showPosData[i].interPosData = target.getPosData();
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        operation.toHidePosData[i].interPosData = target.getPosData();
      }
      self.callActions('afterGetInterMixData', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    setFinal: function (operation) {
      var self = this, target = null, i = -1;
      self.callActions('beforeSetFinal', arguments);
      operation.willSort && self.printSort(false, operation);
      for (i = 0; target = operation.toHide[i]; i++) {
        target.hide();
      }
      self.callActions('afterSetFinal', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    getFinalMixData: function (operation) {
      var self = this, parentStyle = null, parentRect = null, target = null, i = -1;
      self.callActions('beforeGetFinalMixData', arguments);
      for (i = 0; target = operation.show[i]; i++) {
        operation.showPosData[i].finalPosData = target.getPosData();
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        operation.toHidePosData[i].finalPosData = target.getPosData();
      }
      // Remove clamping
      if (self.config.animation.clampHeight || self.config.animation.clampWidth) {
        self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = '';
      }
      if (!self.incPadding) {
        parentStyle = window.getComputedStyle(self.dom.parent);
      }
      parentRect = self.dom.parent.getBoundingClientRect();
      operation.newX = parentRect.left;
      operation.newY = parentRect.top;
      operation.newHeight = self.incPadding ? parentRect.height : parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom) - parseFloat(parentStyle.borderTop) - parseFloat(parentStyle.borderBottom);
      operation.newWidth = self.incPadding ? parentRect.width : parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderLeft) - parseFloat(parentStyle.borderRight);
      operation.viewportDeltaX = operation.docState.viewportWidth - this.dom.document.documentElement.clientWidth;
      operation.viewportDeltaY = operation.docState.viewportHeight - this.dom.document.documentElement.clientHeight;
      if (operation.willSort) {
        self.printSort(true, operation);
      }
      for (i = 0; target = operation.toShow[i]; i++) {
        target.hide();
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        target.show();
      }
      if (operation.willChangeLayout) {
        h.removeClass(self.dom.container, operation.newContainerClassName);
        h.addClass(self.dom.container, self.config.layout.containerClassName);
      }
      self.callActions('afterGetFinalMixData', arguments);
    },
    /**
    * @private
    * @instance
    * @since    3.0.0
    * @param    {Operation}     operation
    */
    getTweenData: function (operation) {
      var self = this, target = null, posData = null, effectNames = Object.getOwnPropertyNames(self.effectsIn), effectName = '', effect = null, widthChange = -1, heightChange = -1, i = -1, j = -1;
      self.callActions('beforeGetTweenData', arguments);
      for (i = 0; target = operation.show[i]; i++) {
        posData = operation.showPosData[i];
        posData.posIn = new mixitup.StyleData();
        posData.posOut = new mixitup.StyleData();
        posData.tweenData = new mixitup.StyleData();
        // Process x and y
        if (target.isShown) {
          posData.posIn.x = posData.startPosData.x - posData.interPosData.x;
          posData.posIn.y = posData.startPosData.y - posData.interPosData.y;
        } else {
          posData.posIn.x = posData.posIn.y = 0;
        }
        posData.posOut.x = posData.finalPosData.x - posData.interPosData.x;
        posData.posOut.y = posData.finalPosData.y - posData.interPosData.y;
        // Process opacity
        posData.posIn.opacity = target.isShown ? 1 : self.effectsIn.opacity;
        posData.posOut.opacity = 1;
        posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
        // Adjust x and y if not nudging
        if (!target.isShown && !self.config.animation.nudge) {
          posData.posIn.x = posData.posOut.x;
          posData.posIn.y = posData.posOut.y;
        }
        posData.tweenData.x = posData.posOut.x - posData.posIn.x;
        posData.tweenData.y = posData.posOut.y - posData.posIn.y;
        // Process width, height, and margins
        if (self.config.animation.animateResizeTargets) {
          posData.posIn.width = posData.startPosData.width;
          posData.posIn.height = posData.startPosData.height;
          // "||" Prevents width/height change from including 0 width/height if hiding or showing
          widthChange = (posData.startPosData.width || posData.finalPosData.width) - posData.interPosData.width;
          posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
          heightChange = (posData.startPosData.height || posData.finalPosData.height) - posData.interPosData.height;
          posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
          posData.posOut.width = posData.finalPosData.width;
          posData.posOut.height = posData.finalPosData.height;
          widthChange = (posData.finalPosData.width || posData.startPosData.width) - posData.interPosData.width;
          posData.posOut.marginRight = posData.finalPosData.marginRight - widthChange;
          heightChange = (posData.finalPosData.height || posData.startPosData.height) - posData.interPosData.height;
          posData.posOut.marginBottom = posData.finalPosData.marginBottom - heightChange;
          posData.tweenData.width = posData.posOut.width - posData.posIn.width;
          posData.tweenData.height = posData.posOut.height - posData.posIn.height;
          posData.tweenData.marginRight = posData.posOut.marginRight - posData.posIn.marginRight;
          posData.tweenData.marginBottom = posData.posOut.marginBottom - posData.posIn.marginBottom;
        }
        // Process transforms
        for (j = 0; effectName = effectNames[j]; j++) {
          effect = self.effectsIn[effectName];
          if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
          posData.posIn[effectName].value = effect.value;
          posData.posOut[effectName].value = 0;
          posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
          posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
        }
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        posData = operation.toHidePosData[i];
        posData.posIn = new mixitup.StyleData();
        posData.posOut = new mixitup.StyleData();
        posData.tweenData = new mixitup.StyleData();
        // Process x and y
        posData.posIn.x = target.isShown ? posData.startPosData.x - posData.interPosData.x : 0;
        posData.posIn.y = target.isShown ? posData.startPosData.y - posData.interPosData.y : 0;
        posData.posOut.x = self.config.animation.nudge ? 0 : posData.posIn.x;
        posData.posOut.y = self.config.animation.nudge ? 0 : posData.posIn.y;
        posData.tweenData.x = posData.posOut.x - posData.posIn.x;
        posData.tweenData.y = posData.posOut.y - posData.posIn.y;
        // Process width, height, and margins
        if (self.config.animation.animateResizeTargets) {
          posData.posIn.width = posData.startPosData.width;
          posData.posIn.height = posData.startPosData.height;
          widthChange = posData.startPosData.width - posData.interPosData.width;
          posData.posIn.marginRight = posData.startPosData.marginRight - widthChange;
          heightChange = posData.startPosData.height - posData.interPosData.height;
          posData.posIn.marginBottom = posData.startPosData.marginBottom - heightChange;
        }
        // Process opacity
        posData.posIn.opacity = 1;
        posData.posOut.opacity = self.effectsOut.opacity;
        posData.tweenData.opacity = posData.posOut.opacity - posData.posIn.opacity;
        // Process transforms
        for (j = 0; effectName = effectNames[j]; j++) {
          effect = self.effectsOut[effectName];
          if (!(effect instanceof mixitup.TransformData) || !effect.value) continue;
          posData.posIn[effectName].value = 0;
          posData.posOut[effectName].value = effect.value;
          posData.tweenData[effectName].value = posData.posOut[effectName].value - posData.posIn[effectName].value;
          posData.posIn[effectName].unit = posData.posOut[effectName].unit = posData.tweenData[effectName].unit = effect.unit;
        }
      }
      self.callActions('afterGetTweenData', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    moveTargets: function (operation) {
      var self = this, target = null, moveData = null, posData = null, statusChange = '', willTransition = false, staggerIndex = -1, i = -1, checkProgress = self.checkProgress.bind(self);
      self.callActions('beforeMoveTargets', arguments);
      // TODO: this is an extra loop in addition to the calcs
      // done in getOperation, could some of this be done there?
      for (i = 0; target = operation.show[i]; i++) {
        moveData = new mixitup.IMoveData();
        posData = operation.showPosData[i];
        statusChange = target.isShown ? 'none' : 'show';
        willTransition = self.willTransition(statusChange, operation.hasEffect, posData.posIn, posData.posOut);
        if (willTransition) {
          // Prevent non-transitioning targets from incrementing the staggerIndex
          staggerIndex++;
        }
        target.show();
        moveData.posIn = posData.posIn;
        moveData.posOut = posData.posOut;
        moveData.statusChange = statusChange;
        moveData.staggerIndex = staggerIndex;
        moveData.operation = operation;
        moveData.callback = willTransition ? checkProgress : null;
        target.move(moveData);
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        posData = operation.toHidePosData[i];
        moveData = new mixitup.IMoveData();
        statusChange = 'hide';
        willTransition = self.willTransition(statusChange, posData.posIn, posData.posOut);
        moveData.posIn = posData.posIn;
        moveData.posOut = posData.posOut;
        moveData.statusChange = statusChange;
        moveData.staggerIndex = i;
        moveData.operation = operation;
        moveData.callback = willTransition ? checkProgress : null;
        target.move(moveData);
      }
      if (self.config.animation.animateResizeContainer) {
        self.dom.parent.style[mixitup.features.transitionProp] = 'height ' + self.config.animation.duration + 'ms ease, ' + 'width ' + self.config.animation.duration + 'ms ease ';
        requestAnimationFrame(function () {
          if (operation.startHeight !== operation.newHeight && operation.viewportDeltaY !== operation.startHeight - operation.newHeight) {
            self.dom.parent.style.height = operation.newHeight + 'px';
          }
          if (operation.startWidth !== operation.newWidth && operation.viewportDeltaX !== operation.startWidth - operation.newWidth) {
            self.dom.parent.style.width = operation.newWidth + 'px';
          }
        });
      }
      if (operation.willChangeLayout) {
        h.removeClass(self.dom.container, self.config.layout.ContainerClassName);
        h.addClass(self.dom.container, operation.newContainerClassName);
      }
      self.callActions('afterMoveTargets', arguments);
    },
    /**
    * @private
    * @instance
    * @return  {boolean}
    */
    hasEffect: function () {
      var self = this, EFFECTABLES = ['scale', 'translateX', 'translateY', 'translateZ', 'rotateX', 'rotateY', 'rotateZ'], effectName = '', effect = null, result = false, value = -1, i = -1;
      if (self.effectsIn.opacity !== 1) {
        return self.callFilters('resultHasEffect', true, arguments);
      }
      for (i = 0; effectName = EFFECTABLES[i]; i++) {
        effect = self.effectsIn[effectName];
        value = typeof effect && effect.value !== 'undefined' ? effect.value : effect;
        if (value !== 0) {
          result = true;
          break;
        }
      }
      return self.callFilters('resultHasEffect', result, arguments);
    },
    /**
    * Determines if a target element will transition in
    * some fasion and therefore requires binding of
    * transitionEnd
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {string}        statusChange
    * @param   {boolean}       hasEffect
    * @param   {StyleData}     posIn
    * @param   {StyleData}     posOut
    * @return  {boolean}
    */
    willTransition: function (statusChange, hasEffect, posIn, posOut) {
      var self = this, result = false;
      if (!h.isVisible(self.dom.container)) {
        // If the container is not visible, the transitionEnd
        // event will not occur and MixItUp will hang
        result = false;
      } else if (statusChange !== 'none' && hasEffect || posIn.x !== posOut.x || posIn.y !== posOut.y) {
        // If opacity and/or translate will change
        result = true;
      } else if (self.config.animation.animateResizeTargets) {
        // Check if width, height or margins will change
        result = posIn.width !== posOut.width || posIn.height !== posOut.height || posIn.marginRight !== posOut.marginRight || posIn.marginTop !== posOut.marginTop;
      } else {
        result = false;
      }
      return self.callFilters('resultWillTransition', result, arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    checkProgress: function (operation) {
      var self = this;
      self.targetsDone++;
      if (self.targetsBound === self.targetsDone) {
        self.cleanUp(operation);
      }
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Operation}     operation
    * @return  {void}
    */
    cleanUp: function (operation) {
      var self = this, target = null, whitespaceBefore = null, whitespaceAfter = null, nextInQueue = null, i = -1;
      self.callActions('beforeCleanUp', arguments);
      self.targetsMoved = self.targetsImmovable = self.targetsBound = self.targetsDone = 0;
      for (i = 0; target = operation.show[i]; i++) {
        target.cleanUp();
        target.show();
      }
      for (i = 0; target = operation.toHide[i]; i++) {
        target.cleanUp();
        target.hide();
      }
      if (operation.willSort) {
        self.printSort(false, operation);
      }
      // Remove any styles applied to the parent container
      self.dom.parent.style[mixitup.features.transitionProp] = self.dom.parent.style.height = self.dom.parent.style.width = self.dom.parent.style.overflow = self.dom.parent.style[mixitup.features.perspectiveProp] = self.dom.parent.style[mixitup.features.perspectiveOriginProp] = '';
      if (operation.willChangeLayout) {
        h.removeClass(self.dom.container, operation.startContainerClassName);
        h.addClass(self.dom.container, operation.newContainerClassName);
      }
      if (operation.toRemove.length) {
        for (i = 0; target = self.targets[i]; i++) {
          if (operation.toRemove.indexOf(target) > -1) {
            if ((whitespaceBefore = target.dom.el.previousSibling) && whitespaceBefore.nodeName === '#text' && (whitespaceAfter = target.dom.el.nextSibling) && whitespaceAfter.nodeName === '#text') {
              h.removeWhitespace(whitespaceBefore);
            }
            if (!operation.willSort) {
              // NB: Sorting will remove targets as a bi-product of `printSort()`
              self.dom.parent.removeChild(target.dom.el);
            }
            self.targets.splice(i, 1);
            target.isInDom = false;
            i--;
          }
        }
        // Since targets have been removed, the original order must be updated
        self.origOrder = self.targets;
      }
      if (operation.willSort) {
        self.targets = operation.newOrder;
      }
      self.state = operation.newState;
      self.lastOperation = operation;
      self.dom.targets = self.state.targets;
      // mixEnd
      mixitup.events.fire('mixEnd', self.dom.container, {
        state: self.state,
        instance: self
      }, self.dom.document);
      if (typeof self.config.callbacks.onMixEnd === 'function') {
        self.config.callbacks.onMixEnd.call(self.dom.container, self.state, self);
      }
      if (operation.hasFailed) {
        // mixFail
        mixitup.events.fire('mixFail', self.dom.container, {
          state: self.state,
          instance: self
        }, self.dom.document);
        if (typeof self.config.callbacks.onMixFail === 'function') {
          self.config.callbacks.onMixFail.call(self.dom.container, self.state, self);
        }
        h.addClass(self.dom.container, h.getClassname(self.config.classNames, 'container', self.config.classNames.modifierFailed));
      }
      // User-defined callback function
      if (typeof self.userCallback === 'function') {
        self.userCallback.call(self.dom.container, self.state, self);
      }
      if (typeof self.userDeferred.resolve === 'function') {
        self.userDeferred.resolve(self.state);
      }
      self.userCallback = null;
      self.userDeferred = null;
      self.lastClicked = null;
      self.isToggling = false;
      self.isBusy = false;
      if (self.queue.length) {
        self.callActions('beforeReadQueueCleanUp', arguments);
        nextInQueue = self.queue.shift();
        // Update non-public API properties stored in queue
        self.userDeferred = nextInQueue.deferred;
        self.isToggling = nextInQueue.isToggling;
        self.lastClicked = nextInQueue.triggerElement;
        if (nextInQueue.instruction.command instanceof mixitup.CommandMultimix) {
          self.multimix.apply(self, nextInQueue.args);
        } else {
          self.dataset.apply(self, nextInQueue.args);
        }
      }
      self.callActions('afterCleanUp', arguments);
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Array<*>}  args
    * @return  {mixitup.UserInstruction}
    */
    parseMultimixArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandMultimix();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg === null) continue;
        if (typeof arg === 'object') {
          h.extend(instruction.command, arg);
        } else if (typeof arg === 'boolean') {
          instruction.animate = arg;
        } else if (typeof arg === 'function') {
          instruction.callback = arg;
        }
      }
      // Coerce arbitrary command arguments into typed command objects
      if (instruction.command.insert && !(instruction.command.insert instanceof mixitup.CommandInsert)) {
        instruction.command.insert = self.parseInsertArgs([instruction.command.insert]).command;
      }
      if (instruction.command.remove && !(instruction.command.remove instanceof mixitup.CommandRemove)) {
        instruction.command.remove = self.parseRemoveArgs([instruction.command.remove]).command;
      }
      if (instruction.command.filter && !(instruction.command.filter instanceof mixitup.CommandFilter)) {
        instruction.command.filter = self.parseFilterArgs([instruction.command.filter]).command;
      }
      if (instruction.command.sort && !(instruction.command.sort instanceof mixitup.CommandSort)) {
        instruction.command.sort = self.parseSortArgs([instruction.command.sort]).command;
      }
      if (instruction.command.changeLayout && !(instruction.command.changeLayout instanceof mixitup.CommandChangeLayout)) {
        instruction.command.changeLayout = self.parseChangeLayoutArgs([instruction.command.changeLayout]).command;
      }
      instruction = self.callFilters('instructionParseMultimixArgs', instruction, arguments);
      h.freeze(instruction);
      return instruction;
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Array<*>}  args
    * @return  {mixitup.UserInstruction}
    */
    parseFilterArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandFilter();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (typeof arg === 'string') {
          // Selector
          instruction.command.selector = arg;
        } else if (arg === null) {
          instruction.command.collection = [];
        } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
          // Single element
          instruction.command.collection = [arg];
        } else if (typeof arg === 'object' && typeof arg.length !== 'undefined') {
          // Multiple elements in array, NodeList or jQuery collection
          instruction.command.collection = h.arrayFromList(arg);
        } else if (typeof arg === 'object') {
          // Filter command
          h.extend(instruction.command, arg);
        } else if (typeof arg === 'boolean') {
          instruction.animate = arg;
        } else if (typeof arg === 'function') {
          instruction.callback = arg;
        }
      }
      if (instruction.command.selector && instruction.command.collection) {
        throw new Error(mixitup.messages.errorFilterInvalidArguments());
      }
      instruction = self.callFilters('instructionParseFilterArgs', instruction, arguments);
      h.freeze(instruction);
      return instruction;
    },
    parseSortArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), arg = null, sortString = '', i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandSort();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg === null) continue;
        switch (typeof arg) {
          case 'string':
            // Sort string
            sortString = arg;
            break;
          case 'object':
            // Array of element references
            if (arg.length) {
              instruction.command.collection = h.arrayFromList(arg);
            }
            break;
          case 'boolean':
            instruction.animate = arg;
            break;
          case 'function':
            instruction.callback = arg;
            break;
        }
      }
      if (sortString) {
        instruction.command = self.parseSortString(sortString, instruction.command);
      }
      instruction = self.callFilters('instructionParseSortArgs', instruction, arguments);
      h.freeze(instruction);
      return instruction;
    },
    /**
    * @private
    * @instance
    * @since   2.0.0
    * @param   {Array<*>}  args
    * @return  {mixitup.UserInstruction}
    */
    parseInsertArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandInsert();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg === null) continue;
        if (typeof arg === 'number') {
          // Insert index
          instruction.command.index = arg;
        } else if (typeof arg === 'string' && ['before', 'after'].indexOf(arg) > -1) {
          // 'before'/'after'
          instruction.command.position = arg;
        } else if (typeof arg === 'string') {
          // Markup
          instruction.command.collection = h.arrayFromList(h.createElement(arg).childNodes);
        } else if (typeof arg === 'object' && h.isElement(arg, self.dom.document)) {
          // Single element
          !instruction.command.collection.length ? instruction.command.collection = [arg] : instruction.command.sibling = arg;
        } else if (typeof arg === 'object' && arg.length) {
          // Multiple elements in array or jQuery collection
          !instruction.command.collection.length ? instruction.command.collection = arg : instruction.command.sibling = arg[0];
        } else if (typeof arg === 'object' && arg.childNodes && arg.childNodes.length) {
          // Document fragment
          !instruction.command.collection.length ? instruction.command.collection = h.arrayFromList(arg.childNodes) : instruction.command.sibling = arg.childNodes[0];
        } else if (typeof arg === 'object') {
          // Insert command
          h.extend(instruction.command, arg);
        } else if (typeof arg === 'boolean') {
          instruction.animate = arg;
        } else if (typeof arg === 'function') {
          instruction.callback = arg;
        }
      }
      if (instruction.command.index && instruction.command.sibling) {
        throw new Error(mixitup.messages.errorInsertInvalidArguments());
      }
      if (!instruction.command.collection.length && self.config.debug.showWarnings) {
        console.warn(mixitup.messages.warningInsertNoElements());
      }
      instruction = self.callFilters('instructionParseInsertArgs', instruction, arguments);
      h.freeze(instruction);
      return instruction;
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Array<*>}  args
    * @return  {mixitup.UserInstruction}
    */
    parseRemoveArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), target = null, arg = null, i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandRemove();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg === null) continue;
        switch (typeof arg) {
          case 'number':
            if (self.targets[arg]) {
              instruction.command.targets[0] = self.targets[arg];
            }
            break;
          case 'string':
            instruction.command.collection = h.arrayFromList(self.dom.parent.querySelectorAll(arg));
            break;
          case 'object':
            if (arg && arg.length) {
              instruction.command.collection = arg;
            } else if (h.isElement(arg, self.dom.document)) {
              instruction.command.collection = [arg];
            } else {
              // Remove command
              h.extend(instruction.command, arg);
            }
            break;
          case 'boolean':
            instruction.animate = arg;
            break;
          case 'function':
            instruction.callback = arg;
            break;
        }
      }
      if (instruction.command.collection.length) {
        for (i = 0; target = self.targets[i]; i++) {
          if (instruction.command.collection.indexOf(target.dom.el) > -1) {
            instruction.command.targets.push(target);
          }
        }
      }
      if (!instruction.command.targets.length && self.config.debug.showWarnings) {
        console.warn(mixitup.messages.warningRemoveNoElements());
      }
      h.freeze(instruction);
      return instruction;
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Array<*>}  args
    * @return  {mixitup.UserInstruction}
    */
    parseDatasetArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandDataset();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg === null) continue;
        switch (typeof arg) {
          case 'object':
            if (Array.isArray(arg) || typeof arg.length === 'number') {
              instruction.command.dataset = arg;
            } else {
              // Change layout command
              h.extend(instruction.command, arg);
            }
            break;
          case 'boolean':
            instruction.animate = arg;
            break;
          case 'function':
            instruction.callback = arg;
            break;
        }
      }
      h.freeze(instruction);
      return instruction;
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Array<*>}  args
    * @return  {mixitup.UserInstruction}
    */
    parseChangeLayoutArgs: function (args) {
      var self = this, instruction = new mixitup.UserInstruction(), arg = null, i = -1;
      instruction.animate = self.config.animation.enable;
      instruction.command = new mixitup.CommandChangeLayout();
      for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (arg === null) continue;
        switch (typeof arg) {
          case 'string':
            instruction.command.containerClassName = arg;
            break;
          case 'object':
            // Change layout command
            h.extend(instruction.command, arg);
            break;
          case 'boolean':
            instruction.animate = arg;
            break;
          case 'function':
            instruction.callback = arg;
            break;
        }
      }
      h.freeze(instruction);
      return instruction;
    },
    /**
    * @private
    * @instance
    * @since       3.0.0
    * @param       {mixitup.QueueItem}         queueItem
    * @return      {Promise.<mixitup.State>}
    */
    queueMix: function (queueItem) {
      var self = this, deferred = null, toggleSelector = '';
      self.callActions('beforeQueueMix', arguments);
      deferred = h.defer(mixitup.libraries);
      if (self.config.animation.queue && self.queue.length < self.config.animation.queueLimit) {
        queueItem.deferred = deferred;
        self.queue.push(queueItem);
        // Keep controls in sync with user interactions. Mixer will catch up as it drains the queue.
        if (self.config.controls.enable) {
          if (self.isToggling) {
            self.buildToggleArray(queueItem.instruction.command);
            toggleSelector = self.getToggleSelector();
            self.updateControls({
              filter: {
                selector: toggleSelector
              }
            });
          } else {
            self.updateControls(queueItem.instruction.command);
          }
        }
      } else {
        if (self.config.debug.showWarnings) {
          console.warn(mixitup.messages.warningMultimixInstanceQueueFull());
        }
        deferred.resolve(self.state);
        mixitup.events.fire('mixBusy', self.dom.container, {
          state: self.state,
          instance: self
        }, self.dom.document);
        if (typeof self.config.callbacks.onMixBusy === 'function') {
          self.config.callbacks.onMixBusy.call(self.dom.container, self.state, self);
        }
      }
      return self.callFilters('promiseQueueMix', deferred.promise, arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Array.<object>}    newDataset
    * @return  {Operation}
    */
    getDataOperation: function (newDataset) {
      var self = this, operation = new mixitup.Operation(), startDataset = [];
      operation = self.callFilters('operationUnmappedGetDataOperation', operation, arguments);
      if (self.dom.targets.length && !(startDataset = self.state.activeDataset || []).length) {
        throw new Error(mixitup.messages.errorDatasetNotSet());
      }
      operation.id = h.randomHex();
      operation.startState = self.state;
      operation.startDataset = startDataset;
      operation.newDataset = newDataset.slice();
      self.diffDatasets(operation);
      operation.startOrder = self.targets;
      operation.newOrder = operation.show;
      if (self.config.animation.enable) {
        self.getStartMixData(operation);
        self.setInter(operation);
        operation.docState = h.getDocumentState(self.dom.document);
        self.getInterMixData(operation);
        self.setFinal(operation);
        self.getFinalMixData(operation);
        self.parseEffects();
        operation.hasEffect = self.hasEffect();
        self.getTweenData(operation);
      }
      self.targets = operation.show.slice();
      operation.newState = self.buildState(operation);
      // NB: Targets to be removed must be included in `self.targets` for removal during clean up,
      // but are added after state is built so that state is accurate
      Array.prototype.push.apply(self.targets, operation.toRemove);
      operation = self.callFilters('operationMappedGetDataOperation', operation, arguments);
      return operation;
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {mixitup.Operation} operation
    * @return  {void}
    */
    diffDatasets: function (operation) {
      var self = this, persistantStartIds = [], persistantNewIds = [], insertedTargets = [], data = null, target = null, el = null, frag = null, nextEl = null, uids = {}, id = '', i = -1;
      self.callActions('beforeDiffDatasets', arguments);
      for (i = 0; data = operation.newDataset[i]; i++) {
        if (typeof (id = data[self.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
          throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
            uidKey: self.config.data.uidKey
          }));
        }
        if (!uids[id]) {
          uids[id] = true;
        } else {
          throw new Error(mixitup.messages.errorDatasetDuplicateUid({
            uid: id
          }));
        }
        if ((target = self.cache[id]) instanceof mixitup.Target) {
          // Already in cache
          if (self.config.data.dirtyCheck && !h.deepEquals(data, target.data)) {
            // change detected
            el = target.render(data);
            target.data = data;
            if (el !== target.dom.el) {
              // Update target element reference
              if (target.isInDom) {
                target.unbindEvents();
                self.dom.parent.replaceChild(el, target.dom.el);
              }
              if (!target.isShown) {
                el.style.display = 'none';
              }
              target.dom.el = el;
              if (target.isInDom) {
                target.bindEvents();
              }
            }
          }
          el = target.dom.el;
        } else {
          // New target
          target = new mixitup.Target();
          target.init(null, self, data);
          target.hide();
        }
        if (!target.isInDom) {
          // Adding to DOM
          if (!frag) {
            // Open frag
            frag = self.dom.document.createDocumentFragment();
          }
          if (frag.lastElementChild) {
            frag.appendChild(self.dom.document.createTextNode(' '));
          }
          frag.appendChild(target.dom.el);
          target.isInDom = true;
          target.unbindEvents();
          target.bindEvents();
          target.hide();
          operation.toShow.push(target);
          insertedTargets.push(target);
        } else {
          // Already in DOM
          nextEl = target.dom.el.nextElementSibling;
          persistantNewIds.push(id);
          if (frag) {
            // Close and insert previously opened frag
            if (frag.lastElementChild) {
              frag.appendChild(self.dom.document.createTextNode(' '));
            }
            self.insertDatasetFrag(frag, target.dom.el, insertedTargets);
            frag = null;
          }
        }
        operation.show.push(target);
      }
      if (frag) {
        // Unclosed frag remaining
        nextEl = nextEl || self.config.layout.siblingAfter;
        if (nextEl) {
          frag.appendChild(self.dom.document.createTextNode(' '));
        }
        self.insertDatasetFrag(frag, nextEl, insertedTargets);
      }
      for (i = 0; data = operation.startDataset[i]; i++) {
        id = data[self.config.data.uidKey];
        target = self.cache[id];
        if (operation.show.indexOf(target) < 0) {
          // Previously shown but now absent
          operation.hide.push(target);
          operation.toHide.push(target);
          operation.toRemove.push(target);
        } else {
          persistantStartIds.push(id);
        }
      }
      if (!h.isEqualArray(persistantStartIds, persistantNewIds)) {
        operation.willSort = true;
      }
      self.callActions('afterDiffDatasets', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.1.5
    * @param   {DocumentFragment}          frag
    * @param   {(HTMLElement|null)}        nextEl
    * @param   {Array.<mixitup.Target>}    targets
    * @return  {void}
    */
    insertDatasetFrag: function (frag, nextEl, targets) {
      var self = this;
      var insertAt = nextEl ? h.arrayFromList(self.dom.parent.children).indexOf(nextEl) : self.targets.length;
      self.dom.parent.insertBefore(frag, nextEl);
      while (targets.length) {
        self.targets.splice(insertAt, 0, targets.shift());
        insertAt++;
      }
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {mixitup.CommandSort} sortCommandA
    * @param   {mixitup.CommandSort} sortCommandB
    * @return  {boolean}
    */
    willSort: function (sortCommandA, sortCommandB) {
      var self = this, result = false;
      if (self.config.behavior.liveSort || sortCommandA.order === 'random' || sortCommandA.attribute !== sortCommandB.attribute || sortCommandA.order !== sortCommandB.order || sortCommandA.collection !== sortCommandB.collection || sortCommandA.next === null && sortCommandB.next || sortCommandA.next && sortCommandB.next === null) {
        result = true;
      } else if (sortCommandA.next && sortCommandB.next) {
        result = self.willSort(sortCommandA.next, sortCommandB.next);
      } else {
        result = false;
      }
      return self.callFilters('resultWillSort', result, arguments);
    },
    /**
    * A shorthand method for `.filter('all')`. Shows all targets in the container.
    *
    * @example
    *
    * .show()
    *
    * @example <caption>Example: Showing all targets</caption>
    *
    * mixer.show()
    *     .then(function(state) {
    *         console.log(state.totalShow === state.totalTargets); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @return      {Promise.<mixitup.State>}
    */
    show: function () {
      var self = this;
      return self.filter('all');
    },
    /**
    * A shorthand method for `.filter('none')`. Hides all targets in the container.
    *
    * @example
    *
    * .hide()
    *
    * @example <caption>Example: Hiding all targets</caption>
    *
    * mixer.hide()
    *     .then(function(state) {
    *         console.log(state.totalShow === 0); // true
    *         console.log(state.totalHide === state.totalTargets); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @return      {Promise.<mixitup.State>}
    */
    hide: function () {
      var self = this;
      return self.filter('none');
    },
    /**
    * Returns a boolean indicating whether or not a MixItUp operation is
    * currently in progress.
    *
    * @example
    *
    * .isMixing()
    *
    * @example <caption>Example: Checking the status of a mixer</caption>
    *
    * mixer.sort('random', function() {
    *     console.log(mixer.isMixing()) // false
    * });
    *
    * console.log(mixer.isMixing()) // true
    *
    * @public
    * @instance
    * @since   2.0.0
    * @return  {boolean}
    */
    isMixing: function () {
      var self = this;
      return self.isBusy;
    },
    /**
    * Filters all targets in the container by a provided selector string, or the values `'all'`
    * or `'none'`. Only targets matching the selector will be shown.
    *
    * @example
    *
    * .filter(selector [, animate] [, callback])
    *
    * @example <caption>Example 1: Filtering targets by a class selector</caption>
    *
    * mixer.filter('.category-a')
    *     .then(function(state) {
    *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a').length); // true
    *     });
    *
    * @example <caption>Example 2: Filtering targets by an attribute selector</caption>
    *
    * mixer.filter('[data-category~="a"]')
    *     .then(function(state) {
    *         console.log(state.totalShow === containerEl.querySelectorAll('[data-category~="a"]').length); // true
    *     });
    *
    * @example <caption>Example 3: Filtering targets by a compound selector</caption>
    *
    * // Show only those targets with the classes 'category-a' AND 'category-b'
    *
    * mixer.filter('.category-a.category-c')
    *     .then(function(state) {
    *         console.log(state.totalShow === containerEl.querySelectorAll('.category-a.category-c').length); // true
    *     });
    *
    * @example <caption>Example 4: Filtering via an element collection</caption>
    *
    * var collection = Array.from(container.querySelectorAll('.mix'));
    *
    * console.log(collection.length); // 34
    *
    * // Filter the collection manually using Array.prototype.filter
    *
    * var filtered = collection.filter(function(target) {
    *    return parseInt(target.getAttribute('data-price')) > 10;
    * });
    *
    * console.log(filtered.length); // 22
    *
    * // Pass the filtered collection to MixItUp
    *
    * mixer.filter(filtered)
    *    .then(function(state) {
    *        console.log(state.activeFilter.collection.length === 22); // true
    *    });
    *
    * @public
    * @instance
    * @since       2.0.0
    * @param       {(string|HTMLElement|Array.<HTMLElement>)} selector
    *      Any valid CSS selector (i.e. `'.category-a'`), or the values `'all'` or `'none'`. The filter method also accepts a reference to single target element or a collection of target elements to show.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    filter: function () {
      var self = this, instruction = self.parseFilterArgs(arguments);
      return self.multimix({
        filter: instruction.command
      }, instruction.animate, instruction.callback);
    },
    /**
    * Adds an additional selector to the currently active filter selector, concatenating
    * as per the logic defined in `controls.toggleLogic`.
    *
    * @example
    *
    * .toggleOn(selector [, animate] [, callback])
    *
    * @example <caption>Example: Toggling on a filter selector</caption>
    *
    * console.log(mixer.getState().activeFilter.selector); // '.category-a'
    *
    * mixer.toggleOn('.category-b')
    *     .then(function(state) {
    *         console.log(state.activeFilter.selector); // '.category-a, .category-b'
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {string}    selector
    *      Any valid CSS selector (i.e. `'.category-a'`)
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    toggleOn: function () {
      var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, toggleSelector = '';
      self.isToggling = true;
      if (self.toggleArray.indexOf(selector) < 0) {
        self.toggleArray.push(selector);
      }
      toggleSelector = self.getToggleSelector();
      return self.multimix({
        filter: toggleSelector
      }, instruction.animate, instruction.callback);
    },
    /**
    * Removes a selector from the active filter selector.
    *
    * @example
    *
    * .toggleOff(selector [, animate] [, callback])
    *
    * @example <caption>Example: Toggling off a filter selector</caption>
    *
    * console.log(mixer.getState().activeFilter.selector); // '.category-a, .category-b'
    *
    * mixer.toggleOff('.category-b')
    *     .then(function(state) {
    *         console.log(state.activeFilter.selector); // '.category-a'
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {string}    selector
    *      Any valid CSS selector (i.e. `'.category-a'`)
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    toggleOff: function () {
      var self = this, instruction = self.parseFilterArgs(arguments), selector = instruction.command.selector, selectorIndex = self.toggleArray.indexOf(selector), toggleSelector = '';
      self.isToggling = true;
      if (selectorIndex > -1) {
        self.toggleArray.splice(selectorIndex, 1);
      }
      toggleSelector = self.getToggleSelector();
      return self.multimix({
        filter: toggleSelector
      }, instruction.animate, instruction.callback);
    },
    /**
    * Sorts all targets in the container according to a provided sort string.
    *
    * @example
    *
    * .sort(sortString [, animate] [, callback])
    *
    * @example <caption>Example 1: Sorting by the default DOM order</caption>
    *
    * // Reverse the default order of the targets
    *
    * mixer.sort('default:desc')
    *     .then(function(state) {
    *         console.log(state.activeSort.attribute === 'default'); // true
    *         console.log(state.activeSort.order === 'desc'); // true
    *     });
    *
    * @example <caption>Example 2: Sorting by a custom data-attribute</caption>
    *
    * // Sort the targets by the value of a `data-published-date` attribute
    *
    * mixer.sort('published-date:asc')
    *     .then(function(state) {
    *         console.log(state.activeSort.attribute === 'published-date'); // true
    *         console.log(state.activeSort.order === 'asc'); // true
    *     });
    *
    * @example <caption>Example 3: Sorting by multiple attributes</caption>
    *
    * // Sort the targets by the value of a `data-published-date` attribute, then by `data-title`
    *
    * mixer.sort('published-date:desc data-title:asc')
    *     .then(function(state) {
    *         console.log(state.activeSort.attribute === 'published-date'); // true
    *         console.log(state.activeSort.order === 'desc'); // true
    *
    *         console.log(state.activeSort.next.attribute === 'title'); // true
    *         console.log(state.activeSort.next.order === 'asc'); // true
    *     });
    *
    * @example <caption>Example 4: Sorting by random</caption>
    *
    * mixer.sort('random')
    *     .then(function(state) {
    *         console.log(state.activeSort.order === 'random') // true
    *     });
    *
    * @example <caption>Example 5: Sorting via an element collection</caption>
    *
    * var collection = Array.from(container.querySelectorAll('.mix'));
    *
    * // Swap the position of two elements in the collection:
    *
    * var temp = collection[1];
    *
    * collection[1] = collection[0];
    * collection[0] = temp;
    *
    * // Pass the sorted collection to MixItUp
    *
    * mixer.sort(collection)
    *     .then(function(state) {
    *         console.log(state.targets[0] === collection[0]); // true
    *     });
    *
    * @public
    * @instance
    * @since       2.0.0
    * @param       {(string|Array.<HTMLElement>)}    sortString
    *      A valid sort string (e.g. `'default'`, `'published-date:asc'`, or `'random'`). The sort method also accepts an array of all target elements in a user-defined order.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    sort: function () {
      var self = this, instruction = self.parseSortArgs(arguments);
      return self.multimix({
        sort: instruction.command
      }, instruction.animate, instruction.callback);
    },
    /**
    * Changes the layout of the container by adding, removing or updating a
    * layout-specific class name. If `animation.animateResizetargets` is
    * enabled, MixItUp will attempt to gracefully animate the width, height,
    * and position of targets between layout states.
    *
    * @example
    *
    * .changeLayout(containerClassName [, animate] [, callback])
    *
    * @example <caption>Example 1: Adding a new class name to the container</caption>
    *
    * mixer.changeLayout('container-list')
    *      .then(function(state) {
    *          console.log(state.activeContainerClass === 'container-list'); // true
    *      });
    *
    * @example <caption>Example 2: Removing a previously added class name from the container</caption>
    *
    * mixer.changeLayout('')
    *      .then(function(state) {
    *          console.log(state.activeContainerClass === ''); // true
    *      });
    *
    * @public
    * @instance
    * @since       2.0.0
    * @param       {string}    containerClassName
    *      A layout-specific class name to add to the container.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    changeLayout: function () {
      var self = this, instruction = self.parseChangeLayoutArgs(arguments);
      return self.multimix({
        changeLayout: instruction.command
      }, instruction.animate, instruction.callback);
    },
    /**
    * Updates the contents and order of the container to reflect the provided dataset,
    * if the dataset API is in use.
    *
    * The dataset API is designed for use in API-driven JavaScript applications, and
    * can be used instead of DOM-based methods such as `.filter()`, `.sort()`,
    * `.insert()`, etc. When used, insertion, removal, sorting and pagination can be
    * achieved purely via changes to your data model, without the uglyness of having
    * to interact with or query the DOM directly.
    *
    * @example
    *
    * .dataset(dataset [, animate] [, callback])
    *
    * @example <caption>Example 1: Rendering a dataset</caption>
    *
    * var myDataset = [
    *     {id: 1, ...},
    *     {id: 2, ...},
    *     {id: 3, ...}
    * ];
    *
    * mixer.dataset(myDataset)
    *     .then(function(state) {
    *         console.log(state.totalShow === 3); // true
    *     });
    *
    * @example <caption>Example 2: Sorting a dataset</caption>
    *
    * // Create a new dataset in reverse order
    *
    * var newDataset = myDataset.slice().reverse();
    *
    * mixer.dataset(newDataset)
    *     .then(function(state) {
    *         console.log(state.activeDataset[0] === myDataset[2]); // true
    *     });
    *
    * @example <caption>Example 3: Removing an item from the dataset</caption>
    *
    * console.log(myDataset.length); // 3
    *
    * // Create a new dataset with the last item removed.
    *
    * var newDataset = myDataset.slice().pop();
    *
    * mixer.dataset(newDataset)
    *     .then(function(state) {
    *         console.log(state.totalShow === 2); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {Array.<object>}    dataset
    *      An array of objects, each one representing the underlying data model of a target to be rendered.
    * @param       {boolean}           [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}          [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    dataset: function () {
      var self = this, instruction = self.parseDatasetArgs(arguments), operation = null, queueItem = null, animate = false;
      self.callActions('beforeDataset', arguments);
      if (!self.isBusy) {
        if (instruction.callback) self.userCallback = instruction.callback;
        animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
        operation = self.getDataOperation(instruction.command.dataset);
        return self.goMix(animate, operation);
      } else {
        queueItem = new mixitup.QueueItem();
        queueItem.args = arguments;
        queueItem.instruction = instruction;
        return self.queueMix(queueItem);
      }
    },
    /**
    * Performs simultaneous `filter`, `sort`, `insert`, `remove` and `changeLayout`
    * operations as requested.
    *
    * @example
    *
    * .multimix(multimixCommand [, animate] [, callback])
    *
    * @example <caption>Example 1: Performing simultaneous filtering and sorting</caption>
    *
    * mixer.multimix({
    *     filter: '.category-b',
    *     sort: 'published-date:desc'
    * })
    *     .then(function(state) {
    *         console.log(state.activeFilter.selector === '.category-b'); // true
    *         console.log(state.activeSort.attribute === 'published-date'); // true
    *     });
    *
    * @example <caption>Example 2: Performing simultaneous sorting, insertion, and removal</caption>
    *
    * console.log(mixer.getState().totalShow); // 6
    *
    * // NB: When inserting via `multimix()`, an object should be provided as the value
    * // for the `insert` portion of the command, allowing for a collection of elements
    * // and an insertion index to be specified.
    *
    * mixer.multimix({
    *     sort: 'published-date:desc', // Sort the container, including any new elements
    *     insert: {
    *         collection: [newElementReferenceA, newElementReferenceB], // Add 2 new elements at index 5
    *         index: 5
    *     },
    *     remove: existingElementReference // Remove 1 existing element
    * })
    *     .then(function(state) {
    *         console.log(state.activeSort.attribute === 'published-date'); // true
    *         console.log(state.totalShow === 7); // true
    *     });
    *
    * @public
    * @instance
    * @since       2.0.0
    * @param       {object}    multimixCommand
    *      An object containing one or more things to do
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    multimix: function () {
      var self = this, operation = null, animate = false, queueItem = null, instruction = self.parseMultimixArgs(arguments);
      self.callActions('beforeMultimix', arguments);
      if (!self.isBusy) {
        operation = self.getOperation(instruction.command);
        if (self.config.controls.enable) {
          // Update controls for API calls
          if (instruction.command.filter && !self.isToggling) {
            // As we are not toggling, reset the toggle array
            // so new filter overrides existing toggles
            self.toggleArray.length = 0;
            self.buildToggleArray(operation.command);
          }
          if (self.queue.length < 1) {
            self.updateControls(operation.command);
          }
        }
        if (instruction.callback) self.userCallback = instruction.callback;
        // Always allow the instruction to override the instance setting
        animate = instruction.animate ^ self.config.animation.enable ? instruction.animate : self.config.animation.enable;
        self.callFilters('operationMultimix', operation, arguments);
        return self.goMix(animate, operation);
      } else {
        queueItem = new mixitup.QueueItem();
        queueItem.args = arguments;
        queueItem.instruction = instruction;
        queueItem.triggerElement = self.lastClicked;
        queueItem.isToggling = self.isToggling;
        return self.queueMix(queueItem);
      }
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {object}            multimixCommand
    * @param   {boolean}           [isPreFetch]
    *      An optional boolean indicating that the operation is being pre-fetched for execution at a later time.
    * @return  {Operation|null}
    */
    getOperation: function (multimixCommand) {
      var self = this, sortCommand = multimixCommand.sort, filterCommand = multimixCommand.filter, changeLayoutCommand = multimixCommand.changeLayout, removeCommand = multimixCommand.remove, insertCommand = multimixCommand.insert, operation = new mixitup.Operation();
      operation = self.callFilters('operationUnmappedGetOperation', operation, arguments);
      operation.id = h.randomHex();
      operation.command = multimixCommand;
      operation.startState = self.state;
      operation.triggerElement = self.lastClicked;
      if (self.isBusy) {
        if (self.config.debug.showWarnings) {
          console.warn(mixitup.messages.warningGetOperationInstanceBusy());
        }
        return null;
      }
      if (insertCommand) {
        self.insertTargets(insertCommand, operation);
      }
      if (removeCommand) {
        operation.toRemove = removeCommand.targets;
      }
      operation.startSort = operation.newSort = operation.startState.activeSort;
      operation.startOrder = operation.newOrder = self.targets;
      if (sortCommand) {
        operation.startSort = operation.startState.activeSort;
        operation.newSort = sortCommand;
        operation.willSort = self.willSort(sortCommand, operation.startState.activeSort);
        if (operation.willSort) {
          self.sortOperation(operation);
        }
      }
      operation.startFilter = operation.startState.activeFilter;
      if (filterCommand) {
        operation.newFilter = filterCommand;
      } else {
        operation.newFilter = h.extend(new mixitup.CommandFilter(), operation.startFilter);
      }
      if (operation.newFilter.selector === 'all') {
        operation.newFilter.selector = self.config.selectors.target;
      } else if (operation.newFilter.selector === 'none') {
        operation.newFilter.selector = '';
      }
      self.filterOperation(operation);
      operation.startContainerClassName = operation.startState.activeContainerClassName;
      if (changeLayoutCommand) {
        operation.newContainerClassName = changeLayoutCommand.containerClassName;
        if (operation.newContainerClassName !== operation.startContainerClassName) {
          operation.willChangeLayout = true;
        }
      } else {
        operation.newContainerClassName = operation.startContainerClassName;
      }
      if (self.config.animation.enable) {
        // Populate the operation's position data
        self.getStartMixData(operation);
        self.setInter(operation);
        operation.docState = h.getDocumentState(self.dom.document);
        self.getInterMixData(operation);
        self.setFinal(operation);
        self.getFinalMixData(operation);
        self.parseEffects();
        operation.hasEffect = self.hasEffect();
        self.getTweenData(operation);
      }
      if (operation.willSort) {
        self.targets = operation.newOrder;
      }
      operation.newState = self.buildState(operation);
      return self.callFilters('operationMappedGetOperation', operation, arguments);
    },
    /**
    * Renders a previously created operation at a specific point in its path, as
    * determined by a multiplier between 0 and 1.
    *
    * @example
    * .tween(operation, multiplier)
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {mixitup.Operation}     operation
    *      An operation object created via the `getOperation` method
    *
    * @param   {Float}                 multiplier
    *      Any number between 0 and 1 representing the percentage complete of the operation
    * @return  {void}
    */
    tween: function (operation, multiplier) {
      var target = null, posData = null, toHideIndex = -1, i = -1;
      multiplier = Math.min(multiplier, 1);
      multiplier = Math.max(multiplier, 0);
      for (i = 0; target = operation.show[i]; i++) {
        posData = operation.showPosData[i];
        target.applyTween(posData, multiplier);
      }
      for (i = 0; target = operation.hide[i]; i++) {
        if (target.isShown) {
          target.hide();
        }
        if ((toHideIndex = operation.toHide.indexOf(target)) > -1) {
          posData = operation.toHidePosData[toHideIndex];
          if (!target.isShown) {
            target.show();
          }
          target.applyTween(posData, multiplier);
        }
      }
    },
    /**
    * Inserts one or more new target elements into the container at a specified
    * index.
    *
    * To be indexed as targets, new elements must match the `selectors.target`
    * selector (`'.mix'` by default).
    *
    * @example
    *
    * .insert(newElements [, index] [, animate], [, callback])
    *
    * @example <caption>Example 1: Inserting a single element via reference</caption>
    *
    * console.log(mixer.getState().totalShow); // 0
    *
    * // Create a new element
    *
    * var newElement = document.createElement('div');
    * newElement.classList.add('mix');
    *
    * mixer.insert(newElement)
    *     .then(function(state) {
    *         console.log(state.totalShow === 1); // true
    *     });
    *
    * @example <caption>Example 2: Inserting a single element via HTML string</caption>
    *
    * console.log(mixer.getState().totalShow); // 1
    *
    * // Create a new element via reference
    *
    * var newElementHtml = '&lt;div class="mix"&gt;&lt;/div&gt;';
    *
    * // Create and insert the new element at index 1
    *
    * mixer.insert(newElementHtml, 1)
    *     .then(function(state) {
    *         console.log(state.totalShow === 2); // true
    *         console.log(state.show[1].outerHTML === newElementHtml); // true
    *     });
    *
    * @example <caption>Example 3: Inserting multiple elements via reference</caption>
    *
    * console.log(mixer.getState().totalShow); // 2
    *
    * // Create an array of new elements to insert.
    *
    * var newElement1 = document.createElement('div');
    * var newElement2 = document.createElement('div');
    *
    * newElement1.classList.add('mix');
    * newElement2.classList.add('mix');
    *
    * var newElementsCollection = [newElement1, newElement2];
    *
    * // Insert the new elements starting at index 1
    *
    * mixer.insert(newElementsCollection, 1)
    *     .then(function(state) {
    *         console.log(state.totalShow === 4); // true
    *         console.log(state.show[1] === newElement1); // true
    *         console.log(state.show[2] === newElement2); // true
    *     });
    *
    * @example <caption>Example 4: Inserting a jQuery collection object containing one or more elements</caption>
    *
    * console.log(mixer.getState().totalShow); // 4
    *
    * var $newElement = $('&lt;div class="mix"&gt;&lt;/div&gt;');
    *
    * // Insert the new elements starting at index 3
    *
    * mixer.insert($newElement, 3)
    *     .then(function(state) {
    *         console.log(state.totalShow === 5); // true
    *         console.log(state.show[3] === $newElement[0]); // true
    *     });
    *
    * @public
    * @instance
    * @since       2.0.0
    * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
    *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
    * @param       {number}    index=0
    *      The index at which to insert the new element(s). `0` by default.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    insert: function () {
      var self = this, args = self.parseInsertArgs(arguments);
      return self.multimix({
        insert: args.command
      }, args.animate, args.callback);
    },
    /**
    * Inserts one or more new elements before a provided reference element.
    *
    * @example
    *
    * .insertBefore(newElements, referenceElement [, animate] [, callback])
    *
    * @example <caption>Example: Inserting a new element before a reference element</caption>
    *
    * // An existing reference element is chosen at index 2
    *
    * var referenceElement = mixer.getState().show[2];
    *
    * // Create a new element
    *
    * var newElement = document.createElement('div');
    * newElement.classList.add('mix');
    *
    * mixer.insertBefore(newElement, referenceElement)
    *     .then(function(state) {
    *         // The new element is inserted into the container at index 2, before the reference element
    *
    *         console.log(state.show[2] === newElement); // true
    *
    *         // The reference element is now at index 3
    *
    *         console.log(state.show[3] === referenceElement); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
    *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
    * @param       {HTMLElement}    referenceElement
    *      A reference to an existing element in the container to insert new elements before.
    *@param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    insertBefore: function () {
      var self = this, args = self.parseInsertArgs(arguments);
      return self.insert(args.command.collection, 'before', args.command.sibling, args.animate, args.callback);
    },
    /**
    * Inserts one or more new elements after a provided reference element.
    *
    * @example
    *
    * .insertAfter(newElements, referenceElement [, animate] [, callback])
    *
    * @example <caption>Example: Inserting a new element after a reference element</caption>
    *
    * // An existing reference element is chosen at index 2
    *
    * var referenceElement = mixer.getState().show[2];
    *
    * // Create a new element
    *
    * var newElement = document.createElement('div');
    * newElement.classList.add('mix');
    *
    * mixer.insertAfter(newElement, referenceElement)
    *     .then(function(state) {
    *         // The new element is inserted into the container at index 3, after the reference element
    *
    *         console.log(state.show[3] === newElement); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
    *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
    * @param       {HTMLElement}    referenceElement
    *      A reference to an existing element in the container to insert new elements after.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    insertAfter: function () {
      var self = this, args = self.parseInsertArgs(arguments);
      return self.insert(args.command.collection, 'after', args.command.sibling, args.animate, args.callback);
    },
    /**
    * Inserts one or more new elements into the container before all existing targets.
    *
    * @example
    *
    * .prepend(newElements [,animate] [,callback])
    *
    * @example <caption>Example: Prepending a new element</caption>
    *
    * // Create a new element
    *
    * var newElement = document.createElement('div');
    * newElement.classList.add('mix');
    *
    * // Insert the element into the container
    *
    * mixer.prepend(newElement)
    *     .then(function(state) {
    *         console.log(state.show[0] === newElement); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
    *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    prepend: function () {
      var self = this, args = self.parseInsertArgs(arguments);
      return self.insert(0, args.command.collection, args.animate, args.callback);
    },
    /**
    * Inserts one or more new elements into the container after all existing targets.
    *
    * @example
    *
    * .append(newElements [,animate] [,callback])
    *
    * @example <caption>Example: Appending a new element</caption>
    *
    * // Create a new element
    *
    * var newElement = document.createElement('div');
    * newElement.classList.add('mix');
    *
    * // Insert the element into the container
    *
    * mixer.append(newElement)
    *     .then(function(state) {
    *         console.log(state.show[state.show.length - 1] === newElement); // true
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {(HTMLElement|Array.<HTMLElement>|string)}    newElements
    *      A reference to a single element to insert, an array-like collection of elements, or an HTML string representing a single element.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    append: function () {
      var self = this, args = self.parseInsertArgs(arguments);
      return self.insert(self.state.totalTargets, args.command.collection, args.animate, args.callback);
    },
    /**
    * Removes one or more existing target elements from the container.
    *
    * @example
    *
    * .remove(elements [, animate] [, callback])
    *
    * @example <caption>Example 1: Removing an element by reference</caption>
    *
    * var elementToRemove = containerEl.firstElementChild;
    *
    * mixer.remove(elementToRemove)
    *      .then(function(state) {
    *          console.log(state.targets.indexOf(elementToRemove) === -1); // true
    *      });
    *
    * @example <caption>Example 2: Removing a collection of elements by reference</caption>
    *
    * var elementsToRemove = containerEl.querySelectorAll('.category-a');
    *
    * console.log(elementsToRemove.length) // 3
    *
    * mixer.remove(elementsToRemove)
    *      .then(function() {
    *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
    *      });
    *
    * @example <caption>Example 3: Removing one or more elements by selector</caption>
    *
    * mixer.remove('.category-a')
    *      .then(function() {
    *          console.log(containerEl.querySelectorAll('.category-a').length); // 0
    *      });
    *
    * @example <caption>Example 4: Removing an element by index</caption>
    *
    * console.log(mixer.getState.totalShow); // 4
    *
    * // Remove the element at index 3
    *
    * mixer.remove(3)
    *      .then(function(state) {
    *          console.log(state.totalShow); // 3
    *          console.log(state.show[3]); // undefined
    *      });
    *
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {(HTMLElement|Array.<HTMLElement>|string|number)}    elements
    *      A reference to a single element to remove, an array-like collection of elements, a selector string, or the index of an element to remove.
    * @param       {boolean}   [animate=true]
    *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
    * @param       {function}  [callback=null]
    *      An optional callback function to be invoked after the operation has completed.
    * @return      {Promise.<mixitup.State>}
    *      A promise resolving with the current state object.
    */
    remove: function () {
      var self = this, args = self.parseRemoveArgs(arguments);
      return self.multimix({
        remove: args.command
      }, args.animate, args.callback);
    },
    /**
    * Retrieves the the value of any property or sub-object within the current
    * mixitup configuration, or the whole configuration object.
    *
    * @example
    *
    * .getConfig([stringKey])
    *
    * @example <caption>Example 1: retrieve the entire configuration object</caption>
    *
    * var config = mixer.getConfig(); // Config { ... }
    *
    * @example <caption>Example 2: retrieve a named sub-object of configuration object</caption>
    *
    * var animation = mixer.getConfig('animation'); // ConfigAnimation { ... }
    *
    * @example <caption>Example 3: retrieve a value of configuration object via a dot-notation string key</caption>
    *
    * var effects = mixer.getConfig('animation.effects'); // 'fade scale'
    *
    * @public
    * @instance
    * @since       2.0.0
    * @param       {string}    [stringKey]    A "dot-notation" string key
    * @return      {*}
    */
    getConfig: function (stringKey) {
      var self = this, value = null;
      if (!stringKey) {
        value = self.config;
      } else {
        value = h.getProperty(self.config, stringKey);
      }
      return self.callFilters('valueGetConfig', value, arguments);
    },
    /**
    * Updates the configuration of the mixer, after it has been instantiated.
    *
    * See the Configuration Object documentation for a full list of avilable
    * configuration options.
    *
    * @example
    *
    * .configure(config)
    *
    * @example <caption>Example 1: Updating animation options</caption>
    *
    * mixer.configure({
    *     animation: {
    *         effects: 'fade translateX(-100%)',
    *         duration: 300
    *     }
    * });
    *
    * @example <caption>Example 2: Removing a callback after it has been set</caption>
    *
    * var mixer;
    *
    * function handleMixEndOnce() {
    *     // Do something ..
    *
    *     // Then nullify the callback
    *
    *     mixer.configure({
    *         callbacks: {
    *             onMixEnd: null
    *         }
    *     });
    * };
    *
    * // Instantiate a mixer with a callback defined
    *
    * mixer = mixitup(containerEl, {
    *     callbacks: {
    *         onMixEnd: handleMixEndOnce
    *     }
    * });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {object}    config
    *      An object containing one of more configuration options.
    * @return      {void}
    */
    configure: function (config) {
      var self = this;
      self.callActions('beforeConfigure', arguments);
      h.extend(self.config, config, true, true);
      self.callActions('afterConfigure', arguments);
    },
    /**
    * Returns an object containing information about the current state of the
    * mixer. See the State Object documentation for more information.
    *
    * NB: State objects are immutable and should therefore be regenerated
    * after any operation.
    *
    * @example
    *
    * .getState();
    *
    * @example <caption>Example: Retrieving a state object</caption>
    *
    * var state = mixer.getState();
    *
    * console.log(state.totalShow + 'targets are currently shown');
    *
    * @public
    * @instance
    * @since       2.0.0
    * @return      {mixitup.State} An object reflecting the current state of the mixer.
    */
    getState: function () {
      var self = this, state = null;
      state = new mixitup.State();
      h.extend(state, self.state);
      h.freeze(state);
      return self.callFilters('stateGetState', state, arguments);
    },
    /**
    * Forces the re-indexing all targets within the container.
    *
    * This should only be used if some other piece of code in your application
    * has manipulated the contents of your container, which should be avoided.
    *
    * If you need to add or remove target elements from the container, use
    * the built-in `.insert()` or `.remove()` methods, and MixItUp will keep
    * itself up to date.
    *
    * @example
    *
    * .forceRefresh()
    *
    * @example <caption>Example: Force refreshing the mixer after external DOM manipulation</caption>
    *
    * console.log(mixer.getState().totalShow); // 3
    *
    * // An element is removed from the container via some external DOM manipulation code:
    *
    * containerEl.removeChild(containerEl.firstElementChild);
    *
    * // The mixer does not know that the number of targets has changed:
    *
    * console.log(mixer.getState().totalShow); // 3
    *
    * mixer.forceRefresh();
    *
    * // After forceRefresh, the mixer is in sync again:
    *
    * console.log(mixer.getState().totalShow); // 2
    *
    * @public
    * @instance
    * @since 2.1.2
    * @return {void}
    */
    forceRefresh: function () {
      var self = this;
      self.indexTargets();
    },
    /**
    * Forces the re-rendering of all targets when using the Dataset API.
    *
    * By default, targets are only re-rendered when `data.dirtyCheck` is
    * enabled, and an item's data has changed when `dataset()` is called.
    *
    * The `forceRender()` method allows for the re-rendering of all targets
    * in response to some arbitrary event, such as the changing of the target
    * render function.
    *
    * Targets are rendered against their existing data.
    *
    * @example
    *
    * .forceRender()
    *
    * @example <caption>Example: Force render targets after changing the target render function</caption>
    *
    * console.log(container.innerHTML); // ... &lt;span class="mix"&gt;Foo&lt;/span&gt; ...
    *
    * mixer.configure({
    *     render: {
    *         target: (item) => `&lt;a href="/${item.slug}/" class="mix"&gt;${item.title}&lt;/a&gt;`
    *     }
    * });
    *
    * mixer.forceRender();
    *
    * console.log(container.innerHTML); // ... &lt;a href="/foo/" class="mix"&gt;Foo&lt;/a&gt; ...
    *
    * @public
    * @instance
    * @since 3.2.1
    * @return {void}
    */
    forceRender: function () {
      var self = this, target = null, el = null, id = '';
      for (id in self.cache) {
        target = self.cache[id];
        el = target.render(target.data);
        if (el !== target.dom.el) {
          // Update target element reference
          if (target.isInDom) {
            target.unbindEvents();
            self.dom.parent.replaceChild(el, target.dom.el);
          }
          if (!target.isShown) {
            el.style.display = 'none';
          }
          target.dom.el = el;
          if (target.isInDom) {
            target.bindEvents();
          }
        }
      }
      self.state = self.buildState(self.lastOperation);
    },
    /**
    * Removes mixitup functionality from the container, unbinds all control
    * event handlers, and deletes the mixer instance from MixItUp's internal
    * cache.
    *
    * This should be performed whenever a mixer's container is removed from
    * the DOM, such as during a page change in a single page application,
    * or React's `componentWillUnmount()`.
    *
    * @example
    *
    * .destroy([cleanUp])
    *
    * @example <caption>Example: Destroying the mixer before removing its container element</caption>
    *
    * mixer.destroy();
    *
    * containerEl.parentElement.removeChild(containerEl);
    *
    * @public
    * @instance
    * @since   2.0.0
    * @param   {boolean}   [cleanUp=false]
    *     An optional boolean dictating whether or not to clean up any inline `display: none;` styling applied to hidden targets.
    * @return  {void}
    */
    destroy: function (cleanUp) {
      var self = this, control = null, target = null, i = 0;
      self.callActions('beforeDestroy', arguments);
      for (i = 0; control = self.controls[i]; i++) {
        control.removeBinding(self);
      }
      for (i = 0; target = self.targets[i]; i++) {
        if (cleanUp) {
          target.show();
        }
        target.unbindEvents();
      }
      if (self.dom.container.id.match(/^MixItUp/)) {
        self.dom.container.removeAttribute('id');
      }
      delete mixitup.instances[self.id];
      self.callActions('afterDestroy', arguments);
    }
  });
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.IMoveData = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.posIn = null;
    this.posOut = null;
    this.operation = null;
    this.callback = null;
    this.statusChange = '';
    this.duration = -1;
    this.staggerIndex = -1;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.IMoveData);
  mixitup.IMoveData.prototype = Object.create(mixitup.Base.prototype);
  mixitup.IMoveData.prototype.constructor = mixitup.IMoveData;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.TargetDom = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.el = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.TargetDom);
  mixitup.TargetDom.prototype = Object.create(mixitup.Base.prototype);
  mixitup.TargetDom.prototype.constructor = mixitup.TargetDom;
  /**
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Target = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.id = '';
    this.sortString = '';
    this.mixer = null;
    this.callback = null;
    this.isShown = false;
    this.isBound = false;
    this.isExcluded = false;
    this.isInDom = false;
    this.handler = null;
    this.operation = null;
    this.data = null;
    this.dom = new mixitup.TargetDom();
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Target);
  mixitup.Target.prototype = Object.create(mixitup.Base.prototype);
  h.extend(mixitup.Target.prototype, {
    constructor: mixitup.Target,
    /**
    * Initialises a newly instantiated Target.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {(Element|null)}    el
    * @param   {object}            mixer
    * @param   {object}            [data]
    * @return  {void}
    */
    init: function (el, mixer, data) {
      var self = this, id = '';
      self.callActions('beforeInit', arguments);
      self.mixer = mixer;
      if (!el) {
        // If no element is provided, render it
        el = self.render(data);
      }
      self.cacheDom(el);
      self.bindEvents();
      if (self.dom.el.style.display !== 'none') {
        self.isShown = true;
      }
      if (data && mixer.config.data.uidKey) {
        if (typeof (id = data[mixer.config.data.uidKey]) === 'undefined' || id.toString().length < 1) {
          throw new TypeError(mixitup.messages.errorDatasetInvalidUidKey({
            uidKey: mixer.config.data.uidKey
          }));
        }
        self.id = id;
        self.data = data;
        mixer.cache[id] = self;
      }
      self.callActions('afterInit', arguments);
    },
    /**
    * Renders the target element using a user-defined renderer function.
    *
    * @private
    * @instance
    * @since   3.1.4
    * @param   {object} data
    * @return  {void}
    */
    render: function (data) {
      var self = this, render = null, el = null, temp = null, output = '';
      self.callActions('beforeRender', arguments);
      render = self.callFilters('renderRender', self.mixer.config.render.target, arguments);
      if (typeof render !== 'function') {
        throw new TypeError(mixitup.messages.errorDatasetRendererNotSet());
      }
      output = render(data);
      if (output && typeof output === 'object' && h.isElement(output)) {
        el = output;
      } else if (typeof output === 'string') {
        temp = document.createElement('div');
        temp.innerHTML = output;
        el = temp.firstElementChild;
      }
      return self.callFilters('elRender', el, arguments);
    },
    /**
    * Caches references of DOM elements neccessary for the target's functionality.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Element} el
    * @return  {void}
    */
    cacheDom: function (el) {
      var self = this;
      self.callActions('beforeCacheDom', arguments);
      self.dom.el = el;
      self.callActions('afterCacheDom', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {string}    attributeName
    * @return  {void}
    */
    getSortString: function (attributeName) {
      var self = this, value = self.dom.el.getAttribute('data-' + attributeName) || '';
      self.callActions('beforeGetSortString', arguments);
      value = isNaN(value * 1) ? value.toLowerCase() : value * 1;
      self.sortString = value;
      self.callActions('afterGetSortString', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @return  {void}
    */
    show: function () {
      var self = this;
      self.callActions('beforeShow', arguments);
      if (!self.isShown) {
        self.dom.el.style.display = '';
        self.isShown = true;
      }
      self.callActions('afterShow', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @return  {void}
    */
    hide: function () {
      var self = this;
      self.callActions('beforeHide', arguments);
      if (self.isShown) {
        self.dom.el.style.display = 'none';
        self.isShown = false;
      }
      self.callActions('afterHide', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {mixitup.IMoveData} moveData
    * @return  {void}
    */
    move: function (moveData) {
      var self = this;
      self.callActions('beforeMove', arguments);
      if (!self.isExcluded) {
        self.mixer.targetsMoved++;
      }
      self.applyStylesIn(moveData);
      requestAnimationFrame(function () {
        self.applyStylesOut(moveData);
      });
      self.callActions('afterMove', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {object}    posData
    * @param   {number}    multiplier
    * @return  {void}
    */
    applyTween: function (posData, multiplier) {
      var self = this, propertyName = '', tweenData = null, posIn = posData.posIn, currentTransformValues = [], currentValues = new mixitup.StyleData(), i = -1;
      self.callActions('beforeApplyTween', arguments);
      currentValues.x = posIn.x;
      currentValues.y = posIn.y;
      if (multiplier === 0) {
        self.hide();
      } else if (!self.isShown) {
        self.show();
      }
      for (i = 0; propertyName = mixitup.features.TWEENABLE[i]; i++) {
        tweenData = posData.tweenData[propertyName];
        if (propertyName === 'x') {
          if (!tweenData) continue;
          currentValues.x = posIn.x + tweenData * multiplier;
        } else if (propertyName === 'y') {
          if (!tweenData) continue;
          currentValues.y = posIn.y + tweenData * multiplier;
        } else if (tweenData instanceof mixitup.TransformData) {
          if (!tweenData.value) continue;
          currentValues[propertyName].value = posIn[propertyName].value + tweenData.value * multiplier;
          currentValues[propertyName].unit = tweenData.unit;
          currentTransformValues.push(propertyName + '(' + currentValues[propertyName].value + tweenData.unit + ')');
        } else {
          if (!tweenData) continue;
          currentValues[propertyName] = posIn[propertyName] + tweenData * multiplier;
          self.dom.el.style[propertyName] = currentValues[propertyName];
        }
      }
      if (currentValues.x || currentValues.y) {
        currentTransformValues.unshift('translate(' + currentValues.x + 'px, ' + currentValues.y + 'px)');
      }
      if (currentTransformValues.length) {
        self.dom.el.style[mixitup.features.transformProp] = currentTransformValues.join(' ');
      }
      self.callActions('afterApplyTween', arguments);
    },
    /**
    * Applies the initial styling to a target element before any transition
    * is applied.
    *
    * @private
    * @instance
    * @param   {mixitup.IMoveData} moveData
    * @return  {void}
    */
    applyStylesIn: function (moveData) {
      var self = this, posIn = moveData.posIn, isFading = self.mixer.effectsIn.opacity !== 1, transformValues = [];
      self.callActions('beforeApplyStylesIn', arguments);
      transformValues.push('translate(' + posIn.x + 'px, ' + posIn.y + 'px)');
      if (self.mixer.config.animation.animateResizeTargets) {
        if (moveData.statusChange !== 'show') {
          // Don't apply posIn width or height or showing, as will be 0
          self.dom.el.style.width = posIn.width + 'px';
          self.dom.el.style.height = posIn.height + 'px';
        }
        self.dom.el.style.marginRight = posIn.marginRight + 'px';
        self.dom.el.style.marginBottom = posIn.marginBottom + 'px';
      }
      isFading && (self.dom.el.style.opacity = posIn.opacity);
      if (moveData.statusChange === 'show') {
        transformValues = transformValues.concat(self.mixer.transformIn);
      }
      self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');
      self.callActions('afterApplyStylesIn', arguments);
    },
    /**
    * Applies a transition followed by the final styles for the element to
    * transition towards.
    *
    * @private
    * @instance
    * @param   {mixitup.IMoveData} moveData
    * @return  {void}
    */
    applyStylesOut: function (moveData) {
      var self = this, transitionRules = [], transformValues = [], isResizing = self.mixer.config.animation.animateResizeTargets, isFading = typeof self.mixer.effectsIn.opacity !== 'undefined';
      self.callActions('beforeApplyStylesOut', arguments);
      // Build the transition rules
      transitionRules.push(self.writeTransitionRule(mixitup.features.transformRule, moveData.staggerIndex));
      if (moveData.statusChange !== 'none') {
        transitionRules.push(self.writeTransitionRule('opacity', moveData.staggerIndex, moveData.duration));
      }
      if (isResizing) {
        transitionRules.push(self.writeTransitionRule('width', moveData.staggerIndex, moveData.duration));
        transitionRules.push(self.writeTransitionRule('height', moveData.staggerIndex, moveData.duration));
        transitionRules.push(self.writeTransitionRule('margin', moveData.staggerIndex, moveData.duration));
      }
      // If no callback was provided, the element will
      // not transition in any way so tag it as "immovable"
      if (!moveData.callback) {
        self.mixer.targetsImmovable++;
        if (self.mixer.targetsMoved === self.mixer.targetsImmovable) {
          // If the total targets moved is equal to the
          // number of immovable targets, the operation
          // should be considered finished
          self.mixer.cleanUp(moveData.operation);
        }
        return;
      }
      // If the target will transition in some fasion,
      // assign a callback function
      self.operation = moveData.operation;
      self.callback = moveData.callback;
      // As long as the target is not excluded, increment
      // the total number of targets bound
      !self.isExcluded && self.mixer.targetsBound++;
      // Tag the target as bound to differentiate from transitionEnd
      // events that may come from stylesheet driven effects
      self.isBound = true;
      // Apply the transition
      self.applyTransition(transitionRules);
      // Apply width, height and margin negation
      if (isResizing && moveData.posOut.width > 0 && moveData.posOut.height > 0) {
        self.dom.el.style.width = moveData.posOut.width + 'px';
        self.dom.el.style.height = moveData.posOut.height + 'px';
        self.dom.el.style.marginRight = moveData.posOut.marginRight + 'px';
        self.dom.el.style.marginBottom = moveData.posOut.marginBottom + 'px';
      }
      if (!self.mixer.config.animation.nudge && moveData.statusChange === 'hide') {
        // If we're not nudging, the translation should be
        // applied before any other transforms to prevent
        // lateral movement
        transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
      }
      // Apply fade
      switch (moveData.statusChange) {
        case 'hide':
          isFading && (self.dom.el.style.opacity = self.mixer.effectsOut.opacity);
          transformValues = transformValues.concat(self.mixer.transformOut);
          break;
        case 'show':
          isFading && (self.dom.el.style.opacity = 1);
      }
      if (self.mixer.config.animation.nudge || !self.mixer.config.animation.nudge && moveData.statusChange !== 'hide') {
        // Opposite of above - apply translate after
        // other transform
        transformValues.push('translate(' + moveData.posOut.x + 'px, ' + moveData.posOut.y + 'px)');
      }
      // Apply transforms
      self.dom.el.style[mixitup.features.transformProp] = transformValues.join(' ');
      self.callActions('afterApplyStylesOut', arguments);
    },
    /**
    * Combines the name of a CSS property with the appropriate duration and delay
    * values to created a valid transition rule.
    *
    * @private
    * @instance
    * @since   3.0.0
    * @param   {string}    property
    * @param   {number}    staggerIndex
    * @param   {number}    duration
    * @return  {string}
    */
    writeTransitionRule: function (property, staggerIndex, duration) {
      var self = this, delay = self.getDelay(staggerIndex), rule = '';
      rule = property + ' ' + (duration > 0 ? duration : self.mixer.config.animation.duration) + 'ms ' + delay + 'ms ' + (property === 'opacity' ? 'linear' : self.mixer.config.animation.easing);
      return self.callFilters('ruleWriteTransitionRule', rule, arguments);
    },
    /**
    * Calculates the transition delay for each target element based on its index, if
    * staggering is applied. If defined, A custom `animation.staggerSeqeuence`
    * function can be used to manipulate the order of indices to produce custom
    * stagger effects (e.g. for use in a grid with irregular row lengths).
    *
    * @private
    * @instance
    * @since   2.0.0
    * @param   {number}    index
    * @return  {number}
    */
    getDelay: function (index) {
      var self = this, delay = -1;
      if (typeof self.mixer.config.animation.staggerSequence === 'function') {
        index = self.mixer.config.animation.staggerSequence.call(self, index, self.state);
      }
      delay = !!self.mixer.staggerDuration ? index * self.mixer.staggerDuration : 0;
      return self.callFilters('delayGetDelay', delay, arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {string[]}  rules
    * @return  {void}
    */
    applyTransition: function (rules) {
      var self = this, transitionString = rules.join(', ');
      self.callActions('beforeApplyTransition', arguments);
      self.dom.el.style[mixitup.features.transitionProp] = transitionString;
      self.callActions('afterApplyTransition', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Event} e
    * @return  {void}
    */
    handleTransitionEnd: function (e) {
      var self = this, propName = e.propertyName, canResize = self.mixer.config.animation.animateResizeTargets;
      self.callActions('beforeHandleTransitionEnd', arguments);
      if (self.isBound && e.target.matches(self.mixer.config.selectors.target) && (propName.indexOf('transform') > -1 || propName.indexOf('opacity') > -1 || canResize && propName.indexOf('height') > -1 || canResize && propName.indexOf('width') > -1 || canResize && propName.indexOf('margin') > -1)) {
        self.callback.call(self, self.operation);
        self.isBound = false;
        self.callback = null;
        self.operation = null;
      }
      self.callActions('afterHandleTransitionEnd', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {Event}     e
    * @return  {void}
    */
    eventBus: function (e) {
      var self = this;
      self.callActions('beforeEventBus', arguments);
      switch (e.type) {
        case 'webkitTransitionEnd':
        case 'transitionend':
          self.handleTransitionEnd(e);
      }
      self.callActions('afterEventBus', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @return  {void}
    */
    unbindEvents: function () {
      var self = this;
      self.callActions('beforeUnbindEvents', arguments);
      h.off(self.dom.el, 'webkitTransitionEnd', self.handler);
      h.off(self.dom.el, 'transitionend', self.handler);
      self.callActions('afterUnbindEvents', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @return  {void}
    */
    bindEvents: function () {
      var self = this, transitionEndEvent = '';
      self.callActions('beforeBindEvents', arguments);
      transitionEndEvent = mixitup.features.transitionPrefix === 'webkit' ? 'webkitTransitionEnd' : 'transitionend';
      self.handler = function (e) {
        return self.eventBus(e);
      };
      h.on(self.dom.el, transitionEndEvent, self.handler);
      self.callActions('afterBindEvents', arguments);
    },
    /**
    * @private
    * @instance
    * @since   3.0.0
    * @param   {boolean}   [getBox]
    * @return  {PosData}
    */
    getPosData: function (getBox) {
      var self = this, styles = {}, rect = null, posData = new mixitup.StyleData();
      self.callActions('beforeGetPosData', arguments);
      posData.x = self.dom.el.offsetLeft;
      posData.y = self.dom.el.offsetTop;
      if (self.mixer.config.animation.animateResizeTargets || getBox) {
        rect = self.dom.el.getBoundingClientRect();
        posData.top = rect.top;
        posData.right = rect.right;
        posData.bottom = rect.bottom;
        posData.left = rect.left;
        posData.width = rect.width;
        posData.height = rect.height;
      }
      if (self.mixer.config.animation.animateResizeTargets) {
        styles = window.getComputedStyle(self.dom.el);
        posData.marginBottom = parseFloat(styles.marginBottom);
        posData.marginRight = parseFloat(styles.marginRight);
      }
      return self.callFilters('posDataGetPosData', posData, arguments);
    },
    /**
    * @private
    * @instance
    * @since       3.0.0
    * @return      {void}
    */
    cleanUp: function () {
      var self = this;
      self.callActions('beforeCleanUp', arguments);
      self.dom.el.style[mixitup.features.transformProp] = '';
      self.dom.el.style[mixitup.features.transitionProp] = '';
      self.dom.el.style.opacity = '';
      if (self.mixer.config.animation.animateResizeTargets) {
        self.dom.el.style.width = '';
        self.dom.el.style.height = '';
        self.dom.el.style.marginRight = '';
        self.dom.el.style.marginBottom = '';
      }
      self.callActions('afterCleanUp', arguments);
    }
  });
  /**
  * A jQuery-collection-like wrapper around one or more `mixitup.Mixer` instances
  * allowing simultaneous control of said instances similar to the MixItUp 2 API.
  *
  * @example
  * new mixitup.Collection(instances)
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  * @param       {mixitup.Mixer[]}   instances
  */
  mixitup.Collection = function (instances) {
    var instance = null, i = -1;
    this.callActions('beforeConstruct');
    for (i = 0; instance = instances[i]; i++) {
      this[i] = instance;
    }
    this.length = instances.length;
    this.callActions('afterConstruct');
    h.freeze(this);
  };
  mixitup.BaseStatic.call(mixitup.Collection);
  mixitup.Collection.prototype = Object.create(mixitup.Base.prototype);
  h.extend(mixitup.Collection.prototype, /** @lends mixitup.Collection*/
  {
    constructor: mixitup.Collection,
    /**
    * Calls a method on all instances in the collection by passing the method
    * name as a string followed by any applicable parameters to be curried into
    * to the method.
    *
    * @example
    * .mixitup(methodName[,arg1][,arg2..]);
    *
    * @example
    * var collection = new Collection([mixer1, mixer2]);
    *
    * return collection.mixitup('filter', '.category-a')
    *     .then(function(states) {
    *         state.forEach(function(state) {
    *             console.log(state.activeFilter.selector); // .category-a
    *         });
    *     });
    *
    * @public
    * @instance
    * @since       3.0.0
    * @param       {string}  methodName
    * @return      {Promise<Array<mixitup.State>>}
    */
    mixitup: function (methodName) {
      var self = this, instance = null, args = Array.prototype.slice.call(arguments), tasks = [], i = -1;
      this.callActions('beforeMixitup');
      args.shift();
      for (i = 0; instance = self[i]; i++) {
        tasks.push(instance[methodName].apply(instance, args));
      }
      return self.callFilters('promiseMixitup', h.all(tasks, mixitup.libraries), arguments);
    }
  });
  /**
  * `mixitup.Operation` objects contain all data neccessary to describe the full
  * lifecycle of any MixItUp operation. They can be used to compute and store an
  * operation for use at a later time (e.g. programmatic tweening).
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Operation = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.id = '';
    this.args = [];
    this.command = null;
    this.showPosData = [];
    this.toHidePosData = [];
    this.startState = null;
    this.newState = null;
    this.docState = null;
    this.willSort = false;
    this.willChangeLayout = false;
    this.hasEffect = false;
    this.hasFailed = false;
    this.triggerElement = null;
    this.show = [];
    this.hide = [];
    this.matching = [];
    this.toShow = [];
    this.toHide = [];
    this.toMove = [];
    this.toRemove = [];
    this.startOrder = [];
    this.newOrder = [];
    this.startSort = null;
    this.newSort = null;
    this.startFilter = null;
    this.newFilter = null;
    this.startDataset = null;
    this.newDataset = null;
    this.viewportDeltaX = 0;
    this.viewportDeltaY = 0;
    this.startX = 0;
    this.startY = 0;
    this.startHeight = 0;
    this.startWidth = 0;
    this.newX = 0;
    this.newY = 0;
    this.newHeight = 0;
    this.newWidth = 0;
    this.startContainerClassName = '';
    this.startDisplay = '';
    this.newContainerClassName = '';
    this.newDisplay = '';
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Operation);
  mixitup.Operation.prototype = Object.create(mixitup.Base.prototype);
  mixitup.Operation.prototype.constructor = mixitup.Operation;
  /**
  * `mixitup.State` objects expose various pieces of data detailing the state of
  * a MixItUp instance. They are provided at the start and end of any operation via
  * callbacks and events, with the most recent state stored between operations
  * for retrieval at any time via the API.
  *
  * @constructor
  * @namespace
  * @memberof    mixitup
  * @public
  * @since       3.0.0
  */
  mixitup.State = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /**
    * The ID of the mixer instance.
    *
    * @name        id
    * @memberof    mixitup.State
    * @instance
    * @type        {string}
    * @default     ''
    */
    this.id = '';
    /**
    * The currently active filter command as set by a control click or API call.
    *
    * @name        activeFilter
    * @memberof    mixitup.State
    * @instance
    * @type        {mixitup.CommandFilter}
    * @default     null
    */
    this.activeFilter = null;
    /**
    * The currently active sort command as set by a control click or API call.
    *
    * @name        activeSort
    * @memberof    mixitup.State
    * @instance
    * @type        {mixitup.CommandSort}
    * @default     null
    */
    this.activeSort = null;
    /**
    * The current layout-specific container class name, if applied.
    *
    * @name        activeContainerClassName
    * @memberof    mixitup.State
    * @instance
    * @type        {string}
    * @default     ''
    */
    this.activeContainerClassName = '';
    /**
    * A reference to the container element that the mixer is instantiated on.
    *
    * @name        container
    * @memberof    mixitup.State
    * @instance
    * @type        {Element}
    * @default     null
    */
    this.container = null;
    /**
    * An array of all target elements indexed by the mixer.
    *
    * @name        targets
    * @memberof    mixitup.State
    * @instance
    * @type        {Array.<Element>}
    * @default     []
    */
    this.targets = [];
    /**
    * An array of all target elements not matching the current filter.
    *
    * @name        hide
    * @memberof    mixitup.State
    * @instance
    * @type        {Array.<Element>}
    * @default     []
    */
    this.hide = [];
    /**
    * An array of all target elements matching the current filter and any additional
    * limits applied such as pagination.
    *
    * @name        show
    * @memberof    mixitup.State
    * @instance
    * @type        {Array.<Element>}
    * @default     []
    */
    this.show = [];
    /**
    * An array of all target elements matching the current filter irrespective of
    * any additional limits applied such as pagination.
    *
    * @name        matching
    * @memberof    mixitup.State
    * @instance
    * @type        {Array.<Element>}
    * @default     []
    */
    this.matching = [];
    /**
    * An integer representing the total number of target elements indexed by the
    * mixer. Equivalent to `state.targets.length`.
    *
    * @name        totalTargets
    * @memberof    mixitup.State
    * @instance
    * @type        {number}
    * @default     -1
    */
    this.totalTargets = -1;
    /**
    * An integer representing the total number of target elements matching the
    * current filter and any additional limits applied such as pagination.
    * Equivalent to `state.show.length`.
    *
    * @name        totalShow
    * @memberof    mixitup.State
    * @instance
    * @type        {number}
    * @default     -1
    */
    this.totalShow = -1;
    /**
    * An integer representing the total number of target elements not matching
    * the current filter. Equivalent to `state.hide.length`.
    *
    * @name        totalHide
    * @memberof    mixitup.State
    * @instance
    * @type        {number}
    * @default     -1
    */
    this.totalHide = -1;
    /**
    * An integer representing the total number of target elements matching the
    * current filter irrespective of any other limits applied such as pagination.
    * Equivalent to `state.matching.length`.
    *
    * @name        totalMatching
    * @memberof    mixitup.State
    * @instance
    * @type        {number}
    * @default     -1
    */
    this.totalMatching = -1;
    /**
    * A boolean indicating whether the last operation "failed", i.e. no targets
    * could be found matching the filter.
    *
    * @name        hasFailed
    * @memberof    mixitup.State
    * @instance
    * @type        {boolean}
    * @default     false
    */
    this.hasFailed = false;
    /**
    * The DOM element that was clicked if the last operation was triggered by the
    * clicking of a control and not an API call.
    *
    * @name        triggerElement
    * @memberof    mixitup.State
    * @instance
    * @type        {Element|null}
    * @default     null
    */
    this.triggerElement = null;
    /**
    * The currently active dataset underlying the rendered targets, if the
    * dataset API is in use.
    *
    * @name        activeDataset
    * @memberof    mixitup.State
    * @instance
    * @type        {Array.<object>}
    * @default     null
    */
    this.activeDataset = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.State);
  mixitup.State.prototype = Object.create(mixitup.Base.prototype);
  mixitup.State.prototype.constructor = mixitup.State;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.UserInstruction = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    this.command = {};
    this.animate = false;
    this.callback = null;
    this.callActions('afterConstruct');
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.UserInstruction);
  mixitup.UserInstruction.prototype = Object.create(mixitup.Base.prototype);
  mixitup.UserInstruction.prototype.constructor = mixitup.UserInstruction;
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  */
  mixitup.Messages = function () {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct');
    /*Errors
    -----------------------------------------------------------------------------*/
    this.ERROR_FACTORY_INVALID_CONTAINER = '[MixItUp] An invalid selector or element reference was passed to the mixitup factory function';
    this.ERROR_FACTORY_CONTAINER_NOT_FOUND = '[MixItUp] The provided selector yielded no container element';
    this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = '[MixItUp] Invalid value for `animation.effects`';
    this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = '[MixItUp] Invalid value for `controls.scope`';
    this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}';
    this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?';
    this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = '[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`';
    this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items';
    this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.';
    this.ERROR_INSERT_INVALID_ARGUMENTS = '[MixItUp] Please provider either an index or a sibling and position to insert, not both';
    this.ERROR_INSERT_PREEXISTING_ELEMENT = '[MixItUp] An element to be inserted already exists in the container';
    this.ERROR_FILTER_INVALID_ARGUMENTS = '[MixItUp] Please provide either a selector or collection `.filter()`, not both';
    this.ERROR_DATASET_NOT_SET = '[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`';
    this.ERROR_DATASET_PRERENDERED_MISMATCH = '[MixItUp] `load.dataset` does not match pre-rendered targets';
    this.ERROR_DATASET_RENDERER_NOT_SET = '[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`';
    this.ERROR_SORT_NON_EXISTENT_ELEMENT = '[MixItUp] An element to be sorted does not already exist in the container';
    /*Warnings
    -----------------------------------------------------------------------------*/
    this.WARNING_FACTORY_PREEXISTING_INSTANCE = '[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored.' + ' If you wish to perform additional methods on this instance, please create a reference.';
    this.WARNING_INSERT_NO_ELEMENTS = '[MixItUp] WARNING: No valid elements were passed to `.insert()`';
    this.WARNING_REMOVE_NO_ELEMENTS = '[MixItUp] WARNING: No valid elements were passed to `.remove()`';
    this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = '[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the ' + 'queue is full or queuing is disabled.';
    this.WARNING_GET_OPERATION_INSTANCE_BUSY = '[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.';
    this.WARNING_NO_PROMISE_IMPLEMENTATION = '[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install' + ' an ES6 Promise polyfill.';
    this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements' + ' which may product unexpected sort output';
    this.callActions('afterConstruct');
    this.compileTemplates();
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Messages);
  mixitup.Messages.prototype = Object.create(mixitup.Base.prototype);
  mixitup.Messages.prototype.constructor = mixitup.Messages;
  /**
  * @return {void}
  */
  mixitup.Messages.prototype.compileTemplates = function () {
    var errorKey = '';
    var errorMessage = '';
    for (errorKey in this) {
      if (typeof (errorMessage = this[errorKey]) !== 'string') continue;
      this[h.camelCase(errorKey)] = h.template(errorMessage);
    }
  };
  mixitup.messages = new mixitup.Messages();
  /**
  * @constructor
  * @memberof    mixitup
  * @private
  * @since       3.0.0
  * @param       {mixitup.Mixer} mixer
  */
  mixitup.Facade = function Mixer(mixer) {
    mixitup.Base.call(this);
    this.callActions('beforeConstruct', arguments);
    this.configure = mixer.configure.bind(mixer);
    this.show = mixer.show.bind(mixer);
    this.hide = mixer.hide.bind(mixer);
    this.filter = mixer.filter.bind(mixer);
    this.toggleOn = mixer.toggleOn.bind(mixer);
    this.toggleOff = mixer.toggleOff.bind(mixer);
    this.sort = mixer.sort.bind(mixer);
    this.changeLayout = mixer.changeLayout.bind(mixer);
    this.multimix = mixer.multimix.bind(mixer);
    this.dataset = mixer.dataset.bind(mixer);
    this.tween = mixer.tween.bind(mixer);
    this.insert = mixer.insert.bind(mixer);
    this.insertBefore = mixer.insertBefore.bind(mixer);
    this.insertAfter = mixer.insertAfter.bind(mixer);
    this.prepend = mixer.prepend.bind(mixer);
    this.append = mixer.append.bind(mixer);
    this.remove = mixer.remove.bind(mixer);
    this.destroy = mixer.destroy.bind(mixer);
    this.forceRefresh = mixer.forceRefresh.bind(mixer);
    this.forceRender = mixer.forceRender.bind(mixer);
    this.isMixing = mixer.isMixing.bind(mixer);
    this.getOperation = mixer.getOperation.bind(mixer);
    this.getConfig = mixer.getConfig.bind(mixer);
    this.getState = mixer.getState.bind(mixer);
    this.callActions('afterConstruct', arguments);
    h.freeze(this);
    h.seal(this);
  };
  mixitup.BaseStatic.call(mixitup.Facade);
  mixitup.Facade.prototype = Object.create(mixitup.Base.prototype);
  mixitup.Facade.prototype.constructor = mixitup.Facade;
  if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = mixitup;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return mixitup;
    });
  } else if (typeof window.mixitup === 'undefined' || typeof window.mixitup !== 'function') {
    window.mixitup = mixitup;
  }
  mixitup.BaseStatic.call(mixitup.constructor);
  mixitup.NAME = 'mixitup';
  mixitup.CORE_VERSION = '3.3.1';
})(window);

},{}],"2NsZw":[function(require,module,exports) {
/**
 * Swiper 6.5.9
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 30, 2021
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Swiper = require('./cjs/components/core/core-class');
var Virtual = require('./cjs/components/virtual/virtual');
var Keyboard = require('./cjs/components/keyboard/keyboard');
var Mousewheel = require('./cjs/components/mousewheel/mousewheel');
var Navigation = require('./cjs/components/navigation/navigation');
var Pagination = require('./cjs/components/pagination/pagination');
var Scrollbar = require('./cjs/components/scrollbar/scrollbar');
var Parallax = require('./cjs/components/parallax/parallax');
var Zoom = require('./cjs/components/zoom/zoom');
var Lazy = require('./cjs/components/lazy/lazy');
var Controller = require('./cjs/components/controller/controller');
var A11y = require('./cjs/components/a11y/a11y');
var History = require('./cjs/components/history/history');
var HashNavigation = require('./cjs/components/hash-navigation/hash-navigation');
var Autoplay = require('./cjs/components/autoplay/autoplay');
var EffectFade = require('./cjs/components/effect-fade/effect-fade');
var EffectCube = require('./cjs/components/effect-cube/effect-cube');
var EffectFlip = require('./cjs/components/effect-flip/effect-flip');
var EffectCoverflow = require('./cjs/components/effect-coverflow/effect-coverflow');
var Thumbs = require('./cjs/components/thumbs/thumbs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Swiper__default = /*#__PURE__*/_interopDefaultLegacy(Swiper);
var Virtual__default = /*#__PURE__*/_interopDefaultLegacy(Virtual);
var Keyboard__default = /*#__PURE__*/_interopDefaultLegacy(Keyboard);
var Mousewheel__default = /*#__PURE__*/_interopDefaultLegacy(Mousewheel);
var Navigation__default = /*#__PURE__*/_interopDefaultLegacy(Navigation);
var Pagination__default = /*#__PURE__*/_interopDefaultLegacy(Pagination);
var Scrollbar__default = /*#__PURE__*/_interopDefaultLegacy(Scrollbar);
var Parallax__default = /*#__PURE__*/_interopDefaultLegacy(Parallax);
var Zoom__default = /*#__PURE__*/_interopDefaultLegacy(Zoom);
var Lazy__default = /*#__PURE__*/_interopDefaultLegacy(Lazy);
var Controller__default = /*#__PURE__*/_interopDefaultLegacy(Controller);
var A11y__default = /*#__PURE__*/_interopDefaultLegacy(A11y);
var History__default = /*#__PURE__*/_interopDefaultLegacy(History);
var HashNavigation__default = /*#__PURE__*/_interopDefaultLegacy(HashNavigation);
var Autoplay__default = /*#__PURE__*/_interopDefaultLegacy(Autoplay);
var EffectFade__default = /*#__PURE__*/_interopDefaultLegacy(EffectFade);
var EffectCube__default = /*#__PURE__*/_interopDefaultLegacy(EffectCube);
var EffectFlip__default = /*#__PURE__*/_interopDefaultLegacy(EffectFlip);
var EffectCoverflow__default = /*#__PURE__*/_interopDefaultLegacy(EffectCoverflow);
var Thumbs__default = /*#__PURE__*/_interopDefaultLegacy(Thumbs);

// Swiper Class
var components = [Virtual__default['default'], Keyboard__default['default'], Mousewheel__default['default'], Navigation__default['default'], Pagination__default['default'], Scrollbar__default['default'], Parallax__default['default'], Zoom__default['default'], Lazy__default['default'], Controller__default['default'], A11y__default['default'], History__default['default'], HashNavigation__default['default'], Autoplay__default['default'], EffectFade__default['default'], EffectCube__default['default'], EffectFlip__default['default'], EffectCoverflow__default['default'], Thumbs__default['default']];
Swiper__default['default'].use(components);

Object.defineProperty(exports, 'Swiper', {
  enumerable: true,
  get: function () {
    return Swiper__default['default'];
  }
});
Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function () {
    return Swiper__default['default'];
  }
});

},{"./cjs/components/core/core-class":"6Odzd","./cjs/components/virtual/virtual":"1aUod","./cjs/components/keyboard/keyboard":"3yJSV","./cjs/components/mousewheel/mousewheel":"6VZpd","./cjs/components/navigation/navigation":"7E6b3","./cjs/components/pagination/pagination":"2EOUe","./cjs/components/scrollbar/scrollbar":"4565m","./cjs/components/parallax/parallax":"1ICdr","./cjs/components/zoom/zoom":"3bEdf","./cjs/components/lazy/lazy":"1eGK2","./cjs/components/controller/controller":"2CrDl","./cjs/components/a11y/a11y":"NwHEH","./cjs/components/history/history":"1VWrh","./cjs/components/hash-navigation/hash-navigation":"5bJ1F","./cjs/components/autoplay/autoplay":"1c9IM","./cjs/components/effect-fade/effect-fade":"3NK03","./cjs/components/effect-cube/effect-cube":"6b0Ql","./cjs/components/effect-flip/effect-flip":"1uzaE","./cjs/components/effect-coverflow/effect-coverflow":"2zbbE","./cjs/components/thumbs/thumbs":"7G7Rk"}],"6Odzd":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

var _getSupport = require("../../utils/get-support");

var _getDevice = require("../../utils/get-device");

var _getBrowser = require("../../utils/get-browser");

var _resize = _interopRequireDefault(require("../../modules/resize/resize"));

var _observer = _interopRequireDefault(require("../../modules/observer/observer"));

var _modular = _interopRequireDefault(require("./modular"));

var _eventsEmitter = _interopRequireDefault(require("./events-emitter"));

var _index = _interopRequireDefault(require("./update/index"));

var _index2 = _interopRequireDefault(require("./translate/index"));

var _index3 = _interopRequireDefault(require("./transition/index"));

var _index4 = _interopRequireDefault(require("./slide/index"));

var _index5 = _interopRequireDefault(require("./loop/index"));

var _index6 = _interopRequireDefault(require("./grab-cursor/index"));

var _index7 = _interopRequireDefault(require("./manipulation/index"));

var _index8 = _interopRequireDefault(require("./events/index"));

var _index9 = _interopRequireDefault(require("./breakpoints/index"));

var _index10 = _interopRequireDefault(require("./classes/index"));

var _index11 = _interopRequireDefault(require("./images/index"));

var _index12 = _interopRequireDefault(require("./check-overflow/index"));

var _defaults = _interopRequireDefault(require("./defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var prototypes = {
  modular: _modular.default,
  eventsEmitter: _eventsEmitter.default,
  update: _index.default,
  translate: _index2.default,
  transition: _index3.default,
  slide: _index4.default,
  loop: _index5.default,
  grabCursor: _index6.default,
  manipulation: _index7.default,
  events: _index8.default,
  breakpoints: _index9.default,
  checkOverflow: _index12.default,
  classes: _index10.default,
  images: _index11.default
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = (0, _utils.extend)({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && (0, _dom.default)(params.el).length > 1) {
      var swipers = [];
      (0, _dom.default)(params.el).each(function (containerEl) {
        var newParams = (0, _utils.extend)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = (0, _getSupport.getSupport)();
    swiper.device = (0, _getDevice.getDevice)({
      userAgent: params.userAgent
    });
    swiper.browser = (0, _getBrowser.getBrowser)();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;
        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = (0, _utils.extend)({}, _defaults.default);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = (0, _utils.extend)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0, _utils.extend)({}, swiper.params);
    swiper.passedParams = (0, _utils.extend)({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _dom.default; // Extend Swiper

    (0, _utils.extend)(swiper, {
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: (0, _dom.default)(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video, label',
        // Last click time
        lastClickTime: (0, _utils.now)(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = (0, _dom.default)(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper; // Find Wrapper

    var $wrapperEl;

    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
      $wrapperEl = (0, _dom.default)(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

      $wrapperEl.children = function (options) {
        return $el.children(options);
      };
    } else {
      $wrapperEl = $el.children("." + swiper.params.wrapperClass);
    }

    (0, _utils.extend)(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      (0, _utils.deleteProps)(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    (0, _utils.extend)(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + (0, _utils.now)();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults.default;
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_resize.default, _observer.default]);
var _default = Swiper;
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY","../../utils/get-support":"2upTO","../../utils/get-device":"3w6L7","../../utils/get-browser":"61TTd","../../modules/resize/resize":"4NsyD","../../modules/observer/observer":"6D25a","./modular":"6hUVx","./events-emitter":"1JLpO","./update/index":"62RuO","./translate/index":"4oc7e","./transition/index":"3U0Fv","./slide/index":"1HtSA","./loop/index":"5MoPB","./grab-cursor/index":"7DzU5","./manipulation/index":"2jxc4","./events/index":"7W0Zl","./breakpoints/index":"2iH01","./classes/index":"7olH7","./images/index":"17NTi","./check-overflow/index":"ZxL0d","./defaults":"01aZH"}],"36a0X":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = require("dom7");

var Methods = {
  addClass: _dom.addClass,
  removeClass: _dom.removeClass,
  hasClass: _dom.hasClass,
  toggleClass: _dom.toggleClass,
  attr: _dom.attr,
  removeAttr: _dom.removeAttr,
  transform: _dom.transform,
  transition: _dom.transition,
  on: _dom.on,
  off: _dom.off,
  trigger: _dom.trigger,
  transitionEnd: _dom.transitionEnd,
  outerWidth: _dom.outerWidth,
  outerHeight: _dom.outerHeight,
  styles: _dom.styles,
  offset: _dom.offset,
  css: _dom.css,
  each: _dom.each,
  html: _dom.html,
  text: _dom.text,
  is: _dom.is,
  index: _dom.index,
  eq: _dom.eq,
  append: _dom.append,
  prepend: _dom.prepend,
  next: _dom.next,
  nextAll: _dom.nextAll,
  prev: _dom.prev,
  prevAll: _dom.prevAll,
  parent: _dom.parent,
  parents: _dom.parents,
  closest: _dom.closest,
  find: _dom.find,
  children: _dom.children,
  filter: _dom.filter,
  remove: _dom.remove
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty(_dom.$.fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
var _default = _dom.$;
exports.default = _default;
},{"dom7":"1m8kk"}],"1m8kk":[function(require,module,exports) {
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ssrWindow = require('ssr-window');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = ssrWindow.getWindow();
  var document = ssrWindow.getDocument();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = ssrWindow.getWindow();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = ssrWindow.getWindow();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = ssrWindow.getWindow();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = ssrWindow.getWindow();
    var document = ssrWindow.getDocument();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = ssrWindow.getWindow();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = ssrWindow.getWindow();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = ssrWindow.getWindow();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = ssrWindow.getWindow();
  var document = ssrWindow.getDocument();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = ssrWindow.getDocument();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = ssrWindow.getDocument();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = ssrWindow.getWindow();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = ssrWindow.getWindow();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

exports.$ = $;
exports.add = add;
exports.addClass = addClass;
exports.animate = animate;
exports.animationEnd = animationEnd;
exports.append = append;
exports.appendTo = appendTo;
exports.attr = attr;
exports.blur = blur;
exports.change = change;
exports.children = children;
exports.click = click;
exports.closest = closest;
exports.css = css;
exports.data = data;
exports.dataset = dataset;
exports.default = $;
exports.detach = detach;
exports.each = each;
exports.empty = empty;
exports.eq = eq;
exports.filter = filter;
exports.find = find;
exports.focus = focus;
exports.focusin = focusin;
exports.focusout = focusout;
exports.hasClass = hasClass;
exports.height = height;
exports.hide = hide;
exports.html = html;
exports.index = index;
exports.insertAfter = insertAfter;
exports.insertBefore = insertBefore;
exports.is = is;
exports.keydown = keydown;
exports.keypress = keypress;
exports.keyup = keyup;
exports.mousedown = mousedown;
exports.mouseenter = mouseenter;
exports.mouseleave = mouseleave;
exports.mousemove = mousemove;
exports.mouseout = mouseout;
exports.mouseover = mouseover;
exports.mouseup = mouseup;
exports.next = next;
exports.nextAll = nextAll;
exports.off = off;
exports.offset = offset;
exports.on = on;
exports.once = once;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.parent = parent;
exports.parents = parents;
exports.prepend = prepend;
exports.prependTo = prependTo;
exports.prev = prev;
exports.prevAll = prevAll;
exports.prop = prop;
exports.remove = remove;
exports.removeAttr = removeAttr;
exports.removeClass = removeClass;
exports.removeData = removeData;
exports.resize = resize;
exports.scroll = scroll;
exports.scrollLeft = scrollLeft;
exports.scrollTo = scrollTo;
exports.scrollTop = scrollTop;
exports.show = show;
exports.siblings = siblings;
exports.stop = stop;
exports.styles = styles;
exports.submit = submit;
exports.text = text;
exports.toggleClass = toggleClass;
exports.touchend = touchend;
exports.touchmove = touchmove;
exports.touchstart = touchstart;
exports.transform = transform;
exports.transition = transition;
exports.transitionEnd = transitionEnd;
exports.trigger = trigger;
exports.val = val;
exports.value = value;
exports.width = width;

},{"ssr-window":"6mQo3"}],"6mQo3":[function(require,module,exports) {
var define;
/**
* SSR Window 3.0.0
* Better handling for window object in SSR environment
* https://github.com/nolimits4web/ssr-window
*
* Copyright 2020, Vladimir Kharlampidi
*
* Licensed under MIT
*
* Released on: November 9, 2020
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.ssrWindow = {}));
})(this, function (exports) {
  "use strict";
  /*eslint-disable no-param-reassign*/
  function isObject(obj) {
    return obj !== null && typeof obj === 'object' && ('constructor' in obj) && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: ''
    },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return {
        initEvent: function () {}
      };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        }
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };
  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return '';
        }
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    },
    requestAnimationFrame: function (callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
  }
  exports.extend = extend;
  exports.getDocument = getDocument;
  exports.getWindow = getWindow;
  exports.ssrDocument = ssrDocument;
  exports.ssrWindow = ssrWindow;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

},{}],"3xqzY":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.deleteProps = deleteProps;
exports.nextTick = nextTick;
exports.now = now;
exports.getTranslate = getTranslate;
exports.isObject = isObject;
exports.extend = extend;
exports.bindModuleMethods = bindModuleMethods;
exports.getComputedStyle = getComputedStyle;
exports.classesToSelector = classesToSelector;

var _ssrWindow = require("ssr-window");

function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = (0, _ssrWindow.getWindow)();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = (0, _ssrWindow.getWindow)();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return "." + classes.trim().replace(/([\.:\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.');
}
},{"ssr-window":"6mQo3"}],"2upTO":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.getSupport = getSupport;

var _ssrWindow = require("ssr-window");

var support;

function calcSupport() {
  var window = (0, _ssrWindow.getWindow)();
  var document = (0, _ssrWindow.getDocument)();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}
},{"ssr-window":"6mQo3"}],"3w6L7":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.getDevice = getDevice;

var _ssrWindow = require("ssr-window");

var _getSupport = require("./get-support");

var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = (0, _getSupport.getSupport)();
  var window = (0, _ssrWindow.getWindow)();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}
},{"ssr-window":"6mQo3","./get-support":"2upTO"}],"61TTd":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.getBrowser = getBrowser;

var _ssrWindow = require("ssr-window");

var browser;

function calcBrowser() {
  var window = (0, _ssrWindow.getWindow)();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}
},{"ssr-window":"6mQo3"}],"4NsyD":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

var supportsResizeObserver = function supportsResizeObserver() {
  var window = (0, _ssrWindow.getWindow)();
  return typeof window.ResizeObserver !== 'undefined';
};

var _default = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    (0, _utils.extend)(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = (0, _ssrWindow.getWindow)();

      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = (0, _ssrWindow.getWindow)();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/utils":"3xqzY"}],"6D25a":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = (0, _ssrWindow.getWindow)();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
var _default = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/utils":"3xqzY"}],"6hUVx":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

var _default = {
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        (0, _utils.extend)(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
};
exports.default = _default;
},{"../../utils/utils":"3xqzY"}],"1JLpO":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

/* eslint-disable no-underscore-dangle */
var _default = {
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};
exports.default = _default;
},{}],"62RuO":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _updateSize = _interopRequireDefault(require("./updateSize"));

var _updateSlides = _interopRequireDefault(require("./updateSlides"));

var _updateAutoHeight = _interopRequireDefault(require("./updateAutoHeight"));

var _updateSlidesOffset = _interopRequireDefault(require("./updateSlidesOffset"));

var _updateSlidesProgress = _interopRequireDefault(require("./updateSlidesProgress"));

var _updateProgress = _interopRequireDefault(require("./updateProgress"));

var _updateSlidesClasses = _interopRequireDefault(require("./updateSlidesClasses"));

var _updateActiveIndex = _interopRequireDefault(require("./updateActiveIndex"));

var _updateClickedSlide = _interopRequireDefault(require("./updateClickedSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  updateSize: _updateSize.default,
  updateSlides: _updateSlides.default,
  updateAutoHeight: _updateAutoHeight.default,
  updateSlidesOffset: _updateSlidesOffset.default,
  updateSlidesProgress: _updateSlidesProgress.default,
  updateProgress: _updateProgress.default,
  updateSlidesClasses: _updateSlidesClasses.default,
  updateActiveIndex: _updateActiveIndex.default,
  updateClickedSlide: _updateClickedSlide.default
};
exports.default = _default;
},{"./updateSize":"2QYBg","./updateSlides":"4YICo","./updateAutoHeight":"4iMMj","./updateSlidesOffset":"6QmAE","./updateSlidesProgress":"72O01","./updateProgress":"6dT4N","./updateSlidesClasses":"5sXUE","./updateActiveIndex":"6F7hu","./updateClickedSlide":"1TN3l"}],"2QYBg":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateSize;

var _utils = require("../../../utils/utils");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  (0, _utils.extend)(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}
},{"../../../utils/utils":"3xqzY"}],"4YICo":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateSlides;

var _utils = require("../../../utils/utils");

function updateSlides() {
  var swiper = this;

  var getDirectionLabel = function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  };

  var getDirectionPropertyValue = function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  };

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];

  function slidesForMargin(slideEl, slideIndex) {
    if (!params.cssMode) return true;

    if (slideIndex === slides.length - 1) {
      return false;
    }

    return true;
  }

  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(slidesForMargin).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  (0, _utils.extend)(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}
},{"../../../utils/utils":"3xqzY"}],"4iMMj":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateAutoHeight;

function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  } // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length) break;
        activeSlides.push(swiper.slides.eq(index)[0]);
      }
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}
},{}],"6QmAE":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateSlidesOffset;

function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}
},{}],"72O01":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateSlidesProgress;

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = (0, _dom.default)(swiper.visibleSlides);
}
},{"../../../utils/dom":"36a0X"}],"6dT4N":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateProgress;

var _utils = require("../../../utils/utils");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  (0, _utils.extend)(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}
},{"../../../utils/utils":"3xqzY"}],"5sXUE":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateSlidesClasses;

function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}
},{}],"6F7hu":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateActiveIndex;

var _utils = require("../../../utils/utils");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  (0, _utils.extend)(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}
},{"../../../utils/utils":"3xqzY"}],"1TN3l":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = updateClickedSlide;

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = (0, _dom.default)(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt((0, _dom.default)(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}
},{"../../../utils/dom":"36a0X"}],"4oc7e":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _getTranslate = _interopRequireDefault(require("./getTranslate"));

var _setTranslate = _interopRequireDefault(require("./setTranslate"));

var _minTranslate = _interopRequireDefault(require("./minTranslate"));

var _maxTranslate = _interopRequireDefault(require("./maxTranslate"));

var _translateTo = _interopRequireDefault(require("./translateTo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  getTranslate: _getTranslate.default,
  setTranslate: _setTranslate.default,
  minTranslate: _minTranslate.default,
  maxTranslate: _maxTranslate.default,
  translateTo: _translateTo.default
};
exports.default = _default;
},{"./getTranslate":"6BM4b","./setTranslate":"2fWU8","./minTranslate":"1ST0T","./maxTranslate":"6izqM","./translateTo":"6lUB8"}],"6BM4b":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = getSwiperTranslate;

var _utils = require("../../../utils/utils");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = (0, _utils.getTranslate)($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}
},{"../../../utils/utils":"3xqzY"}],"2fWU8":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = setTranslate;

function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}
},{}],"1ST0T":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = minTranslate;

function minTranslate() {
  return -this.snapGrid[0];
}
},{}],"6izqM":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = maxTranslate;

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
},{}],"6lUB8":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = translateTo;

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}
},{}],"3U0Fv":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setTransition = _interopRequireDefault(require("./setTransition"));

var _transitionStart = _interopRequireDefault(require("./transitionStart"));

var _transitionEnd = _interopRequireDefault(require("./transitionEnd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setTransition: _setTransition.default,
  transitionStart: _transitionStart.default,
  transitionEnd: _transitionEnd.default
};
exports.default = _default;
},{"./setTransition":"5jezq","./transitionStart":"1pTaC","./transitionEnd":"75gj5"}],"5jezq":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = setTransition;

function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}
},{}],"1pTaC":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = transitionStart;

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}
},{}],"75gj5":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = transitionEnd;

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}
},{}],"1HtSA":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _slideTo = _interopRequireDefault(require("./slideTo"));

var _slideToLoop = _interopRequireDefault(require("./slideToLoop"));

var _slideNext = _interopRequireDefault(require("./slideNext"));

var _slidePrev = _interopRequireDefault(require("./slidePrev"));

var _slideReset = _interopRequireDefault(require("./slideReset"));

var _slideToClosest = _interopRequireDefault(require("./slideToClosest"));

var _slideToClickedSlide = _interopRequireDefault(require("./slideToClickedSlide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  slideTo: _slideTo.default,
  slideToLoop: _slideToLoop.default,
  slideNext: _slideNext.default,
  slidePrev: _slidePrev.default,
  slideReset: _slideReset.default,
  slideToClosest: _slideToClosest.default,
  slideToClickedSlide: _slideToClickedSlide.default
};
exports.default = _default;
},{"./slideTo":"1ytrE","./slideToLoop":"1A6U9","./slideNext":"ZOlHs","./slidePrev":"322Xh","./slideReset":"14Xej","./slideToClosest":"5JRa3","./slideToClickedSlide":"2U4g0"}],"1ytrE":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slideTo;

function slideTo(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}
},{}],"1A6U9":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slideToLoop;

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}
},{}],"ZOlHs":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slideNext;

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}
},{}],"322Xh":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slidePrev;

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}
},{}],"14Xej":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slideReset;

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}
},{}],"5JRa3":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slideToClosest;

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}
},{}],"2U4g0":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = slideToClickedSlide;

var _dom = _interopRequireDefault(require("../../../utils/dom"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt((0, _dom.default)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        (0, _utils.nextTick)(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      (0, _utils.nextTick)(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}
},{"../../../utils/dom":"36a0X","../../../utils/utils":"3xqzY"}],"5MoPB":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _loopCreate = _interopRequireDefault(require("./loopCreate"));

var _loopFix = _interopRequireDefault(require("./loopFix"));

var _loopDestroy = _interopRequireDefault(require("./loopDestroy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  loopCreate: _loopCreate.default,
  loopFix: _loopFix.default,
  loopDestroy: _loopDestroy.default
};
exports.default = _default;
},{"./loopCreate":"1eID2","./loopFix":"5pZ3N","./loopDestroy":"5jRdC"}],"1eID2":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = loopCreate;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loopCreate() {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = (0, _dom.default)(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = (0, _dom.default)(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append((0, _dom.default)(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend((0, _dom.default)(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}
},{"ssr-window":"6mQo3","../../../utils/dom":"36a0X"}],"5pZ3N":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = loopFix;

function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}
},{}],"5jRdC":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = loopDestroy;

function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}
},{}],"7DzU5":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setGrabCursor = _interopRequireDefault(require("./setGrabCursor"));

var _unsetGrabCursor = _interopRequireDefault(require("./unsetGrabCursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setGrabCursor: _setGrabCursor.default,
  unsetGrabCursor: _unsetGrabCursor.default
};
exports.default = _default;
},{"./setGrabCursor":"5ahgu","./unsetGrabCursor":"6aQ5p"}],"5ahgu":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = setGrabCursor;

function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
},{}],"6aQ5p":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = unsetGrabCursor;

function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}
},{}],"2jxc4":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _appendSlide = _interopRequireDefault(require("./appendSlide"));

var _prependSlide = _interopRequireDefault(require("./prependSlide"));

var _addSlide = _interopRequireDefault(require("./addSlide"));

var _removeSlide = _interopRequireDefault(require("./removeSlide"));

var _removeAllSlides = _interopRequireDefault(require("./removeAllSlides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  appendSlide: _appendSlide.default,
  prependSlide: _prependSlide.default,
  addSlide: _addSlide.default,
  removeSlide: _removeSlide.default,
  removeAllSlides: _removeAllSlides.default
};
exports.default = _default;
},{"./appendSlide":"3mGio","./prependSlide":"6U3Ge","./addSlide":"2OSa2","./removeSlide":"6duFy","./removeAllSlides":"1frqb"}],"3mGio":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = appendSlide;

function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}
},{}],"6U3Ge":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = prependSlide;

function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}
},{}],"2OSa2":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = addSlide;

function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
},{}],"6duFy":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = removeSlide;

function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}
},{}],"1frqb":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = removeAllSlides;

function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}
},{}],"7W0Zl":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _onTouchStart = _interopRequireDefault(require("./onTouchStart"));

var _onTouchMove = _interopRequireDefault(require("./onTouchMove"));

var _onTouchEnd = _interopRequireDefault(require("./onTouchEnd"));

var _onResize = _interopRequireDefault(require("./onResize"));

var _onClick = _interopRequireDefault(require("./onClick"));

var _onScroll = _interopRequireDefault(require("./onScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart.default.bind(swiper);
  swiper.onTouchMove = _onTouchMove.default.bind(swiper);
  swiper.onTouchEnd = _onTouchEnd.default.bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll.default.bind(swiper);
  }

  swiper.onClick = _onClick.default.bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize.default, true);
  } else {
    swiper.on('observerUpdate', _onResize.default, true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize.default);
}

var _default = {
  attachEvents: attachEvents,
  detachEvents: detachEvents
};
exports.default = _default;
},{"ssr-window":"6mQo3","./onTouchStart":"7gem1","./onTouchMove":"16cRM","./onTouchEnd":"7E6Vs","./onResize":"rwuWO","./onClick":"2J2yx","./onScroll":"7sHJk"}],"7gem1":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = onTouchStart;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onTouchStart(event) {
  var swiper = this;
  var document = (0, _ssrWindow.getDocument)();
  var window = (0, _ssrWindow.getWindow)();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = (0, _dom.default)(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = (0, _dom.default)(event.path[0]);
  }

  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  (0, _utils.extend)(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0, _utils.now)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.formElements)) preventDefault = false;

    if (document.activeElement && (0, _dom.default)(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}
},{"ssr-window":"6mQo3","../../../utils/dom":"36a0X","../../../utils/utils":"3xqzY"}],"16cRM":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = onTouchMove;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

var _utils = require("../../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onTouchMove(event) {
  var document = (0, _ssrWindow.getDocument)();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      (0, _utils.extend)(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0, _utils.now)();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && (0, _dom.default)(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0, _utils.now)()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}
},{"ssr-window":"6mQo3","../../../utils/dom":"36a0X","../../../utils/utils":"3xqzY"}],"7E6Vs":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = onTouchEnd;

var _utils = require("../../../utils/utils");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = (0, _utils.now)();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = (0, _utils.now)();
  (0, _utils.nextTick)(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || (0, _utils.now)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}
},{"../../../utils/utils":"3xqzY"}],"rwuWO":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = onResize;

function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}
},{}],"2J2yx":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = onClick;

function onClick(e) {
  var swiper = this;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}
},{}],"7sHJk":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = onScroll;

function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}
},{}],"2iH01":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _setBreakpoint = _interopRequireDefault(require("./setBreakpoint"));

var _getBreakpoint = _interopRequireDefault(require("./getBreakpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  setBreakpoint: _setBreakpoint.default,
  getBreakpoint: _getBreakpoint.default
};
exports.default = _default;
},{"./setBreakpoint":"3G4lY","./getBreakpoint":"2rLni"}],"3G4lY":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = setBreakpoint;

var _utils = require("../../../utils/utils");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);

  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

    if (breakpointOnlyParams) {
      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
        var paramValue = breakpointOnlyParams[param];
        if (typeof paramValue === 'undefined') return;

        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
          breakpointOnlyParams[param] = 'auto';
        } else if (param === 'slidesPerView') {
          breakpointOnlyParams[param] = parseFloat(paramValue);
        } else {
          breakpointOnlyParams[param] = parseInt(paramValue, 10);
        }
      });
    }

    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = params.slidesPerColumn > 1;
    var isMultiRow = breakpointParams.slidesPerColumn > 1;

    if (wasMultiRow && !isMultiRow) {
      $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass(params.containerModifierClass + "multirow");

      if (breakpointParams.slidesPerColumnFill === 'column') {
        $el.addClass(params.containerModifierClass + "multirow-column");
      }

      swiper.emitContainerClasses();
    }

    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    (0, _utils.extend)(swiper.params, breakpointParams);
    (0, _utils.extend)(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }
}
},{"../../../utils/utils":"3xqzY"}],"2rLni":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = getBreakpoint;

var _ssrWindow = require("ssr-window");

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = (0, _ssrWindow.getWindow)();
  var currentWidth = base === 'window' ? window.innerWidth : containerEl.clientWidth;
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (value <= currentWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}
},{"ssr-window":"6mQo3"}],"7olH7":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _addClasses = _interopRequireDefault(require("./addClasses"));

var _removeClasses = _interopRequireDefault(require("./removeClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  addClasses: _addClasses.default,
  removeClasses: _removeClasses.default
};
exports.default = _default;
},{"./addClasses":"2bIOb","./removeClasses":"36H4S"}],"2bIOb":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = addClasses;

function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}
},{}],"36H4S":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = removeClasses;

function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}
},{}],"17NTi":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _loadImage = _interopRequireDefault(require("./loadImage"));

var _preloadImages = _interopRequireDefault(require("./preloadImages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  loadImage: _loadImage.default,
  preloadImages: _preloadImages.default
};
exports.default = _default;
},{"./loadImage":"2F4Hf","./preloadImages":"6spVo"}],"2F4Hf":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = loadImage;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = (0, _ssrWindow.getWindow)();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = (0, _dom.default)(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}
},{"ssr-window":"6mQo3","../../../utils/dom":"36a0X"}],"6spVo":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = preloadImages;

function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}
},{}],"ZxL0d":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

var _default = {
  checkOverflow: checkOverflow
};
exports.default = _default;
},{}],"01aZH":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};
exports.default = _default;
},{}],"1aUod":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    (0, _utils.extend)(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + "px");
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
      }
    }

    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }

    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    var $slideEl = params.renderSlide ? (0, _dom.default)(params.renderSlide.call(swiper, slide, index)) : (0, _dom.default)("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
var _default = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      virtual: _extends({}, Virtual, {
        slides: swiper.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
      var overwriteParams = {
        watchSlidesProgress: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"3yJSV":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    var document = (0, _ssrWindow.getDocument)();
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }

      var $el = swiper.$el;
      var swiperWidth = $el[0].clientWidth;
      var swiperHeight = $el[0].clientHeight;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    if (swiper.keyboard.enabled) return;
    (0, _dom.default)(document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    if (!swiper.keyboard.enabled) return;
    (0, _dom.default)(document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
var _default = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      keyboard: _extends({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"6VZpd":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEventSupported() {
  var document = (0, _ssrWindow.getDocument)();
  var eventName = 'onwheel';
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: (0, _utils.now)(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event: function event() {
    var window = (0, _ssrWindow.getWindow)();
    if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var disableParentSwiper = true;
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0, _dom.default)(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    var positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: (0, _utils.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: (0, _utils.now)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift(); // only store the last N events

          }

          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

          var firstEvent = _recentWheelEvents[0];

          _recentWheelEvents.push(_newEvent);

          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

            _recentWheelEvents.splice(0);

            swiper.mousewheel.timeout = (0, _utils.nextTick)(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = (0, _utils.nextTick)(function () {
              var snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();

    if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (this.params.mousewheel.thresholdTime && (0, _utils.now)() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && (0, _utils.now)() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  },
  enable: function enable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0, _dom.default)(swiper.params.mousewheel.eventsTarget);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = (0, _dom.default)(swiper.params.mousewheel.eventsTarget);
    }

    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
var _default = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      mousewheel: {
        enabled: false,
        lastScrollTime: (0, _utils.now)(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }

      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy(swiper) {
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }

      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"7E6b3":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Navigation = {
  toggleEl: function toggleEl($el, disabled) {
    $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
  },
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    var toggleEl = swiper.navigation.toggleEl;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        toggleEl($prevEl, true);
      } else {
        toggleEl($prevEl, false);
      }

      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        toggleEl($nextEl, true);
      } else {
        toggleEl($nextEl, false);
      }

      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = (0, _dom.default)(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = (0, _dom.default)(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    (0, _utils.extend)(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
var _default = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    click: function click(swiper, e) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !(0, _dom.default)(targetEl).is($prevEl) && !(0, _dom.default)(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"2EOUe":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = (0, _dom.default)(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find((0, _utils.classesToSelector)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find((0, _utils.classesToSelector)(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find((0, _utils.classesToSelector)(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find((0, _utils.classesToSelector)(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = (0, _dom.default)(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', (0, _utils.classesToSelector)(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index = (0, _dom.default)(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    (0, _utils.extend)(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', (0, _utils.classesToSelector)(params.bulletClass));
    }
  }
};
var _default = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    click: function click(swiper, e) {
      var targetEl = e.target;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !(0, _dom.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"4565m":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    (0, _utils.extend)(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });
    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;

    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = (0, _utils.nextTick)(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0, _ssrWindow.getDocument)();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = (0, _ssrWindow.getDocument)();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    var params = swiper.params.scrollbar;
    var $el = (0, _dom.default)(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

    if ($dragEl.length === 0) {
      $dragEl = (0, _dom.default)("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }

    (0, _utils.extend)(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
var _default = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"1ICdr":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = (0, _dom.default)(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }

    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      (0, _dom.default)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }

    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = (0, _dom.default)(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
var _default = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"3bEdf":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = (0, _dom.default)(e.target).closest("." + swiper.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') zoom.onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var device = swiper.device;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = (0, _utils.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = (0, _utils.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);

      if (swiper.rtl) {
        image.startX = -image.startX;
        image.startY = -image.startY;
      }
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper = this;
    var zoom = swiper.zoom;
    var selector = zoom.slideSelector,
        passive = zoom.passiveListener;
    swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
    swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
    swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures('on');
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures('off');
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var support = swiper.support;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass;
    swiper.zoom.passiveListener = passiveListener;
    swiper.zoom.slideSelector = slideSelector; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  }
};
var _default = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      zoom: _extends({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }

        scale = value;
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy(swiper) {
      swiper.zoom.disable();
    },
    touchStart: function touchStart(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper, e) {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"1eGK2":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = (0, _dom.default)(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"" + background + "\")");
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = (0, _dom.default)(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return (0, _dom.default)(slideEl).attr('data-swiper-slide-index');
      }

      return (0, _dom.default)(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
        var index = isVirtual ? (0, _dom.default)(slideEl).attr('data-swiper-slide-index') : (0, _dom.default)(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
        } // Prev Slides


        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
  checkInViewOnLoad: function checkInViewOnLoad() {
    var window = (0, _ssrWindow.getWindow)();
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var $scrollElement = swiper.params.lazy.scrollingElement ? (0, _dom.default)(swiper.params.lazy.scrollingElement) : (0, _dom.default)(window);
    var isWindow = $scrollElement[0] === window;
    var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    var swiperOffset = swiper.$el.offset();
    var rtl = swiper.rtlTranslate;
    var inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (var i = 0; i < swiperCoord.length; i += 1) {
      var point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    if (inView) {
      swiper.lazy.load();
      $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad);
    } else if (!swiper.lazy.scrollHandlerAttached) {
      swiper.lazy.scrollHandlerAttached = true;
      $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad);
    }
  }
};
var _default = {
  name: 'lazy',
  params: {
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      lazy: _extends({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        if (swiper.params.lazy.checkInView) {
          swiper.lazy.checkInViewOnLoad();
        } else {
          swiper.lazy.load();
        }
      }
    },
    scroll: function scroll(swiper) {
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper) {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
        swiper.lazy.load();
      }
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"2CrDl":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          (0, _utils.nextTick)(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
var _default = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      controller: _extends({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(swiper, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(swiper, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
};
exports.default = _default;
},{"../../utils/utils":"3xqzY"}],"NwHEH":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var A11y = {
  getRandomNumber: function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }

    var randomChar = function randomChar() {
      return Math.round(16 * Math.random()).toString(16);
    };

    return 'x'.repeat(size).replace(/x/g, randomChar);
  },
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElRoleDescription: function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
    return $el;
  },
  addElControls: function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  addElId: function addElId($el, id) {
    $el.attr('id', id);
    return $el;
  },
  addElLive: function addElLive($el, live) {
    $el.attr('aria-live', live);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    var swiper = this;
    var params = swiper.params.a11y;
    var $targetEl = (0, _dom.default)(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is((0, _utils.classesToSelector)(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletEl) {
        var $bulletEl = (0, _dom.default)(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.a11y;
    swiper.$el.append(swiper.a11y.liveRegion); // Container

    var $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      swiper.a11y.addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    var $wrapperEl = swiper.$wrapperEl;
    var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
    var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    swiper.a11y.addElId($wrapperEl, wrapperId);
    swiper.a11y.addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription((0, _dom.default)(swiper.slides), params.itemRoleDescriptionMessage);
    }

    swiper.a11y.addElRole((0, _dom.default)(swiper.slides), params.slideRole);
    swiper.slides.each(function (slideEl) {
      var $slideEl = (0, _dom.default)(slideEl);
      var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, $slideEl.index() + 1).replace(/\{\{slidesLength\}\}/, swiper.slides.length);
      swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
    }); // Navigation

    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      swiper.a11y.makeElFocusable($nextEl);

      if ($nextEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($nextEl, 'button');
        $nextEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
      }

      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      swiper.a11y.addElControls($nextEl, wrapperId);
    }

    if ($prevEl && $prevEl.length) {
      swiper.a11y.makeElFocusable($prevEl);

      if ($prevEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($prevEl, 'button');
        $prevEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
      }

      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      swiper.a11y.addElControls($prevEl, wrapperId);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', (0, _utils.classesToSelector)(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', (0, _utils.classesToSelector)(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
    }
  }
};
var _default = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      a11y: _extends({}, A11y, {
        liveRegion: (0, _dom.default)("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
      })
    });
  },
  on: {
    afterInit: function afterInit(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"1VWrh":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var History = {
  init: function init() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues(swiper.params.url);
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues(swiper.params.url);
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window = (0, _ssrWindow.getWindow)();
    var location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      var root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = root + "/" + key + "/" + value;
    } else if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }

    var currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
var _default = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/utils":"3xqzY"}],"5bJ1F":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    swiper.emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();
    var document = (0, _ssrWindow.getDocument)();
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
      swiper.emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init: function init() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();
    var window = (0, _ssrWindow.getWindow)();
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = document.location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.default)(window).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = (0, _ssrWindow.getWindow)();

    if (swiper.params.hashNavigation.watchState) {
      (0, _dom.default)(window).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  }
};
var _default = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      hashNavigation: _extends({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"1c9IM":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _ssrWindow = require("ssr-window");

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = (0, _utils.nextTick)(function () {
      var autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = (0, _ssrWindow.getDocument)();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
    swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  }
};
var _default = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      autoplay: _extends({}, Autoplay, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = (0, _ssrWindow.getDocument)();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }

      var document = (0, _ssrWindow.getDocument)();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
};
exports.default = _default;
},{"ssr-window":"6mQo3","../../utils/utils":"3xqzY"}],"3NK03":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var _default = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/utils":"3xqzY"}],"6b0Ql":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.default)('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = (0, _dom.default)('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }

    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
var _default = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "cube");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"1uzaE":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
var _default = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "flip");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      (0, _utils.extend)(swiper.params, overwriteParams);
      (0, _utils.extend)(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"2zbbE":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = _interopRequireDefault(require("../../utils/dom"));

var _utils = require("../../utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = (0, _dom.default)("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
var _default = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
};
exports.default = _default;
},{"../../utils/dom":"36a0X","../../utils/utils":"3xqzY"}],"7G7Rk":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _utils = require("../../utils/utils");

var _dom = _interopRequireDefault(require("../../utils/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    if (swiper.thumbs.initialized) return false;
    swiper.thumbs.initialized = true;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      (0, _utils.extend)(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      (0, _utils.extend)(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if ((0, _utils.isObject)(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass((0, _utils.extend)({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && (0, _dom.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt((0, _dom.default)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex) {
          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
var _default = {
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    (0, _utils.bindModuleMethods)(swiper, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(swiper, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
};
exports.default = _default;
},{"../../utils/utils":"3xqzY","../../utils/dom":"36a0X"}],"4ildJ":[function() {},{}],"GxxLH":[function(require,module,exports) {
/**
 * Swiper 6.5.9
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 30, 2021
 */

"use strict";
exports.__esModule = true;
exports.default = require('./cjs/components/core/core-class').default;
exports.Swiper = require('./cjs/components/core/core-class').default;
exports.Virtual = require('./cjs/components/virtual/virtual').default;
exports.Keyboard = require('./cjs/components/keyboard/keyboard').default;
exports.Mousewheel = require('./cjs/components/mousewheel/mousewheel').default;
exports.Navigation = require('./cjs/components/navigation/navigation').default;
exports.Pagination = require('./cjs/components/pagination/pagination').default;
exports.Scrollbar = require('./cjs/components/scrollbar/scrollbar').default;
exports.Parallax = require('./cjs/components/parallax/parallax').default;
exports.Zoom = require('./cjs/components/zoom/zoom').default;
exports.Lazy = require('./cjs/components/lazy/lazy').default;
exports.Controller = require('./cjs/components/controller/controller').default;
exports.A11y = require('./cjs/components/a11y/a11y').default;
exports.History = require('./cjs/components/history/history').default;
exports.HashNavigation = require('./cjs/components/hash-navigation/hash-navigation').default;
exports.Autoplay = require('./cjs/components/autoplay/autoplay').default;
exports.EffectFade = require('./cjs/components/effect-fade/effect-fade').default;
exports.EffectCube = require('./cjs/components/effect-cube/effect-cube').default;
exports.EffectFlip = require('./cjs/components/effect-flip/effect-flip').default;
exports.EffectCoverflow = require('./cjs/components/effect-coverflow/effect-coverflow').default;
exports.Thumbs = require('./cjs/components/thumbs/thumbs').default;
},{"./cjs/components/core/core-class":"6Odzd","./cjs/components/virtual/virtual":"1aUod","./cjs/components/keyboard/keyboard":"3yJSV","./cjs/components/mousewheel/mousewheel":"6VZpd","./cjs/components/navigation/navigation":"7E6b3","./cjs/components/pagination/pagination":"2EOUe","./cjs/components/scrollbar/scrollbar":"4565m","./cjs/components/parallax/parallax":"1ICdr","./cjs/components/zoom/zoom":"3bEdf","./cjs/components/lazy/lazy":"1eGK2","./cjs/components/controller/controller":"2CrDl","./cjs/components/a11y/a11y":"NwHEH","./cjs/components/history/history":"1VWrh","./cjs/components/hash-navigation/hash-navigation":"5bJ1F","./cjs/components/autoplay/autoplay":"1c9IM","./cjs/components/effect-fade/effect-fade":"3NK03","./cjs/components/effect-cube/effect-cube":"6b0Ql","./cjs/components/effect-flip/effect-flip":"1uzaE","./cjs/components/effect-coverflow/effect-coverflow":"2zbbE","./cjs/components/thumbs/thumbs":"7G7Rk"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["3AS1F","SXDIM"], "SXDIM", "parcelRequire64f5")

//# sourceMappingURL=index.4ee429df.js.map
