(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) t(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && t(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function t(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = i(r);
    fetch(r.href, s);
  }
})();
const kp = '';
class su {
  constructor(e = document.body) {
    (this.body = e),
      (this.bodyClassList = this.body.classList),
      (this.ua = window.navigator.userAgent.toLowerCase()),
      (this.data = { browser: '', os: '', device: '', iphone: '' }),
      this.checkBrowser(),
      this.checkOs(),
      this.checkDevice(),
      this.checkiPhone();
  }
  checkBrowser() {
    this.ua.indexOf('edge') !== -1 || this.ua.indexOf('edga') !== -1 || this.ua.indexOf('edgios') !== -1
      ? (this.data.browser = 'edge')
      : this.ua.indexOf('opera') !== -1 || this.ua.indexOf('opr') !== -1
      ? (this.data.browser = 'opera')
      : this.ua.indexOf('samsungbrowser') !== -1
      ? (this.data.browser = 'samsung')
      : this.ua.indexOf('ucbrowser') !== -1
      ? (this.data.browser = 'uc')
      : this.ua.indexOf('chrome') !== -1 || this.ua.indexOf('crios') !== -1
      ? (this.data.browser = 'chrome')
      : this.ua.indexOf('firefox') !== -1 || this.ua.indexOf('fxios') !== -1
      ? (this.data.browser = 'firefox')
      : this.ua.indexOf('safari') !== -1
      ? (this.data.browser = 'safari')
      : this.ua.indexOf('msie') !== -1 || this.ua.indexOf('trident') !== -1
      ? ((this.data.browser = 'ie'), alert('このブラウザは現在サポートされておりません。'))
      : (this.data.browser = ''),
      this.data.browser != '' && this.bodyClassList.add(this.data.browser);
  }
  checkOs() {
    this.ua.indexOf('windows nt') !== -1
      ? (this.data.os = 'windows')
      : this.ua.indexOf('android') !== -1
      ? (this.data.os = 'android')
      : this.ua.indexOf('iphone') !== -1 || this.ua.indexOf('ipad') !== -1
      ? (this.data.os = 'ios')
      : this.ua.indexOf('mac os x') !== -1
      ? (this.data.os = 'macos')
      : (this.data.os = ''),
      this.data.os != '' && this.bodyClassList.add(this.data.os);
  }
  checkDevice() {
    this.ua.indexOf('iphone') !== -1 || (this.ua.indexOf('android') !== -1 && this.ua.indexOf('Mobile') > 0)
      ? (this.data.device = 'mobile')
      : this.ua.indexOf('ipad') !== -1 || this.ua.indexOf('android') !== -1
      ? (this.data.device = 'tablet')
      : this.ua.indexOf('ipad') > -1 || (this.ua.indexOf('macintosh') > -1 && 'ontouchend' in document)
      ? (this.data.device = 'tablet')
      : (this.data.device = 'pc'),
      this.data.device != '' && this.bodyClassList.add(this.data.device);
  }
  checkiPhone() {
    this.ua.indexOf('iphone') !== -1 ? (this.data.iphone = 'iphone') : (this.data.iphone = ''),
      this.data.iphone != '' && this.bodyClassList.add(this.data.iphone);
  }
}
function da(n, e) {
  const i = n * 0.01,
    t = e * 0.01,
    r = n > e ? n : e,
    s = n > e ? e : n;
  document.documentElement.style.setProperty('--vw', i + 'px'),
    document.documentElement.style.setProperty('--vh', t + 'px'),
    document.documentElement.style.setProperty('--longer', r + 'px'),
    document.documentElement.style.setProperty('--shorter', s + 'px');
}
function hi(n) {
  if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return n;
}
function fa(n, e) {
  (n.prototype = Object.create(e.prototype)), (n.prototype.constructor = n), (n.__proto__ = e);
}
/*!
 * GSAP 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var St = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
  yr = { duration: 0.5, overwrite: !1, delay: 0 },
  kn,
  Ye,
  ve,
  It = 1e8,
  ne = 1 / It,
  Ln = Math.PI * 2,
  nu = Ln / 4,
  ou = 0,
  ha = Math.sqrt,
  au = Math.cos,
  lu = Math.sin,
  ze = function (e) {
    return typeof e == 'string';
  },
  _e = function (e) {
    return typeof e == 'function';
  },
  pi = function (e) {
    return typeof e == 'number';
  },
  Dn = function (e) {
    return typeof e > 'u';
  },
  ii = function (e) {
    return typeof e == 'object';
  },
  ft = function (e) {
    return e !== !1;
  },
  In = function () {
    return typeof window < 'u';
  },
  Ps = function (e) {
    return _e(e) || ze(e);
  },
  pa = (typeof ArrayBuffer == 'function' && ArrayBuffer.isView) || function () {},
  Xe = Array.isArray,
  zn = /(?:-?\.?\d|\.)+/gi,
  ma = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Rn = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  ga = /[+-]=-?[.\d]+/,
  va = /[^,'"\[\]\s]+/gi,
  cu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  de,
  zt,
  Nn,
  Bn,
  Tt = {},
  As = {},
  _a,
  ya = function (e) {
    return (As = Ki(e, Tt)) && mt;
  },
  Fn = function (e, i) {},
  Xr = function (e, i) {
    return !i && void 0;
  },
  wa = function (e, i) {
    return (e && (Tt[e] = i) && As && (As[e] = i)) || Tt;
  },
  jr = function () {
    return 0;
  },
  uu = { suppressEvents: !0, isStart: !0, kill: !1 },
  ks = { suppressEvents: !0, kill: !1 },
  du = { suppressEvents: !0 },
  Wn = {},
  xi = [],
  Vn = {},
  ba,
  Et = {},
  qn = {},
  xa = 30,
  Ls = [],
  $n = '',
  Hn = function (e) {
    var i = e[0],
      t,
      r;
    if ((ii(i) || _e(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
      for (r = Ls.length; r-- && !Ls[r].targetTest(i); );
      t = Ls[r];
    }
    for (r = e.length; r--; ) (e[r] && (e[r]._gsap || (e[r]._gsap = new Qa(e[r], t)))) || e.splice(r, 1);
    return e;
  },
  Ui = function (e) {
    return e._gsap || Hn(Bt(e))[0]._gsap;
  },
  Sa = function (e, i, t) {
    return (t = e[i]) && _e(t) ? e[i]() : (Dn(t) && e.getAttribute && e.getAttribute(i)) || t;
  },
  ht = function (e, i) {
    return (e = e.split(',')).forEach(i) || e;
  },
  xe = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Re = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  br = function (e, i) {
    var t = i.charAt(0),
      r = parseFloat(i.substr(2));
    return (e = parseFloat(e)), t === '+' ? e + r : t === '-' ? e - r : t === '*' ? e * r : e / r;
  },
  fu = function (e, i) {
    for (var t = i.length, r = 0; e.indexOf(i[r]) < 0 && ++r < t; );
    return r < t;
  },
  Ds = function () {
    var e = xi.length,
      i = xi.slice(0),
      t,
      r;
    for (Vn = {}, xi.length = 0, t = 0; t < e; t++)
      (r = i[t]), r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  Ta = function (e, i, t, r) {
    xi.length && !Ye && Ds(),
      e.render(i, t, r || (Ye && i < 0 && (e._initted || e._startAt))),
      xi.length && !Ye && Ds();
  },
  Ea = function (e) {
    var i = parseFloat(e);
    return (i || i === 0) && (e + '').match(va).length < 2 ? i : ze(e) ? e.trim() : e;
  },
  Ca = function (e) {
    return e;
  },
  Rt = function (e, i) {
    for (var t in i) t in e || (e[t] = i[t]);
    return e;
  },
  hu = function (e) {
    return function (i, t) {
      for (var r in t) r in i || (r === 'duration' && e) || r === 'ease' || (i[r] = t[r]);
    };
  },
  Ki = function (e, i) {
    for (var t in i) e[t] = i[t];
    return e;
  },
  Ma = function n(e, i) {
    for (var t in i)
      t !== '__proto__' &&
        t !== 'constructor' &&
        t !== 'prototype' &&
        (e[t] = ii(i[t]) ? n(e[t] || (e[t] = {}), i[t]) : i[t]);
    return e;
  },
  Is = function (e, i) {
    var t = {},
      r;
    for (r in e) r in i || (t[r] = e[r]);
    return t;
  },
  Ur = function (e) {
    var i = e.parent || de,
      t = e.keyframes ? hu(Xe(e.keyframes)) : Rt;
    if (ft(e.inherit)) for (; i; ) t(e, i.vars.defaults), (i = i.parent || i._dp);
    return e;
  },
  pu = function (e, i) {
    for (var t = e.length, r = t === i.length; r && t-- && e[t] === i[t]; );
    return t < 0;
  },
  Oa = function (e, i, t, r, s) {
    t === void 0 && (t = '_first'), r === void 0 && (r = '_last');
    var o = e[r],
      a;
    if (s) for (a = i[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((i._next = o._next), (o._next = i)) : ((i._next = e[t]), (e[t] = i)),
      i._next ? (i._next._prev = i) : (e[r] = i),
      (i._prev = o),
      (i.parent = i._dp = e),
      i
    );
  },
  zs = function (e, i, t, r) {
    t === void 0 && (t = '_first'), r === void 0 && (r = '_last');
    var s = i._prev,
      o = i._next;
    s ? (s._next = o) : e[t] === i && (e[t] = o),
      o ? (o._prev = s) : e[r] === i && (e[r] = s),
      (i._next = i._prev = i.parent = null);
  },
  Si = function (e, i) {
    e.parent && (!i || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), (e._act = 0);
  },
  Qi = function (e, i) {
    if (e && (!i || i._end > e._dur || i._start < 0)) for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
    return e;
  },
  mu = function (e) {
    for (var i = e.parent; i && i.parent; ) (i._dirty = 1), i.totalDuration(), (i = i.parent);
    return e;
  },
  Gn = function (e, i, t, r) {
    return (
      e._startAt &&
      (Ye ? e._startAt.revert(ks) : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(i, !0, r))
    );
  },
  gu = function n(e) {
    return !e || (e._ts && n(e.parent));
  },
  Pa = function (e) {
    return e._repeat ? xr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  xr = function (e, i) {
    var t = Math.floor((e /= i));
    return e && t === e ? t - 1 : t;
  },
  Rs = function (e, i) {
    return (e - i._start) * i._ts + (i._ts >= 0 ? 0 : i._dirty ? i.totalDuration() : i._tDur);
  },
  Ns = function (e) {
    return (e._end = Re(e._start + (e._tDur / Math.abs(e._ts || e._rts || ne) || 0)));
  },
  Bs = function (e, i) {
    var t = e._dp;
    return (
      t &&
        t.smoothChildTiming &&
        e._ts &&
        ((e._start = Re(t._time - (e._ts > 0 ? i / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - i) / -e._ts))),
        Ns(e),
        t._dirty || Qi(t, e)),
      e
    );
  },
  Aa = function (e, i) {
    var t;
    if (
      ((i._time || (!i._dur && i._initted) || (i._start < e._time && (i._dur || !i.add))) &&
        ((t = Rs(e.rawTime(), i)), (!i._dur || Qr(0, i.totalDuration(), t) - i._tTime > ne) && i.render(t, !0)),
      Qi(e, i)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration()) for (t = e; t._dp; ) t.rawTime() >= 0 && t.totalTime(t._tTime), (t = t._dp);
      e._zTime = -ne;
    }
  },
  ri = function (e, i, t, r) {
    return (
      i.parent && Si(i),
      (i._start = Re((pi(t) ? t : t || e !== de ? Nt(e, t, i) : e._time) + i._delay)),
      (i._end = Re(i._start + (i.totalDuration() / Math.abs(i.timeScale()) || 0))),
      Oa(e, i, '_first', '_last', e._sort ? '_start' : 0),
      Yn(i) || (e._recent = i),
      r || Aa(e, i),
      e._ts < 0 && Bs(e, e._tTime),
      e
    );
  },
  ka = function (e, i) {
    return (Tt.ScrollTrigger || Fn('scrollTrigger', i)) && Tt.ScrollTrigger.create(i, e);
  },
  La = function (e, i, t, r, s) {
    if ((to(e, i, s), !e._initted)) return 1;
    if (!t && e._pt && !Ye && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && ba !== Mt.frame)
      return xi.push(e), (e._lazy = [s, r]), 1;
  },
  vu = function n(e) {
    var i = e.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || n(i));
  },
  Yn = function (e) {
    var i = e.data;
    return i === 'isFromStart' || i === 'isStart';
  },
  _u = function (e, i, t, r) {
    var s = e.ratio,
      o =
        i < 0 || (!i && ((!e._start && vu(e) && !(!e._initted && Yn(e))) || ((e._ts < 0 || e._dp._ts < 0) && !Yn(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      c,
      u,
      f;
    if (
      (a &&
        e._repeat &&
        ((l = Qr(0, e._tDur, i)),
        (u = xr(l, a)),
        e._yoyo && u & 1 && (o = 1 - o),
        u !== xr(e._tTime, a) && ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || Ye || r || e._zTime === ne || (!i && e._zTime))
    ) {
      if (!e._initted && La(e, i, r, t, l)) return;
      for (
        f = e._zTime,
          e._zTime = i || (t ? ne : 0),
          t || (t = i && !f),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next);
      i < 0 && Gn(e, i, t, !0),
        e._onUpdate && !t && Ct(e, 'onUpdate'),
        l && e._repeat && !t && e.parent && Ct(e, 'onRepeat'),
        (i >= e._tDur || i < 0) &&
          e.ratio === o &&
          (o && Si(e, 1), !t && !Ye && (Ct(e, o ? 'onComplete' : 'onReverseComplete', !0), e._prom && e._prom()));
    } else e._zTime || (e._zTime = i);
  },
  yu = function (e, i, t) {
    var r;
    if (t > i)
      for (r = e._first; r && r._start <= t; ) {
        if (r.data === 'isPause' && r._start > i) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= t; ) {
        if (r.data === 'isPause' && r._start < i) return r;
        r = r._prev;
      }
  },
  Sr = function (e, i, t, r) {
    var s = e._repeat,
      o = Re(i) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !r && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : Re(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !r && Bs(e, (e._tTime = e._tDur * a)),
      e.parent && Ns(e),
      t || Qi(e.parent, e),
      e
    );
  },
  Da = function (e) {
    return e instanceof Ze ? Qi(e) : Sr(e, e._dur);
  },
  wu = { _start: 0, endTime: jr, totalDuration: jr },
  Nt = function n(e, i, t) {
    var r = e.labels,
      s = e._recent || wu,
      o = e.duration() >= It ? s.endTime(!1) : e._dur,
      a,
      l,
      c;
    return ze(i) && (isNaN(i) || i in r)
      ? ((l = i.charAt(0)),
        (c = i.substr(-1) === '%'),
        (a = i.indexOf('=')),
        l === '<' || l === '>'
          ? (a >= 0 && (i = i.replace(/=/, '')),
            (l === '<' ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) * (c ? (a < 0 ? s : t).totalDuration() / 100 : 1))
          : a < 0
          ? (i in r || (r[i] = o), r[i])
          : ((l = parseFloat(i.charAt(a - 1) + i.substr(a + 1))),
            c && t && (l = (l / 100) * (Xe(t) ? t[0] : t).totalDuration()),
            a > 1 ? n(e, i.substr(0, a - 1), t) + l : o + l))
      : i == null
      ? o
      : +i;
  },
  Kr = function (e, i, t) {
    var r = pi(i[1]),
      s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      o = i[s],
      a,
      l;
    if ((r && (o.duration = i[1]), (o.parent = t), e)) {
      for (a = o, l = t; l && !('immediateRender' in a); )
        (a = l.vars.defaults || {}), (l = ft(l.vars.inherit) && l.parent);
      (o.immediateRender = ft(a.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = i[s - 1]);
    }
    return new Ce(i[0], o, i[s + 1]);
  },
  Ti = function (e, i) {
    return e || e === 0 ? i(e) : i;
  },
  Qr = function (e, i, t) {
    return t < e ? e : t > i ? i : t;
  },
  je = function (e, i) {
    return !ze(e) || !(i = cu.exec(e)) ? '' : i[1];
  },
  bu = function (e, i, t) {
    return Ti(t, function (r) {
      return Qr(e, i, r);
    });
  },
  Xn = [].slice,
  Ia = function (e, i) {
    return (
      e && ii(e) && 'length' in e && ((!i && !e.length) || (e.length - 1 in e && ii(e[0]))) && !e.nodeType && e !== zt
    );
  },
  xu = function (e, i, t) {
    return (
      t === void 0 && (t = []),
      e.forEach(function (r) {
        var s;
        return (ze(r) && !i) || Ia(r, 1) ? (s = t).push.apply(s, Bt(r)) : t.push(r);
      }) || t
    );
  },
  Bt = function (e, i, t) {
    return ve && !i && ve.selector
      ? ve.selector(e)
      : ze(e) && !t && (Nn || !Er())
      ? Xn.call((i || Bn).querySelectorAll(e), 0)
      : Xe(e)
      ? xu(e, t)
      : Ia(e)
      ? Xn.call(e, 0)
      : e
      ? [e]
      : [];
  },
  jn = function (e) {
    return (
      (e = Bt(e)[0] || Xr('Invalid scope') || {}),
      function (i) {
        var t = e.current || e.nativeElement || e;
        return Bt(i, t.querySelectorAll ? t : t === e ? Xr('Invalid scope') || Bn.createElement('div') : e);
      }
    );
  },
  za = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ra = function (e) {
    if (_e(e)) return e;
    var i = ii(e) ? e : { each: e },
      t = Zi(i.ease),
      r = i.from || 0,
      s = parseFloat(i.base) || 0,
      o = {},
      a = r > 0 && r < 1,
      l = isNaN(r) || a,
      c = i.axis,
      u = r,
      f = r;
    return (
      ze(r) ? (u = f = { center: 0.5, edges: 0.5, end: 1 }[r] || 0) : !a && l && ((u = r[0]), (f = r[1])),
      function (h, d, m) {
        var p = (m || i).length,
          y = o[p],
          _,
          g,
          v,
          w,
          b,
          x,
          E,
          M,
          C;
        if (!y) {
          if (((C = i.grid === 'auto' ? 0 : (i.grid || [1, It])[1]), !C)) {
            for (E = -It; E < (E = m[C++].getBoundingClientRect().left) && C < p; );
            C < p && C--;
          }
          for (
            y = o[p] = [],
              _ = l ? Math.min(C, p) * u - 0.5 : r % C,
              g = C === It ? 0 : l ? (p * f) / C - 0.5 : (r / C) | 0,
              E = 0,
              M = It,
              x = 0;
            x < p;
            x++
          )
            (v = (x % C) - _),
              (w = g - ((x / C) | 0)),
              (y[x] = b = c ? Math.abs(c === 'y' ? w : v) : ha(v * v + w * w)),
              b > E && (E = b),
              b < M && (M = b);
          r === 'random' && za(y),
            (y.max = E - M),
            (y.min = M),
            (y.v = p =
              (parseFloat(i.amount) ||
                parseFloat(i.each) * (C > p ? p - 1 : c ? (c === 'y' ? p / C : C) : Math.max(C, p / C)) ||
                0) * (r === 'edges' ? -1 : 1)),
            (y.b = p < 0 ? s - p : s),
            (y.u = je(i.amount || i.each) || 0),
            (t = t && p < 0 ? ja(t) : t);
        }
        return (p = (y[h] - y.min) / y.max || 0), Re(y.b + (t ? t(p) : p) * y.v) + y.u;
      }
    );
  },
  Un = function (e) {
    var i = Math.pow(10, ((e + '').split('.')[1] || '').length);
    return function (t) {
      var r = Re(Math.round(parseFloat(t) / e) * e * i);
      return (r - (r % 1)) / i + (pi(t) ? 0 : je(t));
    };
  },
  Na = function (e, i) {
    var t = Xe(e),
      r,
      s;
    return (
      !t &&
        ii(e) &&
        ((r = t = e.radius || It),
        e.values ? ((e = Bt(e.values)), (s = !pi(e[0])) && (r *= r)) : (e = Un(e.increment))),
      Ti(
        i,
        t
          ? _e(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= r ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = It, u = 0, f = e.length, h, d;
                  f--;

                )
                  s ? ((h = e[f].x - a), (d = e[f].y - l), (h = h * h + d * d)) : (h = Math.abs(e[f] - a)),
                    h < c && ((c = h), (u = f));
                return (u = !r || c <= r ? e[u] : o), s || u === o || pi(o) ? u : u + je(o);
              }
          : Un(e)
      )
    );
  },
  Ba = function (e, i, t, r) {
    return Ti(Xe(e) ? !i : t === !0 ? !!(t = 0) : !r, function () {
      return Xe(e)
        ? e[~~(Math.random() * e.length)]
        : (t = t || 1e-5) &&
            (r = t < 1 ? Math.pow(10, (t + '').length - 2) : 1) &&
            Math.floor(Math.round((e - t / 2 + Math.random() * (i - e + t * 0.99)) / t) * t * r) / r;
    });
  },
  Su = function () {
    for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
    return function (r) {
      return i.reduce(function (s, o) {
        return o(s);
      }, r);
    };
  },
  Tu = function (e, i) {
    return function (t) {
      return e(parseFloat(t)) + (i || je(t));
    };
  },
  Eu = function (e, i, t) {
    return Wa(e, i, 0, 1, t);
  },
  Fa = function (e, i, t) {
    return Ti(t, function (r) {
      return e[~~i(r)];
    });
  },
  Cu = function n(e, i, t) {
    var r = i - e;
    return Xe(e)
      ? Fa(e, n(0, e.length), i)
      : Ti(t, function (s) {
          return ((r + ((s - e) % r)) % r) + e;
        });
  },
  Mu = function n(e, i, t) {
    var r = i - e,
      s = r * 2;
    return Xe(e)
      ? Fa(e, n(0, e.length - 1), i)
      : Ti(t, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
        });
  },
  Zr = function (e) {
    for (var i = 0, t = '', r, s, o, a; ~(r = e.indexOf('random(', i)); )
      (o = e.indexOf(')', r)),
        (a = e.charAt(r + 7) === '['),
        (s = e.substr(r + 7, o - r - 7).match(a ? va : zn)),
        (t += e.substr(i, r - i) + Ba(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (i = o + 1);
    return t + e.substr(i, e.length - i);
  },
  Wa = function (e, i, t, r, s) {
    var o = i - e,
      a = r - t;
    return Ti(s, function (l) {
      return t + (((l - e) / o) * a || 0);
    });
  },
  Ou = function n(e, i, t, r) {
    var s = isNaN(e + i)
      ? 0
      : function (d) {
          return (1 - d) * e + d * i;
        };
    if (!s) {
      var o = ze(e),
        a = {},
        l,
        c,
        u,
        f,
        h;
      if ((t === !0 && (r = 1) && (t = null), o)) (e = { p: e }), (i = { p: i });
      else if (Xe(e) && !Xe(i)) {
        for (u = [], f = e.length, h = f - 2, c = 1; c < f; c++) u.push(n(e[c - 1], e[c]));
        f--,
          (s = function (m) {
            m *= f;
            var p = Math.min(h, ~~m);
            return u[p](m - p);
          }),
          (t = i);
      } else r || (e = Ki(Xe(e) ? [] : {}, e));
      if (!u) {
        for (l in i) Jn.call(a, e, l, 'get', i[l]);
        s = function (m) {
          return so(m, a) || (o ? e.p : e);
        };
      }
    }
    return Ti(t, s);
  },
  Va = function (e, i, t) {
    var r = e.labels,
      s = It,
      o,
      a,
      l;
    for (o in r) (a = r[o] - i), a < 0 == !!t && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Ct = function (e, i, t) {
    var r = e.vars,
      s = r[i],
      o = ve,
      a = e._ctx,
      l,
      c,
      u;
    if (s)
      return (
        (l = r[i + 'Params']),
        (c = r.callbackScope || e),
        t && xi.length && Ds(),
        a && (ve = a),
        (u = l ? s.apply(c, l) : s.call(c)),
        (ve = o),
        u
      );
  },
  Jr = function (e) {
    return Si(e), e.scrollTrigger && e.scrollTrigger.kill(!!Ye), e.progress() < 1 && Ct(e, 'onInterrupt'), e;
  },
  Tr,
  qa = [],
  $a = function (e) {
    if (In() && e) {
      e = (!e.name && e.default) || e;
      var i = e.name,
        t = _e(e),
        r =
          i && !t && e.init
            ? function () {
                this._props = [];
              }
            : e,
        s = { init: jr, render: so, add: Jn, kill: Hu, modifier: $u, rawVars: 0 },
        o = { targetTest: 0, get: 0, getSetter: ro, aliases: {}, register: 0 };
      if ((Er(), e !== r)) {
        if (Et[i]) return;
        Rt(r, Rt(Is(e, s), o)),
          Ki(r.prototype, Ki(s, Is(e, o))),
          (Et[(r.prop = i)] = r),
          e.targetTest && (Ls.push(r), (Wn[i] = 1)),
          (i = (i === 'css' ? 'CSS' : i.charAt(0).toUpperCase() + i.substr(1)) + 'Plugin');
      }
      wa(i, r), e.register && e.register(mt, r, pt);
    } else e && qa.push(e);
  },
  oe = 255,
  es = {
    aqua: [0, oe, oe],
    lime: [0, oe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, oe],
    navy: [0, 0, 128],
    white: [oe, oe, oe],
    olive: [128, 128, 0],
    yellow: [oe, oe, 0],
    orange: [oe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [oe, 0, 0],
    pink: [oe, 192, 203],
    cyan: [0, oe, oe],
    transparent: [oe, oe, oe, 0],
  },
  Kn = function (e, i, t) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1 ? i + (t - i) * e * 6 : e < 0.5 ? t : e * 3 < 2 ? i + (t - i) * (2 / 3 - e) * 6 : i) * oe + 0.5) | 0
    );
  },
  Ha = function (e, i, t) {
    var r = e ? (pi(e) ? [e >> 16, (e >> 8) & oe, e & oe] : 0) : es.black,
      s,
      o,
      a,
      l,
      c,
      u,
      f,
      h,
      d,
      m;
    if (!r) {
      if ((e.substr(-1) === ',' && (e = e.substr(0, e.length - 1)), es[e])) r = es[e];
      else if (e.charAt(0) === '#') {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e = '#' + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ''))),
          e.length === 9)
        )
          return (r = parseInt(e.substr(1, 6), 16)), [r >> 16, (r >> 8) & oe, r & oe, parseInt(e.substr(7), 16) / 255];
        (e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & oe, e & oe]);
      } else if (e.substr(0, 3) === 'hsl') {
        if (((r = m = e.match(zn)), !i))
          (l = (+r[0] % 360) / 360),
            (c = +r[1] / 100),
            (u = +r[2] / 100),
            (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - o),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Kn(l + 1 / 3, s, o)),
            (r[1] = Kn(l, s, o)),
            (r[2] = Kn(l - 1 / 3, s, o));
        else if (~e.indexOf('=')) return (r = e.match(ma)), t && r.length < 4 && (r[3] = 1), r;
      } else r = e.match(zn) || es.transparent;
      r = r.map(Number);
    }
    return (
      i &&
        !m &&
        ((s = r[0] / oe),
        (o = r[1] / oe),
        (a = r[2] / oe),
        (f = Math.max(s, o, a)),
        (h = Math.min(s, o, a)),
        (u = (f + h) / 2),
        f === h
          ? (l = c = 0)
          : ((d = f - h),
            (c = u > 0.5 ? d / (2 - f - h) : d / (f + h)),
            (l = f === s ? (o - a) / d + (o < a ? 6 : 0) : f === o ? (a - s) / d + 2 : (s - o) / d + 4),
            (l *= 60)),
        (r[0] = ~~(l + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(u * 100 + 0.5))),
      t && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Ga = function (e) {
    var i = [],
      t = [],
      r = -1;
    return (
      e.split(Ei).forEach(function (s) {
        var o = s.match(wr) || [];
        i.push.apply(i, o), t.push((r += o.length + 1));
      }),
      (i.c = t),
      i
    );
  },
  Ya = function (e, i, t) {
    var r = '',
      s = (e + r).match(Ei),
      o = i ? 'hsla(' : 'rgba(',
      a = 0,
      l,
      c,
      u,
      f;
    if (!s) return e;
    if (
      ((s = s.map(function (h) {
        return (h = Ha(h, i, 1)) && o + (i ? h[0] + ',' + h[1] + '%,' + h[2] + '%,' + h[3] : h.join(',')) + ')';
      })),
      t && ((u = Ga(e)), (l = t.c), l.join(r) !== u.c.join(r)))
    )
      for (c = e.replace(Ei, '1').split(wr), f = c.length - 1; a < f; a++)
        r += c[a] + (~l.indexOf(a) ? s.shift() || o + '0,0,0,0)' : (u.length ? u : s.length ? s : t).shift());
    if (!c) for (c = e.split(Ei), f = c.length - 1; a < f; a++) r += c[a] + s[a];
    return r + c[f];
  },
  Ei = (function () {
    var n = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b',
      e;
    for (e in es) n += '|' + e + '\\b';
    return new RegExp(n + ')', 'gi');
  })(),
  Pu = /hsl[a]?\(/,
  Xa = function (e) {
    var i = e.join(' '),
      t;
    if (((Ei.lastIndex = 0), Ei.test(i)))
      return (t = Pu.test(i)), (e[1] = Ya(e[1], t)), (e[0] = Ya(e[0], t, Ga(e[1]))), !0;
  },
  ts,
  Mt = (function () {
    var n = Date.now,
      e = 500,
      i = 33,
      t = n(),
      r = t,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      c,
      u,
      f,
      h,
      d,
      m = function p(y) {
        var _ = n() - r,
          g = y === !0,
          v,
          w,
          b,
          x;
        if (
          (_ > e && (t += _ - i),
          (r += _),
          (b = r - t),
          (v = b - o),
          (v > 0 || g) &&
            ((x = ++f.frame), (h = b - f.time * 1e3), (f.time = b = b / 1e3), (o += v + (v >= s ? 4 : s - v)), (w = 1)),
          g || (l = c(p)),
          w)
        )
          for (d = 0; d < a.length; d++) a[d](b, h, x, y);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (y) {
          return h / (1e3 / (y || 60));
        },
        wake: function () {
          _a &&
            (!Nn &&
              In() &&
              ((zt = Nn = window),
              (Bn = zt.document || {}),
              (Tt.gsap = mt),
              (zt.gsapVersions || (zt.gsapVersions = [])).push(mt.version),
              ya(As || zt.GreenSockGlobals || (!zt.gsap && zt) || {}),
              (u = zt.requestAnimationFrame),
              qa.forEach($a)),
            l && f.sleep(),
            (c =
              u ||
              function (y) {
                return setTimeout(y, (o - f.time * 1e3 + 1) | 0);
              }),
            (ts = 1),
            m(2));
        },
        sleep: function () {
          (u ? zt.cancelAnimationFrame : clearTimeout)(l), (ts = 0), (c = jr);
        },
        lagSmoothing: function (y, _) {
          (e = y || 1 / 0), (i = Math.min(_ || 33, e));
        },
        fps: function (y) {
          (s = 1e3 / (y || 240)), (o = f.time * 1e3 + s);
        },
        add: function (y, _, g) {
          var v = _
            ? function (w, b, x, E) {
                y(w, b, x, E), f.remove(v);
              }
            : y;
          return f.remove(y), a[g ? 'unshift' : 'push'](v), Er(), v;
        },
        remove: function (y, _) {
          ~(_ = a.indexOf(y)) && a.splice(_, 1) && d >= _ && d--;
        },
        _listeners: a,
      }),
      f
    );
  })(),
  Er = function () {
    return !ts && Mt.wake();
  },
  K = {},
  Au = /^[\d.\-M][\d.\-,\s]/,
  ku = /["']/g,
  Lu = function (e) {
    for (var i = {}, t = e.substr(1, e.length - 3).split(':'), r = t[0], s = 1, o = t.length, a, l, c; s < o; s++)
      (l = t[s]),
        (a = s !== o - 1 ? l.lastIndexOf(',') : l.length),
        (c = l.substr(0, a)),
        (i[r] = isNaN(c) ? c.replace(ku, '').trim() : +c),
        (r = l.substr(a + 1).trim());
    return i;
  },
  Du = function (e) {
    var i = e.indexOf('(') + 1,
      t = e.indexOf(')'),
      r = e.indexOf('(', i);
    return e.substring(i, ~r && r < t ? e.indexOf(')', t + 1) : t);
  },
  Iu = function (e) {
    var i = (e + '').split('('),
      t = K[i[0]];
    return t && i.length > 1 && t.config
      ? t.config.apply(null, ~e.indexOf('{') ? [Lu(i[1])] : Du(e).split(',').map(Ea))
      : K._CE && Au.test(e)
      ? K._CE('', e)
      : t;
  },
  ja = function (e) {
    return function (i) {
      return 1 - e(1 - i);
    };
  },
  Ua = function n(e, i) {
    for (var t = e._first, r; t; )
      t instanceof Ze
        ? n(t, i)
        : t.vars.yoyoEase &&
          (!t._yoyo || !t._repeat) &&
          t._yoyo !== i &&
          (t.timeline ? n(t.timeline, i) : ((r = t._ease), (t._ease = t._yEase), (t._yEase = r), (t._yoyo = i))),
        (t = t._next);
  },
  Zi = function (e, i) {
    return (e && (_e(e) ? e : K[e] || Iu(e))) || i;
  },
  Ji = function (e, i, t, r) {
    t === void 0 &&
      (t = function (l) {
        return 1 - i(1 - l);
      }),
      r === void 0 &&
        (r = function (l) {
          return l < 0.5 ? i(l * 2) / 2 : 1 - i((1 - l) * 2) / 2;
        });
    var s = { easeIn: i, easeOut: t, easeInOut: r },
      o;
    return (
      ht(e, function (a) {
        (K[a] = Tt[a] = s), (K[(o = a.toLowerCase())] = t);
        for (var l in s) K[o + (l === 'easeIn' ? '.in' : l === 'easeOut' ? '.out' : '.inOut')] = K[a + '.' + l] = s[l];
      }),
      s
    );
  },
  Ka = function (e) {
    return function (i) {
      return i < 0.5 ? (1 - e(1 - i * 2)) / 2 : 0.5 + e((i - 0.5) * 2) / 2;
    };
  },
  Qn = function n(e, i, t) {
    var r = i >= 1 ? i : 1,
      s = (t || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      o = (s / Ln) * (Math.asin(1 / r) || 0),
      a = function (u) {
        return u === 1 ? 1 : r * Math.pow(2, -10 * u) * lu((u - o) * s) + 1;
      },
      l =
        e === 'out'
          ? a
          : e === 'in'
          ? function (c) {
              return 1 - a(1 - c);
            }
          : Ka(a);
    return (
      (s = Ln / s),
      (l.config = function (c, u) {
        return n(e, c, u);
      }),
      l
    );
  },
  Zn = function n(e, i) {
    i === void 0 && (i = 1.70158);
    var t = function (o) {
        return o ? --o * o * ((i + 1) * o + i) + 1 : 0;
      },
      r =
        e === 'out'
          ? t
          : e === 'in'
          ? function (s) {
              return 1 - t(1 - s);
            }
          : Ka(t);
    return (
      (r.config = function (s) {
        return n(e, s);
      }),
      r
    );
  };
ht('Linear,Quad,Cubic,Quart,Quint,Strong', function (n, e) {
  var i = e < 5 ? e + 1 : e;
  Ji(
    n + ',Power' + (i - 1),
    e
      ? function (t) {
          return Math.pow(t, i);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, i);
    },
    function (t) {
      return t < 0.5 ? Math.pow(t * 2, i) / 2 : 1 - Math.pow((1 - t) * 2, i) / 2;
    }
  );
}),
  (K.Linear.easeNone = K.none = K.Linear.easeIn),
  Ji('Elastic', Qn('in'), Qn('out'), Qn()),
  (function (n, e) {
    var i = 1 / e,
      t = 2 * i,
      r = 2.5 * i,
      s = function (a) {
        return a < i
          ? n * a * a
          : a < t
          ? n * Math.pow(a - 1.5 / e, 2) + 0.75
          : a < r
          ? n * (a -= 2.25 / e) * a + 0.9375
          : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
      };
    Ji(
      'Bounce',
      function (o) {
        return 1 - s(1 - o);
      },
      s
    );
  })(7.5625, 2.75),
  Ji('Expo', function (n) {
    return n ? Math.pow(2, 10 * (n - 1)) : 0;
  }),
  Ji('Circ', function (n) {
    return -(ha(1 - n * n) - 1);
  }),
  Ji('Sine', function (n) {
    return n === 1 ? 1 : -au(n * nu) + 1;
  }),
  Ji('Back', Zn('in'), Zn('out'), Zn()),
  (K.SteppedEase =
    K.steps =
    Tt.SteppedEase =
      {
        config: function (e, i) {
          e === void 0 && (e = 1);
          var t = 1 / e,
            r = e + (i ? 0 : 1),
            s = i ? 1 : 0,
            o = 1 - ne;
          return function (a) {
            return (((r * Qr(0, o, a)) | 0) + s) * t;
          };
        },
      }),
  (yr.ease = K['quad.out']),
  ht('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (n) {
    return ($n += n + ',' + n + 'Params,');
  });
var Qa = function (e, i) {
    (this.id = ou++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = i),
      (this.get = i ? i.get : Sa),
      (this.set = i ? i.getSetter : ro);
  },
  is = (function () {
    function n(i) {
      (this.vars = i),
        (this._delay = +i.delay || 0),
        (this._repeat = i.repeat === 1 / 0 ? -2 : i.repeat || 0) &&
          ((this._rDelay = i.repeatDelay || 0), (this._yoyo = !!i.yoyo || !!i.yoyoEase)),
        (this._ts = 1),
        Sr(this, +i.duration, 1, 1),
        (this.data = i.data),
        ve && ((this._ctx = ve), ve.data.push(this)),
        ts || Mt.wake();
    }
    var e = n.prototype;
    return (
      (e.delay = function (t) {
        return t || t === 0
          ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t)
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0), Sr(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur;
      }),
      (e.totalTime = function (t, r) {
        if ((Er(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Bs(this, t), !s._dp || s.parent || Aa(s, this); s && s.parent; )
            s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) || (this._ts < 0 && t > 0) || (!this._tDur && !t)) &&
            ri(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === ne) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), Ta(this, t, r)),
          this
        );
      }),
      (e.time = function (t, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Pa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (e.totalProgress = function (t, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (t, r) {
        return arguments.length
          ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Pa(this), r)
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (t, r) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * s, r)
          : this._repeat
          ? xr(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (t, r) {
        if (!arguments.length) return this._rts === -ne ? 0 : this._rts;
        if (this._rts === t) return this;
        var s = this.parent && this._ts ? Rs(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -ne ? 0 : this._rts),
          this.totalTime(Qr(-Math.abs(this._delay), this._tDur, s), r !== !1),
          Ns(this),
          mu(this)
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (Er(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== ne && (this._tTime -= ne)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var r = this.parent || this._dp;
          return r && (r._sort || !this.parent) && ri(r, this, t - this._delay), this;
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return this._start + (ft(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }),
      (e.rawTime = function (t) {
        var r = this.parent || this._dp;
        return r
          ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Rs(r.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (t) {
        t === void 0 && (t = du);
        var r = Ye;
        return (
          (Ye = t),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(t), this.totalTime(-0.01, t.suppressEvents)),
          this.data !== 'nested' && t.kill !== !1 && this.kill(),
          (Ye = r),
          this
        );
      }),
      (e.globalTime = function (t) {
        for (var r = this, s = arguments.length ? t : r.rawTime(); r; )
          (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(t) : s;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), Da(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = t), Da(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, r) {
        return this.totalTime(Nt(this, t), ft(r));
      }),
      (e.restart = function (t, r) {
        return this.play().totalTime(t ? -this._delay : 0, ft(r));
      }),
      (e.play = function (t, r) {
        return t != null && this.seek(t, r), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, r) {
        return t != null && this.seek(t || this.totalDuration(), r), this.reversed(!0).paused(!1);
      }),
      (e.pause = function (t, r) {
        return t != null && this.seek(t, r), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -ne : 0)), this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -ne), this;
      }),
      (e.isActive = function () {
        var t = this.parent || this._dp,
          r = this._start,
          s;
        return !!(
          !t ||
          (this._ts && this._initted && t.isActive() && (s = t.rawTime(!0)) >= r && s < this.endTime(!0) - ne)
        );
      }),
      (e.eventCallback = function (t, r, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (r ? ((o[t] = r), s && (o[t + 'Params'] = s), t === 'onUpdate' && (this._onUpdate = r)) : delete o[t], this)
          : o[t];
      }),
      (e.then = function (t) {
        var r = this;
        return new Promise(function (s) {
          var o = _e(t) ? t : Ca,
            a = function () {
              var c = r.then;
              (r.then = null), _e(o) && (o = o(r)) && (o.then || o === r) && (r.then = c), s(o), (r.then = c);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) || (!r._tTime && r._ts < 0) ? a() : (r._prom = a);
        });
      }),
      (e.kill = function () {
        Jr(this);
      }),
      n
    );
  })();
Rt(is.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -ne,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Ze = (function (n) {
  fa(e, n);
  function e(t, r) {
    var s;
    return (
      t === void 0 && (t = {}),
      (s = n.call(this, t) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!t.smoothChildTiming),
      (s.autoRemoveChildren = !!t.autoRemoveChildren),
      (s._sort = ft(t.sortChildren)),
      de && ri(t.parent || de, hi(s), r),
      t.reversed && s.reverse(),
      t.paused && s.paused(!0),
      t.scrollTrigger && ka(hi(s), t.scrollTrigger),
      s
    );
  }
  var i = e.prototype;
  return (
    (i.to = function (r, s, o) {
      return Kr(0, arguments, this), this;
    }),
    (i.from = function (r, s, o) {
      return Kr(1, arguments, this), this;
    }),
    (i.fromTo = function (r, s, o, a) {
      return Kr(2, arguments, this), this;
    }),
    (i.set = function (r, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Ur(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new Ce(r, s, Nt(this, o), 1),
        this
      );
    }),
    (i.call = function (r, s, o) {
      return ri(this, Ce.delayedCall(0, r, s), o);
    }),
    (i.staggerTo = function (r, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new Ce(r, o, Nt(this, l)),
        this
      );
    }),
    (i.staggerFrom = function (r, s, o, a, l, c, u) {
      return (o.runBackwards = 1), (Ur(o).immediateRender = ft(o.immediateRender)), this.staggerTo(r, s, o, a, l, c, u);
    }),
    (i.staggerFromTo = function (r, s, o, a, l, c, u, f) {
      return (a.startAt = o), (Ur(a).immediateRender = ft(a.immediateRender)), this.staggerTo(r, s, a, l, c, u, f);
    }),
    (i.render = function (r, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = r <= 0 ? 0 : Re(r),
        f = this._zTime < 0 != r < 0 && (this._initted || !c),
        h,
        d,
        m,
        p,
        y,
        _,
        g,
        v,
        w,
        b,
        x,
        E;
      if ((this !== de && u > l && r >= 0 && (u = l), u !== this._tTime || o || f)) {
        if (
          (a !== this._time && c && ((u += this._time - a), (r += this._time - a)),
          (h = u),
          (w = this._start),
          (v = this._ts),
          (_ = !v),
          f && (c || (a = this._zTime), (r || !s) && (this._zTime = r)),
          this._repeat)
        ) {
          if (((x = this._yoyo), (y = c + this._rDelay), this._repeat < -1 && r < 0))
            return this.totalTime(y * 100 + r, s, o);
          if (
            ((h = Re(u % y)),
            u === l
              ? ((p = this._repeat), (h = c))
              : ((p = ~~(u / y)), p && p === u / y && ((h = c), p--), h > c && (h = c)),
            (b = xr(this._tTime, y)),
            !a && this._tTime && b !== p && this._tTime - b * y - this._dur <= 0 && (b = p),
            x && p & 1 && ((h = c - h), (E = 1)),
            p !== b && !this._lock)
          ) {
            var M = x && b & 1,
              C = M === (x && p & 1);
            if (
              (p < b && (M = !M),
              (a = M ? 0 : u % c ? c : u),
              (this._lock = 1),
              (this.render(a || (E ? 0 : Re(p * y)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && Ct(this, 'onRepeat'),
              this.vars.repeatRefresh && !E && (this.invalidate()._lock = 1),
              (a && a !== this._time) || _ !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              C &&
                ((this._lock = 2),
                (a = M ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !E && this.invalidate()),
              (this._lock = 0),
              !this._ts && !_)
            )
              return this;
            Ua(this, E);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((g = yu(this, Re(a), Re(h))), g && (u -= h - (h = g._start))),
          (this._tTime = u),
          (this._time = h),
          (this._act = !v),
          this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = r), (a = 0)),
          !a && h && !s && !p && (Ct(this, 'onStart'), this._tTime !== u))
        )
          return this;
        if (h >= a && r >= 0)
          for (d = this._first; d; ) {
            if (((m = d._next), (d._act || h >= d._start) && d._ts && g !== d)) {
              if (d.parent !== this) return this.render(r, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (h - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) + (h - d._start) * d._ts,
                  s,
                  o
                ),
                h !== this._time || (!this._ts && !_))
              ) {
                (g = 0), m && (u += this._zTime = -ne);
                break;
              }
            }
            d = m;
          }
        else {
          d = this._last;
          for (var T = r < 0 ? r : h; d; ) {
            if (((m = d._prev), (d._act || T <= d._end) && d._ts && g !== d)) {
              if (d.parent !== this) return this.render(r, s, o);
              if (
                (d.render(
                  d._ts > 0
                    ? (T - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) + (T - d._start) * d._ts,
                  s,
                  o || (Ye && (d._initted || d._startAt))
                ),
                h !== this._time || (!this._ts && !_))
              ) {
                (g = 0), m && (u += this._zTime = T ? -ne : ne);
                break;
              }
            }
            d = m;
          }
        }
        if (g && !s && (this.pause(), (g.render(h >= a ? 0 : -ne)._zTime = h >= a ? 1 : -1), this._ts))
          return (this._start = w), Ns(this), this.render(r, s, o);
        this._onUpdate && !s && Ct(this, 'onUpdate', !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (w === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !c) && ((u === l && this._ts > 0) || (!u && this._ts < 0)) && Si(this, 1),
              !s &&
                !(r < 0 && !a) &&
                (u || a || !l) &&
                (Ct(this, u === l && r >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (i.add = function (r, s) {
      var o = this;
      if ((pi(s) || (s = Nt(this, s, r)), !(r instanceof is))) {
        if (Xe(r))
          return (
            r.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (ze(r)) return this.addLabel(r, s);
        if (_e(r)) r = Ce.delayedCall(0, r);
        else return this;
      }
      return this !== r ? ri(this, r, s) : this;
    }),
    (i.getChildren = function (r, s, o, a) {
      r === void 0 && (r = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -It);
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof Ce ? s && l.push(c) : (o && l.push(c), r && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next);
      return l;
    }),
    (i.getById = function (r) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; ) if (s[o].vars.id === r) return s[o];
    }),
    (i.remove = function (r) {
      return ze(r)
        ? this.removeLabel(r)
        : _e(r)
        ? this.killTweensOf(r)
        : (zs(this, r), r === this._recent && (this._recent = this._last), Qi(this));
    }),
    (i.totalTime = function (r, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Re(Mt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
          n.prototype.totalTime.call(this, r, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (r, s) {
      return (this.labels[r] = Nt(this, s)), this;
    }),
    (i.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (i.addPause = function (r, s, o) {
      var a = Ce.delayedCall(0, s || jr, o);
      return (a.data = 'isPause'), (this._hasPause = 1), ri(this, a, Nt(this, r));
    }),
    (i.removePause = function (r) {
      var s = this._first;
      for (r = Nt(this, r); s; ) s._start === r && s.data === 'isPause' && Si(s), (s = s._next);
    }),
    (i.killTweensOf = function (r, s, o) {
      for (var a = this.getTweensOf(r, o), l = a.length; l--; ) Ci !== a[l] && a[l].kill(r, s);
      return this;
    }),
    (i.getTweensOf = function (r, s) {
      for (var o = [], a = Bt(r), l = this._first, c = pi(s), u; l; )
        l instanceof Ce
          ? fu(l._targets, a) &&
            (c
              ? (!Ci || (l._initted && l._ts)) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
          (l = l._next);
      return o;
    }),
    (i.tweenTo = function (r, s) {
      s = s || {};
      var o = this,
        a = Nt(o, r),
        l = s,
        c = l.startAt,
        u = l.onStart,
        f = l.onStartParams,
        h = l.immediateRender,
        d,
        m = Ce.to(
          o,
          Rt(
            {
              ease: s.ease || 'none',
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: 'auto',
              duration: s.duration || Math.abs((a - (c && 'time' in c ? c.time : o._time)) / o.timeScale()) || ne,
              onStart: function () {
                if ((o.pause(), !d)) {
                  var y = s.duration || Math.abs((a - (c && 'time' in c ? c.time : o._time)) / o.timeScale());
                  m._dur !== y && Sr(m, y, 0, 1).render(m._time, !0, !0), (d = 1);
                }
                u && u.apply(m, f || []);
              },
            },
            s
          )
        );
      return h ? m.render(0) : m;
    }),
    (i.tweenFromTo = function (r, s, o) {
      return this.tweenTo(s, Rt({ startAt: { time: Nt(this, r) } }, o));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Va(this, Nt(this, r));
    }),
    (i.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Va(this, Nt(this, r), 1);
    }),
    (i.currentLabel = function (r) {
      return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ne);
    }),
    (i.shiftChildren = function (r, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; )
        a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
      if (s) for (c in l) l[c] >= o && (l[c] += r);
      return Qi(this);
    }),
    (i.invalidate = function (r) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
      return n.prototype.invalidate.call(this, r);
    }),
    (i.clear = function (r) {
      r === void 0 && (r = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), Qi(this);
    }),
    (i.totalDuration = function (r) {
      var s = 0,
        o = this,
        a = o._last,
        l = It,
        c,
        u,
        f;
      if (arguments.length)
        return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
      if (o._dirty) {
        for (f = o.parent; a; )
          (c = a._prev),
            a._dirty && a.totalDuration(),
            (u = a._start),
            u > l && o._sort && a._ts && !o._lock ? ((o._lock = 1), (ri(o, a, u - a._delay, 1)._lock = 0)) : (l = u),
            u < 0 &&
              a._ts &&
              ((s -= u),
              ((!f && !o._dp) || (f && f.smoothChildTiming)) &&
                ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
              o.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c);
        Sr(o, o === de && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (r) {
      if ((de._ts && (Ta(de, Rs(r, de)), (ba = Mt.frame)), Mt.frame >= xa)) {
        xa += St.autoSleep || 120;
        var s = de._first;
        if ((!s || !s._ts) && St.autoSleep && Mt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || Mt.sleep();
        }
      }
    }),
    e
  );
})(is);
Rt(Ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var zu = function (e, i, t, r, s, o, a) {
    var l = new pt(this._pt, e, i, 0, 1, rl, null, s),
      c = 0,
      u = 0,
      f,
      h,
      d,
      m,
      p,
      y,
      _,
      g;
    for (
      l.b = t,
        l.e = r,
        t += '',
        r += '',
        (_ = ~r.indexOf('random(')) && (r = Zr(r)),
        o && ((g = [t, r]), o(g, e, i), (t = g[0]), (r = g[1])),
        h = t.match(Rn) || [];
      (f = Rn.exec(r));

    )
      (m = f[0]),
        (p = r.substring(c, f.index)),
        d ? (d = (d + 1) % 5) : p.substr(-5) === 'rgba(' && (d = 1),
        m !== h[u++] &&
          ((y = parseFloat(h[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: p || u === 1 ? p : ',',
            s: y,
            c: m.charAt(1) === '=' ? br(y, m) - y : parseFloat(m) - y,
            m: d && d < 4 ? Math.round : 0,
          }),
          (c = Rn.lastIndex));
    return (
      (l.c = c < r.length ? r.substring(c, r.length) : ''),
      (l.fp = a),
      (ga.test(r) || _) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Jn = function (e, i, t, r, s, o, a, l, c, u) {
    _e(r) && (r = r(s || 0, e, o));
    var f = e[i],
      h =
        t !== 'get'
          ? t
          : _e(f)
          ? c
            ? e[i.indexOf('set') || !_e(e['get' + i.substr(3)]) ? i : 'get' + i.substr(3)](c)
            : e[i]()
          : f,
      d = _e(f) ? (c ? Wu : tl) : io,
      m;
    if (
      (ze(r) &&
        (~r.indexOf('random(') && (r = Zr(r)),
        r.charAt(1) === '=' && ((m = br(h, r) + (je(h) || 0)), (m || m === 0) && (r = m))),
      !u || h !== r || eo)
    )
      return !isNaN(h * r) && r !== ''
        ? ((m = new pt(this._pt, e, i, +h || 0, r - (h || 0), typeof f == 'boolean' ? qu : il, 0, d)),
          c && (m.fp = c),
          a && m.modifier(a, this, e),
          (this._pt = m))
        : (!f && !(i in e) && Fn(i, r), zu.call(this, e, i, h, r, d, l || St.stringFilter, c));
  },
  Ru = function (e, i, t, r, s) {
    if ((_e(e) && (e = rs(e, s, i, t, r)), !ii(e) || (e.style && e.nodeType) || Xe(e) || pa(e)))
      return ze(e) ? rs(e, s, i, t, r) : e;
    var o = {},
      a;
    for (a in e) o[a] = rs(e[a], s, i, t, r);
    return o;
  },
  Za = function (e, i, t, r, s, o) {
    var a, l, c, u;
    if (
      Et[e] &&
      (a = new Et[e]()).init(s, a.rawVars ? i[e] : Ru(i[e], r, s, o, t), t, r, o) !== !1 &&
      ((t._pt = l = new pt(t._pt, s, e, 0, 1, a.render, a, 0, a.priority)), t !== Tr)
    )
      for (c = t._ptLookup[t._targets.indexOf(s)], u = a._props.length; u--; ) c[a._props[u]] = l;
    return a;
  },
  Ci,
  eo,
  to = function n(e, i, t) {
    var r = e.vars,
      s = r.ease,
      o = r.startAt,
      a = r.immediateRender,
      l = r.lazy,
      c = r.onUpdate,
      u = r.runBackwards,
      f = r.yoyoEase,
      h = r.keyframes,
      d = r.autoRevert,
      m = e._dur,
      p = e._startAt,
      y = e._targets,
      _ = e.parent,
      g = _ && _.data === 'nested' ? _.vars.targets : y,
      v = e._overwrite === 'auto' && !kn,
      w = e.timeline,
      b,
      x,
      E,
      M,
      C,
      T,
      A,
      O,
      k,
      L,
      D,
      N,
      B;
    if (
      (w && (!h || !s) && (s = 'none'),
      (e._ease = Zi(s, yr.ease)),
      (e._yEase = f ? ja(Zi(f === !0 ? s : f, yr.ease)) : 0),
      f && e._yoyo && !e._repeat && ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !w && !!r.runBackwards),
      !w || (h && !r.stagger))
    ) {
      if (
        ((O = y[0] ? Ui(y[0]).harness : 0),
        (N = O && r[O.prop]),
        (b = Is(r, Wn)),
        p &&
          (p._zTime < 0 && p.progress(1),
          i < 0 && u && a && !d ? p.render(-1, !0) : p.revert(u && m ? ks : uu),
          (p._lazy = 0)),
        o)
      ) {
        if (
          (Si(
            (e._startAt = Ce.set(
              y,
              Rt(
                {
                  data: 'isStart',
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !p && ft(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return Ct(e, 'onUpdate');
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          i < 0 && (Ye || (!a && !d)) && e._startAt.revert(ks),
          a && m && i <= 0 && t <= 0)
        ) {
          i && (e._zTime = i);
          return;
        }
      } else if (u && m && !p) {
        if (
          (i && (a = !1),
          (E = Rt(
            { overwrite: !1, data: 'isFromStart', lazy: a && !p && ft(l), immediateRender: a, stagger: 0, parent: _ },
            b
          )),
          N && (E[O.prop] = N),
          Si((e._startAt = Ce.set(y, E))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          i < 0 && (Ye ? e._startAt.revert(ks) : e._startAt.render(-1, !0)),
          (e._zTime = i),
          !a)
        )
          n(e._startAt, ne, ne);
        else if (!i) return;
      }
      for (e._pt = e._ptCache = 0, l = (m && ft(l)) || (l && !m), x = 0; x < y.length; x++) {
        if (
          ((C = y[x]),
          (A = C._gsap || Hn(y)[x]._gsap),
          (e._ptLookup[x] = L = {}),
          Vn[A.id] && xi.length && Ds(),
          (D = g === y ? x : g.indexOf(C)),
          O &&
            (k = new O()).init(C, N || b, e, D, g) !== !1 &&
            ((e._pt = M = new pt(e._pt, C, k.name, 0, 1, k.render, k, 0, k.priority)),
            k._props.forEach(function (I) {
              L[I] = M;
            }),
            k.priority && (T = 1)),
          !O || N)
        )
          for (E in b)
            Et[E] && (k = Za(E, b, e, D, C, g))
              ? k.priority && (T = 1)
              : (L[E] = M = Jn.call(e, C, E, 'get', b[E], D, g, 0, r.stringFilter));
        e._op && e._op[x] && e.kill(C, e._op[x]),
          v && e._pt && ((Ci = e), de.killTweensOf(C, L, e.globalTime(i)), (B = !e.parent), (Ci = 0)),
          e._pt && l && (Vn[A.id] = 1);
      }
      T && sl(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c), (e._initted = (!e._op || e._pt) && !B), h && i <= 0 && w.render(It, !0, !0);
  },
  Nu = function (e, i, t, r, s, o, a, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[i],
      u,
      f,
      h,
      d;
    if (!c)
      for (c = e._ptCache[i] = [], h = e._ptLookup, d = e._targets.length; d--; ) {
        if (((u = h[d][i]), u && u.d && u.d._pt)) for (u = u.d._pt; u && u.p !== i && u.fp !== i; ) u = u._next;
        if (!u) return (eo = 1), (e.vars[i] = '+=0'), to(e, a), (eo = 0), l ? Xr(i + ' not eligible for reset') : 1;
        c.push(u);
      }
    for (d = c.length; d--; )
      (f = c[d]),
        (u = f._pt || f),
        (u.s = (r || r === 0) && !s ? r : u.s + (r || 0) + o * u.c),
        (u.c = t - u.s),
        f.e && (f.e = xe(t) + je(f.e)),
        f.b && (f.b = u.s + je(f.b));
  },
  Bu = function (e, i) {
    var t = e[0] ? Ui(e[0]).harness : 0,
      r = t && t.aliases,
      s,
      o,
      a,
      l;
    if (!r) return i;
    s = Ki({}, i);
    for (o in r) if (o in s) for (l = r[o].split(','), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  Fu = function (e, i, t, r) {
    var s = i.ease || r || 'power1.inOut',
      o,
      a;
    if (Xe(i))
      (a = t[e] || (t[e] = [])),
        i.forEach(function (l, c) {
          return a.push({ t: (c / (i.length - 1)) * 100, v: l, e: s });
        });
    else for (o in i) (a = t[o] || (t[o] = [])), o === 'ease' || a.push({ t: parseFloat(e), v: i[o], e: s });
  },
  rs = function (e, i, t, r, s) {
    return _e(e) ? e.call(i, t, r, s) : ze(e) && ~e.indexOf('random(') ? Zr(e) : e;
  },
  Ja = $n + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
  el = {};
ht(Ja + ',id,stagger,delay,duration,paused,scrollTrigger', function (n) {
  return (el[n] = 1);
});
var Ce = (function (n) {
  fa(e, n);
  function e(t, r, s, o) {
    var a;
    typeof r == 'number' && ((s.duration = r), (r = s), (s = null)), (a = n.call(this, o ? r : Ur(r)) || this);
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      f = l.immediateRender,
      h = l.stagger,
      d = l.overwrite,
      m = l.keyframes,
      p = l.defaults,
      y = l.scrollTrigger,
      _ = l.yoyoEase,
      g = r.parent || de,
      v = (Xe(t) || pa(t) ? pi(t[0]) : 'length' in r) ? [t] : Bt(t),
      w,
      b,
      x,
      E,
      M,
      C,
      T,
      A;
    if (
      ((a._targets = v.length
        ? Hn(v)
        : Xr('GSAP target ' + t + ' not found. https://gsap.com', !St.nullTargetWarn) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      m || h || Ps(c) || Ps(u))
    ) {
      if (
        ((r = a.vars),
        (w = a.timeline =
          new Ze({ data: 'nested', defaults: p || {}, targets: g && g.data === 'nested' ? g.vars.targets : v })),
        w.kill(),
        (w.parent = w._dp = hi(a)),
        (w._start = 0),
        h || Ps(c) || Ps(u))
      ) {
        if (((E = v.length), (T = h && Ra(h)), ii(h))) for (M in h) ~Ja.indexOf(M) && (A || (A = {}), (A[M] = h[M]));
        for (b = 0; b < E; b++)
          (x = Is(r, el)),
            (x.stagger = 0),
            _ && (x.yoyoEase = _),
            A && Ki(x, A),
            (C = v[b]),
            (x.duration = +rs(c, hi(a), b, C, v)),
            (x.delay = (+rs(u, hi(a), b, C, v) || 0) - a._delay),
            !h && E === 1 && x.delay && ((a._delay = u = x.delay), (a._start += u), (x.delay = 0)),
            w.to(C, x, T ? T(b, C, v) : 0),
            (w._ease = K.none);
        w.duration() ? (c = u = 0) : (a.timeline = 0);
      } else if (m) {
        Ur(Rt(w.vars.defaults, { ease: 'none' })), (w._ease = Zi(m.ease || r.ease || 'none'));
        var O = 0,
          k,
          L,
          D;
        if (Xe(m))
          m.forEach(function (N) {
            return w.to(v, N, '>');
          }),
            w.duration();
        else {
          x = {};
          for (M in m) M === 'ease' || M === 'easeEach' || Fu(M, m[M], x, m.easeEach);
          for (M in x)
            for (
              k = x[M].sort(function (N, B) {
                return N.t - B.t;
              }),
                O = 0,
                b = 0;
              b < k.length;
              b++
            )
              (L = k[b]),
                (D = { ease: L.e, duration: ((L.t - (b ? k[b - 1].t : 0)) / 100) * c }),
                (D[M] = L.v),
                w.to(v, D, O),
                (O += D.duration);
          w.duration() < c && w.to({}, { duration: c - w.duration() });
        }
      }
      c || a.duration((c = w.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !kn && ((Ci = hi(a)), de.killTweensOf(v), (Ci = 0)),
      ri(g, hi(a), s),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (f || (!c && !m && a._start === Re(g._time) && ft(f) && gu(hi(a)) && g.data !== 'nested')) &&
        ((a._tTime = -ne), a.render(Math.max(0, -u) || 0)),
      y && ka(hi(a), y),
      a
    );
  }
  var i = e.prototype;
  return (
    (i.render = function (r, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        u = r < 0,
        f = r > l - ne && !u ? l : r < ne ? 0 : r,
        h,
        d,
        m,
        p,
        y,
        _,
        g,
        v,
        w;
      if (!c) _u(this, r, s, o);
      else if (
        f !== this._tTime ||
        !r ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((h = f), (v = this.timeline), this._repeat)) {
          if (((p = c + this._rDelay), this._repeat < -1 && u)) return this.totalTime(p * 100 + r, s, o);
          if (
            ((h = Re(f % p)),
            f === l
              ? ((m = this._repeat), (h = c))
              : ((m = ~~(f / p)), m && m === Re(f / p) && ((h = c), m--), h > c && (h = c)),
            (_ = this._yoyo && m & 1),
            _ && ((w = this._yEase), (h = c - h)),
            (y = xr(this._tTime, p)),
            h === a && !o && this._initted && m === y)
          )
            return (this._tTime = f), this;
          m !== y &&
            (v && this._yEase && Ua(v, _),
            this.vars.repeatRefresh &&
              !_ &&
              !this._lock &&
              this._time !== c &&
              this._initted &&
              ((this._lock = o = 1), (this.render(Re(p * m), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (La(this, u ? r : h, o, s, f)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && m !== y)) return this;
          if (c !== this._dur) return this.render(r, s, o);
        }
        if (
          ((this._tTime = f),
          (this._time = h),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = g = (w || this._ease)(h / c)),
          this._from && (this.ratio = g = 1 - g),
          h && !a && !s && !m && (Ct(this, 'onStart'), this._tTime !== f))
        )
          return this;
        for (d = this._pt; d; ) d.r(g, d.d), (d = d._next);
        (v && v.render(r < 0 ? r : !h && _ ? -ne : v._dur * v._ease(h / this._dur), s, o)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate && !s && (u && Gn(this, r, s, o), Ct(this, 'onUpdate')),
          this._repeat && m !== y && this.vars.onRepeat && !s && this.parent && Ct(this, 'onRepeat'),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (u && !this._onUpdate && Gn(this, r, !0, !0),
            (r || !c) && ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) && Si(this, 1),
            !s &&
              !(u && !a) &&
              (f || a || _) &&
              (Ct(this, f === l ? 'onComplete' : 'onReverseComplete', !0),
              this._prom && !(f < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (i.targets = function () {
      return this._targets;
    }),
    (i.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        n.prototype.invalidate.call(this, r)
      );
    }),
    (i.resetTo = function (r, s, o, a, l) {
      ts || Mt.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || to(this, c),
        (u = this._ease(c / this._dur)),
        Nu(this, r, s, o, a, u, c, l)
          ? this.resetTo(r, s, o, a, 1)
          : (Bs(this, 0),
            this.parent || Oa(this._dp, this, '_first', '_last', this._dp._sort ? '_start' : 0),
            this.render(0))
      );
    }),
    (i.kill = function (r, s) {
      if ((s === void 0 && (s = 'all'), !r && (!s || s === 'all')))
        return (this._lazy = this._pt = 0), this.parent ? Jr(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, s, Ci && Ci.vars.overwrite !== !0)._first || Jr(this),
          this.parent && o !== this.timeline.totalDuration() && Sr(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = r ? Bt(r) : a,
        c = this._ptLookup,
        u = this._pt,
        f,
        h,
        d,
        m,
        p,
        y,
        _;
      if ((!s || s === 'all') && pu(a, l)) return s === 'all' && (this._pt = 0), Jr(this);
      for (
        f = this._op = this._op || [],
          s !== 'all' &&
            (ze(s) &&
              ((p = {}),
              ht(s, function (g) {
                return (p[g] = 1);
              }),
              (s = p)),
            (s = Bu(a, s))),
          _ = a.length;
        _--;

      )
        if (~l.indexOf(a[_])) {
          (h = c[_]), s === 'all' ? ((f[_] = s), (m = h), (d = {})) : ((d = f[_] = f[_] || {}), (m = s));
          for (p in m)
            (y = h && h[p]),
              y && ((!('kill' in y.d) || y.d.kill(p) === !0) && zs(this, y, '_pt'), delete h[p]),
              d !== 'all' && (d[p] = 1);
        }
      return this._initted && !this._pt && u && Jr(this), this;
    }),
    (e.to = function (r, s) {
      return new e(r, s, arguments[2]);
    }),
    (e.from = function (r, s) {
      return Kr(1, arguments);
    }),
    (e.delayedCall = function (r, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (r, s, o) {
      return Kr(2, arguments);
    }),
    (e.set = function (r, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
    }),
    (e.killTweensOf = function (r, s, o) {
      return de.killTweensOf(r, s, o);
    }),
    e
  );
})(is);
Rt(Ce.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  ht('staggerTo,staggerFrom,staggerFromTo', function (n) {
    Ce[n] = function () {
      var e = new Ze(),
        i = Xn.call(arguments, 0);
      return i.splice(n === 'staggerFromTo' ? 5 : 4, 0, 0), e[n].apply(e, i);
    };
  });
var io = function (e, i, t) {
    return (e[i] = t);
  },
  tl = function (e, i, t) {
    return e[i](t);
  },
  Wu = function (e, i, t, r) {
    return e[i](r.fp, t);
  },
  Vu = function (e, i, t) {
    return e.setAttribute(i, t);
  },
  ro = function (e, i) {
    return _e(e[i]) ? tl : Dn(e[i]) && e.setAttribute ? Vu : io;
  },
  il = function (e, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e6) / 1e6, i);
  },
  qu = function (e, i) {
    return i.set(i.t, i.p, !!(i.s + i.c * e), i);
  },
  rl = function (e, i) {
    var t = i._pt,
      r = '';
    if (!e && i.b) r = i.b;
    else if (e === 1 && i.e) r = i.e;
    else {
      for (; t; ) (r = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + r), (t = t._next);
      r += i.c;
    }
    i.set(i.t, i.p, r, i);
  },
  so = function (e, i) {
    for (var t = i._pt; t; ) t.r(e, t.d), (t = t._next);
  },
  $u = function (e, i, t, r) {
    for (var s = this._pt, o; s; ) (o = s._next), s.p === r && s.modifier(e, i, t), (s = o);
  },
  Hu = function (e) {
    for (var i = this._pt, t, r; i; )
      (r = i._next), (i.p === e && !i.op) || i.op === e ? zs(this, i, '_pt') : i.dep || (t = 1), (i = r);
    return !t;
  },
  Gu = function (e, i, t, r) {
    r.mSet(e, i, r.m.call(r.tween, t, r.mt), r);
  },
  sl = function (e) {
    for (var i = e._pt, t, r, s, o; i; ) {
      for (t = i._next, r = s; r && r.pr > i.pr; ) r = r._next;
      (i._prev = r ? r._prev : o) ? (i._prev._next = i) : (s = i), (i._next = r) ? (r._prev = i) : (o = i), (i = t);
    }
    e._pt = s;
  },
  pt = (function () {
    function n(i, t, r, s, o, a, l, c, u) {
      (this.t = t),
        (this.s = s),
        (this.c = o),
        (this.p = r),
        (this.r = a || il),
        (this.d = l || this),
        (this.set = c || io),
        (this.pr = u || 0),
        (this._next = i),
        i && (i._prev = this);
    }
    var e = n.prototype;
    return (
      (e.modifier = function (t, r, s) {
        (this.mSet = this.mSet || this.set), (this.set = Gu), (this.m = t), (this.mt = s), (this.tween = r);
      }),
      n
    );
  })();
ht(
  $n +
    'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
  function (n) {
    return (Wn[n] = 1);
  }
),
  (Tt.TweenMax = Tt.TweenLite = Ce),
  (Tt.TimelineLite = Tt.TimelineMax = Ze),
  (de = new Ze({ sortChildren: !1, defaults: yr, autoRemoveChildren: !0, id: 'root', smoothChildTiming: !0 })),
  (St.stringFilter = Xa);
var er = [],
  Fs = {},
  Yu = [],
  nl = 0,
  Xu = 0,
  no = function (e) {
    return (Fs[e] || Yu).map(function (i) {
      return i();
    });
  },
  oo = function () {
    var e = Date.now(),
      i = [];
    e - nl > 2 &&
      (no('matchMediaInit'),
      er.forEach(function (t) {
        var r = t.queries,
          s = t.conditions,
          o,
          a,
          l,
          c;
        for (a in r) (o = zt.matchMedia(r[a]).matches), o && (l = 1), o !== s[a] && ((s[a] = o), (c = 1));
        c && (t.revert(), l && i.push(t));
      }),
      no('matchMediaRevert'),
      i.forEach(function (t) {
        return t.onMatch(t, function (r) {
          return t.add(null, r);
        });
      }),
      (nl = e),
      no('matchMedia'));
  },
  ol = (function () {
    function n(i, t) {
      (this.selector = t && jn(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Xu++),
        i && this.add(i);
    }
    var e = n.prototype;
    return (
      (e.add = function (t, r, s) {
        _e(t) && ((s = r), (r = t), (t = _e));
        var o = this,
          a = function () {
            var c = ve,
              u = o.selector,
              f;
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = jn(s)),
              (ve = o),
              (f = r.apply(o, arguments)),
              _e(f) && o._r.push(f),
              (ve = c),
              (o.selector = u),
              (o.isReverted = !1),
              f
            );
          };
        return (
          (o.last = a),
          t === _e
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : t
            ? (o[t] = a)
            : a
        );
      }),
      (e.ignore = function (t) {
        var r = ve;
        (ve = null), t(this), (ve = r);
      }),
      (e.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof n
              ? t.push.apply(t, r.getTweens())
              : r instanceof Ce && !(r.parent && r.parent.data === 'nested') && t.push(r);
          }),
          t
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (t, r) {
        var s = this;
        if (
          (t
            ? (function () {
                for (var a = s.getTweens(), l = s.data.length, c; l--; )
                  (c = s.data[l]),
                    c.data === 'isFlip' &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (u) {
                        return a.splice(a.indexOf(u), 1);
                      }));
                for (
                  a
                    .map(function (u) {
                      return {
                        g: u._dur || u._delay || (u._sat && !u._sat.vars.immediateRender) ? u.globalTime(0) : -1 / 0,
                        t: u,
                      };
                    })
                    .sort(function (u, f) {
                      return f.g - u.g || -1 / 0;
                    })
                    .forEach(function (u) {
                      return u.t.revert(t);
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof Ze
                      ? c.data !== 'nested' && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof Ce) && c.revert && c.revert(t);
                s._r.forEach(function (u) {
                  return u(t, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var o = er.length; o--; ) er[o].id === this.id && er.splice(o, 1);
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      n
    );
  })(),
  ju = (function () {
    function n(i) {
      (this.contexts = []), (this.scope = i);
    }
    var e = n.prototype;
    return (
      (e.add = function (t, r, s) {
        ii(t) || (t = { matches: t });
        var o = new ol(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          u;
        ve && !o.selector && (o.selector = ve.selector),
          this.contexts.push(o),
          (r = o.add('onMatch', r)),
          (o.queries = t);
        for (c in t)
          c === 'all'
            ? (u = 1)
            : ((l = zt.matchMedia(t[c])),
              l &&
                (er.indexOf(o) < 0 && er.push(o),
                (a[c] = l.matches) && (u = 1),
                l.addListener ? l.addListener(oo) : l.addEventListener('change', oo)));
        return (
          u &&
            r(o, function (f) {
              return o.add(null, f);
            }),
          this
        );
      }),
      (e.revert = function (t) {
        this.kill(t || {});
      }),
      (e.kill = function (t) {
        this.contexts.forEach(function (r) {
          return r.kill(t, !0);
        });
      }),
      n
    );
  })(),
  Ws = {
    registerPlugin: function () {
      for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++) i[t] = arguments[t];
      i.forEach(function (r) {
        return $a(r);
      });
    },
    timeline: function (e) {
      return new Ze(e);
    },
    getTweensOf: function (e, i) {
      return de.getTweensOf(e, i);
    },
    getProperty: function (e, i, t, r) {
      ze(e) && (e = Bt(e)[0]);
      var s = Ui(e || {}).get,
        o = t ? Ca : Ea;
      return (
        t === 'native' && (t = ''),
        e &&
          (i
            ? o(((Et[i] && Et[i].get) || s)(e, i, t, r))
            : function (a, l, c) {
                return o(((Et[a] && Et[a].get) || s)(e, a, l, c));
              })
      );
    },
    quickSetter: function (e, i, t) {
      if (((e = Bt(e)), e.length > 1)) {
        var r = e.map(function (u) {
            return mt.quickSetter(u, i, t);
          }),
          s = r.length;
        return function (u) {
          for (var f = s; f--; ) r[f](u);
        };
      }
      e = e[0] || {};
      var o = Et[i],
        a = Ui(e),
        l = (a.harness && (a.harness.aliases || {})[i]) || i,
        c = o
          ? function (u) {
              var f = new o();
              (Tr._pt = 0), f.init(e, t ? u + t : u, Tr, 0, [e]), f.render(1, f), Tr._pt && so(1, Tr);
            }
          : a.set(e, l);
      return o
        ? c
        : function (u) {
            return c(e, l, t ? u + t : u, a, 1);
          };
    },
    quickTo: function (e, i, t) {
      var r,
        s = mt.to(e, Ki(((r = {}), (r[i] = '+=0.1'), (r.paused = !0), r), t || {})),
        o = function (l, c, u) {
          return s.resetTo(i, l, c, u);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return de.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Zi(e.ease, yr.ease)), Ma(yr, e || {});
    },
    config: function (e) {
      return Ma(St, e || {});
    },
    registerEffect: function (e) {
      var i = e.name,
        t = e.effect,
        r = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (r || '').split(',').forEach(function (a) {
        return a && !Et[a] && !Tt[a] && Xr(i + ' effect requires ' + a + ' plugin.');
      }),
        (qn[i] = function (a, l, c) {
          return t(Bt(a), Rt(l || {}, s), c);
        }),
        o &&
          (Ze.prototype[i] = function (a, l, c) {
            return this.add(qn[i](a, ii(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, i) {
      K[e] = Zi(i);
    },
    parseEase: function (e, i) {
      return arguments.length ? Zi(e, i) : K;
    },
    getById: function (e) {
      return de.getById(e);
    },
    exportRoot: function (e, i) {
      e === void 0 && (e = {});
      var t = new Ze(e),
        r,
        s;
      for (
        t.smoothChildTiming = ft(e.smoothChildTiming),
          de.remove(t),
          t._dp = 0,
          t._time = t._tTime = de._time,
          r = de._first;
        r;

      )
        (s = r._next),
          (i || !(!r._dur && r instanceof Ce && r.vars.onComplete === r._targets[0])) && ri(t, r, r._start - r._delay),
          (r = s);
      return ri(de, t, 0), t;
    },
    context: function (e, i) {
      return e ? new ol(e, i) : ve;
    },
    matchMedia: function (e) {
      return new ju(e);
    },
    matchMediaRefresh: function () {
      return (
        er.forEach(function (e) {
          var i = e.conditions,
            t,
            r;
          for (r in i) i[r] && ((i[r] = !1), (t = 1));
          t && e.revert();
        }) || oo()
      );
    },
    addEventListener: function (e, i) {
      var t = Fs[e] || (Fs[e] = []);
      ~t.indexOf(i) || t.push(i);
    },
    removeEventListener: function (e, i) {
      var t = Fs[e],
        r = t && t.indexOf(i);
      r >= 0 && t.splice(r, 1);
    },
    utils: {
      wrap: Cu,
      wrapYoyo: Mu,
      distribute: Ra,
      random: Ba,
      snap: Na,
      normalize: Eu,
      getUnit: je,
      clamp: bu,
      splitColor: Ha,
      toArray: Bt,
      selector: jn,
      mapRange: Wa,
      pipe: Su,
      unitize: Tu,
      interpolate: Ou,
      shuffle: za,
    },
    install: ya,
    effects: qn,
    ticker: Mt,
    updateRoot: Ze.updateRoot,
    plugins: Et,
    globalTimeline: de,
    core: {
      PropTween: pt,
      globals: wa,
      Tween: Ce,
      Timeline: Ze,
      Animation: is,
      getCache: Ui,
      _removeLinkedListItem: zs,
      reverting: function () {
        return Ye;
      },
      context: function (e) {
        return e && ve && (ve.data.push(e), (e._ctx = ve)), ve;
      },
      suppressOverwrites: function (e) {
        return (kn = e);
      },
    },
  };
ht('to,from,fromTo,delayedCall,set,killTweensOf', function (n) {
  return (Ws[n] = Ce[n]);
}),
  Mt.add(Ze.updateRoot),
  (Tr = Ws.to({}, { duration: 0 }));
var Uu = function (e, i) {
    for (var t = e._pt; t && t.p !== i && t.op !== i && t.fp !== i; ) t = t._next;
    return t;
  },
  Ku = function (e, i) {
    var t = e._targets,
      r,
      s,
      o;
    for (r in i)
      for (s = t.length; s--; )
        (o = e._ptLookup[s][r]),
          o && (o = o.d) && (o._pt && (o = Uu(o, r)), o && o.modifier && o.modifier(i[r], e, t[s], r));
  },
  ao = function (e, i) {
    return {
      name: e,
      rawVars: 1,
      init: function (r, s, o) {
        o._onInit = function (a) {
          var l, c;
          if (
            (ze(s) &&
              ((l = {}),
              ht(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            i)
          ) {
            l = {};
            for (c in s) l[c] = i(s[c]);
            s = l;
          }
          Ku(a, s);
        };
      },
    };
  },
  mt =
    Ws.registerPlugin(
      {
        name: 'attr',
        init: function (e, i, t, r, s) {
          var o, a, l;
          this.tween = t;
          for (o in i)
            (l = e.getAttribute(o) || ''),
              (a = this.add(e, 'setAttribute', (l || 0) + '', i[o], r, s, 0, 0, o)),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, i) {
          for (var t = i._pt; t; ) Ye ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), (t = t._next);
        },
      },
      {
        name: 'endArray',
        init: function (e, i) {
          for (var t = i.length; t--; ) this.add(e, t, e[t] || 0, i[t], 0, 0, 0, 0, 0, 1);
        },
      },
      ao('roundProps', Un),
      ao('modifiers'),
      ao('snap', Na)
    ) || Ws;
(Ce.version = Ze.version = mt.version = '3.12.4'),
  (_a = 1),
  In() && Er(),
  K.Power0,
  K.Power1,
  K.Power2,
  K.Power3,
  K.Power4,
  K.Linear,
  K.Quad,
  K.Cubic,
  K.Quart,
  K.Quint,
  K.Strong,
  K.Elastic,
  K.Back,
  K.SteppedEase,
  K.Bounce,
  K.Sine,
  K.Expo,
  K.Circ;
/*!
 * CSSPlugin 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var al,
  Mi,
  Cr,
  lo,
  tr,
  ll,
  co,
  Qu = function () {
    return typeof window < 'u';
  },
  mi = {},
  ir = 180 / Math.PI,
  Mr = Math.PI / 180,
  Or = Math.atan2,
  cl = 1e8,
  uo = /([A-Z])/g,
  Zu = /(left|right|width|margin|padding|x)/i,
  Ju = /[\s,\(]\S/,
  si = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
  fo = function (e, i) {
    return i.set(i.t, i.p, Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
  },
  ed = function (e, i) {
    return i.set(i.t, i.p, e === 1 ? i.e : Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u, i);
  },
  td = function (e, i) {
    return i.set(i.t, i.p, e ? Math.round((i.s + i.c * e) * 1e4) / 1e4 + i.u : i.b, i);
  },
  id = function (e, i) {
    var t = i.s + i.c * e;
    i.set(i.t, i.p, ~~(t + (t < 0 ? -0.5 : 0.5)) + i.u, i);
  },
  ul = function (e, i) {
    return i.set(i.t, i.p, e ? i.e : i.b, i);
  },
  dl = function (e, i) {
    return i.set(i.t, i.p, e !== 1 ? i.b : i.e, i);
  },
  rd = function (e, i, t) {
    return (e.style[i] = t);
  },
  sd = function (e, i, t) {
    return e.style.setProperty(i, t);
  },
  nd = function (e, i, t) {
    return (e._gsap[i] = t);
  },
  od = function (e, i, t) {
    return (e._gsap.scaleX = e._gsap.scaleY = t);
  },
  ad = function (e, i, t, r, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = t), o.renderTransform(s, o);
  },
  ld = function (e, i, t, r, s) {
    var o = e._gsap;
    (o[i] = t), o.renderTransform(s, o);
  },
  fe = 'transform',
  gt = fe + 'Origin',
  cd = function n(e, i) {
    var t = this,
      r = this.target,
      s = r.style,
      o = r._gsap;
    if (e in mi && s) {
      if (((this.tfm = this.tfm || {}), e !== 'transform'))
        (e = si[e] || e),
          ~e.indexOf(',')
            ? e.split(',').forEach(function (a) {
                return (t.tfm[a] = gi(r, a));
              })
            : (this.tfm[e] = o.x ? o[e] : gi(r, e)),
          e === gt && (this.tfm.zOrigin = o.zOrigin);
      else
        return si.transform.split(',').forEach(function (a) {
          return n.call(t, a, i);
        });
      if (this.props.indexOf(fe) >= 0) return;
      o.svg && ((this.svgo = r.getAttribute('data-svg-origin')), this.props.push(gt, i, '')), (e = fe);
    }
    (s || i) && this.props.push(e, i, s[e]);
  },
  fl = function (e) {
    e.translate && (e.removeProperty('translate'), e.removeProperty('scale'), e.removeProperty('rotate'));
  },
  ud = function () {
    var e = this.props,
      i = this.target,
      t = i.style,
      r = i._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (i[e[s]] = e[s + 2])
        : e[s + 2]
        ? (t[e[s]] = e[s + 2])
        : t.removeProperty(e[s].substr(0, 2) === '--' ? e[s] : e[s].replace(uo, '-$1').toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) r[o] = this.tfm[o];
      r.svg && (r.renderTransform(), i.setAttribute('data-svg-origin', this.svgo || '')),
        (s = co()),
        (!s || !s.isStart) &&
          !t[fe] &&
          (fl(t),
          r.zOrigin && t[gt] && ((t[gt] += ' ' + r.zOrigin + 'px'), (r.zOrigin = 0), r.renderTransform()),
          (r.uncache = 1));
    }
  },
  hl = function (e, i) {
    var t = { target: e, props: [], revert: ud, save: cd };
    return (
      e._gsap || mt.core.getCache(e),
      i &&
        i.split(',').forEach(function (r) {
          return t.save(r);
        }),
      t
    );
  },
  pl,
  ho = function (e, i) {
    var t = Mi.createElementNS
      ? Mi.createElementNS((i || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), e)
      : Mi.createElement(e);
    return t && t.style ? t : Mi.createElement(e);
  },
  ni = function n(e, i, t) {
    var r = getComputedStyle(e);
    return (
      r[i] ||
      r.getPropertyValue(i.replace(uo, '-$1').toLowerCase()) ||
      r.getPropertyValue(i) ||
      (!t && n(e, Pr(i) || i, 1)) ||
      ''
    );
  },
  ml = 'O,Moz,ms,Ms,Webkit'.split(','),
  Pr = function (e, i, t) {
    var r = i || tr,
      s = r.style,
      o = 5;
    if (e in s && !t) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(ml[o] + e in s); );
    return o < 0 ? null : (o === 3 ? 'ms' : o >= 0 ? ml[o] : '') + e;
  },
  po = function () {
    Qu() &&
      window.document &&
      ((al = window),
      (Mi = al.document),
      (Cr = Mi.documentElement),
      (tr = ho('div') || { style: {} }),
      ho('div'),
      (fe = Pr(fe)),
      (gt = fe + 'Origin'),
      (tr.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
      (pl = !!Pr('perspective')),
      (co = mt.core.reverting),
      (lo = 1));
  },
  mo = function n(e) {
    var i = ho(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) || 'http://www.w3.org/2000/svg'
      ),
      t = this.parentNode,
      r = this.nextSibling,
      s = this.style.cssText,
      o;
    if ((Cr.appendChild(i), i.appendChild(this), (this.style.display = 'block'), e))
      try {
        (o = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = n);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return t && (r ? t.insertBefore(this, r) : t.appendChild(this)), Cr.removeChild(i), (this.style.cssText = s), o;
  },
  gl = function (e, i) {
    for (var t = i.length; t--; ) if (e.hasAttribute(i[t])) return e.getAttribute(i[t]);
  },
  vl = function (e) {
    var i;
    try {
      i = e.getBBox();
    } catch {
      i = mo.call(e, !0);
    }
    return (
      (i && (i.width || i.height)) || e.getBBox === mo || (i = mo.call(e, !0)),
      i && !i.width && !i.x && !i.y
        ? { x: +gl(e, ['x', 'cx', 'x1']) || 0, y: +gl(e, ['y', 'cy', 'y1']) || 0, width: 0, height: 0 }
        : i
    );
  },
  _l = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && vl(e));
  },
  rr = function (e, i) {
    if (i) {
      var t = e.style,
        r;
      i in mi && i !== gt && (i = fe),
        t.removeProperty
          ? ((r = i.substr(0, 2)),
            (r === 'ms' || i.substr(0, 6) === 'webkit') && (i = '-' + i),
            t.removeProperty(r === '--' ? i : i.replace(uo, '-$1').toLowerCase()))
          : t.removeAttribute(i);
    }
  },
  Oi = function (e, i, t, r, s, o) {
    var a = new pt(e._pt, i, t, 0, 1, o ? dl : ul);
    return (e._pt = a), (a.b = r), (a.e = s), e._props.push(t), a;
  },
  yl = { deg: 1, rad: 1, turn: 1 },
  dd = { grid: 1, flex: 1 },
  Pi = function n(e, i, t, r) {
    var s = parseFloat(t) || 0,
      o = (t + '').trim().substr((s + '').length) || 'px',
      a = tr.style,
      l = Zu.test(i),
      c = e.tagName.toLowerCase() === 'svg',
      u = (c ? 'client' : 'offset') + (l ? 'Width' : 'Height'),
      f = 100,
      h = r === 'px',
      d = r === '%',
      m,
      p,
      y,
      _;
    if (r === o || !s || yl[r] || yl[o]) return s;
    if (
      (o !== 'px' && !h && (s = n(e, i, t, 'px')),
      (_ = e.getCTM && _l(e)),
      (d || o === '%') && (mi[i] || ~i.indexOf('adius')))
    )
      return (m = _ ? e.getBBox()[l ? 'width' : 'height'] : e[u]), xe(d ? (s / m) * f : (s / 100) * m);
    if (
      ((a[l ? 'width' : 'height'] = f + (h ? o : r)),
      (p = ~i.indexOf('adius') || (r === 'em' && e.appendChild && !c) ? e : e.parentNode),
      _ && (p = (e.ownerSVGElement || {}).parentNode),
      (!p || p === Mi || !p.appendChild) && (p = Mi.body),
      (y = p._gsap),
      y && d && y.width && l && y.time === Mt.time && !y.uncache)
    )
      return xe((s / y.width) * f);
    if (d && (i === 'height' || i === 'width')) {
      var g = e.style[i];
      (e.style[i] = f + r), (m = e[u]), g ? (e.style[i] = g) : rr(e, i);
    } else
      (d || o === '%') && !dd[ni(p, 'display')] && (a.position = ni(e, 'position')),
        p === e && (a.position = 'static'),
        p.appendChild(tr),
        (m = tr[u]),
        p.removeChild(tr),
        (a.position = 'absolute');
    return (
      l && d && ((y = Ui(p)), (y.time = Mt.time), (y.width = p[u])), xe(h ? (m * s) / f : m && s ? (f / m) * s : 0)
    );
  },
  gi = function (e, i, t, r) {
    var s;
    return (
      lo || po(),
      i in si && i !== 'transform' && ((i = si[i]), ~i.indexOf(',') && (i = i.split(',')[0])),
      mi[i] && i !== 'transform'
        ? ((s = ns(e, r)),
          (s = i !== 'transformOrigin' ? s[i] : s.svg ? s.origin : qs(ni(e, gt)) + ' ' + s.zOrigin + 'px'))
        : ((s = e.style[i]),
          (!s || s === 'auto' || r || ~(s + '').indexOf('calc(')) &&
            (s = (Vs[i] && Vs[i](e, i, t)) || ni(e, i) || Sa(e, i) || (i === 'opacity' ? 1 : 0))),
      t && !~(s + '').trim().indexOf(' ') ? Pi(e, i, s, t) + t : s
    );
  },
  fd = function (e, i, t, r) {
    if (!t || t === 'none') {
      var s = Pr(i, e, 1),
        o = s && ni(e, s, 1);
      o && o !== t ? ((i = s), (t = o)) : i === 'borderColor' && (t = ni(e, 'borderTopColor'));
    }
    var a = new pt(this._pt, e.style, i, 0, 1, rl),
      l = 0,
      c = 0,
      u,
      f,
      h,
      d,
      m,
      p,
      y,
      _,
      g,
      v,
      w,
      b;
    if (
      ((a.b = t),
      (a.e = r),
      (t += ''),
      (r += ''),
      r === 'auto' && ((p = e.style[i]), (e.style[i] = r), (r = ni(e, i) || r), p ? (e.style[i] = p) : rr(e, i)),
      (u = [t, r]),
      Xa(u),
      (t = u[0]),
      (r = u[1]),
      (h = t.match(wr) || []),
      (b = r.match(wr) || []),
      b.length)
    ) {
      for (; (f = wr.exec(r)); )
        (y = f[0]),
          (g = r.substring(l, f.index)),
          m ? (m = (m + 1) % 5) : (g.substr(-5) === 'rgba(' || g.substr(-5) === 'hsla(') && (m = 1),
          y !== (p = h[c++] || '') &&
            ((d = parseFloat(p) || 0),
            (w = p.substr((d + '').length)),
            y.charAt(1) === '=' && (y = br(d, y) + w),
            (_ = parseFloat(y)),
            (v = y.substr((_ + '').length)),
            (l = wr.lastIndex - v.length),
            v || ((v = v || St.units[i] || w), l === r.length && ((r += v), (a.e += v))),
            w !== v && (d = Pi(e, i, p, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: g || c === 1 ? g : ',',
              s: d,
              c: _ - d,
              m: (m && m < 4) || i === 'zIndex' ? Math.round : 0,
            }));
      a.c = l < r.length ? r.substring(l, r.length) : '';
    } else a.r = i === 'display' && r === 'none' ? dl : ul;
    return ga.test(r) && (a.e = 0), (this._pt = a), a;
  },
  wl = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
  hd = function (e) {
    var i = e.split(' '),
      t = i[0],
      r = i[1] || '50%';
    return (
      (t === 'top' || t === 'bottom' || r === 'left' || r === 'right') && ((e = t), (t = r), (r = e)),
      (i[0] = wl[t] || t),
      (i[1] = wl[r] || r),
      i.join(' ')
    );
  },
  pd = function (e, i) {
    if (i.tween && i.tween._time === i.tween._dur) {
      var t = i.t,
        r = t.style,
        s = i.u,
        o = t._gsap,
        a,
        l,
        c;
      if (s === 'all' || s === !0) (r.cssText = ''), (l = 1);
      else
        for (s = s.split(','), c = s.length; --c > -1; )
          (a = s[c]), mi[a] && ((l = 1), (a = a === 'transformOrigin' ? gt : fe)), rr(t, a);
      l && (rr(t, fe), o && (o.svg && t.removeAttribute('transform'), ns(t, 1), (o.uncache = 1), fl(r)));
    }
  },
  Vs = {
    clearProps: function (e, i, t, r, s) {
      if (s.data !== 'isFromStart') {
        var o = (e._pt = new pt(e._pt, i, t, 0, 0, pd));
        return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(t), 1;
      }
    },
  },
  ss = [1, 0, 0, 1, 0, 0],
  bl = {},
  xl = function (e) {
    return e === 'matrix(1, 0, 0, 1, 0, 0)' || e === 'none' || !e;
  },
  Sl = function (e) {
    var i = ni(e, fe);
    return xl(i) ? ss : i.substr(7).match(ma).map(xe);
  },
  go = function (e, i) {
    var t = e._gsap || Ui(e),
      r = e.style,
      s = Sl(e),
      o,
      a,
      l,
      c;
    return t.svg && e.getAttribute('transform')
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(',') === '1,0,0,1,0,0' ? ss : s)
      : (s === ss &&
          !e.offsetParent &&
          e !== Cr &&
          !t.svg &&
          ((l = r.display),
          (r.display = 'block'),
          (o = e.parentNode),
          (!o || !e.offsetParent) && ((c = 1), (a = e.nextElementSibling), Cr.appendChild(e)),
          (s = Sl(e)),
          l ? (r.display = l) : rr(e, 'display'),
          c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : Cr.removeChild(e))),
        i && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  vo = function (e, i, t, r, s, o) {
    var a = e._gsap,
      l = s || go(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      f = a.xOffset || 0,
      h = a.yOffset || 0,
      d = l[0],
      m = l[1],
      p = l[2],
      y = l[3],
      _ = l[4],
      g = l[5],
      v = i.split(' '),
      w = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      E,
      M,
      C;
    t
      ? l !== ss &&
        (E = d * y - m * p) &&
        ((M = w * (y / E) + b * (-p / E) + (p * g - y * _) / E),
        (C = w * (-m / E) + b * (d / E) - (d * g - m * _) / E),
        (w = M),
        (b = C))
      : ((x = vl(e)),
        (w = x.x + (~v[0].indexOf('%') ? (w / 100) * x.width : w)),
        (b = x.y + (~(v[1] || v[0]).indexOf('%') ? (b / 100) * x.height : b))),
      r || (r !== !1 && a.smooth)
        ? ((_ = w - c), (g = b - u), (a.xOffset = f + (_ * d + g * p) - _), (a.yOffset = h + (_ * m + g * y) - g))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = w),
      (a.yOrigin = b),
      (a.smooth = !!r),
      (a.origin = i),
      (a.originIsAbsolute = !!t),
      (e.style[gt] = '0px 0px'),
      o &&
        (Oi(o, a, 'xOrigin', c, w),
        Oi(o, a, 'yOrigin', u, b),
        Oi(o, a, 'xOffset', f, a.xOffset),
        Oi(o, a, 'yOffset', h, a.yOffset)),
      e.setAttribute('data-svg-origin', w + ' ' + b);
  },
  ns = function (e, i) {
    var t = e._gsap || new Qa(e);
    if ('x' in t && !i && !t.uncache) return t;
    var r = e.style,
      s = t.scaleX < 0,
      o = 'px',
      a = 'deg',
      l = getComputedStyle(e),
      c = ni(e, gt) || '0',
      u,
      f,
      h,
      d,
      m,
      p,
      y,
      _,
      g,
      v,
      w,
      b,
      x,
      E,
      M,
      C,
      T,
      A,
      O,
      k,
      L,
      D,
      N,
      B,
      I,
      G,
      S,
      q,
      le,
      ye,
      re,
      pe;
    return (
      (u = f = h = p = y = _ = g = v = w = 0),
      (d = m = 1),
      (t.svg = !!(e.getCTM && _l(e))),
      l.translate &&
        ((l.translate !== 'none' || l.scale !== 'none' || l.rotate !== 'none') &&
          (r[fe] =
            (l.translate !== 'none'
              ? 'translate3d(' + (l.translate + ' 0 0').split(' ').slice(0, 3).join(', ') + ') '
              : '') +
            (l.rotate !== 'none' ? 'rotate(' + l.rotate + ') ' : '') +
            (l.scale !== 'none' ? 'scale(' + l.scale.split(' ').join(',') + ') ' : '') +
            (l[fe] !== 'none' ? l[fe] : '')),
        (r.scale = r.rotate = r.translate = 'none')),
      (E = go(e, t.svg)),
      t.svg &&
        (t.uncache
          ? ((I = e.getBBox()), (c = t.xOrigin - I.x + 'px ' + (t.yOrigin - I.y) + 'px'), (B = ''))
          : (B = !i && e.getAttribute('data-svg-origin')),
        vo(e, B || c, !!B || t.originIsAbsolute, t.smooth !== !1, E)),
      (b = t.xOrigin || 0),
      (x = t.yOrigin || 0),
      E !== ss &&
        ((A = E[0]),
        (O = E[1]),
        (k = E[2]),
        (L = E[3]),
        (u = D = E[4]),
        (f = N = E[5]),
        E.length === 6
          ? ((d = Math.sqrt(A * A + O * O)),
            (m = Math.sqrt(L * L + k * k)),
            (p = A || O ? Or(O, A) * ir : 0),
            (g = k || L ? Or(k, L) * ir + p : 0),
            g && (m *= Math.abs(Math.cos(g * Mr))),
            t.svg && ((u -= b - (b * A + x * k)), (f -= x - (b * O + x * L))))
          : ((pe = E[6]),
            (ye = E[7]),
            (S = E[8]),
            (q = E[9]),
            (le = E[10]),
            (re = E[11]),
            (u = E[12]),
            (f = E[13]),
            (h = E[14]),
            (M = Or(pe, le)),
            (y = M * ir),
            M &&
              ((C = Math.cos(-M)),
              (T = Math.sin(-M)),
              (B = D * C + S * T),
              (I = N * C + q * T),
              (G = pe * C + le * T),
              (S = D * -T + S * C),
              (q = N * -T + q * C),
              (le = pe * -T + le * C),
              (re = ye * -T + re * C),
              (D = B),
              (N = I),
              (pe = G)),
            (M = Or(-k, le)),
            (_ = M * ir),
            M &&
              ((C = Math.cos(-M)),
              (T = Math.sin(-M)),
              (B = A * C - S * T),
              (I = O * C - q * T),
              (G = k * C - le * T),
              (re = L * T + re * C),
              (A = B),
              (O = I),
              (k = G)),
            (M = Or(O, A)),
            (p = M * ir),
            M &&
              ((C = Math.cos(M)),
              (T = Math.sin(M)),
              (B = A * C + O * T),
              (I = D * C + N * T),
              (O = O * C - A * T),
              (N = N * C - D * T),
              (A = B),
              (D = I)),
            y && Math.abs(y) + Math.abs(p) > 359.9 && ((y = p = 0), (_ = 180 - _)),
            (d = xe(Math.sqrt(A * A + O * O + k * k))),
            (m = xe(Math.sqrt(N * N + pe * pe))),
            (M = Or(D, N)),
            (g = Math.abs(M) > 2e-4 ? M * ir : 0),
            (w = re ? 1 / (re < 0 ? -re : re) : 0)),
        t.svg &&
          ((B = e.getAttribute('transform')),
          (t.forceCSS = e.setAttribute('transform', '') || !xl(ni(e, fe))),
          B && e.setAttribute('transform', B))),
      Math.abs(g) > 90 &&
        Math.abs(g) < 270 &&
        (s
          ? ((d *= -1), (g += p <= 0 ? 180 : -180), (p += p <= 0 ? 180 : -180))
          : ((m *= -1), (g += g <= 0 ? 180 : -180))),
      (i = i || t.uncache),
      (t.x =
        u -
        ((t.xPercent = u && ((!i && t.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * t.xPercent) / 100
          : 0) +
        o),
      (t.y =
        f -
        ((t.yPercent = f && ((!i && t.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * t.yPercent) / 100
          : 0) +
        o),
      (t.z = h + o),
      (t.scaleX = xe(d)),
      (t.scaleY = xe(m)),
      (t.rotation = xe(p) + a),
      (t.rotationX = xe(y) + a),
      (t.rotationY = xe(_) + a),
      (t.skewX = g + a),
      (t.skewY = v + a),
      (t.transformPerspective = w + o),
      (t.zOrigin = parseFloat(c.split(' ')[2]) || (!i && t.zOrigin) || 0) && (r[gt] = qs(c)),
      (t.xOffset = t.yOffset = 0),
      (t.force3D = St.force3D),
      (t.renderTransform = t.svg ? gd : pl ? Tl : md),
      (t.uncache = 0),
      t
    );
  },
  qs = function (e) {
    return (e = e.split(' '))[0] + ' ' + e[1];
  },
  _o = function (e, i, t) {
    var r = je(i);
    return xe(parseFloat(i) + parseFloat(Pi(e, 'x', t + 'px', r))) + r;
  },
  md = function (e, i) {
    (i.z = '0px'), (i.rotationY = i.rotationX = '0deg'), (i.force3D = 0), Tl(e, i);
  },
  sr = '0deg',
  os = '0px',
  nr = ') ',
  Tl = function (e, i) {
    var t = i || this,
      r = t.xPercent,
      s = t.yPercent,
      o = t.x,
      a = t.y,
      l = t.z,
      c = t.rotation,
      u = t.rotationY,
      f = t.rotationX,
      h = t.skewX,
      d = t.skewY,
      m = t.scaleX,
      p = t.scaleY,
      y = t.transformPerspective,
      _ = t.force3D,
      g = t.target,
      v = t.zOrigin,
      w = '',
      b = (_ === 'auto' && e && e !== 1) || _ === !0;
    if (v && (f !== sr || u !== sr)) {
      var x = parseFloat(u) * Mr,
        E = Math.sin(x),
        M = Math.cos(x),
        C;
      (x = parseFloat(f) * Mr),
        (C = Math.cos(x)),
        (o = _o(g, o, E * C * -v)),
        (a = _o(g, a, -Math.sin(x) * -v)),
        (l = _o(g, l, M * C * -v + v));
    }
    y !== os && (w += 'perspective(' + y + nr),
      (r || s) && (w += 'translate(' + r + '%, ' + s + '%) '),
      (b || o !== os || a !== os || l !== os) &&
        (w += l !== os || b ? 'translate3d(' + o + ', ' + a + ', ' + l + ') ' : 'translate(' + o + ', ' + a + nr),
      c !== sr && (w += 'rotate(' + c + nr),
      u !== sr && (w += 'rotateY(' + u + nr),
      f !== sr && (w += 'rotateX(' + f + nr),
      (h !== sr || d !== sr) && (w += 'skew(' + h + ', ' + d + nr),
      (m !== 1 || p !== 1) && (w += 'scale(' + m + ', ' + p + nr),
      (g.style[fe] = w || 'translate(0, 0)');
  },
  gd = function (e, i) {
    var t = i || this,
      r = t.xPercent,
      s = t.yPercent,
      o = t.x,
      a = t.y,
      l = t.rotation,
      c = t.skewX,
      u = t.skewY,
      f = t.scaleX,
      h = t.scaleY,
      d = t.target,
      m = t.xOrigin,
      p = t.yOrigin,
      y = t.xOffset,
      _ = t.yOffset,
      g = t.forceCSS,
      v = parseFloat(o),
      w = parseFloat(a),
      b,
      x,
      E,
      M,
      C;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= Mr),
          (c *= Mr),
          (b = Math.cos(l) * f),
          (x = Math.sin(l) * f),
          (E = Math.sin(l - c) * -h),
          (M = Math.cos(l - c) * h),
          c &&
            ((u *= Mr),
            (C = Math.tan(c - u)),
            (C = Math.sqrt(1 + C * C)),
            (E *= C),
            (M *= C),
            u && ((C = Math.tan(u)), (C = Math.sqrt(1 + C * C)), (b *= C), (x *= C))),
          (b = xe(b)),
          (x = xe(x)),
          (E = xe(E)),
          (M = xe(M)))
        : ((b = f), (M = h), (x = E = 0)),
      ((v && !~(o + '').indexOf('px')) || (w && !~(a + '').indexOf('px'))) &&
        ((v = Pi(d, 'x', o, 'px')), (w = Pi(d, 'y', a, 'px'))),
      (m || p || y || _) && ((v = xe(v + m - (m * b + p * E) + y)), (w = xe(w + p - (m * x + p * M) + _))),
      (r || s) && ((C = d.getBBox()), (v = xe(v + (r / 100) * C.width)), (w = xe(w + (s / 100) * C.height))),
      (C = 'matrix(' + b + ',' + x + ',' + E + ',' + M + ',' + v + ',' + w + ')'),
      d.setAttribute('transform', C),
      g && (d.style[fe] = C);
  },
  vd = function (e, i, t, r, s) {
    var o = 360,
      a = ze(s),
      l = parseFloat(s) * (a && ~s.indexOf('rad') ? ir : 1),
      c = l - r,
      u = r + c + 'deg',
      f,
      h;
    return (
      a &&
        ((f = s.split('_')[1]),
        f === 'short' && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        f === 'cw' && c < 0
          ? (c = ((c + o * cl) % o) - ~~(c / o) * o)
          : f === 'ccw' && c > 0 && (c = ((c - o * cl) % o) - ~~(c / o) * o)),
      (e._pt = h = new pt(e._pt, i, t, r, c, ed)),
      (h.e = u),
      (h.u = 'deg'),
      e._props.push(t),
      h
    );
  },
  El = function (e, i) {
    for (var t in i) e[t] = i[t];
    return e;
  },
  _d = function (e, i, t) {
    var r = El({}, t._gsap),
      s = 'perspective,force3D,transformOrigin,svgOrigin',
      o = t.style,
      a,
      l,
      c,
      u,
      f,
      h,
      d,
      m;
    r.svg
      ? ((c = t.getAttribute('transform')),
        t.setAttribute('transform', ''),
        (o[fe] = i),
        (a = ns(t, 1)),
        rr(t, fe),
        t.setAttribute('transform', c))
      : ((c = getComputedStyle(t)[fe]), (o[fe] = i), (a = ns(t, 1)), (o[fe] = c));
    for (l in mi)
      (c = r[l]),
        (u = a[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((d = je(c)),
          (m = je(u)),
          (f = d !== m ? Pi(t, l, c, m) : parseFloat(c)),
          (h = parseFloat(u)),
          (e._pt = new pt(e._pt, a, l, f, h - f, fo)),
          (e._pt.u = m || 0),
          e._props.push(l));
    El(a, r);
  };
ht('padding,margin,Width,Radius', function (n, e) {
  var i = 'Top',
    t = 'Right',
    r = 'Bottom',
    s = 'Left',
    o = (e < 3 ? [i, t, r, s] : [i + s, i + t, r + t, r + s]).map(function (a) {
      return e < 2 ? n + a : 'border' + a + n;
    });
  Vs[e > 1 ? 'border' + n : n] = function (a, l, c, u, f) {
    var h, d;
    if (arguments.length < 4)
      return (
        (h = o.map(function (m) {
          return gi(a, m, c);
        })),
        (d = h.join(' ')),
        d.split(h[0]).length === 5 ? h[0] : d
      );
    (h = (u + '').split(' ')),
      (d = {}),
      o.forEach(function (m, p) {
        return (d[m] = h[p] = h[p] || h[((p - 1) / 2) | 0]);
      }),
      a.init(l, d, f);
  };
});
var Cl = {
  name: 'css',
  register: po,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, i, t, r, s) {
    var o = this._props,
      a = e.style,
      l = t.vars.startAt,
      c,
      u,
      f,
      h,
      d,
      m,
      p,
      y,
      _,
      g,
      v,
      w,
      b,
      x,
      E,
      M;
    lo || po(), (this.styles = this.styles || hl(e)), (M = this.styles.props), (this.tween = t);
    for (p in i)
      if (p !== 'autoRound' && ((u = i[p]), !(Et[p] && Za(p, i, t, r, e, s)))) {
        if (
          ((d = typeof u),
          (m = Vs[p]),
          d === 'function' && ((u = u.call(t, r, e, s)), (d = typeof u)),
          d === 'string' && ~u.indexOf('random(') && (u = Zr(u)),
          m)
        )
          m(this, e, p, u, t) && (E = 1);
        else if (p.substr(0, 2) === '--')
          (c = (getComputedStyle(e).getPropertyValue(p) + '').trim()),
            (u += ''),
            (Ei.lastIndex = 0),
            Ei.test(c) || ((y = je(c)), (_ = je(u))),
            _ ? y !== _ && (c = Pi(e, p, c, _) + _) : y && (u += y),
            this.add(a, 'setProperty', c, u, r, s, 0, 0, p),
            o.push(p),
            M.push(p, 0, a[p]);
        else if (d !== 'undefined') {
          if (
            (l && p in l
              ? ((c = typeof l[p] == 'function' ? l[p].call(t, r, e, s) : l[p]),
                ze(c) && ~c.indexOf('random(') && (c = Zr(c)),
                je(c + '') || c === 'auto' || (c += St.units[p] || je(gi(e, p)) || ''),
                (c + '').charAt(1) === '=' && (c = gi(e, p)))
              : (c = gi(e, p)),
            (h = parseFloat(c)),
            (g = d === 'string' && u.charAt(1) === '=' && u.substr(0, 2)),
            g && (u = u.substr(2)),
            (f = parseFloat(u)),
            p in si &&
              (p === 'autoAlpha' &&
                (h === 1 && gi(e, 'visibility') === 'hidden' && f && (h = 0),
                M.push('visibility', 0, a.visibility),
                Oi(this, a, 'visibility', h ? 'inherit' : 'hidden', f ? 'inherit' : 'hidden', !f)),
              p !== 'scale' && p !== 'transform' && ((p = si[p]), ~p.indexOf(',') && (p = p.split(',')[0]))),
            (v = p in mi),
            v)
          ) {
            if (
              (this.styles.save(p),
              w ||
                ((b = e._gsap),
                (b.renderTransform && !i.parseTransform) || ns(e, i.parseTransform),
                (x = i.smoothOrigin !== !1 && b.smooth),
                (w = this._pt = new pt(this._pt, a, fe, 0, 1, b.renderTransform, b, 0, -1)),
                (w.dep = 1)),
              p === 'scale')
            )
              (this._pt = new pt(this._pt, b, 'scaleY', b.scaleY, (g ? br(b.scaleY, g + f) : f) - b.scaleY || 0, fo)),
                (this._pt.u = 0),
                o.push('scaleY', p),
                (p += 'X');
            else if (p === 'transformOrigin') {
              M.push(gt, 0, a[gt]),
                (u = hd(u)),
                b.svg
                  ? vo(e, u, 0, x, 0, this)
                  : ((_ = parseFloat(u.split(' ')[2]) || 0),
                    _ !== b.zOrigin && Oi(this, b, 'zOrigin', b.zOrigin, _),
                    Oi(this, a, p, qs(c), qs(u)));
              continue;
            } else if (p === 'svgOrigin') {
              vo(e, u, 1, x, 0, this);
              continue;
            } else if (p in bl) {
              vd(this, b, p, h, g ? br(h, g + u) : u);
              continue;
            } else if (p === 'smoothOrigin') {
              Oi(this, b, 'smooth', b.smooth, u);
              continue;
            } else if (p === 'force3D') {
              b[p] = u;
              continue;
            } else if (p === 'transform') {
              _d(this, u, e);
              continue;
            }
          } else p in a || (p = Pr(p) || p);
          if (v || ((f || f === 0) && (h || h === 0) && !Ju.test(u) && p in a))
            (y = (c + '').substr((h + '').length)),
              f || (f = 0),
              (_ = je(u) || (p in St.units ? St.units[p] : y)),
              y !== _ && (h = Pi(e, p, c, _)),
              (this._pt = new pt(
                this._pt,
                v ? b : a,
                p,
                h,
                (g ? br(h, g + f) : f) - h,
                !v && (_ === 'px' || p === 'zIndex') && i.autoRound !== !1 ? id : fo
              )),
              (this._pt.u = _ || 0),
              y !== _ && _ !== '%' && ((this._pt.b = c), (this._pt.r = td));
          else if (p in a) fd.call(this, e, p, c, g ? g + u : u);
          else if (p in e) this.add(e, p, c || e[p], g ? g + u : u, r, s);
          else if (p !== 'parseTransform') {
            Fn(p, u);
            continue;
          }
          v || (p in a ? M.push(p, 0, a[p]) : M.push(p, 1, c || e[p])), o.push(p);
        }
      }
    E && sl(this);
  },
  render: function (e, i) {
    if (i.tween._time || !co()) for (var t = i._pt; t; ) t.r(e, t.d), (t = t._next);
    else i.styles.revert();
  },
  get: gi,
  aliases: si,
  getSetter: function (e, i, t) {
    var r = si[i];
    return (
      r && r.indexOf(',') < 0 && (i = r),
      i in mi && i !== gt && (e._gsap.x || gi(e, 'x'))
        ? t && ll === t
          ? i === 'scale'
            ? od
            : nd
          : (ll = t || {}) && (i === 'scale' ? ad : ld)
        : e.style && !Dn(e.style[i])
        ? rd
        : ~i.indexOf('-')
        ? sd
        : ro(e, i)
    );
  },
  core: { _removeProperty: rr, _getMatrix: go },
};
(mt.utils.checkPrefix = Pr),
  (mt.core.getStyleSaver = hl),
  (function (n, e, i, t) {
    var r = ht(n + ',' + e + ',' + i, function (s) {
      mi[s] = 1;
    });
    ht(e, function (s) {
      (St.units[s] = 'deg'), (bl[s] = 1);
    }),
      (si[r[13]] = n + ',' + e),
      ht(t, function (s) {
        var o = s.split(':');
        si[o[1]] = r[o[0]];
      });
  })(
    'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
    'rotation,rotationX,rotationY,skewX,skewY',
    'transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
    '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY'
  ),
  ht('x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective', function (n) {
    St.units[n] = 'px';
  }),
  mt.registerPlugin(Cl);
var V = mt.registerPlugin(Cl) || mt;
V.core.Tween;
function Ml(n, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(n, t.key, t);
  }
}
function yd(n, e, i) {
  return e && Ml(n.prototype, e), i && Ml(n, i), n;
}
/*!
 * Observer 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var $e,
  $s,
  Ot,
  Ai,
  ki,
  Ar,
  Ol,
  or,
  as,
  Pl,
  vi,
  Ut,
  Al,
  kl = function () {
    return $e || (typeof window < 'u' && ($e = window.gsap) && $e.registerPlugin && $e);
  },
  Ll = 1,
  kr = [],
  U = [],
  oi = [],
  ls = Date.now,
  yo = function (e, i) {
    return i;
  },
  wd = function () {
    var e = as.core,
      i = e.bridge || {},
      t = e._scrollers,
      r = e._proxies;
    t.push.apply(t, U),
      r.push.apply(r, oi),
      (U = t),
      (oi = r),
      (yo = function (o, a) {
        return i[o](a);
      });
  },
  Li = function (e, i) {
    return ~oi.indexOf(e) && oi[oi.indexOf(e) + 1][i];
  },
  cs = function (e) {
    return !!~Pl.indexOf(e);
  },
  Je = function (e, i, t, r, s) {
    return e.addEventListener(i, t, { passive: !r, capture: !!s });
  },
  et = function (e, i, t, r) {
    return e.removeEventListener(i, t, !!r);
  },
  Hs = 'scrollLeft',
  Gs = 'scrollTop',
  wo = function () {
    return (vi && vi.isPressed) || U.cache++;
  },
  Ys = function (e, i) {
    var t = function r(s) {
      if (s || s === 0) {
        Ll && (Ot.history.scrollRestoration = 'manual');
        var o = vi && vi.isPressed;
        (s = r.v = Math.round(s) || (vi && vi.iOS ? 1 : 0)), e(s), (r.cacheID = U.cache), o && yo('ss', s);
      } else (i || U.cache !== r.cacheID || yo('ref')) && ((r.cacheID = U.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (t.offset = 0), e && t;
  },
  tt = {
    s: Hs,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: Ys(function (n) {
      return arguments.length ? Ot.scrollTo(n, ke.sc()) : Ot.pageXOffset || Ai[Hs] || ki[Hs] || Ar[Hs] || 0;
    }),
  },
  ke = {
    s: Gs,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: tt,
    sc: Ys(function (n) {
      return arguments.length ? Ot.scrollTo(tt.sc(), n) : Ot.pageYOffset || Ai[Gs] || ki[Gs] || Ar[Gs] || 0;
    }),
  },
  vt = function (e, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || $e.utils.toArray)(e)[0] ||
      (typeof e == 'string' && $e.config().nullTargetWarn !== !1 ? void 0 : null)
    );
  },
  Di = function (e, i) {
    var t = i.s,
      r = i.sc;
    cs(e) && (e = Ai.scrollingElement || ki);
    var s = U.indexOf(e),
      o = r === ke.sc ? 1 : 2;
    !~s && (s = U.push(e) - 1), U[s + o] || Je(e, 'scroll', wo);
    var a = U[s + o],
      l =
        a ||
        (U[s + o] =
          Ys(Li(e, t), !0) ||
          (cs(e)
            ? r
            : Ys(function (c) {
                return arguments.length ? (e[t] = c) : e[t];
              })));
    return (l.target = e), a || (l.smooth = $e.getProperty(e, 'scrollBehavior') === 'smooth'), l;
  },
  bo = function (e, i, t) {
    var r = e,
      s = e,
      o = ls(),
      a = o,
      l = i || 50,
      c = Math.max(500, l * 3),
      u = function (m, p) {
        var y = ls();
        p || y - o > l ? ((s = r), (r = m), (a = o), (o = y)) : t ? (r += m) : (r = s + ((m - s) / (y - a)) * (o - a));
      },
      f = function () {
        (s = r = t ? 0 : r), (a = o = 0);
      },
      h = function (m) {
        var p = a,
          y = s,
          _ = ls();
        return (
          (m || m === 0) && m !== r && u(m), o === a || _ - a > c ? 0 : ((r + (t ? y : -y)) / ((t ? _ : o) - p)) * 1e3
        );
      };
    return { update: u, reset: f, getVelocity: h };
  },
  us = function (e, i) {
    return i && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  },
  Dl = function (e) {
    var i = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(i) >= Math.abs(t) ? i : t;
  },
  Il = function () {
    (as = $e.core.globals().ScrollTrigger), as && as.core && wd();
  },
  zl = function (e) {
    return (
      ($e = e || kl()),
      !$s &&
        $e &&
        typeof document < 'u' &&
        document.body &&
        ((Ot = window),
        (Ai = document),
        (ki = Ai.documentElement),
        (Ar = Ai.body),
        (Pl = [Ot, Ai, ki, Ar]),
        $e.utils.clamp,
        (Al = $e.core.context || function () {}),
        (or = 'onpointerenter' in Ar ? 'pointer' : 'mouse'),
        (Ol = Me.isTouch =
          Ot.matchMedia && Ot.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in Ot || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (Ut = Me.eventTypes =
          (
            'ontouchstart' in ki
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in ki
              ? 'pointerdown,pointermove,pointercancel,pointerup'
              : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (Ll = 0);
        }, 500),
        Il(),
        ($s = 1)),
      $s
    );
  };
(tt.op = ke), (U.cache = 0);
var Me = (function () {
  function n(i) {
    this.init(i);
  }
  var e = n.prototype;
  return (
    (e.init = function (t) {
      $s || zl($e), as || Il();
      var r = t.tolerance,
        s = t.dragMinimum,
        o = t.type,
        a = t.target,
        l = t.lineHeight,
        c = t.debounce,
        u = t.preventDefault,
        f = t.onStop,
        h = t.onStopDelay,
        d = t.ignore,
        m = t.wheelSpeed,
        p = t.event,
        y = t.onDragStart,
        _ = t.onDragEnd,
        g = t.onDrag,
        v = t.onPress,
        w = t.onRelease,
        b = t.onRight,
        x = t.onLeft,
        E = t.onUp,
        M = t.onDown,
        C = t.onChangeX,
        T = t.onChangeY,
        A = t.onChange,
        O = t.onToggleX,
        k = t.onToggleY,
        L = t.onHover,
        D = t.onHoverEnd,
        N = t.onMove,
        B = t.ignoreCheck,
        I = t.isNormalizer,
        G = t.onGestureStart,
        S = t.onGestureEnd,
        q = t.onWheel,
        le = t.onEnable,
        ye = t.onDisable,
        re = t.onClick,
        pe = t.scrollSpeed,
        We = t.capture,
        me = t.allowClicks,
        Ve = t.lockAxis,
        Le = t.onLockAxis;
      (this.target = a = vt(a) || ki),
        (this.vars = t),
        d && (d = $e.utils.toArray(d)),
        (r = r || 1e-9),
        (s = s || 0),
        (m = m || 1),
        (pe = pe || 1),
        (o = o || 'wheel,touch,pointer'),
        (c = c !== !1),
        l || (l = parseFloat(Ot.getComputedStyle(Ar).lineHeight) || 22);
      var ge,
        Ke,
        Qt,
        ee,
        Se,
        ct,
        wt,
        P = this,
        bt = 0,
        ui = 0,
        Wi = Di(a, tt),
        Te = Di(a, ke),
        Vi = Wi(),
        qi = Te(),
        $r = ~o.indexOf('touch') && !~o.indexOf('pointer') && Ut[0] === 'pointerdown',
        Pe = cs(a),
        we = a.ownerDocument || Ai,
        $t = [0, 0, 0],
        Ht = [0, 0, 0],
        $i = 0,
        di = function () {
          return ($i = ls());
        },
        Zt = function (F, te) {
          return (
            ((P.event = F) && d && ~d.indexOf(F.target)) || (te && $r && F.pointerType !== 'touch') || (B && B(F, te))
          );
        },
        ut = function () {
          P._vx.reset(), P._vy.reset(), Ke.pause(), f && f(P);
        },
        Hi = function () {
          var F = (P.deltaX = Dl($t)),
            te = (P.deltaY = Dl(Ht)),
            Ee = Math.abs(F) >= r,
            z = Math.abs(te) >= r;
          A && (Ee || z) && A(P, F, te, $t, Ht),
            Ee &&
              (b && P.deltaX > 0 && b(P),
              x && P.deltaX < 0 && x(P),
              C && C(P),
              O && P.deltaX < 0 != bt < 0 && O(P),
              (bt = P.deltaX),
              ($t[0] = $t[1] = $t[2] = 0)),
            z &&
              (M && P.deltaY > 0 && M(P),
              E && P.deltaY < 0 && E(P),
              T && T(P),
              k && P.deltaY < 0 != ui < 0 && k(P),
              (ui = P.deltaY),
              (Ht[0] = Ht[1] = Ht[2] = 0)),
            (ee || Qt) && (N && N(P), Qt && (g(P), (Qt = !1)), (ee = !1)),
            ct && !(ct = !1) && Le && Le(P),
            Se && (q(P), (Se = !1)),
            (ge = 0);
        },
        gr = function (F, te, Ee) {
          ($t[Ee] += F),
            (Ht[Ee] += te),
            P._vx.update(F),
            P._vy.update(te),
            c ? ge || (ge = requestAnimationFrame(Hi)) : Hi();
        },
        vr = function (F, te) {
          Ve && !wt && ((P.axis = wt = Math.abs(F) > Math.abs(te) ? 'x' : 'y'), (ct = !0)),
            wt !== 'y' && (($t[2] += F), P._vx.update(F, !0)),
            wt !== 'x' && ((Ht[2] += te), P._vy.update(te, !0)),
            c ? ge || (ge = requestAnimationFrame(Hi)) : Hi();
        },
        Gi = function (F) {
          if (!Zt(F, 1)) {
            F = us(F, u);
            var te = F.clientX,
              Ee = F.clientY,
              z = te - P.x,
              X = Ee - P.y,
              W = P.isDragging;
            (P.x = te),
              (P.y = Ee),
              (W || Math.abs(P.startX - te) >= s || Math.abs(P.startY - Ee) >= s) &&
                (g && (Qt = !0), W || (P.isDragging = !0), vr(z, X), W || (y && y(P)));
          }
        },
        wi = (P.onPress = function ($) {
          Zt($, 1) ||
            ($ && $.button) ||
            ((P.axis = wt = null),
            Ke.pause(),
            (P.isPressed = !0),
            ($ = us($)),
            (bt = ui = 0),
            (P.startX = P.x = $.clientX),
            (P.startY = P.y = $.clientY),
            P._vx.reset(),
            P._vy.reset(),
            Je(I ? a : we, Ut[1], Gi, u, !0),
            (P.deltaX = P.deltaY = 0),
            v && v(P));
        }),
        bi = (P.onRelease = function ($) {
          if (!Zt($, 1)) {
            et(I ? a : we, Ut[1], Gi, !0);
            var F = !isNaN(P.y - P.startY),
              te = P.isDragging,
              Ee = te && (Math.abs(P.x - P.startX) > 3 || Math.abs(P.y - P.startY) > 3),
              z = us($);
            !Ee &&
              F &&
              (P._vx.reset(),
              P._vy.reset(),
              u &&
                me &&
                $e.delayedCall(0.08, function () {
                  if (ls() - $i > 300 && !$.defaultPrevented) {
                    if ($.target.click) $.target.click();
                    else if (we.createEvent) {
                      var X = we.createEvent('MouseEvents');
                      X.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        Ot,
                        1,
                        z.screenX,
                        z.screenY,
                        z.clientX,
                        z.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        $.target.dispatchEvent(X);
                    }
                  }
                })),
              (P.isDragging = P.isGesturing = P.isPressed = !1),
              f && te && !I && Ke.restart(!0),
              _ && te && _(P),
              w && w(P, Ee);
          }
        }),
        Z = function (F) {
          return F.touches && F.touches.length > 1 && (P.isGesturing = !0) && G(F, P.isDragging);
        },
        Yi = function () {
          return (P.isGesturing = !1) || S(P);
        },
        Gt = function (F) {
          if (!Zt(F)) {
            var te = Wi(),
              Ee = Te();
            gr((te - Vi) * pe, (Ee - qi) * pe, 1), (Vi = te), (qi = Ee), f && Ke.restart(!0);
          }
        },
        Yt = function (F) {
          if (!Zt(F)) {
            (F = us(F, u)), q && (Se = !0);
            var te = (F.deltaMode === 1 ? l : F.deltaMode === 2 ? Ot.innerHeight : 1) * m;
            gr(F.deltaX * te, F.deltaY * te, 0), f && !I && Ke.restart(!0);
          }
        },
        Xt = function (F) {
          if (!Zt(F)) {
            var te = F.clientX,
              Ee = F.clientY,
              z = te - P.x,
              X = Ee - P.y;
            (P.x = te), (P.y = Ee), (ee = !0), f && Ke.restart(!0), (z || X) && vr(z, X);
          }
        },
        Xi = function (F) {
          (P.event = F), L(P);
        },
        _r = function (F) {
          (P.event = F), D(P);
        },
        fi = function (F) {
          return Zt(F) || (us(F, u) && re(P));
        };
      (Ke = P._dc = $e.delayedCall(h || 0.25, ut).pause()),
        (P.deltaX = P.deltaY = 0),
        (P._vx = bo(0, 50, !0)),
        (P._vy = bo(0, 50, !0)),
        (P.scrollX = Wi),
        (P.scrollY = Te),
        (P.isDragging = P.isGesturing = P.isPressed = !1),
        Al(this),
        (P.enable = function ($) {
          return (
            P.isEnabled ||
              (Je(Pe ? we : a, 'scroll', wo),
              o.indexOf('scroll') >= 0 && Je(Pe ? we : a, 'scroll', Gt, u, We),
              o.indexOf('wheel') >= 0 && Je(a, 'wheel', Yt, u, We),
              ((o.indexOf('touch') >= 0 && Ol) || o.indexOf('pointer') >= 0) &&
                (Je(a, Ut[0], wi, u, We),
                Je(we, Ut[2], bi),
                Je(we, Ut[3], bi),
                me && Je(a, 'click', di, !1, !0),
                re && Je(a, 'click', fi),
                G && Je(we, 'gesturestart', Z),
                S && Je(we, 'gestureend', Yi),
                L && Je(a, or + 'enter', Xi),
                D && Je(a, or + 'leave', _r),
                N && Je(a, or + 'move', Xt)),
              (P.isEnabled = !0),
              $ && $.type && wi($),
              le && le(P)),
            P
          );
        }),
        (P.disable = function () {
          P.isEnabled &&
            (kr.filter(function ($) {
              return $ !== P && cs($.target);
            }).length || et(Pe ? we : a, 'scroll', wo),
            P.isPressed && (P._vx.reset(), P._vy.reset(), et(I ? a : we, Ut[1], Gi, !0)),
            et(Pe ? we : a, 'scroll', Gt, We),
            et(a, 'wheel', Yt, We),
            et(a, Ut[0], wi, We),
            et(we, Ut[2], bi),
            et(we, Ut[3], bi),
            et(a, 'click', di, !0),
            et(a, 'click', fi),
            et(we, 'gesturestart', Z),
            et(we, 'gestureend', Yi),
            et(a, or + 'enter', Xi),
            et(a, or + 'leave', _r),
            et(a, or + 'move', Xt),
            (P.isEnabled = P.isPressed = P.isDragging = !1),
            ye && ye(P));
        }),
        (P.kill = P.revert =
          function () {
            P.disable();
            var $ = kr.indexOf(P);
            $ >= 0 && kr.splice($, 1), vi === P && (vi = 0);
          }),
        kr.push(P),
        I && cs(a) && (vi = P),
        P.enable(p);
    }),
    yd(n, [
      {
        key: 'velocityX',
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    n
  );
})();
(Me.version = '3.12.4'),
  (Me.create = function (n) {
    return new Me(n);
  }),
  (Me.register = zl),
  (Me.getAll = function () {
    return kr.slice();
  }),
  (Me.getById = function (n) {
    return kr.filter(function (e) {
      return e.vars.id === n;
    })[0];
  }),
  kl() && $e.registerPlugin(Me);
/*!
 * ScrollTrigger 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var R,
  Lr,
  Q,
  he,
  Kt,
  ae,
  Rl,
  Xs,
  ds,
  Dr,
  js,
  Us,
  Ue,
  Ks,
  xo,
  it,
  Nl,
  Bl,
  Ir,
  Fl,
  So,
  Wl,
  rt,
  Vl,
  ql,
  $l,
  Ii,
  To,
  Eo,
  zr,
  Co,
  Qs,
  Mo,
  Oo,
  Zs = 1,
  st = Date.now,
  Po = st(),
  Ft = 0,
  fs = 0,
  Hl = function (e, i, t) {
    var r = Pt(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
    return (t['_' + i + 'Clamp'] = r), r ? e.substr(6, e.length - 7) : e;
  },
  Gl = function (e, i) {
    return i && (!Pt(e) || e.substr(0, 6) !== 'clamp(') ? 'clamp(' + e + ')' : e;
  },
  bd = function n() {
    return fs && requestAnimationFrame(n);
  },
  Yl = function () {
    return (Ks = 1);
  },
  Xl = function () {
    return (Ks = 0);
  },
  ai = function (e) {
    return e;
  },
  hs = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  jl = function () {
    return typeof window < 'u';
  },
  Ul = function () {
    return R || (jl() && (R = window.gsap) && R.registerPlugin && R);
  },
  ar = function (e) {
    return !!~Rl.indexOf(e);
  },
  Kl = function (e) {
    return (e === 'Height' ? Co : Q['inner' + e]) || Kt['client' + e] || ae['client' + e];
  },
  Ql = function (e) {
    return (
      Li(e, 'getBoundingClientRect') ||
      (ar(e)
        ? function () {
            return (fn.width = Q.innerWidth), (fn.height = Co), fn;
          }
        : function () {
            return _i(e);
          })
    );
  },
  xd = function (e, i, t) {
    var r = t.d,
      s = t.d2,
      o = t.a;
    return (o = Li(e, 'getBoundingClientRect'))
      ? function () {
          return o()[r];
        }
      : function () {
          return (i ? Kl(s) : e['client' + s]) || 0;
        };
  },
  Sd = function (e, i) {
    return !i || ~oi.indexOf(e)
      ? Ql(e)
      : function () {
          return fn;
        };
  },
  li = function (e, i) {
    var t = i.s,
      r = i.d2,
      s = i.d,
      o = i.a;
    return Math.max(
      0,
      (t = 'scroll' + r) && (o = Li(e, t))
        ? o() - Ql(e)()[s]
        : ar(e)
        ? (Kt[t] || ae[t]) - Kl(r)
        : e[t] - e['offset' + r]
    );
  },
  Js = function (e, i) {
    for (var t = 0; t < Ir.length; t += 3) (!i || ~i.indexOf(Ir[t + 1])) && e(Ir[t], Ir[t + 1], Ir[t + 2]);
  },
  Pt = function (e) {
    return typeof e == 'string';
  },
  nt = function (e) {
    return typeof e == 'function';
  },
  en = function (e) {
    return typeof e == 'number';
  },
  lr = function (e) {
    return typeof e == 'object';
  },
  ps = function (e, i, t) {
    return e && e.progress(i ? 0 : 1) && t && e.pause();
  },
  Ao = function (e, i) {
    if (e.enabled) {
      var t = e._ctx
        ? e._ctx.add(function () {
            return i(e);
          })
        : i(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  },
  Rr = Math.abs,
  Zl = 'left',
  Jl = 'top',
  ko = 'right',
  Lo = 'bottom',
  cr = 'width',
  ur = 'height',
  ms = 'Right',
  gs = 'Left',
  vs = 'Top',
  _s = 'Bottom',
  Oe = 'padding',
  Wt = 'margin',
  Nr = 'Width',
  Do = 'Height',
  Ne = 'px',
  Vt = function (e) {
    return Q.getComputedStyle(e);
  },
  Td = function (e) {
    var i = Vt(e).position;
    e.style.position = i === 'absolute' || i === 'fixed' ? i : 'relative';
  },
  ec = function (e, i) {
    for (var t in i) t in e || (e[t] = i[t]);
    return e;
  },
  _i = function (e, i) {
    var t =
        i &&
        Vt(e)[xo] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        R.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect();
    return t && t.progress(0).kill(), r;
  },
  Io = function (e, i) {
    var t = i.d2;
    return e['offset' + t] || e['client' + t] || 0;
  },
  tc = function (e) {
    var i = [],
      t = e.labels,
      r = e.duration(),
      s;
    for (s in t) i.push(t[s] / r);
    return i;
  },
  Ed = function (e) {
    return function (i) {
      return R.utils.snap(tc(e), i);
    };
  },
  zo = function (e) {
    var i = R.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, s) {
          return r - s;
        });
    return t
      ? function (r, s, o) {
          o === void 0 && (o = 0.001);
          var a;
          if (!s) return i(r);
          if (s > 0) {
            for (r -= o, a = 0; a < t.length; a++) if (t[a] >= r) return t[a];
            return t[a - 1];
          } else for (a = t.length, r += o; a--; ) if (t[a] <= r) return t[a];
          return t[0];
        }
      : function (r, s, o) {
          o === void 0 && (o = 0.001);
          var a = i(r);
          return !s || Math.abs(a - r) < o || a - r < 0 == s < 0 ? a : i(s < 0 ? r - e : r + e);
        };
  },
  Cd = function (e) {
    return function (i, t) {
      return zo(tc(e))(i, t.direction);
    };
  },
  tn = function (e, i, t, r) {
    return t.split(',').forEach(function (s) {
      return e(i, s, r);
    });
  },
  Be = function (e, i, t, r, s) {
    return e.addEventListener(i, t, { passive: !r, capture: !!s });
  },
  Fe = function (e, i, t, r) {
    return e.removeEventListener(i, t, !!r);
  },
  rn = function (e, i, t) {
    (t = t && t.wheelHandler), t && (e(i, 'wheel', t), e(i, 'touchmove', t));
  },
  ic = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
  sn = { toggleActions: 'play', anticipatePin: 0 },
  nn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  on = function (e, i) {
    if (Pt(e)) {
      var t = e.indexOf('='),
        r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf('%') > t && (r *= i / 100), (e = e.substr(0, t - 1))),
        (e = r + (e in nn ? nn[e] * i : ~e.indexOf('%') ? (parseFloat(e) * i) / 100 : parseFloat(e) || 0));
    }
    return e;
  },
  an = function (e, i, t, r, s, o, a, l) {
    var c = s.startColor,
      u = s.endColor,
      f = s.fontSize,
      h = s.indent,
      d = s.fontWeight,
      m = he.createElement('div'),
      p = ar(t) || Li(t, 'pinType') === 'fixed',
      y = e.indexOf('scroller') !== -1,
      _ = p ? ae : t,
      g = e.indexOf('start') !== -1,
      v = g ? c : u,
      w =
        'border-color:' +
        v +
        ';font-size:' +
        f +
        ';color:' +
        v +
        ';font-weight:' +
        d +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (w += 'position:' + ((y || l) && p ? 'fixed;' : 'absolute;')),
      (y || l || !p) && (w += (r === ke ? ko : Lo) + ':' + (o + parseFloat(h)) + 'px;'),
      a && (w += 'box-sizing:border-box;text-align:left;width:' + a.offsetWidth + 'px;'),
      (m._isStart = g),
      m.setAttribute('class', 'gsap-marker-' + e + (i ? ' marker-' + i : '')),
      (m.style.cssText = w),
      (m.innerText = i || i === 0 ? e + '-' + i : e),
      _.children[0] ? _.insertBefore(m, _.children[0]) : _.appendChild(m),
      (m._offset = m['offset' + r.op.d2]),
      ln(m, 0, r, g),
      m
    );
  },
  ln = function (e, i, t, r) {
    var s = { display: 'block' },
      o = t[r ? 'os2' : 'p2'],
      a = t[r ? 'p2' : 'os2'];
    (e._isFlipped = r),
      (s[t.a + 'Percent'] = r ? -100 : 0),
      (s[t.a] = r ? '1px' : 0),
      (s['border' + o + Nr] = 1),
      (s['border' + a + Nr] = 0),
      (s[t.p] = i + 'px'),
      R.set(e, s);
  },
  Y = [],
  Ro = {},
  ys,
  rc = function () {
    return st() - Ft > 34 && (ys || (ys = requestAnimationFrame(yi)));
  },
  Br = function () {
    (!rt || !rt.isPressed || rt.startX > ae.clientWidth) &&
      (U.cache++, rt ? ys || (ys = requestAnimationFrame(yi)) : yi(), Ft || fr('scrollStart'), (Ft = st()));
  },
  No = function () {
    ($l = Q.innerWidth), (ql = Q.innerHeight);
  },
  ws = function () {
    U.cache++,
      !Ue &&
        !Wl &&
        !he.fullscreenElement &&
        !he.webkitFullscreenElement &&
        (!Vl || $l !== Q.innerWidth || Math.abs(Q.innerHeight - ql) > Q.innerHeight * 0.25) &&
        Xs.restart(!0);
  },
  dr = {},
  Md = [],
  sc = function n() {
    return Fe(H, 'scrollEnd', n) || pr(!0);
  },
  fr = function (e) {
    return (
      (dr[e] &&
        dr[e].map(function (i) {
          return i();
        })) ||
      Md
    );
  },
  At = [],
  nc = function (e) {
    for (var i = 0; i < At.length; i += 5)
      (!e || (At[i + 4] && At[i + 4].query === e)) &&
        ((At[i].style.cssText = At[i + 1]),
        At[i].getBBox && At[i].setAttribute('transform', At[i + 2] || ''),
        (At[i + 3].uncache = 1));
  },
  Bo = function (e, i) {
    var t;
    for (it = 0; it < Y.length; it++) (t = Y[it]), t && (!i || t._ctx === i) && (e ? t.kill(1) : t.revert(!0, !0));
    (Qs = !0), i && nc(i), i || fr('revert');
  },
  oc = function (e, i) {
    U.cache++,
      (i || !ot) &&
        U.forEach(function (t) {
          return nt(t) && t.cacheID++ && (t.rec = 0);
        }),
      Pt(e) && (Q.history.scrollRestoration = Eo = e);
  },
  ot,
  hr = 0,
  ac,
  Od = function () {
    if (ac !== hr) {
      var e = (ac = hr);
      requestAnimationFrame(function () {
        return e === hr && pr(!0);
      });
    }
  },
  lc = function () {
    ae.appendChild(zr), (Co = (!rt && zr.offsetHeight) || Q.innerHeight), ae.removeChild(zr);
  },
  cc = function (e) {
    return ds('.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end').forEach(
      function (i) {
        return (i.style.display = e ? 'none' : 'block');
      }
    );
  },
  pr = function (e, i) {
    if (Ft && !e && !Qs) {
      Be(H, 'scrollEnd', sc);
      return;
    }
    lc(),
      (ot = H.isRefreshing = !0),
      U.forEach(function (r) {
        return nt(r) && ++r.cacheID && (r.rec = r());
      });
    var t = fr('refreshInit');
    Fl && H.sort(),
      i || Bo(),
      U.forEach(function (r) {
        nt(r) && (r.smooth && (r.target.style.scrollBehavior = 'auto'), r(0));
      }),
      Y.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (Qs = !1),
      Y.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var s = r.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            o = r.pin[s];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh();
        }
      }),
      (Mo = 1),
      cc(!0),
      Y.forEach(function (r) {
        var s = li(r.scroller, r._dir),
          o = r.vars.end === 'max' || (r._endClamp && r.end > s),
          a = r._startClamp && r.start >= s;
        (o || a) && r.setPositions(a ? s - 1 : r.start, o ? Math.max(a ? s : r.start + 1, s) : r.end, !0);
      }),
      cc(!1),
      (Mo = 0),
      t.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      U.forEach(function (r) {
        nt(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = 'smooth');
            }),
          r.rec && r(r.rec));
      }),
      oc(Eo, 1),
      Xs.pause(),
      hr++,
      (ot = 2),
      yi(2),
      Y.forEach(function (r) {
        return nt(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (ot = H.isRefreshing = !1),
      fr('refresh');
  },
  Fo = 0,
  cn = 1,
  bs,
  yi = function (e) {
    if (e === 2 || (!ot && !Qs)) {
      (H.isUpdating = !0), bs && bs.update(0);
      var i = Y.length,
        t = st(),
        r = t - Po >= 50,
        s = i && Y[0].scroll();
      if (
        ((cn = Fo > s ? -1 : 1),
        ot || (Fo = s),
        r && (Ft && !Ks && t - Ft > 200 && ((Ft = 0), fr('scrollEnd')), (js = Po), (Po = t)),
        cn < 0)
      ) {
        for (it = i; it-- > 0; ) Y[it] && Y[it].update(0, r);
        cn = 1;
      } else for (it = 0; it < i; it++) Y[it] && Y[it].update(0, r);
      H.isUpdating = !1;
    }
    ys = 0;
  },
  Wo = [
    Zl,
    Jl,
    Lo,
    ko,
    Wt + _s,
    Wt + ms,
    Wt + vs,
    Wt + gs,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  un = Wo.concat([cr, ur, 'boxSizing', 'max' + Nr, 'max' + Do, 'position', Wt, Oe, Oe + vs, Oe + ms, Oe + _s, Oe + gs]),
  Pd = function (e, i, t) {
    Fr(t);
    var r = e._gsap;
    if (r.spacerIsNative) Fr(r.spacerState);
    else if (e._gsap.swappedIn) {
      var s = i.parentNode;
      s && (s.insertBefore(e, i), s.removeChild(i));
    }
    e._gsap.swappedIn = !1;
  },
  Vo = function (e, i, t, r) {
    if (!e._gsap.swappedIn) {
      for (var s = Wo.length, o = i.style, a = e.style, l; s--; ) (l = Wo[s]), (o[l] = t[l]);
      (o.position = t.position === 'absolute' ? 'absolute' : 'relative'),
        t.display === 'inline' && (o.display = 'inline-block'),
        (a[Lo] = a[ko] = 'auto'),
        (o.flexBasis = t.flexBasis || 'auto'),
        (o.overflow = 'visible'),
        (o.boxSizing = 'border-box'),
        (o[cr] = Io(e, tt) + Ne),
        (o[ur] = Io(e, ke) + Ne),
        (o[Oe] = a[Wt] = a[Jl] = a[Zl] = '0'),
        Fr(r),
        (a[cr] = a['max' + Nr] = t[cr]),
        (a[ur] = a['max' + Do] = t[ur]),
        (a[Oe] = t[Oe]),
        e.parentNode !== i && (e.parentNode.insertBefore(i, e), i.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Ad = /([A-Z])/g,
  Fr = function (e) {
    if (e) {
      var i = e.t.style,
        t = e.length,
        r = 0,
        s,
        o;
      for ((e.t._gsap || R.core.getCache(e.t)).uncache = 1; r < t; r += 2)
        (o = e[r + 1]), (s = e[r]), o ? (i[s] = o) : i[s] && i.removeProperty(s.replace(Ad, '-$1').toLowerCase());
    }
  },
  dn = function (e) {
    for (var i = un.length, t = e.style, r = [], s = 0; s < i; s++) r.push(un[s], t[un[s]]);
    return (r.t = e), r;
  },
  kd = function (e, i, t) {
    for (var r = [], s = e.length, o = t ? 8 : 0, a; o < s; o += 2) (a = e[o]), r.push(a, a in i ? i[a] : e[o + 1]);
    return (r.t = e.t), r;
  },
  fn = { left: 0, top: 0 },
  uc = function (e, i, t, r, s, o, a, l, c, u, f, h, d, m) {
    nt(e) && (e = e(l)),
      Pt(e) && e.substr(0, 3) === 'max' && (e = h + (e.charAt(4) === '=' ? on('0' + e.substr(3), t) : 0));
    var p = d ? d.time() : 0,
      y,
      _,
      g;
    if ((d && d.seek(0), isNaN(e) || (e = +e), en(e)))
      d && (e = R.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, e)), a && ln(a, t, r, !0);
    else {
      nt(i) && (i = i(l));
      var v = (e || '0').split(' '),
        w,
        b,
        x,
        E;
      (g = vt(i, l) || ae),
        (w = _i(g) || {}),
        (!w || (!w.left && !w.top)) &&
          Vt(g).display === 'none' &&
          ((E = g.style.display),
          (g.style.display = 'block'),
          (w = _i(g)),
          E ? (g.style.display = E) : g.style.removeProperty('display')),
        (b = on(v[0], w[r.d])),
        (x = on(v[1] || '0', t)),
        (e = w[r.p] - c[r.p] - u + b + s - x),
        a && ln(a, x, r, t - x < 20 || (a._isStart && x > 20)),
        (t -= t - x);
    }
    if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
      var M = e + t,
        C = o._isStart;
      (y = 'scroll' + r.d2),
        ln(o, M, r, (C && M > 20) || (!C && (f ? Math.max(ae[y], Kt[y]) : o.parentNode[y]) <= M + 1)),
        f && ((c = _i(a)), f && (o.style[r.op.p] = c[r.op.p] - r.op.m - o._offset + Ne));
    }
    return (
      d &&
        g &&
        ((y = _i(g)), d.seek(h), (_ = _i(g)), (d._caScrollDist = y[r.p] - _[r.p]), (e = (e / d._caScrollDist) * h)),
      d && d.seek(p),
      d ? e : Math.round(e)
    );
  },
  Ld = /(webkit|moz|length|cssText|inset)/i,
  dc = function (e, i, t, r) {
    if (e.parentNode !== i) {
      var s = e.style,
        o,
        a;
      if (i === ae) {
        (e._stOrig = s.cssText), (a = Vt(e));
        for (o in a) !+o && !Ld.test(o) && a[o] && typeof s[o] == 'string' && o !== '0' && (s[o] = a[o]);
        (s.top = t), (s.left = r);
      } else s.cssText = e._stOrig;
      (R.core.getCache(e).uncache = 1), i.appendChild(e);
    }
  },
  fc = function (e, i, t) {
    var r = i,
      s = r;
    return function (o) {
      var a = Math.round(e());
      return (
        a !== r && a !== s && Math.abs(a - r) > 3 && Math.abs(a - s) > 3 && ((o = a), t && t()), (s = r), (r = o), o
      );
    };
  },
  hn = function (e, i, t) {
    var r = {};
    (r[i.p] = '+=' + t), R.set(e, r);
  },
  hc = function (e, i) {
    var t = Di(e, i),
      r = '_scroll' + i.p2,
      s = function o(a, l, c, u, f) {
        var h = o.tween,
          d = l.onComplete,
          m = {};
        c = c || t();
        var p = fc(t, c, function () {
          h.kill(), (o.tween = 0);
        });
        return (
          (f = (u && f) || 0),
          (u = u || a - c),
          h && h.kill(),
          (l[r] = a),
          (l.modifiers = m),
          (m[r] = function () {
            return p(c + u * h.ratio + f * h.ratio * h.ratio);
          }),
          (l.onUpdate = function () {
            U.cache++, o.tween && yi();
          }),
          (l.onComplete = function () {
            (o.tween = 0), d && d.call(h);
          }),
          (h = o.tween = R.to(e, l)),
          h
        );
      };
    return (
      (e[r] = t),
      (t.wheelHandler = function () {
        return s.tween && s.tween.kill() && (s.tween = 0);
      }),
      Be(e, 'wheel', t.wheelHandler),
      H.isTouch && Be(e, 'touchmove', t.wheelHandler),
      s
    );
  },
  H = (function () {
    function n(i, t) {
      Lr || n.register(R), To(this), this.init(i, t);
    }
    var e = n.prototype;
    return (
      (e.init = function (t, r) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !fs)) {
          this.update = this.refresh = this.kill = ai;
          return;
        }
        t = ec(Pt(t) || en(t) || t.nodeType ? { trigger: t } : t, sn);
        var s = t,
          o = s.onUpdate,
          a = s.toggleClass,
          l = s.id,
          c = s.onToggle,
          u = s.onRefresh,
          f = s.scrub,
          h = s.trigger,
          d = s.pin,
          m = s.pinSpacing,
          p = s.invalidateOnRefresh,
          y = s.anticipatePin,
          _ = s.onScrubComplete,
          g = s.onSnapComplete,
          v = s.once,
          w = s.snap,
          b = s.pinReparent,
          x = s.pinSpacer,
          E = s.containerAnimation,
          M = s.fastScrollEnd,
          C = s.preventOverlaps,
          T = t.horizontal || (t.containerAnimation && t.horizontal !== !1) ? tt : ke,
          A = !f && f !== 0,
          O = vt(t.scroller || Q),
          k = R.core.getCache(O),
          L = ar(O),
          D = ('pinType' in t ? t.pinType : Li(O, 'pinType') || (L && 'fixed')) === 'fixed',
          N = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          B = A && t.toggleActions.split(' '),
          I = 'markers' in t ? t.markers : sn.markers,
          G = L ? 0 : parseFloat(Vt(O)['border' + T.p2 + Nr]) || 0,
          S = this,
          q =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(S);
            },
          le = xd(O, L, T),
          ye = Sd(O, L),
          re = 0,
          pe = 0,
          We = 0,
          me = Di(O, T),
          Ve,
          Le,
          ge,
          Ke,
          Qt,
          ee,
          Se,
          ct,
          wt,
          P,
          bt,
          ui,
          Wi,
          Te,
          Vi,
          qi,
          $r,
          Pe,
          we,
          $t,
          Ht,
          $i,
          di,
          Zt,
          ut,
          Hi,
          gr,
          vr,
          Gi,
          wi,
          bi,
          Z,
          Yi,
          Gt,
          Yt,
          Xt,
          Xi,
          _r,
          fi;
        if (
          ((S._startClamp = S._endClamp = !1),
          (S._dir = T),
          (y *= 45),
          (S.scroller = O),
          (S.scroll = E ? E.time.bind(E) : me),
          (Ke = me()),
          (S.vars = t),
          (r = r || t.animation),
          'refreshPriority' in t && ((Fl = 1), t.refreshPriority === -9999 && (bs = S)),
          (k.tweenScroll = k.tweenScroll || { top: hc(O, ke), left: hc(O, tt) }),
          (S.tweenTo = Ve = k.tweenScroll[T.p]),
          (S.scrubDuration = function (z) {
            (Yi = en(z) && z),
              Yi
                ? Z
                  ? Z.duration(z)
                  : (Z = R.to(r, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      duration: Yi,
                      paused: !0,
                      onComplete: function () {
                        return _ && _(S);
                      },
                    }))
                : (Z && Z.progress(1).kill(), (Z = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !S.isReverted) ||
              (r.vars.immediateRender !== !1 && t.immediateRender !== !1 && r.duration() && r.render(0, !0, !0)),
            (S.animation = r.pause()),
            (r.scrollTrigger = S),
            S.scrubDuration(f),
            (wi = 0),
            l || (l = r.vars.id)),
          w &&
            ((!lr(w) || w.push) && (w = { snapTo: w }),
            'scrollBehavior' in ae.style && R.set(L ? [ae, Kt] : O, { scrollBehavior: 'auto' }),
            U.forEach(function (z) {
              return nt(z) && z.target === (L ? he.scrollingElement || Kt : O) && (z.smooth = !1);
            }),
            (ge = nt(w.snapTo)
              ? w.snapTo
              : w.snapTo === 'labels'
              ? Ed(r)
              : w.snapTo === 'labelsDirectional'
              ? Cd(r)
              : w.directional !== !1
              ? function (z, X) {
                  return zo(w.snapTo)(z, st() - pe < 500 ? 0 : X.direction);
                }
              : R.utils.snap(w.snapTo)),
            (Gt = w.duration || { min: 0.1, max: 2 }),
            (Gt = lr(Gt) ? Dr(Gt.min, Gt.max) : Dr(Gt, Gt)),
            (Yt = R.delayedCall(w.delay || Yi / 2 || 0.1, function () {
              var z = me(),
                X = st() - pe < 500,
                W = Ve.tween;
              if ((X || Math.abs(S.getVelocity()) < 10) && !W && !Ks && re !== z) {
                var j = (z - ee) / Te,
                  De = r && !A ? r.totalProgress() : j,
                  J = X ? 0 : ((De - bi) / (st() - js)) * 1e3 || 0,
                  be = R.utils.clamp(-j, 1 - j, (Rr(J / 2) * J) / 0.185),
                  Qe = j + (w.inertia === !1 ? 0 : be),
                  Ie = Dr(0, 1, ge(Qe, S)),
                  ce = Math.round(ee + Ie * Te),
                  se = w,
                  jt = se.onStart,
                  ue = se.onInterrupt,
                  xt = se.onComplete;
                if (z <= Se && z >= ee && ce !== z) {
                  if (W && !W._initted && W.data <= Rr(ce - z)) return;
                  w.inertia === !1 && (be = Ie - j),
                    Ve(
                      ce,
                      {
                        duration: Gt(Rr((Math.max(Rr(Qe - De), Rr(Ie - De)) * 0.185) / J / 0.05 || 0)),
                        ease: w.ease || 'power3',
                        data: Rr(ce - z),
                        onInterrupt: function () {
                          return Yt.restart(!0) && ue && ue(S);
                        },
                        onComplete: function () {
                          S.update(),
                            (re = me()),
                            Z && r && r.progress(Ie),
                            (wi = bi = r && !A ? r.totalProgress() : S.progress),
                            g && g(S),
                            xt && xt(S);
                        },
                      },
                      z,
                      be * Te,
                      ce - z - be * Te
                    ),
                    jt && jt(S, Ve.tween);
                }
              } else S.isActive && re !== z && Yt.restart(!0);
            }).pause())),
          l && (Ro[l] = S),
          (h = S.trigger = vt(h || (d !== !0 && d))),
          (fi = h && h._gsap && h._gsap.stRevert),
          fi && (fi = fi(S)),
          (d = d === !0 ? h : vt(d)),
          Pt(a) && (a = { targets: h, className: a }),
          d &&
            (m === !1 ||
              m === Wt ||
              (m = !m && d.parentNode && d.parentNode.style && Vt(d.parentNode).display === 'flex' ? !1 : Oe),
            (S.pin = d),
            (Le = R.core.getCache(d)),
            Le.spacer
              ? (Vi = Le.pinState)
              : (x &&
                  ((x = vt(x)),
                  x && !x.nodeType && (x = x.current || x.nativeElement),
                  (Le.spacerIsNative = !!x),
                  x && (Le.spacerState = dn(x))),
                (Le.spacer = Pe = x || he.createElement('div')),
                Pe.classList.add('pin-spacer'),
                l && Pe.classList.add('pin-spacer-' + l),
                (Le.pinState = Vi = dn(d))),
            t.force3D !== !1 && R.set(d, { force3D: !0 }),
            (S.spacer = Pe = Le.spacer),
            (Gi = Vt(d)),
            (Zt = Gi[m + T.os2]),
            ($t = R.getProperty(d)),
            (Ht = R.quickSetter(d, T.a, Ne)),
            Vo(d, Pe, Gi),
            ($r = dn(d))),
          I)
        ) {
          (ui = lr(I) ? ec(I, ic) : ic),
            (P = an('scroller-start', l, O, T, ui, 0)),
            (bt = an('scroller-end', l, O, T, ui, 0, P)),
            (we = P['offset' + T.op.d2]);
          var $ = vt(Li(O, 'content') || O);
          (ct = this.markerStart = an('start', l, $, T, ui, we, 0, E)),
            (wt = this.markerEnd = an('end', l, $, T, ui, we, 0, E)),
            E && (_r = R.quickSetter([ct, wt], T.a, Ne)),
            !D &&
              !(oi.length && Li(O, 'fixedMarkers') === !0) &&
              (Td(L ? ae : O),
              R.set([P, bt], { force3D: !0 }),
              (Hi = R.quickSetter(P, T.a, Ne)),
              (vr = R.quickSetter(bt, T.a, Ne)));
        }
        if (E) {
          var F = E.vars.onUpdate,
            te = E.vars.onUpdateParams;
          E.eventCallback('onUpdate', function () {
            S.update(0, 0, 1), F && F.apply(E, te || []);
          });
        }
        if (
          ((S.previous = function () {
            return Y[Y.indexOf(S) - 1];
          }),
          (S.next = function () {
            return Y[Y.indexOf(S) + 1];
          }),
          (S.revert = function (z, X) {
            if (!X) return S.kill(!0);
            var W = z !== !1 || !S.enabled,
              j = Ue;
            W !== S.isReverted &&
              (W && ((Xt = Math.max(me(), S.scroll.rec || 0)), (We = S.progress), (Xi = r && r.progress())),
              ct &&
                [ct, wt, P, bt].forEach(function (De) {
                  return (De.style.display = W ? 'none' : 'block');
                }),
              W && ((Ue = S), S.update(W)),
              d && (!b || !S.isActive) && (W ? Pd(d, Pe, Vi) : Vo(d, Pe, Vt(d), ut)),
              W || S.update(W),
              (Ue = j),
              (S.isReverted = W));
          }),
          (S.refresh = function (z, X, W, j) {
            if (!((Ue || !S.enabled) && !X)) {
              if (d && z && Ft) {
                Be(n, 'scrollEnd', sc);
                return;
              }
              !ot && q && q(S),
                (Ue = S),
                Ve.tween && !W && (Ve.tween.kill(), (Ve.tween = 0)),
                Z && Z.pause(),
                p && r && r.revert({ kill: !1 }).invalidate(),
                S.isReverted || S.revert(!0, !0),
                (S._subPinOffset = !1);
              var De = le(),
                J = ye(),
                be = E ? E.duration() : li(O, T),
                Qe = Te <= 0.01,
                Ie = 0,
                ce = j || 0,
                se = lr(W) ? W.end : t.end,
                jt = t.endTrigger || h,
                ue = lr(W) ? W.start : t.start || (t.start === 0 || !h ? 0 : d ? '0 0' : '0 100%'),
                xt = (S.pinnedContainer = t.pinnedContainer && vt(t.pinnedContainer, S)),
                Jt = (h && Math.max(0, Y.indexOf(S))) || 0,
                dt = Jt,
                qe,
                He,
                ji,
                Ms,
                Ge,
                Ae,
                ei,
                An,
                ua,
                Hr,
                ti,
                Gr,
                Os;
              for (I && lr(W) && ((Gr = R.getProperty(P, T.p)), (Os = R.getProperty(bt, T.p))); dt--; )
                (Ae = Y[dt]),
                  Ae.end || Ae.refresh(0, 1) || (Ue = S),
                  (ei = Ae.pin),
                  ei &&
                    (ei === h || ei === d || ei === xt) &&
                    !Ae.isReverted &&
                    (Hr || (Hr = []), Hr.unshift(Ae), Ae.revert(!0, !0)),
                  Ae !== Y[dt] && (Jt--, dt--);
              for (
                nt(ue) && (ue = ue(S)),
                  ue = Hl(ue, 'start', S),
                  ee =
                    uc(ue, h, De, T, me(), ct, P, S, J, G, D, be, E, S._startClamp && '_startClamp') ||
                    (d ? -0.001 : 0),
                  nt(se) && (se = se(S)),
                  Pt(se) &&
                    !se.indexOf('+=') &&
                    (~se.indexOf(' ')
                      ? (se = (Pt(ue) ? ue.split(' ')[0] : '') + se)
                      : ((Ie = on(se.substr(2), De)),
                        (se = Pt(ue)
                          ? ue
                          : (E
                              ? R.utils.mapRange(0, E.duration(), E.scrollTrigger.start, E.scrollTrigger.end, ee)
                              : ee) + Ie),
                        (jt = h))),
                  se = Hl(se, 'end', S),
                  Se =
                    Math.max(
                      ee,
                      uc(
                        se || (jt ? '100% 0' : be),
                        jt,
                        De,
                        T,
                        me() + Ie,
                        wt,
                        bt,
                        S,
                        J,
                        G,
                        D,
                        be,
                        E,
                        S._endClamp && '_endClamp'
                      )
                    ) || -0.001,
                  Ie = 0,
                  dt = Jt;
                dt--;

              )
                (Ae = Y[dt]),
                  (ei = Ae.pin),
                  ei &&
                    Ae.start - Ae._pinPush <= ee &&
                    !E &&
                    Ae.end > 0 &&
                    ((qe = Ae.end - (S._startClamp ? Math.max(0, Ae.start) : Ae.start)),
                    ((ei === h && Ae.start - Ae._pinPush < ee) || ei === xt) &&
                      isNaN(ue) &&
                      (Ie += qe * (1 - Ae.progress)),
                    ei === d && (ce += qe));
              if (
                ((ee += Ie),
                (Se += Ie),
                S._startClamp && (S._startClamp += Ie),
                S._endClamp && !ot && ((S._endClamp = Se || -0.001), (Se = Math.min(Se, li(O, T)))),
                (Te = Se - ee || ((ee -= 0.01) && 0.001)),
                Qe && (We = R.utils.clamp(0, 1, R.utils.normalize(ee, Se, Xt))),
                (S._pinPush = ce),
                ct && Ie && ((qe = {}), (qe[T.a] = '+=' + Ie), xt && (qe[T.p] = '-=' + me()), R.set([ct, wt], qe)),
                d && !(Mo && S.end >= li(O, T)))
              )
                (qe = Vt(d)),
                  (Ms = T === ke),
                  (ji = me()),
                  ($i = parseFloat($t(T.a)) + ce),
                  !be &&
                    Se > 1 &&
                    ((ti = (L ? he.scrollingElement || Kt : O).style),
                    (ti = { style: ti, value: ti['overflow' + T.a.toUpperCase()] }),
                    L &&
                      Vt(ae)['overflow' + T.a.toUpperCase()] !== 'scroll' &&
                      (ti.style['overflow' + T.a.toUpperCase()] = 'scroll')),
                  Vo(d, Pe, qe),
                  ($r = dn(d)),
                  (He = _i(d, !0)),
                  (An = D && Di(O, Ms ? tt : ke)()),
                  m &&
                    ((ut = [m + T.os2, Te + ce + Ne]),
                    (ut.t = Pe),
                    (dt = m === Oe ? Io(d, T) + Te + ce : 0),
                    dt && (ut.push(T.d, dt + Ne), Pe.style.flexBasis !== 'auto' && (Pe.style.flexBasis = dt + Ne)),
                    Fr(ut),
                    xt &&
                      Y.forEach(function (Yr) {
                        Yr.pin === xt && Yr.vars.pinSpacing !== !1 && (Yr._subPinOffset = !0);
                      }),
                    D && me(Xt)),
                  D &&
                    ((Ge = {
                      top: He.top + (Ms ? ji - ee : An) + Ne,
                      left: He.left + (Ms ? An : ji - ee) + Ne,
                      boxSizing: 'border-box',
                      position: 'fixed',
                    }),
                    (Ge[cr] = Ge['max' + Nr] = Math.ceil(He.width) + Ne),
                    (Ge[ur] = Ge['max' + Do] = Math.ceil(He.height) + Ne),
                    (Ge[Wt] = Ge[Wt + vs] = Ge[Wt + ms] = Ge[Wt + _s] = Ge[Wt + gs] = '0'),
                    (Ge[Oe] = qe[Oe]),
                    (Ge[Oe + vs] = qe[Oe + vs]),
                    (Ge[Oe + ms] = qe[Oe + ms]),
                    (Ge[Oe + _s] = qe[Oe + _s]),
                    (Ge[Oe + gs] = qe[Oe + gs]),
                    (qi = kd(Vi, Ge, b)),
                    ot && me(0)),
                  r
                    ? ((ua = r._initted),
                      So(1),
                      r.render(r.duration(), !0, !0),
                      (di = $t(T.a) - $i + Te + ce),
                      (gr = Math.abs(Te - di) > 1),
                      D && gr && qi.splice(qi.length - 2, 2),
                      r.render(0, !0, !0),
                      ua || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      So(0))
                    : (di = Te),
                  ti &&
                    (ti.value
                      ? (ti.style['overflow' + T.a.toUpperCase()] = ti.value)
                      : ti.style.removeProperty('overflow-' + T.a));
              else if (h && me() && !E)
                for (He = h.parentNode; He && He !== ae; )
                  He._pinOffset && ((ee -= He._pinOffset), (Se -= He._pinOffset)), (He = He.parentNode);
              Hr &&
                Hr.forEach(function (Yr) {
                  return Yr.revert(!1, !0);
                }),
                (S.start = ee),
                (S.end = Se),
                (Ke = Qt = ot ? Xt : me()),
                !E && !ot && (Ke < Xt && me(Xt), (S.scroll.rec = 0)),
                S.revert(!1, !0),
                (pe = st()),
                Yt && ((re = -1), Yt.restart(!0)),
                (Ue = 0),
                r && A && (r._initted || Xi) && r.progress() !== Xi && r.progress(Xi || 0, !0).render(r.time(), !0, !0),
                (Qe || We !== S.progress || E) &&
                  (r && !A && r.totalProgress(E && ee < -0.001 && !We ? R.utils.normalize(ee, Se, 0) : We, !0),
                  (S.progress = Qe || (Ke - ee) / Te === We ? 0 : We)),
                d && m && (Pe._pinOffset = Math.round(S.progress * di)),
                Z && Z.invalidate(),
                isNaN(Gr) ||
                  ((Gr -= R.getProperty(P, T.p)),
                  (Os -= R.getProperty(bt, T.p)),
                  hn(P, T, Gr),
                  hn(ct, T, Gr - (j || 0)),
                  hn(bt, T, Os),
                  hn(wt, T, Os - (j || 0))),
                Qe && !ot && S.update(),
                u && !ot && !Wi && ((Wi = !0), u(S), (Wi = !1));
            }
          }),
          (S.getVelocity = function () {
            return ((me() - Qt) / (st() - js)) * 1e3 || 0;
          }),
          (S.endAnimation = function () {
            ps(S.callbackAnimation),
              r && (Z ? Z.progress(1) : r.paused() ? A || ps(r, S.direction < 0, 1) : ps(r, r.reversed()));
          }),
          (S.labelToScroll = function (z) {
            return (r && r.labels && (ee || S.refresh() || ee) + (r.labels[z] / r.duration()) * Te) || 0;
          }),
          (S.getTrailing = function (z) {
            var X = Y.indexOf(S),
              W = S.direction > 0 ? Y.slice(0, X).reverse() : Y.slice(X + 1);
            return (
              Pt(z)
                ? W.filter(function (j) {
                    return j.vars.preventOverlaps === z;
                  })
                : W
            ).filter(function (j) {
              return S.direction > 0 ? j.end <= ee : j.start >= Se;
            });
          }),
          (S.update = function (z, X, W) {
            if (!(E && !W && !z)) {
              var j = ot === !0 ? Xt : S.scroll(),
                De = z ? 0 : (j - ee) / Te,
                J = De < 0 ? 0 : De > 1 ? 1 : De || 0,
                be = S.progress,
                Qe,
                Ie,
                ce,
                se,
                jt,
                ue,
                xt,
                Jt;
              if (
                (X && ((Qt = Ke), (Ke = E ? me() : j), w && ((bi = wi), (wi = r && !A ? r.totalProgress() : J))),
                y && !J && d && !Ue && !Zs && Ft && ee < j + ((j - Qt) / (st() - js)) * y && (J = 1e-4),
                J !== be && S.enabled)
              ) {
                if (
                  ((Qe = S.isActive = !!J && J < 1),
                  (Ie = !!be && be < 1),
                  (ue = Qe !== Ie),
                  (jt = ue || !!J != !!be),
                  (S.direction = J > be ? 1 : -1),
                  (S.progress = J),
                  jt &&
                    !Ue &&
                    ((ce = J && !be ? 0 : J === 1 ? 1 : be === 1 ? 2 : 3),
                    A &&
                      ((se = (!ue && B[ce + 1] !== 'none' && B[ce + 1]) || B[ce]),
                      (Jt = r && (se === 'complete' || se === 'reset' || se in r)))),
                  C &&
                    (ue || Jt) &&
                    (Jt || f || !r) &&
                    (nt(C)
                      ? C(S)
                      : S.getTrailing(C).forEach(function (ji) {
                          return ji.endAnimation();
                        })),
                  A ||
                    (Z && !Ue && !Zs
                      ? (Z._dp._time - Z._start !== Z._time && Z.render(Z._dp._time - Z._start),
                        Z.resetTo
                          ? Z.resetTo('totalProgress', J, r._tTime / r._tDur)
                          : ((Z.vars.totalProgress = J), Z.invalidate().restart()))
                      : r && r.totalProgress(J, !!(Ue && (pe || z)))),
                  d)
                ) {
                  if ((z && m && (Pe.style[m + T.os2] = Zt), !D)) Ht(hs($i + di * J));
                  else if (jt) {
                    if (((xt = !z && J > be && Se + 1 > j && j + 1 >= li(O, T)), b))
                      if (!z && (Qe || xt)) {
                        var dt = _i(d, !0),
                          qe = j - ee;
                        dc(d, ae, dt.top + (T === ke ? qe : 0) + Ne, dt.left + (T === ke ? 0 : qe) + Ne);
                      } else dc(d, Pe);
                    Fr(Qe || xt ? qi : $r), (gr && J < 1 && Qe) || Ht($i + (J === 1 && !xt ? di : 0));
                  }
                }
                w && !Ve.tween && !Ue && !Zs && Yt.restart(!0),
                  a &&
                    (ue || (v && J && (J < 1 || !Oo))) &&
                    ds(a.targets).forEach(function (ji) {
                      return ji.classList[Qe || v ? 'add' : 'remove'](a.className);
                    }),
                  o && !A && !z && o(S),
                  jt && !Ue
                    ? (A &&
                        (Jt &&
                          (se === 'complete'
                            ? r.pause().totalProgress(1)
                            : se === 'reset'
                            ? r.restart(!0).pause()
                            : se === 'restart'
                            ? r.restart(!0)
                            : r[se]()),
                        o && o(S)),
                      (ue || !Oo) &&
                        (c && ue && Ao(S, c),
                        N[ce] && Ao(S, N[ce]),
                        v && (J === 1 ? S.kill(!1, 1) : (N[ce] = 0)),
                        ue || ((ce = J === 1 ? 1 : 3), N[ce] && Ao(S, N[ce]))),
                      M &&
                        !Qe &&
                        Math.abs(S.getVelocity()) > (en(M) ? M : 2500) &&
                        (ps(S.callbackAnimation), Z ? Z.progress(1) : ps(r, se === 'reverse' ? 1 : !J, 1)))
                    : A && o && !Ue && o(S);
              }
              if (vr) {
                var He = E ? (j / E.duration()) * (E._caScrollDist || 0) : j;
                Hi(He + (P._isFlipped ? 1 : 0)), vr(He);
              }
              _r && _r((-j / E.duration()) * (E._caScrollDist || 0));
            }
          }),
          (S.enable = function (z, X) {
            S.enabled ||
              ((S.enabled = !0),
              Be(O, 'resize', ws),
              L || Be(O, 'scroll', Br),
              q && Be(n, 'refreshInit', q),
              z !== !1 && ((S.progress = We = 0), (Ke = Qt = re = me())),
              X !== !1 && S.refresh());
          }),
          (S.getTween = function (z) {
            return z && Ve ? Ve.tween : Z;
          }),
          (S.setPositions = function (z, X, W, j) {
            if (E) {
              var De = E.scrollTrigger,
                J = E.duration(),
                be = De.end - De.start;
              (z = De.start + (be * z) / J), (X = De.start + (be * X) / J);
            }
            S.refresh(!1, !1, { start: Gl(z, W && !!S._startClamp), end: Gl(X, W && !!S._endClamp) }, j), S.update();
          }),
          (S.adjustPinSpacing = function (z) {
            if (ut && z) {
              var X = ut.indexOf(T.d) + 1;
              (ut[X] = parseFloat(ut[X]) + z + Ne), (ut[1] = parseFloat(ut[1]) + z + Ne), Fr(ut);
            }
          }),
          (S.disable = function (z, X) {
            if (
              S.enabled &&
              (z !== !1 && S.revert(!0, !0),
              (S.enabled = S.isActive = !1),
              X || (Z && Z.pause()),
              (Xt = 0),
              Le && (Le.uncache = 1),
              q && Fe(n, 'refreshInit', q),
              Yt && (Yt.pause(), Ve.tween && Ve.tween.kill() && (Ve.tween = 0)),
              !L)
            ) {
              for (var W = Y.length; W--; ) if (Y[W].scroller === O && Y[W] !== S) return;
              Fe(O, 'resize', ws), L || Fe(O, 'scroll', Br);
            }
          }),
          (S.kill = function (z, X) {
            S.disable(z, X), Z && !X && Z.kill(), l && delete Ro[l];
            var W = Y.indexOf(S);
            W >= 0 && Y.splice(W, 1),
              W === it && cn > 0 && it--,
              (W = 0),
              Y.forEach(function (j) {
                return j.scroller === S.scroller && (W = 1);
              }),
              W || ot || (S.scroll.rec = 0),
              r && ((r.scrollTrigger = null), z && r.revert({ kill: !1 }), X || r.kill()),
              ct &&
                [ct, wt, P, bt].forEach(function (j) {
                  return j.parentNode && j.parentNode.removeChild(j);
                }),
              bs === S && (bs = 0),
              d &&
                (Le && (Le.uncache = 1),
                (W = 0),
                Y.forEach(function (j) {
                  return j.pin === d && W++;
                }),
                W || (Le.spacer = 0)),
              t.onKill && t.onKill(S);
          }),
          Y.push(S),
          S.enable(!1, !1),
          fi && fi(S),
          r && r.add && !Te)
        ) {
          var Ee = S.update;
          (S.update = function () {
            (S.update = Ee), ee || Se || S.refresh();
          }),
            R.delayedCall(0.01, S.update),
            (Te = 0.01),
            (ee = Se = 0);
        } else S.refresh();
        d && Od();
      }),
      (n.register = function (t) {
        return Lr || ((R = t || Ul()), jl() && window.document && n.enable(), (Lr = fs)), Lr;
      }),
      (n.defaults = function (t) {
        if (t) for (var r in t) sn[r] = t[r];
        return sn;
      }),
      (n.disable = function (t, r) {
        (fs = 0),
          Y.forEach(function (o) {
            return o[r ? 'kill' : 'disable'](t);
          }),
          Fe(Q, 'wheel', Br),
          Fe(he, 'scroll', Br),
          clearInterval(Us),
          Fe(he, 'touchcancel', ai),
          Fe(ae, 'touchstart', ai),
          tn(Fe, he, 'pointerdown,touchstart,mousedown', Yl),
          tn(Fe, he, 'pointerup,touchend,mouseup', Xl),
          Xs.kill(),
          Js(Fe);
        for (var s = 0; s < U.length; s += 3) rn(Fe, U[s], U[s + 1]), rn(Fe, U[s], U[s + 2]);
      }),
      (n.enable = function () {
        if (
          ((Q = window),
          (he = document),
          (Kt = he.documentElement),
          (ae = he.body),
          R &&
            ((ds = R.utils.toArray),
            (Dr = R.utils.clamp),
            (To = R.core.context || ai),
            (So = R.core.suppressOverwrites || ai),
            (Eo = Q.history.scrollRestoration || 'auto'),
            (Fo = Q.pageYOffset),
            R.core.globals('ScrollTrigger', n),
            ae))
        ) {
          (fs = 1),
            (zr = document.createElement('div')),
            (zr.style.height = '100vh'),
            (zr.style.position = 'absolute'),
            lc(),
            bd(),
            Me.register(R),
            (n.isTouch = Me.isTouch),
            (Ii = Me.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            Be(Q, 'wheel', Br),
            (Rl = [Q, he, Kt, ae]),
            R.matchMedia &&
              ((n.matchMedia = function (l) {
                var c = R.matchMedia(),
                  u;
                for (u in l) c.add(u, l[u]);
                return c;
              }),
              R.addEventListener('matchMediaInit', function () {
                return Bo();
              }),
              R.addEventListener('matchMediaRevert', function () {
                return nc();
              }),
              R.addEventListener('matchMedia', function () {
                pr(0, 1), fr('matchMedia');
              }),
              R.matchMedia('(orientation: portrait)', function () {
                return No(), No;
              })),
            No(),
            Be(he, 'scroll', Br);
          var t = ae.style,
            r = t.borderTopStyle,
            s = R.core.Animation.prototype,
            o,
            a;
          for (
            s.revert ||
              Object.defineProperty(s, 'revert', {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              t.borderTopStyle = 'solid',
              o = _i(ae),
              ke.m = Math.round(o.top + ke.sc()) || 0,
              tt.m = Math.round(o.left + tt.sc()) || 0,
              r ? (t.borderTopStyle = r) : t.removeProperty('border-top-style'),
              Us = setInterval(rc, 250),
              R.delayedCall(0.5, function () {
                return (Zs = 0);
              }),
              Be(he, 'touchcancel', ai),
              Be(ae, 'touchstart', ai),
              tn(Be, he, 'pointerdown,touchstart,mousedown', Yl),
              tn(Be, he, 'pointerup,touchend,mouseup', Xl),
              xo = R.utils.checkPrefix('transform'),
              un.push(xo),
              Lr = st(),
              Xs = R.delayedCall(0.2, pr).pause(),
              Ir = [
                he,
                'visibilitychange',
                function () {
                  var l = Q.innerWidth,
                    c = Q.innerHeight;
                  he.hidden ? ((Nl = l), (Bl = c)) : (Nl !== l || Bl !== c) && ws();
                },
                he,
                'DOMContentLoaded',
                pr,
                Q,
                'load',
                pr,
                Q,
                'resize',
                ws,
              ],
              Js(Be),
              Y.forEach(function (l) {
                return l.enable(0, 1);
              }),
              a = 0;
            a < U.length;
            a += 3
          )
            rn(Fe, U[a], U[a + 1]), rn(Fe, U[a], U[a + 2]);
        }
      }),
      (n.config = function (t) {
        'limitCallbacks' in t && (Oo = !!t.limitCallbacks);
        var r = t.syncInterval;
        (r && clearInterval(Us)) || ((Us = r) && setInterval(rc, r)),
          'ignoreMobileResize' in t && (Vl = n.isTouch === 1 && t.ignoreMobileResize),
          'autoRefreshEvents' in t &&
            (Js(Fe) || Js(Be, t.autoRefreshEvents || 'none'),
            (Wl = (t.autoRefreshEvents + '').indexOf('resize') === -1));
      }),
      (n.scrollerProxy = function (t, r) {
        var s = vt(t),
          o = U.indexOf(s),
          a = ar(s);
        ~o && U.splice(o, a ? 6 : 2), r && (a ? oi.unshift(Q, r, ae, r, Kt, r) : oi.unshift(s, r));
      }),
      (n.clearMatchMedia = function (t) {
        Y.forEach(function (r) {
          return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
        });
      }),
      (n.isInViewport = function (t, r, s) {
        var o = (Pt(t) ? vt(t) : t).getBoundingClientRect(),
          a = o[s ? cr : ur] * r || 0;
        return s ? o.right - a > 0 && o.left + a < Q.innerWidth : o.bottom - a > 0 && o.top + a < Q.innerHeight;
      }),
      (n.positionInViewport = function (t, r, s) {
        Pt(t) && (t = vt(t));
        var o = t.getBoundingClientRect(),
          a = o[s ? cr : ur],
          l =
            r == null ? a / 2 : r in nn ? nn[r] * a : ~r.indexOf('%') ? (parseFloat(r) * a) / 100 : parseFloat(r) || 0;
        return s ? (o.left + l) / Q.innerWidth : (o.top + l) / Q.innerHeight;
      }),
      (n.killAll = function (t) {
        if (
          (Y.slice(0).forEach(function (s) {
            return s.vars.id !== 'ScrollSmoother' && s.kill();
          }),
          t !== !0)
        ) {
          var r = dr.killAll || [];
          (dr = {}),
            r.forEach(function (s) {
              return s();
            });
        }
      }),
      n
    );
  })();
(H.version = '3.12.4'),
  (H.saveStyles = function (n) {
    return n
      ? ds(n).forEach(function (e) {
          if (e && e.style) {
            var i = At.indexOf(e);
            i >= 0 && At.splice(i, 5),
              At.push(e, e.style.cssText, e.getBBox && e.getAttribute('transform'), R.core.getCache(e), To());
          }
        })
      : At;
  }),
  (H.revert = function (n, e) {
    return Bo(!n, e);
  }),
  (H.create = function (n, e) {
    return new H(n, e);
  }),
  (H.refresh = function (n) {
    return n ? ws() : (Lr || H.register()) && pr(!0);
  }),
  (H.update = function (n) {
    return ++U.cache && yi(n === !0 ? 2 : 0);
  }),
  (H.clearScrollMemory = oc),
  (H.maxScroll = function (n, e) {
    return li(n, e ? tt : ke);
  }),
  (H.getScrollFunc = function (n, e) {
    return Di(vt(n), e ? tt : ke);
  }),
  (H.getById = function (n) {
    return Ro[n];
  }),
  (H.getAll = function () {
    return Y.filter(function (n) {
      return n.vars.id !== 'ScrollSmoother';
    });
  }),
  (H.isScrolling = function () {
    return !!Ft;
  }),
  (H.snapDirectional = zo),
  (H.addEventListener = function (n, e) {
    var i = dr[n] || (dr[n] = []);
    ~i.indexOf(e) || i.push(e);
  }),
  (H.removeEventListener = function (n, e) {
    var i = dr[n],
      t = i && i.indexOf(e);
    t >= 0 && i.splice(t, 1);
  }),
  (H.batch = function (n, e) {
    var i = [],
      t = {},
      r = e.interval || 0.016,
      s = e.batchMax || 1e9,
      o = function (c, u) {
        var f = [],
          h = [],
          d = R.delayedCall(r, function () {
            u(f, h), (f = []), (h = []);
          }).pause();
        return function (m) {
          f.length || d.restart(!0), f.push(m.trigger), h.push(m), s <= f.length && d.progress(1);
        };
      },
      a;
    for (a in e) t[a] = a.substr(0, 2) === 'on' && nt(e[a]) && a !== 'onRefreshInit' ? o(a, e[a]) : e[a];
    return (
      nt(s) &&
        ((s = s()),
        Be(H, 'refresh', function () {
          return (s = e.batchMax());
        })),
      ds(n).forEach(function (l) {
        var c = {};
        for (a in t) c[a] = t[a];
        (c.trigger = l), i.push(H.create(c));
      }),
      i
    );
  });
var pc = function (e, i, t, r) {
    return i > r ? e(r) : i < 0 && e(0), t > r ? (r - i) / (t - i) : t < 0 ? i / (i - t) : 1;
  },
  qo = function n(e, i) {
    i === !0
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction = i === !0 ? 'auto' : i ? 'pan-' + i + (Me.isTouch ? ' pinch-zoom' : '') : 'none'),
      e === Kt && n(ae, i);
  },
  pn = { auto: 1, scroll: 1 },
  Dd = function (e) {
    var i = e.event,
      t = e.target,
      r = e.axis,
      s = (i.changedTouches ? i.changedTouches[0] : i).target,
      o = s._gsap || R.core.getCache(s),
      a = st(),
      l;
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== ae &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          !(pn[(l = Vt(s)).overflowY] || pn[l.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll = s && s !== t && !ar(s) && (pn[(l = Vt(s)).overflowY] || pn[l.overflowX])), (o._isScrollT = a);
    }
    (o._isScroll || r === 'x') && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  mc = function (e, i, t, r) {
    return Me.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (r = r && Dd),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return t && Be(he, Me.eventTypes[0], vc, !1, !0);
      },
      onDisable: function () {
        return Fe(he, Me.eventTypes[0], vc, !0);
      },
    });
  },
  Id = /(input|label|select|textarea)/i,
  gc,
  vc = function (e) {
    var i = Id.test(e.target.tagName);
    (i || gc) && ((e._gsapAllow = !0), (gc = i));
  },
  zd = function (e) {
    lr(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer');
    var i = e,
      t = i.normalizeScrollX,
      r = i.momentum,
      s = i.allowNestedScroll,
      o = i.onRelease,
      a,
      l,
      c = vt(e.target) || Kt,
      u = R.core.globals().ScrollSmoother,
      f = u && u.get(),
      h = Ii && ((e.content && vt(e.content)) || (f && e.content !== !1 && !f.smooth() && f.content())),
      d = Di(c, ke),
      m = Di(c, tt),
      p = 1,
      y =
        (Me.isTouch && Q.visualViewport ? Q.visualViewport.scale * Q.visualViewport.width : Q.outerWidth) /
        Q.innerWidth,
      _ = 0,
      g = nt(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      v,
      w,
      b = mc(c, e.type, !0, s),
      x = function () {
        return (w = !1);
      },
      E = ai,
      M = ai,
      C = function () {
        (l = li(c, ke)), (M = Dr(Ii ? 1 : 0, l)), t && (E = Dr(0, li(c, tt))), (v = hr);
      },
      T = function () {
        (h._gsap.y = hs(parseFloat(h._gsap.y) + d.offset) + 'px'),
          (h.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(h._gsap.y) + ', 0, 1)'),
          (d.offset = d.cacheID = 0);
      },
      A = function () {
        if (w) {
          requestAnimationFrame(x);
          var I = hs(a.deltaY / 2),
            G = M(d.v - I);
          if (h && G !== d.v + d.offset) {
            d.offset = G - d.v;
            var S = hs((parseFloat(h && h._gsap.y) || 0) - d.offset);
            (h.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + S + ', 0, 1)'),
              (h._gsap.y = S + 'px'),
              (d.cacheID = U.cache),
              yi();
          }
          return !0;
        }
        d.offset && T(), (w = !0);
      },
      O,
      k,
      L,
      D,
      N = function () {
        C(), O.isActive() && O.vars.scrollY > l && (d() > l ? O.progress(1) && d(l) : O.resetTo('scrollY', l));
      };
    return (
      h && R.set(h, { y: '+=0' }),
      (e.ignoreCheck = function (B) {
        return (
          (Ii && B.type === 'touchmove' && A()) ||
          (p > 1.05 && B.type !== 'touchstart') ||
          a.isGesturing ||
          (B.touches && B.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        w = !1;
        var B = p;
        (p = hs(((Q.visualViewport && Q.visualViewport.scale) || 1) / y)),
          O.pause(),
          B !== p && qo(c, p > 1.01 ? !0 : t ? !1 : 'x'),
          (k = m()),
          (L = d()),
          C(),
          (v = hr);
      }),
      (e.onRelease = e.onGestureStart =
        function (B, I) {
          if ((d.offset && T(), !I)) D.restart(!0);
          else {
            U.cache++;
            var G = g(),
              S,
              q;
            t &&
              ((S = m()),
              (q = S + (G * 0.05 * -B.velocityX) / 0.227),
              (G *= pc(m, S, q, li(c, tt))),
              (O.vars.scrollX = E(q))),
              (S = d()),
              (q = S + (G * 0.05 * -B.velocityY) / 0.227),
              (G *= pc(d, S, q, li(c, ke))),
              (O.vars.scrollY = M(q)),
              O.invalidate().duration(G).play(0.01),
              ((Ii && O.vars.scrollY >= l) || S >= l - 1) && R.to({}, { onUpdate: N, duration: G });
          }
          o && o(B);
        }),
      (e.onWheel = function () {
        O._ts && O.pause(), st() - _ > 1e3 && ((v = 0), (_ = st()));
      }),
      (e.onChange = function (B, I, G, S, q) {
        if ((hr !== v && C(), I && t && m(E(S[2] === I ? k + (B.startX - B.x) : m() + I - S[1])), G)) {
          d.offset && T();
          var le = q[2] === G,
            ye = le ? L + B.startY - B.y : d() + G - q[1],
            re = M(ye);
          le && ye !== re && (L += re - ye), d(re);
        }
        (G || I) && yi();
      }),
      (e.onEnable = function () {
        qo(c, t ? !1 : 'x'),
          H.addEventListener('refresh', N),
          Be(Q, 'resize', N),
          d.smooth && ((d.target.style.scrollBehavior = 'auto'), (d.smooth = m.smooth = !1)),
          b.enable();
      }),
      (e.onDisable = function () {
        qo(c, !0), Fe(Q, 'resize', N), H.removeEventListener('refresh', N), b.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new Me(e)),
      (a.iOS = Ii),
      Ii && !d() && d(1),
      Ii && R.ticker.add(ai),
      (D = a._dc),
      (O = R.to(a, {
        ease: 'power4',
        paused: !0,
        scrollX: t ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: fc(d, d(), function () {
            return O.pause();
          }),
        },
        onUpdate: yi,
        onComplete: D.vars.onComplete,
      })),
      a
    );
  };
(H.sort = function (n) {
  return Y.sort(
    n ||
      function (e, i) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (i.start + (i.vars.refreshPriority || 0) * -1e6);
      }
  );
}),
  (H.observe = function (n) {
    return new Me(n);
  }),
  (H.normalizeScroll = function (n) {
    if (typeof n > 'u') return rt;
    if (n === !0 && rt) return rt.enable();
    if (n === !1) {
      rt && rt.kill(), (rt = n);
      return;
    }
    var e = n instanceof Me ? n : zd(n);
    return rt && rt.target === e.target && rt.kill(), ar(e.target) && (rt = e), e;
  }),
  (H.core = {
    _getVelocityProp: bo,
    _inputObserver: mc,
    _scrollers: U,
    _proxies: oi,
    bridge: {
      ss: function () {
        Ft || fr('scrollStart'), (Ft = st());
      },
      ref: function () {
        return Ue;
      },
    },
  }),
  Ul() && R.registerPlugin(H),
  V.registerPlugin(H);
class Rd {
  constructor(e) {
    (this.lenis = e),
      (this.isTopPage = window.location.pathname === '/' || 'https://'),
      (this.isProductDetailPage =
        window.location.pathname === '/products/eleki-lift/' || 'https://'),
      this.init();
  }
  init() {
    const e = 'visited';
    sessionStorage.getItem(e)
      ? ((document.querySelector('#loding').style.display = 'none'),
        this.lenis.start(),
        document.body.classList.add('-loaded'),
        document.body.classList.add('-visited'),
        this.isTopPage &&
          V.fromTo('.p-home-kv__model', { scale: 1.07 }, { scale: 1, ease: 'power1.out', duration: 1.25 }),
        this.isProductDetailPage &&
          V.fromTo(
            '.p-productDetail-kv__image-wrap',
            { scale: 1.07 },
            { scale: 1, ease: 'power1.out', duration: 1.25 }
          ))
      : (sessionStorage.setItem(e, !0), this._loadingAnimation());
  }
  _loadingAnimation() {
    const e = document.querySelector('#loding'),
      i = e.querySelector('.l-loding__logo'),
      t = document.querySelector('.p-home-kv__model'),
      r = document.querySelector('#header'),
      s = document.querySelector('.l-fixed-scroller__progress'),
      o = document.querySelector('.l-fixed-scroller__text span'),
      a = document.querySelector('.l-fixed-scroller__line'),
      l = document.querySelector('#menuTrigger'),
      c = document.querySelector('#productNav'),
      u = document.querySelector('.p-productDetail-kv__image-wrap');
    document.querySelector('.p-home-contaner');
    const f = V.timeline();
    this.lenis.stop(),
      this.isTopPage
        ? f
            .fromTo(i, { opacity: 0, y: 25 }, { opacity: 1, y: 0, ease: 'power1.out', duration: 1 })
            .to(
              i,
              {
                opacity: 0,
                y: -25,
                ease: 'power1.out',
                duration: 0.9,
                onComplete: () => {
                  this.lenis.start(), document.body.classList.add('-loaded');
                },
              },
              '+=.1'
            )
            .to(e, { opacity: 0, ease: 'power1.out', duration: 0.9 }, '<')
            .fromTo(t, { scale: 1.07 }, { scale: 1, ease: 'power1.out', duration: 1.25 }, '-=1')
            .to(s, { opacity: 1, ase: 'power1.out', duration: 0.8 }, '<')
            .fromTo(
              o,
              { opacity: 0, yPercent: 100 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 0.8 },
              '<'
            )
            .fromTo(a, { opacity: 0 }, { opacity: 1, ease: 'power1.out', duration: 0.8 }, '<')
            .fromTo(
              r,
              { opacity: 0, yPercent: -250 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.2 },
              '<'
            )
            .fromTo(
              l,
              { opacity: 0, yPercent: -250 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.2 },
              '<'
            )
        : this.isProductDetailPage
        ? f
            .fromTo(i, { opacity: 0, y: 25 }, { opacity: 1, y: 0, ease: 'power1.out', duration: 1 })
            .to(
              i,
              {
                opacity: 0,
                y: -25,
                ease: 'power1.out',
                duration: 0.9,
                onComplete: () => {
                  this.lenis.start(), document.body.classList.add('-loaded');
                },
              },
              '+=.1'
            )
            .to(e, { opacity: 0, ease: 'power1.out', duration: 0.9 }, '<')
            .fromTo(u, { scale: 1.07 }, { scale: 1, ease: 'power1.out', duration: 1.25 }, '-=1')
            .to(s, { opacity: 1, ase: 'power1.out', duration: 0.8 }, '<')
            .fromTo(
              o,
              { opacity: 0, yPercent: 100 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 0.8 },
              '<'
            )
            .fromTo(
              r,
              { opacity: 0, yPercent: -250 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.2 },
              '<'
            )
            .fromTo(
              l,
              { opacity: 0, yPercent: -250 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.2 },
              '<'
            )
            .fromTo(c, { opacity: 0 }, { opacity: 1, ease: 'power2.out', duration: 0.8 }, '-=.4')
        : f
            .fromTo(i, { opacity: 0, y: 25 }, { opacity: 1, y: 0, ease: 'power1.out', duration: 1 })
            .to(
              i,
              {
                opacity: 0,
                y: -25,
                ease: 'power1.out',
                duration: 0.9,
                onComplete: () => {
                  this.lenis.start(), document.body.classList.add('-loaded');
                },
              },
              '+=.1'
            )
            .to(e, { opacity: 0, ease: 'power1.out', duration: 0.9 }, '<')
            .to(s, { opacity: 1, ase: 'power1.out', duration: 9.8 }, '<')
            .fromTo(
              o,
              { opacity: 0, yPercent: 100 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 0.8 },
              '<'
            )
            .fromTo(a, { opacity: 0 }, { opacity: 1, ease: 'power1.out', duration: 0.8 }, '<')
            .fromTo(
              r,
              { opacity: 0, yPercent: -250 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.2 },
              '<'
            )
            .fromTo(
              l,
              { opacity: 0, yPercent: -250 },
              { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.2 },
              '<'
            )
            .fromTo(c, { opacity: 0 }, { opacity: 1, ease: 'power2.out', duration: 0.8 }, '-=.4');
  }
}
function $o() {
  return (
    ($o = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (n[t] = i[t]);
          }
          return n;
        }),
    $o.apply(this, arguments)
  );
}
function mn(n, e, i) {
  return Math.max(n, Math.min(e, i));
}
let Nd = class {
    advance(e) {
      var i;
      if (!this.isRunning) return;
      let t = !1;
      if (this.lerp)
        (this.value = ((r = this.value), (s = this.to), (1 - (o = 1 - Math.exp(-60 * this.lerp * e))) * r + o * s)),
          Math.round(this.value) === this.to && ((this.value = this.to), (t = !0));
      else {
        this.currentTime += e;
        const a = mn(0, this.currentTime / this.duration, 1);
        t = a >= 1;
        const l = t ? 1 : this.easing(a);
        this.value = this.from + (this.to - this.from) * l;
      }
      var r, s, o;
      (i = this.onUpdate) == null || i.call(this, this.value, t), t && this.stop();
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(e, i, { lerp: t = 0.1, duration: r = 1, easing: s = (l) => l, onStart: o, onUpdate: a }) {
      (this.from = this.value = e),
        (this.to = i),
        (this.lerp = t),
        (this.duration = r),
        (this.easing = s),
        (this.currentTime = 0),
        (this.isRunning = !0),
        o?.(),
        (this.onUpdate = a);
    }
  },
  Bd = class {
    constructor({ wrapper: e, content: i, autoResize: t = !0 } = {}) {
      if (
        ((this.resize = () => {
          this.onWrapperResize(), this.onContentResize();
        }),
        (this.onWrapperResize = () => {
          this.wrapper === window
            ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
        }),
        (this.onContentResize = () => {
          (this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth);
        }),
        (this.wrapper = e),
        (this.content = i),
        t)
      ) {
        const r = (function (s, o) {
          let a;
          return function () {
            let l = arguments,
              c = this;
            clearTimeout(a),
              (a = setTimeout(function () {
                s.apply(c, l);
              }, 250));
          };
        })(this.resize);
        this.wrapper !== window &&
          ((this.wrapperResizeObserver = new ResizeObserver(r)), this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(r)),
          this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    destroy() {
      var e, i;
      (e = this.wrapperResizeObserver) == null || e.disconnect(),
        (i = this.contentResizeObserver) == null || i.disconnect();
    }
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  },
  _c = class {
    constructor() {
      this.events = {};
    }
    emit(e, ...i) {
      let t = this.events[e] || [];
      for (let r = 0, s = t.length; r < s; r++) t[r](...i);
    }
    on(e, i) {
      var t;
      return (
        ((t = this.events[e]) != null && t.push(i)) || (this.events[e] = [i]),
        () => {
          var r;
          this.events[e] = (r = this.events[e]) == null ? void 0 : r.filter((s) => i !== s);
        }
      );
    }
    off(e, i) {
      var t;
      this.events[e] = (t = this.events[e]) == null ? void 0 : t.filter((r) => i !== r);
    }
    destroy() {
      this.events = {};
    }
  },
  Fd = class {
    constructor(e, { wheelMultiplier: i = 1, touchMultiplier: t = 2, normalizeWheel: r = !1 }) {
      (this.onTouchStart = (s) => {
        const { clientX: o, clientY: a } = s.targetTouches ? s.targetTouches[0] : s;
        (this.touchStart.x = o), (this.touchStart.y = a), (this.lastDelta = { x: 0, y: 0 });
      }),
        (this.onTouchMove = (s) => {
          const { clientX: o, clientY: a } = s.targetTouches ? s.targetTouches[0] : s,
            l = -(o - this.touchStart.x) * this.touchMultiplier,
            c = -(a - this.touchStart.y) * this.touchMultiplier;
          (this.touchStart.x = o),
            (this.touchStart.y = a),
            (this.lastDelta = { x: l, y: c }),
            this.emitter.emit('scroll', { deltaX: l, deltaY: c, event: s });
        }),
        (this.onTouchEnd = (s) => {
          this.emitter.emit('scroll', { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: s });
        }),
        (this.onWheel = (s) => {
          let { deltaX: o, deltaY: a } = s;
          this.normalizeWheel && ((o = mn(-100, o, 100)), (a = mn(-100, a, 100))),
            (o *= this.wheelMultiplier),
            (a *= this.wheelMultiplier),
            this.emitter.emit('scroll', { deltaX: o, deltaY: a, event: s });
        }),
        (this.element = e),
        (this.wheelMultiplier = i),
        (this.touchMultiplier = t),
        (this.normalizeWheel = r),
        (this.touchStart = { x: null, y: null }),
        (this.emitter = new _c()),
        this.element.addEventListener('wheel', this.onWheel, { passive: !1 }),
        this.element.addEventListener('touchstart', this.onTouchStart, { passive: !1 }),
        this.element.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
        this.element.addEventListener('touchend', this.onTouchEnd, { passive: !1 });
    }
    on(e, i) {
      return this.emitter.on(e, i);
    }
    destroy() {
      this.emitter.destroy(),
        this.element.removeEventListener('wheel', this.onWheel, { passive: !1 }),
        this.element.removeEventListener('touchstart', this.onTouchStart, { passive: !1 }),
        this.element.removeEventListener('touchmove', this.onTouchMove, { passive: !1 }),
        this.element.removeEventListener('touchend', this.onTouchEnd, { passive: !1 });
    }
  },
  Wd = class {
    constructor({
      wrapper: e = window,
      content: i = document.documentElement,
      wheelEventsTarget: t = e,
      eventsTarget: r = t,
      smoothWheel: s = !0,
      smoothTouch: o = !1,
      syncTouch: a = !1,
      syncTouchLerp: l = 0.1,
      __iosNoInertiaSyncTouchLerp: c = 0.4,
      touchInertiaMultiplier: u = 35,
      duration: f,
      easing: h = (b) => Math.min(1, 1.001 - Math.pow(2, -10 * b)),
      lerp: d = !f && 0.1,
      infinite: m = !1,
      orientation: p = 'vertical',
      gestureOrientation: y = 'vertical',
      touchMultiplier: _ = 1,
      wheelMultiplier: g = 1,
      normalizeWheel: v = !1,
      autoResize: w = !0,
    } = {}) {
      (this.onVirtualScroll = ({ deltaX: b, deltaY: x, event: E }) => {
        if (E.ctrlKey) return;
        const M = E.type.includes('touch'),
          C = E.type.includes('wheel');
        if (
          (this.options.gestureOrientation === 'both' && b === 0 && x === 0) ||
          (this.options.gestureOrientation === 'vertical' && x === 0) ||
          (this.options.gestureOrientation === 'horizontal' && b === 0) ||
          (M && this.options.gestureOrientation === 'vertical' && this.scroll === 0 && !this.options.infinite && x <= 0)
        )
          return;
        let T = E.composedPath();
        if (
          ((T = T.slice(0, T.indexOf(this.rootElement))),
          T.find((L) => {
            var D;
            return (
              (L.hasAttribute == null ? void 0 : L.hasAttribute('data-lenis-prevent')) ||
              (M && (L.hasAttribute == null ? void 0 : L.hasAttribute('data-lenis-prevent-touch'))) ||
              (C && (L.hasAttribute == null ? void 0 : L.hasAttribute('data-lenis-prevent-wheel'))) ||
              ((D = L.classList) == null ? void 0 : D.contains('lenis'))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void E.preventDefault();
        if (
          ((this.isSmooth =
            ((this.options.smoothTouch || this.options.syncTouch) && M) || (this.options.smoothWheel && C)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        E.preventDefault();
        let A = x;
        this.options.gestureOrientation === 'both'
          ? (A = Math.abs(x) > Math.abs(b) ? x : b)
          : this.options.gestureOrientation === 'horizontal' && (A = b);
        const O = M && this.options.syncTouch,
          k = M && E.type === 'touchend' && Math.abs(A) > 1;
        k && (A = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + A,
            $o({ programmatic: !1 }, O && { lerp: k ? this.syncTouchLerp : this.options.__iosNoInertiaSyncTouchLerp })
          );
      }),
        (this.onNativeScroll = () => {
          if (!this.__preventNextScrollEvent && !this.isScrolling) {
            const b = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.velocity = 0),
              (this.direction = Math.sign(this.animatedScroll - b)),
              this.emit();
          }
        }),
        (window.lenisVersion = '1.0.29'),
        (e !== document.documentElement && e !== document.body) || (e = window),
        (this.options = {
          wrapper: e,
          content: i,
          wheelEventsTarget: t,
          eventsTarget: r,
          smoothWheel: s,
          smoothTouch: o,
          syncTouch: a,
          syncTouchLerp: l,
          __iosNoInertiaSyncTouchLerp: c,
          touchInertiaMultiplier: u,
          duration: f,
          easing: h,
          lerp: d,
          infinite: m,
          gestureOrientation: y,
          orientation: p,
          touchMultiplier: _,
          wheelMultiplier: g,
          normalizeWheel: v,
          autoResize: w,
        }),
        (this.animate = new Nd()),
        (this.emitter = new _c()),
        (this.dimensions = new Bd({ wrapper: e, content: i, autoResize: w })),
        this.toggleClass('lenis', !0),
        (this.velocity = 0),
        (this.isLocked = !1),
        (this.isStopped = !1),
        (this.isSmooth = a || s || o),
        (this.isScrolling = !1),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener('scroll', this.onNativeScroll, { passive: !1 }),
        (this.virtualScroll = new Fd(r, { touchMultiplier: _, wheelMultiplier: g, normalizeWheel: v })),
        this.virtualScroll.on('scroll', this.onVirtualScroll);
    }
    destroy() {
      this.emitter.destroy(),
        this.options.wrapper.removeEventListener('scroll', this.onNativeScroll, { passive: !1 }),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.toggleClass('lenis', !1),
        this.toggleClass('lenis-smooth', !1),
        this.toggleClass('lenis-scrolling', !1),
        this.toggleClass('lenis-stopped', !1),
        this.toggleClass('lenis-locked', !1);
    }
    on(e, i) {
      return this.emitter.on(e, i);
    }
    off(e, i) {
      return this.emitter.off(e, i);
    }
    setScroll(e) {
      this.isHorizontal ? (this.rootElement.scrollLeft = e) : (this.rootElement.scrollTop = e);
    }
    resize() {
      this.dimensions.resize();
    }
    emit() {
      this.emitter.emit('scroll', this);
    }
    reset() {
      (this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.velocity = 0),
        this.animate.stop();
    }
    start() {
      (this.isStopped = !1), this.reset();
    }
    stop() {
      (this.isStopped = !0), this.animate.stop(), this.reset();
    }
    raf(e) {
      const i = e - (this.time || e);
      (this.time = e), this.animate.advance(0.001 * i);
    }
    scrollTo(
      e,
      {
        offset: i = 0,
        immediate: t = !1,
        lock: r = !1,
        duration: s = this.options.duration,
        easing: o = this.options.easing,
        lerp: a = !s && this.options.lerp,
        onComplete: l = null,
        force: c = !1,
        programmatic: u = !0,
      } = {}
    ) {
      if ((!this.isStopped && !this.isLocked) || c) {
        if (['top', 'left', 'start'].includes(e)) e = 0;
        else if (['bottom', 'right', 'end'].includes(e)) e = this.limit;
        else {
          var f;
          let h;
          if ((typeof e == 'string' ? (h = document.querySelector(e)) : (f = e) != null && f.nodeType && (h = e), h)) {
            if (this.options.wrapper !== window) {
              const m = this.options.wrapper.getBoundingClientRect();
              i -= this.isHorizontal ? m.left : m.top;
            }
            const d = h.getBoundingClientRect();
            e = (this.isHorizontal ? d.left : d.top) + this.animatedScroll;
          }
        }
        if (typeof e == 'number') {
          if (
            ((e += i),
            (e = Math.round(e)),
            this.options.infinite
              ? u && (this.targetScroll = this.animatedScroll = this.scroll)
              : (e = mn(0, e, this.limit)),
            t)
          )
            return (
              (this.animatedScroll = this.targetScroll = e),
              this.setScroll(this.scroll),
              this.reset(),
              void (l == null || l(this))
            );
          if (!u) {
            if (e === this.targetScroll) return;
            this.targetScroll = e;
          }
          this.animate.fromTo(this.animatedScroll, e, {
            duration: s,
            easing: o,
            lerp: a,
            onStart: () => {
              r && (this.isLocked = !0), (this.isScrolling = !0);
            },
            onUpdate: (h, d) => {
              (this.isScrolling = !0),
                (this.velocity = h - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = h),
                this.setScroll(this.scroll),
                u && (this.targetScroll = h),
                d || this.emit(),
                d &&
                  (this.reset(),
                  this.emit(),
                  l?.(this),
                  (this.__preventNextScrollEvent = !0),
                  requestAnimationFrame(() => {
                    delete this.__preventNextScrollEvent;
                  }));
            },
          });
        }
      }
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.dimensions.limit[this.isHorizontal ? 'x' : 'y'];
    }
    get isHorizontal() {
      return this.options.orientation === 'horizontal';
    }
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    get scroll() {
      return this.options.infinite ? ((this.animatedScroll % (e = this.limit)) + e) % e : this.animatedScroll;
      var e;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
      return this.__isSmooth;
    }
    set isSmooth(e) {
      this.__isSmooth !== e && ((this.__isSmooth = e), this.toggleClass('lenis-smooth', e));
    }
    get isScrolling() {
      return this.__isScrolling;
    }
    set isScrolling(e) {
      this.__isScrolling !== e && ((this.__isScrolling = e), this.toggleClass('lenis-scrolling', e));
    }
    get isStopped() {
      return this.__isStopped;
    }
    set isStopped(e) {
      this.__isStopped !== e && ((this.__isStopped = e), this.toggleClass('lenis-stopped', e));
    }
    get isLocked() {
      return this.__isLocked;
    }
    set isLocked(e) {
      this.__isLocked !== e && ((this.__isLocked = e), this.toggleClass('lenis-locked', e));
    }
    get className() {
      let e = 'lenis';
      return (
        this.isStopped && (e += ' lenis-stopped'),
        this.isLocked && (e += ' lenis-locked'),
        this.isScrolling && (e += ' lenis-scrolling'),
        this.isSmooth && (e += ' lenis-smooth'),
        e
      );
    }
    toggleClass(e, i) {
      this.rootElement.classList.toggle(e, i), this.emitter.emit('className change', this);
    }
  };
var yc = function (n) {
    return Array.prototype.slice.call(n);
  },
  wc = function () {
    var n = window.navigator.userAgent,
      e = !!n.match(/iPad/i) || !!n.match(/iPhone/i),
      i = !!n.match(/WebKit/i);
    return e && i && !n.match(/CriOS/i);
  },
  Vd = { scale: 1.5, speed: 1.5, wrapperClass: null, willChange: !1, externalRAF: !1 },
  at = function (n, e) {
    var i = this;
    if (
      ((this.element = n),
      (this.wrapper = document.createElement('div')),
      (this.options = Object.assign({}, Vd, e)),
      this.updateOptions(),
      (this.vh = document.documentElement.clientHeight),
      (this.isVisible = !1),
      (this.damp = this.calcDamp(document.documentElement.clientWidth)),
      (this.elementTagName = n.tagName.toLowerCase()),
      this.elementTagName === 'img')
    ) {
      var t = n.getAttribute('src');
      if (!t) return;
      (async function (r) {
        var s = new Image();
        return (s.src = r), await s.decode(), s;
      })(t).then(function () {
        i.createParallax();
      });
    } else this.createParallax();
  };
(at.prototype.createParallax = function () {
  this.setStyle(!0), this.wrapElement(), wc() || this.createObserver();
}),
  (at.prototype.updateOptions = function () {
    var n = this.element.getAttribute('data-u-scale'),
      e = this.element.getAttribute('data-u-speed'),
      i = this.element.getAttribute('data-u-willchange');
    n !== null && (this.options.scale = Number(n)),
      e !== null && (this.options.speed = Number(e)),
      i !== null && (this.options.willChange = !0);
  }),
  (at.prototype.setStyle = function (n) {
    n === void 0 && (n = !1);
    var e = this.element.clientHeight,
      i = this.element.clientWidth,
      t = window.getComputedStyle(this.element),
      r = t.position === 'absolute',
      s = this.wrapper.style,
      o = this.element.style,
      a = this.options.scale;
    r && t.marginRight !== '0px' && t.marginLeft !== '0px' && t.marginLeft === t.marginRight && (s.margin = 'auto'),
      (t.marginTop === '0px' && t.marginBottom === '0px') ||
        ((s.marginTop = t.marginTop), (s.marginBottom = t.marginBottom), (o.marginTop = '0'), (o.marginBottom = '0')),
      t.inset !== 'auto' &&
        ((s.top = t.top),
        (s.right = t.right),
        (s.bottom = t.bottom),
        (s.left = t.left),
        (o.top = '0'),
        (o.right = '0'),
        (o.bottom = '0'),
        (o.left = '0')),
      t.transform !== 'none' && (s.transform = t.transform),
      t.zIndex !== 'auto' && (s.zIndex = t.zIndex),
      (s.position = r ? 'absolute' : 'relative'),
      t.gridArea !== 'auto' &&
        t.gridArea !== 'auto / auto / auto / auto' &&
        ((s.gridArea = t.gridArea), (o.gridArea = 'auto')),
      n &&
        ((s.width = '100%'),
        (s.overflow = 'hidden'),
        (o.display = 'block'),
        (o.overflow = 'hidden'),
        (o.backfaceVisibility = 'hidden'),
        t.padding !== '0px' && (o.padding = '0'),
        this.elementTagName === 'img'
          ? (o.objectFit = 'cover')
          : this.elementTagName !== 'video' && (o.backgroundPosition = 'center')),
      t.borderRadius !== '0px' &&
        ((s.borderRadius = t.borderRadius),
        s.isolation || (s.isolation = 'isolate'),
        t.marginLeft !== '0px' && ((s.marginLeft = t.marginLeft), (o.marginLeft = '0')),
        t.marginRight !== '0px' && ((s.marginRight = t.marginRight), (o.marginRight = '0')),
        (s.width = i + 'px')),
      r && ((s.width = i + 'px'), (o.width = '100%')),
      t.maxHeight !== 'none' && ((s.maxHeight = t.maxHeight), (o.maxHeight = 'none')),
      t.minHeight !== '0px' && ((s.minHeight = t.minHeight), (o.minHeight = 'none')),
      (o.width = i + 'px'),
      s.setProperty('height', e + 'px', 'important'),
      o.setProperty('height', e * a + 'px', 'important'),
      (this.wrapperHeight = e),
      (this.overflow = Math.floor(10 * (e - e * a)) / 10);
  }),
  (at.prototype.wrapElement = function () {
    var n = this.element.getAttribute('data-u-wrapper-class') || this.options.wrapperClass;
    n && this.wrapper.classList.add(n);
    var e = this.element.closest('picture'),
      i = e !== null ? e : this.element,
      t = i.parentNode;
    t !== null && t.insertBefore(this.wrapper, i), this.wrapper.appendChild(i);
  }),
  (at.prototype.checkVisible = function () {
    var n = this.wrapper.getBoundingClientRect();
    n.bottom > 0 && n.top < window.innerHeight ? this.onEnter() : this.onLeave();
  }),
  (at.prototype.createObserver = function () {
    var n = this;
    (this.observer = new IntersectionObserver(
      function (e) {
        e[0].isIntersecting ? n.onEnter() : n.onLeave();
      },
      { root: null, rootMargin: '0px', threshold: 0 }
    )),
      this.observer.observe(this.wrapper);
  }),
  (at.prototype.onEnter = function () {
    var n = this.element.style,
      e = 'transform';
    this.options.willChange && n.willChange !== e && (n.willChange = e), (this.isVisible = !0);
  }),
  (at.prototype.onLeave = function () {
    var n = this.element;
    this.options.willChange && n.style.willChange === 'transform' && (n.style.willChange = ''), (this.isVisible = !1);
  }),
  (at.prototype.calcTranslateValue = function () {
    var n = window.pageYOffset;
    n < 0 && (n = 0);
    var e = this.wrapper.getBoundingClientRect().top + n,
      i = (n + this.vh - e) / ((this.vh + this.wrapperHeight) / 100),
      t = Math.min(100, Math.max(0, i)) / 100,
      r = this.overflow,
      s = this.options.speed,
      o = (r * s - r) / 2,
      a = r * (1 - t) * s * this.damp - o;
    return Number(a.toFixed(4));
  }),
  (at.prototype.calcDamp = function (n) {
    var e = this.options.scale,
      i = this.options.speed;
    if (!(i >= 1.4 || e >= 1.4) || !(n <= 1e3)) return 1;
    e < 1 && (e = 1), i < 1 && (i = 1);
    var t = 1.2 - (1 - (n / 1e3 + (3 - (e + i)))),
      r = Math.max(0.5, Math.min(1, t));
    return Math.floor(100 * r) / 100;
  }),
  (at.prototype.applyParallax = function () {
    this.element.style.transform = 'translate3d(0 , ' + this.calcTranslateValue() + 'px , 0)';
  }),
  (at.prototype.animate = function () {
    wc() && this.checkVisible(), window.pageYOffset < 0 || (this.isVisible && this.applyParallax());
  }),
  (at.prototype.reset = function () {
    this.damp = this.calcDamp(window.innerWidth);
    var n = this.wrapper.style,
      e = this.element.style;
    (this.vh = document.documentElement.clientHeight),
      (n.width = ''),
      (n.position = ''),
      (n.height = '100%'),
      (e.width = ''),
      this.elementTagName === 'img' && n.position === 'absolute' && (n.height = '100%'),
      n.gridArea === '' ? (e.height = '') : (e.height = '100%'),
      n.margin !== '0px' && ((n.margin = ''), (e.margin = '')),
      n.inset !== 'auto' &&
        ((n.top = ''),
        (n.right = ''),
        (n.bottom = ''),
        (n.left = ''),
        (e.top = ''),
        (e.right = ''),
        (e.bottom = ''),
        (e.left = '')),
      n.transform !== 'none' && ((n.transform = ''), (e.transform = '')),
      n.zIndex !== 'auto' && (n.zIndex = ''),
      n.borderRadius !== '0px' && ((n.borderRadius = ''), (n.isolation = '')),
      this.setStyle(),
      this.applyParallax();
  }),
  (at.prototype.destroy = function () {
    var n;
    this.observer && this.observer.disconnect(),
      this.wrapper.removeAttribute('style'),
      this.element.removeAttribute('style'),
      (n = this.wrapper).replaceWith.apply(n, this.wrapper.childNodes);
  });
var Wr = function (n, e) {
  if (!n) throw new Error("Argument 'elements' cannot be null.");
  var i, t;
  (this.instances = []),
    (this.externalRAF = (e && e.externalRAF) || !1),
    (this.onResizeEvent = this.resize.bind(this)),
    (i = typeof Promise < 'u' && Promise.toString().indexOf('[native code]') !== -1),
    (t = typeof Element < 'u' && Element.prototype.closest),
    i &&
      t &&
      'IntersectionObserver' in window &&
      this.init(
        (function (r) {
          return Array.isArray(r)
            ? r
            : typeof r == 'string'
            ? yc(document.querySelectorAll(r))
            : r instanceof HTMLElement
            ? [r]
            : r instanceof NodeList || r instanceof HTMLCollection
            ? yc(r)
            : [r];
        })(n),
        e
      );
};
(Wr.prototype.init = function (n, e) {
  (this.instances = n.map(function (i) {
    return new at(i, e);
  })),
    this.externalRAF || this.animate(),
    navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)
      ? window.addEventListener('orientationchange', this.onResizeEvent)
      : window.addEventListener('resize', this.onResizeEvent);
}),
  (Wr.prototype.animate = function () {
    this.instances.forEach(function (n) {
      n.animate();
    }),
      this.externalRAF || (this.requestId = window.requestAnimationFrame(this.animate.bind(this)));
  }),
  (Wr.prototype.reset = function () {
    this.instances.forEach(function (n) {
      n.reset();
    });
  }),
  (Wr.prototype.resize = function () {
    clearTimeout(this.timer), (this.timer = window.setTimeout(this.reset.bind(this), 500)), this.reset.bind(this);
  }),
  (Wr.prototype.destroy = function () {
    this.requestId && window.cancelAnimationFrame(this.requestId),
      window.removeEventListener('resize', this.onResizeEvent),
      window.removeEventListener('orientationchange', this.onResizeEvent),
      this.instances.forEach(function (n) {
        n.destroy();
      });
  });
/*!
 * paths 3.12.4
 * https://gsap.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var qd = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  $d = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  Hd = Math.PI / 180,
  gn = Math.sin,
  vn = Math.cos,
  xs = Math.abs,
  Ss = Math.sqrt,
  Gd = function (e) {
    return typeof e == 'number';
  },
  bc = 1e5,
  zi = function (e) {
    return Math.round(e * bc) / bc || 0;
  };
function Yd(n, e, i, t, r, s, o) {
  for (var a = n.length, l, c, u, f, h; --a > -1; )
    for (l = n[a], c = l.length, u = 0; u < c; u += 2)
      (f = l[u]), (h = l[u + 1]), (l[u] = f * e + h * t + s), (l[u + 1] = f * i + h * r + o);
  return (n._dirty = 1), n;
}
function Xd(n, e, i, t, r, s, o, a, l) {
  if (!(n === a && e === l)) {
    (i = xs(i)), (t = xs(t));
    var c = (r % 360) * Hd,
      u = vn(c),
      f = gn(c),
      h = Math.PI,
      d = h * 2,
      m = (n - a) / 2,
      p = (e - l) / 2,
      y = u * m + f * p,
      _ = -f * m + u * p,
      g = y * y,
      v = _ * _,
      w = g / (i * i) + v / (t * t);
    w > 1 && ((i = Ss(w) * i), (t = Ss(w) * t));
    var b = i * i,
      x = t * t,
      E = (b * x - b * v - x * g) / (b * v + x * g);
    E < 0 && (E = 0);
    var M = (s === o ? -1 : 1) * Ss(E),
      C = M * ((i * _) / t),
      T = M * -((t * y) / i),
      A = (n + a) / 2,
      O = (e + l) / 2,
      k = A + (u * C - f * T),
      L = O + (f * C + u * T),
      D = (y - C) / i,
      N = (_ - T) / t,
      B = (-y - C) / i,
      I = (-_ - T) / t,
      G = D * D + N * N,
      S = (N < 0 ? -1 : 1) * Math.acos(D / Ss(G)),
      q = (D * I - N * B < 0 ? -1 : 1) * Math.acos((D * B + N * I) / Ss(G * (B * B + I * I)));
    isNaN(q) && (q = h), !o && q > 0 ? (q -= d) : o && q < 0 && (q += d), (S %= d), (q %= d);
    var le = Math.ceil(xs(q) / (d / 4)),
      ye = [],
      re = q / le,
      pe = ((4 / 3) * gn(re / 2)) / (1 + vn(re / 2)),
      We = u * i,
      me = f * i,
      Ve = f * -t,
      Le = u * t,
      ge;
    for (ge = 0; ge < le; ge++)
      (r = S + ge * re),
        (y = vn(r)),
        (_ = gn(r)),
        (D = vn((r += re))),
        (N = gn(r)),
        ye.push(y - pe * _, _ + pe * y, D + pe * N, N - pe * D, D, N);
    for (ge = 0; ge < ye.length; ge += 2)
      (y = ye[ge]), (_ = ye[ge + 1]), (ye[ge] = y * We + _ * Ve + k), (ye[ge + 1] = y * me + _ * Le + L);
    return (ye[ge - 2] = a), (ye[ge - 1] = l), ye;
  }
}
function jd(n) {
  var e =
      (n + '')
        .replace($d, function (C) {
          var T = +C;
          return T < 1e-4 && T > -1e-4 ? 0 : T;
        })
        .match(qd) || [],
    i = [],
    t = 0,
    r = 0,
    s = 2 / 3,
    o = e.length,
    a = 0,
    l = 'ERROR: malformed path: ' + n,
    c,
    u,
    f,
    h,
    d,
    m,
    p,
    y,
    _,
    g,
    v,
    w,
    b,
    x,
    E,
    M = function (T, A, O, k) {
      (g = (O - T) / 3), (v = (k - A) / 3), p.push(T + g, A + v, O - g, k - v, O, k);
    };
  if (!n || !isNaN(e[0]) || isNaN(e[1])) return i;
  for (c = 0; c < o; c++)
    if (
      ((b = d),
      isNaN(e[c]) ? ((d = e[c].toUpperCase()), (m = d !== e[c])) : c--,
      (f = +e[c + 1]),
      (h = +e[c + 2]),
      m && ((f += t), (h += r)),
      c || ((y = f), (_ = h)),
      d === 'M')
    )
      p && (p.length < 8 ? (i.length -= 1) : (a += p.length)),
        (t = y = f),
        (r = _ = h),
        (p = [f, h]),
        i.push(p),
        (c += 2),
        (d = 'L');
    else if (d === 'C')
      p || (p = [0, 0]),
        m || (t = r = 0),
        p.push(f, h, t + e[c + 3] * 1, r + e[c + 4] * 1, (t += e[c + 5] * 1), (r += e[c + 6] * 1)),
        (c += 6);
    else if (d === 'S')
      (g = t),
        (v = r),
        (b === 'C' || b === 'S') && ((g += t - p[p.length - 4]), (v += r - p[p.length - 3])),
        m || (t = r = 0),
        p.push(g, v, f, h, (t += e[c + 3] * 1), (r += e[c + 4] * 1)),
        (c += 4);
    else if (d === 'Q')
      (g = t + (f - t) * s),
        (v = r + (h - r) * s),
        m || (t = r = 0),
        (t += e[c + 3] * 1),
        (r += e[c + 4] * 1),
        p.push(g, v, t + (f - t) * s, r + (h - r) * s, t, r),
        (c += 4);
    else if (d === 'T')
      (g = t - p[p.length - 4]),
        (v = r - p[p.length - 3]),
        p.push(t + g, r + v, f + (t + g * 1.5 - f) * s, h + (r + v * 1.5 - h) * s, (t = f), (r = h)),
        (c += 2);
    else if (d === 'H') M(t, r, (t = f), r), (c += 1);
    else if (d === 'V') M(t, r, t, (r = f + (m ? r - t : 0))), (c += 1);
    else if (d === 'L' || d === 'Z')
      d === 'Z' && ((f = y), (h = _), (p.closed = !0)),
        (d === 'L' || xs(t - f) > 0.5 || xs(r - h) > 0.5) && (M(t, r, f, h), d === 'L' && (c += 2)),
        (t = f),
        (r = h);
    else if (d === 'A') {
      if (
        ((x = e[c + 4]),
        (E = e[c + 5]),
        (g = e[c + 6]),
        (v = e[c + 7]),
        (u = 7),
        x.length > 1 &&
          (x.length < 3 ? ((v = g), (g = E), u--) : ((v = E), (g = x.substr(2)), (u -= 2)),
          (E = x.charAt(1)),
          (x = x.charAt(0))),
        (w = Xd(t, r, +e[c + 1], +e[c + 2], +e[c + 3], +x, +E, (m ? t : 0) + g * 1, (m ? r : 0) + v * 1)),
        (c += u),
        w)
      )
        for (u = 0; u < w.length; u++) p.push(w[u]);
      (t = p[p.length - 2]), (r = p[p.length - 1]);
    }
  return (
    (c = p.length),
    c < 6 ? (i.pop(), (c = 0)) : p[0] === p[c - 2] && p[1] === p[c - 1] && (p.closed = !0),
    (i.totalPoints = a + c),
    i
  );
}
function Ud(n) {
  Gd(n[0]) && (n = [n]);
  var e = '',
    i = n.length,
    t,
    r,
    s,
    o;
  for (r = 0; r < i; r++) {
    for (o = n[r], e += 'M' + zi(o[0]) + ',' + zi(o[1]) + ' C', t = o.length, s = 2; s < t; s++)
      e +=
        zi(o[s++]) + ',' + zi(o[s++]) + ' ' + zi(o[s++]) + ',' + zi(o[s++]) + ' ' + zi(o[s++]) + ',' + zi(o[s]) + ' ';
    o.closed && (e += 'z');
  }
  return e;
}
/*!
 * CustomEase 3.12.4
 * https://gsap.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var _t,
  xc,
  Sc = function () {
    return _t || (typeof window < 'u' && (_t = window.gsap) && _t.registerPlugin && _t);
  },
  Tc = function () {
    (_t = Sc()), _t && (_t.registerEase('_CE', ie.create), (xc = 1));
  },
  Kd = 1e20,
  _n = function (e) {
    return ~~(e * 1e3 + (e < 0 ? -0.5 : 0.5)) / 1e3;
  },
  Qd = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,
  Zd = /[cLlsSaAhHvVtTqQ]/g,
  Jd = function (e) {
    var i = e.length,
      t = Kd,
      r;
    for (r = 1; r < i; r += 6) +e[r] < t && (t = +e[r]);
    return t;
  },
  ef = function (e, i, t) {
    !t && t !== 0 && (t = Math.max(+e[e.length - 1], +e[1]));
    var r = +e[0] * -1,
      s = -t,
      o = e.length,
      a = 1 / (+e[o - 2] + r),
      l = -i || (Math.abs(+e[o - 1] - +e[1]) < 0.01 * (+e[o - 2] - +e[0]) ? Jd(e) + s : +e[o - 1] + s),
      c;
    for (l ? (l = 1 / l) : (l = -a), c = 0; c < o; c += 2) (e[c] = (+e[c] + r) * a), (e[c + 1] = (+e[c + 1] + s) * l);
  },
  tf = function n(e, i, t, r, s, o, a, l, c, u, f) {
    var h = (e + t) / 2,
      d = (i + r) / 2,
      m = (t + s) / 2,
      p = (r + o) / 2,
      y = (s + a) / 2,
      _ = (o + l) / 2,
      g = (h + m) / 2,
      v = (d + p) / 2,
      w = (m + y) / 2,
      b = (p + _) / 2,
      x = (g + w) / 2,
      E = (v + b) / 2,
      M = a - e,
      C = l - i,
      T = Math.abs((t - a) * C - (r - l) * M),
      A = Math.abs((s - a) * C - (o - l) * M),
      O;
    return (
      u ||
        ((u = [
          { x: e, y: i },
          { x: a, y: l },
        ]),
        (f = 1)),
      u.splice(f || u.length - 1, 0, { x, y: E }),
      (T + A) * (T + A) > c * (M * M + C * C) &&
        ((O = u.length), n(e, i, h, d, g, v, x, E, c, u, f), n(x, E, w, b, y, _, a, l, c, u, f + 1 + (u.length - O))),
      u
    );
  },
  ie = (function () {
    function n(i, t, r) {
      xc || Tc(), (this.id = i), this.setData(t, r);
    }
    var e = n.prototype;
    return (
      (e.setData = function (t, r) {
        (r = r || {}), (t = t || '0,0,1,1');
        var s = t.match(Qd),
          o = 1,
          a = [],
          l = [],
          c = r.precision || 1,
          u = c <= 1,
          f,
          h,
          d,
          m,
          p,
          y,
          _,
          g,
          v;
        if (
          ((this.data = t),
          (Zd.test(t) || (~t.indexOf('M') && t.indexOf('C') < 0)) && (s = jd(t)[0]),
          (f = s.length),
          f === 4)
        )
          s.unshift(0, 0), s.push(1, 1), (f = 8);
        else if ((f - 2) % 6) throw 'Invalid CustomEase';
        for ((+s[0] != 0 || +s[f - 2] != 1) && ef(s, r.height, r.originY), this.segment = s, m = 2; m < f; m += 6)
          (h = { x: +s[m - 2], y: +s[m - 1] }),
            (d = { x: +s[m + 4], y: +s[m + 5] }),
            a.push(h, d),
            tf(h.x, h.y, +s[m], +s[m + 1], +s[m + 2], +s[m + 3], d.x, d.y, 1 / (c * 2e5), a, a.length - 1);
        for (f = a.length, m = 0; m < f; m++)
          (_ = a[m]),
            (g = a[m - 1] || _),
            (_.x > g.x || (g.y !== _.y && g.x === _.x) || _ === g) && _.x <= 1
              ? ((g.cx = _.x - g.x),
                (g.cy = _.y - g.y),
                (g.n = _),
                (g.nx = _.x),
                u && m > 1 && Math.abs(g.cy / g.cx - a[m - 2].cy / a[m - 2].cx) > 2 && (u = 0),
                g.cx < o &&
                  (g.cx
                    ? (o = g.cx)
                    : ((g.cx = 0.001), m === f - 1 && ((g.x -= 0.001), (o = Math.min(o, 0.001)), (u = 0)))))
              : (a.splice(m--, 1), f--);
        if (((f = (1 / o + 1) | 0), (p = 1 / f), (y = 0), (_ = a[0]), u)) {
          for (m = 0; m < f; m++)
            (v = m * p),
              _.nx < v && (_ = a[++y]),
              (h = _.y + ((v - _.x) / _.cx) * _.cy),
              (l[m] = { x: v, cx: p, y: h, cy: 0, nx: 9 }),
              m && (l[m - 1].cy = h - l[m - 1].y);
          l[f - 1].cy = a[a.length - 1].y - h;
        } else {
          for (m = 0; m < f; m++) _.nx < m * p && (_ = a[++y]), (l[m] = _);
          y < a.length - 1 && (l[m - 1] = a[a.length - 2]);
        }
        return (
          (this.ease = function (w) {
            var b = l[(w * f) | 0] || l[f - 1];
            return b.nx < w && (b = b.n), b.y + ((w - b.x) / b.cx) * b.cy;
          }),
          (this.ease.custom = this),
          this.id && _t && _t.registerEase(this.id, this.ease),
          this
        );
      }),
      (e.getSVGData = function (t) {
        return n.getSVGData(this, t);
      }),
      (n.create = function (t, r, s) {
        return new n(t, r, s).ease;
      }),
      (n.register = function (t) {
        (_t = t), Tc();
      }),
      (n.get = function (t) {
        return _t.parseEase(t);
      }),
      (n.getSVGData = function (t, r) {
        r = r || {};
        var s = r.width || 100,
          o = r.height || 100,
          a = r.x || 0,
          l = (r.y || 0) + o,
          c = _t.utils.toArray(r.path)[0],
          u,
          f,
          h,
          d,
          m,
          p,
          y,
          _,
          g,
          v;
        if (
          (r.invert && ((o = -o), (l = 0)),
          typeof t == 'string' && (t = _t.parseEase(t)),
          t.custom && (t = t.custom),
          t instanceof n)
        )
          u = Ud(Yd([t.segment], s, 0, 0, -o, a, l));
        else {
          for (
            u = [a, l],
              y = Math.max(5, (r.precision || 1) * 200),
              d = 1 / y,
              y += 2,
              _ = 5 / y,
              g = _n(a + d * s),
              v = _n(l + t(d) * -o),
              f = (v - l) / (g - a),
              h = 2;
            h < y;
            h++
          )
            (m = _n(a + h * d * s)),
              (p = _n(l + t(h * d) * -o)),
              (Math.abs((p - v) / (m - g) - f) > _ || h === y - 1) && (u.push(g, v), (f = (p - v) / (m - g))),
              (g = m),
              (v = p);
          u = 'M' + u.join(',');
        }
        return c && c.setAttribute('d', u), u;
      }),
      n
    );
  })();
Sc() && _t.registerPlugin(ie),
  (ie.version = '3.12.4'),
  V.registerPlugin(ie),
  ie.create('easeInQuad', '0.55, 0.085, 0.68, 0.53'),
  ie.create('easeOutQuad', '0.25, 0.46, 0.45, 0.94'),
  ie.create('easeInOutQuad', '0.455, 0.03, 0.515, 0.955'),
  ie.create('easeInQuart', '0.895, 0.03, 0.685, 0.22');
const rf = ie.create('easeOutQuart', '0.165, 0.84, 0.44, 1');
ie.create('easeInOutQuart', '0.77, 0, 0.175, 1'), ie.create('easeInQuint', '0.755, 0.05, 0.855, 0.06');
const Ec = ie.create('easeOutQuint', '0.23, 1, 0.32, 1'),
  sf = ie.create('easeInOutQuint', '.83, 0, .17, 1');
ie.create('easeInSine', '0.47, 0, 0.745, 0.715'),
  ie.create('easeOutSine', '0.39, 0.575, 0.565, 1'),
  ie.create('easeInOutSine', '0.445, 0.05, 0.55, 0.95'),
  ie.create('easeInExpo', '0.95, 0.05, 0.795, 0.035'),
  ie.create('easeOutExpo', '0.19, 1, 0.22, 1'),
  ie.create('easeInOutExpo', '1, 0, 0, 1'),
  ie.create('easeInCirc', '0.6, 0.04, 0.98, 0.335'),
  ie.create('easeOutCirc', '0.075, 0.82, 0.165, 1'),
  ie.create('easeInOutCirc', '0.785, 0.135, 0.15, 0.86'),
  ie.create('easeInBack', '0.6, -0.28, 0.735, 0.045'),
  ie.create('easeOutBack', '0.175, 0.885, 0.32, 1.275'),
  ie.create('easeInOutBack', '0.68, -0.55, 0.265, 1.55'),
  ie.create('easeInCubic', '0.55, 0.055, 0.675, 0.19'),
  ie.create('easeOutCubic', '0.215, 0.61, 0.355, 1'),
  ie.create('easeInOutCubic', '0.645, 0.045, 0.355, 1'),
  ie.create('easeScale', '0,.185,.25,1'),
  ie.create('easeScale', '.39,.575,.565,1');
const Cc = ie.create('easeText', '0.25, 0, 0, 1'),
  nf = () => {
    const n = new Wd({ lerp: 0.3, duration: 1, easing: rf, smoothWheel: !0, direction: 'vertical' }),
      e = new Wr('.js-parallax', { externalRAF: !0 });
    function i(t) {
      e.animate(), n.raf(t), requestAnimationFrame(i);
    }
    return requestAnimationFrame(i), n;
  };
function of(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default') ? n.default : n;
}
var af = !!(typeof window < 'u' && window.document && window.document.createElement),
  lf = af;
const Ho = of(lf);
var cf = typeof global == 'object' && global && global.Object === Object && global;
const uf = cf;
var df = typeof self == 'object' && self && self.Object === Object && self,
  ff = uf || df || Function('return this')();
const Mc = ff;
var hf = Mc.Symbol;
const yn = hf;
var Oc = Object.prototype,
  pf = Oc.hasOwnProperty,
  mf = Oc.toString,
  Ts = yn ? yn.toStringTag : void 0;
function gf(n) {
  var e = pf.call(n, Ts),
    i = n[Ts];
  try {
    n[Ts] = void 0;
    var t = !0;
  } catch {}
  var r = mf.call(n);
  return t && (e ? (n[Ts] = i) : delete n[Ts]), r;
}
var vf = Object.prototype,
  _f = vf.toString;
function yf(n) {
  return _f.call(n);
}
var wf = '[object Null]',
  bf = '[object Undefined]',
  Pc = yn ? yn.toStringTag : void 0;
function xf(n) {
  return n == null ? (n === void 0 ? bf : wf) : Pc && Pc in Object(n) ? gf(n) : yf(n);
}
function Sf(n) {
  return n != null && typeof n == 'object';
}
var Tf = '[object Symbol]';
function Ef(n) {
  return typeof n == 'symbol' || (Sf(n) && xf(n) == Tf);
}
var Cf = /\s/;
function Mf(n) {
  for (var e = n.length; e-- && Cf.test(n.charAt(e)); );
  return e;
}
var Of = /^\s+/;
function Pf(n) {
  return n && n.slice(0, Mf(n) + 1).replace(Of, '');
}
function wn(n) {
  var e = typeof n;
  return n != null && (e == 'object' || e == 'function');
}
var Ac = 0 / 0,
  Af = /^[-+]0x[0-9a-f]+$/i,
  kf = /^0b[01]+$/i,
  Lf = /^0o[0-7]+$/i,
  Df = parseInt;
function kc(n) {
  if (typeof n == 'number') return n;
  if (Ef(n)) return Ac;
  if (wn(n)) {
    var e = typeof n.valueOf == 'function' ? n.valueOf() : n;
    n = wn(e) ? e + '' : e;
  }
  if (typeof n != 'string') return n === 0 ? n : +n;
  n = Pf(n);
  var i = kf.test(n);
  return i || Lf.test(n) ? Df(n.slice(2), i ? 2 : 8) : Af.test(n) ? Ac : +n;
}
var If = function () {
  return Mc.Date.now();
};
const Go = If;
var zf = 'Expected a function',
  Rf = Math.max,
  Nf = Math.min;
function bn(n, e, i) {
  var t,
    r,
    s,
    o,
    a,
    l,
    c = 0,
    u = !1,
    f = !1,
    h = !0;
  if (typeof n != 'function') throw new TypeError(zf);
  (e = kc(e) || 0),
    wn(i) &&
      ((u = !!i.leading),
      (f = 'maxWait' in i),
      (s = f ? Rf(kc(i.maxWait) || 0, e) : s),
      (h = 'trailing' in i ? !!i.trailing : h));
  function d(x) {
    var E = t,
      M = r;
    return (t = r = void 0), (c = x), (o = n.apply(M, E)), o;
  }
  function m(x) {
    return (c = x), (a = setTimeout(_, e)), u ? d(x) : o;
  }
  function p(x) {
    var E = x - l,
      M = x - c,
      C = e - E;
    return f ? Nf(C, s - M) : C;
  }
  function y(x) {
    var E = x - l,
      M = x - c;
    return l === void 0 || E >= e || E < 0 || (f && M >= s);
  }
  function _() {
    var x = Go();
    if (y(x)) return g(x);
    a = setTimeout(_, p(x));
  }
  function g(x) {
    return (a = void 0), h && t ? d(x) : ((t = r = void 0), o);
  }
  function v() {
    a !== void 0 && clearTimeout(a), (c = 0), (t = l = r = a = void 0);
  }
  function w() {
    return a === void 0 ? o : g(Go());
  }
  function b() {
    var x = Go(),
      E = y(x);
    if (((t = arguments), (r = this), (l = x), E)) {
      if (a === void 0) return m(l);
      if (f) return clearTimeout(a), (a = setTimeout(_, e)), d(l);
    }
    return a === void 0 && (a = setTimeout(_, e)), o;
  }
  return (b.cancel = v), (b.flush = w), b;
}
var Bf = 'Expected a function';
function Ff(n, e, i) {
  var t = !0,
    r = !0;
  if (typeof n != 'function') throw new TypeError(Bf);
  return (
    wn(i) && ((t = 'leading' in i ? !!i.leading : t), (r = 'trailing' in i ? !!i.trailing : r)),
    bn(n, e, { leading: t, maxWait: e, trailing: r })
  );
}
var Vr = function () {
    return (
      (Vr =
        Object.assign ||
        function (e) {
          for (var i, t = 1, r = arguments.length; t < r; t++) {
            i = arguments[t];
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
          }
          return e;
        }),
      Vr.apply(this, arguments)
    );
  },
  qr = null,
  Lc = null;
Ho &&
  window.addEventListener('resize', function () {
    Lc !== window.devicePixelRatio && ((Lc = window.devicePixelRatio), (qr = null));
  });
function Dc() {
  if (qr === null) {
    if (typeof document > 'u') return (qr = 0), qr;
    var n = document.body,
      e = document.createElement('div');
    e.classList.add('simplebar-hide-scrollbar'), n.appendChild(e);
    var i = e.getBoundingClientRect().right;
    n.removeChild(e), (qr = i);
  }
  return qr;
}
function Ic(n) {
  return !n || !n.ownerDocument || !n.ownerDocument.defaultView ? window : n.ownerDocument.defaultView;
}
function zc(n) {
  return !n || !n.ownerDocument ? document : n.ownerDocument;
}
var Rc = function (n) {
  var e = {},
    i = Array.prototype.reduce.call(
      n,
      function (t, r) {
        var s = r.name.match(/data-simplebar-(.+)/);
        if (s) {
          var o = s[1].replace(/\W+(.)/g, function (a, l) {
            return l.toUpperCase();
          });
          switch (r.value) {
            case 'true':
              t[o] = !0;
              break;
            case 'false':
              t[o] = !1;
              break;
            case void 0:
              t[o] = !0;
              break;
            default:
              t[o] = r.value;
          }
        }
        return t;
      },
      e
    );
  return i;
};
function Nc(n, e) {
  var i;
  n && (i = n.classList).add.apply(i, e.split(' '));
}
function Bc(n, e) {
  n &&
    e.split(' ').forEach(function (i) {
      n.classList.remove(i);
    });
}
function Fc(n) {
  return '.'.concat(n.split(' ').join('.'));
}
var Wf = Object.freeze({
    __proto__: null,
    getElementWindow: Ic,
    getElementDocument: zc,
    getOptions: Rc,
    addClasses: Nc,
    removeClasses: Bc,
    classNamesToQuery: Fc,
  }),
  Ri = Ic,
  Yo = zc,
  Vf = Rc,
  Ni = Nc,
  Bi = Bc,
  yt = Fc,
  xn = (function () {
    function n(e, i) {
      i === void 0 && (i = {});
      var t = this;
      if (
        ((this.removePreventClickId = null),
        (this.minScrollbarWidth = 20),
        (this.stopScrollDelay = 175),
        (this.isScrolling = !1),
        (this.isMouseEntering = !1),
        (this.scrollXTicking = !1),
        (this.scrollYTicking = !1),
        (this.wrapperEl = null),
        (this.contentWrapperEl = null),
        (this.contentEl = null),
        (this.offsetEl = null),
        (this.maskEl = null),
        (this.placeholderEl = null),
        (this.heightAutoObserverWrapperEl = null),
        (this.heightAutoObserverEl = null),
        (this.rtlHelpers = null),
        (this.scrollbarWidth = 0),
        (this.resizeObserver = null),
        (this.mutationObserver = null),
        (this.elStyles = null),
        (this.isRtl = null),
        (this.mouseX = 0),
        (this.mouseY = 0),
        (this.onMouseMove = function () {}),
        (this.onWindowResize = function () {}),
        (this.onStopScrolling = function () {}),
        (this.onMouseEntered = function () {}),
        (this.onScroll = function () {
          var r = Ri(t.el);
          t.scrollXTicking || (r.requestAnimationFrame(t.scrollX), (t.scrollXTicking = !0)),
            t.scrollYTicking || (r.requestAnimationFrame(t.scrollY), (t.scrollYTicking = !0)),
            t.isScrolling || ((t.isScrolling = !0), Ni(t.el, t.classNames.scrolling)),
            t.showScrollbar('x'),
            t.showScrollbar('y'),
            t.onStopScrolling();
        }),
        (this.scrollX = function () {
          t.axis.x.isOverflowing && t.positionScrollbar('x'), (t.scrollXTicking = !1);
        }),
        (this.scrollY = function () {
          t.axis.y.isOverflowing && t.positionScrollbar('y'), (t.scrollYTicking = !1);
        }),
        (this._onStopScrolling = function () {
          Bi(t.el, t.classNames.scrolling),
            t.options.autoHide && (t.hideScrollbar('x'), t.hideScrollbar('y')),
            (t.isScrolling = !1);
        }),
        (this.onMouseEnter = function () {
          t.isMouseEntering ||
            (Ni(t.el, t.classNames.mouseEntered), t.showScrollbar('x'), t.showScrollbar('y'), (t.isMouseEntering = !0)),
            t.onMouseEntered();
        }),
        (this._onMouseEntered = function () {
          Bi(t.el, t.classNames.mouseEntered),
            t.options.autoHide && (t.hideScrollbar('x'), t.hideScrollbar('y')),
            (t.isMouseEntering = !1);
        }),
        (this._onMouseMove = function (r) {
          (t.mouseX = r.clientX),
            (t.mouseY = r.clientY),
            (t.axis.x.isOverflowing || t.axis.x.forceVisible) && t.onMouseMoveForAxis('x'),
            (t.axis.y.isOverflowing || t.axis.y.forceVisible) && t.onMouseMoveForAxis('y');
        }),
        (this.onMouseLeave = function () {
          t.onMouseMove.cancel(),
            (t.axis.x.isOverflowing || t.axis.x.forceVisible) && t.onMouseLeaveForAxis('x'),
            (t.axis.y.isOverflowing || t.axis.y.forceVisible) && t.onMouseLeaveForAxis('y'),
            (t.mouseX = -1),
            (t.mouseY = -1);
        }),
        (this._onWindowResize = function () {
          (t.scrollbarWidth = t.getScrollbarWidth()), t.hideNativeScrollbar();
        }),
        (this.onPointerEvent = function (r) {
          if (!(!t.axis.x.track.el || !t.axis.y.track.el || !t.axis.x.scrollbar.el || !t.axis.y.scrollbar.el)) {
            var s, o;
            (t.axis.x.track.rect = t.axis.x.track.el.getBoundingClientRect()),
              (t.axis.y.track.rect = t.axis.y.track.el.getBoundingClientRect()),
              (t.axis.x.isOverflowing || t.axis.x.forceVisible) && (s = t.isWithinBounds(t.axis.x.track.rect)),
              (t.axis.y.isOverflowing || t.axis.y.forceVisible) && (o = t.isWithinBounds(t.axis.y.track.rect)),
              (s || o) &&
                (r.stopPropagation(),
                r.type === 'pointerdown' &&
                  r.pointerType !== 'touch' &&
                  (s &&
                    ((t.axis.x.scrollbar.rect = t.axis.x.scrollbar.el.getBoundingClientRect()),
                    t.isWithinBounds(t.axis.x.scrollbar.rect) ? t.onDragStart(r, 'x') : t.onTrackClick(r, 'x')),
                  o &&
                    ((t.axis.y.scrollbar.rect = t.axis.y.scrollbar.el.getBoundingClientRect()),
                    t.isWithinBounds(t.axis.y.scrollbar.rect) ? t.onDragStart(r, 'y') : t.onTrackClick(r, 'y'))));
          }
        }),
        (this.drag = function (r) {
          var s, o, a, l, c, u, f, h, d, m, p;
          if (!(!t.draggedAxis || !t.contentWrapperEl)) {
            var y,
              _ = t.axis[t.draggedAxis].track,
              g =
                (o = (s = _.rect) === null || s === void 0 ? void 0 : s[t.axis[t.draggedAxis].sizeAttr]) !== null &&
                o !== void 0
                  ? o
                  : 0,
              v = t.axis[t.draggedAxis].scrollbar,
              w =
                (l =
                  (a = t.contentWrapperEl) === null || a === void 0
                    ? void 0
                    : a[t.axis[t.draggedAxis].scrollSizeAttr]) !== null && l !== void 0
                  ? l
                  : 0,
              b = parseInt(
                (u = (c = t.elStyles) === null || c === void 0 ? void 0 : c[t.axis[t.draggedAxis].sizeAttr]) !== null &&
                  u !== void 0
                  ? u
                  : '0px',
                10
              );
            r.preventDefault(), r.stopPropagation(), t.draggedAxis === 'y' ? (y = r.pageY) : (y = r.pageX);
            var x =
              y -
              ((h = (f = _.rect) === null || f === void 0 ? void 0 : f[t.axis[t.draggedAxis].offsetAttr]) !== null &&
              h !== void 0
                ? h
                : 0) -
              t.axis[t.draggedAxis].dragOffset;
            x =
              t.draggedAxis === 'x' && t.isRtl
                ? ((m = (d = _.rect) === null || d === void 0 ? void 0 : d[t.axis[t.draggedAxis].sizeAttr]) !== null &&
                  m !== void 0
                    ? m
                    : 0) -
                  v.size -
                  x
                : x;
            var E = x / (g - v.size),
              M = E * (w - b);
            t.draggedAxis === 'x' &&
              t.isRtl &&
              (M = !((p = n.getRtlHelpers()) === null || p === void 0) && p.isScrollingToNegative ? -M : M),
              (t.contentWrapperEl[t.axis[t.draggedAxis].scrollOffsetAttr] = M);
          }
        }),
        (this.onEndDrag = function (r) {
          var s = Yo(t.el),
            o = Ri(t.el);
          r.preventDefault(),
            r.stopPropagation(),
            Bi(t.el, t.classNames.dragging),
            s.removeEventListener('mousemove', t.drag, !0),
            s.removeEventListener('mouseup', t.onEndDrag, !0),
            (t.removePreventClickId = o.setTimeout(function () {
              s.removeEventListener('click', t.preventClick, !0),
                s.removeEventListener('dblclick', t.preventClick, !0),
                (t.removePreventClickId = null);
            }));
        }),
        (this.preventClick = function (r) {
          r.preventDefault(), r.stopPropagation();
        }),
        (this.el = e),
        (this.options = Vr(Vr({}, n.defaultOptions), i)),
        (this.classNames = Vr(Vr({}, n.defaultOptions.classNames), i.classNames)),
        (this.axis = {
          x: {
            scrollOffsetAttr: 'scrollLeft',
            sizeAttr: 'width',
            scrollSizeAttr: 'scrollWidth',
            offsetSizeAttr: 'offsetWidth',
            offsetAttr: 'left',
            overflowAttr: 'overflowX',
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: { size: null, el: null, rect: null, isVisible: !1 },
            scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
          },
          y: {
            scrollOffsetAttr: 'scrollTop',
            sizeAttr: 'height',
            scrollSizeAttr: 'scrollHeight',
            offsetSizeAttr: 'offsetHeight',
            offsetAttr: 'top',
            overflowAttr: 'overflowY',
            dragOffset: 0,
            isOverflowing: !0,
            forceVisible: !1,
            track: { size: null, el: null, rect: null, isVisible: !1 },
            scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
          },
        }),
        typeof this.el != 'object' || !this.el.nodeName)
      )
        throw new Error('Argument passed to SimpleBar must be an HTML element instead of '.concat(this.el));
      (this.onMouseMove = Ff(this._onMouseMove, 64)),
        (this.onWindowResize = bn(this._onWindowResize, 64, { leading: !0 })),
        (this.onStopScrolling = bn(this._onStopScrolling, this.stopScrollDelay)),
        (this.onMouseEntered = bn(this._onMouseEntered, this.stopScrollDelay)),
        this.init();
    }
    return (
      (n.getRtlHelpers = function () {
        if (n.rtlHelpers) return n.rtlHelpers;
        var e = document.createElement('div');
        e.innerHTML = '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
        var i = e.firstElementChild,
          t = i?.firstElementChild;
        if (!t) return null;
        document.body.appendChild(i), (i.scrollLeft = 0);
        var r = n.getOffset(i),
          s = n.getOffset(t);
        i.scrollLeft = -999;
        var o = n.getOffset(t);
        return (
          document.body.removeChild(i),
          (n.rtlHelpers = { isScrollOriginAtZero: r.left !== s.left, isScrollingToNegative: s.left !== o.left }),
          n.rtlHelpers
        );
      }),
      (n.prototype.getScrollbarWidth = function () {
        try {
          return (this.contentWrapperEl &&
            getComputedStyle(this.contentWrapperEl, '::-webkit-scrollbar').display === 'none') ||
            'scrollbarWidth' in document.documentElement.style ||
            '-ms-overflow-style' in document.documentElement.style
            ? 0
            : Dc();
        } catch {
          return Dc();
        }
      }),
      (n.getOffset = function (e) {
        var i = e.getBoundingClientRect(),
          t = Yo(e),
          r = Ri(e);
        return {
          top: i.top + (r.pageYOffset || t.documentElement.scrollTop),
          left: i.left + (r.pageXOffset || t.documentElement.scrollLeft),
        };
      }),
      (n.prototype.init = function () {
        Ho &&
          (this.initDOM(),
          (this.rtlHelpers = n.getRtlHelpers()),
          (this.scrollbarWidth = this.getScrollbarWidth()),
          this.recalculate(),
          this.initListeners());
      }),
      (n.prototype.initDOM = function () {
        var e, i;
        (this.wrapperEl = this.el.querySelector(yt(this.classNames.wrapper))),
          (this.contentWrapperEl =
            this.options.scrollableNode || this.el.querySelector(yt(this.classNames.contentWrapper))),
          (this.contentEl = this.options.contentNode || this.el.querySelector(yt(this.classNames.contentEl))),
          (this.offsetEl = this.el.querySelector(yt(this.classNames.offset))),
          (this.maskEl = this.el.querySelector(yt(this.classNames.mask))),
          (this.placeholderEl = this.findChild(this.wrapperEl, yt(this.classNames.placeholder))),
          (this.heightAutoObserverWrapperEl = this.el.querySelector(yt(this.classNames.heightAutoObserverWrapperEl))),
          (this.heightAutoObserverEl = this.el.querySelector(yt(this.classNames.heightAutoObserverEl))),
          (this.axis.x.track.el = this.findChild(
            this.el,
            ''.concat(yt(this.classNames.track)).concat(yt(this.classNames.horizontal))
          )),
          (this.axis.y.track.el = this.findChild(
            this.el,
            ''.concat(yt(this.classNames.track)).concat(yt(this.classNames.vertical))
          )),
          (this.axis.x.scrollbar.el =
            ((e = this.axis.x.track.el) === null || e === void 0
              ? void 0
              : e.querySelector(yt(this.classNames.scrollbar))) || null),
          (this.axis.y.scrollbar.el =
            ((i = this.axis.y.track.el) === null || i === void 0
              ? void 0
              : i.querySelector(yt(this.classNames.scrollbar))) || null),
          this.options.autoHide ||
            (Ni(this.axis.x.scrollbar.el, this.classNames.visible),
            Ni(this.axis.y.scrollbar.el, this.classNames.visible));
      }),
      (n.prototype.initListeners = function () {
        var e = this,
          i,
          t = Ri(this.el);
        if (
          (this.el.addEventListener('mouseenter', this.onMouseEnter),
          this.el.addEventListener('pointerdown', this.onPointerEvent, !0),
          this.el.addEventListener('mousemove', this.onMouseMove),
          this.el.addEventListener('mouseleave', this.onMouseLeave),
          (i = this.contentWrapperEl) === null || i === void 0 || i.addEventListener('scroll', this.onScroll),
          t.addEventListener('resize', this.onWindowResize),
          !!this.contentEl)
        ) {
          if (window.ResizeObserver) {
            var r = !1,
              s = t.ResizeObserver || ResizeObserver;
            (this.resizeObserver = new s(function () {
              r &&
                t.requestAnimationFrame(function () {
                  e.recalculate();
                });
            })),
              this.resizeObserver.observe(this.el),
              this.resizeObserver.observe(this.contentEl),
              t.requestAnimationFrame(function () {
                r = !0;
              });
          }
          (this.mutationObserver = new t.MutationObserver(function () {
            t.requestAnimationFrame(function () {
              e.recalculate();
            });
          })),
            this.mutationObserver.observe(this.contentEl, { childList: !0, subtree: !0, characterData: !0 });
        }
      }),
      (n.prototype.recalculate = function () {
        if (
          !(
            !this.heightAutoObserverEl ||
            !this.contentEl ||
            !this.contentWrapperEl ||
            !this.wrapperEl ||
            !this.placeholderEl
          )
        ) {
          var e = Ri(this.el);
          (this.elStyles = e.getComputedStyle(this.el)), (this.isRtl = this.elStyles.direction === 'rtl');
          var i = this.contentEl.offsetWidth,
            t = this.heightAutoObserverEl.offsetHeight <= 1,
            r = this.heightAutoObserverEl.offsetWidth <= 1 || i > 0,
            s = this.contentWrapperEl.offsetWidth,
            o = this.elStyles.overflowX,
            a = this.elStyles.overflowY;
          (this.contentEl.style.padding = ''
            .concat(this.elStyles.paddingTop, ' ')
            .concat(this.elStyles.paddingRight, ' ')
            .concat(this.elStyles.paddingBottom, ' ')
            .concat(this.elStyles.paddingLeft)),
            (this.wrapperEl.style.margin = '-'
              .concat(this.elStyles.paddingTop, ' -')
              .concat(this.elStyles.paddingRight, ' -')
              .concat(this.elStyles.paddingBottom, ' -')
              .concat(this.elStyles.paddingLeft));
          var l = this.contentEl.scrollHeight,
            c = this.contentEl.scrollWidth;
          (this.contentWrapperEl.style.height = t ? 'auto' : '100%'),
            (this.placeholderEl.style.width = r ? ''.concat(i || c, 'px') : 'auto'),
            (this.placeholderEl.style.height = ''.concat(l, 'px'));
          var u = this.contentWrapperEl.offsetHeight;
          (this.axis.x.isOverflowing = i !== 0 && c > i),
            (this.axis.y.isOverflowing = l > u),
            (this.axis.x.isOverflowing = o === 'hidden' ? !1 : this.axis.x.isOverflowing),
            (this.axis.y.isOverflowing = a === 'hidden' ? !1 : this.axis.y.isOverflowing),
            (this.axis.x.forceVisible = this.options.forceVisible === 'x' || this.options.forceVisible === !0),
            (this.axis.y.forceVisible = this.options.forceVisible === 'y' || this.options.forceVisible === !0),
            this.hideNativeScrollbar();
          var f = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
            h = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
          (this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > s - h),
            (this.axis.y.isOverflowing = this.axis.y.isOverflowing && l > u - f),
            (this.axis.x.scrollbar.size = this.getScrollbarSize('x')),
            (this.axis.y.scrollbar.size = this.getScrollbarSize('y')),
            this.axis.x.scrollbar.el &&
              (this.axis.x.scrollbar.el.style.width = ''.concat(this.axis.x.scrollbar.size, 'px')),
            this.axis.y.scrollbar.el &&
              (this.axis.y.scrollbar.el.style.height = ''.concat(this.axis.y.scrollbar.size, 'px')),
            this.positionScrollbar('x'),
            this.positionScrollbar('y'),
            this.toggleTrackVisibility('x'),
            this.toggleTrackVisibility('y');
        }
      }),
      (n.prototype.getScrollbarSize = function (e) {
        var i, t;
        if ((e === void 0 && (e = 'y'), !this.axis[e].isOverflowing || !this.contentEl)) return 0;
        var r = this.contentEl[this.axis[e].scrollSizeAttr],
          s =
            (t = (i = this.axis[e].track.el) === null || i === void 0 ? void 0 : i[this.axis[e].offsetSizeAttr]) !==
              null && t !== void 0
              ? t
              : 0,
          o = s / r,
          a;
        return (
          (a = Math.max(~~(o * s), this.options.scrollbarMinSize)),
          this.options.scrollbarMaxSize && (a = Math.min(a, this.options.scrollbarMaxSize)),
          a
        );
      }),
      (n.prototype.positionScrollbar = function (e) {
        var i, t, r;
        e === void 0 && (e = 'y');
        var s = this.axis[e].scrollbar;
        if (!(!this.axis[e].isOverflowing || !this.contentWrapperEl || !s.el || !this.elStyles)) {
          var o = this.contentWrapperEl[this.axis[e].scrollSizeAttr],
            a = ((i = this.axis[e].track.el) === null || i === void 0 ? void 0 : i[this.axis[e].offsetSizeAttr]) || 0,
            l = parseInt(this.elStyles[this.axis[e].sizeAttr], 10),
            c = this.contentWrapperEl[this.axis[e].scrollOffsetAttr];
          (c =
            e === 'x' && this.isRtl && !((t = n.getRtlHelpers()) === null || t === void 0) && t.isScrollOriginAtZero
              ? -c
              : c),
            e === 'x' &&
              this.isRtl &&
              (c = !((r = n.getRtlHelpers()) === null || r === void 0) && r.isScrollingToNegative ? c : -c);
          var u = c / (o - l),
            f = ~~((a - s.size) * u);
          (f = e === 'x' && this.isRtl ? -f + (a - s.size) : f),
            (s.el.style.transform =
              e === 'x' ? 'translate3d('.concat(f, 'px, 0, 0)') : 'translate3d(0, '.concat(f, 'px, 0)'));
        }
      }),
      (n.prototype.toggleTrackVisibility = function (e) {
        e === void 0 && (e = 'y');
        var i = this.axis[e].track.el,
          t = this.axis[e].scrollbar.el;
        !i ||
          !t ||
          !this.contentWrapperEl ||
          (this.axis[e].isOverflowing || this.axis[e].forceVisible
            ? ((i.style.visibility = 'visible'),
              (this.contentWrapperEl.style[this.axis[e].overflowAttr] = 'scroll'),
              this.el.classList.add(''.concat(this.classNames.scrollable, '-').concat(e)))
            : ((i.style.visibility = 'hidden'),
              (this.contentWrapperEl.style[this.axis[e].overflowAttr] = 'hidden'),
              this.el.classList.remove(''.concat(this.classNames.scrollable, '-').concat(e))),
          this.axis[e].isOverflowing ? (t.style.display = 'block') : (t.style.display = 'none'));
      }),
      (n.prototype.showScrollbar = function (e) {
        e === void 0 && (e = 'y'),
          this.axis[e].isOverflowing &&
            !this.axis[e].scrollbar.isVisible &&
            (Ni(this.axis[e].scrollbar.el, this.classNames.visible), (this.axis[e].scrollbar.isVisible = !0));
      }),
      (n.prototype.hideScrollbar = function (e) {
        e === void 0 && (e = 'y'),
          this.axis[e].isOverflowing &&
            this.axis[e].scrollbar.isVisible &&
            (Bi(this.axis[e].scrollbar.el, this.classNames.visible), (this.axis[e].scrollbar.isVisible = !1));
      }),
      (n.prototype.hideNativeScrollbar = function () {
        this.offsetEl &&
          ((this.offsetEl.style[this.isRtl ? 'left' : 'right'] =
            this.axis.y.isOverflowing || this.axis.y.forceVisible ? '-'.concat(this.scrollbarWidth, 'px') : '0px'),
          (this.offsetEl.style.bottom =
            this.axis.x.isOverflowing || this.axis.x.forceVisible ? '-'.concat(this.scrollbarWidth, 'px') : '0px'));
      }),
      (n.prototype.onMouseMoveForAxis = function (e) {
        e === void 0 && (e = 'y');
        var i = this.axis[e];
        !i.track.el ||
          !i.scrollbar.el ||
          ((i.track.rect = i.track.el.getBoundingClientRect()),
          (i.scrollbar.rect = i.scrollbar.el.getBoundingClientRect()),
          this.isWithinBounds(i.track.rect)
            ? (this.showScrollbar(e),
              Ni(i.track.el, this.classNames.hover),
              this.isWithinBounds(i.scrollbar.rect)
                ? Ni(i.scrollbar.el, this.classNames.hover)
                : Bi(i.scrollbar.el, this.classNames.hover))
            : (Bi(i.track.el, this.classNames.hover), this.options.autoHide && this.hideScrollbar(e)));
      }),
      (n.prototype.onMouseLeaveForAxis = function (e) {
        e === void 0 && (e = 'y'),
          Bi(this.axis[e].track.el, this.classNames.hover),
          Bi(this.axis[e].scrollbar.el, this.classNames.hover),
          this.options.autoHide && this.hideScrollbar(e);
      }),
      (n.prototype.onDragStart = function (e, i) {
        var t;
        i === void 0 && (i = 'y');
        var r = Yo(this.el),
          s = Ri(this.el),
          o = this.axis[i].scrollbar,
          a = i === 'y' ? e.pageY : e.pageX;
        (this.axis[i].dragOffset =
          a - (((t = o.rect) === null || t === void 0 ? void 0 : t[this.axis[i].offsetAttr]) || 0)),
          (this.draggedAxis = i),
          Ni(this.el, this.classNames.dragging),
          r.addEventListener('mousemove', this.drag, !0),
          r.addEventListener('mouseup', this.onEndDrag, !0),
          this.removePreventClickId === null
            ? (r.addEventListener('click', this.preventClick, !0),
              r.addEventListener('dblclick', this.preventClick, !0))
            : (s.clearTimeout(this.removePreventClickId), (this.removePreventClickId = null));
      }),
      (n.prototype.onTrackClick = function (e, i) {
        var t = this,
          r,
          s,
          o,
          a;
        i === void 0 && (i = 'y');
        var l = this.axis[i];
        if (!(!this.options.clickOnTrack || !l.scrollbar.el || !this.contentWrapperEl)) {
          e.preventDefault();
          var c = Ri(this.el);
          this.axis[i].scrollbar.rect = l.scrollbar.el.getBoundingClientRect();
          var u = this.axis[i].scrollbar,
            f =
              (s = (r = u.rect) === null || r === void 0 ? void 0 : r[this.axis[i].offsetAttr]) !== null && s !== void 0
                ? s
                : 0,
            h = parseInt(
              (a = (o = this.elStyles) === null || o === void 0 ? void 0 : o[this.axis[i].sizeAttr]) !== null &&
                a !== void 0
                ? a
                : '0px',
              10
            ),
            d = this.contentWrapperEl[this.axis[i].scrollOffsetAttr],
            m = i === 'y' ? this.mouseY - f : this.mouseX - f,
            p = m < 0 ? -1 : 1,
            y = p === -1 ? d - h : d + h,
            _ = 40,
            g = function () {
              t.contentWrapperEl &&
                (p === -1
                  ? d > y &&
                    ((d -= _), (t.contentWrapperEl[t.axis[i].scrollOffsetAttr] = d), c.requestAnimationFrame(g))
                  : d < y &&
                    ((d += _), (t.contentWrapperEl[t.axis[i].scrollOffsetAttr] = d), c.requestAnimationFrame(g)));
            };
          g();
        }
      }),
      (n.prototype.getContentElement = function () {
        return this.contentEl;
      }),
      (n.prototype.getScrollElement = function () {
        return this.contentWrapperEl;
      }),
      (n.prototype.removeListeners = function () {
        var e = Ri(this.el);
        this.el.removeEventListener('mouseenter', this.onMouseEnter),
          this.el.removeEventListener('pointerdown', this.onPointerEvent, !0),
          this.el.removeEventListener('mousemove', this.onMouseMove),
          this.el.removeEventListener('mouseleave', this.onMouseLeave),
          this.contentWrapperEl && this.contentWrapperEl.removeEventListener('scroll', this.onScroll),
          e.removeEventListener('resize', this.onWindowResize),
          this.mutationObserver && this.mutationObserver.disconnect(),
          this.resizeObserver && this.resizeObserver.disconnect(),
          this.onMouseMove.cancel(),
          this.onWindowResize.cancel(),
          this.onStopScrolling.cancel(),
          this.onMouseEntered.cancel();
      }),
      (n.prototype.unMount = function () {
        this.removeListeners();
      }),
      (n.prototype.isWithinBounds = function (e) {
        return (
          this.mouseX >= e.left &&
          this.mouseX <= e.left + e.width &&
          this.mouseY >= e.top &&
          this.mouseY <= e.top + e.height
        );
      }),
      (n.prototype.findChild = function (e, i) {
        var t = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
        return Array.prototype.filter.call(e.children, function (r) {
          return t.call(r, i);
        })[0];
      }),
      (n.rtlHelpers = null),
      (n.defaultOptions = {
        forceVisible: !1,
        clickOnTrack: !0,
        scrollbarMinSize: 25,
        scrollbarMaxSize: 0,
        ariaLabel: 'scrollable content',
        classNames: {
          contentEl: 'simplebar-content',
          contentWrapper: 'simplebar-content-wrapper',
          offset: 'simplebar-offset',
          mask: 'simplebar-mask',
          wrapper: 'simplebar-wrapper',
          placeholder: 'simplebar-placeholder',
          scrollbar: 'simplebar-scrollbar',
          track: 'simplebar-track',
          heightAutoObserverWrapperEl: 'simplebar-height-auto-observer-wrapper',
          heightAutoObserverEl: 'simplebar-height-auto-observer',
          visible: 'simplebar-visible',
          horizontal: 'simplebar-horizontal',
          vertical: 'simplebar-vertical',
          hover: 'simplebar-hover',
          dragging: 'simplebar-dragging',
          scrolling: 'simplebar-scrolling',
          scrollable: 'simplebar-scrollable',
          mouseEntered: 'simplebar-mouse-entered',
        },
        scrollableNode: null,
        contentNode: null,
        autoHide: !0,
      }),
      (n.getOptions = Vf),
      (n.helpers = Wf),
      n
    );
  })(),
  Xo = function (n, e) {
    return (
      (Xo =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (i, t) {
            i.__proto__ = t;
          }) ||
        function (i, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]);
        }),
      Xo(n, e)
    );
  };
function qf(n, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
  Xo(n, e);
  function i() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : ((i.prototype = e.prototype), new i());
}
var Wc = xn.helpers,
  jo = Wc.getOptions,
  qt = Wc.addClasses,
  Vc = (function (n) {
    qf(e, n);
    function e() {
      for (var i = [], t = 0; t < arguments.length; t++) i[t] = arguments[t];
      var r = n.apply(this, i) || this;
      return e.instances.set(i[0], r), r;
    }
    return (
      (e.initDOMLoadedElements = function () {
        document.removeEventListener('DOMContentLoaded', this.initDOMLoadedElements),
          window.removeEventListener('load', this.initDOMLoadedElements),
          Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]'), function (i) {
            i.getAttribute('data-simplebar') !== 'init' && !e.instances.has(i) && new e(i, jo(i.attributes));
          });
      }),
      (e.removeObserver = function () {
        var i;
        (i = e.globalObserver) === null || i === void 0 || i.disconnect();
      }),
      (e.prototype.initDOM = function () {
        var i = this,
          t,
          r,
          s;
        if (
          !Array.prototype.filter.call(this.el.children, function (l) {
            return l.classList.contains(i.classNames.wrapper);
          }).length
        ) {
          for (
            this.wrapperEl = document.createElement('div'),
              this.contentWrapperEl = document.createElement('div'),
              this.offsetEl = document.createElement('div'),
              this.maskEl = document.createElement('div'),
              this.contentEl = document.createElement('div'),
              this.placeholderEl = document.createElement('div'),
              this.heightAutoObserverWrapperEl = document.createElement('div'),
              this.heightAutoObserverEl = document.createElement('div'),
              qt(this.wrapperEl, this.classNames.wrapper),
              qt(this.contentWrapperEl, this.classNames.contentWrapper),
              qt(this.offsetEl, this.classNames.offset),
              qt(this.maskEl, this.classNames.mask),
              qt(this.contentEl, this.classNames.contentEl),
              qt(this.placeholderEl, this.classNames.placeholder),
              qt(this.heightAutoObserverWrapperEl, this.classNames.heightAutoObserverWrapperEl),
              qt(this.heightAutoObserverEl, this.classNames.heightAutoObserverEl);
            this.el.firstChild;

          )
            this.contentEl.appendChild(this.el.firstChild);
          this.contentWrapperEl.appendChild(this.contentEl),
            this.offsetEl.appendChild(this.contentWrapperEl),
            this.maskEl.appendChild(this.offsetEl),
            this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
            this.wrapperEl.appendChild(this.maskEl),
            this.wrapperEl.appendChild(this.placeholderEl),
            this.el.appendChild(this.wrapperEl),
            (t = this.contentWrapperEl) === null || t === void 0 || t.setAttribute('tabindex', '0'),
            (r = this.contentWrapperEl) === null || r === void 0 || r.setAttribute('role', 'region'),
            (s = this.contentWrapperEl) === null ||
              s === void 0 ||
              s.setAttribute('aria-label', this.options.ariaLabel);
        }
        if (!this.axis.x.track.el || !this.axis.y.track.el) {
          var o = document.createElement('div'),
            a = document.createElement('div');
          qt(o, this.classNames.track),
            qt(a, this.classNames.scrollbar),
            o.appendChild(a),
            (this.axis.x.track.el = o.cloneNode(!0)),
            qt(this.axis.x.track.el, this.classNames.horizontal),
            (this.axis.y.track.el = o.cloneNode(!0)),
            qt(this.axis.y.track.el, this.classNames.vertical),
            this.el.appendChild(this.axis.x.track.el),
            this.el.appendChild(this.axis.y.track.el);
        }
        xn.prototype.initDOM.call(this), this.el.setAttribute('data-simplebar', 'init');
      }),
      (e.prototype.unMount = function () {
        xn.prototype.unMount.call(this), e.instances.delete(this.el);
      }),
      (e.initHtmlApi = function () {
        (this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this)),
          typeof MutationObserver < 'u' &&
            ((this.globalObserver = new MutationObserver(e.handleMutations)),
            this.globalObserver.observe(document, { childList: !0, subtree: !0 })),
          document.readyState === 'complete' ||
          (document.readyState !== 'loading' && !document.documentElement.doScroll)
            ? window.setTimeout(this.initDOMLoadedElements)
            : (document.addEventListener('DOMContentLoaded', this.initDOMLoadedElements),
              window.addEventListener('load', this.initDOMLoadedElements));
      }),
      (e.handleMutations = function (i) {
        i.forEach(function (t) {
          t.addedNodes.forEach(function (r) {
            r.nodeType === 1 &&
              (r.hasAttribute('data-simplebar')
                ? !e.instances.has(r) && document.documentElement.contains(r) && new e(r, jo(r.attributes))
                : r.querySelectorAll('[data-simplebar]').forEach(function (s) {
                    s.getAttribute('data-simplebar') !== 'init' &&
                      !e.instances.has(s) &&
                      document.documentElement.contains(s) &&
                      new e(s, jo(s.attributes));
                  }));
          }),
            t.removedNodes.forEach(function (r) {
              r.nodeType === 1 &&
                (r.getAttribute('data-simplebar') === 'init'
                  ? e.instances.has(r) && !document.documentElement.contains(r) && e.instances.get(r).unMount()
                  : Array.prototype.forEach.call(r.querySelectorAll('[data-simplebar="init"]'), function (s) {
                      e.instances.has(s) && !document.documentElement.contains(s) && e.instances.get(s).unMount();
                    }));
            });
        });
      }),
      (e.instances = new WeakMap()),
      e
    );
  })(xn);
Ho && Vc.initHtmlApi();
const Np = '';
function $f() {
  const n = [],
    e = [...document.querySelectorAll('.js-simplebar')];
  e &&
    n.length > 0 &&
    e.forEach((i) => {
      const t = new Vc(i);
      n.push(t);
    });
}
class Hf {
  constructor(e) {
    (this.elements = document.querySelectorAll(e)), this.setupEvent();
  }
  setupEvent() {
    this.elements.forEach((e) => {
      e.addEventListener('mousedown', this.handleMouseDown.bind(this)),
        e.addEventListener('click', this.handleClick.bind(this));
    }),
      document.addEventListener('mousemove', this.handleMouseMove.bind(this)),
      document.addEventListener('mouseup', this.handleMouseUp.bind(this));
  }
  handleMouseDown(e) {
    return (
      e.preventDefault(),
      (this.target = e.currentTarget),
      (this.target.dataset.down = !0),
      (this.target.dataset.move = !1),
      (this.target.dataset.x = e.clientX),
      (this.target.dataset.y = e.clientY),
      (this.target.dataset.scrollleft = this.target.scrollLeft),
      (this.target.dataset.scrolltop = this.target.scrollTop),
      !1
    );
  }
  handleClick(e) {
    if (e.currentTarget.dataset.move === 'true') return !1;
  }
  handleMouseMove(e) {
    this.elements.forEach((i) => {
      if (i.dataset.down === 'true') {
        e.preventDefault();
        let t = i.dataset.x - e.clientX,
          r = i.dataset.y - e.clientY;
        if (t !== 0 || r !== 0) i.dataset.move = !0;
        else return;
        return (
          (i.scrollLeft = parseInt(i.dataset.scrollleft) + t), (i.scrollTop = parseInt(i.dataset.scrolltop) + r), !1
        );
      }
    });
  }
  handleMouseUp(e) {
    return (
      this.elements.forEach((i) => {
        i.dataset.down = !1;
      }),
      !1
    );
  }
}
class Gf {
  constructor(e) {
    (this.prevWidth = window.innerWidth), (this.breakpoint = e), this.setupEvent();
  }
  setupEvent() {
    window.addEventListener('resize', () => {
      const e = window.innerWidth;
      ((e < this.breakpoint && this.prevWidth >= this.breakpoint) ||
        (e >= this.breakpoint && this.prevWidth < this.breakpoint)) &&
        location.reload();
    });
  }
}
class Yf {
  constructor(e) {
    (this.progressBar = document.querySelector(e)),
      (this.totalLength = this.progressBar.getTotalLength()),
      this.setupProgressBar(),
      this.setupEventListeners(),
      this.setProgress();
  }
  setupProgressBar() {
    (this.progressBar.style.strokeDasharray = this.totalLength),
      (this.progressBar.style.strokeDashoffset = this.totalLength);
  }
  setupEventListeners() {
    window.addEventListener('scroll', () => {
      this.setProgress();
    }),
      window.addEventListener('resize', () => {
        (this.totalLength = this.progressBar.getTotalLength()), this.setupProgressBar(), this.setProgress();
      });
  }
  setProgress() {
    const e = document.documentElement.clientHeight,
      i = document.documentElement.scrollHeight,
      r = document.documentElement.scrollTop / (i - e);
    this.progressBar.style.strokeDashoffset = this.totalLength - this.totalLength * r;
  }
}
class Xf {
  constructor() {
    (this.cursor = document.querySelector('#cursor')),
      (this.cursorCircle = this.cursor.querySelector('.c-cursor__circle')),
      (this.mouse = { x: -100, y: -100 }),
      (this.pos = { x: 0, y: 0 }),
      (this.speed = 0.1),
      (this.updateCoordinates = this.updateCoordinates.bind(this)),
      (this.updateCursor = this.updateCursor.bind(this)),
      (this.loop = this.loop.bind(this)),
      this.addEventListeners(),
      ((window.innerWidth >= 768 && !1 in window) || !navigator.maxTouchPoints) && this.loop();
  }
  addEventListeners() {
    window.addEventListener('mousemove', this.updateCoordinates),
      document.querySelectorAll('[cursor-class]').forEach((i) => {
        i.addEventListener('mouseenter', () => {
          const t = i.getAttribute('cursor-class');
          this.cursor.classList.add(t);
        }),
          i.addEventListener('mouseleave', () => {
            const t = i.getAttribute('cursor-class');
            this.cursor.classList.remove(t);
          });
      });
  }
  updateCoordinates(e) {
    (this.mouse.x = e.clientX), (this.mouse.y = e.clientY);
  }
  getAngle(e, i) {
    return (Math.atan2(i, e) * 180) / Math.PI;
  }
  getSqueeze(e, i) {
    const t = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)),
      r = 0.15;
    return Math.min(t / 1500, r);
  }
  updateCursor() {
    const e = Math.round(this.mouse.x - this.pos.x),
      i = Math.round(this.mouse.y - this.pos.y);
    (this.pos.x += e * this.speed), (this.pos.y += i * this.speed), this.getAngle(e, i);
    const t = this.getSqueeze(e, i);
    let r, s;
    (r = 'translate3d(' + this.pos.x + 'px ,' + this.pos.y + 'px, 0)'),
      (s = 'scale(' + (1 + t) + ', ' + (1 - t) + ')'),
      (this.cursor.style.transform = r),
      (this.cursorCircle.style.transform = s);
  }
  loop() {
    this.updateCursor(), requestAnimationFrame(this.loop);
  }
}
class jf {
  constructor() {
    const e = (s) => (s < 0.5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1),
      t = document.querySelector('#header').clientHeight;
    document.querySelectorAll('a[href^="#"]').forEach((s) => {
      s.addEventListener('click', (o) => {
        o.preventDefault(), o.stopPropagation();
        const a = s.getAttribute('href'),
          l = document.documentElement.scrollTop || document.body.scrollTop,
          c = document.getElementById(a.replace('#', ''));
        if (c) {
          const u = window.scrollY + c.getBoundingClientRect().top - t,
            f = window.performance.now(),
            h = (d) => {
              const p = (d - f) / 600;
              p < 1 ? (window.scrollTo(0, l + (u - l) * e(p)), window.requestAnimationFrame(h)) : window.scrollTo(0, u);
            };
          window.requestAnimationFrame(h);
        }
      });
    });
  }
}
class Uf {
  constructor() {
    (this.elements = document.querySelectorAll('.c-accordion')), this.init();
  }
  init() {
    this.elements.forEach((e) => {
      const i = e.querySelector('.c-accordion__trigger'),
        t = e.querySelector('.c-accordion__panel');
      i.addEventListener('click', () => {
        const r = i.getAttribute('aria-expanded') === 'true';
        r ? (t.style.maxHeight = null) : (t.style.maxHeight = t.scrollHeight + 'px'),
          i.setAttribute('aria-expanded', !r);
      });
    });
  }
}
function Kf(n, e) {
  for (var i = 0; i < e.length; i++) {
    var t = e[i];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(n, t.key, t);
  }
}
function Sn(n) {
  return (
    (function (e) {
      if (Array.isArray(e)) return Uo(e);
    })(n) ||
    (function (e) {
      if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
    })(n) ||
    (function (e, i) {
      if (e) {
        if (typeof e == 'string') return Uo(e, i);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if ((t === 'Object' && e.constructor && (t = e.constructor.name), t === 'Map' || t === 'Set'))
          return Array.from(e);
        if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Uo(e, i);
      }
    })(n) ||
    (function () {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    })()
  );
}
function Uo(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var i = 0, t = new Array(e); i < e; i++) t[i] = n[i];
  return t;
}
var qc,
  Ko,
  mr,
  Qo,
  $c,
  Zo =
    ((qc = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      'select:not([disabled]):not([aria-hidden])',
      'textarea:not([disabled]):not([aria-hidden])',
      'button:not([disabled]):not([aria-hidden])',
      'iframe',
      'object',
      'embed',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])',
    ]),
    (Ko = (function () {
      function n(t) {
        var r = t.targetModal,
          s = t.triggers,
          o = s === void 0 ? [] : s,
          a = t.onShow,
          l = a === void 0 ? function () {} : a,
          c = t.onClose,
          u = c === void 0 ? function () {} : c,
          f = t.openTrigger,
          h = f === void 0 ? 'data-micromodal-trigger' : f,
          d = t.closeTrigger,
          m = d === void 0 ? 'data-micromodal-close' : d,
          p = t.openClass,
          y = p === void 0 ? 'is-open' : p,
          _ = t.disableScroll,
          g = _ !== void 0 && _,
          v = t.disableFocus,
          w = v !== void 0 && v,
          b = t.awaitCloseAnimation,
          x = b !== void 0 && b,
          E = t.awaitOpenAnimation,
          M = E !== void 0 && E,
          C = t.debugMode,
          T = C !== void 0 && C;
        (function (A, O) {
          if (!(A instanceof O)) throw new TypeError('Cannot call a class as a function');
        })(this, n),
          (this.modal = document.getElementById(r)),
          (this.config = {
            debugMode: T,
            disableScroll: g,
            openTrigger: h,
            closeTrigger: m,
            openClass: y,
            onShow: l,
            onClose: u,
            awaitCloseAnimation: x,
            awaitOpenAnimation: M,
            disableFocus: w,
          }),
          o.length > 0 && this.registerTriggers.apply(this, Sn(o)),
          (this.onClick = this.onClick.bind(this)),
          (this.onKeydown = this.onKeydown.bind(this));
      }
      var e, i;
      return (
        (e = n),
        (i = [
          {
            key: 'registerTriggers',
            value: function () {
              for (var t = this, r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
              s.filter(Boolean).forEach(function (a) {
                a.addEventListener('click', function (l) {
                  return t.showModal(l);
                });
              });
            },
          },
          {
            key: 'showModal',
            value: function () {
              var t = this,
                r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
              if (
                ((this.activeElement = document.activeElement),
                this.modal.setAttribute('aria-hidden', 'false'),
                this.modal.classList.add(this.config.openClass),
                this.scrollBehaviour('disable'),
                this.addEventListeners(),
                this.config.awaitOpenAnimation)
              ) {
                var s = function o() {
                  t.modal.removeEventListener('animationend', o, !1), t.setFocusToFirstNode();
                };
                this.modal.addEventListener('animationend', s, !1);
              } else this.setFocusToFirstNode();
              this.config.onShow(this.modal, this.activeElement, r);
            },
          },
          {
            key: 'closeModal',
            value: function () {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
                r = this.modal;
              if (
                (this.modal.setAttribute('aria-hidden', 'true'),
                this.removeEventListeners(),
                this.scrollBehaviour('enable'),
                this.activeElement && this.activeElement.focus && this.activeElement.focus(),
                this.config.onClose(this.modal, this.activeElement, t),
                this.config.awaitCloseAnimation)
              ) {
                var s = this.config.openClass;
                this.modal.addEventListener(
                  'animationend',
                  function o() {
                    r.classList.remove(s), r.removeEventListener('animationend', o, !1);
                  },
                  !1
                );
              } else r.classList.remove(this.config.openClass);
            },
          },
          {
            key: 'closeModalById',
            value: function (t) {
              (this.modal = document.getElementById(t)), this.modal && this.closeModal();
            },
          },
          {
            key: 'scrollBehaviour',
            value: function (t) {
              if (this.config.disableScroll) {
                var r = document.querySelector('body');
                switch (t) {
                  case 'enable':
                    Object.assign(r.style, { overflow: '' });
                    break;
                  case 'disable':
                    Object.assign(r.style, { overflow: 'hidden' });
                }
              }
            },
          },
          {
            key: 'addEventListeners',
            value: function () {
              this.modal.addEventListener('touchstart', this.onClick),
                this.modal.addEventListener('click', this.onClick),
                document.addEventListener('keydown', this.onKeydown);
            },
          },
          {
            key: 'removeEventListeners',
            value: function () {
              this.modal.removeEventListener('touchstart', this.onClick),
                this.modal.removeEventListener('click', this.onClick),
                document.removeEventListener('keydown', this.onKeydown);
            },
          },
          {
            key: 'onClick',
            value: function (t) {
              (t.target.hasAttribute(this.config.closeTrigger) ||
                t.target.parentNode.hasAttribute(this.config.closeTrigger)) &&
                (t.preventDefault(), t.stopPropagation(), this.closeModal(t));
            },
          },
          {
            key: 'onKeydown',
            value: function (t) {
              t.keyCode === 27 && this.closeModal(t), t.keyCode === 9 && this.retainFocus(t);
            },
          },
          {
            key: 'getFocusableNodes',
            value: function () {
              var t = this.modal.querySelectorAll(qc);
              return Array.apply(void 0, Sn(t));
            },
          },
          {
            key: 'setFocusToFirstNode',
            value: function () {
              var t = this;
              if (!this.config.disableFocus) {
                var r = this.getFocusableNodes();
                if (r.length !== 0) {
                  var s = r.filter(function (o) {
                    return !o.hasAttribute(t.config.closeTrigger);
                  });
                  s.length > 0 && s[0].focus(), s.length === 0 && r[0].focus();
                }
              }
            },
          },
          {
            key: 'retainFocus',
            value: function (t) {
              var r = this.getFocusableNodes();
              if (r.length !== 0)
                if (
                  ((r = r.filter(function (o) {
                    return o.offsetParent !== null;
                  })),
                  this.modal.contains(document.activeElement))
                ) {
                  var s = r.indexOf(document.activeElement);
                  t.shiftKey && s === 0 && (r[r.length - 1].focus(), t.preventDefault()),
                    !t.shiftKey && r.length > 0 && s === r.length - 1 && (r[0].focus(), t.preventDefault());
                } else r[0].focus();
            },
          },
        ]) && Kf(e.prototype, i),
        n
      );
    })()),
    (mr = null),
    (Qo = function (n) {
      if (!document.getElementById(n)) return !1;
    }),
    ($c = function (n, e) {
      if (
        ((function (t) {
          t.length <= 0;
        })(n),
        !e)
      )
        return !0;
      for (var i in e) Qo(i);
      return !0;
    }),
    {
      init: function (n) {
        var e = Object.assign({}, { openTrigger: 'data-micromodal-trigger' }, n),
          i = Sn(document.querySelectorAll('['.concat(e.openTrigger, ']'))),
          t = (function (o, a) {
            var l = [];
            return (
              o.forEach(function (c) {
                var u = c.attributes[a].value;
                l[u] === void 0 && (l[u] = []), l[u].push(c);
              }),
              l
            );
          })(i, e.openTrigger);
        if (e.debugMode !== !0 || $c(i, t) !== !1)
          for (var r in t) {
            var s = t[r];
            (e.targetModal = r), (e.triggers = Sn(s)), (mr = new Ko(e));
          }
      },
      show: function (n, e) {
        var i = e || {};
        (i.targetModal = n),
          (i.debugMode === !0 && Qo(n) === !1) || (mr && mr.removeEventListeners(), (mr = new Ko(i)).showModal());
      },
      close: function (n) {
        n ? mr.closeModalById(n) : mr.closeModal();
      },
    });
typeof window < 'u' && (window.MicroModal = Zo);
class Qf {
  constructor(e) {
    (this.lenis = e),
      (this.youtubePlayers = {}),
      (this.element = document.querySelector('.modal')),
      this.element && (this.ModalText(), this.Youtube(), this.ModalMovie());
  }
  ModalText() {
    Zo.init({
      onShow: () => {
        this.lenis.stop();
      },
      onClose: () => {
        this.lenis.start();
      },
      openTrigger: 'data-modalText-open',
      closeTrigger: 'data-modalText-close',
      disableScroll: !0,
      awaitOpenAnimation: !0,
      awaitCloseAnimation: !0,
    });
  }
  ModalMovie() {
    Zo.init({
      onShow: (e) => {
        this.lenis.stop();
        const i = e.querySelector('.youtube').id;
        this.youtubePlayers[i] && (this.youtubePlayers[i].playVideo(), this.youtubePlayers[i].setVolume(20));
      },
      onClose: (e) => {
        this.lenis.start();
        const i = e.querySelector('.youtube').id;
        this.youtubePlayers[i] && this.youtubePlayers[i].pauseVideo();
      },
      openTrigger: 'data-modalMovie-open',
      closeTrigger: 'data-modalMovie-close',
      disableScroll: !0,
      awaitOpenAnimation: !0,
      awaitCloseAnimation: !0,
    });
  }
  Youtube() {
    document.querySelectorAll('.youtube').forEach((i, t) => {
      const r = i.dataset.videoId,
        s = i.id;
      this.youtubePlayers[s] = new YT.Player(s, { videoId: r, playerVars: { rel: 0 } });
    });
  }
}
const Zf = 768,
  Hc = window.innerWidth < Zf,
  Jf = window.matchMedia('(min-width: 768px)').matches;
class eh {
  constructor(e, i, t, r) {
    (this.lenis = r),
      (this.DOM = {}),
      (this.DOM.nav = document.querySelector(e)),
      (this.DOM.toggle = document.querySelector(i)),
      (this.DOM.items = document.querySelectorAll(t)),
      (this.DOM.body = document.body),
      (this.DOM.y = 0),
      this.onEvent();
  }
  onEvent() {
    this.DOM.toggle.addEventListener('click', () => {
      this.DOM.toggle.getAttribute('aria-expanded') === 'true' ? this._menuClose() : this._menuOpen();
    });
  }
  _menuOpen() {
    (this.DOM.y = window.scrollY),
      this.DOM.toggle.setAttribute('aria-expanded', 'true'),
      this.DOM.toggle.setAttribute('aria-label', 'CLOSE'),
      this.DOM.nav.setAttribute('aria-hidden', 'false'),
      this.DOM.body.classList.add('-menuOpen'),
      this.lenis.stop();
  }
  _menuClose() {
    this.DOM.toggle.setAttribute('aria-expanded', 'false'),
      this.DOM.toggle.setAttribute('aria-label', 'MENU'),
      this.DOM.nav.setAttribute('aria-hidden', 'true'),
      this.DOM.body.classList.remove('-menuOpen'),
      this.lenis.start();
  }
}
class th {
  constructor() {
    const e = window.location.pathname;
    document.querySelectorAll('nav a').forEach((t) => {
      const r = t.getAttribute('data-url');
      r && e.includes(r) && (t.classList.add('is-current'), t.classList.remove('c-hover__underline'));
    });
  }
}
V.registerPlugin(H);
let ih = class {
  constructor() {
    this.scrubParallax();
  }
  basic() {
    document.querySelectorAll('.js-parallax-basic');
  }
  scrubParallax() {
    const e = document.querySelectorAll('.js-scrubParallax');
    e &&
      e.forEach((i, t) => {
        let r = '',
          s = '';
        Jf
          ? ((r = i.dataset.yset ? i.dataset.yset : 25), (s = i.dataset.yend ? i.dataset.yend : 10))
          : ((r = i.dataset.ysetsp ? i.dataset.ysetsp : i.dataset.yset),
            (s = i.dataset.yendsp ? i.dataset.yendsp : i.dataset.yend));
        let o = '';
        o = i.dataset.duration ? i.dataset.duration : 1;
        let a = '';
        a = i.dataset.delay ? i.dataset.delay : 0;
        let l = '';
        (l = i.dataset.scrub ? i.dataset.scrub : 1),
          V.set(i, { yPercent: r, willChange: 'transform' }),
          V.to(i, {
            yPercent: s,
            duration: o,
            delay: t * a,
            scrollTrigger: { trigger: i, start: 'top-=20 bottom', end: 'bottom+=20 top', scrub: l },
          });
      });
  }
};
class rh {
  constructor() {
    (this.titleElements = document.querySelectorAll('.js-textSplit')),
      (this.wrapText = this.wrapText.bind(this)),
      this.titleElements.forEach((e) => {
        this.wrapText(e);
      });
  }
  wrapText(e) {
    if (e.nodeType === Node.TEXT_NODE) {
      const i = e.textContent;
      let t = '';
      for (let s = 0; s < i.length; s++) {
        const o = i[s];
        if (
          o === ' ' ||
          o ===
            `
`
        )
          t += o;
        else {
          const a = /^[A-Za-z0-9&;]+$/.test(o);
          t += `<span class="char${a ? ' en' : ''}"><span class="char-inner">${o}</span></span>`;
        }
      }
      const r = document.createElement('div');
      for (r.innerHTML = t; r.firstChild; ) e.parentNode.insertBefore(r.firstChild, e);
      e.parentNode.removeChild(e);
    } else if (e.nodeType === Node.ELEMENT_NODE) {
      const i = e.childNodes;
      for (let t = i.length - 1; t >= 0; t--) this.wrapText(i[t]);
    }
  }
}
V.registerPlugin(H);
class sh {
  constructor() {
    this.slideUp(), this.fadeUp(), this.underline();
  }
  _createScrollTrigger(e, i) {
    H.create({ trigger: e, start: 'top 90%', onEnter: () => i.play() });
  }
  observeBodyHeightChanges() {
    new ResizeObserver(() => {
      H.refresh();
    }).observe(document.body);
  }
  slideUp() {
    (this.elements = document.querySelectorAll('.js-textSlideUp')),
      this.elements &&
        this.elements.forEach((e) => {
          const i = V.timeline({ paused: !0 }),
            t = e.textContent,
            r = 10;
          let s = '';
          s = e.dataset.delay ? e.dataset.delay : 0;
          let o = '';
          o = e.dataset.duration ? e.dataset.duration : (t.length < r, 1.4);
          let a = '';
          a = e.dataset.y ? e.dataset.y : 100;
          let l = '';
          (l = e.dataset.stagger ? e.dataset.stagger : 0),
            i.fromTo(
              e.querySelectorAll('.char-inner'),
              { opacity: 0, yPercent: a },
              { yPercent: 0, opacity: 1, duration: o, ease: Cc, delay: s, stagger: { amount: t.length < r ? 0 : l } }
            ),
            this._createScrollTrigger(e, i);
        });
  }
  fadeUp() {
    (this.elements = document.querySelectorAll('.js-textFadeUp')),
      this.elements &&
        this.elements.forEach((e) => {
          let i = '';
          i = e.dataset.delay ? e.dataset.delay : 0;
          let t = '';
          t = e.dataset.duration ? e.dataset.duration : 1.4;
          let r = '';
          (r = e.dataset.y ? e.dataset.y : 15), V.set(e, { opacity: 0, y: r });
          const s = V.timeline({ paused: !0 });
          s.to(e, { opacity: 1, y: 0, duration: t, ease: Cc, delay: i }), this._createScrollTrigger(e, s);
        });
  }
  underline() {
    (this.elements = document.querySelectorAll('.js-underline')),
      this.elements &&
        this.elements.forEach((e) => {
          let i = '';
          i = e.dataset.delay ? e.dataset.delay : 0;
          let t = '';
          t = e.dataset.duration ? e.dataset.duration : 1.4;
          const r = V.timeline({ paused: !0 });
          r.to(e, {
            duration: t,
            ease: 'power2.out',
            delay: i,
            onStart: () => {
              e.classList.add('is-scaleX');
            },
          }),
            this._createScrollTrigger(e, r);
        });
  }
}
function Gc(n) {
  return n !== null && typeof n == 'object' && 'constructor' in n && n.constructor === Object;
}
function Jo(n, e) {
  n === void 0 && (n = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((i) => {
      typeof n[i] > 'u' ? (n[i] = e[i]) : Gc(e[i]) && Gc(n[i]) && Object.keys(e[i]).length > 0 && Jo(n[i], e[i]);
    });
}
const Yc = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
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
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
};
function ci() {
  const n = typeof document < 'u' ? document : {};
  return Jo(n, Yc), n;
}
const nh = {
  document: Yc,
  navigator: { userAgent: '' },
  location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
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
  requestAnimationFrame(n) {
    return typeof setTimeout > 'u' ? (n(), null) : setTimeout(n, 0);
  },
  cancelAnimationFrame(n) {
    typeof setTimeout > 'u' || clearTimeout(n);
  },
};
function kt() {
  const n = typeof window < 'u' ? window : {};
  return Jo(n, nh), n;
}
function oh(n) {
  return (
    n === void 0 && (n = ''),
    n
      .trim()
      .split(' ')
      .filter((e) => !!e.trim())
  );
}
function ah(n) {
  const e = n;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {}
    try {
      delete e[i];
    } catch {}
  });
}
function ea(n, e) {
  return e === void 0 && (e = 0), setTimeout(n, e);
}
function Tn() {
  return Date.now();
}
function lh(n) {
  const e = kt();
  let i;
  return (
    e.getComputedStyle && (i = e.getComputedStyle(n, null)),
    !i && n.currentStyle && (i = n.currentStyle),
    i || (i = n.style),
    i
  );
}
function ch(n, e) {
  e === void 0 && (e = 'x');
  const i = kt();
  let t, r, s;
  const o = lh(n);
  return (
    i.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(',').length > 6 &&
          (r = r
            .split(', ')
            .map((a) => a.replace(',', '.'))
            .join(', ')),
        (s = new i.WebKitCSSMatrix(r === 'none' ? '' : r)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (t = s.toString().split(','))),
    e === 'x' && (i.WebKitCSSMatrix ? (r = s.m41) : t.length === 16 ? (r = parseFloat(t[12])) : (r = parseFloat(t[4]))),
    e === 'y' && (i.WebKitCSSMatrix ? (r = s.m42) : t.length === 16 ? (r = parseFloat(t[13])) : (r = parseFloat(t[5]))),
    r || 0
  );
}
function Es(n) {
  return (
    typeof n == 'object' && n !== null && n.constructor && Object.prototype.toString.call(n).slice(8, -1) === 'Object'
  );
}
function uh(n) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? n instanceof HTMLElement
    : n && (n.nodeType === 1 || n.nodeType === 11);
}
function Lt() {
  const n = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (t != null && !uh(t)) {
      const r = Object.keys(Object(t)).filter((s) => e.indexOf(s) < 0);
      for (let s = 0, o = r.length; s < o; s += 1) {
        const a = r[s],
          l = Object.getOwnPropertyDescriptor(t, a);
        l !== void 0 &&
          l.enumerable &&
          (Es(n[a]) && Es(t[a])
            ? t[a].__swiper__
              ? (n[a] = t[a])
              : Lt(n[a], t[a])
            : !Es(n[a]) && Es(t[a])
            ? ((n[a] = {}), t[a].__swiper__ ? (n[a] = t[a]) : Lt(n[a], t[a]))
            : (n[a] = t[a]));
      }
    }
  }
  return n;
}
function En(n, e, i) {
  n.style.setProperty(e, i);
}
function Xc(n) {
  let { swiper: e, targetPosition: i, side: t } = n;
  const r = kt(),
    s = -e.translate;
  let o = null,
    a;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = 'none'), r.cancelAnimationFrame(e.cssModeFrameID);
  const c = i > s ? 'next' : 'prev',
    u = (h, d) => (c === 'next' && h >= d) || (c === 'prev' && h <= d),
    f = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const h = Math.max(Math.min((a - o) / l, 1), 0),
        d = 0.5 - Math.cos(h * Math.PI) / 2;
      let m = s + d * (i - s);
      if ((u(m, i) && (m = i), e.wrapperEl.scrollTo({ [t]: m }), u(m, i))) {
        (e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [t]: m });
          }),
          r.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = r.requestAnimationFrame(f);
    };
  f();
}
function Dt(n, e) {
  return e === void 0 && (e = ''), [...n.children].filter((i) => i.matches(e));
}
function Cn(n) {
  try {
    return;
  } catch {}
}
function Mn(n, e) {
  e === void 0 && (e = []);
  const i = document.createElement(n);
  return i.classList.add(...(Array.isArray(e) ? e : oh(e))), i;
}
function dh(n, e) {
  const i = [];
  for (; n.previousElementSibling; ) {
    const t = n.previousElementSibling;
    e ? t.matches(e) && i.push(t) : i.push(t), (n = t);
  }
  return i;
}
function fh(n, e) {
  const i = [];
  for (; n.nextElementSibling; ) {
    const t = n.nextElementSibling;
    e ? t.matches(e) && i.push(t) : i.push(t), (n = t);
  }
  return i;
}
function Fi(n, e) {
  return kt().getComputedStyle(n, null).getPropertyValue(e);
}
function On(n) {
  let e = n,
    i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; ) e.nodeType === 1 && (i += 1);
    return i;
  }
}
function jc(n, e) {
  const i = [];
  let t = n.parentElement;
  for (; t; ) e ? t.matches(e) && i.push(t) : i.push(t), (t = t.parentElement);
  return i;
}
function ta(n, e, i) {
  const t = kt();
  return i
    ? n[e === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(t.getComputedStyle(n, null).getPropertyValue(e === 'width' ? 'margin-right' : 'margin-top')) +
        parseFloat(t.getComputedStyle(n, null).getPropertyValue(e === 'width' ? 'margin-left' : 'margin-bottom'))
    : n.offsetWidth;
}
let ia;
function hh() {
  const n = kt(),
    e = ci();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && 'scrollBehavior' in e.documentElement.style,
    touch: !!('ontouchstart' in n || (n.DocumentTouch && e instanceof n.DocumentTouch)),
  };
}
function Uc() {
  return ia || (ia = hh()), ia;
}
let ra;
function ph(n) {
  let { userAgent: e } = n === void 0 ? {} : n;
  const i = Uc(),
    t = kt(),
    r = t.navigator.platform,
    s = e || t.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = t.screen.width,
    l = t.screen.height,
    c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = s.match(/(iPad).*OS\s([\d_]+)/);
  const f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    h = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    d = r === 'Win32';
  let m = r === 'MacIntel';
  const p = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ];
  return (
    !u &&
      m &&
      i.touch &&
      p.indexOf(`${a}x${l}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)), u || (u = [0, 1, '13_0_0']), (m = !1)),
    c && !d && ((o.os = 'android'), (o.android = !0)),
    (u || h || f) && ((o.os = 'ios'), (o.ios = !0)),
    o
  );
}
function mh(n) {
  return n === void 0 && (n = {}), ra || (ra = ph(n)), ra;
}
let sa;
function gh() {
  const n = kt();
  let e = !1;
  function i() {
    const t = n.navigator.userAgent.toLowerCase();
    return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
  }
  if (i()) {
    const t = String(n.navigator.userAgent);
    if (t.includes('Version/')) {
      const [r, s] = t
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((o) => Number(o));
      e = r < 16 || (r === 16 && s < 2);
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),
  };
}
function vh() {
  return sa || (sa = gh()), sa;
}
function _h(n) {
  let { swiper: e, on: i, emit: t } = n;
  const r = kt();
  let s = null,
    o = null;
  const a = () => {
      !e || e.destroyed || !e.initialized || (t('beforeResize'), t('resize'));
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver((f) => {
          o = r.requestAnimationFrame(() => {
            const { width: h, height: d } = e;
            let m = h,
              p = d;
            f.forEach((y) => {
              let { contentBoxSize: _, contentRect: g, target: v } = y;
              (v && v !== e.el) ||
                ((m = g ? g.width : (_[0] || _).inlineSize), (p = g ? g.height : (_[0] || _).blockSize));
            }),
              (m !== h || p !== d) && a();
          });
        })),
        s.observe(e.el));
    },
    c = () => {
      o && r.cancelAnimationFrame(o), s && s.unobserve && e.el && (s.unobserve(e.el), (s = null));
    },
    u = () => {
      !e || e.destroyed || !e.initialized || t('orientationchange');
    };
  i('init', () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < 'u') {
      l();
      return;
    }
    r.addEventListener('resize', a), r.addEventListener('orientationchange', u);
  }),
    i('destroy', () => {
      c(), r.removeEventListener('resize', a), r.removeEventListener('orientationchange', u);
    });
}
function yh(n) {
  let { swiper: e, extendParams: i, on: t, emit: r } = n;
  const s = [],
    o = kt(),
    a = function (u, f) {
      f === void 0 && (f = {});
      const h = o.MutationObserver || o.WebkitMutationObserver,
        d = new h((m) => {
          if (e.__preventObserver__) return;
          if (m.length === 1) {
            r('observerUpdate', m[0]);
            return;
          }
          const p = function () {
            r('observerUpdate', m[0]);
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(p) : o.setTimeout(p, 0);
        });
      d.observe(u, {
        attributes: typeof f.attributes > 'u' ? !0 : f.attributes,
        childList: typeof f.childList > 'u' ? !0 : f.childList,
        characterData: typeof f.characterData > 'u' ? !0 : f.characterData,
      }),
        s.push(d);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const u = jc(e.hostEl);
          for (let f = 0; f < u.length; f += 1) a(u[f]);
        }
        a(e.hostEl, { childList: e.params.observeSlideChildren }), a(e.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      s.forEach((u) => {
        u.disconnect();
      }),
        s.splice(0, s.length);
    };
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), t('init', l), t('destroy', c);
}
var wh = {
  on(n, e, i) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != 'function') return t;
    const r = i ? 'unshift' : 'push';
    return (
      n.split(' ').forEach((s) => {
        t.eventsListeners[s] || (t.eventsListeners[s] = []), t.eventsListeners[s][r](e);
      }),
      t
    );
  },
  once(n, e, i) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof e != 'function') return t;
    function r() {
      t.off(n, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++) o[a] = arguments[a];
      e.apply(t, o);
    }
    return (r.__emitterProxy = e), t.on(n, r, i);
  },
  onAny(n, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof n != 'function') return i;
    const t = e ? 'unshift' : 'push';
    return i.eventsAnyListeners.indexOf(n) < 0 && i.eventsAnyListeners[t](n), i;
  },
  offAny(n) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(n);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(n, e) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        n.split(' ').forEach((t) => {
          typeof e > 'u'
            ? (i.eventsListeners[t] = [])
            : i.eventsListeners[t] &&
              i.eventsListeners[t].forEach((r, s) => {
                (r === e || (r.__emitterProxy && r.__emitterProxy === e)) && i.eventsListeners[t].splice(s, 1);
              });
        }),
      i
    );
  },
  emit() {
    const n = this;
    if (!n.eventsListeners || n.destroyed || !n.eventsListeners) return n;
    let e, i, t;
    for (var r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
    return (
      typeof s[0] == 'string' || Array.isArray(s[0])
        ? ((e = s[0]), (i = s.slice(1, s.length)), (t = n))
        : ((e = s[0].events), (i = s[0].data), (t = s[0].context || n)),
      i.unshift(t),
      (Array.isArray(e) ? e : e.split(' ')).forEach((l) => {
        n.eventsAnyListeners &&
          n.eventsAnyListeners.length &&
          n.eventsAnyListeners.forEach((c) => {
            c.apply(t, [l, ...i]);
          }),
          n.eventsListeners &&
            n.eventsListeners[l] &&
            n.eventsListeners[l].forEach((c) => {
              c.apply(t, i);
            });
      }),
      n
    );
  },
};
function bh() {
  const n = this;
  let e, i;
  const t = n.el;
  typeof n.params.width < 'u' && n.params.width !== null ? (e = n.params.width) : (e = t.clientWidth),
    typeof n.params.height < 'u' && n.params.height !== null ? (i = n.params.height) : (i = t.clientHeight),
    !((e === 0 && n.isHorizontal()) || (i === 0 && n.isVertical())) &&
      ((e = e - parseInt(Fi(t, 'padding-left') || 0, 10) - parseInt(Fi(t, 'padding-right') || 0, 10)),
      (i = i - parseInt(Fi(t, 'padding-top') || 0, 10) - parseInt(Fi(t, 'padding-bottom') || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(n, { width: e, height: i, size: n.isHorizontal() ? e : i }));
}
function xh() {
  const n = this;
  function e(T, A) {
    return parseFloat(T.getPropertyValue(n.getDirectionLabel(A)) || 0);
  }
  const i = n.params,
    { wrapperEl: t, slidesEl: r, size: s, rtlTranslate: o, wrongRTL: a } = n,
    l = n.virtual && i.virtual.enabled,
    c = l ? n.virtual.slides.length : n.slides.length,
    u = Dt(r, `.${n.params.slideClass}, swiper-slide`),
    f = l ? n.virtual.slides.length : u.length;
  let h = [];
  const d = [],
    m = [];
  let p = i.slidesOffsetBefore;
  typeof p == 'function' && (p = i.slidesOffsetBefore.call(n));
  let y = i.slidesOffsetAfter;
  typeof y == 'function' && (y = i.slidesOffsetAfter.call(n));
  const _ = n.snapGrid.length,
    g = n.slidesGrid.length;
  let v = i.spaceBetween,
    w = -p,
    b = 0,
    x = 0;
  if (typeof s > 'u') return;
  typeof v == 'string' && v.indexOf('%') >= 0
    ? (v = (parseFloat(v.replace('%', '')) / 100) * s)
    : typeof v == 'string' && (v = parseFloat(v)),
    (n.virtualSize = -v),
    u.forEach((T) => {
      o ? (T.style.marginLeft = '') : (T.style.marginRight = ''), (T.style.marginBottom = ''), (T.style.marginTop = '');
    }),
    i.centeredSlides &&
      i.cssMode &&
      (En(t, '--swiper-centered-offset-before', ''), En(t, '--swiper-centered-offset-after', ''));
  const E = i.grid && i.grid.rows > 1 && n.grid;
  E ? n.grid.initSlides(u) : n.grid && n.grid.unsetSlides();
  let M;
  const C =
    i.slidesPerView === 'auto' &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter((T) => typeof i.breakpoints[T].slidesPerView < 'u').length > 0;
  for (let T = 0; T < f; T += 1) {
    M = 0;
    let A;
    if ((u[T] && (A = u[T]), E && n.grid.updateSlide(T, A, u), !(u[T] && Fi(A, 'display') === 'none'))) {
      if (i.slidesPerView === 'auto') {
        C && (u[T].style[n.getDirectionLabel('width')] = '');
        const O = getComputedStyle(A),
          k = A.style.transform,
          L = A.style.webkitTransform;
        if ((k && (A.style.transform = 'none'), L && (A.style.webkitTransform = 'none'), i.roundLengths))
          M = n.isHorizontal() ? ta(A, 'width', !0) : ta(A, 'height', !0);
        else {
          const D = e(O, 'width'),
            N = e(O, 'padding-left'),
            B = e(O, 'padding-right'),
            I = e(O, 'margin-left'),
            G = e(O, 'margin-right'),
            S = O.getPropertyValue('box-sizing');
          if (S && S === 'border-box') M = D + I + G;
          else {
            const { clientWidth: q, offsetWidth: le } = A;
            M = D + N + B + I + G + (le - q);
          }
        }
        k && (A.style.transform = k), L && (A.style.webkitTransform = L), i.roundLengths && (M = Math.floor(M));
      } else
        (M = (s - (i.slidesPerView - 1) * v) / i.slidesPerView),
          i.roundLengths && (M = Math.floor(M)),
          u[T] && (u[T].style[n.getDirectionLabel('width')] = `${M}px`);
      u[T] && (u[T].swiperSlideSize = M),
        m.push(M),
        i.centeredSlides
          ? ((w = w + M / 2 + b / 2 + v),
            b === 0 && T !== 0 && (w = w - s / 2 - v),
            T === 0 && (w = w - s / 2 - v),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            i.roundLengths && (w = Math.floor(w)),
            x % i.slidesPerGroup === 0 && h.push(w),
            d.push(w))
          : (i.roundLengths && (w = Math.floor(w)),
            (x - Math.min(n.params.slidesPerGroupSkip, x)) % n.params.slidesPerGroup === 0 && h.push(w),
            d.push(w),
            (w = w + M + v)),
        (n.virtualSize += M + v),
        (b = M),
        (x += 1);
    }
  }
  if (
    ((n.virtualSize = Math.max(n.virtualSize, s) + y),
    o && a && (i.effect === 'slide' || i.effect === 'coverflow') && (t.style.width = `${n.virtualSize + v}px`),
    i.setWrapperSize && (t.style[n.getDirectionLabel('width')] = `${n.virtualSize + v}px`),
    E && n.grid.updateWrapperSize(M, h),
    !i.centeredSlides)
  ) {
    const T = [];
    for (let A = 0; A < h.length; A += 1) {
      let O = h[A];
      i.roundLengths && (O = Math.floor(O)), h[A] <= n.virtualSize - s && T.push(O);
    }
    (h = T), Math.floor(n.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(n.virtualSize - s);
  }
  if (l && i.loop) {
    const T = m[0] + v;
    if (i.slidesPerGroup > 1) {
      const A = Math.ceil((n.virtual.slidesBefore + n.virtual.slidesAfter) / i.slidesPerGroup),
        O = T * i.slidesPerGroup;
      for (let k = 0; k < A; k += 1) h.push(h[h.length - 1] + O);
    }
    for (let A = 0; A < n.virtual.slidesBefore + n.virtual.slidesAfter; A += 1)
      i.slidesPerGroup === 1 && h.push(h[h.length - 1] + T), d.push(d[d.length - 1] + T), (n.virtualSize += T);
  }
  if ((h.length === 0 && (h = [0]), v !== 0)) {
    const T = n.isHorizontal() && o ? 'marginLeft' : n.getDirectionLabel('marginRight');
    u.filter((A, O) => (!i.cssMode || i.loop ? !0 : O !== u.length - 1)).forEach((A) => {
      A.style[T] = `${v}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let T = 0;
    m.forEach((O) => {
      T += O + (v || 0);
    }),
      (T -= v);
    const A = T - s;
    h = h.map((O) => (O <= 0 ? -p : O > A ? A + y : O));
  }
  if (i.centerInsufficientSlides) {
    let T = 0;
    if (
      (m.forEach((A) => {
        T += A + (v || 0);
      }),
      (T -= v),
      T < s)
    ) {
      const A = (s - T) / 2;
      h.forEach((O, k) => {
        h[k] = O - A;
      }),
        d.forEach((O, k) => {
          d[k] = O + A;
        });
    }
  }
  if (
    (Object.assign(n, { slides: u, snapGrid: h, slidesGrid: d, slidesSizesGrid: m }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    En(t, '--swiper-centered-offset-before', `${-h[0]}px`),
      En(t, '--swiper-centered-offset-after', `${n.size / 2 - m[m.length - 1] / 2}px`);
    const T = -n.snapGrid[0],
      A = -n.slidesGrid[0];
    (n.snapGrid = n.snapGrid.map((O) => O + T)), (n.slidesGrid = n.slidesGrid.map((O) => O + A));
  }
  if (
    (f !== c && n.emit('slidesLengthChange'),
    h.length !== _ && (n.params.watchOverflow && n.checkOverflow(), n.emit('snapGridLengthChange')),
    d.length !== g && n.emit('slidesGridLengthChange'),
    i.watchSlidesProgress && n.updateSlidesOffset(),
    n.emit('slidesUpdated'),
    !l && !i.cssMode && (i.effect === 'slide' || i.effect === 'fade'))
  ) {
    const T = `${i.containerModifierClass}backface-hidden`,
      A = n.el.classList.contains(T);
    f <= i.maxBackfaceHiddenSlides ? A || n.el.classList.add(T) : A && n.el.classList.remove(T);
  }
}
function Sh(n) {
  const e = this,
    i = [],
    t = e.virtual && e.params.virtual.enabled;
  let r = 0,
    s;
  typeof n == 'number' ? e.setTransition(n) : n === !0 && e.setTransition(e.params.speed);
  const o = (a) => (t ? e.slides[e.getSlideIndexByData(a)] : e.slides[a]);
  if (e.params.slidesPerView !== 'auto' && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((a) => {
        i.push(a);
      });
    else
      for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
        const a = e.activeIndex + s;
        if (a > e.slides.length && !t) break;
        i.push(o(a));
      }
  else i.push(o(e.activeIndex));
  for (s = 0; s < i.length; s += 1)
    if (typeof i[s] < 'u') {
      const a = i[s].offsetHeight;
      r = a > r ? a : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function Th() {
  const n = this,
    e = n.slides,
    i = n.isElement ? (n.isHorizontal() ? n.wrapperEl.offsetLeft : n.wrapperEl.offsetTop) : 0;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = (n.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop) - i - n.cssOverflowAdjustment();
}
function Eh(n) {
  n === void 0 && (n = (this && this.translate) || 0);
  const e = this,
    i = e.params,
    { slides: t, rtlTranslate: r, snapGrid: s } = e;
  if (t.length === 0) return;
  typeof t[0].swiperSlideOffset > 'u' && e.updateSlidesOffset();
  let o = -n;
  r && (o = n),
    t.forEach((l) => {
      l.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let a = i.spaceBetween;
  typeof a == 'string' && a.indexOf('%') >= 0
    ? (a = (parseFloat(a.replace('%', '')) / 100) * e.size)
    : typeof a == 'string' && (a = parseFloat(a));
  for (let l = 0; l < t.length; l += 1) {
    const c = t[l];
    let u = c.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (u -= t[0].swiperSlideOffset);
    const f = (o + (i.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + a),
      h = (o - s[0] + (i.centeredSlides ? e.minTranslate() : 0) - u) / (c.swiperSlideSize + a),
      d = -(o - u),
      m = d + e.slidesSizesGrid[l],
      p = d >= 0 && d <= e.size - e.slidesSizesGrid[l];
    ((d >= 0 && d < e.size - 1) || (m > 1 && m <= e.size) || (d <= 0 && m >= e.size)) &&
      (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(l), t[l].classList.add(i.slideVisibleClass)),
      p && t[l].classList.add(i.slideFullyVisibleClass),
      (c.progress = r ? -f : f),
      (c.originalProgress = r ? -h : h);
  }
}
function Ch(n) {
  const e = this;
  if (typeof n > 'u') {
    const u = e.rtlTranslate ? -1 : 1;
    n = (e && e.translate && e.translate * u) || 0;
  }
  const i = e.params,
    t = e.maxTranslate() - e.minTranslate();
  let { progress: r, isBeginning: s, isEnd: o, progressLoop: a } = e;
  const l = s,
    c = o;
  if (t === 0) (r = 0), (s = !0), (o = !0);
  else {
    r = (n - e.minTranslate()) / t;
    const u = Math.abs(n - e.minTranslate()) < 1,
      f = Math.abs(n - e.maxTranslate()) < 1;
    (s = u || r <= 0), (o = f || r >= 1), u && (r = 0), f && (r = 1);
  }
  if (i.loop) {
    const u = e.getSlideIndexByData(0),
      f = e.getSlideIndexByData(e.slides.length - 1),
      h = e.slidesGrid[u],
      d = e.slidesGrid[f],
      m = e.slidesGrid[e.slidesGrid.length - 1],
      p = Math.abs(n);
    p >= h ? (a = (p - h) / m) : (a = (p + m - d) / m), a > 1 && (a -= 1);
  }
  Object.assign(e, { progress: r, progressLoop: a, isBeginning: s, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && e.updateSlidesProgress(n),
    s && !l && e.emit('reachBeginning toEdge'),
    o && !c && e.emit('reachEnd toEdge'),
    ((l && !s) || (c && !o)) && e.emit('fromEdge'),
    e.emit('progress', r);
}
function Mh() {
  const n = this,
    { slides: e, params: i, slidesEl: t, activeIndex: r } = n,
    s = n.virtual && i.virtual.enabled,
    o = n.grid && i.grid && i.grid.rows > 1,
    a = (f) => Dt(t, `.${i.slideClass}${f}, swiper-slide${f}`)[0];
  e.forEach((f) => {
    f.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
  });
  let l, c, u;
  if (s)
    if (i.loop) {
      let f = r - n.virtual.slidesBefore;
      f < 0 && (f = n.virtual.slides.length + f),
        f >= n.virtual.slides.length && (f -= n.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${f}"]`));
    } else l = a(`[data-swiper-slide-index="${r}"]`);
  else
    o
      ? ((l = e.filter((f) => f.column === r)[0]),
        (u = e.filter((f) => f.column === r + 1)[0]),
        (c = e.filter((f) => f.column === r - 1)[0]))
      : (l = e[r]);
  l &&
    (l.classList.add(i.slideActiveClass),
    o
      ? (u && u.classList.add(i.slideNextClass), c && c.classList.add(i.slidePrevClass))
      : ((u = fh(l, `.${i.slideClass}, swiper-slide`)[0]),
        i.loop && !u && (u = e[0]),
        u && u.classList.add(i.slideNextClass),
        (c = dh(l, `.${i.slideClass}, swiper-slide`)[0]),
        i.loop && !c === 0 && (c = e[e.length - 1]),
        c && c.classList.add(i.slidePrevClass))),
    n.emitSlidesClasses();
}
const Pn = (n, e) => {
    if (!n || n.destroyed || !n.params) return;
    const i = () => (n.isElement ? 'swiper-slide' : `.${n.params.slideClass}`),
      t = e.closest(i());
    if (t) {
      let r = t.querySelector(`.${n.params.lazyPreloaderClass}`);
      !r &&
        n.isElement &&
        (t.shadowRoot
          ? (r = t.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              t.shadowRoot && ((r = t.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`)), r && r.remove());
            })),
        r && r.remove();
    }
  },
  na = (n, e) => {
    if (!n.slides[e]) return;
    const i = n.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute('loading');
  },
  oa = (n) => {
    if (!n || n.destroyed || !n.params) return;
    let e = n.params.lazyPreloadPrevNext;
    const i = n.slides.length;
    if (!i || !e || e < 0) return;
    e = Math.min(e, i);
    const t = n.params.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : Math.ceil(n.params.slidesPerView),
      r = n.activeIndex;
    if (n.params.grid && n.params.grid.rows > 1) {
      const o = r,
        a = [o - e];
      a.push(...Array.from({ length: e }).map((l, c) => o + t + c)),
        n.slides.forEach((l, c) => {
          a.includes(l.column) && na(n, c);
        });
      return;
    }
    const s = r + t - 1;
    if (n.params.rewind || n.params.loop)
      for (let o = r - e; o <= s + e; o += 1) {
        const a = ((o % i) + i) % i;
        (a < r || a > s) && na(n, a);
      }
    else for (let o = Math.max(r - e, 0); o <= Math.min(s + e, i - 1); o += 1) o !== r && (o > s || o < r) && na(n, o);
  };
function Oh(n) {
  const { slidesGrid: e, params: i } = n,
    t = n.rtlTranslate ? n.translate : -n.translate;
  let r;
  for (let s = 0; s < e.length; s += 1)
    typeof e[s + 1] < 'u'
      ? t >= e[s] && t < e[s + 1] - (e[s + 1] - e[s]) / 2
        ? (r = s)
        : t >= e[s] && t < e[s + 1] && (r = s + 1)
      : t >= e[s] && (r = s);
  return i.normalizeSlideIndex && (r < 0 || typeof r > 'u') && (r = 0), r;
}
function Ph(n) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: t, params: r, activeIndex: s, realIndex: o, snapIndex: a } = e;
  let l = n,
    c;
  const u = (d) => {
    let m = d - e.virtual.slidesBefore;
    return (
      m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), m
    );
  };
  if ((typeof l > 'u' && (l = Oh(e)), t.indexOf(i) >= 0)) c = t.indexOf(i);
  else {
    const d = Math.min(r.slidesPerGroupSkip, l);
    c = d + Math.floor((l - d) / r.slidesPerGroup);
  }
  if ((c >= t.length && (c = t.length - 1), l === s && !e.params.loop)) {
    c !== a && ((e.snapIndex = c), e.emit('snapIndexChange'));
    return;
  }
  if (l === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = u(l);
    return;
  }
  const f = e.grid && r.grid && r.grid.rows > 1;
  let h;
  if (e.virtual && r.virtual.enabled && r.loop) h = u(l);
  else if (f) {
    const d = e.slides.filter((p) => p.column === l)[0];
    let m = parseInt(d.getAttribute('data-swiper-slide-index'), 10);
    Number.isNaN(m) && (m = Math.max(e.slides.indexOf(d), 0)), (h = Math.floor(m / r.grid.rows));
  } else if (e.slides[l]) {
    const d = e.slides[l].getAttribute('data-swiper-slide-index');
    d ? (h = parseInt(d, 10)) : (h = l);
  } else h = l;
  Object.assign(e, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: h,
    previousIndex: s,
    activeIndex: l,
  }),
    e.initialized && oa(e),
    e.emit('activeIndexChange'),
    e.emit('snapIndexChange'),
    (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit('realIndexChange'), e.emit('slideChange'));
}
function Ah(n, e) {
  const i = this,
    t = i.params;
  let r = n.closest(`.${t.slideClass}, swiper-slide`);
  !r &&
    i.isElement &&
    e &&
    e.length > 1 &&
    e.includes(n) &&
    [...e.slice(e.indexOf(n) + 1, e.length)].forEach((a) => {
      !r && a.matches && a.matches(`.${t.slideClass}, swiper-slide`) && (r = a);
    });
  let s = !1,
    o;
  if (r) {
    for (let a = 0; a < i.slides.length; a += 1)
      if (i.slides[a] === r) {
        (s = !0), (o = a);
        break;
      }
  }
  if (r && s)
    (i.clickedSlide = r),
      i.virtual && i.params.virtual.enabled
        ? (i.clickedIndex = parseInt(r.getAttribute('data-swiper-slide-index'), 10))
        : (i.clickedIndex = o);
  else {
    (i.clickedSlide = void 0), (i.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
}
var kh = {
  updateSize: bh,
  updateSlides: xh,
  updateAutoHeight: Sh,
  updateSlidesOffset: Th,
  updateSlidesProgress: Eh,
  updateProgress: Ch,
  updateSlidesClasses: Mh,
  updateActiveIndex: Ph,
  updateClickedSlide: Ah,
};
function Lh(n) {
  n === void 0 && (n = this.isHorizontal() ? 'x' : 'y');
  const e = this,
    { params: i, rtlTranslate: t, translate: r, wrapperEl: s } = e;
  if (i.virtualTranslate) return t ? -r : r;
  if (i.cssMode) return r;
  let o = ch(s, n);
  return (o += e.cssOverflowAdjustment()), t && (o = -o), o || 0;
}
function Dh(n, e) {
  const i = this,
    { rtlTranslate: t, params: r, wrapperEl: s, progress: o } = i;
  let a = 0,
    l = 0;
  const c = 0;
  i.isHorizontal() ? (a = t ? -n : n) : (l = n),
    r.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? a : l),
    r.cssMode
      ? (s[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -a : -l)
      : r.virtualTranslate ||
        (i.isHorizontal() ? (a -= i.cssOverflowAdjustment()) : (l -= i.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`));
  let u;
  const f = i.maxTranslate() - i.minTranslate();
  f === 0 ? (u = 0) : (u = (n - i.minTranslate()) / f),
    u !== o && i.updateProgress(n),
    i.emit('setTranslate', i.translate, e);
}
function Ih() {
  return -this.snapGrid[0];
}
function zh() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Rh(n, e, i, t, r) {
  n === void 0 && (n = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), t === void 0 && (t = !0);
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    c = s.maxTranslate();
  let u;
  if ((t && n > l ? (u = l) : t && n < c ? (u = c) : (u = n), s.updateProgress(u), o.cssMode)) {
    const f = s.isHorizontal();
    if (e === 0) a[f ? 'scrollLeft' : 'scrollTop'] = -u;
    else {
      if (!s.support.smoothScroll) return Xc({ swiper: s, targetPosition: -u, side: f ? 'left' : 'top' }), !0;
      a.scrollTo({ [f ? 'left' : 'top']: -u, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    e === 0
      ? (s.setTransition(0), s.setTranslate(u), i && (s.emit('beforeTransitionStart', e, r), s.emit('transitionEnd')))
      : (s.setTransition(e),
        s.setTranslate(u),
        i && (s.emit('beforeTransitionStart', e, r), s.emit('transitionStart')),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (h) {
              !s ||
                s.destroyed ||
                (h.target === this &&
                  (s.wrapperEl.removeEventListener('transitionend', s.onTranslateToWrapperTransitionEnd),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  i && s.emit('transitionEnd')));
            }),
          s.wrapperEl.addEventListener('transitionend', s.onTranslateToWrapperTransitionEnd))),
    !0
  );
}
var Nh = { getTranslate: Lh, setTranslate: Dh, minTranslate: Ih, maxTranslate: zh, translateTo: Rh };
function Bh(n, e) {
  const i = this;
  i.params.cssMode ||
    ((i.wrapperEl.style.transitionDuration = `${n}ms`), (i.wrapperEl.style.transitionDelay = n === 0 ? '0ms' : '')),
    i.emit('setTransition', n, e);
}
function Kc(n) {
  let { swiper: e, runCallbacks: i, direction: t, step: r } = n;
  const { activeIndex: s, previousIndex: o } = e;
  let a = t;
  if ((a || (s > o ? (a = 'next') : s < o ? (a = 'prev') : (a = 'reset')), e.emit(`transition${r}`), i && s !== o)) {
    if (a === 'reset') {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`),
      a === 'next' ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`);
  }
}
function Fh(n, e) {
  n === void 0 && (n = !0);
  const i = this,
    { params: t } = i;
  t.cssMode || (t.autoHeight && i.updateAutoHeight(), Kc({ swiper: i, runCallbacks: n, direction: e, step: 'Start' }));
}
function Wh(n, e) {
  n === void 0 && (n = !0);
  const i = this,
    { params: t } = i;
  (i.animating = !1), !t.cssMode && (i.setTransition(0), Kc({ swiper: i, runCallbacks: n, direction: e, step: 'End' }));
}
var Vh = { setTransition: Bh, transitionStart: Fh, transitionEnd: Wh };
function qh(n, e, i, t, r) {
  n === void 0 && (n = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof n == 'string' && (n = parseInt(n, 10));
  const s = this;
  let o = n;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: f,
    rtlTranslate: h,
    wrapperEl: d,
    enabled: m,
  } = s;
  if ((s.animating && a.preventInteractionOnTransition) || (!m && !t && !r)) return !1;
  const p = Math.min(s.params.slidesPerGroupSkip, o);
  let y = p + Math.floor((o - p) / s.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1);
  const _ = -l[y];
  if (a.normalizeSlideIndex)
    for (let v = 0; v < c.length; v += 1) {
      const w = -Math.floor(_ * 100),
        b = Math.floor(c[v] * 100),
        x = Math.floor(c[v + 1] * 100);
      typeof c[v + 1] < 'u'
        ? w >= b && w < x - (x - b) / 2
          ? (o = v)
          : w >= b && w < x && (o = v + 1)
        : w >= b && (o = v);
    }
  if (
    s.initialized &&
    o !== f &&
    ((!s.allowSlideNext && (h ? _ > s.translate && _ > s.minTranslate() : _ < s.translate && _ < s.minTranslate())) ||
      (!s.allowSlidePrev && _ > s.translate && _ > s.maxTranslate() && (f || 0) !== o))
  )
    return !1;
  o !== (u || 0) && i && s.emit('beforeSlideChangeStart'), s.updateProgress(_);
  let g;
  if (
    (o > f ? (g = 'next') : o < f ? (g = 'prev') : (g = 'reset'),
    (h && -_ === s.translate) || (!h && _ === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== 'slide' && s.setTranslate(_),
      g !== 'reset' && (s.transitionStart(i, g), s.transitionEnd(i, g)),
      !1
    );
  if (a.cssMode) {
    const v = s.isHorizontal(),
      w = h ? _ : -_;
    if (e === 0) {
      const b = s.virtual && s.params.virtual.enabled;
      b && ((s.wrapperEl.style.scrollSnapType = 'none'), (s._immediateVirtual = !0)),
        b && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              d[v ? 'scrollLeft' : 'scrollTop'] = w;
            }))
          : (d[v ? 'scrollLeft' : 'scrollTop'] = w),
        b &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ''), (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll) return Xc({ swiper: s, targetPosition: w, side: v ? 'left' : 'top' }), !0;
      d.scrollTo({ [v ? 'left' : 'top']: w, behavior: 'smooth' });
    }
    return !0;
  }
  return (
    s.setTransition(e),
    s.setTranslate(_),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit('beforeTransitionStart', e, t),
    s.transitionStart(i, g),
    e === 0
      ? s.transitionEnd(i, g)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (w) {
            !s ||
              s.destroyed ||
              (w.target === this &&
                (s.wrapperEl.removeEventListener('transitionend', s.onSlideToWrapperTransitionEnd),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(i, g)));
          }),
        s.wrapperEl.addEventListener('transitionend', s.onSlideToWrapperTransitionEnd)),
    !0
  );
}
function $h(n, e, i, t) {
  n === void 0 && (n = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof n == 'string' && (n = parseInt(n, 10));
  const r = this,
    s = r.grid && r.params.grid && r.params.grid.rows > 1;
  let o = n;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const h = o * r.params.grid.rows;
        a = r.slides.filter((d) => d.getAttribute('data-swiper-slide-index') * 1 === h)[0].column;
      } else a = r.getSlideIndexByData(o);
      const l = s ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
        { centeredSlides: c } = r.params;
      let u = r.params.slidesPerView;
      u === 'auto'
        ? (u = r.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))), c && u % 2 === 0 && (u = u + 1));
      let f = l - a < u;
      if ((c && (f = f || a < Math.ceil(u / 2)), f)) {
        const h = c
          ? a < r.activeIndex
            ? 'prev'
            : 'next'
          : a - r.activeIndex - 1 < r.params.slidesPerView
          ? 'next'
          : 'prev';
        r.loopFix({
          direction: h,
          slideTo: !0,
          activeSlideIndex: h === 'next' ? a + 1 : a - l + 1,
          slideRealIndex: h === 'next' ? r.realIndex : void 0,
        });
      }
      if (s) {
        const h = o * r.params.grid.rows;
        o = r.slides.filter((d) => d.getAttribute('data-swiper-slide-index') * 1 === h)[0].column;
      } else o = r.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, e, i, t);
    }),
    r
  );
}
function Hh(n, e, i) {
  n === void 0 && (n = this.params.speed), e === void 0 && (e = !0);
  const t = this,
    { enabled: r, params: s, animating: o } = t;
  if (!r) return t;
  let a = s.slidesPerGroup;
  s.slidesPerView === 'auto' &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(t.slidesPerViewDynamic('current', !0), 1));
  const l = t.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    c = t.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !c && s.loopPreventsSliding) return !1;
    if (
      (t.loopFix({ direction: 'next' }),
      (t._clientLeft = t.wrapperEl.clientLeft),
      t.activeIndex === t.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          t.slideTo(t.activeIndex + l, n, e, i);
        }),
        !0
      );
  }
  return s.rewind && t.isEnd ? t.slideTo(0, n, e, i) : t.slideTo(t.activeIndex + l, n, e, i);
}
function Gh(n, e, i) {
  n === void 0 && (n = this.params.speed), e === void 0 && (e = !0);
  const t = this,
    { params: r, snapGrid: s, slidesGrid: o, rtlTranslate: a, enabled: l, animating: c } = t;
  if (!l) return t;
  const u = t.virtual && r.virtual.enabled;
  if (r.loop) {
    if (c && !u && r.loopPreventsSliding) return !1;
    t.loopFix({ direction: 'prev' }), (t._clientLeft = t.wrapperEl.clientLeft);
  }
  const f = a ? t.translate : -t.translate;
  function h(_) {
    return _ < 0 ? -Math.floor(Math.abs(_)) : Math.floor(_);
  }
  const d = h(f),
    m = s.map((_) => h(_));
  let p = s[m.indexOf(d) - 1];
  if (typeof p > 'u' && r.cssMode) {
    let _;
    s.forEach((g, v) => {
      d >= g && (_ = v);
    }),
      typeof _ < 'u' && (p = s[_ > 0 ? _ - 1 : _]);
  }
  let y = 0;
  if (
    (typeof p < 'u' &&
      ((y = o.indexOf(p)),
      y < 0 && (y = t.activeIndex - 1),
      r.slidesPerView === 'auto' &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((y = y - t.slidesPerViewDynamic('previous', !0) + 1), (y = Math.max(y, 0)))),
    r.rewind && t.isBeginning)
  ) {
    const _ =
      t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1;
    return t.slideTo(_, n, e, i);
  } else if (r.loop && t.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        t.slideTo(y, n, e, i);
      }),
      !0
    );
  return t.slideTo(y, n, e, i);
}
function Yh(n, e, i) {
  n === void 0 && (n = this.params.speed), e === void 0 && (e = !0);
  const t = this;
  return t.slideTo(t.activeIndex, n, e, i);
}
function Xh(n, e, i, t) {
  n === void 0 && (n = this.params.speed), e === void 0 && (e = !0), t === void 0 && (t = 0.5);
  const r = this;
  let s = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / r.params.slidesPerGroup),
    l = r.rtlTranslate ? r.translate : -r.translate;
  if (l >= r.snapGrid[a]) {
    const c = r.snapGrid[a],
      u = r.snapGrid[a + 1];
    l - c > (u - c) * t && (s += r.params.slidesPerGroup);
  } else {
    const c = r.snapGrid[a - 1],
      u = r.snapGrid[a];
    l - c <= (u - c) * t && (s -= r.params.slidesPerGroup);
  }
  return (s = Math.max(s, 0)), (s = Math.min(s, r.slidesGrid.length - 1)), r.slideTo(s, n, e, i);
}
function jh() {
  const n = this,
    { params: e, slidesEl: i } = n,
    t = e.slidesPerView === 'auto' ? n.slidesPerViewDynamic() : e.slidesPerView;
  let r = n.clickedIndex,
    s;
  const o = n.isElement ? 'swiper-slide' : `.${e.slideClass}`;
  if (e.loop) {
    if (n.animating) return;
    (s = parseInt(n.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      e.centeredSlides
        ? r < n.loopedSlides - t / 2 || r > n.slides.length - n.loopedSlides + t / 2
          ? (n.loopFix(),
            (r = n.getSlideIndex(Dt(i, `${o}[data-swiper-slide-index="${s}"]`)[0])),
            ea(() => {
              n.slideTo(r);
            }))
          : n.slideTo(r)
        : r > n.slides.length - t
        ? (n.loopFix(),
          (r = n.getSlideIndex(Dt(i, `${o}[data-swiper-slide-index="${s}"]`)[0])),
          ea(() => {
            n.slideTo(r);
          }))
        : n.slideTo(r);
  } else n.slideTo(r);
}
var Uh = {
  slideTo: qh,
  slideToLoop: $h,
  slideNext: Hh,
  slidePrev: Gh,
  slideReset: Yh,
  slideToClosest: Xh,
  slideToClickedSlide: jh,
};
function Kh(n) {
  const e = this,
    { params: i, slidesEl: t } = e;
  if (!i.loop || (e.virtual && e.params.virtual.enabled)) return;
  const r = () => {
      Dt(t, `.${i.slideClass}, swiper-slide`).forEach((f, h) => {
        f.setAttribute('data-swiper-slide-index', h);
      });
    },
    s = e.grid && i.grid && i.grid.rows > 1,
    o = i.slidesPerGroup * (s ? i.grid.rows : 1),
    a = e.slides.length % o !== 0,
    l = s && e.slides.length % i.grid.rows !== 0,
    c = (u) => {
      for (let f = 0; f < u; f += 1) {
        const h = e.isElement ? Mn('swiper-slide', [i.slideBlankClass]) : Mn('div', [i.slideClass, i.slideBlankClass]);
        e.slidesEl.append(h);
      }
    };
  if (a) {
    if (i.loopAddBlankSlides) {
      const u = o - (e.slides.length % o);
      c(u), e.recalcSlides(), e.updateSlides();
    } else
      Cn(
        'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    r();
  } else if (l) {
    if (i.loopAddBlankSlides) {
      const u = i.grid.rows - (e.slides.length % i.grid.rows);
      c(u), e.recalcSlides(), e.updateSlides();
    } else
      Cn(
        'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
      );
    r();
  } else r();
  e.loopFix({ slideRealIndex: n, direction: i.centeredSlides ? void 0 : 'next' });
}
function Qh(n) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: t,
    setTranslate: r,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: a,
  } = n === void 0 ? {} : n;
  const l = this;
  if (!l.params.loop) return;
  l.emit('beforeLoopFix');
  const { slides: c, allowSlidePrev: u, allowSlideNext: f, slidesEl: h, params: d } = l,
    { centeredSlides: m } = d;
  if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && d.virtual.enabled)) {
    i &&
      (!d.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : d.centeredSlides && l.snapIndex < d.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = u),
      (l.allowSlideNext = f),
      l.emit('loopFix');
    return;
  }
  let p = d.slidesPerView;
  p === 'auto'
    ? (p = l.slidesPerViewDynamic())
    : ((p = Math.ceil(parseFloat(d.slidesPerView, 10))), m && p % 2 === 0 && (p = p + 1));
  const y = d.slidesPerGroupAuto ? p : d.slidesPerGroup;
  let _ = y;
  _ % y !== 0 && (_ += y - (_ % y)), (_ += d.loopAdditionalSlides), (l.loopedSlides = _);
  const g = l.grid && d.grid && d.grid.rows > 1;
  c.length < p + _
    ? Cn(
        'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
      )
    : g && d.grid.fill === 'row' && Cn('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  const v = [],
    w = [];
  let b = l.activeIndex;
  typeof s > 'u' ? (s = l.getSlideIndex(c.filter((k) => k.classList.contains(d.slideActiveClass))[0])) : (b = s);
  const x = t === 'next' || !t,
    E = t === 'prev' || !t;
  let M = 0,
    C = 0;
  const T = g ? Math.ceil(c.length / d.grid.rows) : c.length,
    O = (g ? c[s].column : s) + (m && typeof r > 'u' ? -p / 2 + 0.5 : 0);
  if (O < _) {
    M = Math.max(_ - O, y);
    for (let k = 0; k < _ - O; k += 1) {
      const L = k - Math.floor(k / T) * T;
      if (g) {
        const D = T - L - 1;
        for (let N = c.length - 1; N >= 0; N -= 1) c[N].column === D && v.push(N);
      } else v.push(T - L - 1);
    }
  } else if (O + p > T - _) {
    C = Math.max(O - (T - _ * 2), y);
    for (let k = 0; k < C; k += 1) {
      const L = k - Math.floor(k / T) * T;
      g
        ? c.forEach((D, N) => {
            D.column === L && w.push(N);
          })
        : w.push(L);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    E &&
      v.forEach((k) => {
        (c[k].swiperLoopMoveDOM = !0), h.prepend(c[k]), (c[k].swiperLoopMoveDOM = !1);
      }),
    x &&
      w.forEach((k) => {
        (c[k].swiperLoopMoveDOM = !0), h.append(c[k]), (c[k].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    d.slidesPerView === 'auto'
      ? l.updateSlides()
      : g &&
        ((v.length > 0 && E) || (w.length > 0 && x)) &&
        l.slides.forEach((k, L) => {
          l.grid.updateSlide(L, k, l.slides);
        }),
    d.watchSlidesProgress && l.updateSlidesOffset(),
    i)
  ) {
    if (v.length > 0 && E) {
      if (typeof e > 'u') {
        const k = l.slidesGrid[b],
          D = l.slidesGrid[b + M] - k;
        a
          ? l.setTranslate(l.translate - D)
          : (l.slideTo(b + M, 0, !1, !0),
            r &&
              ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - D),
              (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - D)));
      } else if (r) {
        const k = g ? v.length / d.grid.rows : v.length;
        l.slideTo(l.activeIndex + k, 0, !1, !0), (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (w.length > 0 && x)
      if (typeof e > 'u') {
        const k = l.slidesGrid[b],
          D = l.slidesGrid[b - C] - k;
        a
          ? l.setTranslate(l.translate - D)
          : (l.slideTo(b - C, 0, !1, !0),
            r &&
              ((l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - D),
              (l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - D)));
      } else {
        const k = g ? w.length / d.grid.rows : w.length;
        l.slideTo(l.activeIndex - k, 0, !1, !0);
      }
  }
  if (((l.allowSlidePrev = u), (l.allowSlideNext = f), l.controller && l.controller.control && !o)) {
    const k = { slideRealIndex: e, direction: t, setTranslate: r, activeSlideIndex: s, byController: !0 };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((L) => {
          !L.destroyed &&
            L.params.loop &&
            L.loopFix({ ...k, slideTo: L.params.slidesPerView === d.slidesPerView ? i : !1 });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...k,
          slideTo: l.controller.control.params.slidesPerView === d.slidesPerView ? i : !1,
        });
  }
  l.emit('loopFix');
}
function Zh() {
  const n = this,
    { params: e, slidesEl: i } = n;
  if (!e.loop || (n.virtual && n.params.virtual.enabled)) return;
  n.recalcSlides();
  const t = [];
  n.slides.forEach((r) => {
    const s = typeof r.swiperSlideIndex > 'u' ? r.getAttribute('data-swiper-slide-index') * 1 : r.swiperSlideIndex;
    t[s] = r;
  }),
    n.slides.forEach((r) => {
      r.removeAttribute('data-swiper-slide-index');
    }),
    t.forEach((r) => {
      i.append(r);
    }),
    n.recalcSlides(),
    n.slideTo(n.realIndex, 0);
}
var Jh = { loopCreate: Kh, loopFix: Qh, loopDestroy: Zh };
function ep(n) {
  const e = this;
  if (!e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return;
  const i = e.params.touchEventsTarget === 'container' ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (i.style.cursor = 'move'),
    (i.style.cursor = n ? 'grabbing' : 'grab'),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function tp() {
  const n = this;
  (n.params.watchOverflow && n.isLocked) ||
    n.params.cssMode ||
    (n.isElement && (n.__preventObserver__ = !0),
    (n[n.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
    n.isElement &&
      requestAnimationFrame(() => {
        n.__preventObserver__ = !1;
      }));
}
var ip = { setGrabCursor: ep, unsetGrabCursor: tp };
function rp(n, e) {
  e === void 0 && (e = this);
  function i(t) {
    if (!t || t === ci() || t === kt()) return null;
    t.assignedSlot && (t = t.assignedSlot);
    const r = t.closest(n);
    return !r && !t.getRootNode ? null : r || i(t.getRootNode().host);
  }
  return i(e);
}
function Qc(n, e, i) {
  const t = kt(),
    { params: r } = n,
    s = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold;
  return s && (i <= o || i >= t.innerWidth - o) ? (s === 'prevent' ? (e.preventDefault(), !0) : !1) : !0;
}
function sp(n) {
  const e = this,
    i = ci();
  let t = n;
  t.originalEvent && (t = t.originalEvent);
  const r = e.touchEventsData;
  if (t.type === 'pointerdown') {
    if (r.pointerId !== null && r.pointerId !== t.pointerId) return;
    r.pointerId = t.pointerId;
  } else t.type === 'touchstart' && t.targetTouches.length === 1 && (r.touchId = t.targetTouches[0].identifier);
  if (t.type === 'touchstart') {
    Qc(e, t, t.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: a } = e;
  if (!a || (!s.simulateTouch && t.pointerType === 'mouse') || (e.animating && s.preventInteractionOnTransition))
    return;
  !e.animating && s.cssMode && s.loop && e.loopFix();
  let l = t.target;
  if (
    (s.touchEventsTarget === 'wrapper' && !e.wrapperEl.contains(l)) ||
    ('which' in t && t.which === 3) ||
    ('button' in t && t.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== '',
    u = t.composedPath ? t.composedPath() : t.path;
  c && t.target && t.target.shadowRoot && u && (l = u[0]);
  const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    h = !!(t.target && t.target.shadowRoot);
  if (s.noSwiping && (h ? rp(f, l) : l.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
  (o.currentX = t.pageX), (o.currentY = t.pageY);
  const d = o.currentX,
    m = o.currentY;
  if (!Qc(e, t, d)) return;
  Object.assign(r, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
    (o.startX = d),
    (o.startY = m),
    (r.touchStartTime = Tn()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    s.threshold > 0 && (r.allowThresholdMove = !1);
  let p = !0;
  l.matches(r.focusableElements) && ((p = !1), l.nodeName === 'SELECT' && (r.isTouched = !1)),
    i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== l && i.activeElement.blur();
  const y = p && e.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || y) && !l.isContentEditable && t.preventDefault(),
    s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(),
    e.emit('touchStart', t);
}
function np(n) {
  const e = ci(),
    i = this,
    t = i.touchEventsData,
    { params: r, touches: s, rtlTranslate: o, enabled: a } = i;
  if (!a || (!r.simulateTouch && n.pointerType === 'mouse')) return;
  let l = n;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === 'pointermove' && (t.touchId !== null || l.pointerId !== t.pointerId))
  )
    return;
  let c;
  if (l.type === 'touchmove') {
    if (((c = [...l.changedTouches].filter((x) => x.identifier === t.touchId)[0]), !c || c.identifier !== t.touchId))
      return;
  } else c = l;
  if (!t.isTouched) {
    t.startMoving && t.isScrolling && i.emit('touchMoveOpposite', l);
    return;
  }
  const u = c.pageX,
    f = c.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = u), (s.startY = f);
    return;
  }
  if (!i.allowTouchMove) {
    l.target.matches(t.focusableElements) || (i.allowClick = !1),
      t.isTouched && (Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f }), (t.touchStartTime = Tn()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (i.isVertical()) {
      if ((f < s.startY && i.translate <= i.maxTranslate()) || (f > s.startY && i.translate >= i.minTranslate())) {
        (t.isTouched = !1), (t.isMoved = !1);
        return;
      }
    } else if ((u < s.startX && i.translate <= i.maxTranslate()) || (u > s.startX && i.translate >= i.minTranslate()))
      return;
  }
  if (e.activeElement && l.target === e.activeElement && l.target.matches(t.focusableElements)) {
    (t.isMoved = !0), (i.allowClick = !1);
    return;
  }
  t.allowTouchCallbacks && i.emit('touchMove', l),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = u),
    (s.currentY = f);
  const h = s.currentX - s.startX,
    d = s.currentY - s.startY;
  if (i.params.threshold && Math.sqrt(h ** 2 + d ** 2) < i.params.threshold) return;
  if (typeof t.isScrolling > 'u') {
    let x;
    (i.isHorizontal() && s.currentY === s.startY) || (i.isVertical() && s.currentX === s.startX)
      ? (t.isScrolling = !1)
      : h * h + d * d >= 25 &&
        ((x = (Math.atan2(Math.abs(d), Math.abs(h)) * 180) / Math.PI),
        (t.isScrolling = i.isHorizontal() ? x > r.touchAngle : 90 - x > r.touchAngle));
  }
  if (
    (t.isScrolling && i.emit('touchMoveOpposite', l),
    typeof t.startMoving > 'u' && (s.currentX !== s.startX || s.currentY !== s.startY) && (t.startMoving = !0),
    t.isScrolling)
  ) {
    t.isTouched = !1;
    return;
  }
  if (!t.startMoving) return;
  (i.allowClick = !1),
    !r.cssMode && l.cancelable && l.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && l.stopPropagation();
  let m = i.isHorizontal() ? h : d,
    p = i.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  r.oneWayMovement && ((m = Math.abs(m) * (o ? 1 : -1)), (p = Math.abs(p) * (o ? 1 : -1))),
    (s.diff = m),
    (m *= r.touchRatio),
    o && ((m = -m), (p = -p));
  const y = i.touchesDirection;
  (i.swipeDirection = m > 0 ? 'prev' : 'next'), (i.touchesDirection = p > 0 ? 'prev' : 'next');
  const _ = i.params.loop && !r.cssMode,
    g = (i.touchesDirection === 'next' && i.allowSlideNext) || (i.touchesDirection === 'prev' && i.allowSlidePrev);
  if (!t.isMoved) {
    if (
      (_ && g && i.loopFix({ direction: i.swipeDirection }),
      (t.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const x = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
      i.wrapperEl.dispatchEvent(x);
    }
    (t.allowMomentumBounce = !1),
      r.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
      i.emit('sliderFirstMove', l);
  }
  let v;
  if (
    (new Date().getTime(), t.isMoved && t.allowThresholdMove && y !== i.touchesDirection && _ && g && Math.abs(m) >= 1)
  ) {
    Object.assign(s, { startX: u, startY: f, currentX: u, currentY: f, startTranslate: t.currentTranslate }),
      (t.loopSwapReset = !0),
      (t.startTranslate = t.currentTranslate);
    return;
  }
  i.emit('sliderMove', l), (t.isMoved = !0), (t.currentTranslate = m + t.startTranslate);
  let w = !0,
    b = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (b = 0),
    m > 0
      ? (_ &&
          g &&
          !v &&
          t.allowThresholdMove &&
          t.currentTranslate >
            (r.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) &&
          i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        t.currentTranslate > i.minTranslate() &&
          ((w = !1),
          r.resistance &&
            (t.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + t.startTranslate + m) ** b)))
      : m < 0 &&
        (_ &&
          g &&
          !v &&
          t.allowThresholdMove &&
          t.currentTranslate <
            (r.centeredSlides
              ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1]
              : i.maxTranslate()) &&
          i.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (r.slidesPerView === 'auto' ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        t.currentTranslate < i.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (t.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - t.startTranslate - m) ** b))),
    w && (l.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === 'next' &&
      t.currentTranslate < t.startTranslate &&
      (t.currentTranslate = t.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === 'prev' &&
      t.currentTranslate > t.startTranslate &&
      (t.currentTranslate = t.startTranslate),
    !i.allowSlidePrev && !i.allowSlideNext && (t.currentTranslate = t.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(m) > r.threshold || t.allowThresholdMove) {
      if (!t.allowThresholdMove) {
        (t.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (t.currentTranslate = t.startTranslate),
          (s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
        return;
      }
    } else {
      t.currentTranslate = t.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && i.freeMode) || r.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(t.currentTranslate),
    i.setTranslate(t.currentTranslate));
}
function op(n) {
  const e = this,
    i = e.touchEventsData;
  let t = n;
  t.originalEvent && (t = t.originalEvent);
  let r;
  if (t.type === 'touchend' || t.type === 'touchcancel') {
    if (((r = [...t.changedTouches].filter((b) => b.identifier === i.touchId)[0]), !r || r.identifier !== i.touchId))
      return;
  } else {
    if (i.touchId !== null || t.pointerId !== i.pointerId) return;
    r = t;
  }
  if (
    ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(t.type) &&
    !(['pointercancel', 'contextmenu'].includes(t.type) && (e.browser.isSafari || e.browser.isWebView))
  )
    return;
  (i.pointerId = null), (i.touchId = null);
  const { params: o, touches: a, rtlTranslate: l, slidesGrid: c, enabled: u } = e;
  if (!u || (!o.simulateTouch && t.pointerType === 'mouse')) return;
  if ((i.allowTouchCallbacks && e.emit('touchEnd', t), (i.allowTouchCallbacks = !1), !i.isTouched)) {
    i.isMoved && o.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  o.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const f = Tn(),
    h = f - i.touchStartTime;
  if (e.allowClick) {
    const b = t.path || (t.composedPath && t.composedPath());
    e.updateClickedSlide((b && b[0]) || t.target, b),
      e.emit('tap click', t),
      h < 300 && f - i.lastClickTime < 300 && e.emit('doubleTap doubleClick', t);
  }
  if (
    ((i.lastClickTime = Tn()),
    ea(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      (a.diff === 0 && !i.loopSwapReset) ||
      (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let d;
  if ((o.followFinger ? (d = l ? e.translate : -e.translate) : (d = -i.currentTranslate), o.cssMode)) return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  const m = d >= -e.maxTranslate() && !e.params.loop;
  let p = 0,
    y = e.slidesSizesGrid[0];
  for (let b = 0; b < c.length; b += b < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const x = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof c[b + x] < 'u'
      ? (m || (d >= c[b] && d < c[b + x])) && ((p = b), (y = c[b + x] - c[b]))
      : (m || d >= c[b]) && ((p = b), (y = c[c.length - 1] - c[c.length - 2]));
  }
  let _ = null,
    g = null;
  o.rewind &&
    (e.isBeginning
      ? (g = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1)
      : e.isEnd && (_ = 0));
  const v = (d - c[p]) / y,
    w = p < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (h > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === 'next' && (v >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? _ : p + w) : e.slideTo(p)),
      e.swipeDirection === 'prev' &&
        (v > 1 - o.longSwipesRatio
          ? e.slideTo(p + w)
          : g !== null && v < 0 && Math.abs(v) > o.longSwipesRatio
          ? e.slideTo(g)
          : e.slideTo(p));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (t.target === e.navigation.nextEl || t.target === e.navigation.prevEl)
      ? t.target === e.navigation.nextEl
        ? e.slideTo(p + w)
        : e.slideTo(p)
      : (e.swipeDirection === 'next' && e.slideTo(_ !== null ? _ : p + w),
        e.swipeDirection === 'prev' && e.slideTo(g !== null ? g : p));
  }
}
function Zc() {
  const n = this,
    { params: e, el: i } = n;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && n.setBreakpoint();
  const { allowSlideNext: t, allowSlidePrev: r, snapGrid: s } = n,
    o = n.virtual && n.params.virtual.enabled;
  (n.allowSlideNext = !0), (n.allowSlidePrev = !0), n.updateSize(), n.updateSlides(), n.updateSlidesClasses();
  const a = o && e.loop;
  (e.slidesPerView === 'auto' || e.slidesPerView > 1) && n.isEnd && !n.isBeginning && !n.params.centeredSlides && !a
    ? n.slideTo(n.slides.length - 1, 0, !1, !0)
    : n.params.loop && !o
    ? n.slideToLoop(n.realIndex, 0, !1, !0)
    : n.slideTo(n.activeIndex, 0, !1, !0),
    n.autoplay &&
      n.autoplay.running &&
      n.autoplay.paused &&
      (clearTimeout(n.autoplay.resizeTimeout),
      (n.autoplay.resizeTimeout = setTimeout(() => {
        n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.resume();
      }, 500))),
    (n.allowSlidePrev = r),
    (n.allowSlideNext = t),
    n.params.watchOverflow && s !== n.snapGrid && n.checkOverflow();
}
function ap(n) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && n.preventDefault(),
      e.params.preventClicksPropagation && e.animating && (n.stopPropagation(), n.stopImmediatePropagation())));
}
function lp() {
  const n = this,
    { wrapperEl: e, rtlTranslate: i, enabled: t } = n;
  if (!t) return;
  (n.previousTranslate = n.translate),
    n.isHorizontal() ? (n.translate = -e.scrollLeft) : (n.translate = -e.scrollTop),
    n.translate === 0 && (n.translate = 0),
    n.updateActiveIndex(),
    n.updateSlidesClasses();
  let r;
  const s = n.maxTranslate() - n.minTranslate();
  s === 0 ? (r = 0) : (r = (n.translate - n.minTranslate()) / s),
    r !== n.progress && n.updateProgress(i ? -n.translate : n.translate),
    n.emit('setTranslate', n.translate, !1);
}
function cp(n) {
  const e = this;
  Pn(e, n.target), !(e.params.cssMode || (e.params.slidesPerView !== 'auto' && !e.params.autoHeight)) && e.update();
}
function up() {
  const n = this;
  n.documentTouchHandlerProceeded ||
    ((n.documentTouchHandlerProceeded = !0), n.params.touchReleaseOnEdges && (n.el.style.touchAction = 'auto'));
}
const Jc = (n, e) => {
  const i = ci(),
    { params: t, el: r, wrapperEl: s, device: o } = n,
    a = !!t.nested,
    l = e === 'on' ? 'addEventListener' : 'removeEventListener',
    c = e;
  i[l]('touchstart', n.onDocumentTouchStart, { passive: !1, capture: a }),
    r[l]('touchstart', n.onTouchStart, { passive: !1 }),
    r[l]('pointerdown', n.onTouchStart, { passive: !1 }),
    i[l]('touchmove', n.onTouchMove, { passive: !1, capture: a }),
    i[l]('pointermove', n.onTouchMove, { passive: !1, capture: a }),
    i[l]('touchend', n.onTouchEnd, { passive: !0 }),
    i[l]('pointerup', n.onTouchEnd, { passive: !0 }),
    i[l]('pointercancel', n.onTouchEnd, { passive: !0 }),
    i[l]('touchcancel', n.onTouchEnd, { passive: !0 }),
    i[l]('pointerout', n.onTouchEnd, { passive: !0 }),
    i[l]('pointerleave', n.onTouchEnd, { passive: !0 }),
    i[l]('contextmenu', n.onTouchEnd, { passive: !0 }),
    (t.preventClicks || t.preventClicksPropagation) && r[l]('click', n.onClick, !0),
    t.cssMode && s[l]('scroll', n.onScroll),
    t.updateOnWindowResize
      ? n[c](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', Zc, !0)
      : n[c]('observerUpdate', Zc, !0),
    r[l]('load', n.onLoad, { capture: !0 });
};
function dp() {
  const n = this,
    { params: e } = n;
  (n.onTouchStart = sp.bind(n)),
    (n.onTouchMove = np.bind(n)),
    (n.onTouchEnd = op.bind(n)),
    (n.onDocumentTouchStart = up.bind(n)),
    e.cssMode && (n.onScroll = lp.bind(n)),
    (n.onClick = ap.bind(n)),
    (n.onLoad = cp.bind(n)),
    Jc(n, 'on');
}
function fp() {
  Jc(this, 'off');
}
var hp = { attachEvents: dp, detachEvents: fp };
const eu = (n, e) => n.grid && e.grid && e.grid.rows > 1;
function pp() {
  const n = this,
    { realIndex: e, initialized: i, params: t, el: r } = n,
    s = t.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = n.getBreakpoint(s, n.params.breakpointsBase, n.el);
  if (!o || n.currentBreakpoint === o) return;
  const l = (o in s ? s[o] : void 0) || n.originalParams,
    c = eu(n, t),
    u = eu(n, l),
    f = t.enabled;
  c && !u
    ? (r.classList.remove(`${t.containerModifierClass}grid`, `${t.containerModifierClass}grid-column`),
      n.emitContainerClasses())
    : !c &&
      u &&
      (r.classList.add(`${t.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === 'column') || (!l.grid.fill && t.grid.fill === 'column')) &&
        r.classList.add(`${t.containerModifierClass}grid-column`),
      n.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach((_) => {
      if (typeof l[_] > 'u') return;
      const g = t[_] && t[_].enabled,
        v = l[_] && l[_].enabled;
      g && !v && n[_].disable(), !g && v && n[_].enable();
    });
  const h = l.direction && l.direction !== t.direction,
    d = t.loop && (l.slidesPerView !== t.slidesPerView || h),
    m = t.loop;
  h && i && n.changeDirection(), Lt(n.params, l);
  const p = n.params.enabled,
    y = n.params.loop;
  Object.assign(n, {
    allowTouchMove: n.params.allowTouchMove,
    allowSlideNext: n.params.allowSlideNext,
    allowSlidePrev: n.params.allowSlidePrev,
  }),
    f && !p ? n.disable() : !f && p && n.enable(),
    (n.currentBreakpoint = o),
    n.emit('_beforeBreakpoint', l),
    i &&
      (d
        ? (n.loopDestroy(), n.loopCreate(e), n.updateSlides())
        : !m && y
        ? (n.loopCreate(e), n.updateSlides())
        : m && !y && n.loopDestroy()),
    n.emit('breakpoint', l);
}
function mp(n, e, i) {
  if ((e === void 0 && (e = 'window'), !n || (e === 'container' && !i))) return;
  let t = !1;
  const r = kt(),
    s = e === 'window' ? r.innerHeight : i.clientHeight,
    o = Object.keys(n).map((a) => {
      if (typeof a == 'string' && a.indexOf('@') === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: c } = o[a];
    e === 'window' ? r.matchMedia(`(min-width: ${c}px)`).matches && (t = l) : c <= i.clientWidth && (t = l);
  }
  return t || 'max';
}
var gp = { setBreakpoint: pp, getBreakpoint: mp };
function vp(n, e) {
  const i = [];
  return (
    n.forEach((t) => {
      typeof t == 'object'
        ? Object.keys(t).forEach((r) => {
            t[r] && i.push(e + r);
          })
        : typeof t == 'string' && i.push(e + t);
    }),
    i
  );
}
function _p() {
  const n = this,
    { classNames: e, params: i, rtl: t, el: r, device: s } = n,
    o = vp(
      [
        'initialized',
        i.direction,
        { 'free-mode': n.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: t },
        { grid: i.grid && i.grid.rows > 1 },
        { 'grid-column': i.grid && i.grid.rows > 1 && i.grid.fill === 'column' },
        { android: s.android },
        { ios: s.ios },
        { 'css-mode': i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { 'watch-progress': i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  e.push(...o), r.classList.add(...e), n.emitContainerClasses();
}
function yp() {
  const n = this,
    { el: e, classNames: i } = n;
  e.classList.remove(...i), n.emitContainerClasses();
}
var wp = { addClasses: _p, removeClasses: yp };
function bp() {
  const n = this,
    { isLocked: e, params: i } = n,
    { slidesOffsetBefore: t } = i;
  if (t) {
    const r = n.slides.length - 1,
      s = n.slidesGrid[r] + n.slidesSizesGrid[r] + t * 2;
    n.isLocked = n.size > s;
  } else n.isLocked = n.snapGrid.length === 1;
  i.allowSlideNext === !0 && (n.allowSlideNext = !n.isLocked),
    i.allowSlidePrev === !0 && (n.allowSlidePrev = !n.isLocked),
    e && e !== n.isLocked && (n.isEnd = !1),
    e !== n.isLocked && n.emit(n.isLocked ? 'lock' : 'unlock');
}
var xp = { checkOverflow: bp },
  tu = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: 'swiper',
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
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
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
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
    threshold: 5,
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
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-blank',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideFullyVisibleClass: 'swiper-slide-fully-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Sp(n, e) {
  return function (t) {
    t === void 0 && (t = {});
    const r = Object.keys(t)[0],
      s = t[r];
    if (typeof s != 'object' || s === null) {
      Lt(e, t);
      return;
    }
    if (
      (n[r] === !0 && (n[r] = { enabled: !0 }),
      r === 'navigation' && n[r] && n[r].enabled && !n[r].prevEl && !n[r].nextEl && (n[r].auto = !0),
      ['pagination', 'scrollbar'].indexOf(r) >= 0 && n[r] && n[r].enabled && !n[r].el && (n[r].auto = !0),
      !(r in n && 'enabled' in s))
    ) {
      Lt(e, t);
      return;
    }
    typeof n[r] == 'object' && !('enabled' in n[r]) && (n[r].enabled = !0), n[r] || (n[r] = { enabled: !1 }), Lt(e, t);
  };
}
const aa = {
    eventsEmitter: wh,
    update: kh,
    translate: Nh,
    transition: Vh,
    slide: Uh,
    loop: Jh,
    grabCursor: ip,
    events: hp,
    breakpoints: gp,
    checkOverflow: xp,
    classes: wp,
  },
  la = {};
class lt {
  constructor() {
    let e, i;
    for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++) r[s] = arguments[s];
    r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === 'Object'
      ? (i = r[0])
      : ([e, i] = r),
      i || (i = {}),
      (i = Lt({}, i)),
      e && !i.el && (i.el = e);
    const o = ci();
    if (i.el && typeof i.el == 'string' && o.querySelectorAll(i.el).length > 1) {
      const u = [];
      return (
        o.querySelectorAll(i.el).forEach((f) => {
          const h = Lt({}, i, { el: f });
          u.push(new lt(h));
        }),
        u
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Uc()),
      (a.device = mh({ userAgent: i.userAgent })),
      (a.browser = vh()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      i.modules && Array.isArray(i.modules) && a.modules.push(...i.modules);
    const l = {};
    a.modules.forEach((u) => {
      u({
        params: i,
        swiper: a,
        extendParams: Sp(i, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const c = Lt({}, tu, l);
    return (
      (a.params = Lt({}, c, la, i)),
      (a.originalParams = Lt({}, a.params)),
      (a.passedParams = Lt({}, i)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((u) => {
          a.on(u, a.params.on[u]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === 'horizontal';
        },
        isVertical() {
          return a.params.direction === 'vertical';
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
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit('_swiper'),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: i, params: t } = this,
      r = Dt(i, `.${t.slideClass}, swiper-slide`),
      s = On(r[0]);
    return On(e) - s;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((i) => i.getAttribute('data-swiper-slide-index') * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this,
      { slidesEl: i, params: t } = e;
    e.slides = Dt(i, `.${t.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
  }
  disable() {
    const e = this;
    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
  }
  setProgress(e, i) {
    const t = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = t.minTranslate(),
      o = (t.maxTranslate() - r) * e + r;
    t.translateTo(o, typeof i > 'u' ? 0 : i), t.updateActiveIndex(), t.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className
      .split(' ')
      .filter((t) => t.indexOf('swiper') === 0 || t.indexOf(e.params.containerModifierClass) === 0);
    e.emit('_containerClasses', i.join(' '));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed
      ? ''
      : e.className
          .split(' ')
          .filter((t) => t.indexOf('swiper-slide') === 0 || t.indexOf(i.params.slideClass) === 0)
          .join(' ');
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((t) => {
      const r = e.getSlideClasses(t);
      i.push({ slideEl: t, classNames: r }), e.emit('_slideClass', t, r);
    }),
      e.emit('_slideClasses', i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = 'current'), i === void 0 && (i = !1);
    const t = this,
      { params: r, slides: s, slidesGrid: o, slidesSizesGrid: a, size: l, activeIndex: c } = t;
    let u = 1;
    if (typeof r.slidesPerView == 'number') return r.slidesPerView;
    if (r.centeredSlides) {
      let f = s[c] ? s[c].swiperSlideSize : 0,
        h;
      for (let d = c + 1; d < s.length; d += 1)
        s[d] && !h && ((f += s[d].swiperSlideSize), (u += 1), f > l && (h = !0));
      for (let d = c - 1; d >= 0; d -= 1) s[d] && !h && ((f += s[d].swiperSlideSize), (u += 1), f > l && (h = !0));
    } else if (e === 'current')
      for (let f = c + 1; f < s.length; f += 1) (i ? o[f] + a[f] - o[c] < l : o[f] - o[c] < l) && (u += 1);
    else for (let f = c - 1; f >= 0; f -= 1) o[c] - o[f] < l && (u += 1);
    return u;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: i, params: t } = e;
    t.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && Pn(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let s;
    if (t.freeMode && t.freeMode.enabled && !t.cssMode) r(), t.autoHeight && e.updateAutoHeight();
    else {
      if ((t.slidesPerView === 'auto' || t.slidesPerView > 1) && e.isEnd && !t.centeredSlides) {
        const o = e.virtual && t.virtual.enabled ? e.virtual.slides : e.slides;
        s = e.slideTo(o.length - 1, 0, !1, !0);
      } else s = e.slideTo(e.activeIndex, 0, !1, !0);
      s || r();
    }
    t.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit('update');
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const t = this,
      r = t.params.direction;
    return (
      e || (e = r === 'horizontal' ? 'vertical' : 'horizontal'),
      e === r ||
        (e !== 'horizontal' && e !== 'vertical') ||
        (t.el.classList.remove(`${t.params.containerModifierClass}${r}`),
        t.el.classList.add(`${t.params.containerModifierClass}${e}`),
        t.emitContainerClasses(),
        (t.params.direction = e),
        t.slides.forEach((s) => {
          e === 'vertical' ? (s.style.width = '') : (s.style.height = '');
        }),
        t.emit('changeDirection'),
        i && t.update()),
      t
    );
  }
  changeLanguageDirection(e) {
    const i = this;
    (i.rtl && e === 'rtl') ||
      (!i.rtl && e === 'ltr') ||
      ((i.rtl = e === 'rtl'),
      (i.rtlTranslate = i.params.direction === 'horizontal' && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'rtl'))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), (i.el.dir = 'ltr')),
      i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let t = e || i.params.el;
    if ((typeof t == 'string' && (t = document.querySelector(t)), !t)) return !1;
    (t.swiper = i),
      t.parentNode && t.parentNode.host && t.parentNode.host.nodeName === 'SWIPER-CONTAINER' && (i.isElement = !0);
    const r = () => `.${(i.params.wrapperClass || '').trim().split(' ').join('.')}`;
    let o = (() =>
      t && t.shadowRoot && t.shadowRoot.querySelector ? t.shadowRoot.querySelector(r()) : Dt(t, r())[0])();
    return (
      !o &&
        i.params.createElements &&
        ((o = Mn('div', i.params.wrapperClass)),
        t.append(o),
        Dt(t, `.${i.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(i, {
        el: t,
        wrapperEl: o,
        slidesEl: i.isElement && !t.parentNode.host.slideSlots ? t.parentNode.host : o,
        hostEl: i.isElement ? t.parentNode.host : t,
        mounted: !0,
        rtl: t.dir.toLowerCase() === 'rtl' || Fi(t, 'direction') === 'rtl',
        rtlTranslate:
          i.params.direction === 'horizontal' && (t.dir.toLowerCase() === 'rtl' || Fi(t, 'direction') === 'rtl'),
        wrongRTL: Fi(o, 'display') === '-webkit-box',
      }),
      !0
    );
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1) return i;
    i.emit('beforeInit'),
      i.params.breakpoints && i.setBreakpoint(),
      i.addClasses(),
      i.updateSize(),
      i.updateSlides(),
      i.params.watchOverflow && i.checkOverflow(),
      i.params.grabCursor && i.enabled && i.setGrabCursor(),
      i.params.loop && i.virtual && i.params.virtual.enabled
        ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0)
        : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
      i.params.loop && i.loopCreate(),
      i.attachEvents();
    const r = [...i.el.querySelectorAll('[loading="lazy"]')];
    return (
      i.isElement && r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((s) => {
        s.complete
          ? Pn(i, s)
          : s.addEventListener('load', (o) => {
              Pn(i, o.target);
            });
      }),
      oa(i),
      (i.initialized = !0),
      oa(i),
      i.emit('init'),
      i.emit('afterInit'),
      i
    );
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const t = this,
      { params: r, el: s, wrapperEl: o, slides: a } = t;
    return (
      typeof t.params > 'u' ||
        t.destroyed ||
        (t.emit('beforeDestroy'),
        (t.initialized = !1),
        t.detachEvents(),
        r.loop && t.loopDestroy(),
        i &&
          (t.removeClasses(),
          s.removeAttribute('style'),
          o.removeAttribute('style'),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                l.removeAttribute('style'),
                l.removeAttribute('data-swiper-slide-index');
            })),
        t.emit('destroy'),
        Object.keys(t.eventsListeners).forEach((l) => {
          t.off(l);
        }),
        e !== !1 && ((t.el.swiper = null), ah(t)),
        (t.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Lt(la, e);
  }
  static get extendedDefaults() {
    return la;
  }
  static get defaults() {
    return tu;
  }
  static installModule(e) {
    lt.prototype.__modules__ || (lt.prototype.__modules__ = []);
    const i = lt.prototype.__modules__;
    typeof e == 'function' && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => lt.installModule(i)), lt) : (lt.installModule(e), lt);
  }
}
Object.keys(aa).forEach((n) => {
  Object.keys(aa[n]).forEach((e) => {
    lt.prototype[e] = aa[n][e];
  });
}),
  lt.use([_h, yh]);
function Tp(n, e, i, t) {
  return (
    n.params.createElements &&
      Object.keys(t).forEach((r) => {
        if (!i[r] && i.auto === !0) {
          let s = Dt(n.el, `.${t[r]}`)[0];
          s || ((s = Mn('div', t[r])), (s.className = t[r]), n.el.append(s)), (i[r] = s), (e[r] = s);
        }
      }),
    i
  );
}
function Cs(n) {
  return (
    n === void 0 && (n = ''),
    `.${n
      .trim()
      .replace(/([\.:!+\/])/g, '\\$1')
      .replace(/ /g, '.')}`
  );
}
function Ep(n) {
  let { swiper: e, extendParams: i, on: t, emit: r } = n;
  const s = 'swiper-pagination';
  i({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let o,
    a = 0;
  const l = (g) => (Array.isArray(g) ? g : [g]).filter((v) => !!v);
  function c() {
    return (
      !e.params.pagination.el || !e.pagination.el || (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function u(g, v) {
    const { bulletActiveClass: w } = e.params.pagination;
    g &&
      ((g = g[`${v === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      g &&
        (g.classList.add(`${w}-${v}`),
        (g = g[`${v === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        g && g.classList.add(`${w}-${v}-${v}`)));
  }
  function f(g) {
    const v = g.target.closest(Cs(e.params.pagination.bulletClass));
    if (!v) return;
    g.preventDefault();
    const w = On(v) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === w) return;
      e.slideToLoop(w);
    } else e.slideTo(w);
  }
  function h() {
    const g = e.rtl,
      v = e.params.pagination;
    if (c()) return;
    let w = e.pagination.el;
    w = l(w);
    let b, x;
    const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      M = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((x = e.previousRealIndex || 0),
          (b = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex))
        : typeof e.snapIndex < 'u'
        ? ((b = e.snapIndex), (x = e.previousSnapIndex))
        : ((x = e.previousIndex || 0), (b = e.activeIndex || 0)),
      v.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
    ) {
      const C = e.pagination.bullets;
      let T, A, O;
      if (
        (v.dynamicBullets &&
          ((o = ta(C[0], e.isHorizontal() ? 'width' : 'height', !0)),
          w.forEach((k) => {
            k.style[e.isHorizontal() ? 'width' : 'height'] = `${o * (v.dynamicMainBullets + 4)}px`;
          }),
          v.dynamicMainBullets > 1 &&
            x !== void 0 &&
            ((a += b - (x || 0)), a > v.dynamicMainBullets - 1 ? (a = v.dynamicMainBullets - 1) : a < 0 && (a = 0)),
          (T = Math.max(b - a, 0)),
          (A = T + (Math.min(C.length, v.dynamicMainBullets) - 1)),
          (O = (A + T) / 2)),
        C.forEach((k) => {
          const L = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((D) => `${v.bulletActiveClass}${D}`),
          ]
            .map((D) => (typeof D == 'string' && D.includes(' ') ? D.split(' ') : D))
            .flat();
          k.classList.remove(...L);
        }),
        w.length > 1)
      )
        C.forEach((k) => {
          const L = On(k);
          L === b
            ? k.classList.add(...v.bulletActiveClass.split(' '))
            : e.isElement && k.setAttribute('part', 'bullet'),
            v.dynamicBullets &&
              (L >= T && L <= A && k.classList.add(...`${v.bulletActiveClass}-main`.split(' ')),
              L === T && u(k, 'prev'),
              L === A && u(k, 'next'));
        });
      else {
        const k = C[b];
        if (
          (k && k.classList.add(...v.bulletActiveClass.split(' ')),
          e.isElement &&
            C.forEach((L, D) => {
              L.setAttribute('part', D === b ? 'bullet-active' : 'bullet');
            }),
          v.dynamicBullets)
        ) {
          const L = C[T],
            D = C[A];
          for (let N = T; N <= A; N += 1) C[N] && C[N].classList.add(...`${v.bulletActiveClass}-main`.split(' '));
          u(L, 'prev'), u(D, 'next');
        }
      }
      if (v.dynamicBullets) {
        const k = Math.min(C.length, v.dynamicMainBullets + 4),
          L = (o * k - o) / 2 - O * o,
          D = g ? 'right' : 'left';
        C.forEach((N) => {
          N.style[e.isHorizontal() ? D : 'top'] = `${L}px`;
        });
      }
    }
    w.forEach((C, T) => {
      if (
        (v.type === 'fraction' &&
          (C.querySelectorAll(Cs(v.currentClass)).forEach((A) => {
            A.textContent = v.formatFractionCurrent(b + 1);
          }),
          C.querySelectorAll(Cs(v.totalClass)).forEach((A) => {
            A.textContent = v.formatFractionTotal(M);
          })),
        v.type === 'progressbar')
      ) {
        let A;
        v.progressbarOpposite
          ? (A = e.isHorizontal() ? 'vertical' : 'horizontal')
          : (A = e.isHorizontal() ? 'horizontal' : 'vertical');
        const O = (b + 1) / M;
        let k = 1,
          L = 1;
        A === 'horizontal' ? (k = O) : (L = O),
          C.querySelectorAll(Cs(v.progressbarFillClass)).forEach((D) => {
            (D.style.transform = `translate3d(0,0,0) scaleX(${k}) scaleY(${L})`),
              (D.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      v.type === 'custom' && v.renderCustom
        ? ((C.innerHTML = v.renderCustom(e, b + 1, M)), T === 0 && r('paginationRender', C))
        : (T === 0 && r('paginationRender', C), r('paginationUpdate', C)),
        e.params.watchOverflow && e.enabled && C.classList[e.isLocked ? 'add' : 'remove'](v.lockClass);
    });
  }
  function d() {
    const g = e.params.pagination;
    if (c()) return;
    const v =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
        ? e.slides.length / Math.ceil(e.params.grid.rows)
        : e.slides.length;
    let w = e.pagination.el;
    w = l(w);
    let b = '';
    if (g.type === 'bullets') {
      let x = e.params.loop ? Math.ceil(v / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && x > v && (x = v);
      for (let E = 0; E < x; E += 1)
        g.renderBullet
          ? (b += g.renderBullet.call(e, E, g.bulletClass))
          : (b += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ''} class="${g.bulletClass}"></${
              g.bulletElement
            }>`);
    }
    g.type === 'fraction' &&
      (g.renderFraction
        ? (b = g.renderFraction.call(e, g.currentClass, g.totalClass))
        : (b = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`)),
      g.type === 'progressbar' &&
        (g.renderProgressbar
          ? (b = g.renderProgressbar.call(e, g.progressbarFillClass))
          : (b = `<span class="${g.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      w.forEach((x) => {
        g.type !== 'custom' && (x.innerHTML = b || ''),
          g.type === 'bullets' && e.pagination.bullets.push(...x.querySelectorAll(Cs(g.bulletClass)));
      }),
      g.type !== 'custom' && r('paginationRender', w[0]);
  }
  function m() {
    e.params.pagination = Tp(e, e.originalParams.pagination, e.params.pagination, { el: 'swiper-pagination' });
    const g = e.params.pagination;
    if (!g.el) return;
    let v;
    typeof g.el == 'string' && e.isElement && (v = e.el.querySelector(g.el)),
      !v && typeof g.el == 'string' && (v = [...document.querySelectorAll(g.el)]),
      v || (v = g.el),
      !(!v || v.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof g.el == 'string' &&
          Array.isArray(v) &&
          v.length > 1 &&
          ((v = [...e.el.querySelectorAll(g.el)]),
          v.length > 1 && (v = v.filter((w) => jc(w, '.swiper')[0] === e.el)[0])),
        Array.isArray(v) && v.length === 1 && (v = v[0]),
        Object.assign(e.pagination, { el: v }),
        (v = l(v)),
        v.forEach((w) => {
          g.type === 'bullets' && g.clickable && w.classList.add(...(g.clickableClass || '').split(' ')),
            w.classList.add(g.modifierClass + g.type),
            w.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass),
            g.type === 'bullets' &&
              g.dynamicBullets &&
              (w.classList.add(`${g.modifierClass}${g.type}-dynamic`),
              (a = 0),
              g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)),
            g.type === 'progressbar' && g.progressbarOpposite && w.classList.add(g.progressbarOppositeClass),
            g.clickable && w.addEventListener('click', f),
            e.enabled || w.classList.add(g.lockClass);
        }));
  }
  function p() {
    const g = e.params.pagination;
    if (c()) return;
    let v = e.pagination.el;
    v &&
      ((v = l(v)),
      v.forEach((w) => {
        w.classList.remove(g.hiddenClass),
          w.classList.remove(g.modifierClass + g.type),
          w.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass),
          g.clickable &&
            (w.classList.remove(...(g.clickableClass || '').split(' ')), w.removeEventListener('click', f));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((w) => w.classList.remove(...g.bulletActiveClass.split(' ')));
  }
  t('changeDirection', () => {
    if (!e.pagination || !e.pagination.el) return;
    const g = e.params.pagination;
    let { el: v } = e.pagination;
    (v = l(v)),
      v.forEach((w) => {
        w.classList.remove(g.horizontalClass, g.verticalClass),
          w.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
      });
  }),
    t('init', () => {
      e.params.pagination.enabled === !1 ? _() : (m(), d(), h());
    }),
    t('activeIndexChange', () => {
      typeof e.snapIndex > 'u' && h();
    }),
    t('snapIndexChange', () => {
      h();
    }),
    t('snapGridLengthChange', () => {
      d(), h();
    }),
    t('destroy', () => {
      p();
    }),
    t('enable disable', () => {
      let { el: g } = e.pagination;
      g && ((g = l(g)), g.forEach((v) => v.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)));
    }),
    t('lock unlock', () => {
      h();
    }),
    t('click', (g, v) => {
      const w = v.target,
        b = l(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        b &&
        b.length > 0 &&
        !w.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && w === e.navigation.nextEl) || (e.navigation.prevEl && w === e.navigation.prevEl))
        )
          return;
        const x = b[0].classList.contains(e.params.pagination.hiddenClass);
        r(x === !0 ? 'paginationShow' : 'paginationHide'),
          b.forEach((E) => E.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const y = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: g } = e.pagination;
      g && ((g = l(g)), g.forEach((v) => v.classList.remove(e.params.pagination.paginationDisabledClass))),
        m(),
        d(),
        h();
    },
    _ = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: g } = e.pagination;
      g && ((g = l(g)), g.forEach((v) => v.classList.add(e.params.pagination.paginationDisabledClass))), p();
    };
  Object.assign(e.pagination, { enable: y, disable: _, render: d, update: h, init: m, destroy: p });
}
function iu(n) {
  let { swiper: e, extendParams: i, on: t } = n;
  i({ parallax: { enabled: !1 } });
  const r =
      '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
    s = (l, c) => {
      const { rtl: u } = e,
        f = u ? -1 : 1,
        h = l.getAttribute('data-swiper-parallax') || '0';
      let d = l.getAttribute('data-swiper-parallax-x'),
        m = l.getAttribute('data-swiper-parallax-y');
      const p = l.getAttribute('data-swiper-parallax-scale'),
        y = l.getAttribute('data-swiper-parallax-opacity'),
        _ = l.getAttribute('data-swiper-parallax-rotate');
      if (
        (d || m ? ((d = d || '0'), (m = m || '0')) : e.isHorizontal() ? ((d = h), (m = '0')) : ((m = h), (d = '0')),
        d.indexOf('%') >= 0 ? (d = `${parseInt(d, 10) * c * f}%`) : (d = `${d * c * f}px`),
        m.indexOf('%') >= 0 ? (m = `${parseInt(m, 10) * c}%`) : (m = `${m * c}px`),
        typeof y < 'u' && y !== null)
      ) {
        const v = y - (y - 1) * (1 - Math.abs(c));
        l.style.opacity = v;
      }
      let g = `translate3d(${d}, ${m}, 0px)`;
      if (typeof p < 'u' && p !== null) {
        const v = p - (p - 1) * (1 - Math.abs(c));
        g += ` scale(${v})`;
      }
      if (_ && typeof _ < 'u' && _ !== null) {
        const v = _ * c * -1;
        g += ` rotate(${v}deg)`;
      }
      l.style.transform = g;
    },
    o = () => {
      const { el: l, slides: c, progress: u, snapGrid: f, isElement: h } = e,
        d = Dt(l, r);
      e.isElement && d.push(...Dt(e.hostEl, r)),
        d.forEach((m) => {
          s(m, u);
        }),
        c.forEach((m, p) => {
          let y = m.progress;
          e.params.slidesPerGroup > 1 &&
            e.params.slidesPerView !== 'auto' &&
            (y += Math.ceil(p / 2) - u * (f.length - 1)),
            (y = Math.min(Math.max(y, -1), 1)),
            m.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((_) => {
              s(_, y);
            });
        });
    },
    a = function (l) {
      l === void 0 && (l = e.params.speed);
      const { el: c, hostEl: u } = e,
        f = [...c.querySelectorAll(r)];
      e.isElement && f.push(...u.querySelectorAll(r)),
        f.forEach((h) => {
          let d = parseInt(h.getAttribute('data-swiper-parallax-duration'), 10) || l;
          l === 0 && (d = 0), (h.style.transitionDuration = `${d}ms`);
        });
    };
  t('beforeInit', () => {
    e.params.parallax.enabled && ((e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
  }),
    t('init', () => {
      e.params.parallax.enabled && o();
    }),
    t('setTranslate', () => {
      e.params.parallax.enabled && o();
    }),
    t('setTransition', (l, c) => {
      e.params.parallax.enabled && a(c);
    });
}
function ru(n) {
  let { swiper: e, extendParams: i, on: t, emit: r, params: s } = n;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    a,
    l = s && s.autoplay ? s.autoplay.delay : 3e3,
    c = s && s.autoplay ? s.autoplay.delay : 3e3,
    u,
    f = new Date().getTime(),
    h,
    d,
    m,
    p,
    y,
    _,
    g;
  function v(I) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (I.target === e.wrapperEl && (e.wrapperEl.removeEventListener('transitionend', v), !g && T()));
  }
  const w = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (h = !0) : h && ((c = u), (h = !1));
      const I = e.autoplay.paused ? u : f + c - new Date().getTime();
      (e.autoplay.timeLeft = I),
        r('autoplayTimeLeft', I, I / l),
        (a = requestAnimationFrame(() => {
          w();
        }));
    },
    b = () => {
      let I;
      return (
        e.virtual && e.params.virtual.enabled
          ? (I = e.slides.filter((S) => S.classList.contains('swiper-slide-active'))[0])
          : (I = e.slides[e.activeIndex]),
        I ? parseInt(I.getAttribute('data-swiper-autoplay'), 10) : void 0
      );
    },
    x = (I) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(a), w();
      let G = typeof I > 'u' ? e.params.autoplay.delay : I;
      (l = e.params.autoplay.delay), (c = e.params.autoplay.delay);
      const S = b();
      !Number.isNaN(S) && S > 0 && typeof I > 'u' && ((G = S), (l = S), (c = S)), (u = G);
      const q = e.params.speed,
        le = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev(q, !0, !0), r('autoplay'))
                : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, q, !0, !0), r('autoplay'))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext(q, !0, !0), r('autoplay'))
              : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, q, !0, !0), r('autoplay')),
            e.params.cssMode &&
              ((f = new Date().getTime()),
              requestAnimationFrame(() => {
                x();
              })));
        };
      return (
        G > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              le();
            }, G)))
          : requestAnimationFrame(() => {
              le();
            }),
        G
      );
    },
    E = () => {
      (f = new Date().getTime()), (e.autoplay.running = !0), x(), r('autoplayStart');
    },
    M = () => {
      (e.autoplay.running = !1), clearTimeout(o), cancelAnimationFrame(a), r('autoplayStop');
    },
    C = (I, G) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), I || (_ = !0);
      const S = () => {
        r('autoplayPause'),
          e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener('transitionend', v) : T();
      };
      if (((e.autoplay.paused = !0), G)) {
        y && (u = e.params.autoplay.delay), (y = !1), S();
        return;
      }
      (u = (u || e.params.autoplay.delay) - (new Date().getTime() - f)),
        !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), S());
    },
    T = () => {
      (e.isEnd && u < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((f = new Date().getTime()), _ ? ((_ = !1), x(u)) : x(), (e.autoplay.paused = !1), r('autoplayResume'));
    },
    A = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const I = ci();
      I.visibilityState === 'hidden' && ((_ = !0), C(!0)), I.visibilityState === 'visible' && T();
    },
    O = (I) => {
      I.pointerType === 'mouse' && ((_ = !0), (g = !0), !(e.animating || e.autoplay.paused) && C(!0));
    },
    k = (I) => {
      I.pointerType === 'mouse' && ((g = !1), e.autoplay.paused && T());
    },
    L = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener('pointerenter', O), e.el.addEventListener('pointerleave', k));
    },
    D = () => {
      e.el.removeEventListener('pointerenter', O), e.el.removeEventListener('pointerleave', k);
    },
    N = () => {
      ci().addEventListener('visibilitychange', A);
    },
    B = () => {
      ci().removeEventListener('visibilitychange', A);
    };
  t('init', () => {
    e.params.autoplay.enabled && (L(), N(), E());
  }),
    t('destroy', () => {
      D(), B(), e.autoplay.running && M();
    }),
    t('_freeModeStaticRelease', () => {
      (m || _) && T();
    }),
    t('_freeModeNoMomentumRelease', () => {
      e.params.autoplay.disableOnInteraction ? M() : C(!0, !0);
    }),
    t('beforeTransitionStart', (I, G, S) => {
      e.destroyed || !e.autoplay.running || (S || !e.params.autoplay.disableOnInteraction ? C(!0, !0) : M());
    }),
    t('sliderFirstMove', () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          M();
          return;
        }
        (d = !0),
          (m = !1),
          (_ = !1),
          (p = setTimeout(() => {
            (_ = !0), (m = !0), C(!0);
          }, 200));
      }
    }),
    t('touchEnd', () => {
      if (!(e.destroyed || !e.autoplay.running || !d)) {
        if ((clearTimeout(p), clearTimeout(o), e.params.autoplay.disableOnInteraction)) {
          (m = !1), (d = !1);
          return;
        }
        m && e.params.cssMode && T(), (m = !1), (d = !1);
      }
    }),
    t('slideChange', () => {
      e.destroyed || !e.autoplay.running || (y = !0);
    }),
    Object.assign(e.autoplay, { start: E, stop: M, pause: C, resume: T });
}
function Cp(n) {
  let { swiper: e, extendParams: i, on: t } = n;
  i({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs',
    },
  });
  let r = !1,
    s = !1;
  e.thumbs = { swiper: null };
  function o() {
    const c = e.thumbs.swiper;
    if (!c || c.destroyed) return;
    const u = c.clickedIndex,
      f = c.clickedSlide;
    if ((f && f.classList.contains(e.params.thumbs.slideThumbActiveClass)) || typeof u > 'u' || u === null) return;
    let h;
    c.params.loop ? (h = parseInt(c.clickedSlide.getAttribute('data-swiper-slide-index'), 10)) : (h = u),
      e.params.loop ? e.slideToLoop(h) : e.slideTo(h);
  }
  function a() {
    const { thumbs: c } = e.params;
    if (r) return !1;
    r = !0;
    const u = e.constructor;
    if (c.swiper instanceof u)
      (e.thumbs.swiper = c.swiper),
        Object.assign(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        Object.assign(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        e.thumbs.swiper.update();
    else if (Es(c.swiper)) {
      const f = Object.assign({}, c.swiper);
      Object.assign(f, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (e.thumbs.swiper = new u(f)), (s = !0);
    }
    return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on('tap', o), !0;
  }
  function l(c) {
    const u = e.thumbs.swiper;
    if (!u || u.destroyed) return;
    const f = u.params.slidesPerView === 'auto' ? u.slidesPerViewDynamic() : u.params.slidesPerView;
    let h = 1;
    const d = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 && !e.params.centeredSlides && (h = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (h = 1),
      (h = Math.floor(h)),
      u.slides.forEach((y) => y.classList.remove(d)),
      u.params.loop || (u.params.virtual && u.params.virtual.enabled))
    )
      for (let y = 0; y < h; y += 1)
        Dt(u.slidesEl, `[data-swiper-slide-index="${e.realIndex + y}"]`).forEach((_) => {
          _.classList.add(d);
        });
    else for (let y = 0; y < h; y += 1) u.slides[e.realIndex + y] && u.slides[e.realIndex + y].classList.add(d);
    const m = e.params.thumbs.autoScrollOffset,
      p = m && !u.params.loop;
    if (e.realIndex !== u.realIndex || p) {
      const y = u.activeIndex;
      let _, g;
      if (u.params.loop) {
        const v = u.slides.filter((w) => w.getAttribute('data-swiper-slide-index') === `${e.realIndex}`)[0];
        (_ = u.slides.indexOf(v)), (g = e.activeIndex > e.previousIndex ? 'next' : 'prev');
      } else (_ = e.realIndex), (g = _ > e.previousIndex ? 'next' : 'prev');
      p && (_ += g === 'next' ? m : -1 * m),
        u.visibleSlidesIndexes &&
          u.visibleSlidesIndexes.indexOf(_) < 0 &&
          (u.params.centeredSlides
            ? _ > y
              ? (_ = _ - Math.floor(f / 2) + 1)
              : (_ = _ + Math.floor(f / 2) - 1)
            : _ > y && u.params.slidesPerGroup,
          u.slideTo(_, c ? 0 : void 0));
    }
  }
  t('beforeInit', () => {
    const { thumbs: c } = e.params;
    if (!(!c || !c.swiper))
      if (typeof c.swiper == 'string' || c.swiper instanceof HTMLElement) {
        const u = ci(),
          f = () => {
            const d = typeof c.swiper == 'string' ? u.querySelector(c.swiper) : c.swiper;
            if (d && d.swiper) (c.swiper = d.swiper), a(), l(!0);
            else if (d) {
              const m = (p) => {
                (c.swiper = p.detail[0]), d.removeEventListener('init', m), a(), l(!0), c.swiper.update(), e.update();
              };
              d.addEventListener('init', m);
            }
            return d;
          },
          h = () => {
            if (e.destroyed) return;
            f() || requestAnimationFrame(h);
          };
        requestAnimationFrame(h);
      } else a(), l(!0);
  }),
    t('slideChange update resize observerUpdate', () => {
      l();
    }),
    t('setTransition', (c, u) => {
      const f = e.thumbs.swiper;
      !f || f.destroyed || f.setTransition(u);
    }),
    t('beforeDestroy', () => {
      const c = e.thumbs.swiper;
      !c || c.destroyed || (s && c.destroy());
    }),
    Object.assign(e.thumbs, { init: a, update: l });
}
V.registerPlugin(H);
class Mp {
  constructor(e) {
    (this.lenis = e),
      (this.page = document.querySelector('#home')),
      this.page &&
        (this.onKvScrollAnimation(), this.onFadeUpScrollAnimation(), this.campaignSlider(), this.scrollDownTextLoop()),
      this.onScaleScrollAnimation();
  }
  onKvScrollAnimation() {
    const e = document.querySelector('.p-home-kv__model'),
      i = document.querySelector('.p-home-kv__lift'),
      t = document.querySelector('.p-home-kv__item'),
      r = t.querySelector('.p-home-kv__item__image._01');
    t.querySelector('.p-home-kv__item__image._01 .p-home-kv__item__image__black');
    const s = t.querySelector('.p-home-kv__item__image._02'),
      o = t.querySelector('.p-home-kv__item__image._03'),
      a = document.querySelector('.p-home-kv__bg'),
      l = document.querySelector('.p-home-contaner');
    document.querySelector('.p-home-contaner__overlay');
    const c = document.querySelector('.p-home-contaner__BlackBg'),
      u = document.querySelector('.p-home-gallery'),
      f = document.querySelector('.l-fixed-scroller__text span'),
      h = document.querySelector('.l-fixed-scroller__line'),
      d = l.querySelector('.p-home-elekilift'),
      m = l.querySelector('.p-home-elekibrush'),
      p = document.querySelector('#footer');
    V.timeline()
      .to(e, {
        scrollTrigger: {
          trigger: l,
          start: 'top+=250 top',
          end: 'top+=250 top',
          onEnter: () => {
            V.to(e, { opacity: 0, scale: 1.1, duration: 1.4, ease: 'power2.out' });
          },
          onEnterBack: () => {
            V.to(e, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' });
          },
        },
      })
      .fromTo(
        t,
        { opacity: 0, yPercent: 45 },
        {
          scrollTrigger: {
            trigger: l,
            start: 'top+=0 top',
            end: 'top+=0 top',
            onEnter: () => {
              V.to(t, { opacity: 1, yPercent: 0, duration: 1.5, ease: 'power2.out' }),
                V.to(f, { opacity: 0, yPercent: -100, ease: 'power1.out', duration: 1.1 }),
                V.to(h, { opacity: 0, ease: 'power1.out', duration: 1.1 }),
                h.classList.add('is-none'),
                f.classList.add('is-none');
            },
            onEnterBack: () => {
              V.to(t, { opacity: 0, yPercent: 45, duration: 1.5, ease: 'power2.out' }),
                V.to(f, { opacity: 1, yPercent: 0, ease: 'power1.out', duration: 1.1 }),
                V.to(h, { opacity: 1, ease: 'power1.out', duration: 1.1 }),
                h.classList.remove('is-none'),
                f.classList.remove('is-none');
            },
          },
        },
        '>'
      )
      .to(r, {
        scrollTrigger: {
          trigger: u,
          start: 'top 80%',
          end: 'bottom 20%',
          onEnter: () => {
            r.classList.add('is-black');
          },
          onEnterBack: () => {
            r.classList.add('is-black');
          },
          onLeave: () => {
            r.classList.remove('is-black');
          },
          onLeaveBack: () => {
            r.classList.remove('is-black');
          },
        },
      })
      .to(r, {
        scrollTrigger: {
          trigger: d,
          start: 'top 70%',
          end: 'top 70%',
          onEnter: () => {
            V.to(r, { opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.45 }),
              V.to(s, { opacity: 1, duration: 0.9, ease: 'power2.out' });
          },
          onEnterBack: () => {
            V.to(s, { opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.45 }),
              V.to(r, { opacity: 1, duration: 0.9, ease: 'power2.out' });
          },
        },
      })
      .to(s, {
        scrollTrigger: {
          trigger: m,
          start: 'top 70%',
          end: 'top 70%',
          onEnter: () => {
            V.to(s, { opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.45 }),
              V.to(o, { opacity: 1, duration: 0.9, ease: 'power2.out' });
          },
          onEnterBack: () => {
            V.to(o, { opacity: 0, duration: 0.9, ease: 'power2.out', delay: 0.45 }),
              V.to(s, { opacity: 1, duration: 0.9, ease: 'power2.out' });
          },
        },
      })
      .fromTo(
        t,
        { scale: 1, willChange: 'transform' },
        {
          scale: 1.15,
          duration: 2,
          scrollTrigger: { trigger: m, start: 'bottom 80%', endTrigger: c, end: 'top+=100 50%', scrub: 1.2 },
        }
      )
      .fromTo(
        a,
        { scale: 1, willChange: 'transform' },
        {
          scale: 1.1,
          duration: 3,
          scrollTrigger: { trigger: m, start: 'bottom 80%', endTrigger: c, end: 'top+=100 50%', scrub: 2 },
        },
        '<'
      )
      .to(i, {
        scrollTrigger: {
          trigger: p,
          start: 'top 10%',
          end: 'top 10%',
          onEnter: () => {
            V.to(i, { opacity: 0, duration: 0.1, ease: 'power2.out' });
          },
          onEnterBack: () => {
            V.to(i, { opacity: 1, duration: 0.1, ease: 'power2.out' });
          },
        },
      });
  }
  onFadeUpScrollAnimation() {
    document.querySelectorAll('.js-fadeUpAnim').forEach((i) => {
      V.fromTo(
        i,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: i,
            start: 'top 70%',
            end: 'end 70%',
            onEnter: () => {
              V.to(i, { opacity: 1, y: 0, duration: 1.1, ease: 'power1.inOut' });
            },
          },
          stagger: { from: 'start' },
        }
      );
    });
  }
  onScaleScrollAnimation() {
    const e = document.querySelectorAll('.js-scaleAnim img');
    e &&
      e.forEach((i) => {
        V.fromTo(
          i,
          { scale: 1.15 },
          {
            scrollTrigger: {
              trigger: i,
              start: 'top 80%',
              end: 'end 80%',
              onEnter: () => {
                V.to(i, { scale: 1, duration: 1.4, ease: 'power1.out' });
              },
            },
            stagger: { from: 'start' },
          }
        );
      });
  }
  campaignSlider() {
    const e = document.querySelectorAll('.p-home-campaign__text__item'),
      i = (t) => {
        document.querySelector('.p-home-campaign__text .is-active').classList.remove('is-active'),
          e[t].classList.add('is-active');
      };
    new lt('.p-home-campaign__thum', {
      modules: [iu, ru, Ep],
      slidesPerView: 1,
      loop: !0,
      parallax: !0,
      speed: 800,
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      pagination: { el: '.p-home-campaign__num', type: 'fraction' },
      pagination: { el: '.p-home-campaign__bullets', clickable: !0, type: 'bullets' },
      on: {
        afterInit: (t) => {
          e[t.realIndex].classList.add('is-active');
          for (let s = 0; s < e.length; s++)
            e[s].onclick = () => {
              t.slideTo(s);
            };
          const r = document.querySelector('.swiper-pagination-total');
          r.innerHTML = e.length;
        },
        slideChange: (t) => {
          i(t.realIndex);
          const r = document.querySelector('.swiper-pagination-current');
          r.innerHTML = t.realIndex + 1;
        },
      },
    });
  }
  scrollDownTextLoop() {
    const e = document.querySelector('.l-fixed-scroller__text');
    function i() {
      e.classList.toggle('toggle-class');
    }
    setInterval(i, 2500);
  }
}
class ca {
  constructor(e, i) {
    (this.naviItems = document.querySelectorAll(e)),
      (this.boxItems = document.querySelectorAll(i)),
      (this.naviItemElements = []),
      (this.boxItemElements = []),
      (this.itemKeys = []),
      (this.boxKeys = []),
      (this.distances = []),
      (this.heights = []),
      (this.endPoints = []),
      window.addEventListener('load', this.calculatePositions()),
      window.addEventListener('scroll', this.onScroll.bind(this));
  }
  calculatePositions() {
    this.naviItems.forEach((e, i) => {
      const t = this.boxItems[i];
      (this.naviItemElements[i] = e),
        (this.boxItemElements[i] = t),
        (this.itemKeys[i] = e.getAttribute('href').replace(/#/g, '')),
        (this.boxKeys[i] = t.getAttribute('id')),
        (this.distances[i] =
          t.getBoundingClientRect().top + window.scrollY - document.querySelector('#header').clientHeight - 2),
        (this.heights[i] = t.offsetHeight),
        (this.endPoints[i] = this.distances[i] + this.heights[i]);
    });
  }
  onScroll() {
    const e = window.scrollY;
    this.itemKeys.forEach((i, t) => {
      i === this.boxKeys[t] && e > this.distances[t] && e < this.endPoints[t]
        ? this.naviItemElements[t].classList.add('is-current')
        : (e < this.distances[t] || e > this.endPoints[t]) && this.naviItemElements[t].classList.remove('is-current');
    });
  }
}
V.registerPlugin(H);
class Op {
  constructor(e) {
    (this.lenis = e),
      (this.page = document.querySelector('.p-productDetail')),
      this.page &&
        (this.stepper(),
        this.productSlider(),
        new ca('.c-productNav a', '.p-productDetail-block'),
        this.productExampleImage(),
        this.productNav()),
      (this.modal = document.querySelectorAll('.c-modal-movie')),
      this.modal &&
        this.modal.forEach((i) => {
          i.addEventListener('mouseover', () => {
            this.movieArrow();
          }),
            this.movieIcon();
        }),
      this.awardsSlider(),
      Hc || this.productMouseOver();
  }
  stepper() {
    document.querySelectorAll('.btn-number').forEach(function (t) {
      t.addEventListener('click', function (r) {
        r.preventDefault();
        let s = this.getAttribute('data-field'),
          o = this.getAttribute('data-type'),
          a = document.querySelector("input[name='" + s + "']"),
          l = parseInt(a.value);
        isNaN(l) ||
          (o === 'minus'
            ? (l > parseInt(a.getAttribute('min')) && ((a.value = l - 1), a.dispatchEvent(new Event('change'))),
              parseInt(a.value) === parseInt(a.getAttribute('min')) && this.setAttribute('disabled', !0))
            : o === 'plus'
            ? (l < parseInt(a.getAttribute('max')) && ((a.value = l + 1), a.dispatchEvent(new Event('change'))),
              parseInt(a.value) === parseInt(a.getAttribute('max')) && this.setAttribute('disabled', !0))
            : (a.value = 0));
      });
    }),
      document.querySelectorAll('.input-number').forEach(function (t) {
        t.addEventListener('focusin', function (r) {
          this.dataset.oldValue = this.value;
        }),
          t.addEventListener('change', function (r) {
            let s = parseInt(this.getAttribute('min')),
              o = parseInt(this.getAttribute('max')),
              a = parseInt(this.value),
              l = this.getAttribute('name');
            if (a >= s) {
              let c = document.querySelector(".btn-number[data-type='minus'][data-field='" + l + "']");
              c && c.removeAttribute('disabled');
            } else this.value = this.dataset.oldValue;
            if (a <= o) {
              let c = document.querySelector(".btn-number[data-type='plus'][data-field='" + l + "']");
              c && c.removeAttribute('disabled');
            } else this.value = this.dataset.oldValue;
          }),
          t.addEventListener('keydown', function (r) {
            [46, 8, 9, 27, 13, 190].includes(r.keyCode) ||
              (r.keyCode === 65 && r.ctrlKey === !0) ||
              (r.keyCode >= 35 && r.keyCode <= 39) ||
              ((r.shiftKey || r.keyCode < 48 || r.keyCode > 57) &&
                (r.keyCode < 96 || r.keyCode > 105) &&
                r.preventDefault());
          });
      }),
      window.addEventListener('DOMContentLoaded', function () {
        let t = document.getElementById('number-of-unit'),
          r = document.getElementById('output-number-of-unit');
        t.addEventListener('change', function () {
          r.textContent = this.value;
        });
      });
  }
  productSlider() {
    const e = document.querySelector('.p-productDetail-buy'),
      i = e.querySelector('.swiper-thumb'),
      t = e.querySelector('.swiper-main'),
      r = new lt(i, {
        slidesPerView: 'auto',
        spaceBetween: 6,
        grabCursor: !0,
        breakpoints: { 768: { spaceBetween: 10 } },
      });
    new lt(t, { modules: [Cp, iu], grabCursor: !0, parallax: !0, speed: 500, thumbs: { swiper: r } });
    const s = document.querySelectorAll('.p-productDetail-buy__image__thumnails__item'),
      o = document.querySelector('.p-productDetail-buy__image__thumnails');
    s.length <= 5 && o && o.hasAttribute('cursor-class') && o.removeAttribute('cursor-class');
  }
  awardsSlider() {
    const e = document.querySelector('.c-awards__slider');
    e &&
      e.querySelectorAll('.swiper-slide').length > 5 &&
      new lt(e, {
        modules: [ru],
        slidesPerView: 'auto',
        speed: 1e3,
        loop: !0,
        loopAdditionalSlides: 1,
        freeMode: !0,
        freeModeMomentum: !1,
        allowTouchMove: !0,
        autoplay: { delay: 2e3, disableOnInteraction: !1 },
      });
  }
  productMouseOver() {
    const e = document.querySelectorAll('.c-products__item a');
    e &&
      e.forEach((i) => {
        i.addEventListener('mouseover', () => {
          i.classList.add('is-active'),
            e.forEach(function (t) {
              t !== i && t.classList.add('is-passive');
            });
        }),
          i.addEventListener('mouseout', () => {
            i.classList.remove('is-active'),
              e.forEach(function (t) {
                t !== i && t.classList.remove('is-passive');
              });
          });
      });
  }
  productExampleImage() {
    document.querySelectorAll('.p-productDetail-example__image__thum'),
      document.querySelector('.p-productDetail-example__image__thum.item01'),
      document.querySelector('.p-productDetail-example__image__thum.item02'),
      document.querySelector('.p-productDetail-example__image__thum.item03');
    const e = document.querySelector('.p-productDetail-example__head');
    V.to(e, {
      scrollTrigger: {
        trigger: e,
        start: 'top 70%',
        end: 'bottom 70%',
        toggleClass: { targets: e, className: 'is-show' },
        once: !0,
      },
    });
  }
  movieIcon() {
    document.querySelectorAll('.c-modal-movie__icon__anim .js-iconCircle').forEach((i) => {
      V.fromTo(
        i,
        { rotate: -90, strokeDashoffset: '500', strokeDasharray: '500 500' },
        { rotate: 320, strokeDashoffset: '-500', duration: 3.2, ease: sf, repeat: -1, repeatDelay: 1, force3D: !0 }
      );
    });
  }
  movieArrow() {
    document.querySelectorAll('.c-modal-movie__icon__triangle').forEach((i) => {
      const t = i.querySelector('.c-modal-movie__icon__triangle__anim.Before svg'),
        r = i.querySelector('.c-modal-movie__icon__triangle__anim.After svg');
      V.set(t, { xPercent: -150 }),
        V.set(r, { xPercent: 0 }),
        V.to(t, {
          xPercent: 0,
          duration: 1,
          ease: Ec,
          force3D: !0,
          onComplete: () => {
            V.set(t, { xPercent: -150 });
          },
        }),
        V.to(r, {
          xPercent: 100,
          duration: 1,
          ease: Ec,
          force3D: !0,
          onComplete: () => {
            V.set(r, { xPercent: 0 });
          },
        });
    });
  }
  productNav() {
    if (Hc) {
      const e = document.querySelector('#productNav'),
        i = document.querySelector('#header'),
        t = () => {
          const r = i.offsetHeight;
          e.style.top = `${r}px`;
        };
      t(), window.addEventListener('resize', t);
    }
  }
}
class Pp {
  constructor() {
    new ca('.p-faq__nav a', '.p-faq__contents__block');
  }
}
class Ap {
  constructor() {
    new ca('.p-jaccs__nav a', '.p-jaccs__contents__block');
  }
}
window.addEventListener('load', () => {
  const n = nf();
  new Rd(n),
    $f(),
    new Hf('.simplebar-content-wrapper'),
    new Gf(768),
    new Yf('.progress-bar'),
    new Xf(),
    new jf(),
    new Uf(),
    new Qf(n),
    new eh('#hambergerMenu', '#menuTrigger', '#menuNav, a', n),
    new th(),
    new ih(),
    new rh(),
    new sh(),
    new Mp(n),
    new Op(n),
    new Pp(n),
    new Ap(n),
    new su(),
    da(window.innerWidth, window.innerHeight),
    window.addEventListener('resize', (e) => {
      da(window.innerWidth, window.innerHeight);
    });
});
