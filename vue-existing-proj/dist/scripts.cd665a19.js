// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/components/Greeting.js":[function(require,module,exports) {
// template markup will be in the calling .html file
// by adding 'inline-template' param to the component tag
Vue.component('greeting', {
  template: '#greeting',
  data: function data() {
    return {
      myval: 'one',
      myData: []
    };
  },
  props: ['newprop'],
  methods: {
    doMethod: function doMethod() {
      console.log("myval is ".concat(this.myval));
    }
  },
  created: function created() {
    var _this = this;

    axios.get('./data/testdata.json').then(function (res) {
      return _this.myData = res.data;
    });
  }
});
},{}],"js/components/NavBar.js":[function(require,module,exports) {
Vue.component('navbar', {
  template: "\n<nav>\n  <a href=\"/\">Home</a>\n  <a href=\"/forms.html\">Forms</a>\n</nav>\n  ",
  name: "navbar",
  data: function data() {
    return {};
  }
});
},{}],"js/components/SelectFields.js":[function(require,module,exports) {
Vue.component('select-fields', {
  template: '#select-fields',
  data: function data() {
    return {
      startTime: '08:15',
      endTime: '09:00',
      times: [{
        label: '8:00 am',
        val: '08:00'
      }, {
        label: '8:15 am',
        val: '08:15'
      }, {
        label: '8:30 am',
        val: '08:30'
      }, {
        label: '8:45 am',
        val: '08:45'
      }, {
        label: '9:00 am',
        val: '09:00'
      }, {
        label: '9:15 am',
        val: '09:15'
      }, {
        label: '9:30 am',
        val: '09:30'
      }, {
        label: '9:45 am',
        val: '09:45'
      }, {
        label: '10:00 am',
        val: '10:00'
      }, {
        label: '10:15 am',
        val: '10:15'
      }, {
        label: '10:30 am',
        val: '10:30'
      }, {
        label: '10:45 am',
        val: '10:45'
      }, {
        label: '11:00 am',
        val: '11:00'
      }, {
        label: '11:15 am',
        val: '11:15'
      }, {
        label: '11:30 am',
        val: '11:30'
      }, {
        label: '11:45 am',
        val: '11:45'
      }, {
        label: '12:00 pm',
        val: '12:00'
      }, {
        label: '12:15 pm',
        val: '12:15'
      }, {
        label: '12:30 pm',
        val: '12:30'
      }, {
        label: '12:45 pm',
        val: '12:45'
      }, {
        label: '1:00 pm',
        val: '13:00'
      }, {
        label: '1:15 pm',
        val: '13:15'
      }, {
        label: '1:30 pm',
        val: '13:30'
      }, {
        label: '1:45 pm',
        val: '13:45'
      }, {
        label: '2:00 pm',
        val: '14:00'
      }, {
        label: '2:15 pm',
        val: '14:15'
      }, {
        label: '2:30 pm',
        val: '14:30'
      }, {
        label: '2:45 pm',
        val: '14:45'
      }, {
        label: '3:00 pm',
        val: '15:00'
      }, {
        label: '3:15 pm',
        val: '15:15'
      }, {
        label: '3:30 pm',
        val: '15:30'
      }, {
        label: '3:45 pm',
        val: '15:45'
      }, {
        label: '4:00 pm',
        val: '16:00'
      }, {
        label: '4:15 pm',
        val: '16:15'
      }, {
        label: '4:30 pm',
        val: '16:30'
      }, {
        label: '4:45 pm',
        val: '16:45'
      }, {
        label: '5:00 pm',
        val: '17:00'
      }, {
        label: '5:15 pm',
        val: '17:15'
      }, {
        label: '5:30 pm',
        val: '17:30'
      }, {
        label: '5:45 pm',
        val: '17:45'
      }, {
        label: '6:00 pm',
        val: '18:00'
      }]
    };
  },
  methods: {
    getToday: function getToday() {
      var today = new Date();
      return "".concat(today.getFullYear(), "-").concat(today.getMonth() + 1, "-").concat(today.getDate());
    }
  },
  created: function created() {},
  computed: {
    startTimeParsed: function startTimeParsed() {
      return Date.parse("".concat(this.getToday(), " ").concat(this.startTime));
    },
    endTimeParsed: function endTimeParsed() {
      return Date.parse("".concat(this.getToday(), " ").concat(this.endTime));
    },
    totalTime: function totalTime() {
      return (this.endTimeParsed - this.startTimeParsed) / 1000 / 60 / 60;
    },
    properHours: function properHours() {
      if (this.totalTime > 0 && this.totalTime <= 1) return 'hr';else if (this.totalTime > 1) return 'hrs';else return '';
    }
  },
  watch: {
    startTime: function startTime() {
      if (this.startTimeParsed > this.endTimeParsed) this.endTime = this.startTime;
    },
    endTime: function endTime() {
      if (this.startTimeParsed > this.endTimeParsed) this.endTime = this.startTime;
    }
  }
});
},{}],"js/main.js":[function(require,module,exports) {
/* ----------------------------------------
  Render main app
---------------------------------------- */
var vm = new Vue({
  el: '#app'
});
},{}],"js/scripts.js":[function(require,module,exports) {
"use strict";

require("~/js/components/Greeting.js");

require("~/js/components/NavBar.js");

require("~/js/components/SelectFields.js");

require("~/js/main.js");
},{"~/js/components/Greeting.js":"js/components/Greeting.js","~/js/components/NavBar.js":"js/components/NavBar.js","~/js/components/SelectFields.js":"js/components/SelectFields.js","~/js/main.js":"js/main.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53238" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/scripts.js"], null)
//# sourceMappingURL=/scripts.cd665a19.js.map