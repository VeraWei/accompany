(this["webpackJsonpself-isolation-fun-front"] =
    this["webpackJsonpself-isolation-fun-front"] || []).push([
    [0],
    {
        16: function (e, a, t) {},
        38: function (e, a, t) {},
        46: function (e, a, t) {
            e.exports = t(88);
        },
        71: function (e, a, t) {},
        72: function (e, a, t) {},
        87: function (e, a, t) {},
        88: function (e, a, t) {
            "use strict";
            t.r(a);
            var r = t(0),
                l = t.n(r),
                n = t(39),
                c = t.n(n),
                s = t(14),
                m = t(15),
                i = t(7),
                o = t.n(i),
                d = t(12),
                v = t(3),
                p = t(6),
                u = t(5),
                E = t(4),
                N =
                    (t(52),
                    t(53),
                    "https://accompanybuddy.azurewebsites.net/joke"),
                y = "https://accompanybuddy.azurewebsites.net/advice",
                _ =
                    "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/miku/miku_v2.pmd",
                f =
                    "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/vmds/wavefile_v2.vmd",
                h =
                    "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/vmds/wavefile_camera.vmd",
                w =
                    "https://cdn.rawgit.com/mrdoob/three.js/r87/examples/models/mmd/audios/wavefile_short.mp3",
                k = "http://localhost:3000/user/create",
                b = t(54),
                g = {
                    Get: (function () {
                        var e = Object(d.a)(
                            o.a.mark(function e(a) {
                                return o.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    "return",
                                                    b({
                                                        method: "get",
                                                        headers: {
                                                            accept:
                                                                "application/json",
                                                        },
                                                        url: a.url,
                                                    })
                                                        .then(function (e) {
                                                            return e
                                                                .data.content;
                                                        })
                                                        .catch(function (e) {
                                                            console.log(e);
                                                        })
                                                );
                                            case 1:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (a) {
                            return e.apply(this, arguments);
                        };
                    })(),
                    Post: (function () {
                        var e = Object(d.a)(
                            o.a.mark(function e(a) {
                                return o.a.wrap(function (e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    "return",
                                                    b
                                                        .post(a.url, a.data)
                                                        .then(function (e) {
                                                            return e
                                                                .data.content;
                                                        })
                                                        .catch(function (e) {
                                                            return (
                                                                console.log(e),
                                                                e
                                                            );
                                                        })
                                                );
                                            case 1:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function (a) {
                            return e.apply(this, arguments);
                        };
                    })(),
                },
                j =
                    (t(71),
                    t(72),
                    (function (e) {
                        Object(u.a)(t, e);
                        var a = Object(E.a)(t);
                        function t() {
                            var e;
                            Object(v.a)(this, t);
                            for (
                                var r = arguments.length,
                                    l = new Array(r),
                                    n = 0;
                                n < r;
                                n++
                            )
                                l[n] = arguments[n];
                            return (
                                ((e = a.call.apply(
                                    a,
                                    [this].concat(l)
                                )).onClickHappy = function () {}),
                                (e.onClickUpset = function () {}),
                                e
                            );
                        }
                        return (
                            Object(p.a)(t, [
                                {
                                    key: "render",
                                    value: function () {
                                        return l.a.createElement(
                                            "div",
                                            { className: "emojis" },
                                            l.a.createElement(
                                                s.b,
                                                {
                                                    className: "feel-container",
                                                    to:
                                                        "/self-isolation-fun-front/joke",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    { className: "feel" },
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "face-1" },
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "eyes",
                                                            }
                                                        ),
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mouth",
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                s.b,
                                                {
                                                    className: "feel-container",
                                                    to:
                                                        "/self-isolation-fun-front/advice",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    {
                                                        className: "feel",
                                                        onClick: this
                                                            .onClickUpset,
                                                    },
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "face-2" },
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "eyes",
                                                            }
                                                        ),
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mouth",
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                s.b,
                                                {
                                                    className: "feel-container",
                                                    to:
                                                        "/self-isolation-fun-front/dance",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    { className: "feel" },
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "face-3" },
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "eyes",
                                                            }
                                                        ),
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mouth",
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                s.b,
                                                {
                                                    className: "feel-container",
                                                    to:
                                                        "/self-isolation-fun-front/blood",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    {
                                                        className: "feel",
                                                        onClick: this
                                                            .onClickUpset,
                                                    },
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "face-4" },
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "eyes",
                                                            }
                                                        ),
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mouth",
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                s.b,
                                                {
                                                    className: "feel-container",
                                                    to:
                                                        "/self-isolation-fun-front/read",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    {
                                                        className: "feel",
                                                        onClick: this
                                                            .onClickUpset,
                                                    },
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "face-5" },
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "eyes",
                                                            }
                                                        ),
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mouth",
                                                            }
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                s.b,
                                                {
                                                    className: "feel-container",
                                                    to:
                                                        "/self-isolation-fun-front/wall",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    {
                                                        className: "blue feel",
                                                        onClick: this
                                                            .onClickUpset,
                                                    },
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "face-6" },
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "eyes",
                                                            }
                                                        ),
                                                        l.a.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "mouth",
                                                            }
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(l.a.Component)),
                O =
                    (t(38),
                    (function (e) {
                        Object(u.a)(t, e);
                        var a = Object(E.a)(t);
                        function t() {
                            return (
                                Object(v.a)(this, t), a.apply(this, arguments)
                            );
                        }
                        return (
                            Object(p.a)(t, [
                                {
                                    key: "renderName",
                                    value: function () {
                                        var e = localStorage.getItem("name");
                                        return l.a.createElement(
                                            "div",
                                            { className: "content" },
                                            l.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "content__container",
                                                },
                                                l.a.createElement(
                                                    "p",
                                                    {
                                                        className:
                                                            "content__container__text",
                                                    },
                                                    "Holla"
                                                ),
                                                l.a.createElement(
                                                    "ul",
                                                    {
                                                        className:
                                                            "content__container__list",
                                                    },
                                                    l.a.createElement(
                                                        "li",
                                                        {
                                                            className:
                                                                "content__container__list__item",
                                                        },
                                                        "world !"
                                                    ),
                                                    l.a.createElement(
                                                        "li",
                                                        {
                                                            className:
                                                                "content__container__list__item",
                                                        },
                                                        e,
                                                        "!"
                                                    ),
                                                    l.a.createElement(
                                                        "li",
                                                        {
                                                            className:
                                                                "content__container__list__item",
                                                        },
                                                        "users !"
                                                    ),
                                                    l.a.createElement(
                                                        "li",
                                                        {
                                                            className:
                                                                "content__container__list__item",
                                                        },
                                                        "everybody !"
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = new Date().toDateString();
                                        return l.a.createElement(
                                            "div",
                                            { className: "header" },
                                            l.a.createElement(
                                                "span",
                                                { className: "time" },
                                                e
                                            ),
                                            this.renderName(),
                                            l.a.createElement(
                                                "span",
                                                { className: "text" },
                                                "Nice to meet you here."
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(l.a.Component)),
                x = t(22),
                C = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        return Object(v.a)(this, t), a.apply(this, arguments);
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return l.a.createElement(
                                        "div",
                                        { className: "footer" },
                                        l.a.createElement(
                                            "ul",
                                            null,
                                            l.a.createElement(
                                                "li",
                                                null,
                                                l.a.createElement(
                                                    x.a,
                                                    {
                                                        href:
                                                            "https://github.com/VeraWei",
                                                        variant: "link",
                                                    },
                                                    "GitHub"
                                                )
                                            ),
                                            l.a.createElement(
                                                "li",
                                                null,
                                                l.a.createElement(
                                                    x.a,
                                                    {
                                                        href:
                                                            "https://medium.com/@vera.wqm",
                                                        variant: "link",
                                                    },
                                                    "Medium"
                                                )
                                            ),
                                            l.a.createElement(
                                                "li",
                                                null,
                                                l.a.createElement(
                                                    x.a,
                                                    {
                                                        href:
                                                            "https://twitter.com/qiumingwei1",
                                                        variant: "link",
                                                    },
                                                    "Twitter"
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component),
                A = t(77);
            A.registerPlugin(t(78));
            var H = !1,
                D = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        var e;
                        Object(v.a)(this, t);
                        for (
                            var r = arguments.length, l = new Array(r), n = 0;
                            n < r;
                            n++
                        )
                            l[n] = arguments[n];
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).state = {
                                name: "stranger",
                            }),
                            (e.animationCallback = function (a) {
                                if (!a.text) return console.log("Cancelled");
                                localStorage.setItem("name", a.text),
                                    e.setState({ name: a.text }),
                                    e.sendUser(a.text);
                            }),
                            (e.initAnimation = function () {
                                (A.dialog.buttons.YES.text = "\u25ba"),
                                    A.dialog.open({
                                        message:
                                            "My Lord, I will show your name on the wall!",
                                        className: "vex-theme-wireframe",
                                        input: [
                                            "<style>",
                                            ".vex-custom-field-wrapper {",
                                            "margin: 1em 0;",
                                            "}",
                                            ".vex-custom-field-wrapper > label {",
                                            "display: inline-block;",
                                            "margin-bottom: .2em;",
                                            "}",
                                            "</style>",
                                            '<div class="vex-custom-field-wrapper">',
                                            '<div class="vex-custom-input-wrapper">',
                                            '<input name="text" type="text" />',
                                            "</div>",
                                            "</div>",
                                        ].join(""),
                                        callback: e.animationCallback,
                                    }),
                                    (H = !0);
                            }),
                            e
                        );
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = localStorage.getItem("name");
                                    H || e || this.initAnimation(),
                                        this.setState({ name: e });
                                },
                            },
                            {
                                key: "sendUser",
                                value: (function () {
                                    var e = Object(d.a)(
                                        o.a.mark(function e(a) {
                                            var t, r;
                                            return o.a.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t = k),
                                                                (e.next = 3),
                                                                g.Post({
                                                                    url: t,
                                                                    data: {
                                                                        name: a,
                                                                    },
                                                                })
                                                            );
                                                        case 3:
                                                            (r = e.sent),
                                                                console.log(r);
                                                        case 5:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function (a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "renderLoading",
                                value: function () {
                                    return l.a.createElement(
                                        "div",
                                        null,
                                        "..."
                                    );
                                },
                            },
                            {
                                key: "renderHeader",
                                value: function () {
                                    return l.a.createElement(O, null);
                                },
                            },
                            {
                                key: "renderFooter",
                                value: function () {
                                    return l.a.createElement(C, null);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return l.a.createElement(
                                        "div",
                                        { className: "App" },
                                        this.renderHeader(),
                                        l.a.createElement(
                                            "div",
                                            { className: "main-content" },
                                            l.a.createElement(
                                                "h2",
                                                {
                                                    style: {
                                                        textAlign: "center",
                                                    },
                                                },
                                                "How are you?"
                                            ),
                                            l.a.createElement(j, null),
                                            this.renderFooter()
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component),
                S = t(17),
                M =
                    (t(16),
                    (function (e) {
                        Object(u.a)(t, e);
                        var a = Object(E.a)(t);
                        function t() {
                            var e;
                            Object(v.a)(this, t);
                            for (
                                var r = arguments.length,
                                    l = new Array(r),
                                    n = 0;
                                n < r;
                                n++
                            )
                                l[n] = arguments[n];
                            return (
                                ((e = a.call.apply(
                                    a,
                                    [this].concat(l)
                                )).state = { content: null }),
                                e
                            );
                        }
                        return (
                            Object(p.a)(t, [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        this.getData();
                                    },
                                },
                                {
                                    key: "getData",
                                    value: (function () {
                                        var e = Object(d.a)(
                                            o.a.mark(function e() {
                                                var a, t;
                                                return o.a.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch (
                                                                (e.prev =
                                                                    e.next)
                                                            ) {
                                                                case 0:
                                                                    return (
                                                                        (a = N),
                                                                        (e.next = 3),
                                                                        g.Get({
                                                                            url: a,
                                                                        })
                                                                    );
                                                                case 3:
                                                                    (t =
                                                                        e.sent),
                                                                        console.log(
                                                                            t
                                                                        ),
                                                                        this.setState(
                                                                            {
                                                                                content: t,
                                                                            }
                                                                        );
                                                                case 6:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    },
                                                    e,
                                                    this
                                                );
                                            })
                                        );
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })(),
                                },
                                {
                                    key: "renderHeader",
                                    value: function () {
                                        return l.a.createElement(O, null);
                                    },
                                },
                                {
                                    key: "renderFooter",
                                    value: function () {
                                        return l.a.createElement(C, null);
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.state.content;
                                        return l.a.createElement(
                                            "div",
                                            { className: main - container },
                                            this.renderHeader(),
                                            l.a.createElement(
                                                "div",
                                                { className: "main-content" },
                                                e
                                                    ? l.a.createElement(
                                                          "p",
                                                          null,
                                                          e
                                                      )
                                                    : l.a.createElement(S.a, {
                                                          animation: "grow",
                                                          variant: "light",
                                                      }),
                                                this.renderFooter()
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(l.a.Component)),
                P = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        var e;
                        Object(v.a)(this, t);
                        for (
                            var r = arguments.length, l = new Array(r), n = 0;
                            n < r;
                            n++
                        )
                            l[n] = arguments[n];
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).state = {
                                content: null,
                            }),
                            e
                        );
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.getData();
                                },
                            },
                            {
                                key: "getData",
                                value: (function () {
                                    var e = Object(d.a)(
                                        o.a.mark(function e() {
                                            var a, t;
                                            return o.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (a = y),
                                                                    (e.next = 3),
                                                                    g.Get({
                                                                        url: a,
                                                                    })
                                                                );
                                                            case 3:
                                                                (t = e.sent),
                                                                    console.log(
                                                                        t
                                                                    ),
                                                                    this.setState(
                                                                        {
                                                                            content: t,
                                                                        }
                                                                    );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "renderHeader",
                                value: function () {
                                    return l.a.createElement(O, null);
                                },
                            },
                            {
                                key: "renderFooter",
                                value: function () {
                                    return l.a.createElement(C, null);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.content;
                                    return l.a.createElement(
                                        "div",
                                        { className: main - container },
                                        this.renderHeader(),
                                        l.a.createElement(
                                            "div",
                                            { className: "main-content" },
                                            e
                                                ? l.a.createElement(
                                                      "p",
                                                      null,
                                                      e
                                                  )
                                                : l.a.createElement(S.a, {
                                                      animation: "grow",
                                                      variant: "light",
                                                  }),
                                            this.renderFooter()
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component),
                W = t(1),
                F = t(43),
                z = t(44),
                B = t(45),
                U = t(79),
                G = _,
                I = [f],
                R = h,
                q = w,
                L = { delayTime: 160 / 30 },
                J = new W.m(),
                T = new W.Q(),
                Q = new z.a(),
                V = new B.a(),
                Y = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        var e;
                        Object(v.a)(this, t);
                        for (
                            var r = arguments.length, l = new Array(r), n = 0;
                            n < r;
                            n++
                        )
                            l[n] = arguments[n];
                        return (
                            ((e = a.call.apply(
                                a,
                                [this].concat(l)
                            )).container = void 0),
                            (e.mesh = void 0),
                            (e.camera = void 0),
                            (e.scene = void 0),
                            (e.material = void 0),
                            (e.renderer = void 0),
                            (e.effect = void 0),
                            (e.helper = void 0),
                            (e.ready = !1),
                            (e.onProgress = function (e) {
                                if (e.lengthComputable) {
                                    var a = (e.loaded / e.total) * 100;
                                    console.log(Math.round(a) + "% downloaded");
                                }
                            }),
                            (e.loadAnimationCallback = function (a) {
                                V.add(e.camera, { animation: a }),
                                    new W.g().load(
                                        q,
                                        function (a) {
                                            var t = new W.f(),
                                                r = new W.e(t).setBuffer(a);
                                            (t.position.z = 1),
                                                V.add(r, L),
                                                T.add(r),
                                                T.add(t),
                                                T.add(e.mesh),
                                                (e.ready = !0);
                                        },
                                        e.onProgress,
                                        function (e) {
                                            console.log(e);
                                        }
                                    );
                            }),
                            (e.loadWithAnimationCallback = function (a) {
                                (e.mesh = a.mesh),
                                    V.add(e.mesh, {
                                        animation: a.animation,
                                        physics: !0,
                                    }),
                                    Q.loadAnimation(
                                        R,
                                        e.camera,
                                        e.loadAnimationCallback,
                                        e.onProgress,
                                        function (e) {
                                            console.log(e);
                                        }
                                    );
                            }),
                            (e.onWindowResize = function () {
                                (e.camera.aspect =
                                    window.innerWidth / window.innerHeight),
                                    e.camera.updateProjectionMatrix(),
                                    e.effect.setSize(
                                        window.innerWidth,
                                        window.innerHeight
                                    );
                            }),
                            (e.animate = function () {
                                requestAnimationFrame(e.animate),
                                    e.renderAnimation();
                            }),
                            e
                        );
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    U().then(function (a) {
                                        (U = a), e.init(), e.animate();
                                    });
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    (this.container = document.createElement(
                                        "div"
                                    )),
                                        document.body.appendChild(
                                            this.container
                                        ),
                                        (this.camera = new W.L(
                                            45,
                                            window.innerWidth /
                                                window.innerHeight,
                                            1,
                                            2e3
                                        )),
                                        (T.background = new W.n(16777215)),
                                        T.add(
                                            new W.M(
                                                30,
                                                10,
                                                10,
                                                10,
                                                void 0,
                                                void 0
                                            )
                                        );
                                    var e = new W.b(6710886);
                                    T.add(e);
                                    var a = new W.q(8943462);
                                    a.position.set(-1, 1, 1).normalize(),
                                        T.add(a),
                                        (this.renderer = new W.eb({
                                            antialias: !0,
                                        })),
                                        this.renderer.setPixelRatio(
                                            window.devicePixelRatio
                                        ),
                                        this.renderer.setSize(
                                            window.innerWidth,
                                            window.innerHeight
                                        ),
                                        this.container.appendChild(
                                            this.renderer.domElement
                                        ),
                                        (this.effect = new F.a(
                                            this.renderer,
                                            {}
                                        )),
                                        Q.loadWithAnimation(
                                            G,
                                            I,
                                            this.loadWithAnimationCallback,
                                            this.onProgress,
                                            function (e) {
                                                console.log(e);
                                            }
                                        ),
                                        window.addEventListener(
                                            "resize",
                                            this.onWindowResize,
                                            !1
                                        );
                                },
                            },
                            {
                                key: "renderAnimation",
                                value: function () {
                                    this.ready && V.update(J.getDelta()),
                                        this.effect.render(T, this.camera);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return l.a.createElement("div", null);
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component),
                $ = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        return Object(v.a)(this, t), a.apply(this, arguments);
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "renderHeader",
                                value: function () {
                                    return l.a.createElement(O, null);
                                },
                            },
                            {
                                key: "renderAnimation",
                                value: function () {
                                    return l.a.createElement(
                                        "div",
                                        { className: "scene" },
                                        l.a.createElement("div", {
                                            className: "scene_titanShadow",
                                        }),
                                        l.a.createElement(
                                            "div",
                                            { className: "t_wrap" },
                                            l.a.createElement(
                                                "div",
                                                { className: "scene_titan" },
                                                l.a.createElement(
                                                    "div",
                                                    { className: "eyes" },
                                                    l.a.createElement("div", {
                                                        className:
                                                            "eye eye--left",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className:
                                                            "eye eye--right",
                                                    })
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            "div",
                                            { className: "scene_saturn" },
                                            l.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "scene_saturn__face",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    { className: "face_clip" },
                                                    l.a.createElement("div", {
                                                        className:
                                                            "eye eye--left",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className:
                                                            "eye eye--right",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "mouth",
                                                    })
                                                )
                                            ),
                                            l.a.createElement("div", {
                                                className:
                                                    "scene_saturn__shadow",
                                            }),
                                            l.a.createElement("div", {
                                                className:
                                                    "scene_saturn__shadowRing",
                                            }),
                                            l.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "scene_saturn__sparks",
                                                },
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                }),
                                                l.a.createElement("div", {
                                                    className: "spark",
                                                })
                                            ),
                                            l.a.createElement(
                                                "div",
                                                {
                                                    className:
                                                        "scene_saturn__ring",
                                                },
                                                l.a.createElement(
                                                    "div",
                                                    { className: "small" },
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "small_part",
                                                    })
                                                ),
                                                l.a.createElement(
                                                    "div",
                                                    { className: "layer" },
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    })
                                                ),
                                                l.a.createElement(
                                                    "div",
                                                    { className: "layer" },
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    })
                                                ),
                                                l.a.createElement(
                                                    "div",
                                                    { className: "layer" },
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    }),
                                                    l.a.createElement("div", {
                                                        className: "layer_part",
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return l.a.createElement(
                                        "div",
                                        { className: "exercise" },
                                        this.renderHeader(),
                                        this.renderAnimation()
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component),
                K = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        var e;
                        Object(v.a)(this, t);
                        for (
                            var r = arguments.length, l = new Array(r), n = 0;
                            n < r;
                            n++
                        )
                            l[n] = arguments[n];
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).state = {
                                content: null,
                            }),
                            e
                        );
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.getData();
                                },
                            },
                            {
                                key: "getData",
                                value: (function () {
                                    var e = Object(d.a)(
                                        o.a.mark(function e() {
                                            var a, t;
                                            return o.a.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                                return (
                                                                    (a = N),
                                                                    (e.next = 3),
                                                                    g.Get({
                                                                        url: a,
                                                                    })
                                                                );
                                                            case 3:
                                                                (t = e.sent),
                                                                    console.log(
                                                                        t
                                                                    ),
                                                                    this.setState(
                                                                        {
                                                                            content: t,
                                                                        }
                                                                    );
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "renderHeader",
                                value: function () {
                                    return l.a.createElement(O, null);
                                },
                            },
                            {
                                key: "renderFooter",
                                value: function () {
                                    return l.a.createElement(C, null);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.state.content;
                                    return l.a.createElement(
                                        "div",
                                        { className: main - container },
                                        this.renderHeader(),
                                        l.a.createElement(
                                            "div",
                                            { className: "main-content" },
                                            e
                                                ? l.a.createElement(
                                                      "p",
                                                      null,
                                                      e
                                                  )
                                                : l.a.createElement(S.a, {
                                                      animation: "grow",
                                                      variant: "light",
                                                  })
                                        ),
                                        this.renderFooter()
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component),
                X = t(86),
                Z = [
                    "abc",
                    "wei",
                    "jenifer",
                    "jiaming",
                    "hahah",
                    "abc",
                    "wei",
                    "jenifer",
                    "jiaming",
                    "hahah",
                    "jiaming",
                    "hahah",
                    "abc",
                    "wei",
                    "jenifer",
                ],
                ee = (function (e) {
                    Object(u.a)(t, e);
                    var a = Object(E.a)(t);
                    function t() {
                        var e;
                        Object(v.a)(this, t);
                        for (
                            var r = arguments.length, l = new Array(r), n = 0;
                            n < r;
                            n++
                        )
                            l[n] = arguments[n];
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).state = {
                                content: null,
                            }),
                            e
                        );
                    }
                    return (
                        Object(p.a)(t, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.initBg();
                                },
                            },
                            {
                                key: "initBg",
                                value: function () {
                                    X.init({
                                        selector: ".wall-background",
                                        color: ["#DA0463", "#404B69"],
                                        connectParticles: !0,
                                        responsive: [
                                            {
                                                breakpoint: 1e3,
                                                options: {
                                                    color: "#00C9B1",
                                                    maxParticles: 80,
                                                    connectParticles: !1,
                                                },
                                            },
                                        ],
                                    });
                                },
                            },
                            {
                                key: "renderHeader",
                                value: function () {
                                    return l.a.createElement(O, null);
                                },
                            },
                            {
                                key: "renderFooter",
                                value: function () {
                                    return l.a.createElement(C, null);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return l.a.createElement(
                                        "div",
                                        { className: main - container },
                                        this.renderHeader(),
                                        l.a.createElement("canvas", {
                                            className: "wall-background",
                                        }),
                                        l.a.createElement(
                                            "div",
                                            { className: "wall-contontent" },
                                            l.a.createElement(
                                                "h2",
                                                null,
                                                "Stay home, we are all here to accompany you!"
                                            ),
                                            Z.map(function (e, a) {
                                                var t = Math.floor(
                                                    4 * Math.random()
                                                );
                                                return l.a.createElement(
                                                    "span",
                                                    {
                                                        className: "name name-".concat(
                                                            t
                                                        ),
                                                    },
                                                    e
                                                );
                                            })
                                        ),
                                        this.renderFooter()
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(l.a.Component);
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            t(87);
            c.a.render(
                l.a.createElement(
                    l.a.StrictMode,
                    null,
                    l.a.createElement(
                        s.a,
                        null,
                        l.a.createElement(
                            m.c,
                            null,
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front",
                                component: D,
                            }),
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front/joke",
                                component: M,
                            }),
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front/advice",
                                component: P,
                            }),
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front/dance",
                                component: Y,
                            }),
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front/blood",
                                component: $,
                            }),
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front/read",
                                component: K,
                            }),
                            l.a.createElement(m.a, {
                                exact: !0,
                                path: "/self-isolation-fun-front/wall",
                                component: ee,
                            })
                        )
                    )
                ),
                document.getElementById("root")
            ),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
    },
    [[46, 1, 2]],
]);
//# sourceMappingURL=main.66715763.chunk.js.map
