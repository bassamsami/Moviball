/*!
   JW Player version 8.26.0
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.26.0/notice.txt
*/
(self.webpackChunkjwplayer = self.webpackChunkjwplayer || []).push([[581, 681, 716], {
    8377: function(t, e, i) {
        "use strict";
        function n(t, e) {
            var i = t.kind || "cc";
            return t.default || t.defaulttrack ? "default" : t._id || t.file || i + e
        }
        function o(t, e) {
            var i = t.label || t.name || t.language;
            return i || (i = "Unknown CC",
            (e += 1) > 1 && (i += " [" + e + "]")),
            {
                label: i,
                unknownCount: e
            }
        }
        i.d(e, {
            M: function() {
                return n
            },
            _: function() {
                return o
            }
        })
    },
    6103: function(t, e, i) {
        "use strict";
        i.d(e, {
            V: function() {
                return p
            },
            x: function() {
                return d
            }
        });
        var n = i(7477)
          , o = i(2894)
          , a = i(6886)
          , r = i(7941)
          , s = i(7387)
          , l = i(2957)
          , c = i(4446);
        function u(t) {
            throw new c.rG(null,t)
        }
        function d(t, e, n) {
            t.xhr = (0,
            a.h)(t.file, (function(a) {
                !function(t, e, n, a) {
                    var d, p, w = t.responseXML ? t.responseXML.firstChild : null;
                    if (w)
                        for ("xml" === (0,
                        r.r1)(w) && (w = w.nextSibling); w && w.nodeType === w.COMMENT_NODE; )
                            w = w.nextSibling;
                    try {
                        if (w && "tt" === (0,
                        r.r1)(w)) {
                            if (!t.responseXML)
                                throw new Error("Empty XML response");
                            d = function(t) {
                                t || u(306007);
                                var e = []
                                  , i = t.getElementsByTagName("p")
                                  , n = 30
                                  , o = t.getElementsByTagName("tt");
                                if (o && o[0]) {
                                    var a = parseFloat(o[0].getAttribute("ttp:frameRate") || "");
                                    isNaN(a) || (n = a)
                                }
                                i || u(306005),
                                i.length || (i = t.getElementsByTagName("tt:p")).length || (i = t.getElementsByTagName("tts:p"));
                                for (var r = 0; r < i.length; r++) {
                                    for (var s = i[r], c = s.getElementsByTagName("br"), d = 0; d < c.length; d++) {
                                        var p = c[d];
                                        p && p.parentNode && p.parentNode.replaceChild(t.createTextNode("\r\n"), p)
                                    }
                                    var h = s.innerHTML || s.textContent || s.text || ""
                                      , w = (0,
                                    l.fy)(h).replace(/>\s+</g, "><").replace(/(<\/?)tts?:/g, "$1").replace(/<br.*?\/>/g, "\r\n");
                                    if (w) {
                                        var g = s.getAttribute("begin") || ""
                                          , f = s.getAttribute("dur") || ""
                                          , j = s.getAttribute("end") || ""
                                          , m = {
                                            begin: (0,
                                            l.m9)(g, n),
                                            text: w
                                        };
                                        j ? m.end = (0,
                                        l.m9)(j, n) : f && (m.end = (m.begin || 0) + (0,
                                        l.m9)(f, n)),
                                        e.push(m)
                                    }
                                }
                                return e.length || u(306005),
                                e
                            }(t.responseXML),
                            p = h(d),
                            delete e.xhr,
                            n(p)
                        } else {
                            var g = t.responseText;
                            g.indexOf("WEBVTT") >= 0 ? i.e(347).then(function(t) {
                                return i(2776).default
                            }
                            .bind(null, i)).catch((0,
                            o.Jt)(301131)).then((function(t) {
                                var i = new t(window);
                                p = [],
                                i.oncue = function(t) {
                                    p.push(t)
                                }
                                ,
                                i.onflush = function() {
                                    delete e.xhr,
                                    n(p)
                                }
                                ,
                                i.parse(g)
                            }
                            )).catch((function(t) {
                                delete e.xhr,
                                a((0,
                                c.Mm)(null, c.Y7, t))
                            }
                            )) : (d = (0,
                            s.Z)(g),
                            p = h(d),
                            delete e.xhr,
                            n(p))
                        }
                    } catch (t) {
                        delete e.xhr,
                        a((0,
                        c.Mm)(null, c.Y7, t))
                    }
                }(a, t, e, n)
            }
            ), (function(t, e, i, o) {
                n((0,
                c.l9)(o, c.Y7))
            }
            ))
        }
        function p(t) {
            t && t.forEach((function(t) {
                var e = t.xhr;
                e && (e.onload = null,
                e.onreadystatechange = null,
                e.onerror = null,
                "abort"in e && e.abort()),
                delete t.xhr
            }
            ))
        }
        function h(t) {
            return t.map((function(t) {
                return new n.Z(t.begin,t.end,t.text)
            }
            ))
        }
    },
    7387: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var n = i(2957);
        function o(t) {
            var e = []
              , i = (t = (0,
            n.fy)(t)).split("\r\n\r\n");
            1 === i.length && (i = t.split("\n\n"));
            for (var o = 0; o < i.length; o++)
                if ("WEBVTT" !== i[o]) {
                    var r = a(i[o]);
                    r.text && e.push(r)
                }
            return e
        }
        function a(t) {
            var e = {}
              , i = t.split("\r\n");
            1 === i.length && (i = t.split("\n"));
            var o = 1;
            if (i[0].indexOf(" --\x3e ") > 0 && (o = 0),
            i.length > o + 1 && i[o + 1]) {
                var a = i[o]
                  , r = a.indexOf(" --\x3e ");
                r > 0 && (e.begin = (0,
                n.m9)(a.substr(0, r)),
                e.end = (0,
                n.m9)(a.substr(r + 5)),
                e.text = i.slice(o + 1).join("\r\n"))
            }
            return e
        }
    },
    7477: function(t, e) {
        "use strict";
        var i = window.VTTCue;
        function n(t) {
            if ("string" != typeof t)
                return !1;
            return !!{
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            }[t.toLowerCase()] && t.toLowerCase()
        }
        if (!i) {
            var o = "auto";
            (i = function(t, e, i) {
                var a = this;
                a.hasBeenReset = !1;
                var r = ""
                  , s = !1
                  , l = t
                  , c = e
                  , u = i
                  , d = null
                  , p = ""
                  , h = !0
                  , w = o
                  , g = "start"
                  , f = o
                  , j = 100
                  , m = "middle";
                Object.defineProperty(a, "id", {
                    enumerable: !0,
                    get: function() {
                        return r
                    },
                    set: function(t) {
                        r = "" + t
                    }
                }),
                Object.defineProperty(a, "pauseOnExit", {
                    enumerable: !0,
                    get: function() {
                        return s
                    },
                    set: function(t) {
                        s = !!t
                    }
                }),
                Object.defineProperty(a, "startTime", {
                    enumerable: !0,
                    get: function() {
                        return l
                    },
                    set: function(t) {
                        if ("number" != typeof t)
                            throw new TypeError("Start time must be set to a number.");
                        l = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "endTime", {
                    enumerable: !0,
                    get: function() {
                        return c
                    },
                    set: function(t) {
                        if ("number" != typeof t)
                            throw new TypeError("End time must be set to a number.");
                        c = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "text", {
                    enumerable: !0,
                    get: function() {
                        return u
                    },
                    set: function(t) {
                        u = "" + t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "region", {
                    enumerable: !0,
                    get: function() {
                        return d
                    },
                    set: function(t) {
                        d = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "vertical", {
                    enumerable: !0,
                    get: function() {
                        return p
                    },
                    set: function(t) {
                        var e = function(t) {
                            return "string" == typeof t && (!!{
                                "": !0,
                                lr: !0,
                                rl: !0
                            }[t.toLowerCase()] && t.toLowerCase())
                        }(t);
                        if (!1 === e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        p = e,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "snapToLines", {
                    enumerable: !0,
                    get: function() {
                        return h
                    },
                    set: function(t) {
                        h = !!t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "line", {
                    enumerable: !0,
                    get: function() {
                        return w
                    },
                    set: function(t) {
                        if ("number" != typeof t && t !== o)
                            throw new SyntaxError("An invalid number or illegal string was specified.");
                        w = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "lineAlign", {
                    enumerable: !0,
                    get: function() {
                        return g
                    },
                    set: function(t) {
                        var e = n(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        g = e,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "position", {
                    enumerable: !0,
                    get: function() {
                        return f
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Position must be between 0 and 100.");
                        f = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "size", {
                    enumerable: !0,
                    get: function() {
                        return j
                    },
                    set: function(t) {
                        if (t < 0 || t > 100)
                            throw new Error("Size must be between 0 and 100.");
                        j = t,
                        this.hasBeenReset = !0
                    }
                }),
                Object.defineProperty(a, "align", {
                    enumerable: !0,
                    get: function() {
                        return m
                    },
                    set: function(t) {
                        var e = n(t);
                        if (!e)
                            throw new SyntaxError("An invalid or illegal string was specified.");
                        m = e,
                        this.hasBeenReset = !0
                    }
                }),
                a.displayState = void 0
            }
            ).prototype.getCueAsHTML = function() {
                return window.WebVTT.convertCueToDOMTree(window, this.text)
            }
        }
        e.Z = i
    },
    5099: function(t, e, i) {
        "use strict";
        function n(t) {
            return new Promise((function(e, i) {
                if (t.paused)
                    return i(o("NotAllowedError", 0, "play() failed."));
                var n = function() {
                    t.removeEventListener("play", a),
                    t.removeEventListener("playing", r),
                    t.removeEventListener("pause", r),
                    t.removeEventListener("abort", r),
                    t.removeEventListener("error", r)
                }
                  , a = function() {
                    t.addEventListener("playing", r),
                    t.addEventListener("abort", r),
                    t.addEventListener("error", r),
                    t.addEventListener("pause", r)
                }
                  , r = function(t) {
                    if (n(),
                    "playing" !== t.type) {
                        var a = 'The play() request was interrupted by a "' + t.type + '" event.';
                        return "error" === t.type ? i(o("NotSupportedError", 9, a)) : i(o("AbortError", 20, a))
                    }
                    e()
                };
                t.addEventListener("play", a)
            }
            ))
        }
        function o(t, e, i) {
            var n = new Error(i);
            return n.name = t,
            n.code = e,
            n
        }
        i.d(e, {
            Z: function() {
                return n
            }
        })
    },
    686: function(t, e, i) {
        "use strict";
        function n(t, e) {
            return t !== 1 / 0 && Math.abs(t) >= Math.max(a(e), 0)
        }
        function o(t, e) {
            var i = "VOD";
            return t === 1 / 0 ? i = "LIVE" : t < 0 && (i = n(t, a(e)) ? "DVR" : "LIVE"),
            i
        }
        function a(t) {
            return void 0 === t ? 120 : Math.max(t, 0)
        }
        i.d(e, {
            s: function() {
                return n
            },
            v: function() {
                return o
            }
        })
    },
    4667: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return a
            }
        });
        var n, o = i(2799);
        function a(t) {
            return n || (n = new DOMParser),
            (0,
            o.gB)((0,
            o.oH)(n.parseFromString(t, "image/svg+xml").documentElement))
        }
    },
    1831: function(t, e, i) {
        "use strict";
        i.d(e, {
            R: function() {
                return p
            }
        });
        var n, o = i(7462), a = i(8348), r = i(2894), s = i(328), l = i(1643), c = i(974), u = i(2799), d = i(6042), p = {
            back: !0,
            backgroundOpacity: 50,
            edgeStyle: null,
            fontSize: 14,
            fontOpacity: 100,
            fontScale: .05,
            preprocessor: d.yR,
            windowOpacity: 0
        }, h = function(t) {
            var e, s, h, w, g, f, j, m, v, b = this, y = t.player;
            function x() {
                (0,
                d.xV)(e.fontSize) && (y.get("containerHeight") ? m = p.fontScale * (e.userFontScale || 1) * e.fontSize / p.fontSize : y.once("change:containerHeight", x, this))
            }
            function k() {
                var t = y.get("containerHeight");
                if (t) {
                    var e;
                    if (y.get("fullscreen") && a.OS.iOS)
                        e = null;
                    else {
                        var i = t * m;
                        e = Math.round(10 * function(t) {
                            var e = y.get("mediaElement");
                            if (e && e.videoHeight) {
                                var i = e.videoWidth
                                  , n = e.videoHeight
                                  , o = i / n
                                  , r = y.get("containerHeight")
                                  , s = y.get("containerWidth");
                                if (y.get("fullscreen") && a.OS.mobile) {
                                    var l = window.screen;
                                    l.orientation && (r = l.availHeight,
                                    s = l.availWidth)
                                }
                                if (s && r && i && n)
                                    return (s / r > o ? r : n * s / i) * m
                            }
                            return t
                        }(i)) / 10
                    }
                    y.get("renderCaptionsNatively") ? function(t, e) {
                        var i = "#" + t + " .jw-video::-webkit-media-text-track-display";
                        e && (e += "px",
                        a.OS.iOS && (0,
                        c.iv)(i, {
                            fontSize: "inherit"
                        }, t, !0));
                        v.fontSize = e,
                        (0,
                        c.iv)(i, v, t, !0)
                    }(y.get("id"), e) : (0,
                    c.oB)(g, {
                        fontSize: e
                    })
                }
            }
            function C(t, e, i) {
                var n = (0,
                c.HY)("#000000", i);
                "dropShadow" === t ? e.textShadow = "0 2px 1px " + n : "raised" === t ? e.textShadow = "0 0 5px " + n + ", 0 1px 5px " + n + ", 0 2px 5px " + n : "depressed" === t ? e.textShadow = "0 -2px 1px " + n : "uniform" === t && (e.textShadow = "-2px 0 1px " + n + ",2px 0 1px " + n + ",0 -2px 1px " + n + ",0 2px 1px " + n + ",-1px 1px 1px " + n + ",1px 1px 1px " + n + ",1px -1px 1px " + n + ",1px 1px 1px " + n)
            }
            (g = document.createElement("div")).className = "jw-captions jw-reset",
            this.show = function() {
                (0,
                u.cn)(g, "jw-captions-enabled")
            }
            ,
            this.hide = function() {
                (0,
                u.IV)(g, "jw-captions-enabled")
            }
            ,
            this.populate = function(t) {
                y.get("renderCaptionsNatively") || (h = [],
                s = t,
                t ? this.selectCues(t, w) : this.renderCues())
            }
            ,
            this.resize = function() {
                k(),
                this.renderCues(!0)
            }
            ,
            this.renderCues = function(t) {
                t = !!t,
                n && n.processCues(window, h, g, t)
            }
            ,
            this.selectCues = function(t, e) {
                if (t && t.data && e && !y.get("renderCaptionsNatively")) {
                    var i = this.getAlignmentPosition(t, e);
                    !1 !== i && (h = this.getCurrentCues(t.data, i),
                    this.renderCues(!0))
                }
            }
            ,
            this.getCurrentCues = function(t, e) {
                return (0,
                d.hX)(t, (function(t) {
                    return e >= t.startTime && (!t.endTime || e <= t.endTime)
                }
                ))
            }
            ,
            this.getAlignmentPosition = function(t, e) {
                var i = t.source
                  , n = e.metadata
                  , o = e.currentTime;
                return i && n && (0,
                d.hj)(n[i]) && (o = n[i]),
                o
            }
            ,
            this.clear = function() {
                (0,
                u.cS)(g)
            }
            ,
            this.setup = function(t, i) {
                f = document.createElement("div"),
                j = document.createElement("span"),
                f.className = "jw-captions-window jw-reset",
                j.className = "jw-captions-text jw-reset",
                e = (0,
                o.Z)({}, p, i),
                m = p.fontScale;
                var n = function() {
                    x(e.fontSize);
                    var i = e.windowColor
                      , n = e.windowOpacity
                      , o = e.edgeStyle;
                    v = {};
                    var r = {};
                    !function(t, e) {
                        var i = e.color
                          , n = e.fontOpacity;
                        (i || n !== p.fontOpacity) && (t.color = (0,
                        c.HY)(i || "#ffffff", n));
                        if (e.back) {
                            var o = e.backgroundColor
                              , a = e.backgroundOpacity;
                            o === p.backgroundColor && a === p.backgroundOpacity || (t.backgroundColor = (0,
                            c.HY)(o, a))
                        } else
                            t.background = "transparent";
                        e.fontFamily && (t.fontFamily = e.fontFamily);
                        e.fontStyle && (t.fontStyle = e.fontStyle);
                        e.fontWeight && (t.fontWeight = e.fontWeight);
                        e.textDecoration && (t.textDecoration = e.textDecoration)
                    }(r, e),
                    (i || n !== p.windowOpacity) && (v.backgroundColor = (0,
                    c.HY)(i || "#000000", n)),
                    C(o, r, e.fontOpacity),
                    e.back || null !== o || C("uniform", r),
                    (0,
                    c.oB)(f, v),
                    (0,
                    c.oB)(j, r),
                    function(t, e) {
                        k(),
                        function(t, e) {
                            a.Browser.safari && (0,
                            c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display-backdrop", {
                                backgroundColor: e.backgroundColor
                            }, t, !0);
                            (0,
                            c.iv)("#" + t + " .jw-video::-webkit-media-text-track-display", v, t, !0),
                            (0,
                            c.iv)("#" + t + " .jw-video::cue", e, t, !0)
                        }(t, e),
                        function(t, e) {
                            (0,
                            c.iv)("#" + t + " .jw-text-track-display", v, t),
                            (0,
                            c.iv)("#" + t + " .jw-text-track-cue", e, t)
                        }(t, e)
                    }(t, r)
                };
                n(),
                f.appendChild(j),
                g.appendChild(f),
                y.change("captionsTrack", (function(t, e) {
                    this.populate(e)
                }
                ), this),
                y.set("captions", e),
                y.on("change:captions", (function(t, i) {
                    e = i,
                    n()
                }
                ))
            }
            ,
            this.element = function() {
                return g
            }
            ,
            this.destroy = function() {
                y.off(null, null, this),
                this.off()
            }
            ;
            var M = function(t) {
                w = t,
                b.selectCues(s, w)
            };
            y.on("change:playlistItem", (function() {
                w = null,
                h = []
            }
            ), this),
            y.on(l.NZ, (function(t) {
                h = [],
                M(t)
            }
            ), this),
            y.on(l.R2, M, this),
            y.on("subtitlesTrackData", (function() {
                this.selectCues(s, w)
            }
            ), this),
            y.on("change:captionsList", (function t(e, o) {
                var a = this;
                1 !== o.length && (e.get("renderCaptionsNatively") || n || (i.e(63).then(function(t) {
                    n = i(8698).default
                }
                .bind(null, i)).catch((0,
                r.Jt)(301121)).catch((function(t) {
                    a.trigger(l.cM, t)
                }
                )),
                e.off("change:captionsList", t, this)))
            }
            ), this)
        };
        (0,
        o.Z)(h.prototype, s.ZP),
        e.Z = h
    },
    8165: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return r
            }
        });
        var n = i(4667)
          , o = i(4429)
          , a = i(5646);
        function r(t, e, i, r) {
            var s = document.createElement("div");
            s.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + t,
            s.setAttribute("role", "button"),
            s.setAttribute("tabindex", "0"),
            i && s.setAttribute("aria-label", i),
            s.style.display = "none";
            var l = (0,
            a.Z)(s, e || o.Z.noop);
            return r && Array.prototype.forEach.call(r, (function(t) {
                "string" == typeof t ? s.appendChild((0,
                n.Z)(t)) : s.appendChild(t)
            }
            )),
            {
                ui: l,
                element: function() {
                    return s
                },
                toggle: function(t) {
                    t ? this.show() : this.hide()
                },
                show: function() {
                    s.style.display = ""
                },
                hide: function() {
                    s.style.display = "none"
                }
            }
        }
    },
    8168: function(t, e, i) {
        "use strict";
        i.d(e, {
            w: function() {
                return s
            }
        });
        var n = i(974)
          , o = i(4667)
          , a = i(5646)
          , r = {};
        function s(t) {
            if (!r[t]) {
                var e = Object.keys(r);
                e.length > 10 && delete r[e[0]];
                var i = (0,
                o.Z)(t);
                r[t] = i
            }
            return r[t].cloneNode(!0)
        }
        var l = function() {
            function t(t, e, i, o, r) {
                var l, c = document.createElement("div");
                c.className = "jw-icon jw-icon-inline jw-button-color jw-reset " + (r || ""),
                c.setAttribute("button", o),
                c.setAttribute("role", "button"),
                c.setAttribute("tabindex", "0"),
                e && c.setAttribute("aria-label", e),
                t && "<svg" === t.substring(0, 4) ? l = s(t) : ((l = document.createElement("div")).className = "jw-icon jw-button-image jw-button-color jw-reset",
                t && (0,
                n.oB)(l, {
                    backgroundImage: "url(" + t + ")"
                })),
                c.appendChild(l),
                (0,
                a.Z)(c, i, this),
                c.addEventListener("mousedown", (function(t) {
                    t.preventDefault()
                }
                )),
                this.id = o,
                this.buttonElement = c
            }
            var e = t.prototype;
            return e.element = function() {
                return this.buttonElement
            }
            ,
            e.toggle = function(t) {
                t ? this.show() : this.hide()
            }
            ,
            e.show = function() {
                this.buttonElement.style.display = ""
            }
            ,
            e.hide = function() {
                this.buttonElement.style.display = "none"
            }
            ,
            t
        }();
        e.Z = l
    },
    3477: function(t, e, i) {
        "use strict";
        i.d(e, {
            k: function() {
                return l
            },
            s: function() {
                return s
            }
        });
        var n = i(4578)
          , o = i(2799)
          , a = i(3163)
          , r = i(5646)
          , s = function() {
            function t(t, e, i) {
                void 0 === i && (i = a.Ge),
                this.el = (0,
                o.az)(i(t)),
                this.ui = (0,
                r.Z)(this.el, e, this)
            }
            return t.prototype.destroy = function() {
                this.el.parentNode && this.el.parentNode.removeChild(this.el),
                this.ui.destroy()
            }
            ,
            t
        }()
          , l = function(t) {
            function e(e, i, n) {
                return void 0 === n && (n = a.dr),
                t.call(this, e, i, n) || this
            }
            (0,
            n.Z)(e, t);
            var i = e.prototype;
            return i.activate = function() {
                this.active || ((0,
                o.og)(this.el, "jw-settings-item-active", !0),
                this.el.setAttribute("aria-checked", "true"),
                this.active = !0)
            }
            ,
            i.deactivate = function() {
                this.active && ((0,
                o.og)(this.el, "jw-settings-item-active", !1),
                this.el.setAttribute("aria-checked", "false"),
                this.active = !1)
            }
            ,
            e
        }(s)
    },
    7284: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return f
            }
        });
        var n = i(7326)
          , o = i(4578)
          , a = i(5882)
          , r = i(328)
          , s = i(2799)
          , l = i(8165)
          , c = i(7191)
          , u = i(3477)
          , d = i(7509)
          , p = i(2810)
          , h = i(5349)
          , w = function(t) {
            var e = t.name
              , i = t.title
              , n = {
                captions: "cc-off",
                audioTracks: "audio-tracks",
                quality: "quality-100",
                playbackRates: "playback-rate"
            }[e];
            if (n || t.icon) {
                var o = (0,
                l.Z)("jw-settings-" + e + " jw-submenu-" + e, (function(e) {
                    t.open(e)
                }
                ), i, [t.icon && (0,
                s.az)(t.icon) || (0,
                c.W)(n)])
                  , a = o.element();
                return a.setAttribute("name", e),
                a.setAttribute("role", "button"),
                a.setAttribute("type", "button"),
                a.setAttribute("aria-expanded", "false"),
                a.setAttribute("aria-controls", t.el.id),
                "ontouchstart"in window || (o.tooltip = (0,
                h.i)(a, e, i)),
                o.ui.directSelect = !0,
                o
            }
        }
          , g = i(8518)
          , f = function(t) {
            function e(e, i, o, a, r) {
                var l;
                return void 0 === r && (r = d.qF),
                (l = t.call(this) || this).open = l.open.bind((0,
                n.Z)(l)),
                l.close = l.close.bind((0,
                n.Z)(l)),
                l.toggle = l.toggle.bind((0,
                n.Z)(l)),
                l.name = e,
                l.title = i || e,
                l.localizedPrevious = a.prev,
                l.isSubmenu = !!o,
                l.el = (0,
                s.az)(r(l.isSubmenu, e, l.title)),
                l.buttonContainer = l.el.querySelector(".jw-" + l.name + "-topbar-buttons"),
                l.children = {},
                l.openMenus = [],
                l.items = [],
                l.visible = !1,
                l.parentMenu = o,
                l.mainMenu = l.parentMenu ? l.parentMenu.mainMenu : (0,
                n.Z)(l),
                l.categoryButton = null,
                l.closeButton = l.mainMenu.closeButton,
                l.isSubmenu && (l.parentMenu.name === l.mainMenu.name && (l.categoryButton = l.createCategoryButton()),
                l.parentMenu.parentMenu && !l.mainMenu.backButton && (l.mainMenu.backButton = l.createBackButton(l.localizedPrevious)),
                l.itemsContainer = l.createItemsContainer(),
                l.parentMenu.appendMenu((0,
                n.Z)(l))),
                l
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.createItemsContainer = function() {
                var t = this
                  , e = this.el.querySelector(".jw-settings-submenu-items")
                  , i = this.mainMenu.closeButton && this.mainMenu.closeButton.element()
                  , n = this.mainMenu.backButton && this.mainMenu.backButton.element()
                  , o = this.categoryButton && this.categoryButton.element()
                  , r = new a.ZP(e);
                return r.on("keydown", (function(a) {
                    if (event.target.parentNode === e) {
                        var r, l = a.sourceEvent, c = a.target, u = t.topbar && t.topbar.firstChild, d = document.getElementsByClassName("jw-icon-settings")[0], h = o ? (0,
                        s.AH)(o) : i, w = o ? (0,
                        s.i3)(o) : n, g = (0,
                        s.AH)(c) || u || e.firstChild, f = (0,
                        s.i3)(c) || u || e.lastChild, j = l && (0,
                        p.ku)(l.key);
                        switch (j) {
                        case "Tab":
                            r = l.shiftKey ? w : h;
                            break;
                        case "Left":
                            r = w || t.close(a) && d;
                            break;
                        case "Up":
                            r = f;
                            break;
                        case "Right":
                            r = h;
                            break;
                        case "Down":
                            r = g;
                            break;
                        case "Esc":
                            r = d,
                            t.mainMenu.close(event)
                        }
                        r && r.focus(),
                        l.preventDefault(),
                        "Esc" !== j && l.stopPropagation()
                    }
                }
                )),
                r
            }
            ,
            i.createCategoryButton = function() {
                return w(this)
            }
            ,
            i.createBackButton = function(t) {
                var e = this
                  , i = (0,
                l.Z)("jw-settings-back", (function(t) {
                    var i = e.mainMenu.backButtonTarget;
                    i && i.open(t)
                }
                ), t, [(0,
                c.W)("arrow-left")]);
                return (0,
                s.SH)(this.mainMenu.topbar.el, i.element()),
                i
            }
            ,
            i.setBackButtonAriaLabel = function(t) {
                var e = this.mainMenu.backButton.element()
                  , i = t ? this.localizedPrevious + " - " + t : this.localizedPrevious;
                e.setAttribute("aria-label", i)
            }
            ,
            i.createTopbar = function() {
                var t = (0,
                s.az)('<div class="jw-reset jw-submenu-topbar"></div>')
                  , e = this.itemsContainer.el
                  , i = this.mainMenu
                  , n = this.categoryButton;
                return this.topbarUI = new a.ZP(t).on("keydown", (function(t) {
                    var o = t.sourceEvent
                      , a = function() {
                        n ? ((0,
                        s.i3)(n.element()).focus(),
                        o.preventDefault()) : i.backButton.element().focus()
                    }
                      , r = function() {
                        n ? ((0,
                        s.AH)(n.element()).focus(),
                        o.preventDefault()) : i.closeButton.element().focus()
                    };
                    switch ((0,
                    p.ku)(o.key)) {
                    case "Up":
                        e.lastChild.focus();
                        break;
                    case "Down":
                        e.firstChild.focus();
                        break;
                    case "Left":
                        a();
                        break;
                    case "Right":
                        r();
                        break;
                    case "Tab":
                        o.shiftKey ? a() : r()
                    }
                }
                )),
                (0,
                s.SH)(this.el, t),
                t
            }
            ,
            i.createItems = function(t, e, i, n) {
                var o = this;
                void 0 === i && (i = {}),
                void 0 === n && (n = u.k);
                var a, r = this.name;
                return t.map((function(t, l) {
                    var c, u, d;
                    switch (r) {
                    case "quality":
                        "Auto" === t.label && 0 === l ? (c = "" + i.defaultText,
                        d = ' <span class="jw-reset jw-auto-label"></span>') : c = t.label;
                        break;
                    case "captions":
                        c = "Off" !== t.label && "off" !== t.id || 0 !== l ? t.label : i.defaultText;
                        break;
                    case "playbackRates":
                        u = t,
                        c = (0,
                        g.t6)(i.tooltipText) ? "x" + t : t + "x";
                        break;
                    case "audioTracks":
                        c = t.name
                    }
                    c || (c = t,
                    "object" == typeof t && (c.options = i));
                    var p = new n(c,function(t) {
                        if (!p.active) {
                            if (p.deactivate) {
                                o.items.filter((function(t) {
                                    return !0 === t.active
                                }
                                )).forEach((function(t) {
                                    t.deactivate()
                                }
                                ));
                                var i = o.mainMenu.backButtonTarget;
                                i ? i.open(t) : o.mainMenu.close(t)
                            }
                            if (p.activate) {
                                if (p.el.classList.contains("jw-tab-focus"))
                                    return void a.activate();
                                p.activate(),
                                a = p
                            }
                            e(u || l)
                        }
                    }
                    .bind(o));
                    return d && p.el.appendChild((0,
                    s.az)(d)),
                    p
                }
                ))
            }
            ,
            i.setMenuItems = function(t, e) {
                var i = this;
                t ? (this.destroyItems(),
                t.forEach((function(t) {
                    i.items.push(t),
                    i.itemsContainer.el.appendChild(t.el)
                }
                )),
                e > -1 && this.items[e].activate(),
                this.categoryButton && this.categoryButton.show()) : this.removeMenu()
            }
            ,
            i.appendMenu = function(t) {
                if (t) {
                    var e = t.el
                      , i = t.name
                      , n = t.categoryButton;
                    if (this.children[i] = t,
                    n) {
                        var o = this.mainMenu.buttonContainer
                          , a = o.querySelector(".jw-settings-sharing")
                          , r = "quality" === i ? o.firstChild : a || this.closeButton.element();
                        o.insertBefore(n.element(), r)
                    }
                    this.mainMenu.el.appendChild(e),
                    this.mainMenu.trigger("menuAppended", i)
                }
            }
            ,
            i.removeMenu = function(t) {
                if (!t)
                    return this.parentMenu.removeMenu(this.name);
                var e = this.children[t];
                e && (delete this.children[t],
                e.destroy(),
                this.mainMenu.trigger("menuRemoved", t))
            }
            ,
            i.open = function(t) {
                if (!t || -1 !== t.sourceEvent.pointerId) {
                    var e, i = this.mainMenu.visible;
                    if (this.items.length) {
                        var n = t && t.sourceEvent
                          , o = n && "keydown" === n.type
                          , a = this.items.filter((function(t) {
                            return t.active
                        }
                        ));
                        if (a = a.length ? a[0].el : this.items[0].el,
                        !this.visible || this.openMenus.length) {
                            var r = this.mainMenu
                              , s = this.parentMenu
                              , l = this.categoryButton;
                            if (s.openMenus.push(this.name),
                            s.openMenus.length > 1 && s.closeChildren(this.name),
                            l && l.element().setAttribute("aria-expanded", "true"),
                            s.isSubmenu) {
                                s.el.classList.remove("jw-settings-submenu-active"),
                                r.topbar.el.classList.add("jw-nested-menu-open");
                                var c = r.topbar.el.querySelector(".jw-settings-topbar-text");
                                c.setAttribute("name", this.title),
                                c.innerText = this.title;
                                var u = s.title;
                                this.setBackButtonAriaLabel(u),
                                r.backButton.show(),
                                this.mainMenu.backButtonTarget = this.parentMenu,
                                this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !0),
                                e = c
                            } else
                                r.topbar.el.classList.remove("jw-nested-menu-open"),
                                r.backButton && r.backButton.hide(),
                                this.mainMenu.backButtonTarget && (this.mainMenu.backButtonTarget = null);
                            this.el.classList.add("jw-settings-submenu-active"),
                            i && o ? e = a : i || (r.open(t),
                            e = l.element(),
                            l && l.tooltip && !o && (l.tooltip.suppress = !0)),
                            this.openMenus.length && this.closeChildren(),
                            this.el.scrollTop = 0,
                            this.visible = !0,
                            this.el.setAttribute("aria-expanded", "true"),
                            e && setTimeout((function() {
                                e.focus()
                            }
                            ))
                        } else
                            this.items.length && o && a.focus()
                    }
                }
            }
            ,
            i.close = function(t) {
                var e = this;
                this.visible && (this.visible = !1,
                this.el.setAttribute("aria-expanded", "false"),
                this.el.classList.remove("jw-settings-submenu-active"),
                this.buttonContainer && this.buttonContainer.el.setAttribute("aria-expanded", !1),
                this.categoryButton && this.categoryButton.element().setAttribute("aria-expanded", "false"),
                this.parentMenu.openMenus = this.parentMenu.openMenus.filter((function(t) {
                    return t !== e.name
                }
                )),
                !this.mainMenu.openMenus.length && this.mainMenu.visible && this.mainMenu.close(t),
                this.openMenus.length && this.closeChildren())
            }
            ,
            i.closeChildren = function(t) {
                var e = this;
                this.openMenus.forEach((function(i) {
                    if (i !== t) {
                        var n = e.children[i];
                        n && n.close()
                    }
                }
                ))
            }
            ,
            i.toggle = function(t, e) {
                if (e && this.mainMenu.visible)
                    return this.mainMenu.close(t);
                this.visible ? this.close(t) : this.open(t)
            }
            ,
            i.destroyItems = function() {
                this.items.forEach((function(t) {
                    t.destroy()
                }
                )),
                this.items = []
            }
            ,
            i.destroy = function() {
                var t = this;
                Object.keys(this.children).map((function(e) {
                    t.children[e].destroy()
                }
                )),
                this.categoryButton && (this.parentMenu.buttonContainer.removeChild(this.categoryButton.element()),
                this.categoryButton.ui.destroy()),
                this.topbarUI && this.topbarUI.destroy(),
                this.destroyItems(),
                this.itemsContainer.destroy();
                var e = this.parentMenu.openMenus
                  , i = e.indexOf(this.name);
                e.length && i > -1 && this.openMenus.splice(i, 1),
                delete this.parentMenu,
                this.visible = !1,
                this.el.parentNode && this.el.parentNode.removeChild(this.el),
                this.off()
            }
            ,
            e
        }(r.ZP)
    },
    2810: function(t, e, i) {
        "use strict";
        i.d(e, {
            JU: function() {
                return c
            },
            MR: function() {
                return h
            },
            dt: function() {
                return w
            },
            ku: function() {
                return u
            }
        });
        var n, o, a = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "ff00ff", "#00ffff"], r = ["Arial", "Courier", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"], s = ["100%", "75%", "50%", "25%", "0%"], l = [100, 75, 50, 25, 0], c = function(t) {
            return [{
                name: "color",
                label: t.color,
                options: n || d(t),
                values: a,
                defaultVal: "#ffffff"
            }, {
                name: "fontOpacity",
                label: t.fontOpacity,
                options: ["100%", "75%", "50%", "25%"],
                values: [100, 75, 50, 25],
                defaultVal: 100
            }, {
                name: "userFontScale",
                label: t.userFontScale,
                options: ["200%", "175%", "150%", "125%", "100%", "75%", "50%"],
                values: [2, 1.75, 1.5, 1.25, 1, .75, .5],
                defaultVal: 1
            }, {
                name: "fontFamily",
                label: t.fontFamily,
                options: r,
                values: r,
                defaultVal: "Arial"
            }, {
                name: "edgeStyle",
                label: t.edgeStyle,
                options: o || p(t),
                values: ["none", "raised", "depressed", "uniform", "dropShadow"],
                defaultVal: "none"
            }, {
                name: "backgroundColor",
                label: t.backgroundColor,
                options: n || d(t),
                values: a,
                defaultVal: "#000000"
            }, {
                name: "backgroundOpacity",
                label: t.backgroundOpacity,
                options: s,
                values: l,
                defaultVal: 50
            }, {
                name: "windowColor",
                label: t.windowColor,
                options: n || d(t),
                values: a,
                defaultVal: "#000000"
            }, {
                name: "windowOpacity",
                label: t.windowOpacity,
                options: ["100%", "75%", "50%", "25%", "0%"],
                values: l,
                defaultVal: 0
            }]
        }, u = function(t) {
            return t && t.replace(/(Arrow|ape)/, "")
        }, d = function(t) {
            var e = t.white
              , i = t.black
              , o = t.red
              , a = t.green
              , r = t.blue
              , s = t.yellow
              , l = t.magenta
              , c = t.cyan;
            return n = [e, i, o, a, r, s, l, c]
        }, p = function(t) {
            var e = t.none
              , i = t.raised
              , n = t.depressed
              , a = t.uniform
              , r = t.dropShadow;
            return o = [e, i, n, a, r]
        };
        function h() {
            var t = this;
            this._destroyed || (this._destroyed = !0,
            Object.keys(this.children).forEach((function(e) {
                t.children[e].destroy()
            }
            )),
            this.children = {},
            this.model && (this.model.off(null, null, this),
            delete this.model),
            this.off())
        }
        function w(t, e) {
            t && e > -1 && (t.items.forEach((function(t) {
                t.deactivate()
            }
            )),
            t.items[e].activate())
        }
    },
    5349: function(t, e, i) {
        "use strict";
        i.d(e, {
            i: function() {
                return o
            }
        });
        var n = i(2799);
        function o(t, e, i, o, a) {
            var r = document.createElement("div");
            r.className = "jw-reset-text jw-tooltip jw-tooltip-" + e,
            r.setAttribute("dir", "auto");
            var s = document.createElement("div");
            s.className = "jw-text",
            r.appendChild(s),
            t.appendChild(r);
            var l = {
                dirty: !!i,
                opened: !1,
                text: i,
                touchEvent: !1,
                suppress: !1,
                open: function() {
                    l.touchEvent || (l.suppress ? l.suppress = !1 : (c(!0),
                    o && o()))
                },
                close: function() {
                    l.touchEvent || (c(!1),
                    a && a())
                },
                setText: function(t) {
                    t !== l.text && (l.text = t,
                    l.dirty = !0),
                    l.opened && c(!0)
                }
            }
              , c = function(t) {
                t && l.dirty && ((0,
                n.nh)(s, l.text),
                l.dirty = !1),
                l.opened = t,
                (0,
                n.og)(r, "jw-open", t)
            };
            return t.addEventListener("mouseover", l.open),
            t.addEventListener("focus", l.open),
            t.addEventListener("blur", l.close),
            t.addEventListener("mouseout", l.close),
            t.addEventListener("touchstart", (function() {
                l.touchEvent = !0
            }
            ), {
                passive: !0
            }),
            l
        }
    },
    4244: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return u
            }
        });
        var n = i(4578)
          , o = i(8348)
          , a = i(328)
          , r = i(5882)
          , s = i(1261)
          , l = i(2799)
          , c = function(t) {
            var e = (0,
            l.A8)(t)
              , i = window.pageXOffset;
            return i && o.OS.android && document.body.parentElement && document.body.parentElement.getBoundingClientRect().left >= 0 && (e.left -= i,
            e.right -= i),
            e
        }
          , u = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this) || this).className = e + " jw-background-color jw-reset",
                n.orientation = i,
                n
            }
            (0,
            n.Z)(e, t);
            var i = e.prototype;
            return i.setup = function() {
                var t, e;
                this.el = (0,
                l.az)((t = this.className,
                e = "jw-slider-" + this.orientation,
                void 0 === t && (t = ""),
                void 0 === e && (e = ""),
                '<div class="' + t + " " + e + ' jw-reset" aria-hidden="true"><div class="jw-slider-container jw-reset"><div class="jw-rail jw-reset"></div><div class="jw-buffer jw-reset"></div><div class="jw-progress jw-reset"></div><div class="jw-knob jw-reset"></div></div></div>')),
                this.elementRail = this.el.getElementsByClassName("jw-slider-container")[0],
                this.elementBuffer = this.el.getElementsByClassName("jw-buffer")[0],
                this.elementProgress = this.el.getElementsByClassName("jw-progress")[0],
                this.elementThumb = this.el.getElementsByClassName("jw-knob")[0],
                this.ui = new r.ZP(this.element(),{
                    preventScrolling: !0
                }).on("dragStart", this.dragStart, this).on("drag", this.dragMove, this).on("dragEnd", this.dragEnd, this).on("click", this.tap, this)
            }
            ,
            i.dragStart = function() {
                this.trigger("dragStart"),
                this.railBounds = c(this.elementRail)
            }
            ,
            i.dragEnd = function(t) {
                this.dragMove(t),
                this.trigger("dragEnd")
            }
            ,
            i.dragMove = function(t) {
                var e, i, n = this.railBounds = this.railBounds ? this.railBounds : c(this.elementRail);
                return "pointercancel" === t.sourceEvent.type || (i = "horizontal" === this.orientation ? (e = t.pageX) < n.left ? 0 : e > n.right ? 100 : 100 * (0,
                s.v)((e - n.left) / n.width, 0, 1) : (e = t.pageY) >= n.bottom ? 0 : e <= n.top ? 100 : 100 * (0,
                s.v)((n.height - (e - n.top)) / n.height, 0, 1),
                this.render(i),
                this.update(i)),
                !1
            }
            ,
            i.tap = function(t) {
                this.railBounds = c(this.elementRail),
                this.dragMove(t)
            }
            ,
            i.limit = function(t) {
                return t
            }
            ,
            i.update = function(t) {
                this.trigger("update", {
                    percentage: t
                })
            }
            ,
            i.render = function(t) {
                t = Math.max(0, Math.min(t, 100));
                var e = this.elementThumb
                  , i = this.elementProgress;
                "horizontal" === this.orientation ? (e.style.left = t + "%",
                i.style.width = t + "%") : (e.style.bottom = t + "%",
                i.style.height = t + "%")
            }
            ,
            i.updateBuffer = function(t) {
                this.elementBuffer.style.width = t + "%"
            }
            ,
            i.element = function() {
                return this.el
            }
            ,
            e
        }(a.ZP)
    },
    5635: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return k
            }
        });
        var n = i(7462)
          , o = i(4578)
          , a = i(6042)
          , r = i(1261)
          , s = i(974)
          , l = i(9888)
          , c = i(2799)
          , u = i(5882)
          , d = i(4244)
          , p = i(520)
          , h = i(6886)
          , w = i(7387)
          , g = i(8381)
          , f = i(1643)
          , j = function() {
            function t(t, e, i) {
                this.time = t,
                this.text = e,
                this.el = document.createElement("div");
                var n = "jw-cue jw-reset";
                i && "string" == typeof i && (n += " jw-cue-type-" + i),
                this.el.className = n
            }
            return t.prototype.align = function(t) {
                if ("%" === this.time.toString().slice(-1))
                    this.pct = this.time;
                else {
                    var e = this.time / t * 100;
                    this.pct = e + "%"
                }
                this.el.style.left = this.pct
            }
            ,
            t
        }()
          , m = {
            loadChapters: function(t) {
                (0,
                h.h)(t, this.chaptersLoaded.bind(this), this.chaptersFailed, {
                    plainText: !0
                })
            },
            chaptersLoaded: function(t) {
                var e = (0,
                w.Z)(t.responseText);
                if (Array.isArray(e)) {
                    var i = this._model.get("playlistItem") || {};
                    if (!i.chapters || !i.chapters.timestamps || !i.chapters.timestamps.length) {
                        var n = (0,
                        g._b)(e, i.chapters);
                        i.chapters = n,
                        this._model.set("playlistItem", i),
                        this._api.trigger(f.t6, n.timestamps[0])
                    }
                }
            },
            chaptersFailed: function() {},
            addCue: function(t) {
                this.cues.push(new j(t.begin,t.text,t.cueType))
            },
            drawCues: function() {
                var t = this
                  , e = this._model.get("duration");
                !e || e <= 0 || this.cues.forEach((function(i) {
                    i.align(e),
                    t.elementRail.appendChild(i.el)
                }
                ))
            },
            setActiveCue: function(t) {
                this.activeCue = this.cues.reduce((function(e, i) {
                    return t < i.time ? e : e ? i.time > e.time ? i : e : i
                }
                ), null)
            },
            resetCues: function() {
                this.cues.forEach((function(t) {
                    t.el.parentNode && t.el.parentNode.removeChild(t.el)
                }
                )),
                this.cues = []
            },
            updateChapter: function(t) {
                var e = (this._model.get("playlistItem") || {}).chapters;
                if (e && e.timestamps) {
                    var i = (0,
                    g.Mf)(t, e.timestamps);
                    i && i !== this.activeChapter && (this.activeChapter = i,
                    this._api.trigger(f.t6, i))
                }
            }
        };
        function v(t) {
            this.begin = t.begin,
            this.end = t.end,
            this.img = t.text
        }
        var b = {
            loadThumbnails: function(t) {
                t && (this.vttPath = t.split("?")[0].split("/").slice(0, -1).join("/"),
                this.individualImage = null,
                (0,
                h.h)(t, this.thumbnailsLoaded.bind(this), this.thumbnailsFailed.bind(this), {
                    plainText: !0
                }))
            },
            thumbnailsLoaded: function(t) {
                var e = (0,
                w.Z)(t.responseText);
                Array.isArray(e) && (e.forEach((function(t) {
                    this.thumbnails.push(new v(t))
                }
                ), this),
                this.drawCues(),
                this.showThumbnail(0))
            },
            thumbnailsFailed: function() {},
            chooseThumbnail: function(t) {
                var e = this.thumbnails
                  , i = (0,
                a.e1)(e, {
                    end: t
                }, (0,
                a.Cb)("end"));
                i >= e.length && (i = e.length - 1);
                var n = e[i].img;
                return n.indexOf("://") < 0 && (n = this.vttPath ? this.vttPath + "/" + n : n),
                n
            },
            loadThumbnail: function(t) {
                var e = this.chooseThumbnail(t)
                  , i = {
                    margin: "0 auto",
                    backgroundPosition: "0 0"
                };
                if (e.indexOf("#xywh") > 0)
                    try {
                        var n = /(.+)#xywh=(\d+),(\d+),(\d+),(\d+)/.exec(e);
                        if (!n)
                            throw new Error("No match for expected thumbnail pattern");
                        e = n[1];
                        var o = parseInt(n[2])
                          , r = parseInt(n[3]);
                        i.backgroundPosition = -1 * o + "px " + -1 * r + "px",
                        i.width = n[4],
                        this.timeTip.setWidth(+i.width),
                        i.height = n[5]
                    } catch (t) {
                        return
                    }
                else if (!this.individualImage) {
                    var s = this.individualImage = new Image;
                    s.onload = (0,
                    a.ak)((function() {
                        s.onload = null,
                        this.timeTip.image({
                            width: s.width,
                            height: s.height
                        }),
                        this.timeTip.setWidth(s.width)
                    }
                    ), this),
                    s.src = e
                }
                return i.backgroundImage = 'url("' + e + '")',
                i
            },
            showThumbnail: function(t) {
                this._model.get("containerWidth") <= 420 || !this.thumbnails || this.thumbnails.length < 1 || this.timeTip.image(this.loadThumbnail(t))
            },
            resetThumbnails: function() {
                this.timeTip.image({
                    backgroundImage: "",
                    width: 0,
                    height: 0
                }),
                this.thumbnails = []
            }
        }
          , y = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.setup = function() {
                this.textChapter = document.createElement("span"),
                this.textChapter.className = "jw-time-chapter jw-text jw-reset",
                this.textChapter.style.display = "none",
                this.textTime = document.createElement("span"),
                this.textTime.className = "jw-time-time jw-text jw-reset",
                this.img = document.createElement("div"),
                this.img.className = "jw-time-thumb jw-reset",
                this.containerWidth = 0,
                this.textLength = 0,
                this.dragJustReleased = !1;
                var t = document.createElement("div");
                t.className = "jw-time-tip jw-reset",
                t.appendChild(this.img),
                t.appendChild(this.textChapter),
                t.appendChild(this.textTime),
                this.addContent(t)
            }
            ,
            i.image = function(t) {
                (0,
                s.oB)(this.img, t)
            }
            ,
            i.update = function(t, e) {
                this.textTime && (this.textTime.textContent = t,
                e ? this.textChapter && (this.textChapter.textContent = e,
                this.textChapter.style.removeProperty("display")) : this.textChapter && (this.textChapter.style.display = "none",
                this.textChapter.textContent = ""))
            }
            ,
            i.getWidth = function() {
                return this.containerWidth || this.setWidth(),
                this.containerWidth
            }
            ,
            i.setWidth = function(t) {
                t ? this.containerWidth = t + 16 : this.tooltip && (this.containerWidth = (0,
                c.A8)(this.container).width + 16)
            }
            ,
            i.resetWidth = function() {
                this.containerWidth = 0
            }
            ,
            e
        }(p.Z);
        var x = function(t) {
            function e(e, i, o) {
                var r, s, l, c;
                return (r = t.call(this, "jw-slider-time", "horizontal") || this)._model = e,
                r._api = i,
                r.timeUpdateKeeper = o,
                r.timeTip = new y("jw-tooltip-time",null,!0),
                r.timeTip.setup(),
                r.cues = [],
                r.seekThrottled = (0,
                a.P2)(r.performSeek, 400),
                r._updateAriaTextLimitedThrottled = (s = (0,
                a.P2)(r.updateAriaText, 1e3),
                l = 4,
                c = 0,
                (0,
                n.Z)((function() {
                    if (++c < l) {
                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                            e[i] = arguments[i];
                        return s.apply(this, e)
                    }
                }
                ), {
                    reset: function() {
                        c = 0
                    },
                    shush: function() {
                        c = 1 / 0
                    }
                })),
                r.setup(),
                r
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.setup = function() {
                var e = this;
                t.prototype.setup.call(this),
                this._model.on("change:duration", this.onDuration, this).on("change:cues", this.updateCues, this).on("change:chapters", this.onChapters, this).on("seeked", (function() {
                    e._model.get("scrubbing") || (e._updateAriaTextLimitedThrottled.reset(),
                    e._updateAriaTextLimitedThrottled())
                }
                )),
                this._model.change("position", this.onPosition, this).change("buffer", this.onBuffer, this).change("streamType", this.onStreamType, this),
                this._model.player.change("playlistItem", this.onPlaylistItem, this);
                var i = this.el;
                (0,
                c.P$)(i, "tabindex", "0"),
                (0,
                c.P$)(i, "role", "slider"),
                (0,
                c.P$)(i, "aria-label", this._model.get("localization").slider),
                i.removeAttribute("aria-hidden"),
                this.elementRail.appendChild(this.timeTip.element()),
                this.ui = (this.ui || new u.ZP(i)).on("move drag", this.showTimeTooltip, this).on("dragEnd out", this.hideTimeTooltip, this).on("click", (function() {
                    return i.focus()
                }
                )).on("focus", (function() {
                    return e._updateAriaTextLimitedThrottled.reset()
                }
                )).on("blur", (function() {
                    return e._updateAriaTextLimitedThrottled.shush()
                }
                ))
            }
            ,
            i.update = function(e) {
                this.seekTo = e,
                this.seekThrottled(),
                t.prototype.update.apply(this, [e])
            }
            ,
            i.dragStart = function() {
                this._model.set("scrubbing", !0),
                t.prototype.dragStart.call(this)
            }
            ,
            i.dragEnd = function(e) {
                t.prototype.dragEnd.apply(this, [e]),
                this._model.set("scrubbing", !1)
            }
            ,
            i.onBuffer = function(t, e) {
                this.updateBuffer(e)
            }
            ,
            i.onPosition = function(t, e) {
                this.updateChapter(e),
                this.updateTime(e, t.get("duration"))
            }
            ,
            i.onDuration = function(t, e) {
                this.updateTime(t.get("position"), e),
                (0,
                c.P$)(this.el, "aria-valuemin", 0),
                (0,
                c.P$)(this.el, "aria-valuemax", Math.abs(e)),
                this.updateCues(null, t.getCues())
            }
            ,
            i.onStreamType = function(t, e) {
                this.streamType = e
            }
            ,
            i.onChapters = function() {
                this.updateCues(null, this._model.getCues())
            }
            ,
            i.updateTime = function(t, e) {
                var i = 0
                  , n = !!this._model.get("instreamMode");
                if (e)
                    if ("DVR" !== this.streamType || n)
                        "VOD" !== this.streamType && this.streamType && !n || (i = t / e * 100);
                    else {
                        var o = this._model.get("dvrSeekLimit")
                          , a = e + o;
                        i = (a - (t + o)) / a * 100
                    }
                this._updateAriaTextLimitedThrottled(),
                this.render(i)
            }
            ,
            i.onPlaylistItem = function(t, e) {
                this.reset();
                var i = t.getCues();
                !this.cues.length && i.length && this.updateCues(null, i);
                var n = e.tracks;
                (0,
                a.S6)(n, (function(t) {
                    t && t.kind && "thumbnails" === t.kind.toLowerCase() ? this.loadThumbnails(t.file) : t && t.kind && "chapters" === t.kind.toLowerCase() && this.loadChapters(t.file)
                }
                ), this)
            }
            ,
            i.performSeek = function() {
                var t, e = this.seekTo, i = this._model.get("duration");
                if (0 === i)
                    this._api.play({
                        reason: "interaction"
                    });
                else if ("DVR" === this.streamType) {
                    var n = this._model.get("seekRange") || {
                        start: 0
                    }
                      , o = this._model.get("dvrSeekLimit");
                    t = n.start + (-i - o) * e / 100,
                    this._api.seek(t, {
                        reason: "interaction"
                    })
                } else
                    t = e / 100 * i,
                    this._api.seek(Math.min(t, i - .25), {
                        reason: "interaction"
                    })
            }
            ,
            i.showTimeTooltip = function(t) {
                var e = this._model.get("duration");
                if (0 !== e) {
                    var i, n = this._model.get("containerWidth"), o = (0,
                    c.A8)(this.elementRail), a = t.pageX ? t.pageX - o.left : t.x, u = (a = (0,
                    r.v)(a, 0, o.width)) / o.width, d = e * u;
                    if (e < 0)
                        d = (e += this._model.get("dvrSeekLimit")) - (d = e * u);
                    var p = (0,
                    l.timeFormat)(d, !0)
                      , h = this.timeTip;
                    if (this.setActiveCue(d),
                    this.activeCue)
                        h.update(p, this.activeCue.text),
                        i = this.activeCue.text.length + p.length;
                    else {
                        var w = p;
                        e < 0 && d > -1 && (w = "Live"),
                        h.update(w),
                        i = w.length
                    }
                    this.textLength !== i && (this.textLength = i,
                    h.resetWidth()),
                    this.showThumbnail(d),
                    (0,
                    c.cn)(h.el, "jw-open");
                    var g = h.getWidth()
                      , f = n - o.width
                      , j = 0;
                    g > f && (j = (g - f) / 2);
                    var m = Math.round(4 * Math.min(o.width - j, Math.max(j, a))) / 4;
                    (0,
                    s.vs)(h.el, "translateX(" + m + "px)")
                }
            }
            ,
            i.hideTimeTooltip = function() {
                (0,
                c.IV)(this.timeTip.el, "jw-open")
            }
            ,
            i.updateCues = function(t, e) {
                var i = this;
                this.resetCues(),
                e && e.length && (e.forEach((function(t) {
                    i.addCue(t)
                }
                )),
                this.drawCues())
            }
            ,
            i.updateAriaText = function() {
                var t = this._model
                  , e = this.el
                  , i = t.get("position")
                  , n = t.get("duration");
                "DVR" === this.streamType && (i = (n = Math.abs(n)) + i);
                var o = (0,
                l.timeFormatAria)(i) + " of " + (0,
                l.timeFormatAria)(n);
                this.timeUpdateKeeper.textContent = o,
                (0,
                c.P$)(e, "aria-valuetext", o),
                (0,
                c.P$)(e, "aria-valuenow", i)
            }
            ,
            i.reset = function() {
                this.resetThumbnails(),
                this.timeTip.resetWidth(),
                this.textLength = 0,
                this._updateAriaTextLimitedThrottled.reset()
            }
            ,
            e
        }(d.Z);
        (0,
        n.Z)(x.prototype, m, b);
        var k = x
    },
    520: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return s
            }
        });
        var n = i(4578)
          , o = i(328);
        var a = i(2799)
          , r = i(4667)
          , s = function(t) {
            function e(e, i, n, o) {
                var a;
                (a = t.call(this) || this).el = document.createElement("div");
                var s, l, c = "jw-icon jw-icon-tooltip " + e + " jw-button-color jw-reset";
                return n || (c += " jw-hidden"),
                i && (s = a.el,
                l = i,
                s && l && (s.setAttribute("aria-label", l),
                s.setAttribute("role", "button"),
                s.setAttribute("tabindex", "0"))),
                a.el.className = c,
                a.tooltip = document.createElement("div"),
                a.tooltip.className = "jw-overlay jw-reset",
                a.openClass = "jw-open",
                a.componentType = "tooltip",
                a.el.appendChild(a.tooltip),
                o && o.length > 0 && Array.prototype.forEach.call(o, (function(t) {
                    "string" == typeof t ? a.el.appendChild((0,
                    r.Z)(t)) : a.el.appendChild(t)
                }
                )),
                a
            }
            (0,
            n.Z)(e, t);
            var i = e.prototype;
            return i.addContent = function(t) {
                this.content && this.removeContent(),
                this.content = t,
                this.tooltip.appendChild(t)
            }
            ,
            i.removeContent = function() {
                this.content && (this.tooltip.removeChild(this.content),
                this.content = null)
            }
            ,
            i.hasContent = function() {
                return !!this.content
            }
            ,
            i.element = function() {
                return this.el
            }
            ,
            i.openTooltip = function(t) {
                this.isOpen || (this.trigger("open-" + this.componentType, t, {
                    isOpen: !0
                }),
                this.isOpen = !0,
                (0,
                a.og)(this.el, this.openClass, this.isOpen))
            }
            ,
            i.closeTooltip = function(t) {
                this.isOpen && (this.trigger("close-" + this.componentType, t, {
                    isOpen: !1
                }),
                this.isOpen = !1,
                (0,
                a.og)(this.el, this.openClass, this.isOpen))
            }
            ,
            i.toggleOpenState = function(t) {
                this.isOpen ? this.closeTooltip(t) : this.openTooltip(t)
            }
            ,
            e
        }(o.ZP)
    },
    4576: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return A
            }
        });
        var n = i(7462)
          , o = i(8348)
          , a = i(1643)
          , r = i(7191)
          , s = i(8168)
          , l = i(5635)
          , c = i(7326)
          , u = i(4578)
          , d = i(520)
          , p = i(4244)
          , h = i(5882)
          , w = i(2799)
          , g = function(t) {
            function e(e, i, n) {
                var o, a = "jw-slider-volume";
                return "vertical" === e && (a += " jw-volume-tip"),
                (o = t.call(this, a, e) || this).setup(),
                o.element().classList.remove("jw-background-color"),
                (0,
                w.P$)(n, "tabindex", "0"),
                (0,
                w.P$)(n, "aria-label", i),
                (0,
                w.P$)(n, "aria-orientation", e),
                (0,
                w.P$)(n, "aria-valuemin", 0),
                (0,
                w.P$)(n, "aria-valuemax", 100),
                (0,
                w.P$)(n, "role", "slider"),
                o.uiOver = new h.ZP(n).on("click", (function() {}
                )),
                o
            }
            return (0,
            u.Z)(e, t),
            e
        }(p.Z)
          , f = function(t) {
            function e(e, i, n, o, a) {
                var r;
                (r = t.call(this, i, n, !0, o) || this)._model = e,
                r.horizontalContainer = a;
                var s = e.get("localization").volumeSlider;
                return r.horizontalSlider = new g("horizontal",s,a),
                r.verticalSlider = new g("vertical",s,r.tooltip),
                a.appendChild(r.horizontalSlider.element()),
                r.addContent(r.verticalSlider.element()),
                r.verticalSlider.on("update", (function(t) {
                    this.trigger("update", t)
                }
                ), (0,
                c.Z)(r)),
                r.horizontalSlider.on("update", (function(t) {
                    this.trigger("update", t)
                }
                ), (0,
                c.Z)(r)),
                r.horizontalSlider.uiOver.on("keydown", (function(t) {
                    var e = t.sourceEvent;
                    switch (e.keyCode) {
                    case 37:
                        e.stopPropagation(),
                        r.trigger("adjustVolume", -10);
                        break;
                    case 39:
                        e.stopPropagation(),
                        r.trigger("adjustVolume", 10)
                    }
                }
                )),
                r.ui = new h.ZP(r.el,{
                    directSelect: !0
                }).on("click", r.handleClick, (0,
                c.Z)(r)).on("enter", (function() {
                    return r.trigger("toggleValue")
                }
                )),
                r.addSliderHandlers(r.ui),
                r.addSliderHandlers(r.horizontalSlider.uiOver),
                r.addSliderHandlers(r.verticalSlider.uiOver),
                r._model.change("audioMode", r.updateSlider, (0,
                c.Z)(r)),
                r
            }
            (0,
            u.Z)(e, t);
            var i = e.prototype;
            return i.updateSlider = function(t, e) {
                var i = t.get("horizontalVolumeSlider") || e;
                (0,
                w.og)(this.element(), "jw-flag-horizontal-slider", !!i)
            }
            ,
            i.addSliderHandlers = function(t) {
                var e = this.openSlider
                  , i = this.closeSlider;
                t.on("over", e, this).on("out", i, this).on("focus", e, this).on("blur", i, this)
            }
            ,
            i.openSlider = function(e) {
                t.prototype.openTooltip.call(this, e),
                (0,
                w.og)(this.horizontalContainer, this.openClass, !0)
            }
            ,
            i.closeSlider = function(e) {
                t.prototype.closeTooltip.call(this, e),
                (0,
                w.og)(this.horizontalContainer, this.openClass, !1),
                this.horizontalContainer.blur()
            }
            ,
            i.handleClick = function(t) {
                o.OS.mobile ? this.toggleOpenState(t) : this.trigger("toggleValue")
            }
            ,
            i.destroy = function() {
                this.horizontalSlider.uiOver.destroy(),
                this.verticalSlider.uiOver.destroy(),
                this.ui.destroy()
            }
            ,
            e
        }(d.Z)
          , j = i(8165)
          , m = i(5349)
          , v = i(328)
          , b = i(2268)
          , y = i(9888)
          , x = i(6234)
          , k = i(5646);
        function C(t, e) {
            var i = document.createElement("div");
            return i.className = "jw-icon jw-icon-inline jw-text jw-reset " + t,
            e && (0,
            w.P$)(i, "role", e),
            i
        }
        function M(t) {
            var e = document.createElement("div");
            return e.className = "jw-reset " + t,
            e
        }
        function _(t, e) {
            if ("WebKitPlaybackTargetAvailabilityEvent"in window) {
                var i = (0,
                j.Z)("jw-icon-airplay jw-off", t, e.airplay, (0,
                r.o)("airplay-off,airplay-on"));
                return (0,
                m.i)(i.element(), "airplay", e.airplay),
                i
            }
            if (o.Browser.chrome && window.chrome) {
                var n = document.createElement("google-cast-launcher");
                (0,
                w.P$)(n, "tabindex", "-1"),
                n.className += " jw-reset";
                var a = (0,
                j.Z)("jw-icon-cast", null, e.cast);
                a.ui.off();
                var s = a.element();
                return s.style.cursor = "pointer",
                s.appendChild(n),
                a.button = n,
                (0,
                m.i)(s, "chromecast", e.cast),
                a
            }
        }
        function T(t, e, i) {
            if (!o.OS.mobile && "disabled" !== t && (o.Browser.chrome && !(0,
            b.yS)() || o.Browser.edge || o.Browser.safari)) {
                var n = (0,
                j.Z)("jw-icon-pip jw-off", e, i.pipIcon, (0,
                r.o)("pip-on,pip-off"));
                return (0,
                m.i)(n.element(), "pip", i.pipIcon),
                n
            }
        }
        function S(t, e) {
            return t.filter((function(t) {
                return !e.some((function(e) {
                    return e.id + e.btnClass === t.id + t.btnClass && t.callback === e.callback
                }
                ))
            }
            ))
        }
        var E = function(t, e) {
            e.forEach((function(e) {
                e.element && (e = e.element()),
                t.appendChild(e)
            }
            ))
        }
          , A = function() {
            function t(t, e, i) {
                var s = this;
                (0,
                n.Z)(this, v.ZP),
                this._api = t,
                this._model = e,
                this._isMobile = o.OS.mobile,
                this._volumeAnnouncer = i.querySelector(".jw-volume-update");
                var c, u, d, p = e.get("localization"), g = new l.Z(e,t,i.querySelector(".jw-time-update")), b = this.menus = [];
                this.ui = [];
                var y = ""
                  , S = p.volume;
                if (this._isMobile) {
                    if (!(e.get("sdkplatform") || o.OS.iOS && o.OS.version.major < 10)) {
                        var A = (0,
                        r.o)("volume-0,volume-100");
                        d = (0,
                        j.Z)("jw-icon-volume", (function() {
                            t.setMute()
                        }
                        ), S, A)
                    }
                } else {
                    (u = document.createElement("div")).className = "jw-horizontal-volume-container";
                    var I = (c = new f(e,"jw-icon-volume",S,(0,
                    r.o)("volume-0,volume-50,volume-100"),u)).element();
                    b.push(c),
                    (0,
                    w.P$)(I, "role", "group"),
                    e.change("mute", (function(t, e) {
                        var i = e ? p.unmute : p.mute;
                        (0,
                        w.P$)(I, "aria-label", i + " button")
                    }
                    ), this)
                }
                var P = (0,
                j.Z)("jw-icon-next", (function() {
                    t.next({
                        feedShownId: y,
                        reason: "interaction"
                    })
                }
                ), p.next, (0,
                r.o)("next"))
                  , z = (0,
                j.Z)("jw-icon-settings jw-settings-submenu-button", (function(t) {
                    s.trigger("settingsInteraction", "quality", !0, t)
                }
                ), p.settings, (0,
                r.o)("settings"));
                (0,
                w.P$)(z.element(), "aria-controls", "jw-settings-menu"),
                (0,
                w.P$)(z.element(), "aria-expanded", !1);
                var L = (0,
                j.Z)("jw-icon-cc jw-settings-submenu-button", (function(t) {
                    s.trigger("settingsInteraction", "captions", !1, t)
                }
                ), p.cc, (0,
                r.o)("cc-off,cc-on"));
                (0,
                w.P$)(L.element(), "aria-controls", "jw-settings-submenu-captions");
                var B = (0,
                j.Z)("jw-text-live", (function() {
                    s.goToLiveEdge()
                }
                ), p.liveBroadcast);
                B.element().textContent = p.liveBroadcast;
                var Z, V, F, R = this.elements = {
                    alt: (Z = "jw-text-alt",
                    V = "status",
                    F = document.createElement("span"),
                    F.className = "jw-text jw-reset-text " + Z,
                    V && (0,
                    w.P$)(F, "role", V),
                    (0,
                    w.P$)(F, "dir", "auto"),
                    F),
                    play: (0,
                    j.Z)("jw-icon-playback", (function() {
                        t.playToggle({
                            reason: "interaction"
                        })
                    }
                    ), p.play, (0,
                    r.o)("play,pause,stop")),
                    rewind: (0,
                    j.Z)("jw-icon-rewind", (function() {
                        s.rewind()
                    }
                    ), p.rewind, (0,
                    r.o)("rewind")),
                    live: B,
                    next: P,
                    elapsed: C("jw-text-elapsed", "timer"),
                    countdown: C("jw-text-countdown", "timer"),
                    time: g,
                    duration: C("jw-text-duration", "timer"),
                    mute: d,
                    volumetooltip: c,
                    horizontalVolumeContainer: u,
                    cast: _((function() {
                        t.castToggle()
                    }
                    ), p),
                    pip: T(e.get("pipIcon"), (function() {
                        t.setPip()
                    }
                    ), p),
                    imaFullscreen: (0,
                    j.Z)("jw-icon-fullscreen", (function() {
                        t.setFullscreen()
                    }
                    ), p.fullscreen, (0,
                    r.o)("fullscreen-off,fullscreen-on")),
                    fullscreen: (0,
                    j.Z)("jw-icon-fullscreen", (function() {
                        t.setFullscreen()
                    }
                    ), p.fullscreen, (0,
                    r.o)("fullscreen-off,fullscreen-on")),
                    spacer: M("jw-spacer"),
                    buttonContainer: M("jw-button-container"),
                    settingsButton: z,
                    captionsButton: L
                }, H = (0,
                m.i)(L.element(), "captions", p.cc), O = function(t) {
                    var e = t.get("captionsList")[t.get("captionsIndex")]
                      , i = p.cc;
                    e && "Off" !== e.label && (i = e.label),
                    H.setText(i)
                }, N = (0,
                m.i)(R.play.element(), "play", p.play);
                this.setPlayText = function(t) {
                    N.setText(t)
                }
                ;
                var q = R.next.element()
                  , U = (0,
                m.i)(q, "next", p.nextUp, (function() {
                    var t = e.get("nextUp");
                    t && (y = (0,
                    x.B)(x.F),
                    s.trigger("nextShown", {
                        mode: t.mode,
                        ui: "nextup",
                        itemsShown: [t],
                        feedData: t.feedData,
                        reason: "hover",
                        feedShownId: y
                    }))
                }
                ), (function() {
                    y = ""
                }
                ));
                (0,
                w.P$)(q, "dir", "auto"),
                (0,
                m.i)(R.rewind.element(), "rewind", p.rewind),
                (0,
                m.i)(R.settingsButton.element(), "settings", p.settings);
                var D = [(0,
                m.i)(R.fullscreen.element(), "fullscreen", p.fullscreen), (0,
                m.i)(R.imaFullscreen.element())];
                (0,
                w.cn)(R.imaFullscreen.element(), "jw-fullscreen-ima");
                var W = [R.play, R.rewind, R.next, R.volumetooltip, R.horizontalVolumeContainer, R.imaFullscreen, R.mute, R.alt, R.live, R.elapsed, R.countdown, R.duration, R.spacer, R.cast, R.captionsButton, R.settingsButton, R.pip, R.fullscreen].filter((function(t) {
                    return t
                }
                ))
                  , Q = [R.time, R.buttonContainer].filter((function(t) {
                    return t
                }
                ));
                this.el = document.createElement("div"),
                this.el.className = "jw-controlbar jw-reset",
                E(R.buttonContainer, W),
                E(this.el, Q);
                var $ = e.get("logo");
                if ($ && "control-bar" === $.position && this.addLogo($),
                R.play.show(),
                R.fullscreen.show(),
                R.imaFullscreen.show(),
                R.mute && R.mute.show(),
                R.pip && R.pip.show(),
                e.change("volume", this.onVolume, this),
                e.change("mute", (function(t, e) {
                    s.renderVolume(e, t.get("volume"))
                }
                ), this),
                e.change("state", this.onState, this),
                e.change("duration", this.onDuration, this),
                e.change("position", this.onElapsed, this),
                e.change("fullscreen", (function(t, e) {
                    for (var i = [s.elements.fullscreen.element(), s.elements.imaFullscreen.element()], n = 0; n < i.length; n++) {
                        var o = i[n];
                        (0,
                        w.og)(i[n], "jw-off", e);
                        var a = t.get("fullscreen") ? p.exitFullscreen : p.fullscreen;
                        D[n].setText(a),
                        (0,
                        w.P$)(o, "aria-label", a)
                    }
                }
                ), this),
                e.change("allowFullscreen", this.onAllowFullscreenToggle, this),
                e.change("pip", (function(t, e) {
                    s.elements.pip && (0,
                    w.og)(s.elements.pip.element(), "jw-off", e)
                }
                ), this),
                e.change("mediaType", (function(t, e) {
                    s.elements.pip && s.elements.pip.toggle("audio" !== e)
                }
                ), this),
                e.change("streamType", this.onStreamTypeChange, this),
                e.change("dvrLive", (function(t, e) {
                    var i = p.liveBroadcast
                      , n = p.notLive
                      , o = s.elements.live.element()
                      , a = !1 === e;
                    (0,
                    w.og)(o, "jw-dvr-live", a),
                    (0,
                    w.P$)(o, "aria-label", a ? n : i),
                    o.textContent = a ? n : i
                }
                ), this),
                e.change("altText", this.setAltText, this),
                e.change("customButtons", this.updateButtons, this),
                e.on("change:captionsIndex", O, this),
                e.on("change:captionsList", O, this),
                e.change("nextUp", (function(t, e) {
                    y = (0,
                    x.B)(x.F);
                    var i = p.nextUp;
                    e && e.title && (i += ": " + e.title),
                    U.setText(i),
                    R.next.toggle(!!e)
                }
                ), this),
                e.change("audioMode", this.onAudioMode, this),
                R.cast && (e.change("castAvailable", this.onCastAvailable, this),
                e.change("castActive", this.onCastActive, this)),
                R.volumetooltip && (R.volumetooltip.on("update", (function(t) {
                    var e = t.percentage;
                    this._api.setVolume(e)
                }
                ), this),
                R.volumetooltip.on("toggleValue", (function() {
                    this._api.setMute()
                }
                ), this),
                R.volumetooltip.on("adjustVolume", (function(t) {
                    this.trigger("adjustVolume", t)
                }
                ), this)),
                R.cast && R.cast.button) {
                    var Y = R.cast.ui.on("click enter", (function(t) {
                        "keydown" === t.type && R.cast.button.click(),
                        this._model.set("castClicked", !0)
                    }
                    ), this);
                    this.ui.push(Y)
                }
                var K = (0,
                k.Z)(R.duration, (function() {
                    if ("DVR" === this._model.get("streamType")) {
                        var t = this._model.get("position")
                          , e = this._model.get("dvrSeekLimit");
                        this._api.seek(Math.max(-e, t), {
                            reason: "interaction"
                        })
                    }
                }
                ), this);
                this.ui.push(K);
                var X = new h.ZP(this.el).on("click drag", (function() {
                    this.trigger(a.xf)
                }
                ), this);
                this.ui.push(X),
                b.forEach((function(t) {
                    t.on("open-tooltip", s.closeMenus, s)
                }
                ))
            }
            var e = t.prototype;
            return e.onVolume = function(t, e) {
                this.renderVolume(t.get("mute"), e)
            }
            ,
            e.renderVolume = function(t, e) {
                var i = this.elements.mute
                  , n = this.elements.volumetooltip;
                if (i && ((0,
                w.og)(i.element(), "jw-off", t),
                (0,
                w.og)(i.element(), "jw-full", !t)),
                n) {
                    var o = t ? 0 : e
                      , a = n.element();
                    n.verticalSlider.render(o),
                    n.horizontalSlider.render(o);
                    var r = n.tooltip
                      , s = n.horizontalContainer;
                    (0,
                    w.og)(a, "jw-off", t),
                    (0,
                    w.og)(a, "jw-full", e >= 75 && !t),
                    (0,
                    w.P$)(r, "aria-valuenow", o),
                    (0,
                    w.P$)(s, "aria-valuenow", o);
                    var l = "Volume " + o + "%";
                    (0,
                    w.P$)(r, "aria-valuetext", l),
                    (0,
                    w.P$)(s, "aria-valuetext", l),
                    document.activeElement !== r && document.activeElement !== s && (this._volumeAnnouncer.textContent = l)
                }
            }
            ,
            e.onCastAvailable = function(t, e) {
                this.elements.cast.toggle(e)
            }
            ,
            e.onCastActive = function(t, e) {
                this.elements.fullscreen.toggle(!e),
                this.elements.imaFullscreen.toggle(!e),
                this.elements.pip && this.elements.pip.toggle(!e),
                this.elements.cast.button && (0,
                w.og)(this.elements.cast.button, "jw-off", !e)
            }
            ,
            e.onElapsed = function(t, e) {
                var i, n, o = t.get("duration");
                if ("DVR" === t.get("streamType")) {
                    var a = Math.ceil(e)
                      , r = this._model.get("dvrSeekLimit");
                    i = n = a >= -r ? "" : "-" + (0,
                    y.timeFormat)(-(e + r)),
                    t.set("dvrLive", a >= -r)
                } else
                    i = (0,
                    y.timeFormat)(e),
                    n = (0,
                    y.timeFormat)(o - e);
                this.elements.elapsed.textContent = i,
                this.elements.countdown.textContent = n
            }
            ,
            e.onDuration = function(t, e) {
                this.elements.duration.textContent = (0,
                y.timeFormat)(Math.abs(e))
            }
            ,
            e.onAudioMode = function(t, e) {
                var i = this.elements.time.element();
                e ? this.elements.buttonContainer.insertBefore(i, this.elements.elapsed) : (0,
                w.SH)(this.el, i)
            }
            ,
            e.element = function() {
                return this.el
            }
            ,
            e.setAltText = function(t, e) {
                this.elements.alt.textContent = e
            }
            ,
            e.closeMenus = function(t) {
                this.menus.forEach((function(e) {
                    t && t.target === e.el || e.closeTooltip(t)
                }
                ))
            }
            ,
            e.rewind = function() {
                var t, e = 0, i = this._model.get("currentTime");
                i ? t = i - 10 : (t = this._model.get("position") - 10,
                "DVR" === this._model.get("streamType") && (e = this._model.get("duration"))),
                this._api.seek(Math.max(t, e), {
                    reason: "interaction"
                })
            }
            ,
            e.onState = function(t, e) {
                var i = t.get("localization")
                  , n = i.play;
                this.setPlayText(n),
                e === a.r0 && ("LIVE" !== t.get("streamType") ? (n = i.pause,
                this.setPlayText(n)) : (n = i.stop,
                this.setPlayText(n))),
                (0,
                w.P$)(this.elements.play.element(), "aria-label", n)
            }
            ,
            e.onAllowFullscreenToggle = function(t, e) {
                [this.elements.fullscreen.element(), this.elements.imaFullscreen.element()].forEach((function(t) {
                    (0,
                    w.og)(t, "jw-fullscreen-disallowed", !e)
                }
                ))
            }
            ,
            e.onStreamTypeChange = function(t, e) {
                var i = "LIVE" === e
                  , n = "DVR" === e;
                this.elements.rewind && this.elements.rewind.toggle(!i),
                this.elements.live.toggle(i || n),
                (0,
                w.P$)(this.elements.live.element(), "tabindex", i ? "-1" : "0"),
                this.elements.duration.style.display = n ? "none" : "",
                this.onDuration(t, t.get("duration")),
                this.onState(t, t.get("state"))
            }
            ,
            e.addLogo = function(t) {
                var e = this.elements.buttonContainer
                  , i = new s.Z(t.file,this._model.get("localization").logo,(function() {
                    t.link && (0,
                    w.nG)(t.link, "_blank", {
                        rel: "noreferrer"
                    })
                }
                ),"logo","jw-logo-button");
                t.link || (0,
                w.P$)(i.element(), "tabindex", "-1"),
                e.insertBefore(i.element(), e.querySelector(".jw-spacer").nextSibling)
            }
            ,
            e.goToLiveEdge = function() {
                if ("DVR" === this._model.get("streamType")) {
                    var t = Math.min(this._model.get("position"), -1)
                      , e = this._model.get("dvrSeekLimit");
                    this._api.seek(Math.max(-e, t), {
                        reason: "interaction"
                    }),
                    this._api.play({
                        reason: "interaction"
                    })
                }
            }
            ,
            e.updateButtons = function(t, e, i) {
                if (e) {
                    var n, o, a = this.elements.buttonContainer;
                    e !== i && i ? (n = S(e, i),
                    o = S(i, e),
                    this.removeButtons(a, o)) : n = e;
                    for (var r = n.length - 1; r >= 0; r--) {
                        var l = n[r]
                          , c = new s.Z(l.img,l.tooltip,l.callback,l.id,l.btnClass);
                        l.tooltip && (0,
                        m.i)(c.element(), l.id, l.tooltip);
                        var u = void 0;
                        "related" === c.id ? u = this.elements.settingsButton.element() : "share" === c.id ? u = a.querySelector('[button="related"]') || this.elements.settingsButton.element() : (u = this.elements.spacer.nextSibling) && "logo" === u.getAttribute("button") && (u = u.nextSibling),
                        a.insertBefore(c.element(), u)
                    }
                }
            }
            ,
            e.removeButtons = function(t, e) {
                for (var i = e.length; i--; ) {
                    var n = t.querySelector('[button="' + e[i].id + '"]');
                    n && t.removeChild(n)
                }
            }
            ,
            e.toggleCaptionsButtonState = function(t) {
                var e = this.elements.captionsButton;
                e && (0,
                w.og)(e.element(), "jw-off", !t)
            }
            ,
            e.destroy = function() {
                var t = this;
                this._model.off(null, null, this),
                Object.keys(this.elements).forEach((function(e) {
                    var i = t.elements[e];
                    i && "function" == typeof i.destroy && t.elements[e].destroy()
                }
                )),
                this.ui.forEach((function(t) {
                    t.destroy()
                }
                )),
                this.ui = []
            }
            ,
            t
        }()
    },
    4697: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return p
            }
        });
        var n = function(t, e) {
            return void 0 === t && (t = ""),
            void 0 === e && (e = ""),
            '<div class="jw-display-icon-container jw-display-icon-' + t + ' jw-reset"><div class="jw-icon jw-icon-' + t + ' jw-button-color jw-reset" role="button" tabindex="0" aria-label="' + e + '"></div></div>'
        }
          , o = i(5646)
          , a = function() {
            function t(t, e, i) {
                var n = i.querySelector(".jw-icon");
                this.el = i,
                this.ui = (0,
                o.Z)(n, (function() {
                    var i = t.get("position")
                      , n = t.get("duration")
                      , o = i - 10
                      , a = 0;
                    "DVR" === t.get("streamType") && (a = n),
                    e.seek(Math.max(o, a))
                }
                ))
            }
            return t.prototype.element = function() {
                return this.el
            }
            ,
            t
        }()
          , r = i(4578)
          , s = i(328)
          , l = i(2799)
          , c = function(t) {
            function e(e, i, n) {
                var a;
                a = t.call(this) || this;
                var r = e.get("localization")
                  , s = n.querySelector(".jw-icon");
                if (a.icon = s,
                a.el = n,
                a.ui = (0,
                o.Z)(s, (function(t) {
                    a.trigger(t.type)
                }
                )),
                e.on("change:state", (function(t, e) {
                    var i;
                    switch (e) {
                    case "buffering":
                        i = r.buffer;
                        break;
                    case "playing":
                        i = r.pause;
                        break;
                    case "idle":
                    case "paused":
                        i = r.playback;
                        break;
                    case "complete":
                        i = r.replay;
                        break;
                    default:
                        i = ""
                    }
                    "" !== i ? s.setAttribute("aria-label", i) : s.removeAttribute("aria-label")
                }
                )),
                e.get("displayPlaybackLabel")) {
                    var c = a.icon.getElementsByClassName("jw-idle-icon-text")[0];
                    c || (c = (0,
                    l.az)('<div class="jw-idle-icon-text">' + r.playback + "</div>"),
                    (0,
                    l.cn)(a.icon, "jw-idle-label"),
                    a.icon.appendChild(c))
                }
                return a
            }
            return (0,
            r.Z)(e, t),
            e.prototype.element = function() {
                return this.el
            }
            ,
            e
        }(s.ZP)
          , u = function() {
            function t(t, e, i) {
                var n = i.querySelector(".jw-icon");
                this.ui = (0,
                o.Z)(n, (function() {
                    e.next({
                        reason: "interaction"
                    })
                }
                )),
                t.change("nextUp", (function(t, e) {
                    i.style.visibility = e ? "" : "hidden"
                }
                )),
                this.el = i
            }
            return t.prototype.element = function() {
                return this.el
            }
            ,
            t
        }()
          , d = i(7191)
          , p = function() {
            function t(t, e) {
                var i;
                this.el = (0,
                l.az)((i = t.get("localization"),
                '<div class="jw-display jw-reset"><div class="jw-display-container jw-reset"><div class="jw-display-controls jw-reset">' + n("rewind", i.rewind) + n("display", i.playback) + n("next", i.next) + "</div></div></div>"));
                var o = this.el.querySelector(".jw-display-controls")
                  , r = {};
                h("rewind", (0,
                d.o)("rewind"), a, o, r, t, e),
                h("display", (0,
                d.o)("play,pause,buffer,replay"), c, o, r, t, e),
                h("next", (0,
                d.o)("next"), u, o, r, t, e),
                this.container = o,
                this.buttons = r
            }
            var e = t.prototype;
            return e.element = function() {
                return this.el
            }
            ,
            e.destroy = function() {
                var t = this.buttons;
                Object.keys(t).forEach((function(e) {
                    t[e].ui && t[e].ui.destroy()
                }
                ))
            }
            ,
            t
        }();
        function h(t, e, i, n, o, a, r) {
            var s = n.querySelector(".jw-display-icon-" + t)
              , l = n.querySelector(".jw-icon-" + t);
            e.forEach((function(t) {
                l.appendChild(t)
            }
            )),
            o[t] = new i(a,r,s)
        }
    },
    7191: function(t, e, i) {
        "use strict";
        i.d(e, {
            W: function() {
                return st
            },
            o: function() {
                return lt
            }
        });
        var n = i(147)
          , o = i.n(n)
          , a = i(4886)
          , r = i.n(a)
          , s = i(4777)
          , l = i.n(s)
          , c = i(6084)
          , u = i.n(c)
          , d = i(2521)
          , p = i.n(d)
          , h = i(6207)
          , w = i.n(h)
          , g = i(6641)
          , f = i.n(g)
          , j = i(3498)
          , m = i.n(j)
          , v = i(3918)
          , b = i.n(v)
          , y = i(3356)
          , x = i.n(y)
          , k = i(8157)
          , C = i.n(k)
          , M = i(5806)
          , _ = i.n(M)
          , T = i(7766)
          , S = i.n(T)
          , E = i(4851)
          , A = i.n(E)
          , I = i(3207)
          , P = i.n(I)
          , z = i(7938)
          , L = i.n(z)
          , B = i(4060)
          , Z = i.n(B)
          , V = i(4119)
          , F = i.n(V)
          , R = i(9992)
          , H = i.n(R)
          , O = i(6038)
          , N = i.n(O)
          , q = i(5058)
          , U = i.n(q)
          , D = i(7459)
          , W = i.n(D)
          , Q = i(4606)
          , $ = i.n(Q)
          , Y = i(1438)
          , K = i.n(Y)
          , X = i(5147)
          , J = i.n(X)
          , G = i(9863)
          , tt = i.n(G)
          , et = i(2494)
          , it = i.n(et)
          , nt = i(8675)
          , ot = i.n(nt)
          , at = i(4667)
          , rt = null;
        function st(t) {
            var e = dt().querySelector(ct(t));
            return e ? ut(e) : null
        }
        function lt(t) {
            var e = dt().querySelectorAll(t.split(",").map(ct).join(","));
            return Array.prototype.map.call(e, (function(t) {
                return ut(t)
            }
            ))
        }
        function ct(t) {
            return ".jw-svg-icon-" + t
        }
        function ut(t) {
            return t.cloneNode(!0)
        }
        function dt() {
            return rt || (rt = (0,
            at.Z)("<xml>" + o() + r() + l() + u() + p() + w() + f() + m() + b() + x() + C() + _() + S() + A() + P() + L() + Z() + F() + H() + N() + U() + K() + J() + W() + $() + tt() + it() + ot() + "</xml>")),
            rt
        }
    },
    3163: function(t, e, i) {
        "use strict";
        i.d(e, {
            Ge: function() {
                return a
            },
            dr: function() {
                return s
            },
            v2: function() {
                return r
            }
        });
        var n = i(4060)
          , o = i.n(n)
          , a = function(t) {
            return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" dir="auto">' + t + "</button>"
        }
          , r = function(t) {
            var e = t.label;
            return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + e + '" aria-controls="jw-settings-submenu-' + t.name + '" aria-expanded="false" dir="auto">' + e + "<div class='jw-reset jw-settings-value-wrapper'><div class=\"jw-reset-text jw-settings-content-item-value\">" + t.currentSelection + '</div><div class="jw-reset-text jw-settings-content-item-arrow">' + o() + "</div></div></button>"
        }
          , s = function(t) {
            return '<button type="button" class="jw-reset-text jw-settings-content-item" aria-label="' + t + '" role="menuitem" aria-checked="false" dir="auto">' + t + "</button>"
        }
    },
    7509: function(t, e, i) {
        "use strict";
        i.d(e, {
            E6: function() {
                return o
            },
            Z2: function() {
                return a
            },
            qF: function() {
                return n
            }
        });
        var n = function(t, e) {
            return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu" class="jw-reset jw-settings-menu" aria-expanded="false"><div class="jw-reset jw-settings-topbar"><div class="jw-reset jw-settings-topbar-text" tabindex="0"></div><div class="jw-reset jw-settings-topbar-buttons"></div></div></div>'
        }
          , o = function(t, e) {
            return t ? '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu jw-settings-submenu-' + e + '" role="menu" aria-expanded="false"><div class="jw-reset jw-settings-submenu-items"></div></div>' : '<div id="jw-settings-menu-tizen" class="jw-reset jw-settings-menu-tizen" aria-expanded="false"></div>'
        }
          , a = function(t, e, i) {
            return '<div id="jw-settings-submenu-' + e + '" class="jw-reset jw-settings-submenu-tizen jw-settings-submenu-' + e + '"><div class="jw-reset jw-reset-text jw-settings-topbar-text">' + i + '</div><div class="jw-reset jw-settings-submenu-items"></div></div>'
        }
    },
    5187: function(t, e, i) {
        "use strict";
        var n = i(974)
          , o = i(2799)
          , a = i(8348)
          , r = function() {
            function t(t) {
                this.model = t.player,
                this.truncated = t.get("__ab_truncated") && !a.Browser.ie
            }
            var e = t.prototype;
            return e.hide = function() {
                (0,
                n.oB)(this.el, {
                    display: "none"
                })
            }
            ,
            e.show = function() {
                (0,
                n.oB)(this.el, {
                    display: ""
                })
            }
            ,
            e.setup = function(t) {
                if (this.el = t,
                this.el) {
                    var e = this.el.getElementsByTagName("div");
                    this.title = e[0],
                    this.description = e[1],
                    this.truncated && this.el.classList.add("jw-ab-truncated"),
                    this.model.on("change:logoWidth", this.update, this),
                    this.model.change("playlistItem", this.playlistItem, this)
                }
            }
            ,
            e.update = function(t) {
                var e = {}
                  , i = t.get("logo");
                if (i) {
                    var o = 1 * parseInt(("" + i.margin).replace("px", ""))
                      , a = t.get("logoWidth") + (isNaN(o) ? 0 : o + 10);
                    "top-left" === i.position ? e.paddingLeft = a : "top-right" === i.position && (e.paddingRight = a)
                }
                (0,
                n.oB)(this.el, e)
            }
            ,
            e.playlistItem = function(t, e) {
                if (e)
                    if (t.get("displaytitle") || t.get("displaydescription")) {
                        var i = ""
                          , n = "";
                        "string" == typeof e.title && t.get("displaytitle") && (i = e.title),
                        "string" == typeof e.description && t.get("displaydescription") && (n = e.description),
                        this.updateText(i, n)
                    } else
                        this.hide()
            }
            ,
            e.updateText = function(t, e) {
                this.title && this.description && ((0,
                o.nh)(this.title, (0,
                o.Ww)(t)),
                (0,
                o.nh)(this.description, (0,
                o.Ww)(e)),
                this.title.firstChild || this.description.firstChild ? this.show() : this.hide())
            }
            ,
            e.element = function() {
                return this.el
            }
            ,
            t
        }();
        e.Z = r
    },
    5646: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return o
            }
        });
        var n = i(5882);
        function o(t, e, i) {
            return new n.ZP(t).on("click enter", e, i)
        }
    },
    6436: function(t, e, i) {
        "use strict";
        i.d(e, {
            d: function() {
                return a
            },
            i: function() {
                return o
            }
        });
        var n = i(2799);
        function o(t) {
            var e = -1;
            return t >= 1280 ? e = 7 : t >= 960 ? e = 6 : t >= 800 ? e = 5 : t >= 640 ? e = 4 : t >= 540 ? e = 3 : t >= 420 ? e = 2 : t >= 320 ? e = 1 : t >= 250 && (e = 0),
            e
        }
        function a(t, e) {
            var i = "jw-breakpoint-" + e;
            (0,
            n.L_)(t, /jw-breakpoint--?\d+/, i)
        }
    },
    8446: function(t, e, i) {
        "use strict";
        i.d(e, {
            FM: function() {
                return a
            },
            Sf: function() {
                return s
            },
            xq: function() {
                return r
            }
        });
        var n = i(2957)
          , o = i(974);
        function a(t) {
            return t.replace(/^(.*\/)?(.*)-?.*\.(css).*$/, "$2")
        }
        function r(t) {
            t || (t = {});
            var e = t.active
              , i = t.inactive
              , n = t.background
              , o = {};
            return o.controlbar = function(t) {
                if (t || e || i || n) {
                    var o = {};
                    return t = t || {},
                    o.iconsActive = t.iconsActive || e,
                    o.icons = t.icons || i,
                    o.text = t.text || i,
                    o.background = t.background || n,
                    o
                }
            }(t.controlbar),
            o.timeslider = function(t) {
                if (t || e) {
                    var i = {};
                    return t = t || {},
                    i.progress = t.progress || e,
                    i.rail = t.rail,
                    i
                }
            }(t.timeslider),
            o.menus = function(t) {
                if (t || e || i || n) {
                    var o = {};
                    return t = t || {},
                    o.text = t.text || i,
                    o.textActive = t.textActive || e,
                    o.background = t.background || n,
                    o
                }
            }(t.menus),
            o.tooltips = function(t) {
                if (t || i || n) {
                    var e = {};
                    return t = t || {},
                    e.text = t.text || i,
                    e.background = t.background || n,
                    e
                }
            }(t.tooltips),
            o
        }
        function s(t, e) {
            var i;
            e && (e.controlbar && function(e) {
                a([".jw-controlbar .jw-icon-inline.jw-text", ".jw-title-primary", ".jw-title-secondary"], "color", e.text),
                e.icons && (a([".jw-button-color:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:not(.jw-icon-cast)"], "color", e.icons),
                a([".jw-display-icon-container .jw-button-color"], "color", e.icons),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off", "{--disconnected-color: " + e.icons + "}", t));
                e.iconsActive && (a([".jw-display-icon-container .jw-button-color:hover", ".jw-display-icon-container .jw-button-color:focus"], "color", e.iconsActive),
                a([".jw-button-color.jw-toggle:not(.jw-icon-cast)", ".jw-button-color:hover:not(.jw-icon-cast)", ".jw-button-color:focus:not(.jw-icon-cast)", ".jw-button-color.jw-toggle.jw-off:hover:not(.jw-icon-cast)"], "color", e.iconsActive),
                a([".jw-svg-icon-buffer"], "fill", e.icons),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher.jw-off", "{--disconnected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher.jw-off:focus", "{--disconnected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast google-cast-launcher:focus", "{--connected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:hover google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t),
                (0,
                o.iv)("#" + t + " .jw-icon-cast:focus google-cast-launcher", "{--connected-color: " + e.iconsActive + "}", t));
                a([" .jw-settings-topbar", ":not(.jw-state-idle) .jw-controlbar", ".jw-flag-audio-player .jw-controlbar"], "background", e.background, !0)
            }(e.controlbar),
            e.timeslider && function(t) {
                var e = t.progress;
                "none" !== e && (a([".jw-progress", ".jw-knob"], "background-color", e),
                a([".jw-buffer"], "background-color", (0,
                o.HY)(e, 50)));
                a([".jw-rail"], "background-color", t.rail),
                a([".jw-background-color.jw-slider-time", ".jw-slider-time .jw-cue"], "background-color", t.background)
            }(e.timeslider),
            e.menus && (a([".jw-option", ".jw-toggle.jw-off", ".jw-skip .jw-skip-icon", ".jw-nextup-tooltip", ".jw-nextup-close", ".jw-settings-content-item", ".jw-related-title"], "color", (i = e.menus).text),
            a([".jw-option.jw-active-option", ".jw-option:not(.jw-active-option):hover", ".jw-option:not(.jw-active-option):focus", ".jw-settings-content-item:hover", ".jw-nextup-tooltip:hover", ".jw-nextup-tooltip:focus", ".jw-nextup-close:hover"], "color", i.textActive),
            a([".jw-nextup", ".jw-settings-menu"], "background", i.background)),
            e.tooltips && function(t) {
                a([".jw-skip", ".jw-tooltip .jw-text", ".jw-time-tip .jw-text"], "background-color", t.background),
                a([".jw-time-tip", ".jw-tooltip"], "color", t.background),
                a([".jw-skip"], "border", "none"),
                a([".jw-skip .jw-text", ".jw-skip .jw-icon", ".jw-time-tip .jw-text", ".jw-tooltip .jw-text"], "color", t.text)
            }(e.tooltips),
            e.menus && function(e) {
                if (e.textActive) {
                    var i = {
                        color: e.textActive,
                        borderColor: e.textActive,
                        stroke: e.textActive
                    };
                    (0,
                    o.iv)("#" + t + " .jw-color-active", i, t),
                    (0,
                    o.iv)("#" + t + " .jw-color-active-hover:hover", i, t)
                }
                if (e.text) {
                    var n = {
                        color: e.text,
                        borderColor: e.text,
                        stroke: e.text
                    };
                    (0,
                    o.iv)("#" + t + " .jw-color-inactive", n, t),
                    (0,
                    o.iv)("#" + t + " .jw-color-inactive-hover:hover", n, t)
                }
            }(e.menus));
            function a(e, i, a, r) {
                if (a) {
                    e = (0,
                    n.O4)(e, "#" + t + (r ? "" : " "));
                    var s = {};
                    s[i] = a,
                    (0,
                    o.iv)(e.join(", "), s, t)
                }
            }
        }
    },
    8151: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            default: function() {
                return qe
            }
        });
        var n = i(1918)
          , o = i(1643)
          , a = i(7462)
          , r = i(6391)
          , s = i(623)
          , l = i(5191)
          , c = ["notVisible", "always", "never"];
        var u = i(9128)
          , d = i(7263)
          , p = i(8320)
          , h = i(658)
          , w = i(2957)
          , g = i(328)
          , f = i(3144)
          , j = i(4578)
          , m = i(2303)
          , v = i(7326)
          , b = function() {
            function t(t) {
                this.callback = t
            }
            var e = t.prototype;
            return e.async = function() {
                for (var t = this, e = arguments.length, i = new Array(e), n = 0; n < e; n++)
                    i[n] = arguments[n];
                return Promise.resolve().then((function() {
                    if (null !== t.callback)
                        return t.callback.apply(t, i)
                }
                ))
            }
            ,
            e.cancel = function() {
                this.callback = null
            }
            ,
            e.cancelled = function() {
                return null === this.callback
            }
            ,
            t
        }();
        function y(t) {
            return new b(t)
        }
        var x = i(4446)
          , k = i(6042);
        function C(t, e) {
            var i = this.mediaModel
              , n = (0,
            a.Z)({}, e, {
                type: t
            });
            switch (t) {
            case o.oZ:
                if (i.get(o.oZ) === n.mediaType)
                    return;
                i.set(o.oZ, n.mediaType);
                break;
            case o.ug:
                return void i.set(o.ug, (0,
                a.Z)({}, e));
            case o.gy:
                if (e[o.gy] === this.model.getMute())
                    return;
                break;
            case o.uc:
                var r = e.newstate;
                r === o.bc && (this.thenPlayPromise.cancel(),
                i.srcReset());
                var s = i.attributes.mediaState;
                i.attributes.mediaState = r,
                i.trigger("change:mediaState", i, r, s);
                break;
            case o.Ms:
                return this.beforeComplete = !0,
                this.trigger(o.s$, n),
                void (this.attached && !this.background && this._playbackComplete());
            case o.Ew:
                i.get("setup") ? (this.thenPlayPromise.cancel(),
                i.srcReset()) : (t = o.cM,
                n.code += 1e5);
                break;
            case o.rx:
                var l = e
                  , c = l.duration
                  , u = l.metadataType
                  , d = l.seekRange;
                u || (n.metadataType = "unknown"),
                (0,
                k.qh)(c) && (i.set("seekRange", d),
                i.set("duration", c));
                break;
            case o.uT:
                i.set("buffer", e.bufferPercent);
            case o.R2:
                var p = e;
                i.set("seekRange", p.seekRange),
                i.set("position", p.position),
                i.set("currentTime", p.currentTime);
                var h = p.duration;
                (0,
                k.qh)(h) && i.set("duration", h),
                t === o.R2 && "starttime"in this.item && delete this.item.starttime;
                break;
            case o.aQ:
                var w = this.mediaElement;
                w && w.paused && i.set("mediaState", "paused");
                break;
            case o.UZ:
                i.set(o.UZ, e.levels);
            case o.aM:
                var g = e
                  , f = g.currentQuality
                  , j = g.levels;
                f > -1 && j.length > 1 && i.set("currentLevel", parseInt(f));
                break;
            case o.j0:
                i.set(o.j0, e.tracks);
            case o._B:
                var m = e
                  , v = m.currentTrack
                  , b = m.tracks;
                v > -1 && b.length > 0 && v < b.length && i.set("currentAudioTrack", parseInt(v))
            }
            this.trigger(t, n)
        }
        function M(t, e) {
            var i = this.model;
            switch (t) {
            case o.uc:
                return;
            case o.yH:
                return void i.set(o.yH, e[o.yH]);
            case o.gy:
                return void i.set(o.gy, e[o.gy]);
            case o.TJ:
                return void i.set("playbackRate", e.playbackRate);
            case o.rx:
                (0,
                a.Z)(i.get("itemMeta"), e.metadata);
                break;
            case o.aM:
                i.persistQualityLevel(e.currentQuality, e.levels);
                break;
            case o.UF:
                i.persistVideoSubtitleTrack(e.currentTrack, e.tracks);
                break;
            case o.R2:
                e.targetLatency && i.set("dvrSeekLimit", e.targetLatency);
            case o.NZ:
            case o.aQ:
            case o.h7:
            case o.jt:
            case "subtitlesTracksData":
                i.trigger(t, e);
                break;
            case o.qG:
                return void i.persistBandwidthEstimate(e.bandwidthEstimate)
            }
            this.trigger(t, e)
        }
        var _ = i(8348)
          , T = i(7753)
          , S = i(9918)
          , E = i(8381)
          , A = function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).providerController = null,
                e._provider = null,
                e.addAttributes({
                    mediaModel: new P,
                    minDvrWindow: S.ni,
                    dvrSeekLimit: S.OG
                }),
                e
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.setup = function(t) {
                return t = t || {},
                this._normalizeConfig(t),
                (0,
                a.Z)(this.attributes, t, S.bv),
                this.providerController = new m.Z(this.getConfiguration()),
                this.setAutoStart(),
                this
            }
            ,
            i.getConfiguration = function() {
                var t = this.clone()
                  , e = t.mediaModel.attributes;
                return Object.keys(S.L4).forEach((function(i) {
                    t[i] = e[i]
                }
                )),
                t.instreamMode = !!t.instream,
                delete t.instream,
                delete t.mediaModel,
                t
            }
            ,
            i.persistQualityLevel = function(t, e) {
                var i = e[t] || {}
                  , n = i.label
                  , o = (0,
                k.qh)(i.bitrate) ? i.bitrate : null;
                this.set("bitrateSelection", o),
                this.set("qualityLabel", n)
            }
            ,
            i.setActiveItem = function(t) {
                var e = this.get("playlist")[t];
                this.resetItem(e),
                this.attributes.playlistItem = null,
                this.set("item", t),
                this.set("minDvrWindow", e.minDvrWindow),
                this.set("dvrSeekLimit", e.dvrSeekLimit || S.OG),
                this.set("playlistItem", e)
            }
            ,
            i.setMediaModel = function(t) {
                this.mediaModel && this.mediaModel !== t && this.mediaModel.off(),
                t = t || new P,
                this.mediaModel = t,
                function(t) {
                    var e = t.get("mediaState");
                    t.trigger("change:mediaState", t, e, e)
                }(t)
            }
            ,
            i.destroy = function() {
                this.attributes._destroyed = !0,
                this.off(),
                this._provider && (this._provider.off(null, null, this),
                this._provider.destroy(),
                this._provider = null),
                this.mediaModel && this.mediaModel.off(),
                this.providerController = null
            }
            ,
            i.getVideo = function() {
                return this._provider
            }
            ,
            i.setFullscreen = function(t) {
                (t = !!t) !== this.get("fullscreen") && this.set("fullscreen", t)
            }
            ,
            i.getProviders = function() {
                return this.providerController
            }
            ,
            i.setVolume = function(t) {
                if ((0,
                k.qh)(t)) {
                    var e = Math.min(Math.max(0, t), 100);
                    this.set("volume", e);
                    var i = 0 === e;
                    i !== this.getMute() && this.setMute(i)
                }
            }
            ,
            i.getMute = function() {
                return this.get("autostartMuted") || this.get("mute")
            }
            ,
            i.setMute = function(t) {
                if (void 0 === t && (t = !this.getMute()),
                this.set("mute", !!t),
                !t) {
                    var e = Math.max(10, this.get("volume"));
                    this.set("autostartMuted", !1),
                    this.setVolume(e)
                }
            }
            ,
            i.setStreamType = function(t) {
                this.set("streamType", t),
                "LIVE" === t && this.setPlaybackRate(1)
            }
            ,
            i.setProvider = function(t) {
                this._provider = t,
                I(this, t)
            }
            ,
            i.resetProvider = function() {
                this._provider = null,
                this.set("provider", void 0)
            }
            ,
            i.setPlaybackRate = function(t) {
                (0,
                k.hj)(t) && (t = Math.max(Math.min(t, 4), .25),
                "LIVE" === this.get("streamType") && (t = 1),
                this.set("defaultPlaybackRate", t),
                this._provider && this._provider.setPlaybackRate && this._provider.setPlaybackRate(t))
            }
            ,
            i.persistCaptionsTrack = function() {
                var t = this.get("captionsTrack");
                t ? this.set("captionLabel", t.name) : this.set("captionLabel", "Off")
            }
            ,
            i.setVideoSubtitleTrack = function(t, e) {
                this.set("captionsIndex", t),
                t && e && t <= e.length && e[t - 1].data && this.set("captionsTrack", e[t - 1])
            }
            ,
            i.persistVideoSubtitleTrack = function(t, e) {
                this.setVideoSubtitleTrack(t, e),
                this.persistCaptionsTrack()
            }
            ,
            i.setAutoStart = function(t) {
                void 0 !== t && this.set("autostart", t);
                var e = !(!_.OS.mobile || !this.get("autostart"));
                this.set("playOnViewable", e || "viewable" === this.get("autostart"))
            }
            ,
            i.setCues = function(t) {
                var e = this.get("playlistItem");
                e.chapters = (0,
                E._b)(t, e.chapters);
                var i = t.filter((function(t) {
                    return "chapters" !== t.cueType
                }
                ));
                this.set("cues", i),
                this.set("playlistItem", e),
                this.trigger("change:chapters", this)
            }
            ,
            i.getCues = function() {
                var t = this.get("playlistItem").chapters
                  , e = (0,
                E.$W)(t);
                return (this.get("cues") || []).concat(e)
            }
            ,
            i.resetItem = function(t) {
                var e = t ? (0,
                w.m9)(t.starttime) : 0
                  , i = t ? (0,
                w.m9)(t.duration) : 0
                  , n = this.mediaModel;
                this.set("playRejected", !1),
                this.attributes.itemMeta = {},
                n.set("position", e),
                n.set("currentTime", 0),
                n.set("duration", i)
            }
            ,
            i.persistBandwidthEstimate = function(t) {
                (0,
                k.qh)(t) && this.set("bandwidthEstimate", t)
            }
            ,
            i._normalizeConfig = function(t) {
                var e = t.floating;
                e && e.disabled && delete t.floating
            }
            ,
            e
        }(T.Z)
          , I = function(t, e) {
            t.set("provider", e.getName()),
            !0 === t.get("instreamMode") && (e.instreamMode = !0),
            t.setPlaybackRate(t.get("defaultPlaybackRate")),
            t.set("supportsPlaybackRate", e.supportsPlaybackRate),
            t.set("playbackRate", e.getPlaybackRate()),
            t.set("renderCaptionsNatively", e.renderNatively)
        };
        var P = function(t) {
            function e() {
                var e;
                return (e = t.call(this) || this).addAttributes({
                    mediaState: o.bc
                }),
                e
            }
            return (0,
            j.Z)(e, t),
            e.prototype.srcReset = function() {
                (0,
                a.Z)(this.attributes, {
                    setup: !1,
                    started: !1,
                    preloaded: !1,
                    visualQuality: null,
                    buffer: 0,
                    currentTime: 0
                })
            }
            ,
            e
        }(T.Z)
          , z = A
          , L = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this) || this).attached = !0,
                n.beforeComplete = !1,
                n.item = null,
                n.mediaModel = new P,
                n.model = i,
                n.provider = e,
                n.providerListener = C,
                n.thenPlayPromise = y((function() {}
                )),
                e.off(),
                e.on("all", n.providerListener, (0,
                v.Z)(n)),
                n.eventQueue = new u.Z((0,
                v.Z)(n),["trigger"],(function() {
                    return !n.attached || n.background
                }
                )),
                n
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.play = function(t) {
                var e = this.item
                  , i = this.model
                  , n = this.mediaModel
                  , o = this.provider;
                if (t || (t = i.get("playReason")),
                i.set("playRejected", !1),
                n.get("setup"))
                    return o.play() || Promise.resolve();
                n.set("setup", !0);
                var a = this._loadAndPlay(e, o);
                return n.get("started") ? a : this._playAttempt(a, t)
            }
            ,
            i.stop = function() {
                var t = this.provider;
                this.beforeComplete = !1,
                t.stop()
            }
            ,
            i.pause = function() {
                this.provider.pause()
            }
            ,
            i.preload = function() {
                var t = this.item
                  , e = this.mediaModel
                  , i = this.provider;
                !t || t && "none" === t.preload || !this.attached || this.setup || this.preloaded || (e.set("preloaded", !0),
                i.preload(t))
            }
            ,
            i.destroy = function() {
                var t = this.provider
                  , e = this.mediaModel;
                this.off(),
                e.off(),
                t.off(),
                this.eventQueue.destroy(),
                this.detach(),
                t.getContainer() && t.remove(),
                this.eventQueue && this.eventQueue.destroy(),
                delete t.instreamMode,
                this.thenPlayPromise && this.thenPlayPromise.cancel(),
                this.provider = this.mediaModel = this.model = this.eventQueue = this.item = this.providerListener = this.thenPlayPromise = null
            }
            ,
            i.attach = function() {
                var t = this.model
                  , e = this.provider;
                t.setPlaybackRate(t.get("defaultPlaybackRate")),
                e.attachMedia(),
                this.attached = !0,
                this.eventQueue.flush(),
                this.beforeComplete && this._playbackComplete()
            }
            ,
            i.detach = function() {
                var t = this.provider;
                this.thenPlayPromise.cancel();
                var e = t.detachMedia();
                return this.attached = !1,
                e
            }
            ,
            i._playAttempt = function(t, e) {
                var i = this
                  , n = this.item
                  , r = this.mediaModel
                  , s = this.model
                  , l = this.provider
                  , c = l ? l.video : null;
                return this.trigger(o.cq, {
                    item: n,
                    playReason: e
                }),
                (c ? c.paused : s.get(o.uc) !== o.r0) || s.set(o.uc, o.Kb),
                t.then((function() {
                    r.get("setup") && (r.set("started", !0),
                    r === s.mediaModel && function(t) {
                        var e = t.get("mediaState");
                        t.trigger("change:mediaState", t, e, e)
                    }(r))
                }
                )).catch((function(t) {
                    if (i.item && r === s.mediaModel) {
                        if (s.set("playRejected", !0),
                        c && c.paused) {
                            if (c.src === location.href)
                                return i._loadAndPlay(n, l);
                            r.set("mediaState", o._5)
                        }
                        var u = (0,
                        a.Z)(new x.rG(null,(0,
                        x.nm)(t),t), {
                            error: t,
                            item: n,
                            playReason: e
                        });
                        throw delete u.key,
                        i.trigger(o.Je, u),
                        t
                    }
                }
                ))
            }
            ,
            i._playbackComplete = function() {
                var t = this.item
                  , e = this.provider;
                t && delete t.starttime,
                this.beforeComplete = !1,
                e.setState(o.xQ),
                this.trigger(o.Ms, {})
            }
            ,
            i._loadAndPlay = function() {
                var t = this
                  , e = this.item
                  , i = this.provider
                  , n = i.load(e);
                if (n) {
                    var o = y((function() {
                        return t.provider.play() || Promise.resolve()
                    }
                    ));
                    return this.thenPlayPromise = o,
                    n.then((function() {
                        return o.async()
                    }
                    ))
                }
                return i.play() || Promise.resolve()
            }
            ,
            (0,
            f.Z)(e, [{
                key: "audioTrack",
                get: function() {
                    return this.provider.getCurrentAudioTrack()
                },
                set: function(t) {
                    this.provider.setCurrentAudioTrack(t)
                }
            }, {
                key: "quality",
                get: function() {
                    return this.provider.getCurrentQuality()
                },
                set: function(t) {
                    this.provider.setCurrentQuality(t)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    return this.provider.getAudioTracks()
                }
            }, {
                key: "background",
                get: function() {
                    if (!this.attached)
                        return !1;
                    var t = this.provider;
                    if (!t.video)
                        return !1;
                    var e = t.getContainer();
                    return !e || e && !e.contains(t.video)
                },
                set: function(t) {
                    var e = this.provider;
                    if (e.video) {
                        var i = e.getContainer();
                        i && (t ? this.background || (this.thenPlayPromise.cancel(),
                        this.pause(),
                        e.removeFromContainer ? e.removeFromContainer() : i.removeChild(e.video),
                        this.container = null) : (this.eventQueue.flush(),
                        this.beforeComplete && this._playbackComplete()))
                    } else
                        t ? this.detach() : this.attach()
                }
            }, {
                key: "container",
                get: function() {
                    return this.provider.getContainer()
                },
                set: function(t) {
                    this.provider.setContainer(t)
                }
            }, {
                key: "mediaElement",
                get: function() {
                    return this.provider.video
                }
            }, {
                key: "preloaded",
                get: function() {
                    return this.mediaModel.get("preloaded")
                }
            }, {
                key: "qualities",
                get: function() {
                    return this.provider.getQualityLevels()
                }
            }, {
                key: "setup",
                get: function() {
                    return this.mediaModel.get("setup")
                }
            }, {
                key: "started",
                get: function() {
                    return this.mediaModel.get("started")
                }
            }, {
                key: "activeItem",
                set: function(t) {
                    var e = this.mediaModel = new P
                      , i = t ? (0,
                    w.m9)(t.starttime) : 0
                      , n = t ? (0,
                    w.m9)(t.duration) : 0
                      , o = e.attributes;
                    e.srcReset(),
                    o.position = i,
                    o.duration = n,
                    this.item = t,
                    this.provider.init(t)
                }
            }, {
                key: "controls",
                set: function(t) {
                    this.provider.setControls(t)
                }
            }, {
                key: "mute",
                set: function(t) {
                    this.provider.mute(t)
                }
            }, {
                key: "position",
                set: function(t) {
                    var e = this.provider;
                    this.model.get("scrubbing") && e.fastSeek ? e.fastSeek(t) : e.seek(t)
                }
            }, {
                key: "subtitles",
                set: function(t) {
                    this.provider.setSubtitlesTrack && this.provider.setSubtitlesTrack(t)
                }
            }, {
                key: "volume",
                set: function(t) {
                    this.provider.volume(t)
                }
            }]),
            e
        }(g.ZP);
        function B(t) {
            return B = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            ,
            B(t)
        }
        var Z = i(9611);
        function V() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (t) {
                return !1
            }
        }
        function F(t, e, i) {
            return F = V() ? Reflect.construct : function(t, e, i) {
                var n = [null];
                n.push.apply(n, e);
                var o = new (Function.bind.apply(t, n));
                return i && (0,
                Z.Z)(o, i.prototype),
                o
            }
            ,
            F.apply(null, arguments)
        }
        function R(t) {
            var e = "function" == typeof Map ? new Map : void 0;
            return R = function(t) {
                if (null === t || (i = t,
                -1 === Function.toString.call(i).indexOf("[native code]")))
                    return t;
                var i;
                if ("function" != typeof t)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t))
                        return e.get(t);
                    e.set(t, n)
                }
                function n() {
                    return F(t, arguments, B(this).constructor)
                }
                return n.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                (0,
                Z.Z)(n, t)
            }
            ,
            R(t)
        }
        var H = i(393)
          , O = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, e) || this).code = x._M,
                i
            }
            return (0,
            j.Z)(e, t),
            e
        }(R(Error))
          , N = function() {
            function t(t, e, i) {
                var n = this;
                this.index = t,
                this.model = e,
                this.api = i,
                this.promise = new Promise((function(t, e) {
                    n.resolve = t,
                    n.reject = e
                }
                )),
                this.async = null,
                this.asyncPromise = null,
                this.rejected = !1
            }
            var e = t.prototype;
            return e.run = function() {
                var t = this
                  , e = this.api
                  , i = this.async
                  , n = this.index
                  , o = this.model
                  , a = this.resolve
                  , r = this.reject
                  , s = this.promise
                  , l = o.get("playlist")
                  , c = this.getItem(n);
                if (!c) {
                    var u = -1 === n ? "No recs item" : "No playlist item at index " + n;
                    this.rejected = !0,
                    r(new Error(u))
                }
                if (i) {
                    this.clear();
                    var d = this.asyncPromise = i.call(e, c, n);
                    d && d.then ? d.then((function(e) {
                        if (e && e !== c && l === o.get("playlist")) {
                            var i = t.replace(e);
                            if (i)
                                return void a(i)
                        }
                        a(c)
                    }
                    )).catch((function(e) {
                        var i = new O("Item skipped by playlist item callback");
                        i.sourceError = e,
                        t.rejected = !0,
                        r(i)
                    }
                    )) : this.asyncPromise = null
                }
                return this.asyncPromise || a(c),
                s
            }
            ,
            e.getItem = function(t) {
                var e = this.model;
                return -1 === t ? e.get("nextUp") : e.get("playlist")[t]
            }
            ,
            e.replace = function(t) {
                var e = this.index
                  , i = this.model
                  , n = (0,
                p.YF)(i, new H.Z(t), t.feedData || {});
                if (n) {
                    if (-1 === e)
                        i.set("nextUp", n);
                    else
                        i.get("playlist")[e] = n;
                    return n
                }
            }
            ,
            e.clear = function() {
                this.async = null
            }
            ,
            e.destroy = function() {
                this.model = this.api = this.promise = this.resolve = this.reject = this.async = this.asyncPromise = null
            }
            ,
            (0,
            f.Z)(t, [{
                key: "callback",
                set: function(t) {
                    this.async = t
                }
            }, {
                key: "skipped",
                get: function() {
                    return this.rejected
                }
            }]),
            t
        }();
        function q(t, e) {
            t.off().on("all", e.mediaControllerListener, e)
        }
        function U(t) {
            return t && t.sources && t.sources[0]
        }
        var D = function(t) {
            function e(e, i, n) {
                var o, a, r;
                return (o = t.call(this) || this).adPlaying = !1,
                o.apiContext = n,
                o.background = (a = null,
                r = null,
                {
                    setNext: function(t, e) {
                        r = {
                            item: t,
                            loadPromise: e
                        }
                    },
                    isNext: function(t) {
                        return !(!r || JSON.stringify(r.item.sources[0]) !== JSON.stringify(t.sources[0]))
                    },
                    updateNext: function(t) {
                        r && (r.item = t)
                    },
                    clearNext: function() {
                        r = null
                    },
                    get nextLoadPromise() {
                        return r ? r.loadPromise : null
                    },
                    get currentMedia() {
                        return a
                    },
                    set currentMedia(t) {
                        a = t
                    }
                }),
                o.mediaPool = i,
                o.mediaController = null,
                o.mediaControllerListener = M,
                o.model = e,
                o.providers = new m.Z(e.getConfiguration()),
                o.loadPromise = null,
                o.backgroundLoading = e.get("backgroundLoading"),
                o.asyncItems = [],
                o.itemSetContext = 0,
                o.backgroundLoading || e.set("mediaElement", o.mediaPool.getPrimedElement()),
                o
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.asyncActiveItem = function(t) {
                var e = this
                  , i = this.model
                  , n = setTimeout((function() {
                    i.set(o.uc, o.Kb)
                }
                ), 50);
                return this.getAsyncItem(t).run().then((function(t) {
                    return clearTimeout(n),
                    t
                }
                )).catch((function(o) {
                    if (clearTimeout(n),
                    t < i.get("playlist").length - 1)
                        return e.setActiveItem(t + 1).then((function() {
                            return null
                        }
                        ));
                    throw o
                }
                ))
            }
            ,
            i.setActiveItem = function(t) {
                var e = this
                  , i = this.background
                  , n = this.mediaController
                  , o = this.model
                  , a = o.get("playlist")[t];
                o.attributes.itemReady = !1,
                n && (n.mediaModel.off(),
                o.attributes.mediaModel = new P,
                o.mediaModel.attributes = n.mediaModel.clone()),
                i.isNext(a) || this._destroyBackgroundMedia();
                var r = this.itemSetContext = Math.random();
                return this.loadPromise = this.asyncActiveItem(t).then((function(a) {
                    if (null === a || r !== e.itemSetContext || null === e.providers)
                        return null;
                    o.setActiveItem(t);
                    var s = U(a);
                    if (!s)
                        return Promise.reject(new x.rG(x.ul,x.o2));
                    if (i.isNext(a))
                        return e._destroyActiveMedia(),
                        e._activateBackgroundMedia();
                    if (n) {
                        if (o.get("castActive") || e._providerCanPlay(n.provider, s))
                            return n.activeItem = a,
                            e._setActiveMedia(n),
                            n;
                        e._destroyActiveMedia()
                    }
                    return e._setupMediaController(s).then((function(t) {
                        if (r === e.itemSetContext)
                            return t.activeItem = a,
                            e._setActiveMedia(t),
                            t
                    }
                    )).catch((function(t) {
                        throw e._destroyActiveMedia(),
                        t
                    }
                    ))
                }
                ))
            }
            ,
            i.setAttached = function(t) {
                var e = this.mediaController;
                if (this.attached = t,
                e) {
                    if (!t) {
                        var i = e.detach()
                          , n = e.item
                          , o = e.mediaModel.get("position");
                        return o && (n.starttime = o),
                        i
                    }
                    e.attach()
                }
            }
            ,
            i.playVideo = function(t) {
                var e, i = this, n = this.mediaController, a = this.model;
                if (!a.get("playlistItem"))
                    return Promise.reject(new Error("No media"));
                if (t || (t = a.get("playReason")),
                n)
                    e = n.play(t);
                else {
                    a.set(o.uc, o.Kb);
                    var r = y((function(e) {
                        if (i.mediaController && i.mediaController.mediaModel === e.mediaModel)
                            return e.play(t);
                        throw new Error("Playback cancelled.")
                    }
                    ));
                    e = (this.loadPromise || Promise.resolve()).catch((function(t) {
                        throw r.cancel(),
                        t
                    }
                    )).then((function() {
                        return r.async()
                    }
                    ))
                }
                return e
            }
            ,
            i.stopVideo = function() {
                var t = this.mediaController
                  , e = this.model
                  , i = e.get("playlist")[e.get("item")];
                e.attributes.playlistItem = i,
                e.resetItem(i),
                t && t.stop()
            }
            ,
            i.preloadVideo = function() {
                var t = this.background
                  , e = this.mediaController || t.currentMedia;
                e && e.preload()
            }
            ,
            i.pause = function() {
                var t = this.mediaController;
                t && t.pause()
            }
            ,
            i.castVideo = function(t, e) {
                var i = this.model;
                i.attributes.itemReady = !1;
                var n = (0,
                a.Z)({}, e)
                  , o = n.starttime = i.mediaModel.get("currentTime");
                this._destroyActiveMedia();
                var r = new L(t,i);
                r.activeItem = n,
                this._setActiveMedia(r),
                i.mediaModel.set("currentTime", o)
            }
            ,
            i.stopCast = function() {
                var t = this.model
                  , e = t.get("item");
                t.get("playlist")[e].starttime = t.mediaModel.get("currentTime"),
                this.stopVideo(),
                this.setActiveItem(e).catch((function() {}
                ))
            }
            ,
            i.backgroundActiveMedia = function() {
                this.adPlaying = !0;
                var t = this.background
                  , e = this.mediaController;
                e && (t.currentMedia && this._destroyMediaController(t.currentMedia),
                e.background = !0,
                t.currentMedia = e,
                this.mediaController = null)
            }
            ,
            i.restoreBackgroundMedia = function() {
                this.adPlaying = !1;
                var t = this.background
                  , e = this.mediaController
                  , i = t.currentMedia;
                if (i) {
                    if (e && e !== i)
                        return this._destroyMediaController(i),
                        void (t.currentMedia = null);
                    var n = i.mediaModel.attributes;
                    n.mediaState === o.bc ? n.mediaState = o._5 : n.mediaState !== o._5 && (n.mediaState = o.Kb),
                    this._setActiveMedia(i),
                    i.background = !1,
                    t.currentMedia = null
                }
            }
            ,
            i.backgroundLoad = function(t, e) {
                var i = this
                  , n = this.background
                  , o = this.getAsyncItem(e).run().then((function(t) {
                    n.updateNext(t);
                    var e = U(t);
                    return i._setupMediaController(e).then((function(e) {
                        return e.activeItem = t,
                        e.preload(),
                        e
                    }
                    ))
                }
                )).catch((function() {
                    n.clearNext()
                }
                ));
                n.setNext(t, o)
            }
            ,
            i.forwardEvents = function() {
                var t = this.mediaController;
                t && q(t, this)
            }
            ,
            i.routeEvents = function(t) {
                var e = this.mediaController;
                e && (e.off(),
                t && q(e, t))
            }
            ,
            i.destroy = function() {
                this.off(),
                this._destroyBackgroundMedia(),
                this._destroyActiveMedia(),
                this.asyncItems && this.asyncItems.forEach((function(t) {
                    t && t.destroy()
                }
                )),
                this.asyncItems = this.loadPromise = this.mediaControllerListener = this.model = this.providers = this.apiContext = null
            }
            ,
            i._setActiveMedia = function(t) {
                var e = this.model
                  , i = t.mediaModel
                  , n = t.provider;
                !function(t, e) {
                    var i = t.get("mediaContainer");
                    i ? e.container = i : t.once("change:mediaContainer", (function(t, i) {
                        e.container = i
                    }
                    ))
                }(e, t),
                this.mediaController = t,
                e.set("mediaElement", t.mediaElement),
                e.setMediaModel(i),
                e.setProvider(n),
                q(t, this),
                e.set("itemReady", !0)
            }
            ,
            i._destroyActiveMedia = function() {
                var t = this.mediaController
                  , e = this.model;
                t && t.provider && (t.detach(),
                this._destroyMediaController(t),
                e.resetProvider(),
                this.mediaController = null)
            }
            ,
            i._destroyBackgroundMedia = function() {
                var t = this.background;
                this._destroyMediaController(t.currentMedia),
                t.currentMedia = null,
                this._destroyBackgroundLoadingMedia()
            }
            ,
            i._destroyMediaController = function(t) {
                var e = this.mediaPool;
                t && t.provider && (e.recycle(t.mediaElement),
                t.destroy())
            }
            ,
            i._setupMediaController = function(t) {
                var e = this
                  , i = this.model
                  , n = this.providers
                  , o = function(t) {
                    return new L(new t(i.get("id"),i.getConfiguration(),e.primedElement),i)
                }
                  , a = n.choose(t)
                  , r = a.provider
                  , s = a.name;
                return r ? Promise.resolve(o(r)) : n.load(s).then((function(t) {
                    return o(t)
                }
                ))
            }
            ,
            i._activateBackgroundMedia = function() {
                var t = this
                  , e = this.background
                  , i = this.background.nextLoadPromise
                  , n = this.model;
                return this._destroyMediaController(e.currentMedia),
                e.currentMedia = null,
                i.then((function(i) {
                    if (i)
                        return e.clearNext(),
                        t.adPlaying ? (n.attributes.itemReady = !0,
                        e.currentMedia = i) : (t._setActiveMedia(i),
                        i.background = !1),
                        i
                }
                ))
            }
            ,
            i._destroyBackgroundLoadingMedia = function() {
                var t = this
                  , e = this.background
                  , i = this.background.nextLoadPromise;
                i && i.then((function(i) {
                    t._destroyMediaController(i),
                    e.clearNext()
                }
                ))
            }
            ,
            i._providerCanPlay = function(t, e) {
                var i = this.providers.choose(e).provider;
                return i && t && t instanceof i
            }
            ,
            i.setMute = function(t) {
                var e = this.background
                  , i = this.mediaController
                  , n = this.mediaPool;
                i && (i.mute = t),
                e.currentMedia && (e.currentMedia.mute = t),
                n.syncMute(t)
            }
            ,
            i.setVolume = function(t) {
                var e = this.background
                  , i = this.mediaController
                  , n = this.mediaPool;
                i && (i.volume = t),
                e.currentMedia && (e.currentMedia.volume = t),
                n.syncVolume(t)
            }
            ,
            i.getAsyncItem = function(t) {
                var e = this.asyncItems[t];
                return e || ((e = this.asyncItems[t] = new N(t,this.model,this.apiContext)).callback = this.model.get("playlistItemCallback")),
                e
            }
            ,
            i.clearItemPromises = function() {
                this.asyncItems.forEach((function(t) {
                    t && t.reject(new Error("Item playback aborted"))
                }
                )),
                this.asyncItems.length = 0
            }
            ,
            (0,
            f.Z)(e, [{
                key: "audioTrack",
                get: function() {
                    var t = this.mediaController;
                    return t ? t.audioTrack : -1
                },
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.audioTrack = parseInt(t, 10) || 0)
                }
            }, {
                key: "audioTracks",
                get: function() {
                    var t = this.mediaController;
                    if (t)
                        return t.audioTracks
                }
            }, {
                key: "beforeComplete",
                get: function() {
                    var t = this.mediaController
                      , e = this.background.currentMedia;
                    return !(!t && !e) && (t ? t.beforeComplete : e.beforeComplete)
                }
            }, {
                key: "primedElement",
                get: function() {
                    return this.backgroundLoading ? this.mediaPool.getPrimedElement() : this.model.get("mediaElement")
                }
            }, {
                key: "quality",
                get: function() {
                    return this.mediaController ? this.mediaController.quality : -1
                },
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.quality = parseInt(t, 10) || 0)
                }
            }, {
                key: "qualities",
                get: function() {
                    var t = this.mediaController;
                    return t ? t.qualities : null
                }
            }, {
                key: "position",
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.item.starttime = t,
                    e.attached && (e.position = t))
                }
            }, {
                key: "subtitles",
                set: function(t) {
                    var e = this.mediaController;
                    e && (e.subtitles = t)
                }
            }, {
                key: "itemCallback",
                set: function(t) {
                    this.model.set("playlistItemCallback", t),
                    this.asyncItems.forEach((function(e) {
                        e && (e.callback = t)
                    }
                    ))
                }
            }]),
            e
        }(g.ZP);
        function W(t) {
            return t === o.xQ || t === o.Vy ? o.bc : t
        }
        function Q(t, e, i) {
            if ((e = W(e)) !== (i = W(i))) {
                var n = e.replace(/(?:ing|d)$/, "")
                  , a = function(t, e) {
                    return t === o.Kb ? e === o.nQ ? e : o.ik : e
                }(e, t.mediaModel.get("mediaState"))
                  , r = {
                    type: n,
                    newstate: e,
                    oldstate: i,
                    reason: a
                };
                "play" === n ? r.playReason = t.get("playReason") : "pause" === n && (r.pauseReason = t.get("pauseReason")),
                this.trigger(n, r)
            }
        }
        var $ = i(4609)
          , Y = function(t) {
            function e(e, i) {
                var n, o, a = (n = t.call(this, e, i) || this).model = new z;
                if (n.playerModel = e,
                n.provider = null,
                n.backgroundLoading = e.get("backgroundLoading"),
                a.mediaModel.attributes.mediaType = "video",
                n.backgroundLoading)
                    o = i.getAdElement();
                else {
                    o = e.get("mediaElement"),
                    a.attributes.mediaElement = o,
                    a.attributes.mediaSrc = o.src;
                    var r = n.srcResetListener = function() {
                        n.srcReset()
                    }
                    ;
                    o.addEventListener("emptied", r),
                    o.playbackRate = o.defaultPlaybackRate = 1
                }
                return n.mediaPool = (0,
                $.Z)(o, i),
                n
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.setup = function() {
                var t = this.model
                  , e = this.playerModel
                  , i = this.primedElement
                  , n = e.attributes
                  , a = e.mediaModel;
                t.setup({
                    id: n.id,
                    volume: n.volume,
                    instreamMode: !0,
                    edition: n.edition,
                    mediaContext: a,
                    mute: n.mute,
                    streamType: "VOD",
                    autostartMuted: n.autostartMuted,
                    autostart: n.autostart,
                    advertising: n.advertising,
                    sdkplatform: n.sdkplatform,
                    skipButton: !1
                }),
                t.on("change:state", Q, this),
                t.on(o.pn, (function(t) {
                    this.trigger(o.pn, t)
                }
                ), this),
                i.paused || i.pause()
            }
            ,
            i.setActiveItem = function(e) {
                var i = this;
                return this.adPlaying = !0,
                this.stopVideo(),
                this.provider = null,
                t.prototype.setActiveItem.call(this, e).then((function(t) {
                    return i.trigger(o.$_),
                    i._setProvider(t.provider),
                    i.playVideo()
                }
                ))
            }
            ,
            i.usePsuedoProvider = function(t) {
                t && (this._setProvider(t),
                t.off(o.pn),
                t.on(o.pn, (function(t) {
                    this.trigger(o.pn, t)
                }
                ), this))
            }
            ,
            i._setProvider = function(t) {
                var e = this;
                if (t && this.mediaPool) {
                    this.provider = t;
                    var i = this.model
                      , n = this.playerModel
                      , r = "vpaid" === t.type;
                    t.off(),
                    t.on("all", (function(t, e) {
                        r && t === o.Ms || this.trigger(t, (0,
                        a.Z)({}, e, {
                            type: t
                        }))
                    }
                    ), this);
                    var s = i.mediaModel;
                    t.on(o.uc, (function(t) {
                        t.oldstate = t.oldstate || i.get(o.uc),
                        s.set("mediaState", t.newstate)
                    }
                    )),
                    t.on(o.h7, this._nativeFullscreenHandler, this),
                    s.on("change:mediaState", (function(t, i) {
                        e._stateHandler(i)
                    }
                    )),
                    t.attachMedia(),
                    t.volume(n.get("volume")),
                    t.mute(n.getMute()),
                    t.setPlaybackRate && t.setPlaybackRate(1),
                    n.on("change:volume", (function(t, e) {
                        this.volume = e
                    }
                    ), this),
                    n.on("change:mute", (function(t, e) {
                        this.mute = e,
                        e || (this.volume = n.get("volume"))
                    }
                    ), this),
                    n.on("change:autostartMuted", (function(t, e) {
                        e || (i.set("autostartMuted", e),
                        this.mute = n.get("mute"))
                    }
                    ), this)
                }
            }
            ,
            i.destroy = function() {
                this.adPlaying = !1;
                var t = this.model
                  , e = this.mediaPool
                  , i = this.playerModel;
                t.off(),
                this.provider = null;
                var n = e.getPrimedElement();
                if (this.backgroundLoading) {
                    e.clean();
                    var o = i.get("mediaContainer");
                    n.parentNode === o && o.removeChild(n)
                } else
                    n && (n.removeEventListener("emptied", this.srcResetListener),
                    n.src !== t.get("mediaSrc") && this.srcReset())
            }
            ,
            i.srcReset = function() {
                var t = this.playerModel
                  , e = t.get("mediaModel")
                  , i = t.getVideo();
                e.srcReset(),
                i && (i.src = null)
            }
            ,
            i._nativeFullscreenHandler = function(t) {
                this.model.trigger(o.h7, t),
                this.trigger(o.UW, {
                    fullscreen: t.jwstate
                })
            }
            ,
            i._stateHandler = function(t) {
                var e = this.model;
                switch (t) {
                case o.r0:
                case o._5:
                    e.set(o.uc, t)
                }
            }
            ,
            (0,
            f.Z)(e, [{
                key: "mute",
                set: function(e) {
                    var i = this.mediaController
                      , n = this.model
                      , o = this.provider;
                    n.set("mute", e),
                    t.prototype.setMute.call(this, e),
                    i || o.mute(e)
                }
            }, {
                key: "volume",
                set: function(e) {
                    var i = this.mediaController
                      , n = this.model
                      , o = this.provider;
                    n.set("volume", e),
                    t.prototype.setVolume.call(this, e),
                    i || o.volume(e)
                }
            }]),
            e
        }(D)
          , K = {
            skipoffset: null,
            tag: null
        }
          , X = function(t, e, i, n) {
            var r, s, l, c, u = this, d = this, p = new Y(e,n), g = 0, f = {}, j = null, m = {}, v = z, b = !1, y = !1, x = !1, k = !1, C = function(t) {
                y || ((t = t || {}).hasControls = !!e.get("controls"),
                u.trigger(o.l5, t),
                p.model.get("state") === o._5 ? t.hasControls && p.playVideo().catch((function() {}
                )) : p.pause())
            }, M = function() {
                y || p.model.get("state") === o._5 && e.get("controls") && (t.setFullscreen(),
                t.play())
            };
            function _() {
                p.model.set("playRejected", !0)
            }
            function T() {
                g++,
                d.loadItem(r).catch((function() {}
                ))
            }
            function S(t, e) {
                "complete" !== t && (e = e || {},
                m.tag && !e.tag && (e.tag = m.tag),
                this.trigger(t, e),
                "mediaError" !== t && "error" !== t || this.loadNextItemOnError())
            }
            function E(t) {
                var e = t.newstate
                  , i = t.oldstate || p.model.get("state");
                i !== e && A((0,
                a.Z)({
                    oldstate: i
                }, f, t))
            }
            function A(e) {
                var i = e.newstate;
                i === o.r0 ? t.trigger(o.WE, e) : i === o._5 && t.trigger(o.Ax, e)
            }
            function I(e) {
                var i = e.duration
                  , n = e.position
                  , o = p.model.mediaModel || p.model;
                o.set("duration", i),
                o.set("position", n),
                c || (c = ((0,
                w.U5)(l, i) || i) - h.l_),
                !b && n >= Math.max(c, h.HB) && (t.preloadNextItem(),
                b = !0)
            }
            function P(t) {
                var e = {};
                m.tag && (e.tag = m.tag),
                this.trigger(o.Ms, e),
                z.call(this, t)
            }
            function z(t) {
                f = {},
                r && g + 1 < r.length ? T() : (t.type === o.Ms && this.trigger(o.V$, {}),
                this.destroy())
            }
            function L() {
                !y && i && i.clickHandler() && i.clickHandler().setAlternateClickHandlers(C, M)
            }
            function B(n) {
                n.width && n.height && i && i.resizeMedia(),
                e.get("pip") && t.requestPip(p.primedElement)
            }
            this.init = function() {
                if (!x && !y) {
                    x = !0,
                    f = {},
                    p.setup(),
                    p.on("all", S, this),
                    p.on(o.Je, _, this),
                    p.on(o.R2, I, this),
                    p.on(o.Ms, P, this),
                    p.on(o.rx, B, this),
                    p.on(o.uc, E, this),
                    j = t.detachMedia();
                    var n = p.primedElement;
                    if (e.get("mediaContainer").appendChild(n),
                    e.set("instream", p),
                    p.model.set("state", o.Kb),
                    i) {
                        var a = i.clickHandler();
                        a && a.setAlternateClickHandlers((function() {}
                        ), null)
                    }
                    return this.setText(e.get("localization").loadingAd),
                    k = t.isBeforeComplete() || e.get("state") === o.xQ,
                    this
                }
            }
            ,
            this.enableAdsMode = function(n) {
                var a = this;
                if (!x && !y)
                    return t.routeEvents({
                        mediaControllerListener: function(t, e) {
                            a.trigger(t, e)
                        }
                    }),
                    e.set("instream", p),
                    p.model.set("state", o.r0),
                    function(n) {
                        if (!i)
                            return;
                        var a = i.clickHandler();
                        a && a.setAlternateClickHandlers((function(i) {
                            y || ((i = i || {}).hasControls = !!e.get("controls"),
                            d.trigger(o.l5, i),
                            n && (e.get("state") === o._5 ? t.playVideo() : (t.pause(),
                            n && (t.trigger(o.Rt, {
                                clickThroughUrl: n
                            }),
                            window.open(n)))))
                        }
                        ), null)
                    }(n),
                    this
            }
            ,
            this.setEventData = function(t) {
                f = t
            }
            ,
            this.setState = function(t) {
                var e = t.newstate
                  , i = p.model;
                t.oldstate = i.get("state"),
                i.set("state", e),
                A(t)
            }
            ,
            this.setTime = function(e) {
                I(e),
                t.trigger(o.uL, e)
            }
            ,
            this.loadNextItemOnError = function() {
                r && g + 1 < r.length && T()
            }
            ,
            this.loadItem = function(t, i) {
                if (y || !x)
                    return Promise.reject(new Error("Instream not setup"));
                f = {};
                var n = t;
                Array.isArray(t) ? (s = i || s,
                t = (r = t)[g],
                s && (i = s[g])) : n = [t];
                var c = p.model;
                c.set("playlist", n),
                e.set("hideAdsControls", !1),
                t.starttime = 0,
                d.trigger(o.gO, {
                    index: g,
                    item: t
                }),
                m = (0,
                a.Z)({}, K, i),
                L(),
                c.set("skipButton", !1);
                var u = !e.get("backgroundLoading") && j ? j.then((function() {
                    return p.setActiveItem(g)
                }
                )) : p.setActiveItem(g);
                return b = !1,
                void 0 !== (l = t.skipoffset || m.skipoffset) && d.setupSkipButton(l, m),
                u
            }
            ,
            this.setupSkipButton = function(t, e, i) {
                var n = p.model;
                v = i || z,
                n.set("skipMessage", e.skipMessage),
                n.set("skipText", e.skipText),
                n.set("skipOffset", t),
                n.attributes.skipButton = !1,
                n.set("skipButton", !0)
            }
            ,
            this.applyProviderListeners = function(t) {
                p.usePsuedoProvider(t),
                L()
            }
            ,
            this.play = function() {
                f = {},
                p.playVideo()
            }
            ,
            this.pause = function() {
                f = {},
                p && p.pause()
            }
            ,
            this.skipAd = function(t) {
                var i = e.get("autoPause").pauseAds
                  , n = "autostart" === e.get("playReason")
                  , a = e.get("viewable");
                !i || n || a || (this.noResume = !0);
                var r = o.k3;
                this.trigger(r, t),
                v.call(this, {
                    type: r
                })
            }
            ,
            this.replacePlaylistItem = function(t) {
                y || (e.set("playlistItem", t),
                p.srcReset())
            }
            ,
            this.destroy = function() {
                y || (y = !0,
                this.trigger("destroyed"),
                this.off(),
                i && i.clickHandler() && i.clickHandler().revertAlternateClickHandlers(),
                e.off(null, null, p),
                p.off(null, null, d),
                p.destroy(),
                x && p.model && (e.attributes.state = o._5),
                t.forwardEvents(),
                e.set("instream", null),
                p = null,
                f = {},
                j = null,
                x && !e.attributes._destroyed && (t.attachMedia(),
                e.get("pip") && t.requestPip(),
                this.noResume || (k ? t.stopVideo() : t.playVideo())))
            }
            ,
            this.getState = function() {
                return !y && p.model.get("state")
            }
            ,
            this.setText = function(t) {
                return y || !i || i.setAltText(t || ""),
                this
            }
            ,
            this.hide = function() {
                y || e.set("hideAdsControls", !0)
            }
            ,
            this.getMediaElement = function() {
                return y ? null : p.primedElement
            }
            ,
            this.setSkipOffset = function(t) {
                l = t > 0 ? t : null,
                p && p.model.set("skipOffset", l)
            }
        };
        (0,
        a.Z)(X.prototype, g.ZP);
        var J = X
          , G = i(6103)
          , tt = i(8377)
          , et = function() {
            function t(t) {
                var e = this;
                this._model = t,
                this._tracks = [],
                this._tracksById = {},
                this._unknownCount = 0,
                this._defaultIndex = 0,
                this._model.on("change:playlistItem", (function(t) {
                    e._tracks = [],
                    e._tracksById = {},
                    e._unknownCount = 0;
                    var i = t.attributes;
                    i.captionsIndex = 0,
                    i.captionsList = e._captionsMenu(),
                    t.set("captionsTrack", null)
                }
                ), this),
                this._model.on("change:itemReady", (function() {
                    e._model.get("castActive") && (e._tracks = [],
                    e._tracksById = {},
                    e._unknownCount = 0);
                    var t = e._model.get("playlistItem").tracks
                      , i = t && t.length;
                    if (i && !e._model.get("renderCaptionsNatively"))
                        for (var n = function(i) {
                            var n = t[i];
                            n.includedInManifest || !e._kindSupported(n.kind) || e._tracksById[n._id] || (n.sideloaded = !0,
                            e._addTrack(n),
                            (0,
                            G.x)(n, (function(t) {
                                e._addVTTCuesToTrack(n, t)
                            }
                            ), (function(t) {
                                e.trigger(o.cM, t)
                            }
                            )))
                        }, a = 0; a < i; a++)
                            n(a);
                    e._setCaptionsList()
                }
                ), this),
                this._model.on("change:captionsIndex", (function(t, i) {
                    var n = null;
                    0 !== i && (n = e._tracks[i - 1]),
                    t.set("captionsTrack", n)
                }
                ), this)
            }
            var e = t.prototype;
            return e.setSubtitlesTracks = function(t) {
                var e = this;
                Array.isArray(t) && (t.length ? (t.forEach((function(t) {
                    return e._addTrack(t)
                }
                )),
                this._tracks.sort((function(e, i) {
                    var n = t.indexOf(e);
                    if (-1 === n)
                        return 1;
                    var o = t.indexOf(i);
                    return -1 === o ? -1 : n - o
                }
                ))) : (this._tracks = [],
                this._tracksById = {},
                this._unknownCount = 0),
                this._setCaptionsList())
            }
            ,
            e._kindSupported = function(t) {
                return "subtitles" === t || "captions" === t
            }
            ,
            e._addVTTCuesToTrack = function(t, e) {
                t.data = e
            }
            ,
            e._addTrack = function(t) {
                t.data = t.data || [],
                t.name = t.label || t.name || t.language;
                var e = (0,
                tt.M)(t, this._tracks.length);
                if (!t.name) {
                    var i = (0,
                    tt._)(t, this._unknownCount);
                    t.name = i.label,
                    this._unknownCount = i.unknownCount
                }
                t._id = e,
                this._tracksById[e] = t,
                this._tracks = this._tracks.filter((function(t) {
                    return t._id !== e
                }
                )),
                this._tracks.push(t)
            }
            ,
            e._captionsMenu = function() {
                var t = [{
                    id: "off",
                    label: "Off"
                }];
                this._model.get("castActive") && (this._tracks = this._tracks.filter((function(t) {
                    return -1 !== t._id.indexOf("nativesubtitles")
                }
                )));
                for (var e = 0; e < this._tracks.length; e++)
                    t.push({
                        id: this._tracks[e]._id,
                        label: this._tracks[e].name || "Unknown CC",
                        language: this._tracks[e].subtitleTrack ? this._tracks[e].subtitleTrack.lang : this._tracks[e].language
                    });
                return t
            }
            ,
            e.selectDefaultIndex = function(t) {
                var e = this._defaultIndex = t
                  , i = this._model.get("captionLabel");
                if ("Off" !== i) {
                    for (var n = 0; n < this._tracks.length; n++) {
                        var o = this._tracks[n];
                        if (i && i === o.name) {
                            e = n + 1;
                            break
                        }
                        o.default || o.defaulttrack || "default" === o._id ? e = n + 1 : o.autoselect
                    }
                    this._setCurrentIndex(e)
                } else
                    this._model.set("captionsIndex", 0)
            }
            ,
            e._setCurrentIndex = function(t) {
                this._tracks.length ? this._model.setVideoSubtitleTrack(t, this._tracks) : this._model.set("captionsIndex", t)
            }
            ,
            e._setCaptionsList = function() {
                var t = this._captionsMenu();
                this.listIdentity(t) !== this.listIdentity(this._model.get("captionsList")) && (this._model.set("captionsList", t),
                this.selectDefaultIndex(this._defaultIndex))
            }
            ,
            e.listIdentity = function(t) {
                return t.map((function(t) {
                    return t.id + "-" + t.label
                }
                )).join(",")
            }
            ,
            e.getCurrentIndex = function() {
                return this._model.get("captionsIndex")
            }
            ,
            e.getCaptionsList = function() {
                return this._model.get("captionsList")
            }
            ,
            e.destroy = function() {
                this.off(null, null, this)
            }
            ,
            t
        }();
        (0,
        a.Z)(et.prototype, g.ZP);
        var it = et
          , nt = i(4225)
          , ot = i(4671);
        function at(t, e) {
            if (t.get("fullscreen"))
                return 1;
            if (!t.get("activeTab"))
                return 0;
            if (t.get("isFloating"))
                return 1;
            var i = t.get("intersectionRatio");
            return void 0 === i && (i = function(t) {
                var e = document.documentElement
                  , i = document.body
                  , n = {
                    top: 0,
                    left: 0,
                    right: e.clientWidth || i.clientWidth,
                    width: e.clientWidth || i.clientWidth,
                    bottom: e.clientHeight || i.clientHeight,
                    height: e.clientHeight || i.clientHeight
                };
                if (!i.contains(t))
                    return 0;
                if ("none" === window.getComputedStyle(t).display)
                    return 0;
                var o = rt(t);
                if (!o)
                    return 0;
                var a = o
                  , r = t.parentNode
                  , s = !1;
                for (; !s; ) {
                    var l = null;
                    if (r === i || r === e || 1 !== r.nodeType ? (s = !0,
                    l = n) : "visible" !== window.getComputedStyle(r).overflow && (l = rt(r)),
                    l && !(a = st(l, a)))
                        return 0;
                    r = r.parentNode
                }
                var c = o.width * o.height
                  , u = a.width * a.height;
                return c ? u / c : 0
            }(e),
            window.top !== window.self && i) ? 0 : i
        }
        function rt(t) {
            try {
                return t.getBoundingClientRect()
            } catch (t) {}
        }
        function st(t, e) {
            var i = Math.max(t.top, e.top)
              , n = Math.min(t.bottom, e.bottom)
              , o = Math.max(t.left, e.left)
              , a = Math.min(t.right, e.right)
              , r = a - o
              , s = n - i;
            return r >= 0 && s >= 0 && {
                top: i,
                bottom: n,
                left: o,
                right: a,
                width: r,
                height: s
            }
        }
        var lt = i(6875)
          , ct = i(1776)
          , ut = i(6436)
          , dt = i(8446)
          , pt = i(4601)
          , ht = i(2799)
          , wt = i(2268)
          , gt = i(974)
          , ft = ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"];
        var jt, mt = i(7010), vt = {};
        function bt(t, e, i) {
            var n = function(t, e, i) {
                for (var n = t.requestFullscreen || t.webkitRequestFullscreen || t.webkitRequestFullScreen || t.mozRequestFullScreen || t.msRequestFullscreen, o = e.exitFullscreen || e.webkitExitFullscreen || e.webkitCancelFullScreen || e.mozCancelFullScreen || e.msExitFullscreen, a = !(!n || !o), r = ft.length; r--; )
                    e.addEventListener(ft[r], i);
                return {
                    events: ft,
                    supportsDomFullscreen: function() {
                        return a
                    },
                    requestFullscreen: function() {
                        n.call(t, {
                            navigationUI: "hide"
                        })
                    },
                    exitFullscreen: function() {
                        null !== this.fullscreenElement() && o.apply(e)
                    },
                    fullscreenElement: function() {
                        var t = e.fullscreenElement
                          , i = e.webkitCurrentFullScreenElement
                          , n = e.mozFullScreenElement
                          , o = e.msFullscreenElement;
                        return null === t ? t : t || i || n || o
                    },
                    destroy: function() {
                        for (var t = ft.length; t--; )
                            e.removeEventListener(ft[t], i)
                    }
                }
            }(t, e, i)
              , o = vt.requestFullscreen || n.requestFullscreen
              , a = vt.exitFullscreen || n.exitFullscreen
              , r = jt || function() {
                return (0,
                mt.Z)() && !_.OS.iOS && !_.Browser.safari
            }
            ;
            return n.requestFullscreen = function() {
                if (!r())
                    return o.call(n)
            }
            ,
            n.exitFullscreen = function() {
                if (!r())
                    return a.call(n)
            }
            ,
            n
        }
        var yt = i(5882)
          , xt = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this) || this).revertAlternateClickHandlers(),
                n.domElement = i,
                n.model = e,
                n.ui = new yt.ZP(i).on("click", n.clickHandler, (0,
                v.Z)(n)).on("doubleClick", (function() {
                    this.alternateDoubleClickHandler ? this.alternateDoubleClickHandler() : this.trigger("doubleClick")
                }
                ), (0,
                v.Z)(n)),
                n
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.destroy = function() {
                this.ui && (this.ui.destroy(),
                this.ui = null,
                this.domElement = null,
                this.model = null,
                this.revertAlternateClickHandlers())
            }
            ,
            i.clickHandler = function(t) {
                this.model && (this.alternateClickHandler ? this.alternateClickHandler(t) : this.trigger(o.ot))
            }
            ,
            i.element = function() {
                return this.domElement
            }
            ,
            i.setAlternateClickHandlers = function(t, e) {
                this.alternateClickHandler = t,
                this.alternateDoubleClickHandler = e || null
            }
            ,
            i.revertAlternateClickHandlers = function() {
                this.alternateClickHandler = null,
                this.alternateDoubleClickHandler = null
            }
            ,
            e
        }(g.ZP)
          , kt = i(1831)
          , Ct = i(5646)
          , Mt = {
            linktarget: "_blank",
            margin: 8,
            hide: !1,
            position: "top-right"
        };
        function _t(t) {
            var e, i;
            (0,
            a.Z)(this, g.ZP);
            var n = new Image;
            this.setup = function() {
                var r, s;
                ((i = (0,
                a.Z)({}, Mt, t.get("logo"))).position = i.position || Mt.position,
                i.hide = "true" === i.hide.toString(),
                i.file && "control-bar" !== i.position) && (e || (e = (0,
                ht.az)((r = i.position,
                s = i.hide,
                '<div class="jw-logo jw-logo-' + r + (s ? " jw-hide" : "") + ' jw-reset"></div>'))),
                t.set("logo", i),
                n.onload = function() {
                    var n = this.height
                      , o = this.width
                      , a = {
                        backgroundImage: 'url("' + this.src + '")'
                    };
                    if (i.margin !== Mt.margin) {
                        var r = /(\w+)-(\w+)/.exec(i.position);
                        3 === r.length && (a["margin-" + r[1]] = i.margin,
                        a["margin-" + r[2]] = i.margin)
                    }
                    var s = .15 * t.get("containerHeight")
                      , l = .15 * t.get("containerWidth");
                    if (n > s || o > l) {
                        var c = o / n;
                        l / s > c ? (n = s,
                        o = s * c) : (o = l,
                        n = l / c)
                    }
                    a.width = Math.round(o),
                    a.height = Math.round(n),
                    (0,
                    gt.oB)(e, a),
                    t.set("logoWidth", a.width)
                }
                ,
                n.src = i.file,
                i.link && (e.setAttribute("tabindex", "0"),
                e.setAttribute("aria-label", t.get("localization").logo)),
                this.ui = (0,
                Ct.Z)(e, (function() {
                    this.trigger(o.Ib, {
                        link: i.link,
                        linktarget: i.linktarget
                    })
                }
                ), this))
            }
            ,
            this.setContainer = function(t) {
                e && t.appendChild(e)
            }
            ,
            this.element = function() {
                return e
            }
            ,
            this.position = function() {
                return i.position
            }
            ,
            this.destroy = function() {
                n.onload = null,
                this.ui && this.ui.destroy()
            }
        }
        var Tt = function() {
            function t(t) {
                this.model = t,
                this.image = null
            }
            var e = t.prototype;
            return e.setup = function(t) {
                this.el = t,
                this.hasZoomThumbnail = this.model.get("_abZoomThumbnail"),
                this.hasZoomThumbnail && (this.zoomOriginX = Math.ceil(100 * Math.random()) + "%",
                this.zoomOriginY = Math.ceil(100 * Math.random()) + "%",
                this.model.on("change:viewable", this.pauseZoomThumbnail, this),
                this.model.on("change:isFloating", this.enableZoomThumbnail, this))
            }
            ,
            e.setImage = function(t) {
                var e = this.image;
                e && (e.onload = null),
                this.image = null;
                var i = "";
                "string" == typeof t && t.length > 0 && (i = 'url("' + t + '")',
                (e = this.image = new Image).src = t),
                this.hasZoomThumbnail ? (this.imageEl = document.createElement("div"),
                (0,
                gt.oB)(this.imageEl, {
                    backgroundImage: i
                }),
                this.el && this.el.appendChild(this.imageEl),
                this.enableZoomThumbnail()) : (0,
                gt.oB)(this.el, {
                    backgroundImage: i
                })
            }
            ,
            e.enableZoomThumbnail = function() {
                var t = this;
                this.hasZoomThumbnail && !this.model.get("isFloating") && (clearTimeout(this.zoomThumbnailTimeout),
                this.zoomThumbnailTimeout = window.setTimeout((function() {
                    t.imageEl && (t.imageEl.classList.add("jw-ab-zoom-thumbnail"),
                    t.imageEl.style.transformOrigin = t.zoomOriginX + " " + t.zoomOriginY)
                }
                ), 2e3))
            }
            ,
            e.pauseZoomThumbnail = function() {
                clearTimeout(this.zoomThumbnailTimeout),
                this.imageEl && (this.imageEl.style.animationPlayState = this.model.get("viewable") ? "running" : "paused")
            }
            ,
            e.removeZoomThumbnail = function() {
                clearTimeout(this.zoomThumbnailTimeout),
                this.imageEl && this.imageEl.classList.remove("jw-ab-zoom-thumbnail")
            }
            ,
            e.resize = function(t, e, i) {
                var n, o = this;
                if ("uniform" === i) {
                    if (t && (this.playerAspectRatio = t / e),
                    !this.playerAspectRatio || !this.image || "complete" !== (n = this.model.get("state")) && "idle" !== n && "error" !== n && "buffering" !== n)
                        return;
                    var a = this.image
                      , r = null;
                    if (a) {
                        if (0 === a.width)
                            return void (a.onload = function() {
                                o.resize(t, e, i)
                            }
                            );
                        var s = a.width / a.height;
                        Math.abs(this.playerAspectRatio - s) < .09 && (r = "cover")
                    }
                    (0,
                    gt.oB)(this.el, {
                        backgroundSize: r
                    })
                }
            }
            ,
            e.element = function() {
                return this.el
            }
            ,
            e.destroy = function() {
                this.hasZoomThumbnail && (this.removeZoomThumbnail(),
                this.model.off(null, null, this))
            }
            ,
            t
        }()
          , St = i(3296)
          , Et = function(t) {
            var e = new Tt(t)
              , i = !t.get("autostart")
              , n = e.setImage.bind(e);
            return (e = (0,
            a.Z)(e, g.ZP)).deferSetImage = function(n, a, r) {
                t.once("change:playRejected change:autostart", (function() {
                    t.get("state") === o.bc && (i = !0,
                    e.setImage(n, a, r))
                }
                ))
            }
            ,
            e.setImage = function(o, a, r) {
                if (t.get("isAudioFile") && (i = !0),
                !i)
                    return e.deferSetImage(o, a, r);
                (n(o),
                a) && new St.Z("posterItem",e.el,r,t,(function() {
                    e.trigger("videoThumbnailFirstFrame", {
                        feedData: r.feedData,
                        target: r,
                        ui: "poster",
                        viewable: t.get("viewable")
                    })
                }
                )).init()
            }
            ,
            e
        }
          , At = i(5187)
          , It = function() {
            function t(t) {
                this.container = t
            }
            var e = t.prototype;
            return e.disable = function() {
                this.container && ((0,
                ht.IV)(this.container, "jw-floating-dragged"),
                (0,
                ht.IV)(this.container, "jw-floating-dragging"),
                Lt(this.container, "auto")),
                this.uiMedia = this.uiMedia && this.uiMedia.destroy(),
                this.uiBar = this.uiBar && this.uiBar.destroy(),
                this.uiTitle = this.uiTitle && this.uiTitle.destroy(),
                this.uiIcon = this.uiIcon && this.uiIcon.destroy()
            }
            ,
            e.enable = function() {
                this.inputMedia = this.container.querySelector(".jw-media"),
                this.inputBar = this.container.querySelector(".jw-float-bar"),
                this.inputTitle = this.container.querySelector(".jw-float-bar-title"),
                this.inputIcon = this.container.querySelector(".jw-float-bar-icon"),
                this.x = 0,
                this.y = 0,
                this.uiMedia = new yt.ZP(this.inputMedia,{
                    preventScrolling: !0
                }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this),
                this.uiBar = new yt.ZP(this.inputBar,{
                    preventScrolling: !0,
                    directSelect: !0
                }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this),
                this.uiTitle = new yt.ZP(this.inputTitle,{
                    preventScrolling: !0,
                    directSelect: !0
                }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this),
                this.uiIcon = new yt.ZP(this.inputIcon,{
                    preventScrolling: !0,
                    directSelect: !0
                }).on("dragStart", this.dragStart, this).on("drag", this.drag, this).on("dragEnd", this.dragEnd, this)
            }
            ,
            e.dragStart = function(t) {
                var e = t.pageX
                  , i = t.pageY
                  , n = window
                  , o = n.innerWidth
                  , a = n.innerHeight
                  , r = this.container.querySelector(".jw-float-bar")
                  , s = r && r.offsetHeight || 0
                  , l = this.container
                  , c = l.offsetLeft
                  , u = l.offsetTop
                  , d = l.offsetWidth
                  , p = l.offsetHeight;
                this.startX = e,
                this.startY = i,
                this.minDeltaX = -c,
                this.minDeltaY = -u,
                this.maxDeltaX = Pt(o, c, d),
                this.maxDeltaY = Pt(a, u, p + s),
                (0,
                ht.cn)(this.container, "jw-floating-dragged"),
                (0,
                ht.cn)(this.container, "jw-floating-dragging"),
                Lt(this.container, "transform")
            }
            ,
            e.drag = function(t) {
                var e = t.pageX
                  , i = t.pageY;
                this.deltaX = zt(this.x, e, this.startX, this.maxDeltaX, this.minDeltaX),
                this.deltaY = zt(this.y, i, this.startY, this.maxDeltaY, this.minDeltaY),
                (0,
                gt.vs)(this.container, "translate(" + this.deltaX + "px, " + this.deltaY + "px)")
            }
            ,
            e.dragEnd = function() {
                (0,
                ht.IV)(this.container, "jw-floating-dragging"),
                Lt(this.container, "auto"),
                this.x = this.deltaX,
                this.y = this.deltaY
            }
            ,
            t
        }()
          , Pt = function(t, e, i) {
            return t - e - i
        }
          , zt = function(t, e, i, n, o) {
            return Math.max(Math.min(t + e - i, n), o)
        }
          , Lt = function(t, e) {
            return (0,
            gt.oB)(t, {
                willChange: e
            })
        };
        function Bt(t, e, i, n) {
            var o = {
                width: e
            };
            if (n && void 0 !== i && t.set("aspectratio", null),
            !t.get("aspectratio")) {
                var a = i;
                (0,
                k.hj)(a) && 0 !== a && (a = Math.max(a, 44)),
                o.height = a
            }
            return o
        }
        var Zt = null
          , Vt = {
            floatingPlayer: Zt
        };
        Object.defineProperty(Vt, "floatingPlayer", {
            get: function() {
                return Zt
            },
            set: function(t) {
                if (t !== Zt) {
                    Zt = t;
                    var e = Rt.slice();
                    Rt.length = 0,
                    e.forEach((function(t) {
                        t.startFloating()
                    }
                    ))
                }
            }
        });
        var Ft, Rt = [], Ht = function(t) {
            var e = Rt.indexOf(t);
            -1 !== e && Rt.splice(e, 1)
        }, Ot = function() {
            function t(t, e, i, n) {
                void 0 === n && (n = _.OS.mobile),
                this._playerEl = i.player,
                this._wrapperEl = i.wrapper,
                this._preview = i.preview,
                this._model = t,
                this._floatingUI = new It(this._wrapperEl),
                this._floatingStoppedForever = !1,
                this._lastIntRatio = 0,
                this._playerBounds = e,
                this._isMobile = n,
                this._mobileCheckCanFire = !0,
                this._inTransition = !1,
                this._boundThrottledMobileFloatScrollHandler = this.throttledMobileFloatScrollHandler.bind(this),
                this._boundInitFloatingBehavior = this.initFloatingBehavior.bind(this)
            }
            var e = t.prototype;
            return e.setup = function() {
                this._model.change("floating", this._boundInitFloatingBehavior)
            }
            ,
            e.initFloatingBehavior = function() {
                if (!this._floatingStoppedForever && (ot.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler),
                Ht(this),
                this.getFloatingConfig())) {
                    var t = this.getFloatMode();
                    "notVisible" === t ? this._isMobile ? (ot.Z.addScrollHandler(this._boundThrottledMobileFloatScrollHandler),
                    this._boundThrottledMobileFloatScrollHandler()) : this.checkFloatIntersection() : "always" === t ? this.startFloating() : "never" === t && this.stopFloating()
                }
            }
            ,
            e.updatePlayerBounds = function(t) {
                this._playerBounds = t
            }
            ,
            e.getFloatingConfig = function() {
                return this._model.get("floating")
            }
            ,
            e.getFloatMode = function() {
                var t = this.getFloatingConfig();
                return t && t.mode || "notVisible"
            }
            ,
            e.resize = function() {
                this._model.get("isFloating") && this.updateFloatingSize()
            }
            ,
            e.fosMobileBehavior = function() {
                return this._isMobile && !(0,
                ht.UM)() && !this._model.get("fullscreen")
            }
            ,
            e.shouldFloatOnViewable = function() {
                var t = this._model.get("state");
                return t !== o.bc && t !== o.Vy && t !== o.xQ
            }
            ,
            e.startFloating = function(t) {
                var e, i = this, n = this._playerBounds;
                if (null === this.getFloatingPlayer() && this._wrapperEl.querySelector(".jw-float-bar")) {
                    this.setFloatingPlayer(this._playerEl),
                    this.transitionFloating(!0),
                    this._model.set("isFloating", !0),
                    (0,
                    ht.cn)(this._playerEl, "jw-flag-floating"),
                    t ? ((0,
                    gt.oB)(this._wrapperEl, {
                        transform: "translateY(-" + (62 - n.top) + "px)"
                    }),
                    window.setTimeout((function() {
                        (0,
                        gt.oB)(i._wrapperEl, {
                            transform: "translateY(0)",
                            transition: "transform 150ms cubic-bezier(0, 0.25, 0.25, 1)"
                        })
                    }
                    ))) : (0,
                    gt.oB)(this._wrapperEl, {
                        transform: "translate(0)"
                    }),
                    window.setTimeout((function() {
                        i.transitionFloating(!1)
                    }
                    ), 50);
                    var o = this._preview.el;
                    (0,
                    gt.oB)(this._playerEl, {
                        backgroundImage: o.style.backgroundImage
                    }),
                    this.updateFloatingSize(),
                    this._model.get("instreamMode") || this._floatingUI.enable()
                } else
                    this.getFloatingPlayer() !== this._playerEl && "always" === this.getFloatMode() && (e = this,
                    -1 === Rt.indexOf(e) && Rt.push(e))
            }
            ,
            e.stopFloating = function(t, e) {
                var i = this;
                if (t && (this._floatingStoppedForever = !0,
                ot.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler)),
                this.getFloatingPlayer() === this._playerEl) {
                    this.transitionFloating(!0),
                    this.setFloatingPlayer(null),
                    this._model.set("isFloating", !1);
                    var n = this._playerBounds
                      , o = function() {
                        (0,
                        ht.IV)(i._playerEl, "jw-flag-floating"),
                        i._model.trigger("forceAspectRatioChange", {}),
                        (0,
                        gt.oB)(i._playerEl, {
                            backgroundImage: null
                        }),
                        (0,
                        gt.oB)(i._wrapperEl, {
                            maxWidth: null,
                            width: null,
                            height: null,
                            transform: null,
                            transition: null,
                            "transition-timing-function": null
                        }),
                        window.setTimeout((function() {
                            i.transitionFloating(!1)
                        }
                        ), 50)
                    };
                    e ? ((0,
                    gt.oB)(this._wrapperEl, {
                        transform: "translateY(-" + (62 - n.top) + "px)",
                        "transition-timing-function": "ease-out"
                    }),
                    window.setTimeout(o, 150)) : o(),
                    this.disableFloatingUI()
                }
            }
            ,
            e.transitionFloating = function(t) {
                this._inTransition = t;
                var e = this._wrapperEl;
                (0,
                gt.oB)(e, {
                    display: t ? "none" : null
                }),
                t || this._model.trigger("forceResponsiveListener", {})
            }
            ,
            e.isInTransition = function() {
                return this._inTransition
            }
            ,
            e.updateFloatingSize = function() {
                var t = this._playerBounds
                  , e = this._model.get("width")
                  , i = this._model.get("height")
                  , n = Bt(this._model, e);
                if (n.maxWidth = Math.min(400, t.width),
                !this._model.get("aspectratio")) {
                    var o = t.width
                      , a = t.height / o || .5625;
                    (0,
                    k.hj)(e) && (0,
                    k.hj)(i) && (a = i / e),
                    this._model.trigger("forceAspectRatioChange", {
                        ratio: 100 * a + "%"
                    })
                }
                (0,
                gt.oB)(this._wrapperEl, n)
            }
            ,
            e.enableFloatingUI = function() {
                this._floatingUI.enable()
            }
            ,
            e.disableFloatingUI = function() {
                this._floatingUI.disable()
            }
            ,
            e.setFloatingPlayer = function(t) {
                Vt.floatingPlayer = t
            }
            ,
            e.getFloatingPlayer = function() {
                return Vt.floatingPlayer
            }
            ,
            e.destroy = function() {
                this.getFloatingPlayer() === this._playerEl && this.setFloatingPlayer(null),
                this.getFloatingConfig() && this._isMobile && ot.Z.removeScrollHandler(this._boundThrottledMobileFloatScrollHandler),
                this._floatingUI.disable(),
                Ht(this),
                this._model.off("change:floating", this._boundInitFloatingBehavior)
            }
            ,
            e.updateFloating = function(t, e) {
                t < .5 && !(0,
                wt.cL)() && this.shouldFloatOnViewable() ? this.startFloating(e) : this.stopFloating(!1, e)
            }
            ,
            e.checkFloatOnScroll = function() {
                if ("notVisible" === this.getFloatMode()) {
                    var t = this._model.get("isFloating")
                      , e = this._playerBounds
                      , i = e.top < 62
                      , n = window.scrollY || window.pageYOffset
                      , o = i ? e.top <= n : e.top <= n + 62;
                    !t && o ? this.updateFloating(0, i) : t && !o && this.updateFloating(1, i)
                }
            }
            ,
            e.throttledMobileFloatScrollHandler = function() {
                var t = this;
                this.fosMobileBehavior() && this._model.get("inDom") && (clearTimeout(this._mobileDebounceTimeout),
                this._mobileDebounceTimeout = window.setTimeout(this.checkFloatOnScroll.bind(this), 150),
                this._mobileCheckCanFire && (this._mobileCheckCanFire = !1,
                this.checkFloatOnScroll(),
                window.setTimeout((function() {
                    t._mobileCheckCanFire = !0
                }
                ), 50)))
            }
            ,
            e.checkFloatIntersection = function(t) {
                var e = "number" == typeof t
                  , i = e ? t : this._lastIntRatio;
                this._canFloat = this._canFloat || i >= .5,
                !this.getFloatingConfig() || "notVisible" !== this.getFloatMode() || this.fosMobileBehavior() || this._floatingStoppedForever || this._canFloat && this.updateFloating(i),
                e && (this._lastIntRatio = t)
            }
            ,
            e.updateStyles = function() {
                !this._floatingStoppedForever && this.getFloatingConfig() && "notVisible" === this.getFloatMode() && this._boundThrottledMobileFloatScrollHandler()
            }
            ,
            t
        }(), Nt = i(9926);
        i(5430);
        var qt = _.OS.mobile
          , Ut = _.Browser.ie;
        var Dt = function(t, e) {
            var i, n, r, s, l, c, u = this, d = (0,
            a.Z)(this, g.ZP, {
                isSetup: !1,
                api: t,
                model: e
            }), p = e.get("localization"), h = (0,
            ht.az)((i = e.get("id"),
            n = p.player,
            '<div id="' + i + '" class="jwplayer jw-reset jw-state-setup" tabindex="0" aria-label="' + (n || "") + '" role="application"><div class="jw-aspect jw-reset"></div><div class="jw-wrapper jw-reset"><div class="jw-top jw-reset"></div><div class="jw-aspect jw-reset"></div><div class="jw-media jw-reset"></div><div class="jw-preview jw-reset"></div><div class="jw-title jw-reset-text" dir="auto"><div class="jw-title-primary jw-reset-text"></div><div class="jw-title-secondary jw-reset-text"></div></div><div class="jw-overlays jw-reset"></div><div class="jw-hidden-accessibility"><span class="jw-time-update" aria-live="assertive"></span><span class="jw-volume-update" aria-live="assertive"></span></div></div></div>')), w = h.querySelector(".jw-wrapper"), f = h.querySelector(".jw-media"), j = new Et(e,t), m = new At.Z(e), v = new kt.Z(e);
            v.on("all", d.trigger, d);
            var b = -1
              , y = -1
              , x = -1
              , C = e.get("floating");
            this.dismissible = C && C.dismissible;
            var M, T, S, E = {}, A = new Ot(e,E,{
                player: h,
                wrapper: w,
                preview: j
            }), I = null, P = null, z = !1, L = null;
            function B() {
                (0,
                ct.W)(y),
                y = (0,
                ct.U)(Z)
            }
            function Z() {
                d.isSetup && !A.isInTransition() && (d.updateBounds(),
                d.updateStyles(),
                d.checkResized())
            }
            function V(t, i) {
                if ((0,
                k.hj)(t) && (0,
                k.hj)(i)) {
                    var n = (0,
                    ut.i)(t);
                    (0,
                    ut.d)(h, n);
                    var o = n < 2;
                    (0,
                    ht.og)(h, "jw-flag-small-player", o),
                    (0,
                    ht.og)(h, "jw-orientation-portrait", i > t)
                }
                if (e.get("controls")) {
                    var a = function(t) {
                        var e = t.get("height");
                        if (t.get("aspectratio"))
                            return !1;
                        if ("string" == typeof e && e.indexOf("%") > -1)
                            return !1;
                        var i = 1 * e || NaN;
                        return !!(i = isNaN(i) ? t.get("containerHeight") : i) && !!(i && i <= 44)
                    }(e);
                    (0,
                    ht.og)(h, "jw-flag-audio-player", a),
                    e.set("audioMode", a)
                }
            }
            function F() {
                e.get("pip") || e.set("visibility", at(e, h))
            }
            function R(t, e) {
                var i = {
                    controls: e
                };
                e ? (Ft = pt.v.controls) ? H() : (i.loadPromise = (0,
                pt.z)().then((function(e) {
                    Ft = e;
                    var i = t.get("controls");
                    return i && H(),
                    i
                }
                )),
                i.loadPromise.catch((function(t) {
                    d.trigger(o.cM, t)
                }
                ))) : d.removeControls(),
                s && l && d.trigger(o.Hy, i)
            }
            function H() {
                var t = new Ft(document,d.element());
                d.addControls(t)
            }
            function O(t, e, i) {
                e && !i && (it(t, t.get("state")),
                d.updateStyles())
            }
            function N(t) {
                P && P.mouseMove(t)
            }
            function q(t) {
                P && !P.showing && "IFRAME" === t.target.nodeName && P.userActive()
            }
            function U(t) {
                P && P.showing && (t.relatedTarget && !h.contains(t.relatedTarget) || !t.relatedTarget && _.Features.iframe) && P.userActive()
            }
            function D(t, e) {
                (0,
                ht.L_)(h, /jw-stretch-\S+/, "jw-stretch-" + e)
            }
            function W(t, e) {
                (0,
                ht.og)(h, "jw-flag-aspect-mode", !!e);
                var i = h.querySelectorAll(".jw-aspect");
                (0,
                gt.oB)(i, {
                    paddingTop: e || null
                }),
                d.isSetup && e && !t.get("isFloating") && (0,
                gt.oB)(h, Bt(t, t.get("width")))
            }
            function Q(i) {
                i.link ? (t.pause({
                    reason: "interaction"
                }),
                t.setFullscreen(!1),
                (0,
                ht.nG)(i.link, i.linktarget, {
                    rel: "noreferrer"
                })) : e.get("controls") && t.playToggle({
                    reason: "interaction"
                })
            }
            this.updateBounds = function() {
                (0,
                ct.W)(y);
                var t = Mt()
                  , i = document.body.contains(t)
                  , n = (0,
                ht.A8)(t)
                  , o = Math.round(n.width)
                  , a = Math.round(n.height);
                if (E = (0,
                ht.A8)(h),
                A.updatePlayerBounds(E),
                o === s && a === l)
                    return s && l || B(),
                    void e.set("inDom", i);
                o && a || s && l || B(),
                (o || a || i) && (e.set("containerWidth", o),
                e.set("containerHeight", a)),
                e.set("inDom", i),
                i && ot.Z.observe(h)
            }
            ,
            this.updateStyles = function() {
                var t = e.get("containerWidth")
                  , i = e.get("containerHeight");
                V(t, i),
                P && P.resize(t, i),
                Y(t, i),
                v.resize(),
                A.updateStyles()
            }
            ,
			// في مكان تعريف الأزرار في controls.js
var W = [R.play, R.rewind, R.next, R.volumetooltip, R.horizontalVolumeContainer, R.imaFullscreen, R.mute, R.alt, R.live, R.elapsed, R.countdown, R.duration, R.spacer, R.cast, R.captionsButton, R.settingsButton, R.pip, R.fullscreen].filter((function(t) {
    return t;
}));

// إضافة زر Zoom
var zoomButton = (0, j.Z)("jw-icon-zoom", function() {
    var videoElement = this._model.get("mediaElement");
    var currentWidth = videoElement.offsetWidth;
    var newWidth = currentWidth + 100; // زيادة العرض بمقدار 100px
    videoElement.style.width = newWidth + "px";
}, "Zoom", [(0, r.o)("zoom")]);

// إضافة الزر إلى لوحة التحكم
W.push(zoomButton);

            this.checkResized = function() {
                var t = e.get("containerWidth")
                  , i = e.get("containerHeight")
                  , n = e.get("isFloating");
                if (t !== s || i !== l) {
                    this.resizeListener || (this.resizeListener = new Nt.Z(w,this,e)),
                    s = t,
                    l = i,
                    d.trigger(o.sF, {
                        width: t,
                        height: i
                    });
                    var a = (0,
                    ut.i)(t);
                    I !== a && (I = a,
                    d.trigger(o.Bs, {
                        breakpoint: I
                    }))
                }
                n !== c && (c = n,
                d.trigger(o.RF, {
                    floating: n
                }),
                F())
            }
            ,
			// في مكان تعريف الأزرار في controls.js
var W = [R.play, R.rewind, R.next, R.volumetooltip, R.horizontalVolumeContainer, R.imaFullscreen, R.mute, R.alt, R.live, R.elapsed, R.countdown, R.duration, R.spacer, R.cast, R.captionsButton, R.settingsButton, R.pip, R.fullscreen].filter((function(t) {
    return t;
}));

// إضافة زر Cast إذا لم يكن موجودًا
if (!R.cast) {
    R.cast = _((function() {
        t.castToggle();
    }), p);
    (0, m.i)(R.cast.element(), "chromecast", p.cast);
}

// إضافة الزر إلى لوحة التحكم
W.push(R.cast);
            this.responsiveListener = B,
            this.setup = function() {
                j.setup(h.querySelector(".jw-preview")),
                m.setup(h.querySelector(".jw-title")),
                (r = new _t(e)).setup(),
                r.setContainer(w),
                r.on(o.Ib, Q),
                v.setup(h.id, e.get("captions")),
                m.element().parentNode.insertBefore(v.element(), m.element()),
                M = function(t, e, i) {
                    var n = new xt(e,i)
                      , a = e.get("controls");
                    n.on({
                        click: function() {
                            if (d.trigger(o.cy),
                            Mt().focus(),
                            P) {
                                if (_.OS.mobile) {
                                    var i = e.get("state");
                                    if (a && (i === o.bc || i === o.xQ || e.get("instream") && i === o._5) && t.playToggle({
                                        reason: "interaction"
                                    }),
                                    a && i === o._5) {
                                        if (e.get("instream") || e.get("castActive") || "audio" === e.get("mediaType"))
                                            return;
                                        (0,
                                        ht.og)(h, "jw-flag-controls-hidden"),
                                        d.dismissible && (0,
                                        ht.og)(h, "jw-floating-dismissible", (0,
                                        ht.pv)(h, "jw-flag-controls-hidden")),
                                        v.renderCues(!0)
                                    } else
                                        P.showing ? P.userInactive() : P.userActive();
                                    return
                                }
                                ft() ? P.settingsMenu.close() : e.get("displayStats") ? e.set("displayStats", !1) : t.playToggle({
                                    reason: "interaction"
                                })
                            }
                        },
                        doubleClick: function() {
                            return P && t.setFullscreen()
                        }
                    }),
                    qt || (h.addEventListener("mousemove", N),
                    h.addEventListener("mouseover", q),
                    h.addEventListener("mouseout", U));
                    return n
                }(t, e, f),
                S = new yt.ZP(h).on("click", (function() {}
                )),
                T = bt(h, document, X),
                e.on("change:hideAdsControls", (function(t, e) {
                    (0,
                    ht.og)(h, "jw-flag-ads-hide-controls", e)
                }
                )),
                e.on("change:scrubbing", (function(t, e) {
                    (0,
                    ht.og)(h, "jw-flag-dragging", e)
                }
                )),
                e.on("change:playRejected", (function(t, e) {
                    (0,
                    ht.og)(h, "jw-flag-play-rejected", e)
                }
                )),
                e.on(o.h7, K),
                e.on("change:" + o.ug, (function() {
                    Y(),
                    v.resize()
                }
                )),
                e.player.on("change:errorEvent", et),
                e.change("stretching", D);
                var i = e.get("width")
                  , n = e.get("height")
                  , a = Bt(e, i, n);
                (0,
                gt.oB)(h, a),
                e.change("aspectratio", W),
                V(i, n),
                e.get("controls") || ((0,
                ht.cn)(h, "jw-flag-controls-hidden"),
                (0,
                ht.IV)(h, "jw-floating-dismissible")),
                Ut && (0,
                ht.cn)(h, "jw-ie");
                var s = e.get("skin") || {};
                s.name && (0,
                ht.L_)(h, /jw-skin-\S+/, "jw-skin-" + s.name);
                var l = (0,
                dt.xq)(s);
                (0,
                dt.Sf)(e.get("id"), l),
                e.set("mediaContainer", f),
                e.set("iFrame", _.Features.iframe),
                e.set("activeTab", (0,
                lt.Z)()),
                e.set("touchMode", qt && ("string" == typeof n || n >= 44)),
                ot.Z.add(this),
                e.get("enableGradient") && !Ut && (0,
                ht.cn)(h, "jw-ab-drop-shadow"),
                this.isSetup = !0,
                e.trigger("viewSetup", h);
                var c = document.body.contains(h);
                c && ot.Z.observe(h),
                e.set("inDom", c),
                e.on("forceAspectRatioChange", (function(t) {
                    var i = t.ratio || e.get("aspectratio");
                    W(e, i)
                }
                )),
                e.on("forceResponsiveListener", B),
                A.setup()
            }
            ,
            this.init = function() {
                this.updateBounds(),
                e.on("change:fullscreen", $),
                e.on("change:pip", vt),
                e.on("change:activeTab", F),
                e.on("change:fullscreen", F),
                e.on("change:intersectionRatio", F),
                e.on("change:visibility", O),
                e.on("instreamMode", (function(t) {
                    t ? jt() : mt()
                }
                )),
                F(),
                1 !== ot.Z.size() || e.get("visibility") || O(e, 1, 0);
                var t = e.player;
                e.change("state", it),
                t.change("controls", R),
                e.change("streamType", G),
                e.change("mediaType", tt),
                t.change("playlistItem", (function(t, e) {
                    st(t, e)
                }
                )),
                s = l = null,
                this.initFloatingBehavior(),
                this.checkResized()
            }
            ,
            this.initFloatingBehavior = function() {
                A.initFloatingBehavior()
            }
            ,
            this.addControls = function(i) {
                var n = this;
                P = i,
                (0,
                ht.IV)(h, "jw-flag-controls-hidden"),
                (0,
                ht.og)(h, "jw-floating-dismissible", this.dismissible),
                i.enable(t, e),
                l && (V(s, l),
                i.resize(s, l),
                v.renderCues(!0)),
                i.on("userActive userInactive", (function() {
                    var t = e.get("state");
                    t !== o.r0 && t !== o.Kb || v.renderCues(!0)
                }
                )),
                i.on("dismissFloating", (function() {
                    n.stopFloating(!0),
                    e.get("autoPause") && !e.get("autoPause").pauseAds && e.get("instream") || t.pause({
                        reason: "interaction"
                    })
                }
                )),
                i.on("all", d.trigger, d),
                e.get("instream") && P.setupInstream()
            }
            ,
            this.removeControls = function() {
                P && (P.disable(e),
                P = null),
                (0,
                ht.cn)(h, "jw-flag-controls-hidden"),
                (0,
                ht.IV)(h, "jw-floating-dismissible")
            }
            ;
            var $ = function(e, i) {
                if (i && P && e.get("autostartMuted") && P.unmuteAutoplay(t, e),
                T.supportsDomFullscreen())
                    i ? T.requestFullscreen() : T.exitFullscreen(),
                    J(h, i);
                else if (Ut)
                    J(h, i);
                else {
                    var n = e.get("instream")
                      , o = n ? n.provider : null
                      , a = e.getVideo() || o;
                    a && a.setFullscreen && a.setFullscreen(i)
                }
            };
            function Y(t, i) {
                if ((t && !isNaN(1 * t) || (t = e.get("containerWidth"))) && (i && !isNaN(1 * i) || (i = e.get("containerHeight")))) {
                    j && j.resize(t, i, e.get("stretching"));
                    var n = e.getVideo();
                    n && n.resize(t, i, e.get("stretching"))
                }
            }
            function K(t) {
                _.OS.mobile && ((0,
                ht.og)(h, "jw-flag-ios-fullscreen", t.jwstate),
                X(t))
            }
            function X(t) {
                var i = e.get("fullscreen")
                  , n = void 0 !== t.jwstate ? t.jwstate : function() {
                    if (T.supportsDomFullscreen()) {
                        var t = T.fullscreenElement();
                        return !(!t || t !== h)
                    }
                    return e.getVideo().getFullScreen()
                }();
                i !== n && e.set("fullscreen", n),
                _.OS.android && n && screen.orientation.lock("landscape-primary"),
                B(),
                clearTimeout(b),
                b = setTimeout(Y, 200)
            }
            function J(t, e) {
                (0,
                ht.og)(t, "jw-flag-fullscreen", e),
                (0,
                gt.oB)(document.body, {
                    overflowY: e ? "hidden" : ""
                }),
                e && P && P.userActive(),
                Y(),
                B()
            }
            function G(t, e) {
                var i = "LIVE" === e;
                (0,
                ht.og)(h, "jw-flag-live", i)
            }
            function tt(t, e) {
                var i = "audio" === e
                  , n = t.get("isAudioFile")
                  , o = t.get("playlistItem");
                n !== i && (t.set("isAudioFile", i),
                j.setImage(o && o.image)),
                (0,
                ht.og)(h, "jw-flag-media-audio", i),
                i && t.get("pip") && t.set("pip", !1);
                var a = i ? f : f.nextSibling;
                j.el.parentNode.insertBefore(j.el, a)
            }
            function et(t, e) {
                if (e) {
                    var i = (0,
                    nt.Z)(t, e);
                    nt.Z.cloneIcon && i.querySelector(".jw-icon").appendChild(nt.Z.cloneIcon("error")),
                    m.hide(),
                    h.appendChild(i.firstChild),
                    (0,
                    ht.og)(h, "jw-flag-audio-player", !!t.get("audioMode"))
                } else
                    m.playlistItem(t, t.get("playlistItem"))
            }
            function it(t, e, i) {
                if (d.isSetup) {
                    if (i === o.Vy) {
                        var n = h.querySelector(".jw-error-msg");
                        n && n.parentNode.removeChild(n)
                    }
                    (0,
                    ct.W)(x),
                    e === o.r0 ? rt(e) : x = (0,
                    ct.U)((function() {
                        return rt(e)
                    }
                    ))
                }
            }
            function rt(t) {
                switch (e.get("controls") && t !== o._5 && (0,
                ht.pv)(h, "jw-flag-controls-hidden") && ((0,
                ht.IV)(h, "jw-flag-controls-hidden"),
                (0,
                ht.og)(h, "jw-floating-dismissible", d.dismissible)),
                (0,
                ht.L_)(h, /jw-state-\S+/, "jw-state-" + t),
                t) {
                case o.Vy:
                    d.stopFloating();
                case o.bc:
                case o.xQ:
                    v && v.hide(),
                    j && j.enableZoomThumbnail();
                    break;
                default:
                    v && (v.show(),
                    t === o._5 && P && !P.showing && v.renderCues(!0)),
                    j && j.removeZoomThumbnail()
                }
            }
            this.resize = function(t, i) {
                var n = Bt(e, t, i, !0);
                void 0 !== t && void 0 !== i && (e.set("width", t),
                e.set("height", i)),
                (0,
                gt.oB)(h, n),
                A.resize(),
                Z()
            }
            ,
            this.resizeMedia = Y,
            this.setPosterImage = function(t, e) {
                e.setImage(t && t.image)
            }
            ;
            var st = function(t, e) {
                u.setPosterImage(e, j),
                qt && function(t, e) {
                    var i = t.get("mediaElement");
                    if (i) {
                        var n = (0,
                        ht.bJ)(e.title || "");
                        i.setAttribute("title", n.textContent)
                    }
                }(t, e)
            }
              , ft = function() {
                var t = P && P.settingsMenu;
                return !(!t || !t.visible)
            }
              , jt = function() {
                (0,
                ht.cn)(h, "jw-flag-ads"),
                P && P.setupInstream(),
                A.disableFloatingUI()
            }
              , mt = function() {
                if (M) {
                    P && P.destroyInstream(e),
                    A.getFloatingPlayer() !== h || (0,
                    wt.cL)() || A.enableFloatingUI(),
                    d.setAltText(""),
                    (0,
                    ht.IV)(h, ["jw-flag-ads", "jw-flag-ads-hide-controls"]),
                    e.set("hideAdsControls", !1);
                    var t = e.getVideo();
                    t && t.setContainer(f),
                    M.revertAlternateClickHandlers()
                }
            }
              , vt = function(t, e) {
                e ? d.requestPip() : document.pictureInPictureElement && document.exitPictureInPicture()
            };
            function Ct() {
                if (L) {
                    var t = L
                      , e = t.video
                      , i = t.enter
                      , n = t.leave;
                    e.removeEventListener("loadedmetadata", i),
                    e.removeEventListener("leavepictureinpicture", n)
                }
            }
            function Mt() {
                return e.get("isFloating") ? w : h
            }
            this.requestPip = function(t) {
                var i = t || e.get("mediaElement");
                if (i.requestPictureInPicture) {
                    Ct();
                    var n = function t() {
                        Ct(),
                        i.requestPictureInPicture().then((function() {
                            z || (z = !0,
                            d.trigger("pipEnter", {
                                video: i
                            })),
                            i.addEventListener("leavepictureinpicture", o)
                        }
                        )),
                        i.removeEventListener("loadedmetadata", t)
                    }
                      , o = function t() {
                        i.removeEventListener("leavepictureinpicture", t),
                        z && (z = !1,
                        d.trigger("pipLeave", {
                            video: i
                        }),
                        e.set("pip", !1),
                        document.pictureInPictureElement && document.exitPictureInPicture())
                    };
                    i.readyState ? n() : i.addEventListener("loadedmetadata", n),
                    L = {
                        video: i,
                        enter: n,
                        leave: o
                    }
                }
            }
            ,
            this.setAltText = function(t) {
                e.set("altText", t)
            }
            ,
            this.clickHandler = function() {
                return M
            }
            ,
            this.getContainer = this.element = function() {
                return h
            }
            ,
            this.getWrapper = function() {
                return w
            }
            ,
            this.controlsContainer = function() {
                return P ? P.element() : null
            }
            ,
            this.getSafeRegion = function(t) {
                void 0 === t && (t = !0);
                var e = {
                    x: 0,
                    y: 0,
                    width: s || 0,
                    height: l || 0
                };
                return P && t && (e.height -= P.controlbarHeight()),
                e
            }
            ,
            this.setCaptions = function(t) {
                v.clear(),
                v.setup(e.get("id"), t),
                v.resize()
            }
            ,
            this.setIntersection = function(t) {
                var i = Math.round(100 * t.intersectionRatio) / 100;
                e.set("intersectionRatio", i),
                this.checkFloatIntersection(i)
            }
            ,
            this.checkFloatIntersection = function(t) {
                A.checkFloatIntersection(t)
            }
            ,
            this.stopFloating = function(t, e) {
                A.stopFloating(t, e)
            }
            ,
            this.destroy = function() {
                e.destroy(),
                j.destroy(),
                ot.Z.unobserve(h),
                ot.Z.remove(this),
                this.isSetup = !1,
                this.off(),
                (0,
                ct.W)(y),
                clearTimeout(b),
                S && (S.destroy(),
                S = null),
                T && (T.destroy(),
                T = null),
                P && P.disable(e),
                M && (M.destroy(),
                h.removeEventListener("mousemove", N),
                h.removeEventListener("mouseout", U),
                h.removeEventListener("mouseover", q),
                M = null),
                v.destroy(),
                r && (r.destroy(),
                r = null),
                (0,
                gt.oI)(e.get("id")),
                this.resizeListener && (this.resizeListener.destroy(),
                delete this.resizeListener),
                A.destroy()
            }
        }
          , Wt = !1
          , Qt = window.$sf
          , $t = function(t, e) {
            this.playerElement = t,
            this.wrapperElement = e
        };
        (0,
        a.Z)($t.prototype, {
            setup: function(t) {
                var e = (0,
                ht.az)(function(t) {
                    return '<span class="jw-text jw-reset">' + t + "</span>"
                }(t));
                this.wrapperElement.appendChild(e),
                (0,
                ht.cn)(this.playerElement, "jw-flag-top")
            }
        });
        var Yt, Kt = $t, Xt = i(8675), Jt = i.n(Xt), Gt = i(8168), te = i(2977), ee = function(t, e, n) {
            var a = "free" === e.get("edition");
            a && !Yt && (i(678),
            Yt = !0,
            n && n.cssInjected && n.cssInjected());
            var r = new (n && n.View ? n.View : Dt)(t,e)
              , s = r.setup;
            if (r.setPosterImage = function(i, n) {
                var o = (0,
                te.Cz)(i.images)
                  , a = i && i.image
                  , s = r.model.get("containerWidth");
                s && (a = (0,
                te.Bf)(i, (0,
                te.IJ)(s))),
                o ? (_.OS.mobile || o.reverse(),
                i.videoThumbnail = o[0].src,
                n.on("videoThumbnailFirstFrame", (function(e) {
                    t.trigger("videoThumbFirstFrame", e)
                }
                )),
                n.setImage(a, !0, i, e)) : n.setImage(a)
            }
            ,
            r.setup = function() {
                var t = this;
                (s.call(this),
                e.get("displayHeading")) && new Kt(r.getContainer(),r.getContainer().querySelector(".jw-top")).setup(e.get("localization").advertising.displayHeading);
                e.change("castAvailable", (function(e, i) {
                    var n = e.get("cast");
                    Object(n) === n && (0,
                    ht.og)(t.getContainer(), "jw-flag-cast-available", i)
                }
                ), this),
                e.change("castActive", (function(e, i) {
                    var n = e.get("airplayActive")
                      , o = t.getContainer();
                    (0,
                    ht.og)(o, "jw-flag-casting", i || !1),
                    (0,
                    ht.og)(o, "jw-flag-airplay-casting", n || !1)
                }
                ), this)
            }
            ,
            a) {
                var l = r.addControls;
                r.addControls = function(t) {
                    l.call(this, t);
                    var e = document.querySelector(".jw-logo-button");
                    if (e) {
                        var i = (0,
                        Gt.w)(Jt());
                        e.appendChild(i)
                    }
                }
            }
            var c = e.get("advertising");
            return c && c.outstream && function(t, e) {
                Wt || (Wt = !0,
                i(8206));
                var n = e.model
                  , a = e.getSafeRegion;
                e.getSafeRegion = function(t) {
                    var e = a.call(this, t);
                    return e.height = this.api.getHeight(),
                    e
                }
                ,
                n.on("change:mediaState", (function(i, r) {
                    if (r === o.ik || r === o.r0) {
                        if (n.off("change:mediaState", null, e),
                        Qt && Qt.ext && Qt.ext.supports()["exp-push"]) {
                            var s = Qt.ext.geom()
                              , l = s.exp
                              , c = s.self
                              , u = Math.min(t.getHeight() - c.h, l.yx ? 1 / 0 : l.b)
                              , d = Math.min(t.getWidth() - c.w, l.xs ? 1 / 0 : l.r);
                            (u > 0 || d > 0) && Qt.ext.expand({
                                b: Math.max(0, u),
                                r: Math.max(0, d),
                                push: !0
                            })
                        }
                        (0,
                        ht.IV)(e.getContainer(), "jw-flag-outstream-pending"),
                        e.getSafeRegion = a,
                        e.responsiveListener()
                    }
                }
                ), e);
                var r = e.setup;
                e.setup = function() {
                    r.call(this),
                    (0,
                    ht.cn)(this.getContainer(), "jw-flag-outstream jw-flag-outstream-pending")
                }
                ;
                var s = n.get("advertising");
                s.dismissible && (e.dismissible = !0,
                e.on("dismissFloating", (function() {
                    t.remove()
                }
                ))),
                Qt && Qt.ext && t.once(o.Rc, (function() {
                    Qt.ext.register(t.getWidth(), t.getHeight())
                }
                )),
                t.once(o.V$, (function() {
                    e.stopFloating(!0),
                    "close" === s.endstate && ((0,
                    ht.cn)(e.getContainer(), "jw-flag-outstream-close"),
                    Qt && Qt.ext && Qt.ext.collapse())
                }
                ))
            }(t, r),
            r
        }, ie = /^change:(.+)$/;
        function ne(t, e, i) {
            Object.keys(e).forEach((function(n) {
                n in e && e[n] !== i[n] && t.trigger("change:" + n, t, e[n], i[n])
            }
            ))
        }
        function oe(t, e) {
            t && t.off(null, null, e)
        }
        var ae = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this) || this)._model = e,
                n._mediaModel = null,
                (0,
                a.Z)(e.attributes, {
                    altText: "",
                    fullscreen: !1,
                    logoWidth: 0,
                    scrubbing: !1
                }),
                e.on("all", (function(t, o, a, r) {
                    o === e && (o = (0,
                    v.Z)(n)),
                    i && !i(t, o, a, r) || n.trigger(t, o, a, r)
                }
                ), (0,
                v.Z)(n)),
                e.on("change:mediaModel", (function(t, e) {
                    n.mediaModel = e
                }
                ), (0,
                v.Z)(n)),
                n
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.get = function(t) {
                var e = this._mediaModel;
                return e && t in e.attributes ? e.get(t) : this._model.get(t)
            }
            ,
            i.set = function(t, e) {
                return this._model.set(t, e)
            }
            ,
            i.getCues = function() {
                return this._model.getCues()
            }
            ,
            i.getVideo = function() {
                return this._model.getVideo()
            }
            ,
            i.destroy = function() {
                oe(this._model, this),
                oe(this._mediaModel, this),
                this.off()
            }
            ,
            (0,
            f.Z)(e, [{
                key: "mediaModel",
                set: function(t) {
                    var e = this
                      , i = this._mediaModel;
                    oe(i, this),
                    this._mediaModel = t,
                    t.on("all", (function(i, n, o, a) {
                        n === t && (n = e),
                        e.trigger(i, n, o, a)
                    }
                    ), this),
                    i && ne(this, t.attributes, i.attributes)
                }
            }]),
            e
        }(T.Z)
          , re = function(t) {
            function e(e) {
                var i;
                return (i = t.call(this, e, (function(t) {
                    var e = i._instreamModel;
                    if (e) {
                        var n = ie.exec(t);
                        if (n)
                            if (n[1]in e.attributes)
                                return !1
                    }
                    return !0
                }
                )) || this)._instreamModel = null,
                i._playerViewModel = new ae(i._model),
                e.on("change:instream", (function(t, e) {
                    var n = e ? e.model : null;
                    i._model.set("instreamMode", !!n),
                    i.instreamModel = n
                }
                ), (0,
                v.Z)(i)),
                i
            }
            (0,
            j.Z)(e, t);
            var i = e.prototype;
            return i.get = function(t) {
                var e = this._mediaModel;
                if (e && t in e.attributes)
                    return e.get(t);
                var i = this._instreamModel;
                return i && t in i.attributes ? i.get(t) : this._model.get(t)
            }
            ,
            i.getVideo = function() {
                var e = this._instreamModel;
                return e && e.getVideo() ? e.getVideo() : t.prototype.getVideo.call(this)
            }
            ,
            i.destroy = function() {
                t.prototype.destroy.call(this),
                oe(this._instreamModel, this)
            }
            ,
            (0,
            f.Z)(e, [{
                key: "player",
                get: function() {
                    return this._playerViewModel
                }
            }, {
                key: "instreamModel",
                set: function(t) {
                    var e = this
                      , i = this._instreamModel;
                    if (i || t)
                        if (oe(i, this),
                        this._model.off("change:mediaModel", null, this),
                        this._instreamModel = t,
                        this.trigger("instreamMode", !!t),
                        t)
                            t.on("all", (function(i, n, o, a) {
                                n === t && (n = e),
                                e.trigger(i, n, o, a)
                            }
                            ), this),
                            t.change("mediaModel", (function(t, i) {
                                e.mediaModel = i
                            }
                            ), this),
                            ne(this, t.attributes, this._model.attributes);
                        else if (i) {
                            this._model.change("mediaModel", (function(t, i) {
                                e.mediaModel = i
                            }
                            ), this);
                            var n = (0,
                            a.Z)({}, this._model.attributes, i.attributes);
                            ne(this, this._model.attributes, n)
                        }
                }
            }]),
            e
        }(ae);
        var se, le, ce = i(5099), ue = (se = window).URL && se.URL.createObjectURL ? se.URL : se.webkitURL || se.mozURL, de = window.Blob;
        function pe(t, e) {
            var i = e.muted;
            if (!le)
                try {
                    le = new de([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])],{
                        type: "video/mp4"
                    })
                } catch (t) {
                    return Promise.resolve()
                }
            return _.OS.tizen ? Promise.resolve() : (t.muted = i,
            t.src = ue.createObjectURL(le),
            t.play() || (0,
            ce.Z)(t))
        }
        var he = "autoplayMuted"
          , we = "autoplayDisabled"
          , ge = {};
        function fe(t, e) {
            var i = e.cancelable
              , n = e.muted
              , o = void 0 !== n && n
              , a = e.allowMuted
              , r = void 0 !== a && a
              , s = e.timeout
              , l = void 0 === s ? 1e4 : s
              , c = t.getTestElement()
              , u = o ? "muted" : "" + r;
            ge[u] || (ge[u] = pe(c, {
                muted: o
            }).catch((function(t) {
                if (!i.cancelled() && !1 === o && r)
                    return pe(c, {
                        muted: o = !0
                    });
                throw t
            }
            )).then((function() {
                return o ? (ge[u] = null,
                he) : "autoplayEnabled"
            }
            )).catch((function(t) {
                throw clearTimeout(d),
                ge[u] = null,
                t.reason = we,
                t
            }
            )));
            var d, p = ge[u].then((function(t) {
                if (clearTimeout(d),
                i.cancelled()) {
                    var e = new Error("Autoplay test was cancelled");
                    throw e.reason = "cancelled",
                    e
                }
                return t
            }
            )), h = new Promise((function(t, e) {
                d = setTimeout((function() {
                    ge[u] = null;
                    var t = new Error("Autoplay test timed out");
                    t.reason = "timeout",
                    e(t)
                }
                ), l)
            }
            ));
            return Promise.race([p, h])
        }
        var je = i(686)
          , me = i(7543)
          , ve = i(7411)
          , be = "tabVisible"
          , ye = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            return (0,
            j.Z)(e, t),
            e.prototype.getFirstFrame = function() {
                var t = this.between(o.cq, o.FU)
                  , e = this.between(be, o.FU);
                return e && t && e > 0 && e < t ? e : t
            }
            ,
            e
        }(ve.Z);
        function xe(t, e) {
            e.off(o.cq, t._onPlayAttempt),
            e.off(o.Gj, t._triggerFirstFrame),
            e.off(o.R2, t._onTime),
            t.off("change:activeTab", t._onTabVisible),
            t._triggerFirstFrame = t._onTime = null
        }
        function ke(t, e) {
            t.change("mediaModel", (function(t, i, n) {
                t._qoeItem && n && t._qoeItem.end(n.get("mediaState")),
                t._qoeItem = new ye,
                t._qoeItem.tick(o.gO),
                t._qoeItem.start(i.get("mediaState")),
                function(t, e) {
                    t._onTabVisible && xe(t, e);
                    var i, n, a = !1;
                    t._triggerFirstFrame = function(i) {
                        if (!a && e.mediaController) {
                            var n = e.mediaController.mediaModel
                              , r = n.attributes.mediaState;
                            if (r === o.r0 || r === o._5 || i.type === o.Gj) {
                                a = !0;
                                var s = t._qoeItem;
                                s.tick(o.FU);
                                var l = s.getFirstFrame();
                                e.trigger(o.FU, {
                                    loadTime: l
                                }),
                                n.off("change:" + o.ug, null, n),
                                n.change(o.ug, (function(t, i) {
                                    i && e.trigger(o.ug, i)
                                }
                                ), n),
                                xe(t, e)
                            }
                        }
                    }
                    ,
                    t._onTime = (i = t._triggerFirstFrame,
                    n = 0,
                    function(t) {
                        var e = t.position;
                        e > n && i(t),
                        n = e
                    }
                    ),
                    t._onPlayAttempt = function() {
                        this._qoeItem.tick(o.cq)
                    }
                    ,
                    t._onTabVisible = function(t, e) {
                        e ? t._qoeItem.tick(be) : t._qoeItem.tick("tabHidden")
                    }
                    ,
                    t.on("change:activeTab", t._onTabVisible),
                    e.on(o.cq, t._onPlayAttempt, t),
                    e.once(o.Gj, t._triggerFirstFrame),
                    e.on(o.R2, t._onTime)
                }(t, e),
                i.on("change:mediaState", (function(e, i, n) {
                    i !== n && (t._qoeItem.end(n),
                    t._qoeItem.start(i))
                }
                ))
            }
            ))
        }
        var Ce = function(t) {
            for (var e = (t || "").replace(/^\?/, "").split("&"), i = -1, n = 0; n < e.length; n++)
                if (/^jw_start=/.test(e[n])) {
                    i = n;
                    break
                }
            if (-1 === i)
                return -1;
            var o = parseFloat(e[i].replace("jw_start=", ""));
            return "number" != typeof o || isNaN(o) || o < 0 ? -1 : o
        }
          , Me = i(2557);
        var _e = function() {}
          , Te = function() {};
        (0,
        a.Z)(_e.prototype, {
            destroy: function() {
                var t, e;
                this.off(),
                this.stop(),
                (0,
                s.c)(this, this.originalContainer),
                this._view && this._view.destroy(),
                this._model && (t = this._model,
                e = this._programController,
                t._onTabVisible && xe(t, e),
                t._qoeItem = t._triggerFirstFrame = t._onTime = t._onPlayAttempt = t._onTabVisible = null,
                this._model.destroy()),
                this._apiQueue && this._apiQueue.destroy(),
                this._captions && this._captions.destroy(),
                this._programController && this._programController.destroy(),
                this.instreamDestroy(!0),
                this._view = this._model = this._apiQueue = this._captions = this._programController = null,
                this.clearSetupVars && this.clearSetupVars()
            },
            playerSetup: function(t, e, i, n, w, f) {
                var j, m, v = this, b = this, C = b._model = new z;
                C.set("jwStart", Ce(window.location.search));
                var M, T, S = !1, A = !1, I = null, P = y(N), L = y(Te);
                b.originalContainer = b.currentContainer = i,
                b._events = n,
                b.trigger = function(t, e) {
                    var i = function(t, e, i) {
                        var n = i;
                        switch (e) {
                        case "time":
                        case "beforePlay":
                        case "pause":
                        case "play":
                        case "ready":
                            var o = t.get("viewable");
                            void 0 !== o && (n = (0,
                            a.Z)({}, i, {
                                viewable: o
                            }))
                        }
                        return n
                    }(C, t, e);
                    return g.ZP.trigger.call(this, t, i)
                }
                ;
                var B = new u.Z(b,["trigger"],(function() {
                    return !0
                }
                ))
                  , Z = function(t, e) {
                    b.trigger(t, e)
                };
                C.setup(t);
                var V = C.get("backgroundLoading")
                  , F = new re(C);
                (j = this._view = new ee(e,F)).on("all", (function(t, e) {
                    e && e.doNotForward || Z(t, e)
                }
                ), b),
                F.on("viewSetup", (function(t) {
                    (0,
                    s.c)(v, t)
                }
                ));
                var R = this._programController = new D(C,f,e._publicApi);
                ft(),
                R.on("all", Z, b).on("subtitlesTracks", (function(t) {
                    if (m) {
                        m.setSubtitlesTracks(t.tracks);
                        var e = m.getCurrentIndex();
                        e > 0 && ht(e, t.tracks)
                    }
                }
                ), b).on(o.Ms, (function() {
                    Promise.resolve().then(pt)
                }
                ), b).on(o.Ew, b.triggerError, b),
                ke(C, R),
                b.clearSetupVars = function() {
                    B && B.destroy(),
                    b = R = C = j = P = L = jt = B = null
                }
                ,
                C.on(o.pn, b.triggerError, b),
                C.on("change:state", (function(t, e, i) {
                    X() || Q.call(v, t, e, i)
                }
                ), this),
                C.on("change:castState", (function(t, e) {
                    b.trigger(o.pi, e)
                }
                )),
                C.on("change:fullscreen", (function(t, e) {
                    b.trigger(o.UW, {
                        fullscreen: e
                    }),
                    e && t.set("playOnViewable", !1)
                }
                )),
                C.on("change:volume", (function(t, e) {
                    b.trigger(o.yH, {
                        volume: e
                    })
                }
                )),
                C.on("change:mute", (function(t) {
                    b.trigger(o.gy, {
                        mute: t.getMute()
                    })
                }
                )),
                C.on("change:playbackRate", (function(t, e) {
                    b.trigger(o.QF, {
                        playbackRate: e,
                        position: t.get("position")
                    })
                }
                ));
                var H = function t(e, i) {
                    "clickthrough" === i || "interaction" === i || "external" === i ? (C.set("playOnViewable", !1),
                    C.off("change:playReason change:pauseReason", t)) : !i && C.get("autostart") && "playing" === X() && C.set("playReason", "autostart")
                };
                function O(t, e) {
                    (0,
                    k.o8)(e) || C.set("viewable", Math.round(e))
                }
                C.on("change:playReason change:pauseReason", H),
                b.on(o.WE, (function(t) {
                    return H(0, t.playReason)
                }
                )),
                b.on(o.Ax, (function(t) {
                    return H(0, t.pauseReason)
                }
                )),
                C.on("change:scrubbing", (function(t, e) {
                    e ? (I = C.get("state") !== o._5,
                    st({
                        reason: "interaction"
                    })) : I && tt({
                        reason: "interaction"
                    })
                }
                )),
                C.on("change:captionsList", (function(t, e) {
                    b.trigger(o.SL, {
                        tracks: e,
                        track: C.get("captionsIndex") || 0
                    })
                }
                )),
                C.on("change:mediaModel", (function(t, e) {
                    var i = this;
                    t.set("errorEvent", void 0),
                    e.change("mediaState", (function(e, i) {
                        var n;
                        t.get("errorEvent") || t.set(o.uc, (n = i) === o.ik || n === o.nQ ? o.Kb : n)
                    }
                    ), this),
                    e.change("duration", (function(e, i) {
                        if (0 !== i) {
                            var n = t.get("minDvrWindow")
                              , o = (0,
                            je.v)(i, n);
                            t.setStreamType(o)
                        }
                    }
                    ), this);
                    var n = "autoplay" === (t.get("related") || {}).oncomplete
                      , a = t.get("item") + 1
                      , r = t.get("playlist")[a];
                    if (r || n) {
                        e.on("change:position", (function t(o, s) {
                            if (n && !r && (a = -1,
                            r = C.get("nextUp")),
                            r && !r.daiSetting) {
                                var l = e.get("duration");
                                s && l > 0 && s >= l - h.l_ && (e.off("change:position", t, i),
                                V ? R.backgroundLoad(r, a) : R.getAsyncItem(a).run())
                            }
                        }
                        ), this)
                    }
                }
                )),
                (m = this._captions = new it(C)).on("all", Z, b),
                this.playerReady = function() {
                    j.once(o.sF, (function() {
                        try {
                            !function() {
                                C.change("visibility", O),
                                B.off(),
                                b.trigger(o.Rc, {
                                    setupTime: 0
                                }),
                                C.change("playlist", (function(t, e) {
                                    if (e.length) {
                                        var i = {
                                            playlist: e
                                        }
                                          , n = C.get("feedData");
                                        n && (i.feedData = (0,
                                        a.Z)({}, n)),
                                        b.trigger(o.Ow, i)
                                    }
                                }
                                )),
                                C.change("playlistItem", (function(t, e) {
                                    if (e) {
                                        var i = e.title
                                          , n = e.image;
                                        if ("mediaSession"in navigator && window.MediaMetadata && (i || n))
                                            try {
                                                navigator.mediaSession.metadata = new window.MediaMetadata({
                                                    title: i,
                                                    artist: window.location.hostname,
                                                    artwork: [{
                                                        src: n || ""
                                                    }]
                                                })
                                            } catch (t) {}
                                        e.chapters || t.setCues([]),
                                        b.trigger(o.gO, {
                                            index: C.get("item"),
                                            item: e
                                        })
                                    }
                                }
                                )),
                                B.flush(),
                                B.destroy(),
                                B = null,
                                C.change("viewable", q),
                                C.change("viewable", Y),
                                C.get("autoPause").viewability ? C.change("viewable", K) : C.once("change:autostartFailed change:mute", (function(t) {
                                    t.off("change:viewable", Y)
                                }
                                ));
                                N(),
                                C.on("change:itemReady", (function(t, e) {
                                    e && (jt.flush(),
                                    C.get("pip") && !b._instreamAdapter && j.requestPip())
                                }
                                ))
                            }()
                        } catch (t) {
                            b.triggerError((0,
                            x.Mm)(x.ud, x.YQ, t))
                        }
                    }
                    )),
                    j.init()
                }
                ;
                var N = function() {
                    jt && (C.get("generateSEOMetadata") && C.get("jwStart") >= 0 ? (v._model.setAutoStart("viewable"),
                    v._model.set("playReason", "jwstart"),
                    C.get("viewable") ? Y(C, C.get("viewable")) : K(C, C.get("viewable"))) : !0 !== C.get("autostart") || C.get("playOnViewable") || ot("autostart"),
                    jt.flush())
                };
                function q(t, e) {
                    b.trigger("viewable", {
                        viewable: e
                    }),
                    U()
                }
                function U() {
                    if ((r.Z[0] === e || 1 === C.get("viewable")) && "idle" === C.get("state") && !1 === C.get("autostart"))
                        if (!f.primed() && _.OS.android) {
                            var t = f.getTestElement()
                              , i = b.getMute();
                            Promise.resolve().then((function() {
                                return pe(t, {
                                    muted: i
                                })
                            }
                            )).then((function() {
                                "idle" === C.get("state") && R.preloadVideo()
                            }
                            )).catch(Te)
                        } else
                            R.preloadVideo()
                }
                function W(t) {
                    b._instreamAdapter.noResume = !t,
                    t || rt({
                        reason: "viewable"
                    })
                }
                function $(t) {
                    t || (b.pause({
                        reason: "viewable"
                    }),
                    C.set("playOnViewable", !t))
                }
                function Y(t, e) {
                    var i = X();
                    if (t.get("playOnViewable")) {
                        if (e) {
                            var n = "viewable"
                              , a = t.get("autoPause").pauseAds
                              , r = t.get("pauseReason");
                            G() === o.bc ? ot(n) : i && !a || "interaction" === r || tt({
                                reason: n
                            })
                        } else
                            _.OS.mobile && !i && (b.pause({
                                reason: "autostart"
                            }),
                            C.set("playOnViewable", !0));
                        _.OS.mobile && i && W(e)
                    }
                }
                function K(t, e) {
                    var i = t.get("state")
                      , n = X()
                      , a = t.get("playReason");
                    n ? t.get("autoPause").pauseAds ? $(e) : W(e) : i === o.r0 || i === o.Kb ? $(e) : i === o.bc && "playlist" === a && t.once("change:state", (function() {
                        $(e)
                    }
                    ))
                }
                function X() {
                    var t = b._instreamAdapter;
                    return !!t && t.getState()
                }
                function G() {
                    var t = X();
                    return t || C.get("state")
                }
                function tt(t) {
                    if (P.cancel(),
                    A = !1,
                    C.get("state") === o.Vy)
                        return Promise.resolve();
                    var i = nt(t);
                    C.set("playReason", i);
                    var n = X();
                    return n ? (C.get("autostart") && "paused" === n && C.set("playReason", "autostart"),
                    b._instreamAdapter.off("state", ct, b),
                    e.pauseAd(!1, t),
                    Promise.resolve()) : C.get("state") === o.xQ ? (at(!0),
                    b.setItemIndex(0).then((function() {
                        return et(t, i)
                    }
                    ))) : et(t, i)
                }
                function et(t, e) {
                    if (!S && (S = !0,
                    b.trigger(o.$j, {
                        playReason: e,
                        startTime: t && t.startTime ? t.startTime : C.get("playlistItem").starttime
                    }),
                    S = !1,
                    (0,
                    me.C)() && !f.primed() && f.prime(),
                    "playlist" === e && C.get("autoPause").viewability && K(C, C.get("viewable")),
                    T)) {
                        if ((0,
                        me.C)() && !V) {
                            var i = C.get("mediaElement");
                            b._instreamAdapter && (i.preload = "none"),
                            i.load()
                        }
                        return T = !1,
                        M = null,
                        Promise.resolve()
                    }
                    return R.playVideo(e).then(f.played)
                }
                function nt(t) {
                    return t && t.reason ? t.reason : t && t.startTime ? "jwstart" : "unknown"
                }
                function ot(t) {
                    if (G() === o.bc) {
                        P = y(N);
                        var e = C.get("advertising");
                        fe(f, {
                            cancelable: P,
                            muted: b.getMute(),
                            allowMuted: !e || e.autoplayadsmuted
                        }).then((function(e) {
                            return C.set("canAutoplay", e),
                            e !== he || b.getMute() || (C.set("autostartMuted", !0),
                            ft(),
                            C.once("change:autostartMuted", (function(t) {
                                C.get("autoPause").viewability || C.get("playOnViewable") || t.off("change:viewable", Y),
                                b.trigger(o.gy, {
                                    mute: C.getMute()
                                })
                            }
                            ))),
                            m && b.getMute() && C.get("enableDefaultCaptions") && m.selectDefaultIndex(1),
                            tt({
                                reason: t
                            }).catch((function() {
                                b._instreamAdapter || C.set("autostartFailed", !0),
                                M = null
                            }
                            ))
                        }
                        )).catch((function(t) {
                            if (C.set("canAutoplay", we),
                            C.set("autostart", !1),
                            !P.cancelled()) {
                                var e = (0,
                                x.nm)(t);
                                b.trigger(o.wh, {
                                    reason: t.reason,
                                    code: e,
                                    error: t
                                })
                            }
                        }
                        ))
                    }
                }
                function at(t) {
                    if (P.cancel(),
                    jt.empty(),
                    X()) {
                        var e = b._instreamAdapter;
                        return e && (e.noResume = !0),
                        void (M = function() {
                            return R.stopVideo()
                        }
                        )
                    }
                    M = null,
                    !t && (A = !0),
                    S && (T = !0),
                    C.set("errorEvent", void 0),
                    R.stopVideo()
                }
                function rt(t) {
                    var e = nt(t);
                    C.set("pauseReason", e),
                    C.set("playOnViewable", "viewable" === e)
                }
                function st(t) {
                    M = null,
                    P.cancel();
                    var i = X();
                    if (i && i !== o._5)
                        return rt(t),
                        void (i === o.Kb ? j.once("dismissFloating", lt) : e.pauseAd(!0, t));
                    switch (C.get("state")) {
                    case o.Vy:
                        return;
                    case o.r0:
                    case o.Kb:
                        rt(t),
                        R.pause();
                        break;
                    default:
                        S && (T = !0)
                    }
                }
                function lt() {
                    b._instreamAdapter.once("state", ct),
                    b._instreamAdapter.noResume = !0
                }
                function ct() {
                    var t = C.get("pauseReason");
                    e.pauseAd(!0, {
                        reason: t
                    })
                }
                function ut(t, e) {
                    b.instreamDestroy(),
                    at(!0),
                    b.setItemIndex(t),
                    b.play(e)
                }
                function dt(t) {
                    ut(C.get("item") + 1, t)
                }
                function pt() {
                    b.completeCancelled() || (M = b.completeHandler,
                    b.shouldAutoAdvance() ? b.nextItem() : C.get("repeat") ? dt({
                        reason: "repeat"
                    }) : (_.OS.iOS && gt(!1),
                    C.set("playOnViewable", !1),
                    C.set("state", o.xQ),
                    b.trigger(o.V$, {})))
                }
                function ht(t, e) {
                    t = parseInt(t, 10) || 0,
                    C.persistVideoSubtitleTrack(t, e),
                    R.subtitles = t,
                    b.trigger(o.Z_, {
                        tracks: wt(),
                        track: t
                    })
                }
                function wt() {
                    return m ? m.getCaptionsList() : []
                }
                function gt(t) {
                    C.get("pip") && C.set("pip", !1),
                    (0,
                    k.jn)(t) || (t = !C.get("fullscreen")),
                    !C.get("allowFullscreen") && t || (C.set("fullscreen", t),
                    b._instreamAdapter && b._instreamAdapter._adModel && b._instreamAdapter._adModel.set("fullscreen", t))
                }
                function ft() {
                    R.setMute(C.getMute()),
                    R.setVolume(C.get("volume"))
                }
                this.preload = U,
                this.load = function(t, e) {
                    var i, n = b._instreamAdapter;
                    switch (n && (n.noResume = !0),
                    b.trigger("destroyPlugin", {}),
                    at(!0),
                    R.clearItemPromises(),
                    P.cancel(),
                    P = y(N),
                    L.cancel(),
                    (0,
                    me.C)() && f.prime(),
                    typeof t) {
                    case "string":
                        C.attributes.item = 0,
                        C.attributes.itemReady = !1,
                        L = y((function(t) {
                            if (t)
                                return b.updatePlaylist((0,
                                p.ZP)(t.playlist), t)
                        }
                        )),
                        i = function(t) {
                            var e = this;
                            return new Promise((function(i, n) {
                                var a = new d.Z;
                                a.on(o.Ow, (function(t) {
                                    i(t)
                                }
                                )),
                                a.on(o.pn, n, e),
                                a.load(t)
                            }
                            ))
                        }(t).then((function(t) {
                            return L.async(t)
                        }
                        ));
                        break;
                    case "object":
                        C.attributes.item = 0,
                        i = b.updatePlaylist((0,
                        p.ZP)(t), e || {});
                        break;
                    case "number":
                        i = b.setItemIndex(t);
                        break;
                    default:
                        return
                    }
                    i.catch((function(t) {
                        b.triggerError((0,
                        x.l9)(t, x.DD))
                    }
                    )),
                    i.then((function() {
                        return P.async()
                    }
                    )).catch(Te)
                }
                ,
                this.play = function(t) {
                    return tt(t).catch(Te)
                }
                ,
                this.pause = st,
                this.seek = function(t, e) {
                    var i = C.get("state");
                    if (i !== o.Vy) {
                        e && i === o.r0 && C.get("playReason") !== e.reason && C.set("playReason", e.reason),
                        R.position = t;
                        var n = i === o.bc;
                        C.get("scrubbing") || !n && i !== o.xQ || (n && ((e = e || {}).startTime = t),
                        this.play(e))
                    }
                }
                ,
                this.stop = at,
                this.playlistItem = ut,
                this.playlistNext = dt,
                this.playlistPrev = function(t) {
                    ut(C.get("item") - 1, t)
                }
                ,
                this.setCurrentCaptions = ht,
                this.setCurrentQuality = function(t) {
                    R.quality = t
                }
                ,
                this.setFullscreen = gt,
                this.setAllowFullscreen = function(t) {
                    C.set("allowFullscreen", t),
                    !t && C.get("fullscreen") && b.setFullscreen(!1)
                }
                ,
                this.setPip = function(t) {
                    C.get("fullscreen") && C.set("fullscreen", !1),
                    (0,
                    k.jn)(t) || (t = !C.get("pip")),
                    C.set("pip", t)
                }
                ,
                this.getCurrentQuality = function() {
                    return R.quality
                }
                ,
                this.getQualityLevels = function() {
                    return R.qualities
                }
                ,
                this.setCurrentAudioTrack = function(t) {
                    R.audioTrack = t
                }
                ,
                this.getCurrentAudioTrack = function() {
                    return R.audioTrack
                }
                ,
                this.getAudioTracks = function() {
                    return R.audioTracks
                }
                ,
                this.getCurrentCaptions = function() {
                    return m ? m.getCurrentIndex() : -1
                }
                ,
                this.getCaptionsList = wt,
                this.getVisualQuality = function() {
                    var t = this._model.get("mediaModel");
                    return t ? t.get(o.ug) : null
                }
                ,
                this.getConfig = function() {
                    return this._model ? this._model.getConfiguration() : void 0
                }
                ,
                this.getState = G,
                this.next = Te,
                this.completeHandler = pt,
                this.completeCancelled = function() {
                    return (t = C.get("state")) !== o.bc && t !== o.xQ && t !== o.Vy || !!A && (A = !1,
                    !0);
                    var t
                }
                ,
                this.shouldAutoAdvance = function() {
                    return C.get("item") !== C.get("playlist").length - 1
                }
                ,
                this.nextItem = function() {
                    dt({
                        reason: "playlist"
                    })
                }
                ,
                this.setConfig = function(t) {
                    !function(t, e) {
                        var i = t._model
                          , n = i.attributes;
                        if (e.height && (e.height = (0,
                        l.a)(e.height),
                        e.width = e.width || n.width),
                        e.width && (e.width = (0,
                        l.a)(e.width),
                        e.aspectratio ? (n.width = e.width,
                        delete e.width) : e.height = n.height),
                        e.width && e.height && !e.aspectratio && t._view.resize(e.width, e.height),
                        e.floating) {
                            var o = i.get("floating") || {}
                              , r = (0,
                            a.Z)({}, o, e.floating);
                            -1 === c.indexOf(r.mode) ? delete e.floating : e.floating = r
                        }
                        Object.keys(e).forEach((function(o) {
                            var a = e[o];
                            if (void 0 !== a)
                                switch (o) {
                                case "aspectratio":
                                    i.set(o, (0,
                                    l.R)(a, n.width));
                                    break;
                                case "autostart":
                                    !function(t, e, i) {
                                        t.setAutoStart(i),
                                        "idle" === t.get("state") && !0 === i && e.play({
                                            reason: "autostart"
                                        })
                                    }(i, t, a);
                                    break;
                                case "mute":
                                    t.setMute(a);
                                    break;
                                case "volume":
                                    t.setVolume(a);
                                    break;
                                case "playbackRateControls":
                                case "playbackRates":
                                case "repeat":
                                case "stretching":
                                case "floating":
                                    i.set(o, a)
                                }
                        }
                        ))
                    }(b, t)
                }
                ,
                this.setItemIndex = function(t) {
                    R.stopVideo();
                    var e = C.get("playlist").length
                      , i = (0,
                    p.bx)(t, e);
                    return R.setActiveItem(i).catch((function(t) {
                        if (t.code === x._M) {
                            if (R.asyncItems.reduce((function(t, e) {
                                return t && e.skipped
                            }
                            ), !0))
                                throw t;
                            var e = v.shouldAutoAdvance;
                            return v.shouldAutoAdvance = function() {
                                return !1
                            }
                            ,
                            pt(),
                            C.attributes.itemReady = !0,
                            void (v.shouldAutoAdvance = e)
                        }
                        t.code >= 151 && t.code <= 162 && (t = (0,
                        x.l9)(t, x.EY)),
                        v.triggerError((0,
                        x.Mm)(x.ul, x.tJ, t))
                    }
                    ))
                }
                ,
                this.detachMedia = function() {
                    if (S && (T = !0),
                    C.get("autoPause").viewability && K(C, C.get("viewable")),
                    !V)
                        return R.setAttached(!1);
                    R.backgroundActiveMedia()
                }
                ,
                this.attachMedia = function() {
                    V ? R.restoreBackgroundMedia() : R.setAttached(!0),
                    "function" == typeof M && M()
                }
                ,
                this.routeEvents = function(t) {
                    return R.routeEvents(t)
                }
                ,
                this.forwardEvents = function() {
                    return R.forwardEvents()
                }
                ,
                this.playVideo = function(t) {
                    return R.playVideo(t)
                }
                ,
                this.stopVideo = function() {
                    return R.stopVideo()
                }
                ,
                this.castVideo = function(t, e) {
                    return R.castVideo(t, e)
                }
                ,
                this.stopCast = function() {
                    return R.stopCast()
                }
                ,
                this.backgroundActiveMedia = function() {
                    return R.backgroundActiveMedia()
                }
                ,
                this.restoreBackgroundMedia = function() {
                    return R.restoreBackgroundMedia()
                }
                ,
                this.preloadNextItem = function() {
                    R.background.currentMedia && R.preloadVideo()
                }
                ,
                this.isBeforeComplete = function() {
                    return R.beforeComplete
                }
                ,
                this.setVolume = function(t) {
                    C.setVolume(t),
                    ft()
                }
                ,
                this.setMute = function(t) {
                    C.setMute(t),
                    ft()
                }
                ,
                this.setPlaybackRate = function(t) {
                    C.setPlaybackRate(t)
                }
                ,
                this.getProvider = function() {
                    return C.get("provider")
                }
                ,
                this.getWidth = function() {
                    return C.get("containerWidth")
                }
                ,
                this.getHeight = function() {
                    return C.get("containerHeight")
                }
                ,
                this.getItemQoe = function() {
                    return C._qoeItem
                }
                ,
                this.setItemCallback = function(t) {
                    R.itemCallback = t
                }
                ,
                this.getItemPromise = function(t) {
                    var e = C.get("playlist");
                    if (t < -1 || t > e.length - 1 || isNaN(t))
                        return null;
                    var i = R.getAsyncItem(t);
                    return i ? i.promise : null
                }
                ,
                this.addButton = function(t, e, i, n, o) {
                    var a = C.get("customButtons") || []
                      , r = !1
                      , s = {
                        img: t,
                        tooltip: e,
                        callback: i,
                        id: n,
                        btnClass: o
                    };
                    a = a.reduce((function(t, e) {
                        return e.id === n ? (r = !0,
                        t.push(s)) : t.push(e),
                        t
                    }
                    ), []),
                    r || a.unshift(s),
                    C.set("customButtons", a)
                }
                ,
                this.removeButton = function(t) {
                    var e = C.get("customButtons") || [];
                    e = e.filter((function(e) {
                        return e.id !== t
                    }
                    )),
                    C.set("customButtons", e)
                }
                ,
                this.resize = j.resize,
                this.getSafeRegion = j.getSafeRegion,
                this.setCaptions = j.setCaptions,
                this.checkBeforePlay = function() {
                    return S
                }
                ,
                this.setControls = function(t) {
                    (0,
                    k.jn)(t) || (t = !C.get("controls")),
                    C.set("controls", t),
                    R.controls = t
                }
                ,
                this.addCues = function(t) {
                    this.setCues(C.getCues().concat(t))
                }
                ,
                this.setCues = function(t) {
                    C.setCues(t)
                }
                ,
                this.getCues = function() {
                    return C.getCues()
                }
                ,
                this.getChapters = function() {
                    return C.get("playlistItem").chapters.timestamps
                }
                ,
                this.getCurrentChapter = function() {
                    var t = C.get("state")
                      , e = C.get("playlistItem").chapters.timestamps;
                    if (!e || !e.length || t === o.xQ)
                        return null;
                    if (t === o.bc)
                        return e[0];
                    var i = this.get("currentTime");
                    return (0,
                    E.Mf)(i, e)
                }
                ,
                this.setChapter = function(t) {
                    try {
                        var e = C.get("playlistItem")
                          , i = e.chapters.timestamps;
                        if (!i)
                            return;
                        t instanceof Me.u || (t = new Me.u(t));
                        for (var n = -1, o = 0; o < i.length; o++)
                            if (i[o].time === t.time) {
                                n = o;
                                break
                            }
                        -1 !== n ? i[n] = t : i.push(t),
                        e.chapters.timestamps = i,
                        C.setCues(C.getCues()),
                        C.set("playlistItem", e),
                        C.trigger("change:chapters", C, t)
                    } catch (t) {
                        return !1
                    }
                    return !0
                }
                ,
                this.setPlaylistItem = function(t, e) {
                    var i = C.get("playlist")
                      , n = (0,
                    p.bx)(t, i.length)
                      , o = R.getAsyncItem(n);
                    if (o.replace(e)) {
                        var a = i[n];
                        e && e !== a && (R.asyncItems[n] = null,
                        o.reject(new Error("Item replaced"))),
                        n === C.get("item") && "idle" === C.get("state") && this.setItemIndex(n)
                    }
                }
                ,
                this.isBeforePlay = this.checkBeforePlay,
                this.createInstream = function() {
                    return this.instreamDestroy(),
                    this._instreamAdapter = new J(this,C,j,f),
                    this._instreamAdapter
                }
                ,
                this.instreamDestroy = function(t) {
                    this._instreamAdapter && (t && (this._instreamAdapter.noResume = !0),
                    this._instreamAdapter.off("state", ct),
                    this._instreamAdapter.destroy(),
                    this._instreamAdapter = null),
                    j.off("dismissFloating", lt)
                }
                ;
                var jt = this._apiQueue = new u.Z(this,["play", "pause", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setAllowFullscreen", "setFullscreen"],(function() {
                    return !v._model.get("itemReady") || B
                }
                ));
                jt.queue.push.apply(jt.queue, w),
                j && j.setup()
            },
            requestPip: function(t) {
                this._view && this._view.requestPip(t)
            },
            get: function(t) {
                if (t in S.L4) {
                    var e = this._model.get("mediaModel");
                    return e ? e.get(t) : S.L4[t]
                }
                return this._model.get(t)
            },
            getContainer: function() {
                return this.currentContainer || this.originalContainer
            },
            getMute: function() {
                return this._model.getMute()
            },
            triggerError: function(t) {
                var e = this._model;
                t.message = e.get("localization").errors[t.key],
                delete t.key,
                e.set("errorEvent", t),
                e.set("state", o.Vy),
                e.once("change:state", (function() {
                    this.set("errorEvent", void 0)
                }
                ), e),
                this.trigger(o.pn, t)
            },
            updatePlaylist: function(t, e) {
                var i = this._model;
                try {
                    var n = (0,
                    p.s7)(t, i, e);
                    (0,
                    p._)(n);
                    var o = (0,
                    a.Z)({}, e);
                    delete o.playlist,
                    i.set("feedData", o),
                    i.set("playlist", n)
                } catch (t) {
                    return Promise.reject(t)
                }
                return 1 === t.length && 1 === t[0].sources.length && "mp4" === t[0].sources[0].type && i.get("repeat") && !i.get("advertising") ? (i.set("repeat", !1),
                i.set("loop", !0)) : i.set("loop", !1),
                this.setItemIndex(i.get("item"))
            }
        });
        var Se = _e
          , Ee = "afs_ads ad-placement"
          , Ae = function(t, e) {
            var i, n, o = !1;
            t && ((n = document.createElement("div")).className = Ee,
            n.innerHTML = "&nbsp;",
            n.style.width = "1px",
            n.style.height = "1px",
            n.style.position = "absolute",
            n.style.background = "transparent",
            i = n,
            t.element().appendChild(i));
            return {
                onReady: function() {
                    if (o)
                        return !0;
                    t && document.body.contains(t.element()) && (null !== i.offsetParent && i.className === Ee && "" !== i.innerHTML && 0 !== i.clientHeight || (o = !0)),
                    o && e.trigger("adBlock")
                },
                getAdBlock: function() {
                    return o
                }
            }
        }
          , Ie = i(6593)
          , Pe = i(6245)
          , ze = i(2894)
          , Le = i(4101)
          , Be = i(7164)
          , Ze = function(t, e, n, a) {
            if (function(t, e, i) {
                var n = t.get("related")
                  , o = e.getPlaylist()
                  , a = Boolean(n && n.file) || Boolean(i.recommendations);
                return (o.length > 1 || a) && (!1 !== t.get("controls") || !n.disableRelated)
            }(t, e, a))
                return function(t, e) {
                    return i.e(365).then(function(n) {
                        if (!t.attributes._destroyed && !e.getPlugin("related")) {
                            var o = new Le.Z;
                            return o.name = "related",
                            o.js = i(8222).default,
                            o
                        }
                    }
                    .bind(null, i)).catch((0,
                    ze.Ep)(301129))
                }(t, e).then((function(i) {
                    var o = e.getPlugin("related");
                    if (!o) {
                        var a = t.get("related");
                        (o = (0,
                        Be.MK)(i, a, e)).on("nextUp", (function(e) {
                            var i = null;
                            e === Object(e) && ((i = (0,
                            H.Z)(e)).sources = (0,
                            p.T5)(i, t),
                            i.feedType = e.feedType),
                            t.set("nextUp", i)
                        }
                        )),
                        o.on("warning", (function(t) {
                            n.trigger("warning", t)
                        }
                        )),
                        o.setup(t),
                        o.addToPlayer.call(e)
                    }
                }
                )).catch((function(e) {
                    return e.message = e.message || t.get("localization").errors[e.key],
                    delete e.key,
                    n.trigger(o.cM, e),
                    e
                }
                ))
        }
          , Ve = i(560)
          , Fe = "__jw-ld-json"
          , Re = function(t, e) {
            var i = t.search
              , n = t.hash
              , o = t.origin
              , a = t.pathname;
            void 0 === e && (e = "{seek_to_second_number}");
            var r = "jw_start=" + e;
            if (i) {
                for (var s = i.replace(/^\?/, "").split("&"), l = -1, c = 0; c < s.length; c++)
                    if (/^jw_start=/.test(s[c])) {
                        l = c;
                        break
                    }
                -1 !== l ? s[l] = r : s.push(r),
                i = "?" + s.join("&")
            } else
                i = "?" + r;
            return (o || "") + (a || "") + (i || "") + (n || "")
        }
          , He = function(t) {
            var e = t.getElementById(Fe);
            if (e && e.innerText)
                try {
                    var i = JSON.parse(e.innerText);
                    return Array.isArray(i) || (i = [i]),
                    i
                } catch (t) {}
            return []
        }
          , Oe = function(t, e) {
            if (!t.length || !e)
                return -1;
            for (var i = JSON.stringify(e), n = 0; n < t.length; n++) {
                var o = t[n];
                if (JSON.stringify(o) === i)
                    return n
            }
            return -1
        }
          , Ne = function() {
            function t(t, e, i) {
                this.controller_ = e,
                this.item_ = t,
                this.metadata_ = null,
                this.metadataToUpdate_ = {},
                this.window_ = i && i.window || window,
                this.document_ = i && i.document || document
            }
            var e = t.prototype;
            return e.addMetadata = function() {
                if (!this.metadata_) {
                    this.metadata_ = function(t, e, i) {
                        void 0 === i && (i = window);
                        var n = {
                            "@context": "https://schema.org",
                            "@type": "VideoObject",
                            name: t.title,
                            description: t.description,
                            thumbnailUrl: t.image,
                            potentialAction: {
                                "@type": "SeekToAction",
                                target: Re(window.location),
                                "startOffset-input": "required name=seek_to_second_number"
                            }
                        };
                        if (t.pubdate && (n.uploadDate = new Date(1e3 * t.pubdate).toISOString()),
                        t.sources && t.sources.length) {
                            var o = (0,
                            k.sE)(t.sources, (function(t) {
                                return "video/mp4" === t.type
                            }
                            )) || t.sources[0];
                            o && (n.contentUrl = o.file)
                        }
                        var a = e.getConfig();
                        (0,
                        Ve.Z)() ? t.mediaid && a.pid && (n.embedUrl = "https://cdn.jwplayer.com/players/" + t.mediaid + "-" + a.pid + ".html") : n.embedUrl = window.location.href;
                        var r = e.get("duration");
                        return r && (n.duration = "PT" + Math.floor(r / 60) + "M" + Math.round(r) % 60 + "S"),
                        n
                    }(this.item_, this.controller_);
                    var t = He(this.document_).concat([this.metadata_])
                      , e = this.document_.getElementById(Fe);
                    if (e || ((e = this.document_.createElement("script")).setAttribute("type", "application/ld+json"),
                    e.setAttribute("id", Fe),
                    this.document_.head.appendChild(e)),
                    e.innerText = JSON.stringify(t.length > 1 ? t : t[0]),
                    (0,
                    Ve.Z)())
                        try {
                            this.window_.parent.postMessage({
                                type: "metadata",
                                generateSEOMetadata: !0,
                                metadata: this.metadata_
                            }, "*")
                        } catch (t) {}
                }
            }
            ,
            e.removeMetadata = function() {
                var t = this.document_.getElementById(Fe)
                  , e = this.metadata_;
                if (this.metadata_ = null,
                e && t) {
                    var i = He(this.document_)
                      , n = Oe(i, e);
                    n >= 0 && (i.splice(n, 1),
                    i.length ? t.innerText = JSON.stringify(i.length > 1 ? i : i[0]) : t.parentElement && t.parentElement.removeChild(t))
                }
            }
            ,
            e.updateDurationAsync = function(t) {
                !this.metadata_.duration && t.duration && (this.metadataToUpdate_.duration = "PT" + Math.floor(t.duration / 60) + "M" + Math.round(t.duration) % 60 + "S")
            }
            ,
            e.updateChapterCuesAsync = function(t) {
                var e;
                this.metadata_.hasPart || (t = t.filter((function(t) {
                    return "ads" !== t.cueType
                }
                ))) && t.length && (e = t.map((function(t) {
                    return {
                        "@type": "Clip",
                        name: t.text || "",
                        startOffset: t.begin,
                        endOffset: t.end,
                        url: Re(window.location, Math.floor(t.begin))
                    }
                }
                )),
                this.metadataToUpdate_.hasPart = e)
            }
            ,
            e.updateScriptTag = function() {
                if (Object.keys(this.metadataToUpdate_).length) {
                    var t = He(this.document_)
                      , e = Oe(t, this.metadata_)
                      , i = this.document_.getElementById(Fe);
                    if (e >= 0 && t.length) {
                        if (this.metadata_ = (0,
                        a.Z)(this.metadata_, this.metadataToUpdate_),
                        t[e] = this.metadata_,
                        i.innerText = JSON.stringify(t),
                        (0,
                        Ve.Z)())
                            try {
                                this.window_.parent.postMessage({
                                    type: "metadata",
                                    generateSEOMetadata: !0,
                                    metadata: this.metadata_
                                }, "*")
                            } catch (t) {}
                        this.metadataToUpdate_ = {}
                    }
                }
            }
            ,
            e.destroy = function() {
                this.destroyed_ || (this.destroyed_ = !0,
                this.removeMetadata(),
                this.window_ = null,
                this.document_ = null,
                this.item_ = null,
                this.controller_ = null)
            }
            ,
            t
        }();
        Se.prototype.osPlayerSetup = Se.prototype.playerSetup,
        Se.prototype.playerSetup = function(t, e, a, r, s, l) {
            var c = this;
            this.osPlayerSetup(t, e, a, r, s, l);
            var u, d = this.shouldAutoAdvance, p = this._model, h = this._view, w = this.modelShim, g = Ae(h, this), f = p.get("advertising");
            if (w && w.attributes.ampController) {
                var j = w.attributes.ampController
                  , m = this.playerReady;
                this.ampController = j,
                delete w.attributes.ampController,
                this.playerReady = function() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
                        e[i] = arguments[i];
                    m.apply(this, e),
                    j.ready(p)
                }
            }
            t.analytics && (t.sdkplatform = t.sdkplatform || t.analytics.sdkplatform),
            p.once("change:visibility", (function() {
                g.onReady.call(c)
            }
            ));
            var v = function(t, e, i, n) {
                if (t) {
                    var o = p.get("nextUp");
                    o && c.trigger(e, {
                        mode: o.mode,
                        ui: "nextup",
                        feedShownId: i,
                        target: o,
                        itemsShown: [o],
                        feedData: o.feedData
                    }),
                    "function" == typeof n && n()
                }
            };
            this.next = function(t) {
                t = t || {};
                var i = e.getPlugin("related");
                v.call(this, i, "nextClick", t.feedShownId, (function() {
                    return i.next(t)
                }
                ))
            }
            ;
            var b = this.nextItem;
            this.nextItem = function() {
                var t = e.getPlugin("related");
                v.call(this, t, "nextAutoAdvance"),
                b.call(this)
            }
            ,
            this.updatePlaylist = function(t, i) {
                var o = this
                  , a = [];
                return p.get("mobileSdk") || !function(t) {
                    return window.WebGLRenderingContext && t.some((function(t) {
                        return t.stereomode && t.stereomode.length > 0
                    }
                    ))
                }(t) || e.getPlugin("vr") || console.warn("Playlist contains 360° or VR media. JW Player 360°/VR support is now deprecated"),
                (0,
                n.w0)(t) && a.push((0,
                n.lD)(p.get("edition"))),
                (0,
                Pe.g)(t, "images", "image"),
                a.length ? (p.attributes.itemReady = !1,
                Promise.all(a).then((function() {
                    return Se.prototype.updatePlaylist.call(o, t, i)
                }
                ))) : Se.prototype.updatePlaylist.call(this, t, i)
            }
            ,
            this.shouldAutoAdvance = function() {
                var t = p.get("related")
                  , e = p.get("nextUp");
                return e && "playlist" === e.mode ? Boolean(t.shouldAutoAdvance) : d.call(this)
            }
            ;
            var y = function(t, i) {
                g.onReady(),
                Ze(p, e, c, i)
            }
              , x = function() {
                return u || (u = i.e(926).then(function(t) {
                    return new (0,
                    i(8460).default)(h,p,e)
                }
                .bind(null, i)).catch((function(t) {
                    throw t
                }
                )).catch((function(t) {
                    console.error("jwplayer.stats:", t)
                }
                ))),
                u
            }
              , C = function(t) {
                c.trigger(o.cM, t)
            }
              , M = function() {
                if (window.chrome && _.Browser.chrome)
                    return function(t, e, n) {
                        i.e(977).then(function(n) {
                            var o = new (0,
                            i(5016).default)(t,e);
                            return t.castToggle = o.castToggle.bind(t._castController),
                            t._castController = o,
                            t.stopCasting = o.stopCasting,
                            o.init()
                        }
                        .bind(null, i)).catch((0,
                        ze.Jt)(301161)).catch(n)
                    }(c, p, C)
            }
              , T = function() {
                var t = p.getVideo();
                t && t.video && (t.video.webkitWirelessVideoPlaybackDisabled = !0)
            }
              , S = function() {
                if (window.WebKitPlaybackTargetAvailabilityEvent && !p.get("playlist").some((function(t) {
                    return !(0,
                    Ie.H)(t.sources[0])
                }
                )))
                    return function(t, e, n) {
                        return i.e(520).then(function(n) {
                            var o = i(6342).default;
                            t._airplayController = new o(t,e),
                            t.castToggle = t._airplayController.airplayToggle.bind(t._airplayController)
                        }
                        .bind(null, i)).catch((0,
                        ze.Jt)(301162)).catch(n)
                    }(c, p, C);
                T()
            };
            e.getAdBlock = g.getAdBlock,
            this.once(o.gO, (function(t) {
                p.on("change:playlistItem", y, c),
                !(f && f.outstream) && p.get("cast") ? (!(p.get("cast") || {}).customAppId && (0,
                n.w0)(p.get("playlist")) || M.apply(c),
                S.apply(c)) : T(),
                Ze(p, e, c, t.item),
                p.get("generateSEOMetadata") && (c._seoMetadataManager = new Ne(t.item,c),
                c._seoMetadataManager.addMetadata(),
                c.on(o.rx, (function(e) {
                    var i = c.getCues();
                    i && i.length && c._seoMetadataManager.updateChapterCuesAsync(i),
                    t.item.duration || c._seoMetadataManager.updateDurationAsync(e),
                    c._seoMetadataManager.updateScriptTag()
                }
                )),
                setTimeout((function() {
                    c.off(o.rx)
                }
                ), 4e3)),
                c.getContainer().addEventListener("keydown", (function(t) {
                    "n" === t.key && (p.set("displayStats", !p.get("displayStats")),
                    x())
                }
                ), c),
                p.on("change:displayStats", (function(t, e) {
                    e ? x().then((function(t) {
                        return t.show()
                    }
                    )) : !1 === e && x().then((function(t) {
                        return t.hide()
                    }
                    ))
                }
                ), c)
            }
            ), this),
            f && f.outstream && function(t, e) {
                var i = t._model
                  , n = t._view
                  , a = !1
                  , r = e.height
                  , s = e.width
                  , l = t.getHeight;
                t.getHeight = function() {
                    var t = i.get("aspectratio");
                    return t ? Math.round(i.get("containerWidth") * parseFloat(t) / 100) : r
                }
                ;
                var c, u = t.getWidth;
                t.getWidth = function() {
                    return (0,
                    k.hj)(s) ? s : u.call(this)
                }
                ,
                t.getSafeRegion = function(t) {
                    return n.getSafeRegion(t)
                }
                ,
                t.resize = function(t, e) {
                    return n.resize(t, e)
                }
                ,
                c = n.resize,
                n.resize = function(t, e) {
                    return r = e,
                    s = t,
                    c.call(n, t, e)
                }
                ,
                i.setAutoStart("viewable"),
                t.setMute(!0),
                t.setItemIndex = function() {
                    return i.setActiveItem(0),
                    Promise.resolve()
                }
                ,
                t.updatePlaylist = function() {
                    return i.set("playlist", [{
                        sources: [{}]
                    }]),
                    i.attributes.itemReady = !0,
                    this.setItemIndex(0)
                }
                ;
                var d = t.attachMedia;
                t.attachMedia = t.playerDestroy;
                var p = function() {
                    return a || i.set("repeat", !1),
                    i.get("backgroundLoading") || t._programController.mediaPool.clean(),
                    i.set("state", o.xQ),
                    t._programController.trigger(o.Ms, {}),
                    d.call(t)
                };
                t._programController.playVideo = function() {
                    return Promise.resolve()
                }
                ;
                var h = t.createInstream;
                t.createInstream = function() {
                    var e = h.call(this);
                    return e.noResume = !0,
                    a = !1,
                    e.on("state", (function(e) {
                        var i = e.newstate;
                        i !== o.ik && i !== o.r0 || (t.attachMedia = p,
                        t.getHeight = l,
                        t.getWidth = u,
                        n && (n.resize = c),
                        a = !0)
                    }
                    )),
                    e
                }
            }(this, t)
        }
        ,
        Se.prototype.osDestroy = Se.prototype.destroy,
        Se.prototype.destroy = function() {
            this._seoMetadataManager && (this._seoMetadataManager.destroy(),
            this._seoMetadataManager = null),
            this.osDestroy()
        }
        ;
        var qe = Se
    },
    3414: function(t, e, i) {
        "use strict";
        i.d(e, {
            B: function() {
                return n
            },
            K: function() {
                return o
            }
        });
        var n = [40, 120, 320, 480, 640, 720, 1280, 1920]
          , o = 4500
    },
    2977: function(t, e, i) {
        "use strict";
        i.d(e, {
            Bf: function() {
                return r
            },
            Cz: function() {
                return o
            },
            IJ: function() {
                return a
            }
        });
        var n = i(3414)
          , o = function(t) {
            if (t && t.length) {
                var e = t.filter((function(t) {
                    return t.type && t.type.match(/video/)
                }
                ));
                if (e && e.length)
                    return e
            }
            return !1
        }
          , a = function(t) {
            for (var e = 0, i = n.B[e]; i < t && e < n.B.length; )
                i = n.B[e++];
            return i
        }
          , r = function(t, e) {
            var i = t.mediaid
              , n = t.image;
            return i || n ? i && new RegExp("jwplayer.com/v2/media/" + i).test(n) ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=" + e : n : ""
        }
    },
    6245: function(t, e, i) {
        "use strict";
        i.d(e, {
            g: function() {
                return a
            }
        });
        var n, o = i(6234), a = function(t, e, i) {
            var a = function() {
                try {
                    n = window.localStorage.jwplayerLocalId
                } catch (t) {}
                return n = n || (0,
                o.B)(12)
            }();
            t.forEach((function(t) {
                var n = t.variations;
                if (n && n[e]) {
                    n.selected = n.selected || {};
                    var o = function(t, e) {
                        for (var i = function(t) {
                            for (var e = 1794770992, i = 0, n = t.length; i < n; i++)
                                e ^= t.charCodeAt(i),
                                e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                            return e >>> 0
                        }(t), n = i % 2520, o = e.reduce((function(t, e) {
                            return t + e.weight
                        }
                        ), 0), a = 0, r = 0; r < e.length; r++) {
                            var s = e[r];
                            if ((a += 2520 * s.weight / o) > n)
                                return s
                        }
                    }(a, n[e])
                      , r = o[i];
                    r && (t[i] = r,
                    n.selected[e] = o)
                }
            }
            ))
        }
    },
    3296: function(t, e, i) {
        "use strict";
        i.d(e, {
            Z: function() {
                return l
            }
        });
        var n = i(2799)
          , o = i(8348)
          , a = i(1776)
          , r = i(7683)
          , s = i(5099)
          , l = function() {
            function t(t, e, i, n, o) {
                this.hoverElement = e,
                this.item = i,
                this.model = n,
                this.onView = o,
                this.type = t,
                this.container = null,
                this.played = !1,
                this.seeking = !1,
                this.completed = !1,
                this.src = i.videoThumbnail,
                this.video = (0,
                r.V)({
                    class: "jw-reset jw-video-thumbnail"
                }),
                this.video.muted = !0,
                this.onPlay = this.onPlay.bind(this),
                this.onPause = this.onPause.bind(this),
                this.onEnded = this.onEnded.bind(this),
                this.onError = this.onError.bind(this)
            }
            var e = t.prototype;
            return e.adapt = function() {
                var t = this.video;
                switch (this.type) {
                case "overlayItem":
                    this.container = this.hoverElement.querySelector(".jw-related-item-poster"),
                    this.container && this.container.parentElement && !this.hoverElement.className.match(/jw-related-item-next-up/) && (this.hoverElement = this.container.parentElement);
                    break;
                case "widgetItem":
                    this.container = this.hoverElement.querySelector(".jw-related-shelf-item-image");
                    break;
                case "shelfItem":
                default:
                    break;
                case "posterItem":
                    t.setAttribute("loop", "")
                }
                this.container || (this.container = (0,
                n.az)('<div class="jw-video-thumbnail-generated"></div>'))
            }
            ,
            e.onPlay = function() {
                var t = this.video;
                return this.src ? ((0,
                n.cn)(this.video, "jw-video-thumbnail-visible"),
                t && !t.src && (t.src = this.src,
                t.load()),
                this.completed && (t.currentTime = 0,
                (0,
                n.IV)(t, "jw-video-thumbnail-completed"),
                this.completed = !1),
                o.OS.iOS ? Promise.resolve(this.seekPlay()) : this.asyncPlay()) : this.destroy()
            }
            ,
            e.onPause = function() {
                (0,
                n.IV)(this.video, "jw-video-thumbnail-visible"),
                this.seeking = !1,
                this.video.pause()
            }
            ,
            e.onEnded = function() {
                "posterItem" !== this.type && (0,
                n.cn)(this.video, "jw-video-thumbnail-completed"),
                this.completed = !0,
                this.seeking = !1
            }
            ,
            e.onFirstFrame = function() {
                this.played = !0,
                "function" == typeof this.onView && this.onView(this.item)
            }
            ,
            e.onError = function() {
                this.destroy()
            }
            ,
            e.onViewPoster = function(t, e) {
                if (e)
                    return this.onPlay();
                this.onPause()
            }
            ,
            e.asyncPlay = function() {
                var t = this
                  , e = this.video;
                return (e.play() || (0,
                s.Z)(e)).then((function() {
                    t.played || t.onFirstFrame()
                }
                )).catch((function(e) {
                    if (20 !== e.code)
                        return 9 !== e.code && "Failed to load because no supported source was found." !== e.message ? t.seekPlay() : void t.destroy()
                }
                ))
            }
            ,
            e.seekPlay = function() {
                var t = this
                  , e = this.video
                  , i = e.hasAttribute("loop")
                  , n = 0
                  , o = this.seek = function(r) {
                    if (t.seeking) {
                        if (!e.duration)
                            return (0,
                            a.U)(o);
                        n || (n = r);
                        var s = (r - n) / 1e3;
                        i ? s %= e.duration : s = Math.min(s, e.duration),
                        e.currentTime = s,
                        e.duration > s || i ? (0,
                        a.U)(o) : t.onEnded()
                    }
                }
                  , r = this.handleSeek = function() {
                    t.onFirstFrame(),
                    t.video.removeEventListener("seeked", r)
                }
                ;
                this.played || this.video.addEventListener("seeked", r),
                this.seeking = !0,
                (0,
                a.U)(o)
            }
            ,
            e.addEventListeners = function() {
                "posterItem" === this.type ? (this.model.once("change:state", this.destroy, this),
                this.model.on("change:viewable", this.onViewPoster, this)) : (o.OS.mobile || (this.hoverElement.addEventListener("mouseenter", this.onPlay),
                this.hoverElement.addEventListener("mouseleave", this.onPause)),
                this.video.addEventListener("ended", this.onEnded)),
                this.video.addEventListener("error", this.onError)
            }
            ,
            e.removeEventListeners = function() {
                "posterItem" === this.type ? (this.model.off("change: state", this.destroy, this),
                this.model.off("change:viewable", this.onViewPoster, this)) : (o.OS.mobile || (this.hoverElement.removeEventListener("mouseenter", this.onPlay),
                this.hoverElement.removeEventListener("mouseleave", this.onPause)),
                this.video.removeEventListener("ended", this.onEnded)),
                this.video.removeEventListener("error", this.onError),
                this.handleSeek && this.video.removeEventListener("seeked", this.handleSeek)
            }
            ,
            e.init = function() {
                this.adapt(this.hoverElement.className),
                (0,
                n.cn)(this.container, "jw-video-thumbnail-container"),
                "widgetItem" === this.type ? (0,
                n.SH)(this.container, this.video) : this.container.appendChild(this.video),
                this.container.parentElement && "posterItem" !== this.type ? "shelfItem" === this.type && (0,
                n.SH)(this.hoverElement, this.container) : this.hoverElement.appendChild(this.container),
                this.addEventListeners(),
                "posterItem" === this.type && this.model.get("viewable") && this.onViewPoster(null, !0)
            }
            ,
            e.isDestroyed = function() {
                return !this.video
            }
            ,
            e.destroy = function() {
                this.isDestroyed() || (this.removeEventListeners(),
                this.seeking = !1,
                this.seek && (0,
                a.W)(this.seek),
                this.onPause(),
                this.video.removeAttribute("src"),
                this.video.load(),
                this.container.removeChild(this.video),
                this.video = null,
                this.container.className.match(/jw-video-thumbnail-generated/) ? this.container.parentNode.removeChild(this.container) : (0,
                n.IV)(this.container, "jw-video-thumbnail-container"),
                this.container = null)
            }
            ,
            t
        }()
    },
    4646: function(t, e, i) {
        "use strict";
        i.r(e),
        i.d(e, {
            default: function() {
                return Pt
            }
        });
        var n = {};
        i.r(n),
        i.d(n, {
            email: function() {
                return jt
            },
            embed: function() {
                return vt
            },
            facebook: function() {
                return dt
            },
            link: function() {
                return mt
            },
            linkedin: function() {
                return ht
            },
            pinterest: function() {
                return wt
            },
            reddit: function() {
                return gt
            },
            tumblr: function() {
                return ft
            },
            twitter: function() {
                return pt
            }
        });
        var o = i(4578)
          , a = i(8348)
          , r = i(1643)
          , s = i(328)
          , l = i(1261)
          , c = i(2799)
          , u = i(5004)
          , d = i(8165)
          , p = i(4576)
          , h = i(4697)
          , w = i(7462)
          , g = i(974)
          , f = i(5882)
          , j = i(7191)
          , m = i(2957)
          , v = i(6234)
          , b = i(9888)
          , y = i(5646)
          , x = function() {
            function t(t, e, i) {
                (0,
                w.Z)(this, s.ZP),
                this._model = t,
                this._api = e,
                this._playerElement = i,
                this.localization = t.get("localization"),
                this.state = "tooltip",
                this.enabled = !1,
                this.shown = !1,
                this.feedShownId = "",
                this.closeUi = null,
                this.tooltipUi = null,
                this.reset()
            }
            var e = t.prototype;
            return e.setup = function(t) {
                this.container = t.createElement("div"),
                this.container.className = "jw-nextup-container jw-reset";
                var e, i, n, o, r = (0,
                c.az)((void 0 === e && (e = ""),
                void 0 === i && (i = ""),
                void 0 === n && (n = ""),
                void 0 === o && (o = ""),
                '<div class="jw-nextup jw-background-color jw-reset' + (a.Browser.firefox ? " jw-nextup-firefox-pip-fix" : "") + '"><div class="jw-nextup-tooltip jw-reset"><div class="jw-nextup-thumbnail jw-reset"></div><div class="jw-nextup-body jw-reset"><div class="jw-nextup-header jw-reset">' + e + '</div><div class="jw-nextup-title jw-reset-text" dir="auto">' + i + '</div><div class="jw-nextup-duration jw-reset">' + n + '</div></div></div><button type="button" class="jw-icon jw-nextup-close jw-reset" aria-label="' + o + '"></button></div>'));
                r.querySelector(".jw-nextup-close").appendChild((0,
                j.W)("close")),
                this.addContent(r),
                this.closeButton = this.content.querySelector(".jw-nextup-close"),
                this.closeButton.setAttribute("aria-label", this.localization.close),
                this.tooltip = this.content.querySelector(".jw-nextup-tooltip");
                var s = this._model
                  , l = s.player;
                this.enabled = !1,
                s.on("change:nextUp", this.onNextUp, this),
                l.change("duration", this.onDuration, this),
                l.change("position", this.onElapsed, this),
                l.change("streamType", this.onStreamType, this),
                l.change("state", (function(t, e) {
                    "complete" === e && this.toggle(!1)
                }
                ), this),
                this.closeUi = (0,
                y.Z)(this.closeButton, (function() {
                    this.nextUpSticky = !1,
                    this.toggle(!1)
                }
                ), this),
                this.tooltipUi = new f.ZP(this.tooltip).on("click", this.click, this)
            }
            ,
            e.loadThumbnail = function(t) {
                return this.nextUpImage = new Image,
                this.nextUpImage.onload = function() {
                    this.nextUpImage.onload = null
                }
                .bind(this),
                this.nextUpImage.src = t,
                {
                    backgroundImage: 'url("' + t + '")'
                }
            }
            ,
            e.click = function() {
                var t = this.feedShownId;
                this.reset(),
                this._api.next({
                    feedShownId: t,
                    reason: "interaction"
                })
            }
            ,
            e.toggle = function(t, e) {
                if (this.enabled && ((0,
                c.og)(this.container, "jw-nextup-sticky", !!this.nextUpSticky),
                this.shown !== t)) {
                    this.shown = t,
                    (0,
                    c.og)(this.container, "jw-nextup-container-visible", t),
                    (0,
                    c.og)(this._playerElement, "jw-flag-nextup", t);
                    var i = this._model.get("nextUp");
                    t && i ? (this.feedShownId = (0,
                    v.B)(v.F),
                    this.trigger("nextShown", {
                        mode: i.mode,
                        ui: "nextup",
                        itemsShown: [i],
                        feedData: i.feedData,
                        reason: e,
                        feedShownId: this.feedShownId
                    })) : this.feedShownId = ""
                }
            }
            ,
            e.setNextUpItem = function(t) {
                var e = this;
                setTimeout((function() {
                    var i = t.mediaid
                      , n = t.image
                      , o = t.title
                      , a = t.duration;
                    if (e.thumbnail = e.content.querySelector(".jw-nextup-thumbnail"),
                    (0,
                    c.og)(e.content, "jw-nextup-thumbnail-visible", !!n),
                    n || i) {
                        var r;
                        r = i ? "https://cdn.jwplayer.com/v2/media/" + i + "/poster.jpg?width=120" : n;
                        var s = e.loadThumbnail(r);
                        (0,
                        g.oB)(e.thumbnail, s)
                    }
                    e.header = e.content.querySelector(".jw-nextup-header"),
                    e.header.textContent = (0,
                    c.az)(e.localization.nextUp).textContent,
                    e.title = e.content.querySelector(".jw-nextup-title"),
                    e.title.textContent = o ? (0,
                    c.az)(o).textContent : "",
                    a && (e.duration = e.content.querySelector(".jw-nextup-duration"),
                    e.duration.textContent = "number" == typeof a ? (0,
                    b.timeFormat)(a) : a)
                }
                ), 500)
            }
            ,
            e.onNextUp = function(t, e) {
                this.reset(),
                e || (e = {
                    showNextUp: !1
                }),
                this.enabled = !(!e.title && !e.image),
                this.enabled && (e.showNextUp || (this.nextUpSticky = !1,
                this.toggle(!1)),
                this.setNextUpItem(e))
            }
            ,
            e.onDuration = function(t, e) {
                if (e) {
                    var i = t.get("nextupoffset")
                      , n = -10;
                    i && (n = (0,
                    m.U5)(i, e)),
                    n < 0 && (n += e),
                    (0,
                    m.zz)(i) && e - 5 < n && (n = e - 5),
                    this.offset = n
                }
            }
            ,
            e.onElapsed = function(t, e) {
                var i = this.nextUpSticky;
                if (this.enabled && !1 !== i) {
                    var n = e >= this.offset;
                    n && void 0 === i ? (this.nextUpSticky = n,
                    this.toggle(n, "time")) : !n && i && this.reset()
                }
            }
            ,
            e.onStreamType = function(t, e) {
                "VOD" !== e && (this.nextUpSticky = !1,
                this.toggle(!1))
            }
            ,
            e.element = function() {
                return this.container
            }
            ,
            e.addContent = function(t) {
                this.content && this.removeContent(),
                this.content = t,
                this.container.appendChild(t)
            }
            ,
            e.removeContent = function() {
                this.content && (this.container.removeChild(this.content),
                this.content = null)
            }
            ,
            e.reset = function() {
                this.nextUpSticky = void 0,
                this.toggle(!1)
            }
            ,
            e.destroy = function() {
                this.off(),
                this._model.off(null, null, this),
                this.closeUi && this.closeUi.destroy(),
                this.tooltipUi && this.tooltipUi.destroy()
            }
            ,
            t
        }()
          , k = function(t, e) {
            var i = t.featured
              , n = t.showLogo
              , o = t.type;
            return t.logo = n ? '<span class="jw-rightclick-logo jw-reset"></span>' : "",
            '<li class="jw-reset jw-rightclick-item ' + (i ? "jw-featured" : "") + '">' + C[o](t, e) + "</li>"
        }
          , C = {
            link: function(t) {
                var e = t.link
                  , i = t.title;
                return '<a href="' + (e || "") + '" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">' + t.logo + (i || "") + "</a>"
            },
            share: function(t, e) {
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">' + e.sharing.heading + "</button>"
            },
            pip: function(t, e) {
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-pip-item" dir="auto">' + e.pipIcon + "</button>"
            },
            keyboardShortcuts: function(t, e) {
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">' + e.shortcuts.keyboardShortcuts + "</button>"
            },
            button: function(t) {
                var e = t.title;
                return '<button type="button" class="jw-reset-text jw-rightclick-link jw-' + t.button.name + '-item" dir="auto">' + e + "</button>"
            }
        }
          , M = i(6601)
          , _ = i(2268)
          , T = i(8518)
          , S = {
            free: 0,
            pro: 1,
            premium: 2,
            ads: 3,
            invalid: 4,
            enterprise: 6,
            trial: 7,
            platinum: 8,
            starter: 9,
            business: 10,
            developer: 11
        };
        function E(t) {
            var e = (0,
            c.az)(t)
              , i = e.querySelector(".jw-rightclick-logo");
            return i && i.appendChild((0,
            j.W)("jwplayer-logo")),
            e
        }
        var A = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.buildArray = function() {
                var e = this.model
                  , i = t.prototype.buildArray.call(this)
                  , n = e.get("localization")
                  , o = n.abouttext
                  , a = n.videoInfo
                  , r = i.items;
                if (o) {
                    for (var s, l, c = 0; c < r.length; c++)
                        if (r[c].featured) {
                            l = r[c],
                            s = c;
                            break
                        }
                    if (l) {
                        l.showLogo = !1;
                        var u = {
                            title: o,
                            type: "link",
                            link: e.get("aboutlink") || l.link
                        };
                        r[s] = u
                    }
                }
                return this.shareHandler && r.unshift({
                    type: "share"
                }),
                i.items.splice(0, 0, {
                    type: "button",
                    title: a,
                    button: {
                        name: "stats"
                    }
                }),
                i
            }
            ,
            i.enableSharing = function(t) {
                var e = this;
                this.shareHandler = function() {
                    e.mouseOverContext = !1,
                    e.hideMenu(),
                    t()
                }
            }
            ,
            i.addHideMenuHandlers = function() {
                var e = this;
                t.prototype.addHideMenuHandlers.call(this);
                var i = this.el.querySelector(".jw-share-item");
                i && i.addEventListener("click", this.shareHandler);
                var n = this.el.querySelector(".jw-stats-item");
                n && (this.statsHandler = function() {
                    var t = e.model;
                    e.mouseOverContext = !1,
                    e.hideMenu(),
                    t.set("displayStats", !t.get("displayStats"))
                }
                ,
                n.addEventListener("click", this.statsHandler))
            }
            ,
            i.removeHideMenuHandlers = function() {
                if (t.prototype.removeHideMenuHandlers.call(this),
                this.el) {
                    var e = this.el.querySelector(".jw-share-item");
                    e && e.removeEventListener("click", this.shareHandler);
                    var i = this.el.querySelector(".jw-stats-item");
                    i && i.removeEventListener("click", this.statsHandler)
                }
            }
            ,
            e
        }(function() {
            function t(t) {
                this.shortcutsTooltip = t
            }
            var e = t.prototype;
            return e.buildArray = function() {
                var t = M.i.split("+")[0]
                  , e = this.model
                  , i = e.get("edition")
                  , n = e.get("localization").poweredBy
                  , o = '<span class="jw-reset">JW Player ' + t + "</span>"
                  , r = {
                    items: [{
                        title: (0,
                        T.t6)(n) ? o + " " + n : n + " " + o,
                        type: "link",
                        featured: !0,
                        showLogo: !0,
                        link: "https://jwplayer.com/learn-more?e=" + S[i]
                    }]
                }
                  , s = r.items;
                return this.shortcutsTooltip && s.splice(s.length - 1, 0, {
                    type: "keyboardShortcuts"
                }),
                this.pipMenu = !a.OS.mobile && "disabled" !== e.get("pipIcon") && (a.Browser.chrome && !(0,
                _.yS)() || a.Browser.edge || a.Browser.safari),
                this.pipMenu && s.splice(s.length - 1, 0, {
                    type: "pip"
                }),
                r
            }
            ,
            e.rightClick = function(t) {
                if (this.lazySetup(),
                this.mouseOverContext)
                    return !1;
                this.hideMenu(),
                this.showMenu(t),
                this.addHideMenuHandlers()
            }
            ,
            e.getOffset = function(t) {
                var e = (0,
                c.A8)(this.wrapperElement)
                  , i = t.pageX - e.left
                  , n = t.pageY - e.top;
                return this.model.get("touchMode") && (n -= 100),
                {
                    x: i,
                    y: n
                }
            }
            ,
            e.showMenu = function(t) {
                var e = this
                  , i = this.getOffset(t);
                return this.el.style.left = i.x + "px",
                this.el.style.top = i.y + "px",
                this.outCount = 0,
                (0,
                c.cn)(this.playerContainer, "jw-flag-rightclick-open"),
                (0,
                c.cn)(this.el, "jw-open"),
                clearTimeout(this._menuTimeout),
                this._menuTimeout = setTimeout((function() {
                    return e.hideMenu()
                }
                ), 3e3),
                !1
            }
            ,
            e.hideMenu = function(t) {
                t && this.el && this.el.contains(t.target) || ((0,
                c.IV)(this.playerContainer, "jw-flag-rightclick-open"),
                (0,
                c.IV)(this.el, "jw-open"))
            }
            ,
            e.lazySetup = function() {
                var t, e, i, n = this, o = (t = this.buildArray(),
                e = this.model.get("localization"),
                '<div class="jw-rightclick jw-reset"><ul class="jw-rightclick-list jw-reset">' + (void 0 === (i = t.items) ? [] : i).map((function(t) {
                    return k(t, e)
                }
                )).join("") + "</ul></div>");
                if (this.el) {
                    if (this.html !== o) {
                        this.html = o;
                        var a = E(o);
                        (0,
                        c.EU)(this.el);
                        for (var r = a.childNodes.length; r--; )
                            this.el.appendChild(a.firstChild)
                    }
                } else
                    this.html = o,
                    this.el = E(this.html),
                    this.wrapperElement.appendChild(this.el),
                    this.hideMenuHandler = function(t) {
                        (0,
                        f.dO)(t) || n.hideMenu(t)
                    }
                    ,
                    this.overHandler = function() {
                        n.mouseOverContext = !0
                    }
                    ,
                    this.outHandler = function(t) {
                        n.mouseOverContext = !1,
                        t.relatedTarget && !n.el.contains(t.relatedTarget) && ++n.outCount > 1 && n.hideMenu()
                    }
                    ,
                    this.pipHandler = function() {
                        n.model.set("pip", !n.model.get("pip"))
                    }
                    ,
                    this.shortcutsTooltipHandler = function() {
                        n.mouseOverContext = !1,
                        n.hideMenu(),
                        n.shortcutsTooltip.open()
                    }
            }
            ,
            e.setup = function(t, e, i) {
                this.wrapperElement = i,
                this.model = t,
                this.mouseOverContext = !1,
                this.playerContainer = e,
                this.ui = new f.ZP(i).on("longPress", this.rightClick, this)
            }
            ,
            e.addHideMenuHandlers = function() {
                this.removeHideMenuHandlers(),
                this.wrapperElement.addEventListener("touchstart", this.hideMenuHandler),
                document.addEventListener("touchstart", this.hideMenuHandler),
                a.OS.mobile || (this.wrapperElement.addEventListener("click", this.hideMenuHandler),
                document.addEventListener("click", this.hideMenuHandler),
                this.el.addEventListener("mouseover", this.overHandler),
                this.el.addEventListener("mouseout", this.outHandler)),
                this.pipMenu && this.el.querySelector(".jw-pip-item").addEventListener("click", this.pipHandler),
                this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").addEventListener("click", this.shortcutsTooltipHandler)
            }
            ,
            e.removeHideMenuHandlers = function() {
                this.wrapperElement && (this.wrapperElement.removeEventListener("click", this.hideMenuHandler),
                this.wrapperElement.removeEventListener("touchstart", this.hideMenuHandler)),
                this.el && (this.el.removeEventListener("mouseover", this.overHandler),
                this.el.removeEventListener("mouseout", this.outHandler),
                this.pipMenu && this.el.querySelector(".jw-pip-item").removeEventListener("click", this.pipHandler),
                this.shortcutsTooltip && this.el.querySelector(".jw-shortcuts-item").removeEventListener("click", this.shortcutsTooltipHandler)),
                document.removeEventListener("click", this.hideMenuHandler),
                document.removeEventListener("touchstart", this.hideMenuHandler)
            }
            ,
            e.destroy = function() {
                clearTimeout(this._menuTimeout),
                this.removeHideMenuHandlers(),
                this.el && (this.hideMenu(),
                this.hideMenuHandler = null,
                this.el = null),
                this.wrapperElement && (this.wrapperElement.oncontextmenu = null,
                this.wrapperElement = null),
                this.model && (this.model = null),
                this.ui && (this.ui.destroy(),
                this.ui = null)
            }
            ,
            t
        }())
          , I = i(7326)
          , P = i(7284)
          , z = i(3477)
          , L = i(3163)
          , B = i(1831)
          , Z = i(2810)
          , V = i(6436);
        function F(t, e, i, n) {
            if (t && "Auto" === t[0].label && i && i.items.length) {
                var o = i.items[0].el.querySelector(".jw-auto-label")
                  , a = t[e.index] || {
                    label: ""
                };
                o.textContent = n ? "" : a.label
            }
        }
        var R = function(t) {
            function e(e, i, n, o) {
                var a, r, s, l;
                return (a = t.call(this, "settings", o.settings, null, o) || this).api = e,
                a.model = i,
                a.localization = o,
                a.controlbar = n,
                a.closeButton = function(t, e, i) {
                    var n = (0,
                    d.Z)("jw-settings-close", e, i.close, [(0,
                    j.W)("close")]);
                    return n.show(),
                    n.ui.on("keydown", (function(t) {
                        var i = t.sourceEvent
                          , n = (0,
                        Z.ku)(i.key);
                        ("Enter" === n || "Right" === n || "Tab" === n && !i.shiftKey) && e(t)
                    }
                    ), this),
                    t.appendChild(n.element()),
                    n
                }(a.el.querySelector(".jw-" + a.name + "-topbar-buttons"), a.close, o),
                a.backButtonTarget = null,
                a.defaultChild = null,
                a.topbar = (r = (0,
                I.Z)(a),
                s = r.closeButton,
                l = r.el.querySelector(".jw-settings-topbar"),
                new f.ZP(l).on("keydown", (function(t) {
                    var e = t.sourceEvent
                      , i = t.target
                      , n = (0,
                    c.AH)(i)
                      , o = (0,
                    c.i3)(i)
                      , a = function(e) {
                        o ? e || o.focus() : r.close(t)
                    }
                      , l = function() {
                        n && s.element() && i !== s.element() && n.focus()
                    }
                      , u = function() {
                        var e = i.getAttribute("name")
                          , n = r.children[e];
                        return !n && e && r.backButtonTarget && (n = r.backButtonTarget.children[e]),
                        n && n.open && n.open(t),
                        n
                    };
                    switch ((0,
                    Z.ku)(e.key)) {
                    case "Esc":
                        r.close(t);
                        break;
                    case "Left":
                        a();
                        break;
                    case "Right":
                        l();
                        break;
                    case "Tab":
                        e.shiftKey && a(!0);
                        break;
                    case "Up":
                    case "Down":
                    case "Enter":
                        u()
                    }
                    if (e.stopPropagation(),
                    /13|32|37|38|39|40/.test(e.keyCode))
                        return e.preventDefault(),
                        !1
                }
                ))),
                a.onDocumentClick = a.onDocumentClick.bind((0,
                I.Z)(a)),
                a.addEventListeners(),
                a
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.setupMenu = function(t, e, i, n, o, a) {
                if (!i || i.length <= 1)
                    this.removeMenu(t);
                else {
                    var r = this.children[t];
                    r || (r = new P.Z(t,e,this,this.localization)),
                    r.setMenuItems(r.createItems(i, n, a), o);
                    var s = r.categoryButton && r.categoryButton.element();
                    this.buttonContainer.firstChild === s && (this.defaultChild = r)
                }
            }
            ,
            i.onLevels = function(t, e) {
                var i = this
                  , n = {
                    defaultText: this.localization.auto
                };
                this.setupMenu("quality", this.localization.hd, e, (function(t) {
                    return i.api.setCurrentQuality(t)
                }
                ), t.get("currentLevel") || 0, n)
            }
            ,
            i.onCurrentLevel = function(t, e) {
                var i = this.children.quality
                  , n = t.get("visualQuality");
                n && i && F(t.get("levels"), n.level, i, e),
                i.items[e].active || (0,
                Z.dt)(i, e)
            }
            ,
            i.onVisualQuality = function(t, e) {
                var i = this.children.quality;
                e && i && F(t.get("levels"), e.level, i, t.get("currentLevel"))
            }
            ,
            i.onAudioTracks = function(t, e) {
                var i = this;
                this.setupMenu("audioTracks", this.localization.audioTracks, e, (function(t) {
                    return i.api.setCurrentAudioTrack(t)
                }
                ), t.get("currentAudioTrack"))
            }
            ,
            i.onAudioTrackIndex = function(t, e) {
                this.children.audioTracks && (0,
                Z.dt)(this.children.audioTracks, e)
            }
            ,
            i.onCaptionsList = function(t, e) {
                var i = this
                  , n = {
                    defaultText: this.localization.off
                }
                  , o = t.get("captionsIndex");
                this.setupMenu("captions", this.localization.cc, e, (function(t) {
                    return i.api.setCurrentCaptions(t)
                }
                ), o, n);
                var a = this.children.captions;
                if (a && !a.children.captionsSettings) {
                    a.topbar = a.topbar || a.createTopbar(),
                    (0,
                    c.EU)(a.topbar);
                    var r = this.localization.captionsStyles
                      , s = new P.Z("captionsSettings",r.subtitleSettings,a,this.localization)
                      , l = s.open;
                    s.open = function(t) {
                        var e = s.visible;
                        l.call(s, t),
                        e || i.trigger("captionStylesOpened")
                    }
                    ;
                    var u = s.destroy;
                    s.destroy = function(t) {
                        a.topbar.parentNode.removeChild(a.topbar),
                        a.topbar = null,
                        a.topbarUI.destroy(),
                        u.call(s, t)
                    }
                    ;
                    var d = new z.s(this.localization.settings,s.open);
                    a.topbar.appendChild(d.el);
                    var p = t.get("captions");
                    !function e(n) {
                        var o = new z.s(i.localization.reset,(function() {
                            i.model.set("captions", (0,
                            w.Z)({}, B.R)),
                            e(!0)
                        }
                        ));
                        o.el.classList.add("jw-settings-reset");
                        var a = [];
                        (0,
                        Z.JU)(r).forEach((function(e) {
                            !n && p && p[e.name] ? e.val = p[e.name] : e.val = e.defaultVal;
                            var o = e.values.indexOf(e.val);
                            e.currentSelection = e.options[o];
                            var r = new P.Z(e.name,e.label,s,i.localization)
                              , l = new z.s(e,r.open,L.v2);
                            r.buttonContainer = l;
                            var c = r.createItems(e.options, (function(n) {
                                var o = l.el.querySelector(".jw-settings-content-item-value");
                                !function(e, n) {
                                    var o = t.get("captions")
                                      , a = e.name
                                      , r = e.values[n]
                                      , s = (0,
                                    w.Z)({}, o);
                                    s[a] = r,
                                    i.model.set("captions", s)
                                }(e, n),
                                o.innerText = e.options[n]
                            }
                            ), null);
                            r.setMenuItems(c, e.values.indexOf(e.val) || 0),
                            a.push(l)
                        }
                        )),
                        a.push(o),
                        s.setMenuItems(a)
                    }()
                }
            }
            ,
            i.onPlaylistItem = function() {
                this.removeMenu("captions"),
                this.removeMenu("audioTracks"),
                this.removeMenu("quality"),
                this.controlbar.elements.captionsButton.hide(),
                this.visible && this.close()
            }
            ,
            i.onCaptionsIndex = function(t, e) {
                var i = this.children.captions;
                i && (0,
                Z.dt)(i, e),
                this.controlbar.toggleCaptionsButtonState(!!e)
            }
            ,
            i.onPlaybackRates = function(t, e) {
                var i = this;
                !e && t && (e = t.get("playbackRates"));
                var n = this.localization
                  , o = this.children;
                if (t.get("supportsPlaybackRate") && "LIVE" !== t.get("streamType") && t.get("playbackRateControls")) {
                    var a = e.indexOf(t.get("playbackRate"))
                      , r = {
                        tooltipText: n.playbackRates
                    };
                    this.setupMenu("playbackRates", this.localization.playbackRates, e, (function(t) {
                        return i.api.setPlaybackRate(t)
                    }
                    ), a, r)
                } else
                    o.playbackRates && this.removeMenu("playbackRates")
            }
            ,
            i.onPlaybackRate = function(t, e) {
                var i = t.get("playbackRates")
                  , n = -1;
                i && (n = i.indexOf(e)),
                (0,
                Z.dt)(this.children.playbackRates, n)
            }
            ,
            i.onPlaybackRateControls = function(t) {
                this.onPlaybackRates(t)
            }
            ,
            i.onCastActive = function(t, e, i) {
                e !== i && (e ? (this.removeMenu("audioTracks"),
                this.removeMenu("quality"),
                this.removeMenu("playbackRates"),
                this.children.captions && this.children.captions.removeMenu("captionsSettings")) : (this.onAudioTracks(t, t.get("audioTracks")),
                this.onLevels(t, t.get("levels")),
                this.onPlaybackRates(t, t.get("playbackRates")),
                this.onCaptionsList(t, t.get("captionsList"))))
            }
            ,
            i.onChangeStreamType = function() {
                this.onPlaybackRates(this.model)
            }
            ,
            i.onDocumentClick = function(t) {
                /jw-(settings|video|nextup-close|sharing-link|share-item)/.test(t.target.className) || this.close()
            }
            ,
            i.addEventListeners = function() {
                var t = this.updateControlbarButtons
                  , e = this.model;
                this.on("menuAppended menuRemoved", t, this),
                e.change("levels", this.onLevels, this),
                e.on("change:currentLevel", this.onCurrentLevel, this),
                e.on("change:visualQuality", this.onVisualQuality, this),
                e.change("audioTracks", this.onAudioTracks, this),
                e.on("change:currentAudioTrack", this.onAudioTrackIndex, this),
                e.change("captionsList", this.onCaptionsList, this),
                e.on("change:playlistItem", this.onPlaylistItem, this),
                e.change("captionsIndex", this.onCaptionsIndex, this),
                e.change("playbackRates", this.onPlaybackRates, this),
                e.change("playbackRate", this.onPlaybackRate, this),
                e.on("change:playbackRateControls", this.onPlaybackRateControls, this),
                e.on("change:castActive", this.onCastActive, this),
                e.on("change:streamType", this.onChangeStreamType, this)
            }
            ,
            i.open = function(t) {
                var e = (0,
                V.i)(this.model.get("containerWidth"));
                if (!this.visible) {
                    e < 2 && "LIVE" !== this.model.get("streamType") && (this.mediaStateWhenOpened = this.model.get("state"),
                    this.api.pause());
                    var i = this.controlbar.elements.settingsButton.element();
                    i && i.setAttribute("aria-expanded", !0),
                    this.el.parentNode.classList.add("jw-settings-open"),
                    this.trigger("visibility", {
                        visible: !0,
                        evt: t
                    }),
                    document.addEventListener("click", this.onDocumentClick),
                    this.el.setAttribute("aria-expanded", "true"),
                    this.visible = !0
                }
            }
            ,
            i.close = function(t) {
                var e, i = (0,
                Z.ku)(t && t.sourceEvent && t.sourceEvent.key), n = this.controlbar.elements.settingsButton.element(), o = (0,
                V.i)(this.model.get("containerWidth"));
                switch (n && n.setAttribute("aria-expanded", !1),
                o < 2 && (this.mediaStateWhenOpened !== r.r0 && this.mediaStateWhenOpened !== r.Kb || this.api.play()),
                this.el.setAttribute("aria-expanded", "false"),
                this.el.parentNode.classList.remove("jw-settings-open"),
                this.trigger("visibility", {
                    visible: !1,
                    evt: t
                }),
                document.removeEventListener("click", this.onDocumentClick),
                this.visible = !1,
                this.openMenus.length && this.closeChildren(),
                i) {
                case "Right":
                    e = (0,
                    c.AH)(n);
                    break;
                case "Left":
                    e = (0,
                    c.i3)(n);
                    break;
                case "Tab":
                    if (t.shiftKey) {
                        e = (0,
                        c.i3)(n);
                        break
                    }
                case "Enter":
                case "Esc":
                    e = n
                }
                e && e.focus({
                    preventScroll: !event
                })
            }
            ,
            i.updateControlbarButtons = function(t) {
                var e = this.children
                  , i = this.controlbar
                  , n = this.model
                  , o = !!e.quality || !!e.playbackRates || !!e.audioTracks || Object.keys(e).length > 1;
                i.elements.settingsButton.toggle(o),
                e.captions && i.toggleCaptionsButtonState(!!n.get("captionsIndex"));
                var a = i.elements[t + "Button"];
                if (a) {
                    var r = !!e[t];
                    a.toggle(r)
                } else if (o)
                    for (var s = Object.keys(this.children), l = 0; l < s.length; l++) {
                        var c = this.children[s[l]]
                          , u = c.categoryButton && c.categoryButton.element();
                        this.buttonContainer.firstChild === u && (this.defaultChild = c)
                    }
            }
            ,
            i.destroy = function() {
                Z.MR.call(this),
                document.removeEventListener("click", this.onDocumentClick)
            }
            ,
            e
        }(P.Z)
          , H = i(4225)
          , O = i(6391);
        function N(t, e, i, n) {
            var o, a = !1, r = i.get("localization").shortcuts, s = (0,
            c.az)(function(t, e) {
                return '<div class="jw-shortcuts-tooltip jw-modal jw-reset" title="' + e + '"><span class="jw-hidden" id="jw-shortcuts-tooltip-explanation">Press shift question mark to access a list of keyboard shortcuts</span><div class="jw-reset jw-shortcuts-container"><div class="jw-reset jw-shortcuts-header"><span class="jw-reset jw-shortcuts-title">' + e + '</span><button role="switch" aria-label="' + e + '" class="jw-reset jw-switch"><span class="jw-reset jw-switch-knob"></span><span class="jw-reset-text jw-switch-enabled">Enabled</span><span class="jw-reset-text jw-switch-disabled">Disabled</span></button></div><div class="jw-reset jw-shortcuts-tooltip-list"><div class="jw-shortcuts-tooltip-descriptions jw-reset">' + t.map((function(t) {
                    return '<div class="jw-shortcuts-row jw-reset"><span class="jw-shortcuts-description jw-reset">' + t.description + '</span><span class="jw-shortcuts-key jw-reset">' + t.key + "</span></div>"
                }
                )).join("") + "</div></div></div></div>"
            }(function(t) {
                var e = t.playPause
                  , i = t.volumeToggle
                  , n = t.fullscreenToggle
                  , o = t.seekPercent
                  , a = t.increaseVolume
                  , r = t.decreaseVolume
                  , s = t.seekForward
                  , l = t.seekBackward;
                return [{
                    key: t.spacebar,
                    description: e
                }, {
                    key: "↑",
                    description: a
                }, {
                    key: "↓",
                    description: r
                }, {
                    key: "→",
                    description: s
                }, {
                    key: "←",
                    description: l
                }, {
                    key: "c",
                    description: t.captionsToggle
                }, {
                    key: "f",
                    description: n
                }, {
                    key: "m",
                    description: i
                }, {
                    key: "0-9",
                    description: o
                }]
            }(r), r.keyboardShortcuts)), l = new f.ZP(s.querySelector(".jw-switch")), u = function() {
                l.el.setAttribute("aria-checked", i.get("enableShortcuts")),
                (0,
                c.cn)(s, "jw-open"),
                s.querySelector(".jw-shortcuts-close").focus(),
                document.addEventListener("click", h),
                a = !0,
                n(!0)
            }, p = function() {
                (0,
                c.IV)(s, "jw-open"),
                document.removeEventListener("click", h),
                a = !1,
                n(!1)
            }, h = function(t) {
                var e = t.target;
                /jw-shortcuts|jw-switch/.test(e.className) || p()
            }, w = function(t) {
                var e = t.currentTarget
                  , n = "true" !== e.getAttribute("aria-checked");
                e.setAttribute("aria-checked", n.toString()),
                i.set("enableShortcuts", n)
            };
            return o = (0,
            d.Z)("jw-shortcuts-close", p, i.get("localization").close, [(0,
            j.W)("close")]),
            (0,
            c.SH)(s, o.element()),
            o.show(),
            t.appendChild(s),
            l.on("click", w),
            {
                el: s,
                open: u,
                close: p,
                destroy: function() {
                    p(),
                    l.destroy()
                },
                toggleVisibility: function() {
                    a ? p() : u()
                }
            }
        }
        var q = function(t) {
            function e(e, i, n) {
                var o;
                (o = t.call(this) || this).element = (0,
                c.az)(function(t, e) {
                    return '<div class="jw-float-bar jw-reset">\n            <div class="jw-float-bar-title" aria-label="' + e + '" >' + e + '</div>\n            <div class="jw-float-bar-icon jw-float-icon jw-icon jw-button-color jw-reset" aria-label="' + t + '" tabindex="0">\n            </div>\n        </div>'
                }(i, n));
                var a = o.element.querySelector(".jw-float-bar-icon");
                return a.appendChild((0,
                j.W)("floating-close")),
                o.ui = (0,
                y.Z)(a, (function() {
                    o.trigger(r.xf)
                }
                )),
                o.title = o.element.querySelector(".jw-float-bar-title"),
                e.appendChild(o.element),
                o
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.destroy = function() {
                this.element && (this.ui.destroy(),
                this.element.parentNode.removeChild(this.element),
                this.element = null),
                this.off()
            }
            ,
            i.setTitle = function(t) {
                t ? (this.title.innerText = t,
                this.title.setAttribute("aria-label", t)) : (this.title.innerHTML = "&nbsp;",
                this.title.setAttribute("aria-label", ""))
            }
            ,
            e
        }(s.ZP);
        i(9725),
        i(1334);
        var U = a.OS.mobile ? 4e3 : 2e3
          , D = [27];
        H.Z.cloneIcon = j.W,
        O.Z.forEach((function(t) {
            if (t.getState() === r.Vy) {
                var e = t.getContainer().querySelector(".jw-error-msg .jw-icon");
                e && !e.hasChildNodes() && e.appendChild(H.Z.cloneIcon("error"))
            }
        }
        ));
        var W = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this) || this).activeTimeout = -1,
                n.inactiveTime = 0,
                n.context = e,
                n.controlbar = null,
                n.displayContainer = null,
                n.backdrop = null,
                n.enabled = !0,
                n.instreamState = null,
                n.keydownCallback = null,
                n.keyupCallback = null,
                n.blurCallback = null,
                n.mute = null,
                n.nextUpToolTip = null,
                n.playerContainer = i,
                n.wrapperElement = i.querySelector(".jw-wrapper"),
                n.rightClickMenu = null,
                n.settingsMenu = null,
                n.shortcutsTooltip = null,
                n.showing = !1,
                n.muteChangeCallback = null,
                n.unmuteCallback = null,
                n.logo = null,
                n.div = null,
                n.dimensions = {},
                n.userInactiveTimeout = function() {
                    var t = n.inactiveTime - (0,
                    u.z)();
                    n.inactiveTime && t > 16 ? n.activeTimeout = setTimeout(n.userInactiveTimeout, t) : n.playerContainer.querySelector(".jw-tab-focus") ? n.resetActiveTimeout() : n.userInactive()
                }
                ,
                n
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.resetActiveTimeout = function() {
                clearTimeout(this.activeTimeout),
                this.activeTimeout = -1,
                this.inactiveTime = 0
            }
            ,
            i.enable = function(t, e) {
                var i = this
                  , n = this.context.createElement("div");
                n.className = "jw-controls jw-reset",
                this.div = n;
                var o = this.context.createElement("div");
                o.className = "jw-controls-backdrop jw-reset",
                this.backdrop = o,
                this.logo = this.playerContainer.querySelector(".jw-logo");
                var s = e.get("touchMode");
                if (this.focusPlayerElement = function() {
                    e.get("isFloating") ? i.wrapperElement.querySelector("video").focus({
                        preventScroll: !0
                    }) : i.playerContainer.focus({
                        preventScroll: !0
                    })
                }
                ,
                !this.displayContainer) {
                    var u = new h.Z(e,t);
                    u.buttons.display.on("click enter", (function() {
                        i.trigger(r.cy),
                        i.userActive(1e3),
                        t.playToggle({
                            reason: "interaction"
                        }),
                        i.focusPlayerElement()
                    }
                    )),
                    this.div.appendChild(u.element()),
                    this.displayContainer = u
                }
                a.OS.mobile || (this.shortcutsTooltip = new N(this.wrapperElement,t,e,(function(t) {
                    t || i.focusPlayerElement()
                }
                ))),
                this.rightClickMenu = new A(this.shortcutsTooltip),
                s && (0,
                c.cn)(this.playerContainer, "jw-flag-touch"),
                this.rightClickMenu.setup(e, this.playerContainer, this.wrapperElement),
                e.get("floating") && this.setupFloating(t, e);
                var w = this.controlbar = new p.Z(t,e,this.playerContainer.querySelector(".jw-hidden-accessibility"));
                if (w.on(r.xf, (function() {
                    i.off("userInactive", i.focusPlayerElement, i),
                    i.once("userInactive", i.focusPlayerElement, i),
                    i.userActive()
                }
                )),
                w.on("nextShown", (function(t) {
                    this.trigger("nextShown", t)
                }
                ), this),
                w.on("adjustVolume", k, this),
                e.get("nextUpDisplay") && !w.nextUpToolTip) {
                    var g = new x(e,t,this.playerContainer);
                    g.on("all", this.trigger, this),
                    g.setup(this.context),
                    w.nextUpToolTip = g,
                    this.div.appendChild(g.element())
                }
                this.div.appendChild(w.element());
                var f = e.get("localization")
                  , m = this.settingsMenu = new R(t,e.player,this.controlbar,f)
                  , v = null;
                m.on("menuVisibility", (function(n) {
                    var o = n.visible
                      , a = n.evt
                      , s = e.get("state")
                      , l = {
                        reason: "settingsInteraction"
                    }
                      , c = i.controlbar.elements.settingsButton
                      , u = "keydown" === (a && a.sourceEvent || a || {}).type
                      , d = o || u ? 0 : U;
                    i.userActive(d),
                    (0,
                    V.i)(e.get("containerWidth")) < 2 && (o && s === r.r0 ? t.pause(l) : o || s !== r._5 || v !== r.r0 || t.play(l)),
                    v = s,
                    !o && u && c ? c.element().focus() : a && i.focusPlayerElement()
                }
                )),
                m.on("captionStylesOpened", (function() {
                    return i.trigger("captionStylesOpened")
                }
                )),
                w.on("settingsInteraction", (function(t, e, i) {
                    if (e)
                        return m.defaultChild.toggle(i, !0);
                    m.children[t].toggle(i)
                }
                )),
                a.OS.mobile ? this.div.appendChild(m.el) : (this.playerContainer.setAttribute("aria-describedby", "jw-shortcuts-tooltip-explanation"),
                this.div.insertBefore(m.el, w.element()));
                var b = function(e) {
                    if (e.get("autostartMuted")) {
                        var n = function() {
                            return i.unmuteAutoplay(t, e)
                        }
                          , o = function(t, e) {
                            e || n()
                        };
                        a.OS.mobile && (i.mute = (0,
                        d.Z)("jw-autostart-mute jw-off", n, e.get("localization").unmute, [(0,
                        j.W)("volume-0")]),
                        i.mute.show(),
                        i.div.appendChild(i.mute.element())),
                        w.renderVolume(!0, e.get("volume")),
                        (0,
                        c.cn)(i.playerContainer, "jw-flag-autostart"),
                        e.on("change:autostartFailed", n, i),
                        e.on("change:autostartMuted change:mute", o, i),
                        i.muteChangeCallback = o,
                        i.unmuteCallback = n
                    }
                };
                function y(i) {
                    var n = 0
                      , o = e.get("duration")
                      , a = e.get("position");
                    if ("DVR" === e.get("streamType")) {
                        var r = e.get("dvrSeekLimit");
                        n = o,
                        o = Math.max(a, -r)
                    }
                    var s = (0,
                    l.v)(a + i, n, o);
                    t.seek(s, {
                        reason: "interaction"
                    })
                }
                function k(i) {
                    var n = (0,
                    l.v)(e.get("volume") + i, 0, 100);
                    t.setVolume(n)
                }
                e.once("change:autostartMuted", b),
                b(e);
                var C = function(n) {
                    if (n.ctrlKey || n.metaKey)
                        return !0;
                    var o = !i.settingsMenu || !i.settingsMenu.visible
                      , a = !0 === e.get("enableShortcuts")
                      , r = i.instreamState;
                    if (a || -1 !== D.indexOf(n.keyCode)) {
                        switch (n.keyCode) {
                        case 27:
                            if (e.get("fullscreen"))
                                t.setFullscreen(!1),
                                i.playerContainer.blur(),
                                i.userInactive();
                            else {
                                var s = t.getPlugin("related");
                                s && s.close({
                                    type: "escape"
                                })
                            }
                            i.rightClickMenu.el && i.rightClickMenu.hideMenuHandler(),
                            e.get("displayStats") && e.set("displayStats", !1),
                            i.shortcutsTooltip && i.shortcutsTooltip.close();
                            break;
                        case 13:
                        case 32:
                            if (document.activeElement.classList.contains("jw-switch") && 13 === n.keyCode)
                                return !0;
                            t.playToggle({
                                reason: "interaction"
                            });
                            break;
                        case 37:
                            !r && o && y(-5);
                            break;
                        case 39:
                            !r && o && y(5);
                            break;
                        case 38:
                            o && k(10);
                            break;
                        case 40:
                            o && k(-10);
                            break;
                        case 67:
                            var l = t.getCaptionsList().length;
                            if (l) {
                                var c = (t.getCurrentCaptions() + 1) % l;
                                t.setCurrentCaptions(c)
                            }
                            break;
                        case 77:
                            t.setMute();
                            break;
                        case 70:
                            t.setFullscreen();
                            break;
                        case 191:
                            i.shortcutsTooltip && i.shortcutsTooltip.toggleVisibility();
                            break;
                        default:
                            if (n.keyCode >= 48 && n.keyCode <= 59) {
                                var u = (n.keyCode - 48) / 10 * e.get("duration");
                                t.seek(u, {
                                    reason: "interaction"
                                })
                            }
                        }
                        return /13|32|37|38|39|40/.test(n.keyCode) ? (n.preventDefault(),
                        !1) : void 0
                    }
                };
                this.playerContainer.addEventListener("keydown", C),
                this.keydownCallback = C;
                var M = function(t) {
                    switch (t.keyCode) {
                    case 9:
                        var e = i.playerContainer.contains(t.target) ? 0 : U;
                        i.userActive(e);
                        break;
                    case 32:
                        t.preventDefault()
                    }
                };
                this.playerContainer.addEventListener("keyup", M),
                this.keyupCallback = M;
                var _ = function(t) {
                    i.off("userInactive", i.focusPlayerElement, i);
                    var e = t.relatedTarget || document.querySelector(":focus");
                    e && (i.playerContainer.contains(e) || i.userInactive())
                };
                this.playerContainer.addEventListener("blur", _, !0),
                this.blurCallback = _;
                var T = function t() {
                    "jw-shortcuts-tooltip-explanation" === i.playerContainer.getAttribute("aria-describedby") && i.playerContainer.removeAttribute("aria-describedby"),
                    i.playerContainer.removeEventListener("blur", t, !0)
                };
                this.shortcutsTooltip && (this.playerContainer.addEventListener("blur", T, !0),
                this.onRemoveShortcutsDescription = T),
                this.userActive(),
                this.addControls(),
                this.addBackdrop(),
                e.set("controlsEnabled", !0)
            }
            ,
            i.addControls = function() {
                this.wrapperElement.appendChild(this.div)
            }
            ,
            i.disable = function(t) {
                var e = this.nextUpToolTip
                  , i = this.settingsMenu
                  , n = this.controlbar
                  , o = this.rightClickMenu
                  , a = this.shortcutsTooltip
                  , r = this.playerContainer
                  , s = this.div;
                clearTimeout(this.activeTimeout),
                this.activeTimeout = -1,
                this.off(),
                t.off(null, null, this),
                t.set("controlsEnabled", !1),
                s.parentNode && ((0,
                c.IV)(r, "jw-flag-touch"),
                s.parentNode.removeChild(s)),
                n && n.destroy(),
                o && o.destroy(),
                this.keydownCallback && r.removeEventListener("keydown", this.keydownCallback),
                this.keyupCallback && r.removeEventListener("keyup", this.keyupCallback),
                this.blurCallback && r.removeEventListener("blur", this.blurCallback),
                this.onRemoveShortcutsDescription && r.removeEventListener("blur", this.onRemoveShortcutsDescription),
                this.displayContainer && this.displayContainer.destroy(),
                e && e.destroy(),
                i && i.destroy(),
                t.get("displayStats") && t.set("displayStats", !1),
                a && a.destroy(),
                this.removeBackdrop()
            }
            ,
            i.controlbarHeight = function() {
                return this.dimensions.cbHeight || (this.dimensions.cbHeight = this.controlbar.element().clientHeight),
                this.dimensions.cbHeight
            }
            ,
            i.element = function() {
                return this.div
            }
            ,
            i.resize = function() {
                this.dimensions = {}
            }
            ,
            i.unmuteAutoplay = function(t, e) {
                var i = !e.get("autostartFailed")
                  , n = e.get("mute");
                i ? n = !1 : e.set("playOnViewable", !1),
                this.muteChangeCallback && (e.off("change:autostartMuted change:mute", this.muteChangeCallback),
                this.muteChangeCallback = null),
                this.unmuteCallback && (e.off("change:autostartFailed", this.unmuteCallback),
                this.unmuteCallback = null),
                e.set("autostartFailed", void 0),
                e.set("autostartMuted", void 0),
                t.setMute(n),
                this.controlbar.renderVolume(n, e.get("volume")),
                this.mute && this.mute.hide(),
                (0,
                c.IV)(this.playerContainer, "jw-flag-autostart"),
                this.userActive()
            }
            ,
            i.mouseMove = function(t) {
                var e = this.controlbar.element().contains(t.target)
                  , i = this.controlbar.nextUpToolTip && this.controlbar.nextUpToolTip.element().contains(t.target)
                  , n = this.logo && this.logo.contains(t.target)
                  , o = e || i || n ? 0 : U;
                this.userActive(o)
            }
            ,
            i.userActive = function(t) {
                void 0 === t && (t = U),
                t > 0 ? (this.inactiveTime = (0,
                u.z)() + t,
                -1 === this.activeTimeout && (this.activeTimeout = setTimeout(this.userInactiveTimeout, t))) : this.resetActiveTimeout(),
                this.showing || ((0,
                c.IV)(this.playerContainer, "jw-flag-user-inactive"),
                this.showing = !0,
                this.trigger("userActive"))
            }
            ,
            i.userInactive = function() {
                clearTimeout(this.activeTimeout),
                this.activeTimeout = -1,
                this.settingsMenu.visible || (this.inactiveTime = 0,
                this.showing = !1,
                (0,
                c.cn)(this.playerContainer, "jw-flag-user-inactive"),
                this.trigger("userInactive"))
            }
            ,
            i.addBackdrop = function() {
                var t = this.instreamState ? this.div : this.wrapperElement.querySelector(".jw-captions");
                this.wrapperElement.insertBefore(this.backdrop, t)
            }
            ,
            i.removeBackdrop = function() {
                var t = this.backdrop.parentNode;
                t && t.removeChild(this.backdrop)
            }
            ,
            i.setupInstream = function() {
                this.instreamState = !0,
                this.userActive(),
                this.addBackdrop(),
                this.settingsMenu && this.settingsMenu.close(),
                (0,
                c.IV)(this.playerContainer, "jw-flag-autostart"),
                this.controlbar.elements.time.element().setAttribute("tabindex", "-1")
            }
            ,
            i.destroyInstream = function(t) {
                this.instreamState = null,
                this.addBackdrop(),
                t.get("autostartMuted") && (0,
                c.cn)(this.playerContainer, "jw-flag-autostart"),
                this.controlbar.elements.time.element().setAttribute("tabindex", "0")
            }
            ,
            i.setupFloating = function(t, e) {
                var i = this
                  , n = e.get("localization")
                  , o = e.get("advertising")
                  , a = e.get("floating")
                  , s = function() {
                    var t = e.get("playlistItem").title;
                    return a.showTitle ? i.instreamState ? n.advertising && n.advertising.displayHeading ? n.advertising.displayHeading : " " : t : " "
                }
                  , l = new q(this.wrapperElement,n.close,s());
                o && o.outstream && o.dismissible ? l.on(r.xf, (function() {
                    return t.remove()
                }
                )) : l.on(r.xf, (function() {
                    return i.trigger("dismissFloating", {
                        doNotForward: !0
                    })
                }
                )),
                a && !1 !== a.dismissible && (0,
                c.cn)(this.playerContainer, "jw-floating-dismissible"),
                e.on("change:playlistItem", (function() {
                    l.setTitle(s())
                }
                ), this),
                e.on("instreamMode", (function() {
                    l.setTitle(s())
                }
                ), this)
            }
            ,
            e
        }(s.ZP)
          , Q = i(8711)
          , $ = i.n(Q)
          , Y = i(1983)
          , K = i.n(Y)
          , X = i(1277)
          , J = i.n(X)
          , G = i(7928)
          , tt = i.n(G)
          , et = i(5484)
          , it = i.n(et)
          , nt = i(6598)
          , ot = i.n(nt)
          , at = i(8053)
          , rt = i.n(at)
          , st = i(1666)
          , lt = i.n(st)
          , ct = i(4375)
          , ut = i.n(ct)
          , dt = {
            label: "facebook",
            src: "http://www.facebook.com/sharer/sharer.php?u=[URL]",
            svg: $(),
            jwsource: "fb"
        }
          , pt = {
            label: "twitter",
            src: "http://twitter.com/intent/tweet?url=[URL]",
            svg: ot(),
            jwsource: "twi"
        }
          , ht = {
            label: "linkedin",
            src: "https://www.linkedin.com/cws/share?url=[URL]",
            svg: K(),
            jwsource: "lkn"
        }
          , wt = {
            label: "pinterest",
            src: "http://pinterest.com/pin/create/button/?url=[URL]",
            svg: J(),
            jwsource: "pin"
        }
          , gt = {
            label: "reddit",
            src: "http://www.reddit.com/submit?url=[URL]",
            svg: tt(),
            jwsource: "rdt"
        }
          , ft = {
            label: "tumblr",
            src: "http://tumblr.com/widgets/share/tool?canonicalUrl=[URL]",
            svg: it(),
            jwsource: "tbr"
        }
          , jt = {
            label: "email",
            src: "mailto:?body=[URL]",
            svg: rt(),
            jwsource: "em"
        }
          , mt = {
            label: "link",
            svg: lt(),
            jwsource: "cl"
        }
          , vt = {
            label: "embed",
            svg: ut(),
            jwsource: "ceb"
        }
          , bt = i(549)
          , yt = i.n(bt)
          , xt = i(6042)
          , kt = !1
          , Ct = function(t, e, o, a, r) {
            var l = this
              , u = r && r.openLink || c.nG;
            (0,
            w.Z)(this, s.ZP);
            var d, p, h = [dt, pt, jt], g = function(t) {
                o.trigger("settingsInteraction", "sharing", !1, t)
            };
            !function() {
                if (Array.isArray(e.sites)) {
                    var i = [];
                    (0,
                    xt.S6)(e.sites, (function(t) {
                        (0,
                        xt.HD)(t) && n[t] ? i.push(n[t]) : (0,
                        xt.Kn)(t) && i.push(t)
                    }
                    )),
                    h = i
                }
                t.addButton(yt(), a, g, "share", "jw-settings-sharing");
                var r = o.el.querySelector(".jw-settings-sharing");
                r.setAttribute("aria-controls", "jw-settings-submenu-sharing"),
                r.setAttribute("role", "button")
            }();
            var f = function(t, e) {
                var i = t.indexOf("MEDIAID");
                return i > 0 && e ? t.replace("MEDIAID", e) : -1 === i ? t : void 0
            }
              , j = function(t, i) {
                if (i)
                    return i;
                if (e.link) {
                    var n = f(e.link, t);
                    if (n)
                        return n
                }
                return window.top === window ? window.location.toString() : document.referrer
            }
              , m = function() {
                var i = t.getPlaylistItem()
                  , n = h.filter((function(t) {
                    return "link" === t.label
                }
                ))[0]
                  , o = i.mediaid
                  , a = i.link;
                d = j(o, a),
                n ? -1 === n.src.indexOf(d) && (n.src = d) : h.push((0,
                w.Z)({
                    src: d
                }, mt));
                var r = h.filter((function(t) {
                    return "embed" === t.label
                }
                ));
                p = function(t) {
                    var i = null;
                    if (e.code) {
                        i = f(e.code, t) || i
                    }
                    return i
                }(i.mediaid) || e.code,
                r[0] ? r[0].src = decodeURIComponent(p) : e.code && h.push((0,
                w.Z)({
                    src: decodeURIComponent(p)
                }, vt))
            }
              , v = function(t) {
                l.trigger("click", {
                    method: t
                })
            };
            return this.getShareMethods = function() {
                return m(),
                h
            }
            ,
            this.getLink = function(t, e) {
                return j(t, e)
            }
            ,
            this.getHeading = function() {
                return a
            }
            ,
            this.onSubmenuToggle = function(t, e) {
                void 0 === e && (e = "interaction"),
                t && !kt && (kt = !0,
                i(3484)),
                l.trigger(t ? "open" : "close", {
                    visible: t,
                    method: e
                })
            }
            ,
            this.action = function(e) {
                var i = h[e].label;
                "embed" !== i && "link" !== i ? function(e) {
                    var i = e.src;
                    if ((0,
                    xt.mf)(i))
                        i(d);
                    else if (null != i) {
                        var n = encodeURIComponent(d || "share")
                          , o = i.replace(/\[URL\]/gi, n);
                        i === o && (o = i + n),
                        t.pause({
                            reason: "sharing"
                        }),
                        u(o, "_blank", {
                            rel: "noreferrer"
                        }),
                        window.focus()
                    }
                    v(e.label)
                }(h[e]) : v(i)
            }
            ,
            this.open = function() {
                o.trigger("sharingApi", !0)
            }
            ,
            this.close = function() {
                o.trigger("sharingApi", !1)
            }
            ,
            this
        }
          , Mt = function(t, e) {
            var i = this
              , n = (0,
            c.az)('<div class="jw-skip jw-reset" tabindex="0" role="button"><span class="jw-text jw-skiptext jw-reset"></span><span class="jw-icon jw-icon-inline jw-skip-icon jw-reset"></span></div>');
            n.querySelector(".jw-icon").appendChild((0,
            j.W)("next")),
            this.el = n,
            this.skiptext = this.el.querySelector(".jw-skiptext"),
            this.skipUI = (0,
            y.Z)(this.el, this.skipAd, this),
            this.model = t,
            this.skipMessage = t.get("skipText") || "",
            this.skipMessageCountdown = t.get("skipMessage") || "",
            this.waitTime = (0,
            m.U5)(t.get("skipOffset")),
            t.change("duration", (function(n, o) {
                o && (i.waitTime || (i.waitTime = (0,
                m.U5)(n.get("skipOffset"), o)),
                i.el.parentNode !== e && i.waitTime + 2 < o && (t.change("position", (function(t, e) {
                    var n = i.waitTime - (e || 0);
                    n > 0 ? i.updateMessage(i.skipMessageCountdown.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(n) + "$2")) : null !== i.waitTime && (i.updateMessage(i.skipMessage),
                    i.skippable = !0,
                    (0,
                    c.cn)(i.el, "jw-skippable"))
                }
                ), i),
                e.appendChild(i.el)))
            }
            ), this)
        };
        (0,
        w.Z)(Mt.prototype, s.ZP, {
            updateMessage: function(t) {
                (0,
                c.nh)(this.skiptext, t),
                this.el.setAttribute("aria-label", t)
            },
            skipAd: function() {
                this.skippable && (this.skipUI.off(),
                this.trigger(r.k3))
            },
            destroy: function() {
                this.model.off(null, null, this),
                this.skipUI && this.skipUI.destroy(),
                this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }
        });
        var _t = Mt
          , Tt = function(t, e, i) {
            this.api = t,
            this.playerElement = e,
            this.wrapperElement = i
        };
        (0,
        w.Z)(Tt.prototype, {
            setup: function(t) {
                var e = this;
                this.element = (0,
                c.az)(function(t) {
                    return '<div class="jw-dismiss-icon jw-icon jw-reset" aria-label=' + t + ' tabindex="0"></div>'
                }(t)),
                this.element.appendChild((0,
                j.W)("close")),
                this.ui = (0,
                y.Z)(this.element, (function() {
                    e.api.remove()
                }
                ), this),
                this.wrapperElement.insertBefore(this.element, this.wrapperElement.firstChild),
                (0,
                c.cn)(this.playerElement, "jw-flag-top")
            },
            destroy: function() {
                this.element && (this.ui.destroy(),
                this.wrapperElement.removeChild(this.element),
                this.element = null)
            }
        });
        var St = Tt
          , Et = function(t) {
            var e = t.label
              , i = t.src
              , n = t.options
              , o = t.displayText
              , a = t.svg
              , r = void 0 === a ? "" : a
              , s = t.icon
              , l = void 0 === s ? "" : s
              , c = l ? '<img src="' + l + '" class="jw-svg-icon"/>' : r;
            return "link" === e || "embed" === e ? '<div class="jw-reset jw-settings-content-item jw-sharing-copy"><button class="jw-reset jw-sharing-link" aria-checked="false" type="button" role="button">' + c + " " + (o || e) + '</button><textarea readonly="true" class="jw-reset jw-sharing-textarea">' + i + '</textarea><div class="jw-reset jw-tooltip jw-tooltip-sharing-' + (o || e) + '"><div class="jw-text">' + n.copyText + "</div></div></div>" : '<button class="jw-reset jw-settings-content-item jw-sharing-link" aria-checked="false" type="button" role="menuitem">' + c + " " + (o || e) + "</button>"
        }
          , At = function(t) {
            function e(e, i, n) {
                var o;
                return void 0 === n && (n = Et),
                (o = t.call(this, e, i, n) || this).content = e,
                o.el && e.label ? (o.el.setAttribute("aria-label", e.label),
                o.el.setAttribute("role", "button"),
                o.el.setAttribute("tabindex", "0"),
                o) : (0,
                I.Z)(o)
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.activate = function() {
                if ("embed" === this.content.label || "link" === this.content.label) {
                    var t = this.el.querySelector(".jw-sharing-textarea");
                    if (t.select(),
                    document.execCommand("copy")) {
                        var e = t.nextSibling;
                        (0,
                        c.cn)(e, "jw-open"),
                        setTimeout((function() {
                            (0,
                            c.IV)(e, "jw-open")
                        }
                        ), 1e3)
                    } else
                        window.prompt("Copy the text below", this.content.src);
                    t.blur()
                }
            }
            ,
            i.destroy = function() {
                this.ui.destroy()
            }
            ,
            e
        }(z.s)
          , It = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.createCategoryButton = function() {
                return "sharing" === this.name && (this.icon = yt()),
                t.prototype.createCategoryButton.call(this, this.title)
            }
            ,
            i.createItems = function(e, i, n, o) {
                return "sharing" === this.name && (o = At),
                t.prototype.createItems.apply(this, [e, i, n, o])
            }
            ,
            e
        }(P.Z)
          , Pt = function(t) {
            function e(e, i) {
                var n;
                return (n = t.call(this, e, i) || this).playerContainer = i,
                n.sharing = null,
                n.sharingApi = !1,
                n.dismissButton = null,
                n.skipButton = null,
                n
            }
            (0,
            o.Z)(e, t);
            var i = e.prototype;
            return i.disable = function(e) {
                t.prototype.disable.call(this, e),
                this.dismissButton && (this.dismissButton.destroy(),
                this.dismissButton = null)
            }
            ,
            i.enable = function(e, i) {
                var n = this;
                t.prototype.enable.call(this, e, i),
                i.change("instream", (function() {
                    n._destroySkipButton()
                }
                )),
                i.change("skipButton", (function(t, i) {
                    n._destroySkipButton(),
                    i && (n.skipButton = new _t(t,n.div),
                    n.skipButton.on(r.k3, (function() {
                        t.set("skipButton", !1),
                        e.skipAd()
                    }
                    )),
                    n.controlbar.adSkipButton = n.skipButton)
                }
                ));
                var o = i.get("localization")
                  , a = i.get("advertising");
                a && a.outstream && a.dismissible && (this.dismissButton = new St(e,this.playerContainer,this.playerContainer.querySelector(".jw-top")),
                this.dismissButton.setup(o.close));
                var s = i.get("sharing");
                if (!this.sharing && s) {
                    var l = this.controlbar
                      , c = this.settingsMenu
                      , u = o.sharing;
                    this.sharing = new Ct(e,s,l,u.heading),
                    e.addPlugin("sharing", this.sharing),
                    i.change("playlistItem", (function() {
                        var t = n.sharing.getShareMethods().map((function(t) {
                            var e = u[t.label];
                            return e && (t.displayText = e),
                            t
                        }
                        ));
                        c.removeMenu("sharing");
                        var e = new It("sharing",o.sharing.heading,c,o)
                          , i = e.open
                          , a = e.close
                          , r = o.sharing.copied;
                        e.open = function(t) {
                            e.visible || n._onSharingActive(!0),
                            i(t)
                        }
                        ,
                        e.close = function(t) {
                            e.visible && n._onSharingActive(!1),
                            a(t)
                        }
                        ,
                        e.setMenuItems(e.createItems(t, n.sharing.action, {
                            copyText: r
                        })),
                        e.el.classList.add("jw-sharing-menu")
                    }
                    )),
                    this._addSharingApiEvent(l, c),
                    this.rightClickMenu.enableSharing(this.sharing.open)
                }
            }
            ,
            i._destroySkipButton = function() {
                this.skipButton && (this.skipButton.destroy(),
                this.skipButton = null,
                this.controlbar.adSkipButton = null)
            }
            ,
            i._addSharingApiEvent = function(t, e) {
                var i = this;
                t.on("sharingApi", (function(t) {
                    var n = e.children.sharing;
                    n && (i.sharingApi = !0,
                    t && !n.visible ? (e.children.sharing.open(),
                    i.sharing.onSubmenuToggle(!0, "api")) : !t && n.visible && (e.close(),
                    i.sharing.onSubmenuToggle(!1, "api")))
                }
                ))
            }
            ,
            i._onSharingActive = function(t) {
                this.sharingApi ? this.sharingApi = !1 : this.sharing.onSubmenuToggle(t)
            }
            ,
            e
        }(W)
    },
    4542: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, '.jw-controls,.jw-controls-backdrop,.jw-flag-small-player .jw-settings-menu,.jw-overlays,.jw-settings-submenu{height:100%;width:100%}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;right:0}.jw-controls,.jw-controls-backdrop,.jw-overlays,.jw-settings-item-active::before{top:0;position:absolute;left:0}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after{position:absolute;bottom:0;left:0}.jw-nextup-close{position:absolute;top:0;right:0}.jw-controls,.jw-flag-small-player .jw-settings-menu,.jw-overlays{position:absolute;bottom:0;right:0}.jw-controlbar .jw-tooltip::after,.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon.jw-button-color::after,.jw-settings-menu .jw-icon::after,.jw-settings-menu .jw-tooltip::after,.jw-text-live::before,.jw-time-tip::after{content:"";display:block}.jw-svg-icon{height:24px;width:24px;fill:currentColor;pointer-events:none}.jw-icon{height:44px;width:44px;background-color:transparent;outline:0}.jw-icon.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-icon-airplay .jw-svg-icon-airplay-off{display:none}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-off{display:block}.jw-icon-airplay .jw-svg-icon-airplay-on{display:block}.jw-off.jw-icon-airplay .jw-svg-icon-airplay-on{display:none}.jw-icon-cc .jw-svg-icon-cc-off{display:none}.jw-off.jw-icon-cc .jw-svg-icon-cc-off{display:block}.jw-icon-cc .jw-svg-icon-cc-on{display:block}.jw-off.jw-icon-cc .jw-svg-icon-cc-on{display:none}.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:none}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-off{display:block}.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:block}.jw-off.jw-icon-fullscreen .jw-svg-icon-fullscreen-on{display:none}.jw-icon-pip .jw-svg-icon-pip-off{display:none}.jw-off.jw-icon-pip .jw-svg-icon-pip-off{display:block}.jw-icon-pip .jw-svg-icon-pip-on{display:block}.jw-off.jw-icon-pip .jw-svg-icon-pip-on{display:none}.jw-icon-volume .jw-svg-icon-volume-0{display:none}.jw-off.jw-icon-volume .jw-svg-icon-volume-0{display:block}.jw-icon-volume .jw-svg-icon-volume-100{display:none}.jw-full.jw-icon-volume .jw-svg-icon-volume-100{display:block}.jw-icon-volume .jw-svg-icon-volume-50{display:block}.jw-full.jw-icon-volume .jw-svg-icon-volume-50,.jw-off.jw-icon-volume .jw-svg-icon-volume-50{display:none}.jw-icon-settings::after,.jw-icon-volume::after,.jw-settings-menu .jw-icon::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-icon-volume.jw-open::after,.jw-settings-menu .jw-icon[aria-checked=true]::after,.jw-settings-open .jw-icon-settings::after{opacity:1}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-audio-tracks,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-cc,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-hd,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-settings,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-settings-sharing,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player).jw-flag-cast-available .jw-icon-cast{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-text-live{bottom:6px}.jwplayer.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-icon-volume::after{display:none}.jw-controls,.jw-overlays{pointer-events:none}.jw-controls-backdrop{display:block;background:linear-gradient(to bottom,transparent,rgba(0,0,0,.4) 77%,rgba(0,0,0,.4) 100%) 100% 100%/100% 240px no-repeat transparent;transition:opacity 250ms cubic-bezier(0,.25,.25,1),background-size 250ms cubic-bezier(0,.25,.25,1);pointer-events:none}.jw-overlays{cursor:auto}.jw-controls{overflow:hidden}.jw-flag-small-player .jw-controls{text-align:center}.jw-text{height:1em;font-family:Arial,Helvetica,sans-serif;font-size:.75em;font-style:normal;font-weight:400;color:#fff;text-align:center;font-variant:normal;font-stretch:normal}.jw-autostart-mute,.jw-controlbar,.jw-display-icon-container .jw-icon,.jw-nextup-container,.jw-overlays .jw-plugin,.jw-skip{pointer-events:all}.jw-error .jw-display-icon-container,.jwplayer .jw-display-icon-container{width:auto;height:auto;box-sizing:content-box}.jw-display{display:flex;flex-direction:column;justify-content:center;height:100%;padding:57px 0;position:relative;width:100%}.jw-flag-dragging .jw-display{display:none}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-display-container{text-align:center}.jw-display-controls{display:inline-block}.jwplayer .jw-display-icon-container{float:left}.jw-display-icon-container{display:inline-block;padding:5.5px;margin:0 22px}.jw-display-icon-container .jw-icon{height:75px;width:75px;cursor:pointer;display:flex;justify-content:center;align-items:center}.jw-display-icon-container .jw-icon .jw-svg-icon{height:33px;width:33px;padding:0;position:relative}.jw-display-icon-container .jw-icon .jw-svg-icon-rewind{padding:.2em .05em}.jw-breakpoint--1 .jw-nextup-container{display:none}.jw-breakpoint--1 .jw-display-icon-next,.jw-breakpoint--1 .jw-display-icon-rewind,.jw-breakpoint-0 .jw-display-icon-next,.jw-breakpoint-0 .jw-display-icon-rewind{display:none}.jw-breakpoint--1.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint--1.jw-flag-touch .jw-display .jw-svg-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-icon,.jw-breakpoint-0.jw-flag-touch .jw-display .jw-svg-icon{z-index:100;position:relative}.jw-breakpoint--1 .jw-display .jw-icon,.jw-breakpoint--1 .jw-display .jw-svg-icon,.jw-breakpoint-0 .jw-display .jw-icon,.jw-breakpoint-0 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint--1 .jw-display .jw-icon:before,.jw-breakpoint--1 .jw-display .jw-svg-icon:before,.jw-breakpoint-0 .jw-display .jw-icon:before,.jw-breakpoint-0 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon,.jw-breakpoint-1 .jw-display .jw-svg-icon{width:44px;height:44px;line-height:44px}.jw-breakpoint-1 .jw-display .jw-icon:before,.jw-breakpoint-1 .jw-display .jw-svg-icon:before{width:22px;height:22px}.jw-breakpoint-1 .jw-display .jw-icon.jw-icon-rewind:before{width:33px;height:33px}.jw-breakpoint-2 .jw-display .jw-icon,.jw-breakpoint-2 .jw-display .jw-svg-icon,.jw-breakpoint-3 .jw-display .jw-icon,.jw-breakpoint-3 .jw-display .jw-svg-icon{width:77px;height:77px;line-height:77px}.jw-breakpoint-2 .jw-display .jw-icon:before,.jw-breakpoint-2 .jw-display .jw-svg-icon:before,.jw-breakpoint-3 .jw-display .jw-icon:before,.jw-breakpoint-3 .jw-display .jw-svg-icon:before{width:38.5px;height:38.5px}.jw-breakpoint-4 .jw-display .jw-icon,.jw-breakpoint-4 .jw-display .jw-svg-icon,.jw-breakpoint-5 .jw-display .jw-icon,.jw-breakpoint-5 .jw-display .jw-svg-icon,.jw-breakpoint-6 .jw-display .jw-icon,.jw-breakpoint-6 .jw-display .jw-svg-icon,.jw-breakpoint-7 .jw-display .jw-icon,.jw-breakpoint-7 .jw-display .jw-svg-icon{width:88px;height:88px;line-height:88px}.jw-breakpoint-4 .jw-display .jw-icon:before,.jw-breakpoint-4 .jw-display .jw-svg-icon:before,.jw-breakpoint-5 .jw-display .jw-icon:before,.jw-breakpoint-5 .jw-display .jw-svg-icon:before,.jw-breakpoint-6 .jw-display .jw-icon:before,.jw-breakpoint-6 .jw-display .jw-svg-icon:before,.jw-breakpoint-7 .jw-display .jw-icon:before,.jw-breakpoint-7 .jw-display .jw-svg-icon:before{width:44px;height:44px}.jw-controlbar{display:flex;flex-flow:row wrap;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;width:100%;border:none;border-radius:0;background-size:auto;box-shadow:none;max-height:72px;transition:250ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s}.jw-flag-touch.jw-breakpoint-0 .jw-controlbar .jw-icon-inline{height:40px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar{max-height:140px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container{padding:0 48px 20px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-tooltip{margin-bottom:-7px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-overlay{padding-bottom:40%}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text{font-size:1em}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-text.jw-text-elapsed{justify-content:flex-end}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live),.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume{height:60px;width:60px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-inline:not(.jw-text-live) .jw-svg-icon,.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-button-container .jw-icon-volume .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{padding:0 60px;height:34px}.jw-breakpoint-7:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time .jw-slider-container{height:10px}.jw-controlbar .jw-button-image{background:no-repeat 50% 50%;background-size:contain;max-height:24px}.jw-controlbar .jw-spacer{margin:0 auto}.jw-controlbar .jw-icon.jw-button-color:hover{color:#fff}.jw-button-container{display:flex;flex-flow:row nowrap;flex:1 1 auto;align-items:center;justify-content:flex-start;width:100%;padding:0 12px}.jw-slider-horizontal{background-color:transparent}.jw-icon-inline{position:relative}.jw-icon-inline,.jw-icon-tooltip{height:44px;width:44px;align-items:center;display:flex;justify-content:center}.jw-icon-inline:not(.jw-text),.jw-icon-tooltip,.jw-slider-horizontal{cursor:pointer}.jw-text-duration,.jw-text-elapsed{justify-content:flex-start;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.jw-icon-tooltip{position:relative}.jw-icon-display:hover,.jw-icon-inline:hover,.jw-icon-tooltip:hover,.jw-knob:hover,.jw-option:before:hover{color:#fff}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{pointer-events:none}.jw-icon-cast{display:none;margin:0;padding:0}.jw-icon-cast google-cast-launcher{background-color:transparent;border:none;padding:0;width:24px;height:24px;cursor:pointer}.jw-fullscreen-ima{display:none}.jw-icon-inline.jw-icon-volume{display:none}.jwplayer .jw-text-countdown{display:none}.jw-flag-small-player .jw-display{padding-top:0;padding-bottom:0}.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-next,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-playback,.jw-flag-small-player:not(.jw-flag-audio-player):not(.jw-flag-ads) .jw-controlbar .jw-button-container>.jw-icon-rewind{display:none}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controlbar{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-ads-vpaid:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-buffering:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop,.jw-flag-user-inactive.jw-state-playing:not(.jw-flag-media-audio):not(.jw-flag-audio-player):not(.jw-flag-ads-vpaid-controls):not(.jw-flag-casting) .jw-controls-backdrop{opacity:0}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-countdown{display:flex}.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint--1 .jw-text-elapsed,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-duration,.jwplayer:not(.jw-flag-ads):not(.jw-flag-live).jw-breakpoint-0 .jw-text-elapsed{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-related-btn,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-slider-volume,.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-text-countdown{display:none}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-breakpoint--1:not(.jw-flag-ads):not(.jw-flag-audio-player) .jw-button-container{height:30px}.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-fullscreen,.jw-breakpoint--1.jw-flag-ads:not(.jw-flag-audio-player) .jw-icon-volume{display:none}.jwplayer:not(.jw-breakpoint--1) .jw-text-duration:before,.jwplayer:not(.jw-breakpoint-0) .jw-text-duration:before{content:"/";padding-right:1ch;padding-left:1ch}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar{will-change:transform}.jwplayer:not(.jw-flag-user-inactive) .jw-controlbar .jw-text{transform-style:preserve-3d}.jwplayer:not(.jw-flag-fullscreen) .jw-fullscreen-disallowed{display:none}.jw-slider-container{display:flex;align-items:center;position:relative;touch-action:none}.jw-buffer,.jw-progress,.jw-rail{position:absolute;cursor:pointer}.jw-progress{background-color:#f2f2f2}.jw-rail{background-color:rgba(255,255,255,.3)}.jw-buffer{background-color:rgba(255,255,255,.3)}.jw-knob{height:13px;width:13px;background-color:#fff;border-radius:50%;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:1;pointer-events:none;position:absolute;transform:translate(-50%,-50%) scale(0);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform}.jw-flag-dragging .jw-slider-time .jw-knob,.jw-icon-volume:active .jw-slider-volume .jw-knob{box-shadow:0 0 26px rgba(0,0,0,.2),0 0 10px rgba(0,0,0,.4),0 0 0 6px rgba(255,255,255,.2)}.jw-slider-horizontal,.jw-slider-vertical{display:flex}.jw-slider-horizontal .jw-slider-container{height:5px;width:100%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-knob,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{top:50%}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-cue,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{transform:translate(0,-50%)}.jw-slider-horizontal .jw-buffer,.jw-slider-horizontal .jw-progress,.jw-slider-horizontal .jw-rail{height:5px}.jw-slider-horizontal .jw-rail{width:100%}.jw-slider-vertical{align-items:center;flex-direction:column}.jw-slider-vertical .jw-slider-container{height:88px;width:5px}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-knob,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{left:50%}.jw-slider-vertical .jw-buffer,.jw-slider-vertical .jw-progress,.jw-slider-vertical .jw-rail{height:100%;width:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translate(-50%,0);transition:transform 150ms ease-in-out;bottom:0}.jw-slider-vertical .jw-knob{transform:translate(-50%,50%)}.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-horizontal-volume-container .jw-slider-volume,.jw-slider-time{height:17px;width:100%;align-items:center;background:transparent none;padding:0 12px}.jw-slider-time .jw-cue{background-color:rgba(33,33,33,.8);cursor:pointer;position:absolute;width:6px}.jw-horizontal-volume-container,.jw-slider-time{z-index:1;outline:0}.jw-horizontal-volume-container .jw-buffer,.jw-horizontal-volume-container .jw-cue,.jw-horizontal-volume-container .jw-progress,.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-buffer,.jw-slider-time .jw-cue,.jw-slider-time .jw-progress,.jw-slider-time .jw-rail{-webkit-backface-visibility:hidden;backface-visibility:hidden;height:100%;transform:translate(0,-50%) scale(1,.6);transition:transform 150ms ease-in-out}.jw-flag-dragging .jw-horizontal-volume-container .jw-buffer,.jw-flag-dragging .jw-horizontal-volume-container .jw-cue,.jw-flag-dragging .jw-horizontal-volume-container .jw-progress,.jw-flag-dragging .jw-horizontal-volume-container .jw-rail,.jw-flag-dragging .jw-slider-time .jw-buffer,.jw-flag-dragging .jw-slider-time .jw-cue,.jw-flag-dragging .jw-slider-time .jw-progress,.jw-flag-dragging .jw-slider-time .jw-rail,.jw-flag-touch .jw-horizontal-volume-container .jw-buffer,.jw-flag-touch .jw-horizontal-volume-container .jw-cue,.jw-flag-touch .jw-horizontal-volume-container .jw-progress,.jw-flag-touch .jw-horizontal-volume-container .jw-rail,.jw-flag-touch .jw-slider-time .jw-buffer,.jw-flag-touch .jw-slider-time .jw-cue,.jw-flag-touch .jw-slider-time .jw-progress,.jw-flag-touch .jw-slider-time .jw-rail,.jw-horizontal-volume-container:focus .jw-buffer,.jw-horizontal-volume-container:focus .jw-cue,.jw-horizontal-volume-container:focus .jw-progress,.jw-horizontal-volume-container:focus .jw-rail,.jw-horizontal-volume-container:hover .jw-buffer,.jw-horizontal-volume-container:hover .jw-cue,.jw-horizontal-volume-container:hover .jw-progress,.jw-horizontal-volume-container:hover .jw-rail,.jw-slider-time:focus .jw-buffer,.jw-slider-time:focus .jw-cue,.jw-slider-time:focus .jw-progress,.jw-slider-time:focus .jw-rail,.jw-slider-time:hover .jw-buffer,.jw-slider-time:hover .jw-cue,.jw-slider-time:hover .jw-progress,.jw-slider-time:hover .jw-rail{transform:translate(0,-50%) scale(1,1)}.jw-horizontal-volume-container:focus .jw-knob,.jw-horizontal-volume-container:hover .jw-knob,.jw-slider-time:focus .jw-knob,.jw-slider-time:hover .jw-knob{transform:translate(-50%,-50%) scale(1)}.jw-horizontal-volume-container .jw-rail,.jw-slider-time .jw-rail{background-color:rgba(255,255,255,.2)}.jw-horizontal-volume-container .jw-buffer,.jw-slider-time .jw-buffer{background-color:rgba(255,255,255,.4)}.jw-flag-touch .jw-horizontal-volume-container::before,.jw-flag-touch .jw-slider-time::before{height:44px;width:100%;content:"";position:absolute;display:block;bottom:calc(100% - 17px);left:0}.jw-breakpoint-0.jw-flag-touch .jw-horizontal-volume-container::before,.jw-breakpoint-0.jw-flag-touch .jw-slider-time::before{height:34px}.jw-horizontal-volume-container.jw-tab-focus:focus .jw-rail,.jw-slider-time.jw-tab-focus:focus .jw-rail{outline:solid 2px #4d90fe}.jw-flag-horizontal-slider .jw-overlay{display:none}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container{display:flex;transition:width .3s cubic-bezier(0,.25,.25,1);width:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open{width:140px}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container.jw-open .jw-slider-volume{padding-right:12px;opacity:1}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume{transition:opacity .3s;opacity:0}.jw-flag-audio-player .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob,.jwplayer:not(.jw-flag-small-player) .jw-flag-horizontal-slider~.jw-horizontal-volume-container .jw-slider-volume .jw-knob{transform:translate(-50%,-50%)}.jw-flag-audio-player .jw-button-container .jw-icon,.jwplayer:not(.jw-flag-small-player) .jw-button-container .jw-icon{flex:0 0 auto}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time{height:17px;padding:0}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-slider-container{height:10px}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-slider-time .jw-knob{border-radius:0;border:1px solid rgba(0,0,0,.75);height:12px;width:10px}.jw-breakpoint-0 .jw-slider-time{height:11px}.jw-horizontal-volume-container{display:none}.jw-modal{width:284px}.jw-breakpoint-5 .jw-modal,.jw-breakpoint-6 .jw-modal,.jw-breakpoint-7 .jw-modal{height:232px}.jw-breakpoint-3 .jw-modal,.jw-breakpoint-4 .jw-modal{height:192px}.jw-breakpoint-2 .jw-modal,.jw-flag-small-player .jw-modal{bottom:0;right:0;height:100%;width:100%;max-height:none;max-width:none;z-index:2}.jwplayer .jw-rightclick{display:none;position:absolute;white-space:nowrap}.jwplayer .jw-rightclick.jw-open{display:block}.jwplayer .jw-rightclick .jw-rightclick-list{border-radius:1px;list-style:none;margin:0;padding:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item{background-color:rgba(0,0,0,.8);border-bottom:1px solid #444;margin:0}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo{color:#fff;display:inline-flex;padding:0 10px 0 0;vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-logo .jw-svg-icon{height:20px;width:20px}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item .jw-rightclick-link{border:none;color:#fff;display:block;font-size:11px;font-weight:400;line-height:1em;padding:15px 23px;text-align:start;text-decoration:none;width:100%}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:last-child{border-bottom:none}.jwplayer .jw-rightclick .jw-rightclick-list .jw-rightclick-item:hover{cursor:pointer}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured{vertical-align:middle}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link{color:#fff}.jwplayer .jw-rightclick .jw-rightclick-list .jw-featured .jw-rightclick-link span{color:#fff;font-size:12px}.jwplayer .jw-rightclick .jw-rightclick-link{border:none;background-color:transparent;outline:0;cursor:pointer}.jw-icon-tooltip.jw-open .jw-overlay{opacity:1;pointer-events:auto;transition-delay:0s}.jw-icon-tooltip.jw-open .jw-overlay:focus{outline:0}.jw-icon-tooltip.jw-open .jw-overlay:focus.jw-tab-focus{outline:solid 2px #4d90fe}.jw-slider-time .jw-overlay:before{height:1em;top:auto}.jw-slider-time .jw-icon-tooltip.jw-open .jw-overlay{pointer-events:none}.jw-volume-tip{padding:13px 0 26px}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip,.jw-time-tip{height:auto;width:100%;box-shadow:0 0 10px rgba(0,0,0,.4);color:#fff;display:block;margin:0 0 14px;pointer-events:none;position:relative;z-index:0}.jw-controlbar .jw-tooltip::after,.jw-settings-menu .jw-tooltip::after,.jw-time-tip::after{top:100%;position:absolute;left:50%;height:14px;width:14px;border-radius:1px;background-color:currentColor;transform-origin:75% 50%;transform:translate(-50%,-50%) rotate(45deg);z-index:-1}.jw-controlbar .jw-tooltip .jw-text,.jw-settings-menu .jw-tooltip .jw-text,.jw-time-tip .jw-text{background-color:#fff;border-radius:1px;color:#000;font-size:10px;height:auto;line-height:1;padding:7px 10px;display:inline-block;min-width:100%;vertical-align:middle;min-height:2.4em}.jw-controlbar .jw-overlay{position:absolute;bottom:100%;left:50%;margin:0;min-height:44px;min-width:44px;opacity:0;pointer-events:none;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,visibility;transition-delay:0s,150ms;transform:translate(-50%,0);width:100%;z-index:1}.jw-controlbar .jw-overlay .jw-contents{position:relative}.jw-controlbar .jw-option{position:relative;white-space:nowrap;cursor:pointer;list-style:none;height:1.5em;font-family:inherit;line-height:1.5em;padding:0 .5em;font-size:.8em;margin:0}.jw-controlbar .jw-option::before{padding-right:.125em}.jw-controlbar .jw-tooltip,.jw-settings-menu .jw-tooltip{position:absolute;bottom:100%;left:50%;opacity:0;transform:translate(-50%,0);transition:.1s 0s cubic-bezier(0,.25,.25,1);transition-property:opacity,transform,visibility;visibility:hidden;white-space:nowrap;width:auto;z-index:1}.jw-controlbar .jw-tooltip.jw-open,.jw-settings-menu .jw-tooltip.jw-open{opacity:1;transform:translate(-50%,-10px);transition-duration:150ms;transition-delay:.5s,0s,.5s;visibility:visible}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen{left:auto;right:0;transform:translate(0,0)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen.jw-open,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen.jw-open{transform:translate(0,-10px)}.jw-controlbar .jw-tooltip.jw-tooltip-fullscreen::after,.jw-settings-menu .jw-tooltip.jw-tooltip-fullscreen::after{left:auto;right:9px}.jw-tooltip-time{height:auto;width:0;bottom:100%;line-height:normal;padding:0;pointer-events:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.jw-tooltip-time .jw-overlay{bottom:0;min-height:0;width:auto}.jw-tooltip{bottom:57px;display:none;position:absolute}.jw-tooltip .jw-text{height:100%;white-space:nowrap;text-overflow:ellipsis;direction:unset;max-width:246px;overflow:hidden}.jw-flag-audio-player .jw-tooltip{display:none}.jw-flag-small-player .jw-time-thumb{display:none}.jwplayer .jw-shortcuts-tooltip{top:50%;position:absolute;left:50%;background:rgba(38,38,38,.8);transform:translate(-50%,-50%);display:none;color:#fff;pointer-events:all;-webkit-user-select:text;-ms-user-select:text;user-select:text;overflow:hidden;flex-direction:column;z-index:1}.jwplayer .jw-shortcuts-tooltip.jw-open{display:flex}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-close{flex:0 0 auto;margin:5px 5px 5px auto}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container{display:flex;flex:1 1 auto;flex-flow:column;font-size:12px;margin:0 20px 20px;overflow-y:auto;padding:5px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar{background-color:transparent;width:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-title{font-weight:700}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-header{align-items:center;display:flex;justify-content:space-between;margin-bottom:10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list{display:flex;max-width:340px;margin:0 10px}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-tooltip-descriptions{width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row{display:flex;align-items:center;justify-content:space-between;margin:10px 0;width:100%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-description{margin-right:10px;max-width:70%}.jwplayer .jw-shortcuts-tooltip .jw-shortcuts-container .jw-shortcuts-tooltip-list .jw-shortcuts-row .jw-shortcuts-key{background:#fefefe;color:#333;overflow:hidden;padding:7px 10px;text-overflow:ellipsis;white-space:nowrap}.jw-skip{color:rgba(255,255,255,.8);cursor:default;position:absolute;display:flex;right:.75em;bottom:56px;padding:.5em;border:1px solid #333;background-color:#000;align-items:center;height:2em}.jw-skip.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-skip.jw-skippable{cursor:pointer;padding:.25em .75em}.jw-skip.jw-skippable:hover{cursor:pointer;color:#fff}.jw-skip.jw-skippable .jw-skip-icon{display:inline;height:24px;width:24px;margin:0}.jw-breakpoint-7 .jw-skip{padding:1.35em 1em;bottom:130px}.jw-breakpoint-7 .jw-skip .jw-text{font-size:1em;font-weight:400}.jw-breakpoint-7 .jw-skip .jw-icon-inline{height:30px;width:30px}.jw-breakpoint-7 .jw-skip .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-skip .jw-skip-icon{display:none;margin-left:-.75em;padding:0 .5em;pointer-events:none}.jw-skip .jw-skip-icon .jw-svg-icon-next{display:block;padding:0}.jw-skip .jw-skip-icon,.jw-skip .jw-text{vertical-align:middle;font-size:.7em}.jw-skip .jw-text{font-weight:700}.jw-cast{background-size:cover;display:none;height:100%;position:relative;width:100%}.jw-cast-container{background:linear-gradient(180deg,rgba(25,25,25,.75),rgba(25,25,25,.25),rgba(25,25,25,0));left:0;padding:20px 20px 80px;position:absolute;top:0;width:100%}.jw-cast-text{color:#fff;font-size:1.6em}.jw-breakpoint--1 .jw-cast-text,.jw-breakpoint-0 .jw-cast-text{font-size:1.15em}.jw-breakpoint-1 .jw-cast-text,.jw-breakpoint-2 .jw-cast-text,.jw-breakpoint-3 .jw-cast-text{font-size:1.3em}.jw-nextup-container{position:absolute;bottom:66px;left:0;background-color:transparent;cursor:pointer;margin:0 auto;padding:12px;pointer-events:none;right:0;text-align:right;visibility:hidden;width:100%}.jw-info-open .jw-nextup-container,.jw-settings-open .jw-nextup-container{display:none}.jw-breakpoint-7 .jw-nextup-container{padding:60px}.jw-flag-small-player .jw-nextup-container{padding:0 12px 0 0}.jw-flag-small-player .jw-nextup-container .jw-nextup-close,.jw-flag-small-player .jw-nextup-container .jw-nextup-duration,.jw-flag-small-player .jw-nextup-container .jw-nextup-title{display:none}.jw-flag-small-player .jw-nextup-container .jw-nextup-tooltip{height:30px}.jw-flag-small-player .jw-nextup-container .jw-nextup-header{font-size:12px}.jw-flag-small-player .jw-nextup-container .jw-nextup-body{justify-content:center;align-items:center;padding:.75em .3em}.jw-flag-small-player .jw-nextup-container .jw-nextup-thumbnail{width:50%}.jw-flag-small-player .jw-nextup-container .jw-nextup{max-width:65px}.jw-flag-small-player .jw-nextup-container .jw-nextup.jw-nextup-thumbnail-visible{max-width:120px}.jw-nextup{background:rgba(38,38,38,.8);border-radius:0;box-shadow:0 0 10px rgba(0,0,0,.5);color:rgba(255,255,255,.8);display:inline-block;max-width:280px;overflow:hidden;opacity:0;position:relative;width:64%;pointer-events:all;transform:translate(0,-5px);transition:150ms cubic-bezier(0,.25,.25,1);transition-property:opacity,transform;transition-delay:0s}.jw-nextup:hover .jw-nextup-tooltip{color:#fff}.jw-nextup.jw-nextup-thumbnail-visible{max-width:400px}.jw-nextup.jw-nextup-thumbnail-visible .jw-nextup-thumbnail{display:block}.jw-nextup-container-visible{visibility:visible}.jw-nextup-container-visible .jw-nextup{opacity:1;transform:translate(0,0);transition-delay:0s,0s,150ms}.jw-nextup-tooltip{display:flex;height:80px}.jw-nextup-thumbnail{width:120px;background-position:center;background-size:cover;flex:0 0 auto;display:none}.jw-nextup-body{flex:1 1 auto;overflow:hidden;padding:.75em .875em;display:flex;flex-flow:column wrap;justify-content:space-between}.jw-nextup-header,.jw-nextup-title{font-size:14px;line-height:1.35}.jw-nextup-header{font-weight:700}.jw-nextup-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.jw-nextup-duration{align-self:flex-end;text-align:right;font-size:12px}.jw-nextup-close{height:24px;width:24px;border:none;color:rgba(255,255,255,.8);cursor:pointer;margin:6px;visibility:hidden}.jw-nextup-close:hover{color:#fff}.jw-nextup-sticky .jw-nextup-close{visibility:visible}.jw-nextup-firefox-pip-fix{background:#262626}.jw-autostart-mute{position:absolute;bottom:0;right:12px;height:44px;width:44px;background-color:rgba(33,33,33,.4);padding:5px 4px 5px 6px;display:none}.jwplayer.jw-flag-autostart:not(.jw-flag-media-audio) .jw-nextup{display:none}.jw-settings-menu{position:absolute;bottom:57px;right:12px;align-items:flex-start;background-color:#262626;display:none;flex-flow:column nowrap;max-width:284px;pointer-events:auto}.jw-settings-open .jw-settings-menu{display:flex}.jw-breakpoint-7 .jw-settings-menu{bottom:130px;right:60px;max-height:none;max-width:none;height:35%;width:25%;min-height:200px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline{height:60px;width:60px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-svg-icon{height:30px;width:30px}.jw-breakpoint-7 .jw-settings-menu .jw-settings-topbar:not(.jw-nested-menu-open) .jw-icon-inline .jw-tooltip .jw-text{font-size:1em}.jw-breakpoint-7 .jw-settings-menu .jw-settings-back{min-width:60px}.jw-breakpoint-5 .jw-settings-menu,.jw-breakpoint-6 .jw-settings-menu{height:232px;width:284px;max-height:232px}.jw-breakpoint-3 .jw-settings-menu,.jw-breakpoint-4 .jw-settings-menu{height:192px;width:284px;max-height:192px}.jw-breakpoint-2 .jw-settings-menu{height:179px;width:284px;max-height:179px}.jw-flag-small-player .jw-settings-menu{max-width:none}.jw-settings-menu .jw-icon.jw-button-color::after{height:100%;width:24px;box-shadow:inset 0 -3px 0 -1px currentColor;margin:auto;opacity:0;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-settings-menu .jw-icon.jw-button-color[aria-expanded=true]::after{opacity:1}.jw-settings-menu .jw-settings-reset{text-decoration:underline}.jw-settings-topbar{align-items:center;background-color:rgba(0,0,0,.4);display:flex;flex:0 0 auto;padding:3px 5px 0;width:100%}.jw-settings-topbar.jw-nested-menu-open{padding:0}.jw-settings-topbar.jw-nested-menu-open .jw-icon:not(.jw-settings-close):not(.jw-settings-back){display:none}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-close{width:20px}.jw-settings-topbar.jw-nested-menu-open .jw-svg-icon-arrow-left{height:12px}.jw-settings-topbar.jw-nested-menu-open .jw-settings-topbar-text{display:block;outline:0}.jw-settings-topbar .jw-settings-back{min-width:44px}.jw-settings-topbar .jw-settings-topbar-buttons{display:inherit;width:100%;height:100%}.jw-settings-topbar .jw-settings-topbar-text{display:none;color:#fff;font-size:13px;width:100%}.jw-settings-topbar .jw-settings-close{margin-left:auto}.jw-settings-submenu{display:none;flex:1 1 auto;overflow-y:auto;padding:8px 20px 0 5px}.jw-settings-submenu::-webkit-scrollbar{background-color:transparent;width:6px}.jw-settings-submenu::-webkit-scrollbar-thumb{background-color:#fff;border:1px solid #262626;border-radius:6px}.jw-settings-submenu.jw-settings-submenu-active{display:block}.jw-settings-submenu .jw-submenu-topbar{box-shadow:0 2px 9px 0 #1d1d1d;background-color:#2f2d2d;margin:-8px -20px 0 -5px}.jw-settings-submenu .jw-submenu-topbar .jw-settings-content-item{cursor:pointer;text-align:right;padding-right:15px;text-decoration:underline}.jw-settings-submenu .jw-settings-value-wrapper{float:right;display:flex;align-items:center}.jw-settings-submenu .jw-settings-value-wrapper .jw-settings-content-item-arrow{display:flex}.jw-settings-submenu .jw-settings-value-wrapper .jw-svg-icon-arrow-right{width:8px;margin-left:5px;height:12px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item{font-size:1em;padding:11px 15px 11px 30px}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-settings-item-active::before{justify-content:flex-end}.jw-breakpoint-7 .jw-settings-submenu .jw-settings-content-item .jw-auto-label{font-size:.85em;padding-left:10px}.jw-flag-touch .jw-settings-submenu{overflow-y:scroll;-webkit-overflow-scrolling:touch}.jw-auto-label{font-size:10px;font-weight:initial;opacity:.75;padding-left:5px}.jw-settings-content-item{position:relative;color:rgba(255,255,255,.8);cursor:pointer;font-size:12px;line-height:1;padding:7px 0 7px 15px;width:100%;text-align:left;outline:0}.jw-settings-content-item:hover{color:#fff}.jw-settings-content-item:focus{font-weight:700}.jw-flag-small-player .jw-settings-content-item{line-height:1.75}.jw-settings-content-item.jw-tab-focus:focus{border:solid 2px #4d90fe}.jw-settings-item-active{font-weight:700;position:relative}.jw-settings-item-active::before{height:100%;width:1em;align-items:center;content:"\\2022";display:inline-flex;justify-content:center}.jw-breakpoint-2 .jw-settings-open .jw-display-container,.jw-flag-small-player .jw-settings-open .jw-display-container,.jw-flag-touch .jw-settings-open .jw-display-container{display:none}.jw-breakpoint-2 .jw-settings-open.jw-controls,.jw-flag-small-player .jw-settings-open.jw-controls,.jw-flag-touch .jw-settings-open.jw-controls{z-index:1}.jw-flag-small-player .jw-settings-open .jw-controlbar{display:none}.jw-settings-open .jw-icon-settings::after{opacity:1}.jw-settings-open .jw-tooltip-settings{display:none}.jw-sharing-link{cursor:pointer}.jw-shortcuts-container .jw-switch{position:relative;display:flex;align-items:center;transition:ease-out .15s;transition-property:opacity,background;border-radius:18px;width:80px;height:20px;padding:10px;background:rgba(80,80,80,.8);cursor:pointer;font-size:inherit;vertical-align:middle;outline:0}.jw-shortcuts-container .jw-switch.jw-tab-focus{border:solid 2px #4d90fe}.jw-shortcuts-container .jw-switch .jw-switch-knob{position:absolute;left:1px;transition:ease-out .15s;box-shadow:0 0 10px rgba(0,0,0,.4);border-radius:13px;width:15px;height:15px;background:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled,.jw-shortcuts-container .jw-switch .jw-switch-enabled{position:absolute;transition:inherit;color:#fefefe}.jw-shortcuts-container .jw-switch .jw-switch-disabled{right:8px}.jw-shortcuts-container .jw-switch .jw-switch-enabled{left:8px;opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true]{background:#475470}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-disabled{opacity:0}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-enabled{opacity:1}.jw-shortcuts-container .jw-switch[aria-checked=true] .jw-switch-knob{left:60px}.jw-idle-icon-text{display:none;line-height:1;position:absolute;text-align:center;text-indent:.35em;top:100%;white-space:nowrap;left:50%;transform:translateX(-50%)}.jw-idle-label{border-radius:50%;color:#fff;filter:drop-shadow(1px 1px 5px rgba(12, 26, 71, .25));font:400 16px/1 Arial,Helvetica,sans-serif;position:relative;transition:background-color 150ms cubic-bezier(0,.25,.25,1);transition-property:background-color,filter;-webkit-font-smoothing:antialiased}.jw-state-idle .jw-icon-display.jw-idle-label .jw-idle-icon-text{display:block}.jw-state-idle .jw-icon-display.jw-idle-label .jw-svg-icon-play{transform:scale(.7,.7)}.jw-breakpoint--1.jw-state-idle .jw-icon-display.jw-idle-label,.jw-breakpoint-0.jw-state-idle .jw-icon-display.jw-idle-label{font-size:12px}@supports (filter:drop-shadow(0 0 3px #000)){.jwplayer.jw-ab-drop-shadow .jw-controls .jw-icon.jw-text,.jwplayer.jw-ab-drop-shadow .jw-controls .jw-svg-icon,.jwplayer.jw-ab-drop-shadow .jw-slider-container .jw-rail,.jwplayer.jw-ab-drop-shadow .jw-title{text-shadow:none;box-shadow:none;filter:drop-shadow(0 2px 3px rgba(0, 0, 0, .3))}.jwplayer.jw-ab-drop-shadow .jw-button-color{opacity:.8;transition-property:color,opacity}.jwplayer.jw-ab-drop-shadow .jw-button-color:not(:hover){color:#fff;opacity:.8}.jwplayer.jw-ab-drop-shadow .jw-button-color:hover{opacity:1}.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.00787) 10.79%, hsla(0, 0%, 0%, 0.02963) 21.99%, hsla(0, 0%, 0%, 0.0625) 33.34%, hsla(0, 0%, 0%, 0.1037) 44.59%, hsla(0, 0%, 0%, 0.15046) 55.48%, hsla(0, 0%, 0%, 0.2) 65.75%, hsla(0, 0%, 0%, 0.24954) 75.14%, hsla(0, 0%, 0%, 0.2963) 83.41%, hsla(0, 0%, 0%, 0.3375) 90.28%, hsla(0, 0%, 0%, 0.37037) 95.51%, hsla(0, 0%, 0%, 0.39213) 98.83%, hsla(0, 0%, 0%, 0.4));mix-blend-mode:multiply;transition-property:opacity}.jw-state-idle.jwplayer.jw-ab-drop-shadow .jw-controls-backdrop{background-image:linear-gradient(to bottom, hsla(0, 0%, 0%, 0.2), hsla(0, 0%, 0%, 0.19606) 1.17%, hsla(0, 0%, 0%, 0.18519) 4.49%, hsla(0, 0%, 0%, 0.16875) 9.72%, hsla(0, 0%, 0%, 0.14815) 16.59%, hsla(0, 0%, 0%, 0.12477) 24.86%, hsla(0, 0%, 0%, 0.1) 34.25%, hsla(0, 0%, 0%, 0.07523) 44.52%, hsla(0, 0%, 0%, 0.05185) 55.41%, hsla(0, 0%, 0%, 0.03125) 66.66%, hsla(0, 0%, 0%, 0.01481) 78.01%, hsla(0, 0%, 0%, 0.00394) 89.21%, hsla(0, 0%, 0%, 0));background-size:100% 7rem;background-position:50% 0}.jwplayer.jw-ab-drop-shadow.jw-state-idle .jw-controls{background-color:transparent}}.jw-video-thumbnail-container{position:relative;overflow:hidden}.jw-video-thumbnail-container:not(.jw-related-shelf-item-image){height:100%;width:100%}.jw-video-thumbnail-container.jw-video-thumbnail-generated{position:absolute;top:0;left:0}.jw-related-item-content:hover .jw-video-thumbnail-container,.jw-related-shelf-item:hover .jw-video-thumbnail-container,.jw-video-thumbnail-container:hover{cursor:pointer}.jw-related-item-content:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-related-shelf-item:hover .jw-video-thumbnail-container .jw-video-thumbnail:not(.jw-video-thumbnail-completed),.jw-video-thumbnail-container:hover .jw-video-thumbnail:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail{position:absolute;top:50%;left:50%;bottom:unset;transform:translate(-50%,-50%);width:100%;height:auto;min-width:100%;min-height:100%;opacity:0;transition:opacity .3s ease;object-fit:cover;background:#000}.jw-related-item-next-up .jw-video-thumbnail-container .jw-video-thumbnail{height:100%;width:auto}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-visible:not(.jw-video-thumbnail-completed){opacity:1}.jw-video-thumbnail-container .jw-video-thumbnail.jw-video-thumbnail-completed{opacity:0}.jw-video-thumbnail-container .jw-video-thumbnail~.jw-svg-icon-play{display:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-shelf-item-aspect{pointer-events:none}.jw-video-thumbnail-container .jw-video-thumbnail+.jw-related-item-poster-content{pointer-events:none}.jw-preview{overflow:hidden}.jw-preview .jw-ab-zoom-thumbnail{all:inherit;animation:jw-ab-zoom-thumbnail-animation 10s infinite}@keyframes jw-ab-zoom-thumbnail-animation{0%{transform:scale(1,1)}50%{transform:scale(1.25,1.25)}100%{transform:scale(1,1)}}.jw-state-idle:not(.jw-flag-cast-available) .jw-display{padding:0}.jw-state-idle .jw-controls{background:rgba(0,0,0,.4)}.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cardboard-available .jw-controlbar .jw-slider-time,.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-icon:not(.jw-icon-cardboard):not(.jw-icon-cast):not(.jw-icon-airplay),.jw-state-idle.jw-flag-cast-available:not(.jw-flag-audio-player) .jw-controlbar .jw-slider-time{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon:focus{border:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-icon .jw-svg-icon-buffer{animation:jw-spin 2s linear infinite;display:block}@keyframes jw-spin{100%{transform:rotate(360deg)}}.jwplayer.jw-state-buffering .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-pause{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-play{display:none}.jwplayer.jw-state-playing .jw-display .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:block}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-controls-backdrop{opacity:0}.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio) .jw-logo-bottom-left,.jwplayer.jw-state-playing.jw-flag-user-inactive:not(.jw-flag-audio-player):not(.jw-flag-casting):not(.jw-flag-media-audio):not(.jw-flag-autostart) .jw-logo-bottom-right{bottom:0}.jwplayer .jw-icon-playback .jw-svg-icon-stop{display:none}.jwplayer.jw-state-complete .jw-svg-icon-pause,.jwplayer.jw-state-error .jw-svg-icon-pause,.jwplayer.jw-state-idle .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-svg-icon-pause{display:none}.jwplayer.jw-state-buffering .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-complete .jw-icon-display .jw-svg-icon-play,.jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-play{display:none}.jwplayer:not(.jw-state-buffering) .jw-svg-icon-buffer{display:none}.jwplayer:not(.jw-state-complete) .jw-svg-icon-replay{display:none}.jwplayer:not(.jw-state-error) .jw-svg-icon-error{display:none}.jwplayer.jw-state-complete .jw-display .jw-icon-display .jw-svg-icon-replay{display:block}.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-state-complete .jw-controls{background:rgba(0,0,0,.4);height:100%}.jw-state-idle .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-complete .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-display .jw-svg-icon-pause,.jwplayer.jw-state-paused .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-state-idle .jw-display-icon-next,.jw-state-idle .jw-display-icon-rewind,.jwplayer.jw-state-buffering .jw-display-icon-next,.jwplayer.jw-state-buffering .jw-display-icon-rewind,.jwplayer.jw-state-complete .jw-display-icon-next,.jwplayer.jw-state-complete .jw-display-icon-rewind,body .jw-error .jw-display-icon-next,body .jw-error .jw-display-icon-rewind,body .jwplayer.jw-state-error .jw-display-icon-next,body .jwplayer.jw-state-error .jw-display-icon-rewind{display:none}body .jw-error .jw-icon-display,body .jwplayer.jw-state-error .jw-icon-display{cursor:default}body .jw-error .jw-icon-display .jw-svg-icon-error,body .jwplayer.jw-state-error .jw-icon-display .jw-svg-icon-error{display:block}body .jw-error .jw-icon-container{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-preview{display:none}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title{padding-top:4px}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-primary{width:auto;display:inline-block;padding-right:.5ch}body .jwplayer.jw-state-error.jw-flag-audio-player .jw-title-secondary{width:auto;display:inline-block;padding-left:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-controlbar,body .jwplayer.jw-state-error .jw-controlbar{display:none}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-settings-menu,body .jwplayer.jw-state-error .jw-settings-menu{height:100%;top:50%;left:50%;transform:translate(-50%,-50%)}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-display,body .jwplayer.jw-state-error .jw-display{padding:0}.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-left,.jwplayer.jw-state-idle:not(.jw-flag-audio-player):not(.jw-flag-cast-available):not(.jw-flag-cardboard-available) .jw-logo-bottom-right,body .jwplayer.jw-state-error .jw-logo-bottom-left,body .jwplayer.jw-state-error .jw-logo-bottom-right{bottom:0}.jwplayer.jw-state-playing.jw-flag-user-inactive .jw-display{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-state-paused:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting):not(.jw-flag-play-rejected) .jw-display,.jwplayer.jw-state-playing:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display{display:none}.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-next,.jwplayer.jw-state-paused.jw-flag-play-rejected:not(.jw-flag-touch):not(.jw-flag-small-player):not(.jw-flag-casting) .jw-display-icon-rewind{display:none}.jwplayer.jw-state-buffering .jw-display-icon-display .jw-text,.jwplayer.jw-state-complete .jw-display .jw-text{display:none}.jwplayer.jw-flag-casting:not(.jw-flag-audio-player) .jw-cast{display:block}.jwplayer.jw-flag-casting .jw-captions,.jwplayer.jw-flag-casting .jw-icon-audio-tracks,.jwplayer.jw-flag-casting .jw-icon-fullscreen,.jwplayer.jw-flag-casting .jw-icon-hd{display:none}.jwplayer.jw-flag-casting.jw-flag-airplay-casting .jw-icon-airplay{color:#fff}.jw-state-paused.jw-flag-casting:not(.jw-flag-audio-player) .jw-display,.jw-state-playing.jw-flag-casting:not(.jw-flag-audio-player) .jw-display{display:flex}.jwplayer.jw-flag-cast-available .jw-icon-airplay,.jwplayer.jw-flag-cast-available .jw-icon-cast{display:flex}.jwplayer.jw-flag-cardboard-available .jw-icon-cardboard{display:flex}.jwplayer.jw-flag-live .jw-display-icon-rewind{visibility:hidden}.jwplayer.jw-flag-live .jw-controlbar .jw-slider-time,.jwplayer.jw-flag-live .jw-controlbar .jw-text-countdown,.jwplayer.jw-flag-live .jw-controlbar .jw-text-duration,.jwplayer.jw-flag-live .jw-controlbar .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-live .jw-controlbar .jw-overlay:after{display:none}.jwplayer.jw-flag-live .jw-nextup-container{bottom:44px}.jwplayer.jw-flag-live .jw-text-duration,.jwplayer.jw-flag-live .jw-text-elapsed{display:none}.jwplayer.jw-flag-live .jw-text-live{cursor:default}.jwplayer.jw-flag-live .jw-text-live:hover{color:rgba(255,255,255,.8)}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-stop,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-stop{display:block}.jwplayer.jw-flag-live.jw-state-buffering .jw-icon-playback .jw-svg-icon-pause,.jwplayer.jw-flag-live.jw-state-playing .jw-icon-playback .jw-svg-icon-pause{display:none}.jw-text-live{height:24px;width:auto;align-items:center;border-radius:1px;color:rgba(255,255,255,.8);display:flex;font-size:12px;font-weight:700;margin-right:10px;padding:0 1ch;text-rendering:geometricPrecision;text-transform:uppercase;transition:150ms cubic-bezier(0,.25,.25,1);transition-property:box-shadow,color}.jw-text-live::before{height:8px;width:8px;background-color:currentColor;border-radius:50%;margin-right:6px;opacity:1;transition:opacity 150ms cubic-bezier(0,.25,.25,1)}.jw-text-live.jw-dvr-live{box-shadow:inset 0 0 0 2px currentColor}.jw-text-live.jw-dvr-live::before{opacity:.5}.jw-text-live.jw-dvr-live:hover{color:#fff}.jwplayer.jw-flag-controls-hidden .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-controls-hidden .jw-plugin{bottom:.5em}.jwplayer.jw-flag-controls-hidden:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-controls-hidden.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jw-flag-controls-hidden .jw-controlbar,.jw-flag-controls-hidden .jw-display{visibility:hidden;pointer-events:none;opacity:0;transition-delay:0s,250ms}.jw-flag-controls-hidden .jw-controls-backdrop{opacity:0}.jw-flag-controls-hidden .jw-logo{visibility:visible}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-logo.jw-hide{visibility:hidden;pointer-events:none;opacity:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-casting) .jw-logo-top-right{top:0}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing .jw-plugin{bottom:.5em}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-touch.jw-breakpoint-4):not(.jw-flag-touch.jw-breakpoint-5):not(.jw-flag-touch.jw-breakpoint-6):not(.jw-flag-touch.jw-breakpoint-7) .jw-nextup-container{transform:translateY(66px)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-4 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-5 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-6 .jw-nextup-container,.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-touch.jw-state-playing.jw-breakpoint-7 .jw-nextup-container{transform:translateY(4.25em)}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-controls-hidden) .jw-media{cursor:none;-webkit-cursor-visibility:auto-hide}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing.jw-flag-casting .jw-display{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-state-playing:not(.jw-flag-ads) .jw-autostart-mute{display:flex}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting .jw-nextup-container{bottom:66px}.jwplayer.jw-flag-user-inactive:not(.jw-flag-media-audio).jw-flag-casting.jw-state-idle .jw-nextup-container{display:none}.jw-flag-media-audio .jw-preview{display:block}.jwplayer.jw-flag-ads .jw-captions.jw-captions-enabled,.jwplayer.jw-flag-ads .jw-logo,.jwplayer.jw-flag-ads .jw-nextup-container,.jwplayer.jw-flag-ads .jw-preview,.jwplayer.jw-flag-ads .jw-text-duration,.jwplayer.jw-flag-ads .jw-text-elapsed{display:none}.jwplayer.jw-flag-ads video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-display,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-next,.jwplayer.jw-flag-ads.jw-flag-small-player .jw-display-icon-rewind{display:none}.jwplayer.jw-flag-ads.jw-flag-small-player.jw-state-buffering .jw-display-icon-display{display:inline-block}.jwplayer.jw-flag-ads .jw-controlbar{flex-direction:column-reverse}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time{height:auto;padding:0;pointer-events:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-slider-container{height:5px}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-buffer,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-cue,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-icon-settings,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-knob,.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-rail{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-slider-time .jw-progress{transform:none;top:auto}.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-inline:not(.jw-icon-playback):not(.jw-icon-fullscreen):not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-icon-tooltip:not(.jw-icon-volume),.jwplayer.jw-flag-ads .jw-controlbar .jw-tooltip{display:none}.jwplayer.jw-flag-ads .jw-controlbar .jw-volume-tip{padding:13px 0}.jwplayer.jw-flag-ads .jw-controlbar .jw-text-alt{display:flex}.jwplayer.jw-flag-ads .jw-fullscreen-ima{display:none}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid) .jw-controls .jw-controlbar,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart .jw-controls .jw-controlbar{display:flex;pointer-events:all;visibility:visible;opacity:1}.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-autostart.jw-flag-user-inactive .jw-controls-backdrop,.jwplayer.jw-flag-ads.jw-flag-ads.jw-state-playing.jw-flag-touch:not(.jw-flag-ads-vpaid).jw-flag-user-inactive .jw-controls-backdrop{opacity:1;background-size:100% 60px}.jwplayer.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-ads-vpaid .jw-skip,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-display-container,.jwplayer.jw-flag-touch.jw-flag-ads-vpaid .jw-skip{display:none}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls{background:0 0}.jwplayer.jw-flag-ads-vpaid.jw-flag-small-player .jw-controls::after{content:none}.jwplayer.jw-flag-ads-hide-controls .jw-controls,.jwplayer.jw-flag-ads-hide-controls .jw-controls-backdrop{display:none!important}.jw-flag-overlay-open-related .jw-controls,.jw-flag-overlay-open-related .jw-logo,.jw-flag-overlay-open-related .jw-title{display:none}.jwplayer.jw-flag-rightclick-open{overflow:visible}.jwplayer.jw-flag-rightclick-open .jw-rightclick{z-index:16777215}.jw-flag-touch.jw-breakpoint-4 .jw-captions,.jw-flag-touch.jw-breakpoint-4 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-5 .jw-captions,.jw-flag-touch.jw-breakpoint-5 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-6 .jw-captions,.jw-flag-touch.jw-breakpoint-6 .jw-nextup-container,.jw-flag-touch.jw-breakpoint-7 .jw-captions,.jw-flag-touch.jw-breakpoint-7 .jw-nextup-container{bottom:4.25em}.jw-flag-touch .jw-controlbar .jw-icon-volume{display:flex}.jw-flag-touch .jw-display,.jw-flag-touch .jw-display-container,.jw-flag-touch .jw-display-controls{pointer-events:none}.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-paused:not(.jw-breakpoint-1) .jw-display-icon-rewind,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-next,.jw-flag-touch.jw-state-playing:not(.jw-breakpoint-1) .jw-display-icon-rewind{display:none}.jw-flag-touch.jw-state-paused.jw-flag-dragging .jw-display{display:none}.jw-flag-audio-player{background-color:#000}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-audio-player:not(.jw-flag-live) .jw-spacer{display:none}.jw-flag-audio-player .jw-display,.jw-flag-audio-player .jw-nextup-container,.jw-flag-audio-player .jw-preview,.jw-flag-audio-player .jw-title{display:none}.jw-flag-audio-player .jw-controlbar{position:relative}.jw-flag-audio-player .jw-controlbar .jw-button-container{padding-right:3px;padding-left:0;justify-content:flex-start}.jw-flag-audio-player .jw-controlbar .jw-icon-inline,.jw-flag-audio-player .jw-controlbar .jw-icon-tooltip{display:none}.jw-flag-audio-player .jw-controlbar .jw-icon-airplay,.jw-flag-audio-player .jw-controlbar .jw-icon-cast,.jw-flag-audio-player .jw-controlbar .jw-icon-next,.jw-flag-audio-player .jw-controlbar .jw-icon-playback,.jw-flag-audio-player .jw-controlbar .jw-icon-rewind,.jw-flag-audio-player .jw-controlbar .jw-icon-volume,.jw-flag-audio-player .jw-controlbar .jw-logo-button,.jw-flag-audio-player .jw-controlbar .jw-text-duration,.jw-flag-audio-player .jw-controlbar .jw-text-elapsed,.jw-flag-audio-player .jw-controlbar .jw-text-live{display:flex;flex:0 0 auto}.jw-flag-audio-player .jw-controlbar .jw-text-countdown,.jw-flag-audio-player .jw-controlbar .jw-text-duration{padding-right:10px}.jw-flag-audio-player .jw-controlbar .jw-slider-time{flex:0 1 auto;align-items:center;display:flex;order:1}.jw-flag-audio-player .jw-controlbar .jw-icon-volume{margin-right:0;transition:margin-right 150ms cubic-bezier(0,.25,.25,1)}.jw-flag-audio-player .jw-controlbar .jw-icon-volume .jw-overlay{display:none}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container~.jw-slider-time{transition:opacity .3s,width .3s}.jw-flag-audio-player .jw-controlbar .jw-horizontal-volume-container.jw-open~.jw-slider-time{flex:1 1 auto;width:auto}.jw-flag-audio-player .jw-controlbar .jw-slider-volume~.jw-icon-volume{margin-right:140px}.jw-flag-audio-player.jw-breakpoint-1 .jw-horizontal-volume-container.jw-open~.jw-slider-time,.jw-flag-audio-player.jw-breakpoint-2 .jw-horizontal-volume-container.jw-open~.jw-slider-time{opacity:0}.jw-flag-audio-player.jw-flag-small-player .jw-text-duration,.jw-flag-audio-player.jw-flag-small-player .jw-text-elapsed{display:none}.jw-flag-audio-player.jw-flag-ads .jw-slider-time{display:none}.jw-hidden{display:none}', ""]),
        e.Z = r
    },
    8901: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, '.jw-reset{text-align:left;direction:ltr}.jw-reset,.jw-reset-text{color:inherit;background-color:transparent;padding:0;margin:0;float:none;font-family:Arial,Helvetica,sans-serif;font-size:1em;line-height:1em;list-style:none;text-transform:none;vertical-align:baseline;border:0;font-variant:inherit;font-stretch:inherit;-webkit-tap-highlight-color:rgba(255,255,255,0)}body .jw-error,body .jwplayer.jw-state-error{height:100%;width:100%}.jw-title{position:absolute;top:0}.jw-background-color{background:rgba(0,0,0,.4)}.jw-text{color:rgba(255,255,255,.8)}.jw-knob{color:rgba(255,255,255,.8);background-color:#fff}.jw-button-color{color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):focus,:not(.jw-flag-touch) .jw-button-color:not(.jw-logo-button):hover{color:#fff}.jw-toggle{color:#fff}.jw-toggle.jw-off{color:rgba(255,255,255,.8)}.jw-toggle.jw-off:focus{color:#fff}.jw-toggle:focus{outline:0}:not(.jw-flag-touch) .jw-toggle.jw-off:hover{color:#fff}.jw-rail{background:rgba(255,255,255,.3)}.jw-buffer{background:rgba(255,255,255,.3)}.jw-progress{background:#f2f2f2}.jw-time-tip,.jw-volume-tip{border:0}.jw-slider-volume.jw-volume-tip.jw-background-color.jw-slider-vertical{background:0 0}.jw-skip{padding:.5em;outline:0}.jw-skip .jw-skip-icon,.jw-skip .jw-skiptext{color:rgba(255,255,255,.8)}.jw-skip.jw-skippable:focus .jw-skip-icon,.jw-skip.jw-skippable:hover .jw-skip-icon{color:#fff}.jw-icon-cast google-cast-launcher{--connected-color:#fff;--disconnected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast google-cast-launcher:focus{outline:0}.jw-icon-cast google-cast-launcher.jw-off{--connected-color:rgba(255, 255, 255, 0.8)}.jw-icon-cast:focus google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-icon-cast:hover google-cast-launcher{--connected-color:#fff;--disconnected-color:#fff}.jw-nextup-container{bottom:2.5em;padding:5px .5em}.jw-nextup{border-radius:0}.jw-color-active{color:#fff;stroke:#fff;border-color:#fff}:not(.jw-flag-touch) .jw-color-active-hover:focus,:not(.jw-flag-touch) .jw-color-active-hover:hover{color:#fff;stroke:#fff;border-color:#fff}.jw-color-inactive{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}:not(.jw-flag-touch) .jw-color-inactive-hover:hover{color:rgba(255,255,255,.8);stroke:rgba(255,255,255,.8);border-color:rgba(255,255,255,.8)}.jw-option{color:rgba(255,255,255,.8)}.jw-option.jw-active-option{color:#fff;background-color:rgba(255,255,255,.1)}:not(.jw-flag-touch) .jw-option:hover{color:#fff}.jwplayer{width:100%;font-size:16px;position:relative;display:block;min-height:0;overflow:hidden;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;outline:0}.jwplayer *{box-sizing:inherit}.jwplayer.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jwplayer.jw-flag-aspect-mode{height:auto!important}.jwplayer.jw-flag-aspect-mode .jw-aspect{display:block}.jwplayer .jw-aspect{display:none}.jw-media,.jw-preview{position:absolute;width:100%;height:100%;top:0;left:0;bottom:0;right:0}.jw-media{overflow:hidden;cursor:pointer}.jw-plugin{position:absolute;bottom:66px}.jw-breakpoint-7 .jw-plugin{bottom:132px}.jw-plugin .jw-banner{max-width:100%;opacity:0;cursor:pointer;position:absolute;margin:auto auto 0;left:0;right:0;bottom:0;display:block}.jw-captions,.jw-preview,.jw-title{pointer-events:none}.jw-logo,.jw-media{pointer-events:all}.jw-wrapper{background-color:#000;position:absolute;top:0;left:0;right:0;bottom:0}.jw-hidden-accessibility{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.jw-contract-trigger::before{content:"";overflow:hidden;width:200%;height:200%;display:block;position:absolute;top:0;left:0}.jwplayer .jw-media video{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto;background:0 0;-webkit-tap-highlight-color:transparent;-webkit-focus-ring-color:transparent;outline:0}.jwplayer .jw-media video::-webkit-media-controls-start-playback-button{display:none}.jwplayer.jw-stretch-uniform .jw-media video{object-fit:contain}.jwplayer.jw-stretch-none .jw-media video{object-fit:none}.jwplayer.jw-stretch-fill .jw-media video{object-fit:cover}.jwplayer.jw-stretch-exactfit .jw-media video{object-fit:fill}.jw-preview{position:absolute;display:none;opacity:1;visibility:visible;width:100%;height:100%;background:#000 no-repeat 50% 50%}.jw-error .jw-preview,.jwplayer .jw-preview{background-size:contain}.jw-stretch-none .jw-preview{background-size:auto auto}.jw-stretch-fill .jw-preview{background-size:cover}.jw-stretch-exactfit .jw-preview{background-size:100% 100%}.jw-title{display:none;padding-top:20px;width:100%;z-index:1}.jw-title-primary,.jw-title-secondary{color:#fff;padding-left:20px;padding-right:20px;padding-bottom:.5em;overflow:hidden;text-overflow:ellipsis;direction:unset;white-space:nowrap;width:100%}.jw-title-primary{font-size:1.625em}.jw-breakpoint-2 .jw-title-primary,.jw-breakpoint-3 .jw-title-primary{font-size:1.5em}.jw-flag-small-player .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-primary{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;padding-bottom:0;margin-bottom:.5em;white-space:pre-wrap;line-height:1.2}.jw-breakpoint-1 .jw-ab-truncated .jw-title-primary{font-size:1.25em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-primary{font-size:1em}.jw-breakpoint-0 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-1 .jw-ab-truncated .jw-title-secondary,.jw-breakpoint-2 .jw-ab-truncated .jw-title-secondary,.jw-flag-small-player .jw-title-secondary,.jw-title-secondary:empty{display:none}.jw-captions{position:absolute;width:100%;height:100%;text-align:center;display:none;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-decoration:none;pointer-events:none;overflow:hidden;top:0}.jw-captions.jw-captions-enabled{display:block}.jw-captions-window{display:none;padding:.25em;border-radius:.25em}.jw-captions-window.jw-captions-window-active{display:inline-block}.jw-captions-text{display:inline-block;color:#fff;background-color:#000;word-wrap:normal;word-break:normal;white-space:pre-line;font-style:normal;font-weight:400;text-align:center;text-decoration:none}.jw-text-track-display{font-size:inherit;line-height:1.5}.jw-text-track-cue{background-color:rgba(0,0,0,.5);color:#fff;padding:.1em .3em}.jwplayer video::-webkit-media-controls{display:none;justify-content:flex-start}.jwplayer video::-webkit-media-text-track-display{min-width:-webkit-min-content}.jwplayer video::cue{background-color:rgba(0,0,0,.5)}.jwplayer video::-webkit-media-controls-panel-container{display:none}.jwplayer.jw-flag-media-audio.jw-state-playing .jw-captions,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden) .jw-captions,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing) .jw-captions{max-height:calc(100% - 60px)}.jwplayer.jw-flag-media-audio.jw-state-playing:not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer.jw-state-playing:not(.jw-flag-user-inactive):not(.jw-flag-controls-hidden):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container,.jwplayer:not(.jw-flag-controls-hidden):not(.jw-state-playing):not(.jw-flag-ios-fullscreen) video::-webkit-media-text-track-container{max-height:calc(100% - 60px)}.jw-logo{position:absolute;margin:20px;cursor:pointer;pointer-events:all;background-repeat:no-repeat;background-size:contain;top:auto;right:auto;left:auto;bottom:auto;outline:0}.jw-logo.jw-tab-focus:focus{outline:solid 2px #4d90fe}.jw-flag-audio-player .jw-logo{display:none}.jw-logo-top-right{top:0;right:0}.jw-logo-top-left{top:0;left:0}.jw-logo-bottom-left{left:0}.jw-logo-bottom-right{right:0}.jw-logo-bottom-left,.jw-logo-bottom-right{bottom:44px;transition:bottom 150ms cubic-bezier(0,.25,.25,1)}.jw-state-idle .jw-logo{z-index:1}.jw-state-setup .jw-wrapper{background-color:inherit}.jw-state-setup .jw-controls,.jw-state-setup .jw-controls-backdrop,.jw-state-setup .jw-logo{visibility:hidden}span.jw-break{display:block}body .jw-error,body .jwplayer.jw-state-error{background-color:#333;color:#fff;font-size:16px;display:table;opacity:1;position:relative}body .jw-error .jw-display,body .jwplayer.jw-state-error .jw-display{display:none}body .jw-error .jw-media,body .jwplayer.jw-state-error .jw-media{cursor:default}body .jw-error .jw-preview,body .jwplayer.jw-state-error .jw-preview{background-color:#333}body .jw-error .jw-error-msg,body .jwplayer.jw-state-error .jw-error-msg{background-color:#000;border-radius:2px;display:flex;flex-direction:row;align-items:stretch;padding:20px}body .jw-error .jw-error-msg .jw-icon,body .jwplayer.jw-state-error .jw-error-msg .jw-icon{height:30px;width:30px;margin-right:20px;flex:0 0 auto;align-self:center}body .jw-error .jw-error-msg .jw-icon:empty,body .jwplayer.jw-state-error .jw-error-msg .jw-icon:empty{display:none}body .jw-error .jw-error-msg .jw-info-container,body .jwplayer.jw-state-error .jw-error-msg .jw-info-container{margin:0;padding:0}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg{flex-direction:column}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-error-text,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-error-text{text-align:center}body .jw-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jw-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-breakpoint-2 .jw-error-msg .jw-icon,body .jwplayer.jw-state-error:not(.jw-flag-audio-player).jw-flag-small-player .jw-error-msg .jw-icon{flex:.5 0 auto;margin-right:0;margin-bottom:20px}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break{display:inline}.jwplayer.jw-state-error.jw-breakpoint-2 .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg .jw-break:before,.jwplayer.jw-state-error.jw-flag-small-player .jw-error-msg .jw-break:before{content:" "}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg{height:100%;width:100%;top:0;position:absolute;left:0;background:#000;transform:none;padding:4px 16px;z-index:1}.jwplayer.jw-state-error.jw-flag-audio-player .jw-error-msg.jw-info-overlay{max-width:none;max-height:none}.jw-state-idle .jw-title,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-title,body .jwplayer.jw-state-error .jw-title{display:block}.jw-state-idle .jw-preview,.jwplayer.jw-state-complete:not(.jw-flag-casting):not(.jw-flag-audio-player):not(.jw-flag-overlay-open-related) .jw-preview,body .jwplayer.jw-state-error .jw-preview{display:block}.jw-state-idle .jw-captions,.jwplayer.jw-state-complete .jw-captions,body .jwplayer.jw-state-error .jw-captions{display:none}.jw-state-idle video::-webkit-media-text-track-container,.jwplayer.jw-state-complete video::-webkit-media-text-track-container,body .jwplayer.jw-state-error video::-webkit-media-text-track-container{display:none}.jwplayer.jw-flag-fullscreen{width:100%!important;height:100%!important;top:0;right:0;bottom:0;left:0;z-index:1000;margin:0;position:fixed}.jwplayer.jw-flag-controls-hidden .jw-media{cursor:default}.jw-flag-audio-player .jw-media{visibility:hidden}.jw-flag-audio-player .jw-title{background:0 0}.jw-flag-floating{background-size:cover;background-color:#000}.jw-flag-floating.jw-floating-dismissible .jw-wrapper{bottom:3rem}.jw-flag-floating .jw-wrapper{position:fixed;z-index:2147483647;top:auto;bottom:1rem;left:auto;right:1rem;max-width:400px;max-height:400px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating .jw-wrapper:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating .jw-wrapper{width:100%;left:0;right:0}}.jw-flag-floating .jw-wrapper.jw-floating-dragging{transition:none!important}.jw-flag-floating .jw-wrapper .jw-media{touch-action:none}@media screen and (max-device-width:480px) and (orientation:portrait){.jw-flag-touch.jw-flag-floating .jw-wrapper{animation:none;top:0;margin-top:62px;bottom:auto;max-width:none;max-height:none}}.jw-flag-floating .jw-icon{margin:0;padding:0}.jw-flag-floating .jw-float-bar-icon{pointer-events:all;cursor:pointer;display:flex;height:24px;width:24px}.jw-flag-floating .jw-float-bar-icon:hover{background:#1d1d1d;border-radius:100px}.jw-flag-floating .jw-float-bar-icon .jw-svg-icon{display:block;margin:auto;padding:0;height:10px;width:10px}.jw-flag-floating.jw-floating-dismissible .jw-dismiss-icon{display:none}.jw-flag-floating.jw-floating-dismissible .jw-float-bar{display:inline-flex;flex-direction:row;align-items:center;position:fixed;z-index:2147483647;top:100%;height:32px;width:100%;max-height:32px;margin:0 auto}@media screen and (min-width:481px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar:not(.jw-floating-dragged){animation:jw-float-to-bottom 150ms cubic-bezier(0,.25,.25,1) forwards 1}}@media screen and (max-width:480px){.jw-flag-floating.jw-floating-dismissible .jw-float-bar{left:0;right:0;top:auto}}.jw-flag-floating.jw-floating-dismissible.jw-state-paused .jw-logo,.jw-flag-floating.jw-floating-dismissible:not(.jw-flag-user-inactive) .jw-logo{display:none}.jw-float-bar{display:none;position:absolute;padding:4px 8px;background:#2f2d2d;touch-action:none}.jw-float-bar-title{width:100%;max-height:24px;font-family:Arial,sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:16px;margin-left:0;padding-right:22px;color:rgba(255,255,255,.8)!important;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@keyframes jw-float-to-bottom{from{transform:translateY(100%)}to{transform:translateY(0)}}.jw-flag-top{margin-top:2em;overflow:visible}.jw-top{height:2em;line-height:2;pointer-events:none;text-align:center;opacity:.8;position:absolute;top:-2em;width:100%}.jw-top .jw-icon{cursor:pointer;pointer-events:all;height:auto;width:auto}.jw-top .jw-text{color:#555}', ""]),
        e.Z = r
    },
    3591: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, ".jw-logo-button{pointer-events:none;width:132px}.jw-svg-icon-watermark{color:#ff0046;width:96px}.jw-controlbar .jw-svg-icon-jwplayer-logo{display:none;color:#ff0046}.jw-flag-small-player .jw-logo-button{width:44px}.jw-flag-small-player .jw-svg-icon-watermark{display:none}.jw-flag-small-player .jw-controlbar .jw-svg-icon-jwplayer-logo{display:block}.jw-breakpoint--1:not(.jw-flag-audio-player) .jw-logo-button{bottom:6px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-icon-inline.jw-logo-button{width:186px}.jwplayer.jw-breakpoint-7 .jw-controlbar .jw-button-container .jw-svg-icon-watermark{width:150px}", ""]),
        e.Z = r
    },
    2792: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, ".jw-flag-outstream.jw-state-complete .jw-controls,.jw-flag-outstream.jw-state-complete .jw-controls-backdrop{display:none}.jw-flag-outstream.jw-state-complete .jw-media{pointer-events:none}.jw-flag-outstream.jw-state-complete .jw-preview{background-color:#f2f2f2}.jw-flag-outstream .jw-wrapper{transition:transform 250ms cubic-bezier(0,.25,.25,1)}.jw-flag-outstream .jw-dismiss-icon{position:absolute;right:0;bottom:0}.jw-flag-outstream-close{max-height:1px;animation:250ms jw-outstream-collapse 1 step-end}@keyframes jw-outstream-collapse{0%{max-height:initial}100%{max-height:1px}}.jw-flag-outstream-close .jw-wrapper{transform:scaleY(0)}.jw-flag-outstream-pending{max-height:1px;max-width:100%}.jw-flag-outstream-pending.jw-flag-top{margin-top:0;overflow:hidden}.jw-flag-outstream-pending .jw-wrapper{transform:scaleY(0)}", ""]),
        e.Z = r
    },
    8406: function(t, e, i) {
        "use strict";
        var n = i(8081)
          , o = i.n(n)
          , a = i(3645)
          , r = i.n(a)()(o());
        r.push([t.id, '.jw-settings-content-item .jw-svg-icon{margin-right:1em;height:16px;width:16px;padding:0}.jw-settings-content-item .jw-tooltip{bottom:12px;left:50px;width:60px}.jw-settings-content-item .jw-tooltip.jw-open{transition:none}.jw-sharing-link{display:flex;align-items:center;line-height:16px;text-transform:capitalize}.jw-sharing-link:focus,.jw-sharing-link:hover{text-decoration:none}.jw-sharing-copy:after{background-color:#fff;border-radius:50px;bottom:20px;color:#000;content:"Copied";display:block;font-size:13px;font-weight:700;opacity:0;margin-left:-25px;left:50%;position:absolute;text-align:center;transform:translateY(10px);transition:all .2s ease-in-out;visibility:hidden;width:60px}.jw-sharing-copy-textarea-copied:after{opacity:1;transform:translateY(0);visibility:visible}.jw-sharing-copy .jw-sharing-link{padding:0}.jw-sharing-copy .jw-sharing-link:focus,.jw-sharing-copy .jw-sharing-link:hover{color:#fff}.jw-sharing-copy:focus,.jw-sharing-link:focus{outline:0}.jw-sharing-copy:active,.jw-sharing-link:active{color:#fff;font-weight:700}.jw-sharing-textarea{display:flex;opacity:0;height:1px;cursor:pointer}', ""]),
        e.Z = r
    },
    3645: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map((function(e) {
                    var i = ""
                      , n = void 0 !== e[5];
                    return e[4] && (i += "@supports (".concat(e[4], ") {")),
                    e[2] && (i += "@media ".concat(e[2], " {")),
                    n && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")),
                    i += t(e),
                    n && (i += "}"),
                    e[2] && (i += "}"),
                    e[4] && (i += "}"),
                    i
                }
                )).join("")
            }
            ,
            e.i = function(t, i, n, o, a) {
                "string" == typeof t && (t = [[null, t, void 0]]);
                var r = {};
                if (n)
                    for (var s = 0; s < this.length; s++) {
                        var l = this[s][0];
                        null != l && (r[l] = !0)
                    }
                for (var c = 0; c < t.length; c++) {
                    var u = [].concat(t[c]);
                    n && r[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                    u[5] = a),
                    i && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"),
                    u[2] = i) : u[2] = i),
                    o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"),
                    u[4] = o) : u[4] = "".concat(o)),
                    e.push(u))
                }
            }
            ,
            e
        }
    },
    8081: function(t) {
        "use strict";
        t.exports = function(t) {
            return t[1]
        }
    },
    1334: function() {
        !function() {
            if ("undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof HTMLElement) {
                var t = !1;
                try {
                    var e = document.createElement("div");
                    e.addEventListener("focus", (function(t) {
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                    ), !0),
                    e.focus(Object.defineProperty({}, "preventScroll", {
                        get: function() {
                            t = !0
                        }
                    }))
                } catch (t) {}
                if (void 0 === HTMLElement.prototype.nativeFocus && !t) {
                    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
                    var i = function(t) {
                        for (var e = 0; e < t.length; e++)
                            t[e][0].scrollTop = t[e][1],
                            t[e][0].scrollLeft = t[e][2];
                        t = []
                    };
                    HTMLElement.prototype.focus = function(t) {
                        if (t && t.preventScroll) {
                            var e = function(t) {
                                for (var e = t.parentNode, i = [], n = document.scrollingElement || document.documentElement; e && e !== n; )
                                    (e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth) && i.push([e, e.scrollTop, e.scrollLeft]),
                                    e = e.parentNode;
                                return e = n,
                                i.push([e, e.scrollTop, e.scrollLeft]),
                                i
                            }(this);
                            this.nativeFocus(),
                            "function" == typeof setTimeout ? setTimeout((function() {
                                i(e)
                            }
                            ), 0) : i(e)
                        } else
                            this.nativeFocus()
                    }
                }
            }
        }()
    },
    9725: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , g = i(4542)
          , f = {};
        f.styleTagTransform = w(),
        f.setAttributes = u(),
        f.insert = l().bind(null, "head"),
        f.domAPI = r(),
        f.insertStyleElement = p();
        o()(g.Z, f);
        e.default = g.Z && g.Z.locals ? g.Z.locals : void 0
    },
    5430: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , g = i(8901)
          , f = {};
        f.styleTagTransform = w(),
        f.setAttributes = u(),
        f.insert = l().bind(null, "head"),
        f.domAPI = r(),
        f.insertStyleElement = p();
        o()(g.Z, f);
        e.default = g.Z && g.Z.locals ? g.Z.locals : void 0
    },
    678: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , g = i(3591)
          , f = {};
        f.styleTagTransform = w(),
        f.setAttributes = u(),
        f.insert = l().bind(null, "head"),
        f.domAPI = r(),
        f.insertStyleElement = p();
        o()(g.Z, f);
        e.default = g.Z && g.Z.locals ? g.Z.locals : void 0
    },
    8206: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , g = i(2792)
          , f = {};
        f.styleTagTransform = w(),
        f.setAttributes = u(),
        f.insert = l().bind(null, "head"),
        f.domAPI = r(),
        f.insertStyleElement = p();
        o()(g.Z, f);
        e.default = g.Z && g.Z.locals ? g.Z.locals : void 0
    },
    3484: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i(3379)
          , o = i.n(n)
          , a = i(7795)
          , r = i.n(a)
          , s = i(569)
          , l = i.n(s)
          , c = i(3565)
          , u = i.n(c)
          , d = i(9216)
          , p = i.n(d)
          , h = i(4589)
          , w = i.n(h)
          , g = i(8406)
          , f = {};
        f.styleTagTransform = w(),
        f.setAttributes = u(),
        f.insert = l().bind(null, "head"),
        f.domAPI = r(),
        f.insertStyleElement = p();
        o()(g.Z, f);
        e.default = g.Z && g.Z.locals ? g.Z.locals : void 0
    },
    3379: function(t) {
        "use strict";
        var e = [];
        function i(t) {
            for (var i = -1, n = 0; n < e.length; n++)
                if (e[n].identifier === t) {
                    i = n;
                    break
                }
            return i
        }
        function n(t, n) {
            for (var a = {}, r = [], s = 0; s < t.length; s++) {
                var l = t[s]
                  , c = n.base ? l[0] + n.base : l[0]
                  , u = a[c] || 0
                  , d = "".concat(c, " ").concat(u);
                a[c] = u + 1;
                var p = i(d)
                  , h = {
                    css: l[1],
                    media: l[2],
                    sourceMap: l[3],
                    supports: l[4],
                    layer: l[5]
                };
                if (-1 !== p)
                    e[p].references++,
                    e[p].updater(h);
                else {
                    var w = o(h, n);
                    n.byIndex = s,
                    e.splice(s, 0, {
                        identifier: d,
                        updater: w,
                        references: 1
                    })
                }
                r.push(d)
            }
            return r
        }
        function o(t, e) {
            var i = e.domAPI(e);
            i.update(t);
            return function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer)
                        return;
                    i.update(t = e)
                } else
                    i.remove()
            }
        }
        t.exports = function(t, o) {
            var a = n(t = t || [], o = o || {});
            return function(t) {
                t = t || [];
                for (var r = 0; r < a.length; r++) {
                    var s = i(a[r]);
                    e[s].references--
                }
                for (var l = n(t, o), c = 0; c < a.length; c++) {
                    var u = i(a[c]);
                    0 === e[u].references && (e[u].updater(),
                    e.splice(u, 1))
                }
                a = l
            }
        }
    },
    569: function(t) {
        "use strict";
        var e = {};
        t.exports = function(t, i) {
            var n = function(t) {
                if (void 0 === e[t]) {
                    var i = document.querySelector(t);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                        try {
                            i = i.contentDocument.head
                        } catch (t) {
                            i = null
                        }
                    e[t] = i
                }
                return e[t]
            }(t);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            n.appendChild(i)
        }
    },
    9216: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = document.createElement("style");
            return t.setAttributes(e, t.attributes),
            t.insert(e, t.options),
            e
        }
    },
    3565: function(t, e, i) {
        "use strict";
        t.exports = function(t) {
            var e = i.nc;
            e && t.setAttribute("nonce", e)
        }
    },
    7795: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = t.insertStyleElement(t);
            return {
                update: function(i) {
                    !function(t, e, i) {
                        var n = "";
                        i.supports && (n += "@supports (".concat(i.supports, ") {")),
                        i.media && (n += "@media ".concat(i.media, " {"));
                        var o = void 0 !== i.layer;
                        o && (n += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")),
                        n += i.css,
                        o && (n += "}"),
                        i.media && (n += "}"),
                        i.supports && (n += "}");
                        var a = i.sourceMap;
                        a && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")),
                        e.styleTagTransform(n, t, e.options)
                    }(e, t, i)
                },
                remove: function() {
                    !function(t) {
                        if (null === t.parentNode)
                            return !1;
                        t.parentNode.removeChild(t)
                    }(e)
                }
            }
        }
    },
    4589: function(t) {
        "use strict";
        t.exports = function(t, e) {
            if (e.styleSheet)
                e.styleSheet.cssText = t;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(t))
            }
        }
    },
    3207: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-off" viewBox="0 0 240 240" focusable="false"><path d="M210,55v100h-50l20,20h45c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V40c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0H15c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v130c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h45l20-20H30V55H210 M60,205l60-70l60,70H60L60,205z"></path></svg>'
    },
    4851: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-airplay-on" viewBox="0 0 240 240" focusable="false"><path d="M229.9,40v130c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0h-44l-17-20h46V55H30v100h47l-17,20h-45c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V40c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h209.8c2.6-0.2,4.8,1.8,5,4.4C229.9,39.7,229.9,39.9,229.9,40z M104.9,122l15-18l15,18l11,13h44V75H50v60h44L104.9,122z M179.9,205l-60-70l-60,70H179.9z"></path></svg>'
    },
    7938: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-left" viewBox="0 0 240 240" focusable="false"><path d="M55.4,104.4c-1.1,1.1-2.2,2.3-3.1,3.6c-6.9,9.9-4.4,23.5,5.5,30.4L159.7,240l33.9-33.9l-84.9-84.9l84.9-84.9L157.3,0L55.4,104.4L55.4,104.4z"></path></svg>'
    },
    4060: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-arrow-right" viewBox="0 0 240 240" focusable="false"><path d="M183.6,104.4L81.8,0L45.4,36.3l84.9,84.9l-84.9,84.9L79.3,240l101.9-101.7c9.9-6.9,12.4-20.4,5.5-30.4C185.8,106.7,184.8,105.4,183.6,104.4L183.6,104.4z"></path></svg>'
    },
    6038: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-audio-tracks" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M35,34h160v20H35V34z M35,94h160V74H35V94z M35,134h60v-20H35V134z M160,114c-23.4-1.3-43.6,16.5-45,40v50h20c5.2,0.3,9.7-3.6,10-8.9c0-0.4,0-0.7,0-1.1v-20c0.3-5.2-3.6-9.7-8.9-10c-0.4,0-0.7,0-1.1,0h-10v-10c1.5-17.9,17.1-31.3,35-30c17.9-1.3,33.6,12.1,35,30v10H185c-5.2-0.3-9.7,3.6-10,8.9c0,0.4,0,0.7,0,1.1v20c-0.3,5.2,3.6,9.7,8.9,10c0.4,0,0.7,0,1.1,0h20v-50C203.5,130.6,183.4,112.7,160,114z"></path></svg>'
    },
    147: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-buffer" viewBox="0 0 240 240" focusable="false"><path d="M120,186.667a66.667,66.667,0,0,1,0-133.333V40a80,80,0,1,0,80,80H186.667A66.846,66.846,0,0,1,120,186.667Z"></path></svg>'
    },
    7766: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-off" viewBox="0 0 240 240" focusable="false"><path d="M99.4,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C107.9,100,103.8,97.8,99.4,97.8z M144.1,97.8c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6c0,9.6,11.6,11.4,17.7,5.5c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9C152.6,100,148.5,97.8,144.1,97.8L144.1,97.8z M200,60v120H40V60H200 M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z"></path></svg>'
    },
    5806: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-cc-on" viewBox="0 0 240 240" focusable="false"><path d="M215,40H25c-2.7,0-5,2.2-5,5v150c0,2.7,2.2,5,5,5h190c2.7,0,5-2.2,5-5V45C220,42.2,217.8,40,215,40z M108.1,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C90.4,141.7,102,143.5,108.1,137.7z M152.9,137.7c0.7-0.7,1.5-1.5,2.4-2.3l6.6,7.8c-2.2,2.4-5,4.4-8,5.8c-8,3.5-17.3,2.4-24.3-2.9c-3.9-3.6-5.9-8.7-5.5-14v-25.6c0-2.7,0.5-5.3,1.5-7.8c0.9-2.2,2.4-4.3,4.2-5.9c5.7-4.5,13.2-6.2,20.3-4.6c3.3,0.5,6.3,2,8.7,4.3c1.3,1.3,2.5,2.6,3.5,4.2l-7.1,6.9c-2.4-3.7-6.5-5.9-10.9-5.9c-2.4-0.2-4.8,0.7-6.6,2.3c-1.7,1.7-2.5,4.1-2.4,6.5v25.6C135.2,141.7,146.8,143.5,152.9,137.7z"></path></svg>'
    },
    9863: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-close" viewBox="0 0 240 240" focusable="false"><path d="M134.8,120l48.6-48.6c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2l-7.4-7.4c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L120,105.2L71.4,56.6c-1.9-2-5.2-2.1-7.2-0.2c0,0-0.1,0.1-0.2,0.2L56.6,64c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l48.6,48.7l-48.6,48.6c-2,1.9-2.1,5.2-0.2,7.2c0,0,0.1,0.1,0.2,0.2l7.4,7.4c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l48.7-48.6l48.6,48.6c1.9,2,5.2,2.1,7.2,0.2c0,0,0.1-0.1,0.2-0.2l7.4-7.4c2-1.9,2.1-5.2,0.2-7.2c0,0-0.1-0.1-0.2-0.2L134.8,120z"></path></svg>'
    },
    2494: function(t) {
        t.exports = '<svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-floating-close" focusable="false"><path d="M7.41499 5.00001L10.705 1.70501C10.8688 1.51371 10.9544 1.26763 10.9447 1.01595C10.935 0.764278 10.8307 0.525539 10.6526 0.347444C10.4745 0.16935 10.2357 0.0650171 9.98405 0.055296C9.73237 0.0455748 9.48629 0.131181 9.29499 0.295007L5.99999 3.58501L2.70499 0.295007C2.51369 0.131181 2.26762 0.0455748 2.01594 0.055296C1.76426 0.0650171 1.52552 0.16935 1.34743 0.347444C1.16934 0.525539 1.065 0.764278 1.05528 1.01595C1.04556 1.26763 1.13117 1.51371 1.29499 1.70501L4.58499 5.00001L1.29499 8.29501C1.19031 8.38466 1.10529 8.49497 1.04527 8.61904C0.985244 8.7431 0.951515 8.87824 0.946195 9.01596C0.940876 9.15367 0.964081 9.29101 1.01436 9.41933C1.06463 9.54766 1.14089 9.6642 1.23834 9.76166C1.3358 9.85911 1.45235 9.93537 1.58067 9.98565C1.709 10.0359 1.84633 10.0591 1.98405 10.0538C2.12177 10.0485 2.2569 10.0148 2.38096 9.95473C2.50503 9.89471 2.61535 9.80969 2.70499 9.70501L5.99999 6.41501L9.29499 9.70501C9.48629 9.86884 9.73237 9.95444 9.98405 9.94472C10.2357 9.935 10.4745 9.83067 10.6526 9.65257C10.8307 9.47448 10.935 9.23574 10.9447 8.98406C10.9544 8.73239 10.8688 8.48631 10.705 8.29501L7.41499 5.00001Z" fill="white" fill-opacity="0.8"></path></svg>'
    },
    7459: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-off" viewBox="0 0 240 240" focusable="false"><path d="M109.2,134.9l-8.4,50.1c-0.4,2.7-2.4,3.3-4.4,1.4L82,172l-27.9,27.9l-14.2-14.2l27.9-27.9l-14.4-14.4c-1.9-1.9-1.3-3.9,1.4-4.4l50.1-8.4c1.8-0.5,3.6,0.6,4.1,2.4C109.4,133.7,109.4,134.3,109.2,134.9L109.2,134.9z M172.1,82.1L200,54.2L185.8,40l-27.9,27.9l-14.4-14.4c-1.9-1.9-3.9-1.3-4.4,1.4l-8.4,50.1c-0.5,1.8,0.6,3.6,2.4,4.1c0.5,0.2,1.2,0.2,1.7,0l50.1-8.4c2.7-0.4,3.3-2.4,1.4-4.4L172.1,82.1z"></path></svg>'
    },
    4606: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-fullscreen-on" viewBox="0 0 240 240" focusable="false"><path d="M96.3,186.1c1.9,1.9,1.3,4-1.4,4.4l-50.6,8.4c-1.8,0.5-3.7-0.6-4.2-2.4c-0.2-0.6-0.2-1.2,0-1.7l8.4-50.6c0.4-2.7,2.4-3.4,4.4-1.4l14.5,14.5l28.2-28.2l14.3,14.3l-28.2,28.2L96.3,186.1z M195.8,39.1l-50.6,8.4c-2.7,0.4-3.4,2.4-1.4,4.4l14.5,14.5l-28.2,28.2l14.3,14.3l28.2-28.2l14.5,14.5c1.9,1.9,4,1.3,4.4-1.4l8.4-50.6c0.5-1.8-0.6-3.6-2.4-4.2C197,39,196.4,39,195.8,39.1L195.8,39.1z"></path></svg>'
    },
    8675: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-jwplayer-logo" viewBox="0 0 992 1024" focusable="false"><path d="M144 518.4c0 6.4-6.4 6.4-6.4 0l-3.2-12.8c0 0-6.4-19.2-12.8-38.4 0-6.4-6.4-12.8-9.6-22.4-6.4-6.4-16-9.6-28.8-6.4-9.6 3.2-16 12.8-16 22.4s0 16 0 25.6c3.2 25.6 22.4 121.6 32 140.8 9.6 22.4 35.2 32 54.4 22.4 22.4-9.6 28.8-35.2 38.4-54.4 9.6-25.6 60.8-166.4 60.8-166.4 6.4-12.8 9.6-12.8 9.6 0 0 0 0 140.8-3.2 204.8 0 25.6 0 67.2 9.6 89.6 6.4 16 12.8 28.8 25.6 38.4s28.8 12.8 44.8 12.8c6.4 0 16-3.2 22.4-6.4 9.6-6.4 16-12.8 25.6-22.4 16-19.2 28.8-44.8 38.4-64 25.6-51.2 89.6-201.6 89.6-201.6 6.4-12.8 9.6-12.8 9.6 0 0 0-9.6 256-9.6 355.2 0 25.6 6.4 48 12.8 70.4 9.6 22.4 22.4 38.4 44.8 48s48 9.6 70.4-3.2c16-9.6 28.8-25.6 38.4-38.4 12.8-22.4 25.6-48 32-70.4 19.2-51.2 35.2-102.4 51.2-153.6s153.6-540.8 163.2-582.4c0-6.4 0-9.6 0-12.8 0-9.6-6.4-19.2-16-22.4-16-6.4-32 0-38.4 12.8-6.4 16-195.2 470.4-195.2 470.4-6.4 12.8-9.6 12.8-9.6 0 0 0 0-156.8 0-288 0-70.4-35.2-108.8-83.2-118.4-22.4-3.2-44.8 0-67.2 12.8s-35.2 32-48 54.4c-16 28.8-105.6 297.6-105.6 297.6-6.4 12.8-9.6 12.8-9.6 0 0 0-3.2-115.2-6.4-144-3.2-41.6-12.8-108.8-67.2-115.2-51.2-3.2-73.6 57.6-86.4 99.2-9.6 25.6-51.2 163.2-51.2 163.2v3.2z"></path></svg>'
    },
    6641: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-next" viewBox="0 0 240 240" focusable="false"><path d="M165,60v53.3L59.2,42.8C56.9,41.3,55,42.3,55,45v150c0,2.7,1.9,3.8,4.2,2.2L165,126.6v53.3h20v-120L165,60L165,60z"></path></svg>'
    },
    2521: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-pause" viewBox="0 0 240 240" focusable="false"><path d="M100,194.9c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H65c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V45c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h30c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V194.9z M180,45.1c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6V195c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6V45.1z"></path></svg>'
    },
    5147: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-off" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.75V9.75H22V4.78C22 4.21116 21.5389 3.75 20.97 3.75H2.03C1.46116 3.75 1 4.21113 1 4.78V17.72C1 18.2889 1.46119 18.75 2.03 18.75H12V16.75H3V5.75H20ZM14 13.25C14 12.6977 14.4477 12.25 15 12.25H22C22.5523 12.25 23 12.6977 23 13.25V19.25C23 19.8023 22.5523 20.25 22 20.25H15C14.4477 20.25 14 19.8023 14 19.25V13.25ZM10 9.25L8.20711 11.0429L10.7071 13.5429L9.29289 14.9571L6.79289 12.4571L5 14.25V9.25H10Z"></path></svg>'
    },
    1438: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-pip-on" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 5.125V9.125H22V4.155C22 3.58616 21.5389 3.125 20.97 3.125H2.03C1.46116 3.125 1 3.58613 1 4.155V17.095C1 17.6639 1.46119 18.125 2.03 18.125H12V16.125H3V5.125H20ZM14 11.875C14 11.3227 14.4477 10.875 15 10.875H22C22.5523 10.875 23 11.3227 23 11.875V17.875C23 18.4273 22.5523 18.875 22 18.875H15C14.4477 18.875 14 18.4273 14 17.875V11.875ZM6 12.375L7.79289 10.5821L5.29288 8.0821L6.7071 6.66788L9.20711 9.16789L11 7.375V12.375H6Z"></path></svg>'
    },
    6084: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-play" viewBox="0 0 240 240" focusable="false"><path d="M62.8,199.5c-1,0.8-2.4,0.6-3.3-0.4c-0.4-0.5-0.6-1.1-0.5-1.8V42.6c-0.2-1.3,0.7-2.4,1.9-2.6c0.7-0.1,1.3,0.1,1.9,0.4l154.7,77.7c2.1,1.1,2.1,2.8,0,3.8L62.8,199.5z"></path></svg>'
    },
    4777: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-error" viewBox="0 0 36 36" style="width:100%;height:100%;" focusable="false"><path d="M34.6 20.2L10 33.2 27.6 16l7 3.7a.4.4 0 0 1 .2.5.4.4 0 0 1-.2.2zM33.3 0L21 12.2 9 6c-.2-.3-.6 0-.6.5V25L0 33.6 2.5 36 36 2.7z"></path></svg>'
    },
    4119: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-playback-rate" viewBox="0 0 240 240" focusable="false"><path d="M158.83,48.83A71.17,71.17,0,1,0,230,120,71.163,71.163,0,0,0,158.83,48.83Zm45.293,77.632H152.34V74.708h12.952v38.83h38.83ZM35.878,74.708h38.83V87.66H35.878ZM10,113.538H61.755V126.49H10Zm25.878,38.83h38.83V165.32H35.878Z"></path></svg>'
    },
    5058: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-quality-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M55,200H35c-3,0-5-2-5-4c0,0,0,0,0-1v-30c0-3,2-5,4-5c0,0,0,0,1,0h20c3,0,5,2,5,4c0,0,0,0,0,1v30C60,198,58,200,55,200L55,200z M110,195v-70c0-3-2-5-4-5c0,0,0,0-1,0H85c-3,0-5,2-5,4c0,0,0,0,0,1v70c0,3,2,5,4,5c0,0,0,0,1,0h20C108,200,110,198,110,195L110,195z M160,195V85c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v110c0,3,2,5,4,5c0,0,0,0,1,0h20C158,200,160,198,160,195L160,195z M210,195V45c0-3-2-5-4-5c0,0,0,0-1,0h-20c-3,0-5,2-5,4c0,0,0,0,0,1v150c0,3,2,5,4,5c0,0,0,0,1,0h20C208,200,210,198,210,195L210,195z"></path></svg>'
    },
    4886: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-replay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M120,41.9v-20c0-5-4-8-8-4l-44,28a5.865,5.865,0,0,0-3.3,7.6A5.943,5.943,0,0,0,68,56.8l43,29c5,4,9,1,9-4v-20a60,60,0,1,1-60,60H40a80,80,0,1,0,80-79.9Z"></path></svg>'
    },
    6207: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-rewind" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M113.2,131.078a21.589,21.589,0,0,0-17.7-10.6,21.589,21.589,0,0,0-17.7,10.6,44.769,44.769,0,0,0,0,46.3,21.589,21.589,0,0,0,17.7,10.6,21.589,21.589,0,0,0,17.7-10.6,44.769,44.769,0,0,0,0-46.3Zm-17.7,47.2c-7.8,0-14.4-11-14.4-24.1s6.6-24.1,14.4-24.1,14.4,11,14.4,24.1S103.4,178.278,95.5,178.278Zm-43.4,9.7v-51l-4.8,4.8-6.8-6.8,13-13a4.8,4.8,0,0,1,8.2,3.4v62.7l-9.6-.1Zm162-130.2v125.3a4.867,4.867,0,0,1-4.8,4.8H146.6v-19.3h48.2v-96.4H79.1v19.3c0,5.3-3.6,7.2-8,4.3l-41.8-27.9a6.013,6.013,0,0,1-2.7-8,5.887,5.887,0,0,1,2.7-2.7l41.8-27.9c4.4-2.9,8-1,8,4.3v19.3H209.2A4.974,4.974,0,0,1,214.1,57.778Z"></path></svg>'
    },
    9992: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M204,145l-25-14c0.8-3.6,1.2-7.3,1-11c0.2-3.7-0.2-7.4-1-11l25-14c2.2-1.6,3.1-4.5,2-7l-16-26c-1.2-2.1-3.8-2.9-6-2l-25,14c-6-4.2-12.3-7.9-19-11V35c0.2-2.6-1.8-4.8-4.4-5c-0.2,0-0.4,0-0.6,0h-30c-2.6-0.2-4.8,1.8-5,4.4c0,0.2,0,0.4,0,0.6v28c-6.7,3.1-13,6.7-19,11L56,60c-2.2-0.9-4.8-0.1-6,2L35,88c-1.6,2.2-1.3,5.3,0.9,6.9c0,0,0.1,0,0.1,0.1l25,14c-0.8,3.6-1.2,7.3-1,11c-0.2,3.7,0.2,7.4,1,11l-25,14c-2.2,1.6-3.1,4.5-2,7l16,26c1.2,2.1,3.8,2.9,6,2l25-14c5.7,4.6,12.2,8.3,19,11v28c-0.2,2.6,1.8,4.8,4.4,5c0.2,0,0.4,0,0.6,0h30c2.6,0.2,4.8-1.8,5-4.4c0-0.2,0-0.4,0-0.6v-28c7-2.3,13.5-6,19-11l25,14c2.5,1.3,5.6,0.4,7-2l15-26C206.7,149.4,206,146.7,204,145z M120,149.9c-16.5,0-30-13.4-30-30s13.4-30,30-30s30,13.4,30,30c0.3,16.3-12.6,29.7-28.9,30C120.7,149.9,120.4,149.9,120,149.9z"></path></svg>'
    },
    3498: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M190,185c0.2,2.6-1.8,4.8-4.4,5c-0.2,0-0.4,0-0.6,0H55c-2.6,0.2-4.8-1.8-5-4.4c0-0.2,0-0.4,0-0.6V55c-0.2-2.6,1.8-4.8,4.4-5c0.2,0,0.4,0,0.6,0h130c2.6-0.2,4.8,1.8,5,4.4c0,0.2,0,0.4,0,0.6V185z"></path></svg>'
    },
    3918: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.6,39.1,116.4,39.9,116.4,42.8z M212.3,96.4l-14.6-14.6l-23.6,23.6l-23.6-23.6l-14.6,14.6l23.6,23.6l-23.6,23.6l14.6,14.6l23.6-23.6l23.6,23.6l14.6-14.6L188.7,120L212.3,96.4z"></path></svg>'
    },
    8157: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.5,42.8v154.4c0,2.8-1.7,3.6-3.8,1.7l-54.1-48H29c-2.8,0-5.2-2.3-5.2-5.2V94.3c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48C114.8,39.2,116.5,39.9,116.5,42.8z"></path><path d="M136.2,160v-20c11.1,0,20-8.9,20-20s-8.9-20-20-20V80c22.1,0,40,17.9,40,40S158.3,160,136.2,160z"></path><path d="M216.2,120c0-44.2-35.8-80-80-80v20c33.1,0,60,26.9,60,60s-26.9,60-60,60v20C180.4,199.9,216.1,164.1,216.2,120z"></path></svg>'
    },
    3356: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-volume-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M116.4,42.8v154.5c0,2.8-1.7,3.6-3.8,1.7l-54.1-48.1H28.9c-2.8,0-5.2-2.3-5.2-5.2V94.2c0-2.8,2.3-5.2,5.2-5.2h29.6l54.1-48.1C114.7,39.1,116.4,39.9,116.4,42.8z M178.2,120c0-22.7-18.5-41.2-41.2-41.2v20.6c11.4,0,20.6,9.2,20.6,20.6c0,11.4-9.2,20.6-20.6,20.6v20.6C159.8,161.2,178.2,142.7,178.2,120z"></path></svg>'
    },
    8053: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-email" viewBox="0 0 160 160" focusable="false"><path d="M147.3,27.9H11.9L10,29.8v97a3.02,3.02,0,0,0,2.8,3.2H146.6a3.02,3.02,0,0,0,3.2-2.8V31C150.5,29.2,149.2,27.9,147.3,27.9ZM125.6,40.7,80.3,77.1,35,40.7Zm12.1,76.6H22.8V47.7l57.5,46,57.5-46-.1,69.6Z"></path></svg>'
    },
    8711: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M137.8,15H22.1A7.127,7.127,0,0,0,15,22.1V137.8a7.28,7.28,0,0,0,7.1,7.2H84.5V95H67.6V75.5H84.5v-15a23.637,23.637,0,0,1,21.3-25.9,28.08,28.08,0,0,1,4.1-.1c7.2,0,13.7.6,14.9.6V52.7H114.4c-8.5,0-9.7,3.9-9.7,9.7V74.7h19.5l-2.6,19.5H104.7v50.7h33.1a7.3,7.3,0,0,0,7.2-7.2V22A7.13,7.13,0,0,0,137.8,15Z"></path></svg>'
    },
    1983: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M135.237,15.006H24.739A9.427,9.427,0,0,0,15,24.107V135.256a9.553,9.553,0,0,0,9.365,9.737h110.9a9.427,9.427,0,0,0,9.737-9.1V24.081A9.461,9.461,0,0,0,135.237,15.006Zm-81.9,110.512H34.476V63.774h19.5v61.744ZM43.576,55.31A10.994,10.994,0,0,1,32.513,44.45v-.2a11.05,11.05,0,0,1,22.1,0A10.537,10.537,0,0,1,44.6,55.283l-.051,0A4.07,4.07,0,0,1,43.576,55.31Zm81.9,70.208h-19.5v-29.9c0-7.164,0-16.265-9.737-16.265s-11.7,7.8-11.7,16.265v29.9h-19.5V63.774h18.2v8.464h0a19.766,19.766,0,0,1,18.2-9.738c19.5,0,23.4,13,23.4,29.266v33.8h.637Z"></path></svg>'
    },
    1277: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-pinterest" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M80,15A65.127,65.127,0,0,0,15,80a66.121,66.121,0,0,0,39,59.8,62.151,62.151,0,0,1,1.3-14.9c1.3-5.2,8.5-35.1,8.5-35.1a26.386,26.386,0,0,1-2-10.4c0-9.7,5.9-16.9,12.4-16.9,5.9,0,8.5,4.5,8.5,9.7a128.456,128.456,0,0,1-5.9,22.7,9.646,9.646,0,0,0,6.6,12,8.105,8.105,0,0,0,3.8.3c12.4,0,20.8-15.6,20.8-34.4,0-14.3-9.7-24.7-27.3-24.7a30.869,30.869,0,0,0-31.8,30v1.2a19.8,19.8,0,0,0,4.5,13,2.586,2.586,0,0,1,.6,3.3c0,1.3-1.3,3.9-1.3,5.2-.6,2-2,2-3.3,2-9.1-3.9-13-13.6-13-24.7,0-18.2,15.6-40.3,46.1-40.3a38.763,38.763,0,0,1,40.9,36.7v.4c0,25.4-14.3,44.9-35.1,44.9A18.163,18.163,0,0,1,72.7,112s-3.9,14.9-4.5,17.6a46.615,46.615,0,0,1-6.5,13.7,79.828,79.828,0,0,0,18.2,1.9A65.1,65.1,0,0,0,80,15Z"></path></svg>'
    },
    7928: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M136.7,60.7a18.265,18.265,0,0,0-11.6,4.1,83.108,83.108,0,0,0-40-11.5l8.1-25.1,21.1,4.7a14.927,14.927,0,1,0,14.9-16.2,15.418,15.418,0,0,0-13.6,8.1L90.5,18.7a3.75,3.75,0,0,0-4.7,2.7h0L77,52.6A93.15,93.15,0,0,0,34.2,64.1,19.471,19.471,0,0,0,23.3,60,19.137,19.137,0,0,0,5,78.3a19.777,19.777,0,0,0,7.5,14.9v4.1a38.88,38.88,0,0,0,20.4,31.9,85.678,85.678,0,0,0,46.8,12.2,93.7,93.7,0,0,0,46.8-12.2,38.741,38.741,0,0,0,20.4-31.9V93.2A18.324,18.324,0,0,0,155,78.3,18.952,18.952,0,0,0,136.7,60.7Zm-7.5-35.3a6.459,6.459,0,0,1,6.8,6v.8a6.744,6.744,0,0,1-6.8,6.8,6.459,6.459,0,0,1-6.8-6v-.8A7.312,7.312,0,0,1,129.2,25.4ZM47.1,89.2A10.2,10.2,0,1,1,57.3,99.4,10.514,10.514,0,0,1,47.1,89.2Zm57,29.8a31.975,31.975,0,0,1-24.4,7.5h0A34.711,34.711,0,0,1,55.3,119a3.821,3.821,0,1,1,5.2-5.6l.2.2a26.476,26.476,0,0,0,19,5.4h0a28.644,28.644,0,0,0,19-5.4,4,4,0,0,1,5.4,0c2,1.3,2,3.4,0,5.4Zm-2-19.7a10.2,10.2,0,1,1,10.2-10.2,10.514,10.514,0,0,1-10.2,10.2Z"></path></svg>'
    },
    5484: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-tumblr" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M115.3,131.6a30.935,30.935,0,0,1-22,7.3h-.7c-28,0-34.6-20.6-34.6-32.7v-34H46.7A2.9,2.9,0,0,1,44,69.5h0V54.2a6.2,6.2,0,0,1,2.7-4,30.359,30.359,0,0,0,20-27.3,3.574,3.574,0,0,1,3-4,1.7,1.7,0,0,1,1,0H87.4a2.9,2.9,0,0,1,2.7,2.7V48.3h19.3a3.18,3.18,0,0,1,2.7,2V69.6a2.9,2.9,0,0,1-2.7,2.7H90v31.3a8.709,8.709,0,0,0,7.4,9.9,5.7,5.7,0,0,0,1.3.1,58.63,58.63,0,0,0,7.3-1.3,4.953,4.953,0,0,1,2.7-.7c.7,0,1.3.7,2,2l5.3,15.3C115.3,129.6,116,130.3,115.3,131.6Z"></path></svg>'
    },
    6598: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" focusable="false"><path d="M56.8,132.5a75.177,75.177,0,0,0,75.3-75.1V54A53.405,53.405,0,0,0,145,40.5a58.075,58.075,0,0,1-15.4,3.9,27.138,27.138,0,0,0,11.6-14.8A53.038,53.038,0,0,1,124.5,36a25.736,25.736,0,0,0-19.3-8.4A26.12,26.12,0,0,0,78.8,53.4V54a16.5,16.5,0,0,0,.7,5.8,71.966,71.966,0,0,1-54.1-27,23.9,23.9,0,0,0-3.9,13.5A26.043,26.043,0,0,0,33.1,68.2,27.018,27.018,0,0,1,20.9,65v.7A26.15,26.15,0,0,0,42.1,91.4a24.149,24.149,0,0,1-7.1.7,12.625,12.625,0,0,1-5.1-.7,25.657,25.657,0,0,0,24.5,18A53.519,53.519,0,0,1,21.6,121a19.683,19.683,0,0,1-6.4-.7,80.388,80.388,0,0,0,41.6,12.2"></path></svg>'
    },
    4375: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-embed" viewBox="0 0 160 160" focusable="false"><path d="M153.224,81.594,126.971,54.685,117.6,64.061l21.846,21.846L117.6,107.752l8.719,8.719L152.567,90.22a5.583,5.583,0,0,0,1.406-7.782,6.067,6.067,0,0,0-.75-.844ZM33.12,54.685,6.868,80.938A5.973,5.973,0,0,0,6.68,89.47l.188.188L33.12,117.128l9.376-9.376-22.5-21.846L42.5,64.061ZM53.747,134.1,94.437,21.5,106.345,25.9,65.654,138.5Z"></path></svg>'
    },
    1666: function(t) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" class="jw-svg-icon jw-svg-icon-link" viewBox="0 0 160 160" focusable="false"><path d="M79.4,99.6H92.5v2a33.6,33.6,0,0,1-9.8,24.2l-9.8,9.8a34.716,34.716,0,0,1-48.4,0,34.716,34.716,0,0,1,0-48.4l9.2-10.5a33.6,33.6,0,0,1,24.2-9.8h1.9V80H58.5a19.359,19.359,0,0,0-15.1,6.5l-9.8,9.8a20.976,20.976,0,0,0-.5,29.6l.5.5a20.976,20.976,0,0,0,29.6.5l.5-.5,9.8-9.8a20.905,20.905,0,0,0,6.5-15h0v-2ZM135,24.4h0a34.716,34.716,0,0,0-48.4,0L76.1,34.2a33.6,33.6,0,0,0-9.8,24.2v2H79.4v-2a19.359,19.359,0,0,1,6.5-15.1l9.8-9.8a20.976,20.976,0,0,1,29.6-.5l.5.5a20.976,20.976,0,0,1,.5,29.6l-.5.5-10.5,9.8a20.905,20.905,0,0,1-15,6.5H99V93h1.3a33.6,33.6,0,0,0,24.2-9.8l9.8-9.8A34.89,34.89,0,0,0,135,24.4ZM63,106.2l42.5-42.5-9.8-9.8L53.2,96.4Z"></path></svg>'
    },
    549: function(t) {
        t.exports = '<svg class="jw-svg-icon jw-svg-icon-sharing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" focusable="false"><path d="M175,160c-6.9,0.2-13.6,2.6-19,7l-62-39c0.8-2.6,1.2-5.3,1-8c0.2-2.7-0.2-5.4-1-8l62-39c5.4,4.4,12.1,6.8,19,7c16.3,0.3,29.7-12.6,30-28.9c0-0.4,0-0.7,0-1.1c0-16.5-13.5-30-30-30s-30,13.5-30,30c-0.2,2.7,0.2,5.4,1,8L84,97c-5.4-4.4-12.1-6.8-19-7c-16.5,0-30,13.5-30,30s13.5,30,30,30c6.9-0.2,13.6-2.6,19-7l62,39c-0.8,2.6-1.2,5.3-1,8c0,16.5,13.5,30,30,30s30-13.5,30-30S191.6,160,175,160z"></path></svg>'
    },
    7326: function(t, e, i) {
        "use strict";
        function n(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        i.d(e, {
            Z: function() {
                return n
            }
        })
    },
    3144: function(t, e, i) {
        "use strict";
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function o(t, e, i) {
            return e && n(t.prototype, e),
            i && n(t, i),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        i.d(e, {
            Z: function() {
                return o
            }
        })
    }
}]);
