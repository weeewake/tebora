PLOVR_MODULE_INFO={"misc-screens":["common-async"],"stats":["common-async"],"base":[],"common-async":["base"],"notes":["common-async"],"posters":["common-async"],"notes-mobile":["common-async"]};
PLOVR_MODULE_URIS={"misc-screens":"fingerprint:misc-screens","stats":"fingerprint:stats","base":"fingerprint:base","common-async":"fingerprint:common-async","notes":"fingerprint:notes","posters":"fingerprint:posters","notes-mobile":"fingerprint:notes-mobile"};
PLOVR_MODULE_USE_DEBUG_MODE=false;
_mdm={};(function(z){
var sa;
var ra;
z.n = function(a) {
  return function() {
    return z.aa[a].apply(this, arguments);
  };
};
var da = function(a, b) {
  for (var c = a.split("."), d = b || z.ea, e;e = c.shift();) {
    if (null != d[e]) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
z.fa = function() {
};
var ga = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
z.ha = function(a) {
  return void 0 !== a;
};
z.ia = function(a) {
  return "array" == ga(a);
};
z.ka = function(a) {
  var b = ga(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
z.ma = function(a) {
  return "string" == typeof a;
};
z.na = function(a) {
  return "number" == typeof a;
};
z.oa = function(a) {
  return "function" == ga(a);
};
z.pa = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
z.qa = function(a) {
  return a[ra] || (a[ra] = ++sa);
};
var ta = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
var ua = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
z.xa = function(a, b, c) {
  z.xa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta : ua;
  return z.xa.apply(null, arguments);
};
z.ya = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
z.p = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.w = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.aQ = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
z.Aa = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, z.Aa);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
z.Ca = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
z.Da = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
z.Ea = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
z.Fa = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
z.Ga = function(a) {
  if (!Ha.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Ja, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Ka, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(La, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Na, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Oa, "\x26#39;"));
  return a;
};
var Pa = function(a) {
  100 < a.length && (a = a.substring(0, 97) + "...");
  return a;
};
z.Qa = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
var Ra = function(a, b) {
  for (var c = 0, d = (0,z.Fa)(String(a)).split("."), e = (0,z.Fa)(String(b)).split("."), f = Math.max(d.length, e.length), h = 0;0 == c && h < f;h++) {
    var k = d[h] || "", l = e[h] || "", m = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
    do {
      var x = m.exec(k) || ["", "", ""], G = q.exec(l) || ["", "", ""];
      if (0 == x[0].length && 0 == G[0].length) {
        break;
      }
      c = Sa(0 == x[1].length ? 0 : (0,window.parseInt)(x[1], 10), 0 == G[1].length ? 0 : (0,window.parseInt)(G[1], 10)) || Sa(0 == x[2].length, 0 == G[2].length) || Sa(x[2], G[2]);
    } while (0 == c);
  }
  return c;
};
var Sa = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
z.Ta = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
z.Ua = function(a) {
  var b = (0,z.ma)(void 0) ? (0,z.Qa)(void 0) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
};
z.Xa = function(a) {
  return a[a.length - 1];
};
z.Za = function(a, b, c) {
  a: {
    for (var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
      if (f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : (0,z.ma)(a) ? a.charAt(b) : a[b];
};
var $a = function(a, b) {
  for (var c = a.length, d = (0,z.ma)(a) ? a.split("") : a, c = c - 1;0 <= c;c--) {
    if (c in d && b.call(void 0, d[c], c, a)) {
      return c;
    }
  }
  return-1;
};
z.ab = function(a, b) {
  return 0 <= (0,z.bb)(a, b);
};
z.cb = function(a, b) {
  var c = (0,z.bb)(a, b), d;
  (d = 0 <= c) && db.splice.call(a, c, 1);
  return d;
};
var eb = function(a) {
  return db.concat.apply(db, arguments);
};
z.fb = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
};
z.gb = function(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if ((0,z.ia)(d) || (e = (0,z.ka)(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d);
    } else {
      if (e) {
        for (var f = a.length, h = d.length, k = 0;k < h;k++) {
          a[f + k] = d[k];
        }
      } else {
        a.push(d);
      }
    }
  }
};
var hb = function(a, b, c, d) {
  db.splice.apply(a, (0,z.ib)(arguments, 1));
};
z.ib = function(a, b, c) {
  return 2 >= arguments.length ? db.slice.call(a, b) : db.slice.call(a, b, c);
};
z.jb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var nb = function(a) {
  var b = qb, c = {};
  (0,z.rb)(a, function(d, e) {
    c[b.call(void 0, d, e, a)] = d;
  });
  return c;
};
z.sb = function(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
};
var tb = function(a, b) {
  var c = {}, d;
  for (d in a) {
    b.call(void 0, a[d], d, a) && (c[d] = a[d]);
  }
  return c;
};
var ub = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
var vb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
z.xb = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return!0;
    }
  }
  return!1;
};
z.yb = function(a) {
  for (var b in a) {
    return!1;
  }
  return!0;
};
z.zb = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
z.Ab = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
z.Bb = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Cb.length;f++) {
      c = Cb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
var Db = function(a) {
  var b = arguments.length;
  if (1 == b && (0,z.ia)(arguments[0])) {
    return Db.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
z.Eb = function(a) {
  var b = arguments.length;
  if (1 == b && (0,z.ia)(arguments[0])) {
    return z.Eb.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
var Gb = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.xa.apply(null, b);
};
var Hb = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.bb.apply(null, b);
};
var Ib = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Jb.apply(null, b);
};
var Kb = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
};
var Lb = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
};
var Mb = function(a) {
  Nb[Nb.length] = a;
  if (Ob) {
    for (var b = 0;b < Pb.length;b++) {
      a((0,z.xa)(Pb[b].$j, Pb[b]));
    }
  }
};
var Qb = function() {
  var a = Rb;
  Ob = !0;
  for (var b = (0,z.xa)(a.$j, a), c = 0;c < Nb.length;c++) {
    Nb[c](b);
  }
  Pb.push(a);
};
z.Sb = function(a) {
  return function() {
    return a;
  };
};
z.Tb = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for (var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments);
    }
    return a;
  };
};
var Ub = function(a, b) {
  function c() {
  }
  c.prototype = a.prototype;
  var d = new c;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
z.Vb = function(a) {
  a = Wb(a);
  (0,z.oa)(z.ea.setImmediate) ? z.ea.setImmediate(a) : (Xb || (Xb = Yb()), Xb(a));
};
var Yb = function() {
  var a = z.ea.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = window.document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    window.document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = (0,z.xa)(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.GB;
      c.GB = null;
      a();
    };
    return function(a) {
      d.next = {GB:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("script") ? function(a) {
    var b = window.document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    window.document.documentElement.appendChild(b);
  } : function(a) {
    z.ea.setTimeout(a, 0);
  };
};
var Wb = function(a) {
  return a;
};
var ac = function(a) {
  (0,z.Vb)(function() {
    throw a;
  });
};
var bc = function(a, b) {
  cc || ((0,z.Vb)(dc), cc = !0);
  ec.push(new fc(a, b));
};
var dc = function() {
  for (;ec.length;) {
    var a = ec;
    ec = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.ll.call(c.scope);
      } catch (d) {
        ac(d);
      }
    }
  }
  cc = !1;
};
var fc = function(a, b) {
  this.ll = a;
  this.scope = b;
};
var gc = function(a, b) {
  this.af = hc;
  this.Yg = void 0;
  this.Se = this.Sb = null;
  this.Nr = this.mw = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      ic(c, jc, a);
    }, function(a) {
      ic(c, kc, a);
    });
  } catch (d) {
    ic(this, kc, d);
  }
};
var lc = function(a, b) {
  if (a.af == hc) {
    if (a.Sb) {
      var c = a.Sb;
      if (c.Se) {
        for (var d = 0, e = -1, f = 0, h;h = c.Se[f];f++) {
          if (h = h.tr) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.af == hc && 1 == d ? lc(c, b) : (d = c.Se.splice(e, 1)[0], mc(c, d, kc, b)));
      }
    } else {
      ic(a, kc, b);
    }
  }
};
var nc = function(a, b) {
  a.Se && a.Se.length || a.af != jc && a.af != kc || oc(a);
  a.Se || (a.Se = []);
  a.Se.push(b);
};
var qc = function(a, b, c, d) {
  var e = {tr:null, jD:null, lD:null};
  e.tr = new gc(function(a, h) {
    e.jD = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (m) {
        h(m);
      }
    } : a;
    e.lD = c ? function(b) {
      try {
        var e = c.call(d, b);
        !(0,z.ha)(e) && b instanceof rc ? h(b) : a(e);
      } catch (m) {
        h(m);
      }
    } : h;
  });
  e.tr.Sb = a;
  nc(a, e);
  return e.tr;
};
var ic = function(a, b, c) {
  if (a.af == hc) {
    if (a == c) {
      b = kc, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (Lb(c)) {
        a.af = 1;
        c.then(a.kE, a.lE, a);
        return;
      }
      if ((0,z.pa)(c)) {
        try {
          var d = c.then;
          if ((0,z.oa)(d)) {
            sc(a, c, d);
            return;
          }
        } catch (e) {
          b = kc, c = e;
        }
      }
    }
    a.Yg = c;
    a.af = b;
    oc(a);
    b != kc || c instanceof rc || tc(a, c);
  }
};
var sc = function(a, b, c) {
  function d(b) {
    f || (f = !0, a.lE(b));
  }
  function e(b) {
    f || (f = !0, a.kE(b));
  }
  a.af = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
};
var oc = function(a) {
  a.mw || (a.mw = !0, bc(a.yL, a));
};
var mc = function(a, b, c, d) {
  if (c == jc) {
    b.jD(d);
  } else {
    for (;a && a.Nr;a = a.Sb) {
      a.Nr = !1;
    }
    b.lD(d);
  }
};
var tc = function(a, b) {
  a.Nr = !0;
  bc(function() {
    a.Nr && uc.call(null, b);
  });
};
var rc = function(a) {
  z.Aa.call(this, a);
};
z.vc = function(a, b) {
  this.ns = [];
  this.hD = a;
  this.QB = b || null;
  this.Un = this.Mc = !1;
  this.Yg = void 0;
  this.Gx = this.cL = this.Nv = !1;
  this.zs = 0;
  this.Sb = null;
  this.pr = 0;
};
var wc = function(a, b, c) {
  a.Mc = !0;
  a.Yg = c;
  a.Un = !b;
  xc(a);
};
var yc = function(a) {
  if (a.Mc) {
    if (!a.Gx) {
      throw new zc(a);
    }
    a.Gx = !1;
  }
};
z.r = function(a, b, c) {
  return Ac(a, b, null, c);
};
z.s = function(a, b, c) {
  return Ac(a, null, b, c);
};
z.Bc = function(a, b, c) {
  return Ac(a, b, b, c);
};
var Ac = function(a, b, c, d) {
  a.ns.push([b, c, d]);
  a.Mc && xc(a);
  return a;
};
z.Cc = function(a, b) {
  return(0,z.r)(a, (0,z.xa)(b.Bb, b));
};
var Dc = function(a) {
  return(0,z.Ec)(a.ns, function(a) {
    return(0,z.oa)(a[1]);
  });
};
var xc = function(a) {
  if (a.zs && a.Mc && Dc(a)) {
    var b = a.zs, c = Fc[b];
    c && (Gc.call(z.ea, c.Nd), delete Fc[b]);
    a.zs = 0;
  }
  a.Sb && (a.Sb.pr--, delete a.Sb);
  for (var b = a.Yg, d = c = !1;a.ns.length && !a.Nv;) {
    var e = a.ns.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Un ? h : f) {
      try {
        var k = f.call(e || a.QB, b);
        (0,z.ha)(k) && (a.Un = a.Un && (k == b || k instanceof Error), a.Yg = b = k);
        Lb(b) && (d = !0, a.Nv = !0);
      } catch (l) {
        b = l, a.Un = !0, Dc(a) || (c = !0);
      }
    }
  }
  a.Yg = b;
  d && (k = (0,z.xa)(a.KB, a, !0), d = (0,z.xa)(a.KB, a, !1), b instanceof z.vc ? (Ac(b, k, d), b.cL = !0) : b.then(k, d));
  c && (b = new Hc(b), Fc[b.Nd] = b, a.zs = b.Nd);
};
z.Ic = function(a) {
  var b = new z.vc;
  b.Ca(a);
  return b;
};
z.Jc = function(a) {
  var b = new z.vc;
  b.be(a);
  return b;
};
var Kc = function() {
  var a = new z.vc;
  a.cancel();
  return a;
};
var zc = function(a) {
  z.Aa.call(this);
  this.Bc = a;
};
z.Mc = function(a) {
  z.Aa.call(this);
  this.Bc = a;
};
var Hc = function(a) {
  this.Nd = Nc.call(z.ea, (0,z.xa)(this.yN, this), 0);
  this.wL = a;
};
z.Oc = function(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return(0,z.ma)(a) && a.match(/\S+/g) || [];
};
z.Pc = function(a, b) {
  return a.classList ? a.classList.contains(b) : (0,z.ab)((0,z.Oc)(a), b);
};
z.t = function(a, b) {
  a.classList ? a.classList.add(b) : (0,z.Pc)(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
};
z.Qc = function(a, b) {
  if (a.classList) {
    (0,z.rb)(b, function(b) {
      (0,z.t)(a, b);
    });
  } else {
    var c = {};
    (0,z.rb)((0,z.Oc)(a), function(a) {
      c[a] = !0;
    });
    (0,z.rb)(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
};
z.u = function(a, b) {
  a.classList ? a.classList.remove(b) : (0,z.Pc)(a, b) && (a.className = (0,z.Rc)((0,z.Oc)(a), function(a) {
    return a != b;
  }).join(" "));
};
z.Sc = function(a, b) {
  a.classList ? (0,z.rb)(b, function(b) {
    (0,z.u)(a, b);
  }) : a.className = (0,z.Rc)((0,z.Oc)(a), function(a) {
    return!(0,z.ab)(b, a);
  }).join(" ");
};
z.Tc = function(a, b, c) {
  c ? (0,z.t)(a, b) : (0,z.u)(a, b);
};
z.Uc = function(a, b) {
  var c = !(0,z.Pc)(a, b);
  (0,z.Tc)(a, b, c);
};
z.Vc = function(a, b, c) {
  (0,z.u)(a, b);
  (0,z.t)(a, c);
};
z.Wc = function(a) {
  this.Xc = a;
};
var Xc = function(a) {
  a = (a.Xc.cookie || "").split(Yc);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("\x3d"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return{keys:b, No:c};
};
z.v = function() {
  0 != Zc && ($c[(0,z.qa)(this)] = this);
};
z.ad = function(a) {
  a && "function" == typeof a.Ob && a.Ob();
};
z.cd = function(a) {
  for (var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    (0,z.ka)(d) ? z.cd.apply(null, d) : (0,z.ad)(d);
  }
};
var dd = function(a) {
  return-1 != ed.indexOf(a);
};
var fd = function() {
  return z.ea.navigator || null;
};
var gd = function() {
  var a = z.ea.document;
  return a ? a.documentMode : void 0;
};
z.hd = function(a) {
  return id[a] || (id[a] = 0 <= Ra(jd, a));
};
var kd = function(a) {
  return z.ld && md >= a;
};
var nd = function(a) {
  a = a.className;
  return(0,z.ma)(a) && a.match(/\S+/g) || [];
};
var od = function(a, b) {
  for (var c = nd(a), d = (0,z.ib)(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    (0,z.ab)(f, d[h]) || f.push(d[h]);
  }
  a.className = c.join(" ");
  return c.length == e;
};
var pd = function(a, b) {
  var c = nd(a), c = qd(c, (0,z.ib)(arguments, 1));
  a.className = c.join(" ");
};
var qd = function(a, b) {
  return(0,z.Rc)(a, function(a) {
    return!(0,z.ab)(b, a);
  });
};
z.rd = function(a, b) {
  this.x = (0,z.ha)(a) ? a : 0;
  this.y = (0,z.ha)(b) ? b : 0;
};
var sd = function(a, b) {
  this.width = a;
  this.height = b;
};
z.td = function(a) {
  return a ? new ud((0,z.vd)(a)) : wd || (wd = new ud);
};
z.yd = function(a, b) {
  (0,z.sb)(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in zd ? a.setAttribute(zd[d], b) : (0,z.Ca)(d, "aria-") || (0,z.Ca)(d, "data-") ? a.setAttribute(d, b) : a[d] = b;
  });
};
z.Ad = function(a) {
  a = a.document;
  a = (0,z.Bd)(a) ? a.documentElement : a.body;
  return new sd(a.clientWidth, a.clientHeight);
};
z.Cd = function(a) {
  return a ? a.parentWindow || a.defaultView : window;
};
z.Dd = function(a, b) {
  var c = b[0], d = b[1];
  if (!Ed && d && (d.name || d.type)) {
    c = ["\x3c", c];
    d.name && c.push(' name\x3d"', (0,z.Ga)(d.name), '"');
    if (d.type) {
      c.push(' type\x3d"', (0,z.Ga)(d.type), '"');
      var e = {};
      (0,z.Bb)(e, d);
      delete e.type;
      d = e;
    }
    c.push("\x3e");
    c = c.join("");
  }
  c = a.createElement(c);
  d && ((0,z.ma)(d) ? c.className = d : (0,z.ia)(d) ? od.apply(null, [c].concat(d)) : (0,z.yd)(c, d));
  2 < b.length && Fd(a, c, b, 2);
  return c;
};
var Fd = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild((0,z.ma)(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !(0,z.ka)(f) || (0,z.pa)(f) && 0 < f.nodeType ? e(f) : (0,z.rb)(Gd(f) ? (0,z.fb)(f) : f, e);
  }
};
z.Hd = function(a) {
  return(0,z.Id)(a);
};
z.Id = function(a) {
  var b = window.document, c = b.createElement("div");
  z.ld ? (c.innerHTML = "\x3cbr\x3e" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if (1 == c.childNodes.length) {
    return c.removeChild(c.firstChild);
  }
  for (a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild);
  }
  return a;
};
z.Bd = function(a) {
  return "CSS1Compat" == a.compatMode;
};
z.Jd = function(a) {
  if (1 != a.nodeType) {
    return!1;
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return!1;
  }
  return!0;
};
z.Kd = function(a, b) {
  Fd((0,z.vd)(a), a, arguments, 1);
};
z.Ld = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b);
};
z.Md = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
};
z.Nd = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null);
};
z.Od = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
z.Pd = function(a) {
  var b, c = a.parentNode;
  if (c && 11 != c.nodeType) {
    if (a.removeNode) {
      return a.removeNode(!1);
    }
    for (;b = a.firstChild;) {
      c.insertBefore(b, a);
    }
    return(0,z.Od)(a);
  }
};
z.Qd = function(a, b) {
  for (;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling;
  }
  return a;
};
z.Rd = function(a) {
  return(0,z.pa)(a) && 1 == a.nodeType;
};
var Sd = function(a) {
  if (Td && !(z.ld && (0,z.hd)("9") && !(0,z.hd)("10") && z.ea.SVGElement && a instanceof z.ea.SVGElement)) {
    return a.parentElement;
  }
  a = a.parentNode;
  return(0,z.Rd)(a) ? a : null;
};
z.Ud = function(a, b) {
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
};
var Vd = function(a, b) {
  if (a == b) {
    return 0;
  }
  if (a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  if (z.ld && !kd(9)) {
    if (9 == a.nodeType) {
      return-1;
    }
    if (9 == b.nodeType) {
      return 1;
    }
  }
  if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = 1 == a.nodeType, d = 1 == b.nodeType;
    if (c && d) {
      return a.sourceIndex - b.sourceIndex;
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? Wd(a, b) : !c && (0,z.Ud)(e, b) ? -1 * Xd(a, b) : !d && (0,z.Ud)(f, a) ? Xd(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex);
  }
  d = (0,z.vd)(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(z.ea.Range.START_TO_END, d);
};
var Xd = function(a, b) {
  var c = a.parentNode;
  if (c == b) {
    return-1;
  }
  for (var d = b;d.parentNode != c;) {
    d = d.parentNode;
  }
  return Wd(d, a);
};
var Wd = function(a, b) {
  for (var c = b;c = c.previousSibling;) {
    if (c == a) {
      return-1;
    }
  }
  return 1;
};
z.Yd = function(a) {
  var b, c = arguments.length;
  if (!c) {
    return null;
  }
  if (1 == c) {
    return arguments[0];
  }
  var d = [], e = window.Infinity;
  for (b = 0;b < c;b++) {
    for (var f = [], h = arguments[b];h;) {
      f.unshift(h), h = h.parentNode;
    }
    d.push(f);
    e = Math.min(e, f.length);
  }
  f = null;
  for (b = 0;b < e;b++) {
    for (var h = d[0][b], k = 1;k < c;k++) {
      if (h != d[k][b]) {
        return f;
      }
    }
    f = h;
  }
  return f;
};
z.vd = function(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
};
var Gd = function(a) {
  if (a && "number" == typeof a.length) {
    if ((0,z.pa)(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if ((0,z.oa)(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
};
z.Zd = function(a, b, c) {
  if (!b && !c) {
    return null;
  }
  var d = b ? b.toUpperCase() : null;
  return(0,z.$d)(a, function(a) {
    var b;
    if (b = !d || a.nodeName == d) {
      (b = !c) || (b = (0,z.ab)(nd(a), c));
    }
    return b;
  });
};
z.$d = function(a, b) {
  for (var c = 0;a;) {
    if (b(a)) {
      return a;
    }
    a = a.parentNode;
    c++;
  }
  return null;
};
var ud = function(a) {
  this.Xc = a || z.ea.document || window.document;
};
var ae = function(a, b) {
  var c;
  c = a.Xc;
  var d = b && "*" != b ? b.toUpperCase() : "";
  c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
  return c;
};
z.be = function(a) {
  var b = a.Xc;
  a = !z.ce && (0,z.Bd)(b) ? b.documentElement : b.body || b.documentElement;
  b = b.parentWindow || b.defaultView;
  return z.ld && (0,z.hd)("10") && b.pageYOffset != a.scrollTop ? new z.rd(a.scrollLeft, a.scrollTop) : new z.rd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
};
z.de = function() {
};
z.ee = function(a) {
  if (a instanceof z.de) {
    return a;
  }
  if ("function" == typeof a.Bi) {
    return a.Bi(!1);
  }
  if ((0,z.ka)(a)) {
    var b = 0, c = new z.de;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw z.fe;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
};
z.he = function(a) {
  try {
    return(0,z.ee)(a).next();
  } catch (b) {
    if (b != z.fe) {
      throw b;
    }
    return null;
  }
};
z.ie = function(a, b, c, d, e) {
  this.Qd = !!b;
  a && je(this, a, d);
  this.depth = void 0 != e ? e : this.Rc || 0;
  this.Qd && (this.depth *= -1);
  this.xr = !c;
};
var je = function(a, b, c, d) {
  if (a.V = b) {
    a.Rc = (0,z.na)(c) ? c : 1 != a.V.nodeType ? 0 : a.Qd ? -1 : 1;
  }
  (0,z.na)(d) && (a.depth = d);
};
var ke = function(a) {
  if ("function" == typeof a.wf) {
    return a.wf();
  }
  if ((0,z.ma)(a)) {
    return a.split("");
  }
  if ((0,z.ka)(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return ub(a);
};
var le = function(a) {
  if ("function" == typeof a.ue) {
    return a.ue();
  }
  if ("function" != typeof a.wf) {
    if ((0,z.ka)(a) || (0,z.ma)(a)) {
      var b = [];
      a = a.length;
      for (var c = 0;c < a;c++) {
        b.push(c);
      }
      return b;
    }
    return vb(a);
  }
};
var me = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if ((0,z.ka)(a) || (0,z.ma)(a)) {
      (0,z.rb)(a, b, c);
    } else {
      for (var d = le(a), e = ke(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
};
z.ne = function(a, b) {
  this.ze = {};
  this.zb = [];
  this.Oo = this.Jb = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.Qf(a);
  }
};
var oe = function(a, b) {
  return a === b;
};
var pe = function(a) {
  if (a.Jb != a.zb.length) {
    for (var b = 0, c = 0;b < a.zb.length;) {
      var d = a.zb[b];
      qe(a.ze, d) && (a.zb[c++] = d);
      b++;
    }
    a.zb.length = c;
  }
  if (a.Jb != a.zb.length) {
    for (var e = {}, c = b = 0;b < a.zb.length;) {
      d = a.zb[b], qe(e, d) || (a.zb[c++] = d, e[d] = 1), b++;
    }
    a.zb.length = c;
  }
};
var qe = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
z.re = function() {
  z.v.call(this);
};
z.se = function() {
};
z.te = function(a) {
  if (a.getSelection) {
    return a.getSelection();
  }
  a = a.document;
  var b = a.selection;
  if (b) {
    try {
      var c = b.createRange();
      if (c.parentElement) {
        if (c.parentElement().document != a) {
          return null;
        }
      } else {
        if (!c.length || c.item(0).document != a) {
          return null;
        }
      }
    } catch (d) {
      return null;
    }
    return b;
  }
  return null;
};
z.ue = function(a) {
  for (var b = [], c = 0, d = a.ul();c < d;c++) {
    b.push(a.Wh(c));
  }
  return b;
};
z.ve = function(a) {
  return a.xe() ? a.mb() : a.Ga();
};
z.we = function(a) {
  return a.xe() ? a.Fc() : a.Mb();
};
z.xe = function(a) {
  return a.xe() ? a.Ga() : a.mb();
};
z.ye = function(a) {
  return a.xe() ? a.Mb() : a.Fc();
};
var ze = function(a, b) {
  z.ie.call(this, a, b, !0);
};
z.Ae = function() {
};
z.Be = function(a, b, c, d, e) {
  var f;
  a && (this.Ma = a, this.gb = b, this.Ka = c, this.eb = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.Ma = b, this.gb = 0) : (a.length && (this.Ma = (0,z.Xa)(a)), f = !0)), 1 == c.nodeType && ((this.Ka = c.childNodes[d]) ? this.eb = 0 : this.Ka = c));
  z.ie.call(this, e ? this.Ka : this.Ma, e, !0);
  if (f) {
    try {
      this.next();
    } catch (h) {
      if (h != z.fe) {
        throw h;
      }
    }
  }
};
z.Ce = function() {
};
z.De = function(a) {
  this.sa = a;
};
var Ee = function(a) {
  var b = (0,z.vd)(a).createRange();
  if (3 == a.nodeType) {
    b.setStart(a, 0), b.setEnd(a, a.length);
  } else {
    if (Fe(a)) {
      for (var c, d = a;(c = d.firstChild) && Fe(c);) {
        d = c;
      }
      b.setStart(d, 0);
      for (d = a;(c = d.lastChild) && Fe(c);) {
        d = c;
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
    } else {
      c = a.parentNode, a = (0,z.bb)(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
    }
  }
  return b;
};
var Ge = function(a, b, c, d) {
  var e = (0,z.vd)(a).createRange();
  e.setStart(a, b);
  e.setEnd(c, d);
  return e;
};
var He = function(a) {
  this.sa = a;
};
z.Ie = function(a, b) {
  this.sa = a;
  this.sL = b;
};
var Je = function(a) {
  var b = (0,z.vd)(a).body.createTextRange();
  if (1 == a.nodeType) {
    b.moveToElementText(a), Fe(a) && !a.childNodes.length && b.collapse(!1);
  } else {
    for (var c = 0, d = a;d = d.previousSibling;) {
      var e = d.nodeType;
      if (3 == e) {
        c += d.length;
      } else {
        if (1 == e) {
          b.moveToElementText(d);
          break;
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length);
  }
  return b;
};
var Ke = function(a, b) {
  for (var c = b.childNodes, d = 0, e = c.length;d < e;d++) {
    var f = c[d];
    if (Fe(f)) {
      var h = Je(f), k = h.htmlText != f.outerHTML;
      if (a.isCollapsed() && k ? 0 <= a.Ue(h, 1, 1) && 0 >= a.Ue(h, 1, 0) : a.sa.inRange(h)) {
        return Ke(a, f);
      }
    }
  }
  return b;
};
var Le = function(a, b, c) {
  c = c || a.te();
  if (!c || !c.firstChild) {
    return c;
  }
  for (var d = 1 == b, e = 0, f = c.childNodes.length;e < f;e++) {
    var h = d ? e : f - e - 1, k = c.childNodes[h], l;
    try {
      l = (0,z.Me)(k);
    } catch (m) {
      continue;
    }
    var q = l.sa;
    if (a.isCollapsed()) {
      if (!Fe(k)) {
        if (0 == a.Ue(q, 1, 1)) {
          a.gb = a.eb = h;
          break;
        }
      } else {
        if (l.Nh(a)) {
          return Le(a, b, k);
        }
      }
    } else {
      if (a.Nh(l)) {
        if (!Fe(k)) {
          d ? a.gb = h : a.eb = h + 1;
          break;
        }
        return Le(a, b, k);
      }
      if (0 > a.Ue(q, 1, 0) && 0 < a.Ue(q, 0, 1)) {
        return Le(a, b, k);
      }
    }
  }
  return c;
};
var Ne = function(a, b) {
  var c = 1 == b, d = c ? a.Ga() : a.mb();
  if (1 == d.nodeType) {
    for (var d = d.childNodes, e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1;0 <= h && h < e;h += f) {
      var k = d[h];
      if (!Fe(k) && 0 == a.sa.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), (0,z.Me)(k).sa)) {
        return c ? h : h + 1;
      }
    }
    return-1 == h ? 0 : h;
  }
  e = a.sa.duplicate();
  f = Je(d);
  e.setEndPoint(c ? "EndToEnd" : "StartToStart", f);
  e = e.text.length;
  return c ? d.length - e : e;
};
var Oe = function(a) {
  return 3 == a.nodeType ? a.nodeValue : a.innerText;
};
var Pe = function(a) {
  this.sa = a;
};
var Qe = function(a) {
  this.sa = a;
};
z.Me = function(a) {
  if (z.ld && !kd(9)) {
    var b = new z.Ie(Je(a), (0,z.vd)(a));
    if (Fe(a)) {
      for (var c, d = a;(c = d.firstChild) && Fe(c);) {
        d = c;
      }
      b.Ma = d;
      b.gb = 0;
      for (d = a;(c = d.lastChild) && Fe(c);) {
        d = c;
      }
      b.Ka = d;
      b.eb = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.bg = a;
    } else {
      b.Ma = b.Ka = b.bg = a.parentNode, b.gb = (0,z.bb)(b.bg.childNodes, a), b.eb = b.gb + 1;
    }
    a = b;
  } else {
    a = z.ce ? new Qe(Ee(a)) : z.Re ? new He(Ee(a)) : z.Se ? new Pe(Ee(a)) : new z.De(Ee(a));
  }
  return a;
};
var Fe = function(a) {
  return(0,z.Jd)(a) || 3 == a.nodeType;
};
z.Te = function() {
};
z.Ue = function(a, b) {
  var c;
  c = z.ld && !kd(9) ? new z.Ie(a, (0,z.vd)(a.parentElement())) : z.ce ? new Qe(a) : z.Re ? new He(a) : z.Se ? new Pe(a) : new z.De(a);
  return(0,z.Ve)(c, b);
};
z.Ve = function(a, b) {
  var c = new z.Te;
  c.Kh = a;
  c.zf = !!b;
  return c;
};
z.We = function(a, b, c, d) {
  var e = new z.Te;
  e.zf = (0,z.Xe)(a, b, c, d);
  if ((0,z.Rd)(a) && !(0,z.Jd)(a)) {
    var f = a.parentNode;
    b = (0,z.bb)(f.childNodes, a);
    a = f;
  }
  (0,z.Rd)(c) && !(0,z.Jd)(c) && (f = c.parentNode, d = (0,z.bb)(f.childNodes, c), c = f);
  e.zf ? (e.Ma = c, e.gb = d, e.Ka = a, e.eb = b) : (e.Ma = a, e.gb = b, e.Ka = c, e.eb = d);
  return e;
};
z.af = function(a) {
  var b;
  if (!(b = a.Kh)) {
    b = a.Ga();
    var c = a.Mb(), d = a.mb(), e = a.Fc();
    if (z.ld && !kd(9)) {
      var f = b, h = c, k = d, l = e, m = !1;
      1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
      var q = Je(f);
      h && q.move("character", h);
      f == k && h == l ? q.collapse(!0) : (m && q.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = Je(k), f.collapse(!m), l && f.moveEnd("character", l), q.setEndPoint("EndToEnd", f));
      l = new z.Ie(q, (0,z.vd)(b));
      l.Ma = b;
      l.gb = c;
      l.Ka = d;
      l.eb = e;
      b = l;
    } else {
      b = z.ce ? new Qe(Ge(b, c, d, e)) : z.Re ? new He(Ge(b, c, d, e)) : z.Se ? new Pe(Ge(b, c, d, e)) : new z.De(Ge(b, c, d, e));
    }
    b = a.Kh = b;
  }
  return b;
};
var bf = function(a) {
  this.xB = (0,z.ve)(a);
  this.ZK = (0,z.we)(a);
  this.gC = (0,z.xe)(a);
  this.FL = (0,z.ye)(a);
};
z.cf = function() {
};
z.df = function(a) {
  var b = new z.cf;
  b.sa = a;
  return b;
};
var ef = function(a) {
  for (var b = (0,z.vd)(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c]);
  }
  return(0,z.df)(b);
};
var ff = function(a) {
  if (!a.Dc && (a.Dc = [], a.sa)) {
    for (var b = 0;b < a.sa.length;b++) {
      a.Dc.push(a.sa.item(b));
    }
  }
  return a.Dc;
};
z.gf = function(a) {
  a.Go || (a.Go = ff(a).concat(), a.Go.sort(function(a, c) {
    return a.sourceIndex - c.sourceIndex;
  }));
  return a.Go;
};
var hf = function(a) {
  this.Dc = ff(a);
};
z.jf = function(a) {
  a && (this.Dc = (0,z.gf)(a), this.Ma = this.Dc.shift(), this.Ka = (0,z.Xa)(this.Dc) || this.Ma);
  z.ie.call(this, this.Ma, !1, !0);
};
z.kf = function() {
  this.Rf = [];
  this.Sl = [];
  this.yr = this.hm = null;
};
var lf = function(a) {
  var b = new z.kf;
  b.Sl = a;
  b.Rf = (0,z.Jb)(a, function(a) {
    return a.wj();
  });
  return b;
};
var mf = function(a) {
  a.hm || (a.hm = (0,z.ue)(a), a.hm.sort(function(a, c) {
    var d = a.Ga(), e = a.Mb(), f = c.Ga(), h = c.Mb();
    return d == f && e == h ? 0 : (0,z.Xe)(d, e, f, h) ? 1 : -1;
  }));
  return a.hm;
};
var nf = function(a) {
  this.xx = (0,z.Jb)((0,z.ue)(a), function(a) {
    return a.wx();
  });
};
z.of = function(a) {
  a && (this.Zf = (0,z.Jb)(mf(a), function(a) {
    return(0,z.ee)(a);
  }));
  ze.call(this, a ? this.Ga() : null, !1);
};
z.Xe = function(a, b, c, d) {
  if (a == c) {
    return d < b;
  }
  var e;
  if (1 == a.nodeType && b) {
    if (e = a.childNodes[b]) {
      a = e, b = 0;
    } else {
      if ((0,z.Ud)(a, c)) {
        return!0;
      }
    }
  }
  if (1 == c.nodeType && d) {
    if (e = c.childNodes[d]) {
      c = e, d = 0;
    } else {
      if ((0,z.Ud)(c, a)) {
        return!1;
      }
    }
  }
  return 0 < (Vd(a, c) || b - d);
};
var pf = function(a) {
  return(a = a.exec(ed)) ? a[1] : "";
};
z.qf = function() {
  return z.ce ? "Webkit" : z.Re ? "Moz" : z.ld ? "ms" : z.Se ? "O" : null;
};
z.rf = function() {
  return z.ce ? "-webkit" : z.Re ? "-moz" : z.ld ? "-ms" : z.Se ? "-o" : null;
};
z.sf = function(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
};
z.tf = function(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
};
z.uf = function(a) {
  return new z.sf(a.top, a.left + a.width, a.top + a.height, a.left);
};
z.vf = function(a, b, c) {
  (0,z.ma)(b) ? wf(a, c, b) : (0,z.sb)(b, (0,z.ya)(wf, a));
};
var wf = function(a, b, c) {
  (c = xf(a, c)) && (a.style[c] = b);
};
var xf = function(a, b) {
  var c = (0,z.Ta)(b);
  if (void 0 === a.style[c]) {
    var d = (0,z.qf)() + (0,z.Ua)(b);
    if (void 0 !== a.style[d]) {
      return d;
    }
  }
  return c;
};
z.yf = function(a, b) {
  var c = a.style[(0,z.Ta)(b)];
  return "undefined" !== typeof c ? c : a.style[xf(a, b)] || "";
};
z.zf = function(a, b) {
  var c = (0,z.vd)(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
};
z.Af = function(a, b) {
  return(0,z.zf)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
};
z.Bf = function(a) {
  var b;
  try {
    b = a.getBoundingClientRect();
  } catch (c) {
    return{left:0, top:0, right:0, bottom:0};
  }
  z.ld && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b;
};
var Cf = function(a) {
  if (z.ld && !kd(8)) {
    return a.offsetParent;
  }
  var b = (0,z.vd)(a), c = (0,z.Af)(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode;a && a != b;a = a.parentNode) {
    if (c = (0,z.Af)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
};
z.Df = function(a) {
  var b, c = (0,z.vd)(a), d = (0,z.Af)(a, "position"), e = z.Re && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new z.rd(0, 0), h;
  b = c ? (0,z.vd)(c) : window.document;
  (h = !z.ld) || (h = kd(9)) || (h = (0,z.td)(b), h = (0,z.Bd)(h.Xc));
  h = h ? b.documentElement : b.body;
  if (a == h) {
    return f;
  }
  if (a.getBoundingClientRect) {
    b = (0,z.Bf)(a), a = (0,z.be)((0,z.td)(c)), f.x = b.left + a.x, f.y = b.top + a.y;
  } else {
    if (c.getBoxObjectFor && !e) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    } else {
      e = a;
      do {
        f.x += e.offsetLeft;
        f.y += e.offsetTop;
        e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
        if (z.ce && "fixed" == (0,z.Af)(e, "position")) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break;
        }
        e = e.offsetParent;
      } while (e && e != a);
      if (z.Se || z.ce && "absolute" == d) {
        f.y -= c.body.offsetTop;
      }
      for (e = a;(e = Cf(e)) && e != c.body && e != h;) {
        f.x -= e.scrollLeft, z.Se && "TR" == e.tagName || (f.y -= e.scrollTop);
      }
    }
  }
  return f;
};
var Ef = function(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
};
z.Ff = function(a, b) {
  var c = (0,z.td)(b), d = null, e = c.Lg();
  z.ld && e.createStyleSheet ? (d = e.createStyleSheet(), Gf(d, a)) : (e = ae(c, "head")[0], e || (d = ae(c, "body")[0], e = c.Ac("head"), d.parentNode.insertBefore(e, d)), d = c.Ac("style"), Gf(d, a), c.appendChild(e, d));
  return d;
};
z.Hf = function(a) {
  (0,z.Od)(a.ownerNode || a.owningElement || a);
};
var Gf = function(a, b) {
  z.ld && (0,z.ha)(a.cssText) ? a.cssText = b : a.innerHTML = b;
};
var If = function(a) {
  If[" "](a);
  return a;
};
z.Jf = function(a) {
  if (Kf) {
    Kf = !1;
    var b = z.ea.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = (0,z.Jf)(c)[3] || null) && (0,window.decodeURIComponent)(c)) && c != b.hostname) {
        throw Kf = !0, Error();
      }
    }
  }
  return a.match(Lf);
};
var Mf = function(a, b) {
  var c;
  if (a instanceof Mf) {
    this.Ye = (0,z.ha)(b) ? b : a.Ye, Nf(this, a.Be), c = a.Cs, Of(this), this.Cs = c, this.$l(a.Qh()), Pf(this, a.pi), Qf(this, a.Uh()), Rf(this, a.Af.ja()), Sf(this, a.qw);
  } else {
    if (a && (c = (0,z.Jf)(String(a)))) {
      this.Ye = !!b;
      Nf(this, c[1] || "", !0);
      var d = c[2] || "";
      Of(this);
      this.Cs = d ? (0,window.decodeURIComponent)(d) : "";
      this.$l(c[3] || "", !0);
      Pf(this, c[4]);
      Qf(this, c[5] || "", !0);
      Rf(this, c[6] || "", !0);
      Sf(this, c[7] || "", !0);
    } else {
      this.Ye = !!b, this.Af = new Tf(null, 0, this.Ye);
    }
  }
};
var Nf = function(a, b, c) {
  Of(a);
  a.Be = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
  a.Be && (a.Be = a.Be.replace(/:$/, ""));
};
var Pf = function(a, b) {
  Of(a);
  if (b) {
    b = Number(b);
    if ((0,window.isNaN)(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.pi = b;
  } else {
    a.pi = null;
  }
};
var Qf = function(a, b, c) {
  Of(a);
  a.tD = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
};
var Rf = function(a, b, c) {
  Of(a);
  b instanceof Tf ? (a.Af = b, a.Af.Cx(a.Ye)) : (c || (b = Uf(b, Vf)), a.Af = new Tf(b, 0, a.Ye));
};
var Sf = function(a, b, c) {
  Of(a);
  a.qw = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
};
var Wf = function(a, b) {
  return(!a.hl && !b.hl || a.Qh() == b.Qh()) && (null == a.pi && null == b.pi || a.pi == b.pi);
};
var Of = function(a) {
  if (a.nM) {
    throw Error("Tried to modify a read-only Uri");
  }
};
var Xf = function(a, b, c, d, e, f) {
  var h = new Mf(null, void 0);
  a && Nf(h, a);
  b && h.$l(b);
  c && Pf(h, c);
  d && Qf(h, d);
  e && Rf(h, e);
  f && Sf(h, f);
  return h;
};
var Uf = function(a, b) {
  return(0,z.ma)(a) ? (0,window.encodeURI)(a).replace(b, Yf) : null;
};
var Yf = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
var Tf = function(a, b, c) {
  this.se = a || null;
  this.Ye = !!c;
};
var Zf = function(a) {
  if (!a.$b && (a.$b = new z.ne, a.Jb = 0, a.se)) {
    for (var b = a.se.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = (0,window.decodeURIComponent)(e.replace(/\+/g, " "));
      e = $f(a, e);
      a.add(e, f ? (0,window.decodeURIComponent)(f.replace(/\+/g, " ")) : "");
    }
  }
};
var ag = function(a) {
  var b = le(a);
  if ("undefined" == typeof b) {
    throw Error("Keys are undefined");
  }
  var c = new Tf(null, 0, void 0);
  a = ke(a);
  for (var d = 0;d < b.length;d++) {
    var e = b[d], f = a[d];
    (0,z.ia)(f) ? bg(c, e, f) : c.add(e, f);
  }
  return c;
};
var bg = function(a, b, c) {
  a.remove(b);
  0 < c.length && (a.se = null, a.$b.set($f(a, b), (0,z.fb)(c)), a.Jb += c.length);
};
var $f = function(a, b) {
  var c = String(b);
  a.Ye && (c = c.toLowerCase());
  return c;
};
var cg = function() {
};
var dg = function() {
};
var eg = function(a, b, c, d) {
  b = b.g();
  if (b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c;
  }
  if (b.prototype.lm) {
    if (null == c) {
      return null;
    }
    if (c instanceof Object) {
      return a.ub(b, c, d);
    }
    throw Error("Bad field value " + c);
  }
  throw Error('Unknown schema type "' + b + '"');
};
var fg = function(a, b, c) {
  b = b.g();
  if (b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c;
  }
  if (b.prototype.lm) {
    if (null == c) {
      return null;
    }
    if (c.lm) {
      return a.Zc(c);
    }
    throw Error("Bad field value " + c);
  }
  throw Error('Unknown schema type "' + b + '"');
};
z.w = function() {
  this.data = {};
  this.Fg = {};
  this.eB = !1;
  Object.preventExtensions && Object.preventExtensions(this);
};
z.gg = function(a, b) {
  a.eB = b;
  return a;
};
z.hg = function(a, b) {
  var c = a.$c().fields[b];
  if (!c && !a.Vr(b)) {
    throw Error("Unrecognized field " + b);
  }
  return c;
};
z.ig = function(a, b) {
  if (b in a.Fg) {
    return a.Fg[b];
  }
  (0,z.hg)(a, b);
  return(0,z.y)(a, b);
};
z.y = function(a, b) {
  return b in a.data ? a.data[b] : (0,z.jg)(a, b);
};
z.kg = function(a, b) {
  if (b in a.Fg) {
    return!0;
  }
  (0,z.hg)(a, b);
  return b in a.data;
};
z.A = function(a, b, c) {
  var d = a.$c().fields[b];
  if (!a.Vr(b)) {
    if (!d) {
      return a.Fg[b] = c, delete a.data[b], a;
    }
    var e = d.g();
    if (e.$isProtoEnum && !d.h() && "number" == typeof c && !(0,z.xb)(e, c)) {
      return a.Fg[b] = c, delete a.data[b], a;
    }
  }
  if (a.eB && d) {
    if (d.h()) {
      if (!Array.isArray(c)) {
        throw Error("Type mismatch. Expected Array. Actual: " + c);
      }
      for (e = 0;e < c.length;e++) {
        lg(b, d, c[e]);
      }
    } else {
      lg(b, d, c);
    }
  }
  a.data[b] = c;
  delete a.Fg[b];
  return a;
};
var mg = function(a, b, c) {
  var d = {};
  (0,z.Bb)(d, a.Fg);
  a = a.$c().fields;
  for (var e in a) {
    delete d[e], b.call(c, e, a[e]);
  }
  for (e in d) {
    b.call(c, e, null);
  }
};
var lg = function(a, b, c) {
  b = b.g();
  var d = b.name || b, e = !1;
  if (b == Number || b.$isProtoEnum) {
    e = "number" == typeof c;
  } else {
    if (b == String) {
      e = "string" == typeof c;
    } else {
      if (b == Boolean) {
        e = "boolean" == typeof c;
      } else {
        if (b == Object) {
          e = c && "object" == typeof c && !(c instanceof z.w);
        } else {
          if (b.prototype instanceof z.w) {
            e = c instanceof b;
          } else {
            throw Error("I don't know how to type-check " + d + " on field " + a);
          }
        }
      }
    }
  }
  if (!e) {
    throw Error("Type mismatch. Expected: " + d + " on field " + a + ", Value " + c);
  }
};
z.jg = function(a, b) {
  var c = (0,z.hg)(a, b);
  if (!c || c.h()) {
    return null;
  }
  var d = c.defaultValue();
  if (void 0 !== d) {
    return d;
  }
  c = c.g();
  switch(c) {
    case Number:
      return 0;
    case String:
      return "";
    case Boolean:
      return!1;
    case Object:
      return null;
    default:
      if (c.$isProtoEnum) {
        for (var e in c) {
          if (c.hasOwnProperty(e) && "number" == typeof c[e]) {
            return c[e];
          }
        }
      }
      return null;
  }
};
var E = function(a, b) {
  a.UO = b.name;
  a.hO = b.fields;
  a.prototype.$c = function() {
    return b;
  };
  var c = a.prototype, d = {}, e;
  for (e in b.fields) {
    b.fields[e] ? (d[b.fields[e].l()] = e, ng(c, e)) : delete b.fields[e];
  }
  b.AU = d;
};
var og = function(a, b, c, d) {
  b = b.g();
  if (b == String || b == Boolean || b == Number || b.$isProtoEnum) {
    return c === d;
  }
  if (b.prototype instanceof z.w) {
    return c === d || c && d && c.Lb(d);
  }
  if (b == Object) {
    return pg(a, c, d);
  }
  throw Error("no equality metric");
};
var pg = function(a, b, c) {
  if (!b || !c || "object" != typeof b || "object" != typeof c) {
    return!1;
  }
  for (var d in b) {
    if (null !== b[d] && "object" == typeof b[d]) {
      if (!pg(a, b[d], c[d])) {
        return!1;
      }
    } else {
      if (b[d] != c[d]) {
        return!1;
      }
    }
  }
  return!0;
};
var ng = function(a, b) {
  if (b in a) {
    throw Error('Can not define setters/getters for "' + b + '", property name already exists.');
  }
  Object.defineProperty(a, b, {get:function() {
    return(0,z.ig)(this, b);
  }, set:function(a) {
    (0,z.A)(this, b, a);
  }});
};
var F = function() {
  this._isPopulated = !1;
  z.w.call(this);
};
z.qg = function() {
  F.call(this);
};
var rg = function() {
  F.call(this);
};
var sg = function() {
  F.call(this);
};
z.tg = function(a, b) {
  this.start = a < b ? a : b;
  this.end = a < b ? b : a;
};
var ug = function(a, b, c, d) {
  a = (d ? Math.ceil : Math.floor)(a / c) * c;
  return Math.max(Math.min(a, b.end), b.start);
};
z.H = function(a) {
  a = a.split(".");
  var b;
  b = a.shift();
  b = vg[b] || b;
  for (var c = z.wg[b];c && (b = a.shift());) {
    c = c[b];
  }
  return c;
};
var xg = function() {
  var a = (0,z.H)("embedded");
  if ("undefined" != typeof a) {
    a: {
      var b = ["embedded"], c;
      c = b.shift();
      c = vg[c] || c;
      for (var d = z.wg;null != d[c];) {
        if (0 === b.length) {
          d[c] = null;
          break a;
        }
        d = d[c];
        c = b.shift();
      }
    }
  }
  return a;
};
z.I = function(a, b) {
  return a(b || {}, null, z.wg);
};
z.yg = function(a, b) {
  return(0,z.Hd)((0,z.I)(a, b));
};
var zg = function() {
  var a = window.GLOBALS;
  z.wg = {};
  for (var b in vg) {
    z.wg[vg[b]] = a[b];
  }
  z.wg.deviceWidth = Ag(function() {
    return window.document.body.clientWidth;
  });
  z.wg.deviceWidthImageBucket = Ag(function() {
    return ug(window.document.body.clientWidth || 1200, Bg, 200, !0);
  });
  z.wg.qL = Ag(function() {
    return window.document.body.clientHeight;
  });
  z.wg.rL = Ag(function() {
    return ug(window.document.body.clientHeight || 1200, Bg, 200, !0);
  });
};
var Ag = function(a) {
  return{valueOf:a, toString:function() {
    return String(Number(this));
  }};
};
z.Cg = function() {
  F.call(this);
};
z.Dg = function(a, b) {
  return(0,z.A)(a, "paragraphs", b);
};
z.Eg = function(a, b) {
  return(0,z.A)(a, "sections", b);
};
var Fg = function() {
  F.call(this);
};
z.Gg = function(a, b) {
  return(0,z.A)(a, "markups", b);
};
var Hg = function(a) {
  return(0,z.y)(a, "layout");
};
var Ig = function(a, b) {
  return(0,z.A)(a, "layout", b);
};
z.Jg = function() {
  F.call(this);
};
z.Kg = function() {
  F.call(this);
};
z.Lg = function() {
  F.call(this);
};
z.Mg = function(a) {
  return(0,z.y)(a, "start");
};
z.Ng = function(a) {
  return(0,z.y)(a, "end");
};
z.Og = function() {
  F.call(this);
};
z.Pg = function(a) {
  return(0,z.y)(a, "backgroundImage");
};
z.Qg = function(a, b) {
  return(0,z.A)(a, "backgroundImage", b);
};
z.Rg = function(a, b) {
  return(0,z.A)(a, "textLayout", b);
};
z.Sg = function(a) {
  return(0,z.y)(a, "imageLayout");
};
z.Ug = function(a, b) {
  return(0,z.A)(a, "imageLayout", b);
};
z.Vg = function(a) {
  return(0,z.y)(a, "backgroundColor");
};
z.Wg = function() {
  F.call(this);
};
var Xg = function(a) {
  if (!a.length) {
    return!0;
  }
  for (var b = -1, c = 0;c < a.length;c++) {
    if (a[c]) {
      if (a[c].ra() <= b) {
        return!1;
      }
      b = a[c].ra();
    }
  }
  return!0;
};
var Yg = function(a, b) {
  for (var c = -1, d = 0;d < a.length;d++) {
    if (b >= a[d].ra()) {
      c = d;
    } else {
      break;
    }
  }
  return c;
};
z.Zg = function(a, b) {
  var c = Yg(a, b);
  return-1 == c ? null : a[c];
};
z.$g = function(a, b, c) {
  var d = a[b].ra();
  return b + 1 >= a.length ? c - d : a[b + 1].ra() - d;
};
z.ah = function(a, b, c) {
  return a[b].ra() + (0,z.$g)(a, b, c);
};
z.bh = function() {
  this.De = {};
};
var ch = function(a, b) {
  var c = new z.dh(a);
  c.hi = !1;
  b ? a.De[b] = c : a.fw = c;
};
z.eh = function(a) {
  var b = new z.dh(a);
  b.ye = !1;
  b.hi = !0;
  a.fw = b;
};
z.fh = function(a, b, c, d) {
  var e = new z.dh(a);
  e.ye = !0;
  c && ((0,z.ia)(c) ? e.attributes = (0,z.Eb)(c) : e.attributes = c);
  if (d) {
    for (e.ye = b, c = 0;c < d.length;c++) {
      a.De[d[c].toUpperCase()] = e;
    }
  }
  return a.De[b] = e;
};
z.dh = function(a) {
  this.attributes = {};
  this.cd = a;
  this.ye = !1;
  this.hi = !0;
};
var gh = function() {
  var a = new z.bh;
  ch(a, "SCRIPT");
  ch(a, "STYLE");
  ch(a, "HEAD");
  (0,z.eh)(a);
  return a;
};
var hh = function() {
  var a = gh();
  (0,z.fh)(a, "P", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}, ["DIV"]).cd = ih;
  (0,z.fh)(a, "FIGURE", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}).cd = jh;
  (0,z.fh)(a, "UL").cd = kh;
  (0,z.fh)(a, "OL").cd = kh;
  (0,z.fh)(a, "HR", ["name"]).cd = lh;
  (0,z.fh)(a, "H2", ["name"]).cd = mh;
  (0,z.fh)(a, "H3", ["name"]).cd = mh;
  (0,z.fh)(a, "H4", ["name"]).cd = mh;
  (0,z.fh)(a, "BLOCKQUOTE", {name:!0, "class":["pullquote"]}).cd = mh;
  (0,z.fh)(a, "PRE", ["name"]).cd = mh;
  return a;
};
var nh = function(a) {
  try {
    return new Mf(a);
  } catch (b) {
    return window.console.warn("Malformed URI: ", a, b.stack), null;
  }
};
var oh = function(a) {
  if ("string" == typeof a && (a = nh(a), !a)) {
    return!1;
  }
  a = a.Qh();
  return!a || ph[a] || "localhost" == a;
};
z.K = function(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for (e in b) {
    d[e] = b[e];
  }
  return d;
};
var qh = function(a) {
  var b = [], c;
  for (c in a) {
    b.push(c);
  }
  return b;
};
var L = function(a, b, c) {
  var d = "key_" + a + ":" + b, e = rh[d];
  if (void 0 === e || 0 > e) {
    rh[d] = 0, sh[d] = c;
  } else {
    if (0 == e) {
      throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
    }
  }
};
var th = function(a, b) {
  var c = sh["key_" + a + ":" + b];
  c || "" == b || (c = sh["key_" + a + ":"]);
  return c ? c : uh;
  throw Error('Found no active impl for delegate call to "' + a + ":" + b + '" (and not allowemptydefault\x3d"true").');
};
var uh = function() {
  return "";
};
z.N = function(a) {
  return a && a.Kg && a.Kg === vh ? a.content : String(a).replace(wh, xh);
};
z.yh = function(a) {
  return a && a.Kg && a.Kg === vh ? String(a.content).replace(zh, xh) : String(a).replace(wh, xh);
};
z.O = function(a) {
  a && a.Kg && a.Kg === vh ? (a = String(a.content).replace(Ah, "").replace(Bh, "\x26lt;"), a = String(a).replace(zh, xh)) : a = String(a).replace(wh, xh);
  return a;
};
var Ch = function(a) {
  return "%" + a.charCodeAt(0).toString(16);
};
var Dh = function(a) {
  if (a && a.Kg === Eh) {
    return String(a).replace(Fh, Gh);
  }
  a = (0,window.encodeURIComponent)(String(String(a)));
  Hh.lastIndex = 0;
  return Hh.test(a) ? a.replace(Hh, Ch) : a;
};
z.P = function(a) {
  return a && a.Kg == Eh ? String(a).replace(Fh, Gh) : Ih(a);
};
var Ph = function(a) {
  a && a.Kg === Qh ? a = a.content : null == a ? a = "" : (a = String(a), a = Rh.test(a) ? a : "zSoyz");
  return a;
};
z.Sh = function(a) {
  return a && a.Kg === Th ? "zSoyz" : String(a);
};
var xh = function(a) {
  return Uh[a];
};
var Gh = function(a) {
  return Vh[a];
};
var Ih = function(a) {
  a = String(a);
  return Wh.test(a) ? a.replace(Fh, Gh) : "#zSoyz";
};
var Xh = function() {
  return Yh.test("iframe") ? "iframe" : "zSoyz";
};
z.Zh = function(a, b) {
  var c = nh(a);
  if (!c) {
    return "";
  }
  if ("javascript" == c.Be) {
    return window.console.warn("Attempted to pass JavaScript URI"), "";
  }
  var d = oh(c), e = d && "/r/" == c.Uh();
  return!b && e ? String(c.Af.get("url")) : !b || d || e ? a : "/r/?url\x3d" + (0,window.encodeURIComponent)(a);
};
z.$h = function(a) {
  return 2 == a ? Math.round(350) : 4 == a ? Math.round(525) : 3 == a ? 900 : 5 == a ? 2400 : 700;
};
var ai = function(a, b) {
  if (!(0,z.Ca)(b, a)) {
    return "";
  }
  var c = /\/([^\/]*)$/.exec(b);
  return c && (0,window.decodeURIComponent)(c[1]) || "";
};
var bi = function(a, b, c) {
  var d = (0,z.Q)(a, b, function() {
    (0,z.ci)(d);
    c.apply(this, arguments);
  }, void 0, void 0);
};
z.Q = function(a, b, c, d, e) {
  if (!a) {
    throw Error("Can not add listener, element is not defined");
  }
  return di(a, b, c, d, e);
};
var di = function(a, b, c, d, e) {
  function f(b) {
    b = ei(b);
    c.call(d || a, b);
  }
  if (!a) {
    return null;
  }
  b = fi ? b : "on" + b;
  e = e || !1;
  a[gi](b, f, e);
  return{N:a, type:b, xl:f, al:e};
};
z.ci = function(a) {
  if (a) {
    if ((0,z.ia)(a)) {
      for (var b = 0;b < a.length;b++) {
        (0,z.ci)(a[b]);
      }
    } else {
      a.N[hi](a.type, a.xl, a.al);
    }
  }
};
var ei = function(a) {
  var b = a || window.event;
  b.preventDefault || (b.preventDefault = function() {
    b.returnValue = !1;
  });
  b.stopPropagation || (b.stopPropagation = function() {
    b.cancelBubble = !0;
  });
  "mouseover" != b.type || b.relatedTarget || (b.relatedTarget = b.fromElement);
  "mouseout" != b.type || b.relatedTarget || (b.relatedTarget = b.toElement);
  return b;
};
z.ii = function(a) {
  return(0,z.Pc)(a, "section-divider");
};
z.ji = function(a) {
  return "DIV" === a.tagName && ((0,z.Pc)(a, "aspect-ratio-placeholder") || (0,z.Pc)(a, "aspect-ratio-fill"));
};
z.ki = function(a, b, c, d) {
  for (var e = c || window.document.body;a && a != e && !b(a);) {
    a = a.parentNode;
  }
  return c && !d && e == a || a && e != a && !(0,z.Ud)(e, a) ? null : a;
};
z.li = function(a, b, c) {
  a != window.document.body || mi || (a = window.document.documentElement);
  "function" == typeof a.scrollTo ? a.scrollTo(b, c) : (a.scrollTop = c, a.scrollLeft = b);
};
z.ni = function(a, b) {
  for (var c = {x:0, y:0}, d = b || window.document.body;a && a != d;) {
    c.y += a.offsetTop, c.x += a.offsetLeft, a = a.offsetParent;
  }
  return c;
};
z.oi = function(a) {
  return(0,z.ni)(a, (0,z.pi)(a)).y;
};
z.pi = function(a) {
  for (a = a.parentNode;(0,z.Rd)(a) && "auto" != (0,z.Af)(a, "overflowY");a = a.parentNode) {
  }
  return(0,z.Rd)(a) ? a : window.document.body;
};
z.qi = function(a) {
  return a == window.document.body || a == window.document.documentElement ? (0,z.ri)() : new z.tf(a.scrollLeft, a.scrollTop, a.scrollWidth, a.scrollHeight);
};
z.ri = function() {
  return new z.tf(window.document.documentElement.scrollLeft || window.document.body.scrollLeft || 0, window.document.documentElement.scrollTop || window.document.body.scrollTop || 0, window.document.documentElement.scrollWidth || window.document.body.scrollWidth || 0, window.document.documentElement.scrollHeight || window.document.body.scrollHeight || 0);
};
z.si = function(a) {
  return new z.tf(a.left, a.top, a.width, a.height);
};
z.ti = function(a) {
  a = 3 == a.nodeType || "BR" == a.tagName ? a.parentNode : a;
  var b = (0,z.si)(a.getBoundingClientRect());
  if ("BODY" == a.tagName || "HTML" == a.tagName) {
    b.top = 0, b.bottom = (0,z.Ad)(window).height;
  }
  return b;
};
z.ui = function(a) {
  If(a.offsetHeight);
};
z.wi = function(a) {
  a = a.tagName;
  return "OL" == a || "UL" == a;
};
z.xi = function(a) {
  return "true" == a.contentEditable || "INPUT" == a.tagName && "text" == a.type || "TEXTAREA" == a.tagName;
};
var yi = function(a, b) {
  (0,z.Rd)(b) ? a.appendChild(b) : (0,z.ia)(b) ? b.forEach(function(b) {
    yi(a, b);
  }) : a.appendChild(window.document.createTextNode(String(b)));
};
var zi = function(a) {
  this.id = a;
  this.Dg = {};
};
var Ai = function(a, b) {
  return "undefined" == typeof b ? !(0,z.yb)(a.Dg) : !!a.Dg[b];
};
z.Bi = function(a, b, c) {
  Ci();
  Di.F(a, b, c);
  return Di;
};
z.Ei = function(a) {
  Fi && Di.clear(a);
};
z.Gi = function(a) {
  Ci();
  var b;
  "string" == typeof a ? b = a : (b = a.getAttribute("data-action-scope"), b || (b = "_actionscope_" + Hi++, a.setAttribute("data-action-scope", b)));
  Ii[b] || (Ii[b] = new zi(b));
  return Ii[b];
};
z.Ji = function(a) {
  a = "string" == typeof a ? a : a instanceof zi ? a.id : a.getAttribute("data-action-scope");
  Ii[a] && (Ii[a].clear(), delete Ii[a]);
};
var Ci = function() {
  Fi || (Fi = !0, (0,z.Q)(window.document.body, "click", Ki), (0,z.Q)(window.document.body, "mousedown", Li), (0,z.Q)(window.document, "keydown", Mi), Di = (0,z.Gi)(window.document.body));
};
var Ni = function(a) {
  return z.ld && !(0,z.hd)(9) ? 1 == a.button : z.ce && z.Oi ? !a.button && !a.ctrlKey : !a.button;
};
var Li = function(a) {
  if (Ni(a)) {
    var b = Pi(a), c = a.target;
    b && !(0,z.$d)(c, z.xi) && a.preventDefault();
  }
};
var Ki = function(a) {
  !Ni(a) || (0,z.$d)(a.target, z.xi) || !Qi(a) || a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (a.preventDefault(), a.stopPropagation());
};
var Mi = function(a) {
  13 == a.keyCode && Qi(a) && a.preventDefault();
};
var Pi = function(a) {
  for (var b = a.target;b && b != window.document;) {
    var c = b.getAttribute("data-action");
    if (c) {
      return{Td:c, target:b, value:b.getAttribute("data-action-value"), event:a, Xn:a.metaKey || a.shiftKey || a.altKey || a.ctrlKey};
    }
    b = b.parentNode;
  }
  return null;
};
var Qi = function(a) {
  return Fi ? (a = Pi(a)) ? Ri(a) : !1 : !1;
};
var Ri = function(a) {
  if (a.target.disabled) {
    return!1;
  }
  for (var b = a.target, c = !1;b && b != window.document;) {
    var d = Ii[b.getAttribute("data-action-scope")];
    if (d) {
      if (d = d.Yc(a)) {
        return!0;
      }
      c = c || !1 === d;
    }
    b = b.parentNode;
  }
  return c;
};
var Si = function() {
  "animation-name" in Ti || (Ti["animation-name"] = {});
  if (!("a" in Ti["animation-name"])) {
    var a = Ti["animation-name"], b;
    "CSS" in window && "supports" in window.CSS ? b = window.CSS.supports("animation-name", "a") ? "native" : window.CSS.supports((0,z.rf)() + "-animation-name", "a") ? "prefixed" : "unsupported" : (b = window.document.createElement("div"), b = (0,z.Ta)("animation-name") in b.style ? "native" : (0,z.qf)() + (0,z.Ua)("animation-name") in b.style ? "prefixed" : "unsupported");
    a.a = b;
  }
  return Ti["animation-name"].a;
};
z.Ui = function(a, b) {
  z.vc.call(this);
  this.pa = a;
  this.yq = (0,z.ia)(b) ? b : [b];
  this.fp = {};
  this.Rs = null;
  (0,z.s)(this, this.pause, this);
  (0,z.Bc)(this, this.OF, this);
};
var Vi = function(a) {
  return "prefixed" == Si() ? (0,z.qf)().toLowerCase() + "Animation" + a.charAt(0).toUpperCase() + a.substr(1) : "animation" + a;
};
z.Wi = function(a, b, c, d) {
  var e = c ? (0,z.Eb)(c) : null;
  a.yq.forEach(function(a) {
    e && !(a.name in e) || d && !d.call(this, a.name) || (a.paused = b);
  }, a);
  Xi(a);
  return a;
};
var Xi = function(a) {
  var b = (0,z.Jb)(a.yq, function(a) {
    a.paused || (this.fp[a.name] = !1);
    return a.paused ? "paused" : "running";
  }, a);
  (0,z.vf)(a.pa, "animationPlayState", b.join(","));
};
var Yi = function() {
  z.v.call(this);
  this.Ce = [];
  this.Cf = {};
};
var Zi = function(a, b, c, d) {
  var e = a.D(b, function(a) {
    c.apply(d, arguments);
    this.Yj(e);
  }, a);
};
var $i = function(a) {
  delete a.Ce;
  delete a.Cf;
  delete a.oo;
};
var aj = function(a) {
  this.wq = a;
  this.Am = {};
};
var bj = function(a) {
  if (cj) {
    for (var b = {}, c = a.ue(), d = 0;d < c.length;d++) {
      b[c[d]] = a.get(c[d]);
    }
    return b;
  }
  return a.Am;
};
var dj = function(a, b) {
  this.Jz = a;
  this.DK = b;
  this.wm = (0,z.ej)() + ":" + String(Math.random()).substr(2);
  this.pb = new aj("MUTEX_" + a);
};
var fj = function(a) {
  var b = String(a.pb.get("Y") || "");
  return "" === b || Number(b.split("|")[1]) < (0,z.ej)() - a.DK;
};
var gj = function(a, b, c) {
  var d;
  try {
    d = b.call(c);
  } finally {
    d instanceof z.vc ? (0,z.Bc)(d, a.wy, a) : a.wy();
  }
};
var hj = function(a, b, c, d) {
  this.ea = a.get("request");
  this.Uc = b;
  this.ip = this.sK = c;
  this.sH = d;
  this.zH = new dj(b, 3E4);
  this.pb = new aj(b);
  this.Uq = null;
  this.Nq = !1;
  this.sF = String(Math.random()).substr(2);
  this.gt = 0;
  (0,z.Q)(window, "beforeunload", this.Ht, this);
  ij(this);
};
var jj = function(a, b) {
  if (!b) {
    throw Error("Client reports a null stat");
  }
  a.gt = (a.gt + 1) % a.sH;
  a.pb.put(a.sF + "|" + a.gt, b);
  ij(a);
};
var kj = function(a, b) {
  var c = [], d = !1, e;
  for (e in b) {
    b[e] || (d = !0, a.pb.remove(e), delete b[e], /^\d+\|\d+$/.test(e) || c.push(e));
  }
  d && (0 < c.length && (d = Error("Reported stats are null from " + (cj ? "LocalStorage" : "InMemoryStorage")), lj(d, "unrecognizedKeys", c), (0,z.mj)(d)), cj = !1);
};
var ij = function(a) {
  a.Nq || null != a.Uq || (a.Uq = window.setTimeout(a.BA.bind(a), a.ip));
};
var nj = function() {
};
var oj = function() {
};
var pj = function() {
  var a = qj(rj);
  return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest;
};
var qj = function(a) {
  if (!a.BC && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new window.ActiveXObject(d), a.BC = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.BC;
};
var sj = function(a, b, c, d) {
  var e = !1, f = new z.vc(function() {
    e = !0;
    h.abort();
    h.onreadystatechange = z.fa;
  }), h = tj(a, b, c, d, function(a) {
    e || (e = !0, f.Ca(a));
  }, function(a) {
    e || (e = !0, f.be(a));
  });
  return f;
};
var tj = function(a, b, c, d, e, f) {
  d = d || {};
  var h = e || z.fa, k = f || z.fa, l, m = pj();
  try {
    m.open(a, b, !0);
  } catch (q) {
    return k(new uj("Error opening XHR: " + q.message, b, m)), m;
  }
  m.onreadystatechange = function() {
    if (4 == m.readyState) {
      window.clearTimeout(l);
      var a;
      a: {
        switch(m.status) {
          case 200:
          ;
          case 201:
          ;
          case 202:
          ;
          case 204:
          ;
          case 206:
          ;
          case 304:
          ;
          case 1223:
            a = !0;
            break a;
          default:
            a = !1;
        }
      }
      !a && (a = 0 === m.status) && (a = (0,z.Jf)(b)[1] || null, !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
      a ? h(m) : k(new vj(m.status, b, m));
    }
  };
  e = !1;
  if (d.headers) {
    for (var x in d.headers) {
      m.setRequestHeader(x, d.headers[x]);
    }
    e = "Content-Type" in d.headers;
  }
  "POST" != a || e || m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  d.withCredentials && (m.withCredentials = d.withCredentials);
  d.Xw && m.overrideMimeType(d.Xw);
  0 < d.Nx && (l = window.setTimeout(function() {
    m.onreadystatechange = z.fa;
    m.abort();
    k(new wj(b, m));
  }, d.Nx));
  try {
    m.send(c);
  } catch (G) {
    k(new uj("Error sending XHR: " + G.message, b, m));
  }
  return m;
};
var uj = function(a, b, c) {
  z.Aa.call(this, a + ", url\x3d" + b);
  this.url = b;
  this.km = c;
};
var vj = function(a, b, c) {
  uj.call(this, "Request Failed, status\x3d" + a, b, c);
  this.status = a;
};
var wj = function(a, b) {
  uj.call(this, "Request timed out", a, b);
};
var xj = function(a, b) {
  yj[a] = b;
};
var lj = function(a, b, c) {
  a.pm || (a.pm = {});
  a.pm[b] = c;
};
var zj = function(a) {
  if (Aj) {
    throw Error("Guard reporter already configured");
  }
  Aj = a;
};
var Bj = function() {
  var a = window || window, b = a.onerror;
  a.onerror = function(a, d, e) {
    b && b(a, d, e);
    d = String(d).split(/[\/\\]/).pop();
    (0,z.mj)({message:a, fileName:d, SC:e});
    return!0;
  };
};
var Cj = function() {
  var a = tj;
  tj = function(b, c, d, e, f, h) {
    f = f ? Rb.$j(f) : null;
    h = h ? Rb.$j(h) : null;
    return a(b, c, d, e, f, h);
  };
  tj.__originalFn = a;
};
var Dj = function() {
  var a = z.Q;
  z.Q = function(b, c, d, e, f) {
    return a(b, c, Rb.$j(d), e, f);
  };
  z.Q.__originalFn = a;
};
var Ej = function() {
  var a = window.setTimeout;
  window.setTimeout = function(b, c) {
    b = Rb.$j(b);
    return a.call ? a.call(this, b, c) : a(b, c);
  };
  window.setTimeout.__originalFn = a;
};
var Fj = function() {
  var a = window.setInterval;
  window.setInterval = function(b, c) {
    b = Rb.$j(b);
    return a.call ? a.call(this, b, c) : a(b, c);
  };
  window.setInterval.__originalFn = a;
};
z.Gj = function(a) {
  "string" == typeof a && (a = Error(a));
  Hj(a) || (0,z.mj)(a);
};
var Hj = function(a) {
  for (var b = a.message + a.stack, c = 0;c < Ij.length;c++) {
    var d = Ij[c];
    if ("string" == typeof d) {
      if (-1 != b.indexOf(d)) {
        return!0;
      }
    } else {
      if (a instanceof d) {
        return!0;
      }
    }
  }
  return!1;
};
z.mj = function(a) {
  if (!(Hj(a) || 50 < Jj)) {
    Jj++;
    var b = {}, c;
    for (c in yj) {
      b[c] = String(yj[c]);
    }
    if (a.pm) {
      for (c in a.pm) {
        b[c] = String(a.pm[c]);
      }
    }
    a = {message:a.message, name:a.name, lineNumber:a.lineNumber || a.line || "Not available", fileName:a.fileName || a.filename || a.sourceURL || window.location.href, stack:a.stack || "Not available", timestamp:(new Date).getTime(), extra:b};
    Aj ? jj(Aj, a) : Kj.push(a);
  }
};
var Lj = function() {
};
z.Mj = function() {
  Yi.call(this);
  this.jn = [];
};
var Nj = function(a, b) {
  for (var c = 0;c < a.jn.length;c++) {
    if (a.jn[c][0] == b) {
      return a.jn[c][1];
    }
  }
  return null;
};
z.Oj = function() {
  z.Mj.call(this);
  this.Wd = !1;
  this.wa = [];
  this.zq = [];
};
z.Pj = function(a, b, c, d, e) {
  c = b.D(c, d, e || a);
  a.zq.push([b, c]);
};
var Qj = function(a, b) {
  z.Oj.call(this);
  b && this.H();
};
var Rj = function() {
  for (var a = '\x3cul class\x3d"image-washes"\x3e', b = "grey blue yellow teal purple red ".split(" "), c = b.length, d = 0;d < c;d++) {
    a += '\x3cli class\x3d"image-washes-item"\x3e\x3cbutton class\x3d"btn-image-wash" data-action\x3d"wash" data-action-value\x3d"' + (0,z.O)(b[d]) + '"\x3e\x3c/button\x3e\x3c/li\x3e';
  }
  return a + "\x3c/ul\x3e";
};
z.Sj = function() {
  var a;
  a = {};
  return'\x3cdiv class\x3d"upload-feedback" data-action\x3d"dummy"\x3e\x3cdiv class\x3d"upload-feedback-preview"\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback-inner"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e' + (a.hU ? "" : '\x3cbutton data-action\x3d"cancel-upload" class\x3d"btn btn-chromeless btn-light btn-cancel"\x3e\x26#215;\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e";
};
z.Tj = function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-chromeless btn-replace-image ' + (a.Va ? "btn-light" : "") + ' image-controls distraction-free-component" data-action\x3d"pick-image"' + (a.fE ? 'data-tooltip\x3d"' + (0,z.O)(a.fE) + '"' : "") + '\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"screen-reader-text"\x3eUpload an optional image.\x3c/span\x3e\x3c/button\x3e';
};
z.Uj = function(a, b, c) {
  b = "";
  if (a.imageId) {
    var d = c.useragent && c.useragent.isMobile && a.FM ? a.FM : a.width ? a.width : c.deviceWidthImageBucket ? c.deviceWidthImageBucket : c.deviceWidth, e = c.useragent && c.useragent.isMobile && a.EM ? a.EM : a.height ? a.height : Math.round(0.8 * d), f = a.cropType ? a.cropType : "c", d = c.variants.use_retina_images ? Math.round(d * c.devicePixelRatio) : Math.round(d), e = c.variants.use_retina_images ? Math.round(e * c.devicePixelRatio) : Math.round(e);
    b += (0,z.N)(c.miroUrl) + "/";
    switch(a.strategy) {
      case "resample":
        b += "max/" + (0,z.N)(d);
        break;
      case "crop-fixed":
        b += "fit/" + (0,z.N)(f) + "/" + (0,z.N)(d) + "/" + (0,z.N)(e);
        break;
      case "crop-preserve":
        b += "fit/" + (0,z.N)(f) + "/" + (0,z.N)(d) + "/" + (0,z.N)(a.height * d);
        break;
      default:
        b += "proxy";
    }
    b += (a.filter ? "/desat/multiply/" + (0,z.N)(a.filter) + "/overlay/" + (0,z.N)(a.filter) : "") + (a.verticalGradient ? "/gradv/" + (0,z.N)(a.verticalGradient) : "") + (a.darken ? "/darken/" + (0,z.N)(a.darken) : "") + (a.blur ? "/blur/" + (0,z.N)(a.blur) : "") + "/" + (0,z.N)(a.imageId);
  }
  return b;
};
z.Vj = function(a, b) {
  var c = "", d = a.Tw ? (0,z.Wj)(a, 0, b) : (0,z.fk)(a, 0, b), e = a.Tw ? (0,z.Wj)((0,z.K)(a, {Xh:!0}), 0, b) : (0,z.fk)((0,z.K)(a, {Xh:!0}), 0, b);
  return c += '\x3ccanvas class\x3d"canvas-renderer"\x3e\x3c/canvas\x3e\x3cdiv class\x3d"image-' + (0,z.O)(a.size) + '-bleed"' + (d && e ? 'data-scroll\x3d"blur-cover" data-image-url\x3d"' + (0,z.O)((0,z.P)(d)) + '" data-image-blur-url\x3d"' + (0,z.O)((0,z.P)(e)) + '"' : "") + '\x3e\x3cdiv class\x3d"image-src picker-target"' + (d ? "style\x3d\"background-image: url('" + (0,z.O)((0,z.P)(d)) + "')\"" : "") + "\x3e\x3c/div\x3e\x3c/div\x3e";
};
z.Wj = function(a, b, c) {
  return(0,z.Uj)((0,z.K)(a.image, {strategy:"crop-fixed", darken:a.Xh ? 50 : 25, verticalGradient:a.Xh ? "29/81/40" : "29/81/60", blur:a.Xh ? 50 : null}), 0, c);
};
z.fk = function(a, b, c) {
  return(0,z.Uj)((0,z.K)(a.image, {strategy:"crop-fixed", darken:a.Xh ? 25 : 0, verticalGradient:a.Xh ? "29/81/40" : "29/81/30", blur:a.Xh ? 50 : null}), 0, c);
};
var gk = function(a, b) {
  return hk(a) + (!a.post.latestPublishedVersion && a.post.creatorId == b.currentUser.userId && b.supportsEdit ? "/edit" : "");
};
var hk = function(a) {
  var b = a.post.id || a.post.postId;
  return a = "" + ("/" + (a.zc ? (0,z.N)(a.zc) : a.collection ? (0,z.N)(a.collection.slug) : a.post.homeCollection ? (0,z.N)(a.post.homeCollection.slug) : "@" + (0,z.N)(a.post.creator.username)) + "/" + (0,z.N)(b));
};
z.ik = function(a) {
  return a.user.userId ? "/@" + (0,z.N)(a.user.username) : "/m/errors/404";
};
var jk = function(a, b, c) {
  b = "";
  var d = a.imageId ? (0,z.Uj)({imageId:a.imageId, strategy:"crop-fixed", width:"150", height:"150", cropType:"t"}, 0, c) : "https:" + (0,z.N)(c.defaultPreviewImage);
  return b += "https://www.facebook.com/dialog/feed? app_id\x3d" + Dh(c.facebookKey) + "\x26 link\x3d" + Dh(a.url) + "\x26 name\x3d" + Dh(a.title) + "\x26 display\x3dpopup\x26 picture\x3d" + Dh(d) + "\x26 caption\x3d" + Dh(a.caption) + "\x26 description\x3d" + Dh(a.description) + "\x26 redirect_uri\x3d" + Dh(a.ZM);
};
var kk = function(a) {
  this.ca = a;
  this.ia = a.get("app");
  this.U = a.get("dialog");
  this.xp = a.get("gestures");
  this.la = a.get("datastore").Cb[lk];
  this.$ = "";
  this.sz = (0,z.Q)(window.document.body, "keyup", this.ru, this);
  this.xp.D("flickleft", this.Wz, this);
  this.xp.D("flickright", this.Xz, this);
  (0,window.setTimeout)(this.uA.bind(this), 3E3);
};
var mk = function(a) {
  (0,z.r)(a.vf(), function(a) {
    a ? (this.$ = a.get("id"), a = (0,z.I)(hk, {post:a.ab()}), (0,z.r)(this.ia.navigate(a, {Ko:this.IK.bind(this)}), this.uA, this)) : this.U.open({title:"No more posts", bodyHtml:"You have come to the end of your PRL", type:z.nk});
  }, a);
};
z.ok = function(a) {
  z.Mj.call(this);
  this.pb = a || {};
  this.rt = {};
};
z.pk = function(a, b) {
  var c = a.get(b);
  return null != c ? String(c) : "";
};
z.qk = function(a, b) {
  var c = a.get(b);
  return null != c ? Number(c) : 0;
};
z.rk = function(a) {
  a.S("remove", a);
};
z.sk = function(a) {
  z.Mj.call(this);
  this.Ra = a || [];
  this.YC = {};
};
z.tk = function(a, b) {
  return a.Ra[b] || null;
};
z.uk = function(a, b, c) {
  return a.find(function(a) {
    return a.get(b) === c;
  });
};
var vk = function(a, b) {
  for (var c = 0;c < a.Ra.length;c++) {
    if (a.Ra[c].get("id") === b) {
      return c;
    }
  }
  return-1;
};
var wk = function(a, b) {
  b.D("change", a.bA, a);
  b.D("remove", a.dA, a);
};
var xk = function(a, b) {
  b.ya("change", a.bA, a);
  b.ya("remove", a.dA, a);
};
var yk = function(a) {
  z.sk.call(this);
  this.ls = a.get("request");
  this.Bc = (0,z.s)(new z.vc, z.mj);
  this.pp = 0;
};
var zk = function(a, b) {
  var c = a.Vg(b);
  if (null != c && !Array.isArray(c)) {
    throw Error("Malformed processed response");
  }
  return c;
};
var Ak = function(a) {
  return a.zl && !a.Bc.Mc;
};
z.Bk = function(a) {
  if (!a.zl) {
    var b = (0,z.Bc)((0,z.s)((0,z.r)(a.ls.send(a.Cp, Ck(a, a.Ot), a.Ot, {na:!0, background:!0}), a.NM, a), a.iD, a), a.DD, a);
    a.Bc = a.mj(b);
    a.zl = !0;
  }
  return Dk(a, a.Bc);
};
var Ek = function(a, b, c) {
  if (!a.Gi) {
    return Dk(a, a.Bc);
  }
  a.pp = Math.max(a.pp, b + a.count());
  Ak(a) ? (0,z.Bc)(a.Bc, a.Qy, a) : a.Qy(!!c);
  return Dk(a, a.Bc);
};
var Dk = function(a, b) {
  return(0,z.r)(b.Bb(), function() {
    return this;
  }, a);
};
z.Fk = function(a, b) {
  yk.call(this, a);
  this.Uc = b;
  this.Ot = null;
  this.Ry = Gk;
};
var Gk = function(a) {
  return{count:a, ignore:(0,z.Jb)(this.Ra, function(a) {
    return a.get("id");
  })};
};
var Ck = function(a, b) {
  var c = a.Uc;
  "GET" == a.Cp && b && (c += -1 == c.indexOf("?") ? "?" : "\x26", c += ag(b));
  return c;
};
z.Hk = function(a, b) {
  var c = a.name;
  Ik(["_trackEvent", "Event", c]);
  Jk(["record", c, (0,z.zb)(b)]);
  Kk(a, b);
};
var Lk = function(a, b) {
  Mk[a] = b;
};
var Kk = function(a, b) {
  var c = a.name, d;
  for (d in Mk) {
    var e = Mk[d];
    b[d] = "function" == typeof e ? e() : e;
  }
  Nk({type:"e", key:c, data:b});
};
z.Ok = function(a) {
  Nk({type:"i", key:"string" === typeof a ? a : a.name});
};
z.Pk = function(a, b) {
  b = Math.max(0, b);
  3E4 < b || Nk({type:"t", key:a, value:b});
};
var Nk = function(a) {
  a.timestamp = Date.now();
  a.eventId = Date.now().toString(36) + Math.round(1E16 * Math.random()).toString(36);
  jj(Qk, a);
};
var Rk = function(a) {
  Qk = a;
};
var Ik = function(a) {
  (0,z.H)("variants.dont_track_user") || window._gaq && window._gaq.push(a);
};
var Jk = function(a) {
  if (!(0,z.H)("variants.dont_track_user") && window._kmq) {
    var b = Mk.userId;
    if (!(0,z.H)("variants.dont_track_user")) {
      var c = window.KM, d = window._kmq;
      c && d && (d = c.i(), b && d && d !== b && c.alias(d, b));
    }
    window._kmq.push(a);
  }
};
z.Sk = function(a, b, c) {
  var d;
  a: {
    switch(a) {
      case 1:
        d = "page-type";
        break a;
      case 2:
        d = "user";
        break a;
    }
    d = "unknown";
  }
  Ik(["_setCustomVar", a, d, b, c || 3]);
};
var Tk = function(a) {
  this.ca = a;
  this.oe = a.get("request");
  this.Hk = {};
  this.qg = {};
  this.Cb = {};
  this.bt = {};
  this.lt = null;
};
z.Uk = function(a, b) {
  if (!Vk(b)) {
    var c = Error("An unpopulated object was sent in to upsertPostMeta");
    lj(c, "post", b);
    (0,z.mj)(c);
  }
  c = b.id;
  if (!c) {
    throw Error("Upserted data without id");
  }
  var d = a.Hk[c];
  d ? d.ri(b) : (d = new z.ok(b), a.Hk[c] = d);
  return d;
};
var Wk = function(a, b, c) {
  if (a.bt[b]) {
    throw Error("Collection list already exists with id\x3d" + b);
  }
  c = new Xk(a.ca, c);
  c.Vg = Yk;
  return a.bt[b] = c;
};
z.Zk = function(a, b, c, d) {
  if (a.Cb[b]) {
    throw Error("Post list already exists with id\x3d" + b);
  }
  c = new $k(a.ca, c);
  c.Cp = d.toUpperCase();
  c.ts("id", b);
  c.Vg = Yk;
  return a.Cb[b] = c;
};
var al = function(a, b, c) {
  var d = c || "recommended";
  c = b + ":" + d + ":" + (0,z.bl)();
  d = cl.Q({collectionSlug:b}, {sortBy:d});
  a = (0,z.Zk)(a, c, d, "POST");
  a.ts("preferredCollection", b);
  return a;
};
z.dl = function(a, b) {
  if (!Vk(b)) {
    var c = Error("An unpopulated object was sent in to upsertCollectionMeta");
    lj(c, "collection", b);
    (0,z.mj)(c);
  }
  var c = b.slug, d = a.qg[c];
  d ? d.ri(b) : (d = new z.ok(b), a.qg[c] = d);
  return d;
};
z.bl = function() {
  var a = Math.round(1E3 * Math.random());
  return(0,z.ej)() - el + "." + a;
};
var Yk = function(a) {
  var b = a;
  a.value && (b = (0,z.fl)(a.value, a.references));
  if (Array.isArray(b) || null == b) {
    return b;
  }
  (0,z.Gj)("Malformed server response " + JSON.stringify(b));
  return null;
};
var $k = function(a, b) {
  z.Fk.call(this, a, b);
  this.da = a.get("datastore");
};
var Xk = function(a, b) {
  z.Fk.call(this, a, b);
  this.da = a.get("datastore");
};
z.gl = function(a) {
  this.zh = a;
};
z.hl = function(a, b) {
  for (var c = (0,z.Zg)(a.pk(), b), c = c ? c.ra() : 0;b >= c && 7 == a.Sh(b);) {
    b--;
  }
  return b;
};
z.il = function(a, b) {
  for (var c = Yg(a.pk(), b), d = a.mh().length, c = -1 == c ? d : (0,z.ah)(a.pk(), c, d), d = b + 1;d <= c && 7 == a.Sh(d);) {
    d++;
  }
  return d;
};
var jl = function(a) {
  for (var b = a.mh(), c = {}, d = 0;d < b.length;d++) {
    d in c || (0,z.kl)(a, d, c);
  }
  return c;
};
z.kl = function(a, b, c) {
  var d = (0,z.hl)(a, b);
  b = (0,z.il)(a, b);
  a = a.mh();
  if (a[d]) {
    if (6 != Hg(a[d])) {
      for (a = d;a < b;a++) {
        c[a] = null;
      }
    } else {
      b = a.slice(d, b).map(function(a) {
        var b = a.getMetadata();
        a = b && b.Th() || 0;
        b = b && b.ql() || 0;
        return ll(a, b);
      });
      var e = b.reduce(function(a, b) {
        return a + b;
      }, 0);
      for (a = 0;a < b.length;a++) {
        c[d + a] = ll(100 * b[a], e);
      }
    }
  }
};
var ml = function() {
  F.call(this);
};
var nl = function() {
  F.call(this);
};
var ol = function() {
  F.call(this);
};
var pl = function() {
  F.call(this);
};
var ql = function() {
  F.call(this);
};
var rl = function() {
  F.call(this);
};
var sl = function() {
  F.call(this);
};
var tl = function() {
  F.call(this);
};
var ul = function() {
  F.call(this);
};
var vl = function() {
  F.call(this);
};
z.wl = function() {
  F.call(this);
};
var xl = function() {
  F.call(this);
};
var yl = function() {
  F.call(this);
};
var zl = function(a) {
  this.delta = a;
  this.Mk = this.selection = this.hj = null;
  this.MC = !1;
};
var Al = function(a, b, c) {
  z.Bl[a] = b;
  Cl[a] = c;
};
z.Dl = function(a) {
  return(new z.Bl[a]).Hb(a);
};
z.El = function(a) {
  return new (Cl[a.g()])(a);
};
var Fl = function(a) {
  var b = a.ml();
  if (b) {
    return b;
  }
  b = new z.Cg;
  a.Yl(b);
  return b;
};
var Gl = function(a) {
  a = Fl(a);
  var b = a.pc();
  if (b) {
    return b;
  }
  b = [];
  (0,z.Dg)(a, b);
  return b;
};
var Hl = function(a) {
  a = Fl(a);
  var b = a.ec();
  if (b) {
    return b;
  }
  b = [];
  (0,z.Eg)(a, b);
  return b;
};
z.Il = function(a, b) {
  var c = a.Re(b);
  a.Mk || (a.Mk = c);
};
var Jl = function(a) {
  return this.delta.g() == a.delta.g() ? Kl(this, a) : null;
};
var Ll = function(a) {
  return this.delta.g() == a.delta.g() && this.delta.Eb() == a.delta.Eb() ? Kl(this, a) : null;
};
var Kl = function(a, b) {
  var c = (0,z.El)(z.Ml.ja(b.delta));
  c.Mk = a.Mk && z.Ml.ja(a.Mk);
  c.selection = b.selection;
  return c;
};
var Nl = function() {
  throw Error("Playback of this revision invalid");
};
z.Ol = function() {
  F.call(this);
};
z.Pl = function() {
  F.call(this);
};
z.Ql = function() {
  F.call(this);
};
z.Rl = function() {
  F.call(this);
};
z.Sl = function() {
  F.call(this);
};
z.Tl = function(a, b) {
  z.Ml.ja(a);
  this.lc = [];
  this.xk = b ? a : z.Ml.ja(a);
  this.Uu = [];
  this.Ei = null;
  this.ku = -1;
};
z.Ul = function(a) {
  return a.xk.ml();
};
z.Vl = function(a, b) {
  var c = (0,z.El)(z.Ml.ja(b)), d = (0,z.Xa)(a.lc);
  d && !d.selection && (d = d.Rg(c)) && (a.lc.pop(), c = d);
  (0,z.Il)(c, a.xk);
  c.hj = (0,z.ej)();
  a.lc.push(c);
  a.Uu.length = 0;
  a.Ei && a.Ei.call(null, z.Ml.ja(c.delta));
};
var Wl = function(a) {
  zl.call(this, a);
};
var Xl = function(a) {
  zl.call(this, a);
};
var Yl = function(a) {
  zl.call(this, a);
};
var Zl = function(a) {
  zl.call(this, a);
};
var $l = function(a) {
  zl.call(this, a);
};
var am = function(a) {
  zl.call(this, a);
};
var bm = function(a) {
  zl.call(this, a);
};
var cm = function(a) {
  zl.call(this, a);
};
var dm = function(a) {
  zl.call(this, a);
};
var em = function(a) {
  zl.call(this, a);
};
var fm = function(a) {
  zl.call(this, a);
};
var gm = function(a) {
  zl.call(this, a);
};
var hm = function(a, b, c) {
  b.g();
  var d = (0,z.ig)(a, c);
  (0,z.A)(a, c, b.qc());
  return(0,z.Dl)(b.g()).lg(d);
};
z.im = function(a) {
  return a.content ? a.content.bodyModel ? z.Ml.ub(z.Cg, a.content.bodyModel) : null : null;
};
z.jm = function(a) {
  return(new z.Wg).Yl(a);
};
z.km = function(a, b) {
  var c = (0,z.jm)(a), c = new z.Tl(c, !0), d = null, e = a.ec() || [], f = a.pc() || [];
  b.hC && (d = {}, e.concat(f).forEach(function(a) {
    d[a.getName()] = !0;
  }));
  lm(c, d);
  mm(c, d, !!b.kL);
  nm(c);
  (0,z.om)(c);
  b.pE || pm(c);
  return c.Hr(0);
};
z.om = function(a, b) {
  for (var c = !1, d = (0,z.Ul)(a).pc() || [], e = b && b.start || 0, f = Math.min(b && (0,z.na)(b.end) ? b.end : window.Infinity, d.length);e < f;e++) {
    var h = d[e], k = d[e + 1], l = Hg(h);
    7 == l ? c || (k = (c = k && 7 == Hg(k)) ? 6 : 3, (0,z.Vl)(a, (0,z.Dl)(3).kb(e).jg(Ig(h.ja(), k)))) : 6 == l ? (c = !0, k && 7 == Hg(k) || (0,z.Vl)(a, (0,z.Dl)(3).kb(e).jg(Ig(h.ja(), 3)))) : c = !1;
  }
};
var nm = function(a) {
  var b = (0,z.Ul)(a);
  b.ec();
  for (var b = b.pc() || [], c = 0, d = null, e = !1, f = null;d = b[c];) {
    if (5 == d.g()) {
      e = !0, f = d.getName(), (0,z.Vl)(a, (0,z.Dl)(2).kb(c));
    } else {
      if (e) {
        var d = a, e = c, h = (0,z.Ul)(d).ec() || [], k = e, l = (0,z.Zg)(h, k);
        l && l.ra() == k || (h = Yg(h, e), e = (new z.Og).Sd(e), f && e.Wa(f), (0,z.Vl)(d, (0,z.Dl)(8).kb(h + 1).kg(e)));
      }
      e = !1;
      f = null;
      c++;
    }
  }
};
var pm = function(a) {
  for (var b = (0,z.Ul)(a).ec() || [], c = 0;c < b.length;c++) {
    var d = b[c];
    if (2 == (0,z.Sg)(d)) {
      var e = d.ra(), f = (0,z.Pg)(d), d = (new z.Og).Sd(e).Wa(d.getName()), f = (0,z.Gg)(Ig((new Fg).Hb(4), 1).uc(f), []);
      (0,z.Vl)(a, (0,z.Dl)(1).kb(e).jg(f));
      (0,z.Vl)(a, (0,z.Dl)(10).kb(c).kg(d));
    }
  }
};
var mm = function(a, b, c) {
  ((0,z.Ul)(a).pc() || []).length || (c = new z.qm("", c ? 2 : 1, ""), b && (0,z.rm)(c, b), (0,z.Vl)(a, (0,z.Dl)(1).kb(0).jg(c.ub())));
};
var lm = function(a, b) {
  var c = (0,z.Ul)(a), d = c.ec() || [];
  d.length || (d = (new z.Og).Sd(0), b && (0,z.sm)(d, b), (0,z.Vl)(a, (0,z.Dl)(8).kb(0).kg(d)), d = c.ec());
  0 != d[0].ra() && ((0,z.Vl)(a, (0,z.Dl)(10).kb(0).kg(d[0].ja().Sd(0))), d = c.ec());
  for (var e = 1;e < d.length;e++) {
    var f = d[e - 1];
    d[e].ra() == f.ra() && ((0,z.Vl)(a, (0,z.Dl)(9).kb(e)), d = c.ec(), e--);
  }
};
z.sm = function(a, b) {
  a.getName() ? b[a.getName()] = !0 : a.Wa(tm(b));
};
var tm = function(a) {
  var b;
  do {
    b = Math.round(65535 * Math.random()).toString(16), b = Array(4 - b.length + 1).join("0") + b;
  } while (a[b]);
  a[b] = !0;
  return b;
};
z.qm = function(a, b, c) {
  this.name = a || "";
  this.type = b;
  this.text = c;
  this.alignment = 1;
  this.hasDropCap = !1;
  this.Ab = [];
};
z.rm = function(a, b) {
  a.name ? b[a.name] = !0 : a.name = tm(b);
};
z.um = function(a) {
  var b = null, b = 4 == a.g() ? new z.vm(a.getName(), a.qc(), Hg(a), a.getMetadata()) : 11 == a.g() ? new wm(a.getName(), a.qc(), (0,z.y)(a, "iframe"), Hg(a)) : new z.qm(a.getName(), a.g(), a.qc());
  b.alignment = (0,z.y)(a, "alignment");
  b.hasDropCap = (0,z.y)(a, "hasDropCap");
  if (a = (0,z.y)(a, "markups")) {
    for (var c = 0;c < a.length;c++) {
      (0,z.xm)(b, a[c]);
    }
  }
  return b;
};
z.ym = function(a, b) {
  a.Ab = (0,z.Rc)(a.Ab, function(a) {
    return a.g() != b;
  });
};
z.zm = function(a, b) {
  for (var c = 0;c < a.Ab.length;c++) {
    var d = a.Ab[c];
    3 == d.g() && b(d);
  }
};
z.xm = function(a, b) {
  for (var c = a.Ab, d = 0;d < c.length;d++) {
    var e = c[d], f, h = e;
    f = b;
    if (h.g() != f.g()) {
      f = null;
    } else {
      if (h.Lb(f)) {
        f = h;
      } else {
        if (3 == h.g()) {
          var k = h.uf() == f.uf() && h.nb() == f.nb() && (0,z.y)(h, "rel") == (0,z.y)(f, "rel");
          f = (0,z.Am)(h, (0,z.Mg)(f), k) || (0,z.Am)(h, k ? (0,z.Ng)(f) : (0,z.Ng)(f) - 1, k) || (0,z.Am)(f, (0,z.Mg)(h), k) ? k ? (0,z.Bm)(Math.min((0,z.Mg)(h), (0,z.Mg)(f)), Math.max((0,z.Ng)(h), (0,z.Ng)(f)), h.uf(), h.nb(), (0,z.y)(h, "rel")) : f : null;
        } else {
          f = 4 == h.g() ? h.getName() == f.getName() ? (0,z.Cm)(Math.min((0,z.Mg)(h), (0,z.Mg)(f)), Math.max((0,z.Ng)(h), (0,z.Ng)(f)), h.getName()) : null : (0,z.Am)(h, (0,z.Mg)(f), !0) || (0,z.Am)(h, (0,z.Ng)(f), !0) || (0,z.Am)(f, (0,z.Mg)(h), !0) ? (0,z.Dm)(h.g(), Math.min((0,z.Mg)(h), (0,z.Mg)(f)), Math.max((0,z.Ng)(h), (0,z.Ng)(f))) : null;
        }
      }
    }
    if (f) {
      if (f == e || f.Lb(e)) {
        return!1;
      }
      db.splice.call(c, d, 1);
      b = f;
      d = -1;
    }
  }
  var c = a.Ab, d = b, l, e = Em || z.jb;
  f = 0;
  for (h = c.length;f < h;) {
    var k = f + h >> 1, m;
    m = e(d, c[k]);
    0 < m ? f = k + 1 : (h = k, l = !m);
  }
  l = l ? f : ~f;
  0 > l && hb(c, -(l + 1), 0, d);
  return!0;
};
z.Fm = function(a, b, c) {
  b = Math.min(b, a.text.length);
  c = Math.min(c, a.text.length);
  var d = c - b;
  a.text = a.text.substring(0, b) + a.text.substring(c);
  c = a.Ab;
  for (var e = 0;e < c.length;e++) {
    var f = c[e];
    (0,z.Mg)(f) >= b && f.setStart(Math.max((0,z.Mg)(f) - d, b));
    (0,z.Ng)(f) >= b && f.setEnd(Math.max((0,z.Ng)(f) - d, b));
  }
  (0,z.Gm)(a);
};
z.Gm = function(a) {
  a.Ab = (0,z.Rc)(a.Ab, function(a) {
    return(0,z.Ng)(a) > (0,z.Mg)(a);
  });
};
var Hm = function(a) {
  var b = {0:!0};
  b[a.text.length] = !0;
  a = a.Ab;
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    b[(0,z.Mg)(d)] = !0;
    b[(0,z.Ng)(d)] = !0;
  }
  b = vb(b);
  b = (0,z.Jb)(b, Number);
  b.sort(z.jb);
  return b;
};
var Im = function(a, b) {
  for (var c = a.Ab, d = [], e = 0;e < b.length;e++) {
    var f = b[e], h = [];
    d.push(h);
    for (var k = 0;k < c.length;k++) {
      var l = c[k];
      (0,z.Am)(l, f, !1) && h.push(l);
    }
  }
  return d;
};
z.vm = function(a, b, c, d) {
  z.qm.call(this, a, 4, b);
  this.layout = c;
  this.metadata = d || new z.Jg;
};
var wm = function(a, b, c, d) {
  z.qm.call(this, a, 11, b);
  this.layout = d;
  this.metadata = c;
};
z.Dm = function(a, b, c) {
  return(new z.Lg).Hb(a).setStart(b).setEnd(c);
};
z.Am = function(a, b, c) {
  return b >= (0,z.Mg)(a) && (c ? b <= (0,z.Ng)(a) : b < (0,z.Ng)(a));
};
var Em = function(a, b) {
  var c = Jm[a.g()] - Jm[b.g()];
  if (0 !== c) {
    return c;
  }
  c = (0,z.Mg)(a) - (0,z.Mg)(b);
  if (0 !== c) {
    return c;
  }
  c = (0,z.Ng)(a) - (0,z.Ng)(b);
  return 0 !== c ? c : (0,z.jb)(JSON.stringify(z.Ml.Zc(a)), JSON.stringify(z.Ml.Zc(b)));
};
z.Bm = function(a, b, c, d, e) {
  a = (0,z.Dm)(3, a, b).am(c).bc(d);
  return(0,z.A)(a, "rel", e);
};
z.Cm = function(a, b, c) {
  return(0,z.Dm)(4, a, b).Wa(c);
};
z.Km = function(a) {
  this.zh = a;
};
z.Lm = function(a, b) {
  var c = a.mh();
  if (0 > b || b >= c.length) {
    return!1;
  }
  if ((0,z.Zg)(a.pk(), b).ra() === b) {
    return!0;
  }
  var d = a.Sh(b - 1), e = a.Sh(b);
  if (d != e) {
    return!0;
  }
  if ("sectionLayout--outsetRow" != e) {
    return!1;
  }
  c = c[b];
  return!!c && 6 == Hg(c);
};
z.Mm = function(a, b) {
  var c = a.Sh(b), d = {layout:c};
  if ("sectionLayout--outsetRow" == c) {
    var c = b, e = a.mh();
    do {
      c++;
    } while (c < e.length && !(0,z.Lm)(a, c));
    d.es = c - (0,z.Nm)(a, b);
  }
  return d;
};
z.Nm = function(a, b) {
  for (;b && !(0,z.Lm)(a, b);) {
    b--;
  }
  return b;
};
z.Om = function() {
  return "Type caption for image (optional)";
};
z.Pm = function() {
  return "Type caption for embed (optional)";
};
z.bn = function(a, b, c) {
  b = a.backgroundImage && a.backgroundImage.id;
  return a = "" + ("\x3csection" + (a.name ? ' name\x3d"' + (0,z.O)(a.name) + '"' : "") + (a.textLayout || a.imageLayout || a.Od || a.oE || a.qE ? ' class\x3d"' + (a.Od ? "active-section" : "") + (a.textLayout ? " " + (0,z.O)(a.textLayout) : "") + (a.imageLayout ? " " + (0,z.O)(a.imageLayout) : "") + (a.oE ? " section-first" : "") + (a.qE ? " section-last" : "") + '"' : "") + (a.backgroundColor && "default" != a.backgroundColor ? ' data-background-color\x3d"' + (0,z.O)(a.backgroundColor) + '"' : 
  "") + "\x3e" + (b && "section-image-right" != a.imageLayout ? cn(a, c) : "") + (b || a.backgroundColor && "default" != a.backgroundColor || a.iU ? "" : '\x3cdiv class\x3d"section-divider layout-single-column"\x3e\x3chr class\x3d"section-divider"\x3e\x3c/div\x3e'));
};
z.dn = function(a, b, c) {
  return(a.backgroundImage && a.backgroundImage.id && "section-image-right" == a.imageLayout ? cn(a, c) : "") + "\x3c/section\x3e";
};
z.en = function(a) {
  return'\x3cdiv class\x3d"section-inner ' + (0,z.O)(a.layout) + '"' + (a.es ? ' data-paragraph-count\x3d"' + (0,z.O)(a.es) + '"' : "") + "\x3e";
};
var cn = function(a, b) {
  var c = '\x3cdiv class\x3d"section-background' + (a.hasFocus ? " media-has-focus" : "") + '"' + ("section-image-full" == a.imageLayout ? ' data-scroll\x3d"post-section"' : ""), d = a.backgroundImage, e = d.id || d.imageId, d = "" + ((e ? ' data-image-id\x3d"' + (0,z.O)(e) + '"' : "") + (d.originalWidth ? ' data-width\x3d"' + (0,z.O)(d.originalWidth) + '"' : "") + (d.originalHeight ? ' data-height\x3d"' + (0,z.O)(d.originalHeight) + '"' : "") + (d.filter ? ' data-filter\x3d"' + (0,z.O)(d.filter) + 
  '"' : "") + (d.backgroundSize ? ' data-image-style\x3d"' + (0,z.O)(d.backgroundSize) + '"' : "")), c = c + d + "\x3e", c = "section-image-full" == a.imageLayout ? c + ('\x3cdiv class\x3d"section-background-image" style\x3d"background-image: url(' + (0,z.O)((0,z.P)(b.miroUrl)) + "/max/" + (0,z.O)("700".replace(Fh, Gh)) + "/gradv/29/81/40/" + (0,z.O)(String(a.backgroundImage.id).replace(Fh, Gh)) + ');"\x3e\x3c/div\x3e\x3cbr\x3e') : "section-image-left" == a.imageLayout || "section-image-right" == 
  a.imageLayout ? c + ('\x3cimg src\x3d"' + (0,z.O)((0,z.P)(b.miroUrl)) + "/max/" + (0,z.O)(b.postColumnWidth) + "/multiply/grey/" + (0,z.O)(a.backgroundImage.id) + '"\x3e') : c + "\x3cbr\x3e";
  return c + "\x3c/div\x3e";
};
var fn = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    (0,z.zm)(a[c], function(a) {
      a.uf() && a.am((0,z.Zh)(a.uf(), b));
    });
  }
};
z.gn = function(a, b) {
  var c = z.wg, d = (0,z.im)(a);
  return d ? (0,z.hn)(d, c, {rf:!0, isPublished:a.isPublished, media:a.media, sections:!0, li:b, Lh:!0, kf:!0}) : "";
};
z.hn = function(a, b, c) {
  c.Lh || (a = a.ja());
  (0,z.km)(a, {pE:!!b.useragent.supportsFullImageSections, hC:!1});
  for (var d = c.isPublished, e = a.pc() || [], f = [], h = 0;h < e.length;h++) {
    f[h] = (0,z.um)(e[h]);
    var k = f[h];
    (0,z.ym)(k, 4);
    (0,z.ym)(k, 5);
  }
  fn(f, !d);
  d = new z.gl(a);
  e = [];
  h = c.sections ? a.ec() : [(new z.Og).Sd(0)];
  for (k = 0;k < h.length;k++) {
    e.push(jn(k, a, f, jl(d), b, c));
  }
  return e.join("");
};
var jn = function(a, b, c, d, e, f) {
  var h = new z.Km(b), k = b.ec(), l = k[a];
  b = l.ra();
  a = (0,z.ah)(k, a, c.length);
  if (l.ra() >= a) {
    return "";
  }
  k = 0 == l.ra();
  l = (0,z.kn)(l, f, k, a == c.length);
  k = [];
  f.sections && k.push((0,z.bn)(l, 0, e));
  for (var m = null, q = b;q < a;q++) {
    var x = c[q];
    f.sections && (0,z.Lm)(h, q) && (m && k.push("\x3c/div\x3e"), k.push(ln((0,z.Mm)(h, q))));
    m && m.type == x.type || (m && k.push(mn(m)), k.push(nn(x)));
    k.push((0,z.on)(x, e, f, {Iv:!0, ms:d[q], KC:q == b, di:q == a - 1}));
    m = x;
  }
  m && k.push(mn(m));
  m && f.sections && k.push("\x3c/div\x3e");
  f.sections && k.push((0,z.dn)(l, 0, e));
  return k.join("");
};
z.on = function(a, b, c, d) {
  var e = d || pn, f = a.type, h = [];
  7 == f && h.push("pullquote");
  if (a.layout) {
    var k = qn(a.layout);
    k && h.push(k);
  }
  null != e.ms && h.push("is-partialWidth");
  e.KC && c.kf && h.push("paragraph-first");
  e.di && c.kf && h.push("paragraph-last");
  k = "";
  c.rf || (4 == f || 11 == f ? k += rn("tabindex", "0") + rn("contenteditable", "false") : 5 == f && (k += rn("contenteditable", "false")));
  a.name && (k += rn("name", a.name));
  h.length && (k += rn("class", h.join(" ")));
  a.alignment && 1 != a.alignment && (k += rn("data-align", sn[a.alignment]));
  a.hasDropCap && (k += rn("data-has-drop-cap"));
  null != e.ms && (k += rn("style", "width: " + e.ms + "%;"));
  f = tn(a);
  return(e.Iv ? "" : nn(a)) + "\x3c" + f + k + "\x3e" + (0,z.un)(a, b, c) + (5 == a.type ? "" : "\x3c/" + tn(a) + "\x3e" + ((d || pn).Iv ? "" : mn(a)));
};
z.un = function(a, b, c) {
  var d = c.rf, e = Hm(a), f = Im(a, e), h = 4 == a.type, k = 11 == a.type, l = "";
  if (h) {
    if (l = vn(a, b, c) + wn(a, d), !xn(a, d)) {
      return l;
    }
  } else {
    if (k) {
      if (l = yn(a, b) + wn(a, d), !xn(a, d)) {
        return l;
      }
    } else {
      if (5 == a.type) {
        return "";
      }
    }
  }
  b = a.text.replace(/ — /g, " — ");
  for (var m = [], q = 0;q < e.length;q++) {
    for (var x = 0 === q, G = q == e.length - 2, M = e[q], Ba = f[q], Fb = 0;Fb < Ba.length;Fb++) {
      var mb = Ba[Fb];
      if (m[Fb] != mb) {
        for (;m.length > Fb;) {
          l += zn(m.pop());
        }
        var Tg = An(mb, a, c);
        Tg && (l += Tg, m.push(mb));
      }
    }
    for (;m.length > Fb;) {
      l += zn(m.pop());
    }
    Ba = b.substring(M, e[q + 1] || b.length);
    a.hasDropCap && Ba && 0 === M && (l += Bn(Ba[0], d), Ba = Ba.slice(1));
    var vi = Ba.split("\n"), l = l + (0,z.Jb)(vi, function(b, c) {
      var d = (0,z.Ga)(b);
      8 != a.type && (Cn(d.charAt(0)) && (x || 0 !== c) && (d = " " + d.substring(1)), Cn(d.charAt(d.length - 1)) && (G || c != vi.length - 1) && (d = d.substring(0, d.length - 1) + " "));
      return d;
    }).join("\x3cbr\x3e"), M = G && 1 < vi.length && "" === (0,z.Xa)(vi), Ba = !b;
    5 != a.type && (M || Ba) && (l += "\x3cbr\x3e");
  }
  if (h || k) {
    l += "\x3c/figcaption\x3e";
  }
  return l;
};
var Cn = function(a) {
  return " " === a || " " === a;
};
var vn = function(a, b, c) {
  var d = a.metadata, e = a.layout, f = d && d.originalWidth || 0, h = d && d.originalHeight || 0;
  a = Dn(b, f, h, a);
  f = ll(h, f);
  if (h = d) {
    if (h = d.id) {
      var h = d.id, k = (0,z.$h)(e);
      b.variants.use_retina_images && (k *= b.devicePixelRatio);
      k = ug(k || 1200, Bg, 200, !0);
      h = b.miroUrl + "/max/" + k + "/" + h;
    }
  }
  b = h;
  c = !c.rf || 5 == e || a && d.originalWidth <= a.width;
  d = d ? z.Ml.Zc(d) : {};
  a = '\x3cdiv class\x3d"aspect-ratio-placeholder' + (f ? " aspect-ratio-locked" : "") + '"' + (f && a ? ' style\x3d"max-width: ' + (0,z.O)(Ph(a.width)) + "px; max-height: " + (0,z.O)(Ph(a.height)) + 'px;"' : "") + "\x3e" + (f ? '\x3cdiv class\x3d"aspect-ratio-fill" style\x3d"padding-bottom: ' + (0,z.O)(Ph(100 * f)) + '%;"\x3e\x3c/div\x3e' : "") + "\x3cimg";
  e = d.id || d.imageId;
  e = "" + ((e ? ' data-image-id\x3d"' + (0,z.O)(e) + '"' : "") + (d.originalWidth ? ' data-width\x3d"' + (0,z.O)(d.originalWidth) + '"' : "") + (d.originalHeight ? ' data-height\x3d"' + (0,z.O)(d.originalHeight) + '"' : "") + (d.filter ? ' data-filter\x3d"' + (0,z.O)(d.filter) + '"' : "") + (d.backgroundSize ? ' data-image-style\x3d"' + (0,z.O)(d.backgroundSize) + '"' : ""));
  return a + e + (c ? "" : ' data-action\x3d"zoom" data-action-value\x3d"' + (0,z.O)(d.id) + '"') + (b ? ' src\x3d"' + (0,z.O)((0,z.P)(b)) + '"' : "") + "\x3e\x3c/div\x3e";
};
var wn = function(a, b) {
  if (!xn(a, b)) {
    return "";
  }
  var c = '\x3cfigcaption class\x3d"image-caption"';
  if (!b) {
    var d = 4 == a.type ? (0,z.Om)() : 11 == a.type ? (0,z.Pm)() : "", c = c + (rn("contenteditable", "true") + rn("data-default-value", d))
  }
  return c + "\x3e";
};
var yn = function(a, b) {
  var c = a.metadata;
  if (!c || !c.Rn()) {
    return "";
  }
  var d = c.Ir() || En.width, e = c.vw() || En.height, d = Dn(b, d, e, a), c = z.Ml.Zc(c);
  return'\x3cdiv class\x3d"iframe-container"\x3e\x3c' + Xh() + (c.iframeWidth ? ' data-width\x3d"' + (0,z.O)(c.iframeWidth) + '"' : "") + (c.iframeHeight ? ' data-height\x3d"' + (0,z.O)(c.iframeHeight) + '"' : "") + (d && d.width && d.height ? ' width\x3d"' + (0,z.O)(d.width) + '" height\x3d"' + (0,z.O)(d.height) + '"' : "") + ' src\x3d"/media/' + (0,z.O)(c.mediaResourceId) + (d && d.width ? "?maxWidth\x3d" + Dh(d.width) : "") + '" data-media-id\x3d"' + (0,z.O)(c.mediaResourceId) + '" frameborder\x3d"0"\x3e\x3c/' + 
  Xh() + "\x3e\x3c/div\x3e";
};
var Bn = function(a, b) {
  return b ? '\x3cspan class\x3d"drop-cap"\x3e' + (0,z.Ga)(a) + "\x3c/span\x3e" : '\x3cspan class\x3d"drop-cap drop-cap-editable"\x3e\x3cbr\x3e\x3c/span\x3e\x3cspan class\x3d"drop-cap" contenteditable\x3d"false"\x3e' + (0,z.Ga)(a) + "\x3c/span\x3e";
};
var Dn = function(a, b, c, d) {
  if (5 == d.layout || 6 == d.layout || 7 == d.layout) {
    return null;
  }
  var e = (0,z.$h)(d.layout);
  11 === d.type && a.isAuthenticated && Number(a.deviceWidth) && (e = Math.min(e, Number(a.deviceWidth) - 65), e = ug(e, Fn, 100, !1));
  b = new sd(b, c);
  return b.width > e ? new sd(e, Math.round(e * b.height / b.width)) : b;
};
var ll = function(a, b) {
  return b && a ? Math.round(a / b * 1E3) / 1E3 : 0;
};
var Gn = function(a) {
  var b = a.contentWindow || (0,z.Cd)(a.contentDocument || a.contentWindow.document);
  if (b && b.document && b.document.body && "about:blank" !== b.location.toString()) {
    a = a.style;
    var c = (0,z.td)(b).Ld(), b = c.document, d = 0;
    if (b) {
      var c = (0,z.Ad)(c).height, d = b.body, e = b.documentElement;
      if ((0,z.Bd)(b) && e.scrollHeight) {
        d = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight;
      } else {
        var b = e.scrollHeight, f = e.offsetHeight;
        e.clientHeight != f && (b = d.scrollHeight, f = d.offsetHeight);
        d = b > c ? b > f ? b : f : b < f ? b : f;
      }
    }
    a.height = d + "px";
  }
};
var xn = function(a, b) {
  return b && (0,z.Ea)(a.text) || 6 == a.layout || 7 == a.layout ? !1 : !0;
};
var qn = function(a) {
  return 2 == a ? "image-inset-left" : 4 == a ? "image-outset-left" : 3 == a ? "image-outset-center" : 5 == a ? "image-fill-width" : 6 == a ? "blockLayout--outsetRow" : 7 == a ? "blockLayout--outsetRowContinue" : "";
};
z.Hn = function(a) {
  a = a.match(/\S+/g) || [];
  for (var b in z.In) {
    var c = z.In[b], d = qn(c);
    if (d && (0,z.ab)(a, d)) {
      return c;
    }
  }
  return 1;
};
var tn = function(a) {
  a = a.type;
  return 5 == a ? "hr" : 4 == a || 11 == a ? "figure" : 6 == a || 7 == a ? "blockquote" : 9 == a || 10 == a ? "li" : 12 == a ? "h1" : 2 == a ? "h2" : 3 == a ? "h3" : 13 == a ? "h4" : 1 == a ? "p" : 8 == a ? "pre" : "p";
};
var rn = function(a, b) {
  var c = " " + (0,z.Ga)(a);
  null != b && (c += '\x3d"' + (0,z.Ga)(b) + '"');
  return c;
};
var nn = function(a) {
  a = a.type;
  var b = "";
  if (9 == a) {
    b = "ul";
  } else {
    if (10 == a) {
      b = "ol";
    } else {
      return "";
    }
  }
  return "\x3c" + b + rn("class", "post-list") + "\x3e";
};
var mn = function(a) {
  a = a.type;
  return 9 == a ? "\x3c/ul\x3e" : 10 == a ? "\x3c/ol\x3e" : "";
};
z.kn = function(a, b, c, d) {
  return b.sections ? {name:a.getName(), oE:b.kf && c, qE:b.kf && d, textLayout:Jn[(0,z.y)(a, "textLayout")], imageLayout:Kn[(0,z.Sg)(a)], backgroundColor:z.Ln[(0,z.Vg)(a)], backgroundImage:(0,z.Pg)(a) && z.Ml.Zc((0,z.Pg)(a))} : null;
};
var ln = function(a) {
  return(0,z.en)(a);
};
var An = function(a, b, c) {
  var d = a.g();
  if (1 == d) {
    return "\x3cstrong\x3e";
  }
  if (2 == d) {
    return "\x3cem\x3e";
  }
  if (4 == d) {
    return'\x3cspan class\x3d"notes-highlight" ' + (a.getName() ? ' name\x3d"' + (0,z.Ga)(a.getName()) + '"' : "") + "\x3e";
  }
  if (5 == d) {
    return'\x3cspan class\x3d"warning"\x3e';
  }
  if (3 == d) {
    var d = a.uf(), e;
    try {
      e = "#zSoyz" !== Ih(d);
    } catch (f) {
      e = !1;
    }
    if (!e) {
      return "";
    }
    e = {};
    var h = (0,z.Fa)((0,z.y)(a, "rel"));
    h && (e[h] = !0);
    c.li && (oh(d) || (e.nofollow = !0));
    var h = a.nb(), k = Object.keys(e).join(" "), l = oh(d);
    a = !e.token && !c.rf && d && d != b.text.substring((0,z.Mg)(a), (0,z.Ng)(a));
    return "\x3ca" + (l ? "" : ' target\x3d"_blank"') + ' href\x3d"' + (0,z.O)((0,z.P)(d)) + '"' + (h ? ' title\x3d"' + (0,z.O)(h) + '"' : "") + (k ? ' rel\x3d"' + (0,z.O)(k) + '"' : "") + (a ? ' data-tooltip\x3d"' + (0,z.O)(d) + '" data-tooltip-position\x3d"bottom" data-tooltip-type\x3d"link"' : "") + "\x3e";
  }
  return "";
};
var zn = function(a) {
  a = a.g();
  return 1 == a ? "\x3c/strong\x3e" : 2 == a ? "\x3c/em\x3e" : 3 == a ? "\x3c/a\x3e" : 4 == a || 5 == a ? "\x3c/span\x3e" : "";
};
z.Mn = function(a, b, c) {
  function d() {
    var d = arguments, h = c || this;
    (0,window.clearTimeout)(e);
    e = (0,window.setTimeout)(function() {
      e = null;
      h instanceof z.v && h.mf || b.apply(h, d);
    }, a);
  }
  var e;
  d.cancel = function() {
    (0,window.clearTimeout)(e);
    e = null;
  };
  return d;
};
z.Nn = function(a, b, c) {
  var d = -window.Infinity;
  return function() {
    var e = c || this;
    if (!(e instanceof z.v && e.mf)) {
      var f = (0,z.ej)();
      f - d >= a && (b.apply(e, arguments), d = f);
    }
  };
};
z.On = function(a, b) {
  (0,window.setTimeout)(function() {
    a.call(b);
  }, 0);
};
var Pn = function(a) {
  var b = new z.vc;
  (0,window.setTimeout)(b.Ca.bind(b, !0), a);
  return b;
};
var Qn = function(a) {
  z.Mj.call(this);
  this.pB = window.innerWidth;
  this.oB = window.innerHeight;
  this.ia = a.get("app");
  this.on = this.Za = null;
  this.vd = this.Op = !1;
  this.Iy = (0,z.Mn)(z.Rn, this.CA, this);
  this.pt = (0,z.Mn)(z.Rn, this.fv, this);
  this.BK = (0,z.Nn)(z.Rn, this.CK, this);
  this.SJ = (0,z.Q)(window, "resize", this.gA, this);
  window._onWebfontLoad = (0,z.xa)(this.kq, this);
  window._onWebfontError = (0,z.xa)(this.mJ, this);
  window._resizeIframe = (0,z.xa)(this.AG, this);
  this.ia.D(Sn, this.Ri, this);
};
var Tn = function(a) {
  var b = a.ia.rb && (0,z.Un)();
  b && a.Za != b && (a.vd && (a.pt.cancel(), a.fv()), (0,z.ci)(a.EA), a.Za = b, a.EA = (0,z.Q)(b === window.document.body ? window : b, "scroll", a.Ne, a));
};
var R = function(a) {
  this.name = a;
};
var S = function(a) {
  this.name = a;
};
var T = function(a, b) {
  this.name = a;
  this.tL = b;
};
var Vn = function(a, b) {
  for (var c = {}, d = 0;d < b.length;d++) {
    for (var e = b[d].tL, f = 0;f < e.length;f++) {
      c[e[f]] = !0;
    }
  }
  T.call(this, a, Object.keys(c));
};
var Wn = function(a) {
  z.Oj.call(this);
  this.Ba = a.get("dom-monitor");
  this.Kc = a.get("screen");
  this.Vd = a.get("element-tracker");
  this.vA = {};
};
var Xn = function(a) {
  var b = a.Vd.Yd.Jd();
  return(0,z.fb)(a.Kc.N.getElementsByClassName("post-item")).filter(function(a) {
    a = this.Vd.Aa(a).Jd();
    return b.contains(a);
  }, a).map(function(a) {
    return a.getAttribute("data-post-id");
  }, a).filter(function(a) {
    return this.vA[a] ? !1 : this.vA[a] = !0;
  }, a);
};
z.Yn = function(a) {
  this.fu = a;
  this.dj = {};
};
var Zn = function(a) {
  z.Yn.call(this, a);
};
var $n = function(a) {
  this.Cm = a;
  this.rm = !1;
};
z.ao = function() {
};
var bo = function() {
};
z.co = function(a, b, c) {
  this.title = a;
  this.image = null;
  this.description = b;
  this.type = c;
  this.name = this.username = this.ox = this.px = this.author = null;
};
z.eo = function(a) {
  for (var b = window.document.getElementsByTagName("meta"), c = {}, d = {}, e = 0;e < b.length;e++) {
    c[b[e].getAttribute("property")] = b[e], d[b[e].getAttribute("name")] = b[e];
  }
  fo(c, "og:url", window.location.href, "property");
  a.title ? (window.document.title = a.title, fo(d, "title", a.title, "name"), fo(c, "og:title", a.title, "property")) : window.document.title = (0,z.H)("productName");
  a.image && fo(c, "og:image", a.image, "property");
  a.description && fo(c, "og:description", a.description, "property");
  fo(c, "og:type", a.type, "property");
  "article" == a.type && (a.author && fo(c, "article:author", a.author, "property"), a.px && fo(c, "article:publisher", a.px, "property"), a.ox && fo(c, "article:published_time", a.ox, "property"));
  "profile" == a.type && (a.username && fo(c, "profile:username", a.username, "property"), a.name && (b = a.name.split(" "), 1 == b.length ? fo(c, "profile:first_name", a.name, "property") : (d = b.slice(-1).join(" "), fo(c, "profile:first_name", b.slice(0, -1).join(" "), "property"), fo(c, "profile:last_name", d, "property"))));
  a = a.type;
  var f;
  if ("article" != a) {
    for (f in c) {
      f && "article" === f.split(":")[0] && c[f].parentNode.removeChild(c[f]);
    }
  }
  if ("profile" != a) {
    for (f in c) {
      f && "profile" === f.split(":")[0] && c[f].parentNode.removeChild(c[f]);
    }
  }
};
var fo = function(a, b, c, d) {
  a[b] ? a[b].content = c : (a = window.document.createElement("meta"), a.setAttribute(d, b), a.content = c, window.document.getElementsByTagName("head")[0].appendChild(a));
};
z.go = function() {
  z.Oj.call(this);
  this.Ks = [];
};
var ho = function(a, b) {
  a.Ks.forEach(function(a) {
    try {
      b.call(this, a);
    } catch (d) {
      (0,z.Gj)(d);
    }
  });
};
var io = function() {
  z.v.call(this);
};
var jo = function(a) {
  z.v.call(this);
  this.Ep = a;
  this.yu = 1;
};
var ko = function(a, b) {
  a.yu = b;
  return a;
};
var lo = function() {
  z.v.call(this);
  this.un = {};
};
z.mo = function(a, b, c, d, e, f) {
  if (6 == arguments.length) {
    this.setTransform(a, b, c, d, e, f);
  } else {
    if (0 != arguments.length) {
      throw Error("Insufficient matrix parameters");
    }
    this.gc = this.hc = 1;
    this.tc = this.sc = this.Rb = this.jb = 0;
  }
};
var no = function(a, b) {
  var c = a.gc, d = a.sc;
  a.gc = b.gc * c + b.tc * d;
  a.sc = b.sc * c + b.hc * d;
  a.Rb += b.Rb * c + b.jb * d;
  c = a.tc;
  d = a.hc;
  a.tc = b.gc * c + b.tc * d;
  a.hc = b.sc * c + b.hc * d;
  a.jb += b.Rb * c + b.jb * d;
  return a;
};
var oo = function(a) {
  z.v.call(this);
  this.Rk = a;
};
var po = function(a, b) {
  z.v.call(this);
  this.Pf = a || 0;
  this.ud = b || 0;
  this.Ut = !0;
  this.Ed = new z.mo;
  this.Bz = new io;
};
var qo = function(a, b) {
  a.Ed.translate(b - a.Ed.Rb, 0);
  return a;
};
var ro = function(a, b) {
  a.Ed.translate(0, b - a.Ed.jb);
  return a;
};
var so = function(a, b) {
  ro(a, b.top);
  qo(a, b.left);
  a.Uj(b.width);
  a.Rj(b.height);
  return a;
};
z.to = function(a, b, c, d, e, f) {
  z.vc.call(this, e, f);
  this.Ww = a;
  this.gw = [];
  this.dC = !!b;
  this.DL = !!c;
  this.iL = !!d;
  for (b = this.gD = 0;b < a.length;b++) {
    Ac(a[b], (0,z.xa)(this.pC, this, b, !0), (0,z.xa)(this.pC, this, b, !1));
  }
  0 != a.length || this.dC || this.Ca(this.gw);
};
var uo = function(a, b, c) {
  z.v.call(this);
  this.bM = a.get("image");
  this.pj = b;
  this.il = c;
  this.sA = 0;
};
var vo = function(a, b, c, d, e) {
  d -= a.We();
  b = a.Ed.jb - b;
  c *= d - b;
  e && (0,z.vf)(e, "transform", "translate3d(0, " + c + "px, 0)");
  ro(a, b + c);
  return c;
};
var wo = function(a, b, c) {
  uo.call(this, a, b, c);
};
var xo = function(a, b, c, d) {
  uo.call(this, a, b, c);
  this.Zs = "";
  this.tk = d;
  this.Yf = this.or = this.wr = this.Fp = null;
};
var yo = function(a) {
  a.Fp.cancel();
  a.Fp = null;
  if (a.Yf) {
    var b = a.tk, c = (0,z.qa)(a.Yf);
    delete b.un[c];
  }
  (0,z.ad)(a.Yf);
  a.Yf = null;
};
var zo = function(a, b, c, d) {
  xo.call(this, a, b, c, d);
  this.Nt = null;
  this.zt = this.Cu = 0;
};
var Ao = function(a) {
  z.Oj.call(this);
  this.ca = a;
  this.Ba = a.get("dom-monitor");
  this.Kc = a.get("screen");
  this.Kc.Aa(this);
  this.$i = null;
  this.My = new lo;
  this.tk = new lo;
  a = new po;
  a.Ut = !1;
  this.Yd = a;
  this.Ly = new z.mo;
  this.rB = new z.mo;
  this.Hf = {};
  this.Ah = {};
  this.Np = this.Mp = !1;
  this.Zi = null;
};
var Bo = function(a, b, c) {
  return Math.min(Math.max((a - b) / c, 0), 1);
};
var Co = function(a) {
  no(a.rB.lf(a.Ly), a.Yd.Ed.ja());
};
var Do = function(a, b) {
  var c = b.getAttribute("data-scroll"), d = (0,z.qa)(b);
  if (!a.Hf[d]) {
    a.Hf[d] = new po;
    var e = a.My, f = a.Hf[d], h = (0,z.qa)(f);
    e.un[h] = f;
  }
  e = a.Hf[d];
  f = Eo(a.rB, (0,z.ti)(b));
  so(e, f);
  (f = a.Ah[d]) && f.g() != c && ((0,z.ad)(f), f = null);
  f || ("blur-cover" == c ? (f = new xo(a.ca, a, e, a.tk), f.bd(b)) : "post-cover" == c ? f = new wo(a.ca, a, e) : "post-section" == c && (f = new zo(a.ca, a, e, a.tk), f.bd(b)), f ? a.Ah[d] = f : delete a.Ah[d]);
};
var Fo = function(a, b) {
  for (var c = null, d = {}, e = 0;e < b.length;e++) {
    d[(0,z.qa)(b[e])] = !0;
  }
  for (c in a.Ah) {
    d[c] || ((0,z.ad)(a.Ah[c]), delete a.Ah[c]);
  }
  for (c in a.Hf) {
    if (!d[c]) {
      var e = a.My, f = (0,z.qa)(a.Hf[c]);
      delete e.un[f];
      (0,z.ad)(a.Hf[c]);
      delete a.Hf[c];
    }
  }
};
var Go = function(a) {
  return(0,z.fb)(a.Kc.N.querySelectorAll("[data-scroll]:not([data-scroll-disabled])"));
};
z.Ho = function(a) {
  z.go.call(this);
  this.ca = a;
  (0,z.Io)(this.ca, "screen", this);
  this.ca.bd();
};
z.Jo = function(a, b) {
  return a.ca.get(b);
};
z.Un = function() {
  return window.document.body;
};
z.Ko = function(a, b) {
  var c = (0,z.Un)();
  c === window.document.body && a.N && (c = a.N);
  c.appendChild(b);
};
z.Lo = function(a) {
  z.Ho.call(this, a);
};
z.Mo = function(a, b) {
  z.Ho.call(this, a);
  var c = b.path;
  if (0 === c.indexOf("http")) {
    throw Error("You cannot construct an html screen with an absolute path. Try removing the host.");
  }
  this.Uc = c;
};
var No = function(a, b) {
  z.Oj.call(this);
  this.Ba = a.get("dom-monitor");
  this.W = b;
  this.Fv = null;
  this.Xt = 0;
  this.Kc = a.get("screen");
};
var Oo = function(a, b) {
  z.Mo.call(this, a, b);
  this.ia = a.get("app");
  this.da = a.get("datastore");
  this.la = this.da.Cb[lk];
  this.Yi = null;
};
var Po = function(a) {
  var b = a.J(".welcome-wrapper");
  b && (0,window.setTimeout)(function() {
    (0,z.t)(b, "hiding");
    bi(b, z.Qo, function() {
      (0,z.t)(b, "hidden");
    });
  }.bind(a), 3E3);
};
var Ro = function(a) {
  return 1E6 <= a.fe ? (1E7 <= a.fe ? (0,z.N)(Math.floor(a.fe / 1E6)) : (0,z.N)(Math.floor(a.fe / 1E5) / 10)) + "M" : 1E3 <= a.fe ? (1E4 <= a.fe ? (0,z.N)(Math.floor(a.fe / 1E3)) : (0,z.N)(Math.floor(a.fe / 100) / 10)) + "K" : (0,z.N)(a.fe);
};
z.So = function(a) {
  return'data-action\x3d"sign-in-prompt"' + (a.wo ? 'data-requires-token\x3d"true"' : "") + 'data-popover-type\x3d"sign-in"' + (a.dg ? 'data-redirect\x3d"' + (0,z.N)(a.dg) + '"' : "") + 'data-popover\x3d"' + (0,z.N)(a.prompt) + '" data-popover-position\x3d"bottom" data-popover-signin-type\x3d"' + (a.Fo ? (0,z.N)(a.Fo) : "") + '"';
};
var To = function(a, b, c) {
  return'\x3cbutton class\x3d"btn ' + (a.Hl ? "btn-small" : "btn-large") + " btn-follow btn-toggle btn-suffix " + (a.Va ? "btn-light" : "btn-primary") + " no-user-select " + (a.collection.virtuals.isSubscribed ? "active" : "") + '"' + (c.isAuthenticated ? 'data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.O)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.O)(a.collection.id) + '"' : (0,z.So)({dg:"/_/subscribe/collection/" + (0,z.N)(a.collection.slug), prompt:"Sign in to follow this collection", 
  wo:!0})) + '\x3e\x3cspan class\x3d"btn-label follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e' + (!a.zC && a.collection.metadata.followerCount ? '\x3cspan class\x3d"btn-label btn-count"\x3e' + Ro({fe:a.collection.metadata.followerCount}) + "\x3c/span\x3e" : "") + "\x3c/button\x3e";
};
var Uo = function(a, b) {
  return "\x3cdiv class\x3d'align-block'\x3e\x3cdiv class\x3d\"collection-item-title\"\x3e" + (0,z.N)(a.collection.name) + "\x3c/div\x3e" + (a.aU ? '\x3cdiv class\x3d"collection-item-meta"\x3e' + (0,z.N)(a.collection.shortDescription) + "\x3c/div\x3e" : "") + (a.xs ? '\x3cdiv class\x3d"follow-wrapper"\x3e' + To({collection:a.collection, Hl:!0, Va:!0}, 0, b) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
var Vo = function() {
  return "We’ll email you when the collection editor has reviewed your submission";
};
var Wo = function(a) {
  return "Submissions are typically reviewed " + (0,z.N)(a.responseTimeFuzzy);
};
var Xo = function(a) {
  return a.user && a.user.userId ? '\x3ca href\x3d"' + (0,z.ik)(a) + '" data-id\x3d"' + (0,z.O)(a.user.userId) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.user.name) + '"' + (a.rel ? ' rel\x3d"' + (0,z.O)(a.rel) + '"' : "") + Yo(a) + "\x3e" + (0,z.N)(a.user.name) + "\x3c/a\x3e" : "Unknown User";
};
var Zo = function(a) {
  var b = "", c = (a.baseUrl ? (0,z.N)(a.baseUrl) : "") + "/" + (0,z.N)(a.collection.slug);
  return b += '\x3ca href\x3d"' + (0,z.O)((0,z.P)(c)) + '" title\x3d"Go to ' + (0,z.O)(a.collection.name) + '" data-collection-slug\x3d"' + (0,z.O)(a.collection.slug) + '" data-id\x3d"' + (0,z.O)(a.collection.id) + '"' + (a.pM ? 'target\x3d"_blank"' : "") + Yo(a) + "\x3e" + (0,z.N)(a.collection.name) + "\x3c/a\x3e";
};
var Yo = function(a) {
  a = a || {};
  return(a.fc ? ' class\x3d"' + (0,z.O)(a.fc) + '"' : "") + (a.ej ? ' data-action\x3d"' + (0,z.O)(a.ej) + '"' : "") + (a.fj ? ' data-action-value\x3d"' + (0,z.O)(a.fj) + '"' : "");
};
z.$o = function(a, b) {
  return ap((0,z.K)(a, {width:64, height:64}), b);
};
var bp = function(a, b) {
  return ap((0,z.K)(a, {width:64, height:64, cM:!0}), b);
};
var cp = function(a, b) {
  return ap((0,z.K)(a, {width:100, height:100}), b);
};
z.dp = function(a, b) {
  return ap((0,z.K)(a, {width:190, height:190}), b);
};
var ap = function(a, b) {
  var c = "", d = a.miroUrl ? a.miroUrl : b.miroUrl, e = !a.Cr && a.user && a.user.name;
  if (e) {
    var f = "Go to the profile of " + a.user.name, c = c + ('\x3ca href\x3d"' + (0,z.ik)(a) + '"' + (a.fc ? ' class\x3d"' + (0,z.O)(a.fc) + '"' : "") + (a.ej ? ' data-action\x3d"' + (0,z.O)(a.ej) + '"' : "") + (a.tabIndex ? '  tabindex\x3d"' + (0,z.O)(a.tabIndex) + '"' : "") + (a.fj ? ' data-action-value\x3d"' + (0,z.O)(a.fj) + '"' : "") + ' title\x3d"' + (0,z.O)(a.Xj ? a.Xj : f) + '" \x3e')
  } else {
    c += "\x3cspan" + (a.fc ? ' class\x3d"' + (0,z.O)(a.fc) + '"' : "") + "\x3e";
  }
  return c += '\x3cimg src\x3d"' + (a.user && (a.user.imageId || a.user.image) ? (0,z.O)((0,z.P)(d)) + "/fit/c/" + (0,z.O)(a.width) + "/" + (0,z.O)(a.height) + "/" + (0,z.O)(a.user.imageId || a.user.image.imageId) : b.defaultUserImage ? (0,z.O)((0,z.P)(b.defaultUserImage)) : "") + '"' + (a.Oc ? ' class\x3d"' + (0,z.O)(a.Oc) + '"' : "") + (a.Xj ? ' data-tooltip\x3d"' + (0,z.O)(a.Xj) + '"' : "") + (a.Xj || a.user ? ' title\x3d"' + (0,z.O)(a.Xj ? a.Xj : a.user.name) + '"' : "") + (e ? "" : (a.ej ? ' data-action\x3d"' + 
  (0,z.O)(a.ej) + '"' : "") + (a.fj ? ' data-action-value\x3d"' + (0,z.O)(a.fj) + '"' : "")) + "\x3e" + (a.user && a.user.name && a.cM ? "\x3cspan " + (a.$C ? 'class\x3d"' + (0,z.O)(a.$C) + '"' : "") + "\x3e" + (0,z.N)(a.user.name) + "\x3c/span\x3e" : "") + (e ? "\x3c/a\x3e" : "\x3c/span\x3e");
};
var ep = function(a) {
  return'\x3cspan class\x3d"reading-time"\x3e' + (0,z.N)(Math.ceil(a.readingTime)) + " min read\x3c/span\x3e";
};
var fp = function(a, b, c) {
  b = "";
  c.isAuthenticated ? a.isOnReadingList ? (b += '\x3cspan class\x3d"reading-list-status on-reading-list" data-post-id\x3d"' + (0,z.O)(a.postId) + '" data-reading-time\x3d"' + (0,z.O)(a.readingTime) + '" data-action\x3d"remove-from-reading-list" data-action-value\x3d"' + (0,z.O)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e', c = a.tM && 1E3 > c.deviceWidth, b += '\x3cspan class\x3d"reading-list-status-' + (0,z.O)(c ? "display" : "message") + '"\x3eBookmarked\x3c/span\x3e' + 
  (c ? "" : ep(a)) + "\x3c/span\x3e") : b += '\x3cspan class\x3d"reading-list-status" data-post-id\x3d"' + (0,z.O)(a.postId) + '" data-reading-time\x3d"' + (0,z.O)(a.readingTime) + '" data-action\x3d"add-to-reading-list" data-action-value\x3d"' + (0,z.O)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3cspan class\x3d"reading-list-status-message"\x3eBookmark\x3c/span\x3e' + ep(a) + "\x3c/span\x3e" : b += ep(a);
  return b;
};
var gp = function(a, b) {
  var c, d = a.contextCollection ? a.contextCollection : a.post.homeCollection;
  c = "";
  var e = a.vi ? "" : hp(a, b), d = !a.Dj || a.post.displayAuthor || d && !a.Hw ? '\x3cli class\x3d"post-item-meta-item"\x3e' + (!a.Dj || a.post.displayAuthor ? a.post.displayAuthor ? (0,z.N)(a.post.displayAuthor) + " " : a.vi ? bp({user:a.post.creator, Oc:"avatar-icon post-item-meta-avatar", fc:"post-item-author link link-secondary"}, b) : Xo({user:a.post.creator, fc:"post-item-author link link-secondary"}) : "") + (!d || a.Hw || "collectionSubscriptionsByUserId" == a.post.providerName && a.gm ? 
  "" : (a.Dj ? "" : " ") + "in " + Zo({collection:d, fc:"post-item-collection link link-secondary"})) + "\x3c/li\x3e" : "";
  c += e + d + (a.vi ? hp(a, b) : "");
  return'\x3cul class\x3d"post-item-meta"\x3e' + c + (b.variants.enable_debug && !a.AC ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Detected language (debug only)"\x3e' + (a.post.detectedLanguage ? (0,z.N)(a.post.detectedLanguage) : "n/a") + "\x3c/li\x3e" : "") + (a.XL ? "" : '\x3cli class\x3d"post-item-meta-item"\x3e' + fp({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, b) + "\x3c/li\x3e") + (a.nN && b.variants.can_resume_from_last_read_location && 
  (null == a.post.virtuals.userPostRelation ? 0 : a.post.virtuals.userPostRelation.lastReadParagraphName) ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Resume reading"\x3e\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"resume" data-action-value\x3d"' + (0,z.O)(a.post.virtuals.userPostRelation.lastReadParagraphName) + '"\x3eResume\x3c/button\x3e\x3c/li\x3e' : "") + "\x3c/ul\x3e";
};
var hp = function(a, b) {
  return a.gm && a.post.providerName ? '\x3cli class\x3d"post-item-meta-item"\x3e' + th("a", a.post.providerName)((0,z.K)(a, {reason:a.post.reasons[a.post.providerName], eh:!0}), null, b) + "\x3c/li\x3e" : "";
};
var ip = function(a, b, c) {
  return'\x3cdiv class\x3d"email-share-form"\x3e\x3cdiv class\x3d"email-address-container"\x3e\x3cinput type\x3d"text" class\x3d"input-text share-email-address" placeholder\x3d"name@example.com, name@example.com"\x3e\x3c/div\x3e\x3cdiv class\x3d"email-address-error-message"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-comment"\x3e\x3ctextarea class\x3d"textarea-seamless sender-comment overlay-form-text-input" placeholder\x3d"Write something..."\x3e\x3c/textarea\x3e\x3cdiv class\x3d"share-post-data"\x3e\x3cdiv class\x3d"post-author-image-container"\x3e' + 
  ap((0,z.K)({user:a.post.creator, fc:"post-author-image", ej:"stat-link", fj:"post-discovery.author.image"}, {width:40, height:40}), c) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-text-container"\x3e\x3cdiv class\x3d"share-post-text"\x3e\x3cdiv class\x3d"share-post-title"\x3e' + (0,z.N)(a.post.title) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-subtitle"\x3e' + (0,z.N)(a.post.virtuals.draftSnippet) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
};
var jp = function(a, b) {
  var c;
  if (a.post.providerName && b.variants.can_view_prl_homepage && b.variants.can_view_prl_debug) {
    c = (0,z.K)(a, {className:"post-meta post-meta-prl-debug"});
    for (var d = '\x3cul class\x3d"prl-debug ' + (c.className ? (0,z.O)(c.className) : "") + '"\x3e\x3cli class\x3d"prl-debug-item"\x3e\x3cspan class\x3d"prl-debug-weight"\x3e' + (0,z.N)(c.post.weight) + "\x3c/span\x3epost " + (0,z.N)(c.post.id) + "\x3c/li\x3e" + (c.post.magnitude ? '\x3cli class\x3d"prl-debug-item"\x3emagnitude: ' + (0,z.N)(c.post.magnitude) + "\x3c/li\x3e" : ""), e = qh(c.post.reasons), f = e.length, h = 0;h < f;h++) {
      for (var k = e[h], l = c.post.reasons[k], d = d + ('\x3cli class\x3d"prl-debug-item-provider"\x3e' + (0,z.N)(k) + ": " + (0,z.N)(l.weight) + "\x3cul\x3e"), k = qh(l.suggestionData), m = k.length, q = 0;q < m;q++) {
        var x = k[q], d = d + ('\x3cli class\x3d"prl-debug-item"\x3e' + (0,z.N)(x) + ": " + (0,z.N)(l.suggestionData[x]) + "\x3c/li\x3e")
      }
      d += "\x3c/ul\x3e\x3c/li\x3e";
    }
    c = d + "\x3c/ul\x3e";
  } else {
    c = "";
  }
  return c;
};
var kp = function(a, b) {
  var c;
  c = "" + (a.post.displayAuthor ? '\x3cspan class\x3d"' + (0,z.O)("post-meta post-meta-author link link-secondary") + '"\x3e' + (0,z.N)(a.post.displayAuthor) + "\x3c/span\x3e" : a.vi ? bp({user:a.post.creator, Oc:"avatar-icon post-meta-avatar post-meta-avatar-author", fc:"post-meta post-meta-author link link-secondary"}, b) : Xo({user:a.post.creator, fc:"post-meta post-meta-author link link-secondary"}));
  c = '\x3cspan class\x3d"post-meta post-meta-author-collection"\x3e' + c;
  var d = (0,z.K)(a, {separator:" in "}), e = d.contextCollection ? d.contextCollection : d.post.homeCollection, d = "" + (!e || "collectionSubscriptionsByUserId" == d.post.providerName && d.gm ? "" : '\x3cspan class\x3d"post-meta post-meta-collection"\x3e' + (d.separator ? (0,z.N)(d.separator) : "") + Zo({collection:e, fc:"link link-secondary"}) + "\x3c/span\x3e");
  return c + d + "\x3c/span\x3e";
};
var lp = function(a, b) {
  var c;
  if (a.ND || b.variants.can_blacklist) {
    c = '\x3cdiv class\x3d"post-meta post-meta-actions btn-set"\x3e' + (a.ND ? '\x3cbutton class\x3d"btn btn-small' + (a.Va ? " btn-light" : "") + '" title\x3d"Accept this story into this collection" data-action\x3d"accept-story" data-action-value\x3d"' + (0,z.O)(a.post.id) + '"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn btn-small' + (a.Va ? " btn-light" : "") + '" title\x3d"Don\'t accept this story into this collection" data-action\x3d"reject-story" data-action-value\x3d"' + (0,z.O)(a.post.id) + 
    "\"\x3eDon't Accept\x3c/button\x3e" : "");
    var d;
    d = b.variants.can_blacklist ? '\x3cbutton class\x3d"btn btn-small' + (a.Va ? " btn-light" : "") + '" title\x3d"Blacklist this post" data-action\x3d"update-blacklist" data-action-type\x3d"post" data-action-name\x3d"' + (0,z.O)(a.post.title) + '" data-action-id\x3d"' + (0,z.O)(a.post.id) + '"\x3eBlacklist Post\x3c/button\x3e\x3cbutton class\x3d"btn btn-small' + (a.Va ? " btn-light" : "") + '" title\x3d"Blacklist this user" data-action\x3d"update-blacklist" data-action-type\x3d"user" data-action-name\x3d"' + 
    (0,z.O)(a.post.creator.name) + '" data-action-id\x3d"' + (0,z.O)(a.post.creator.username) + '"\x3eBlacklist Author\x3c/button\x3e' : "";
    c = c + d + "\x3c/div\x3e";
  } else {
    c = "";
  }
  return c;
};
var mp = function(a) {
  return'\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.url)) + '" title\x3d"' + (0,z.O)(a.name) + '" data-action\x3d"open-social-activity-item" data-action-value\x3d"' + (0,z.O)(a.$D) + '" data-target-entity-type\x3d"' + (0,z.O)(a.aE) + '"\x3e' + (0,z.N)(a.name) + "\x3c/a\x3e\x3c/h3\x3e";
};
var np = function(a, b) {
  for (var c = '\x3cdiv class\x3d"social-items' + (a.className ? " " + (0,z.O)(a.className) : "") + '"\x3e' + (a.Dn ? (0,z.Sh)(a.Dn) : ""), d = a.to, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + op((0,z.K)(a, {tB:a.Bn ? (0,z.N)(a.Bn) + " " + (0,z.N)(h.user.name) : "", user:h.user}), b)
  }
  return c + "\x3c/div\x3e";
};
var op = function(a, b) {
  return cp((0,z.K)(a, {user:a.user, Oc:"activity-item-avatar" + (a.DC ? " " + (0,z.N)(a.DC) : "")}), b) + (a.tB ? '\x3cspan class\x3d"social-activity-text"\x3e' + (0,z.N)(a.tB) + "\x3c/span\x3e" : "");
};
var pp = function(a, b) {
  return qp((0,z.K)(a, {CB:"\x3cul " + (a.Uw ? 'class\x3d"' + (0,z.O)(a.Uw) + '"' : "") + "\x3e" + th("c", a.Yr)(a, null, b) + "\x3c/ul\x3e"}));
};
var rp = function(a, b) {
  for (var c = "", d = a.items, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + (!a.ed || f < a.ed ? '\x3cli class\x3d"bucket-item"\x3e' + th("d", a.Yr)((0,z.K)(a, {item:h}), null, b) + "\x3c/li\x3e" : "")
  }
  return c;
};
var sp = function(a, b, c) {
  return th("c", "post")(a, null, c);
};
z.tp = function(a, b) {
  return pp((0,z.K)(a, {items:a.posts, Xr:a.posts.length, Yr:"post", Uw:"bucket-posts"}), b);
};
z.up = function(a, b, c) {
  return pp((0,z.K)(a, {items:a.collections, Xr:a.collectionCount, Yr:"collection", Uw:"collection-bucket u-clearfix"}), c);
};
z.vp = function(a) {
  return qp((0,z.K)(a, {CB:wp(a)}));
};
var wp = function(a) {
  return'\x3cdiv class\x3d"bucket-empty ' + (a.Va ? "bucket-empty-light" : "") + " " + (a.ao ? "bucket-empty-hidden" : "") + '"\x3e\x3cp class\x3d"bucket-empty-message"\x3e' + (0,z.Sh)(a.ji) + "\x3c/p\x3e" + (a.Xk ? '\x3cp class\x3d"bucket-empty-action"\x3e' + (0,z.Sh)(a.Xk) + "\x3c/p\x3e" : "") + "\x3c/div\x3e";
};
var qp = function(a) {
  return'\x3cdiv class\x3d"bucket layout-single-column ' + (a.oD ? "ordered-posts" : "") + '"\x3e' + (a.label ? '\x3ch2 class\x3d"bucket-label"\x3e' + (a.ki ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.ki)) + '"\x3e' : "") + (0,z.N)(a.label) + (a.ki ? "\x3c/a\x3e" : "") + "\x3c/h2\x3e" : "") + (0,z.Sh)(a.CB) + (a.ki && a.ed && a.Xr && a.ed < a.Xr ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.ki)) + '" class\x3d"btn btn-small"\x3eMore\x3cspan class\x3d"icons icons-arrow-right icons-pull-right"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  "") + (a.uB ? wp(a) : "") + "\x3c/div\x3e";
};
var xp = function(a, b, c) {
  return(0,z.N)(c.productName);
};
var yp = function(a, b, c) {
  return "Sign into " + (0,z.N)(c.productName) + " or create an account";
};
var zp = function() {
  return "Almost there";
};
var Ap = function(a) {
  return'Story added to \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.O)(a.zc) + '"\x3e' + (0,z.N)(a.bl) + "\x3c/a\x3e";
};
var Bp = function(a) {
  return'Post removed from \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.O)(a.zc) + '"\x3e' + (0,z.N)(a.bl) + "\x3c/a\x3e";
};
var Cp = function(a) {
  return'Post was not accepted to \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.O)(a.zc) + '"\x3e' + (0,z.N)(a.bl) + "\x3c/a\x3e";
};
var Dp = function(a) {
  return(0,z.N)(a.name) + " was successfully blacklisted";
};
var Ep = function(a) {
  return(0,z.N)(a.name) + " could not be blacklisted";
};
var Fp = function(a) {
  return "Verification email sent to " + (0,z.N)(a.email) + '. \x3cbutton class\x3d"btn btn-chromeless link-butter" title\x3d"Change email" data-action\x3d"butter-bar-action"\x3eChange email\x3c/button\x3e';
};
var Gp = function() {
  return "Sorry, adding the story to the collection failed.";
};
var Hp = function() {
  return "Sorry, removing the story from the collection failed.";
};
var Ip = function(a) {
  a = a || {};
  return a.gU ? "Oops! Please check the email address to make sure it’s formatted correctly." : "Oops! Please check the email addresses to make sure they’re formatted correctly.";
};
z.Jp = function() {
  return "Please enter a valid email address";
};
var Kp = function() {
  return "An error occurred, and we were unable to send your verification email.";
};
z.Lp = function() {
  return "We sent you a verification email. Please check your inbox.";
};
z.Mp = function() {
  return "Profile address is not available";
};
z.Np = function() {
  return "Profile addresses may only use letters, numbers, and “_”";
};
var Op = function(a, b, c) {
  return'\x3cdiv class\x3d"overlay"\x3e' + Pp(a, 0, c) + "\x3c/div\x3e";
};
var Pp = function(a, b, c) {
  b = '\x3cbutton class\x3d"overlay-close" data-action\x3d"overlay-close"\x3e\x26times;\x3c/button\x3e\x3cdiv class\x3d"overlay-dialog ' + (a.update ? "overlay-dialog-update" : "") + " " + (a.type ? "overlay-dialog-" + (0,z.O)(a.type) : "") + '" tabindex\x3d"-1"\x3e' + (a.title ? '\x3ch3 class\x3d"overlay-title"\x3e' + (0,z.N)(a.title) + "\x3c/h3\x3e" : "") + '\x3cdiv class\x3d"overlay-content"\x3e' + (0,z.Sh)(a.bodyHtml) + "\x3c/div\x3e";
  a = a.type ? th("f", a.type)(a, null, c) : "";
  return b += (a ? '\x3cdiv class\x3d"overlay-actions"\x3e' + (0,z.Sh)(a) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
var Qp = function(a) {
  return'\x3cdiv class\x3d"popover-inner ' + (a.Yw ? (0,z.O)(a.Yw) : "") + '"\x3e' + (0,z.Sh)(a.JB) + '\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e';
};
var Rp = function(a, b, c) {
  b = '\x3cdiv class\x3d"overlay-registration"\x3e\x3cp class\x3d"overlay-registration-description"\x3e' + ("Finish creating your " + (0,z.N)(c.productName) + " account") + '\x3c/p\x3e\x3cform\x3e\x3cinput type\x3d"hidden" name\x3d"source" value\x3d"' + (0,z.O)(a.source) + '"\x3e\x3cinput type\x3d"hidden" name\x3d"accessToken" value\x3d"' + (0,z.O)(a.accessToken) + '"\x3e\x3cinput type\x3d"hidden" name\x3d"accessTokenSecret" value\x3d"' + (0,z.O)(a.accessTokenSecret) + '"\x3e\x3cinput type\x3d"hidden" name\x3d"accountName" value\x3d"' + 
  (0,z.O)(a.accountName) + '"\x3e\x3cdiv class\x3d"input-group input-group-text input-group-name"\x3e\x3cspan class\x3d"input-group-title"\x3eFull name\x3c/span\x3e\x3cinput type\x3d"text" name\x3d"name" class\x3d"input-text enter-name" placeholder\x3d"Full name" value\x3d"' + (0,z.O)(a.name) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"input-group input-group-text input-group-username"\x3e\x3cspan class\x3d"input-group-title"\x3eProfile Address\x3c/span\x3e\x3cinput type\x3d"text" name\x3d"username" class\x3d"input-text enter-username" placeholder\x3d"profile address" value\x3d"' + 
  (0,z.O)(a.username) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"input-group input-group-text input-group-email"\x3e\x3cspan class\x3d"input-group-title"\x3eEmail address\x3c/span\x3e\x3cinput type\x3d"email" name\x3d"email" class\x3d"input-text enter-email" placeholder\x3d"yourname@example.com" value\x3d"' + (0,z.O)(a.email ? a.email : "") + '"\x3e\x3c/div\x3e\x3cp class\x3d"overlay-registration-terms"\x3e';
  var d;
  d = "By creating an account, I accept " + (0,z.N)(c.productName) + '’s \x3ca href\x3d"' + (0,z.O)((0,z.P)(c.termsUrl)) + '" target\x3d"_blank"\x3eTerms of Service\x3c/a\x3e';
  return b + d + "\x3c/p\x3e" + th("g", a.source)(a, null, c) + "\x3c/form\x3e\x3c/div\x3e";
};
var Sp = function() {
  return'\x3cdiv class\x3d"overlay-signin-waiting"\x3eYou should have been prompted to log in within a popup window.\x3c/div\x3e';
};
var Tp = function() {
  return'\x3cdiv class\x3d"overlay-signin-loading"\x3eLoading…\x3c/div\x3e';
};
var Up = function(a) {
  return'\x3cbutton class\x3d"btn btn-' + (0,z.O)(a.Ao) + '" data-action\x3d"' + (0,z.O)(a.Ao) + '-auth" title\x3d"Connect with ' + (0,z.O)(a.Ax) + '"' + (a.Tl ? 'data-redirect-url\x3d"' + (0,z.O)((0,z.P)(a.Tl)) + '"' : "") + (a.disabled ? 'disabled\x3d"true"' : "") + '\x3e\x3cspan class\x3d"icons icons-' + (0,z.O)(a.Ao) + '"\x3e\x3c/span\x3e\x3cspan class\x3d"btn-' + (0,z.O)(a.Ao) + '-label"\x3eSign in with ' + (0,z.N)(a.Ax) + "\x3c/span\x3e\x3c/button\x3e";
};
var Vp = function(a, b, c) {
  return'\x3cul\x3e\x3cli\x3e\x3ca class\x3d"btn btn-chromeless share-by-email" title\x3d"Share this post by email" data-action\x3d"share-by-email" data-action-value\x3d"' + (0,z.O)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-email"\x3e\x3c/i\x3eShare via email\x3c/a\x3e\x3c/li\x3e' + (c.variants.can_report_bad_posts ? '\x3cli\x3e\x3ca class\x3d"btn btn-chromeless" title\x3d"Report this post as spam" data-action\x3d"report-spam" data-action-value\x3d"' + (0,z.O)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-flag"\x3e\x3c/i\x3eReport as spam\x3c/a\x3e\x3c/li\x3e' : 
  "") + (c.variants.enable_embed_ui ? '\x3cli class\x3d"btn-embed"\x3e\x3ca class\x3d"btn btn-chromeless" title\x3d"Embed this story" data-action\x3d"embed-story" data-action-value\x3d"' + (0,z.O)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-embed"\x3e\x3c/i\x3eEmbed story\x3c/a\x3e\x3c/li\x3e' : "") + "\x3c/ul\x3e";
};
var Wp = function() {
  return'\x3ch2\x3eStory submitted\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + Vo() + "\x3c/div\x3e";
};
z.Xp = function(a, b) {
  return'\x3cbutton class\x3d"btn ' + (a.Hl ? "btn-small" : "btn-large") + " btn-follow btn-toggle btn-suffix " + (a.Va ? "btn-light" : "btn-primary") + " no-user-select " + (a.user.social && a.user.social.isFollowing ? "active" : "") + '"' + (b.isAuthenticated ? 'data-action\x3d"toggle-subscribe-user" data-action-value\x3d"' + (0,z.O)(a.user.userId) + '"' : (0,z.So)({dg:"/_/subscribe/user/" + (0,z.N)(a.user.userId), prompt:"Sign in to follow this user", wo:!0})) + '\x3e\x3cspan class\x3d"btn-label follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e\x3c/button\x3e';
};
z.Yp = function(a) {
  return'\x3cheader class\x3d"hero hero-standalone layout-single-column ' + (a.PU ? "hero-standalone-underline" : "") + '"\x3e\x3ch1 class\x3d"hero-title"\x3e' + (0,z.N)(a.title) + "\x3c/h1\x3e" + (a.description ? '\x3cp class\x3d"hero-description"\x3e' + (0,z.N)(a.description) + "\x3c/p\x3e" : "") + (a.Xk ? '\x3cdiv class\x3d"hero-actions btn-set"\x3e' + (0,z.Sh)(a.Xk) + "\x3c/div\x3e" : "") + "\x3c/header\x3e";
};
z.Zp = function(a, b) {
  for (var c = '\x3cnav class\x3d"nav-tabs ' + (a.Va ? "nav-tabs-light" : "") + " " + (a.ao ? "nav-tabs-hidden" : "") + ' layout-single-column"\x3e\x3cul class\x3d"nav-tabs-list"\x3e', d = a.Io, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + ('\x3cli class\x3d"nav-tabs-item ' + (h.Wb ? "active" : "") + " " + (a.Kx ? (0,z.O)(a.Kx) : "") + '"\x3e' + (h.vo && !b.isAuthenticated ? '\x3cbutton class\x3d"btn btn-chromeless nav-tabs-anchor"' + (0,z.So)({dg:h.href, prompt:"Sign in to continue"}) + "\x3e" + (0,z.N)(h.name) + "\x3c/button\x3e" : '\x3ca class\x3d"nav-tabs-anchor" href\x3d"' + (0,z.O)((0,z.P)(h.href)) + '"\x3e' + (0,z.N)(h.name) + "\x3c/a\x3e") + "\x3c/a\x3e\x3c/li\x3e")
  }
  return c + "\x3c/ul\x3e\x3c/nav\x3e";
};
var $p = function(a) {
  a = a || {};
  return'\x3cdiv class\x3d"metabar u-clearfix ' + (a.Va ? "metabar-light" : "") + " " + (a.qM ? "metabar-top" : "") + " " + (a.gx ? (0,z.O)(a.gx) : "") + '"\x3e' + (a.zr ? '\x3cdiv class\x3d"metabar-block align-left"\x3e' + (0,z.Sh)(a.zr) + "\x3c/div\x3e" : "") + (a.IB ? '\x3cdiv class\x3d"metabar-block metabar-center"\x3e' + (0,z.Sh)(a.IB) + "\x3c/div\x3e" : "") + (a.Oh ? '\x3cdiv class\x3d"metabar-block align-right"\x3e' + (0,z.Sh)(a.Oh) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
z.aq = function(a) {
  return $p((0,z.K)(a, {qM:!0}));
};
var bq = function(a, b, c) {
  return(0,z.aq)({Oh:c.isAuthenticated && c.useragent.supportsDesktopEdit ? '\x3cdiv class\x3d"btn-set"\x3e\x3ca href\x3d"/new-collection" class\x3d"btn btn-primary"\x3eNew collection\x3c/a\x3e\x3c/div\x3e' : ""}) + (0,z.Yp)({title:"Collections", description:"Stories grouped by theme or topic", Xk:'\x3cdiv class\x3d"input-group"\x3e\x3cspan class\x3d"icons icons-search"\x3e\x3c/span\x3e\x3cinput id\x3d"collection-search-input" type\x3d"search" class\x3d"input-text input-text-rounded" placeholder\x3d"Search"\x3e\x3c/div\x3e'}) + 
  (0,z.up)((0,z.K)(a, {collections:c.variants.enable_see_subscribed_collections ? a.collections : [], xs:!0, label:0 < a.collections.length ? "Collections you follow" : ""}), 0, c);
};
var cq = function(a, b) {
  z.Mo.call(this, a, b);
  this.ia = a.get("app");
  this.ea = a.get("request");
  this.da = a.get("datastore");
  this.Bh = this.Fa = this.Us = null;
  this.hv = 0;
  this.hb = "";
  this.Ws = {};
  this.Gm = [];
};
var dq = function(a) {
  for (var b = a.N.querySelectorAll(".follow-wrapper"), c = 0;c < b.length;c++) {
    var d = b[c].querySelector(".btn-follow").getAttribute("data-action-value"), e = a.da.qg[d] || null;
    if (!e) {
      (0,z.Gj)(Error("CollectionsScreen: Trouble getting collectionMeta for " + d));
      break;
    }
    d = (0,z.eq)(new z.fq(b[c], e, To), {Hl:!0, Va:!0}, "collection").H();
    a.Gm.push(d);
  }
};
var gq = function(a) {
  this.ba = a;
  this.sq = this.gn = null;
};
var hq = function(a, b) {
  if (a.gn) {
    throw Error("Called populate() before the previous populate() was complete");
  }
  a.gn = b;
  return a;
};
var iq = function(a, b) {
  if (!a.gn) {
    throw Error("Cannot call as() before populate()");
  }
  if (a.sq) {
    throw Error("Cannot call as() twice");
  }
  a.sq = b;
  return a;
};
var jq = function(a, b) {
  var c = a.ba, d;
  b = b || {};
  var e = a.gn.split(".");
  if (c) {
    for (var f = Array.isArray(c) ? c : [c];e.length && f.length;) {
      for (var h = e.shift(), k = 0 < e.length, l = [], c = 0;c < f.length;c++) {
        var m = f[c];
        if (k) {
          if (m = m[h], Array.isArray(m)) {
            for (d = 0;d < m.length;d++) {
              l.push(m[d]);
            }
          } else {
            "object" === typeof m && m && l.push(m);
          }
        } else {
          var q = a.sq || h;
          if (Array.isArray(m[h])) {
            for (d = 0;d < m[h].length;d++) {
              b[m[h][d]] && (m[q][d] = b[m[h][d]]);
            }
          } else {
            "string" === typeof m[h] && b[m[h]] && (m[q] = b[m[h]]);
          }
        }
      }
      f = l;
    }
  }
  a.gn = a.sq = null;
};
z.fl = function(a, b) {
  if (!b || "object" !== typeof b) {
    throw Error("References are now a required argument for autoPopulate()");
  }
  if (!a) {
    return a;
  }
  var c = Array.isArray(a);
  if (c && 0 === a.length) {
    return a;
  }
  var d;
  d = new gq(a);
  var e = c ? a[0].type : a.type, c = c ? a : [a];
  if (c[0] instanceof F) {
    var f = c[0];
    f.Uf && (e = f.Uf());
  }
  if ("Collection" == e) {
    jq(iq(hq(d, "creatorId"), "user"), b.User);
  } else {
    if ("Post" == e) {
      for (jq(iq(hq(d, "creatorId"), "creator"), b.User), jq(iq(hq(d, "homeCollectionId"), "homeCollection"), b.Collection), jq(iq(hq(d, "virtuals.postedIn.collectionId"), "collection"), b.Collection), d = 0;d < c.length;d++) {
        var e = new gq(c[d]), h = da("virtuals.notesBySocialRecommends", c[d]), f = da("virtuals.usersBySocialRecommends", c[d]);
        if (h && h.length && f && f.length) {
          e = iq(hq(e, "virtuals.notesBySocialRecommends.author"), "authorUser");
          h = {};
          if (Array.isArray(f)) {
            for (var k = 0;k < f.length;k += 1) {
              kq(h, f[k]);
            }
          } else {
            kq(h, f);
          }
          jq(e, h);
        }
      }
    } else {
      if ("User" == e) {
        jq(iq(hq(d, "userId"), "socialStats"), b.SocialStats), jq(iq(hq(d, "userId"), "social"), b.Social);
      } else {
        if ("RecommendedPost" == e) {
          for (d = c.length - 1;0 <= d;d--) {
            (e = c[d].post) && "object" == typeof e ? (0,z.fl)(e, b) : (window.console.warn("Missing post data in RecommendedPost for post ID: " + e), c.splice(d, 1));
          }
        } else {
          "FollowUp" == e ? (jq(iq(hq(d, "mediaResourceId"), "mediaResource"), b.MediaResource), jq(iq(hq(d, "creatorId"), "creator"), b.User), (0,z.fl)(a.mediaResource, b)) : "MediaResource" == e && "MediaResourceMediumPost" == a.mediaResourceType && (jq(iq(hq(d, "mediumPost.postId"), "post"), b.Post), (0,z.fl)(a.mediumPost.post, b));
        }
      }
    }
  }
  for (d = 0;d < c.length;d++) {
    c[d]._isPopulated = !0;
  }
  return a;
};
var Vk = function(a) {
  a = Array.isArray(a) ? a : [a];
  for (var b = 0;b < a.length;b++) {
    if (!a[b]._isPopulated) {
      return!1;
    }
  }
  return!0;
};
var kq = function(a, b) {
  if ("object" === typeof b && b.userId) {
    a[b.userId] = b;
  } else {
    throw window.console.error("Unable to convert data to map", b), Error("Unable to convert data to map " + b);
  }
};
var lq = function(a) {
  return'\x3ch4 class\x3d"cards-heading"\x3e' + (0,z.N)(a.heading) + '\x3c/h4\x3e\x3cul class\x3d"cards"\x3e' + (0,z.Sh)(a.rr) + "\x3c/ul\x3e";
};
var mq = function(a, b) {
  var c;
  c = b.isAuthenticated && b.currentUser.userId == a.user.userId;
  return c = "" + ('\x3cli class\x3d"card card-user"\x3e\x3cdiv class\x3d"card-image"\x3e' + (0,z.dp)({user:a.user, Oc:"card-avatar"}, b) + '\x3c/div\x3e\x3cdiv class\x3d"card-content"\x3e\x3ch3 class\x3d"card-name"\x3e' + Xo({user:a.user, fc:"link link-primary", rel:"author"}) + "\x3c/h3\x3e" + (a.user.virtuals.bioHTML && "null" != a.user.virtuals.bioHTML ? '\x3cp class\x3d"card-description"\x3e' + (0,z.Sh)(a.user.virtuals.bioHTML) + "\x3c/p\x3e" : "") + (!c && b.variants.can_follow_users ? '\x3cdiv class\x3d"btn-set"\x3e' + 
  (0,z.Xp)((0,z.K)(a, {Hl:!0}), b) + "\x3c/div\x3e" : "") + (a.vB ? '\x3cdiv class\x3d"card-additional"\x3e' + (0,z.Sh)(a.vB) + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/li\x3e");
};
var nq = function(a, b) {
  var c = '\x3cli class\x3d"card card-collection"\x3e\x3cdiv class\x3d"card-image"\x3e', d = (0,z.Uj)((0,z.K)(a.collection.image, {strategy:"crop-fixed", width:"160", height:"160"}), 0, b), c = c + ('\x3ca href\x3d"/' + (0,z.O)(a.collection.slug) + '" title\x3d"Go to ' + (0,z.O)(a.collection.name) + '"\x3e\x3cimg class\x3d"card-collection-image" alt\x3d"Go to ' + (0,z.O)(a.collection.name) + '" src\x3d"' + (0,z.O)((0,z.P)(d)) + '" /\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"card-content"\x3e\x3ch3 class\x3d"card-name"\x3e' + 
  Zo({collection:a.collection, rel:"collection", fc:"link link-primary"}) + "\x3c/h3\x3e" + (a.collection.description ? '\x3cp class\x3d"card-description"\x3e' + (0,z.N)(a.collection.description) + "\x3c/p\x3e" : "") + '\x3cdiv class\x3d"btn-set"\x3e' + (a.BB ? (0,z.Sh)(a.BB) : To({collection:a.collection, Hl:!0, zC:!0}, 0, b)));
  a.post && (d = a.post.virtuals.publishedInCount - 1, c += 0 < d ? '\x3cbutton class\x3d"btn btn-small btn-link" data-action\x3d"show-other-collections"\x3eAlso in ' + (0,z.N)(d) + " collection" + (1 != d ? "s" : "") + "\x3c/button\x3e" : "");
  return c + "\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e";
};
var oq = function(a) {
  return a = "" + ('\x3cdiv class\x3d"layout-multi-column"\x3e\x3cheader class\x3d"layout-multi-column-header"\x3e\x3cinput class\x3d"js-search-input input-text input-text-borderless input-text-jumbo" placeholder\x3d"' + (0,z.O)(null != a.J ? a.J : "Type to search") + '"\x3e\x3c/header\x3e\x3cdiv class\x3d"js-search-results"\x3e\x3c/div\x3e\x3c/div\x3e');
};
var pq = function(a, b, c) {
  if (a.users.length || a.collections.length || a.posts.length) {
    if (a.users.length || a.collections.length) {
      if (a.users.length) {
        b = (0,z.K)(a, {ed:3});
        for (var d = "", e = b.users, f = e.length, h = 0;h < f;h++) {
          var k = e[h], d = d + (!b.ed || h < b.ed ? mq({user:k}, c) : "")
        }
        b = lq({heading:"People", rr:d}) + (a.posts.length ? "" : '\x3c/div\x3e\x3cdiv class\x3d"layout-multi-column-secondary"\x3e');
      } else {
        b = "";
      }
      b = '\x3cdiv class\x3d"layout-multi-column-secondary"\x3e' + b;
      if (a.collections.length) {
        d = (0,z.K)(a, {ed:3});
        e = "";
        f = d.collections;
        h = f.length;
        for (k = 0;k < h;k++) {
          var l = f[k], e = e + (!d.ed || k < d.ed ? nq({collection:l}, c) : "")
        }
        d = lq({heading:"Collections", rr:e});
      } else {
        d = "";
      }
      b = b + d + "\x3c/div\x3e";
    } else {
      b = "";
    }
    a = b + (a.posts.length ? '\x3cdiv class\x3d"layout-multi-column-primary"\x3e\x3ch3 class\x3d"cards-heading"\x3eStories\x3c/h3\x3e' + (0,z.tp)(a, c) + "\x3c/div\x3e" : "");
  } else {
    a = wp({ji:"We couldn't find anything."});
  }
  return a;
};
var qq = function(a) {
  return a.J ? wp({ji:"We couldn't find any collections about \x3cb\x3e" + (0,z.N)(a.J) + "\x3c/b\x3e"}) : "";
};
var rq = function(a, b, c) {
  z.Oj.call(this);
  this.ia = a.get("app");
  this.ea = a.get("request");
  this.$u = 0;
  this.Gq = {};
  this.aj = null;
  this.Fa = b;
  this.hb = "";
  this.zy = c;
  this.Tq = pq;
};
var sq = function(a, b) {
  a.ia.update(a.ia.ie.replace(/\?.*/, "") + "?q\x3d" + (0,window.encodeURIComponent)(b));
};
var tq = function(a, b, c) {
  z.Ho.call(this, a);
  this.Rt = c.q;
};
z.uq = function(a) {
  return!!a.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
};
var vq = function(a) {
  for (var b = 0;b < a.length;b++) {
    if (!(0,z.uq)(a[b])) {
      return!1;
    }
  }
  return!0;
};
var wq = function(a) {
  z.v.call(this);
  this.ca = a;
  this.ia = a.get("app");
  this.ia.D(xq, this.at, this);
  this.ea = a.get("request");
  this.da = a.get("datastore");
  this.Oa = a.get("butter-bar");
  this.U = a.get("dialog");
  this.Qm = null;
};
var yq = function(a, b, c) {
  c && b && (0,z.s)((0,z.r)(zq(a, b, c, "PENDING"), function(a) {
    a = (0,z.fl)(a.value, a.references);
    (0,z.Uk)(this.da, a);
    this.U.open({title:"Story submitted", bodyHtml:Vo(), type:z.nk});
  }, a), (0,z.Aq)(a.U, "An error occurred. Please try submitting again."));
};
var Bq = function(a, b, c, d, e) {
  return c && b ? (0,z.s)((0,z.r)(zq(a, b, c, "APPROVED"), function(a) {
    a = (0,z.fl)(a.value, a.references);
    (0,z.Uk)(this.da, a);
    e && e.Ih(a, 0);
    (0,z.Hk)(Cq, {collectionSlug:c, postIds:[b]});
    this.Oa.H(Ap({bl:d, zc:c}), z.Dq);
  }, a), (0,z.Aq)(a.U, Gp())) : null;
};
var Eq = function(a, b, c) {
  var d = (0,z.pk)(c, "name"), e = (0,z.pk)(c, "slug");
  (0,z.r)(zq(a, b, e, "REJECTED"), function(a) {
    Fq(this, b, a);
    (0,z.Hk)(Gq, {collectionSlug:e, postIds:[b]});
    this.Oa.H(Bp({bl:d, zc:e}), z.Dq);
  }, a);
};
var Hq = function(a, b, c, d) {
  var e = (0,z.pk)(c, "name"), f = (0,z.pk)(c, "slug");
  c = c.get("virtuals.canAdminister") ? "NOT_FOUND" : "REMOVED";
  (0,z.s)((0,z.r)(zq(a, b, f, c), function(a) {
    Fq(this, b, a, d);
    (0,z.Hk)(Gq, {collectionSlug:f, postIds:[b]});
    this.Oa.H(Bp({bl:e, zc:f}), z.Dq);
  }, a), (0,z.Aq)(a.U, Hp()));
};
var Iq = function(a, b, c, d) {
  var e = a.U.open({title:"Decline this story", bodyHtml:(0,z.I)(Jq, {SD:a.da.Fb(b).get("creator").name}), Mh:"OK", type:Kq}), f = new z.vc;
  e.D(Lq, function(a, b, c) {
    var e = b.J(".story-rejection-note"), e = e ? e.value : null, e = e.trim();
    Mq(this, a, c, e, d);
    b.close();
    f.Ca();
  }.bind(a, b, e, c));
  return f;
};
var Nq = function(a, b, c) {
  a.at();
  b.eg(c || (0,z.Un)());
  a.Qm = b;
  return(0,z.Bc)(b.open(), function() {
    this.Qm.close();
    this.Qm = null;
  }, a);
};
var Mq = function(a, b, c, d, e) {
  var f = (0,z.pk)(c, "name"), h = (0,z.pk)(c, "slug");
  (0,z.r)(zq(a, b, h, "REJECTED", d), function(a) {
    Fq(this, b, a, e);
    (0,z.Hk)(Oq, {postId:b, collectionId:c.get("id")});
    this.Oa.H(Cp({bl:f, zc:h}), z.Dq);
  }, a);
};
var zq = function(a, b, c, d, e) {
  b = z.Pq.Q({postId:b, collectionSlug:c});
  return a.ea.put(b, {postStatus:d, editorComment:e}, {na:!0});
};
var Fq = function(a, b, c, d) {
  c = (0,z.fl)(c.value, c.references);
  (0,z.Uk)(a.da, c);
  d && d.Ul(b);
};
z.Qq = function(a) {
  z.sk.call(this);
  this.wd = a;
  this.wd.D("add", this.aA, this);
  this.wd.D("remove", this.eA, this);
  this.wd.D("change", this.cA, this);
  (0,z.Rq)(this);
};
z.Rq = function(a) {
  a.Ra = (a.Bt ? a.wd.filter(a.Bt, a.Sy) : a.wd.Ra).slice(a.nt, a.nt + a.Cz);
};
var Sq = function(a) {
  var b = a.Ra;
  (0,z.Rq)(a);
  for (var c = 0;c < b.length;c++) {
    Tq(b[c], a.Ra) || a.S("remove", b[c], a);
  }
  for (var c = [], d = 0;d < a.Ra.length;d++) {
    Tq(a.Ra[d], b) || c.push(a.Ra[d]);
  }
  c.length && a.S("add", c, a);
};
var Tq = function(a, b) {
  return!!(0,z.Za)(b, function(b) {
    return b === a;
  });
};
z.fq = function(a, b, c) {
  z.Oj.call(this);
  if (!a) {
    throw Error("Missing element for TemplateView");
  }
  this.N = a;
  this.ba = b;
  this.Tq = c;
};
z.eq = function(a, b, c) {
  a.zn = b;
  a.ot = c;
  a.Od() && a.bs();
  return a;
};
z.Uq = function(a, b) {
  b instanceof z.ok && (b = a.th.call(null, b));
  if (a.zn) {
    a.zn[a.ot] = b;
    var c = (0,z.I)(a.Tq, a.zn);
    delete a.zn[a.ot];
    return c;
  }
  return(0,z.I)(a.Tq, b);
};
z.Vq = function(a, b, c) {
  b = '\x3cdiv class\x3d"list-choice-hero"\x3e\x3ch2\x3e' + (0,z.N)(a.title) + "\x3c/h2\x3e" + (a.description ? "\x3cp\x3e" + (0,z.N)(a.description) + "\x3c/p\x3e" : "") + (a.UC && a.TC ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.TC)) + '" class\x3d"btn btn-primary btn-small"\x3e' + (0,z.N)(a.UC) + "\x3c/a\x3e" : "") + '\x3c/div\x3e\x3cul class\x3d"list-choice-items"\x3e';
  for (var d = "", e = a.items, f = e.length, h = 0;h < f;h++) {
    var k = e[h], d = d + ('\x3cli class\x3d"list-choice-item ' + (a.$r ? "list-choice-item-no-image" : "") + '"\x3e' + ("Remove" == k.status ? '\x3cspan class\x3d"btn btn-link list-choice-item-with-status"\x3e' : '\x3cbutton class\x3d"btn btn-link ' + (k.status ? "list-choice-item-with-status" : "") + '"' + (k.disabled ? 'disabled\x3d"disabled"' : 'data-action\x3d"pick" data-action-value\x3d"' + (0,z.O)(k.id) + '"') + "\x3e"));
    if (!a.$r && k.imageId) {
      var l = (0,z.Uj)({imageId:k.imageId, strategy:"crop-fixed", width:"190", height:"190", cropType:"c"}, 0, c), d = d + ('\x3cdiv class\x3d"list-choice-image" style\x3d"background-image: url(\'' + (0,z.O)((0,z.P)(l)) + "')\"\x3e\x3c/div\x3e")
    }
    d += (k.jE ? '\x3cdiv class\x3d"list-choice-text-left"\x3e' + (0,z.N)(k.wM) + '\x3c/div\x3e\x3cdiv class\x3d"list-choice-text-right"\x3e' + (0,z.N)(k.dN) + "\x3c/div\x3e" : '\x3cdiv class\x3d"list-choice-text align-middle-table' + (a.$r ? "" : " list-choice-text-with-image") + (k.RR ? " list-choice-text-with-icon" : "") + '"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch5 class\x3d"list-choice-item-title"\x3e' + (0,z.N)(k.name) + (k.description ? "\x3csmall\x3e" + (0,z.N)(k.description) + "\x3c/small\x3e" : 
    "") + "\x3c/h5\x3e\x3c/div\x3e\x3c/div\x3e") + (k.jE || "Remove" != k.status ? "" : '\x3cspan class\x3d"actions action-remove" data-action\x3d"pick" data-action-value\x3d"' + (0,z.O)(k.id) + '"\x3eRemove\x3c/span\x3e') + ("Remove" == k.status ? "\x3c/span\x3e" : "\x3c/button\x3e") + "\x3c/li\x3e";
  }
  return b + d + (a.uL && 0 == a.items.length ? '\x3cli class\x3d"list-choice-empty"\x3e' + (0,z.N)(a.uL) + "\x3c/li\x3e" : "") + "\x3c/ul\x3e";
};
var Wq = function(a, b) {
  z.go.call(this);
  this.ca = a;
  this.Xa = a.get("popover");
  this.ia = a.get("app");
  this.ba = b;
};
var Xq = function(a) {
  a.SA = !1;
  return a;
};
var Yq = function(a) {
  a.Em = !0;
  return a;
};
var Zq = function(a) {
  if (z.$q) {
    throw Error("Tried to make two module managers. Whooops!");
  }
  z.$q = this;
  this.xc = a;
  this.Gz = {};
  this.Hz = {};
  this.Jp = {};
  this.Sa = {};
  this.vt = {};
};
var ar = function(a, b) {
  var c = a.Gz[b], d = a.Hz[b];
  if (!c || !d) {
    return(0,z.Jc)(Error("Module " + b + " cannot be found"));
  }
  if (a.Jp[b]) {
    return(0,z.Ic)(!0);
  }
  if (a.Sa[b]) {
    return a.Sa[b].Bb();
  }
  for (var e = (0,z.Ic)(!0), f = 0;f < c.length;f++) {
    a.Jp[c[f]] || (0,z.Cc)(e, ar(a, c[f]));
  }
  c = new z.vc;
  a.Sa[b] = c;
  (0,z.s)((0,z.r)(e, function() {
    if ((0,z.ia)(d)) {
      for (var a = (0,z.Ic)(!0), c = 0;c < d.length;c++) {
        (0,z.r)(a, this.Az.bind(this, d[c]));
      }
      this.vt[b] = a;
    } else {
      this.Az(d);
    }
  }, a), c.be, c);
  return c.Bb();
};
var br = function(a, b) {
  this.xc = a;
  this.Db = b;
};
var cr = function() {
  z.Mj.call(this);
  this.pn = {};
  this.sJ = !1;
  this.fk = function() {
    return this.sJ;
  }.bind(this);
};
var dr = function(a, b) {
  a.pn[b] || (a.pn[b] = new er(b, a.fk));
  return a.pn[b];
};
var er = function(a, b) {
  this.gf = a;
  this.fk = b;
  this.Tm = this.kn = this.Db = null;
  this.Lp = !1;
};
var fr = function(a, b) {
  if (!a.fk() && a.Db) {
    throw Error('Cannot assign multiple scopes to service "' + a.gf + '"');
  }
  a.Db = b;
};
var gr = function(a, b) {
  this.xc = a;
  this.Db = b;
  this.Of = {};
  this.en = null;
  this.wg = !1;
  this.xc.D("add-provider", this.GH, this);
};
var hr = function(a) {
  var b = new gr(a.xc, "screen");
  b.en = a;
  return b;
};
z.Io = function(a, b, c) {
  if (a.xc.Og(a.Db, b) && a.xc.ei(b)) {
    a.Of[b] = c, ir(a, b);
  } else {
    throw Error('The service "' + b + '" was not declared as a manual servicefor scope "' + a.Db + '"');
  }
};
var jr = function(a, b) {
  a.Of[b] = a.xc.create(a.Db, b, a);
  ir(a, b);
};
var ir = function(a, b) {
  var c = a.Of[b];
  a.wg && c && "function" == typeof c.bd && c.bd();
};
var kr = function() {
  this.Zo = !1;
};
var lr = function(a, b, c, d) {
  z.Oj.call(this);
  this.ca = a;
  this.pa = b;
  this.da = a.get("datastore");
  this.td = new wq(a);
  this.ek = c;
  this.xa = d;
  this.$ = (0,z.pk)(this.xa, "id");
  this.ia = a.get("app");
  this.Kk = a.get("publish-state");
  this.hn = {};
  this.Bq = [];
};
var mr = function(a) {
  var b = a.da.Fb(a.$).get("virtuals.postedIn");
  a.hn = {};
  a.Bq = [];
  for (var c = 0;c < b.length;c++) {
    a.hn[b[c].collection.slug] = b[c], "APPROVED" == b[c].status && a.Bq.push(new z.ok(b[c].collection));
  }
};
var nr = function(a) {
  var b = String((0,z.H)("currentUser.userId"));
  return a.da.Fb(a.$).get("creatorId") == b ? a.Bq : (0,z.Rc)(a.Bq, function(a) {
    return a.get("creatorId") == b;
  });
};
z.or = function(a, b, c, d, e) {
  z.vc.call(this);
  this.pa = a;
  this.yh = b;
  this.wv = Math.round(d);
  this.Ft = Math.round(e) || (/scroll/.test(this.yh) ? this.pa !== window.document.body || mi ? this.pa[this.yh] : window.document.documentElement[this.yh] : this.pa.style[this.yh]);
  this.RF = c;
  this.QF = this.wv - this.Ft;
  this.cj = (0,z.ej)();
  this.vv = this.Ft < this.wv ? "min" : "max";
  window.requestAnimationFrame(this.dB.bind(this));
};
var pr = function() {
  z.v.call(this);
};
var Eo = function(a, b) {
  return b.ja().scale(a.gc, a.hc).translate(a.Rb, a.jb);
};
var qr = function(a, b) {
  var c = new z.mo, d = 1, e = 0, f = 0;
  a.width / a.height > b.width / b.height ? (d = b.height / a.height, e = d * a.width, e = Math.min(Math.max(b.width / 2 - 0.5 * e, b.width - e), 0)) : (d = b.width / a.width, f = d * a.height, f = Math.min(Math.max(b.height / 2 - 0.5 * f, b.height - f), 0));
  var h = d;
  c.gc *= h;
  c.sc *= h;
  c.Rb *= h;
  c.tc *= d;
  c.hc *= d;
  c.jb *= d;
  d = f + b.top - a.top;
  c.Rb += e + b.left - a.left;
  c.jb += d;
  return c;
};
var Ur = function(a, b) {
  var c = {imageId:a.$a()}, d = a.Id(), e = a.ol();
  if (d) {
    d = z.Vr.image.strategy[d];
    c.strategy = d.type;
    for (var f in d) {
      c[f] = d[f];
    }
  }
  e && (c.filter = e);
  b && (0,z.Bb)(c, b);
  return(0,z.I)(z.Uj, c);
};
var Wr = function(a) {
  z.v.call(this);
  this.hk = a;
  this.lk = this.hk.getContext("2d");
  this.Eq = [];
};
var Xr = function(a, b) {
  z.v.call(this);
  this.Bk = a;
  this.Ad = b;
};
z.Yr = function() {
  z.v.call(this);
  this.Sa = {};
};
var Zr = function(a, b, c) {
  this.ca = a;
  this.da = a.get("datastore");
  this.ia = a.get("app");
  this.$ = b;
  this.Nl = c;
  this.Sa = new z.Yr;
};
var $r = function(a) {
  var b = lk;
  a.Nl = new Xr(a.Nl.Bk, b);
  return b;
};
var as = function(a) {
  var b = a.vf();
  return b ? (0,z.I)(hk, {post:b.ab(), zc:a.la.Sn("preferredCollection")}) : null;
};
var bs = function(a) {
  return ".surfaces-transitioning {height: " + (0,z.N)(a.ID.height) + "px; width: " + (0,z.N)(a.ID.width) + "px;}.surfaces-transitioning .surface-container {min-height: " + (0,z.N)(a.VD.height) + "px; min-width: " + (0,z.N)(a.VD.width) + "px; top: " + (0,z.N)(a.Fr.top) + "px; left: " + (0,z.N)(a.Fr.left) + "px;}.surfaces-transitioning .surface-transitioning-in .surface-content, .surfaces-transitioning .surface-transitioning-out .surface-content {height: " + (0,z.N)(a.WD.height) + "px; width: " + 
  (0,z.N)(a.WD.width) + "px; position: relative;}.surfaces-transitioning .surface-transitioning-in .surface-content {margin-top: " + (0,z.N)(-1 * a.eE.top) + "px; margin-left: " + (0,z.N)(-1 * a.eE.left) + "px;}.surfaces-transitioning .surface-transitioning-out .surface-content {margin-top: " + (0,z.N)(-1 * a.Fr.top) + "px; margin-left: " + (0,z.N)(-1 * a.Fr.left) + "px;}";
};
var cs = function(a, b) {
  this.W = a;
  (0,z.t)(this.W, "surface-container");
  this.fy = null;
  this.Za = b ? (0,z.pi)(a) : null;
  if (this.Za) {
    var c = window.document.createElement("div");
    c.className = "surface-scroll-overlay";
    this.Za.appendChild(c);
  }
  this.rv = null;
  this.Mq = {};
};
var ds = function(a) {
  a.style.display = "block";
  a.style.visibility = "visible";
};
var es = function(a) {
  a.style.visibility = "hidden";
  a.style.display = "none";
};
var fs = function(a, b) {
  b && ds(b);
  a && es(a);
  return null;
};
var gs = function(a, b, c) {
  var d = new z.vc, e = hs(a, c), f = b ? hs(a, b) : {top:0, left:0};
  (0,z.t)(c, "surface-transitioning-in");
  b && (0,z.t)(b, "surface-transitioning-out");
  c = a.Za == window.document.body ? new sd(window.innerWidth, window.innerHeight) : new sd(0, 0);
  b = new sd(a.Za.offsetWidth, a.Za.offsetHeight);
  c = new sd(Math.max(c.width, b.width), Math.max(c.height, b.height));
  var h = c.ja();
  h.width += Math.max(e.left, f.left);
  h.height += Math.max(e.top, f.top);
  e = (0,z.I)(bs, {eE:e, Fr:f, VD:c, ID:h, WD:b});
  a.rv ? Gf(a.rv, e) : a.rv = (0,z.Ff)(e);
  (0,z.t)(a.Za, "surfaces-transitioning");
  is(function() {
    (0,z.t)(this.W, "surface-container-fixed");
    (0,z.On)(d.Ca, d);
  }, a);
  return d;
};
var hs = function(a, b) {
  var c = b.id;
  a.Mq[c] || (a.Mq[c] = {top:0, left:0});
  return a.Mq[c];
};
var js = function(a, b) {
  var c = hs(a, b), d = (0,z.qi)(a.Za);
  c.top = d.top;
  c.left = d.left;
};
var is = function(a, b) {
  (0,z.On)(a, b);
};
var ks = function(a) {
  return "Story “" + (0,z.N)(a.title) + "” successfully reported as spam.";
};
var ls = function(a) {
  return "There was a problem reporting “" + (0,z.N)(a.title) + "” as spam.";
};
var ms = function(a) {
  return'\x3cp class\x3d"butter-bar-message"\x3e' + (0,z.Sh)(a.ZC) + (a.rM ? '\x3cspan class\x3d"butter-bar-actions"\x3e・\x3cbutton class\x3d"btn btn-chromeless butter-bar-action link link-butter" data-action\x3d"undo"\x3eUndo\x3c/button\x3e\x3c/span\x3e' : "") + (a.tx ? ' \x3cbutton data-action\x3d"butter-bar-reload" class\x3d"butter-bar-action btn btn-chromeless link link-underline"\x3eSync editors.\x3c/button\x3e' : "") + (a.Nw ? '\x3cbutton data-action\x3d"butter-bar-dismiss" class\x3d"butter-bar-dismiss btn-chromeless icons icons-remove link link-accent"\x3e\x3c/button\x3e' : 
  "") + "\x3c/p\x3e";
};
z.ns = function(a, b, c) {
  var d = a.post.content.image, e = "full" == d.backgroundSize;
  b = "";
  var f = (c.useragent.supportsFullImageSections ? '\x3ccanvas class\x3d"canvas-renderer"\x3e\x3c/canvas\x3e' : "") + ("revert" == a.mode ? '\x3cdiv class\x3d"butter-bar active butter-bar-center"\x3e' + ms({ZC:'Viewing read-only revision ・\x3cbutton data-action\x3d"butter-bar-revert-cancel" class\x3d"butter-bar-action btn btn-chromeless link"\x3eCancel\x3c/button\x3e・\x3cbutton data-action\x3d"butter-bar-revert" class\x3d"butter-bar-action btn btn-chromeless link"\x3eRestore this revision\x3c/button\x3e'}) + 
  "\x3c/div\x3e" : "") + '\x3carticle class\x3d"post-article ' + ("edit" == a.mode ? " grid-breaking" : "") + (0 < a.post.vote ? " has-vote" : "") + (a.post.virtuals.languageTier ? " lang-tier-" + (0,z.O)(a.post.virtuals.languageTier) : "") + (c.useragent.supportsFullImageSections ? " supports-full-image-sections" : "") + (a.post.coverless ? " is-postCoverless" : "") + '" data-allow-notes\x3d"' + (0,z.O)(a.post.virtuals.allowNotes) + '"\x3e', h = "", k = a.post.content.image, l = a.contextCollection && 
  a.contextCollection.user && c.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus, m;
  m = "revert" == a.mode ? "History" : "owner" != a.mode || c.variants.can_edit_post ? "edit" == a.mode || a.post.latestPublishedVersion ? "" : "Draft" : "Editing is currently unavailable.";
  m = "" + ("edit" == a.mode || m ? '\x3cdiv class\x3d"metabar-status"\x3e\x3cspan class\x3d"metabar-message' + (m ? " active" : "") + '"\x3e' + (0,z.Sh)(m) + "\x3c/span\x3e\x3c/div\x3e" : "");
  var q = "\x3cdiv\x3e" + ("edit" != a.mode ? '\x3cdiv class\x3d"metabar-text"\x3e' + (0,z.N)(Math.ceil(a.post.virtuals.readingTime)) + " min read\x3c/div\x3e" : "") + '\x3cdiv class\x3d"btn-set ' + ("edit" == a.mode ? "distraction-free-component" : "") + '"\x3e' + (!l && c.isAuthenticated && "edit" != a.mode && "owner" != a.mode && "revert" != a.mode && a.post.latestPublishedVersion ? '\x3cbutton class\x3d"btn btn-circle btn-toggle btn-bookmark ' + (a.post.virtuals.isOnReadingList ? "active" : "") + 
  '" data-post-id\x3d"' + (0,z.O)(a.post.id) + '" data-action\x3d"' + (a.post.virtuals.isOnReadingList ? "remove-from" : "add-to") + '-reading-list" data-action-value\x3d"' + (0,z.O)(a.post.id) + '" alt\x3d"Add to bookmarks"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3c/button\x3e' + (c.variants.show_open_in_app && "ios" == c.useragent.os && !c.useragent.isTablet ? '\x3ca href\x3d"medium:/p/' + (0,z.O)(a.post.id) + '" class\x3d"btn btn-circle" alt\x3d"Open in app"\x3e\x3cspan class\x3d"icons icons-share no-user-select"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  "") : "") + (!l && "edit" != a.mode && "revert" != a.mode && c.isAuthenticated && c.useragent.supportsDesktopEdit && a.post.latestPublishedVersion ? '\x3cbutton data-action\x3d"show-cross-poster" class\x3d"btn hide show-cross-poster crosspost-to-collection"\x3eRemove from collections\x3c/button\x3e' : "");
  switch(a.mode) {
    case "owner":
      var x = "", G = hk({collection:a.contextCollection, post:a.post}), x = x + (c.variants.can_edit_post && c.supportsEdit ? "owner" == a.mode && a.post.isPublished && a.post.hasUnpublishedEdits ? '\x3ca class\x3d"btn" data-action\x3d"post-edit" data-tooltip\x3d"This post has unpublished edits" href\x3d"' + (0,z.O)((0,z.P)(G)) + '/edit"\x3e\x3cspan class\x3d"icons icons-info"\x3e\x3c/span\x3eEdit\x3c/a\x3e' : '\x3ca class\x3d"btn" data-action\x3d"post-edit" href\x3d"' + (0,z.O)((0,z.P)(G)) + '/edit"\x3eEdit\x3c/a\x3e' : 
      c.supportsEdit && !c.variants.can_edit_post ? '\x3cbutton class\x3d"btn" disabled\x3d"disabled" title\x3d"Edit mode not supported"\x3eEdit\x3c/button\x3e' : ""), q = q + x;
      break;
    case "edit":
      q += '\x3cbutton class\x3d"btn btn-delete" title\x3d"Delete" data-action\x3d"delete-post" disabled\x3d"disabled"\x3eDelete\x3c/button\x3e' + (c.variants.revision_history ? '\x3cbutton class\x3d"btn js-btn-history" title\x3d"Choose an older version to revert to" data-action\x3d"history" disabled\x3d"disabled"\x3eHistory\x3c/button\x3e' : "") + (a.post.latestPublishedVersion ? '\x3cbutton class\x3d"btn" title\x3d"Exit edit mode, discarding changes" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e' + 
      (c.variants.disable_publish ? '\x3cbutton class\x3d"btn btn-primary btn-publish" title\x3d"Publishing is currently disabled" disabled\x3d"disabled"\x3ePublish changes\x3c/button\x3e' : '\x3cbutton class\x3d"btn btn-primary btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish changes\x3c/button\x3e') : '\x3cbutton class\x3d"btn btn-share-draft" title\x3d"Share draft" data-action\x3d"share-draft" disabled\x3d"disabled"\x3eShare draft\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary btn-publish" disabled\x3d"disabled"' + 
      (c.variants.disable_publish ? 'title\x3d"Publishing is currently disabled"' : (a.post.intendedCollectionId ? 'title\x3d"Publish and submit to collection"' : 'title\x3d"Publish"') + 'data-action\x3d"publish"') + "\x3e" + (a.post.intendedCollectionId ? "Submit to Collection" : "Publish") + "\x3c/button\x3e");
  }
  q += "\x3c/div\x3e\x3c/div\x3e";
  h += (0,z.aq)((0,z.K)(a, {Va:(null == a.post.content.bodyModel ? null : null == a.post.content.bodyModel.sections ? null : null == a.post.content.bodyModel.sections[0] ? null : a.post.content.bodyModel.sections[0].backgroundColor) && 1 != (null == a.post.content.bodyModel.sections ? null : a.post.content.bodyModel.sections[0].backgroundColor) || k.imageId && ("contain" != k.backgroundSize || c.useragent.isMobile), gx:l ? "metabar-submission" : "", zr:m, IB:l ? '\x3cdiv class\x3d"metabar-text"\x3eStory submitted to \x3ca class\x3d"metabar-link" href\x3d"/' + 
  (0,z.O)(a.contextCollection.slug) + '"\x3e' + (0,z.N)(a.contextCollection.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"btn-set"\x3e\x3cbutton class\x3d"btn" title\x3d"Accept story" data-action\x3d"approve-crosspost"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn" title\x3d"Don’t accept story" data-action\x3d"reject-crosspost" data-action-value\x3d"decline"\x3eDon’t accept\x3c/button\x3e\x3c/div\x3e' : "", Oh:q}));
  d = f + h + (!a.post.coverless && e ? os((0,z.K)(a, {image:d}), c) : "") + '\x3csection class\x3d"post-page-wrapper ' + (d.backgroundSize ? "post-page-wrapper-" + (0,z.O)(d.backgroundSize) : "") + '"\x3e\x3cdiv class\x3d"post-page-wrapper-inner"\x3e';
  e = a.post.coverless || e ? "" : ("edit" == a.mode || a.post.content.image.imageId ? os((0,z.K)(a, {image:a.post.content.image}), c) : "") + '\x3cdiv class\x3d"layout-single-column"\x3e' + ps(a, c) + "\x3c/div\x3e";
  e = d + e;
  d = '\x3cdiv class\x3d"post-content' + (c.variants.hyphenate_body_text ? " post-content-hyphenate" : "") + '"\x3e\x3cdiv class\x3d"post-content-inner"\x3e\x3cdiv class\x3d"notes-source"\x3e\x3cdiv class\x3d"post-field body"' + (a.iN ? 'data-sections\x3d"' + (0,z.O)(a.iN) + '"' : "") + "\x3e" + (0,z.Sh)(a.vD) + "\x3c/div\x3e\x3c/div\x3e";
  "edit" != a.mode && "revert" != a.mode ? (f = "", a.post.latestPublishedVersion && (f += '\x3cbutton class\x3d"btn btn-large btn-toggle btn-primary btn-suffix recommend-button no-user-select ' + (0 < a.post.vote ? "active" : "") + '"', c.isAuthenticated ? (h = c.useragent.supportsInteract && c.variants.can_vote ? 0 < a.post.vote ? "unvote" : "upvote" : "disabled", f += 'data-action\x3d"' + (0,z.O)(h) + '" data-action-value\x3d"' + (0,z.O)(a.post.id) + '"' + ("disabled" == h ? 'disabled\x3d"disabled"' : 
  "")) : f += (0,z.So)({dg:"/_/vote/" + (a.post.homeCollection ? (0,z.N)(a.post.homeCollection.slug) : "p") + "/" + (0,z.N)(a.post.id), prompt:"Sign in to recommend", Fo:"recommend", wo:!0}), f += 'title\x3d"Recommend this post"\x3e\x3cspan class\x3d"icons icons-heart"\x3e\x3c/span\x3e\x3cspan class\x3d"btn-label recommend-button-label" data-suffix\x3d"ed"\x3eRecommend\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"vote-widget"\x3e\x3c/div\x3e'), f = '\x3cdiv class\x3d"post-footer-actions post-supplemental layout-single-column"\x3e\x3cdiv class\x3d"btn-set"\x3e' + 
  f + '\x3cdiv class\x3d"post-footer-secondary-actions"\x3e' + (a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Twitter" data-action\x3d"share-on-twitter" data-action-value\x3d"' + (0,z.O)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-twitter"\x3e\x3c/i\x3e\x3c/a\x3e' + (c.variants.can_share_to_facebook ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Facebook" data-action\x3d"share-on-facebook" data-action-value\x3d"' + (0,z.O)(a.post.id) + 
  '"\x3e\x3ci class\x3d"icons icons-facebook"\x3e\x3c/i\x3e\x3c/a\x3e' : "") + (c.isAuthenticated ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"More actions" data-action\x3d"more-actions" \x3e\x3ci class\x3d"icons icons-more"\x3e\x3c/i\x3e\x3c/a\x3e' : "") : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e") : f = "";
  d = d + f + '\x3cdiv class\x3d"post-follow-ups post-supplemental layout-single-column"\x3e\x3c/div\x3e';
  if ("edit" != a.mode && "revert" != a.mode) {
    f = a.contextCollection ? a.contextCollection : a.post.homeCollection;
    h = a.contextCollection && a.contextCollection.user && c.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus;
    k = "";
    l = '\x3cdiv class\x3d"post-footer-cards post-supplemental layout-single-column"\x3e\x3cdiv ' + (f ? 'class\x3d"layout-multi-column-half"' : "") + "\x3e";
    m = a.post.displayAuthor ? "Published by" : "Written by";
    q = a.post.creator;
    x = '\x3cdiv class\x3d"card-description-additional card-published"\x3e' + ((a.post.latestPublishedAt ? a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.virtuals.latestPublishedAtEnglish != a.post.virtuals.firstPublishedAtEnglish ? '\x3cspan data-tooltip\x3d"Originally published ' + (0,z.O)(a.post.virtuals.firstPublishedAtEnglish) + '"\x3eUpdated\x3c/span\x3e' : "\x3cspan\x3ePublished\x3c/span\x3e" : "\x3cspan\x3eDraft\x3c/span\x3e") + ' \x3cspan\x3e\x3ctime class\x3d"post-date"\x3e' + 
    (a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.latestPublishedAt ? (0,z.N)(a.post.virtuals.latestPublishedAtEnglish) : a.post.firstPublishedAt ? (0,z.N)(a.post.virtuals.firstPublishedAtEnglish) : a.post.createdAt ? (0,z.N)(a.post.virtuals.createdAtEnglish) : "") + "\x3c/time\x3e\x3c/span\x3e") + "\x3c/div\x3e";
    G = "";
    if (a.collaborators && a.collaborators.length) {
      for (var G = G + ('\x3cdiv class\x3d"post-collaborators"\x3e\x3cspan class\x3d"post-collaborators-heading" data-tooltip\x3d"The following people helped ' + (0,z.O)(a.post.creator.name) + ' with this post by adding notes to provide feedback before the post was published."\x3eThanks to:\x3c/span\x3e '), M = a.collaborators, Ba = M.length, Fb = 0;Fb < Ba;Fb++) {
        var mb = M[Fb], G = G + ('\x3cspan class\x3d"post-collaborator-item post-collaborator-' + (0,z.O)(mb.state) + '"\x3e\x3ca class\x3d"post-collaborator-link link ' + ("dnf" == mb.user.username ? "post-collaborator-throb" : "") + '" href\x3d"/@' + (0,z.O)(mb.user.username) + '"\x3e' + (0,z.N)(mb.user.name) + "\x3c/a\x3e" + (a.post.creator.userId == c.currentUser.userId ? "hidden-author" == mb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + 
        (0,z.O)(mb.user.userId) + '"\x3e(show)\x3c/button\x3e' : "visible" == mb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.O)(mb.user.userId) + '"\x3e(hide)\x3c/button\x3e' : '\x3cspan class\x3d"post-collaborator-decline"\x3e(declined)\x3c/span\x3e' : mb.user.userId == c.currentUser.userId ? "hidden-collab" == mb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + (0,z.O)(mb.user.userId) + 
        '"\x3e(show)\x3c/button\x3e' : "visible" == mb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.O)(mb.user.userId) + '"\x3e(hide)\x3c/button\x3e' : "" : "") + "\x3c/span\x3e")
      }
      G += "\x3c/div\x3e";
    }
    c = k + (l + lq({heading:m, rr:mq({user:q, vB:x + G + (a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-footer-cover-caption"\x3e\x3cspan class\x3d"post-footer-cover-caption-heading"\x3eCover photo:\x3c/span\x3e ' + (0,z.N)(a.post.content.caption) + "\x3c/div\x3e" : "")}, c)}) + "\x3c/div\x3e" + (f ? '\x3cdiv class\x3d"layout-multi-column-half"\x3e' + lq({heading:h ? "Submitted to" : "Published in", rr:nq({collection:f, post:a.post, BB:h ? '\x3cbutton class\x3d"btn btn-small" title\x3d"Accept story" data-action\x3d"approve-crosspost"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Don’t accept story" data-action\x3d"reject-crosspost" data-action-value\x3d"decline"\x3eDon’t accept\x3c/button\x3e' : 
    To({collection:f, Hl:!0, zC:!0}, 0, c)}, c)}) + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  } else {
    c = "";
  }
  return a = b + (e + (d + c + "\x3c/div\x3e\x3c/div\x3e") + "\x3c/div\x3e\x3c/section\x3e" + ("edit" == a.mode ? '\x3cfooter class\x3d"post-footer-editor"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-new-section"\x3e\x3cspan data-tooltip\x3d"Add new section" class\x3d"icons icons-add-circled"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/footer\x3e' : "edit" != a.mode ? '\x3cfooter class\x3d"post-footer post-supplemental"\x3e\x3c/footer\x3e' : "") + "\x3c/article\x3e");
};
var qs = function(a, b) {
  var c;
  c = null == a.post.virtuals.notesBySocialRecommends ? null : a.post.virtuals.notesBySocialRecommends[0];
  return c = "" + (b.variants.enable_recommend_notes && c ? '\x3cdiv class\x3d"notes-recommendations layout-single-column"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e\x3cspan class\x3d"link link-secondary align-left link-avatar"\x3e' + (0,z.$o)({user:c.authorUser, Oc:"avatar-icon post-item-meta-avatar"}, b) + '\x3c/span\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e\x3ccite class\x3d"notes-recommendation-cite"\x3e\x3ca class\x3d"link" href\x3d"/@' + (0,z.O)(c.authorUser.username) + 
  '"\x3e' + (0,z.N)(c.authorUser.name) + "\x3c/a\x3e\x3c/cite\x3e“" + (0,z.N)(c.content) + "”\x3c/blockquote\x3e\x3c/div\x3e" : "");
};
var ps = function(a, b) {
  var c = '\x3cheader class\x3d"post-header notes-header-source"\x3e\x3ch1 itemprop\x3d"name" name\x3d"title" class\x3d"post-title"\x3e' + (0,z.N)(a.post.title) + "\x3c/h1\x3e", d = a.post.content && a.post.content.subtitle;
  return c += ("edit" == a.mode || d ? '\x3ch2 name\x3d"subtitle" class\x3d"post-field subtitle post-subtitle"\x3e' + (0,z.N)(d) + "\x3c/h2\x3e" : "") + ("edit" != a.mode && "revert" != a.mode ? gp((0,z.K)(a, {vi:!0, AC:!0, XL:!0, nN:!a.imageUrl}), b) : "") + "\x3c/header\x3e";
};
var os = function(a, b) {
  var c = "", d = "full" == a.image.backgroundSize, e = (0,z.Uj)((0,z.K)(a.image, {cropType:"t", verticalGradient:d ? "29/81/55" : null}), 0, b), f = a.contextCollection && a.contextCollection.user && b.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus, h = '\x3cdiv class\x3d"post-field image image-picker-wrap' + (a.image.backgroundSize ? " background-size-" + (0,z.O)(a.image.backgroundSize) : "") + (d ? e ? " picker-layout-fill" : " picker-layout-inline" : "") + 
  ("contain" == a.image.backgroundSize ? " layout-single-column" : "") + '" data-url\x3d"' + (0,z.O)((0,z.P)(e)) + '"', k = a.image, l = k.id || k.imageId, k = "" + ((l ? ' data-image-id\x3d"' + (0,z.N)(l) + '"' : "") + (k.originalWidth ? ' data-width\x3d"' + (0,z.N)(k.originalWidth) + '"' : "") + (k.originalHeight ? ' data-height\x3d"' + (0,z.N)(k.originalHeight) + '"' : "") + (k.filter ? ' data-filter\x3d"' + (0,z.N)(k.filter) + '"' : "") + (k.backgroundSize ? ' data-image-style\x3d"' + (0,z.N)(k.backgroundSize) + 
  '"' : "")), h = h + k + "\x3e";
  d ? (e = (0,z.K)(a, {imageUrl:e}), d = e.contextCollection && e.contextCollection.user && b.currentUser && e.contextCollection.virtuals.canAdminister && "PENDING" == e.postStatus, e = "" + (("edit" == e.mode ? Rj() + '\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image" data-tooltip\x3d"Remove the cover photo."\x3e\x3c/button\x3e' : "") + rs(e) + '\x3cdiv class\x3d"story-cover" data-load-img\x3d".post-header-image-cover"\x3e\x3cdiv class\x3d"picker-target-clone"\x3e\x3c/div\x3e\x3cdiv class\x3d"picker-target story-cover-image"' + 
  (e.imageUrl ? ' style\x3d"background-image: url(' + (0,z.O)((0,z.P)(e.imageUrl)) + ');"' : "") + "\x3e\x3c/div\x3e" + ss(e, b) + ("edit" != e.mode && b.variants.enable_recommend_notes && (null == e.post.virtuals.notesBySocialRecommends ? 0 : e.post.virtuals.notesBySocialRecommends[0]) && !d ? '\x3cdiv class\x3d"layout-table-row layout-fill-width"\x3e' + qs(e, b) + "\x3c/div\x3e" : "") + '\x3cdiv class\x3d"layout-table-row layout-fill"\x3e\x3cdiv class\x3d"picker-content story-cover-content"\x3e\x3cdiv data-scroll\x3d"post-cover" ' + 
  (e.imageUrl ? "" : ' data-scroll-disabled\x3d"true"') + '\x3e\x3cdiv class\x3d"post-content layout-single-column"\x3e' + ("edit" == e.mode ? (0,z.Tj)(null) + (0,z.Sj)() : "") + ps(e, b) + "\x3c/div\x3e" + (e.imageUrl ? b.variants.can_resume_from_last_read_location && (null == e.post.virtuals.userPostRelation ? 0 : e.post.virtuals.userPostRelation.lastReadParagraphName) ? '\x3cspan class\x3d"story-cover-arrow" data-action\x3d"resume" data-action-value\x3d"' + (0,z.O)(e.post.virtuals.userPostRelation.lastReadParagraphName) + 
  '" data-tooltip\x3d"Resume reading"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"story-cover-arrow" data-action\x3d"scroll-to-post-start"\x3e\x3c/span\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e")) : (d = "edit" == a.mode || f ? "" : '\x3cdiv class\x3d"notes-recommendations-wrapper"\x3e' + qs(a, b) + "\x3c/div\x3e", e = (0,z.K)(a, {imageUrl:e}), f = '\x3cdiv class\x3d"post-header-image-wrap" data-load-img\x3d".post-header-image-cover"\x3e', "edit" == e.mode ? f += '\x3cdiv class\x3d"cover-edit"\x3e' + 
  ts() + '\x3cimg class\x3d"picker-target post-header-image-cover" src\x3d"' + (0,z.O)((0,z.P)(e.imageUrl)) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"contain-edit"\x3e\x3cimg class\x3d"picker-target post-header-image-contain" src\x3d"' + (0,z.O)((0,z.P)(e.imageUrl)) + '" width\x3d"' + (0,z.O)(b.postColumnWidth) + '" ' + (e.image.imageId ? "" : 'style\x3d"display: none"') + "\x3e\x3c/div\x3e" : (f += ss(e, b), "cover" == e.image.backgroundSize ? f += ts() + '\x3cimg class\x3d"post-header-image-cover" src\x3d"' + 
  (0,z.O)((0,z.P)(e.imageUrl)) + '"\x3e' : (f += '\x3cimg class\x3d"post-header-image-contain" src\x3d"' + (0,z.O)((0,z.P)(e.imageUrl)) + '" alt\x3d"' + (e.post.content ? (0,z.O)(e.post.content.caption) : "") + '"  ', e.image.originalWidth && "contain" == e.image.backgroundSize && (k = b.postColumnWidth * e.image.originalHeight / e.image.originalWidth, f += 'width\x3d"' + (0,z.O)(b.postColumnWidth) + '" height\x3d"' + (0,z.O)(k) + '"'), f += "\x3e")), f += "\x3c/div\x3e" + rs(e) + ("edit" == e.mode ? 
  (0,z.Tj)({fE:"Add optional feature image"}) + '\x3cdiv class\x3d"replace-image-message distraction-free-component" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"message"\x3eDrag ‘n’ drop or click to replace image\x3c/span\x3e\x3c/div\x3e\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image"\x3e\x3c/button\x3e\x3cbutton class\x3d"resize-header-image btn-chromeless distraction-free-component" data-action\x3d"toggle-background-size"\x3e\x3cspan class\x3d"icons icons-enlarge enlarge-btn"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-shrink shrink-btn"\x3e\x3c/span\x3e\x3c/button\x3e' + 
  Rj() + (0,z.Sj)() : ""), e = d + f);
  return c + (h + e + "\x3c/div\x3e");
};
var rs = function(a) {
  return "edit" == a.mode ? '\x3cdiv class\x3d"post-field caption" data-action\x3d"dummy"\x3e' + (0,z.N)(a.post.content.caption) + "\x3c/div\x3e" : a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-field caption caption-truncated" title\x3d"' + (0,z.O)(a.post.content.caption) + '"\x3e' + (0,z.N)(a.post.content.caption) + "\x3c/div\x3e" : "";
};
var us = function(a, b, c) {
  b = "" + ('\x3cul class\x3d"upvoters ' + (a.users.length ? "fade" : "") + '"\x3e');
  for (var d = Math.min(a.users.length, 3), e = 0;e < d;e++) {
    b += '\x3cli class\x3d"upvoters-item ' + (c.currentUser.userId == a.users[e].userId ? "js-upvoters-item-current-user" : "") + '"' + (a.dD[e] ? 'data-tooltip\x3d"' + (0,z.O)(a.dD[e].content) + '" data-tooltip-type\x3d"cite" data-tooltip-cite\x3d"' + (0,z.O)(a.users[e].name) + '"' : "") + "\x3e" + (0,z.$o)({user:a.users[e], fc:"avatar-chromeless avatar-icon"}, c) + "\x3c/li\x3e";
  }
  return b + "\x3c/ul\x3e";
};
var ss = function(a, b) {
  return "revert" != a.mode ? '\x3cdiv class\x3d"post-preview layout-foreground' + (a.image && a.image.imageId ? " post-preview-with-image" : "") + (a.image && a.image.filter ? " post-preview-filtered" : " post-preview-unfiltered") + '"\x3e\x3cdiv class\x3d"post-preview-content layout-single-column align-middle layout-fill-height"\x3e\x3cdiv class\x3d"align-block layout-fill-width"\x3e\x3cdiv class\x3d"post-preview-description"\x3e' + (b.isAuthenticated ? "Next in your reading list" : "Next in trending") + 
  '\x3c/div\x3e\x3ch3 class\x3d"post-preview-title"\x3e' + (0,z.N)(a.post.title) + '\x3c/h3\x3e\x3ch4 class\x3d"post-preview-subtitle"\x3e' + (0,z.N)(a.post.virtuals.draftSnippet) + "\x3c/h4\x3e" + gp((0,z.K)(a, {vi:!0, gm:!0, AC:!0}), b) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e" : "";
};
var ts = function() {
  return'\x3cimg class\x3d"post-header-image-aspect-ratio" src\x3d"data:image/gif;base64,R0lGODlhMgAVAPAAAP///wAAACH5BAEAAAAALAAAAAAyABUAAAIfhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8dTAQA7"\x3e';
};
var vs = function(a) {
  var b = "";
  a = hk(a);
  return b += '\x3ca class\x3d"footer-post-preview post-preview-enabled" href\x3d"' + (0,z.O)((0,z.P)(a)) + '" data-action\x3d"next-post"\x3e\x3c/a\x3e';
};
var ws = function(a, b, c) {
  return a.mN ? os((0,z.K)(a, {image:a.post.virtuals.previewImage}), c) : ss(a, c);
};
var xs = function(a, b, c, d, e) {
  Zr.call(this, a, c, d);
  this.Ba = a.get("dom-monitor");
  this.Gk = b;
  this.Vd = e;
  this.qv = null;
  this.Zw = ys;
  this.source = "read-next";
};
var zs = function(a) {
  a = a.vf();
  if (!a) {
    return!1;
  }
  a = a.get("virtuals.previewImage");
  return a.imageId && "contain" != a.backgroundSize;
};
var As = function(a, b, c) {
  var d = new z.Ui(b, {name:"fade-back-out", duration:400});
  (0,z.r)(d, function() {
    b.style.visibility = "hidden";
    b.style.display = "none";
    (0,z.ui)(b);
    (0,z.Sc)(c, ["post-preview-enabled", "transition-from-post-footer"]);
    (0,z.vf)(c, "transform", "");
  });
  a = (0,z.ti)(a.df);
  c.style.display = "block";
  c.style.visibility = "visible";
  (0,z.vf)(c, "transform", "translateY(" + a.top + "px)");
  (0,z.Qc)(c, ["post-preview-enabled", "pre-transition-from-post-footer"]);
  (0,z.ui)(c);
  (0,z.Vc)(c, "pre-transition-from-post-footer", "transition-from-post-footer");
  (0,z.vf)(c, "transform", "translateY(0)");
  (a = c.querySelector(".picker-content.story-cover-content")) && (new z.Ui(a, {name:"fade-up-in", duration:600})).start();
  d.start();
  return d;
};
var Bs = function(a, b) {
  var c = new z.Ui(a, {name:"fade-back-out", duration:500}), d = new z.Ui(b, {name:"slide-up-in", duration:500});
  (0,z.r)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.ui)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.ui)(b);
  d.start();
  c.start();
  return d;
};
var Cs = function(a, b) {
  z.v.call(this);
  this.Wd = !1;
  this.Db = (0,z.Gi)(a);
  this.aB = (0,z.ia)(b) ? b : [b];
};
var Ds = function(a) {
  this.gf = a;
};
var Es = function(a) {
  this.$J = a;
};
var Fs = function(a, b, c) {
  z.Mj.call(this);
  this.Ts = b;
  this.ca = a;
  this.HF = c || window.document.title;
  this.Jq = this.oq = this.bk = this.ie = this.rb = null;
  this.cc = {};
  this.sv = new cs(window.document.getElementById("container"), !0);
  this.FA = {};
  this.Pu = [];
  this.Qs = [];
  this.wa = [];
  this.xy = !0;
  this.Lq = {};
  window.setInterval(this.XJ.bind(this), Gs);
};
var Hs = function(a, b) {
  a.Jq = b;
  return a;
};
var Is = function(a, b) {
  a.Pu.push(b);
  return a;
};
var Js = function(a, b) {
  a.Qs.push(b);
  return a;
};
z.Ks = function(a) {
  return a.rb;
};
z.Ls = function(a, b, c) {
  c = c || {};
  return!!a.cc[b] && a.cc[b].Zd.gi(b, c, a.cc[b]);
};
z.Ms = function(a, b) {
  a.bk.hash != b && (a.bk.hash = b, Ns(a, a.rb.nb(), a.ie, a.bk, !0));
};
var Os = function(a, b) {
  return(0,z.s)(Kc(), a.Aq.bind(a, Sn, b, !1));
};
var Ps = function(a, b, c, d, e) {
  var f = b.path, h = a.Jq.Kr(f, z.wg);
  if (h) {
    return Ps(a, {path:h, hash:b.hash}, c, d, e);
  }
  a.S(xq, f, c);
  var k = c || {};
  k.hash = b.hash || k.hash || "";
  k.ko = k.ko || a.ie;
  k.Ko = k.Ko || null;
  if (!e && f == a.ie) {
    return b.hash ? ((0,z.Ms)(a, k.hash), a.hB(k, a.rb), a.S("historyUpdate"), (0,z.Bc)((0,z.Ic)(a.rb), a.Aq.bind(a, Sn, f, !0))) : Os(a, f);
  }
  b = a.rb && a.rb.nr();
  "string" == typeof b && (b = !(0,window.confirm)(b));
  if (b) {
    return Os(a, f);
  }
  b = Qs(a, f, k);
  (0,z.s)(b, function(a) {
    this.S(Sn, f, !1, a);
  }, a);
  a.oq && (a.oq.cancel(), a.oq = null);
  a.rb && Rs(a, a.Fy);
  var l = new z.vc;
  (0,z.r)(b, function(a) {
    var b = a.mr(), c = !k.Dl;
    b ? ((0,z.r)(b, this.iB.bind(this, a, k.Ko, c)), (0,z.s)(b, this.LG.bind(this, f, a))) : b = this.iB(a, k.Ko, c);
    this.oq = b;
    (0,z.r)(b, function() {
      Ns(this, a.nb(), f, k, !!d);
      a.getMetadata() && (0,z.eo)(a.getMetadata());
    }, this);
    (0,z.r)(b, this.hB.bind(this, k, a));
    (0,z.r)(b, this.hG.bind(this, f, k, a));
    (0,z.r)(b, this.Aq.bind(this, Sn, f, !0));
    (0,z.s)(b, this.Aq.bind(this, Sn, f, !1));
    b.mj(l);
  }, a);
  (0,z.s)(b, l.be, l);
  return l;
};
var Rs = function(a, b) {
  if (b) {
    var c = (0,z.Un)();
    c && (c = (0,z.qi)(c), a.FA[b] = {scrollX:c.left, scrollY:c.top});
  }
};
var Ns = function(a, b, c, d, e) {
  b = b || a.HF;
  d.Bl || (d.Bl = "h" + (0,z.ej)());
  var f = {path:c, isNavigate:!0, data:window.JSON.stringify(d)};
  c = (a.Ts + c).replace("//", "/");
  var h;
  if (h = window.location.search) {
    "?" == h.charAt(0) && (h = h.substr(1));
    h = new Tf(h);
    for (var k = h.ue(), l = 0;l < k.length;l++) {
      for (var m = 0;m < a.Pu.length;m++) {
        var q = k[l], x = a.Pu[m];
        if ("string" == typeof x && q == x || x.test && x.test(q)) {
          h.remove(q);
          break;
        }
      }
    }
    h = h.ci() ? "" : "?" + h.toString();
  } else {
    h = "";
  }
  c += h;
  d.hash && (c += "#" + d.hash);
  if (Ss) {
    try {
      e ? window.history.replaceState(f, b, c) : window.history.pushState(f, b, c);
    } catch (G) {
      (0,z.Gj)(G);
    }
  }
  window.document.title = b;
  a.Fy = d.Bl;
};
var Ts = function(a, b, c) {
  try {
    c.Ob.call(c);
  } catch (d) {
    (0,z.Gj)(d);
  }
  delete a.cc[b];
  a.sv.remove(c.XD);
};
var Us = function(a) {
  a = a.split("#");
  return{path:a[0], hash:a[1] || ""};
};
var Vs = function(a, b) {
  var c;
  c = a.Jq;
  var d = b.split("?")[0];
  (c = (d = Ws(c.Eu, d)) && d.object) && c.screen ? (d = d.matches, d.path = b, c = {screen:c.screen, ix:d}) : c = null;
  if (!c) {
    return null;
  }
  d = c.screen;
  return{ix:c.ix, BL:"string" === typeof d ? new Ds(d) : new Es(d)};
};
var Xs = function(a, b, c) {
  var d = null;
  (0,z.Ls)(a, b, c) ? d = a.cc[b] : a.cc[b] && (c = a.cc[b], c !== a.rb && Ts(a, b, c));
  return d;
};
var Qs = function(a, b, c, d) {
  if (a.Lq[b]) {
    return a.Lq[b].Bb();
  }
  var e = xg(), f = Xs(a, b, c);
  if (f) {
    return(0,z.Ic)(f);
  }
  var h = Vs(a, b);
  if (!h) {
    return(0,z.Jc)(new Ys(b));
  }
  var f = h.BL, h = h.ix, k = hr(a.ca), f = f.create(k, h, c), f = f instanceof z.vc ? f.Bb() : (0,z.Ic)(f);
  a.Lq[b] = f;
  (0,z.Bc)(f, function() {
    delete this.Lq[b];
  }, a);
  (0,z.r)(f, function(a) {
    this.cc[b] = a;
    var f = !this.rb;
    a.Lw(e);
    f && c.Bl && Rs(this, c.Bl);
    var h = this.sv, k = a.N, G = k.parentNode && k.parentNode.parentNode == h.W, M = G ? k.parentNode : window.document.createElement("div"), Ba = "_obv.shell._surface_" + Zs++;
    M.id = Ba;
    (0,z.t)(M, "surface");
    f ? (ds(M), G && h.Za && js(h, M)) : es(M);
    yi(M, k);
    (0,z.t)(void 0 != M.firstElementChild ? M.firstElementChild : (0,z.Qd)(M.firstChild, !0), "surface-content");
    G || yi(h.W, M);
    a.XD = Ba;
    d && (a.Zd = new $n(a.Zd));
  }, a);
  return f.Bb();
};
var $s = function(a, b, c) {
  var d = a.Jq.Kr(b, z.wg);
  if (d) {
    return $s(a, d, c);
  }
  b = Us(b).path;
  return b == a.ie ? (0,z.Ic)(a.rb) : Qs(a, b, c || {}, !0);
};
var Ys = function(a) {
  z.Aa.call(this, "No screen or factory for " + a);
  this.path = a;
};
var at = function(a) {
  this.ca = a;
  this.Hc = null;
};
z.Aq = function(a, b, c) {
  return function(a) {
    a && a instanceof z.Mc || (c || (0,z.Gj)(a), this.open({title:"Uh oh!", bodyHtml:b, type:z.nk}));
  }.bind(a);
};
var bt = function(a, b, c, d) {
  z.Mj.call(this);
  this.ca = a;
  this.Em = !!c;
  this.cG = !!d;
  a = window.document.createElement("div");
  a.innerHTML = (0,z.I)(Op, b);
  this.mc = b.type || "";
  this.Ay = [];
  this.W = a.children[0];
  this.U = this.W.getElementsByClassName("overlay-dialog")[0];
  this.cG || (0,z.Q)(this.W, "click", function(a) {
    a.target === this.W && this.close();
  }, this);
  this.ca.get("app").D(Sn, this.close, this);
  (0,z.Gi)(this.W).F("overlay-close", this.close, this).F("overlay-confirm", this.AF, this).F("overlay-cancel", this.gk, this).F("overlay-refresh", this.Cq, this).F("overlay-submit", this.xK, this).F("overlay-next", this.Xm, this);
};
var ct = function(a) {
  this.Oa = a.get("butter-bar");
  this.U = a.get("dialog");
  this.ea = a.get("request");
};
var dt = function(a, b, c) {
  Cs.call(this, a, "share-by-email");
  this.VF = b.get("email");
  this.xa = c;
};
var V = function(a) {
  this.Fu = a;
  this.qz = !1;
};
var et = function(a) {
  if (!a.qz) {
    for (var b = a.Fu.split("/"), c = {}, d = 0;d < b.length;d++) {
      if (":" == b[d].charAt(0)) {
        var e = ft.exec(b[d]);
        if (!e) {
          throw Error("Parse error " + a.Fu);
        }
        c[e[1]] = new gt(d, null == e[2] ? null : Number(e[2]));
        b[d] = ":" + e[1];
      }
    }
    a.Gu = c;
    a.nq = b;
    a.qz = !0;
  }
};
var gt = function(a, b) {
  this.index = a;
  this.padding = b;
};
var W = function() {
  z.w.call(this);
};
var Y = function(a, b, c) {
  E(a, c);
  c.table = c.table;
  c.fa = c.fa;
  c.za = void 0 === c.za || c.za;
  c.Il = void 0 === c.Il ? !1 : c.Il;
  a.xE = c;
  a.vP = c.table;
  a.vO = c.fa;
  a.dP = c.ga.toString();
  a.FO = c.za;
  a.GO = c.Il;
  a.wT = function(a) {
    return c.ga.parse(a);
  };
  a.GR = function(a, b) {
    var f;
    if (a === c.fa) {
      f = c.fields[b].j();
    } else {
      for (var h = 0;h < c.ha.length;h++) {
        var k = c.ha[h];
        k.Tn === a && k.Bw === b && (f = "gsi-" + a + (b ? "-" + b : "") + "-index");
      }
    }
    if (void 0 === f) {
      throw Error("Index does not exist on hash key " + a + " and range key " + b);
    }
    return f;
  };
  a = a.prototype;
  b && a && (Object.defineProperty(a, "id", {get:W.prototype.lC, set:function() {
  }}), ng(a, "column"), Object.defineProperty(a, "hashKey", {get:W.prototype.lC}), Object.defineProperty(a, "rangeKey", {get:W.prototype.KL}));
};
var ht = function() {
  z.w.call(this);
};
var it = function() {
  z.w.call(this);
};
var jt = function() {
  z.w.call(this);
};
var kt = function() {
  z.w.call(this);
};
var lt = function() {
  z.w.call(this);
};
var mt = function() {
  z.w.call(this);
};
var nt = function() {
  z.w.call(this);
};
var ot = function() {
  z.w.call(this);
};
var pt = function() {
  z.w.call(this);
};
var qt = function() {
  z.w.call(this);
};
var rt = function() {
  z.w.call(this);
};
var st = function() {
  z.w.call(this);
};
var tt = function() {
  z.w.call(this);
};
var ut = function() {
  z.w.call(this);
};
var vt = function() {
  z.w.call(this);
};
var wt = function() {
  z.w.call(this);
};
var xt = function() {
  z.w.call(this);
};
z.yt = function() {
  z.w.call(this);
};
z.zt = function() {
  z.w.call(this);
};
var At = function() {
  z.w.call(this);
};
var Bt = function() {
  z.w.call(this);
};
z.Ct = function() {
  z.w.call(this);
};
z.Dt = function() {
  z.w.call(this);
};
z.Et = function() {
  z.w.call(this);
};
z.Ft = function() {
  z.w.call(this);
};
z.Gt = function() {
  z.w.call(this);
};
var Ht = function() {
  z.w.call(this);
};
var It = function() {
  z.w.call(this);
};
var Jt = function() {
  z.w.call(this);
};
z.Kt = function() {
  z.w.call(this);
};
z.Lt = function() {
  z.w.call(this);
};
var Mt = function() {
  z.w.call(this);
};
var Nt = function() {
  z.w.call(this);
};
z.Ot = function() {
  z.w.call(this);
};
z.Pt = function() {
  z.w.call(this);
};
z.Qt = function() {
  z.w.call(this);
};
z.Rt = function() {
  z.w.call(this);
};
var St = function() {
  z.w.call(this);
};
var Tt = function() {
  z.w.call(this);
};
z.Ut = function() {
  z.w.call(this);
};
var Vt = function() {
  z.w.call(this);
};
z.Wt = function() {
  z.w.call(this);
};
z.Xt = function() {
  z.w.call(this);
};
z.Yt = function() {
  z.w.call(this);
};
z.Zt = function() {
  z.w.call(this);
};
z.$t = function() {
  z.w.call(this);
};
z.au = function() {
  z.w.call(this);
};
z.bu = function() {
  z.w.call(this);
};
z.cu = function() {
  z.w.call(this);
};
z.du = function() {
  z.w.call(this);
};
var eu = function() {
  z.w.call(this);
};
var fu = function() {
  z.w.call(this);
};
z.gu = function() {
  z.w.call(this);
};
z.hu = function() {
  z.w.call(this);
};
z.iu = function() {
  z.w.call(this);
};
z.ju = function() {
  z.w.call(this);
};
z.ku = function() {
  z.w.call(this);
};
var lu = function() {
  z.w.call(this);
};
var mu = function() {
  z.w.call(this);
};
var nu = function() {
  z.w.call(this);
};
z.ou = function() {
  z.w.call(this);
};
z.pu = function() {
  z.w.call(this);
};
z.qu = function() {
  z.w.call(this);
};
var ru = function() {
  z.w.call(this);
};
var su = function() {
  z.w.call(this);
};
var tu = function() {
  z.w.call(this);
};
z.uu = function() {
  z.w.call(this);
};
var vu = function() {
  z.w.call(this);
};
var wu = function() {
  z.w.call(this);
};
z.xu = function() {
  z.w.call(this);
};
var yu = function() {
  z.w.call(this);
};
var zu = function() {
  z.w.call(this);
};
var Au = function() {
  z.w.call(this);
};
z.Bu = function() {
  z.w.call(this);
};
z.Cu = function() {
  z.w.call(this);
};
z.Du = function() {
  z.w.call(this);
};
var Eu = function() {
  z.w.call(this);
};
var Fu = function() {
  F.call(this);
};
var Gu = function() {
  F.call(this);
};
var Hu = function() {
  F.call(this);
};
var Iu = function() {
  F.call(this);
};
z.Ju = function() {
  F.call(this);
};
z.Ku = function() {
  F.call(this);
};
var Lu = function() {
  F.call(this);
};
var Mu = function() {
  F.call(this);
};
z.Nu = function() {
  F.call(this);
};
z.Ou = function() {
  F.call(this);
};
var Pu = function() {
  F.call(this);
};
var Qu = function() {
  F.call(this);
};
var Ru = function() {
  F.call(this);
};
var Su = function() {
  F.call(this);
};
var Tu = function() {
  F.call(this);
};
z.Uu = function() {
  F.call(this);
};
var Vu = function() {
  F.call(this);
};
var Wu = function() {
  F.call(this);
};
var Xu = function() {
  F.call(this);
};
var Yu = function() {
  F.call(this);
};
var Zu = function() {
  F.call(this);
};
var $u = function() {
  F.call(this);
};
var av = function() {
  F.call(this);
};
var bv = function() {
  F.call(this);
};
var cv = function() {
  F.call(this);
};
var dv = function() {
  F.call(this);
};
z.ev = function() {
  F.call(this);
};
var fv = function() {
  F.call(this);
};
z.gv = function() {
  F.call(this);
};
z.hv = function() {
  F.call(this);
};
var iv = function() {
  F.call(this);
};
z.jv = function() {
  F.call(this);
};
var kv = function() {
  F.call(this);
};
var lv = function() {
  F.call(this);
};
z.mv = function() {
  F.call(this);
};
var nv = function() {
  F.call(this);
};
var ov = function() {
  F.call(this);
};
z.pv = function() {
  F.call(this);
};
z.qv = function() {
  F.call(this);
};
z.rv = function() {
  F.call(this);
};
z.sv = function() {
  F.call(this);
};
z.tv = function() {
  F.call(this);
};
z.uv = function() {
  F.call(this);
};
var vv = function() {
  F.call(this);
};
z.wv = function() {
  F.call(this);
};
z.xv = function() {
  F.call(this);
};
z.yv = function() {
  F.call(this);
};
z.zv = function() {
  F.call(this);
};
z.Av = function() {
  F.call(this);
};
var Bv = function() {
  F.call(this);
};
var Cv = function() {
  F.call(this);
};
z.Dv = function() {
  F.call(this);
};
z.Ev = function() {
  F.call(this);
};
var Fv = function() {
  F.call(this);
};
var Gv = function() {
  F.call(this);
};
z.Hv = function() {
  F.call(this);
};
z.Iv = function() {
  F.call(this);
};
z.Jv = function() {
  F.call(this);
};
var Kv = function() {
  F.call(this);
};
var Lv = function() {
  F.call(this);
};
var Mv = function() {
  F.call(this);
};
var Nv = function() {
  F.call(this);
};
var Ov = function() {
  F.call(this);
};
z.Pv = function() {
  F.call(this);
};
z.Qv = function() {
  F.call(this);
};
var Rv = function() {
  F.call(this);
};
var Sv = function() {
  F.call(this);
};
z.Tv = function() {
  F.call(this);
};
var Uv = function() {
  F.call(this);
};
var Vv = function() {
  F.call(this);
};
var Wv = function() {
  F.call(this);
};
var Xv = function() {
  F.call(this);
};
z.Yv = function() {
  F.call(this);
};
var Zv = function() {
  F.call(this);
};
var $v = function() {
  z.w.call(this);
};
var aw = function(a, b) {
  E(a, b);
  b.path = b.path;
  a.xE = b;
};
var bw = function() {
  z.w.call(this);
};
var cw = function() {
  z.w.call(this);
};
var dw = function() {
  z.w.call(this);
};
var ew = function() {
  z.w.call(this);
};
var fw = function() {
  z.w.call(this);
};
var gw = function() {
  z.w.call(this);
};
var hw = function() {
  z.w.call(this);
};
var iw = function() {
  z.w.call(this);
};
var jw = function() {
  z.w.call(this);
};
var kw = function() {
  z.w.call(this);
};
var lw = function() {
  this.hE = {};
};
var Ws = function(a, b) {
  return mw(a, b.replace(/(^\/|\/$)/g, "").split("/"), 0, a.hE, [], null);
};
var mw = function(a, b, c, d, e, f) {
  if (c >= b.length) {
    if (d && d.object) {
      a = {};
      f && (a["*"] = f);
      for (b = 0;b < d.matches.length;b++) {
        a[d.matches[b]] = e[b];
      }
      return{object:d.object, matches:a};
    }
    return null;
  }
  f = b[c];
  var h = null;
  if (d[f] && (h = mw(a, b, c + 1, d[f], e, null))) {
    return h;
  }
  for (var k in d["@"]) {
    if ("parent" != k) {
      var h = d["@"][k], l = {};
      h.Qu in l || (l[h.Qu] = h.YM.test(f));
      if (l[h.Qu]) {
        e.push(f);
        if (h = mw(a, b, c + 1, h, e, null)) {
          return h;
        }
        e.pop();
      }
    }
  }
  if (d[":"]) {
    e.push(f);
    if (h = mw(a, b, c + 1, d[":"], e, null)) {
      return h;
    }
    e.pop();
  }
  return d["*"] ? mw(a, b, b.length, d["*"], e, b.slice(c)) : null;
};
var nw = function() {
  this.rH = {};
  this.WJ = {};
  this.Eu = new lw;
};
var Z = function(a) {
  this.path = a;
  this.CM = null;
  this.Q = ow(this);
  this.screen = null;
  this.$M = [];
};
var ow = function(a) {
  for (var b = a.path.replace(/(^\/|\/$)/g, "").split("/"), c = [], d = 0;d < b.length;d++) {
    c.push(pw(a, b[d], d == b.length - 1));
  }
  return function(a, d) {
    for (var h = a || {}, k = [], l, m = 0;m < c.length;m++) {
      l = c[m], "function" === typeof l && (l = l(h)), "@" == b[m][0] && (l = "@" + l), k.push(l);
    }
    h = "/" + k.join("/");
    d && (k = Object.keys(d).map(function(a) {
      return a + "\x3d" + (0,window.encodeURIComponent)(d[a]);
    }).join("\x26"), h = h + "?" + k);
    return h;
  };
};
var pw = function(a, b, c) {
  var d;
  if ("*" == b) {
    if (c) {
      return function(a) {
        return(a["*"] || []).join("/");
      };
    }
    throw Error("Invalid path [" + a.path + "], * must only be at the end.");
  }
  return ":" == b[0] ? (d = b.substr(1, b.length - 1), function(a) {
    return a[d];
  }) : "@" == b[0] ? (a = b.indexOf(":"), d = b.substr(1, a - 1), function(a) {
    return a[d];
  }) : b;
};
var qw = function(a, b) {
  a.screen = b;
  return a;
};
var rw = function(a, b, c) {
  z.Oj.call(this);
  this.ca = a;
  this.Kc = a.get("screen");
  this.ea = a.get("request");
  this.U = a.get("dialog");
  this.yp = c;
  this.xa = b;
  this.nm = this.Gg = null;
  this.Vt = !1;
  this.mu = null;
  this.Sa = new z.Yr;
};
z.sw = function(a) {
  return a.nm ? a.nm.Bb() : (0,z.Jc)("No activate in progress");
};
var qb = function(a) {
  return a.userId;
};
var tw = function(a) {
  var b = a.Gg.get("notesBySocialRecommends") || [];
  a.mu && (0,z.gb)(b, a.mu.mC().ab());
  var c = {};
  b.forEach(function(a) {
    var b = (0,z.pa)(a.author) ? a.author.userId : a.author;
    (0,z.ma)(b) && (c[b] = a);
  });
  return c;
};
var uw = function(a, b) {
  function c(a) {
    a = a.userId;
    return 4 * (a == f.userId) + 2 * !!h[a] + 1 * !!b[a];
  }
  var d = a.Gg.get("users"), e = a.Gg.get("usersBySocialRecommends") || [], f = (0,z.H)("currentUser"), d = e.concat(d);
  a.xa.get("vote") && d.push(f);
  var d = ub(nb(d)), h = nb(e);
  d.sort(function(a, b) {
    var d = c(a), e = c(b);
    return d != e ? e - d : (0,z.jb)(a.userId, b.userId);
  });
  return d;
};
z.vw = function(a) {
  return!!ww[a.tagName] && !(0,z.xw)(a) && !(0,z.yw)(a) && !(0,z.zw)(a) && !(0,z.Pc)(a, "iframe-container") && !(0,z.ji)(a) && !(0,z.ii)(a);
};
z.Aw = function(a) {
  return "LI" == a.tagName ? !0 : (0,z.wi)(a) ? !1 : (0,z.vw)(a);
};
z.xw = function(a) {
  return "DIV" === a.tagName && (0,z.Pc)(a, "section-inner");
};
z.yw = function(a) {
  return "DIV" === a.tagName && (0,z.Pc)(a, "section-background");
};
z.zw = function(a) {
  return!!a.parentNode && (0,z.yw)(a.parentNode);
};
var Bw = function(a) {
  return "SECTION" === a.tagName;
};
z.Cw = function(a, b) {
  return(0,z.ki)(a, z.Aw, b);
};
z.Dw = function(a, b) {
  return(0,z.ki)(a, Bw, b);
};
z.Ew = function(a, b, c) {
  (0,z.Fw)(a, z.Aw, (0,z.Tb)(b, (0,z.Sb)(!0)), c);
};
z.Gw = function(a) {
  var b = [];
  (0,z.Ew)(a, b.push, b);
  return b;
};
z.Hw = function(a) {
  var b = [];
  a = (0,z.fb)(a.childNodes);
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    "SECTION" === d.tagName && b.push(d);
  }
  return b;
};
z.Iw = function(a) {
  return(0,z.fb)(a.getElementsByClassName("section-inner"));
};
z.Fw = function(a, b, c, d) {
  var e, f;
  if ("SECTION" === a.tagName && (f = (0,z.Iw)(a), f.length)) {
    for (e = 0;e < f.length;e++) {
      if (!(0,z.Fw)(f[e], b, c, d)) {
        return!1;
      }
    }
    return!0;
  }
  e = 0;
  for (f = a.children.length;e < f;e++) {
    var h = a.children[e], k = h.tagName, l = "SECTION" == k;
    if ("OL" == k || "UL" == k || l) {
      if ((0,z.Fw)(h, b, c, d)) {
        continue;
      } else {
        return!1;
      }
    }
    if (b(h) && !c.call(d, h)) {
      return!1;
    }
  }
  return!0;
};
z.Jw = function(a) {
  a = a.getAttribute("data-align");
  return Kw[a] || 1;
};
z.Lw = function(a) {
  var b = a.tagName;
  if ("BLOCKQUOTE" == b) {
    return(0,z.Pc)(a, "pullquote") ? 7 : 6;
  }
  if ("LI" == b) {
    var c = a.parentNode && a.parentNode.tagName;
    if ("UL" == c) {
      return 9;
    }
    if ("OL" == c) {
      return 10;
    }
  }
  if ("H1" == b) {
    return 12;
  }
  if ("H2" == b) {
    return 2;
  }
  if ("H3" == b) {
    return 3;
  }
  if ("H4" == b) {
    return 13;
  }
  if ("PRE" == b) {
    return 8;
  }
  if ("HR" == b) {
    return 5;
  }
  if ("P" == b || "DIV" == b || "FIGURE" == b) {
    return 0 !== a.getElementsByTagName("IMG").length ? 4 : 0 !== a.getElementsByTagName("iframe").length ? 11 : 1;
  }
  throw Error("invalid node " + b);
};
var Mw = function(a) {
  var b = a.tagName;
  if ("STRONG" == b || "B" == b) {
    return 1;
  }
  if ("EM" == b || "I" == b) {
    return 2;
  }
  if ("A" == b) {
    return 3;
  }
  if ("SPAN" == b) {
    if (a.getAttribute("name") && (0,z.Pc)(a, "notes-highlight")) {
      return 4;
    }
    if ((0,z.Pc)(a, "warning")) {
      return 5;
    }
  }
  return null;
};
z.Nw = function(a) {
  return a.hasAttribute("data-has-drop-cap");
};
z.Ow = function(a) {
  for (var b = [], c = 0, d = 0;d < a.length;d++) {
    var e = a[d];
    b.push((0,z.Pw)(e, c));
    c += (0,z.Gw)(e).length;
  }
  return b;
};
z.Pw = function(a, b) {
  for (var c = (new z.Og).Wa(a.getAttribute("name") || "").Sd(b), d = (0,z.Oc)(a), e = 0;e < d.length;e++) {
    var f = Qw[d[e]];
    f && (0,z.Rg)(c, Number(f));
    (f = Rw[d[e]]) && (0,z.Ug)(c, Number(f));
  }
  (d = (d = a.getAttribute("data-background-color")) && z.Sw[d]) && (0,z.A)(c, "backgroundColor", Number(d));
  if (d = (0,z.Za)(a.childNodes, z.yw)) {
    d = (0,z.Tw)(d), d.$a() && (0,z.Qg)(c, d);
  }
  return c;
};
z.Uw = function(a, b) {
  var c = (0,z.Lw)(a), d = a.getAttribute("name");
  if (4 == c) {
    var e = a.getElementsByTagName("IMG")[0], f = (0,z.Hn)(a.className), c = a.querySelector("figcaption"), e = (0,z.Tw)(e), d = new z.vm(d, "", f, e);
    return c ? Vw(d, c) : d;
  }
  if (11 == c) {
    return e = a.getElementsByTagName("iframe")[0], f = (0,z.Hn)(a.className), c = a.querySelector("figcaption"), e = (new z.Kg).Sj(e.getAttribute("data-media-id") || "").rs(Number(e.getAttribute("data-width") || e.width) || 0).qs(Number(e.getAttribute("data-height") || e.height) || 0), d = new wm(d, "", e, f), c ? Vw(d, c) : d;
  }
  d = new z.qm(d, c, "");
  return 5 == c ? d : Vw(d, a, b);
};
z.Tw = function(a) {
  var b = new z.Jg, c = Ww(a);
  c && b.jc(c);
  (c = Number(a.getAttribute("data-width"))) && b.em(c);
  (c = Number(a.getAttribute("data-height"))) && b.dm(c);
  (c = a.getAttribute("data-image-style")) && b.si(c);
  (a = a.getAttribute("data-filter")) && b.Bf(a);
  return b;
};
var Ww = function(a) {
  var b = String((0,z.H)("miroUrl")), c = a.getAttribute("data-image-id");
  return c ? c : a.src && (c = ai(b, a.src)) || a.style.backgroundImage && (c = /^url\((.*)\)$/.exec(a.style.backgroundImage)) && (c = ai(b, c[1])) ? c : a.getAttribute("data-delayed-src") && (c = ai(b, a.getAttribute("data-delayed-src"))) ? c : "";
};
var Xw = function(a, b) {
  this.yd = a;
  this.jB = b;
  this.$A = [];
  this.Vp = [];
  this.re = 0;
};
var Yw = function(a, b, c) {
  a.$A.push(b);
  b = b.length;
  if (a.jB) {
    c = (0,z.Rd)(c) ? c : c.parentNode;
    var d = (0,z.zf)(c, "fontWeight");
    (-1 != d.indexOf("bold") || Number(d) && 600 < Number(d)) && (0,z.xm)(a.yd, (0,z.Dm)(1, a.re, a.re + b));
    "italic" === (0,z.zf)(c, "fontStyle") && (0,z.xm)(a.yd, (0,z.Dm)(2, a.re, a.re + b));
  }
  a.re += b;
};
var Vw = function(a, b, c) {
  var d = new z.ie(b), e = null;
  c = new Xw(a, !!c);
  for (var f = !1;e = (0,z.he)(d);) {
    if (e != b) {
      if (3 == e.nodeType) {
        if (!f) {
          var h = e.nodeValue, h = 8 == a.type ? h.replace(/\xA0/g, " ") : h.replace(/[\s\xA0]/g, " ");
          Yw(c, h, e);
        }
      } else {
        if (1 == e.nodeType) {
          if ((0,z.Pc)(e, "drop-cap-editable") || (0,z.Pc)(e, "default-value")) {
            f = !f;
          } else {
            if (!f) {
              var k;
              if (-1 == d.Rc) {
                k = Mw(e);
                if (null != k) {
                  var h = c, l = h.Vp.pop();
                  l.end = h.re;
                  (!h.jB || 1 !== k && 2 !== k) && (0,z.xm)(h.yd, l);
                }
                "BR" == e.tagName && Yw(c, "\n", e);
              } else {
                1 == d.Rc && (k = Mw(e), 3 == k ? (h = (0,z.Zh)(e.href, !1), e = (0,z.Bm)(c.re, c.re, h, e.title, e.rel), c.Vp.push(e)) : 4 == k ? (e = (0,z.Cm)(c.re, c.re, e.getAttribute("name")), c.Vp.push(e)) : k && (e = (0,z.Dm)(k, c.re, c.re), c.Vp.push(e)));
              }
            }
          }
        }
      }
    }
  }
  a.alignment = (0,z.Jw)(b);
  a.hasDropCap = (0,z.Nw)(b);
  return c.Q(b.getAttribute("data-default-value"));
};
z.Zw = function(a) {
  var b = a.querySelectorAll("iframe");
  (0,z.rb)(b, function(b) {
    var d = (0,z.Cw)(b, a);
    if (d = (0,z.Uw)(d)) {
      d = yn(d, z.wg), d = (0,z.Id)(d).querySelector("iframe"), d.getAttribute("src") != b.getAttribute("src") && (b.setAttribute("width", d.getAttribute("width")), b.setAttribute("height", d.getAttribute("height")), b.setAttribute("src", d.getAttribute("src")));
    }
  });
};
z.$w = function(a) {
  a = (0,z.Hw)(a);
  for (var b = (0,z.Ow)(a), c = 0;c < a.length;c++) {
    var d = a[c];
    2 == (0,z.Sg)(b[c]) && (0,z.ui)(d);
  }
};
var ax = function(a, b, c) {
  z.Oj.call(this);
  this.ea = a.get("request");
  this.Ba = a.get("dom-monitor");
  this.Ff = b;
  this.Bu = (0,z.Gw)(b.querySelector(".body"));
  this.xa = c;
  this.Qp = this.vz = 0;
  this.pq = null;
  this.Hy = (0,z.Mn)(bx, this.AA, this);
};
var cx = function(a) {
  return "\x3cdiv class\x3d'highlight-menu-inner'\x3e\x3cul class\x3d\"highlight-menu-buttons\"\x3e" + (a.Dx ? '\x3cli class\x3d"highlight-menu-button highlight-menu-notes"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icons icons-notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (a.oN ? '\x3cli class\x3d"highlight-menu-button highlight-menu-twitter"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"twitter"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + "\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d'highlight-menu-arrow-clip'\x3e\x3cspan class\x3d'highlight-menu-arrow'\x3e\x3c/span\x3e\x3c/div\x3e";
};
z.dx = function() {
  z.Oj.call(this);
  this.nF = !!(0,z.H)("variants.can_see_drop_caps");
  this.As = (0,z.Mn)(ex, this.NK, this);
};
var fx = function(a, b, c) {
  a.Yo = b;
  a.TA = c;
  a.W = window.document.createElement("div");
  a.W.className = "highlight-menu";
  a.W.innerHTML = (0,z.I)(cx, {oN:a.TA, Dx:a.Yo});
  (0,z.gx)(a);
};
z.gx = function(a) {
  (0,z.Gi)(a.W).F("*", function(a) {
    this.S(a.Td, a);
  }, a);
  (0,z.Q)(a.W, "mousedown", a.zI, a);
};
z.hx = function(a, b) {
  for (var c = (a.label ? '\x3ch3 class\x3d"m-bucket-label"\x3e' + (0,z.N)(a.label) + "\x3c/h3\x3e" : "") + '\x3cul class\x3d"m-bucket-list' + (a.Va ? " m-bucket-list-light" : "") + (a.ao ? " m-hide" : "") + '"\x3e', d = a.posts, e = d.length, f = 0;f < e;f++) {
    var h = (0,z.K)(a, {post:d[f]}), k = b, l = "", m = h.post.creator ? h.post.creator.name : "Deleted User", q = hk(h), l = l + ('\x3ca href\x3d"' + (0,z.O)((0,z.P)(k.baseUrl)) + (0,z.O)(q) + '" title\x3d"' + (0,z.O)(h.post.title) + " by " + (0,z.O)(m) + '" target\x3d"_blank"\x3e\x3ch3 class\x3d"m-bucket-list-item-post-title"\x3e' + (h.post.title ? (0,z.N)(h.post.title) : "Untitled") + '\x3c/h3\x3e\x3cp class\x3d"m-bucket-list-item-post-snippet"\x3e' + (0,z.N)(h.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e"), 
    c = c + ("\x3cli class\x3d'm-bucket-list-item m-bucket-list-item-post'\x3e" + l + "\x3c/li\x3e")
  }
  return c + "\x3c/ul\x3e";
};
z.ix = function(a) {
  return'\x3ca class\x3d"m-logo" href\x3d"' + (0,z.O)((0,z.P)(a.baseUrl)) + '" target\x3d"_blank"\x3e\x3cspan class\x3d"icons icons-logo-m"\x3e\x3cspan class\x3d"m-screen-reader-text"\x3eMedium site navigation\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e';
};
var jx = function(a, b, c) {
  b = "";
  var d = hk(a), d = '\x3ca class\x3d"m-story" data-collapsed\x3d"true" href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + (0,z.O)(d) + '"\x3e' + (0,z.N)(a.post.title) + "\x3c/a\x3e", e = "", f = a.post.image ? (0,z.Uj)((0,z.K)(a.post.image, {cropType:"t", verticalGradient:"29/81/55"}), 0, c) : "", h = a.collection || a.post.collection, e = e + ('\x3cdiv class\x3d"m-hero m-hero-story' + (f ? " m-image-cover m-hero-light" : "") + '" ' + (f ? 'style\x3d"background-image: url(' + (0,z.O)((0,z.P)(f)) + ')"' : 
  "") + "\x3e" + (0,z.ix)(c) + '\x3ch1 class\x3d"m-hero-title m-hero-title-large"\x3e'), f = hk({post:a.post, collection:h}), e = e + ('\x3ca href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + (0,z.O)(f) + '" target\x3d"_blank"\x3e' + (0,z.N)(a.post.title) + "\x3c/a\x3e\x3c/h1\x3e" + (a.post.subtitle ? '\x3cp class\x3d"m-hero-subtitle"\x3e' + (0,z.N)(a.post.subtitle) + "\x3c/p\x3e" : "") + '\x3cdiv class\x3d"m-hero-meta-info"\x3e\x3ca class\x3d"m-avatar m-avatar-micro m-avatar-borderless" href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + 
  "/@" + (0,z.O)(a.post.creator.username) + '" target\x3d"_blank"\x3e'), f = (0,z.Uj)({imageId:a.post.creator.imageId || a.post.creator.image.imageId, width:"64", height:"64", strategy:"crop-fixed"}, 0, c), e = e + ('\x3cimg src\x3d"' + (0,z.O)((0,z.P)(f)) + '" alt\x3d"@' + (0,z.O)(a.post.creator.username) + '\'s avatar"\x3e\x3c/a\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + "/@" + (0,z.O)(a.post.creator.username) + '" target\x3d"_blank"\x3e' + (0,z.N)(a.post.creator.name) + "\x3c/a\x3e" + 
  (h ? " in " + Zo({collection:h, pM:!0, baseUrl:c.baseUrl}) : "") + "\x3c/div\x3e\x3c/div\x3e");
  return b += (0,z.kx)({code:d, mx:e}, c);
};
var lx = function(a, b, c) {
  b = '\x3ca class\x3d"m-collection" href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + "/" + (0,z.O)(a.collection.slug) + '"\x3e' + (0,z.N)(a.collection.name) + "\x3c/a\x3e";
  var d = "", e = (0,z.Uj)((0,z.K)(a.collection.image, {strategy:"resample", verticalGradient:"29/81/60", darken:"25"}), 0, c), e = '\x3cdiv class\x3d"m-image-cover" style\x3d"background-image:url(' + (0,z.O)((0,z.P)(e)) + ')"\x3e', f = '\x3cdiv class\x3d"m-hero m-hero-light m-hero-collection"\x3e' + (0,z.ix)(c) + '\x3ch1 class\x3d"m-hero-title m-hero-title-large"\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + "/" + (0,z.O)(a.collection.slug) + '" target\x3d"_blank"\x3e' + (0,z.N)(a.collection.name) + 
  '\x3c/a\x3e\x3c/h1\x3e\x3cp class\x3d"m-hero-description"\x3e' + (0,z.N)(a.collection.shortDescription) + "\x3c/p\x3e", h;
  h = '\x3ca class\x3d"m-btn m-btn-rounded m-btn-light" href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + "/" + (0,z.O)(a.collection.slug) + '" target\x3d"_blank"\x3eFollow' + (a.collection.metadata.followerCount ? '\x3cspan class\x3d"m-btn-count"\x3e' + Ro({fe:a.collection.metadata.followerCount}) + "\x3c/span\x3e" : "") + "\x3c/a\x3e";
  e += f + h + "\x3c/div\x3e";
  if (a.recommendedPosts && a.recommendedPosts.length && a.latestPosts && a.latestPosts.length) {
    f = '\x3cul class\x3d"m-bucket-nav"\x3e';
    h = ["Latest", "Trending"];
    for (var k = h.length, l = 0;l < k;l++) {
      var m = h[l], f = f + ('\x3cli class\x3d\'m-bucket-nav-item\'\x3e\x3cbutton data-action\x3d"toggle-bucket" data-action-value\x3d"' + (0,z.O)(l) + '" class\x3d"m-btn m-btn-chromeless' + (0 == l ? " m-btn-active" : "") + '"\x3e' + (0,z.N)(m) + "\x3c/button\x3e\x3c/li\x3e")
    }
    a = '\x3cdiv class\x3d"m-bucket"\x3e' + (f + "\x3c/ul\x3e") + '\x3cdiv class\x3d"m-bucket-group"\x3e' + (0,z.hx)((0,z.K)(a, {label:!1, posts:a.latestPosts, Va:!0}), c) + (0,z.hx)((0,z.K)(a, {label:!1, ao:!0, Va:!0, posts:a.recommendedPosts}), c) + "\x3c/div\x3e\x3c/div\x3e";
  } else {
    a = "";
  }
  return(0,z.kx)({code:b, mx:d + (e + a + "\x3c/div\x3e")}, c);
};
z.kx = function(a, b) {
  return'\x3cp\x3eYou can add this embed to your website by copying and pasting the HTML code below. \x3ca class\x3d"link link-underline" href\x3d"' + (0,z.O)((0,z.P)(b.embedSupportUrl)) + '"\x3eLearn more\x3c/a\x3e.\x3c/p\x3e\x3ctextarea class\x3d"input-text input-textarea" wrap\x3d"off" data-action\x3d"select-target"\x3e\x3cscript async src\x3d"https://static.medium.com/embed.js"\x3e\x3c/script\x3e' + (0,z.yh)(a.code) + '\x3c/textarea\x3e\x3ch3 class\x3d"bucket-label"\x3ePreview\x3c/h3\x3e\x3cdiv class\x3d"embed"\x3e' + 
  (0,z.Sh)(a.mx) + "\x3c/div\x3e";
};
var mx = function(a, b) {
  a = a || {};
  return'\x3cfooter class\x3d"footer ' + (a.wR ? "footer-fixed" : "") + " " + (a.Va ? "footer-light" : "") + ' footer-promotional btn-set layout-single-column"\x3e\x3ca class\x3d"btn btn-link" data-action\x3d"sign-in-prompt" href\x3d"/m/signin" title\x3d"Sign in to ' + (0,z.O)(b.productName) + '"\x3eSign in\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Learn about writing on ' + (0,z.O)(b.productName) + '" href\x3d"' + (0,z.O)((0,z.P)(b.howToPostUrl)) + '"\x3eHow do I write?\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"About ' + 
  (0,z.O)(b.productName) + '" href\x3d"' + (0,z.O)((0,z.P)(b.welcomeUrl)) + '"\x3eAbout ' + (0,z.N)(b.productName) + '\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Visit the top stories on ' + (0,z.O)(b.productName) + '" href\x3d"/top-100/' + (0,z.O)(b.bestOfLatestSlug) + '"\x3eFind something to read\x3c/a\x3e' + (a.dM ? '\x3ca class\x3d"btn btn-small btn-primary btn-light no-user-select" data-action\x3d"sign-in-prompt" href\x3d"/m/signin"\x3eJoin ' + (0,z.N)(b.productName) + "\x3c/a\x3e" : "") + 
  "\x3c/footer\x3e";
};
var nx = function(a, b, c) {
  return th("j", a.GL)(null, null, c);
};
var ox = function(a, b, c) {
  z.Ho.call(this, a);
  this.$ = b.postId;
  this.Ha = b.collectionSlug;
  this.ia = a.get("app");
  this.da = a.get("datastore");
  this.ea = a.get("request");
  this.U = a.get("dialog");
  this.Ba = a.get("dom-monitor");
  this.Vd = a.get("element-tracker");
  this.Zq = a.get("twitter");
  this.eG = a.get("facebook");
  this.Xa = a.get("popover");
  this.bK = a.get("scroll-tracker");
  this.Sa = this.Ig = null;
  this.Oa = (0,z.Jo)(this, "butter-bar");
  this.rJ = c;
  this.la = this.Cy(c.hd);
  this.Lz = new Xr(c.ko || this.Ha || "", this.la ? String(this.la.Sn("id")) : "");
  this.jH = !!c.uM;
  this.Ji = c.intendedCollection;
  this.td = this.Ey = null;
  px++;
};
var qx = function(a) {
  return a.xa.get("creator.userId") == (0,z.H)("currentUser.userId");
};
var rx = function(a) {
  (0,z.t)(a.Ff, "grid-breaking");
  var b = a.N.getElementsByClassName("post-author-side")[0] && a.N.getElementsByClassName("post-author-card")[0];
  if (b) {
    var c = (0,z.oi)(b) + b.offsetHeight;
    (0,z.Ew)(a.qm, function(a) {
      var b = (0,z.oi)(a) < c;
      (0,z.Tc)(a, "grid-breaking-override", b);
    }, a);
  }
};
var sx = function(a) {
  return!0 === (0,z.H)("variants.enable_notes") && "false" != a.Ff.getAttribute("data-allow-notes");
};
var tx = function(a) {
  var b = 500 >= window.innerWidth ? "notes-mobile" : "notes";
  sx(a) ? (0,z.s)((0,z.r)((0,z.r)(a.Sa.Aa(Pn(250)), function() {
    return this.ca.load(b);
  }, a), function(a) {
    this.Xd = a.cl(this, this.xa, this.Ff, qx(this), this.bb, !1);
  }, a), z.Gj) : (0,z.Ic)(!0);
};
var ux = function(a) {
  if (!a.rh() || a.J(".post-footer").firstChild) {
    return(0,z.Ic)(!0);
  }
  var b = String((0,z.H)("variants.logged_out_footer"));
  if ("landscape" == b || "covers" == b) {
    return a.zA(b);
  }
  var c;
  a.ju = new xs(a.La(), a.J(".post-footer"), a.$, a.Lz, a.Vd);
  a.ju.bd();
  c = (0,z.Ic)(!0);
  "toolbar" == b && (0,z.r)(c, a.zA.bind(a, b));
  return c;
};
var vx = function(a, b) {
  (0,z.Gj)(b);
  a.U.error(b);
};
var wx = function(a) {
  return a.Ha ? z.Pq.Q({postId:a.$, collectionSlug:a.Ha}) : z.xx.Q({postId:a.$});
};
var yx = function(a) {
  this.fu = a;
  this.cc = {};
};
var zx = function(a, b, c, d, e, f) {
  z.Oj.call(this);
  this.ca = a;
  this.pa = b;
  this.da = a.get("datastore");
  this.td = new wq(a);
  this.ek = c;
  this.kc = d;
  this.xm = (0,z.pk)(d, "id");
  this.la = e;
  this.iK = f;
};
var Ax = function(a, b) {
  return b.filter(function(a) {
    a = a.get("virtuals").postedIn;
    for (var b = 0;b < a.length;b++) {
      if (a[b].collectionId == this.xm && "APPROVED" == a[b].status) {
        return!0;
      }
    }
    return!1;
  }, a);
};
var Bx = function(a, b) {
  for (var c in a.get("virtuals.postedIn")) {
    var d = a.get("virtuals.postedIn")[c];
    if (d.collectionId == b) {
      return d.status || "NOT_FOUND";
    }
  }
  return "NOT_FOUND";
};
var Cx = function(a, b, c) {
  var d = (0,z.Vj)({size:"full", Tw:!0, image:a.collection.image}, c);
  b = [{name:"Latest", href:"/" + a.collection.slug, Wb:"latest" == a.filterBy}, {name:"Trending", href:"/" + a.collection.slug + "/trending", Wb:"recommended" == a.filterBy}];
  var e = [{name:"Latest", href:"/" + a.collection.slug, Wb:"latest" == a.filterBy}, {name:"Trending", href:"/" + a.collection.slug + "/trending", Wb:"recommended" == a.filterBy}, {name:"Submissions", href:"/" + a.collection.slug + "/submissions", Wb:"submissions" == a.filterBy}], f = '\x3cdiv class\x3d"layout-fill-height"\x3e' + (0,z.aq)((0,z.K)(a, {Va:!0, zr:'\x3cdiv class\x3d"metabar-text collection-editor" data-shorthand\x3d"Edited"\x3e' + (a.collection.user ? '\x3cspan class\x3d"collection-editor-label"\x3eCollection edited\x3c/span\x3e by ' + 
  Xo({user:a.collection.user}) : "") + "\x3c/div\x3e", Oh:'\x3cdiv class\x3d"btn-set"\x3e' + (c.isAuthenticated && c.useragent.supportsDesktopEdit ? '\x3cbutton data-action\x3d"show-cross-poster" class\x3d"btn btn-light hide-on-mobile hide show-cross-poster"\x3e' + (c.isAuthenticated && a.collection.user && a.collection.virtuals.canAdminister ? "Add/Remove your story" : "Submit/Remove your story") + "\x3c/button\x3e" : "") + (c.isAuthenticated && a.collection.user && c.currentUser.userId == a.collection.user.userId ? 
  '\x3ca href\x3d"/' + (0,z.O)(a.collection.slug) + '/settings" title\x3d"Edit collection" class\x3d"btn btn-light hide-on-mobile"\x3eEdit\x3c/a\x3e' : "") + (c.variants.enable_embed_ui ? '\x3cbutton class\x3d"btn btn-circle btn-embed" title\x3d"Embed this collection" data-action\x3d"embed-collection"\x3e\x3cspan class\x3d"icons icons-embed"\x3e\x3c/span\x3e\x3c/button\x3e' : "") + "\x3c/div\x3e"})), h = '\x3cheader class\x3d"hero hero-collection"\x3e\x3cdiv class\x3d"align-middle layout-single-column layout-foreground layout-fill-height"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch1 class\x3d"hero-title"\x3e' + 
  (0,z.N)(a.collection.name) + '\x3c/h1\x3e\x3cp class\x3d"hero-description"\x3e' + (0,z.N)(a.collection.description) + '\x3c/p\x3e\x3cdiv class\x3d"hero-actions btn-set"\x3e' + To({collection:a.collection, Va:!0}, 0, c) + "\x3c/div\x3e", k;
  if (c.variants.show_collection_tags) {
    k = k = {tags:a.collection.tags, ZD:"/search?q\x3d", className:"hero-collection-tags"};
    var l = '\x3cdiv class\x3d"tags' + (k.className ? " " + (0,z.O)(k.className) : "") + '"\x3e';
    if (k.tags) {
      for (var m = k.tags, q = m.length, x = 0;x < q;x++) {
        var G = (k.wN ? k.wN : "") + m[x], l = l + ('\x3ca href\x3d"' + (0,z.O)((0,z.P)(k.ZD ? k.ZD + G : "#")) + '" rel\x3d"token" data-action\x3d"focus-token" data-value\x3d"' + (0,z.O)(G) + '"\x3e' + (0,z.N)(G) + "\x3c/a\x3e")
      }
    }
    k = l += (k.rR ? '\x3cdiv class\x3d"tags-input"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e";
  } else {
    k = "";
  }
  return d += f + (h + k + "\x3c/div\x3e\x3c/div\x3e\x3c/header\x3e") + '\x3cdiv class\x3d"layout-foreground ' + (c.useragent.isMobile || c.useragent.isTablet ? "background-gradient" : "") + '"\x3e' + (0,z.Zp)((0,z.K)(a, {Va:!0, Io:a.collection.virtuals.canAdminister ? e : b, ao:!(a.posts.length || a.collection.metadata.postCount && "recommended" == a.filterBy || a.collection.virtuals.canAdminister)}), c) + (a.posts.length ? (0,z.tp)((0,z.K)(a, {Hw:!0, Va:!0, uB:!0, ji:(0,z.N)(a.collection.name) + 
  " has no stories yet", ao:!0, ND:a.collection.virtuals.canAdminister && "submissions" == a.filterBy}), c) : a.collection.metadata.postCount && "recommended" == a.filterBy ? (0,z.vp)({ji:"This collection is new, so there are no trending stories yet.\x3cbr\x3eWidely read and recommended stories will appear here.", Va:!0}) : "submissions" == a.filterBy ? (0,z.vp)({ji:"When a story is submitted to your collection, it will appear here for your review", Va:!0}) : (0,z.tp)((0,z.K)(a, {Va:!0, uB:!0, ji:(0,z.N)(a.collection.name) + 
  " has no stories yet"}), c)) + "\x3c/div\x3e\x3c/div\x3e";
};
var Jq = function(a) {
  return'\x3cdiv class\x3d"overlay-form-container story-rejection-form"\x3e\x3cdiv class\x3d"story-rejection-caption"\x3eWe won\'t email ' + (0,z.N)(a.SD) + ' that their story hasn\'t been accepted unless you write an optional note.\x3c/div\x3e\x3ctextarea class\x3d"overlay-form-text-input textarea-seamless text-input-border story-rejection-note" placeholder\x3d"Add an optional note for ' + (0,z.O)(a.SD) + '..."\x3e\x3c/textarea\x3e\x3c/div\x3e';
};
var Dx = function(a, b) {
  z.Ho.call(this, a);
  this.zc = b.collectionSlug;
  this.path = b.path;
  this.filterBy = this.Du(b.path);
  this.$k = a.get("app");
  this.Ln = a.get("datastore");
  this.ls = a.get("request");
  this.Oa = (0,z.Jo)(this, "butter-bar");
  this.In = this.Jn = null;
};
var Ex = function(a, b, c) {
  (0,z.Gi)(a).F("open-post", Fx.bind(null, b, String(c.Sn("id"))));
};
var Fx = function(a, b, c) {
  if (!c.Xn) {
    var d = c.value;
    0 === c.value.indexOf("/") && (d = d.substr(1));
    b = {hd:b};
    if (c = c.target.getAttribute("data-source")) {
      b.source = c;
    }
    a.navigate(d, b);
  }
  return!1;
};
z.Gx = function(a, b, c) {
  z.Oj.call(this);
  this.Ba = a.get("dom-monitor");
  this.gv = !1;
  this.wd = b;
  this.rF = c;
};
var Hx = function(a) {
  Ak(a.wd) || (0,z.s)((0,z.Bc)(Ek(a.wd, a.rF), function() {
    this.gv && this.Ql();
  }, a), z.Gj);
};
z.Ix = function(a) {
  z.Mj.call(this);
  this.ca = a;
  this.ia = a.get("app");
  this.da = a.get("datastore");
};
z.Dy = function(a, b) {
  if (a.jh) {
    throw Error("The container element should not be set twice.");
  }
  a.jh = b;
  return a;
};
z.Ey = function(a, b) {
  a.Zu = b;
  return a;
};
var Fy = function(a, b, c) {
  Dx.call(this, a, b);
  this.hd = c.hd || "";
  this.Kk = a.get("publish-state");
  this.U = a.get("dialog");
};
var Gy = function(a, b) {
  Cs.call(this, a, "disabled");
  this.U = b.get("dialog");
};
var Hy = function(a, b) {
  Cs.call(this, a, "dismiss-interstitial");
  this.ia = b.get("app");
  this.ia.D(xq, this.jq, this);
};
var Iy = function() {
  (0,z.Od)(window.document.querySelector(".overlay-interstitial"));
};
var Jy = function(a) {
  Cs.call(this, a, "select-target");
};
var Ky = function(a, b) {
  Cs.call(this, a, "send-verify-email");
  this.ca = b;
};
z.Ly = function(a, b) {
  var c = {};
  c.redirect = b || "";
  var d = a.get("request"), e = a.get("dialog"), f = a.get("app");
  (0,z.s)((0,z.r)(d.post(My.Q(), c, {na:!0}), function() {
    e.open({title:"Thanks", bodyHtml:(0,z.Lp)(), type:z.nk});
  }), function(a) {
    (0,z.Gj)(a);
    401 === a.status ? (a = e.error("We were unable to send your verification email because you are no longer signed in."), a.D("close", function() {
      window.location.reload();
    })) : 400 === a.status ? (a = e.open({title:"Thanks, but…", bodyHtml:"It looks like your account is already verified.", type:z.nk}), b && a.D("close", function() {
      f.navigate(b);
    })) : a = e.error(Kp());
  });
};
var Ny = function(a) {
  a = (0,z.ma)(a) ? new Mf(a) : a;
  if (!a.Be || "http" === a.Be || "https" === a.Be) {
    if (!a.hl || Wf((0,z.Oy)(), a)) {
      var b = (0,z.Py)();
      Qy.location = a.toString();
      b.Uh() === (0,z.Py)().Uh() && (0,z.Ry)();
    }
  }
};
z.Ry = function() {
  Qy.location.reload(!0);
};
z.Oy = function() {
  return new Mf(Qy.location.href);
};
var Sy = function() {
  var a = Qy.location;
  return a.origin ? new Mf(a.origin) : Xf(a.protocol, a.hostname, a.port);
};
z.Py = function() {
  var a = Qy.location;
  return Xf(null, null, null, a.pathname, a.search, a.hash);
};
var Ty = function(a, b) {
  a = a.bind(b || null);
  if (null != window.FB) {
    a();
  } else {
    if (Uy.push(a), !window.fbAsyncInit) {
      window.fbAsyncInit = function() {
        window.FB.init({appId:(0,z.H)("facebookKey"), frictionlessRequests:!0, oauth:!0, version:"v2.0"});
        for (var a;a = Uy.pop();) {
          a();
        }
      };
      var c = window.document.createElement("script");
      c.type = "text/javascript";
      c.async = !0;
      c.src = "//connect.facebook.net/en_US/sdk.js";
      (0,z.Ld)(c, window.document.querySelector("script"));
    }
  }
};
z.Vy = function(a, b, c) {
  z.Oj.call(this);
  this.ea = a.get("request");
  this.Fa = b;
  this.mp = null;
  this.ba = c || {};
};
var Wy = function(a, b) {
  z.Mj.call(this);
  this.name = a;
  this.Ai = b;
  this.RC = a;
};
var Xy = function(a, b) {
  (0,z.ma)(b) && (b = Error(b));
  (0,z.Gj)(b);
  a.S("error");
};
var Yy = function(a) {
  if (!a.Ai) {
    return!0;
  }
  if (!a.Ai.closed) {
    return!1;
  }
  a.S("close");
  a.Ob();
  return!0;
};
var Zy = function() {
  this.yn = window;
  this.Vi = {};
  this.Ip = null;
  this.pv = new aj("popup");
  $y && (0,z.Q)(this.yn, "message", this.vH, this);
};
var az = function(a, b, c, d) {
  (a = a.open(b, c, d)) && a.Ai.focus();
  return a;
};
var bz = function(a, b) {
  var c = a.yn, d = [], e = {scrollbars:!0, aN:!0, toolbar:!1, location:!0, width:670, height:690};
  (0,z.Bb)(e, b);
  e.left || e.top || (e.width = (0,window.parseInt)(e.width, 10), e.height = (0,window.parseInt)(e.height, 10), e.left = Math.max(c.screenX + Math.round(c.outerWidth / 2 - e.width / 2), 0), e.top = Math.max(c.screenY + Math.round(c.outerHeight / 2 - e.height / 2), 0));
  (0,z.sb)(e, function(a, b) {
    cz[b] && ("boolean" == typeof a && (a = a ? "yes" : "no"), d.push(cz[b] + "\x3d" + a));
  });
  return d.join(",");
};
var dz = function(a, b) {
  Cs.call(this, a, ["twitter-auth", "facebook-auth", "sign-in-prompt"]);
  this.xJ = b.get("popup-manager");
  this.ea = b.get("request");
  this.U = b.get("dialog");
  this.Xa = b.get("popover");
  this.ca = b;
};
var ez = function(a) {
  var b = {location:(0,z.Oy)().toString()};
  a && (b.source = a);
  (0,z.Hk)(fz, b);
};
var gz = function(a, b, c) {
  b.target.getAttribute("data-requires-token") && !c ? hz(a, b) : (iz(a, {title:(0,z.I)(xp), bodyHtml:(0,z.I)(yp), type:"signin", Tl:c || b.target.getAttribute("data-redirect")}), (0,z.H)("variants.can_login_with_facebook") && Ty(function() {
    var a = this.U.Hc;
    a && (a = a.J(".btn-facebook")) && a.removeAttribute("disabled");
  }, a));
};
var hz = function(a, b) {
  var c = b.target;
  c.getAttribute("data-requires-token") ? (0,z.s)((0,z.r)(a.ea.get(jz.Q(), {qe:!0, background:!0}), function(a) {
    var e = new Mf(c.getAttribute("data-redirect")) || (0,z.Py)();
    Rf(e, ag({token:a.value}));
    c.removeAttribute("data-requires-token");
    gz(this, b, e.toString());
  }, a), function(a) {
    (0,z.Gj)(a);
    c.removeAttribute("data-requires-token");
    gz(this, b);
  }, a) : gz(a, b);
};
var kz = function(a, b) {
  ez(b.target.getAttribute("data-login-source"));
  var c = Sy();
  Qf(c, lz.Q());
  Rf(c, ag({refresh:1, dg:mz.Q()}));
  iz(a, {bodyHtml:(0,z.I)(Sp), type:"wait"});
  var d = az(a.xJ, c, "login", {}), e = !1;
  Zi(d, "close", function() {
    e || this.U.Hc.close();
  }, a);
  Zi(d, "error", function() {
    e || (e = !0, d.close(), nz(this));
  }, a);
  d.D("data", function(a) {
    iz(this, {bodyHtml:(0,z.I)(Tp), type:"wait"});
    e = !0;
    d.close();
    var c = Sy();
    Qf(c, oz.Q());
    if (a.oauth_token && a.oauth_verifier) {
      a = {source:"twitter", oauthRequestToken:a.oauth_token, oauthRequestTokenVerifier:a.oauth_verifier};
      var k = b.target.getAttribute("data-redirect-url");
      (0,z.s)((0,z.r)(this.ea.post(c, a, {na:!0, ee:0}), function() {
        k ? Ny(k) : (0,z.Ry)();
      }, this), function(a) {
        401 == a.status ? pz(this, a.errorInfo, "twitter", k) : ((0,z.Gj)("requestAuthCredentials errored: " + a.status), nz(this));
      }, this);
    } else {
      a.denied || (0,z.Gj)("SignIn handler received an unexpected response: " + JSON.stringify(a)), this.U.Hc.close();
    }
  }, a);
};
var qz = function(a, b) {
  ez(b.target.getAttribute("data-login-source"));
  iz(a, {bodyHtml:(0,z.I)(Sp), type:"wait"});
  window.FB.login(function(a) {
    iz(this, {bodyHtml:(0,z.I)(Tp), type:"wait"});
    if ("connected" === a.status && a.authResponse) {
      var d = Sy();
      Qf(d, oz.Q());
      a = {source:"facebook", accessToken:a.authResponse.accessToken, identifier:a.authResponse.userID};
      var e = b.target.getAttribute("data-redirect-url");
      (0,z.s)((0,z.r)(this.ea.post(d, a, {na:!0, ee:0}), function() {
        e ? Ny(e) : (0,z.Ry)();
      }, this), function(a) {
        401 == a.status ? pz(this, a.errorInfo, "facebook", e) : ((0,z.Gj)("requestAuthCredentials errored: " + a.status), nz(this));
      }, this);
    } else {
      this.U.Hc.close();
    }
  }.bind(a), {scope:"email"});
};
var pz = function(a, b, c, d) {
  b.source = c;
  c = iz(a, {title:(0,z.I)(zp), bodyHtml:(0,z.I)(Rp, b), Mh:"Create account", YL:!0, type:Kq});
  var e = c.J(".enter-username"), f = new z.Vy(a.ca, e, b);
  f.H();
  f.D("availability-update", a.ep, a);
  c.D(Lq, a.CF.bind(a, d));
  c.D("close", function() {
    f.ya("availability-update", this.ep, this);
    f.ka();
    (0,z.ad)(f);
  }, a);
};
var rz = function(a, b, c, d) {
  a = a.U.Hc.J(b);
  (0,z.t)(a, "input-group-error");
  a.querySelector(".input-group-title").innerHTML = c;
  d && (new z.Ui(a.querySelector("input"), {name:"shimmy-shake", duration:400})).start();
};
var sz = function(a, b, c) {
  a = a.U.Hc.J(b);
  (0,z.u)(a, "input-group-error");
  a.querySelector(".input-group-title").innerHTML = c;
};
var tz = function(a, b) {
  a.U.Hc.Mj(".btn-overlay-confirm,.enter-email,.enter-username,.enter-name").forEach(b);
};
var nz = function(a) {
  a.U.Hc.update({title:"Something bad happened", bodyHtml:"Sorry, we couldn't finish the sign-in process. Please try again.", type:z.nk});
};
var iz = function(a, b) {
  var c = a.U.Hc;
  return c ? c.update(b) : a.U.open(b, !0);
};
var uz = function(a, b) {
  Cs.call(this, a, "stat-link");
  this.ia = b.get("app");
};
var vz = function(a, b, c, d) {
  Cs.call(this, a, d);
  this.da = c.get("datastore");
  this.ea = c.get("request");
  this.Ru = {};
  this.Oa = c.get("butter-bar");
  this.hH = b;
};
var wz = function(a, b, c) {
  (a = a.da.Fb(b)) && a.set("virtuals.isOnReadingList", c);
  a = window.document.body.querySelectorAll('.btn-bookmark[data-post-id\x3d"' + b + '"]');
  for (var d = (c ? "remove-from" : "add-to") + "-reading-list", e = 0;e < a.length;e++) {
    var f = a[e];
    c ? od(f, "active") : pd(f, "active");
    a[e].setAttribute("data-action", d);
  }
  a = window.document.body.querySelectorAll('.reading-list-status[data-post-id\x3d"' + b + '"]');
  if (a.length) {
    for (d = a[0].getAttribute("data-reading-time"), b = (0,z.I)(fp, {postId:b, isOnReadingList:c, readingTime:d, tM:!0}), c = 0;c < a.length;c++) {
      a[c] && (a[c].outerHTML = b);
    }
  }
};
var xz = function(a, b) {
  vz.call(this, a, !0, b, "add-to-reading-list");
};
var yz = function(a, b) {
  vz.call(this, a, !1, b, "remove-from-reading-list");
};
var zz = function(a, b) {
  Cs.call(this, a, "update-blacklist");
  this.ea = b.get("request");
  this.Oa = b.get("butter-bar");
};
var Az = function(a, b) {
  Cs.call(this, a, "toggle-subscribe-collection");
  this.ea = b.get("request");
  this.da = b.get("datastore");
  this.Oa = b.get("butter-bar");
};
var Bz = function(a, b) {
  Cs.call(this, a, "toggle-subscribe-user");
  this.ea = b.get("request");
  this.Oa = b.get("butter-bar");
};
var Cz = function() {
  (0,z.H)("currentUser") && Jk(["identify", (0,z.H)("currentUser.userId")]);
  var a = (0,z.H)("variants.is_super_user") ? "superuser" : (0,z.H)("variants.can_create_post") ? "creator" : (0,z.H)("isAuthenticated") ? "loggedin" : "anonymous";
  (0,z.Sk)(2, a, 1);
  Jk(["set", {userType:a}]);
  a = {};
  a.NH = !!(0,z.H)("variants.can_use_new_homepage");
  a.WF = !!(0,z.H)("variants.can_see_post_welcome_footer");
  var b = (0,z.H)("variants.logged_out_footer");
  a.O2L = "landscape" == b;
  a.O2C = "covers" == b;
  a.O2T = "toolbar" == b;
  a.O2N = "landscape" != b && "covers" != b && "toolbar" != b;
  a.YPH = !!(0,z.H)("variants.show_promotional_homepage");
  a.NPH = !(0,z.H)("variants.show_promotional_homepage");
  for (var c in a) {
    var b = "testBucket-" + c, d;
    d = a[c];
    d = "string" == typeof d ? d : "number" == typeof d ? String(d) : d ? "true" : "false";
    Jk(["set", Db(b, d)]);
    Kk(Dz, {testName:b, testBucket:d});
  }
};
var Ez = function(a) {
  this.ea = a.get("request");
  this.ia = a.get("app");
  this.Uc = Fz.Q();
  this.Xo = new z.ok({newActivityCount:0});
  this.ia.D(Sn, this.su, this);
};
var Gz = function(a) {
  (0,z.H)("isAuthenticated") && (0,z.r)(a.ea.get(a.Uc, {na:!0, background:!0}), function(a) {
    a.value.hasOwnProperty("newActivityCount") && this.Xo.set("newActivityCount", a.value.newActivityCount);
  }, a);
};
var Hz = function(a) {
  this.ia = a.get("app");
  this.Je = {};
  this.wa = {};
  this.Qi = {};
  this.bj = {};
  this.ia.D(Sn, this.Ri, this);
};
var Iz = function(a, b) {
  a.Je[b] || (a.Je[b] = new z.vc, a.bj[b] = new z.vc, a.Qi[b] = 0, Jz(a, b));
};
var Kz = function(a, b) {
  b = Lz(b);
  if (a.Ze(b)) {
    return(0,z.Ic)(a.bj[b]);
  }
  Iz(a, b);
  return a.bj[b].Bb();
};
var Mz = function(a, b) {
  var c = b.map(function(a) {
    return Kz(this, a);
  }, a);
  return new z.to(c, !1, !0);
};
var Lz = function(a) {
  return 0 === a.indexOf("//") ? window.location.protocol + a : a;
};
var Jz = function(a, b) {
  var c = new window.Image, d = [];
  d.push((0,z.Q)(c, "load", a.bn, a));
  d.push((0,z.Q)(c, "abort", a.Me, a));
  d.push((0,z.Q)(c, "error", a.Me, a));
  a.wa[b] = d;
  c.src = b;
};
var Nz = function(a, b) {
  a.wa[b] && ((0,z.ci)(a.wa[b]), delete a.wa[b]);
};
z.Oz = function(a, b, c) {
  z.fq.call(this, a, b, c);
  this.Dp = "_obv.data._list_" + Pz++;
  this.Wt = "";
};
var Qz = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = a.Wt;
  d.id = a.Dp + (0,z.qa)(b);
  d.innerHTML = (0,z.Uq)(a, b);
  (0,z.Nd)(a.N, d, "undefined" != typeof c ? c : a.N.children.length);
  return d;
};
var Rz = function(a, b) {
  this.Oa = b;
  this.ia = a.get("app");
  this.Na = new z.Mj;
  this.D = this.Na.D.bind(this.Na);
  (0,z.Gi)(b).F("butter-bar-action", this.GJ, this).F("butter-bar-dismiss", this.NF, this).F("butter-bar-reload", this.JJ, this).F("undo", this.dJ, this);
};
var Sz = function(a, b, c) {
  function d() {
    e.call(this);
    b.apply(c || this);
  }
  function e() {
    this.Na.ya("action", d, this);
    this.Na.ya("deactivate", e, this);
  }
  a.Na.D("action", d, a);
  a.Na.D("deactivate", e, a);
};
var Tz = function(a) {
  return'\x3ch4 class\x3d"cards-heading follow-ups-title"\x3eFurther reading\x3c/h4\x3e\x3cdiv class\x3d"follow-ups-list"\x3e\x3c/div\x3e\x3cdiv class\x3d"follow-up-new"\x3e\x3cbutton class\x3d"btn btn-chromeless follow-up-start follow-up-link-prompt"' + (a.fL ? 'data-action\x3d"start-new-follow-up"' : (0,z.So)({dg:hk(a) + '#follow-up-editor"', prompt:"Sign in to suggest further reading", Fo:"followUp", wo:!0})) + '\x3e\x3cspan class\x3d"icons icons-add-further-reading"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-ups-prompt"\x3eSuggest a link\x3c/span\x3e\x3cspan class\x3d"follow-ups-empty-prompt"\x3eSuggest a link for further reading\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"follow-up follow-up-new-editor"\x3e\x3c/div\x3e\x3c/div\x3e';
};
var Uz = function(a, b, c) {
  return(a.canAdminister ? '\x3cul class\x3d"follow-up-visibility follow-up-visibility-dropdown" data-follow-up-id\x3d"' + (0,z.O)(a.followUp.followUpId) + '"\x3e' + (a.followUp.visibility == a.visibility.To ? '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + 
  (0,z.O)(a.visibility.by) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.O)(a.visibility.To) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e') + 
  (a.followUp.creatorId != a.hs ? '\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.O)(a.visibility.Ux) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : a.followUp.visibility != a.visibility.To ? '\x3cul class\x3d"follow-up-visibility" data-follow-up-id\x3d"' + (0,z.O)(a.followUp.followUpId) + '"\x3e\x3cli class\x3d"follow-up-visibility-item" data-tooltip\x3d"This link is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : 
  "") + (0,z.Vz)(a, c);
};
z.Vz = function(a, b) {
  return th("k", a.followUp.mediaResource.mediaResourceType)(a, null, b);
};
z.Wz = function(a, b) {
  if (a.length < b) {
    return a;
  }
  var c = a.substr(0, b), d;
  d = /\s/.test(c[c.length - 1]) ? 1 : (d = c.match(/\w+$/)) ? d.pop().length + 1 : 1;
  c = c.substr(0, c.length - d);
  !/[^a-zA-Z0-9]/.test(c[c.length - 1]) || (c = c.substr(0, c.length - 1));
  return c + "…";
};
var Xz = function(a, b, c) {
  z.Mj.call(this);
  this.ca = a;
  this.ea = a.get("request");
  this.yk = a.get("media-resource");
  this.$ = b;
  this.Wi = c;
  this.Bm = !1;
  this.Tc = new z.sk;
  a = new z.Qq(this.Tc);
  a.Bf(this.iH, this);
  this.gG = a;
  this.Wk = {};
};
var Yz = function(a, b) {
  var c = new z.Ot;
  c.bc(b.title);
  c.ig(b.description);
  c.Sj(b.mediaResourceId);
  var d = z.Ml.Zc(c);
  d.creator = (0,z.H)("currentUser");
  d.creatorId = d.creator.userId;
  d.visibility = a.Wi == d.creator.userId ? 2 : 1;
  d.mediaResource = a.yk.Pi[d.mediaResourceId].ab();
  var e = new z.ok(d);
  a.Tc.add(e);
  return(0,z.s)((0,z.r)(a.ea.post(Zz.Q({postId:a.$}), c, {na:!0, co:!0}), function(a) {
    $z(this, a.value, a.references, e);
  }, a), z.Gj);
};
var aA = function(a, b) {
  var c = a.zj(b), d = a.Tc.indexOf(c);
  a.Tc.remove(c);
  return(0,z.s)((0,z.r)(a.ea.Gd(bA.Q({postId:a.$, followUpId:b})), function() {
    (0,z.rk)(c);
  }), function(a) {
    (0,z.Gj)(a);
    this.Tc.Ih(c, d);
  }, a);
};
var cA = function(a, b, c) {
  a.Wk[b] && a.Wk[b].cancel();
  var d = a.zj(b), e = d.get("visibility");
  d.set("visibility", c);
  return a.Wk[b] = (0,z.s)((0,z.Bc)(a.ea.put("/p/" + a.$ + "/follow-ups/" + b + "/visibility", {visibility:c}, {na:!0}), function() {
    delete this.Wk[b];
  }, a), function(a) {
    a instanceof z.Mc || ((0,z.Gj)(a), d.set("visibility", e));
  });
};
var $z = function(a, b, c, d) {
  b = (0,z.fl)(b, c);
  b.mediaResource ? (c = (0,z.dA)(a.yk, b.mediaResource), b.mediaResource = c.ab()) : (0,z.Gj)("Missing mediaResource in FU " + b.followUpId + " at id " + b.mediaResourceId);
  (d = d || (0,z.uk)(a.Tc, "followUpId", b.followUpId)) ? d.ri(b) : a.Tc.add(b);
};
var eA = function(a, b, c) {
  z.v.call(this);
  this.ca = a;
  this.ia = a.get("app");
  this.U = a.get("dialog");
  this.lj = a.get("butter-bar");
  this.xa = b;
  this.$ = (0,z.pk)(b, "id");
  this.Wi = (0,z.pk)(b, "creatorId");
  this.ty = !!(0,z.H)("isAuthenticated");
  this.tF = c;
  this.Ea = this.ym();
  this.ba = new Xz(a, this.$, this.Wi);
  this.Sa = new z.Yr;
  (0,z.Gi)(this.Ea).F("start-new-follow-up", this.lA, this).F("delete-follow-up", this.$H, this).F("set-follow-up-visibility", this.TI, this);
  (0,z.Q)(this.Ea, "click", this.TH, this);
};
z.fA = function(a) {
  if (0 !== window.document.location.hash.indexOf("#fr-")) {
    return "";
  }
  var b = window.document.location.hash.substr(4);
  (0,z.Ms)(a.ia, "");
  return b;
};
z.gA = function(a, b) {
  var c = a.Ea.querySelector('[data-follow-up-id\x3d"' + b + '"]');
  c && c.scrollIntoView(!0);
};
var hA = function(a, b, c) {
  c = c || {};
  c.postId = a.$;
  (0,z.Hk)(b, c);
};
var iA = function(a, b, c) {
  var d = a.ba.zj(b).get("visibility");
  (0,z.s)((0,z.r)(a.Sa.Aa(cA(a.ba, b, c)), a.jG.bind(a, b, d)), a.kG, a);
};
var jA = function(a) {
  z.v.call(this);
  this.ca = a;
};
var kA = function() {
  z.Mj.call(this);
  window.performance.now();
};
var lA = function(a, b) {
  this.ca = a;
  this.mG = b;
  this.ea = a.get("request");
  this.Pi = {};
  this.Sm = {};
  this.Zp = {};
};
z.dA = function(a, b) {
  var c = b.mediaResourceId;
  c in a.Pi ? a.Pi[c].ri(b) : (a.Pi[c] = new z.ok(b), a.Sm[b.href] = c);
  return a.Pi[c];
};
var mA = function(a) {
  this.Iu = a.get("popup-manager");
};
var nA = function(a, b, c) {
  c = (b = a.username == (c.currentUser && c.currentUser.username)) ? "I just published " : "by " + (a.twitterScreenName ? "@" + a.twitterScreenName : a.name) + " ";
  var d = "";
  if (b && a.collaborators && a.collaborators.length) {
    for (var d = d + " Thanks to ", e = a.collaborators, f = e.length, h = 0;h < f;h++) {
      d += "@" + e[h].user.username + (h != f - 1 ? " " : "");
    }
  }
  return a = "" + ((b ? c : "") + "“" + a.content + "” " + (b ? "" : c) + a.url + d);
};
var oA = function(a) {
  this.Iu = a.get("popup-manager");
};
z.pA = function(a, b) {
  var c = (0,z.I)(a, b), d = c.length - 140;
  b.url && -1 != c.indexOf(b.url) && (d += 25 - b.url.length);
  0 < d && (b.content = (0,z.Wz)(b.content, b.content.length - d), c = (0,z.I)(a, b));
  return c;
};
var qA = function() {
  z.v.call(this);
  this.wa = [];
  this.lh = new z.Mj;
  this.wa.push((0,z.Q)(window.document, "mousedown", this.uh, this), (0,z.Q)(window.document, "mouseup", this.uh, this), (0,z.Q)(window.document, "mouseover", this.uh, this), (0,z.Q)(window.document, "click", this.uh, this), (0,z.Q)(window.document, "dblclick", this.uh, this), (0,z.Q)(window.document, "keydown", this.uh, this), (0,z.Q)(window.document, "keyup", this.uh, this), (0,z.Q)(window, "focus", this.uh, this), (0,z.Q)(window, "blur", this.sI, this));
};
var rA = function(a, b) {
  z.Mj.call(this);
  this.lh = a;
  this.vv = b;
  this.MA = (0,z.Mn)(b, this.eK, this);
  this.Wd = !1;
  this.Mt = this.Ls = 0;
  this.lh.D("active", this.JA, this);
  this.lh.D("idle", this.jv, this);
};
var sA = function(a, b, c) {
  this.lB = b;
  this.Vs = c;
  this.Na = new z.Mj;
  this.wb = tA;
  this.qq = [];
  this.D = this.Na.D.bind(this.Na);
};
var uA = function(a) {
  "])}while(1);\x3c/x\x3e" == a.substr(0, 16) && (a = a.substring(16));
  return a;
};
var vA = function(a) {
  for (var b = tA, c = 0;c < a.qq.length;c++) {
    b = Math.max(b, a.qq[c].state);
  }
  a.wb != b && (a.wb = b, a.Na.S("statechange", b));
};
var wA = function(a) {
  var b = [], c;
  for (c in a) {
    b.push((0,window.encodeURIComponent)(c) + "\x3d" + (0,window.encodeURIComponent)(a[c]));
  }
  return b.join("\x26");
};
var xA = function(a, b, c) {
  return c.isAuthenticated ? "\x3cp\x3eYou are logged out.\x3c/p\x3e" : "\x3cp\x3eYou need to be logged in to continue.\x3c/p\x3e";
};
z.yA = function(a, b) {
  z.v.call(this);
  this.ca = a;
  this.Vs = b;
  a.get("app").D(xq, this.jq, this);
  a.get("app").D(Sn, this.lI, this);
  a.get("request").D("send", this.SI, this);
  a.get("request").D("httperror", this.tu, this);
  a.get("request").D("successresponse", this.JI, this);
  a.get("dom-monitor").D("webfont-load", this.Dz, this);
  this.U = a.get("dialog");
  a.get("fps");
  this.Gy = [];
  zA(this);
  window.OB_loadErrors && (window.OB_loadErrors.forEach(this.Me, this), window.OB_loadErrors.length = 0, window.OB_loadErrors.push = this.Me.bind(this));
};
var zA = function(a) {
  var b = (0,z.ej)();
  window.OB_startTime && window.setTimeout(function() {
    var a = b - window.OB_startTime;
    (0,z.Ok)("pageload");
    (0,z.Pk)("client.loadtime", a);
    3E4 < a && (0,z.Ok)("slowload");
  }.bind(a), 0);
  window.performance && window.performance.timing && window.addEventListener("load", function() {
    window.setTimeout(function() {
      var c = window.performance.timing, d = c.navigationStart;
      (0,z.Pk)("client.perf.dns", c.domainLookupEnd - c.domainLookupStart);
      (0,z.Pk)("client.perf.firstByte", c.responseStart - d);
      (0,z.Pk)("client.perf.lastByte", c.responseEnd - d);
      (0,z.Pk)("client.perf.appstart", b - d);
      (0,z.Pk)("client.perf.domComplete", c.domComplete - d);
      (0,z.Pk)("client.perf.loadEnd", c.loadEventEnd - d);
      a.Dz();
    }, 500);
  }, !0);
};
var AA = function(a) {
  this.ca = a;
  this.Vu = BA;
  this.Dh = [];
  this.xz = null;
  a.get("app").D(xq, this.tK, this);
  a.get("app").D(Sn, this.aG, this);
};
var CA = function(a) {
  this.ia = a.get("app");
  this.ea = a.get("request");
  this.Kp = 0;
  this.ia.D(xq, this.rn, this);
  this.ia.D(Sn, this.$F, this);
  this.ea.D("statechange", this.refresh, this);
};
z.DA = function(a, b) {
  z.Oj.call(this);
  this.kF = a;
  this.FF = "mouseover" === a ? "mouseout" : EA;
  this.ma = null;
  this.DA = (0,z.Mn)(FA, this.TJ, this);
  this.UF = b;
};
z.GA = function() {
  this.qj = !1;
  this.xi = this.N = null;
  this.ht = "";
  this.Df = this.wt = this.xt = null;
  this.vr = "tooltip";
  this.Yk = "fade";
  this.zB = "tooltip-arrow";
  this.yB = 20;
  this.enable();
};
var HA = function(a, b, c) {
  a = Math.min(Math.abs(c), b - a.yB);
  return 0 < c ? -a : a;
};
var IA = function(a) {
  return "bottom" == a ? "top" : "top" == a ? "bottom" : "left" == a ? "right" : "left";
};
z.JA = function(a, b, c) {
  var d = (0,z.ti)(c), e = d.width, f = d.height;
  a.N.style.display = "";
  (0,z.ui)(a.N);
  a.N.style.visibility = "hidden";
  (0,z.Qc)(a.N, [a.vr, a.Yk]);
  var h = d.top, k = d.left, l = k + e / 2, m = h + f / 2, q, x, G, M;
  if ("top" == b || "bottom" == b) {
    c = a.N.offsetWidth;
    q = a.N.offsetHeight;
    G = f / 2;
    M = q / 2;
    M = "bottom" == b ? window.innerHeight - h - G - M : h + G - M;
    G = f / 2 + q / 2;
    f = G > M ? -1 * G : G;
    "top" == b && (f *= -1);
    if ("top" == b && 0 < f || "bottom" == b && 0 > f) {
      b = IA(b);
    }
    M = -1 * (k + e / 2);
    h = window.innerWidth - k - e / 2;
    G = c / 2;
    e = G > h ? h - G : -G < M ? G + M : 0;
    G = HA(a, c / 2, e);
  } else {
    c = a.N.offsetWidth;
    q = a.N.offsetHeight;
    x = e / 2;
    M = c / 2;
    M = "right" == b ? window.innerWidth - k - x - M : k + x - M;
    x = e / 2 + c / 2;
    e = x > M ? -1 * x : x;
    "left" == b && (e *= -1);
    if ("left" == b && 0 < e || "right" == b && 0 > e) {
      b = IA(b);
    }
    M = -1 * (h + f / 2);
    h = window.innerHeight - h - f / 2;
    x = q / 2;
    f = x > h ? h - x : -x < M ? x + M : 0;
    x = HA(a, q / 2, f);
  }
  m = Math.ceil(m + f - q / 2);
  l = Math.ceil(l + e - c / 2);
  e = (0,z.Df)(a.xi).y - d.top;
  d = a.N;
  m += e;
  e = (0,z.Df)(d);
  l instanceof z.rd && (m = l.y, l = l.x);
  l = d.offsetLeft + (l - e.x);
  f = d.offsetTop + (m - e.y);
  e = z.Re && (z.Oi || KA) && (0,z.hd)("1.9");
  l instanceof z.rd ? (m = l.x, l = l.y) : (m = l, l = f);
  d.style.left = Ef(m, e);
  d.style.top = Ef(l, e);
  d = a.N.getElementsByClassName(a.zB)[0];
  d.style.left = G ? G + Math.ceil(c / 2) + "px" : "";
  d.style.top = x ? x + Math.ceil(q / 2) + "px" : "";
  a.N.className = a.N.className.replace(new RegExp(a.vr + "-[^\\s]+"), "");
  (0,z.t)(a.N, a.vr + "-" + b);
  a.N.style.visibility = "";
};
z.LA = function(a) {
  z.GA.call(this);
  this.Ea = this.rp = this.qp = this.ma = null;
  this.vr = "popover";
  this.Yk = "fade";
  this.zB = "popover-arrow";
  this.yB = 30;
  this.Ba = a.get("dom-monitor");
};
z.MA = function(a, b, c, d, e, f) {
  if (!b || !c) {
    return(0,z.Jc)(Error("Missing content"));
  }
  a.remove();
  f = f || b.getAttribute("data-popover-position") || "top";
  var h = b.getAttribute("data-popover-type") || "html-content";
  a.N || (a.N = window.document.createElement("div"));
  a.xi = b;
  e = e || (0,z.pi)(b);
  e != a.Ea && (a.Ea && a.Ea.removeChild(a.N), a.Ea = e, a.Ea.appendChild(a.N));
  "html-content" == h ? a.N.innerHTML = Qp({JB:c, Yw:d || ""}) : "sign-in" == h && (d = a.N, e = b.getAttribute("data-redirect"), h = b.getAttribute("data-popover-signin-type"), c = '\x3cdiv class\x3d"popover-inner"\x3e\x3ch2\x3e' + (0,z.N)(c) + '\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + th("h", h)(null, null, void 0) + '\x3c/div\x3e\x3ca class\x3d"btn btn-primary" title\x3d"Sign in with Twitter" data-action\x3d"sign-in-prompt" data-redirect\x3d"' + (0,z.O)(e) + '" tabindex\x3d"-1"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e', 
  d.innerHTML = c);
  (0,z.JA)(a, f, b);
  (0,z.ci)(a.Df);
  a.qp || (a.qp = (0,z.Q)(window.document, "click", a.rG, a, !0));
  a.rp || (a.rp = (0,z.Q)(window.document, "touchend", a.$G, a, !0));
  a.Ba.D("resize-end", a.cz, a);
  a.ma = new z.vc;
  return a.ma;
};
z.NA = function(a, b) {
  var c = a.aa(), d = (0,z.uf)((0,z.ti)(c)), e = (0,z.Ad)(window), f = 0;
  20 > d.top ? (f = d.top - 20, c.style.top = c.offsetTop - f + "px") : 20 > e.height - d.bottom && (f = e.height - d.bottom - 20);
  f && b && (b.style.height = b.offsetHeight + f + "px");
};
z.OA = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Lj = !1;
  this.FD = !0;
};
z.PA = function(a, b) {
  z.OA.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.qf = this.state = null;
  a && this.init(a, b);
};
z.QA = function(a) {
  try {
    return!(!a || !a[z.RA]);
  } catch (b) {
    return!1;
  }
};
var SA = function(a, b, c, d, e) {
  this.Ij = a;
  this.js = null;
  this.src = b;
  this.type = c;
  this.al = !!d;
  this.xl = e;
  this.key = ++TA;
  this.Vl = this.qr = !1;
};
z.UA = function(a) {
  a.Vl = !0;
  a.Ij = null;
  a.js = null;
  a.src = null;
  a.xl = null;
};
z.VA = function(a) {
  this.src = a;
  this.ob = {};
  this.Lo = 0;
};
z.WA = function(a, b) {
  var c = b.type;
  if (!(c in a.ob)) {
    return!1;
  }
  var d = (0,z.cb)(a.ob[c], b);
  d && ((0,z.UA)(b), 0 == a.ob[c].length && (delete a.ob[c], a.Lo--));
  return d;
};
z.XA = function(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Vl && f.Ij == b && f.al == !!c && f.xl == d) {
      return e;
    }
  }
  return-1;
};
z.YA = function(a) {
  if ((0,z.na)(a) || !a || a.Vl) {
    return!1;
  }
  var b = a.src;
  if ((0,z.QA)(b)) {
    return b.mE(a);
  }
  var c = a.type, d = a.js;
  b.removeEventListener ? b.removeEventListener(c, d, a.al) : b.detachEvent && b.detachEvent((0,z.ZA)(c), d);
  z.$A--;
  (c = (0,z.aB)(b)) ? ((0,z.WA)(c, a), 0 == c.Lo && (c.src = null, b[z.bB] = null)) : (0,z.UA)(a);
  return!0;
};
z.ZA = function(a) {
  return a in cB ? cB[a] : cB[a] = "on" + a;
};
var dB = function(a, b, c, d) {
  var e = 1;
  if (a = (0,z.aB)(a)) {
    if (b = a.ob[b.toString()]) {
      for (b = (0,z.fb)(b), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.al == c && !f.Vl && (e &= !1 !== eB(f, d));
      }
    }
  }
  return Boolean(e);
};
var eB = function(a, b) {
  var c = a.Ij, d = a.xl || a.src;
  a.qr && (0,z.YA)(a);
  return c.call(d, b);
};
z.fB = function(a, b) {
  if (a.Vl) {
    return!0;
  }
  if (!z.gB) {
    var c = b || da("window.event"), d = new z.PA(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var f = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (f = d.currentTarget;f;f = f.parentNode) {
        c.push(f);
      }
      for (var f = a.type, k = c.length - 1;!d.Lj && 0 <= k;k--) {
        d.currentTarget = c[k], e &= dB(c[k], f, !0, d);
      }
      for (k = 0;!d.Lj && k < c.length;k++) {
        d.currentTarget = c[k], e &= dB(c[k], f, !1, d);
      }
    }
    return e;
  }
  return eB(a, new z.PA(b, this));
};
z.aB = function(a) {
  a = a[z.bB];
  return a instanceof z.VA ? a : null;
};
var hB = function(a, b, c) {
  b = "";
  if (0 < a.fD.length) {
    b += '\x3cul class\x3d"notifications-list"\x3e\x3cli class\x3d"notifications-list-heading"\x3eNotifications\x3c/li\x3e';
    a = a.fD;
    for (var d = a.length, e = 0;e < d;e++) {
      b += iB({Da:a[e]}, 0, c);
    }
    b += '\x3cli class\x3d"navigable-list-item notifications-show-more"\x3e\x3cbutton title\x3d"See older notifications" class\x3d"btn btn-chromeless notifications-more" data-action\x3d"notifications-more"\x3eSee older notifications\x26hellip;\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e';
  }
  return b;
};
var iB = function(a, b, c) {
  b = "";
  var d;
  if (a.Da.post) {
    if (d = "", a.Da.post) {
      var e = gk({post:a.Da.post, collection:a.Da.collection}, c), f = "";
      switch(a.Da.activityType) {
        case "follow_up_published":
        ;
        case "follow_up_created":
        ;
        case "post_added_as_follow_up":
          f += "#fr-" + (0,z.N)(a.Da.followUp.followUpId);
          break;
        case "post_noted":
        ;
        case "note_replied":
        ;
        case "post_note_replied":
        ;
        case "note_published":
        ;
        case "mention_in_note":
        ;
        case "mention_in_note_reply":
          f += "#" + (0,z.N)(a.Da.note.anchor) + "-" + (0,z.N)(a.Da.note.noteId);
      }
      d += (0,z.N)(e) + (0,z.N)(f);
    }
  } else {
    d = a.Da.collection ? "/" + (0,z.N)(a.Da.collection.slug) : "";
  }
  e = d;
  d = "post_recommended_milestone" != a.Da.activityType && "collection_followed_milestone" != a.Da.activityType;
  var f = '\x3cli class\x3d"notifications-list-item ' + (a.Da.isUnread ? " notifications-list-item-new" : "") + " " + (1 < a.Da.actors.length ? "extra-notification-avatars" : "") + ' navigable-list-item"\x3e', h;
  h = "post_recommended_milestone" == a.Da.activityType || "collection_followed_milestone" == a.Da.activityType ? '\x3cspan class\x3d"icons icons-milestone"\x3e\x3c/span\x3e' : 1 == a.Da.actors.length ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.$o)({user:a.Da.actors[0], Xj:a.Da.actors[0].name, Oc:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : "post_recommended" == a.Da.activityType ? '\x3cspan class\x3d"icons icons-circle-check notifications-icons-recommendation"\x3e\x3c/span\x3e' : 
  "";
  e = f + h + '\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + (0,z.O)((0,z.P)(e)) + '"\x3e';
  if (d) {
    switch(f = "", h = a.Da.actors.length, h) {
      case 0:
        break;
      case 1:
        f += (0,z.N)(a.Da.actors[0].name) + " ";
        break;
      case 2:
        f += (0,z.N)(a.Da.actors[0].name) + " and " + (0,z.N)(a.Da.actors[1].name) + " ";
        break;
      case 3:
        f += (0,z.N)(a.Da.actors[0].name) + ", " + (0,z.N)(a.Da.actors[1].name) + ", and " + (0,z.N)(a.Da.actors[2].name) + " ";
        break;
      default:
        f += (0,z.N)(a.Da.actors[0].name) + ", " + (0,z.N)(a.Da.actors[1].name) + ", " + (0,z.N)(a.Da.actors[2].name) + ", and " + (0,z.N)(h - 3) + " other" + (4 < h ? "s" : "") + " ";
    }
  } else {
    f = "";
  }
  e = e + f + th("m", a.Da.activityType)({post:a.Da.post, note:a.Da.note, followUp:a.Da.followUp, collection:a.Da.collection, milestoneArg:a.Da.milestoneArg}, null, c) + "\x3c/a\x3e";
  if (1 < a.Da.actors.length && d) {
    d = '\x3cdiv class\x3d"notification-user-avatar-icon-wrapper"\x3e';
    f = a.Da.actors;
    h = f.length;
    for (var k = 0;k < h;k++) {
      var l = f[k];
      d += 3 > k ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.$o)({user:l, KU:l ? l.name : "", Oc:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : "";
    }
    3 < a.Da.actors.length && (c = "post_recommended" == a.Da.activityType ? "Recommended " + (0,z.N)(a.Da.post.title) : "", d += '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon icons-extra"\x3e\x3cbutton class\x3d"notification-item-more" data-action\x3d"view-actors" data-action-value\x3d"' + (0,z.O)(a.Da.rollupRangeKey) + '" dialog-title\x3d"' + (0,z.O)(c) + '"\x3e\x26hellip;\x3c/button\x3e\x3c/div\x3e');
    a = d + "\x3c/div\x3e";
  } else {
    a = "";
  }
  return b + (e + a + "\x3c/li\x3e");
};
var jB = function(a, b, c) {
  b = '\x3cul class\x3d"notification-actors-list"\x3e';
  for (var d = a.actors, e = d.length, f = 0;f < e;f++) {
    b += '\x3cli class\x3d"notification-actors-list-item"\x3e' + bp((0,z.K)(a, {user:d[f], Oc:"avatar-icon notification-actors-list-icon", fc:"notification-actors-list-link", $C:"notification-actors-list-name"}), c) + "\x3c/li\x3e";
  }
  return b + "\x3c/ul\x3e";
};
var kB = function(a, b) {
  this.ca = b;
  this.wK = b.get("activity").Xo;
  this.ea = b.get("request");
  this.W = a;
  this.Tp = null;
  this.Oa = b.get("butter-bar");
  this.U = b.get("dialog");
  this.Tz = null;
  this.Ms = {};
  lB(this);
  this.dk();
};
var lB = function(a) {
  (0,z.s)((0,z.r)((0,z.r)(a.ea.get(oB.Q({}, {minCount:100}), {na:!0, background:!0}), a.Bd, a), a.KA, a), z.Gj);
};
var pB = function(a, b) {
  this.ca = a;
  this.ia = a.get("app");
  this.Xo = a.get("activity").Xo;
  this.oe = a.get("request");
  this.Oa = a.get("butter-bar");
  this.Ba = a.get("dom-monitor");
  this.Ch = b;
  this.UA = window.document.body.getElementsByClassName("site-nav-overlay")[0];
  this.wk = !1;
  this.og = 0;
  (0,z.H)("isAuthenticated") && new kB(b.getElementsByClassName("site-nav-scrollable-container")[0], a);
  this.dk();
};
var qB = function(a) {
  var b = window.document.getElementsByClassName("site-nav-list-item-active")[0];
  b && (0,z.u)(b, "site-nav-list-item-active");
  a && ((0,z.t)(a, "site-nav-list-item-active"), a.querySelector("*:not(.avatar-icon) \x3e a, input, button").focus());
};
var rB = function(a) {
  this.ca = a;
  this.Mu = this.Lu = this.bB = this.kz = this.Qt = this.om = null;
  this.wa = [];
  a.get("app").D(Sn, this.AH, this);
  (0,z.Bi)("zoom", this.WK, this);
};
var sB = function(a, b) {
  a.om && (a.om.close(!!b), (0,z.ci)(a.wa), a.om = null);
};
var tB = function(a, b) {
  this.Dd = this.Si = null;
  this.Za = (0,z.Un)((0,z.Ks)(b.get("app")));
  this.Vb = a;
  this.Wy = Number(a.getAttribute("data-width") || 0);
  a.getAttribute("data-height");
  this.bu = this.ma = this.Vy = null;
  z.v.call(this);
};
var uB = function(a) {
  var b = {imageId:a.getAttribute("data-action-value")};
  if (a.getAttribute("data-width")) {
    b.width = a.getAttribute("data-width");
    b.height = a.getAttribute("data-height");
    var c = b.width, d = b.height, e = (0,z.Ad)(window), f = ug(e.width, new z.tg(200, 2560), 200, !0), e = ug(e.height, new z.tg(200, 4096), 200, !0), f = Math.min(f / c, e / d);
    a.width && (f = Math.max(f, Number(a.width) / c));
    f = Math.min(f, 1);
    b.height = Math.round(d * f);
    b.width = Math.round(c * f);
  }
  b.strategy = b.width && b.width == b.height ? "crop-fixed" : "resample";
  return(0,z.I)(z.Uj, b);
};
var vB = function(a) {
  var b = window.document.createElement("img");
  b.src = uB(a.Vb);
  (0,z.t)(b, "zoom-img");
  a.ma = new z.vc;
  a.bu = (0,z.Q)(b, "load", a.ma.Ca, a.ma);
  (0,z.Hk)(wB, {imageId:a.Vb.getAttribute("data-action-value"), source:window.location.pathname});
  a.Vy = b;
  a.Wy ? xB(a) : (0,z.r)(a.ma, function() {
    this.Wy = Number(b.width);
    xB(this);
  }, a);
};
var xB = function(a) {
  a.Dd = window.document.createElement("div");
  (0,z.t)(a.Dd, "zoom-img-wrap");
  "absolute" == (0,z.zf)(a.Vb, "position") && (0,z.t)(a.Dd, "zoom-img-wrap-absolute");
  a.Vb.parentNode.insertBefore(a.Dd, a.Vb);
  a.Dd.appendChild(a.Vb);
  (0,z.t)(a.Vb, "zoom-img");
  a.Si = window.document.createElement("div");
  (0,z.t)(a.Si, "zoom-overlay");
  a.Dd.appendChild(a.Si);
  (0,z.ui)(a.Vb);
  var b = window.innerHeight, c = window.innerWidth, d = (0,z.ti)(a.Dd);
  a.Si.style.height = b + 480 + "px";
  a.Si.style.width = c + "px";
  d.top && (a.Si.style.top = -1 * (d.top + 240) + "px");
  d.left && (a.Si.style.left = -1 * d.left + "px");
  var b = b - 80, c = c - 80, d = a.Vb.getAttribute("data-width"), e = a.Vb.getAttribute("data-height"), f = d / a.Vb.width;
  a.fH = d < c && e < b ? f : d / e < c / b ? b / e * f : c / d * f;
  yB(a);
};
var yB = function(a) {
  (0,z.ui)(a.Vb);
  var b = (0,z.ni)(a.Vb), c = ((0,z.Ud)(a.Za, a.Vb) ? (0,z.qi)(a.Za).top : 0) + window.innerHeight / 2, d = window.innerWidth / 2, e = b.x + a.Vb.width / 2;
  a.LK = c - (b.y + a.Vb.height / 2);
  a.KK = d - e;
  a.Yq = (0,z.Q)(a.Dd, z.Qo, function() {
    (0,z.r)(this.ma, function() {
      this.Vb.src = this.Vy.src;
    }, this);
    (0,z.ci)(this.Yq);
  }, a);
  (0,z.vf)(a.Vb, "transform", "scale(" + a.fH + ")");
  (0,z.vf)(a.Dd, "transform", "translate(" + a.KK + "px, " + a.LK + "px) translateZ(0)");
  (0,z.t)(window.document.body, "zoom-overlay-open");
};
var zB = function(a, b, c) {
  for (var d = [], e = 0;e < c;e++) {
    d.push(a[b + e]);
  }
  return d;
};
var AB = function(a, b) {
  return zB(a, b, 2).map(function(a) {
    return a.toString(16);
  }).join("");
};
var BB = function(a, b, c) {
  return(a[b + (c ? 1 : 0)] << 8) + a[b + (c ? 0 : 1)];
};
var CB = function(a, b, c) {
  a = (((a[b + (c ? 3 : 0)] << 8) + a[b + (c ? 2 : 1)] << 8) + a[b + (c ? 1 : 2)] << 8) + a[b + (c ? 0 : 3)];
  0 > a && (a += 4294967296);
  return a;
};
var DB = function(a) {
  var b = new z.vc, c = new window.FileReader;
  c.onload = function(c) {
    var e = EB(new window.Uint8Array(c.target.result)), f = window.URL.createObjectURL(a);
    if (1 == e) {
      b.Ca(f);
    } else {
      var h = new window.Image;
      h.onload = function() {
        var a, c;
        1E3 < h.width ? (a = 1E3, c = 1E3 * h.height / h.width) : (a = h.width, c = h.height);
        var d = window.document.createElement("canvas"), q = d.getContext("2d");
        6 == e || 8 == e ? (d.width = c, d.height = a) : (d.width = a, d.height = c);
        var x = Math.max(a, c);
        q.translate(x / 2, x / 2);
        switch(e) {
          case 3:
            q.rotate(Math.PI);
            break;
          case 6:
            q.rotate(Math.PI / 2);
            break;
          case 8:
            q.rotate(1.5 * Math.PI);
        }
        var G = -a / 2, M = -c / 2;
        x == a ? M -= (c - x) / 2 : G -= (a - x) / 2;
        q.drawImage(h, G, M, a, c);
        a = d.toDataURL();
        b.Ca(a);
        window.URL.revokeObjectURL(f);
      };
      h.src = f;
    }
  };
  c.readAsArrayBuffer(a);
  return b;
};
var EB = function(a) {
  var b;
  b: {
    b = [];
    for (var c = 0;6 > c;c++) {
      b.push("Exif\x00\x00".charCodeAt(c));
    }
    for (var d = c = 0;c < a.length && 2E4 > c;) {
      if (d == b.length) {
        b = c - d;
        break b;
      }
      a[c] == b[d] ? d++ : d = 0;
      c++;
    }
    b = -1;
  }
  if (0 > b) {
    a = {};
  } else {
    b += 6;
    c = "4949" == AB(a, b);
    b = b + 2 + 2;
    b += CB(a, b, c) - 4;
    d = BB(a, b, c);
    b += 2;
    for (var e = {}, f = 0;f < d;f++) {
      var h = BB(a, b, c);
      e[h] = {tag:h, type:BB(a, b + 2, c), count:CB(a, b + 4, c), data:zB(a, b + 8, 4)};
      b += 12;
    }
    e.vL = c;
    a = e;
  }
  return a[274] ? BB(a[274].data, 0, a.vL) : 1;
};
z.GB = function(a) {
  z.Mj.call(this);
  this.ef = a.get("image");
  this.Lf = new z.Jg;
  this.Fk = null;
  this.gz = !1;
  this.Qk = this.Bg = null;
  this.$q = HB;
  this.xq = null;
};
var HB = function(a) {
  return(0,z.I)(z.Uj, {imageId:a, strategy:"resample"});
};
z.IB = function(a) {
  var b = a.getFile();
  if (!b) {
    throw Error("Could not find file to preview.");
  }
  a.Bg || (a.Bg = DB(b), a.Qk = (0,z.r)(a.Bg.Bb(), a.nH, a));
};
z.JB = function(a, b) {
  z.GB.call(this, a);
  this.up = b;
  this.ma = new z.vc;
};
z.KB = function(a) {
  z.v.call(this);
  this.ca = a;
};
var LB = function(a) {
  z.Mj.call(this);
  this.Ym = this.Fh = this.nB = this.Za = null;
  this.Ba = a.get("dom-monitor");
  this.Ba.D("scroll", this.Ne, this);
  this.ia = a.get("app");
  this.ia.D(Sn, this.Ri, this);
  MB(this);
};
var NB = function(a) {
  if (a.Za) {
    var b = (0,z.qi)(a.Za).top, c = (0,z.ti)(a.Za).height, c = b + c, d = a.Za.scrollHeight, e = (0,z.ej)(), f = Math.abs(a.uz - e);
    500 < f && 1E4 < f && (a.S(OB, {viewStartedAt:a.nB, scrollTop:b, scrollBottom:c, scrollableHeight:d, loggedAt:e}), a.uz = e);
  }
};
var MB = function(a, b) {
  a.Ym = !a.Ym || b ? 2E3 : 2 * a.Ym;
  18E5 >= a.Ym && (a.Fh = (0,window.setTimeout)(a.ZI.bind(a), a.Ym));
};
var PB = function() {
  var a = new cr, b = String((0,z.H)("buildLabel"));
  a.scope("app").add("activity-monitor", qA).add("request", sA, 3, b).add("datastore", Tk).add("fps", kA).add("app", Fs, "/", String((0,z.H)("productName"))).add("image", Hz).add("dom-monitor", Qn).add("butter-bar", Rz, window.document.querySelector(".butter-bar")).add("twitter", oA).add("facebook", mA).add("tooltip", z.GA).add("popover", z.LA).add("dialog", at).add("email", ct).add("zoom", rB).add("activity", Ez).add("sitenav", pB, window.document.querySelector(".site-nav")).add("referrer-tracker", 
  AA).add("scroll-tracker", LB).add("loading-indicator", CA).add("gestures", Qj, !0).add("publish-state", kr).add("popup-manager", Zy).add("upload", z.KB).add("media-resource", lA, !1).add("media-resource-frames", lA, !0).add("follow-ups", jA).add("diagnostics", z.yA, b).dc("notes", "notes").dc("notes-mobile", "notes-mobile").dc("CollectionSettingsScreen", "posters").dc("DraftsScreen", "posters").dc("PostEditScreen", "posters").dc("RevertCandidateScreen", "posters").dc("StatsScreen", "stats").dc("ReferrersScreen", 
  "stats").dc("BestOfScreen", "misc-screens").dc("EspnScreen", "misc-screens").dc("StartWritingScreen", "misc-screens").dc("ExportScreen", "misc-screens").dc("FollowUpEditor", "misc-screens").dc("ProfileScreen", "misc-screens").dc("ReadingListScreen", "misc-screens").dc("SettingsScreen", "misc-screens").dc("EmailSettingsScreen", "misc-screens").dc("SocialActivityScreen", "misc-screens").dc("VerificationScreen", "misc-screens");
  a.scope("screen").hr("screen").add("element-tracker", Ao).hr("vote-widget");
  return a;
};
var QB = function(a) {
  a.get("app").D(Sn, this.Ri, this);
};
var RB = function(a, b) {
  var c = window.document.createElement("img");
  bi(c, "load", function() {
    (0,z.t)(b, "img-loaded");
  });
  c.src = a;
};
z.aa = [];
z.ea = this;
ra = "closure_uid_" + (1E9 * Math.random() >>> 0);
sa = 0;
z.ej = Date.now || function() {
  return+new Date;
};
(0,z.p)(z.Aa, Error);
z.Aa.prototype.name = "CustomError";
var wd;
var Ha;
var Oa;
var Na;
var La;
var Ka;
var Ja;
Ja = /&/g;
Ka = /</g;
La = />/g;
Na = /"/g;
Oa = /'/g;
Ha = /[&<>"']/;
z.SB = 2147483648 * Math.random() | 0;
var TB;
var db;
db = Array.prototype;
z.bb = db.indexOf ? function(a, b, c) {
  return db.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if ((0,z.ma)(a)) {
    return(0,z.ma)(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
z.rb = db.forEach ? function(a, b, c) {
  db.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
z.Rc = db.filter ? function(a, b, c) {
  return db.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = (0,z.ma)(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
};
z.Jb = db.map ? function(a, b, c) {
  return db.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = (0,z.ma)(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (e[h] = b.call(c, f[h], h, a));
  }
  return e;
};
TB = db.reduce ? function(a, b, c, d) {
  d && (b = (0,z.xa)(b, d));
  return db.reduce.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  (0,z.rb)(a, function(c, h) {
    e = b.call(d, e, c, h, a);
  });
  return e;
};
z.Ec = db.some ? function(a, b, c) {
  return db.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
z.UB = db.every ? function(a, b, c) {
  return db.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.ma)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
var Cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
Function.prototype.bind || (Function.prototype.bind = Gb);
Array.prototype.indexOf || (Array.prototype.indexOf = Hb);
Array.prototype.map || (Array.prototype.map = Ib);
Date.now || (Date.now = z.ej);
Array.isArray || (Array.isArray = z.ia);
Object.keys || (Object.keys = vb);
(function() {
  for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
    var c = (new Date).getTime(), f = Math.max(0, 16 - (c - a)), h = window.setTimeout(function() {
      b(window.NaN);
    }, f);
    a = c + f;
    return h;
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    (0,window.clearTimeout)(a);
  });
})();
(function() {
  "undefined" === typeof window.performance && (window.performance = {});
  if (!window.performance.now) {
    var a = Date.now();
    window.performance.timing && window.performance.timing.navigationStart && (a = window.performance.timing.navigationStart);
    window.performance.now = function() {
      return Date.now() - a;
    };
  }
})();
window.URL = window.URL || window.webkitURL || window;
var Nb = [], Pb = [], Ob = !1;
var XB;
z.VB = (0,z.Sb)(!1);
z.WB = (0,z.Sb)(!0);
XB = (0,z.Sb)(null);
var Xb;
Mb(function(a) {
  Wb = a;
});
var cc = !1, ec = [];
var hc = 0, jc = 2, kc = 3;
gc.prototype.then = function(a, b, c) {
  return qc(this, (0,z.oa)(a) ? a : null, (0,z.oa)(b) ? b : null, c);
};
Kb(gc);
gc.prototype.cancel = function(a) {
  this.af == hc && bc(function() {
    var b = new rc(a);
    lc(this, b);
  }, this);
};
gc.prototype.kE = function(a) {
  this.af = hc;
  ic(this, jc, a);
};
gc.prototype.lE = function(a) {
  this.af = hc;
  ic(this, kc, a);
};
gc.prototype.yL = function() {
  for (;this.Se && this.Se.length;) {
    var a = this.Se;
    this.Se = [];
    for (var b = 0;b < a.length;b++) {
      mc(this, a[b], this.af, this.Yg);
    }
  }
  this.mw = !1;
};
var uc = ac;
(0,z.p)(rc, z.Aa);
rc.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Nc = z.ea.setTimeout, Gc = z.ea.clearTimeout;
z.g = z.vc.prototype;
z.g.cancel = function(a) {
  if (this.Mc) {
    this.Yg instanceof z.vc && this.Yg.cancel();
  } else {
    if (this.Sb) {
      var b = this.Sb;
      delete this.Sb;
      a ? b.cancel(a) : (b.pr--, 0 >= b.pr && b.cancel());
    }
    this.hD ? this.hD.call(this.QB, this) : this.Gx = !0;
    this.Mc || this.be(new z.Mc(this));
  }
};
z.g.KB = function(a, b) {
  this.Nv = !1;
  wc(this, a, b);
};
z.g.Ca = function(a) {
  yc(this);
  wc(this, !0, a);
};
z.g.be = function(a) {
  yc(this);
  wc(this, !1, a);
};
z.g.then = function(a, b, c) {
  var d, e, f = new gc(function(a, b) {
    d = a;
    e = b;
  });
  Ac(this, d, function(a) {
    a instanceof z.Mc ? f.cancel() : e(a);
  });
  return f.then(a, b, c);
};
Kb(z.vc);
z.vc.prototype.mj = function(a) {
  Ac(this, a.Ca, a.be, a);
  return this;
};
z.vc.prototype.Bb = function(a) {
  var b = new z.vc;
  this.mj(b);
  a && (b.Sb = this, this.pr++);
  return b;
};
(0,z.p)(zc, z.Aa);
zc.prototype.message = "Deferred has already fired";
zc.prototype.name = "AlreadyCalledError";
(0,z.p)(z.Mc, z.Aa);
z.Mc.prototype.message = "Deferred was canceled";
z.Mc.prototype.name = "CanceledError";
Hc.prototype.yN = function() {
  delete Fc[this.Nd];
  throw this.wL;
};
var Fc = {};
var Yc = /\s*;\s*/;
z.g = z.Wc.prototype;
z.g.isEnabled = (0,z.n)(0);
z.g.set = function(a, b, c, d, e, f) {
  if (/[;=\s]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (/[;\r\n]/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  (0,z.ha)(c) || (c = -1);
  e = e ? ";domain\x3d" + e : "";
  d = d ? ";path\x3d" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0,z.ej)() + 1E3 * c)).toUTCString();
  this.Xc.cookie = a + "\x3d" + b + e + d + c + f;
};
z.g.get = function(a, b) {
  for (var c = a + "\x3d", d = (this.Xc.cookie || "").split(Yc), e = 0, f;f = d[e];e++) {
    if (0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length);
    }
    if (f == a) {
      return "";
    }
  }
  return b;
};
z.g.remove = function(a, b, c) {
  var d = this.oj(a);
  this.set(a, "", 0, b, c);
  return d;
};
z.g.ue = function() {
  return Xc(this).keys;
};
z.g.wf = function() {
  return Xc(this).No;
};
z.g.ci = function() {
  return!this.Xc.cookie;
};
z.g.oc = function() {
  return this.Xc.cookie ? (this.Xc.cookie || "").split(Yc).length : 0;
};
z.g.oj = function(a) {
  return(0,z.ha)(this.get(a));
};
z.g.clear = function() {
  for (var a = Xc(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
var YB = new z.Wc(window.document);
YB.OO = 3950;
var Zc = 0, $c = {};
z.v.prototype.mf = !1;
z.v.prototype.Ob = function() {
  if (!this.mf && (this.mf = !0, this.C(), 0 != Zc)) {
    var a = (0,z.qa)(this);
    delete $c[a];
  }
};
z.v.prototype.C = function() {
  if (this.mo) {
    for (;this.mo.length;) {
      this.mo.shift()();
    }
  }
};
var ed;
a: {
  var ZB = z.ea.navigator;
  if (ZB) {
    var $B = ZB.userAgent;
    if ($B) {
      ed = $B;
      break a;
    }
  }
  ed = "";
}
;var bC;
var KA;
z.Se = dd("Opera") || dd("OPR");
z.ld = dd("Trident") || dd("MSIE");
z.Re = dd("Gecko") && !dd("WebKit") && !(dd("Trident") || dd("MSIE"));
z.ce = dd("WebKit");
z.ce && dd("Mobile");
var cC, dC = fd();
cC = dC && dC.platform || "";
z.Oi = -1 != cC.indexOf("Mac");
z.aC = -1 != cC.indexOf("Win");
cC.indexOf("Linux");
KA = !!fd() && -1 != (fd().appVersion || "").indexOf("X11");
var eC = ed;
eC && eC.indexOf("Android");
bC = !!eC && -1 != eC.indexOf("iPhone");
var fC = !!eC && -1 != eC.indexOf("iPad"), jd = function() {
  var a = "", b;
  if (z.Se && z.ea.opera) {
    return a = z.ea.opera.version, (0,z.oa)(a) ? a() : a;
  }
  z.Re ? b = /rv\:([^\);]+)(\)|;)/ : z.ld ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z.ce && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(ed)) ? a[1] : "");
  return z.ld && (b = gd(), b > (0,window.parseFloat)(a)) ? String(b) : a;
}(), id = {}, gC = z.ea.document, md = gC && z.ld ? gd() || ("CSS1Compat" == gC.compatMode ? (0,window.parseInt)(jd, 10) : 5) : void 0;
var Td;
var Ed = !z.ld || kd(9);
!z.Re && !z.ld || z.ld && kd(9) || z.Re && (0,z.hd)("1.9.1");
z.hC = z.ld && !(0,z.hd)("9");
Td = z.ld || z.Se || z.ce;
z.g = z.rd.prototype;
z.g.ja = function() {
  return new z.rd(this.x, this.y);
};
z.g.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
z.g.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
z.g.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.rd ? (this.x += a.x, this.y += a.y) : (this.x += a, (0,z.na)(b) && (this.y += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.na)(b) ? b : a;
  this.x *= a;
  this.y *= c;
  return this;
};
z.g = sd.prototype;
z.g.ja = function() {
  return new sd(this.width, this.height);
};
z.g.lb = function() {
  return this.width * this.height;
};
z.g.ci = function() {
  return!this.lb();
};
z.g.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.g.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.g.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.na)(b) ? b : a;
  this.width *= a;
  this.height *= c;
  return this;
};
var zd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
z.g = ud.prototype;
z.g.Lg = function() {
  return this.Xc;
};
z.g.aa = function(a) {
  return(0,z.ma)(a) ? this.Xc.getElementById(a) : a;
};
z.g.Rx = ud.prototype.aa;
z.g.Ac = function(a, b, c) {
  return(0,z.Dd)(this.Xc, arguments);
};
z.g.createElement = function(a) {
  return this.Xc.createElement(a);
};
z.g.createTextNode = function(a) {
  return this.Xc.createTextNode(String(a));
};
z.g.Ld = function() {
  var a = this.Xc;
  return a.parentWindow || a.defaultView;
};
z.g.appendChild = function(a, b) {
  a.appendChild(b);
};
z.g.append = z.Kd;
z.g.removeNode = z.Od;
z.g.EL = z.Pd;
z.g.contains = z.Ud;
z.fe = "StopIteration" in z.ea ? z.ea.StopIteration : Error("StopIteration");
z.de.prototype.next = function() {
  throw z.fe;
};
z.de.prototype.Bi = function() {
  return this;
};
(0,z.p)(z.ie, z.de);
z.g = z.ie.prototype;
z.g.V = null;
z.g.Rc = 0;
z.g.Jx = !1;
z.g.lf = function(a) {
  this.V = a.V;
  this.Rc = a.Rc;
  this.depth = a.depth;
  this.Qd = a.Qd;
  this.xr = a.xr;
};
z.g.ja = function() {
  return new z.ie(this.V, this.Qd, !this.xr, this.Rc, this.depth);
};
z.g.next = function() {
  var a;
  if (this.Jx) {
    if (!this.V || this.xr && 0 == this.depth) {
      throw z.fe;
    }
    a = this.V;
    var b = this.Qd ? -1 : 1;
    if (this.Rc == b) {
      var c = this.Qd ? a.lastChild : a.firstChild;
      c ? je(this, c) : je(this, a, -1 * b);
    } else {
      (c = this.Qd ? a.previousSibling : a.nextSibling) ? je(this, c) : je(this, a.parentNode, -1 * b);
    }
    this.depth += this.Rc * (this.Qd ? -1 : 1);
  } else {
    this.Jx = !0;
  }
  a = this.V;
  if (!this.V) {
    throw z.fe;
  }
  return a;
};
z.g.Lb = function(a) {
  return a.V == this.V && (!this.V || a.Rc == this.Rc);
};
z.g.splice = function(a) {
  var b = this.V, c = this.Qd ? 1 : -1;
  this.Rc == c && (this.Rc = -1 * c, this.depth += this.Rc * (this.Qd ? -1 : 1));
  this.Qd = !this.Qd;
  z.ie.prototype.next.call(this);
  this.Qd = !this.Qd;
  for (var c = (0,z.ka)(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    (0,z.Md)(c[d], b);
  }
  (0,z.Od)(b);
};
z.g = z.ne.prototype;
z.g.oc = function() {
  return this.Jb;
};
z.g.wf = function() {
  pe(this);
  for (var a = [], b = 0;b < this.zb.length;b++) {
    a.push(this.ze[this.zb[b]]);
  }
  return a;
};
z.g.ue = function() {
  pe(this);
  return this.zb.concat();
};
z.g.oj = function(a) {
  return qe(this.ze, a);
};
z.g.Lb = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.Jb != a.oc()) {
    return!1;
  }
  var c = b || oe;
  pe(this);
  for (var d, e = 0;d = this.zb[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
z.g.ci = function() {
  return 0 == this.Jb;
};
z.g.clear = function() {
  this.ze = {};
  this.Oo = this.Jb = this.zb.length = 0;
};
z.g.remove = function(a) {
  return qe(this.ze, a) ? (delete this.ze[a], this.Jb--, this.Oo++, this.zb.length > 2 * this.Jb && pe(this), !0) : !1;
};
z.g.get = function(a, b) {
  return qe(this.ze, a) ? this.ze[a] : b;
};
z.g.set = function(a, b) {
  qe(this.ze, a) || (this.Jb++, this.zb.push(a), this.Oo++);
  this.ze[a] = b;
};
z.g.Qf = function(a) {
  var b;
  a instanceof z.ne ? (b = a.ue(), a = a.wf()) : (b = vb(a), a = ub(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
z.g.forEach = function(a, b) {
  for (var c = this.ue(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
z.g.ja = function() {
  return new z.ne(this);
};
z.g.gE = (0,z.n)(1);
z.g.ys = function() {
  pe(this);
  for (var a = {}, b = 0;b < this.zb.length;b++) {
    var c = this.zb[b];
    a[c] = this.ze[c];
  }
  return a;
};
z.g.Bi = function(a) {
  pe(this);
  var b = 0, c = this.zb, d = this.ze, e = this.Oo, f = this, h = new z.de;
  h.next = function() {
    for (;;) {
      if (e != f.Oo) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw z.fe;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
(0,z.p)(z.re, z.v);
z.re.prototype.restore = function(a) {
  var b = this.xo();
  a || this.Ob();
  return b;
};
z.se.prototype.xe = function() {
  return!1;
};
z.se.prototype.Lg = function() {
  return(0,z.vd)(z.ld ? this.te() : this.Ga());
};
z.se.prototype.Ld = function() {
  return(0,z.Cd)(this.Lg());
};
z.se.prototype.containsNode = function(a, b) {
  return this.Nh((0,z.Ve)((0,z.Me)(a), void 0), b);
};
(0,z.p)(ze, z.ie);
(0,z.p)(z.Ae, z.se);
z.Ae.prototype.Nh = function(a, b) {
  var c = (0,z.ue)(this), d = (0,z.ue)(a);
  return(b ? z.Ec : z.UB)(d, function(a) {
    return(0,z.Ec)(c, function(c) {
      return c.Nh(a, b);
    });
  });
};
z.Ae.prototype.insertNode = (0,z.n)(5);
z.Ae.prototype.dh = (0,z.n)(9);
(0,z.p)(z.Be, ze);
z.g = z.Be.prototype;
z.g.Ma = null;
z.g.Ka = null;
z.g.gb = 0;
z.g.eb = 0;
z.g.Aj = (0,z.n)(12);
z.g.yj = (0,z.n)(15);
z.g.Ga = function() {
  return this.Ma;
};
z.g.mb = function() {
  return this.Ka;
};
z.g.di = function() {
  return this.Jx && this.V == this.Ka && (!this.eb || 1 != this.Rc);
};
z.g.next = function() {
  if (this.di()) {
    throw z.fe;
  }
  return z.Be.w.next.call(this);
};
z.g.lf = function(a) {
  this.Ma = a.Ma;
  this.Ka = a.Ka;
  this.gb = a.gb;
  this.eb = a.eb;
  this.zf = a.zf;
  z.Be.w.lf.call(this, a);
};
z.g.ja = function() {
  var a = new z.Be(this.Ma, this.gb, this.Ka, this.eb, this.zf);
  a.lf(this);
  return a;
};
z.g = z.Ce.prototype;
z.g.rl = (0,z.n)(17);
z.g.Qn = (0,z.n)(19);
z.g.Nh = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.sa;
  try {
    return c ? 0 <= this.Ue(d, 0, 1) && 0 >= this.Ue(d, 1, 0) : 0 <= this.Ue(d, 0, 0) && 0 >= this.Ue(d, 1, 1);
  } catch (e) {
    if (!z.ld) {
      throw e;
    }
    return!1;
  }
};
z.g.containsNode = function(a, b) {
  return this.Nh((0,z.Me)(a), b);
};
z.g.Mg = (0,z.n)(23);
z.g.Bi = function() {
  return new z.Be(this.Ga(), this.Mb(), this.mb(), this.Fc());
};
(0,z.p)(z.De, z.Ce);
z.g = z.De.prototype;
z.g.ja = function() {
  return new this.constructor(this.sa.cloneRange());
};
z.g.te = function() {
  return this.sa.commonAncestorContainer;
};
z.g.Ga = function() {
  return this.sa.startContainer;
};
z.g.Mb = function() {
  return this.sa.startOffset;
};
z.g.mb = function() {
  return this.sa.endContainer;
};
z.g.Fc = function() {
  return this.sa.endOffset;
};
z.g.Ue = function(a, b, c) {
  return this.sa.compareBoundaryPoints(1 == c ? 1 == b ? z.ea.Range.START_TO_START : z.ea.Range.START_TO_END : 1 == b ? z.ea.Range.END_TO_START : z.ea.Range.END_TO_END, a);
};
z.g.isCollapsed = function() {
  return this.sa.collapsed;
};
z.g.qc = function() {
  return this.sa.toString();
};
z.g.ve = (0,z.n)(28);
z.g.select = function(a) {
  var b = (0,z.Cd)((0,z.vd)(this.Ga()));
  this.zo(b.getSelection(), a);
};
z.g.zo = function(a) {
  a.removeAllRanges();
  a.addRange(this.sa);
};
z.g.insertNode = (0,z.n)(4);
z.g.dh = (0,z.n)(8);
z.g.collapse = function(a) {
  this.sa.collapse(a);
};
(0,z.p)(He, z.De);
He.prototype.zo = function(a, b) {
  !b || this.isCollapsed() ? He.w.zo.call(this, a, b) : (a.collapse(this.mb(), this.Fc()), a.extend(this.Ga(), this.Mb()));
};
(0,z.p)(z.Ie, z.Ce);
z.g = z.Ie.prototype;
z.g.bg = null;
z.g.Ma = null;
z.g.Ka = null;
z.g.gb = -1;
z.g.eb = -1;
z.g.ja = function() {
  var a = new z.Ie(this.sa.duplicate(), this.sL);
  a.bg = this.bg;
  a.Ma = this.Ma;
  a.Ka = this.Ka;
  return a;
};
z.g.Jg = function() {
  this.bg = this.Ma = this.Ka = null;
  this.gb = this.eb = -1;
};
z.g.te = function() {
  if (!this.bg) {
    var a = this.sa.text, b = this.sa.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
    if (this.isCollapsed() && 0 < b) {
      return this.bg = c;
    }
    for (;b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
      c = c.parentNode;
    }
    for (;1 == c.childNodes.length && c.innerText == Oe(c.firstChild) && Fe(c.firstChild);) {
      c = c.firstChild;
    }
    0 == a.length && (c = Ke(this, c));
    this.bg = c;
  }
  return this.bg;
};
z.g.Ga = function() {
  this.Ma || (this.Ma = Le(this, 1), this.isCollapsed() && (this.Ka = this.Ma));
  return this.Ma;
};
z.g.Mb = function() {
  0 > this.gb && (this.gb = Ne(this, 1), this.isCollapsed() && (this.eb = this.gb));
  return this.gb;
};
z.g.mb = function() {
  if (this.isCollapsed()) {
    return this.Ga();
  }
  this.Ka || (this.Ka = Le(this, 0));
  return this.Ka;
};
z.g.Fc = function() {
  if (this.isCollapsed()) {
    return this.Mb();
  }
  0 > this.eb && (this.eb = Ne(this, 0), this.isCollapsed() && (this.gb = this.eb));
  return this.eb;
};
z.g.Ue = function(a, b, c) {
  return this.sa.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a);
};
z.g.isCollapsed = function() {
  return 0 == this.sa.compareEndPoints("StartToEnd", this.sa);
};
z.g.qc = function() {
  return this.sa.text;
};
z.g.ve = (0,z.n)(27);
z.g.select = function() {
  this.sa.select();
};
z.g.insertNode = (0,z.n)(3);
z.g.dh = (0,z.n)(7);
z.g.collapse = function(a) {
  this.sa.collapse(a);
  a ? (this.Ka = this.Ma, this.eb = this.gb) : (this.Ma = this.Ka, this.gb = this.eb);
};
(0,z.p)(Pe, z.De);
Pe.prototype.zo = function(a) {
  a.collapse(this.Ga(), this.Mb());
  this.mb() == this.Ga() && this.Fc() == this.Mb() || a.extend(this.mb(), this.Fc());
  0 == a.rangeCount && a.addRange(this.sa);
};
(0,z.p)(Qe, z.De);
Qe.prototype.Ue = function(a, b, c) {
  return(0,z.hd)("528") ? Qe.w.Ue.call(this, a, b, c) : this.sa.compareBoundaryPoints(1 == c ? 1 == b ? z.ea.Range.START_TO_START : z.ea.Range.END_TO_START : 1 == b ? z.ea.Range.START_TO_END : z.ea.Range.END_TO_END, a);
};
Qe.prototype.zo = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.mb(), this.Fc(), this.Ga(), this.Mb()) : a.setBaseAndExtent(this.Ga(), this.Mb(), this.mb(), this.Fc());
};
(0,z.p)(z.Te, z.se);
z.g = z.Te.prototype;
z.g.Kh = null;
z.g.Ma = null;
z.g.gb = null;
z.g.Ka = null;
z.g.eb = null;
z.g.zf = !1;
z.g.ja = function() {
  var a = new z.Te;
  a.Kh = this.Kh && this.Kh.ja();
  a.Ma = this.Ma;
  a.gb = this.gb;
  a.Ka = this.Ka;
  a.eb = this.eb;
  a.zf = this.zf;
  return a;
};
z.g.g = function() {
  return "text";
};
z.g.wj = function() {
  return(0,z.af)(this).sa;
};
z.g.Jg = function() {
  this.Ma = this.gb = this.Ka = this.eb = null;
};
z.g.ul = function() {
  return 1;
};
z.g.Wh = function() {
  return this;
};
z.g.te = function() {
  return(0,z.af)(this).te();
};
z.g.Ga = function() {
  return this.Ma || (this.Ma = (0,z.af)(this).Ga());
};
z.g.Mb = function() {
  return null != this.gb ? this.gb : this.gb = (0,z.af)(this).Mb();
};
z.g.rl = (0,z.n)(16);
z.g.mb = function() {
  return this.Ka || (this.Ka = (0,z.af)(this).mb());
};
z.g.Fc = function() {
  return null != this.eb ? this.eb : this.eb = (0,z.af)(this).Fc();
};
z.g.Qn = (0,z.n)(18);
z.g.xe = function() {
  return this.zf;
};
z.g.Nh = function(a, b) {
  var c = a.g();
  return "text" == c ? (0,z.af)(this).Nh((0,z.af)(a), b) : "control" == c ? (c = ff(a), (b ? z.Ec : z.UB)(c, function(a) {
    return this.containsNode(a, b);
  }, this)) : !1;
};
z.g.isCollapsed = function() {
  return(0,z.af)(this).isCollapsed();
};
z.g.qc = function() {
  return(0,z.af)(this).qc();
};
z.g.Mg = (0,z.n)(22);
z.g.ve = (0,z.n)(26);
z.g.Bi = function() {
  return new z.Be(this.Ga(), this.Mb(), this.mb(), this.Fc());
};
z.g.select = function() {
  (0,z.af)(this).select(this.zf);
};
z.g.insertNode = (0,z.n)(2);
z.g.dh = (0,z.n)(6);
z.g.wx = function() {
  return new bf(this);
};
z.g.collapse = function(a) {
  a = this.xe() ? !a : a;
  this.Kh && this.Kh.collapse(a);
  a ? (this.Ka = this.Ma, this.eb = this.gb) : (this.Ma = this.Ka, this.gb = this.eb);
  this.zf = !1;
};
(0,z.p)(bf, z.re);
bf.prototype.xo = function() {
  return(0,z.We)(this.xB, this.ZK, this.gC, this.FL);
};
bf.prototype.C = function() {
  bf.w.C.call(this);
  this.gC = this.xB = null;
};
(0,z.p)(z.cf, z.Ae);
z.g = z.cf.prototype;
z.g.sa = null;
z.g.Dc = null;
z.g.Go = null;
z.g.Jg = function() {
  this.Go = this.Dc = null;
};
z.g.ja = function() {
  return ef.apply(this, ff(this));
};
z.g.g = function() {
  return "control";
};
z.g.wj = function() {
  return this.sa || window.document.body.createControlRange();
};
z.g.ul = function() {
  return this.sa ? this.sa.length : 0;
};
z.g.Wh = function(a) {
  a = this.sa.item(a);
  return(0,z.Ve)((0,z.Me)(a), void 0);
};
z.g.te = function() {
  return z.Yd.apply(null, ff(this));
};
z.g.Ga = function() {
  return(0,z.gf)(this)[0];
};
z.g.Mb = function() {
  return 0;
};
z.g.mb = function() {
  var a = (0,z.gf)(this), b = (0,z.Xa)(a);
  return(0,z.Za)(a, function(a) {
    return(0,z.Ud)(a, b);
  });
};
z.g.Fc = function() {
  return this.mb().childNodes.length;
};
z.g.isCollapsed = function() {
  return!this.sa || !this.sa.length;
};
z.g.qc = function() {
  return "";
};
z.g.Mg = (0,z.n)(21);
z.g.ve = (0,z.n)(25);
z.g.Bi = function() {
  return new z.jf(this);
};
z.g.select = function() {
  this.sa && this.sa.select();
};
z.g.wx = function() {
  return new hf(this);
};
z.g.collapse = function() {
  this.sa = null;
  this.Jg();
};
(0,z.p)(hf, z.re);
hf.prototype.xo = function() {
  for (var a = (this.Dc.length ? (0,z.vd)(this.Dc[0]) : window.document).body.createControlRange(), b = 0, c = this.Dc.length;b < c;b++) {
    a.addElement(this.Dc[b]);
  }
  return(0,z.df)(a);
};
hf.prototype.C = function() {
  hf.w.C.call(this);
  delete this.Dc;
};
(0,z.p)(z.jf, ze);
z.g = z.jf.prototype;
z.g.Ma = null;
z.g.Ka = null;
z.g.Dc = null;
z.g.Aj = (0,z.n)(11);
z.g.yj = (0,z.n)(14);
z.g.Ga = function() {
  return this.Ma;
};
z.g.mb = function() {
  return this.Ka;
};
z.g.di = function() {
  return!this.depth && !this.Dc.length;
};
z.g.next = function() {
  if (this.di()) {
    throw z.fe;
  }
  if (!this.depth) {
    var a = this.Dc.shift();
    je(this, a, 1, 1);
    return a;
  }
  return z.jf.w.next.call(this);
};
z.g.lf = function(a) {
  this.Dc = a.Dc;
  this.Ma = a.Ma;
  this.Ka = a.Ka;
  z.jf.w.lf.call(this, a);
};
z.g.ja = function() {
  var a = new z.jf(null);
  a.lf(this);
  return a;
};
(0,z.p)(z.kf, z.Ae);
z.g = z.kf.prototype;
z.g.Jg = function() {
  this.Sl = [];
  this.yr = this.hm = null;
};
z.g.ja = function() {
  var a = new z.kf;
  a.Rf = (0,z.fb)(this.Rf);
  return a;
};
z.g.g = function() {
  return "mutli";
};
z.g.wj = function() {
  return this.Rf[0];
};
z.g.ul = function() {
  return this.Rf.length;
};
z.g.Wh = function(a) {
  this.Sl[a] || (this.Sl[a] = (0,z.Ue)(this.Rf[a]));
  return this.Sl[a];
};
z.g.te = function() {
  if (!this.yr) {
    for (var a = [], b = 0, c = this.ul();b < c;b++) {
      a.push(this.Wh(b).te());
    }
    this.yr = z.Yd.apply(null, a);
  }
  return this.yr;
};
z.g.Ga = function() {
  return mf(this)[0].Ga();
};
z.g.Mb = function() {
  return mf(this)[0].Mb();
};
z.g.mb = function() {
  return(0,z.Xa)(mf(this)).mb();
};
z.g.Fc = function() {
  return(0,z.Xa)(mf(this)).Fc();
};
z.g.isCollapsed = function() {
  return 0 == this.Rf.length || 1 == this.Rf.length && this.Wh(0).isCollapsed();
};
z.g.qc = function() {
  return(0,z.Jb)((0,z.ue)(this), function(a) {
    return a.qc();
  }).join("");
};
z.g.Mg = (0,z.n)(20);
z.g.ve = (0,z.n)(24);
z.g.Bi = function() {
  return new z.of(this);
};
z.g.select = function() {
  var a = (0,z.te)(this.Ld());
  a.removeAllRanges();
  for (var b = 0, c = this.ul();b < c;b++) {
    a.addRange(this.Wh(b).wj());
  }
};
z.g.wx = function() {
  return new nf(this);
};
z.g.collapse = function(a) {
  if (!this.isCollapsed()) {
    var b = a ? this.Wh(0) : this.Wh(this.ul() - 1);
    this.Jg();
    b.collapse(a);
    this.Sl = [b];
    this.hm = [b];
    this.Rf = [b.wj()];
  }
};
(0,z.p)(nf, z.re);
nf.prototype.xo = function() {
  var a = (0,z.Jb)(this.xx, function(a) {
    return a.restore();
  });
  return lf(a);
};
nf.prototype.C = function() {
  nf.w.C.call(this);
  (0,z.rb)(this.xx, function(a) {
    a.Ob();
  });
  delete this.xx;
};
(0,z.p)(z.of, ze);
z.g = z.of.prototype;
z.g.Zf = null;
z.g.dl = 0;
z.g.Aj = (0,z.n)(10);
z.g.yj = (0,z.n)(13);
z.g.Ga = function() {
  return this.Zf[0].Ga();
};
z.g.mb = function() {
  return(0,z.Xa)(this.Zf).mb();
};
z.g.di = function() {
  return this.Zf[this.dl].di();
};
z.g.next = function() {
  try {
    var a = this.Zf[this.dl], b = a.next();
    je(this, a.V, a.Rc, a.depth);
    return b;
  } catch (c) {
    if (c !== z.fe || this.Zf.length - 1 == this.dl) {
      throw c;
    }
    this.dl++;
    return this.next();
  }
};
z.g.lf = function(a) {
  this.Zf = (0,z.fb)(a.Zf);
  z.of.w.lf.call(this, a);
};
z.g.ja = function() {
  var a = new z.of(null);
  a.lf(this);
  return a;
};
(0,z.Eb)("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL");
(0,z.Eb)("IMG", "IFRAME", "EMBED");
var wC;
var vC;
var uC;
var rC;
var qC;
var iC, jC, kC, lC, mC, nC, oC;
oC = nC = mC = lC = kC = jC = iC = !1;
var pC = ed;
pC && (-1 != pC.indexOf("Firefox") ? iC = !0 : -1 != pC.indexOf("Camino") ? jC = !0 : -1 != pC.indexOf("iPhone") || -1 != pC.indexOf("iPod") ? kC = !0 : -1 != pC.indexOf("iPad") ? lC = !0 : -1 != pC.indexOf("Chrome") ? nC = !0 : -1 != pC.indexOf("Android") ? mC = !0 : -1 != pC.indexOf("Safari") && (oC = !0));
qC = iC;
rC = jC;
z.sC = kC;
z.tC = lC;
uC = mC;
vC = nC;
wC = oC;
var xC = function() {
  if (qC) {
    return pf(/Firefox\/([0-9.]+)/);
  }
  if (z.ld || z.Se) {
    return jd;
  }
  if (vC) {
    return pf(/Chrome\/([0-9.]+)/);
  }
  if (wC) {
    return pf(/Version\/([0-9.]+)/);
  }
  if (z.sC || z.tC) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ed)) {
      return a[1] + "." + a[2];
    }
  } else {
    if (uC) {
      return(a = pf(/Android\s+([0-9.]+)/)) ? a : pf(/Version\/([0-9.]+)/);
    }
    if (rC) {
      return pf(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
z.yC = z.ld || z.ce || z.Se || !1;
z.zC = z.ce || !1;
z.AC = z.ld || z.ce || z.Se;
z.ce && (0,z.hd)("534.16");
z.BC = z.Re && !0;
z.ld && (0,z.hd)("7.0");
z.CC = z.Re && (0,z.hd)("1.8") || z.ce || z.Se;
z.DC = z.ce || z.ld && (0,z.hd)("9");
z.ld || z.Se || z.Re && (0,z.hd)("1.9");
z.Re || z.ce && (0,z.hd)("527");
z.EC = z.ld || z.Se;
z.FC = z.ld || z.ce && (0,z.hd)("525");
z.ce && (0,z.hd)("531");
z.GC = z.ce && !(0,z.hd)("528");
z.Re && (0,z.hd)("1.9") || z.ld || z.Se || z.ce && (0,z.hd)("531");
z.Re || z.ce && (0,z.hd)("526");
vC && 0 <= Ra(xC, "4") || wC && (0,z.hd)("533") || z.Re && (0,z.hd)("2.0") || z.ld && (0,z.hd)("10");
z.Se && (0,z.hd)("11.10");
vC && Ra(xC, "12");
var EA;
z.HC = z.ld ? "focusin" : "DOMFocusIn";
EA = z.ld ? "focusout" : "DOMFocusOut";
z.Qo = z.ce ? "webkitTransitionEnd" : z.Se ? "otransitionend" : "transitionend";
z.g = z.sf.prototype;
z.g.ja = function() {
  return new z.sf(this.top, this.right, this.bottom, this.left);
};
z.g.contains = function(a) {
  return this && a ? a instanceof z.sf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
z.g.expand = (0,z.n)(29);
z.g.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
z.g.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
z.g.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.rd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, (0,z.na)(b) && (this.top += b, this.bottom += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.na)(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
z.g = z.tf.prototype;
z.g.ja = function() {
  return new z.tf(this.left, this.top, this.width, this.height);
};
z.g.Tr = function(a) {
  var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
  if (b <= c) {
    var d = Math.max(this.top, a.top);
    a = Math.min(this.top + this.height, a.top + a.height);
    if (d <= a) {
      return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0;
    }
  }
  return!1;
};
z.g.contains = function(a) {
  return a instanceof z.tf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height;
};
z.g.ae = (0,z.n)(30);
z.g.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.g.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.g.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.rd ? (this.left += a.x, this.top += a.y) : (this.left += a, (0,z.na)(b) && (this.top += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.na)(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= c;
  this.height *= c;
  return this;
};
(0,z.Eb)("text", "file", "url");
If[" "] = z.fa;
var Lf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Kf = z.ce;
z.g = Mf.prototype;
z.g.Be = "";
z.g.Cs = "";
z.g.hl = "";
z.g.pi = null;
z.g.tD = "";
z.g.qw = "";
z.g.nM = !1;
z.g.Ye = !1;
z.g.toString = function() {
  var a = [], b = this.Be;
  b && a.push(Uf(b, IC), ":");
  if (b = this.Qh()) {
    a.push("//");
    var c = this.Cs;
    c && a.push(Uf(c, IC), "@");
    a.push((0,window.encodeURIComponent)(String(b)));
    b = this.pi;
    null != b && a.push(":", String(b));
  }
  if (b = this.Uh()) {
    this.hl && "/" != b.charAt(0) && a.push("/"), a.push(Uf(b, "/" == b.charAt(0) ? JC : KC));
  }
  (b = this.Af.toString()) && a.push("?", b);
  (b = this.qw) && a.push("#", Uf(b, LC));
  return a.join("");
};
z.g.ja = function() {
  return new Mf(this);
};
z.g.Qh = function() {
  return this.hl;
};
z.g.$l = function(a, b) {
  Of(this);
  this.hl = b ? a ? (0,window.decodeURIComponent)(a) : "" : a;
  return this;
};
z.g.Uh = function() {
  return this.tD;
};
z.g.Cx = function(a) {
  this.Ye = a;
  this.Af && this.Af.Cx(a);
  return this;
};
var IC = /[#\/\?@]/g, KC = /[\#\?:]/g, JC = /[\#\?]/g, Vf = /[\#\?@]/g, LC = /#/g;
z.g = Tf.prototype;
z.g.$b = null;
z.g.Jb = null;
z.g.oc = function() {
  Zf(this);
  return this.Jb;
};
z.g.add = function(a, b) {
  Zf(this);
  this.se = null;
  a = $f(this, a);
  var c = this.$b.get(a);
  c || this.$b.set(a, c = []);
  c.push(b);
  this.Jb++;
  return this;
};
z.g.remove = function(a) {
  Zf(this);
  a = $f(this, a);
  return this.$b.oj(a) ? (this.se = null, this.Jb -= this.$b.get(a).length, this.$b.remove(a)) : !1;
};
z.g.clear = function() {
  this.$b = this.se = null;
  this.Jb = 0;
};
z.g.ci = function() {
  Zf(this);
  return 0 == this.Jb;
};
z.g.oj = function(a) {
  Zf(this);
  a = $f(this, a);
  return this.$b.oj(a);
};
z.g.ue = function() {
  Zf(this);
  for (var a = this.$b.wf(), b = this.$b.ue(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
z.g.wf = function(a) {
  Zf(this);
  var b = [];
  if ((0,z.ma)(a)) {
    this.oj(a) && (b = eb(b, this.$b.get($f(this, a))));
  } else {
    a = this.$b.wf();
    for (var c = 0;c < a.length;c++) {
      b = eb(b, a[c]);
    }
  }
  return b;
};
z.g.set = function(a, b) {
  Zf(this);
  this.se = null;
  a = $f(this, a);
  this.oj(a) && (this.Jb -= this.$b.get(a).length);
  this.$b.set(a, [b]);
  this.Jb++;
  return this;
};
z.g.get = function(a, b) {
  var c = a ? this.wf(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
z.g.toString = function() {
  if (this.se) {
    return this.se;
  }
  if (!this.$b) {
    return "";
  }
  for (var a = [], b = this.$b.ue(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = (0,window.encodeURIComponent)(String(d)), d = this.wf(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + (0,window.encodeURIComponent)(String(d[f])));
      a.push(h);
    }
  }
  return this.se = a.join("\x26");
};
z.g.ja = function() {
  var a = new Tf;
  a.se = this.se;
  this.$b && (a.$b = this.$b.ja(), a.Jb = this.Jb);
  return a;
};
z.g.Cx = function(a) {
  a && !this.Ye && (Zf(this), this.se = null, this.$b.forEach(function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), bg(this, d, a));
  }, this));
  this.Ye = a;
};
z.g.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    me(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
cg.prototype.Zc = function() {
  throw Error();
};
cg.prototype.ub = function() {
  throw Error();
};
cg.prototype.ja = function(a) {
  return this.ub(a.constructor, this.Zc(a));
};
(0,z.p)(dg, cg);
z.Ml = new dg;
dg.prototype.Zc = function(a) {
  var b = {};
  mg(a, function(c, d) {
    var e = (0,z.ig)(a, c);
    if ((0,z.kg)(a, c)) {
      if (d) {
        if (d.h()) {
          if (null == e) {
            e = null;
          } else {
            if (!Array.isArray(e)) {
              throw Error("malformed message " + e);
            }
            for (var f = [], h = 0;h < e.length;h++) {
              f[h] = fg(this, d, e[h]);
            }
            e = f;
          }
        } else {
          e = fg(this, d, e);
        }
      }
      b[c] = e;
    }
  }, this);
  return b;
};
dg.prototype.ub = function(a, b, c) {
  if (b.lm) {
    throw Error("Already a PB message");
  }
  c = !!c;
  a = new a;
  (0,z.gg)(a, c);
  for (var d in b) {
    var e = a.$c().fields[d], f = a, h = d, k;
    k = e;
    var l = b[d], m = c;
    if (k) {
      if (k.h()) {
        if (null == l) {
          k = null;
        } else {
          if (!Array.isArray(l)) {
            throw Error("Expected array, found " + l);
          }
          for (var q = [], x = 0;x < l.length;x++) {
            q[x] = eg(this, k, l[x], m);
          }
          k = q;
        }
      } else {
        k = eg(this, k, l, m);
      }
    } else {
      k = l;
    }
    (0,z.A)(f, h, k);
    if (!e && !a.Vr(d)) {
      e = 'Trying to set field "' + d + '" not in schema "' + a.$c().name + '"';
      if (c) {
        throw Error(e);
      }
      z.ea.console && z.ea.console.warn && window.console.warn(e);
    }
  }
  return a;
};
z.g = z.w.prototype;
z.g.lm = !0;
z.g.Vr = z.VB;
z.g.ri = function(a) {
  for (var b in a) {
    b in this.$c().fields ? (0,z.A)(this, b, a[b]) : (z.ea.console && window.console.warn("Trying to set field not in ProtoModel:", b, this.$c().name), this.data[b] = a[b], delete this.Fg[b]);
  }
  return this;
};
z.g.ab = function() {
  return z.Ml.Zc(this);
};
z.g.ja = function() {
  return z.Ml.ja(this);
};
z.g.Lb = function(a) {
  if (this.constructor != a.constructor) {
    return!1;
  }
  var b = this.$c().fields, c;
  for (c in b) {
    var d = b[c], e = this.data[c], f = a.data[c], h = !1, h = d.h() ? e && f ? e.length == f.length && e.every(function(a, b) {
      return og(this, d, a, f[b]);
    }, this) : e === f : og(this, d, e, f);
    if (!h) {
      return!1;
    }
  }
  return!0;
};
(0,z.p)(F, z.w);
F.prototype.wi = function() {
  return this.$c().wi;
};
var MC = {OE:1, Sx:2, RE:3, TE:4, vE:5, HE:6, $isProtoEnum:!0}, NC = {ZE:1, AE:2, CE:3, GE:4, $isProtoEnum:!0}, OC = {IE:1, VE:2, WE:3, NE:4, yE:5, KE:6, $isProtoEnum:!0};
(0,z.p)(z.qg, F);
E(z.qg, {name:"InternalReferrer", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, profileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.qg.prototype.g = function() {
  return(0,z.y)(this, "type");
};
z.qg.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.qg.prototype.L = (0,z.n)(83);
(0,z.p)(rg, F);
E(rg, {name:"SearchReferrer", fields:{domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, keywords:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
rg.prototype.Qh = function() {
  return(0,z.y)(this, "domain");
};
rg.prototype.$l = function(a) {
  return(0,z.A)(this, "domain", a);
};
(0,z.p)(sg, F);
E(sg, {name:"SiteReferrer", fields:{href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
sg.prototype.uf = function() {
  return(0,z.y)(this, "href");
};
sg.prototype.am = function(a) {
  return(0,z.A)(this, "href", a);
};
sg.prototype.nb = function() {
  return(0,z.y)(this, "title");
};
sg.prototype.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
var En = new sd(500, 250), vg = (0,z.Ab)({addImageAnimationImg:"addImageAnimationImg", baseUrl:"baseUrl", bestOfFirstSlug:"bestOfFirstSlug", bestOfLatestSlug:"bestOfLatestSlug", buildLabel:"buildLabel", contributeSoonUrl:"contributeSoonUrl", currentUser:"currentUser", promoStartWritingBackgroundImage:"promoStartWritingBackgroundImage", promoStartWritingHomeImage:"promoStartWritingHomeImage", defaultPreviewImage:"defaultPreviewImage", defaultUserImage:"defaultUserImage", qL:"deviceHeight", rL:"deviceHeightImageBucket", 
deviceWidth:"deviceWidth", deviceWidthImageBucket:"deviceWidthImageBucket", devicePixelRatio:"devicePixelRatio", embedded:"embedded", embedSupportUrl:"embedSupportUrl", facebookKey:"facebookKey", helpUrl:"helpUrl", homeImageId:"homeImageId", howToPostUrl:"howToPostUrl", isAuthenticated:"isAuthenticated", isCurrentUserVerified:"isCurrentUserVerified", currentUserHasUnverifiedEmail:"currentUserHasUnverifiedEmail", jobsUrl:"jobsUrl", termsUrl:"termsUrl", language:"language", miroUrl:"miroUrl", moduleUrls:"moduleUrls", 
policyUrl:"policyUrl", postColumnWidth:"postColumnWidth", privacyUrl:"privacyUrl", productName:"productName", supportsEdit:"supportsEdit", useragent:"useragent", variants:"variants", toolbarAnimationImg:"toolbarAnimationImg", welcomeUrl:"welcomeUrl", onboardingLandscapeFooterImage:"onboardingLandscapeFooterImage", mediumTwitterScreenName:"mediumTwitterScreenName"});
Object.keys(vg);
z.PC = RegExp("(^|[^a-z0-9_!#$%^\x26*@＠/])(?:[@＠])([a-z0-9_]{1,15})", "gi");
z.QC = /^[a-z0-9_\.]{1,30}$/i;
z.tg.prototype.ja = function() {
  return new z.tg(this.start, this.end);
};
var Bg = new z.tg(600, 2E3), Fn = new z.tg(200, 2E3);
z.wg = {};
var VC;
var UC;
var TC;
var SC;
var RC;
RC = {ME:1, WO:10, zO:11, uO:12, FE:13, DE:2, EE:3, BO:4, yO:5, wE:6, PE:7, QE:8, DP:9, $isProtoEnum:!0};
z.In = {Vx:1, Wx:2, $x:3, ay:4, Gs:5, LE:6, $O:7, $isProtoEnum:!0};
SC = {Tx:1, PO:10, TN:102, dO:103, oO:104, qO:105, tO:106, IO:107, KO:108, NO:109, SO:11, QO:110, TO:111, nP:112, QP:113, mP:12, PP:13, SN:2, cO:3, nO:4, pO:5, sO:6, HO:7, JO:8, MO:9, $isProtoEnum:!0};
TC = {JE:1, VN:2, $isProtoEnum:!0};
UC = {XE:1, zE:2, A:3, xO:4, RP:5, $isProtoEnum:!0};
VC = {jO:1, RN:2, RO:3, zP:4, $isProtoEnum:!0};
z.WC = {NONE:1, BE:2, JE:3, lP:4, $isProtoEnum:!0};
(0,z.p)(z.Cg, F);
E(z.Cg, {name:"RichTextModel", fields:{paragraphs:{g:function() {
  return Fg;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sections:{g:function() {
  return z.Og;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Cg.prototype.pc = function() {
  return(0,z.y)(this, "paragraphs");
};
z.Cg.prototype.ec = function() {
  return(0,z.y)(this, "sections");
};
(0,z.p)(Fg, F);
E(Fg, {name:"ParagraphPb", fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return RC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, markups:{g:function() {
  return z.Lg;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, dataId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, layout:{g:function() {
  return z.In;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return z.Jg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframe:{g:function() {
  return z.Kg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hasDropCap:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, alignment:{g:function() {
  return TC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = Fg.prototype;
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.qc = function() {
  return(0,z.y)(this, "text");
};
z.g.lg = function(a) {
  return(0,z.A)(this, "text", a);
};
z.g.getMetadata = function() {
  return(0,z.y)(this, "metadata");
};
z.g.uc = function(a) {
  return(0,z.A)(this, "metadata", a);
};
(0,z.p)(z.Jg, F);
E(z.Jg, {name:"ImageMetadata", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return "contain";
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Jg.prototype;
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.Th = function() {
  return(0,z.y)(this, "originalWidth");
};
z.g.em = function(a) {
  return(0,z.A)(this, "originalWidth", a);
};
z.g.ql = function() {
  return(0,z.y)(this, "originalHeight");
};
z.g.dm = function(a) {
  return(0,z.A)(this, "originalHeight", a);
};
z.g.Id = function() {
  return(0,z.y)(this, "backgroundSize");
};
z.g.si = function(a) {
  return(0,z.A)(this, "backgroundSize", a);
};
z.g.ol = function() {
  return(0,z.y)(this, "filter");
};
z.g.Bf = function(a) {
  return(0,z.A)(this, "filter", a);
};
(0,z.p)(z.Kg, F);
E(z.Kg, {name:"IframeMetadata", fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeSrc:null}});
z.g = z.Kg.prototype;
z.g.Rn = function() {
  return(0,z.y)(this, "mediaResourceId");
};
z.g.Sj = function(a) {
  return(0,z.A)(this, "mediaResourceId", a);
};
z.g.Ir = function() {
  return(0,z.y)(this, "iframeWidth");
};
z.g.rs = function(a) {
  return(0,z.A)(this, "iframeWidth", a);
};
z.g.vw = function() {
  return(0,z.y)(this, "iframeHeight");
};
z.g.qs = function(a) {
  return(0,z.A)(this, "iframeHeight", a);
};
(0,z.p)(z.Lg, F);
E(z.Lg, {name:"MarkupModel", fields:{type:{g:function() {
  return UC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, start:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, end:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rel:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Lg.prototype;
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.setStart = function(a) {
  return(0,z.A)(this, "start", a);
};
z.g.setEnd = function(a) {
  return(0,z.A)(this, "end", a);
};
z.g.uf = function() {
  return(0,z.y)(this, "href");
};
z.g.am = function(a) {
  return(0,z.A)(this, "href", a);
};
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
(0,z.p)(z.Og, F);
E(z.Og, {name:"SectionModel", fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, startIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundImage:{g:function() {
  return z.Jg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, textLayout:{g:function() {
  return VC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return "1";
}, j:function() {
}, o:function() {
}}, imageLayout:{g:function() {
  return z.WC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return "1";
}, j:function() {
}, o:function() {
}}, backgroundColor:{g:function() {
  return SC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Og.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
z.Og.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.Og.prototype.ra = function() {
  return(0,z.y)(this, "startIndex");
};
z.Og.prototype.Sd = function(a) {
  return(0,z.A)(this, "startIndex", a);
};
(0,z.p)(z.Wg, F);
E(z.Wg, {name:"PlaybackModel", fields:{title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Jg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyModel:{g:function() {
  return z.Cg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Wg.prototype;
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.Kd = (0,z.n)(90);
z.g.he = (0,z.n)(97);
z.g.xj = (0,z.n)(100);
z.g.Zl = (0,z.n)(103);
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
z.g.ml = function() {
  return(0,z.y)(this, "bodyModel");
};
z.g.Yl = function(a) {
  return(0,z.A)(this, "bodyModel", a);
};
z.XC = RegExp("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*|$)", "g");
var $C;
var lh = new z.bh;
ch(lh, null);
z.YC = gh();
z.ZC = gh();
(0,z.fh)(z.ZC, "BR");
var mh = gh();
(0,z.fh)(mh, "A", ["href", "title", "rel"]);
(0,z.fh)(mh, "BR");
(0,z.fh)(mh, "STRONG", ["id"], ["B"]);
(0,z.fh)(mh, "EM", [], ["I"]);
var ih = gh();
ih.De = (0,z.zb)(mh.De);
(0,z.fh)(ih, "IMG", ["data-image-id", "src", "width", "height"]).cd = lh;
var jh = gh();
(0,z.fh)(jh, "IMG", ["data-image-id", "src", "width", "height"]).cd = lh;
(0,z.fh)(jh, "FIGCAPTION", {"class":["content-caption", "image-caption"], "data-image-id":!0}).cd = mh;
var kh = gh();
(0,z.fh)(kh, "LI", ["name"]).cd = mh;
$C = hh();
z.aD = hh();
(0,z.fh)(z.aD, "SECTION", {name:!0, "class":!0}).cd = $C;
var ph = (0,z.Eb)(["hatch.dm", "medium.com", "medium.local", "localhost"]);
z.bD = {"":1, n:Math.pow(1024, -3), u:Math.pow(1024, -2), m:1 / 1024, k:1024, K:1024, M:Math.pow(1024, 2), G:Math.pow(1024, 3), T:Math.pow(1024, 4), P:Math.pow(1024, 5)};
z.ld && (0,z.hd)(8);
var vh = {}, Eh = {}, Qh = {}, Th = {};
var rh = {}, sh = {}, Hh = /['()]/g, Uh = {"\x00":"\x26#0;", '"':"\x26quot;", "\x26":"\x26amp;", "'":"\x26#39;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", "\t":"\x26#9;", "\n":"\x26#10;", "\x0B":"\x26#11;", "\f":"\x26#12;", "\r":"\x26#13;", " ":"\x26#32;", "-":"\x26#45;", "/":"\x26#47;", "\x3d":"\x26#61;", "`":"\x26#96;", "":"\x26#133;", " ":"\x26#160;", "\u2028":"\x26#8232;", "\u2029":"\x26#8233;"}, Vh = {"\x00":"%00", "":"%01", "":"%02", "":"%03", "":"%04", "":"%05", "":"%06", "":"%07", "\b":"%08", 
"\t":"%09", "\n":"%0A", "\x0B":"%0B", "\f":"%0C", "\r":"%0D", "":"%0E", "":"%0F", "":"%10", "":"%11", "":"%12", "":"%13", "":"%14", "":"%15", "":"%16", "":"%17", "":"%18", "":"%19", "":"%1A", "":"%1B", "":"%1C", "":"%1D", "":"%1E", "":"%1F", " ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "\x3c":"%3C", "\x3e":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "":"%7F", "":"%C2%85", " ":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "！":"%EF%BC%81", "＃":"%EF%BC%83", "＄":"%EF%BC%84", 
"＆":"%EF%BC%86", "＇":"%EF%BC%87", "（":"%EF%BC%88", "）":"%EF%BC%89", "＊":"%EF%BC%8A", "＋":"%EF%BC%8B", "，":"%EF%BC%8C", "／":"%EF%BC%8F", "：":"%EF%BC%9A", "；":"%EF%BC%9B", "＝":"%EF%BC%9D", "？":"%EF%BC%9F", "＠":"%EF%BC%A0", "［":"%EF%BC%BB", "］":"%EF%BC%BD"}, wh = /[\x00\x22\x26\x27\x3c\x3e]/g, zh = /[\x00\x22\x27\x3c\x3e]/g, Fh = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, Rh = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, 
Wh = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, Yh = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i, Ah = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, Bh = /</g;
z.Vr = {image:{type:"image", defaultValue:null, englishName:"image", LC:!0, QT:["caption"], strategy:{cover:{type:"crop-preserve", height:0.42}, contain:{type:"resample", width:700}, full:{type:"crop-fixed"}}}, caption:{type:"oneliner", defaultValue:"Add a photo credit", englishName:"image caption", LC:!0, zM:!0}, body:{type:"html", defaultValue:"Write your story", englishName:"article text", tR:!0}, subtitle:{type:"oneliner", defaultValue:"Subtitle", englishName:"subtitle", LC:!0}};
var mi;
var $y;
var Ss;
var dD;
z.cD = "ontouchstart" in window.document.documentElement;
dD = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
Ss = "pushState" in window.history && "replaceState" in window.history;
z.eD = "FileReader" in window;
$y = "postMessage" in window && (!z.ld || (0,z.hd)(11));
mi = !z.Re && !z.ld;
var fi = !!window.addEventListener, gi = fi ? "addEventListener" : "attachEvent", hi = fi ? "removeEventListener" : "detachEvent";
zi.prototype.F = function(a, b, c) {
  this.Dg[a] || (this.Dg[a] = []);
  this.Dg[a].push({ll:b, Br:c});
  return this;
};
zi.prototype.clear = function(a) {
  return "undefined" == typeof a ? (this.Dg = {}, !0) : Ai(this, a) ? (delete this.Dg[a], !0) : !1;
};
zi.prototype.Yc = function(a) {
  var b, c = [];
  Ai(this, a.Td || "") && (0,z.gb)(c, this.Dg[a.Td]);
  Ai(this, "*") && (0,z.gb)(c, this.Dg["*"]);
  for (var d = 0;d < c.length;d++) {
    b = b || !!c[d].ll.call(c[d].Br, a);
  }
  return b;
};
var Di = null, Fi = !1, Ii = {}, Hi = 0;
var Ti = {};
(0,z.p)(z.Ui, z.vc);
Vi("start");
Vi("iteration");
var fD = Vi("end");
z.g = z.Ui.prototype;
z.g.OF = function() {
  (0,z.ci)(this.Rs);
  this.Rs = null;
  (0,z.vf)(this.pa, "animation", "");
};
z.g.start = function() {
  if ("unsupported" == Si()) {
    return this.Ca(), this;
  }
  (0,z.yf)(this.pa, "animation");
  var a = (0,z.Jb)(this.yq, function(a) {
    var c = [a.name, a.duration + "ms"];
    a.timing && c.push(a.timing);
    a.qd && c.push(a.qd + "ms");
    a.fill && c.push(a.fill);
    a.direction && c.push(a.direction);
    a.sM && c.push(a.sM);
    return c.join(" ");
  });
  this.Rs = (0,z.Q)(this.pa, fD, this.KH, this);
  (0,z.vf)(this.pa, "animation", a.join(","));
  Xi(this);
  return this;
};
z.g.pause = function(a) {
  return(0,z.Wi)(this, !0, a);
};
z.g.yo = (0,z.n)(104);
z.g.KH = function(a) {
  var b = this.fp[a.animationName] = !0;
  this.yq.forEach(function(c) {
    b = b && !!this.fp[c.name];
    c.name == a.animationName && (c.paused = !0);
  }, this);
  b && this.Ca();
};
(0,z.p)(Yi, z.v);
z.g = Yi.prototype;
z.g.NC = 1;
z.g.qo = 0;
z.g.D = function(a, b, c) {
  var d = this.Cf[a];
  d || (d = this.Cf[a] = []);
  var e = this.NC;
  this.Ce[e] = a;
  this.Ce[e + 1] = b;
  this.Ce[e + 2] = c;
  this.NC = e + 3;
  d.push(e);
  return e;
};
z.g.ya = function(a, b, c) {
  if (a = this.Cf[a]) {
    var d = this.Ce;
    if (a = (0,z.Za)(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.Yj(a);
    }
  }
  return!1;
};
z.g.Yj = function(a) {
  if (0 != this.qo) {
    return this.oo || (this.oo = []), this.oo.push(a), !1;
  }
  var b = this.Ce[a];
  if (b) {
    var c = this.Cf[b];
    c && (0,z.cb)(c, a);
    delete this.Ce[a];
    delete this.Ce[a + 1];
    delete this.Ce[a + 2];
  }
  return!!b;
};
z.g.S = function(a, b) {
  var c = this.Cf[a];
  if (c) {
    this.qo++;
    for (var d = (0,z.ib)(arguments, 1), e = 0, f = c.length;e < f;e++) {
      var h = c[e];
      this.Ce[h + 1].apply(this.Ce[h + 2], d);
    }
    this.qo--;
    if (this.oo && 0 == this.qo) {
      for (;c = this.oo.pop();) {
        this.Yj(c);
      }
      this.mf && $i(this);
    }
    return 0 != e;
  }
  return!1;
};
z.g.clear = function(a) {
  if (a) {
    var b = this.Cf[a];
    b && ((0,z.rb)(b, this.Yj, this), delete this.Cf[a]);
  } else {
    this.Ce.length = 0, this.Cf = {};
  }
};
z.g.oc = function(a) {
  if (a) {
    var b = this.Cf[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.Cf) {
    a += this.oc(b);
  }
  return a;
};
z.g.C = function() {
  Yi.w.C.call(this);
  if (0 != this.qo) {
    for (var a = 1;a < this.Ce.length;a += 3) {
      this.Yj(a);
    }
  } else {
    $i(this);
  }
};
var cj = function() {
  try {
    if (!window.localStorage) {
      return!1;
    }
    window.localStorage.setItem("storage-test", "1");
    return!!window.localStorage.getItem("storage-test");
  } catch (a) {
    return!1;
  }
}();
z.g = aj.prototype;
z.g.put = function(a, b) {
  var c = this.wq + "|" + a;
  cj ? window.localStorage.setItem(c, JSON.stringify(b)) : this.Am[c] = b;
};
z.g.get = function(a) {
  a = this.wq + "|" + a;
  if (cj) {
    if (a = window.localStorage.getItem(a)) {
      try {
        return JSON.parse(a);
      } catch (b) {
      }
    }
  } else {
    return this.Am[a];
  }
};
z.g.remove = function(a) {
  a = this.wq + "|" + a;
  cj ? window.localStorage.removeItem(a) : delete this.Am[a];
};
z.g.ue = function() {
  if (cj) {
    var a = [], b = this.wq + "|", c;
    for (c in window.localStorage) {
      (0,z.Ca)(c, b) && a.push(c.substr(b.length));
    }
    a.sort();
    return a;
  }
  return vb(this.Am);
};
z.g.wf = function() {
  return ub(bj(this));
};
z.g.oc = function() {
  return this.ue().length;
};
dj.prototype.vx = function(a, b) {
  this.pb.put("X", this.wm);
  fj(this) ? (this.pb.put("Y", this.wm + "|" + (0,z.ej)()), String(this.pb.get("X") || "") != this.wm ? window.setTimeout(function() {
    String(this.pb.get("Y") || "").split("|")[0] == this.wm ? gj(this, a, b) : window.setTimeout(this.vx.bind(this, a, b), 500);
  }.bind(this), Math.round(100 * Math.random())) : gj(this, a, b)) : window.setTimeout(this.vx.bind(this, a, b), 500);
};
dj.prototype.wy = function() {
  String(this.pb.get("Y") || "").split("|")[0] == this.wm && this.pb.remove("Y");
};
hj.prototype.BA = function() {
  this.Nq || this.zH.vx(function() {
    var a = bj(this.pb);
    kj(this, a);
    var b = ub(a);
    if (0 === b.length) {
      return null;
    }
    this.Nq = !0;
    window.clearTimeout(this.Uq);
    this.Uq = null;
    return(0,z.Bc)((0,z.r)(this.ea.post(this.Uc, b, {na:!0, ee:3, background:!0}), function() {
      for (var b in a) {
        this.pb.remove(b);
      }
    }, this), function() {
      this.Nq = !1;
      this.pb.oc() ? (this.ip = Math.min(3E5, 2 * this.ip), ij(this)) : this.ip = this.sK;
    }, this);
  }, this);
};
hj.prototype.Ht = function() {
  this.BA();
};
nj.prototype.DB = null;
nj.prototype.nC = function() {
  var a;
  (a = this.DB) || (a = {}, qj(this) && (a[0] = !0, a[1] = !0), a = this.DB = a);
  return a;
};
var rj;
(0,z.p)(oj, nj);
rj = new oj;
(0,z.p)(uj, z.Aa);
uj.prototype.name = "XhrError";
(0,z.p)(vj, uj);
vj.prototype.name = "XhrHttpError";
(0,z.p)(wj, uj);
wj.prototype.name = "XhrTimeoutError";
var Aj, Jj = 0, Rb = null, Kj = [], yj = {}, Ij = [];
Lj.prototype.$j = function(a) {
  if (!a || !(0,z.oa)(a)) {
    return a;
  }
  a.__guard_originalFn = a;
  return function() {
    try {
      a.apply(this, arguments);
    } catch (b) {
      var c;
      c = b;
      c.stack ? (c = c.stack.split("\n"), c = /[^@]+@.*\/_\/fp\/js\//.test(c[0]) || /\/_\/fp\/js\//.test(c[1])) : c = c.fileName ? /\/_\/fp\/js\//.test(c.fileName) : !0;
      c && (0,z.mj)(b);
      throw b;
    }
  };
};
(0,z.p)(z.Mj, Yi);
z.Mj.prototype.S = function(a, b) {
  return this.mf ? !1 : Yi.prototype.S.apply(this, arguments);
};
z.Mj.prototype.D = function(a, b, c) {
  var d = Nj(this, b);
  d || (d = function() {
    try {
      b.apply(this, arguments);
    } catch (a) {
      (0,z.Gj)(a);
    }
  }, this.jn.push([b, d]));
  return z.Mj.w.D.call(this, a, d, c);
};
z.Mj.prototype.ya = function(a, b, c) {
  return(b = Nj(this, b)) ? z.Mj.w.ya.call(this, a, b, c) : !1;
};
z.Mj.prototype.C = function() {
  this.jn.length = 0;
  z.Mj.w.C.call(this);
};
(0,z.p)(z.Oj, z.Mj);
z.g = z.Oj.prototype;
z.g.H = function() {
  this.Wd = !0;
};
z.g.ka = function() {
  this.Wd = !1;
  for (var a = 0;a < this.zq.length;a++) {
    var b = this.zq[a];
    b[0].mf || b[0].Yj(b[1]);
  }
  this.zq.length = 0;
  (0,z.ci)(this.wa);
  this.wa.length = 0;
};
z.g.Od = function() {
  return this.Wd;
};
z.g.qa = function(a, b, c, d, e) {
  this.wa.push((0,z.Q)(a, b, c, d || this, e));
  return this;
};
z.g.C = function() {
  this.Wd && this.ka();
  z.Oj.w.C.call(this);
};
(0,z.p)(Qj, z.Oj);
var gD = Math.PI / 12;
z.g = Qj.prototype;
z.g.sn = null;
z.g.Rp = 0;
z.g.Sp = 0;
z.g.H = function() {
  Qj.w.H.call(this);
  dD ? (this.qa(window.document, "pointerdown", this.kA.bind(this, "pointer")), this.qa(window.document, "pointerup", this.fq.bind(this, "pointer")), this.qa(window.document, "pointercancel", this.fq.bind(this, "pointer"))) : (this.qa(window.document, "touchstart", this.kA.bind(this, "touch")), this.qa(window.document, "touchmove", this.wu), this.qa(window.document, "touchend", this.fq.bind(this, "touch")), this.qa(window.document, "touchcancel", this.fq.bind(this, "touch")));
};
z.g.D = function(a, b, c) {
  if (0 !== this.oc(a)) {
    throw Error('GestureHandler already has a subscriber for "' + a + '"');
  }
  return Qj.w.D.call(this, a, b, c);
};
z.g.kA = function(a, b) {
  b.touches && 1 != b.touches.length || (this.sn = {type:a, left:b.touches ? b.touches[0].clientX : b.clientX, top:b.touches ? b.touches[0].clientY : b.clientY, timestamp:(0,z.ej)()}, "touch" == a && (this.Rp = b.touches[0].clientX, this.Sp = b.touches[0].clientY));
};
z.g.wu = function(a) {
  a.touches && 1 != a.touches.length || (this.Rp = a.touches[0].clientX, this.Sp = a.touches[0].clientY);
};
z.g.fq = function(a, b) {
  if (this.sn && a == this.sn.type) {
    var c = this.sn, d = "touch" == a ? this.Rp : b.clientX, e = "touch" == a ? this.Sp : b.clientY, f = (0,z.ej)() - c.timestamp, h = Math.abs(d - c.left), e = Math.abs(e - c.top), k = Math.atan(e / h), c = d < c.left;
    this.sn = null;
    this.Sp = this.Rp = 0;
    15 > f || 450 < f || 10 > h || k > gD || window.getSelection().isCollapsed && this.S(c ? "flickleft" : "flickright", {iR:f, jR:h, kR:e, mR:k});
  }
};
(0,z.p)(kk, z.v);
z.g = kk.prototype;
z.g.C = function() {
  (0,z.ci)(this.sz);
  delete this.sz;
  this.xp.ya("flickleft", this.Wz, this);
  this.xp.ya("flickright", this.Xz, this);
  kk.w.C.call(this);
};
z.g.vf = function() {
  var a = this.$ ? vk(this.la, this.$) + 1 : 0, b = (0,z.tk)(this.la, a);
  return b ? (0,z.Ic)(b) : (0,z.r)(Ek(this.la, 5), function() {
    return(0,z.tk)(this.la, a);
  }, this);
};
z.g.ru = function(a) {
  (0,z.$d)(a.target, z.xi) || "INPUT" == a.target.tagName || (39 == a.keyCode ? mk(this) : 37 == a.keyCode && window.history.back());
};
z.g.Wz = function() {
  mk(this);
};
z.g.Xz = function() {
  window.history.back();
};
z.g.uA = function() {
  (0,z.r)(this.vf(), function(a) {
    a && (a = (0,z.I)(hk, {post:a.ab()}), $s(this.ia, a));
  }, this);
};
z.g.IK = function(a, b) {
  var c = new z.Ui(a, {name:"fade-back-out", duration:500}), d = new z.Ui(b, {name:"slide-left-in", duration:500});
  (0,z.r)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.ui)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.ui)(b);
  d.start();
  c.start();
  return d;
};
(0,z.p)(z.ok, z.Mj);
z.g = z.ok.prototype;
z.g.ri = function(a) {
  for (var b in a) {
    this.set(b, a[b]);
  }
  return this;
};
z.g.set = function(a, b) {
  for (var c = a.split("."), d = c[0], e = this.pb;1 < c.length;) {
    if (e = this.pb[c.shift()], !e || "object" != typeof e) {
      throw Error("Unable to call set() on non-object for key\x3d" + a);
    }
  }
  c = c[0];
  e[c] != b && (e[c] = b, this.rt[d] = 1, this.S(d, this.pb[d], this), this.S("change", d, this));
  return this;
};
z.g.add = function(a, b, c) {
  if (!this.pb[a]) {
    this.pb[a] = [];
  } else {
    if (!(0,z.ia)(this.pb[a])) {
      throw Error("add() called on non array, key\x3d" + a);
    }
  }
  "undefined" == typeof c ? this.pb[a].push(b) : this.pb[a][c] = b;
  this.rt[a] = 1;
  this.S(a, b, this);
  this.S("change", a, this);
  return this;
};
z.g.removeItem = function(a, b) {
  if (!(0,z.ia)(this.pb[a])) {
    throw Error("removeItem() called on non array, key\x3d" + a);
  }
  this.pb[a].splice(b, 1);
  this.rt[a] = 1;
  this.S(a, this.pb[a], this);
  this.S("change", a, this);
  return this;
};
z.g.get = function(a) {
  a = a.split(".");
  for (var b, c = this.pb;(b = a.shift()) && (c = c[b]);) {
  }
  return c;
};
z.g.ab = function() {
  return this.pb;
};
(0,z.p)(z.sk, z.Mj);
z.g = z.sk.prototype;
z.g.add = function(a) {
  this.Ih(a, this.Ra.length);
};
z.g.Ih = function(a, b) {
  a && (a = a instanceof z.ok ? a : this.Hn(a), wk(this, a), hb(this.Ra, b, 0, a), this.S("add", [a], this));
};
z.g.Qf = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    var d;
    d = a[c];
    d = d instanceof z.ok ? d : this.Hn(d);
    wk(this, d);
    this.Ra.push(d);
    b.push(d);
  }
  this.S("add", b, this);
};
z.g.remove = function(a) {
  var b = (0,z.cb)(this.Ra, a);
  b && (xk(this, a), this.S("remove", a, this));
  return b;
};
z.g.Ul = function(a) {
  return(a = (0,z.uk)(this, "id", a)) ? this.remove(a) : !1;
};
z.g.update = function(a) {
  if (0 === this.count()) {
    this.Qf(a);
  } else {
    for (var b = {}, c = {}, d = 0;d < this.Ra.length;d++) {
      var e = this.Ra[d].get("id");
      b[e] = this.Ra[d];
      c[e] = d;
    }
    d = [];
    for (e = this.Ra.length = 0;e < a.length;e++) {
      var f = a[e].get("id"), h = b[f];
      h ? (c[f] != e && (this.S("remove", h, this), d.push(h)), this.Ra.push(h), h !== a[e] && h.ri(a[e].ab())) : (d.push(a[e]), this.Ra.push(a[e]), wk(this, a[e]));
      delete b[f];
    }
    for (var k in b) {
      xk(this, b[k]), this.S("remove", b[k], this);
    }
    this.S("add", d, this);
  }
  return this;
};
z.g.oc = function() {
  return this.Ra.length;
};
z.g.count = function() {
  return this.oc();
};
z.g.Cc = (0,z.n)(105);
z.g.filter = function(a, b) {
  return(0,z.Rc)(this.Ra, a, b);
};
z.g.find = function(a, b) {
  return(0,z.Za)(this.Ra, a, b);
};
z.g.indexOf = function(a) {
  for (var b = 0;b < this.Ra.length;b++) {
    if (this.Ra[b] === a) {
      return b;
    }
  }
  return-1;
};
z.g.ab = function(a, b) {
  var c = a ? this.filter(a, b) : this.Ra;
  return(0,z.Jb)(c, function(a) {
    return a.ab();
  });
};
z.g.ts = function(a, b) {
  this.YC[a] = String(b);
  return this;
};
z.g.Sn = function(a) {
  return this.YC[a] || null;
};
z.g.Hn = function(a) {
  return new z.ok(a);
};
z.g.bA = function(a, b) {
  this.S("change", [{jo:b, wQ:[a]}]);
};
z.g.dA = function(a) {
  this.remove(a);
};
(0,z.p)(yk, z.sk);
z.g = yk.prototype;
z.g.zl = !1;
z.g.Gi = !0;
z.g.Qy = function(a) {
  var b = this.count();
  if (b >= this.pp || !this.Gi) {
    return(0,z.Ic)(this);
  }
  b = this.Ry(this.pp - b);
  a = this.Gi ? this.ls.send(this.Cp, Ck(this, b), b, {na:!0, background:!!a}) : (0,z.Ic)({});
  this.zl || a.mj(this.Bc);
  this.zl = !0;
  this.Bc = a;
  (0,z.s)((0,z.r)((0,z.Bc)(a, this.DD, this), this.CJ, this), this.iD, this);
  return Dk(this, this.Bc);
};
z.g.CJ = function(a) {
  a = zk(this, a);
  (this.Gi = 0 !== a.length) && a && this.Qf(a);
};
z.g.mj = function(a) {
  this.zl || this.Bc.Mc ? Ak(this) && (0,z.Cc)(a, this.Bc) : a.mj(this.Bc);
  return a;
};
z.g.iD = function(a) {
  a instanceof uj || (0,z.Gj)(a);
};
z.g.DD = function() {
  this.Bc = (0,z.Ic)(this);
};
(0,z.p)(z.Fk, yk);
z.Fk.prototype.Cp = "GET";
z.Fk.prototype.Vg = function(a) {
  return a;
};
z.Fk.prototype.NM = function(a) {
  a = zk(this, a);
  a = (0,z.Jb)(a, this.Hn, this);
  this.update(a);
  return this;
};
var Qk = null, Mk = {};
var el = (0,z.ej)(), lk = "home";
Tk.prototype.bd = function() {
  var a = (0,z.Zk)(this, "myposts", "/me/posts", "GET");
  (0,z.Zk)(this, lk, "/home/load-more", "POST");
  var b = Wk(this, "my-collections", "/me/collections"), c = Wk(this, "recommended", "/collections/recommended"), d = Wk(this, "recently-viewed", "/me/collections/viewed");
  (0,z.H)("isAuthenticated") && window.setTimeout(function() {
    (0,z.Bk)(a);
    (0,z.Bk)(b);
    (0,z.Bk)(c);
    (0,z.Bk)(d);
  }.bind(this), 5E3);
};
Tk.prototype.Fb = function(a) {
  if (!a) {
    throw Error("Missing id");
  }
  return this.Hk[a];
};
Tk.prototype.tw = function() {
  return this.bt["my-collections"];
};
Tk.prototype.Jr = function() {
  return this.Cb.myposts;
};
(0,z.p)($k, z.Fk);
$k.prototype.Hn = function(a) {
  return(0,z.Uk)(this.da, a);
};
(0,z.p)(Xk, z.Fk);
Xk.prototype.Hn = function(a) {
  return(0,z.dl)(this.da, a);
};
z.gl.prototype.mh = function() {
  return this.zh.pc() || [];
};
z.gl.prototype.pk = function() {
  return this.zh.ec() || [];
};
z.gl.prototype.Sh = function(a) {
  return(a = this.mh()[a]) && Hg(a);
};
var hD = {CO:1, KP:10, UE:11, SE:12, iP:2, JP:3, MP:4, LP:5, IP:6, HP:7, DO:8, jP:9, gO:99, $isProtoEnum:!0};
(0,z.p)(ml, F);
E(ml, {name:"InsertParagraphAt", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, paragraph:{g:function() {
  return Fg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = ml.prototype;
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.Eb = function() {
  return(0,z.y)(this, "index");
};
z.g.kb = function(a) {
  return(0,z.A)(this, "index", a);
};
z.g.Ng = function() {
  return(0,z.y)(this, "paragraph");
};
z.g.jg = function(a) {
  return(0,z.A)(this, "paragraph", a);
};
(0,z.p)(nl, F);
E(nl, {name:"RemoveParagraphAt", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
nl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
nl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
nl.prototype.Eb = function() {
  return(0,z.y)(this, "index");
};
nl.prototype.kb = function(a) {
  return(0,z.A)(this, "index", a);
};
(0,z.p)(ol, F);
E(ol, {name:"UpdateParagraphAt", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, paragraph:{g:function() {
  return Fg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = ol.prototype;
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.Eb = function() {
  return(0,z.y)(this, "index");
};
z.g.kb = function(a) {
  return(0,z.A)(this, "index", a);
};
z.g.Ng = function() {
  return(0,z.y)(this, "paragraph");
};
z.g.jg = function(a) {
  return(0,z.A)(this, "paragraph", a);
};
(0,z.p)(pl, F);
E(pl, {name:"UpdateTitle", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
pl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
pl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
pl.prototype.qc = function() {
  return(0,z.y)(this, "text");
};
pl.prototype.lg = function(a) {
  return(0,z.A)(this, "text", a);
};
(0,z.p)(ql, F);
E(ql, {name:"UpdateSubtitle", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ql.prototype.g = function() {
  return(0,z.y)(this, "type");
};
ql.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
ql.prototype.qc = function() {
  return(0,z.y)(this, "text");
};
ql.prototype.lg = function(a) {
  return(0,z.A)(this, "text", a);
};
(0,z.p)(rl, F);
E(rl, {name:"UpdateCaption", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
rl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
rl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
rl.prototype.qc = function() {
  return(0,z.y)(this, "text");
};
rl.prototype.lg = function(a) {
  return(0,z.A)(this, "text", a);
};
(0,z.p)(sl, F);
E(sl, {name:"UpdateImage", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Jg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
sl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
sl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
sl.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
sl.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(tl, F);
E(tl, {name:"InsertSectionAt", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, section:{g:function() {
  return z.Og;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = tl.prototype;
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.Eb = function() {
  return(0,z.y)(this, "index");
};
z.g.kb = function(a) {
  return(0,z.A)(this, "index", a);
};
z.g.Wf = function() {
  return(0,z.y)(this, "section");
};
z.g.kg = function(a) {
  return(0,z.A)(this, "section", a);
};
(0,z.p)(ul, F);
E(ul, {name:"RemoveSectionAt", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ul.prototype.g = function() {
  return(0,z.y)(this, "type");
};
ul.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
ul.prototype.Eb = function() {
  return(0,z.y)(this, "index");
};
ul.prototype.kb = function(a) {
  return(0,z.A)(this, "index", a);
};
(0,z.p)(vl, F);
E(vl, {name:"UpdateSectionAt", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, section:{g:function() {
  return z.Og;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = vl.prototype;
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.Eb = function() {
  return(0,z.y)(this, "index");
};
z.g.kb = function(a) {
  return(0,z.A)(this, "index", a);
};
z.g.Wf = function() {
  return(0,z.y)(this, "section");
};
z.g.kg = function(a) {
  return(0,z.A)(this, "section", a);
};
(0,z.p)(z.wl, F);
E(z.wl, {name:"Revert", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.wl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
z.wl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.wl.prototype.Xe = (0,z.n)(109);
z.wl.prototype.ti = (0,z.n)(113);
(0,z.p)(xl, F);
E(xl, {name:"Publish", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
xl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
xl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
(0,z.p)(yl, F);
E(yl, {name:"Failure", fields:{type:{g:function() {
  return hD;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
yl.prototype.g = function() {
  return(0,z.y)(this, "type");
};
yl.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
var Cl;
Cl = {};
z.Bl = {};
zl.prototype.Rg = XB;
(0,z.p)(z.Ol, F);
E(z.Ol, {name:"PostPayload", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return z.Pl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postTypeName:null, collectionSlug:null, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deltas:{g:function() {
  return Object;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseRev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return-1;
}, j:function() {
}, o:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverless:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Ol.prototype;
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ua = (0,z.n)(123);
z.g.Gb = (0,z.n)(133);
z.g.bm = (0,z.n)(136);
z.g.vj = (0,z.n)(139);
z.g.Qj = (0,z.n)(142);
z.g.gg = (0,z.n)(145);
(0,z.p)(z.Pl, F);
E(z.Pl, {name:"PostContent", fields:{body:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Jg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyModel:{g:function() {
  return z.Cg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Pl.prototype;
z.g.Kd = (0,z.n)(89);
z.g.he = (0,z.n)(96);
z.g.xj = (0,z.n)(99);
z.g.Zl = (0,z.n)(102);
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
z.g.ml = function() {
  return(0,z.y)(this, "bodyModel");
};
z.g.Yl = function(a) {
  return(0,z.A)(this, "bodyModel", a);
};
(0,z.p)(z.Ql, F);
E(z.Ql, {name:"PostView", fields:{createdAtRelative:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtRelative:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtRelative:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowNotes:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, previewImage:{g:function() {
  return z.Sl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, wordCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionStatusInfo:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, currentCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isOnReadingList:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, cleanContent:{g:function() {
  return z.Rl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metaDescription:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyHtml:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userPostRelation:{g:function() {
  return z.Bu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, languageTier:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersBySocialRecommends:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.Wt;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ql.prototype.Kd = (0,z.n)(88);
z.Ql.prototype.he = (0,z.n)(95);
(0,z.p)(z.Rl, F);
E(z.Rl, {name:"PostViewContent", fields:{body:null, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Sl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyModel:{g:function() {
  return z.Cg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Rl.prototype;
z.g.Kd = (0,z.n)(87);
z.g.he = (0,z.n)(94);
z.g.xj = (0,z.n)(98);
z.g.Zl = (0,z.n)(101);
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
z.g.ml = function() {
  return(0,z.y)(this, "bodyModel");
};
z.g.Yl = function(a) {
  return(0,z.A)(this, "bodyModel", a);
};
(0,z.p)(z.Sl, F);
E(z.Sl, {name:"PostViewImage", fields:{type:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, attribution:null, attributionUrl:null, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Sl.prototype;
z.g.g = function() {
  return(0,z.y)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.g.Vf = (0,z.n)(150);
z.g.Rd = (0,z.n)(155);
z.g.Id = function() {
  return(0,z.y)(this, "backgroundSize");
};
z.g.si = function(a) {
  return(0,z.A)(this, "backgroundSize", a);
};
z.g.Th = function() {
  return(0,z.y)(this, "originalWidth");
};
z.g.em = function(a) {
  return(0,z.A)(this, "originalWidth", a);
};
z.g.ql = function() {
  return(0,z.y)(this, "originalHeight");
};
z.g.dm = function(a) {
  return(0,z.A)(this, "originalHeight", a);
};
z.g.ui = (0,z.n)(159);
z.g.vl = function() {
  return(0,z.y)(this, "width");
};
z.g.Uj = function(a) {
  return(0,z.A)(this, "width", a);
};
z.g.We = function() {
  return(0,z.y)(this, "height");
};
z.g.Rj = function(a) {
  return(0,z.A)(this, "height", a);
};
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.ol = function() {
  return(0,z.y)(this, "filter");
};
z.g.Bf = function(a) {
  return(0,z.A)(this, "filter", a);
};
z.g = z.Tl.prototype;
z.g.Hr = function(a) {
  for (var b = [];a < this.lc.length;a++) {
    b.push(z.Ml.ja(this.lc[a].delta));
  }
  return b;
};
z.g.yl = (0,z.n)(161);
z.g.gj = (0,z.n)(162);
z.g.jl = (0,z.n)(164);
z.g.im = function() {
  if (!this.lc.length) {
    return null;
  }
  for (var a = [], b = [], c = (0,z.Xa)(this.lc).hj, d = 0, e = Math.max(0, this.ku), f = this.lc.length - 1;f >= e;f--) {
    var h = this.lc[f];
    h.selection && a.length && (b[a.length - 1] = h.selection);
    if (h.MC) {
      if (a.length) {
        break;
      }
      d++;
    } else {
      if (d) {
        d--;
        if (0 === f) {
          return null;
        }
        c = this.lc[f - 1].hj;
      } else {
        if (1E3 <= c - h.hj && h.selection) {
          break;
        }
        a.push(h);
      }
    }
  }
  if (!a.length) {
    return null;
  }
  c = [];
  for (f = 0;f < a.length;f++) {
    d = a[f], e = (0,z.El)(d.Mk), (0,z.Il)(e, this.xk), e.MC = !0, e.hj = (0,z.ej)(), e.selection = b[f] || null, this.lc.push(e), c.push(d), this.Ei && this.Ei.call(null, z.Ml.ja(e.delta));
  }
  this.Uu.push(c);
  return(0,z.Xa)(this.lc).selection;
};
z.g.ks = (0,z.n)(165);
(0,z.p)(Wl, zl);
Al(1, ml, Wl);
Wl.prototype.Re = function(a) {
  var b = Gl(a), c = this.delta.Eb();
  if (b.length < c) {
    throw Error("Paragraph cannot be inserted at invalid index " + c);
  }
  a = Hl(a);
  b.splice(c, 0, z.Ml.ja(this.delta.Ng()));
  for (b = 0;b < a.length;b++) {
    var d = a[b];
    d.ra() && d.ra() >= c && d.Sd(d.ra() + 1);
  }
  return(0,z.Dl)(2).kb(c);
};
(0,z.p)(Xl, zl);
Al(2, nl, Xl);
Xl.prototype.Re = function(a) {
  var b = Gl(a), c = this.delta.Eb();
  if (b.length <= c) {
    throw Error("Paragraph does not exist at index " + c);
  }
  a = Hl(a);
  var d = b.splice(c, 1), b = b.length, e = (0,z.Zg)(a, c);
  if (e) {
    for (var e = (0,z.bb)(a, e), f = 0;f < a.length;f++) {
      var h = a[f];
      h.ra() > c && h.Sd(h.ra() - 1);
    }
    !(0,z.$g)(a, e, b) && 1 < a.length && (a.splice(e, 1), a[0].Sd(0));
  }
  return(0,z.Dl)(1).kb(c).jg(d[0]);
};
(0,z.p)(Yl, zl);
Al(3, ol, Yl);
Yl.prototype.Re = function(a) {
  var b = this.delta.Eb();
  a = Gl(a);
  if (a.length <= b) {
    throw Error("Paragraph does not exist at index " + b);
  }
  var c = a[b];
  a[b] = z.Ml.ja(this.delta.Ng());
  return(0,z.Dl)(3).kb(b).jg(c);
};
Yl.prototype.Rg = Ll;
(0,z.p)(Zl, zl);
Al(4, pl, Zl);
Zl.prototype.Re = function(a) {
  return hm(a, this.delta, "title");
};
Zl.prototype.Rg = Jl;
(0,z.p)($l, zl);
Al(5, ql, $l);
$l.prototype.Re = function(a) {
  return hm(a, this.delta, "subtitle");
};
$l.prototype.Rg = Jl;
(0,z.p)(am, zl);
Al(6, sl, am);
am.prototype.Re = function(a) {
  var b = a.ad();
  a.jd(this.delta.ad());
  a = (0,z.Dl)(6);
  b && a.jd(b);
  return a;
};
am.prototype.Rg = Jl;
(0,z.p)(bm, zl);
Al(7, rl, bm);
bm.prototype.Re = function(a) {
  return hm(a, this.delta, "caption");
};
bm.prototype.Rg = Jl;
(0,z.p)(cm, zl);
Al(8, tl, cm);
cm.prototype.Re = function(a) {
  var b = this.delta.Eb(), c = z.Ml.ja(this.delta.Wf()), d = Hl(a);
  if (d.length < b) {
    throw Error("Section cannot be inserted at invalid index " + b);
  }
  var e = c.ra();
  if (0 === b && 0 !== e || Gl(a).length <= e && 0 !== e || !Xg([d[b - 1], c, d[b]])) {
    throw Error("Section has invalid start index " + c.ra());
  }
  d.splice(b, 0, c);
  return(0,z.Dl)(9).kb(b);
};
(0,z.p)(dm, zl);
Al(9, ul, dm);
dm.prototype.Re = function(a) {
  a = Hl(a);
  var b = this.delta.Eb();
  if (a.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  if (0 === b && 1 == a.length) {
    throw Error("The only section cannot be removed");
  }
  var c = a.splice(b, 1);
  a[0].Sd(0);
  return(0,z.Dl)(8).kb(b).kg(c[0]);
};
(0,z.p)(em, zl);
Al(10, vl, em);
em.prototype.Re = function(a) {
  var b = this.delta.Eb(), c = z.Ml.ja(this.delta.Wf()), d = Hl(a);
  if (d.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  var e = c.ra();
  if (0 === b && 0 !== e || Gl(a).length <= e || !Xg([d[b - 1], c, d[b + 1]])) {
    throw Error("Section has invalid start index " + c.ra());
  }
  a = d[b];
  d[b] = c;
  return(0,z.Dl)(10).kb(b).kg(a);
};
em.prototype.Rg = Ll;
(0,z.p)(fm, zl);
Al(11, z.wl, fm);
fm.prototype.Re = Nl;
(0,z.p)(gm, zl);
Al(12, xl, gm);
gm.prototype.Re = Nl;
z.g = z.qm.prototype;
z.g.ja = function() {
  return(0,z.um)(this.ub());
};
z.g.ub = function() {
  var a = (0,z.Gg)((0,z.gg)(new Fg, !0).Hb(this.type).lg(this.text), this.Ab);
  this.alignment && 1 != this.alignment && (0,z.A)(a, "alignment", this.alignment);
  this.hasDropCap && (0,z.A)(a, "hasDropCap", this.hasDropCap);
  4 == this.type && (this.layout && Ig(a, this.layout), this.metadata && a.uc(this.metadata));
  11 == this.type && (this.layout && Ig(a, this.layout), this.metadata && (0,z.A)(a, "iframe", this.metadata));
  this.name && a.Wa(this.name);
  return z.Ml.ja(a);
};
z.g.fi = (0,z.n)(166);
z.g.append = function(a) {
  var b = this.text.length;
  this.text += a.text;
  for (var c = 0;c < a.Ab.length;c++) {
    var d = z.Ml.ub(z.Lg, z.Ml.Zc(a.Ab[c]));
    d.setStart((0,z.Mg)(d) + b);
    d.setEnd((0,z.Ng)(d) + b);
    (0,z.xm)(this, d);
  }
};
z.g.split = function(a) {
  for (var b = new z.qm(null, this.type, this.text.substring(a)), c = 0;c < this.Ab.length;c++) {
    var d = this.Ab[c];
    if ((0,z.Ng)(d) > a) {
      var e = z.Ml.ub(z.Lg, z.Ml.Zc(d));
      e.setStart(Math.max(0, (0,z.Mg)(d) - a));
      e.setEnd((0,z.Ng)(d) - a);
      (0,z.xm)(b, e);
    }
  }
  (0,z.Fm)(this, a, this.text.length);
  return b;
};
z.g.Lb = function(a) {
  if (this.name != a.name || this.type != a.type || this.text != a.text || this.Ab.length != a.Ab.length) {
    return!1;
  }
  for (var b = 0;b < this.Ab.length;b++) {
    if (!this.Ab[b].Lb(a.Ab[b])) {
      return!1;
    }
  }
  return!0;
};
(0,z.p)(z.vm, z.qm);
z.vm.prototype.Lb = function(a) {
  return z.vm.w.Lb.call(this, a) && this.layout == a.layout && (this.metadata && a.metadata ? this.metadata.Lb(a.metadata) : this.metadata == a.metadata);
};
(0,z.p)(wm, z.qm);
wm.prototype.Lb = function(a) {
  return wm.w.Lb.call(this, a) && (this.metadata && a.metadata ? this.metadata.Lb(a.metadata) : this.metadata == a.metadata);
};
var Jm = {4:1, 3:2, 1:3, 2:4, 5:5};
z.Km.prototype.mh = function() {
  return this.zh.pc() || [];
};
z.Km.prototype.pk = function() {
  return this.zh.ec() || [];
};
z.Km.prototype.Sh = function(a) {
  a = (a = this.mh()[a]) && Hg(a);
  return 5 == a ? "layout-fill-width" : 3 == a ? "sectionLayout--outsetColumn" : 6 == a || 7 == a ? "sectionLayout--outsetRow" : "layout-single-column";
};
var sn;
var Kw;
var Kn;
var Rw;
var Jn;
var Qw;
var pn = {Iv:!1, ms:null, KC:!1, di:!1};
z.ea.window && (z.ea.window._resizeIframe = Gn);
Qw = {"section-bottom-center":2, "section-middle-center":3, "section-top-center":4};
Jn = (0,z.Ab)(Qw);
Rw = {"section-image-full":2, "section-image-left":3, "section-image-right":4};
Kn = (0,z.Ab)(Rw);
z.Sw = {brook:2, crush:3, fresh:4, gray:5, grimace:6, lime:7, lipstick:8, magic:9, midday:10, midnight:11, seaweed:12, warm:13, brookLight:102, crushLight:103, freshLight:104, grayLight:105, grimaceLight:106, limeLight:107, lipstickLight:108, magicLight:109, middayLight:110, midnightLight:111, seaweedLight:112, warmLight:113};
z.Ln = (0,z.Ab)(z.Sw);
Kw = {left:1, center:2};
sn = (0,z.Ab)(Kw);
(0,z.p)(Qn, z.Mj);
z.Rn = 200;
z.g = Qn.prototype;
z.g.C = function() {
  this.Op && (this.Iy.cancel(), this.CA());
  this.vd && (this.pt.cancel(), this.fv());
  (0,z.ci)(this.SJ);
  (0,z.ci)(this.EA);
  window._resizeIframe = Gn;
  Qn.w.C.call(this);
};
z.g.Ri = function() {
  Tn(this);
};
z.g.Ne = function() {
  this.on = (0,z.qi)(this.Za);
  this.vd || (this.vd = !0, this.S("scroll-start", this.Za, this.on));
  this.S("scroll", this.Za, this.on);
  this.BK();
  this.pt();
};
z.g.fv = function() {
  this.vd = !1;
  this.S("scroll-end", this.Za, this.on);
};
z.g.CK = function() {
  this.S("scroll-throttled", this.Za, this.on);
};
z.g.gA = function() {
  if (fC || bC) {
    var a = window.innerWidth, b = window.innerHeight;
    if (a === this.pB && 2 > Math.abs(b - this.oB)) {
      return;
    }
    this.pB = a;
    this.oB = b;
  }
  this.Op || (this.Op = !0, (0,z.t)(window.document.body, "resizing"), this.S("resize-start"));
  this.S("resize");
  this.Iy();
};
z.g.CA = function() {
  this.Op = !1;
  Tn(this);
  this.S("resize-end");
  (0,z.u)(window.document.body, "resizing");
};
z.g.AG = function(a) {
  Gn(a);
  this.gA();
};
z.g.kq = function() {
  this.S("webfont-load");
};
z.g.mJ = function() {
  this.S("webfont-error");
};
var hE;
var gE;
var Oq;
var fE;
var TD;
var wB;
var RD;
var QD;
var PD;
var OD;
var ND;
var ys;
var zD;
var yD;
var xD;
var vD;
var uD;
var tD;
var Gq;
var Cq;
(0,z.p)(S, R);
(0,z.p)(T, R);
(0,z.p)(Vn, T);
var iD = new R("homepage.viewed"), jD = new R("homepage.prlPostClicked"), kD = new R("collection.loaded"), lD = new R("collection.followed"), mD = new R("collection.unfollowed"), nD = new R("user.followed"), oD = new R("user.unfollowed"), pD = new R("post.started"), qD = new R("post.recommendClicked");
new R("post.crosspostClicked");
Cq = new R("post.crosspostSuccess");
Gq = new R("post.crosspostRemoved");
z.rD = new R("post.shareDraftClicked");
z.sD = new R("post.postEditorLocked");
tD = new R("post.clientUpvote");
uD = new R("post.clientUnvote");
vD = new T("post.clientRead", "?postId ?postIds ?collectionSlug userId createdAt isAuthenticated referrer".split(" "));
z.wD = new R("post.share");
xD = new R("post.shareOpen");
yD = new R("post.addedBookmark");
zD = new R("post.removedBookmark");
new R("post.readNext");
new R("post.skipPost");
ys = new R("post.nextPost");
z.AD = new R("profile.viewed");
z.BD = new R("profile.enterEdit");
z.CD = new R("profile.cancelEdit");
z.DD = new R("profile.saved");
new R("notes.ui.showToolbar");
z.ED = new R("notes.ui.showNotes");
z.FD = new R("notes.ui.noteCreated");
z.GD = new R("notes.ui.noteEdited");
z.HD = new R("notes.ui.noteDeleted");
z.ID = new R("notes.ui.noteStateChanged");
z.JD = new R("notes.ui.replyCreated");
z.KD = new R("notes.ui.replyEdited");
z.LD = new R("notes.ui.replyDeleted");
z.MD = new R("notes.ui.replyHidden");
ND = new R("followUp.ui.started");
OD = new R("followUp.ui.created");
PD = new R("followUp.ui.deleted");
QD = new R("followUp.ui.visibilityChanged");
RD = new R("followUp.ui.clicked");
new R("activity.viewed");
wB = new R("ui.imageZoom");
z.SD = new R("ui.imageInsert");
TD = new R("post.scrolled");
new R("search.opened");
var UD = new R("search.queried"), VD = new R("search.returnedResults");
new R("search.resultClicked");
var fz = new R("site.loginClicked"), WD = new S("client.error.imageLoad"), XD = new S("client.error.requestHttpError"), YD = new S("client.error.requestError"), ZD = new S("client.error.requestTimeout"), Dz = new R("user.testBucketSet");
new R("user.testBucketSet");
var $D = new R("user.sendVerificationEmailButterShown"), aE = new R("user.sendVerificationEmailButterClicked");
new R("user.writeAccessPromptShown");
new R("user.writeAccessPromptDismissed");
new R("user.writeAccessPromptClicked");
var bE = new T("collection.viewed", ["collectionId", "createdAt", "isAuthenticated"]);
new T("post.viewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]);
var cE = new T("post.clientViewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]), dE = new R("post.draftViewed"), eE = new T("posts.presented", ["postIds", "userId", "createdAt", "isAuthenticated", "weight"]);
new T("posts.prlFiltered", ["postIds", "userId", "createdAt", "isAuthenticated"]);
fE = new R("collection.ui.postApproved");
Oq = new R("collection.ui.postRejected");
gE = new R("post.embedClicked");
hE = new R("collection.embedClicked");
z.iE = new R("profile.embedClicked");
new R("embed.viewed");
z.jE = new R("socialFeed.postClicked");
z.kE = new R("socialFeed.collectionClicked");
new R("server.prl.displayed");
new R("server.prl.lowVolume");
new T("post.read.unique", ["postId", "userId", "createdAt", "isAuthenticated"]);
new T("post.read.total", ["postId", "userId", "createdAt", "isAuthenticated"]);
var lE = new T("post.detectLanguage", ["postId"]), mE = new T("post.upvote.statUpdate", ["postId", "userId"]), nE = new T("post.unvote.statUpdate", ["postId", "userId"]);
new R("email.queued");
new R("email.send");
new R("email.send.success");
new R("email.send.failure");
new T("email.send.regular", ["userId", "email", "emailType"]);
new T("email.send.required", ["userId", "email", "emailType"]);
var oE = new T("email.sendVerify", ["userId", "newEmail", "verificationType", "redirectUrl"]), pE = new T("email.sendChangeNotification", ["userId", "oldEmail", "newEmail"]);
new R("embedly.success");
new R("embedly.failure");
new R("post.saved");
var qE = new T("post.notifyCollaboratorsByActivity", ["postId", "occurredAt"]), rE = new T("pubsubhubbub.notifyPost", ["postId", "userId"]), sE = new T("facebook.postChanged", ["postId"]);
new T("post.flaggedSpam", ["postId", "userId"]);
new T("post.unflaggedSpam", ["postId", "userId"]);
new R("collaborator.added");
new R("user.writeAccessGranted");
new R("user.settingsChanged");
var tE = new T("user.createdAddIndex", ["userId", "createdAt"]), uE = new T("user.createdSubscribeDefaultCollections", ["userId"]);
new T("user.importTwitterGraph", ["userId"]);
var vE = new T("user.importFacebookGraph", ["userId"]), wE = new T("user.reactivatedImportGraph", ["userId", "source"]), xE = new T("pubsubhubbub.notifyCollection", ["collectionId"]), yE = new T("stat.collection.subscribed", ["collectionId", "createdAt"]), zE = new T("stat.collection.unsubscribed", ["collectionId", "createdAt"]), AE = new T("collection.responseTimeRecalculation", ["collectionId"]);
new T("post.checkAndSchedule", ["timestampMs", "collectionId"]);
var BE = new T("notes.createdIncrementStat", ["postId", "noteId"]), CE = new T("notes.notifyMentionsUsersActivity", ["postId", "noteId"]), DE = new T("notes.replyNotifyMentionedUsersActivity", ["postId", "noteId", "replyId"]), EE = new T("post.publishedNotifyFollowersActivity", ["postId", "wordCount"]), FE = new T("post.recommendedNotifyFollowersActivity", ["userId", "postId"]);
new R("notes.db.noteRemoved");
new R("notes.db.noteUpdateWhitelist");
new R("notes.db.noteHidden");
new R("notes.db.noteUnapproved");
new R("notes.db.replyRemoved");
new R("notes.db.replyHidden");
new S("server.requests.count");
new T("followUps.db.followUpCreated", ["postId", "userId", "createdAt"]);
new R("followUps.db.followUpDismissed");
new R("followUps.db.followUpApproved");
new R("followUps.db.followUpUnapproved");
new R("followUps.db.followUpRemoved");
new R("followUps.db.followUpUpdated");
new R("highlight.created");
new S("feed.cacheMiss");
new S("feed.cacheHit");
new S("feed.cacheByPass");
new S("zcache.connected");
new S("zcache.disconnected");
new S("zcache.hit");
new S("zcache.miss");
new S("zcache.put");
new S("sharedCache.hitRatio");
new S("sharedCache.access");
new S("sharedCache.get.time");
new S("sharedCache.mget.time");
new S("sharedCache.set.time");
new S("sharedCache.mset.time");
new S("sharedCache.del.time");
new S("sharedCache.pendingRequestCount");
new S("inMemoryCache.keys");
new S("inMemoryCache.hitRatio");
new S("inMemoryCache.accessCount");
new S("sharedCache.get.time.99p");
new S("sharedCache.mget.time.99p");
new S("sharedCache.set.time.99p");
new S("sharedCache.mset.time.99p");
new S("sharedCache.del.time.99p");
new S("sharedCache.get.count");
new S("sharedCache.mget.count");
new S("sharedCache.set.count");
new S("sharedCache.mset.count");
new S("sharedCache.del.count");
new S("sharedCache.get.timeout.count");
new S("sharedCache.mget.timeout.count");
new S("sharedCache.set.timeout.count");
new S("sharedCache.mset.timeout.count");
new S("sharedCache.del.timeout.count");
new S("sharedCache.mget.partial.result.count");
new S("sharedCache.mset.partial.result.count");
new R("upload.stored");
new R("upload.failed");
new R("upload.reused");
new S("bloomd.connected");
new S("bloomd.disconnected");
new S("bloomd.unavailable");
new S("bloomd.check");
new S("bloomd.multiCheck");
new S("bloomd.set");
new S("bloomd.bulkSet");
new S("bloomd.create");
new S("bloomd.timeout");
new S("bloomd.error");
new T("user.readPostFilterBackfill", ["userId"]);
new T("post.magnitudeForTimespan", ["postId", "startIndex", "timespan", "overrideTimestamp"]);
new T("post.magnitudeForTimespanPostMetrics", ["postId", "startIndex", "overrideTimestamp"]);
new T("homepage.generateFromTimespanMagnitude", ["timespan", "count"]);
new T("collection.recommendedPostAggregation", ["collectionId"]);
var GE = new T("user.recommendedPostAggregation", ["postId"]);
new T("post.fixCollectionsPostCounts", ["postId"]);
var HE = new T("collection.fixPostCount", ["collectionId"]);
new T("collection.badCollectionFound", ["collectionId"]);
var IE = new T("user.generateCollectionSubPostSuggestions", ["userId"]);
new S("node.queueDepth");
new S("node.tickLengthMs");
new S("jubilee.messageWaitTime");
new S("jubilee.messageProcessTime");
new S("jubilee.deleteMessage");
new R("server.response.time");
new T("collection.fixSubscriberCounts", ["collectionId"]);
new T("post.fixPostFirstPublishedTime", ["postId"]);
new T("post.fillPostPublishedAt", ["postId"]);
new T("collection.addAcceptedAtToAll", ["collectionId"]);
new T("user.fixUsernameEntry", ["userId"]);
new T("post.addAcceptedAt", ["postId", "collectionId", "acceptedAt"]);
var JE;
JE = new T("activity.postRecommended", ["userId", "postId", "collectionId", "occurredAt"]);
var KE = new T("activity.postRecommendedMilestone", ["userId", "postId", "collectionId", "occurredAt"]), LE = new T("activity.collectionFollowedMilestone", ["userId", "collectionId"]), ME = new T("activity.postCrossPosted", ["crossPosterId", "postId", "collectionId", "occurredAt"]), NE = new T("activity.collectionPostApproved", ["postId", "collectionId", "occurredAt"]), OE = new T("activity.collectionPostRejected", ["userId", "postId", "collectionId", "editorComment", "occurredAt"]), PE = new T("activity.collectionPostSubmitted", 
["userId", "postId", "collectionId", "occurredAt"]), QE = new T("activity.collectionPostRemoved", ["postId", "collectionId", "occurredAt"]), RE = new T("activity.collectionEditorAdded", ["userId", "collectionId", "fromUserId", "occurredAt"]);
new T("activity.postCollaboratedPublished", ["postId", "occurredAt", "collaboratorId"]);
new T("activity.followedPostPublished", ["userId", "postId", "followerId"]);
new T("activity.followedPostRecommended", ["userId", "postId", "followerId"]);
new T("activity.followUpCreated", ["postId", "followUpId"]);
new T("activity.followUpPublished", ["postId", "followUpId"]);
new T("activity.postAddedAsFollowUp", ["postId", "followUpId"]);
var SE = new T("activity.note", ["postId", "noteId"]), TE = new T("activity.reply", ["postId", "noteId", "replyId"]), UE = new T("activity.notePublished", ["postId", "noteId"]);
new T("activity.mentionInNote", ["noteId", "postId", "mentionedUserId"]);
new T("activity.mentionInNoteUpdate", ["noteId", "postId", "mentionedUserId"]);
new T("activity.mentionInNoteReply", ["postId", "noteId", "replyId", "mentionedUserId"]);
new T("activity.mentionInNoteReplyUpdate", ["postId", "noteId", "replyId", "mentionedUserId"]);
new T("collection.fixUserCollectionLinks", ["collectionId"]);
new T("user.fixUserCollectionLinks", ["userId"]);
new T("posts.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new T("collections.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new T("users.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new T("posts.forEachByUser", ["userId", "emitEvent", "data"]);
new T("votes.forEachByUser", ["userId", "emitEvent", "data"]);
new T("countHealing.userReadCounts", ["userId"]);
new T("countHealing.userStats", ["userId", "?startTime", "?endTime"]);
new T("countHealing.userTotals", ["userId"]);
new T("countHealing.zeroPostTimeSeries", ["postId", "collectedAt", "statAttributes", "?referrer"]);
new T("user.fillUserCreatedAt", ["userId"]);
new T("countHealing.postTotals", ["postId"]);
new T("collection.backfillCollectionAdmin", ["collectionId"]);
new T("user.subscribeToCollection", ["userId", "collectionId"]);
new T("collection.fillCollectionActiveAt", ["collectionId"]);
new T("bestOf.postsForMonth", ["month", "year", "postIds"]);
var VE = new T("search.postIndexRequest", ["postId"]), WE = new T("search.userIndexRequest", ["userId"]), XE = new T("search.collectionIndexRequest", ["collectionId"]);
new T("switchboard.activityCreated", ["userId", "activityItemRangeKey"]);
new T("switchboard.sendNewsletter", ["toUserId"]);
new T("switchboard.sendAllNewslettersForTimeOffset", ["timeOffsetMin", "?lastKey"]);
var YE = new T("switchboard.updateUserNewsletterTime", ["userId"]);
new T("social.userFollowedUsersTwitter", ["userId", "followedUserIds"]);
new T("social.usersFollowedUserTwitter", ["userId", "followerUserIds"]);
var ZE = new T("social.userCreatedPost", ["userId", "postId"]), $E = new T("social.userPublishedPost", ["userId", "postId"]), aF = new T("social.userCreatedRecommendNote", ["postId", "noteId"]), bF = new T("social.userRecommendedPost", ["userId", "postId"]), cF = new T("social.userUnvotedPost", ["userId", "postId"]), dF = new T("social.userFollowedUser", ["userId", "targetUserId"]), eF = new T("social.userUnfollowedUser", ["userId", "targetUserId"]), fF = new T("social.userFollowedCollection", ["userId", 
"collectionId"]), gF = new T("social.userUnfollowedCollection", ["userId", "collectionId"]), hF = new T("social.userCreatedCollection", ["userId", "collectionId"]), iF = new T("social.userEditedCollection", ["userId", "collectionId"]), jF = new T("social.userRemovedAsEditorOfCollection", ["userId", "collectionId"]), kF = new T("social.collectionAcceptedPost", ["collectionId", "postId"]), lF = new T("social.collectionRemovedPost", ["collectionId", "postId"]);
new S("gosocial.getNamedQueryByQueryParams.request");
new S("gosocial.getNamedQueryByUserId.error");
new S("gosocial.getPostsPublishedByFriendsForUser.request");
new S("gosocial.getPostsPublishedByFriendsForUser.error");
new S("gosocial.getPostsRecommendedByFriendsForUser.request");
new S("gosocial.getPostsRecommendedByFriendsForUser.error");
new S("gosocial.getFriendsWhoRecommendedPostsForUser.request");
new S("gosocial.getFriendsWhoRecommendedPostsForUser.error");
new S("gosocial.userModifyRelationship.request");
new S("gosocial.userModifyRelationship.error");
new S("gosocial.getRelationships.request");
new S("gosocial.getRelationships.error");
new S("gosocial.request.error");
z.mF = new R("espn.landingPageViewed");
new R("espn.welcomeEmailSent");
z.nF = new R("promo.startWritingPageViewed");
new T("spam.users.upload", ["userIds", "type"]);
new T("post.backfillCreatorPostRelation", ["postId"]);
new T("post.fixCreatorPostIndex", ["postId"]);
new R("ios.app.launch");
new R("ios.app.start");
new R("ios.app.login");
new R("ios.app.logout");
new R("ios.app.error");
new R("ios.app.crash");
new R("ios.app.memoryWarning");
new Vn("post.published", [qE, EE, rE, sE, lE, VE, $E]);
new Vn("post.created", [ZE]);
new Vn("post.republished", [rE, sE]);
new Vn("post.upvoted", [mE, bF, GE, JE, KE, FE]);
new Vn("post.revoted", [bF, GE, mE]);
new Vn("post.unvoted", [cF, nE]);
new Vn("user.subscribed", [dF]);
new Vn("user.unsubscribed", [eF]);
new Vn("user.created", [tE, WE, uE]);
new Vn("user.usernameUpdated", [WE]);
new Vn("user.emailUpdated", [WE, pE, oE]);
new Vn("user.deactivated", []);
new Vn("user.reactivated", [wE]);
new Vn("notes.db.noteCreated", [BE, CE, SE, aF]);
new Vn("notes.db.noteUpdated", [CE, aF]);
new Vn("notes.db.noteApproved", [UE]);
new Vn("notes.db.replyCreated", [DE, TE]);
new Vn("notes.db.replyUpdated", [DE]);
new Vn("collection.postSubmitted", [PE, HE]);
new Vn("collection.postApproved", [XE, xE, AE, NE, HE, kF]);
new Vn("collection.postCrossPosted", [XE, xE, ME, HE, kF]);
new Vn("collection.postRejected", [OE, AE, HE, lF]);
new Vn("collection.postRemoved", [QE, HE, lF]);
new Vn("collection.subscribed", [yE, LE, IE, fF]);
new Vn("collection.unsubscribed", [zE, IE, gF]);
new Vn("collection.editorAdded", [RE, iF]);
new Vn("collection.editorRemoved", [jF]);
new Vn("collection.created", [XE, hF]);
new Vn("collection.updated", [XE]);
new Vn("collection.deleted", []);
new Vn("facebook.connected", [vE]);
new Vn("facebook.disconnected", []);
new Vn("user.login", [YE]);
new Vn("user.timezoneChanged", [YE]);
(0,z.p)(Wn, z.Oj);
Wn.prototype.H = function() {
  Wn.w.H.call(this);
  (0,z.Pj)(this, this.Ba, "scroll-end", this.gB, this);
  this.gB();
};
Wn.prototype.gB = function() {
  var a = Xn(this);
  a.length && (0,z.Hk)(eE, {postIds:a, weight:1});
};
z.g = z.Yn.prototype;
z.g.za = function() {
  return!0;
};
z.g.Gl = function(a, b) {
  var c = this.Gj(b);
  c && delete this.dj[(0,z.qa)(b)];
  return c;
};
z.g.gi = function(a, b, c) {
  (a = !this.Gj(c)) || delete this.dj[(0,z.qa)(c)];
  return a;
};
z.g.jm = function(a) {
  a = (0,z.qa)(a);
  this.dj[a] || (this.dj[a] = this.now());
};
z.g.Gj = function(a) {
  a = (0,z.qa)(a);
  return!(a in this.dj) || this.now() - this.dj[a] >= this.fu;
};
z.g.now = function() {
  return(new Date).getTime();
};
(0,z.p)(Zn, z.Yn);
Zn.prototype.gi = function(a, b, c) {
  return b.Dl ? Zn.w.gi.call(this, a, b, c) : (delete this.dj[(0,z.qa)(c)], !1);
};
z.g = $n.prototype;
z.g.za = function(a, b) {
  return this.rm ? this.Cm.za(a, b) : !0;
};
z.g.Gl = function(a, b) {
  return this.rm ? this.Cm.Gl(a, b) : !1;
};
z.g.gi = function(a, b, c) {
  return this.rm ? this.Cm.gi(a, b, c) : !0;
};
z.g.jm = function(a) {
  this.Cm.jm(a);
  this.rm = !0;
};
z.g.Gj = function(a) {
  return this.rm ? this.Cm.Gj(a) : !1;
};
z.ao.prototype.za = function() {
  return!1;
};
z.ao.prototype.Gl = function() {
  return!1;
};
z.ao.prototype.gi = function() {
  return!1;
};
z.ao.prototype.jm = z.fa;
z.oF = new z.ao;
bo.prototype.za = function() {
  return!0;
};
bo.prototype.Gl = function() {
  return!1;
};
bo.prototype.gi = function() {
  return!0;
};
bo.prototype.jm = z.fa;
z.pF = new bo;
(0,z.p)(z.go, z.Oj);
z.go.prototype.Aa = function(a) {
  this.Ks.push(a);
  if (this.Od()) {
    try {
      a.H();
    } catch (b) {
      (0,z.Gj)(b);
    }
  }
  return this;
};
z.go.prototype.H = function() {
  z.go.w.H.call(this);
  ho(this, function(a) {
    a.H();
  });
};
z.go.prototype.ka = function() {
  ho(this, function(a) {
    a.ka();
  });
  z.go.w.ka.call(this);
};
z.go.prototype.C = function() {
  ho(this, function(a) {
    (0,z.ad)(a);
  });
  this.Ks.length = 0;
  z.go.w.C.call(this);
};
(0,z.p)(io, z.v);
io.prototype.Hj = function() {
  return!0;
};
io.prototype.ww = function() {
  return this.Hj() ? [this] : [];
};
(0,z.p)(jo, io);
jo.prototype.C = function() {
  this.Ep = null;
  jo.w.C.call(this);
};
jo.prototype.Hj = function() {
  return!!this.yu;
};
jo.prototype.Jd = function() {
  return new z.tf(0, 0, this.Ep.width, this.Ep.height);
};
(0,z.p)(lo, z.v);
lo.prototype.C = function() {
  lo.w.C.call(this);
};
z.g = z.mo.prototype;
z.g.ja = function() {
  return new z.mo(this.gc, this.tc, this.sc, this.hc, this.Rb, this.jb);
};
z.g.setTransform = function(a, b, c, d, e, f) {
  if (!((0,z.na)(a) && (0,z.na)(b) && (0,z.na)(c) && (0,z.na)(d) && (0,z.na)(e) && (0,z.na)(f))) {
    throw Error("Invalid transform parameters");
  }
  this.gc = a;
  this.tc = b;
  this.sc = c;
  this.hc = d;
  this.Rb = e;
  this.jb = f;
  return this;
};
z.g.lf = function(a) {
  this.gc = a.gc;
  this.tc = a.tc;
  this.sc = a.sc;
  this.hc = a.hc;
  this.Rb = a.Rb;
  this.jb = a.jb;
  return this;
};
z.g.scale = function(a, b) {
  this.gc *= a;
  this.tc *= a;
  this.sc *= b;
  this.hc *= b;
  return this;
};
z.g.translate = function(a, b) {
  this.Rb += a * this.gc + b * this.sc;
  this.jb += a * this.tc + b * this.hc;
  return this;
};
z.g.rotate = function(a, b, c) {
  var d = new z.mo, e = Math.cos(a);
  a = Math.sin(a);
  b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e);
  return no(this, b);
};
z.g.toString = function() {
  return "matrix(" + [this.gc, this.tc, this.sc, this.hc, this.Rb, this.jb].join() + ")";
};
z.g.transform = (0,z.n)(167);
z.g.Lb = function(a) {
  return this == a ? !0 : a ? this.gc == a.gc && this.sc == a.sc && this.Rb == a.Rb && this.tc == a.tc && this.hc == a.hc && this.jb == a.jb : !1;
};
(0,z.p)(oo, io);
oo.prototype.C = function() {
  (0,z.cd)(this.Rk);
  this.Rk.length = 0;
  oo.w.C.call(this);
};
oo.prototype.Hj = function() {
  for (var a = 0;a < this.Rk.length;a++) {
    if (this.Rk[a].Hj()) {
      return!0;
    }
  }
  return!1;
};
oo.prototype.ww = function() {
  if (!this.Hj()) {
    return[];
  }
  for (var a = [], b = 0;b < this.Rk.length;b++) {
    var c = this.Rk[b];
    c.Hj() && (a = a.concat(c.ww()));
  }
  return a;
};
(0,z.p)(po, z.v);
z.g = po.prototype;
z.g.C = function() {
  this.Ut = !1;
  po.w.C.call(this);
};
z.g.vl = function() {
  return this.Pf;
};
z.g.We = function() {
  return this.ud;
};
z.g.Jd = function() {
  return new z.tf(this.Ed.Rb, this.Ed.jb, this.vl(), this.We());
};
z.g.Uj = function(a) {
  this.Pf = a;
  return this;
};
z.g.Rj = function(a) {
  this.ud = a;
  return this;
};
(0,z.p)(z.to, z.vc);
z.to.prototype.pC = function(a, b, c) {
  this.gD++;
  this.gw[a] = [b, c];
  this.Mc || (this.dC && b ? this.Ca([a, c]) : this.DL && !b ? this.be(c) : this.gD == this.Ww.length && this.Ca(this.gw));
  this.iL && !b && (c = null);
  return c;
};
z.to.prototype.be = function(a) {
  z.to.w.be.call(this, a);
  for (a = 0;a < this.Ww.length;a++) {
    this.Ww[a].cancel();
  }
};
(0,z.p)(uo, z.v);
uo.prototype.C = function() {
  this.il = null;
  uo.w.C.call(this);
};
uo.prototype.g = function() {
  return "native";
};
uo.prototype.refresh = function() {
};
(0,z.p)(wo, uo);
wo.prototype.g = function() {
  return "post-cover";
};
wo.prototype.refresh = function(a) {
  if (!(0,z.H)("useragent.isMobile") && !(0,z.H)("useragent.isTablet")) {
    var b = Sd(a), c;
    c = this.pj;
    var d = c.Aa(b);
    c = Bo(c.Yd.Ed.jb, d.Ed.jb, d.We());
    1 <= c || (b = this.pj.Aa(b), b = b.Ed.jb + b.We(), this.sA = vo(this.il, this.sA, c, b, a), (0,z.vf)(a, "opacity", 1 - c));
  }
};
(0,z.p)(xo, uo);
z.g = xo.prototype;
z.g.bd = function(a) {
  this.Zs = this.sw(a);
  var b = this.iC(a);
  this.Fp = Mz(this.bM, [this.Zs, b]);
  (0,z.r)(this.Fp, function(b) {
    var d = b[1][1];
    this.wr = new jo(b[0][1]);
    this.or = ko(new jo(d), 0);
    b = qo(so(new po, this.il.Jd()), 0);
    b.Bz = new oo([this.wr, this.or]);
    this.Yf = b;
    b = this.tk;
    var d = this.Yf, e = (0,z.qa)(d);
    b.un[e] = d;
    (0,z.r)(this.pj.refresh(), this.XC.bind(this, a));
  }, this);
};
z.g.g = function() {
  return "blur-cover";
};
z.g.refresh = function(a) {
  this.Yf && this.nE(a);
};
z.g.C = function() {
  yo(this);
  xo.w.C.call(this);
};
z.g.nE = function(a) {
  this.sw(a) != this.Zs && (yo(this), this.bd(a));
  a = this.pj.Yd.Jd();
  var b = this.il.Jd();
  ro(this.Yf.Uj(b.width).Rj(b.height), a.top);
  a = Bo(a.top, 0, 0.4 * b.height);
  a = 1 - Math.pow(1 - a, 2);
  ko(this.wr, 1 === a ? 0 : 1);
  ko(this.or, a);
};
z.g.XC = function(a) {
  (0,z.t)(a, "is-usingCanvas");
};
z.g.sw = function(a) {
  return a.getAttribute("data-image-url");
};
z.g.iC = function(a) {
  return a.getAttribute("data-image-blur-url");
};
(0,z.p)(zo, xo);
z.g = zo.prototype;
z.g.g = function() {
  return "post-section";
};
z.g.XC = function(a) {
  (0,z.t)(Sd(a), "section-using-canvas");
};
z.g.bd = function(a) {
  this.Nt = (0,z.Tw)(a);
  this.zt = this.il.vl();
  zo.w.bd.call(this, a);
};
z.g.sw = function() {
  return Ur(this.Nt, {width:this.zt});
};
z.g.iC = function() {
  return Ur(this.Nt, {width:this.zt, blur:20, darken:45, verticalGradient:"29/81/40"});
};
z.g.nE = function(a) {
  var b = this.il.Jd();
  ro(this.Yf.Uj(b.width).Rj(b.height), b.top + this.Cu);
  b = Sd(a);
  a = this.pj;
  var c = a.Aa(b), d = c.We() - a.Yd.We();
  a = 0 >= d ? 0 : Bo(a.Yd.Ed.jb, c.Ed.jb, d);
  c = this.pj.Aa(b);
  b = c.Ed.jb;
  c = b + c.We();
  d = this.pj.Yd.Jd();
  b = Bo(d.top, b + 0.15 * d.height, 0.4 * d.height);
  b = 1 - Math.pow(1 - b, 2);
  this.Cu = vo(this.Yf, this.Cu, a, c);
  ko(this.wr, 1 === b ? 0 : 1);
  ko(this.or, b);
};
(0,z.p)(Ao, z.Oj);
z.g = Ao.prototype;
z.g.Wo = null;
z.g.C = function() {
  Fo(this, []);
  Ao.w.C.call(this);
};
z.g.H = function() {
  Ao.w.H.call(this);
  var a = this.Kc.N.querySelector(".canvas-renderer");
  a && (this.$i = new Wr(a));
  a = this.ca.get("activity-monitor");
  this.Wo = new rA(a.lh, 2E3);
  this.Wo.D(qF, this.$f, this);
  this.Ba.D("scroll", this.Ne, this);
  this.Ba.D("resize-end", this.$f, this);
  this.Ba.D("webfont-load", this.kq, this);
  this.$f();
};
z.g.ka = function() {
  this.Ba.ya("scroll", this.Ne, this);
  this.Ba.ya("resize-end", this.$f, this);
  this.Ba.ya("webfont-load", this.kq, this);
  (0,z.ad)(this.Wo);
  this.Wo = null;
  (0,z.ad)(this.$i);
  this.$i = null;
  Ao.w.ka.call(this);
};
z.g.Aa = function(a, b) {
  var c = b || !((0,z.qa)(a) in this.Hf);
  b || a.hasAttribute("data-scroll") || (b = "native");
  b && a.setAttribute("data-scroll", b);
  c && (Co(this), Do(this, a));
  c = (0,z.qa)(a);
  return this.Hf[c];
};
z.g.$f = function() {
  if (this.Mp) {
    return this.Zi;
  }
  this.Mp = !0;
  return this.refresh();
};
z.g.refresh = function() {
  if (this.Np) {
    return this.Zi;
  }
  this.Np = !0;
  this.Zi = new z.vc;
  window.requestAnimationFrame(this.Cq.bind(this));
  return this.Zi;
};
z.g.Cq = function() {
  var a;
  if (this.Mp) {
    if (this.Mp = !1, this.Od()) {
      a = (0,z.Un)();
      var b = this.Kc.N, c = b.offsetHeight, d = (0,z.qi)(a);
      qo(ro(this.Yd.Uj(b.offsetWidth).Rj(c), d.top), d.left);
      this.$i && (b = this.$i, c = this.Yd.vl(), d = this.Yd.We(), b.hk.width = c, b.hk.height = d);
      a = (0,z.ni)(a);
      this.Ly.setTransform(1, 0, 0, 1, -a.x, -a.y);
      Co(this);
      a = Go(this);
      for (b = 0;b < a.length;b++) {
        Do(this, a[b]);
      }
      Fo(this, a);
    } else {
      a = [];
    }
  } else {
    a = null;
  }
  this.Np = !1;
  if (this.Od()) {
    a || (a = Go(this));
    for (b = 0;b < a.length;b++) {
      c = a[b], d = (0,z.qa)(c), d in this.Ah && this.Ah[d].refresh(c);
    }
    this.$i && this.$i.eg(this.tk, this.Yd);
    this.Zi && (this.Zi.Ca(), this.Zi = null);
  }
};
z.g.Ne = function(a, b) {
  (0,z.Un)() == a && (qo(ro(this.Yd, b.top), b.left), this.Np = !0, this.Cq());
};
z.g.kq = function() {
  this.$f();
  (0,window.setTimeout)(this.$f.bind(this), 2E3);
};
(0,z.p)(z.Ho, z.go);
z.g = z.Ho.prototype;
z.g.N = null;
z.g.Zd = new Zn(3E5);
z.g.Vq = null;
z.g.Lf = null;
z.g.J = function(a) {
  return this.N ? this.N.querySelector(a) : null;
};
z.g.Mj = function(a) {
  return this.N ? (0,z.fb)(this.N.querySelectorAll(a)) : [];
};
z.g.find = function(a) {
  return this.J(a);
};
z.g.La = function() {
  return this.ca;
};
z.g.nb = function() {
  return this.Vq;
};
z.g.uc = function(a) {
  this.Lf = a;
};
z.g.getMetadata = function() {
  return this.Lf;
};
z.g.Lw = z.fa;
z.g.mr = function() {
  return null;
};
z.g.nr = function() {
};
z.g.C = function() {
  this.N && (0,z.Ji)(this.N);
  z.Ho.w.C.call(this);
};
(0,z.p)(z.Lo, z.Ho);
z.g = z.Lo.prototype;
z.g.kh = null;
z.g.Ac = function() {
};
z.g.yb = function() {
};
z.g.cg = function() {
};
z.g.Lw = function(a) {
  if (this.N) {
    throw Error("already initialized");
  }
  a && this.cg(a);
  (a = window.document.getElementById("prerendered")) ? (a.removeAttribute("id"), this.N = a, this.yb()) : (this.N = window.document.createElement("div"), (this.kh = this.Ac()) ? (0,z.r)(this.kh, this.yb, this) : this.yb());
  (0,z.t)(this.N, "screen-content");
};
z.g.mr = function() {
  return this.kh;
};
z.g.C = function() {
  this.kh && !this.kh.Mc && this.kh.cancel();
  this.kh = null;
  z.Lo.w.C.call(this);
};
(0,z.p)(z.Mo, z.Lo);
z.Mo.prototype.ma = null;
z.Mo.prototype.Uh = function() {
  return this.Uc;
};
z.Mo.prototype.Ac = function() {
  var a = this.Uc + (-1 == this.Uc.indexOf("?") ? "?" : "\x26") + "format\x3dfragment";
  return(0,z.r)((0,z.Jo)(this, "request").get(a, {headers:{"X-Response-Type":"html-body"}}), this.Bd, this);
};
z.Mo.prototype.Bd = function(a) {
  this.N.innerHTML = a;
};
(0,z.p)(No, z.Oj);
No.prototype.H = function() {
  No.w.H.call(this);
  var a = (0,z.H)("useragent");
  "chrome" === a.family && "android" === a.os && ((0,z.Pj)(this, this.Ba, "resize-end", this.Ek), this.Fv = (0,z.Ad)(window), a = this.W.offsetHeight, this.W.style.height = a + "px", this.Xt = a);
};
No.prototype.Ek = function() {
  var a = (0,z.Ad)(window), b = this.Fv;
  if (!(a.width === b.width && 80 > Math.abs(a.height - b.height))) {
    this.Fv = a;
    var a = (0,z.Un)(), b = (0,z.qi)(a).top, c = this.Xt;
    this.W.style.height = "";
    var d = this.W.offsetHeight;
    this.W.style.height = d + "px";
    this.Xt = d;
    b >= c && (0,z.li)(a, 0, b + (d - c));
  }
};
(0,z.p)(Oo, z.Mo);
z.g = Oo.prototype;
z.g.Zd = new z.Yn(36E5);
z.g.C = function() {
  this.Yi && (0,z.Gi)(this.Yi).clear("open-post");
  this.Yi = null;
  Oo.w.C.call(this);
};
z.g.cg = function(a) {
  a.posts && this.la.update(a.posts);
};
z.g.yb = function() {
  var a = (0,z.H)("productName");
  this.uc(new z.co(a, a, "website"));
  this.Yi = this.J(".bucket-posts");
  (a = this.J(".layout-fill-height")) && this.Aa(new No(this.La(), a));
  this.Yi && (Ex(this.Yi, this.ia, this.la), (0,z.H)("isAuthenticated") && (0,z.H)("variants.can_view_prl_homepage") && ((0,z.Gi)(this.Yi).F("open-post", this.GI, this), this.Aa(new Wn(this.La()))));
};
z.g.H = function() {
  Oo.w.H.call(this);
  var a = {};
  (0,z.H)("variants.can_view_prl_homepage") && (a.count = this.la.count());
  (0,z.Hk)(iD, a);
  (0,z.Sk)(1, "home");
  Po(this);
};
z.g.Cy = function() {
  var a = lk;
  if (this.da.Cb[a]) {
    return this.da.Cb[a];
  }
  var b = rF.Q();
  return(0,z.Zk)(this.da, a, b, "POST");
};
z.g.GI = function(a) {
  var b = (a = (a = (0,z.Zd)(a.target, null, "post-item")) && a.getAttribute("data-post-id")) && this.da.Fb(a), c = b && b.get("providerName");
  if (c) {
    var d = b.get("reasons"), e = {};
    if (d) {
      for (var f in d) {
        var h = d[f];
        e[f] = {weight:h.weight, suggestionData:h.suggestionData};
      }
    }
    (0,z.Hk)(jD, {postId:a, providerName:c, ranking:b.get("ranking"), reasons:e});
  }
};
L("a", "", function() {
  return "";
});
L("a", "recommendedAuthorRecommendations", function(a) {
  return "Recommended by " + (a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.reason.templateData.name) + '"\x3e' + (0,z.N)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.N)(a.reason.templateData.name));
});
L("a", "socialRecommendations", function(a) {
  return "Recommended by " + (a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.reason.templateData.name) + '"\x3e' + (0,z.N)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.N)(a.reason.templateData.name));
});
L("a", "socialPublishedPosts", function(a) {
  return "Written by " + (a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.O)(a.reason.templateData.name) + '"\x3e' + (0,z.N)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.N)(a.reason.templateData.name));
});
L("a", "collectionSubscriptionsByUserId", function(a) {
  return "Best of " + (a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.O)(a.reason.templateData.name) + '"\x3e' + (0,z.N)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.N)(a.reason.templateData.name));
});
L("a", "collectionLatest", function(a) {
  return "Latest from " + (a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.O)(a.reason.templateData.name) + '"\x3e' + (0,z.N)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.N)(a.reason.templateData.name));
});
L("a", "followUpsByUserId", function(a) {
  return "Further reading to " + (a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.O)(a.reason.templateData.name) + '"\x3e' + (0,z.N)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.N)(a.reason.templateData.name));
});
L("a", "mostPopular", function() {
  return "Trending";
});
L("a", "bestOf", function(a) {
  return a.eh ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.reason.templateData.href)) + '" title\x3d"Go to Top 100"\x3eTop 100\x3c/a\x3e' : "Top 100";
});
L("a", "readLater", function() {
  return "Bookmarked";
});
L("a", "latest", function() {
  return "Recent";
});
L("b", "post", function(a, b, c) {
  b = "";
  var d = hk({post:a.item.post});
  return b += mp({$D:a.item.post.postId, aE:"post", name:a.item.post.title, url:d}) + (a.item.post.subtitle ? '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.O)((0,z.P)(d)) + '" data-action\x3d"open-social-activity-item" data-action-value\x3d"' + (0,z.O)(a.item.post.postId) + '" data-target-entity-type\x3d"post"\x3e\x3cp\x3e' + (0,z.N)(a.item.post.subtitle) + "\x3c/p\x3e\x3c/a\x3e" : "") + kp({post:a.item.post, vi:!1}, c) + '\x3cspan class\x3d"post-meta post-meta-bookmark"\x3e' + fp({postId:a.item.post.postId, 
  isOnReadingList:!1, readingTime:a.item.post.readingTime}, 0, c) + "\x3c/span\x3e";
});
L("b", "collection", function(a) {
  var b = "", c;
  c = "/" + (0,z.N)(a.item.collection.slug);
  return b += mp({$D:a.item.collection.collectionId, aE:"collection", name:a.item.collection.name, url:c});
});
L("c", "", function(a, b, c) {
  return rp(a, c);
});
L("c", "post", function(a, b, c) {
  a = a || {};
  if (a.gm && c.variants.can_view_prl_homepage && c.variants.can_view_prl_debug) {
    b = a;
    for (var d = '\x3cdiv class\x3d"prl-debug-providers"\x3e\x3cspan class\x3d"prl-debug-provider-header"\x3eProviders\x3c/span\x3e\x3cul\x3e', e = qh(b.providerPerformance), f = e.length, h = 0;h < f;h++) {
      for (var k = e[h], d = d + ('\x3cli\x3e\x3cspan class\x3d"prl-debug-provider-name"\x3e' + (0,z.N)(k) + "\x3c/span\x3e"), l = qh(b.providerPerformance[k]), m = l.length, q = 0;q < m;q++) {
        var x = l[q], d = d + ('\x3cspan class\x3d"prl-debug-dimension"\x3e\x3cstrong\x3e' + (0,z.N)(x) + "\x3c/strong\x3e: " + (0,z.N)(b.providerPerformance[k][x]) + "\x3c/span\x3e")
      }
      d += "\x3c/li\x3e";
    }
    b = '\x3cli class\x3d"bucket-item post-meta"\x3e' + (d + "\x3c/ul\x3e\x3c/div\x3e") + "\x3c/li\x3e";
  } else {
    b = "";
  }
  return b + rp(a, c);
});
L("d", "post", function(a, b, c) {
  return th("e", a.wD)((0,z.K)(a, {post:a.item}), null, c);
});
L("d", "collection", function(a, b, c) {
  a = (0,z.K)(a, {collection:a.item});
  b = "";
  var d = (0,z.Uj)((0,z.K)(a.collection.image, {strategy:"resample", width:"450", verticalGradient:"29/81/60"}), 0, c);
  return b += a.Cr ? '\x3cdiv class\x3d"collection-item align-bottom ' + (a.collection.virtuals.isSubscribed ? "active" : "") + '" style\x3d"background-image:url(' + (0,z.O)((0,z.P)(d)) + ')" data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.O)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.O)(a.collection.id) + '" \x3e' + Uo(a, c) + "\x3c/div\x3e" : '\x3ca class\x3d"collection-item align-bottom" href\x3d"/' + (0,z.O)(a.collection.slug) + '" style\x3d"background-image:url(' + 
  (0,z.O)((0,z.P)(d)) + ')"\x3e' + Uo(a, c) + "\x3c/a\x3e";
});
L("d", "socialRollup", function(a, b, c) {
  a = (0,z.K)(a, {fN:a.item.postId ? "post" : "collection"});
  b = th("b", a.fN)(a, null, c) + ((null == a.item.recommendedItems ? 0 : a.item.recommendedItems.length) ? np((0,z.K)(a, {Dn:'\x3cspan class\x3d"icons icons-heart icons-heart-social-item"\x3e\x3c/span\x3e', to:a.item.recommendedItems, className:"social-items-recommended", DC:"recommend-avatar"}), c) : "");
  if (null == a.item.recommendNoteItems ? 0 : a.item.recommendNoteItems.length) {
    b += '\x3cdiv class\x3d"social-items social-items-recommend-note"\x3e';
    for (var d = a.item.recommendNoteItems, e = d.length, f = 0;f < e;f++) {
      var h = d[f];
      b += '\x3cdiv class\x3d"notes-post-meta notes-recommendations"\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e' + op({user:h.user}, c) + "“" + (0,z.N)(h.note.content) + '”\x26#8202;—\x26#8202;\x3ccite class\x3d"notes-recommendation-cite"\x3e\x3ca class\x3d"link" href\x3d"/@' + (0,z.O)(h.note.creator.username) + '"\x3e' + (0,z.N)(h.note.creator.name) + "\x3c/a\x3e\x3c/cite\x3e\x3c/blockquote\x3e\x3c/div\x3e";
    }
    b += "\x3c/div\x3e";
  }
  return b += ((null == a.item.publishedItems ? 0 : a.item.publishedItems.length) ? np((0,z.K)(a, {to:a.item.publishedItems, Bn:"Published by", className:"social-items-published"}), c) : "") + ((null == a.item.followedItems ? 0 : a.item.followedItems.length) ? np((0,z.K)(a, {to:a.item.followedItems, Bn:"Followed by", className:"social-items-followed"}), c) : "") + ((null == a.item.editedItems ? 0 : a.item.editedItems.length) ? np((0,z.K)(a, {to:a.item.editedItems, Bn:"Edited by", className:"social-items-edited"}), 
  c) : "") + ((null == a.item.createdItems ? 0 : a.item.createdItems.length) ? np((0,z.K)(a, {to:a.item.createdItems, Bn:"Created by", className:"social-items-created"}), c) : "");
});
L("f", "confirm", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-confirm"\x3e' + (a.Mh ? (0,z.N)(a.Mh) : "Confirm") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e';
});
L("f", "alert", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e';
});
L("f", "refresh", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-refresh"\x3eRefresh\x3c/button\x3e';
});
L("f", "next", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-next"\x3eNext\x3c/button\x3e';
});
L("f", "signin", function(a, b, c) {
  return'\x3cdiv class\x3d"btn-set-vertical signin-auth-choices"\x3e' + Up({Tl:a.Tl, Ao:"twitter", Ax:"Twitter", disabled:!1}) + (c.variants.can_login_with_facebook ? Up({Tl:a.Tl, Ao:"facebook", Ax:"Facebook", disabled:!0}) : "") + "\x3c/div\x3e";
});
L("f", "form", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-submit"\x3e' + (a.Mh ? (0,z.N)(a.Mh) : "Submit") + "\x3c/button\x3e" + (a.YL ? "" : '\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e');
});
L("g", "twitter", function(a, b, c) {
  return'\x3cp class\x3d"overlay-registration-follow-twitter"\x3e\x3clabel\x3e\x3cinput class\x3d"overlay-registration-checkbox" type\x3d"checkbox" name\x3d"follow" checked\x3d"checked"\x3eFollow @' + (0,z.N)(c.mediumTwitterScreenName) + " on Twitter\x3c/label\x3e\x3c/p\x3e";
});
L("g", "facebook", function(a, b, c) {
  return'\x3cp class\x3d"overlay-registration-like-facebook"\x3e\x3clabel\x3e\x3cinput class\x3d"overlay-registration-checkbox" type\x3d"checkbox" name\x3d"like" checked\x3d"checked"\x3eLike ' + (0,z.N)(c.productName) + " on Facebook\x3c/label\x3e\x3c/p\x3e";
});
L("h", "recommend", function() {
  return "Give this writer the props they deserve.";
});
L("h", "followUp", function() {
  return "Continue the conversation with related\x26nbsp;links.";
});
L("h", "noteAdd", function() {
  return "Speak up, spark a conversation.";
});
L("h", "noteReply", function() {
  return "The strong, silent type is overrated—keep the conversation going.";
});
L("h", "readingList", function() {
  return "Don’t let great posts slip into the Internet ether.";
});
L("h", "espn", function() {
  return "Share your story.";
});
L("i", "", function() {
  return'\x3cmeta name\x3d"twitter:card" content\x3d"summary"\x3e';
});
L("i", "article", function(a, b, c) {
  return(a.googleProfileId ? '\x3clink rel\x3d"author" href\x3d"https://plus.google.com/' + (0,z.O)(a.googleProfileId) + '"\x3e' : "") + '\x3clink rel\x3d"author" href\x3d"' + (0,z.O)((0,z.P)(c.baseUrl)) + "/@" + (0,z.O)(a.username) + '"\x3e\x3cmeta property\x3d"og:type" content\x3d"article"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary_large_image"\x3e\x3cmeta property\x3d"article:publisher" content\x3d"https://www.facebook.com/medium"\x3e\x3cmeta property\x3d"article:author" content\x3d"' + 
  (0,z.O)(c.baseUrl) + "/@" + (0,z.O)(a.username) + '"\x3e' + (a.VM ? '\x3cmeta property\x3d"article:published_time" content\x3d"' + (0,z.O)(a.VM) + '"\x3e' : "") + '\x3cmeta name\x3d"twitter:creator" content\x3d"@' + (0,z.O)(a.username) + '"\x3e';
});
L("i", "profile", function(a) {
  return(a.googleProfileId ? '\x3clink rel\x3d"me" href\x3d"https://plus.google.com/' + (0,z.O)(a.googleProfileId) + '"\x3e' : "") + '\x3clink rel\x3d"me" href\x3d"http://twitter.com/' + (0,z.O)(a.username) + '"\x3e\x3cmeta property\x3d"og:type" content\x3d"profile"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary"\x3e\x3cmeta property\x3d"profile:first_name" content\x3d"' + (0,z.O)(a.firstName) + '"\x3e\x3cmeta property\x3d"profile:last_name" content\x3d"' + (0,z.O)(a.lastName) + '"\x3e\x3cmeta property\x3d"profile:username" content\x3d"' + 
  (0,z.O)(a.username) + '"\x3e';
});
L("i", "collection", function(a) {
  return'\x3cmeta property\x3d"og:type" content\x3d"medium:collection"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary_large_image"\x3e' + (a.username ? '\x3cmeta name\x3d"twitter:creator" content\x3d"@' + (0,z.O)(a.username) + '"\x3e' : "");
});
(0,z.p)(cq, z.Mo);
z.g = cq.prototype;
z.g.C = function() {
  (0,z.cd)(this.Gm);
  this.Gm = [];
  cq.w.C.call(this);
};
z.g.cg = function(a) {
  this.kd(a);
};
z.g.Ac = function() {
  return(0,z.r)((0,z.r)(this.ea.get(sF.Q(), {na:!0, ee:0}), this.kd, this), function(a) {
    this.N.innerHTML = (0,z.I)(bq, {collections:a});
  }, this);
};
z.g.ka = function() {
  this.Bh && (this.Bh.cancel(), this.Bh = null);
  (0,window.clearTimeout)(this.hv);
  cq.w.ka.call(this);
};
z.g.yb = function() {
  cq.w.yb.call(this);
  this.Fa = this.J("#collection-search-input");
  this.Us = this.J(".bucket");
  dq(this);
};
z.g.H = function() {
  cq.w.H.call(this);
  this.Fa.focus();
  this.qa(this.Fa, "keyup", this.tG, this);
};
z.g.kd = function(a) {
  a = (0,z.fl)(a.value, a.references);
  for (var b = 0;b < a.length;b++) {
    (0,z.dl)(this.da, a[b]);
  }
  return a;
};
z.g.tG = function(a) {
  a.preventDefault();
  this.hb != this.Fa.value && (this.hb = this.Fa.value, (0,window.clearTimeout)(this.hv), this.Bh && (this.Bh.cancel(), this.Bh = null), this.Fa.value ? this.Ws[this.hb] ? this.Xu(this.Ws[this.hb]) : this.hv = (0,window.setTimeout)(function() {
    var a = tF.Q({}, {q:this.hb});
    this.Bh = (0,z.s)((0,z.r)((0,z.r)((0,z.r)(this.ea.get(a, {na:!0, ee:0}), this.kd, this), function(a) {
      this.Ws[this.hb] = a;
    }, this), this.Xu, this), z.Gj);
  }.bind(this), 200) : this.Bh = (0,z.r)((0,z.r)(this.ea.get(sF.Q(), {na:!0, ee:0}), this.kd, this), function(a) {
    this.Xu(a, "Collections you follow");
  }, this));
};
z.g.Xu = function(a, b) {
  if (a && a.length) {
    var c = {collections:a, xs:!0};
    b && (c.label = b);
    this.Us.innerHTML = (0,z.I)(z.up, c);
  } else {
    this.Us.innerHTML = (0,z.I)(qq, {J:this.hb});
  }
  (0,z.H)("isAuthenticated") && ((0,z.cd)(this.Gm), this.Gm = [], dq(this));
};
(0,z.p)(rq, z.Oj);
z.g = rq.prototype;
z.g.H = function() {
  rq.w.H.call(this);
  this.qa(this.Fa, "keyup", this.yI, this);
};
z.g.ka = function() {
  this.aj && (this.aj.cancel(), this.aj = null);
  this.Gq = null;
  this.$u = 0;
  this.hb = "";
  rq.w.ka.call(this);
};
z.g.yI = function(a) {
  27 == a.keyCode && (this.Fa.value = "");
  if ((0,z.H)("useragent.isMobile")) {
    if (13 != a.keyCode) {
      return;
    }
    this.Fa.blur();
    return this.search(this.Fa.value);
  }
  this.search(this.Fa.value, 200);
};
z.g.search = function(a, b) {
  if (this.hb != a) {
    (0,window.clearTimeout)(this.$u);
    if (!a) {
      return this.hb = this.zy.innerHTML = "";
    }
    this.aj && this.aj.cancel();
    this.hb = this.Fa.value = a;
    if (this.Gq[a]) {
      return sq(this, a), this.Bd(this.Gq[a]);
    }
    this.$u = (0,window.setTimeout)(function() {
      (0,z.Hk)(UD, {query:a});
      this.aj = (0,z.Bc)((0,z.s)((0,z.r)(this.ea.get(uF.Q({}, {q:a}), {na:!0}), function(b) {
        this.Gq[a] = b;
        this.Bd(b);
      }, this), z.Gj), function() {
        sq(this, a);
        this.aj = null;
      }, this);
    }.bind(this), b || 0);
  }
};
z.g.Bd = function(a) {
  this.zy.innerHTML = (0,z.I)(this.Tq, {users:a.value.users && (0,z.fl)(a.value.users, a.references), collections:a.value.collections, posts:a.value.posts && (0,z.fl)(a.value.posts, a.references)});
  (0,z.Hk)(VD, {query:this.Fa.value, numResults:a.value.posts.length + a.value.users.length + a.value.collections.length});
};
(0,z.p)(tq, z.Ho);
tq.prototype.Zd = z.oF;
tq.prototype.Lw = function() {
  this.N = window.document.createElement("div");
  this.N.innerHTML = (0,z.I)(oq, {J:this.Rt});
};
tq.prototype.H = function() {
  tq.w.H.call(this);
  var a = this.J(".js-search-input"), b = this.J(".js-search-results"), b = new rq(this.La(), a, b);
  this.Aa(b);
  this.Rt && b.search(this.Rt);
  a.focus();
};
var vF = ["PENDING", "APPROVED", "NOT_FOUND", "REMOVED", "REJECTED"];
(0,z.p)(wq, z.v);
wq.prototype.C = function() {
  wq.w.C.call(this);
  this.ia.ya(xq, this.at, this);
};
wq.prototype.at = function() {
  this.Qm && this.Qm.close();
};
(0,z.p)(z.Qq, z.sk);
z.g = z.Qq.prototype;
z.g.Bt = null;
z.g.Sy = null;
z.g.nt = 0;
z.g.Cz = window.Infinity;
z.g.Bf = function(a, b) {
  this.Bt = a;
  this.Sy = b || null;
  (0,z.Rq)(this);
  return this;
};
z.g.hg = (0,z.n)(168);
z.g.add = function() {
  throw Error("Not implemented");
};
z.g.Ih = function() {
  throw Error("Not implemented");
};
z.g.Qf = function() {
  throw Error("Not implemented");
};
z.g.remove = function() {
  throw Error("Not implemented");
};
z.g.Ul = function() {
  throw Error("Not implemented");
};
z.g.update = function() {
  throw Error("Not implemented");
};
z.g.C = function() {
  this.wd.ya("add", this.aA, this);
  this.wd.ya("remove", this.eA, this);
  this.wd.ya("change", this.cA, this);
  this.Ra = this.wd = null;
  z.Qq.w.C.call(this);
};
z.g.ts = function(a, b) {
  this.wd.ts(a, b);
  return this;
};
z.g.Sn = function(a) {
  return this.wd.Sn(a);
};
z.g.aA = function() {
  Sq(this);
};
z.g.eA = function() {
  Sq(this);
};
z.g.cA = function(a) {
  var b = this.Ra;
  Sq(this);
  for (var c = [], d = 0;d < a.length;d++) {
    var e = a[d].jo;
    Tq(e, this.Ra) && Tq(e, b) && c.push(a[d]);
  }
  c.length && this.S("change", c);
};
(0,z.p)(z.fq, z.Oj);
z.g = z.fq.prototype;
z.g.Cz = window.Infinity;
z.g.th = function(a) {
  return a.ab();
};
z.g.zn = null;
z.g.ot = null;
z.g.tz = null;
z.g.aa = function() {
  return this.N;
};
z.g.H = function() {
  z.fq.w.H.call(this);
  this.ba.D("change", this.Pl, this);
  this.ba instanceof z.sk && (this.ba.D("add", this.bx, this), this.ba.D("remove", this.cx, this));
  this.bs(!0);
};
z.g.ka = function() {
  this.ba.ya("change", this.Pl, this);
  this.ba instanceof z.sk && (this.ba.ya("add", this.bx, this), this.ba.ya("remove", this.cx, this));
  this.N.innerHTML = "";
  delete this.N;
  z.fq.w.ka.call(this);
};
z.g.getData = (0,z.n)(170);
z.g.cm = function(a, b) {
  this.th = a.bind(b);
  this.bs();
  return this;
};
z.g.bs = function() {
  this.Pl(null);
};
z.g.bx = function() {
  this.Pl(null);
};
z.g.cx = function() {
  this.Pl(null);
};
z.g.Pl = function() {
  if (this.Od()) {
    var a;
    a = this.ba instanceof z.sk ? (0,z.Jb)(this.ba.Ra.concat(), this.th) : this.th.call(null, this.ba);
    a = (0,z.Uq)(this, a);
    a != this.tz && (this.tz = this.N.innerHTML = a);
  }
};
(0,z.p)(Wq, z.go);
z.g = Wq.prototype;
z.g.Em = !1;
z.g.gh = null;
z.g.xh = null;
z.g.W = null;
z.g.ar = null;
z.g.Vq = "";
z.g.Jy = "";
z.g.mH = "";
z.g.lH = "";
z.g.SA = !1;
z.g.th = null;
z.g.Nz = !1;
z.g.bc = function(a) {
  this.Vq = a;
  return this;
};
z.g.ig = function(a) {
  this.Jy = a;
  return this;
};
z.g.cm = function(a) {
  this.th = a;
  return this;
};
z.g.eg = function(a) {
  this.W = window.document.createElement("div");
  this.W.className = "list-choice";
  var b = {title:this.Vq, description:this.Jy, UC:this.mH, TC:this.lH, bU:this.SA, $r:this.Nz};
  this.ar = (0,z.eq)(new z.fq(this.W, this.ba, z.Vq), b, "items");
  this.th && this.ar.cm(this.th);
  this.ar.H();
  a = a || this.gh.parentNode;
  b = "uid" + (0,z.qa)(this.gh);
  (0,z.Bc)((0,z.MA)(this.Xa, this.gh, '\x3cdiv id\x3d"' + b + '"\x3e\x3c/div\x3e', "list-choice-popover", a), this.close, this);
  window.document.getElementById(b).appendChild(this.W);
  a = (0,z.Ad)(window).height / 2 < (0,z.ti)(this.gh).top ? "bottom" : "top";
  (0,z.JA)(this.Xa, a, this.gh);
  a = this.W.querySelector(".list-choice-items");
  (0,z.NA)(this.Xa, a);
  (0,z.Gi)(this.W).F("pick", this.vJ, this);
  (0,z.t)((0,z.Un)(), "list-choice-open");
  this.H();
};
z.g.open = function() {
  var a = this.W;
  window.setTimeout(function() {
    var b = a.querySelector(".list-choice-items");
    b && b.focus();
  }.bind(this), 10);
  return this.xh = new z.vc;
};
z.g.close = function() {
  (0,z.u)((0,z.Un)(), "list-choice-open");
  this.Xa.remove();
  this.xh && !this.xh.Mc && this.xh.cancel();
  this.xh = null;
  this.Em && window.setTimeout(this.Ob.bind(this), 1E3);
};
z.g.C = function() {
  this.xh && this.close();
  (0,z.ad)(this.ar);
  (0,z.ad)(this.ba);
  (0,z.Ji)(this.W);
  (0,z.Od)(this.W);
  Wq.w.C.call(this);
};
z.g.vJ = function(a) {
  this.xh.Ca(a.value);
};
Zq.prototype.La = function() {
  return this.xc;
};
Zq.prototype.Az = function(a) {
  var b = new z.vc, c = window.document.createElement("script");
  c.setAttribute("charset", "UTF-8");
  c.onload = function() {
    b.Ca(!0);
  };
  c.src = a;
  window.document.body.appendChild(c);
  return b;
};
br.prototype.add = function(a, b, c) {
  var d = Array.prototype.slice.call(arguments, 2);
  return this.ir(a, function(a) {
    return Ub.apply(null, [b, a].concat(d));
  });
};
br.prototype.ir = function(a, b) {
  this.xc.ir(this.Db, a, b);
  return this;
};
br.prototype.dc = function(a, b) {
  this.xc.dc(this.Db, a, b);
  return this;
};
br.prototype.hr = function(a) {
  this.xc.hr(this.Db, a);
  return this;
};
(0,z.p)(cr, z.Mj);
z.g = cr.prototype;
z.g.scope = function(a) {
  return new br(this, a);
};
z.g.lw = function(a, b) {
  return dr(this, b).lw(a);
};
z.g.create = function(a, b, c) {
  return dr(this, b).create(a, c);
};
z.g.Xf = function(a) {
  return dr(this, a).Xf();
};
z.g.Al = function(a) {
  return dr(this, a).Al();
};
z.g.ei = function(a) {
  return dr(this, a).ei();
};
z.g.Og = function(a, b) {
  return dr(this, b).Og(a);
};
z.g.ir = function(a, b, c) {
  var d = dr(this, b);
  d.LD(c);
  d.Og(a) || fr(d, a);
  this.S("add-provider", a, b);
  return this;
};
z.g.dc = function(a, b, c) {
  b = dr(this, b);
  if (!b.fk() && (b.Xf() || b.Al() || b.ei())) {
    throw Error('Service already registered with id "' + b.gf + '"');
  }
  b.kn = null;
  b.Tm = c;
  b.Lp = !1;
  fr(b, a);
  return this;
};
z.g.hr = function(a, b) {
  var c = dr(this, b);
  if (!c.fk() && (c.Xf() || c.Al() || c.ei())) {
    throw Error('Service already registered with id "' + c.gf + '"');
  }
  c.kn = null;
  c.Tm = null;
  c.Lp = !0;
  fr(c, a);
  return this;
};
z.g = er.prototype;
z.g.Xf = function() {
  return!!this.kn;
};
z.g.Al = function() {
  return!!this.Tm;
};
z.g.ei = function() {
  return this.Lp;
};
z.g.Og = function(a) {
  return this.Db == a;
};
z.g.LD = function(a) {
  if (!this.fk()) {
    if (this.Xf()) {
      throw Error('Cannot add multiple providers to service "' + this.gf + '"');
    }
    if (this.ei()) {
      throw Error('Cannot add a provider to manual service "' + this.gf + '"');
    }
  }
  this.kn = a;
  this.Tm = null;
  this.Lp = !1;
  return this;
};
z.g.create = function(a, b) {
  if (!this.Xf()) {
    throw Error('Expected a provider to be registered for "' + this.gf + '"');
  }
  if (!this.Og(a)) {
    throw Error('Expected service "' + this.gf + '" to be assigned scope "' + a + '"');
  }
  return this.kn.call(null, b);
};
z.g.lw = function(a) {
  if (this.Og(a)) {
    if (this.Xf()) {
      return(0,z.Ic)();
    }
    if (this.Al()) {
      var b = this.Tm;
      return(0,z.r)(ar(z.$q, b), function() {
        if (!this.Xf()) {
          throw Error('Expected module "' + b + '" to register provider for service "' + this.gf + '".');
        }
      }, this);
    }
  }
  return(0,z.Jc)(Error('Expected a provider or module to be registered for "' + this.gf + '" in scope "' + a + '".'));
};
gr.prototype.bd = function() {
  var a = this.xc, b = this.Db, c = [], d;
  for (d in a.pn) {
    var e = a.pn[d];
    e.Og(b) && e.Xf() && c.push(d);
  }
  for (a = 0;a < c.length;a++) {
    b = c[a], this.Of[b] || jr(this, b);
  }
  this.wg = !0;
  for (var f in this.Of) {
    ir(this, f);
  }
};
gr.prototype.get = function(a) {
  if (a in this.Of) {
    return this.Of[a];
  }
  if (this.xc.Og(this.Db, a)) {
    if (this.xc.Xf(a)) {
      return jr(this, a), this.Of[a];
    }
    if (this.xc.Al(a)) {
      throw Error('Cannot synchronously load "' + a + '" for scope "' + this.Db + '"');
    }
    if (this.xc.ei(a)) {
      throw Error('Cannot locate manually defined service "' + a + '" for scope "' + this.Db + '"');
    }
    throw Error('Cannot load "' + a + '" for scope "' + this.Db + '"');
  }
  if (this.en) {
    return this.en.get(a);
  }
  throw Error('No service found for "' + a + '"');
};
gr.prototype.load = function(a) {
  if (this.Of[a]) {
    return(0,z.Ic)(this.get(a));
  }
  if (this.xc.Og(this.Db, a)) {
    if (this.xc.ei(a)) {
      throw Error('Cannot locate manually defined service "' + a + '" for scope "' + this.Db + '"');
    }
    return(0,z.r)(this.xc.lw(this.Db, a), function() {
      this.Of[a] || jr(this, a);
      return this.get(a);
    }, this);
  }
  return this.en ? this.en.load(a) : (0,z.Jc)(Error('No service found for "' + a + '"'));
};
gr.prototype.GH = function(a, b) {
  this.wg && a === this.Db && jr(this, b);
};
(0,z.p)(lr, z.Oj);
z.g = lr.prototype;
z.g.vg = null;
z.g.H = function() {
  lr.w.H.call(this);
  mr(this);
  this.vg = (0,z.r)((0,z.Bk)(this.da.tw()), function() {
    0 < nr(this).length && (0,z.u)(this.ek, "hide");
  }, this);
  (0,z.Bi)("show-cross-poster", this.mv, this);
};
z.g.ka = function() {
  lr.w.ka.call(this);
  (0,z.Ei)("show-cross-poster");
  this.vg && (this.vg.cancel(), this.vg = null);
};
z.g.mv = function(a) {
  this.ws(a.target);
};
z.g.ws = function(a) {
  var b = nr(this), b = new z.Qq(new z.sk(b)), c = this.da.Fb(this.$).get("creatorId") == String((0,z.H)("currentUser.userId")), b = Xq(Yq((new Wq(this.ca, b)).bc("Remove this story from collections")).cm(this.Yv.bind(this)));
  a && (b.gh = a);
  return(0,z.r)(Nq(this.td, b, this.pa), function(a) {
    var b = this.hn[a];
    a = this.da.qg[a] || null;
    b && (a = new z.ok(b.collection));
    b && b.status && "APPROVED" === b.status && (c ? Hq(this.td, this.$, a, null) : Eq(this.td, this.$, a));
    return a;
  }, this);
};
z.g.Yv = function(a) {
  var b = {id:a.get("slug"), name:a.get("name"), imageId:a.get("image.imageId")};
  if (this.hn[a.get("slug")]) {
    switch(this.hn[a.get("slug")].status) {
      case "APPROVED":
        b.description = "Already in this collection";
        b.status = "Remove";
        b.hasIcon = !0;
        break;
      case "REMOVED":
        b.description = "Removed by author", b.disabled = !0;
    }
  }
  return b;
};
(0,z.p)(z.or, z.vc);
z.or.prototype.dB = function() {
  if (!this.Mc) {
    var a = ((0,z.ej)() - this.cj) / this.RF, b = this.Ft + (3 * a * a - 2 * a * a * a) * this.QF, b = Math[this.vv](b, this.wv);
    /scroll/.test(this.yh) ? this.pa !== window.document.body || mi ? this.pa[this.yh] = b : window.document.documentElement[this.yh] = b : this.pa.style[this.yh] = b;
    1 <= a ? this.Ca() : window.requestAnimationFrame(this.dB.bind(this));
  }
};
(0,z.p)(pr, z.v);
(0,z.p)(Wr, pr);
Wr.prototype.C = function() {
  this.clear();
  this.lk = this.hk = null;
  Wr.w.C.call(this);
};
Wr.prototype.eg = function(a, b) {
  for (var c = b.Jd(), d = this.Jd(), d = qr(c, d), e = ub(a.un), f = [], h = 0;h < e.length;h++) {
    var k = e[h];
    if (k.Ut) {
      var l = k.Jd(), m;
      a: {
        var q = c, x = l;
        m = Math.max(q.left, x.left);
        var G = Math.min(q.left + q.width, x.left + x.width);
        if (m <= G) {
          var M = Math.max(q.top, x.top), q = Math.min(q.top + q.height, x.top + x.height);
          if (M <= q) {
            m = new z.tf(m, M, G - m, q - M);
            break a;
          }
        }
        m = null;
      }
      m && f.push({uN:k, vN:l, Tr:m});
    }
  }
  this.clear();
  for (c = 0;c < f.length;c++) {
    e = f[c];
    k = e.uN;
    h = Eo(d, e.Tr).round();
    k = k.Bz.ww();
    for (l = 0;l < k.length;l++) {
      if (m = k[l], m instanceof jo) {
        var G = h, x = e.vN, q = e.Tr, M = m.Jd(), x = qr(M, x), Ba = x.gc * x.hc - x.sc * x.tc, x = new z.mo(x.hc / Ba, -x.tc / Ba, -x.sc / Ba, x.gc / Ba, (x.sc * x.jb - x.hc * x.Rb) / Ba, (x.tc * x.Rb - x.gc * x.jb) / Ba), q = Eo(x, q).ceil();
        q.Tr(M) && (M = m.Ep, m = m.yu, m = "number" == typeof m ? m : 1, !G.width || !G.height || 0 > q.left || 0 > q.top || 0 >= q.width || 0 >= q.height || q.width > M.width || q.height > M.height || (this.lk.save(), this.lk.globalAlpha = m, this.lk.drawImage(M, q.left, q.top, q.width, q.height, G.left, G.top, G.width, G.height), this.lk.restore()));
      }
    }
    k.length && this.Eq.push(h);
  }
};
Wr.prototype.Jd = function() {
  return new z.tf(0, 0, this.hk.width, this.hk.height);
};
Wr.prototype.clear = function() {
  for (var a = 0;a < this.Eq.length;a++) {
    var b = this.Eq[a];
    this.lk.clearRect(b.left - 1, b.top - 1, b.width + 2, b.height + 2);
  }
  this.Eq.length = 0;
};
(0,z.p)(Xr, z.v);
Xr.prototype.C = function() {
  Xr.w.C.call(this);
};
Xr.prototype.ys = function(a) {
  var b = {ko:this.Bk, hd:this.Ad};
  a && (0,z.Bb)(b, a);
  return b;
};
(0,z.p)(z.Yr, z.v);
z.Yr.prototype.C = function() {
  for (var a in this.Sa) {
    this.Sa[a].cancel();
  }
  z.Yr.w.C.call(this);
};
z.Yr.prototype.Aa = function(a) {
  var b = (0,z.qa)(a);
  b in this.Sa || (this.Sa[b] = a, (0,z.Bc)(a, function() {
    delete this.Sa[b];
  }, this));
  return a;
};
(0,z.p)(Zr, z.v);
z.g = Zr.prototype;
z.g.source = null;
z.g.Zw = null;
z.g.la = null;
z.g.Nu = null;
z.g.hu = null;
z.g.C = function() {
  this.hu = this.Nu = this.la = null;
  (0,z.ad)(this.Sa);
  Zr.w.C.call(this);
};
z.g.bd = function() {
  var a;
  (0,z.H)("variants.use_prl_for_post_to_post_navigation") || (a = this.Nl.Ad);
  a && this.da.Cb[a] || (a = $r(this));
  this.la = this.da.Cb[a];
  (0,z.H)("variants.enable_post_to_post_navigation") && (this.vf() ? this.Bd() : (0,z.r)(this.Sa.Aa(Ek(this.la, 5, !0)), this.Bd, this));
};
z.g.Bd = function() {
  this.vf() ? this.eg() : this.Nl.Ad != lk && ($r(this), this.bd());
};
z.g.vf = function() {
  return(0,z.tk)(this.la, vk(this.la, this.$) + 1);
};
z.g.UM = function() {
  if (!this.Nu) {
    var a = as(this);
    a && (this.Nu = this.Sa.Aa($s(this.ia, a, this.Nl.ys())));
  }
};
var Zs = Date.now();
cs.prototype.show = function(a, b, c) {
  var d = this.fy, e = window.document.getElementById(a), f = b || fs;
  a = f != fs;
  b = (0,z.Ic)();
  this.Za && (d && js(this, d), c && (c = hs(this, e), c.top = 0, c.left = 0), a && (0,z.r)(b, function() {
    return gs(this, d, e);
  }, this));
  (0,z.r)(b, function() {
    var a = f(d, e);
    if (this.Za) {
      var b = hs(this, e), c = d && hs(this, d);
      c && b.top == c.top && b.left == c.left || (0,z.li)(this.Za, b.left, b.top);
    }
    return a;
  }, this);
  a && this.Za && (0,z.Bc)(b, function() {
    (0,z.u)(this.Za, "surfaces-transitioning");
    (0,z.u)(this.W, "surface-container-fixed");
    (0,z.u)(e, "surface-transitioning-in");
    d && (0,z.u)(d, "surface-transitioning-out");
  }, this);
  this.fy = e;
  return b;
};
cs.prototype.remove = function(a) {
  (0,z.Od)(window.document.getElementById(a));
  delete this.Mq[a];
};
(0,z.p)(xs, Zr);
z.g = xs.prototype;
z.g.df = null;
z.g.C = function() {
  this.Ba.ya("resize-end", this.cv, this);
  this.df && ((0,z.Ji)(this.df), (0,z.Od)(this.df));
  this.df = null;
  xs.w.C.call(this);
};
z.g.eg = function() {
  this.df = (0,z.yg)(vs, {post:this.vf().ab()});
  this.df.appendChild((0,z.yg)(ws, {post:this.vf().ab(), mN:zs(this)}));
  if (this.qv = this.df.querySelector(".picker-target.story-cover-image")) {
    this.Ba.D("resize-end", this.cv, this), (0,z.r)(this.Vd.$f(), this.cv, this);
  }
  (0,z.Gi)(this.df).F("next-post", function(a) {
    if (!a.Xn) {
      a = as(this);
      var b = this.vf();
      a && !this.hu && (this.Zw && (0,z.Hk)(this.Zw, {toPostId:b.get("id"), fromPostId:this.$}), b = this.Nl.ys({Ko:this.IM.bind(this)}), this.source && (b.source = this.source), this.hu = this.ia.navigate(a, b));
    }
  }, this);
  z.cD || (0,z.Q)(this.df, "mouseover", this.UM, this);
  this.Gk.appendChild(this.df);
};
z.g.IM = function(a, b) {
  return this.vf() ? zs(this) ? As(this, a, b) : Bs(a, b) : fs(a, b);
};
z.g.cv = function() {
  this.qv.style.height = this.Vd.Yd.Jd().height + "px";
};
(0,z.p)(Cs, z.v);
Cs.prototype.H = function() {
  this.Wd = !0;
  (0,z.rb)(this.aB, function(a) {
    this.Db.F(a, this.Yc, this);
  }, this);
};
Cs.prototype.ka = function() {
  this.Wd = !1;
  (0,z.rb)(this.aB, function(a) {
    this.Db.clear(a);
  }, this);
};
Cs.prototype.Od = function() {
  return this.Wd;
};
Cs.prototype.C = function() {
  this.Wd && this.ka();
  Ai(this.Db) || (0,z.Ji)(this.Db);
  Cs.w.C.call(this);
};
Ds.prototype.create = function(a, b, c) {
  return(0,z.r)(a.load(this.gf), function(d) {
    return new d(a, b, c);
  }, this);
};
Es.prototype.create = function(a, b, c) {
  return new this.$J(a, b, c);
};
(0,z.p)(Fs, z.Mj);
var xq = "startNav", Sn = "endNav", Gs = 6E4, wF = !1;
z.g = Fs.prototype;
z.g.Fy = "";
z.g.init = function(a, b) {
  var c = this.wa;
  c.push((0,z.Q)(window.document, "click", this.yG, this));
  c.push((0,z.Q)(window, "popstate", this.OG, this));
  window.onbeforeunload = this.Ht.bind(this);
  c = {Bl:"h" + (0,z.ej)(), Dl:!0};
  b && (0,z.Bb)(c, b);
  return this.replace(a, c);
};
z.g.navigate = function(a, b) {
  if (!(0,z.ma)(a)) {
    return(0,z.Gj)("Bad path " + a), Kc();
  }
  a = (0,z.Fa)(a);
  "/" !== a[0] && (a = "/" + a);
  if (Ss && this.xy) {
    return Ps(this, Us(a), b, !1);
  }
  window.location = a;
  return Kc();
};
z.g.reload = function(a) {
  if (null != this.ie) {
    var b = Us(this.ie);
    Ps(this, b, a, !0, !0);
  } else {
    throw Error("Invalid use of reload. No active path.");
  }
};
z.g.replace = function(a, b) {
  return Ps(this, Us(a), b, !0);
};
z.g.update = function(a, b) {
  var c = Us(a), d = b || this.bk;
  d.hash = c.hash;
  delete this.cc[this.ie];
  this.cc[c.path] = this.rb;
  Ns(this, this.rb.nb(), c.path, d, !0);
  this.ie = c.path;
  this.bk = d;
};
z.g.iB = function(a, b, c) {
  return(0,z.r)(this.sv.show(a.XD, b, c), function() {
    this.rb && this.rb.ka();
    return a;
  }, this);
};
z.g.hB = function(a, b) {
  var c = (0,z.Un)();
  c.focus();
  var d = (0,z.Ic)(b), e = window.document.getElementById("#" + a.hash);
  !e || a.Dl && this.rb ? a.Dl ? (e = this.FA[a.Bl] || {scrollX:0, scrollY:0}, (0,z.Cc)(d, this.Ok(c, e.scrollX, e.scrollY))) : (0,z.Cc)(d, this.Ok(c, 0, 0)) : (0,z.Cc)(d, this.Ok(c, 0, e.offsetTop));
  return d;
};
z.g.Ok = function(a, b, c) {
  var d = new z.vc;
  wC ? (0,z.On)(function() {
    (0,z.li)(a, b, c);
    d.Ca(null);
  }) : ((0,z.li)(a, b, c), d.Ca(null));
  return d;
};
z.g.hG = function(a, b, c) {
  try {
    c.H.call(c);
  } catch (d) {
    (0,z.Gj)(d);
  }
  c.Zd.jm(c);
  null == this.ie || this.rb.Zd.za(this.ie, this.rb) || Ts(this, this.ie, this.rb);
  this.rb = c;
  this.ie = a;
  this.bk = b;
  return c;
};
z.g.LG = function(a, b, c) {
  b !== this.rb && Ts(this, a, b);
  return c;
};
z.g.OG = function(a) {
  if (a.state && a.state.isNavigate) {
    var b = a.state.path, c = {};
    if (a.state.data) {
      try {
        c = window.JSON.parse(a.state.data);
      } catch (d) {
      }
    }
    c.Dl = !0;
    this.replace(b, c);
    a.preventDefault();
  }
};
z.g.Ht = function(a) {
  if (!wF) {
    wF = !0;
    (0,window.setTimeout)(function() {
      wF = !1;
    }, 500);
    var b = this.rb && this.rb.nr();
    if ("string" == typeof b) {
      return z.ld && (a.returnValue = b), b;
    }
    if (b) {
      return z.ld && (a.returnValue = "Are you sure you want to leave?  Unsaved changes may be lost."), "Are you sure you want to leave?  Unsaved changes may be lost.";
    }
    z.ld && (a.returnValue = void 0);
  }
};
z.g.yG = function(a) {
  if (!(a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || z.ld && 1 != a.button || !z.ld && a.button)) {
    for (var b = a.target;"A" != b.tagName;) {
      if (b = b.parentNode, !b) {
        return;
      }
    }
    if (b.hostname == window.location.hostname) {
      var c = b.pathname;
      if ((0,z.Ca)(c, this.Ts) && !c.match(/\.\w+$/)) {
        for (var d = 0;d < this.Qs.length;d++) {
          if (c.match(this.Qs[d])) {
            return;
          }
        }
        var c = c.substr(this.Ts.length), c = c + (b.search + b.hash), e = !1, d = {};
        if (b = b.getAttribute("data-source")) {
          d.source = b;
        }
        (0,z.s)(this.navigate(c, d), function(a) {
          e = !(a instanceof z.Mc);
        });
        e || a.preventDefault();
      }
    }
  }
};
z.g.Aq = function(a, b) {
  this.S.apply(this, arguments);
};
z.g.XJ = function() {
  for (var a in this.cc) {
    var b = this.cc[a];
    b.Zd.Gl(a, b) && b !== this.rb && Ts(this, a, b);
  }
};
z.g.C = function() {
  (0,z.ci)(this.wa);
  Fs.w.C.call(this);
};
(0,z.p)(Ys, z.Aa);
var Kq;
var Lq;
var xF;
at.prototype.cI = function() {
  this.Hc = null;
};
at.prototype.open = function(a, b) {
  if (this.Hc) {
    return null;
  }
  this.Hc = (new bt(this.ca, a, !0, b)).open();
  this.Hc.D(xF, this.cI, this);
  return this.Hc;
};
at.prototype.error = function(a) {
  return this.open({title:"Uh oh!", bodyHtml:a, type:z.nk});
};
at.prototype.confirm = function(a, b, c, d) {
  return this.open({title:b || "Confirm", bodyHtml:a, type:z.yF, Mh:c}, d);
};
(0,z.p)(bt, z.Mj);
z.zF = "confirm";
z.AF = "cancel";
xF = "dispose";
Lq = "submit";
z.nk = "alert";
z.yF = "confirm";
Kq = "form";
z.g = bt.prototype;
z.g.Om = !1;
z.g.open = function() {
  this.Oy = (0,z.Q)(window, "keydown", this.bG, this);
  window.document.body.appendChild(this.W);
  (0,z.t)(window.document.body, "overlay-dialog-open");
  this.U.focus();
  this.Om = !0;
  (0,z.li)(this.W, 0, 0);
  this.S("open", this);
  return this;
};
z.g.close = function() {
  if (this.Om) {
    if ("next" == this.mc) {
      return this.Xm();
    }
    this.Oy && (0,z.ci)(this.Oy);
    this.W.parentNode && (0,z.Od)(this.W);
    this.Om = !1;
    (0,z.u)(window.document.body, "overlay-dialog-open");
    this.S("close", this);
    this.Em && this.C();
    return this;
  }
};
z.g.next = function(a) {
  this.Ay.push(a);
  return this;
};
z.g.update = function(a) {
  this.Om && (a.update = !0, this.W.innerHTML = (0,z.I)(Pp, a), this.mc = a.type || "");
  return this;
};
z.g.J = function(a) {
  return this.W ? this.W.querySelector(a) : null;
};
z.g.Mj = function(a) {
  return this.W ? Array.prototype.slice.call(this.W.querySelectorAll(a)) : [];
};
z.g.AF = function() {
  this.S(z.zF, this);
  this.close();
};
z.g.Xm = function() {
  this.S("next", this);
  var a = this.Ay.shift();
  a ? this.update(a) : this.close();
};
z.g.gk = function() {
  this.S(z.AF, this);
  this.close();
};
z.g.Cq = function() {
  this.ca.get("app").reload();
};
z.g.xK = function() {
  this.S(Lq, this);
};
z.g.bG = function(a) {
  27 === a.keyCode && this.close();
};
z.g.C = function() {
  (0,z.Ji)(this.W);
  this.Om && (this.Em = !1, this.close());
  this.ca.get("app").ya(Sn, this.close, this);
  this.S(xF, this);
  bt.w.C.call(this);
};
ct.prototype.Eo = function(a, b) {
  (0,z.Hk)(xD, {postId:a.id, type:b, dest:"email"});
  this.U.open({title:"Share via email", bodyHtml:(0,z.I)(ip, {post:a}), Mh:"Send", type:Kq}).D(Lq, this.SK.bind(this, a.id));
};
ct.prototype.SK = function(a) {
  var b = this.U.Hc, c = b.J(".share-email-address"), d = c.value.split(",").map(function(a) {
    return a.trim();
  }), e = b.J(".sender-comment"), e = e ? e.value : null, c = new z.Ui(c, {name:"shimmy-shake", duration:400}), f = b.J(".email-address-error-message");
  10 < d.length ? (f.innerHTML = "Oops! You can only email 10 people at a time.", od(f, "visible"), c.start()) : vq(d) ? (d = {postId:a, recipients:d, comment:e}, (0,z.s)((0,z.r)(this.ea.post(BF.Q(), d, {na:!0}), this.kI.bind(this, a)), this.jI, this), b.close()) : (f.innerHTML = Ip({single:1 == d.length}), od(f, "visible"), c.start());
};
ct.prototype.kI = function(a) {
  this.Oa.H("Your email was successfully sent.", "success");
  (0,z.Hk)(z.wD, {postId:a, type:"post", dest:"email"});
};
ct.prototype.jI = function(a) {
  this.Oa.H("Sorry, we couldn’t send your email. Please try again later.", "failure");
  (0,z.Gj)(a);
};
(0,z.p)(dt, Cs);
dt.prototype.Yc = function(a) {
  this.VF.Eo(this.xa.ab(), a.target.getAttribute("data-action-type") || "post");
};
z.g = V.prototype;
z.g.nq = null;
z.g.Gu = null;
z.g.toString = function() {
  return this.Fu;
};
z.g.Q = function(a) {
  et(this);
  var b = this.nq.concat(), c;
  for (c in this.Gu) {
    var d = this.Gu[c];
    b[d.index] = d.format(a[c]);
  }
  return b.join("/");
};
z.g.parse = function(a) {
  et(this);
  a = a.split("/").map(window.decodeURIComponent);
  for (var b = {}, c = 0;c < a.length;c++) {
    ":" == this.nq[c].charAt(0) && (b[this.nq[c].substr(1)] = a[c]);
  }
  return b;
};
var ft = /^:([^\[]*)(?:\[pad=([0-9]+)\])?$/;
gt.prototype.format = function(a) {
  a = String(a);
  if (null != this.padding) {
    var b = Math.max(0, this.padding - a.length);
    a = Array(b + 1).join("0") + a;
  } else {
    if ("number" === typeof a) {
      throw Error("All numeric range keys must be padded: " + a);
    }
  }
  return(0,window.encodeURIComponent)(a);
};
(0,z.p)(W, z.w);
var CF = {id:!0, column:!0, hashKey:!0, rangeKey:!0};
W.prototype.Vr = function(a) {
  return!!CF[a];
};
W.prototype.lC = function() {
  return(0,z.ig)(this, this.$c().fa);
};
W.prototype.KL = function() {
  return this.data.column || this.$c().ga.Q(this.data);
};
W.prototype.za = function() {
  var a = this.$c();
  return void 0 === a.za || a.za;
};
var DF = {ONE:1, BP:2, wP:3, $isProtoEnum:!0};
(0,z.p)(ht, W);
Y(ht, !1, {name:"TestMessage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{stringField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberField:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, booleanField:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, innerMessageField:{g:function() {
  return it;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, repeatedMessageField:{g:function() {
  return it;
}, h:function() {
  return!0;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, repeatedStringField:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, otherFileField:{g:function() {
  return wt;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, innerEnum:{g:function() {
  return EF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberSet:{g:function() {
  return Number;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stringSet:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
var EF = {mO:4, iO:5, qP:6, $isProtoEnum:!0};
(0,z.p)(it, W);
Y(it, !1, {name:"TestInnerMessage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, num:{g:function() {
  return DF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
it.prototype.$a = function() {
  return(0,z.y)(this, "id");
};
it.prototype.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
(0,z.p)(jt, W);
Y(jt, !0, {name:"TestSchema", table:"justTesting", fa:"thisId", ga:new V("/path/:rkField/:timestampMs[pad\x3d13]"), Ja:864E5, ha:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rkField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, otherString:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, oneMoreString:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, someFlag:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return!0;
}, j:function() {
}, o:function() {
}}, countDown:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
  return 100;
}, j:function() {
}, o:function() {
}}, fakeObjectField:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, someStringSet:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, someNumberSet:{g:function() {
  return Number;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(kt, W);
Y(kt, !0, {name:"TestSchemaWithCache", table:"justTesting", fa:"thisId", ga:new V("@"), Ja:864E5, ha:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
kt.prototype.oc = function() {
  return(0,z.y)(this, "count");
};
(0,z.p)(lt, W);
Y(lt, !0, {name:"TestSchemaWithoutCache", table:"justTesting", fa:"thisId", ga:new V("@"), za:!1, ha:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
lt.prototype.oc = function() {
  return(0,z.y)(this, "count");
};
(0,z.p)(mt, W);
Y(mt, !0, {name:"TestSchemaWriteOnly", table:"justTesting", fa:"thisId", ga:new V("@"), ha:[], Il:!0, fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
mt.prototype.oc = function() {
  return(0,z.y)(this, "count");
};
(0,z.p)(nt, W);
Y(nt, !0, {name:"RootSchema", table:"justTesting", fa:"thisId", ga:new V("@"), Ja:864E5, ha:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ot, W);
Y(ot, !1, {name:"PolymorphicTypeASchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{someField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, otherField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(pt, W);
Y(pt, !1, {name:"PolymorphicTypeCSchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{deep:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(qt, W);
Y(qt, !1, {name:"PolymorphicTypeBSchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{anotherField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subSubField:{g:function() {
  return pt;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(rt, W);
Y(rt, !0, {name:"PolymorphicSchema", table:"justTesting", fa:"rowId", ga:new V("@"), Ja:864E5, ha:[], fields:{rowId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, typeA:{g:function() {
  return ot;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, typeB:{g:function() {
  return qt;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(st, W);
Y(st, !1, {name:"MalformedSchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{removedId:null, unknownId:{g:function() {
  return tt;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(tt, W);
Y(tt, !1, {name:"UnknownTypeForTesting", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{}});
(0,z.p)(ut, W);
Y(ut, !1, {name:"TestLSISchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"id", ga:new V(":stringField"), Ja:864E5, ha:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stringField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberField:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lsiIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "lsiIndex-index";
}, o:function() {
}}, noLsiIndex:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ut.prototype.$a = function() {
  return(0,z.y)(this, "id");
};
ut.prototype.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
(0,z.p)(vt, W);
Y(vt, !1, {name:"TestGSISchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"id", ga:new V(":stringField"), Ja:864E5, ha:[{Tn:"stringField", Bw:"numberField"}, {Tn:"boolField"}], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stringField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberField:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, boolField:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
vt.prototype.$a = function() {
  return(0,z.y)(this, "id");
};
vt.prototype.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
(0,z.p)(wt, W);
Y(wt, !1, {name:"TestOtherFileMessage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", fa:"", ga:new V("undefined"), ha:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
wt.prototype.$a = function() {
  return(0,z.y)(this, "id");
};
wt.prototype.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
(0,z.p)(xt, W);
Y(xt, !0, {name:"AccountChangeRequest", table:"userToken", fa:"token", ga:new V("@"), za:!1, ha:[], fields:{token:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, action:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
var FF = {READ:0, GP:1, wO:2, $isProtoEnum:!0};
(0,z.p)(z.yt, W);
Y(z.yt, !0, {name:"ActivityItem", table:"activityItem", fa:"userId", ga:new V("/:occurredAt[pad\x3d13]/:activityType/:actorId"), Ja:864E5, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
  return "collectionAndTime-index";
}, o:function() {
}}, postAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
  return "postAndTime-index";
}, o:function() {
}}, rollupRangeKey:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
  return "rollupRangeKey-index";
}, o:function() {
}}, additionalMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.yt.prototype.L = (0,z.n)(82);
z.yt.prototype.Qa = (0,z.n)(182);
(0,z.p)(z.zt, W);
Y(z.zt, !0, {name:"ActivityRollup", table:"activityRollup", fa:"userId", ga:new V("/:activityType/:bucket/:firstOccurredAt[pad\x3d13]"), Ja:864E5, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bucket:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstOccurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastOccurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "lastOccurredAt-index";
}, o:function() {
}}, isUnread:{g:function() {
  return FF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "isUnread-index";
}, o:function() {
}}, isSealed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
  return "collectionAndTime-index";
}, o:function() {
}}, postAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
  return "postAndTime-index";
}, o:function() {
}}}});
z.zt.prototype.L = (0,z.n)(81);
z.zt.prototype.Qa = (0,z.n)(181);
(0,z.p)(At, W);
Y(At, !0, {name:"ActivityEmail", table:"activityEmail", fa:"userId", ga:new V("/:activityType/:bucket/:sentAt[pad\x3d13]"), Ja:864E5, ha:[{Tn:"", Bw:""}], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bucket:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sentAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "sentAt-index";
}, o:function() {
}}, activityRangeKeys:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readyToSendAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Bt, W);
Y(Bt, !0, {name:"RecurringEmail", table:"recurringEmail", fa:"userId", ga:new V("/:type"), Ja:864E5, ha:[{Tn:"timeOffsetMin"}], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timeOffsetMin:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Bt.prototype.g = function() {
  return(0,z.y)(this, "type");
};
Bt.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
(0,z.p)(z.Ct, W);
Y(z.Ct, !0, {name:"BestOf", table:"bestOf", fa:"year", ga:new V("/:month"), Ja:6048E5, ha:[], fields:{month:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, year:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ct.prototype.getMonth = (0,z.n)(184);
z.Ct.prototype.setMonth = function(a) {
  return(0,z.A)(this, "month", a);
};
(0,z.p)(z.Dt, W);
Y(z.Dt, !0, {name:"PostCollaboratorNew", table:"postCollaborator", fa:"postId", ga:new V(":collaboratorId"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collaboratorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Dt.prototype.L = (0,z.n)(80);
z.Dt.prototype.sl = function() {
  return(0,z.y)(this, "state");
};
(0,z.p)(z.Et, W);
Y(z.Et, !0, {name:"PostByCollaboratorNew", table:"postByCollaborator", fa:"userId", ga:new V(":postId"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Et.prototype.L = (0,z.n)(79);
(0,z.p)(z.Ft, W);
Y(z.Ft, !0, {name:"PostByCollaborator", table:"user", fa:"userId", ga:new V("/collaborator/:postId"), za:!1, ha:[], Il:!0, fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ft.prototype.L = (0,z.n)(78);
var GF = {HN:1, bO:2, tP:3, aP:4, uP:5, $isProtoEnum:!0};
(0,z.p)(z.Gt, W);
Y(z.Gt, !0, {name:"Collection", table:"collection", fa:"collectionId", ga:new V("@"), Ja:864E5, ha:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
  return "";
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, activeAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unsubscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPaywalled:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscriberCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, blacklistedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklisterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverImage:{g:function() {
  return z.Jg;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tags:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Gt.prototype;
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.g.getMetadata = function() {
  return(0,z.y)(this, "metadata");
};
z.g.uc = function(a) {
  return(0,z.A)(this, "metadata", a);
};
z.g.tl = (0,z.n)(186);
(0,z.p)(Ht, W);
Y(Ht, !0, {name:"CollectionIndexEntry", table:"collection", fa:"collectionId", ga:new V("/collection/:indexedCollectionId"), za:!1, ha:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, indexedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Ht.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Ht.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
Ht.prototype.getMetadata = function() {
  return(0,z.y)(this, "metadata");
};
Ht.prototype.uc = function(a) {
  return(0,z.A)(this, "metadata", a);
};
(0,z.p)(It, W);
Y(It, !0, {name:"CollectionSlug", table:"collectionSlug", fa:"slug", ga:new V("@"), Ja:864E5, ha:[], fields:{slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Jt, W);
Y(Jt, !0, {name:"CollectionActiveAt", table:"collectionActiveAt", fa:"global", ga:new V("/:activeAt[pad\x3d13]/:collectionId"), za:!1, ha:[], fields:{global:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activeAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Kt, W);
Y(z.Kt, !0, {name:"CollectionPostRelation", table:"collectionPostRelation", fa:"collectionId", ga:new V(":postId"), Ja:864E5, za:!0, ha:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, proposedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, listedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rejectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Kt.prototype.L = (0,z.n)(77);
(0,z.p)(z.Lt, W);
Y(z.Lt, !0, {name:"PostCollectionRelation", table:"postCollectionRelation", fa:"postId", ga:new V(":collectionId"), Ja:864E5, za:!0, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "status-index";
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, proposedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rejectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Lt.prototype.L = (0,z.n)(76);
(0,z.p)(Mt, W);
Y(Mt, !0, {name:"Configuration", table:"configuration", fa:"name", ga:new V("@"), Ja:864E5, ha:[], fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, value:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Mt.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Mt.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
(0,z.p)(Nt, W);
Y(Nt, !0, {name:"Device", table:"device", fa:"userId", ga:new V("/:deviceType/:appId/:env/:deviceToken"), Ja:864E5, ha:[{Tn:"deviceToken", Bw:"deviceType"}], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deviceType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deviceToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, registeredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deactivatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, appId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, env:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Ot, W);
Y(z.Ot, !0, {name:"FollowUp", table:"followUp", fa:"postId", ga:new V("/item/:followUpId"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "creatorId-index";
}, o:function() {
}}, visibility:{g:function() {
  return HF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, visibilityUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
  return "mediaResourceId-index";
}, o:function() {
}}, creatorNote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Ot.prototype;
z.g.L = (0,z.n)(75);
z.g.Rn = function() {
  return(0,z.y)(this, "mediaResourceId");
};
z.g.Sj = function(a) {
  return(0,z.A)(this, "mediaResourceId", a);
};
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
(0,z.p)(z.Pt, W);
Y(z.Pt, !0, {name:"FollowUpOrder", table:"followUpOrder", fa:"postId", ga:new V("/order"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUps:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, version:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Pt.prototype.L = (0,z.n)(74);
z.Pt.prototype.kC = function() {
  return(0,z.y)(this, "followUps");
};
(0,z.p)(z.Qt, W);
Y(z.Qt, !0, {name:"HighlightList", table:"post", fa:"postId", ga:new V("/highlights"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, length:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, version:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, highlights:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Qt.prototype.L = (0,z.n)(73);
(0,z.p)(z.Rt, W);
Y(z.Rt, !0, {name:"MagnitudePost", table:"homepage", fa:"versionId", ga:new V("/postByMagnitude/:timespan/:timestampMs[pad\x3d13]/:postId"), Ja:72E5, ha:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timespan:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Rt.prototype.L = (0,z.n)(72);
(0,z.p)(St, W);
Y(St, !0, {name:"HomepageGenerated", table:"homepage", fa:"versionId", ga:new V("/homepageGenerated/:timespan/:timestampMs[pad\x3d13]/"), Ja:72E5, ha:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timespan:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postList:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
St.prototype.Co = function(a) {
  return(0,z.A)(this, "postList", a);
};
(0,z.p)(Tt, W);
Y(Tt, !0, {name:"HomepageLastGenerated", table:"homepage", fa:"versionId", ga:new V("/lastGeneratedTimestampMs"), Ja:864E5, ha:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Ut, W);
Y(z.Ut, !0, {name:"LatestPost", table:"recommendations", fa:"userId", ga:new V("/postByTimestamp/:timestamp[pad\x3d13]/:postId"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestamp:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ut.prototype.L = (0,z.n)(71);
var IF = {Tx:1, rO:2, $isProtoEnum:!0};
(0,z.p)(Vt, W);
Y(Vt, !0, {name:"MediaResource", table:"mediaResource", fa:"mediaResourceId", ga:new V("@"), Ja:864E5, ha:[], fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "addedAt-index";
}, o:function() {
}}, lastScrapedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "lastScrapedAt-index";
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeSrc:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeType:{g:function() {
  return IF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediumPost:{g:function() {
  return z.mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, externalLink:{g:function() {
  return nv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return ov;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = Vt.prototype;
z.g.Rn = function() {
  return(0,z.y)(this, "mediaResourceId");
};
z.g.Sj = function(a) {
  return(0,z.A)(this, "mediaResourceId", a);
};
z.g.uf = function() {
  return(0,z.y)(this, "href");
};
z.g.am = function(a) {
  return(0,z.A)(this, "href", a);
};
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
z.g.Ir = function() {
  return(0,z.y)(this, "iframeWidth");
};
z.g.rs = function(a) {
  return(0,z.A)(this, "iframeWidth", a);
};
z.g.vw = function() {
  return(0,z.y)(this, "iframeHeight");
};
z.g.qs = function(a) {
  return(0,z.A)(this, "iframeHeight", a);
};
(0,z.p)(z.Wt, W);
Y(z.Wt, !0, {name:"NoteNew", table:"note", fa:"postId", ga:new V("/note/:noteId"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchorContent:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, highlightId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, newHighlight:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, whitelistIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Wt.prototype;
z.g.L = (0,z.n)(70);
z.g.Qa = (0,z.n)(180);
z.g.ua = (0,z.n)(122);
z.g.Gb = (0,z.n)(132);
z.g.sl = function() {
  return(0,z.y)(this, "state");
};
z.g.Ec = (0,z.n)(190);
(0,z.p)(z.Xt, W);
Y(z.Xt, !0, {name:"NoteReplyNew", table:"note", fa:"postId", ga:new V("/reply/:noteId/:replyId"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Xt.prototype;
z.g.L = (0,z.n)(69);
z.g.Qa = (0,z.n)(179);
z.g.ua = (0,z.n)(121);
z.g.Gb = (0,z.n)(131);
z.g.sl = function() {
  return(0,z.y)(this, "state");
};
(0,z.p)(z.Yt, W);
Y(z.Yt, !0, {name:"OneTimeToken", table:"oneTimeToken", fa:"token", ga:new V("@"), za:!1, ha:[], fields:{token:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Yt.prototype.L = (0,z.n)(68);
z.Yt.prototype.Qa = (0,z.n)(178);
var JF = {VO:1, aO:2, UE:3, SE:4, $isProtoEnum:!0};
(0,z.p)(z.Zt, W);
Y(z.Zt, !0, {name:"Post", table:"post", fa:"postId", ga:new V("@"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
  return "";
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, contentParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, media:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedTitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedContent:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedContentParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, reads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postView:{g:function() {
  return z.Ql;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 32;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 33;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, detectedLanguage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 34;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isBlacklisted:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 35;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklistedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 36;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklisterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 37;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, experimentalCss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 38;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deletedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 39;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, displayAuthor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 40;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 41;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 42;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 43;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestRev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 44;
}, defaultValue:function() {
  return-1;
}, j:function() {
}, o:function() {
}}, views:null, vote:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 46;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 47;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isLatestVersion:null, hasUnpublishedEdits:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 49;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverless:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 50;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 51;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Zt.prototype;
z.g.L = (0,z.n)(67);
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ua = (0,z.n)(120);
z.g.Gb = (0,z.n)(130);
z.g.Rh = (0,z.n)(192);
z.g.bm = (0,z.n)(135);
z.g.gg = (0,z.n)(144);
(0,z.p)(z.$t, W);
Y(z.$t, !0, {name:"PostEntryIndex", table:"postEntryIndex", fa:"postId", ga:new V("@"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.$t.prototype.L = (0,z.n)(66);
(0,z.p)(z.au, W);
Y(z.au, !0, {name:"CreatorPostRelation", table:"creatorPostRelation", fa:"creator", ga:new V(":postId"), za:!1, ha:[], fields:{creator:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deletedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.au.prototype.L = (0,z.n)(65);
(0,z.p)(z.bu, W);
Y(z.bu, !0, {name:"PostVersion", table:"postVersion", fa:"versionId", ga:new V("@"), Ja:36E5, ha:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, post:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, titleDiff:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, contentParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, FORBIDDENContentDiffs:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, FORBIDDENContentDiffParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, editor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
  return!1;
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, media:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
  return-1;
}, j:function() {
}, o:function() {
}}, collapse:{g:function() {
  return JF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.bu.prototype;
z.g.L = (0,z.n)(64);
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ua = (0,z.n)(119);
z.g.Gb = (0,z.n)(129);
z.g.Xe = (0,z.n)(108);
z.g.ti = (0,z.n)(112);
(0,z.p)(z.cu, W);
Y(z.cu, !0, {name:"PostChunkNew", table:"postChunk", fa:"postId", ga:new V("/:versionId/:idx[pad\x3d5]"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, idx:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, chunk:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.cu.prototype.L = (0,z.n)(63);
(0,z.p)(z.du, W);
Y(z.du, !0, {name:"PostDelta", table:"postDelta", fa:"postId", ga:new V("/:rev[pad\x3d11]"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, savedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, delta:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.du.prototype;
z.g.L = (0,z.n)(62);
z.g.Xe = (0,z.n)(107);
z.g.ti = (0,z.n)(111);
z.g.Vh = (0,z.n)(194);
z.g.vs = (0,z.n)(196);
z.g.nl = (0,z.n)(198);
z.g.ps = (0,z.n)(200);
z.g.vj = (0,z.n)(138);
z.g.Qj = (0,z.n)(141);
(0,z.p)(eu, W);
Y(eu, !0, {name:"PostAggregation", table:"postAggregation", fa:"viewName", ga:new V("/:createdAt[pad\x3d13]"), za:!1, ha:[], fields:{viewName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(fu, W);
Y(fu, !0, {name:"LatestPostAggregation", table:"postAggregation", fa:"viewName", ga:new V("/latest"), Ja:864E5, ha:[], fields:{viewName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.gu, W);
Y(z.gu, !0, {name:"PostPublishedAt", table:"postPublishedAt", fa:"publishedAt", ga:new V("/:yyyy/:mm/:dd/:hh/:mi/:ss/:postId"), za:!1, ha:[], fields:{publishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, yyyy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mm:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, dd:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hh:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mi:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, ss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.gu.prototype.L = (0,z.n)(61);
(0,z.p)(z.hu, W);
Y(z.hu, !0, {name:"ScheduledPost", table:"postQueue", fa:"collectionId", ga:new V("/queuedPost/:timestampMs[pad\x3d13]"), Ja:864E5, ha:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.hu.prototype.L = (0,z.n)(60);
(0,z.p)(z.iu, W);
Y(z.iu, !0, {name:"PostMetrics", table:"postMetrics", fa:"postId", ga:new V("/:collectedAt[pad\x3d13]"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.iu.prototype.L = (0,z.n)(59);
(0,z.p)(z.ju, W);
Y(z.ju, !0, {name:"PostStats", table:"postStats", fa:"postId", ga:new V("@"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, reads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.ju.prototype.L = (0,z.n)(58);
(0,z.p)(z.ku, W);
Y(z.ku, !0, {name:"LatestPostMagnitude", table:"postMetrics", fa:"postId", ga:new V("/latest"), Ja:864E5, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, score:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return-0.5;
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}}});
z.ku.prototype.L = (0,z.n)(57);
(0,z.p)(lu, W);
Y(lu, !0, {name:"CollectionStatNew", table:"collectionStat", fa:"collectionId", ga:new V("/byHour/:timestampMs[pad\x3d13]"), za:!1, ha:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, unsubscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(mu, W);
Y(mu, !0, {name:"UserStatNew", table:"userStat", fa:"userId", ga:new V("/byHour/:collectedAt[pad\x3d13]"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(nu, W);
Y(nu, !0, {name:"UserStat", table:"user", fa:"userId", ga:new V("/stats/byHour/:timestampMs[pad\x3d13]"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.ou, W);
Y(z.ou, !0, {name:"PostReferrerTimeseries", table:"postReferrerTimeseries", fa:"postId", ga:new V("/:sourceIdentifier/:year/:month/:day/:hour"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, year:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, month:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, day:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hour:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.ou.prototype;
z.g.L = (0,z.n)(56);
z.g.getMonth = (0,z.n)(183);
z.g.setMonth = function(a) {
  return(0,z.A)(this, "month", a);
};
z.g.getDay = (0,z.n)(201);
z.g.oc = function() {
  return(0,z.y)(this, "count");
};
(0,z.p)(z.pu, W);
Y(z.pu, !0, {name:"PostReferrer", table:"postReferrerCounts", fa:"postId", ga:new V("/:sourceIdentifier"), za:!1, ha:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, totalCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return OC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, internal:{g:function() {
  return z.qg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, search:{g:function() {
  return rg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, site:{g:function() {
  return sg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, platform:{g:function() {
  return NC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.pu.prototype.L = (0,z.n)(55);
z.pu.prototype.g = function() {
  return(0,z.y)(this, "type");
};
z.pu.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
var KF = {EP:0, EO:1, NP:2, XN:3, XO:4, YO:5, IN:6, Sx:7, kP:8, $isProtoEnum:!0};
(0,z.p)(z.qu, W);
Y(z.qu, !0, {name:"User", table:"user", fa:"userId", ga:new V("@"), Ja:864E5, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isAuthenticated:null, isBlocked:null, flags:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unverifiedEmail:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bio:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, salt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundImageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterAccessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterAccessTokenSecret:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterAvatar:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deactivatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastPostCreatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastViewedActivityAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 30;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 32;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklistedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 34;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklistedBy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 35;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, writeAccessGrantedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 36;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, writeAccessMethod:{g:function() {
  return KF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 37;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postsRead:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 40;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 41;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 42;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastTimezoneOffsetMin:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 43;
}, defaultValue:function() {
  return 9999;
}, j:function() {
}, o:function() {
}}, languageCode:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 44;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowEmails:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 50;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, allowNotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 51;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, googleProfileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 52;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowSocialEmails:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 53;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, flagInterstitialCollab:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 100;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagSeenPrlWelcome:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 101;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagInterstitialStories:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 102;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagSeenWritePrompt:null, flagSeenCollectionFollowOnboarding:null, flagSentEspnWelcomeEmail:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 105;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagSeenEditor:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 106;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterLastImportedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 107;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, socialDataLastCalculatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 108;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookAccountId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 109;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookUsername:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 110;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookDisplayName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 111;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookAccessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 112;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isVerified:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 113;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, signupMethod:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 114;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, signupIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 115;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.qu.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
z.qu.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.qu.prototype.Vf = (0,z.n)(149);
z.qu.prototype.Rd = (0,z.n)(154);
(0,z.p)(ru, W);
Y(ru, !0, {name:"UserIndexEntry", table:"userIndexEntry", fa:"userId", ga:new V("@"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(su, W);
Y(su, !0, {name:"UserName", table:"username", fa:"username", ga:new V("@"), Ja:864E5, ha:[], fields:{username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deactivatedAt:null}});
(0,z.p)(tu, W);
Y(tu, !0, {name:"UserRecentlyViewedCollectionsNew", table:"userViewedCollections", fa:"userId", ga:new V("@"), Ja:864E5, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionIds:{g:function() {
  return Object;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.uu, W);
Y(z.uu, !0, {name:"ReadStateNew", table:"readState", fa:"userId", ga:new V(":postId"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.uu.prototype.L = (0,z.n)(54);
(0,z.p)(vu, W);
Y(vu, !0, {name:"FacebookIdIndex", table:"userFacebookId", fa:"facebookId", ga:new V("@"), Ja:864E5, ha:[], fields:{facebookId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(wu, W);
Y(wu, !0, {name:"UsernameIndex", table:"userUsername", fa:"username", ga:new V("@"), Ja:864E5, ha:[], fields:{username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.xu, W);
Y(z.xu, !0, {name:"ReadState", table:"user", fa:"userId", ga:new V("/userReadState/:postId"), za:!1, ha:[], Il:!0, fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.xu.prototype.L = (0,z.n)(53);
(0,z.p)(yu, W);
Y(yu, !0, {name:"UserCollectionRelation", table:"userCollectionRelation", fa:"userId", ga:new V(":collectionId"), Ja:864E5, za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isAdmin:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "isAdmin-index";
}, o:function() {
}}, isContributor:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "isContributor-index";
}, o:function() {
}}, isSubscribed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "isSubscribed-index";
}, o:function() {
}}, postCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, isPaidUser:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
  return "isPaidUser-index";
}, o:function() {
}}, isSupporter:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(zu, W);
Y(zu, !0, {name:"CollectionUserRelation", table:"collectionUserRelation", fa:"collectionId", ga:new V("/:relationType[pad\x3d0]/:userId"), Ja:864E5, ha:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationType:{g:function() {
  return GF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Au, W);
Y(Au, !0, {name:"UserCreatedAt", table:"userCreatedAt", fa:"global", ga:new V("/:createdAt[pad\x3d13]/:userId"), za:!1, ha:[], fields:{global:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Bu, W);
Y(z.Bu, !0, {name:"UserPostRelation", table:"userPostRelation", fa:"userId", ga:new V(":postId"), Ja:864E5, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "readAt-index";
}, o:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "readLaterAddedAt-index";
}, o:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "votedAt-index";
}, o:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "collaboratorAddedAt-index";
}, o:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
  return "notesAddedAt-index";
}, o:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpamAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, voteNoteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Bu.prototype.L = (0,z.n)(52);
(0,z.p)(z.Cu, W);
Y(z.Cu, !0, {name:"PostUserRelation", table:"postUserRelation", fa:"postId", ga:new V(":userId"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "readAt-index";
}, o:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "votedAt-index";
}, o:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "collaboratorAddedAt-index";
}, o:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
  return "subscribedAt-index";
}, o:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpamAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, voteNoteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Cu.prototype.L = (0,z.n)(51);
(0,z.p)(z.Du, W);
Y(z.Du, !0, {name:"UserPostSocialRecommendation", table:"userPostSocialRecommendation", fa:"userId", ga:new V(":postId"), Ja:864E5, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, weight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Du.prototype.L = (0,z.n)(50);
(0,z.p)(Eu, W);
Y(Eu, !0, {name:"UserSocial", table:"userSocial", fa:"userId", ga:new V(":followedUserId"), za:!1, ha:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followedUserId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterFollowedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "twitterFollowedAt-index";
}, o:function() {
}}, facebookFollowedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "facebookFollowedAt-index";
}, o:function() {
}}, mediumFollowedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "mediumFollowedAt-index";
}, o:function() {
}}, mediumUnfollowedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "mediumUnfollowedAt-index";
}, o:function() {
}}}});
var HF = {by:1, To:2, Ux:3, $isProtoEnum:!0};
(0,z.p)(Fu, F);
E(Fu, {name:"TestModel1", fields:{modelId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Fu.prototype.Uf = function() {
  return "Model";
};
(0,z.p)(Gu, F);
E(Gu, {name:"TransitionalActivity", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, uniqueId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, links:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relativeAge:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Gu.prototype.Uf = function() {
  return "UserActivity";
};
Gu.prototype.getMetadata = function() {
  return(0,z.y)(this, "metadata");
};
Gu.prototype.uc = function(a) {
  return(0,z.A)(this, "metadata", a);
};
(0,z.p)(Hu, F);
E(Hu, {name:"TransitionalActivityLinks", fields:{loadMore:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Iu, F);
E(Iu, {name:"TransitionalActivityStatus", fields:{newActivityCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Ju, F);
E(z.Ju, {name:"ActivityItem", fields:{activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, additionalMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actor:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "actorId";
}}, collection:{g:function() {
  return Wu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "collectionId";
}}, post:{g:function() {
  return z.Av;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}, note:{g:function() {
  return z.rv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}, noteReply:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "replyId";
}}, followUp:{g:function() {
  return fv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "followUpId";
}}}});
z.Ju.prototype.L = (0,z.n)(49);
z.Ju.prototype.Qa = (0,z.n)(177);
z.Ju.prototype.Pb = (0,z.n)(205);
z.Ju.prototype.zj = function() {
  return(0,z.y)(this, "followUp");
};
(0,z.p)(z.Ku, F);
E(z.Ku, {name:"ActivityRollupItem", fields:{activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actors:{g:function() {
  return Uv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "actorIds";
}}, collection:{g:function() {
  return Wu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "collectionId";
}}, post:{g:function() {
  return z.Av;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}, note:{g:function() {
  return z.rv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}, noteReply:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "replyId";
}}, followUp:{g:function() {
  return fv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "followUpId";
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastOccurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rollupRangeKey:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isUnread:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ku.prototype.Pb = (0,z.n)(204);
z.Ku.prototype.zj = function() {
  return(0,z.y)(this, "followUp");
};
z.Ku.prototype.L = (0,z.n)(48);
z.Ku.prototype.Qa = (0,z.n)(176);
(0,z.p)(Lu, F);
E(Lu, {name:"ActivityRollupItemList", wi:!0, fields:{activityRollupItems:{g:function() {
  return z.Ku;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastViewedActivityAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Mu, F);
E(Mu, {name:"ActivityEmail", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sentAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return Vv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "userId";
}}, activityItems:{g:function() {
  return z.Ju;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Nu, F);
E(z.Nu, {name:"NewsletterEntry", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return Vv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "userId";
}}, post:{g:function() {
  return z.Av;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}, note:{g:function() {
  return z.rv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}, actorIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actors:{g:function() {
  return Uv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "actorIds";
}}, message:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sentAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Nu.prototype.L = (0,z.n)(47);
z.Nu.prototype.Qa = (0,z.n)(175);
z.Nu.prototype.Pb = (0,z.n)(203);
(0,z.p)(z.Ou, F);
E(z.Ou, {name:"HandPickedNewsletterItem", fields:{message:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, post:{g:function() {
  return z.Av;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}}});
z.Ou.prototype.L = (0,z.n)(46);
(0,z.p)(Pu, F);
E(Pu, {name:"HandPickedNewsletterItems", fields:{override:{g:function() {
  return z.Ou;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, overrideSlot:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supplemental:{g:function() {
  return z.Ou;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Qu, F);
E(Qu, {name:"TransitionalAuthInfo", fields:{uid:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, authIssued:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, authSign:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Ru, F);
E(Ru, {name:"RegistrationData", fields:{accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessTokenSecret:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accountName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, identifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Ru.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Ru.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
(0,z.p)(Su, F);
E(Su, {name:"TransitionalAuthResult", fields:{credentials:{g:function() {
  return Qu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, registrationData:{g:function() {
  return Ru;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Tu, F);
E(Tu, {name:"TransitionalCollaborator", fields:{user:{g:function() {
  return z.Tv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Tu.prototype.sl = function() {
  return(0,z.y)(this, "state");
};
var LF = {bP:1, KN:2, gP:3, hP:4, $isProtoEnum:!0};
(0,z.p)(z.Uu, F);
E(z.Uu, {name:"TransitionalCollection", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tags:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, responseTimeFuzzy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, shortDescription:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, virtuals:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return z.Tv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 123;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Uu.prototype;
z.g.Uf = function() {
  return "Collection";
};
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.g.tl = (0,z.n)(185);
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
z.g.getMetadata = function() {
  return(0,z.y)(this, "metadata");
};
z.g.uc = function(a) {
  return(0,z.A)(this, "metadata", a);
};
(0,z.p)(Vu, F);
E(Vu, {name:"CollectionItem", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Vu.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Vu.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
Vu.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
Vu.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(Wu, F);
E(Wu, {name:"CollectionWithOwner", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscriberCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = Wu.prototype;
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
(0,z.p)(Xu, F);
E(Xu, {name:"CollectionPostManagementItem", fields:{status:{g:function() {
  return LF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, item:{g:function() {
  return Vu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Xu.prototype.getItem = function() {
  return(0,z.y)(this, "item");
};
Xu.prototype.setItem = function(a) {
  return(0,z.A)(this, "item", a);
};
(0,z.p)(Yu, F);
E(Yu, {name:"CollectionPostManagementItemList", wi:!0, fields:{collectionPostManagementItems:{g:function() {
  return Xu;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Zu, F);
E(Zu, {name:"TransitionalCollectionNameVerification", fields:{isAllowed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, reason:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)($u, F);
E($u, {name:"TransitionalPostedIn", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return z.Uu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(av, F);
E(av, {name:"CollectionPermissions", fields:{canPublish:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canPublishAll:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canRemovePublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canRemoveDraft:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canRemoveAll:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canAddPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canSubmit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, canAcceptAll:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(bv, F);
E(bv, {name:"TransitionalSiteConfig", fields:{coverMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverImgUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(cv, F);
E(cv, {name:"TransitionalUserAgentCapabilities", fields:{browser:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, family:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, os:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, version:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsDesktopEdit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsMobileEdit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsInteract:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsView:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isMobile:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isTablet:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isNative:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsFileAPI:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsFullImageSections:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isTier1:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, clientVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(dv, F);
E(dv, {name:"FacebookAccountItem", wi:!0, fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
dv.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
dv.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
dv.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
dv.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(z.ev, F);
E(z.ev, {name:"TransitionalFollowUp", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, visibility:{g:function() {
  return MF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, visibilityUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorNote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.ev.prototype;
z.g.Uf = function() {
  return "FollowUp";
};
z.g.L = (0,z.n)(45);
z.g.Rn = function() {
  return(0,z.y)(this, "mediaResourceId");
};
z.g.Sj = function(a) {
  return(0,z.A)(this, "mediaResourceId", a);
};
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
(0,z.p)(fv, F);
E(fv, {name:"FollowUpItem", fields:{followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
fv.prototype.nb = function() {
  return(0,z.y)(this, "title");
};
fv.prototype.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
fv.prototype.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
(0,z.p)(z.gv, F);
E(z.gv, {name:"Image", fields:{imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, verticalGradient:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, cropType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, darken:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blur:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, url:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.gv.prototype;
z.g.Vf = (0,z.n)(148);
z.g.Rd = (0,z.n)(153);
z.g.We = function() {
  return(0,z.y)(this, "height");
};
z.g.Rj = function(a) {
  return(0,z.A)(this, "height", a);
};
z.g.vl = function() {
  return(0,z.y)(this, "width");
};
z.g.Uj = function(a) {
  return(0,z.A)(this, "width", a);
};
z.g.ui = (0,z.n)(158);
z.g.ol = function() {
  return(0,z.y)(this, "filter");
};
z.g.Bf = function(a) {
  return(0,z.A)(this, "filter", a);
};
z.g.Bj = (0,z.n)(206);
(0,z.p)(z.hv, F);
E(z.hv, {name:"TransitionalImageInfo", fields:{imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.hv.prototype;
z.g.Vf = (0,z.n)(147);
z.g.Rd = (0,z.n)(152);
z.g.ol = function() {
  return(0,z.y)(this, "filter");
};
z.g.Bf = function(a) {
  return(0,z.A)(this, "filter", a);
};
z.g.Id = function() {
  return(0,z.y)(this, "backgroundSize");
};
z.g.si = function(a) {
  return(0,z.A)(this, "backgroundSize", a);
};
z.g.Th = function() {
  return(0,z.y)(this, "originalWidth");
};
z.g.em = function(a) {
  return(0,z.A)(this, "originalWidth", a);
};
z.g.ql = function() {
  return(0,z.y)(this, "originalHeight");
};
z.g.dm = function(a) {
  return(0,z.A)(this, "originalHeight", a);
};
z.g.ui = (0,z.n)(157);
z.g.We = function() {
  return(0,z.y)(this, "height");
};
z.g.Rj = function(a) {
  return(0,z.A)(this, "height", a);
};
z.g.vl = function() {
  return(0,z.y)(this, "width");
};
z.g.Uj = function(a) {
  return(0,z.A)(this, "width", a);
};
var NF = {Tx:1, xP:2, eO:3, $isProtoEnum:!0};
(0,z.p)(iv, F);
E(iv, {name:"TransitionalMediaResource", fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediaResourceType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeSrc:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediumPost:{g:function() {
  return z.jv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, externalLink:{g:function() {
  return kv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return lv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, display:{g:function() {
  return NF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = iv.prototype;
z.g.Uf = function() {
  return "MediaResource";
};
z.g.Rn = function() {
  return(0,z.y)(this, "mediaResourceId");
};
z.g.Sj = function(a) {
  return(0,z.A)(this, "mediaResourceId", a);
};
z.g.uf = function() {
  return(0,z.y)(this, "href");
};
z.g.am = function(a) {
  return(0,z.A)(this, "href", a);
};
z.g.Qh = function() {
  return(0,z.y)(this, "domain");
};
z.g.$l = function(a) {
  return(0,z.A)(this, "domain", a);
};
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
z.g.Ir = function() {
  return(0,z.y)(this, "iframeWidth");
};
z.g.rs = function(a) {
  return(0,z.A)(this, "iframeWidth", a);
};
z.g.vw = function() {
  return(0,z.y)(this, "iframeHeight");
};
z.g.qs = function(a) {
  return(0,z.A)(this, "iframeHeight", a);
};
(0,z.p)(z.jv, F);
E(z.jv, {name:"TransitionalMediaResourceMediumPost", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.jv.prototype.L = (0,z.n)(44);
(0,z.p)(kv, F);
E(kv, {name:"TransitionalMediaResourceExternalLink", fields:{quotes:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(lv, F);
E(lv, {name:"TransitionalMediaResourceTweet", fields:{tweetId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.mv, F);
E(z.mv, {name:"MediaResourceMediumPost", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.mv.prototype.L = (0,z.n)(43);
(0,z.p)(nv, F);
E(nv, {name:"MediaResourceExternalLink", fields:{quotes:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ov, F);
E(ov, {name:"MediaResourceTweet", fields:{tweetId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.pv, F);
E(z.pv, {name:"TransitionalNote", wi:!0, fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchorContent:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, highlightId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, whitelistIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replies:{g:function() {
  return z.pv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, authorUser:{g:function() {
  return z.Tv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.pv.prototype;
z.g.L = (0,z.n)(42);
z.g.Qa = (0,z.n)(174);
z.g.ua = (0,z.n)(118);
z.g.Gb = (0,z.n)(128);
z.g.sl = function() {
  return(0,z.y)(this, "state");
};
z.g.Ec = (0,z.n)(189);
(0,z.p)(z.qv, F);
E(z.qv, {name:"TransitionalHighlight", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, startIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, endIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.qv.prototype;
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.Ec = (0,z.n)(188);
z.g.ra = function() {
  return(0,z.y)(this, "startIndex");
};
z.g.Sd = function(a) {
  return(0,z.A)(this, "startIndex", a);
};
z.g.ua = (0,z.n)(117);
z.g.Gb = (0,z.n)(127);
(0,z.p)(z.rv, F);
E(z.rv, {name:"NoteItem", fields:{noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.rv.prototype.Qa = (0,z.n)(173);
z.rv.prototype.Ec = (0,z.n)(187);
z.rv.prototype.ua = (0,z.n)(116);
z.rv.prototype.Gb = (0,z.n)(126);
(0,z.p)(z.sv, F);
E(z.sv, {name:"NoteReplyItem", fields:{noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.sv.prototype.Qa = (0,z.n)(172);
z.sv.prototype.ua = (0,z.n)(115);
z.sv.prototype.Gb = (0,z.n)(125);
(0,z.p)(z.tv, F);
E(z.tv, {name:"TransitionalPost", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return z.Tv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, homeCollection:{g:function() {
  return z.Uu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, homeCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, detectedLanguage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hasUnpublishedEdits:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestRev:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRead:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, vote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, experimentalCss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, displayAuthor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, media:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, virtuals:{g:function() {
  return z.uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, providerName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, reasons:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, ranking:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, weight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 30;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverless:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 32;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.tv.prototype;
z.g.Uf = function() {
  return "Post";
};
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.bm = (0,z.n)(134);
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.Rh = (0,z.n)(191);
z.g.ua = (0,z.n)(114);
z.g.Gb = (0,z.n)(124);
z.g.gg = (0,z.n)(143);
(0,z.p)(z.uv, F);
E(z.uv, {name:"TransitionalPostVirtuals", fields:{currentCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, statusForCollection:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowNotes:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, languageTier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, previewImage:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, wordCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, draftSnippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userPostRelation:{g:function() {
  return z.Yv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isOnReadingList:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postedIn:{g:function() {
  return $u;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, publishedInCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersBySocialRecommends:{g:function() {
  return z.Tv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.pv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.uv.prototype.Kd = (0,z.n)(86);
z.uv.prototype.he = (0,z.n)(93);
(0,z.p)(vv, F);
E(vv, {name:"TransitionalRecommendedPost", fields:{post:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, source:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.wv, F);
E(z.wv, {name:"PostEmbeddable", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return Vu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, miroUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.wv.prototype;
z.g.L = (0,z.n)(41);
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.Kd = (0,z.n)(85);
z.g.he = (0,z.n)(92);
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(z.xv, F);
E(z.xv, {name:"PostDelta", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, savedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, delta:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.xv.prototype;
z.g.L = (0,z.n)(40);
z.g.Xe = (0,z.n)(106);
z.g.ti = (0,z.n)(110);
z.g.Vh = (0,z.n)(193);
z.g.vs = (0,z.n)(195);
z.g.nl = (0,z.n)(197);
z.g.ps = (0,z.n)(199);
z.g.vj = (0,z.n)(137);
z.g.Qj = (0,z.n)(140);
(0,z.p)(z.yv, F);
E(z.yv, {name:"PostDeltaList", wi:!0, fields:{postDeltas:{g:function() {
  return z.xv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.zv, F);
E(z.zv, {name:"PostItem", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.zv.prototype.L = (0,z.n)(39);
z.zv.prototype.nb = function() {
  return(0,z.y)(this, "title");
};
z.zv.prototype.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
(0,z.p)(z.Av, F);
E(z.Av, {name:"PostWithAuthor", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, emailSnippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Av.prototype;
z.g.L = (0,z.n)(38);
z.g.nb = function() {
  return(0,z.y)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
z.g.Kd = (0,z.n)(84);
z.g.he = (0,z.n)(91);
z.g.ad = function() {
  return(0,z.y)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(Bv, F);
E(Bv, {name:"SocialUserUserRelationshipItem", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetUserId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isTwitterFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isFacebookFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isMediumFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Bv.prototype.Uf = function() {
  return "Social";
};
(0,z.p)(Cv, F);
E(Cv, {name:"SocialUserStatsItem", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedByCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Cv.prototype.Uf = function() {
  return "SocialStats";
};
(0,z.p)(z.Dv, F);
E(z.Dv, {name:"SocialActivityRelationship", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return Uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "userId";
}}, note:{g:function() {
  return z.rv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}}});
z.Dv.prototype.Qa = (0,z.n)(171);
z.Dv.prototype.Pb = (0,z.n)(202);
(0,z.p)(z.Ev, F);
E(z.Ev, {name:"SocialActivityRollup", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, recommendedItems:{g:function() {
  return z.Dv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, recommendNoteItems:{g:function() {
  return z.Dv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, publishedItems:{g:function() {
  return z.Dv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdItems:{g:function() {
  return z.Dv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followedItems:{g:function() {
  return z.Dv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, editedItems:{g:function() {
  return z.Dv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return Wu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "collectionId";
}}, post:{g:function() {
  return z.Av;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}}});
z.Ev.prototype.L = (0,z.n)(37);
(0,z.p)(Fv, F);
E(Fv, {name:"SocialActivityRollupList", fields:{socialActivityRollups:{g:function() {
  return z.Ev;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
var OF = {IE:1, VE:2, WE:3, NE:4, yE:5, KE:6, $isProtoEnum:!0}, PF = {OE:1, Sx:2, RE:3, TE:4, vE:5, HE:6, $isProtoEnum:!0}, QF = {ZE:1, AE:2, CE:3, GE:4, $isProtoEnum:!0};
(0,z.p)(Gv, F);
E(Gv, {name:"TransitionalHourlyUserStat", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Hv, F);
E(z.Hv, {name:"TransitionalHourlyPostStat", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Hv.prototype.L = (0,z.n)(36);
(0,z.p)(z.Iv, F);
E(z.Iv, {name:"TransitionalReferrer", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, totalCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return OF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, internal:{g:function() {
  return z.Jv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, search:{g:function() {
  return Kv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, site:{g:function() {
  return Lv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, platform:{g:function() {
  return QF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Iv.prototype.L = (0,z.n)(35);
z.Iv.prototype.g = function() {
  return(0,z.y)(this, "type");
};
z.Iv.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
(0,z.p)(z.Jv, F);
E(z.Jv, {name:"TransitionalInternalReferrer", fields:{type:{g:function() {
  return PF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, profileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Jv.prototype.g = function() {
  return(0,z.y)(this, "type");
};
z.Jv.prototype.Hb = function(a) {
  return(0,z.A)(this, "type", a);
};
z.Jv.prototype.L = (0,z.n)(34);
(0,z.p)(Kv, F);
E(Kv, {name:"TransitionalSearchReferrer", fields:{domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, keywords:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Kv.prototype.Qh = function() {
  return(0,z.y)(this, "domain");
};
Kv.prototype.$l = function(a) {
  return(0,z.A)(this, "domain", a);
};
(0,z.p)(Lv, F);
E(Lv, {name:"TransitionalSiteReferrer", fields:{href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Lv.prototype.uf = function() {
  return(0,z.y)(this, "href");
};
Lv.prototype.am = function(a) {
  return(0,z.A)(this, "href", a);
};
Lv.prototype.nb = function() {
  return(0,z.y)(this, "title");
};
Lv.prototype.bc = function(a) {
  return(0,z.A)(this, "title", a);
};
var RF = {YN:1, ON:10, lO:2, eP:3, QN:4, AP:5, fP:6, sP:7, rP:8, ZN:9, $isProtoEnum:!0};
(0,z.p)(Mv, F);
E(Mv, {name:"TransitionalPostIdSuggestions", fields:{postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Nv, F);
E(Nv, {name:"SuggestionReasonUser", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Nv.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Nv.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
Nv.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
Nv.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(Ov, F);
E(Ov, {name:"SuggestionReasonCollection", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Ov.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Ov.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
Ov.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
Ov.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(z.Pv, F);
E(z.Pv, {name:"SuggestionReasonPost", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Pv.prototype.L = (0,z.n)(33);
z.Pv.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
z.Pv.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
(0,z.p)(z.Qv, F);
E(z.Qv, {name:"PostIdSuggestion", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, provider:{g:function() {
  return RF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collections:{g:function() {
  return Ov;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posts:{g:function() {
  return z.Pv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, users:{g:function() {
  return Nv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Qv.prototype.L = (0,z.n)(32);
z.Qv.prototype.LD = function(a) {
  return(0,z.A)(this, "provider", a);
};
z.Qv.prototype.tw = function() {
  return(0,z.y)(this, "collections");
};
z.Qv.prototype.Jr = function() {
  return(0,z.y)(this, "posts");
};
(0,z.p)(Rv, F);
E(Rv, {name:"PostIdSuggestionList", wi:!0, fields:{suggestions:{g:function() {
  return z.Qv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Sv, F);
E(Sv, {name:"TransitionalUploadInfo", fields:{fileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Tv, F);
E(z.Tv, {name:"TransitionalUser", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastPostCreatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundImageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bio:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, virtuals:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, socialStats:{g:function() {
  return Cv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, social:{g:function() {
  return Bv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Tv.prototype;
z.g.Uf = function() {
  return "User";
};
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.g.Vf = (0,z.n)(146);
z.g.Rd = (0,z.n)(151);
(0,z.p)(Uv, F);
E(Uv, {name:"UserItem", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Uv.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Uv.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
Uv.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
Uv.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(Vv, F);
E(Vv, {name:"UserWithEmail", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Vv.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
Vv.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
Vv.prototype.ad = function() {
  return(0,z.y)(this, "image");
};
Vv.prototype.jd = function(a) {
  return(0,z.A)(this, "image", a);
};
(0,z.p)(Wv, F);
E(Wv, {name:"UserItemList", wi:!0, fields:{userItems:{g:function() {
  return Uv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Xv, F);
E(Xv, {name:"UsernameList", fields:{usernames:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Yv, F);
E(z.Yv, {name:"TransitionalUserPostRelation", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Yv.prototype.L = (0,z.n)(31);
var MF = {by:1, To:2, Ux:3, $isProtoEnum:!0};
(0,z.p)(Zv, F);
E(Zv, {name:"TransitionalUpvotes", fields:{users:{g:function() {
  return z.Tv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersBySocialRecommends:{g:function() {
  return z.Tv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.pv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Zv.prototype.oc = function() {
  return(0,z.y)(this, "count");
};
(0,z.p)($v, z.w);
$v.prototype.Uh = function() {
  return this.$c().path;
};
$v.prototype.ri = function(a) {
  for (var b in a) {
    b in this.$c().fields && (0,z.A)(this, b, a[b]);
  }
  return this;
};
$v.prototype.za = function() {
  var a = this.$c();
  return void 0 === a.za || a.za;
};
(0,z.p)(bw, $v);
aw(bw, {name:"FacebookTokenData", path:"/v2.0/oauth/access_token", fields:{accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, expires:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(cw, $v);
aw(cw, {name:"FacebookAccount", path:"/v2.0/me", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, gender:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, verified:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, locale:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thirdPartyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
cw.prototype.$a = function() {
  return(0,z.y)(this, "id");
};
cw.prototype.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
cw.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
cw.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
(0,z.p)(dw, $v);
aw(dw, {name:"FacebookFriend", path:"/v2.0/me/friends", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
dw.prototype.$a = function() {
  return(0,z.y)(this, "id");
};
dw.prototype.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
dw.prototype.getName = function() {
  return(0,z.y)(this, "name");
};
dw.prototype.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
(0,z.p)(ew, $v);
aw(ew, {name:"UserUserRelationship", path:"/users/users", ho:"UserUserRelationshipItemList", fo:"userUserRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebook:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, medium:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(fw, $v);
aw(fw, {name:"UserPostRelationship", path:"/users/posts", ho:"UserPostRelationshipItemList", fo:"userPostRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, recommendedNoteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(gw, $v);
aw(gw, {name:"UserCollectionRelationship", path:"/users/collections", ho:"UserCollectionRelationshipItemList", fo:"userCollectionRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(hw, $v);
aw(hw, {name:"CollectionPostRelationship", path:"/collections/posts", ho:"CollectionPostRelationshipItemList", fo:"collectionPostRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(iw, $v);
aw(iw, {name:"SocialRelationship", path:"queries?", ho:"SocialRelationshipItemList", fo:"sociaRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceEntityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(jw, $v);
aw(jw, {name:"User", path:"/users", ho:"UserItemList", fo:"userItems", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedByCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(kw, $v);
aw(kw, {name:"TwitterAccount", path:"users/lookup.json", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, avatarUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessTokenSecret:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = kw.prototype;
z.g.$a = function() {
  return(0,z.y)(this, "id");
};
z.g.jc = function(a) {
  return(0,z.A)(this, "id", a);
};
z.g.getName = function() {
  return(0,z.y)(this, "name");
};
z.g.Wa = function(a) {
  return(0,z.A)(this, "name", a);
};
z.g.ig = function(a) {
  return(0,z.A)(this, "description", a);
};
lw.prototype.add = function(a, b) {
  for (var c = a.replace(/(^\/|\/$)/g, "").split("/"), d = [], e = this.hE, f = [], h = 0;h < c.length;h++) {
    var k, l;
    k = l = c[h];
    if ("*" == l && h != c.length - 1) {
      throw Error("Invalid path [" + a + "], * must only be at the end.");
    }
    if (":" == l[0]) {
      k = ":", d.push(l.substr(1)), f.push(null);
    } else {
      if ("@" == l[0]) {
        k = l.indexOf(":");
        var m = l.substr(1, k - 1);
        l = l.substr(k + 1);
        k = "@";
        e["@"] || (e["@"] = {parent:e});
        e["@"][m] || (e["@"][m] = {YM:new RegExp(l), parent:e["@"], Qu:l});
        d.push(m);
        e = e["@"][m];
        f.push(null);
        continue;
      } else {
        f.push(k);
      }
    }
    e[k] || (e[k] = {parent:e});
    e = e[k];
  }
  if (e.object) {
    throw Error("Can not register [" + a + "], path is ambiguous. [" + e.fullPath + "] previously registered.");
  }
  e.matches = d;
  e.fullPath = a;
  e.object = b;
  return function(a) {
    for (var b = [], c = 0, d = 0;d < f.length;d++) {
      null == f[d] ? b.push(arguments[c++]) : "*" == f[d] ? b.push(Array.prototype.slice.call(arguments, c).join("/")) : b.push(f[d]);
    }
    return "/" + b.join("/");
  };
};
nw.prototype.add = function(a) {
  var b = a.path;
  this.Eu.add(b, a);
  this.WJ[b] = a;
  this.rH[b] = a.CM;
  return this;
};
nw.prototype.Kr = function(a, b) {
  var c = Ws(this.Eu, a);
  return(c = c && c.object) && c.Kr(a, b);
};
Z.prototype.Kr = function(a, b) {
  var c = this.$M;
  if (!c) {
    return null;
  }
  for (var d = 0;d < c.length;d++) {
    var e = (0,c[d])(a, b);
    if (e) {
      return e;
    }
  }
  return null;
};
var tF;
var EH;
var DH;
var BH;
var wH;
var My;
var oB;
var jz;
var jH;
var lz;
var $G;
var SG;
var BF;
var JG;
var IG;
var EG;
var DG;
var BG;
var yG;
var xG;
var wG;
var sF;
var tG;
var sG;
var qG;
var oG;
var nG;
var lG;
var kG;
var jG;
var iG;
var hG;
var gG;
var fG;
var eG;
var oz;
var cG;
var bG;
var aG;
var WF;
var VF;
var UF;
var rF;
var TF;
z.SF = new Z("/");
TF = new Z("/reading-list");
rF = new Z("/home/load-more");
UF = new Z("/latest");
VF = new Z("/m/trending");
new Z("/me/suggestions/post-ids");
new Z("/top-100");
WF = new Z("/top-100/:monthYearSlug");
z.XF = new Z("/p/new-post");
z.xx = new Z("/p/:postId");
z.YF = new Z("/p/:postId/edit");
z.ZF = new Z("/_/p/blank");
z.$F = new Z("/p/:postId/deltas");
aG = new Z("/@username:@.*/:postId");
bG = new Z("/@username:@.*/:postId/edit");
cG = new Z("/m/tos");
oz = new Z("/m/signin");
z.dG = new Z("/@username:@.*");
eG = new Z("/@username:@.*/latest");
fG = new Z("/@username:@.*/recommended");
gG = new Z("/@username:@.*/has-recommended");
hG = new Z("/@username:@.*/collections");
iG = new Z("/me/drafts");
jG = new Z("/@username:@.*/drafts");
kG = new Z("/me/drafts/shared");
lG = new Z("/@username:@.*/drafts/shared");
z.mG = new Z("/me/export");
nG = new Z("/me/bookmarks");
new Z("/me/reading-list");
oG = new Z("/me/discovery-stream");
z.pG = new Z("/me/settings");
qG = new Z("/me/email-settings/:userId/:hash");
z.rG = new Z("/me/email-settings/:userId/:hash/:setting");
sG = new Z("/me/stats");
tG = new Z("/@username:@.*/stats");
sF = new Z("/collections");
z.uG = new Z("/new-collection");
z.vG = new Z("/:collectionSlug");
wG = new Z("/:collectionSlug/settings");
new Z("/:collectionSlug/latest");
xG = new Z("/:collectionSlug/trending");
yG = new Z("/:collectionSlug/submissions");
z.zG = new Z("/:collectionSlug/new-post");
z.Pq = new Z("/:collectionSlug/:postId");
z.AG = new Z("/:collectionSlug/:postId/edit");
BG = new Z("/m/espn");
z.CG = new Z("/m/espn/welcome");
DG = new Z("/m/start-writing");
EG = new Z("/m/jobs");
new Z("/_/ios/:appVersion/app");
new Z("/_/ios/latest/app");
new Z("/_/ios/config");
new Z("/_/ios/user-config");
new Z("/_/ios/appInfo");
new Z("/_/ios/:appVersion/manifest");
new Z("/_/ios/ipa/:ipaMD5");
new Z("/_/ios/logs");
new Z("/_/ios/device/:deviceToken");
new Z("/_/ios/test/post-ids");
var FG = new Z("/m/app");
new Z("/recommended");
new Z("/collections/recommended");
new Z("/r");
new Z("/help");
new Z("/js/plovr/proxy/*");
new Z("/js/main-base.bundle.js");
new Z("/_/status");
new Z("/_/oh-noes");
new Z("/_/stat");
new Z("/_/debug/user-agent");
var Fz = new Z("/_/activity-status");
new Z("/_/upload/");
new Z("/_/iframe-upload/");
z.GG = new Z("/_/c/verify-name");
z.HG = new Z("/_/c/verify-count");
IG = new Z("/_/vote/p/:postId");
JG = new Z("/_/vote/:collectionSlug/:postId");
BF = new Z("/_/share/email");
new Z("/_/make-public/:collectionSlugOrP/:postId/:noteId");
new Z("/_/variants");
new Z("/_/homepage/generateHomepageMagnitudes");
new Z("/_/homepage/generateHomepage");
new Z("/_/generate/postMetricsMagnitudes");
new Z("/_/generate/collectionPostAggregations");
new Z("/_/admin");
new Z("/_/admin/users");
new Z("/_/admin/users/:username");
new Z("/_/admin/users/:username/email");
new Z("/_/admin/users/:username/refresh-avatar");
new Z("/_/admin/users/:username/email/verified");
new Z("/_/admin/users/:twitterId/import-twitter-graph");
new Z("/_/admin/users/:username/errors");
new Z("/_/admin/users/:username/sent-emails");
new Z("/_/admin/errors");
new Z("/_/admin/events");
new Z("/_/admin/post/change-author");
new Z("/_/admin/collection/change-owner");
new Z("/_/admin/collection/add-admin");
new Z("/_/admin/collection/change-slug");
new Z("/_/admin/postDebugger");
new Z("/_/admin/post/undelete/:postId");
new Z("/_/admin/collectionDebugger");
new Z("/_/admin/scheduled-posts");
new Z("/_/admin/scheduled-posts/:collectionId/:timestampMs");
new Z("/_/admin/scheduled-posts/process-now");
new Z("/_/admin/scheduled-posts/edit/:collectionId/:timestampMs/:editedTimestampMs");
new Z("/_/admin/routes");
new Z("/_/admin/configs");
new Z("/_/admin/push-notifications");
new Z("/_/admin/prl/clearSubBuilders");
new Z("/_/admin/payments/transaction/test");
new Z("/_/admin/payments/subscription/create-test");
new Z("/_/admin/payments/subscription/cancel-test");
new Z("/_/admin/cacheDebugger");
new Z("/_/admin/cacheDebugger/:cacheKey/delete");
new Z("/_/admin/images");
new Z("/_/admin/images/:appImageId");
new Z("/_/admin/images/:appImageKey/:appImageId");
new Z("/_/email/preview");
new Z("/_/email/preview/:template");
new Z("/_/admin/checkAndSchedulePost");
new Z("/_/admin/reserved-twitter-usernames");
new Z("/_/admin/disallowed-usernames");
new Z("/_/admin/tags");
new Z("/_/admin/tags/repopulated");
var KG = new Z("/_/admin/blacklist");
new Z("/_/admin/blacklist/clear-data");
new Z("/_/admin/newsletter/manage");
new Z("/_/admin/newsletter/send-now");
new Z("/_/admin/newsletter/send-at/:timeOffsetMin");
new Z("/_/admin/newsletter/send-using-form");
new Z("/_/admin/switchboard-rules");
new Z("/_/api/site-config");
new Z("/_/perf/routes");
new Z("/_/perf/route");
new Z("/_/perf/graph");
new Z("/_/perf/graphNodes");
new Z("/_/intents/further-reading/make-public/:postId/:followUpId/:token");
z.LG = new Z("/_/copyedits/:postId");
z.MG = new Z("/_/media-resources/*");
new Z("/media/:mediaResourceId");
new Z("/_/api/users/:userId");
var NG = new Z("/_/api/users/available-usernames");
new Z("/_/api/posts/:postId/collection-management");
new Z("/_/api/posts/:postId/recommenders");
var mz = new Z("/m/popup/nextstep");
new Z("/m/facebook/close");
z.OG = new Z("/_/api/facebook/connect");
z.PG = new Z("/top-100/:monthYearSlug/load-more");
new Z("/p/:postId/version");
z.QG = new Z("/p/:postId/publish");
new Z("/p/:postId/revert");
z.RG = new Z("/p/:postId/revert/:versionId/:baseRev");
SG = new Z("/p/:postId/state/read");
new Z("/p/:postId/state/viewed");
var TG = new Z("/p/:postId/state/location");
new Z("/p/:postId/state");
new Z("/p/:postId/meta");
var UG = new Z("/p/:postId/vote"), VG = new Z("/p/:postId/spam"), WG = new Z("/p/:postId/bookmarks"), XG = new Z("/p/:postId/upvotes"), YG = new Z("/p/:postId/referrers"), Zz = new Z("/p/:postId/follow-ups/new");
new Z("/p/:postId/follow-ups/order");
var ZG = new Z("/p/:postId/follow-ups"), bA = new Z("/p/:postId/follow-ups/:followUpId");
new Z("/p/:postId/follow-ups/:followUpId/visibility");
new Z("/p/:postId/collaborators");
$G = new Z("/p/:postId/collaborators/:collaboratorId");
z.aH = new Z("/p/:postId/notes/new");
z.bH = new Z("/p/:postId/notes");
z.cH = new Z("/p/:postId/notes/:noteId");
z.dH = new Z("/p/:postId/notes/:noteId/state");
z.eH = new Z("/p/:postId/notes/:noteId/new-reply");
z.fH = new Z("/p/:postId/notes/:noteId/:replyId");
z.gH = new Z("/p/:postId/notes/:noteId/:replyId/state");
z.hH = new Z("/p/:postId/updateCss");
z.iH = new Z("/p/:postId/display-author");
lz = new Z("/m/account/authenticate-twitter");
new Z("/m/account/confirm/:key");
jH = new Z("/m/account/create");
z.kH = new Z("/m/account/deactivate");
jz = new Z("/m/token");
z.lH = new Z("/m/goodbye");
new Z("/m/signin/refresh");
new Z("/m/signout/:xsrf");
oB = new Z("/me/activity");
z.mH = new Z("/@username:@.*/latest/load-more");
z.nH = new Z("/@username:@.*/recommended/load-more");
z.oH = new Z("/@username:@.*/has-recommended/load-more");
new Z("/me/collections");
new Z("/me/collections/viewed");
new Z("/me/posts");
z.pH = new Z("/me/drafts/shared/load-more");
z.qH = new Z("/@username:@.*/drafts/shared/load-more");
z.rH = new Z("/me/drafts/load-more");
z.sH = new Z("/@username:@.*/drafts/load-more");
new Z("/me/export/:exportId");
new Z("/me/subscriptions/user/:userId");
new Z("/me/subscriptions/collection/:collectionSlug");
new Z("/_/subscribe/collection/:collectionSlug");
new Z("/_/subscribe/user/:userId");
new Z("/me/unsubscribe/:userId/:hash");
new Z("/me/unsubscribe/:emailSettingKey/:userId/:hash");
z.tH = new Z("/me/settings/:setting");
z.uH = new Z("/me/username");
z.vH = new Z("/me/email");
My = new Z("/me/send-verify");
wH = new Z("/me/activity/last-viewed");
z.xH = new Z("/me/stats/total/:startTimeMs/:endTimeMs");
z.yH = new Z("/me/stats/:postId/:startTimeMs/:endTimeMs");
z.zH = new Z("/@username:@.*/stats/total/:startTimeMs/:endTimeMs");
z.AH = new Z("/@username:@.*/stats/:postId/:startTimeMs/:endTimeMs");
new Z("/feed/recent");
new Z("/feed/newest");
new Z("/feed/latest");
BH = new Z("/feed/:collectionSlug");
z.CH = new Z("/feed/@username:@.*");
new Z("/embed");
new Z("/_/embed/@username:@.*");
new Z("/_/embed/:collectionSlug");
new Z("/_/embed/p/:postId");
new Z("/_/embed/:collectionSlug/:postId");
new Z("/c/:collectionId");
var cl = new Z("/:collectionSlug/load-more");
new Z("/:collectionSlug/subscribers");
new Z("/:collectionSlug/paywall");
DH = new Z("/:collectionSlug/:postId/vote");
EH = new Z("/search");
z.FH = new Z("/search/users");
tF = new Z("/search/collections");
z.GH = new Z("/search/tags");
new Z("/search/posts");
var uF = new Z("/search/all");
new Z("/_/webhooks/braintree");
new Z("/*");
(0,z.p)(rw, z.Oj);
z.g = rw.prototype;
z.g.rh = function() {
  return!!this.xa.get("latestPublishedVersion");
};
z.g.J = function(a) {
  return this.Kc.J(a);
};
z.g.H = function() {
  rw.w.H.call(this);
  this.rh() ? this.nm = (0,z.s)((0,z.r)((0,z.r)(Pn(500), function() {
    var a = XG.Q({postId:(0,z.pk)(this.xa, "id")});
    return this.ea.get(a, {na:!0, background:!0});
  }, this), this.FJ, this), z.Gj) : this.nm = (0,z.Ic)(!0);
  this.Sa.Aa(this.nm);
  (0,z.Gi)(this.Kc.N).F("upvote", this.qB, this).F("unvote", this.qB, this);
};
z.g.Cv = function() {
  this.Gg && (this.Gg.set("count", (0,z.qk)(this.Gg, "count") + (this.xa.get("vote") ? 1 : -1)), this.so());
};
z.g.FJ = function(a) {
  this.Gg = new z.ok(a.value);
  this.so();
};
z.g.so = function() {
  if (this.Gg) {
    var a = this.J(".vote-widget"), b = tw(this), c = uw(this, b), d = c.map(function(a) {
      return b[a.userId];
    });
    a.innerHTML = (0,z.I)(us, {users:c, dD:d});
  }
};
z.g.qB = function(a) {
  if (!this.Vt) {
    this.Vt = !0;
    var b = "unvote" == a.Td, c = a.target, d = this.yp() ? DH.Q({postId:a.value, collectionSlug:this.yp()}) : UG.Q({postId:a.value});
    this.xa.set("vote", !b);
    this.Cv();
    b ? ((0,z.Hk)(uD, {collectionSlug:this.yp(), postIds:[(0,z.pk)(this.xa, "id")]}), (0,z.u)(this.J(".post-article"), "has-vote"), (0,z.u)(c, "active"), c.setAttribute("data-action", "upvote"), d = this.ea.Gd(d, {qe:!0})) : ((0,z.Hk)(tD, {collectionSlug:this.yp(), postIds:[(0,z.pk)(this.xa, "id")]}), (0,z.u)(this.J(".post-article"), "has-vote"), (0,z.t)(c, "active"), c.setAttribute("data-action", "unvote"), d = this.ea.put(d, null, {qe:!0}));
    (0,z.Bc)(d, function() {
      this.Vt = !1;
    }, this);
    (0,z.s)(d, function() {
      (0,z.Uc)(c, "active");
      (0,z.Uc)(this.J(".post-article"), "has-vote");
      c.setAttribute("data-action", a.Td);
      this.xa.set("vote", b);
      this.Cv();
    }, this);
    (0,z.s)(d, (0,z.Aq)(this.U, "We were unable to save your recommendation. Please try again later."));
  }
};
z.g.ka = function() {
  (0,z.ad)(this.Sa);
  rw.w.ka.call(this);
};
z.g.C = function() {
  (0,z.ad)(this.Gg);
  rw.w.C.call(this);
};
var ww = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, H4:!0, HR:!0, DIV:!0, FIGURE:!0, UL:!0, OL:!0};
Xw.prototype.Q = function(a) {
  this.yd.text = this.$A.join("");
  (0,z.Da)(this.yd.text, "\n") && (0,z.Fm)(this.yd, this.yd.text.length - 1, this.yd.text.length);
  a && this.yd.text.toLowerCase() == a.toLowerCase() && (0,z.Fm)(this.yd, 0, this.yd.text.length);
  return this.yd;
};
(0,z.p)(ax, z.Oj);
var bx = 2E3;
ax.prototype.H = function() {
  ax.w.H.call(this);
  this.Ba.D("scroll-throttled", this.Ne, this);
};
ax.prototype.ka = function() {
  this.Ba.ya("scroll-throttled", this.Ne, this);
  this.Hy.cancel();
  this.AA();
  ax.w.ka.call(this);
};
ax.prototype.Ne = function(a, b) {
  for (var c = b.top > this.vz, d = this.Qp, e = d;0 <= e && e < this.Bu.length;e += c ? 1 : -1) {
    var f = (0,z.ni)(this.Bu[e], a).y;
    if (c) {
      if (f < b.top) {
        d = e;
      } else {
        break;
      }
    } else {
      if (f < b.top) {
        d = e;
        break;
      }
    }
  }
  this.vz = b.top;
  this.Qp != d && (this.Qp = d, this.Hy());
};
ax.prototype.AA = function() {
  this.pq && this.pq.cancel();
  var a = this.Bu[this.Qp], b = (0,z.Dw)(a, this.Ff), a = a.getAttribute("name"), c = b.getAttribute("name");
  a && c && (b = TG.Q({postId:this.xa.get("id")}), a = {versionId:this.xa.get("latestVersion"), sectionName:c, paragraphName:a}, this.pq = (0,z.s)((0,z.Bc)((0,z.r)(this.ea.put(b, a, {na:!0, background:!0}), function(a) {
    this.xa.set("userPostRelation", a.value);
  }, this), function() {
    this.pq = null;
  }, this), z.Gj));
};
(0,z.p)(z.dx, z.Oj);
var ex = 20;
z.g = z.dx.prototype;
z.g.br = !1;
z.g.W = null;
z.g.Yo = !0;
z.g.TA = !1;
z.g.Hj = function() {
  return this.br;
};
z.g.H = function() {
  z.dx.w.H.call(this);
  this.qa(window.document.body, "keyup", this.Uz);
  this.qa(window.document.body, "mouseup", this.Uz);
};
z.g.aa = function() {
  return this.W;
};
z.g.C = function() {
  (0,z.Ji)(this.W);
  (0,z.Od)(this.W);
  z.dx.w.C.call(this);
};
z.g.zI = function(a) {
  "INPUT" != a.target.tagName && (a.preventDefault(), a.stopPropagation());
};
z.g.Uz = function(a) {
  (0,z.Ud)(this.W, a.target) || this.As();
};
z.g.NK = function() {
  this.S("update");
};
L("j", "landscape", function(a, b, c) {
  return'\x3cdiv class\x3d"logged-out-post-footer" style\x3d"background-image: url(\'' + (0,z.O)((0,z.P)(c.onboardingLandscapeFooterImage)) + '\')"\x3e\x3cdiv class\x3d"layout-single-column"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3ch2 class\x3d"logged-out-branding-title"\x3e\x3cspan class\x3d"logged-out-branding-name"\x3e' + (0,z.N)(c.productName) + '\x3c/span\x3e\x3c/h2\x3e\x3cp class\x3d"logged-out-tagline"\x3eThe stories that matter to you, written and recommended by the people you know.\x3c/p\x3e\x3cdiv class\x3d"btn-set"\x3e\x3ca class\x3d"btn btn-large btn-primary btn-light" title\x3d"Create an account" data-action\x3d"sign-in-prompt" href\x3d"/m/signin" tabindex\x3d"-1"\x3eJoin Medium\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e' + 
  mx(null, c) + "\x3c/div\x3e\x3c/div\x3e";
});
L("j", "covers", function(a, b, c) {
  return'\x3cdiv class\x3d"logged-out-post-footer logged-out-post-footer-cover" style\x3d"background-image: url(\'' + (0,z.O)((0,z.P)(c.promoStartWritingBackgroundImage)) + '\')"\x3e\x3cdiv class\x3d"layout-single-column"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3ch1 class\x3d"promo-title"\x3e' + (c.supportsEdit ? "Your audience awaits. Tell a story on " + (0,z.N)(c.productName) + " today." : "The stories that matter to you, written and recommended by the people you know.") + '\x3c/h1\x3e\x3cdiv class\x3d"promo-actions btn-set"\x3e' + 
  (c.supportsEdit ? '\x3ca class\x3d"btn btn-large btn-primary btn-light no-user-select" data-action\x3d"sign-in-prompt" data-redirect\x3d"/p/new-post"\x3eStart writing\x3c/a\x3e' : '\x3ca class\x3d"btn btn-large btn-primary btn-light no-user-select" data-action\x3d"sign-in-prompt" data-redirect\x3d"/"\x3eJoin ' + (0,z.N)(c.productName) + "\x3c/a\x3e") + "\x3c/div\x3e" + (c.supportsEdit ? '\x3cdiv class\x3d"align-center"\x3e\x3cimg class\x3d"promo-image" src\x3d"' + (0,z.O)((0,z.P)(c.promoStartWritingHomeImage)) + 
  '"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e" + mx(null, c) + "\x3c/div\x3e\x3c/div\x3e";
});
L("j", "toolbar", function(a, b, c) {
  a = {gx:"onboarding-toolbar", zr:'\x3cspan class\x3d"btn-set onboarding-toolbar-branding"\x3e\x3cspan class\x3d"logged-out-toolbar-icon icons icons-logo-m"\x3e\x3c/span\x3e\x3cspan class\x3d"logged-out-toolbar-title"\x3ePublished on ' + (0,z.N)(c.productName) + '\x3c/span\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(c.welcomeUrl)) + '" class\x3d"logged-out-toolbar-about" title\x3d"' + (0,z.O)(c.productName) + ' — The stories that matter to you, written and recommended by the people you know."\x3eAbout ' + 
  (0,z.N)(c.productName) + "\x3c/span\x3e\x3c/span\x3e", Oh:mx({dM:!0}, c)};
  return $p(a);
});
(0,z.p)(ox, z.Lo);
var px = 0;
z.g = ox.prototype;
z.g.Ff = null;
z.g.Xi = null;
z.g.qm = null;
z.g.cn = null;
z.g.ke = null;
z.g.xa = null;
z.g.kc = null;
z.g.zz = null;
z.g.Sc = null;
z.g.ju = null;
z.g.bb = null;
z.g.Fi = null;
z.g.jC = function() {
  return this.Ha;
};
z.g.nb = function() {
  var a = [this.xa.get("title")];
  this.kc && a.push(this.kc.get("name"));
  a.push((0,z.H)("productName"));
  return a.join(" — ");
};
z.g.cg = function(a) {
  if (!a.value || !a.references) {
    var b = Error("trying to process bad embedded data in post/ShowScreen");
    a = JSON.stringify(a);
    lj(b, "badData", Pa(a));
    throw b;
  }
  b = (0,z.fl)(a.value, a.references);
  b = this.xa = (0,z.Uk)(this.da, b);
  this.la && -1 == this.la.indexOf(b) && this.la.add(b);
  if (a.contextCollection) {
    var c = (0,z.fl)(a.contextCollection, a.references);
    this.kc = (0,z.dl)(this.da, c);
  }
  this.yF = a.collaborators;
  if ((0,z.H)("supportsEdit") && !this.rh() && b.get("creator.userId") == (0,z.H)("currentUser.userId")) {
    throw a = this.Ha ? z.AG.Q({postId:this.$, collectionSlug:this.Ha}) : z.YF.Q({postId:this.$}), this.ia.navigate(a, this.rJ), new z.Mc(this.zz);
  }
};
z.g.Ac = function() {
  return this.zz = (0,z.r)((0,z.r)(this.ea.get(wx(this), {na:!0}), this.cg, this), this.Cg, this);
};
z.g.yb = function() {
  var a = new z.co(this.nb(), (0,z.pk)(this.xa, "virtuals.snippet"), "article");
  a.author = (0,z.pk)(this.xa, "creator.name");
  a.px = "https://www.facebook.com/medium";
  a.ox = (0,z.pk)(this.xa, "firstPublishedAt");
  this.uc(a);
  this.Ff = this.J(".post-article");
  this.qm = this.Ff.getElementsByClassName("body")[0];
  this.J(".background-size-cover") && this.J(".post-header-image-cover");
  (a = this.J(".background-size-full")) && this.Aa(new No(this.La(), a));
  (0,z.Gi)(this.N).F("sign-in", this.qK, this).F("approve-crosspost", this.pG, this).F("reject-crosspost", this.SG, this).F("post-edit", this.SF, this).F("show-collaborator", this.fB, this).F("hide-collaborator", this.fB, this).F("share-on-twitter", this.hK, this).F("share-on-facebook", this.gK, this).F("more-actions", this.xH, this).F("report-spam", this.OJ, this).F("embed-story", this.ZF, this).F("scroll-to-post-start", this.GA, this).F("resume", this.UJ, this).F("show-other-collections", this.mK, 
  this);
  this.Ig = new rw(this.La(), this.xa, this.jC.bind(this));
  (0,z.Io)(this.La(), "vote-widget", this.Ig);
  this.Aa(this.Ig);
  this.Aa(new dt(this.N, this.La(), this.xa));
  (0,z.H)("isAuthenticated") && this.Aa(new ax(this.La(), this.Ff, this.xa));
  if (a = this.J(".show-cross-poster")) {
    this.Ey = new lr(this.La(), (0,z.Un)(), a, this.xa), this.Aa(this.Ey);
  }
  this.td = new wq(this.La());
  this.Sa = new z.Yr;
};
z.g.H = function() {
  ox.w.H.call(this);
  (0,z.Sk)(1, "post");
  this.J(".picker-layout-fill");
  !qx(this) && this.xa && this.rh() && (0,z.Hk)(cE, {postId:this.$, collectionSlug:this.Ha});
  this.rh() || (0,z.Hk)(dE, {postId:this.$});
  (0,z.t)(window.document.body, "template-flex-article");
  500 >= window.innerWidth || (this.bb = new z.dx, fx(this.bb, sx(this), this.rh()), (0,z.Ko)(this, this.bb.aa()), this.Aa(this.bb));
  tx(this);
  var a = this.Yu(), b = (0,z.sw)(this.Ig), c = ux(this);
  (0,z.Bc)((0,z.Bc)((0,z.Bc)(a, function() {
    return c;
  }), function() {
    return b;
  }), function() {
    (0,z.t)(this.N, "post-supplemental-loaded");
  }, this);
  (0,z.Pj)(this, this.Ba, "scroll-end", this.vu, this);
  (0,z.Pj)(this, this.Ba, "resize-end", this.Km, this);
  this.vu();
  this.Km();
  if ((0,z.H)("variants.use_experimental_css")) {
    if (a = (0,z.pk)(this.xa, "experimentalCss")) {
      this.Xi = (0,z.Ff)(a);
    }
    this.ln();
  }
  (0,z.Pj)(this, this.bK, OB, this.yJ, this);
  this.jH && qx(this) && this.Ji && (a = this.J(".show-cross-poster"), (0,z.MA)(this.Xa, a, (0,z.I)(Wp)));
};
z.g.ka = function() {
  this.Xi && (0,z.Hf)(this.Xi);
  this.ln();
  this.ke && (this.ke.cancel(), this.ke = null);
  this.cn && ((0,z.Od)(this.cn), this.cn = null);
  (0,z.u)(this.N, "post-supplemental-loaded");
  (0,z.u)(window.document.body, "template-flex-article");
  (0,z.ad)(this.Sa);
  (0,z.ad)(this.Xd);
  (0,z.ad)(this.Sc);
  (0,z.ad)(this.ju);
  ox.w.ka.call(this);
};
z.g.Cy = function(a) {
  return a && this.da.Cb[a] ? this.da.Cb[a] : this.Ha ? al(this.da, this.Ha) : null;
};
z.g.rh = function() {
  return!!this.xa.get("latestPublishedVersion");
};
z.g.hK = function(a) {
  this.Zq.Eo((0,z.pk)(this.xa, "title"), (0,z.pk)(this.xa, "creator.userId"), (0,z.pk)(this.xa, "creator.username"), (0,z.pk)(this.xa, "creator.name"), (0,z.pk)(this.xa, "creator.twitterScreenName") || "", this.$, a.target.getAttribute("data-action-type") || "post", this.yF);
};
z.g.OJ = function() {
  this.U.confirm("Are you sure you want to report this post as spam?").D(z.zF, this.PJ, this);
};
z.g.ZF = function() {
  (0,z.Hk)(gE, {collectionSlug:this.Ha, postId:this.$});
  this.U.open({title:"Embed this story", bodyHtml:(0,z.I)(jx, {post:this.xa.ab(), collection:this.kc ? this.kc.ab() : void 0}), type:z.nk}).J("textarea").select();
};
z.g.PJ = function() {
  var a = (0,z.pk)(this.xa, "title"), b = VG.Q({postId:this.$});
  (0,z.Bc)(this.ea.put(b, {na:!0, background:!0}), function(b) {
    b instanceof Error || !1 === b ? this.Oa.H(ls({title:a}), "error") : this.Oa.H(ks({title:a}), "success");
  }, this);
};
z.g.xH = function(a) {
  (0,z.MA)(this.Xa, a.target, (0,z.I)(Vp, {postId:this.$}), "post-more-actions-popover", this.N);
};
z.g.UJ = function(a) {
  (a = this.J('[name\x3d"' + a.value + '"]')) ? this.Ok(a) : this.GA();
};
z.g.GA = function() {
  var a = this.N.querySelector(".post-page-wrapper-inner");
  this.Ok(a);
};
z.g.Ok = function(a) {
  a = (0,z.oi)(a);
  this.ke && this.ke.cancel();
  this.ke = new z.or((0,z.Un)(), "scrollTop", 600, Math.max(a, 0));
};
z.g.yJ = function(a) {
  a = (0,z.zb)(a);
  a.postId = this.$;
  Kk(TD, a);
};
z.g.gK = function(a) {
  this.eG.Eo((0,z.pk)(this.xa, "title"), (0,z.pk)(this.xa, "creator.userId"), (0,z.pk)(this.xa, "creator.name"), (0,z.pk)(this.xa, "virtuals.snippet"), (0,z.pk)(this.xa, "content.image.imageId"), this.$, a.target.getAttribute("data-action-type") || "post");
};
z.g.Km = function() {
  (0,z.$w)(this.qm);
  (0,z.Zw)(this.qm);
  rx(this);
};
z.g.C = function() {
  (0,z.ad)(this.Fi);
  this.la = this.Fi = null;
  ox.w.C.call(this);
};
z.g.Cg = function(a) {
  var b = this.xa.ab(), c = this.kc ? this.kc.ab() : void 0, d = a.postStatus;
  if (!d && c) {
    for (var e = this.kc.get("slug"), f = this.xa.get("virtuals.postedIn"), h = 0;h < f.length;h++) {
      if (f[h].collection.slug == e) {
        d = f[h].status;
        break;
      }
    }
  }
  this.N.innerHTML = (0,z.I)(z.ns, {post:b, contextCollection:c, mode:a.mode, collaborators:a.collaborators, postStatus:d, isCrossPoster:a.isCrossPoster, vD:(0,z.gn)(b, !0)});
};
z.g.Yu = function() {
  return(0,z.s)((0,z.r)(this.Sa.Aa(Pn(500)), function() {
    this.Sc = (0,z.Jo)(this, "follow-ups").cl(this.xa, qx(this));
    return(0,z.r)((0,z.r)(this.Sc.bd(this.J(".post-follow-ups")), this.Sc.BM, this.Sc), function() {
      var a = (0,z.fA)(this.Sc);
      a && (0,z.gA)(this.Sc, a);
    }, this);
  }, this), z.Gj);
};
z.g.zA = function(a) {
  return(0,z.r)(this.Sa.Aa(Pn(500)), function() {
    this.cn = (0,z.yg)(nx, {GL:a});
    (0,z.Md)(this.cn, this.J(".post-footer"));
  }, this);
};
z.g.qK = function(a) {
  var b = oz.Q();
  (0,z.Pc)(a.target, "recommend-button") ? ((0,z.Hk)(qD, {collectionSlug:this.Ha, postIds:[this.$]}), a = this.Ha ? JG.Q({postId:this.$, collectionSlug:this.Ha}) : IG.Q({postId:this.$}), b += "?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)(a)) : b += "?redirect\x3d" + (0,window.encodeURIComponent)(wx(this));
  window.location = b;
};
z.g.vu = function() {
  if (this.xa && this.rh()) {
    var a = this.Vd.Aa(this.qm), a = a.Ed.jb + a.We(), b = this.Vd.Yd.Jd();
    b.top + b.height >= a - 100 && (a = SG.Q({postId:this.$}), (0,z.s)(this.ea.put(a, null, {background:!0, qe:!0}), z.Gj), (0,z.Hk)(vD, {collectionSlug:this.Ha, postIds:[this.$], postId:this.$}), this.Ba.ya("scroll-end", this.vu, this));
  }
};
z.g.SG = function() {
  this.$ && this.td ? (0,z.r)(Iq(this.td, this.$, this.kc), function() {
    var a = yG.Q({collectionSlug:this.Ha});
    this.ia.navigate(a);
  }, this) : vx(this, Hp());
};
z.g.pG = function() {
  this.$ && this.Ha && this.td ? (0,z.r)(Bq(this.td, this.$, this.Ha, (0,z.pk)(this.kc, "name"), this.la), function() {
    var a = yG.Q({collectionSlug:this.Ha});
    this.ia.navigate(a);
  }, this) : vx(this, Gp());
};
z.g.SF = function(a) {
  this.ia.navigate(a.target.pathname.substr(1), this.Lz.ys({scrollTop:(0,z.qi)((0,z.Un)()).top}));
};
z.g.fB = function(a) {
  function b(b) {
    (0,z.Tc)(c, "post-collaborator-visible", !b);
    a.target.setAttribute("data-action", b ? "show-collaborator" : "hide-collaborator");
    a.target.innerHTML = b ? "(show)" : "(hide)";
  }
  var c = (0,z.Zd)(a.target, "SPAN"), d = "hide-collaborator" == a.Td, e = {state:d ? "hidden" : "visible"};
  b(d);
  var f = $G.Q({postId:this.$, collaboratorId:a.value});
  (0,z.Bc)(this.ea.post(f, e, {na:!0}), function(a) {
    a instanceof Error || !1 === a ? (this.Oa.H("Failed to " + (d ? "hide" : "show") + " collaborator.", "error"), b(!d)) : this.Oa.H("Collaborator " + (d ? "hidden" : "shown") + ".", "success");
  }, this);
};
z.g.ln = function() {
  var a = window.document.getElementById("temp-experimental-css");
  a && (0,z.Od)(a);
};
z.g.mK = function(a) {
  var b = this.kc ? this.kc.get("id") : this.xa.get("homeCollection").id, c = this.xa.get("virtuals.postedIn");
  a = a.target;
  for (var d = [], e = 0;e < c.length;e++) {
    var f = c[e];
    f.collectionId != b && "APPROVED" === f.status && d.push(new z.ok(f.collection));
  }
  b = new z.Qq(new z.sk(d));
  b = Yq((new Wq(this.La(), b)).bc("Also in these collections")).cm(function(a) {
    return{id:a.get("slug"), name:a.get("name"), imageId:a.get("image.imageId")};
  });
  a && (b.gh = a);
  return(0,z.r)(Nq(this.td, b), function(a) {
    this.ia.navigate(z.vG.Q({collectionSlug:a}));
  }, this);
};
z.g = yx.prototype;
z.g.za = function(a, b) {
  var c = (0,z.qa)(b);
  this.cc[c] || (this.cc[c] = {time:this.now(), hd:b.hd});
  return!0;
};
z.g.Gl = function(a, b) {
  var c = this.Gj(b);
  c && delete this.cc[(0,z.qa)(b)];
  return c;
};
z.g.gi = function(a, b, c) {
  a = (0,z.qa)(c);
  return this.cc[a] ? ((b = !this.Gj(c) && (!!b.Dl || b.hd == this.cc[a].hd)) || delete this.cc[a], b) : !1;
};
z.g.jm = z.fa;
z.g.now = function() {
  return(new Date).getTime();
};
z.g.Gj = function(a) {
  a = (0,z.qa)(a);
  return!(a in this.cc) || this.now() - this.cc[a].time >= this.fu;
};
(0,z.p)(zx, z.Oj);
z.g = zx.prototype;
z.g.vg = null;
z.g.H = function() {
  zx.w.H.call(this);
  var a = this.da.Jr();
  this.vg = (0,z.r)((0,z.Bk)(a), function() {
    var b = Ax(this, a).length;
    0 < a.oc() && (this.kc.get("virtuals.canAdminister") ? this.ek.innerHTML = b ? "Add/Remove your story" : "Add your story" : this.ek.innerHTML = b ? "Submit/Remove your story" : "Submit your story", (0,z.u)(this.ek, "hide"), this.iK && this.ws(this.ek));
  }, this);
  (0,z.Bi)("show-cross-poster", this.mv, this);
};
z.g.ka = function() {
  zx.w.ka.call(this);
  (0,z.Ei)("show-cross-poster");
  this.vg && (this.vg.cancel(), this.vg = null);
};
z.g.mv = function(a) {
  this.ws(a.target);
};
z.g.ws = function(a) {
  var b = (0,z.pk)(this.kc, "slug"), c = (0,z.pk)(this.kc, "name"), d = !!this.kc.get("virtuals.canAdminister"), e = this.da.Jr();
  return(0,z.r)((0,z.r)((0,z.Bk)(e), function() {
    var b = Ax(this, e).length, c = new z.Qq(new z.sk(e.Ra.concat().sort(this.mL.bind(this)))), b = !!b, b = d ? b ? "Add or remove your story" : "Add your story" : b ? "Submit or remove your story" : "Submit your story", k;
    k = d ? "" : (k = (0,z.pk)(this.kc, "responseTimeFuzzy")) ? Wo({responseTimeFuzzy:k}) : Wo({responseTimeFuzzy:"within a day"});
    c = Yq((new Wq(this.ca, c)).bc(b).ig(k)).cm(this.Yv.bind(this));
    c.Nz = !0;
    a && (c.gh = a);
    return Nq(this.td, c);
  }, this), function(a) {
    a && ("APPROVED" == Bx(this.da.Fb(a), this.xm) ? Hq(this.td, a, this.kc, this.la) : d ? Bq(this.td, a, b, c, this.la) : yq(this.td, a, b));
  }, this);
};
z.g.mL = function(a, b) {
  var c = Bx(a, this.xm).toUpperCase(), d = Bx(b, this.xm).toUpperCase();
  return(c = vF.indexOf(c) - vF.indexOf(d)) ? c : (0,z.qk)(b, "latestPublishedAt") - (0,z.qk)(a, "latestPublishedAt");
};
z.g.Yv = function(a) {
  var b = !!this.kc.get("virtuals.canAdminister"), c = {id:a.get("id"), name:a.get("title"), description:""};
  switch(Bx(a, this.xm)) {
    case "PENDING":
      c.description = "Pending";
      c.disabled = !0;
      break;
    case "APPROVED":
      c.status = "Remove";
      c.description = "Already in this collection";
      c.hasIcon = !0;
      break;
    case "REJECTED":
      if (b) {
        c.status = "Add";
        break;
      }
      c.description = "Not Accepted";
      c.disabled = !0;
      break;
    default:
      c.status = b ? "Add" : "Submit";
  }
  return c;
};
(0,z.p)(Dx, z.Lo);
z.g = Dx.prototype;
z.g.Zd = new yx(3E5);
z.g.od = null;
z.g.tq = null;
z.g.Ya = null;
z.g.yb = function() {
  var a = this.od.get("name") + " — " + (0,z.H)("productName"), b = (0,z.pk)(this.od, "description");
  this.uc(new z.co(a, b, "website"));
  this.tq && (this.Ya = new z.Ix(this.La()), (0,z.Ey)((0,z.Dy)(this.Ya.Co(this.tq), this.N).Tj((0,z.Un)()), {collection:this.od.ab(), Hw:!0, Va:!0}), this.Ya.D(HH, this.gq, this), this.Ya.D(IH, this.hq, this));
  (a = this.J(".layout-fill-height")) && this.Aa(new No(this.La(), a));
  this.cB();
  this.In = new wq(this.La());
};
z.g.cB = function() {
  var a = this.J(".show-cross-poster");
  a && (this.Jn = new zx(this.La(), this.N, a, this.od, this.tq, !1), this.Aa(this.Jn));
};
z.g.H = function() {
  Dx.w.H.call(this);
  (0,z.Hk)(bE, {collectionId:this.od.get("id"), collectionSlug:this.zc});
  (0,z.Sk)(1, "collection");
  this.Ya && this.Ya.H();
  (0,z.Gi)(this.N).F("new-post", this.iu, this).F("embed-collection", this.XF, this);
};
z.g.C = function() {
  this.Ya && ((0,z.ad)(this.Ya), this.Ya = null);
  Dx.w.C.call(this);
};
z.g.ka = function() {
  this.Ya && this.Ya.ka();
  Dx.w.ka.call(this);
};
z.g.iu = function() {
  (0,z.Hk)(pD, {source:"collection"});
  var a = z.zG.Q({collectionSlug:this.zc});
  this.$k.navigate(a);
  return!1;
};
z.g.XF = function() {
  (0,z.Hk)(hE, {collectionSlug:this.zc});
  this.U.open({title:"Embed this collection", bodyHtml:(0,z.I)(lx, {collection:this.od.ab(), recommendedPosts:this.la.ab().slice(0, 3), latestPosts:this.la.ab().slice(0, 3)}), type:z.nk}).J("textarea").select();
};
z.g.Du = function(a) {
  a = a.split("/");
  return "trending" == a[2] ? "recommended" : "submissions" == a[2] ? "submissions" : "latest";
};
z.g.gq = function(a) {
  a = (0,z.Jb)(a, function(a) {
    return a.get("id");
  });
  (0,z.Hk)(kD, {collectionSlug:this.zc, postIds:a});
  a = this.N.querySelector(".bucket-empty");
  var b = this.N.querySelector(".nav-tabs");
  b && a && ((0,z.ab)(nd(b), "nav-tabs-hidden") && pd(b, "nav-tabs-hidden"), (0,z.ab)(nd(a), "bucket-empty-hidden") || od(a, "bucket-empty-hidden"));
};
z.g.hq = function() {
  var a = this.N.querySelector(".bucket-empty"), b = this.N.querySelector(".bucket-posts"), c = this.N.querySelector(".nav-tabs");
  c && a && b && 0 === b.childElementCount && (this.od.get("virtuals.canAdminister") || od(c, "nav-tabs-hidden"), pd(a, "bucket-empty-hidden"));
};
(0,z.p)(z.Gx, z.Oj);
z.Gx.prototype.Tj = function(a) {
  this.Nk = a;
};
z.Gx.prototype.Ql = function() {
  if (Ak(this.wd)) {
    this.gv = !0;
  } else {
    this.gv = !1;
    var a = (0,z.qi)(this.Nk).top, b = this.Nk.scrollHeight, c = Math.min(this.Nk.offsetHeight, (0,z.Ad)(window).height);
    a + 3 * c > b && Hx(this);
  }
};
L("e", "", function(a, b, c) {
  return c.variants.can_see_connections ? th("e", "connections")(a, null, c) : th("e", "standard")(a, null, c);
});
L("e", "standard", function(a, b, c) {
  b = "";
  var d = hk(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.O)(a.post.id) + '" class\x3d"post-item' + (a.Va ? " post-item-light" : "") + (a.Ug ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.O)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.O)(a.post.status) : "" : "draft") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += (!a.Yh && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.O)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.post.creator.name) + '"\x3e' + cp((0,z.K)(a, {user:a.post.creator, Oc:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(d)) + '" title\x3d"' + (0,z.O)(a.post.title) + " by " + (0,z.O)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"' + (a.source ? ' data-source\x3d"' + 
  (0,z.O)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.N)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Ug ? "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.O)((0,z.P)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.O)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.N)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e") + gp(a, c) + lp(a, c) + jp(a, c) + "\x3c/div\x3e";
});
L("e", "drafts", function(a, b, c) {
  b = "";
  var d = gk(a, c), e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += '\x3carticle data-post-id\x3d"' + (0,z.O)(a.post.id) + '" class\x3d"post-item post-status-draft"\x3e' + (!a.Yh && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.O)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.post.creator.name) + '"\x3e' + cp((0,z.K)(a, {user:a.post.creator, Oc:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(d)) + '" title\x3d"' + (0,z.O)(a.post.title) + " by " + (0,z.O)(e) + 
  '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"\x3e' + (a.post.title ? (0,z.N)(a.post.title) : "Untitled") + '\x3c/a\x3e\x3c/h3\x3e\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.O)((0,z.P)(d)) + '" title\x3d"' + (0,z.O)(a.post.title) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"\x3e\x3cp\x3e' + (0,z.N)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e\x3c/article\x3e";
});
L("e", "rich", function(a, b, c) {
  b = "";
  var d = hk(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.O)(a.post.id) + '" class\x3d"post-item post-item-rich' + (a.Va ? " post-item-light" : "") + (a.Ug ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.O)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.O)(a.post.status) : "" : "draft") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User", f = (0,z.Uj)((0,z.K)(a.post.virtuals.previewImage, {height:200, width:640, strategy:"crop-fixed"}), 0, c);
  return b += (f ? '\x3ca class\x3d"post-item-image-wrapper" href\x3d"' + (0,z.O)((0,z.P)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.O)(a.source) + '" ' : "") + '\x3e\x3cimg class\x3d"post-item-image" src\x3d"' + (0,z.O)((0,z.P)(f)) + '" height\x3d"200" width\x3d"640"\x3e\x3c/a\x3e' : "") + '\x3cspan class\x3d"post-item-meta-rich-reason"\x3e' + (a.post.providerName ? 
  th("a", a.post.providerName)((0,z.K)(a, {reason:a.post.reasons[a.post.providerName], eh:!0}), null, c) : "") + '\x3c/span\x3e\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(d)) + '" title\x3d"' + (0,z.O)(a.post.title) + " by " + (0,z.O)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.O)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.N)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Ug ? 
  "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.O)((0,z.P)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.O)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.N)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e") + gp((0,z.K)(a, {vi:!0, gm:!1}), c) + lp(a, c) + "\x3c/div\x3e";
});
L("e", "connections", function(a, b, c) {
  var d = "";
  b = hk(a);
  var e = c.variants.enable_recommend_notes && (null == a.post.virtuals.notesBySocialRecommends ? null : a.post.virtuals.notesBySocialRecommends.length), d = d + ('\x3cdiv data-post-id\x3d"' + (0,z.O)(a.post.id) + '" class\x3d"post-item post-item-connections' + (a.Va ? " post-item-light" : "") + (a.Ug ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.O)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.O)(a.post.status) : "" : "draft") + '"\x3e'), 
  f = a.post.creator ? a.post.creator.name : "Deleted User", h = a.post.virtuals.notesBySocialRecommends;
  if (e && h && h.length) {
    var e = h[0], k = h[0].authorUser.name, h = h[0].authorUser.username, h = c.variants.enable_recommend_notes && e ? '\x3cdiv class\x3d"notes-post-meta notes-recommendations"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e“' + (0,z.N)(e.content) + '”\x26#8202;—\x26#8202;\x3ccite class\x3d"notes-recommendation-cite"\x3e\x3ca class\x3d"link" href\x3d"/@' + (0,z.O)(h) + '"\x3e' + (0,z.N)(k) + "\x3c/a\x3e\x3c/cite\x3e\x3c/blockquote\x3e\x3c/div\x3e" : 
    ""
  } else {
    e = a.post.virtuals.usersBySocialRecommends;
    h = "";
    if (e && e.length) {
      var e = (0,z.K)(a, {Dn:'\x3cspan class\x3d"icons icons-heart post-meta-recommends-icon"\x3e\x3cspan class\x3d"screen-reader-text"\x3ePeople who recommended “' + (0,z.N)(a.post.title) + "”\x3c/span\x3e\x3c/span\x3e", users:e, VC:"post-meta post-meta-recommends clear-fix", Oc:"avatar-icon post-meta-avatar post-meta-avatar-recommend", ed:a.ed || 3}), k = "", l = e.ed ? Math.min(e.users.length, e.ed) : e.users.length;
      if (l) {
        for (var k = k + ('\x3cul class\x3d"avatar-list' + (e.VC ? " " + (0,z.O)(e.VC) : "") + '"\x3e' + (e.Dn ? '\x3cli class\x3d"avatar-list-item"\x3e' + (0,z.Sh)(e.Dn) + "\x3c/li\x3e" : "")), m = 0;m < l;m++) {
          k += '\x3cli class\x3d"avatar-list-item"\x3e' + (0,z.$o)((0,z.K)(e, {user:e.users[m]}), c) + "\x3c/li\x3e";
        }
        k += "\x3c/ul\x3e";
      }
      e = k;
    } else {
      e = "";
    }
    h += "\x3cdiv\x3e" + e;
    a.Ug || (e = a.post.providerName ? "" + th("a", a.post.providerName)((0,z.K)(a, {reason:a.post.reasons[a.post.providerName], eh:!0}), null, c) : "", h += a.gm && e ? '\x3cspan class\x3d"post-meta"\x3e' + (0,z.Sh)(e) + "\x3c/span\x3e" : "");
    h += "\x3c/div\x3e";
  }
  return d += h + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.O)((0,z.P)(b)) + '" title\x3d"' + (0,z.O)(a.post.title) + " by " + (0,z.O)(f) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.O)(b) + '"' + (a.source ? ' data-source\x3d"' + (0,z.O)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.N)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Ug ? "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.O)((0,z.P)(b)) + '" data-action\x3d"open-post" data-action-value\x3d"' + 
  (0,z.O)(b) + '"' + (a.source ? ' data-source\x3d"' + (0,z.O)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.N)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e") + kp((0,z.K)(a, {vi:!a.Yh}), c) + ('\x3cspan class\x3d"post-meta post-meta-bookmark"\x3e' + fp({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, c) + "\x3c/span\x3e") + lp(a, c) + jp(a, c) + "\x3c/div\x3e";
});
(0,z.p)(z.Ix, z.Mj);
z.Ix.prototype.la = null;
z.Ix.prototype.jh = null;
z.Ix.prototype.Nk = null;
z.Ix.prototype.Zu = null;
var HH = "add", IH = "remove";
z.g = z.Ix.prototype;
z.g.Co = function(a) {
  if (this.la) {
    throw Error("The post list should not be set twice.");
  }
  a && (this.la = a, this.la.D("add", this.gq, this), this.la.D("remove", this.hq, this));
  return this;
};
z.g.Tj = function(a) {
  this.Nk = a;
  return this;
};
z.g.H = function() {
  this.jh && Ex(this.jh, this.ia, this.la);
  this.Ke = new z.Gx(this.ca, this.la, 10);
  this.Ke.Tj(this.Nk);
  (0,window.setTimeout)(function() {
    if (this.Ke) {
      var a = this.Ke;
      a.H();
      (0,z.Pj)(a, a.Ba, "scroll-throttled", a.Ql, a);
      a.Ql();
    }
  }.bind(this), 250);
};
z.g.ka = function() {
  (0,z.ad)(this.Ke);
  this.Ke = null;
  this.jh && (0,z.Gi)(this.jh).clear("open-post");
};
z.g.C = function() {
  this.la && (this.la.ya("add", this.gq, this), this.la.ya("remove", this.hq, this), this.la = null);
};
z.g.gq = function(a) {
  var b = this.jh.querySelector(".bucket-posts");
  if (b) {
    for (var c = 0;c < a.length;c++) {
      var d = a[c], e = {items:[d.ab()], Yr:"post", Xr:1}, f;
      for (f in this.Zu) {
        e[f] = this.Zu[f];
      }
      d = this.la.indexOf(d);
      e = (0,z.Hd)((0,z.I)(sp, e));
      (0,z.Nd)(b, e, d);
    }
  } else {
    (0,z.Gj)(Error("PostListHandler could not find a bucket element"));
  }
  this.Ke && this.Ke.Ql();
  this.S(HH, a, this);
};
z.g.hq = function(a) {
  var b = this.jh.querySelector('.post-item[data-post-id\x3d"' + a.get("id") + '"]');
  b && b.parentNode && (0,z.Od)(b.parentNode);
  this.S(IH, a, this);
};
(0,z.p)(Fy, Dx);
z.g = Fy.prototype;
z.g.Fi = null;
z.g.la = null;
z.g.Ac = function() {
  var a = this.Ln.qg[this.zc] || null, b = this.hd && !!this.Ln.Cb[this.hd];
  return a && b ? (this.od = a, this.la = this.Ln.Cb[this.hd], this.Dy(), null) : (0,z.r)((0,z.r)(this.ls.get(this.path + "?posts\x3dtrue", {na:!0}), this.kd, this), this.Dy, this);
};
z.g.yb = function() {
  var a = this.N.querySelector(".hero-actions");
  a && (this.Fi = (0,z.eq)(new z.fq(a, this.od, To), {Va:!0}, "collection"), this.Fi.H());
  Fy.w.yb.call(this);
};
z.g.cg = function(a) {
  this.kd({value:a.collection, posts:a.posts, references:{User:{}}});
};
z.g.H = function() {
  Fy.w.H.call(this);
  var a = {collectionSlug:this.zc, postIds:this.la.Ra.concat().map(function(a) {
    return a.get("id");
  })};
  (0,z.Hk)(kD, a);
  (0,z.Gi)(this.N).F("accept-story", this.nG, this).F("reject-story", this.TG, this);
};
z.g.ka = function() {
  (0,z.Ji)(this.N);
  Fy.w.ka.call(this);
};
z.g.cB = function() {
  var a = this.J(".show-cross-poster");
  a && (this.Jn = new zx(this.La(), this.N, a, this.od, this.la, this.Kk.Zo), this.Kk.Zo ? (this.Kk.Zo = !1, (0,z.On)(function() {
    this.Aa(this.Jn);
  }, this)) : this.Aa(this.Jn));
};
z.g.C = function() {
  (0,z.ad)(this.Fi);
  this.Fi = null;
  Fy.w.C.call(this);
};
z.g.kd = function(a) {
  var b = (0,z.fl)(a.value, a.references);
  this.od = (0,z.dl)(this.Ln, b);
  a = (0,z.fl)(a.posts, a.references);
  this.la = al(this.Ln, this.zc, this.filterBy);
  this.la.Qf(a);
  this.tq = this.la;
};
z.g.Dy = function() {
  var a = BH.Q({collectionSlug:this.zc}), a = {title:this.od.get("name"), collection:this.od.ab(), feedPath:a, posts:this.la.ab(), filterBy:this.filterBy};
  this.N.innerHTML = (0,z.I)(Cx, a);
};
z.g.nG = function(a) {
  var b = a.value;
  b && this.In ? (0,z.r)(Bq(this.In, b, this.zc, (0,z.pk)(this.od, "name"), null), function() {
    (0,z.Hk)(fE, {postId:b, collectionId:this.od.get("id")});
    this.la.Ul(b);
  }, this) : (a = Gp(), (0,z.Gj)(a), this.U.error(a));
};
z.g.TG = function(a) {
  (a = a.value) && this.In ? Iq(this.In, a, this.od, this.la) : (a = Hp(), (0,z.Gj)(a), this.U.error(a));
};
(0,z.p)(Gy, Cs);
Gy.prototype.Yc = function() {
  this.U.error("This feature is currently disabled.");
};
(0,z.p)(Hy, Cs);
Hy.prototype.Yc = function() {
  Iy();
};
Hy.prototype.C = function() {
  this.ia.ya(xq, this.jq, this);
  Hy.w.C.call(this);
};
Hy.prototype.jq = function() {
  this.It && Iy();
  this.It = !0;
};
(0,z.p)(Jy, Cs);
Jy.prototype.Yc = function(a) {
  a.target.select();
};
(0,z.p)(Ky, Cs);
Ky.prototype.Yc = function(a) {
  (0,z.Ly)(this.ca, a.value || "");
};
var Qy = window;
var Uy = [];
(0,z.p)(z.Vy, z.Oj);
z.Vy.prototype.H = function() {
  z.Vy.w.H.call(this);
  this.mp = (0,z.Mn)(250, this.vF, this);
  this.qa(this.Fa, "keyup", this.mp);
  this.qa(this.Fa, "keydown", function() {
    this.S("availability-request");
  });
};
z.Vy.prototype.vF = function() {
  var a = this.Fa.value;
  if (a && a.match(z.QC)) {
    if (this.IF && a === this.IF) {
      this.S("availability-update", {value:a, Wr:!0, Ur:!1});
    } else {
      var b = {username:a};
      this.ba.source && (b.source = this.ba.source);
      this.ba.name && (b.name = this.ba.name);
      this.ba.accountName && (b.accountName = this.ba.accountName);
      this.ba.identifier && (b.identifier = this.ba.identifier);
      var c = NG.Q();
      (0,z.s)((0,z.r)(this.ea.post(c, b, {na:!0}), function(b) {
        this.S("availability-update", {value:a, Wr:!0, Ur:b.value.usernames[0] == a});
      }, this), z.Gj);
    }
  } else {
    this.S("availability-update", {value:a, Wr:!1, Ur:!1});
  }
};
z.Vy.prototype.ka = function() {
  z.Vy.w.ka.call(this);
  this.mp.cancel();
};
z.Vy.prototype.C = function() {
  z.Vy.w.C.call(this);
  this.Fa = this.mp = null;
};
(0,z.p)(Wy, z.Mj);
Wy.prototype.close = function() {
  this.Ai.close();
  return Yy(this);
};
Wy.prototype.C = function() {
  this.Ai = this.name = null;
  Wy.w.C.call(this);
};
var cz = {scrollbars:"scrollbars", aN:"resizable", toolbar:"toolbar", location:"location", width:"width", height:"height", left:"left", top:"top"};
Zy.prototype.open = function(a, b, c) {
  c = bz(this, c || {});
  this.pv.remove("authData");
  a = this.yn.open(a.toString(), b, c);
  if (!a) {
    return null;
  }
  this.Ip || (this.Ip = this.yn.setInterval(this.wJ.bind(this), 500));
  this.Vi[b] = new Wy(b, a);
  return this.Vi[b];
};
Zy.prototype.wJ = function() {
  this.Vi = tb(this.Vi, function(a) {
    return!Yy(a);
  });
  (0,z.yb)(this.Vi) && (this.yn.clearInterval(this.Ip), this.Ip = null);
  (0,z.sb)(this.Vi, function(a) {
    if (cj) {
      var b = this.pv.get("authData");
      if (b) {
        this.pv.remove("authData");
        try {
          var c = JSON.parse(b);
          a.S("data", c);
        } catch (d) {
          Xy(a, d);
        }
        a.close();
      }
    }
    if (!$y && (b = a.Ai.name, a.RC !== b)) {
      if (a.name !== b.substr(0, a.name.length)) {
        Xy(a, "Window " + a.name + " sent a bad message via window.name");
      } else {
        var e;
        try {
          e = JSON.parse(b.substr(a.name.length + 1)), a.RC = a.Ai.name, a.S("data", e);
        } catch (f) {
          Xy(a, f);
        }
      }
    }
  }, this);
};
Zy.prototype.vH = function(a) {
  if (a.origin === Sy().toString()) {
    var b = this.Vi[a.source.name];
    if (b && b.Ai === a.source) {
      try {
        var c = JSON.parse(a.data);
        b.S("data", c);
      } catch (d) {
        Xy(b, d);
      }
    }
  }
};
(0,z.p)(dz, Cs);
dz.prototype.Yc = function(a) {
  switch(a.Td) {
    case "sign-in-prompt":
      gz(this, a);
      break;
    case "twitter-auth":
      kz(this, a);
      break;
    case "facebook-auth":
      qz(this, a);
      break;
    default:
      (0,z.Gj)("SignIn handler received an unexpected topic: " + a.Td);
  }
};
dz.prototype.ep = function(a) {
  var b = this.U.Hc.J(".input-group-username"), c = b.querySelector(".input-group-title");
  (0,z.u)(b, "input-group-error");
  c.innerHTML = "Profile Address";
  (0,z.Ea)(a.value) || (a.Wr ? a.Ur || rz(this, ".input-group-username", (0,z.Mp)(), !1) : rz(this, ".input-group-username", (0,z.Np)(), !1));
};
dz.prototype.CF = function(a) {
  var b = this.U.Hc.J(".btn-overlay-confirm");
  if (!b.getAttribute("disabled")) {
    sz(this, ".input-group-name", "Full name");
    sz(this, ".input-group-username", "Profile Address");
    sz(this, ".input-group-email", "Email address");
    var c = [].slice.call(window.document.querySelectorAll(".overlay-registration input"), 0), c = TB(c, function(a, b) {
      0 <= ["hidden", "email", "text"].indexOf(b.type) && (a[b.name] = b.value);
      "checkbox" == b.type && b.checked && (a[b.name] = !0);
      return a;
    }, {});
    (0,z.Ea)(c.name) ? rz(this, ".input-group-name", "Please enter your name", !0) : (0,z.Ea)(c.username) ? rz(this, ".input-group-username", "Please enter your profile address", !0) : (0,z.uq)(c.email) ? (tz(this, function(a) {
      a.setAttribute("disabled", "true");
    }), b.innerHTML = "Creating account…", (0,z.s)((0,z.r)(this.ea.post(jH.Q(), c, {na:!0}), function(b) {
      b.value.uid ? a ? Ny(a) : (0,z.Ry)() : ((0,z.Gj)("verifyAccount errored: " + b.status), nz(this));
    }, this), function(a) {
      tz(this, function(a) {
        a.removeAttribute("disabled");
      });
      b.innerHTML = "Create account";
      400 == a.status || 409 == a.status ? rz(this, ".input-group-username", (0,z.Mp)(), !0) : (0,z.Gj)("createAccount failed unexpectedly: " + a);
    }, this)) : rz(this, ".input-group-email", (0,z.Jp)(), !0);
  }
};
(0,z.p)(uz, Cs);
uz.prototype.Yc = function(a) {
  a.value && (0,z.Ok)(a.value);
  if (!a.Xn) {
    var b = a.target;
    if (b.href) {
      var c = b.href, d = (0,z.Oy)(), c = c instanceof Mf ? c.ja() : new Mf(c, void 0);
      if (Wf(d, c)) {
        d = b.pathname;
        "/" === b.pathname.charAt(0) && (d = d.substr(1));
        b = {};
        if (a = a.target.getAttribute("data-source")) {
          b.source = a;
        }
        this.ia.navigate(d, b);
      } else {
        a = b.href, b = (0,z.ma)(a) ? new Mf(a) : a, b.Be && "http" !== b.Be && "https" !== b.Be || (Qy.location = a);
      }
    }
  }
};
(0,z.p)(vz, Cs);
vz.prototype.Yc = function(a) {
  var b = a.value;
  if (!this.Ru[b]) {
    var c = this.hH;
    a = WG.Q({postId:a.value});
    wz(this, b, c);
    a = c ? this.ea.put(a, null, {qe:!0}) : this.ea.Gd(a, {qe:!0});
    this.Ru[b] = a;
    (0,z.Bc)(a, function() {
      delete this.Ru[b];
    }, this);
    (0,z.r)(a, function() {
      var a = c ? yD : zD, e = this.da.Fb(b), f = {postId:b};
      e && (f.readingTime = e.get("virtuals.readingTime"));
      (0,z.Hk)(a, f);
    }, this);
    (0,z.s)(a, function() {
      this.Oa.H("Sorry, we’re having trouble updating your bookmarks. Please try again.", "error");
      wz(this, b, !c);
    }, this);
  }
};
(0,z.p)(xz, vz);
(0,z.p)(yz, vz);
(0,z.p)(zz, Cs);
zz.prototype.Yc = function(a) {
  var b = a.target.getAttribute("data-action-type"), c = a.target.getAttribute("data-action-id"), d = a.target.getAttribute("data-action-name");
  (0,z.s)((0,z.r)(this.ea.post(KG.Q(), {isBlacklisted:"true", type:b, id:c}, {na:!0, ee:0}), function() {
    this.Oa.H(Dp({name:d}), "success");
  }, this), function() {
    this.Oa.H(Ep({name:d}), "error");
  });
};
(0,z.p)(Az, Cs);
Az.prototype.Yc = function(a) {
  var b = a.value, c = a.target.getAttribute("data-collection-id"), d = this.da.qg[b] || null, b = "/me/subscriptions/collection/" + b, e, f, h, k = (0,z.Pc)(a.target, "active");
  k ? (f = "delete", h = mD, e = "An error occurred. Please try unfollowing the collection again.") : (f = "put", h = lD, e = "An error occurred. Please try following the collection again.");
  if (d) {
    d.set("virtuals.isSubscribed", !k);
    var l = d.get("metadata.followerCount");
    d.set("metadata.followerCount", l + (k ? -1 : 1));
  }
  (0,z.Tc)(a.target, "active", !k);
  (0,z.s)((0,z.r)(this.ea.send(f, b, {}, {na:!0}), function() {
    (0,z.Hk)(h, {collectionId:c});
  }, this), function(b) {
    d && d.set("virtuals.isSubscribed", k);
    (0,z.Tc)(a.target, "active", k);
    this.Oa.H(e, "error");
    (0,z.Gj)(b);
  }, this);
};
(0,z.p)(Bz, Cs);
Bz.prototype.Yc = function(a) {
  var b = a.value, c = "/me/subscriptions/user/" + b, d, e, f, h, k = (0,z.Pc)(a.target, "active");
  k ? (f = "delete", h = oD, d = "An error occurred. Please try unfollowing the user again.", e = "User " + (0,z.H)("currentUser").userId + " unable to unfollow user " + b) : (f = "put", h = nD, d = "An error occurred. Please try following the user again.", e = "User " + (0,z.H)("currentUser").userId + " unable to follow user " + b);
  (0,z.Tc)(a.target, "active", !k);
  (0,z.r)(this.ea.send(f, c, {}, {na:!0}), function(c) {
    c.value ? (0,z.Hk)(h, {targetUserId:b}) : (this.Oa.H(d, "error"), (0,z.Uc)(a.target, "active"), (0,z.Gj)(e));
  }, this);
};
Ez.prototype.su = function() {
  Gz(this);
};
z.g = Hz.prototype;
z.g.load = function(a) {
  a = Lz(a);
  if (this.Ze(a)) {
    return(0,z.Ic)(this.Je[a]);
  }
  Iz(this, a);
  return this.Je[a].Bb();
};
z.g.Ze = function(a) {
  a = Lz(a);
  a = this.Je[a];
  return!!a && !!a.url;
};
z.g.bo = function(a) {
  a = Lz(a);
  a = this.Je[a];
  return!!a && !a.url;
};
z.g.bn = function(a) {
  a = a.target || a.currentTarget;
  var b = a.src;
  Nz(this, b);
  if (this.bo(b)) {
    var c = this.Je[b], d = this.bj[b], e = {url:b, width:a.width, height:a.height};
    this.Je[b] = e;
    this.bj[b] = a;
    delete this.Qi[b];
    c.Ca(e);
    d.Ca(a);
  } else {
    (0,z.Gj)("Finished loading image but could not find the deferred for: " + b);
  }
};
z.g.Me = function(a) {
  a = (a.target || a.currentTarget).src;
  Nz(this, a);
  if (2 > this.Qi[a]) {
    (0,z.Gj)("Failed loading image " + a + ", retrying."), this.Qi[a] += 1, Jz(this, a);
  } else {
    if (this.bo(a)) {
      var b = this.Je[a];
      delete this.Je[a];
      delete this.bj[a];
      delete this.Qi[a];
      b.be(Error("Error loading " + a));
    } else {
      (0,z.Gj)("Error encountered while loading image and could not findthe deferred for: " + a);
    }
  }
};
z.g.Ri = function(a, b) {
  b && 10 < Object.keys(this.Je).length && (this.bj = {}, this.Je = {}, this.Qi = {});
};
(0,z.p)(z.Oz, z.fq);
var Pz = (0,z.ej)();
z.g = z.Oz.prototype;
z.g.getData = (0,z.n)(169);
z.g.bs = function(a) {
  if (this.Od() && a) {
    a = this.ba.Ra.concat();
    for (var b = 0;b < a.length;b++) {
      var c = Qz(this, a[b]);
      this.S("after-draw", a[b], c);
    }
  }
};
z.g.bx = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    var d = b.indexOf(a[c]), d = Qz(this, a[c], d);
    this.S("after-draw", a[c], d);
  }
};
z.g.cx = function(a) {
  var b = window.document.getElementById(this.Dp + (0,z.qa)(a));
  this.S("before-clear", a, b);
  this.S("destroy", a, b);
  (0,z.Od)(b);
};
z.g.Pl = function(a) {
  for (var b = 0;b < a.length;b++) {
    var c = a[b].jo, d = window.document.getElementById(this.Dp + (0,z.qa)(c));
    this.S("before-clear", c, d);
    d.innerHTML = (0,z.Uq)(this, c);
    this.S("after-draw", c, d);
  }
};
Rz.prototype.Fh = null;
z.Dq = "success";
z.g = Rz.prototype;
z.g.H = function(a, b) {
  var c = "string" == typeof b ? {type:b} : b || {}, d = this.ia.rb.J(".cover"), e = "butter-bar active ";
  c.type && (e += c.type + " ");
  d || (e += "butter-bar-center ");
  this.Oa.className = e;
  this.Oa.innerHTML = ms({ZC:a, rM:c.im, Nw:c.Nw, tx:!!c.tx});
  this.Fh && (0,window.clearTimeout)(this.Fh);
  c.Nw ? this.ia.D(Sn, this.ka, this) : -1 != c.Mx && (this.Fh = (0,window.setTimeout)(this.ka.bind(this), c.Mx || 5E3));
  this.Na.S("activate", this);
  return this.uJ = new z.vc;
};
z.g.ka = function() {
  (0,z.u)(this.Oa, "active");
  this.ia.ya(Sn, this.ka, this);
  this.Na.S("deactivate", this);
  this.Na.clear();
  this.Fh = null;
};
z.g.NF = function() {
  this.Na.S("dismiss", this);
  this.ka();
};
z.g.JJ = function() {
  this.ia.reload();
  this.ka();
};
z.g.dJ = function() {
  this.uJ.Ca(null);
};
z.g.GJ = function() {
  this.Na.S("action", this);
};
L("k", "", function(a, b, c) {
  b = a.followUp.creatorId == c.currentUser.userId && !a.Cl;
  c = "";
  var d = '\x3cdiv class\x3d"follow-up-content"\x3e' + (a.Cl ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.O)((0,z.P)(a.followUp.mediaResource.href)) + '" rel\x3d"nofollow"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.N)(a.followUp.title) : (0,z.N)(a.followUp.mediaResource.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e', e;
  if (a.followUp && a.followUp.description) {
    e = (0,z.N)(a.followUp.description);
  } else {
    e = a.followUp.mediaResource.description;
    var f = 140, h = !0;
    e = String(e);
    if (!(e.length <= f)) {
      h && (3 < f ? f -= 3 : h = !1);
      var k = e.charAt(f - 1);
      if (k = 55296 <= k && 56319 >= k) {
        k = e.charAt(f), k = 56320 <= k && 57343 >= k;
      }
      k && (f -= 1);
      e = e.substring(0, f);
      h && (e += "...");
    }
    e = (0,z.N)(e);
  }
  return a = c + (d + e + "\x3c/p\x3e" + (a.Cl ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e\x3cspan class\x3d"follow-up-footer-item"\x3e' + (a.followUp.creatorId != a.hs ? "via " + Xo({user:a.followUp.creator, fc:"follow-up-footer-link"}) + " " : "") + 'on \x3ca href\x3d"' + (0,z.O)((0,z.P)(a.followUp.mediaResource.href)) + '" class\x3d"follow-up-footer-link" rel\x3d"nofollow"\x3e' + (0,z.N)(a.followUp.mediaResource.domain) + (b ? "" : " \x26rarr;") + "\x3c/a\x3e\x3c/span\x3e" + 
  (b ? '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link follow-up-delete" data-action\x3d"delete-follow-up" data-action-value\x3d"' + (0,z.O)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e");
});
L("k", "MediaResourceMediumPost", function(a, b, c) {
  b = a.followUp.mediaResource.mediumPost.post;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content follow-up-type-medium-post"\x3e' + (a.Cl ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.O)((0,z.P)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.N)(a.followUp.title) : (0,z.N)(b.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? 
  (0,z.N)(a.followUp.description) : (0,z.N)(b.virtuals.draftSnippet)) + "\x3c/p\x3e" + (a.Cl ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e' + (a.followUp.creatorId != a.hs ? '\x3cspan class\x3d"follow-up-footer-item follow-up-author"\x3evia ' + Xo({user:a.followUp.creator, fc:"follow-up-footer-link"}) + "\x3c/span\x3e" : "") + (a.followUp.creatorId != c.currentUser.userId || a.Cl ? "" : '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link" data-action\x3d"delete-follow-up" data-action-value\x3d"' + 
  (0,z.O)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e");
});
(0,z.p)(Xz, z.Mj);
z.g = Xz.prototype;
z.g.C = function() {
  for (var a in this.Wk) {
    this.Wk[a].cancel();
  }
  Xz.w.C.call(this);
};
z.g.load = function() {
  return(0,z.s)((0,z.r)((0,z.r)(this.ea.get(ZG.Q({postId:this.$}), {na:!0, background:!0}), this.DJ, this), function() {
    this.Bm = !0;
  }, this), z.Gj);
};
z.g.Ze = function() {
  return this.Bm;
};
z.g.zj = function(a) {
  return(0,z.uk)(this.Tc, "followUpId", a);
};
z.g.kC = function() {
  return this.gG;
};
z.g.iH = function(a) {
  return 3 !== a.get("visibility");
};
z.g.DJ = function(a) {
  for (var b = a.value, c = 0;c < b.length;c++) {
    $z(this, b[c], a.references);
  }
};
(0,z.p)(eA, z.v);
z.g = eA.prototype;
z.g.Gk = null;
z.g.Fm = null;
z.g.Tc = null;
z.g.Im = null;
z.g.wg = !1;
z.g.C = function() {
  this.ty && this.wg && this.ut();
  this.Tc && (this.Tc.ya("add", this.vm, this), this.Tc.ya("remove", this.vm, this));
  (0,z.ad)(this.Sa);
  (0,z.Ji)(this.Ea);
  (0,z.Od)(this.Ea);
  this.Ea = null;
  (0,z.ad)(this.Im);
  this.Im = null;
  eA.w.C.call(this);
};
z.g.bd = function(a) {
  this.Gk = a;
  return(0,z.r)(this.Sa.Aa(this.ba.load()), this.gH, this);
};
z.g.ym = function() {
  var a = window.document.createElement("div");
  a.className = "follow-ups-container";
  return a;
};
z.g.BM = function() {
  "#follow-up-editor" == window.document.location.hash && (this.lA(), (0,z.Ms)(this.ia, ""), this.hb(".follow-up-new").scrollIntoView(!0));
};
z.g.gH = function() {
  this.Ea.innerHTML = (0,z.I)(Tz, {fL:this.ty, post:this.xa.ab()});
  this.Tc = this.ba.kC();
  this.Tc.D("add", this.vm, this);
  this.Tc.D("remove", this.vm, this);
  this.vm();
  var a = this.hb(".follow-ups-list"), a = new z.Oz(a, this.Tc, Uz);
  a.Wt = "follow-up";
  this.Im = (0,z.eq)(a, {canAdminister:this.tF, hs:this.Wi, visibility:HF}, "followUp");
  this.Im.D("after-draw", this.HH, this);
  this.Im.H();
  this.Gk.appendChild(this.Ea);
  this.wg = !0;
};
z.g.HH = function(a, b) {
  b.setAttribute("data-follow-up-id", (0,z.pk)(a, "followUpId"));
};
z.g.vm = function() {
  (0,z.Tc)(this.Ea, "follow-ups-empty", !this.Tc.count());
};
z.g.hb = function(a) {
  return this.Ea.querySelector(a);
};
z.g.TH = function(a) {
  if ((a = (0,z.Zd)(a.target, null, "follow-up-link")) && a.href) {
    a = (0,z.Zd)(a, null, "follow-up").getAttribute("data-follow-up-id");
    var b = this.ba.zj(a);
    hA(this, RD, {followUpId:a, visibility:b.get("visibility"), mediaResourceType:b.get("mediaResource").mediaResourceType});
  }
};
z.g.lA = function() {
  (0,z.r)(this.Sa.Aa(this.ca.load("FollowUpEditor")), function(a) {
    (0,z.t)(this.Ea, "follow-ups-container-active");
    (0,z.t)(this.hb(".follow-up-new"), "follow-up-editor-active");
    var b = this.hb(".follow-up-new-editor");
    this.Fm = (new a(this.ca, this.Wi, b)).eg();
    this.Fm.D("save", this.EF, this);
    this.Fm.D("cancel", this.ut, this);
    hA(this, ND);
  }, this);
};
z.g.$H = function(a) {
  this.U.confirm("Are you sure you want to delete this link?").D(z.zF, this.KF.bind(this, a.value));
};
z.g.KF = function(a) {
  (0,z.s)((0,z.r)(this.Sa.Aa(aA(this.ba, a)), function() {
    hA(this, PD, {followUpId:a});
  }, this), (0,z.Aq)(this.U, "An error occurred, and we were unable to delete your link.", !0));
};
z.g.TI = function(a) {
  var b = a.target.parentNode.getAttribute("data-follow-up-id");
  a = (0,window.parseInt)(a.value, 10);
  var c = null, d;
  for (d in HF) {
    if (a == HF[d]) {
      c = HF[d];
      break;
    }
  }
  iA(this, b, c);
};
z.g.jG = function(a, b) {
  var c = this.ba.zj(a).get("visibility"), d = null;
  2 == c ? d = "The link is now public" : 1 == c ? d = "The link is now private" : 3 == c && (d = "The link is dismissed");
  (0,z.r)(this.lj.H(d, {type:z.Dq, im:!0}), function() {
    iA(this, a, b);
  }, this);
  hA(this, QD, {followUpId:a, visibility:c});
};
z.g.kG = function(a) {
  a instanceof z.Mc || this.lj.H("An error occurred, and we could not change the link’s visibility.", "error");
};
z.g.EF = function(a, b, c) {
  this.ut();
  (0,z.s)((0,z.r)(this.Sa.Aa(Yz(this.ba, {title:a, description:b, mediaResourceId:c})), function(a) {
    hA(this, OD, {followUpId:a.value.followUpId});
  }, this), (0,z.Aq)(this.U, "An error occurred, and we were unable to create your link.", !0));
};
z.g.ut = function() {
  (0,z.ad)(this.Fm);
  this.Fm = null;
  (0,z.u)(this.Ea, "follow-ups-container-active");
  (0,z.u)(this.hb(".follow-up-new"), "follow-up-editor-active");
};
(0,z.p)(jA, z.v);
jA.prototype.cl = function(a, b) {
  return new eA(this.ca, a, b);
};
(0,z.p)(kA, z.Mj);
var JH = "https://" + window.document.location.hostname + "/m/facebook/close";
mA.prototype.Eo = function(a, b, c, d, e, f, h) {
  if ((0,z.H)("variants.can_share_to_facebook")) {
    a = (0,z.Ga)(a);
    d = (0,z.Ga)(d);
    var k = (0,z.Oy)();
    b = "fb-" + b + "-" + Date.now();
    Of(k);
    k.Af.set("source", b);
    a = (0,z.I)(jk, {url:k.toString(), title:a, caption:"by " + c, description:d, imageId:e, ZM:JH});
    this.lq(a);
    (0,z.Hk)(z.wD, {postId:f, type:h, dest:"facebook"});
  }
};
mA.prototype.lq = function(a) {
  az(this.Iu, new Mf(a), "intent", {width:550, height:320});
};
oA.prototype.Eo = function(a, b, c, d, e, f, h, k) {
  k = k || [];
  var l = (0,z.Oy)();
  b = "tw-" + b + "-" + Date.now();
  Of(l);
  l.Af.set("source", b);
  a = {content:a, name:d, username:c, twitterScreenName:e, url:l.toString(), collaborators:k};
  a = k.length ? (0,z.I)(nA, a) : (0,z.pA)(nA, a);
  this.lq(a);
  (0,z.Hk)(z.wD, {postId:f, type:h, dest:"twitter"});
};
oA.prototype.lq = function(a) {
  var b = new Mf("https://twitter.com/intent/tweet");
  Of(b);
  b.Af.set("text", a);
  az(this.Iu, b, "intent", {width:550, height:420});
};
(0,z.p)(qA, z.v);
qA.prototype.C = function() {
  (0,z.ci)(this.wa);
  this.wa.length = 0;
  qA.w.C.call(this);
};
qA.prototype.uh = function() {
  this.lh.S("active");
};
qA.prototype.sI = function() {
  this.lh.S("idle");
};
(0,z.p)(rA, z.Mj);
var qF = "idle";
rA.prototype.C = function() {
  this.MA.cancel();
  this.lh.ya("active", this.JA, this);
  this.lh.ya("idle", this.jv, this);
  rA.w.C.call(this);
};
rA.prototype.JA = function() {
  this.Wd || (this.Wd = !0, this.Ls = (0,z.ej)(), this.S("active", this.Ls - this.Mt));
  this.MA();
};
rA.prototype.eK = function() {
  this.jv(this.vv);
};
rA.prototype.jv = function(a) {
  a = a || 0;
  this.Wd && (this.Wd = !1, this.Mt = (0,z.ej)() - a, this.S(qF, this.Mt - this.Ls));
};
var tA = 0, KH = {};
z.g = sA.prototype;
z.g.get = function(a, b) {
  return this.send("get", a, null, b);
};
z.g.Gd = function(a, b) {
  return this.send("delete", a, null, b);
};
z.g.put = function(a, b, c) {
  return this.send("put", a, b, c);
};
z.g.post = function(a, b, c) {
  return this.send("post", a, b, c);
};
z.g.send = function(a, b, c, d) {
  function e() {
    m && (m.state = 2, vA(this));
    this.Na.S("send", !!m);
    return(0,z.r)((0,z.s)(sj(a, f, String(l), h), function(a) {
      if (k < h.ee && a instanceof uj && a.status && 500 <= a.status) {
        return k++, KH;
      }
    }, this), function(a) {
      if (a === KH) {
        a = k;
        a = 1 == a ? 200 * Math.round(Math.random()) : 2 == a ? 200 * Math.round(3 * Math.random()) : Math.round(Math.random() * (Math.pow(2, a) - 1) * 200);
        m && (m.state = 1, m.time = a, vA(this));
        var b = (0,z.Ic)(null), c = new z.vc;
        window.setTimeout(c.Ca.bind(c), a);
        return(0,z.r)((0,z.Cc)(b, c), e, this);
      }
    }, this);
  }
  a = a.toUpperCase();
  var f = String(b), h = this.nC(d || null), k = 0, l = c;
  l && "object" == typeof l && (h.co && (l = z.Ml.Zc(l)), l = h.Rw ? window.JSON.stringify(l) : wA(l));
  b = e.call(this);
  if (!h.background) {
    var m = {Bc:b, state:2, time:0};
    this.qq.push(m);
    vA(this);
    (0,z.Bc)(b, function() {
      (0,z.cb)(this.qq, m);
      vA(this);
    }, this);
  }
  (0,z.Bc)(b, function(a) {
    if (a instanceof Error) {
      this.Na.S("httperror", a.status || 0, h, a);
    } else {
      if (a) {
        var b = a.getResponseHeader("X-Obvious-DbInfo") || "";
        this.Na.S("successresponse", a.responseText, h, b);
      } else {
        throw a = Error("Unexpected error : 511"), this.Na.S("httperror", 511, h, a), a;
      }
    }
  }, this);
  h.qe ? ((0,z.s)(b, this.EG.bind(this, f)), (0,z.r)(b, this.az.bind(this, f))) : h.BD || (0,z.r)(b, function(a) {
    return a.responseText;
  });
  return(0,z.s)(b, function(a) {
    (0,z.pa)(a) && lj(a, "requestUrl", f);
    throw a;
  });
};
z.g.sl = function() {
  return this.wb;
};
z.g.nC = function(a) {
  a = a || {};
  var b = a.headers || {};
  b["X-Obvious-CID"] = "web";
  b["X-XSRF-Token"] = "1";
  if (a.Rw || a.na) {
    b["Content-Type"] = "application/json";
  }
  if (a.qe || a.na) {
    b.Accept = "application/json";
  }
  return{headers:b, Nx:a.Nx || 3E4, Xw:a.Xw, co:a.co, Rw:a.Rw || a.na, qe:a.qe || a.na, BD:!!a.BD, ee:"undefined" == typeof a.ee ? 10 : a.ee, background:!!a.background};
};
z.g.az = function(a, b) {
  var c = uA(b.responseText), d;
  try {
    d = window.JSON.parse(c);
  } catch (e) {
    throw d = Error("Invalid JSON response from " + a + ' : "' + e.message + '"'), lj(d, "responseText", Pa(c)), d;
  }
  if ("success" in d && ("payload" in d || "error" in d)) {
    var f = d.v, c = d.b, f = !!(this.lB && f && f > this.lB), c = !(!this.Vs || !c || this.Vs == c);
    if (f || c) {
      c && this.Na.S("buildchange"), f && this.Na.S("versionupdate");
    }
    if (d.success && d.payload) {
      return d.payload;
    }
    if (!d.success && d.error) {
      throw c = new vj(b.status, a, b), (0,z.pa)(d.error) ? (0,z.Bb)(c, d.error) : c.message += ": " + d.error, d.errorInfo && (c.errorInfo = d.errorInfo), c;
    }
  }
  return d;
};
z.g.EG = function(a, b) {
  b instanceof vj && b.km && b.km.responseText && this.az(a, b.km);
  throw b;
};
L("l", "", function(a) {
  a = a || {};
  var b = '\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons ' + (a.eT ? "icons-logo" : "icons-error") + '"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3e';
  if (a.message) {
    b += (0,z.Sh)(a.message);
  } else {
    switch(a.errorCode) {
      case 400:
        b += "We didn’t understand your request.";
        break;
      case 401:
        b += "This page requires authentication.";
        break;
      case 403:
        b += "You do not have access to this page.";
        break;
      case 404:
        b += "Sorry, but nothing exists here.";
        break;
      case 410:
        b += "Sorry, this item has been removed.";
        break;
      case 503:
        b += "Yikes! Medium is temporarily unavailable. We’ll fix it as soon as we can.";
        break;
      default:
        b += "Yikes! Something happened. We’ll fix it as soon as we can.";
    }
  }
  return b += "\x3c/p\x3e" + (503 != a.errorCode ? '\x3cspan class\x3d"error-message-wrap-small"\x3eFind something \x3ca href\x3d"/"\x3einteresting to read\x3c/a\x3e.\x3c/span\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e";
});
L("l", "Blacklisted", function() {
  return'\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThis page was in violation of the  \x3ca href\x3d"https://medium.com/help-center/30e5502c4eb4"\x3eMedium Rules\x3c/a\x3e\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eBrowse for great reads on \x3ca href\x3d"/"\x3eMedium.com\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
L("l", "RemovedByUser", function() {
  return'\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThe author deleted this Medium post\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eBrowse for great reads on \x3ca href\x3d"/"\x3eMedium.com\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
(0,z.p)(z.yA, z.v);
z.g = z.yA.prototype;
z.g.It = !1;
z.g.cj = window.performance && window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : window.OB_startTime || (0,z.ej)();
z.g.W = null;
z.g.Ty = !1;
z.g.jq = function() {
  this.Gy.length = 0;
  this.cj = (0,z.ej)();
};
z.g.lI = function(a, b, c) {
  var d = (0,z.ej)() - this.cj;
  c instanceof z.Mc || c instanceof Ys || ((0,z.Ok)("nav." + (b ? "success" : "failure")), (0,z.Pk)("client.nav.duration", d), b || (c ? ((0,z.mj)(c), 401 == c.status ? this.U.open({title:"Uh oh!", bodyHtml:(0,z.I)(xA), type:"signin", redirectUrl:a}) : 404 == c.status ? this.U.error("Ooops, that page does not exist anymore.  Sorry.") : this.U.error("Something went wrong. Try refreshing the page and trying again.")) : (this.U.error("Something went wrong. Try refreshing the page and trying again."), 
  (0,z.mj)(Error("Unknown navigation error")))), this.It = !0);
};
z.g.Me = function(a) {
  if ("IMG" == a.target.tagName) {
    var b = a.target.$K || 0;
    (0,z.Hk)(WD, {src:a.target.src, className:a.target.className, attempts:b});
    3 > b && (a.target.src = a.target.src, a.target.$K = b + 1);
  }
};
z.g.Dz = function() {
  !this.Ty && window.OB_fontLoaded && window.performance && window.performance.timing && ((0,z.Pk)("client.perf.fontLoaded", window.OB_fontLoaded - window.performance.timing.navigationStart), this.Ty = !0);
};
z.g.SI = function() {
};
z.g.JI = function(a, b, c) {
  this.Gy.push(c);
};
z.g.tu = function(a, b, c) {
  c instanceof wj ? (0,z.Ok)(ZD) : c instanceof vj ? (0,z.Ok)(XD) : (0,z.Ok)(YD);
};
z.g.Tk = (0,z.n)(207);
z.g.C = function() {
  (0,z.Od)(this.W);
  z.yA.w.C.call(this);
};
var BA = window.document.referrer;
AA.prototype.kp = null;
AA.prototype.Tt = !1;
AA.prototype.tK = function(a, b) {
  this.Tt = !0;
  var c = "";
  b && b.source && (c = b.source);
  this.Dh.push(Db(a, c));
};
AA.prototype.aG = function(a, b) {
  this.Tt = !1;
  var c = $a(this.Dh, function(b) {
    return a in b;
  }), c = this.Dh.splice(c, 1)[0];
  if (b) {
    var d = this.Dh.indexOf(this.xz);
    -1 !== d && this.Dh.splice(d, 1);
    this.xz = c;
    this.Dh.push(c);
    this.kp && (this.Vu = this.kp);
    this.kp = a;
  }
};
z.g = CA.prototype;
z.g.refresh = function() {
  var a = this.Kp || 2 == this.ea.sl();
  (0,z.Tc)(window.document.body, "app-loading", !!a);
};
z.g.Aa = function(a) {
  this.rn();
  (0,z.Bc)(a, this.At, this);
};
z.g.rn = function() {
  this.Kp++;
  this.refresh();
};
z.g.At = function() {
  this.Kp--;
  this.refresh();
};
z.g.$F = function() {
  this.Kp = 0;
  this.refresh();
};
(0,z.p)(z.DA, z.Oj);
var FA = 1E3;
z.DA.prototype.H = function() {
  z.DA.w.H.call(this);
  this.ma = new z.vc;
  (0,z.r)(this.ma, this.Ob, this);
  this.UF.forEach(function(a) {
    this.qa(a, this.FF, this.uG);
    this.qa(a, this.kF, this.oG);
  }, this);
};
z.DA.prototype.oG = function() {
  this.DA.cancel();
};
z.DA.prototype.TJ = function() {
  this.ma.Ca(!0);
};
z.DA.prototype.uG = function(a) {
  var b = a.currentTarget;
  (a = a.relatedTarget) && (0,z.Ud)(b, a) || this.DA();
};
z.g = z.GA.prototype;
z.g.enable = function() {
  this.qj || z.cD || (this.xt = (0,z.Q)(window.document, "mouseover", this.Yy, this), this.wt = (0,z.Q)(window.document, z.HC, this.Yy, this), this.N = window.document.createElement("div"), window.document.body.appendChild(this.N), this.qj = !0);
};
z.g.disable = (0,z.n)(209);
z.g.J = function(a) {
  return this.N.querySelector(a);
};
z.g.Mj = function(a) {
  return this.N ? (0,z.fb)(this.N.querySelectorAll(a)) : [];
};
z.g.eg = function(a) {
  return'\x3cdiv class\x3d"tooltip-inner"\x3e' + ("link" == a.type ? '\x3ca href\x3d"' + (0,z.O)((0,z.P)(a.Ar)) + '" target\x3d"_blank"\x3e' + (0,z.N)(a.Ar) + "\x3c/a\x3e" : "cite" == a.type && a.cite ? '\x3ccite class\x3d"tooltip-cite"\x3e' + (0,z.N)(a.cite) + "\x3c/cite\x3e“" + (0,z.N)(a.Ar) + "”" : (0,z.N)(a.Ar)) + '\x3c/div\x3e\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e';
};
z.g.Yy = function(a) {
  var b;
  a: {
    for (b = a.target;b && b !== this.xi;b = b.parentNode) {
      if (b.getAttribute && b.getAttribute("data-tooltip")) {
        break a;
      }
    }
    b = null;
  }
  if (b) {
    a.preventDefault();
    var c = b.getAttribute("data-tooltip-position") || "top", d = b.getAttribute("data-tooltip"), e = b.getAttribute("data-tooltip-type"), f = b.getAttribute("data-tooltip-cite"), h = "link" == e;
    d != this.ht && (this.N.innerHTML = this.eg({Ar:d, type:e, cite:f}), this.ht = d);
    this.xi = b;
    (0,z.JA)(this, c, b);
    (0,z.Tc)(this.N, "tooltip-link", h);
    (0,z.ci)(this.Df);
    (0,z.ad)(this.bf);
    this.bf = new z.DA(a.type, [this.N, this.xi]);
    this.bf.H();
    (0,z.r)(this.bf.ma.Bb(), this.remove, this);
  }
};
z.g.remove = function() {
  var a = this.N;
  (0,z.Pc)(a, this.Yk) && ((0,z.ad)(this.bf), this.bf = null, (0,z.u)(a, this.Yk), (0,z.ci)(this.Df), this.Df = (0,z.Q)(a, z.Qo, function() {
    a.style.display = "none";
    (0,z.ci)(this.Df);
  }, this), this.xi = null);
};
(0,z.p)(z.LA, z.GA);
z.g = z.LA.prototype;
z.g.aa = function() {
  return this.N;
};
z.g.enable = function() {
  this.qj || (this.qj = !0);
};
z.g.disable = (0,z.n)(208);
z.g.rG = function(a) {
  (0,z.Ud)(this.N, a.target) || this.remove();
};
z.g.$G = function(a) {
  (0,z.Ud)(this.N, a.target) || this.remove();
};
z.g.cz = function() {
  var a = this.xi;
  this.remove();
  (0,z.MA)(this, a, a.getAttribute("data-popover"));
};
z.g.remove = function() {
  var a = this.N;
  a && (0,z.Pc)(a, this.Yk) && ((0,z.u)(a, this.Yk), (0,z.ci)(this.Df), this.Df = (0,z.Q)(a, z.Qo, function() {
    a.style.visibility = "hidden";
    (0,z.ci)(this.Df);
  }, this), (0,z.ci)(this.qp), (0,z.ci)(this.rp), this.rp = this.qp = this.xi = null, this.Ba.ya("resize-end", this.cz, this), this.ma.Ca(!0), this.ma = null);
};
z.g.createElement = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = "popover popover-" + a;
  d.innerHTML = Qp({JB:b, Yw:c || ""});
  return d;
};
var LH;
z.gB = !z.ld || kd(9);
LH = z.ld && !(0,z.hd)("9");
!z.ce || (0,z.hd)("528");
z.Re && (0,z.hd)("1.9b") || z.ld && (0,z.hd)("8") || z.Se && (0,z.hd)("9.5") || z.ce && (0,z.hd)("528");
z.Re && !(0,z.hd)("8") || z.ld && (0,z.hd)("9");
z.OA.prototype.C = function() {
};
z.OA.prototype.Ob = function() {
};
z.OA.prototype.stopPropagation = function() {
  this.Lj = !0;
};
z.OA.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.FD = !1;
};
(0,z.p)(z.PA, z.OA);
z.g = z.PA.prototype;
z.g.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (z.Re) {
      var e;
      a: {
        try {
          If(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = z.ce || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = z.ce || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.qf = a;
  a.defaultPrevented && this.preventDefault();
};
z.g.stopPropagation = function() {
  z.PA.w.stopPropagation.call(this);
  this.qf.stopPropagation ? this.qf.stopPropagation() : this.qf.cancelBubble = !0;
};
z.g.preventDefault = function() {
  z.PA.w.preventDefault.call(this);
  var a = this.qf;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, LH) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
z.g.rw = (0,z.n)(210);
z.g.C = function() {
};
var TA;
z.RA = "closure_listenable_" + (1E6 * Math.random() | 0);
TA = 0;
z.VA.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.ob[f];
  a || (a = this.ob[f] = [], this.Lo++);
  var h = (0,z.XA)(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.qr = !1)) : (b = new SA(b, this.src, f, !!d, e), b.qr = c, a.push(b));
  return b;
};
z.VA.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.ob)) {
    return!1;
  }
  var e = this.ob[a];
  b = (0,z.XA)(e, b, c, d);
  return-1 < b ? ((0,z.UA)(e[b]), db.splice.call(e, b, 1), 0 == e.length && (delete this.ob[a], this.Lo--), !0) : !1;
};
z.VA.prototype.Oj = (0,z.n)(211);
z.VA.prototype.pl = (0,z.n)(212);
var cB;
z.bB = "closure_lm_" + (1E6 * Math.random() | 0);
cB = {};
z.$A = 0;
z.MH = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
Mb(function(a) {
  z.fB = a(z.fB);
});
L("m", "post_recommended", function(a) {
  return "recommended " + (0,z.N)(a.post.title);
});
L("m", "post_cross_posted", function(a) {
  return "added " + (0,z.N)(a.post.title) + " to " + (0,z.N)(a.collection.name);
});
L("m", "collection_cross_posted", function(a) {
  return "added " + (0,z.N)(a.post.title) + " to " + (0,z.N)(a.collection.name);
});
L("m", "collection_post_submitted", function(a) {
  return "submitted " + (0,z.N)(a.post.title) + " to " + (0,z.N)(a.collection.name);
});
L("m", "collection_post_approved", function(a) {
  return "approved " + (0,z.N)(a.post.title) + " to be added to " + (0,z.N)(a.collection.name);
});
L("m", "collection_editor_added", function(a) {
  return "added you as an editor to the collection " + (0,z.N)(a.collection.name);
});
L("m", "post_collaborated_published", function(a) {
  return "published " + (0,z.N)(a.post.title) + ", which you collaborated on";
});
L("m", "follow_up_created", function(a) {
  return "suggested further reading for " + (0,z.N)(a.post.title);
});
L("m", "follow_up_published", function(a) {
  return "published your suggested further reading for " + (0,z.N)(a.post.title);
});
L("m", "post_added_as_follow_up", function(a) {
  return "added " + (a.followUp.title ? (0,z.N)(a.followUp.title) : "Untitled") + " as further reading for " + (0,z.N)(a.post.title);
});
L("m", "post_noted", function(a) {
  return "left a new note on " + (0,z.N)(a.post.title);
});
L("m", "post_recommend_noted", function(a) {
  return "recommended " + (0,z.N)(a.post.title) + " and said “" + (0,z.N)(a.note.content) + "”";
});
L("m", "note_replied", function(a) {
  return "replied to your note on " + (0,z.N)(a.post.title);
});
L("m", "post_note_replied", function(a) {
  return "replied to a note on " + (0,z.N)(a.post.title);
});
L("m", "note_published", function(a) {
  return "published your note on " + (0,z.N)(a.post.title);
});
L("m", "mention_in_note", function(a) {
  return "mentioned you in a note on " + (0,z.N)(a.post.title);
});
L("m", "mention_in_note_update", function(a) {
  return "updated a note mentioning you on " + (0,z.N)(a.post.title);
});
L("m", "mention_in_note_reply", function(a) {
  return "mentioned you in a note on " + (0,z.N)(a.post.title);
});
L("m", "mention_in_note_reply_update", function(a) {
  return "updated a reply mentioning you on " + (0,z.N)(a.post.title);
});
L("m", "collection_followed_milestone", function(a) {
  return "Your collection " + (0,z.N)(a.collection.name) + " has reached " + (0,z.N)(a.milestoneArg) + " followers";
});
L("m", "post_recommended_milestone", function(a) {
  return "Your story " + (0,z.N)(a.post.title) + " has reached " + (0,z.N)(a.milestoneArg) + " recommends";
});
L("m", "post_published_by_someone_you_follow", function(a) {
  return "published a new story " + (0,z.N)(a.post.title);
});
z.g = kB.prototype;
z.g.dk = function() {
  this.wK.D("change", this.XI, this);
  (0,z.Gi)(this.W).F("view-actors", this.mB, this);
  (0,z.Bi)("notifications-more", this.lK, this).F("view-actors", this.mB, this);
};
z.g.Bd = function(a) {
  a = (0,z.yg)(hB, {fD:a.activityRollupItems});
  this.W.appendChild(a);
  this.Tp = this.W.getElementsByClassName("notifications-list")[0];
};
z.g.lK = function() {
  (0,z.s)((0,z.r)((0,z.r)(this.ea.get(oB.Q() + "?olderThan\x3d" + this.Tz + "\x26minCount\x3d100", {na:!0, background:!0}), this.LJ, this), this.KA, this), z.Gj);
};
z.g.LJ = function(a) {
  var b = a.activityRollupItems;
  a = this.W.querySelector(".notifications-show-more");
  if (0 == b.length) {
    a.parentNode.removeChild(a);
  } else {
    var b = (0,z.Rc)(b, function(a) {
      return!(a.rollupRangeKey in this.Ms);
    }.bind(this)), c = "", d = 0;
    for (;d < b.length;d++) {
      c += (0,z.I)(iB, {Da:b[d]});
    }
    b = (0,z.Id)(c);
    this.Tp.insertBefore(b, a);
  }
};
z.g.KA = function(a) {
  a = a.activityRollupItems;
  0 < a.length && (this.Tz = a[a.length - 1].lastOccurredAt);
  for (var b = 0;b < a.length;b++) {
    this.Ms[a[b].rollupRangeKey] = a[b].actors;
  }
};
z.g.mB = function(a) {
  var b = this.Ms[a.value];
  this.U.open({title:a.target.getAttribute("dialog-title"), bodyHtml:(0,z.I)(jB, {actors:b}), type:"scroller"});
};
z.g.XI = function(a, b) {
  var c = (0,z.qk)(b, "newActivityCount");
  this.Tp && ((0,z.Od)(this.Tp), lB(this));
  (0,z.Tc)(window.document.body, "site-nav-new-activity", 0 < c);
};
z.g = pB.prototype;
z.g.aq = !1;
z.g.dk = function() {
  var a = z.cD ? "touchend" : "click", a = dD ? "MSPointerDown" : a;
  (0,z.Q)(this.Ch, "keydown", this.FG, this);
  (0,z.Q)(this.Ch, a, this.sG, this);
  (0,z.Q)(this.Ch, "mouseover", this.Hq, this);
  (0,z.Q)(this.UA, a, this.$s, this);
  this.ia.D(Sn, this.su, this);
  this.oe.D("httperror", this.tu, this);
  (0,z.Bi)("open-new-post", this.iu, this).F("open-nav", this.oJ, this);
};
z.g.sG = function(a) {
  a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (this.wk = !!(0,z.Zd)(a.target, null, "site-nav-list-item-btn"));
};
z.g.iu = function(a) {
  (0,z.Hk)(pD, {source:(0,z.Zd)(a.target, null, "site-nav") ? "site-nav" : (0,z.Zd)(a.target, null, "cover-home") ? "home-cover" : null});
  this.ia.navigate("p/new-post");
};
z.g.FG = function(a) {
  var b = this.Ch.getElementsByClassName("navigable-list-item");
  40 == a.keyCode ? (this.og = Math.min(++this.og, b.length - 1), qB(b[this.og])) : 38 == a.keyCode ? (this.og = Math.max(--this.og, 0), qB(b[this.og])) : this.og && 13 == a.keyCode ? (b = b[this.og].querySelector("[data-action]")) ? (a = b.getAttribute("data-action"), this.wk = !0, Fi && Ri({Td:a, value:void 0, target:window.document.body, event:{}, Xn:!1})) : (a = a.target.querySelector("[href]")) && this.ia.navigate(a.pathname.substr(1)) : 9 == a.keyCode ? (this.Hq(), this.wk = !1) : 27 == a.keyCode && 
  (this.Hq(), this.wk = !1, this.$s());
};
z.g.Hq = function() {
  this.Ch.blur();
  this.og = 0;
};
z.g.oJ = function(a) {
  a.preventDefault && (a.preventDefault(), a.stopPropagation());
  this.Hq();
  this.aq = !0;
  (0,z.t)(window.document.body, "site-nav-transition");
  (0,z.u)(window.document.body, "site-nav-new-activity");
  if (a = this.ia.rb.J(".canvas-renderer")) {
    a.style.top = (0,z.qi)(window.document.body).top + "px";
  }
  (0,z.H)("isAuthenticated") && this.oe.post(wH.Q(), null, {background:!0});
  (0,z.t)(window.document.body, "site-nav-drawer-open");
  this.Ch.focus();
};
z.g.$s = function(a) {
  function b(a) {
    if (!a || a.target === c) {
      e && (0,window.clearTimeout)(e);
      (0,z.ci)(d);
      !this.aq && ((0,z.u)(window.document.body, "site-nav-transition"), a = this.ia.rb.J(".canvas-renderer")) && (a.style.top = "");
      a = (0,z.fb)(window.document.getElementsByClassName("notifications-list-item-new"));
      for (var b = 0;b < a.length;b++) {
        a[b].className = "notifications-list-item";
      }
    }
  }
  if (!this.wk && this.aq) {
    var c = window.document.getElementById("container"), d = (0,z.Q)(c, z.Qo, b, this), e = (0,window.setTimeout)(b.bind(this), 500);
    (0,z.u)(window.document.body, "site-nav-drawer-open");
    this.aq = !1;
    a && a.preventDefault();
  }
};
z.g.su = function() {
  this.wk = !1;
  this.$s();
  window.document.body.removeChild(this.Ch);
  window.document.body.insertBefore(this.Ch, this.UA);
};
z.g.tu = function(a, b) {
  b.background && 401 == a && this.Oa.H("You’ve been logged out. Please log in.", "error");
};
z.g = rB.prototype;
z.g.WK = function(a) {
  !(a = a.event.target) || "IMG" != a.tagName || a.width >= window.innerWidth - 80 || (sB(this, !0), this.om = new tB(a, this.ca), vB(this.om), this.Za = (0,z.Un)((0,z.Ks)(this.ca.get("app"))), this.wa.push((0,z.Q)(window, "scroll", (0,z.Nn)(100, this.aK, this), this)), this.wa.push((0,z.Q)(window.document, "click", this.wF, this, !0)), this.wa.push((0,z.Q)(window.document, "keyup", this.kH, this)), this.wa.push((0,z.Q)(window.document, "touchstart", this.GK, this)));
};
z.g.AH = function(a, b) {
  function c(a) {
    var b = window.document.createElement("img");
    b.src = uB(a);
    this.Mu = (0,z.Q)(b, "load", function() {
      if (a.width === a.height && !a.getAttribute("data-width")) {
        var c = Math.min(b.width, b.height);
        a.setAttribute("data-width", c);
        a.setAttribute("data-height", c);
        return b.src = uB(a);
      }
      a.src = b.src;
      a.getAttribute("data-width") || (a.setAttribute("data-width", b.width), a.setAttribute("data-height", b.height));
      d.call(this);
    }, this);
  }
  function d() {
    if (this.Lu.length) {
      var a = this.Lu.shift();
      c.call(this, a);
    }
  }
  b && (sB(this, !0), this.Mu && (0,z.ci)(this.Mu), this.Lu = Array.prototype.slice.call((0,z.Ks)(this.ca.get("app")).Mj('[data-action\x3d"zoom"]')), d.call(this));
};
z.g.aK = function() {
  var a = (0,z.qi)(this.Za).top;
  null === this.Qt && (this.Qt = a);
  40 <= Math.abs(this.Qt - a) && sB(this);
};
z.g.kH = function(a) {
  27 == a.keyCode && sB(this);
};
z.g.wF = function(a) {
  a.stopPropagation();
  a.preventDefault();
  sB(this);
};
z.g.GK = function(a) {
  this.kz = a.touches[0].pageY;
  this.bB = (0,z.Q)(a.target, "touchmove", this.FK, this);
};
z.g.FK = function(a) {
  10 < Math.abs(a.touches[0].pageY - this.kz) && (sB(this), (0,z.ci)(this.bB));
};
(0,z.p)(tB, z.v);
tB.prototype.close = function(a) {
  (0,z.u)(window.document.body, "zoom-overlay-open");
  (0,z.t)(window.document.body, "zoom-overlay-transitioning");
  (0,z.vf)(this.Vb, "transform", "");
  this.Dd && (0,z.vf)(this.Dd, "transform", "");
  z.ld && !(0,z.hd)(10) || a ? this.Ob() : this.Yq = (0,z.Q)(this.Vb, z.Qo, this.Ob, this);
};
tB.prototype.C = function() {
  this.ma.Mc || this.ma.cancel();
  this.bu && (0,z.ci)(this.bu);
  this.Yq && (0,z.ci)(this.Yq);
  this.Dd && this.Dd.parentNode && ((0,z.u)(this.Vb, "zoom-img"), this.Dd.parentNode.replaceChild(this.Vb, this.Dd), (0,z.u)(window.document.body, "zoom-overlay-transitioning"));
  tB.w.C.call(this);
};
(0,z.p)(z.GB, z.Mj);
z.g = z.GB.prototype;
z.g.C = function() {
  this.vy();
  z.GB.w.C.call(this);
};
z.g.getMetadata = function() {
  return this.Lf.ja();
};
z.g.start = function() {
  if (this.gz) {
    throw Error("An upload can only be started once.");
  }
  this.gz = !0;
  this.getFile() && (0,z.IB)(this);
  return(0,z.Bc)((0,z.r)(this.QD(), this.kJ, this), this.vy, this);
};
z.g.getFile = function() {
  return null;
};
z.g.nH = function(a) {
  return(0,z.r)(Kz(this.ef, a), function(a) {
    this.Lf.em(a.width);
    this.Lf.dm(a.height);
    return this.Lf;
  }, this);
};
z.g.kJ = function(a) {
  this.Lf.jc(a);
  var b = 0.8;
  this.xq = window.setInterval(function() {
    this.S("progress", b);
    b = Math.pow(b, 0.9);
  }.bind(this), 100);
  a = this.$q(a);
  a = this.ef.load(a);
  this.Qk && (0,z.Cc)(a, this.Qk);
  return(0,z.r)(a, function() {
    return this.getMetadata();
  }, this);
};
z.g.vy = function() {
  this.xq && ((0,window.clearInterval)(this.xq), this.xq = null);
  if (this.Bg) {
    var a = this.Qk.Bb();
    (0,z.r)(this.Bg.Bb(), function(b) {
      return(0,z.Bc)(a, function() {
        (0,z.On)(function() {
          window.URL.revokeObjectURL(b);
        });
      }, this);
    }, this);
    this.Bg.Mc || this.Bg.cancel();
  }
  this.Qk = this.Bg = null;
};
(0,z.p)(z.JB, z.GB);
z.g = z.JB.prototype;
z.g.Vc = null;
z.g.C = function() {
  this.Vc && this.Vc.abort();
  this.ma.Mc || this.ma.cancel();
  this.up = this.ma = null;
  z.JB.w.C.call(this);
};
z.g.getFile = function() {
  return this.up;
};
z.g.QD = function() {
  if (this.up.size > 1048576 * Number((0,z.H)("variants.max_upload_size_mb"))) {
    var a = Error("File is too big");
    a.Kw = 413;
    this.ma.be(a);
    return this.ma.Bb();
  }
  a = new window.FormData;
  a.append("uploadedFile", this.up);
  this.Vc = pj();
  (0,z.Q)(this.Vc.upload, "progress", this.iq, this);
  (0,z.Q)(this.Vc, "load", this.bn, this);
  (0,z.Q)(this.Vc, "error", this.Me, this);
  (0,z.Q)(this.Vc, "timeout", this.Me, this);
  (0,z.Q)(this.Vc, "abort", this.FH, this);
  this.Vc.open("POST", "/_/upload");
  this.Vc.setRequestHeader("X-Obvious-CID", "web");
  this.Vc.setRequestHeader("X-XSRF-Token", "1");
  this.Vc.send(a);
  (0,z.Bc)(this.ma, function() {
    this.Vc = null;
  }, this);
  return this.ma.Bb();
};
z.g.iq = function(a) {
  var b = a.lengthComputable ? a.total : 0;
  this.S("progress", 0.8 * (b ? a.loaded / b : 0), this);
};
z.g.bn = function() {
  if (4 == this.Vc.readyState) {
    if (200 == this.Vc.status) {
      var a = uA(this.Vc.responseText);
      try {
        var b = window.JSON.parse(a);
        this.ma.Ca(b.payload.value.fileId);
      } catch (c) {
        this.ma.be(c);
      }
    } else {
      a = Error("Upload error"), a.Kw = this.Vc.status, this.ma.be(a);
    }
  }
};
z.g.Me = function(a) {
  this.ma.be(a || Error("Unknown upload error"));
};
z.g.FH = function() {
  this.ma.Mc || this.ma.cancel();
};
(0,z.p)(z.KB, z.v);
z.KB.prototype.C = function() {
  z.KB.w.C.call(this);
};
z.KB.prototype.po = (0,z.n)(218);
z.KB.prototype.Tg = (0,z.n)(213);
z.KB.prototype.upload = function(a) {
  if (!z.eD) {
    throw Error("Direct file uploads are not supported");
  }
  a = null == a.length ? [a] : (0,z.fb)(a);
  !(0,z.H)("variants.upload_multiple_files") && a.length && (a.length = 1);
  return a.map(function(a) {
    return new z.JB(this.ca, a);
  }, this);
};
(0,z.p)(LB, z.Mj);
var OB = "track";
z.g = LB.prototype;
z.g.uz = null;
z.g.C = function() {
  (0,window.clearTimeout)(this.Fh);
  this.Ba.ya("scroll", this.Ne, this);
  LB.w.C.call(this);
};
z.g.Ri = function() {
  if (this.Za = this.ia.rb && (0,z.Un)()) {
    this.nB = (0,z.ej)();
  }
};
z.g.Ne = function() {
  (0,window.clearTimeout)(this.Fh);
  NB(this);
  MB(this, !0);
};
z.g.ZI = function() {
  NB(this);
  MB(this);
};
QB.prototype.Ri = function(a, b, c) {
  if (b) {
    for (a = c.Mj("[data-load-img]"), b = 0;b < a.length;b++) {
      (c = a[b].getAttribute("data-load-img")) && (c = a[b].querySelector(c)) && (c = "IMG" != c.tagName ? c.style.backgroundImage && c.style.backgroundImage.match(/url\(['"]?([^\)'"]*)/)[1] : c.src) && RB(c, a[b]);
    }
  }
};
(function() {
  function a() {
    var a = Hs(Js(Js(Is(Is(Is(Is(Is(Is(Is(Is(Is(l.get("app"), /^utm_/), /^km_/), "q"), "kme"), "kmi"), "source"), "interstitial"), /^fb_/), /^action_/), /^\/r\/?$/), /^\/feed\/.*/), c());
    a.D(Sn, function(a, b) {
      e && (0,z.Vc)(window.document.body, "js-loading", "js-loaded");
      b && (e || Ik(["_trackPageview", a]), Jk(["record", "pageview", {path:a}]));
    });
    new QB(l);
    (0,z.H)("variants.enable_cover_flow") && new kk(l);
    var d = window.location.pathname + window.location.hash, e = !0, h = b();
    (0,z.s)((0,z.r)((0,z.Bc)(a.init(d, h), function() {
      e = !1;
    }), function() {
      f();
    }), function() {
    });
  }
  function b() {
    var a = window.location.search;
    if (!a) {
      return{};
    }
    "?" == a.charAt(0) && (a = a.substr(1));
    for (var a = new Tf(a), b = a.ue(), c = {}, d = 0;d < b.length;d++) {
      c[b[d]] = a.get(b[d]);
    }
    return c;
  }
  function c() {
    var a = [qw(UF, Oo), qw(VF, Oo), qw(sF, cq), qw(WF, "BestOfScreen"), qw(EH, tq), qw(cG, z.Mo), qw(oz, z.Mo), qw(z.dG, "ProfileScreen"), qw(eG, "ProfileScreen"), qw(fG, "ProfileScreen"), qw(gG, "ProfileScreen"), qw(hG, "ProfileScreen"), qw(iG, "DraftsScreen"), qw(kG, "DraftsScreen"), qw(jG, "DraftsScreen"), qw(lG, "DraftsScreen"), qw(z.mG, "ExportScreen"), qw(nG, "ReadingListScreen"), qw(z.pG, "SettingsScreen"), qw(qG, "EmailSettingsScreen"), qw(sG, "StatsScreen"), qw(tG, "StatsScreen"), qw(BG, 
    "EspnScreen"), qw(DG, "StartWritingScreen"), qw(My, "VerificationScreen"), qw(z.RG, "RevertCandidateScreen"), qw(FG, z.Mo), qw(EG, z.Mo)];
    a.push(qw(YG, "ReferrersScreen"));
    (0,z.H)("variants.enable_discovery_homepage") ? (a.push(qw(z.SF, "SocialActivityScreen")), a.push(qw(TF, Oo)), a.push(qw(oG, "SocialActivityScreen"))) : ((0,z.H)("variants.enable_social_activity_feed") && a.push(qw(oG, "SocialActivityScreen")), a.push(qw(z.SF, Oo)));
    a.push(qw(z.uG, "CollectionSettingsScreen"));
    a.push(qw(wG, "CollectionSettingsScreen"));
    a.push(qw(z.vG, Fy));
    a.push(qw(xG, Fy));
    a.push(qw(yG, Fy));
    a.push(qw(z.xx, ox), qw(z.Pq, ox), qw(aG, ox));
    a.push(qw(z.XF, "PostEditScreen"), qw(z.YF, "PostEditScreen"), qw(z.zG, "PostEditScreen"), qw(z.AG, "PostEditScreen"), qw(bG, "PostEditScreen"));
    var b = new nw;
    a.forEach(function(a) {
      b.add(a);
    });
    return b;
  }
  function d(a) {
    l.get("app").navigate(a.value);
  }
  function e() {
    var a = Math.round(window.document.body.clientWidth), b = window.devicePixelRatio || 1;
    YB.set("sz", String(a), 604800, "/");
    YB.set("pr", String(b), 604800, "/");
  }
  function f() {
    var a = window.location.pathname;
    if ((0,z.H)("isAuthenticated") && !(0,z.H)("useragent.isMobile") && !(0,z.H)("isCurrentUserVerified") && (0,z.H)("currentUserHasUnverifiedEmail") && a != My.path && a != BG.path && a != z.CG.path && a != DG.path && a != EG.path) {
      (0,z.Hk)($D, {});
      var b = l.get("butter-bar");
      b.H('Complete your account registration. \x3cbutton class\x3d"btn btn-chromeless link link-butter" title\x3d"Send verification email" data-action\x3d"butter-bar-action"\x3eSend verification email.\x3c/button\x3e', {type:"success", Mx:-1});
      Sz(b, function() {
        (0,z.Hk)(aE, {});
        (0,z.s)((0,z.r)(l.get("request").post(My.Q(), {}, {na:!0}), function(a) {
          b.ka();
          b.H(Fp({email:a.value}), "success");
          Sz(b, function() {
            l.get("app").navigate("me/settings");
          });
        }), (0,z.Aq)(l.get("dialog"), Kp()));
      }, this);
    }
  }
  zg();
  var h = String((0,z.H)("buildLabel"));
  (function() {
    z.ld ? Bj() : (Rb = new Lj, Cj(), Dj(), Ej(), Fj(), Qb());
    Ij.push(z.Mc);
    Ij.push(uj);
    Ij.push("domIsDirty");
    xj("user", (0,z.H)("currentUser.userId"));
    yj.build = h;
    yj.userAgent = window.navigator.userAgent;
    xj("location", {toString:function() {
      return window.document.location.href;
    }});
  })();
  var k = PB(), l = new gr(k, "app");
  window.__obv = l;
  for (zj(new hj(l, "/_/oh-noes", 5E3, 10));Kj.length;) {
    jj(Aj, Kj.shift());
  }
  Rk(new hj(l, "/_/stat", 5E3, window.Infinity));
  Cz();
  (function(a) {
    var b = a.get("request");
    b.D("versionupdate", function() {
      window.location.reload(!0);
    });
    b.D("buildchange", function() {
      a.get("app").xy = !1;
    });
    return b;
  })(l);
  (function(a) {
    a = new Zq(a);
    var b = window.PLOVR_MODULE_URIS, c = window.PLOVR_MODULE_INFO;
    a.Gz = c;
    for (var d in c) {
      0 === c[d].length && (a.Jp[d] = !0);
    }
    0 === b.base.indexOf("fingerprint:") && (b = (0,z.H)("moduleUrls"));
    a.Hz = b;
  })(k);
  (function() {
    Lk("userId", (0,z.H)("currentUser.userId"));
    Lk("referrer", function() {
      var a = l.get("referrer-tracker"), b = a.Vu;
      a.Tt && (b = a.kp || a.Vu);
      0 !== a.Dh.length && (a = a.Dh.slice(-1)[0], a = a[Object.keys(a)[0]], b = 0 === a.length ? b : b + (-1 == b.indexOf("?") ? "?" : "\x26") + "source\x3d" + a);
      return b;
    });
    Lk("location", function() {
      return window.document.location.href;
    });
  })();
  l.bd();
  z.ea._PLOVR_TEST || (a(), (new dz(window.document.body, l)).H(), (new Gy(window.document.body, l)).H(), (new Hy(window.document.body, l)).H(), (new Az(window.document.body, l)).H(), (new Bz(window.document.body, l)).H(), (new xz(window.document.body, l)).H(), (new yz(window.document.body, l)).H(), (new Jy(window.document.body)).H(), (new Ky(window.document.body, l)).H(), (new uz(window.document.body, l)).H(), (new zz(window.document.body, l)).H(), (0,z.Bi)("navigate", d), e(), l.get("dom-monitor").D("resize-end", 
  e), YB.set("tz", String((new Date).getTimezoneOffset()), 604800, "/"));
})();
})(_mdm);
