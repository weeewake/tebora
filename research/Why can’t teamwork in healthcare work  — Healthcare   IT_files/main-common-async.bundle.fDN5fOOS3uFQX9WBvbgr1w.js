(function(z){
var BJ;
var tJ;
var NH = function(a) {
  a.Jf && (0,z.Od)(a.Jf);
  a.Jf = null;
  a.Ic && a.Ic.close();
  a.Ic = null;
};
var OH = function() {
  var a = window.document.createElement("input");
  a.type = "file";
  a.name = "uploadedFile";
  a.value = "";
  a.style.position = "absolute";
  a.style.left = "-9999px";
  a.style.top = "-9999px";
  return a;
};
z.PH = function(a) {
  return a.innerText || a.textContent;
};
var QH = function(a) {
  var b, c = !1;
  if (a.createRange) {
    try {
      b = a.createRange();
    } catch (d) {
      return null;
    }
  } else {
    if (a.rangeCount) {
      if (1 < a.rangeCount) {
        c = new z.kf;
        b = 0;
        for (var e = a.rangeCount;b < e;b++) {
          c.Rf.push(a.getRangeAt(b));
        }
        return c;
      }
      b = a.getRangeAt(0);
      c = (0,z.Xe)(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
    } else {
      return null;
    }
  }
  return(a = b) && a.addElement ? (0,z.df)(a) : (0,z.Ue)(a, c);
};
var RH = function(a) {
  z.v.call(this);
  this.ca = a;
  this.U = a.get("dialog");
  this.ma = (0,z.Bc)(new z.vc, function() {
    this.ma = null;
  }, this);
  this.Lm = !1;
  this.ok = "";
};
var SH = function(a, b, c) {
  z.GB.call(this, a);
  this.ok = b;
  this.Ic = c;
  this.ma = new z.vc;
};
var TH = function(a) {
  z.v.call(this);
  this.ca = a;
  this.ma = (0,z.Bc)(new z.vc, function() {
    (0,z.ad)(this);
  }, this);
  this.Fa = OH();
  this.Lm = !1;
};
z.UH = function(a, b) {
  return a.Pi[a.Sm[b]];
};
z.VH = function(a, b) {
  return b in a.Sm && a.Sm[b] in a.Pi;
};
var WH = function(a) {
  return 5 == a || 4 == a || 11 == a;
};
var XH = function(a) {
  return'\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + (0,z.O)(a.IL) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinner-overlay"\x3e\x3c/div\x3e\x3c/div\x3e';
};
var YH = function(a, b, c) {
  var d = (0,z.qa)(c);
  if (!b[d]) {
    b[d] = !0;
    for (var e in c.De) {
      var d = c.De[e], f = a.De[e];
      f || (f = a.De[e] = new z.dh(a), f.hi = !1, f.ye = !1);
      f.hi = f.hi || d.hi;
      f.ye = f.ye || d.ye;
      for (var h in d.attributes) {
        var k = d.attributes[h];
        if (!0 === k || !0 === f.attributes[h]) {
          f.attributes[h] = !0;
        } else {
          if ((0,z.ia)(k)) {
            var l = f.attributes[h];
            (0,z.ia)(l) || (l = f.attributes[h] = []);
            (0,z.gb)(l, k);
          }
        }
      }
      YH(a, b, d.cd);
    }
  }
};
z.ZH = function(a) {
  return(a = (0,z.te)(a || window)) && QH(a);
};
var $H = function(a, b, c) {
  var d;
  d = d || (0,z.td)(a.parentElement());
  var e;
  1 != b.nodeType && (e = !0, b = d.Ac("DIV", null, b));
  a.collapse(c);
  c = d || (0,z.td)(a.parentElement());
  var f, h = f = b.id;
  f || (f = b.id = "goog_" + z.SB++);
  a.pasteHTML(b.outerHTML);
  (b = c.aa(f)) && (h || b.removeAttribute("id"));
  e && (a = b.firstChild, d.EL(b), b = a);
  return b;
};
z.aI = function(a, b, c) {
  if ((0,z.ka)(a)) {
    try {
      (0,z.rb)(a, b, c);
    } catch (d) {
      if (d !== z.fe) {
        throw d;
      }
    }
  } else {
    a = (0,z.ee)(a);
    try {
      for (;;) {
        b.call(c, a.next(), void 0, a);
      }
    } catch (e) {
      if (e !== z.fe) {
        throw e;
      }
    }
  }
};
var bI = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return'"';
      default:
        if ("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if (!(0,window.isNaN)(d)) {
            return String.fromCharCode(d);
          }
        }
        return a;
    }
  });
};
var cI = function(a) {
  var b = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'}, c;
  c = window.document.createElement("div");
  return a.replace(dI, function(a, e) {
    var f = b[a];
    if (f) {
      return f;
    }
    if ("#" == e.charAt(0)) {
      var h = Number("0" + e.substr(1));
      (0,window.isNaN)(h) || (f = String.fromCharCode(h));
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f;
  });
};
z.$ = function(a, b) {
  return z.aa[a] = b;
};
z.eI = function(a) {
  (0,z.IB)(a);
  return a.Bg.Bb();
};
z.fI = function(a, b) {
  if ((0,z.VH)(a, b)) {
    return(0,z.Ic)((0,z.UH)(a, b));
  }
  if (!a.Zp[b]) {
    var c = z.MG.Q({"*":[(0,window.encodeURIComponent)(b)]}, a.mG ? {frame:"true"} : void 0);
    a.Zp[b] = (0,z.r)((0,z.Bc)(a.ea.get(c, {na:!0}), function() {
      delete this.Zp[b];
    }, a), function(a) {
      a = (0,z.fl)(a.value, a.references);
      a = (0,z.dA)(this, a);
      this.Sm[b] = (0,z.pk)(a, "mediaResourceId");
      return a;
    }, a);
  }
  return a.Zp[b].Bb();
};
var gI = function(a, b) {
  var c = window.document.getElementById(a.Dp + (0,z.qa)(b));
  a.S("before-clear", b, c);
  c.innerHTML = (0,z.Uq)(a, b);
  a.S("after-draw", b, c);
};
z.hI = function(a, b) {
  a.As.cancel();
  var c = a.W;
  (0,z.t)(c, "highlight-menu-measure");
  var d = c.offsetWidth, e = b.left + b.width / 2 - d / 2, f = b.top + -6 - c.offsetHeight;
  e + d > window.document.body.clientWidth ? (e -= d / 2, (0,z.Vc)(c, "far-left", "far-right")) : 0 >= e ? (e += d / 2, (0,z.Vc)(c, "far-right", "far-left")) : (0,z.Sc)(c, ["far-left", "far-right"]);
  (0,z.Tc)(c, "flush-top", 0 > f);
  var f = Math.max(f, 0), d = 0, h = (0,z.pi)(c);
  h && (d = (0,z.qi)(h).top);
  c.style.left = Math.round(e) + "px";
  c.style.top = Math.round(f + d) + "px";
  (0,z.ui)(c);
  (0,z.Vc)(c, "highlight-menu-measure", "highlight-menu-active");
  a.br = !0;
  a.S("show");
};
z.iI = function(a) {
  a.br && ((0,z.Sc)(a.W, ["highlight-menu-active", "highlight-menu-linkmode"]), a.br = !1, a.S("hide"));
};
z.jI = function(a, b, c) {
  return a.ir(b, function() {
    return c;
  });
};
z.kI = function(a, b) {
  var c = a.Sa[b];
  if (!c) {
    throw Error('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.');
  }
  (0,z.r)(a.vt[b] || (0,z.Ic)(!0), function() {
    delete this.Sa[b];
    delete this.vt[b];
    this.Jp[b] = !0;
    c.Ca(!0);
  }, a);
};
z.lI = function(a, b, c) {
  c = Math.min(c, a.text.length);
  a.text = a.text.substring(0, c) + b + a.text.substring(c);
  a = a.Ab;
  for (var d = 0;d < a.length;d++) {
    var e = a[d];
    (3 != e.g() ? (0,z.Ng)(e) >= c : (0,z.Ng)(e) > c) && e.setEnd((0,z.Ng)(e) + b.length);
    0 !== (0,z.Mg)(e) && (0,z.Mg)(e) >= c && e.setStart((0,z.Mg)(e) + b.length);
  }
};
z.mI = function(a, b) {
  for (var c = a.Ab, d = 0;d < c.length;d++) {
    var e = c[d];
    if (e.g() == b.g() && ((0,z.Am)(b, (0,z.Mg)(e), !1) && e.setStart((0,z.Ng)(b)), (0,z.Am)(b, (0,z.Ng)(e), !0) && e.setEnd((0,z.Mg)(b)), (0,z.Am)(e, (0,z.Mg)(b), !1) && (0,z.Am)(e, (0,z.Ng)(b), !0))) {
      c = z.Ml.ub(z.Lg, z.Ml.Zc(e));
      c.setStart((0,z.Ng)(b));
      e.setEnd((0,z.Mg)(b));
      (0,z.xm)(a, c);
      break;
    }
  }
  (0,z.Gm)(a);
};
var nI = function(a, b, c, d) {
  a = a.Ab;
  for (var e = 0;e < a.length;e++) {
    var f = a[e];
    if (f.g() == b && (0,z.Mg)(f) < d && (0,z.Ng)(f) > c) {
      return!0;
    }
  }
  return!1;
};
z.oI = function(a) {
  return WH(a.type);
};
z.pI = function(a) {
  var b = a.metadata && a.metadata.$a();
  return 4 == a.type && !b;
};
var qI = function(a, b) {
  return 5 != a && 4 != a && 11 != a && (0,z.Ea)(b);
};
var rI = function(a, b) {
  a.Ei = b;
};
var sI = function(a, b) {
  var c = (0,z.hl)(a, b);
  return a.Sh(c);
};
var tI = function(a, b) {
  return new z.tg((0,z.hl)(a, b), (0,z.il)(a, b));
};
z.uI = function(a) {
  a.lt || (a.lt = new z.ok((0,z.H)("currentUser")));
  return a.lt;
};
var vI = function(a, b, c) {
  a = a.attributes[b];
  if (!0 === a) {
    return c;
  }
  if ((0,z.ia)(a)) {
    return "class" == b ? (c.match(/\S+/g) || []).filter((0,z.ya)(z.ab, a)).join(" ") : (0,z.ab)(a, c) ? c : null;
  }
  if (a instanceof RegExp) {
    for (var d = "";b = a.exec(c);) {
      d += b[0];
    }
    return d || null;
  }
  return null;
};
var wI = function() {
  var a = z.xI, b = new z.bh;
  (0,z.eh)(b);
  YH(b, {}, a);
  return b;
};
var yI = function(a, b, c, d) {
  return(0,z.We)(a, b, c, d);
};
z.zI = function(a) {
  a = a.te();
  return 1 == a.nodeType ? a : a.parentNode;
};
var AI = function(a) {
  return-1 != a.indexOf("\x26") ? "document" in z.ea ? cI(a) : bI(a) : a;
};
var BI = function(a) {
  return 1 == a.nodeType && !(0,z.Jd)(a);
};
var CI = function(a, b) {
  this.V = a;
  this.offset = b;
};
var DI = function(a) {
  var b = a.V.parentNode;
  return new CI(b, (0,z.bb)(b.childNodes, a.V));
};
var EI = function(a) {
  return a.length || a.childNodes.length;
};
var FI = function(a, b, c, d) {
  for (;1 == a.nodeType;) {
    var e = a.childNodes[b];
    if (e || a.lastChild) {
      if (e) {
        var f = e.previousSibling;
        if (c && f) {
          if (d && BI(f)) {
            break;
          }
          a = f;
          b = EI(a);
        } else {
          if (d && BI(e)) {
            break;
          }
          a = e;
          b = 0;
        }
      } else {
        if (d && BI(a.lastChild)) {
          break;
        }
        a = a.lastChild;
        b = EI(a);
      }
    } else {
      break;
    }
  }
  return new CI(a, b);
};
var GI = function(a, b) {
  for (var c = null, d;a != b && (d = a.parentNode);) {
    for (var e = a, f = d.cloneNode(!1);e.nextSibling;) {
      f.appendChild(e.nextSibling);
    }
    c && f.insertBefore(c, f.firstChild);
    c = f;
    a = d;
  }
  return c;
};
var HI = function(a) {
  for (;a.firstChild;) {
    (0,z.Ld)(a.firstChild, a);
  }
  (0,z.Od)(a);
};
var II = function(a, b) {
  function c(a) {
    return 3 == a.nodeType ? b ? (0,z.Ea)(a.nodeValue) : 0 === a.nodeValue.length : (0,z.ii)(a) ? !0 : "HR" == a.tagName || "IMG" == a.tagName || "IFRAME" == a.tagName || "PHANTOM-IFRAME" == a.tagName ? !1 : (0,z.UB)(a.childNodes, c);
  }
  return c(a);
};
var JI = function(a) {
  var b;
  if (3 == a.V.nodeType) {
    for (b = a.V.previousSibling;b && 3 == b.nodeType;b = b.previousSibling) {
      a.offset += EI(b);
    }
  } else {
    b = a.V.previousSibling;
  }
  var c = a.V.parentNode;
  a.V = b ? b.nextSibling : c.firstChild;
  return a;
};
var KI = function(a, b) {
  return b ? FI(a.Ga(), a.Mb()) : FI(a.mb(), a.Fc());
};
var LI = function(a) {
  for (var b = null, c = a.firstChild;c;) {
    var d = c.nextSibling;
    3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (LI(c), b = null);
    c = d;
  }
};
var MI = function(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? null : z.ld ? a.currentStyle ? a.currentStyle.display : null : (0,z.zf)(a, "display")) && "td" != b && "table" != b && "li" != b);
};
var NI = function(a, b, c) {
  this.bD = a;
  this.cN = !!c;
  a && !b && this.next();
};
var OI = function(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || OI(a, b, c, d)) {
        return!0;
      }
      a = a.nextSibling;
    }
  }
  return!1;
};
var PI = function(a, b) {
  var c = GI(b, a);
  (0,z.Md)(c, a);
  for (var c = null, d = b;d != a && !c;d = d.parentNode) {
    c = d.previousSibling;
  }
  c = c ? GI(c, a) : a;
  d = c == a && (0,z.vw)(a) && !b.nextSibling && b.parentNode == a;
  HI(b);
  if (!d || "P" == a.tagName && "P" != b.tagName) {
    (0,z.Md)(b, a), b.appendChild(c);
  }
};
var QI = function(a) {
  for (a = a.firstChild;a;a = a.nextSibling) {
    if ("FIGCAPTION" != a.tagName && (3 == a.nodeType && 0 !== a.nodeValue.length || 1 == a.nodeType && !QI(a))) {
      return!1;
    }
  }
  return!0;
};
var RI = function(a) {
  var b = a.xe(), c = JI(KI(a, !b)), d = DI(c), e = c.V.previousSibling;
  3 == c.V.nodeType && (c.V = null);
  var f = JI(KI(a, b)), h = DI(f), k = f.V.previousSibling;
  3 == f.V.nodeType && (f.V = null);
  return function() {
    !c.V && e && (c.V = e.nextSibling, c.V || (c = new CI(e, EI(e))));
    !f.V && k && (f.V = k.nextSibling, f.V || (f = new CI(k, EI(k))));
    return(0,z.We)(c.V || d.V.firstChild || d.V, c.offset, f.V || h.V.firstChild || h.V, f.offset);
  };
};
var SI = function(a) {
  return 1 == a.nodeType || 3 == a.nodeType && !!/[^\t\n\r ]/.test(a.nodeValue);
};
var TI = function(a) {
  try {
    return a.next();
  } catch (b) {
    return null;
  }
};
var UI = function(a, b, c) {
  (0,z.ha)(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  NI.call(this, a.childNodes[c], !0, b);
};
var VI = function(a) {
  var b = (0,z.ee)(a);
  a = new z.de;
  a.next = function() {
    for (;;) {
      var a = b.next();
      if (SI.call(void 0, a)) {
        return a;
      }
    }
  };
  return a;
};
var WI = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b);
};
var XI = function(a, b) {
  if (b) {
    var c = RI(b), d;
    d = (0,z.zI)(b);
    d = (0,z.$d)(d, MI);
  }
  d ? (d = (0,z.Yd)(d, a), z.ld ? LI(d) : d.normalize()) : a && (z.ld ? LI(a) : a.normalize());
  return c ? c() : null;
};
var YI = function(a) {
  return(0,z.Rd)(a) && ("IMG" == a.tagName || 0 !== a.getElementsByTagName("IMG").length);
};
var ZI = function(a) {
  this.dv = a;
  (0,z.Rc)(this.dv.getElementsByTagName("*"), z.vw);
};
var $I = function(a) {
  II(a, !1) && 0 === a.getElementsByTagName("BR").length && a.appendChild(window.document.createElement("br"));
};
var aJ = function(a) {
  z.v.call(this);
  this.PD = "goog_" + z.SB++;
  this.$B = "goog_" + z.SB++;
  this.Zg = a.xe();
  this.Sf = (0,z.td)(a.Lg());
  a.dh(this.Sf.Ac("SPAN", {id:this.PD}), this.Sf.Ac("SPAN", {id:this.$B}));
};
var bJ = function(a, b) {
  return a.Sf.aa(b ? a.PD : a.$B);
};
var cJ = function(a) {
  var b = !1, c = 1E4;
  do {
    for (var b = !1, d = a.firstChild;d;d = d.nextSibling) {
      var e;
      e = d;
      var f;
      f = [];
      if (f = OI(e, z.vw, f, !0) ? f[0] : void 0) {
        II(f, !1) ? (0,z.Od)(f) : PI(e, f), e = !0;
      } else {
        if (f = 1 == e.nodeType && e.querySelectorAll("img"), !f || !f.length || 1 === f.length && QI(e)) {
          e = !1;
        } else {
          f = f[0];
          var h = window.document.createElement("FIGURE");
          WI(h, f);
          h.appendChild(f);
          PI(e, h);
          e = !0;
        }
      }
      if (e) {
        b = !0;
        c--;
        break;
      }
    }
    if (0 > c) {
      throw Error("infinite loop");
    }
  } while (b);
  b = [];
  f = !1;
  c = (0,z.fb)(a.childNodes);
  for (d = 0;d < c.length;d++) {
    e = c[d], (0,z.vw)(e) ? (b.push(new ZI(e)), f = !1) : f && !YI(e) || b.length && "SPAN" == e.tagName && !e.childNodes.length && e.id && (0,z.Ca)(e.id, "goog_") ? (h = (0,z.Xa)(b), h.dv.appendChild(e), (0,z.Rc)(h.dv.getElementsByTagName("*"), z.vw)) : (f = window.document.createElement("p"), f.appendChild(e), b.push(new ZI(f)), c[d + 1] ? a.insertBefore(f, c[d + 1]) : a.appendChild(f), f = !YI(e));
  }
};
var dJ = function(a) {
  a = (0,z.fb)(a.childNodes);
  (0,z.rb)(a, function(a) {
    (0,z.vw)(a) && "FIGURE" != a.tagName || !II(a, !0) || (0,z.Od)(a);
  });
};
var eJ = function(a) {
  for (a = a.lastChild;a;a = a.previousSibling) {
    var b = a.nextSibling, c = a.tagName;
    !b || c != b.tagName || "UL" != c && "OL" != c || ((0,z.Kd)(a, b.childNodes), (0,z.Od)(b));
  }
};
z.fJ = function(a) {
  return 2 === (0,z.Sg)(a) || 3 === (0,z.Sg)(a) || 4 === (0,z.Sg)(a);
};
var gJ = function(a) {
  aJ.call(this, a);
};
z.hJ = function(a) {
  for (var b;b = a && 1 == a.nodeType ? TI(VI(new UI(a, !1))) : null;) {
    a = b;
  }
  return a;
};
var iJ = function(a) {
  for (var b;b = a && 1 == a.nodeType ? TI(VI(new UI(a, !0))) : null;) {
    a = b;
  }
  return a;
};
var jJ = function() {
  var a = z.fB, b = z.gB ? function(c) {
    return a.call(b.src, b.Ij, c);
  } : function(c) {
    c = a.call(b.src, b.Ij, c);
    if (!c) {
      return c;
    }
  };
  return b;
};
var kJ = function(a) {
  a = (0,z.en)(a) + "\x3c/div\x3e";
  return(0,z.Id)(a);
};
var lJ = function(a, b) {
  for (var c, d = [], e = a.text;c = b.exec(e);) {
    var f = c.index;
    d.push([f, f + c[0].length]);
  }
  for (c = d.length - 1;0 <= c;c--) {
    (0,z.Fm)(a, d[c][0], d[c][1]);
  }
  b.lastIndex = 0;
};
var mJ = function(a, b) {
  var c = a.Ga(), d = a.mb();
  if (c && d) {
    var e = function(a) {
      return a == b;
    }, c = (0,z.$d)(c, e), d = (0,z.$d)(d, e);
    if (c && d) {
      return a.ja();
    }
    if (c) {
      return d = iJ(b), yI(a.Ga(), a.Mb(), d, EI(d));
    }
    if (d) {
      return yI((0,z.hJ)(b), 0, a.mb(), a.Fc());
    }
  }
  return null;
};
var nJ = function(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null, d;
  if (c) {
    if (/^\d+px?$/.test(c)) {
      d = (0,window.parseInt)(c, 10);
    } else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c;
    }
  } else {
    d = 0;
  }
  return d;
};
var oJ = function(a, b, c, d) {
  z.ie.call(this, a, b, c, null, d);
};
var pJ = function(a, b, c) {
  return(0,z.Dd)(window.document, arguments);
};
var qJ = function(a) {
  return(0,z.oa)(a) ? a : a[z.MH] || (a[z.MH] = function(b) {
    return a.handleEvent(b);
  });
};
z.rJ = function(a, b) {
  var c, d = (c = (c = (0,z.ZH)(window)) && mJ(c, a)) && new gJ(c), e = (0,z.fb)(a.childNodes), f = b.sections;
  if (!f) {
    for (c = 0;c < e.length;c++) {
      if ("SECTION" === e[c].tagName) {
        f = !0;
        break;
      }
    }
  }
  if (f) {
    var h = f = null;
    for (c = 0;c < e.length;c++) {
      h = e[c], "SECTION" === h.tagName ? f = null : (f || (f = pJ("section"), (0,z.Md)(f, h)), f.appendChild(h));
    }
    e = (0,z.fb)(a.childNodes);
    for (c = 0;c < e.length;c++) {
      for (var h = e[c], k = (0,z.fb)(h.childNodes), l = null, f = 0;f < k.length;f++) {
        var m = k[f];
        (0,z.xw)(m) || (0,z.yw)(m) || (0,z.ii)(m) ? l = null : (l || (l = kJ({layout:"layout-single-column"}), (0,z.Md)(l, m)), l.appendChild(m));
      }
      h = (0,z.Iw)(h);
      for (f = 0;f < h.length;f++) {
        k = h[f], cJ(k), dJ(k), (0,z.Ew)(k, $I), eJ(k);
      }
    }
  } else {
    cJ(a), dJ(a), (0,z.Ew)(a, $I), eJ(a);
  }
  d && d.restore();
};
z.sJ = function(a) {
  var b = (0,z.Hn)(a.className);
  return!!tJ[a.tagName] && !!a.getAttribute("name") && 5 != b && 6 != b && 7 != b;
};
var uJ = function(a) {
  for (var b = {}, c = 0, c = 0;c < a.length;c++) {
    var d = a[c].getName();
    d in b ? a[c].Wa("") : b[d] = !0;
  }
  for (c = 0;c < a.length;c++) {
    (0,z.sm)(a[c], b);
  }
};
var vJ = function(a, b) {
  a.V.firstChild && (a = FI(a.V, a.offset));
  for (var c = new oJ(b), d, e = 0;d = (0,z.he)(c);) {
    if (a.V == d) {
      return e + a.offset;
    }
    3 == d.nodeType ? e += d.nodeValue.length : "BR" == d.tagName && (e += 1);
  }
  return-1;
};
z.wJ = function(a, b) {
  return a.querySelector('[name\x3d"' + b + '"]');
};
z.xJ = function(a, b) {
  var c = (0,z.uf)((0,z.ti)(a)), d = (0,z.Ad)(window), d = new z.sf(Math.max(0, c.top), Math.min(d.width, c.right), Math.min(d.height, c.bottom), Math.max(0, c.left));
  if (!(b.top <= d.top && b.bottom >= d.bottom || b.top >= d.top && b.bottom <= d.bottom)) {
    var c = Math.round(b.top - d.top), d = Math.round(b.bottom - d.bottom), e = (0,z.qi)(a);
    (0,z.li)(a, e.left, e.top + (1 === (0 == c ? 0 : 0 > c ? -1 : 1) ? Math.min(c, d) : Math.max(c, d)));
  }
};
var yJ = function(a) {
  a = a.replace(/&nbsp;/g, " ");
  return a = a.replace(/ +/g, " ");
};
var zJ = function(a) {
  a = a.replace(/<div>\s*(<br>)*\s*<\/div>/ig, "\x3cp\x3e");
  a = a.replace(/\s*(<br>)+\s*<\/p>/ig, "\x3c/p\x3e");
  return a = a.replace(/<(\/?)p>\s*<\1p>/ig, "\x3c$1p\x3e");
};
var AJ = function(a, b) {
  if (-1 == a.indexOf("@") && -1 == a.indexOf("://") && -1 == a.indexOf("www.")) {
    return(0,z.Ga)(a);
  }
  var c = b || {};
  "rel" in c || (c.rel = "nofollow");
  "target" in c || (c.target = "_blank");
  var d = [], e;
  for (e in c) {
    c.hasOwnProperty(e) && c[e] && d.push((0,z.Ga)(e), '\x3d"', (0,z.Ga)(c[e]), '" ');
  }
  var f = d.join("");
  return a.replace(z.XC, function(a, b, c, d, e) {
    a = [(0,z.Ga)(b)];
    if (!c) {
      return a[0];
    }
    a.push("\x3ca ", f, 'href\x3d"');
    d ? (a.push("mailto:"), c = d, d = "") : (e || a.push("http://"), (d = c.match(BJ)) ? (c = d[1], d = d[2]) : d = "");
    c = (0,z.Ga)(c);
    d = (0,z.Ga)(d);
    a.push(c, '"\x3e', c, "\x3c/a\x3e", d);
    return a.join("");
  });
};
var CJ = function(a, b) {
  if (z.ld) {
    var c = nJ(a, b + "Left"), d = nJ(a, b + "Right"), e = nJ(a, b + "Top"), f = nJ(a, b + "Bottom");
    return new z.sf(e, d, f, c);
  }
  c = (0,z.zf)(a, b + "Left");
  d = (0,z.zf)(a, b + "Right");
  e = (0,z.zf)(a, b + "Top");
  f = (0,z.zf)(a, b + "Bottom");
  return new z.sf((0,window.parseFloat)(e), (0,window.parseFloat)(d), (0,window.parseFloat)(f), (0,window.parseFloat)(c));
};
var DJ = function(a) {
  if (1 == a.nodeType) {
    var b;
    if (a.getBoundingClientRect) {
      b = (0,z.Bf)(a), b = new z.rd(b.left, b.top);
    } else {
      b = (0,z.be)((0,z.td)(a));
      var c = (0,z.Df)(a);
      b = new z.rd(c.x - b.x, c.y - b.y);
    }
    if (z.Re && !(0,z.hd)(12)) {
      b: {
        c = (0,z.Ta)("transform");
        if (void 0 === a.style[c] && (c = (0,z.qf)() + (0,z.Ua)("transform"), void 0 !== a.style[c])) {
          c = (0,z.rf)() + "-transform";
          break b;
        }
        c = "transform";
      }
      a = (a = (0,z.Af)(a, c) || (0,z.Af)(a, "transform")) ? (a = a.match(EJ)) ? new z.rd((0,window.parseFloat)(a[1]), (0,window.parseFloat)(a[2])) : new z.rd(0, 0) : new z.rd(0, 0);
      a = new z.rd(b.x + a.x, b.y + a.y);
    } else {
      a = b;
    }
    return a;
  }
  b = (0,z.oa)(a.rw);
  c = a;
  a.targetTouches ? c = a.targetTouches[0] : b && a.qf.targetTouches && (c = a.qf.targetTouches[0]);
  return new z.rd(c.clientX, c.clientY);
};
var FJ = function(a, b) {
  return(0,z.We)(a, b, a, b);
};
var GJ = function(a, b, c) {
  if (!(a.nodeName in HJ)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in IJ) {
        b.push(IJ[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          GJ(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
};
z.JJ = function(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
};
z.KJ = function() {
  return "The file you tried to upload is a type we don’t understand. Supported formats are JPEG, PNG, and GIF.";
};
z.LJ = function() {
  var a = (0,z.H)("variants.max_upload_size_mb");
  return "The image you are trying to upload is too big. Please resize it so that it is under " + (0,z.N)(a) + "MB.";
};
z.MJ = function(a, b, c, d, e) {
  if ((0,z.ia)(b)) {
    for (var f = 0;f < b.length;f++) {
      (0,z.MJ)(a, b[f], c, d, e);
    }
  } else {
    c = qJ(c), (0,z.QA)(a) ? a.Ee(b, c, d, e) : a && (a = (0,z.aB)(a)) && (b = a.pl(b, c, !!d, e)) && (0,z.YA)(b);
  }
};
z.NJ = function(a, b, c, d, e) {
  if ((0,z.ia)(b)) {
    for (var f = 0;f < b.length;f++) {
      (0,z.NJ)(a, b[f], c, d, e);
    }
    return null;
  }
  c = qJ(c);
  if ((0,z.QA)(a)) {
    a = a.qa(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, h = (0,z.aB)(a);
    h || (a[z.bB] = h = new z.VA(a));
    c = h.add(b, c, !1, d, e);
    c.js || (d = jJ(), c.js = d, d.src = a, d.Ij = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent((0,z.ZA)(b.toString()), d), z.$A++);
    a = c;
  }
  return a;
};
var OJ = function(a) {
  a = (0,z.kn)(a, PJ, !1, !1);
  return(0,z.Hd)((0,z.I)(z.dn, a) + (0,z.I)(z.bn, a));
};
var QJ = function(a, b) {
  a = a.cloneNode(!0);
  (0,z.rJ)(a, {rf:!1, isPublished:!1, media:null, sections:b, li:!1, Lh:!0, kf:!0});
  var c = (0,z.Gw)(a).map(function(a) {
    return(0,z.Uw)(a);
  }), d = (0,z.Hw)(a), d = b ? (0,z.Ow)(d) : [], c = c.map(function(a) {
    return a.ub();
  }), c = (0,z.Dg)(new z.Cg, c);
  b && (0,z.Eg)(c, d);
  return c;
};
var RJ = function(a) {
  return pJ("span", {className:"default-value"}, a);
};
var SJ = function(a, b) {
  var c = (0,z.wJ)(a, "title");
  c && b.call(void 0, c);
  (c = (0,z.wJ)(a, "subtitle")) && b.call(void 0, c);
  a.querySelector(".body") && (0,z.Fw)(a.querySelector(".body"), z.sJ, (0,z.Tb)(b, (0,z.Sb)(!0)), void 0);
};
z.TJ = function(a, b, c) {
  b = '\x3cdiv class\x3d"popover-inner"\x3e\x3cul\x3e';
  a = a.items;
  for (var d = a.length, e = 0;e < d;e++) {
    var f = a[e];
    b += '\x3cli class\x3d"typeahead-item" data-action-value\x3d"@' + (0,z.O)(f.username) + '" data-action\x3d"typeahead-populate"\x3e' + (0,z.$o)({user:f, Oc:"avatar-micro", Cr:!0}, c) + '\x3cstrong class\x3d"typeahead-name"\x3e' + (0,z.N)(f.name) + '\x3c/strong\x3e \x3cem class\x3d"typeahead-username"\x3e@' + (0,z.N)(f.username) + "\x3c/em\x3e\x3c/li\x3e";
  }
  return b + '\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e';
};
var UJ = function(a) {
  var b = void 0 != a.previousElementSibling ? a.previousElementSibling : (0,z.Qd)(a.previousSibling, !1), c = void 0 != a.nextElementSibling ? a.nextElementSibling : (0,z.Qd)(a.nextSibling, !0);
  if (b && b.tagName === a.tagName) {
    for (;a.firstChild;) {
      b.appendChild(a.firstChild);
    }
    (0,z.Od)(a);
    a = b;
  }
  if (c && c.tagName === a.tagName) {
    for (;c.firstChild;) {
      a.appendChild(c.firstChild);
    }
    (0,z.Od)(c);
  }
};
var VJ = function(a, b) {
  var c = window.document.createElement(a.tagName);
  c.className = "post-list";
  for ((0,z.Md)(c, a);a.lastChild != b;) {
    (0,z.Nd)(c, a.lastChild, 0);
  }
  return c;
};
var WJ = function(a, b) {
  if (0 > a) {
    return null;
  }
  for (var c = new oJ(b), d;d = (0,z.he)(c);) {
    var e = 0;
    3 == d.nodeType ? e = d.nodeValue.length : "BR" == d.tagName && (e = 1);
    a -= e;
    if (0 > a) {
      return "BR" == d.tagName ? FI(d.parentNode, (0,z.bb)(d.parentNode.childNodes, d), !0, !0) : new CI(d, e + a);
    }
  }
  return 0 === a ? (c = FI(b, b.childNodes.length, !0)) && "IMG" == c.V.tagName && (d = c.V, d.parentNode && (0,z.ji)(d.parentNode) && (d = d.parentNode), d.previousSibling && !(0,z.ji)(d.previousSibling)) ? (c = d.previousSibling, FI(c, c.childNodes.length, !0)) : c : null;
};
z.XJ = function(a, b, c) {
  return vJ(KI(a, c), b);
};
z.JL = function(a) {
  var b = a instanceof z.se, c = b ? a.mb() : a, c = (0,z.pi)(3 == c.nodeType || "BR" == c.tagName ? c.parentNode : c);
  b ? (a = a.ja(), a.collapse(!1), (a = (a = a.wj()) && a.getClientRects && a.getClientRects()[0]) ? (a = (0,z.si)(a), "mobile safari" == (0,z.H)("useragent.browser") && (b = (0,z.ri)(), a.top -= b.top, a.left -= b.left)) : a = null) : a = (0,z.ti)(a);
  a && (0,z.xJ)(c, (0,z.uf)(a));
};
z.KL = function(a) {
  a = a.wj().getBoundingClientRect();
  a = (0,z.si)(a);
  if ("mobile safari" == (0,z.H)("useragent.browser")) {
    var b = (0,z.ri)();
    a.top -= b.top;
    a.left -= b.left;
  }
  return a;
};
z.LL = function(a) {
  var b = a.rl();
  if (b) {
    return b;
  }
  b = a.Ga();
  return(0,z.ji)(b) || 0 == a.Mb() ? (a = (0,z.ti)(b)) && new z.rd(a.left, a.top) : null;
};
var ML = function(a) {
  var b = a.nodeType;
  3 == b ? ML(a.parentNode) : 1 == b && a.focus();
};
var NL = function(a, b) {
  for (var c = null, d = a.firstChild;d;d = c) {
    c = d.nextSibling, NL(d, b);
  }
  b(a) && HI(a);
};
z.OL = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : !1;
  };
};
var PL = function(a) {
  var b = QL;
  if (!b) {
    b = QL = wI();
    (0,z.fh)(b, "SPAN");
    for (var c in b.De) {
      var d = b.De[c];
      d.hi || RL.push(new RegExp("\x3c" + c + "[^\x3e]*\x3e[\\s\\S]*?\x3c\\/" + c + "\x3e", "gi"));
      d.attributes.style = /(font-weight|font-style) *: *[\w]*;/g;
    }
  }
  a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, "");
  RL.forEach(function(b) {
    a = a.replace(b, "");
  });
  a = a.replace(SL, function(a, c, d) {
    a = b.De[d.toUpperCase()] || b.fw;
    if (!a.ye) {
      return "";
    }
    (0,z.ma)(a.ye) && (d = a.ye);
    if (TL.test(c)) {
      c = "\x3c/" + d.toLowerCase() + "\x3e";
    } else {
      d = "\x3c" + d.toLowerCase();
      for (var k in a.attributes) {
        var l = c.match(new RegExp(k + "\\s*\x3d\\s*(['\"])(.+?)\\1"));
        if (l = l && l[2] && vI(a, k, l[2])) {
          "href" == k && (l = (0,z.Ga)((0,z.Zh)(AI(l), !0))), d += " " + k + '\x3d"' + l + '"';
        }
      }
      c = d + "\x3e";
    }
    return c;
  });
  a = zJ(a);
  return a = yJ(a);
};
z.UL = function(a) {
  a = a.replace(/<\/h\d\b[^>]*>/gi, " ").replace(/<\/p\b[^>]*>/gi, "\n\n").replace(/<\/pre\b[^>]*>/gi, "\n\n").replace(/<\/div\b[^>]*>/gi, "\n\n").replace(/<\/li\b[^>]*>/gi, "\n").replace(/<\/ul\b[^>]*>/gi, "\n").replace(/<\/ol\b[^>]*>/gi, "\n").replace(/<br\b[^>]*>/gi, "\n").replace(/<\/blockquote\b[^>]*>/gi, "\n\n").replace(/<[^>]*>/gim, "");
  return AI(a.replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&quot;/g, '"').replace(/&lsquo;/g, "‘").replace(/&rsquo;/g, "’").replace(/&apos;/g, "'")).trim();
};
var VL = function(a) {
  return a.replace(z.PC, '$1\x3ca href\x3d"/@$2" title\x3d"Medium profile for @$2"\x3e@$2\x3c/a\x3e');
};
z.WL = function(a, b) {
  a || (a = "");
  a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  b && !1 === b.zM ? a = (0,z.Ga)(a) : (a = AJ(a), a = a.replace(/((?:^|[^a-zA-Z0-9_!#$%&*@＠/]|RT:?))([@＠])([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_-]{0,24})?/g, '$1\x3ca href\x3d"http://twitter.com/$3$4" target\x3d"_blank" title\x3d"Twitter profile for @$3$4"\x3e@$3$4\x3c/a\x3e'));
  b && !1 === b.EQ || (a = a.replace(/\n/g, "\x3cbr\x3e"));
  b && !1 === b.jL || (a = "\x3cp\x3e" + a.replace(/<br><br>/g, "\x3c/p\x3e\x3cp\x3e").replace(/\n\n/g, "\x3c/p\x3e\x3cp\x3e") + "\x3c/p\x3e");
  return a;
};
var XL = function(a) {
  a = a.match("(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*");
  return null != a ? a[0] : "";
};
var YL = function(a, b) {
  var c = a.parentNode, d = (0,z.bb)(c.childNodes, a) + (b ? 0 : 1), c = FI(c, d, b, !0);
  FJ(c.V, c.offset).select();
};
z.ZL = function(a, b) {
  var c = DJ(a), d = DJ(b);
  return new z.rd(c.x - d.x, c.y - d.y);
};
z.$L = function(a) {
  if (a = (0,z.te)(a || window)) {
    if (a.empty) {
      try {
        a.empty();
      } catch (b) {
      }
    } else {
      try {
        a.removeAllRanges();
      } catch (c) {
      }
    }
  }
};
z.aM = function(a) {
  var b = [];
  GJ(a, b, !1);
  return b.join("");
};
z.bM = function(a) {
  if (z.hC && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    GJ(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  z.hC || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
};
z.cM = function(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        (0,z.JJ)(a), a.appendChild((0,z.vd)(a).createTextNode(String(b)));
      }
    }
  }
};
var dM = function(a) {
  if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
    return!1;
  }
  switch(a.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return!1;
    case 0:
      return!z.Re;
    default:
      return 166 > a.keyCode || 183 < a.keyCode;
  }
};
var eM = function(a) {
  var b;
  b = b || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
  };
};
var fM = function(a, b) {
  this.W = a;
  this.Nf = b;
};
var gM = function(a, b) {
  hM(a, b);
  b && (0,z.Lm)(a.Nf, b) && hM(a, b - 1);
};
var hM = function(a, b) {
  var c = (0,z.Mm)(a.Nf, b);
  if (c.es) {
    var d = iM(a, b);
    d && d.setAttribute("data-paragraph-count", c.es);
  }
};
var jM = function(a) {
  for (var b = (0,z.Iw)(a.W), c = (0,z.Gw)(a.W), d = null, e = 0;e < b.length;e++) {
    var f = b[e], h = (0,z.Gw)(f);
    if (h.length) {
      var h = h[0], k = c.indexOf(h);
      if ((0,z.Lm)(a.Nf, k)) {
        d = f;
      } else {
        for (;f.firstChild;) {
          d.appendChild(f.firstChild);
        }
        (0,z.Od)(f);
        "LI" == h.tagName && UJ(h.parentNode);
      }
    } else {
      (0,z.Od)(f);
    }
  }
};
var kM = function(a, b) {
  return(0,z.Hw)(a.W)[b];
};
var iM = function(a, b) {
  var c = a.Qb(b);
  return c ? (0,z.ki)(c, z.xw, a.W) : null;
};
var lM = function(a, b) {
  if (-1 != b) {
    var c = a.Qb(b), d = iM(a, b), e = (0,z.Gw)(d);
    if (c != e[e.length - 1]) {
      c = "LI" == c.tagName ? c.parentNode : c;
      e = kJ((0,z.Mm)(a.Nf, b));
      (0,z.Md)(e, d);
      if (-1 != b) {
        var f = a.Qb(b);
        if ("LI" == f.tagName) {
          var h = f.parentNode, k = null;
          f.nextSibling && (k = VJ(h, f), (0,z.Md)(k, h));
        }
      }
      for (;d.lastChild != c;) {
        (0,z.Nd)(e, d.lastChild, 0);
      }
    }
  }
};
var mM = function(a, b) {
  lM(a, b - 1);
  var c = kJ((0,z.Mm)(a.Nf, b)), d = a.Nf, e = (0,z.Nm)(d, b);
  (0,z.Zg)(d.pk(), e).ra() === e ? (d = (e = a.Qb(b)) ? (0,z.Dw)(e, a.W) : kM(a, 0), e = e ? iM(a, b) : (0,z.Iw)(d)[0], d.insertBefore(c, e)) : (0,z.Md)(c, iM(a, b - 1));
  return c;
};
z.nM = function(a, b, c) {
  this.start = a;
  this.end = b;
  this.Iq = c;
  this.mz = !1;
};
var oM = function() {
  var a = (0,z.pM)(0, 0);
  a.mz = !0;
  return a;
};
z.pM = function(a, b) {
  return new z.nM(qM(a, b), qM(a, b), !1);
};
z.rM = function(a) {
  return a.Iq ? a.start : a.end;
};
var sM = function(a) {
  return a.start.mc === tM && a.end.mc === tM;
};
z.uM = function(a) {
  return a.isCollapsed() && a.start.mc === vM;
};
var wM = function(a, b, c) {
  this.mc = a;
  this.X = b;
  this.offset = c;
};
var qM = function(a, b) {
  return new wM(tM, a, b);
};
var xM = function(a) {
  return new wM(vM, a, 0);
};
z.yM = function(a, b, c) {
  this.Vk = c.Mo;
  this.kB = c.Bs;
  this.W = a;
  this.zd = (0,z.Gw)(this.W);
  this.sb = this.Pa() ? (0,z.Hw)(a) : null;
  this.Ib = zM(this);
  this.He = [];
  this.He.length = this.zd.length;
  this.ih = null;
  this.Au = !1;
  this.nd = AM(this, b);
  a = this.zd;
  this.sb && (a = a.concat(this.sb));
  b = {};
  for (c = 0;c < a.length;c++) {
    var d = a[c].getAttribute("name");
    d && (b[d] = !0);
  }
  this.je = b;
  this.nv = !1;
  this.ff = this.Pa() ? new fM(this.W, new z.Km((0,z.Ul)(this.Ib))) : null;
  this.nh = new z.gl((0,z.Ul)(this.Ib));
};
var zM = function(a) {
  var b = new z.Cg;
  (0,z.Dg)(b, a.zd.map(function(a) {
    return(0,z.Uw)(a).ub();
  }));
  a.Pa() && (0,z.Eg)(b, (0,z.Ow)(a.sb));
  b = new z.Tl((new z.Wg).Yl(b));
  rI(b, a.xG.bind(a));
  return b;
};
var BM = function(a, b) {
  (0,z.CM)(a);
  a.gj();
  var c = b ? a.Ib.im() : a.Ib.ks();
  c && (0,z.DM)(a, c);
};
z.CM = function(a) {
  if (!a.Au) {
    var b = a.zd.map(function(a) {
      return(0,z.Uw)(a).ub();
    });
    if ((0,z.Ul)(a.Ib).pc().length != b.length) {
      throw new EM("paragraph count mismatch");
    }
    for (var c = 0;c < b.length;c++) {
      FM(a, b[c], c, !0);
    }
    a.Au = !0;
  }
};
var FM = function(a, b, c, d) {
  var e = (0,z.Ul)(a.Ib).pc()[c];
  if (d && b.getName() != e.getName()) {
    throw new EM("unexpected name change");
  }
  if (!b.Lb(e)) {
    try {
      a.nv = d, (0,z.Vl)(a.Ib, (0,z.Dl)(3).kb(c).jg(b));
    } finally {
      a.nv = !1;
    }
    return!0;
  }
  return!1;
};
var GM = function(a, b) {
  (0,z.rJ)(a, {rf:!1, isPublished:!1, media:null, sections:b.Mo, li:!1, Lh:!0, kf:b.Mo});
  var c = b.Bs && !(0,z.Ud)(window.document.body, a), d = a.style.visibility;
  c && (a.style.visibility = "hidden", window.document.body.appendChild(a));
  var e = new z.yM(a, null, b);
  HM(e);
  c && (window.document.body.removeChild(a), a.style.visibility = d);
  return e;
};
var HM = function(a) {
  IM(a);
  for (var b = [], c = 0, d = (0,z.JM)(a), c = 0;c < d;c++) {
    b.push((0,z.LM)(a, c).ub());
  }
  c = b;
  a.Pa() && (c = c.concat((0,z.MM)(a)));
  uJ(c);
  for (c = 0;c < d;c++) {
    (0,z.LM)(a, c).name = b[c].getName(), (0,z.NM)(a, c);
  }
  if (a.Pa()) {
    b = (0,z.MM)(a);
    for (c = 0;c < a.sb.length;c++) {
      (0,z.OM)(a, b[c].ra());
    }
    jM(a.ff);
  }
  b = a.Ib;
  a = a.getSelection();
  b.ku = b.lc.length;
  b.gj(a);
};
var IM = function(a) {
  var b = (0,z.JM)(a), c = a.Qb(0), b = a.Qb(b - 1);
  c && 5 != (0,z.Lw)(c) || (0,z.PM)(a, 0, new z.qm("", 1, ""));
  b && WH((0,z.Lw)(b)) && (0,z.PM)(a, (0,z.JM)(a), new z.qm("", 1, ""));
};
z.QM = function(a) {
  var b = (0,z.Ul)(a.Ib).pc(), c = (0,z.Gw)(a.W), d = (0,z.JM)(a);
  if (d != c.length || d != b.length) {
    throw new EM("paragraph count");
  }
  var e;
  for (e = 0;e < d;e++) {
    var f = c[e], h = a.Qb(e);
    if (f != h) {
      throw new EM("paragraph element");
    }
    f = (0,z.Uw)(f).ub();
    if (!b[e].Lb(f)) {
      throw new EM("paragraph model");
    }
  }
  if (a.Pa()) {
    e = a.sb.length;
    b = (0,z.Hw)(a.W);
    c = (0,z.Ow)(b);
    d = (0,z.Ul)(a.Ib).ec();
    if (e != c.length || e != d.length) {
      throw new EM("section count");
    }
    for (e = 0;e < c.length;e++) {
      if (b[e] != a.sb[e]) {
        throw new EM("section element");
      }
      if (!d[e].Lb(c[e])) {
        throw new EM("section model");
      }
    }
  }
};
z.DM = function(a, b) {
  a.nd = b;
  (0,z.RM)(a);
};
var SM = function(a, b, c, d, e, f) {
  (0,z.DM)(a, new z.nM(qM(b, c), qM(d, e), f));
};
z.TM = function(a, b) {
  a.nd = new z.nM(new wM(UM, b, 0), new wM(UM, b, 0), !1);
  (0,z.RM)(a);
};
z.VM = function(a, b) {
  var c = (0,z.WM)(a, b).ra();
  a.nd = new z.nM(xM(c), xM(c), !1);
  (0,z.RM)(a);
};
z.XM = function(a, b) {
  var c = a.nd.start, d = a.nd.end;
  if (!a.nd.isCollapsed()) {
    var e = (0,z.LM)(a, c.X), f = (0,z.LM)(a, d.X);
    YM(a, function(a, b, c) {
      b < c && (0,z.Fm)(a, b, c);
    }, a, !1);
    if (e != f) {
      b && e.append(f);
      var h = d.X - c.X - 1;
      b && h++;
      for (var k = 0;k < h;k++) {
        (0,z.ZM)(a, c.X + 1);
      }
    }
    (0,z.NM)(a, c.X);
    e == f || b || (0,z.NM)(a, c.X + 1);
    d.X = c.X;
    d.offset = c.offset;
  }
};
var YM = function(a, b, c, d) {
  var e = a.nd.ja(), f = e.end, h = e.start;
  0 === f.offset && f.X > h.X && (f.X--, f.offset = (0,z.LM)(a, f.X).text.length);
  for (var f = e.start.X, h = e.end.X, k = f;k <= h;k++) {
    var l = (0,z.LM)(a, k);
    b.call(c, l, k == f ? e.start.offset : 0, k == h ? e.end.offset : l.text.length);
    d && (0,z.NM)(a, k);
  }
};
z.$M = function(a, b) {
  return(0,z.bb)(a.zd, b);
};
z.LM = function(a, b) {
  var c = a.He[b];
  if (!c) {
    var d = a.Qb(b);
    d && (c = a.He[b] = (0,z.Uw)(d, a.kB), FM(a, c.ub(), b, !0));
  }
  return c;
};
z.JM = function(a) {
  return a.zd.length;
};
z.aN = function(a, b) {
  var c = (0,z.Cw)(b, a.W);
  return c ? (0,z.$M)(a, c) : -1;
};
var AM = function(a, b) {
  if (!b) {
    return oM();
  }
  var c = bN(a, KI(b, !0)), d = bN(a, KI(b, !1));
  return c && d ? new z.nM(c, d, b.xe()) : oM();
};
var bN = function(a, b) {
  var c = (0,z.aN)(a, b.V);
  if (-1 == c) {
    return c = null, a.Pa() && ((0,z.yw)(b.V) ? c = b.V : (0,z.zw)(b.V) && (c = b.V.parentNode), c) ? (c = (0,z.WM)(a, (0,z.bb)(a.sb, c.parentNode)), xM(c.ra())) : null;
  }
  var d = b.V.tagName;
  return "IMG" === d || "IFRAME" === d ? new wM(UM, c, 0) : qM(c, vJ(b, a.zd[c]));
};
z.cN = function(a, b) {
  var c = dN(a, b.Ec()), d = dN(a, (0,z.rM)(b));
  return c && d ? (0,z.We)(c.V, c.offset, d.V, d.offset) : null;
};
var dN = function(a, b) {
  var c = a.Qb(b.X);
  if (!c) {
    return null;
  }
  if (b.g() === vM) {
    var d = (0,z.eN)(a, b.X);
    if (d && 2 == (0,z.Sg)(d) && (d = (0,z.fN)(a, d), d = a.sb[d] && (0,z.Za)(a.sb[d].childNodes, z.yw))) {
      return new CI(d, 0);
    }
  }
  return b.g() === UM && (d = c.querySelector("phantom-iframe, iframe, img")) ? new CI(d, 0) : WJ(b.offset, c);
};
z.NM = function(a, b, c) {
  c = c || (0,z.LM)(a, b);
  (0,z.rm)(c, a.je);
  var d = null;
  6 == sI(a.nh, b) && (d = tI(a.nh, b));
  FM(a, c.ub(), b, !1) || a.dz((0,z.Dl)(3).kb(b).jg(c.ub()));
  d && (0,z.om)(a.Ib, d);
};
z.RM = function(a) {
  var b = (0,z.cN)(a, a.nd);
  b && (sM(a.nd) && ML(b.mb()), b.select(), (0,z.JL)(b));
};
z.ZM = function(a, b) {
  (0,z.CM)(a);
  var c = null;
  6 == sI(a.nh, b) && (c = tI(a.nh, b));
  (0,z.Vl)(a.Ib, (0,z.Dl)(2).kb(b));
  c && (0,z.om)(a.Ib, c);
};
z.PM = function(a, b, c, d) {
  (0,z.CM)(a);
  var e = null;
  6 == sI(a.nh, b) && (e = tI(a.nh, b), e.end++);
  (0,z.rm)(c, a.je);
  (0,z.Vl)(a.Ib, (0,z.Dl)(1).kb(b).jg(c.ub()));
  d && a.Pa() && 0 < b && (c = (0,z.eN)(a, b + 1), c.ra() === b + 1 && ((0,z.gN)(a, b + 1), (0,z.hN)(a, b, c)));
  e && (0,z.om)(a.Ib, e);
};
var iN = function(a, b) {
  jN(a, b);
  0 < b && b < (0,z.JM)(a) && 7 != (0,z.LM)(a, b).layout && jN(a, b - 1);
};
var jN = function(a, b) {
  if (6 == sI(a.nh, b)) {
    var c = {};
    (0,z.kl)(a.nh, b, c);
    for (var d in c) {
      var e = a.Qb(Number(d)), f = c[d];
      "FIGURE" == e.tagName && ((0,z.Tc)(e, "is-partialWidth", null != f), e.style.width = null == f ? "" : f + "%");
    }
  }
};
var kN = function(a, b) {
  if (a.Vk) {
    var c = (0,z.WM)(a, b), d = a.sb[b], e = c.ra();
    (0,z.Jb)(d.getElementsByClassName("paragraph-first"), function(a) {
      (0,z.$M)(this, a) != e && (0,z.u)(a, "paragraph-first");
    }, a);
    var f = a.Qb(e);
    f && (0,z.t)(f, "paragraph-first");
    c = lN(a, c) - 1;
    (0,z.Jb)(d.getElementsByClassName("paragraph-last"), function(a) {
      (0,z.u)(a, "paragraph-last");
    }, a);
    (d = a.Qb(c)) && (0,z.t)(d, "paragraph-last");
  }
};
var mN = function(a, b) {
  if (a.Vk) {
    if (1 >= b) {
      var c = a.sb[0];
      c && (0,z.t)(c, "section-first");
      (c = a.sb[1]) && (0,z.u)(c, "section-first");
    }
    c = (0,z.MM)(a).length - 1;
    if (b >= c - 1) {
      var d = a.sb[c];
      d && ((0,z.u)(d, "section-last"), (0,z.t)(d, "section-last"));
      (c = a.sb[c - 1]) && (0,z.u)(c, "section-last");
    }
  }
};
var nN = function(a, b, c, d) {
  var e = !1;
  if (1 === b.type && a.Pa()) {
    d = (0,z.eN)(a, d), (0,z.fJ)(d) && (0,z.oN)(a, d) === d.ra() + 1 && (d = "Continue writing", c.setAttribute("data-default-value", d), b.text || ((0,z.Nd)(c, RJ(d), 0), e = !0));
  } else {
    if ((0,z.oI)(b)) {
      c.contentEditable = !1;
      var f = c.querySelector("figcaption");
      if (!f) {
        return;
      }
      d = 4 == b.type ? (0,z.Om)() : 11 == b.type ? (0,z.Pm)() : "";
      if (!d) {
        return;
      }
      f.contentEditable = !0;
      f.setAttribute("data-default-value", d);
      b.text || ((0,z.Nd)(f, RJ(d), 0), e = !0);
    }
  }
  d = a.W.getAttribute("data-default-value");
  1 != (0,z.JM)(a) || !d || b.text || 1 != b.type || e || (0,z.Nd)(c, RJ(d), 0);
};
z.oN = function(a, b) {
  var c = (0,z.MM)(a), d = c.indexOf(b);
  return b.ra() + (0,z.$g)(c, d, (0,z.JM)(a));
};
z.hN = function(a, b, c) {
  (0,z.sm)(c, a.je);
  var d = (0,z.eN)(a, b);
  if (d && d.ra() === b) {
    throw Error("Tried to overwrite a section");
  }
  c.Sd(b);
  b = (0,z.MM)(a);
  d = d ? (0,z.bb)(b, d) : -1;
  (0,z.Vl)(a.Ib, (0,z.Dl)(8).kb(d + 1).kg(c));
};
z.gN = function(a, b) {
  var c = (0,z.MM)(a), d = (0,z.eN)(a, b);
  if (1 === c.length) {
    throw Error("Cannot remove last section");
  }
  if (d.ra() !== b) {
    throw Error("Section not found at " + b);
  }
  c = (0,z.bb)(c, d);
  (0,z.Vl)(a.Ib, (0,z.Dl)(9).kb(c));
};
z.OM = function(a, b, c) {
  var d = (0,z.MM)(a), e = (0,z.eN)(a, b), d = d.indexOf(e);
  if (e.ra() !== b) {
    throw Error("Section not found at " + b);
  }
  c && (c.Sd(e.ra()), e = c);
  (0,z.sm)(e, a.je);
  b = (0,z.Ul)(a.Ib).ec()[d];
  !c && b && b.Lb(e) ? a.ez((0,z.Dl)(10).kb(d).kg(e)) : (0,z.Vl)(a.Ib, (0,z.Dl)(10).kb(d).kg(e));
};
z.eN = function(a, b) {
  return(0,z.Zg)((0,z.MM)(a), b);
};
z.WM = function(a, b) {
  return(0,z.MM)(a)[b];
};
z.fN = function(a, b) {
  var c = (0,z.MM)(a);
  return(0,z.bb)(c, b);
};
z.MM = function(a) {
  a.ih || (a.ih = (0,z.Ow)(a.sb));
  return a.ih;
};
var lN = function(a, b) {
  return(0,z.ah)((0,z.MM)(a), (0,z.fN)(a, b), a.He.length);
};
var EM = function(a) {
  z.Aa.call(this, "Inconsistent model: " + a);
};
z.pN = function() {
};
z.qN = function(a, b) {
  var c = window.iosDispatchEvent;
  c && (0,z.H)("variants.can_use_mobile_editors") ? c("mutate", function() {
    rN(this, b);
    c("mutated");
  }.bind(a)) : rN(a, b);
};
var rN = function(a, b) {
  b.Nn();
  var c = (0,z.sN)(b), d = a.yH.bind(a, b, c);
  tN(b, !0);
  try {
    d.call(void 0);
  } finally {
    b.Ze() && b.fl();
  }
  c.gj();
  (0,z.uN)(b);
  b.dispatchEvent("measure");
};
z.vN = function(a, b) {
  this.If = a;
  this.mc = b;
};
var wN = function(a) {
  var b = a.getSelection();
  if (sM(b) && b.isCollapsed()) {
    var b = b.start.X, c = (0,z.LM)(a, b);
    c && c.fi() && (0,z.TM)(a, b);
  }
};
var xN = function(a, b, c) {
  var d = a.If ? 1 : -1, e = a.If ? b.length : -1;
  c = a.If ? c : c - 1;
  if (1 == a.mc) {
    return d;
  }
  var f = -1;
  if (3 == a.mc) {
    f = a.If ? b.indexOf("\n", c) : b.lastIndexOf("\n", c);
  } else {
    a = !1;
    for (var h = c;0 <= h && h < b.length && -1 == f;h += d) {
      var k = b.charAt(h);
      " " == k || "\n" == k ? a && (f = h) : a = !0;
    }
  }
  return-1 == f ? e - c : f == c ? d : f - c;
};
var yN = function(a, b, c) {
  var d = a.If ? 1 : -1, e = c + d, f = (0,z.LM)(b, c), h = (0,z.LM)(b, e);
  if (h) {
    var k = b.Pa(), l = k ? (0,z.eN)(b, c) : null, k = k ? (0,z.eN)(b, e) : null, m = l == k;
    if (!m) {
      var q = (0,z.fJ)(l);
      if (!q && !(0,z.fJ)(k)) {
        (0,z.gN)(b, (a.If ? k : l).ra());
        return;
      }
      if (q && (0,z.oN)(b, l) == c + 1) {
        a.If || (0,z.VM)(b, (0,z.fN)(b, l));
        return;
      }
    }
    m && (5 == h.type || qI(h.type, h.text)) ? (0,z.ZM)(b, e) : qI(f.type, f.text) ? (b.hg(e, a.If ? 0 : h.text.length), (0,z.ZM)(b, c)) : m && !(0,z.oI)(f) && ((0,z.oI)(h) ? b.hg(e, a.If ? 0 : h.text.length) : (a = b.getSelection(), 0 < d ? (a.start.offset = a.end.offset = f.text.length, f.append(h), (0,z.ZM)(b, e), (0,z.NM)(b, c)) : (a.start.offset = a.end.offset = h.text.length, h.append(f), (0,z.ZM)(b, c), (0,z.NM)(b, e))));
  }
};
var zN = function(a) {
  this.eH = a;
};
var AN = function(a, b) {
  if (a in b) {
    return "";
  }
  b[a] = !0;
  return a;
};
z.BN = function() {
  z.v.call(this);
  this.sj = new z.VA(this);
  this.XK = this;
};
var CN = function(a, b, c, d) {
  b = a.sj.ob[String(b)];
  if (!b) {
    return!0;
  }
  b = (0,z.fb)(b);
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.Vl && h.al == c) {
      var k = h.Ij, l = h.xl || h.src;
      h.qr && a.mE(h);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !1 != d.FD;
};
var DN = function() {
  z.BN.call(this);
  this.jw = this.gr();
};
z.EN = function() {
  DN.call(this);
  this.rc == z.VB && delete this.rC;
  this.Qr == z.VB && delete this.sC;
  this.Vn == z.VB && delete this.vC;
};
var FN = function() {
};
z.GN = function(a, b) {
  var c = new z.pN;
  c.gd = function(c) {
    var e = (0,z.$M)(c, a);
    -1 != e && (b((0,z.LM)(c, e)), (0,z.NM)(c, e), (0,z.RM)(c));
  };
  return c;
};
var HN = function(a) {
  var b = new FN;
  (0,z.oa)(a) ? b.FC = a : b.FC = function(b, d) {
    for (var e = 0, f = 0;f < a.length;f++) {
      e += a[f](b, d), d += e;
    }
    return e;
  };
  return b;
};
var IN = function(a, b) {
  if (".." == a.text.substring(Math.max(0, b - 2), b)) {
    return(0,z.lI)(a, "…", b), (0,z.Fm)(a, b - 2, b), -1;
  }
  (0,z.lI)(a, ".", b);
  return 1;
};
var JN = function(a, b) {
  return LN("-", a, b);
};
var MN = function(a, b) {
  return LN("–", a, b);
};
var LN = function(a, b, c) {
  var d = b.text.charAt(c - 1), e = b.text, e = e.substring(e.lastIndexOf(" ", c) + 1, c);
  (d = d != a) || (d = XL(e) === e);
  if (d) {
    return(0,z.lI)(b, a, c), 1;
  }
  d = b.text.charAt(c - 2);
  if ("\x3c" == d) {
    return(0,z.lI)(b, "←", c), (0,z.Fm)(b, c - 2, c), -1;
  }
  (0,z.lI)(b, "—", c);
  (0,z.Fm)(b, c - 1, c);
  return 0;
};
var NN = function(a, b) {
  if ("—" == a.text.charAt(b - 1)) {
    return(0,z.lI)(a, "→", b), (0,z.Fm)(a, b - 1, b), 0;
  }
  (0,z.lI)(a, "\x3e", b);
  return 1;
};
var ON = function(a, b) {
  if (":" == a.text.charAt(b - 1)) {
    return(0,z.lI)(a, "☺", b), (0,z.Fm)(a, b - 1, b), 0;
  }
  (0,z.lI)(a, ")", b);
  return 1;
};
var PN = function(a, b) {
  if (":" == a.text.charAt(b - 1)) {
    return(0,z.lI)(a, "☹", b), (0,z.Fm)(a, b - 1, b), 0;
  }
  (0,z.lI)(a, "(", b);
  return 1;
};
var QN = function(a, b) {
  if ("\x3c" == a.text.charAt(b - 1)) {
    return(0,z.lI)(a, "❤", b), (0,z.Fm)(a, b - 1, b), 0;
  }
  (0,z.lI)(a, "3", b);
  return 1;
};
z.RN = function(a, b) {
  var c = a.text, d = c.lastIndexOf(" ", b - 1);
  (c = c.substring(d + 1, b)) && XL(c) == c && !nI(a, 3, d + 1, b) && (SN.test(c) || (c = "http://" + c), (0,z.xm)(a, (0,z.Bm)(d + 1, b, c, "", "")));
  return 0;
};
var TN = function(a, b) {
  for (var c = a.text, d = b;" " == c[d];) {
    d--;
  }
  var d = c.lastIndexOf(" ", d) + 1, e = c.indexOf(" ", d);
  -1 == e && (e = c.length);
  return{start:d, end:e, text:c.substring(d, e)};
};
var UN = function(a, b) {
  var c = TN(a, b);
  (0,z.zm)(a, function(b) {
    (0,z.Mg)(b) <= c.start && (0,z.Ng)(b) >= c.end && "token" == (0,z.y)(b, "rel") && (0,z.mI)(a, (0,z.Dm)(3, c.start, c.end));
  });
  c.text && VN.test(c.text) && (0,z.xm)(a, (0,z.Bm)(c.start, c.end, "/" + c.text, "", "token"));
  return 0;
};
var WN = function(a) {
  return function(b, c) {
    var d = TN(b, c);
    return d.text && VN.test(d.text) ? ((0,z.Fm)(b, d.start, d.end), (0,z.lI)(b, a, d.start), d.start + a.length - c) : 0;
  };
};
var XN = function(a, b) {
  var c = a.text, d = c.charAt(b - 1);
  if (" " == d || " " == d) {
    if ((0,z.H)("useragent.isMobile") && !/[\.!?]/.test(c.charAt(b - 2))) {
      return(0,z.lI)(a, ". ", b), (0,z.Fm)(a, b - 1, b), 1;
    }
    if (8 != a.type) {
      return 0;
    }
  }
  if ("-" == d || "–" == d) {
    if (c = c.charAt(b - 2), " " == c || " " == c) {
      (0,z.lI)(a, "—", b), (0,z.Fm)(a, b - 1, b);
    }
  }
  (0,z.lI)(a, " ", b);
  return 1;
};
var YN = function(a, b) {
  return ZN(!1, a, b);
};
var $N = function(a, b) {
  return ZN(!0, a, b);
};
var ZN = function(a, b, c) {
  var d = b.text.charAt(c - 1);
  (0,z.lI)(b, aO[d] ? a ? "“" : "‘" : (0,window.isNaN)(d) ? a ? "”" : "’" : a ? '"' : "'", c);
  return 1;
};
var bO = function() {
};
var cO = function(a) {
  this.jo = a;
  this.aD = -1;
};
z.dO = function(a, b, c, d) {
  a = WJ(b, a);
  c = WJ(d, c);
  return a && c && (0,z.We)(a.V, a.offset, c.V, c.offset);
};
z.eO = function(a) {
  z.EN.call(this);
  this.Ns = a;
  this.Dv = !1;
  this.Jc = window.document.createElement("div");
  this.Jc.setAttribute("contenteditable", "true");
  this.Jc.style.position = "absolute";
  this.Jc.style.top = "0px";
  this.Jc.style.left = "-9999px";
  this.Jc.style.width = "100px";
  this.Jc.style.height = "100px";
  this.Jc.tabIndex = -1;
  this.Jc.style.overflow = "hidden";
  window.document.body.appendChild(this.Jc);
  this.wa = [];
};
var fO = function(a, b) {
  a.Ns && (b = PL(b));
  (0,z.qN)(new zN(b), a.O);
  (0,z.qN)(new bO, a.O);
  var c = (0,z.ZH)();
  c && (c.collapse(!1), c.select());
};
var gO = function(a, b) {
  var c = b.clipboardData;
  if (!c || !c.types || !(0,z.ka)(c.types)) {
    return null;
  }
  if (a.Ns && !a.Dv) {
    if (-1 !== (0,z.bb)(c.types, "text/html")) {
      return c.getData("text/html");
    }
    if (!(0,z.UB)(c.types, function(a) {
      return-1 !== a.indexOf("plain");
    })) {
      return null;
    }
  }
  return-1 !== (0,z.bb)(c.types, "text/plain") ? (c = b.clipboardData.getData("text/plain"), a.O.Fl() && (c = c.replace(/\n/g, " ")), (0,z.WL)(c)) : null;
};
var hO = function(a, b) {
  this.nJ = a;
  this.xF = b;
};
var iO = function(a) {
  var b = (0,z.ZH)();
  return!b.isCollapsed() && !!(0,z.Cw)(b.te(), a.aa());
};
z.jO = function(a) {
  z.EN.call(this);
  this.qF = a;
};
var kO = function(a, b) {
  var c = 34 == b, d = 39 == b, e = 45 == b, f = 8211 == b, h = 46 == b, k = 62 == b, l = 40 == b, m = 41 == b, q = 51 == b, x = a.O, G = (0,z.sN)(x), M = G.getSelection().start.X;
  if (8 == (0,z.LM)(G, M).type) {
    if (iO(x)) {
      if (d) {
        return(0,z.qN)(new hO("'", "'"), x), !0;
      }
      if (c) {
        return(0,z.qN)(new hO('"', '"'), x), !0;
      }
      if (l) {
        return(0,z.qN)(new hO("(", ")"), x), !0;
      }
    }
    return!1;
  }
  return c ? (iO(x) ? (0,z.qN)(new hO("“", "”"), x) : (0,z.qN)(HN($N), x), !0) : d ? (iO(x) ? (0,z.qN)(new hO("‘", "’"), x) : (0,z.qN)(HN(YN), x), !0) : e ? ((0,z.qN)(HN(JN), x), !0) : f ? ((0,z.qN)(HN(MN), x), !0) : k ? ((0,z.qN)(HN(NN), x), !0) : h ? ((0,z.qN)(HN(IN), x), !0) : l && iO(x) ? ((0,z.qN)(new hO("(", ")"), x), !0) : l ? ((0,z.qN)(HN(PN), x), !0) : m ? ((0,z.qN)(HN(ON), x), !0) : q ? ((0,z.qN)(HN(QN), x), !0) : !1;
};
z.lO = function(a, b) {
  if (!(0,z.oa)(a)) {
    if (a && "function" == typeof a.handleEvent) {
      a = (0,z.xa)(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : z.ea.setTimeout(a, b || 0);
};
var mO = function(a, b, c) {
  z.v.call(this);
  this.io = a;
  this.Mw = b || 0;
  this.xf = c;
  this.Rv = (0,z.xa)(this.gl, this);
};
var nO = function(a) {
  a.Od() && a.Yc();
};
var oO = function(a, b, c) {
  this.cC = a;
  this.Ix = b;
  this.eC = this.Mv = !1;
  this.ow = c || {};
};
var pO = function(a) {
  this.NB = a;
};
z.qO = function(a) {
  z.v.call(this);
  this.xf = a;
  this.zb = {};
};
var rO = function(a, b, c, d, e, f) {
  (0,z.ia)(c) || (c && (sO[0] = c.toString()), c = sO);
  for (var h = 0;h < c.length;h++) {
    var k = (0,z.NJ)(b, c[h], d || a.handleEvent, e || !1, f || a.xf || a);
    if (!k) {
      break;
    }
    a.zb[k.key] = k;
  }
  return a;
};
var tO = function(a, b) {
  z.BN.call(this);
  this.id = a;
  this.Hd = null;
  this.oi = {};
  this.Fj = {};
  for (var c in uO) {
    this.Fj[c] = [];
  }
  this.Zv = "";
  this.bh = {};
  this.bh[vO] = 1;
  this.bh[z.wO] = 1;
  this.Pw = this.El = !1;
  this.Mn = new mO(this.WB, xO, this);
  this.ew = {};
  for (var d in yO) {
    this.ew[yO[d]] = 0;
  }
  z.Re && (this.$d = new mO(this.Cw, zO, this));
  this.pf = new z.qO(this);
  this.EN = [];
  this.Jj = AO;
  this.Rl = (0,z.td)(b || window.document);
  this.ic = this.Rl.aa(this.id);
  this.Lv = this.Rl.Ld();
};
var BO = function(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in CO;
  return(a.ctrlKey || a.metaKey) && a.keyCode in DO || b;
};
var EO = function(a, b) {
  a.Jj = 2;
  a.oa = b;
  a.Hd = (0,z.td)(b);
  a.El = !1;
  a.Pw = !1;
  b.setAttribute("g_editable", "true");
  b.setAttribute("role", "textbox");
};
var FO = function(a) {
  a.Jj = AO;
  for (var b in a.oi) {
    var c = a.oi[b];
    c.gr() || c.disable(a);
  }
  a.oa = null;
  a.Hd = null;
};
var GO = function(a) {
  a.pf && a.pf.Oj();
  if ((z.sC || z.tC) && a.Fe() && a.MD()) {
    try {
      var b = a.Hd.Ld();
      b.removeEventListener("keydown", a.En, !1);
      b.removeEventListener("touchend", a.En, !1);
    } catch (c) {
    }
    delete a.En;
  }
  if (z.Se && a.Fe()) {
    try {
      b = a.Hd.Ld(), b.removeEventListener("focus", a.Pv, !1), b.removeEventListener("blur", a.Ov, !1);
    } catch (d) {
    }
    delete a.Pv;
    delete a.Ov;
  }
  a.$d && a.$d.stop();
  a.Mn.stop();
};
var HO = function(a, b) {
  if (9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || z.Re && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), !1;
  }
  var c;
  (c = b.charCode) || (c = BO(b) ? !0 : !(!z.Re || b.ctrlKey || b.metaKey || z.Re && !b.charCode));
  a.Aw = c;
  a.Aw && a.Nn();
  return!0;
};
var IO = function(a, b, c) {
  var d = {};
  a = a.sx(8, b || "", d);
  (0,z.vf)(c, d);
  z.ld && (0,z.JJ)(c);
  c.innerHTML = a;
};
var JO = function(a, b) {
  if (!b.altKey) {
    var c = z.Oi ? b.metaKey : b.ctrlKey;
    if (c || KO[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.$n(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault();
    }
  }
};
var LO = function(a, b, c) {
  for (var d = a.Fj[7], e = 0;e < d.length;++e) {
    var f = d[e];
    if (f.isEnabled(a) && f.Pg(b) && (c || f.gr())) {
      return f.queryCommandValue(b);
    }
  }
  return c ? null : !1;
};
z.MO = function(a) {
  return(a = a.Hd && a.Hd.Ld()) && (0,z.ZH)(a);
};
z.uN = function(a, b, c) {
  if (!NO(a, "selectionchange")) {
    var d = (0,z.MO)(a), d = d && (0,z.zI)(d);
    a.Sw = !!d && (0,z.Ud)(a.aa(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", oT:b && b.type});
    a.$n(4, b, c);
  }
};
var tN = function(a, b) {
  b && (a.$d && nO(a.$d), a.bh[vO] = 1);
  a.$d && nO(a.$d);
  nO(a.Mn);
  a.bh[z.wO] = 1;
};
var OO = function(a, b, c) {
  !b && a.$d && nO(a.$d);
  a.bh[vO] = 0;
  a.bh[z.wO] = 0;
  b && a.Cw();
  c && a.WB();
};
var NO = function(a, b) {
  return!!a.bh[b] || a.ew[b] && 500 >= (0,z.ej)() - a.ew[b];
};
var PO = function(a) {
  (0,z.Zd)(a.target, "A") && a.preventDefault();
};
z.QO = function(a) {
  if (a.queryCommandValue("usinglorem")) {
    return " ";
  }
  if (!a.Ze()) {
    return a.ic.innerHTML;
  }
  var b = a.aa(), c = b.cloneNode(!1), b = b.innerHTML;
  z.ld && b.match(/^\s*<script/i) && (b = " " + b);
  c.innerHTML = b;
  a.kM(11, c);
  return a.sx(10, c.innerHTML);
};
var RO = function(a) {
  z.ld && (0,z.$L)(a.Hd.Ld());
  SO != a.id && a.execCommand("updatelorem");
  if ((z.sC || z.tC) && a.Fe() && a.MD()) {
    var b = a.Hd.Ld();
    a.En = (0,z.xa)(b.focus, b);
    b.addEventListener("keydown", a.En, !1);
    b.addEventListener("touchend", a.En, !1);
  }
  z.Se && a.Fe() ? (a.Pv = (0,z.xa)(a.iw, a), a.Ov = (0,z.xa)(a.VB, a), b = a.Hd.Ld(), b.addEventListener("focus", a.Pv, !1), b.addEventListener("blur", a.Ov, !1)) : (z.EC ? (a.addListener("focus", a.XB), a.addListener(z.HC, a.UB)) : a.addListener("focus", a.iw), a.addListener("blur", a.VB, z.Re));
  z.Re ? z.zC || !a.Fe() ? a.pf.qa(a.aa(), "DOMSubtreeModified", a.Fw) : (b = a.Hd.Lg(), a.pf.qa(b, TO, a.Fw, !0), a.pf.qa(b, "DOMAttrModified", (0,z.xa)(a.QL, a, a.Fw), !0)) : (a.addListener(["beforecut", "beforepaste", "drop", "dragend"], a.Nn), a.addListener(["cut", "paste"], eM(a.fl)), a.addListener("drop", a.qC));
  a.addListener(z.ce ? "dragend" : "dragdrop", a.qC);
  a.addListener("keydown", a.Pr);
  a.addListener("keypress", a.tC);
  a.addListener("keyup", a.uC);
  a.zx = new mO(a.VL, 250, a);
  z.DC && a.addListener("click", PO);
  a.addListener("mousedown", a.TL);
  a.Px ? (a.pf.qa(a.Hd.Lg(), "mouseup", a.wC), a.addListener("dragstart", a.RL)) : a.addListener("mouseup", a.wC);
  a.HC();
  OO(a);
  a.dispatchEvent("load");
  for (var c in a.oi) {
    a.oi[c].enable(a);
  }
};
var UO = function(a) {
  if (!(0,z.ha)(a.Qw) && (a.Qw = !1, z.ld && a.Fe())) {
    for (var b = a.Rl.Ld();b != b.parent;) {
      try {
        b = b.parent;
      } catch (c) {
        break;
      }
    }
    b = b.location;
    a.Qw = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps");
  }
  return a.Qw;
};
var VO = function(a) {
  a.pw && ((0,z.YA)(a.pw), a.pw = null);
};
var WO = function(a) {
  a = "padding:0;" + a.ic.style.cssText;
  (0,z.Da)(a, ";") || (a += ";");
  a += "background-color:white;";
  z.ld && (a += "overflow:visible;");
  return{frameBorder:0, style:a};
};
z.XO = function(a) {
  z.EN.call(this);
  this.Le = a;
};
var YO = function(a) {
  var b = a.O.aa(), c = a.Le - (0,z.PH)(b).length;
  b.setAttribute("data-chars-remaining", String(c));
  (0,z.Tc)(b, "display-char-count", c <= 0.25 * a.Le);
};
z.ZO = function(a) {
  this.id = a.id;
  this.anchor = a.anchor;
  this.startIndex = Number(a.startIndex);
  this.endIndex = Number(a.endIndex);
  this.content = a.content;
};
var $O = function(a, b) {
  this.$m = a;
  this.ug = b;
};
z.aP = function(a, b) {
  return b ? a.ug && (0,z.wJ)(a.ug, b) || (0,z.wJ)(a.$m, b) : null;
};
var bP = function(a, b, c) {
  function d(a) {
    var d = a.getAttribute("name");
    d && b.call(c, a, d);
  }
  a.ug && SJ(a.ug, d);
  SJ(a.$m, d);
};
z.cP = function(a, b) {
  return a.ug && (0,z.Ud)(a.ug, b) ? a.ug : (0,z.Ud)(a.$m, b) ? a.$m : null;
};
z.dP = function(a) {
  var b = [];
  a.ug && b.push(a.ug);
  b.push(a.$m);
  return b;
};
z.eP = function(a, b) {
  var c;
  c = (0,z.cP)(a, b);
  return(c = (0,z.ki)(b, z.sJ, c)) && c.getAttribute("name") || null;
};
z.fP = function(a, b) {
  return(0,z.ZL)(a, b).y + CJ(a, "padding").top;
};
z.gP = function(a, b, c) {
  if (c = (0,z.Dw)(c, (0,z.cP)(a, c))) {
    var d = null;
    a = {};
    var e = (0,z.Oc)(b), f;
    for (f = 0;f < e.length;f++) {
      d = e[f], (0,z.Ca)(d, "section-") && (a[d] = !1);
    }
    e = (0,z.Oc)(c);
    for (f = 0;f < e.length;f++) {
      d = e[f], (0,z.Ca)(d, "section-") && (a[d + "-notes"] = !0);
    }
    (c = c.getAttribute("data-background-color")) && !(0,z.Da)(c, "Light") && (a["section-image-full-notes"] = !0);
    for (var h in a) {
      (0,z.Tc)(b, h, a[h]);
    }
  }
};
z.hP = function(a, b) {
  z.EN.call(this);
  this.Le = a;
  this.gy = b;
};
var iP = function(a) {
  a = (0,z.sN)(a.O);
  for (var b = 0, c = 0;c < (0,z.JM)(a);c++) {
    b += (0,z.LM)(a, c).text.length;
  }
  return b;
};
z.jP = function() {
  z.EN.call(this);
};
z.kP = function(a) {
  z.EN.call(this);
  this.GF = a;
};
var lP = function(a, b) {
  return(0,z.ki)(b, function(a) {
    return a.getAttribute && a.getAttribute("data-default-value");
  }, a.O.aa(), !0);
};
var mP = function(a, b) {
  var c = nP(a, b);
  c && YL(c, !0);
  return!!c;
};
var nP = function(a, b) {
  var c = b.getElementsByClassName("default-value")[0];
  return c && lP(a, c) == b ? c : null;
};
var oP = function() {
  z.EN.call(this);
};
var pP = function(a, b) {
  tO.call(this, a, b);
};
var qP = function(a) {
  tO.call(this, a, void 0);
  this.gp = this.oA = this.Vk = !1;
  this.Um = null;
};
z.sN = function(a) {
  if (a.Um) {
    var b = a.Um, c = (0,z.MO)(a);
    b.He = [];
    b.He.length = b.zd.length;
    b.ih = null;
    b.nd = AM(b, c);
    b.Au = !1;
  } else {
    for (var b = a.aa(), c = (0,z.Gw)(b), d = 0;d < c.length;d++) {
      (0,z.Rc)(c[d].getElementsByTagName("*"), z.Aw);
    }
    a.Um = new z.yM(b, (0,z.MO)(a), {Mo:a.Pa(), Bs:!1});
  }
  a = a.Um;
  a.Qb(0) || ((0,z.PM)(a, 0, new z.qm("", 1, "")), a.hg(0, 0));
  return a;
};
var rP = function(a) {
  this.Kv = a;
  this.bC = [];
};
z.sP = function(a) {
  if (!a.$v) {
    var b = a.Ec(), b = (0,z.hJ)(b);
    a.$v = b.tagName && "IMG" == b.tagName ? b.getAttribute("alt") : (0,z.aM)(a.Ec());
  }
  return a.$v;
};
z.tP = function(a) {
  a = a.Ec();
  if (z.GC) {
    var b;
    b = a.nextSibling;
    b && 3 == b.nodeType && ((0,z.Ca)(b.data, " ") || (0,z.Ca)(b.data, " ")) || (b = (0,z.td)(a).createTextNode(" "), (0,z.Md)(b, a));
    FJ(b, 1).select();
  } else {
    YL(a, !1);
  }
};
var uP = function(a) {
  a = new rP(a);
  a.Ec().href = "/";
  return a;
};
var vP = function(a) {
  if (/\s/.test(a) || wP.test(a)) {
    return!1;
  }
  var b = !1;
  /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = !0);
  a = (0,z.Jf)(a);
  if (-1 != (0,z.bb)(["mailto", "aim"], a[1])) {
    return!0;
  }
  var c = a[3];
  if (!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c)) {
    return!1;
  }
  b = a[5];
  return!b || 0 == b.indexOf("/");
};
var xP = function(a) {
  this.mF = a;
};
var yP = function(a) {
  this.bH = a;
};
var zP = function(a, b) {
  this.mc = a;
  this.Wq = b;
};
var AP = function(a, b) {
  this.mc = a;
  this.Wq = b;
};
z.BP = function() {
  z.EN.call(this);
  this.sh = {};
  this.yz = null;
  this.Su = !1;
};
var CP = function(a) {
  for (var b in a.sh) {
    delete a.sh[b];
  }
};
var DP = function(a) {
  if (!a.Su) {
    return!0;
  }
  var b = a.yz, c = (0,z.MO)(a.O);
  if (!c || !c.isCollapsed()) {
    return!0;
  }
  c = EP(a, c);
  if (!b || !c) {
    return!0;
  }
  var d;
  d = b.V;
  var e = c.V;
  if ((d = d == e || d.getAttribute("name") && d.getAttribute("name") == e.getAttribute("name")) && c.offset === b.offset) {
    return!1;
  }
  if (!(d && c.offset > b.offset)) {
    return!0;
  }
  b = (0,z.dO)(c.V, b.offset, c.V, c.offset);
  if (!b) {
    return!0;
  }
  b.select();
  for (var f in a.sh) {
    a.sh[f] && a.execCommand(f);
  }
  a = (0,z.ZH)();
  if (!a) {
    return!0;
  }
  a.collapse(!1);
  a.select();
  return!0;
};
var EP = function(a, b) {
  var c = a.O.aa(), d = KI(b, !1);
  return(c = (0,z.Cw)(d.V, c)) ? new CI(c, vJ(d, c)) : null;
};
var FP = function(a) {
  var b = a.O;
  if (a.queryCommandValue("M_3")) {
    (0,z.qN)(new AP(3, !1), b);
  } else {
    var c = String((0,z.qa)({}));
    a = new z.pN;
    var d = !1;
    a.Ml = function(a, b, h) {
      h === b || d || ((0,z.xm)(a, (0,z.Bm)(b, h, "/", c, "")), d = !0);
    };
    (0,z.qN)(a, b);
    a = b.aa().querySelector('a[title\x3d"' + c + '"]');
    a.removeAttribute("title");
    a = uP(a);
    b.execCommand("link", a);
  }
};
var GP = function() {
  z.EN.call(this);
};
var HP = function(a) {
  z.BN.call(this);
  this.ZB = a;
  this.Vw = new z.qO(this);
  this.xf = new z.qO(this);
  IP && this.xf.qa(a, "compositionstart", this.PL).qa(a, "compositionend", this.NL).qa(a, "compositionupdate", this.xC);
  this.xf.qa(a, "textInput", this.WL).qa(a, "text", this.xC).qa(a, "keydown", this.Pr);
};
var JP = function(a, b) {
  z.OA.call(this, a);
  this.reason = b;
};
var KP = function(a, b) {
  a.Zh || (z.ce && !IP && a.Vw.qa(a.ZB, "keyup", a.SL), a.Zh = !0, a.dispatchEvent(new JP("startIme", b)));
};
var LP = function(a, b) {
  a.Zh = !1;
  a.Vw.Oj();
  a.dispatchEvent(new JP("endIme", b));
};
var MP = function(a) {
  switch(a.keyCode) {
    case 16:
    ;
    case 17:
      return!1;
    default:
      return!0;
  }
};
var NP = function() {
  z.EN.call(this);
  this.Gp = null;
};
var OP = function() {
  z.EN.call(this);
  this.kv = {};
  this.Ap = {};
};
var PP = function() {
  z.EN.call(this);
  this.wa = [];
};
var QP = function(a) {
  return 3 == a.nodeType ? !1 : (0,z.Pc)(a, "drop-cap");
};
var RP = function(a) {
  var b = a.target;
  return z.ce && "LI" == b.tagName && a.clientX < (0,z.ti)(b).left;
};
var SP = function(a, b, c, d) {
  var e = (0,z.MO)(a.O);
  if (d && !(0,z.LL)(e) && "LI" === e.Ga().tagName) {
    return!0;
  }
  var f = KI(e, d), e = f.V, h = b.getSelection();
  d = d ? h.start : h.end;
  return null == bN(b, f) ? (f = TP(a, e, c), f || (c = !c, f = TP(a, e, c)), f && (a = (0,z.$M)(b, f), -1 != a && (d.X = a, d.offset = c ? 0 : (0,z.LM)(b, a).text.length)), !0) : (b = (0,z.Cw)(e, a.O.aa())) && 1 === d.offset && (0,z.Nw)(b) && (0,z.ki)(e, QP, b) ? (d.offset = c ? 2 : 0, !0) : !1;
};
var TP = function(a, b, c) {
  var d = a.O.aa(), e = null;
  (0,z.aI)(new z.ie(b, !c, !0), function(a) {
    if (a === d) {
      throw z.fe;
    }
    if ((0,z.Aw)(a)) {
      throw e = a, z.fe;
    }
  }, a);
  return e;
};
var UP = function() {
  z.EN.call(this);
};
var VP = function() {
  z.EN.call(this);
};
z.WP = function(a) {
  z.Oj.call(this);
  var b = a.id;
  b || (b = a.id = "editor_" + (0,z.qa)(a));
  this.jz = b;
  this.fn = [];
  this.OA = new OP;
  this.ta(new GP);
  this.ta(new oP);
  this.ta(new NP);
  this.ta(new PP);
  this.fz = new z.qO(this);
  a = (0,z.ya)(z.ad, this.fz);
  this.mo || (this.mo = []);
  this.mo.push((0,z.xa)(a, void 0));
  this.gp = this.Ui = !1;
};
var XP = function(a) {
  return{rf:!0, isPublished:!0, media:null, sections:a.Pa(), li:!1, Lh:!1, kf:a.Pa()};
};
z.YP = function() {
  z.EN.call(this);
};
var ZP = function(a, b) {
  for (var c = null, d = a.firstChild;d;d = c) {
    if (c = d.nextSibling, 3 != d.nodeType) {
      if (1 != d.nodeType) {
        (0,z.Od)(d);
      } else {
        var e = b.De[d.tagName] || b.fw;
        if (!e) {
          throw Error("Missing default tag policy");
        }
        if (e.hi) {
          if (e.ye) {
            for (var f = (0,z.ma)(e.ye) ? e.ye : "", f = f && f != d.tagName ? window.document.createElement(f) : null, h = d.attributes.length - 1;0 <= h;h--) {
              var k = d.attributes[h].nodeName, l = d.getAttribute(k);
              (l = vI(e, k, l)) ? (f || d).setAttribute(k, l) : f || d.removeAttribute(k);
            }
            f && ((0,z.Kd)(f, d.childNodes), (0,z.Md)(f, d), (0,z.Od)(d), d = f);
            ZP(d, e.cd);
          } else {
            for (;d.lastChild;) {
              (0,z.Md)(d.lastChild, d);
            }
            c = d.nextSibling;
            (0,z.Od)(d);
          }
        } else {
          (0,z.Od)(d);
        }
      }
    }
  }
};
z.$P = function(a) {
  z.EN.call(this);
  this.Hu = a;
};
z.aQ = function(a, b) {
  z.EN.call(this);
  this.XA = this.hf = this.gu = this.Ct = !1;
  this.wa = [];
  this.Ez = [];
  this.J = "";
  this.Zr = UN;
  this.Ox = WN;
  this.view = z.TJ;
  this.ea = b;
  this.Nj = null;
  this.yx = a;
  this.Na = new z.Mj;
  this.D = this.Na.D.bind(this.Na);
  this.ya = this.Na.ya.bind(this.Na);
  this.av = this.ac = null;
};
var bQ = function(a) {
  var b = a.ac.querySelector(".active");
  b && (a.av && a.av.cancel(), b = b.getAttribute("data-action-value"), (0,z.qN)(HN([a.Ox(b), a.Zr]), a.O), a.Na.S("select"));
  cQ(a);
};
var dQ = function(a, b) {
  if (a.hf) {
    switch(b.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        b.preventDefault();
        break;
      case 38:
        b.preventDefault();
        var c = a.ac.querySelector(".active");
        c && (0,z.u)(c, "active");
        (c = c && c.previousSibling) || (c = a.ac.querySelector(".typeahead-item:last-child"));
        (0,z.t)(c, "active");
        break;
      case 40:
        b.preventDefault(), eQ(a);
    }
    b.stopPropagation();
  }
};
var eQ = function(a) {
  var b = a.ac.querySelector(".active");
  b && (0,z.u)(b, "active");
  (b = b && b.nextSibling) || (b = a.ac.querySelector(".typeahead-item"));
  (0,z.t)(b, "active");
};
var cQ = function(a) {
  a.hf && (0,z.Od)(a.ac);
  a.hf = !1;
};
var fQ = function(a, b, c, d, e) {
  z.WP.call(this, b);
  this.ca = a;
  this.ta(new z.kP(c));
  this.ta(new z.eO(!1));
  this.ta(new z.$P(z.ZC));
  1E3 <= window.innerWidth && (this.wn = new z.aQ((0,z.Un)((0,z.Ks)(a.get("app"))), a.get("request")), this.ta(this.wn));
  this.ta(new z.YP);
  this.ta(new z.jO(!1));
  this.ta(new z.hP(d, !0));
  this.Ui = !0;
  this.Le = d;
  this.oe = a.get("request");
  this.U = a.get("dialog");
  this.CH = e;
  this.H();
};
var gQ = function(a) {
  a.Gb(a.Hi);
  a.S("cancel");
};
var hQ = function(a, b, c, d) {
  fQ.call(this, a, b, "Leave a note", 400, d || null);
  this.$ = c;
};
var iQ = function(a, b, c) {
  a.Ps = b;
  a.hy = c;
};
z.jQ = function(a, b, c, d) {
  a.Lt = b;
  a.Kt = c;
  a.hz = d;
};
var kQ = function(a) {
  return'\x3cdiv class\x3d"notes-marker no-user-select" data-action\x3d"select-anchor" data-action-value\x3d"' + (0,z.O)(a.kr) + '"\x3e' + lQ(a) + "\x3c/div\x3e";
};
var lQ = function(a) {
  return'\x3cspan class\x3d"notes-marker-icon icons icons-notes"\x3e\x3c/span\x3e' + ("remove" == a.count ? '\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"notes-marker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"notes-marker-count"\x3e' + (0,z.N)(a.count) + "\x3c/span\x3e");
};
var mQ = function(a, b, c) {
  return'\x3cdiv class\x3d"notes-list-fade"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-list-fade-bottom"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-container-scroller"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-dismiss" data-action\x3d"dismiss-note"\x3e' + lQ({count:"remove"}) + '\x3c/button\x3e\x3cdiv class\x3d"notes-list"\x3e\x3cdiv class\x3d"notes-items"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-new-note" tabIndex\x3d"-1"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-add"' + (c.isAuthenticated ? 
  'data-action\x3d"start-note"' : (0,z.So)({prompt:"Sign in to leave a note"})) + 'title\x3d"Leave a note"\x3e\x3cspan class\x3d"notes-add-icon icons icons-add-circled"\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-text"\x3eLeave a note for \x3cspan class\x3d"notes-post-creator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-creator-text"\x3eLeave a note\x3c/span\x3e\x3c/button\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-edit notes-edit-mode"\x3e' + (0,z.$o)({Cr:!0, Oc:"notes-avatar notes-author-icon", 
  user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (0,z.N)(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notes-note-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-disclaimer"\x3eThis note is only visible to you and the author, unless the author chooses to make it public.\x3c/div\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-spacer"\x3e\x26nbsp;\x3c/div\x3e\x3c/div\x3e';
};
var nQ = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notes-note-inner"\x3e\x3cdiv class\x3d"notes-note-main"\x3e' + ('\x3cspan class\x3d"notes-state-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notes-controls"\x3e' + (a.canAdminister ? '\x3cul class\x3d"notes-state notes-state-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  (0,z.O)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.lx.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  (0,z.O)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notes-state"\x3e\x3cli data-tooltip\x3d"This note is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + 
  (0,z.O)(a.note.anchor) + "-" + (0,z.O)(a.note.noteId) + '" class\x3d"notes-link icons icons-link" data-tooltip\x3d"Click to update the address bar with this note’s shareable URL"\x3e' : "") + "\x3c/div\x3e" + (0,z.$o)({fc:"notes-avatar", Oc:"notes-author-icon", user:a.note.author}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (d ? '\x3ca href\x3d"/@' + (0,z.O)(a.note.author.username) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.note.author.name) + '"\x3e' + (0,z.N)(a.note.author.name) + "\x3c/a\x3e" : 
  "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.Sh)(String(a.note.tj).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e' + (d == c.currentUser.userId ? '\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-note" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note" data-action-value\x3d"' + 
  (0,z.O)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-note" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, f = Math.max(a.note.replies.length - a.ii, 0);
  if (e) {
    b += '\x3cdiv class\x3d"notes-replies ' + (0 < f ? "notes-replies-hidden" : "") + '"\x3e\x3cdiv class\x3d"notes-replies-inner"\x3e';
    if (0 < f) {
      b += '\x3cbutton data-action\x3d"show-hidden-note-replies" class\x3d"btn btn-chromeless notes-replies-hidden-btn"\x3eView ' + (0,z.N)(f) + " " + (a.ii ? "more" : "") + " " + (1 < f ? "replies" : "reply") + '\x3c/button\x3e\x3cdiv class\x3d"notes-replies-hidden-container"\x3e';
      for (var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var m = h[l];
        b += l < f ? oQ((0,z.K)(a, {Pd:m}), c) : "";
      }
      b += "\x3c/div\x3e";
    }
    h = a.note.replies;
    k = h.length;
    for (l = 0;l < k;l++) {
      m = h[l], b += l >= f ? oQ((0,z.K)(a, {Pd:m}), c) : "";
    }
    b += "\x3c/div\x3e\x3c/div\x3e";
  }
  return b += '\x3cdiv class\x3d"notes-replies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-reply notes-reply-edit notes-edit-mode"\x3e' + (0,z.$o)({fc:"notes-avatar", Oc:"notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e\x3ca href\x3d"/@' + (0,z.O)(c.currentUser.username) + '" title\x3d"Go to the profile of ' + (0,z.O)(c.currentUser.name) + '"\x3e' + (0,z.N)(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-reply-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + 
  (0,z.O)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e' : "") + '\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-link-reply"' + (c.isAuthenticated ? 'data-action\x3d"start-reply" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + '"' : (0,z.So)({prompt:"Sign in reply"})) + 'title\x3d"Leave a reply"\x3e' + 
  (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + (0,z.N)(a.note.author.name)) + "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e";
};
var oQ = function(a, b) {
  return'\x3cdiv class\x3d"notes-reply"\x3e' + (a.canAdminister && a.Pd.author.userId != b.currentUser.userId ? '\x3cdiv class\x3d"notes-hide-reply" data-action\x3d"hide-reply" data-action-value\x3d"' + (0,z.O)(a.note.noteId) + "," + (0,z.O)(a.Pd.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + (0,z.$o)({fc:"notes-avatar", Oc:"notes-author-icon", user:a.Pd.author}, b) + '\x3cdiv class\x3d"notes-author"\x3e' + (a.Pd.author ? 
  '\x3ca href\x3d"/@' + (0,z.O)(a.Pd.author.username) + '" title\x3d"Go to the profile of ' + (0,z.O)(a.Pd.author.name) + '"\x3e' + (0,z.N)(a.Pd.author.name) + "\x3c/a\x3e" : "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.Sh)(String(a.Pd.tj).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (b.isAuthenticated ? a.Pd.author && a.Pd.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-reply" data-action-value\x3d"' + 
  (0,z.O)(a.note.noteId) + "," + (0,z.O)(a.Pd.replyId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + (0,z.O)(a.Pd.replyId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.O)(a.Pd.replyId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-reply" data-action-value\x3d"' + 
  (0,z.O)(a.Pd.replyId) + '"\x3eDelete\x3c/button\x3e\x3c/div\x3e' : "" : "") + "\x3c/div\x3e";
};
z.pQ = function() {
  return'\x3cdiv class\x3d"notes-vote-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator" data-action\x3d"save-notes-vote"\x3eShare\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"cancel-notes-vote"\x3eNo thanks\x3c/button\x3e\x3c/div\x3e';
};
var qQ = function(a, b, c) {
  z.Oj.call(this);
  this.pK = a;
  this.ba = b;
  this.je = c;
  a = window.document.createElement("div");
  a.className = "notes-markers";
  (0,z.Md)(a, this.pK);
  this.Oi = a;
  this.ld = {};
  this.bf = this.sk = null;
};
z.rQ = function(a, b, c) {
  var d = a.je.get(b);
  if (d) {
    (0,z.Tc)(d, "notes-source-active", c);
    var e = a.ld[b];
    e && ((0,z.Tc)(e, "notes-active", c), c = (0,z.zf)(d, "float"), e.style.left = "left" == c ? "0" : -1 * CJ(d, "margin").right + "px", a = (0,z.aP)(a.je, b)) && (a = (0,z.Hn)(a.className), (0,z.Tc)(e, "notes-source-floated", 2 == a || 4 == a));
  }
};
var sQ = function(a) {
  var b = {};
  bP(a.je, function(a, d) {
    d in b || (b[d] = (0,z.fP)(a, this.Oi));
  }, a);
  return b;
};
var tQ = function(a) {
  var b = sQ(a), c = {};
  bP(a.je, function(a, d) {
    if (!c[d]) {
      var h;
      if (this.ld[d]) {
        h = this.ld[d];
      } else {
        h = (h = (0,z.uQ)(this.ba, d)) ? h.count() : 0;
        var k = (0,z.Hd)((0,z.I)(kQ, {count:h, kr:d}));
        this.Oi.appendChild(k);
        0 < h && ((0,z.t)(a, "notes-source-hasnotes"), (0,z.t)(k, "notes-hasnotes"));
        h = this.ld[d] = k;
      }
      h.style.top = b[d] + "px";
      (0,z.rQ)(this, d, d == this.ba.va);
      c[d] = !0;
      (0,z.gP)(this.je, h, a);
    }
  }, a);
  for (var d in a.ld) {
    c[d] || ((0,z.Od)(a.ld[d]), delete a.ld[d]);
  }
};
z.vQ = function(a, b) {
  if (a.ba.Ze()) {
    var c = b || a.ba.va, d = a.ld[c];
    d && (c = (0,z.uQ)(a.ba, c).oc(), d.innerHTML = (0,z.I)(lQ, {count:c}), (0,z.Tc)(d, "notes-hasnotes", 0 < c));
  }
};
var wQ = function(a, b, c) {
  z.Mj.call(this);
  this.Qz = {};
  this.Bp = {};
  this.rA = {};
  this.Ag = null;
  this.ca = a;
  this.oe = a.get("request");
  this.$ = b;
  this.Mm = c;
  this.Bm = !1;
  this.me = null;
  this.va = "";
  this.cD = null;
};
z.uQ = function(a, b) {
  var c = a.Qz[b];
  c || (c = a.Qz[b] = new z.sk, a.S("new_note_list", c, a));
  return c;
};
var xQ = function(a) {
  var b = (0,z.H)("currentUser.userId");
  return a.mC().find(function(a) {
    a = a.get("author");
    return a == b || (0,z.pa)(a) && a.userId == b ? !0 : !1;
  });
};
var yQ = function(a, b) {
  if (!b) {
    return!1;
  }
  var c = b.text;
  if (a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0;
  }
  var d = new RegExp((0,z.Qa)(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1;
};
var zQ = function(a, b, c) {
  var d = (0,z.pk)(b, "id"), e = (0,z.uQ)(a, (0,z.pk)(b, "anchor")), f = e ? e.indexOf(b) : -1;
  b.set("state", c);
  "HIDDEN" == c && (0,z.rk)(b);
  var h = e ? e.indexOf(b) : -1;
  return{Bc:a.oe.put(z.dH.Q({postId:a.$, noteId:d}), {state:c}, {na:!0}), GD:function() {
    -1 == h && (-1 == f ? e.add(b) : e.Ih(b, f));
  }};
};
z.AQ = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.kr = b.getAttribute("name");
  this.Md = c;
};
var BQ = function(a, b, c, d, e) {
  fQ.call(this, a, b, "Leave a reply", 200, d);
  this.$ = c;
  this.Fq = e || null;
};
var CQ = function(a) {
  z.v.call(this);
  var b = (0,z.ZH)();
  this.rn = b && new DQ(KI(b, !0), a);
  this.At = b && new DQ(KI(b, !1), a);
};
var DQ = function(a, b) {
  this.yd = a;
  this.fG = b;
  var c = (0,z.Cw)(a.V, b);
  this.jy = (this.Os = c) && c.getAttribute("name");
  this.Sz = c ? vJ(a, c) : -1;
};
var EQ = function(a) {
  var b = window.document.body;
  return(0,z.Ud)(b, a.yd.V) ? a.yd : a.Os && (0,z.Ud)(b, a.Os) ? WJ(a.Sz, a.Os) : a.jy && (b = (0,z.wJ)(a.fG, a.jy)) ? WJ(a.Sz, b) : null;
};
var FQ = function() {
  return "Are you sure you want to delete this note?";
};
var GQ = function() {
  return "Your note is too long, do you want to abandon your changes?";
};
z.HQ = function(a, b, c, d) {
  z.v.call(this);
  this.Bo = a;
  this.screen = a.get("screen");
  this.$k = a.get("app");
  this.is = b;
  this.is.D("change", this.bz, this);
  this.Xb = {};
  this.ob = [];
  this.lj = a.get("butter-bar");
  this.el = a.get("dialog");
  this.Ff = c;
  this.$e = null;
  var e = c.querySelector(".notes-source");
  this.anchors = new $O(e, null);
  var f = pJ("div", "layout-single-column notes-position-container");
  (0,z.Nd)(this.Ff, f, 0);
  this.kx = f;
  this.Nb = this.ym();
  this.ij = c.querySelector(".body");
  this.tb = this.Nb.querySelector(".notes-list");
  this.eD = this.Nb.querySelector(".notes-spacer");
  this.fg = (0,z.pi)(e);
  this.isAuthenticated = !!(0,z.H)("isAuthenticated");
  this.currentUser = (0,z.H)("currentUser");
  this.postId = (0,z.pk)(b, "id");
  this.canAdminister = d;
  this.Ow = "true" == this.ij.contentEditable;
  this.data = new wQ(a, this.postId, this.Ow);
  this.data.D("new_note_list", this.AI, this);
  if (this.Ig = a.get("vote-widget")) {
    a = this.Ig, b = this.data, a.mu = b, a.Od() && (b = b.load(), (0,z.r)((0,z.Cc)((0,z.sw)(a), b), a.Cv, a));
  }
  this.Gc = new qQ(this.Nb, this.data, this.anchors);
  this.Gc.H();
  this.Kn = (0,z.r)(this.data.load(), this.ax, this);
  (0,z.Gi)(this.Gc.Oi).F("select-anchor", this.ex, this);
  (0,z.Gi)(this.Nb).F("show-hidden-note-replies", this.mD, this).F("start-reply", this.WI, this).F("save-reply", this.QI, this).F("edit-reply", this.iI, this).F("cancel-reply", this.RH, this).F("delete-reply", this.bI, this).F("approve-note", this.LH, this).F("unapprove-note", this.cJ, this).F("edit-note", this.hI, this).F("save-note", this.OI, this).F("cancel-note", this.QH, this).F("delete-note", this.aI, this).F("hide-note", this.oI, this);
  (0,z.Bi)("cancel-notes-vote", this.fA, this).F("save-notes-vote", this.FI, this);
  this.$k.D("historyUpdate", this.rI, this);
};
var IQ = function(a) {
  a.Ej();
  a.lj.H("Recommendation saved.", {type:z.Dq});
};
z.JQ = function(a, b) {
  var c = xQ(a.data), d = c ? (0,z.pk)(c, "noteId") : void 0, e = c && (0,z.pk)(c, "content") || a.data.cD || "";
  (0,z.cM)(b, e);
  a.$e = new KQ(a.Bo, b, a.postId, d);
  a.$e.D("save", c ? a.EI : a.DI, a);
  a.$e.D("cancel", a.fA, a);
  return a.$e;
};
var LQ = function(a, b) {
  var c = (0,z.uQ)(a.data, b.anchor);
  b.newHighlight && (a.data.Bp[b.highlightId] = new z.ZO(new z.ZO(b.newHighlight)), delete b.newHighlight);
  c.add(b);
  (0,z.MQ)(a, z.FD, (0,z.uk)(c, "id", b.id));
};
var NQ = function(a, b) {
  var c = a.data.Pb(b.noteId, b.anchor);
  b.replies = c.get("replies");
  c.ri(b);
  (0,z.MQ)(a, z.GD, c);
};
var OQ = function(a) {
  if (a.qb && a.qb.Gw()) {
    return!0;
  }
  for (var b in a.Xb) {
    if (a.Xb[b].Gw()) {
      return!0;
    }
  }
  return!1;
};
var PQ = function(a) {
  var b = new z.vc, c = a.el.open({title:"Uh oh!", bodyHtml:"You have unsaved notes. Are you sure you want to abandon them?", type:z.yF});
  c ? (c.D(z.zF, b.Ca.bind(b, !0)), c.D(z.AF, function() {
    this.fC();
    b.cancel();
  }, a)) : b.cancel();
  return b;
};
var QQ = function(a) {
  (0,z.ad)(a.qb);
  a.qb = null;
  for (var b in a.Xb) {
    (0,z.ad)(a.Xb[b]), delete a.Xb[b];
  }
};
var RQ = function(a, b, c) {
  var d = b.get("state"), e = "PUBLIC" == c ? "Note was made public" : "HIDDEN" == c ? "Note was dismissed" : "NEW" == c ? "Note was made private" : "", f = zQ(a.data, b, c);
  (0,z.s)((0,z.r)(f.Bc, function() {
    (0,z.r)(this.lj.H(e, {type:z.Dq, im:!0}), function() {
      f.GD();
      RQ(this, b, d);
    }, this);
    (0,z.MQ)(this, z.ID, b, {noteState:c, previousNoteState:d});
  }, a), function() {
    this.lj.H("Could not change note state", "error");
    f.GD();
    RQ(this, b, d);
  }, a);
  return f.Bc;
};
var SQ = function(a, b) {
  var c = b.value;
  return c ? a.Xb[c] : a.qb;
};
var TQ = function(a, b) {
  var c = a.data.Ng(a.anchors.get(b));
  return c ? c.text : "";
};
z.UQ = function(a) {
  return a.data.va ? !!(0,z.uQ)(a.data, a.data.va).count() : !1;
};
z.VQ = function(a, b) {
  var c = b || a.Qe, d = a.data.Pb(c, a.data.va), e = a.tb.querySelector('[data-note-id\x3d"' + c + '"]');
  (0,z.t)(e, "notes-show-reply-editor");
  var f = a.Xb["reply_" + c];
  f || (e = e.querySelector(".notes-reply-editor"), f = new BQ(a.Bo, e, a.postId, c), f.D("change", a.Ph, a), f.D("cancel", function() {
    f.clear();
  }, a), f.D("save", function(a) {
    f.clear();
    d.add("replies", a);
    (0,z.MQ)(this, z.JD, d, {replyId:a.id});
  }, a), a.Xb["reply_" + c] = f);
  f.focus();
};
z.MQ = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = (0,z.pk)(c, "id");
  d.noteType = c.get("highlightId") ? "highlight" : "paragraph";
  (0,z.Hk)(b, d);
};
z.WQ = function(a, b, c) {
  var d = (0,z.ZH)(), d = d && (0,z.cP)(a.anchors, (0,z.zI)(d)), e = c && d && new CQ(d);
  (0,z.r)((0,z.XQ)(a, b && b.anchor || a.data.va), function() {
    if (b != this.pe) {
      var a = this.pe;
      a && (0,z.YQ)(this, a, !1);
      b && (0,z.YQ)(this, b, !0);
      this.pe = b;
    }
    (a = e && e.restore()) && a.select();
  }, a);
};
z.YQ = function(a, b, c) {
  var d = b.anchor, e = (0,z.aP)(a.anchors, d);
  if (e = a.data.Ng(e)) {
    (0,z.ym)(e, 4);
    if (c) {
      if (!yQ(b, e)) {
        return;
      }
      (0,z.xm)(e, (0,z.Cm)(b.startIndex, b.endIndex, b.id));
    }
    a.anchors.get(d).innerHTML = (0,z.un)(e, z.wg, {rf:!a.Ow, isPublished:!a.is.get("latestPublishedVersion"), media:null, sections:!0, li:!1, Lh:!1, kf:!1});
  }
};
z.ZQ = function(a, b, c) {
  if (b != a.Qe) {
    c || (0,z.Ms)(a.$k, "");
    (c = a.tb.querySelector(".notes-active-note")) && (0,z.u)(c, "notes-active-note");
    c = a.Qe = null;
    if (b && a.data.va) {
      var d = a.data.Pb(b, a.data.va);
      d && (c = a.tb.querySelector('[data-note-id\x3d"' + b + '"]')) && ((0,z.t)(c, "notes-active-note"), a.Qe = b, b = (0,z.pk)(d, "highlightId"), (0,z.WQ)(a, (b ? a.data.Bp[b] || null : null) || null));
    }
    (0,z.Tc)(a.tb, "notes-note-selected", !!c);
  }
};
z.XQ = function(a, b) {
  var c = b != a.data.va;
  if (c && OQ(a)) {
    return(0,z.r)(PQ(a), function() {
      QQ(this);
      return(0,z.XQ)(this, b);
    }, a);
  }
  a.pe && ((0,z.YQ)(a, a.pe, !1), a.pe = null);
  if (!c) {
    return(0,z.Ic)();
  }
  (0,z.ZQ)(a, null);
  a.data.va && (0,z.rQ)(a.Gc, a.data.va, !1);
  QQ(a);
  (0,z.ad)(a.ag);
  a.ag = null;
  (0,z.t)(a.tb, "notes-hide-editor");
  a.data.va = b && a.Gc.ld[b] ? b : "";
  a.data.va ? a.An() : a.dw();
  a.Ph();
  return(0,z.Ic)();
};
z.$Q = function() {
  var a = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), b = a[1] || null;
  return{HB:a[2] || null, anchor:a[0], Md:b && {startIndex:Number(a[3]), endIndex:Number(a[4]), id:b}};
};
z.aR = function(a, b) {
  if (a.isAuthenticated) {
    (0,z.ad)(a.qb);
    var c = a.J(".notes-note-editor"), d = null, e = null;
    if ("string" == typeof b) {
      d = b;
    } else {
      if (b instanceof z.AQ) {
        e = b.Md, d = e.anchor;
      } else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.qb = new hQ(a.Bo, c, a.postId);
    iQ(a.qb, d, TQ(a, d));
    e && (0,z.jQ)(a.qb, e.startIndex, e.endIndex, e.content);
    a.qb.D("change", a.Ph, a);
    a.qb.D("save", a.lo, a);
    a.qb.D("cancel", function() {
      (0,z.uQ)(this.data, d).count() ? (0,z.t)(this.tb, "notes-hide-editor") : (0,z.XQ)(this, null);
      (0,z.ZQ)(this, null);
    }, a);
    (0,z.u)(a.tb, "notes-hide-editor");
  }
};
var KQ = function(a, b, c, d) {
  fQ.call(this, a, b, "Tell others why you’re recommending this story", 100, d || null);
  this.$ = c;
};
z.bR = function(a, b) {
  z.WP.call(this, a);
  this.ta(new z.YP);
  this.ta(new z.kP(b));
  this.ta(new z.eO(!1));
  this.ta(new z.$P(z.YC));
  this.ta(new z.jO(!1));
  this.Ui = !0;
};
z.cR = function(a, b) {
  this.kt = b;
  this.yf = a;
  this.qJ = z.Ml.ja(this.yf);
  this.strategy = "resample";
};
var dR = function(a, b) {
  var c = {imageId:b.$a()}, d = b.Id(), e = b.ol();
  if ("object" == typeof a.strategy) {
    d = a.strategy["*"] || a.strategy[d];
    c.strategy = d.type;
    for (var f in d) {
      c[f] = d[f];
    }
  } else {
    c.strategy = a.strategy;
  }
  e && (c.filter = e);
  return c;
};
var eR = function(a, b, c) {
  a.yf.em(b).dm(c);
};
z.fR = function(a, b, c, d, e) {
  this.Vd = a.get("element-tracker");
  this.ef = a.get("image");
  this.oH = a.get("loading-indicator");
  this.Na = b;
  this.element = c;
  this.ba = d;
  this.wb = e;
  this.lp = this.element.querySelector("[data-scroll]");
};
var gR = function(a) {
  for (var b = "full" == a.ba.Id() ? ["full"] : ["contain", "cover"], c = 0;c < b.length;c++) {
    var d = a.ba.Mr(a.ba.ua().si(b[c]));
    a.ef.load(d);
  }
};
var hR = function(a) {
  var b = a.ba.qJ;
  b.$a() ? (a.Rd(b.$a()), iR(a, b.Id()), eR(a.ba, b.Th(), b.ql()), jR(a, a.ba.Bj())) : a.Rd("");
};
var iR = function(a, b) {
  if (a.ba.$a()) {
    var c = a.ba.Id();
    a.ba.si(b);
    var d = a.ba.Bj();
    (0,z.Bc)(a.ef.load(d), function() {
      this.ba.Id() == b && ((0,z.Tc)(this.element, "layout-single-column", "contain" == b), (0,z.u)(this.element, "background-size-" + c), (0,z.t)(this.element, "background-size-" + b), jR(this, d));
    }, a);
  }
};
var kR = function(a) {
  if (a.ba.$a()) {
    var b = a.ba.Bj();
    a.oH.Aa((0,z.Bc)(a.ef.load(b), function() {
      jR(this, b);
    }, a));
  }
};
var jR = function(a, b) {
  if (b != a.ba.kt) {
    var c = a.oC();
    a.ba.kt = b || "";
    b ? (a.Fx(c, b), (c = c.parentNode) && "blur-cover" == c.getAttribute("data-scroll") && (c.setAttribute("data-image-url", b), c.setAttribute("data-image-blur-url", a.ba.Bj(!0)))) : (a.Iw(c), eR(a.ba, 0, 0));
    a.Vd.$f();
    a.Na.S(z.lR);
  }
};
var mR = function(a, b) {
  z.Oj.call(this);
  this.pa = a;
  this.yc = b;
};
var nR = function(a, b) {
  z.v.call(this);
  this.jk = a;
  this.Xq = b;
  this.tv = a;
  this.vq = "";
  this.Av = this.Eg = null;
};
var oR = function(a, b) {
  a.tv = b;
  return a;
};
var pR = function(a) {
  a.vq = "pre-transition-picker-image";
  return a;
};
var qR = function(a, b) {
  z.Mj.call(this);
  this.pa = b;
  this.ba = a;
  this.wb = rR;
  this.Ys = (0,z.Ic)();
};
var sR = function(a, b, c, d, e) {
  z.Oj.call(this);
  this.Na = a;
  this.pa = b;
  this.ba = c;
  this.wb = d;
  this.wc = e;
};
var tR = function(a, b) {
  var c = a.pa.querySelector(".picker-content").offsetHeight, d = new nR(a.pa, "transition-picker-layout");
  a.pa.style.height = a.pa.offsetHeight;
  (0,z.ui)(a.pa);
  d = d.start();
  a.pa.style.height = c + "px";
  (0,z.Vc)(a.pa, "picker-layout-fill", "picker-layout-inline");
  (0,z.Bc)(d, function() {
    this.pa.style.height = "";
  }, a);
  (0,z.Cc)(b, d);
};
var uR = function(a, b) {
  var c = a.pa.querySelector(".picker-content").offsetHeight, d = new nR(a.pa, "transition-picker-layout");
  (0,z.Vc)(a.pa, "picker-layout-inline", "picker-layout-fill");
  var e = (0,z.zf)(a.pa, "height");
  (0,z.Vc)(a.pa, "picker-layout-fill", "picker-layout-inline");
  a.pa.style.height = c + "px";
  (0,z.ui)(a.pa);
  c = d.start();
  (0,z.Vc)(a.pa, "picker-layout-inline", "picker-layout-fill");
  a.pa.style.height = e;
  (0,z.Bc)(c, function() {
    this.pa.style.height = "";
  }, a);
  (0,z.Cc)(b, c);
};
var vR = function(a) {
  this.pa = a;
};
var wR = function(a, b, c) {
  z.Mj.call(this);
  this.xn = a.get("upload");
  this.$q = b;
  this.yK = !!c;
  this.Uk = [];
};
var xR = function(a, b, c, d, e, f) {
  this.ef = a.get("image");
  this.U = a.get("dialog");
  this.Na = b;
  this.Jk = c.querySelector(".progress-bar");
  this.Ik = new vR(c.querySelector(".upload-feedback-preview"));
  this.ba = d;
  this.wc = f;
  this.wb = e;
  this.yc = new wR(a, function(a) {
    return this.ba.Mr(z.Ml.ja(this.ba.yf).jc(a));
  }.bind(this));
  this.yc.D("start", this.jJ, this);
  this.yc.D("progress", this.iJ, this);
  this.yc.D("success", this.fJ, this);
  this.yc.D("error", this.gJ, this);
  this.yc.D("abort", this.eJ, this);
  this.yc.D("preview", this.hJ, this);
};
var yR = function(a, b, c, d) {
  z.Oj.call(this);
  this.ca = a;
  this.ba = c;
  this.wc = d;
  this.pa = b;
};
z.zR = function(a, b) {
  z.go.call(this);
  this.pa = b;
  var c = (0,z.Tw)(b);
  this.ba = this.LB(c || new z.Jg, b.getAttribute("data-url"));
  this.wb = new qR(this.ba, b);
  this.wc = this.MB(a, this, b, this.ba, this.wb);
  this.yc = new xR(a, this, b, this.ba, this.wb, this.wc);
  this.Aa(new mR(b, this.yc));
  this.Aa(new yR(a, b, this.ba, this.wc));
  ((0,z.Pc)(b, "picker-layout-fill") || (0,z.Pc)(b, "picker-layout-inline")) && this.Aa(new sR(this, b, this.ba, this.wb, this.wc));
  this.wb.reset();
};
z.AR = function(a, b, c) {
  this.uv = !!c;
  z.zR.call(this, a, b);
};
var BR = function(a, b, c) {
  z.cR.call(this, a, b);
  this.uv = c;
};
var CR = function(a, b, c, d, e) {
  z.fR.call(this, a, b, c, d, e);
};
var dI = /&([^;\s<&]+);?/g;
(0,z.p)(RH, z.v);
RH.prototype.Ic = null;
RH.prototype.C = function() {
  this.Ic && this.Ic.close();
  this.Ic = null;
  this.ma && this.ma.cancel();
  this.ma = null;
  RH.w.C.call(this);
};
RH.prototype.Tg = (0,z.n)(214);
RH.prototype.eq = (0,z.n)(217);
(0,z.p)(SH, z.GB);
z.g = SH.prototype;
z.g.Jf = null;
z.g.C = function() {
  this.ma.Mc || this.ma.cancel();
  NH(this);
  this.ma = null;
  SH.w.C.call(this);
};
z.g.QD = function() {
  this.Ic.D("close", this.VH, this);
  this.Jf = window.document.createElement("iframe");
  this.Jf.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.Jf.setAttribute("id", this.ok);
  this.Jf.setAttribute("name", this.ok);
  window.document.body.appendChild(this.Jf);
  (0,z.Q)(this.Jf, "load", this.bn, this);
  this.Ic && (this.Ic.J("form").submit(), (0,z.t)(this.Ic.J(".overlay-dialog"), "uploading-image"));
  return this.ma.Bb();
};
z.g.VH = function() {
  this.ma.Mc || this.ma.cancel();
  NH(this);
};
z.g.bn = function() {
  var a = (0,z.PH)(this.Jf.contentWindow.document.body);
  a && (this.ma.Ca(a), NH(this));
};
(0,z.p)(TH, z.v);
TH.prototype.C = function() {
  this.ma && this.ma.cancel();
  this.ma = null;
  this.Fa && (window.document.body.removeChild(this.Fa), this.Fa = null);
  TH.w.C.call(this);
};
TH.prototype.Tg = (0,z.n)(215);
TH.prototype.$z = (0,z.n)(216);
z.xI = z.aD;
z.KB.prototype.po = (0,z.$)(218, function() {
  return(0,z.r)(this.Tg(!0), function(a) {
    return a[0];
  });
});
RH.prototype.eq = (0,z.$)(217, function(a) {
  a.preventDefault();
  a = [new SH(this.ca, this.ok, this.Ic)];
  this.ma.Ca(a);
});
TH.prototype.$z = (0,z.$)(216, function() {
  if (this.Fa && this.Fa.files && this.Fa.files.length) {
    var a = ((0,z.H)("variants.upload_multiple_files") ? (0,z.fb)(this.Fa.files) : [this.Fa.files[0]]).map(function(a) {
      return new z.JB(this.ca, a);
    }, this);
    this.ma.Ca(a);
  } else {
    this.ma.cancel();
  }
});
TH.prototype.Tg = (0,z.$)(215, function(a) {
  if (this.Lm) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Lm = !0;
  (0,z.H)("variants.upload_multiple_files") && !a && (this.Fa.multiple = !0);
  window.document.body.appendChild(this.Fa);
  (0,z.Q)(this.Fa, "change", this.$z, this);
  this.Fa.click();
  return this.ma;
});
RH.prototype.Tg = (0,z.$)(214, function() {
  if (this.Lm) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Lm = !0;
  this.ok = "ie9_upload_frame_" + Math.floor(1E3 * Math.random());
  if (this.Ic = this.U.open({title:"Please choose an image", bodyHtml:XH({IL:this.ok})})) {
    var a = this.Ic.J('input[type\x3d"file"]');
    (0,z.Q)(a, "change", this.eq, this);
  } else {
    this.ma.cancel();
  }
  return(0,z.s)(this.ma, function() {
    this.Ic && this.Ic.close();
    this.Ic = null;
  });
});
z.KB.prototype.Tg = (0,z.$)(213, function(a) {
  return(z.eD ? new TH(this.ca) : new RH(this.ca)).Tg(a || !(0,z.H)("variants.upload_multiple_files"));
});
z.VA.prototype.pl = (0,z.$)(212, function(a, b, c, d) {
  a = this.ob[a.toString()];
  var e = -1;
  a && (e = (0,z.XA)(a, b, c, d));
  return-1 < e ? a[e] : null;
});
z.VA.prototype.Oj = (0,z.$)(211, function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.ob) {
    if (!a || c == a) {
      for (var d = this.ob[c], e = 0;e < d.length;e++) {
        ++b, (0,z.UA)(d[e]);
      }
      delete this.ob[c];
      this.Lo--;
    }
  }
  return b;
});
z.PA.prototype.rw = (0,z.$)(210, function() {
  return this.qf;
});
z.GA.prototype.disable = (0,z.$)(209, function() {
  this.qj && (this.xt && (0,z.ci)(this.xt), this.wt && (0,z.ci)(this.wt), this.Df && (0,z.ci)(this.Df), this.remove(), window.document.body.removeChild(this.N), this.ht = "", this.qj = !1);
});
z.LA.prototype.disable = (0,z.$)(208, function() {
  this.qj && (this.remove(), this.Ea.removeChild(this.N), this.Ea = this.N = null, (0,z.ci)(this.Df));
});
z.gv.prototype.Bj = (0,z.$)(206, function() {
  return(0,z.y)(this, "url");
});
z.Ju.prototype.Pb = (0,z.$)(205, function() {
  return(0,z.y)(this, "note");
});
z.Ku.prototype.Pb = (0,z.$)(204, function() {
  return(0,z.y)(this, "note");
});
z.Nu.prototype.Pb = (0,z.$)(203, function() {
  return(0,z.y)(this, "note");
});
z.Dv.prototype.Pb = (0,z.$)(202, function() {
  return(0,z.y)(this, "note");
});
z.Wt.prototype.Ec = (0,z.$)(190, function() {
  return(0,z.y)(this, "anchor");
});
z.pv.prototype.Ec = (0,z.$)(189, function() {
  return(0,z.y)(this, "anchor");
});
z.qv.prototype.Ec = (0,z.$)(188, function() {
  return(0,z.y)(this, "anchor");
});
z.rv.prototype.Ec = (0,z.$)(187, function() {
  return(0,z.y)(this, "anchor");
});
z.yt.prototype.Qa = (0,z.$)(182, function() {
  return(0,z.y)(this, "noteId");
});
z.zt.prototype.Qa = (0,z.$)(181, function() {
  return(0,z.y)(this, "noteId");
});
z.Wt.prototype.Qa = (0,z.$)(180, function() {
  return(0,z.y)(this, "noteId");
});
z.Xt.prototype.Qa = (0,z.$)(179, function() {
  return(0,z.y)(this, "noteId");
});
z.Yt.prototype.Qa = (0,z.$)(178, function() {
  return(0,z.y)(this, "noteId");
});
z.Ju.prototype.Qa = (0,z.$)(177, function() {
  return(0,z.y)(this, "noteId");
});
z.Ku.prototype.Qa = (0,z.$)(176, function() {
  return(0,z.y)(this, "noteId");
});
z.Nu.prototype.Qa = (0,z.$)(175, function() {
  return(0,z.y)(this, "noteId");
});
z.pv.prototype.Qa = (0,z.$)(174, function() {
  return(0,z.y)(this, "noteId");
});
z.rv.prototype.Qa = (0,z.$)(173, function() {
  return(0,z.y)(this, "noteId");
});
z.sv.prototype.Qa = (0,z.$)(172, function() {
  return(0,z.y)(this, "noteId");
});
z.Dv.prototype.Qa = (0,z.$)(171, function() {
  return(0,z.y)(this, "noteId");
});
z.fq.prototype.getData = (0,z.$)(170, function() {
  return this.ba;
});
z.Oz.prototype.getData = (0,z.$)(169, function() {
  return z.Oz.w.getData.call(this);
});
z.Qq.prototype.hg = (0,z.$)(168, function(a) {
  this.nt = a;
  (0,z.Rq)(this);
  return this;
});
z.qm.prototype.fi = (0,z.$)(166, function() {
  return 4 == this.type || 11 == this.type;
});
z.Tl.prototype.ks = (0,z.$)(165, function() {
  var a = this.Uu.pop();
  if (!a) {
    return null;
  }
  for (var b = null;a.length;) {
    var c = a.pop(), d = (0,z.El)(c.delta);
    (0,z.Il)(d, this.xk);
    d.hj = c.hj;
    d.selection = c.selection;
    d.selection && (b = d.selection);
    this.lc.push(d);
    this.Ei && this.Ei.call(null, z.Ml.ja(d.delta));
  }
  return b;
});
z.Tl.prototype.gj = (0,z.$)(162, function(a) {
  var b = (0,z.Xa)(this.lc);
  b && (b.selection = a.ja());
});
z.Sl.prototype.Rd = (0,z.$)(155, function(a) {
  return(0,z.A)(this, "imageId", a);
});
z.qu.prototype.Rd = (0,z.$)(154, function(a) {
  return(0,z.A)(this, "imageId", a);
});
z.gv.prototype.Rd = (0,z.$)(153, function(a) {
  return(0,z.A)(this, "imageId", a);
});
z.hv.prototype.Rd = (0,z.$)(152, function(a) {
  return(0,z.A)(this, "imageId", a);
});
z.Tv.prototype.Rd = (0,z.$)(151, function(a) {
  return(0,z.A)(this, "imageId", a);
});
z.Ol.prototype.gg = (0,z.$)(145, function(a) {
  return(0,z.A)(this, "coverless", a);
});
z.Zt.prototype.gg = (0,z.$)(144, function(a) {
  return(0,z.A)(this, "coverless", a);
});
z.tv.prototype.gg = (0,z.$)(143, function(a) {
  return(0,z.A)(this, "coverless", a);
});
z.Ol.prototype.Gb = (0,z.$)(133, function(a) {
  return(0,z.A)(this, "content", a);
});
z.Wt.prototype.Gb = (0,z.$)(132, function(a) {
  return(0,z.A)(this, "content", a);
});
z.Xt.prototype.Gb = (0,z.$)(131, function(a) {
  return(0,z.A)(this, "content", a);
});
z.Zt.prototype.Gb = (0,z.$)(130, function(a) {
  return(0,z.A)(this, "content", a);
});
z.bu.prototype.Gb = (0,z.$)(129, function(a) {
  return(0,z.A)(this, "content", a);
});
z.pv.prototype.Gb = (0,z.$)(128, function(a) {
  return(0,z.A)(this, "content", a);
});
z.qv.prototype.Gb = (0,z.$)(127, function(a) {
  return(0,z.A)(this, "content", a);
});
z.rv.prototype.Gb = (0,z.$)(126, function(a) {
  return(0,z.A)(this, "content", a);
});
z.sv.prototype.Gb = (0,z.$)(125, function(a) {
  return(0,z.A)(this, "content", a);
});
z.tv.prototype.Gb = (0,z.$)(124, function(a) {
  return(0,z.A)(this, "content", a);
});
z.Ol.prototype.ua = (0,z.$)(123, function() {
  return(0,z.y)(this, "content");
});
z.Wt.prototype.ua = (0,z.$)(122, function() {
  return(0,z.y)(this, "content");
});
z.Xt.prototype.ua = (0,z.$)(121, function() {
  return(0,z.y)(this, "content");
});
z.Zt.prototype.ua = (0,z.$)(120, function() {
  return(0,z.y)(this, "content");
});
z.bu.prototype.ua = (0,z.$)(119, function() {
  return(0,z.y)(this, "content");
});
z.pv.prototype.ua = (0,z.$)(118, function() {
  return(0,z.y)(this, "content");
});
z.qv.prototype.ua = (0,z.$)(117, function() {
  return(0,z.y)(this, "content");
});
z.rv.prototype.ua = (0,z.$)(116, function() {
  return(0,z.y)(this, "content");
});
z.sv.prototype.ua = (0,z.$)(115, function() {
  return(0,z.y)(this, "content");
});
z.tv.prototype.ua = (0,z.$)(114, function() {
  return(0,z.y)(this, "content");
});
z.Ce.prototype.Qn = (0,z.$)(19, function() {
  var a = this.sa.getClientRects();
  return a.length ? (a = (0,z.Xa)(a), new z.rd(a.right, a.bottom)) : null;
});
z.Te.prototype.Qn = (0,z.$)(18, function() {
  return this.xe() ? (0,z.af)(this).rl() : (0,z.af)(this).Qn();
});
z.Ce.prototype.rl = (0,z.$)(17, function() {
  var a = this.sa.getClientRects();
  return a.length ? new z.rd(a[0].left, a[0].top) : null;
});
z.Te.prototype.rl = (0,z.$)(16, function() {
  return this.xe() ? (0,z.af)(this).Qn() : (0,z.af)(this).rl();
});
z.Ae.prototype.dh = (0,z.$)(9, function(a, b) {
  this.insertNode(a, !0);
  this.insertNode(b, !1);
});
z.De.prototype.dh = (0,z.$)(8, function(a, b) {
  var c = (0,z.Cd)((0,z.vd)(this.Ga()));
  if (c = (0,z.ZH)(c)) {
    var d = c.Ga(), e = c.mb(), f = c.Mb(), h = c.Fc()
  }
  var k = this.sa.cloneRange(), l = this.sa.cloneRange();
  k.collapse(!1);
  l.collapse(!0);
  k.insertNode(b);
  l.insertNode(a);
  k.detach();
  l.detach();
  if (c) {
    if (3 == d.nodeType) {
      for (;f > d.length;) {
        f -= d.length;
        do {
          d = d.nextSibling;
        } while (d == a || d == b);
      }
    }
    if (3 == e.nodeType) {
      for (;h > e.length;) {
        h -= e.length;
        do {
          e = e.nextSibling;
        } while (e == a || e == b);
      }
    }
    (0,z.We)(d, f, e, h).select();
  }
});
z.Ie.prototype.dh = (0,z.$)(7, function(a, b) {
  var c = this.sa.duplicate(), d = this.sa.duplicate();
  $H(c, a, !0);
  $H(d, b, !1);
  this.Jg();
});
z.Te.prototype.dh = (0,z.$)(6, function(a, b) {
  (0,z.af)(this).dh(a, b);
  this.Jg();
});
z.Ae.prototype.insertNode = (0,z.$)(5, function(a, b) {
  b ? (0,z.Ld)(a, this.Ga()) : (0,z.Md)(a, this.mb());
  return a;
});
z.De.prototype.insertNode = (0,z.$)(4, function(a, b) {
  var c = this.sa.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a;
});
z.Ie.prototype.insertNode = (0,z.$)(3, function(a, b) {
  var c = $H(this.sa.duplicate(), a, b);
  this.Jg();
  return c;
});
z.Te.prototype.insertNode = (0,z.$)(2, function(a, b) {
  var c = (0,z.af)(this).insertNode(a, b);
  this.Jg();
  return c;
});
z.Wc.prototype.isEnabled = (0,z.$)(0, function() {
  return window.navigator.cookieEnabled;
});
(0,z.p)(NI, z.de);
NI.prototype.next = function() {
  var a = this.bD;
  if (!a) {
    throw z.fe;
  }
  this.bD = this.cN ? a.previousSibling : a.nextSibling;
  return a;
};
(0,z.p)(UI, NI);
var EJ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
(0,z.p)(aJ, z.re);
aJ.prototype.uo = function(a) {
  (0,z.Od)(bJ(this, !0));
  (0,z.Od)(bJ(this, !1));
  return a;
};
aJ.prototype.xo = function() {
  var a = null, b = bJ(this, !this.Zg), c = bJ(this, this.Zg);
  if (b && c) {
    var a = b.parentNode, b = (0,z.bb)(a.childNodes, b), d = c.parentNode, c = (0,z.bb)(d.childNodes, c);
    d == a && (this.Zg ? b-- : c--);
    a = (0,z.We)(a, b, d, c);
    a = this.uo(a);
    a.select();
  } else {
    this.uo();
  }
  return a;
};
aJ.prototype.C = function() {
  this.uo();
  this.Sf = null;
};
(0,z.p)(gJ, aJ);
gJ.prototype.uo = function(a) {
  var b = bJ(this, !0), c = bJ(this, !1), b = b && c ? (0,z.Yd)(b, c) : b || c;
  gJ.w.uo.call(this);
  if (a) {
    return XI(b, a);
  }
  b && (a = (0,z.ZH)((0,z.Cd)((0,z.vd)(b))), (a = XI(b, a)) && a.select());
};
tJ = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, H4:!0, FIGURE:!0, LI:!0};
z.DR = /\s+(?=\s)/g;
z.ER = /^\s|\s$/g;
BJ = /^(.*?)([:;,\.?>\]\)!]+)$/;
(0,z.p)(oJ, z.ie);
oJ.prototype.next = function() {
  do {
    oJ.w.next.call(this);
  } while (-1 == this.Rc);
  return this.V;
};
var IJ = {IMG:" ", BR:"\n"}, HJ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, PJ = {rf:!1, isPublished:!1, media:null, sections:!0, li:!1, Lh:!1, kf:!1}, FR = {pP:"layout-single-column", Gs:"layout-fill-width", LE:"sectionLayout--outsetRow", ZO:"sectionLayout--outsetColumn"}, RL = [], QL = null, TL = /^<\//, SL = /(<\/?(\w*)([^>]*)>)/gi, VN = /^[@＠][a-z0-9_]{1,15}$/i;
(0,z.kI)(z.$q, "common-async");
fM.prototype.Qb = function(a) {
  return(0,z.Gw)(this.W)[a];
};
z.g = z.nM.prototype;
z.g.Ec = function() {
  return this.Iq ? this.end : this.start;
};
z.g.xe = function() {
  return this.Iq;
};
z.g.collapse = function(a) {
  var b = a ? this.start : this.end;
  a = a ? this.end : this.start;
  a.X = b.X;
  a.offset = b.offset;
};
z.g.isCollapsed = function() {
  return this.start.X == this.end.X && this.start.offset == this.end.offset;
};
z.g.fi = function() {
  return this.isCollapsed() && this.start.mc === UM;
};
z.g.ja = function() {
  return new z.nM(this.start.ja(), this.end.ja(), this.Iq);
};
var tM = 1, UM = 2, vM = 3;
wM.prototype.g = function() {
  return this.mc;
};
wM.prototype.ja = function() {
  return new wM(this.mc, this.X, this.offset);
};
z.g = z.yM.prototype;
z.g.gj = function() {
  this.Ib.gj(this.getSelection());
};
z.g.jl = (0,z.n)(163);
z.g.yl = (0,z.n)(160);
z.g.Hr = function(a) {
  return this.Ib.Hr(a);
};
z.g.im = function() {
  BM(this, !0);
};
z.g.ks = function() {
  BM(this, !1);
};
z.g.aa = function() {
  return this.W;
};
z.g.getSelection = function() {
  return this.nd;
};
z.g.hg = function(a, b) {
  SM(this, a, b, a, b, !1);
};
z.g.Qb = function(a) {
  return this.zd[a];
};
z.g.dz = function(a) {
  var b = a.Eb(), c = (0,z.um)(a.Ng()), d = this.He[b];
  d && d.Lb(c) ? c = d : this.He[b] = c;
  var d = this.Qb(b), e;
  e = (0,z.Hd)((0,z.on)(c, z.wg, PJ, void 0));
  (0,z.Aw)(e) || (e = void 0 != e.firstElementChild ? e.firstElementChild : (0,z.Qd)(e.firstChild, !0));
  nN(this, c, e, b);
  var f;
  a: {
    var h = c;
    if ((4 == h.type || 11 == h.type) && (0,z.Lw)(d) == h.type && (f = (0,z.Gg)((0,z.Uw)(d).ub().lg(""), null), h = (0,z.Gg)(h.ub().lg(""), null), f.Lb(h) && e.contentEditable == d.contentEditable && (f = d.querySelector("figcaption"), h = e.querySelector("figcaption"), f && h))) {
      WI(h, f);
      f = !0;
      break a;
    }
    f = !1;
  }
  if (!f) {
    if (4 == c.type && 4 == (0,z.Uw)(d, this.kB).type) {
      f = d.getElementsByTagName("img")[0].src;
      var h = e.getElementsByTagName("img")[0], k = h.src;
      f && k != f && (k && h.setAttribute("data-delayed-src", k), h.src = f);
    }
    e.tagName == d.tagName || "LI" != e.tagName && "LI" != d.tagName ? WI(e, d) : "LI" == e.tagName ? (c = window.document.createElement(10 == c.type ? "OL" : "UL"), c.appendChild(e), WI(c, d), UJ(c)) : (c = d.parentNode, f = VJ(c, d), (0,z.Md)(e, c), (0,z.Od)(d), c.childNodes.length || (0,z.Od)(c), f.childNodes.length || (0,z.Od)(f));
    "LI" === e.tagName && (e.parentNode.className = "post-list");
    this.zd[b] = e;
    if (this.Pa()) {
      d = this.ff;
      e = a.Eb();
      h = iM(d, e);
      c = (0,z.Gw)(h);
      a = (0,z.Lm)(d.Nf, e);
      c = c[0] == d.Qb(e);
      f = d.Nf.Sh(e);
      var l;
      a: {
        for (l in FR) {
          if (k = FR[l], (0,z.Pc)(h, k)) {
            l = k;
            break a;
          }
        }
        l = null;
      }
      if (a && !c || f != l) {
        h = mM(d, e), e = d.Qb(e), (0,z.Nd)(h, "LI" === e.tagName ? e.parentNode : e, 0);
      }
      a == c && f == l || jM(d);
    }
    iN(this, b);
    this.Pa() && (kN(this, (0,z.fN)(this, (0,z.eN)(this, b))), gM(this.ff, b));
  }
};
z.g.xG = function(a) {
  var b = GR[a.g()];
  this.nv || b.call(this, a);
};
z.g.UG = function(a) {
  var b = a.Eb(), c = this.zd[b];
  if (this.Pa()) {
    var d = (0,z.Dw)(c, this.W);
    d && 1 === (0,z.Gw)(d).length && 1 < this.sb.length ? ((0,z.Od)(d), a = this.sb.indexOf(d), this.sb.splice(a, 1)) : (d = this.ff, a = a.Eb(), (a = iM(d, a)) && 1 === (0,z.Gw)(a).length && (0,z.Od)(a));
    this.ih = null;
  }
  "LI" == c.tagName && c.parentNode && 1 == (0,z.Gw)(c.parentNode).length ? (0,z.Od)(c.parentNode) : (0,z.Od)(c);
  this.zd.splice(b, 1);
  this.He.splice(b, 1);
  (c = this.zd[b]) && "LI" === c.tagName && UJ(c.parentNode);
  this.Pa() && jM(this.ff);
  c = this.nd.start;
  c.X >= b && (c.X = Math.max(c.X - 1, 0));
  c = this.nd.end;
  c.X >= b && (c.X = Math.max(c.X - 1, 0));
  iN(this, b);
  this.Pa() && (c = (0,z.eN)(this, b), a = (0,z.fN)(this, c), kN(this, a), c.ra() == b && 0 < a && kN(this, a - 1), gM(this.ff, b), mN(this, a));
};
z.g.CG = function(a) {
  var b = a.Eb(), c = (0,z.um)(a.Ng());
  this.He.splice(b, 0, c);
  var d = 0 === b ? null : this.zd[b - 1];
  d && "LI" == d.tagName && (null != (void 0 != d.nextElementSibling ? d.nextElementSibling : (0,z.Qd)(d.nextSibling, !0)) && VJ(d.parentNode, d), d = d.parentNode);
  var e = (0,z.Hd)((0,z.on)(c, z.wg, PJ, void 0)), f = null;
  if (this.Pa()) {
    0 === (0,z.MM)(this).length && (0,z.hN)(this, 0, new z.Og);
    f = this.ff;
    a = a.Eb();
    if ((0,z.Lm)(f.Nf, a)) {
      var h = iM(f, a), f = !h || (0,z.Lm)(f.Nf, a + 1) ? mM(f, a) : h
    } else {
      f = null;
    }
    f && (d = null);
  }
  if (d) {
    (0,z.Md)(e, d);
  } else {
    if (this.Pa()) {
      if (!f) {
        throw Error("Cannot insert paragraph into a malformed section.");
      }
      (0,z.Nd)(f, e, 0);
    } else {
      (0,z.Nd)(this.W, e, 0);
    }
  }
  d = e;
  (0,z.wi)(e) && (d = e.firstChild, UJ(e));
  this.zd.splice(b, 0, d);
  nN(this, c, e, b);
  c = this.nd.start;
  c.X >= b && c.X++;
  c = this.nd.end;
  c.X >= b && c.X++;
  this.ih = null;
  iN(this, b);
  this.Pa() && (kN(this, (0,z.fN)(this, (0,z.eN)(this, b))), gM(this.ff, b));
};
z.g.Pa = function() {
  return this.Vk;
};
z.g.DG = function(a) {
  var b = a.Eb(), c = a.Wf();
  this.ih = null;
  c = OJ(c);
  this.sb.splice(b, 0, c);
  var d = this.sb[b - 1];
  this.W.insertBefore(c, d && d.nextSibling);
  var c = this.ff, e = a.Eb(), f = a.Wf().ra(), d = kM(c, e - 1);
  a = kM(c, e);
  d && (lM(c, f - 1), c = iM(c, f), d = (0,z.Iw)(d), c = d.slice(d.indexOf(c)), (0,z.Kd)(a, c));
  kN(this, b);
  0 < b && kN(this, b - 1);
  mN(this, b);
};
z.g.VG = function(a) {
  var b = a.Eb(), c = this.ff;
  a = a.Eb();
  var d = kM(c, a), e = 0 === a ? kM(c, 1) : kM(c, a - 1), d = (0,z.Iw)(d), f = (0,z.Iw)(e);
  if (0 === a && f.length) {
    for (;d.length;) {
      (0,z.Ld)(d.shift(), f[0]);
    }
  } else {
    (0,z.Kd)(e, d);
  }
  jM(c);
  this.ih = null;
  c = this.sb[b];
  this.sb.splice(b, 1);
  (0,z.Od)(c);
  kN(this, Math.max(b - 1, 0));
  mN(this, b);
};
z.g.ez = function(a) {
  var b = a.Eb(), c = a.Wf(), d = (0,z.MM)(this), e = d[b];
  e && e.Lb(c) ? c = e : d[b] = c;
  c = OJ(c);
  d = this.sb[b];
  e = this.ff;
  a = a.Eb();
  a = kM(e, a);
  a = (0,z.Iw)(a);
  (0,z.Kd)(c, a);
  WI(c, d);
  this.sb[b] = c;
  kN(this, b);
  0 < b && kN(this, b - 1);
  mN(this, b);
};
var GR = {1:z.yM.prototype.CG, 2:z.yM.prototype.UG, 3:z.yM.prototype.dz, 8:z.yM.prototype.DG, 9:z.yM.prototype.VG, 10:z.yM.prototype.ez};
(0,z.p)(EM, z.Aa);
z.pN.prototype.yH = function(a, b) {
  this.gd(b);
  IM(b);
};
z.pN.prototype.Ml = z.fa;
z.pN.prototype.gd = function(a) {
  YM(a, function(a, c, d) {
    this.Ml(a, c, d);
  }, this, !0);
  (0,z.RM)(a);
};
(0,z.p)(z.vN, z.pN);
z.vN.prototype.gd = function(a) {
  var b = a.getSelection();
  if ((0,z.uM)(b)) {
    var c = (0,z.eN)(a, b.start.X);
    (0,z.OM)(a, b.start.X, (new z.Og).Wa(c.getName()));
  } else {
    if (b.fi()) {
      (0,z.ZM)(a, b.start.X);
    } else {
      if (b.isCollapsed()) {
        var d = b.start, c = d.offset, d = d.X, e = (0,z.LM)(a, d);
        if (this.If) {
          c < e.text.length ? ((0,z.Fm)(e, c, c + xN(this, e.text, c)), (0,z.NM)(a, d)) : (yN(this, a, d), wN(a));
        } else {
          if (0 < c) {
            var f = xN(this, e.text, c);
            (0,z.Fm)(e, c + f, c);
            b.start.offset = b.end.offset = c + f;
            (0,z.NM)(a, d);
          } else {
            10 == e.type || 9 == e.type ? (e.type = 1, (0,z.NM)(a, d)) : (yN(this, a, d), wN(a));
          }
        }
      } else {
        (0,z.XM)(a, !0);
      }
    }
  }
  c = a.getSelection();
  sM(c) && c.isCollapsed() && (b = c.start.X, c = c.start.offset, d = (0,z.LM)(a, b)) && (e = d.text.charAt(c - 1), e == d.text.charAt(c) && " " == e && ((0,z.Fm)(d, c, c + 1), (0,z.NM)(a, b)));
  (0,z.RM)(a);
};
(0,z.p)(zN, z.pN);
zN.prototype.lM = function(a) {
  return a.id ? (0,z.Ca)(a.id, "internal-source-marker_") || (0,z.Ca)(a.id, "docs-internal-guid") : !1;
};
zN.prototype.gd = function(a) {
  var b = a.Pa(), c = window.document.createElement("div");
  c.innerHTML = this.eH;
  NL(c, this.lM.bind(this));
  var d = GM(c, {Mo:b, Bs:!0});
  if ((0,z.JM)(d)) {
    c = (0,z.LM)(a, a.getSelection().end.X).name;
    (0,z.XM)(a, !0);
    for (var e = a.getSelection().start, f = (0,z.LM)(a, e.X), h = f.split(e.offset), k = d.Pa(), l = 0, m = null, q = !1;m = (0,z.LM)(d, l);) {
      var x = 5 == m.type;
      (0,z.pI)(m) && (m.type = 1, (0,z.NM)(d, l));
      (0,z.H)("variants.can_create_h4") || 13 != m.type || (m.type = 3, (0,z.NM)(d, l));
      qI(m.type, m.text) || k && x ? ((0,z.ZM)(d, l), q = q || x) : (k && q && (m = (0,z.eN)(d, l), l != m.ra() && (0,z.hN)(d, l, new z.Og)), q = !1, l++);
    }
    k = a.Pa();
    l = {};
    m = 0;
    q = (0,z.JM)(a);
    for (m = 0;m < q;m++) {
      l[(0,z.LM)(a, m).name] = !0, k && (l[(0,z.eN)(a, m).getName()] = !0);
    }
    q = (0,z.JM)(d);
    for (m = 0;m < q;m++) {
      x = (0,z.LM)(d, m), x.name = AN(x.name, l), k && (x = (0,z.eN)(d, m), x.ra() == m && x.Wa(AN(x.getName(), l)));
    }
    for (m = 0;m < q;m++) {
      (0,z.rm)((0,z.LM)(d, m), l), (0,z.NM)(d, m), k && (x = (0,z.eN)(d, m), x.ra() == m && ((0,z.sm)(x, l), (0,z.OM)(d, m)));
    }
    l = (0,z.oI)((0,z.LM)(d, 0)) ? null : (0,z.LM)(d, 0);
    k = b && (0,z.eN)(d, 0).getName();
    l && (f.append(l.ja()), (0,z.ZM)(d, 0));
    (0,z.NM)(a, e.X);
    l = (0,z.JM)(d);
    for (m = 0;m < l;m++) {
      q = e.X + m + 1, (0,z.PM)(a, q, (0,z.LM)(d, m).ja()), b && (x = (0,z.eN)(d, m), m == x.ra() && q != (0,z.eN)(a, q).ra() && x.getName() != k && (0,z.hN)(a, q, z.Ml.ja(x)));
    }
    b = e.X + l;
    d = (0,z.LM)(a, e.X + l);
    d.append(h);
    f != d && c != f.name && (d.name = c);
    (0,z.NM)(a, b);
    SM(a, e.X, e.offset, b, d.text.length - h.text.length, !1);
  }
};
(0,z.p)(z.BN, z.v);
z.BN.prototype[z.RA] = !0;
z.g = z.BN.prototype;
z.g.fs = null;
z.g.us = (0,z.n)(219);
z.g.addEventListener = function(a, b, c, d) {
  (0,z.NJ)(this, a, b, c, d);
};
z.g.removeEventListener = function(a, b, c, d) {
  (0,z.MJ)(this, a, b, c, d);
};
z.g.dispatchEvent = function(a) {
  var b, c = this.fs;
  if (c) {
    for (b = [];c;c = c.fs) {
      b.push(c);
    }
  }
  var c = this.XK, d = a.type || a;
  if ((0,z.ma)(a)) {
    a = new z.OA(a, c);
  } else {
    if (a instanceof z.OA) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new z.OA(d, c);
      (0,z.Bb)(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.Lj && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = CN(f, d, !0, a) && e;
    }
  }
  a.Lj || (f = a.currentTarget = c, e = CN(f, d, !0, a) && e, a.Lj || (e = CN(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.Lj && h < b.length;h++) {
      f = a.currentTarget = b[h], e = CN(f, d, !1, a) && e;
    }
  }
  return e;
};
z.g.C = function() {
  z.BN.w.C.call(this);
  this.sj && this.sj.Oj(void 0);
  this.fs = null;
};
z.g.qa = function(a, b, c, d) {
  return this.sj.add(String(a), b, !1, c, d);
};
z.g.Ee = function(a, b, c, d) {
  return this.sj.remove(String(a), b, c, d);
};
z.g.mE = function(a) {
  return(0,z.WA)(this.sj, a);
};
z.g.pl = function(a, b, c, d) {
  return this.sj.pl(String(a), b, c, d);
};
(0,z.p)(DN, z.BN);
z.g = DN.prototype;
z.g.O = null;
z.g.aL = !0;
z.g.enable = function(a) {
  this.O == a && (this.jw = !0);
};
z.g.disable = function(a) {
  this.O == a && (this.jw = !1);
};
z.g.isEnabled = function(a) {
  return this.O == a ? this.jw : !1;
};
z.g.gr = z.VB;
z.g.oM = z.VB;
z.g.C = function() {
  this.O && this.O && (this.disable(this.O), this.O = null);
  DN.w.C.call(this);
};
var uO = (0,z.Ab)({rC:1, sC:2, Ew:3, wl:4, vC:5, execCommand:6, queryCommandValue:7, xD:8, BQ:10, Xv:11}), HR = (0,z.Eb)(8, 10, 11);
DN.prototype.execCommand = function(a, b) {
  var c = this.oM(a);
  c || (z.Re && tN(this.O, !0), this.O.Nn());
  try {
    var d = this.xL.apply(this, arguments);
  } finally {
    c || (this.O.fl(), (0,z.uN)(this.O));
  }
  return d;
};
DN.prototype.Pg = function() {
  return!1;
};
(0,z.p)(z.EN, DN);
z.g = z.EN.prototype;
z.g.rC = function(a) {
  try {
    return this.rc(a);
  } catch (b) {
    throw a.preventDefault(), b.message = (b.message || "") + " keyCode " + a.keyCode, b;
  }
};
z.g.rc = z.VB;
z.g.sC = function(a) {
  try {
    return this.Qr(a);
  } catch (b) {
    throw a.preventDefault(), b.message = (b.message || "") + " keyCode " + a.keyCode, b;
  }
};
z.g.Qr = z.VB;
z.g.vC = function(a, b, c) {
  try {
    return this.Vn(a, b, c);
  } catch (d) {
    throw a.preventDefault(), d.message = (d.message || "") + " key " + b, d;
  }
};
z.g.Vn = z.VB;
(0,z.p)(FN, z.pN);
FN.prototype.gd = function(a) {
  (0,z.XM)(a, !0);
  var b = a.getSelection(), c = this.FC((0,z.LM)(a, b.start.X), b.start.offset);
  b.start.offset += c;
  b.end.offset += c;
  (0,z.NM)(a, b.start.X);
  (0,z.RM)(a);
};
var SN = /^(https?|ftp):\/\//, aO = (0,z.Eb)("", "(", "[", "{", " ", " ", "\n");
(0,z.p)(bO, z.pN);
bO.prototype.gd = function(a) {
  var b = a.getSelection(), c = b.start.X, d = b.end.X;
  if (8 != (0,z.LM)(a, c).type) {
    var e = b.start.offset, f = (0,z.JM)(a) - b.end.X, b = (0,z.LM)(a, d).text.length - b.end.offset;
    YM(a, this.HM, this, !0);
    d = (0,z.JM)(a) - f;
    SM(a, c, e, d, (0,z.LM)(a, d).text.length - b, !1);
    for (var d = a.getSelection(), h = d.start.X, k = d.end.X, l = d.end.offset, m = (0,z.JM)(a) - k, q = (0,z.LM)(a, k).text.length - l, x = h;x <= k;x++) {
      for (var G = (0,z.LM)(a, x), M = x == k ? l : G.text.length, Ba = x == h ? d.start.offset : 0;Ba < M;Ba++) {
        "\n" == G.text.charAt(Ba) && "\n" == G.text.charAt(Ba + 1) && ((0,z.Fm)(G, Ba, Ba + 2), (0,z.NM)(a, x), (new z.IR(!1)).GC(a, (0,z.pM)(x, Ba)), G = (0,z.LM)(a, x), k = (0,z.JM)(a) - m, l = (0,z.LM)(a, k).text.length - q, M = x == k ? l : G.text.length, Ba--);
      }
    }
    d = (0,z.JM)(a) - f;
    SM(a, c, e, d, (0,z.LM)(a, d).text.length - b, !1);
  }
};
cO.prototype.search = function(a, b) {
  var c = this.jo.text.substring(a, b), d = XL(c);
  this.aD = d ? a + c.indexOf(d) : -1;
};
bO.prototype.HM = function(a, b, c) {
  var d = new cO(a);
  d.search(b, c);
  for (var e = b;e < c;e++) {
    var f = a.text.charAt(e), h = 0;
    if (e == d.aD) {
      for (;e < c && " " != a.text.charAt(e) && "\n" != a.text.charAt(e);) {
        e++;
      }
      (0,z.RN)(a, e);
      d.search(e, c);
    } else {
      " " == f ? ((0,z.Fm)(a, e, e + 1), h = XN(a, e) - 1) : "-" == f && 1 <= e - b ? ((0,z.Fm)(a, e, e + 1), h = JN(a, e) - 1) : "–" == f && 1 <= e - b ? ((0,z.Fm)(a, e, e + 1), h = MN(a, e) - 1) : "\x3e" == f && 1 <= e - b ? ((0,z.Fm)(a, e, e + 1), h = NN(a, e) - 1) : "." == f && 2 <= e - b ? ((0,z.Fm)(a, e, e + 1), h = IN(a, e) - 1) : "'" == f ? ((0,z.Fm)(a, e, e + 1), h = YN(a, e) - 1) : '"' == f ? ((0,z.Fm)(a, e, e + 1), h = $N(a, e) - 1) : "(" == f && 1 <= e - b ? ((0,z.Fm)(a, e, e + 1), h = 
      PN(a, e) - 1) : ")" == f && 1 <= e - b ? ((0,z.Fm)(a, e, e + 1), h = ON(a, e) - 1) : "3" == f && 1 <= e - b && ((0,z.Fm)(a, e, e + 1), h = QN(a, e) - 1), e += h, c += h;
    }
  }
  (0,z.RN)(a, c);
};
(0,z.p)(z.eO, z.EN);
z.g = z.eO.prototype;
z.g.fb = (0,z.Sb)("PastePlugin");
z.g.enable = function(a) {
  z.eO.w.enable.call(this, a);
  a = a.aa();
  this.wa.push((0,z.Q)(a, "paste", this.NG, this), (0,z.Q)(a, "copy", this.$y, this), (0,z.Q)(a, "cut", this.$y, this));
};
z.g.disable = function(a) {
  z.eO.w.disable.call(this, a);
  (0,z.ci)(this.wa);
  this.wa.length = 0;
};
z.g.C = function() {
  window.document.body.removeChild(this.Jc);
  this.Jc = null;
  z.eO.w.C.call(this);
};
z.g.rc = function(a) {
  if (86 == a.keyCode && a.shiftKey && (a.metaKey || a.ctrlKey)) {
    this.Dv = !0;
    var b = this;
    (0,window.setTimeout)(function() {
      b.Dv = !1;
    }, 0);
  }
  return!1;
};
z.g.$y = function(a) {
  var b = this.O;
  if ((0,z.MO)(b) && a.clipboardData && a.clipboardData.setData) {
    var c;
    a: {
      c = (0,z.sN)(b);
      var d = c.nd, e = null;
      if ((0,z.uM)(d)) {
        c = "";
      } else {
        if (d.fi()) {
          e = [(0,z.LM)(c, d.start.X).ub()], e = (0,z.Eg)((0,z.Dg)(new z.Cg, e), []);
        } else {
          if (d.isCollapsed()) {
            c = "";
            break a;
          }
          for (var e = (0,z.Eg)((0,z.Dg)(new z.Cg, []), []), f = d.start.X;f <= d.end.X;f++) {
            var h = (0,z.LM)(c, f).ja();
            f === d.end.X && d.end.offset < h.text.length && h.split(d.end.offset);
            f === d.start.X && 0 < d.start.offset && (h = h.split(d.start.offset));
            (0,z.oI)(h) && (h.type = 1);
            e.pc().push(h.ub());
            c.Pa() && (h = (0,z.eN)(c, f), h.ra() === f && f !== d.start.X && (h = (new z.Og).Wa(h.getName()), e.ec().push((new z.Og).Wa(h.getName()).Sd(e.pc().length - 1))));
          }
        }
        d = !1;
        c.Pa() && 0 < e.ec().length && (d = !0);
        c = (0,z.hn)(e, z.wg, {rf:!0, isPublished:!0, media:{}, sections:d, li:!1, Lh:!0, kf:!1});
      }
    }
    c && (a.clipboardData.setData("text/html", c), (c = (0,z.UL)(c)) && a.clipboardData.setData("text/plain", c), "cut" === a.type && (0,z.qN)(new z.vN(!0, 1), b), a.preventDefault());
  }
};
z.g.NG = function(a) {
  var b = gO(this, a);
  if (null !== b) {
    a.preventDefault(), fO(this, b);
  } else {
    var c = (0,z.sN)(this.O), d = c.getSelection();
    this.Jc.style.top = (0,z.ri)().top + 50 + "px";
    this.Jc.style.display = "block";
    this.Jc.innerHTML = "";
    this.Jc.focus();
    (0,window.setTimeout)(function() {
      var a = this.Ns ? this.Jc.innerHTML : (0,z.Ga)(this.Jc.textContent);
      this.Jc.style.display = "none";
      this.O.aa().focus();
      (0,z.DM)(c, d);
      fO(this, a);
    }.bind(this), 0);
  }
};
(0,z.p)(hO, z.pN);
hO.prototype.gd = function(a) {
  var b = a.getSelection(), c = b.start.offset, d = b.end.offset, e = (0,z.LM)(a, b.start.X);
  (0,z.lI)(e, this.xF, d);
  (0,z.lI)(e, this.nJ, c);
  b.start.offset++;
  b.end.offset++;
  (0,z.NM)(a, b.start.X);
  (0,z.RM)(a);
};
(0,z.p)(z.jO, z.EN);
z.jO.prototype.fb = (0,z.Sb)("SmartTextPlugin");
z.jO.prototype.rc = function(a) {
  return 32 == a.keyCode ? ((0,z.qN)(HN(this.qF ? [z.RN, XN] : XN), this.O), a.preventDefault(), !0) : !1;
};
z.jO.prototype.Qr = function(a) {
  return kO(this, a.qf.charCode) ? (a.preventDefault(), !0) : !1;
};
(0,z.p)(mO, z.v);
z.g = mO.prototype;
z.g.Nd = 0;
z.g.C = function() {
  mO.w.C.call(this);
  this.stop();
  delete this.io;
  delete this.xf;
};
z.g.start = function(a) {
  this.stop();
  this.Nd = (0,z.lO)(this.Rv, (0,z.ha)(a) ? a : this.Mw);
};
z.g.stop = function() {
  this.Od() && z.ea.clearTimeout(this.Nd);
  this.Nd = 0;
};
z.g.Yc = function() {
  this.stop();
  this.gl();
};
z.g.Od = function() {
  return 0 != this.Nd;
};
z.g.gl = function() {
  this.Nd = 0;
  this.io && this.io.call(this.xf);
};
(0,z.p)(z.qO, z.v);
var sO = [];
z.g = z.qO.prototype;
z.g.qa = function(a, b, c, d) {
  return rO(this, a, b, c, d);
};
z.g.Ee = function(a, b, c, d, e) {
  if ((0,z.ia)(b)) {
    for (var f = 0;f < b.length;f++) {
      this.Ee(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.xf || this, c = qJ(c), d = !!d, b = (0,z.QA)(a) ? a.pl(b, c, d, e) : a ? (a = (0,z.aB)(a)) ? a.pl(b, c, d, e) : null : null, b && ((0,z.YA)(b), delete this.zb[b.key]);
  }
  return this;
};
z.g.Oj = function() {
  (0,z.sb)(this.zb, z.YA);
  this.zb = {};
};
z.g.C = function() {
  z.qO.w.C.call(this);
  this.Oj();
};
z.g.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
var SO;
var AO;
var yO;
var vO;
(0,z.p)(tO, z.BN);
tO.prototype.oa = null;
tO.prototype.ic = null;
vO = "change";
z.wO = "delayedchange";
yO = {$N:"cvc", LO:"load", FP:"unload", LN:"beforechange", WN:vO, fO:z.wO, MN:"beforefocus", kO:"focus", PN:"blur", NN:"beforetab", AO:"ifrsz", oP:"selectionchange"};
AO = 0;
SO = null;
z.g = tO.prototype;
z.g.Px = !1;
z.g.Es = !1;
z.g.aa = function() {
  return this.oa;
};
z.g.addListener = function(a, b, c, d) {
  var e = this.aa();
  z.BC && e && this.Fe() && (e = e.ownerDocument);
  d ? rO(this.pf, e, a, b, c, d) : this.pf.qa(e, a, b, c);
};
z.g.ta = function(a) {
  var b = a.fb();
  this.oi[b] = a;
  for (var c in uO) {
    a[uO[c]] && this.Fj[c].push(a);
  }
  a.O = this;
  this.Ze() && a.enable(this);
};
var zO = 15, xO = 250;
tO.prototype.Fe = z.WB;
tO.prototype.MD = z.VB;
var CO = {46:!0, 8:!0};
z.ld || (CO[9] = !0);
var DO = {86:!0, 88:!0};
z.aC && !z.Re && (CO[229] = !0);
tO.prototype.C = function() {
  this.bo() || this.Ze();
  this.ic && this.execCommand("clearlorem");
  FO(this);
  GO(this);
  VO(this);
  this.Rl = null;
  this.pf && (this.pf.Ob(), this.pf = null);
  for (var a;a = this.EN.pop();) {
    a.Ob();
  }
  SO == this.id && (SO = null);
  for (var b in this.oi) {
    a = this.oi[b], a.aL && a.Ob();
  }
  delete this.oi;
  tO.w.C.call(this);
};
var TO = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"], JR = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, KR = {65:!0, 86:!0, 88:!0}, KO = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
z.g = tO.prototype;
z.g.$n = function(a, b) {
  for (var c = this.Fj[a], d = (0,z.ib)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    if ((f.isEnabled(this) || HR[a]) && f[uO[a]].apply(f, d)) {
      return!0;
    }
  }
  return!1;
};
z.g.kM = function(a, b) {
  for (var c = this.Fj[a], d = (0,z.ib)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    (f.isEnabled(this) || HR[a]) && f[uO[a]].apply(f, d);
  }
};
z.g.sx = function(a, b, c) {
  for (var d = this.Fj[a], e = (0,z.ib)(arguments, 1), f = 0;f < d.length;++f) {
    var h = d[f];
    if (h.isEnabled(this) || HR[a]) {
      e[0] = h[uO[a]].apply(h, e);
    }
  }
  return e[0];
};
z.g.Pr = function(a) {
  (z.Re || HO(this, a)) && !this.$n(1, a) && z.FC && JO(this, a);
};
z.g.tC = function(a) {
  if (z.Re) {
    if (!HO(this, a)) {
      return;
    }
  } else {
    this.Aw = !0, this.Nn();
  }
  this.$n(2, a) || z.FC || JO(this, a);
};
z.g.uC = function(a) {
  z.Re || !this.Aw && !BO(a) || this.Cw();
  this.$n(3, a);
  NO(this, "selectionchange") || (JR[a.keyCode] || (a.ctrlKey || a.metaKey) && KR[a.keyCode]) && this.zx.start();
};
z.g.execCommand = function(a, b) {
  for (var c = arguments, d, e = this.Fj[6], f = 0;f < e.length;++f) {
    var h = e[f];
    if (h.isEnabled(this) && h.Pg(a)) {
      d = h.execCommand.apply(h, c);
      break;
    }
  }
  return d;
};
z.g.queryCommandValue = function(a) {
  var b = this.Ze() && this.Sw;
  if ((0,z.ma)(a)) {
    return LO(this, a, b);
  }
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = LO(this, a[d], b);
  }
  return c;
};
z.g.QL = function(a, b) {
  if (!NO(this, vO)) {
    var c = b.qf;
    try {
      if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) {
        return;
      }
    } catch (d) {
      return;
    }
    c.prevValue != c.newValue && a.call(this, c);
  }
};
z.g.Fw = function(a) {
  NO(this, vO) || (a = a.rw ? a.qf : a, a.target.firebugIgnore || (this.Pw = this.El = !0, this.$d.start()));
};
z.g.qC = function() {
  z.ld && this.execCommand("clearlorem", !0);
  z.Re && this.iw();
  this.fl();
};
z.g.VL = function() {
  var a = this.JD;
  this.JD = null;
  (0,z.uN)(this, void 0, a);
};
z.g.Nn = function() {
  NO(this, "beforechange") || this.dispatchEvent("beforechange");
};
z.g.fl = function(a) {
  OO(this, !0, a);
};
z.g.Cw = function() {
  NO(this, vO) || (this.$d && this.$d.stop(), this.Pw = this.El = !0, NO(this, z.wO) || this.Mn.start());
};
z.g.WB = function() {
  NO(this, z.wO) || (this.Mn.stop(), this.El = !1, this.dispatchEvent(z.wO));
};
z.g.iw = function() {
  this.UB();
  this.XB();
};
z.g.UB = function() {
  NO(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"));
};
z.g.XB = function() {
  if (!NO(this, "focus")) {
    SO = this.id;
    this.Sw = !0;
    this.dispatchEvent("focus");
    if (z.Re) {
      var a = this.aa(), b = (0,z.MO)(this);
      if (b) {
        var c = (0,z.xe)(b);
        0 != (0,z.ye)(b) || c && c != a && "BODY" != c.tagName || FJ((0,z.hJ)(a), 0).select();
      }
    }
    !z.AC && this.Fe() && this.Hd.Ld().parent.getSelection().removeAllRanges();
  }
};
z.g.VB = function() {
  NO(this, "blur") || (SO == this.id && (SO = null), this.Sw = !1, this.dispatchEvent("blur"));
};
z.g.TL = function(a) {
  SO = this.id;
  if (z.ld) {
    var b = a.target;
    b && "A" == b.tagName && a.ctrlKey && this.Rl.Ld().open(b.href);
  }
  this.Es = !0;
};
z.g.RL = function() {
  this.Es = !1;
};
z.g.wC = function(a) {
  if (!this.Px || this.Es) {
    this.Es = !1, (0,z.uN)(this, a), z.ld && (this.JD = a.target, this.zx.start());
  }
};
z.g.Bx = function(a, b, c, d) {
  if (!this.bo()) {
    d && this.execCommand("clearlorem");
    b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
    c && tN(this, !1);
    a = b;
    if (b = this.aa()) {
      if (this.Fe() && z.ce) {
        for (var e = b.ownerDocument.getElementsByTagName("HEAD"), f = e.length - 1;1 <= f;--f) {
          e[f].parentNode.removeChild(e[f]);
        }
      }
    } else {
      b = this.ic;
    }
    b && IO(this, a, b);
    d && this.execCommand("updatelorem");
    this.Ze() && (c ? (z.Re && nO(this.$d), OO(this)) : this.fl());
  }
};
z.g.iE = function() {
  var a = this.Hd.Lg();
  a.designMode = "on";
  z.CC && a.execCommand("styleWithCSS", !1, !1);
};
z.g.HC = function() {
  this.Zv && UO(this) && (0,z.Ff)(this.Zv, this.aa());
};
z.g.Ze = function() {
  return 2 == this.Jj;
};
z.g.bo = function() {
  return 1 == this.Jj;
};
z.g.focus = function() {
  if (!z.yC && this.Fe()) {
    this.Hd.Ld().focus();
  } else {
    if (z.Se) {
      var a = this.Lv.pageXOffset, b = this.Lv.pageYOffset
    }
    this.aa().focus();
    z.Se && this.Lv.scrollTo(a, b);
  }
};
z.g.WC = function(a) {
  var b = this.ic;
  if (b) {
    var b = b.innerHTML, c = {}, b = this.sx(8, b, c), d = this.Rl.Ac("IFRAME", WO(this));
    if (UO(this)) {
      var e = (0,z.xa)(this.CC, this, d, b, c);
      this.pw = (0,z.NJ)(d, "load", e, !0);
      a && (d.src = a);
    }
    a = this.ic;
    d.className = a.className;
    d.id = a.id;
    WI(d, a);
    UO(this) || this.CC(d, b, c);
  }
};
z.g.ED = function() {
  var a = this.ic;
  if (a) {
    var b;
    b = this.Fe() && (b = this.Hd) ? (b = b.Ld()) && b.frameElement : null;
    b && WI(a, b);
  }
};
z.g.CC = function(a, b, c) {
  VO(this);
  a.allowTransparency = "true";
  var d = (0,z.td)(this.ic);
  c = new oO(this.id, (0,z.Bd)(d.Xc), c);
  if (UO(this)) {
    var e = (a.contentDocument || a.contentWindow.document).body;
    z.yC && (e.contentEditable = !0);
    e.className = "editable";
    e.setAttribute("g_editable", !0);
    e.hideFocus = !0;
    e.id = c.cC;
    (0,z.vf)(e, c.ow);
    e.innerHTML = b;
  } else {
    var d = new pO(this.Zv), f = [];
    c.Mv && c.Ix && f.push("\x3c!DOCTYPE HTML\x3e");
    f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
    c.Mv && f.push("height:", c.eC ? "100%" : "auto");
    f.push('"\x3e');
    f.push("\x3chead\x3e\x3cstyle\x3e");
    d && d.NB && f.push(d.NB);
    z.Re && c.Ix && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("\x3c/style\x3e\x3c/head\x3e");
    f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
    z.yC && f.push("contentEditable ");
    f.push('class\x3d"editable ');
    f.push('" id\x3d"', c.cC, '" style\x3d"min-width:0;');
    z.Re && c.Mv && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.Ix ? "100%" : "auto"), c.eC ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    z.Se && f.push(";outline:hidden");
    for (e in c.ow) {
      f.push(";" + e + ":" + c.ow[e]);
    }
    f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
    b = f.join("");
    e = a.contentDocument || a.contentWindow.document;
    e.open();
    e.write(b);
    e.close();
  }
  EO(this, (a.contentDocument || a.contentWindow.document).body);
  !z.yC && this.Fe() && this.iE();
  RO(this);
};
(0,z.p)(z.XO, z.EN);
z.g = z.XO.prototype;
z.g.fb = (0,z.Sb)("CharCounterPlugin");
z.g.enable = function(a) {
  z.XO.w.enable.call(this, a);
  a.qa(z.wO, this.tg, !1, this);
};
z.g.disable = function(a) {
  z.XO.w.disable.call(this, a);
  a.Ee(z.wO, this.tg, !1, this);
};
z.g.rc = function(a) {
  dM(a) && window.getSelection().isCollapsed && YO(this);
  return!1;
};
z.g.tg = function() {
  YO(this);
};
$O.prototype.get = function(a) {
  return(0,z.aP)(this, a);
};
(0,z.p)(z.hP, z.EN);
z.g = z.hP.prototype;
z.g.fb = (0,z.Sb)("MaxLengthPlugin");
z.g.enable = function(a) {
  z.hP.w.enable.call(this, a);
  a.qa(z.wO, this.tg, !1, this);
  a = a.ic;
  a.setAttribute("data-length", iP(this));
  a.setAttribute("data-max-length", this.Le);
};
z.g.disable = function(a) {
  a.Ee(z.wO, this.tg, !1, this);
  (0,z.Sc)(a.ic, ["max-length", "close-to-max-length"]);
  z.hP.w.disable.call(this, a);
};
z.g.rc = function(a) {
  return!this.gy && dM(a) && 8 != a.keyCode && this.O.aa().textContent.length >= this.Le && window.getSelection().isCollapsed ? (a.preventDefault(), !0) : !1;
};
z.g.Ew = function() {
  this.O.aa().setAttribute("data-length", iP(this));
  return!1;
};
z.g.tg = function() {
  var a = this.O, b = a.aa(), c = iP(this);
  b.setAttribute("data-length", c);
  (0,z.Tc)(b, "max-length", c > this.Le);
  (0,z.Tc)(b, "close-to-max-length", c > 0.66 * this.Le);
  !this.gy && c > this.Le && (b = (0,z.sN)(a), (0,z.qN)((0,z.GN)(b.Qb(0), function(a) {
    (0,z.Fm)(a, this.Le, a.text.length);
  }.bind(this)), a));
};
(0,z.p)(z.jP, z.EN);
z.g = z.jP.prototype;
z.g.fb = (0,z.Sb)("FocusHandlingPlugin");
z.g.enable = function(a) {
  z.jP.w.enable.call(this, a);
  a.qa("focus", this.Dw, !1, this);
  a.qa("blur", this.Or, !1, this);
};
z.g.disable = function(a) {
  z.jP.w.disable.call(this, a);
  a.Ee("focus", this.Dw, !1, this);
  a.Ee("blur", this.Or, !1, this);
};
z.g.Dw = function() {
};
z.g.Or = function() {
};
(0,z.p)(z.kP, z.EN);
z.g = z.kP.prototype;
z.g.fb = (0,z.Sb)("DefaultTextPlugin");
z.g.enable = function(a) {
  z.kP.w.enable.call(this, a);
  a.ic.removeAttribute("data-default-value");
  a.aa().setAttribute("data-default-value", this.GF);
  (0,z.NJ)(a.aa(), "mousedown", this.rk, !1, this);
  (0,z.NJ)(a, "beforechange", this.qk, !1, this);
};
z.g.disable = function(a) {
  (0,z.MJ)(a, "beforechange", this.qk, !1, this);
  (0,z.MJ)(a.ic, "mousedown", this.rk, !1, this);
  z.kP.w.disable.call(this, a);
};
z.g.Xv = function(a) {
  a = (0,z.fb)(a.getElementsByClassName("default-value"));
  for (var b = a.length, c = 0;c < b;c++) {
    (0,z.Od)(a[c]);
  }
};
z.g.rc = function(a) {
  if (9 == a.keyCode) {
    return!1;
  }
  var b = (0,z.MO)(this.O);
  if ((b = b && lP(this, b.Ga())) && mP(this, b)) {
    if (dM(a) || 86 == a.keyCode) {
      this.qk();
    } else {
      return a.preventDefault(), !0;
    }
  }
  return!1;
};
z.g.rk = function(a) {
  var b = lP(this, a.target);
  b && mP(this, b) && (b.focus(), a.preventDefault());
};
z.g.qk = function() {
  var a = this.O, b = (0,z.MO)(a);
  (a = (a = b && lP(this, b.Ga()) || a.aa()) && nP(this, a)) && (0,z.Od)(a);
};
(0,z.p)(oP, z.EN);
oP.prototype.fb = (0,z.Sb)("DeletePlugin");
oP.prototype.rc = function(a) {
  var b = 46 === a.keyCode || 68 === a.keyCode && a.ctrlKey, c = 8 === a.keyCode;
  return b || c ? (c = 1, a.altKey && !a.metaKey ? c = 2 : a.metaKey && !a.altKey && (c = 3), (0,z.qN)(new z.vN(b, c), this.O), a.preventDefault(), !0) : !1;
};
(0,z.p)(pP, tO);
z.g = pP.prototype;
z.g.Fe = function() {
  return!1;
};
z.g.iE = z.fa;
z.g.HC = function() {
};
z.g.WC = function() {
  var a = this.ic;
  a && (EO(this, a), a.contentEditable = !0, IO(this, a.innerHTML, a), RO(this));
};
z.g.ED = z.fa;
(0,z.p)(qP, pP);
qP.prototype.Pa = function() {
  return this.Vk;
};
qP.prototype.gg = function(a) {
  this.gp = a;
};
qP.prototype.Fl = function() {
  return this.oA;
};
qP.prototype.Bx = function(a, b) {
  this.bh.selectionchange = 1;
  this.execCommand("clearlorem");
  this.Um = null;
  qP.w.Bx.call(this, !1, b, !1, !1);
  HM((0,z.sN)(this));
  (0,z.RM)((0,z.sN)(this));
  this.execCommand("updatelorem");
  this.bh.selectionchange = 0;
};
rP.prototype.Ec = function() {
  return this.Kv;
};
var wP = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
(0,z.p)(xP, z.pN);
xP.prototype.Ml = function(a) {
  (0,z.H)("variants.can_align_paragraphs") && !(0,z.oI)(a) && 8 != a.type && 7 != a.type && (a.alignment = this.mF);
};
(0,z.p)(yP, z.pN);
yP.prototype.Ml = function(a) {
  (0,z.oI)(a) || (a.hasDropCap = this.bH);
};
(0,z.p)(zP, z.pN);
zP.prototype.Ml = function(a) {
  (0,z.oI)(a) || (this.Wq && a.type != this.mc && (a.type = this.mc), this.Wq || a.type != this.mc || (a.type = 1));
};
(0,z.p)(AP, z.pN);
AP.prototype.Ml = function(a, b, c) {
  a.text && (b = (0,z.Dm)(this.mc, b, c), this.Wq ? (0,z.xm)(a, b) : (0,z.mI)(a, b));
};
(0,z.p)(z.BP, z.EN);
z.BP.prototype.fb = (0,z.Sb)("FormattingPlugin");
var LR = (0,z.Ab)({ME:"P_1", DE:"P_2", EE:"P_3", FE:"P_13", wE:"P_6", PE:"P_7", QE:"P_8", XE:"M_1", zE:"M_2", JN:"M_3", UN:"SET_HAS_DROP_CAP", cP:"CYCLE_BLOCKQUOTE", yP:"TOGGLE_ALIGNMENT"});
z.g = z.BP.prototype;
z.g.Pg = function(a) {
  return a in LR;
};
z.g.rc = function(a) {
  dM(a) ? (this.Su = !0, (0,window.setTimeout)(function() {
    (0,z.xb)(this.sh, !0) && DP(this) && CP(this);
    this.Su = !1;
  }.bind(this), 0)) : 40 != a.keyCode && 38 != a.keyCode && 37 != a.keyCode && 39 != a.keyCode || CP(this);
  return!1;
};
z.g.wl = function() {
  (0,window.setTimeout)(function() {
    (0,z.xb)(this.sh, !0) && DP(this) && CP(this);
  }.bind(this), 0);
  return!1;
};
z.g.execCommand = function(a) {
  var b = this.O;
  if ("M_3" == a) {
    FP(this);
  } else {
    if ("SET_HAS_DROP_CAP" == a) {
      (0,z.qN)(new yP(!this.queryCommandValue(a)), b);
    } else {
      if ("TOGGLE_ALIGNMENT" == a) {
        a = 1 == this.queryCommandValue(a) ? 2 : 1, (0,z.qN)(new xP(a), b);
      } else {
        if ("CYCLE_BLOCKQUOTE" == a) {
          b = this.O, a = b.queryCommandValue("CYCLE_BLOCKQUOTE"), 6 == a ? b.execCommand("P_7") : 7 == a ? b.execCommand("P_7") : b.execCommand("P_6");
        } else {
          if (0 === a.indexOf("P_")) {
            var c = Number(a.substring(2));
            ((0,z.H)("variants.can_create_h4") || 13 != c) && (0,z.qN)(new zP(c, !this.queryCommandValue(a)), b);
          } else {
            if (0 === a.indexOf("M_")) {
              var c = Number(a.substring(2)), d = (0,z.MO)(b);
              if (d && d.isCollapsed()) {
                if (this.sh[a] = !this.sh[a], b = EP(this, d)) {
                  this.yz = b;
                }
              } else {
                (0,z.qN)(new AP(c, !this.queryCommandValue(a)), b);
              }
            }
          }
        }
      }
    }
  }
};
z.g.queryCommandValue = function(a) {
  var b = this.O, c = this.O.aa(), d = (0,z.MO)(this.O), e;
  if ("SET_HAS_DROP_CAP" == a) {
    return(a = d && (0,z.Cw)(d.Ga(), c)) && (0,z.Nw)(a);
  }
  if ("TOGGLE_ALIGNMENT" == a) {
    return(a = d && (0,z.Cw)(d.Ga(), c)) && (0,z.Jw)(a);
  }
  if ("CYCLE_BLOCKQUOTE" == a) {
    return a = b.queryCommandValue(["P_6", "P_7"]), a.P_6 ? 6 : a.P_7 ? 7 : null;
  }
  if (0 === a.indexOf("P_")) {
    var f = Number(a.substring(2)), b = (0,z.sN)(b);
    e = !0;
    YM(b, function(a) {
      e && a.type != f && (e = !1);
    }, this, !1);
    return e;
  }
  if (0 === a.indexOf("M_")) {
    var h = Number(a.substring(2)), b = (0,z.sN)(b);
    if ("M_3" === a) {
      var k = !1;
      YM(b, function(a, b, c) {
        k = k || nI(a, h, b, c);
      }, this, !1);
      return k;
    }
    e = !0;
    YM(b, function(a, b, c) {
      e && (0,z.xm)(a.ja(), (0,z.Dm)(h, b, c)) && (e = !1);
    }, this, !1);
    return e;
  }
  throw Error("No handler for command " + a);
};
(0,z.p)(GP, z.EN);
GP.prototype.fb = (0,z.Sb)("FormattingShortcutsPlugin");
var MR = {u:"DO NOTHING", k:"M_3", b:"M_1", i:"M_2", e:"TOGGLE_ALIGNMENT", 0:"P_1", 1:"P_2", 2:"P_3", 3:"P_13", 5:"CYCLE_BLOCKQUOTE", 6:"P_8", 7:"P_7"};
GP.prototype.rc = function(a) {
  return 73 == a.keyCode && a.ctrlKey && z.Oi ? (a.preventDefault(), !0) : !1;
};
GP.prototype.Vn = function(a, b, c) {
  if (!c) {
    return!1;
  }
  if ("k" == b && !a.shiftKey) {
    if (a = this.O.execCommand("M_3")) {
      b = this.O, c = (0,z.sP)(a), (c = vP(c) ? 0 > c.search(/:/) ? "http://" + c.replace(/^[\s\xa0]+/, "") : c : wP.test(c) ? "mailto:" + c : null) ? (a.Ec().href = c, (0,z.tP)(a), b.execCommand("updateLinkBubble")) : b.execCommand("link", a);
    }
    return!0;
  }
  return(b = MR[b]) ? (this.O.execCommand(b), z.Re && a.stopPropagation(), !0) : !1;
};
(0,z.p)(HP, z.BN);
(0,z.p)(JP, z.OA);
var IP = z.Re || z.ce && (0,z.hd)(532);
z.g = HP.prototype;
z.g.Zh = !1;
z.g.QC = 0;
z.g.PL = function(a) {
  KP(this, a);
};
z.g.NL = function(a) {
  LP(this, a);
};
z.g.xC = function(a) {
  this.Zh && this.dispatchEvent(new JP("updateIme", a));
};
z.g.Pr = function(a) {
  if (!IP) {
    var b = this.Zh;
    b || 229 != a.keyCode ? b && 229 != a.keyCode ? MP(a) && LP(this, a) : b && this.dispatchEvent(new JP("updateIme", a)) : KP(this, a);
  }
  MP(a) && (this.QC = a.keyCode);
};
z.g.WL = function(a) {
  !IP && z.ce && 229 == this.QC && this.Zh && LP(this, a);
};
z.g.SL = function(a) {
  if (this.Zh) {
    switch(a.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        LP(this, a);
    }
  }
};
z.g.C = function() {
  this.xf.Ob();
  this.Vw.Ob();
  this.ZB = null;
  HP.w.C.call(this);
};
(0,z.p)(NP, z.EN);
z.g = NP.prototype;
z.g.fb = (0,z.Sb)("ImePlugin");
z.g.Pg = function(a) {
  return "active-ime" === a;
};
z.g.enable = function(a) {
  NP.w.enable.call(this, a);
  this.Gp = new HP(a.aa());
  this.Gp.qa("endIme", this.BG, !1, this);
};
z.g.disable = function(a) {
  (0,z.ad)(this.Gp);
  NP.w.disable.call(this, a);
};
z.g.queryCommandValue = function() {
  return this.Gp.Zh;
};
z.g.BG = function() {
  this.O.fl();
};
(0,z.p)(OP, z.EN);
OP.prototype.fb = (0,z.Sb)("KeyboardShortcutPlugin");
OP.prototype.Vn = function(a, b, c) {
  return c && b in this.kv ? (this.kv[b].ll.call(this.kv[b].Br), !0) : !1;
};
OP.prototype.Zk = function(a, b, c) {
  this.Ap[a] = {ll:b, Br:c};
};
OP.prototype.rc = function(a) {
  return a.keyCode in this.Ap ? !!this.Ap[a.keyCode].ll.call(this.Ap[a.keyCode].Br, a) : !1;
};
(0,z.p)(PP, z.EN);
z.g = PP.prototype;
z.g.fb = (0,z.Sb)("SelectionNormalizingPlugin");
z.g.enable = function(a) {
  PP.w.enable.call(this, a);
  var b = a.aa();
  this.wa.push((0,z.Q)(b, "mouseup", this.KG, this));
  this.wa.push((0,z.Q)(b, "mousedown", this.rk, this));
  (0,z.H)("variants.can_see_drop_caps") && a.qa("beforechange", this.qk, !1, this);
};
z.g.disable = function(a) {
  PP.w.disable.call(this, a);
  (0,z.ci)(this.wa);
  this.wa.length = 0;
  a.Ee("beforechange", this.qk, !1, this);
};
z.g.KG = function(a) {
  if (RP(a)) {
    var b = WJ(0, a.target), c = (0,z.ZH)(window);
    c && (yI((0,z.ve)(c), (0,z.we)(c), b.V, b.offset).select(), a.preventDefault());
  } else {
    (0,z.Vb)(this.Oz.bind(this, 40));
  }
};
z.g.rk = function(a) {
  if (RP(a)) {
    var b = WJ(0, a.target);
    (0,z.On)(function() {
      FJ(b.V, b.offset).select();
    });
  }
};
z.g.rc = function(a) {
  var b;
  switch(a.keyCode) {
    case 39:
    ;
    case 37:
    ;
    case 40:
    ;
    case 38:
      (0,z.Vb)(this.Oz.bind(this, a.keyCode));
      break;
    case 65:
      if (z.Oi ? a.metaKey : a.ctrlKey) {
        a.preventDefault();
        var c = this.O;
        a = (0,z.sN)(c);
        b = a.getSelection();
        if (b.start.X == b.end.X && sM(b)) {
          b = b.start.X;
          var d = (0,z.LM)(a, b);
          if ((0,z.oI)(d)) {
            return SM(a, b, 0, b, d.text.length, !1), (0,z.uN)(c), !0;
          }
        }
        b = (0,z.JM)(a) - 1;
        SM(a, 0, 0, b, (0,z.LM)(a, b).text.length, !1);
        (0,z.uN)(c);
        return!0;
      }
    ;
  }
  dM(a) && (a = (0,z.sN)(this.O), b = a.getSelection(), sM(b) || SM(a, b.start.X, b.start.offset, b.end.X, b.end.offset, b.xe()));
  return!1;
};
z.g.Oz = function(a) {
  var b = this.O;
  if ((0,z.MO)(b)) {
    var b = (0,z.sN)(b), c = 39 === a || 40 === a;
    a = SP(this, b, c, !0);
    c = SP(this, b, c, !1);
    (a || c) && (0,z.RM)(b);
  }
};
z.g.qk = function() {
  var a = this.O, b = (0,z.MO)(a);
  if (b) {
    var c = (0,z.Cw)(b.te(), a.aa()), d;
    if (d = c) {
      d = b.Ga(), d = (0,z.Nw)(c) ? (0,z.ki)(d, QP, c) : null;
    }
    d && b.isCollapsed() && (a = (0,z.$M)((0,z.sN)(a), c), -1 != a && (0,z.Vb)(this.MK.bind(this, a)));
  }
};
z.g.MK = function(a) {
  var b = (0,z.sN)(this.O), c = b.Qb(a), c = (c = c && c.querySelector(".drop-cap-editable")) ? (0,z.PH)(c) : "";
  if (!(0,z.Ea)(c)) {
    var d = (0,z.LM)(b, a);
    d.text = c + d.text;
    (0,z.NM)(b, a);
    (0,z.RM)(b);
  }
};
(0,z.p)(UP, z.EN);
UP.prototype.fb = (0,z.Sb)("TypeOverPlugin");
UP.prototype.rc = function(a) {
  var b = this.O, c = (0,z.MO)(b);
  dM(a) && !a.ctrlKey && c && !c.isCollapsed() && (a = (0,z.sN)(b).getSelection(), sM(a) && a.start.X === a.end.X || (0,z.qN)(new z.vN(!0, 1), b));
  return!1;
};
(0,z.p)(VP, z.EN);
VP.prototype.fb = (0,z.Sb)("UndoRedoPlugin");
VP.prototype.Pg = function(a) {
  return "+undo" == a || "+redo" == a;
};
VP.prototype.execCommand = function(a) {
  "+undo" == a ? (0,z.sN)(this.O).im() : "+redo" == a && (0,z.sN)(this.O).ks();
  return!0;
};
VP.prototype.Vn = function(a, b, c) {
  if (!c) {
    return!1;
  }
  c = this.O;
  var d = null;
  "y" == b || "z" == b && a.shiftKey ? d = "+redo" : "z" == b && (d = "+undo");
  return d ? (c.execCommand(d), a.preventDefault(), !0) : !1;
};
(0,z.p)(z.WP, z.Oj);
z.g = z.WP.prototype;
z.g.oa = null;
z.g.sm = null;
z.g.tm = null;
z.g.rz = !0;
z.g.Ki = !0;
z.g.gg = function(a) {
  this.gp = a;
};
z.g.isEnabled = function() {
  return this.Ki;
};
z.g.KD = function(a) {
  a != this.Ki && this.oa && (this.oa.ic.contentEditable = a);
  this.Ki = a;
};
z.g.Zk = function(a, b, c) {
  this.OA.Zk(a, b, c);
};
z.g.ta = function(a, b) {
  if (this.oa) {
    if (b) {
      throw Error("Can only prepend plugins before editor is activated");
    }
    this.oa.ta(a);
  } else {
    b ? this.fn.unshift(a) : this.fn.push(a);
  }
};
z.g.select = function() {
  (0,z.Ve)((0,z.Me)(this.oa.aa()), void 0).select();
};
z.g.execCommand = function(a, b) {
  this.oa.execCommand.apply(this.oa, arguments);
};
z.g.queryCommandValue = function(a, b) {
  return this.oa.queryCommandValue.apply(this.oa, arguments);
};
z.g.ua = function() {
  if (!this.sm || this.oa.El) {
    var a;
    if (!this.tm || this.oa.El) {
      var b = this.oa.aa();
      a = (0,z.sN)(this.oa);
      (0,z.CM)(a);
      (0,z.QM)(a);
      a = z.Ml.ja((0,z.Ul)(a.Ib));
      b = QJ(b, XP(this).sections);
      if (!a.Lb(b)) {
        throw new EM("richText model");
      }
      for (var b = a.pc(), c = 0;c < b.length;c++) {
        var d = (0,z.um)(b[c]), e = d;
        8 != e.type && (lJ(e, z.DR), lJ(e, z.ER));
        e = d;
        (0,z.ym)(e, 4);
        (0,z.ym)(e, 5);
        b[c] = d.ub();
      }
      uJ(b.concat(a.ec() || []));
      b = a.pc() || [];
      c = (0,z.jm)(a);
      for (d = 0;d < b.length;d++) {
        var f = b[d], e = f.g(), f = f.getMetadata() && f.getMetadata().$a();
        if (!(e = 4 == e && !f)) {
          var f = d, h = a, e = h.pc(), k = h.pc()[f];
          e = qI(k.g(), k.qc()) ? (h = h.ec()) ? (f = (0,z.Zg)(h, f)) && (0,z.fJ)(f) ? 1 < (0,z.$g)(h, h.indexOf(f), e.length) : !0 : !0 : !1;
        }
        e && (e = c, f = (0,z.Dl)(2).kb(d), (0,z.Il)((0,z.El)(f), e), d--);
      }
      for (;b.length && 5 == (0,z.Xa)(b).g();) {
        d = c, e = (0,z.Dl)(2).kb(b.length - 1), (0,z.Il)((0,z.El)(e), d);
      }
      this.tm = a;
    }
    a = this.tm;
    if (this.Ui) {
      a = (0,z.QO)(this.oa).replace(/<br>/g, "\n");
      if (-1 != a.indexOf("\x3c")) {
        throw Error("Sanitization plugin failure");
      }
      a = AI(a);
    } else {
      a = (0,z.hn)(a, z.wg, XP(this));
    }
    this.sm = a;
  }
  return this.sm;
};
z.g.C = function() {
  if (this.oa) {
    if (this.oa.Jj != AO) {
      var a = this.oa;
      if (a.Jj == AO) {
        throw Error("makeUneditable: Field is already uneditable");
      }
      a.$d && nO(a.$d);
      nO(a.Mn);
      nO(a.zx);
      a.execCommand("clearlorem");
      VO(a);
      var b = a.ic;
      SO == b.id && (SO = null);
      GO(a);
      if ((0,z.ma)(null)) {
        z.ld && (0,z.JJ)(b);
        b.innerHTML = null;
        var c = a.ic;
        c.removeAttribute("contentEditable");
        c.removeAttribute("g_editable");
        c.removeAttribute("role");
        a.id ? c.id = a.id : c.removeAttribute("id");
        c.className = a.gN || "";
        var d = a.cssText;
        d ? (0,z.yd)(c, {style:d}) : c.removeAttribute("style");
        (0,z.ma)(a.qD) && ((0,z.vf)(c, "lineHeight", a.qD), a.qD = null);
      }
      a.ED();
      FO(a);
      z.ce && b.blur();
      a.execCommand("updatelorem");
      a.dispatchEvent("unload");
      this.oa.ic.contentEditable = !1;
    }
    this.oa.Ob();
    this.oa = null;
  }
  z.WP.w.C.call(this);
};
z.g.de = function() {
  return!1;
};
z.g.focus = function(a) {
  if (a) {
    try {
      YL(this.oa.aa().lastChild, !1);
    } catch (b) {
      this.oa.focus();
    }
  } else {
    this.oa.focus();
  }
};
z.g.Do = function(a) {
  this.oa && this.oa.aa() && (this.oa.aa().style.visibility = a ? "" : "hidden");
  this.rz = a;
};
z.g.Pa = z.VB;
z.g.Fl = z.VB;
z.g.H = function() {
  z.WP.w.H.call(this);
  if (!this.oa) {
    if (!window.document.getElementById(this.jz)) {
      throw Error("Element must be in DOM before editor is activated");
    }
    this.oa = new qP(this.jz);
    this.oa.gg(this.gp);
    var a = this.Pa();
    this.oa.Vk = a;
    a = this.Fl();
    this.oa.oA = a;
    this.oa.Px = !0;
    this.oa.ta(new VP);
    this.oa.ta(this.OA);
    for (a = 0;a < this.fn.length;a++) {
      this.oa.ta(this.fn[a]);
    }
    this.oa.ta(new UP);
    this.oa.qa(z.wO, this.eq, !1, this);
    if (this.Ki) {
      a = this.oa;
      a.Jj = 1;
      var b = a.ic;
      a.nodeName = b.nodeName;
      a.gN = b.className;
      a.cssText = b.style.cssText;
      b.className += " editable";
      a.WC(void 0);
      HM((0,z.sN)(this.oa));
    }
    this.fn.length = 0;
    a = (0,z.pi)(this.oa.aa());
    a != window.document.body && z.ce && this.fz.qa(a, ["keydown", "keypress", "keyup"], this.VJ);
  }
  this.Do(this.rz);
};
z.g.VJ = function(a) {
  if (a.target === a.currentTarget) {
    var b = (0,z.MO)(this.oa);
    (b = b && (0,z.zI)(b)) && (0,z.Ud)(this.oa.aa(), b) && ("keydown" === a.type ? this.oa.Pr(a) : "keypress" === a.type ? this.oa.tC(a) : "keyup" === a.type && this.oa.uC(a));
  }
};
z.g.Gb = function(a) {
  this.Ui && (a = (0,z.Ga)(a).replace(/\n/g, "\x3cbr\x3e"));
  this.oa.Bx(!1, a, !1, !1);
  this.tm = this.sm = null;
};
z.g.eq = function() {
  this.tm = this.sm = null;
  this.S("change");
};
z.g.Hv = z.WB;
z.g.as = (0,z.n)(220);
(0,z.p)(z.YP, z.EN);
z.YP.prototype.fb = (0,z.Sb)("CancelEnterPlugin");
z.YP.prototype.rc = function(a) {
  return 13 === a.keyCode || 77 === a.keyCode && a.ctrlKey ? (a.preventDefault(), !0) : !1;
};
(0,z.p)(z.$P, z.EN);
z.$P.prototype.fb = (0,z.Sb)("SanitizationPlugin");
z.$P.prototype.xD = function(a) {
  if (this.Hu == z.YC) {
    var b = window.document.createElement("div");
    b.innerHTML = a;
    ZP(b, this.Hu);
    a = b.innerHTML;
  }
  var b = {Mo:this.O.Pa(), Bs:!1}, c = window.document.createElement("div");
  c.innerHTML = a;
  return GM(c, b).aa().innerHTML;
};
z.$P.prototype.Xv = function(a) {
  ZP(a, this.Hu);
};
(0,z.p)(z.aQ, z.jP);
z.g = z.aQ.prototype;
z.g.fb = (0,z.Sb)("TypeaheadPlugin");
z.g.enable = function(a) {
  z.aQ.w.enable.call(this, a);
  this.wa = [(0,z.Q)(a.aa(), "click", this.zp, this)];
  this.ac = window.document.createElement("div");
  this.ac.className = "typeahead popover popover-bottom";
  this.Ez = [(0,z.Q)(this.ac, "click", this.GG, this), (0,z.Q)(this.ac, "mouseover", this.IG, this), (0,z.Q)(this.ac, "mouseout", this.HG, this)];
};
z.g.disable = function(a) {
  (0,z.Od)(this.ac);
  (0,z.ci)(this.wa);
  (0,z.ci)(this.Ez);
  this.ac = null;
  this.J = "";
  this.Nj = null;
  z.aQ.w.disable.call(this, a);
};
z.g.rc = function(a) {
  if (this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  this.XA = !!~[40, 38, 9, 13, 27].indexOf(a.keyCode);
  dQ(this, a);
  return!1;
};
z.g.Qr = function(a) {
  if (this.XA || this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  dQ(this, a);
  return!1;
};
z.g.Ew = function(a) {
  if (this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
      break;
    case 9:
    ;
    case 13:
      if (!this.hf) {
        break;
      }
      bQ(this);
      break;
    case 27:
      if (!this.hf) {
        break;
      }
      cQ(this);
      break;
    default:
      a = this.O, (0,z.MO)(a).isCollapsed() && (0,z.qN)(HN(this.Zr), a), a = (0,z.zI)((0,z.MO)(a)), "token" != a.getAttribute("rel") ? cQ(this) : this.Nj != a && (this.Nj = a, this.J = (0,z.bM)(a), !this.J || 2 > this.J.length ? cQ(this) : this.av = (0,z.r)(this.ux(), this.AJ, this));
  }
  return!1;
};
z.g.Dw = function() {
  this.Ct = !0;
};
z.g.Or = function() {
  this.Ct = !1;
  !this.gu && this.hf && cQ(this);
};
z.g.jx = "left";
z.g.ux = function() {
  return this.ea.get(z.FH.Q({}, {q:this.J.substring(1)}), {na:!0});
};
z.g.zp = function(a) {
  "A" == a.target.tagName && (a.preventDefault(), a.stopPropagation());
};
z.g.GG = function(a) {
  a.stopPropagation();
  a.preventDefault();
  bQ(this);
  return!1;
};
z.g.IG = function(a) {
  this.gu = !0;
  var b = this.ac.querySelector(".active");
  b && (0,z.u)(b, "active");
  a.target != this.ac && (a = (0,z.Zd)(a.target, null, "typeahead-item")) && (0,z.t)(a, "active");
};
z.g.HG = function(a) {
  (0,z.Ud)(this.ac, a.relatedTarget) || (this.gu = !1, !this.Ct && this.hf && cQ(this));
};
z.g.AJ = function(a) {
  a = a.value;
  if (!a.length) {
    return cQ(this);
  }
  this.Bd(a.slice(0, 8));
};
z.g.Bd = function(a) {
  this.ac.innerHTML = (0,z.I)(this.view, {items:a});
  if (this.Nj && (0,z.Ud)(this.O.aa(), this.Nj)) {
    this.ac.parentNode || this.yx.appendChild(this.ac);
    a = (0,z.ti)(this.Nj);
    var b = "left" == this.jx ? 6 : this.Nj.offsetWidth / 2;
    this.ac.style.top = a.top + (0,z.qi)(this.yx).top + a.height - 5 + "px";
    this.ac.style.left = a.left - this.ac.offsetWidth / 2 + b - (0,z.ti)(this.yx).left + "px";
    eQ(this);
    this.hf = !0;
  } else {
    cQ(this);
  }
};
(0,z.p)(fQ, z.WP);
z.g = fQ.prototype;
z.g.ev = !1;
z.g.Hi = "";
z.g.nn = 0;
z.g.Fl = z.WB;
z.g.Gw = function() {
  return this.Hi.trim() != this.ua().trim();
};
z.g.Qa = function() {
  return this.CH;
};
z.g.clear = function() {
  this.Gb("");
};
z.g.save = function() {
  this.ua().length <= this.Le && this.Mf();
};
z.g.hw = function() {
  this.Vv() && (0,window.confirm)(this.uw()) ? ((0,z.s)(this.oe.Gd(this.Lr()), (0,z.Aq)(this.U, "Sorry, your attempt to delete failed. Please try again.")), this.S("delete")) : gQ(this);
};
z.g.C = function() {
  (0,window.clearTimeout)(this.nn);
  fQ.w.C.call(this);
};
z.g.H = function() {
  function a(a) {
    a.stopPropagation();
  }
  fQ.w.H.call(this);
  this.Hi = this.ua();
  this.Gb(this.Hi);
  this.Zk(13, this.pu, this);
  this.Zk(27, this.qu, this);
  this.oa.qa("blur", this.ou, !1, this);
  var b = this.oa.aa();
  (0,z.Q)(b, "keydown", a);
  (0,z.Q)(b, "keyup", a);
  (0,z.Q)(b, "keypress", a);
};
z.g.Vg = function(a) {
  return a;
};
z.g.Mf = function() {
  if (this.isEnabled()) {
    var a = this.ua().trim();
    if (a) {
      this.KD(!1);
      var b = this.Lr(), c = this.xw();
      (0,z.Bc)((0,z.s)((0,z.r)(this.oe.send(c, b, this.yw(a), {na:!0}), this.CI, this), (0,z.Aq)(this.U, "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again.")), this.KD.bind(this, !0));
    } else {
      (0,z.On)(this.hw, this);
    }
  }
};
z.g.CI = function(a) {
  a = (0,z.fl)(a.value, a.references);
  this.S("save", this.Vg(a));
};
z.g.pu = function(a) {
  if (this.wn && this.wn.hf) {
    return!1;
  }
  a.shiftKey || (a.preventDefault(), this.save());
  return!0;
};
z.g.qu = function(a) {
  if (this.wn && this.wn.hf) {
    return!1;
  }
  a.preventDefault();
  gQ(this);
  return!1;
};
z.g.ou = function() {
  this.ev && (this.ua().length >= this.Le ? (0,window.confirm)(this.zw()) ? gQ(this) : this.focus() : this.nn = (0,window.setTimeout)(this.Mf.bind(this), 100));
};
(0,z.p)(hQ, fQ);
z.g = hQ.prototype;
z.g.Ps = null;
z.g.hy = null;
z.g.Lt = null;
z.g.Kt = null;
z.g.hz = null;
z.g.uw = function() {
  return FQ();
};
z.g.zw = function() {
  return GQ();
};
z.g.Vv = function() {
  return!!this.Qa();
};
z.g.Vg = function(a) {
  return{id:a.noteId, author:(0,z.H)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], wB:"just now", newHighlight:a.newHighlight || null, highlightId:a.highlightId || null};
};
z.g.xw = function() {
  return this.Qa() ? "put" : "post";
};
z.g.Lr = function() {
  return this.Qa() ? z.cH.Q({postId:this.$, noteId:this.Qa()}) : z.aH.Q({postId:this.$});
};
z.g.yw = function(a) {
  a = {content:a};
  this.Ps && (a.anchor = this.Ps, a.anchorContent = this.hy);
  null != this.Lt && null != this.Kt && (a.highlightStart = this.Lt, a.highlightEnd = this.Kt, a.highlightContent = this.hz);
  return a;
};
(0,z.p)(qQ, z.Oj);
qQ.prototype.JH = function(a) {
  if (a = (0,z.eP)(this.je, a.target)) {
    var b = (0,z.aP)(this.je, a), c = this.ld[a];
    c && c !== this.sk && b && !II(b, !1) && (this.sk && (0,z.u)(this.sk, "notes-marker-highlighted"), (0,z.t)(c, "notes-marker-highlighted"), this.sk = c, (0,z.ad)(this.bf), this.bf = new z.DA("mouseover", [b, c]), this.bf.H(), (0,z.Bc)(this.bf.ma.Bb(), function() {
      (0,z.u)(c, "notes-marker-highlighted");
      this.sk === c && (this.sk = null);
    }, this));
  }
};
qQ.prototype.H = function() {
  qQ.w.H.call(this);
  z.cD || (0,z.dP)(this.je).forEach(function(a) {
    this.qa(a, "mouseover", this.JH);
  }, this);
};
qQ.prototype.C = function() {
  (0,z.ad)(this.bf);
  (0,z.Od)(this.Oi);
  this.ld = this.Oi = null;
  qQ.w.C.call(this);
};
(0,z.p)(wQ, z.Mj);
z.g = wQ.prototype;
z.g.load = function() {
  this.me || (this.me = (0,z.s)((0,z.r)(this.oe.get(z.bH.Q({postId:this.$}), {na:!0, background:!0}), this.BJ, this), z.Gj));
  return this.me.Bb();
};
z.g.Ze = function() {
  return this.Bm;
};
z.g.Ng = function(a) {
  var b = a && a.getAttribute("name");
  if (!b || !a) {
    return null;
  }
  var c = this.rA[b];
  return c && !this.Mm ? c : this.rA[b] = (0,z.Uw)(a);
};
z.g.Pb = function(a, b) {
  var c = (0,z.uQ)(this, b);
  return(0,z.uk)(c, "id", a);
};
z.g.mC = function() {
  return(0,z.uQ)(this, "vote");
};
z.g.BJ = function(a) {
  var b = a.references.User;
  this.Ag = b[a.post.creatorId];
  var c = a.value;
  if (c) {
    for (var d = 0;d < c.length;d++) {
      var e = c[d];
      if ("HIDDEN" != e.state) {
        var f = e.replies, h = b;
        if (f) {
          for (var k = 0;k < f.length;k++) {
            var l = f[k];
            l.author = h[l.author];
          }
        }
        f = e;
        h = b;
        (0,z.uQ)(this, e.anchor).add({id:f.noteId, author:h[f.author], postId:this.$, highlightId:f.highlightId, anchor:f.anchor, noteId:f.noteId, content:f.content, state:f.state, createdAt:f.createdAt, replies:f.replies || []});
      }
    }
  }
  if (a = a.highlights) {
    for (b = 0;b < a.length;b++) {
      this.Bp[a[b].id] = new z.ZO(new z.ZO(a[b]));
    }
  }
  this.Bm = !0;
};
z.g.C = function() {
  this.me.cancel();
  wQ.w.C.call(this);
};
(0,z.p)(BQ, fQ);
z.g = BQ.prototype;
z.g.uw = function() {
  return "Are you sure you want to delete this reply?";
};
z.g.zw = function() {
  return "Your reply is too long, do you want to abandon your changes?";
};
z.g.Vv = function() {
  return!!this.Fq;
};
z.g.Vg = function(a) {
  return{id:a.replyId, author:(0,z.H)("currentUser"), postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt, wB:"just now"};
};
z.g.xw = function() {
  return this.Fq ? "put" : "post";
};
z.g.Lr = function() {
  return this.Fq ? z.fH.Q({postId:this.$, noteId:this.Qa(), replyId:this.Fq}) : z.eH.Q({postId:this.$, noteId:this.Qa()});
};
z.g.yw = function(a) {
  return{content:a};
};
(0,z.p)(CQ, z.re);
CQ.prototype.xo = function() {
  if (!this.rn) {
    return null;
  }
  var a = EQ(this.rn);
  if (!a) {
    return null;
  }
  var b = EQ(this.At);
  return b ? (0,z.We)(a.V, a.offset, b.V, b.offset) : null;
};
(0,z.p)(z.HQ, z.v);
z.g = z.HQ.prototype;
z.g.qb = null;
z.g.Qe = null;
z.g.pe = null;
z.g.ag = null;
z.g.ii = 0;
z.g.C = function() {
  QQ(this);
  (0,z.XQ)(this, null);
  this.is.ya("change", this.bz, this);
  this.Mz && (0,z.ci)(this.Mz);
  (0,z.ci)(this.ob);
  this.ob.length = 0;
  (0,z.Ji)(this.Gc.Oi);
  (0,z.Ji)(this.Nb);
  (0,z.Ei)("cancel-notes-vote");
  (0,z.Ei)("save-notes-vote");
  (0,z.Od)(this.Nb);
  this.data.Ob();
  this.Kn && this.Kn.cancel();
  (0,z.ad)(this.Gc);
  this.Mz = this.Kn = this.data = this.Nb = this.anchors = this.Gc = null;
  (0,z.t)(window.document.documentElement, "mobile-notes-variant");
  z.HQ.w.C.call(this);
};
z.g.bz = function(a) {
  if ("vote" == a && (0,z.H)("variants.enable_recommend_notes")) {
    if (this.is.get("vote")) {
      this.fx();
    } else {
      if (a = xQ(this.data)) {
        (0,z.MQ)(this, z.HD, a), (0,z.rk)(a);
      }
      this.Ej();
    }
  }
};
z.g.DI = function(a) {
  this.data.cD = a.content;
  LQ(this, a);
  IQ(this);
  this.Ig && this.Ig.so();
};
z.g.EI = function(a) {
  NQ(this, a);
  IQ(this);
};
z.g.fA = function() {
  if (this.$e.ci()) {
    return this.Ej();
  }
  this.el.confirm("Are you sure you want to abandon this note?").D(z.zF, this.Ej, this);
};
z.g.FI = function() {
  this.$e && this.$e.save();
};
z.g.Ej = function() {
};
z.g.fx = function() {
};
z.g.ax = function() {
};
z.g.dx = function() {
};
z.g.lo = function(a) {
  LQ(this, a);
};
z.g.ex = function() {
};
z.g.kD = function() {
};
z.g.Ph = function() {
};
z.g.fC = function() {
};
z.g.lG = function(a) {
  a = a.ab();
  a.tj = AJ(a.content, {rel:"nofollow", target:""});
  a.tj = VL(a.tj);
  for (var b = 0;b < a.replies.length;++b) {
    a.replies[b].tj = AJ(a.replies[b].content, {rel:"nofollow", target:""}), a.replies[b].tj = VL(a.replies[b].tj);
  }
  return a;
};
z.g.WI = function(a) {
  (0,z.VQ)(this, a.value);
};
z.g.QI = function(a) {
  (a = this.Xb["reply_" + a.value]) && a.save();
};
z.g.RH = function(a) {
  var b = this.Xb["reply_" + a.value];
  b && gQ(b);
  (a = (0,z.Zd)(a.target, null, "notes-note")) && (0,z.u)(a, "notes-show-reply-editor");
};
z.g.iI = function(a) {
  function b() {
    (0,z.u)(h, "notes-edit-mode");
    (0,z.u)(f, "notes-reply-edit-mode");
    (0,z.ad)(k);
    delete this.Xb["reply_" + e];
  }
  var c = a.value.split(","), d = c[0], e = c[1], f = (0,z.Zd)(a.target, null, "notes-note"), h = (0,z.Zd)(a.target, null, "notes-reply");
  (0,z.t)(h, "notes-edit-mode");
  (0,z.u)(f, "notes-show-reply-editor");
  (0,z.t)(f, "notes-reply-edit-mode");
  a = h.querySelector(".notes-content");
  var k = new BQ(this.Bo, a, this.postId, d, e);
  k.D("save", function(a) {
    for (var c = this.data.Pb(d, this.data.va), f = c.get("replies"), h = 0;h < f.length;h++) {
      if (f[h].replyId == e) {
        c.add("replies", a, h);
        break;
      }
    }
    (0,z.MQ)(this, z.KD, c, {replyId:e});
    b.call(this);
  }, this);
  k.D("delete", function() {
    for (var a = this.data.Pb(d, this.data.va), c = a.get("replies"), f = 0;f < c.length;f++) {
      if (c[f].replyId == e) {
        a.removeItem("replies", f);
        break;
      }
    }
    (0,z.MQ)(this, z.LD, a, {replyId:e});
    b.call(this);
  }, this);
  k.D("cancel", function() {
    var a = this.data.Pb(d, this.data.va);
    gI(this.ag, a);
    b.call(this);
  }, this);
  k.D("change", this.Ph, this);
  k.focus(!0);
  this.Xb["reply_" + e] = k;
};
z.g.bI = function(a) {
  (a = this.Xb["reply_" + a.value]) && a.hw();
};
z.g.MH = function(a) {
  a = a.get("id");
  this.Xb[a] && ((0,z.ad)(this.Xb[a]), delete this.Xb[a]);
  this.Xb["reply_" + a] && ((0,z.ad)(this.Xb["reply_" + a]), delete this.Xb["reply_" + a]);
};
z.g.IH = function(a, b) {
  (0,z.u)(b, "notes-show-reply-editor");
  b.setAttribute("data-note-id", (0,z.pk)(a, "id"));
};
z.g.LH = function(a) {
  (0,z.s)(RQ(this, this.data.Pb(a.value, this.data.va), "PUBLIC"), (0,z.Aq)(this.el, "Sorry, we couldn’t approve the note. Please try again later and make sure you are logged in."));
};
z.g.cJ = function(a) {
  (0,z.s)(RQ(this, this.data.Pb(a.value, this.data.va), "NEW"), (0,z.Aq)(this.el, "Sorry, we couldn’t unapprove the note. Please try again later and make sure you are logged in."));
};
z.g.hI = function(a) {
  function b() {
    (0,z.u)(d, "notes-edit-mode");
    (0,z.ad)(f);
    delete this.Xb[c];
  }
  var c = a.value, d = (0,z.Zd)(a.target, null, "notes-note");
  (0,z.t)(d, "notes-edit-mode");
  (0,z.u)(d, "notes-show-reply-editor");
  var e = d.querySelector(".notes-content"), f = new hQ(this.Bo, e, this.postId, a.value);
  f.D("save", function(a) {
    NQ(this, a);
    b.call(this);
  }, this);
  f.D("delete", function() {
    var a = this.data.Pb(c, this.data.va);
    (0,z.MQ)(this, z.HD, a);
    (0,z.rk)(a);
    b.call(this);
  }, this);
  f.D("cancel", function() {
    var a = this.data.Pb(c, this.data.va);
    gI(this.ag, a);
    b.call(this);
  }, this);
  f.D("change", this.Ph, this);
  f.focus(!0);
  this.Xb[c] = f;
};
z.g.OI = function(a) {
  (a = SQ(this, a)) && a.save();
};
z.g.QH = function(a) {
  (a = SQ(this, a)) && gQ(a);
};
z.g.aI = function(a) {
  (a = SQ(this, a)) && a.hw();
};
z.g.BI = function(a) {
  for (var b = 0;b < a.length;b++) {
    (0,z.vQ)(this.Gc, (0,z.pk)(a[b], "anchor"));
  }
};
z.g.oI = function(a) {
  a = a.value;
  this.Qe == a && (this.Qe = null);
  (0,z.s)(RQ(this, this.data.Pb(a, this.data.va), "HIDDEN"), (0,z.Aq)(this.el, "Sorry, we couldn’t hide the note. Please try again later and make sure you are logged in."));
};
z.g.AI = function(a) {
  a.D("add", this.BI, this);
  a.D("change", this.kD, this);
  a.D("remove", this.dx, this);
};
z.g.ym = function() {
  var a = window.document.createElement("div");
  a.className = "notes-container";
  a.innerHTML = (0,z.I)(mQ);
  this.kx.appendChild(a);
  return a;
};
z.g.J = function(a) {
  return this.Nb.querySelector(a);
};
z.g.Zj = function() {
  tQ(this.Gc);
  this.Gc.ld[this.data.va] || (0,z.XQ)(this, null);
};
z.g.mD = function(a) {
  this.Ex(a);
};
z.g.Ex = function(a) {
  (a = (0,z.Zd)(a.target, null, "notes-replies")) && (0,z.u)(a, "notes-replies-hidden");
};
z.g.An = function() {
  var a = this.data.va, b = this.J(".notes-items"), a = (0,z.uQ)(this.data, a), b = new z.Oz(b, a, nQ);
  b.Wt = "notes-note";
  this.ag = (0,z.eq)(b.cm(this.lG), {canAdminister:this.canAdminister, lx:this.data.Ag, ii:this.ii}, "note");
  this.ag.D("before-clear", this.MH, this);
  this.ag.D("after-draw", this.IH, this);
  this.ag.H();
  (0,z.rQ)(this.Gc, this.data.va, !0);
  (0,z.t)(this.screen.N, "notes-list-visible");
  (0,z.Ok)(z.ED);
};
z.g.dw = function() {
  (0,z.Ms)(this.$k, "");
  (0,z.u)(this.screen.N, "notes-list-visible");
  (0,z.Ew)(this.ij, function(a) {
    (0,z.u)(a, "grid-breaking-slide");
  });
};
z.g.getSelection = function() {
  var a = (0,z.ZH)();
  if (!a || a.isCollapsed()) {
    return null;
  }
  var b = (0,z.zI)(a), c = (0,z.cP)(this.anchors, b);
  if (!c) {
    return null;
  }
  c = (b = (0,z.ki)(b, z.sJ, c)) && this.data.Ng(b);
  if (!b) {
    return null;
  }
  var d = (0,z.XJ)(a, b, !0), e = (0,z.XJ)(a, b, !1);
  return-1 == d || -1 == e ? null : new z.AQ(a, b, new z.ZO({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.text.substring(d, e)}));
};
z.g.rI = function() {
  this.lr((0,z.$Q)());
};
(0,z.p)(KQ, fQ);
z.g = KQ.prototype;
z.g.uw = function() {
  return FQ();
};
z.g.zw = function() {
  return GQ();
};
z.g.Vv = function() {
  return!!this.Qa();
};
z.g.Vg = function(a) {
  return{id:a.noteId, author:(0,z.H)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, wB:"just now"};
};
z.g.xw = function() {
  return this.Qa() ? "put" : "post";
};
z.g.Lr = function() {
  return this.Qa() ? z.cH.Q({postId:this.$, noteId:this.Qa()}) : z.aH.Q({postId:this.$});
};
z.g.yw = function(a) {
  return{content:a, anchor:"vote"};
};
z.g.ci = function() {
  return!this.ua().trim();
};
(0,z.p)(z.bR, z.WP);
z.bR.prototype.Fl = z.WB;
z.g = z.cR.prototype;
z.g.ua = function() {
  return this.$a() ? z.Ml.ja(this.yf) : null;
};
z.g.$a = function() {
  return this.yf.$a();
};
z.g.Id = function() {
  return this.yf.Id();
};
z.g.Mr = function(a) {
  return(0,z.I)(z.Uj, dR(this, a));
};
z.g.Bj = function(a) {
  return this.Mr(this.yf, a);
};
z.g.jc = function(a) {
  this.yf.jc(a);
};
z.g.si = function(a) {
  this.yf.si(a);
};
z.g.Bf = function(a) {
  this.yf.Bf(a);
};
z.g.ui = (0,z.n)(156);
z.g = z.fR.prototype;
z.g.Rd = function(a) {
  a = a || "";
  this.ba.jc(a);
  a ? (gR(this), this.element.setAttribute("data-image-id", a), this.lp && this.lp.removeAttribute("data-scroll-disabled")) : (this.element.removeAttribute("data-image-id"), this.lp && this.lp.setAttribute("data-scroll-disabled", !0));
  var b = this.ba.Bj();
  return(0,z.r)(this.wb.reset(), function() {
    jR(this, b);
  }, this);
};
z.g.Do = function(a) {
  this.element.style.display = a ? "" : "none";
};
z.g.zN = function() {
  iR(this, "cover" == this.ba.Id() ? "contain" : "cover");
};
z.g.oC = function() {
  var a = "." + this.ba.Id() + "-edit .picker-target";
  return this.element.querySelector(a);
};
z.g.Fx = function(a, b) {
  a.src = b;
  a.style.display = "";
};
z.g.Iw = function(a) {
  a.style.display = "none";
};
(0,z.p)(mR, z.Oj);
z.g = mR.prototype;
z.g.H = function() {
  mR.w.H.call(this);
  this.qa(this.pa, "dragstart", (0,z.OL)(this.fI));
  this.qa(this.pa, "dragenter", (0,z.OL)(this.dI));
  this.qa(this.pa, "dragleave", (0,z.OL)(this.eI));
  this.qa(this.pa, "dragexit", (0,z.OL)(z.fa));
  this.qa(this.pa, "dragover", (0,z.OL)(z.fa));
  this.qa(this.pa, "drop", (0,z.OL)(this.gI));
};
z.g.fI = function(a) {
  a.UP = "copy";
};
z.g.dI = function(a) {
  (0,z.t)(a.currentTarget, "image-picker-dragover");
};
z.g.eI = function(a) {
  var b = (0,z.uf)((0,z.ti)(a.currentTarget));
  (a.x < b.left || a.clientX > b.right || a.y > b.bottom || a.clientY < b.top) && (0,z.u)(a.currentTarget, "image-picker-dragover");
};
z.g.gI = function(a) {
  (0,z.u)(a.currentTarget, "image-picker-dragover");
  a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files[0] && this.yc.start(a.dataTransfer.files[0]);
};
var NR = function(a) {
  var b = !1, c;
  return function() {
    b || (c = a(), b = !0);
    return c;
  };
}(function() {
  if (z.ld) {
    return(0,z.hd)("10.0");
  }
  var a = window.document.createElement("div"), b = (0,z.rf)();
  a.innerHTML = '\x3cdiv style\x3d"' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;"\x3e';
  return "" != (0,z.yf)(a.firstChild, "transition");
});
(0,z.p)(nR, z.v);
nR.prototype.C = function() {
  this.Eg && (this.Eg.cancel(), (0,z.u)(this.jk, this.Xq));
  this.Eg = null;
};
nR.prototype.PF = function() {
  (0,z.ci)(this.Av);
  this.Eg = this.Av = null;
};
nR.prototype.start = function() {
  this.Eg = (0,z.Bc)(new z.vc, this.PF, this);
  if (!NR()) {
    return this.Eg.Ca(), this.Eg;
  }
  this.Av = (0,z.Q)(this.tv, z.Qo, this.xu, this);
  this.vq ? ((0,z.t)(this.jk, this.vq), (0,z.ui)(this.jk), (0,z.Vc)(this.jk, this.vq, this.Xq)) : (0,z.t)(this.jk, this.Xq);
  return this.Eg;
};
nR.prototype.xu = function(a) {
  a.target == this.tv && ((0,z.u)(this.jk, this.Xq), this.Eg.Ca());
};
(0,z.p)(qR, z.Mj);
var rR = "pending-image";
qR.prototype.reset = function() {
  return this.ba.$a() ? this.set("has-image") : this.set("no-image", !0);
};
qR.prototype.set = function(a, b) {
  (0,z.Bc)(this.Ys, function() {
    if (this.wb != a) {
      var b = (0,z.Ic)();
      this.S("change", a, this.wb, b);
      return b;
    }
  }, this);
  b ? ((0,z.Vc)(this.pa, this.wb, a), this.wb = a) : (0,z.r)(this.Ys, function() {
    (0,z.Vc)(this.pa, this.wb, a);
    this.wb = a;
  }, this);
  return this.Ys.Bb();
};
qR.prototype.get = function() {
  return this.wb;
};
qR.prototype.de = function() {
  return this.wb === rR || "uploading-image" === this.wb;
};
(0,z.p)(sR, z.Oj);
sR.prototype.H = function() {
  sR.w.H.call(this);
  this.wb.D("change", this.WA, this);
  this.Na.D(z.OR, this.yy, this);
};
sR.prototype.ka = function() {
  sR.w.ka.call(this);
  this.wb.ya("change", this.WA, this);
  this.Na.ya(z.OR, this.yy, this);
};
sR.prototype.WA = function(a, b, c) {
  var d = z.Ml.ja(this.ba.yf);
  d && "full" == d.Id() && ("no-image" == a ? tR(this, c) : "no-image" == b ? uR(this, c) : "has-image" == b && "uploading-image" == a && (a = this.pa.querySelector(".picker-target-clone")) && this.wc.Fx(a, this.ba.kt));
};
sR.prototype.yy = function() {
  (0,z.Bc)(oR(pR(new nR(this.pa, "transition-picker-image")), this.pa.querySelector(".picker-target")).start(), function() {
    var a = this.pa.querySelector(".picker-target-clone");
    a && this.wc.Iw(a);
  }, this);
};
vR.prototype.reset = function() {
  this.pa && (this.pa.style.backgroundImage = "");
};
vR.prototype.show = function(a) {
  this.pa && (this.pa.style.backgroundImage = 'url("' + a + '")', this.pa.style.display = "block");
};
(0,z.p)(wR, z.Mj);
z.g = wR.prototype;
z.g.ma = null;
z.g.po = function() {
  this.abort();
  this.ma = this.xn.Tg(!this.yK);
  (0,z.s)((0,z.r)(this.ma, this.nA, this), this.Me, this);
};
z.g.start = function(a) {
  this.abort();
  a = this.xn.upload(a);
  this.ma = (0,z.Ic)(a);
  (0,z.s)((0,z.r)(this.ma, this.nA, this), this.Me, this);
};
z.g.abort = function() {
  for (var a = 0;a < this.Uk.length;a++) {
    (0,z.ad)(this.Uk[a]);
  }
  this.Uk.length = 0;
  this.ma && this.ma.cancel();
  this.ma = null;
};
z.g.C = function() {
  this.abort();
  wR.w.C.call(this);
};
z.g.next = function() {
  this.Xm();
};
z.g.Xm = function() {
  if (!this.Uk.length) {
    return null;
  }
  var a = this.Uk.shift();
  a.$q = this.$q;
  a.D("progress", this.iq, this);
  var b = a.start();
  this.S("start");
  a.getFile() && (0,z.r)((0,z.eI)(a), function(a) {
    this.S("preview", a);
  }, this);
  (0,z.Bc)((0,z.s)((0,z.r)(b, function(a) {
    this.S("success", a);
  }, this), this.Me, this), function() {
    a.ya("progress", this.iq, this);
  }, this);
  return b;
};
z.g.nA = function(a) {
  this.Uk = a;
  return this.Xm();
};
z.g.iq = function(a) {
  this.S("progress", a);
};
z.g.Me = function(a) {
  a && a instanceof z.Mc ? this.S("abort", "This operation was canceled by the user.") : this.S("error", a || Error("Unknown upload error"));
};
z.g = xR.prototype;
z.g.po = function() {
  this.yc.po();
};
z.g.start = function(a) {
  this.yc.start(a);
};
z.g.abort = function() {
  this.yc.abort();
};
z.g.jJ = function() {
  this.wb.set("uploading-image");
  this.Jk && (this.Jk.style.width = "0");
  this.Ik.reset();
  this.Na.S(z.PR);
};
z.g.iJ = function(a) {
  this.Jk && (this.Jk.style.width = Math.floor(100 * a) + "%");
};
z.g.fJ = function(a) {
  this.ba.Bf("");
  eR(this.ba, a.Th(), a.ql());
  var b = a.$a();
  this.Jk && (this.Jk.style.width = "100%");
  (0,z.r)(this.wc.Rd(b), function() {
    this.Na.S(z.OR, b);
  }, this);
};
z.g.gJ = function(a) {
  var b = a.Kw;
  this.U.error(413 == b ? (0,z.LJ)() : 415 == b ? (0,z.KJ)() : "An error occured while uploading an image. Please try again, if the problem persists, try converting to a different image format (for example JPEG).");
  this.Ik.reset();
  hR(this.wc);
  this.Na.S(z.QR, a);
};
z.g.eJ = function(a) {
  this.Ik.reset();
  hR(this.wc);
  this.Na.S(z.RR, a);
};
z.g.hJ = function(a) {
  this.Ik.show(a);
};
(0,z.p)(yR, z.Oj);
yR.prototype.H = function() {
  yR.w.H.call(this);
  (0,z.Gi)(this.pa).F("wash", this.aH, this);
};
yR.prototype.ka = function() {
  yR.w.ka.call(this);
  (0,z.Gi)(this.pa).clear("wash");
};
yR.prototype.aH = function(a) {
  this.Fs(a.value);
};
yR.prototype.Fs = function(a) {
  this.ba.Bf(a);
  kR(this.wc);
};
z.PR = "start";
z.OR = "complete";
z.QR = "error";
z.RR = "abort";
z.lR = "change";
(0,z.p)(z.zR, z.go);
z.g = z.zR.prototype;
z.g.focus = function() {
};
z.g.Do = function(a) {
  this.wc.Do(a);
};
z.g.ua = function() {
  return this.ba.ua();
};
z.g.de = function() {
  return this.wb.de();
};
z.g.H = function() {
  z.zR.w.H.call(this);
  (0,z.Gi)(this.pa).F("pick-image", this.yc.po, this.yc).F("cancel-upload", this.abort, this).F("remove-image", function() {
    this.wc.Rd("");
  }, this).F("toggle-background-size", this.wc.zN, this.wc);
  this.ba.$a() && gR(this.wc);
};
z.g.ka = function() {
  (0,z.Ji)(this.pa);
  this.abort();
  z.zR.w.ka.call(this);
};
z.g.reset = function() {
  return(0,z.r)(this.abort(), function() {
    hR(this.wc);
    this.yc.Ik.reset();
  }, this);
};
z.g.abort = function() {
  this.yc && this.yc.abort();
  return this.wb.reset();
};
z.g.LB = function(a, b) {
  return new z.cR(a, b);
};
z.g.Hv = z.WB;
z.g.as = z.fa;
(0,z.p)(z.AR, z.zR);
z.AR.prototype.MB = function(a, b, c, d, e) {
  return new CR(a, b, c, d, e);
};
z.AR.prototype.LB = function(a, b) {
  return new BR(a, b, this.uv);
};
(0,z.p)(BR, z.cR);
BR.prototype.Mr = function(a, b) {
  return(0,z.I)(this.uv ? z.Wj : z.fk, {image:dR(this, a), Xh:b});
};
(0,z.p)(CR, z.fR);
CR.prototype.oC = function() {
  return this.element.querySelector(".picker-target") || this.element;
};
CR.prototype.Fx = function(a, b) {
  a.style.backgroundImage = "url(" + b + ")";
};
CR.prototype.Iw = function(a) {
  a.style.backgroundImage = "";
};
})(_mdm);
