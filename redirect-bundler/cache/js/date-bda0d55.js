var e = function() {},
  t = {},
  n = [],
  o = [];
function r(t, r) {
  var i,
    l,
    a,
    s,
    p = arguments,
    u = o;
  for (s = arguments.length; s-- > 2; ) n.push(p[s]);
  for (
    r &&
    null != r.children &&
    (n.length || n.push(r.children), delete r.children);
    n.length;

  )
    if ((l = n.pop()) && void 0 !== l.pop)
      for (s = l.length; s--; ) n.push(l[s]);
    else
      "boolean" == typeof l && (l = null),
        (a = "function" != typeof t) &&
          (null == l
            ? (l = "")
            : "number" == typeof l
            ? (l = String(l))
            : "string" != typeof l && (a = !1)),
        a && i ? (u[u.length - 1] += l) : u === o ? (u = [l]) : u.push(l),
        (i = a);
  var c = new e();
  return (
    (c.nodeName = t),
    (c.children = u),
    (c.attributes = null == r ? void 0 : r),
    (c.key = null == r ? void 0 : r.key),
    c
  );
}
function i(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function l(e, t) {
  null != e && ("function" == typeof e ? e(t) : (e.current = t));
}
var a =
    "function" == typeof Promise
      ? Promise.resolve().then.bind(Promise.resolve())
      : setTimeout,
  s = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
  p = [];
function u(e) {
  !e._dirty && (e._dirty = !0) && 1 == p.push(e) && a(c);
}
function c() {
  for (var e; (e = p.pop()); ) e._dirty && U(e);
}
function f(e, t) {
  return (
    e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
  );
}
function d(e) {
  var t = i({}, e.attributes);
  t.children = e.children;
  var n = e.nodeName.defaultProps;
  if (void 0 !== n) for (var o in n) void 0 === t[o] && (t[o] = n[o]);
  return t;
}
function v(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function h(e, t, n, o, r) {
  if (("className" === t && (t = "class"), "key" === t));
  else if ("ref" === t) l(n, null), l(o, e);
  else if ("class" !== t || r)
    if ("style" === t) {
      if (
        ((o && "string" != typeof o && "string" != typeof n) ||
          (e.style.cssText = o || ""),
        o && "object" == typeof o)
      ) {
        if ("string" != typeof n) for (var i in n) i in o || (e.style[i] = "");
        for (var i in o)
          e.style[i] =
            "number" == typeof o[i] && !1 === s.test(i) ? o[i] + "px" : o[i];
      }
    } else if ("dangerouslySetInnerHTML" === t)
      o && (e.innerHTML = o.__html || "");
    else if ("o" == t[0] && "n" == t[1]) {
      var a = t !== (t = t.replace(/Capture$/, ""));
      (t = t.toLowerCase().substring(2)),
        o ? n || e.addEventListener(t, m, a) : e.removeEventListener(t, m, a),
        ((e._listeners || (e._listeners = {}))[t] = o);
    } else if ("list" !== t && "type" !== t && !r && t in e) {
      try {
        e[t] = null == o ? "" : o;
      } catch (e) {}
      (null != o && !1 !== o) || "spellcheck" == t || e.removeAttribute(t);
    } else {
      var p = r && t !== (t = t.replace(/^xlink:?/, ""));
      null == o || !1 === o
        ? p
          ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase())
          : e.removeAttribute(t)
        : "function" != typeof o &&
          (p
            ? e.setAttributeNS(
                "http://www.w3.org/1999/xlink",
                t.toLowerCase(),
                o
              )
            : e.setAttribute(t, o));
    }
  else e.className = o || "";
}
function m(e) {
  return this._listeners[e.type](e);
}
var _ = [],
  y = 0,
  g = !1,
  b = !1;
function C() {
  for (var e; (e = _.shift()); ) e.componentDidMount && e.componentDidMount();
}
function x(e, t, n, o, r, i) {
  y++ ||
    ((g = null != r && void 0 !== r.ownerSVGElement),
    (b = null != e && !("__preactattr_" in e)));
  var l = (function e(t, n, o, r, i) {
    var l = t,
      a = g;
    if (
      ((null != n && "boolean" != typeof n) || (n = ""),
      "string" == typeof n || "number" == typeof n)
    )
      return (
        t && void 0 !== t.splitText && t.parentNode && (!t._component || i)
          ? t.nodeValue != n && (t.nodeValue = n)
          : ((l = document.createTextNode(n)),
            t && (t.parentNode && t.parentNode.replaceChild(l, t), N(t, !0))),
        (l.__preactattr_ = !0),
        l
      );
    var s,
      p,
      u = n.nodeName;
    if ("function" == typeof u)
      return (function(e, t, n, o) {
        for (
          var r = e && e._component,
            i = r,
            l = e,
            a = r && e._componentConstructor === t.nodeName,
            s = a,
            p = d(t);
          r && !s && (r = r._parentComponent);

        )
          s = r.constructor === t.nodeName;
        return (
          r && s && (!o || r._component)
            ? (B(r, p, 3, n, o), (e = r.base))
            : (i && !a && (L(i), (e = l = null)),
              (r = S(t.nodeName, p, n)),
              e && !r.nextBase && ((r.nextBase = e), (l = null)),
              B(r, p, 1, n, o),
              (e = r.base),
              l && e !== l && ((l._component = null), N(l, !1))),
          e
        );
      })(t, n, o, r);
    if (
      ((g = "svg" === u || ("foreignObject" !== u && g)),
      (u = String(u)),
      (!t || !f(t, u)) &&
        ((s = u),
        ((p = g
          ? document.createElementNS("http://www.w3.org/2000/svg", s)
          : document.createElement(s)).normalizedNodeName = s),
        (l = p),
        t))
    ) {
      for (; t.firstChild; ) l.appendChild(t.firstChild);
      t.parentNode && t.parentNode.replaceChild(l, t), N(t, !0);
    }
    var c = l.firstChild,
      m = l.__preactattr_,
      _ = n.children;
    if (null == m) {
      m = l.__preactattr_ = {};
      for (var y = l.attributes, C = y.length; C--; ) m[y[C].name] = y[C].value;
    }
    return (
      !b &&
      _ &&
      1 === _.length &&
      "string" == typeof _[0] &&
      null != c &&
      void 0 !== c.splitText &&
      null == c.nextSibling
        ? c.nodeValue != _[0] && (c.nodeValue = _[0])
        : ((_ && _.length) || null != c) &&
          (function(t, n, o, r, i) {
            var l,
              a,
              s,
              p,
              u,
              c,
              d,
              h,
              m = t.childNodes,
              _ = [],
              y = {},
              g = 0,
              b = 0,
              C = m.length,
              x = 0,
              w = n ? n.length : 0;
            if (0 !== C)
              for (var k = 0; k < C; k++) {
                var S = m[k],
                  P = S.__preactattr_;
                null !=
                (B =
                  w && P ? (S._component ? S._component.__key : P.key) : null)
                  ? (g++, (y[B] = S))
                  : (P ||
                      (void 0 !== S.splitText
                        ? !i || S.nodeValue.trim()
                        : i)) &&
                    (_[x++] = S);
              }
            if (0 !== w)
              for (k = 0; k < w; k++) {
                var B;
                if (((u = null), null != (B = (p = n[k]).key)))
                  g && void 0 !== y[B] && ((u = y[B]), (y[B] = void 0), g--);
                else if (b < x)
                  for (l = b; l < x; l++)
                    if (
                      void 0 !== _[l] &&
                      ((c = a = _[l]),
                      (h = i),
                      "string" == typeof (d = p) || "number" == typeof d
                        ? void 0 !== c.splitText
                        : "string" == typeof d.nodeName
                        ? !c._componentConstructor && f(c, d.nodeName)
                        : h || c._componentConstructor === d.nodeName)
                    ) {
                      (u = a),
                        (_[l] = void 0),
                        l === x - 1 && x--,
                        l === b && b++;
                      break;
                    }
                (u = e(u, p, o, r)),
                  (s = m[k]),
                  u &&
                    u !== t &&
                    u !== s &&
                    (null == s
                      ? t.appendChild(u)
                      : u === s.nextSibling
                      ? v(s)
                      : t.insertBefore(u, s));
              }
            if (g) for (var k in y) void 0 !== y[k] && N(y[k], !1);
            for (; b <= x; ) void 0 !== (u = _[x--]) && N(u, !1);
          })(l, _, o, r, b || null != m.dangerouslySetInnerHTML),
      (function(e, t, n) {
        var o;
        for (o in n)
          (t && null != t[o]) ||
            null == n[o] ||
            h(e, o, n[o], (n[o] = void 0), g);
        for (o in t)
          "children" === o ||
            "innerHTML" === o ||
            (o in n &&
              t[o] === ("value" === o || "checked" === o ? e[o] : n[o])) ||
            h(e, o, n[o], (n[o] = t[o]), g);
      })(l, n.attributes, m),
      (g = a),
      l
    );
  })(e, t, n, o, i);
  return (
    r && l.parentNode !== r && r.appendChild(l), --y || ((b = !1), i || C()), l
  );
}
function N(e, t) {
  var n = e._component;
  n
    ? L(n)
    : (null != e.__preactattr_ && l(e.__preactattr_.ref, null),
      (!1 !== t && null != e.__preactattr_) || v(e),
      w(e));
}
function w(e) {
  for (e = e.lastChild; e; ) {
    var t = e.previousSibling;
    N(e, !0), (e = t);
  }
}
var k = [];
function S(e, t, n) {
  var o,
    r = k.length;
  for (
    e.prototype && e.prototype.render
      ? ((o = new e(t, n)), T.call(o, t, n))
      : (((o = new T(t, n)).constructor = e), (o.render = P));
    r--;

  )
    if (k[r].constructor === e)
      return (o.nextBase = k[r].nextBase), k.splice(r, 1), o;
  return o;
}
function P(e, t, n) {
  return this.constructor(e, n);
}
function B(e, n, o, r, i) {
  e._disable ||
    ((e._disable = !0),
    (e.__ref = n.ref),
    (e.__key = n.key),
    delete n.ref,
    delete n.key,
    void 0 === e.constructor.getDerivedStateFromProps &&
      (!e.base || i
        ? e.componentWillMount && e.componentWillMount()
        : e.componentWillReceiveProps && e.componentWillReceiveProps(n, r)),
    r &&
      r !== e.context &&
      (e.prevContext || (e.prevContext = e.context), (e.context = r)),
    e.prevProps || (e.prevProps = e.props),
    (e.props = n),
    (e._disable = !1),
    0 !== o &&
      (1 !== o && !1 === t.syncComponentUpdates && e.base ? u(e) : U(e, 1, i)),
    l(e.__ref, e));
}
function U(e, t, n, o) {
  if (!e._disable) {
    var r,
      l,
      a,
      s = e.props,
      p = e.state,
      u = e.context,
      c = e.prevProps || s,
      f = e.prevState || p,
      v = e.prevContext || u,
      h = e.base,
      m = e.nextBase,
      g = h || m,
      b = e._component,
      w = !1,
      k = v;
    if (
      (e.constructor.getDerivedStateFromProps &&
        ((p = i(i({}, p), e.constructor.getDerivedStateFromProps(s, p))),
        (e.state = p)),
      h &&
        ((e.props = c),
        (e.state = f),
        (e.context = v),
        2 !== t &&
        e.shouldComponentUpdate &&
        !1 === e.shouldComponentUpdate(s, p, u)
          ? (w = !0)
          : e.componentWillUpdate && e.componentWillUpdate(s, p, u),
        (e.props = s),
        (e.state = p),
        (e.context = u)),
      (e.prevProps = e.prevState = e.prevContext = e.nextBase = null),
      (e._dirty = !1),
      !w)
    ) {
      (r = e.render(s, p, u)),
        e.getChildContext && (u = i(i({}, u), e.getChildContext())),
        h && e.getSnapshotBeforeUpdate && (k = e.getSnapshotBeforeUpdate(c, f));
      var P,
        T,
        M = r && r.nodeName;
      if ("function" == typeof M) {
        var W = d(r);
        (l = b) && l.constructor === M && W.key == l.__key
          ? B(l, W, 1, u, !1)
          : ((P = l),
            (e._component = l = S(M, W, u)),
            (l.nextBase = l.nextBase || m),
            (l._parentComponent = e),
            B(l, W, 0, u, !1),
            U(l, 1, n, !0)),
          (T = l.base);
      } else
        (a = g),
          (P = b) && (a = e._component = null),
          (g || 1 === t) &&
            (a && (a._component = null),
            (T = x(a, r, u, n || !h, g && g.parentNode, !0)));
      if (g && T !== g && l !== b) {
        var D = g.parentNode;
        D &&
          T !== D &&
          (D.replaceChild(T, g), P || ((g._component = null), N(g, !1)));
      }
      if ((P && L(P), (e.base = T), T && !o)) {
        for (var E = e, V = e; (V = V._parentComponent); ) (E = V).base = T;
        (T._component = E), (T._componentConstructor = E.constructor);
      }
    }
    for (
      !h || n
        ? _.push(e)
        : w || (e.componentDidUpdate && e.componentDidUpdate(c, f, k));
      e._renderCallbacks.length;

    )
      e._renderCallbacks.pop().call(e);
    y || o || C();
  }
}
function L(e) {
  var t = e.base;
  (e._disable = !0),
    e.componentWillUnmount && e.componentWillUnmount(),
    (e.base = null);
  var n = e._component;
  n
    ? L(n)
    : t &&
      (null != t.__preactattr_ && l(t.__preactattr_.ref, null),
      (e.nextBase = t),
      v(t),
      k.push(e),
      w(t)),
    l(e.__ref, null);
}
function T(e, t) {
  (this._dirty = !0),
    (this.context = t),
    (this.props = e),
    (this.state = this.state || {}),
    (this._renderCallbacks = []);
}
i(T.prototype, {
  setState: function(e, t) {
    this.prevState || (this.prevState = this.state),
      (this.state = i(
        i({}, this.state),
        "function" == typeof e ? e(this.state, this.props) : e
      )),
      t && this._renderCallbacks.push(t),
      u(this);
  },
  forceUpdate: function(e) {
    e && this._renderCallbacks.push(e), U(this, 2);
  },
  render: function() {}
});
var M = function(e, t, n, o) {
    for (var r = 1; r < t.length; r++) {
      var i = t[r],
        l = "number" == typeof i ? n[i] : i,
        a = t[++r];
      1 === a
        ? (o[0] = l)
        : 3 === a
        ? (o[1] = Object.assign(o[1] || {}, l))
        : 5 === a
        ? ((o[1] = o[1] || {})[t[++r]] = l)
        : 6 === a
        ? (o[1][t[++r]] += l + "")
        : o.push(a ? e.apply(null, M(e, l, n, ["", null])) : l);
    }
    return o;
  },
  W = function(e) {
    for (
      var t,
        n,
        o = 1,
        r = "",
        i = "",
        l = [0],
        a = function(e) {
          1 === o && (e || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, "")))
            ? l.push(e || r, 0)
            : 3 === o && (e || r)
            ? (l.push(e || r, 1), (o = 2))
            : 2 === o && "..." === r && e
            ? l.push(e, 3)
            : 2 === o && r && !e
            ? l.push(!0, 5, r)
            : o >= 5 &&
              ((r || (!e && 5 === o)) && (l.push(r, o, n), (o = 6)),
              e && (l.push(e, o, n), (o = 6))),
            (r = "");
        },
        s = 0;
      s < e.length;
      s++
    ) {
      s && (1 === o && a(), a(s));
      for (var p = 0; p < e[s].length; p++)
        (t = e[s][p]),
          1 === o
            ? "<" === t
              ? (a(), (l = [l]), (o = 3))
              : (r += t)
            : 4 === o
            ? "--" === r && ">" === t
              ? ((o = 1), (r = ""))
              : (r = t + r[0])
            : i
            ? t === i
              ? (i = "")
              : (r += t)
            : '"' === t || "'" === t
            ? (i = t)
            : ">" === t
            ? (a(), (o = 1))
            : o &&
              ("=" === t
                ? ((o = 5), (n = r), (r = ""))
                : "/" === t && (o < 5 || ">" === e[s][p + 1])
                ? (a(),
                  3 === o && (l = l[0]),
                  (o = l),
                  (l = l[0]).push(o, 2),
                  (o = 0))
                : " " === t || "\t" === t || "\n" === t || "\r" === t
                ? (a(), (o = 2))
                : (r += t)),
          3 === o && "!--" === r && ((o = 4), (l = l[0]));
    }
    return a(), l;
  },
  D = "function" == typeof Map,
  E = D ? new Map() : {},
  V = D
    ? function(e) {
        var t = E.get(e);
        return t || E.set(e, (t = W(e))), t;
      }
    : function(e) {
        for (var t = "", n = 0; n < e.length; n++)
          t += e[n].length + "-" + e[n];
        return E[t] || (E[t] = W(e));
      };
var H = function(e) {
  var t = M(this, V(e), arguments, []);
  return t.length > 1 ? t : t[0];
}.bind(r);

function DateComponent({ dt }) {
  return H`
    <div>
      <time datetime=${dt}>${dt.toISOString()}</time>
    </div>
  `;
}

export default DateComponent;
