(() => {
    var e, t, r, a, n, i, l, s = {
            8685: (e, t, r) => {
                "use strict";
                var a = r(1078),
                    n = r(8181),
                    i = r(4597),
                    l = r(6128),
                    s = r.n(l),
                    o = r(1744),
                    c = {
                        menuOpen: !1,
                        modalShow: null,
                        userWallet: null
                    },
                    m = a.createContext({}),
                    u = r(8140);

                function d(e) {
                    var t = e.title,
                        r = e.icon,
                        n = e.href,
                        l = e.margined,
                        s = e.onClick,
                        o = n.startsWith("#") ? u.fO : i.OL;
                    return a.createElement(a.Fragment, null, a.createElement(o, {
                        className: "header-nav__link",
                        to: n,
                        onClick: s
                    }, r && a.createElement("img", {
                        src: r,
                        alt: "icon"
                    }), a.createElement("span", null, t)), l && a.createElement("i", {
                        className: "header-nav__margined"
                    }))
                }

                function p(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function h(e) {
                    var t = e.className,
                        r = e.onClick,
                        n = e.children;
                    return a.createElement("div", {
                        className: s()("header-nav", p({}, t, !!t))
                    }, a.createElement(d, {
                        title: "Home",
                        icon: "/assets/images/header/home-icon.png",
                        href: "/",
                        onClick: r,
                        margined: !0
                    }), a.createElement(d, {
                        title: "Mint",
                        icon: "/assets/images/header/about-icon.png",
                        href: "/mint",
                        onClick: r,
                        margined: !0
                    }), a.createElement(d, {
                        title: "Roadmap",
                        icon: "/assets/images/header/roadmap-icon.png",
                        href: "#roadmap",
                        onClick: r,
                        margined: !0
                    }), a.createElement(d, {
                        title: "Utility",
                        icon: "/assets/images/header/utility-icon.png",
                        href: "#utility",
                        onClick: r
                    }), n)
                }

                function g(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function f(e) {
                    var t = e.className,
                        r = e.icon,
                        n = e.text,
                        l = e.to,
                        o = void 0 === l ? "/" : l,
                        c = e.glassIcon,
                        m = e.onClick,
                        u = e.children;
                    return a.createElement(i.OL, {
                        to: o,
                        onClick: m,
                        className: s()("gbutton", g({}, t, !!t))
                    }, a.createElement("span", {
                        className: "gbutton__wrapper"
                    }, r && a.createElement("img", {
                        src: r,
                        alt: "icon",
                        className: "gbutton__icon"
                    }), a.createElement("i", {
                        className: "gbutton__text"
                    }, n), u, a.createElement("img", {
                        src: c || "/assets/images/glass.svg",
                        alt: "glass",
                        className: "gbutton__glass"
                    })))
                }
                r(6313), r(6472);
                var w = "WALLET_MODAL",
                    y = function(e) {
                        return [e.match(/^.{8}/), ".....", e.match(/.{3}$/)].join("")
                    };

                function v(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function E(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? v(Object(r), !0).forEach((function(t) {
                            b(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function b(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function C(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function _() {
                    var e, t, r = (e = (0, a.useContext)(m), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return C(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? C(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        n = r[0],
                        l = r[1],
                        s = (0, a.useMemo)((function() {
                            var e = n.userWallet;
                            return null === e ? "Connect Wallet" : y(e)
                        }), [n]);
                    return a.createElement("div", {
                        className: "header"
                    }, a.createElement("div", {
                        className: "container header__container"
                    }, a.createElement(i.rU, {
                        to: "/",
                        className: "header__logo"
                    }, a.createElement("img", {
                        src: "/assets/images/header/logo-icon.svg",
                        alt: "logo",
                        className: "header__logo_icon"
                    }), a.createElement("img", {
                        src: "/assets/images/header/logo-text.svg",
                        alt: "logo",
                        className: "header__logo_text"
                    })), a.createElement(h, {
                        className: "header__nav"
                    }), a.createElement(f, {
                        text: s,
                        to: "#",
                        className: "header__wallet-btn",
                        glassIcon: "/assets/images/header/btn-glass.svg",
                        onClick: function() {
                            if (null !== n.userWallet) return !1;
                            l(E(E({}, n), {}, {
                                modalShow: w
                            }))
                        }
                    }), a.createElement("button", {
                        className: "burgermenu",
                        onClick: function() {
                            return l(E(E({}, n), {}, {
                                menuOpen: !0
                            }))
                        }
                    }, a.createElement("img", {
                        src: "/assets/images/header/burgermenu.svg",
                        alt: "menuBtn"
                    }))))
                }
                r(9106), r(8351), r(3544);
                var x = r(1361);

                function N(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function S() {
                    var e, t, r = (e = (0, a.useState)(!1), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return N(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? N(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        n = r[0],
                        i = r[1],
                        l = (0, a.useRef)(),
                        s = window.innerWidth > 576;
                    return (0, a.useEffect)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = l.current.getBoundingClientRect().top,
                            a = e <= l.current.getBoundingClientRect().bottom && t >= r;
                        a !== n && i(a)
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = l.current.getBoundingClientRect().top - .7 * window.outerHeight,
                            a = e <= l.current.getBoundingClientRect().bottom - .7 * window.outerHeight && t >= r;
                        a !== n && i(a)
                    }), [n], l), a.createElement("div", {
                        id: "aboutus",
                        ref: l,
                        className: "intro ".concat(s ? n ? "visible" : "hidden" : "")
                    }, a.createElement("div", {
                        className: "intro__content"
                    }, a.createElement("h1", null, a.createElement("span", null, "About"), " ", a.createElement("span", null, "Whalies"), " ", a.createElement("span", null, "NFT")), a.createElement("p", null, "10.000 uniquely generated cute whales roaming the 0pensea. Drawn by hand and assembled by code. No Whalie is the same!"), a.createElement(f, {
                        text: "Mint",
                        className: "intro__btn",
                        to: "/mint"
                    })), a.createElement("div", {
                        className: "intro__background"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/intro/sea@mobile.webp",
                        media: "(max-width: 665px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sea@mobile.png",
                        media: "(max-width: 665px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sea.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sea@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sea@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/intro/sea.png",
                        alt: "content",
                        className: "back"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/intro/palm-left.webp",
                        type: "image/webp"
                    }), a.createElement("img", {
                        src: "/assets/images/intro/palm-left.png",
                        alt: "palm-left",
                        className: "palm-left"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/intro/palm-right.webp",
                        type: "image/webp"
                    }), a.createElement("img", {
                        src: "/assets/images/intro/palm-right.png",
                        alt: "palm-left",
                        className: "palm-right"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/jpg"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/palm-blured.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/palm-blured@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/palm-blured@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/intro/palm-blured.png",
                        alt: "palm-blur",
                        className: "palm-blur"
                    })), a.createElement("div", {
                        className: "intro__clouds"
                    }, a.createElement("svg", {
                        width: "188",
                        height: "72",
                        viewBox: "0 0 188 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("mask", {
                        id: "mask0_320_156",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "188",
                        height: "72"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M138.271 56.3541C131.259 65.6677 119.593 71.7635 106.386 71.7635C94.9371 71.7635 84.6456 67.1821 77.5405 59.8945C75.5773 62.4393 72.6479 64.2057 69.2339 64.6053C60.9187 65.5786 49.4526 66.7035 40.708 66.7275C31.5644 66.7526 19.5333 65.5902 10.9262 64.5929C4.64157 63.8647 0 58.503 0 52.1763C0 46.4122 3.83186 41.543 9.08723 39.9771C8.63352 38.3259 8.39339 36.6034 8.39339 34.8326C8.39339 22.5484 19.9488 12.5901 34.2031 12.5901C42.6377 12.5901 50.1274 16.0769 54.8371 21.4692C57.2943 17.8816 61.4212 15.5278 66.098 15.5278C68.6479 15.5278 71.0344 16.2275 73.076 17.4455C79.861 6.9942 92.24 0 106.386 0C123.338 0 137.751 10.0428 143.043 24.0425C145.282 22.8892 147.796 22.2425 150.452 22.2425C156.487 22.2425 161.788 25.5824 164.803 30.6164L170.732 30.1145C177.439 29.5469 183.773 33.2752 186.532 39.4144C190.85 49.0213 184.767 60.0596 174.281 61.0416C167.997 61.63 161.291 62.0957 155.697 62.1111C148.982 62.1295 142.976 59.4565 138.271 56.3541Z",
                        fill: "white"
                    })), a.createElement("g", {
                        mask: "url(#mask0_320_156)"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M138.271 56.3541C131.259 65.6677 119.593 71.7635 106.386 71.7635C94.9371 71.7635 84.6456 67.1821 77.5405 59.8945C75.5773 62.4393 72.6479 64.2057 69.2339 64.6053C60.9187 65.5786 49.4526 66.7035 40.708 66.7275C31.5644 66.7526 19.5333 65.5902 10.9262 64.5929C4.64157 63.8647 0 58.503 0 52.1763C0 46.4122 3.83186 41.543 9.08723 39.9771C8.63352 38.3259 8.39339 36.6034 8.39339 34.8326C8.39339 22.5484 19.9488 12.5901 34.2031 12.5901C42.6377 12.5901 50.1274 16.0769 54.8371 21.4692C57.2943 17.8816 61.4212 15.5278 66.098 15.5278C68.6479 15.5278 71.0344 16.2275 73.076 17.4455C79.861 6.9942 92.24 0 106.386 0C123.338 0 137.751 10.0428 143.043 24.0425C145.282 22.8892 147.796 22.2425 150.452 22.2425C156.487 22.2425 161.788 25.5824 164.803 30.6164L170.732 30.1145C177.439 29.5469 183.773 33.2752 186.532 39.4144C190.85 49.0213 184.767 60.0596 174.281 61.0416C167.997 61.63 161.291 62.0957 155.697 62.1111C148.982 62.1295 142.976 59.4565 138.271 56.3541Z",
                        fill: "white"
                    }), a.createElement("path", {
                        d: "M34.6231 53.7178C21.8391 52.7649 0.839654 45.1145 0.839654 45.1145L-2.72754 53.7178L-1.04886 79.1078L188.222 69.0357L203.12 48.0522L188.222 31.4753L131.986 9.02295C131.986 9.02295 147.514 34.6228 122.124 48.0522C109.716 54.6151 86.4523 43.6457 86.4523 43.6457C86.4523 43.6457 55.1852 55.2504 34.6231 53.7178Z",
                        fill: "#FCEBFE"
                    }))), a.createElement("svg", {
                        width: "302",
                        height: "122",
                        viewBox: "0 0 302 122",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("mask", {
                        id: "mask0_320_157",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "302",
                        height: "122"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M258.325 93.8386C251.542 105.807 232.46 114.873 209.689 115.663C193.017 116.241 176.906 115.326 166.146 111.245C164.151 113.213 161.406 114.749 158.205 115.492C153.362 116.615 148.655 115.649 145.554 113.266C135.669 118.04 122.854 121.149 108.773 121.637C84.8899 122.466 64.1177 115.52 54.8803 104.896C52.0464 105.252 49.1203 105.439 46.1277 105.439C20.6521 105.439 0 91.9132 0 75.2285C0 58.5438 20.6521 45.0181 46.1277 45.0181C56.088 45.0181 65.311 47.0857 72.8506 50.6012C77.5437 40.0547 89.0537 30.9944 103.874 27.5566C113.177 25.3986 122.284 25.804 129.966 28.2359C132.697 13.2483 154.299 0.980069 180.957 0.0554454C205.728 -0.803727 226.823 8.41046 232.704 21.5634C232.776 21.5588 232.848 21.5553 232.92 21.5528C236.872 21.4157 240.184 24.447 240.319 28.3234C240.319 28.3336 240.319 28.3438 240.32 28.3539C241.238 27.9824 242.231 27.6883 243.307 27.4766C273.842 21.467 300.637 42.2395 301.292 61.0979C301.946 79.9562 288.387 93.8606 268.32 94.5566C264.896 94.6754 261.539 94.4266 258.325 93.8386Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#mask0_320_157)"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M258.325 93.8386C251.542 105.807 232.46 114.873 209.689 115.663C193.017 116.241 176.906 115.326 166.146 111.245C164.151 113.213 161.406 114.749 158.205 115.492C153.362 116.615 148.655 115.649 145.554 113.266C135.669 118.04 122.854 121.149 108.773 121.637C84.8899 122.466 64.1177 115.52 54.8803 104.896C52.0464 105.252 49.1203 105.439 46.1277 105.439C20.6521 105.439 0 91.9132 0 75.2285C0 58.5438 20.6521 45.0181 46.1277 45.0181C56.088 45.0181 65.311 47.0857 72.8506 50.6012C77.5437 40.0547 89.0537 30.9944 103.874 27.5566C113.177 25.3986 122.284 25.804 129.966 28.2359C132.697 13.2483 154.299 0.980069 180.957 0.0554454C205.728 -0.803727 226.823 8.41046 232.704 21.5634C232.776 21.5588 232.848 21.5553 232.92 21.5528C236.872 21.4157 240.184 24.447 240.319 28.3234C240.319 28.3336 240.319 28.3438 240.32 28.3539C241.238 27.9824 242.231 27.6883 243.307 27.4766C273.842 21.467 300.637 42.2395 301.292 61.0979C301.946 79.9562 288.387 93.8606 268.32 94.5566C264.896 94.6754 261.539 94.4266 258.325 93.8386Z",
                        fill: "white"
                    }), a.createElement("path", {
                        d: "M58.1469 97.1278C47.5406 94.9908 26.1499 102.488 26.1499 102.488L24.3633 135.622L152.351 151.052L317.696 110.609L315.26 38.3313L278.065 32.4841C278.065 32.4841 295.626 43.2039 288.785 65.1308C282.451 85.4335 250.291 79.099 250.291 79.099C250.291 79.099 248.18 99.5641 211.635 105.249C191.302 108.412 160.148 94.0418 160.148 94.0418C160.148 94.0418 160.148 101.188 152.351 102.975C145.96 104.44 135.947 99.4017 135.947 99.4017C135.947 99.4017 132.536 105.574 124.74 105.574C110.306 105.574 92.7427 88.5195 84.1343 97.1278C80.8263 100.436 85.9944 107.406 81.5356 108.822C67.7298 113.208 68.1577 99.1449 58.1469 97.1278Z",
                        fill: "#FCEBFE"
                    }))), a.createElement("svg", {
                        width: "238",
                        height: "63",
                        viewBox: "0 0 238 63",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("mask", {
                        id: "mask0_320_158",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "238",
                        height: "63"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M203.566 54.8988C205.83 55.2232 208.214 55.3964 210.674 55.3964C225.508 55.3964 237.533 49.102 237.533 41.3375C237.533 33.5729 225.508 27.2785 210.674 27.2785C210.516 27.2785 210.358 27.2792 210.2 27.2807C207.837 17.4808 196.923 10.0721 183.815 10.0721C173.664 10.0721 164.827 14.5162 160.261 21.0734C158.815 17.1422 154.219 14.2688 148.773 14.2688C144.367 14.2688 140.517 16.1498 138.442 18.9502C134.05 8.03571 119.108 0 101.35 0C80.1426 0 62.9505 11.4614 62.9505 25.5999C62.9505 26.3984 63.0053 27.1883 63.1126 27.9682C59.8038 25.9693 55.4936 24.7605 50.78 24.7605C40.9996 24.7605 32.9557 29.9649 31.9917 36.6332C29.7157 36.2891 27.5518 36.2633 25.6459 36.5203C23.2402 35.9779 20.5143 35.6719 17.6261 35.6719C7.89149 35.6719 0 39.1479 0 43.4358C0 47.7237 7.89149 51.1997 17.6261 51.1997C20.5251 51.1997 23.2606 50.8914 25.6729 50.3453C27.2215 51.1057 28.9594 51.7483 30.8299 52.2216C35.4791 53.3979 39.9058 53.2648 42.9656 52.1006C49.2147 58.3903 67.7303 62.9505 89.5995 62.9505C113.582 62.9505 133.532 57.4662 137.693 50.231C143.382 53.1779 151.242 55.1528 159.977 55.4708C163.951 55.6155 167.768 55.4051 171.303 54.8952C175.507 56.0476 180.25 56.781 185.283 56.9642C192.034 57.21 198.334 56.4309 203.566 54.8988Z",
                        fill: "white"
                    })), a.createElement("g", {
                        mask: "url(#mask0_320_158)"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M203.566 54.8988C205.83 55.2232 208.214 55.3964 210.674 55.3964C225.508 55.3964 237.533 49.102 237.533 41.3375C237.533 33.5729 225.508 27.2785 210.674 27.2785C210.516 27.2785 210.358 27.2792 210.2 27.2807C207.837 17.4808 196.923 10.0721 183.815 10.0721C173.664 10.0721 164.827 14.5162 160.261 21.0734C158.815 17.1422 154.219 14.2688 148.773 14.2688C144.367 14.2688 140.517 16.1498 138.442 18.9502C134.05 8.03571 119.108 0 101.35 0C80.1426 0 62.9505 11.4614 62.9505 25.5999C62.9505 26.3984 63.0053 27.1883 63.1126 27.9682C59.8038 25.9693 55.4936 24.7605 50.78 24.7605C40.9996 24.7605 32.9557 29.9649 31.9917 36.6332C29.7157 36.2891 27.5518 36.2633 25.6459 36.5203C23.2402 35.9779 20.5143 35.6719 17.6261 35.6719C7.89149 35.6719 0 39.1479 0 43.4358C0 47.7237 7.89149 51.1997 17.6261 51.1997C20.5251 51.1997 23.2606 50.8914 25.6729 50.3453C27.2215 51.1057 28.9594 51.7483 30.8299 52.2216C35.4791 53.3979 39.9058 53.2648 42.9656 52.1006C49.2147 58.3903 67.7303 62.9505 89.5995 62.9505C113.582 62.9505 133.532 57.4662 137.693 50.231C143.382 53.1779 151.242 55.1528 159.977 55.4708C163.951 55.6155 167.768 55.4051 171.303 54.8952C175.507 56.0476 180.25 56.781 185.283 56.9642C192.034 57.21 198.334 56.4309 203.566 54.8988Z",
                        fill: "white"
                    }), a.createElement("path", {
                        d: "M38.819 47.003C38.819 47.003 65.4334 50.5702 82.0449 50.5702C109.323 50.5702 122.333 37.3506 122.333 37.3506C122.333 37.3506 131.726 43.2114 138.071 42.1768C143.107 41.3556 149.402 35.6719 149.402 35.6719C149.402 35.6719 178.629 43.9789 193.887 35.6719C212.772 25.39 196.825 12.5901 196.825 12.5901L248.024 28.7474L240.26 55.1866L33.9928 74.2815L25.1797 50.1505L38.819 47.003Z",
                        fill: "#FCEBFE"
                    }))), a.createElement("svg", {
                        width: "302",
                        height: "122",
                        viewBox: "0 0 302 122",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("mask", {
                        id: "mask0_320_159",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "302",
                        height: "122"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M258.325 93.8386C251.542 105.807 232.46 114.873 209.689 115.663C193.017 116.241 176.906 115.326 166.146 111.245C164.151 113.213 161.406 114.749 158.205 115.492C153.362 116.615 148.655 115.649 145.554 113.266C135.669 118.04 122.854 121.149 108.773 121.637C84.8899 122.466 64.1177 115.52 54.8803 104.896C52.0464 105.252 49.1203 105.439 46.1277 105.439C20.6521 105.439 0 91.9132 0 75.2285C0 58.5438 20.6521 45.0181 46.1277 45.0181C56.088 45.0181 65.311 47.0857 72.8506 50.6012C77.5437 40.0547 89.0537 30.9944 103.874 27.5566C113.177 25.3986 122.284 25.804 129.966 28.2359C132.697 13.2483 154.299 0.980069 180.957 0.0554454C205.728 -0.803727 226.823 8.41046 232.704 21.5634C232.776 21.5588 232.848 21.5553 232.92 21.5528C236.872 21.4157 240.184 24.447 240.319 28.3234C240.319 28.3336 240.319 28.3438 240.32 28.3539C241.238 27.9824 242.231 27.6883 243.307 27.4766C273.842 21.467 300.637 42.2395 301.292 61.0979C301.946 79.9562 288.387 93.8606 268.32 94.5566C264.896 94.6754 261.539 94.4266 258.325 93.8386Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#mask0_320_159)"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M258.325 93.8386C251.542 105.807 232.46 114.873 209.689 115.663C193.017 116.241 176.906 115.326 166.146 111.245C164.151 113.213 161.406 114.749 158.205 115.492C153.362 116.615 148.655 115.649 145.554 113.266C135.669 118.04 122.854 121.149 108.773 121.637C84.8899 122.466 64.1177 115.52 54.8803 104.896C52.0464 105.252 49.1203 105.439 46.1277 105.439C20.6521 105.439 0 91.9132 0 75.2285C0 58.5438 20.6521 45.0181 46.1277 45.0181C56.088 45.0181 65.311 47.0857 72.8506 50.6012C77.5437 40.0547 89.0537 30.9944 103.874 27.5566C113.177 25.3986 122.284 25.804 129.966 28.2359C132.697 13.2483 154.299 0.980069 180.957 0.0554454C205.728 -0.803727 226.823 8.41046 232.704 21.5634C232.776 21.5588 232.848 21.5553 232.92 21.5528C236.872 21.4157 240.184 24.447 240.319 28.3234C240.319 28.3336 240.319 28.3438 240.32 28.3539C241.238 27.9824 242.231 27.6883 243.307 27.4766C273.842 21.467 300.637 42.2395 301.292 61.0979C301.946 79.9562 288.387 93.8606 268.32 94.5566C264.896 94.6754 261.539 94.4266 258.325 93.8386Z",
                        fill: "white"
                    }), a.createElement("path", {
                        d: "M58.1469 97.1278C47.5406 94.9908 26.1499 102.488 26.1499 102.488L24.3633 135.622L152.351 151.052L317.696 110.609L315.26 38.3313L278.065 32.4841C278.065 32.4841 295.626 43.2039 288.785 65.1308C282.451 85.4335 250.291 79.099 250.291 79.099C250.291 79.099 248.18 99.5641 211.635 105.249C191.302 108.412 160.148 94.0418 160.148 94.0418C160.148 94.0418 160.148 101.188 152.351 102.975C145.96 104.44 135.947 99.4017 135.947 99.4017C135.947 99.4017 132.536 105.574 124.74 105.574C110.306 105.574 92.7427 88.5195 84.1343 97.1278C80.8263 100.436 85.9944 107.406 81.5356 108.822C67.7298 113.208 68.1577 99.1449 58.1469 97.1278Z",
                        fill: "#FCEBFE"
                    }))), a.createElement("svg", {
                        width: "302",
                        height: "122",
                        viewBox: "0 0 302 122",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("mask", {
                        id: "mask0_320_160",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "302",
                        height: "122"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M258.325 93.8386C251.541 105.807 232.46 114.873 209.689 115.663C193.017 116.241 176.906 115.326 166.146 111.245C164.151 113.213 161.406 114.749 158.205 115.492C153.362 116.615 148.655 115.649 145.554 113.266C135.669 118.04 122.854 121.149 108.773 121.637C84.8899 122.466 64.1175 115.52 54.8802 104.896C52.0464 105.252 49.1203 105.439 46.1277 105.439C20.6521 105.439 0 91.9132 0 75.2284C0 58.5437 20.6521 45.0181 46.1277 45.0181C56.088 45.0181 65.311 47.0856 72.8506 50.6012C77.5438 40.0546 89.0537 30.9944 103.874 27.5566C113.177 25.3986 122.284 25.804 129.966 28.236C132.697 13.2483 154.299 0.980069 180.957 0.0554454C205.728 -0.803728 226.823 8.41048 232.704 21.5634C232.776 21.5589 232.848 21.5553 232.92 21.5528C236.872 21.4157 240.184 24.4471 240.319 28.3234C240.319 28.3336 240.319 28.3438 240.32 28.354C241.238 27.9824 242.231 27.6883 243.307 27.4766C273.842 21.4671 300.637 42.2395 301.292 61.0979C301.946 79.9563 288.387 93.8606 268.32 94.5567C264.895 94.6754 261.539 94.4267 258.325 93.8386Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#mask0_320_160)"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M258.325 93.8386C251.541 105.807 232.46 114.873 209.689 115.663C193.017 116.241 176.906 115.326 166.146 111.245C164.151 113.213 161.406 114.749 158.205 115.492C153.362 116.615 148.655 115.649 145.554 113.266C135.669 118.04 122.854 121.149 108.773 121.637C84.8899 122.466 64.1175 115.52 54.8802 104.896C52.0464 105.252 49.1203 105.439 46.1277 105.439C20.6521 105.439 0 91.9132 0 75.2284C0 58.5437 20.6521 45.0181 46.1277 45.0181C56.088 45.0181 65.311 47.0856 72.8506 50.6012C77.5438 40.0546 89.0537 30.9944 103.874 27.5566C113.177 25.3986 122.284 25.804 129.966 28.236C132.697 13.2483 154.299 0.980069 180.957 0.0554454C205.728 -0.803728 226.823 8.41048 232.704 21.5634C232.776 21.5589 232.848 21.5553 232.92 21.5528C236.872 21.4157 240.184 24.4471 240.319 28.3234C240.319 28.3336 240.319 28.3438 240.32 28.354C241.238 27.9824 242.231 27.6883 243.307 27.4766C273.842 21.4671 300.637 42.2395 301.292 61.0979C301.946 79.9563 288.387 93.8606 268.32 94.5567C264.895 94.6754 261.539 94.4267 258.325 93.8386Z",
                        fill: "white"
                    }), a.createElement("path", {
                        d: "M58.1469 97.1281C47.5406 94.991 26.1499 102.488 26.1499 102.488L24.3633 135.622L152.351 151.052L317.696 110.609L315.26 38.3315L278.065 32.4844C278.065 32.4844 295.626 43.2042 288.785 65.1311C282.451 85.4337 250.291 79.0993 250.291 79.0993C250.291 79.0993 248.18 99.5644 211.635 105.249C191.302 108.412 160.148 94.0421 160.148 94.0421C160.148 94.0421 160.148 101.189 152.351 102.975C145.96 104.44 135.947 99.402 135.947 99.402C135.947 99.402 132.536 105.574 124.74 105.574C110.306 105.574 92.7427 88.5197 84.1343 97.1281C80.8263 100.436 85.9944 107.406 81.5356 108.822C67.7298 113.208 68.1577 99.1451 58.1469 97.1281Z",
                        fill: "#FCEBFE"
                    }))), a.createElement("svg", {
                        width: "188",
                        height: "72",
                        viewBox: "0 0 188 72",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a.createElement("mask", {
                        id: "mask0_320_161",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "188",
                        height: "72"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M138.271 56.3541C131.259 65.6678 119.593 71.7635 106.386 71.7635C94.9372 71.7635 84.6457 67.1821 77.5405 59.8945C75.5773 62.4393 72.6479 64.2057 69.2339 64.6053C60.9187 65.5786 49.4526 66.7035 40.708 66.7275C31.5644 66.7526 19.5333 65.5902 10.9262 64.5929C4.64157 63.8647 0 58.503 0 52.1763C0 46.4122 3.83187 41.543 9.08725 39.9771C8.63353 38.3259 8.39341 36.6034 8.39341 34.8326C8.39341 22.5484 19.9488 12.5901 34.2031 12.5901C42.6377 12.5901 50.1274 16.0769 54.8371 21.4692C57.2943 17.8816 61.4212 15.5278 66.098 15.5278C68.6479 15.5278 71.0344 16.2276 73.076 17.4455C79.861 6.9942 92.24 0 106.386 0C123.338 0 137.751 10.0428 143.043 24.0425C145.282 22.8892 147.796 22.2425 150.452 22.2425C156.487 22.2425 161.788 25.5824 164.803 30.6164L170.732 30.1145C177.439 29.5469 183.773 33.2752 186.532 39.4144C190.85 49.0213 184.767 60.0596 174.281 61.0416C167.997 61.63 161.291 62.0957 155.697 62.1111C148.982 62.1295 142.976 59.4565 138.271 56.3541Z",
                        fill: "white"
                    })), a.createElement("g", {
                        mask: "url(#mask0_320_161)"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M138.271 56.3541C131.259 65.6678 119.593 71.7635 106.386 71.7635C94.9372 71.7635 84.6457 67.1821 77.5405 59.8945C75.5773 62.4393 72.6479 64.2057 69.2339 64.6053C60.9187 65.5786 49.4526 66.7035 40.708 66.7275C31.5644 66.7526 19.5333 65.5902 10.9262 64.5929C4.64157 63.8647 0 58.503 0 52.1763C0 46.4122 3.83187 41.543 9.08725 39.9771C8.63353 38.3259 8.39341 36.6034 8.39341 34.8326C8.39341 22.5484 19.9488 12.5901 34.2031 12.5901C42.6377 12.5901 50.1274 16.0769 54.8371 21.4692C57.2943 17.8816 61.4212 15.5278 66.098 15.5278C68.6479 15.5278 71.0344 16.2276 73.076 17.4455C79.861 6.9942 92.24 0 106.386 0C123.338 0 137.751 10.0428 143.043 24.0425C145.282 22.8892 147.796 22.2425 150.452 22.2425C156.487 22.2425 161.788 25.5824 164.803 30.6164L170.732 30.1145C177.439 29.5469 183.773 33.2752 186.532 39.4144C190.85 49.0213 184.767 60.0596 174.281 61.0416C167.997 61.63 161.291 62.0957 155.697 62.1111C148.982 62.1295 142.976 59.4565 138.271 56.3541Z",
                        fill: "white"
                    }), a.createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M138.271 56.3541C131.259 65.6678 119.593 71.7635 106.386 71.7635C94.9372 71.7635 84.6457 67.1821 77.5405 59.8945C75.5773 62.4393 72.6479 64.2057 69.2339 64.6053C60.9187 65.5786 49.4526 66.7035 40.708 66.7275C31.5644 66.7526 19.5333 65.5902 10.9262 64.5929C4.64157 63.8647 0 58.503 0 52.1763C0 46.4122 3.83187 41.543 9.08725 39.9771C8.63353 38.3259 8.39341 36.6034 8.39341 34.8326C8.39341 22.5484 19.9488 12.5901 34.2031 12.5901C42.6377 12.5901 50.1274 16.0769 54.8371 21.4692C57.2943 17.8816 61.4212 15.5278 66.098 15.5278C68.6479 15.5278 71.0344 16.2276 73.076 17.4455C79.861 6.9942 92.24 0 106.386 0C123.338 0 137.751 10.0428 143.043 24.0425C145.282 22.8892 147.796 22.2425 150.452 22.2425C156.487 22.2425 161.788 25.5824 164.803 30.6164L170.732 30.1145C177.439 29.5469 183.773 33.2752 186.532 39.4144C190.85 49.0213 184.767 60.0596 174.281 61.0416C167.997 61.63 161.291 62.0957 155.697 62.1111C148.982 62.1295 142.976 59.4565 138.271 56.3541Z",
                        fill: "white"
                    }), a.createElement("path", {
                        d: "M34.6231 53.7178C21.8391 52.7649 0.839654 45.1145 0.839654 45.1145L-2.72754 53.7178L-1.04886 79.1078L188.222 69.0357L203.12 48.0522L188.222 31.4753L131.986 9.02295C131.986 9.02295 147.514 34.6228 122.124 48.0522C109.716 54.6151 86.4523 43.6457 86.4523 43.6457C86.4523 43.6457 55.1852 55.2504 34.6231 53.7178Z",
                        fill: "#FCEBFE"
                    })))), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/intro/sun@mobile.webp",
                        media: "(max-width: 665px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sun@mobile.png",
                        media: "(max-width: 665px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sun.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sun@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/intro/sun@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/intro/sun.png",
                        alt: "sun",
                        className: "sun"
                    })), a.createElement("div", {
                        className: "intro__dolphins"
                    }, a.createElement("svg", {
                        className: "dolphin-left",
                        width: "870",
                        height: "893",
                        viewBox: "0 0 870 893",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, a.createElement("path", {
                        className: "wave",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M416.73 739.767C385.827 744.357 366.906 777.298 385.987 802.036C445.84 879.629 565.299 899.84 608.787 760.176C615.511 738.58 596.301 721.322 574.008 717.5V717.5C556.508 714.5 545.008 715 526.508 716C516.785 716.526 506.586 720.088 495.79 723.859C486.045 727.264 475.813 730.838 465.008 732.5C446.929 735.281 431.186 737.62 416.73 739.767V739.767Z",
                        fill: "url(#dolphinPurpleWaterGradient)"
                    }), a.createElement("mask", {
                        id: "dolphinPurpleSceneMask",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "870",
                        height: "787"
                    }, a.createElement("path", {
                        d: "M465.5 733C413.5 741 380.833 745.333 342.5 752L112.5 786.5L0 74L818.5 0L869.5 690L794 700.5L665.5 712C641 715 588.5 720.4 574.5 718C557 715 545.5 715.5 527 716.5C508.5 717.5 488.274 729.496 465.5 733Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#dolphinPurpleSceneMask)"
                    }, a.createElement("rect", {
                        className: "dolphin",
                        x: "307.613",
                        y: "433",
                        width: "403.98",
                        height: "398.209",
                        transform: "rotate(8.46425 307.613 433)",
                        fill: "url(#dolphinPurplePattern)"
                    })), a.createElement("defs", null, a.createElement("pattern", {
                        id: "dolphinPurplePattern",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }, a.createElement("image", {
                        width: "1000",
                        height: "1000",
                        xlinkHref: "/assets/images/intro/dolphin-purple.png",
                        transform: "translate(0 -0.00724643) scale(0.001)"
                    })), a.createElement("linearGradient", {
                        id: "dolphinPurpleWaterGradient",
                        x1: "488.75",
                        y1: "715.226",
                        x2: "488.75",
                        y2: "862.781",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopOpacity: "0.88"
                    }), a.createElement("stop", {
                        offset: "0.676405",
                        stopOpacity: "0"
                    })))), a.createElement("svg", {
                        className: "dolphin-middle",
                        width: "870",
                        height: "893",
                        viewBox: "0 0 870 893",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, a.createElement("path", {
                        className: "wave",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M416.73 739.767C385.827 744.357 366.906 777.298 385.987 802.036C445.84 879.629 565.299 899.84 608.787 760.176C615.511 738.58 596.301 721.322 574.008 717.5V717.5C556.508 714.5 545.008 715 526.508 716C516.785 716.526 506.586 720.088 495.79 723.859C486.045 727.264 475.813 730.838 465.008 732.5C446.929 735.281 431.186 737.62 416.73 739.767V739.767Z",
                        fill: "url(#dolphinBlackWaterGradient)"
                    }), a.createElement("mask", {
                        id: "dolphinBlackSceneMask",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "870",
                        height: "787"
                    }, a.createElement("path", {
                        d: "M465.5 733C413.5 741 380.833 745.333 342.5 752L112.5 786.5L0 74L818.5 0L869.5 690L794 700.5L665.5 712C641 715 588.5 720.4 574.5 718C557 715 545.5 715.5 527 716.5C508.5 717.5 488.274 729.496 465.5 733Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#dolphinBlackSceneMask)"
                    }, a.createElement("rect", {
                        className: "dolphin",
                        x: "307.613",
                        y: "433",
                        width: "403.98",
                        height: "398.209",
                        transform: "rotate(8.46425 307.613 433)",
                        fill: "url(#dolphinBlackPattern)"
                    })), a.createElement("defs", null, a.createElement("pattern", {
                        id: "dolphinBlackPattern",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }, a.createElement("image", {
                        width: "1000",
                        height: "1000",
                        xlinkHref: "/assets/images/intro/dolphin-gray.png",
                        transform: "translate(0 -0.00724643) scale(0.001)"
                    })), a.createElement("linearGradient", {
                        id: "dolphinBlackWaterGradient",
                        x1: "488.75",
                        y1: "715.226",
                        x2: "488.75",
                        y2: "862.781",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopOpacity: "0.88"
                    }), a.createElement("stop", {
                        offset: "0.676405",
                        stopOpacity: "0"
                    })))), a.createElement("svg", {
                        className: "dolphin-right",
                        width: "870",
                        height: "893",
                        viewBox: "0 0 870 893",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, a.createElement("path", {
                        className: "wave",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M416.73 739.767C385.827 744.357 366.906 777.298 385.987 802.036C445.84 879.629 565.299 899.84 608.787 760.176C615.511 738.58 596.301 721.322 574.008 717.5V717.5C556.508 714.5 545.008 715 526.508 716C516.785 716.526 506.586 720.088 495.79 723.859C486.045 727.264 475.813 730.838 465.008 732.5C446.929 735.281 431.186 737.62 416.73 739.767V739.767Z",
                        fill: "url(#dolphinYellowWaterGradient)"
                    }), a.createElement("mask", {
                        id: "dolphinYellowSceneMask",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "870",
                        height: "787"
                    }, a.createElement("path", {
                        d: "M465.5 733C413.5 741 380.833 745.333 342.5 752L112.5 786.5L0 74L818.5 0L869.5 690L794 700.5L665.5 712C641 715 588.5 720.4 574.5 718C557 715 545.5 715.5 527 716.5C508.5 717.5 488.274 729.496 465.5 733Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#dolphinYellowSceneMask)"
                    }, a.createElement("rect", {
                        className: "dolphin",
                        x: "307.613",
                        y: "433",
                        width: "403.98",
                        height: "398.209",
                        transform: "rotate(8.46425 307.613 433)",
                        fill: "url(#dolphinYellowPattern)"
                    })), a.createElement("defs", null, a.createElement("pattern", {
                        id: "dolphinYellowPattern",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }, a.createElement("image", {
                        width: "1000",
                        height: "1000",
                        xlinkHref: "/assets/images/intro/dolphin-yellow.png",
                        transform: "translate(0 -0.00724643) scale(0.001)"
                    })), a.createElement("linearGradient", {
                        id: "dolphinYellowWaterGradient",
                        x1: "488.75",
                        y1: "715.226",
                        x2: "488.75",
                        y2: "862.781",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopOpacity: "0.88"
                    }), a.createElement("stop", {
                        offset: "0.676405",
                        stopOpacity: "0"
                    })))))))
                }

                function O(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function k(e) {
                    var t = e.className,
                        r = e.text,
                        n = e.star,
                        i = e.children;
                    return a.createElement("h2", {
                        className: s()("title", O({}, t, !!t))
                    }, a.createElement("span", null, r), n && a.createElement("img", {
                        src: "/assets/images/star.svg",
                        alt: "star"
                    }), i)
                }
                r(1606);
                var j = r(8765);

                function P(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return A(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? A(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function A(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function I(e) {
                    return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function W(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return M(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? M(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function M(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function L() {
                    W(function(e) {
                        if ("object" !== I(e)) throw Error("Breakpoints must be Object!");
                        var t = P((0, a.useState)(window.innerWidth), 2),
                            r = t[0],
                            n = t[1],
                            i = P((0, a.useState)(null), 2),
                            l = i[0],
                            s = i[1];

                        function o() {
                            var t = window.innerWidth,
                                r = parseInt(e["<"]),
                                a = parseInt(e[">"]);
                            isNaN(r) ? isNaN(a) || (t > a && (!1 === l || null === l) ? (s(!0), n(t)) : t < a && !0 === l && (s(!1), n(t))) : t < r && (!1 === l || null === l) ? (s(!0), n(t)) : t > r && !0 === l && (s(!1), n(t))
                        }
                        return (0, a.useEffect)((function() {
                            o()
                        }), []), (0, a.useEffect)((function() {
                            return window.addEventListener("resize", o),
                                function() {
                                    return window.removeEventListener("resize", o)
                                }
                        }), [l]), [l, r]
                    }({
                        "<": 769
                    }), 1)[0];
                    var e = {
                            slidesPerView: 2,
                            loop: window.innerWidth < 769,
                            centeredSlides: !0,
                            breakpoints: {
                                769: {
                                    slidesPerView: 3,
                                    centeredSlides: !1
                                }
                            }
                        },
                        t = W((0, a.useState)(!1), 2),
                        r = t[0],
                        n = t[1],
                        i = (0, a.useRef)(),
                        l = (0, a.useRef)(),
                        s = window.innerWidth > 576;
                    return (0, a.useEffect)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            a = i.current.getBoundingClientRect().top + window.scrollY + 300,
                            l = e <= i.current.getBoundingClientRect().bottom + window.scrollY && t >= a;
                        l !== r && n(l)
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            a = i.current.getBoundingClientRect().top + window.scrollY + 300,
                            l = e <= i.current.getBoundingClientRect().bottom + window.scrollY && t >= a;
                        l !== r && n(l)
                    }), [r], i), (0, a.useEffect)((function() {
                        var e = l.current,
                            t = e.getContext("2d"),
                            r = e.width = window.innerWidth,
                            a = e.height = window.innerHeight,
                            n = 2 * Math.PI,
                            s = function(e) {
                                return Math.random() * e
                            },
                            o = function(e) {
                                return Math.random() > e
                            },
                            c = new Array(100).fill().map((function(e) {
                                return {
                                    p: {
                                        x: s(r),
                                        y: s(a)
                                    },
                                    v: {
                                        x: s(5) * (o(2) ? 1 : -1),
                                        y: s(2.5) * (o(2.5) ? 1 : -1)
                                    },
                                    s: s(2) + 10,
                                    o: s(1) + .3
                                }
                            }));
                        requestAnimationFrame((function l() {
                            (a !== innerHeight || r !== innerWidth) && (r = e.width = innerWidth, a = e.height = innerHeight), i.current.classList.contains("visible") && (t.clearRect(0, 0, r, a), c.forEach((function(e) {
                                e.p.x += e.v.x, e.p.y += e.v.y, (e.p.x + 10 > r || e.p.x - 10 < 0) && (e.v.x *= -1), (e.p.y + 10 > a || e.p.y - 10 < 0) && (e.v.y *= -1), t.beginPath(), t.arc(e.p.x, e.p.y, e.s, 0, n), t.closePath(), t.fillStyle = "rgba(255,255,255," + e.o + ")", t.fill()
                            }))), requestAnimationFrame(l)
                        }))
                    }), []), a.createElement("div", {
                        className: "whalies"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-left.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-left@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-left@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/whalies-reef-left.png",
                        alt: "reef",
                        className: "whalies-reef-left"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-right@mobile.webp",
                        media: "(max-width: 768px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-right@mobile.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-right.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-right@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/whalies-reef-right@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/whalies-reef-right.png",
                        alt: "reef",
                        className: "whalies-reef-right"
                    })), a.createElement("canvas", {
                        ref: l
                    }), a.createElement("div", {
                        ref: i,
                        className: "whalies__block ".concat(s ? r ? "visible" : "hidden" : "")
                    }, a.createElement("div", {
                        className: "container whalies__container"
                    }, a.createElement(k, {
                        text: "Meet 3D Whalies Soon...",
                        className: "whalies__title"
                    }, a.createElement("img", {
                        src: "/assets/images/figures/fishes.png",
                        alt: "fishes",
                        className: "fishes"
                    })), a.createElement("div", {
                        className: "whalies__slider"
                    }, a.createElement(j.t, e, a.createElement(j.o, null, a.createElement("div", {
                        className: "whalies__item"
                    }, a.createElement("div", {
                        className: "whalies__wrapper"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-y.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-y@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-y@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/whalies3d/dolphin-y.png",
                        alt: "dolphing"
                    })), a.createElement("p", {
                        className: "whalies__text"
                    }, "Bravie")))), a.createElement(j.o, null, a.createElement("div", {
                        className: "whalies__item"
                    }, a.createElement("div", {
                        className: "whalies__wrapper"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-v.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-v@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-v@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/whalies3d/dolphin-v.png",
                        alt: "dolphing"
                    })), a.createElement("p", {
                        className: "whalies__text"
                    }, "Pinkie")))), a.createElement(j.o, null, a.createElement("div", {
                        className: "whalies__item"
                    }, a.createElement("div", {
                        className: "whalies__wrapper"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-b.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-b@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/whalies3d/dolphin-b@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/whalies3d/dolphin-b.png",
                        alt: "dolphing"
                    })), a.createElement("p", {
                        className: "whalies__text"
                    }, "Gentlie")))))))))
                }

                function R(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }
                r(4885), r(3424), r(368), r(6256), r(4503);
                var B = [{
                    id: 0,
                    icon: "/assets/images/utilies/glasses-icon.png",
                    text: "7.5% of royalty fees to DAO wallet and 2.5% cut by Opensea"
                }, {
                    id: 1,
                    icon: "/assets/images/utilies/cactus.svg",
                    text: "Sweep Floor price when the community wants"
                }, {
                    id: 2,
                    icon: "/assets/images/utilies/diamante.svg",
                    text: "Reward distribution to holders with royalty fees from DAO wallet every month"
                }, {
                    id: 3,
                    icon: "/assets/images/utilies/fish-icon.png",
                    text: "Community-oriented utility token $WHALIE is about to launch"
                }];

                function D() {
                    var e, t, r = (e = (0, a.useState)(!1), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return R(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? R(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        n = r[0],
                        i = r[1],
                        l = (0, a.useRef)(),
                        s = (0, a.useRef)(),
                        o = window.innerWidth > 576;
                    return (0, a.useEffect)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = l.current.getBoundingClientRect().top + window.scrollY + 300,
                            a = e <= l.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== n && i(a)
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = l.current.getBoundingClientRect().top + window.scrollY + 300,
                            a = e <= l.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== n && i(a);
                        var o = t - r;
                        a && o <= 600 && (s.current.style.transform = "matrix(".concat(1.5 - o / 1200, ", 0, 0, ").concat(1.5 - o / 1200, ", 0, ").concat(o / 12 - 50, ")"))
                    }), [n], l), a.createElement("div", {
                        id: "utility",
                        ref: l,
                        className: "utilies ".concat(o ? n ? "visible" : "hidden" : "")
                    }, a.createElement("div", {
                        className: "container utilies__container"
                    }, a.createElement("div", {
                        className: "utilies__left"
                    }, a.createElement(k, {
                        text: "Utility",
                        className: "utilies__title",
                        star: !0
                    }), a.createElement("img", {
                        src: "/assets/images/figures/scribble.svg",
                        alt: "scribble",
                        className: "utilies__scribble"
                    }), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/fish.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/fish@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/fish@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        ref: s,
                        src: "/assets/images/utilies/fish.png",
                        alt: "fish",
                        className: "utilies__fish"
                    }))), a.createElement("div", {
                        className: "utilies__right"
                    }, a.createElement("div", {
                        className: "utilies__wrapper"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/utilies/seaweed.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/seaweed@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/seaweed@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/utilies/seaweed.png",
                        alt: "seaweed",
                        className: "utilies__seaweed"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/utilies/fish.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/fish@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/utilies/fish@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/utilies/fish.png",
                        alt: "fish",
                        className: "utilies__fish-right"
                    })), a.createElement("div", {
                        className: "utilies__paper"
                    }, a.createElement("div", {
                        className: "utilies__list"
                    }, B.map((function(e) {
                        return a.createElement("div", {
                            className: "utilies__item",
                            key: e.id
                        }, a.createElement("div", {
                            className: "utilies__item-icon"
                        }, a.createElement("img", {
                            src: e.icon,
                            alt: "icon"
                        })), a.createElement("p", {
                            className: "utilies__item-text"
                        }, e.text))
                    })), a.createElement(f, {
                        text: "Mint",
                        className: "utilies__item-btn",
                        to: "/mint"
                    }))), a.createElement("p", {
                        className: "utilies__posttext"
                    }, a.createElement("span", null, "As the Whalies world grows, more utility will be added"))))))
                }
                var T = r(6896),
                    H = (r(2492), r(4957), r(909));

                function U(e) {
                    window.open(e, "_blank")
                }

                function Y(e) {
                    return "https://".concat(H.qp[e].toLowerCase(), ".infura.io/v3/", "02cc9088996b4f81ba973074f78fe0e9")
                }

                function F() {
                    return (F = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function q(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }
                var Z = [{
                    id: 0,
                    name: "KENDA",
                    prof: "Co-Founder",
                    image: "/assets/images/team/team-02.jpg",
                    video: "/assets/videos/team-01.mp4",
                    twitter: "https://twitter.com/k3_3nda"
                }, {
                    id: 1,
                    name: "JUNO",
                    prof: "Co-Founder",
                    image: "/assets/images/team/team-01.jpg",
                    video: "/assets/videos/team-02.mp4",
                    twitter: ""
                }, {
                    id: 2,
                    name: "UNDRWTR777",
                    prof: "Head of Marketing",
                    image: "/assets/images/team/team-04.jpg",
                    video: "/assets/videos/team-03.mp4",
                    twitter: "https://twitter.com/willandrich"
                }, {
                    id: 3,
                    name: "ARRNGMNT",
                    prof: "Community Manager",
                    image: "/assets/images/team/team-04.jpg",
                    video: "/assets/videos/team-04.mp4",
                    twitter: ""
                }, {
                    id: 4,
                    name: "BenJammin.eth",
                    prof: "Marketing Advisor",
                    image: "/assets/images/team/team-06.jpg",
                    video: "",
                    twitter: "https://twitter.com/xbenjamminx"
                }, {
                    id: 5,
                    name: "Mariah Angeliq",
                    prof: "[Partner] Singer",
                    image: "/assets/images/team/team-05.jpg",
                    video: "/assets/videos/team-05.mp4",
                    twitter: "https://instagram.com/mariahangeliq"
                }];

                function G() {
                    var e, t, r = {
                            modules: [T.tl],
                            slidesPerView: 2,
                            spaceBetween: 0,
                            grabCursor: !0,
                            pagination: {
                                clickable: !0
                            },
                            breakpoints: {
                                769: {
                                    slidesPerView: 3
                                },
                                991: {
                                    slidesPerView: 4
                                },
                                1441: {
                                    slidesPerView: 5,
                                    grabCursor: !1
                                }
                            }
                        },
                        n = (e = (0, a.useState)(!1), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return q(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? q(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        i = n[0],
                        l = n[1],
                        s = (0, a.useRef)(),
                        o = window.innerWidth > 576;
                    return (0, a.useEffect)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = s.current.getBoundingClientRect().top + window.scrollY + 300,
                            a = e <= s.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== i && l(a)
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = s.current.getBoundingClientRect().top + window.scrollY + 300,
                            a = e <= s.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== i && l(a)
                    }), [i], s), a.createElement("div", {
                        ref: s,
                        className: "team ".concat(o ? i ? "visible" : "hidden" : "")
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-left@mobile.webp",
                        media: "(max-width: 768px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-left@mobile.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-left.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-left@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-left@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/team-reef-left.png",
                        alt: "seaweed",
                        className: "team__ref-left"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-right@mobile.webp",
                        media: "(max-width: 768px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-right@mobile.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-right.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-right@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/team-reef-right@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/team-reef-right.png",
                        alt: "seaweed",
                        className: "team__ref-right"
                    })), a.createElement("img", {
                        src: "/assets/images/figures/fishes-blur.svg",
                        alt: "fishes",
                        className: "team__fishes-blur"
                    }), a.createElement("div", {
                        className: "team__t-wrapper"
                    }, a.createElement(k, {
                        text: "Our Team",
                        className: "team__title",
                        star: !0
                    })), a.createElement("div", {
                        className: "team__slider"
                    }, a.createElement(j.t, F({
                        className: "team__swiper"
                    }, r), Z.map((function(e) {
                        return a.createElement(j.o, {
                            key: e.id,
                            onClick: function() {
                                e.twitter && U(e.twitter)
                            },
                            style: {
                                cursor: e.twitter ? "pointer" : "initial"
                            }
                        }, a.createElement("div", {
                            className: "team__item"
                        }, a.createElement("div", {
                            className: "team__wrapper"
                        }, a.createElement("div", {
                            className: "team__image"
                        }, e.video ? a.createElement("video", {
                            src: e.video,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        }) : a.createElement("img", {
                            src: e.image,
                            alt: "avatar"
                        })), a.createElement("span", {
                            className: "team__name"
                        }, e.name), a.createElement("span", {
                            className: "team__prof"
                        }, e.prof))))
                    })))))
                }

                function $() {
                    return ($ = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function V(e) {
                    return a.createElement("svg", $({
                        viewBox: "0 0 128 117"
                    }, e, {
                        xmlns: "http://www.w3.org/2000/svg"
                    }), a.createElement("path", {
                        d: "M27.0628 108.426C-0.650712 89.4696 -7.74977 51.6362 11.2066 23.9227C30.163 -3.79076 64.4006 -5.63284 92.114 13.3235C119.828 32.2799 139.069 53.2985 120.112 81.0119C101.156 108.725 54.7763 127.382 27.0628 108.426Z"
                    }))
                }

                function z() {
                    return (z = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function X(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return K(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? K(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function K(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }
                r(4281), r(1838);
                var J = {
                    phase1: ["Create Whalies branding", "Create and form Whalies DAO", "Create Whalies DAO wallets (Multi-Sig)", "Launch Whalies collection site", "Launch 10K 2D Whalies collection", "30% of the revenue will go to Whalies DAO wallet"],
                    phase2: ["Launch 6666 3D Whalies collection", "Airdrop 50% of 3D Whalies to all 2D Whalies minters", "Other 50% of the collection for public sale", "$WHALIE Token Generation Event and airdrop to 2D Whalies holders", "50% of the revenue will go to Whalies DAO wallet"],
                    phase3: ["Organize Whalies voting event for Whalies P2E game", "Publish Whalies P2E game whitepaper", "Launch Whalies P2E beta version for Whalies NFT holders", "Extend the team for the public version development"]
                };

                function Q() {
                    var e = X((0, a.useState)(null), 2),
                        t = e[0],
                        r = e[1],
                        n = X((0, a.useState)({
                            width: 0
                        }), 2),
                        i = n[0],
                        l = n[1],
                        s = X((0, a.useState)(!1), 2),
                        o = s[0],
                        c = s[1],
                        m = (0, a.useRef)(),
                        u = window.innerWidth > 576;
                    return (0, a.useEffect)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = m.current.getBoundingClientRect().top + window.scrollY + 300,
                            a = e <= m.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== o && c(a)
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = m.current.getBoundingClientRect().top + window.scrollY + 300,
                            a = e <= m.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== o && c(a)
                    }), [o], m), a.createElement("div", {
                        id: "roadmap",
                        ref: m,
                        className: "roadmap ".concat(u ? o ? "visible" : "hidden" : "")
                    }, a.createElement("img", {
                        src: "/assets/images/figures/fishes-blur.svg",
                        alt: "fishes-blur",
                        className: "roadmap__fishes-blur"
                    }), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@mobile.webp",
                        media: "(max-width: 768px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@mobile.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/roadmap-reef.png",
                        alt: "reef",
                        className: "roadmap__reef roadmap__reef_01"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/roadmap-reef.png",
                        alt: "reef",
                        className: "roadmap__reef roadmap__reef_02"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/roadmap-reef.png",
                        alt: "reef",
                        className: "roadmap__reef roadmap__reef_03"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/roadmap-reef.png",
                        alt: "reef",
                        className: "roadmap__reef roadmap__reef_04"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/bubles.webp",
                        type: "image/webp"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/bubles.png",
                        alt: "bubles",
                        className: "roadmap__bubles"
                    })), a.createElement("div", {
                        className: "container roadmap__container"
                    }, a.createElement("div", {
                        className: "roadmap__t-title"
                    }, a.createElement(k, {
                        text: "Roadmap",
                        className: "roadmap__title",
                        star: !0
                    })), a.createElement("div", {
                        className: "roadmap__arrows"
                    }, a.createElement("button", {
                        className: "roadmap__arrow-btn roadmap__arrow-btn_prev",
                        onClick: function() {
                            return t.slidePrev()
                        }
                    }, a.createElement("img", {
                        src: "/assets/images/prev-arrow.svg",
                        alt: "prev"
                    })), a.createElement("button", {
                        className: "roadmap__arrow-btn roadmap__arrow-btn_next",
                        onClick: function() {
                            return t.slideNext()
                        }
                    }, a.createElement("img", {
                        src: "/assets/images/next-arrow.svg",
                        alt: "next"
                    }))), a.createElement("div", {
                        className: "roadmap__slider"
                    }, a.createElement(j.t, z({
                        className: "roadmap__swiper"
                    }, {
                        slidesPerView: 1,
                        direction: "horizontal",
                        breakpoints: {
                            566: {
                                slidesPerView: 2
                            },
                            769: {
                                direction: "vertical",
                                slidesPerView: 4
                            }
                        }
                    }, {
                        onInit: function(e) {
                            r(e), l({
                                width: e.virtualSize
                            })
                        }
                    }), a.createElement(j.o, null, a.createElement("div", {
                        className: "roadmap-item roadmap-item_first"
                    }, a.createElement("div", {
                        className: "roadmap-item__wrapper"
                    }, a.createElement("img", {
                        src: "/assets/images/roadmap/path-01.svg",
                        alt: "path",
                        className: "roadmap__path roadmap-item__path1"
                    }), a.createElement(k, {
                        text: "Phase 1",
                        className: "roadmap-item__title"
                    }, a.createElement(V, {
                        className: "roadmap-item__title-bubble"
                    })), a.createElement("div", {
                        className: "roadmap__waves",
                        style: i
                    }), a.createElement("div", {
                        className: "roadmap-item__paper"
                    }, a.createElement("ul", {
                        className: "roadmap-item__list"
                    }, J.phase1.map((function(e) {
                        return a.createElement("li", {
                            className: "roadmap-item__point",
                            key: e
                        }, a.createElement("picture", null, a.createElement("source", {
                            srcSet: "/assets/images/listpoint@mobile.png",
                            media: "(max-width: 768px)",
                            type: "image/png"
                        }), a.createElement("img", {
                            src: "/assets/images/listpoint.png",
                            alt: "."
                        })), a.createElement("span", null, e))
                    }))))))), a.createElement(j.o, null, a.createElement("div", {
                        className: "roadmap-item roadmap-item_second"
                    }, a.createElement("div", {
                        className: "roadmap-item__wrapper"
                    }, a.createElement("img", {
                        src: "/assets/images/roadmap/path-02.svg",
                        alt: "path",
                        className: "roadmap__path roadmap-item__path2"
                    }), a.createElement(k, {
                        text: "Phase 2",
                        className: "roadmap-item__title"
                    }, a.createElement(V, {
                        className: "roadmap-item__title-bubble"
                    })), a.createElement("div", {
                        className: "roadmap-item__paper"
                    }, a.createElement("ul", {
                        className: "roadmap-item__list"
                    }, J.phase2.map((function(e) {
                        return a.createElement("li", {
                            className: "roadmap-item__point",
                            key: e
                        }, a.createElement("picture", null, a.createElement("source", {
                            srcSet: "/assets/images/listpoint@mobile.png",
                            media: "(max-width: 768px)",
                            type: "image/png"
                        }), a.createElement("img", {
                            src: "/assets/images/listpoint.png",
                            alt: "."
                        })), a.createElement("span", null, e))
                    }))))))), a.createElement(j.o, null, a.createElement("div", {
                        className: "roadmap-item roadmap-item_third"
                    }, a.createElement("div", {
                        className: "roadmap-item__wrapper"
                    }, a.createElement("img", {
                        src: "/assets/images/roadmap/path-03.svg",
                        alt: "path",
                        className: "roadmap__path roadmap-item__path3"
                    }), a.createElement(k, {
                        text: "Phase 3",
                        className: "roadmap-item__title"
                    }, a.createElement(V, {
                        className: "roadmap-item__title-bubble"
                    })), a.createElement("div", {
                        className: "roadmap-item__paper"
                    }, a.createElement("ul", {
                        className: "roadmap-item__list"
                    }, J.phase3.map((function(e) {
                        return a.createElement("li", {
                            className: "roadmap-item__point",
                            key: e
                        }, a.createElement("picture", null, a.createElement("source", {
                            srcSet: "/assets/images/listpoint@mobile.png",
                            media: "(max-width: 768px)",
                            type: "image/png"
                        }), a.createElement("img", {
                            src: "/assets/images/listpoint.png",
                            alt: "."
                        })), a.createElement("span", null, e))
                    })))))))))))
                }
                r(2243), r(6584);
                var ee = r(3903);

                function te(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return re(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? re(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function re(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function ae() {
                    var e = te((0, a.useState)(!1), 2),
                        t = e[0],
                        r = e[1],
                        n = te((0, a.useState)(window.innerWidth <= 768), 2),
                        i = n[0],
                        l = n[1],
                        s = te((0, a.useState)({}), 2),
                        o = s[0],
                        c = s[1],
                        m = (0, a.useRef)(),
                        u = (0, a.useRef)(),
                        d = window.innerWidth > 576,
                        p = function() {
                            window.innerWidth > 768 && !0 === i ? l(!1) : window.innerWidth <= 768 && !1 === i && l(!0)
                        };
                    return (0, a.useEffect)((function() {
                        var e = window.scrollY,
                            a = window.scrollY + window.outerHeight,
                            n = m.current.getBoundingClientRect().top + window.scrollY + 300,
                            i = e <= m.current.getBoundingClientRect().bottom + window.scrollY && a >= n;
                        i !== t && r(i)
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY,
                            a = window.scrollY + window.outerHeight,
                            n = m.current.getBoundingClientRect().top + window.scrollY + 300,
                            i = e <= m.current.getBoundingClientRect().bottom + window.scrollY && a >= n;
                        i !== t && r(i)
                    }), [t], m), (0, a.useEffect)((function() {
                        var e = u.current,
                            t = e.getContext("2d"),
                            r = e.width = window.innerWidth,
                            a = e.height = window.innerHeight,
                            n = [],
                            i = 0;
                        requestAnimationFrame((function l(s) {
                            if ((a !== innerHeight || r !== innerWidth) && (r = e.width = innerWidth, a = e.height = innerHeight), m.current.classList.contains("visible")) {
                                if (s - i > 300) {
                                    var o = {
                                        position: {
                                            x: Math.random() * window.innerWidth + 1,
                                            y: window.innerHeight
                                        },
                                        nextPosition: {
                                            x: (Math.random() % .5 - 2) * Math.random() % 3 + 1,
                                            y: -2 * Math.random() - 1
                                        },
                                        radius: 10 * Math.random() + 3,
                                        opacity: Math.random() % 1 + .1
                                    };
                                    i = s, n.unshift(o), n.length > 50 && (n = n.slice(0, 50))
                                }
                                t.clearRect(0, 0, r, a), n.forEach((function(e) {
                                    e.position.x += e.nextPosition.x, e.position.y += e.nextPosition.y, e.position.y - 100 <= 0 && (e.opacity *= 0), t.beginPath(), t.arc(e.position.x, e.position.y, e.radius, 0, 2 * Math.PI), t.closePath(), t.fillStyle = "rgba(255,255,255, ".concat(e.opacity, ")"), t.fill()
                                }))
                            } else n = [];
                            requestAnimationFrame(l)
                        }))
                    }), []), (0, a.useEffect)((function() {
                        var e = new ee.MxU({
                            width: window.innerWidth,
                            height: window.outerWidth <= 556 ? window.innerHeight / 2 : window.innerHeight,
                            backgroundAlpha: 0
                        });
                        e.view.classList.add("community__background"), m.current.append(e.view);
                        var t = new ee.jyi.from("/assets/images/community/background.png");
                        t.width = window.innerWidth, t.height = window.outerWidth <= 556 ? window.innerHeight / 2 : window.innerHeight, e.stage.addChild(t);
                        var r = new ee.jyi.from("/assets/images/community/distortion-map.png"),
                            a = new ee.u8d.DisplacementFilter(r);
                        r.texture.baseTexture.wrapMode = ee.Nt$.REPEAT, e.stage.addChild(r), e.stage.filters = [a], e.renderer.view.style.transform = "scale(1.02)", r.scale.x = 2, r.scale.y = 2,
                            function e() {
                                r.x += 13, r.y += 8, requestAnimationFrame(e)
                            }(), c({
                                image: t,
                                app: e
                            })
                    }), []), (0, a.useEffect)((function() {
                        window.addEventListener("resize", p);
                        var e = o.app,
                            t = o.image;
                        if (e && t && "complete" === document.readyState) {
                            var r = !0 === i ? window.innerHeight : window.innerHeight / 2;
                            return e.view.height = r, t.height = r,
                                function() {
                                    return window.removeEventListener("resize", p)
                                }
                        }
                    }), [i, o]), a.createElement("div", {
                        ref: m,
                        className: "community ".concat(d ? t ? "visible" : "hidden" : "")
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@mobile.webp",
                        media: "(max-width: 768px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@mobile.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/roadmap-reef@3x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/roadmap-reef.png",
                        alt: "reef",
                        className: "community__reef"
                    })), a.createElement("img", {
                        src: "/assets/images/figures/fishes-blur.svg",
                        alt: "fishes",
                        className: "community__fishes-blur"
                    }), a.createElement("div", {
                        className: "container community__container"
                    }, a.createElement("div", {
                        className: "community__content"
                    }, a.createElement(k, {
                        text: "Join Our Community",
                        className: "community__title"
                    }), a.createElement("div", {
                        className: "community__controls"
                    }, a.createElement(f, {
                        icon: "/assets/images/community/discord.svg",
                        text: "Discord",
                        onClick: function() {
                            return U("https://discord.com/invite/gDUQhG8Mz7")
                        },
                        className: "community__btn community__btn_dark"
                    }), a.createElement(f, {
                        icon: "/assets/images/community/telegram.svg",
                        text: "Telegram",
                        onClick: function() {
                            return U("https://t.me/WhaliesDAO")
                        },
                        className: "community__btn community__btn_light"
                    }), a.createElement(f, {
                        icon: "/assets/images/community/twitter.svg",
                        text: "Twitter",
                        className: "community__btn community__btn_light",
                        onClick: function() {
                            return U("https://twitter.com/WhaliesDAO")
                        }
                    }), a.createElement(f, {
                        icon: "/assets/images/community/instagram.svg",
                        text: "Instagram",
                        className: "community__btn community__btn_insta",
                        onClick: function() {
                            return U("https://www.instagram.com/whaliesdao/")
                        }
                    })))), a.createElement("canvas", {
                        ref: u,
                        className: "community_bubbles"
                    }))
                }

                function ne() {
                    return a.createElement(a.Fragment, null, a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/figures/lights@mobile.webp",
                        media: "(max-width: 768px)",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights@mobile.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/lights.png",
                        alt: "lights",
                        className: "page__lights page__lights_fst"
                    })), a.createElement("picture", null, a.createElement("source", {
                        srcSet: "/assets/images/placeholder.png",
                        media: "(max-width: 768px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights.webp",
                        type: "image/webp"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights@3x.png 3x",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: "/assets/images/figures/lights@2x.png 2x",
                        type: "image/png"
                    }), a.createElement("img", {
                        src: "/assets/images/figures/lights.png",
                        alt: "lights",
                        className: "page__lights page__lights_scd"
                    })), a.createElement("div", {
                        className: "page__background"
                    }))
                }

                function ie() {
                    return a.createElement("div", {
                        className: "main"
                    }, a.createElement(ne, null), a.createElement(_, null), a.createElement(S, null), a.createElement(L, null), a.createElement(D, null), a.createElement(G, null), a.createElement(Q, null), a.createElement(ae, null))
                }

                function le(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function se(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? le(Object(r), !0).forEach((function(t) {
                            oe(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : le(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function oe(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function ce(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return me(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? me(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function me(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function ue() {
                    var e = ce((0, a.useContext)(m), 2),
                        t = e[0],
                        r = e[1],
                        n = ce((0, a.useState)(null), 2),
                        i = n[0],
                        l = n[1],
                        o = (0, a.useMemo)((function() {
                            var e = t.userWallet;
                            return null === e ? "Connect Wallet" : y(e)
                        }), [t]),
                        c = function() {
                            r(se(se({}, t), {}, {
                                menuOpen: !1
                            }))
                        },
                        u = function(e) {
                            if (!1 === t.menuOpen || null === i) return !1;
                            e.target.closest(".menu") !== i && c()
                        };
                    return (0, a.useEffect)((function() {
                        return document.addEventListener("click", u),
                            function() {
                                return document.removeEventListener("click", u)
                            }
                    }), [i, t]), a.createElement("div", {
                        className: s()("menu", {
                            opened: t.menuOpen
                        }),
                        ref: l
                    }, a.createElement("div", {
                        className: "menu__header"
                    }, a.createElement(f, {
                        to: "#",
                        text: o,
                        className: "header__wallet-btn menu__btn",
                        glassIcon: "/assets/images/header/btn-glass.svg",
                        onClick: function() {
                            if (null !== t.userWallet) return !1;
                            r(se(se({}, t), {}, {
                                menuOpen: !1,
                                modalShow: w
                            }))
                        }
                    }), a.createElement("button", {
                        className: "menu__close",
                        onClick: c
                    })), a.createElement("div", {
                        className: "menu__body"
                    }, a.createElement(h, {
                        className: "menu__nav",
                        onClick: c
                    }, a.createElement(d, {
                        title: "Mint",
                        icon: "/assets/images/header/mint-icon.png",
                        href: "#",
                        onClick: c
                    }))), a.createElement("div", {
                        className: "menu__footer"
                    }, a.createElement("div", {
                        className: "menu__social"
                    }, a.createElement("a", {
                        href: "/",
                        className: "menu__social-link"
                    }, a.createElement("img", {
                        src: "/assets/images/community/twitter.svg",
                        alt: "link"
                    })), a.createElement("a", {
                        href: "/",
                        className: "menu__social-link menu__social-link_darkblue"
                    }, a.createElement("img", {
                        src: "/assets/images/community/discord.svg",
                        alt: "link"
                    })), a.createElement("a", {
                        href: "/",
                        className: "menu__social-link"
                    }, a.createElement("img", {
                        src: "/assets/images/community/telegram.svg",
                        alt: "link"
                    })))))
                }
                r(3611), r(2471), r.p, r.p;
                const de = r.p + "assets/images/mint/twitter.svg",
                    pe = r.p + "assets/images/mint/discord.svg",
                    he = r.p + "assets/images/mint/send.svg",
                    ge = r.p + "assets/images/mint/instagram.svg",
                    fe = r.p + "assets/images/mint/seabed.png",
                    we = r.p + "assets/images/mint/arrow-down.svg";

                function ye(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }
                const ve = function(e) {
                        var t, r, n = e.title,
                            i = (t = (0, a.useState)(!1), r = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(t) || function(e, t) {
                                var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                                if (null != r) {
                                    var a, n, i = [],
                                        l = !0,
                                        s = !1;
                                    try {
                                        for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                    } catch (e) {
                                        s = !0, n = e
                                    } finally {
                                        try {
                                            l || null == r.return || r.return()
                                        } finally {
                                            if (s) throw n
                                        }
                                    }
                                    return i
                                }
                            }(t, r) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return ye(e, t);
                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ye(e, t) : void 0
                                }
                            }(t, r) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            l = i[0],
                            s = i[1],
                            o = l ? "open" : "",
                            c = (0, a.useRef)(null);
                        return a.createElement("div", {
                            className: "faq-accordion"
                        }, a.createElement("div", {
                            className: "faq-accordion-head ".concat(o),
                            onClick: function() {
                                s(!l), document.querySelector(".faq"), c.current.style.height = l ? "0px" : c.current.scrollHeight + "px"
                            }
                        }, a.createElement("p", null, n), a.createElement("div", {
                            className: "icon"
                        }, a.createElement("img", {
                            src: we,
                            "aria-expanded": l,
                            alt: "icon"
                        }))), a.createElement("div", {
                            ref: c,
                            className: "faq-accordion-body",
                            "aria-expanded": l
                        }, e.children))
                    },
                    Ee = function(e) {
                        return a.createElement("section", {
                            className: "faq"
                        }, a.createElement("div", {
                            className: "faq-bg"
                        }), a.createElement("div", {
                            className: "faq-seabed"
                        }, a.createElement("img", {
                            src: fe,
                            alt: "seabed"
                        })), a.createElement("div", {
                            className: "faq-inner"
                        }, a.createElement("div", {
                            className: "faq-block"
                        }, a.createElement("h2", {
                            className: "title-h2"
                        }, "FAQ"), a.createElement("div", {
                            className: "faq-items"
                        }, a.createElement(ve, {
                            title: "Where can I view my Whalie NFTS?"
                        }, a.createElement("p", null, "Once you have minted a Whalie NFT, you will be able to see it by connecting your crypto wallet to OpenSea or the official website.")), a.createElement(ve, {
                            title: "When will we be able to mint Whalies?"
                        }, a.createElement("p", null, "TBD")), a.createElement(ve, {
                            title: "What is the Whalie NFT mint price?"
                        }, a.createElement("p", null, "The Whalies NFTs price will be 0.08 ETH + gas fees. 30% of all revenue will be used to fund our Whalie DAO treasury.")), a.createElement(ve, {
                            title: "How can you gurantee that 30% af all revenue will be used to fund Whalies DAO treasury?"
                        }, a.createElement("p", null, "We already created our multi-sig wallet for Whalies DAO treasury and it will be managed by our co-founders and the community. And the smart contract will be verified so the community can check how it will be working and how the revenue will be split.")), a.createElement(ve, {
                            title: "Are all 10,000 Whalies really animated?"
                        }, a.createElement("p", null, "All Whalies are animated! We used custom code and programs to achieve this.")), a.createElement(ve, {
                            title: "Will the reveal be delayed?"
                        }, a.createElement("p", null, "Whalies NFTs will be revealed once all 10,000 are minted.")), a.createElement(ve, {
                            title: "What can I do with my Whalie?"
                        }, a.createElement("p", null, "You can use your Whalie as a profile picture online, DAO community vote, and later on, play the Play-2-Earn game.")))), a.createElement("div", {
                            className: "footer"
                        }, a.createElement("div", {
                            className: "footer-logo"
                        }, a.createElement("img", {
                            src: "/assets/images/header/logo-icon.svg",
                            alt: "logo",
                            className: "header__logo_icon"
                        }), a.createElement("img", {
                            src: "/assets/images/header/logo-text.svg",
                            alt: "logo",
                            className: "header__logo_text"
                        })), a.createElement("div", {
                            className: "footer-social"
                        }, a.createElement("a", {
                            href: "https://twitter.com/WhaliesDAO",
                            className: "footer-social-item",
                            target: "_blank"
                        }, a.createElement("img", {
                            src: de,
                            alt: "twitter"
                        })), a.createElement("a", {
                            href: "https://discord.com/invite/gDUQhG8Mz7",
                            className: "footer-social-item",
                            target: "_blank"
                        }, a.createElement("img", {
                            src: pe,
                            alt: "discord"
                        })), a.createElement("a", {
                            href: "https://t.me/WhaliesDAO",
                            className: "footer-social-item",
                            target: "_blank"
                        }, a.createElement("img", {
                            src: he,
                            alt: "telegram"
                        })), a.createElement("a", {
                            href: "https://www.instagram.com/whaliesdao/",
                            className: "footer-social-item",
                            target: "_blank"
                        }, a.createElement("img", {
                            src: ge,
                            alt: "instagram"
                        }))))))
                    };
                var be = r(7279);

                function Ce() {
                    return (Ce = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                        }
                        return e
                    }).apply(this, arguments)
                }
                const _e = function(e) {
                    var t = e.children,
                        r = function(e, t) {
                            if (null == e) return {};
                            var r, a, n = function(e, t) {
                                if (null == e) return {};
                                var r, a, n = {},
                                    i = Object.keys(e);
                                for (a = 0; a < i.length; a++) r = i[a], t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                for (a = 0; a < i.length; a++) r = i[a], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                            }
                            return n
                        }(e, ["children"]);
                    return a.createElement("button", Ce({}, r, {
                        className: be.Z.largeButton
                    }), t)
                };
                r(3105);
                const xe = r.p + "assets/images/mint/star-2.png",
                    Ne = r.p + "assets/images/mint/big-whale.png",
                    Se = r.p + "assets/images/mint/cloud-1.png",
                    Oe = r.p + "assets/images/mint/cloud-5.png",
                    ke = r.p + "assets/images/mint/plus.svg",
                    je = r.p + "assets/images/mint/minus.svg";

                function Pe(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }
                const Ae = function(e) {
                    var t, r, n = (t = (0, a.useState)(1), r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(t, r) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Pe(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Pe(e, t) : void 0
                            }
                        }(t, r) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        i = n[0],
                        l = n[1];
                    return a.createElement("section", {
                        className: "form-section",
                        id: "main-mint"
                    }, a.createElement("div", {
                        className: "container form-container"
                    }, a.createElement("div", {
                        className: "form-section-inner"
                    }, a.createElement("div", {
                        className: "form-section-form-block"
                    }, a.createElement("div", {
                        className: "form-section-title"
                    }, a.createElement("h2", {
                        className: "title-h2"
                    }, "0/10,000"), a.createElement("div", {
                        className: "star"
                    }, a.createElement("img", {
                        src: xe,
                        alt: "star"
                    }))), a.createElement("form", {
                        className: "form-section-form"
                    }, a.createElement("div", {
                        className: "form-field"
                    }, a.createElement("span", {
                        className: "increase",
                        onClick: function() {
                            return l(i < 10 ? i + 1 : i)
                        }
                    }, a.createElement("img", {
                        src: ke,
                        alt: ""
                    })), a.createElement("input", {
                        type: "number",
                        name: "number-input",
                        id: "number-input",
                        value: i
                    }), a.createElement("span", {
                        className: "decrease",
                        onClick: function() {
                            return l(i > 1 ? i - 1 : i)
                        }
                    }, a.createElement("img", {
                        src: je,
                        alt: ""
                    }))), a.createElement(_e, {
                        type: "button"
                    }, "Mint")), a.createElement("div", {
                        className: "form-section-desc"
                    }, a.createElement("p", null, "The Whalies Club is a collection of 10,000 unique ERC-721 tokens stored on the Ethereum Blockchain. Non-sequentially minted and provably unique, each NFT comes with a full membership including functioning utility and an ever-growing community."), a.createElement("p", null, "There is a maximum of 10 Whalies per transaction; 30% of revenue goes to the DAO treasury."))), a.createElement("div", {
                        className: "form-section-img-block"
                    }, a.createElement("div", {
                        className: "form-section-big-whale"
                    }, a.createElement("img", {
                        src: Ne,
                        className: "big-whale",
                        alt: "whale"
                    }), a.createElement("img", {
                        src: Se,
                        className: "cloud cloud-1",
                        alt: "cloud"
                    }), a.createElement("img", {
                        src: Oe,
                        className: "cloud cloud-5",
                        alt: "cloud"
                    }))))))
                };
                r(1248);
                const Ie = r.p + "assets/images/mint/star-1.png",
                    We = r.p + "assets/images/mint/cloud-2.png",
                    Me = r.p + "assets/images/mint/cloud-3.png",
                    Le = r.p + "assets/images/mint/cloud-4.png",
                    Re = (r.p, r.p, r.p, r.p, r.p, r.p, r.p, r.p, r.p, r.p, r.p, r.p, r.p + "assets/videos/main-01.mp4"),
                    Be = r.p + "assets/videos/main-02.mp4",
                    De = r.p + "assets/videos/main-03.mp4",
                    Te = r.p + "assets/videos/main-04.mp4",
                    He = r.p + "assets/videos/main-05.mp4",
                    Ue = r.p + "assets/videos/main-06.mp4",
                    Ye = r.p + "assets/videos/main-07.mp4",
                    Fe = r.p + "assets/videos/main-08.mp4",
                    qe = r.p + "assets/videos/main-09.mp4",
                    Ze = r.p + "assets/videos/main-10.mp4",
                    Ge = r.p + "assets/videos/main-11.mp4",
                    $e = r.p + "assets/videos/main-12.mp4",
                    Ve = r.p + "assets/videos/main-13.mp4",
                    ze = r.p + "assets/videos/main-14.mp4",
                    Xe = function(e) {
                        var t, r, n, i = (0, a.useRef)(null),
                            l = (0, a.useRef)(null),
                            s = (0, a.useRef)(null);
                        (0, a.useEffect)((function() {
                            return n = window.scrollY, window.addEventListener("scroll", m),
                                function() {
                                    return window.removeEventListener("scroll", m)
                                }
                        }), []);
                        var o = -165,
                            c = 0,
                            m = function() {
                                t = i.current.getBoundingClientRect().top, r = i.current.offsetHeight;
                                var e = window.scrollY + t;
                                if (window.pageYOffset + window.innerHeight > e && window.pageYOffset < e + r) {
                                    i.current.classList.add("is-animated");
                                    var a = window.scrollY;
                                    a > n ? (o -= a - n, c += a - n) : (o += n - a, c -= n - a), l.current.style.transform = "rotate(-6.85deg) translate3d(".concat(o, "px, 0, 0)"), s.current.style.transform = "rotate(-6.85deg) translate3d(".concat(c, "px, 0, 0)"), n = a
                                } else window.pageYOffset > e + r ? window.innerWidth > window.innerHeight ? (n = window.scrollY, o = -165 - window.innerHeight, c = window.innerHeight, l.current.style.transform = "rotate(-6.85deg) translate3d(".concat(o, "px, 0, 0)"), s.current.style.transform = "rotate(-6.85deg) translate3d(".concat(c, "px, 0, 0)")) : (n = window.scrollY, o = -165 - window.innerWidth, c = window.innerWidth, l.current.style.transform = "rotate(-6.85deg) translate3d(".concat(o, "px, 0, 0)"), s.current.style.transform = "rotate(-6.85deg) translate3d(".concat(c, "px, 0, 0)")) : window.pageYOffset + window.innerHeight > e && (window.innerWidth > window.innerHeight ? (n = window.scrollY, o = -165 + window.innerHeight, c = -window.innerHeight, l.current.style.transform = "rotate(-6.85deg) translate3d(".concat(o, "px, 0, 0)"), s.current.style.transform = "rotate(-6.85deg) translate3d(".concat(c, "px, 0, 0)")) : (n = window.scrollY, o = -165 + window.innerWidth, c = -window.innerWidth, l.current.style.transform = "rotate(-6.85deg) translate3d(".concat(o, "px, 0, 0)"), s.current.style.transform = "rotate(-6.85deg) translate3d(".concat(c, "px, 0, 0)")))
                            };
                        return a.createElement("section", {
                            className: "main-section"
                        }, a.createElement("div", {
                            className: "main-section-info"
                        }, a.createElement("div", {
                            className: "main-section-title"
                        }, a.createElement("h1", null, "About Whalies NFT"), a.createElement("div", {
                            className: "star"
                        }, a.createElement("img", {
                            src: Ie,
                            alt: "star"
                        }))), a.createElement("p", {
                            className: "main-section-subtitle"
                        }, "10.000 uniquely generated cute whales roaming the 0pensea. Drawn by hand and assembled by code. No Whalie is the same!"), a.createElement("a", {
                            href: "#main-mint"
                        }, a.createElement(_e, null, "Mint"))), a.createElement("img", {
                            className: "cloud cloud-1",
                            src: Se,
                            alt: "cloud"
                        }), a.createElement("img", {
                            className: "cloud cloud-2",
                            src: We,
                            alt: "cloud"
                        }), a.createElement("img", {
                            className: "cloud cloud-3",
                            src: Me,
                            alt: "cloud"
                        }), a.createElement("img", {
                            className: "cloud cloud-4",
                            src: Le,
                            alt: "cloud"
                        }), a.createElement("img", {
                            className: "cloud cloud-5",
                            src: Oe,
                            alt: "cloud"
                        }), a.createElement("div", {
                            className: "whale-cards",
                            ref: i
                        }, a.createElement("div", {
                            className: "whale-cards-wrapper"
                        }, a.createElement("div", {
                            className: "whale-cards-row whale-cards-row-1",
                            ref: l,
                            style: {
                                transition: "all .3s"
                            }
                        }, a.createElement("div", {
                            className: "whale-card whale-card--dark-blue"
                        }, a.createElement("video", {
                            src: Be,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--yellow"
                        }, a.createElement("video", {
                            src: Re,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--pink"
                        }, a.createElement("video", {
                            src: De,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--blue"
                        }, a.createElement("video", {
                            src: Te,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--yellow"
                        }, a.createElement("video", {
                            src: He,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--pink"
                        }, a.createElement("video", {
                            src: Ue,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--green"
                        }, a.createElement("video", {
                            src: Ye,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        }))), a.createElement("div", {
                            className: "whale-cards-row whale-cards-row-2",
                            ref: s,
                            style: {
                                transition: "all .3s"
                            }
                        }, a.createElement("div", {
                            className: "whale-card whale-card--yellow"
                        }, a.createElement("video", {
                            src: Fe,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--blue"
                        }, a.createElement("video", {
                            src: qe,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--pink"
                        }, a.createElement("video", {
                            src: Ze,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--dark-blue"
                        }, a.createElement("video", {
                            src: Ge,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--yellow"
                        }, a.createElement("video", {
                            src: $e,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--pink"
                        }, a.createElement("video", {
                            src: Ve,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        })), a.createElement("div", {
                            className: "whale-card whale-card--green"
                        }, a.createElement("video", {
                            src: ze,
                            muted: !0,
                            preload: "none",
                            playsInline: !0,
                            autoPlay: !0,
                            loop: !0
                        }))))))
                    };
                r(4276), r(6717);
                const Ke = r.p + "assets/images/mint/water.png",
                    Je = r.p + "assets/images/mint/water.webp",
                    Qe = r.p + "assets/images/mint/water@mobile.png",
                    et = r.p + "assets/images/mint/palm-left.png",
                    tt = r.p + "assets/images/mint/palm-right.png",
                    rt = r.p + "assets/images/mint/sun.png",
                    at = r.p + "assets/images/mint/cloud-6.png",
                    nt = r.p + "assets/images/mint/cloud-7.png";

                function it(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }
                const lt = function(e) {
                    var t, r, n, i, l = (n = (0, a.useState)(!1), i = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(n) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(n, i) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return it(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? it(e, t) : void 0
                            }
                        }(n, i) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        s = l[0],
                        o = l[1],
                        c = (0, a.useRef)(),
                        m = (0, a.useRef)(null),
                        u = window.innerWidth > 576;
                    window.innerWidth, (0, a.useEffect)((function() {
                        window.addEventListener("scroll", d), d();
                        var e = window.scrollY,
                            t = window.scrollY + window.outerHeight,
                            r = c.current.getBoundingClientRect().top + 300,
                            a = e <= c.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        return a !== s && o(a),
                            function() {
                                return window.removeEventListener("scroll", d)
                            }
                    }), []), (0, x.R)((function() {
                        var e = window.scrollY + 400,
                            t = window.scrollY + window.outerHeight,
                            r = c.current.getBoundingClientRect().top + window.scrollY,
                            a = e <= c.current.getBoundingClientRect().bottom + window.scrollY && t >= r;
                        a !== s && o(a)
                    }), [s], c);
                    var d = function e() {
                        t = m.current.getBoundingClientRect().top, r = m.current.offsetHeight;
                        var a = window.scrollY + t,
                            n = window.innerHeight - r / 2;
                        r > window.innerHeight && (n = window.innerHeight - window.innerHeight / 2), window.pageYOffset > a - n && window.pageYOffset < a && (m.current.classList.contains("_is-animated") ? window.removeEventListener("scroll", e) : m.current.classList.add("_is-animated"))
                    };
                    return a.createElement("section", {
                        id: "roadmap",
                        className: "mint-roadmap"
                    }, a.createElement("div", {
                        className: "mint-roadmap-inner"
                    }, a.createElement("div", {
                        className: "mint-roadmap-desc-wrapper",
                        ref: m
                    }, a.createElement("div", {
                        className: "mint-roadmap-desc"
                    }, a.createElement("h2", {
                        className: "title-h2"
                    }, "Minting roadmap"), a.createElement("div", {
                        className: "mint-roadmap-list"
                    }, a.createElement("div", {
                        className: "circle-wrapper"
                    }, a.createElement("div", {
                        className: "circle"
                    }), a.createElement("div", {
                        className: "text-wrapper"
                    }, a.createElement("h3", {
                        className: "title-h3"
                    }, "25% Minted"), a.createElement("p", null, "Raffle to win a custom Whalie made by the NFT illustrator team. 10 winners get their own Whalie NFT idea made."))), a.createElement("div", {
                        className: "timeline"
                    }), a.createElement("div", {
                        className: "circle-wrapper"
                    }, a.createElement("div", {
                        className: "circle"
                    }, a.createElement("div", {
                        className: "text-wrapper"
                    }, a.createElement("h3", {
                        className: "title-h3"
                    }, "50% Minted"), a.createElement("p", null, "Whalies merch collection launch, with the option of having your Whalie printed on the merch.")))), a.createElement("div", {
                        className: "timeline"
                    }), a.createElement("div", {
                        className: "circle-wrapper"
                    }, a.createElement("div", {
                        className: "circle"
                    }, a.createElement("div", {
                        className: "text-wrapper"
                    }, a.createElement("h3", {
                        className: "title-h3"
                    }, "75% Minted"), a.createElement("p", null, "A total of 10 Whalies, including one Rare, will be raffled among all the Whalies holders.")))), a.createElement("div", {
                        className: "timeline"
                    }), a.createElement("div", {
                        className: "circle-wrapper"
                    }, a.createElement("div", {
                        className: "circle"
                    }, a.createElement("div", {
                        className: "text-wrapper"
                    }, a.createElement("h3", {
                        className: "title-h3"
                    }, "100% Minted"), a.createElement("p", null, "Charity donation & auction of a special 1:1 NFT for https://savethewhales.org/", a.createElement("br", null), "Release of Mariah's music video(Whalies song).")))))), a.createElement("div", {
                        className: "palm-left"
                    }, a.createElement("img", {
                        src: et,
                        alt: "palm"
                    })), a.createElement("div", {
                        className: "palm-right"
                    }, a.createElement("img", {
                        src: tt,
                        alt: "palm"
                    })), a.createElement("div", {
                        className: "cloud cloud-1"
                    }, a.createElement("img", {
                        src: Se,
                        alt: "cloud"
                    })), a.createElement("div", {
                        className: "cloud cloud-6"
                    }, a.createElement("img", {
                        src: at,
                        alt: "cloud"
                    })), a.createElement("div", {
                        className: "cloud cloud-7"
                    }, a.createElement("img", {
                        src: nt,
                        alt: "cloud"
                    }))), a.createElement("div", {
                        ref: c,
                        className: "mint-roadmap-sea-block ".concat(u ? s ? "visible" : "hidden" : "")
                    }, a.createElement("div", {
                        className: "mint-roadmap-sea-wrapper"
                    }, a.createElement("picture", null, a.createElement("source", {
                        srcSet: Qe,
                        media: "(max-width: 665px)",
                        type: "image/png"
                    }), a.createElement("source", {
                        srcSet: Je,
                        type: "image/webp"
                    }), a.createElement("img", {
                        src: Ke,
                        alt: "water",
                        className: "sea"
                    })), a.createElement("img", {
                        src: rt,
                        alt: "sun",
                        className: "sun"
                    })), a.createElement("div", {
                        className: "mint-roadmap__dolphins"
                    }, a.createElement("svg", {
                        className: "dolphin-left",
                        width: "870",
                        height: "893",
                        viewBox: "0 0 870 893",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, a.createElement("path", {
                        className: "wave",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M416.73 739.767C385.827 744.357 366.906 777.298 385.987 802.036C445.84 879.629 565.299 899.84 608.787 760.176C615.511 738.58 596.301 721.322 574.008 717.5V717.5C556.508 714.5 545.008 715 526.508 716C516.785 716.526 506.586 720.088 495.79 723.859C486.045 727.264 475.813 730.838 465.008 732.5C446.929 735.281 431.186 737.62 416.73 739.767V739.767Z",
                        fill: "url(#dolphinPurpleWaterGradient)"
                    }), a.createElement("mask", {
                        id: "dolphinPurpleSceneMask",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "870",
                        height: "787"
                    }, a.createElement("path", {
                        d: "M465.5 733C413.5 741 380.833 745.333 342.5 752L112.5 786.5L0 74L818.5 0L869.5 690L794 700.5L665.5 712C641 715 588.5 720.4 574.5 718C557 715 545.5 715.5 527 716.5C508.5 717.5 488.274 729.496 465.5 733Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#dolphinPurpleSceneMask)"
                    }, a.createElement("rect", {
                        className: "dolphin",
                        x: "307.613",
                        y: "433",
                        width: "403.98",
                        height: "398.209",
                        transform: "rotate(8.46425 307.613 433)",
                        fill: "url(#dolphinPurplePattern)"
                    })), a.createElement("defs", null, a.createElement("pattern", {
                        id: "dolphinPurplePattern",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }, a.createElement("image", {
                        width: "1000",
                        height: "1000",
                        xlinkHref: "/assets/images/intro/dolphin-purple.png",
                        transform: "translate(0 -0.00724643) scale(0.001)"
                    })), a.createElement("linearGradient", {
                        id: "dolphinPurpleWaterGradient",
                        x1: "488.75",
                        y1: "715.226",
                        x2: "488.75",
                        y2: "862.781",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopOpacity: "0.88"
                    }), a.createElement("stop", {
                        offset: "0.676405",
                        stopOpacity: "0"
                    })))), a.createElement("svg", {
                        className: "dolphin-middle",
                        width: "870",
                        height: "893",
                        viewBox: "0 0 870 893",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, a.createElement("path", {
                        className: "wave",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M416.73 739.767C385.827 744.357 366.906 777.298 385.987 802.036C445.84 879.629 565.299 899.84 608.787 760.176C615.511 738.58 596.301 721.322 574.008 717.5V717.5C556.508 714.5 545.008 715 526.508 716C516.785 716.526 506.586 720.088 495.79 723.859C486.045 727.264 475.813 730.838 465.008 732.5C446.929 735.281 431.186 737.62 416.73 739.767V739.767Z",
                        fill: "url(#dolphinBlackWaterGradient)"
                    }), a.createElement("mask", {
                        id: "dolphinBlackSceneMask",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "870",
                        height: "787"
                    }, a.createElement("path", {
                        d: "M465.5 733C413.5 741 380.833 745.333 342.5 752L112.5 786.5L0 74L818.5 0L869.5 690L794 700.5L665.5 712C641 715 588.5 720.4 574.5 718C557 715 545.5 715.5 527 716.5C508.5 717.5 488.274 729.496 465.5 733Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#dolphinBlackSceneMask)"
                    }, a.createElement("rect", {
                        className: "dolphin",
                        x: "307.613",
                        y: "433",
                        width: "403.98",
                        height: "398.209",
                        transform: "rotate(8.46425 307.613 433)",
                        fill: "url(#dolphinBlackPattern)"
                    })), a.createElement("defs", null, a.createElement("pattern", {
                        id: "dolphinBlackPattern",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }, a.createElement("image", {
                        width: "1000",
                        height: "1000",
                        xlinkHref: "/assets/images/intro/dolphin-gray.png",
                        transform: "translate(0 -0.00724643) scale(0.001)"
                    })), a.createElement("linearGradient", {
                        id: "dolphinBlackWaterGradient",
                        x1: "488.75",
                        y1: "715.226",
                        x2: "488.75",
                        y2: "862.781",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopOpacity: "0.88"
                    }), a.createElement("stop", {
                        offset: "0.676405",
                        stopOpacity: "0"
                    })))), a.createElement("svg", {
                        className: "dolphin-right",
                        width: "870",
                        height: "893",
                        viewBox: "0 0 870 893",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink"
                    }, a.createElement("path", {
                        className: "wave",
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M416.73 739.767C385.827 744.357 366.906 777.298 385.987 802.036C445.84 879.629 565.299 899.84 608.787 760.176C615.511 738.58 596.301 721.322 574.008 717.5V717.5C556.508 714.5 545.008 715 526.508 716C516.785 716.526 506.586 720.088 495.79 723.859C486.045 727.264 475.813 730.838 465.008 732.5C446.929 735.281 431.186 737.62 416.73 739.767V739.767Z",
                        fill: "url(#dolphinYellowWaterGradient)"
                    }), a.createElement("mask", {
                        id: "dolphinYellowSceneMask",
                        style: {
                            maskType: "alpha"
                        },
                        maskUnits: "userSpaceOnUse",
                        x: "0",
                        y: "0",
                        width: "870",
                        height: "787"
                    }, a.createElement("path", {
                        d: "M465.5 733C413.5 741 380.833 745.333 342.5 752L112.5 786.5L0 74L818.5 0L869.5 690L794 700.5L665.5 712C641 715 588.5 720.4 574.5 718C557 715 545.5 715.5 527 716.5C508.5 717.5 488.274 729.496 465.5 733Z",
                        fill: "#C4C4C4"
                    })), a.createElement("g", {
                        mask: "url(#dolphinYellowSceneMask)"
                    }, a.createElement("rect", {
                        className: "dolphin",
                        x: "307.613",
                        y: "433",
                        width: "403.98",
                        height: "398.209",
                        transform: "rotate(8.46425 307.613 433)",
                        fill: "url(#dolphinYellowPattern)"
                    })), a.createElement("defs", null, a.createElement("pattern", {
                        id: "dolphinYellowPattern",
                        patternContentUnits: "objectBoundingBox",
                        width: "1",
                        height: "1"
                    }, a.createElement("image", {
                        width: "1000",
                        height: "1000",
                        xlinkHref: "/assets/images/intro/dolphin-yellow.png",
                        transform: "translate(0 -0.00724643) scale(0.001)"
                    })), a.createElement("linearGradient", {
                        id: "dolphinYellowWaterGradient",
                        x1: "488.75",
                        y1: "715.226",
                        x2: "488.75",
                        y2: "862.781",
                        gradientUnits: "userSpaceOnUse"
                    }, a.createElement("stop", {
                        stopOpacity: "0.88"
                    }), a.createElement("stop", {
                        offset: "0.676405",
                        stopOpacity: "0"
                    }))))))))
                };
                r(2982);
                const st = r.p + "assets/images/mint/algae.png",
                    ot = r.p + "assets/images/mint/rarity-whale.png",
                    ct = function(e) {
                        return a.createElement("section", {
                            className: "rarity"
                        }, a.createElement("div", {
                            className: "container"
                        }, a.createElement("div", {
                            className: "rarity-inner"
                        }, a.createElement("div", {
                            className: "rarity-desc"
                        }, a.createElement("h2", {
                            className: "title-h2"
                        }, "Trait Rarity"), a.createElement("p", null, 'The Whalies Club is run by cute and cool whales who live on the blockchain. Whalies are "not normal" NFTs and are unique for their liveliness and art. The club consists of 10,000 algorithmically generated pieces of art assembled from over 300 traits. Each Whalie is animated and comes with a 120-frame GIF that loops perfectly.'), a.createElement("p", null, "Each Whalie has a background, body, hat, mouth, eyes, and an outfit. Attributes are worth between 1 and 100 points. These points depend on the attributes’ uniqueness and rarity. All points combined will determine how rare your Whalie NFT is. But remember, no Whalie is alike, and each of them is unique!"), a.createElement("p", null, "Whalies are proud of their existence and the community they form. Together they create a decentralized autonomous organization (DAO). Club members can vote daily for their most important ideas, making the club decentralized without a hierarchy.")), a.createElement("div", {
                            className: "rarity-table-block"
                        }, a.createElement("div", {
                            className: "rarity-list"
                        }, a.createElement("img", {
                            src: st,
                            className: "algae",
                            alt: "algae"
                        }), a.createElement("img", {
                            src: ot,
                            className: "rarity-whale",
                            alt: "whale"
                        }), a.createElement("ul", null, a.createElement("li", null, a.createElement("span", {
                            className: "list-item-caption"
                        }, "Skins"), a.createElement("span", {
                            className: "list-item-value dark-blue"
                        }, "36")), a.createElement("li", null, a.createElement("span", {
                            className: "list-item-caption"
                        }, "Hats"), a.createElement("span", {
                            className: "list-item-value yellow"
                        }, "82")), a.createElement("li", null, a.createElement("span", {
                            className: "list-item-caption"
                        }, "Eyes"), a.createElement("span", {
                            className: "list-item-value green"
                        }, "52")), a.createElement("li", null, a.createElement("span", {
                            className: "list-item-caption"
                        }, "Mouths"), a.createElement("span", {
                            className: "list-item-value pink"
                        }, "55")), a.createElement("li", null, a.createElement("span", {
                            className: "list-item-caption"
                        }, "Outfits"), a.createElement("span", {
                            className: "list-item-value blue"
                        }, "103")), a.createElement("li", null, a.createElement("span", {
                            className: "list-item-caption"
                        }, "Background"), a.createElement("span", {
                            className: "list-item-value yellow"
                        }, "26"))))))))
                    };

                function mt() {
                    return a.createElement("div", {
                        className: "mint"
                    }, a.createElement(_, null), a.createElement(Xe, null), a.createElement(Ae, null), a.createElement(ct, null), a.createElement(lt, null), a.createElement(Ee, null))
                }

                function ut(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return dt(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? dt(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function dt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function pt() {
                    var e = "complete" === document.readyState,
                        t = ut((0, a.useState)(e), 2),
                        r = t[0],
                        n = t[1],
                        i = ut((0, a.useState)(e), 2),
                        l = i[0],
                        o = i[1];
                    return (0, a.useEffect)((function() {
                        document.addEventListener("readystatechange", (function() {
                            "complete" === document.readyState && n(!0)
                        }))
                    }), []), (0, a.useEffect)((function() {
                        setTimeout((function() {
                            return o(r)
                        }), 1350)
                    }), [r]), !0 === l ? null : a.createElement("div", {
                        className: s()("preloader", {
                            completed: r
                        })
                    }, a.createElement("div", {
                        className: "preloader__logo"
                    }, a.createElement("img", {
                        src: "/assets/images/preloader.png",
                        alt: "preloader-logo"
                    })))
                }

                function ht() {
                    return (ht = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function gt(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function ft(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? gt(Object(r), !0).forEach((function(t) {
                            wt(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gt(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function wt(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function yt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function vt(e) {
                    var t, r, n = (t = (0, a.useContext)(m), r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(t) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(t, r) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return yt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yt(e, t) : void 0
                            }
                        }(t, r) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        i = n[0],
                        l = n[1];
                    return a.createElement("button", ht({}, e, {
                        className: "close-button",
                        onClick: function(t) {
                            if ("function" == typeof e.onClick) return e.onClick(t);
                            l((function(e) {
                                return ft(ft({}, i), {}, {
                                    modalShow: null
                                })
                            }))
                        }
                    }))
                }
                r(9376), r(6705);
                var Et, bt = r(1295),
                    Ct = r(8498),
                    _t = r(6676);

                function xt(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var Nt = new Ct._k({
                        supportedChainIds: [H.a_.Mainnet, H.a_.Rinkeby]
                    }),
                    St = new _t.zw({
                        rpc: (Et = {}, xt(Et, H.a_.Mainnet, Y(H.a_.Mainnet)), xt(Et, H.a_.Rinkeby, Y(H.a_.Rinkeby)), Et),
                        bridge: "https://bridge.walletconnect.org",
                        qrcode: !0,
                        pollingInterval: 15e3,
                        supportedChainIds: [H.a_.Mainnet, H.a_.Rinkeby]
                    });

                function Ot(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function kt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ot(Object(r), !0).forEach((function(t) {
                            jt(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ot(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function jt(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function Pt(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return At(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? At(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function At(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function It(e) {
                    var t = Pt(e.state, 2),
                        r = (t[0], t[1], Pt((0, a.useContext)(m), 2)),
                        n = r[0],
                        i = r[1],
                        l = (0, bt.K)().activate;
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "m-wallet__header"
                    }, a.createElement("span", {
                        className: "m-wallet__header-txt"
                    }, "Connect To a Wallet"), a.createElement(vt, null)), a.createElement("div", {
                        className: "m-wallet__body"
                    }, a.createElement("div", {
                        className: "m-wallet__controls"
                    }, a.createElement("button", {
                        className: "m-wallet__btn brown",
                        onClick: function() {
                            l(Nt), i((function(e) {
                                return kt(kt({}, n), {}, {
                                    modalShow: null
                                })
                            }))
                        }
                    }, a.createElement("span", {
                        className: "m-wallet__btn-wrapper"
                    }, a.createElement("span", {
                        className: "title"
                    }, "Metamask"), a.createElement("img", {
                        className: "icon",
                        src: "/assets/images/modals/metamask.png",
                        alt: "metamask"
                    }), a.createElement("img", {
                        className: "glass",
                        src: "/assets/images/glass.svg",
                        alt: "glass"
                    }))), a.createElement("button", {
                        className: "m-wallet__btn blue",
                        onClick: function() {
                            l(St), i((function(e) {
                                return kt(kt({}, n), {}, {
                                    modalShow: null
                                })
                            }))
                        }
                    }, a.createElement("span", {
                        className: "m-wallet__btn-wrapper"
                    }, a.createElement("span", {
                        className: "title"
                    }, "Wallet Connect"), a.createElement("img", {
                        className: "icon",
                        src: "/assets/images/modals/wallet-connect.png",
                        alt: "metamask"
                    }), a.createElement("img", {
                        className: "glass",
                        src: "/assets/images/glass.svg",
                        alt: "glass"
                    }))))))
                }

                function Wt() {
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "m-wallet__header"
                    }, a.createElement("span", {
                        className: "empty"
                    }, " "), a.createElement("h3", {
                        className: "m-wallet__header-tlt red"
                    }, "Error"), a.createElement(vt, null)), a.createElement("div", {
                        className: "m-wallet__body"
                    }, a.createElement("img", {
                        src: "/assets/images/modals/smile-error.png",
                        alt: "smile",
                        className: "m-wallet__smile"
                    }), a.createElement("p", {
                        className: "m-wallet__txt"
                    }, "Lorem Ipsum Text Message Lorem Ipsum Text Message")))
                }

                function Mt(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function Lt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Mt(Object(r), !0).forEach((function(t) {
                            Rt(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mt(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function Rt(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function Bt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function Dt() {
                    var e, t, r = (e = (0, a.useContext)(m), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Bt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Bt(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        n = r[0],
                        i = r[1];
                    return a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "m-wallet__header"
                    }, a.createElement("span", {
                        className: "empty"
                    }, " "), a.createElement("h3", {
                        className: "m-wallet__header-tlt green"
                    }, "Success"), a.createElement(vt, {
                        onClick: function() {
                            i((function(e) {
                                return Lt(Lt({}, n), {}, {
                                    modalShow: null,
                                    userWallet: "0x18283235003882"
                                })
                            }))
                        }
                    })), a.createElement("div", {
                        className: "m-wallet__body"
                    }, a.createElement("img", {
                        src: "/assets/images/modals/smile-success.png",
                        alt: "smile",
                        className: "m-wallet__smile"
                    }), a.createElement("p", {
                        className: "m-wallet__txt"
                    }, "Lorem Ipsum Text Message Lorem Ipsum Text Message")))
                }

                function Tt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function Ht() {
                    var e, t, r = (e = (0, a.useState)("connect"), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return Tt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Tt(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        n = r[0],
                        i = r[1];
                    return a.createElement("div", {
                        className: "m-wallet"
                    }, "connect" === n && a.createElement(It, {
                        state: [n, i]
                    }), "success" === n && a.createElement(Dt, null), "error" === n && a.createElement(Wt, null))
                }

                function Ut(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function Yt(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? Ut(Object(r), !0).forEach((function(t) {
                            Ft(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ut(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function Ft(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function qt(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                        if (null != r) {
                            var a, n, i = [],
                                l = !0,
                                s = !1;
                            try {
                                for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                            } catch (e) {
                                s = !0, n = e
                            } finally {
                                try {
                                    l || null == r.return || r.return()
                                } finally {
                                    if (s) throw n
                                }
                            }
                            return i
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return Zt(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Zt(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function Zt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function Gt() {
                    var e = qt((0, a.useContext)(m), 2),
                        t = e[0],
                        r = e[1],
                        n = qt((0, a.useState)(null), 2),
                        i = n[0],
                        l = n[1],
                        o = qt((0, a.useState)(!1), 2),
                        c = o[0],
                        u = o[1],
                        d = t.modalShow,
                        p = function(e) {
                            if (e.target !== e.currentTarget) return !1;
                            r(Yt(Yt({}, t), {}, {
                                modalShow: null
                            }))
                        };
                    return (0, a.useEffect)((function() {
                        u(null !== t.modalShow)
                    }), [t]), (0, a.useEffect)((function() {
                        return null !== i && (i.addEventListener("click", p), function() {
                            return i.removeEventListener("click", p)
                        })
                    }), [i]), a.createElement("div", {
                        className: s()("modalWrapper", {
                            visible: c
                        }),
                        ref: l
                    }, d === w && a.createElement(Ht, null))
                }
                r(4910), r(7442);
                var $t, Vt = r(9833);

                function zt(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function Xt(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                var Kt = {
                    readOnlyChainId: H.a_.Mainnet,
                    supportedChains: [H.a_.Mainnet, H.a_.Rinkeby],
                    readOnlyUrls: ($t = {}, Xt($t, H.a_.Mainnet, Y(H.a_.Mainnet)), Xt($t, H.a_.Rinkeby, Y(H.a_.Rinkeby)), $t),
                    pollingInterval: 1e3
                };

                function Jt() {
                    var e, t, r = (e = (0, a.useState)(c), t = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            var r = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                            if (null != r) {
                                var a, n, i = [],
                                    l = !0,
                                    s = !1;
                                try {
                                    for (r = r.call(e); !(l = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); l = !0);
                                } catch (e) {
                                    s = !0, n = e
                                } finally {
                                    try {
                                        l || null == r.return || r.return()
                                    } finally {
                                        if (s) throw n
                                    }
                                }
                                return i
                            }
                        }(e, t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return zt(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zt(e, t) : void 0
                            }
                        }(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        n = r[0],
                        i = r[1];
                    return (0, a.useEffect)((function() {
                        document.body.style.overflow = n.menuOpen || null !== n.modalShow ? "hidden" : ""
                    }), [n]), a.createElement(Vt.M, {
                        config: Kt
                    }, a.createElement(m.Provider, {
                        value: [n, i]
                    }, a.createElement(pt, null), a.createElement("div", {
                        id: "page",
                        className: s()("page", {
                            modal: n.menuOpened
                        })
                    }, a.createElement(o.rs, null, a.createElement(o.AW, {
                        path: "/",
                        component: ie,
                        exact: !0
                    }), a.createElement(o.AW, {
                        path: "/mint",
                        component: mt,
                        exact: !0
                    }), a.createElement(o.l_, {
                        to: "/"
                    })), a.createElement(ue, null), a.createElement(Gt, null))))
                }
                r(4151), n.render(a.createElement(i.VK, null, a.createElement(Jt, null)), document.getElementById("app"))
            },
            6705: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            4910: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            7442: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            2243: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            6584: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            2471: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            3105: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            6472: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            9106: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            6313: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            8351: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            3544: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            1248: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            3611: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            6717: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            4276: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            9376: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            2982: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            4281: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            1838: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            2492: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            4957: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            1606: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            6256: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            4503: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            3424: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            368: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            7279: (e, t, r) => {
                "use strict";
                r.d(t, {
                    Z: () => a
                });
                const a = {
                    largeButton: "hGOv4c7uUaQBeJyW8mCR7"
                };
                var n = r(152)(e.id, {
                    publicPath: "../",
                    locals: !0
                });
                e.hot.dispose(n)
            },
            4151: (e, t, r) => {
                "use strict";
                var a = r(152)(e.id, {
                    publicPath: "../",
                    locals: !1
                });
                e.hot.dispose(a), e.hot.accept(void 0, a)
            },
            3196: () => {}
        },
        o = {};

    function c(e) {
        var t = o[e];
        if (void 0 !== t) {
            if (void 0 !== t.error) throw t.error;
            return t.exports
        }
        var r = o[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        try {
            var a = {
                id: e,
                module: r,
                factory: s[e],
                require: c
            };
            c.i.forEach((function(e) {
                e(a)
            })), r = a.module, a.factory.call(r.exports, r, r.exports, a.require)
        } catch (e) {
            throw r.error = e, e
        }
        return r.loaded = !0, r.exports
    }
    c.m = s, c.c = o, c.i = [], c.amdO = {}, e = [], c.O = (t, r, a, n) => {
        if (!r) {
            var i = 1 / 0;
            for (o = 0; o < e.length; o++) {
                for (var [r, a, n] = e[o], l = !0, s = 0; s < r.length; s++)(!1 & n || i >= n) && Object.keys(c.O).every((e => c.O[e](r[s]))) ? r.splice(s--, 1) : (l = !1, n < i && (i = n));
                l && (e.splice(o--, 1), t = a())
            }
            return t
        }
        n = n || 0;
        for (var o = e.length; o > 0 && e[o - 1][2] > n; o--) e[o] = e[o - 1];
        e[o] = [r, a, n]
    }, c.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return c.d(t, {
            a: t
        }), t
    }, c.d = (e, t) => {
        for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((t, r) => (c.f[r](e, t), t)), [])), c.u = e => e + ".js", c.hu = e => e + "." + c.h() + ".hot-update.js", c.miniCssF = e => {}, c.hmrF = () => "index." + c.h() + ".hot-update.json", c.h = () => "97480c94f1f463c77349", c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), t = {}, c.l = (e, r, a, n) => {
        if (t[e]) t[e].push(r);
        else {
            var i, l;
            if (void 0 !== a)
                for (var s = document.getElementsByTagName("script"), o = 0; o < s.length; o++) {
                    var m = s[o];
                    if (m.getAttribute("src") == e) {
                        i = m;
                        break
                    }
                }
            i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.src = e), t[e] = [r];
            var u = (r, a) => {
                    i.onerror = i.onload = null, clearTimeout(d);
                    var n = t[e];
                    if (delete t[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), r) return r(a)
                },
                d = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), l && document.head.appendChild(i)
        }
    }, c.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e, t, r, a, n = {},
            i = c.c,
            l = [],
            s = [],
            o = "idle";

        function m(e) {
            o = e;
            for (var t = 0; t < s.length; t++) s[t].call(null, e)
        }

        function u(e) {
            if (0 === t.length) return e();
            var r = t;
            return t = [], Promise.all(r).then((function() {
                return u(e)
            }))
        }

        function d(e) {
            if ("idle" !== o) throw new Error("check() is only allowed in idle status");
            return m("check"), c.hmrM().then((function(a) {
                if (!a) return m(g() ? "ready" : "idle"), null;
                m("prepare");
                var n = [];
                return t = [], r = [], Promise.all(Object.keys(c.hmrC).reduce((function(e, t) {
                    return c.hmrC[t](a.c, a.r, a.m, e, r, n), e
                }), [])).then((function() {
                    return u((function() {
                        return e ? h(e) : (m("ready"), n)
                    }))
                }))
            }))
        }

        function p(e) {
            return "ready" !== o ? Promise.resolve().then((function() {
                throw new Error("apply() is only allowed in ready status")
            })) : h(e)
        }

        function h(e) {
            e = e || {}, g();
            var t = r.map((function(t) {
                return t(e)
            }));
            r = void 0;
            var n, i = t.map((function(e) {
                return e.error
            })).filter(Boolean);
            if (i.length > 0) return m("abort"), Promise.resolve().then((function() {
                throw i[0]
            }));
            m("dispose"), t.forEach((function(e) {
                e.dispose && e.dispose()
            })), m("apply");
            var l = function(e) {
                    n || (n = e)
                },
                s = [];
            return t.forEach((function(e) {
                if (e.apply) {
                    var t = e.apply(l);
                    if (t)
                        for (var r = 0; r < t.length; r++) s.push(t[r])
                }
            })), n ? (m("fail"), Promise.resolve().then((function() {
                throw n
            }))) : a ? h(e).then((function(e) {
                return s.forEach((function(t) {
                    e.indexOf(t) < 0 && e.push(t)
                })), e
            })) : (m("idle"), Promise.resolve(s))
        }

        function g() {
            if (a) return r || (r = []), Object.keys(c.hmrI).forEach((function(e) {
                a.forEach((function(t) {
                    c.hmrI[e](t, r)
                }))
            })), a = void 0, !0
        }
        c.hmrD = n, c.i.push((function(h) {
            var g, f, w, y, v = h.module,
                E = function(r, a) {
                    var n = i[a];
                    if (!n) return r;
                    var s = function(t) {
                            if (n.hot.active) {
                                if (i[t]) {
                                    var s = i[t].parents; - 1 === s.indexOf(a) && s.push(a)
                                } else l = [a], e = t; - 1 === n.children.indexOf(t) && n.children.push(t)
                            } else console.warn("[HMR] unexpected require(" + t + ") from disposed module " + a), l = [];
                            return r(t)
                        },
                        c = function(e) {
                            return {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return r[e]
                                },
                                set: function(t) {
                                    r[e] = t
                                }
                            }
                        };
                    for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && "e" !== d && Object.defineProperty(s, d, c(d));
                    return s.e = function(e) {
                        return function(e) {
                            switch (o) {
                                case "ready":
                                    return m("prepare"), t.push(e), u((function() {
                                        m("ready")
                                    })), e;
                                case "prepare":
                                    return t.push(e), e;
                                default:
                                    return e
                            }
                        }(r.e(e))
                    }, s
                }(h.require, h.id);
            v.hot = (g = h.id, f = v, y = {
                _acceptedDependencies: {},
                _acceptedErrorHandlers: {},
                _declinedDependencies: {},
                _selfAccepted: !1,
                _selfDeclined: !1,
                _selfInvalidated: !1,
                _disposeHandlers: [],
                _main: w = e !== g,
                _requireSelf: function() {
                    l = f.parents.slice(), e = w ? void 0 : g, c(g)
                },
                active: !0,
                accept: function(e, t, r) {
                    if (void 0 === e) y._selfAccepted = !0;
                    else if ("function" == typeof e) y._selfAccepted = e;
                    else if ("object" == typeof e && null !== e)
                        for (var a = 0; a < e.length; a++) y._acceptedDependencies[e[a]] = t || function() {}, y._acceptedErrorHandlers[e[a]] = r;
                    else y._acceptedDependencies[e] = t || function() {}, y._acceptedErrorHandlers[e] = r
                },
                decline: function(e) {
                    if (void 0 === e) y._selfDeclined = !0;
                    else if ("object" == typeof e && null !== e)
                        for (var t = 0; t < e.length; t++) y._declinedDependencies[e[t]] = !0;
                    else y._declinedDependencies[e] = !0
                },
                dispose: function(e) {
                    y._disposeHandlers.push(e)
                },
                addDisposeHandler: function(e) {
                    y._disposeHandlers.push(e)
                },
                removeDisposeHandler: function(e) {
                    var t = y._disposeHandlers.indexOf(e);
                    t >= 0 && y._disposeHandlers.splice(t, 1)
                },
                invalidate: function() {
                    switch (this._selfInvalidated = !0, o) {
                        case "idle":
                            r = [], Object.keys(c.hmrI).forEach((function(e) {
                                c.hmrI[e](g, r)
                            })), m("ready");
                            break;
                        case "ready":
                            Object.keys(c.hmrI).forEach((function(e) {
                                c.hmrI[e](g, r)
                            }));
                            break;
                        case "prepare":
                        case "check":
                        case "dispose":
                        case "apply":
                            (a = a || []).push(g)
                    }
                },
                check: d,
                apply: p,
                status: function(e) {
                    if (!e) return o;
                    s.push(e)
                },
                addStatusHandler: function(e) {
                    s.push(e)
                },
                removeStatusHandler: function(e) {
                    var t = s.indexOf(e);
                    t >= 0 && s.splice(t, 1)
                },
                data: n[g]
            }, e = void 0, y), v.parents = l, v.children = [], l = [], h.require = E
        })), c.hmrC = {}, c.hmrI = {}
    })(), c.p = "/", r = (e, t, r, a) => {
        var n = document.createElement("link");
        return n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = i => {
            if (n.onerror = n.onload = null, "load" === i.type) r();
            else {
                var l = i && ("load" === i.type ? "missing" : i.type),
                    s = i && i.target && i.target.href || t,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.type = l, o.request = s, n.parentNode.removeChild(n), a(o)
            }
        }, n.href = t, document.head.appendChild(n), n
    }, a = (e, t) => {
        for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
            var n = (l = r[a]).getAttribute("data-href") || l.getAttribute("href");
            if ("stylesheet" === l.rel && (n === e || n === t)) return l
        }
        var i = document.getElementsByTagName("style");
        for (a = 0; a < i.length; a++) {
            var l;
            if ((n = (l = i[a]).getAttribute("data-href")) === e || n === t) return l
        }
    }, n = [], i = [], l = e => ({
        dispose: () => {
            for (var e = 0; e < n.length; e++) {
                var t = n[e];
                t.parentNode && t.parentNode.removeChild(t)
            }
            n.length = 0
        },
        apply: () => {
            for (var e = 0; e < i.length; e++) i[e].rel = "stylesheet";
            i.length = 0
        }
    }), c.hmrC.miniCss = (e, t, s, o, m, u) => {
        m.push(l), e.forEach((e => {
            var t = c.miniCssF(e),
                l = c.p + t,
                s = a(t, l);
            s && o.push(new Promise(((t, a) => {
                var o = r(e, l, (() => {
                    o.as = "style", o.rel = "preload", t()
                }), a);
                n.push(s), i.push(o)
            })))
        }))
    }, (() => {
        var e = {
            826: 0
        };
        c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a) r.push(a[2]);
                else {
                    var n = new Promise(((r, n) => a = e[t] = [r, n]));
                    r.push(a[2] = n);
                    var i = c.p + c.u(t),
                        l = new Error;
                    c.l(i, (r => {
                        if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var n = r && ("load" === r.type ? "missing" : r.type),
                                i = r && r.target && r.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")", l.name = "ChunkLoadError", l.type = n, l.request = i, a[1](l)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t, r, a, n, i = {};

        function l(e) {
            return new Promise(((t, r) => {
                i[e] = t;
                var a = c.p + c.hu(e),
                    n = new Error;
                c.l(a, (t => {
                    if (i[e]) {
                        i[e] = void 0;
                        var a = t && ("load" === t.type ? "missing" : t.type),
                            l = t && t.target && t.target.src;
                        n.message = "Loading hot update chunk " + e + " failed.\n(" + a + ": " + l + ")", n.name = "ChunkLoadError", n.type = a, n.request = l, r(n)
                    }
                }))
            }))
        }

        function s(i) {
            function l(e) {
                for (var t = [e], r = {}, a = t.map((function(e) {
                        return {
                            chain: [e],
                            id: e
                        }
                    })); a.length > 0;) {
                    var n = a.pop(),
                        i = n.id,
                        l = n.chain,
                        o = c.c[i];
                    if (o && (!o.hot._selfAccepted || o.hot._selfInvalidated)) {
                        if (o.hot._selfDeclined) return {
                            type: "self-declined",
                            chain: l,
                            moduleId: i
                        };
                        if (o.hot._main) return {
                            type: "unaccepted",
                            chain: l,
                            moduleId: i
                        };
                        for (var m = 0; m < o.parents.length; m++) {
                            var u = o.parents[m],
                                d = c.c[u];
                            if (d) {
                                if (d.hot._declinedDependencies[i]) return {
                                    type: "declined",
                                    chain: l.concat([u]),
                                    moduleId: i,
                                    parentId: u
                                }; - 1 === t.indexOf(u) && (d.hot._acceptedDependencies[i] ? (r[u] || (r[u] = []), s(r[u], [i])) : (delete r[u], t.push(u), a.push({
                                    chain: l.concat([u]),
                                    id: u
                                })))
                            }
                        }
                    }
                }
                return {
                    type: "accepted",
                    moduleId: e,
                    outdatedModules: t,
                    outdatedDependencies: r
                }
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var a = t[r]; - 1 === e.indexOf(a) && e.push(a)
                }
            }
            c.f && delete c.f.jsonpHmr, t = void 0;
            var o = {},
                m = [],
                u = {},
                d = function(e) {
                    console.warn("[HMR] unexpected require(" + e.id + ") to disposed module")
                };
            for (var p in r)
                if (c.o(r, p)) {
                    var h, g = r[p],
                        f = !1,
                        w = !1,
                        y = !1,
                        v = "";
                    switch ((h = g ? l(p) : {
                        type: "disposed",
                        moduleId: p
                    }).chain && (v = "\nUpdate propagation: " + h.chain.join(" -> ")), h.type) {
                        case "self-declined":
                            i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (f = new Error("Aborted because of self decline: " + h.moduleId + v));
                            break;
                        case "declined":
                            i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (f = new Error("Aborted because of declined dependency: " + h.moduleId + " in " + h.parentId + v));
                            break;
                        case "unaccepted":
                            i.onUnaccepted && i.onUnaccepted(h), i.ignoreUnaccepted || (f = new Error("Aborted because " + p + " is not accepted" + v));
                            break;
                        case "accepted":
                            i.onAccepted && i.onAccepted(h), w = !0;
                            break;
                        case "disposed":
                            i.onDisposed && i.onDisposed(h), y = !0;
                            break;
                        default:
                            throw new Error("Unexception type " + h.type)
                    }
                    if (f) return {
                        error: f
                    };
                    if (w)
                        for (p in u[p] = g, s(m, h.outdatedModules), h.outdatedDependencies) c.o(h.outdatedDependencies, p) && (o[p] || (o[p] = []), s(o[p], h.outdatedDependencies[p]));
                    y && (s(m, [h.moduleId]), u[p] = d)
                }
            r = void 0;
            for (var E, b = [], C = 0; C < m.length; C++) {
                var _ = m[C],
                    x = c.c[_];
                x && (x.hot._selfAccepted || x.hot._main) && u[_] !== d && !x.hot._selfInvalidated && b.push({
                    module: _,
                    require: x.hot._requireSelf,
                    errorHandler: x.hot._selfAccepted
                })
            }
            return {
                dispose: function() {
                    var t;
                    a.forEach((function(t) {
                        delete e[t]
                    })), a = void 0;
                    for (var r, n = m.slice(); n.length > 0;) {
                        var i = n.pop(),
                            l = c.c[i];
                        if (l) {
                            var s = {},
                                u = l.hot._disposeHandlers;
                            for (C = 0; C < u.length; C++) u[C].call(null, s);
                            for (c.hmrD[i] = s, l.hot.active = !1, delete c.c[i], delete o[i], C = 0; C < l.children.length; C++) {
                                var d = c.c[l.children[C]];
                                d && (t = d.parents.indexOf(i)) >= 0 && d.parents.splice(t, 1)
                            }
                        }
                    }
                    for (var p in o)
                        if (c.o(o, p) && (l = c.c[p]))
                            for (E = o[p], C = 0; C < E.length; C++) r = E[C], (t = l.children.indexOf(r)) >= 0 && l.children.splice(t, 1)
                },
                apply: function(e) {
                    for (var t in u) c.o(u, t) && (c.m[t] = u[t]);
                    for (var r = 0; r < n.length; r++) n[r](c);
                    for (var a in o)
                        if (c.o(o, a)) {
                            var l = c.c[a];
                            if (l) {
                                E = o[a];
                                for (var s = [], d = [], p = [], h = 0; h < E.length; h++) {
                                    var g = E[h],
                                        f = l.hot._acceptedDependencies[g],
                                        w = l.hot._acceptedErrorHandlers[g];
                                    if (f) {
                                        if (-1 !== s.indexOf(f)) continue;
                                        s.push(f), d.push(w), p.push(g)
                                    }
                                }
                                for (var y = 0; y < s.length; y++) try {
                                    s[y].call(null, E)
                                } catch (t) {
                                    if ("function" == typeof d[y]) try {
                                        d[y](t, {
                                            moduleId: a,
                                            dependencyId: p[y]
                                        })
                                    } catch (r) {
                                        i.onErrored && i.onErrored({
                                            type: "accept-error-handler-errored",
                                            moduleId: a,
                                            dependencyId: p[y],
                                            error: r,
                                            originalError: t
                                        }), i.ignoreErrored || (e(r), e(t))
                                    } else i.onErrored && i.onErrored({
                                        type: "accept-errored",
                                        moduleId: a,
                                        dependencyId: p[y],
                                        error: t
                                    }), i.ignoreErrored || e(t)
                                }
                            }
                        }
                    for (var v = 0; v < b.length; v++) {
                        var C = b[v],
                            _ = C.module;
                        try {
                            C.require(_)
                        } catch (t) {
                            if ("function" == typeof C.errorHandler) try {
                                C.errorHandler(t, {
                                    moduleId: _,
                                    module: c.c[_]
                                })
                            } catch (r) {
                                i.onErrored && i.onErrored({
                                    type: "self-accept-error-handler-errored",
                                    moduleId: _,
                                    error: r,
                                    originalError: t
                                }), i.ignoreErrored || (e(r), e(t))
                            } else i.onErrored && i.onErrored({
                                type: "self-accept-errored",
                                moduleId: _,
                                error: t
                            }), i.ignoreErrored || e(t)
                        }
                    }
                    return m
                }
            }
        }
        self.webpackHotUpdate = (e, t, a) => {
            for (var l in t) c.o(t, l) && (r[l] = t[l]);
            a && n.push(a), i[e] && (i[e](), i[e] = void 0)
        }, c.hmrI.jsonp = function(e, t) {
            r || (r = {}, n = [], a = [], t.push(s)), c.o(r, e) || (r[e] = c.m[e])
        }, c.hmrC.jsonp = function(i, o, m, u, d, p) {
            d.push(s), t = {}, a = o, r = m.reduce((function(e, t) {
                return e[t] = !1, e
            }), {}), n = [], i.forEach((function(r) {
                c.o(e, r) && void 0 !== e[r] && (u.push(l(r)), t[r] = !0)
            })), c.f && (c.f.jsonpHmr = function(r, a) {
                t && !c.o(t, r) && c.o(e, r) && void 0 !== e[r] && (a.push(l(r)), t[r] = !0)
            })
        }, c.hmrM = () => {
            if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
            return fetch(c.p + c.hmrF()).then((e => {
                if (404 !== e.status) {
                    if (!e.ok) throw new Error("Failed to fetch update manifest " + e.statusText);
                    return e.json()
                }
            }))
        }, c.O.j = t => 0 === e[t];
        var o = (t, r) => {
                var a, n, [i, l, s] = r,
                    o = 0;
                for (a in l) c.o(l, a) && (c.m[a] = l[a]);
                for (s && s(c), t && t(r); o < i.length; o++) n = i[o], c.o(e, n) && e[n] && e[n][0](), e[i[o]] = 0;
                c.O()
            },
            m = self.webpackChunk = self.webpackChunk || [];
        m.forEach(o.bind(null, 0)), m.push = o.bind(null, m.push.bind(m))
    })(), c.O(void 0, [525], (() => c(4936)));
    var m = c.O(void 0, [525], (() => c(8685)));
    m = c.O(m)
})();
//# sourceMappingURL=index.js.map