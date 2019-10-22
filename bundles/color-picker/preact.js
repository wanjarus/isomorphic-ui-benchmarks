var app = (function () {
  'use strict';

  var n,
      l,
      u,
      t,
      i,
      r,
      o,
      f = {},
      e = [],
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

  function s(n, l) {
    for (var u in l) n[u] = l[u];

    return n;
  }

  function a(n) {
    var l = n.parentNode;
    l && l.removeChild(n);
  }

  function h(n, l, u) {
    var t,
        i,
        r,
        o,
        f = arguments;
    if (l = s({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(f[t]);
    if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
    return o = l.key, null != (r = l.ref) && delete l.ref, null != o && delete l.key, v(n, l, o, r);
  }

  function v(l, u, t, i) {
    var r = {
      type: l,
      props: u,
      key: t,
      ref: i,
      __k: null,
      __p: null,
      __b: 0,
      __e: null,
      l: null,
      __c: null,
      constructor: void 0
    };
    return n.vnode && n.vnode(r), r;
  }

  function p() {
    return {};
  }

  function d(n) {
    return n.children;
  }

  function y(n) {
    if (null == n || "boolean" == typeof n) return null;
    if ("string" == typeof n || "number" == typeof n) return v(null, n, null, null);

    if (null != n.__e || null != n.__c) {
      var l = v(n.type, n.props, n.key, null);
      return l.__e = n.__e, l;
    }

    return n;
  }

  function m(n, l) {
    this.props = n, this.context = l;
  }

  function w(n, l) {
    if (null == l) return n.__p ? w(n.__p, n.__p.__k.indexOf(n) + 1) : null;

    for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

    return "function" == typeof n.type ? w(n) : null;
  }

  function g(n) {
    var l, u;

    if (null != (n = n.__p) && null != n.__c) {
      for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
        n.__e = n.__c.base = u.__e;
        break;
      }

      return g(n);
    }
  }

  function k(l) {
    (!l.__d && (l.__d = !0) && 1 === u.push(l) || i !== n.debounceRendering) && (i = n.debounceRendering, (n.debounceRendering || t)(_));
  }

  function _() {
    var n, l, t, i, r, o, f;

    for (u.sort(function (n, l) {
      return l.__v.__b - n.__v.__b;
    }); n = u.pop();) n.__d && (t = void 0, i = void 0, o = (r = (l = n).__v).__e, (f = l.__P) && (t = [], i = $(f, r, s({}, r), l.__n, void 0 !== f.ownerSVGElement, null, t, null == o ? w(r) : o), j(t, r), i != o && g(r)));
  }

  function b(n, l, u, t, i, r, o, c, s) {
    var h,
        v,
        p,
        d,
        y,
        m,
        g,
        k = u && u.__k || e,
        _ = k.length;
    if (c == f && (c = null != r ? r[0] : _ ? w(u, 0) : null), h = 0, l.__k = x(l.__k, function (u) {
      if (null != u) {
        if (u.__p = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
          if ((p = k[v]) && u.key == p.key && u.type === p.type) {
            k[v] = void 0;
            break;
          }

          p = null;
        }

        if (d = $(n, u, p = p || f, t, i, r, o, c, s), (v = u.ref) && p.ref != v && (g || (g = [])).push(v, u.__c || d, u), null != d) {
          if (null == m && (m = d), null != u.l) d = u.l, u.l = null;else if (r == p || d != c || null == d.parentNode) {
            n: if (null == c || c.parentNode !== n) n.appendChild(d);else {
              for (y = c, v = 0; (y = y.nextSibling) && v < _; v += 2) if (y == d) break n;

              n.insertBefore(d, c);
            }

            "option" == l.type && (n.value = "");
          }
          c = d.nextSibling, "function" == typeof l.type && (l.l = d);
        }
      }

      return h++, u;
    }), l.__e = m, null != r && "function" != typeof l.type) for (h = r.length; h--;) null != r[h] && a(r[h]);

    for (h = _; h--;) null != k[h] && D(k[h], k[h]);

    if (g) for (h = 0; h < g.length; h++) A(g[h], g[++h], g[++h]);
  }

  function x(n, l, u) {
    if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var t = 0; t < n.length; t++) x(n[t], l, u);else u.push(l ? l(y(n)) : n);
    return u;
  }

  function C(n, l, u, t, i) {
    var r;

    for (r in u) r in l || N(n, r, null, u[r], t);

    for (r in l) i && "function" != typeof l[r] || "value" === r || "checked" === r || u[r] === l[r] || N(n, r, l[r], u[r], t);
  }

  function P(n, l, u) {
    "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
  }

  function N(n, l, u, t, i) {
    var r, o, f, e, c;
    if ("key" === (l = i ? "className" === l ? "class" : l : "class" === l ? "className" : l) || "children" === l) ;else if ("style" === l) {
      if (r = n.style, "string" == typeof u) r.cssText = u;else {
        if ("string" == typeof t && (r.cssText = "", t = null), t) for (o in t) u && o in u || P(r, o, "");
        if (u) for (f in u) t && u[f] === t[f] || P(r, f, u[f]);
      }
    } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, T, e), (n.u || (n.u = {}))[l] = u) : n.removeEventListener(l, T, e)) : "list" !== l && "tagName" !== l && "form" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
  }

  function T(l) {
    return this.u[l.type](n.event ? n.event(l) : l);
  }

  function $(l, u, t, i, r, o, f, e, c) {
    var a,
        h,
        v,
        p,
        y,
        w,
        g,
        k,
        _,
        C,
        P = u.type;

    if (void 0 !== u.constructor) return null;
    (a = n.__b) && a(u);

    try {
      n: if ("function" == typeof P) {
        if (k = u.props, _ = (a = P.contextType) && i[a.__c], C = a ? _ ? _.props.value : a.__p : i, t.__c ? g = (h = u.__c = t.__c).__p = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(k, C) : (u.__c = h = new m(k, C), h.constructor = P, h.render = H), _ && _.sub(h), h.props = k, h.state || (h.state = {}), h.context = C, h.__n = i, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && s(h.__s == h.state ? h.__s = s({}, h.__s) : h.__s, P.getDerivedStateFromProps(k, h.__s)), v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && f.push(h);else {
          if (null == P.getDerivedStateFromProps && null == h.t && null != h.componentWillReceiveProps && h.componentWillReceiveProps(k, C), !h.t && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(k, h.__s, C)) {
            for (h.props = k, h.state = h.__s, h.__d = !1, h.__v = u, u.__e = t.__e, u.__k = t.__k, a = 0; a < u.__k.length; a++) u.__k[a] && (u.__k[a].__p = u);

            break n;
          }

          null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, C);
        }
        p = h.props, y = h.state, h.context = C, h.props = k, h.state = h.__s, (a = n.__r) && a(u), h.__d = !1, h.__v = u, h.__P = l, a = h.render(h.props, h.state, h.context), u.__k = x(null != a && a.type == d && null == a.key ? a.props.children : a), null != h.getChildContext && (i = s(s({}, i), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (w = h.getSnapshotBeforeUpdate(p, y)), b(l, u, t, i, r, o, f, e, c), h.base = u.__e, a = h.__h, h.__h = [], a.some(function (n) {
          n.call(h);
        }), v || null == p || null == h.componentDidUpdate || h.componentDidUpdate(p, y, w), g && (h.__E = h.__p = null), h.t = null;
      } else u.__e = z(t.__e, u, t, i, r, o, f, c);

      (a = n.diffed) && a(u);
    } catch (l) {
      n.__e(l, u, t);
    }

    return u.__e;
  }

  function j(l, u) {
    for (var t; t = l.pop();) try {
      t.componentDidMount();
    } catch (l) {
      n.__e(l, t.__v);
    }

    n.__c && n.__c(u);
  }

  function z(n, l, u, t, i, r, o, c) {
    var s,
        a,
        h,
        v,
        p,
        d = u.props,
        y = l.props;
    if (i = "svg" === l.type || i, null == n && null != r) for (s = 0; s < r.length; s++) if (null != (a = r[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
      n = a, r[s] = null;
      break;
    }

    if (null == n) {
      if (null === l.type) return document.createTextNode(y);
      n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), r = null;
    }

    if (null === l.type) null != r && (r[r.indexOf(n)] = null), d !== y && (n.data = y);else if (l !== u) {
      if (null != r && (r = e.slice.call(n.childNodes)), h = (d = u.props || f).dangerouslySetInnerHTML, v = y.dangerouslySetInnerHTML, !c) {
        if (d === f) for (d = {}, p = 0; p < n.attributes.length; p++) d[n.attributes[p].name] = n.attributes[p].value;
        (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || ""));
      }

      C(n, y, d, i, c), l.__k = l.props.children, v || b(n, l, u, t, "foreignObject" !== l.type && i, r, o, f, c), c || ("value" in y && void 0 !== y.value && y.value !== n.value && (n.value = null == y.value ? "" : y.value), "checked" in y && void 0 !== y.checked && y.checked !== n.checked && (n.checked = y.checked));
    }
    return n;
  }

  function A(l, u, t) {
    try {
      "function" == typeof l ? l(u) : l.current = u;
    } catch (l) {
      n.__e(l, t);
    }
  }

  function D(l, u, t) {
    var i, r, o;

    if (n.unmount && n.unmount(l), (i = l.ref) && A(i, null, u), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {
      if (i.componentWillUnmount) try {
        i.componentWillUnmount();
      } catch (l) {
        n.__e(l, u);
      }
      i.base = i.__P = null;
    }

    if (i = l.__k) for (o = 0; o < i.length; o++) i[o] && D(i[o], u, t);
    null != r && a(r);
  }

  function H(n, l, u) {
    return this.constructor(n, u);
  }

  function I(l, u, t) {
    var i, o, c;
    n.__p && n.__p(l, u), o = (i = t === r) ? null : t && t.__k || u.__k, l = h(d, null, [l]), c = [], $(u, i ? u.__k = l : (t || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : o ? null : e.slice.call(u.childNodes), c, t || f, i), j(c, l);
  }

  function L(n, l) {
    I(n, l, r);
  }

  function M(n, l) {
    return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
  }

  function O(n) {
    var l = {},
        u = {
      __c: "__cC" + o++,
      __p: n,
      Consumer: function (n, l) {
        return n.children(l);
      },
      Provider: function (n) {
        var t,
            i = this;
        return this.getChildContext || (t = [], this.getChildContext = function () {
          return l[u.__c] = i, l;
        }, this.shouldComponentUpdate = function (l) {
          n.value !== l.value && t.some(function (n) {
            n.__P && (n.context = l.value, k(n));
          });
        }, this.sub = function (n) {
          t.push(n);
          var l = n.componentWillUnmount;

          n.componentWillUnmount = function () {
            t.splice(t.indexOf(n), 1), l && l.call(n);
          };
        }), n.children;
      }
    };
    return u.Consumer.contextType = u, u;
  }

  n = {}, l = function (n) {
    return null != n && void 0 === n.constructor;
  }, m.prototype.setState = function (n, l) {
    var u = this.__s !== this.state && this.__s || (this.__s = s({}, this.state));
    ("function" != typeof n || (n = n(u, this.props))) && s(u, n), null != n && this.__v && (this.t = !1, l && this.__h.push(l), k(this));
  }, m.prototype.forceUpdate = function (n) {
    this.__v && (this.t = !0, n && this.__h.push(n), k(this));
  }, m.prototype.render = d, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = n.debounceRendering, n.__e = function (n, l, u) {
    for (var t; l = l.__p;) if ((t = l.__c) && !t.__p) try {
      if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(n));else {
        if (null == t.componentDidCatch) continue;
        t.componentDidCatch(n);
      }
      return k(t.__E = t);
    } catch (l) {
      n = l;
    }

    throw n;
  }, r = f, o = 0;

  var preact_module = /*#__PURE__*/Object.freeze({
    __proto__: null,
    render: I,
    hydrate: L,
    createElement: h,
    h: h,
    Fragment: d,
    createRef: p,
    get isValidElement () { return l; },
    Component: m,
    cloneElement: M,
    createContext: O,
    toChildArray: x,
    _unmount: D,
    get options () { return n; }
  });

  var App = class extends preact_module.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedColorIndex: 0
      };
    }

    componentDidMount() {
      if (this.props.onMount) {
        this.props.onMount(this);
      }

      window.onMount();
    }

    componentDidUpdate() {
      if (this.props.onUpdate) {
        this.props.onUpdate(this);
      }
    }

    handleColorClick(colorIndex) {
      this.setState({
        selectedColorIndex: colorIndex
      });
    }

    render() {
      var colors = this.props.colors;
      var handleColorClick = this.handleColorClick;
      var selectedColorIndex = this.state.selectedColorIndex;
      var selectedColor = colors[selectedColorIndex];
      var self = this;

      function renderColor(color, i) {
        var style = {
          backgroundColor: color.hex
        };
        var className = "color";

        if (selectedColorIndex === i) {
          className += " selected";
        }

        return preact_module.h("li", {
          className: className,
          style: style,
          onClick: handleColorClick.bind(self, i)
        }, color.name);
      }

      function renderColors(colors) {
        if (colors.length) {
          return preact_module.h("ul", null, colors.map(function (color, i) {
            return renderColor(color, i);
          }));
        } else {
          return preact_module.h("div", null, "No colors!");
        }
      }

      return preact_module.h("div", {
        class: "colors"
      }, preact_module.h("h1", null, "Choose your favorite color:"), preact_module.h("div", {
        class: "colors"
      }, renderColors(colors)), preact_module.h("div", null, "You chose:", preact_module.h("div", {
        class: "chosen-color"
      }, selectedColor.name)));
    }

  };

  const mountNode = document.getElementById("mount");

  if (window.colors) {
    preact_module.render(preact_module.h(App, {
      colors: window.colors
    }), mountNode, mountNode.firstChild);
    console.log("Re-rendering on client completed");
  }

  window.addBench("preact", function (el, colors) {
    var widget;
    var currentDone;
    var selectedColorIndex = 0;

    function onMount(instance) {
      widget = instance;
    }

    function onUpdate() {
      currentDone();
    }

    preact_module.render(preact_module.h(App, {
      colors: colors,
      onMount: onMount,
      onUpdate: onUpdate
    }), el);
    return function (done) {
      widget.setState({
        selectedColorIndex: ++selectedColorIndex % colors.length
      });
      currentDone = done;
    };
  });

  var client = {

  };

  return client;

}());
