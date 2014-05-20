(function(z){
var PU = function(a) {
  return a.Nb.querySelector(".notes-container-scroller");
};
var QU = function(a, b, c) {
  return a.oe.put(z.gH.Q({postId:a.$, noteId:c, replyId:b}), {state:"HIDDEN"}, {na:!0});
};
var RU = function(a) {
  return "“" + (0,z.N)(a.content) + "” —@" + (0,z.N)(a.username) + " " + (0,z.N)(a.url);
};
var SU = function(a, b, c, d, e, f) {
  z.HQ.call(this, a, b, c, d);
  this.cK = (0,z.Un)(a.get("screen"));
  this.Mm = f;
  this.Zq = a.get("twitter");
  this.Ba = a.get("dom-monitor");
  this.Ba.D("resize-end", this.Ek, this);
  this.Ba.D("inner-resize-end", this.Ek, this);
  b.get("isPublished");
  this.Xa = a.get("popover");
  this.nu = this.Lk = this.Pz = null;
  (0,z.Gi)(this.Nb).F("hide-reply", this.pI, this).F("start-note", this.VI, this).F("show-note-permalink", this.UI, this);
  e.D("update", this.mA, this);
  e.D("highlight", this.Zz, this);
  e.D("twitter", this.Yz, this);
  this.bb = e;
  (0,z.dP)(this.anchors).forEach(function(a) {
    this.ob.push((0,z.Q)(a, "click", this.RI, this));
  }, this);
  this.ob.push((0,z.Q)(window.document.body, "click", this.SH, this, !0));
};
var TU = function(a) {
  if (a.qb) {
    var b = a.cK, c = b.scrollTop, d = b.scrollLeft;
    a.qb.focus();
    b.scrollTop = c;
    b.scrollLeft = d;
  }
};
var UU = function(a, b) {
  for (var c = b ? 1 : -1, d = a.parentNode.childNodes, e = d.length, f = (0,z.bb)(d, a), h = (0,z.fJ)((0,z.Pw)(a, 0)), f = f + c;0 <= f && f < e;f += c) {
    var k = d[f];
    if ("SECTION" === k.tagName) {
      var l = (0,z.fJ)((0,z.Pw)(k, 0));
      if (h || l) {
        return k;
      }
    }
  }
  return null;
};
var VU = function(a) {
  var b = a.data.va;
  if (b = b ? a.anchors.get(b) : null) {
    var c = (0,z.Dw)(b, (0,z.cP)(a.anchors, b)), d = null, e = null, b = (0,z.ti)(a.ij).top - (0,z.ti)(a.kx).top, f = c && (0,z.fJ)((0,z.Pw)(c, 0));
    c && (f ? (d = b + c.offsetTop - 40, e = c.offsetHeight + 80) : (d = b + -40 - 20, (f = UU(c, !1)) && (d = b + f.offsetTop + f.offsetHeight), f = b + c.offsetParent.offsetTop + c.offsetParent.offsetHeight + 40, (c = UU(c, !0)) && (f = b + c.offsetTop), e = f - d));
    a.Nb.style.top = d + "px";
    a.Nb.style.height = e + "px";
    (0,z.Ew)(a.ij, function(a) {
      var b = (0,z.fP)(a, this.kx), c = b + a.offsetHeight;
      (0,z.Tc)(a, "grid-breaking-slide", b < d + e && c > d);
    }, a);
  }
};
var WU = function(a, b) {
  (0,z.WQ)(a, b.Md);
  XU(a, {scroll:!0, ng:!0});
  (0,z.aR)(a, b);
  a.qb && TU(a);
};
var YU = function(a, b) {
  (0,z.r)((0,z.XQ)(a, b), function() {
    (0,z.UQ)(this) || ((0,z.aR)(this, b), this.qb && TU(this));
    ZU(this, {scroll:!0, ng:!0});
    (0,z.li)(this.fg, 0, (0,z.oi)(this.Gc.ld[b]) - 100);
  }, a);
};
var $U = function(a, b, c) {
  var d = a.anchors.get(a.data.va);
  if (!a.isAuthenticated) {
    var e = a.data.va;
    a.pe && (e += "--highlight-" + a.pe.startIndex + "-" + a.pe.endIndex);
    a.tb.querySelector(".notes-add").setAttribute("data-redirect", (0,z.Py)() + "#" + e);
  }
  if (d) {
    e = d.querySelector(".notes-highlight");
    d = c.ng && e ? e : d;
    if (a.data.va) {
      var f = (0,z.ti)(d).top, e = PU(a), h = (0,z.ti)(e).top, f = Math.round(f - h - 20);
      b && (f -= b.offsetTop - ((0,window.parseInt)(a.tb.style.marginTop, 10) || 0));
      40 > f ? (a.tb.style.top = "40px", a.eD.style.height = Math.round(Math.max(a.tb.offsetHeight, PU(a).offsetHeight) + 80 - f) + "px", (0,z.li)(e, 0, Math.round(-f + 40))) : (a.tb.style.top = Math.round(f) + "px", a.eD.style.height = Math.round(f + a.tb.offsetHeight + 40) + "px", (0,z.li)(e, 0, 0));
    }
    c.scroll && (500 >= window.innerWidth ? b.scrollIntoView(!0) : (0,z.JL)(d));
  }
};
var XU = function(a, b) {
  var c = a.tb.querySelector(".notes-new-note, .notes-add-sign-in");
  c && $U(a, c, b);
};
var aV = function(a, b, c) {
  b = a.tb.querySelector('[data-note-id\x3d"' + b + '"]');
  $U(a, b, c);
};
var ZU = function(a, b) {
  if (a.data.va) {
    var c = (0,z.uQ)(a.data, a.data.va), d = c.count();
    (c = d ? (0,z.pk)((0,z.tk)(c, 0), "id") : null) ? (1 == d && (0,z.ZQ)(a, c), b.ng = !1, aV(a, c, b)) : XU(a, b);
  }
};
var bV = function(a, b) {
  return b == a.data.va ? (0,z.r)((0,z.XQ)(a, null), z.VB) : (0,z.r)((0,z.XQ)(a, b), (0,z.Sb)(!!b));
};
var cV = function(a, b, c) {
  var d = (0,z.Zd)(b.target, null, "notes-note");
  !d || b.relatedTarget && (0,z.Ud)(d, b.relatedTarget) || !(b = a.data.Pb(d.getAttribute("data-note-id"), a.data.va)) || (d = null, c ? d = (0,z.pk)(b, "highlightId") : a.Qe && (d = (0,z.pk)(a.data.Pb(a.Qe, a.data.va), "highlightId")), (0,z.WQ)(a, d ? a.data.Bp[d] || null : null, a.Ow));
};
var dV = function(a) {
  z.v.call(this);
  this.ca = a;
};
(0,z.p)(SU, z.HQ);
z.g = SU.prototype;
z.g.ii = 3;
z.g.wg = !1;
z.g.bb = null;
z.g.ax = function() {
  var a = (0,z.ej)();
  this.Kn = null;
  this.wg = !0;
  var b = (0,z.$Q)();
  this.Zj();
  this.isAuthenticated && (0,z.Tc)(this.tb, "notes-is-creator", this.data.Ag.userId === this.currentUser.userId);
  (0,z.cM)(this.J(".notes-post-creator"), this.data.Ag.name);
  this.lr(b);
  this.ob.push((0,z.Q)(this.Nb, "mouseover", this.XH, this));
  this.ob.push((0,z.Q)(this.Nb, "mouseout", this.WH, this));
  this.ob.push((0,z.Q)(this.tb, "click", this.UH, this));
  this.ob.push((0,z.Q)(this.ij, z.Qo, this.xu, this));
  (0,z.Pk)("notes.renderMarkers", (0,z.ej)() - a);
};
z.g.lr = function(a) {
  if (a.anchor && this.Gc.ld[a.anchor]) {
    if (YU(this, a.anchor), a.Md) {
      (0,z.ZQ)(this, a.Md.id, !0), aV(this, a.Md.id, {scroll:!0, ng:!0}), "reply" == a.HB && (0,z.VQ)(this);
    } else {
      if ("highlight" == a.HB) {
        var b = this.anchors.get(a.anchor), c = a.Md.startIndex, d = a.Md.endIndex, e = (0,z.dO)(b, c, b, d);
        e && (a = new z.AQ(e, b, new z.ZO({anchor:a.anchor, startIndex:c, endIndex:d, content:e.qc()})), WU(this, a));
      }
    }
  }
};
z.g.lo = function(a) {
  SU.w.lo.call(this, a);
  this.qb.clear();
  (0,z.ZQ)(this, a.id);
  (0,z.t)(this.tb, "notes-hide-editor");
};
z.g.fx = function() {
  var a = this.screen.N;
  (0,z.On)(function() {
    var b = a.querySelector(".js-upvoters-item-current-user");
    if (b) {
      var c = b.offsetParent, d = this.Xa.createElement("top", (0,z.I)(z.pQ), "popover-notes-vote");
      c.appendChild(d);
      var e = a.querySelector(".notes-vote-editor"), f = (0,z.JQ)(this, e);
      f.D("change", function() {
        var b = d.querySelector('button[data-action\x3d"cancel-notes-vote"]');
        if (b) {
          var c = this.$e.ci();
          this.Lk = this.Lk || a.querySelector(".recommend-button");
          this.Lk.setAttribute("data-action", c ? "unvote" : "save-notes-vote");
          b.innerHTML = c ? "No thanks" : "Cancel";
        }
      }, this);
      c = c.getBoundingClientRect();
      e = b.getBoundingClientRect();
      d.style.left = -(d.offsetWidth / 2) + b.offsetLeft + e.width / 2 + "px";
      d.style.bottom = c.height - b.offsetTop + "px";
      (0,z.ui)(d);
      (0,z.t)(d, "fade");
      this.Pz = d;
      this.nu = (0,z.Q)(window.document.body, "click", function(a) {
        (0,z.Ud)(d, a.target) || f.ci() && this.Ej();
      }, this);
    }
  }, this);
};
z.g.Ej = function() {
  this.Lk && "save-notes-vote" == this.Lk.getAttribute("data-action") && this.Lk.setAttribute("data-action", "unvote");
  (0,z.Od)(this.Pz);
  this.nu && (0,z.ci)(this.nu);
  this.$e && this.$e.Ob();
};
z.g.fC = function() {
  var a = {scroll:!0, ng:!0};
  if (this.qb) {
    XU(this, a), TU(this);
  } else {
    var b;
    a: {
      b = this.Xb;
      for (var c in b) {
        b = b[c];
        break a;
      }
      b = void 0;
    }
    if (c = b && b.Qa()) {
      (0,z.ZQ)(this, c), aV(this, c, a), b.focus();
    }
  }
};
z.g.An = function() {
  VU(this);
  (0,z.gP)(this.anchors, this.Nb, this.anchors.get(this.data.va));
  SU.w.An.call(this);
  VU(this);
};
z.g.Ph = function() {
  VU(this);
};
z.g.ex = function(a) {
  (0,z.r)(bV(this, a.value), function(a) {
    a && ((0,z.UQ)(this) || ((a = this.getSelection()) && a.Md.anchor == this.data.va ? ((0,z.WQ)(this, a.Md), (0,z.aR)(this, a)) : (0,z.aR)(this, this.data.va), this.qb && TU(this)), ZU(this, {scroll:!0, ng:!0}));
  }, this);
};
z.g.dx = function(a) {
  (0,z.vQ)(this.Gc, (0,z.pk)(a, "anchor"));
  (0,z.pk)(a, "id") == this.Qe && (0,z.WQ)(this, null);
};
z.g.Ex = function(a) {
  (0,z.u)((0,z.Zd)(a.target, null, "notes-replies"), "notes-replies-hidden");
  this.Ph();
};
z.g.RI = function(a) {
  if (!this.Mm && "A" != a.target.tagName && (z.cD || this.data.va)) {
    var b = this.getSelection();
    if (!b || b.kr != this.data.va) {
      if (this.data.va && 1E3 >= window.innerWidth) {
        return(0,z.XQ)(this, null);
      }
      a = (0,z.eP)(this.anchors, a.target);
      (0,z.r)(bV(this, a), function(a) {
        a && ((0,z.UQ)(this) || ((0,z.aR)(this, this.data.va), this.qb && TU(this)), ZU(this, {scroll:!0, ng:!0}));
      }, this);
    }
  }
};
z.g.Ek = function() {
  this.Zj();
};
z.g.SH = function(a) {
  if (this.data.va) {
    var b = a.target;
    (0,z.$d)(b, z.xi) || (b = (0,z.ki)(b, function(a) {
      return a == this.tb || a == this.Gc.Oi || a == this.bb.aa() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action");
    }.bind(this)), window.document.body === b && (1400 >= window.innerWidth && (a.stopPropagation(), a.preventDefault()), (0,z.XQ)(this, null)));
  }
};
z.g.UI = function(a) {
  (0,z.Ms)(this.$k, a.value);
};
z.g.XH = function(a) {
  cV(this, a, !0);
};
z.g.WH = function(a) {
  cV(this, a, !1);
};
z.g.mA = function() {
  if (!this.Mm) {
    var a = (0,z.ZH)();
    if (!a || a.isCollapsed()) {
      (0,z.iI)(this.bb);
    } else {
      var b = (0,z.cP)(this.anchors, (0,z.zI)(a)), c;
      if (c = b) {
        c = (0,z.zI)(a), c = (0,z.ki)(c, z.sJ, b);
      }
      c ? (0,z.hI)(this.bb, (0,z.KL)(a)) : (0,z.iI)(this.bb);
    }
  }
};
z.g.Zz = function() {
  (0,z.iI)(this.bb);
  var a = this.getSelection();
  a && WU(this, a);
  return!1;
};
z.g.Yz = function() {
  (0,z.iI)(this.bb);
  var a = (0,z.ZH)();
  if (!a || a.isCollapsed()) {
    return!1;
  }
  var b = this.Zq, c = a.qc(), a = this.postId, c = {content:c, username:this.data.Ag.username, url:(0,z.Oy)().toString()}, c = (0,z.pA)(RU, c);
  b.lq(c);
  (0,z.Hk)(z.wD, {postId:a, type:"highlight", dest:"twitter"});
  return!1;
};
z.g.pI = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  (0,z.s)((0,z.r)(QU(this.data, c, b), function() {
    for (var a = this.data.Pb(b, this.data.va), e = a.get("replies"), f = 0;f < e.length;f++) {
      if (e[f].replyId == c) {
        a.removeItem("replies", f);
        break;
      }
    }
    (0,z.MQ)(this, z.MD, this.data.Pb(b, this.data.va), {replyId:c});
    this.lj.H("The reply has been dismissed", "success");
  }, this), (0,z.Aq)(this.el, "Sorry, we couldn’t hide the reply. Please try again later and make sure you are logged in."));
};
z.g.UH = function(a) {
  a = a.target;
  var b = (0,z.Zd)(a, null, "notes-note");
  if (b) {
    var c = b.getAttribute("data-note-id");
    c == this.Qe ? (0,z.ki)(a, function(a) {
      return!!a.getAttribute("data-action") || (0,z.Pc)(a, "editable");
    }, b, !0) == b && (0,z.ZQ)(this, null) : ((0,z.ZQ)(this, c), aV(this, c, {scroll:!0, ng:!0}));
  }
};
z.g.VI = function() {
  var a = this.getSelection();
  (0,z.ZQ)(this, null);
  a && (0,z.WQ)(this, a.Md);
  (0,z.aR)(this, a || this.data.va);
  this.qb && (a && XU(this, {scroll:!0, ng:!0}), TU(this));
};
z.g.xu = function(a) {
  (a = a.target.getAttribute("name")) && (0,z.aP)(this.anchors, a) && (0,z.rQ)(this.Gc, a, a == this.data.va);
};
z.g.Zj = function() {
  if (this.wg) {
    if (this.mf) {
      return(0,z.mj)(Error("UpdatePositions called after dispose"));
    }
    SU.w.Zj.call(this);
    this.Ph();
    var a = {scroll:!1, ng:!0};
    this.Qe ? aV(this, this.Qe, a) : ZU(this, a);
  }
};
z.g.AM = function() {
  if (this.data.va) {
    var a = this.anchors.get(this.data.va);
    if (!a) {
      (0,z.XQ)(this, null);
    } else {
      if (!this.Mm) {
        var b = (0,z.ZH)();
        b && (b = (0,z.zI)(b), (0,z.Ud)(a, b) || (0,z.XQ)(this, null));
      }
    }
  }
};
z.g.C = function() {
  this.Ba.ya("resize-end", this.Ek, this);
  this.Ba.ya("inner-resize-end", this.Ek, this);
  this.bb.ya("update", this.mA, this);
  this.bb.ya("highlight", this.Zz, this);
  this.bb.ya("twitter", this.Yz, this);
  SU.w.C.call(this);
};
(0,z.p)(dV, z.v);
dV.prototype.cl = function(a, b, c, d, e, f) {
  return new SU(a.La(), b, c, d, e, f);
};
var eV = z.$q;
eV.La().scope("app").add("notes", dV);
(0,z.kI)(eV, "notes");
})(_mdm);
