(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function _n(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var x3 = { exports: {} },
  ii = {},
  w3 = { exports: {} },
  U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  E5 = Symbol.for("react.portal"),
  T5 = Symbol.for("react.fragment"),
  A5 = Symbol.for("react.strict_mode"),
  k5 = Symbol.for("react.profiler"),
  N5 = Symbol.for("react.provider"),
  M5 = Symbol.for("react.context"),
  P5 = Symbol.for("react.forward_ref"),
  O5 = Symbol.for("react.suspense"),
  D5 = Symbol.for("react.memo"),
  H5 = Symbol.for("react.lazy"),
  Oo = Symbol.iterator;
function R5(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Oo && e[Oo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var L3 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  S3 = Object.assign,
  E3 = {};
function Wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = E3),
    (this.updater = n || L3);
}
Wn.prototype.isReactComponent = {};
Wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function T3() {}
T3.prototype = Wn.prototype;
function gl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = E3),
    (this.updater = n || L3);
}
var yl = (gl.prototype = new T3());
yl.constructor = gl;
S3(yl, Wn.prototype);
yl.isPureReactComponent = !0;
var Do = Array.isArray,
  A3 = Object.prototype.hasOwnProperty,
  xl = { current: null },
  k3 = { key: !0, ref: !0, __self: !0, __source: !0 };
function N3(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      A3.call(t, r) && !k3.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    i.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: br,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: xl.current,
  };
}
function j5(e, t) {
  return {
    $$typeof: br,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function wl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function I5(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ho = /\/+/g;
function Di(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? I5("" + e.key)
    : t.toString(36);
}
function m1(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case br:
          case E5:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Di(o, 0) : r),
      Do(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ho, "$&/") + "/"),
          m1(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (wl(i) &&
            (i = j5(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Ho, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Do(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var s = r + Di(l, a);
      o += m1(l, t, n, s, i);
    }
  else if (((s = R5(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Di(l, a++)), (o += m1(l, t, n, s, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Zr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    m1(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function V5(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  C1 = { transition: null },
  z5 = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: C1,
    ReactCurrentOwner: xl,
  };
U.Children = {
  map: Zr,
  forEach: function (e, t, n) {
    Zr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Zr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Zr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!wl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
U.Component = Wn;
U.Fragment = T5;
U.Profiler = k5;
U.PureComponent = gl;
U.StrictMode = A5;
U.Suspense = O5;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z5;
U.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = S3({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = xl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      A3.call(t, s) &&
        !k3.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: br, type: e.type, key: i, ref: l, props: r, _owner: o };
};
U.createContext = function (e) {
  return (
    (e = {
      $$typeof: M5,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: N5, _context: e }),
    (e.Consumer = e)
  );
};
U.createElement = N3;
U.createFactory = function (e) {
  var t = N3.bind(null, e);
  return (t.type = e), t;
};
U.createRef = function () {
  return { current: null };
};
U.forwardRef = function (e) {
  return { $$typeof: P5, render: e };
};
U.isValidElement = wl;
U.lazy = function (e) {
  return { $$typeof: H5, _payload: { _status: -1, _result: e }, _init: V5 };
};
U.memo = function (e, t) {
  return { $$typeof: D5, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function (e) {
  var t = C1.transition;
  C1.transition = {};
  try {
    e();
  } finally {
    C1.transition = t;
  }
};
U.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
U.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
U.useContext = function (e) {
  return Oe.current.useContext(e);
};
U.useDebugValue = function () {};
U.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
U.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
U.useId = function () {
  return Oe.current.useId();
};
U.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
U.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
U.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
U.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
U.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
U.useRef = function (e) {
  return Oe.current.useRef(e);
};
U.useState = function (e) {
  return Oe.current.useState(e);
};
U.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
U.useTransition = function () {
  return Oe.current.useTransition();
};
U.version = "18.2.0";
w3.exports = U;
var E = w3.exports;
const H = _n(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b5 = E,
  B5 = Symbol.for("react.element"),
  F5 = Symbol.for("react.fragment"),
  U5 = Object.prototype.hasOwnProperty,
  _5 = b5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  W5 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M3(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) U5.call(t, r) && !W5.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: B5,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: _5.current,
  };
}
ii.Fragment = F5;
ii.jsx = M3;
ii.jsxs = M3;
x3.exports = ii;
var g = x3.exports,
  C2 = {},
  P3 = { exports: {} },
  Ze = {},
  O3 = { exports: {} },
  D3 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, k) {
    var M = O.length;
    O.push(k);
    e: for (; 0 < M; ) {
      var I = (M - 1) >>> 1,
        j = O[I];
      if (0 < i(j, k)) (O[I] = k), (O[M] = j), (M = I);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var k = O[0],
      M = O.pop();
    if (M !== k) {
      O[0] = M;
      e: for (var I = 0, j = O.length, B = j >>> 1; I < B; ) {
        var F = 2 * (I + 1) - 1,
          X = O[F],
          $ = F + 1,
          re = O[$];
        if (0 > i(X, M))
          $ < j && 0 > i(re, X)
            ? ((O[I] = re), (O[$] = M), (I = $))
            : ((O[I] = X), (O[F] = M), (I = F));
        else if ($ < j && 0 > i(re, M)) (O[I] = re), (O[$] = M), (I = $);
        else break e;
      }
    }
    return k;
  }
  function i(O, k) {
    var M = O.sortIndex - k.sortIndex;
    return M !== 0 ? M : O.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    C = !1,
    v = !1,
    y = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(O) {
    for (var k = n(u); k !== null; ) {
      if (k.callback === null) r(u);
      else if (k.startTime <= O)
        r(u), (k.sortIndex = k.expirationTime), t(s, k);
      else break;
      k = n(u);
    }
  }
  function x(O) {
    if (((y = !1), m(O), !v))
      if (n(s) !== null) (v = !0), de(S);
      else {
        var k = n(u);
        k !== null && ae(x, k.startTime - O);
      }
  }
  function S(O, k) {
    (v = !1), y && ((y = !1), p(w), (w = -1)), (C = !0);
    var M = f;
    try {
      for (
        m(k), d = n(s);
        d !== null && (!(d.expirationTime > k) || (O && !D()));

      ) {
        var I = d.callback;
        if (typeof I == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var j = I(d.expirationTime <= k);
          (k = e.unstable_now()),
            typeof j == "function" ? (d.callback = j) : d === n(s) && r(s),
            m(k);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var B = !0;
      else {
        var F = n(u);
        F !== null && ae(x, F.startTime - k), (B = !1);
      }
      return B;
    } finally {
      (d = null), (f = M), (C = !1);
    }
  }
  var N = !1,
    T = null,
    w = -1,
    R = 5,
    A = -1;
  function D() {
    return !(e.unstable_now() - A < R);
  }
  function b() {
    if (T !== null) {
      var O = e.unstable_now();
      A = O;
      var k = !0;
      try {
        k = T(!0, O);
      } finally {
        k ? _() : ((N = !1), (T = null));
      }
    } else N = !1;
  }
  var _;
  if (typeof h == "function")
    _ = function () {
      h(b);
    };
  else if (typeof MessageChannel < "u") {
    var Y = new MessageChannel(),
      Z = Y.port2;
    (Y.port1.onmessage = b),
      (_ = function () {
        Z.postMessage(null);
      });
  } else
    _ = function () {
      L(b, 0);
    };
  function de(O) {
    (T = O), N || ((N = !0), _());
  }
  function ae(O, k) {
    w = L(function () {
      O(e.unstable_now());
    }, k);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || C || ((v = !0), de(S));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = f;
      }
      var M = f;
      f = k;
      try {
        return O();
      } finally {
        f = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, k) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var M = f;
      f = O;
      try {
        return k();
      } finally {
        f = M;
      }
    }),
    (e.unstable_scheduleCallback = function (O, k, M) {
      var I = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? I + M : I))
          : (M = I),
        O)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = M + j),
        (O = {
          id: c++,
          callback: k,
          priorityLevel: O,
          startTime: M,
          expirationTime: j,
          sortIndex: -1,
        }),
        M > I
          ? ((O.sortIndex = M),
            t(u, O),
            n(s) === null &&
              O === n(u) &&
              (y ? (p(w), (w = -1)) : (y = !0), ae(x, M - I)))
          : ((O.sortIndex = j), t(s, O), v || C || ((v = !0), de(S))),
        O
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (O) {
      var k = f;
      return function () {
        var M = f;
        f = k;
        try {
          return O.apply(this, arguments);
        } finally {
          f = M;
        }
      };
    });
})(D3);
O3.exports = D3;
var G5 = O3.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var H3 = E,
  Ye = G5;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var R3 = new Set(),
  yr = {};
function pn(e, t) {
  Rn(e, t), Rn(e + "Capture", t);
}
function Rn(e, t) {
  for (yr[e] = t, e = 0; e < t.length; e++) R3.add(t[e]);
}
var Lt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  v2 = Object.prototype.hasOwnProperty,
  Y5 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ro = {},
  jo = {};
function Z5(e) {
  return v2.call(jo, e)
    ? !0
    : v2.call(Ro, e)
    ? !1
    : Y5.test(e)
    ? (jo[e] = !0)
    : ((Ro[e] = !0), !1);
}
function K5(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Q5(e, t, n, r) {
  if (t === null || typeof t > "u" || K5(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ll = /[\-:]([a-z])/g;
function Sl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ll, Sl);
    we[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ll, Sl);
    we[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ll, Sl);
  we[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function El(e, t, n, r) {
  var i = we.hasOwnProperty(t) ? we[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Q5(t, n, i, r) && (n = null),
    r || i === null
      ? Z5(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var At = H3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Kr = Symbol.for("react.element"),
  Cn = Symbol.for("react.portal"),
  vn = Symbol.for("react.fragment"),
  Tl = Symbol.for("react.strict_mode"),
  g2 = Symbol.for("react.profiler"),
  j3 = Symbol.for("react.provider"),
  I3 = Symbol.for("react.context"),
  Al = Symbol.for("react.forward_ref"),
  y2 = Symbol.for("react.suspense"),
  x2 = Symbol.for("react.suspense_list"),
  kl = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  V3 = Symbol.for("react.offscreen"),
  Io = Symbol.iterator;
function Kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Io && e[Io]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oe = Object.assign,
  Hi;
function rr(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Ri = !1;
function ji(e, t) {
  if (!e || Ri) return "";
  Ri = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          a = l.length - 1;
        1 <= o && 0 <= a && i[o] !== l[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== l[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== l[a])) {
                var s =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (Ri = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? rr(e) : "";
}
function X5(e) {
  switch (e.tag) {
    case 5:
      return rr(e.type);
    case 16:
      return rr("Lazy");
    case 13:
      return rr("Suspense");
    case 19:
      return rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ji(e.type, !1)), e;
    case 11:
      return (e = ji(e.type.render, !1)), e;
    case 1:
      return (e = ji(e.type, !0)), e;
    default:
      return "";
  }
}
function w2(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vn:
      return "Fragment";
    case Cn:
      return "Portal";
    case g2:
      return "Profiler";
    case Tl:
      return "StrictMode";
    case y2:
      return "Suspense";
    case x2:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case I3:
        return (e.displayName || "Context") + ".Consumer";
      case j3:
        return (e._context.displayName || "Context") + ".Provider";
      case Al:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case kl:
        return (
          (t = e.displayName || null), t !== null ? t : w2(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return w2(e(t));
        } catch {}
    }
  return null;
}
function $5(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return w2(t);
    case 8:
      return t === Tl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Gt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function z3(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function J5(e) {
  var t = z3(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qr(e) {
  e._valueTracker || (e._valueTracker = J5(e));
}
function b3(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = z3(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function P1(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function L2(e, t) {
  var n = t.checked;
  return oe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Gt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function B3(e, t) {
  (t = t.checked), t != null && El(e, "checked", t, !1);
}
function S2(e, t) {
  B3(e, t);
  var n = Gt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? E2(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && E2(e, t.type, Gt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function E2(e, t, n) {
  (t !== "number" || P1(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ir = Array.isArray;
function Nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function T2(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return oe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function bo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (ir(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function F3(e, t) {
  var n = Gt(t.value),
    r = Gt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function U3(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function A2(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? U3(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Xr,
  _3 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Xr = Xr || document.createElement("div"),
          Xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Xr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  q5 = ["Webkit", "ms", "Moz", "O"];
Object.keys(sr).forEach(function (e) {
  q5.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sr[t] = sr[e]);
  });
});
function W3(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (sr.hasOwnProperty(e) && sr[e])
    ? ("" + t).trim()
    : t + "px";
}
function G3(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = W3(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var e0 = oe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function k2(e, t) {
  if (t) {
    if (e0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function N2(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var M2 = null;
function Nl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var P2 = null,
  Mn = null,
  Pn = null;
function Fo(e) {
  if ((e = Ur(e))) {
    if (typeof P2 != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = ui(t)), P2(e.stateNode, e.type, t));
  }
}
function Y3(e) {
  Mn ? (Pn ? Pn.push(e) : (Pn = [e])) : (Mn = e);
}
function Z3() {
  if (Mn) {
    var e = Mn,
      t = Pn;
    if (((Pn = Mn = null), Fo(e), t)) for (e = 0; e < t.length; e++) Fo(t[e]);
  }
}
function K3(e, t) {
  return e(t);
}
function Q3() {}
var Ii = !1;
function X3(e, t, n) {
  if (Ii) return e(t, n);
  Ii = !0;
  try {
    return K3(e, t, n);
  } finally {
    (Ii = !1), (Mn !== null || Pn !== null) && (Q3(), Z3());
  }
}
function wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ui(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var O2 = !1;
if (Lt)
  try {
    var Qn = {};
    Object.defineProperty(Qn, "passive", {
      get: function () {
        O2 = !0;
      },
    }),
      window.addEventListener("test", Qn, Qn),
      window.removeEventListener("test", Qn, Qn);
  } catch {
    O2 = !1;
  }
function t0(e, t, n, r, i, l, o, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ar = !1,
  O1 = null,
  D1 = !1,
  D2 = null,
  n0 = {
    onError: function (e) {
      (ar = !0), (O1 = e);
    },
  };
function r0(e, t, n, r, i, l, o, a, s) {
  (ar = !1), (O1 = null), t0.apply(n0, arguments);
}
function i0(e, t, n, r, i, l, o, a, s) {
  if ((r0.apply(this, arguments), ar)) {
    if (ar) {
      var u = O1;
      (ar = !1), (O1 = null);
    } else throw Error(P(198));
    D1 || ((D1 = !0), (D2 = u));
  }
}
function hn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function $3(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Uo(e) {
  if (hn(e) !== e) throw Error(P(188));
}
function l0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = hn(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Uo(i), e;
        if (l === r) return Uo(i), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = l.child; a; ) {
          if (a === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function J3(e) {
  return (e = l0(e)), e !== null ? q3(e) : null;
}
function q3(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = q3(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var e4 = Ye.unstable_scheduleCallback,
  _o = Ye.unstable_cancelCallback,
  o0 = Ye.unstable_shouldYield,
  s0 = Ye.unstable_requestPaint,
  ue = Ye.unstable_now,
  a0 = Ye.unstable_getCurrentPriorityLevel,
  Ml = Ye.unstable_ImmediatePriority,
  t4 = Ye.unstable_UserBlockingPriority,
  H1 = Ye.unstable_NormalPriority,
  u0 = Ye.unstable_LowPriority,
  n4 = Ye.unstable_IdlePriority,
  li = null,
  ft = null;
function c0(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(li, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : p0,
  d0 = Math.log,
  f0 = Math.LN2;
function p0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((d0(e) / f0) | 0)) | 0;
}
var $r = 64,
  Jr = 4194304;
function lr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function R1(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = lr(a)) : ((l &= o), l !== 0 && (r = lr(l)));
  } else (o = n & ~i), o !== 0 ? (r = lr(o)) : l !== 0 && (r = lr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function h0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function m0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - ot(l),
      a = 1 << o,
      s = i[o];
    s === -1
      ? (!(a & n) || a & r) && (i[o] = h0(a, t))
      : s <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function H2(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function r4() {
  var e = $r;
  return ($r <<= 1), !($r & 4194240) && ($r = 64), e;
}
function Vi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Br(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function C0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - ot(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Pl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var K = 0;
function i4(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var l4,
  Ol,
  o4,
  s4,
  a4,
  R2 = !1,
  qr = [],
  Vt = null,
  zt = null,
  bt = null,
  Lr = new Map(),
  Sr = new Map(),
  Pt = [],
  v0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Wo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      zt = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Lr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Sr.delete(t.pointerId);
  }
}
function Xn(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = Ur(t)), t !== null && Ol(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function g0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Vt = Xn(Vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (zt = Xn(zt, e, t, n, r, i)), !0;
    case "mouseover":
      return (bt = Xn(bt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Lr.set(l, Xn(Lr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Sr.set(l, Xn(Sr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function u4(e) {
  var t = qt(e.target);
  if (t !== null) {
    var n = hn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $3(n)), t !== null)) {
          (e.blockedOn = t),
            a4(e.priority, function () {
              o4(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function v1(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = j2(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (M2 = r), n.target.dispatchEvent(r), (M2 = null);
    } else return (t = Ur(n)), t !== null && Ol(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Go(e, t, n) {
  v1(e) && n.delete(t);
}
function y0() {
  (R2 = !1),
    Vt !== null && v1(Vt) && (Vt = null),
    zt !== null && v1(zt) && (zt = null),
    bt !== null && v1(bt) && (bt = null),
    Lr.forEach(Go),
    Sr.forEach(Go);
}
function $n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    R2 ||
      ((R2 = !0),
      Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority, y0)));
}
function Er(e) {
  function t(i) {
    return $n(i, e);
  }
  if (0 < qr.length) {
    $n(qr[0], e);
    for (var n = 1; n < qr.length; n++) {
      var r = qr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && $n(Vt, e),
      zt !== null && $n(zt, e),
      bt !== null && $n(bt, e),
      Lr.forEach(t),
      Sr.forEach(t),
      n = 0;
    n < Pt.length;
    n++
  )
    (r = Pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
    u4(n), n.blockedOn === null && Pt.shift();
}
var On = At.ReactCurrentBatchConfig,
  j1 = !0;
function x0(e, t, n, r) {
  var i = K,
    l = On.transition;
  On.transition = null;
  try {
    (K = 1), Dl(e, t, n, r);
  } finally {
    (K = i), (On.transition = l);
  }
}
function w0(e, t, n, r) {
  var i = K,
    l = On.transition;
  On.transition = null;
  try {
    (K = 4), Dl(e, t, n, r);
  } finally {
    (K = i), (On.transition = l);
  }
}
function Dl(e, t, n, r) {
  if (j1) {
    var i = j2(e, t, n, r);
    if (i === null) Zi(e, t, r, I1, n), Wo(e, r);
    else if (g0(i, e, t, n, r)) r.stopPropagation();
    else if ((Wo(e, r), t & 4 && -1 < v0.indexOf(e))) {
      for (; i !== null; ) {
        var l = Ur(i);
        if (
          (l !== null && l4(l),
          (l = j2(e, t, n, r)),
          l === null && Zi(e, t, r, I1, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else Zi(e, t, r, null, n);
  }
}
var I1 = null;
function j2(e, t, n, r) {
  if (((I1 = null), (e = Nl(r)), (e = qt(e)), e !== null))
    if (((t = hn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $3(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (I1 = e), null;
}
function c4(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (a0()) {
        case Ml:
          return 1;
        case t4:
          return 4;
        case H1:
        case u0:
          return 16;
        case n4:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  Hl = null,
  g1 = null;
function d4() {
  if (g1) return g1;
  var e,
    t = Hl,
    n = t.length,
    r,
    i = "value" in Dt ? Dt.value : Dt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (g1 = i.slice(e, 1 < r ? 1 - r : void 0));
}
function y1(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function e1() {
  return !0;
}
function Yo() {
  return !1;
}
function Ke(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? e1
        : Yo),
      (this.isPropagationStopped = Yo),
      this
    );
  }
  return (
    oe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = e1));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = e1));
      },
      persist: function () {},
      isPersistent: e1,
    }),
    t
  );
}
var Gn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Rl = Ke(Gn),
  Fr = oe({}, Gn, { view: 0, detail: 0 }),
  L0 = Ke(Fr),
  zi,
  bi,
  Jn,
  oi = oe({}, Fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Jn &&
            (Jn && e.type === "mousemove"
              ? ((zi = e.screenX - Jn.screenX), (bi = e.screenY - Jn.screenY))
              : (bi = zi = 0),
            (Jn = e)),
          zi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bi;
    },
  }),
  Zo = Ke(oi),
  S0 = oe({}, oi, { dataTransfer: 0 }),
  E0 = Ke(S0),
  T0 = oe({}, Fr, { relatedTarget: 0 }),
  Bi = Ke(T0),
  A0 = oe({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  k0 = Ke(A0),
  N0 = oe({}, Gn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  M0 = Ke(N0),
  P0 = oe({}, Gn, { data: 0 }),
  Ko = Ke(P0),
  O0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  D0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  H0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function R0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = H0[e]) ? !!t[e] : !1;
}
function jl() {
  return R0;
}
var j0 = oe({}, Fr, {
    key: function (e) {
      if (e.key) {
        var t = O0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = y1(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? D0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jl,
    charCode: function (e) {
      return e.type === "keypress" ? y1(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? y1(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  I0 = Ke(j0),
  V0 = oe({}, oi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qo = Ke(V0),
  z0 = oe({}, Fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jl,
  }),
  b0 = Ke(z0),
  B0 = oe({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  F0 = Ke(B0),
  U0 = oe({}, oi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _0 = Ke(U0),
  W0 = [9, 13, 27, 32],
  Il = Lt && "CompositionEvent" in window,
  ur = null;
Lt && "documentMode" in document && (ur = document.documentMode);
var G0 = Lt && "TextEvent" in window && !ur,
  f4 = Lt && (!Il || (ur && 8 < ur && 11 >= ur)),
  Xo = " ",
  $o = !1;
function p4(e, t) {
  switch (e) {
    case "keyup":
      return W0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function h4(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var gn = !1;
function Y0(e, t) {
  switch (e) {
    case "compositionend":
      return h4(t);
    case "keypress":
      return t.which !== 32 ? null : (($o = !0), Xo);
    case "textInput":
      return (e = t.data), e === Xo && $o ? null : e;
    default:
      return null;
  }
}
function Z0(e, t) {
  if (gn)
    return e === "compositionend" || (!Il && p4(e, t))
      ? ((e = d4()), (g1 = Hl = Dt = null), (gn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return f4 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var K0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!K0[e.type] : t === "textarea";
}
function m4(e, t, n, r) {
  Y3(r),
    (t = V1(t, "onChange")),
    0 < t.length &&
      ((n = new Rl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var cr = null,
  Tr = null;
function Q0(e) {
  A4(e, 0);
}
function si(e) {
  var t = wn(e);
  if (b3(t)) return e;
}
function X0(e, t) {
  if (e === "change") return t;
}
var C4 = !1;
if (Lt) {
  var Fi;
  if (Lt) {
    var Ui = "oninput" in document;
    if (!Ui) {
      var qo = document.createElement("div");
      qo.setAttribute("oninput", "return;"),
        (Ui = typeof qo.oninput == "function");
    }
    Fi = Ui;
  } else Fi = !1;
  C4 = Fi && (!document.documentMode || 9 < document.documentMode);
}
function es() {
  cr && (cr.detachEvent("onpropertychange", v4), (Tr = cr = null));
}
function v4(e) {
  if (e.propertyName === "value" && si(Tr)) {
    var t = [];
    m4(t, Tr, e, Nl(e)), X3(Q0, t);
  }
}
function $0(e, t, n) {
  e === "focusin"
    ? (es(), (cr = t), (Tr = n), cr.attachEvent("onpropertychange", v4))
    : e === "focusout" && es();
}
function J0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return si(Tr);
}
function q0(e, t) {
  if (e === "click") return si(t);
}
function e8(e, t) {
  if (e === "input" || e === "change") return si(t);
}
function t8(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var at = typeof Object.is == "function" ? Object.is : t8;
function Ar(e, t) {
  if (at(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!v2.call(t, i) || !at(e[i], t[i])) return !1;
  }
  return !0;
}
function ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ns(e, t) {
  var n = ts(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ts(n);
  }
}
function g4(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? g4(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function y4() {
  for (var e = window, t = P1(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = P1(e.document);
  }
  return t;
}
function Vl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function n8(e) {
  var t = y4(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    g4(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = ns(n, l));
        var o = ns(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var r8 = Lt && "documentMode" in document && 11 >= document.documentMode,
  yn = null,
  I2 = null,
  dr = null,
  V2 = !1;
function rs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  V2 ||
    yn == null ||
    yn !== P1(r) ||
    ((r = yn),
    "selectionStart" in r && Vl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dr && Ar(dr, r)) ||
      ((dr = r),
      (r = V1(I2, "onSelect")),
      0 < r.length &&
        ((t = new Rl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = yn))));
}
function t1(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var xn = {
    animationend: t1("Animation", "AnimationEnd"),
    animationiteration: t1("Animation", "AnimationIteration"),
    animationstart: t1("Animation", "AnimationStart"),
    transitionend: t1("Transition", "TransitionEnd"),
  },
  _i = {},
  x4 = {};
Lt &&
  ((x4 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete xn.animationend.animation,
    delete xn.animationiteration.animation,
    delete xn.animationstart.animation),
  "TransitionEvent" in window || delete xn.transitionend.transition);
function ai(e) {
  if (_i[e]) return _i[e];
  if (!xn[e]) return e;
  var t = xn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in x4) return (_i[e] = t[n]);
  return e;
}
var w4 = ai("animationend"),
  L4 = ai("animationiteration"),
  S4 = ai("animationstart"),
  E4 = ai("transitionend"),
  T4 = new Map(),
  is =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  T4.set(e, t), pn(t, [e]);
}
for (var Wi = 0; Wi < is.length; Wi++) {
  var Gi = is[Wi],
    i8 = Gi.toLowerCase(),
    l8 = Gi[0].toUpperCase() + Gi.slice(1);
  Zt(i8, "on" + l8);
}
Zt(w4, "onAnimationEnd");
Zt(L4, "onAnimationIteration");
Zt(S4, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(E4, "onTransitionEnd");
Rn("onMouseEnter", ["mouseout", "mouseover"]);
Rn("onMouseLeave", ["mouseout", "mouseover"]);
Rn("onPointerEnter", ["pointerout", "pointerover"]);
Rn("onPointerLeave", ["pointerout", "pointerover"]);
pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var or =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  o8 = new Set("cancel close invalid load scroll toggle".split(" ").concat(or));
function ls(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), i0(r, t, void 0, e), (e.currentTarget = null);
}
function A4(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== l && i.isPropagationStopped())) break e;
          ls(i, a, u), (l = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== l && i.isPropagationStopped())
          )
            break e;
          ls(i, a, u), (l = s);
        }
    }
  }
  if (D1) throw ((e = D2), (D1 = !1), (D2 = null), e);
}
function ee(e, t) {
  var n = t[U2];
  n === void 0 && (n = t[U2] = new Set());
  var r = e + "__bubble";
  n.has(r) || (k4(t, e, 2, !1), n.add(r));
}
function Yi(e, t, n) {
  var r = 0;
  t && (r |= 4), k4(n, e, r, t);
}
var n1 = "_reactListening" + Math.random().toString(36).slice(2);
function kr(e) {
  if (!e[n1]) {
    (e[n1] = !0),
      R3.forEach(function (n) {
        n !== "selectionchange" && (o8.has(n) || Yi(n, !1, e), Yi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[n1] || ((t[n1] = !0), Yi("selectionchange", !1, t));
  }
}
function k4(e, t, n, r) {
  switch (c4(t)) {
    case 1:
      var i = x0;
      break;
    case 4:
      i = w0;
      break;
    default:
      i = Dl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !O2 ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Zi(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === i || (s.nodeType === 8 && s.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = qt(a)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = l = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  X3(function () {
    var u = l,
      c = Nl(n),
      d = [];
    e: {
      var f = T4.get(e);
      if (f !== void 0) {
        var C = Rl,
          v = e;
        switch (e) {
          case "keypress":
            if (y1(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = I0;
            break;
          case "focusin":
            (v = "focus"), (C = Bi);
            break;
          case "focusout":
            (v = "blur"), (C = Bi);
            break;
          case "beforeblur":
          case "afterblur":
            C = Bi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Zo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = E0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = b0;
            break;
          case w4:
          case L4:
          case S4:
            C = k0;
            break;
          case E4:
            C = F0;
            break;
          case "scroll":
            C = L0;
            break;
          case "wheel":
            C = _0;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = M0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Qo;
        }
        var y = (t & 4) !== 0,
          L = !y && e === "scroll",
          p = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var x = m.stateNode;
          if (
            (m.tag === 5 &&
              x !== null &&
              ((m = x),
              p !== null && ((x = wr(h, p)), x != null && y.push(Nr(h, x, m)))),
            L)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new C(f, v, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (C = e === "mouseout" || e === "pointerout"),
          f &&
            n !== M2 &&
            (v = n.relatedTarget || n.fromElement) &&
            (qt(v) || v[St]))
        )
          break e;
        if (
          (C || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          C
            ? ((v = n.relatedTarget || n.toElement),
              (C = u),
              (v = v ? qt(v) : null),
              v !== null &&
                ((L = hn(v)), v !== L || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((C = null), (v = u)),
          C !== v)
        ) {
          if (
            ((y = Zo),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Qo),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (L = C == null ? f : wn(C)),
            (m = v == null ? f : wn(v)),
            (f = new y(x, h + "leave", C, n, c)),
            (f.target = L),
            (f.relatedTarget = m),
            (x = null),
            qt(c) === u &&
              ((y = new y(p, h + "enter", v, n, c)),
              (y.target = m),
              (y.relatedTarget = L),
              (x = y)),
            (L = x),
            C && v)
          )
            t: {
              for (y = C, p = v, h = 0, m = y; m; m = mn(m)) h++;
              for (m = 0, x = p; x; x = mn(x)) m++;
              for (; 0 < h - m; ) (y = mn(y)), h--;
              for (; 0 < m - h; ) (p = mn(p)), m--;
              for (; h--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = mn(y)), (p = mn(p));
              }
              y = null;
            }
          else y = null;
          C !== null && os(d, f, C, y, !1),
            v !== null && L !== null && os(d, L, v, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? wn(u) : window),
          (C = f.nodeName && f.nodeName.toLowerCase()),
          C === "select" || (C === "input" && f.type === "file"))
        )
          var S = X0;
        else if (Jo(f))
          if (C4) S = e8;
          else {
            S = J0;
            var N = $0;
          }
        else
          (C = f.nodeName) &&
            C.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = q0);
        if (S && (S = S(e, u))) {
          m4(d, S, n, c);
          break e;
        }
        N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            E2(f, "number", f.value);
      }
      switch (((N = u ? wn(u) : window), e)) {
        case "focusin":
          (Jo(N) || N.contentEditable === "true") &&
            ((yn = N), (I2 = u), (dr = null));
          break;
        case "focusout":
          dr = I2 = yn = null;
          break;
        case "mousedown":
          V2 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (V2 = !1), rs(d, n, c);
          break;
        case "selectionchange":
          if (r8) break;
        case "keydown":
        case "keyup":
          rs(d, n, c);
      }
      var T;
      if (Il)
        e: {
          switch (e) {
            case "compositionstart":
              var w = "onCompositionStart";
              break e;
            case "compositionend":
              w = "onCompositionEnd";
              break e;
            case "compositionupdate":
              w = "onCompositionUpdate";
              break e;
          }
          w = void 0;
        }
      else
        gn
          ? p4(e, n) && (w = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (w = "onCompositionStart");
      w &&
        (f4 &&
          n.locale !== "ko" &&
          (gn || w !== "onCompositionStart"
            ? w === "onCompositionEnd" && gn && (T = d4())
            : ((Dt = c),
              (Hl = "value" in Dt ? Dt.value : Dt.textContent),
              (gn = !0))),
        (N = V1(u, w)),
        0 < N.length &&
          ((w = new Ko(w, e, null, n, c)),
          d.push({ event: w, listeners: N }),
          T ? (w.data = T) : ((T = h4(n)), T !== null && (w.data = T)))),
        (T = G0 ? Y0(e, n) : Z0(e, n)) &&
          ((u = V1(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ko("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    A4(d, t);
  });
}
function Nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function V1(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = wr(e, n)),
      l != null && r.unshift(Nr(e, l, i)),
      (l = wr(e, t)),
      l != null && r.push(Nr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function os(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((s = wr(n, l)), s != null && o.unshift(Nr(n, s, a)))
        : i || ((s = wr(n, l)), s != null && o.push(Nr(n, s, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var s8 = /\r\n?/g,
  a8 = /\u0000|\uFFFD/g;
function ss(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      s8,
      `
`
    )
    .replace(a8, "");
}
function r1(e, t, n) {
  if (((t = ss(t)), ss(e) !== t && n)) throw Error(P(425));
}
function z1() {}
var z2 = null,
  b2 = null;
function B2(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var F2 = typeof setTimeout == "function" ? setTimeout : void 0,
  u8 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  as = typeof Promise == "function" ? Promise : void 0,
  c8 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof as < "u"
      ? function (e) {
          return as.resolve(null).then(e).catch(d8);
        }
      : F2;
function d8(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ki(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Er(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Er(t);
}
function Bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function us(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yn = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + Yn,
  Mr = "__reactProps$" + Yn,
  St = "__reactContainer$" + Yn,
  U2 = "__reactEvents$" + Yn,
  f8 = "__reactListeners$" + Yn,
  p8 = "__reactHandles$" + Yn;
function qt(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[St] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = us(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = us(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ur(e) {
  return (
    (e = e[dt] || e[St]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function ui(e) {
  return e[Mr] || null;
}
var _2 = [],
  Ln = -1;
function Kt(e) {
  return { current: e };
}
function te(e) {
  0 > Ln || ((e.current = _2[Ln]), (_2[Ln] = null), Ln--);
}
function q(e, t) {
  Ln++, (_2[Ln] = e.current), (e.current = t);
}
var Yt = {},
  Te = Kt(Yt),
  Ie = Kt(!1),
  on = Yt;
function jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ve(e) {
  return (e = e.childContextTypes), e != null;
}
function b1() {
  te(Ie), te(Te);
}
function cs(e, t, n) {
  if (Te.current !== Yt) throw Error(P(168));
  q(Te, t), q(Ie, n);
}
function N4(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(P(108, $5(e) || "Unknown", i));
  return oe({}, n, r);
}
function B1(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yt),
    (on = Te.current),
    q(Te, e),
    q(Ie, Ie.current),
    !0
  );
}
function ds(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = N4(e, t, on)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Ie),
      te(Te),
      q(Te, e))
    : te(Ie),
    q(Ie, n);
}
var gt = null,
  ci = !1,
  Qi = !1;
function M4(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function h8(e) {
  (ci = !0), M4(e);
}
function Qt() {
  if (!Qi && gt !== null) {
    Qi = !0;
    var e = 0,
      t = K;
    try {
      var n = gt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (ci = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), e4(Ml, Qt), i);
    } finally {
      (K = t), (Qi = !1);
    }
  }
  return null;
}
var Sn = [],
  En = 0,
  F1 = null,
  U1 = 0,
  Xe = [],
  $e = 0,
  sn = null,
  yt = 1,
  xt = "";
function $t(e, t) {
  (Sn[En++] = U1), (Sn[En++] = F1), (F1 = e), (U1 = t);
}
function P4(e, t, n) {
  (Xe[$e++] = yt), (Xe[$e++] = xt), (Xe[$e++] = sn), (sn = e);
  var r = yt;
  e = xt;
  var i = 32 - ot(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - ot(t) + i;
  if (30 < l) {
    var o = i - (i % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (yt = (1 << (32 - ot(t) + i)) | (n << i) | r),
      (xt = l + e);
  } else (yt = (1 << l) | (n << i) | r), (xt = e);
}
function zl(e) {
  e.return !== null && ($t(e, 1), P4(e, 1, 0));
}
function bl(e) {
  for (; e === F1; )
    (F1 = Sn[--En]), (Sn[En] = null), (U1 = Sn[--En]), (Sn[En] = null);
  for (; e === sn; )
    (sn = Xe[--$e]),
      (Xe[$e] = null),
      (xt = Xe[--$e]),
      (Xe[$e] = null),
      (yt = Xe[--$e]),
      (Xe[$e] = null);
}
var Ge = null,
  Ue = null,
  ne = !1,
  lt = null;
function O4(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function fs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ge = e), (Ue = Bt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ge = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = sn !== null ? { id: yt, overflow: xt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ge = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function W2(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function G2(e) {
  if (ne) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!fs(e, t)) {
        if (W2(e)) throw Error(P(418));
        t = Bt(n.nextSibling);
        var r = Ge;
        t && fs(e, t)
          ? O4(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), (Ge = e));
      }
    } else {
      if (W2(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), (Ge = e);
    }
  }
}
function ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ge = e;
}
function i1(e) {
  if (e !== Ge) return !1;
  if (!ne) return ps(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !B2(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (W2(e)) throw (D4(), Error(P(418)));
    for (; t; ) O4(e, t), (t = Bt(t.nextSibling));
  }
  if ((ps(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Bt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Ge ? Bt(e.stateNode.nextSibling) : null;
  return !0;
}
function D4() {
  for (var e = Ue; e; ) e = Bt(e.nextSibling);
}
function In() {
  (Ue = Ge = null), (ne = !1);
}
function Bl(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var m8 = At.ReactCurrentBatchConfig;
function rt(e, t) {
  if (e && e.defaultProps) {
    (t = oe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _1 = Kt(null),
  W1 = null,
  Tn = null,
  Fl = null;
function Ul() {
  Fl = Tn = W1 = null;
}
function _l(e) {
  var t = _1.current;
  te(_1), (e._currentValue = t);
}
function Y2(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dn(e, t) {
  (W1 = e),
    (Fl = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (Fl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (W1 === null) throw Error(P(308));
      (Tn = e), (W1.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var en = null;
function Wl(e) {
  en === null ? (en = [e]) : en.push(e);
}
function H4(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Et(e, r)
  );
}
function Et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function Gl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function R4(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function wt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ft(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Et(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Et(e, n)
  );
}
function x1(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pl(e, n);
  }
}
function hs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function G1(e, t, n, r) {
  var i = e.updateQueue;
  Mt = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), o === null ? (l = u) : (o.next = u), (o = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var d = i.baseState;
    (o = 0), (c = u = s = null), (a = l);
    do {
      var f = a.lane,
        C = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: C,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((f = t), (C = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(C, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == "function" ? v.call(C, d, f) : v),
                f == null)
              )
                break e;
              d = oe({}, d, f);
              break e;
            case 2:
              Mt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (C = {
          eventTime: C,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = C), (s = d)) : (c = c.next = C),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (s = d),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (un |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function ms(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(P(191, i));
        i.call(r);
      }
    }
}
var j4 = new H3.Component().refs;
function Z2(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : oe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var di = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? hn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      i = _t(e),
      l = wt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Ft(e, l, i)),
      t !== null && (st(t, e, i, r), x1(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      i = _t(e),
      l = wt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Ft(e, l, i)),
      t !== null && (st(t, e, i, r), x1(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = _t(e),
      i = wt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ft(e, i, r)),
      t !== null && (st(t, e, r, n), x1(t, e, r));
  },
};
function Cs(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ar(n, r) || !Ar(i, l)
      : !0
  );
}
function I4(e, t, n) {
  var r = !1,
    i = Yt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = et(l))
      : ((i = Ve(t) ? on : Te.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? jn(e, i) : Yt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = di),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function vs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && di.enqueueReplaceState(t, t.state, null);
}
function K2(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = j4), Gl(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = et(l))
    : ((l = Ve(t) ? on : Te.current), (i.context = jn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Z2(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && di.enqueueReplaceState(i, i.state, null),
      G1(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function qn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            a === j4 && (a = i.refs = {}),
              o === null ? delete a[l] : (a[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function l1(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function V4(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = Wt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, x) {
    return h === null || h.tag !== 6
      ? ((h = n2(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function s(p, h, m, x) {
    var S = m.type;
    return S === vn
      ? c(p, h, m.props.children, x, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Nt &&
            gs(S) === h.type))
      ? ((x = i(h, m.props)), (x.ref = qn(p, h, m)), (x.return = p), x)
      : ((x = A1(m.type, m.key, m.props, null, p.mode, x)),
        (x.ref = qn(p, h, m)),
        (x.return = p),
        x);
  }
  function u(p, h, m, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = r2(m, p.mode, x)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, x, S) {
    return h === null || h.tag !== 7
      ? ((h = rn(m, p.mode, x, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function d(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = n2("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Kr:
          return (
            (m = A1(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = qn(p, null, h)),
            (m.return = p),
            m
          );
        case Cn:
          return (h = r2(h, p.mode, m)), (h.return = p), h;
        case Nt:
          var x = h._init;
          return d(p, x(h._payload), m);
      }
      if (ir(h) || Kn(h))
        return (h = rn(h, p.mode, m, null)), (h.return = p), h;
      l1(p, h);
    }
    return null;
  }
  function f(p, h, m, x) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(p, h, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Kr:
          return m.key === S ? s(p, h, m, x) : null;
        case Cn:
          return m.key === S ? u(p, h, m, x) : null;
        case Nt:
          return (S = m._init), f(p, h, S(m._payload), x);
      }
      if (ir(m) || Kn(m)) return S !== null ? null : c(p, h, m, x, null);
      l1(p, m);
    }
    return null;
  }
  function C(p, h, m, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(m) || null), a(h, p, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Kr:
          return (p = p.get(x.key === null ? m : x.key) || null), s(h, p, x, S);
        case Cn:
          return (p = p.get(x.key === null ? m : x.key) || null), u(h, p, x, S);
        case Nt:
          var N = x._init;
          return C(p, h, m, N(x._payload), S);
      }
      if (ir(x) || Kn(x)) return (p = p.get(m) || null), c(h, p, x, S, null);
      l1(h, x);
    }
    return null;
  }
  function v(p, h, m, x) {
    for (
      var S = null, N = null, T = h, w = (h = 0), R = null;
      T !== null && w < m.length;
      w++
    ) {
      T.index > w ? ((R = T), (T = null)) : (R = T.sibling);
      var A = f(p, T, m[w], x);
      if (A === null) {
        T === null && (T = R);
        break;
      }
      e && T && A.alternate === null && t(p, T),
        (h = l(A, h, w)),
        N === null ? (S = A) : (N.sibling = A),
        (N = A),
        (T = R);
    }
    if (w === m.length) return n(p, T), ne && $t(p, w), S;
    if (T === null) {
      for (; w < m.length; w++)
        (T = d(p, m[w], x)),
          T !== null &&
            ((h = l(T, h, w)), N === null ? (S = T) : (N.sibling = T), (N = T));
      return ne && $t(p, w), S;
    }
    for (T = r(p, T); w < m.length; w++)
      (R = C(T, p, w, m[w], x)),
        R !== null &&
          (e && R.alternate !== null && T.delete(R.key === null ? w : R.key),
          (h = l(R, h, w)),
          N === null ? (S = R) : (N.sibling = R),
          (N = R));
    return (
      e &&
        T.forEach(function (D) {
          return t(p, D);
        }),
      ne && $t(p, w),
      S
    );
  }
  function y(p, h, m, x) {
    var S = Kn(m);
    if (typeof S != "function") throw Error(P(150));
    if (((m = S.call(m)), m == null)) throw Error(P(151));
    for (
      var N = (S = null), T = h, w = (h = 0), R = null, A = m.next();
      T !== null && !A.done;
      w++, A = m.next()
    ) {
      T.index > w ? ((R = T), (T = null)) : (R = T.sibling);
      var D = f(p, T, A.value, x);
      if (D === null) {
        T === null && (T = R);
        break;
      }
      e && T && D.alternate === null && t(p, T),
        (h = l(D, h, w)),
        N === null ? (S = D) : (N.sibling = D),
        (N = D),
        (T = R);
    }
    if (A.done) return n(p, T), ne && $t(p, w), S;
    if (T === null) {
      for (; !A.done; w++, A = m.next())
        (A = d(p, A.value, x)),
          A !== null &&
            ((h = l(A, h, w)), N === null ? (S = A) : (N.sibling = A), (N = A));
      return ne && $t(p, w), S;
    }
    for (T = r(p, T); !A.done; w++, A = m.next())
      (A = C(T, p, w, A.value, x)),
        A !== null &&
          (e && A.alternate !== null && T.delete(A.key === null ? w : A.key),
          (h = l(A, h, w)),
          N === null ? (S = A) : (N.sibling = A),
          (N = A));
    return (
      e &&
        T.forEach(function (b) {
          return t(p, b);
        }),
      ne && $t(p, w),
      S
    );
  }
  function L(p, h, m, x) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === vn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Kr:
          e: {
            for (var S = m.key, N = h; N !== null; ) {
              if (N.key === S) {
                if (((S = m.type), S === vn)) {
                  if (N.tag === 7) {
                    n(p, N.sibling),
                      (h = i(N, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  N.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Nt &&
                    gs(S) === N.type)
                ) {
                  n(p, N.sibling),
                    (h = i(N, m.props)),
                    (h.ref = qn(p, N, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, N);
                break;
              } else t(p, N);
              N = N.sibling;
            }
            m.type === vn
              ? ((h = rn(m.props.children, p.mode, x, m.key)),
                (h.return = p),
                (p = h))
              : ((x = A1(m.type, m.key, m.props, null, p.mode, x)),
                (x.ref = qn(p, h, m)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case Cn:
          e: {
            for (N = m.key; h !== null; ) {
              if (h.key === N)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = r2(m, p.mode, x)), (h.return = p), (p = h);
          }
          return o(p);
        case Nt:
          return (N = m._init), L(p, h, N(m._payload), x);
      }
      if (ir(m)) return v(p, h, m, x);
      if (Kn(m)) return y(p, h, m, x);
      l1(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = n2(m, p.mode, x)), (h.return = p), (p = h)),
        o(p))
      : n(p, h);
  }
  return L;
}
var Vn = V4(!0),
  z4 = V4(!1),
  _r = {},
  pt = Kt(_r),
  Pr = Kt(_r),
  Or = Kt(_r);
function tn(e) {
  if (e === _r) throw Error(P(174));
  return e;
}
function Yl(e, t) {
  switch ((q(Or, t), q(Pr, e), q(pt, _r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : A2(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = A2(t, e));
  }
  te(pt), q(pt, t);
}
function zn() {
  te(pt), te(Pr), te(Or);
}
function b4(e) {
  tn(Or.current);
  var t = tn(pt.current),
    n = A2(t, e.type);
  t !== n && (q(Pr, e), q(pt, n));
}
function Zl(e) {
  Pr.current === e && (te(pt), te(Pr));
}
var ie = Kt(0);
function Y1(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Xi = [];
function Kl() {
  for (var e = 0; e < Xi.length; e++)
    Xi[e]._workInProgressVersionPrimary = null;
  Xi.length = 0;
}
var w1 = At.ReactCurrentDispatcher,
  $i = At.ReactCurrentBatchConfig,
  an = 0,
  le = null,
  fe = null,
  me = null,
  Z1 = !1,
  fr = !1,
  Dr = 0,
  C8 = 0;
function Le() {
  throw Error(P(321));
}
function Ql(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!at(e[n], t[n])) return !1;
  return !0;
}
function Xl(e, t, n, r, i, l) {
  if (
    ((an = l),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (w1.current = e === null || e.memoizedState === null ? x8 : w8),
    (e = n(r, i)),
    fr)
  ) {
    l = 0;
    do {
      if (((fr = !1), (Dr = 0), 25 <= l)) throw Error(P(301));
      (l += 1),
        (me = fe = null),
        (t.updateQueue = null),
        (w1.current = L8),
        (e = n(r, i));
    } while (fr);
  }
  if (
    ((w1.current = K1),
    (t = fe !== null && fe.next !== null),
    (an = 0),
    (me = fe = le = null),
    (Z1 = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function $l() {
  var e = Dr !== 0;
  return (Dr = 0), e;
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (le.memoizedState = me = e) : (me = me.next = e), me;
}
function tt() {
  if (fe === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = me === null ? le.memoizedState : me.next;
  if (t !== null) (me = t), (fe = e);
  else {
    if (e === null) throw Error(P(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      me === null ? (le.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function Hr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ji(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = fe,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var a = (o = null),
      s = null,
      u = l;
    do {
      var c = u.lane;
      if ((an & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = d), (o = r)) : (s = s.next = d),
          (le.lanes |= c),
          (un |= c);
      }
      u = u.next;
    } while (u !== null && u !== l);
    s === null ? (o = r) : (s.next = a),
      at(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (le.lanes |= l), (un |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qi(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    at(l, t.memoizedState) || (je = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function B4() {}
function F4(e, t) {
  var n = le,
    r = tt(),
    i = t(),
    l = !at(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (je = !0)),
    (r = r.queue),
    Jl(W4.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Rr(9, _4.bind(null, n, r, i, t), void 0, null),
      Ce === null)
    )
      throw Error(P(349));
    an & 30 || U4(n, t, i);
  }
  return i;
}
function U4(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _4(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), G4(t) && Y4(e);
}
function W4(e, t, n) {
  return n(function () {
    G4(t) && Y4(e);
  });
}
function G4(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function Y4(e) {
  var t = Et(e, 1);
  t !== null && st(t, e, 1, -1);
}
function ys(e) {
  var t = ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = y8.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function Rr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Z4() {
  return tt().memoizedState;
}
function L1(e, t, n, r) {
  var i = ct();
  (le.flags |= e),
    (i.memoizedState = Rr(1 | t, n, void 0, r === void 0 ? null : r));
}
function fi(e, t, n, r) {
  var i = tt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (fe !== null) {
    var o = fe.memoizedState;
    if (((l = o.destroy), r !== null && Ql(r, o.deps))) {
      i.memoizedState = Rr(t, n, l, r);
      return;
    }
  }
  (le.flags |= e), (i.memoizedState = Rr(1 | t, n, l, r));
}
function xs(e, t) {
  return L1(8390656, 8, e, t);
}
function Jl(e, t) {
  return fi(2048, 8, e, t);
}
function K4(e, t) {
  return fi(4, 2, e, t);
}
function Q4(e, t) {
  return fi(4, 4, e, t);
}
function X4(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $4(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), fi(4, 4, X4.bind(null, t, e), n)
  );
}
function ql() {}
function J4(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ql(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function q4(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ql(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ea(e, t, n) {
  return an & 21
    ? (at(n, t) || ((n = r4()), (le.lanes |= n), (un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function v8(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $i.transition;
  $i.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), ($i.transition = r);
  }
}
function ta() {
  return tt().memoizedState;
}
function g8(e, t, n) {
  var r = _t(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    na(e))
  )
    ra(t, n);
  else if (((n = H4(e, t, n, r)), n !== null)) {
    var i = Pe();
    st(n, e, r, i), ia(n, t, r);
  }
}
function y8(e, t, n) {
  var r = _t(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (na(e)) ra(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = l(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), at(a, o))) {
          var s = t.interleaved;
          s === null
            ? ((i.next = i), Wl(t))
            : ((i.next = s.next), (s.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = H4(e, t, i, r)),
      n !== null && ((i = Pe()), st(n, e, r, i), ia(n, t, r));
  }
}
function na(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function ra(e, t) {
  fr = Z1 = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ia(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pl(e, n);
  }
}
var K1 = {
    readContext: et,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  x8 = {
    readContext: et,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: xs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        L1(4194308, 4, X4.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return L1(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return L1(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = g8.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ys,
    useDebugValue: ql,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = ys(!1),
        t = e[0];
      return (e = v8.bind(null, e[1])), (ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        i = ct();
      if (ne) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(P(349));
        an & 30 || U4(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        xs(W4.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Rr(9, _4.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = Ce.identifierPrefix;
      if (ne) {
        var n = xt,
          r = yt;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Dr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = C8++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  w8 = {
    readContext: et,
    useCallback: J4,
    useContext: et,
    useEffect: Jl,
    useImperativeHandle: $4,
    useInsertionEffect: K4,
    useLayoutEffect: Q4,
    useMemo: q4,
    useReducer: Ji,
    useRef: Z4,
    useState: function () {
      return Ji(Hr);
    },
    useDebugValue: ql,
    useDeferredValue: function (e) {
      var t = tt();
      return ea(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ji(Hr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: B4,
    useSyncExternalStore: F4,
    useId: ta,
    unstable_isNewReconciler: !1,
  },
  L8 = {
    readContext: et,
    useCallback: J4,
    useContext: et,
    useEffect: Jl,
    useImperativeHandle: $4,
    useInsertionEffect: K4,
    useLayoutEffect: Q4,
    useMemo: q4,
    useReducer: qi,
    useRef: Z4,
    useState: function () {
      return qi(Hr);
    },
    useDebugValue: ql,
    useDeferredValue: function (e) {
      var t = tt();
      return fe === null ? (t.memoizedState = e) : ea(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = qi(Hr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: B4,
    useSyncExternalStore: F4,
    useId: ta,
    unstable_isNewReconciler: !1,
  };
function bn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += X5(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function e2(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Q2(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var S8 = typeof WeakMap == "function" ? WeakMap : Map;
function la(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      X1 || ((X1 = !0), (ll = r)), Q2(e, t);
    }),
    n
  );
}
function oa(e, t, n) {
  (n = wt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Q2(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Q2(e, t),
          typeof r != "function" &&
            (Ut === null ? (Ut = new Set([this])) : Ut.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ws(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new S8();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = V8.bind(null, e, t, n)), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ss(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var E8 = At.ReactCurrentOwner,
  je = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? z4(t, null, n, r) : Vn(t, e.child, n, r);
}
function Es(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    Dn(t, i),
    (r = Xl(e, t, n, r, l, i)),
    (n = $l()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (ne && n && zl(t), (t.flags |= 1), Ne(e, t, r, i), t.child)
  );
}
function Ts(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !so(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), sa(e, t, l, r, i))
      : ((e = A1(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ar), n(o, r) && e.ref === t.ref)
    )
      return Tt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Wt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sa(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Ar(l, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (je = !0);
      else return (t.lanes = e.lanes), Tt(e, t, i);
  }
  return X2(e, t, n, r, i);
}
function aa(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(kn, Be),
        (Be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(kn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        q(kn, Be),
        (Be |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(kn, Be),
      (Be |= r);
  return Ne(e, t, i, n), t.child;
}
function ua(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function X2(e, t, n, r, i) {
  var l = Ve(n) ? on : Te.current;
  return (
    (l = jn(t, l)),
    Dn(t, i),
    (n = Xl(e, t, n, r, l, i)),
    (r = $l()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Tt(e, t, i))
      : (ne && r && zl(t), (t.flags |= 1), Ne(e, t, n, i), t.child)
  );
}
function As(e, t, n, r, i) {
  if (Ve(n)) {
    var l = !0;
    B1(t);
  } else l = !1;
  if ((Dn(t, i), t.stateNode === null))
    S1(e, t), I4(t, n, r), K2(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var s = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = et(u))
      : ((u = Ve(n) ? on : Te.current), (u = jn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && vs(t, o, r, u)),
      (Mt = !1);
    var f = t.memoizedState;
    (o.state = f),
      G1(t, r, o, i),
      (s = t.memoizedState),
      a !== r || f !== s || Ie.current || Mt
        ? (typeof c == "function" && (Z2(t, n, c, r), (s = t.memoizedState)),
          (a = Mt || Cs(t, n, a, r, f, s, u))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      R4(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : rt(t.type, a)),
      (o.props = u),
      (d = t.pendingProps),
      (f = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = et(s))
        : ((s = Ve(n) ? on : Te.current), (s = jn(t, s)));
    var C = n.getDerivedStateFromProps;
    (c =
      typeof C == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== s) && vs(t, o, r, s)),
      (Mt = !1),
      (f = t.memoizedState),
      (o.state = f),
      G1(t, r, o, i);
    var v = t.memoizedState;
    a !== d || f !== v || Ie.current || Mt
      ? (typeof C == "function" && (Z2(t, n, C, r), (v = t.memoizedState)),
        (u = Mt || Cs(t, n, u, r, f, v, s) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return $2(e, t, n, r, l, i);
}
function $2(e, t, n, r, i, l) {
  ua(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && ds(t, n, !1), Tt(e, t, l);
  (r = t.stateNode), (E8.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Vn(t, e.child, null, l)), (t.child = Vn(t, null, a, l)))
      : Ne(e, t, a, l),
    (t.memoizedState = r.state),
    i && ds(t, n, !0),
    t.child
  );
}
function ca(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cs(e, t.context, !1),
    Yl(e, t.containerInfo);
}
function ks(e, t, n, r, i) {
  return In(), Bl(i), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var J2 = { dehydrated: null, treeContext: null, retryLane: 0 };
function q2(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function da(e, t, n) {
  var r = t.pendingProps,
    i = ie.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    q(ie, i & 1),
    e === null)
  )
    return (
      G2(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = mi(o, r, 0, null)),
              (e = rn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = q2(n)),
              (t.memoizedState = J2),
              e)
            : eo(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return T8(e, t, o, r, a, i, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Wt(i, s)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (l = Wt(a, l)) : ((l = rn(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? q2(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = J2),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Wt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function eo(e, t) {
  return (
    (t = mi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function o1(e, t, n, r) {
  return (
    r !== null && Bl(r),
    Vn(t, e.child, null, n),
    (e = eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function T8(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = e2(Error(P(422)))), o1(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = mi({ mode: "visible", children: r.children }, i, 0, null)),
        (l = rn(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Vn(t, e.child, null, o),
        (t.child.memoizedState = q2(o)),
        (t.memoizedState = J2),
        l);
  if (!(t.mode & 1)) return o1(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(P(419))), (r = e2(l, r, void 0)), o1(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), je || a)) {
    if (((r = Ce), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), Et(e, i), st(r, e, i, -1));
    }
    return oo(), (r = e2(Error(P(421)))), o1(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = z8.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ue = Bt(i.nextSibling)),
      (Ge = t),
      (ne = !0),
      (lt = null),
      e !== null &&
        ((Xe[$e++] = yt),
        (Xe[$e++] = xt),
        (Xe[$e++] = sn),
        (yt = e.id),
        (xt = e.overflow),
        (sn = t)),
      (t = eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ns(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Y2(e.return, t, n);
}
function t2(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function fa(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((Ne(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ns(e, n, t);
        else if (e.tag === 19) Ns(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Y1(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          t2(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Y1(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        t2(t, !0, n, null, l);
        break;
      case "together":
        t2(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function S1(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function A8(e, t, n) {
  switch (t.tag) {
    case 3:
      ca(t), In();
      break;
    case 5:
      b4(t);
      break;
    case 1:
      Ve(t.type) && B1(t);
      break;
    case 4:
      Yl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      q(_1, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? da(e, t, n)
          : (q(ie, ie.current & 1),
            (e = Tt(e, t, n)),
            e !== null ? e.sibling : null);
      q(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), aa(e, t, n);
  }
  return Tt(e, t, n);
}
var pa, el, ha, ma;
pa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
el = function () {};
ha = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), tn(pt.current);
    var l = null;
    switch (n) {
      case "input":
        (i = L2(e, i)), (r = L2(e, r)), (l = []);
        break;
      case "select":
        (i = oe({}, i, { value: void 0 })),
          (r = oe({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = T2(e, i)), (r = T2(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = z1);
    }
    k2(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (yr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = i?.[u]),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                a[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (l = l || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (yr.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ee("scroll", e),
                  l || a === s || (l = []))
                : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ma = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function er(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function k8(e, t, n) {
  var r = t.pendingProps;
  switch ((bl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return Ve(t.type) && b1(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        zn(),
        te(Ie),
        te(Te),
        Kl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (i1(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (al(lt), (lt = null)))),
        el(e, t),
        Se(t),
        null
      );
    case 5:
      Zl(t);
      var i = tn(Or.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ha(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Se(t), null;
        }
        if (((e = tn(pt.current)), i1(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[dt] = t), (r[Mr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < or.length; i++) ee(or[i], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Vo(r, l), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              bo(r, l), ee("invalid", r);
          }
          k2(n, l), (i = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var a = l[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      r1(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      r1(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : yr.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), zo(r, l, !0);
              break;
            case "textarea":
              Qr(r), Bo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = z1);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = U3(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[Mr] = r),
            pa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = N2(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < or.length; i++) ee(or[i], e);
                i = r;
                break;
              case "source":
                ee("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (i = r);
                break;
              case "details":
                ee("toggle", e), (i = r);
                break;
              case "input":
                Vo(e, r), (i = L2(e, r)), ee("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = oe({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                bo(e, r), (i = T2(e, r)), ee("invalid", e);
                break;
              default:
                i = r;
            }
            k2(n, i), (a = i);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var s = a[l];
                l === "style"
                  ? G3(e, s)
                  : l === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && _3(e, s))
                  : l === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && xr(e, s)
                    : typeof s == "number" && xr(e, "" + s)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (yr.hasOwnProperty(l)
                      ? s != null && l === "onScroll" && ee("scroll", e)
                      : s != null && El(e, l, s, o));
              }
            switch (n) {
              case "input":
                Qr(e), zo(e, r, !1);
                break;
              case "textarea":
                Qr(e), Bo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Nn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = z1);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) ma(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = tn(Or.current)), tn(pt.current), i1(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (l = r.nodeValue !== n) && ((e = Ge), e !== null))
          )
            switch (e.tag) {
              case 3:
                r1(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  r1(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        (te(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Ue !== null && t.mode & 1 && !(t.flags & 128))
          D4(), In(), (t.flags |= 98560), (l = !1);
        else if (((l = i1(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(P(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(P(317));
            l[dt] = t;
          } else
            In(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (l = !1);
        } else lt !== null && (al(lt), (lt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? he === 0 && (he = 3) : oo())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        zn(), el(e, t), e === null && kr(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return _l(t.type._context), Se(t), null;
    case 17:
      return Ve(t.type) && b1(), Se(t), null;
    case 19:
      if ((te(ie), (l = t.memoizedState), l === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) er(l, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Y1(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    er(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ue() > Bn &&
            ((t.flags |= 128), (r = !0), er(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Y1(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              er(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !ne)
            )
              return Se(t), null;
          } else
            2 * ue() - l.renderingStartTime > Bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), er(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ue()),
          (t.sibling = null),
          (n = ie.current),
          q(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        lo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function N8(e, t) {
  switch ((bl(t), t.tag)) {
    case 1:
      return (
        Ve(t.type) && b1(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        zn(),
        te(Ie),
        te(Te),
        Kl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Zl(t), null;
    case 13:
      if (
        (te(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        In();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(ie), null;
    case 4:
      return zn(), null;
    case 10:
      return _l(t.type._context), null;
    case 22:
    case 23:
      return lo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var s1 = !1,
  Ee = !1,
  M8 = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function tl(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Ms = !1;
function P8(e, t) {
  if (((z2 = j1), (e = y4()), Vl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var C;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== l || (r !== 0 && d.nodeType !== 3) || (s = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (C = d.firstChild) !== null;

            )
              (f = d), (d = C);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = o),
                f === l && ++c === r && (s = o),
                (C = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = C;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (b2 = { focusedElem: e, selectionRange: n }, j1 = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    L = v.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : rt(t.type, y),
                      L
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (x) {
          se(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (v = Ms), (Ms = !1), v;
}
function pr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && tl(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function pi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function nl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ca(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ca(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Mr], delete t[U2], delete t[f8], delete t[p8])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ps(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || va(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = z1));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (rl(e, t, n), e = e.sibling; e !== null; ) rl(e, t, n), (e = e.sibling);
}
function il(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (il(e, t, n), e = e.sibling; e !== null; ) il(e, t, n), (e = e.sibling);
}
var ye = null,
  it = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) ga(e, t, n), (n = n.sibling);
}
function ga(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(li, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || An(n, t);
    case 6:
      var r = ye,
        i = it;
      (ye = null),
        kt(e, t, n),
        (ye = r),
        (it = i),
        ye !== null &&
          (it
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (it
          ? ((e = ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ki(e.parentNode, n)
              : e.nodeType === 1 && Ki(e, n),
            Er(e))
          : Ki(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (i = it),
        (ye = n.stateNode.containerInfo),
        (it = !0),
        kt(e, t, n),
        (ye = r),
        (it = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && tl(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), kt(e, t, n), (Ee = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function Os(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new M8()),
      t.forEach(function (r) {
        var i = b8.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ye = a.stateNode), (it = !1);
              break e;
            case 3:
              (ye = a.stateNode.containerInfo), (it = !0);
              break e;
            case 4:
              (ye = a.stateNode.containerInfo), (it = !0);
              break e;
          }
          a = a.return;
        }
        if (ye === null) throw Error(P(160));
        ga(l, o, i), (ye = null), (it = !1);
        var s = i.alternate;
        s !== null && (s.return = null), (i.return = null);
      } catch (u) {
        se(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ya(t, e), (t = t.sibling);
}
function ya(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((nt(t, e), ut(e), r & 4)) {
        try {
          pr(3, e, e.return), pi(3, e);
        } catch (y) {
          se(e, e.return, y);
        }
        try {
          pr(5, e, e.return);
        } catch (y) {
          se(e, e.return, y);
        }
      }
      break;
    case 1:
      nt(t, e), ut(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (nt(t, e),
        ut(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          xr(i, "");
        } catch (y) {
          se(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && B3(i, l),
              N2(a, o);
            var u = N2(a, l);
            for (o = 0; o < s.length; o += 2) {
              var c = s[o],
                d = s[o + 1];
              c === "style"
                ? G3(i, d)
                : c === "dangerouslySetInnerHTML"
                ? _3(i, d)
                : c === "children"
                ? xr(i, d)
                : El(i, c, d, u);
            }
            switch (a) {
              case "input":
                S2(i, l);
                break;
              case "textarea":
                F3(i, l);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var C = l.value;
                C != null
                  ? Nn(i, !!l.multiple, C, !1)
                  : f !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Nn(i, !!l.multiple, l.defaultValue, !0)
                      : Nn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[Mr] = l;
          } catch (y) {
            se(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((nt(t, e), ut(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (y) {
          se(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (nt(t, e), ut(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Er(t.containerInfo);
        } catch (y) {
          se(e, e.return, y);
        }
      break;
    case 4:
      nt(t, e), ut(e);
      break;
    case 13:
      nt(t, e),
        ut(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ro = ue())),
        r & 4 && Os(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || c), nt(t, e), (Ee = u)) : nt(t, e),
        ut(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (C = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, f, f.return);
                  break;
                case 1:
                  An(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      se(r, n, y);
                    }
                  }
                  break;
                case 5:
                  An(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Hs(d);
                    continue;
                  }
              }
              C !== null ? ((C.return = f), (V = C)) : Hs(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = d.stateNode),
                      (s = d.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = W3("display", o)));
              } catch (y) {
                se(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                se(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      nt(t, e), ut(e), r & 4 && Os(e);
      break;
    case 21:
      break;
    default:
      nt(t, e), ut(e);
  }
}
function ut(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (va(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (xr(i, ""), (r.flags &= -33));
          var l = Ps(e);
          il(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Ps(e);
          rl(e, a, o);
          break;
        default:
          throw Error(P(161));
      }
    } catch (s) {
      se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function O8(e, t, n) {
  (V = e), xa(e);
}
function xa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || s1;
      if (!o) {
        var a = i.alternate,
          s = (a !== null && a.memoizedState !== null) || Ee;
        a = s1;
        var u = Ee;
        if (((s1 = o), (Ee = s) && !u))
          for (V = i; V !== null; )
            (o = V),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Rs(i)
                : s !== null
                ? ((s.return = o), (V = s))
                : Rs(i);
        for (; l !== null; ) (V = l), xa(l), (l = l.sibling);
        (V = i), (s1 = a), (Ee = u);
      }
      Ds(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (V = l)) : Ds(e);
  }
}
function Ds(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || pi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && ms(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ms(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Er(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Ee || (t.flags & 512 && nl(t));
      } catch (f) {
        se(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Hs(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Rs(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pi(4, t);
          } catch (s) {
            se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              se(t, i, s);
            }
          }
          var l = t.return;
          try {
            nl(t);
          } catch (s) {
            se(t, l, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            nl(t);
          } catch (s) {
            se(t, o, s);
          }
      }
    } catch (s) {
      se(t, t.return, s);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var D8 = Math.ceil,
  Q1 = At.ReactCurrentDispatcher,
  to = At.ReactCurrentOwner,
  qe = At.ReactCurrentBatchConfig,
  G = 0,
  Ce = null,
  ce = null,
  xe = 0,
  Be = 0,
  kn = Kt(0),
  he = 0,
  jr = null,
  un = 0,
  hi = 0,
  no = 0,
  hr = null,
  Re = null,
  ro = 0,
  Bn = 1 / 0,
  vt = null,
  X1 = !1,
  ll = null,
  Ut = null,
  a1 = !1,
  Ht = null,
  $1 = 0,
  mr = 0,
  ol = null,
  E1 = -1,
  T1 = 0;
function Pe() {
  return G & 6 ? ue() : E1 !== -1 ? E1 : (E1 = ue());
}
function _t(e) {
  return e.mode & 1
    ? G & 2 && xe !== 0
      ? xe & -xe
      : m8.transition !== null
      ? (T1 === 0 && (T1 = r4()), T1)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : c4(e.type))),
        e)
    : 1;
}
function st(e, t, n, r) {
  if (50 < mr) throw ((mr = 0), (ol = null), Error(P(185)));
  Br(e, n, r),
    (!(G & 2) || e !== Ce) &&
      (e === Ce && (!(G & 2) && (hi |= n), he === 4 && Ot(e, xe)),
      ze(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Bn = ue() + 500), ci && Qt()));
}
function ze(e, t) {
  var n = e.callbackNode;
  m0(e, t);
  var r = R1(e, e === Ce ? xe : 0);
  if (r === 0)
    n !== null && _o(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && _o(n), t === 1))
      e.tag === 0 ? h8(js.bind(null, e)) : M4(js.bind(null, e)),
        c8(function () {
          !(G & 6) && Qt();
        }),
        (n = null);
    else {
      switch (i4(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = t4;
          break;
        case 16:
          n = H1;
          break;
        case 536870912:
          n = n4;
          break;
        default:
          n = H1;
      }
      n = Na(n, wa.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wa(e, t) {
  if (((E1 = -1), (T1 = 0), G & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = R1(e, e === Ce ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = J1(e, r);
  else {
    t = r;
    var i = G;
    G |= 2;
    var l = Sa();
    (Ce !== e || xe !== t) && ((vt = null), (Bn = ue() + 500), nn(e, t));
    do
      try {
        j8();
        break;
      } catch (a) {
        La(e, a);
      }
    while (!0);
    Ul(),
      (Q1.current = l),
      (G = i),
      ce !== null ? (t = 0) : ((Ce = null), (xe = 0), (t = he));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = H2(e)), i !== 0 && ((r = i), (t = sl(e, i)))), t === 1)
    )
      throw ((n = jr), nn(e, 0), Ot(e, r), ze(e, ue()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !H8(i) &&
          ((t = J1(e, r)),
          t === 2 && ((l = H2(e)), l !== 0 && ((r = l), (t = sl(e, l)))),
          t === 1))
      )
        throw ((n = jr), nn(e, 0), Ot(e, r), ze(e, ue()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Jt(e, Re, vt);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = ro + 500 - ue()), 10 < t))
          ) {
            if (R1(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Pe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = F2(Jt.bind(null, e, Re, vt), t);
            break;
          }
          Jt(e, Re, vt);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - ot(r);
            (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
          }
          if (
            ((r = i),
            (r = ue() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * D8(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = F2(Jt.bind(null, e, Re, vt), r);
            break;
          }
          Jt(e, Re, vt);
          break;
        case 5:
          Jt(e, Re, vt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return ze(e, ue()), e.callbackNode === n ? wa.bind(null, e) : null;
}
function sl(e, t) {
  var n = hr;
  return (
    e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
    (e = J1(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && al(t)),
    e
  );
}
function al(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e);
}
function H8(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!at(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~no,
      t &= ~hi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function js(e) {
  if (G & 6) throw Error(P(327));
  Hn();
  var t = R1(e, 0);
  if (!(t & 1)) return ze(e, ue()), null;
  var n = J1(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = H2(e);
    r !== 0 && ((t = r), (n = sl(e, r)));
  }
  if (n === 1) throw ((n = jr), nn(e, 0), Ot(e, t), ze(e, ue()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, Re, vt),
    ze(e, ue()),
    null
  );
}
function io(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Bn = ue() + 500), ci && Qt());
  }
}
function cn(e) {
  Ht !== null && Ht.tag === 0 && !(G & 6) && Hn();
  var t = G;
  G |= 1;
  var n = qe.transition,
    r = K;
  try {
    if (((qe.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (qe.transition = n), (G = t), !(G & 6) && Qt();
  }
}
function lo() {
  (Be = kn.current), te(kn);
}
function nn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), u8(n)), ce !== null))
    for (n = ce.return; n !== null; ) {
      var r = n;
      switch ((bl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && b1();
          break;
        case 3:
          zn(), te(Ie), te(Te), Kl();
          break;
        case 5:
          Zl(r);
          break;
        case 4:
          zn();
          break;
        case 13:
          te(ie);
          break;
        case 19:
          te(ie);
          break;
        case 10:
          _l(r.type._context);
          break;
        case 22:
        case 23:
          lo();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ce = e = Wt(e.current, null)),
    (xe = Be = t),
    (he = 0),
    (jr = null),
    (no = hi = un = 0),
    (Re = hr = null),
    en !== null)
  ) {
    for (t = 0; t < en.length; t++)
      if (((n = en[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = i), (r.next = o);
        }
        n.pending = r;
      }
    en = null;
  }
  return e;
}
function La(e, t) {
  do {
    var n = ce;
    try {
      if ((Ul(), (w1.current = K1), Z1)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Z1 = !1;
      }
      if (
        ((an = 0),
        (me = fe = le = null),
        (fr = !1),
        (Dr = 0),
        (to.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (jr = t), (ce = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          a = n,
          s = t;
        if (
          ((t = xe),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var C = Ls(o);
          if (C !== null) {
            (C.flags &= -257),
              Ss(C, o, a, l, t),
              C.mode & 1 && ws(l, u, t),
              (t = C),
              (s = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ws(l, u, t), oo();
              break e;
            }
            s = Error(P(426));
          }
        } else if (ne && a.mode & 1) {
          var L = Ls(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Ss(L, o, a, l, t),
              Bl(bn(s, a));
            break e;
          }
        }
        (l = s = bn(s, a)),
          he !== 4 && (he = 2),
          hr === null ? (hr = [l]) : hr.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = la(l, s, t);
              hs(l, p);
              break e;
            case 1:
              a = s;
              var h = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Ut === null || !Ut.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var x = oa(l, a, t);
                hs(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Ta(n);
    } catch (S) {
      (t = S), ce === n && n !== null && (ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sa() {
  var e = Q1.current;
  return (Q1.current = K1), e === null ? K1 : e;
}
function oo() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    Ce === null || (!(un & 268435455) && !(hi & 268435455)) || Ot(Ce, xe);
}
function J1(e, t) {
  var n = G;
  G |= 2;
  var r = Sa();
  (Ce !== e || xe !== t) && ((vt = null), nn(e, t));
  do
    try {
      R8();
      break;
    } catch (i) {
      La(e, i);
    }
  while (!0);
  if ((Ul(), (G = n), (Q1.current = r), ce !== null)) throw Error(P(261));
  return (Ce = null), (xe = 0), he;
}
function R8() {
  for (; ce !== null; ) Ea(ce);
}
function j8() {
  for (; ce !== null && !o0(); ) Ea(ce);
}
function Ea(e) {
  var t = ka(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ta(e) : (ce = t),
    (to.current = null);
}
function Ta(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = N8(n, t)), n !== null)) {
        (n.flags &= 32767), (ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (ce = null);
        return;
      }
    } else if (((n = k8(n, t, Be)), n !== null)) {
      ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Jt(e, t, n) {
  var r = K,
    i = qe.transition;
  try {
    (qe.transition = null), (K = 1), I8(e, t, n, r);
  } finally {
    (qe.transition = i), (K = r);
  }
  return null;
}
function I8(e, t, n, r) {
  do Hn();
  while (Ht !== null);
  if (G & 6) throw Error(P(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (C0(e, l),
    e === Ce && ((ce = Ce = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      a1 ||
      ((a1 = !0),
      Na(H1, function () {
        return Hn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = qe.transition), (qe.transition = null);
    var o = K;
    K = 1;
    var a = G;
    (G |= 4),
      (to.current = null),
      P8(e, n),
      ya(n, e),
      n8(b2),
      (j1 = !!z2),
      (b2 = z2 = null),
      (e.current = n),
      O8(n),
      s0(),
      (G = a),
      (K = o),
      (qe.transition = l);
  } else e.current = n;
  if (
    (a1 && ((a1 = !1), (Ht = e), ($1 = i)),
    (l = e.pendingLanes),
    l === 0 && (Ut = null),
    c0(n.stateNode),
    ze(e, ue()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (X1) throw ((X1 = !1), (e = ll), (ll = null), e);
  return (
    $1 & 1 && e.tag !== 0 && Hn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ol ? mr++ : ((mr = 0), (ol = e))) : (mr = 0),
    Qt(),
    null
  );
}
function Hn() {
  if (Ht !== null) {
    var e = i4($1),
      t = qe.transition,
      n = K;
    try {
      if (((qe.transition = null), (K = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), ($1 = 0), G & 6)) throw Error(P(331));
        var i = G;
        for (G |= 4, V = e.current; V !== null; ) {
          var l = V,
            o = l.child;
          if (V.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pr(8, c, l);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling,
                        C = c.return;
                      if ((Ca(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = C), (V = f);
                        break;
                      }
                      V = C;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var L = y.sibling;
                    (y.sibling = null), (y = L);
                  } while (y !== null);
                }
              }
              V = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (V = o);
          else
            e: for (; V !== null; ) {
              if (((l = V), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pr(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (V = p);
                break e;
              }
              V = l.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          o = V;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (V = m);
          else
            e: for (o = h; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(9, a);
                  }
                } catch (S) {
                  se(a, a.return, S);
                }
              if (a === o) {
                V = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (V = x);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((G = i), Qt(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(li, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (qe.transition = t);
    }
  }
  return !1;
}
function Is(e, t, n) {
  (t = bn(n, t)),
    (t = la(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = Pe()),
    e !== null && (Br(e, 1, t), ze(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Is(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Is(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ut === null || !Ut.has(r)))
        ) {
          (e = bn(n, e)),
            (e = oa(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = Pe()),
            t !== null && (Br(t, 1, e), ze(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function V8(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (xe & n) === n &&
      (he === 4 || (he === 3 && (xe & 130023424) === xe && 500 > ue() - ro)
        ? nn(e, 0)
        : (no |= n)),
    ze(e, t);
}
function Aa(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Jr), (Jr <<= 1), !(Jr & 130023424) && (Jr = 4194304))
      : (t = 1));
  var n = Pe();
  (e = Et(e, t)), e !== null && (Br(e, t, n), ze(e, n));
}
function z8(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Aa(e, n);
}
function b8(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), Aa(e, n);
}
var ka;
ka = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (je = !1), A8(e, t, n);
      je = !!(e.flags & 131072);
    }
  else (je = !1), ne && t.flags & 1048576 && P4(t, U1, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      S1(e, t), (e = t.pendingProps);
      var i = jn(t, Te.current);
      Dn(t, n), (i = Xl(null, t, r, e, i, n));
      var l = $l();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ve(r) ? ((l = !0), B1(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gl(t),
            (i.updater = di),
            (t.stateNode = i),
            (i._reactInternals = t),
            K2(t, r, e, n),
            (t = $2(null, t, r, !0, l, n)))
          : ((t.tag = 0), ne && l && zl(t), Ne(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (S1(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = F8(r)),
          (e = rt(r, e)),
          i)
        ) {
          case 0:
            t = X2(null, t, r, e, n);
            break e;
          case 1:
            t = As(null, t, r, e, n);
            break e;
          case 11:
            t = Es(null, t, r, e, n);
            break e;
          case 14:
            t = Ts(null, t, r, rt(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        X2(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        As(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ca(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          R4(e, t),
          G1(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = bn(Error(P(423)), t)), (t = ks(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = bn(Error(P(424)), t)), (t = ks(e, t, r, n, i));
            break e;
          } else
            for (
              Ue = Bt(t.stateNode.containerInfo.firstChild),
                Ge = t,
                ne = !0,
                lt = null,
                n = z4(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((In(), r === i)) {
            t = Tt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        b4(t),
        e === null && G2(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        B2(r, i) ? (o = null) : l !== null && B2(r, l) && (t.flags |= 32),
        ua(e, t),
        Ne(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && G2(t), null;
    case 13:
      return da(e, t, n);
    case 4:
      return (
        Yl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        Es(e, t, r, i, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          q(_1, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (at(l.value, o)) {
            if (l.children === i.children && !Ie.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                o = l.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = wt(-1, n & -n)), (s.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      Y2(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(P(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Y2(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        Ne(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Dn(t, n),
        (i = et(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = rt(r, t.pendingProps)),
        (i = rt(r.type, i)),
        Ts(e, t, r, i, n)
      );
    case 15:
      return sa(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : rt(r, i)),
        S1(e, t),
        (t.tag = 1),
        Ve(r) ? ((e = !0), B1(t)) : (e = !1),
        Dn(t, n),
        I4(t, r, i),
        K2(t, r, i, n),
        $2(null, t, r, !0, e, n)
      );
    case 19:
      return fa(e, t, n);
    case 22:
      return aa(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function Na(e, t) {
  return e4(e, t);
}
function B8(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new B8(e, t, n, r);
}
function so(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function F8(e) {
  if (typeof e == "function") return so(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Al)) return 11;
    if (e === kl) return 14;
  }
  return 2;
}
function Wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function A1(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) so(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case vn:
        return rn(n.children, i, l, t);
      case Tl:
        (o = 8), (i |= 8);
        break;
      case g2:
        return (
          (e = Je(12, n, t, i | 2)), (e.elementType = g2), (e.lanes = l), e
        );
      case y2:
        return (e = Je(13, n, t, i)), (e.elementType = y2), (e.lanes = l), e;
      case x2:
        return (e = Je(19, n, t, i)), (e.elementType = x2), (e.lanes = l), e;
      case V3:
        return mi(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case j3:
              o = 10;
              break e;
            case I3:
              o = 9;
              break e;
            case Al:
              o = 11;
              break e;
            case kl:
              o = 14;
              break e;
            case Nt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function rn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function mi(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = V3),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function n2(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function r2(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function U8(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Vi(0)),
    (this.expirationTimes = Vi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Vi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ao(e, t, n, r, i, l, o, a, s) {
  return (
    (e = new U8(e, t, n, a, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gl(l),
    e
  );
}
function _8(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ma(e) {
  if (!e) return Yt;
  e = e._reactInternals;
  e: {
    if (hn(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ve(n)) return N4(e, n, t);
  }
  return t;
}
function Pa(e, t, n, r, i, l, o, a, s) {
  return (
    (e = ao(n, r, !0, e, i, l, o, a, s)),
    (e.context = Ma(null)),
    (n = e.current),
    (r = Pe()),
    (i = _t(n)),
    (l = wt(r, i)),
    (l.callback = t ?? null),
    Ft(n, l, i),
    (e.current.lanes = i),
    Br(e, i, r),
    ze(e, r),
    e
  );
}
function Ci(e, t, n, r) {
  var i = t.current,
    l = Pe(),
    o = _t(i);
  return (
    (n = Ma(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wt(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(i, t, o)),
    e !== null && (st(e, i, o, l), x1(e, i, o)),
    o
  );
}
function q1(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function uo(e, t) {
  Vs(e, t), (e = e.alternate) && Vs(e, t);
}
function W8() {
  return null;
}
var Oa =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function co(e) {
  this._internalRoot = e;
}
vi.prototype.render = co.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  Ci(e, t, null, null);
};
vi.prototype.unmount = co.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function () {
      Ci(null, e, null, null);
    }),
      (t[St] = null);
  }
};
function vi(e) {
  this._internalRoot = e;
}
vi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = s4();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
    Pt.splice(n, 0, e), n === 0 && u4(e);
  }
};
function fo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zs() {}
function G8(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = q1(o);
        l.call(u);
      };
    }
    var o = Pa(t, r, e, 0, null, !1, !1, "", zs);
    return (
      (e._reactRootContainer = o),
      (e[St] = o.current),
      kr(e.nodeType === 8 ? e.parentNode : e),
      cn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = q1(s);
      a.call(u);
    };
  }
  var s = ao(e, 0, !1, null, null, !1, !1, "", zs);
  return (
    (e._reactRootContainer = s),
    (e[St] = s.current),
    kr(e.nodeType === 8 ? e.parentNode : e),
    cn(function () {
      Ci(t, s, n, r);
    }),
    s
  );
}
function yi(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var s = q1(o);
        a.call(s);
      };
    }
    Ci(t, o, e, i);
  } else o = G8(n, t, e, i, r);
  return q1(o);
}
l4 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lr(t.pendingLanes);
        n !== 0 &&
          (Pl(t, n | 1), ze(t, ue()), !(G & 6) && ((Bn = ue() + 500), Qt()));
      }
      break;
    case 13:
      cn(function () {
        var r = Et(e, 1);
        if (r !== null) {
          var i = Pe();
          st(r, e, 1, i);
        }
      }),
        uo(e, 1);
  }
};
Ol = function (e) {
  if (e.tag === 13) {
    var t = Et(e, 134217728);
    if (t !== null) {
      var n = Pe();
      st(t, e, 134217728, n);
    }
    uo(e, 134217728);
  }
};
o4 = function (e) {
  if (e.tag === 13) {
    var t = _t(e),
      n = Et(e, t);
    if (n !== null) {
      var r = Pe();
      st(n, e, t, r);
    }
    uo(e, t);
  }
};
s4 = function () {
  return K;
};
a4 = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
P2 = function (e, t, n) {
  switch (t) {
    case "input":
      if ((S2(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ui(r);
            if (!i) throw Error(P(90));
            b3(r), S2(r, i);
          }
        }
      }
      break;
    case "textarea":
      F3(e, n);
      break;
    case "select":
      (t = n.value), t != null && Nn(e, !!n.multiple, t, !1);
  }
};
K3 = io;
Q3 = cn;
var Y8 = { usingClientEntryPoint: !1, Events: [Ur, wn, ui, Y3, Z3, io] },
  tr = {
    findFiberByHostInstance: qt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Z8 = {
    bundleType: tr.bundleType,
    version: tr.version,
    rendererPackageName: tr.rendererPackageName,
    rendererConfig: tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: At.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = J3(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: tr.findFiberByHostInstance || W8,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var u1 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!u1.isDisabled && u1.supportsFiber)
    try {
      (li = u1.inject(Z8)), (ft = u1);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y8;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fo(t)) throw Error(P(200));
  return _8(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!fo(e)) throw Error(P(299));
  var n = !1,
    r = "",
    i = Oa;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ao(e, 1, !1, null, null, n, !1, r, i)),
    (e[St] = t.current),
    kr(e.nodeType === 8 ? e.parentNode : e),
    new co(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = J3(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return cn(e);
};
Ze.hydrate = function (e, t, n) {
  if (!gi(t)) throw Error(P(200));
  return yi(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!fo(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    o = Oa;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Pa(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[St] = t.current),
    kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new vi(t);
};
Ze.render = function (e, t, n) {
  if (!gi(t)) throw Error(P(200));
  return yi(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!gi(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (cn(function () {
        yi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[St] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = io;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gi(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return yi(e, t, n, !1, r);
};
Ze.version = "18.2.0-next-9e3b772b8-20220608";
function Da() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Da);
    } catch (e) {
      console.error(e);
    }
}
Da(), (P3.exports = Ze);
var K8 = P3.exports,
  bs = K8;
(C2.createRoot = bs.createRoot), (C2.hydrateRoot = bs.hydrateRoot);
const Q8 = E.createContext(null),
  i2 = { didCatch: !1, error: null };
class X8 extends E.Component {
  constructor(t) {
    super(t),
      (this.resetErrorBoundary = this.resetErrorBoundary.bind(this)),
      (this.state = i2);
  }
  static getDerivedStateFromError(t) {
    return { didCatch: !0, error: t };
  }
  resetErrorBoundary() {
    const { error: t } = this.state;
    if (t !== null) {
      for (var n, r, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
        l[o] = arguments[o];
      (n = (r = this.props).onReset) === null ||
        n === void 0 ||
        n.call(r, { args: l, reason: "imperative-api" }),
        this.setState(i2);
    }
  }
  componentDidCatch(t, n) {
    var r, i;
    (r = (i = this.props).onError) === null || r === void 0 || r.call(i, t, n);
  }
  componentDidUpdate(t, n) {
    const { didCatch: r } = this.state,
      { resetKeys: i } = this.props;
    if (r && n.error !== null && $8(t.resetKeys, i)) {
      var l, o;
      (l = (o = this.props).onReset) === null ||
        l === void 0 ||
        l.call(o, { next: i, prev: t.resetKeys, reason: "keys" }),
        this.setState(i2);
    }
  }
  render() {
    const {
        children: t,
        fallbackRender: n,
        FallbackComponent: r,
        fallback: i,
      } = this.props,
      { didCatch: l, error: o } = this.state;
    let a = t;
    if (l) {
      const s = { error: o, resetErrorBoundary: this.resetErrorBoundary };
      if (typeof n == "function") a = n(s);
      else if (r) a = E.createElement(r, s);
      else if (i === null || E.isValidElement(i)) a = i;
      else throw o;
    }
    return E.createElement(
      Q8.Provider,
      {
        value: {
          didCatch: l,
          error: o,
          resetErrorBoundary: this.resetErrorBoundary,
        },
      },
      a
    );
  }
}
function $8() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((n, r) => !Object.is(n, t[r]));
}
function ul(e, t) {
  return (
    (ul = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    ul(e, t)
  );
}
function ht(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    ul(e, t);
}
var Ha = { exports: {} },
  J8 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  q8 = J8,
  e7 = q8;
function Ra() {}
function ja() {}
ja.resetWarningCache = Ra;
var t7 = function () {
  function e(r, i, l, o, a, s) {
    if (s !== e7) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ja,
    resetWarningCache: Ra,
  };
  return (n.PropTypes = n), n;
};
Ha.exports = t7();
var n7 = Ha.exports;
const W = _n(n7);
function Ae() {
  return (
    (Ae = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ae.apply(null, arguments)
  );
}
function c1(e) {
  return e.charAt(0) === "/";
}
function l2(e, t) {
  for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
  e.pop();
}
function r7(e, t) {
  t === void 0 && (t = "");
  var n = (e && e.split("/")) || [],
    r = (t && t.split("/")) || [],
    i = e && c1(e),
    l = t && c1(t),
    o = i || l;
  if (
    (e && c1(e) ? (r = n) : n.length && (r.pop(), (r = r.concat(n))), !r.length)
  )
    return "/";
  var a;
  if (r.length) {
    var s = r[r.length - 1];
    a = s === "." || s === ".." || s === "";
  } else a = !1;
  for (var u = 0, c = r.length; c >= 0; c--) {
    var d = r[c];
    d === "." ? l2(r, c) : d === ".." ? (l2(r, c), u++) : u && (l2(r, c), u--);
  }
  if (!o) for (; u--; u) r.unshift("..");
  o && r[0] !== "" && (!r[0] || !c1(r[0])) && r.unshift("");
  var f = r.join("/");
  return a && f.substr(-1) !== "/" && (f += "/"), f;
}
var i7 = "Invariant failed";
function Xt(e, t) {
  throw new Error(i7);
}
function Cr(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function Bs(e) {
  return e.charAt(0) === "/" ? e.substr(1) : e;
}
function l7(e, t) {
  return (
    e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
    "/?#".indexOf(e.charAt(t.length)) !== -1
  );
}
function Ia(e, t) {
  return l7(e, t) ? e.substr(t.length) : e;
}
function Va(e) {
  return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
}
function o7(e) {
  var t = e || "/",
    n = "",
    r = "",
    i = t.indexOf("#");
  i !== -1 && ((r = t.substr(i)), (t = t.substr(0, i)));
  var l = t.indexOf("?");
  return (
    l !== -1 && ((n = t.substr(l)), (t = t.substr(0, l))),
    { pathname: t, search: n === "?" ? "" : n, hash: r === "#" ? "" : r }
  );
}
function He(e) {
  var t = e.pathname,
    n = e.search,
    r = e.hash,
    i = t || "/";
  return (
    n && n !== "?" && (i += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (i += r.charAt(0) === "#" ? r : "#" + r),
    i
  );
}
function _e(e, t, n, r) {
  var i;
  typeof e == "string"
    ? ((i = o7(e)), (i.state = t))
    : ((i = Ae({}, e)),
      i.pathname === void 0 && (i.pathname = ""),
      i.search
        ? i.search.charAt(0) !== "?" && (i.search = "?" + i.search)
        : (i.search = ""),
      i.hash
        ? i.hash.charAt(0) !== "#" && (i.hash = "#" + i.hash)
        : (i.hash = ""),
      t !== void 0 && i.state === void 0 && (i.state = t));
  try {
    i.pathname = decodeURI(i.pathname);
  } catch (l) {
    throw l instanceof URIError
      ? new URIError(
          'Pathname "' +
            i.pathname +
            '" could not be decoded. This is likely caused by an invalid percent-encoding.'
        )
      : l;
  }
  return (
    n && (i.key = n),
    r
      ? i.pathname
        ? i.pathname.charAt(0) !== "/" &&
          (i.pathname = r7(i.pathname, r.pathname))
        : (i.pathname = r.pathname)
      : i.pathname || (i.pathname = "/"),
    i
  );
}
function po() {
  var e = null;
  function t(o) {
    return (
      (e = o),
      function () {
        e === o && (e = null);
      }
    );
  }
  function n(o, a, s, u) {
    if (e != null) {
      var c = typeof e == "function" ? e(o, a) : e;
      typeof c == "string"
        ? typeof s == "function"
          ? s(c, u)
          : u(!0)
        : u(c !== !1);
    } else u(!0);
  }
  var r = [];
  function i(o) {
    var a = !0;
    function s() {
      a && o.apply(void 0, arguments);
    }
    return (
      r.push(s),
      function () {
        (a = !1),
          (r = r.filter(function (u) {
            return u !== s;
          }));
      }
    );
  }
  function l() {
    for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++)
      a[s] = arguments[s];
    r.forEach(function (u) {
      return u.apply(void 0, a);
    });
  }
  return {
    setPrompt: t,
    confirmTransitionTo: n,
    appendListener: i,
    notifyListeners: l,
  };
}
var za = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function ba(e, t) {
  t(window.confirm(e));
}
function s7() {
  var e = window.navigator.userAgent;
  return (e.indexOf("Android 2.") !== -1 || e.indexOf("Android 4.0") !== -1) &&
    e.indexOf("Mobile Safari") !== -1 &&
    e.indexOf("Chrome") === -1 &&
    e.indexOf("Windows Phone") === -1
    ? !1
    : window.history && "pushState" in window.history;
}
function a7() {
  return window.navigator.userAgent.indexOf("Trident") === -1;
}
function u7() {
  return window.navigator.userAgent.indexOf("Firefox") === -1;
}
function c7(e) {
  return e.state === void 0 && navigator.userAgent.indexOf("CriOS") === -1;
}
var Fs = "popstate",
  Us = "hashchange";
function _s() {
  try {
    return window.history.state || {};
  } catch {
    return {};
  }
}
function Ba(e) {
  e === void 0 && (e = {}), za || Xt();
  var t = window.history,
    n = s7(),
    r = !a7(),
    i = e,
    l = i.forceRefresh,
    o = l === void 0 ? !1 : l,
    a = i.getUserConfirmation,
    s = a === void 0 ? ba : a,
    u = i.keyLength,
    c = u === void 0 ? 6 : u,
    d = e.basename ? Va(Cr(e.basename)) : "";
  function f(k) {
    var M = k || {},
      I = M.key,
      j = M.state,
      B = window.location,
      F = B.pathname,
      X = B.search,
      $ = B.hash,
      re = F + X + $;
    return d && (re = Ia(re, d)), _e(re, j, I);
  }
  function C() {
    return Math.random().toString(36).substr(2, c);
  }
  var v = po();
  function y(k) {
    Ae(O, k), (O.length = t.length), v.notifyListeners(O.location, O.action);
  }
  function L(k) {
    c7(k) || m(f(k.state));
  }
  function p() {
    m(f(_s()));
  }
  var h = !1;
  function m(k) {
    if (h) (h = !1), y();
    else {
      var M = "POP";
      v.confirmTransitionTo(k, M, s, function (I) {
        I ? y({ action: M, location: k }) : x(k);
      });
    }
  }
  function x(k) {
    var M = O.location,
      I = N.indexOf(M.key);
    I === -1 && (I = 0);
    var j = N.indexOf(k.key);
    j === -1 && (j = 0);
    var B = I - j;
    B && ((h = !0), A(B));
  }
  var S = f(_s()),
    N = [S.key];
  function T(k) {
    return d + He(k);
  }
  function w(k, M) {
    var I = "PUSH",
      j = _e(k, M, C(), O.location);
    v.confirmTransitionTo(j, I, s, function (B) {
      if (B) {
        var F = T(j),
          X = j.key,
          $ = j.state;
        if (n)
          if ((t.pushState({ key: X, state: $ }, null, F), o))
            window.location.href = F;
          else {
            var re = N.indexOf(O.location.key),
              mt = N.slice(0, re + 1);
            mt.push(j.key), (N = mt), y({ action: I, location: j });
          }
        else window.location.href = F;
      }
    });
  }
  function R(k, M) {
    var I = "REPLACE",
      j = _e(k, M, C(), O.location);
    v.confirmTransitionTo(j, I, s, function (B) {
      if (B) {
        var F = T(j),
          X = j.key,
          $ = j.state;
        if (n)
          if ((t.replaceState({ key: X, state: $ }, null, F), o))
            window.location.replace(F);
          else {
            var re = N.indexOf(O.location.key);
            re !== -1 && (N[re] = j.key), y({ action: I, location: j });
          }
        else window.location.replace(F);
      }
    });
  }
  function A(k) {
    t.go(k);
  }
  function D() {
    A(-1);
  }
  function b() {
    A(1);
  }
  var _ = 0;
  function Y(k) {
    (_ += k),
      _ === 1 && k === 1
        ? (window.addEventListener(Fs, L), r && window.addEventListener(Us, p))
        : _ === 0 &&
          (window.removeEventListener(Fs, L),
          r && window.removeEventListener(Us, p));
  }
  var Z = !1;
  function de(k) {
    k === void 0 && (k = !1);
    var M = v.setPrompt(k);
    return (
      Z || (Y(1), (Z = !0)),
      function () {
        return Z && ((Z = !1), Y(-1)), M();
      }
    );
  }
  function ae(k) {
    var M = v.appendListener(k);
    return (
      Y(1),
      function () {
        Y(-1), M();
      }
    );
  }
  var O = {
    length: t.length,
    action: "POP",
    location: S,
    createHref: T,
    push: w,
    replace: R,
    go: A,
    goBack: D,
    goForward: b,
    block: de,
    listen: ae,
  };
  return O;
}
var Ws = "hashchange",
  d7 = {
    hashbang: {
      encodePath: function (t) {
        return t.charAt(0) === "!" ? t : "!/" + Bs(t);
      },
      decodePath: function (t) {
        return t.charAt(0) === "!" ? t.substr(1) : t;
      },
    },
    noslash: { encodePath: Bs, decodePath: Cr },
    slash: { encodePath: Cr, decodePath: Cr },
  };
function Fa(e) {
  var t = e.indexOf("#");
  return t === -1 ? e : e.slice(0, t);
}
function nr() {
  var e = window.location.href,
    t = e.indexOf("#");
  return t === -1 ? "" : e.substring(t + 1);
}
function f7(e) {
  window.location.hash = e;
}
function o2(e) {
  window.location.replace(Fa(window.location.href) + "#" + e);
}
function p7(e) {
  e === void 0 && (e = {}), za || Xt();
  var t = window.history;
  u7();
  var n = e,
    r = n.getUserConfirmation,
    i = r === void 0 ? ba : r,
    l = n.hashType,
    o = l === void 0 ? "slash" : l,
    a = e.basename ? Va(Cr(e.basename)) : "",
    s = d7[o],
    u = s.encodePath,
    c = s.decodePath;
  function d() {
    var M = c(nr());
    return a && (M = Ia(M, a)), _e(M);
  }
  var f = po();
  function C(M) {
    Ae(k, M), (k.length = t.length), f.notifyListeners(k.location, k.action);
  }
  var v = !1,
    y = null;
  function L(M, I) {
    return (
      M.pathname === I.pathname && M.search === I.search && M.hash === I.hash
    );
  }
  function p() {
    var M = nr(),
      I = u(M);
    if (M !== I) o2(I);
    else {
      var j = d(),
        B = k.location;
      if ((!v && L(B, j)) || y === He(j)) return;
      (y = null), h(j);
    }
  }
  function h(M) {
    if (v) (v = !1), C();
    else {
      var I = "POP";
      f.confirmTransitionTo(M, I, i, function (j) {
        j ? C({ action: I, location: M }) : m(M);
      });
    }
  }
  function m(M) {
    var I = k.location,
      j = T.lastIndexOf(He(I));
    j === -1 && (j = 0);
    var B = T.lastIndexOf(He(M));
    B === -1 && (B = 0);
    var F = j - B;
    F && ((v = !0), D(F));
  }
  var x = nr(),
    S = u(x);
  x !== S && o2(S);
  var N = d(),
    T = [He(N)];
  function w(M) {
    var I = document.querySelector("base"),
      j = "";
    return (
      I && I.getAttribute("href") && (j = Fa(window.location.href)),
      j + "#" + u(a + He(M))
    );
  }
  function R(M, I) {
    var j = "PUSH",
      B = _e(M, void 0, void 0, k.location);
    f.confirmTransitionTo(B, j, i, function (F) {
      if (F) {
        var X = He(B),
          $ = u(a + X),
          re = nr() !== $;
        if (re) {
          (y = X), f7($);
          var mt = T.lastIndexOf(He(k.location)),
            Po = T.slice(0, mt + 1);
          Po.push(X), (T = Po), C({ action: j, location: B });
        } else C();
      }
    });
  }
  function A(M, I) {
    var j = "REPLACE",
      B = _e(M, void 0, void 0, k.location);
    f.confirmTransitionTo(B, j, i, function (F) {
      if (F) {
        var X = He(B),
          $ = u(a + X),
          re = nr() !== $;
        re && ((y = X), o2($));
        var mt = T.indexOf(He(k.location));
        mt !== -1 && (T[mt] = X), C({ action: j, location: B });
      }
    });
  }
  function D(M) {
    t.go(M);
  }
  function b() {
    D(-1);
  }
  function _() {
    D(1);
  }
  var Y = 0;
  function Z(M) {
    (Y += M),
      Y === 1 && M === 1
        ? window.addEventListener(Ws, p)
        : Y === 0 && window.removeEventListener(Ws, p);
  }
  var de = !1;
  function ae(M) {
    M === void 0 && (M = !1);
    var I = f.setPrompt(M);
    return (
      de || (Z(1), (de = !0)),
      function () {
        return de && ((de = !1), Z(-1)), I();
      }
    );
  }
  function O(M) {
    var I = f.appendListener(M);
    return (
      Z(1),
      function () {
        Z(-1), I();
      }
    );
  }
  var k = {
    length: t.length,
    action: "POP",
    location: N,
    createHref: w,
    push: R,
    replace: A,
    go: D,
    goBack: b,
    goForward: _,
    block: ae,
    listen: O,
  };
  return k;
}
function Gs(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function h7(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.getUserConfirmation,
    r = t.initialEntries,
    i = r === void 0 ? ["/"] : r,
    l = t.initialIndex,
    o = l === void 0 ? 0 : l,
    a = t.keyLength,
    s = a === void 0 ? 6 : a,
    u = po();
  function c(w) {
    Ae(T, w),
      (T.length = T.entries.length),
      u.notifyListeners(T.location, T.action);
  }
  function d() {
    return Math.random().toString(36).substr(2, s);
  }
  var f = Gs(o, 0, i.length - 1),
    C = i.map(function (w) {
      return typeof w == "string"
        ? _e(w, void 0, d())
        : _e(w, void 0, w.key || d());
    }),
    v = He;
  function y(w, R) {
    var A = "PUSH",
      D = _e(w, R, d(), T.location);
    u.confirmTransitionTo(D, A, n, function (b) {
      if (b) {
        var _ = T.index,
          Y = _ + 1,
          Z = T.entries.slice(0);
        Z.length > Y ? Z.splice(Y, Z.length - Y, D) : Z.push(D),
          c({ action: A, location: D, index: Y, entries: Z });
      }
    });
  }
  function L(w, R) {
    var A = "REPLACE",
      D = _e(w, R, d(), T.location);
    u.confirmTransitionTo(D, A, n, function (b) {
      b && ((T.entries[T.index] = D), c({ action: A, location: D }));
    });
  }
  function p(w) {
    var R = Gs(T.index + w, 0, T.entries.length - 1),
      A = "POP",
      D = T.entries[R];
    u.confirmTransitionTo(D, A, n, function (b) {
      b ? c({ action: A, location: D, index: R }) : c();
    });
  }
  function h() {
    p(-1);
  }
  function m() {
    p(1);
  }
  function x(w) {
    var R = T.index + w;
    return R >= 0 && R < T.entries.length;
  }
  function S(w) {
    return w === void 0 && (w = !1), u.setPrompt(w);
  }
  function N(w) {
    return u.appendListener(w);
  }
  var T = {
    length: C.length,
    action: "POP",
    location: C[f],
    index: f,
    entries: C,
    createHref: v,
    push: y,
    replace: L,
    go: p,
    goBack: h,
    goForward: m,
    canGo: x,
    block: S,
    listen: N,
  };
  return T;
}
var Zn = { exports: {} },
  m7 =
    Array.isArray ||
    function (e) {
      return Object.prototype.toString.call(e) == "[object Array]";
    },
  ei = m7;
Zn.exports = Wa;
Zn.exports.parse = ho;
Zn.exports.compile = v7;
Zn.exports.tokensToFunction = Ua;
Zn.exports.tokensToRegExp = _a;
var C7 = new RegExp(
  [
    "(\\\\.)",
    "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
  ].join("|"),
  "g"
);
function ho(e, t) {
  for (
    var n = [], r = 0, i = 0, l = "", o = (t && t.delimiter) || "/", a;
    (a = C7.exec(e)) != null;

  ) {
    var s = a[0],
      u = a[1],
      c = a.index;
    if (((l += e.slice(i, c)), (i = c + s.length), u)) {
      l += u[1];
      continue;
    }
    var d = e[i],
      f = a[2],
      C = a[3],
      v = a[4],
      y = a[5],
      L = a[6],
      p = a[7];
    l && (n.push(l), (l = ""));
    var h = f != null && d != null && d !== f,
      m = L === "+" || L === "*",
      x = L === "?" || L === "*",
      S = a[2] || o,
      N = v || y;
    n.push({
      name: C || r++,
      prefix: f || "",
      delimiter: S,
      optional: x,
      repeat: m,
      partial: h,
      asterisk: !!p,
      pattern: N ? x7(N) : p ? ".*" : "[^" + k1(S) + "]+?",
    });
  }
  return i < e.length && (l += e.substr(i)), l && n.push(l), n;
}
function v7(e, t) {
  return Ua(ho(e, t), t);
}
function g7(e) {
  return encodeURI(e).replace(/[\/?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function y7(e) {
  return encodeURI(e).replace(/[?#]/g, function (t) {
    return "%" + t.charCodeAt(0).toString(16).toUpperCase();
  });
}
function Ua(e, t) {
  for (var n = new Array(e.length), r = 0; r < e.length; r++)
    typeof e[r] == "object" &&
      (n[r] = new RegExp("^(?:" + e[r].pattern + ")$", Co(t)));
  return function (i, l) {
    for (
      var o = "",
        a = i || {},
        s = l || {},
        u = s.pretty ? g7 : encodeURIComponent,
        c = 0;
      c < e.length;
      c++
    ) {
      var d = e[c];
      if (typeof d == "string") {
        o += d;
        continue;
      }
      var f = a[d.name],
        C;
      if (f == null)
        if (d.optional) {
          d.partial && (o += d.prefix);
          continue;
        } else throw new TypeError('Expected "' + d.name + '" to be defined');
      if (ei(f)) {
        if (!d.repeat)
          throw new TypeError(
            'Expected "' +
              d.name +
              '" to not repeat, but received `' +
              JSON.stringify(f) +
              "`"
          );
        if (f.length === 0) {
          if (d.optional) continue;
          throw new TypeError('Expected "' + d.name + '" to not be empty');
        }
        for (var v = 0; v < f.length; v++) {
          if (((C = u(f[v])), !n[c].test(C)))
            throw new TypeError(
              'Expected all "' +
                d.name +
                '" to match "' +
                d.pattern +
                '", but received `' +
                JSON.stringify(C) +
                "`"
            );
          o += (v === 0 ? d.prefix : d.delimiter) + C;
        }
        continue;
      }
      if (((C = d.asterisk ? y7(f) : u(f)), !n[c].test(C)))
        throw new TypeError(
          'Expected "' +
            d.name +
            '" to match "' +
            d.pattern +
            '", but received "' +
            C +
            '"'
        );
      o += d.prefix + C;
    }
    return o;
  };
}
function k1(e) {
  return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function x7(e) {
  return e.replace(/([=!:$\/()])/g, "\\$1");
}
function mo(e, t) {
  return (e.keys = t), e;
}
function Co(e) {
  return e && e.sensitive ? "" : "i";
}
function w7(e, t) {
  var n = e.source.match(/\((?!\?)/g);
  if (n)
    for (var r = 0; r < n.length; r++)
      t.push({
        name: r,
        prefix: null,
        delimiter: null,
        optional: !1,
        repeat: !1,
        partial: !1,
        asterisk: !1,
        pattern: null,
      });
  return mo(e, t);
}
function L7(e, t, n) {
  for (var r = [], i = 0; i < e.length; i++) r.push(Wa(e[i], t, n).source);
  var l = new RegExp("(?:" + r.join("|") + ")", Co(n));
  return mo(l, t);
}
function S7(e, t, n) {
  return _a(ho(e, n), t, n);
}
function _a(e, t, n) {
  ei(t) || ((n = t || n), (t = [])), (n = n || {});
  for (var r = n.strict, i = n.end !== !1, l = "", o = 0; o < e.length; o++) {
    var a = e[o];
    if (typeof a == "string") l += k1(a);
    else {
      var s = k1(a.prefix),
        u = "(?:" + a.pattern + ")";
      t.push(a),
        a.repeat && (u += "(?:" + s + u + ")*"),
        a.optional
          ? a.partial
            ? (u = s + "(" + u + ")?")
            : (u = "(?:" + s + "(" + u + "))?")
          : (u = s + "(" + u + ")"),
        (l += u);
    }
  }
  var c = k1(n.delimiter || "/"),
    d = l.slice(-c.length) === c;
  return (
    r || (l = (d ? l.slice(0, -c.length) : l) + "(?:" + c + "(?=$))?"),
    i ? (l += "$") : (l += r && d ? "" : "(?=" + c + "|$)"),
    mo(new RegExp("^" + l, Co(n)), t)
  );
}
function Wa(e, t, n) {
  return (
    ei(t) || ((n = t || n), (t = [])),
    (n = n || {}),
    e instanceof RegExp ? w7(e, t) : ei(e) ? L7(e, t, n) : S7(e, t, n)
  );
}
var E7 = Zn.exports;
const T7 = _n(E7);
var Ga = { exports: {} },
  Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ve = typeof Symbol == "function" && Symbol.for,
  vo = ve ? Symbol.for("react.element") : 60103,
  go = ve ? Symbol.for("react.portal") : 60106,
  xi = ve ? Symbol.for("react.fragment") : 60107,
  wi = ve ? Symbol.for("react.strict_mode") : 60108,
  Li = ve ? Symbol.for("react.profiler") : 60114,
  Si = ve ? Symbol.for("react.provider") : 60109,
  Ei = ve ? Symbol.for("react.context") : 60110,
  yo = ve ? Symbol.for("react.async_mode") : 60111,
  Ti = ve ? Symbol.for("react.concurrent_mode") : 60111,
  Ai = ve ? Symbol.for("react.forward_ref") : 60112,
  ki = ve ? Symbol.for("react.suspense") : 60113,
  A7 = ve ? Symbol.for("react.suspense_list") : 60120,
  Ni = ve ? Symbol.for("react.memo") : 60115,
  Mi = ve ? Symbol.for("react.lazy") : 60116,
  k7 = ve ? Symbol.for("react.block") : 60121,
  N7 = ve ? Symbol.for("react.fundamental") : 60117,
  M7 = ve ? Symbol.for("react.responder") : 60118,
  P7 = ve ? Symbol.for("react.scope") : 60119;
function Qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case vo:
        switch (((e = e.type), e)) {
          case yo:
          case Ti:
          case xi:
          case Li:
          case wi:
          case ki:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ei:
              case Ai:
              case Mi:
              case Ni:
              case Si:
                return e;
              default:
                return t;
            }
        }
      case go:
        return t;
    }
  }
}
function Ya(e) {
  return Qe(e) === Ti;
}
Q.AsyncMode = yo;
Q.ConcurrentMode = Ti;
Q.ContextConsumer = Ei;
Q.ContextProvider = Si;
Q.Element = vo;
Q.ForwardRef = Ai;
Q.Fragment = xi;
Q.Lazy = Mi;
Q.Memo = Ni;
Q.Portal = go;
Q.Profiler = Li;
Q.StrictMode = wi;
Q.Suspense = ki;
Q.isAsyncMode = function (e) {
  return Ya(e) || Qe(e) === yo;
};
Q.isConcurrentMode = Ya;
Q.isContextConsumer = function (e) {
  return Qe(e) === Ei;
};
Q.isContextProvider = function (e) {
  return Qe(e) === Si;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === vo;
};
Q.isForwardRef = function (e) {
  return Qe(e) === Ai;
};
Q.isFragment = function (e) {
  return Qe(e) === xi;
};
Q.isLazy = function (e) {
  return Qe(e) === Mi;
};
Q.isMemo = function (e) {
  return Qe(e) === Ni;
};
Q.isPortal = function (e) {
  return Qe(e) === go;
};
Q.isProfiler = function (e) {
  return Qe(e) === Li;
};
Q.isStrictMode = function (e) {
  return Qe(e) === wi;
};
Q.isSuspense = function (e) {
  return Qe(e) === ki;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === xi ||
    e === Ti ||
    e === Li ||
    e === wi ||
    e === ki ||
    e === A7 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Mi ||
        e.$$typeof === Ni ||
        e.$$typeof === Si ||
        e.$$typeof === Ei ||
        e.$$typeof === Ai ||
        e.$$typeof === N7 ||
        e.$$typeof === M7 ||
        e.$$typeof === P7 ||
        e.$$typeof === k7))
  );
};
Q.typeOf = Qe;
Ga.exports = Q;
var O7 = Ga.exports;
function Wr(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
var xo = O7,
  D7 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  H7 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  R7 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Za = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  wo = {};
wo[xo.ForwardRef] = R7;
wo[xo.Memo] = Za;
function Ys(e) {
  return xo.isMemo(e) ? Za : wo[e.$$typeof] || D7;
}
var j7 = Object.defineProperty,
  I7 = Object.getOwnPropertyNames,
  Zs = Object.getOwnPropertySymbols,
  V7 = Object.getOwnPropertyDescriptor,
  z7 = Object.getPrototypeOf,
  Ks = Object.prototype;
function Ka(e, t, n) {
  if (typeof t != "string") {
    if (Ks) {
      var r = z7(t);
      r && r !== Ks && Ka(e, r, n);
    }
    var i = I7(t);
    Zs && (i = i.concat(Zs(t)));
    for (var l = Ys(e), o = Ys(t), a = 0; a < i.length; ++a) {
      var s = i[a];
      if (!H7[s] && !(n && n[s]) && !(o && o[s]) && !(l && l[s])) {
        var u = V7(t, s);
        try {
          j7(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
var b7 = Ka;
const B7 = _n(b7);
var s2 = 1073741823,
  Qs =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {};
function F7() {
  var e = "__global_unique_id__";
  return (Qs[e] = (Qs[e] || 0) + 1);
}
function U7(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function _7(e) {
  var t = [];
  return {
    on: function (r) {
      t.push(r);
    },
    off: function (r) {
      t = t.filter(function (i) {
        return i !== r;
      });
    },
    get: function () {
      return e;
    },
    set: function (r, i) {
      (e = r),
        t.forEach(function (l) {
          return l(e, i);
        });
    },
  };
}
function W7(e) {
  return Array.isArray(e) ? e[0] : e;
}
function G7(e, t) {
  var n,
    r,
    i = "__create-react-context-" + F7() + "__",
    l = (function (a) {
      ht(s, a);
      function s() {
        for (var c, d = arguments.length, f = new Array(d), C = 0; C < d; C++)
          f[C] = arguments[C];
        return (
          (c = a.call.apply(a, [this].concat(f)) || this),
          (c.emitter = _7(c.props.value)),
          c
        );
      }
      var u = s.prototype;
      return (
        (u.getChildContext = function () {
          var d;
          return (d = {}), (d[i] = this.emitter), d;
        }),
        (u.componentWillReceiveProps = function (d) {
          if (this.props.value !== d.value) {
            var f = this.props.value,
              C = d.value,
              v;
            U7(f, C)
              ? (v = 0)
              : ((v = typeof t == "function" ? t(f, C) : s2),
                (v |= 0),
                v !== 0 && this.emitter.set(d.value, v));
          }
        }),
        (u.render = function () {
          return this.props.children;
        }),
        s
      );
    })(H.Component);
  l.childContextTypes = ((n = {}), (n[i] = W.object.isRequired), n);
  var o = (function (a) {
    ht(s, a);
    function s() {
      for (var c, d = arguments.length, f = new Array(d), C = 0; C < d; C++)
        f[C] = arguments[C];
      return (
        (c = a.call.apply(a, [this].concat(f)) || this),
        (c.observedBits = void 0),
        (c.state = { value: c.getValue() }),
        (c.onUpdate = function (v, y) {
          var L = c.observedBits | 0;
          L & y && c.setState({ value: c.getValue() });
        }),
        c
      );
    }
    var u = s.prototype;
    return (
      (u.componentWillReceiveProps = function (d) {
        var f = d.observedBits;
        this.observedBits = f ?? s2;
      }),
      (u.componentDidMount = function () {
        this.context[i] && this.context[i].on(this.onUpdate);
        var d = this.props.observedBits;
        this.observedBits = d ?? s2;
      }),
      (u.componentWillUnmount = function () {
        this.context[i] && this.context[i].off(this.onUpdate);
      }),
      (u.getValue = function () {
        return this.context[i] ? this.context[i].get() : e;
      }),
      (u.render = function () {
        return W7(this.props.children)(this.state.value);
      }),
      s
    );
  })(H.Component);
  return (
    (o.contextTypes = ((r = {}), (r[i] = W.object), r)),
    { Provider: l, Consumer: o }
  );
}
var Y7 = H.createContext || G7,
  Qa = function (t) {
    var n = Y7();
    return (n.displayName = t), n;
  },
  Z7 = Qa("Router-History"),
  dn = Qa("Router"),
  Gr = (function (e) {
    ht(t, e),
      (t.computeRootMatch = function (i) {
        return { path: "/", url: "/", params: {}, isExact: i === "/" };
      });
    function t(r) {
      var i;
      return (
        (i = e.call(this, r) || this),
        (i.state = { location: r.history.location }),
        (i._isMounted = !1),
        (i._pendingLocation = null),
        r.staticContext ||
          (i.unlisten = r.history.listen(function (l) {
            i._pendingLocation = l;
          })),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        var i = this;
        (this._isMounted = !0),
          this.unlisten && this.unlisten(),
          this.props.staticContext ||
            (this.unlisten = this.props.history.listen(function (l) {
              i._isMounted && i.setState({ location: l });
            })),
          this._pendingLocation &&
            this.setState({ location: this._pendingLocation });
      }),
      (n.componentWillUnmount = function () {
        this.unlisten &&
          (this.unlisten(),
          (this._isMounted = !1),
          (this._pendingLocation = null));
      }),
      (n.render = function () {
        return H.createElement(
          dn.Provider,
          {
            value: {
              history: this.props.history,
              location: this.state.location,
              match: t.computeRootMatch(this.state.location.pathname),
              staticContext: this.props.staticContext,
            },
          },
          H.createElement(Z7.Provider, {
            children: this.props.children || null,
            value: this.props.history,
          })
        );
      }),
      t
    );
  })(H.Component);
H.Component;
H.Component;
var Xs = {},
  K7 = 1e4,
  $s = 0;
function Q7(e, t) {
  var n = "" + t.end + t.strict + t.sensitive,
    r = Xs[n] || (Xs[n] = {});
  if (r[e]) return r[e];
  var i = [],
    l = T7(e, i, t),
    o = { regexp: l, keys: i };
  return $s < K7 && ((r[e] = o), $s++), o;
}
function Lo(e, t) {
  t === void 0 && (t = {}),
    (typeof t == "string" || Array.isArray(t)) && (t = { path: t });
  var n = t,
    r = n.path,
    i = n.exact,
    l = i === void 0 ? !1 : i,
    o = n.strict,
    a = o === void 0 ? !1 : o,
    s = n.sensitive,
    u = s === void 0 ? !1 : s,
    c = [].concat(r);
  return c.reduce(function (d, f) {
    if (!f && f !== "") return null;
    if (d) return d;
    var C = Q7(f, { end: l, strict: a, sensitive: u }),
      v = C.regexp,
      y = C.keys,
      L = v.exec(e);
    if (!L) return null;
    var p = L[0],
      h = L.slice(1),
      m = e === p;
    return l && !m
      ? null
      : {
          path: f,
          url: f === "/" && p === "" ? "/" : p,
          isExact: m,
          params: y.reduce(function (x, S, N) {
            return (x[S.name] = h[N]), x;
          }, {}),
        };
  }, null);
}
function X7(e) {
  return H.Children.count(e) === 0;
}
var Js = (function (e) {
  ht(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var i = this;
      return H.createElement(dn.Consumer, null, function (l) {
        l || Xt();
        var o = i.props.location || l.location,
          a = i.props.computedMatch
            ? i.props.computedMatch
            : i.props.path
            ? Lo(o.pathname, i.props)
            : l.match,
          s = Ae({}, l, { location: o, match: a }),
          u = i.props,
          c = u.children,
          d = u.component,
          f = u.render;
        return (
          Array.isArray(c) && X7(c) && (c = null),
          H.createElement(
            dn.Provider,
            { value: s },
            s.match
              ? c
                ? typeof c == "function"
                  ? c(s)
                  : c
                : d
                ? H.createElement(d, s)
                : f
                ? f(s)
                : null
              : typeof c == "function"
              ? c(s)
              : null
          )
        );
      });
    }),
    t
  );
})(H.Component);
function So(e) {
  return e.charAt(0) === "/" ? e : "/" + e;
}
function $7(e, t) {
  return e ? Ae({}, t, { pathname: So(e) + t.pathname }) : t;
}
function J7(e, t) {
  if (!e) return t;
  var n = So(e);
  return t.pathname.indexOf(n) !== 0
    ? t
    : Ae({}, t, { pathname: t.pathname.substr(n.length) });
}
function qs(e) {
  return typeof e == "string" ? e : He(e);
}
function a2(e) {
  return function () {
    Xt();
  };
}
function e3() {}
H.Component;
var q7 = (function (e) {
  ht(t, e);
  function t() {
    return e.apply(this, arguments) || this;
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      var i = this;
      return H.createElement(dn.Consumer, null, function (l) {
        l || Xt();
        var o = i.props.location || l.location,
          a,
          s;
        return (
          H.Children.forEach(i.props.children, function (u) {
            if (s == null && H.isValidElement(u)) {
              a = u;
              var c = u.props.path || u.props.from;
              s = c ? Lo(o.pathname, Ae({}, u.props, { path: c })) : l.match;
            }
          }),
          s ? H.cloneElement(a, { location: o, computedMatch: s }) : null
        );
      });
    }),
    t
  );
})(H.Component);
function eu(e) {
  var t = "withRouter(" + (e.displayName || e.name) + ")",
    n = function (i) {
      var l = i.wrappedComponentRef,
        o = Wr(i, ["wrappedComponentRef"]);
      return H.createElement(dn.Consumer, null, function (a) {
        return a || Xt(), H.createElement(e, Ae({}, o, a, { ref: l }));
      });
    };
  return (n.displayName = t), (n.WrappedComponent = e), B7(n, e);
}
H.useContext;
var tu = (function (e) {
  ht(t, e);
  function t() {
    for (var r, i = arguments.length, l = new Array(i), o = 0; o < i; o++)
      l[o] = arguments[o];
    return (
      (r = e.call.apply(e, [this].concat(l)) || this),
      (r.history = Ba(r.props)),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.render = function () {
      return H.createElement(Gr, {
        history: this.history,
        children: this.props.children,
      });
    }),
    t
  );
})(H.Component);
H.Component;
var cl = function (t, n) {
    return typeof t == "function" ? t(n) : t;
  },
  dl = function (t, n) {
    return typeof t == "string" ? _e(t, null, null, n) : t;
  },
  Eo = function (t) {
    return t;
  },
  Fn = H.forwardRef;
typeof Fn > "u" && (Fn = Eo);
function nu(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var ru = Fn(function (e, t) {
    var n = e.innerRef,
      r = e.navigate,
      i = e.onClick,
      l = Wr(e, ["innerRef", "navigate", "onClick"]),
      o = l.target,
      a = Ae({}, l, {
        onClick: function (u) {
          try {
            i && i(u);
          } catch (c) {
            throw (u.preventDefault(), c);
          }
          !u.defaultPrevented &&
            u.button === 0 &&
            (!o || o === "_self") &&
            !nu(u) &&
            (u.preventDefault(), r());
        },
      });
    return Eo !== Fn ? (a.ref = t || n) : (a.ref = n), H.createElement("a", a);
  }),
  iu = Fn(function (e, t) {
    var n = e.component,
      r = n === void 0 ? ru : n,
      i = e.replace,
      l = e.to,
      o = e.innerRef,
      a = Wr(e, ["component", "replace", "to", "innerRef"]);
    return H.createElement(dn.Consumer, null, function (s) {
      s || Xt();
      var u = s.history,
        c = dl(cl(l, s.location), s.location),
        d = c ? u.createHref(c) : "",
        f = Ae({}, a, {
          href: d,
          navigate: function () {
            var v = cl(l, s.location),
              y = He(s.location) === He(dl(v)),
              L = i || y ? u.replace : u.push;
            L(v);
          },
        });
      return (
        Eo !== Fn ? (f.ref = t || o) : (f.innerRef = o), H.createElement(r, f)
      );
    });
  }),
  Xa = function (t) {
    return t;
  },
  ti = H.forwardRef;
typeof ti > "u" && (ti = Xa);
function lu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t
    .filter(function (r) {
      return r;
    })
    .join(" ");
}
ti(function (e, t) {
  var n = e["aria-current"],
    r = n === void 0 ? "page" : n,
    i = e.activeClassName,
    l = i === void 0 ? "active" : i,
    o = e.activeStyle,
    a = e.className,
    s = e.exact,
    u = e.isActive,
    c = e.location,
    d = e.sensitive,
    f = e.strict,
    C = e.style,
    v = e.to,
    y = e.innerRef,
    L = Wr(e, [
      "aria-current",
      "activeClassName",
      "activeStyle",
      "className",
      "exact",
      "isActive",
      "location",
      "sensitive",
      "strict",
      "style",
      "to",
      "innerRef",
    ]);
  return H.createElement(dn.Consumer, null, function (p) {
    p || Xt();
    var h = c || p.location,
      m = dl(cl(v, h), h),
      x = m.pathname,
      S = x && x.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      N = S
        ? Lo(h.pathname, { path: S, exact: s, sensitive: d, strict: f })
        : null,
      T = !!(u ? u(N, h) : N),
      w = typeof a == "function" ? a(T) : a,
      R = typeof C == "function" ? C(T) : C;
    T && ((w = lu(w, l)), (R = Ae({}, R, o)));
    var A = Ae(
      { "aria-current": (T && r) || null, className: w, style: R, to: m },
      L
    );
    return (
      Xa !== ti ? (A.ref = t || y) : (A.innerRef = y), H.createElement(iu, A)
    );
  });
});
function $a(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = $a(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Rt() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = $a(e)) && (r && (r += " "), (r += t));
  return r;
}
const Ir = (e) => typeof e == "number" && !isNaN(e),
  ln = (e) => typeof e == "string",
  We = (e) => typeof e == "function",
  N1 = (e) => (ln(e) || We(e) ? e : null),
  fl = (e) => E.isValidElement(e) || ln(e) || We(e) || Ir(e);
function ou(e, t, n) {
  n === void 0 && (n = 300);
  const { scrollHeight: r, style: i } = e;
  requestAnimationFrame(() => {
    (i.minHeight = "initial"),
      (i.height = r + "px"),
      (i.transition = `all ${n}ms`),
      requestAnimationFrame(() => {
        (i.height = "0"), (i.padding = "0"), (i.margin = "0"), setTimeout(t, n);
      });
  });
}
function Pi(e) {
  let {
    enter: t,
    exit: n,
    appendPosition: r = !1,
    collapse: i = !0,
    collapseDuration: l = 300,
  } = e;
  return function (o) {
    let {
      children: a,
      position: s,
      preventExitTransition: u,
      done: c,
      nodeRef: d,
      isIn: f,
      playToast: C,
    } = o;
    const v = r ? `${t}--${s}` : t,
      y = r ? `${n}--${s}` : n,
      L = E.useRef(0);
    return (
      E.useLayoutEffect(() => {
        const p = d.current,
          h = v.split(" "),
          m = (x) => {
            x.target === d.current &&
              (C(),
              p.removeEventListener("animationend", m),
              p.removeEventListener("animationcancel", m),
              L.current === 0 &&
                x.type !== "animationcancel" &&
                p.classList.remove(...h));
          };
        p.classList.add(...h),
          p.addEventListener("animationend", m),
          p.addEventListener("animationcancel", m);
      }, []),
      E.useEffect(() => {
        const p = d.current,
          h = () => {
            p.removeEventListener("animationend", h), i ? ou(p, c, l) : c();
          };
        f ||
          (u
            ? h()
            : ((L.current = 1),
              (p.className += ` ${y}`),
              p.addEventListener("animationend", h)));
      }, [f]),
      H.createElement(H.Fragment, null, a)
    );
  };
}
function t3(e, t) {
  return e != null
    ? {
        content: e.content,
        containerId: e.props.containerId,
        id: e.props.toastId,
        theme: e.props.theme,
        type: e.props.type,
        data: e.props.data || {},
        isLoading: e.props.isLoading,
        icon: e.props.icon,
        status: t,
      }
    : {};
}
const Me = new Map();
let Vr = [];
const pl = new Set(),
  su = (e) => pl.forEach((t) => t(e)),
  Ja = () => Me.size > 0;
function qa(e, t) {
  var n;
  if (t) return !((n = Me.get(t)) == null || !n.isToastActive(e));
  let r = !1;
  return (
    Me.forEach((i) => {
      i.isToastActive(e) && (r = !0);
    }),
    r
  );
}
function e5(e, t) {
  fl(e) &&
    (Ja() || Vr.push({ content: e, options: t }),
    Me.forEach((n) => {
      n.buildToast(e, t);
    }));
}
function n3(e, t) {
  Me.forEach((n) => {
    t != null && t != null && t.containerId
      ? t?.containerId === n.id && n.toggle(e, t?.id)
      : n.toggle(e, t?.id);
  });
}
function au(e) {
  const {
    subscribe: t,
    getSnapshot: n,
    setProps: r,
  } = E.useRef(
    (function (l) {
      const o = l.containerId || 1;
      return {
        subscribe(a) {
          const s = (function (c, d, f) {
            let C = 1,
              v = 0,
              y = [],
              L = [],
              p = [],
              h = d;
            const m = new Map(),
              x = new Set(),
              S = () => {
                (p = Array.from(m.values())), x.forEach((w) => w());
              },
              N = (w) => {
                (L = w == null ? [] : L.filter((R) => R !== w)), S();
              },
              T = (w) => {
                const {
                    toastId: R,
                    onOpen: A,
                    updateId: D,
                    children: b,
                  } = w.props,
                  _ = D == null;
                w.staleId && m.delete(w.staleId),
                  m.set(R, w),
                  (L = [...L, w.props.toastId].filter((Y) => Y !== w.staleId)),
                  S(),
                  f(t3(w, _ ? "added" : "updated")),
                  _ && We(A) && A(E.isValidElement(b) && b.props);
              };
            return {
              id: c,
              props: h,
              observe: (w) => (x.add(w), () => x.delete(w)),
              toggle: (w, R) => {
                m.forEach((A) => {
                  (R != null && R !== A.props.toastId) ||
                    (We(A.toggle) && A.toggle(w));
                });
              },
              removeToast: N,
              toasts: m,
              clearQueue: () => {
                (v -= y.length), (y = []);
              },
              buildToast: (w, R) => {
                if (
                  ((j) => {
                    let { containerId: B, toastId: F, updateId: X } = j;
                    const $ = B ? B !== c : c !== 1,
                      re = m.has(F) && X == null;
                    return $ || re;
                  })(R)
                )
                  return;
                const {
                    toastId: A,
                    updateId: D,
                    data: b,
                    staleId: _,
                    delay: Y,
                  } = R,
                  Z = () => {
                    N(A);
                  },
                  de = D == null;
                de && v++;
                const ae = {
                  ...h,
                  style: h.toastStyle,
                  key: C++,
                  ...Object.fromEntries(
                    Object.entries(R).filter((j) => {
                      let [B, F] = j;
                      return F != null;
                    })
                  ),
                  toastId: A,
                  updateId: D,
                  data: b,
                  closeToast: Z,
                  isIn: !1,
                  className: N1(R.className || h.toastClassName),
                  bodyClassName: N1(R.bodyClassName || h.bodyClassName),
                  progressClassName: N1(
                    R.progressClassName || h.progressClassName
                  ),
                  autoClose:
                    !R.isLoading &&
                    ((O = R.autoClose),
                    (k = h.autoClose),
                    O === !1 || (Ir(O) && O > 0) ? O : k),
                  deleteToast() {
                    const j = m.get(A),
                      { onClose: B, children: F } = j.props;
                    We(B) && B(E.isValidElement(F) && F.props),
                      f(t3(j, "removed")),
                      m.delete(A),
                      v--,
                      v < 0 && (v = 0),
                      y.length > 0 ? T(y.shift()) : S();
                  },
                };
                var O, k;
                (ae.closeButton = h.closeButton),
                  R.closeButton === !1 || fl(R.closeButton)
                    ? (ae.closeButton = R.closeButton)
                    : R.closeButton === !0 &&
                      (ae.closeButton = !fl(h.closeButton) || h.closeButton);
                let M = w;
                E.isValidElement(w) && !ln(w.type)
                  ? (M = E.cloneElement(w, {
                      closeToast: Z,
                      toastProps: ae,
                      data: b,
                    }))
                  : We(w) &&
                    (M = w({ closeToast: Z, toastProps: ae, data: b }));
                const I = { content: M, props: ae, staleId: _ };
                h.limit && h.limit > 0 && v > h.limit && de
                  ? y.push(I)
                  : Ir(Y)
                  ? setTimeout(() => {
                      T(I);
                    }, Y)
                  : T(I);
              },
              setProps(w) {
                h = w;
              },
              setToggle: (w, R) => {
                m.get(w).toggle = R;
              },
              isToastActive: (w) => L.some((R) => R === w),
              getSnapshot: () => (h.newestOnTop ? p.reverse() : p),
            };
          })(o, l, su);
          Me.set(o, s);
          const u = s.observe(a);
          return (
            Vr.forEach((c) => e5(c.content, c.options)),
            (Vr = []),
            () => {
              u(), Me.delete(o);
            }
          );
        },
        setProps(a) {
          var s;
          (s = Me.get(o)) == null || s.setProps(a);
        },
        getSnapshot() {
          var a;
          return (a = Me.get(o)) == null ? void 0 : a.getSnapshot();
        },
      };
    })(e)
  ).current;
  r(e);
  const i = E.useSyncExternalStore(t, n, n);
  return {
    getToastToRender: function (l) {
      if (!i) return [];
      const o = new Map();
      return (
        i.forEach((a) => {
          const { position: s } = a.props;
          o.has(s) || o.set(s, []), o.get(s).push(a);
        }),
        Array.from(o, (a) => l(a[0], a[1]))
      );
    },
    isToastActive: qa,
    count: i?.length,
  };
}
function uu(e) {
  const [t, n] = E.useState(!1),
    [r, i] = E.useState(!1),
    l = E.useRef(null),
    o = E.useRef({
      start: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      didMove: !1,
    }).current,
    {
      autoClose: a,
      pauseOnHover: s,
      closeToast: u,
      onClick: c,
      closeOnClick: d,
    } = e;
  var f, C;
  function v() {
    n(!0);
  }
  function y() {
    n(!1);
  }
  function L(m) {
    const x = l.current;
    o.canDrag &&
      x &&
      ((o.didMove = !0),
      t && y(),
      (o.delta =
        e.draggableDirection === "x"
          ? m.clientX - o.start
          : m.clientY - o.start),
      o.start !== m.clientX && (o.canCloseOnClick = !1),
      (x.style.transform = `translate3d(${
        e.draggableDirection === "x"
          ? `${o.delta}px, var(--y)`
          : `0, calc(${o.delta}px + var(--y))`
      },0)`),
      (x.style.opacity = "" + (1 - Math.abs(o.delta / o.removalDistance))));
  }
  function p() {
    document.removeEventListener("pointermove", L),
      document.removeEventListener("pointerup", p);
    const m = l.current;
    if (o.canDrag && o.didMove && m) {
      if (((o.canDrag = !1), Math.abs(o.delta) > o.removalDistance))
        return i(!0), e.closeToast(), void e.collapseAll();
      (m.style.transition = "transform 0.2s, opacity 0.2s"),
        m.style.removeProperty("transform"),
        m.style.removeProperty("opacity");
    }
  }
  (C = Me.get(
    (f = { id: e.toastId, containerId: e.containerId, fn: n }).containerId || 1
  )) == null || C.setToggle(f.id, f.fn),
    E.useEffect(() => {
      if (e.pauseOnFocusLoss)
        return (
          document.hasFocus() || y(),
          window.addEventListener("focus", v),
          window.addEventListener("blur", y),
          () => {
            window.removeEventListener("focus", v),
              window.removeEventListener("blur", y);
          }
        );
    }, [e.pauseOnFocusLoss]);
  const h = {
    onPointerDown: function (m) {
      if (e.draggable === !0 || e.draggable === m.pointerType) {
        (o.didMove = !1),
          document.addEventListener("pointermove", L),
          document.addEventListener("pointerup", p);
        const x = l.current;
        (o.canCloseOnClick = !0),
          (o.canDrag = !0),
          (x.style.transition = "none"),
          e.draggableDirection === "x"
            ? ((o.start = m.clientX),
              (o.removalDistance = x.offsetWidth * (e.draggablePercent / 100)))
            : ((o.start = m.clientY),
              (o.removalDistance =
                (x.offsetHeight *
                  (e.draggablePercent === 80
                    ? 1.5 * e.draggablePercent
                    : e.draggablePercent)) /
                100));
      }
    },
    onPointerUp: function (m) {
      const {
        top: x,
        bottom: S,
        left: N,
        right: T,
      } = l.current.getBoundingClientRect();
      m.nativeEvent.type !== "touchend" &&
      e.pauseOnHover &&
      m.clientX >= N &&
      m.clientX <= T &&
      m.clientY >= x &&
      m.clientY <= S
        ? y()
        : v();
    },
  };
  return (
    a && s && ((h.onMouseEnter = y), e.stacked || (h.onMouseLeave = v)),
    d &&
      (h.onClick = (m) => {
        c && c(m), o.canCloseOnClick && u();
      }),
    {
      playToast: v,
      pauseToast: y,
      isRunning: t,
      preventExitTransition: r,
      toastRef: l,
      eventHandlers: h,
    }
  );
}
function cu(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: r,
    type: i = "default",
    hide: l,
    className: o,
    style: a,
    controlledProgress: s,
    progress: u,
    rtl: c,
    isIn: d,
    theme: f,
  } = e;
  const C = l || (s && u === 0),
    v = {
      ...a,
      animationDuration: `${t}ms`,
      animationPlayState: n ? "running" : "paused",
    };
  s && (v.transform = `scaleX(${u})`);
  const y = Rt(
      "Toastify__progress-bar",
      s
        ? "Toastify__progress-bar--controlled"
        : "Toastify__progress-bar--animated",
      `Toastify__progress-bar-theme--${f}`,
      `Toastify__progress-bar--${i}`,
      { "Toastify__progress-bar--rtl": c }
    ),
    L = We(o) ? o({ rtl: c, type: i, defaultClassName: y }) : Rt(y, o),
    p = {
      [s && u >= 1 ? "onTransitionEnd" : "onAnimationEnd"]:
        s && u < 1
          ? null
          : () => {
              d && r();
            },
    };
  return H.createElement(
    "div",
    { className: "Toastify__progress-bar--wrp", "data-hidden": C },
    H.createElement("div", {
      className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`,
    }),
    H.createElement("div", {
      role: "progressbar",
      "aria-hidden": C ? "true" : "false",
      "aria-label": "notification timer",
      className: L,
      style: v,
      ...p,
    })
  );
}
let du = 1;
const t5 = () => "" + du++;
function fu(e) {
  return e && (ln(e.toastId) || Ir(e.toastId)) ? e.toastId : t5();
}
function vr(e, t) {
  return e5(e, t), t.toastId;
}
function ni(e, t) {
  return { ...t, type: (t && t.type) || e, toastId: fu(t) };
}
function d1(e) {
  return (t, n) => vr(t, ni(e, n));
}
function J(e, t) {
  return vr(e, ni("default", t));
}
(J.loading = (e, t) =>
  vr(
    e,
    ni("default", {
      isLoading: !0,
      autoClose: !1,
      closeOnClick: !1,
      closeButton: !1,
      draggable: !1,
      ...t,
    })
  )),
  (J.promise = function (e, t, n) {
    let r,
      { pending: i, error: l, success: o } = t;
    i && (r = ln(i) ? J.loading(i, n) : J.loading(i.render, { ...n, ...i }));
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
      },
      s = (c, d, f) => {
        if (d == null) return void J.dismiss(r);
        const C = { type: c, ...a, ...n, data: f },
          v = ln(d) ? { render: d } : d;
        return r ? J.update(r, { ...C, ...v }) : J(v.render, { ...C, ...v }), f;
      },
      u = We(e) ? e() : e;
    return u.then((c) => s("success", o, c)).catch((c) => s("error", l, c)), u;
  }),
  (J.success = d1("success")),
  (J.info = d1("info")),
  (J.error = d1("error")),
  (J.warning = d1("warning")),
  (J.warn = J.warning),
  (J.dark = (e, t) => vr(e, ni("default", { theme: "dark", ...t }))),
  (J.dismiss = function (e) {
    (function (t) {
      var n;
      if (Ja()) {
        if (t == null || ln((n = t)) || Ir(n))
          Me.forEach((r) => {
            r.removeToast(t);
          });
        else if (t && ("containerId" in t || "id" in t)) {
          const r = Me.get(t.containerId);
          r
            ? r.removeToast(t.id)
            : Me.forEach((i) => {
                i.removeToast(t.id);
              });
        }
      } else Vr = Vr.filter((r) => t != null && r.options.toastId !== t);
    })(e);
  }),
  (J.clearWaitingQueue = function (e) {
    e === void 0 && (e = {}),
      Me.forEach((t) => {
        !t.props.limit ||
          (e.containerId && t.id !== e.containerId) ||
          t.clearQueue();
      });
  }),
  (J.isActive = qa),
  (J.update = function (e, t) {
    t === void 0 && (t = {});
    const n = ((r, i) => {
      var l;
      let { containerId: o } = i;
      return (l = Me.get(o || 1)) == null ? void 0 : l.toasts.get(r);
    })(e, t);
    if (n) {
      const { props: r, content: i } = n,
        l = { delay: 100, ...r, ...t, toastId: t.toastId || e, updateId: t5() };
      l.toastId !== e && (l.staleId = e);
      const o = l.render || i;
      delete l.render, vr(o, l);
    }
  }),
  (J.done = (e) => {
    J.update(e, { progress: 1 });
  }),
  (J.onChange = function (e) {
    return (
      pl.add(e),
      () => {
        pl.delete(e);
      }
    );
  }),
  (J.play = (e) => n3(!0, e)),
  (J.pause = (e) => n3(!1, e));
const pu = typeof window < "u" ? E.useLayoutEffect : E.useEffect,
  f1 = (e) => {
    let { theme: t, type: n, isLoading: r, ...i } = e;
    return H.createElement("svg", {
      viewBox: "0 0 24 24",
      width: "100%",
      height: "100%",
      fill:
        t === "colored" ? "currentColor" : `var(--toastify-icon-color-${n})`,
      ...i,
    });
  },
  u2 = {
    info: function (e) {
      return H.createElement(
        f1,
        { ...e },
        H.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z",
        })
      );
    },
    warning: function (e) {
      return H.createElement(
        f1,
        { ...e },
        H.createElement("path", {
          d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z",
        })
      );
    },
    success: function (e) {
      return H.createElement(
        f1,
        { ...e },
        H.createElement("path", {
          d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z",
        })
      );
    },
    error: function (e) {
      return H.createElement(
        f1,
        { ...e },
        H.createElement("path", {
          d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z",
        })
      );
    },
    spinner: function () {
      return H.createElement("div", { className: "Toastify__spinner" });
    },
  },
  hu = (e) => {
    const {
        isRunning: t,
        preventExitTransition: n,
        toastRef: r,
        eventHandlers: i,
        playToast: l,
      } = uu(e),
      {
        closeButton: o,
        children: a,
        autoClose: s,
        onClick: u,
        type: c,
        hideProgressBar: d,
        closeToast: f,
        transition: C,
        position: v,
        className: y,
        style: L,
        bodyClassName: p,
        bodyStyle: h,
        progressClassName: m,
        progressStyle: x,
        updateId: S,
        role: N,
        progress: T,
        rtl: w,
        toastId: R,
        deleteToast: A,
        isIn: D,
        isLoading: b,
        closeOnClick: _,
        theme: Y,
      } = e,
      Z = Rt(
        "Toastify__toast",
        `Toastify__toast-theme--${Y}`,
        `Toastify__toast--${c}`,
        { "Toastify__toast--rtl": w },
        { "Toastify__toast--close-on-click": _ }
      ),
      de = We(y)
        ? y({ rtl: w, position: v, type: c, defaultClassName: Z })
        : Rt(Z, y),
      ae = (function (I) {
        let { theme: j, type: B, isLoading: F, icon: X } = I,
          $ = null;
        const re = { theme: j, type: B };
        return (
          X === !1 ||
            (We(X)
              ? ($ = X({ ...re, isLoading: F }))
              : E.isValidElement(X)
              ? ($ = E.cloneElement(X, re))
              : F
              ? ($ = u2.spinner())
              : ((mt) => mt in u2)(B) && ($ = u2[B](re))),
          $
        );
      })(e),
      O = !!T || !s,
      k = { closeToast: f, type: c, theme: Y };
    let M = null;
    return (
      o === !1 ||
        (M = We(o)
          ? o(k)
          : E.isValidElement(o)
          ? E.cloneElement(o, k)
          : (function (I) {
              let { closeToast: j, theme: B, ariaLabel: F = "close" } = I;
              return H.createElement(
                "button",
                {
                  className: `Toastify__close-button Toastify__close-button--${B}`,
                  type: "button",
                  onClick: (X) => {
                    X.stopPropagation(), j(X);
                  },
                  "aria-label": F,
                },
                H.createElement(
                  "svg",
                  { "aria-hidden": "true", viewBox: "0 0 14 16" },
                  H.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z",
                  })
                )
              );
            })(k)),
      H.createElement(
        C,
        {
          isIn: D,
          done: A,
          position: v,
          preventExitTransition: n,
          nodeRef: r,
          playToast: l,
        },
        H.createElement(
          "div",
          {
            id: R,
            onClick: u,
            "data-in": D,
            className: de,
            ...i,
            style: L,
            ref: r,
          },
          H.createElement(
            "div",
            {
              ...(D && { role: N }),
              className: We(p) ? p({ type: c }) : Rt("Toastify__toast-body", p),
              style: h,
            },
            ae != null &&
              H.createElement(
                "div",
                {
                  className: Rt("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !b,
                  }),
                },
                ae
              ),
            H.createElement("div", null, a)
          ),
          M,
          H.createElement(cu, {
            ...(S && !O ? { key: `pb-${S}` } : {}),
            rtl: w,
            theme: Y,
            delay: s,
            isRunning: t,
            isIn: D,
            closeToast: f,
            hide: d,
            type: c,
            style: x,
            className: m,
            controlledProgress: O,
            progress: T || 0,
          })
        )
      )
    );
  },
  Oi = function (e, t) {
    return (
      t === void 0 && (t = !1),
      {
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t,
      }
    );
  },
  mu = Pi(Oi("bounce", !0));
Pi(Oi("slide", !0));
Pi(Oi("zoom"));
Pi(Oi("flip"));
const Cu = {
  position: "top-right",
  transition: mu,
  autoClose: 5e3,
  closeButton: !0,
  pauseOnHover: !0,
  pauseOnFocusLoss: !0,
  draggable: "touch",
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light",
};
function vu(e) {
  let t = { ...Cu, ...e };
  const n = e.stacked,
    [r, i] = E.useState(!0),
    l = E.useRef(null),
    { getToastToRender: o, isToastActive: a, count: s } = au(t),
    { className: u, style: c, rtl: d, containerId: f } = t;
  function C(y) {
    const L = Rt(
      "Toastify__toast-container",
      `Toastify__toast-container--${y}`,
      { "Toastify__toast-container--rtl": d }
    );
    return We(u)
      ? u({ position: y, rtl: d, defaultClassName: L })
      : Rt(L, N1(u));
  }
  function v() {
    n && (i(!0), J.play());
  }
  return (
    pu(() => {
      if (n) {
        var y;
        const L = l.current.querySelectorAll('[data-in="true"]'),
          p = 12,
          h = (y = t.position) == null ? void 0 : y.includes("top");
        let m = 0,
          x = 0;
        Array.from(L)
          .reverse()
          .forEach((S, N) => {
            const T = S;
            T.classList.add("Toastify__toast--stacked"),
              N > 0 && (T.dataset.collapsed = `${r}`),
              T.dataset.pos || (T.dataset.pos = h ? "top" : "bot");
            const w = m * (r ? 0.2 : 1) + (r ? 0 : p * N);
            T.style.setProperty("--y", `${h ? w : -1 * w}px`),
              T.style.setProperty("--g", `${p}`),
              T.style.setProperty("--s", "" + (1 - (r ? x : 0))),
              (m += T.offsetHeight),
              (x += 0.025);
          });
      }
    }, [r, s, n]),
    H.createElement(
      "div",
      {
        ref: l,
        className: "Toastify",
        id: f,
        onMouseEnter: () => {
          n && (i(!1), J.pause());
        },
        onMouseLeave: v,
      },
      o((y, L) => {
        const p = L.length ? { ...c } : { ...c, pointerEvents: "none" };
        return H.createElement(
          "div",
          { className: C(y), style: p, key: `container-${y}` },
          L.map((h) => {
            let { content: m, props: x } = h;
            return H.createElement(
              hu,
              {
                ...x,
                stacked: n,
                collapseAll: v,
                isIn: a(x.toastId, x.containerId),
                style: x.style,
                key: `toast-${x.key}`,
              },
              m
            );
          })
        );
      })
    )
  );
}
const gu = "/assets/bg-banner-Bvarsy5O.png",
  yu = "/assets/logo-dog-CEiueBAK.png",
  r3 =
    "data:image/png;base64,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",
  i3 =
    "data:image/png;base64,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",
  xu = "/assets/pattern-CWiOv6tp.png",
  wu = "/assets/list-DbUJvp8-.png",
  Lu = "/assets/meme-CFFppLlp.png",
  Su = "/assets/bg-btn-ca-DqGbWC3t.png",
  Eu = "/assets/list-meme-DarRucVv.png",
  Tu = "/assets/number-tokenomic-Bcky3h8V.png",
  Au = "/assets/list-tokenomic-D_qc7k4r.png",
  ku = "/assets/img-dog-star-Byxwnroe.png",
  l3 = "/assets/token-image-CWZNRKGL.png",
  Nu = "/assets/list-card-DnsLSVJ1.png",
  Mu = "/assets/Money-BElH3Qrk.png",
  Pu = "/assets/buy-now-6qLANdGZ.png",
  Ou = "/assets/bg-footer-Cyt16YqE.png",
  Du =
    "data:image/png;base64,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",
  Hu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnoAAAC8CAMAAADYWvO+AAAAbFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAgICDf398QEBDv7+9AQEBgYGC/v7+fn5+AgIDPz89/f3+Pj49wcHAwMDBQUFCvr69vb2+QkJAnGFuhAAAAEHRSTlMAIN9AEO+/n39gj3DPMFCvFeyWVwAACthJREFUeNrs2QmumzAUhWHiicEhuWYwkFlv/4uskSBOn4KE0tcrtZxvDb+OjUkAAAAAAAAAAAAAAFaQmUkAuMlMOOcSAFYqM6E7pAe8lB27Q3rATBbazfwlAWDxOnj+UhMlAAxeBq8auyOkBxykcZPm1hMR0gMOyu7dxI/dIT1goTI9D96lJUJ6wGAOLw4e0gMGU3jxhof0gMEcXjxpkR5wsVN41Rge0gMuUkzhDUSE9ICLNDE8pAdsVBHDQ3rAx+rnxwXSAz7SxPCQHjCJZ21XEyE94CPF888F0gMmcfKaKxHSAy5x8r5aQnrAJU5e1RMhPWBUPicP6QEnq+fJQ3rASKXz5CE94FSKefKQHnDKtQu6lpAesCrmtzykB5yUcUFVE9JbR+2+SeAjOzEdtkjvvV0p8zwr0tQYIYRbIMTemGNaZDaXEjGuUWoXXImQ3rfgclukRmj3Eb03x8IeEOGy3AVNT0hvoso8C8W5HyNMmh2kSuB32XTNQ3ph5w423Wv3l2hTWFkm8Fqeb2nj6Sm5Lrqqunv/6ILbKbp1gff+XjUrAkwtFnB+VPki2nB66mCPwi1qKt91p+vQn+ua1qjPfT9cTyHFyi3aH7ON95e64EKvtpTeuHViqbhHdxr6uqU/0Z776+nhq6X+rEw2KnXBQKv8b+mpQ2H0u+bu3W041/SzQoI3f3dvmGKL8zeW13xe3r+b3i/27mTJTRgIwLDYF+MZLSzD2MaQvP87xnKIBcGT4LEat0DfKTnlkL+6JaDKl+yyu9GdOkEhHbrP9k6AWfq2rfyu5R3oMwxMz/fScHp7aD8Bo5sG2JT5dPptZ/nqKM+09JzdZMnm7emjoLBm9he8J5t4/hzrKM+o9LzUZWNlUwv6Soe6OrORbP3DT095xqTnJ1HAhvJSDjsMiq4Z5xdEqz75aSrPjPT825pV2VFUJvm9J2utL9FUngHpXbpjQ+cGybT7m6grvv769oF6nvcU7On53mje5W2NM7s/DqeSDURvZGWu3+edqAa40/PSYXe8QbZl7yvqKmc3brSqW4cvyztSHRCn58fD7sqjEd31Poar113RE5e0/2JAA7TpeeGoO0FNM6rvfSWLN5b/GVQPnOn5cWB2d9P63HgFo2/P+i9DdcCY3nDg5UbtWUXVx26MP/XJK0aurTx06fm7THVXmd3dVVGXg1MfMVmoHqtogCy94aYtT7ifo8wnGn6LLzV378bqcqsDqvS8SA08Mx6kzNa1au8aGp8jH+dTfRCl54UrHHiK+MHNPvS56oqhBZr0vHBVJ7y71KkvNC++WPNBjyJJbxDecX0DTzlUpsbnqGfJmqBIT4V3XuGmHRMVNzI+uW4LqhOC9FR45Vo37Yiob/GZc+GQ61ZQrV6e3tbCu6q5YbddRz1X0Yi8khNtMDxqXnwRwLp9aXp+HGwzPDqIL4gJeom63epEXibZcHhSzU15veYyVlH9yIt44bbDo1TFl+Heuon6akAr8hJ+yn7j2w1POvbxYX6167jyjgGAvMKu37X5iW6cqNBv3ZgxTiGQ5TnhFt5czCVadvWOdPA5IHcMiSzuz722NPXrY73UkQ/nXTcCGnrLp7fP7CFv4thvXYSDD2zoLZ5ebHftPaLCOvjAht7C6e0zu2u/UHOUgw9u6C2b3i6w99ovFQ2Tgh3BBOp6KxFg04tta3ftfYLje63rgg29BdPz+pHXUesrRya5eL7kUy8yAJCFpHbkzSA4rtuGensLgCzCyewpb5aiwfRW11NfiAIgS/ACe7Gdqb/quih+ECtirKRgyAJidmVH3iyixbJ0ffVkBQIB50f29cVjjkxKfbIk33H23kXSu/xRjoyCgiHQHJdJpb1fzHfgyzxedvZvSRxFYeYG7L6KwiHA9i6TjtR6gGhB23PekjTKXPZ/HYVDYCVMyu2yfUy/dINEe3RJ/K8fb835QH75OwVEQMVMOtub7eO6fHDZAPvF4JyXVfNZ1x8fQhR07CfovgVOL2VSZY953yG4tvb2l+omP2X4WXeqtntK0PstaHp+ZI95zxBndhE9PezCgA3wtqkPxZx/HvZ+C5menzGpptZ3Newi9Ml3jbPLSxXdDB1jJYVEIKh3Z/mBWr/auxf1tGEYCsBKWiCsrJNygZB0UMb7v+OSrRvdfZOlMKLzPwLfwbZkx9Z7ksHmXnc18OtX5Y7//pDhTqRjT+Tg0s4rUWCkea9rstwVy1eD3ZPqaa+jSMue6DMk7z91qi/ZUzyypIvdqBIRdkUX5sk7orRN15efsqfIXZnykKH/Uo/JQ5Zj78xMdcneP+Ru+77iJAeRA7uigU/ydgwmqvKvao37YnN5L7jhVFuRE7sie/dInqVL9v7yjkybh1trkYpdkb0NkmfqJXvL395UaP3uQy9Ssy8yt0LyjL1kb/WnAa82fMmwda8ymKwVSJ65l+wVv3tUrn5u2dDZvcpg8+Shq+KiqkXk4SczrdNNIgeRM/siW48yKJE8e/2YvTt6LXuzcLuZdSvSsi8ylS2wh+GlFZFF9uP1+/WhZ3tHkZ592SYvR/L8vBeR/P4SPNc7u0SkYV9kaYOzKp6eRGQ5SfC4EanZGRkq8LWtr93n5d59IZ+Ufk/K9SJHdkZ21jiT7Kw5iizeFu53xU3S1mPLEgMNPW9VOdHrraebil6Otoq//hI8V/sJRhHThV6N4tbZuZbBB+fg3Vb0HvEJkL9+O9XTXp1Ix84sO3ofGBw1nQzKE7u7qeitRKRkcNSWMnhq2N8tRW8tAyz0HDWHSS/HPN9K9LIcvWRfbTntfcDN1j/lZnerbBncHOZ4HzAZyNBXcVUdZ3kFOhnAdOvqXM9wyBtQujWqW0fNYZZD3sCixkB16+Vl17ac5UE0SlagmeznVI+/7jx3xilVhoPJfrq5TrYjSrXC3q2XZjfbyXZEiTLUGF6q47zvTLIY9PA0gYe+nPkimtJk2Mdwcqrn3i2lNCs0Vnyc5/9xHyXJ8DmGjy5A34CSFBj0XHQR3liiJDlWeh66EFcmUYo1ylsPXYxlDKVYoqdnLkzymBJk2MgwFyd5TAlWGPSsBUoeU4I8yo80mUjJY9J7RGfFWKjkMemt0FmxtheRZw6C9BYoMoz1dYR+3heYb/8fVTn/3bNXSG0VaG6YRBMreUxqOeZbW88iMu+zKt8irbciEmZZMoVu7ufzvkdaD6hvTZ3CXUSdsn97ZrBSleGWzqS1iLUw8RasxBiR0h32by11ATtVpPQQbn7wdIpWYoxI6R2WenaqMs7O7QUp5TifbGcXb6E3SDglymBjH/PIrX4D98hgoirnfcvAr5BOgSrDzC7oA1/6KqNjsNDGnG6Z9Y8unxgshKxuR6SDD3CtnENWtyNSyXBsxUhVBmwmf0Yqd+itGNnF3ZAklce4P5itKmqNMSCVAof1bOwCN6lI5Q2iZ6IKeGDlK1JZRW0IGNtF/h1JZRn5J7MSfNDTRg+bGemCD3qI3tVEH/SYVHJEL1ns8pYRvSuq6ti7kYje1eyD9+URvasp425kjPTROzAkaYMPeoyrbK8jemdlQCqb6D9buqaOfn0DqSxjtwXSocjQRu8dPkhL9Rz+G3q8mHEdTeydjBGpvMEp5UR7HDsjlQf8Z5Ngvh2QyjrYtb/2wte32ui9DfxJgQH0k0ekkgl20pIc0Bhl0lngp0uyxe0NTDo5JowUDT6hV0dvhd8uRYuWPPNHhXd9VnM+FXoAAAAASUVORK5CYII=",
  Ru =
    "data:image/png;base64,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",
  ju = "/assets/icon-layer-left-B0MMKVTC.png",
  Iu =
    "data:image/png;base64,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",
  Vu = "/assets/how-to-buy-1-Drp5D80r.png",
  zu = "/assets/how-to-buy-2-D5JBK7UV.png",
  bu = "/assets/how-to-buy-3-CLmaQ7E7.png",
  Bu = "/assets/how-to-buy-4-umGNdhI5.png",
  Fu = "/assets/list-card-mobile-tPp-C0MX.png",
  Uu = "/assets/dont-worrry-DId2zFN5.png",
  _u = (e, t) =>
    E.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 14,
        height: 14,
        viewBox: "0 0 14 14",
        fill: "none",
        ref: t,
        ...e,
      },
      E.createElement(
        "g",
        null,
        E.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M4.35731 3.77401C4.52817 3.60316 4.80518 3.60316 4.97603 3.77401L7 5.79799L9.02398 3.77401C9.19483 3.60316 9.47184 3.60316 9.6427 3.77401C9.81355 3.94487 9.81355 4.22188 9.6427 4.39273L7.30936 6.72607C7.22732 6.80811 7.11604 6.85421 7 6.85421C6.88397 6.85421 6.77269 6.80811 6.69065 6.72607L4.35731 4.39273C4.18646 4.22188 4.18646 3.94487 4.35731 3.77401ZM4.35731 7.27401C4.52817 7.10316 4.80518 7.10316 4.97603 7.27401L7 9.29799L9.02398 7.27401C9.19483 7.10316 9.47184 7.10316 9.6427 7.27401C9.81355 7.44487 9.81355 7.72188 9.6427 7.89273L7.30936 10.2261C7.22732 10.3081 7.11604 10.3542 7 10.3542C6.88397 10.3542 6.77269 10.3081 6.69065 10.2261L4.35731 7.89273C4.18646 7.72188 4.18646 7.44487 4.35731 7.27401Z",
          fill: "white",
        })
      )
    ),
  Wu = E.forwardRef(_u),
  Gu = (e, t) =>
    E.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 8,
        height: 13,
        viewBox: "0 0 8 13",
        fill: "none",
        ref: t,
        ...e,
      },
      E.createElement("path", {
        d: "M8 6.5L3.85426e-07 13L9.53674e-07 -3.49691e-07L8 6.5Z",
        fill: "#FAD34B",
      })
    ),
  Yu = E.forwardRef(Gu),
  Zu = (e, t) =>
    E.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 23,
        height: 24,
        viewBox: "0 0 23 24",
        fill: "none",
        ref: t,
        ...e,
      },
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.4223 2.25H16.5801C17.0668 2.24999 17.4729 2.24998 17.8047 2.27974C18.1508 2.31078 18.4757 2.3779 18.783 2.54973C19.254 2.81317 19.6378 3.23344 19.8782 3.75131C20.0348 4.08857 20.096 4.44522 20.1242 4.82511C20.1514 5.18934 20.1513 5.63518 20.1513 6.16933V11.8303C20.1513 12.3644 20.1514 12.8102 20.1242 13.1745C20.096 13.5544 20.0348 13.911 19.8782 14.2483C19.6379 14.7659 19.254 15.1869 18.7827 15.4505C18.4756 15.6222 18.151 15.6893 17.8053 15.7203C17.4739 15.75 17.0684 15.75 16.5827 15.75H14.6843V17.8335C14.6843 18.3666 14.6844 18.8117 14.6573 19.1754C14.629 19.5548 14.5679 19.9111 14.4114 20.2481C14.1713 20.7653 13.7878 21.1867 13.3162 21.4505C13.0091 21.6222 12.6845 21.6893 12.3389 21.7203C12.0075 21.75 11.602 21.75 11.1163 21.75H5.95248C5.46677 21.75 5.0611 21.75 4.72959 21.7203C4.38385 21.6893 4.05904 21.6222 3.75192 21.4505C3.28008 21.1866 2.89716 20.7654 2.65713 20.2484C2.50057 19.9111 2.43941 19.5546 2.41113 19.1747C2.38402 18.8106 2.38402 18.3648 2.38403 17.8306V12.1698C2.38402 11.6356 2.38402 11.1897 2.41113 10.8253C2.4394 10.4454 2.50054 10.0886 2.65713 9.75131C2.89735 9.23386 3.28046 8.81339 3.75192 8.54973C4.05925 8.37787 4.38434 8.31077 4.73051 8.27974C5.06246 8.24998 5.46878 8.24999 5.95548 8.25H7.85084V6.16979C7.85083 5.63561 7.85082 5.18967 7.87793 4.82534C7.90621 4.44541 7.96734 4.08861 8.12393 3.7513C8.36415 3.23386 8.74726 2.81338 9.21873 2.54973C9.52606 2.37787 9.85115 2.31077 10.1973 2.27974C10.5293 2.24998 10.9356 2.24999 11.4223 2.25ZM9.21754 8.25H11.1133C11.6 8.24999 12.0061 8.24998 12.3379 8.27974C12.684 8.31078 13.0089 8.37791 13.3162 8.54973C13.7872 8.81317 14.171 9.23344 14.4114 9.75131C14.5679 10.0884 14.629 10.4449 14.6573 10.8243C14.6844 11.1882 14.6844 11.6334 14.6843 12.1665L14.6843 14.25H16.555C17.0755 14.25 17.4249 14.2494 17.694 14.2253C17.955 14.2018 18.0799 14.16 18.1622 14.114C18.3767 13.9941 18.5514 13.8023 18.6605 13.5673C18.7025 13.4767 18.7407 13.3395 18.7621 13.0523C18.7841 12.7564 18.7846 12.3722 18.7846 11.7998V6.19978C18.7846 5.62735 18.7841 5.24314 18.7621 4.94726C18.7407 4.66013 18.7025 4.52285 18.6605 4.43229C18.5515 4.19751 18.3772 4.0063 18.1625 3.88624C18.08 3.84008 17.9549 3.79821 17.6934 3.77476C17.4239 3.75058 17.0739 3.75 16.5523 3.75H11.45C10.9284 3.75 10.5783 3.75058 10.3086 3.77476C10.0468 3.79822 9.92167 3.84012 9.83919 3.88624C9.62489 4.00608 9.45086 4.19709 9.34167 4.43229C9.29965 4.52281 9.26148 4.66016 9.2401 4.94745C9.21807 5.24344 9.21754 5.62778 9.21754 6.2002V8.25ZM4.84177 9.77476C4.58001 9.79822 4.45486 9.84012 4.37239 9.88624C4.15809 10.0061 3.98406 10.1971 3.87487 10.4323C3.83285 10.5228 3.79467 10.6602 3.77329 10.9474C3.75127 11.2434 3.75073 11.6278 3.75073 12.2002V17.8002C3.75073 18.3726 3.75127 18.7568 3.77329 19.0526C3.79466 19.3396 3.83281 19.4768 3.87487 19.5674C3.98426 19.803 4.15847 19.9943 4.37239 20.114C4.4547 20.16 4.57962 20.2018 4.8409 20.2253C5.11013 20.2494 5.45964 20.25 5.98019 20.25H11.0886C11.6092 20.25 11.9585 20.2494 12.2275 20.2253C12.4885 20.2019 12.6133 20.16 12.6957 20.114C12.9098 19.9942 13.0844 19.8025 13.1937 19.5671C13.2357 19.4767 13.2738 19.3397 13.2951 19.0532C13.3171 18.7579 13.3176 18.3744 13.3176 17.8031L13.3176 12.1969C13.3176 11.6256 13.3171 11.242 13.2951 10.9465C13.2738 10.6597 13.2356 10.5226 13.1937 10.4323C13.0847 10.1975 12.9104 10.0063 12.6957 9.88624C12.6131 9.84008 12.4881 9.79821 12.2266 9.77476C11.9571 9.75058 11.6071 9.75 11.0855 9.75H5.98319C5.46164 9.75 5.11146 9.75058 4.84177 9.77476Z",
        fill: "currentColor",
      })
    ),
  To = E.forwardRef(Zu),
  Ku = (e, t) =>
    E.createElement(
      "svg",
      {
        width: 459,
        height: 59,
        viewBox: "0 0 459 59",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: t,
        ...e,
      },
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M436.625 1.0957H439.593L443.389 4.89167V8.4082C443.389 9.00045 443.462 9.84987 443.669 11.0028L443.897 12.2703L443.744 12.8816L443.857 14.0152V15.34L444.232 26.6841V30.9082C444.232 32.2246 444.214 33.6668 444.178 35.2331C445.736 34.9301 447.522 34.8457 449.295 34.8457H450.326L452.919 34.6836L454.12 35.134C454.459 35.2609 455.165 35.5455 455.895 36.0926C456.47 36.5241 458.389 38.1265 458.389 41.0332V42.3551L457.975 43.4112C457.801 43.8533 457.704 44.2247 457.654 44.5312L457.292 46.7497L457.05 51.3457H456.128C456.111 51.3877 456.093 51.4294 456.075 51.4709C455.97 51.718 455.774 52.1494 455.473 52.6151C455.322 52.8501 455.061 53.2232 454.676 53.6189C454.328 53.9765 453.59 54.6548 452.433 55.0887L451.555 55.4177L437.653 56.0982C436.949 56.2203 436.209 56.2868 435.582 56.3332C434.769 56.3935 433.798 56.4412 432.687 56.4788C431.591 56.7273 430.467 56.8669 429.331 56.9209L425.629 58.2669L420.889 53.5263V50.7194L421.359 40.2147L421.366 39.4422C422.174 37.9659 422.858 36.4259 423.42 34.8223C424.06 32.8217 424.466 31.3648 424.638 30.4515C424.64 30.4386 424.643 30.4257 424.645 30.413C424.703 30.0964 424.732 29.8474 424.732 29.666C425.107 28.0566 425.295 25.8379 425.295 23.0098L425.201 21.2285V20.7598C425.189 20.4561 425.166 20.2139 425.132 20.0332C425.105 19.8845 425.071 19.7774 425.03 19.7119C424.997 19.6605 424.961 19.6348 424.92 19.6348C424.748 18.4473 424.592 17.8535 424.451 17.8535C424.279 17.0098 424.092 16.5098 423.889 16.3535C423.704 15.685 423.331 14.9387 422.771 14.1148C422.731 14.0567 422.691 13.9983 422.649 13.9395C422.627 13.9083 422.605 13.8771 422.583 13.8457C422.138 13.2234 421.59 12.5585 420.94 11.8511C420.898 11.8062 420.857 11.7611 420.815 11.7158L420.924 11.6059L420.889 11.033V9.62695C420.889 6.46908 423.071 4.79664 423.896 4.28115C424.809 3.71042 425.708 3.45632 426.183 3.33735C426.814 3.17973 427.497 3.07393 428.18 2.9998C428.562 2.86601 428.88 2.78908 429.075 2.74491C429.524 2.64275 429.998 2.57073 430.462 2.51796C430.729 2.431 430.971 2.366 431.164 2.31782C431.561 2.21858 431.993 2.13122 432.439 2.05284C432.647 1.979 432.824 1.92433 432.946 1.88781C433.224 1.8045 433.534 1.72173 433.863 1.64014C434.172 1.51072 434.427 1.43219 434.592 1.38515C435.42 1.14867 436.173 1.11185 436.518 1.09953L436.625 1.0957ZM426.982 9.4398C426.92 9.49828 426.889 9.56066 426.889 9.62695V10.8457L427.076 13.8457V13.9395L426.982 14.0332C426.995 14.0332 427.007 14.0456 427.02 14.0704C427.263 14.5664 427.407 20.0228 427.451 30.4395L427.357 40.377L426.889 50.8535V51.041L427.17 51.3223L428.201 50.9473C428.398 50.9473 428.591 50.9442 428.781 50.9382C429.201 50.9248 429.606 50.8966 429.995 50.8535C430.662 50.7798 431.282 50.6626 431.857 50.502C432.228 50.4912 432.579 50.4795 432.912 50.467C434.991 50.3885 436.327 50.2751 436.92 50.127L450.326 49.4707C450.451 49.4238 450.639 48.9863 450.889 48.1582C450.914 47.6445 450.945 47.2012 450.98 46.8283C451.073 45.8399 451.199 45.3457 451.357 45.3457C451.42 44.1582 451.545 43.5645 451.732 43.5645C451.814 43.0669 451.934 42.5627 452.095 42.0519C452.181 41.7768 452.279 41.4997 452.389 41.2207V41.0332C452.389 40.9395 452.264 40.8457 452.014 40.752L450.514 40.8457H449.295C448.56 40.8457 447.896 40.8629 447.302 40.8972C446.919 40.9193 446.565 40.9486 446.241 40.9851C446.212 40.9883 446.184 40.9916 446.155 40.9949C445.663 41.0531 445.241 41.1284 444.889 41.2207C444.58 41.2285 444.276 41.2382 443.976 41.2498C442.026 41.3252 440.248 41.4819 438.644 41.7198C438.505 41.7403 438.368 41.7615 438.232 41.7832L437.951 41.6895C437.971 41.2431 437.989 40.8042 438.007 40.3728C438.074 38.7138 438.126 37.1653 438.164 35.7273C438.209 33.9526 438.232 32.3462 438.232 30.9082V28.8457L438.139 28.377L438.232 28.0957V26.7832L437.857 15.4395V14.3145L437.67 12.4395L437.764 12.0645C437.514 10.6738 437.389 9.45508 437.389 8.4082V7.37695L437.107 7.0957H436.732C436.295 7.11133 436.076 7.17383 436.076 7.2832C435.932 7.31571 435.796 7.34696 435.668 7.37695C434.69 7.60654 434.201 7.76279 434.201 7.8457C432.842 8.04883 432.092 8.23633 431.951 8.4082C431.749 8.422 431.561 8.43716 431.389 8.45366C430.537 8.53509 430.048 8.64948 429.922 8.79682C429.9 8.82253 429.889 8.84924 429.889 8.87695C428.242 8.97986 427.273 9.16747 426.982 9.4398ZM413.193 20.0332H412.497L412.837 19.6938C412.964 19.8123 413.083 19.9255 413.193 20.0332Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M408.014 1.16602H411.457L411.865 1.22229C413.078 1.38961 414.184 1.57504 415.111 1.79072C415.573 1.8982 416.085 2.03448 416.589 2.21305C416.75 2.26988 416.971 2.3517 417.229 2.46568C419.524 3.15995 421.724 4.62414 423.597 6.05714L423.913 6.29863L424.194 6.57963C425.128 7.51413 426.058 8.52114 426.892 9.59026C426.89 9.60236 426.889 9.61458 426.889 9.62695V10.8457L427.076 13.8457V13.9395L426.982 14.0332C427.06 14.0332 427.129 14.5025 427.188 15.441C427.218 15.9275 427.246 16.5402 427.272 17.2789C427.292 17.8679 427.311 18.5369 427.328 19.2862C427.338 19.7205 427.348 20.1818 427.357 20.67C427.357 20.6998 427.358 20.7297 427.358 20.7598C427.36 20.8765 427.362 20.9948 427.364 21.1147C427.365 21.1525 427.366 21.1904 427.366 21.2285C427.375 21.7564 427.383 22.3134 427.391 22.8995C427.391 22.9361 427.392 22.9729 427.392 23.0098C427.417 24.9228 427.435 27.1415 427.448 29.666C427.449 29.875 427.45 30.0862 427.451 30.2994C427.451 30.346 427.451 30.3927 427.451 30.4395L427.357 40.377L427.331 40.9752C426.288 43.0849 425.044 45.0897 423.602 46.9855L423.442 47.1957L423.264 47.3911C422.184 48.5789 421.193 49.6072 420.31 50.432C419.689 51.0123 418.894 51.7124 418.008 52.2837C416.535 53.4518 414.554 54.4442 412.66 55.2953L412.459 55.3857L412.252 55.461C411.19 55.8469 410.285 56.1619 409.57 56.3875C409.218 56.4988 408.847 56.6092 408.492 56.6978L408.47 56.7035C408.327 56.7396 407.923 56.8414 407.404 56.9014L404.213 57.416H400.545C399.246 57.416 397.93 57.0527 397.141 56.8206C396.147 56.5283 394.972 56.121 393.657 55.6277L392.965 55.3684L389.087 52.6935L388.632 52.2005C387.548 51.0236 386.6 49.9129 385.854 48.8982C385.367 48.2357 384.699 47.2658 384.226 46.1217C383.687 45.1529 383.229 44.045 382.832 42.8571C382.704 41.9553 382.554 41.0348 382.381 40.0957C382.296 39.3949 382.207 38.8131 382.115 38.3504C381.999 37.765 381.876 37.3702 381.748 37.166C381.679 37.0566 381.609 37.002 381.537 37.002H381.514V36.7109L381.416 33.9785L381.514 31.2462V30.6766L381.566 30.2844C381.918 27.6225 382.46 25.1221 383.223 22.814L383.26 22.7015L383.951 20.8592V15.791H386.212L386.529 15.3745L387.687 12.9785H388.355L390.235 10.51L390.44 10.2909C391.244 9.42896 391.974 8.68026 392.602 8.09298C392.914 7.80151 393.26 7.49304 393.62 7.21099C393.755 7.105 393.989 6.92391 394.3 6.72356C395.916 5.42972 397.618 4.32939 399.408 3.52143C399.941 3.1992 400.408 3.01225 400.663 2.92704C400.709 2.91171 400.755 2.89705 400.8 2.88302C401.038 2.775 401.245 2.69477 401.4 2.63752C401.756 2.50633 402.13 2.39266 402.499 2.29336C402.499 2.29327 402.499 2.29345 402.499 2.29336C403.169 2.00006 403.795 1.86008 404.102 1.79604C404.47 1.71939 404.87 1.65609 405.281 1.60243C405.517 1.52215 405.711 1.47114 405.84 1.43891C406.636 1.23983 407.411 1.19111 407.889 1.17122L408.014 1.16602ZM402.982 8.57227C402.607 8.57227 402.42 8.63477 402.42 8.75977C400.92 9.35352 399.357 10.3223 397.732 11.666C397.326 11.8379 396.357 12.7441 394.826 14.3848L391.826 18.3223C391.826 18.7598 391.701 18.9785 391.451 18.9785C390.545 20.8535 390.045 21.791 389.951 21.791C389.951 22.2129 389.795 22.6816 389.482 23.1973L388.92 24.6973C388.295 26.5879 387.826 28.7129 387.514 31.0723V31.3535L387.42 33.9785L387.514 36.6035V37.166C388.186 40.2285 388.904 42.3535 389.67 43.541C389.904 44.416 391.029 45.9473 393.045 48.1348L395.764 50.0098C398.264 50.9473 399.857 51.416 400.545 51.416H403.732L406.639 50.9473C406.951 50.9473 408.139 50.5723 410.201 49.8223C412.357 48.8535 413.795 48.041 414.514 47.3848C415.342 46.9473 416.779 45.6035 418.826 43.3535C420.811 40.7441 422.342 37.9004 423.42 34.8223C424.295 32.0879 424.732 30.3691 424.732 29.666C425.107 28.0566 425.295 25.8379 425.295 23.0098L425.201 21.2285V20.7598C425.17 20.0098 425.076 19.6348 424.92 19.6348C424.748 18.4473 424.592 17.8535 424.451 17.8535C424.279 17.0098 424.092 16.5098 423.889 16.3535C423.482 14.8848 422.17 13.041 419.951 10.8223C417.889 9.24414 416.264 8.33789 415.076 8.10352C414.796 7.89584 414.108 7.68815 413.014 7.48047C413.014 7.46942 413.014 7.45835 413.014 7.44727L413.014 7.48047C412.955 7.4694 412.896 7.45834 412.835 7.44727C412.321 7.35352 411.725 7.25977 411.045 7.16602H408.139C407.389 7.19727 407.014 7.29102 407.014 7.44727C405.514 7.58789 404.764 7.74414 404.764 7.91602C403.639 8.16602 403.045 8.38477 402.982 8.57227ZM404.67 19.0723C404.982 18.7598 405.232 18.6035 405.42 18.6035L406.826 18.1348H407.951L408.045 18.041L408.139 18.1348H409.732C410.982 18.5566 411.607 18.8066 411.607 18.8848L412.357 19.2598C413.592 20.3535 414.217 21.0723 414.232 21.416C414.92 22.541 415.264 24.2598 415.264 26.5723C415.264 28.7441 414.857 30.8379 414.045 32.8535C413.592 34.2598 412.811 35.6973 411.701 37.166C411.092 37.8301 410.561 38.3574 410.107 38.748C410.06 38.7887 410.014 38.8278 409.969 38.8655C409.577 39.19 409.248 39.4048 408.982 39.5098C408.686 39.7429 408.058 39.9616 407.101 40.166C406.646 40.263 406.117 40.3568 405.514 40.4473C404.576 40.3535 404.107 40.2598 404.107 40.166C403.076 40.166 401.92 39.6348 400.639 38.5723C400.232 38.1816 399.826 37.6191 399.42 36.8848C398.717 35.3848 398.342 33.8223 398.295 32.1973V32.1035L398.389 32.0098L398.295 31.4473C398.295 28.1504 399.295 25.0879 401.295 22.2598C402.639 20.4629 403.764 19.4004 404.67 19.0723ZM406.149 25.7873C404.955 27.4974 404.383 29.2032 404.304 31.0078L404.815 34.0691L404.758 34.126C404.761 34.1348 404.765 34.1435 404.769 34.1523C404.772 34.157 404.775 34.1615 404.777 34.166H406.179L406.276 34.1276C406.46 33.9621 406.724 33.7041 407.078 33.3274C407.771 32.3717 408.145 31.6 408.334 31.0134L408.4 30.8092L408.48 30.6103C409.005 29.3072 409.264 27.9749 409.264 26.5723C409.264 25.694 409.197 25.0974 409.122 24.7255C409.094 24.5828 409.068 24.4935 409.054 24.4481L408.947 24.2733C408.939 24.2661 408.932 24.2588 408.924 24.2513L408.691 24.1348H408.093L407.968 24.2592L407.206 24.535C406.98 24.7579 406.628 25.1524 406.149 25.7873ZM409.221 24.5528C409.227 24.5601 409.23 24.5636 409.23 24.5634C409.23 24.5633 409.228 24.5609 409.224 24.5562C409.223 24.5551 409.222 24.554 409.221 24.5528Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M377.427 0.908203H377.506C378.198 0.908203 379.475 0.952385 380.789 1.47797C381.498 1.76159 382.541 2.31293 383.434 3.3835C384.231 4.34094 384.71 5.47931 384.86 6.65679L385.381 9.676V16.377H385.208C385.181 16.693 385.149 16.9962 385.113 17.2857C385.032 17.9467 384.915 18.661 384.731 19.3534C384.578 19.9264 384.241 21.0442 383.446 22.1134L381.322 24.9697L377.797 24.475C377.302 24.4055 376.428 24.3457 375.068 24.3457C374.215 24.3457 373.638 24.3864 373.283 24.4337C373.238 24.4397 373.2 24.4453 373.169 24.4504L372.896 24.5812L372.305 24.7291C372.018 24.8006 371.552 24.9718 370.894 25.3532C370.216 25.8971 369.748 26.334 369.442 26.6628C369.268 26.8494 369.18 26.9662 369.146 27.0136L368.975 27.3917V32.2207H368.364L368.393 32.2895C368.71 33.0262 369.1 33.4056 369.671 33.689L369.895 33.7999L370.056 33.8973C370.081 33.9075 370.131 33.9273 370.212 33.9534C370.412 34.0179 370.732 34.1009 371.202 34.181L371.801 34.2832H372.525C373.426 34.1632 374.098 34.0509 374.571 33.9523C374.767 33.9116 374.9 33.8789 374.983 33.8569L376.527 33.1217C376.797 32.9552 376.988 32.8294 377.113 32.7416L378.687 31.002H381.537C385.124 31.002 386.744 33.817 386.962 34.1951L386.965 34.2015C387.176 34.5681 387.34 34.9308 387.466 35.2571L387.514 36.6035V37.166C387.663 37.8463 387.814 38.4803 387.968 39.0681C387.998 39.183 388.029 39.2961 388.059 39.4075C388.264 40.1632 388.474 40.8375 388.687 41.4304C388.999 43.5063 389.209 45.5211 389.31 47.4719L389.482 50.7703L386.786 52.6794C385.791 53.3846 384.723 53.9605 383.593 54.4025C383.25 54.596 382.964 54.7225 382.787 54.7981C382.573 54.8901 382.357 54.9726 382.146 55.0468C381.603 55.322 381.128 55.4694 380.865 55.5445C380.665 55.6016 380.465 55.6504 380.268 55.6923C379.865 55.8554 379.523 55.9537 379.319 56.0093C378.816 56.1465 378.267 56.2533 377.728 56.34C377.643 56.3659 377.567 56.3877 377.5 56.4059C377.06 56.5265 376.629 56.6056 376.293 56.6598C375.781 56.7424 375.186 56.8145 374.535 56.8797C374.457 56.8987 374.383 56.9157 374.312 56.9309L373.991 57.252H371.891L365.6 57.8636V56.951C365.201 56.8917 364.806 56.8231 364.415 56.7448C363.361 56.6454 362.405 56.3652 361.595 56.0463C359.912 55.6159 358.233 54.8236 356.69 53.9681L356.444 53.8316L352.159 50.8998L352.104 50.4035L352.09 50.3926L351.716 49.9457C350.662 48.6848 349.753 47.5207 349.076 46.5059C348.741 46.0041 348.382 45.4172 348.084 44.79C348.012 44.6383 347.905 44.4071 347.794 44.1111C347.368 43.3654 347.071 42.6387 346.866 42.0981C346.528 41.2086 346.21 40.1883 345.906 39.0773C346.048 38.8101 346.185 38.5408 346.319 38.2695C346.436 38.0312 346.55 37.7912 346.662 37.5497C347.07 36.662 347.438 35.7528 347.764 34.8223C347.886 34.4402 348 34.078 348.105 33.7356C348.146 33.6027 348.185 33.4727 348.223 33.3457C348.792 31.4593 349.076 30.2328 349.076 29.666C349.247 28.9328 349.379 28.0732 349.472 27.0871C349.524 26.5369 349.564 25.9473 349.591 25.3183C349.615 24.7716 349.63 24.1953 349.636 23.5892C349.638 23.399 349.639 23.2058 349.639 23.0098L349.545 21.2285V20.7598C349.539 20.6214 349.531 20.4958 349.521 20.3829C349.494 20.0815 349.453 19.8712 349.395 19.752C349.358 19.6738 349.314 19.6348 349.264 19.6348C349.221 19.3431 349.18 19.0872 349.14 18.8672C349.097 18.633 349.055 18.4393 349.014 18.2862C349.012 18.2796 349.011 18.273 349.009 18.2665C348.99 18.197 348.971 18.1363 348.953 18.0843C348.898 17.9304 348.846 17.8535 348.795 17.8535C348.635 17.0669 348.461 16.579 348.273 16.39L348.302 16.1895H350.073C351.144 14.5101 352.377 12.9126 353.761 11.3957L353.86 11.2871L353.964 11.1835C355.261 9.8948 356.413 8.81116 357.381 7.99757C357.861 7.59459 358.383 7.18352 358.916 6.82936C358.992 6.77887 359.092 6.71288 359.214 6.6373C359.488 6.40805 359.732 6.23753 359.904 6.12293C360.22 5.91244 360.55 5.72296 360.871 5.55443C361.069 5.40829 361.221 5.31409 361.295 5.26796L361.318 5.25381C361.703 5.01294 362.084 4.82658 362.412 4.68484C363.765 3.92048 365.149 3.25322 366.532 2.77872C367.12 2.46205 367.635 2.30291 367.935 2.22118C368.257 2.13331 368.573 2.07271 368.869 2.03097C369.227 1.91178 369.586 1.81214 369.91 1.72903C370.708 1.52439 371.705 1.31649 372.84 1.10424L373.309 1.01657L377.427 0.908203ZM362.881 11.502C362.256 11.6426 360.693 12.9551 358.193 15.4395C356.568 17.2207 355.225 19.0957 354.162 21.0645C353.834 21.8145 353.615 22.1895 353.506 22.1895C353.443 22.627 353.162 23.3457 352.662 24.3457C352.428 25.2832 352.271 25.752 352.193 25.752C352.006 26.877 351.85 27.4395 351.725 27.4395C351.287 30.2363 351.068 32.2051 351.068 33.3457L351.537 36.9082C352.193 39.4238 352.787 40.9863 353.318 41.5957C353.318 42.2051 354.318 43.7051 356.318 46.0957C357.303 46.8926 357.803 47.3613 357.818 47.502L359.6 48.7207C361.178 49.5957 362.459 50.127 363.443 50.3145C364.131 50.627 364.725 50.7832 365.225 50.7832C365.993 50.9559 366.815 51.0809 367.688 51.1582C368.395 51.2207 369.136 51.252 369.912 51.252H371.506L371.6 51.1582V51.252C371.628 51.2491 371.657 51.2464 371.685 51.2436C371.984 51.214 372.241 51.1855 372.457 51.1582C373.01 51.088 373.287 51.0255 373.287 50.9707C375.053 50.8145 376.021 50.6582 376.193 50.502C376.793 50.4202 377.262 50.3385 377.6 50.2567C378.037 50.151 378.256 50.0452 378.256 49.9395C379.1 49.8457 379.537 49.7207 379.568 49.5645C380.271 49.377 380.709 49.1895 380.881 49.002C381.756 48.7207 382.568 48.3145 383.318 47.7832C383.244 46.3432 383.102 44.8472 382.892 43.2952C382.752 42.2539 382.582 41.1874 382.381 40.0957C382.231 38.8586 382.07 37.9926 381.897 37.4975C381.782 37.1671 381.662 37.002 381.537 37.002H381.35C381.053 37.3301 380.396 37.7988 379.381 38.4082L377.412 39.3457C377.167 39.4683 376.804 39.5887 376.323 39.7069C376.305 39.7114 376.286 39.716 376.268 39.7205C376.243 39.7264 376.218 39.7323 376.193 39.7381C376.19 39.7389 376.187 39.7396 376.184 39.7404C375.668 39.8611 375.029 39.9795 374.267 40.0957C374.232 40.101 374.196 40.1063 374.161 40.1117C373.775 40.1694 373.359 40.2266 372.912 40.2832H371.318C370.568 40.2832 370.193 40.2207 370.193 40.0957C368.818 39.8613 367.756 39.5176 367.006 39.0645C365.115 38.127 363.74 36.6582 362.881 34.6582C362.615 34.3301 362.334 33.2988 362.037 31.5645V29.5957C362.365 27.3457 362.678 26.2207 362.975 26.2207C362.975 25.7207 363.037 25.4707 363.162 25.4707C363.443 24.7832 363.631 24.4395 363.725 24.4395C364.24 23.2988 365.49 21.9551 367.475 20.4082C368.662 19.6738 369.787 19.1738 370.85 18.9082C371.631 18.5332 373.037 18.3457 375.068 18.3457C376.553 18.3457 377.74 18.4082 378.631 18.5332C378.951 18.1027 379.17 16.9623 379.287 15.1122C379.321 14.5719 379.347 13.971 379.364 13.3097C379.37 13.074 379.375 12.8306 379.379 12.5796C379.38 12.5331 379.38 12.4864 379.381 12.4395V12.252L379.287 10.377H379.381V10.1895L378.912 7.4707C378.912 7.0957 378.443 6.9082 377.506 6.9082L373.943 7.00195C373.651 7.05659 373.376 7.10953 373.119 7.16077C371.461 7.49056 370.517 7.75012 370.287 7.93945C369.6 7.93945 369.256 8.0332 369.256 8.2207C368.084 8.51758 366.678 9.14258 365.037 10.0957C364.568 10.2676 364.318 10.4238 364.287 10.5645C363.35 10.9863 362.881 11.2988 362.881 11.502ZM368.975 26.2207C368.975 26.1809 368.977 26.1938 368.975 26.2489V26.2207Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M332.357 1.16602H335.801L336.208 1.22229C337.422 1.38961 338.527 1.57504 339.455 1.79072C339.917 1.8982 340.428 2.03448 340.933 2.21305C341.093 2.26988 341.315 2.3517 341.573 2.46568C343.868 3.15995 346.068 4.62414 347.941 6.05714L348.257 6.29863L348.538 6.57963C350.584 8.62616 352.609 11.0204 353.646 13.6532C353.92 14.1433 354.07 14.5429 354.137 14.7229L354.143 14.739C354.255 15.0354 354.349 15.3341 354.429 15.6243C354.643 16.119 354.762 16.5498 354.82 16.7719C354.893 17.0509 354.958 17.3457 355.015 17.6436C355.151 17.9979 355.229 18.2876 355.272 18.4608C355.319 18.6492 355.358 18.8364 355.39 19.0188C355.055 19.5244 354.739 20.0367 354.444 20.5556C354.405 20.6236 354.367 20.6916 354.329 20.7598C354.288 20.8341 354.247 20.9086 354.206 20.9832C354.191 21.0103 354.177 21.0373 354.162 21.0645C354.137 21.1213 354.113 21.176 354.089 21.2285C353.801 21.8691 353.607 22.1895 353.506 22.1895C353.482 22.3568 353.426 22.5654 353.338 22.8151C353.316 22.8774 353.292 22.9423 353.266 23.0098C353.124 23.3785 352.923 23.8238 352.662 24.3457C352.428 25.2832 352.271 25.752 352.193 25.752C352.006 26.877 351.85 27.4395 351.725 27.4395C351.598 28.2514 351.489 28.9936 351.399 29.666C351.375 29.8461 351.352 30.0212 351.33 30.1913C351.156 31.5734 351.068 32.6249 351.068 33.3457L351.537 36.9082C351.813 37.9648 352.077 38.8533 352.331 39.5736C351.167 42.2012 349.703 44.6744 347.946 46.9855L347.786 47.1957L347.608 47.3911C346.528 48.5789 345.536 49.6072 344.654 50.432C344.033 51.0123 343.238 51.7124 342.352 52.2837C340.878 53.4518 338.898 54.4442 337.004 55.2953L336.803 55.3857L336.595 55.461C335.534 55.8469 334.629 56.1619 333.914 56.3875C333.562 56.4988 333.191 56.6092 332.836 56.6978L332.813 56.7035C332.67 56.7396 332.267 56.8414 331.748 56.9014L328.557 57.416H324.889C323.59 57.416 322.274 57.0527 321.485 56.8206C320.491 56.5283 319.316 56.121 318.001 55.6277L317.309 55.3684L313.43 52.6935L312.976 52.2005C311.892 51.0236 310.943 49.9129 310.198 48.8982C309.711 48.2357 309.043 47.2658 308.57 46.1217C307.399 44.0189 306.613 41.2604 305.997 38.4518L305.857 37.8164V36.7109L305.76 33.9785L305.857 31.2462V30.6766L305.909 30.2844C306.262 27.6225 306.804 25.1221 307.567 22.814L307.604 22.7015L308.295 20.8592V15.791H310.555L310.873 15.3745L312.031 12.9785H312.698L314.579 10.51L314.784 10.2909C315.588 9.42896 316.318 8.68026 316.946 8.09298C317.258 7.80151 317.604 7.49304 317.964 7.21099C318.099 7.105 318.333 6.92391 318.644 6.72356C320.26 5.42972 321.962 4.32939 323.752 3.52143C324.285 3.1992 324.751 3.01225 325.007 2.92704C325.053 2.91171 325.099 2.89705 325.144 2.88302C325.382 2.775 325.589 2.69477 325.744 2.63752C326.1 2.50633 326.474 2.39266 326.843 2.29336C326.843 2.29327 326.842 2.29345 326.843 2.29336C327.513 2.00006 328.139 1.86008 328.446 1.79604C328.814 1.71939 329.214 1.65609 329.625 1.60243C329.861 1.52215 330.055 1.47114 330.183 1.43891C330.98 1.23983 331.755 1.19111 332.233 1.17122L332.357 1.16602ZM327.326 8.57227C326.951 8.57227 326.764 8.63477 326.764 8.75977C325.264 9.35352 323.701 10.3223 322.076 11.666C321.67 11.8379 320.701 12.7441 319.17 14.3848L316.17 18.3223C316.17 18.7598 316.045 18.9785 315.795 18.9785C314.889 20.8535 314.389 21.791 314.295 21.791C314.295 22.2129 314.139 22.6816 313.826 23.1973L313.264 24.6973C312.639 26.5879 312.17 28.7129 311.857 31.0723V31.3535L311.764 33.9785L311.857 36.6035V37.166C312.529 40.2285 313.248 42.3535 314.014 43.541C314.248 44.416 315.373 45.9473 317.389 48.1348L320.107 50.0098C322.607 50.9473 324.201 51.416 324.889 51.416H328.076L330.982 50.9473C331.295 50.9473 332.482 50.5723 334.545 49.8223C336.701 48.8535 338.139 48.041 338.857 47.3848C339.686 46.9473 341.123 45.6035 343.17 43.3535C345.154 40.7441 346.686 37.9004 347.764 34.8223C348.639 32.0879 349.076 30.3691 349.076 29.666C349.451 28.0566 349.639 25.8379 349.639 23.0098L349.545 21.2285V20.7598C349.514 20.0098 349.42 19.6348 349.264 19.6348C349.092 18.4473 348.936 17.8535 348.795 17.8535C348.623 17.0098 348.436 16.5098 348.232 16.3535C347.826 14.8848 346.514 13.041 344.295 10.8223C342.232 9.24414 340.607 8.33789 339.42 8.10352C339.14 7.89584 338.452 7.68815 337.357 7.48047C337.357 7.46942 337.357 7.45835 337.357 7.44727L337.357 7.48047C337.299 7.4694 337.24 7.45834 337.179 7.44727C336.665 7.35352 336.068 7.25977 335.389 7.16602H332.482C331.732 7.19727 331.357 7.29102 331.357 7.44727C329.857 7.58789 329.107 7.74414 329.107 7.91602C327.982 8.16602 327.389 8.38477 327.326 8.57227ZM329.014 19.0723C329.326 18.7598 329.576 18.6035 329.764 18.6035L331.17 18.1348H332.295L332.389 18.041L332.482 18.1348H334.076C335.326 18.5566 335.951 18.8066 335.951 18.8848L336.701 19.2598C337.936 20.3535 338.561 21.0723 338.576 21.416C339.264 22.541 339.607 24.2598 339.607 26.5723C339.607 28.7441 339.201 30.8379 338.389 32.8535C337.936 34.2598 337.154 35.6973 336.045 37.166C335.436 37.8301 334.904 38.3574 334.451 38.748C334.404 38.7887 334.358 38.8278 334.312 38.8655C333.921 39.19 333.592 39.4048 333.326 39.5098C333.029 39.7429 332.402 39.9616 331.444 40.166C330.99 40.263 330.461 40.3568 329.857 40.4473C328.92 40.3535 328.451 40.2598 328.451 40.166C327.42 40.166 326.264 39.6348 324.982 38.5723C324.576 38.1816 324.17 37.6191 323.764 36.8848C323.061 35.3848 322.686 33.8223 322.639 32.1973V32.1035L322.732 32.0098L322.639 31.4473C322.639 28.1504 323.639 25.0879 325.639 22.2598C326.982 20.4629 328.107 19.4004 329.014 19.0723ZM330.493 25.7873C329.299 27.4974 328.727 29.2032 328.648 31.0078L329.158 34.0691L329.101 34.126C329.105 34.1348 329.109 34.1435 329.113 34.1523C329.116 34.157 329.118 34.1615 329.121 34.166H330.522L330.62 34.1276C330.803 33.9621 331.068 33.7041 331.422 33.3274C332.115 32.3717 332.489 31.6 332.678 31.0134L332.744 30.8092L332.824 30.6103C333.349 29.3072 333.607 27.9749 333.607 26.5723C333.607 25.694 333.54 25.0974 333.466 24.7255C333.438 24.5828 333.412 24.4935 333.397 24.4481L333.291 24.2733C333.283 24.2661 333.276 24.2588 333.268 24.2513L333.035 24.1348H332.436L332.312 24.2592L331.55 24.535C331.324 24.7579 330.972 25.1524 330.493 25.7873Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M308.994 0.158203H309.49C312.294 0.158203 314.326 1.77547 315.385 3.53998L316.314 5.08749L315.698 19.0889L312.36 20.615C310.424 21.5 308.26 21.8248 306.182 21.8935C305.618 22.0288 305.091 22.1094 304.663 22.1642C304.484 22.1872 304.3 22.2082 304.112 22.2274L304.298 26.877H304.089C304.16 32.2935 304.332 37.1999 304.604 41.6012L304.615 41.7858V41.9707C304.615 43.0449 304.71 44.271 304.922 45.6606L305.379 48.661L305.185 48.8547L305.437 50.9929L302.782 53.0707C300.815 54.6098 298.5 55.07 296.59 55.1676C295.763 55.363 294.853 55.5038 293.957 55.6151C293.871 55.6406 293.8 55.6597 293.748 55.6735C293.168 55.8265 292.602 55.8985 292.247 55.9379C291.615 56.0081 290.837 56.0583 289.964 56.0961C289.009 56.3328 287.968 56.502 286.896 56.502H284.705L279.844 53.2617L280.283 49.601C280.567 47.2252 280.778 44.1625 280.9 40.3718L280.912 39.998L280.97 39.6287C280.966 39.6505 281.004 39.3455 281.061 38.449C281.112 37.6457 281.169 36.5491 281.23 35.1447C281.344 32.5567 281.472 29.0032 281.613 24.4742C281.2 24.5323 280.765 24.5668 280.396 24.5908C279.826 24.628 279.109 24.6587 278.26 24.6844L276.547 25.5411L274.476 24.6205C274.489 24.1598 274.496 23.6797 274.498 23.1802C274.498 23.1236 274.498 23.0668 274.498 23.0098L274.404 21.2285V20.7598C274.373 20.0098 274.279 19.6348 274.123 19.6348C274.09 19.4037 274.057 19.1951 274.025 19.009C273.993 18.8295 273.963 18.6709 273.933 18.5332C273.834 18.0801 273.741 17.8535 273.654 17.8535C273.597 17.5735 273.538 17.3313 273.478 17.127C273.444 17.0117 273.409 16.9085 273.374 16.8174C273.284 16.5833 273.189 16.4287 273.092 16.3535C272.768 15.1815 271.866 13.7706 270.388 12.1209C270.394 11.986 270.396 11.8738 270.396 11.7832V8.50195C270.396 7.42968 270.657 6.20953 271.371 5.05672C272.074 3.92076 273.011 3.18228 273.857 2.72694C275.033 2.09349 276.201 1.91226 277.015 1.86304L280.237 1.32597L280.591 1.67947C281.545 1.64198 282.724 1.60785 284.118 1.57658C284.515 1.51468 284.859 1.48195 285.06 1.46294L285.093 1.45976C285.669 1.40483 286.385 1.35396 287.212 1.30528C288.838 1.20962 291.072 1.11235 293.892 1.0127C295.523 0.851639 298.244 0.706382 301.913 0.566859C302.047 0.538929 302.154 0.520775 302.223 0.509371C302.724 0.425769 303.255 0.383834 303.678 0.357388L306.381 0.188491L306.446 0.253531C306.555 0.252454 306.663 0.251953 306.771 0.251953H308.431L308.994 0.158203ZM304.146 6.43945L304.053 6.3457C303.303 6.39258 302.928 6.45508 302.928 6.5332C298.646 6.68945 295.771 6.8457 294.303 7.00195C288.506 7.20508 285.318 7.39258 284.74 7.56445C281.053 7.64258 278.928 7.73633 278.365 7.8457H278.271L278.178 7.75195L277.615 7.8457C276.803 7.8457 276.396 8.06445 276.396 8.50195V11.7832C276.396 12.0428 276.386 12.3578 276.364 12.7281C276.362 12.7627 276.36 12.7977 276.358 12.8332C276.339 13.1357 276.313 13.4732 276.28 13.8457C276.249 14.2002 276.212 14.5864 276.169 15.0043C276.105 15.6183 276.028 16.3007 275.937 17.0515C275.934 17.0766 275.931 17.1017 275.928 17.127V18.5332C275.959 18.6582 276.115 18.7832 276.396 18.9082L276.771 18.7207C278.876 18.6749 280.21 18.6124 280.774 18.5332C280.981 18.5042 281.084 18.4729 281.084 18.4395L287.459 17.877L287.646 18.0645V23.502C287.643 23.6303 287.639 23.7579 287.635 23.8848C287.328 33.832 287.082 39.3919 286.896 40.5645C286.854 41.8949 286.8 43.1504 286.735 44.331C286.732 44.3882 286.729 44.4452 286.726 44.502C286.667 45.5593 286.599 46.5558 286.521 47.4915C286.492 47.8548 286.46 48.2089 286.428 48.5538C286.37 49.1699 286.307 49.7568 286.24 50.3145L286.521 50.502H286.896C287.084 50.502 287.283 50.4895 287.495 50.4647C287.956 50.4108 288.475 50.2982 289.053 50.127C290.92 50.0621 292.013 49.965 292.33 49.8355C292.395 49.809 292.428 49.7812 292.428 49.752C294.021 49.5801 295.115 49.3926 295.709 49.1895C297.24 49.1895 298.365 48.9082 299.084 48.3457L298.896 46.752V46.6582L298.99 46.5645C298.74 44.9238 298.615 43.3926 298.615 41.9707C298.335 37.4353 298.16 32.4041 298.089 26.877C298.065 24.9968 298.053 23.0593 298.053 21.0645V20.9707L297.959 20.877H298.053L297.959 18.5332V17.4082L297.865 16.9395L297.959 16.8457C297.99 16.8444 298.022 16.843 298.053 16.8417C298.189 16.8357 298.321 16.8293 298.45 16.8225C300.035 16.7385 301.09 16.59 301.615 16.377C302.499 16.3467 303.241 16.2946 303.84 16.2205C304.48 16.1414 304.957 16.0373 305.271 15.9082C307.24 15.9082 308.771 15.6582 309.865 15.1582L310.24 6.62695C310.053 6.31445 309.803 6.1582 309.49 6.1582L308.928 6.25195H306.771C305.886 6.25195 305.158 6.29415 304.589 6.37853C304.466 6.39671 304.351 6.41685 304.243 6.43894C304.242 6.43911 304.241 6.43928 304.24 6.43945H304.146Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M257.217 1.16602H260.66L261.068 1.22229C262.281 1.38961 263.387 1.57504 264.314 1.79072C264.776 1.8982 265.288 2.03448 265.792 2.21305C265.953 2.26988 266.174 2.3517 266.432 2.46568C268.727 3.15995 270.927 4.62414 272.8 6.05714L273.116 6.29863L273.397 6.57963C274.446 7.62845 275.489 8.76861 276.396 9.98541V11.7832C276.396 11.87 276.395 11.963 276.393 12.0622C276.39 12.1966 276.384 12.3425 276.376 12.4997C276.355 12.9227 276.318 13.428 276.265 14.0158C276.224 14.4677 276.174 14.9683 276.114 15.5176C276.06 16.0143 275.998 16.5507 275.928 17.127V18.5332C275.959 18.6582 276.115 18.7832 276.396 18.9082L276.771 18.7207C278.229 18.689 279.317 18.6493 280.036 18.6016C280.079 18.5986 280.122 18.5957 280.163 18.5927C280.336 19.342 280.38 20.059 280.399 20.51L280.404 20.6348V21.0709L280.498 22.852V23.0098C280.498 25.8005 280.333 28.3619 279.89 30.5218C279.797 31.4384 279.583 32.3299 279.422 32.9625C279.161 33.9879 278.792 35.2295 278.338 36.6509L278.313 36.7286L278.286 36.8056C276.999 40.4794 275.168 43.879 272.805 46.9855L272.645 47.1957L272.468 47.3911C271.387 48.5789 270.396 49.6072 269.513 50.432C268.892 51.0123 268.097 51.7124 267.211 52.2837C265.738 53.4518 263.757 54.4442 261.863 55.2953L261.662 55.3857L261.455 55.461C260.394 55.8469 259.488 56.1619 258.774 56.3875C258.421 56.4988 258.05 56.6092 257.695 56.6978L257.673 56.7035C257.53 56.7396 257.126 56.8414 256.607 56.9014L253.416 57.416H249.748C248.449 57.416 247.133 57.0527 246.344 56.8206C245.35 56.5283 244.175 56.121 242.86 55.6277L242.168 55.3684L238.29 52.6935L237.836 52.2005C236.751 51.0236 235.803 49.9129 235.057 48.8982C234.571 48.2357 233.903 47.2659 233.429 46.1217C233.281 45.8561 233.139 45.58 233.003 45.2946C233.036 45.2567 233.069 45.2189 233.101 45.1809C233.136 45.1404 233.171 45.0998 233.205 45.0592C233.722 44.4507 234.213 43.8275 234.678 43.1895C234.678 42.9395 234.584 42.8145 234.396 42.8145C234.396 42.7051 233.584 42.2363 231.959 41.4082C231.81 41.3296 231.665 41.2531 231.525 41.1787C231.279 40.2894 231.058 39.3733 230.856 38.4518L230.717 37.8164V36.7104L230.619 33.9785L230.684 32.1544C230.734 32.1143 230.784 32.0739 230.834 32.0332C231.061 31.8037 231.28 31.5772 231.491 31.3535C231.548 31.2931 231.605 31.2329 231.66 31.1729C231.692 31.1393 231.723 31.1058 231.754 31.0723C231.937 30.8743 232.114 30.6786 232.285 30.4852C234.103 28.4258 235.213 26.6293 235.615 25.0957C235.682 25.0957 235.827 24.7345 236.05 24.012C236.059 23.985 236.067 23.9575 236.076 23.9295C236.161 23.6498 236.258 23.3198 236.365 22.9395L236.834 18.8145L236.365 16.2832C236.365 16.1389 236.346 15.9749 236.308 15.791C236.272 15.6145 236.218 15.4197 236.146 15.2066C236.118 15.1241 236.088 15.0388 236.055 14.9508C236.038 14.9061 236.021 14.8607 236.003 14.8147L236.89 12.9785H237.558L239.438 10.51L239.643 10.2909C240.447 9.42896 241.178 8.68026 241.805 8.09298C242.117 7.80151 242.463 7.49304 242.823 7.21099C242.958 7.10501 243.192 6.92394 243.503 6.72361C245.119 5.42974 246.821 4.3294 248.611 3.52142C249.144 3.1992 249.611 3.01224 249.866 2.92704C249.912 2.91171 249.958 2.89705 250.004 2.88301C250.241 2.77499 250.448 2.69477 250.603 2.63752C250.96 2.50633 251.333 2.39266 251.702 2.29335C251.702 2.29326 251.702 2.29344 251.702 2.29335C252.372 2.00005 252.998 1.86008 253.306 1.79604C253.673 1.71939 254.073 1.65609 254.484 1.60243C254.721 1.52215 254.914 1.47114 255.043 1.43891C255.839 1.23983 256.615 1.19111 257.092 1.17122L257.217 1.16602ZM252.186 8.57227C251.811 8.57227 251.623 8.63477 251.623 8.75977C250.123 9.35352 248.561 10.3223 246.936 11.666C246.529 11.8379 245.561 12.7441 244.029 14.3848L241.029 18.3223C241.029 18.7598 240.904 18.9785 240.654 18.9785C239.748 20.8535 239.248 21.791 239.154 21.791C239.154 22.2129 238.998 22.6816 238.686 23.1973L238.123 24.6973C237.498 26.5879 237.029 28.7129 236.717 31.0723V31.3535L236.623 33.9785L236.717 36.6035V37.166C237.389 40.2285 238.107 42.3535 238.873 43.541C239.107 44.416 240.232 45.9473 242.248 48.1348L244.967 50.0098C247.467 50.9473 249.061 51.416 249.748 51.416H252.936L255.842 50.9473C256.154 50.9473 257.342 50.5723 259.404 49.8223C261.561 48.8535 262.998 48.041 263.717 47.3848C264.545 46.9473 265.982 45.6035 268.029 43.3535C270.014 40.7441 271.545 37.9004 272.623 34.8223C273.498 32.0879 273.936 30.3691 273.936 29.666C274.311 28.0566 274.498 25.8379 274.498 23.0098L274.404 21.2285V20.7598C274.373 20.0098 274.279 19.6348 274.123 19.6348C273.951 18.4473 273.795 17.8535 273.654 17.8535C273.482 17.0098 273.295 16.5098 273.092 16.3535C272.686 14.8848 271.373 13.041 269.154 10.8223C267.092 9.24414 265.467 8.33789 264.279 8.10352C263.999 7.89584 263.311 7.68815 262.217 7.48047C262.217 7.46942 262.217 7.45835 262.217 7.44727L262.217 7.48047C262.158 7.4694 262.099 7.45834 262.038 7.44727C261.524 7.35352 260.928 7.25977 260.248 7.16602H257.342C256.592 7.19727 256.217 7.29102 256.217 7.44727C254.717 7.58789 253.967 7.74414 253.967 7.91602C252.842 8.16602 252.248 8.38477 252.186 8.57227ZM247.592 32.0098L247.498 32.1035V32.1973C247.545 33.8223 247.92 35.3848 248.623 36.8848C249.029 37.6191 249.436 38.1816 249.842 38.5723C251.123 39.6348 252.279 40.166 253.311 40.166C253.311 40.2598 253.779 40.3535 254.717 40.4473C255.32 40.3568 255.849 40.263 256.304 40.166C257.262 39.9616 257.889 39.7429 258.186 39.5098C258.452 39.4048 258.78 39.19 259.172 38.8655C259.217 38.8278 259.263 38.7887 259.311 38.748C259.764 38.3574 260.295 37.8301 260.904 37.166C262.014 35.6973 262.795 34.2598 263.248 32.8535C264.061 30.8379 264.467 28.7441 264.467 26.5723C264.467 24.2598 264.123 22.541 263.436 21.416C263.42 21.0723 262.795 20.3535 261.561 19.2598L260.811 18.8848C260.811 18.8066 260.186 18.5566 258.936 18.1348H257.342L257.248 18.041L257.154 18.1348H256.029L254.623 18.6035C254.436 18.6035 254.186 18.7598 253.873 19.0723C252.967 19.4004 251.842 20.4629 250.498 22.2598C248.498 25.0879 247.498 28.1504 247.498 31.4473L247.592 32.0098ZM253.508 31.0078L254.018 34.0691L253.961 34.126C253.965 34.1348 253.968 34.1436 253.972 34.1524C253.975 34.157 253.978 34.1616 253.98 34.166H255.382L255.479 34.1276C255.663 33.9621 255.928 33.7041 256.281 33.3274C256.975 32.3717 257.348 31.6001 257.537 31.0134L257.603 30.8092L257.683 30.6103C258.208 29.3072 258.467 27.9749 258.467 26.5723C258.467 25.694 258.4 25.0974 258.326 24.7255C258.297 24.5828 258.271 24.4936 258.257 24.4482L258.15 24.2733C258.142 24.2661 258.135 24.2587 258.127 24.2512L257.894 24.1348H257.296L257.171 24.2592L256.41 24.5351C256.183 24.7579 255.831 25.1523 255.353 25.787C254.158 27.4972 253.586 29.2031 253.508 31.0078Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M217.229 1.0948L223.869 1.19855L229.679 2.33765L232.07 3.24874C233.309 3.69798 234.571 4.43573 235.668 5.13994L236.006 5.35674L236.312 5.61661C237.821 6.89794 239.505 8.49615 240.495 10.2938L240.522 10.3418L240.547 10.3902C240.997 11.2427 241.41 12.1183 241.723 12.9788C241.951 13.6063 242.232 14.5045 242.33 15.5398L242.49 16.4053L241.029 18.3223C241.029 18.7598 240.904 18.9785 240.654 18.9785C240.612 19.0659 240.571 19.1512 240.53 19.2345C239.702 20.9388 239.244 21.791 239.154 21.791C239.154 22.2129 238.998 22.6816 238.686 23.1973L238.123 24.6973C238.018 25.0162 237.917 25.3418 237.82 25.674C237.351 27.2894 236.987 29.0624 236.727 30.9931C236.724 31.0195 236.72 31.0459 236.717 31.0723V31.3535L236.623 33.9785L236.646 34.6118C236.147 35.1703 235.629 35.7171 235.101 36.2513L235.085 36.268C235.718 36.5944 236.272 36.8901 236.717 37.1443L236.717 37.166C236.724 37.1988 236.731 37.2314 236.738 37.2639C237.284 39.7301 237.86 41.5803 238.467 42.8145C238.532 42.9465 238.597 43.0715 238.663 43.1895C238.733 43.3146 238.803 43.4318 238.873 43.541C239.011 44.0572 239.459 44.8017 240.218 45.7746L239.528 46.7218C237.177 49.9495 234.303 52.8074 230.957 55.3081L230.929 55.3292L228.195 57.3223H224.161L222.612 56.2377C221.372 55.3697 219.936 54.0715 218.396 52.5486C218.079 53.0334 217.732 53.4196 217.428 53.7043C216.659 54.4244 215.875 54.7962 215.47 54.9682C214.633 55.3245 213.806 55.4873 213.302 55.5731C212.182 55.7637 210.774 55.869 209.245 55.934L209.118 55.9395H207.666L206.954 56.1175L205.875 55.9948C204.783 55.8707 203.709 55.7168 202.819 55.501C202.423 55.405 201.708 55.2156 200.969 54.8461C200.611 54.6668 199.914 54.2846 199.233 53.5927C198.526 52.8748 197.459 51.4148 197.459 49.2832V48.6198L197.604 47.9724C197.728 47.417 197.895 46.1604 198.033 43.9428L198.369 38.5275C198.417 36.528 198.457 33.9603 198.49 30.8131C198.482 29.9821 198.472 29.1845 198.463 28.4203C198.712 28.0401 198.909 27.807 199.053 27.7207C199.209 27.1582 199.365 26.877 199.521 26.877C200.396 24.7207 200.834 22.7832 200.834 21.0645C200.818 20.8693 200.802 20.6818 200.787 20.502C200.759 20.1818 200.731 19.8857 200.704 19.6138C200.55 18.0809 200.406 17.3145 200.271 17.3145C200.084 16.4395 199.928 16.002 199.803 16.002C199.683 15.5814 199.447 15.0814 199.096 14.502C199.094 14.4997 199.093 14.4975 199.092 14.4952C199.056 14.4358 199.018 14.3756 198.98 14.3145C198.674 13.8296 198.292 13.2922 197.834 12.7023C197.827 12.6928 197.819 12.6832 197.812 12.6736C197.744 11.9552 197.655 11.2793 197.546 10.6443L197.092 8.00836L198.75 5.90909C199.707 4.69712 200.943 4.10762 201.204 3.98314C201.216 3.97755 201.225 3.97289 201.233 3.96916C201.722 3.73183 202.232 3.53491 202.679 3.37601C203.594 3.05093 204.759 2.70392 206.099 2.33837L206.874 2.12695H207.214C207.245 2.11852 207.279 2.10902 207.316 2.09834C207.448 2.0601 207.61 2.01062 207.804 1.94795L208.703 1.6582H209.602C209.627 1.65578 209.694 1.64836 209.811 1.62826C210.028 1.59071 210.346 1.52147 210.78 1.4027L211.502 1.20495L217.229 1.0948ZM203.834 9.37625C203.641 9.47167 203.516 9.55524 203.459 9.62695C203.626 10.5957 203.751 11.6131 203.834 12.679C203.876 13.212 203.907 13.7572 203.928 14.3145H203.834V14.502C203.866 14.502 203.898 14.5547 203.928 14.6601C204.081 15.1939 204.206 17.0787 204.305 20.3145C204.384 22.931 204.446 26.431 204.49 30.8145C204.396 39.8145 204.24 44.3145 204.021 44.3145C203.881 46.5801 203.693 48.2363 203.459 49.2832C203.459 49.3965 203.646 49.5069 204.021 49.6145C204.45 49.7373 205.123 49.8565 206.04 49.972C206.203 49.9925 206.374 50.0129 206.553 50.0332L206.928 49.9395H208.99C209.148 49.9327 209.302 49.9257 209.451 49.9182C212.081 49.7872 213.396 49.5443 213.396 49.1895V48.8145C213.515 48.2733 213.612 47.7932 213.685 47.3742C213.686 47.3702 213.687 47.3661 213.688 47.3621C213.707 47.2503 213.725 47.143 213.741 47.0399C213.824 46.52 213.865 46.1115 213.865 45.8145C214.178 42.9707 214.334 40.9707 214.334 39.8145V39.4395L214.24 38.9707L214.428 38.6895C214.482 38.7608 214.535 38.8313 214.588 38.9011C214.698 39.0456 214.805 39.1866 214.91 39.3242C214.94 39.3629 214.969 39.4013 214.998 39.4395C215.017 39.4643 215.036 39.4891 215.055 39.5137C215.133 39.6159 215.209 39.7162 215.285 39.8145C216.918 41.9478 217.882 43.1353 218.178 43.377C218.788 44.1166 219.376 44.8061 219.939 45.4455C220.673 46.2785 221.367 47.0265 222.021 47.6895C223.771 49.4551 225.115 50.666 226.053 51.3223H226.24L227.365 50.502C228.095 49.9562 228.796 49.3937 229.467 48.8145C229.93 48.415 230.379 48.0076 230.813 47.5922C230.814 47.5912 230.815 47.5902 230.816 47.5892C230.823 47.5828 230.83 47.5763 230.837 47.5699C232.153 46.3097 233.339 44.9763 234.396 43.5696C234.491 43.4435 234.585 43.3167 234.678 43.1895C234.678 42.9395 234.584 42.8145 234.396 42.8145C234.396 42.7289 233.899 42.4232 232.904 41.8974C232.627 41.7514 232.312 41.5883 231.959 41.4082C231.03 40.9187 230.277 40.5097 229.702 40.1812C229.638 40.1447 229.577 40.1092 229.517 40.0746C229.458 40.0403 229.401 40.0069 229.346 39.9746C228.859 39.6875 228.543 39.4779 228.396 39.3457C227.338 38.6923 226.404 38.066 225.595 37.4667C225.109 37.1065 224.668 36.756 224.271 36.4154C224.208 36.3607 224.145 36.3062 224.084 36.252L224.271 35.9707C224.292 35.9707 224.313 35.9706 224.333 35.9704C224.792 35.9654 225.021 35.903 225.021 35.7832C226.168 35.3924 227.705 34.4588 229.633 32.9822C230.018 32.6875 230.418 32.3712 230.834 32.0332C233.521 29.3145 235.115 27.002 235.615 25.0957C235.709 25.0957 235.959 24.377 236.365 22.9395L236.834 18.8145L236.365 16.2832C236.365 15.6426 235.99 14.6113 235.24 13.1895C234.818 12.4238 233.881 11.4238 232.428 10.1895C231.381 9.51758 230.568 9.08008 229.99 8.87695L228.021 8.12695L223.24 7.18945L217.24 7.0957L212.365 7.18945C211.225 7.50195 210.318 7.6582 209.646 7.6582C208.678 7.9707 208.021 8.12695 207.678 8.12695C206.843 8.35457 206.131 8.56091 205.542 8.74595C204.819 8.97327 204.281 9.16847 203.928 9.33154C203.895 9.34672 203.864 9.36162 203.834 9.37625ZM214.334 28.9395L214.428 29.2207H215.646C215.757 29.2055 215.866 29.1898 215.974 29.1738C216.92 29.0334 217.779 28.8616 218.551 28.6582C219.182 28.4918 219.756 28.3043 220.272 28.0957C220.314 28.0785 220.356 28.0612 220.398 28.0438C220.408 28.0397 220.418 28.0355 220.427 28.0314C220.921 27.823 221.358 27.5945 221.74 27.3457C221.928 27.3457 222.178 27.1895 222.49 26.877C223.506 26.502 224.631 25.4082 225.865 23.5957C226.225 23.0488 226.475 22.0176 226.615 20.502V20.4082L226.24 18.7207C225.662 17.8457 225.006 17.252 224.271 16.9395C223.35 16.502 222.475 16.2832 221.646 16.2832L218.834 16.002C217.85 16.002 216.662 16.0957 215.271 16.2832H214.428L213.959 16.377C214.001 16.4811 214.04 16.6764 214.076 16.9629C214.258 18.3952 214.376 22.1061 214.428 28.0957V28.6582L214.334 28.9395Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M182.874 1.00195H182.928C185.193 1.00195 187.369 1.17678 189.329 1.64346C189.99 1.73692 190.544 1.88963 190.827 1.9676L190.828 1.968C191.441 2.13704 192.14 2.36276 192.89 2.62257C196.2 3.6897 199.139 5.54848 201.711 8.02006L201.993 8.29158L202.238 8.59753C202.682 9.15229 203.142 9.75486 203.581 10.3928C203.63 10.7335 203.675 11.08 203.715 11.4323C203.753 11.7714 203.787 12.1158 203.817 12.4655C203.867 13.0662 203.904 13.6825 203.928 14.3145H203.834V14.502C203.879 14.502 203.923 14.6057 203.964 14.8131C204.026 15.1295 204.084 15.6871 204.137 16.486C204.206 17.5165 204.266 18.9482 204.318 20.7813C204.321 20.8747 204.324 20.969 204.326 21.0645C204.384 23.1663 204.432 25.773 204.469 28.8846C204.47 28.9979 204.472 29.1118 204.473 29.2263C204.476 29.5097 204.48 29.7971 204.483 30.0887C204.484 30.2487 204.486 30.4099 204.488 30.5724C204.488 30.5799 204.488 30.5873 204.488 30.5948L204.468 30.645L204.193 31.6337L204.026 31.7341L203.562 32.877H202.81L202.786 32.9188L202.25 33.4763C201.185 34.582 200.22 35.5313 199.386 36.2658C198.971 36.6314 198.519 37.0054 198.054 37.3373C197.858 37.4773 197.557 37.6845 197.176 37.8985C195.997 38.7722 194.749 39.5258 193.43 40.1467C191.097 41.3252 188.785 42.27 186.501 42.9441L186.304 43.0021L186.123 43.0424C186.123 43.0425 186.123 43.0423 186.123 43.0424C185.59 43.2751 185.066 43.4304 184.706 43.5288C184.057 43.7058 183.275 43.8733 182.423 44.0344C182.041 44.1596 181.622 44.2784 181.175 44.3919C181.156 44.8559 181.146 45.3606 181.146 45.9082V46.6945L180.944 47.4542C180.848 47.8147 180.771 48.3179 180.771 49.002V49.1895C180.771 52.5204 178.326 54.1681 177.799 54.5034C176.988 55.0198 176.186 55.2882 175.738 55.4238C175.039 55.6356 174.254 55.7972 173.458 55.9274C172.838 56.1403 172.273 56.2349 171.981 56.2798C171.522 56.3505 171.008 56.4012 170.475 56.4394C169.977 56.5766 169.499 56.6603 169.111 56.7161C168.599 56.7898 168.035 56.844 167.441 56.8846C166.479 57.1888 165.503 57.3223 164.553 57.3223C162.586 57.3223 160.745 56.4019 159.565 54.8285C158.619 53.5674 158.392 52.2824 158.318 51.6915L158.202 50.7638L158.319 50.135C158.703 50.1029 159.056 50.0687 159.377 50.0324C159.639 50.0028 159.88 49.9718 160.1 49.9395L160.475 49.0957C160.662 48.1582 160.818 47.6895 160.943 47.6895C161.162 46.502 161.318 45.9082 161.412 45.9082C161.518 45.4288 161.614 45.0576 161.701 44.7945C161.806 44.4745 161.897 44.3145 161.975 44.3145C161.989 44.1948 162.003 44.0828 162.019 43.9785C162.125 43.265 162.266 42.9082 162.443 42.9082C162.443 42.2988 162.6 41.7676 162.912 41.3145V41.0332L162.818 40.9395H162.537C161.911 41.0508 160.802 41.1682 159.21 41.2919C159.278 40.1758 159.342 38.7204 159.399 36.9063L159.583 31.0957H159.672C159.719 28.316 159.752 24.5131 159.771 19.6735L159.678 9.59014C159.678 9.58968 159.678 9.58921 159.678 9.58875C159.826 9.05674 159.997 8.50698 160.193 7.93945L159.912 7.56445L159.659 7.55813L159.655 7.13488L161.359 5.36839C162.744 3.93181 164.395 3.28791 165.865 3.02929C166.244 2.89075 166.565 2.80824 166.772 2.75887C167.203 2.65642 167.651 2.5832 168.086 2.52908C168.528 2.38493 168.933 2.2946 169.244 2.23491C169.675 2.1521 170.13 2.08977 170.591 2.04158C171.147 1.87692 171.691 1.78385 172.054 1.72797C172.695 1.6294 173.484 1.54368 174.377 1.46583C174.8 1.3555 175.158 1.30097 175.353 1.27319C175.97 1.18493 176.692 1.13582 177.392 1.10249L177.481 1.09825L182.874 1.00195ZM167.646 8.87695C166.756 8.87695 166.1 9.0957 165.678 9.5332L165.771 19.6582C165.725 31.2832 165.6 37.0957 165.396 37.0957C165.256 41.5488 165.068 44.1426 164.834 44.877C164.833 44.9178 164.832 44.9586 164.831 44.9992C164.828 45.1098 164.824 45.2196 164.82 45.3286C164.787 46.3311 164.73 47.2685 164.65 48.1408C164.62 48.4594 164.588 48.7693 164.553 49.0706C164.474 49.7389 164.38 50.3644 164.271 50.9473C164.303 51.1973 164.396 51.3223 164.553 51.3223C164.909 51.3223 165.243 51.2772 165.555 51.1871C165.762 51.1271 165.959 51.0472 166.146 50.9473C167.928 50.8691 168.959 50.7207 169.24 50.502C169.702 50.4797 170.099 50.4537 170.429 50.4239C171.262 50.349 171.678 50.25 171.678 50.127C173.74 49.8457 174.771 49.5332 174.771 49.1895V49.002C174.771 47.877 174.896 46.8457 175.146 45.9082C175.146 43.1738 175.365 40.9863 175.803 39.3457C178.412 38.9082 180.1 38.5332 180.865 38.2207C182.85 37.8613 183.881 37.5801 183.959 37.377L184.803 37.1895C186.709 36.627 188.709 35.8145 190.803 34.752C191.912 34.2363 192.975 33.5801 193.99 32.7832C194.584 32.5801 195.896 31.4238 197.928 29.3145C198.443 28.3926 198.818 27.8613 199.053 27.7207C199.209 27.1582 199.365 26.877 199.521 26.877C200.396 24.7207 200.834 22.7832 200.834 21.0645C200.631 18.5645 200.443 17.3145 200.271 17.3145C200.084 16.4395 199.928 16.002 199.803 16.002C199.553 15.127 198.803 13.9082 197.553 12.3457C195.537 10.4082 193.35 9.06445 190.99 8.31445C189.553 7.81445 188.646 7.56445 188.271 7.56445C186.881 7.18945 185.1 7.00195 182.928 7.00195L177.678 7.0957C176.365 7.1582 175.709 7.25195 175.709 7.37695C173.271 7.56445 172.053 7.75195 172.053 7.93945C170.631 8.0332 169.818 8.18945 169.615 8.4082C168.334 8.50195 167.678 8.6582 167.646 8.87695ZM176.178 16.3111C176.141 16.3269 176.11 16.3427 176.084 16.3584C176.021 16.3962 175.99 16.4336 175.99 16.4707L176.178 17.4082V17.5957H176.084L176.178 18.7207V25.377C176.178 26.405 176.159 27.2754 176.12 27.9882C176.111 28.158 176.101 28.3188 176.09 28.4707C176.077 28.6378 176.064 28.794 176.049 28.9395C176.031 29.1107 176.012 29.267 175.99 29.4082H176.365L179.084 28.9395C179.084 28.8145 179.74 28.6582 181.053 28.4707C181.053 28.3616 181.41 28.2287 182.124 28.072C182.228 28.0492 182.34 28.0258 182.459 28.002C182.459 27.8457 182.896 27.7207 183.771 27.627L186.49 26.127C187.912 25.0332 188.693 24.127 188.834 23.4082C189.006 23.4082 189.193 22.6582 189.396 21.1582C189.277 20.1913 189.089 19.4283 188.834 18.8693C188.722 18.6243 188.597 18.4186 188.459 18.252C188.193 17.8145 187.943 17.5957 187.709 17.5957C187.683 17.573 187.658 17.5505 187.632 17.5283C187.585 17.4874 187.537 17.4474 187.489 17.4082C186.418 16.5332 185.21 16.0957 183.865 16.0957C183.865 15.9238 183.396 15.7988 182.459 15.7207H179.74C177.799 15.9269 176.612 16.1237 176.178 16.3111Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M156.188 1.46947L162.968 1.63897L166.904 6.88688L166.103 9.20844C165.941 9.29838 165.8 9.40664 165.678 9.5332L165.686 10.4356C165.305 11.6292 165.112 12.579 165.039 13.3112L164.964 14.0702L164.809 14.4922C164.8 14.5556 164.788 14.6403 164.774 14.7493C164.716 15.2013 164.651 15.8739 164.584 16.8044L164.425 19.0369L163.943 19.5185V25.4515L160.662 24.3578V24.6269C160.662 25.9333 160.407 27.6819 160.075 29.5236C160.009 30.8883 159.906 32.1417 159.733 33.1572C159.649 33.652 159.491 34.4575 159.148 35.2786C160.344 35.1823 161.111 35.099 161.487 35.0321L162.008 34.9394H165.304L165.572 35.2074C165.522 36.4663 165.463 37.0957 165.396 37.0957C165.382 37.552 165.367 37.9888 165.352 38.406C165.349 38.4714 165.347 38.5364 165.344 38.6008C165.31 39.5063 165.274 40.3171 165.235 41.0332C165.229 41.1286 165.224 41.2224 165.219 41.3144C165.186 41.8858 165.152 42.3923 165.116 42.8341C165.114 42.859 165.112 42.8837 165.109 42.9082C165.042 43.7121 164.97 44.2942 164.892 44.6548C164.873 44.7417 164.854 44.8158 164.834 44.877C164.818 45.4904 164.793 46.0803 164.761 46.6468C164.726 47.2469 164.682 47.8207 164.628 48.3682C164.624 48.4112 164.62 48.454 164.615 48.4966C164.601 48.6355 164.587 48.7727 164.571 48.9082C164.538 49.2029 164.502 49.4894 164.463 49.7678C164.457 49.8087 164.452 49.8494 164.446 49.8899C164.425 50.0336 164.403 50.1751 164.381 50.3144C164.355 50.4779 164.328 50.6382 164.299 50.7956C164.29 50.8465 164.281 50.897 164.271 50.9473C164.282 51.0284 164.298 51.0964 164.322 51.1512C164.37 51.2652 164.447 51.3223 164.553 51.3223C164.819 51.3223 165.073 51.2971 165.314 51.2467C165.5 51.208 165.678 51.1544 165.849 51.0859C165.951 51.045 166.05 50.9988 166.146 50.9473C166.171 50.9462 166.195 50.9451 166.219 50.944C166.296 50.9405 166.372 50.9368 166.447 50.9331C166.447 50.933 166.448 50.933 166.448 50.933L166.441 50.9638L165.939 53.6894H164.999L164.241 55.3943L160.974 55.8754C157.914 56.3259 152.117 56.5019 144.068 56.5019H144.029L143.989 56.5014C142.166 56.4774 140.606 56.4168 139.432 56.2932C138.896 56.2367 138.136 56.1384 137.39 55.9226C137.291 55.8938 137.153 55.8524 136.987 55.7942C136.176 55.6516 135.245 55.3739 134.336 54.8395C132.437 54.0235 130.982 52.6389 129.989 51.5563L129.676 51.2152L129.42 50.8301C128.991 50.1862 128.605 49.5126 128.273 48.8102C128.421 48.7407 128.565 48.6715 128.703 48.6028C129.722 48.0975 130.484 47.6134 130.99 47.1504V46.4004C130.875 46.036 130.759 45.5795 130.643 45.031C130.446 44.0977 130.25 42.8979 130.053 41.4316L129.584 38.0566L129.115 34.0254L128.646 29.3379C128.334 26.166 128.053 20.541 127.803 12.4629V10.0254C127.803 9.95654 127.799 9.89063 127.793 9.82762C128.099 6.81113 130.251 5.02584 131.885 4.26692C132.896 3.79795 133.944 3.56918 134.865 3.45413C135.396 3.28262 135.88 3.18986 136.242 3.13422C136.753 3.05564 137.284 3.01234 137.807 2.99037C137.835 2.98332 137.861 2.97696 137.884 2.97123C138.355 2.85546 138.844 2.76832 139.299 2.69914C140.201 2.56183 141.312 2.44462 142.578 2.3397L150.087 1.56947L156.188 1.46947ZM143.131 8.31445C140.662 8.51757 139.225 8.73632 138.818 8.9707C137.412 8.9707 136.6 9.0957 136.381 9.3457C134.631 9.42382 133.756 9.83007 133.756 10.5644V11.8769C133.131 16.8301 132.693 24.8301 132.443 35.8769L132.537 36.4394L132.443 37.1894V38.1269C132.662 42.3769 132.881 44.5019 133.1 44.5019C133.318 45.5176 133.756 46.5176 134.412 47.5019C135.443 48.6269 136.35 49.2832 137.131 49.4707C137.428 49.7832 137.959 49.9394 138.725 49.9394C138.725 50.2676 140.506 50.4551 144.068 50.5019C152.209 50.5019 157.553 50.3145 160.1 49.9395L160.475 49.0957C160.662 48.1582 160.818 47.6895 160.943 47.6895C160.979 47.4964 161.013 47.319 161.045 47.1573C161.211 46.3246 161.334 45.9082 161.412 45.9082C161.646 44.8457 161.834 44.3145 161.975 44.3145C162.084 43.377 162.24 42.9082 162.443 42.9082C162.443 42.6357 162.475 42.3788 162.537 42.1375C162.573 41.9971 162.62 41.8619 162.678 41.7321C162.719 41.6388 162.766 41.5483 162.818 41.4606C162.848 41.411 162.879 41.3623 162.912 41.3145V41.0332L162.818 40.9395H162.537C162.507 40.9448 162.476 40.9502 162.443 40.9556C162.43 40.9578 162.416 40.9601 162.402 40.9624C162.275 40.9829 162.133 41.0035 161.975 41.0244C161.952 41.0273 161.93 41.0303 161.907 41.0332C161.756 41.0526 161.591 41.0722 161.412 41.092C160.762 41.1638 159.93 41.2379 158.915 41.3144C158.455 41.3492 157.956 41.3844 157.42 41.4201C157.166 41.437 156.903 41.4541 156.631 41.4713C156.606 41.4729 156.58 41.4745 156.554 41.4761C156.517 41.4784 156.48 41.4808 156.443 41.4831C154.897 41.5797 153.085 41.6797 151.006 41.7832H147.443C146.912 41.7832 145.912 41.5644 144.443 41.1269C143.193 40.4863 142.568 39.4238 142.568 37.9394L142.662 33.6269L142.943 33.5332C146.725 33.3457 150.131 33.2519 153.162 33.2519H153.35C153.668 33.2519 153.897 32.191 154.035 30.0691C154.059 29.6944 154.081 29.2866 154.1 28.8457C154.19 28.3555 154.27 27.9017 154.338 27.4843C154.554 26.1721 154.662 25.2197 154.662 24.6269L154.287 24.0644C152.439 24.0921 150.698 24.1321 149.065 24.1843C147.211 24.2436 145.495 24.3186 143.918 24.4095C143.747 24.4193 143.579 24.4293 143.412 24.4394L143.037 24.3457L143.506 17.8769C143.506 17.5957 145.756 17.3457 150.256 17.1269H151.193L157.662 17.0332L157.943 17.1269V17.0332C157.954 17.0332 157.964 17.033 157.975 17.0327C158.329 17.0224 158.506 16.8351 158.506 16.4707L158.6 16.3769C158.644 15.7605 158.689 15.2175 158.736 14.7481C158.784 14.269 158.834 13.8665 158.885 13.5407C158.907 13.4003 158.93 13.2742 158.952 13.1622C158.99 12.9755 159.029 12.8283 159.068 12.7207C159.115 12.2493 159.187 11.759 159.286 11.2498C159.429 10.5078 159.626 9.7258 159.879 8.90364C159.975 8.58815 160.08 8.26676 160.193 7.93945L159.912 7.56445L156.162 7.4707L150.443 7.56445L143.131 8.31445Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M102.264 0.931641L103.356 1.37836C105.063 2.0769 105.976 3.32777 106.265 3.73771C106.667 4.3088 106.95 4.87704 107.138 5.29415C107.513 6.12465 107.839 7.08955 108.127 8.0588L108.418 8.95549L108.501 7.96289H109.567L110.17 5.05664H111.021C111.134 4.82391 111.257 4.58938 111.393 4.35827C111.668 3.89099 112.796 1.97389 115.215 1.21014L116.097 0.931641H118.031L122.775 1.79408L126.136 2.50705L127.438 2.86888C128.595 3.00909 130.059 3.43207 131.381 4.57719C133.309 6.24853 133.803 8.45278 133.803 10.0254V10.2876C133.771 10.374 133.756 10.4663 133.756 10.5644V11.8769C133.739 12.0092 133.723 12.1436 133.706 12.2802C133.699 12.3407 133.692 12.4016 133.684 12.4629C133.234 16.2936 132.885 21.7855 132.639 28.9387C132.639 28.9406 132.639 28.9426 132.638 28.9446C132.587 30.435 132.54 31.9975 132.498 33.6321C132.497 33.6505 132.497 33.6689 132.496 33.6873C132.478 34.4034 132.46 35.1332 132.443 35.8769L132.537 36.4394L132.443 37.1894V38.1269C132.502 39.261 132.56 40.2438 132.618 41.0753C132.619 41.0792 132.619 41.0832 132.619 41.0871C132.779 43.3637 132.94 44.5019 133.1 44.5019C133.181 44.8784 133.292 45.2527 133.433 45.6249C133.531 45.8844 133.645 46.1429 133.772 46.4004C133.897 46.6514 134.035 46.9014 134.187 47.1504C134.259 47.2678 134.334 47.385 134.412 47.5019C135.382 48.5601 136.241 49.2035 136.99 49.4323V49.7921L135.042 51.5759C132.896 53.5407 129.412 54.9832 125.894 56.1815L125.736 56.235L119.039 58.1103L115.684 53.0779C114.826 54.0771 113.482 55.0926 111.486 55.277C110.389 55.4359 109.214 55.4941 108.021 55.4941H106.428C105.091 55.4941 103.833 55.4566 102.819 55.3328C102.37 55.2781 101.581 55.1647 100.763 54.8652C100.541 54.7841 100.181 54.6417 99.7604 54.4046L97.1005 57.0645H92.8993L91.6197 56.4154C91.4917 56.3505 91.377 56.2936 91.275 56.2441H90.5159L89.3679 55.5094C89.3021 55.4923 89.2192 55.4722 89.1175 55.45L85.5085 54.6626L82.8965 54.2544V54.0612L81.209 53.8033V52.3544L79.5215 50.6669V50.139C80.1733 50.0852 80.7358 50.0254 81.209 49.9596C81.2567 49.9529 81.3035 49.9462 81.3493 49.9395C81.3494 49.9395 81.3492 49.9395 81.3493 49.9395L81.7246 49.0957C81.7571 48.9332 81.7887 48.7847 81.8193 48.6504C81.8608 48.4682 81.9006 48.312 81.9387 48.1816C81.9483 48.1487 81.9578 48.1175 81.9672 48.0879C82.0514 47.8223 82.1268 47.6895 82.1934 47.6895C82.2135 47.5803 82.233 47.4762 82.2521 47.3772C82.4403 46.3979 82.577 45.9082 82.6621 45.9082C82.8965 44.8457 83.084 44.3145 83.2246 44.3145C83.2909 43.7465 83.3743 43.3506 83.475 43.1267C83.5405 42.981 83.6133 42.9082 83.6934 42.9082C83.6934 42.3057 83.8461 41.7796 84.1516 41.3298C84.1551 41.3247 84.1586 41.3196 84.1621 41.3145V41.0332L84.0684 40.9395H83.7871C83.375 41.0127 82.7536 41.0887 81.9229 41.1673C81.6569 41.1925 81.3695 41.2179 81.0606 41.2436C80.9966 41.249 80.9316 41.2543 80.8657 41.2597C80.8561 41.2604 80.8465 41.2612 80.8369 41.262C80.8411 41.207 80.8455 41.1494 80.8499 41.0891L81.2556 35.5254H81.9207C81.9999 34.9783 82.0902 34.2989 82.1917 33.4773L82.1959 33.4433L82.6665 29.9614L82.6693 29.9406L83.115 26.5526L83.556 20.996L83.6456 14.5462L83.5651 10.6813L83.459 10.1508V9.55664C83.459 5.31014 87.102 3.71059 87.7138 3.45568C88.4622 3.14382 89.2422 2.94898 89.9479 2.81981C90.3144 2.69298 90.6284 2.61495 90.8114 2.57137C91.1496 2.49085 91.5218 2.41885 91.9067 2.35352C92.3712 2.19331 92.7837 2.10236 93.0165 2.05385C93.4045 1.97303 93.839 1.90257 94.2945 1.8396C94.831 1.66956 95.3086 1.5872 95.5657 1.54606C95.9614 1.48275 96.4006 1.43337 96.8586 1.39341C97.8451 1.06425 98.8363 0.931641 99.7715 0.931641H102.264ZM91.709 8.61914C90.209 8.80664 89.459 9.11914 89.459 9.55664L89.5527 10.0254L89.6465 14.5254L89.5527 21.2754L89.084 27.1816L88.6152 30.7441L88.1465 34.2129C87.8184 36.8691 87.5684 38.3691 87.3965 38.7129C87.2246 40.5879 87.0371 41.5254 86.834 41.5254C86.8113 41.8362 86.788 42.1148 86.764 42.3613C86.6721 43.304 86.5705 43.7754 86.459 43.7754L85.5215 48.0879V48.1816L85.6152 48.2754C85.9489 48.3048 86.2301 48.3373 86.459 48.3729C86.959 48.4507 87.209 48.5432 87.209 48.6504C88.334 48.8223 88.8965 48.9785 88.8965 49.1191C88.9111 49.1214 88.9257 49.1237 88.9401 49.126C89.0062 49.1365 89.07 49.147 89.1316 49.1574C89.9749 49.3009 90.3965 49.4444 90.3965 49.5879C91.1467 49.7516 91.7183 49.9391 92.1113 50.1504C92.1685 50.1811 92.2219 50.2124 92.2715 50.2441C92.5121 50.2441 93.0095 50.4238 93.7635 50.7832C93.9397 50.8671 94.1298 50.9609 94.334 51.0645H94.6152L94.8965 50.7832V50.1504C94.8965 50.0818 94.8975 50.0148 94.8996 49.9493C94.9037 49.823 94.9116 49.7025 94.9234 49.5879C94.9725 49.1124 95.0885 48.7374 95.2715 48.4629C95.3085 47.5588 95.3632 46.8374 95.4354 46.2988C95.5154 45.7019 95.617 45.3295 95.7402 45.1816C95.7417 45.1513 95.7432 45.1212 95.7447 45.0912C95.7709 44.5609 95.798 44.0947 95.826 43.6928C95.9137 42.4354 96.0101 41.8066 96.1152 41.8066C96.1321 41.5177 96.1497 41.2396 96.1679 40.9723C96.1765 40.8471 96.1851 40.7244 96.194 40.604C96.2038 40.4698 96.2139 40.3386 96.2241 40.2103C96.2685 39.6517 96.3165 39.149 96.3679 38.702C96.4351 38.1183 96.5082 37.6298 96.5873 37.2365C96.612 37.1136 96.6373 36.9999 96.6631 36.8956C96.668 36.876 96.6728 36.8568 96.6777 36.8379C96.6777 36.0628 96.7152 35.2472 96.7901 34.3909C96.8092 34.1725 96.8307 33.9513 96.8547 33.7276C96.9026 33.281 96.9602 32.8238 97.0275 32.3562C97.09 31.9217 97.1609 31.4781 97.2402 31.0254C97.2402 30.9247 97.2404 30.825 97.2408 30.7261C97.2444 29.8518 97.2638 29.0487 97.2991 28.3169C97.3288 27.7012 97.3696 27.136 97.4217 26.6211C97.4262 26.5767 97.4308 26.5326 97.4355 26.4888C97.4424 26.4241 97.4495 26.3601 97.4568 26.297C97.4602 26.2674 97.4636 26.2381 97.4671 26.2089C97.5333 25.6556 97.6139 25.1673 97.709 24.7441C97.7171 24.7441 97.7254 24.746 97.7339 24.7497C97.8545 24.8031 98.0025 25.2387 98.1777 26.0566L98.2715 26.3379C98.4746 27.4629 98.6309 28.0254 98.7402 28.0254C99.006 29.3391 99.2238 30.3391 99.3936 31.0254C99.4297 31.1712 99.4636 31.3029 99.4954 31.4205C99.6217 31.8878 99.7137 32.1311 99.7715 32.1504C99.8652 33.4004 99.9902 34.0254 100.146 34.0254C100.318 35.6035 100.506 36.4785 100.709 36.6504C100.713 36.7134 100.717 36.7759 100.721 36.8379C100.749 37.214 100.789 37.573 100.842 37.9149C100.924 38.4401 101.036 38.9248 101.178 39.3691L102.021 44.3379L102.584 49.0254C102.584 49.3379 103.865 49.4941 106.428 49.4941H108.021C109.146 49.4941 110.084 49.4316 110.834 49.3066C111.271 49.3066 111.584 48.5566 111.771 47.0566C112.084 45.5254 112.521 43.8379 113.084 41.9941C113.475 40.1504 113.787 39.0879 114.021 38.8066C114.049 38.5583 114.077 38.3409 114.106 38.1543C114.194 37.5892 114.291 37.3066 114.396 37.3066C114.522 36.6241 114.638 36.19 114.747 36.0044C114.788 35.9351 114.827 35.9004 114.865 35.9004L115.521 33.6504L117.396 27.8379L117.865 26.6191L118.803 23.8066C119.118 23.373 119.301 23.0609 119.351 22.8704C119.351 22.87 119.351 22.8696 119.351 22.8691C119.361 22.8336 119.365 22.8024 119.365 22.7754H119.459V22.8691C119.464 23.2682 119.469 23.6552 119.474 24.0303C119.475 24.1199 119.476 24.2089 119.477 24.2972C119.492 25.3541 119.508 26.3126 119.525 27.1726C119.526 27.2013 119.527 27.2299 119.527 27.2584C119.537 27.7115 119.546 28.137 119.556 28.5346C119.558 28.5801 119.559 28.6252 119.56 28.67C119.632 31.4277 119.723 32.8066 119.834 32.8066C119.867 33.5784 119.899 34.2883 119.931 34.9364C119.933 34.9828 119.935 35.029 119.937 35.0749C119.982 35.9802 120.026 36.7614 120.07 37.4184C120.093 37.7669 120.115 38.0806 120.138 38.3592C120.144 38.4396 120.151 38.517 120.157 38.5915C120.169 38.726 120.181 38.8511 120.192 38.9667C120.195 38.9915 120.197 39.0159 120.2 39.0398C120.267 39.6969 120.333 40.0254 120.396 40.0254C120.473 42.8631 120.624 44.5686 120.849 45.1421C120.854 45.1559 120.86 45.1691 120.865 45.1816C120.865 46.5723 121.053 48.2598 121.428 50.2441V50.877L121.615 51.1582L123.959 50.502C124.213 50.4155 124.46 50.3296 124.702 50.2441C125.685 49.8963 126.565 49.5569 127.342 49.226C129.064 48.4925 130.28 47.8006 130.99 47.1504V46.4004C130.678 45.416 130.365 43.7598 130.053 41.4316L129.584 38.0566L129.115 34.0254L128.646 29.3379C128.334 26.166 128.053 20.541 127.803 12.4629V10.0254C127.803 9.21288 127.334 8.80664 126.396 8.80664L124.709 8.33789L121.615 7.68164L117.49 6.93164H117.021C116.725 7.02539 116.412 7.55664 116.084 8.52539C115.85 9.21289 115.631 9.68164 115.428 9.93164C115.334 10.6816 115.209 11.0566 115.053 11.0566C114.881 11.8848 114.725 12.3535 114.584 12.4629C114.365 13.4629 114.178 13.9629 114.021 13.9629C113.943 14.9004 113.787 15.3691 113.553 15.3691C113.475 16.2441 113.35 16.6816 113.178 16.6816C112.74 18.4629 112.428 19.5254 112.24 19.8691C112.062 20.7581 111.913 21.2256 111.791 21.2716C111.785 21.2741 111.778 21.2754 111.771 21.2754C111.739 21.403 111.708 21.5281 111.677 21.6506C111.654 21.7419 111.631 21.8318 111.608 21.9203C110.934 24.5521 110.489 25.9621 110.271 26.1504C110.261 26.2727 110.25 26.3885 110.239 26.498C110.235 26.5286 110.232 26.5587 110.228 26.5883C110.15 27.2651 110.04 27.6817 109.896 27.8379L108.209 34.1191L108.115 34.0254L106.896 27.1816L106.053 23.0566L105.021 18.9316C104.49 16.6348 104.115 15.291 103.896 14.9004C103.818 13.8379 103.693 13.3066 103.521 13.3066L102.396 9.83789C102.231 9.27869 102.075 8.79969 101.928 8.40089C101.917 8.37189 101.906 8.34331 101.896 8.31516C101.804 8.07247 101.716 7.86129 101.632 7.68164C101.429 7.24788 101.246 6.99788 101.084 6.93164H99.7715C99.1934 6.93164 98.6934 7.05664 98.2715 7.30664C96.709 7.40039 95.9277 7.52539 95.9277 7.68164C94.4277 7.85352 93.6777 8.00977 93.6777 8.15039C92.3652 8.33789 91.709 8.49414 91.709 8.61914Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M77.4379 1.46947L84.218 1.63897L88.1539 6.88688L87.1151 9.89694C86.6146 11.3471 86.3722 12.4721 86.2892 13.3112L86.2142 14.0702L86.0594 14.4921C86.0497 14.5556 86.0375 14.6403 86.0235 14.7493C85.9656 15.2013 85.9008 15.8739 85.8344 16.8044L85.6749 19.0369L85.1934 19.5185V25.4515L81.9121 24.3578V24.6269C81.9121 25.9333 81.6568 27.6819 81.325 29.5235C81.2589 30.8883 81.1561 32.1416 80.9833 33.1572C80.8991 33.652 80.7408 34.4575 80.3983 35.2786C81.594 35.1823 82.3605 35.099 82.7369 35.0321L83.2579 34.9394H86.5536L87.8764 36.2622C87.8213 36.6484 87.7691 36.9903 87.7199 37.2879C87.7069 37.3662 87.6942 37.4414 87.6817 37.5136C87.5702 38.1557 87.4752 38.5555 87.3965 38.7129C87.2965 39.8035 87.1913 40.577 87.0807 41.0332C87.0532 41.1465 87.0255 41.2403 86.9973 41.3144C86.9441 41.4551 86.8896 41.5254 86.834 41.5254C86.7925 42.0942 86.7488 42.5551 86.7028 42.9082C86.6963 42.9587 86.6896 43.0069 86.683 43.053C86.6133 43.5346 86.5387 43.7754 86.459 43.7754L85.5215 48.0879V48.1816L85.6152 48.2754C85.8412 48.2953 86.0432 48.3167 86.2211 48.3395C86.8087 48.4146 87.1341 48.5052 87.1975 48.6113C87.2052 48.6241 87.209 48.6371 87.209 48.6504C87.248 48.6563 87.2863 48.6623 87.3239 48.6682C87.5421 48.7025 87.7375 48.7362 87.9102 48.7692C87.9727 48.7812 88.0323 48.793 88.0888 48.8048C88.1145 48.8102 88.1395 48.8155 88.1639 48.8208C88.3002 48.8505 88.4175 48.8796 88.5158 48.9082C88.5974 48.9319 88.6658 48.9553 88.7212 48.9783L88.5653 50.3144H87.8344L87.6911 50.964L87.189 53.6894H86.2488L85.4911 55.3943L82.2236 55.8754C79.164 56.3259 73.3674 56.5019 65.3184 56.5019H65.2789L65.2394 56.5014C63.4164 56.4774 61.8565 56.4168 60.6824 56.2932C60.1458 56.2367 59.3858 56.1384 58.6402 55.9226C58.541 55.8938 58.4031 55.8524 58.2371 55.7942C57.426 55.6516 56.4954 55.3739 55.5862 54.8395C53.687 54.0235 52.2315 52.6389 51.2392 51.5563L50.9265 51.2152L50.6698 50.8301C50.2405 50.1862 49.8551 49.5126 49.5231 48.8102C49.6712 48.7407 49.8146 48.6715 49.9533 48.6028C50.9721 48.0975 51.7345 47.6134 52.2402 47.1504V46.4004C52.1245 46.036 52.0089 45.5795 51.8932 45.031C51.6964 44.0977 51.4995 42.8979 51.3027 41.4316L50.834 38.0566L50.3652 34.0254L49.8965 29.3379C49.584 26.166 49.3027 20.541 49.0527 12.4629V10.0254C49.0527 9.95654 49.0494 9.89063 49.0426 9.82762C49.3486 6.81113 51.5008 5.02584 53.1354 4.26692C54.1455 3.79795 55.1943 3.56918 56.1145 3.45413C56.6456 3.28263 57.1302 3.18986 57.492 3.13422C58.0027 3.05564 58.5343 3.01235 59.0573 2.99037C59.0854 2.98332 59.1111 2.97696 59.1344 2.97123C59.6055 2.85546 60.0939 2.76832 60.5485 2.69914C61.4508 2.56183 62.5622 2.44462 63.8277 2.3397L71.3374 1.56947L77.4379 1.46947ZM64.3809 8.31445C61.9121 8.51757 60.4746 8.73632 60.0684 8.9707C58.6621 8.9707 57.8496 9.0957 57.6309 9.3457C55.8809 9.42382 55.0059 9.83007 55.0059 10.5644V11.8769C54.3809 16.8301 53.9434 24.8301 53.6934 35.8769L53.7871 36.4394L53.6934 37.1894V38.1269C53.9121 42.3769 54.1309 44.5019 54.3496 44.5019C54.5684 45.5176 55.0059 46.5176 55.6621 47.5019C56.6934 48.6269 57.5996 49.2832 58.3809 49.4707C58.6777 49.7832 59.209 49.9394 59.9746 49.9394C59.9746 50.2676 61.7559 50.4551 65.3184 50.5019C73.459 50.5019 78.8025 50.3145 81.3493 49.9395L81.7246 49.0957C81.9121 48.1582 82.0684 47.6895 82.1934 47.6895C82.2289 47.4964 82.2628 47.319 82.2951 47.1573C82.4613 46.3246 82.5836 45.9082 82.6621 45.9082C82.8965 44.8457 83.084 44.3145 83.2246 44.3145C83.334 43.377 83.4902 42.9082 83.6934 42.9082C83.6934 42.6357 83.7246 42.3788 83.7871 42.1375C83.8235 41.9971 83.8705 41.8619 83.928 41.7321C83.9693 41.6388 84.0161 41.5483 84.0684 41.4606C84.0979 41.411 84.1291 41.3623 84.1621 41.3145V41.0332L84.0684 40.9395H83.7871C83.757 40.9448 83.7257 40.9502 83.6934 40.9556C83.6797 40.9578 83.6657 40.9601 83.6516 40.9624C83.5254 40.9829 83.383 41.0035 83.2246 41.0244C83.2024 41.0273 83.1798 41.0303 83.1569 41.0332C83.0058 41.0526 82.8409 41.0722 82.6621 41.092C82.0124 41.1638 81.1801 41.2379 80.1652 41.3144C79.7045 41.3492 79.2061 41.3844 78.6702 41.4201C78.4156 41.437 78.1526 41.4541 77.8811 41.4713C77.8556 41.4729 77.8299 41.4745 77.8042 41.4761C77.7672 41.4784 77.73 41.4808 77.6926 41.4831C76.1475 41.5797 74.3352 41.6797 72.2559 41.7832H68.6934C68.1621 41.7832 67.1621 41.5644 65.6934 41.1269C64.4434 40.4863 63.8184 39.4238 63.8184 37.9394L63.9121 33.6269L64.1934 33.5332C67.9746 33.3457 71.3809 33.2519 74.4121 33.2519H74.5996C74.9183 33.2519 75.1468 32.191 75.2849 30.0691C75.3093 29.6944 75.3308 29.2866 75.3496 28.8457C75.4401 28.3555 75.5197 27.9017 75.5883 27.4843C75.8042 26.1721 75.9121 25.2197 75.9121 24.6269L75.5371 24.0644C73.6889 24.0921 71.9481 24.1321 70.3145 24.1843C68.4606 24.2436 66.745 24.3186 65.1676 24.4095C64.9975 24.4193 64.829 24.4293 64.6621 24.4394L64.2871 24.3457L64.7559 17.8769C64.7559 17.5957 67.0059 17.3457 71.5059 17.1269H72.4434L78.9121 17.0332L79.1934 17.1269V17.0332C79.204 17.0332 79.2144 17.033 79.2248 17.0327C79.5788 17.0224 79.7559 16.8351 79.7559 16.4707L79.8496 16.3769C79.8936 15.7605 79.9392 15.2175 79.9863 14.7481C80.0344 14.269 80.084 13.8665 80.1353 13.5407C80.1574 13.4003 80.1798 13.2742 80.2024 13.1622C80.2402 12.9755 80.2789 12.8283 80.3184 12.7207C80.365 12.2493 80.4374 11.759 80.5355 11.2498C80.6785 10.5078 80.8762 9.7258 81.1286 8.90365C81.2255 8.58815 81.3304 8.26675 81.4434 7.93945L81.1621 7.56445L77.4121 7.4707L71.6934 7.56445L64.3809 8.31445Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M23.5138 0.931641L24.6058 1.37836C26.3133 2.0769 27.2263 3.32777 27.515 3.73771C27.9172 4.3088 28.1998 4.87704 28.3881 5.29415C28.7632 6.12463 29.0886 7.08952 29.3771 8.05874L29.668 8.95549L29.7507 7.96289H30.817L31.4202 5.05664H32.2714C32.3835 4.82391 32.5069 4.58938 32.6428 4.35827C32.9177 3.89099 34.0462 1.97389 36.4647 1.21014L37.3466 0.931641H39.2813L44.0247 1.79408L47.3858 2.50705L48.6884 2.86888C49.8447 3.00909 51.3095 3.43207 52.6308 4.57719C54.5592 6.24853 55.0527 8.45278 55.0527 10.0254V10.2876C55.0215 10.374 55.0059 10.4663 55.0059 10.5644V11.8769C54.9892 12.0092 54.9726 12.1436 54.9562 12.2802C54.9489 12.3407 54.9417 12.4016 54.9345 12.4629C54.4836 16.2936 54.135 21.7855 53.8887 28.9387C53.8886 28.9406 53.8885 28.9426 53.8885 28.9446C53.8371 30.435 53.7903 31.9975 53.7478 33.6321C53.7474 33.6505 53.7469 33.6689 53.7464 33.6873C53.7279 34.4034 53.7102 35.1332 53.6934 35.8769L53.7871 36.4394L53.6934 37.1894V38.1269C53.7517 39.261 53.8101 40.2438 53.8685 41.0753C53.8688 41.0792 53.869 41.0832 53.8693 41.0871C54.0294 43.3637 54.1895 44.5019 54.3496 44.5019C54.4307 44.8784 54.5418 45.2527 54.683 45.6249C54.7815 45.8844 54.8946 46.1429 55.0223 46.4004C55.1468 46.6514 55.2852 46.9014 55.4374 47.1504C55.5092 47.2678 55.5841 47.385 55.6621 47.5019C56.6321 48.5601 57.4914 49.2035 58.2402 49.4323V49.7921L56.2918 51.5759C54.1456 53.5407 50.6616 54.9832 47.1435 56.1815L46.9865 56.235L40.2889 58.1103L36.9339 53.0779C36.0757 54.0771 34.7316 55.0926 32.7361 55.277C31.6394 55.4359 30.464 55.4941 29.2715 55.4941H27.6777C26.3409 55.4941 25.0834 55.4566 24.0686 55.3328C23.62 55.2781 22.8313 55.1647 22.0127 54.8652C21.7912 54.7842 21.4307 54.6417 21.0104 54.4046L18.3505 57.0645H14.1493L12.8697 56.4154C12.7417 56.3505 12.627 56.2936 12.525 56.2441H11.7659L10.6179 55.5094C10.5521 55.4923 10.4692 55.4722 10.3675 55.45L6.75848 54.6626L4.14648 54.2544V54.0612L2.45898 53.8033V52.3544L0.771484 50.6669V47.4432L2.07017 41.4693C2.07963 41.3566 2.08958 41.2302 2.09987 41.0891L2.50556 35.5254H3.17068C3.24987 34.9783 3.34025 34.2989 3.44175 33.4773L3.44594 33.4433L3.91788 29.951L4.36505 26.5525L4.80604 20.9961L4.89562 14.5462L4.8151 10.6813L4.70898 10.1508V9.55664C4.70898 5.31014 8.35201 3.71059 8.96379 3.45568C9.71224 3.14382 10.4922 2.94898 11.1979 2.81981C11.5644 2.69298 11.8784 2.61495 12.0614 2.57137C12.3996 2.49085 12.7718 2.41885 13.1567 2.35352C13.6212 2.19332 14.0337 2.10236 14.2665 2.05385C14.6545 1.97303 15.089 1.90257 15.5445 1.8396C16.081 1.66956 16.5586 1.5872 16.8157 1.54606C17.2114 1.48275 17.6506 1.43337 18.1086 1.39341C19.0951 1.06425 20.0863 0.931641 21.0215 0.931641H23.5138ZM12.959 8.61914C11.459 8.80664 10.709 9.11914 10.709 9.55664L10.8027 10.0254L10.8965 14.5254L10.8027 21.2754L10.334 27.1816L9.86523 30.7441L9.39648 34.2129C9.06836 36.8691 8.81836 38.3691 8.64648 38.7129C8.47461 40.5879 8.28711 41.5254 8.08398 41.5254C8.06132 41.8362 8.03798 42.1148 8.01398 42.3613C7.92213 43.304 7.82047 43.7754 7.70898 43.7754L6.77148 48.0879V48.1816L6.86523 48.2754C7.19887 48.3048 7.48012 48.3373 7.70898 48.3729C8.20898 48.4507 8.45898 48.5432 8.45898 48.6504C9.58398 48.8223 10.1465 48.9785 10.1465 49.1191C10.1611 49.1214 10.1757 49.1237 10.1901 49.126C10.2562 49.1365 10.32 49.147 10.3816 49.1574C11.2249 49.3009 11.6465 49.4444 11.6465 49.5879C12.3967 49.7516 12.9683 49.9391 13.3613 50.1504C13.4185 50.1811 13.4719 50.2124 13.5215 50.2441C13.7621 50.2441 14.2595 50.4238 15.0136 50.7832C15.1897 50.8671 15.3798 50.9609 15.584 51.0645H15.8652L16.1465 50.7832V50.1504C16.1465 50.0818 16.1475 50.0148 16.1496 49.9493C16.1537 49.823 16.1616 49.7025 16.1734 49.5879C16.2224 49.1124 16.3385 48.7374 16.5215 48.4629C16.5585 47.5588 16.6132 46.8374 16.6854 46.2988C16.7654 45.7019 16.867 45.3295 16.9902 45.1816C16.9917 45.1513 16.9932 45.1212 16.9947 45.0912C17.0209 44.5609 17.048 44.0947 17.076 43.6928C17.1637 42.4354 17.2601 41.8066 17.3652 41.8066C17.3821 41.5177 17.3997 41.2396 17.4179 40.9723C17.4265 40.8471 17.4351 40.7244 17.444 40.604C17.4538 40.4698 17.4638 40.3386 17.4741 40.2103C17.5185 39.6517 17.5665 39.149 17.6179 38.702C17.6851 38.1183 17.7582 37.6298 17.8373 37.2365C17.862 37.1136 17.8873 36.9999 17.9131 36.8956C17.918 36.876 17.9228 36.8568 17.9277 36.8379C17.9277 36.0628 17.9652 35.2472 18.0401 34.3909C18.0592 34.1725 18.0807 33.9513 18.1047 33.7276C18.1526 33.281 18.2102 32.8238 18.2775 32.3562C18.34 31.9217 18.4109 31.4781 18.4902 31.0254C18.4902 30.9247 18.4904 30.825 18.4908 30.7261C18.4944 29.8518 18.5138 29.0487 18.5491 28.3169C18.5788 27.7012 18.6196 27.136 18.6717 26.6211C18.6762 26.5767 18.6808 26.5326 18.6855 26.4888C18.6924 26.4241 18.6995 26.3601 18.7068 26.297C18.7102 26.2674 18.7136 26.2381 18.7171 26.2089C18.7833 25.6556 18.8639 25.1673 18.959 24.7441C18.9671 24.7441 18.9754 24.746 18.9839 24.7497C19.1045 24.8031 19.2525 25.2387 19.4277 26.0566L19.5215 26.3379C19.7246 27.4629 19.8809 28.0254 19.9902 28.0254C20.256 29.3391 20.4738 30.3391 20.6436 31.0254C20.6797 31.1712 20.7136 31.3029 20.7454 31.4205C20.8717 31.8878 20.9637 32.1311 21.0215 32.1504C21.1152 33.4004 21.2402 34.0254 21.3965 34.0254C21.5684 35.6035 21.7559 36.4785 21.959 36.6504C21.9628 36.7134 21.967 36.7759 21.9715 36.8379C21.9989 37.214 22.0391 37.573 22.0922 37.9149C22.1737 38.4401 22.2856 38.9248 22.4277 39.3691L23.2715 44.3379L23.834 49.0254C23.834 49.3379 25.1152 49.4941 27.6777 49.4941H29.2715C30.3965 49.4941 31.334 49.4316 32.084 49.3066C32.5215 49.3066 32.834 48.5566 33.0215 47.0566C33.334 45.5254 33.7715 43.8379 34.334 41.9941C34.7246 40.1504 35.0371 39.0879 35.2715 38.8066C35.2986 38.5583 35.3268 38.3409 35.3558 38.1543C35.4439 37.5892 35.5408 37.3066 35.6465 37.3066C35.7716 36.6241 35.8885 36.19 35.997 36.0044C36.0376 35.9351 36.077 35.9004 36.1152 35.9004L36.7715 33.6504L38.6465 27.8379L39.1152 26.6191L40.0527 23.8066C40.3681 23.373 40.5509 23.0609 40.601 22.8704C40.6011 22.87 40.6012 22.8696 40.6013 22.8691C40.6106 22.8336 40.6152 22.8024 40.6152 22.7754H40.709V22.8691C40.7137 23.2682 40.7186 23.6552 40.7236 24.0303C40.7248 24.1199 40.726 24.2089 40.7273 24.2972C40.7419 25.3541 40.758 26.3126 40.7755 27.1726C40.7761 27.2013 40.7766 27.2299 40.7772 27.2584C40.7865 27.7115 40.7963 28.137 40.8064 28.5346C40.8075 28.5801 40.8087 28.6252 40.8098 28.67C40.8817 31.4277 40.9731 32.8066 41.084 32.8066C41.1166 33.5784 41.1487 34.2883 41.1805 34.9364C41.1828 34.9828 41.1851 35.029 41.1873 35.0749C41.2323 35.9802 41.2764 36.7614 41.3197 37.4184C41.3427 37.7669 41.3654 38.0806 41.3879 38.3592C41.3944 38.4396 41.4009 38.517 41.4074 38.5915C41.419 38.726 41.4306 38.8511 41.4421 38.9667C41.4446 38.9915 41.4471 39.0159 41.4496 39.0398C41.5173 39.6969 41.583 40.0254 41.6465 40.0254C41.7228 42.8631 41.8735 44.5686 42.0988 45.1421C42.1042 45.1559 42.1097 45.1691 42.1152 45.1816C42.1152 46.5723 42.3027 48.2598 42.6777 50.2441V50.877L42.8652 51.1582L45.209 50.502C45.4628 50.4155 45.7104 50.3296 45.9518 50.2441C46.9347 49.8963 47.8146 49.5569 48.5915 49.226C50.3137 48.4925 51.53 47.8006 52.2402 47.1504V46.4004C51.9277 45.416 51.6152 43.7598 51.3027 41.4316L50.834 38.0566L50.3652 34.0254L49.8965 29.3379C49.584 26.166 49.3027 20.541 49.0527 12.4629V10.0254C49.0527 9.21288 48.584 8.80664 47.6465 8.80664L45.959 8.33789L42.8652 7.68164L38.7402 6.93164H38.2715C37.9746 7.02539 37.6621 7.55664 37.334 8.52539C37.0996 9.21289 36.8809 9.68164 36.6777 9.93164C36.584 10.6816 36.459 11.0566 36.3027 11.0566C36.1309 11.8848 35.9746 12.3535 35.834 12.4629C35.6152 13.4629 35.4277 13.9629 35.2715 13.9629C35.1934 14.9004 35.0371 15.3691 34.8027 15.3691C34.7246 16.2441 34.5996 16.6816 34.4277 16.6816C33.9902 18.4629 33.6777 19.5254 33.4902 19.8691C33.3124 20.7581 33.1627 21.2256 33.0411 21.2716C33.0345 21.2741 33.028 21.2754 33.0215 21.2754C32.9894 21.403 32.9578 21.5281 32.9267 21.6506C32.9035 21.7419 32.8806 21.8318 32.8579 21.9203C32.1842 24.5521 31.7387 25.9621 31.5215 26.1504C31.5113 26.2727 31.5003 26.3885 31.4885 26.498C31.4852 26.5286 31.4819 26.5587 31.4785 26.5883C31.4003 27.2651 31.2897 27.6817 31.1465 27.8379L29.459 34.1191L29.3652 34.0254L28.1465 27.1816L27.3027 23.0566L26.2715 18.9316C25.7402 16.6348 25.3652 15.291 25.1465 14.9004C25.0684 13.8379 24.9434 13.3066 24.7715 13.3066L23.6465 9.83789C23.4812 9.27869 23.3249 8.79969 23.1777 8.40089C23.167 8.37189 23.1564 8.34331 23.1458 8.31516C23.0543 8.07247 22.9665 7.86129 22.8822 7.68164C22.6786 7.24788 22.4959 6.99788 22.334 6.93164H21.0215C20.4434 6.93164 19.9434 7.05664 19.5215 7.30664C17.959 7.40039 17.1777 7.52539 17.1777 7.68164C15.6777 7.85352 14.9277 8.00977 14.9277 8.15039C13.6152 8.33789 12.959 8.49414 12.959 8.61914ZM1.98984 42.2265C1.98497 42.2557 1.9851 42.2488 1.99203 42.2129C1.99125 42.2179 1.99052 42.2224 1.98984 42.2265Z",
        fill: "#322A0F",
      }),
      E.createElement("path", {
        d: "M436.732 7.0957H437.107L437.389 7.37695V8.4082C437.389 9.45508 437.514 10.6738 437.764 12.0645L437.67 12.4395L437.857 14.3145V15.4395L438.232 26.7832V28.0957L438.139 28.377L438.232 28.8457V30.9082C438.232 33.8145 438.139 37.4082 437.951 41.6895L438.232 41.7832C440.186 41.4707 442.404 41.2832 444.889 41.2207C445.842 40.9707 447.311 40.8457 449.295 40.8457H450.514L452.014 40.752C452.264 40.8457 452.389 40.9395 452.389 41.0332V41.2207C452.076 42.0176 451.857 42.7988 451.732 43.5645C451.545 43.5645 451.42 44.1582 451.357 45.3457C451.139 45.3457 450.982 46.2832 450.889 48.1582C450.639 48.9863 450.451 49.4238 450.326 49.4707L436.92 50.127C436.232 50.2988 434.545 50.4238 431.857 50.502C430.795 50.7988 429.576 50.9473 428.201 50.9473L427.17 51.3223L426.889 51.041V50.8535L427.357 40.377L427.451 30.4395C427.404 19.502 427.248 14.0332 426.982 14.0332L427.076 13.9395V13.8457L426.889 10.8457V9.62695C426.889 9.25195 427.889 9.00195 429.889 8.87695C429.889 8.6582 430.576 8.50195 431.951 8.4082C432.092 8.23633 432.842 8.04883 434.201 7.8457C434.201 7.75195 434.826 7.56445 436.076 7.2832C436.076 7.17383 436.295 7.11133 436.732 7.0957Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M408.139 7.16602H411.045C413.311 7.47852 414.654 7.79102 415.076 8.10352C416.264 8.33789 417.889 9.24414 419.951 10.8223C422.17 13.041 423.482 14.8848 423.889 16.3535C424.092 16.5098 424.279 17.0098 424.451 17.8535C424.592 17.8535 424.748 18.4473 424.92 19.6348C425.076 19.6348 425.17 20.0098 425.201 20.7598V21.2285L425.295 23.0098C425.295 25.8379 425.107 28.0566 424.732 29.666C424.732 30.3691 424.295 32.0879 423.42 34.8223C422.342 37.9004 420.811 40.7441 418.826 43.3535C416.779 45.6035 415.342 46.9473 414.514 47.3848C413.795 48.041 412.357 48.8535 410.201 49.8223C408.139 50.5723 406.951 50.9473 406.639 50.9473L403.732 51.416H400.545C399.857 51.416 398.264 50.9473 395.764 50.0098L393.045 48.1348C391.029 45.9473 389.904 44.416 389.67 43.541C388.904 42.3535 388.186 40.2285 387.514 37.166V36.6035L387.42 33.9785L387.514 31.3535V31.0723C387.826 28.7129 388.295 26.5879 388.92 24.6973L389.482 23.1973C389.795 22.6816 389.951 22.2129 389.951 21.791C390.045 21.791 390.545 20.8535 391.451 18.9785C391.701 18.9785 391.826 18.7598 391.826 18.3223L394.826 14.3848C396.357 12.7441 397.326 11.8379 397.732 11.666C399.357 10.3223 400.92 9.35352 402.42 8.75977C402.42 8.63477 402.607 8.57227 402.982 8.57227C403.045 8.38477 403.639 8.16602 404.764 7.91602C404.764 7.74414 405.514 7.58789 407.014 7.44727C407.014 7.29102 407.389 7.19727 408.139 7.16602ZM406.826 18.1348L405.42 18.6035C405.232 18.6035 404.982 18.7598 404.67 19.0723C403.764 19.4004 402.639 20.4629 401.295 22.2598C399.295 25.0879 398.295 28.1504 398.295 31.4473L398.389 32.0098L398.295 32.1035V32.1973C398.342 33.8223 398.717 35.3848 399.42 36.8848C399.826 37.6191 400.232 38.1816 400.639 38.5723C401.92 39.6348 403.076 40.166 404.107 40.166C404.107 40.2598 404.576 40.3535 405.514 40.4473C407.389 40.166 408.545 39.8535 408.982 39.5098C409.576 39.2754 410.482 38.4941 411.701 37.166C412.811 35.6973 413.592 34.2598 414.045 32.8535C414.857 30.8379 415.264 28.7441 415.264 26.5723C415.264 24.2598 414.92 22.541 414.232 21.416C414.217 21.0723 413.592 20.3535 412.357 19.2598L411.607 18.8848C411.607 18.8066 410.982 18.5566 409.732 18.1348H408.139L408.045 18.041L407.951 18.1348H406.826Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M377.506 6.9082C378.443 6.9082 378.912 7.0957 378.912 7.4707L379.381 10.1895V10.377H379.287L379.381 12.252V12.4395C379.334 15.8926 379.084 17.9238 378.631 18.5332C377.74 18.4082 376.553 18.3457 375.068 18.3457C373.037 18.3457 371.631 18.5332 370.85 18.9082C369.787 19.1738 368.662 19.6738 367.475 20.4082C365.49 21.9551 364.24 23.2988 363.725 24.4395C363.631 24.4395 363.443 24.7832 363.162 25.4707C363.037 25.4707 362.975 25.7207 362.975 26.2207C362.678 26.2207 362.365 27.3457 362.037 29.5957V31.5645C362.334 33.2988 362.615 34.3301 362.881 34.6582C363.74 36.6582 365.115 38.127 367.006 39.0645C367.756 39.5176 368.818 39.8613 370.193 40.0957C370.193 40.2207 370.568 40.2832 371.318 40.2832H372.912C375.256 39.9863 376.756 39.6738 377.412 39.3457L379.381 38.4082C380.396 37.7988 381.053 37.3301 381.35 37.002H381.537C381.85 37.002 382.131 38.0332 382.381 40.0957C382.881 42.8145 383.193 45.377 383.318 47.7832C382.568 48.3145 381.756 48.7207 380.881 49.002C380.709 49.1895 380.271 49.377 379.568 49.5645C379.537 49.7207 379.1 49.8457 378.256 49.9395C378.256 50.127 377.568 50.3145 376.193 50.502C376.021 50.6582 375.053 50.8145 373.287 50.9707C373.287 51.0488 372.725 51.1426 371.6 51.252V51.1582L371.506 51.252H369.912C368.178 51.252 366.615 51.0957 365.225 50.7832C364.725 50.7832 364.131 50.627 363.443 50.3145C362.459 50.127 361.178 49.5957 359.6 48.7207L357.818 47.502C357.803 47.3613 357.303 46.8926 356.318 46.0957C354.318 43.7051 353.318 42.2051 353.318 41.5957C352.787 40.9863 352.193 39.4238 351.537 36.9082L351.068 33.3457C351.068 32.2051 351.287 30.2363 351.725 27.4395C351.85 27.4395 352.006 26.877 352.193 25.752C352.271 25.752 352.428 25.2832 352.662 24.3457C353.162 23.3457 353.443 22.627 353.506 22.1895C353.615 22.1895 353.834 21.8145 354.162 21.0645C355.225 19.0957 356.568 17.2207 358.193 15.4395C360.693 12.9551 362.256 11.6426 362.881 11.502C362.881 11.2988 363.35 10.9863 364.287 10.5645C364.318 10.4238 364.568 10.2676 365.037 10.0957C366.678 9.14258 368.084 8.51758 369.256 8.2207C369.256 8.0332 369.6 7.93945 370.287 7.93945C370.553 7.7207 371.771 7.4082 373.943 7.00195L377.506 6.9082Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M332.482 7.16602H335.389C337.654 7.47852 338.998 7.79102 339.42 8.10352C340.607 8.33789 342.232 9.24414 344.295 10.8223C346.514 13.041 347.826 14.8848 348.232 16.3535C348.436 16.5098 348.623 17.0098 348.795 17.8535C348.936 17.8535 349.092 18.4473 349.264 19.6348C349.42 19.6348 349.514 20.0098 349.545 20.7598V21.2285L349.639 23.0098C349.639 25.8379 349.451 28.0566 349.076 29.666C349.076 30.3691 348.639 32.0879 347.764 34.8223C346.686 37.9004 345.154 40.7441 343.17 43.3535C341.123 45.6035 339.686 46.9473 338.857 47.3848C338.139 48.041 336.701 48.8535 334.545 49.8223C332.482 50.5723 331.295 50.9473 330.982 50.9473L328.076 51.416H324.889C324.201 51.416 322.607 50.9473 320.107 50.0098L317.389 48.1348C315.373 45.9473 314.248 44.416 314.014 43.541C313.248 42.3535 312.529 40.2285 311.857 37.166V36.6035L311.764 33.9785L311.857 31.3535V31.0723C312.17 28.7129 312.639 26.5879 313.264 24.6973L313.826 23.1973C314.139 22.6816 314.295 22.2129 314.295 21.791C314.389 21.791 314.889 20.8535 315.795 18.9785C316.045 18.9785 316.17 18.7598 316.17 18.3223L319.17 14.3848C320.701 12.7441 321.67 11.8379 322.076 11.666C323.701 10.3223 325.264 9.35352 326.764 8.75977C326.764 8.63477 326.951 8.57227 327.326 8.57227C327.389 8.38477 327.982 8.16602 329.107 7.91602C329.107 7.74414 329.857 7.58789 331.357 7.44727C331.357 7.29102 331.732 7.19727 332.482 7.16602ZM331.17 18.1348L329.764 18.6035C329.576 18.6035 329.326 18.7598 329.014 19.0723C328.107 19.4004 326.982 20.4629 325.639 22.2598C323.639 25.0879 322.639 28.1504 322.639 31.4473L322.732 32.0098L322.639 32.1035V32.1973C322.686 33.8223 323.061 35.3848 323.764 36.8848C324.17 37.6191 324.576 38.1816 324.982 38.5723C326.264 39.6348 327.42 40.166 328.451 40.166C328.451 40.2598 328.92 40.3535 329.857 40.4473C331.732 40.166 332.889 39.8535 333.326 39.5098C333.92 39.2754 334.826 38.4941 336.045 37.166C337.154 35.6973 337.936 34.2598 338.389 32.8535C339.201 30.8379 339.607 28.7441 339.607 26.5723C339.607 24.2598 339.264 22.541 338.576 21.416C338.561 21.0723 337.936 20.3535 336.701 19.2598L335.951 18.8848C335.951 18.8066 335.326 18.5566 334.076 18.1348H332.482L332.389 18.041L332.295 18.1348H331.17Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M309.49 6.1582C309.803 6.1582 310.053 6.31445 310.24 6.62695L309.865 15.1582C308.771 15.6582 307.24 15.9082 305.271 15.9082C304.662 16.1582 303.443 16.3145 301.615 16.377C301.037 16.6113 299.818 16.7676 297.959 16.8457L297.865 16.9395L297.959 17.4082V18.5332L298.053 20.877H297.959L298.053 20.9707V21.0645C298.053 28.9238 298.24 35.8926 298.615 41.9707C298.615 43.3926 298.74 44.9238 298.99 46.5645L298.896 46.6582V46.752L299.084 48.3457C298.365 48.9082 297.24 49.1895 295.709 49.1895C295.115 49.3926 294.021 49.5801 292.428 49.752C292.428 49.9238 291.303 50.0488 289.053 50.127C288.209 50.377 287.49 50.502 286.896 50.502H286.521L286.24 50.3145C286.553 47.7051 286.771 44.4551 286.896 40.5645C287.084 39.377 287.334 33.6895 287.646 23.502V18.0645L287.459 17.877L281.084 18.4395C281.084 18.5645 279.646 18.6582 276.771 18.7207L276.396 18.9082C276.115 18.7832 275.959 18.6582 275.928 18.5332V17.127C276.24 14.5488 276.396 12.7676 276.396 11.7832V8.50195C276.396 8.06445 276.803 7.8457 277.615 7.8457L278.178 7.75195L278.271 7.8457H278.365C278.928 7.73633 281.053 7.64258 284.74 7.56445C285.318 7.39258 288.506 7.20508 294.303 7.00195C295.771 6.8457 298.646 6.68945 302.928 6.5332C302.928 6.45508 303.303 6.39258 304.053 6.3457L304.146 6.43945H304.24C304.85 6.31445 305.693 6.25195 306.771 6.25195H308.928L309.49 6.1582Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M257.342 7.16602H260.248C262.514 7.47852 263.857 7.79102 264.279 8.10352C265.467 8.33789 267.092 9.24414 269.154 10.8223C271.373 13.041 272.686 14.8848 273.092 16.3535C273.295 16.5098 273.482 17.0098 273.654 17.8535C273.795 17.8535 273.951 18.4473 274.123 19.6348C274.279 19.6348 274.373 20.0098 274.404 20.7598V21.2285L274.498 23.0098C274.498 25.8379 274.311 28.0566 273.936 29.666C273.936 30.3691 273.498 32.0879 272.623 34.8223C271.545 37.9004 270.014 40.7441 268.029 43.3535C265.982 45.6035 264.545 46.9473 263.717 47.3848C262.998 48.041 261.561 48.8535 259.404 49.8223C257.342 50.5723 256.154 50.9473 255.842 50.9473L252.936 51.416H249.748C249.061 51.416 247.467 50.9473 244.967 50.0098L242.248 48.1348C240.232 45.9473 239.107 44.416 238.873 43.541C238.107 42.3535 237.389 40.2285 236.717 37.166V36.6035L236.623 33.9785L236.717 31.3535V31.0723C237.029 28.7129 237.498 26.5879 238.123 24.6973L238.686 23.1973C238.998 22.6816 239.154 22.2129 239.154 21.791C239.248 21.791 239.748 20.8535 240.654 18.9785C240.904 18.9785 241.029 18.7598 241.029 18.3223L244.029 14.3848C245.561 12.7441 246.529 11.8379 246.936 11.666C248.561 10.3223 250.123 9.35352 251.623 8.75977C251.623 8.63477 251.811 8.57227 252.186 8.57227C252.248 8.38477 252.842 8.16602 253.967 7.91602C253.967 7.74414 254.717 7.58789 256.217 7.44727C256.217 7.29102 256.592 7.19727 257.342 7.16602ZM256.029 18.1348L254.623 18.6035C254.436 18.6035 254.186 18.7598 253.873 19.0723C252.967 19.4004 251.842 20.4629 250.498 22.2598C248.498 25.0879 247.498 28.1504 247.498 31.4473L247.592 32.0098L247.498 32.1035V32.1973C247.545 33.8223 247.92 35.3848 248.623 36.8848C249.029 37.6191 249.436 38.1816 249.842 38.5723C251.123 39.6348 252.279 40.166 253.311 40.166C253.311 40.2598 253.779 40.3535 254.717 40.4473C256.592 40.166 257.748 39.8535 258.186 39.5098C258.779 39.2754 259.686 38.4941 260.904 37.166C262.014 35.6973 262.795 34.2598 263.248 32.8535C264.061 30.8379 264.467 28.7441 264.467 26.5723C264.467 24.2598 264.123 22.541 263.436 21.416C263.42 21.0723 262.795 20.3535 261.561 19.2598L260.811 18.8848C260.811 18.8066 260.186 18.5566 258.936 18.1348H257.342L257.248 18.041L257.154 18.1348H256.029Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M217.24 7.0957L223.24 7.18945L228.021 8.12695L229.99 8.87695C230.568 9.08008 231.381 9.51758 232.428 10.1895C233.881 11.4238 234.818 12.4238 235.24 13.1895C235.99 14.6113 236.365 15.6426 236.365 16.2832L236.834 18.8145L236.365 22.9395C235.959 24.377 235.709 25.0957 235.615 25.0957C235.115 27.002 233.521 29.3145 230.834 32.0332C228.334 34.0645 226.396 35.3145 225.021 35.7832C225.021 35.9082 224.771 35.9707 224.271 35.9707L224.084 36.252C225.162 37.2051 226.6 38.2363 228.396 39.3457C228.725 39.6426 229.912 40.3301 231.959 41.4082C233.584 42.2363 234.396 42.7051 234.396 42.8145C234.584 42.8145 234.678 42.9395 234.678 43.1895C232.709 45.8926 230.271 48.3301 227.365 50.502L226.24 51.3223H226.053C225.115 50.666 223.771 49.4551 222.021 47.6895C220.865 46.5176 219.584 45.0801 218.178 43.377C217.834 43.0957 216.584 41.5332 214.428 38.6895L214.24 38.9707L214.334 39.4395V39.8145C214.334 40.9707 214.178 42.9707 213.865 45.8145C213.865 46.3926 213.709 47.3926 213.396 48.8145V49.1895C213.396 49.5645 211.928 49.8145 208.99 49.9395H206.928L206.553 50.0332C204.49 49.7988 203.459 49.5488 203.459 49.2832C203.693 48.2363 203.881 46.5801 204.021 44.3145C204.24 44.3145 204.396 39.8145 204.49 30.8145C204.381 19.9395 204.162 14.502 203.834 14.502V14.3145H203.928C203.865 12.6426 203.709 11.0801 203.459 9.62695C203.693 9.33008 205.1 8.83008 207.678 8.12695C208.021 8.12695 208.678 7.9707 209.646 7.6582C210.318 7.6582 211.225 7.50195 212.365 7.18945L217.24 7.0957ZM215.271 16.2832H214.428L213.959 16.377C214.209 17.002 214.365 20.9082 214.428 28.0957V28.6582L214.334 28.9395L214.428 29.2207H215.646C218.365 28.8457 220.396 28.2207 221.74 27.3457C221.928 27.3457 222.178 27.1895 222.49 26.877C223.506 26.502 224.631 25.4082 225.865 23.5957C226.225 23.0488 226.475 22.0176 226.615 20.502V20.4082L226.24 18.7207C225.662 17.8457 225.006 17.252 224.271 16.9395C223.35 16.502 222.475 16.2832 221.646 16.2832L218.834 16.002C217.85 16.002 216.662 16.0957 215.271 16.2832Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M182.928 7.00195C185.1 7.00195 186.881 7.18945 188.271 7.56445C188.646 7.56445 189.553 7.81445 190.99 8.31445C193.35 9.06445 195.537 10.4082 197.553 12.3457C198.803 13.9082 199.553 15.127 199.803 16.002C199.928 16.002 200.084 16.4395 200.271 17.3145C200.443 17.3145 200.631 18.5645 200.834 21.0645C200.834 22.7832 200.396 24.7207 199.521 26.877C199.365 26.877 199.209 27.1582 199.053 27.7207C198.818 27.8613 198.443 28.3926 197.928 29.3145C195.896 31.4238 194.584 32.5801 193.99 32.7832C192.975 33.5801 191.912 34.2363 190.803 34.752C188.709 35.8145 186.709 36.627 184.803 37.1895L183.959 37.377C183.881 37.5801 182.85 37.8613 180.865 38.2207C180.1 38.5332 178.412 38.9082 175.803 39.3457C175.365 40.9863 175.146 43.1738 175.146 45.9082C174.896 46.8457 174.771 47.877 174.771 49.002V49.1895C174.771 49.5332 173.74 49.8457 171.678 50.127C171.678 50.2988 170.865 50.4238 169.24 50.502C168.959 50.7207 167.928 50.8691 166.146 50.9473C165.678 51.1973 165.146 51.3223 164.553 51.3223C164.396 51.3223 164.303 51.1973 164.271 50.9473C164.584 49.2754 164.771 47.252 164.834 44.877C165.068 44.1426 165.256 41.5488 165.396 37.0957C165.6 37.0957 165.725 31.2832 165.771 19.6582L165.678 9.5332C166.1 9.0957 166.756 8.87695 167.646 8.87695C167.678 8.6582 168.334 8.50195 169.615 8.4082C169.818 8.18945 170.631 8.0332 172.053 7.93945C172.053 7.75195 173.271 7.56445 175.709 7.37695C175.709 7.25195 176.365 7.1582 177.678 7.0957L182.928 7.00195ZM175.99 16.4707L176.178 17.4082V17.5957H176.084L176.178 18.7207V25.377C176.178 27.2363 176.115 28.5801 175.99 29.4082H176.365L179.084 28.9395C179.084 28.8145 179.74 28.6582 181.053 28.4707C181.053 28.3457 181.521 28.1895 182.459 28.002C182.459 27.8457 182.896 27.7207 183.771 27.627L186.49 26.127C187.912 25.0332 188.693 24.127 188.834 23.4082C189.006 23.4082 189.193 22.6582 189.396 21.1582C189.225 19.7676 188.912 18.7988 188.459 18.252C188.193 17.8145 187.943 17.5957 187.709 17.5957C186.584 16.5957 185.303 16.0957 183.865 16.0957C183.865 15.9238 183.396 15.7988 182.459 15.7207H179.74C177.24 15.9863 175.99 16.2363 175.99 16.4707Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M156.162 7.4707L159.912 7.56445L160.193 7.93945C159.584 9.70508 159.209 11.2988 159.068 12.7207C158.896 13.1895 158.74 14.4082 158.6 16.377L158.506 16.4707C158.506 16.8457 158.318 17.0332 157.943 17.0332V17.127L157.662 17.0332L151.193 17.127H150.256C145.756 17.3457 143.506 17.5957 143.506 17.877L143.037 24.3457L143.412 24.4395C146.49 24.252 150.115 24.127 154.287 24.0645L154.662 24.627C154.662 25.4082 154.475 26.8145 154.1 28.8457C153.975 31.7832 153.725 33.252 153.35 33.252H153.162C150.131 33.252 146.725 33.3457 142.943 33.5332L142.662 33.627L142.568 37.9395C142.568 39.4238 143.193 40.4863 144.443 41.127C145.912 41.5645 146.912 41.7832 147.443 41.7832H151.006C157.287 41.4707 161.131 41.1895 162.537 40.9395H162.818L162.912 41.0332V41.3145C162.6 41.7676 162.443 42.2988 162.443 42.9082C162.24 42.9082 162.084 43.377 161.975 44.3145C161.834 44.3145 161.646 44.8457 161.412 45.9082C161.318 45.9082 161.162 46.502 160.943 47.6895C160.818 47.6895 160.662 48.1582 160.475 49.0957L160.1 49.9395C157.553 50.3145 152.209 50.502 144.068 50.502C140.506 50.4551 138.725 50.2676 138.725 49.9395C137.959 49.9395 137.428 49.7832 137.131 49.4707C136.35 49.2832 135.443 48.627 134.412 47.502C133.756 46.5176 133.318 45.5176 133.1 44.502C132.881 44.502 132.662 42.377 132.443 38.127V37.1895L132.537 36.4395L132.443 35.877C132.693 24.8301 133.131 16.8301 133.756 11.877V10.5645C133.756 9.83008 134.631 9.42383 136.381 9.3457C136.6 9.0957 137.412 8.9707 138.818 8.9707C139.225 8.73633 140.662 8.51758 143.131 8.31445L150.443 7.56445L156.162 7.4707Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M99.7715 6.93164H101.084C101.428 7.07227 101.865 8.04102 102.396 9.83789L103.521 13.3066C103.693 13.3066 103.818 13.8379 103.896 14.9004C104.115 15.291 104.49 16.6348 105.021 18.9316L106.053 23.0566L106.896 27.1816L108.115 34.0254L108.209 34.1191L109.896 27.8379C110.068 27.6504 110.193 27.0879 110.271 26.1504C110.506 25.9473 111.006 24.3223 111.771 21.2754C111.896 21.2754 112.053 20.8066 112.24 19.8691C112.428 19.5254 112.74 18.4629 113.178 16.6816C113.35 16.6816 113.475 16.2441 113.553 15.3691C113.787 15.3691 113.943 14.9004 114.021 13.9629C114.178 13.9629 114.365 13.4629 114.584 12.4629C114.725 12.3535 114.881 11.8848 115.053 11.0566C115.209 11.0566 115.334 10.6816 115.428 9.93164C115.631 9.68164 115.85 9.21289 116.084 8.52539C116.412 7.55664 116.725 7.02539 117.021 6.93164H117.49L121.615 7.68164L124.709 8.33789L126.396 8.80664C127.334 8.80664 127.803 9.21289 127.803 10.0254V12.4629C128.053 20.541 128.334 26.166 128.646 29.3379L129.115 34.0254L129.584 38.0566L130.053 41.4316C130.365 43.7598 130.678 45.416 130.99 46.4004V47.1504C129.881 48.166 127.537 49.2832 123.959 50.502L121.615 51.1582L121.428 50.877V50.2441C121.053 48.2598 120.865 46.5723 120.865 45.1816C120.631 44.6504 120.475 42.9316 120.396 40.0254C120.225 40.0254 120.037 37.6191 119.834 32.8066C119.662 32.8066 119.537 29.4941 119.459 22.8691V22.7754H119.365C119.365 22.9473 119.178 23.291 118.803 23.8066L117.865 26.6191L117.396 27.8379L115.521 33.6504L114.865 35.9004C114.725 35.9004 114.568 36.3691 114.396 37.3066C114.256 37.3066 114.131 37.8066 114.021 38.8066C113.787 39.0879 113.475 40.1504 113.084 41.9941C112.521 43.8379 112.084 45.5254 111.771 47.0566C111.584 48.5566 111.271 49.3066 110.834 49.3066C110.084 49.4316 109.146 49.4941 108.021 49.4941H106.428C103.865 49.4941 102.584 49.3379 102.584 49.0254L102.021 44.3379L101.178 39.3691C100.928 38.5879 100.771 37.6816 100.709 36.6504C100.506 36.4785 100.318 35.6035 100.146 34.0254C99.9902 34.0254 99.8652 33.4004 99.7715 32.1504C99.6309 32.1035 99.2871 30.7285 98.7402 28.0254C98.6309 28.0254 98.4746 27.4629 98.2715 26.3379L98.1777 26.0566C97.9902 25.1816 97.834 24.7441 97.709 24.7441C97.3965 26.1348 97.2402 28.2285 97.2402 31.0254C96.8652 33.166 96.6777 35.1035 96.6777 36.8379C96.4434 37.7441 96.2559 39.4004 96.1152 41.8066C95.9746 41.8066 95.8496 42.9316 95.7402 45.1816C95.5059 45.4629 95.3496 46.5566 95.2715 48.4629C95.0215 48.8379 94.8965 49.4004 94.8965 50.1504V50.7832L94.6152 51.0645H94.334C93.2559 50.5176 92.5684 50.2441 92.2715 50.2441C91.8809 49.9941 91.2559 49.7754 90.3965 49.5879C90.3965 49.4316 89.8965 49.2754 88.8965 49.1191C88.8965 48.9785 88.334 48.8223 87.209 48.6504C87.209 48.4941 86.6777 48.3691 85.6152 48.2754L85.5215 48.1816V48.0879L86.459 43.7754C86.5996 43.7754 86.7246 43.0254 86.834 41.5254C87.0371 41.5254 87.2246 40.5879 87.3965 38.7129C87.5684 38.3691 87.8184 36.8691 88.1465 34.2129L88.6152 30.7441L89.084 27.1816L89.5527 21.2754L89.6465 14.5254L89.5527 10.0254L89.459 9.55664C89.459 9.11914 90.209 8.80664 91.709 8.61914C91.709 8.49414 92.3652 8.33789 93.6777 8.15039C93.6777 8.00977 94.4277 7.85352 95.9277 7.68164C95.9277 7.52539 96.709 7.40039 98.2715 7.30664C98.6934 7.05664 99.1934 6.93164 99.7715 6.93164Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M77.4121 7.4707L81.1621 7.56445L81.4434 7.93945C80.834 9.70508 80.459 11.2988 80.3184 12.7207C80.1465 13.1895 79.9902 14.4082 79.8496 16.377L79.7559 16.4707C79.7559 16.8457 79.5684 17.0332 79.1934 17.0332V17.127L78.9121 17.0332L72.4434 17.127H71.5059C67.0059 17.3457 64.7559 17.5957 64.7559 17.877L64.2871 24.3457L64.6621 24.4395C67.7402 24.252 71.3652 24.127 75.5371 24.0645L75.9121 24.627C75.9121 25.4082 75.7246 26.8145 75.3496 28.8457C75.2246 31.7832 74.9746 33.252 74.5996 33.252H74.4121C71.3809 33.252 67.9746 33.3457 64.1934 33.5332L63.9121 33.627L63.8184 37.9395C63.8184 39.4238 64.4434 40.4863 65.6934 41.127C67.1621 41.5645 68.1621 41.7832 68.6934 41.7832H72.2559C78.5371 41.4707 82.3809 41.1895 83.7871 40.9395H84.0684L84.1621 41.0332V41.3145C83.8496 41.7676 83.6934 42.2988 83.6934 42.9082C83.4902 42.9082 83.334 43.377 83.2246 44.3145C83.084 44.3145 82.8965 44.8457 82.6621 45.9082C82.5684 45.9082 82.4121 46.502 82.1934 47.6895C82.0684 47.6895 81.9121 48.1582 81.7246 49.0957L81.3496 49.9395C78.8027 50.3145 73.459 50.502 65.3184 50.502C61.7559 50.4551 59.9746 50.2676 59.9746 49.9395C59.209 49.9395 58.6777 49.7832 58.3809 49.4707C57.5996 49.2832 56.6934 48.627 55.6621 47.502C55.0059 46.5176 54.5684 45.5176 54.3496 44.502C54.1309 44.502 53.9121 42.377 53.6934 38.127V37.1895L53.7871 36.4395L53.6934 35.877C53.9434 24.8301 54.3809 16.8301 55.0059 11.877V10.5645C55.0059 9.83008 55.8809 9.42383 57.6309 9.3457C57.8496 9.0957 58.6621 8.9707 60.0684 8.9707C60.4746 8.73633 61.9121 8.51758 64.3809 8.31445L71.6934 7.56445L77.4121 7.4707Z",
        fill: "#FAD34B",
      }),
      E.createElement("path", {
        d: "M21.0215 6.93164H22.334C22.6777 7.07227 23.1152 8.04102 23.6465 9.83789L24.7715 13.3066C24.9434 13.3066 25.0684 13.8379 25.1465 14.9004C25.3652 15.291 25.7402 16.6348 26.2715 18.9316L27.3027 23.0566L28.1465 27.1816L29.3652 34.0254L29.459 34.1191L31.1465 27.8379C31.3184 27.6504 31.4434 27.0879 31.5215 26.1504C31.7559 25.9473 32.2559 24.3223 33.0215 21.2754C33.1465 21.2754 33.3027 20.8066 33.4902 19.8691C33.6777 19.5254 33.9902 18.4629 34.4277 16.6816C34.5996 16.6816 34.7246 16.2441 34.8027 15.3691C35.0371 15.3691 35.1934 14.9004 35.2715 13.9629C35.4277 13.9629 35.6152 13.4629 35.834 12.4629C35.9746 12.3535 36.1309 11.8848 36.3027 11.0566C36.459 11.0566 36.584 10.6816 36.6777 9.93164C36.8809 9.68164 37.0996 9.21289 37.334 8.52539C37.6621 7.55664 37.9746 7.02539 38.2715 6.93164H38.7402L42.8652 7.68164L45.959 8.33789L47.6465 8.80664C48.584 8.80664 49.0527 9.21289 49.0527 10.0254V12.4629C49.3027 20.541 49.584 26.166 49.8965 29.3379L50.3652 34.0254L50.834 38.0566L51.3027 41.4316C51.6152 43.7598 51.9277 45.416 52.2402 46.4004V47.1504C51.1309 48.166 48.7871 49.2832 45.209 50.502L42.8652 51.1582L42.6777 50.877V50.2441C42.3027 48.2598 42.1152 46.5723 42.1152 45.1816C41.8809 44.6504 41.7246 42.9316 41.6465 40.0254C41.4746 40.0254 41.2871 37.6191 41.084 32.8066C40.9121 32.8066 40.7871 29.4941 40.709 22.8691V22.7754H40.6152C40.6152 22.9473 40.4277 23.291 40.0527 23.8066L39.1152 26.6191L38.6465 27.8379L36.7715 33.6504L36.1152 35.9004C35.9746 35.9004 35.8184 36.3691 35.6465 37.3066C35.5059 37.3066 35.3809 37.8066 35.2715 38.8066C35.0371 39.0879 34.7246 40.1504 34.334 41.9941C33.7715 43.8379 33.334 45.5254 33.0215 47.0566C32.834 48.5566 32.5215 49.3066 32.084 49.3066C31.334 49.4316 30.3965 49.4941 29.2715 49.4941H27.6777C25.1152 49.4941 23.834 49.3379 23.834 49.0254L23.2715 44.3379L22.4277 39.3691C22.1777 38.5879 22.0215 37.6816 21.959 36.6504C21.7559 36.4785 21.5684 35.6035 21.3965 34.0254C21.2402 34.0254 21.1152 33.4004 21.0215 32.1504C20.8809 32.1035 20.5371 30.7285 19.9902 28.0254C19.8809 28.0254 19.7246 27.4629 19.5215 26.3379L19.4277 26.0566C19.2402 25.1816 19.084 24.7441 18.959 24.7441C18.6465 26.1348 18.4902 28.2285 18.4902 31.0254C18.1152 33.166 17.9277 35.1035 17.9277 36.8379C17.6934 37.7441 17.5059 39.4004 17.3652 41.8066C17.2246 41.8066 17.0996 42.9316 16.9902 45.1816C16.7559 45.4629 16.5996 46.5566 16.5215 48.4629C16.2715 48.8379 16.1465 49.4004 16.1465 50.1504V50.7832L15.8652 51.0645H15.584C14.5059 50.5176 13.8184 50.2441 13.5215 50.2441C13.1309 49.9941 12.5059 49.7754 11.6465 49.5879C11.6465 49.4316 11.1465 49.2754 10.1465 49.1191C10.1465 48.9785 9.58398 48.8223 8.45898 48.6504C8.45898 48.4941 7.92773 48.3691 6.86523 48.2754L6.77148 48.1816V48.0879L7.70898 43.7754C7.84961 43.7754 7.97461 43.0254 8.08398 41.5254C8.28711 41.5254 8.47461 40.5879 8.64648 38.7129C8.81836 38.3691 9.06836 36.8691 9.39648 34.2129L9.86523 30.7441L10.334 27.1816L10.8027 21.2754L10.8965 14.5254L10.8027 10.0254L10.709 9.55664C10.709 9.11914 11.459 8.80664 12.959 8.61914C12.959 8.49414 13.6152 8.33789 14.9277 8.15039C14.9277 8.00977 15.6777 7.85352 17.1777 7.68164C17.1777 7.52539 17.959 7.40039 19.5215 7.30664C19.9434 7.05664 20.4434 6.93164 21.0215 6.93164Z",
        fill: "#FAD34B",
      })
    ),
  Qu = E.forwardRef(Ku),
  Xu = (e, t) =>
    E.createElement(
      "svg",
      {
        width: 1524,
        height: 274,
        viewBox: "0 0 1524 274",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: t,
        ...e,
      },
      E.createElement("path", {
        d: "M67.5 7.49999C89 7.49999 105.875 12.875 118.125 23.625C130.625 34.125 136.875 50.625 136.875 73.125V204.375C136.875 226.875 130.625 243.5 118.125 254.25C105.875 264.75 89 270 67.5 270H0V7.49999H67.5ZM60.375 217.875H67.125C70.375 217.875 72.75 217.125 74.25 215.625C76 213.875 76.875 210.5 76.875 205.5V72C76.875 67 76 63.75 74.25 62.25C72.75 60.5 70.375 59.625 67.125 59.625H60.375V217.875Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M145.011 72.75C145.011 49.75 150.886 32.5 162.636 21C174.636 9.5 191.386 3.75 212.886 3.75C234.636 3.75 251.636 9.62499 263.886 21.375C276.386 32.875 282.636 50 282.636 72.75V204.375C282.636 227.125 276.386 244.375 263.886 256.125C251.636 267.875 234.636 273.75 212.886 273.75C191.386 273.75 174.636 268 162.636 256.5C150.886 244.75 145.011 227.375 145.011 204.375V72.75ZM205.011 209.25C205.011 213.75 205.886 217 207.636 219C209.386 220.75 211.386 221.625 213.636 221.625C216.136 221.625 218.261 220.75 220.011 219C221.761 217 222.636 213.75 222.636 209.25V68.25C222.636 63.5 221.761 60.25 220.011 58.5C218.261 56.75 216.136 55.875 213.636 55.875C211.386 55.875 209.386 56.75 207.636 58.5C205.886 60.25 205.011 63.5 205.011 68.25V209.25Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M432.888 7.49999V270H367.638L341.013 112.875H337.638L350.763 270H290.763V7.49999H356.013L384.138 165.75H387.513L372.888 7.49999H432.888Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M446.525 0H500.15L481.775 115.875H441.65L446.525 0Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M638.783 59.625H602.783V270H542.783V59.625H506.408V7.49999H638.783V59.625Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M763.787 7.49999L766.037 166.125H770.162L778.412 7.49999H817.412L826.037 166.125H830.162L832.412 7.49999H892.412L871.037 270H804.287L799.412 159.375H795.287L790.412 270H724.037L703.787 7.49999H763.787Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M894.645 72.75C894.645 49.75 900.52 32.5 912.27 21C924.27 9.5 941.02 3.75 962.52 3.75C984.27 3.75 1001.27 9.62499 1013.52 21.375C1026.02 32.875 1032.27 50 1032.27 72.75V204.375C1032.27 227.125 1026.02 244.375 1013.52 256.125C1001.27 267.875 984.27 273.75 962.52 273.75C941.02 273.75 924.27 268 912.27 256.5C900.52 244.75 894.645 227.375 894.645 204.375V72.75ZM954.645 209.25C954.645 213.75 955.52 217 957.27 219C959.02 220.75 961.02 221.625 963.27 221.625C965.77 221.625 967.895 220.75 969.645 219C971.395 217 972.27 213.75 972.27 209.25V68.25C972.27 63.5 971.395 60.25 969.645 58.5C967.895 56.75 965.77 55.875 963.27 55.875C961.02 55.875 959.02 56.75 957.27 58.5C955.52 60.25 954.645 63.5 954.645 68.25V209.25Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M1107.9 7.125C1129.9 7.125 1146.9 13 1158.9 24.75C1170.9 36.25 1176.9 53.875 1176.9 77.625V79.125C1176.9 89.875 1175.65 99.375 1173.15 107.625C1170.9 115.625 1167.9 122.375 1164.15 127.875C1160.4 133.125 1156.27 137.25 1151.77 140.25C1147.27 143 1142.9 144.5 1138.65 144.75V148.875C1142.9 149.125 1147.27 150.875 1151.77 154.125C1156.27 157.125 1160.4 161.375 1164.15 166.875C1167.9 172.375 1170.9 179.125 1173.15 187.125C1175.65 194.875 1176.9 203.625 1176.9 213.375V216.375C1176.9 227.125 1177.02 236.75 1177.27 245.25C1177.77 253.75 1178.9 262 1180.65 270H1121.02C1119.27 262 1118.15 253.625 1117.65 244.875C1117.4 235.875 1117.27 226.25 1117.27 216V185.625C1117.27 180.875 1116.52 177.625 1115.02 175.875C1113.52 173.875 1110.9 172.875 1107.15 172.875H1100.77V270H1040.77V7.125H1107.9ZM1100.77 120.75H1107.15C1110.9 120.75 1113.52 119.75 1115.02 117.75C1116.52 115.75 1117.27 112.375 1117.27 107.625V72C1117.27 67.5 1116.52 64.25 1115.02 62.25C1113.52 60.25 1110.9 59.25 1107.15 59.25H1100.77V120.75Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M1253.28 7.125C1275.28 7.125 1292.28 13 1304.28 24.75C1316.28 36.25 1322.28 53.875 1322.28 77.625V79.125C1322.28 89.875 1321.03 99.375 1318.53 107.625C1316.28 115.625 1313.28 122.375 1309.53 127.875C1305.78 133.125 1301.66 137.25 1297.16 140.25C1292.66 143 1288.28 144.5 1284.03 144.75V148.875C1288.28 149.125 1292.66 150.875 1297.16 154.125C1301.66 157.125 1305.78 161.375 1309.53 166.875C1313.28 172.375 1316.28 179.125 1318.53 187.125C1321.03 194.875 1322.28 203.625 1322.28 213.375V216.375C1322.28 227.125 1322.41 236.75 1322.66 245.25C1323.16 253.75 1324.28 262 1326.03 270H1266.41C1264.66 262 1263.53 253.625 1263.03 244.875C1262.78 235.875 1262.66 226.25 1262.66 216V185.625C1262.66 180.875 1261.91 177.625 1260.41 175.875C1258.91 173.875 1256.28 172.875 1252.53 172.875H1246.16V270H1186.16V7.125H1253.28ZM1246.16 120.75H1252.53C1256.28 120.75 1258.91 119.75 1260.41 117.75C1261.91 115.75 1262.66 112.375 1262.66 107.625V72C1262.66 67.5 1261.91 64.25 1260.41 62.25C1258.91 60.25 1256.28 59.25 1252.53 59.25H1246.16V120.75Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M1378.66 7.49999L1385.03 115.125H1389.16L1395.16 7.49999H1455.16L1416.53 198V270H1356.53V198L1318.66 7.49999H1378.66Z",
        fill: "#64541E",
      }),
      E.createElement("path", {
        d: "M1523.06 7.49999V45L1516.31 206.625H1469.43L1463.06 45V7.49999H1523.06ZM1463.43 240.75C1463.43 220.25 1473.31 210 1493.06 210C1502.56 210 1509.81 212.75 1514.81 218.25C1520.06 223.5 1522.68 231.125 1522.68 241.125C1522.68 261.625 1512.81 271.875 1493.06 271.875C1473.31 271.875 1463.43 261.5 1463.43 240.75Z",
        fill: "#64541E",
      })
    );
E.forwardRef(Xu);
const $u = (e, t) =>
    E.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 25,
        viewBox: "0 0 24 25",
        fill: "none",
        ref: t,
        ...e,
      },
      E.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8.53033 7.17963C8.82322 7.47252 8.82322 7.9474 8.53033 8.24029L4.81066 11.96H21C21.4142 11.96 21.75 12.2957 21.75 12.71C21.75 13.1242 21.4142 13.46 21 13.46H4.81066L8.53033 17.1796C8.82322 17.4725 8.82322 17.9474 8.53033 18.2403C8.23744 18.5332 7.76256 18.5332 7.46967 18.2403L2.46967 13.2403C2.17678 12.9474 2.17678 12.4725 2.46967 12.1796L7.46967 7.17963C7.76256 6.88674 8.23744 6.88674 8.53033 7.17963Z",
        fill: "white",
      })
    ),
  o3 = E.forwardRef($u),
  Ju = "################",
  qu = {
    telegram: "https://t.me/edog_erc20",
    twitter: "https://x.com/edog_erc20",
    dextools: "https://www.dextools.io/app/en/ether/pair-explorer/0x6Cd68bC3afaed4743508f80278e8C2390A41d398",
    dex: "#",
    dexscreener: "https://dexscreener.com/ethereum/0x6Cd68bC3afaed4743508f80278e8C2390A41d398",
  },
  e6 = { contractAddress: Ju, link: qu },
  t6 = "0x6Cd68bC3afaed4743508f80278e8C2390A41d398",
  n6 = {
    telegram: "https://t.me/edog_erc20",
    twitter: "https://x.com/edog_erc20",
    dextools: "https://www.dextools.io/app/en/ether/pair-explorer/0x6Cd68bC3afaed4743508f80278e8C2390A41d398",
    dexscreener: "https://dexscreener.com/ethereum/0x6Cd68bC3afaed4743508f80278e8C2390A41d398",
  },
  r6 = { contractAddress: t6, link: n6 },
  i6 = "prod",
  l6 = { dev: e6, prod: r6 };
let hl = l6[i6];
hl = { ...hl };
const pe = hl;
var o6 = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
      n.push(e.getRangeAt(r));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return (
      e.removeAllRanges(),
      function () {
        e.type === "Caret" && e.removeAllRanges(),
          e.rangeCount ||
            n.forEach(function (i) {
              e.addRange(i);
            }),
          t && t.focus();
      }
    );
  },
  s6 = o6,
  s3 = { "text/plain": "Text", "text/html": "Url", default: "Text" },
  a6 = "Copy to clipboard: #{key}, Enter";
function u6(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function c6(e, t) {
  var n,
    r,
    i,
    l,
    o,
    a,
    s = !1;
  t || (t = {}), (n = t.debug || !1);
  try {
    (i = s6()),
      (l = document.createRange()),
      (o = document.getSelection()),
      (a = document.createElement("span")),
      (a.textContent = e),
      (a.ariaHidden = "true"),
      (a.style.all = "unset"),
      (a.style.position = "fixed"),
      (a.style.top = 0),
      (a.style.clip = "rect(0, 0, 0, 0)"),
      (a.style.whiteSpace = "pre"),
      (a.style.webkitUserSelect = "text"),
      (a.style.MozUserSelect = "text"),
      (a.style.msUserSelect = "text"),
      (a.style.userSelect = "text"),
      a.addEventListener("copy", function (c) {
        if ((c.stopPropagation(), t.format))
          if ((c.preventDefault(), typeof c.clipboardData > "u")) {
            n && console.warn("unable to use e.clipboardData"),
              n && console.warn("trying IE specific stuff"),
              window.clipboardData.clearData();
            var d = s3[t.format] || s3.default;
            window.clipboardData.setData(d, e);
          } else
            c.clipboardData.clearData(), c.clipboardData.setData(t.format, e);
        t.onCopy && (c.preventDefault(), t.onCopy(c.clipboardData));
      }),
      document.body.appendChild(a),
      l.selectNodeContents(a),
      o.addRange(l);
    var u = document.execCommand("copy");
    if (!u) throw new Error("copy command was unsuccessful");
    s = !0;
  } catch (c) {
    n && console.error("unable to copy using execCommand: ", c),
      n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e),
        t.onCopy && t.onCopy(window.clipboardData),
        (s = !0);
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d),
        n && console.error("falling back to prompt"),
        (r = u6("message" in t ? t.message : a6)),
        window.prompt(r, e);
    }
  } finally {
    o &&
      (typeof o.removeRange == "function"
        ? o.removeRange(l)
        : o.removeAllRanges()),
      a && document.body.removeChild(a),
      i();
  }
  return s;
}
var d6 = c6;
const f6 = _n(d6),
  Ao = (e) => {
    try {
      f6(e), J.success("Copied!");
    } catch (t) {
      J.error(t.message || "Something went wrong!");
    }
  },
  ri = (e, t = 10, n = 10) =>
    e ? `${e?.substring(0, t)}...${e.substring(e.length - n, e.length)}` : "--",
  a3 = [
    { name: "About EDog", id: "section-about" },
    { name: "Tokenomic", id: "tokenomics" },
    { name: "How to buy", id: "how-to-buy" },
    { name: "RoadMap", id: "road-map" },
  ],
  n5 = (e) => {
    if (!e) return;
    const n = document?.getElementById(e)?.offsetTop;
    let r = n + 70;
    e === "section-about" &&
      ((r = n + 110), window.innerWidth < 768 && (r = n)),
      e === "how-to-buy" && (r = n - 100),
      window.scrollTo({ top: r, behavior: "smooth" });
  },
  p6 = () => {
    const [e, t] = E.useState(!1),
      [n, r] = E.useState(""),
      i = E.useCallback(() => {
        const l = window.scrollY + 120;
        for (const o of a3) {
          const a = document.getElementById(o.id);
          if (a) {
            const { offsetTop: s, offsetHeight: u } = a;
            if (l >= s && l < s + u) {
              r(o.id);
              return;
            }
          }
        }
        r("");
      }, []);
    return (
      E.useEffect(() => {
        const l = () => {
          const o = window.scrollY;
          t(o >= window.innerHeight / 2), i();
        };
        return (
          window.addEventListener("scroll", l),
          () => window.removeEventListener("scroll", l)
        );
      }, [i]),
      g.jsxs("div", {
        className: `${
          e ? "fixed flex" : "hidden"
        } md:h-[64px] h-[56px] md:px-4 px-2 items-center justify-between bg-neutral-0 z-[99] fixed top-0 left-0 right-0`,
        children: [
          g.jsx("div", {
            className: "gap-6 lg:flex hidden w-[600px]",
            children: a3.map((l, o) =>
              g.jsx(
                "div",
                {
                  onClick: () => n5(l.id),
                  className: `cursor-pointer uppercase text-[16px] leading-[1.5] text-yellow-100 hover:font-bold ${
                    n === l.id ? "font-bold" : "font-medium"
                  }`,
                  children: l.name,
                },
                o
              )
            ),
          }),
          g.jsx("div", {
            className:
              "lg:absolute relative lg:left-[50%] lg:translate-x-[-50%]",
            children: g.jsx("img", {
              src: Ru,
              alt: "logo",
              className: "w-[112px] md:w-[180px]",
            }),
          }),
          g.jsxs("div", {
            className: "flex md:gap-4 gap-2",
            children: [
              g.jsxs("div", {
                className:
                  "flex gap-1 items-center text-[14px] font-normal text-yellow-1000 md:px-4 px-2 md:py-2 py-1 rounded-[100px] bg-alpha-50",
                children: [
                  g.jsxs("div", {
                    className: "md:block hidden",
                    children: ["CA: ", ri(pe.contractAddress, 10, 10)],
                  }),
                  g.jsxs("div", {
                    className: "block md:hidden",
                    children: ["CA: ", ri(pe.contractAddress, 2, 3)],
                  }),
                  g.jsx("div", {
                    className: "cursor-pointer",
                    onClick: () => Ao(pe.contractAddress),
                    children: g.jsx(To, { className: "w-[14px] h-[14px]" }),
                  }),
                ],
              }),
              g.jsx("div", {
                className: "cursor-pointer flex items-center",
                onClick: () => window.open(pe.link.dextools, "_blank"),
                children: g.jsx("img", {
                  src: "/dextools.png",
                  alt: "DexTools",
                  className: "w-[24px] h-[24px]",
                }),
              }),
              g.jsx("a", {
                href: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x6Cd68bC3afaed4743508f80278e8C2390A41d398",
                target: "_blank",
                children: g.jsx("div", {
                  className:
                    "uppercase hover:bg-yellow-900 flex items-center cursor-pointer md:text-[16px] text-[14px] font-bold text-yellow-50 px-3 py-1 md:px-6 md:py-2 rounded-[100px] bg-yellow-1000",
                  children: "Buy Now",
                }),
              }),
            ],
          }),
        ],
      })
    );
  };
var ko = {};
ko.match = y6;
ko.parse = r5;
var h6 = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
  m6 = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
  C6 = /^(?:(min|max)-)?(.+)/,
  v6 = /(em|rem|px|cm|mm|in|pt|pc)?$/,
  g6 = /(dpi|dpcm|dppx)?$/;
function y6(e, t) {
  return r5(e).some(function (n) {
    var r = n.inverse,
      i = n.type === "all" || t.type === n.type;
    if ((i && r) || !(i || r)) return !1;
    var l = n.expressions.every(function (o) {
      var a = o.feature,
        s = o.modifier,
        u = o.value,
        c = t[a];
      if (!c) return !1;
      switch (a) {
        case "orientation":
        case "scan":
          return c.toLowerCase() === u.toLowerCase();
        case "width":
        case "height":
        case "device-width":
        case "device-height":
          (u = d3(u)), (c = d3(c));
          break;
        case "resolution":
          (u = c3(u)), (c = c3(c));
          break;
        case "aspect-ratio":
        case "device-aspect-ratio":
        case "device-pixel-ratio":
          (u = u3(u)), (c = u3(c));
          break;
        case "grid":
        case "color":
        case "color-index":
        case "monochrome":
          (u = parseInt(u, 10) || 1), (c = parseInt(c, 10) || 0);
          break;
      }
      switch (s) {
        case "min":
          return c >= u;
        case "max":
          return c <= u;
        default:
          return c === u;
      }
    });
    return (l && !r) || (!l && r);
  });
}
function r5(e) {
  return e.split(",").map(function (t) {
    t = t.trim();
    var n = t.match(h6),
      r = n[1],
      i = n[2],
      l = n[3] || "",
      o = {};
    return (
      (o.inverse = !!r && r.toLowerCase() === "not"),
      (o.type = i ? i.toLowerCase() : "all"),
      (l = l.match(/\([^\)]+\)/g) || []),
      (o.expressions = l.map(function (a) {
        var s = a.match(m6),
          u = s[1].toLowerCase().match(C6);
        return { modifier: u[1], feature: u[2], value: s[2] };
      })),
      o
    );
  });
}
function u3(e) {
  var t = Number(e),
    n;
  return t || ((n = e.match(/^(\d+)\s*\/\s*(\d+)$/)), (t = n[1] / n[2])), t;
}
function c3(e) {
  var t = parseFloat(e),
    n = String(e).match(g6)[1];
  switch (n) {
    case "dpcm":
      return t / 2.54;
    case "dppx":
      return t * 96;
    default:
      return t;
  }
}
function d3(e) {
  var t = parseFloat(e),
    n = String(e).match(v6)[1];
  switch (n) {
    case "em":
      return t * 16;
    case "rem":
      return t * 16;
    case "cm":
      return (t * 96) / 2.54;
    case "mm":
      return (t * 96) / 2.54 / 10;
    case "in":
      return t * 96;
    case "pt":
      return t * 72;
    case "pc":
      return (t * 72) / 12;
    default:
      return t;
  }
}
var x6 = ko.match,
  f3 = typeof window < "u" ? window.matchMedia : null;
function w6(e, t, n) {
  var r = this,
    i;
  f3 && !n && (i = f3.call(window, e)),
    i
      ? ((this.matches = i.matches), (this.media = i.media), i.addListener(a))
      : ((this.matches = x6(e, t)), (this.media = e)),
    (this.addListener = l),
    (this.removeListener = o),
    (this.dispose = s);
  function l(u) {
    i && i.addListener(u);
  }
  function o(u) {
    i && i.removeListener(u);
  }
  function a(u) {
    (r.matches = u.matches), (r.media = u.media);
  }
  function s() {
    i && i.removeListener(a);
  }
}
function L6(e, t, n) {
  return new w6(e, t, n);
}
var S6 = L6;
const E6 = _n(S6);
var T6 = /[A-Z]/g,
  A6 = /^ms-/,
  c2 = {};
function k6(e) {
  return "-" + e.toLowerCase();
}
function i5(e) {
  if (c2.hasOwnProperty(e)) return c2[e];
  var t = e.replace(T6, k6);
  return (c2[e] = A6.test(t) ? "-" + t : t);
}
function N6(e, t) {
  if (e === t) return !0;
  if (!e || !t) return !1;
  const n = Object.keys(e),
    r = Object.keys(t),
    i = n.length;
  if (r.length !== i) return !1;
  for (let l = 0; l < i; l++) {
    const o = n[l];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1;
  }
  return !0;
}
const ke = W.oneOfType([W.string, W.number]),
  No = {
    all: W.bool,
    grid: W.bool,
    aural: W.bool,
    braille: W.bool,
    handheld: W.bool,
    print: W.bool,
    projection: W.bool,
    screen: W.bool,
    tty: W.bool,
    tv: W.bool,
    embossed: W.bool,
  },
  l5 = {
    orientation: W.oneOf(["portrait", "landscape"]),
    scan: W.oneOf(["progressive", "interlace"]),
    aspectRatio: W.string,
    deviceAspectRatio: W.string,
    height: ke,
    deviceHeight: ke,
    width: ke,
    deviceWidth: ke,
    color: W.bool,
    colorIndex: W.bool,
    monochrome: W.bool,
    resolution: ke,
    type: Object.keys(No),
  },
  { type: yd, ...M6 } = l5,
  o5 = {
    minAspectRatio: W.string,
    maxAspectRatio: W.string,
    minDeviceAspectRatio: W.string,
    maxDeviceAspectRatio: W.string,
    minHeight: ke,
    maxHeight: ke,
    minDeviceHeight: ke,
    maxDeviceHeight: ke,
    minWidth: ke,
    maxWidth: ke,
    minDeviceWidth: ke,
    maxDeviceWidth: ke,
    minColor: W.number,
    maxColor: W.number,
    minColorIndex: W.number,
    maxColorIndex: W.number,
    minMonochrome: W.number,
    maxMonochrome: W.number,
    minResolution: ke,
    maxResolution: ke,
    ...M6,
  },
  P6 = { ...No, ...o5 };
var O6 = { all: P6, types: No, matchers: l5, features: o5 };
const D6 = (e) => `not ${e}`,
  H6 = (e, t) => {
    const n = i5(e);
    return (
      typeof t == "number" && (t = `${t}px`),
      t === !0 ? n : t === !1 ? D6(n) : `(${n}: ${t})`
    );
  },
  R6 = (e) => e.join(" and "),
  j6 = (e) => {
    const t = [];
    return (
      Object.keys(O6.all).forEach((n) => {
        const r = e[n];
        r != null && t.push(H6(n, r));
      }),
      R6(t)
    );
  },
  I6 = E.createContext(void 0),
  V6 = (e) => e.query || j6(e),
  p3 = (e) =>
    e ? Object.keys(e).reduce((n, r) => ((n[i5(r)] = e[r]), n), {}) : void 0,
  s5 = () => {
    const e = E.useRef(!1);
    return (
      E.useEffect(() => {
        e.current = !0;
      }, []),
      e.current
    );
  },
  z6 = (e) => {
    const t = E.useContext(I6),
      n = () => p3(e) || p3(t),
      [r, i] = E.useState(n);
    return (
      E.useEffect(() => {
        const l = n();
        N6(r, l) || i(l);
      }, [e, t]),
      r
    );
  },
  b6 = (e) => {
    const t = () => V6(e),
      [n, r] = E.useState(t);
    return (
      E.useEffect(() => {
        const i = t();
        n !== i && r(i);
      }, [e]),
      n
    );
  },
  B6 = (e, t) => {
    const n = () => E6(e, t || {}, !!t),
      [r, i] = E.useState(n),
      l = s5();
    return (
      E.useEffect(() => {
        if (l) {
          const o = n();
          return (
            i(o),
            () => {
              o && o.dispose();
            }
          );
        }
      }, [e, t]),
      r
    );
  },
  F6 = (e) => {
    const [t, n] = E.useState(e.matches);
    return (
      E.useEffect(() => {
        const r = (i) => {
          n(i.matches);
        };
        return (
          e.addListener(r),
          n(e.matches),
          () => {
            e.removeListener(r);
          }
        );
      }, [e]),
      t
    );
  },
  M1 = (e, t, n) => {
    const r = z6(t),
      i = b6(e);
    if (!i) throw new Error("Invalid or missing MediaQuery!");
    const l = B6(i, r),
      o = F6(l),
      a = s5();
    return (
      E.useEffect(() => {
        a && n && n(o);
      }, [o]),
      E.useEffect(
        () => () => {
          l && l.dispose();
        },
        []
      ),
      o
    );
  },
  U6 = () => {
    const e = M1({ query: "(min-width: 1919px)" }),
      t = M1({ query: "(min-width: 1439px)" }),
      n = M1({ query: "(min-width: 768px)" }),
      r = () => (e ? "1590" : t ? "1192" : n ? "990" : "663"),
      i = () => (e ? "1343" : t ? "1075" : n ? "893" : "600");
    return g.jsx("img", {
      src: `https://dev.edogapt.fun/cdn-cgi/image/width=${r()},height=${i()},fit=cover/assets/bg-hero-moon-DTUCu-1I.png`,
      alt: "bg-hero",
      className:
        "xl:max-w-[1590px] lg:max-w-[1192px] md:max-w-[990px] max-w-[663px]",
    });
  },
  _6 = () => {
    const e = M1({ query: "(min-width: 1439px)" }),
      [t, n] = E.useState("section-about"),
      r = [
        { name: "About", id: "section-about" },
        { name: "Tokenomics", id: "tokenomics" },
        { name: "How to buy", id: "how-to-buy" },
        {
          name: `Buy now 
<span class="line-through">or cry later</span>`,
          id: "buy-now",
        },
        e && { name: "Twitter", id: "twitter" },
        e && { name: "Telegram", id: "telegram" },
        { name: "Dextools", id: "dextools" },
      ].filter(Boolean),
      i = () => {
        const l = pe.link.dextools;
        window?.open(l || "#").focus();
      };
    return g.jsx("div", {
      className: "flex flex-col md:gap-6 gap-[14.5px]",
      children: r.map((l, o) => {
        const a = l.id === t;
        return g.jsxs(
          "div",
          {
            onClick: () => {
              if (l.id === "buy-now") {
                window?.open(pe.link.dex || "#", "_blank").focus();
                return;
              }
              if (l.id === "telegram") {
                window?.open(pe.link.telegram || "#", "_blank").focus();
                return;
              }
              if (l.id === "twitter") {
                window?.open(pe.link.twitter || "#", "_blank").focus();
                return;
              }
              if (l.id === "dextools") {
                i();
                return;
              }
              n5(l.id);
            },
            className: `menu-item group flex items-center cursor-pointer gap-2 text-neutral-0 text-[12px] md:text-[24px] ${
              a ? "font-black menu-active" : "font-normal"
            } uppercase`,
            children: [
              g.jsx(Yu, {
                className: a ? "block" : "group-hover:block hidden",
              }),
              g.jsx("div", {
                className: `md:max-w-[200px] whitespace-break-spaces flex-1 max-w-[110px] ${
                  a ? "font-black" : "hover:font-black"
                } md:leading-[31px] leading-[16px]`,
                dangerouslySetInnerHTML: { __html: l.name },
              }),
            ],
          },
          l.id
        );
      }),
    });
  },
  W6 = () =>
    g.jsx("div", {
      className:
        "bg-blue-900 h-screen bg-cover bg-center bg-no-repeat overflow-hidden",
      style: { backgroundImage: `url(${gu})` },
      children: g.jsxs("div", {
        className:
          "xl:max-w-[1770px] max-w-[1290px] w-full mx-auto relative h-full",
        children: [
          g.jsx("div", {
            className:
              "absolute lg:left-0 right-0 md:right-[40px] lg:top-[95px] md:top-[280px] top-[230px] z-[2] md:w-[200px] w-[110px]",
            children: g.jsx(_6, {}),
          }),
          g.jsx("div", {
            className:
              "absolute lg:top-[50%] lg:translate-y-[-50%] translate-x-[-50%] lg:bottom-auto bottom-0 left-[50%] z-[1]",
            children: g.jsx(U6, {}),
          }),
          g.jsxs("div", {
            className:
              "absolute lg:right-0 lg:left-auto lg:top-[80px] top-[40px] left-[50%] z-[2] lg:translate-x-0 translate-x-[-50%]",
            children: [
              g.jsx("img", {
                src: yu,
                alt: "logo",
                className: "max-w-[330px] md:max-w-full",
              }),
              g.jsxs("div", {
                style: { backgroundImage: `url(${Su})` },
                className:
                  "flex md:mt-[-30px] mt-[-15px] md:h-[61px] h-[39px] mx-auto md:w-[444px] w-[281px] bg-cover justify-center md:gap-6 gap-4 items-center text-[12px] md:text-[20px] text-neutral-0",
                children: [
                  g.jsx("div", { children: "CA" }),
                  g.jsx("div", {
                    style: { textShadow: "0px 0px 6px #ffffffcc" },
                    children: ri(pe.contractAddress),
                  }),
                  g.jsx("div", {
                    className: "cursor-pointer",
                    onClick: () => Ao(pe.contractAddress),
                    children: g.jsx(To, { className: "w-3 md:w-6" }),
                  }),
                ],
              }),
            ],
          }),
          g.jsx("div", {
            className:
              "absolute lg:bottom-[220px] bottom-[160px] lg:left-0 left-[100px] z-[2] hidden md:block",
            children: g.jsx("a", {
              href: pe.link.dexscreener,
              target: "_blank",
              children: g.jsx("img", {
                src: i3,
                alt: "dex-screener",
                className: "w-[62px] md:w-full",
              }),
            }),
          }),
          g.jsx("div", {
            className:
              "absolute bottom-[100px] lg:left-[200px] left-[43%] hidden md:block z-[2]",
            children: g.jsx("a", {
              href: pe.link.dextools,
              target: "_blank",
              children: g.jsx("img", {
                src: r3,
                alt: "dex-tools",
                className: "w-[62px] md:w-full",
              }),
            }),
          }),
          g.jsxs("div", {
            className:
              "flex flex-col gap-2  z-[10] items-center text-[10px]  uppercase text-white absolute bottom-[20px] left-[50%]",
            style: { transform: "translateX(-50%)" },
            children: [
              g.jsxs("div", {
                className: "flex gap-4 md:hidden",
                children: [
                  g.jsx("a", {
                    href: pe.link.dexscreener,
                    target: "_blank",
                    children: g.jsx("img", {
                      src: i3,
                      alt: "dex-screener",
                      className: "w-[62px] md:w-full",
                    }),
                  }),
                  g.jsx("a", {
                    href: pe.link.dextools,
                    target: "_blank",
                    children: g.jsx("img", {
                      src: r3,
                      alt: "dex-tools",
                      className: "w-[62px] md:w-full",
                    }),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "flex items-center opacity-20 cursor-pointer",
                children: [
                  "scroll down to continue ",
                  g.jsx(Wu, { className: "arrow" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  G6 = () =>
    g.jsxs("div", {
      className: "h-full overflow-hidden flex flex-col items-center",
      id: "section-about",
      children: [
        g.jsxs("div", {
          className:
            "md:pt-[216px] pt-[96px] pb-[450px] relative  h-full w-full bg-blue-900",
          children: [
            g.jsx("div", {
              className: "absolute top-0 left-[50%] w-full",
              style: { transform: "translateX(-50%)" },
              children: g.jsx("img", {
                src: xu,
                alt: "pattern",
                className: "w-full",
              }),
            }),
            g.jsx("div", {
              className: "flex flex-col items-center",
              id: "about",
              children: g.jsxs("div", {
                className:
                  "text-center mb-[84px] font-BDCartoon text-yellow-50 lg:text-[56px] md:text-[48px] text-[32px] leading-[1.2]",
                children: [
                  g.jsxs("div", {
                    className: "relative w-max mx-auto",
                    children: [
                      g.jsx("div", {
                        className:
                          "font-BDCartoon text-yellow-50 lg:text-[56px] md:text-[48px] text-[32px] leading-[1.2] z-[2] relative",
                        children: "$EDOG",
                      }),
                      g.jsx("div", {
                        className:
                          "text-yellow-1000 text-[18px] flex z-[1] justify-center items-center h-9 w-9 rounded-[100px] absolute top-[-4px] right-[-24px] bg-[#A2AED7]",
                        children: "1",
                      }),
                    ],
                  }),
                  "Memeprotocol",
                ],
              }),
            }),
          ],
        }),
        g.jsxs("div", {
          className:
            "relative flex-col flex items-center mt-[-430px] justify-center md:h-[1303px] lg:w-[2206px] tablet:w-[120%] md:w-[1054px] w-[661px] h-[661px] rounded-[100%] bg-[#FEF6DB]",
          children: [
            g.jsx("div", {
              className: "absolute top-[-65px] left-[50%]",
              style: { transform: "translateX(-50%)" },
              children: g.jsx("img", {
                src: wu,
                alt: "list",
                className: "w-[375px] md:w-full max-w-[563px]",
              }),
            }),
            g.jsx("img", {
              src: Uu,
              alt: "dont-worry",
              className:
                "xl:max-w-[2003px] lg:max-w-[calc(100vw+80px)] tablet:h-auto md:h-[237.98px] md:max-w-[calc(100vw+40px)] small:max-w-[500px] h-[180px] max-w-[calc(100vw+10px)]",
            }),
            g.jsxs("div", {
              className:
                "flex flex-col-reverse items-center md:max-w-full max-w-[327px] px-6 lg:flex-row lg:items-end gap-10 absolute lg:top-auto lg:bottom-[90px] top-[56%]",
              children: [
                g.jsxs("div", {
                  className: "max-w-[447px] flex flex-col gap-4",
                  children: [
                    g.jsx("div", {
                      className:
                        "body-medium-regular-20 text-[14px] md:text-[16px] lg:text-[20px]",
                      children:
                        "Chill! After 30 years of hardcore research, EDOGE—the legendary Dogecoin tech beast in the DOGEverse—has dropped the next-level tech:",
                    }),
                    g.jsx("div", {
                      className: "w-full",
                      children: g.jsx(Qu, { className: "w-[318px] md:w-full" }),
                    }),
                    g.jsx("div", {
                      className:
                        "body-medium-regular-20 text-[14px] md:text-[16px] lg:text-[20px]",
                      children:
                        "This tech can crack multivariable equations in retardio nonlinear meme dimensions on ETH, allowing you to master the meme game... even if you're brainless!",
                    }),
                  ],
                }),
                g.jsx("div", {
                  children: g.jsx("img", {
                    src: Lu,
                    alt: "Meme",
                    className: "lg:w-full md:w-[525px] w-[340px]",
                  }),
                }),
              ],
            }),
          ],
        }),
        g.jsxs("div", {
          className:
            "w-full z-[4] lg:mt-[-20px] flex flex-col items-center md:mt-[300px] mt-[320px]",
          children: [
            g.jsx("img", {
              src: Eu,
              alt: "meme",
              className: "md:max-w-[1480px] max-w-[680px]",
            }),
            g.jsxs("div", {
              className: "flex gap-3 flex-col px-6 mt-6",
              children: [
                g.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    g.jsx("div", {
                      className:
                        "font-BDCartoon lg:text-[36px] text-[30px] leading-[40px]",
                      children: "R",
                    }),
                    g.jsx("div", {
                      className:
                        "font-BDCartoon md:text-[20px] text-[14px] leading-[40px]",
                      children: ":",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-bold",
                      children: "Run",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-normal",
                      children: "-",
                    }),
                    g.jsx("div", {
                      className:
                        "md:text-[20px] text-[14px] font-normal leading-[1.5]",
                      children: "Run for your life when the rug is pulled",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    g.jsx("div", {
                      className:
                        "font-BDCartoon lg:text-[36px] text-[30px] leading-[40px]",
                      children: "A",
                    }),
                    g.jsx("div", {
                      className:
                        "font-BDCartoon md:text-[20px] text-[14px] leading-[40px]",
                      children: ":",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-bold",
                      children: "Ape",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-normal",
                      children: "-",
                    }),
                    g.jsx("div", {
                      className:
                        "md:md:text-[20px] text-[14px] text-[14px] font-normal leading-[1.5]",
                      children: "Ape in, full YOLO, no thoughts needed",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    g.jsx("div", {
                      className:
                        "font-BDCartoon lg:text-[36px] text-[30px] leading-[40px]",
                      children: "N",
                    }),
                    g.jsx("div", {
                      className:
                        "font-BDCartoon md:text-[20px] text-[14px] leading-[40px]",
                      children: ":",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-bold",
                      children: "Never",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-normal",
                      children: "-",
                    }),
                    g.jsx("div", {
                      className:
                        "md:text-[20px] text-[14px] font-normal leading-[1.5]",
                      children:
                        "Never forget the L’s you took from those rug pulls",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    g.jsx("div", {
                      className:
                        "font-BDCartoon lg:text-[36px] text-[30px] leading-[40px]",
                      children: "D",
                    }),
                    g.jsx("div", {
                      className:
                        "font-BDCartoon md:text-[20px] text-[14px] leading-[40px]",
                      children: ":",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-bold",
                      children: "Degen",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-normal",
                      children: "-",
                    }),
                    g.jsx("div", {
                      className:
                        "md:text-[20px] text-[14px] font-normal leading-[1.5]",
                      children:
                        "Degen hard, like a true gamer, maxing out degen mode.",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    g.jsx("div", {
                      className:
                        "font-BDCartoon lg:text-[36px] text-[30px] leading-[40px]",
                      children: "O",
                    }),
                    g.jsx("div", {
                      className:
                        "font-BDCartoon md:text-[20px] text-[14px] leading-[40px]",
                      children: ":",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-bold",
                      children: "Oblivious",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-normal",
                      children: "-",
                    }),
                    g.jsx("div", {
                      className:
                        "md:text-[20px] text-[14px] font-normal leading-[1.5]",
                      children: "Oblivious to logic",
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className: "flex gap-2 items-center",
                  children: [
                    g.jsx("div", {
                      className:
                        "font-BDCartoon lg:text-[36px] text-[30px] leading-[40px]",
                      children: "M",
                    }),
                    g.jsx("div", {
                      className:
                        "font-BDCartoon md:text-[20px] text-[14px] leading-[40px]",
                      children: ":",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-bold",
                      children: "Moon",
                    }),
                    g.jsx("div", {
                      className: "md:text-[20px] text-[14px] font-normal",
                      children: "-",
                    }),
                    g.jsx("div", {
                      className:
                        "md:text-[20px] text-[14px] font-normal leading-[1.5]",
                      children:
                        'The undying dream that the token will "to da moon"',
                    }),
                  ],
                }),
              ],
            }),
            g.jsx("div", {
              className: "max-w-[1000px] mt-12 px-6",
              children: g.jsx("img", { src: ku, alt: "dog-star" }),
            }),
            g.jsx("div", {
              className: "px-6",
              children: g.jsx("div", {
                className:
                  "body-medium-regular-20 md:text-[20px] text-[14px] mt-2 md:mt-6 text-center max-w-[880px]",
                children:
                  "With the battle cry of 'rekt dev rug pullers,' RANDOM tech from Robo-Dog EDOG promises to dominate the entire 2025-2026 uptrend season!",
              }),
            }),
          ],
        }),
      ],
    }),
  Y6 = () =>
    g.jsxs("div", {
      className: "bg-yellow-50 pt-12 flex flex-col items-center",
      id: "tokenomics",
      children: [
        g.jsxs("div", {
          className:
            "w-full flex flex-col items-center lg:h-[1321px] h-full bg-center bg-cover",
          style: { backgroundImage: `url(${Mu})` },
          children: [
            g.jsx("div", {
              className: "font-Slackey uppercase text-[16.8px] leading-[18px]",
              children: "maybe continue...",
            }),
            g.jsxs("div", {
              className: "relative w-max mx-auto lg:mt-[112px] mt-[96px]",
              children: [
                g.jsxs("div", {
                  className:
                    "font-BDCartoon z-[4] relative lg:text-[56px] md:text-[48px] text-[32px] leading-[1.2] text-yellow-900",
                  children: ["Tokenomics ", g.jsx("br", {}), "& Roadmap"],
                }),
                g.jsx("div", {
                  className:
                    "text-[18px] text-yellow-1000 flex z-[2] justify-center items-center h-9 w-9 rounded-[100px] absolute top-[-4px] right-[-24px] bg-yellow-300",
                  children: "2",
                }),
              ],
            }),
            g.jsx("div", {
              className: "mt-10 px-12",
              children: g.jsx("img", {
                src: Tu,
                alt: "number",
                className: "w-[300px] md:w-full",
              }),
            }),
            g.jsx("div", {
              className: "mt-6",
              children: g.jsx("img", { src: Au, alt: "list" }),
            }),
          ],
        }),
        g.jsxs("div", {
          className: "mb-12 mt-12 md:mb-[64px] lg:hidden",
          children: [
            g.jsx("img", { src: l3, alt: "token" }),
            g.jsx("div", {
              className: "px-6 flex justify-center md:px-12 mt-[-24px]",
              children: g.jsx("img", { src: Fu, alt: "card" }),
            }),
          ],
        }),
        g.jsxs("div", {
          className:
            "flex-col items-center mb-[64px] md:mt-[-500px] mt-[-400px] hidden lg:flex",
          children: [
            g.jsx("img", { src: l3, alt: "token" }),
            g.jsx("div", {
              className: "mt-[-400px]",
              children: g.jsx("img", { src: Nu, alt: "card" }),
            }),
          ],
        }),
      ],
    });
function h3(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Mo(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > "u"
      ? (e[n] = t[n])
      : h3(t[n]) && h3(e[n]) && Object.keys(t[n]).length > 0 && Mo(e[n], t[n]);
  });
}
const a5 = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function be() {
  const e = typeof document < "u" ? document : {};
  return Mo(e, a5), e;
}
const Z6 = {
  document: a5,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function ge() {
  const e = typeof window < "u" ? window : {};
  return Mo(e, Z6), e;
}
function K6(e) {
  const t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get() {
      return t;
    },
    set(n) {
      t.__proto__ = n;
    },
  });
}
class jt extends Array {
  constructor(t) {
    typeof t == "number" ? super(t) : (super(...(t || [])), K6(this));
  }
}
function Yr(e = []) {
  const t = [];
  return (
    e.forEach((n) => {
      Array.isArray(n) ? t.push(...Yr(n)) : t.push(n);
    }),
    t
  );
}
function u5(e, t) {
  return Array.prototype.filter.call(e, t);
}
function Q6(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 1) t.indexOf(e[n]) === -1 && t.push(e[n]);
  return t;
}
function X6(e, t) {
  if (typeof e != "string") return [e];
  const n = [],
    r = t.querySelectorAll(e);
  for (let i = 0; i < r.length; i += 1) n.push(r[i]);
  return n;
}
function z(e, t) {
  const n = ge(),
    r = be();
  let i = [];
  if (!t && e instanceof jt) return e;
  if (!e) return new jt(i);
  if (typeof e == "string") {
    const l = e.trim();
    if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
      let o = "div";
      l.indexOf("<li") === 0 && (o = "ul"),
        l.indexOf("<tr") === 0 && (o = "tbody"),
        (l.indexOf("<td") === 0 || l.indexOf("<th") === 0) && (o = "tr"),
        l.indexOf("<tbody") === 0 && (o = "table"),
        l.indexOf("<option") === 0 && (o = "select");
      const a = r.createElement(o);
      a.innerHTML = l;
      for (let s = 0; s < a.childNodes.length; s += 1) i.push(a.childNodes[s]);
    } else i = X6(e.trim(), t || r);
  } else if (e.nodeType || e === n || e === r) i.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof jt) return e;
    i = e;
  }
  return new jt(Q6(i));
}
z.fn = jt.prototype;
function $6(...e) {
  const t = Yr(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.add(...t);
    }),
    this
  );
}
function J6(...e) {
  const t = Yr(e.map((n) => n.split(" ")));
  return (
    this.forEach((n) => {
      n.classList.remove(...t);
    }),
    this
  );
}
function q6(...e) {
  const t = Yr(e.map((n) => n.split(" ")));
  this.forEach((n) => {
    t.forEach((r) => {
      n.classList.toggle(r);
    });
  });
}
function e9(...e) {
  const t = Yr(e.map((n) => n.split(" ")));
  return (
    u5(this, (n) => t.filter((r) => n.classList.contains(r)).length > 0)
      .length > 0
  );
}
function t9(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (let n = 0; n < this.length; n += 1)
    if (arguments.length === 2) this[n].setAttribute(e, t);
    else for (const r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
  return this;
}
function n9(e) {
  for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
  return this;
}
function r9(e) {
  for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
  return this;
}
function i9(e) {
  for (let t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? `${e}ms` : e;
  return this;
}
function l9(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  function l(u) {
    const c = u.target;
    if (!c) return;
    const d = u.target.dom7EventData || [];
    if ((d.indexOf(u) < 0 && d.unshift(u), z(c).is(n))) r.apply(c, d);
    else {
      const f = z(c).parents();
      for (let C = 0; C < f.length; C += 1) z(f[C]).is(n) && r.apply(f[C], d);
    }
  }
  function o(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), r.apply(this, c);
  }
  const a = t.split(" ");
  let s;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (n)
      for (s = 0; s < a.length; s += 1) {
        const d = a[s];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
          c.dom7LiveListeners[d] || (c.dom7LiveListeners[d] = []),
          c.dom7LiveListeners[d].push({ listener: r, proxyListener: l }),
          c.addEventListener(d, l, i);
      }
    else
      for (s = 0; s < a.length; s += 1) {
        const d = a[s];
        c.dom7Listeners || (c.dom7Listeners = {}),
          c.dom7Listeners[d] || (c.dom7Listeners[d] = []),
          c.dom7Listeners[d].push({ listener: r, proxyListener: o }),
          c.addEventListener(d, o, i);
      }
  }
  return this;
}
function o9(...e) {
  let [t, n, r, i] = e;
  typeof e[1] == "function" && (([t, r, i] = e), (n = void 0)), i || (i = !1);
  const l = t.split(" ");
  for (let o = 0; o < l.length; o += 1) {
    const a = l[o];
    for (let s = 0; s < this.length; s += 1) {
      const u = this[s];
      let c;
      if (
        (!n && u.dom7Listeners
          ? (c = u.dom7Listeners[a])
          : n && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]),
        c && c.length)
      )
        for (let d = c.length - 1; d >= 0; d -= 1) {
          const f = c[d];
          (r && f.listener === r) ||
          (r &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === r)
            ? (u.removeEventListener(a, f.proxyListener, i), c.splice(d, 1))
            : r ||
              (u.removeEventListener(a, f.proxyListener, i), c.splice(d, 1));
        }
    }
  }
  return this;
}
function s9(...e) {
  const t = ge(),
    n = e[0].split(" "),
    r = e[1];
  for (let i = 0; i < n.length; i += 1) {
    const l = n[i];
    for (let o = 0; o < this.length; o += 1) {
      const a = this[o];
      if (t.CustomEvent) {
        const s = new t.CustomEvent(l, {
          detail: r,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = e.filter((u, c) => c > 0)),
          a.dispatchEvent(s),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function a9(e) {
  const t = this;
  function n(r) {
    r.target === this && (e.call(this, r), t.off("transitionend", n));
  }
  return e && t.on("transitionend", n), this;
}
function u9(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(t.getPropertyValue("margin-right")) +
        parseFloat(t.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function c9(e) {
  if (this.length > 0) {
    if (e) {
      const t = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(t.getPropertyValue("margin-top")) +
        parseFloat(t.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function d9() {
  if (this.length > 0) {
    const e = ge(),
      t = be(),
      n = this[0],
      r = n.getBoundingClientRect(),
      i = t.body,
      l = n.clientTop || i.clientTop || 0,
      o = n.clientLeft || i.clientLeft || 0,
      a = n === e ? e.scrollY : n.scrollTop,
      s = n === e ? e.scrollX : n.scrollLeft;
    return { top: r.top + a - l, left: r.left + s - o };
  }
  return null;
}
function f9() {
  const e = ge();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function p9(e, t) {
  const n = ge();
  let r;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (r = 0; r < this.length; r += 1)
        for (const i in e) this[r].style[i] = e[i];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
    return this;
  }
  return this;
}
function h9(e) {
  return e
    ? (this.forEach((t, n) => {
        e.apply(t, [t, n]);
      }),
      this)
    : this;
}
function m9(e) {
  const t = u5(this, e);
  return z(t);
}
function C9(e) {
  if (typeof e > "u") return this[0] ? this[0].innerHTML : null;
  for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
  return this;
}
function v9(e) {
  if (typeof e > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
  return this;
}
function g9(e) {
  const t = ge(),
    n = be(),
    r = this[0];
  let i, l;
  if (!r || typeof e > "u") return !1;
  if (typeof e == "string") {
    if (r.matches) return r.matches(e);
    if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector) return r.msMatchesSelector(e);
    for (i = z(e), l = 0; l < i.length; l += 1) if (i[l] === r) return !0;
    return !1;
  }
  if (e === n) return r === n;
  if (e === t) return r === t;
  if (e.nodeType || e instanceof jt) {
    for (i = e.nodeType ? [e] : e, l = 0; l < i.length; l += 1)
      if (i[l] === r) return !0;
    return !1;
  }
  return !1;
}
function y9() {
  let e = this[0],
    t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function x9(e) {
  if (typeof e > "u") return this;
  const t = this.length;
  if (e > t - 1) return z([]);
  if (e < 0) {
    const n = t + e;
    return n < 0 ? z([]) : z([this[n]]);
  }
  return z([this[e]]);
}
function w9(...e) {
  let t;
  const n = be();
  for (let r = 0; r < e.length; r += 1) {
    t = e[r];
    for (let i = 0; i < this.length; i += 1)
      if (typeof t == "string") {
        const l = n.createElement("div");
        for (l.innerHTML = t; l.firstChild; ) this[i].appendChild(l.firstChild);
      } else if (t instanceof jt)
        for (let l = 0; l < t.length; l += 1) this[i].appendChild(t[l]);
      else this[i].appendChild(t);
  }
  return this;
}
function L9(e) {
  const t = be();
  let n, r;
  for (n = 0; n < this.length; n += 1)
    if (typeof e == "string") {
      const i = t.createElement("div");
      for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
        this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
    } else if (e instanceof jt)
      for (r = 0; r < e.length; r += 1)
        this[n].insertBefore(e[r], this[n].childNodes[0]);
    else this[n].insertBefore(e, this[n].childNodes[0]);
  return this;
}
function S9(e) {
  return this.length > 0
    ? e
      ? this[0].nextElementSibling && z(this[0].nextElementSibling).is(e)
        ? z([this[0].nextElementSibling])
        : z([])
      : this[0].nextElementSibling
      ? z([this[0].nextElementSibling])
      : z([])
    : z([]);
}
function E9(e) {
  const t = [];
  let n = this[0];
  if (!n) return z([]);
  for (; n.nextElementSibling; ) {
    const r = n.nextElementSibling;
    e ? z(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return z(t);
}
function T9(e) {
  if (this.length > 0) {
    const t = this[0];
    return e
      ? t.previousElementSibling && z(t.previousElementSibling).is(e)
        ? z([t.previousElementSibling])
        : z([])
      : t.previousElementSibling
      ? z([t.previousElementSibling])
      : z([]);
  }
  return z([]);
}
function A9(e) {
  const t = [];
  let n = this[0];
  if (!n) return z([]);
  for (; n.previousElementSibling; ) {
    const r = n.previousElementSibling;
    e ? z(r).is(e) && t.push(r) : t.push(r), (n = r);
  }
  return z(t);
}
function k9(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1)
    this[n].parentNode !== null &&
      (e
        ? z(this[n].parentNode).is(e) && t.push(this[n].parentNode)
        : t.push(this[n].parentNode));
  return z(t);
}
function N9(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    let r = this[n].parentNode;
    for (; r; ) e ? z(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
  }
  return z(t);
}
function M9(e) {
  let t = this;
  return typeof e > "u" ? z([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function P9(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].querySelectorAll(e);
    for (let i = 0; i < r.length; i += 1) t.push(r[i]);
  }
  return z(t);
}
function O9(e) {
  const t = [];
  for (let n = 0; n < this.length; n += 1) {
    const r = this[n].children;
    for (let i = 0; i < r.length; i += 1) (!e || z(r[i]).is(e)) && t.push(r[i]);
  }
  return z(t);
}
function D9() {
  for (let e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
const m3 = {
  addClass: $6,
  removeClass: J6,
  hasClass: e9,
  toggleClass: q6,
  attr: t9,
  removeAttr: n9,
  transform: r9,
  transition: i9,
  on: l9,
  off: o9,
  trigger: s9,
  transitionEnd: a9,
  outerWidth: u9,
  outerHeight: c9,
  styles: f9,
  offset: d9,
  css: p9,
  each: h9,
  html: C9,
  text: v9,
  is: g9,
  index: y9,
  eq: x9,
  append: w9,
  prepend: L9,
  next: S9,
  nextAll: E9,
  prev: T9,
  prevAll: A9,
  parent: k9,
  parents: N9,
  closest: M9,
  find: P9,
  children: O9,
  filter: m9,
  remove: D9,
};
Object.keys(m3).forEach((e) => {
  Object.defineProperty(z.fn, e, { value: m3[e], writable: !0 });
});
function H9(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function ml(e, t = 0) {
  return setTimeout(e, t);
}
function zr() {
  return Date.now();
}
function R9(e) {
  const t = ge();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function j9(e, t = "x") {
  const n = ge();
  let r, i, l;
  const o = R9(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((l =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = l.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = l.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = l.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function p1(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function I9(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Fe(...e) {
  const t = Object(e[0]),
    n = ["__proto__", "constructor", "prototype"];
  for (let r = 1; r < e.length; r += 1) {
    const i = e[r];
    if (i != null && !I9(i)) {
      const l = Object.keys(Object(i)).filter((o) => n.indexOf(o) < 0);
      for (let o = 0, a = l.length; o < a; o += 1) {
        const s = l[o],
          u = Object.getOwnPropertyDescriptor(i, s);
        u !== void 0 &&
          u.enumerable &&
          (p1(t[s]) && p1(i[s])
            ? i[s].__swiper__
              ? (t[s] = i[s])
              : Fe(t[s], i[s])
            : !p1(t[s]) && p1(i[s])
            ? ((t[s] = {}), i[s].__swiper__ ? (t[s] = i[s]) : Fe(t[s], i[s]))
            : (t[s] = i[s]));
      }
    }
  }
  return t;
}
function h1(e, t, n) {
  e.style.setProperty(t, n);
}
function c5({ swiper: e, targetPosition: t, side: n }) {
  const r = ge(),
    i = -e.translate;
  let l = null,
    o;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(e.cssModeFrameID);
  const s = t > i ? "next" : "prev",
    u = (d, f) => (s === "next" && d >= f) || (s === "prev" && d <= f),
    c = () => {
      (o = new Date().getTime()), l === null && (l = o);
      const d = Math.max(Math.min((o - l) / a, 1), 0),
        f = 0.5 - Math.cos(d * Math.PI) / 2;
      let C = i + f * (t - i);
      if ((u(C, t) && (C = t), e.wrapperEl.scrollTo({ [n]: C }), u(C, t))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [n]: C });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(c);
    };
  c();
}
let d2;
function V9() {
  const e = ge(),
    t = be();
  return {
    smoothScroll:
      t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
    passiveListener: (function () {
      let r = !1;
      try {
        const i = Object.defineProperty({}, "passive", {
          get() {
            r = !0;
          },
        });
        e.addEventListener("testPassiveListener", null, i);
      } catch {}
      return r;
    })(),
    gestures: (function () {
      return "ongesturestart" in e;
    })(),
  };
}
function d5() {
  return d2 || (d2 = V9()), d2;
}
let f2;
function z9({ userAgent: e } = {}) {
  const t = d5(),
    n = ge(),
    r = n.navigator.platform,
    i = e || n.navigator.userAgent,
    l = { ios: !1, android: !1 },
    o = n.screen.width,
    a = n.screen.height,
    s = i.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = i.match(/(iPad).*OS\s([\d_]+)/);
  const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !u && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = r === "Win32";
  let C = r === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      C &&
      t.touch &&
      v.indexOf(`${o}x${a}`) >= 0 &&
      ((u = i.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (C = !1)),
    s && !f && ((l.os = "android"), (l.android = !0)),
    (u || d || c) && ((l.os = "ios"), (l.ios = !0)),
    l
  );
}
function b9(e = {}) {
  return f2 || (f2 = z9(e)), f2;
}
let p2;
function B9() {
  const e = ge();
  function t() {
    const n = e.navigator.userAgent.toLowerCase();
    return (
      n.indexOf("safari") >= 0 &&
      n.indexOf("chrome") < 0 &&
      n.indexOf("android") < 0
    );
  }
  return {
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
  };
}
function F9() {
  return p2 || (p2 = B9()), p2;
}
function U9({ swiper: e, on: t, emit: n }) {
  const r = ge();
  let i = null,
    l = null;
  const o = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((i = new ResizeObserver((c) => {
          l = r.requestAnimationFrame(() => {
            const { width: d, height: f } = e;
            let C = d,
              v = f;
            c.forEach(({ contentBoxSize: y, contentRect: L, target: p }) => {
              (p && p !== e.el) ||
                ((C = L ? L.width : (y[0] || y).inlineSize),
                (v = L ? L.height : (y[0] || y).blockSize));
            }),
              (C !== d || v !== f) && o();
          });
        })),
        i.observe(e.el));
    },
    s = () => {
      l && r.cancelAnimationFrame(l),
        i && i.unobserve && e.el && (i.unobserve(e.el), (i = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", o), r.addEventListener("orientationchange", u);
  }),
    t("destroy", () => {
      s(),
        r.removeEventListener("resize", o),
        r.removeEventListener("orientationchange", u);
    });
}
function _9({ swiper: e, extendParams: t, on: n, emit: r }) {
  const i = [],
    l = ge(),
    o = (u, c = {}) => {
      const d = l.MutationObserver || l.WebkitMutationObserver,
        f = new d((C) => {
          if (C.length === 1) {
            r("observerUpdate", C[0]);
            return;
          }
          const v = function () {
            r("observerUpdate", C[0]);
          };
          l.requestAnimationFrame
            ? l.requestAnimationFrame(v)
            : l.setTimeout(v, 0);
        });
      f.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        i.push(f);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = e.$el.parents();
          for (let c = 0; c < u.length; c += 1) o(u[c]);
        }
        o(e.$el[0], { childList: e.params.observeSlideChildren }),
          o(e.$wrapperEl[0], { attributes: !1 });
      }
    },
    s = () => {
      i.forEach((u) => {
        u.disconnect();
      }),
        i.splice(0, i.length);
    };
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    n("init", a),
    n("destroy", s);
}
const W9 = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((l) => {
        r.eventsListeners[l] || (r.eventsListeners[l] = []),
          r.eventsListeners[l][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i(...l) {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(r, l);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, l) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(l, 1);
              });
        }),
      n
    );
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let n, r, i;
    return (
      typeof e[0] == "string" || Array.isArray(e[0])
        ? ((n = e[0]), (r = e.slice(1, e.length)), (i = t))
        : ((n = e[0].events), (r = e[0].data), (i = e[0].context || t)),
      r.unshift(i),
      (Array.isArray(n) ? n : n.split(" ")).forEach((o) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((a) => {
            a.apply(i, [o, ...r]);
          }),
          t.eventsListeners &&
            t.eventsListeners[o] &&
            t.eventsListeners[o].forEach((a) => {
              a.apply(i, r);
            });
      }),
      t
    );
  },
};
function G9() {
  const e = this;
  let t, n;
  const r = e.$el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r[0].clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r[0].clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(r.css("padding-left") || 0, 10) -
        parseInt(r.css("padding-right") || 0, 10)),
      (n =
        n -
        parseInt(r.css("padding-top") || 0, 10) -
        parseInt(r.css("padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function Y9() {
  const e = this;
  function t(A) {
    return e.isHorizontal()
      ? A
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[A];
  }
  function n(A, D) {
    return parseFloat(A.getPropertyValue(t(D)) || 0);
  }
  const r = e.params,
    { $wrapperEl: i, size: l, rtlTranslate: o, wrongRTL: a } = e,
    s = e.virtual && r.virtual.enabled,
    u = s ? e.virtual.slides.length : e.slides.length,
    c = i.children(`.${e.params.slideClass}`),
    d = s ? e.virtual.slides.length : c.length;
  let f = [];
  const C = [],
    v = [];
  let y = r.slidesOffsetBefore;
  typeof y == "function" && (y = r.slidesOffsetBefore.call(e));
  let L = r.slidesOffsetAfter;
  typeof L == "function" && (L = r.slidesOffsetAfter.call(e));
  const p = e.snapGrid.length,
    h = e.slidesGrid.length;
  let m = r.spaceBetween,
    x = -y,
    S = 0,
    N = 0;
  if (typeof l > "u") return;
  typeof m == "string" &&
    m.indexOf("%") >= 0 &&
    (m = (parseFloat(m.replace("%", "")) / 100) * l),
    (e.virtualSize = -m),
    o
      ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    r.centeredSlides &&
      r.cssMode &&
      (h1(e.wrapperEl, "--swiper-centered-offset-before", ""),
      h1(e.wrapperEl, "--swiper-centered-offset-after", ""));
  const T = r.grid && r.grid.rows > 1 && e.grid;
  T && e.grid.initSlides(d);
  let w;
  const R =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (A) => typeof r.breakpoints[A].slidesPerView < "u"
    ).length > 0;
  for (let A = 0; A < d; A += 1) {
    w = 0;
    const D = c.eq(A);
    if ((T && e.grid.updateSlide(A, D, d, t), D.css("display") !== "none")) {
      if (r.slidesPerView === "auto") {
        R && (c[A].style[t("width")] = "");
        const b = getComputedStyle(D[0]),
          _ = D[0].style.transform,
          Y = D[0].style.webkitTransform;
        if (
          (_ && (D[0].style.transform = "none"),
          Y && (D[0].style.webkitTransform = "none"),
          r.roundLengths)
        )
          w = e.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
        else {
          const Z = n(b, "width"),
            de = n(b, "padding-left"),
            ae = n(b, "padding-right"),
            O = n(b, "margin-left"),
            k = n(b, "margin-right"),
            M = b.getPropertyValue("box-sizing");
          if (M && M === "border-box") w = Z + O + k;
          else {
            const { clientWidth: I, offsetWidth: j } = D[0];
            w = Z + de + ae + O + k + (j - I);
          }
        }
        _ && (D[0].style.transform = _),
          Y && (D[0].style.webkitTransform = Y),
          r.roundLengths && (w = Math.floor(w));
      } else
        (w = (l - (r.slidesPerView - 1) * m) / r.slidesPerView),
          r.roundLengths && (w = Math.floor(w)),
          c[A] && (c[A].style[t("width")] = `${w}px`);
      c[A] && (c[A].swiperSlideSize = w),
        v.push(w),
        r.centeredSlides
          ? ((x = x + w / 2 + S / 2 + m),
            S === 0 && A !== 0 && (x = x - l / 2 - m),
            A === 0 && (x = x - l / 2 - m),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            r.roundLengths && (x = Math.floor(x)),
            N % r.slidesPerGroup === 0 && f.push(x),
            C.push(x))
          : (r.roundLengths && (x = Math.floor(x)),
            (N - Math.min(e.params.slidesPerGroupSkip, N)) %
              e.params.slidesPerGroup ===
              0 && f.push(x),
            C.push(x),
            (x = x + w + m)),
        (e.virtualSize += w + m),
        (S = w),
        (N += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, l) + L),
    o &&
      a &&
      (r.effect === "slide" || r.effect === "coverflow") &&
      i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
    r.setWrapperSize &&
      i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
    T && e.grid.updateWrapperSize(w, f, t),
    !r.centeredSlides)
  ) {
    const A = [];
    for (let D = 0; D < f.length; D += 1) {
      let b = f[D];
      r.roundLengths && (b = Math.floor(b)),
        f[D] <= e.virtualSize - l && A.push(b);
    }
    (f = A),
      Math.floor(e.virtualSize - l) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - l);
  }
  if ((f.length === 0 && (f = [0]), r.spaceBetween !== 0)) {
    const A = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
    c.filter((D, b) => (r.cssMode ? b !== c.length - 1 : !0)).css({
      [A]: `${m}px`,
    });
  }
  if (r.centeredSlides && r.centeredSlidesBounds) {
    let A = 0;
    v.forEach((b) => {
      A += b + (r.spaceBetween ? r.spaceBetween : 0);
    }),
      (A -= r.spaceBetween);
    const D = A - l;
    f = f.map((b) => (b < 0 ? -y : b > D ? D + L : b));
  }
  if (r.centerInsufficientSlides) {
    let A = 0;
    if (
      (v.forEach((D) => {
        A += D + (r.spaceBetween ? r.spaceBetween : 0);
      }),
      (A -= r.spaceBetween),
      A < l)
    ) {
      const D = (l - A) / 2;
      f.forEach((b, _) => {
        f[_] = b - D;
      }),
        C.forEach((b, _) => {
          C[_] = b + D;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: c,
      snapGrid: f,
      slidesGrid: C,
      slidesSizesGrid: v,
    }),
    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
  ) {
    h1(e.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      h1(
        e.wrapperEl,
        "--swiper-centered-offset-after",
        `${e.size / 2 - v[v.length - 1] / 2}px`
      );
    const A = -e.snapGrid[0],
      D = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((b) => b + A)),
      (e.slidesGrid = e.slidesGrid.map((b) => b + D));
  }
  if (
    (d !== u && e.emit("slidesLengthChange"),
    f.length !== p &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    C.length !== h && e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress && e.updateSlidesOffset(),
    !s && !r.cssMode && (r.effect === "slide" || r.effect === "fade"))
  ) {
    const A = `${r.containerModifierClass}backface-hidden`,
      D = e.$el.hasClass(A);
    d <= r.maxBackfaceHiddenSlides
      ? D || e.$el.addClass(A)
      : D && e.$el.removeClass(A);
  }
}
function Z9(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    l;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (a) =>
    r
      ? t.slides.filter(
          (s) => parseInt(s.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : t.slides.eq(a)[0];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || z([])).each((a) => {
        n.push(a);
      });
    else
      for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
        const a = t.activeIndex + l;
        if (a > t.slides.length && !r) break;
        n.push(o(a));
      }
  else n.push(o(t.activeIndex));
  for (l = 0; l < n.length; l += 1)
    if (typeof n[l] < "u") {
      const a = n[l].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && t.$wrapperEl.css("height", `${i}px`);
}
function K9() {
  const e = this,
    t = e.slides;
  for (let n = 0; n < t.length; n += 1)
    t[n].swiperSlideOffset = e.isHorizontal()
      ? t[n].offsetLeft
      : t[n].offsetTop;
}
function Q9(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: l } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e),
    r.removeClass(n.slideVisibleClass),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  for (let a = 0; a < r.length; a += 1) {
    const s = r[a];
    let u = s.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const c =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (s.swiperSlideSize + n.spaceBetween),
      d =
        (o - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (s.swiperSlideSize + n.spaceBetween),
      f = -(o - u),
      C = f + t.slidesSizesGrid[a];
    ((f >= 0 && f < t.size - 1) ||
      (C > 1 && C <= t.size) ||
      (f <= 0 && C >= t.size)) &&
      (t.visibleSlides.push(s),
      t.visibleSlidesIndexes.push(a),
      r.eq(a).addClass(n.slideVisibleClass)),
      (s.progress = i ? -c : c),
      (s.originalProgress = i ? -d : d);
  }
  t.visibleSlides = z(t.visibleSlides);
}
function X9(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * u) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: l, isEnd: o } = t;
  const a = l,
    s = o;
  r === 0
    ? ((i = 0), (l = !0), (o = !0))
    : ((i = (e - t.minTranslate()) / r), (l = i <= 0), (o = i >= 1)),
    Object.assign(t, { progress: i, isBeginning: l, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    l && !a && t.emit("reachBeginning toEdge"),
    o && !s && t.emit("reachEnd toEdge"),
    ((a && !l) || (s && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
function $9() {
  const e = this,
    { slides: t, params: n, $wrapperEl: r, activeIndex: i, realIndex: l } = e,
    o = e.virtual && n.virtual.enabled;
  t.removeClass(
    `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
  );
  let a;
  o
    ? (a = e.$wrapperEl.find(
        `.${n.slideClass}[data-swiper-slide-index="${i}"]`
      ))
    : (a = t.eq(i)),
    a.addClass(n.slideActiveClass),
    n.loop &&
      (a.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l}"]`
            )
            .addClass(n.slideDuplicateActiveClass)
        : r
            .children(
              `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l}"]`
            )
            .addClass(n.slideDuplicateActiveClass));
  let s = a.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);
  n.loop && s.length === 0 && ((s = t.eq(0)), s.addClass(n.slideNextClass));
  let u = a.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);
  n.loop && u.length === 0 && ((u = t.eq(-1)), u.addClass(n.slidePrevClass)),
    n.loop &&
      (s.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${s.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicateNextClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicateNextClass),
      u.hasClass(n.slideDuplicateClass)
        ? r
            .children(
              `.${n.slideClass}:not(.${
                n.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(n.slideDuplicatePrevClass)
        : r
            .children(
              `.${n.slideClass}.${
                n.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(n.slideDuplicatePrevClass)),
    e.emitSlidesClasses();
}
function J9(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    {
      slidesGrid: r,
      snapGrid: i,
      params: l,
      activeIndex: o,
      realIndex: a,
      snapIndex: s,
    } = t;
  let u = e,
    c;
  if (typeof u > "u") {
    for (let f = 0; f < r.length; f += 1)
      typeof r[f + 1] < "u"
        ? n >= r[f] && n < r[f + 1] - (r[f + 1] - r[f]) / 2
          ? (u = f)
          : n >= r[f] && n < r[f + 1] && (u = f + 1)
        : n >= r[f] && (u = f);
    l.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (i.indexOf(n) >= 0) c = i.indexOf(n);
  else {
    const f = Math.min(l.slidesPerGroupSkip, u);
    c = f + Math.floor((u - f) / l.slidesPerGroup);
  }
  if ((c >= i.length && (c = i.length - 1), u === o)) {
    c !== s && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(t, {
    snapIndex: c,
    realIndex: d,
    previousIndex: o,
    activeIndex: u,
  }),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    a !== d && t.emit("realIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function q9(e) {
  const t = this,
    n = t.params,
    r = z(e).closest(`.${n.slideClass}`)[0];
  let i = !1,
    l;
  if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === r) {
        (i = !0), (l = o);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(z(r).attr("data-swiper-slide-index"), 10))
        : (t.clickedIndex = l);
  else {
    (t.clickedSlide = void 0), (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
const ec = {
  updateSize: G9,
  updateSlides: Y9,
  updateAutoHeight: Z9,
  updateSlidesOffset: K9,
  updateSlidesProgress: Q9,
  updateProgress: X9,
  updateSlidesClasses: $9,
  updateActiveIndex: J9,
  updateClickedSlide: q9,
};
function tc(e = this.isHorizontal() ? "x" : "y") {
  const t = this,
    { params: n, rtlTranslate: r, translate: i, $wrapperEl: l } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = j9(l[0], e);
  return r && (o = -o), o || 0;
}
function nc(e, t) {
  const n = this,
    {
      rtlTranslate: r,
      params: i,
      $wrapperEl: l,
      wrapperEl: o,
      progress: a,
    } = n;
  let s = 0,
    u = 0;
  const c = 0;
  n.isHorizontal() ? (s = r ? -e : e) : (u = e),
    i.roundLengths && ((s = Math.floor(s)), (u = Math.floor(u))),
    i.cssMode
      ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -s
          : -u)
      : i.virtualTranslate ||
        l.transform(`translate3d(${s}px, ${u}px, ${c}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? s : u);
  let d;
  const f = n.maxTranslate() - n.minTranslate();
  f === 0 ? (d = 0) : (d = (e - n.minTranslate()) / f),
    d !== a && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function rc() {
  return -this.snapGrid[0];
}
function ic() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function lc(e = 0, t = this.params.speed, n = !0, r = !0, i) {
  const l = this,
    { params: o, wrapperEl: a } = l;
  if (l.animating && o.preventInteractionOnTransition) return !1;
  const s = l.minTranslate(),
    u = l.maxTranslate();
  let c;
  if (
    (r && e > s ? (c = s) : r && e < u ? (c = u) : (c = e),
    l.updateProgress(c),
    o.cssMode)
  ) {
    const d = l.isHorizontal();
    if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!l.support.smoothScroll)
        return (
          c5({ swiper: l, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (l.setTransition(0),
        l.setTranslate(c),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
      : (l.setTransition(t),
        l.setTranslate(c),
        n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
        l.animating ||
          ((l.animating = !0),
          l.onTranslateToWrapperTransitionEnd ||
            (l.onTranslateToWrapperTransitionEnd = function (f) {
              !l ||
                l.destroyed ||
                (f.target === this &&
                  (l.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    l.onTranslateToWrapperTransitionEnd
                  ),
                  (l.onTranslateToWrapperTransitionEnd = null),
                  delete l.onTranslateToWrapperTransitionEnd,
                  n && l.emit("transitionEnd")));
            }),
          l.$wrapperEl[0].addEventListener(
            "transitionend",
            l.onTranslateToWrapperTransitionEnd
          ),
          l.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            l.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const oc = {
  getTranslate: tc,
  setTranslate: nc,
  minTranslate: rc,
  maxTranslate: ic,
  translateTo: lc,
};
function sc(e, t) {
  const n = this;
  n.params.cssMode || n.$wrapperEl.transition(e), n.emit("setTransition", e, t);
}
function f5({ swiper: e, runCallbacks: t, direction: n, step: r }) {
  const { activeIndex: i, previousIndex: l } = e;
  let o = n;
  if (
    (o || (i > l ? (o = "next") : i < l ? (o = "prev") : (o = "reset")),
    e.emit(`transition${r}`),
    t && i !== l)
  ) {
    if (o === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      o === "next"
        ? e.emit(`slideNextTransition${r}`)
        : e.emit(`slidePrevTransition${r}`);
  }
}
function ac(e = !0, t) {
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    f5({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function uc(e = !0, t) {
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      f5({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
const cc = { setTransition: sc, transitionStart: ac, transitionEnd: uc };
function dc(e = 0, t = this.params.speed, n = !0, r, i) {
  if (typeof e != "number" && typeof e != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
    );
  if (typeof e == "string") {
    const m = parseInt(e, 10);
    if (!isFinite(m))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = m;
  }
  const l = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: s,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: C,
    enabled: v,
  } = l;
  if ((l.animating && a.preventInteractionOnTransition) || (!v && !r && !i))
    return !1;
  const y = Math.min(l.params.slidesPerGroupSkip, o);
  let L = y + Math.floor((o - y) / l.params.slidesPerGroup);
  L >= s.length && (L = s.length - 1);
  const p = -s[L];
  if (a.normalizeSlideIndex)
    for (let m = 0; m < u.length; m += 1) {
      const x = -Math.floor(p * 100),
        S = Math.floor(u[m] * 100),
        N = Math.floor(u[m + 1] * 100);
      typeof u[m + 1] < "u"
        ? x >= S && x < N - (N - S) / 2
          ? (o = m)
          : x >= S && x < N && (o = m + 1)
        : x >= S && (o = m);
    }
  if (
    l.initialized &&
    o !== d &&
    ((!l.allowSlideNext && p < l.translate && p < l.minTranslate()) ||
      (!l.allowSlidePrev &&
        p > l.translate &&
        p > l.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (c || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(p);
  let h;
  if (
    (o > d ? (h = "next") : o < d ? (h = "prev") : (h = "reset"),
    (f && -p === l.translate) || (!f && p === l.translate))
  )
    return (
      l.updateActiveIndex(o),
      a.autoHeight && l.updateAutoHeight(),
      l.updateSlidesClasses(),
      a.effect !== "slide" && l.setTranslate(p),
      h !== "reset" && (l.transitionStart(n, h), l.transitionEnd(n, h)),
      !1
    );
  if (a.cssMode) {
    const m = l.isHorizontal(),
      x = f ? p : -p;
    if (t === 0) {
      const S = l.virtual && l.params.virtual.enabled;
      S &&
        ((l.wrapperEl.style.scrollSnapType = "none"),
        (l._immediateVirtual = !0)),
        (C[m ? "scrollLeft" : "scrollTop"] = x),
        S &&
          requestAnimationFrame(() => {
            (l.wrapperEl.style.scrollSnapType = ""),
              (l._swiperImmediateVirtual = !1);
          });
    } else {
      if (!l.support.smoothScroll)
        return (
          c5({ swiper: l, targetPosition: x, side: m ? "left" : "top" }), !0
        );
      C.scrollTo({ [m ? "left" : "top"]: x, behavior: "smooth" });
    }
    return !0;
  }
  return (
    l.setTransition(t),
    l.setTranslate(p),
    l.updateActiveIndex(o),
    l.updateSlidesClasses(),
    l.emit("beforeTransitionStart", t, r),
    l.transitionStart(n, h),
    t === 0
      ? l.transitionEnd(n, h)
      : l.animating ||
        ((l.animating = !0),
        l.onSlideToWrapperTransitionEnd ||
          (l.onSlideToWrapperTransitionEnd = function (x) {
            !l ||
              l.destroyed ||
              (x.target === this &&
                (l.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd
                ),
                (l.onSlideToWrapperTransitionEnd = null),
                delete l.onSlideToWrapperTransitionEnd,
                l.transitionEnd(n, h)));
          }),
        l.$wrapperEl[0].addEventListener(
          "transitionend",
          l.onSlideToWrapperTransitionEnd
        ),
        l.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          l.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function fc(e = 0, t = this.params.speed, n = !0, r) {
  if (typeof e == "string") {
    const o = parseInt(e, 10);
    if (!isFinite(o))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
      );
    e = o;
  }
  const i = this;
  let l = e;
  return i.params.loop && (l += i.loopedSlides), i.slideTo(l, t, n, r);
}
function pc(e = this.params.speed, t = !0, n) {
  const r = this,
    { animating: i, enabled: l, params: o } = r;
  if (!l) return r;
  let a = o.slidesPerGroup;
  o.slidesPerView === "auto" &&
    o.slidesPerGroup === 1 &&
    o.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const s = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
  if (o.loop) {
    if (i && o.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  return o.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + s, e, t, n);
}
function hc(e = this.params.speed, t = !0, n) {
  const r = this,
    {
      params: i,
      animating: l,
      snapGrid: o,
      slidesGrid: a,
      rtlTranslate: s,
      enabled: u,
    } = r;
  if (!u) return r;
  if (i.loop) {
    if (l && i.loopPreventsSlide) return !1;
    r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
  }
  const c = s ? r.translate : -r.translate;
  function d(L) {
    return L < 0 ? -Math.floor(Math.abs(L)) : Math.floor(L);
  }
  const f = d(c),
    C = o.map((L) => d(L));
  let v = o[C.indexOf(f) - 1];
  if (typeof v > "u" && i.cssMode) {
    let L;
    o.forEach((p, h) => {
      f >= p && (L = h);
    }),
      typeof L < "u" && (v = o[L > 0 ? L - 1 : L]);
  }
  let y = 0;
  if (
    (typeof v < "u" &&
      ((y = a.indexOf(v)),
      y < 0 && (y = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((y = y - r.slidesPerViewDynamic("previous", !0) + 1),
        (y = Math.max(y, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const L =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(L, e, t, n);
  }
  return r.slideTo(y, e, t, n);
}
function mc(e = this.params.speed, t = !0, n) {
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function Cc(e = this.params.speed, t = !0, n, r = 0.5) {
  const i = this;
  let l = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, l),
    a = o + Math.floor((l - o) / i.params.slidesPerGroup),
    s = i.rtlTranslate ? i.translate : -i.translate;
  if (s >= i.snapGrid[a]) {
    const u = i.snapGrid[a],
      c = i.snapGrid[a + 1];
    s - u > (c - u) * r && (l += i.params.slidesPerGroup);
  } else {
    const u = i.snapGrid[a - 1],
      c = i.snapGrid[a];
    s - u <= (c - u) * r && (l -= i.params.slidesPerGroup);
  }
  return (
    (l = Math.max(l, 0)),
    (l = Math.min(l, i.slidesGrid.length - 1)),
    i.slideTo(l, e, t, n)
  );
}
function vc() {
  const e = this,
    { params: t, $wrapperEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    l;
  if (t.loop) {
    if (e.animating) return;
    (l = parseInt(z(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = n
              .children(
                `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            ml(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = n
            .children(
              `.${t.slideClass}[data-swiper-slide-index="${l}"]:not(.${t.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          ml(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
const gc = {
  slideTo: dc,
  slideToLoop: fc,
  slideNext: pc,
  slidePrev: hc,
  slideReset: mc,
  slideToClosest: Cc,
  slideToClickedSlide: vc,
};
function yc() {
  const e = this,
    t = be(),
    { params: n, $wrapperEl: r } = e,
    i = r.children().length > 0 ? z(r.children()[0].parentNode) : r;
  i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
  let l = i.children(`.${n.slideClass}`);
  if (n.loopFillGroupWithBlank) {
    const s = n.slidesPerGroup - (l.length % n.slidesPerGroup);
    if (s !== n.slidesPerGroup) {
      for (let u = 0; u < s; u += 1) {
        const c = z(t.createElement("div")).addClass(
          `${n.slideClass} ${n.slideBlankClass}`
        );
        i.append(c);
      }
      l = i.children(`.${n.slideClass}`);
    }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = l.length),
    (e.loopedSlides = Math.ceil(
      parseFloat(n.loopedSlides || n.slidesPerView, 10)
    )),
    (e.loopedSlides += n.loopAdditionalSlides),
    e.loopedSlides > l.length &&
      e.params.loopedSlidesLimit &&
      (e.loopedSlides = l.length);
  const o = [],
    a = [];
  l.each((s, u) => {
    z(s).attr("data-swiper-slide-index", u);
  });
  for (let s = 0; s < e.loopedSlides; s += 1) {
    const u = s - Math.floor(s / l.length) * l.length;
    a.push(l.eq(u)[0]), o.unshift(l.eq(l.length - u - 1)[0]);
  }
  for (let s = 0; s < a.length; s += 1)
    i.append(z(a[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
  for (let s = o.length - 1; s >= 0; s -= 1)
    i.prepend(z(o[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
}
function xc() {
  const e = this;
  e.emit("beforeLoopFix");
  const {
    activeIndex: t,
    slides: n,
    loopedSlides: r,
    allowSlidePrev: i,
    allowSlideNext: l,
    snapGrid: o,
    rtlTranslate: a,
  } = e;
  let s;
  (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
  const c = -o[t] - e.getTranslate();
  t < r
    ? ((s = n.length - r * 3 + t),
      (s += r),
      e.slideTo(s, 0, !1, !0) &&
        c !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - c))
    : t >= n.length - r &&
      ((s = -n.length + t + r),
      (s += r),
      e.slideTo(s, 0, !1, !0) &&
        c !== 0 &&
        e.setTranslate((a ? -e.translate : e.translate) - c)),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = l),
    e.emit("loopFix");
}
function wc() {
  const e = this,
    { $wrapperEl: t, params: n, slides: r } = e;
  t
    .children(
      `.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`
    )
    .remove(),
    r.removeAttr("data-swiper-slide-index");
}
const Lc = { loopCreate: yc, loopFix: xc, loopDestroy: wc };
function Sc(e) {
  const t = this;
  if (
    t.support.touch ||
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (n.style.cursor = "move"), (n.style.cursor = e ? "grabbing" : "grab");
}
function Ec() {
  const e = this;
  e.support.touch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const Tc = { setGrabCursor: Sc, unsetGrabCursor: Ec };
function Ac(e, t = this) {
  function n(r) {
    if (!r || r === be() || r === ge()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function kc(e) {
  const t = this,
    n = be(),
    r = ge(),
    i = t.touchEventsData,
    { params: l, touches: o, enabled: a } = t;
  if (!a || (t.animating && l.preventInteractionOnTransition)) return;
  !t.animating && l.cssMode && l.loop && t.loopFix();
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  let u = z(s.target);
  if (
    (l.touchEventsTarget === "wrapper" && !u.closest(t.wrapperEl).length) ||
    ((i.isTouchEvent = s.type === "touchstart"),
    !i.isTouchEvent && "which" in s && s.which === 3) ||
    (!i.isTouchEvent && "button" in s && s.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!l.noSwipingClass && l.noSwipingClass !== "",
    d = e.composedPath ? e.composedPath() : e.path;
  c && s.target && s.target.shadowRoot && d && (u = z(d[0]));
  const f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
    C = !!(s.target && s.target.shadowRoot);
  if (l.noSwiping && (C ? Ac(f, u[0]) : u.closest(f)[0])) {
    t.allowClick = !0;
    return;
  }
  if (l.swipeHandler && !u.closest(l.swipeHandler)[0]) return;
  (o.currentX = s.type === "touchstart" ? s.targetTouches[0].pageX : s.pageX),
    (o.currentY = s.type === "touchstart" ? s.targetTouches[0].pageY : s.pageY);
  const v = o.currentX,
    y = o.currentY,
    L = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
    p = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
  if (L && (v <= p || v >= r.innerWidth - p))
    if (L === "prevent") e.preventDefault();
    else return;
  if (
    (Object.assign(i, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (o.startX = v),
    (o.startY = y),
    (i.touchStartTime = zr()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    l.threshold > 0 && (i.allowThresholdMove = !1),
    s.type !== "touchstart")
  ) {
    let h = !0;
    u.is(i.focusableElements) &&
      ((h = !1), u[0].nodeName === "SELECT" && (i.isTouched = !1)),
      n.activeElement &&
        z(n.activeElement).is(i.focusableElements) &&
        n.activeElement !== u[0] &&
        n.activeElement.blur();
    const m = h && t.allowTouchMove && l.touchStartPreventDefault;
    (l.touchStartForcePreventDefault || m) &&
      !u[0].isContentEditable &&
      s.preventDefault();
  }
  t.params.freeMode &&
    t.params.freeMode.enabled &&
    t.freeMode &&
    t.animating &&
    !l.cssMode &&
    t.freeMode.onTouchStart(),
    t.emit("touchStart", s);
}
function Nc(e) {
  const t = be(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: l, rtlTranslate: o, enabled: a } = n;
  if (!a) return;
  let s = e;
  if ((s.originalEvent && (s = s.originalEvent), !r.isTouched)) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
    return;
  }
  if (r.isTouchEvent && s.type !== "touchmove") return;
  const u =
      s.type === "touchmove" &&
      s.targetTouches &&
      (s.targetTouches[0] || s.changedTouches[0]),
    c = s.type === "touchmove" ? u.pageX : s.pageX,
    d = s.type === "touchmove" ? u.pageY : s.pageY;
  if (s.preventedByNestedSwiper) {
    (l.startX = c), (l.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    z(s.target).is(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(l, { startX: c, startY: d, currentX: c, currentY: d }),
        (r.touchStartTime = zr()));
    return;
  }
  if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < l.startY && n.translate <= n.maxTranslate()) ||
        (d > l.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < l.startX && n.translate <= n.maxTranslate()) ||
      (c > l.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    r.isTouchEvent &&
    t.activeElement &&
    s.target === t.activeElement &&
    z(s.target).is(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks && n.emit("touchMove", s),
    s.targetTouches && s.targetTouches.length > 1)
  )
    return;
  (l.currentX = c), (l.currentY = d);
  const f = l.currentX - l.startX,
    C = l.currentY - l.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + C ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let p;
    (n.isHorizontal() && l.currentY === l.startY) ||
    (n.isVertical() && l.currentX === l.startX)
      ? (r.isScrolling = !1)
      : f * f + C * C >= 25 &&
        ((p = (Math.atan2(Math.abs(C), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? p > i.touchAngle
          : 90 - p > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", s),
    typeof r.startMoving > "u" &&
      (l.currentX !== l.startX || l.currentY !== l.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && s.cancelable && s.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && s.stopPropagation(),
    r.isMoved ||
      (i.loop && !i.cssMode && n.loopFix(),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", s)),
    n.emit("sliderMove", s),
    (r.isMoved = !0);
  let v = n.isHorizontal() ? f : C;
  (l.diff = v),
    (v *= i.touchRatio),
    o && (v = -v),
    (n.swipeDirection = v > 0 ? "prev" : "next"),
    (r.currentTranslate = v + r.startTranslate);
  let y = !0,
    L = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (L = 0),
    v > 0 && r.currentTranslate > n.minTranslate()
      ? ((y = !1),
        i.resistance &&
          (r.currentTranslate =
            n.minTranslate() -
            1 +
            (-n.minTranslate() + r.startTranslate + v) ** L))
      : v < 0 &&
        r.currentTranslate < n.maxTranslate() &&
        ((y = !1),
        i.resistance &&
          (r.currentTranslate =
            n.maxTranslate() +
            1 -
            (n.maxTranslate() - r.startTranslate - v) ** L)),
    y && (s.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(v) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (l.startX = l.currentX),
          (l.startY = l.currentY),
          (r.currentTranslate = r.startTranslate),
          (l.diff = n.isHorizontal()
            ? l.currentX - l.startX
            : l.currentY - l.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function Mc(e) {
  const t = this,
    n = t.touchEventsData,
    { params: r, touches: i, rtlTranslate: l, slidesGrid: o, enabled: a } = t;
  if (!a) return;
  let s = e;
  if (
    (s.originalEvent && (s = s.originalEvent),
    n.allowTouchCallbacks && t.emit("touchEnd", s),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && r.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  r.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const u = zr(),
    c = u - n.touchStartTime;
  if (t.allowClick) {
    const h = s.path || (s.composedPath && s.composedPath());
    t.updateClickedSlide((h && h[0]) || s.target),
      t.emit("tap click", s),
      c < 300 &&
        u - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", s);
  }
  if (
    ((n.lastClickTime = zr()),
    ml(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      i.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let d;
  if (
    (r.followFinger
      ? (d = l ? t.translate : -t.translate)
      : (d = -n.currentTranslate),
    r.cssMode)
  )
    return;
  if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let f = 0,
    C = t.slidesSizesGrid[0];
  for (
    let h = 0;
    h < o.length;
    h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
  ) {
    const m = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof o[h + m] < "u"
      ? d >= o[h] && d < o[h + m] && ((f = h), (C = o[h + m] - o[h]))
      : d >= o[h] && ((f = h), (C = o[o.length - 1] - o[o.length - 2]));
  }
  let v = null,
    y = null;
  r.rewind &&
    (t.isBeginning
      ? (y =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0));
  const L = (d - o[f]) / C,
    p = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (c > r.longSwipesMs) {
    if (!r.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (L >= r.longSwipesRatio
        ? t.slideTo(r.rewind && t.isEnd ? v : f + p)
        : t.slideTo(f)),
      t.swipeDirection === "prev" &&
        (L > 1 - r.longSwipesRatio
          ? t.slideTo(f + p)
          : y !== null && L < 0 && Math.abs(L) > r.longSwipesRatio
          ? t.slideTo(y)
          : t.slideTo(f));
  } else {
    if (!r.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(f + p)
        : t.slideTo(f)
      : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : f + p),
        t.swipeDirection === "prev" && t.slideTo(y !== null ? y : f));
  }
}
function C3() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses(),
    (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides
      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function Pc(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Oc() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const l = e.maxTranslate() - e.minTranslate();
  l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
let v3 = !1;
function Dc() {}
const p5 = (e, t) => {
  const n = be(),
    {
      params: r,
      touchEvents: i,
      el: l,
      wrapperEl: o,
      device: a,
      support: s,
    } = e,
    u = !!r.nested,
    c = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  if (!s.touch)
    l[c](i.start, e.onTouchStart, !1),
      n[c](i.move, e.onTouchMove, u),
      n[c](i.end, e.onTouchEnd, !1);
  else {
    const f =
      i.start === "touchstart" && s.passiveListener && r.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    l[c](i.start, e.onTouchStart, f),
      l[c](
        i.move,
        e.onTouchMove,
        s.passiveListener ? { passive: !1, capture: u } : u
      ),
      l[c](i.end, e.onTouchEnd, f),
      i.cancel && l[c](i.cancel, e.onTouchEnd, f);
  }
  (r.preventClicks || r.preventClicksPropagation) &&
    l[c]("click", e.onClick, !0),
    r.cssMode && o[c]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[d](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          C3,
          !0
        )
      : e[d]("observerUpdate", C3, !0);
};
function Hc() {
  const e = this,
    t = be(),
    { params: n, support: r } = e;
  (e.onTouchStart = kc.bind(e)),
    (e.onTouchMove = Nc.bind(e)),
    (e.onTouchEnd = Mc.bind(e)),
    n.cssMode && (e.onScroll = Oc.bind(e)),
    (e.onClick = Pc.bind(e)),
    r.touch && !v3 && (t.addEventListener("touchstart", Dc), (v3 = !0)),
    p5(e, "on");
}
function Rc() {
  p5(this, "off");
}
const jc = { attachEvents: Hc, detachEvents: Rc },
  g3 = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Ic() {
  const e = this,
    {
      activeIndex: t,
      initialized: n,
      loopedSlides: r = 0,
      params: i,
      $el: l,
    } = e,
    o = i.breakpoints;
  if (!o || (o && Object.keys(o).length === 0)) return;
  const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
  if (!a || e.currentBreakpoint === a) return;
  const u = (a in o ? o[a] : void 0) || e.originalParams,
    c = g3(e, i),
    d = g3(e, u),
    f = i.enabled;
  c && !d
    ? (l.removeClass(
        `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      d &&
      (l.addClass(`${i.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && i.grid.fill === "column")) &&
        l.addClass(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((L) => {
      const p = i[L] && i[L].enabled,
        h = u[L] && u[L].enabled;
      p && !h && e[L].disable(), !p && h && e[L].enable();
    });
  const C = u.direction && u.direction !== i.direction,
    v = i.loop && (u.slidesPerView !== i.slidesPerView || C);
  C && n && e.changeDirection(), Fe(e.params, u);
  const y = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    f && !y ? e.disable() : !f && y && e.enable(),
    (e.currentBreakpoint = a),
    e.emit("_beforeBreakpoint", u),
    v &&
      n &&
      (e.loopDestroy(),
      e.loopCreate(),
      e.updateSlides(),
      e.slideTo(t - r + e.loopedSlides, 0, !1)),
    e.emit("breakpoint", u);
}
function Vc(e, t = "window", n) {
  if (!e || (t === "container" && !n)) return;
  let r = !1;
  const i = ge(),
    l = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const s = parseFloat(a.substr(1));
        return { value: l * s, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, s) => parseInt(a.value, 10) - parseInt(s.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: s, value: u } = o[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = s)
      : u <= n.clientWidth && (r = s);
  }
  return r || "max";
}
const zc = { setBreakpoint: Ic, getBreakpoint: Vc };
function bc(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function Bc() {
  const e = this,
    { classNames: t, params: n, rtl: r, $el: i, device: l, support: o } = e,
    a = bc(
      [
        "initialized",
        n.direction,
        { "pointer-events": !o.touch },
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: l.android },
        { ios: l.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
}
function Fc() {
  const e = this,
    { $el: t, classNames: n } = e;
  t.removeClass(n.join(" ")), e.emitContainerClasses();
}
const Uc = { addClasses: Bc, removeClasses: Fc };
function _c(e, t, n, r, i, l) {
  const o = ge();
  let a;
  function s() {
    l && l();
  }
  !z(e).parent("picture")[0] && (!e.complete || !i) && t
    ? ((a = new o.Image()),
      (a.onload = s),
      (a.onerror = s),
      r && (a.sizes = r),
      n && (a.srcset = n),
      t && (a.src = t))
    : s();
}
function Wc() {
  const e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" ||
      e === null ||
      !e ||
      e.destroyed ||
      (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1),
      e.imagesLoaded === e.imagesToLoad.length &&
        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (let n = 0; n < e.imagesToLoad.length; n += 1) {
    const r = e.imagesToLoad[n];
    e.loadImage(
      r,
      r.currentSrc || r.getAttribute("src"),
      r.srcset || r.getAttribute("srcset"),
      r.sizes || r.getAttribute("sizes"),
      !0,
      t
    );
  }
}
const Gc = { loadImage: _c, preloadImages: Wc };
function Yc() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > l;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const Zc = { checkOverflow: Yc },
  y3 = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Kc(e, t) {
  return function (r = {}) {
    const i = Object.keys(r)[0],
      l = r[i];
    if (typeof l != "object" || l === null) {
      Fe(t, r);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in l))
    ) {
      Fe(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Fe(t, r);
  };
}
const h2 = {
    eventsEmitter: W9,
    update: ec,
    translate: oc,
    transition: cc,
    slide: gc,
    loop: Lc,
    grabCursor: Tc,
    events: jc,
    breakpoints: zc,
    checkOverflow: Zc,
    classes: Uc,
    images: Gc,
  },
  m2 = {};
let Un = class Ct {
  constructor(...t) {
    let n, r;
    if (
      (t.length === 1 &&
      t[0].constructor &&
      Object.prototype.toString.call(t[0]).slice(8, -1) === "Object"
        ? (r = t[0])
        : ([n, r] = t),
      r || (r = {}),
      (r = Fe({}, r)),
      n && !r.el && (r.el = n),
      r.el && z(r.el).length > 1)
    ) {
      const a = [];
      return (
        z(r.el).each((s) => {
          const u = Fe({}, r, { el: s });
          a.push(new Ct(u));
        }),
        a
      );
    }
    const i = this;
    (i.__swiper__ = !0),
      (i.support = d5()),
      (i.device = b9({ userAgent: r.userAgent })),
      (i.browser = F9()),
      (i.eventsListeners = {}),
      (i.eventsAnyListeners = []),
      (i.modules = [...i.__modules__]),
      r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
    const l = {};
    i.modules.forEach((a) => {
      a({
        swiper: i,
        extendParams: Kc(r, l),
        on: i.on.bind(i),
        once: i.once.bind(i),
        off: i.off.bind(i),
        emit: i.emit.bind(i),
      });
    });
    const o = Fe({}, y3, l);
    return (
      (i.params = Fe({}, o, m2, r)),
      (i.originalParams = Fe({}, i.params)),
      (i.passedParams = Fe({}, r)),
      i.params &&
        i.params.on &&
        Object.keys(i.params.on).forEach((a) => {
          i.on(a, i.params.on[a]);
        }),
      i.params && i.params.onAny && i.onAny(i.params.onAny),
      (i.$ = z),
      Object.assign(i, {
        enabled: i.params.enabled,
        el: n,
        classNames: [],
        slides: z(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return i.params.direction === "horizontal";
        },
        isVertical() {
          return i.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEvents: (function () {
          const s = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (i.touchEventsTouch = {
              start: s[0],
              move: s[1],
              end: s[2],
              cancel: s[3],
            }),
            (i.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            i.support.touch || !i.params.simulateTouch
              ? i.touchEventsTouch
              : i.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: i.params.focusableElements,
          lastClickTime: zr(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      i.emit("_swiper"),
      i.params.init && i.init(),
      i
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.each((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t = "current", n = !1) {
    const r = this,
      {
        params: i,
        slides: l,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: s,
        activeIndex: u,
      } = r;
    let c = 1;
    if (i.centeredSlides) {
      let d = l[u].swiperSlideSize,
        f;
      for (let C = u + 1; C < l.length; C += 1)
        l[C] &&
          !f &&
          ((d += l[C].swiperSlideSize), (c += 1), d > s && (f = !0));
      for (let C = u - 1; C >= 0; C -= 1)
        l[C] &&
          !f &&
          ((d += l[C].swiperSlideSize), (c += 1), d > s && (f = !0));
    } else if (t === "current")
      for (let d = u + 1; d < l.length; d += 1)
        (n ? o[d] + a[d] - o[u] < s : o[d] - o[u] < s) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < s && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let l;
    t.params.freeMode && t.params.freeMode.enabled
      ? (i(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (l = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (l = t.slideTo(t.activeIndex, 0, !1, !0)),
        l || i()),
      r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n = !0) {
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.$el
          .removeClass(`${r.params.containerModifierClass}${i}`)
          .addClass(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.each((l) => {
          t === "vertical" ? (l.style.width = "") : (l.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.$el.addClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.$el.removeClass(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    const r = z(t || n.params.el);
    if (((t = r[0]), !t)) return !1;
    t.swiper = n;
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => {
      if (t && t.shadowRoot && t.shadowRoot.querySelector) {
        const a = z(t.shadowRoot.querySelector(i()));
        return (a.children = (s) => r.children(s)), a;
      }
      return r.children ? r.children(i()) : z(r).children(i());
    })();
    if (o.length === 0 && n.params.createElements) {
      const s = be().createElement("div");
      (o = z(s)),
        (s.className = n.params.wrapperClass),
        r.append(s),
        r.children(`.${n.params.slideClass}`).each((u) => {
          o.append(u);
        });
    }
    return (
      Object.assign(n, {
        $el: r,
        el: t,
        $wrapperEl: o,
        wrapperEl: o[0],
        mounted: !0,
        rtl: t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (t.dir.toLowerCase() === "rtl" || r.css("direction") === "rtl"),
        wrongRTL: o.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.params.loop && n.loopCreate(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.preloadImages && n.preloadImages(),
        n.params.loop
          ? n.slideTo(
              n.params.initialSlide + n.loopedSlides,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.attachEvents(),
        (n.initialized = !0),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t = !0, n = !0) {
    const r = this,
      { params: i, $el: l, $wrapperEl: o, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          l.removeAttr("style"),
          o.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((s) => {
          r.off(s);
        }),
        t !== !1 && ((r.$el[0].swiper = null), H9(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Fe(m2, t);
  }
  static get extendedDefaults() {
    return m2;
  }
  static get defaults() {
    return y3;
  }
  static installModule(t) {
    Ct.prototype.__modules__ || (Ct.prototype.__modules__ = []);
    const n = Ct.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ct.installModule(n)), Ct)
      : (Ct.installModule(t), Ct);
  }
};
Object.keys(h2).forEach((e) => {
  Object.keys(h2[e]).forEach((t) => {
    Un.prototype[t] = h2[e][t];
  });
});
Un.use([U9, _9]);
function Qc(e, t, n, r) {
  const i = be();
  return (
    e.params.createElements &&
      Object.keys(r).forEach((l) => {
        if (!n[l] && n.auto === !0) {
          let o = e.$el.children(`.${r[l]}`)[0];
          o ||
            ((o = i.createElement("div")),
            (o.className = r[l]),
            e.$el.append(o)),
            (n[l] = o),
            (t[l] = o);
        }
      }),
    n
  );
}
function Xc({ swiper: e, extendParams: t, on: n, emit: r }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null,
    });
  function i(C) {
    let v;
    return (
      C &&
        ((v = z(C)),
        e.params.uniqueNavElements &&
          typeof C == "string" &&
          v.length > 1 &&
          e.$el.find(C).length === 1 &&
          (v = e.$el.find(C))),
      v
    );
  }
  function l(C, v) {
    const y = e.params.navigation;
    C &&
      C.length > 0 &&
      (C[v ? "addClass" : "removeClass"](y.disabledClass),
      C[0] && C[0].tagName === "BUTTON" && (C[0].disabled = v),
      e.params.watchOverflow &&
        e.enabled &&
        C[e.isLocked ? "addClass" : "removeClass"](y.lockClass));
  }
  function o() {
    if (e.params.loop) return;
    const { $nextEl: C, $prevEl: v } = e.navigation;
    l(v, e.isBeginning && !e.params.rewind), l(C, e.isEnd && !e.params.rewind);
  }
  function a(C) {
    C.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), r("navigationPrev"));
  }
  function s(C) {
    C.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), r("navigationNext"));
  }
  function u() {
    const C = e.params.navigation;
    if (
      ((e.params.navigation = Qc(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(C.nextEl || C.prevEl))
    )
      return;
    const v = i(C.nextEl),
      y = i(C.prevEl);
    v && v.length > 0 && v.on("click", s),
      y && y.length > 0 && y.on("click", a),
      Object.assign(e.navigation, {
        $nextEl: v,
        nextEl: v && v[0],
        $prevEl: y,
        prevEl: y && y[0],
      }),
      e.enabled || (v && v.addClass(C.lockClass), y && y.addClass(C.lockClass));
  }
  function c() {
    const { $nextEl: C, $prevEl: v } = e.navigation;
    C &&
      C.length &&
      (C.off("click", s), C.removeClass(e.params.navigation.disabledClass)),
      v &&
        v.length &&
        (v.off("click", a), v.removeClass(e.params.navigation.disabledClass));
  }
  n("init", () => {
    e.params.navigation.enabled === !1 ? f() : (u(), o());
  }),
    n("toEdge fromEdge lock unlock", () => {
      o();
    }),
    n("destroy", () => {
      c();
    }),
    n("enable disable", () => {
      const { $nextEl: C, $prevEl: v } = e.navigation;
      C &&
        C[e.enabled ? "removeClass" : "addClass"](
          e.params.navigation.lockClass
        ),
        v &&
          v[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          );
    }),
    n("click", (C, v) => {
      const { $nextEl: y, $prevEl: L } = e.navigation,
        p = v.target;
      if (e.params.navigation.hideOnClick && !z(p).is(L) && !z(p).is(y)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === p || e.pagination.el.contains(p))
        )
          return;
        let h;
        y
          ? (h = y.hasClass(e.params.navigation.hiddenClass))
          : L && (h = L.hasClass(e.params.navigation.hiddenClass)),
          r(h === !0 ? "navigationShow" : "navigationHide"),
          y && y.toggleClass(e.params.navigation.hiddenClass),
          L && L.toggleClass(e.params.navigation.hiddenClass);
      }
    });
  const d = () => {
      e.$el.removeClass(e.params.navigation.navigationDisabledClass), u(), o();
    },
    f = () => {
      e.$el.addClass(e.params.navigation.navigationDisabledClass), c();
    };
  Object.assign(e.navigation, {
    enable: d,
    disable: f,
    update: o,
    init: u,
    destroy: c,
  });
}
function fn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function It(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : fn(t[r]) && fn(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : It(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function h5(e = {}) {
  return (
    e.navigation &&
    typeof e.navigation.nextEl > "u" &&
    typeof e.navigation.prevEl > "u"
  );
}
function m5(e = {}) {
  return e.pagination && typeof e.pagination.el > "u";
}
function C5(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > "u";
}
function v5(e = "") {
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
const g5 = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopedSlidesLimit",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function $c(e = {}, t = !0) {
  const n = { on: {} },
    r = {},
    i = {};
  It(n, Un.defaults),
    It(n, Un.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const l = {},
    o = g5.map((s) => s.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((s) => {
      typeof e[s] > "u" ||
        (o.indexOf(s) >= 0
          ? fn(e[s])
            ? ((n[s] = {}), (i[s] = {}), It(n[s], e[s]), It(i[s], e[s]))
            : ((n[s] = e[s]), (i[s] = e[s]))
          : s.search(/on[A-Z]/) === 0 && typeof e[s] == "function"
          ? t
            ? (r[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
            : (n.on[`${s[2].toLowerCase()}${s.substr(3)}`] = e[s])
          : (l[s] = e[s]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((s) => {
      n[s] === !0 && (n[s] = {}), n[s] === !1 && delete n[s];
    }),
    { params: n, passedParams: i, rest: l, events: r }
  );
}
function Jc(
  { el: e, nextEl: t, prevEl: n, paginationEl: r, scrollbarEl: i, swiper: l },
  o
) {
  h5(o) &&
    t &&
    n &&
    ((l.params.navigation.nextEl = t),
    (l.originalParams.navigation.nextEl = t),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    m5(o) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    C5(o) &&
      i &&
      ((l.params.scrollbar.el = i), (l.originalParams.scrollbar.el = i)),
    l.init(e);
}
const y5 = (e, t) => {
  let n = t.slidesPerView;
  if (t.breakpoints) {
    const i = Un.prototype.getBreakpoint(t.breakpoints),
      l = i in t.breakpoints ? t.breakpoints[i] : void 0;
    l && l.slidesPerView && (n = l.slidesPerView);
  }
  let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
  return (
    (r += t.loopAdditionalSlides),
    r > e.length && t.loopedSlidesLimit && (r = e.length),
    r
  );
};
function qc(e, t, n) {
  const r = t.map((s, u) =>
    H.cloneElement(s, { swiper: e, "data-swiper-slide-index": u })
  );
  function i(s, u, c) {
    return H.cloneElement(s, {
      key: `${s.key}-duplicate-${u}-${c}`,
      className: `${s.props.className || ""} ${n.slideDuplicateClass}`,
    });
  }
  if (n.loopFillGroupWithBlank) {
    const s = n.slidesPerGroup - (r.length % n.slidesPerGroup);
    if (s !== n.slidesPerGroup)
      for (let u = 0; u < s; u += 1) {
        const c = H.createElement("div", {
          className: `${n.slideClass} ${n.slideBlankClass}`,
        });
        r.push(c);
      }
  }
  n.slidesPerView === "auto" && !n.loopedSlides && (n.loopedSlides = r.length);
  const l = y5(r, n),
    o = [],
    a = [];
  for (let s = 0; s < l; s += 1) {
    const u = s - Math.floor(s / r.length) * r.length;
    a.push(i(r[u], s, "append")),
      o.unshift(i(r[r.length - u - 1], s, "prepend"));
  }
  return e && (e.loopedSlides = l), [...o, ...r, ...a];
}
function ed(e, t, n, r, i) {
  const l = [];
  if (!t) return l;
  const o = (s) => {
    l.indexOf(s) < 0 && l.push(s);
  };
  if (n && r) {
    const s = r.map(i),
      u = n.map(i);
    s.join("") !== u.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    g5
      .filter((s) => s[0] === "_")
      .map((s) => s.replace(/_/, ""))
      .forEach((s) => {
        if (s in e && s in t)
          if (fn(e[s]) && fn(t[s])) {
            const u = Object.keys(e[s]),
              c = Object.keys(t[s]);
            u.length !== c.length
              ? o(s)
              : (u.forEach((d) => {
                  e[s][d] !== t[s][d] && o(s);
                }),
                c.forEach((d) => {
                  e[s][d] !== t[s][d] && o(s);
                }));
          } else e[s] !== t[s] && o(s);
      }),
    l
  );
}
function x5(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function w5(e) {
  const t = [];
  return (
    H.Children.toArray(e).forEach((n) => {
      x5(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          w5(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function td(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    H.Children.toArray(e).forEach((r) => {
      if (x5(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = w5(r.props.children);
        i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function nd({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: r,
  nextEl: i,
  prevEl: l,
  scrollbarEl: o,
  paginationEl: a,
}) {
  const s = r.filter((S) => S !== "children" && S !== "direction"),
    {
      params: u,
      pagination: c,
      navigation: d,
      scrollbar: f,
      virtual: C,
      thumbs: v,
    } = e;
  let y, L, p, h, m;
  r.includes("thumbs") &&
    n.thumbs &&
    n.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (y = !0),
    r.includes("controller") &&
      n.controller &&
      n.controller.control &&
      u.controller &&
      !u.controller.control &&
      (L = !0),
    r.includes("pagination") &&
      n.pagination &&
      (n.pagination.el || a) &&
      (u.pagination || u.pagination === !1) &&
      c &&
      !c.el &&
      (p = !0),
    r.includes("scrollbar") &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (u.scrollbar || u.scrollbar === !1) &&
      f &&
      !f.el &&
      (h = !0),
    r.includes("navigation") &&
      n.navigation &&
      (n.navigation.prevEl || l) &&
      (n.navigation.nextEl || i) &&
      (u.navigation || u.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (m = !0);
  const x = (S) => {
    e[S] &&
      (e[S].destroy(),
      S === "navigation"
        ? ((u[S].prevEl = void 0),
          (u[S].nextEl = void 0),
          (e[S].prevEl = void 0),
          (e[S].nextEl = void 0))
        : ((u[S].el = void 0), (e[S].el = void 0)));
  };
  s.forEach((S) => {
    if (fn(u[S]) && fn(n[S])) It(u[S], n[S]);
    else {
      const N = n[S];
      (N === !0 || N === !1) &&
      (S === "navigation" || S === "pagination" || S === "scrollbar")
        ? N === !1 && x(S)
        : (u[S] = n[S]);
    }
  }),
    s.includes("controller") &&
      !L &&
      e.controller &&
      e.controller.control &&
      u.controller &&
      u.controller.control &&
      (e.controller.control = u.controller.control),
    r.includes("children") && t && C && u.virtual.enabled
      ? ((C.slides = t), C.update(!0))
      : r.includes("children") &&
        e.lazy &&
        e.params.lazy.enabled &&
        e.lazy.load(),
    y && v.init() && v.update(!0),
    L && (e.controller.control = u.controller.control),
    p && (a && (u.pagination.el = a), c.init(), c.render(), c.update()),
    h &&
      (o && (u.scrollbar.el = o), f.init(), f.updateSize(), f.setTranslate()),
    m &&
      (i && (u.navigation.nextEl = i),
      l && (u.navigation.prevEl = l),
      d.init(),
      d.update()),
    r.includes("allowSlideNext") && (e.allowSlideNext = n.allowSlideNext),
    r.includes("allowSlidePrev") && (e.allowSlidePrev = n.allowSlidePrev),
    r.includes("direction") && e.changeDirection(n.direction, !1),
    e.update();
}
function rd(e, t, n) {
  if (!n) return null;
  const r = e.isHorizontal()
    ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
    : { top: `${n.offset}px` };
  return t
    .filter((i, l) => l >= n.from && l <= n.to)
    .map((i) => H.cloneElement(i, { swiper: e, style: r }));
}
const id = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.lazy && e.params.lazy.enabled && e.lazy.load(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function gr(e, t) {
  return typeof window > "u" ? E.useEffect(e, t) : E.useLayoutEffect(e, t);
}
const ld = E.createContext(null),
  od = E.createContext(null);
function Cl() {
  return (
    (Cl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Cl.apply(this, arguments)
  );
}
const L5 = E.forwardRef(function (e, t) {
  let {
      className: n,
      tag: r = "div",
      wrapperTag: i = "div",
      children: l,
      onSwiper: o,
      ...a
    } = e === void 0 ? {} : e,
    s = !1;
  const [u, c] = E.useState("swiper"),
    [d, f] = E.useState(null),
    [C, v] = E.useState(!1),
    y = E.useRef(!1),
    L = E.useRef(null),
    p = E.useRef(null),
    h = E.useRef(null),
    m = E.useRef(null),
    x = E.useRef(null),
    S = E.useRef(null),
    N = E.useRef(null),
    T = E.useRef(null),
    { params: w, passedParams: R, rest: A, events: D } = $c(a),
    { slides: b, slots: _ } = td(l),
    Y = () => {
      v(!C);
    };
  Object.assign(w.on, {
    _containerClasses(k, M) {
      c(M);
    },
  });
  const Z = () => {
    if (
      (Object.assign(w.on, D),
      (s = !0),
      (p.current = new Un(w)),
      (p.current.loopCreate = () => {}),
      (p.current.loopDestroy = () => {}),
      w.loop && (p.current.loopedSlides = y5(b, w)),
      p.current.virtual && p.current.params.virtual.enabled)
    ) {
      p.current.virtual.slides = b;
      const k = {
        cache: !1,
        slides: b,
        renderExternal: f,
        renderExternalUpdate: !1,
      };
      It(p.current.params.virtual, k), It(p.current.originalParams.virtual, k);
    }
  };
  L.current || Z(), p.current && p.current.on("_beforeBreakpoint", Y);
  const de = () => {
      s ||
        !D ||
        !p.current ||
        Object.keys(D).forEach((k) => {
          p.current.on(k, D[k]);
        });
    },
    ae = () => {
      !D ||
        !p.current ||
        Object.keys(D).forEach((k) => {
          p.current.off(k, D[k]);
        });
    };
  E.useEffect(() => () => {
    p.current && p.current.off("_beforeBreakpoint", Y);
  }),
    E.useEffect(() => {
      !y.current &&
        p.current &&
        (p.current.emitSlidesClasses(), (y.current = !0));
    }),
    gr(() => {
      if ((t && (t.current = L.current), !!L.current))
        return (
          p.current.destroyed && Z(),
          Jc(
            {
              el: L.current,
              nextEl: x.current,
              prevEl: S.current,
              paginationEl: N.current,
              scrollbarEl: T.current,
              swiper: p.current,
            },
            w
          ),
          o && o(p.current),
          () => {
            p.current && !p.current.destroyed && p.current.destroy(!0, !1);
          }
        );
    }, []),
    gr(() => {
      de();
      const k = ed(R, h.current, b, m.current, (M) => M.key);
      return (
        (h.current = R),
        (m.current = b),
        k.length &&
          p.current &&
          !p.current.destroyed &&
          nd({
            swiper: p.current,
            slides: b,
            passedParams: R,
            changedParams: k,
            nextEl: x.current,
            prevEl: S.current,
            scrollbarEl: T.current,
            paginationEl: N.current,
          }),
        () => {
          ae();
        }
      );
    }),
    gr(() => {
      id(p.current);
    }, [d]);
  function O() {
    return w.virtual
      ? rd(p.current, b, d)
      : !w.loop || (p.current && p.current.destroyed)
      ? b.map((k) => H.cloneElement(k, { swiper: p.current }))
      : qc(p.current, b, w);
  }
  return H.createElement(
    r,
    Cl({ ref: L, className: v5(`${u}${n ? ` ${n}` : ""}`) }, A),
    H.createElement(
      od.Provider,
      { value: p.current },
      _["container-start"],
      H.createElement(
        i,
        { className: "swiper-wrapper" },
        _["wrapper-start"],
        O(),
        _["wrapper-end"]
      ),
      h5(w) &&
        H.createElement(
          H.Fragment,
          null,
          H.createElement("div", { ref: S, className: "swiper-button-prev" }),
          H.createElement("div", { ref: x, className: "swiper-button-next" })
        ),
      C5(w) &&
        H.createElement("div", { ref: T, className: "swiper-scrollbar" }),
      m5(w) &&
        H.createElement("div", { ref: N, className: "swiper-pagination" }),
      _["container-end"]
    )
  );
});
L5.displayName = "Swiper";
function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
const S5 = E.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: l,
    zoom: o,
    virtualIndex: a,
    ...s
  } = e === void 0 ? {} : e;
  const u = E.useRef(null),
    [c, d] = E.useState("swiper-slide");
  function f(y, L, p) {
    L === u.current && d(p);
  }
  gr(() => {
    if ((t && (t.current = u.current), !(!u.current || !l))) {
      if (l.destroyed) {
        c !== "swiper-slide" && d("swiper-slide");
        return;
      }
      return (
        l.on("_slideClass", f),
        () => {
          l && l.off("_slideClass", f);
        }
      );
    }
  }),
    gr(() => {
      l && u.current && !l.destroyed && d(l.getSlideClasses(u.current));
    }, [l]);
  const C = {
      isActive:
        c.indexOf("swiper-slide-active") >= 0 ||
        c.indexOf("swiper-slide-duplicate-active") >= 0,
      isVisible: c.indexOf("swiper-slide-visible") >= 0,
      isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
      isPrev:
        c.indexOf("swiper-slide-prev") >= 0 ||
        c.indexOf("swiper-slide-duplicate-prev") >= 0,
      isNext:
        c.indexOf("swiper-slide-next") >= 0 ||
        c.indexOf("swiper-slide-duplicate-next") >= 0,
    },
    v = () => (typeof r == "function" ? r(C) : r);
  return H.createElement(
    n,
    vl(
      {
        ref: u,
        className: v5(`${c}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
      },
      s
    ),
    H.createElement(
      ld.Provider,
      { value: C },
      o
        ? H.createElement(
            "div",
            {
              className: "swiper-zoom-container",
              "data-swiper-zoom": typeof o == "number" ? o : void 0,
            },
            v()
          )
        : v()
    )
  );
});
S5.displayName = "SwiperSlide";
const sd = [
    {
      image: Vu,
      title: "Forge your wallet",
      description:
        "Dive into the rebel's toolkit: snag Metamask  Wallet or any wallet that shouts 'freedom' from the App Store or Google Play - it's on the house. Desktop renegades, charge over to Ethereum mainnet and snag the Google Chrome extension. It's your first step to defiance.",
    },
    {
      image: zu,
      title: "Fuel up with $ETH",
      description:
        "Power up your wallet with $ETH to gear up for $EDOG. No $ETH? No sweat. Buy it straight from major CEXes like Binance, Coinbase and send it over your wallet.",
    },
    {
      image: bu,
      title: "Storm Uniswap",
      description:
        "Launch your assault on Uniswap. Hit up Uniswap.org via Google Chrome or through the portal in your Metamask app. Link up your wallet like a digital lockpick. Drop the $EDOG token address into Uniswap's heart, pick $EDOG, and hammer that confirm button. When MetaMask hollers for a signature, brand it with yours.",
    },
    {
      image: Bu,
      title: "Swap $ETH for $EDOG",
      description:
        "Flip $ETH for $EDOG like a true insurgent. We’re a tax-free zone - no need to fuss about specific slippage, though you might need to play with it when the market gets wild. Welcome to the rebellion.",
    },
  ],
  ad = () => {
    const e = E.useRef();
    return g.jsxs("div", {
      children: [
        g.jsx("div", {
          children: g.jsx(L5, {
            onBeforeInit: (t) => {
              e.current = t;
            },
            pagination: !1,
            centeredSlides: !0,
            breakpoints: {
              320: { slidesPerView: 1.2, spaceBetween: 12 },
              560: { slidesPerView: 1.2, spaceBetween: 24 },
              768: { slidesPerView: 1.1, spaceBetween: 24 },
              992: { slidesPerView: 1.5, spaceBetween: 24 },
              1439: { slidesPerView: 1.8, spaceBetween: 24 },
            },
            modules: [Xc],
            children: sd.map((t, n) =>
              g.jsx(
                S5,
                {
                  className: "h-auto",
                  children: g.jsxs("div", {
                    className:
                      "flex flex-col bg-neutral-0 md:flex-row lg:gap-12 gap-6 items-center h-full md:px-12 md:py-10 p-6 border-[4px] rounded-[24px] border-[#2A2422] shadow-[0px 4px 0px 0px #2A2422] h-full",
                    children: [
                      g.jsx("div", {
                        children: g.jsx("img", {
                          src: t.image,
                          alt: t.title,
                          className: "lg:w-full md:w-[232px] w-full",
                        }),
                      }),
                      g.jsxs("div", {
                        className: "flex-1",
                        children: [
                          g.jsx("div", {
                            className:
                              "lg:text-[32px] text-[24px] font-bold leading-[1.5] mb-4",
                            children: t.title,
                          }),
                          g.jsx("div", {
                            className:
                              "lg:text-[20px] text-[16px] leading-[1.5] max-w-full",
                            children: t.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                },
                n
              )
            ),
          }),
        }),
        g.jsxs("div", {
          className: "flex gap-2 justify-center mt-6",
          children: [
            g.jsx("div", {
              className:
                "px-4 py-2 bg-[#2A2422] rounded-[56px] cursor-pointer hover:bg-yellow-900",
              onClick: () => e.current?.slidePrev(),
              children: g.jsx(o3, {}),
            }),
            g.jsx("div", {
              className:
                "px-4 py-2 bg-[#2A2422] rounded-[56px] cursor-pointer hover:bg-yellow-900",
              onClick: () => e.current?.slideNext(),
              children: g.jsx(o3, { className: "rotate-[180deg]" }),
            }),
          ],
        }),
      ],
    });
  },
  ud = () =>
    g.jsxs("div", {
      className: "md:my-[64px] z-[3] relative",
      id: "how-to-buy",
      children: [
        g.jsx("div", {
          className: "absolute left-0 top-0",
          children: g.jsx("img", { src: ju }),
        }),
        g.jsx("div", {
          className: "absolute right-0 top-[50%] translate-y-[-50%]",
          children: g.jsx("img", { src: Iu }),
        }),
        g.jsxs("div", {
          className: "relative w-max mx-auto",
          children: [
            g.jsx("div", {
              className:
                "lg:text-[56px] md:text-[48px] text-[32px] z-[2] font-BDCartoon text-yellow-900 text-center w-full leading-[1.2] mb-[64px]",
              children: "How to buy",
            }),
            g.jsx("div", {
              className:
                "text-[18px] flex z-[-1] text-yellow-1000 justify-center items-center h-9 w-9 rounded-[100px] absolute top-[-4px] right-[-24px] bg-yellow-300",
              children: "3",
            }),
          ],
        }),
        g.jsx("div", {
          className: "lg:mb-[112px] mb-12",
          children: g.jsx(ad, {}),
        }),
        g.jsxs("div", {
          className: "flex justify-center relative",
          children: [
            g.jsx("img", {
              src: Pu,
              className: "md:max-w-[1272px] md:w-[110%] max-w-[420px]",
            }),
            g.jsxs("div", {
              className:
                "flex flex-col items-center absolute left-[50%] translate-x-[-50%] md:bottom-[280px] bottom-[90px]",
              children: [
                g.jsx("div", {
                  className:
                    "w-max text-yellow-50 text-[8px] leading-[1.5] py-0 md:text-[12px] font-medium px-1 md:px-3 md:py-1 rounded-t-[3px] md:rounded-t-[8px] bg-[#0F1837] border-[2px] border-[#000]",
                  children: "Contract Address",
                }),
                g.jsxs("div", {
                  className:
                    "flex gap-2 items-center md:py-2 py-0 md:px-6 px-2 text-blue-900 bg-[#FFD060] border md:border-[4px] border--blue-900 rounded-[56px]",
                  children: [
                    g.jsx("div", {
                      className:
                        "md:text-[32px] text-[14px] font-medium leading-[1.5]",
                      children: ri(pe.contractAddress),
                    }),
                    g.jsx("div", {
                      className: "cursor-pointer",
                      onClick: () => Ao(pe.contractAddress),
                      children: g.jsx(To, { className: "md:w-8 w-[14px]" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  cd = () =>
    g.jsxs("div", {
      className: "relative h-[713px] items-start w-full",
      children: [
        g.jsx("div", {
          className: "h-[462px] bg-no-repeat bg-cover bg-center w-full",
          style: { backgroundImage: `url(${Ou})` },
        }),
        g.jsx("div", { className: "h-[251px] bg-[#FAD34B]" }),
        g.jsx("div", {
          className: "absolute left-0 bottom-0 z-[69]",
          children: g.jsx("img", {
            src: Du,
            alt: "cloud-left",
            className: "md:h-full h-[120px]",
          }),
        }),
        g.jsx("div", {
          className: "absolute right-0 bottom-0 z-[69]",
          children: g.jsx("img", {
            src: Hu,
            alt: "cloud-right",
            className: "md:h-full h-[120px]",
          }),
        }),
        g.jsxs("div", {
          className:
            "absolute flex gap-8 flex-col items-center bottom-[100px] left-[50%] w-full w-[calc(100%-48px)] max-w-[1272px] bg-blue-700 rounded-[32px] px-6 py-[48px] md:py-[84px] md:px-[48px]",
          style: { transform: "translateX(-50%)" },
          children: [
            g.jsxs("div", {
              className:
                "font-BDCartoon lg:text-[56px] md:text-[48px] text-[32px] leading-[1.2] text-[#FBF9F1] max-w-[740px] text-center",
              children: [
                "Don'T LEAVE ",
                g.jsx("br", {}),
                " THE GOOD BOI ",
                g.jsx("br", {}),
                " HANGIN",
              ],
            }),
            g.jsx("div", {
              className:
                "body-medium-regular-20 text-[14px] md:text-[20px] text-neutral-0 max-w-[840px] text-center",
              children:
                "Legal Disclaimer: $EDOG is a meme coin with no intrinsic value or expectation of financial return. $EDOG is completely useless and for entertainment purposes only. When you purchase $EDOG, you are agreeing that you have seen this disclaimer.",
            }),
            g.jsxs("div", {
              className: "flex flex-col md:flex-row gap-4 md:gap-8",
              children: [
                g.jsx("a", {
                  href: pe.link.telegram,
                  target: "_blank",
                  children: g.jsx("div", {
                    className:
                      "cursor-pointer pb-[3px] pr-[3px] bg-yellow-1000",
                    children: g.jsx("div", {
                      className:
                        "px-7 py-[14px] uppercase font-Slackey rounded-[6px] border-[3px] border-yellow-1000 bg-yellow-300 hover:bg-[#FBDC6F] text-[16.8px] leading-[18px] text-yellow-1000",
                      children: "Telegram",
                    }),
                  }),
                }),
                g.jsx("a", {
                  href: pe.link.twitter,
                  target: "_blank",
                  children: g.jsx("div", {
                    className:
                      "cursor-pointer pb-[3px] pr-[3px] bg-yellow-1000",
                    children: g.jsx("div", {
                      className:
                        "px-7 py-[14px] uppercase font-Slackey rounded-[6px] border-[3px] border-yellow-1000 bg-blue-300 hover:bg-[#7E8EC8] text-[16.8px] leading-[18px] text-yellow-1000",
                      children: "Twitter",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  dd = () =>
    g.jsxs("div", {
      className: "bg-yellow-50 overflow-hidden",
      children: [
        g.jsx(p6, {}),
        g.jsx(W6, {}),
        g.jsx(G6, {}),
        g.jsx(Y6, {}),
        g.jsx(ud, {}),
        g.jsx(cd, {}),
      ],
    }),
  fd = () =>
    g.jsx(g.Fragment, {
      children: g.jsx("main", {
        className:
          "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",
        children: g.jsxs("div", {
          className: "text-center",
          children: [
            g.jsx("h1", {
              className:
                "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",
              children: "Something went wrong!",
            }),
            g.jsx("p", {
              className: "mt-6 text-base leading-7 text-gray-600",
              children:
                "Sorry, an unexpected error has occurred. Please try refreshing the page.",
            }),
          ],
        }),
      }),
    }),
  pd = () =>
    g.jsx(g.Fragment, {
      children: g.jsx("main", {
        className:
          "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",
        children: g.jsxs("div", {
          className: "text-center",
          children: [
            g.jsx("h1", {
              className:
                "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl",
              children: "404",
            }),
            g.jsx("p", {
              className: "mt-6 text-base leading-7 text-gray-600",
              children: "Sorry, not found to this page or resource.",
            }),
          ],
        }),
      }),
    }),
  hd = () =>
    g.jsx("div", {
      className: "flex flex-col items-center justify-center h-screen",
      children: g.jsx("div", {
        className: "text-lg font-medium mt-10",
        children: "Loading...",
      }),
    }),
  md = { HOME: "/", FORBIDDEN: "/403", NOT_FOUND: "/404" },
  Cd = () =>
    g.jsxs(q7, {
      children: [
        g.jsx(Js, { path: md.HOME, component: dd, exact: !1 }),
        g.jsx(Js, { path: "*", component: pd, exact: !1 }),
      ],
    }),
  vd = eu(Cd);
function gd() {
  const e = Ba();
  return g.jsx(E.Suspense, {
    fallback: g.jsx(hd, {}),
    children: g.jsxs(X8, {
      fallback: g.jsx(fd, {}),
      children: [
        g.jsx(vu, {
          autoClose: 3e3,
          position: "top-right",
          hideProgressBar: !0,
          pauseOnHover: !0,
          closeButton: !1,
        }),
        g.jsx(tu, {
          children: g.jsx(Gr, { history: e, children: g.jsx(vd, {}) }),
        }),
      ],
    }),
  });
}
C2.createRoot(document.getElementById("root")).render(
  g.jsx(H.StrictMode, { children: g.jsx(gd, {}) })
);
