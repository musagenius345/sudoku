/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/sudokutoolcollection@1.1.3/dist/sudoku.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t, r) {
  return "function" == typeof r.indexOf
    ? -1 !== r.indexOf(t)
    : -1 !== Object.values(r).indexOf(t);
}
var r = (function () {
    function r(t) {
      void 0 === t && (t = !1),
        (this.BLOCKS = []),
        (this.SQUARES = null),
        (this.UNITS = null),
        (this.SQUARE_UNITS_MAP = null),
        (this.SQUARE_PEERS_MAP = null),
        (this.debug = t),
        (this.SQUARES = this._cross(r.ROWS, r.COLS)),
        (this.UNITS = this._get_all_units(r.ROWS, r.COLS)),
        (this.SQUARE_UNITS_MAP = this._get_square_units_map(
          this.SQUARES,
          this.UNITS,
        )),
        (this.SQUARE_PEERS_MAP = this._get_square_peers_map(
          this.SQUARES,
          this.SQUARE_UNITS_MAP,
        )),
        (this.BLOCKS = [
          this._cross("ABC", "123"),
          this._cross("ABC", "456"),
          this._cross("ABC", "789"),
          this._cross("DEF", "123"),
          this._cross("DEF", "456"),
          this._cross("DEF", "789"),
          this._cross("GHI", "123"),
          this._cross("GHI", "456"),
          this._cross("GHI", "789"),
        ]);
    }
    return (
      (r.prototype.log = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        this.debug && console.log.apply(null, t);
      }),
      (r.prototype._cross = function (t, r) {
        var n = [];
        for (var i in t.split(""))
          for (var e in r.split("")) n.push(t[i] + r[e]);
        return n;
      }),
      (r.prototype._get_all_units = function (t, r) {
        var n = [];
        for (var i in t.split("")) n.push(this._cross(t[i], r));
        for (var e in r.split("")) n.push(this._cross(t, r[e]));
        var s = ["ABC", "DEF", "GHI"],
          a = ["123", "456", "789"];
        for (var o in s) for (var h in a) n.push(this._cross(s[o], a[h]));
        return n;
      }),
      (r.prototype._get_square_units_map = function (t, r) {
        var n = {};
        for (var i in t) {
          var e = t[i],
            s = [];
          for (var a in r) {
            var o = r[a];
            -1 !== o.indexOf(e) && s.push(o);
          }
          n[e] = s;
        }
        return n;
      }),
      (r.prototype._get_square_peers_map = function (t, r) {
        var n = {};
        for (var i in t) {
          var e = t[i],
            s = r[e],
            a = [];
          for (var o in s) {
            var h = s[o];
            for (var f in h) {
              var u = h[f];
              -1 === a.indexOf(u) && u !== e && a.push(u);
            }
          }
          n[e] = a;
        }
        return n;
      }),
      (r.prototype._coordinates_of = function (t) {
        return { col: 9 - (t % 9), row: Math.floor(t / 9) };
      }),
      (r.prototype.print_board = function (t) {
        var r = this.validate_board(t);
        if (!0 !== r) throw r;
        var n = "";
        for (var i in t.split("")) {
          var e = parseInt(i);
          (n += t[e] + " "),
            e % 3 == 2 && (n += "  "),
            e % 9 == 8 && (n += "\n"),
            e % 27 == 26 && (n += "\n");
        }
        console.log(n);
      }),
      (r.prototype.validate_board = function (n, i) {
        var e = this;
        if ((void 0 === i && (i = !1), !n)) throw new Error("Empty board");
        if (n.length !== r.NR_SQUARES)
          throw new Error(
            "Invalid board size. Board must be exactly " +
              r.NR_SQUARES +
              " squares.",
          );
        var s = n.split("");
        return (
          s.forEach(function (n, a) {
            if (!t(s[a], r.DIGITS.split("")) && s[a] !== r.BLANK_CHAR)
              return i
                ? e._coordinates_of(a)
                : "Invalid board character " +
                    n +
                    " encountered at index " +
                    a +
                    ": " +
                    s[a];
          }),
          !0
        );
      }),
      (r.prototype.assign = function (t, r, n) {
        var i = t[r] ? t[r].replace(n, "").split("") : [];
        for (var e in i) {
          var s = i[e];
          if (!this.eliminate(t, r, s)) return !1;
        }
        return t;
      }),
      (r.prototype.eliminate = function (r, n, i) {
        if (!t(i, r[n].split(""))) return r;
        r[n] = r[n].replace(i, "");
        var e = r[n].length;
        if (1 === e) {
          var s = r[n];
          for (var a in Object.keys(this.SQUARE_PEERS_MAP[n])) {
            var o = this.SQUARE_PEERS_MAP[n][a];
            if (!this.eliminate(r, o, s)) return !1;
          }
        }
        if (0 === e) return !1;
        for (var h in Object.keys(this.SQUARE_UNITS_MAP[n])) {
          var f = this.SQUARE_UNITS_MAP[n][h],
            u = [];
          for (var l in f) {
            var c = f[l];
            t(i, r[c].split("")) && u.push(c);
          }
          if (0 === u.length) return !1;
          if (1 === u.length) if (!this.assign(r, u[0], i)) return !1;
        }
        return r;
      }),
      (r.DIGITS = "123456789"),
      (r.ROWS = "ABCDEFGHI"),
      (r.COLS = r.DIGITS),
      (r.DIFFICULTY = {
        easy: 62,
        medium: 53,
        hard: 44,
        "very-hard": 35,
        insane: 26,
        inhuman: 17,
      }),
      (r.BLANK_CHAR = "."),
      (r.BLANK_BOARD = ".".repeat(81)),
      (r.MIN_GIVENS = 17),
      (r.NR_SQUARES = 81),
      r
    );
  })(),
  n = (function () {
    function n(t, r) {
      void 0 === r && (r = !1), (this.debug = r), (this.instance = t);
    }
    return (
      (n.prototype.log = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        this.debug && console.log.apply(null, t);
      }),
      (n.prototype.get = function (t) {
        this.log("Getting all candidates");
        var r = this.instance.validate_board(t);
        if (!0 !== r) throw r;
        this.log("Board valid");
        var n = this.map(t);
        if ((this.log("Current map: ", n), !n)) return !1;
        var i = [],
          e = [],
          s = 0;
        for (var a in Object.keys(n)) {
          var o = n[a];
          e.push(o), s % 9 == 8 && (i.push(e), (e = [])), ++s;
        }
        return this.log("Returned grid: ", i), i;
      }),
      (n.prototype.map = function (n) {
        var i = this.instance.validate_board(n);
        if (!0 !== i) throw i;
        var e = {},
          s = this._get_square_vals_map(n);
        for (var a in this.instance.SQUARES)
          e[this.instance.SQUARES[a]] = r.DIGITS;
        for (var o in s) {
          var h = s[o];
          if (t(h, r.DIGITS.split("")))
            if (!this.instance.assign(e, o, h)) return !1;
        }
        return e;
      }),
      (n.prototype._get_square_vals_map = function (t) {
        var r = {};
        if (t.length != this.instance.SQUARES.length)
          throw "Board/squares length mismatch.";
        for (var n in this.instance.SQUARES) r[this.instance.SQUARES[n]] = t[n];
        return r;
      }),
      n
    );
  })(),
  i = (function () {
    function i(t, r) {
      void 0 === r && (r = !1),
        (this.debug = r),
        (this.instance = t),
        (this.getCandidates = new n(t));
    }
    return (
      (i.prototype.log = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        this.debug && console.log.apply(null, t);
      }),
      (i.prototype.solve = function (n, i) {
        void 0 === i && (i = !1);
        var e = this.instance.validate_board(n);
        if (!0 !== e) throw e;
        var s = 0,
          a = n.split("");
        for (var o in a)
          n[o] !== r.BLANK_CHAR && t(a[o], r.DIGITS.split("")) && ++s;
        if (s < r.MIN_GIVENS)
          throw "Too few givens. Minimum givens is " + r.MIN_GIVENS;
        var h = this.getCandidates.map(n);
        if ("boolean" != typeof h) {
          var f = this.search(h, i);
          if ("boolean" != typeof f) {
            var u = "";
            for (var l in f) u += f[l];
            return u;
          }
        }
        return !1;
      }),
      (i.prototype.search = function (t, r) {
        if ((void 0 === r && (r = !1), !t)) return !1;
        var n = 0;
        for (var i in this.instance.SQUARES) {
          (o = t[(a = this.instance.SQUARES[i])].length) > n && (n = o);
        }
        if (1 === n) return t;
        var e = 10,
          s = null;
        for (var i in this.instance.SQUARES) {
          var a, o;
          (o = t[(a = this.instance.SQUARES[i])].length) < e &&
            o > 1 &&
            ((e = o), (s = a));
        }
        var h = t[s].split("");
        if (r)
          for (f = h.length - 1; f >= 0; --f) {
            (c = h[f]), (v = Object.assign({}, t));
            if ("boolean" == typeof (u = this.instance.assign(v, s, c)))
              return !1;
            if ((l = this.search(u, r))) return l;
          }
        else
          for (var f in h) {
            var u,
              l,
              c = h[f],
              v = Object.assign({}, t);
            if ("boolean" == typeof (u = this.instance.assign(v, s, c)))
              return !1;
            if ((l = this.search(u))) return l;
          }
        return !1;
      }),
      i
    );
  })(),
  e = (function () {
    function t(t, r) {
      void 0 === r && (r = !1),
        (this.debug = r),
        (this.instance = t),
        (this.solver = new i(this.instance)),
        (this.getCandidates = new n(this.instance));
    }
    return (
      (t.prototype.log = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        this.debug && console.log.apply(null, t);
      }),
      (t.prototype.generate = function (t, n, i) {
        void 0 === n && (n = !0),
          void 0 === i && (i = !1),
          ("string" != typeof t && void 0 !== t) ||
            (t = r.DIFFICULTY[t] || r.DIFFICULTY.easy),
          (t = this._force_range(t, r.NR_SQUARES + 1, r.MIN_GIVENS)),
          this.log("Generating game with difficulty of: ", t);
        for (var e = "", s = 0; s < r.NR_SQUARES; ++s) e += ".";
        var a = this.getCandidates.map(e);
        if ("boolean" == typeof a)
          throw new Error("Cannot define candidates for " + e);
        this.log("Candidates for blank board: ", a);
        var o = this._shuffle(this.instance.SQUARES);
        for (var h in (this.log("Shuffled squares: ", o), o)) {
          var f = o[h],
            u = this._rand_range(a[f].length),
            l = a[f][u];
          if (
            (this.log("Assigning ranom values: ", {
              rand_candidate_idx: u,
              rand_candidate: l,
            }),
            !1 === this.instance.assign(a, f, l))
          ) {
            this.log("Random contradiction found -> exiting");
            break;
          }
          var c = [];
          for (var v in this.instance.SQUARES) {
            var p = this.instance.SQUARES[v];
            1 == a[p].length && c.push(a[p]);
          }
          if (
            (this.log("Single candidates found: ", c),
            c.length >= t && this._strip_dups(c).length >= 8)
          ) {
            this.log("Difficulty grade reached, creating board");
            var _ = "",
              d = [];
            for (var s in this.instance.SQUARES) {
              var S = this.instance.SQUARES[s];
              1 == a[S].length ? ((_ += a[S]), d.push(s)) : (_ += r.BLANK_CHAR);
            }
            this.log("Board created so far: ", _);
            var g = d.length;
            if (g > t) {
              d = this._shuffle(d);
              for (s = 0; s < g - t; ++s) {
                var A = parseInt(d[s]);
                _ = _.substr(0, A) + r.BLANK_CHAR + _.substr(A + 1);
              }
            }
            this.log("Board created after checking difficulty again: ", _);
            var R = this.solver.solve(_);
            if ("string" == typeof R)
              return !0 === i ? { board: _, solution: R } : _;
          }
        }
        return this.generate(t, n, i);
      }),
      (t.prototype._force_range = function (t, r, n) {
        return (t = t || 0) < (n = n || 0) ? n : t > r ? r : t;
      }),
      (t.prototype._shuffle = function (t) {
        for (var r = [], n = 0; n < t.length; ++n) r.push(!1);
        for (var n in t) {
          for (var i = this._rand_range(t.length); r[i]; )
            i = i + 1 > t.length - 1 ? 0 : i + 1;
          r[i] = t[n];
        }
        return r;
      }),
      (t.prototype._rand_range = function (t, r) {
        void 0 === r && (r = 0);
        var n = parseInt(r),
          i = parseInt(t);
        if (i) return Math.floor(Math.random() * (i - n)) + n;
        throw "Range undefined";
      }),
      (t.prototype._strip_dups = function (t) {
        var r = [],
          n = {};
        for (var i in t) {
          var e = t[i];
          n[e] || (r.push(e), (n[e] = !0));
        }
        return r;
      }),
      t
    );
  })(),
  s = {
    stringToGrid: function (t) {
      var r = [],
        n = t.split(""),
        i = [];
      for (var e in n)
        i.push(n[e]), parseInt(e) % 9 == 8 && (r.push(i), (i = []));
      return r;
    },
    gridToString: function (t) {
      for (var r = "", n = 0; n < 9; ++n)
        for (var i = 0; i < 9; ++i) r += t[n][i];
      return r;
    },
    stringToObject: function (t) {
      var n = t.split(""),
        i = {},
        e = 0;
      return (
        r.ROWS.split("").forEach(function (t) {
          r.COLS.split("").forEach(function (r) {
            (i["" + t + r] = n[e]), e++;
          });
        }),
        i
      );
    },
    objectToString: function (t) {
      var n = [],
        i = 0;
      return (
        r.ROWS.split("").forEach(function (e) {
          r.COLS.split("").forEach(function (r) {
            (n[i] = t["" + e + r]), i++;
          });
        }),
        n.join("")
      );
    },
  };
var a = function (t) {
  void 0 === t && (t = !1);
  var a = new r(t),
    o = new e(a, t),
    h = new i(a, t),
    f = new n(a, t);
  return {
    statics: Object.freeze({
      DIGITS: r.DIGITS,
      ROWS: r.ROWS,
      COLS: r.COLS,
      DIFFICULTY: r.DIFFICULTY,
      BLANK_CHAR: r.BLANK_CHAR,
      BLANK_BOARD: r.BLANK_BOARD,
      MIN_GIVENS: r.MIN_GIVENS,
      NR_SQUARES: r.NR_SQUARES,
      BLOCKS: a.BLOCKS,
    }),
    instance: a,
    generator: o,
    solver: h,
    getCandidates: f,
    conversions: s,
  };
};
export { a as default };
//# sourceMappingURL=/sm/2b6282933ab66f22f08af745abb6b91fb2c9a2da7364b1f2663c6388f72d9ac6.map
