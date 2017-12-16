if (!window['YT']) { var YT = { loading: 0, loaded: 0 }; } if (!window['YTConfig']) { var YTConfig = { 'host': 'http://www.youtube.com' }; } if (!YT.loading) { YT.loading = 1; (function () { var l = []; YT.ready = function (f) { if (YT.loaded) { f(); } else { l.push(f); } }; window.onYTReady = function () { YT.loaded = 1; for (var i = 0; i < l.length; i++) { try { l[i](); } catch (e) { } } }; YT.setConfig = function (c) { for (var k in c) { if (c.hasOwnProperty(k)) { YTConfig[k] = c[k]; } } }; var a = document.createElement('script'); a.type = 'text/javascript'; a.id = 'www-widgetapi-script'; a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflktVMi7/www-widgetapi.js'; a.async = true; var b = document.getElementsByTagName('script')[0]; b.parentNode.insertBefore(a, b); })(); }

function wowsliderVideo(a, b, c) { function p(a) { return d("iframe", j[a]) } function q(a) { var b = p(a); return b = b[0] ? b[0].src : "", /youtube/.test(b) ? "youtube" : /vimeo/.test(b) ? "vimeo" : !1 } function r(a) { e.removeClass("ws_vimeo ws_youtube").addClass("ws_" + q(a)), f && f.addClass("ws_hide") } function s(a) { e.removeClass("ws_vimeo ws_youtube"), a && f && f.removeClass("ws_hide") } function t(b, c) { var d = p(b); m = !1, a[0].wsRestart(), d[0] && l[b] ? (a.removeClass(/MSIE|Trident/.test(navigator.userAgent) ? "ws_video_playing_ie" : "ws_video_playing"), h.show(), i && i.show(), g.fadeIn(300), r(b), "youtube" == q(b) && l[b].getPlayerState && 1 == l[b].getPlayerState() ? l[b].pauseVideo() : "vimeo" == q(b) && l[b].api("paused", function (a) { a || l[b].api("pause") }), c && s(1), d.css("opacity") > 0 ? d.animate({ opacity: 0 }, 500, c ? c : 0) : c && c()) : c && c() } function u(d, e, f) { var j = p(d); j[0] && (e || j.attr("data-autoplay-video") || b.autoPlayVideo) ? (m = q(d), a.addClass(/MSIE|Trident/.test(navigator.userAgent) ? "ws_video_playing_ie" : "ws_video_playing"), k.css("opacity", 1), a[0].wsStop(), g.fadeOut(300), c(), h.hide(), i && i.hide(), s(), "youtube" == m && l[d] && l[d].playVideo ? l[d].playVideo() : "vimeo" == m && l[d] && l[d].api("play"), j.css("opacity") < 1 ? j.css("zIndex", 1).animate({ opacity: 1 }, 500, f ? f : 0) : f && f()) : f && f() } function v(c, d) { (d.attr("data-autoplay-video") || b.autoPlayVideo) && (m = "youtube", a[0].wsStop()), l[c] = new YT.Player(d[0], { events: { onStateChange: function (a) { 1 == a.data || 3 == a.data ? u(c, 1) : 2 != a.data && 0 != a.data || "youtube" != m || t(c) }, onReady: function () { d.css.zIndex = 1, u(c) } } }) } function w(c, d) { (d.attr("data-autoplay-video") || b.autoPlayVideo) && (m = "vimeo", a[0].wsStop()), l[c] = $f(d[0]), l[c].addEvent("ready", function () { d.css.zIndex = 1, l[c].addEvent("play", function () { u(c, 1) }), l[c].addEvent("pause", function () { "vimeo" == m && t(c) }), l[c].addEvent("finish", function () { "vimeo" == m && t(c) }), u(c) }) } var m, n, o, d = jQuery, e = d(".ws_video_btn", a), f = d(".ws_playpause", a), g = d(".ws-title-wrapper", a), h = d(".ws_frame", a), i = d(".ws_cover", a), j = d("ul li", a), k = d(".ws_list", a), l = {}, x = function (a) { var b = p(a); if (m) { m = !1; for (var c in l) c != a && t(c) } b[0] ? (r(a), l[a] ? u(a) : n && "youtube" == q(a) ? v(a, b) : o && "vimeo" == q(a) && w(a, b)) : s(!0) }; this.start = x, this.check = q, this.pause = t, this.play = u, this.playing = function () { return m }, this.vimeo = function (a) { o = a }, this.youtube = function (a) { n = a } } jQuery.fn.wowSlider = function (a) { function i(a) { return h.css({ left: -a + "00%" }) } function m(a) { return ((a || 0) + l) % l } function y(b) { if (window["ws_" + b]) { var c = new window["ws_" + b](a, v, f); c.name = "ws_" + b, x.push(c) } } function G(a, b) { C ? C.pause(a.curIndex, b) : b() } function H(a, b) { C ? C.play(a, 0, b) : b() } function I(a, b, c) { E || (isNaN(a) && (a = s(A, l)), a = m(a), A != a && (j ? j.load(a, function () { L(a, b, c) }) : L(a, b, c))) } function J(a) { for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a.charCodeAt(c) ^ 1 + (a.length - c) % 7); return b } function L(d, e, f) { if (!E) { if (e) void 0 != f && (D = f ^ a.revers), i(d); else { if (E) return; F = !1, function (d, e, f) { K = Math.floor(Math.random() * x.length), b(x[K]).trigger("effectStart", { curIndex: d, nextIndex: e, cont: b("." + x[K].name, c), start: function () { D = void 0 != f ? f ^ a.revers : !!(e > d) ^ a.revers ? 1 : 0, x[K].go(e, d, D) } }) }(A, d, f), c.trigger(b.Event("go", { index: d })) } A = d, A != a.stopOn || --a.loop || (a.autoPlay = 0), a.onStep && a.onStep(d) } } function M() { c.find(".ws_effect").fadeOut(200), i(A).fadeIn(200).find("img").css({ visibility: "visible" }) } function N(a, b, c, d, e, f) { new O(a, b, c, d, e, f) } function O(d, e, f, g, h, i) { var j, k, l, m, n = 0, o = 0, p = 0; d[0] || (d = b(d)), d.on((e ? "mousedown " : "") + "touchstart", function (b) { var d = b.originalEvent.touches ? b.originalEvent.touches[0] : b; 2 == a.gestures && c.addClass("ws_grabbing"), n = 0, d ? (j = d.pageX, k = d.pageY, o = p = 1, g && (o = p = g(b))) : o = p = 0, b.originalEvent.touches || (b.preventDefault(), b.stopPropagation()) }), b(document).on((e ? "mousemove " : "") + "touchmove", d, function (a) { if (o) { var b = a.originalEvent.touches ? a.originalEvent.touches[0] : a; n = 1, l = b.pageX - j, m = b.pageY - k, f && f(a, l, m) } }), b(document).on((e ? "mouseup " : "") + "touchend", d, function (b) { 2 == a.gestures && c.removeClass("ws_grabbing"), o && (n && h && h(b, l, m), !n && i && i(b), n && (b.preventDefault(), b.stopPropagation()), n = 0, o = 0) }), d.on("click", function (a) { p && (a.preventDefault(), a.stopPropagation()), p = 0 }) } function $(c, d, e) { if (Y.length && yb(c), Z.length && xb(c), a.controlsThumb && a.controls && sb(c), a.caption && Eb(c, d, e), u) { var f = b("A", k.get(c)).get(0); f ? (u.setAttribute("href", f.href), u.setAttribute("target", f.target), u.style.display = "block") : u.style.display = "none" } a.responsive && Tb() } function ab() { _ && (_ = 0, setTimeout(function () { c.trigger(b.Event("stop", {})) }, a.duration)) } function bb() { !_ && a.autoPlay && (_ = 1, c.trigger(b.Event("start", {}))) } function cb() { gb(), ab() } function fb() { gb(), a.autoPlay ? (db = setTimeout(function () { eb || I(void 0, void 0, 1) }, a.delay), bb()) : ab() } function gb() { db && clearTimeout(db), db = null } function hb(a, b, c) { gb(), a && a.preventDefault(), I(b, void 0, c), fb(), Gb && Fb && Fb.play() } function sb(c) { var d = a.controlsThumb, e = d[c + 1] || d[0], f = d[(c || d.length) - 1]; ob.attr("src", e), pb.css("transition", "none"), qb.attr("src", f), rb.css("transition", "none"), wowAnimate(b.merge(pb, rb), { opacity: 1 }, { opacity: 0 }, 400, function () { pb.attr({ src: e, style: "" }), rb.attr({ src: f, style: "" }) }) } function wb() { function d(a) { if (!h) { clearTimeout(g); for (var c = .2, d = 0; d < 2; d++) { if (d) var i = e.find("> a"), j = vb ? e.width() : b(i.get(0)).outerWidth(!0) * i.length; else var j = e.height(); var k = Z[d ? "width" : "height"](), l = k - j; if (l < 0) { var m, n, o = (a[d ? "pageX" : "pageY"] - Z.offset()[d ? "left" : "top"]) / k; if (f == o) return; f = o; var p = e.position()[d ? "left" : "top"]; if (e.css({ transition: "0ms linear", transform: "translate3d(" + p.left + "px," + p.top + "px,0)" }), e.stop(!0), tb > 0) { if (o > c && o < 1 - c) return; m = o < .5 ? 0 : l - 1, n = tb * Math.abs(p - m) / (Math.abs(o - .5) - c) } else m = l * Math.min(Math.max((o - c) / (1 - 2 * c), 0), 1), n = -tb * j / 2; e.animate(d ? { left: m } : { top: m }, n, tb > 0 ? "linear" : "easeOutCubic") } else e.css(d ? "left" : "top", l / 2) } } } function v(a) { a < 0 && (a = 0), j && j.loadTtip(a), b(q.get(u)).removeClass("ws_overbull"), b(q.get(a)).addClass("ws_overbull"), s.show(); var c = { left: q.get(a).offsetLeft - s.width() / 2, "margin-top": q.get(a).offsetTop - q.get(0).offsetTop + "px", "margin-bottom": -q.get(a).offsetTop + q.get(q.length - 1).offsetTop + "px" }, d = r.get(a), e = { left: -d.offsetLeft + (b(d).outerWidth(!0) - b(d).outerWidth()) / 2 }; u < 0 ? (s.css(c), t.css(e)) : (document.all || (c.opacity = 1), s.stop().animate(c, "fast"), t.stop().animate(e, "fast")), u = a } if (c.find(".ws_bullets a,.ws_thumbs a").click(function (a) { hb(a, b(this).index()) }), Z.length) { Z.hover(function () { ub = 1 }, function () { ub = 0 }); var e = Z.find(">div"); Z.css({ overflow: "hidden" }); var f, g, h; if (vb = Z.width() < c.width(), Z.bind("mousemove mouseover", d), Z.mouseout(function () { g = setTimeout(function () { e.stop() }, 100) }), Z.trigger("mousemove"), a.gestures) { var i, k, l, m, n, o; N(Z, 2 == a.gestures, function (a, b, c) { if (l > n || m > o) return !1; if (vb) { var d = Math.min(Math.max(k + c, m - o), 0); e.css("top", d) } else { var f = Math.min(Math.max(i + b, l - n), 0); e.css("left", f) } }, function () { h = 1; var c = e.find("> a"); return l = Z.width(), m = Z.height(), n = b(c.get(0)).outerWidth(!0) * c.length, o = e.height(), i = parseFloat(e.css("left")) || 0, k = parseFloat(e.css("top")) || 0, !0 }, function () { h = 0 }, function () { h = 0 }) } c.find(".ws_thumbs a").each(function (a, c) { N(c, 0, 0, function (a) { return !!b(a.target).parents(".ws_thumbs").get(0) }, function () { h = 1 }, function (a) { hb(a, b(c).index()) }) }) } if (Y.length) { var p = Y.find(">div"), q = b("a", Y), r = q.find("IMG"); if (r.length) { var s = b('<div class="ws_bulframe"/>').appendTo(p), t = b("<div/>").css({ width: r.length + 1 + "00%" }).appendTo(b("<div/>").appendTo(s)); r.appendTo(t), b("<span/>").appendTo(s); var u = -1; q.hover(function () { v(b(this).index()) }); var w; p.hover(function () { w && (clearTimeout(w), w = 0), v(u) }, function () { q.removeClass("ws_overbull"), document.all ? w || (w = setTimeout(function () { s.hide(), w = 0 }, 400)) : s.stop().animate({ opacity: 0 }, { duration: "fast", complete: function () { s.hide() } }) }), p.click(function (a) { hb(a, b(a.target).index()) }) } } } function xb(a) { b("A", Z).each(function (c) { if (c == a) { var d = b(this); if (d.addClass("ws_selthumb"), !ub) { var g, e = Z.find(">div"), f = d.position() || {}; g = e.position() || {}; for (var h = 0; h <= 1; h++) { if (h) var i = e.find("> a"), j = vb ? e.width() : b(i.get(0)).outerWidth(!0) * i.length; else var j = e.height(); var k = Z[h ? "width" : "height"](), l = k - j; l < 0 ? e.stop(!0).animate(h ? { left: -Math.max(Math.min(f.left, -g.left), f.left + d.outerWidth(!0) - Z.width()) } : { top: -Math.max(Math.min(f.top, 0), f.top + d.outerHeight(!0) - Z.height()) }) : e.css(h ? "left" : "top", l / 2) } } } else b(this).removeClass("ws_selthumb") }) } function yb(a) { b("A", Y).each(function (c) { c == a ? b(this).addClass("ws_selbull") : b(this).removeClass("ws_selbull") }) } function Db(a) { var c = k[a], d = b("img", c).attr("title"), e = b(c).data("descr"); return d.replace(/\s+/g, "") || (d = ""), (d ? "<span>" + d + "</span>" : "") + (e ? "<br><div>" + e + "</div>" : "") } function Eb(d, e, f) { var g = Db(d), h = Db(e), i = a.captionEffect; (Cb[b.type(i)] || Cb[i] || Cb.none)(b.extend({ $this: c, curIdx: A, prevIdx: B, noDelay: f }, a), zb, Ab, g, h, D) } function Lb() { a.autoPlay = !a.autoPlay, a.autoPlay ? (fb(), Kb.removeClass("ws_play"), Kb.addClass("ws_pause"), C && C.start(A)) : (d.wsStop(), Kb.removeClass("ws_pause"), Kb.addClass("ws_play")) } function Qb() { return !!document[Pb.fullscreenElement] } function Sb(a) { /WOW Slider/g.test(e) || (a.preventDefault(), Qb() ? (document[Pb.exitFullscreen](), "undefined" !== typeof Ob && Ob.disable()) : (Rb = 1, c.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][Pb.requestFullscreen](), "undefined" !== typeof Ob && Ob.enable())) } function Tb() { var d = Nb ? 4 : a.responsive, e = f.width() || a.width, g = b([v, p.find("img"), q.find("img")]); if (d > 0 && document.addEventListener && c.css("fontSize", Math.max(10 * Math.min(e / a.width || 1, 1), 4)), 2 == d) { var h = Math.max(e / a.width, 1) - 1; g.each(function () { b(this).css("marginTop", -a.height * h / 2) }) } if (3 == d) { var i = window.innerHeight - (c.offset().top || 0), j = a.width / a.height, k = j > e / i; c.css("height", i), g.each(function () { b(this).css({ width: k ? "auto" : "100%", height: k ? "100%" : "auto", marginLeft: k ? (e - i * j) / 2 : 0, marginTop: k ? 0 : (i - e / j) / 2 }) }) } if (4 == d) { var l = window.innerWidth, m = window.innerHeight, j = (c.width() || a.width) / (c.height() || a.height); c.css({ maxWidth: j > l / m ? "100%" : j * m, height: "" }), g.each(function () { b(this).css({ width: "100%", marginLeft: 0, marginTop: 0 }) }) } else c.css({ maxWidth: "", top: "" }) } var b = jQuery, c = this, d = c.get(0); window.ws_basic = function (a, c, d) { var e = b(this); this.go = function (b) { d.find(".ws_list").css("transform", "translate3d(0,0,0)").stop(!0).animate({ left: b ? -b + "00%" : /Safari/.test(navigator.userAgent) ? "0%" : 0 }, a.duration, "easeInOutExpo", function () { e.trigger("effectEnd") }) } }, a = b.extend({ effect: "fade", prev: "", next: "", duration: 1e3, delay: 2e3, captionDuration: 1e3, captionEffect: "none", width: 960, height: 360, thumbRate: 1, gestures: 2, caption: !0, controls: !0, controlsThumb: !1, keyboardControl: !1, scrollControl: !1, autoPlay: !0, autoPlayVideo: !1, responsive: 1, support: jQuery.fn.wowSlider.support, stopOnHover: 0, preventCopy: 1 }, a); var e = navigator.userAgent, f = b(".ws_images", c).css("overflow", "visible"), g = b("<div>").appendTo(f).css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }), h = f.find("ul").css("width", "100%").wrap("<div class='ws_list'></div>").parent().appendTo(g); b("<div>").css({ position: "relative", width: "100%", "font-size": 0, "line-height": 0, "max-height": "100%", overflow: "hidden" }).append(f.find("li:first img:first").clone().css({ width: "100%", visibility: "hidden" })).prependTo(f), h.css({ position: "absolute", top: 0, height: "100%", transform: /Firefox/.test(e) ? "" : "translate3d(0,0,0)" }); var j = a.images && new wowsliderPreloader(this, a), k = f.find("li"), l = k.length, o = (h.width() / h.find("li").width(), { position: "absolute", top: 0, height: "100%", overflow: "hidden" }), p = b("<div>").addClass("ws_swipe_left").css(o).prependTo(h), q = b("<div>").addClass("ws_swipe_right").css(o).appendTo(h); if (/MSIE/.test(e) || /Trident/.test(e) || /Safari/.test(e) || /Firefox/.test(e)) { var r = Math.pow(10, Math.ceil(Math.LOG10E * Math.log(l))); h.css({ width: r + "00%" }), k.css({ width: 100 / r + "%" }), p.css({ width: 100 / r + "%", left: -100 / r + "%" }), q.css({ width: 100 / r + "%", left: 100 * l / r + "%" }) } else h.css({ width: l + "00%", display: "table" }), k.css({ display: "table-cell", "float": "none", width: "auto" }), p.css({ width: 100 / l + "%", left: -100 / l + "%" }), q.css({ width: 100 / l + "%", left: "100%" }); var s = a.onBeforeStep || function (a) { return a + 1 }; a.startSlide = m(isNaN(a.startSlide) ? s(-1, l) : a.startSlide), j && j.load(a.startSlide, function () { }), i(a.startSlide); var t, u; a.preventCopy && (t = b('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", "z-index": 10, background: "#FFF", opacity: 0 }).appendTo(f), u = t.find("A").get(0)); { var v = []; b(".ws_frame", c) } k.each(function () { for (var c = b(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first", this), d = b("<div></div>"), e = 0; e < this.childNodes.length;) this.childNodes[e] != c.get(0) && this.childNodes[e] != c.get(1) ? d.append(this.childNodes[e]) : e++; b(this).data("descr") || (d.text().replace(/\s+/g, "") ? b(this).data("descr", d.html().replace(/^\s+|\s+$/g, "")) : b(this).data("descr", "")), b(this).data("type", c[0].tagName); b(">iframe", this).css("opacity", 0); v[v.length] = b(">a>img", this).get(0) || b(">iframe+img", this).get(0) || b(">*", this).get(0) }), v = b(v), v.css("visibility", "visible"), p.append(b(v[l - 1]).clone()), q.append(b(v[0]).clone()); var x = []; a.effect = a.effect.replace(/\s+/g, "").split(","); for (var z in a.effect) y(a.effect[z]); x.length || y("basic"); var A = a.startSlide, B = A, C = !1, D = 1, E = 0, F = !1; b(x).bind("effectStart", function (a, c) { E++, G(c, function () { M(), c.cont && b(c.cont).stop().show().css("opacity", 1), c.start && c.start(), B = A, A = c.nextIndex, $(A, B, c.captionNoDelay) }) }), b(x).bind("effectEnd", function (a, b) { i(A).stop(!0, !0).show(), setTimeout(function () { H(A, function () { E--, fb(), C && C.start(A) }) }, b ? b.delay || 0 : 0) }), a.loop = a.loop || Number.MAX_VALUE, a.stopOn = m(a.stopOn); var K = Math.floor(Math.random() * x.length); 2 == a.gestures && c.addClass("ws_gestures"); var P = f, Q = "!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9"; if (Q && (Q = J(Q))) { if (a.gestures) { var U, V, W, X, S = 0, T = 10; N(f, 2 == a.gestures, function (b, c) { X = !!x[0].step, gb(), h.stop(!0, !0), W && (F = !0, E++, W = 0, X || M()), S = c, c > U && (c = U), c < -U && (c = -U), X ? x[0].step(A, c / U) : a.support.transform && a.support.transition ? h.css("transform", "translate3d(" + c + "px,0,0)") : h.css("left", V + c) }, function (a) { var c = /ws_playpause|ws_prev|ws_next|ws_bullets/g.test(a.target.className) || b(a.target).parents(".ws_bullets").get(0), d = ib ? a.target == ib[0] : 0; return c || d || C && C.playing() ? !1 : (W = 1, U = f.width(), V = parseFloat(-A * U) || 0, Gb && Fb && Fb.play(), !0) }, function (c, d) { W = 0; var i = f.width(), k = m(A + (d < 0 ? 1 : -1)), l = i * d / Math.abs(d); Math.abs(S) < T && (k = A, l = 0); var n = 200 + 200 * (i - Math.abs(d)) / i; E--, b(x[0]).trigger("effectStart", { curIndex: A, nextIndex: k, cont: X ? b(".ws_effect") : 0, captionNoDelay: !0, start: function () { function c() { a.support.transform && a.support.transition && h.css({ transition: "0ms", transform: /Firefox/.test(e) ? "" : "translate3d(0,0,0)" }), b(x[0]).trigger("effectEnd", { swipe: !0 }) } function f() { X ? d > i || d < -i ? b(x[0]).trigger("effectEnd") : wowAnimate(function (a) { var b = d + (i * (d > 0 ? 1 : -1) - d) * a; x[0].step(B, b / i) }, 0, 1, n, function () { b(x[0]).trigger("effectEnd") }) : a.support.transform && a.support.transition ? (h.css({ transition: n + "ms ease-out", transform: "translate3d(" + l + "px,0,0)" }), setTimeout(c, n)) : h.animate({ left: V + l }, n, c) } F = !0, j ? j.load(k, f) : f() } }) }, function () { var a = b("A", k.get(A)); a && a.click() }) } var db, Y = c.find(".ws_bullets"), Z = c.find(".ws_thumbs"), _ = a.autoPlay, eb = !1, ib = J('8B"iucc9!jusv?+,unpuimggs)eji!"'); ib += J("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9"); var jb = P || document.body; if (Q.length < 4 && (Q = Q.replace(/^\s+|\s+$/g, "")), P = Q ? b("<div>") : 0, b(P).css({ position: "absolute", padding: "0 0 0 0" }).appendTo(jb), P && document.all) { var kb = b("<iframe>"); kb.css({ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", filter: "alpha(opacity=0)", opacity: .01 }), kb.attr({ src: "javascript:false", scrolling: "no", framespacing: 0, border: 0, frameBorder: "no" }), P.append(kb) } b(P).css({ zIndex: 56, right: "15px", bottom: "15px" }).appendTo(jb), ib += J("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<"), ib = P ? b(ib) : P; var lb = b('<div class="ws_controls">').appendTo(f); if (Y[0] && Y.appendTo(lb), a.controls) { var mb = b('<a href="#" class="ws_next"><span>' + a.next + "<i></i><b></b></span></a>"), nb = b('<a href="#" class="ws_prev"><span>' + a.prev + "<i></i><b></b></span></a>"); if (lb.append(mb, nb), mb.bind("click", function (a) { hb(a, A + 1, 1) }), nb.bind("click", function (a) { hb(a, A - 1, 0) }), /iPhone/.test(navigator.platform) && (nb.get(0).addEventListener("touchend", function (a) { hb(a, A - 1, 1) }, !1), mb.get(0).addEventListener("touchend", function (a) { hb(a, A + 1, 0) }, !1)), a.controlsThumb) var ob = b('<img alt="" src="">').appendTo(mb), pb = b('<img alt="" src="">').appendTo(mb), qb = b('<img alt="" src="">').appendTo(nb), rb = b('<img alt="" src="">').appendTo(nb) } var ub, vb, tb = a.thumbRate; if (a.caption) { var zb = b("<div class='ws-title' style='display:none'></div>"), Ab = b("<div class='ws-title' style='display:none'></div>"); b("<div class='ws-title-wrapper'>").append(zb, Ab).appendTo(f), zb.bind("mouseover", function () { C && C.playing() || gb() }), zb.bind("mouseout", function () { C && C.playing() || fb() }) } var Bb, Cb = { none: function (a, b, c, d) { Bb && clearTimeout(Bb), Bb = setTimeout(function () { b.html(d).show() }, a.noDelay ? 0 : a.duration / 2) } }; Cb[a.captionEffect] || (Cb[a.captionEffect] = window["ws_caption_" + a.captionEffect]), (Y.length || Z.length) && wb(), $(A, B, !0), a.stopOnHover && (this.bind("mouseover", function () { C && C.playing() || gb(), eb = !0 }), this.bind("mouseout", function () { C && C.playing() || fb(), eb = !1 })), C && C.playing() || fb(); var Fb = c.find("audio").get(0), Gb = a.autoPlay; if (Fb) { if (b(Fb).insertAfter(c), window.Audio && Fb.canPlayType && Fb.canPlayType("audio/mp3")) Fb.loop = "loop", a.autoPlay && (Fb.autoplay = "autoplay", setTimeout(function () { Fb.play() }, 100)); else { Fb = Fb.src; var Hb = Fb.substring(0, Fb.length - /[^\\\/]+$/.exec(Fb)[0].length), Ib = "wsSound" + Math.round(9999 * Math.random()); b("<div>").appendTo(c).get(0).id = Ib; var Jb = "wsSL" + Math.round(9999 * Math.random()); window[Jb] = { onInit: function () { } }, swfobject.createSWF({ data: Hb + "player_mp3_js.swf", width: "1", height: "1" }, { allowScriptAccess: "always", loop: !0, FlashVars: "listener=" + Jb + "&loop=1&autoplay=" + (a.autoPlay ? 1 : 0) + "&mp3=" + Fb }, Ib), Fb = 0 } c.bind("stop", function () { Gb = !1, Fb ? Fb.pause() : b(Ib).SetVariable("method:pause", "") }), c.bind("start", function () { Fb ? Fb.play() : b(Ib).SetVariable("method:play", "") }) } d.wsStart = I, d.wsRestart = fb, d.wsStop = cb; var Kb = b('<a href="#" class="ws_playpause"><span><i></i><b></b></span></a>'); if (a.playPause && (Kb.addClass(a.autoPlay ? "ws_pause" : "ws_play"), Kb.click(function () { return Lb(), !1 }), lb.append(Kb)), a.keyboardControl && b(document).on("keyup", function (a) { switch (a.which) { case 32: Lb(); break; case 37: hb(a, A - 1, 0); break; case 39: hb(a, A + 1, 1) } }), a.scrollControl && c.on("DOMMouseScroll mousewheel", function (a) { a.originalEvent.wheelDelta < 0 || a.originalEvent.detail > 0 ? hb(null, A + 1, 1) : hb(null, A - 1, 0) }), "function" == typeof wowsliderVideo) { var Mb = b('<div class="ws_video_btn"><div></div></div>').appendTo(f); C = new wowsliderVideo(c, a, M), "undefined" != typeof $f && (C.vimeo(!0), C.start(A)), window.onYouTubeIframeAPIReady = function () { C.youtube(!0), C.start(A) }, Mb.on("click touchend", function () { E || C.play(A, 1) }) } var Nb = 0; if (a.fullScreen) { if ("undefined" !== typeof NoSleep) var Ob = new NoSleep; var Pb = function () { for (var c, d, a = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenchange"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitfullscreenchange"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitfullscreenchange"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozfullscreenchange"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "MSFullscreenChange"]], b = {}, e = 0, f = a.length; e < f; e++) if (c = a[e], c && c[1] in document) { for (e = 0, d = c.length; e < d; e++) b[a[0][e]] = c[e]; return b } return !1 }(); if (Pb) { var Rb = 0; document.addEventListener(Pb.fullscreenchange, function () { Qb() ? (Nb = 1, Tb()) : (Rb && (Rb = 0, c.unwrap()), Nb = 0, Tb()), x[0].step || M() }), b("<a href='#' class='ws_fullscreen'></a>").on("click", Sb).appendTo(f) } } return a.responsive && (b(Tb), b(window).on("load resize", Tb)), this } }, jQuery.extend(jQuery.easing, { easeInOutExpo: function (a, b, c, d, e) { return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c }, easeOutCirc: function (a, b, c, d, e) { return d * Math.sqrt(1 - (b = b / e - 1) * b) + c }, easeOutCubic: function (a, b, c, d, e) { return d * ((b = b / e - 1) * b * b + 1) + c }, easeOutElastic1: function (a, b, c, d, e) { var f = Math.PI / 2, g = 1.70158, h = 0, i = d; if (0 == b) return c; if (1 == (b /= e)) return c + d; if (h || (h = .3 * e), i < Math.abs(d)) { i = d; var g = h / 4 } else var g = h / f * Math.asin(d / i); return i * Math.pow(2, -10 * b) * Math.sin((b * e - g) * f / h) + d + c }, easeOutBack: function (a, b, c, d, e, f) { return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c } }), jQuery.fn.wowSlider.support = { transform: function () { if (!window.getComputedStyle) return !1; var a = document.createElement("div"); document.body.insertBefore(a, document.body.lastChild), a.style.transform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"; var b = window.getComputedStyle(a).getPropertyValue("transform"); return a.parentNode.removeChild(a), void 0 !== b ? "none" !== b : !1 }(), perspective: function () { for (var a = "perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" "), b = 0; b < a.length; b++) if (void 0 !== document.body.style[a[b]]) return !!a[b]; return !1 }(), transition: function () { var a = document.body || document.documentElement, b = a.style; return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition }() }, function (a) { function b(b, c, d, e, f, g, h) { function j(a) { function d(b) { cancelAnimationFrame(b), a(1), h && h() } var b = (new Date).getTime() + f, c = function () { var f = (new Date).getTime() - b; f < 0 && (f = 0); var g = e ? f / e : 1; g < 1 ? (a(g), requestAnimationFrame(c)) : d(1) }; return c(), { stop: d } } function k(a, b, c) { return a + (b - a) * c } function l(b, c) { return "linear" == c ? b : "swing" == c ? a.easing[c] ? a.easing[c](b) : b : a.easing[c] ? a.easing[c](1, b, 0, 1, 1, 1) : b } function n(a, b, c, d) { if ("object" === typeof b) { var e = {}; for (var f in b) e[f] = n(a, b[f], c[f], d); return e } var g = ["px", "%", "in", "cm", "mm", "pt", "pc", "em", "ex", "ch", "rem", "vh", "vw", "vmin", "vmax", "deg", "rad", "grad", "turn"], h = ""; return "string" === typeof b ? h = b : "string" === typeof c && (h = c), h = function (a, b, c) { for (var d in b) if (a.indexOf(b[d]) > -1) return b[d]; return m[c] ? m[c] : "" }(h, g, a), b = parseFloat(b), c = parseFloat(c), k(b, c, d) + h } if ("undefined" !== typeof b) { b.jquery || "function" === typeof b || (c = b.from, d = b.to, e = b.duration, f = b.delay, g = b.easing, h = b.callback, b = b.each || b.obj); var i = "num"; if (b.jquery && (i = "obj"), "undefined" !== typeof b && "undefined" !== typeof c && "undefined" !== typeof d) { "function" === typeof f && (h = f, f = 0), "function" === typeof g && (h = g, g = 0), "string" === typeof f && (g = f, f = 0), e = e || 0, f = f || 0, g = g || 0, h = h || 0; var m = { opacity: 0, top: "px", left: "px", right: "px", bottom: "px", width: "px", height: "px", translate: "px", rotate: "deg", rotateX: "deg", rotateY: "deg", scale: 0 }, o = j(function (a) { if (a = l(a, g), "num" === i) { var e = k(c, d, a); b(e) } else { var e = { transform: "" }; for (var f in c) if ("undefined" !== typeof m[f]) { var h = n(f, c[f], d[f], a); switch (f) { case "translate": e.transform += " translate3d(" + h[0] + "," + h[1] + "," + h[2] + ")"; break; case "rotate": e.transform += " rotate(" + h + ")"; break; case "rotateX": e.transform += " rotateX(" + h + ")"; break; case "rotateY": e.transform += " rotateY(" + h + ")"; break; case "scale": e.transform += "object" === typeof h ? " scale(" + h[0] + ", " + h[1] + ")" : " scale(" + h + ")"; break; default: e[f] = h } } "" === e.transform && delete e.transform, b.css(e) } }); return o } } } window.wowAnimate = b }(jQuery), Date.now || (Date.now = function () { return (new Date).getTime() }), function () { for (var a = ["webkit", "moz"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) { var c = a[b]; window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"] } if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) { var d = 0; window.requestAnimationFrame = function (a) { var b = Date.now(), c = Math.max(d + 16, b); return setTimeout(function () { a(d = c) }, c - b) }, window.cancelAnimationFrame = clearTimeout } }(), function (a) { function d(a, b, c) { var d = document.createElement("source"); d.src = c, d.type = "video/" + b, a.appendChild(d) } var b = { Android: /Android/gi.test(navigator.userAgent), iOS: /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent) }, c = { WebM: "data:video/webm;base64,GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA=", MP4: "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAABsW1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAA+gAAAAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAVxtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEcc3RibAAAALhzdHNkAAAAAAAAAAEAAACobXA0dgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAAFJlc2RzAAAAAANEAAEABDwgEQAAAAADDUAAAAAABS0AAAGwAQAAAbWJEwAAAQAAAAEgAMSNiB9FAEQBFGMAAAGyTGF2YzUyLjg3LjQGAQIAAAAYc3R0cwAAAAAAAAABAAAAAQAAAAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAAEwAAAAEAAAAUc3RjbwAAAAAAAAABAAAALAAAAGB1ZHRhAAAAWG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAK2lsc3QAAAAjqXRvbwAAABtkYXRhAAAAAQAAAABMYXZmNTIuNzguMw==" }, e = function () { return b.iOS ? this.noSleepTimer = null : b.Android && (this.noSleepVideo = document.createElement("video"), this.noSleepVideo.setAttribute("loop", ""), d(this.noSleepVideo, "webm", c.WebM), d(this.noSleepVideo, "mp4", c.MP4)), this }; e.prototype.enable = function (a) { b.iOS ? (this.disable(), this.noSleepTimer = window.setInterval(function () { window.location = window.location, window.setTimeout(window.stop, 0) }, a || 15e3)) : b.Android && this.noSleepVideo.play() }, e.prototype.disable = function () { b.iOS ? this.noSleepTimer && (window.clearInterval(this.noSleepTimer), this.noSleepTimer = null) : b.Android && this.noSleepVideo.pause() }, a.NoSleep = e }(this);

function ws_brick(a,b,c){function B(c){for(var d={},e=b.get(c),h=a.width/f,i=a.height/g,j=0;j<f*g;j++){var c=j%f,k=Math.floor(j/f);d[j]=G(e,{x:c*h,y:k*i,w:h,h:i})}return d}function C(a,b,c,d,e){for(var f in b)"function"!==typeof l[f]&&(b[f].topEdge.css({width:d,height:a,background:c[f],transform:"rotateX(90deg) translate3d(0,-"+a/2+"px,"+a/2+"px)"}),b[f].bottomEdge.css({width:d,height:a,background:c[f],transform:"rotateX(90deg) translate3d(0,-"+a/2+"px,"+(-e+a/2)+"px)"}),b[f].leftEdge.css({width:a,height:e,background:c[f],transform:"rotateY(90deg) translate3d("+a/2+"px,0,-"+a/2+"px)"}),b[f].rightEdge.css({width:a,height:e,background:c[f],transform:"rotateY(90deg) translate3d("+a/2+"px,0,"+(d-a/2)+"px)"}))}function D(a,b){var c=0;for(var e in a)"function"!==typeof a[e]&&!function(a,e){wowAnimate(function(b){var c,f,g,h="",i={};b<=.5?(c=d.easing.easeInBack(1,2*b,0,1,1,1).toFixed(3),f=d.easing.easeInBackQ(1,2*b,0,1,1,1).toFixed(3),g=d.easing.easeInBackQ2(1,2*b,0,1,1,1).toFixed(3),e[a].back.css("backfaceVisibility","hidden")):(c=d.easing.easeOutBack(1,2*(b-.5),0,1,1,1).toFixed(3),f=d.easing.easeOutBackQ(1,2*(b-.5),0,1,1,1).toFixed(3),g=d.easing.easeOutBackQ2(1,2*(b-.5),0,1,1,1).toFixed(3),e[a].back.css("backfaceVisibility","visible"));for(var j in e[a].animate[b<=.5?"half":"end"]){var k=e[a].animate[b<=.5?"begin":"half"][j]||0,l=e[a].animate[b<=.5?"half":"end"][j]||0;"object"!==typeof l&&(l="scale"===j||"rotateX"===j||"rotateY"===j?k+(l-k)*f:"left"===j||"top"===j?k+(l-k)*g:k+(l-k)*c),"rotateX"===j||"rotateY"===j||"rotateZ"===j?h+=j+"("+l+"deg) ":"scale"===j?h+=j+"("+l+") ":"translate3d"===j?h+=j+"("+(k[0]+(l[0]-k[0])*c).toFixed(3)+"px,"+(k[1]+(l[1]-k[1])*c).toFixed(3)+"px,"+(k[2]+(l[2]-k[2])*c).toFixed(3)+"px) ":i[j]=l}e[a].wrapper.css({transform:"translate3d("+(i.left?i.left:0).toFixed(3)+"px,"+(i.top?i.top:0).toFixed(3)+"px,0)"}),delete i.left,delete i.top,h&&(i.transform=h),e[a].part.css(i)},0,1,e[a].animate.duration,e[a].animate.delay,function(){c++,c==e.length&&b&&b()})}(e,a)}function E(b,d,e,h){var i=c.width(),j=c.height(),k=i/f,l=j/g,p=.4*a.duration>1e3?1e3:.4*a.duration,r=.6*a.duration,t=[0,0];C(m,b,n[d],k,l),o.css({transformOrigin:i/2+"px "+j/2+"px 0",width:i,height:j});for(var u in b)if("function"!==typeof b[u]){var v=s[u].delay*p;t[1]<=v&&(t[0]=u,t[1]=v),b[u].part[0].ws_delay=[v,0]}b[t[0]].part[0].ws_delay[1]=1;for(var u in b)if("function"!==typeof b[u]){{var w=b[u];Math.floor(u/f)}w.animate={delay:w.part[0].ws_delay[0],duration:r,begin:{left:0,top:0,width:k,height:l,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,q?m:0]},half:{left:s[u].halfLeft*k,top:s[u].halfTop*l,scale:s[u].halfScale,rotateX:s[u].rotateX/2,rotateY:s[u].rotateY/2,translate3d:[0,0,(q?1:.5)*m]},end:{left:0,top:0,scale:1,rotateX:s[u].rotateX,rotateY:s[u].rotateY,translate3d:[0,0,m]}},w.front.find("img").css(e),w.back.css("backfaceVisibility","hidden").find("img").css(e),w.part.css({width:w.animate.begin.width,height:w.animate.begin.height,left:w.animate.begin.left,top:w.animate.begin.top})}D(b,h)}function G(a,b){b=b||{};{var e,c=1,d=b.exclude||[],f=document.createElement("canvas"),g=f.getContext("2d");f.width=a.naturalWidth,f.height=a.naturalHeight}g.drawImage(a,0,0,a.naturalWidth,a.naturalHeight);try{e=g.getImageData(b.x?b.x:0,b.y?b.y:0,b.w?b.w:a.width,b.h?b.h:a.height).data}catch(j){return console.log("error:unable to access image data: "+j),"#ccc"}for(var k=(b.w?b.w:a.width*b.h?b.h:a.height)||e.length,l={},m="",n=[],o={dominant:{name:"",count:0}},p=0;p<k;){if(n[0]=e[p],n[1]=e[p+1],n[2]=e[p+2],m=n.join(","),l[m]=m in l?l[m]+1:1,-1===d.indexOf(["rgb(",m,")"].join(""))){var q=l[m];q>o.dominant.count&&(o.dominant.name=m,o.dominant.count=q)}p+=4*c}return["rgb(",o.dominant.name,")"].join("")}var d=jQuery,e=d(this),f=a.cols||4,g=a.rows||3,h=2.5,i=2,j=a.perspective||2e3,k=c.find(".ws_list"),l=[],m=30,n={},o=d("<div>").addClass("ws_effect ws_brick").appendTo(c),p=a.support.transform&&a.support.transition&&a.support.perspective,q=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),r=/Firefox/.test(navigator.userAgent),s=[{zIndex:0,rotateX:360,rotateZ:-360,rotateY:180,halfScale:.5,halfLeft:.7,halfTop:.7,delay:.36},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:.5,halfLeft:.2,halfTop:.4,delay:.81},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:.5,halfLeft:-.2,halfTop:.4,delay:.45},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:.5,halfLeft:-.7,halfTop:.7,delay:.63},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:.5,halfLeft:.7,halfTop:0,delay:.54},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:180,halfScale:.5,halfLeft:.2,halfTop:0,delay:.38},{zIndex:2,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:.5,halfLeft:-.2,halfTop:0,delay:0},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:180,halfScale:.5,halfLeft:-.7,halfTop:0,delay:.72},{zIndex:0,rotateX:-360,rotateZ:360,rotateY:180,halfScale:.5,halfLeft:.7,halfTop:-.7,delay:1},{zIndex:1,rotateX:-360,rotateZ:360,rotateY:-180,halfScale:.5,halfLeft:.2,halfTop:-.4,delay:.7},{zIndex:1,rotateX:360,rotateZ:-360,rotateY:180,halfScale:.5,halfLeft:-.2,halfTop:-.4,delay:.57},{zIndex:0,rotateX:360,rotateZ:-360,rotateY:-180,halfScale:.5,halfLeft:-.7,halfTop:-.7,delay:.9}];o.css({position:"absolute",top:0,left:0,width:c.width(),height:c.height(),transform:"translate3d(0,0,0)",transformOrigin:a.width/2+"px "+a.height/2+"px 0",perspective:j}).hide();for(var t=0;t<f*g;t++){var u=t%f,v=Math.floor(t/f),w=d("<div>").css({position:"absolute",left:100*u/f+"%",top:100*v/g+"%",outline:"1px solid transparent",transformStyle:q||r?"flat":"preserve-3d",zIndex:s[t].zIndex,overflow:p?"visible":"hidden"}).appendTo(o),x=d("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(w),y=d("<div>").addClass("ws_front_image").appendTo(x),z=p?d("<div>").addClass("ws_back_image").appendTo(x):0;y.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(d("<img>").css({left:100*-u+"%",top:100*-v+"%",position:"absolute",outline:"1px solid transparent"})),p&&z.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,"+m+"px)"}).append(d("<img>").css({left:100*-u+"%",top:100*-v+"%",position:"absolute",outline:"1px solid transparent"}));var A={position:"absolute",outline:"1px solid transparent"};l[t]={part:x,front:y,back:z,wrapper:w,leftEdge:p?d("<div>").addClass("ws_left_edge").css(A).appendTo(x):0,rightEdge:p?d("<div>").addClass("ws_right_edge").css(A).appendTo(x):0,topEdge:p?d("<div>").addClass("ws_top_edge").css(A).appendTo(x):0,bottomEdge:p?d("<div>").addClass("ws_bottom_edge").css(A).appendTo(x):0}}var F;this.go=function(j,m){function s(a,b){return Math.random()*(b-a+1)+a}if(F)return m;o.show();var q=d(b.get(m));if(q={width:q.width(),height:q.height(),marginTop:parseFloat(q.css("marginTop")),marginLeft:parseFloat(q.css("marginLeft"))},p){l[0].front.find("img").on("load",function(){k.hide()});for(var r in l)"function"!==typeof l[r]&&(l[r].front.find("img").attr("src",b.get(m).src),l[r].back.find("img").attr("src",b.get(j).src));n[m]||(n[m]=B(m)),F=new E(l,m,q,function(){k.show(),e.trigger("effectEnd"),o.hide();for(var a in l)"function"!==typeof l[a]&&l[a].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"});F=0})}else{F=!0;var t=c.width(),u=c.height(),v=t/f,w=u/g;o.css({width:t,height:u});var z=0;for(var r in l){var A=r%f,C=Math.floor(r/f);l[r].front.find("img").attr("src",b.get(j).src).css(q);var D=a.duration*(1-Math.abs((i*h-A*C)/(2*g*f))),G=s(-1,1)>0?1:-1,H=s(-1,1)>0?1:-1;l[r].wrapper.css({width:v,height:w}),l[r].part.css({position:"absolute",top:G*w,left:H*v,opacity:0,width:v,height:w}).animate({top:0,left:0,opacity:1},D,function(){z++,z==g*f&&(k.stop(1,1),F=!1,e.trigger("effectEnd"))})}}}}function ws_domino(a,b,c){$=jQuery;var m,d=$(this),e=a.columns||5,f=a.rows||2,g=a.centerRow||2,h=a.centerColumn||2,i=$("<div>").addClass("ws_effect ws_domino").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(c),j=$("<div>").addClass("ws_zoom").appendTo(i),k=$("<div>").addClass("ws_parts").appendTo(i),l=c.find(".ws_list");this.go=function(c,n){function o(){k.find("img").stop(1,1),k.empty(),j.empty(),m=0}function x(a,b){return Math.random()*(b-a+1)+a}o();var p=$(b.get(n));p={width:p.width(),height:p.height(),marginTop:parseFloat(p.css("marginTop")),marginLeft:parseFloat(p.css("marginLeft"))};var q=$(b.get(n)).clone().appendTo(j).css({position:"absolute",top:0,left:0}).css(p),r=i.width(),s=i.height(),t=Math.floor(r/e),u=Math.floor(s/f),v=r-t*(e-1),w=s-u*(f-1);l.hide();for(var y=[],z=0;z<f;z++){y[z]=[];for(var A=0;A<e;A++){var B=a.duration*(1-Math.abs((g*h-z*A)/(2*f*e))),C=A<e-1?t:v,D=z<f-1?u:w;y[z][A]=$("<div>").css({width:C,height:D,position:"absolute",top:z*u,left:A*t,overflow:"hidden"});var E=x(z-2,z+2),F=x(A-2,A+2);y[z][A].appendTo(k);var G=$(b.get(c)).clone().appendTo(y[z][A]).css(p),H={top:-E*u,left:-F*t,opacity:0},I={top:-z*u,left:-A*t,opacity:1};a.support.transform&&a.support.transition&&(H.translate=[H.left,H.top,0],I.translate=[I.left,I.top,0],delete H.top,delete H.left,delete I.top,delete I.left),wowAnimate(G.css({position:"absolute"}),H,I,B,"easeInOutSine",function(){m++,m==f*e&&(o(),l.stop(1,1),d.trigger("effectEnd"))})}}wowAnimate(q,{scale:1},{scale:1.6},a.duration,.2*a.duration,"easeInOutSine")}}function ws_slices(a,b,c){function f(b,c,d,e,f,g){a.support.transform&&(c.top&&(c.translate=[0,c.top||0,0]),d.top&&(d.translate=[0,d.top||0,0]),delete c.top,delete d.top),wowAnimate(b,c,d,e,f,"swing",g)}var d=jQuery,e=d(this),g=function(a,c){var e=d.extend({},{effect:"random",slices:15,animSpeed:500,pauseTime:3e3,startSlide:0,container:null,onEffectEnd:0},c),g={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",stop:!1},h=d(a);h.data("wow:vars",g),/absolute|relative/.test(h.css("position"))||h.css("position","relative");var i=c.container||h,j=h.children();g.totalSlides=j.length,e.startSlide>0&&(e.startSlide>=g.totalSlides&&(e.startSlide=g.totalSlides-1),g.currentSlide=e.startSlide),g.currentImage=d(j[g.currentSlide]).is("img")?d(j[g.currentSlide]):d(j[g.currentSlide]).find("img:first"),d(j[g.currentSlide]).is("a")&&d(j[g.currentSlide]).css("display","block");for(var k=0;k<e.slices;k++){var l=Math.round(i.width()/e.slices),m=d('<div class="wow-slice"></div>').css({left:l*k+"px",overflow:"hidden",width:(k==e.slices-1?i.width()-l*k:l)+"px",position:"absolute"}).appendTo(i);d("<img>").css({position:"absolute",left:0,top:0,transform:"translate3d(0,0,0)"}).appendTo(m)}this.sliderRun=function(a,b){return g.busy?!1:(e.effect=b||e.effect,g.currentSlide=a-1,p(h,j,e,!1),!0)};var o=function(){e.onEffectEnd&&e.onEffectEnd(g.currentSlide),i.hide(),d(".wow-slice",i).css({transition:"",transform:""}),g.busy=0},p=function(a,c,e,g){var h=a.data("wow:vars");if((!h||h.stop)&&!g)return!1;h.busy=1,h.currentSlide++,h.currentSlide==h.totalSlides&&(h.currentSlide=0),h.currentSlide<0&&(h.currentSlide=h.totalSlides-1),h.currentImage=d(c[h.currentSlide]),h.currentImage.is("img")||(h.currentImage=h.currentImage.find("img:first"));var j=d(b[h.currentSlide]);if(j={width:j.width(),heiht:j.height(),marginTop:j.css("marginTop"),marginLeft:j.css("marginLeft")},d(".wow-slice",i).each(function(a){var b=d(this),c=d("img",b),f=Math.round(i.width()/e.slices);c.width(i.width()),c.attr("src",h.currentImage.attr("src")),c.css({left:-f*a+"px"}).css(j),b.css({height:"100%",opacity:0,left:f*a,width:a==e.slices-1?i.width()-f*a:f})}),i.show(),"random"==e.effect){var k=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDownRight","sliceUpDownLeft","fold","fade");h.randAnim=k[Math.floor(Math.random()*(k.length+1))],void 0==h.randAnim&&(h.randAnim="fade")}if(-1!=e.effect.indexOf(",")){var k=e.effect.split(",");h.randAnim=d.trim(k[Math.floor(Math.random()*k.length)])}if("sliceDown"==e.effect||"sliceDownRight"==e.effect||"sliceDownRight"==h.randAnim||"sliceDownLeft"==e.effect||"sliceDownLeft"==h.randAnim){var l=0,m=d(".wow-slice",i);("sliceDownLeft"==e.effect||"sliceDownLeft"==h.randAnim)&&(m=m._reverse()),m.each(function(a){f(d(this),{top:"-100%",opacity:0},{top:"0%",opacity:1},e.animSpeed,100+l,a==e.slices-1?o:0),l+=50})}else if("sliceUp"==e.effect||"sliceUpRight"==e.effect||"sliceUpRight"==h.randAnim||"sliceUpLeft"==e.effect||"sliceUpLeft"==h.randAnim){var l=0,m=d(".wow-slice",i);("sliceUpLeft"==e.effect||"sliceUpLeft"==h.randAnim)&&(m=m._reverse()),m.each(function(a){f(d(this),{top:"100%",opacity:0},{top:"0%",opacity:1},e.animSpeed,100+l,a==e.slices-1?o:0),l+=50})}else if("sliceUpDown"==e.effect||"sliceUpDownRight"==e.effect||"sliceUpDownRight"==h.randAnim||"sliceUpDownLeft"==e.effect||"sliceUpDownLeft"==h.randAnim){var l=0,m=d(".wow-slice",i);("sliceUpDownLeft"==e.effect||"sliceUpDownLeft"==h.randAnim)&&(m=m._reverse()),m.each(function(a){f(d(this),{top:(a%2?"-":"")+"100%",opacity:0},{top:"0%",opacity:1},e.animSpeed,100+l,a==e.slices-1?o:0),l+=50})}else if("fold"==e.effect||"fold"==h.randAnim){var l=0,m=d(".wow-slice",i),n=m.width();m.each(function(a){f(d(this),{width:0,opacity:0},{width:n,opacity:1},e.animSpeed,100+l,a==e.slices-1?o:0),l+=50})}else if("fade"==e.effect||"fade"==h.randAnim){var m=d(".wow-slice",i);d(".wow-slice",i).each(function(a){d(this).css("height","100%"),d(this).animate({opacity:"1.0"},2*e.animSpeed,a==e.slices-1?o:0)})}}};d.fn._reverse=[].reverse;var i=(d("li",c),d("ul",c)),j=d("<div>").addClass("ws_effect ws_slices").css({left:0,top:0,"z-index":8,overflow:"hidden",width:"100%",height:"100%",position:"absolute"}).appendTo(c),k=new g(i,{keyboardNav:!1,caption:0,effect:"sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDownRight,sliceUpDownLeft,sliceUpDownRight,sliceUpDownLeft,fold,fold,fold",animSpeed:a.duration,startSlide:a.startSlide,container:j,onEffectEnd:function(){e.trigger("effectEnd")}});this.go=function(b){k.sliderRun(b);a.fadeOut&&i.fadeOut(a.duration)}}function ws_blinds(a,b,c){for(var d=jQuery,e=d(this),f=a.parts||3,g=d(".ws_list",c),h=d("<div>").addClass("ws_effect ws_blinds").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,"z-index":8}).hide().appendTo(c),i=d("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(h),j=[],k=document.addEventListener,l=0;l<f;l++)j[l]=d("<div>").css({position:k?"relative":"absolute",display:k?"inline-block":"block",height:"100%",width:(100/f+.001).toFixed(3)+"%",border:"none",margin:0,overflow:"hidden",top:0,left:k?0:(100*l/f).toFixed(3)+"%"}).appendTo(h);this.go=function(c,f,k){void 0==k&&(k=f>c?1:0),h.find("img").stop(!0,!0),h.show();var l=d(b[f]),m={width:l.width()||a.width,height:l.height()||a.height},n=l.clone().css(m).appendTo(i);n.from={left:0},n.to={left:(k?-1:1)*n.width()*.5},a.support.transform&&(n.from={translate:[n.from.left,0,0]},n.to={translate:[n.to.left,0,0]}),g.hide(),wowAnimate(n,n.from,n.to,a.duration,.1*a.duration,"swing");for(var o=0;o<j.length;o++){var p=j[o],q=d(b[c]).clone().css({position:"absolute",top:0}).css(m).appendTo(p);q.from={left:(k?1:-1)*q.width()-p.position().left},q.to={left:-p.position().left},a.support.transform&&(q.from={translate:[q.from.left,0,0]},q.to={translate:[q.to.left,0,0]}),wowAnimate(q,q.from,q.to,a.duration/(j.length+1)*(k?j.length-o+1:o+2),"swing",!k&&o==j.length-1||k&&!o?function(){e.trigger("effectEnd"),h.hide().find("img").remove(),n.remove()}:!1)}}}jQuery.extend(jQuery.easing,{easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInBackQ:function(a,b,c,d,e){var g=(b/=e)*b;return c+d*g*(4*b*g-8*g+8*b-3)},easeOutBackQ:function(a,b,c,d,e){var g=(b/=e)*b;return c+d*(4*g*b*g-12*g*g+16*g*b-13*g+6*b)},easeInBackQ2:function(a,b,c,d,e){var g=(b/=e)*b;return c+d*g*(1.5*b*g-2.5*g+5*b-3)},easeOutBackQ2:function(a,b,c,d,e){var g=(b/=e)*b;return c+d*(1.5*g*b*g-5*g*g+10*g*b-12*g+6.5*b)}}),jQuery.extend(jQuery.easing,{easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c}});

/* Version: 1.5.9 Website: http://kenwheeler.github.io */
!function (a) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function (a) {
    "use strict"; var b = window.Slick || {}; b = function () { function c(c, d) { var f, e = this; e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function (a, b) { return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>" }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0) } var b = 0; return c }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) { var e = this; if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1; e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) { a(c).attr("data-slick-index", b) }), e.$slidesCache = e.$slides, e.reinit() }, b.prototype.animateHeight = function () { var a = this; if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) { var b = a.$slides.eq(a.currentSlide).outerHeight(!0); a.$list.animate({ height: b }, a.options.speed) } }, b.prototype.animateSlide = function (b, c) { var d = {}, e = this; e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function (a) { a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d)) }, complete: function () { c && c.call() } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () { e.disableTransition(), c.call() }, e.options.speed)) }, b.prototype.asNavFor = function (b) { var c = this, d = c.options.asNavFor; d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == typeof d && d.each(function () { var c = a(this).slick("getSlick"); c.unslicked || c.slideHandler(b, !0) }) }, b.prototype.applyTransition = function (a) { var b = this, c = {}; b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c) }, b.prototype.autoPlay = function () { var a = this; a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed)) }, b.prototype.autoPlayClear = function () { var a = this; a.autoPlayTimer && clearInterval(a.autoPlayTimer) }, b.prototype.autoPlayIterator = function () { var a = this; a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll) }, b.prototype.buildArrows = function () { var b = this; b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, b.prototype.buildDots = function () { var c, d, b = this; if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) { for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount() ; c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>"; d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false") } }, b.prototype.buildOut = function () { var b = this; b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) { a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "") }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable") }, b.prototype.buildRows = function () { var b, c, d, e, f, g, h, a = this; if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) { for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) { var i = document.createElement("div"); for (c = 0; c < a.options.rows; c++) { var j = document.createElement("div"); for (d = 0; d < a.options.slidesPerRow; d++) { var k = b * h + (c * a.options.slidesPerRow + d); g.get(k) && j.appendChild(g.get(k)) } i.appendChild(j) } e.appendChild(i) } a.$slider.html(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" }) } }, b.prototype.checkResponsive = function (b, c) { var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width(); if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) { f = null; for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e])); null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]) } }, b.prototype.changeSlide = function (b, c) { var f, g, h, d = this, e = a(b.target); switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) { case "previous": g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c); break; case "next": g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c); break; case "index": var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll; d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus"); break; default: return } }, b.prototype.checkNavigable = function (a) { var c, d, b = this; if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) { if (a < c[e]) { a = d; break } d = c[e] } return a }, b.prototype.cleanUpEvents = function () { var b = this; b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition) }, b.prototype.cleanUpRows = function () { var b, a = this; a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b)) }, b.prototype.clickHandler = function (a) { var b = this; b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault()) }, b.prototype.destroy = function (b) { var c = this; c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () { a(this).attr("style", a(this).data("originalStyling")) }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]) }, b.prototype.disableTransition = function (a) { var b = this, c = {}; c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c) }, b.prototype.fadeSlide = function (a, b) { var c = this; c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () { c.disableTransition(a), b.call() }, c.options.speed)) }, b.prototype.fadeSlideOut = function (a) { var b = this; b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 })) }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) { var b = this; null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit()) }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () { var a = this; return a.currentSlide }, b.prototype.getDotCount = function () { var a = this, b = 0, c = 0, d = 0; if (a.options.infinite === !0) for (; b < a.slideCount;)++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0) d = a.slideCount; else for (; b < a.slideCount;)++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; return d - 1 }, b.prototype.getLeft = function (a) { var c, d, f, b = this, e = 0; return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c }, b.prototype.getOption = b.prototype.slickGetOption = function (a) { var b = this; return b.options[a] }, b.prototype.getNavigableIndexes = function () { var e, a = this, b = 0, c = 0, d = []; for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount) ; e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; return d }, b.prototype.getSlick = function () { return this }, b.prototype.getSlideCount = function () { var c, d, e, b = this; return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) { return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0 }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) { var c = this; c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b) }, b.prototype.init = function (b) { var c = this; a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA() }, b.prototype.initArrowEvents = function () { var a = this; a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.on("click.slick", { message: "next" }, a.changeSlide)) }, b.prototype.initDotEvents = function () { var b = this; b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1)) }, b.prototype.initializeEvents = function () { var b = this; b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition) }, b.prototype.initUI = function () { var a = this; a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay() }, b.prototype.keyHandler = function (a) { var b = this; a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: "next" } })) }, b.prototype.lazyLoad = function () { function g(b) { a("img[data-lazy]", b).each(function () { var b = a(this), c = a(this).attr("data-lazy"), d = document.createElement("img"); d.onload = function () { b.animate({ opacity: 0 }, 100, function () { b.attr("src", c).animate({ opacity: 1 }, 200, function () { b.removeAttr("data-lazy").removeClass("slick-loading") }) }) }, d.src = c }) } var c, d, e, f, b = this; b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d)) }, b.prototype.loadSlider = function () { var a = this; a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad() }, b.prototype.next = b.prototype.slickNext = function () { var a = this; a.changeSlide({ data: { message: "next" } }) }, b.prototype.orientationChange = function () { var a = this; a.checkResponsive(), a.setPosition() }, b.prototype.pause = b.prototype.slickPause = function () { var a = this; a.autoPlayClear(), a.paused = !0 }, b.prototype.play = b.prototype.slickPlay = function () { var a = this; a.paused = !1, a.autoPlay() }, b.prototype.postSlide = function (a) { var b = this; b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA() }, b.prototype.prev = b.prototype.slickPrev = function () { var a = this; a.changeSlide({ data: { message: "previous" } }) }, b.prototype.preventDefault = function (a) { a.preventDefault() }, b.prototype.progressiveLazyLoad = function () { var c, d, b = this; c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () { d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition() }).error(function () { d.removeAttr("data-lazy"), b.progressiveLazyLoad() })) }, b.prototype.refresh = function (b) { var d, e, c = this; e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1) }, b.prototype.registerBreakpoints = function () { var c, d, e, b = this, f = b.options.responsive || null; if ("array" === a.type(f) && f.length) { b.respondTo = b.options.respondTo || "window"; for (c in f) if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) { for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--; b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings } b.breakpoints.sort(function (a, c) { return b.options.mobileFirst ? a - c : c - a }) } }, b.prototype.reinit = function () { var b = this; b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler() }, b.prototype.resize = function () { var b = this; a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () { b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition() }, 50)) }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) { var d = this; return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit()) }, b.prototype.setCSS = function (a) { var d, e, b = this, c = {}; b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c))) }, b.prototype.setDimensions = function () { var a = this; a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length))); var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width(); a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b) }, b.prototype.setFade = function () { var c, b = this; b.$slides.each(function (d, e) { c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 }) }, b.prototype.setHeight = function () { var a = this; if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) { var b = a.$slides.eq(a.currentSlide).outerHeight(!0); a.$list.css("height", b) } }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) { var f, g, e = this; if ("responsive" === b && "array" === a.type(c)) for (g in c) if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]]; else { for (f = e.options.responsive.length - 1; f >= 0;) e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--; e.options.responsive.push(c[g]) } else e.options[b] = c; d === !0 && (e.unload(), e.reinit()) }, b.prototype.setPosition = function () { var a = this; a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]) }, b.prototype.setProps = function () { var a = this, b = document.body.style; a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1 }, b.prototype.setSlideClasses = function (a) { var c, d, e, f, b = this; d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad() }, b.prototype.setupInfinite = function () { var c, d, e, b = this; if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) { for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned"); for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned"); b.$slideTrack.find(".slick-cloned").find("[id]").each(function () { a(this).attr("id", "") }) } }, b.prototype.setPaused = function (a) { var b = this; b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay()) }, b.prototype.selectHandler = function (b) { var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"), e = parseInt(d.attr("data-slick-index")); return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e) }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, h = null, i = this; return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () { i.postSlide(d) }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () { i.postSlide(e) })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () { i.postSlide(e) }) : i.postSlide(e))))
    }, b.prototype.startLoad = function () { var a = this; a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading") }, b.prototype.swipeDirection = function () { var a, b, c, d, e = this; return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical" }, b.prototype.swipeEnd = function (a) { var c, b = this; if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1; if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) { case "left": c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]); break; case "right": c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"]) } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {}) }, b.prototype.swipeHandler = function (a) { var b = this; if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) { case "start": b.swipeStart(a); break; case "move": b.swipeMove(a); break; case "end": b.swipeEnd(a) } }, b.prototype.swipeMove = function (a) { var d, e, f, g, h, b = this; return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0) }, b.prototype.swipeStart = function (a) { var c, b = this; return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0)) }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () { var a = this; null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit()) }, b.prototype.unload = function () { var b = this; a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, b.prototype.unslick = function (a) { var b = this; b.$slider.trigger("unslick", [b, a]), b.destroy() }, b.prototype.updateArrows = function () { var b, a = this; b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, b.prototype.updateDots = function () { var a = this; null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")) }, b.prototype.visibility = function () { var a = this; document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay()) }, b.prototype.initADA = function () { var b = this; b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) { a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c }) }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) { a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA() }, b.prototype.activateADA = function () { var a = this; a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, b.prototype.focusHandler = function () { var b = this; b.$slider.on("focus.slick blur.slick", "*", function (c) { c.stopImmediatePropagation(); var d = a(this); setTimeout(function () { b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay())) }, 0) }) }, a.fn.slick = function () { var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length; for (f = 0; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g; return a }
});

/* Filterizr {@link http://yiotis.net/filterizr}  @version 1.2.3 */

(function(global, $) {

    'use strict';

    //Make sure jQuery exists
    if (!$) throw new Error('Filterizr requires jQuery to work.');

    /**
    * Modified version of Jake Gordon's Bin Packing algorithm used for Filterizr's 'packed' layout
    * @see {@link https://github.com/jakesgordon/bin-packing}
    */
    var Packer = function(w) {
        this.init(w);
    };

    Packer.prototype = {
        init: function(w) {
            this.root = { x: 0, y: 0, w: w };
        },
        fit: function(blocks) {
            var n, node, block, len = blocks.length;
            var h = len > 0 ? blocks[0].h : 0;
            this.root.h = h;
            for (n = 0; n < len ; n++) {
                block = blocks[n];
                if ((node = this.findNode(this.root, block.w, block.h)))
                block.fit = this.splitNode(node, block.w, block.h);
                else
                block.fit = this.growDown(block.w, block.h);
            }
        },
        findNode: function(root, w, h) {
            if (root.used)
            return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
            else if ((w <= root.w) && (h <= root.h))
            return root;
            else
            return null;
        },
        splitNode: function(node, w, h) {
            node.used = true;
            node.down  = { x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
            node.right = { x: node.x + w, y: node.y,     w: node.w - w, h: h          };
            return node;
        },
        growDown: function(w, h) {
            var node;
            this.root = {
                used: true,
                x: 0,
                y: 0,
                w: this.root.w,
                h: this.root.h + h,
                down:  { x: 0, y: this.root.h, w: this.root.w, h: h },
                right: this.root
            };
            if ((node = this.findNode(this.root, w, h)))
            return this.splitNode(node, w, h);
            else
            return null;
        }
    };

    /**
    * Only Filterizr method extracted on jQuery.fn.
    * Instantiates a new Filterizr or calls any of the public Filterizr methods.
    * @return {jQuery} this - to facilitate jQuery method chaining.
    */
    $.fn.filterizr = function() {
        var self = this, args = arguments;
        //Create the Filterizr obj as an internal private property on the current object
        //to serve as a private namespace
        if (!self._fltr) {
            self._fltr = $.fn.filterizr.prototype.init(self.selector, (typeof args[0] === 'object' ? args[0] : undefined));
        }
        //Call all public Filterizr methods through the private Filterizr object
        if (typeof args[0] === 'string') {
            if (args[0].lastIndexOf('_') > -1) throw new Error('Filterizr error: You cannot call private methods');
            if (typeof self._fltr[args[0]] === 'function') {
                self._fltr[args[0]](args[1], args[2]);
            }
            else throw new Error('Filterizr error: There is no such function');
        }
        return self;
    };

    /**
    * Filterizr prototype
    */
    $.fn.filterizr.prototype = {

        /**
        * Filterizr constructor.
        * @param {string} [selector] - the selector of your container.
        * @param {Object} [options] - user options to override defaults.
        * @constructor
        */
        init: function(selector, options) {
            var self = $(selector).extend($.fn.filterizr.prototype);
            //Default options
            self.options = {
                animationDuration: 0.5,
                callbacks: {
                    onFilteringStart: function() { },
                    onFilteringEnd: function() { },
                    onShufflingStart: function() { },
                    onShufflingEnd: function() { },
                    onSortingStart: function() { },
                    onSortingEnd: function() { }
                },
                delay: 0,
                delayMode: 'progressive',
                easing: 'ease-out',
                filter: 'all',
                filterOutCss: {
                    'transform': 'scale(0.5)'
                },
                filterInCss: {
                    'transform': 'scale(1)'
                },
                layout: 'sameSize',
                selector: (typeof selector === 'string') ? selector : '.filtr-container',
                setupControls: true
            };
            //No arguments constructor
            if (arguments.length === 0) {
                selector = self.options.selector;
                options  = self.options;
            }
            //One argument constructor (only options)
            if (arguments.length === 1 && typeof arguments[0] === 'object') options = arguments[0];
            //If options argument provided, override defaults
            if (options) {
                self.setOptions(options);
            }
            self._lastCategory = 0; //Highest value in data-category of .filtr-items
            self._isAnimating  = false;
            self._isShuffling  = false;
            self._isSorting    = false;
            //.filtr-item collections
            self._mainArray   = self._getFiltrItems();
            self._subArrays   = self._makeSubarrays();
            self._activeArray = self._getCollectionByFilter(self.options.filter);
            //Used for multiple category filtering
            self._toggledCategories = { };
            //Used for search feature
            self._typedText = $('input[data-search]').val() || '';
            //Generate unique ID for resize events
            self._uID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
            //Set up Filterizr events
            self._setupEvents();
            //Set up standard Filterizr controls (for multiple Filterizrs in your scene, set to false)
            if (self.options.setupControls) self._setupControls();
            //Start Filterizr!
            self.filter(self.options.filter);
            return self;
        },

        /***********************************
        * Public methods
        ***********************************/
        /**
        * Filters the items
        * @param {number} targetFilter - the applied filter towards which items transition
        */
        filter: function(targetFilter) {
            var self   = this,
                target = self._getCollectionByFilter(targetFilter);

            self.options.filter = targetFilter;
            self.trigger('filteringStart');
            //Filter items
            self._handleFiltering(target);
            //Apply search filter on top if activated
            if (self._isSearchActivated()) self.search(self._typedText);
        },

        /**
        * Toggles filters on/off and renders the new collection
        * @param {number} toggledFilter - the filter to toggle
        */
        toggleFilter: function(toggledFilter) {
            var self   = this,
                target = [], i = 0;

            self.trigger('filteringStart');
            //Toggle the toggledFilter in the active categories
            //If undefined (in case of window resize) ignore
            if (toggledFilter) {
                if (!self._toggledCategories[toggledFilter])
                    self._toggledCategories[toggledFilter] = true;
                else
                    delete self._toggledCategories[toggledFilter];
            }

            //If a filter is toggled on then display only items belonging to that category
            if (self._multifilterModeOn()) {
                target = self._makeMultifilterArray();
                //Filter items
                self._handleFiltering(target);
                //Apply search filter on top if activated
                if (self._isSearchActivated()) self.search(self._typedText);
            }
            //If all filters toggled off then display unfiltered gallery
            else {
                //Filter items
                self.filter('all');
                //Apply search filter on top if activated
                if (self._isSearchActivated()) self.search(self._typedText);
            }
        },

        /**
        * Searches the contents of .filtr-item elements, filters them and renders the results
        * @param {string} text to search in contents of .filtr-item elements
        */
        search: function(text) {
            var self   = this,
                //get active category
                array  = self._multifilterModeOn() ?
                            self._makeMultifilterArray() :
                            self._getCollectionByFilter(self.options.filter),
                target = [], i = 0;

            if (self._isSearchActivated()) {
                for (i = 0; i < array.length; i++) {
                    //Check if the text typed in the textbox is contained in the .filtr-item element
                    //and add it to the target array
                    var containsText = array[i].text().toLowerCase().indexOf(text.toLowerCase()) > -1;
                    if (containsText) {
                        target.push(array[i]);
                    }
                }
            }
            //Show the results
            if (target.length > 0) {
                self._handleFiltering(target);
            }
            //If there are no results
            else {
                //and search is activated, show blank
                if (self._isSearchActivated()) {
                    for (i = 0; i < self._activeArray.length; i++) {
                        self._activeArray[i]._filterOut();
                    }
                }
                //if search is not activated display gallery with last applied filter
                else {
                    self._handleFiltering(array);
                }
            }
        },

        /**
        * Shuffles the active collection and rearranges it on screen
        */
        shuffle: function() {
            var self = this;

            //ShufflingStart callback
            self._isAnimating = true;
            self._isShuffling = true;
            self.trigger('shufflingStart');

            self._mainArray = self._fisherYatesShuffle(self._mainArray);
            self._subArrays = self._makeSubarrays();

            var target = self._multifilterModeOn() ?
                            self._makeMultifilterArray() :
                            self._getCollectionByFilter(self.options.filter);

            if (self._isSearchActivated())
                self.search(self._typedText);
            else
                self._placeItems(target);
        },

        /**
        * Sorts the active collection and rearranges it on screen.
        * @param {string} [attr] - attr based on which to sort (default: 'domIndex' / possible: 'domIndex', 'sortData', 'w', 'h').
        * @param {string} [sortOrder] - asc/desc (default: 'asc').
        */
        sort: function(attr, sortOrder) {
            var self  = this;
            //Set defaults
            attr 	  = attr      || 'domIndex';
            sortOrder = sortOrder || 'asc';

            //SortingStart callback
            self._isAnimating = true;
            self._isSorting   = true;
            self.trigger('sortingStart');

            //Register sort attr on all elements if it is a user-defined data-attribute
            var isUserAttr = attr !== 'domIndex' && attr !== 'sortData' && attr !== 'w' && attr!== 'h';
            if (isUserAttr) {
                for (var i = 0; i < self._mainArray.length; i++) {
                    self._mainArray[i][attr] = self._mainArray[i].data(attr);
                }
            }
            //Sort items
            self._mainArray.sort(self._comparator(attr, sortOrder));
            self._subArrays = self._makeSubarrays();
            //Place sorted collection to new positions
            var target = self._multifilterModeOn() ?
                            self._makeMultifilterArray() :
                            self._getCollectionByFilter(self.options.filter);

            if (self._isSearchActivated())
                self.search(self._typedText);
            else
                self._placeItems(target);
        },

        /**
        * Overrides the default options with the user-provided ones.
        * @param {object} options - the user-provided options to override defaults.
        */
        setOptions: function(options) {
            var self = this, i = 0;
            //Override options
            for (var prop in options) {
                self.options[prop] = options[prop];
            }
            //If the user tries to override animationDuration, easing, delay or delayMode
            if (self._mainArray && (options.animationDuration || options.delay || options.easing || options.delayMode)) {
                for (i = 0; i < self._mainArray.length; i++) {
                    self._mainArray[i].css('transition', 'all ' + self.options.animationDuration + 's ' +  self.options.easing + ' ' + self._mainArray[i]._calcDelay() + 'ms');
                }
            }
            //If the user tries to override a callback, make sure undefined callbacks are set to empty functions
            if (options.callbacks) {
                if (!options.callbacks.onFilteringStart)
                    self.options.callbacks.onFilteringStart = function() { };
                if (!options.callbacks.onFilteringEnd)
                    self.options.callbacks.onFilteringEnd = function() { };
                if (!options.callbacks.onShufflingStart)
                    self.options.callbacks.onShufflingStart = function() { };
                if (!options.callbacks.onShufflingEnd)
                    self.options.callbacks.onShufflingEnd = function() { };
                if (!options.callbacks.onSortingStart)
                    self.options.callbacks.onSortingStart = function() { };
                if (!options.callbacks.onSortingEnd)
                    self.options.callbacks.onSortingEnd = function() { };
            }
            //If the user has not defined a transform property in their CSS, add it
            //while overriding, including translates for movement
            if (!self.options.filterInCss.transform)  self.options.filterInCss.transform  = 'translate3d(0,0,0)';
            if (!self.options.filterOutCss.transform) self.options.filterOutCss.transform = 'translate3d(0,0,0)';
        },

        /***********************************
        * Private & helper methods
        ***********************************/
        /**
        * Finds all .filtr-item elements in the .filtr-container and sets them up before returning them in an array.
        * @return {Object[]}  all .filtr-item elements contained in Filterizr's container.
        * @private
        */
        _getFiltrItems: function() {
            var self       = this,
            filtrItems = $(self.find('.filtr-item')),
            itemsArray = [];

            $.each(filtrItems, function(i, e) {
                //Set item up as Filtr object & push to array
                var item = $(e).extend(FiltrItemProto)._init(i, self);
                itemsArray.push(item);
            });
            return itemsArray;
        },

        /**
        * Divide .filtr-item elements into sub-arrays based on data-category attribute.
        * @return {Object[Object[self._lastCategory]]} Array of arrays including items grouped by data-category.
        * @private
        */
        _makeSubarrays: function() {
            var self = this,
            subArrays = [];

            for (var i = 0; i < self._lastCategory; i++) subArrays.push([]);

            //Populate the sub-arrays
            for (i = 0; i < self._mainArray.length; i++) {
                //Multiple categories scenario
                if (typeof self._mainArray[i]._category === 'object') {
                    var length = self._mainArray[i]._category.length;
                    for (var x = 0; x < length; x++) {
                        subArrays[self._mainArray[i]._category[x] - 1].push(self._mainArray[i]);
                    }
                }
                //Single category
                else subArrays[self._mainArray[i]._category - 1].push(self._mainArray[i]);
            }
            return subArrays;
        },

        /**
        * Make a .filtr-item array based on the activated filters
        * @return {Object[]} array consisting of the .filtr-item elements belonging to active filters
        * @private
        */
        _makeMultifilterArray: function() {
            var self   = this,
                target = [], addedMap = {};

            for (var i = 0; i < self._mainArray.length; i++) {
                //If the item belongs to multiple categories
                var item = self._mainArray[i],
                    belongsToCategory = false,
                    isUnique = item.domIndex in addedMap === false;
                //Check if item belongs to categories whose filters are toggled on
                if (Array.isArray(item._category)) {
                    for (var x = 0; x < item._category.length; x++) {
                        if (item._category[x] in self._toggledCategories) {
                            belongsToCategory = true;
                            break;
                        }
                    }
                }
                else {
                    if (item._category in self._toggledCategories) belongsToCategory = true;
                }
                //If the item is not already visible and belongs to a category
                //of the toggled on filters push it to target collection
                if (isUnique && belongsToCategory) {
                    addedMap[item.domIndex] = true;
                    target.push(item);
                }
            }
            return target;
        },

        /**
        * Detect and set up preset controls.
        * @private
        */
        _setupControls: function() {
            var self = this;
            //Filter controls
            $('*[data-filter]').click(function() {
                var targetFilter = $(this).data('filter');
                //Exit case
                if (self.options.filter === targetFilter) return;
                self.filter(targetFilter);
            });
            //Multiple filter controls
            $('*[data-multifilter]').click(function() {
                var targetFilter = $(this).data('multifilter');
                if (targetFilter === 'all') {
                    self._toggledCategories = { };
                    self.filter('all');
                }
                else {
                    self.toggleFilter(targetFilter);
                }
            });
            //Shuffle control
            $('*[data-shuffle]').click(function() {
                self.shuffle();
            });
            //Sort controls
            $('*[data-sortAsc]').click(function() {
                var sortAttr = $('*[data-sortOrder]').val();
                self.sort(sortAttr, 'asc');
            });
            $('*[data-sortDesc]').click(function() {
                var sortAttr = $('*[data-sortOrder]').val();
                self.sort(sortAttr, 'desc');
            });
            //Search control
            $('input[data-search]').keyup(function() {
                self._typedText = $(this).val();
                self._delayEvent(function() {
                    self.search(self._typedText);
                }, 250, self._uID);
            });
        },

        /**
        * Set up window and Filterizr events.
        * @private
        */
        _setupEvents: function() {
            var self = this;
            //Window resize event
            $(global).resize(function() {
                self._delayEvent(function() {
                    self.trigger('resizeFiltrContainer');
                }, 250, self._uID);
            });
            //Filterizr events
            self
            //Container resize event
            .on('resizeFiltrContainer', function() {
                if (self._multifilterModeOn())
                    self.toggleFilter();
                else
                    self.filter(self.options.filter);
            })
            //onFilteringStart event
            .on('filteringStart', function() {
                self.options.callbacks.onFilteringStart();
            })
            //onFilteringEnd event
            .on('filteringEnd', function() {
                self.options.callbacks.onFilteringEnd();
            })
            //onShufflingStart event
            .on('shufflingStart', function() {
                self._isShuffling = true;
                self.options.callbacks.onShufflingStart();
            })
            //onFilteringEnd event
            .on('shufflingEnd', function() {
                self.options.callbacks.onShufflingEnd();
                self._isShuffling = false;
            })
            //onSortingStart event
            .on('sortingStart', function() {
                self._isSorting = true;
                self.options.callbacks.onSortingStart();
            })
            //onSortingEnd event
            .on('sortingEnd', function() {
                self.options.callbacks.onSortingEnd();
                self._isSorting = false;
            });
        },

        /**
        * Calculates the final positions of items being filtered in, updates the height of .filtr-container.
        * @return {Object[]} array of future item positions.
        * @private
        */
        _calcItemPositions: function() {
            var self  = this,
                array = self._activeArray,
            //Container data
            containerHeight = 0,
            cols = Math.round(self.width() / self.find('.filtr-item').outerWidth()),
            rows = 0,
            //Item data
            itemWidth  = array[0].outerWidth(),
            itemHeight = 0,
            //Position calculation vars
            left = 0, top = 0,
            //Loop vars
            i = 0, x = 0,
            //Array of positions to return
            posArray = [];

            //Layout for items of varying sizes
            if (self.options.layout === 'packed') {
                //Cache current item width/height
                $.each(self._activeArray, function(i, e) {
                    e._updateDimensions();
                });
                //Instantiate new Packer, set up grid
                var packer = new Packer(self.outerWidth());
                packer.fit(self._activeArray);
                for (i = 0; i < array.length; i++) {
                    posArray.push({
                        left: array[i].fit.x,
                        top: array[i].fit.y
                    });
                }
                containerHeight = packer.root.h;
            }
            //Horizontal layout
            if (self.options.layout === 'horizontal') {
                rows = 1;
                for (i = 1; i <= array.length; i++) {
                    itemWidth = array[i - 1].outerWidth();
                    itemHeight = array[i - 1].outerHeight();
                    posArray.push({
                        left: left,
                        top: top
                    });
                    left += itemWidth;
                    if (containerHeight < itemHeight) containerHeight = itemHeight;
                }
            }
            //Vertical layout
            else if (self.options.layout === 'vertical') {
                for (i = 1; i <= array.length; i++) {
                    itemHeight = array[i - 1].outerHeight();
                    posArray.push({
                        left: left,
                        top: top
                    });
                    top += itemHeight;
                }
                containerHeight = top;
            }
            //Layout of items for same height and varying width
            else if (self.options.layout === 'sameHeight') {
                rows = 1;
                var rowWidth = self.outerWidth();
                for (i = 1; i <= array.length; i++) {
                    itemWidth = array[i - 1].width();
                    var itemOuterWidth = array[i - 1].outerWidth(),
                    nextItemWidth = 0;
                    if (array[i]) nextItemWidth = array[i].width();
                    posArray.push({
                        left: left,
                        top: top
                    });
                    x = left + itemWidth + nextItemWidth;
                    if (x > rowWidth) {
                        x 	 = 0;
                        left = 0;
                        top  += array[0].outerHeight();
                        rows++;
                    }
                    else left += itemOuterWidth;
                }
                containerHeight = rows * array[0].outerHeight();
            }
            //Layout for items of same width and varying height
            else if (self.options.layout === 'sameWidth') {
                //Get positions
                for (i = 1; i <= array.length; i++) {
                    posArray.push({
                        left: left,
                        top: top
                    });
                    if (i % cols === 0) rows++;
                    left += itemWidth;
                    top = 0;
                    if (rows > 0) {
                        x = rows;
                        while (x > 0) {
                            top += array[i - (cols * x)].outerHeight();
                            x--;
                        }
                    }
                    if (i % cols === 0) left = 0;
                }
                //Calculate containerHeight
                for (i = 0; i < cols; i++) {
                    var columnHeight = 0, index = i;
                    while(array[index]) {
                        columnHeight += array[index].outerHeight();
                        index += cols;
                    }
                    if (columnHeight > containerHeight) {
                        containerHeight = columnHeight;
                        columnHeight = 0;
                    }
                    else
                    columnHeight = 0;
                }
            }
            //Layout for items of exactly same size
            else if (self.options.layout === 'sameSize') {
                for (i = 1; i <= array.length; i++) {
                    //Push first point at (left: 0, top: 0)
                    posArray.push({
                        left: left,
                        top: top
                    });
                    //Set left and top properties for next point before next iteration
                    left += itemWidth;
                    //On row change calc new top and reset left
                    if (i % cols === 0) {
                        top += array[0].outerHeight();
                        left = 0;
                    }
                }
                rows = Math.ceil(array.length / cols);
                containerHeight = rows * array[0].outerHeight();
            }
            //Update the height of .filtr-container based on new positions
            self.css('height', containerHeight);
            return posArray;
        },

        /**
        * Handles filtering in/out and reposition items when transition between categories
        * @param {Object[]} the target array towards which to filter
        * @private
        */
        _handleFiltering: function(target) {
            var self = this,
                toFilterOut = self._getArrayOfUniqueItems(self._activeArray, target);
            //Minimize all .filtr-item elements that are not the same between categories
            for (var i = 0; i < toFilterOut.length; i++) {
                toFilterOut[i]._filterOut();
            }
            self._activeArray = target;
            //Reposition same items and filter in new
            self._placeItems(target);
        },

        /**
        * Determines if the user is using data-multifilter controls or simple data-filter controls
        * @return {boolean} indicating whether multiple filter mode is on
        * @private
        */
        _multifilterModeOn: function() {
            var self = this;
            return Object.keys(self._toggledCategories).length > 0;
        },

        /**
        * Determines if the user has something typed in the search box
        * @return {boolean} indicating whether the user has searched
        * @private
        */
        _isSearchActivated: function() {
            var self = this;
            return self._typedText.length > 0;
        },

        /**
        * Places .filtr-item elements on the grid positions
        * @param {Object[]} arr - an array consisting of .filtr-item elements
        * @private
        */
        _placeItems: function(arr) {
            var self = this;
            //Tag gallery state as animating
            self._isAnimating = true;
            //Recalculate positions and filter in items
            self._itemPositions = self._calcItemPositions();
            for (var i = 0; i < arr.length; i++) {
                arr[i]._filterIn(self._itemPositions[i]);
            }
        },

        /**
        * Returns item collection based on a certain filter
        * @param {string|number} filter of category to return
        * @return {Object[]} one of the item collections based on filter
        * @private
        */
        _getCollectionByFilter: function(filter) {
            var self = this;
            return filter === 'all' ? self._mainArray : self._subArrays[filter - 1];
        },

        /**
        * Used to make deep copies of the predefined filters
        * in the options for the filterIn/Out methods of items.
        * @see _filterIn and _filterOut methods in FiltrItemProto.
        * @param {Object} obj - is the source object to make a deep copy from.
        * @return {Object} Deep copy of the obj param.
        * @private
        */
        _makeDeepCopy: function(obj) {
            var r = {};
            for (var p in obj) r[p] = obj[p];
            return r;
        },

        /**
        * Comparator factory used to produce camparers for sorting.
        * @see Filterizr.prototype.sort.
        * @param {string} prop - property based on which to sort ('domIndex', 'sortData', 'w', 'h')
        * @param {string} sortOrder - 'asc'/'desc'
        * @return {function} comparer which takes arguments
        * @private
        */
        _comparator: function(prop, sortOrder) {
            return function(a, b) {
                if (sortOrder === 'asc') {
                    if (a[prop] < b[prop])
                    return -1;
                    else if (a[prop] > b[prop])
                    return 1;
                    else
                    return 0;
                }
                else if (sortOrder === 'desc') {
                    if (b[prop] < a[prop])
                    return -1;
                    else if (b[prop] > a[prop])
                    return 1;
                    else
                    return 0;
                }
            };
        },

        /**
        * Modified version of Jeffery To's array intersection method
        * @see {@link http://www.falsepositives.com/index.php/2009/12/01/javascript-function-to-get-the-intersect-of-2-arrays/}
        * @return {Object[]} a disjoint array containing the elements of the first array not found in the second
        * @private
        */
        _getArrayOfUniqueItems: function(arr1, arr2) {
            var r = [], o = {}, l = arr2.length, i, v;
            for (i = 0; i < l; i++) {
                o[arr2[i].domIndex] = true;
            }
            l = arr1.length;
            for (i = 0; i < l; i++) {
                v = arr1[i];
                if (!(v.domIndex in o)) {
                    r.push(v);
                }
            }
            return r;
        },

        /**
        * Brahn's take on CMS's solution to calling the window.resize event at set
        * intervals in multiple places in the code using a Java-like UUID with a regexp
        * @see {@link http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed}
        * @return {function} which calls the callback or just clears the timer
        * @private
        */
        _delayEvent: (function () {
            var self = this, timers = {};
            return function (callback, ms, uniqueId) {
                if (uniqueId === null) {
                    throw Error("UniqueID needed");
                }
                if (timers[uniqueId]) {
                    clearTimeout (timers[uniqueId]);
                }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        })(),

        /**
        * Fisher-Yates array shuffling algorithm implemented for JavaScript.
        * @return {Object[]} shuffled array.
        * @private
        */
        _fisherYatesShuffle: function shuffle(array) {
            var m = array.length, t, i;
            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }
    };

    /**
    * FiltrItem Prototype
    */
    var FiltrItemProto = {

        /**
        * Transforms a jQuery item with .filtr-item class into a FiltrItem.
        * @param {number} index - initial item order based on position in DOM.
        * @param {Filterizr} parent - reference to Filterizr container containing this Filtr Item.
        * @return {jQuery} this - to facilitate method chaining.
        * @constructor
        */
        _init: function(index, parent) {
            var self = this, delay = 0;
            //Private item properties
            self._parent   = parent;			  //Ref to parent Filterizr object
            self._category = self._getCategory(); //data-category values
            self._lastPos  = {};				  //Used for animations
            //Public properties - used for sorting
            self.domIndex = index;
            self.sortData = self.data('sort');
            //Item Dimensions used for Bin Packing algorithm (packed layout) and sorting.
            self.w = 0;
            self.h = 0;
            //self states
            self._isFilteredOut = true;
            self._filteringOut  = false;
            self._filteringIn   = false;
            ////Determine delay & set initial item styles
            //self.css(parent.options.filterOutCss)
            //.css({
            //    '-webkit-backface-visibility': 'hidden',
            //    'perspective': '1000px',
            //    '-webkit-perspective': '1000px',
            //    '-webkit-transform-style': 'preserve-3d',
            //    'position': 'absolute',
            //    'transition': 'all ' + parent.options.animationDuration + 's ' + parent.options.easing + ' ' + self._calcDelay() + 'ms'
            //});
            //Events
            self.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
                self._onTransitionEnd();
            });
            return self;
        },

        /**
        * Updates the dimensions (width/height) of the item.
        * @private
        */
        _updateDimensions: function() {
            var self = this;
            self.w = self.outerWidth();
            self.h = self.outerHeight();
        },

        /**
        * Calculates and returns the value of delay to apply to transition-delay in ms, depending on delayMode
        * @return {number} value to apply to transition-delay in ms.
        * @private
        */
        _calcDelay: function() {
            var self = this, r = 0;
            if (self._parent.options.delayMode === 'progressive')
            r = self._parent.options.delay * self.domIndex;
            else
            if (self.domIndex % 2 === 0) r = self._parent.options.delay;
            return r;
        },

        /**
        * Determines which categories this items belongs to and updates the _lastCategory prop of Filterizr.
        * @throws {InvalidArgumentException} data-category of .filtr-item elements must be integer or string of integers delimited by ', '
        * @return {Object[]|number} the categories this item belongs to.
        * @private
        */
        _getCategory: function() {
            var self = this,
                ret  = self.data('category');
            //If more than one category provided
            if (typeof ret === 'string') {
                ret = ret.split(', ');
                for (var i = 0; i < ret.length; i++) {
                    //Error checking: make sure data-category has an integer as its value
                    if (isNaN(parseInt(ret[i]))) {
                        throw new Error('Filterizr: the value of data-category must be a number, starting from value 1 and increasing.');
                    }
                    if (parseInt(ret[i]) > self._parent._lastCategory) {
                        self._parent._lastCategory = parseInt(ret[i]);
                    }
                }
            }
            else {
                if (ret > self._parent._lastCategory)
                    self._parent._lastCategory = ret;
            }
            return ret;
        },

        /**
        * Handles the transitionEnd event.
        * @private
        */
        _onTransitionEnd: function() {
            var self = this;
            //finished filtering out
            if (self._filteringOut) {
                $(self).addClass('filteredOut');
                self._isFilteredOut = true;
                self._filteringOut  = false;
            }
            //finished filtering in
            else if (self._filteringIn) {
                self._isFilteredOut = false;
                self._filteringIn 	= false;
            }
            //if animating trigger filteringEnd event once on parent
            if (self._parent._isAnimating) {
                if (self._parent._isShuffling)
                    self._parent.trigger('shufflingEnd');
                else if (self._parent._isSorting)
                    self._parent.trigger('sortingEnd');
                else
                    self._parent.trigger('filteringEnd');
                self._parent._isAnimating = false;
            }
        },

        /**
        * Filters out the item.
        * @private
        */
        _filterOut: function() {
            var self         = this,
                filterOutCss = self._parent._makeDeepCopy(self._parent.options.filterOutCss);
            //Auto add translate to transform over user-defined filterOut styles
            filterOutCss.transform += ' translate3d(' + self._lastPos.left + 'px,' + self._lastPos.top + 'px, 0)';
            //Play animation
            self.css(filterOutCss);
            self._filteringOut = true;
        },

        /**
        * Filters in the item.
        * @param {Object} targetPos - is the position to move to with transform-translate
        * @private
        */
        _filterIn: function(targetPos) {
            var self        = this,
                filterInCss = self._parent._makeDeepCopy(self._parent.options.filterInCss);
            //Remove the filteredOut class
            $(self).removeClass('filteredOut');
            //Tag as filtering in for transitionend event
            self._filteringIn = true;
            self._lastPos     = targetPos;
            //Auto add translate to transform over user-defined filterIn styles
            filterInCss.transform += ' translate3d(' + targetPos.left + 'px,' + targetPos.top + 'px, 0)';
            //Play animation
            self.css(filterInCss);
        }
    };

})(this, jQuery);

$(function () {
    $('#filtr-container').children().addClass("filtr-item");
    $('#filtr-container').filterizr();

    $('.gallery-cats li').click(function () {
        $('.gallery-cats li').removeClass('active');
        $(this).addClass('active');
        SetProject();
        event.preventDefault();
    });
    SetProject();
});
$( window ).resize(function() {
    SetProject();
});
function SetProject() {
    if ($(window).width() > 991) {
        var mh = 3 * $('#project .col-sm-6:first-child').outerHeight() -20;
        if ($('#filtr-container').outerHeight() > mh) {
            $('#project').css('max-height', mh + 'px');
            $('#project').addClass('scrollbar');
        }
        else {
            $('#project').removeAttr('style');
            $('#project').removeClass('scrollbar');
        }
    }
}