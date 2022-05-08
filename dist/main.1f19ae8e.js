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
})({"main.js":[function(require,module,exports) {
var string = "\n<style>\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tbackground-color: #e1dddd;\n}\n\n.container {\n\tposition: relative;\n\tmargin: 100px auto;\n\tpadding: 30px;\n\tmax-width: 500px;\n}\n\n#totoro {\n\tposition: relative;\n\tcursor: pointer;\n}\n\n.head {\n\tposition: absolute;\n\tz-index: 10;\n\tleft: 50%;\n\ttransform: translate(-50%);\n\twidth: 320px;\n\theight: 200px;\n\tborder-top-left-radius: 50% 60%;\n\tborder-top-right-radius: 50% 60%;\n\tborder-bottom-left-radius: 5% 25%;\n\tborder-bottom-right-radius: 5% 25%;\n\tbackground-color: #bdb4b4;\n}\n\n.ear {\n\tposition: absolute;\n\ttop: -60px;\n\twidth: 50px;\n\theight: 80px;\n\tborder-top-left-radius: 30px 100%;\n\tborder-top-right-radius: 30px 100%;\n\tborder-bottom-left-radius: 50% 20%;\n\tborder-bottom-right-radius: 50% 20%;\n\tbackground-color: #bdb4b4;\n}\n\n.ear::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: calc(100% - 5px);\n\tleft: 50%;\n\ttransform: translate(-50%);\n\twidth: 30px;\n\theight: 70px;\n\tbackground-color: #bdb4b4;\n}\n\n.left-ear {\n\tleft: 40px;\n\ttransform: rotate(-15deg);\n}\n\n.right-ear {\n\tright: 40px;\n\ttransform: rotate(15deg);\n}\n\n.eye {\n\tposition: absolute;\n\ttop: 50px;\n\twidth: 45px;\n\theight: 45px;\n\tborder-radius: 50%;\n\tbackground-color: white;\n\ttransition: 0.35s 0.2s;\n}\n\n.pupil {\n\tposition: absolute;\n\ttop: 10px;\n\theight: 15px;\n\twidth: 15px;\n\tborder-radius: 50%;\n\tbackground-color: black;\n\t/* transition: 0.35s 0.2s; */\n}\n\n.pupil::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 4px;\n\twidth: 4px;\n\theight: 5px;\n\tborder-radius: 50%;\n\tbackground-color: white;\n}\n\n.left-eye {\n\tleft: 50px;\n\ttransition: 0.35s 0.2s;\n}\n\n.left-pupil {\n\tleft: 23px;\n}\n\n.left-pupil::after {\n\tleft: 7px;\n}\n\n.right-eye {\n\tright: 50px;\n}\n\n.right-pupil {\n\tright: 23px;\n}\n\n.right-pupil::after {\n\tright: 7px;\n}\n\n.nose {\n\tposition: absolute;\n\ttop: 70px;\n\tleft: 50%;\n\ttransform: translate(-50%);\n\twidth: 50px;\n\theight: 20px;\n\tborder-radius: 50%/60%;\n\tbackground-color: black;\n\t/* transition: 0.35s 0.2s; */\n}\n\n.nose::before,\n.nose::after {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 12px;\n\twidth: 43px;\n\theight: 20px;\n\tbackground-color: #bdb4b4;\n\tborder-radius: 50%;\n}\n\n.nose::before {\n\tleft: -20px;\n}\n\n.nose::after {\n\tright: -20px;\n}\n\n.mouth {\n\tposition: absolute;\n\tz-index: 30;\n\ttop: 125px;\n\tleft: 50%;\n\ttransform: translate(-50%);\n\twidth: 7px;\n\theight: 10px;\n\tborder-radius: 50%;\n\tbackground-color: black;\n\t/* overflow: hidden;\n    transition: 0.6s; */\n}\n\n.whiskers {\n\tposition: absolute;\n\ttop: 120px;\n\t/* transition: 0.4s 0.15s; */\n}\n\n.whisker {\n\tposition: absolute;\n\twidth: 90px;\n\theight: 2px;\n\tborder-radius: 2px;\n\tbackground-color: black;\n\t/* transition: 0.6s; */\n}\n\n.top-whisker {\n\ttop: -10px;\n\twidth: 80px;\n}\n\n.bottom-whisker {\n\ttop: 10px;\n\twidth: 80px;\n}\n\n.left-whiskers {\n\tleft: 25px;\n}\n\n.left-whiskers .whisker {\n\tright: 0;\n\ttransform-origin: bottom right;\n}\n\n.left-whiskers .top-whisker {\n\ttransform: rotate(10deg);\n}\n\n.left-whiskers .bottom-whisker {\n\ttransform: rotate(-10deg);\n}\n\n.right-whiskers {\n\tright: 25px;\n}\n\n.right-whiskers .whisker {\n\tleft: 0;\n\ttransform-origin: bottom left;\n}\n\n.right-whiskers .top-whisker {\n\ttransform: rotate(-10deg);\n}\n\n.right-whiskers .bottom-whisker {\n\ttransform: rotate(10deg);\n}\n\n.body {\n\tposition: absolute;\n\tz-index: 1px;\n\ttop: 90px;\n\tleft: 50%;\n\ttransform: translate(-50%);\n\twidth: 400px;\n\theight: 420px;\n\tborder-top-left-radius: 50% 60%;\n\tborder-top-right-radius: 50% 60%;\n\tborder-bottom-left-radius: 45% 30%;\n\tborder-bottom-right-radius: 45% 30%;\n\tbackground-color: #bdb4b4;\n\tdisplay: inline-block;\n}\n\n.belly {\n\tposition: absolute;\n\tz-index: 20;\n\tbottom: 10px;\n\tleft: 50%;\n\ttransform: translate(-50%);\n\twidth: 380px;\n\theight: 300px;\n\tborder-bottom-left-radius: 45% 35%;\n\tborder-bottom-right-radius: 45% 35%;\n\tborder-top-left-radius: 50% 60%;\n\tborder-top-right-radius: 50% 60%;\n\tbackground-color: #e1dddd;\n\ttransition: 0.6s;\n}\n\n.pattern,\n.pattern::after {\n\tposition: absolute;\n\ttop: 60px;\n\theight: 40px;\n\twidth: 15px;\n\tborder-bottom-left-radius: 20px 100px;\n\tborder-bottom-right-radius: 20px 100px;\n\tborder-top-left-radius: 20px;\n\tborder-top-right-radius: 20px;\n\tbackground-color: #bdb4b4;\n}\n\n.pattern {\n\ttop: 15px;\n\tleft: calc(50% - 20px);\n\ttransform: rotate(65deg);\n}\n\n.pattern::after {\n\tcontent: '';\n\ttop: 11px;\n\tleft: -5px;\n\ttransform-origin: top;\n\ttransform: rotate(-130deg);\n}\n\n.upper-left-pattern {\n\ttop: 40px;\n\tleft: 80px;\n\ttransform: rotate(50deg);\n}\n\n.upper-right-pattern {\n\ttop: 29px;\n\tleft: 265px;\n\ttransform: rotate(78deg);\n}\n\n.lower-left-pattern {\n\ttop: 100px;\n\tleft: 45px;\n\ttransform: rotate(50deg);\n}\n\n.lower-center-left-pattern {\n\ttop: 80px;\n\tleft: 130px;\n\ttransform: rotate(60deg);\n}\n\n.lower-center-right-pattern {\n\ttop: 80px;\n\tleft: 215px;\n\ttransform: rotate(68deg);\n}\n\n.lower-right-pattern {\n\ttop: 96px;\n\tleft: 300px;\n\ttransform: rotate(78deg);\n}\n\n.arm {\n\tposition: absolute;\n\tz-index: -1;\n\ttop: 170px;\n\theight: 160px;\n\twidth: 90px;\n\tbackground-color: #b3a9a9;\n\ttransition: 1s;\n}\n\n.left-arm {\n\tleft: 50px;\n\tborder-top-left-radius: 35px;\n\tborder-top-right-radius: 15px;\n\tborder-bottom-left-radius: 50px 80%;\n\tborder-bottom-right-radius: 40px 65%;\n\ttransform-origin: top left;\n\ttransform: rotate(35deg);\n}\n\n.right-arm {\n\tright: 50px;\n\tborder-top-left-radius: 15px;\n\tborder-top-right-radius: 30px;\n\tborder-bottom-left-radius: 40px 65%;\n\tborder-bottom-right-radius: 50px 80%;\n\ttransform-origin: top right;\n\ttransform: rotate(-35deg);\n}\n\n.nail {\n\tposition: absolute;\n\twidth: 5px;\n\theight: 20px;\n\tbackground-color: white;\n\tborder-bottom-left-radius: 2px 70%;\n\tborder-bottom-right-radius: 2px 70%;\n\tborder-top-left-radius: 2px;\n\tborder-top-right-radius: 2px;\n}\n\n.left-arm .nail:nth-child(1) {\n\tbottom: -10px;\n\tleft: 35px;\n}\n\n.left-arm .nail:nth-child(2) {\n\tbottom: -13px;\n\tleft: 47px;\n}\n\n.left-arm .nail:nth-child(3) {\n\tbottom: -10px;\n\tleft: 59px;\n}\n\n.right-arm .nail:nth-child(1) {\n\tbottom: -10px;\n\tright: 35px;\n}\n\n.right-arm .nail:nth-child(2) {\n\tbottom: -13px;\n\tright: 47px;\n}\n\n.right-arm .nail:nth-child(3) {\n\tbottom: -10px;\n\tright: 59px;\n}\n\n.leg {\n\tposition: absolute;\n\tz-index: -1;\n\tbottom: -520px;\n\twidth: 150px;\n\theight: 70px;\n\tbackground-color: #b3a9a9;\n}\n\n.left-leg {\n\tright: calc(50%);\n\tborder-radius: 30px;\n\tborder-bottom-left-radius: 70% 100%;\n\tborder-bottom-right-radius: 15px;\n\tborder-top-left-radius: 50% 15px;\n\tborder-top-right-radius: 15px;\n}\n\n.right-leg {\n\tleft: calc(50%);\n\tborder-radius: 30px;\n\tborder-bottom-left-radius: 15px;\n\tborder-bottom-right-radius: 70% 100%;\n\tborder-top-left-radius: 15px;\n\tborder-top-right-radius: 50% 15px;\n}\n\n.claw {\n\tposition: absolute;\n\twidth: 5px;\n\theight: 5px;\n\tbackground-color: white;\n\tborder-top-left-radius: 70%;\n\tborder-top-right-radius: 70%;\n\tborder-bottom-left-radius: 2px 70%;\n\tborder-bottom-right-radius: 2px 70%;\n}\n\n.left-leg .claw:nth-child(1) {\n\tbottom: 0px;\n\tleft: 80px;\n}\n\n.left-leg .claw:nth-child(2) {\n\tbottom: 0px;\n\tleft: 100px;\n}\n\n.left-leg .claw:nth-child(3) {\n\tbottom: 0px;\n\tleft: 120px;\n}\n\n.right-leg .claw:nth-child(1) {\n\tbottom: 0px;\n\tright: 80px;\n}\n\n.right-leg .claw:nth-child(2) {\n\tbottom: 0px;\n\tright: 100px;\n}\n\n.right-leg .claw:nth-child(3) {\n\tbottom: 0px;\n\tright: 120px;\n}\n";
var n = 1; //初始化

showCSS.innerText = string.substr(0, n);
tCSS.innerHTML = string.substr(0, n);
var id = setInterval(function () {
  n += 1; //当打出完整的string后，就不要再重复打了

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  showCSS.innerText = string.substr(0, n);
  tCSS.innerHTML = string.substr(0, n);
  showCSS.scrollTop = showCSS.scrollHeight;
}, 0);
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50065" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map