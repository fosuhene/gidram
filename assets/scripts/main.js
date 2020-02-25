! function (e) {
	var t = {};

	function n(i) {
		if (t[i]) return t[i].exports;
		var r = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = e, n.c = t, n.d = function (e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: i
		})
	}, n.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, n.t = function (e, t) {
		if (1 & t && (e = n(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if (n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) n.d(i, r, function (t) {
				return e[t]
			}.bind(null, r));
		return i
	}, n.n = function (e) {
		var t = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return n.d(t, "a", t), t
	}, n.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 146)
}([function (e, t, n) {
	(function (e) {
		e.exports = function () {
			"use strict";
			var t, i;

			function r() {
				return t.apply(null, arguments)
			}

			function a(e) {
				return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
			}

			function o(e) {
				return null != e && "[object Object]" === Object.prototype.toString.call(e)
			}

			function l(e) {
				return void 0 === e
			}

			function s(e) {
				return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
			}

			function d(e) {
				return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
			}

			function u(e, t) {
				var n, i = [];
				for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
				return i
			}

			function c(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function h(e, t) {
				for (var n in t) c(t, n) && (e[n] = t[n]);
				return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
			}

			function p(e, t, n, i) {
				return Yt(e, t, n, i, !0).utc()
			}

			function f(e) {
				return null == e._pf && (e._pf = {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					meridiem: null,
					rfc2822: !1,
					weekdayMismatch: !1
				}), e._pf
			}

			function m(e) {
				if (null == e._isValid) {
					var t = f(e),
						n = i.call(t.parsedDateParts, function (e) {
							return null != e
						}),
						r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
					if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
					e._isValid = r
				}
				return e._isValid
			}

			function g(e) {
				var t = p(NaN);
				return null != e ? h(f(t), e) : f(t).userInvalidated = !0, t
			}
			i = Array.prototype.some ? Array.prototype.some : function (e) {
				for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
					if (i in t && e.call(this, t[i], i, t)) return !0;
				return !1
			};
			var _ = r.momentProperties = [];

			function y(e, t) {
				var n, i, r;
				if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = f(t)), l(t._locale) || (e._locale = t._locale), _.length > 0)
					for (n = 0; n < _.length; n++) i = _[n], l(r = t[i]) || (e[i] = r);
				return e
			}
			var v = !1;

			function M(e) {
				y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, r.updateOffset(this), v = !1)
			}

			function b(e) {
				return e instanceof M || null != e && null != e._isAMomentObject
			}

			function w(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
			}

			function L(e) {
				var t = +e,
					n = 0;
				return 0 !== t && isFinite(t) && (n = w(t)), n
			}

			function D(e, t, n) {
				var i, r = Math.min(e.length, t.length),
					a = Math.abs(e.length - t.length),
					o = 0;
				for (i = 0; i < r; i++)(n && e[i] !== t[i] || !n && L(e[i]) !== L(t[i])) && o++;
				return o + a
			}

			function T(e) {
				!1 === r.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
			}

			function k(e, t) {
				var n = !0;
				return h(function () {
					if (null != r.deprecationHandler && r.deprecationHandler(null, e), n) {
						for (var i, a = [], o = 0; o < arguments.length; o++) {
							if (i = "", "object" == typeof arguments[o]) {
								for (var l in i += "\n[" + o + "] ", arguments[0]) i += l + ": " + arguments[0][l] + ", ";
								i = i.slice(0, -2)
							} else i = arguments[o];
							a.push(i)
						}
						T(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
					}
					return t.apply(this, arguments)
				}, t)
			}
			var S, x = {};

			function Y(e, t) {
				null != r.deprecationHandler && r.deprecationHandler(e, t), x[e] || (T(t), x[e] = !0)
			}

			function E(e) {
				return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
			}

			function C(e, t) {
				var n, i = h({}, e);
				for (n in t) c(t, n) && (o(e[n]) && o(t[n]) ? (i[n] = {}, h(i[n], e[n]), h(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
				for (n in e) c(e, n) && !c(t, n) && o(e[n]) && (i[n] = h({}, i[n]));
				return i
			}

			function H(e) {
				null != e && this.set(e)
			}
			r.suppressDeprecationWarnings = !1, r.deprecationHandler = null, S = Object.keys ? Object.keys : function (e) {
				var t, n = [];
				for (t in e) c(e, t) && n.push(t);
				return n
			};
			var P = {};

			function O(e, t) {
				var n = e.toLowerCase();
				P[n] = P[n + "s"] = P[t] = e
			}

			function A(e) {
				return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0
			}

			function I(e) {
				var t, n, i = {};
				for (n in e) c(e, n) && (t = A(n)) && (i[t] = e[n]);
				return i
			}
			var R = {};

			function j(e, t) {
				R[e] = t
			}

			function F(e, t, n) {
				var i = "" + Math.abs(e),
					r = t - i.length,
					a = e >= 0;
				return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
			}
			var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
				W = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
				z = {},
				B = {};

			function V(e, t, n, i) {
				var r = i;
				"string" == typeof i && (r = function () {
					return this[i]()
				}), e && (B[e] = r), t && (B[t[0]] = function () {
					return F(r.apply(this, arguments), t[1], t[2])
				}), n && (B[n] = function () {
					return this.localeData().ordinal(r.apply(this, arguments), e)
				})
			}

			function G(e, t) {
				return e.isValid() ? (t = U(t, e.localeData()), z[t] = z[t] || function (e) {
					var t, n, i, r = e.match(N);
					for (t = 0, n = r.length; t < n; t++) B[r[t]] ? r[t] = B[r[t]] : r[t] = (i = r[t]).match(/\[[\s\S]/) ? i.replace(/^\[|\]$/g, "") : i.replace(/\\/g, "");
					return function (t) {
						var i, a = "";
						for (i = 0; i < n; i++) a += E(r[i]) ? r[i].call(t, e) : r[i];
						return a
					}
				}(t), z[t](e)) : e.localeData().invalidDate()
			}

			function U(e, t) {
				var n = 5;

				function i(e) {
					return t.longDateFormat(e) || e
				}
				for (W.lastIndex = 0; n >= 0 && W.test(e);) e = e.replace(W, i), W.lastIndex = 0, n -= 1;
				return e
			}
			var Z = /\d/,
				q = /\d\d/,
				X = /\d{3}/,
				J = /\d{4}/,
				$ = /[+-]?\d{6}/,
				K = /\d\d?/,
				Q = /\d\d\d\d?/,
				ee = /\d\d\d\d\d\d?/,
				te = /\d{1,3}/,
				ne = /\d{1,4}/,
				ie = /[+-]?\d{1,6}/,
				re = /\d+/,
				ae = /[+-]?\d+/,
				oe = /Z|[+-]\d\d:?\d\d/gi,
				le = /Z|[+-]\d\d(?::?\d\d)?/gi,
				se = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
				de = {};

			function ue(e, t, n) {
				de[e] = E(t) ? t : function (e, i) {
					return e && n ? n : t
				}
			}

			function ce(e, t) {
				return c(de, e) ? de[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, i, r) {
					return t || n || i || r
				})))
			}

			function he(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}
			var pe = {};

			function fe(e, t) {
				var n, i = t;
				for ("string" == typeof e && (e = [e]), s(t) && (i = function (e, n) {
						n[t] = L(e)
					}), n = 0; n < e.length; n++) pe[e[n]] = i
			}

			function me(e, t) {
				fe(e, function (e, n, i, r) {
					i._w = i._w || {}, t(e, i._w, i, r)
				})
			}

			function ge(e, t, n) {
				null != t && c(pe, e) && pe[e](t, n._a, n, e)
			}
			var _e = 0,
				ye = 1,
				ve = 2,
				Me = 3,
				be = 4,
				we = 5,
				Le = 6,
				De = 7,
				Te = 8;

			function ke(e) {
				return Se(e) ? 366 : 365
			}

			function Se(e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			}
			V("Y", 0, 0, function () {
				var e = this.year();
				return e <= 9999 ? "" + e : "+" + e
			}), V(0, ["YY", 2], 0, function () {
				return this.year() % 100
			}), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), j("year", 1), ue("Y", ae), ue("YY", K, q), ue("YYYY", ne, J), ue("YYYYY", ie, $), ue("YYYYYY", ie, $), fe(["YYYYY", "YYYYYY"], _e), fe("YYYY", function (e, t) {
				t[_e] = 2 === e.length ? r.parseTwoDigitYear(e) : L(e)
			}), fe("YY", function (e, t) {
				t[_e] = r.parseTwoDigitYear(e)
			}), fe("Y", function (e, t) {
				t[_e] = parseInt(e, 10)
			}), r.parseTwoDigitYear = function (e) {
				return L(e) + (L(e) > 68 ? 1900 : 2e3)
			};
			var xe, Ye = Ee("FullYear", !0);

			function Ee(e, t) {
				return function (n) {
					return null != n ? (He(this, e, n), r.updateOffset(this, t), this) : Ce(this, e)
				}
			}

			function Ce(e, t) {
				return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
			}

			function He(e, t, n) {
				e.isValid() && !isNaN(n) && ("FullYear" === t && Se(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
			}

			function Pe(e, t) {
				if (isNaN(e) || isNaN(t)) return NaN;
				var n, i = (t % (n = 12) + n) % n;
				return e += (t - i) / 12, 1 === i ? Se(e) ? 29 : 28 : 31 - i % 7 % 2
			}
			xe = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
				var t;
				for (t = 0; t < this.length; ++t)
					if (this[t] === e) return t;
				return -1
			}, V("M", ["MM", 2], "Mo", function () {
				return this.month() + 1
			}), V("MMM", 0, 0, function (e) {
				return this.localeData().monthsShort(this, e)
			}), V("MMMM", 0, 0, function (e) {
				return this.localeData().months(this, e)
			}), O("month", "M"), j("month", 8), ue("M", K), ue("MM", K, q), ue("MMM", function (e, t) {
				return t.monthsShortRegex(e)
			}), ue("MMMM", function (e, t) {
				return t.monthsRegex(e)
			}), fe(["M", "MM"], function (e, t) {
				t[ye] = L(e) - 1
			}), fe(["MMM", "MMMM"], function (e, t, n, i) {
				var r = n._locale.monthsParse(e, i, n._strict);
				null != r ? t[ye] = r : f(n).invalidMonth = e
			});
			var Oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
				Ae = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				Ie = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

			function Re(e, t) {
				var n;
				if (!e.isValid()) return e;
				if ("string" == typeof t)
					if (/^\d+$/.test(t)) t = L(t);
					else if (!s(t = e.localeData().monthsParse(t))) return e;
				return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
			}

			function je(e) {
				return null != e ? (Re(this, e), r.updateOffset(this, !0), this) : Ce(this, "Month")
			}
			var Fe = se,
				Ne = se;

			function We() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, i = [],
					r = [],
					a = [];
				for (t = 0; t < 12; t++) n = p([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
				for (i.sort(e), r.sort(e), a.sort(e), t = 0; t < 12; t++) i[t] = he(i[t]), r[t] = he(r[t]);
				for (t = 0; t < 24; t++) a[t] = he(a[t]);
				this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
			}

			function ze(e) {
				var t = new Date(Date.UTC.apply(null, arguments));
				return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
			}

			function Be(e, t, n) {
				var i = 7 + t - n,
					r = (7 + ze(e, 0, i).getUTCDay() - t) % 7;
				return -r + i - 1
			}

			function Ve(e, t, n, i, r) {
				var a, o, l = (7 + n - i) % 7,
					s = Be(e, i, r),
					d = 1 + 7 * (t - 1) + l + s;
				return d <= 0 ? o = ke(a = e - 1) + d : d > ke(e) ? (a = e + 1, o = d - ke(e)) : (a = e, o = d), {
					year: a,
					dayOfYear: o
				}
			}

			function Ge(e, t, n) {
				var i, r, a = Be(e.year(), t, n),
					o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
				return o < 1 ? (r = e.year() - 1, i = o + Ue(r, t, n)) : o > Ue(e.year(), t, n) ? (i = o - Ue(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = o), {
					week: i,
					year: r
				}
			}

			function Ue(e, t, n) {
				var i = Be(e, t, n),
					r = Be(e + 1, t, n);
				return (ke(e) - i + r) / 7
			}
			V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), j("week", 5), j("isoWeek", 5), ue("w", K), ue("ww", K, q), ue("W", K), ue("WW", K, q), me(["w", "ww", "W", "WW"], function (e, t, n, i) {
				t[i.substr(0, 1)] = L(e)
			}), V("d", 0, "do", "day"), V("dd", 0, 0, function (e) {
				return this.localeData().weekdaysMin(this, e)
			}), V("ddd", 0, 0, function (e) {
				return this.localeData().weekdaysShort(this, e)
			}), V("dddd", 0, 0, function (e) {
				return this.localeData().weekdays(this, e)
			}), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), ue("d", K), ue("e", K), ue("E", K), ue("dd", function (e, t) {
				return t.weekdaysMinRegex(e)
			}), ue("ddd", function (e, t) {
				return t.weekdaysShortRegex(e)
			}), ue("dddd", function (e, t) {
				return t.weekdaysRegex(e)
			}), me(["dd", "ddd", "dddd"], function (e, t, n, i) {
				var r = n._locale.weekdaysParse(e, i, n._strict);
				null != r ? t.d = r : f(n).invalidWeekday = e
			}), me(["d", "e", "E"], function (e, t, n, i) {
				t[i] = L(e)
			});
			var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				Je = se,
				$e = se,
				Ke = se;

			function Qe() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, i, r, a, o = [],
					l = [],
					s = [],
					d = [];
				for (t = 0; t < 7; t++) n = p([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), o.push(i), l.push(r), s.push(a), d.push(i), d.push(r), d.push(a);
				for (o.sort(e), l.sort(e), s.sort(e), d.sort(e), t = 0; t < 7; t++) l[t] = he(l[t]), s[t] = he(s[t]), d[t] = he(d[t]);
				this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
			}

			function et() {
				return this.hours() % 12 || 12
			}

			function tt(e, t) {
				V(e, 0, 0, function () {
					return this.localeData().meridiem(this.hours(), this.minutes(), t)
				})
			}

			function nt(e, t) {
				return t._meridiemParse
			}
			V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, et), V("k", ["kk", 2], 0, function () {
				return this.hours() || 24
			}), V("hmm", 0, 0, function () {
				return "" + et.apply(this) + F(this.minutes(), 2)
			}), V("hmmss", 0, 0, function () {
				return "" + et.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2)
			}), V("Hmm", 0, 0, function () {
				return "" + this.hours() + F(this.minutes(), 2)
			}), V("Hmmss", 0, 0, function () {
				return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
			}), tt("a", !0), tt("A", !1), O("hour", "h"), j("hour", 13), ue("a", nt), ue("A", nt), ue("H", K), ue("h", K), ue("k", K), ue("HH", K, q), ue("hh", K, q), ue("kk", K, q), ue("hmm", Q), ue("hmmss", ee), ue("Hmm", Q), ue("Hmmss", ee), fe(["H", "HH"], Me), fe(["k", "kk"], function (e, t, n) {
				var i = L(e);
				t[Me] = 24 === i ? 0 : i
			}), fe(["a", "A"], function (e, t, n) {
				n._isPm = n._locale.isPM(e), n._meridiem = e
			}), fe(["h", "hh"], function (e, t, n) {
				t[Me] = L(e), f(n).bigHour = !0
			}), fe("hmm", function (e, t, n) {
				var i = e.length - 2;
				t[Me] = L(e.substr(0, i)), t[be] = L(e.substr(i)), f(n).bigHour = !0
			}), fe("hmmss", function (e, t, n) {
				var i = e.length - 4,
					r = e.length - 2;
				t[Me] = L(e.substr(0, i)), t[be] = L(e.substr(i, 2)), t[we] = L(e.substr(r)), f(n).bigHour = !0
			}), fe("Hmm", function (e, t, n) {
				var i = e.length - 2;
				t[Me] = L(e.substr(0, i)), t[be] = L(e.substr(i))
			}), fe("Hmmss", function (e, t, n) {
				var i = e.length - 4,
					r = e.length - 2;
				t[Me] = L(e.substr(0, i)), t[be] = L(e.substr(i, 2)), t[we] = L(e.substr(r))
			});
			var it, rt = Ee("Hours", !0),
				at = {
					calendar: {
						sameDay: "[Today at] LT",
						nextDay: "[Tomorrow at] LT",
						nextWeek: "dddd [at] LT",
						lastDay: "[Yesterday at] LT",
						lastWeek: "[Last] dddd [at] LT",
						sameElse: "L"
					},
					longDateFormat: {
						LTS: "h:mm:ss A",
						LT: "h:mm A",
						L: "MM/DD/YYYY",
						LL: "MMMM D, YYYY",
						LLL: "MMMM D, YYYY h:mm A",
						LLLL: "dddd, MMMM D, YYYY h:mm A"
					},
					invalidDate: "Invalid date",
					ordinal: "%d",
					dayOfMonthOrdinalParse: /\d{1,2}/,
					relativeTime: {
						future: "in %s",
						past: "%s ago",
						s: "a few seconds",
						ss: "%d seconds",
						m: "a minute",
						mm: "%d minutes",
						h: "an hour",
						hh: "%d hours",
						d: "a day",
						dd: "%d days",
						M: "a month",
						MM: "%d months",
						y: "a year",
						yy: "%d years"
					},
					months: Ae,
					monthsShort: Ie,
					week: {
						dow: 0,
						doy: 6
					},
					weekdays: Ze,
					weekdaysMin: Xe,
					weekdaysShort: qe,
					meridiemParse: /[ap]\.?m?\.?/i
				},
				ot = {},
				lt = {};

			function st(e) {
				return e ? e.toLowerCase().replace("_", "-") : e
			}

			function dt(t) {
				var i = null;
				if (!ot[t] && void 0 !== e && e && e.exports) try {
					i = it._abbr, n(159)("./" + t), ut(i)
				} catch (e) {}
				return ot[t]
			}

			function ut(e, t) {
				var n;
				return e && ((n = l(t) ? ht(e) : ct(e, t)) ? it = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), it._abbr
			}

			function ct(e, t) {
				if (null !== t) {
					var n, i = at;
					if (t.abbr = e, null != ot[e]) Y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), i = ot[e]._config;
					else if (null != t.parentLocale)
						if (null != ot[t.parentLocale]) i = ot[t.parentLocale]._config;
						else {
							if (null == (n = dt(t.parentLocale))) return lt[t.parentLocale] || (lt[t.parentLocale] = []), lt[t.parentLocale].push({
								name: e,
								config: t
							}), null;
							i = n._config
						}
					return ot[e] = new H(C(i, t)), lt[e] && lt[e].forEach(function (e) {
						ct(e.name, e.config)
					}), ut(e), ot[e]
				}
				return delete ot[e], null
			}

			function ht(e) {
				var t;
				if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return it;
				if (!a(e)) {
					if (t = dt(e)) return t;
					e = [e]
				}
				return function (e) {
					for (var t, n, i, r, a = 0; a < e.length;) {
						for (r = st(e[a]).split("-"), t = r.length, n = (n = st(e[a + 1])) ? n.split("-") : null; t > 0;) {
							if (i = dt(r.slice(0, t).join("-"))) return i;
							if (n && n.length >= t && D(r, n, !0) >= t - 1) break;
							t--
						}
						a++
					}
					return it
				}(e)
			}

			function pt(e) {
				var t, n = e._a;
				return n && -2 === f(e).overflow && (t = n[ye] < 0 || n[ye] > 11 ? ye : n[ve] < 1 || n[ve] > Pe(n[_e], n[ye]) ? ve : n[Me] < 0 || n[Me] > 24 || 24 === n[Me] && (0 !== n[be] || 0 !== n[we] || 0 !== n[Le]) ? Me : n[be] < 0 || n[be] > 59 ? be : n[we] < 0 || n[we] > 59 ? we : n[Le] < 0 || n[Le] > 999 ? Le : -1, f(e)._overflowDayOfYear && (t < _e || t > ve) && (t = ve), f(e)._overflowWeeks && -1 === t && (t = De), f(e)._overflowWeekday && -1 === t && (t = Te), f(e).overflow = t), e
			}

			function ft(e, t, n) {
				return null != e ? e : null != t ? t : n
			}

			function mt(e) {
				var t, n, i, a, o, l = [];
				if (!e._d) {
					for (i = function (e) {
							var t = new Date(r.now());
							return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
						}(e), e._w && null == e._a[ve] && null == e._a[ye] && function (e) {
							var t, n, i, r, a, o, l, s;
							if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1, o = 4, n = ft(t.GG, e._a[_e], Ge(Et(), 1, 4).year), i = ft(t.W, 1), ((r = ft(t.E, 1)) < 1 || r > 7) && (s = !0);
							else {
								a = e._locale._week.dow, o = e._locale._week.doy;
								var d = Ge(Et(), a, o);
								n = ft(t.gg, e._a[_e], d.year), i = ft(t.w, d.week), null != t.d ? ((r = t.d) < 0 || r > 6) && (s = !0) : null != t.e ? (r = t.e + a, (t.e < 0 || t.e > 6) && (s = !0)) : r = a
							}
							i < 1 || i > Ue(n, a, o) ? f(e)._overflowWeeks = !0 : null != s ? f(e)._overflowWeekday = !0 : (l = Ve(n, i, r, a, o), e._a[_e] = l.year, e._dayOfYear = l.dayOfYear)
						}(e), null != e._dayOfYear && (o = ft(e._a[_e], i[_e]), (e._dayOfYear > ke(o) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = ze(o, 0, e._dayOfYear), e._a[ye] = n.getUTCMonth(), e._a[ve] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = l[t] = i[t];
					for (; t < 7; t++) e._a[t] = l[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
					24 === e._a[Me] && 0 === e._a[be] && 0 === e._a[we] && 0 === e._a[Le] && (e._nextDay = !0, e._a[Me] = 0), e._d = (e._useUTC ? ze : function (e, t, n, i, r, a, o) {
						var l = new Date(e, t, n, i, r, a, o);
						return e < 100 && e >= 0 && isFinite(l.getFullYear()) && l.setFullYear(e), l
					}).apply(null, l), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Me] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (f(e).weekdayMismatch = !0)
				}
			}
			var gt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				_t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				yt = /Z|[+-]\d\d(?::?\d\d)?/,
				vt = [
					["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
					["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
					["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
					["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
					["YYYY-DDD", /\d{4}-\d{3}/],
					["YYYY-MM", /\d{4}-\d\d/, !1],
					["YYYYYYMMDD", /[+-]\d{10}/],
					["YYYYMMDD", /\d{8}/],
					["GGGG[W]WWE", /\d{4}W\d{3}/],
					["GGGG[W]WW", /\d{4}W\d{2}/, !1],
					["YYYYDDD", /\d{7}/]
				],
				Mt = [
					["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
					["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
					["HH:mm:ss", /\d\d:\d\d:\d\d/],
					["HH:mm", /\d\d:\d\d/],
					["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
					["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
					["HHmmss", /\d\d\d\d\d\d/],
					["HHmm", /\d\d\d\d/],
					["HH", /\d\d/]
				],
				bt = /^\/?Date\((\-?\d+)/i;

			function wt(e) {
				var t, n, i, r, a, o, l = e._i,
					s = gt.exec(l) || _t.exec(l);
				if (s) {
					for (f(e).iso = !0, t = 0, n = vt.length; t < n; t++)
						if (vt[t][1].exec(s[1])) {
							r = vt[t][0], i = !1 !== vt[t][2];
							break
						}
					if (null == r) return void(e._isValid = !1);
					if (s[3]) {
						for (t = 0, n = Mt.length; t < n; t++)
							if (Mt[t][1].exec(s[3])) {
								a = (s[2] || " ") + Mt[t][0];
								break
							}
						if (null == a) return void(e._isValid = !1)
					}
					if (!i && null != a) return void(e._isValid = !1);
					if (s[4]) {
						if (!yt.exec(s[4])) return void(e._isValid = !1);
						o = "Z"
					}
					e._f = r + (a || "") + (o || ""), St(e)
				} else e._isValid = !1
			}
			var Lt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

			function Dt(e) {
				var t = parseInt(e, 10);
				return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
			}
			var Tt = {
				UT: 0,
				GMT: 0,
				EDT: -240,
				EST: -300,
				CDT: -300,
				CST: -360,
				MDT: -360,
				MST: -420,
				PDT: -420,
				PST: -480
			};

			function kt(e) {
				var t, n, i, r, a, o, l, s = Lt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
				if (s) {
					var d = (t = s[4], n = s[3], i = s[2], r = s[5], a = s[6], o = s[7], l = [Dt(t), Ie.indexOf(n), parseInt(i, 10), parseInt(r, 10), parseInt(a, 10)], o && l.push(parseInt(o, 10)), l);
					if (! function (e, t, n) {
							if (e) {
								var i = qe.indexOf(e),
									r = new Date(t[0], t[1], t[2]).getDay();
								if (i !== r) return f(n).weekdayMismatch = !0, n._isValid = !1, !1
							}
							return !0
						}(s[1], d, e)) return;
					e._a = d, e._tzm = function (e, t, n) {
						if (e) return Tt[e];
						if (t) return 0;
						var i = parseInt(n, 10),
							r = i % 100,
							a = (i - r) / 100;
						return 60 * a + r
					}(s[8], s[9], s[10]), e._d = ze.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), f(e).rfc2822 = !0
				} else e._isValid = !1
			}

			function St(e) {
				if (e._f !== r.ISO_8601)
					if (e._f !== r.RFC_2822) {
						e._a = [], f(e).empty = !0;
						var t, n, i, a, o, l = "" + e._i,
							s = l.length,
							d = 0;
						for (i = U(e._f, e._locale).match(N) || [], t = 0; t < i.length; t++) a = i[t], (n = (l.match(ce(a, e)) || [])[0]) && ((o = l.substr(0, l.indexOf(n))).length > 0 && f(e).unusedInput.push(o), l = l.slice(l.indexOf(n) + n.length), d += n.length), B[a] ? (n ? f(e).empty = !1 : f(e).unusedTokens.push(a), ge(a, n, e)) : e._strict && !n && f(e).unusedTokens.push(a);
						f(e).charsLeftOver = s - d, l.length > 0 && f(e).unusedInput.push(l), e._a[Me] <= 12 && !0 === f(e).bigHour && e._a[Me] > 0 && (f(e).bigHour = void 0), f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[Me] = (u = e._locale, c = e._a[Me], null == (h = e._meridiem) ? c : null != u.meridiemHour ? u.meridiemHour(c, h) : null != u.isPM ? ((p = u.isPM(h)) && c < 12 && (c += 12), p || 12 !== c || (c = 0), c) : c), mt(e), pt(e)
					} else kt(e);
				else wt(e);
				var u, c, h, p
			}

			function xt(e) {
				var t = e._i,
					n = e._f;
				return e._locale = e._locale || ht(e._l), null === t || void 0 === n && "" === t ? g({
					nullInput: !0
				}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new M(pt(t)) : (d(t) ? e._d = t : a(n) ? function (e) {
					var t, n, i, r, a;
					if (0 === e._f.length) return f(e).invalidFormat = !0, void(e._d = new Date(NaN));
					for (r = 0; r < e._f.length; r++) a = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], St(t), m(t) && (a += f(t).charsLeftOver, a += 10 * f(t).unusedTokens.length, f(t).score = a, (null == i || a < i) && (i = a, n = t));
					h(e, n || t)
				}(e) : n ? St(e) : function (e) {
					var t = e._i;
					l(t) ? e._d = new Date(r.now()) : d(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function (e) {
						var t = bt.exec(e._i);
						null === t ? (wt(e), !1 === e._isValid && (delete e._isValid, kt(e), !1 === e._isValid && (delete e._isValid, r.createFromInputFallback(e)))) : e._d = new Date(+t[1])
					}(e) : a(t) ? (e._a = u(t.slice(0), function (e) {
						return parseInt(e, 10)
					}), mt(e)) : o(t) ? function (e) {
						if (!e._d) {
							var t = I(e._i);
							e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
								return e && parseInt(e, 10)
							}), mt(e)
						}
					}(e) : s(t) ? e._d = new Date(t) : r.createFromInputFallback(e)
				}(e), m(e) || (e._d = null), e))
			}

			function Yt(e, t, n, i, r) {
				var l, s = {};
				return !0 !== n && !1 !== n || (i = n, n = void 0), (o(e) && function (e) {
					if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
					var t;
					for (t in e)
						if (e.hasOwnProperty(t)) return !1;
					return !0
				}(e) || a(e) && 0 === e.length) && (e = void 0), s._isAMomentObject = !0, s._useUTC = s._isUTC = r, s._l = n, s._i = e, s._f = t, s._strict = i, (l = new M(pt(xt(s))))._nextDay && (l.add(1, "d"), l._nextDay = void 0), l
			}

			function Et(e, t, n, i) {
				return Yt(e, t, n, i, !1)
			}
			r.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
				e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
			}), r.ISO_8601 = function () {}, r.RFC_2822 = function () {};
			var Ct = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var e = Et.apply(null, arguments);
					return this.isValid() && e.isValid() ? e < this ? this : e : g()
				}),
				Ht = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var e = Et.apply(null, arguments);
					return this.isValid() && e.isValid() ? e > this ? this : e : g()
				});

			function Pt(e, t) {
				var n, i;
				if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Et();
				for (n = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](n) || (n = t[i]);
				return n
			}
			var Ot = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

			function At(e) {
				var t = I(e),
					n = t.year || 0,
					i = t.quarter || 0,
					r = t.month || 0,
					a = t.week || t.isoWeek || 0,
					o = t.day || 0,
					l = t.hour || 0,
					s = t.minute || 0,
					d = t.second || 0,
					u = t.millisecond || 0;
				this._isValid = function (e) {
					for (var t in e)
						if (-1 === xe.call(Ot, t) || null != e[t] && isNaN(e[t])) return !1;
					for (var n = !1, i = 0; i < Ot.length; ++i)
						if (e[Ot[i]]) {
							if (n) return !1;
							parseFloat(e[Ot[i]]) !== L(e[Ot[i]]) && (n = !0)
						}
					return !0
				}(t), this._milliseconds = +u + 1e3 * d + 6e4 * s + 1e3 * l * 60 * 60, this._days = +o + 7 * a, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ht(), this._bubble()
			}

			function It(e) {
				return e instanceof At
			}

			function Rt(e) {
				return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
			}

			function jt(e, t) {
				V(e, 0, 0, function () {
					var e = this.utcOffset(),
						n = "+";
					return e < 0 && (e = -e, n = "-"), n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
				})
			}
			jt("Z", ":"), jt("ZZ", ""), ue("Z", le), ue("ZZ", le), fe(["Z", "ZZ"], function (e, t, n) {
				n._useUTC = !0, n._tzm = Nt(le, e)
			});
			var Ft = /([\+\-]|\d\d)/gi;

			function Nt(e, t) {
				var n = (t || "").match(e);
				if (null === n) return null;
				var i = n[n.length - 1] || [],
					r = (i + "").match(Ft) || ["-", 0, 0],
					a = 60 * r[1] + L(r[2]);
				return 0 === a ? 0 : "+" === r[0] ? a : -a
			}

			function Wt(e, t) {
				var n, i;
				return t._isUTC ? (n = t.clone(), i = (b(e) || d(e) ? e.valueOf() : Et(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + i), r.updateOffset(n, !1), n) : Et(e).local()
			}

			function zt(e) {
				return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
			}

			function Bt() {
				return !!this.isValid() && this._isUTC && 0 === this._offset
			}
			r.updateOffset = function () {};
			var Vt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
				Gt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

			function Ut(e, t) {
				var n, i, r, a, o, l, d = e,
					u = null;
				return It(e) ? d = {
					ms: e._milliseconds,
					d: e._days,
					M: e._months
				} : s(e) ? (d = {}, t ? d[t] = e : d.milliseconds = e) : (u = Vt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, d = {
					y: 0,
					d: L(u[ve]) * n,
					h: L(u[Me]) * n,
					m: L(u[be]) * n,
					s: L(u[we]) * n,
					ms: L(Rt(1e3 * u[Le])) * n
				}) : (u = Gt.exec(e)) ? (n = "-" === u[1] ? -1 : 1, d = {
					y: Zt(u[2], n),
					M: Zt(u[3], n),
					w: Zt(u[4], n),
					d: Zt(u[5], n),
					h: Zt(u[6], n),
					m: Zt(u[7], n),
					s: Zt(u[8], n)
				}) : null == d ? d = {} : "object" == typeof d && ("from" in d || "to" in d) && (a = Et(d.from), o = Et(d.to), r = a.isValid() && o.isValid() ? (o = Wt(o, a), a.isBefore(o) ? l = qt(a, o) : ((l = qt(o, a)).milliseconds = -l.milliseconds, l.months = -l.months), l) : {
					milliseconds: 0,
					months: 0
				}, (d = {}).ms = r.milliseconds, d.M = r.months), i = new At(d), It(e) && c(e, "_locale") && (i._locale = e._locale), i
			}

			function Zt(e, t) {
				var n = e && parseFloat(e.replace(",", "."));
				return (isNaN(n) ? 0 : n) * t
			}

			function qt(e, t) {
				var n = {
					milliseconds: 0,
					months: 0
				};
				return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
			}

			function Xt(e, t) {
				return function (n, i) {
					var r;
					return null === i || isNaN(+i) || (Y(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = i, i = r), Jt(this, Ut(n = "string" == typeof n ? +n : n, i), e), this
				}
			}

			function Jt(e, t, n, i) {
				var a = t._milliseconds,
					o = Rt(t._days),
					l = Rt(t._months);
				e.isValid() && (i = null == i || i, l && Re(e, Ce(e, "Month") + l * n), o && He(e, "Date", Ce(e, "Date") + o * n), a && e._d.setTime(e._d.valueOf() + a * n), i && r.updateOffset(e, o || l))
			}
			Ut.fn = At.prototype, Ut.invalid = function () {
				return Ut(NaN)
			};
			var $t = Xt(1, "add"),
				Kt = Xt(-1, "subtract");

			function Qt(e, t) {
				var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
					a = e.clone().add(r, "months");
				return t - a < 0 ? (n = e.clone().add(r - 1, "months"), i = (t - a) / (a - n)) : (n = e.clone().add(r + 1, "months"), i = (t - a) / (n - a)), -(r + i) || 0
			}

			function en(e) {
				var t;
				return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this)
			}
			r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
			var tn = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
				return void 0 === e ? this.localeData() : this.locale(e)
			});

			function nn() {
				return this._locale
			}

			function rn(e, t) {
				V(0, [e, e.length], 0, t)
			}

			function an(e, t, n, i, r) {
				var a;
				return null == e ? Ge(this, i, r).year : (a = Ue(e, i, r), t > a && (t = a), function (e, t, n, i, r) {
					var a = Ve(e, t, n, i, r),
						o = ze(a.year, 0, a.dayOfYear);
					return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
				}.call(this, e, t, n, i, r))
			}
			V(0, ["gg", 2], 0, function () {
				return this.weekYear() % 100
			}), V(0, ["GG", 2], 0, function () {
				return this.isoWeekYear() % 100
			}), rn("gggg", "weekYear"), rn("ggggg", "weekYear"), rn("GGGG", "isoWeekYear"), rn("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), ue("G", ae), ue("g", ae), ue("GG", K, q), ue("gg", K, q), ue("GGGG", ne, J), ue("gggg", ne, J), ue("GGGGG", ie, $), ue("ggggg", ie, $), me(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, i) {
				t[i.substr(0, 2)] = L(e)
			}), me(["gg", "GG"], function (e, t, n, i) {
				t[i] = r.parseTwoDigitYear(e)
			}), V("Q", 0, "Qo", "quarter"), O("quarter", "Q"), j("quarter", 7), ue("Q", Z), fe("Q", function (e, t) {
				t[ye] = 3 * (L(e) - 1)
			}), V("D", ["DD", 2], "Do", "date"), O("date", "D"), j("date", 9), ue("D", K), ue("DD", K, q), ue("Do", function (e, t) {
				return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
			}), fe(["D", "DD"], ve), fe("Do", function (e, t) {
				t[ve] = L(e.match(K)[0])
			});
			var on = Ee("Date", !0);
			V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), j("dayOfYear", 4), ue("DDD", te), ue("DDDD", X), fe(["DDD", "DDDD"], function (e, t, n) {
				n._dayOfYear = L(e)
			}), V("m", ["mm", 2], 0, "minute"), O("minute", "m"), j("minute", 14), ue("m", K), ue("mm", K, q), fe(["m", "mm"], be);
			var ln = Ee("Minutes", !1);
			V("s", ["ss", 2], 0, "second"), O("second", "s"), j("second", 15), ue("s", K), ue("ss", K, q), fe(["s", "ss"], we);
			var sn, dn = Ee("Seconds", !1);
			for (V("S", 0, 0, function () {
					return ~~(this.millisecond() / 100)
				}), V(0, ["SS", 2], 0, function () {
					return ~~(this.millisecond() / 10)
				}), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function () {
					return 10 * this.millisecond()
				}), V(0, ["SSSSS", 5], 0, function () {
					return 100 * this.millisecond()
				}), V(0, ["SSSSSS", 6], 0, function () {
					return 1e3 * this.millisecond()
				}), V(0, ["SSSSSSS", 7], 0, function () {
					return 1e4 * this.millisecond()
				}), V(0, ["SSSSSSSS", 8], 0, function () {
					return 1e5 * this.millisecond()
				}), V(0, ["SSSSSSSSS", 9], 0, function () {
					return 1e6 * this.millisecond()
				}), O("millisecond", "ms"), j("millisecond", 16), ue("S", te, Z), ue("SS", te, q), ue("SSS", te, X), sn = "SSSS"; sn.length <= 9; sn += "S") ue(sn, re);

			function un(e, t) {
				t[Le] = L(1e3 * ("0." + e))
			}
			for (sn = "S"; sn.length <= 9; sn += "S") fe(sn, un);
			var cn = Ee("Milliseconds", !1);
			V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
			var hn = M.prototype;

			function pn(e) {
				return e
			}
			hn.add = $t, hn.calendar = function (e, t) {
				var n = e || Et(),
					i = Wt(n, this).startOf("day"),
					a = r.calendarFormat(this, i) || "sameElse",
					o = t && (E(t[a]) ? t[a].call(this, n) : t[a]);
				return this.format(o || this.localeData().calendar(a, this, Et(n)))
			}, hn.clone = function () {
				return new M(this)
			}, hn.diff = function (e, t, n) {
				var i, r, a;
				if (!this.isValid()) return NaN;
				if (!(i = Wt(e, this)).isValid()) return NaN;
				switch (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = A(t)) {
					case "year":
						a = Qt(this, i) / 12;
						break;
					case "month":
						a = Qt(this, i);
						break;
					case "quarter":
						a = Qt(this, i) / 3;
						break;
					case "second":
						a = (this - i) / 1e3;
						break;
					case "minute":
						a = (this - i) / 6e4;
						break;
					case "hour":
						a = (this - i) / 36e5;
						break;
					case "day":
						a = (this - i - r) / 864e5;
						break;
					case "week":
						a = (this - i - r) / 6048e5;
						break;
					default:
						a = this - i
				}
				return n ? a : w(a)
			}, hn.endOf = function (e) {
				return void 0 === (e = A(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
			}, hn.format = function (e) {
				e || (e = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
				var t = G(this, e);
				return this.localeData().postformat(t)
			}, hn.from = function (e, t) {
				return this.isValid() && (b(e) && e.isValid() || Et(e).isValid()) ? Ut({
					to: this,
					from: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}, hn.fromNow = function (e) {
				return this.from(Et(), e)
			}, hn.to = function (e, t) {
				return this.isValid() && (b(e) && e.isValid() || Et(e).isValid()) ? Ut({
					from: this,
					to: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}, hn.toNow = function (e) {
				return this.to(Et(), e)
			}, hn.get = function (e) {
				return E(this[e = A(e)]) ? this[e]() : this
			}, hn.invalidAt = function () {
				return f(this).overflow
			}, hn.isAfter = function (e, t) {
				var n = b(e) ? e : Et(e);
				return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
			}, hn.isBefore = function (e, t) {
				var n = b(e) ? e : Et(e);
				return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
			}, hn.isBetween = function (e, t, n, i) {
				var r = b(e) ? e : Et(e),
					a = b(t) ? t : Et(t);
				return !!(this.isValid() && r.isValid() && a.isValid()) && (("(" === (i = i || "()")[0] ? this.isAfter(r, n) : !this.isBefore(r, n)) && (")" === i[1] ? this.isBefore(a, n) : !this.isAfter(a, n)))
			}, hn.isSame = function (e, t) {
				var n, i = b(e) ? e : Et(e);
				return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
			}, hn.isSameOrAfter = function (e, t) {
				return this.isSame(e, t) || this.isAfter(e, t)
			}, hn.isSameOrBefore = function (e, t) {
				return this.isSame(e, t) || this.isBefore(e, t)
			}, hn.isValid = function () {
				return m(this)
			}, hn.lang = tn, hn.locale = en, hn.localeData = nn, hn.max = Ht, hn.min = Ct, hn.parsingFlags = function () {
				return h({}, f(this))
			}, hn.set = function (e, t) {
				if ("object" == typeof e)
					for (var n = function (e) {
							var t = [];
							for (var n in e) t.push({
								unit: n,
								priority: R[n]
							});
							return t.sort(function (e, t) {
								return e.priority - t.priority
							}), t
						}(e = I(e)), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit]);
				else if (E(this[e = A(e)])) return this[e](t);
				return this
			}, hn.startOf = function (e) {
				switch (e = A(e)) {
					case "year":
						this.month(0);
					case "quarter":
					case "month":
						this.date(1);
					case "week":
					case "isoWeek":
					case "day":
					case "date":
						this.hours(0);
					case "hour":
						this.minutes(0);
					case "minute":
						this.seconds(0);
					case "second":
						this.milliseconds(0)
				}
				return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
			}, hn.subtract = Kt, hn.toArray = function () {
				var e = this;
				return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
			}, hn.toObject = function () {
				var e = this;
				return {
					years: e.year(),
					months: e.month(),
					date: e.date(),
					hours: e.hours(),
					minutes: e.minutes(),
					seconds: e.seconds(),
					milliseconds: e.milliseconds()
				}
			}, hn.toDate = function () {
				return new Date(this.valueOf())
			}, hn.toISOString = function (e) {
				if (!this.isValid()) return null;
				var t = !0 !== e,
					n = t ? this.clone().utc() : this;
				return n.year() < 0 || n.year() > 9999 ? G(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", G(n, "Z")) : G(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
			}, hn.inspect = function () {
				if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
				var e = "moment",
					t = "";
				this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
				var n = "[" + e + '("]',
					i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
					r = t + '[")]';
				return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + r)
			}, hn.toJSON = function () {
				return this.isValid() ? this.toISOString() : null
			}, hn.toString = function () {
				return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			}, hn.unix = function () {
				return Math.floor(this.valueOf() / 1e3)
			}, hn.valueOf = function () {
				return this._d.valueOf() - 6e4 * (this._offset || 0)
			}, hn.creationData = function () {
				return {
					input: this._i,
					format: this._f,
					locale: this._locale,
					isUTC: this._isUTC,
					strict: this._strict
				}
			}, hn.year = Ye, hn.isLeapYear = function () {
				return Se(this.year())
			}, hn.weekYear = function (e) {
				return an.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
			}, hn.isoWeekYear = function (e) {
				return an.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
			}, hn.quarter = hn.quarters = function (e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
			}, hn.month = je, hn.daysInMonth = function () {
				return Pe(this.year(), this.month())
			}, hn.week = hn.weeks = function (e) {
				var t = this.localeData().week(this);
				return null == e ? t : this.add(7 * (e - t), "d")
			}, hn.isoWeek = hn.isoWeeks = function (e) {
				var t = Ge(this, 1, 4).week;
				return null == e ? t : this.add(7 * (e - t), "d")
			}, hn.weeksInYear = function () {
				var e = this.localeData()._week;
				return Ue(this.year(), e.dow, e.doy)
			}, hn.isoWeeksInYear = function () {
				return Ue(this.year(), 1, 4)
			}, hn.date = on, hn.day = hn.days = function (e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != e ? (e = function (e, t) {
					return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
				}(e, this.localeData()), this.add(e - t, "d")) : t
			}, hn.weekday = function (e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return null == e ? t : this.add(e - t, "d")
			}, hn.isoWeekday = function (e) {
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					var t = function (e, t) {
						return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
					}(e, this.localeData());
					return this.day(this.day() % 7 ? t : t - 7)
				}
				return this.day() || 7
			}, hn.dayOfYear = function (e) {
				var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
				return null == e ? t : this.add(e - t, "d")
			}, hn.hour = hn.hours = rt, hn.minute = hn.minutes = ln, hn.second = hn.seconds = dn, hn.millisecond = hn.milliseconds = cn, hn.utcOffset = function (e, t, n) {
				var i, a = this._offset || 0;
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					if ("string" == typeof e) {
						if (null === (e = Nt(le, e))) return this
					} else Math.abs(e) < 16 && !n && (e *= 60);
					return !this._isUTC && t && (i = zt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), a !== e && (!t || this._changeInProgress ? Jt(this, Ut(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this
				}
				return this._isUTC ? a : zt(this)
			}, hn.utc = function (e) {
				return this.utcOffset(0, e)
			}, hn.local = function (e) {
				return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(zt(this), "m")), this
			}, hn.parseZone = function () {
				if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
				else if ("string" == typeof this._i) {
					var e = Nt(oe, this._i);
					null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
				}
				return this
			}, hn.hasAlignedHourOffset = function (e) {
				return !!this.isValid() && (e = e ? Et(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
			}, hn.isDST = function () {
				return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
			}, hn.isLocal = function () {
				return !!this.isValid() && !this._isUTC
			}, hn.isUtcOffset = function () {
				return !!this.isValid() && this._isUTC
			}, hn.isUtc = Bt, hn.isUTC = Bt, hn.zoneAbbr = function () {
				return this._isUTC ? "UTC" : ""
			}, hn.zoneName = function () {
				return this._isUTC ? "Coordinated Universal Time" : ""
			}, hn.dates = k("dates accessor is deprecated. Use date instead.", on), hn.months = k("months accessor is deprecated. Use month instead", je), hn.years = k("years accessor is deprecated. Use year instead", Ye), hn.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
				return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
			}), hn.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
				if (!l(this._isDSTShifted)) return this._isDSTShifted;
				var e = {};
				if (y(e, this), (e = xt(e))._a) {
					var t = e._isUTC ? p(e._a) : Et(e._a);
					this._isDSTShifted = this.isValid() && D(e._a, t.toArray()) > 0
				} else this._isDSTShifted = !1;
				return this._isDSTShifted
			});
			var fn = H.prototype;

			function mn(e, t, n, i) {
				var r = ht(),
					a = p().set(i, t);
				return r[n](a, e)
			}

			function gn(e, t, n) {
				if (s(e) && (t = e, e = void 0), e = e || "", null != t) return mn(e, t, n, "month");
				var i, r = [];
				for (i = 0; i < 12; i++) r[i] = mn(e, i, n, "month");
				return r
			}

			function _n(e, t, n, i) {
				"boolean" == typeof e ? (s(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, s(t) && (n = t, t = void 0), t = t || "");
				var r, a = ht(),
					o = e ? a._week.dow : 0;
				if (null != n) return mn(t, (n + o) % 7, i, "day");
				var l = [];
				for (r = 0; r < 7; r++) l[r] = mn(t, (r + o) % 7, i, "day");
				return l
			}
			fn.calendar = function (e, t, n) {
				var i = this._calendar[e] || this._calendar.sameElse;
				return E(i) ? i.call(t, n) : i
			}, fn.longDateFormat = function (e) {
				var t = this._longDateFormat[e],
					n = this._longDateFormat[e.toUpperCase()];
				return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
					return e.slice(1)
				}), this._longDateFormat[e])
			}, fn.invalidDate = function () {
				return this._invalidDate
			}, fn.ordinal = function (e) {
				return this._ordinal.replace("%d", e)
			}, fn.preparse = pn, fn.postformat = pn, fn.relativeTime = function (e, t, n, i) {
				var r = this._relativeTime[n];
				return E(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
			}, fn.pastFuture = function (e, t) {
				var n = this._relativeTime[e > 0 ? "future" : "past"];
				return E(n) ? n(t) : n.replace(/%s/i, t)
			}, fn.set = function (e) {
				var t, n;
				for (n in e) E(t = e[n]) ? this[n] = t : this["_" + n] = t;
				this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
			}, fn.months = function (e, t) {
				return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Oe).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
			}, fn.monthsShort = function (e, t) {
				return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Oe.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
			}, fn.monthsParse = function (e, t, n) {
				var i, r, a;
				if (this._monthsParseExact) return function (e, t, n) {
					var i, r, a, o = e.toLocaleLowerCase();
					if (!this._monthsParse)
						for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) a = p([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(a, "").toLocaleLowerCase();
					return n ? "MMM" === t ? -1 !== (r = xe.call(this._shortMonthsParse, o)) ? r : null : -1 !== (r = xe.call(this._longMonthsParse, o)) ? r : null : "MMM" === t ? -1 !== (r = xe.call(this._shortMonthsParse, o)) ? r : -1 !== (r = xe.call(this._longMonthsParse, o)) ? r : null : -1 !== (r = xe.call(this._longMonthsParse, o)) ? r : -1 !== (r = xe.call(this._shortMonthsParse, o)) ? r : null
				}.call(this, e, t, n);
				for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
					if (r = p([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (a = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
					if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
					if (!n && this._monthsParse[i].test(e)) return i
				}
			}, fn.monthsRegex = function (e) {
				return this._monthsParseExact ? (c(this, "_monthsRegex") || We.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = Ne), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
			}, fn.monthsShortRegex = function (e) {
				return this._monthsParseExact ? (c(this, "_monthsRegex") || We.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
			}, fn.week = function (e) {
				return Ge(e, this._week.dow, this._week.doy).week
			}, fn.firstDayOfYear = function () {
				return this._week.doy
			}, fn.firstDayOfWeek = function () {
				return this._week.dow
			}, fn.weekdays = function (e, t) {
				return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
			}, fn.weekdaysMin = function (e) {
				return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
			}, fn.weekdaysShort = function (e) {
				return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
			}, fn.weekdaysParse = function (e, t, n) {
				var i, r, a;
				if (this._weekdaysParseExact) return function (e, t, n) {
					var i, r, a, o = e.toLocaleLowerCase();
					if (!this._weekdaysParse)
						for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) a = p([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(a, "").toLocaleLowerCase();
					return n ? "dddd" === t ? -1 !== (r = xe.call(this._weekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = xe.call(this._shortWeekdaysParse, o)) ? r : null : -1 !== (r = xe.call(this._minWeekdaysParse, o)) ? r : null : "dddd" === t ? -1 !== (r = xe.call(this._weekdaysParse, o)) ? r : -1 !== (r = xe.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = xe.call(this._minWeekdaysParse, o)) ? r : null : "ddd" === t ? -1 !== (r = xe.call(this._shortWeekdaysParse, o)) ? r : -1 !== (r = xe.call(this._weekdaysParse, o)) ? r : -1 !== (r = xe.call(this._minWeekdaysParse, o)) ? r : null : -1 !== (r = xe.call(this._minWeekdaysParse, o)) ? r : -1 !== (r = xe.call(this._weekdaysParse, o)) ? r : -1 !== (r = xe.call(this._shortWeekdaysParse, o)) ? r : null
				}.call(this, e, t, n);
				for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
					if (r = p([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[i] || (a = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
					if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
					if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
					if (!n && this._weekdaysParse[i].test(e)) return i
				}
			}, fn.weekdaysRegex = function (e) {
				return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Je), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
			}, fn.weekdaysShortRegex = function (e) {
				return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = $e), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
			}, fn.weekdaysMinRegex = function (e) {
				return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ke), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
			}, fn.isPM = function (e) {
				return "p" === (e + "").toLowerCase().charAt(0)
			}, fn.meridiem = function (e, t, n) {
				return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
			}, ut("en", {
				dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function (e) {
					var t = e % 10,
						n = 1 === L(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
					return e + n
				}
			}), r.lang = k("moment.lang is deprecated. Use moment.locale instead.", ut), r.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ht);
			var yn = Math.abs;

			function vn(e, t, n, i) {
				var r = Ut(t, n);
				return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
			}

			function Mn(e) {
				return e < 0 ? Math.floor(e) : Math.ceil(e)
			}

			function bn(e) {
				return 4800 * e / 146097
			}

			function wn(e) {
				return 146097 * e / 4800
			}

			function Ln(e) {
				return function () {
					return this.as(e)
				}
			}
			var Dn = Ln("ms"),
				Tn = Ln("s"),
				kn = Ln("m"),
				Sn = Ln("h"),
				xn = Ln("d"),
				Yn = Ln("w"),
				En = Ln("M"),
				Cn = Ln("y");

			function Hn(e) {
				return function () {
					return this.isValid() ? this._data[e] : NaN
				}
			}
			var Pn = Hn("milliseconds"),
				On = Hn("seconds"),
				An = Hn("minutes"),
				In = Hn("hours"),
				Rn = Hn("days"),
				jn = Hn("months"),
				Fn = Hn("years"),
				Nn = Math.round,
				Wn = {
					ss: 44,
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					M: 11
				},
				zn = Math.abs;

			function Bn(e) {
				return (e > 0) - (e < 0) || +e
			}

			function Vn() {
				if (!this.isValid()) return this.localeData().invalidDate();
				var e, t, n = zn(this._milliseconds) / 1e3,
					i = zn(this._days),
					r = zn(this._months);
				e = w(n / 60), t = w(e / 60), n %= 60, e %= 60;
				var a = w(r / 12),
					o = r %= 12,
					l = i,
					s = t,
					d = e,
					u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
					c = this.asSeconds();
				if (!c) return "P0D";
				var h = c < 0 ? "-" : "",
					p = Bn(this._months) !== Bn(c) ? "-" : "",
					f = Bn(this._days) !== Bn(c) ? "-" : "",
					m = Bn(this._milliseconds) !== Bn(c) ? "-" : "";
				return h + "P" + (a ? p + a + "Y" : "") + (o ? p + o + "M" : "") + (l ? f + l + "D" : "") + (s || d || u ? "T" : "") + (s ? m + s + "H" : "") + (d ? m + d + "M" : "") + (u ? m + u + "S" : "")
			}
			var Gn = At.prototype;
			return Gn.isValid = function () {
				return this._isValid
			}, Gn.abs = function () {
				var e = this._data;
				return this._milliseconds = yn(this._milliseconds), this._days = yn(this._days), this._months = yn(this._months), e.milliseconds = yn(e.milliseconds), e.seconds = yn(e.seconds), e.minutes = yn(e.minutes), e.hours = yn(e.hours), e.months = yn(e.months), e.years = yn(e.years), this
			}, Gn.add = function (e, t) {
				return vn(this, e, t, 1)
			}, Gn.subtract = function (e, t) {
				return vn(this, e, t, -1)
			}, Gn.as = function (e) {
				if (!this.isValid()) return NaN;
				var t, n, i = this._milliseconds;
				if ("month" === (e = A(e)) || "year" === e) return t = this._days + i / 864e5, n = this._months + bn(t), "month" === e ? n : n / 12;
				switch (t = this._days + Math.round(wn(this._months)), e) {
					case "week":
						return t / 7 + i / 6048e5;
					case "day":
						return t + i / 864e5;
					case "hour":
						return 24 * t + i / 36e5;
					case "minute":
						return 1440 * t + i / 6e4;
					case "second":
						return 86400 * t + i / 1e3;
					case "millisecond":
						return Math.floor(864e5 * t) + i;
					default:
						throw new Error("Unknown unit " + e)
				}
			}, Gn.asMilliseconds = Dn, Gn.asSeconds = Tn, Gn.asMinutes = kn, Gn.asHours = Sn, Gn.asDays = xn, Gn.asWeeks = Yn, Gn.asMonths = En, Gn.asYears = Cn, Gn.valueOf = function () {
				return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * L(this._months / 12) : NaN
			}, Gn._bubble = function () {
				var e, t, n, i, r, a = this._milliseconds,
					o = this._days,
					l = this._months,
					s = this._data;
				return a >= 0 && o >= 0 && l >= 0 || a <= 0 && o <= 0 && l <= 0 || (a += 864e5 * Mn(wn(l) + o), o = 0, l = 0), s.milliseconds = a % 1e3, e = w(a / 1e3), s.seconds = e % 60, t = w(e / 60), s.minutes = t % 60, n = w(t / 60), s.hours = n % 24, o += w(n / 24), r = w(bn(o)), l += r, o -= Mn(wn(r)), i = w(l / 12), l %= 12, s.days = o, s.months = l, s.years = i, this
			}, Gn.clone = function () {
				return Ut(this)
			}, Gn.get = function (e) {
				return e = A(e), this.isValid() ? this[e + "s"]() : NaN
			}, Gn.milliseconds = Pn, Gn.seconds = On, Gn.minutes = An, Gn.hours = In, Gn.days = Rn, Gn.weeks = function () {
				return w(this.days() / 7)
			}, Gn.months = jn, Gn.years = Fn, Gn.humanize = function (e) {
				if (!this.isValid()) return this.localeData().invalidDate();
				var t = this.localeData(),
					n = function (e, t, n) {
						var i = Ut(e).abs(),
							r = Nn(i.as("s")),
							a = Nn(i.as("m")),
							o = Nn(i.as("h")),
							l = Nn(i.as("d")),
							s = Nn(i.as("M")),
							d = Nn(i.as("y")),
							u = r <= Wn.ss && ["s", r] || r < Wn.s && ["ss", r] || a <= 1 && ["m"] || a < Wn.m && ["mm", a] || o <= 1 && ["h"] || o < Wn.h && ["hh", o] || l <= 1 && ["d"] || l < Wn.d && ["dd", l] || s <= 1 && ["M"] || s < Wn.M && ["MM", s] || d <= 1 && ["y"] || ["yy", d];
						return u[2] = t, u[3] = +e > 0, u[4] = n,
							function (e, t, n, i, r) {
								return r.relativeTime(t || 1, !!n, e, i)
							}.apply(null, u)
					}(this, !e, t);
				return e && (n = t.pastFuture(+this, n)), t.postformat(n)
			}, Gn.toISOString = Vn, Gn.toString = Vn, Gn.toJSON = Vn, Gn.locale = en, Gn.localeData = nn, Gn.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vn), Gn.lang = tn, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), ue("x", ae), ue("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", function (e, t, n) {
				n._d = new Date(1e3 * parseFloat(e, 10))
			}), fe("x", function (e, t, n) {
				n._d = new Date(L(e))
			}), r.version = "2.23.0", t = Et, r.fn = hn, r.min = function () {
				return Pt("isBefore", [].slice.call(arguments, 0))
			}, r.max = function () {
				return Pt("isAfter", [].slice.call(arguments, 0))
			}, r.now = function () {
				return Date.now ? Date.now() : +new Date
			}, r.utc = p, r.unix = function (e) {
				return Et(1e3 * e)
			}, r.months = function (e, t) {
				return gn(e, t, "months")
			}, r.isDate = d, r.locale = ut, r.invalid = g, r.duration = Ut, r.isMoment = b, r.weekdays = function (e, t, n) {
				return _n(e, t, n, "weekdays")
			}, r.parseZone = function () {
				return Et.apply(null, arguments).parseZone()
			}, r.localeData = ht, r.isDuration = It, r.monthsShort = function (e, t) {
				return gn(e, t, "monthsShort")
			}, r.weekdaysMin = function (e, t, n) {
				return _n(e, t, n, "weekdaysMin")
			}, r.defineLocale = ct, r.updateLocale = function (e, t) {
				if (null != t) {
					var n, i, r = at;
					null != (i = dt(e)) && (r = i._config), t = C(r, t), (n = new H(t)).parentLocale = ot[e], ot[e] = n, ut(e)
				} else null != ot[e] && (null != ot[e].parentLocale ? ot[e] = ot[e].parentLocale : null != ot[e] && delete ot[e]);
				return ot[e]
			}, r.locales = function () {
				return S(ot)
			}, r.weekdaysShort = function (e, t, n) {
				return _n(e, t, n, "weekdaysShort")
			}, r.normalizeUnits = A, r.relativeTimeRounding = function (e) {
				return void 0 === e ? Nn : "function" == typeof e && (Nn = e, !0)
			}, r.relativeTimeThreshold = function (e, t) {
				return void 0 !== Wn[e] && (void 0 === t ? Wn[e] : (Wn[e] = t, "s" === e && (Wn.ss = t - 1), !0))
			}, r.calendarFormat = function (e, t) {
				var n = e.diff(t, "days", !0);
				return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
			}, r.prototype = hn, r.HTML5_FMT = {
				DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
				DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
				DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
				DATE: "YYYY-MM-DD",
				TIME: "HH:mm",
				TIME_SECONDS: "HH:mm:ss",
				TIME_MS: "HH:mm:ss.SSS",
				WEEK: "GGGG-[W]WW",
				MONTH: "YYYY-MM"
			}, r
		}()
	}).call(this, n(158)(e))
}, function (e, t, n) {
	var i;
	/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	! function (t, n) {
		"use strict";
		"object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");
			return n(e)
		} : n(t)
	}("undefined" != typeof window ? window : this, function (n, r) {
		"use strict";
		var a = [],
			o = n.document,
			l = Object.getPrototypeOf,
			s = a.slice,
			d = a.concat,
			u = a.push,
			c = a.indexOf,
			h = {},
			p = h.toString,
			f = h.hasOwnProperty,
			m = f.toString,
			g = m.call(Object),
			_ = {},
			y = function (e) {
				return "function" == typeof e && "number" != typeof e.nodeType
			},
			v = function (e) {
				return null != e && e === e.window
			},
			M = {
				type: !0,
				src: !0,
				noModule: !0
			};

		function b(e, t, n) {
			var i, r = (t = t || o).createElement("script");
			if (r.text = e, n)
				for (i in M) n[i] && (r[i] = n[i]);
			t.head.appendChild(r).parentNode.removeChild(r)
		}

		function w(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[p.call(e)] || "object" : typeof e
		}
		var L = function (e, t) {
				return new L.fn.init(e, t)
			},
			D = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

		function T(e) {
			var t = !!e && "length" in e && e.length,
				n = w(e);
			return !y(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
		}
		L.fn = L.prototype = {
			jquery: "3.3.1",
			constructor: L,
			length: 0,
			toArray: function () {
				return s.call(this)
			},
			get: function (e) {
				return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
			},
			pushStack: function (e) {
				var t = L.merge(this.constructor(), e);
				return t.prevObject = this, t
			},
			each: function (e) {
				return L.each(this, e)
			},
			map: function (e) {
				return this.pushStack(L.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
			},
			slice: function () {
				return this.pushStack(s.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (e) {
				var t = this.length,
					n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor()
			},
			push: u,
			sort: a.sort,
			splice: a.splice
		}, L.extend = L.fn.extend = function () {
			var e, t, n, i, r, a, o = arguments[0] || {},
				l = 1,
				s = arguments.length,
				d = !1;
			for ("boolean" == typeof o && (d = o, o = arguments[l] || {}, l++), "object" == typeof o || y(o) || (o = {}), l === s && (o = this, l--); l < s; l++)
				if (null != (e = arguments[l]))
					for (t in e) n = o[t], o !== (i = e[t]) && (d && i && (L.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && L.isPlainObject(n) ? n : {}, o[t] = L.extend(d, a, i)) : void 0 !== i && (o[t] = i));
			return o
		}, L.extend({
			expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (e) {
				throw new Error(e)
			},
			noop: function () {},
			isPlainObject: function (e) {
				var t, n;
				return !(!e || "[object Object]" !== p.call(e)) && (!(t = l(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && m.call(n) === g)
			},
			isEmptyObject: function (e) {
				var t;
				for (t in e) return !1;
				return !0
			},
			globalEval: function (e) {
				b(e)
			},
			each: function (e, t) {
				var n, i = 0;
				if (T(e))
					for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
				else
					for (i in e)
						if (!1 === t.call(e[i], i, e[i])) break;
				return e
			},
			trim: function (e) {
				return null == e ? "" : (e + "").replace(D, "")
			},
			makeArray: function (e, t) {
				var n = t || [];
				return null != e && (T(Object(e)) ? L.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
			},
			inArray: function (e, t, n) {
				return null == t ? -1 : c.call(t, e, n)
			},
			merge: function (e, t) {
				for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
				return e.length = r, e
			},
			grep: function (e, t, n) {
				for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
				return i
			},
			map: function (e, t, n) {
				var i, r, a = 0,
					o = [];
				if (T(e))
					for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && o.push(r);
				else
					for (a in e) null != (r = t(e[a], a, n)) && o.push(r);
				return d.apply([], o)
			},
			guid: 1,
			support: _
		}), "function" == typeof Symbol && (L.fn[Symbol.iterator] = a[Symbol.iterator]), L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
			h["[object " + t + "]"] = t.toLowerCase()
		});
		var k =
			/*!
			 * Sizzle CSS Selector Engine v2.3.3
			 * https://sizzlejs.com/
			 *
			 * Copyright jQuery Foundation and other contributors
			 * Released under the MIT license
			 * http://jquery.org/license
			 *
			 * Date: 2016-08-08
			 */
			function (e) {
				var t, n, i, r, a, o, l, s, d, u, c, h, p, f, m, g, _, y, v, M = "sizzle" + 1 * new Date,
					b = e.document,
					w = 0,
					L = 0,
					D = oe(),
					T = oe(),
					k = oe(),
					S = function (e, t) {
						return e === t && (c = !0), 0
					},
					x = {}.hasOwnProperty,
					Y = [],
					E = Y.pop,
					C = Y.push,
					H = Y.push,
					P = Y.slice,
					O = function (e, t) {
						for (var n = 0, i = e.length; n < i; n++)
							if (e[n] === t) return n;
						return -1
					},
					A = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
					I = "[\\x20\\t\\r\\n\\f]",
					R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
					j = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
					F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
					N = new RegExp(I + "+", "g"),
					W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
					z = new RegExp("^" + I + "*," + I + "*"),
					B = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
					V = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
					G = new RegExp(F),
					U = new RegExp("^" + R + "$"),
					Z = {
						ID: new RegExp("^#(" + R + ")"),
						CLASS: new RegExp("^\\.(" + R + ")"),
						TAG: new RegExp("^(" + R + "|[*])"),
						ATTR: new RegExp("^" + j),
						PSEUDO: new RegExp("^" + F),
						CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
						bool: new RegExp("^(?:" + A + ")$", "i"),
						needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
					},
					q = /^(?:input|select|textarea|button)$/i,
					X = /^h\d$/i,
					J = /^[^{]+\{\s*\[native \w/,
					$ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
					K = /[+~]/,
					Q = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
					ee = function (e, t, n) {
						var i = "0x" + t - 65536;
						return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
					},
					te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
					ne = function (e, t) {
						return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
					},
					ie = function () {
						h()
					},
					re = ye(function (e) {
						return !0 === e.disabled && ("form" in e || "label" in e)
					}, {
						dir: "parentNode",
						next: "legend"
					});
				try {
					H.apply(Y = P.call(b.childNodes), b.childNodes), Y[b.childNodes.length].nodeType
				} catch (e) {
					H = {
						apply: Y.length ? function (e, t) {
							C.apply(e, P.call(t))
						} : function (e, t) {
							for (var n = e.length, i = 0; e[n++] = t[i++];);
							e.length = n - 1
						}
					}
				}

				function ae(e, t, i, r) {
					var a, l, d, u, c, f, _, y = t && t.ownerDocument,
						w = t ? t.nodeType : 9;
					if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
					if (!r && ((t ? t.ownerDocument || t : b) !== p && h(t), t = t || p, m)) {
						if (11 !== w && (c = $.exec(e)))
							if (a = c[1]) {
								if (9 === w) {
									if (!(d = t.getElementById(a))) return i;
									if (d.id === a) return i.push(d), i
								} else if (y && (d = y.getElementById(a)) && v(t, d) && d.id === a) return i.push(d), i
							} else {
								if (c[2]) return H.apply(i, t.getElementsByTagName(e)), i;
								if ((a = c[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(i, t.getElementsByClassName(a)), i
							}
						if (n.qsa && !k[e + " "] && (!g || !g.test(e))) {
							if (1 !== w) y = t, _ = e;
							else if ("object" !== t.nodeName.toLowerCase()) {
								for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = M), l = (f = o(e)).length; l--;) f[l] = "#" + u + " " + _e(f[l]);
								_ = f.join(","), y = K.test(e) && me(t.parentNode) || t
							}
							if (_) try {
								return H.apply(i, y.querySelectorAll(_)), i
							} catch (e) {} finally {
								u === M && t.removeAttribute("id")
							}
						}
					}
					return s(e.replace(W, "$1"), t, i, r)
				}

				function oe() {
					var e = [];
					return function t(n, r) {
						return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
					}
				}

				function le(e) {
					return e[M] = !0, e
				}

				function se(e) {
					var t = p.createElement("fieldset");
					try {
						return !!e(t)
					} catch (e) {
						return !1
					} finally {
						t.parentNode && t.parentNode.removeChild(t), t = null
					}
				}

				function de(e, t) {
					for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
				}

				function ue(e, t) {
					var n = t && e,
						i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
					if (i) return i;
					if (n)
						for (; n = n.nextSibling;)
							if (n === t) return -1;
					return e ? 1 : -1
				}

				function ce(e) {
					return function (t) {
						return "input" === t.nodeName.toLowerCase() && t.type === e
					}
				}

				function he(e) {
					return function (t) {
						var n = t.nodeName.toLowerCase();
						return ("input" === n || "button" === n) && t.type === e
					}
				}

				function pe(e) {
					return function (t) {
						return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
					}
				}

				function fe(e) {
					return le(function (t) {
						return t = +t, le(function (n, i) {
							for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
						})
					})
				}

				function me(e) {
					return e && void 0 !== e.getElementsByTagName && e
				}
				for (t in n = ae.support = {}, a = ae.isXML = function (e) {
						var t = e && (e.ownerDocument || e).documentElement;
						return !!t && "HTML" !== t.nodeName
					}, h = ae.setDocument = function (e) {
						var t, r, o = e ? e.ownerDocument || e : b;
						return o !== p && 9 === o.nodeType && o.documentElement ? (f = (p = o).documentElement, m = !a(p), b !== p && (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = se(function (e) {
							return e.className = "i", !e.getAttribute("className")
						}), n.getElementsByTagName = se(function (e) {
							return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
						}), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = se(function (e) {
							return f.appendChild(e).id = M, !p.getElementsByName || !p.getElementsByName(M).length
						}), n.getById ? (i.filter.ID = function (e) {
							var t = e.replace(Q, ee);
							return function (e) {
								return e.getAttribute("id") === t
							}
						}, i.find.ID = function (e, t) {
							if (void 0 !== t.getElementById && m) {
								var n = t.getElementById(e);
								return n ? [n] : []
							}
						}) : (i.filter.ID = function (e) {
							var t = e.replace(Q, ee);
							return function (e) {
								var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
								return n && n.value === t
							}
						}, i.find.ID = function (e, t) {
							if (void 0 !== t.getElementById && m) {
								var n, i, r, a = t.getElementById(e);
								if (a) {
									if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
									for (r = t.getElementsByName(e), i = 0; a = r[i++];)
										if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
								}
								return []
							}
						}), i.find.TAG = n.getElementsByTagName ? function (e, t) {
							return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
						} : function (e, t) {
							var n, i = [],
								r = 0,
								a = t.getElementsByTagName(e);
							if ("*" === e) {
								for (; n = a[r++];) 1 === n.nodeType && i.push(n);
								return i
							}
							return a
						}, i.find.CLASS = n.getElementsByClassName && function (e, t) {
							if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
						}, _ = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (se(function (e) {
							f.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + A + ")"), e.querySelectorAll("[id~=" + M + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || g.push(".#.+[+~]")
						}), se(function (e) {
							e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
							var t = p.createElement("input");
							t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
						})), (n.matchesSelector = J.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && se(function (e) {
							n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), _.push("!=", F)
						}), g = g.length && new RegExp(g.join("|")), _ = _.length && new RegExp(_.join("|")), t = J.test(f.compareDocumentPosition), v = t || J.test(f.contains) ? function (e, t) {
							var n = 9 === e.nodeType ? e.documentElement : e,
								i = t && t.parentNode;
							return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
						} : function (e, t) {
							if (t)
								for (; t = t.parentNode;)
									if (t === e) return !0;
							return !1
						}, S = t ? function (e, t) {
							if (e === t) return c = !0, 0;
							var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === b && v(b, e) ? -1 : t === p || t.ownerDocument === b && v(b, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1)
						} : function (e, t) {
							if (e === t) return c = !0, 0;
							var n, i = 0,
								r = e.parentNode,
								a = t.parentNode,
								o = [e],
								l = [t];
							if (!r || !a) return e === p ? -1 : t === p ? 1 : r ? -1 : a ? 1 : u ? O(u, e) - O(u, t) : 0;
							if (r === a) return ue(e, t);
							for (n = e; n = n.parentNode;) o.unshift(n);
							for (n = t; n = n.parentNode;) l.unshift(n);
							for (; o[i] === l[i];) i++;
							return i ? ue(o[i], l[i]) : o[i] === b ? -1 : l[i] === b ? 1 : 0
						}, p) : p
					}, ae.matches = function (e, t) {
						return ae(e, null, null, t)
					}, ae.matchesSelector = function (e, t) {
						if ((e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']"), n.matchesSelector && m && !k[t + " "] && (!_ || !_.test(t)) && (!g || !g.test(t))) try {
							var i = y.call(e, t);
							if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
						} catch (e) {}
						return ae(t, p, null, [e]).length > 0
					}, ae.contains = function (e, t) {
						return (e.ownerDocument || e) !== p && h(e), v(e, t)
					}, ae.attr = function (e, t) {
						(e.ownerDocument || e) !== p && h(e);
						var r = i.attrHandle[t.toLowerCase()],
							a = r && x.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
						return void 0 !== a ? a : n.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
					}, ae.escape = function (e) {
						return (e + "").replace(te, ne)
					}, ae.error = function (e) {
						throw new Error("Syntax error, unrecognized expression: " + e)
					}, ae.uniqueSort = function (e) {
						var t, i = [],
							r = 0,
							a = 0;
						if (c = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), c) {
							for (; t = e[a++];) t === e[a] && (r = i.push(a));
							for (; r--;) e.splice(i[r], 1)
						}
						return u = null, e
					}, r = ae.getText = function (e) {
						var t, n = "",
							i = 0,
							a = e.nodeType;
						if (a) {
							if (1 === a || 9 === a || 11 === a) {
								if ("string" == typeof e.textContent) return e.textContent;
								for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
							} else if (3 === a || 4 === a) return e.nodeValue
						} else
							for (; t = e[i++];) n += r(t);
						return n
					}, (i = ae.selectors = {
						cacheLength: 50,
						createPseudo: le,
						match: Z,
						attrHandle: {},
						find: {},
						relative: {
							">": {
								dir: "parentNode",
								first: !0
							},
							" ": {
								dir: "parentNode"
							},
							"+": {
								dir: "previousSibling",
								first: !0
							},
							"~": {
								dir: "previousSibling"
							}
						},
						preFilter: {
							ATTR: function (e) {
								return e[1] = e[1].replace(Q, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Q, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
							},
							CHILD: function (e) {
								return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
							},
							PSEUDO: function (e) {
								var t, n = !e[6] && e[2];
								return Z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
							}
						},
						filter: {
							TAG: function (e) {
								var t = e.replace(Q, ee).toLowerCase();
								return "*" === e ? function () {
									return !0
								} : function (e) {
									return e.nodeName && e.nodeName.toLowerCase() === t
								}
							},
							CLASS: function (e) {
								var t = D[e + " "];
								return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && D(e, function (e) {
									return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
								})
							},
							ATTR: function (e, t, n) {
								return function (i) {
									var r = ae.attr(i, e);
									return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(N, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
								}
							},
							CHILD: function (e, t, n, i, r) {
								var a = "nth" !== e.slice(0, 3),
									o = "last" !== e.slice(-4),
									l = "of-type" === t;
								return 1 === i && 0 === r ? function (e) {
									return !!e.parentNode
								} : function (t, n, s) {
									var d, u, c, h, p, f, m = a !== o ? "nextSibling" : "previousSibling",
										g = t.parentNode,
										_ = l && t.nodeName.toLowerCase(),
										y = !s && !l,
										v = !1;
									if (g) {
										if (a) {
											for (; m;) {
												for (h = t; h = h[m];)
													if (l ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
												f = m = "only" === e && !f && "nextSibling"
											}
											return !0
										}
										if (f = [o ? g.firstChild : g.lastChild], o && y) {
											for (v = (p = (d = (u = (c = (h = g)[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === w && d[1]) && d[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (v = p = 0) || f.pop();)
												if (1 === h.nodeType && ++v && h === t) {
													u[e] = [w, p, v];
													break
												}
										} else if (y && (v = p = (d = (u = (c = (h = t)[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] || [])[0] === w && d[1]), !1 === v)
											for (;
												(h = ++p && h && h[m] || (v = p = 0) || f.pop()) && ((l ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++v || (y && ((u = (c = h[M] || (h[M] = {}))[h.uniqueID] || (c[h.uniqueID] = {}))[e] = [w, v]), h !== t)););
										return (v -= r) === i || v % i == 0 && v / i >= 0
									}
								}
							},
							PSEUDO: function (e, t) {
								var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
								return r[M] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
									for (var i, a = r(e, t), o = a.length; o--;) e[i = O(e, a[o])] = !(n[i] = a[o])
								}) : function (e) {
									return r(e, 0, n)
								}) : r
							}
						},
						pseudos: {
							not: le(function (e) {
								var t = [],
									n = [],
									i = l(e.replace(W, "$1"));
								return i[M] ? le(function (e, t, n, r) {
									for (var a, o = i(e, null, r, []), l = e.length; l--;)(a = o[l]) && (e[l] = !(t[l] = a))
								}) : function (e, r, a) {
									return t[0] = e, i(t, null, a, n), t[0] = null, !n.pop()
								}
							}),
							has: le(function (e) {
								return function (t) {
									return ae(e, t).length > 0
								}
							}),
							contains: le(function (e) {
								return e = e.replace(Q, ee),
									function (t) {
										return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
									}
							}),
							lang: le(function (e) {
								return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(Q, ee).toLowerCase(),
									function (t) {
										var n;
										do {
											if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
										} while ((t = t.parentNode) && 1 === t.nodeType);
										return !1
									}
							}),
							target: function (t) {
								var n = e.location && e.location.hash;
								return n && n.slice(1) === t.id
							},
							root: function (e) {
								return e === f
							},
							focus: function (e) {
								return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
							},
							enabled: pe(!1),
							disabled: pe(!0),
							checked: function (e) {
								var t = e.nodeName.toLowerCase();
								return "input" === t && !!e.checked || "option" === t && !!e.selected
							},
							selected: function (e) {
								return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
							},
							empty: function (e) {
								for (e = e.firstChild; e; e = e.nextSibling)
									if (e.nodeType < 6) return !1;
								return !0
							},
							parent: function (e) {
								return !i.pseudos.empty(e)
							},
							header: function (e) {
								return X.test(e.nodeName)
							},
							input: function (e) {
								return q.test(e.nodeName)
							},
							button: function (e) {
								var t = e.nodeName.toLowerCase();
								return "input" === t && "button" === e.type || "button" === t
							},
							text: function (e) {
								var t;
								return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
							},
							first: fe(function () {
								return [0]
							}),
							last: fe(function (e, t) {
								return [t - 1]
							}),
							eq: fe(function (e, t, n) {
								return [n < 0 ? n + t : n]
							}),
							even: fe(function (e, t) {
								for (var n = 0; n < t; n += 2) e.push(n);
								return e
							}),
							odd: fe(function (e, t) {
								for (var n = 1; n < t; n += 2) e.push(n);
								return e
							}),
							lt: fe(function (e, t, n) {
								for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
								return e
							}),
							gt: fe(function (e, t, n) {
								for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
								return e
							})
						}
					}).pseudos.nth = i.pseudos.eq, {
						radio: !0,
						checkbox: !0,
						file: !0,
						password: !0,
						image: !0
					}) i.pseudos[t] = ce(t);
				for (t in {
						submit: !0,
						reset: !0
					}) i.pseudos[t] = he(t);

				function ge() {}

				function _e(e) {
					for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
					return i
				}

				function ye(e, t, n) {
					var i = t.dir,
						r = t.next,
						a = r || i,
						o = n && "parentNode" === a,
						l = L++;
					return t.first ? function (t, n, r) {
						for (; t = t[i];)
							if (1 === t.nodeType || o) return e(t, n, r);
						return !1
					} : function (t, n, s) {
						var d, u, c, h = [w, l];
						if (s) {
							for (; t = t[i];)
								if ((1 === t.nodeType || o) && e(t, n, s)) return !0
						} else
							for (; t = t[i];)
								if (1 === t.nodeType || o)
									if (u = (c = t[M] || (t[M] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
									else {
										if ((d = u[a]) && d[0] === w && d[1] === l) return h[2] = d[2];
										if (u[a] = h, h[2] = e(t, n, s)) return !0
									} return !1
					}
				}

				function ve(e) {
					return e.length > 1 ? function (t, n, i) {
						for (var r = e.length; r--;)
							if (!e[r](t, n, i)) return !1;
						return !0
					} : e[0]
				}

				function Me(e, t, n, i, r) {
					for (var a, o = [], l = 0, s = e.length, d = null != t; l < s; l++)(a = e[l]) && (n && !n(a, i, r) || (o.push(a), d && t.push(l)));
					return o
				}

				function be(e, t, n, i, r, a) {
					return i && !i[M] && (i = be(i)), r && !r[M] && (r = be(r, a)), le(function (a, o, l, s) {
						var d, u, c, h = [],
							p = [],
							f = o.length,
							m = a || function (e, t, n) {
								for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
								return n
							}(t || "*", l.nodeType ? [l] : l, []),
							g = !e || !a && t ? m : Me(m, h, e, l, s),
							_ = n ? r || (a ? e : f || i) ? [] : o : g;
						if (n && n(g, _, l, s), i)
							for (d = Me(_, p), i(d, [], l, s), u = d.length; u--;)(c = d[u]) && (_[p[u]] = !(g[p[u]] = c));
						if (a) {
							if (r || e) {
								if (r) {
									for (d = [], u = _.length; u--;)(c = _[u]) && d.push(g[u] = c);
									r(null, _ = [], d, s)
								}
								for (u = _.length; u--;)(c = _[u]) && (d = r ? O(a, c) : h[u]) > -1 && (a[d] = !(o[d] = c))
							}
						} else _ = Me(_ === o ? _.splice(f, _.length) : _), r ? r(null, o, _, s) : H.apply(o, _)
					})
				}

				function we(e) {
					for (var t, n, r, a = e.length, o = i.relative[e[0].type], l = o || i.relative[" "], s = o ? 1 : 0, u = ye(function (e) {
							return e === t
						}, l, !0), c = ye(function (e) {
							return O(t, e) > -1
						}, l, !0), h = [function (e, n, i) {
							var r = !o && (i || n !== d) || ((t = n).nodeType ? u(e, n, i) : c(e, n, i));
							return t = null, r
						}]; s < a; s++)
						if (n = i.relative[e[s].type]) h = [ye(ve(h), n)];
						else {
							if ((n = i.filter[e[s].type].apply(null, e[s].matches))[M]) {
								for (r = ++s; r < a && !i.relative[e[r].type]; r++);
								return be(s > 1 && ve(h), s > 1 && _e(e.slice(0, s - 1).concat({
									value: " " === e[s - 2].type ? "*" : ""
								})).replace(W, "$1"), n, s < r && we(e.slice(s, r)), r < a && we(e = e.slice(r)), r < a && _e(e))
							}
							h.push(n)
						}
					return ve(h)
				}
				return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge, o = ae.tokenize = function (e, t) {
					var n, r, a, o, l, s, d, u = T[e + " "];
					if (u) return t ? 0 : u.slice(0);
					for (l = e, s = [], d = i.preFilter; l;) {
						for (o in n && !(r = z.exec(l)) || (r && (l = l.slice(r[0].length) || l), s.push(a = [])), n = !1, (r = B.exec(l)) && (n = r.shift(), a.push({
								value: n,
								type: r[0].replace(W, " ")
							}), l = l.slice(n.length)), i.filter) !(r = Z[o].exec(l)) || d[o] && !(r = d[o](r)) || (n = r.shift(), a.push({
							value: n,
							type: o,
							matches: r
						}), l = l.slice(n.length));
						if (!n) break
					}
					return t ? l.length : l ? ae.error(e) : T(e, s).slice(0)
				}, l = ae.compile = function (e, t) {
					var n, r = [],
						a = [],
						l = k[e + " "];
					if (!l) {
						for (t || (t = o(e)), n = t.length; n--;)(l = we(t[n]))[M] ? r.push(l) : a.push(l);
						(l = k(e, function (e, t) {
							var n = t.length > 0,
								r = e.length > 0,
								a = function (a, o, l, s, u) {
									var c, f, g, _ = 0,
										y = "0",
										v = a && [],
										M = [],
										b = d,
										L = a || r && i.find.TAG("*", u),
										D = w += null == b ? 1 : Math.random() || .1,
										T = L.length;
									for (u && (d = o === p || o || u); y !== T && null != (c = L[y]); y++) {
										if (r && c) {
											for (f = 0, o || c.ownerDocument === p || (h(c), l = !m); g = e[f++];)
												if (g(c, o || p, l)) {
													s.push(c);
													break
												}
											u && (w = D)
										}
										n && ((c = !g && c) && _--, a && v.push(c))
									}
									if (_ += y, n && y !== _) {
										for (f = 0; g = t[f++];) g(v, M, o, l);
										if (a) {
											if (_ > 0)
												for (; y--;) v[y] || M[y] || (M[y] = E.call(s));
											M = Me(M)
										}
										H.apply(s, M), u && !a && M.length > 0 && _ + t.length > 1 && ae.uniqueSort(s)
									}
									return u && (w = D, d = b), v
								};
							return n ? le(a) : a
						}(a, r))).selector = e
					}
					return l
				}, s = ae.select = function (e, t, n, r) {
					var a, s, d, u, c, h = "function" == typeof e && e,
						p = !r && o(e = h.selector || e);
					if (n = n || [], 1 === p.length) {
						if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (d = s[0]).type && 9 === t.nodeType && m && i.relative[s[1].type]) {
							if (!(t = (i.find.ID(d.matches[0].replace(Q, ee), t) || [])[0])) return n;
							h && (t = t.parentNode), e = e.slice(s.shift().value.length)
						}
						for (a = Z.needsContext.test(e) ? 0 : s.length; a-- && (d = s[a], !i.relative[u = d.type]);)
							if ((c = i.find[u]) && (r = c(d.matches[0].replace(Q, ee), K.test(s[0].type) && me(t.parentNode) || t))) {
								if (s.splice(a, 1), !(e = r.length && _e(s))) return H.apply(n, r), n;
								break
							}
					}
					return (h || l(e, p))(r, t, !m, n, !t || K.test(e) && me(t.parentNode) || t), n
				}, n.sortStable = M.split("").sort(S).join("") === M, n.detectDuplicates = !!c, h(), n.sortDetached = se(function (e) {
					return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
				}), se(function (e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || de("type|href|height|width", function (e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), n.attributes && se(function (e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
				}) || de("value", function (e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), se(function (e) {
					return null == e.getAttribute("disabled")
				}) || de(A, function (e, t, n) {
					var i;
					if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
				}), ae
			}(n);
		L.find = k, L.expr = k.selectors, L.expr[":"] = L.expr.pseudos, L.uniqueSort = L.unique = k.uniqueSort, L.text = k.getText, L.isXMLDoc = k.isXML, L.contains = k.contains, L.escapeSelector = k.escape;
		var S = function (e, t, n) {
				for (var i = [], r = void 0 !== n;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (r && L(e).is(n)) break;
						i.push(e)
					}
				return i
			},
			x = function (e, t) {
				for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
				return n
			},
			Y = L.expr.match.needsContext;

		function E(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		}
		var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

		function H(e, t, n) {
			return y(t) ? L.grep(e, function (e, i) {
				return !!t.call(e, i, e) !== n
			}) : t.nodeType ? L.grep(e, function (e) {
				return e === t !== n
			}) : "string" != typeof t ? L.grep(e, function (e) {
				return c.call(t, e) > -1 !== n
			}) : L.filter(t, e, n)
		}
		L.filter = function (e, t, n) {
			var i = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? L.find.matchesSelector(i, e) ? [i] : [] : L.find.matches(e, L.grep(t, function (e) {
				return 1 === e.nodeType
			}))
		}, L.fn.extend({
			find: function (e) {
				var t, n, i = this.length,
					r = this;
				if ("string" != typeof e) return this.pushStack(L(e).filter(function () {
					for (t = 0; t < i; t++)
						if (L.contains(r[t], this)) return !0
				}));
				for (n = this.pushStack([]), t = 0; t < i; t++) L.find(e, r[t], n);
				return i > 1 ? L.uniqueSort(n) : n
			},
			filter: function (e) {
				return this.pushStack(H(this, e || [], !1))
			},
			not: function (e) {
				return this.pushStack(H(this, e || [], !0))
			},
			is: function (e) {
				return !!H(this, "string" == typeof e && Y.test(e) ? L(e) : e || [], !1).length
			}
		});
		var P, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
		(L.fn.init = function (e, t, n) {
			var i, r;
			if (!e) return this;
			if (n = n || P, "string" == typeof e) {
				if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (i[1]) {
					if (t = t instanceof L ? t[0] : t, L.merge(this, L.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(i[1]) && L.isPlainObject(t))
						for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
					return this
				}
				return (r = o.getElementById(i[2])) && (this[0] = r, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(L) : L.makeArray(e, this)
		}).prototype = L.fn, P = L(o);
		var A = /^(?:parents|prev(?:Until|All))/,
			I = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};

		function R(e, t) {
			for (;
				(e = e[t]) && 1 !== e.nodeType;);
			return e
		}
		L.fn.extend({
			has: function (e) {
				var t = L(e, this),
					n = t.length;
				return this.filter(function () {
					for (var e = 0; e < n; e++)
						if (L.contains(this, t[e])) return !0
				})
			},
			closest: function (e, t) {
				var n, i = 0,
					r = this.length,
					a = [],
					o = "string" != typeof e && L(e);
				if (!Y.test(e))
					for (; i < r; i++)
						for (n = this[i]; n && n !== t; n = n.parentNode)
							if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && L.find.matchesSelector(n, e))) {
								a.push(n);
								break
							}
				return this.pushStack(a.length > 1 ? L.uniqueSort(a) : a)
			},
			index: function (e) {
				return e ? "string" == typeof e ? c.call(L(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (e, t) {
				return this.pushStack(L.uniqueSort(L.merge(this.get(), L(e, t))))
			},
			addBack: function (e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
			}
		}), L.each({
			parent: function (e) {
				var t = e.parentNode;
				return t && 11 !== t.nodeType ? t : null
			},
			parents: function (e) {
				return S(e, "parentNode")
			},
			parentsUntil: function (e, t, n) {
				return S(e, "parentNode", n)
			},
			next: function (e) {
				return R(e, "nextSibling")
			},
			prev: function (e) {
				return R(e, "previousSibling")
			},
			nextAll: function (e) {
				return S(e, "nextSibling")
			},
			prevAll: function (e) {
				return S(e, "previousSibling")
			},
			nextUntil: function (e, t, n) {
				return S(e, "nextSibling", n)
			},
			prevUntil: function (e, t, n) {
				return S(e, "previousSibling", n)
			},
			siblings: function (e) {
				return x((e.parentNode || {}).firstChild, e)
			},
			children: function (e) {
				return x(e.firstChild)
			},
			contents: function (e) {
				return E(e, "iframe") ? e.contentDocument : (E(e, "template") && (e = e.content || e), L.merge([], e.childNodes))
			}
		}, function (e, t) {
			L.fn[e] = function (n, i) {
				var r = L.map(this, t, n);
				return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = L.filter(i, r)), this.length > 1 && (I[e] || L.uniqueSort(r), A.test(e) && r.reverse()), this.pushStack(r)
			}
		});
		var j = /[^\x20\t\r\n\f]+/g;

		function F(e) {
			return e
		}

		function N(e) {
			throw e
		}

		function W(e, t, n, i) {
			var r;
			try {
				e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
			} catch (e) {
				n.apply(void 0, [e])
			}
		}
		L.Callbacks = function (e) {
			e = "string" == typeof e ? function (e) {
				var t = {};
				return L.each(e.match(j) || [], function (e, n) {
					t[n] = !0
				}), t
			}(e) : L.extend({}, e);
			var t, n, i, r, a = [],
				o = [],
				l = -1,
				s = function () {
					for (r = r || e.once, i = t = !0; o.length; l = -1)
						for (n = o.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
					e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
				},
				d = {
					add: function () {
						return a && (n && !t && (l = a.length - 1, o.push(n)), function t(n) {
							L.each(n, function (n, i) {
								y(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== w(i) && t(i)
							})
						}(arguments), n && !t && s()), this
					},
					remove: function () {
						return L.each(arguments, function (e, t) {
							for (var n;
								(n = L.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
						}), this
					},
					has: function (e) {
						return e ? L.inArray(e, a) > -1 : a.length > 0
					},
					empty: function () {
						return a && (a = []), this
					},
					disable: function () {
						return r = o = [], a = n = "", this
					},
					disabled: function () {
						return !a
					},
					lock: function () {
						return r = o = [], n || t || (a = n = ""), this
					},
					locked: function () {
						return !!r
					},
					fireWith: function (e, n) {
						return r || (n = [e, (n = n || []).slice ? n.slice() : n], o.push(n), t || s()), this
					},
					fire: function () {
						return d.fireWith(this, arguments), this
					},
					fired: function () {
						return !!i
					}
				};
			return d
		}, L.extend({
			Deferred: function (e) {
				var t = [
						["notify", "progress", L.Callbacks("memory"), L.Callbacks("memory"), 2],
						["resolve", "done", L.Callbacks("once memory"), L.Callbacks("once memory"), 0, "resolved"],
						["reject", "fail", L.Callbacks("once memory"), L.Callbacks("once memory"), 1, "rejected"]
					],
					i = "pending",
					r = {
						state: function () {
							return i
						},
						always: function () {
							return a.done(arguments).fail(arguments), this
						},
						catch: function (e) {
							return r.then(null, e)
						},
						pipe: function () {
							var e = arguments;
							return L.Deferred(function (n) {
								L.each(t, function (t, i) {
									var r = y(e[i[4]]) && e[i[4]];
									a[i[1]](function () {
										var e = r && r.apply(this, arguments);
										e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
									})
								}), e = null
							}).promise()
						},
						then: function (e, i, r) {
							var a = 0;

							function o(e, t, i, r) {
								return function () {
									var l = this,
										s = arguments,
										d = function () {
											var n, d;
											if (!(e < a)) {
												if ((n = i.apply(l, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
												d = n && ("object" == typeof n || "function" == typeof n) && n.then, y(d) ? r ? d.call(n, o(a, t, F, r), o(a, t, N, r)) : (a++, d.call(n, o(a, t, F, r), o(a, t, N, r), o(a, t, F, t.notifyWith))) : (i !== F && (l = void 0, s = [n]), (r || t.resolveWith)(l, s))
											}
										},
										u = r ? d : function () {
											try {
												d()
											} catch (n) {
												L.Deferred.exceptionHook && L.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= a && (i !== N && (l = void 0, s = [n]), t.rejectWith(l, s))
											}
										};
									e ? u() : (L.Deferred.getStackHook && (u.stackTrace = L.Deferred.getStackHook()), n.setTimeout(u))
								}
							}
							return L.Deferred(function (n) {
								t[0][3].add(o(0, n, y(r) ? r : F, n.notifyWith)), t[1][3].add(o(0, n, y(e) ? e : F)), t[2][3].add(o(0, n, y(i) ? i : N))
							}).promise()
						},
						promise: function (e) {
							return null != e ? L.extend(e, r) : r
						}
					},
					a = {};
				return L.each(t, function (e, n) {
					var o = n[2],
						l = n[5];
					r[n[1]] = o.add, l && o.add(function () {
						i = l
					}, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), o.add(n[3].fire), a[n[0]] = function () {
						return a[n[0] + "With"](this === a ? void 0 : this, arguments), this
					}, a[n[0] + "With"] = o.fireWith
				}), r.promise(a), e && e.call(a, a), a
			},
			when: function (e) {
				var t = arguments.length,
					n = t,
					i = Array(n),
					r = s.call(arguments),
					a = L.Deferred(),
					o = function (e) {
						return function (n) {
							i[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : n, --t || a.resolveWith(i, r)
						}
					};
				if (t <= 1 && (W(e, a.done(o(n)).resolve, a.reject, !t), "pending" === a.state() || y(r[n] && r[n].then))) return a.then();
				for (; n--;) W(r[n], o(n), a.reject);
				return a.promise()
			}
		});
		var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		L.Deferred.exceptionHook = function (e, t) {
			n.console && n.console.warn && e && z.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
		}, L.readyException = function (e) {
			n.setTimeout(function () {
				throw e
			})
		};
		var B = L.Deferred();

		function V() {
			o.removeEventListener("DOMContentLoaded", V), n.removeEventListener("load", V), L.ready()
		}
		L.fn.ready = function (e) {
			return B.then(e).catch(function (e) {
				L.readyException(e)
			}), this
		}, L.extend({
			isReady: !1,
			readyWait: 1,
			ready: function (e) {
				(!0 === e ? --L.readyWait : L.isReady) || (L.isReady = !0, !0 !== e && --L.readyWait > 0 || B.resolveWith(o, [L]))
			}
		}), L.ready.then = B.then, "complete" === o.readyState || "loading" !== o.readyState && !o.documentElement.doScroll ? n.setTimeout(L.ready) : (o.addEventListener("DOMContentLoaded", V), n.addEventListener("load", V));
		var G = function (e, t, n, i, r, a, o) {
				var l = 0,
					s = e.length,
					d = null == n;
				if ("object" === w(n))
					for (l in r = !0, n) G(e, t, l, n[l], !0, a, o);
				else if (void 0 !== i && (r = !0, y(i) || (o = !0), d && (o ? (t.call(e, i), t = null) : (d = t, t = function (e, t, n) {
						return d.call(L(e), n)
					})), t))
					for (; l < s; l++) t(e[l], n, o ? i : i.call(e[l], l, t(e[l], n)));
				return r ? e : d ? t.call(e) : s ? t(e[0], n) : a
			},
			U = /^-ms-/,
			Z = /-([a-z])/g;

		function q(e, t) {
			return t.toUpperCase()
		}

		function X(e) {
			return e.replace(U, "ms-").replace(Z, q)
		}
		var J = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};

		function $() {
			this.expando = L.expando + $.uid++
		}
		$.uid = 1, $.prototype = {
			cache: function (e) {
				var t = e[this.expando];
				return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t
			},
			set: function (e, t, n) {
				var i, r = this.cache(e);
				if ("string" == typeof t) r[X(t)] = n;
				else
					for (i in t) r[X(i)] = t[i];
				return r
			},
			get: function (e, t) {
				return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
			},
			access: function (e, t, n) {
				return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
			},
			remove: function (e, t) {
				var n, i = e[this.expando];
				if (void 0 !== i) {
					if (void 0 !== t) {
						n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(j) || []).length;
						for (; n--;) delete i[t[n]]
					}(void 0 === t || L.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
				}
			},
			hasData: function (e) {
				var t = e[this.expando];
				return void 0 !== t && !L.isEmptyObject(t)
			}
		};
		var K = new $,
			Q = new $,
			ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			te = /[A-Z]/g;

		function ne(e, t, n) {
			var i;
			if (void 0 === n && 1 === e.nodeType)
				if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
					try {
						n = function (e) {
							return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
						}(n)
					} catch (e) {}
					Q.set(e, t, n)
				} else n = void 0;
			return n
		}
		L.extend({
			hasData: function (e) {
				return Q.hasData(e) || K.hasData(e)
			},
			data: function (e, t, n) {
				return Q.access(e, t, n)
			},
			removeData: function (e, t) {
				Q.remove(e, t)
			},
			_data: function (e, t, n) {
				return K.access(e, t, n)
			},
			_removeData: function (e, t) {
				K.remove(e, t)
			}
		}), L.fn.extend({
			data: function (e, t) {
				var n, i, r, a = this[0],
					o = a && a.attributes;
				if (void 0 === e) {
					if (this.length && (r = Q.get(a), 1 === a.nodeType && !K.get(a, "hasDataAttrs"))) {
						for (n = o.length; n--;) o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = X(i.slice(5)), ne(a, i, r[i]));
						K.set(a, "hasDataAttrs", !0)
					}
					return r
				}
				return "object" == typeof e ? this.each(function () {
					Q.set(this, e)
				}) : G(this, function (t) {
					var n;
					if (a && void 0 === t) return void 0 !== (n = Q.get(a, e)) ? n : void 0 !== (n = ne(a, e)) ? n : void 0;
					this.each(function () {
						Q.set(this, e, t)
					})
				}, null, t, arguments.length > 1, null, !0)
			},
			removeData: function (e) {
				return this.each(function () {
					Q.remove(this, e)
				})
			}
		}), L.extend({
			queue: function (e, t, n) {
				var i;
				if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, L.makeArray(n)) : i.push(n)), i || []
			},
			dequeue: function (e, t) {
				t = t || "fx";
				var n = L.queue(e, t),
					i = n.length,
					r = n.shift(),
					a = L._queueHooks(e, t);
				"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, function () {
					L.dequeue(e, t)
				}, a)), !i && a && a.empty.fire()
			},
			_queueHooks: function (e, t) {
				var n = t + "queueHooks";
				return K.get(e, n) || K.access(e, n, {
					empty: L.Callbacks("once memory").add(function () {
						K.remove(e, [t + "queue", n])
					})
				})
			}
		}), L.fn.extend({
			queue: function (e, t) {
				var n = 2;
				return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? L.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = L.queue(this, e, t);
					L._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && L.dequeue(this, e)
				})
			},
			dequeue: function (e) {
				return this.each(function () {
					L.dequeue(this, e)
				})
			},
			clearQueue: function (e) {
				return this.queue(e || "fx", [])
			},
			promise: function (e, t) {
				var n, i = 1,
					r = L.Deferred(),
					a = this,
					o = this.length,
					l = function () {
						--i || r.resolveWith(a, [a])
					};
				for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = K.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(l));
				return l(), r.promise(t)
			}
		});
		var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
			ae = ["Top", "Right", "Bottom", "Left"],
			oe = function (e, t) {
				return "none" === (e = t || e).style.display || "" === e.style.display && L.contains(e.ownerDocument, e) && "none" === L.css(e, "display")
			},
			le = function (e, t, n, i) {
				var r, a, o = {};
				for (a in t) o[a] = e.style[a], e.style[a] = t[a];
				for (a in r = n.apply(e, i || []), t) e.style[a] = o[a];
				return r
			};

		function se(e, t, n, i) {
			var r, a, o = 20,
				l = i ? function () {
					return i.cur()
				} : function () {
					return L.css(e, t, "")
				},
				s = l(),
				d = n && n[3] || (L.cssNumber[t] ? "" : "px"),
				u = (L.cssNumber[t] || "px" !== d && +s) && re.exec(L.css(e, t));
			if (u && u[3] !== d) {
				for (s /= 2, d = d || u[3], u = +s || 1; o--;) L.style(e, t, u + d), (1 - a) * (1 - (a = l() / s || .5)) <= 0 && (o = 0), u /= a;
				u *= 2, L.style(e, t, u + d), n = n || []
			}
			return n && (u = +u || +s || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
		}
		var de = {};

		function ue(e) {
			var t, n = e.ownerDocument,
				i = e.nodeName,
				r = de[i];
			return r || (t = n.body.appendChild(n.createElement(i)), r = L.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r)
		}

		function ce(e, t) {
			for (var n, i, r = [], a = 0, o = e.length; a < o; a++)(i = e[a]).style && (n = i.style.display, t ? ("none" === n && (r[a] = K.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && oe(i) && (r[a] = ue(i))) : "none" !== n && (r[a] = "none", K.set(i, "display", n)));
			for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
			return e
		}
		L.fn.extend({
			show: function () {
				return ce(this, !0)
			},
			hide: function () {
				return ce(this)
			},
			toggle: function (e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					oe(this) ? L(this).show() : L(this).hide()
				})
			}
		});
		var he = /^(?:checkbox|radio)$/i,
			pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
			fe = /^$|^module$|\/(?:java|ecma)script/i,
			me = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

		function ge(e, t) {
			var n;
			return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && E(e, t) ? L.merge([e], n) : n
		}

		function _e(e, t) {
			for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
		}
		me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td;
		var ye, ve, Me = /<|&#?\w+;/;

		function be(e, t, n, i, r) {
			for (var a, o, l, s, d, u, c = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
				if ((a = e[p]) || 0 === a)
					if ("object" === w(a)) L.merge(h, a.nodeType ? [a] : a);
					else if (Me.test(a)) {
				for (o = o || c.appendChild(t.createElement("div")), l = (pe.exec(a) || ["", ""])[1].toLowerCase(), s = me[l] || me._default, o.innerHTML = s[1] + L.htmlPrefilter(a) + s[2], u = s[0]; u--;) o = o.lastChild;
				L.merge(h, o.childNodes), (o = c.firstChild).textContent = ""
			} else h.push(t.createTextNode(a));
			for (c.textContent = "", p = 0; a = h[p++];)
				if (i && L.inArray(a, i) > -1) r && r.push(a);
				else if (d = L.contains(a.ownerDocument, a), o = ge(c.appendChild(a), "script"), d && _e(o), n)
				for (u = 0; a = o[u++];) fe.test(a.type || "") && n.push(a);
			return c
		}
		ye = o.createDocumentFragment().appendChild(o.createElement("div")), (ve = o.createElement("input")).setAttribute("type", "radio"), ve.setAttribute("checked", "checked"), ve.setAttribute("name", "t"), ye.appendChild(ve), _.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", _.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
		var we = o.documentElement,
			Le = /^key/,
			De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			Te = /^([^.]*)(?:\.(.+)|)/;

		function ke() {
			return !0
		}

		function Se() {
			return !1
		}

		function xe() {
			try {
				return o.activeElement
			} catch (e) {}
		}

		function Ye(e, t, n, i, r, a) {
			var o, l;
			if ("object" == typeof t) {
				for (l in "string" != typeof n && (i = i || n, n = void 0), t) Ye(e, l, n, i, t[l], a);
				return e
			}
			if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
			else if (!r) return e;
			return 1 === a && (o = r, (r = function (e) {
				return L().off(e), o.apply(this, arguments)
			}).guid = o.guid || (o.guid = L.guid++)), e.each(function () {
				L.event.add(this, t, r, i, n)
			})
		}
		L.event = {
			global: {},
			add: function (e, t, n, i, r) {
				var a, o, l, s, d, u, c, h, p, f, m, g = K.get(e);
				if (g)
					for (n.handler && (n = (a = n).handler, r = a.selector), r && L.find.matchesSelector(we, r), n.guid || (n.guid = L.guid++), (s = g.events) || (s = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
							return void 0 !== L && L.event.triggered !== t.type ? L.event.dispatch.apply(e, arguments) : void 0
						}), d = (t = (t || "").match(j) || [""]).length; d--;) p = m = (l = Te.exec(t[d]) || [])[1], f = (l[2] || "").split(".").sort(), p && (c = L.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = L.event.special[p] || {}, u = L.extend({
						type: p,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: r,
						needsContext: r && L.expr.match.needsContext.test(r),
						namespace: f.join(".")
					}, a), (h = s[p]) || ((h = s[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(p, o)), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), L.event.global[p] = !0)
			},
			remove: function (e, t, n, i, r) {
				var a, o, l, s, d, u, c, h, p, f, m, g = K.hasData(e) && K.get(e);
				if (g && (s = g.events)) {
					for (d = (t = (t || "").match(j) || [""]).length; d--;)
						if (p = m = (l = Te.exec(t[d]) || [])[1], f = (l[2] || "").split(".").sort(), p) {
							for (c = L.event.special[p] || {}, h = s[p = (i ? c.delegateType : c.bindType) || p] || [], l = l[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = h.length; a--;) u = h[a], !r && m !== u.origType || n && n.guid !== u.guid || l && !l.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(a, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
							o && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, g.handle) || L.removeEvent(e, p, g.handle), delete s[p])
						} else
							for (p in s) L.event.remove(e, p + t[d], n, i, !0);
					L.isEmptyObject(s) && K.remove(e, "handle events")
				}
			},
			dispatch: function (e) {
				var t, n, i, r, a, o, l = L.event.fix(e),
					s = new Array(arguments.length),
					d = (K.get(this, "events") || {})[l.type] || [],
					u = L.event.special[l.type] || {};
				for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
				if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
					for (o = L.event.handlers.call(this, l, d), t = 0;
						(r = o[t++]) && !l.isPropagationStopped();)
						for (l.currentTarget = r.elem, n = 0;
							(a = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !l.rnamespace.test(a.namespace) || (l.handleObj = a, l.data = a.data, void 0 !== (i = ((L.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, l), l.result
				}
			},
			handlers: function (e, t) {
				var n, i, r, a, o, l = [],
					s = t.delegateCount,
					d = e.target;
				if (s && d.nodeType && !("click" === e.type && e.button >= 1))
					for (; d !== this; d = d.parentNode || this)
						if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
							for (a = [], o = {}, n = 0; n < s; n++) void 0 === o[r = (i = t[n]).selector + " "] && (o[r] = i.needsContext ? L(r, this).index(d) > -1 : L.find(r, this, null, [d]).length), o[r] && a.push(i);
							a.length && l.push({
								elem: d,
								handlers: a
							})
						}
				return d = this, s < t.length && l.push({
					elem: d,
					handlers: t.slice(s)
				}), l
			},
			addProp: function (e, t) {
				Object.defineProperty(L.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: y(t) ? function () {
						if (this.originalEvent) return t(this.originalEvent)
					} : function () {
						if (this.originalEvent) return this.originalEvent[e]
					},
					set: function (t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						})
					}
				})
			},
			fix: function (e) {
				return e[L.expando] ? e : new L.Event(e)
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== xe() && this.focus) return this.focus(), !1
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						if (this === xe() && this.blur) return this.blur(), !1
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						if ("checkbox" === this.type && this.click && E(this, "input")) return this.click(), !1
					},
					_default: function (e) {
						return E(e.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
					}
				}
			}
		}, L.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n)
		}, L.Event = function (e, t) {
			if (!(this instanceof L.Event)) return new L.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && L.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[L.expando] = !0
		}, L.Event.prototype = {
			constructor: L.Event,
			isDefaultPrevented: Se,
			isPropagationStopped: Se,
			isImmediatePropagationStopped: Se,
			isSimulated: !1,
			preventDefault: function () {
				var e = this.originalEvent;
				this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
			},
			stopPropagation: function () {
				var e = this.originalEvent;
				this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
			},
			stopImmediatePropagation: function () {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
			}
		}, L.each({
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (e) {
				var t = e.button;
				return null == e.which && Le.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && De.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
			}
		}, L.event.addProp), L.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (e, t) {
			L.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function (e) {
					var n, i = e.relatedTarget,
						r = e.handleObj;
					return i && (i === this || L.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
				}
			}
		}), L.fn.extend({
			on: function (e, t, n, i) {
				return Ye(this, e, t, n, i)
			},
			one: function (e, t, n, i) {
				return Ye(this, e, t, n, i, 1)
			},
			off: function (e, t, n) {
				var i, r;
				if (e && e.preventDefault && e.handleObj) return i = e.handleObj, L(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof e) {
					for (r in e) this.off(r, t, e[r]);
					return this
				}
				return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
					L.event.remove(this, e, n, t)
				})
			}
		});
		var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
			Ce = /<script|<style|<link/i,
			He = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function Oe(e, t) {
			return E(e, "table") && E(11 !== t.nodeType ? t : t.firstChild, "tr") && L(e).children("tbody")[0] || e
		}

		function Ae(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
		}

		function Ie(e) {
			return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
		}

		function Re(e, t) {
			var n, i, r, a, o, l, s, d;
			if (1 === t.nodeType) {
				if (K.hasData(e) && (a = K.access(e), o = K.set(t, a), d = a.events))
					for (r in delete o.handle, o.events = {}, d)
						for (n = 0, i = d[r].length; n < i; n++) L.event.add(t, r, d[r][n]);
				Q.hasData(e) && (l = Q.access(e), s = L.extend({}, l), Q.set(t, s))
			}
		}

		function je(e, t, n, i) {
			t = d.apply([], t);
			var r, a, o, l, s, u, c = 0,
				h = e.length,
				p = h - 1,
				f = t[0],
				m = y(f);
			if (m || h > 1 && "string" == typeof f && !_.checkClone && He.test(f)) return e.each(function (r) {
				var a = e.eq(r);
				m && (t[0] = f.call(this, r, a.html())), je(a, t, n, i)
			});
			if (h && (a = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
				for (l = (o = L.map(ge(r, "script"), Ae)).length; c < h; c++) s = r, c !== p && (s = L.clone(s, !0, !0), l && L.merge(o, ge(s, "script"))), n.call(e[c], s, c);
				if (l)
					for (u = o[o.length - 1].ownerDocument, L.map(o, Ie), c = 0; c < l; c++) s = o[c], fe.test(s.type || "") && !K.access(s, "globalEval") && L.contains(u, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? L._evalUrl && L._evalUrl(s.src) : b(s.textContent.replace(Pe, ""), u, s))
			}
			return e
		}

		function Fe(e, t, n) {
			for (var i, r = t ? L.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || L.cleanData(ge(i)), i.parentNode && (n && L.contains(i.ownerDocument, i) && _e(ge(i, "script")), i.parentNode.removeChild(i));
			return e
		}
		L.extend({
			htmlPrefilter: function (e) {
				return e.replace(Ee, "<$1></$2>")
			},
			clone: function (e, t, n) {
				var i, r, a, o, l, s, d, u = e.cloneNode(!0),
					c = L.contains(e.ownerDocument, e);
				if (!(_.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || L.isXMLDoc(e)))
					for (o = ge(u), i = 0, r = (a = ge(e)).length; i < r; i++) l = a[i], s = o[i], d = void 0, "input" === (d = s.nodeName.toLowerCase()) && he.test(l.type) ? s.checked = l.checked : "input" !== d && "textarea" !== d || (s.defaultValue = l.defaultValue);
				if (t)
					if (n)
						for (a = a || ge(e), o = o || ge(u), i = 0, r = a.length; i < r; i++) Re(a[i], o[i]);
					else Re(e, u);
				return (o = ge(u, "script")).length > 0 && _e(o, !c && ge(e, "script")), u
			},
			cleanData: function (e) {
				for (var t, n, i, r = L.event.special, a = 0; void 0 !== (n = e[a]); a++)
					if (J(n)) {
						if (t = n[K.expando]) {
							if (t.events)
								for (i in t.events) r[i] ? L.event.remove(n, i) : L.removeEvent(n, i, t.handle);
							n[K.expando] = void 0
						}
						n[Q.expando] && (n[Q.expando] = void 0)
					}
			}
		}), L.fn.extend({
			detach: function (e) {
				return Fe(this, e, !0)
			},
			remove: function (e) {
				return Fe(this, e)
			},
			text: function (e) {
				return G(this, function (e) {
					return void 0 === e ? L.text(this) : this.empty().each(function () {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
					})
				}, null, e, arguments.length)
			},
			append: function () {
				return je(this, arguments, function (e) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
				})
			},
			prepend: function () {
				return je(this, arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = Oe(this, e);
						t.insertBefore(e, t.firstChild)
					}
				})
			},
			before: function () {
				return je(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this)
				})
			},
			after: function () {
				return je(this, arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
				})
			},
			empty: function () {
				for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (L.cleanData(ge(e, !1)), e.textContent = "");
				return this
			},
			clone: function (e, t) {
				return e = null != e && e, t = null == t ? e : t, this.map(function () {
					return L.clone(this, e, t)
				})
			},
			html: function (e) {
				return G(this, function (e) {
					var t = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
					if ("string" == typeof e && !Ce.test(e) && !me[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = L.htmlPrefilter(e);
						try {
							for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (L.cleanData(ge(t, !1)), t.innerHTML = e);
							t = 0
						} catch (e) {}
					}
					t && this.empty().append(e)
				}, null, e, arguments.length)
			},
			replaceWith: function () {
				var e = [];
				return je(this, arguments, function (t) {
					var n = this.parentNode;
					L.inArray(this, e) < 0 && (L.cleanData(ge(this)), n && n.replaceChild(t, this))
				}, e)
			}
		}), L.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (e, t) {
			L.fn[e] = function (e) {
				for (var n, i = [], r = L(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), L(r[o])[t](n), u.apply(i, n.get());
				return this.pushStack(i)
			}
		});
		var Ne = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
			We = function (e) {
				var t = e.ownerDocument.defaultView;
				return t && t.opener || (t = n), t.getComputedStyle(e)
			},
			ze = new RegExp(ae.join("|"), "i");

		function Be(e, t, n) {
			var i, r, a, o, l = e.style;
			return (n = n || We(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || L.contains(e.ownerDocument, e) || (o = L.style(e, t)), !_.pixelBoxStyles() && Ne.test(o) && ze.test(t) && (i = l.width, r = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = n.width, l.width = i, l.minWidth = r, l.maxWidth = a)), void 0 !== o ? o + "" : o
		}

		function Ve(e, t) {
			return {
				get: function () {
					if (!e()) return (this.get = t).apply(this, arguments);
					delete this.get
				}
			}
		}! function () {
			function e() {
				if (u) {
					d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", we.appendChild(d).appendChild(u);
					var e = n.getComputedStyle(u);
					i = "1%" !== e.top, s = 12 === t(e.marginLeft), u.style.right = "60%", l = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", a = 36 === u.offsetWidth || "absolute", we.removeChild(d), u = null
				}
			}

			function t(e) {
				return Math.round(parseFloat(e))
			}
			var i, r, a, l, s, d = o.createElement("div"),
				u = o.createElement("div");
			u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", _.clearCloneStyle = "content-box" === u.style.backgroundClip, L.extend(_, {
				boxSizingReliable: function () {
					return e(), r
				},
				pixelBoxStyles: function () {
					return e(), l
				},
				pixelPosition: function () {
					return e(), i
				},
				reliableMarginLeft: function () {
					return e(), s
				},
				scrollboxSize: function () {
					return e(), a
				}
			}))
		}();
		var Ge = /^(none|table(?!-c[ea]).+)/,
			Ue = /^--/,
			Ze = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			qe = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Xe = ["Webkit", "Moz", "ms"],
			Je = o.createElement("div").style;

		function $e(e) {
			var t = L.cssProps[e];
			return t || (t = L.cssProps[e] = function (e) {
				if (e in Je) return e;
				for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
					if ((e = Xe[n] + t) in Je) return e
			}(e) || e), t
		}

		function Ke(e, t, n) {
			var i = re.exec(t);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
		}

		function Qe(e, t, n, i, r, a) {
			var o = "width" === t ? 1 : 0,
				l = 0,
				s = 0;
			if (n === (i ? "border" : "content")) return 0;
			for (; o < 4; o += 2) "margin" === n && (s += L.css(e, n + ae[o], !0, r)), i ? ("content" === n && (s -= L.css(e, "padding" + ae[o], !0, r)), "margin" !== n && (s -= L.css(e, "border" + ae[o] + "Width", !0, r))) : (s += L.css(e, "padding" + ae[o], !0, r), "padding" !== n ? s += L.css(e, "border" + ae[o] + "Width", !0, r) : l += L.css(e, "border" + ae[o] + "Width", !0, r));
			return !i && a >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - s - l - .5))), s
		}

		function et(e, t, n) {
			var i = We(e),
				r = Be(e, t, i),
				a = "border-box" === L.css(e, "boxSizing", !1, i),
				o = a;
			if (Ne.test(r)) {
				if (!n) return r;
				r = "auto"
			}
			return o = o && (_.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === L.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (r = parseFloat(r) || 0) + Qe(e, t, n || (a ? "border" : "content"), o, i, r) + "px"
		}

		function tt(e, t, n, i, r) {
			return new tt.prototype.init(e, t, n, i, r)
		}
		L.extend({
			cssHooks: {
				opacity: {
					get: function (e, t) {
						if (t) {
							var n = Be(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {},
			style: function (e, t, n, i) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var r, a, o, l = X(t),
						s = Ue.test(t),
						d = e.style;
					if (s || (t = $e(l)), o = L.cssHooks[t] || L.cssHooks[l], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : d[t];
					"string" === (a = typeof n) && (r = re.exec(n)) && r[1] && (n = se(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (L.cssNumber[l] ? "" : "px")), _.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (s ? d.setProperty(t, n) : d[t] = n))
				}
			},
			css: function (e, t, n, i) {
				var r, a, o, l = X(t);
				return Ue.test(t) || (t = $e(l)), (o = L.cssHooks[t] || L.cssHooks[l]) && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in qe && (r = qe[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
			}
		}), L.each(["height", "width"], function (e, t) {
			L.cssHooks[t] = {
				get: function (e, n, i) {
					if (n) return !Ge.test(L.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, i) : le(e, Ze, function () {
						return et(e, t, i)
					})
				},
				set: function (e, n, i) {
					var r, a = We(e),
						o = "border-box" === L.css(e, "boxSizing", !1, a),
						l = i && Qe(e, t, i, o, a);
					return o && _.scrollboxSize() === a.position && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Qe(e, t, "border", !1, a) - .5)), l && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = L.css(e, t)), Ke(0, n, l)
				}
			}
		}), L.cssHooks.marginLeft = Ve(_.reliableMarginLeft, function (e, t) {
			if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
				marginLeft: 0
			}, function () {
				return e.getBoundingClientRect().left
			})) + "px"
		}), L.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (e, t) {
			L.cssHooks[e + t] = {
				expand: function (n) {
					for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ae[i] + t] = a[i] || a[i - 2] || a[0];
					return r
				}
			}, "margin" !== e && (L.cssHooks[e + t].set = Ke)
		}), L.fn.extend({
			css: function (e, t) {
				return G(this, function (e, t, n) {
					var i, r, a = {},
						o = 0;
					if (Array.isArray(t)) {
						for (i = We(e), r = t.length; o < r; o++) a[t[o]] = L.css(e, t[o], !1, i);
						return a
					}
					return void 0 !== n ? L.style(e, t, n) : L.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}), L.Tween = tt, tt.prototype = {
			constructor: tt,
			init: function (e, t, n, i, r, a) {
				this.elem = e, this.prop = n, this.easing = r || L.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (L.cssNumber[n] ? "" : "px")
			},
			cur: function () {
				var e = tt.propHooks[this.prop];
				return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
			},
			run: function (e) {
				var t, n = tt.propHooks[this.prop];
				return this.options.duration ? this.pos = t = L.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
			}
		}, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
			_default: {
				get: function (e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = L.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
				},
				set: function (e) {
					L.fx.step[e.prop] ? L.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[L.cssProps[e.prop]] && !L.cssHooks[e.prop] ? e.elem[e.prop] = e.now : L.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
			set: function (e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, L.easing = {
			linear: function (e) {
				return e
			},
			swing: function (e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, L.fx = tt.prototype.init, L.fx.step = {};
		var nt, it, rt = /^(?:toggle|show|hide)$/,
			at = /queueHooks$/;

		function ot() {
			it && (!1 === o.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ot) : n.setTimeout(ot, L.fx.interval), L.fx.tick())
		}

		function lt() {
			return n.setTimeout(function () {
				nt = void 0
			}), nt = Date.now()
		}

		function st(e, t) {
			var n, i = 0,
				r = {
					height: e
				};
			for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ae[i])] = r["padding" + n] = e;
			return t && (r.opacity = r.width = e), r
		}

		function dt(e, t, n) {
			for (var i, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, o = r.length; a < o; a++)
				if (i = r[a].call(n, t, e)) return i
		}

		function ut(e, t, n) {
			var i, r, a = 0,
				o = ut.prefilters.length,
				l = L.Deferred().always(function () {
					delete s.elem
				}),
				s = function () {
					if (r) return !1;
					for (var t = nt || lt(), n = Math.max(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), a = 0, o = d.tweens.length; a < o; a++) d.tweens[a].run(i);
					return l.notifyWith(e, [d, i, n]), i < 1 && o ? n : (o || l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d]), !1)
				},
				d = l.promise({
					elem: e,
					props: L.extend({}, t),
					opts: L.extend(!0, {
						specialEasing: {},
						easing: L.easing._default
					}, n),
					originalProperties: t,
					originalOptions: n,
					startTime: nt || lt(),
					duration: n.duration,
					tweens: [],
					createTween: function (t, n) {
						var i = L.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
						return d.tweens.push(i), i
					},
					stop: function (t) {
						var n = 0,
							i = t ? d.tweens.length : 0;
						if (r) return this;
						for (r = !0; n < i; n++) d.tweens[n].run(1);
						return t ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, t])) : l.rejectWith(e, [d, t]), this
					}
				}),
				u = d.props;
			for (! function (e, t) {
					var n, i, r, a, o;
					for (n in e)
						if (r = t[i = X(n)], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = L.cssHooks[i]) && "expand" in o)
							for (n in a = o.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
						else t[i] = r
				}(u, d.opts.specialEasing); a < o; a++)
				if (i = ut.prefilters[a].call(d, e, u, d.opts)) return y(i.stop) && (L._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
			return L.map(u, dt, d), y(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), L.fx.timer(L.extend(s, {
				elem: e,
				anim: d,
				queue: d.opts.queue
			})), d
		}
		L.Animation = L.extend(ut, {
				tweeners: {
					"*": [function (e, t) {
						var n = this.createTween(e, t);
						return se(n.elem, e, re.exec(t), n), n
					}]
				},
				tweener: function (e, t) {
					y(e) ? (t = e, e = ["*"]) : e = e.match(j);
					for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
				},
				prefilters: [function (e, t, n) {
					var i, r, a, o, l, s, d, u, c = "width" in t || "height" in t,
						h = this,
						p = {},
						f = e.style,
						m = e.nodeType && oe(e),
						g = K.get(e, "fxshow");
					for (i in n.queue || (null == (o = L._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function () {
							o.unqueued || l()
						}), o.unqueued++, h.always(function () {
							h.always(function () {
								o.unqueued--, L.queue(e, "fx").length || o.empty.fire()
							})
						})), t)
						if (r = t[i], rt.test(r)) {
							if (delete t[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
								if ("show" !== r || !g || void 0 === g[i]) continue;
								m = !0
							}
							p[i] = g && g[i] || L.style(e, i)
						}
					if ((s = !L.isEmptyObject(t)) || !L.isEmptyObject(p))
						for (i in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (d = g && g.display) && (d = K.get(e, "display")), "none" === (u = L.css(e, "display")) && (d ? u = d : (ce([e], !0), d = e.style.display || d, u = L.css(e, "display"), ce([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === L.css(e, "float") && (s || (h.done(function () {
								f.display = d
							}), null == d && (u = f.display, d = "none" === u ? "" : u)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", h.always(function () {
								f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
							})), s = !1, p) s || (g ? "hidden" in g && (m = g.hidden) : g = K.access(e, "fxshow", {
							display: d
						}), a && (g.hidden = !m), m && ce([e], !0), h.done(function () {
							for (i in m || ce([e]), K.remove(e, "fxshow"), p) L.style(e, i, p[i])
						})), s = dt(m ? g[i] : 0, i, h), i in g || (g[i] = s.start, m && (s.end = s.start, s.start = 0))
				}],
				prefilter: function (e, t) {
					t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
				}
			}), L.speed = function (e, t, n) {
				var i = e && "object" == typeof e ? L.extend({}, e) : {
					complete: n || !n && t || y(e) && e,
					duration: e,
					easing: n && t || t && !y(t) && t
				};
				return L.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in L.fx.speeds ? i.duration = L.fx.speeds[i.duration] : i.duration = L.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
					y(i.old) && i.old.call(this), i.queue && L.dequeue(this, i.queue)
				}, i
			}, L.fn.extend({
				fadeTo: function (e, t, n, i) {
					return this.filter(oe).css("opacity", 0).show().end().animate({
						opacity: t
					}, e, n, i)
				},
				animate: function (e, t, n, i) {
					var r = L.isEmptyObject(e),
						a = L.speed(t, n, i),
						o = function () {
							var t = ut(this, L.extend({}, e), a);
							(r || K.get(this, "finish")) && t.stop(!0)
						};
					return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
				},
				stop: function (e, t, n) {
					var i = function (e) {
						var t = e.stop;
						delete e.stop, t(n)
					};
					return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
						var t = !0,
							r = null != e && e + "queueHooks",
							a = L.timers,
							o = K.get(this);
						if (r) o[r] && o[r].stop && i(o[r]);
						else
							for (r in o) o[r] && o[r].stop && at.test(r) && i(o[r]);
						for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
						!t && n || L.dequeue(this, e)
					})
				},
				finish: function (e) {
					return !1 !== e && (e = e || "fx"), this.each(function () {
						var t, n = K.get(this),
							i = n[e + "queue"],
							r = n[e + "queueHooks"],
							a = L.timers,
							o = i ? i.length : 0;
						for (n.finish = !0, L.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
						for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
						delete n.finish
					})
				}
			}), L.each(["toggle", "show", "hide"], function (e, t) {
				var n = L.fn[t];
				L.fn[t] = function (e, i, r) {
					return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, i, r)
				}
			}), L.each({
				slideDown: st("show"),
				slideUp: st("hide"),
				slideToggle: st("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (e, t) {
				L.fn[e] = function (e, n, i) {
					return this.animate(t, e, n, i)
				}
			}), L.timers = [], L.fx.tick = function () {
				var e, t = 0,
					n = L.timers;
				for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
				n.length || L.fx.stop(), nt = void 0
			}, L.fx.timer = function (e) {
				L.timers.push(e), L.fx.start()
			}, L.fx.interval = 13, L.fx.start = function () {
				it || (it = !0, ot())
			}, L.fx.stop = function () {
				it = null
			}, L.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, L.fn.delay = function (e, t) {
				return e = L.fx && L.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, i) {
					var r = n.setTimeout(t, e);
					i.stop = function () {
						n.clearTimeout(r)
					}
				})
			},
			function () {
				var e = o.createElement("input"),
					t = o.createElement("select").appendChild(o.createElement("option"));
				e.type = "checkbox", _.checkOn = "" !== e.value, _.optSelected = t.selected, (e = o.createElement("input")).value = "t", e.type = "radio", _.radioValue = "t" === e.value
			}();
		var ct, ht = L.expr.attrHandle;
		L.fn.extend({
			attr: function (e, t) {
				return G(this, L.attr, e, t, arguments.length > 1)
			},
			removeAttr: function (e) {
				return this.each(function () {
					L.removeAttr(this, e)
				})
			}
		}), L.extend({
			attr: function (e, t, n) {
				var i, r, a = e.nodeType;
				if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? L.prop(e, t, n) : (1 === a && L.isXMLDoc(e) || (r = L.attrHooks[t.toLowerCase()] || (L.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void L.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = L.find.attr(e, t)) ? void 0 : i)
			},
			attrHooks: {
				type: {
					set: function (e, t) {
						if (!_.radioValue && "radio" === t && E(e, "input")) {
							var n = e.value;
							return e.setAttribute("type", t), n && (e.value = n), t
						}
					}
				}
			},
			removeAttr: function (e, t) {
				var n, i = 0,
					r = t && t.match(j);
				if (r && 1 === e.nodeType)
					for (; n = r[i++];) e.removeAttribute(n)
			}
		}), ct = {
			set: function (e, t, n) {
				return !1 === t ? L.removeAttr(e, n) : e.setAttribute(n, n), n
			}
		}, L.each(L.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = ht[t] || L.find.attr;
			ht[t] = function (e, t, i) {
				var r, a, o = t.toLowerCase();
				return i || (a = ht[o], ht[o] = r, r = null != n(e, t, i) ? o : null, ht[o] = a), r
			}
		});
		var pt = /^(?:input|select|textarea|button)$/i,
			ft = /^(?:a|area)$/i;

		function mt(e) {
			return (e.match(j) || []).join(" ")
		}

		function gt(e) {
			return e.getAttribute && e.getAttribute("class") || ""
		}

		function _t(e) {
			return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
		}
		L.fn.extend({
			prop: function (e, t) {
				return G(this, L.prop, e, t, arguments.length > 1)
			},
			removeProp: function (e) {
				return this.each(function () {
					delete this[L.propFix[e] || e]
				})
			}
		}), L.extend({
			prop: function (e, t, n) {
				var i, r, a = e.nodeType;
				if (3 !== a && 8 !== a && 2 !== a) return 1 === a && L.isXMLDoc(e) || (t = L.propFix[t] || t, r = L.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function (e) {
						var t = L.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : pt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), _.optSelected || (L.propHooks.selected = {
			get: function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null
			},
			set: function (e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
			}
		}), L.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			L.propFix[this.toLowerCase()] = this
		}), L.fn.extend({
			addClass: function (e) {
				var t, n, i, r, a, o, l, s = 0;
				if (y(e)) return this.each(function (t) {
					L(this).addClass(e.call(this, t, gt(this)))
				});
				if ((t = _t(e)).length)
					for (; n = this[s++];)
						if (r = gt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
							for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
							r !== (l = mt(i)) && n.setAttribute("class", l)
						}
				return this
			},
			removeClass: function (e) {
				var t, n, i, r, a, o, l, s = 0;
				if (y(e)) return this.each(function (t) {
					L(this).removeClass(e.call(this, t, gt(this)))
				});
				if (!arguments.length) return this.attr("class", "");
				if ((t = _t(e)).length)
					for (; n = this[s++];)
						if (r = gt(n), i = 1 === n.nodeType && " " + mt(r) + " ") {
							for (o = 0; a = t[o++];)
								for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
							r !== (l = mt(i)) && n.setAttribute("class", l)
						}
				return this
			},
			toggleClass: function (e, t) {
				var n = typeof e,
					i = "string" === n || Array.isArray(e);
				return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
					L(this).toggleClass(e.call(this, n, gt(this), t), t)
				}) : this.each(function () {
					var t, r, a, o;
					if (i)
						for (r = 0, a = L(this), o = _t(e); t = o[r++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
					else void 0 !== e && "boolean" !== n || ((t = gt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
				})
			},
			hasClass: function (e) {
				var t, n, i = 0;
				for (t = " " + e + " "; n = this[i++];)
					if (1 === n.nodeType && (" " + mt(gt(n)) + " ").indexOf(t) > -1) return !0;
				return !1
			}
		});
		var yt = /\r/g;
		L.fn.extend({
			val: function (e) {
				var t, n, i, r = this[0];
				return arguments.length ? (i = y(e), this.each(function (n) {
					var r;
					1 === this.nodeType && (null == (r = i ? e.call(this, n, L(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = L.map(r, function (e) {
						return null == e ? "" : e + ""
					})), (t = L.valHooks[this.type] || L.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
				})) : r ? (t = L.valHooks[r.type] || L.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
			}
		}), L.extend({
			valHooks: {
				option: {
					get: function (e) {
						var t = L.find.attr(e, "value");
						return null != t ? t : mt(L.text(e))
					}
				},
				select: {
					get: function (e) {
						var t, n, i, r = e.options,
							a = e.selectedIndex,
							o = "select-one" === e.type,
							l = o ? null : [],
							s = o ? a + 1 : r.length;
						for (i = a < 0 ? s : o ? a : 0; i < s; i++)
							if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !E(n.parentNode, "optgroup"))) {
								if (t = L(n).val(), o) return t;
								l.push(t)
							}
						return l
					},
					set: function (e, t) {
						for (var n, i, r = e.options, a = L.makeArray(t), o = r.length; o--;)((i = r[o]).selected = L.inArray(L.valHooks.option.get(i), a) > -1) && (n = !0);
						return n || (e.selectedIndex = -1), a
					}
				}
			}
		}), L.each(["radio", "checkbox"], function () {
			L.valHooks[this] = {
				set: function (e, t) {
					if (Array.isArray(t)) return e.checked = L.inArray(L(e).val(), t) > -1
				}
			}, _.checkOn || (L.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value
			})
		}), _.focusin = "onfocusin" in n;
		var vt = /^(?:focusinfocus|focusoutblur)$/,
			Mt = function (e) {
				e.stopPropagation()
			};
		L.extend(L.event, {
			trigger: function (e, t, i, r) {
				var a, l, s, d, u, c, h, p, m = [i || o],
					g = f.call(e, "type") ? e.type : e,
					_ = f.call(e, "namespace") ? e.namespace.split(".") : [];
				if (l = p = s = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(g + L.event.triggered) && (g.indexOf(".") > -1 && (_ = g.split("."), g = _.shift(), _.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[L.expando] ? e : new L.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = _.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : L.makeArray(t, [e]), h = L.event.special[g] || {}, r || !h.trigger || !1 !== h.trigger.apply(i, t))) {
					if (!r && !h.noBubble && !v(i)) {
						for (d = h.delegateType || g, vt.test(d + g) || (l = l.parentNode); l; l = l.parentNode) m.push(l), s = l;
						s === (i.ownerDocument || o) && m.push(s.defaultView || s.parentWindow || n)
					}
					for (a = 0;
						(l = m[a++]) && !e.isPropagationStopped();) p = l, e.type = a > 1 ? d : h.bindType || g, (c = (K.get(l, "events") || {})[e.type] && K.get(l, "handle")) && c.apply(l, t), (c = u && l[u]) && c.apply && J(l) && (e.result = c.apply(l, t), !1 === e.result && e.preventDefault());
					return e.type = g, r || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(m.pop(), t) || !J(i) || u && y(i[g]) && !v(i) && ((s = i[u]) && (i[u] = null), L.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, Mt), i[g](), e.isPropagationStopped() && p.removeEventListener(g, Mt), L.event.triggered = void 0, s && (i[u] = s)), e.result
				}
			},
			simulate: function (e, t, n) {
				var i = L.extend(new L.Event, n, {
					type: e,
					isSimulated: !0
				});
				L.event.trigger(i, null, t)
			}
		}), L.fn.extend({
			trigger: function (e, t) {
				return this.each(function () {
					L.event.trigger(e, t, this)
				})
			},
			triggerHandler: function (e, t) {
				var n = this[0];
				if (n) return L.event.trigger(e, t, n, !0)
			}
		}), _.focusin || L.each({
			focus: "focusin",
			blur: "focusout"
		}, function (e, t) {
			var n = function (e) {
				L.event.simulate(t, e.target, L.event.fix(e))
			};
			L.event.special[t] = {
				setup: function () {
					var i = this.ownerDocument || this,
						r = K.access(i, t);
					r || i.addEventListener(e, n, !0), K.access(i, t, (r || 0) + 1)
				},
				teardown: function () {
					var i = this.ownerDocument || this,
						r = K.access(i, t) - 1;
					r ? K.access(i, t, r) : (i.removeEventListener(e, n, !0), K.remove(i, t))
				}
			}
		});
		var bt = n.location,
			wt = Date.now(),
			Lt = /\?/;
		L.parseXML = function (e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				t = (new n.DOMParser).parseFromString(e, "text/xml")
			} catch (e) {
				t = void 0
			}
			return t && !t.getElementsByTagName("parsererror").length || L.error("Invalid XML: " + e), t
		};
		var Dt = /\[\]$/,
			Tt = /\r?\n/g,
			kt = /^(?:submit|button|image|reset|file)$/i,
			St = /^(?:input|select|textarea|keygen)/i;

		function xt(e, t, n, i) {
			var r;
			if (Array.isArray(t)) L.each(t, function (t, r) {
				n || Dt.test(e) ? i(e, r) : xt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
			});
			else if (n || "object" !== w(t)) i(e, t);
			else
				for (r in t) xt(e + "[" + r + "]", t[r], n, i)
		}
		L.param = function (e, t) {
			var n, i = [],
				r = function (e, t) {
					var n = y(t) ? t() : t;
					i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
				};
			if (Array.isArray(e) || e.jquery && !L.isPlainObject(e)) L.each(e, function () {
				r(this.name, this.value)
			});
			else
				for (n in e) xt(n, e[n], t, r);
			return i.join("&")
		}, L.fn.extend({
			serialize: function () {
				return L.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var e = L.prop(this, "elements");
					return e ? L.makeArray(e) : this
				}).filter(function () {
					var e = this.type;
					return this.name && !L(this).is(":disabled") && St.test(this.nodeName) && !kt.test(e) && (this.checked || !he.test(e))
				}).map(function (e, t) {
					var n = L(this).val();
					return null == n ? null : Array.isArray(n) ? L.map(n, function (e) {
						return {
							name: t.name,
							value: e.replace(Tt, "\r\n")
						}
					}) : {
						name: t.name,
						value: n.replace(Tt, "\r\n")
					}
				}).get()
			}
		});
		var Yt = /%20/g,
			Et = /#.*$/,
			Ct = /([?&])_=[^&]*/,
			Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			Pt = /^(?:GET|HEAD)$/,
			Ot = /^\/\//,
			At = {},
			It = {},
			Rt = "*/".concat("*"),
			jt = o.createElement("a");

		function Ft(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");
				var i, r = 0,
					a = t.toLowerCase().match(j) || [];
				if (y(n))
					for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
			}
		}

		function Nt(e, t, n, i) {
			var r = {},
				a = e === It;

			function o(l) {
				var s;
				return r[l] = !0, L.each(e[l] || [], function (e, l) {
					var d = l(t, n, i);
					return "string" != typeof d || a || r[d] ? a ? !(s = d) : void 0 : (t.dataTypes.unshift(d), o(d), !1)
				}), s
			}
			return o(t.dataTypes[0]) || !r["*"] && o("*")
		}

		function Wt(e, t) {
			var n, i, r = L.ajaxSettings.flatOptions || {};
			for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
			return i && L.extend(!0, e, i), e
		}
		jt.href = bt.href, L.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: bt.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Rt,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": JSON.parse,
					"text xml": L.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (e, t) {
				return t ? Wt(Wt(e, L.ajaxSettings), t) : Wt(L.ajaxSettings, e)
			},
			ajaxPrefilter: Ft(At),
			ajaxTransport: Ft(It),
			ajax: function (e, t) {
				"object" == typeof e && (t = e, e = void 0), t = t || {};
				var i, r, a, l, s, d, u, c, h, p, f = L.ajaxSetup({}, t),
					m = f.context || f,
					g = f.context && (m.nodeType || m.jquery) ? L(m) : L.event,
					_ = L.Deferred(),
					y = L.Callbacks("once memory"),
					v = f.statusCode || {},
					M = {},
					b = {},
					w = "canceled",
					D = {
						readyState: 0,
						getResponseHeader: function (e) {
							var t;
							if (u) {
								if (!l)
									for (l = {}; t = Ht.exec(a);) l[t[1].toLowerCase()] = t[2];
								t = l[e.toLowerCase()]
							}
							return null == t ? null : t
						},
						getAllResponseHeaders: function () {
							return u ? a : null
						},
						setRequestHeader: function (e, t) {
							return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, M[e] = t), this
						},
						overrideMimeType: function (e) {
							return null == u && (f.mimeType = e), this
						},
						statusCode: function (e) {
							var t;
							if (e)
								if (u) D.always(e[D.status]);
								else
									for (t in e) v[t] = [v[t], e[t]];
							return this
						},
						abort: function (e) {
							var t = e || w;
							return i && i.abort(t), T(0, t), this
						}
					};
				if (_.promise(D), f.url = ((e || f.url || bt.href) + "").replace(Ot, bt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
					d = o.createElement("a");
					try {
						d.href = f.url, d.href = d.href, f.crossDomain = jt.protocol + "//" + jt.host != d.protocol + "//" + d.host
					} catch (e) {
						f.crossDomain = !0
					}
				}
				if (f.data && f.processData && "string" != typeof f.data && (f.data = L.param(f.data, f.traditional)), Nt(At, f, t, D), u) return D;
				for (h in (c = L.event && f.global) && 0 == L.active++ && L.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), r = f.url.replace(Et, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Yt, "+")) : (p = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Lt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Ct, "$1"), p = (Lt.test(r) ? "&" : "?") + "_=" + wt++ + p), f.url = r + p), f.ifModified && (L.lastModified[r] && D.setRequestHeader("If-Modified-Since", L.lastModified[r]), L.etag[r] && D.setRequestHeader("If-None-Match", L.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && D.setRequestHeader("Content-Type", f.contentType), D.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) D.setRequestHeader(h, f.headers[h]);
				if (f.beforeSend && (!1 === f.beforeSend.call(m, D, f) || u)) return D.abort();
				if (w = "abort", y.add(f.complete), D.done(f.success), D.fail(f.error), i = Nt(It, f, t, D)) {
					if (D.readyState = 1, c && g.trigger("ajaxSend", [D, f]), u) return D;
					f.async && f.timeout > 0 && (s = n.setTimeout(function () {
						D.abort("timeout")
					}, f.timeout));
					try {
						u = !1, i.send(M, T)
					} catch (e) {
						if (u) throw e;
						T(-1, e)
					}
				} else T(-1, "No Transport");

				function T(e, t, o, l) {
					var d, h, p, M, b, w = t;
					u || (u = !0, s && n.clearTimeout(s), i = void 0, a = l || "", D.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, o && (M = function (e, t, n) {
						for (var i, r, a, o, l = e.contents, s = e.dataTypes;
							"*" === s[0];) s.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
						if (i)
							for (r in l)
								if (l[r] && l[r].test(i)) {
									s.unshift(r);
									break
								}
						if (s[0] in n) a = s[0];
						else {
							for (r in n) {
								if (!s[0] || e.converters[r + " " + s[0]]) {
									a = r;
									break
								}
								o || (o = r)
							}
							a = a || o
						}
						if (a) return a !== s[0] && s.unshift(a), n[a]
					}(f, D, o)), M = function (e, t, n, i) {
						var r, a, o, l, s, d = {},
							u = e.dataTypes.slice();
						if (u[1])
							for (o in e.converters) d[o.toLowerCase()] = e.converters[o];
						for (a = u.shift(); a;)
							if (e.responseFields[a] && (n[e.responseFields[a]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = a, a = u.shift())
								if ("*" === a) a = s;
								else if ("*" !== s && s !== a) {
							if (!(o = d[s + " " + a] || d["* " + a]))
								for (r in d)
									if ((l = r.split(" "))[1] === a && (o = d[s + " " + l[0]] || d["* " + l[0]])) {
										!0 === o ? o = d[r] : !0 !== d[r] && (a = l[0], u.unshift(l[1]));
										break
									}
							if (!0 !== o)
								if (o && e.throws) t = o(t);
								else try {
									t = o(t)
								} catch (e) {
									return {
										state: "parsererror",
										error: o ? e : "No conversion from " + s + " to " + a
									}
								}
						}
						return {
							state: "success",
							data: t
						}
					}(f, M, D, d), d ? (f.ifModified && ((b = D.getResponseHeader("Last-Modified")) && (L.lastModified[r] = b), (b = D.getResponseHeader("etag")) && (L.etag[r] = b)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = M.state, h = M.data, d = !(p = M.error))) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), D.status = e, D.statusText = (t || w) + "", d ? _.resolveWith(m, [h, w, D]) : _.rejectWith(m, [D, w, p]), D.statusCode(v), v = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [D, f, d ? h : p]), y.fireWith(m, [D, w]), c && (g.trigger("ajaxComplete", [D, f]), --L.active || L.event.trigger("ajaxStop")))
				}
				return D
			},
			getJSON: function (e, t, n) {
				return L.get(e, t, n, "json")
			},
			getScript: function (e, t) {
				return L.get(e, void 0, t, "script")
			}
		}), L.each(["get", "post"], function (e, t) {
			L[t] = function (e, n, i, r) {
				return y(n) && (r = r || i, i = n, n = void 0), L.ajax(L.extend({
					url: e,
					type: t,
					dataType: r,
					data: n,
					success: i
				}, L.isPlainObject(e) && e))
			}
		}), L._evalUrl = function (e) {
			return L.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				throws: !0
			})
		}, L.fn.extend({
			wrapAll: function (e) {
				var t;
				return this[0] && (y(e) && (e = e.call(this[0])), t = L(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
			},
			wrapInner: function (e) {
				return y(e) ? this.each(function (t) {
					L(this).wrapInner(e.call(this, t))
				}) : this.each(function () {
					var t = L(this),
						n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e)
				})
			},
			wrap: function (e) {
				var t = y(e);
				return this.each(function (n) {
					L(this).wrapAll(t ? e.call(this, n) : e)
				})
			},
			unwrap: function (e) {
				return this.parent(e).not("body").each(function () {
					L(this).replaceWith(this.childNodes)
				}), this
			}
		}), L.expr.pseudos.hidden = function (e) {
			return !L.expr.pseudos.visible(e)
		}, L.expr.pseudos.visible = function (e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
		}, L.ajaxSettings.xhr = function () {
			try {
				return new n.XMLHttpRequest
			} catch (e) {}
		};
		var zt = {
				0: 200,
				1223: 204
			},
			Bt = L.ajaxSettings.xhr();
		_.cors = !!Bt && "withCredentials" in Bt, _.ajax = Bt = !!Bt, L.ajaxTransport(function (e) {
			var t, i;
			if (_.cors || Bt && !e.crossDomain) return {
				send: function (r, a) {
					var o, l = e.xhr();
					if (l.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (o in e.xhrFields) l[o] = e.xhrFields[o];
					for (o in e.mimeType && l.overrideMimeType && l.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) l.setRequestHeader(o, r[o]);
					t = function (e) {
						return function () {
							t && (t = i = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === e ? l.abort() : "error" === e ? "number" != typeof l.status ? a(0, "error") : a(l.status, l.statusText) : a(zt[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
								binary: l.response
							} : {
								text: l.responseText
							}, l.getAllResponseHeaders()))
						}
					}, l.onload = t(), i = l.onerror = l.ontimeout = t("error"), void 0 !== l.onabort ? l.onabort = i : l.onreadystatechange = function () {
						4 === l.readyState && n.setTimeout(function () {
							t && i()
						})
					}, t = t("abort");
					try {
						l.send(e.hasContent && e.data || null)
					} catch (e) {
						if (t) throw e
					}
				},
				abort: function () {
					t && t()
				}
			}
		}), L.ajaxPrefilter(function (e) {
			e.crossDomain && (e.contents.script = !1)
		}), L.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function (e) {
					return L.globalEval(e), e
				}
			}
		}), L.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
		}), L.ajaxTransport("script", function (e) {
			var t, n;
			if (e.crossDomain) return {
				send: function (i, r) {
					t = L("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function (e) {
						t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
					}), o.head.appendChild(t[0])
				},
				abort: function () {
					n && n()
				}
			}
		});
		var Vt, Gt = [],
			Ut = /(=)\?(?=&|$)|\?\?/;
		L.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var e = Gt.pop() || L.expando + "_" + wt++;
				return this[e] = !0, e
			}
		}), L.ajaxPrefilter("json jsonp", function (e, t, i) {
			var r, a, o, l = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
			if (l || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Lt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
				return o || L.error(r + " was not called"), o[0]
			}, e.dataTypes[0] = "json", a = n[r], n[r] = function () {
				o = arguments
			}, i.always(function () {
				void 0 === a ? L(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && y(a) && a(o[0]), o = a = void 0
			}), "script"
		}), _.createHTMLDocument = ((Vt = o.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), L.parseHTML = function (e, t, n) {
			return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (_.createHTMLDocument ? ((i = (t = o.implementation.createHTMLDocument("")).createElement("base")).href = o.location.href, t.head.appendChild(i)) : t = o), a = !n && [], (r = C.exec(e)) ? [t.createElement(r[1])] : (r = be([e], t, a), a && a.length && L(a).remove(), L.merge([], r.childNodes)));
			var i, r, a
		}, L.fn.load = function (e, t, n) {
			var i, r, a, o = this,
				l = e.indexOf(" ");
			return l > -1 && (i = mt(e.slice(l)), e = e.slice(0, l)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && L.ajax({
				url: e,
				type: r || "GET",
				dataType: "html",
				data: t
			}).done(function (e) {
				a = arguments, o.html(i ? L("<div>").append(L.parseHTML(e)).find(i) : e)
			}).always(n && function (e, t) {
				o.each(function () {
					n.apply(this, a || [e.responseText, t, e])
				})
			}), this
		}, L.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			L.fn[t] = function (e) {
				return this.on(t, e)
			}
		}), L.expr.pseudos.animated = function (e) {
			return L.grep(L.timers, function (t) {
				return e === t.elem
			}).length
		}, L.offset = {
			setOffset: function (e, t, n) {
				var i, r, a, o, l, s, d = L.css(e, "position"),
					u = L(e),
					c = {};
				"static" === d && (e.style.position = "relative"), l = u.offset(), a = L.css(e, "top"), s = L.css(e, "left"), ("absolute" === d || "fixed" === d) && (a + s).indexOf("auto") > -1 ? (o = (i = u.position()).top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(s) || 0), y(t) && (t = t.call(e, n, L.extend({}, l))), null != t.top && (c.top = t.top - l.top + o), null != t.left && (c.left = t.left - l.left + r), "using" in t ? t.using.call(e, c) : u.css(c)
			}
		}, L.fn.extend({
			offset: function (e) {
				if (arguments.length) return void 0 === e ? this : this.each(function (t) {
					L.offset.setOffset(this, e, t)
				});
				var t, n, i = this[0];
				return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
					top: t.top + n.pageYOffset,
					left: t.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				} : void 0
			},
			position: function () {
				if (this[0]) {
					var e, t, n, i = this[0],
						r = {
							top: 0,
							left: 0
						};
					if ("fixed" === L.css(i, "position")) t = i.getBoundingClientRect();
					else {
						for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === L.css(e, "position");) e = e.parentNode;
						e && e !== i && 1 === e.nodeType && ((r = L(e).offset()).top += L.css(e, "borderTopWidth", !0), r.left += L.css(e, "borderLeftWidth", !0))
					}
					return {
						top: t.top - r.top - L.css(i, "marginTop", !0),
						left: t.left - r.left - L.css(i, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var e = this.offsetParent; e && "static" === L.css(e, "position");) e = e.offsetParent;
					return e || we
				})
			}
		}), L.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (e, t) {
			var n = "pageYOffset" === t;
			L.fn[e] = function (i) {
				return G(this, function (e, i, r) {
					var a;
					if (v(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r) return a ? a[t] : e[i];
					a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
				}, e, i, arguments.length)
			}
		}), L.each(["top", "left"], function (e, t) {
			L.cssHooks[t] = Ve(_.pixelPosition, function (e, n) {
				if (n) return n = Be(e, t), Ne.test(n) ? L(e).position()[t] + "px" : n
			})
		}), L.each({
			Height: "height",
			Width: "width"
		}, function (e, t) {
			L.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function (n, i) {
				L.fn[i] = function (r, a) {
					var o = arguments.length && (n || "boolean" != typeof r),
						l = n || (!0 === r || !0 === a ? "margin" : "border");
					return G(this, function (t, n, r) {
						var a;
						return v(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? L.css(t, n, l) : L.style(t, n, r, l)
					}, t, o ? r : void 0, o)
				}
			})
		}), L.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
			L.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
			}
		}), L.fn.extend({
			hover: function (e, t) {
				return this.mouseenter(e).mouseleave(t || e)
			}
		}), L.fn.extend({
			bind: function (e, t, n) {
				return this.on(e, null, t, n)
			},
			unbind: function (e, t) {
				return this.off(e, null, t)
			},
			delegate: function (e, t, n, i) {
				return this.on(t, e, n, i)
			},
			undelegate: function (e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
			}
		}), L.proxy = function (e, t) {
			var n, i, r;
			if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = s.call(arguments, 2), (r = function () {
				return e.apply(t || this, i.concat(s.call(arguments)))
			}).guid = e.guid = e.guid || L.guid++, r
		}, L.holdReady = function (e) {
			e ? L.readyWait++ : L.ready(!0)
		}, L.isArray = Array.isArray, L.parseJSON = JSON.parse, L.nodeName = E, L.isFunction = y, L.isWindow = v, L.camelCase = X, L.type = w, L.now = Date.now, L.isNumeric = function (e) {
			var t = L.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		}, void 0 === (i = function () {
			return L
		}.apply(t, [])) || (e.exports = i);
		var Zt = n.jQuery,
			qt = n.$;
		return L.noConflict = function (e) {
			return n.$ === L && (n.$ = qt), e && n.jQuery === L && (n.jQuery = Zt), L
		}, r || (n.jQuery = n.$ = L), L
	})
}, function (e, t, n) {
	"use strict";
	e.exports = n(12), e.exports.easing = n(165), e.exports.canvas = n(166), e.exports.options = n(167)
}, function (e, t, n) {
	"use strict";
	var i = n(2);
	e.exports = {
		_set: function (e, t) {
			return i.merge(this[e] || (this[e] = {}), t)
		}
	}
}, function (e, t, n) {
	var i, r;
	n(154), i = [n(1)], void 0 === (r = function (e) {
		return function () {
			var t, n, i, r = 0,
				a = {
					error: "error",
					info: "info",
					success: "success",
					warning: "warning"
				},
				o = {
					clear: function (n, i) {
						var r = c();
						t || l(r), s(n, r, i) || function (n) {
							for (var i = t.children(), r = i.length - 1; r >= 0; r--) s(e(i[r]), n)
						}(r)
					},
					remove: function (n) {
						var i = c();
						t || l(i), n && 0 === e(":focus", n).length ? h(n) : t.children().length && t.remove()
					},
					error: function (e, t, n) {
						return u({
							type: a.error,
							iconClass: c().iconClasses.error,
							message: e,
							optionsOverride: n,
							title: t
						})
					},
					getContainer: l,
					info: function (e, t, n) {
						return u({
							type: a.info,
							iconClass: c().iconClasses.info,
							message: e,
							optionsOverride: n,
							title: t
						})
					},
					options: {},
					subscribe: function (e) {
						n = e
					},
					success: function (e, t, n) {
						return u({
							type: a.success,
							iconClass: c().iconClasses.success,
							message: e,
							optionsOverride: n,
							title: t
						})
					},
					version: "2.1.4",
					warning: function (e, t, n) {
						return u({
							type: a.warning,
							iconClass: c().iconClasses.warning,
							message: e,
							optionsOverride: n,
							title: t
						})
					}
				};
			return o;

			function l(n, i) {
				return n || (n = c()), (t = e("#" + n.containerId)).length ? t : (i && (t = function (n) {
					return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass)).appendTo(e(n.target)), t
				}(n)), t)
			}

			function s(t, n, i) {
				var r = !(!i || !i.force) && i.force;
				return !(!t || !r && 0 !== e(":focus", t).length || (t[n.hideMethod]({
					duration: n.hideDuration,
					easing: n.hideEasing,
					complete: function () {
						h(t)
					}
				}), 0))
			}

			function d(e) {
				n && n(e)
			}

			function u(n) {
				var a = c(),
					o = n.iconClass || a.iconClass;
				if (void 0 !== n.optionsOverride && (a = e.extend(a, n.optionsOverride), o = n.optionsOverride.iconClass || o), ! function (e, t) {
						if (e.preventDuplicates) {
							if (t.message === i) return !0;
							i = t.message
						}
						return !1
					}(a, n)) {
					r++, t = l(a, !0);
					var s = null,
						u = e("<div/>"),
						p = e("<div/>"),
						f = e("<div/>"),
						m = e("<div/>"),
						g = e(a.closeHtml),
						_ = {
							intervalId: null,
							hideEta: null,
							maxHideTime: null
						},
						y = {
							toastId: r,
							state: "visible",
							startTime: new Date,
							options: a,
							map: n
						};
					return n.iconClass && u.addClass(a.toastClass).addClass(o),
						function () {
							if (n.title) {
								var e = n.title;
								a.escapeHtml && (e = v(n.title)), p.append(e).addClass(a.titleClass), u.append(p)
							}
						}(),
						function () {
							if (n.message) {
								var e = n.message;
								a.escapeHtml && (e = v(n.message)), f.append(e).addClass(a.messageClass), u.append(f)
							}
						}(), a.closeButton && (g.addClass(a.closeClass).attr("role", "button"), u.prepend(g)), a.progressBar && (m.addClass(a.progressClass), u.prepend(m)), a.rtl && u.addClass("rtl"), a.newestOnTop ? t.prepend(u) : t.append(u),
						function () {
							var e = "";
							switch (n.iconClass) {
								case "toast-success":
								case "toast-info":
									e = "polite";
									break;
								default:
									e = "assertive"
							}
							u.attr("aria-live", e)
						}(), u.hide(), u[a.showMethod]({
							duration: a.showDuration,
							easing: a.showEasing,
							complete: a.onShown
						}), a.timeOut > 0 && (s = setTimeout(M, a.timeOut), _.maxHideTime = parseFloat(a.timeOut), _.hideEta = (new Date).getTime() + _.maxHideTime, a.progressBar && (_.intervalId = setInterval(L, 10))), a.closeOnHover && u.hover(w, b), !a.onclick && a.tapToDismiss && u.click(M), a.closeButton && g && g.click(function (e) {
							e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), a.onCloseClick && a.onCloseClick(e), M(!0)
						}), a.onclick && u.click(function (e) {
							a.onclick(e), M()
						}), d(y), a.debug && console && console.log(y), u
				}

				function v(e) {
					return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
				}

				function M(t) {
					var n = t && !1 !== a.closeMethod ? a.closeMethod : a.hideMethod,
						i = t && !1 !== a.closeDuration ? a.closeDuration : a.hideDuration,
						r = t && !1 !== a.closeEasing ? a.closeEasing : a.hideEasing;
					if (!e(":focus", u).length || t) return clearTimeout(_.intervalId), u[n]({
						duration: i,
						easing: r,
						complete: function () {
							h(u), clearTimeout(s), a.onHidden && "hidden" !== y.state && a.onHidden(), y.state = "hidden", y.endTime = new Date, d(y)
						}
					})
				}

				function b() {
					(a.timeOut > 0 || a.extendedTimeOut > 0) && (s = setTimeout(M, a.extendedTimeOut), _.maxHideTime = parseFloat(a.extendedTimeOut), _.hideEta = (new Date).getTime() + _.maxHideTime)
				}

				function w() {
					clearTimeout(s), _.hideEta = 0, u.stop(!0, !0)[a.showMethod]({
						duration: a.showDuration,
						easing: a.showEasing
					})
				}

				function L() {
					var e = (_.hideEta - (new Date).getTime()) / _.maxHideTime * 100;
					m.width(e + "%")
				}
			}

			function c() {
				return e.extend({}, {
					tapToDismiss: !0,
					toastClass: "toast",
					containerId: "toast-container",
					debug: !1,
					showMethod: "fadeIn",
					showDuration: 300,
					showEasing: "swing",
					onShown: void 0,
					hideMethod: "fadeOut",
					hideDuration: 1e3,
					hideEasing: "swing",
					onHidden: void 0,
					closeMethod: !1,
					closeDuration: !1,
					closeEasing: !1,
					closeOnHover: !0,
					extendedTimeOut: 1e3,
					iconClasses: {
						error: "toast-error",
						info: "toast-info",
						success: "toast-success",
						warning: "toast-warning"
					},
					iconClass: "toast-info",
					positionClass: "toast-top-right",
					timeOut: 5e3,
					titleClass: "toast-title",
					messageClass: "toast-message",
					escapeHtml: !1,
					target: "body",
					closeHtml: '<button type="button">&times;</button>',
					closeClass: "toast-close-button",
					newestOnTop: !0,
					preventDuplicates: !1,
					progressBar: !1,
					progressClass: "toast-progress",
					rtl: !1
				}, o.options)
			}

			function h(e) {
				t || (t = l()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
			}
		}()
	}.apply(t, i)) || (e.exports = r)
}, function (e, t, n) {
	var i = n(164)();
	i.helpers = n(2), n(168)(i), i.Animation = n(139), i.animationService = n(140), i.defaults = n(3), i.Element = n(6), i.elements = n(8), i.Interaction = n(141), i.layouts = n(9), i.platform = n(142), i.plugins = n(143), i.Scale = n(10), i.scaleService = n(7), i.Ticks = n(11), i.Tooltip = n(144), n(179)(i), n(180)(i), n(181)(i), n(182)(i), n(183)(i), n(184)(i), n(185)(i), n(186)(i), n(187)(i), n(188)(i), n(189)(i), n(190)(i), n(191)(i), n(192)(i), n(193)(i), n(194)(i), n(195)(i), n(196)(i), n(197)(i), n(198)(i), n(199)(i), n(200)(i);
	var r = n(201);
	for (var a in r) r.hasOwnProperty(a) && i.plugins.register(r[a]);
	i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.Legend = r.legend._element, i.Title = r.title._element, i.pluginService = i.plugins, i.PluginBase = i.Element.extend({}), i.canvasHelpers = i.helpers.canvas, i.layoutService = i.layouts
}, function (e, t, n) {
	"use strict";
	var i = n(138),
		r = n(2);
	var a = function (e) {
		r.extend(this, e), this.initialize.apply(this, arguments)
	};
	r.extend(a.prototype, {
		initialize: function () {
			this.hidden = !1
		},
		pivot: function () {
			var e = this;
			return e._view || (e._view = r.clone(e._model)), e._start = {}, e
		},
		transition: function (e) {
			var t = this,
				n = t._model,
				r = t._start,
				a = t._view;
			return n && 1 !== e ? (a || (a = t._view = {}), r || (r = t._start = {}), function (e, t, n, r) {
				var a, o, l, s, d, u, c, h, p, f = Object.keys(n);
				for (a = 0, o = f.length; a < o; ++a)
					if (u = n[l = f[a]], t.hasOwnProperty(l) || (t[l] = u), (s = t[l]) !== u && "_" !== l[0]) {
						if (e.hasOwnProperty(l) || (e[l] = s), (c = typeof u) == typeof (d = e[l]))
							if ("string" === c) {
								if ((h = i(d)).valid && (p = i(u)).valid) {
									t[l] = p.mix(h, r).rgbString();
									continue
								}
							} else if ("number" === c && isFinite(d) && isFinite(u)) {
							t[l] = d + (u - d) * r;
							continue
						}
						t[l] = u
					}
			}(r, a, n, e), t) : (t._view = n, t._start = null, t)
		},
		tooltipPosition: function () {
			return {
				x: this._model.x,
				y: this._model.y
			}
		},
		hasValue: function () {
			return r.isNumber(this._model.x) && r.isNumber(this._model.y)
		}
	}), a.extend = r.inherits, e.exports = a
}, function (e, t, n) {
	"use strict";
	var i = n(3),
		r = n(2),
		a = n(9);
	e.exports = {
		constructors: {},
		defaults: {},
		registerScaleType: function (e, t, n) {
			this.constructors[e] = t, this.defaults[e] = r.clone(n)
		},
		getScaleConstructor: function (e) {
			return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
		},
		getScaleDefaults: function (e) {
			return this.defaults.hasOwnProperty(e) ? r.merge({}, [i.scale, this.defaults[e]]) : {}
		},
		updateScaleDefaults: function (e, t) {
			this.defaults.hasOwnProperty(e) && (this.defaults[e] = r.extend(this.defaults[e], t))
		},
		addScalesToLayout: function (e) {
			r.each(e.scales, function (t) {
				t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, a.addBox(e, t)
			})
		}
	}
}, function (e, t, n) {
	"use strict";
	e.exports = {}, e.exports.Arc = n(173), e.exports.Line = n(174), e.exports.Point = n(175), e.exports.Rectangle = n(176)
}, function (e, t, n) {
	"use strict";
	var i = n(2);

	function r(e, t) {
		return i.where(e, function (e) {
			return e.position === t
		})
	}

	function a(e, t) {
		e.forEach(function (e, t) {
			return e._tmpIndex_ = t, e
		}), e.sort(function (e, n) {
			var i = t ? n : e,
				r = t ? e : n;
			return i.weight === r.weight ? i._tmpIndex_ - r._tmpIndex_ : i.weight - r.weight
		}), e.forEach(function (e) {
			delete e._tmpIndex_
		})
	}
	e.exports = {
		defaults: {},
		addBox: function (e, t) {
			e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, e.boxes.push(t)
		},
		removeBox: function (e, t) {
			var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
		},
		configure: function (e, t, n) {
			for (var i, r = ["fullWidth", "position", "weight"], a = r.length, o = 0; o < a; ++o) i = r[o], n.hasOwnProperty(i) && (t[i] = n[i])
		},
		update: function (e, t, n) {
			if (e) {
				var o = e.options.layout || {},
					l = i.options.toPadding(o.padding),
					s = l.left,
					d = l.right,
					u = l.top,
					c = l.bottom,
					h = r(e.boxes, "left"),
					p = r(e.boxes, "right"),
					f = r(e.boxes, "top"),
					m = r(e.boxes, "bottom"),
					g = r(e.boxes, "chartArea");
				a(h, !0), a(p, !1), a(f, !0), a(m, !1);
				var _ = t - s - d,
					y = n - u - c,
					v = y / 2,
					M = (t - _ / 2) / (h.length + p.length),
					b = (n - v) / (f.length + m.length),
					w = _,
					L = y,
					D = [];
				i.each(h.concat(p, f, m), function (e) {
					var t, n = e.isHorizontal();
					n ? (t = e.update(e.fullWidth ? _ : w, b), L -= t.height) : (t = e.update(M, L), w -= t.width), D.push({
						horizontal: n,
						minSize: t,
						box: e
					})
				});
				var T = 0,
					k = 0,
					S = 0,
					x = 0;
				i.each(f.concat(m), function (e) {
					if (e.getPadding) {
						var t = e.getPadding();
						T = Math.max(T, t.left), k = Math.max(k, t.right)
					}
				}), i.each(h.concat(p), function (e) {
					if (e.getPadding) {
						var t = e.getPadding();
						S = Math.max(S, t.top), x = Math.max(x, t.bottom)
					}
				});
				var Y = s,
					E = d,
					C = u,
					H = c;
				i.each(h.concat(p), F), i.each(h, function (e) {
					Y += e.width
				}), i.each(p, function (e) {
					E += e.width
				}), i.each(f.concat(m), F), i.each(f, function (e) {
					C += e.height
				}), i.each(m, function (e) {
					H += e.height
				}), i.each(h.concat(p), function (e) {
					var t = i.findNextWhere(D, function (t) {
							return t.box === e
						}),
						n = {
							left: 0,
							right: 0,
							top: C,
							bottom: H
						};
					t && e.update(t.minSize.width, L, n)
				}), Y = s, E = d, C = u, H = c, i.each(h, function (e) {
					Y += e.width
				}), i.each(p, function (e) {
					E += e.width
				}), i.each(f, function (e) {
					C += e.height
				}), i.each(m, function (e) {
					H += e.height
				});
				var P = Math.max(T - Y, 0);
				Y += P, E += Math.max(k - E, 0);
				var O = Math.max(S - C, 0);
				C += O, H += Math.max(x - H, 0);
				var A = n - C - H,
					I = t - Y - E;
				I === w && A === L || (i.each(h, function (e) {
					e.height = A
				}), i.each(p, function (e) {
					e.height = A
				}), i.each(f, function (e) {
					e.fullWidth || (e.width = I)
				}), i.each(m, function (e) {
					e.fullWidth || (e.width = I)
				}), L = A, w = I);
				var R = s + P,
					j = u + O;
				i.each(h.concat(f), N), R += w, j += L, i.each(p, N), i.each(m, N), e.chartArea = {
					left: Y,
					top: C,
					right: Y + w,
					bottom: C + L
				}, i.each(g, function (t) {
					t.left = e.chartArea.left, t.top = e.chartArea.top, t.right = e.chartArea.right, t.bottom = e.chartArea.bottom, t.update(w, L)
				})
			}

			function F(e) {
				var t = i.findNextWhere(D, function (t) {
					return t.box === e
				});
				if (t)
					if (e.isHorizontal()) {
						var n = {
							left: Math.max(Y, T),
							right: Math.max(E, k),
							top: 0,
							bottom: 0
						};
						e.update(e.fullWidth ? _ : w, y / 2, n)
					} else e.update(t.minSize.width, L)
			}

			function N(e) {
				e.isHorizontal() ? (e.left = e.fullWidth ? s : Y, e.right = e.fullWidth ? t - d : Y + w, e.top = j, e.bottom = j + e.height, j = e.bottom) : (e.left = R, e.right = R + e.width, e.top = C, e.bottom = C + L, R = e.right)
			}
		}
	}
}, function (e, t, n) {
	"use strict";
	var i = n(3),
		r = n(6),
		a = n(2),
		o = n(11);

	function l(e) {
		var t, n, i = [];
		for (t = 0, n = e.length; t < n; ++t) i.push(e[t].label);
		return i
	}

	function s(e, t, n) {
		var i = e.getPixelForTick(t);
		return n && (i -= 0 === t ? (e.getPixelForTick(1) - i) / 2 : (i - e.getPixelForTick(t - 1)) / 2), i
	}

	function d(e, t, n) {
		return a.isArray(t) ? a.longestText(e, n, t) : e.measureText(t).width
	}

	function u(e) {
		var t = a.valueOrDefault,
			n = i.global,
			r = t(e.fontSize, n.defaultFontSize),
			o = t(e.fontStyle, n.defaultFontStyle),
			l = t(e.fontFamily, n.defaultFontFamily);
		return {
			size: r,
			style: o,
			family: l,
			font: a.fontString(r, o, l)
		}
	}

	function c(e) {
		return a.options.toLineHeight(a.valueOrDefault(e.lineHeight, 1.2), a.valueOrDefault(e.fontSize, i.global.defaultFontSize))
	}
	i._set("scale", {
		display: !0,
		position: "left",
		offset: !1,
		gridLines: {
			display: !0,
			color: "rgba(0, 0, 0, 0.1)",
			lineWidth: 1,
			drawBorder: !0,
			drawOnChartArea: !0,
			drawTicks: !0,
			tickMarkLength: 10,
			zeroLineWidth: 1,
			zeroLineColor: "rgba(0,0,0,0.25)",
			zeroLineBorderDash: [],
			zeroLineBorderDashOffset: 0,
			offsetGridLines: !1,
			borderDash: [],
			borderDashOffset: 0
		},
		scaleLabel: {
			display: !1,
			labelString: "",
			lineHeight: 1.2,
			padding: {
				top: 4,
				bottom: 4
			}
		},
		ticks: {
			beginAtZero: !1,
			minRotation: 0,
			maxRotation: 50,
			mirror: !1,
			padding: 0,
			reverse: !1,
			display: !0,
			autoSkip: !0,
			autoSkipPadding: 0,
			labelOffset: 0,
			callback: o.formatters.values,
			minor: {},
			major: {}
		}
	}), e.exports = r.extend({
		getPadding: function () {
			return {
				left: this.paddingLeft || 0,
				top: this.paddingTop || 0,
				right: this.paddingRight || 0,
				bottom: this.paddingBottom || 0
			}
		},
		getTicks: function () {
			return this._ticks
		},
		mergeTicksOptions: function () {
			var e = this.options.ticks;
			for (var t in !1 === e.minor && (e.minor = {
					display: !1
				}), !1 === e.major && (e.major = {
					display: !1
				}), e) "major" !== t && "minor" !== t && (void 0 === e.minor[t] && (e.minor[t] = e[t]), void 0 === e.major[t] && (e.major[t] = e[t]))
		},
		beforeUpdate: function () {
			a.callback(this.options.beforeUpdate, [this])
		},
		update: function (e, t, n) {
			var i, r, o, l, s, d, u = this;
			for (u.beforeUpdate(), u.maxWidth = e, u.maxHeight = t, u.margins = a.extend({
					left: 0,
					right: 0,
					top: 0,
					bottom: 0
				}, n), u.longestTextCache = u.longestTextCache || {}, u.beforeSetDimensions(), u.setDimensions(), u.afterSetDimensions(), u.beforeDataLimits(), u.determineDataLimits(), u.afterDataLimits(), u.beforeBuildTicks(), s = u.buildTicks() || [], u.afterBuildTicks(), u.beforeTickToLabelConversion(), o = u.convertTicksToLabels(s) || u.ticks, u.afterTickToLabelConversion(), u.ticks = o, i = 0, r = o.length; i < r; ++i) l = o[i], (d = s[i]) ? d.label = l : s.push(d = {
				label: l,
				major: !1
			});
			return u._ticks = s, u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize
		},
		afterUpdate: function () {
			a.callback(this.options.afterUpdate, [this])
		},
		beforeSetDimensions: function () {
			a.callback(this.options.beforeSetDimensions, [this])
		},
		setDimensions: function () {
			var e = this;
			e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
		},
		afterSetDimensions: function () {
			a.callback(this.options.afterSetDimensions, [this])
		},
		beforeDataLimits: function () {
			a.callback(this.options.beforeDataLimits, [this])
		},
		determineDataLimits: a.noop,
		afterDataLimits: function () {
			a.callback(this.options.afterDataLimits, [this])
		},
		beforeBuildTicks: function () {
			a.callback(this.options.beforeBuildTicks, [this])
		},
		buildTicks: a.noop,
		afterBuildTicks: function () {
			a.callback(this.options.afterBuildTicks, [this])
		},
		beforeTickToLabelConversion: function () {
			a.callback(this.options.beforeTickToLabelConversion, [this])
		},
		convertTicksToLabels: function () {
			var e = this.options.ticks;
			this.ticks = this.ticks.map(e.userCallback || e.callback, this)
		},
		afterTickToLabelConversion: function () {
			a.callback(this.options.afterTickToLabelConversion, [this])
		},
		beforeCalculateTickRotation: function () {
			a.callback(this.options.beforeCalculateTickRotation, [this])
		},
		calculateTickRotation: function () {
			var e = this,
				t = e.ctx,
				n = e.options.ticks,
				i = l(e._ticks),
				r = u(n);
			t.font = r.font;
			var o = n.minRotation || 0;
			if (i.length && e.options.display && e.isHorizontal())
				for (var s, d = a.longestText(t, r.font, i, e.longestTextCache), c = d, h = e.getPixelForTick(1) - e.getPixelForTick(0) - 6; c > h && o < n.maxRotation;) {
					var p = a.toRadians(o);
					if (s = Math.cos(p), Math.sin(p) * d > e.maxHeight) {
						o--;
						break
					}
					o++, c = s * d
				}
			e.labelRotation = o
		},
		afterCalculateTickRotation: function () {
			a.callback(this.options.afterCalculateTickRotation, [this])
		},
		beforeFit: function () {
			a.callback(this.options.beforeFit, [this])
		},
		fit: function () {
			var e = this,
				t = e.minSize = {
					width: 0,
					height: 0
				},
				n = l(e._ticks),
				i = e.options,
				r = i.ticks,
				o = i.scaleLabel,
				s = i.gridLines,
				h = i.display,
				p = e.isHorizontal(),
				f = u(r),
				m = i.gridLines.tickMarkLength;
			if (t.width = p ? e.isFullWidth() ? e.maxWidth - e.margins.left - e.margins.right : e.maxWidth : h && s.drawTicks ? m : 0, t.height = p ? h && s.drawTicks ? m : 0 : e.maxHeight, o.display && h) {
				var g = c(o) + a.options.toPadding(o.padding).height;
				p ? t.height += g : t.width += g
			}
			if (r.display && h) {
				var _ = a.longestText(e.ctx, f.font, n, e.longestTextCache),
					y = a.numberOfLabelLines(n),
					v = .5 * f.size,
					M = e.options.ticks.padding;
				if (p) {
					e.longestLabelWidth = _;
					var b = a.toRadians(e.labelRotation),
						w = Math.cos(b),
						L = Math.sin(b) * _ + f.size * y + v * (y - 1) + v;
					t.height = Math.min(e.maxHeight, t.height + L + M), e.ctx.font = f.font;
					var D = d(e.ctx, n[0], f.font),
						T = d(e.ctx, n[n.length - 1], f.font);
					0 !== e.labelRotation ? (e.paddingLeft = "bottom" === i.position ? w * D + 3 : w * v + 3, e.paddingRight = "bottom" === i.position ? w * v + 3 : w * T + 3) : (e.paddingLeft = D / 2 + 3, e.paddingRight = T / 2 + 3)
				} else r.mirror ? _ = 0 : _ += M + v, t.width = Math.min(e.maxWidth, t.width + _), e.paddingTop = f.size / 2, e.paddingBottom = f.size / 2
			}
			e.handleMargins(), e.width = t.width, e.height = t.height
		},
		handleMargins: function () {
			var e = this;
			e.margins && (e.paddingLeft = Math.max(e.paddingLeft - e.margins.left, 0), e.paddingTop = Math.max(e.paddingTop - e.margins.top, 0), e.paddingRight = Math.max(e.paddingRight - e.margins.right, 0), e.paddingBottom = Math.max(e.paddingBottom - e.margins.bottom, 0))
		},
		afterFit: function () {
			a.callback(this.options.afterFit, [this])
		},
		isHorizontal: function () {
			return "top" === this.options.position || "bottom" === this.options.position
		},
		isFullWidth: function () {
			return this.options.fullWidth
		},
		getRightValue: function (e) {
			if (a.isNullOrUndef(e)) return NaN;
			if ("number" == typeof e && !isFinite(e)) return NaN;
			if (e)
				if (this.isHorizontal()) {
					if (void 0 !== e.x) return this.getRightValue(e.x)
				} else if (void 0 !== e.y) return this.getRightValue(e.y);
			return e
		},
		getLabelForIndex: a.noop,
		getPixelForValue: a.noop,
		getValueForPixel: a.noop,
		getPixelForTick: function (e) {
			var t = this,
				n = t.options.offset;
			if (t.isHorizontal()) {
				var i = (t.width - (t.paddingLeft + t.paddingRight)) / Math.max(t._ticks.length - (n ? 0 : 1), 1),
					r = i * e + t.paddingLeft;
				n && (r += i / 2);
				var a = t.left + Math.round(r);
				return a += t.isFullWidth() ? t.margins.left : 0
			}
			var o = t.height - (t.paddingTop + t.paddingBottom);
			return t.top + e * (o / (t._ticks.length - 1))
		},
		getPixelForDecimal: function (e) {
			var t = this;
			if (t.isHorizontal()) {
				var n = (t.width - (t.paddingLeft + t.paddingRight)) * e + t.paddingLeft,
					i = t.left + Math.round(n);
				return i += t.isFullWidth() ? t.margins.left : 0
			}
			return t.top + e * t.height
		},
		getBasePixel: function () {
			return this.getPixelForValue(this.getBaseValue())
		},
		getBaseValue: function () {
			var e = this.min,
				t = this.max;
			return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
		},
		_autoSkip: function (e) {
			var t, n, i, r, o = this,
				l = o.isHorizontal(),
				s = o.options.ticks.minor,
				d = e.length,
				u = a.toRadians(o.labelRotation),
				c = Math.cos(u),
				h = o.longestLabelWidth * c,
				p = [];
			for (s.maxTicksLimit && (r = s.maxTicksLimit), l && (t = !1, (h + s.autoSkipPadding) * d > o.width - (o.paddingLeft + o.paddingRight) && (t = 1 + Math.floor((h + s.autoSkipPadding) * d / (o.width - (o.paddingLeft + o.paddingRight)))), r && d > r && (t = Math.max(t, Math.floor(d / r)))), n = 0; n < d; n++) i = e[n], (t > 1 && n % t > 0 || n % t == 0 && n + t >= d) && n !== d - 1 && delete i.label, p.push(i);
			return p
		},
		draw: function (e) {
			var t = this,
				n = t.options;
			if (n.display) {
				var r = t.ctx,
					o = i.global,
					l = n.ticks.minor,
					d = n.ticks.major || l,
					h = n.gridLines,
					p = n.scaleLabel,
					f = 0 !== t.labelRotation,
					m = t.isHorizontal(),
					g = l.autoSkip ? t._autoSkip(t.getTicks()) : t.getTicks(),
					_ = a.valueOrDefault(l.fontColor, o.defaultFontColor),
					y = u(l),
					v = a.valueOrDefault(d.fontColor, o.defaultFontColor),
					M = u(d),
					b = h.drawTicks ? h.tickMarkLength : 0,
					w = a.valueOrDefault(p.fontColor, o.defaultFontColor),
					L = u(p),
					D = a.options.toPadding(p.padding),
					T = a.toRadians(t.labelRotation),
					k = [],
					S = t.options.gridLines.lineWidth,
					x = "right" === n.position ? t.left : t.right - S - b,
					Y = "right" === n.position ? t.left + b : t.right,
					E = "bottom" === n.position ? t.top + S : t.bottom - b - S,
					C = "bottom" === n.position ? t.top + S + b : t.bottom + S;
				if (a.each(g, function (i, r) {
						if (!a.isNullOrUndef(i.label)) {
							var d, u, c, p, _, y, v, M, w, L, D, H, P, O, A = i.label;
							r === t.zeroLineIndex && n.offset === h.offsetGridLines ? (d = h.zeroLineWidth, u = h.zeroLineColor, c = h.zeroLineBorderDash, p = h.zeroLineBorderDashOffset) : (d = a.valueAtIndexOrDefault(h.lineWidth, r), u = a.valueAtIndexOrDefault(h.color, r), c = a.valueOrDefault(h.borderDash, o.borderDash), p = a.valueOrDefault(h.borderDashOffset, o.borderDashOffset));
							var I = "middle",
								R = "middle",
								j = l.padding;
							if (m) {
								var F = b + j;
								"bottom" === n.position ? (R = f ? "middle" : "top", I = f ? "right" : "center", O = t.top + F) : (R = f ? "middle" : "bottom", I = f ? "left" : "center", O = t.bottom - F);
								var N = s(t, r, h.offsetGridLines && g.length > 1);
								N < t.left && (u = "rgba(0,0,0,0)"), N += a.aliasPixel(d), P = t.getPixelForTick(r) + l.labelOffset, _ = v = w = D = N, y = E, M = C, L = e.top, H = e.bottom + S
							} else {
								var W, z = "left" === n.position;
								l.mirror ? (I = z ? "left" : "right", W = j) : (I = z ? "right" : "left", W = b + j), P = z ? t.right - W : t.left + W;
								var B = s(t, r, h.offsetGridLines && g.length > 1);
								B < t.top && (u = "rgba(0,0,0,0)"), B += a.aliasPixel(d), O = t.getPixelForTick(r) + l.labelOffset, _ = x, v = Y, w = e.left, D = e.right + S, y = M = L = H = B
							}
							k.push({
								tx1: _,
								ty1: y,
								tx2: v,
								ty2: M,
								x1: w,
								y1: L,
								x2: D,
								y2: H,
								labelX: P,
								labelY: O,
								glWidth: d,
								glColor: u,
								glBorderDash: c,
								glBorderDashOffset: p,
								rotation: -1 * T,
								label: A,
								major: i.major,
								textBaseline: R,
								textAlign: I
							})
						}
					}), a.each(k, function (e) {
						if (h.display && (r.save(), r.lineWidth = e.glWidth, r.strokeStyle = e.glColor, r.setLineDash && (r.setLineDash(e.glBorderDash), r.lineDashOffset = e.glBorderDashOffset), r.beginPath(), h.drawTicks && (r.moveTo(e.tx1, e.ty1), r.lineTo(e.tx2, e.ty2)), h.drawOnChartArea && (r.moveTo(e.x1, e.y1), r.lineTo(e.x2, e.y2)), r.stroke(), r.restore()), l.display) {
							r.save(), r.translate(e.labelX, e.labelY), r.rotate(e.rotation), r.font = e.major ? M.font : y.font, r.fillStyle = e.major ? v : _, r.textBaseline = e.textBaseline, r.textAlign = e.textAlign;
							var n = e.label;
							if (a.isArray(n))
								for (var i = n.length, o = 1.5 * y.size, s = t.isHorizontal() ? 0 : -o * (i - 1) / 2, d = 0; d < i; ++d) r.fillText("" + n[d], 0, s), s += o;
							else r.fillText(n, 0, 0);
							r.restore()
						}
					}), p.display) {
					var H, P, O = 0,
						A = c(p) / 2;
					if (m) H = t.left + (t.right - t.left) / 2, P = "bottom" === n.position ? t.bottom - A - D.bottom : t.top + A + D.top;
					else {
						var I = "left" === n.position;
						H = I ? t.left + A + D.top : t.right - A - D.top, P = t.top + (t.bottom - t.top) / 2, O = I ? -.5 * Math.PI : .5 * Math.PI
					}
					r.save(), r.translate(H, P), r.rotate(O), r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = w, r.font = L.font, r.fillText(p.labelString, 0, 0), r.restore()
				}
				if (h.drawBorder) {
					r.lineWidth = a.valueAtIndexOrDefault(h.lineWidth, 0), r.strokeStyle = a.valueAtIndexOrDefault(h.color, 0);
					var R = t.left,
						j = t.right + S,
						F = t.top,
						N = t.bottom + S,
						W = a.aliasPixel(r.lineWidth);
					m ? (F = N = "top" === n.position ? t.bottom : t.top, F += W, N += W) : (R = j = "left" === n.position ? t.right : t.left, R += W, j += W), r.beginPath(), r.moveTo(R, F), r.lineTo(j, N), r.stroke()
				}
			}
		}
	})
}, function (e, t, n) {
	"use strict";
	var i = n(2);
	e.exports = {
		formatters: {
			values: function (e) {
				return i.isArray(e) ? e : "" + e
			},
			linear: function (e, t, n) {
				var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
				Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
				var a = i.log10(Math.abs(r)),
					o = "";
				if (0 !== e)
					if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
						var l = i.log10(Math.abs(e));
						o = e.toExponential(Math.floor(l) - Math.floor(a))
					} else {
						var s = -1 * Math.floor(a);
						s = Math.max(Math.min(s, 20), 0), o = e.toFixed(s)
					}
				else o = "0";
				return o
			},
			logarithmic: function (e, t, n) {
				var r = e / Math.pow(10, Math.floor(i.log10(e)));
				return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : ""
			}
		}
	}
}, function (e, t, n) {
	"use strict";
	var i, r = {
		noop: function () {},
		uid: (i = 0, function () {
			return i++
		}),
		isNullOrUndef: function (e) {
			return null == e
		},
		isArray: Array.isArray ? Array.isArray : function (e) {
			return "[object Array]" === Object.prototype.toString.call(e)
		},
		isObject: function (e) {
			return null !== e && "[object Object]" === Object.prototype.toString.call(e)
		},
		valueOrDefault: function (e, t) {
			return void 0 === e ? t : e
		},
		valueAtIndexOrDefault: function (e, t, n) {
			return r.valueOrDefault(r.isArray(e) ? e[t] : e, n)
		},
		callback: function (e, t, n) {
			if (e && "function" == typeof e.call) return e.apply(n, t)
		},
		each: function (e, t, n, i) {
			var a, o, l;
			if (r.isArray(e))
				if (o = e.length, i)
					for (a = o - 1; a >= 0; a--) t.call(n, e[a], a);
				else
					for (a = 0; a < o; a++) t.call(n, e[a], a);
			else if (r.isObject(e))
				for (o = (l = Object.keys(e)).length, a = 0; a < o; a++) t.call(n, e[l[a]], l[a])
		},
		arrayEquals: function (e, t) {
			var n, i, a, o;
			if (!e || !t || e.length !== t.length) return !1;
			for (n = 0, i = e.length; n < i; ++n)
				if (a = e[n], o = t[n], a instanceof Array && o instanceof Array) {
					if (!r.arrayEquals(a, o)) return !1
				} else if (a !== o) return !1;
			return !0
		},
		clone: function (e) {
			if (r.isArray(e)) return e.map(r.clone);
			if (r.isObject(e)) {
				for (var t = {}, n = Object.keys(e), i = n.length, a = 0; a < i; ++a) t[n[a]] = r.clone(e[n[a]]);
				return t
			}
			return e
		},
		_merger: function (e, t, n, i) {
			var a = t[e],
				o = n[e];
			r.isObject(a) && r.isObject(o) ? r.merge(a, o, i) : t[e] = r.clone(o)
		},
		_mergerIf: function (e, t, n) {
			var i = t[e],
				a = n[e];
			r.isObject(i) && r.isObject(a) ? r.mergeIf(i, a) : t.hasOwnProperty(e) || (t[e] = r.clone(a))
		},
		merge: function (e, t, n) {
			var i, a, o, l, s, d = r.isArray(t) ? t : [t],
				u = d.length;
			if (!r.isObject(e)) return e;
			for (i = (n = n || {}).merger || r._merger, a = 0; a < u; ++a)
				if (t = d[a], r.isObject(t))
					for (s = 0, l = (o = Object.keys(t)).length; s < l; ++s) i(o[s], e, t, n);
			return e
		},
		mergeIf: function (e, t) {
			return r.merge(e, t, {
				merger: r._mergerIf
			})
		},
		extend: function (e) {
			for (var t = function (t, n) {
					e[n] = t
				}, n = 1, i = arguments.length; n < i; ++n) r.each(arguments[n], t);
			return e
		},
		inherits: function (e) {
			var t = this,
				n = e && e.hasOwnProperty("constructor") ? e.constructor : function () {
					return t.apply(this, arguments)
				},
				i = function () {
					this.constructor = n
				};
			return i.prototype = t.prototype, n.prototype = new i, n.extend = r.inherits, e && r.extend(n.prototype, e), n.__super__ = t.prototype, n
		}
	};
	e.exports = r, r.callCallback = r.callback, r.indexOf = function (e, t, n) {
		return Array.prototype.indexOf.call(e, t, n)
	}, r.getValueOrDefault = r.valueOrDefault, r.getValueAtIndexOrDefault = r.valueAtIndexOrDefault
}, function (e, t, n) {
	"use strict";
	/*!
	 * perfect-scrollbar v1.4.0
	 * (c) 2018 Hyunje Jun
	 * @license MIT
	 */
	function i(e) {
		return getComputedStyle(e)
	}

	function r(e, t) {
		for (var n in t) {
			var i = t[n];
			"number" == typeof i && (i += "px"), e.style[n] = i
		}
		return e
	}

	function a(e) {
		var t = document.createElement("div");
		return t.className = e, t
	}
	var o = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

	function l(e, t) {
		if (!o) throw new Error("No element matching method supported");
		return o.call(e, t)
	}

	function s(e) {
		e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
	}

	function d(e, t) {
		return Array.prototype.filter.call(e.children, function (e) {
			return l(e, t)
		})
	}
	var u = {
			main: "ps",
			element: {
				thumb: function (e) {
					return "ps__thumb-" + e
				},
				rail: function (e) {
					return "ps__rail-" + e
				},
				consuming: "ps__child--consume"
			},
			state: {
				focus: "ps--focus",
				clicking: "ps--clicking",
				active: function (e) {
					return "ps--active-" + e
				},
				scrolling: function (e) {
					return "ps--scrolling-" + e
				}
			}
		},
		c = {
			x: null,
			y: null
		};

	function h(e, t) {
		var n = e.element.classList,
			i = u.state.scrolling(t);
		n.contains(i) ? clearTimeout(c[t]) : n.add(i)
	}

	function p(e, t) {
		c[t] = setTimeout(function () {
			return e.isAlive && e.element.classList.remove(u.state.scrolling(t))
		}, e.settings.scrollingThreshold)
	}
	var f = function (e) {
			this.element = e, this.handlers = {}
		},
		m = {
			isEmpty: {
				configurable: !0
			}
		};
	f.prototype.bind = function (e, t) {
		void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
	}, f.prototype.unbind = function (e, t) {
		var n = this;
		this.handlers[e] = this.handlers[e].filter(function (i) {
			return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
		})
	}, f.prototype.unbindAll = function () {
		for (var e in this.handlers) this.unbind(e)
	}, m.isEmpty.get = function () {
		var e = this;
		return Object.keys(this.handlers).every(function (t) {
			return 0 === e.handlers[t].length
		})
	}, Object.defineProperties(f.prototype, m);
	var g = function () {
		this.eventElements = []
	};

	function _(e) {
		if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
		var t = document.createEvent("CustomEvent");
		return t.initCustomEvent(e, !1, !1, void 0), t
	}
	g.prototype.eventElement = function (e) {
		var t = this.eventElements.filter(function (t) {
			return t.element === e
		})[0];
		return t || (t = new f(e), this.eventElements.push(t)), t
	}, g.prototype.bind = function (e, t, n) {
		this.eventElement(e).bind(t, n)
	}, g.prototype.unbind = function (e, t, n) {
		var i = this.eventElement(e);
		i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
	}, g.prototype.unbindAll = function () {
		this.eventElements.forEach(function (e) {
			return e.unbindAll()
		}), this.eventElements = []
	}, g.prototype.once = function (e, t, n) {
		var i = this.eventElement(e),
			r = function (e) {
				i.unbind(t, r), n(e)
			};
		i.bind(t, r)
	};
	var y = function (e, t, n, i, r) {
		var a;
		if (void 0 === i && (i = !0), void 0 === r && (r = !1), "top" === t) a = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
		else {
			if ("left" !== t) throw new Error("A proper axis should be provided");
			a = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
		}! function (e, t, n, i, r) {
			var a = n[0],
				o = n[1],
				l = n[2],
				s = n[3],
				d = n[4],
				u = n[5];
			void 0 === i && (i = !0);
			void 0 === r && (r = !1);
			var c = e.element;
			e.reach[s] = null, c[l] < 1 && (e.reach[s] = "start");
			c[l] > e[a] - e[o] - 1 && (e.reach[s] = "end");
			t && (c.dispatchEvent(_("ps-scroll-" + s)), t < 0 ? c.dispatchEvent(_("ps-scroll-" + d)) : t > 0 && c.dispatchEvent(_("ps-scroll-" + u)), i && function (e, t) {
				h(e, t), p(e, t)
			}(e, s));
			e.reach[s] && (t || r) && c.dispatchEvent(_("ps-" + s + "-reach-" + e.reach[s]))
		}(e, n, a, i, r)
	};

	function v(e) {
		return parseInt(e, 10) || 0
	}
	var M = {
			isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
			supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
			supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
			isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
		},
		b = function (e) {
			var t = e.element,
				n = Math.floor(t.scrollTop);
			e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (d(t, u.element.rail("x")).forEach(function (e) {
					return s(e)
				}), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (d(t, u.element.rail("y")).forEach(function (e) {
					return s(e)
				}), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = w(e, v(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = v((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = w(e, v(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = v(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
				function (e, t) {
					var n = {
							width: t.railXWidth
						},
						i = Math.floor(e.scrollTop);
					t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : n.left = e.scrollLeft;
					t.isScrollbarXUsingBottom ? n.bottom = t.scrollbarXBottom - i : n.top = t.scrollbarXTop + i;
					r(t.scrollbarXRail, n);
					var a = {
						top: i,
						height: t.railYHeight
					};
					t.isScrollbarYUsingRight ? t.isRtl ? a.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : a.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? a.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : a.left = t.scrollbarYLeft + e.scrollLeft;
					r(t.scrollbarYRail, a), r(t.scrollbarX, {
						left: t.scrollbarXLeft,
						width: t.scrollbarXWidth - t.railBorderXWidth
					}), r(t.scrollbarY, {
						top: t.scrollbarYTop,
						height: t.scrollbarYHeight - t.railBorderYWidth
					})
				}(t, e), e.scrollbarXActive ? t.classList.add(u.state.active("x")) : (t.classList.remove(u.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(u.state.active("y")) : (t.classList.remove(u.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
		};

	function w(e, t) {
		return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
	}

	function L(e, t) {
		var n = t[0],
			i = t[1],
			r = t[2],
			a = t[3],
			o = t[4],
			l = t[5],
			s = t[6],
			d = t[7],
			c = t[8],
			f = e.element,
			m = null,
			g = null,
			_ = null;

		function y(t) {
			f[s] = m + _ * (t[r] - g), h(e, d), b(e), t.stopPropagation(), t.preventDefault()
		}

		function v() {
			p(e, d), e[c].classList.remove(u.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", y)
		}
		e.event.bind(e[o], "mousedown", function (t) {
			m = f[s], g = t[r], _ = (e[i] - e[n]) / (e[a] - e[l]), e.event.bind(e.ownerDocument, "mousemove", y), e.event.once(e.ownerDocument, "mouseup", v), e[c].classList.add(u.state.clicking), t.stopPropagation(), t.preventDefault()
		})
	}
	var D = {
			"click-rail": function (e) {
				e.event.bind(e.scrollbarY, "mousedown", function (e) {
					return e.stopPropagation()
				}), e.event.bind(e.scrollbarYRail, "mousedown", function (t) {
					var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
					e.element.scrollTop += n * e.containerHeight, b(e), t.stopPropagation()
				}), e.event.bind(e.scrollbarX, "mousedown", function (e) {
					return e.stopPropagation()
				}), e.event.bind(e.scrollbarXRail, "mousedown", function (t) {
					var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
					e.element.scrollLeft += n * e.containerWidth, b(e), t.stopPropagation()
				})
			},
			"drag-thumb": function (e) {
				L(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), L(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
			},
			keyboard: function (e) {
				var t = e.element;
				e.event.bind(e.ownerDocument, "keydown", function (n) {
					if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (l(t, ":hover") || l(e.scrollbarX, ":focus") || l(e.scrollbarY, ":focus"))) {
						var i, r = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
						if (r) {
							if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
							else
								for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
							if (l(i = r, "input,[contenteditable]") || l(i, "select,[contenteditable]") || l(i, "textarea,[contenteditable]") || l(i, "button,[contenteditable]")) return
						}
						var a = 0,
							o = 0;
						switch (n.which) {
							case 37:
								a = n.metaKey ? -e.contentWidth : n.altKey ? -e.containerWidth : -30;
								break;
							case 38:
								o = n.metaKey ? e.contentHeight : n.altKey ? e.containerHeight : 30;
								break;
							case 39:
								a = n.metaKey ? e.contentWidth : n.altKey ? e.containerWidth : 30;
								break;
							case 40:
								o = n.metaKey ? -e.contentHeight : n.altKey ? -e.containerHeight : -30;
								break;
							case 32:
								o = n.shiftKey ? e.containerHeight : -e.containerHeight;
								break;
							case 33:
								o = e.containerHeight;
								break;
							case 34:
								o = -e.containerHeight;
								break;
							case 36:
								o = e.contentHeight;
								break;
							case 35:
								o = -e.contentHeight;
								break;
							default:
								return
						}
						e.settings.suppressScrollX && 0 !== a || e.settings.suppressScrollY && 0 !== o || (t.scrollTop -= o, t.scrollLeft += a, b(e), function (n, i) {
							var r = Math.floor(t.scrollTop);
							if (0 === n) {
								if (!e.scrollbarYActive) return !1;
								if (0 === r && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
							}
							var a = t.scrollLeft;
							if (0 === i) {
								if (!e.scrollbarXActive) return !1;
								if (0 === a && n < 0 || a >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
							}
							return !0
						}(a, o) && n.preventDefault())
					}
				})
			},
			wheel: function (e) {
				var t = e.element;

				function n(n) {
					var r = function (e) {
							var t = e.deltaX,
								n = -1 * e.deltaY;
							return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
						}(n),
						a = r[0],
						o = r[1];
					if (! function (e, n, r) {
							if (!M.isWebKit && t.querySelector("select:focus")) return !0;
							if (!t.contains(e)) return !1;
							for (var a = e; a && a !== t;) {
								if (a.classList.contains(u.element.consuming)) return !0;
								var o = i(a);
								if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
									var l = a.scrollHeight - a.clientHeight;
									if (l > 0 && !(0 === a.scrollTop && r > 0 || a.scrollTop === l && r < 0)) return !0;
									var s = a.scrollWidth - a.clientWidth;
									if (s > 0 && !(0 === a.scrollLeft && n < 0 || a.scrollLeft === s && n > 0)) return !0
								}
								a = a.parentNode
							}
							return !1
						}(n.target, a, o)) {
						var l = !1;
						e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (o ? t.scrollTop -= o * e.settings.wheelSpeed : t.scrollTop += a * e.settings.wheelSpeed, l = !0) : e.scrollbarXActive && !e.scrollbarYActive && (a ? t.scrollLeft += a * e.settings.wheelSpeed : t.scrollLeft -= o * e.settings.wheelSpeed, l = !0) : (t.scrollTop -= o * e.settings.wheelSpeed, t.scrollLeft += a * e.settings.wheelSpeed), b(e), (l = l || function (n, i) {
							var r = Math.floor(t.scrollTop),
								a = 0 === t.scrollTop,
								o = r + t.offsetHeight === t.scrollHeight,
								l = 0 === t.scrollLeft,
								s = t.scrollLeft + t.offsetWidth === t.scrollWidth;
							return !(Math.abs(i) > Math.abs(n) ? a || o : l || s) || !e.settings.wheelPropagation
						}(a, o)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault())
					}
				}
				void 0 !== window.onwheel ? e.event.bind(t, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", n)
			},
			touch: function (e) {
				if (M.supportsTouch || M.supportsIePointer) {
					var t = e.element,
						n = {},
						r = 0,
						a = {},
						o = null;
					M.supportsTouch ? (e.event.bind(t, "touchstart", c), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", p)) : M.supportsIePointer && (window.PointerEvent ? (e.event.bind(t, "pointerdown", c), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", p)) : window.MSPointerEvent && (e.event.bind(t, "MSPointerDown", c), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", p)))
				}

				function l(n, i) {
					t.scrollTop -= i, t.scrollLeft -= n, b(e)
				}

				function s(e) {
					return e.targetTouches ? e.targetTouches[0] : e
				}

				function d(e) {
					return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
				}

				function c(e) {
					if (d(e)) {
						var t = s(e);
						n.pageX = t.pageX, n.pageY = t.pageY, r = (new Date).getTime(), null !== o && clearInterval(o)
					}
				}

				function h(o) {
					if (d(o)) {
						var c = s(o),
							h = {
								pageX: c.pageX,
								pageY: c.pageY
							},
							p = h.pageX - n.pageX,
							f = h.pageY - n.pageY;
						if (function (e, n, r) {
								if (!t.contains(e)) return !1;
								for (var a = e; a && a !== t;) {
									if (a.classList.contains(u.element.consuming)) return !0;
									var o = i(a);
									if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
										var l = a.scrollHeight - a.clientHeight;
										if (l > 0 && !(0 === a.scrollTop && r > 0 || a.scrollTop === l && r < 0)) return !0;
										var s = a.scrollLeft - a.clientWidth;
										if (s > 0 && !(0 === a.scrollLeft && n < 0 || a.scrollLeft === s && n > 0)) return !0
									}
									a = a.parentNode
								}
								return !1
							}(o.target, p, f)) return;
						l(p, f), n = h;
						var m = (new Date).getTime(),
							g = m - r;
						g > 0 && (a.x = p / g, a.y = f / g, r = m),
							function (n, i) {
								var r = Math.floor(t.scrollTop),
									a = t.scrollLeft,
									o = Math.abs(n),
									l = Math.abs(i);
								if (l > o) {
									if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && M.isChrome
								} else if (o > l && (n < 0 && a === e.contentWidth - e.containerWidth || n > 0 && 0 === a)) return !0;
								return !0
							}(p, f) && o.preventDefault()
					}
				}

				function p() {
					e.settings.swipeEasing && (clearInterval(o), o = setInterval(function () {
						e.isInitialized ? clearInterval(o) : a.x || a.y ? Math.abs(a.x) < .01 && Math.abs(a.y) < .01 ? clearInterval(o) : (l(30 * a.x, 30 * a.y), a.x *= .8, a.y *= .8) : clearInterval(o)
					}, 10))
				}
			}
		},
		T = function (e, t) {
			var n = this;
			if (void 0 === t && (t = {}), "string" == typeof e && (e = document.querySelector(e)), !e || !e.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
			for (var o in this.element = e, e.classList.add(u.main), this.settings = {
					handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
					maxScrollbarLength: null,
					minScrollbarLength: null,
					scrollingThreshold: 1e3,
					scrollXMarginOffset: 0,
					scrollYMarginOffset: 0,
					suppressScrollX: !1,
					suppressScrollY: !1,
					swipeEasing: !0,
					useBothWheelAxes: !1,
					wheelPropagation: !0,
					wheelSpeed: 1
				}, t) n.settings[o] = t[o];
			this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
			var l, s, d = function () {
					return e.classList.add(u.state.focus)
				},
				c = function () {
					return e.classList.remove(u.state.focus)
				};
			this.isRtl = "rtl" === i(e).direction, this.isNegativeScroll = (s = e.scrollLeft, e.scrollLeft = -1, l = e.scrollLeft < 0, e.scrollLeft = s, l), this.negativeScrollAdjustment = this.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, this.event = new g, this.ownerDocument = e.ownerDocument || document, this.scrollbarXRail = a(u.element.rail("x")), e.appendChild(this.scrollbarXRail), this.scrollbarX = a(u.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", d), this.event.bind(this.scrollbarX, "blur", c), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
			var h = i(this.scrollbarXRail);
			this.scrollbarXBottom = parseInt(h.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = v(h.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = v(h.borderLeftWidth) + v(h.borderRightWidth), r(this.scrollbarXRail, {
				display: "block"
			}), this.railXMarginWidth = v(h.marginLeft) + v(h.marginRight), r(this.scrollbarXRail, {
				display: ""
			}), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = a(u.element.rail("y")), e.appendChild(this.scrollbarYRail), this.scrollbarY = a(u.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", d), this.event.bind(this.scrollbarY, "blur", c), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
			var p = i(this.scrollbarYRail);
			this.scrollbarYRight = parseInt(p.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = v(p.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function (e) {
				var t = i(e);
				return v(t.width) + v(t.paddingLeft) + v(t.paddingRight) + v(t.borderLeftWidth) + v(t.borderRightWidth)
			}(this.scrollbarY) : null, this.railBorderYWidth = v(p.borderTopWidth) + v(p.borderBottomWidth), r(this.scrollbarYRail, {
				display: "block"
			}), this.railYMarginHeight = v(p.marginTop) + v(p.marginBottom), r(this.scrollbarYRail, {
				display: ""
			}), this.railYHeight = null, this.railYRatio = null, this.reach = {
				x: e.scrollLeft <= 0 ? "start" : e.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
				y: e.scrollTop <= 0 ? "start" : e.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
			}, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
				return D[e](n)
			}), this.lastScrollTop = Math.floor(e.scrollTop), this.lastScrollLeft = e.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
				return n.onScroll(e)
			}), b(this)
		};
	T.prototype.update = function () {
		this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, r(this.scrollbarXRail, {
			display: "block"
		}), r(this.scrollbarYRail, {
			display: "block"
		}), this.railXMarginWidth = v(i(this.scrollbarXRail).marginLeft) + v(i(this.scrollbarXRail).marginRight), this.railYMarginHeight = v(i(this.scrollbarYRail).marginTop) + v(i(this.scrollbarYRail).marginBottom), r(this.scrollbarXRail, {
			display: "none"
		}), r(this.scrollbarYRail, {
			display: "none"
		}), b(this), y(this, "top", 0, !1, !0), y(this, "left", 0, !1, !0), r(this.scrollbarXRail, {
			display: ""
		}), r(this.scrollbarYRail, {
			display: ""
		}))
	}, T.prototype.onScroll = function (e) {
		this.isAlive && (b(this), y(this, "top", this.element.scrollTop - this.lastScrollTop), y(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
	}, T.prototype.destroy = function () {
		this.isAlive && (this.event.unbindAll(), s(this.scrollbarX), s(this.scrollbarY), s(this.scrollbarXRail), s(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
	}, T.prototype.removePsClasses = function () {
		this.element.className = this.element.className.split(" ").filter(function (e) {
			return !e.match(/^ps([-_].+|)$/)
		}).join(" ")
	}, t.a = T
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function (e) {
				return /^nm$/i.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				ss: "%d sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			i = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			r = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			a = function (e) {
				return function (t, n, a, o) {
					var l = i(t),
						s = r[e][i(t)];
					return 2 === l && (s = s[n ? 0 : 1]), s.replace(/%d/i, t)
				}
			},
			o = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		e.defineLocale("ar", {
			months: o,
			monthsShort: o,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: a("s"),
				ss: a("s"),
				m: a("m"),
				mm: a("m"),
				h: a("h"),
				hh: a("h"),
				d: a("d"),
				dd: a("d"),
				M: a("M"),
				MM: a("M"),
				y: a("y"),
				yy: a("y")
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ar-dz", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ar-kw", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
				5: "5",
				6: "6",
				7: "7",
				8: "8",
				9: "9",
				0: "0"
			},
			n = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			i = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			r = function (e) {
				return function (t, r, a, o) {
					var l = n(t),
						s = i[e][n(t)];
					return 2 === l && (s = s[r ? 0 : 1]), s.replace(/%d/i, t)
				}
			},
			a = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		e.defineLocale("ar-ly", {
			months: a,
			monthsShort: a,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: r("s"),
				ss: r("s"),
				m: r("m"),
				mm: r("m"),
				h: r("h"),
				hh: r("h"),
				d: r("d"),
				dd: r("d"),
				M: r("M"),
				MM: r("M"),
				y: r("y"),
				yy: r("y")
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			};
		e.defineLocale("ar-sa", {
			months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				ss: "%d ثانية",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			1: "-inci",
			5: "-inci",
			8: "-inci",
			70: "-inci",
			80: "-inci",
			2: "-nci",
			7: "-nci",
			20: "-nci",
			50: "-nci",
			3: "-üncü",
			4: "-üncü",
			100: "-üncü",
			6: "-ncı",
			9: "-uncu",
			10: "-uncu",
			30: "-uncu",
			60: "-ıncı",
			90: "-ıncı"
		};
		e.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
			weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
			weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[gələn həftə] dddd [saat] LT",
				lastDay: "[dünən] LT",
				lastWeek: "[keçən həftə] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s əvvəl",
				s: "birneçə saniyə",
				ss: "%d saniyə",
				m: "bir dəqiqə",
				mm: "%d dəqiqə",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gecə|səhər|gündüz|axşam/,
			isPM: function (e) {
				return /^(gündüz|axşam)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function (e) {
				if (0 === e) return e + "-ıncı";
				var n = e % 10,
					i = e % 100 - n,
					r = e >= 100 ? 100 : null;
				return e + (t[n] || t[i] || t[r])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			var i, r, a = {
				ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
				mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
				hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
				dd: "дзень_дні_дзён",
				MM: "месяц_месяцы_месяцаў",
				yy: "год_гады_гадоў"
			};
			return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (i = +e, r = a[n].split("_"), i % 10 == 1 && i % 100 != 11 ? r[0] : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? r[1] : r[2])
		}
		e.defineLocale("be", {
			months: {
				format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
				standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
			},
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: {
				format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
				standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
			},
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function () {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[У мінулую] dddd [ў] LT";
						case 1:
						case 2:
						case 4:
							return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "дзень",
				dd: t,
				M: "месяц",
				MM: t,
				y: "год",
				yy: t
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function (e) {
				return /^(дня|вечара)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
					case "D":
						return e + "-га";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[В изминалата] dddd [в] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[В изминалия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дни",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("bm", {
			months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
			monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
			weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
			weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
			weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "MMMM [tile] D [san] YYYY",
				LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
				LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
			},
			calendar: {
				sameDay: "[Bi lɛrɛ] LT",
				nextDay: "[Sini lɛrɛ] LT",
				nextWeek: "dddd [don lɛrɛ] LT",
				lastDay: "[Kunu lɛrɛ] LT",
				lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s kɔnɔ",
				past: "a bɛ %s bɔ",
				s: "sanga dama dama",
				ss: "sekondi %d",
				m: "miniti kelen",
				mm: "miniti %d",
				h: "lɛrɛ kelen",
				hh: "lɛrɛ %d",
				d: "tile kelen",
				dd: "tile %d",
				M: "kalo kelen",
				MM: "kalo %d",
				y: "san kelen",
				yy: "san %d"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "১",
				2: "২",
				3: "৩",
				4: "৪",
				5: "৫",
				6: "৬",
				7: "৭",
				8: "৮",
				9: "৯",
				0: "০"
			},
			n = {
				"১": "1",
				"২": "2",
				"৩": "3",
				"৪": "4",
				"৫": "5",
				"৬": "6",
				"৭": "7",
				"৮": "8",
				"৯": "9",
				"০": "0"
			};
		e.defineLocale("bn", {
			months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
			weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm সময়",
				LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কয়েক সেকেন্ড",
				ss: "%d সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function (e) {
				return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "༡",
				2: "༢",
				3: "༣",
				4: "༤",
				5: "༥",
				6: "༦",
				7: "༧",
				8: "༨",
				9: "༩",
				0: "༠"
			},
			n = {
				"༡": "1",
				"༢": "2",
				"༣": "3",
				"༤": "4",
				"༥": "5",
				"༦": "6",
				"༧": "7",
				"༨": "8",
				"༩": "9",
				"༠": "0"
			};
		e.defineLocale("bo", {
			months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
			weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[དི་རིང] LT",
				nextDay: "[སང་ཉིན] LT",
				nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
				lastDay: "[ཁ་སང] LT",
				lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ་",
				past: "%s སྔན་ལ",
				s: "ལམ་སང",
				ss: "%d སྐར་ཆ།",
				m: "སྐར་མ་གཅིག",
				mm: "%d སྐར་མ",
				h: "ཆུ་ཚོད་གཅིག",
				hh: "%d ཆུ་ཚོད",
				d: "ཉིན་གཅིག",
				dd: "%d ཉིན་",
				M: "ཟླ་བ་གཅིག",
				MM: "%d ཟླ་བ",
				y: "ལོ་གཅིག",
				yy: "%d ལོ"
			},
			preparse: function (e) {
				return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			return e + " " + function (e, t) {
				return 2 === t ? function (e) {
					var t = {
						m: "v",
						b: "v",
						d: "z"
					};
					return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
				}(e) : e
			}({
				mm: "munutenn",
				MM: "miz",
				dd: "devezh"
			}[n], e)
		}
		e.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoù",
				ss: "%d eilenn",
				m: "ur vunutenn",
				mm: t,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: t,
				M: "ur miz",
				MM: t,
				y: "ur bloaz",
				yy: function (e) {
					switch (function e(t) {
						return t > 9 ? e(t % 10) : t
					}(e)) {
						case 1:
						case 3:
						case 4:
						case 5:
						case 9:
							return e + " bloaz";
						default:
							return e + " vloaz"
					}
				}
			},
			dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function (e) {
				var t = 1 === e ? "añ" : "vet";
				return e + t
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			var i = e + " ";
			switch (n) {
				case "ss":
					return i += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return i += 1 === e ? "dan" : "dana";
				case "MM":
					return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		e.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ca", {
			months: {
				standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
				format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
				isFormat: /D[oD]?(\s)+MMMM/
			},
			monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [de] YYYY",
				ll: "D MMM YYYY",
				LLL: "D MMMM [de] YYYY [a les] H:mm",
				lll: "D MMM YYYY, H:mm",
				LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
				llll: "ddd D MMM YYYY, H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function () {
					return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function () {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "d'aquí %s",
				past: "fa %s",
				s: "uns segons",
				ss: "%d segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function (e, t) {
				var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
				return "w" !== t && "W" !== t || (n = "a"), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
			n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");

		function i(e) {
			return e > 1 && e < 5 && 1 != ~~(e / 10)
		}

		function r(e, t, n, r) {
			var a = e + " ";
			switch (n) {
				case "s":
					return t || r ? "pár sekund" : "pár sekundami";
				case "ss":
					return t || r ? a + (i(e) ? "sekundy" : "sekund") : a + "sekundami";
				case "m":
					return t ? "minuta" : r ? "minutu" : "minutou";
				case "mm":
					return t || r ? a + (i(e) ? "minuty" : "minut") : a + "minutami";
				case "h":
					return t ? "hodina" : r ? "hodinu" : "hodinou";
				case "hh":
					return t || r ? a + (i(e) ? "hodiny" : "hodin") : a + "hodinami";
				case "d":
					return t || r ? "den" : "dnem";
				case "dd":
					return t || r ? a + (i(e) ? "dny" : "dní") : a + "dny";
				case "M":
					return t || r ? "měsíc" : "měsícem";
				case "MM":
					return t || r ? a + (i(e) ? "měsíce" : "měsíců") : a + "měsíci";
				case "y":
					return t || r ? "rok" : "rokem";
				case "yy":
					return t || r ? a + (i(e) ? "roky" : "let") : a + "lety"
			}
		}
		e.defineLocale("cs", {
			months: t,
			monthsShort: n,
			monthsParse: function (e, t) {
				var n, i = [];
				for (n = 0; n < 12; n++) i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
				return i
			}(t, n),
			shortMonthsParse: function (e) {
				var t, n = [];
				for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
				return n
			}(n),
			longMonthsParse: function (e) {
				var t, n = [];
				for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
				return n
			}(t),
			weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm",
				l: "D. M. YYYY"
			},
			calendar: {
				sameDay: "[dnes v] LT",
				nextDay: "[zítra v] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v neděli v] LT";
						case 1:
						case 2:
							return "[v] dddd [v] LT";
						case 3:
							return "[ve středu v] LT";
						case 4:
							return "[ve čtvrtek v] LT";
						case 5:
							return "[v pátek v] LT";
						case 6:
							return "[v sobotu v] LT"
					}
				},
				lastDay: "[včera v] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulou neděli v] LT";
						case 1:
						case 2:
							return "[minulé] dddd [v] LT";
						case 3:
							return "[minulou středu v] LT";
						case 4:
						case 5:
							return "[minulý] dddd [v] LT";
						case 6:
							return "[minulou sobotu v] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "před %s",
				s: r,
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: r,
				dd: r,
				M: r,
				MM: r,
				y: r,
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
					return e + t
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				ss: "%d ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				ss: "%d eiliad",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function (e) {
				var t = e,
					n = "";
				return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "på dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[i] dddd[s kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				ss: "%d sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? r[n][0] : r[n][1]
		}
		e.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? r[n][0] : r[n][1]
		}
		e.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? r[n][0] : r[n][1]
		}
		e.defineLocale("de-ch", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				ss: "%d Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
			n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
		e.defineLocale("dv", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /މކ|މފ/,
			isPM: function (e) {
				return "މފ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "މކ" : "މފ"
			},
			calendar: {
				sameDay: "[މިއަދު] LT",
				nextDay: "[މާދަމާ] LT",
				nextWeek: "dddd LT",
				lastDay: "[އިއްޔެ] LT",
				lastWeek: "[ފާއިތުވި] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ތެރޭގައި %s",
				past: "ކުރިން %s",
				s: "ސިކުންތުކޮޅެއް",
				ss: "d% ސިކުންތު",
				m: "މިނިޓެއް",
				mm: "މިނިޓު %d",
				h: "ގަޑިއިރެއް",
				hh: "ގަޑިއިރު %d",
				d: "ދުވަހެއް",
				dd: "ދުވަސް %d",
				M: "މަހެއް",
				MM: "މަސް %d",
				y: "އަހަރެއް",
				yy: "އަހަރު %d"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 7,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function (e, t) {
				return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
			},
			isPM: function (e) {
				return "μ" === (e + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 6:
							return "[το προηγούμενο] dddd [{}] LT";
						default:
							return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function (e, t) {
				var n, i = this._calendarEl[e],
					r = t && t.hours();
				return ((n = i) instanceof Function || "[object Function]" === Object.prototype.toString.call(n)) && (i = i.apply(t)), i.replace("{}", r % 12 == 1 ? "στη" : "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				ss: "%d δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			dayOfMonthOrdinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("en-il", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
			weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
			weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
			weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-a de] MMMM, YYYY",
				LLL: "D[-a de] MMMM, YYYY HH:mm",
				LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function (e) {
				return "p" === e.charAt(0).toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "post %s",
				past: "antaŭ %s",
				s: "sekundoj",
				ss: "%d sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			dayOfMonthOrdinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			i = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		e.defineLocale("es", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, i) {
				return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: r,
			monthsShortRegex: r,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: i,
			longMonthsParse: i,
			shortMonthsParse: i,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			i = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
			r = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
		e.defineLocale("es-do", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, i) {
				return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: r,
			monthsShortRegex: r,
			monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
			monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
			monthsParse: i,
			longMonthsParse: i,
			shortMonthsParse: i,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY h:mm A",
				LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
		e.defineLocale("es-us", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, i) {
				return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsParseExact: !0,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "MM/DD/YYYY",
				LL: "MMMM [de] D [de] YYYY",
				LLL: "MMMM [de] D [de] YYYY h:mm A",
				LLLL: "dddd, MMMM [de] D [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
				ss: [e + "sekundi", e + "sekundit"],
				m: ["ühe minuti", "üks minut"],
				mm: [e + " minuti", e + " minutit"],
				h: ["ühe tunni", "tund aega", "üks tund"],
				hh: [e + " tunni", e + " tundi"],
				d: ["ühe päeva", "üks päev"],
				M: ["kuu aja", "kuu aega", "üks kuu"],
				MM: [e + " kuu", e + " kuud"],
				y: ["ühe aasta", "aasta", "üks aasta"],
				yy: [e + " aasta", e + " aastat"]
			};
			return t ? r[n][2] ? r[n][2] : r[n][1] : i ? r[n][0] : r[n][1]
		}
		e.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: "%d päeva",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				ss: "%d segundo",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "۱",
				2: "۲",
				3: "۳",
				4: "۴",
				5: "۵",
				6: "۶",
				7: "۷",
				8: "۸",
				9: "۹",
				0: "۰"
			},
			n = {
				"۱": "1",
				"۲": "2",
				"۳": "3",
				"۴": "4",
				"۵": "5",
				"۶": "6",
				"۷": "7",
				"۸": "8",
				"۹": "9",
				"۰": "0"
			};
		e.defineLocale("fa", {
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /قبل از ظهر|بعد از ظهر/,
			isPM: function (e) {
				return /بعد از ظهر/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
			},
			calendar: {
				sameDay: "[امروز ساعت] LT",
				nextDay: "[فردا ساعت] LT",
				nextWeek: "dddd [ساعت] LT",
				lastDay: "[دیروز ساعت] LT",
				lastWeek: "dddd [پیش] [ساعت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چند ثانیه",
				ss: "ثانیه d%",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/[۰-۹]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			dayOfMonthOrdinalParse: /\d{1,2}م/,
			ordinal: "%dم",
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
			n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

		function i(e, i, r, a) {
			var o = "";
			switch (r) {
				case "s":
					return a ? "muutaman sekunnin" : "muutama sekunti";
				case "ss":
					return a ? "sekunnin" : "sekuntia";
				case "m":
					return a ? "minuutin" : "minuutti";
				case "mm":
					o = a ? "minuutin" : "minuuttia";
					break;
				case "h":
					return a ? "tunnin" : "tunti";
				case "hh":
					o = a ? "tunnin" : "tuntia";
					break;
				case "d":
					return a ? "päivän" : "päivä";
				case "dd":
					o = a ? "päivän" : "päivää";
					break;
				case "M":
					return a ? "kuukauden" : "kuukausi";
				case "MM":
					o = a ? "kuukauden" : "kuukautta";
					break;
				case "y":
					return a ? "vuoden" : "vuosi";
				case "yy":
					o = a ? "vuoden" : "vuotta"
			}
			return o = function (e, i) {
				return e < 10 ? i ? n[e] : t[e] : e
			}(e, a) + " " + o
		}
		e.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta] YYYY",
				LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
				LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY, [klo] HH.mm",
				llll: "ddd, Do MMM YYYY, [klo] HH.mm"
			},
			calendar: {
				sameDay: "[tänään] [klo] LT",
				nextDay: "[huomenna] [klo] LT",
				nextWeek: "dddd [klo] LT",
				lastDay: "[eilen] [klo] LT",
				lastWeek: "[viime] dddd[na] [klo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s päästä",
				past: "%s sitten",
				s: i,
				ss: i,
				m: i,
				mm: i,
				h: i,
				hh: i,
				d: i,
				dd: i,
				M: i,
				MM: i,
				y: i,
				yy: i
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				ss: "%d sekundir",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaði",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
			ordinal: function (e, t) {
				switch (t) {
					case "D":
						return e + (1 === e ? "er" : "");
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
					case "W":
						return e + (1 === e ? "re" : "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function (e, t) {
				switch (t) {
					default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
							case "W":
							return e + (1 === e ? "re" : "e")
				}
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("fr-ch", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd’hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				ss: "%d secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
			ordinal: function (e, t) {
				switch (t) {
					default:
						case "M":
						case "Q":
						case "D":
						case "DDD":
						case "d":
						return e + (1 === e ? "er" : "e");
					case "w":
							case "W":
							return e + (1 === e ? "re" : "e")
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
			n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
		e.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function (e, i) {
				return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsParseExact: !0,
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[hjoed om] LT",
				nextDay: "[moarn om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[juster om] LT",
				lastWeek: "[ôfrûne] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				ss: "%d sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("gd", {
			months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
			monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
			monthsParseExact: !0,
			weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
			weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[An-diugh aig] LT",
				nextDay: "[A-màireach aig] LT",
				nextWeek: "dddd [aig] LT",
				lastDay: "[An-dè aig] LT",
				lastWeek: "dddd [seo chaidh] [aig] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ann an %s",
				past: "bho chionn %s",
				s: "beagan diogan",
				ss: "%d diogan",
				m: "mionaid",
				mm: "%d mionaidean",
				h: "uair",
				hh: "%d uairean",
				d: "latha",
				dd: "%d latha",
				M: "mìos",
				MM: "%d mìosan",
				y: "bliadhna",
				yy: "%d bliadhna"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function (e) {
				var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh";
				return e + t
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("gl", {
			months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
			monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function () {
					return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function () {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function () {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function () {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return 0 === e.indexOf("un") ? "n" + e : "en " + e
				},
				past: "hai %s",
				s: "uns segundos",
				ss: "%d segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				s: ["thodde secondanim", "thodde second"],
				ss: [e + " secondanim", e + " second"],
				m: ["eka mintan", "ek minute"],
				mm: [e + " mintanim", e + " mintam"],
				h: ["eka horan", "ek hor"],
				hh: [e + " horanim", e + " horam"],
				d: ["eka disan", "ek dis"],
				dd: [e + " disanim", e + " dis"],
				M: ["eka mhoinean", "ek mhoino"],
				MM: [e + " mhoineanim", e + " mhoine"],
				y: ["eka vorsan", "ek voros"],
				yy: [e + " vorsanim", e + " vorsam"]
			};
			return t ? r[n][0] : r[n][1]
		}
		e.defineLocale("gom-latn", {
			months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
			monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
			weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
			weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "A h:mm [vazta]",
				LTS: "A h:mm:ss [vazta]",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY A h:mm [vazta]",
				LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
				llll: "ddd, D MMM YYYY, A h:mm [vazta]"
			},
			calendar: {
				sameDay: "[Aiz] LT",
				nextDay: "[Faleam] LT",
				nextWeek: "[Ieta to] dddd[,] LT",
				lastDay: "[Kal] LT",
				lastWeek: "[Fatlo] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s",
				past: "%s adim",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}(er)/,
			ordinal: function (e, t) {
				switch (t) {
					case "D":
						return e + "er";
					default:
					case "M":
					case "Q":
					case "DDD":
					case "d":
					case "w":
					case "W":
						return e
				}
			},
			week: {
				dow: 1,
				doy: 4
			},
			meridiemParse: /rati|sokalli|donparam|sanje/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "૧",
				2: "૨",
				3: "૩",
				4: "૪",
				5: "૫",
				6: "૬",
				7: "૭",
				8: "૮",
				9: "૯",
				0: "૦"
			},
			n = {
				"૧": "1",
				"૨": "2",
				"૩": "3",
				"૪": "4",
				"૫": "5",
				"૬": "6",
				"૭": "7",
				"૮": "8",
				"૯": "9",
				"૦": "0"
			};
		e.defineLocale("gu", {
			months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
			monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
			monthsParseExact: !0,
			weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
			weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
			weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
			longDateFormat: {
				LT: "A h:mm વાગ્યે",
				LTS: "A h:mm:ss વાગ્યે",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm વાગ્યે",
				LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
			},
			calendar: {
				sameDay: "[આજ] LT",
				nextDay: "[કાલે] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ગઇકાલે] LT",
				lastWeek: "[પાછલા] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s મા",
				past: "%s પેહલા",
				s: "અમુક પળો",
				ss: "%d સેકંડ",
				m: "એક મિનિટ",
				mm: "%d મિનિટ",
				h: "એક કલાક",
				hh: "%d કલાક",
				d: "એક દિવસ",
				dd: "%d દિવસ",
				M: "એક મહિનો",
				MM: "%d મહિનો",
				y: "એક વર્ષ",
				yy: "%d વર્ષ"
			},
			preparse: function (e) {
				return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY HH:mm",
				LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				ss: "%d שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function (e) {
					return 2 === e ? "שעתיים" : e + " שעות"
				},
				d: "יום",
				dd: function (e) {
					return 2 === e ? "יומיים" : e + " ימים"
				},
				M: "חודש",
				MM: function (e) {
					return 2 === e ? "חודשיים" : e + " חודשים"
				},
				y: "שנה",
				yy: function (e) {
					return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function (e) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};
		e.defineLocale("hi", {
			months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[कल] LT",
				nextWeek: "dddd, LT",
				lastDay: "[कल] LT",
				lastWeek: "[पिछले] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				ss: "%d सेकंड",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /रात|सुबह|दोपहर|शाम/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			var i = e + " ";
			switch (n) {
				case "ss":
					return i += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return i += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return i += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return i += 1 === e ? "dan" : "dana";
				case "MM":
					return i += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return i += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		e.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

		function n(e, t, n, i) {
			var r = e;
			switch (n) {
				case "s":
					return i || t ? "néhány másodperc" : "néhány másodperce";
				case "ss":
					return r + (i || t) ? " másodperc" : " másodperce";
				case "m":
					return "egy" + (i || t ? " perc" : " perce");
				case "mm":
					return r + (i || t ? " perc" : " perce");
				case "h":
					return "egy" + (i || t ? " óra" : " órája");
				case "hh":
					return r + (i || t ? " óra" : " órája");
				case "d":
					return "egy" + (i || t ? " nap" : " napja");
				case "dd":
					return r + (i || t ? " nap" : " napja");
				case "M":
					return "egy" + (i || t ? " hónap" : " hónapja");
				case "MM":
					return r + (i || t ? " hónap" : " hónapja");
				case "y":
					return "egy" + (i || t ? " év" : " éve");
				case "yy":
					return r + (i || t ? " év" : " éve")
			}
			return ""
		}

		function i(e) {
			return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]"
		}
		e.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
			weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
			weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY. MMMM D.",
				LLL: "YYYY. MMMM D. H:mm",
				LLLL: "YYYY. MMMM D., dddd H:mm"
			},
			meridiemParse: /de|du/i,
			isPM: function (e) {
				return "u" === e.charAt(1).toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
			},
			calendar: {
				sameDay: "[ma] LT[-kor]",
				nextDay: "[holnap] LT[-kor]",
				nextWeek: function () {
					return i.call(this, !0)
				},
				lastDay: "[tegnap] LT[-kor]",
				lastWeek: function () {
					return i.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("hy-am", {
			months: {
				format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
				standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
			},
			monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
			weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., HH:mm",
				LLLL: "dddd, D MMMM YYYY թ., HH:mm"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function () {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function () {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				ss: "%d վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function (e) {
				return /^(ցերեկվա|երեկոյան)$/.test(e)
			},
			meridiem: function (e) {
				return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
			},
			dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function (e, t) {
				switch (t) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === e ? e + "-ին" : e + "-րդ";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				ss: "%d detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e) {
			return e % 100 == 11 || e % 10 != 1
		}

		function n(e, n, i, r) {
			var a = e + " ";
			switch (i) {
				case "s":
					return n || r ? "nokkrar sekúndur" : "nokkrum sekúndum";
				case "ss":
					return t(e) ? a + (n || r ? "sekúndur" : "sekúndum") : a + "sekúnda";
				case "m":
					return n ? "mínúta" : "mínútu";
				case "mm":
					return t(e) ? a + (n || r ? "mínútur" : "mínútum") : n ? a + "mínúta" : a + "mínútu";
				case "hh":
					return t(e) ? a + (n || r ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
				case "d":
					return n ? "dagur" : r ? "dag" : "degi";
				case "dd":
					return t(e) ? n ? a + "dagar" : a + (r ? "daga" : "dögum") : n ? a + "dagur" : a + (r ? "dag" : "degi");
				case "M":
					return n ? "mánuður" : r ? "mánuð" : "mánuði";
				case "MM":
					return t(e) ? n ? a + "mánuðir" : a + (r ? "mánuði" : "mánuðum") : n ? a + "mánuður" : a + (r ? "mánuð" : "mánuði");
				case "y":
					return n || r ? "ár" : "ári";
				case "yy":
					return t(e) ? a + (n || r ? "ár" : "árum") : a + (n || r ? "ár" : "ári")
			}
		}
		e.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: n,
				ss: n,
				m: n,
				mm: n,
				h: "klukkustund",
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
			weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
			weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
				},
				past: "%s fa",
				s: "alcuni secondi",
				ss: "%d secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ja", {
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日 dddd HH:mm",
				l: "YYYY/MM/DD",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日(ddd) HH:mm"
			},
			meridiemParse: /午前|午後/i,
			isPM: function (e) {
				return "午後" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "午前" : "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: function (e) {
					return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT"
				},
				lastDay: "[昨日] LT",
				lastWeek: function (e) {
					return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT"
				},
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}日/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				ss: "%d秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				ss: "%d detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ka", {
			months: {
				standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
				format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
			},
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: {
				standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
				isFormat: /(წინა|შემდეგ)/
			},
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
				},
				past: function (e) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
				},
				s: "რამდენიმე წამი",
				ss: "%d წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function (e) {
				return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			0: "-ші",
			1: "-ші",
			2: "-ші",
			3: "-ші",
			4: "-ші",
			5: "-ші",
			6: "-шы",
			7: "-ші",
			8: "-ші",
			9: "-шы",
			10: "-шы",
			20: "-шы",
			30: "-шы",
			40: "-шы",
			50: "-ші",
			60: "-шы",
			70: "-ші",
			80: "-ші",
			90: "-шы",
			100: "-ші"
		};
		e.defineLocale("kk", {
			months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
			monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
			weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
			weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
			weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгін сағат] LT",
				nextDay: "[Ертең сағат] LT",
				nextWeek: "dddd [сағат] LT",
				lastDay: "[Кеше сағат] LT",
				lastWeek: "[Өткен аптаның] dddd [сағат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ішінде",
				past: "%s бұрын",
				s: "бірнеше секунд",
				ss: "%d секунд",
				m: "бір минут",
				mm: "%d минут",
				h: "бір сағат",
				hh: "%d сағат",
				d: "бір күн",
				dd: "%d күн",
				M: "бір ай",
				MM: "%d ай",
				y: "бір жыл",
				yy: "%d жыл"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
			ordinal: function (e) {
				var n = e % 10,
					i = e >= 100 ? 100 : null;
				return e + (t[e] || t[n] || t[i])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "១",
				2: "២",
				3: "៣",
				4: "៤",
				5: "៥",
				6: "៦",
				7: "៧",
				8: "៨",
				9: "៩",
				0: "០"
			},
			n = {
				"១": "1",
				"២": "2",
				"៣": "3",
				"៤": "4",
				"៥": "5",
				"៦": "6",
				"៧": "7",
				"៨": "8",
				"៩": "9",
				"០": "0"
			};
		e.defineLocale("km", {
			months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
			weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /ព្រឹក|ល្ងាច/,
			isPM: function (e) {
				return "ល្ងាច" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ព្រឹក" : "ល្ងាច"
			},
			calendar: {
				sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
				nextDay: "[ស្អែក ម៉ោង] LT",
				nextWeek: "dddd [ម៉ោង] LT",
				lastDay: "[ម្សិលមិញ ម៉ោង] LT",
				lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sទៀត",
				past: "%sមុន",
				s: "ប៉ុន្មានវិនាទី",
				ss: "%d វិនាទី",
				m: "មួយនាទី",
				mm: "%d នាទី",
				h: "មួយម៉ោង",
				hh: "%d ម៉ោង",
				d: "មួយថ្ងៃ",
				dd: "%d ថ្ងៃ",
				M: "មួយខែ",
				MM: "%d ខែ",
				y: "មួយឆ្នាំ",
				yy: "%d ឆ្នាំ"
			},
			dayOfMonthOrdinalParse: /ទី\d{1,2}/,
			ordinal: "ទី%d",
			preparse: function (e) {
				return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "೧",
				2: "೨",
				3: "೩",
				4: "೪",
				5: "೫",
				6: "೬",
				7: "೭",
				8: "೮",
				9: "೯",
				0: "೦"
			},
			n = {
				"೧": "1",
				"೨": "2",
				"೩": "3",
				"೪": "4",
				"೫": "5",
				"೬": "6",
				"೭": "7",
				"೮": "8",
				"೯": "9",
				"೦": "0"
			};
		e.defineLocale("kn", {
			months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
			monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
			monthsParseExact: !0,
			weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
			weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
			weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[ಇಂದು] LT",
				nextDay: "[ನಾಳೆ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ನಿನ್ನೆ] LT",
				lastWeek: "[ಕೊನೆಯ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ನಂತರ",
				past: "%s ಹಿಂದೆ",
				s: "ಕೆಲವು ಕ್ಷಣಗಳು",
				ss: "%d ಸೆಕೆಂಡುಗಳು",
				m: "ಒಂದು ನಿಮಿಷ",
				mm: "%d ನಿಮಿಷ",
				h: "ಒಂದು ಗಂಟೆ",
				hh: "%d ಗಂಟೆ",
				d: "ಒಂದು ದಿನ",
				dd: "%d ದಿನ",
				M: "ಒಂದು ತಿಂಗಳು",
				MM: "%d ತಿಂಗಳು",
				y: "ಒಂದು ವರ್ಷ",
				yy: "%d ವರ್ಷ"
			},
			preparse: function (e) {
				return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
			ordinal: function (e) {
				return e + "ನೇ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h:mm",
				LLLL: "YYYY년 MMMM D일 dddd A h:mm",
				l: "YYYY.MM.DD.",
				ll: "YYYY년 MMMM D일",
				lll: "YYYY년 MMMM D일 A h:mm",
				llll: "YYYY년 MMMM D일 dddd A h:mm"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				ss: "%d초",
				m: "1분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "일";
					case "M":
						return e + "월";
					case "w":
					case "W":
						return e + "주";
					default:
						return e
				}
			},
			meridiemParse: /오전|오후/,
			isPM: function (e) {
				return "오후" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "오전" : "오후"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			i = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
		e.defineLocale("ku", {
			months: i,
			monthsShort: i,
			weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
			weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /ئێواره‌|به‌یانی/,
			isPM: function (e) {
				return /ئێواره‌/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "به‌یانی" : "ئێواره‌"
			},
			calendar: {
				sameDay: "[ئه‌مرۆ كاتژمێر] LT",
				nextDay: "[به‌یانی كاتژمێر] LT",
				nextWeek: "dddd [كاتژمێر] LT",
				lastDay: "[دوێنێ كاتژمێر] LT",
				lastWeek: "dddd [كاتژمێر] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "له‌ %s",
				past: "%s",
				s: "چه‌ند چركه‌یه‌ك",
				ss: "چركه‌ %d",
				m: "یه‌ك خوله‌ك",
				mm: "%d خوله‌ك",
				h: "یه‌ك كاتژمێر",
				hh: "%d كاتژمێر",
				d: "یه‌ك ڕۆژ",
				dd: "%d ڕۆژ",
				M: "یه‌ك مانگ",
				MM: "%d مانگ",
				y: "یه‌ك ساڵ",
				yy: "%d ساڵ"
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			0: "-чү",
			1: "-чи",
			2: "-чи",
			3: "-чү",
			4: "-чү",
			5: "-чи",
			6: "-чы",
			7: "-чи",
			8: "-чи",
			9: "-чу",
			10: "-чу",
			20: "-чы",
			30: "-чу",
			40: "-чы",
			50: "-чү",
			60: "-чы",
			70: "-чи",
			80: "-чи",
			90: "-чу",
			100: "-чү"
		};
		e.defineLocale("ky", {
			months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
			weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
			weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгүн саат] LT",
				nextDay: "[Эртең саат] LT",
				nextWeek: "dddd [саат] LT",
				lastDay: "[Кечээ саат] LT",
				lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ичинде",
				past: "%s мурун",
				s: "бирнече секунд",
				ss: "%d секунд",
				m: "бир мүнөт",
				mm: "%d мүнөт",
				h: "бир саат",
				hh: "%d саат",
				d: "бир күн",
				dd: "%d күн",
				M: "бир ай",
				MM: "%d ай",
				y: "бир жыл",
				yy: "%d жыл"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
			ordinal: function (e) {
				var n = e % 10,
					i = e >= 100 ? 100 : null;
				return e + (t[e] || t[n] || t[i])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				m: ["eng Minutt", "enger Minutt"],
				h: ["eng Stonn", "enger Stonn"],
				d: ["een Dag", "engem Dag"],
				M: ["ee Mount", "engem Mount"],
				y: ["ee Joer", "engem Joer"]
			};
			return t ? r[n][0] : r[n][1]
		}

		function n(e) {
			if (e = parseInt(e, 10), isNaN(e)) return !1;
			if (e < 0) return !0;
			if (e < 10) return 4 <= e && e <= 7;
			if (e < 100) {
				var t = e % 10,
					i = e / 10;
				return n(0 === t ? i : t)
			}
			if (e < 1e4) {
				for (; e >= 10;) e /= 10;
				return n(e)
			}
			return n(e /= 1e3)
		}
		e.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: function (e) {
					return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
				},
				past: function (e) {
					return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
				},
				s: "e puer Sekonnen",
				ss: "%d Sekonnen",
				m: t,
				mm: "%d Minutten",
				h: t,
				hh: "%d Stonnen",
				d: t,
				dd: "%d Deeg",
				M: t,
				MM: "%d Méint",
				y: t,
				yy: "%d Joer"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("lo", {
			months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "ວັນdddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
			isPM: function (e) {
				return "ຕອນແລງ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
			},
			calendar: {
				sameDay: "[ມື້ນີ້ເວລາ] LT",
				nextDay: "[ມື້ອື່ນເວລາ] LT",
				nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
				lastDay: "[ມື້ວານນີ້ເວລາ] LT",
				lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ອີກ %s",
				past: "%sຜ່ານມາ",
				s: "ບໍ່ເທົ່າໃດວິນາທີ",
				ss: "%d ວິນາທີ",
				m: "1 ນາທີ",
				mm: "%d ນາທີ",
				h: "1 ຊົ່ວໂມງ",
				hh: "%d ຊົ່ວໂມງ",
				d: "1 ມື້",
				dd: "%d ມື້",
				M: "1 ເດືອນ",
				MM: "%d ເດືອນ",
				y: "1 ປີ",
				yy: "%d ປີ"
			},
			dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
			ordinal: function (e) {
				return "ທີ່" + e
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			ss: "sekundė_sekundžių_sekundes",
			m: "minutė_minutės_minutę",
			mm: "minutės_minučių_minutes",
			h: "valanda_valandos_valandą",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dieną",
			dd: "dienos_dienų_dienas",
			M: "mėnuo_mėnesio_mėnesį",
			MM: "mėnesiai_mėnesių_mėnesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		};

		function n(e, t, n, i) {
			return t ? r(n)[0] : i ? r(n)[1] : r(n)[2]
		}

		function i(e) {
			return e % 10 == 0 || e > 10 && e < 20
		}

		function r(e) {
			return t[e].split("_")
		}

		function a(e, t, a, o) {
			var l = e + " ";
			return 1 === e ? l + n(0, t, a[0], o) : t ? l + (i(e) ? r(a)[1] : r(a)[0]) : o ? l + r(a)[1] : l + (i(e) ? r(a)[1] : r(a)[2])
		}
		e.defineLocale("lt", {
			months: {
				format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
				standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
				isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
			},
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: {
				format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
				standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
				isFormat: /dddd HH:mm/
			},
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY [m.] MMMM D [d.]",
				LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY [m.] MMMM D [d.]",
				lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
			},
			calendar: {
				sameDay: "[Šiandien] LT",
				nextDay: "[Rytoj] LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar] LT",
				lastWeek: "[Praėjusį] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po %s",
				past: "prieš %s",
				s: function (e, t, n, i) {
					return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
				},
				ss: a,
				m: n,
				mm: a,
				h: n,
				hh: a,
				d: n,
				dd: a,
				M: n,
				MM: a,
				y: n,
				yy: a
			},
			dayOfMonthOrdinalParse: /\d{1,2}-oji/,
			ordinal: function (e) {
				return e + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
			m: "minūtes_minūtēm_minūte_minūtes".split("_"),
			mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		};

		function n(e, t, n) {
			return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
		}

		function i(e, i, r) {
			return e + " " + n(t[r], e, i)
		}

		function r(e, i, r) {
			return n(t[r], e, i)
		}
		e.defineLocale("lv", {
			months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
			weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY. [gada] D. MMMM",
				LLL: "YYYY. [gada] D. MMMM, HH:mm",
				LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
			},
			calendar: {
				sameDay: "[Šodien pulksten] LT",
				nextDay: "[Rīt pulksten] LT",
				nextWeek: "dddd [pulksten] LT",
				lastDay: "[Vakar pulksten] LT",
				lastWeek: "[Pagājušā] dddd [pulksten] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "pēc %s",
				past: "pirms %s",
				s: function (e, t) {
					return t ? "dažas sekundes" : "dažām sekundēm"
				},
				ss: i,
				m: r,
				mm: i,
				h: r,
				hh: i,
				d: r,
				dd: i,
				M: r,
				MM: i,
				y: r,
				yy: i
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			words: {
				ss: ["sekund", "sekunda", "sekundi"],
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, i) {
				var r = t.words[i];
				return 1 === i.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
			}
		};
		e.defineLocale("me", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sjutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "nekoliko sekundi",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mjesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("mi", {
			months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
			monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
			monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
			weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
			weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [i] HH:mm",
				LLLL: "dddd, D MMMM YYYY [i] HH:mm"
			},
			calendar: {
				sameDay: "[i teie mahana, i] LT",
				nextDay: "[apopo i] LT",
				nextWeek: "dddd [i] LT",
				lastDay: "[inanahi i] LT",
				lastWeek: "dddd [whakamutunga i] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "i roto i %s",
				past: "%s i mua",
				s: "te hēkona ruarua",
				ss: "%d hēkona",
				m: "he meneti",
				mm: "%d meneti",
				h: "te haora",
				hh: "%d haora",
				d: "he ra",
				dd: "%d ra",
				M: "he marama",
				MM: "%d marama",
				y: "he tau",
				yy: "%d tau"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "[Во] dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Изминатата] dddd [во] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "после %s",
				past: "пред %s",
				s: "неколку секунди",
				ss: "%d секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				M: "месец",
				MM: "%d месеци",
				y: "година",
				yy: "%d години"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			monthsParseExact: !0,
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -നു",
				LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				ss: "%d സെക്കൻഡ്",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			switch (n) {
				case "s":
					return t ? "хэдхэн секунд" : "хэдхэн секундын";
				case "ss":
					return e + (t ? " секунд" : " секундын");
				case "m":
				case "mm":
					return e + (t ? " минут" : " минутын");
				case "h":
				case "hh":
					return e + (t ? " цаг" : " цагийн");
				case "d":
				case "dd":
					return e + (t ? " өдөр" : " өдрийн");
				case "M":
				case "MM":
					return e + (t ? " сар" : " сарын");
				case "y":
				case "yy":
					return e + (t ? " жил" : " жилийн");
				default:
					return e
			}
		}
		e.defineLocale("mn", {
			months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
			monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
			monthsParseExact: !0,
			weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
			weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
			weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY оны MMMMын D",
				LLL: "YYYY оны MMMMын D HH:mm",
				LLLL: "dddd, YYYY оны MMMMын D HH:mm"
			},
			meridiemParse: /ҮӨ|ҮХ/i,
			isPM: function (e) {
				return "ҮХ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ҮӨ" : "ҮХ"
			},
			calendar: {
				sameDay: "[Өнөөдөр] LT",
				nextDay: "[Маргааш] LT",
				nextWeek: "[Ирэх] dddd LT",
				lastDay: "[Өчигдөр] LT",
				lastWeek: "[Өнгөрсөн] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s дараа",
				past: "%s өмнө",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + " өдөр";
					default:
						return e
				}
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};

		function i(e, t, n, i) {
			var r = "";
			if (t) switch (n) {
				case "s":
					r = "काही सेकंद";
					break;
				case "ss":
					r = "%d सेकंद";
					break;
				case "m":
					r = "एक मिनिट";
					break;
				case "mm":
					r = "%d मिनिटे";
					break;
				case "h":
					r = "एक तास";
					break;
				case "hh":
					r = "%d तास";
					break;
				case "d":
					r = "एक दिवस";
					break;
				case "dd":
					r = "%d दिवस";
					break;
				case "M":
					r = "एक महिना";
					break;
				case "MM":
					r = "%d महिने";
					break;
				case "y":
					r = "एक वर्ष";
					break;
				case "yy":
					r = "%d वर्षे"
			} else switch (n) {
				case "s":
					r = "काही सेकंदां";
					break;
				case "ss":
					r = "%d सेकंदां";
					break;
				case "m":
					r = "एका मिनिटा";
					break;
				case "mm":
					r = "%d मिनिटां";
					break;
				case "h":
					r = "एका तासा";
					break;
				case "hh":
					r = "%d तासां";
					break;
				case "d":
					r = "एका दिवसा";
					break;
				case "dd":
					r = "%d दिवसां";
					break;
				case "M":
					r = "एका महिन्या";
					break;
				case "MM":
					r = "%d महिन्यां";
					break;
				case "y":
					r = "एका वर्षा";
					break;
				case "yy":
					r = "%d वर्षां"
			}
			return r.replace(/%d/i, e)
		}
		e.defineLocale("mr", {
			months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
			monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm वाजता",
				LTS: "A h:mm:ss वाजता",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm वाजता",
				LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[उद्या] LT",
				nextWeek: "dddd, LT",
				lastDay: "[काल] LT",
				lastWeek: "[मागील] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमध्ये",
				past: "%sपूर्वी",
				s: i,
				ss: i,
				m: i,
				mm: i,
				h: i,
				hh: i,
				d: i,
				dd: i,
				M: i,
				MM: i,
				y: i,
				yy: i
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				ss: "%d saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("mt", {
			months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
			monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
			weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
			weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
			weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Illum fil-]LT",
				nextDay: "[Għada fil-]LT",
				nextWeek: "dddd [fil-]LT",
				lastDay: "[Il-bieraħ fil-]LT",
				lastWeek: "dddd [li għadda] [fil-]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "f’ %s",
				past: "%s ilu",
				s: "ftit sekondi",
				ss: "%d sekondi",
				m: "minuta",
				mm: "%d minuti",
				h: "siegħa",
				hh: "%d siegħat",
				d: "ġurnata",
				dd: "%d ġranet",
				M: "xahar",
				MM: "%d xhur",
				y: "sena",
				yy: "%d sni"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "၁",
				2: "၂",
				3: "၃",
				4: "၄",
				5: "၅",
				6: "၆",
				7: "၇",
				8: "၈",
				9: "၉",
				0: "၀"
			},
			n = {
				"၁": "1",
				"၂": "2",
				"၃": "3",
				"၄": "4",
				"၅": "5",
				"၆": "6",
				"၇": "7",
				"၈": "8",
				"၉": "9",
				"၀": "0"
			};
		e.defineLocale("my", {
			months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
			monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
			weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
			weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ယနေ.] LT [မှာ]",
				nextDay: "[မနက်ဖြန်] LT [မှာ]",
				nextWeek: "dddd LT [မှာ]",
				lastDay: "[မနေ.က] LT [မှာ]",
				lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လာမည့် %s မှာ",
				past: "လွန်ခဲ့သော %s က",
				s: "စက္ကန်.အနည်းငယ်",
				ss: "%d စက္ကန့်",
				m: "တစ်မိနစ်",
				mm: "%d မိနစ်",
				h: "တစ်နာရီ",
				hh: "%d နာရီ",
				d: "တစ်ရက်",
				dd: "%d ရက်",
				M: "တစ်လ",
				MM: "%d လ",
				y: "တစ်နှစ်",
				yy: "%d နှစ်"
			},
			preparse: function (e) {
				return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				ss: "%d sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};
		e.defineLocale("ne", {
			months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
			monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
			monthsParseExact: !0,
			weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
			weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
			weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "Aको h:mm बजे",
				LTS: "Aको h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, Aको h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[भोलि] LT",
				nextWeek: "[आउँदो] dddd[,] LT",
				lastDay: "[हिजो] LT",
				lastWeek: "[गएको] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमा",
				past: "%s अगाडि",
				s: "केही क्षण",
				ss: "%d सेकेण्ड",
				m: "एक मिनेट",
				mm: "%d मिनेट",
				h: "एक घण्टा",
				hh: "%d घण्टा",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महिना",
				MM: "%d महिना",
				y: "एक बर्ष",
				yy: "%d बर्ष"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			i = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		e.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (e, i) {
				return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: r,
			monthsShortRegex: r,
			monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: i,
			longMonthsParse: i,
			shortMonthsParse: i,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				ss: "%d seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			i = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			r = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		e.defineLocale("nl-be", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (e, i) {
				return e ? /-MMM-/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsRegex: r,
			monthsShortRegex: r,
			monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: i,
			longMonthsParse: i,
			shortMonthsParse: i,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				ss: "%d seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				ss: "%d sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "੧",
				2: "੨",
				3: "੩",
				4: "੪",
				5: "੫",
				6: "੬",
				7: "੭",
				8: "੮",
				9: "੯",
				0: "੦"
			},
			n = {
				"੧": "1",
				"੨": "2",
				"੩": "3",
				"੪": "4",
				"੫": "5",
				"੬": "6",
				"੭": "7",
				"੮": "8",
				"੯": "9",
				"੦": "0"
			};
		e.defineLocale("pa-in", {
			months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
			weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			longDateFormat: {
				LT: "A h:mm ਵਜੇ",
				LTS: "A h:mm:ss ਵਜੇ",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
				LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
			},
			calendar: {
				sameDay: "[ਅਜ] LT",
				nextDay: "[ਕਲ] LT",
				nextWeek: "[ਅਗਲਾ] dddd, LT",
				lastDay: "[ਕਲ] LT",
				lastWeek: "[ਪਿਛਲੇ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ਵਿੱਚ",
				past: "%s ਪਿਛਲੇ",
				s: "ਕੁਝ ਸਕਿੰਟ",
				ss: "%d ਸਕਿੰਟ",
				m: "ਇਕ ਮਿੰਟ",
				mm: "%d ਮਿੰਟ",
				h: "ਇੱਕ ਘੰਟਾ",
				hh: "%d ਘੰਟੇ",
				d: "ਇੱਕ ਦਿਨ",
				dd: "%d ਦਿਨ",
				M: "ਇੱਕ ਮਹੀਨਾ",
				MM: "%d ਮਹੀਨੇ",
				y: "ਇੱਕ ਸਾਲ",
				yy: "%d ਸਾਲ"
			},
			preparse: function (e) {
				return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
			n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

		function i(e) {
			return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
		}

		function r(e, t, n) {
			var r = e + " ";
			switch (n) {
				case "ss":
					return r + (i(e) ? "sekundy" : "sekund");
				case "m":
					return t ? "minuta" : "minutę";
				case "mm":
					return r + (i(e) ? "minuty" : "minut");
				case "h":
					return t ? "godzina" : "godzinę";
				case "hh":
					return r + (i(e) ? "godziny" : "godzin");
				case "MM":
					return r + (i(e) ? "miesiące" : "miesięcy");
				case "yy":
					return r + (i(e) ? "lata" : "lat")
			}
		}
		e.defineLocale("pl", {
			months: function (e, i) {
				return e ? "" === i ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(i) ? n[e.month()] : t[e.month()] : t
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Dziś o] LT",
				nextDay: "[Jutro o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W niedzielę o] LT";
						case 2:
							return "[We wtorek o] LT";
						case 3:
							return "[W środę o] LT";
						case 6:
							return "[W sobotę o] LT";
						default:
							return "[W] dddd [o] LT"
					}
				},
				lastDay: "[Wczoraj o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W zeszłą niedzielę o] LT";
						case 3:
							return "[W zeszłą środę o] LT";
						case 6:
							return "[W zeszłą sobotę o] LT";
						default:
							return "[W zeszły] dddd [o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: "1 dzień",
				dd: "%d dni",
				M: "miesiąc",
				MM: r,
				y: "rok",
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("pt", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("pt-br", {
			months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
			monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "poucos segundos",
				ss: "%d segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			dayOfMonthOrdinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			var i = " ";
			return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (i = " de "), e + i + {
				ss: "secunde",
				mm: "minute",
				hh: "ore",
				dd: "zile",
				MM: "luni",
				yy: "ani"
			}[n]
		}
		e.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				ss: t,
				m: "un minut",
				mm: t,
				h: "o oră",
				hh: t,
				d: "o zi",
				dd: t,
				M: "o lună",
				MM: t,
				y: "un an",
				yy: t
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			var i, r, a = {
				ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
				mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			};
			return "m" === n ? t ? "минута" : "минуту" : e + " " + (i = +e, r = a[n].split("_"), i % 10 == 1 && i % 100 != 11 ? r[0] : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? r[1] : r[2])
		}
		var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
		e.defineLocale("ru", {
			months: {
				format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
				standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
			},
			monthsShort: {
				format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
				standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
			},
			weekdays: {
				standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
				format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
				isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
			},
			weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			monthsParse: n,
			longMonthsParse: n,
			shortMonthsParse: n,
			monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
			monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., H:mm",
				LLLL: "dddd, D MMMM YYYY г., H:mm"
			},
			calendar: {
				sameDay: "[Сегодня, в] LT",
				nextDay: "[Завтра, в] LT",
				lastDay: "[Вчера, в] LT",
				nextWeek: function (e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
					switch (this.day()) {
						case 0:
							return "[В следующее] dddd, [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В следующий] dddd, [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В следующую] dddd, [в] LT"
					}
				},
				lastWeek: function (e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT";
					switch (this.day()) {
						case 0:
							return "[В прошлое] dddd, [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В прошлый] dddd, [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В прошлую] dddd, [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				ss: t,
				m: t,
				mm: t,
				h: "час",
				hh: t,
				d: "день",
				dd: t,
				M: "месяц",
				MM: t,
				y: "год",
				yy: t
			},
			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function (e) {
				return /^(дня|вечера)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
						return e + "-й";
					case "D":
						return e + "-го";
					case "w":
					case "W":
						return e + "-я";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
			n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
		e.defineLocale("sd", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd، D MMMM YYYY HH:mm"
			},
			meridiemParse: /صبح|شام/,
			isPM: function (e) {
				return "شام" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "صبح" : "شام"
			},
			calendar: {
				sameDay: "[اڄ] LT",
				nextDay: "[سڀاڻي] LT",
				nextWeek: "dddd [اڳين هفتي تي] LT",
				lastDay: "[ڪالهه] LT",
				lastWeek: "[گزريل هفتي] dddd [تي] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s پوء",
				past: "%s اڳ",
				s: "چند سيڪنڊ",
				ss: "%d سيڪنڊ",
				m: "هڪ منٽ",
				mm: "%d منٽ",
				h: "هڪ ڪلاڪ",
				hh: "%d ڪلاڪ",
				d: "هڪ ڏينهن",
				dd: "%d ڏينهن",
				M: "هڪ مهينو",
				MM: "%d مهينا",
				y: "هڪ سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("se", {
			months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "maŋit %s",
				s: "moadde sekunddat",
				ss: "%d sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				ss: "තත්පර %d",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
			ordinal: function (e) {
				return e + " වැනි"
			},
			meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
			isPM: function (e) {
				return "ප.ව." === e || "පස් වරු" === e
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
			n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

		function i(e) {
			return e > 1 && e < 5
		}

		function r(e, t, n, r) {
			var a = e + " ";
			switch (n) {
				case "s":
					return t || r ? "pár sekúnd" : "pár sekundami";
				case "ss":
					return t || r ? a + (i(e) ? "sekundy" : "sekúnd") : a + "sekundami";
				case "m":
					return t ? "minúta" : r ? "minútu" : "minútou";
				case "mm":
					return t || r ? a + (i(e) ? "minúty" : "minút") : a + "minútami";
				case "h":
					return t ? "hodina" : r ? "hodinu" : "hodinou";
				case "hh":
					return t || r ? a + (i(e) ? "hodiny" : "hodín") : a + "hodinami";
				case "d":
					return t || r ? "deň" : "dňom";
				case "dd":
					return t || r ? a + (i(e) ? "dni" : "dní") : a + "dňami";
				case "M":
					return t || r ? "mesiac" : "mesiacom";
				case "MM":
					return t || r ? a + (i(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
				case "y":
					return t || r ? "rok" : "rokom";
				case "yy":
					return t || r ? a + (i(e) ? "roky" : "rokov") : a + "rokmi"
			}
		}
		e.defineLocale("sk", {
			months: t,
			monthsShort: n,
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes o] LT",
				nextDay: "[zajtra o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v nedeľu o] LT";
						case 1:
						case 2:
							return "[v] dddd [o] LT";
						case 3:
							return "[v stredu o] LT";
						case 4:
							return "[vo štvrtok o] LT";
						case 5:
							return "[v piatok o] LT";
						case 6:
							return "[v sobotu o] LT"
					}
				},
				lastDay: "[včera o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulú nedeľu o] LT";
						case 1:
						case 2:
							return "[minulý] dddd [o] LT";
						case 3:
							return "[minulú stredu o] LT";
						case 4:
						case 5:
							return "[minulý] dddd [o] LT";
						case 6:
							return "[minulú sobotu o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pred %s",
				s: r,
				ss: r,
				m: r,
				mm: r,
				h: r,
				hh: r,
				d: r,
				dd: r,
				M: r,
				MM: r,
				y: r,
				yy: r
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = e + " ";
			switch (n) {
				case "s":
					return t || i ? "nekaj sekund" : "nekaj sekundami";
				case "ss":
					return r += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || i ? "sekundi" : "sekundah" : e < 5 ? t || i ? "sekunde" : "sekundah" : "sekund";
				case "m":
					return t ? "ena minuta" : "eno minuto";
				case "mm":
					return r += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : e < 5 ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami";
				case "h":
					return t ? "ena ura" : "eno uro";
				case "hh":
					return r += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : e < 5 ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami";
				case "d":
					return t || i ? "en dan" : "enim dnem";
				case "dd":
					return r += 1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi";
				case "M":
					return t || i ? "en mesec" : "enim mesecem";
				case "MM":
					return r += 1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : e < 5 ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci";
				case "y":
					return t || i ? "eno leto" : "enim letom";
				case "yy":
					return r += 1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : e < 5 ? t || i ? "leta" : "leti" : t || i ? "let" : "leti"
			}
		}
		e.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[prejšnjo] [nedeljo] [ob] LT";
						case 3:
							return "[prejšnjo] [sredo] [ob] LT";
						case 6:
							return "[prejšnjo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function (e) {
				return "M" === e.charAt(0)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				ss: "%d sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			words: {
				ss: ["sekunda", "sekunde", "sekundi"],
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, i) {
				var r = t.words[i];
				return 1 === i.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
			}
		};
		e.defineLocale("sr", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedelju] [u] LT";
						case 3:
							return "[u] [sredu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pre %s",
				s: "nekoliko sekundi",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			words: {
				ss: ["секунда", "секунде", "секунди"],
				m: ["један минут", "једне минуте"],
				mm: ["минут", "минуте", "минута"],
				h: ["један сат", "једног сата"],
				hh: ["сат", "сата", "сати"],
				dd: ["дан", "дана", "дана"],
				MM: ["месец", "месеца", "месеци"],
				yy: ["година", "године", "година"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, i) {
				var r = t.words[i];
				return 1 === i.length ? n ? r[0] : r[1] : e + " " + t.correctGrammaticalCase(e, r)
			}
		};
		e.defineLocale("sr-cyrl", {
			months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
			monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
			monthsParseExact: !0,
			weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
			weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
			weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[данас у] LT",
				nextDay: "[сутра у] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[у] [недељу] [у] LT";
						case 3:
							return "[у] [среду] [у] LT";
						case 6:
							return "[у] [суботу] [у] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[у] dddd [у] LT"
					}
				},
				lastDay: "[јуче у] LT",
				lastWeek: function () {
					return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пре %s",
				s: "неколико секунди",
				ss: t.translate,
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "дан",
				dd: t.translate,
				M: "месец",
				MM: t.translate,
				y: "годину",
				yy: t.translate
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				ss: "%d mzuzwana",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function (e, t, n) {
				return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
			},
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				ss: "%d sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				ss: "sekunde %d",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "masiku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
				1: "௧",
				2: "௨",
				3: "௩",
				4: "௪",
				5: "௫",
				6: "௬",
				7: "௭",
				8: "௮",
				9: "௯",
				0: "௦"
			},
			n = {
				"௧": "1",
				"௨": "2",
				"௩": "3",
				"௪": "4",
				"௫": "5",
				"௬": "6",
				"௭": "7",
				"௮": "8",
				"௯": "9",
				"௦": "0"
			};
		e.defineLocale("ta", {
			months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
			weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
			weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, HH:mm",
				LLLL: "dddd, D MMMM YYYY, HH:mm"
			},
			calendar: {
				sameDay: "[இன்று] LT",
				nextDay: "[நாளை] LT",
				nextWeek: "dddd, LT",
				lastDay: "[நேற்று] LT",
				lastWeek: "[கடந்த வாரம்] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s இல்",
				past: "%s முன்",
				s: "ஒரு சில விநாடிகள்",
				ss: "%d விநாடிகள்",
				m: "ஒரு நிமிடம்",
				mm: "%d நிமிடங்கள்",
				h: "ஒரு மணி நேரம்",
				hh: "%d மணி நேரம்",
				d: "ஒரு நாள்",
				dd: "%d நாட்கள்",
				M: "ஒரு மாதம்",
				MM: "%d மாதங்கள்",
				y: "ஒரு வருடம்",
				yy: "%d ஆண்டுகள்"
			},
			dayOfMonthOrdinalParse: /\d{1,2}வது/,
			ordinal: function (e) {
				return e + "வது"
			},
			preparse: function (e) {
				return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
			meridiem: function (e, t, n) {
				return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
			},
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("te", {
			months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
			monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
			monthsParseExact: !0,
			weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
			weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
			weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[నేడు] LT",
				nextDay: "[రేపు] LT",
				nextWeek: "dddd, LT",
				lastDay: "[నిన్న] LT",
				lastWeek: "[గత] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s లో",
				past: "%s క్రితం",
				s: "కొన్ని క్షణాలు",
				ss: "%d సెకన్లు",
				m: "ఒక నిమిషం",
				mm: "%d నిమిషాలు",
				h: "ఒక గంట",
				hh: "%d గంటలు",
				d: "ఒక రోజు",
				dd: "%d రోజులు",
				M: "ఒక నెల",
				MM: "%d నెలలు",
				y: "ఒక సంవత్సరం",
				yy: "%d సంవత్సరాలు"
			},
			dayOfMonthOrdinalParse: /\d{1,2}వ/,
			ordinal: "%dవ",
			meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("tet", {
			months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
			weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
			weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ohin iha] LT",
				nextDay: "[Aban iha] LT",
				nextWeek: "dddd [iha] LT",
				lastDay: "[Horiseik iha] LT",
				lastWeek: "dddd [semana kotuk] [iha] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "iha %s",
				past: "%s liuba",
				s: "minutu balun",
				ss: "minutu %d",
				m: "minutu ida",
				mm: "minutu %d",
				h: "oras ida",
				hh: "oras %d",
				d: "loron ida",
				dd: "loron %d",
				M: "fulan ida",
				MM: "fulan %d",
				y: "tinan ida",
				yy: "tinan %d"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			0: "-ум",
			1: "-ум",
			2: "-юм",
			3: "-юм",
			4: "-ум",
			5: "-ум",
			6: "-ум",
			7: "-ум",
			8: "-ум",
			9: "-ум",
			10: "-ум",
			12: "-ум",
			13: "-ум",
			20: "-ум",
			30: "-юм",
			40: "-ум",
			50: "-ум",
			60: "-ум",
			70: "-ум",
			80: "-ум",
			90: "-ум",
			100: "-ум"
		};
		e.defineLocale("tg", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
			weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
			weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Имрӯз соати] LT",
				nextDay: "[Пагоҳ соати] LT",
				lastDay: "[Дирӯз соати] LT",
				nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
				lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "баъди %s",
				past: "%s пеш",
				s: "якчанд сония",
				m: "як дақиқа",
				mm: "%d дақиқа",
				h: "як соат",
				hh: "%d соат",
				d: "як рӯз",
				dd: "%d рӯз",
				M: "як моҳ",
				MM: "%d моҳ",
				y: "як сол",
				yy: "%d сол"
			},
			meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
			ordinal: function (e) {
				var n = e % 10,
					i = e >= 100 ? 100 : null;
				return e + (t[e] || t[n] || t[i])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			monthsParseExact: !0,
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H:mm",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function (e) {
				return "หลังเที่ยง" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				ss: "%d วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "LT [ngayong araw]",
				nextDay: "[Bukas ng] LT",
				nextWeek: "LT [sa susunod na] dddd",
				lastDay: "LT [kahapon]",
				lastWeek: "LT [noong nakaraang] dddd",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				ss: "%d segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

		function n(e, n, i, r) {
			var a = function (e) {
				var n = Math.floor(e % 1e3 / 100),
					i = Math.floor(e % 100 / 10),
					r = e % 10,
					a = "";
				return n > 0 && (a += t[n] + "vatlh"), i > 0 && (a += ("" !== a ? " " : "") + t[i] + "maH"), r > 0 && (a += ("" !== a ? " " : "") + t[r]), "" === a ? "pagh" : a
			}(e);
			switch (i) {
				case "ss":
					return a + " lup";
				case "mm":
					return a + " tup";
				case "hh":
					return a + " rep";
				case "dd":
					return a + " jaj";
				case "MM":
					return a + " jar";
				case "yy":
					return a + " DIS"
			}
		}
		e.defineLocale("tlh", {
			months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
			monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
			monthsParseExact: !0,
			weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[DaHjaj] LT",
				nextDay: "[wa’leS] LT",
				nextWeek: "LLL",
				lastDay: "[wa’Hu’] LT",
				lastWeek: "LLL",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					var t = e;
					return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
				},
				past: function (e) {
					var t = e;
					return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
				},
				s: "puS lup",
				ss: n,
				m: "wa’ tup",
				mm: n,
				h: "wa’ rep",
				hh: n,
				d: "wa’ jaj",
				dd: n,
				M: "wa’ jar",
				MM: n,
				y: "wa’ DIS",
				yy: n
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = {
			1: "'inci",
			5: "'inci",
			8: "'inci",
			70: "'inci",
			80: "'inci",
			2: "'nci",
			7: "'nci",
			20: "'nci",
			50: "'nci",
			3: "'üncü",
			4: "'üncü",
			100: "'üncü",
			6: "'ncı",
			9: "'uncu",
			10: "'uncu",
			30: "'uncu",
			60: "'ıncı",
			90: "'ıncı"
		};
		e.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[yarın saat] LT",
				nextWeek: "[gelecek] dddd [saat] LT",
				lastDay: "[dün] LT",
				lastWeek: "[geçen] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				ss: "%d saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinal: function (e, n) {
				switch (n) {
					case "d":
					case "D":
					case "Do":
					case "DD":
						return e;
					default:
						if (0 === e) return e + "'ıncı";
						var i = e % 10,
							r = e % 100 - i,
							a = e >= 100 ? 100 : null;
						return e + (t[i] || t[r] || t[a])
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n, i) {
			var r = {
				s: ["viensas secunds", "'iensas secunds"],
				ss: [e + " secunds", e + " secunds"],
				m: ["'n míut", "'iens míut"],
				mm: [e + " míuts", e + " míuts"],
				h: ["'n þora", "'iensa þora"],
				hh: [e + " þoras", e + " þoras"],
				d: ["'n ziua", "'iensa ziua"],
				dd: [e + " ziuas", e + " ziuas"],
				M: ["'n mes", "'iens mes"],
				MM: [e + " mesen", e + " mesen"],
				y: ["'n ar", "'iens ar"],
				yy: [e + " ars", e + " ars"]
			};
			return i ? r[n][0] : t ? r[n][0] : r[n][1]
		}
		e.defineLocale("tzl", {
			months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function (e) {
				return "d'o" === e.toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi à] LT",
				nextDay: "[demà à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[ieiri à] LT",
				lastWeek: "[sür el] dddd [lasteu à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: t,
				ss: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			dayOfMonthOrdinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				ss: "%d ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				ss: "%d imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("ug-cn", {
			months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
			weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
			weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
				LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
				LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
			},
			meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function (e, t, n) {
				var i = 100 * e + t;
				return i < 600 ? "يېرىم كېچە" : i < 900 ? "سەھەر" : i < 1130 ? "چۈشتىن بۇرۇن" : i < 1230 ? "چۈش" : i < 1800 ? "چۈشتىن كېيىن" : "كەچ"
			},
			calendar: {
				sameDay: "[بۈگۈن سائەت] LT",
				nextDay: "[ئەتە سائەت] LT",
				nextWeek: "[كېلەركى] dddd [سائەت] LT",
				lastDay: "[تۆنۈگۈن] LT",
				lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s كېيىن",
				past: "%s بۇرۇن",
				s: "نەچچە سېكونت",
				ss: "%d سېكونت",
				m: "بىر مىنۇت",
				mm: "%d مىنۇت",
				h: "بىر سائەت",
				hh: "%d سائەت",
				d: "بىر كۈن",
				dd: "%d كۈن",
				M: "بىر ئاي",
				MM: "%d ئاي",
				y: "بىر يىل",
				yy: "%d يىل"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "-كۈنى";
					case "w":
					case "W":
						return e + "-ھەپتە";
					default:
						return e
				}
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";

		function t(e, t, n) {
			var i, r, a = {
				ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
				mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
				hh: t ? "година_години_годин" : "годину_години_годин",
				dd: "день_дні_днів",
				MM: "місяць_місяці_місяців",
				yy: "рік_роки_років"
			};
			return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (i = +e, r = a[n].split("_"), i % 10 == 1 && i % 100 != 11 ? r[0] : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? r[1] : r[2])
		}

		function n(e) {
			return function () {
				return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
			}
		}
		e.defineLocale("uk", {
			months: {
				format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
				standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
			},
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: function (e, t) {
				var n = {
					nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
					accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
					genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
				};
				if (!e) return n.nominative;
				var i = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
				return n[i][e.day()]
			},
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			},
			calendar: {
				sameDay: n("[Сьогодні "),
				nextDay: n("[Завтра "),
				lastDay: n("[Вчора "),
				nextWeek: n("[У] dddd ["),
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return n("[Минулої] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return n("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				ss: t,
				m: t,
				mm: t,
				h: "годину",
				hh: t,
				d: "день",
				dd: t,
				M: "місяць",
				MM: t,
				y: "рік",
				yy: t
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function (e) {
				return /^(дня|вечора)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
			},
			dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e + "-й";
					case "D":
						return e + "-го";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
			n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
		e.defineLocale("ur", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: n,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd، D MMMM YYYY HH:mm"
			},
			meridiemParse: /صبح|شام/,
			isPM: function (e) {
				return "شام" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "صبح" : "شام"
			},
			calendar: {
				sameDay: "[آج بوقت] LT",
				nextDay: "[کل بوقت] LT",
				nextWeek: "dddd [بوقت] LT",
				lastDay: "[گذشتہ روز بوقت] LT",
				lastWeek: "[گذشتہ] dddd [بوقت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s بعد",
				past: "%s قبل",
				s: "چند سیکنڈ",
				ss: "%d سیکنڈ",
				m: "ایک منٹ",
				mm: "%d منٹ",
				h: "ایک گھنٹہ",
				hh: "%d گھنٹے",
				d: "ایک دن",
				dd: "%d دن",
				M: "ایک ماہ",
				MM: "%d ماہ",
				y: "ایک سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("uz", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				ss: "%d фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("uz-latn", {
			months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
			monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
			weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
			weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
			weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Bugun soat] LT [da]",
				nextDay: "[Ertaga] LT [da]",
				nextWeek: "dddd [kuni soat] LT [da]",
				lastDay: "[Kecha soat] LT [da]",
				lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Yaqin %s ichida",
				past: "Bir necha %s oldin",
				s: "soniya",
				ss: "%d soniya",
				m: "bir daqiqa",
				mm: "%d daqiqa",
				h: "bir soat",
				hh: "%d soat",
				d: "bir kun",
				dd: "%d kun",
				M: "bir oy",
				MM: "%d oy",
				y: "bir yil",
				yy: "%d yil"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			monthsParseExact: !0,
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function (e) {
				return /^ch$/i.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần rồi lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				ss: "%d giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			dayOfMonthOrdinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("x-pseudo", {
			months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
			monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
			monthsParseExact: !0,
			weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
			weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
			weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~ódá~ý át] LT",
				nextDay: "[T~ómó~rró~w át] LT",
				nextWeek: "dddd [át] LT",
				lastDay: "[Ý~ést~érdá~ý át] LT",
				lastWeek: "[L~ást] dddd [át] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "í~ñ %s",
				past: "%s á~gó",
				s: "á ~féw ~sécó~ñds",
				ss: "%d s~écóñ~ds",
				m: "á ~míñ~úté",
				mm: "%d m~íñú~tés",
				h: "á~ñ hó~úr",
				hh: "%d h~óúrs",
				d: "á ~dáý",
				dd: "%d d~áýs",
				M: "á ~móñ~th",
				MM: "%d m~óñt~hs",
				y: "á ~ýéár",
				yy: "%d ý~éárs"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (e) {
				var t = e % 10,
					n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("yo", {
			months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
			monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
			weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
			weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
			weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Ònì ni] LT",
				nextDay: "[Ọ̀la ni] LT",
				nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
				lastDay: "[Àna ni] LT",
				lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ní %s",
				past: "%s kọjá",
				s: "ìsẹjú aayá die",
				ss: "aayá %d",
				m: "ìsẹjú kan",
				mm: "ìsẹjú %d",
				h: "wákati kan",
				hh: "wákati %d",
				d: "ọjọ́ kan",
				dd: "ọjọ́ %d",
				M: "osù kan",
				MM: "osù %d",
				y: "ọdún kan",
				yy: "ọdún %d"
			},
			dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
			ordinal: "ọjọ́ %d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah点mm分",
				LLLL: "YYYY年M月D日ddddAh点mm分",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function (e, t, n) {
				var i = 100 * e + t;
				return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "周";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				ss: "%d 秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("zh-hk", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var i = 100 * e + t;
				return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	}(n(0))
}, function (e, t, n) {
	! function (e) {
		"use strict";
		e.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日 HH:mm",
				LLLL: "YYYY年M月D日dddd HH:mm",
				l: "YYYY/M/D",
				ll: "YYYY年M月D日",
				lll: "YYYY年M月D日 HH:mm",
				llll: "YYYY年M月D日dddd HH:mm"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var i = 100 * e + t;
				return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天] LT",
				nextDay: "[明天] LT",
				nextWeek: "[下]dddd LT",
				lastDay: "[昨天] LT",
				lastWeek: "[上]dddd LT",
				sameElse: "L"
			},
			dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				ss: "%d 秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	}(n(0))
}, function (e, t, n) {
	var i = n(169),
		r = n(171),
		a = function (e) {
			return e instanceof a ? e : this instanceof a ? (this.valid = !1, this.values = {
				rgb: [0, 0, 0],
				hsl: [0, 0, 0],
				hsv: [0, 0, 0],
				hwb: [0, 0, 0],
				cmyk: [0, 0, 0, 0],
				alpha: 1
			}, void("string" == typeof e ? (t = r.getRgba(e)) ? this.setValues("rgb", t) : (t = r.getHsla(e)) ? this.setValues("hsl", t) : (t = r.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new a(e);
			var t
		};
	a.prototype = {
		isValid: function () {
			return this.valid
		},
		rgb: function () {
			return this.setSpace("rgb", arguments)
		},
		hsl: function () {
			return this.setSpace("hsl", arguments)
		},
		hsv: function () {
			return this.setSpace("hsv", arguments)
		},
		hwb: function () {
			return this.setSpace("hwb", arguments)
		},
		cmyk: function () {
			return this.setSpace("cmyk", arguments)
		},
		rgbArray: function () {
			return this.values.rgb
		},
		hslArray: function () {
			return this.values.hsl
		},
		hsvArray: function () {
			return this.values.hsv
		},
		hwbArray: function () {
			var e = this.values;
			return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
		},
		cmykArray: function () {
			return this.values.cmyk
		},
		rgbaArray: function () {
			var e = this.values;
			return e.rgb.concat([e.alpha])
		},
		hslaArray: function () {
			var e = this.values;
			return e.hsl.concat([e.alpha])
		},
		alpha: function (e) {
			return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
		},
		red: function (e) {
			return this.setChannel("rgb", 0, e)
		},
		green: function (e) {
			return this.setChannel("rgb", 1, e)
		},
		blue: function (e) {
			return this.setChannel("rgb", 2, e)
		},
		hue: function (e) {
			return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
		},
		saturation: function (e) {
			return this.setChannel("hsl", 1, e)
		},
		lightness: function (e) {
			return this.setChannel("hsl", 2, e)
		},
		saturationv: function (e) {
			return this.setChannel("hsv", 1, e)
		},
		whiteness: function (e) {
			return this.setChannel("hwb", 1, e)
		},
		blackness: function (e) {
			return this.setChannel("hwb", 2, e)
		},
		value: function (e) {
			return this.setChannel("hsv", 2, e)
		},
		cyan: function (e) {
			return this.setChannel("cmyk", 0, e)
		},
		magenta: function (e) {
			return this.setChannel("cmyk", 1, e)
		},
		yellow: function (e) {
			return this.setChannel("cmyk", 2, e)
		},
		black: function (e) {
			return this.setChannel("cmyk", 3, e)
		},
		hexString: function () {
			return r.hexString(this.values.rgb)
		},
		rgbString: function () {
			return r.rgbString(this.values.rgb, this.values.alpha)
		},
		rgbaString: function () {
			return r.rgbaString(this.values.rgb, this.values.alpha)
		},
		percentString: function () {
			return r.percentString(this.values.rgb, this.values.alpha)
		},
		hslString: function () {
			return r.hslString(this.values.hsl, this.values.alpha)
		},
		hslaString: function () {
			return r.hslaString(this.values.hsl, this.values.alpha)
		},
		hwbString: function () {
			return r.hwbString(this.values.hwb, this.values.alpha)
		},
		keyword: function () {
			return r.keyword(this.values.rgb, this.values.alpha)
		},
		rgbNumber: function () {
			var e = this.values.rgb;
			return e[0] << 16 | e[1] << 8 | e[2]
		},
		luminosity: function () {
			for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
				var i = e[n] / 255;
				t[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
			}
			return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
		},
		contrast: function (e) {
			var t = this.luminosity(),
				n = e.luminosity();
			return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
		},
		level: function (e) {
			var t = this.contrast(e);
			return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
		},
		dark: function () {
			var e = this.values.rgb;
			return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
		},
		light: function () {
			return !this.dark()
		},
		negate: function () {
			for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
			return this.setValues("rgb", e), this
		},
		lighten: function (e) {
			var t = this.values.hsl;
			return t[2] += t[2] * e, this.setValues("hsl", t), this
		},
		darken: function (e) {
			var t = this.values.hsl;
			return t[2] -= t[2] * e, this.setValues("hsl", t), this
		},
		saturate: function (e) {
			var t = this.values.hsl;
			return t[1] += t[1] * e, this.setValues("hsl", t), this
		},
		desaturate: function (e) {
			var t = this.values.hsl;
			return t[1] -= t[1] * e, this.setValues("hsl", t), this
		},
		whiten: function (e) {
			var t = this.values.hwb;
			return t[1] += t[1] * e, this.setValues("hwb", t), this
		},
		blacken: function (e) {
			var t = this.values.hwb;
			return t[2] += t[2] * e, this.setValues("hwb", t), this
		},
		greyscale: function () {
			var e = this.values.rgb,
				t = .3 * e[0] + .59 * e[1] + .11 * e[2];
			return this.setValues("rgb", [t, t, t]), this
		},
		clearer: function (e) {
			var t = this.values.alpha;
			return this.setValues("alpha", t - t * e), this
		},
		opaquer: function (e) {
			var t = this.values.alpha;
			return this.setValues("alpha", t + t * e), this
		},
		rotate: function (e) {
			var t = this.values.hsl,
				n = (t[0] + e) % 360;
			return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
		},
		mix: function (e, t) {
			var n = e,
				i = void 0 === t ? .5 : t,
				r = 2 * i - 1,
				a = this.alpha() - n.alpha(),
				o = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
				l = 1 - o;
			return this.rgb(o * this.red() + l * n.red(), o * this.green() + l * n.green(), o * this.blue() + l * n.blue()).alpha(this.alpha() * i + n.alpha() * (1 - i))
		},
		toJSON: function () {
			return this.rgb()
		},
		clone: function () {
			var e, t, n = new a,
				i = this.values,
				r = n.values;
			for (var o in i) i.hasOwnProperty(o) && (e = i[o], "[object Array]" === (t = {}.toString.call(e)) ? r[o] = e.slice(0) : "[object Number]" === t ? r[o] = e : console.error("unexpected color value:", e));
			return n
		}
	}, a.prototype.spaces = {
		rgb: ["red", "green", "blue"],
		hsl: ["hue", "saturation", "lightness"],
		hsv: ["hue", "saturation", "value"],
		hwb: ["hue", "whiteness", "blackness"],
		cmyk: ["cyan", "magenta", "yellow", "black"]
	}, a.prototype.maxes = {
		rgb: [255, 255, 255],
		hsl: [360, 100, 100],
		hsv: [360, 100, 100],
		hwb: [360, 100, 100],
		cmyk: [100, 100, 100, 100]
	}, a.prototype.getValues = function (e) {
		for (var t = this.values, n = {}, i = 0; i < e.length; i++) n[e.charAt(i)] = t[e][i];
		return 1 !== t.alpha && (n.a = t.alpha), n
	}, a.prototype.setValues = function (e, t) {
		var n, r, a = this.values,
			o = this.spaces,
			l = this.maxes,
			s = 1;
		if (this.valid = !0, "alpha" === e) s = t;
		else if (t.length) a[e] = t.slice(0, e.length), s = t[e.length];
		else if (void 0 !== t[e.charAt(0)]) {
			for (n = 0; n < e.length; n++) a[e][n] = t[e.charAt(n)];
			s = t.a
		} else if (void 0 !== t[o[e][0]]) {
			var d = o[e];
			for (n = 0; n < e.length; n++) a[e][n] = t[d[n]];
			s = t.alpha
		}
		if (a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s)), "alpha" === e) return !1;
		for (n = 0; n < e.length; n++) r = Math.max(0, Math.min(l[e][n], a[e][n])), a[e][n] = Math.round(r);
		for (var u in o) u !== e && (a[u] = i[e][u](a[e]));
		return !0
	}, a.prototype.setSpace = function (e, t) {
		var n = t[0];
		return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
	}, a.prototype.setChannel = function (e, t, n) {
		var i = this.values[e];
		return void 0 === n ? i[t] : n === i[t] ? this : (i[t] = n, this.setValues(e, i), this)
	}, "undefined" != typeof window && (window.Color = a), e.exports = a
}, function (e, t, n) {
	"use strict";
	var i = n(6);
	t = e.exports = i.extend({
		chart: null,
		currentStep: 0,
		numSteps: 60,
		easing: "",
		render: null,
		onAnimationProgress: null,
		onAnimationComplete: null
	});
	Object.defineProperty(t.prototype, "animationObject", {
		get: function () {
			return this
		}
	}), Object.defineProperty(t.prototype, "chartInstance", {
		get: function () {
			return this.chart
		},
		set: function (e) {
			this.chart = e
		}
	})
}, function (e, t, n) {
	"use strict";
	var i = n(3),
		r = n(2);
	i._set("global", {
		animation: {
			duration: 1e3,
			easing: "easeOutQuart",
			onProgress: r.noop,
			onComplete: r.noop
		}
	}), e.exports = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,
		addAnimation: function (e, t, n, i) {
			var r, a, o = this.animations;
			for (t.chart = e, i || (e.animating = !0), r = 0, a = o.length; r < a; ++r)
				if (o[r].chart === e) return void(o[r] = t);
			o.push(t), 1 === o.length && this.requestAnimationFrame()
		},
		cancelAnimation: function (e) {
			var t = r.findIndex(this.animations, function (t) {
				return t.chart === e
			}); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
		},
		requestAnimationFrame: function () {
			var e = this;
			null === e.request && (e.request = r.requestAnimFrame.call(window, function () {
				e.request = null, e.startDigest()
			}))
		},
		startDigest: function () {
			var e = this,
				t = Date.now(),
				n = 0;
			e.dropFrames > 1 && (n = Math.floor(e.dropFrames), e.dropFrames = e.dropFrames % 1), e.advance(1 + n);
			var i = Date.now();
			e.dropFrames += (i - t) / e.frameDuration, e.animations.length > 0 && e.requestAnimationFrame()
		},
		advance: function (e) {
			for (var t, n, i = this.animations, a = 0; a < i.length;) n = (t = i[a]).chart, t.currentStep = (t.currentStep || 0) + e, t.currentStep = Math.min(t.currentStep, t.numSteps), r.callback(t.render, [n, t], n), r.callback(t.onAnimationProgress, [t], n), t.currentStep >= t.numSteps ? (r.callback(t.onAnimationComplete, [t], n), n.animating = !1, i.splice(a, 1)) : ++a
		}
	}
}, function (e, t, n) {
	"use strict";
	var i = n(2);

	function r(e, t) {
		return e.native ? {
			x: e.x,
			y: e.y
		} : i.getRelativePosition(e, t)
	}

	function a(e, t) {
		var n, i, r, a, o;
		for (i = 0, a = e.data.datasets.length; i < a; ++i)
			if (e.isDatasetVisible(i))
				for (r = 0, o = (n = e.getDatasetMeta(i)).data.length; r < o; ++r) {
					var l = n.data[r];
					l._view.skip || t(l)
				}
	}

	function o(e, t) {
		var n = [];
		return a(e, function (e) {
			e.inRange(t.x, t.y) && n.push(e)
		}), n
	}

	function l(e, t, n, i) {
		var r = Number.POSITIVE_INFINITY,
			o = [];
		return a(e, function (e) {
			if (!n || e.inRange(t.x, t.y)) {
				var a = e.getCenterPoint(),
					l = i(t, a);
				l < r ? (o = [e], r = l) : l === r && o.push(e)
			}
		}), o
	}

	function s(e) {
		var t = -1 !== e.indexOf("x"),
			n = -1 !== e.indexOf("y");
		return function (e, i) {
			var r = t ? Math.abs(e.x - i.x) : 0,
				a = n ? Math.abs(e.y - i.y) : 0;
			return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
		}
	}

	function d(e, t, n) {
		var i = r(t, e);
		n.axis = n.axis || "x";
		var a = s(n.axis),
			d = n.intersect ? o(e, i) : l(e, i, !1, a),
			u = [];
		return d.length ? (e.data.datasets.forEach(function (t, n) {
			if (e.isDatasetVisible(n)) {
				var i = e.getDatasetMeta(n).data[d[0]._index];
				i && !i._view.skip && u.push(i)
			}
		}), u) : []
	}
	e.exports = {
		modes: {
			single: function (e, t) {
				var n = r(t, e),
					i = [];
				return a(e, function (e) {
					if (e.inRange(n.x, n.y)) return i.push(e), i
				}), i.slice(0, 1)
			},
			label: d,
			index: d,
			dataset: function (e, t, n) {
				var i = r(t, e);
				n.axis = n.axis || "xy";
				var a = s(n.axis),
					d = n.intersect ? o(e, i) : l(e, i, !1, a);
				return d.length > 0 && (d = e.getDatasetMeta(d[0]._datasetIndex).data), d
			},
			"x-axis": function (e, t) {
				return d(e, t, {
					intersect: !1
				})
			},
			point: function (e, t) {
				return o(e, r(t, e))
			},
			nearest: function (e, t, n) {
				var i = r(t, e);
				n.axis = n.axis || "xy";
				var a = s(n.axis),
					o = l(e, i, n.intersect, a);
				return o.length > 1 && o.sort(function (e, t) {
					var n = e.getArea() - t.getArea();
					return 0 === n && (n = e._datasetIndex - t._datasetIndex), n
				}), o.slice(0, 1)
			},
			x: function (e, t, n) {
				var i = r(t, e),
					o = [],
					l = !1;
				return a(e, function (e) {
					e.inXRange(i.x) && o.push(e), e.inRange(i.x, i.y) && (l = !0)
				}), n.intersect && !l && (o = []), o
			},
			y: function (e, t, n) {
				var i = r(t, e),
					o = [],
					l = !1;
				return a(e, function (e) {
					e.inYRange(i.y) && o.push(e), e.inRange(i.x, i.y) && (l = !0)
				}), n.intersect && !l && (o = []), o
			}
		}
	}
}, function (e, t, n) {
	"use strict";
	var i = n(2),
		r = n(177),
		a = n(178),
		o = a._enabled ? a : r;
	e.exports = i.extend({
		initialize: function () {},
		acquireContext: function () {},
		releaseContext: function () {},
		addEventListener: function () {},
		removeEventListener: function () {}
	}, o)
}, function (e, t, n) {
	"use strict";
	var i = n(3),
		r = n(2);
	i._set("global", {
		plugins: {}
	}), e.exports = {
		_plugins: [],
		_cacheId: 0,
		register: function (e) {
			var t = this._plugins;
			[].concat(e).forEach(function (e) {
				-1 === t.indexOf(e) && t.push(e)
			}), this._cacheId++
		},
		unregister: function (e) {
			var t = this._plugins;
			[].concat(e).forEach(function (e) {
				var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
			}), this._cacheId++
		},
		clear: function () {
			this._plugins = [], this._cacheId++
		},
		count: function () {
			return this._plugins.length
		},
		getAll: function () {
			return this._plugins
		},
		notify: function (e, t, n) {
			var i, r, a, o, l, s = this.descriptors(e),
				d = s.length;
			for (i = 0; i < d; ++i)
				if ("function" == typeof (l = (a = (r = s[i]).plugin)[t]) && ((o = [e].concat(n || [])).push(r.options), !1 === l.apply(a, o))) return !1;
			return !0
		},
		descriptors: function (e) {
			var t = e.$plugins || (e.$plugins = {});
			if (t.id === this._cacheId) return t.descriptors;
			var n = [],
				a = [],
				o = e && e.config || {},
				l = o.options && o.options.plugins || {};
			return this._plugins.concat(o.plugins || []).forEach(function (e) {
				if (-1 === n.indexOf(e)) {
					var t = e.id,
						o = l[t];
					!1 !== o && (!0 === o && (o = r.clone(i.global.plugins[t])), n.push(e), a.push({
						plugin: e,
						options: o || {}
					}))
				}
			}), t.descriptors = a, t.id = this._cacheId, a
		},
		_invalidate: function (e) {
			delete e.$plugins
		}
	}
}, function (e, t, n) {
	"use strict";
	var i = n(3),
		r = n(6),
		a = n(2);
	i._set("global", {
		tooltips: {
			enabled: !0,
			custom: null,
			mode: "nearest",
			position: "average",
			intersect: !0,
			backgroundColor: "rgba(0,0,0,0.8)",
			titleFontStyle: "bold",
			titleSpacing: 2,
			titleMarginBottom: 6,
			titleFontColor: "#fff",
			titleAlign: "left",
			bodySpacing: 2,
			bodyFontColor: "#fff",
			bodyAlign: "left",
			footerFontStyle: "bold",
			footerSpacing: 2,
			footerMarginTop: 6,
			footerFontColor: "#fff",
			footerAlign: "left",
			yPadding: 6,
			xPadding: 6,
			caretPadding: 2,
			caretSize: 5,
			cornerRadius: 6,
			multiKeyBackground: "#fff",
			displayColors: !0,
			borderColor: "rgba(0,0,0,0)",
			borderWidth: 0,
			callbacks: {
				beforeTitle: a.noop,
				title: function (e, t) {
					var n = "",
						i = t.labels,
						r = i ? i.length : 0;
					if (e.length > 0) {
						var a = e[0];
						a.xLabel ? n = a.xLabel : r > 0 && a.index < r && (n = i[a.index])
					}
					return n
				},
				afterTitle: a.noop,
				beforeBody: a.noop,
				beforeLabel: a.noop,
				label: function (e, t) {
					var n = t.datasets[e.datasetIndex].label || "";
					return n && (n += ": "), n += e.yLabel
				},
				labelColor: function (e, t) {
					var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
					return {
						borderColor: n.borderColor,
						backgroundColor: n.backgroundColor
					}
				},
				labelTextColor: function () {
					return this._options.bodyFontColor
				},
				afterLabel: a.noop,
				afterBody: a.noop,
				beforeFooter: a.noop,
				footer: a.noop,
				afterFooter: a.noop
			}
		}
	});
	var o = {
		average: function (e) {
			if (!e.length) return !1;
			var t, n, i = 0,
				r = 0,
				a = 0;
			for (t = 0, n = e.length; t < n; ++t) {
				var o = e[t];
				if (o && o.hasValue()) {
					var l = o.tooltipPosition();
					i += l.x, r += l.y, ++a
				}
			}
			return {
				x: Math.round(i / a),
				y: Math.round(r / a)
			}
		},
		nearest: function (e, t) {
			var n, i, r, o = t.x,
				l = t.y,
				s = Number.POSITIVE_INFINITY;
			for (n = 0, i = e.length; n < i; ++n) {
				var d = e[n];
				if (d && d.hasValue()) {
					var u = d.getCenterPoint(),
						c = a.distanceBetweenPoints(t, u);
					c < s && (s = c, r = d)
				}
			}
			if (r) {
				var h = r.tooltipPosition();
				o = h.x, l = h.y
			}
			return {
				x: o,
				y: l
			}
		}
	};

	function l(e, t) {
		var n = a.color(e);
		return n.alpha(t * n.alpha()).rgbaString()
	}

	function s(e, t) {
		return t && (a.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
	}

	function d(e) {
		return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
	}

	function u(e) {
		var t = i.global,
			n = a.valueOrDefault;
		return {
			xPadding: e.xPadding,
			yPadding: e.yPadding,
			xAlign: e.xAlign,
			yAlign: e.yAlign,
			bodyFontColor: e.bodyFontColor,
			_bodyFontFamily: n(e.bodyFontFamily, t.defaultFontFamily),
			_bodyFontStyle: n(e.bodyFontStyle, t.defaultFontStyle),
			_bodyAlign: e.bodyAlign,
			bodyFontSize: n(e.bodyFontSize, t.defaultFontSize),
			bodySpacing: e.bodySpacing,
			titleFontColor: e.titleFontColor,
			_titleFontFamily: n(e.titleFontFamily, t.defaultFontFamily),
			_titleFontStyle: n(e.titleFontStyle, t.defaultFontStyle),
			titleFontSize: n(e.titleFontSize, t.defaultFontSize),
			_titleAlign: e.titleAlign,
			titleSpacing: e.titleSpacing,
			titleMarginBottom: e.titleMarginBottom,
			footerFontColor: e.footerFontColor,
			_footerFontFamily: n(e.footerFontFamily, t.defaultFontFamily),
			_footerFontStyle: n(e.footerFontStyle, t.defaultFontStyle),
			footerFontSize: n(e.footerFontSize, t.defaultFontSize),
			_footerAlign: e.footerAlign,
			footerSpacing: e.footerSpacing,
			footerMarginTop: e.footerMarginTop,
			caretSize: e.caretSize,
			cornerRadius: e.cornerRadius,
			backgroundColor: e.backgroundColor,
			opacity: 0,
			legendColorBackground: e.multiKeyBackground,
			displayColors: e.displayColors,
			borderColor: e.borderColor,
			borderWidth: e.borderWidth
		}
	}

	function c(e) {
		return s([], d(e))
	}(e.exports = r.extend({
		initialize: function () {
			this._model = u(this._options), this._lastActive = []
		},
		getTitle: function () {
			var e = this._options.callbacks,
				t = e.beforeTitle.apply(this, arguments),
				n = e.title.apply(this, arguments),
				i = e.afterTitle.apply(this, arguments),
				r = [];
			return r = s(r, d(t)), r = s(r, d(n)), r = s(r, d(i))
		},
		getBeforeBody: function () {
			return c(this._options.callbacks.beforeBody.apply(this, arguments))
		},
		getBody: function (e, t) {
			var n = this,
				i = n._options.callbacks,
				r = [];
			return a.each(e, function (e) {
				var a = {
					before: [],
					lines: [],
					after: []
				};
				s(a.before, d(i.beforeLabel.call(n, e, t))), s(a.lines, i.label.call(n, e, t)), s(a.after, d(i.afterLabel.call(n, e, t))), r.push(a)
			}), r
		},
		getAfterBody: function () {
			return c(this._options.callbacks.afterBody.apply(this, arguments))
		},
		getFooter: function () {
			var e = this._options.callbacks,
				t = e.beforeFooter.apply(this, arguments),
				n = e.footer.apply(this, arguments),
				i = e.afterFooter.apply(this, arguments),
				r = [];
			return r = s(r, d(t)), r = s(r, d(n)), r = s(r, d(i))
		},
		update: function (e) {
			var t, n, i, r, l, s, d, c = this,
				h = c._options,
				p = c._model,
				f = c._model = u(h),
				m = c._active,
				g = c._data,
				_ = {
					xAlign: p.xAlign,
					yAlign: p.yAlign
				},
				y = {
					x: p.x,
					y: p.y
				},
				v = {
					width: p.width,
					height: p.height
				},
				M = {
					x: p.caretX,
					y: p.caretY
				};
			if (m.length) {
				f.opacity = 1;
				var b = [],
					w = [];
				M = o[h.position].call(c, m, c._eventPosition);
				var L = [];
				for (t = 0, n = m.length; t < n; ++t) L.push((i = m[t], r = void 0, l = void 0, s = void 0, d = void 0, r = i._xScale, l = i._yScale || i._scale, s = i._index, d = i._datasetIndex, {
					xLabel: r ? r.getLabelForIndex(s, d) : "",
					yLabel: l ? l.getLabelForIndex(s, d) : "",
					index: s,
					datasetIndex: d,
					x: i._model.x,
					y: i._model.y
				}));
				h.filter && (L = L.filter(function (e) {
					return h.filter(e, g)
				})), h.itemSort && (L = L.sort(function (e, t) {
					return h.itemSort(e, t, g)
				})), a.each(L, function (e) {
					b.push(h.callbacks.labelColor.call(c, e, c._chart)), w.push(h.callbacks.labelTextColor.call(c, e, c._chart))
				}), f.title = c.getTitle(L, g), f.beforeBody = c.getBeforeBody(L, g), f.body = c.getBody(L, g), f.afterBody = c.getAfterBody(L, g), f.footer = c.getFooter(L, g), f.x = Math.round(M.x), f.y = Math.round(M.y), f.caretPadding = h.caretPadding, f.labelColors = b, f.labelTextColors = w, f.dataPoints = L, v = function (e, t) {
					var n = e._chart.ctx,
						i = 2 * t.yPadding,
						r = 0,
						o = t.body,
						l = o.reduce(function (e, t) {
							return e + t.before.length + t.lines.length + t.after.length
						}, 0);
					l += t.beforeBody.length + t.afterBody.length;
					var s = t.title.length,
						d = t.footer.length,
						u = t.titleFontSize,
						c = t.bodyFontSize,
						h = t.footerFontSize;
					i += s * u, i += s ? (s - 1) * t.titleSpacing : 0, i += s ? t.titleMarginBottom : 0, i += l * c, i += l ? (l - 1) * t.bodySpacing : 0, i += d ? t.footerMarginTop : 0, i += d * h, i += d ? (d - 1) * t.footerSpacing : 0;
					var p = 0,
						f = function (e) {
							r = Math.max(r, n.measureText(e).width + p)
						};
					return n.font = a.fontString(u, t._titleFontStyle, t._titleFontFamily), a.each(t.title, f), n.font = a.fontString(c, t._bodyFontStyle, t._bodyFontFamily), a.each(t.beforeBody.concat(t.afterBody), f), p = t.displayColors ? c + 2 : 0, a.each(o, function (e) {
						a.each(e.before, f), a.each(e.lines, f), a.each(e.after, f)
					}), p = 0, n.font = a.fontString(h, t._footerFontStyle, t._footerFontFamily), a.each(t.footer, f), {
						width: r += 2 * t.xPadding,
						height: i
					}
				}(this, f), y = function (e, t, n, i) {
					var r = e.x,
						a = e.y,
						o = e.caretSize,
						l = e.caretPadding,
						s = e.cornerRadius,
						d = n.xAlign,
						u = n.yAlign,
						c = o + l,
						h = s + l;
					return "right" === d ? r -= t.width : "center" === d && ((r -= t.width / 2) + t.width > i.width && (r = i.width - t.width), r < 0 && (r = 0)), "top" === u ? a += c : a -= "bottom" === u ? t.height + c : t.height / 2, "center" === u ? "left" === d ? r += c : "right" === d && (r -= c) : "left" === d ? r -= h : "right" === d && (r += h), {
						x: r,
						y: a
					}
				}(f, v, _ = function (e, t) {
					var n, i, r, a, o, l = e._model,
						s = e._chart,
						d = e._chart.chartArea,
						u = "center",
						c = "center";
					l.y < t.height ? c = "top" : l.y > s.height - t.height && (c = "bottom");
					var h = (d.left + d.right) / 2,
						p = (d.top + d.bottom) / 2;
					"center" === c ? (n = function (e) {
						return e <= h
					}, i = function (e) {
						return e > h
					}) : (n = function (e) {
						return e <= t.width / 2
					}, i = function (e) {
						return e >= s.width - t.width / 2
					}), r = function (e) {
						return e + t.width + l.caretSize + l.caretPadding > s.width
					}, a = function (e) {
						return e - t.width - l.caretSize - l.caretPadding < 0
					}, o = function (e) {
						return e <= p ? "top" : "bottom"
					}, n(l.x) ? (u = "left", r(l.x) && (u = "center", c = o(l.y))) : i(l.x) && (u = "right", a(l.x) && (u = "center", c = o(l.y)));
					var f = e._options;
					return {
						xAlign: f.xAlign ? f.xAlign : u,
						yAlign: f.yAlign ? f.yAlign : c
					}
				}(this, v), c._chart)
			} else f.opacity = 0;
			return f.xAlign = _.xAlign, f.yAlign = _.yAlign, f.x = y.x, f.y = y.y, f.width = v.width, f.height = v.height, f.caretX = M.x, f.caretY = M.y, c._model = f, e && h.custom && h.custom.call(c, f), c
		},
		drawCaret: function (e, t) {
			var n = this._chart.ctx,
				i = this._view,
				r = this.getCaretPosition(e, t, i);
			n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3)
		},
		getCaretPosition: function (e, t, n) {
			var i, r, a, o, l, s, d = n.caretSize,
				u = n.cornerRadius,
				c = n.xAlign,
				h = n.yAlign,
				p = e.x,
				f = e.y,
				m = t.width,
				g = t.height;
			if ("center" === h) l = f + g / 2, "left" === c ? (r = (i = p) - d, a = i, o = l + d, s = l - d) : (r = (i = p + m) + d, a = i, o = l - d, s = l + d);
			else if ("left" === c ? (i = (r = p + u + d) - d, a = r + d) : "right" === c ? (i = (r = p + m - u - d) - d, a = r + d) : (i = (r = n.caretX) - d, a = r + d), "top" === h) l = (o = f) - d, s = o;
			else {
				l = (o = f + g) + d, s = o;
				var _ = a;
				a = i, i = _
			}
			return {
				x1: i,
				x2: r,
				x3: a,
				y1: o,
				y2: l,
				y3: s
			}
		},
		drawTitle: function (e, t, n, i) {
			var r = t.title;
			if (r.length) {
				n.textAlign = t._titleAlign, n.textBaseline = "top";
				var o, s, d = t.titleFontSize,
					u = t.titleSpacing;
				for (n.fillStyle = l(t.titleFontColor, i), n.font = a.fontString(d, t._titleFontStyle, t._titleFontFamily), o = 0, s = r.length; o < s; ++o) n.fillText(r[o], e.x, e.y), e.y += d + u, o + 1 === r.length && (e.y += t.titleMarginBottom - u)
			}
		},
		drawBody: function (e, t, n, i) {
			var r = t.bodyFontSize,
				o = t.bodySpacing,
				s = t.body;
			n.textAlign = t._bodyAlign, n.textBaseline = "top", n.font = a.fontString(r, t._bodyFontStyle, t._bodyFontFamily);
			var d = 0,
				u = function (t) {
					n.fillText(t, e.x + d, e.y), e.y += r + o
				};
			n.fillStyle = l(t.bodyFontColor, i), a.each(t.beforeBody, u);
			var c = t.displayColors;
			d = c ? r + 2 : 0, a.each(s, function (o, s) {
				var d = l(t.labelTextColors[s], i);
				n.fillStyle = d, a.each(o.before, u), a.each(o.lines, function (a) {
					c && (n.fillStyle = l(t.legendColorBackground, i), n.fillRect(e.x, e.y, r, r), n.lineWidth = 1, n.strokeStyle = l(t.labelColors[s].borderColor, i), n.strokeRect(e.x, e.y, r, r), n.fillStyle = l(t.labelColors[s].backgroundColor, i), n.fillRect(e.x + 1, e.y + 1, r - 2, r - 2), n.fillStyle = d), u(a)
				}), a.each(o.after, u)
			}), d = 0, a.each(t.afterBody, u), e.y -= o
		},
		drawFooter: function (e, t, n, i) {
			var r = t.footer;
			r.length && (e.y += t.footerMarginTop, n.textAlign = t._footerAlign, n.textBaseline = "top", n.fillStyle = l(t.footerFontColor, i), n.font = a.fontString(t.footerFontSize, t._footerFontStyle, t._footerFontFamily), a.each(r, function (i) {
				n.fillText(i, e.x, e.y), e.y += t.footerFontSize + t.footerSpacing
			}))
		},
		drawBackground: function (e, t, n, i, r) {
			n.fillStyle = l(t.backgroundColor, r), n.strokeStyle = l(t.borderColor, r), n.lineWidth = t.borderWidth;
			var a = t.xAlign,
				o = t.yAlign,
				s = e.x,
				d = e.y,
				u = i.width,
				c = i.height,
				h = t.cornerRadius;
			n.beginPath(), n.moveTo(s + h, d), "top" === o && this.drawCaret(e, i), n.lineTo(s + u - h, d), n.quadraticCurveTo(s + u, d, s + u, d + h), "center" === o && "right" === a && this.drawCaret(e, i), n.lineTo(s + u, d + c - h), n.quadraticCurveTo(s + u, d + c, s + u - h, d + c), "bottom" === o && this.drawCaret(e, i), n.lineTo(s + h, d + c), n.quadraticCurveTo(s, d + c, s, d + c - h), "center" === o && "left" === a && this.drawCaret(e, i), n.lineTo(s, d + h), n.quadraticCurveTo(s, d, s + h, d), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
		},
		draw: function () {
			var e = this._chart.ctx,
				t = this._view;
			if (0 !== t.opacity) {
				var n = {
						width: t.width,
						height: t.height
					},
					i = {
						x: t.x,
						y: t.y
					},
					r = Math.abs(t.opacity < .001) ? 0 : t.opacity,
					a = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
				this._options.enabled && a && (this.drawBackground(i, t, e, n, r), i.x += t.xPadding, i.y += t.yPadding, this.drawTitle(i, t, e, r), this.drawBody(i, t, e, r), this.drawFooter(i, t, e, r))
			}
		},
		handleEvent: function (e) {
			var t, n = this,
				i = n._options;
			return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : n._active = n._chart.getElementsAtEventForMode(e, i.mode, i), (t = !a.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (i.enabled || i.custom) && (n._eventPosition = {
				x: e.x,
				y: e.y
			}, n.update(!0), n.pivot())), t
		}
	})).positioners = o
}, function (t, n, i) {
	"use strict";
	(function (n) {
		var i, r, a, o, l, s, d, u, c;
		t.exports = (a = function (e, t) {
			var n;
			if (e === t) return e;
			for (n in t) void 0 !== t[n] && (e[n] = t[n]);
			return e
		}, o = function (e, t) {
			var n, i = Array.prototype.slice.call(arguments, 2),
				r = [],
				a = e.length;
			if (Array.prototype.map && e.map === Array.prototype.map) r = Array.prototype.map.call(e, function (e) {
				var n = i.slice(0);
				return n.splice(0, 0, e), t.apply(this, n)
			});
			else
				for (n = 0; n < a; n++) callback_params = i, callback_params.splice(0, 0, e[n]), r.push(t.apply(this, callback_params));
			return r
		}, l = function (e) {
			var t, n = [];
			for (t = 0; t < e.length; t++) n = n.concat(e[t]);
			return n
		}, s = function (e, t) {
			var n = e[0],
				i = e[1];
			return t && (n = e[1], i = e[0]), new google.maps.LatLng(n, i)
		}, d = function (e, t) {
			var n;
			for (n = 0; n < e.length; n++) e[n] instanceof google.maps.LatLng || (e[n].length > 0 && "object" == typeof e[n][0] ? e[n] = d(e[n], t) : e[n] = s(e[n], t));
			return e
		}, u = function (e, t) {
			var e = e.replace("#", "");
			return "jQuery" in window && t ? n("#" + e, t)[0] : document.getElementById(e)
		}, (c = function (e) {
			var t = document,
				i = function (e) {
					if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
						function () {};
					if (!this) return new i(e);
					e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
					var r, o = function (e, t) {
							return void 0 === e ? t : e
						},
						l = this,
						s = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
						d = ["mousemove", "mouseout", "mouseover"],
						c = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
						h = e.el || e.div,
						p = e.markerClusterer,
						f = google.maps.MapTypeId[e.mapType.toUpperCase()],
						m = new google.maps.LatLng(e.lat, e.lng),
						g = o(e.zoomControl, !0),
						_ = e.zoomControlOpt || {
							style: "DEFAULT",
							position: "TOP_LEFT"
						},
						y = _.style || "DEFAULT",
						v = _.position || "TOP_LEFT",
						M = o(e.panControl, !0),
						b = o(e.mapTypeControl, !0),
						w = o(e.scaleControl, !0),
						L = o(e.streetViewControl, !0),
						D = o(D, !0),
						T = {},
						k = {
							zoom: this.zoom,
							center: m,
							mapTypeId: f
						},
						S = {
							panControl: M,
							zoomControl: g,
							zoomControlOptions: {
								style: google.maps.ZoomControlStyle[y],
								position: google.maps.ControlPosition[v]
							},
							mapTypeControl: b,
							scaleControl: w,
							streetViewControl: L,
							overviewMapControl: D
						};
					if ("string" == typeof e.el || "string" == typeof e.div ? h.indexOf("#") > -1 ? this.el = u(h, e.context) : this.el = function (e, t) {
							var i = e.replace(".", "");
							return "jQuery" in this && t ? n("." + i, t)[0] : document.getElementsByClassName(i)[0]
						}.apply(this, [h, e.context]) : this.el = h, void 0 === this.el || null === this.el) throw "No element defined.";
					for (window.context_menu = window.context_menu || {}, window.context_menu[l.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, r = 0; r < c.length; r++) delete e[c[r]];
					for (1 != e.disableDefaultUI && (k = a(k, S)), T = a(k, e), r = 0; r < s.length; r++) delete T[s[r]];
					for (r = 0; r < d.length; r++) delete T[d[r]];
					this.map = new google.maps.Map(this.el, T), p && (this.markerClusterer = p.apply(this, [this.map]));
					var x = function (e, t) {
						var n = "",
							i = window.context_menu[l.el.id][e];
						for (var r in i)
							if (i.hasOwnProperty(r)) {
								var a = i[r];
								n += '<li><a id="' + e + "_" + r + '" href="#">' + a.title + "</a></li>"
							}
						if (u("gmaps_context_menu")) {
							var o = u("gmaps_context_menu");
							o.innerHTML = n;
							var s = o.getElementsByTagName("a"),
								d = s.length;
							for (r = 0; r < d; r++) {
								var c = s[r];
								google.maps.event.clearListeners(c, "click"), google.maps.event.addDomListenerOnce(c, "click", function (n) {
									n.preventDefault(), i[this.id.replace(e + "_", "")].action.apply(l, [t]), l.hideContextMenu()
								}, !1)
							}
							var h = function (e) {
									var t = 0,
										n = 0;
									if (e.offsetParent)
										do {
											t += e.offsetLeft, n += e.offsetTop
										} while (e = e.offsetParent);
									return [t, n]
								}.apply(this, [l.el]),
								p = h[0] + t.pixel.x - 15,
								f = h[1] + t.pixel.y - 15;
							o.style.left = p + "px", o.style.top = f + "px"
						}
					};
					this.buildContextMenu = function (e, t) {
						if ("marker" === e) {
							t.pixel = {};
							var n = new google.maps.OverlayView;
							n.setMap(l.map), n.draw = function () {
								var i = n.getProjection(),
									r = t.marker.getPosition();
								t.pixel = i.fromLatLngToContainerPixel(r), x(e, t)
							}
						} else x(e, t);
						var i = u("gmaps_context_menu");
						setTimeout(function () {
							i.style.display = "block"
						}, 0)
					}, this.setContextMenu = function (e) {
						window.context_menu[l.el.id][e.control] = {};
						var n, i = t.createElement("ul");
						for (n in e.options)
							if (e.options.hasOwnProperty(n)) {
								var r = e.options[n];
								window.context_menu[l.el.id][e.control][r.name] = {
									title: r.title,
									action: r.action
								}
							}
						i.id = "gmaps_context_menu", i.style.display = "none", i.style.position = "absolute", i.style.minWidth = "100px", i.style.background = "white", i.style.listStyle = "none", i.style.padding = "8px", i.style.boxShadow = "2px 2px 6px #ccc", u("gmaps_context_menu") || t.body.appendChild(i);
						var a = u("gmaps_context_menu");
						google.maps.event.addDomListener(a, "mouseout", function (e) {
							e.relatedTarget && this.contains(e.relatedTarget) || window.setTimeout(function () {
								a.style.display = "none"
							}, 400)
						}, !1)
					}, this.hideContextMenu = function () {
						var e = u("gmaps_context_menu");
						e && (e.style.display = "none")
					};
					var Y = function (t, n) {
						google.maps.event.addListener(t, n, function (t) {
							null == t && (t = this), e[n].apply(this, [t]), l.hideContextMenu()
						})
					};
					google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
					for (var E = 0; E < s.length; E++) {
						var C = s[E];
						C in e && Y(this.map, C)
					}
					for (var E = 0; E < d.length; E++) {
						var C = d[E];
						C in e && Y(this.map, C)
					}
					google.maps.event.addListener(this.map, "rightclick", function (t) {
						e.rightclick && e.rightclick.apply(this, [t]), null != window.context_menu[l.el.id].map && l.buildContextMenu("map", t)
					}), this.refresh = function () {
						google.maps.event.trigger(this.map, "resize")
					}, this.fitZoom = function () {
						var e, t = [],
							n = this.markers.length;
						for (e = 0; e < n; e++) "boolean" == typeof this.markers[e].visible && this.markers[e].visible && t.push(this.markers[e].getPosition());
						this.fitLatLngBounds(t)
					}, this.fitLatLngBounds = function (e) {
						var t, n = e.length,
							i = new google.maps.LatLngBounds;
						for (t = 0; t < n; t++) i.extend(e[t]);
						this.map.fitBounds(i)
					}, this.setCenter = function (e, t, n) {
						this.map.panTo(new google.maps.LatLng(e, t)), n && n()
					}, this.getElement = function () {
						return this.el
					}, this.zoomIn = function (e) {
						e = e || 1, this.zoom = this.map.getZoom() + e, this.map.setZoom(this.zoom)
					}, this.zoomOut = function (e) {
						e = e || 1, this.zoom = this.map.getZoom() - e, this.map.setZoom(this.zoom)
					};
					var H, P = [];
					for (H in this.map) "function" != typeof this.map[H] || this[H] || P.push(H);
					for (r = 0; r < P.length; r++) ! function (e, t, n) {
						e[n] = function () {
							return t[n].apply(t, arguments)
						}
					}(this, this.map, P[r])
				};
			return i
		}()).prototype.createControl = function (e) {
			var t = document.createElement("div");
			for (var n in t.style.cursor = "pointer", !0 !== e.disableDefaultStyles && (t.style.fontFamily = "Roboto, Arial, sans-serif", t.style.fontSize = "11px", t.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"), e.style) t.style[n] = e.style[n];
			for (var i in e.id && (t.id = e.id), e.title && (t.title = e.title), e.classes && (t.className = e.classes), e.content && ("string" == typeof e.content ? t.innerHTML = e.content : e.content instanceof HTMLElement && t.appendChild(e.content)), e.position && (t.position = google.maps.ControlPosition[e.position.toUpperCase()]), e.events) ! function (t, n) {
				google.maps.event.addDomListener(t, n, function () {
					e.events[n].apply(this, [this])
				})
			}(t, i);
			return t.index = 1, t
		}, c.prototype.addControl = function (e) {
			var t = this.createControl(e);
			return this.controls.push(t), this.map.controls[t.position].push(t), t
		}, c.prototype.removeControl = function (e) {
			var t, n = null;
			for (t = 0; t < this.controls.length; t++) this.controls[t] == e && (n = this.controls[t].position, this.controls.splice(t, 1));
			if (n)
				for (t = 0; t < this.map.controls.length; t++) {
					var i = this.map.controls[e.position];
					if (i.getAt(t) == e) {
						i.removeAt(t);
						break
					}
				}
			return e
		}, c.prototype.createMarker = function (e) {
			if (null == e.lat && null == e.lng && null == e.position) throw "No latitude or longitude defined.";
			var t = this,
				n = e.details,
				i = e.fences,
				r = e.outside,
				o = {
					position: new google.maps.LatLng(e.lat, e.lng),
					map: null
				},
				l = a(o, e);
			delete l.lat, delete l.lng, delete l.fences, delete l.outside;
			var s = new google.maps.Marker(l);
			if (s.fences = i, e.infoWindow) {
				s.infoWindow = new google.maps.InfoWindow(e.infoWindow);
				for (var d = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], u = 0; u < d.length; u++) ! function (t, n) {
					e.infoWindow[n] && google.maps.event.addListener(t, n, function (t) {
						e.infoWindow[n].apply(this, [t])
					})
				}(s.infoWindow, d[u])
			}
			var c = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"],
				h = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"];
			for (u = 0; u < c.length; u++) ! function (t, n) {
				e[n] && google.maps.event.addListener(t, n, function () {
					e[n].apply(this, [this])
				})
			}(s, c[u]);
			for (u = 0; u < h.length; u++) ! function (t, n, i) {
				e[i] && google.maps.event.addListener(n, i, function (n) {
					n.pixel || (n.pixel = t.getProjection().fromLatLngToPoint(n.latLng)), e[i].apply(this, [n])
				})
			}(this.map, s, h[u]);
			return google.maps.event.addListener(s, "click", function () {
				this.details = n, e.click && e.click.apply(this, [this]), s.infoWindow && (t.hideInfoWindows(), s.infoWindow.open(t.map, s))
			}), google.maps.event.addListener(s, "rightclick", function (n) {
				n.marker = this, e.rightclick && e.rightclick.apply(this, [n]), null != window.context_menu[t.el.id].marker && t.buildContextMenu("marker", n)
			}), s.fences && google.maps.event.addListener(s, "dragend", function () {
				t.checkMarkerGeofence(s, function (e, t) {
					r(e, t)
				})
			}), s
		}, c.prototype.addMarker = function (e) {
			var t;
			if (e.hasOwnProperty("gm_accessors_")) t = e;
			else {
				if (!(e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || e.position)) throw "No latitude or longitude defined.";
				t = this.createMarker(e)
			}
			return t.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(t), this.markers.push(t), c.fire("marker_added", t, this), t
		}, c.prototype.addMarkers = function (e) {
			for (var t, n = 0; t = e[n]; n++) this.addMarker(t);
			return this.markers
		}, c.prototype.hideInfoWindows = function () {
			for (var e, t = 0; e = this.markers[t]; t++) e.infoWindow && e.infoWindow.close()
		}, c.prototype.removeMarker = function (e) {
			for (var t = 0; t < this.markers.length; t++)
				if (this.markers[t] === e) {
					this.markers[t].setMap(null), this.markers.splice(t, 1), this.markerClusterer && this.markerClusterer.removeMarker(e), c.fire("marker_removed", e, this);
					break
				}
			return e
		}, c.prototype.removeMarkers = function (e) {
			var t = [];
			if (void 0 === e) {
				for (var n = 0; n < this.markers.length; n++)(r = this.markers[n]).setMap(null), c.fire("marker_removed", r, this);
				this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = t
			} else {
				for (n = 0; n < e.length; n++) {
					var i = this.markers.indexOf(e[n]);
					i > -1 && ((r = this.markers[i]).setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(r), c.fire("marker_removed", r, this))
				}
				for (n = 0; n < this.markers.length; n++) {
					var r;
					null != (r = this.markers[n]).getMap() && t.push(r)
				}
				this.markers = t
			}
		}, c.prototype.drawOverlay = function (e) {
			var t = new google.maps.OverlayView,
				n = !0;
			return t.setMap(this.map), null != e.auto_show && (n = e.auto_show), t.onAdd = function () {
				var n = document.createElement("div");
				n.style.borderStyle = "none", n.style.borderWidth = "0px", n.style.position = "absolute", n.style.zIndex = 100, n.innerHTML = e.content, t.el = n, e.layer || (e.layer = "overlayLayer");
				var i, r, a = this.getPanes(),
					o = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
				a[e.layer].appendChild(n);
				for (var l = 0; l < o.length; l++) i = n, r = o[l], google.maps.event.addDomListener(i, r, function (e) {
					-1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (e.cancelBubble = !0, e.returnValue = !1) : e.stopPropagation()
				});
				e.click && (a.overlayMouseTarget.appendChild(t.el), google.maps.event.addDomListener(t.el, "click", function () {
					e.click.apply(t, [t])
				})), google.maps.event.trigger(this, "ready")
			}, t.draw = function () {
				var i = this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(e.lat, e.lng));
				e.horizontalOffset = e.horizontalOffset || 0, e.verticalOffset = e.verticalOffset || 0;
				var r = t.el,
					a = r.children[0],
					o = a.clientHeight,
					l = a.clientWidth;
				switch (e.verticalAlign) {
					case "top":
						r.style.top = i.y - o + e.verticalOffset + "px";
						break;
					default:
					case "middle":
						r.style.top = i.y - o / 2 + e.verticalOffset + "px";
						break;
					case "bottom":
						r.style.top = i.y + e.verticalOffset + "px"
				}
				switch (e.horizontalAlign) {
					case "left":
						r.style.left = i.x - l + e.horizontalOffset + "px";
						break;
					default:
					case "center":
						r.style.left = i.x - l / 2 + e.horizontalOffset + "px";
						break;
					case "right":
						r.style.left = i.x + e.horizontalOffset + "px"
				}
				r.style.display = n ? "block" : "none", n || e.show.apply(this, [r])
			}, t.onRemove = function () {
				var n = t.el;
				e.remove ? e.remove.apply(this, [n]) : (t.el.parentNode.removeChild(t.el), t.el = null)
			}, this.overlays.push(t), t
		}, c.prototype.removeOverlay = function (e) {
			for (var t = 0; t < this.overlays.length; t++)
				if (this.overlays[t] === e) {
					this.overlays[t].setMap(null), this.overlays.splice(t, 1);
					break
				}
		}, c.prototype.removeOverlays = function () {
			for (var e, t = 0; e = this.overlays[t]; t++) e.setMap(null);
			this.overlays = []
		}, c.prototype.drawPolyline = function (e) {
			var t = [],
				n = e.path;
			if (n.length)
				if (void 0 === n[0][0]) t = n;
				else
					for (var i, r = 0; i = n[r]; r++) t.push(new google.maps.LatLng(i[0], i[1]));
			var a = {
				map: this.map,
				path: t,
				strokeColor: e.strokeColor,
				strokeOpacity: e.strokeOpacity,
				strokeWeight: e.strokeWeight,
				geodesic: e.geodesic,
				clickable: !0,
				editable: !1,
				visible: !0
			};
			e.hasOwnProperty("clickable") && (a.clickable = e.clickable), e.hasOwnProperty("editable") && (a.editable = e.editable), e.hasOwnProperty("icons") && (a.icons = e.icons), e.hasOwnProperty("zIndex") && (a.zIndex = e.zIndex);
			for (var o = new google.maps.Polyline(a), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], s = 0; s < l.length; s++) ! function (t, n) {
				e[n] && google.maps.event.addListener(t, n, function (t) {
					e[n].apply(this, [t])
				})
			}(o, l[s]);
			return this.polylines.push(o), c.fire("polyline_added", o, this), o
		}, c.prototype.removePolyline = function (e) {
			for (var t = 0; t < this.polylines.length; t++)
				if (this.polylines[t] === e) {
					this.polylines[t].setMap(null), this.polylines.splice(t, 1), c.fire("polyline_removed", e, this);
					break
				}
		}, c.prototype.removePolylines = function () {
			for (var e, t = 0; e = this.polylines[t]; t++) e.setMap(null);
			this.polylines = []
		}, c.prototype.drawCircle = function (e) {
			delete(e = a({
				map: this.map,
				center: new google.maps.LatLng(e.lat, e.lng)
			}, e)).lat, delete e.lng;
			for (var t = new google.maps.Circle(e), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], i = 0; i < n.length; i++) ! function (t, n) {
				e[n] && google.maps.event.addListener(t, n, function (t) {
					e[n].apply(this, [t])
				})
			}(t, n[i]);
			return this.polygons.push(t), t
		}, c.prototype.drawRectangle = function (e) {
			e = a({
				map: this.map
			}, e);
			var t = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
			e.bounds = t;
			for (var n = new google.maps.Rectangle(e), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < i.length; r++) ! function (t, n) {
				e[n] && google.maps.event.addListener(t, n, function (t) {
					e[n].apply(this, [t])
				})
			}(n, i[r]);
			return this.polygons.push(n), n
		}, c.prototype.drawPolygon = function (e) {
			var t = !1;
			e.hasOwnProperty("useGeoJSON") && (t = e.useGeoJSON), delete e.useGeoJSON, e = a({
				map: this.map
			}, e), 0 == t && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = l(o(e.paths, d, t)));
			for (var n = new google.maps.Polygon(e), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < i.length; r++) ! function (t, n) {
				e[n] && google.maps.event.addListener(t, n, function (t) {
					e[n].apply(this, [t])
				})
			}(n, i[r]);
			return this.polygons.push(n), c.fire("polygon_added", n, this), n
		}, c.prototype.removePolygon = function (e) {
			for (var t = 0; t < this.polygons.length; t++)
				if (this.polygons[t] === e) {
					this.polygons[t].setMap(null), this.polygons.splice(t, 1), c.fire("polygon_removed", e, this);
					break
				}
		}, c.prototype.removePolygons = function () {
			for (var e, t = 0; e = this.polygons[t]; t++) e.setMap(null);
			this.polygons = []
		}, c.prototype.getFromFusionTables = function (e) {
			var t = e.events;
			delete e.events;
			var n = e,
				i = new google.maps.FusionTablesLayer(n);
			for (var r in t) ! function (e, n) {
				google.maps.event.addListener(e, n, function (e) {
					t[n].apply(this, [e])
				})
			}(i, r);
			return this.layers.push(i), i
		}, c.prototype.loadFromFusionTables = function (e) {
			var t = this.getFromFusionTables(e);
			return t.setMap(this.map), t
		}, c.prototype.getFromKML = function (e) {
			var t = e.url,
				n = e.events;
			delete e.url, delete e.events;
			var i = e,
				r = new google.maps.KmlLayer(t, i);
			for (var a in n) ! function (e, t) {
				google.maps.event.addListener(e, t, function (e) {
					n[t].apply(this, [e])
				})
			}(r, a);
			return this.layers.push(r), r
		}, c.prototype.loadFromKML = function (e) {
			var t = this.getFromKML(e);
			return t.setMap(this.map), t
		}, c.prototype.addLayer = function (e, t) {
			var n;
			switch (t = t || {}, e) {
				case "weather":
					this.singleLayers.weather = n = new google.maps.weather.WeatherLayer;
					break;
				case "clouds":
					this.singleLayers.clouds = n = new google.maps.weather.CloudLayer;
					break;
				case "traffic":
					this.singleLayers.traffic = n = new google.maps.TrafficLayer;
					break;
				case "transit":
					this.singleLayers.transit = n = new google.maps.TransitLayer;
					break;
				case "bicycling":
					this.singleLayers.bicycling = n = new google.maps.BicyclingLayer;
					break;
				case "panoramio":
					this.singleLayers.panoramio = n = new google.maps.panoramio.PanoramioLayer, n.setTag(t.filter), delete t.filter, t.click && google.maps.event.addListener(n, "click", function (e) {
						t.click(e), delete t.click
					});
					break;
				case "places":
					if (this.singleLayers.places = n = new google.maps.places.PlacesService(this.map), t.search || t.nearbySearch || t.radarSearch) {
						var i = {
							bounds: t.bounds || null,
							keyword: t.keyword || null,
							location: t.location || null,
							name: t.name || null,
							radius: t.radius || null,
							rankBy: t.rankBy || null,
							types: t.types || null
						};
						t.radarSearch && n.radarSearch(i, t.radarSearch), t.search && n.search(i, t.search), t.nearbySearch && n.nearbySearch(i, t.nearbySearch)
					}
					if (t.textSearch) {
						var r = {
							bounds: t.bounds || null,
							location: t.location || null,
							query: t.query || null,
							radius: t.radius || null
						};
						n.textSearch(r, t.textSearch)
					}
			}
			if (void 0 !== n) return "function" == typeof n.setOptions && n.setOptions(t), "function" == typeof n.setMap && n.setMap(this.map), n
		}, c.prototype.removeLayer = function (e) {
			if ("string" == typeof e && void 0 !== this.singleLayers[e]) this.singleLayers[e].setMap(null), delete this.singleLayers[e];
			else
				for (var t = 0; t < this.layers.length; t++)
					if (this.layers[t] === e) {
						this.layers[t].setMap(null), this.layers.splice(t, 1);
						break
					}
		}, c.prototype.getRoutes = function (e) {
			switch (e.travelMode) {
				case "bicycling":
					i = google.maps.TravelMode.BICYCLING;
					break;
				case "transit":
					i = google.maps.TravelMode.TRANSIT;
					break;
				case "driving":
					i = google.maps.TravelMode.DRIVING;
					break;
				default:
					i = google.maps.TravelMode.WALKING
			}
			r = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
			var t = a({
				avoidHighways: !1,
				avoidTolls: !1,
				optimizeWaypoints: !1,
				waypoints: []
			}, e);
			t.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), t.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), t.travelMode = i, t.unitSystem = r, delete t.callback, delete t.error;
			var n = [];
			(new google.maps.DirectionsService).route(t, function (t, i) {
				if (i === google.maps.DirectionsStatus.OK) {
					for (var r in t.routes) t.routes.hasOwnProperty(r) && n.push(t.routes[r]);
					e.callback && e.callback(n, t, i)
				} else e.error && e.error(t, i)
			})
		}, c.prototype.removeRoutes = function () {
			this.routes.length = 0
		}, c.prototype.getElevations = function (e) {
			(e = a({
				locations: [],
				path: !1,
				samples: 256
			}, e)).locations.length > 0 && e.locations[0].length > 0 && (e.locations = l(o([e.locations], d, !1)));
			var t = e.callback;
			delete e.callback;
			var n = new google.maps.ElevationService;
			if (e.path) {
				var i = {
					path: e.locations,
					samples: e.samples
				};
				n.getElevationAlongPath(i, function (e, n) {
					t && "function" == typeof t && t(e, n)
				})
			} else delete e.path, delete e.samples, n.getElevationForLocations(e, function (e, n) {
				t && "function" == typeof t && t(e, n)
			})
		}, c.prototype.cleanRoute = c.prototype.removePolylines, c.prototype.renderRoute = function (e, t) {
			var n, i = "string" == typeof t.panel ? document.getElementById(t.panel.replace("#", "")) : t.panel;
			t.panel = i, t = a({
				map: this.map
			}, t), n = new google.maps.DirectionsRenderer(t), this.getRoutes({
				origin: e.origin,
				destination: e.destination,
				travelMode: e.travelMode,
				waypoints: e.waypoints,
				unitSystem: e.unitSystem,
				error: e.error,
				avoidHighways: e.avoidHighways,
				avoidTolls: e.avoidTolls,
				optimizeWaypoints: e.optimizeWaypoints,
				callback: function (e, t, i) {
					i === google.maps.DirectionsStatus.OK && n.setDirections(t)
				}
			})
		}, c.prototype.drawRoute = function (e) {
			var t = this;
			this.getRoutes({
				origin: e.origin,
				destination: e.destination,
				travelMode: e.travelMode,
				waypoints: e.waypoints,
				unitSystem: e.unitSystem,
				error: e.error,
				avoidHighways: e.avoidHighways,
				avoidTolls: e.avoidTolls,
				optimizeWaypoints: e.optimizeWaypoints,
				callback: function (n) {
					if (n.length > 0) {
						var i = {
							path: n[n.length - 1].overview_path,
							strokeColor: e.strokeColor,
							strokeOpacity: e.strokeOpacity,
							strokeWeight: e.strokeWeight
						};
						e.hasOwnProperty("icons") && (i.icons = e.icons), t.drawPolyline(i), e.callback && e.callback(n[n.length - 1])
					}
				}
			})
		}, c.prototype.travelRoute = function (e) {
			if (e.origin && e.destination) this.getRoutes({
				origin: e.origin,
				destination: e.destination,
				travelMode: e.travelMode,
				waypoints: e.waypoints,
				unitSystem: e.unitSystem,
				error: e.error,
				callback: function (t) {
					if (t.length > 0 && e.start && e.start(t[t.length - 1]), t.length > 0 && e.step) {
						var n = t[t.length - 1];
						if (n.legs.length > 0)
							for (var i, r = n.legs[0].steps, a = 0; i = r[a]; a++) i.step_number = a, e.step(i, n.legs[0].steps.length - 1)
					}
					t.length > 0 && e.end && e.end(t[t.length - 1])
				}
			});
			else if (e.route && e.route.legs.length > 0)
				for (var t, n = e.route.legs[0].steps, i = 0; t = n[i]; i++) t.step_number = i, e.step(t)
		}, c.prototype.drawSteppedRoute = function (e) {
			var t = this;
			if (e.origin && e.destination) this.getRoutes({
				origin: e.origin,
				destination: e.destination,
				travelMode: e.travelMode,
				waypoints: e.waypoints,
				error: e.error,
				callback: function (n) {
					if (n.length > 0 && e.start && e.start(n[n.length - 1]), n.length > 0 && e.step) {
						var i = n[n.length - 1];
						if (i.legs.length > 0)
							for (var r, a = i.legs[0].steps, o = 0; r = a[o]; o++) {
								r.step_number = o;
								var l = {
									path: r.path,
									strokeColor: e.strokeColor,
									strokeOpacity: e.strokeOpacity,
									strokeWeight: e.strokeWeight
								};
								e.hasOwnProperty("icons") && (l.icons = e.icons), t.drawPolyline(l), e.step(r, i.legs[0].steps.length - 1)
							}
					}
					n.length > 0 && e.end && e.end(n[n.length - 1])
				}
			});
			else if (e.route && e.route.legs.length > 0)
				for (var n, i = e.route.legs[0].steps, r = 0; n = i[r]; r++) {
					n.step_number = r;
					var a = {
						path: n.path,
						strokeColor: e.strokeColor,
						strokeOpacity: e.strokeOpacity,
						strokeWeight: e.strokeWeight
					};
					e.hasOwnProperty("icons") && (a.icons = e.icons), t.drawPolyline(a), e.step(n)
				}
		}, c.Route = function (e) {
			this.origin = e.origin, this.destination = e.destination, this.waypoints = e.waypoints, this.map = e.map, this.route = e.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
			var t = {
				path: new google.maps.MVCArray,
				strokeColor: e.strokeColor,
				strokeOpacity: e.strokeOpacity,
				strokeWeight: e.strokeWeight
			};
			e.hasOwnProperty("icons") && (t.icons = e.icons), this.polyline = this.map.drawPolyline(t).getPath()
		}, c.Route.prototype.getRoute = function (t) {
			var n = this;
			this.map.getRoutes({
				origin: this.origin,
				destination: this.destination,
				travelMode: t.travelMode,
				waypoints: this.waypoints || [],
				error: t.error,
				callback: function () {
					n.route = e[0], t.callback && t.callback.call(n)
				}
			})
		}, c.Route.prototype.back = function () {
			if (this.step_count > 0) {
				this.step_count--;
				var e = this.route.legs[0].steps[this.step_count].path;
				for (var t in e) e.hasOwnProperty(t) && this.polyline.pop()
			}
		}, c.Route.prototype.forward = function () {
			if (this.step_count < this.steps_length) {
				var e = this.route.legs[0].steps[this.step_count].path;
				for (var t in e) e.hasOwnProperty(t) && this.polyline.push(e[t]);
				this.step_count++
			}
		}, c.prototype.checkGeofence = function (e, t, n) {
			return n.containsLatLng(new google.maps.LatLng(e, t))
		}, c.prototype.checkMarkerGeofence = function (e, t) {
			if (e.fences)
				for (var n, i = 0; n = e.fences[i]; i++) {
					var r = e.getPosition();
					this.checkGeofence(r.lat(), r.lng(), n) || t(e, n)
				}
		}, c.prototype.toImage = function (e) {
			e = e || {};
			var t = {};
			if (t.size = e.size || [this.el.clientWidth, this.el.clientHeight], t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng(), this.markers.length > 0) {
				t.markers = [];
				for (var n = 0; n < this.markers.length; n++) t.markers.push({
					lat: this.markers[n].getPosition().lat(),
					lng: this.markers[n].getPosition().lng()
				})
			}
			if (this.polylines.length > 0) {
				var i = this.polylines[0];
				t.polyline = {}, t.polyline.path = google.maps.geometry.encoding.encodePath(i.getPath()), t.polyline.strokeColor = i.strokeColor, t.polyline.strokeOpacity = i.strokeOpacity, t.polyline.strokeWeight = i.strokeWeight
			}
			return c.staticMapURL(t)
		}, c.staticMapURL = function (e) {
			var t, n = [],
				i = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
			e.url && (i = e.url, delete e.url), i += "?";
			var r = e.markers;
			delete e.markers, !r && e.marker && (r = [e.marker], delete e.marker);
			var a = e.styles;
			delete e.styles;
			var o = e.polyline;
			if (delete e.polyline, e.center) n.push("center=" + e.center), delete e.center;
			else if (e.address) n.push("center=" + e.address), delete e.address;
			else if (e.lat) n.push(["center=", e.lat, ",", e.lng].join("")), delete e.lat, delete e.lng;
			else if (e.visible) {
				var l = encodeURI(e.visible.join("|"));
				n.push("visible=" + l)
			}
			var s = e.size;
			s ? (s.join && (s = s.join("x")), delete e.size) : s = "630x300", n.push("size=" + s), e.zoom || !1 === e.zoom || (e.zoom = 15);
			var d = !e.hasOwnProperty("sensor") || !!e.sensor;
			for (var u in delete e.sensor, n.push("sensor=" + d), e) e.hasOwnProperty(u) && n.push(u + "=" + e[u]);
			if (r)
				for (var c, h, p = 0; t = r[p]; p++) {
					for (var u in c = [], t.size && "normal" !== t.size ? (c.push("size:" + t.size), delete t.size) : t.icon && (c.push("icon:" + encodeURI(t.icon)), delete t.icon), t.color && (c.push("color:" + t.color.replace("#", "0x")), delete t.color), t.label && (c.push("label:" + t.label[0].toUpperCase()), delete t.label), h = t.address ? t.address : t.lat + "," + t.lng, delete t.address, delete t.lat, delete t.lng, t) t.hasOwnProperty(u) && c.push(u + ":" + t[u]);
					c.length || 0 === p ? (c.push(h), c = c.join("|"), n.push("markers=" + encodeURI(c))) : (c = n.pop() + encodeURI("|" + h), n.push(c))
				}
			if (a)
				for (p = 0; p < a.length; p++) {
					var f = [];
					a[p].featureType && f.push("feature:" + a[p].featureType.toLowerCase()), a[p].elementType && f.push("element:" + a[p].elementType.toLowerCase());
					for (var m = 0; m < a[p].stylers.length; m++)
						for (var g in a[p].stylers[m]) {
							var _ = a[p].stylers[m][g];
							"hue" != g && "color" != g || (_ = "0x" + _.substring(1)), f.push(g + ":" + _)
						}
					var y = f.join("|");
					"" != y && n.push("style=" + y)
				}

			function v(e, t) {
				if ("#" === e[0] && (e = e.replace("#", "0x"), t)) {
					if (t = parseFloat(t), 0 === (t = Math.min(1, Math.max(t, 0)))) return "0x00000000";
					1 === (t = (255 * t).toString(16)).length && (t += t), e = e.slice(0, 8) + t
				}
				return e
			}
			if (o) {
				if (t = o, o = [], t.strokeWeight && o.push("weight:" + parseInt(t.strokeWeight, 10)), t.strokeColor) {
					var M = v(t.strokeColor, t.strokeOpacity);
					o.push("color:" + M)
				}
				if (t.fillColor) {
					var b = v(t.fillColor, t.fillOpacity);
					o.push("fillcolor:" + b)
				}
				var w, L = t.path;
				if (L.join)
					for (m = 0; w = L[m]; m++) o.push(w.join(","));
				else o.push("enc:" + L);
				o = o.join("|"), n.push("path=" + encodeURI(o))
			}
			var D = window.devicePixelRatio || 1;
			return n.push("scale=" + D), i + (n = n.join("&"))
		}, c.prototype.addMapType = function (e, t) {
			if (!t.hasOwnProperty("getTileUrl") || "function" != typeof t.getTileUrl) throw "'getTileUrl' function required.";
			t.tileSize = t.tileSize || new google.maps.Size(256, 256);
			var n = new google.maps.ImageMapType(t);
			this.map.mapTypes.set(e, n)
		}, c.prototype.addOverlayMapType = function (e) {
			if (!e.hasOwnProperty("getTile") || "function" != typeof e.getTile) throw "'getTile' function required.";
			var t = e.index;
			delete e.index, this.map.overlayMapTypes.insertAt(t, e)
		}, c.prototype.removeOverlayMapType = function (e) {
			this.map.overlayMapTypes.removeAt(e)
		}, c.prototype.addStyle = function (e) {
			var t = new google.maps.StyledMapType(e.styles, {
				name: e.styledMapName
			});
			this.map.mapTypes.set(e.mapTypeId, t)
		}, c.prototype.setStyle = function (e) {
			this.map.setMapTypeId(e)
		}, c.prototype.createPanorama = function (e) {
			return e.hasOwnProperty("lat") && e.hasOwnProperty("lng") || (e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng()), this.panorama = c.createPanorama(e), this.map.setStreetView(this.panorama), this.panorama
		}, c.createPanorama = function (e) {
			var t = u(e.el, e.context);
			e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
			for (var n = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], i = a({
					visible: !0
				}, e), r = 0; r < n.length; r++) delete i[n[r]];
			var o = new google.maps.StreetViewPanorama(t, i);
			for (r = 0; r < n.length; r++) ! function (t, n) {
				e[n] && google.maps.event.addListener(t, n, function () {
					e[n].apply(this)
				})
			}(o, n[r]);
			return o
		}, c.prototype.on = function (e, t) {
			return c.on(e, this, t)
		}, c.prototype.off = function (e) {
			c.off(e, this)
		}, c.prototype.once = function (e, t) {
			return c.once(e, this, t)
		}, c.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], c.on = function (e, t, n) {
			if (-1 == c.custom_events.indexOf(e)) return t instanceof c && (t = t.map), google.maps.event.addListener(t, e, n);
			var i = {
				handler: n,
				eventName: e
			};
			return t.registered_events[e] = t.registered_events[e] || [], t.registered_events[e].push(i), i
		}, c.off = function (e, t) {
			-1 == c.custom_events.indexOf(e) ? (t instanceof c && (t = t.map), google.maps.event.clearListeners(t, e)) : t.registered_events[e] = []
		}, c.once = function (e, t, n) {
			if (-1 == c.custom_events.indexOf(e)) return t instanceof c && (t = t.map), google.maps.event.addListenerOnce(t, e, n)
		}, c.fire = function (e, t, n) {
			if (-1 == c.custom_events.indexOf(e)) google.maps.event.trigger(t, e, Array.prototype.slice.apply(arguments).slice(2));
			else if (e in n.registered_events)
				for (var i = n.registered_events[e], r = 0; r < i.length; r++) ! function (e, t, n) {
					e.apply(t, [n])
				}(i[r].handler, n, t)
		}, c.geolocate = function (e) {
			var t = e.always || e.complete;
			navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (n) {
				e.success(n), t && t()
			}, function (n) {
				e.error(n), t && t()
			}, e.options) : (e.not_supported(), t && t())
		}, c.geocode = function (e) {
			this.geocoder = new google.maps.Geocoder;
			var t = e.callback;
			e.hasOwnProperty("lat") && e.hasOwnProperty("lng") && (e.latLng = new google.maps.LatLng(e.lat, e.lng)), delete e.lat, delete e.lng, delete e.callback, this.geocoder.geocode(e, function (e, n) {
				t(e, n)
			})
		}, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function (e) {
			for (var t, n = new google.maps.LatLngBounds, i = this.getPaths(), r = 0; r < i.getLength(); r++) {
				t = i.getAt(r);
				for (var a = 0; a < t.getLength(); a++) n.extend(t.getAt(a))
			}
			return n
		}), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function (e) {
			var t = this.getBounds();
			if (null !== t && !t.contains(e)) return !1;
			for (var n = !1, i = this.getPaths().getLength(), r = 0; r < i; r++)
				for (var a = this.getPaths().getAt(r), o = a.getLength(), l = o - 1, s = 0; s < o; s++) {
					var d = a.getAt(s),
						u = a.getAt(l);
					(d.lng() < e.lng() && u.lng() >= e.lng() || u.lng() < e.lng() && d.lng() >= e.lng()) && d.lat() + (e.lng() - d.lng()) / (u.lng() - d.lng()) * (u.lat() - d.lat()) < e.lat() && (n = !n), l = s
				}
			return n
		}), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function (e) {
			return !google.maps.geometry || google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), e) <= this.getRadius()
		}), google.maps.Rectangle.prototype.containsLatLng = function (e) {
			return this.getBounds().contains(e)
		}, google.maps.LatLngBounds.prototype.containsLatLng = function (e) {
			return this.contains(e)
		}, google.maps.Marker.prototype.setFences = function (e) {
			this.fences = e
		}, google.maps.Marker.prototype.addFence = function (e) {
			this.fences.push(e)
		}, google.maps.Marker.prototype.getId = function () {
			return this.__gm_id
		}), Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
			if (null == this) throw new TypeError;
			var t = Object(this),
				n = t.length >>> 0;
			if (0 === n) return -1;
			var i = 0;
			if (arguments.length > 1 && ((i = Number(arguments[1])) != i ? i = 0 : 0 != i && i != 1 / 0 && i != -1 / 0 && (i = (i > 0 || -1) * Math.floor(Math.abs(i)))), i >= n) return -1;
			for (var r = i >= 0 ? i : Math.max(n - Math.abs(i), 0); r < n; r++)
				if (r in t && t[r] === e) return r;
			return -1
		}), c)
	}).call(this, i(1))
}, function (e, t, n) {
	n(147), n(152), n(153), n(155), n(156), n(160), e.exports = n(163)
}, function (e, t, n) {
	"use strict";
	n.r(t);
	var i = n(1),
		r = n.n(i);
	n(148), n(151), n(206);
	r()(document).ready(function () {
		setTimeout(function () {
			r()(".vertical-nav-menu").metisMenu()
		}, 100), r()(".search-icon").click(function () {
			r()(this).parent().parent().addClass("active")
		}), r()(".search-wrapper .close").click(function () {
			r()(this).parent().removeClass("active")
		}), r()(".dropdown-menu").on("click", function (e) {
			var t = r.a._data(document, "events") || {};
			t = t.click || [];
			for (var n = 0; n < t.length; n++) t[n].selector && (r()(e.target).is(t[n].selector) && t[n].handler.call(e.target, e), r()(e.target).parents(t[n].selector).each(function () {
				t[n].handler.call(this, e)
			}));
			e.stopPropagation()
		}), r()(function () {
			r()('[data-toggle="popover"]').popover()
		}), r()(function () {
			r()('[data-toggle="tooltip"]').tooltip()
		}), r()(".mobile-toggle-nav").click(function () {
			r()(this).toggleClass("is-active"), r()(".app-container").toggleClass("sidebar-mobile-open")
		}), r()(".mobile-toggle-header-nav").click(function () {
			r()(this).toggleClass("active"), r()(".app-header__content").toggleClass("header-mobile-open")
		}), r()(window).on("resize", function () {
			r()(this).width() < 1250 ? r()(".app-container").addClass("closed-sidebar-mobile closed-sidebar") : r()(".app-container").removeClass("closed-sidebar-mobile closed-sidebar")
		})
	})
}, function (e, t, n) {
	/*!
	 * Bootstrap v4.2.1 (https://getbootstrap.com/)
	 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 */
	! function (e, t, n) {
		"use strict";

		function i(e, t) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n];
				i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
			}
		}

		function r(e, t, n) {
			return t && i(e.prototype, t), n && i(e, n), e
		}

		function a(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function o(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {},
					i = Object.keys(n);
				"function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
					return Object.getOwnPropertyDescriptor(n, e).enumerable
				}))), i.forEach(function (t) {
					a(e, t, n[t])
				})
			}
			return e
		}
		t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
		var l = "transitionend";

		function s(e) {
			var t = this,
				i = !1;
			return n(this).one(d.TRANSITION_END, function () {
				i = !0
			}), setTimeout(function () {
				i || d.triggerTransitionEnd(t)
			}, e), this
		}
		var d = {
			TRANSITION_END: "bsTransitionEnd",
			getUID: function (e) {
				do {
					e += ~~(1e6 * Math.random())
				} while (document.getElementById(e));
				return e
			},
			getSelectorFromElement: function (e) {
				var t = e.getAttribute("data-target");
				if (!t || "#" === t) {
					var n = e.getAttribute("href");
					t = n && "#" !== n ? n.trim() : ""
				}
				return t && document.querySelector(t) ? t : null
			},
			getTransitionDurationFromElement: function (e) {
				if (!e) return 0;
				var t = n(e).css("transition-duration"),
					i = n(e).css("transition-delay"),
					r = parseFloat(t),
					a = parseFloat(i);
				return r || a ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(i))) : 0
			},
			reflow: function (e) {
				return e.offsetHeight
			},
			triggerTransitionEnd: function (e) {
				n(e).trigger(l)
			},
			supportsTransitionEnd: function () {
				return Boolean(l)
			},
			isElement: function (e) {
				return (e[0] || e).nodeType
			},
			typeCheckConfig: function (e, t, n) {
				for (var i in n)
					if (Object.prototype.hasOwnProperty.call(n, i)) {
						var r = n[i],
							a = t[i],
							o = a && d.isElement(a) ? "element" : (l = a, {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
						if (!new RegExp(r).test(o)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".')
					}
				var l
			},
			findShadowRoot: function (e) {
				if (!document.documentElement.attachShadow) return null;
				if ("function" == typeof e.getRootNode) {
					var t = e.getRootNode();
					return t instanceof ShadowRoot ? t : null
				}
				return e instanceof ShadowRoot ? e : e.parentNode ? d.findShadowRoot(e.parentNode) : null
			}
		};
		n.fn.emulateTransitionEnd = s, n.event.special[d.TRANSITION_END] = {
			bindType: l,
			delegateType: l,
			handle: function (e) {
				if (n(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		};
		var u = n.fn.alert,
			c = {
				CLOSE: "close.bs.alert",
				CLOSED: "closed.bs.alert",
				CLICK_DATA_API: "click.bs.alert.data-api"
			},
			h = {
				ALERT: "alert",
				FADE: "fade",
				SHOW: "show"
			},
			p = function () {
				function e(e) {
					this._element = e
				}
				var t = e.prototype;
				return t.close = function (e) {
					var t = this._element;
					e && (t = this._getRootElement(e));
					var n = this._triggerCloseEvent(t);
					n.isDefaultPrevented() || this._removeElement(t)
				}, t.dispose = function () {
					n.removeData(this._element, "bs.alert"), this._element = null
				}, t._getRootElement = function (e) {
					var t = d.getSelectorFromElement(e),
						i = !1;
					return t && (i = document.querySelector(t)), i || (i = n(e).closest("." + h.ALERT)[0]), i
				}, t._triggerCloseEvent = function (e) {
					var t = n.Event(c.CLOSE);
					return n(e).trigger(t), t
				}, t._removeElement = function (e) {
					var t = this;
					if (n(e).removeClass(h.SHOW), n(e).hasClass(h.FADE)) {
						var i = d.getTransitionDurationFromElement(e);
						n(e).one(d.TRANSITION_END, function (n) {
							return t._destroyElement(e, n)
						}).emulateTransitionEnd(i)
					} else this._destroyElement(e)
				}, t._destroyElement = function (e) {
					n(e).detach().trigger(c.CLOSED).remove()
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this),
							r = i.data("bs.alert");
						r || (r = new e(this), i.data("bs.alert", r)), "close" === t && r[t](this)
					})
				}, e._handleDismiss = function (e) {
					return function (t) {
						t && t.preventDefault(), e.close(this)
					}
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}]), e
			}();
		n(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), n.fn.alert = p._jQueryInterface, n.fn.alert.Constructor = p, n.fn.alert.noConflict = function () {
			return n.fn.alert = u, p._jQueryInterface
		};
		var f = n.fn.button,
			m = {
				ACTIVE: "active",
				BUTTON: "btn",
				FOCUS: "focus"
			},
			g = {
				DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
				DATA_TOGGLE: '[data-toggle="buttons"]',
				INPUT: 'input:not([type="hidden"])',
				ACTIVE: ".active",
				BUTTON: ".btn"
			},
			_ = {
				CLICK_DATA_API: "click.bs.button.data-api",
				FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
			},
			y = function () {
				function e(e) {
					this._element = e
				}
				var t = e.prototype;
				return t.toggle = function () {
					var e = !0,
						t = !0,
						i = n(this._element).closest(g.DATA_TOGGLE)[0];
					if (i) {
						var r = this._element.querySelector(g.INPUT);
						if (r) {
							if ("radio" === r.type)
								if (r.checked && this._element.classList.contains(m.ACTIVE)) e = !1;
								else {
									var a = i.querySelector(g.ACTIVE);
									a && n(a).removeClass(m.ACTIVE)
								}
							if (e) {
								if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled")) return;
								r.checked = !this._element.classList.contains(m.ACTIVE), n(r).trigger("change")
							}
							r.focus(), t = !1
						}
					}
					t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(m.ACTIVE)), e && n(this._element).toggleClass(m.ACTIVE)
				}, t.dispose = function () {
					n.removeData(this._element, "bs.button"), this._element = null
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this).data("bs.button");
						i || (i = new e(this), n(this).data("bs.button", i)), "toggle" === t && i[t]()
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}]), e
			}();
		n(document).on(_.CLICK_DATA_API, g.DATA_TOGGLE_CARROT, function (e) {
			e.preventDefault();
			var t = e.target;
			n(t).hasClass(m.BUTTON) || (t = n(t).closest(g.BUTTON)), y._jQueryInterface.call(n(t), "toggle")
		}).on(_.FOCUS_BLUR_DATA_API, g.DATA_TOGGLE_CARROT, function (e) {
			var t = n(e.target).closest(g.BUTTON)[0];
			n(t).toggleClass(m.FOCUS, /^focus(in)?$/.test(e.type))
		}), n.fn.button = y._jQueryInterface, n.fn.button.Constructor = y, n.fn.button.noConflict = function () {
			return n.fn.button = f, y._jQueryInterface
		};
		var v = "carousel",
			M = ".bs.carousel",
			b = n.fn[v],
			w = {
				interval: 5e3,
				keyboard: !0,
				slide: !1,
				pause: "hover",
				wrap: !0,
				touch: !0
			},
			L = {
				interval: "(number|boolean)",
				keyboard: "boolean",
				slide: "(boolean|string)",
				pause: "(string|boolean)",
				wrap: "boolean",
				touch: "boolean"
			},
			D = {
				NEXT: "next",
				PREV: "prev",
				LEFT: "left",
				RIGHT: "right"
			},
			T = {
				SLIDE: "slide.bs.carousel",
				SLID: "slid.bs.carousel",
				KEYDOWN: "keydown.bs.carousel",
				MOUSEENTER: "mouseenter.bs.carousel",
				MOUSELEAVE: "mouseleave.bs.carousel",
				TOUCHSTART: "touchstart.bs.carousel",
				TOUCHMOVE: "touchmove.bs.carousel",
				TOUCHEND: "touchend.bs.carousel",
				POINTERDOWN: "pointerdown.bs.carousel",
				POINTERUP: "pointerup.bs.carousel",
				DRAG_START: "dragstart.bs.carousel",
				LOAD_DATA_API: "load.bs.carousel.data-api",
				CLICK_DATA_API: "click.bs.carousel.data-api"
			},
			k = {
				CAROUSEL: "carousel",
				ACTIVE: "active",
				SLIDE: "slide",
				RIGHT: "carousel-item-right",
				LEFT: "carousel-item-left",
				NEXT: "carousel-item-next",
				PREV: "carousel-item-prev",
				ITEM: "carousel-item",
				POINTER_EVENT: "pointer-event"
			},
			S = {
				ACTIVE: ".active",
				ACTIVE_ITEM: ".active.carousel-item",
				ITEM: ".carousel-item",
				ITEM_IMG: ".carousel-item img",
				NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
				INDICATORS: ".carousel-indicators",
				DATA_SLIDE: "[data-slide], [data-slide-to]",
				DATA_RIDE: '[data-ride="carousel"]'
			},
			x = {
				TOUCH: "touch",
				PEN: "pen"
			},
			Y = function () {
				function e(e, t) {
					this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(S.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
				}
				var t = e.prototype;
				return t.next = function () {
					this._isSliding || this._slide(D.NEXT)
				}, t.nextWhenVisible = function () {
					!document.hidden && n(this._element).is(":visible") && "hidden" !== n(this._element).css("visibility") && this.next()
				}, t.prev = function () {
					this._isSliding || this._slide(D.PREV)
				}, t.pause = function (e) {
					e || (this._isPaused = !0), this._element.querySelector(S.NEXT_PREV) && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
				}, t.cycle = function (e) {
					e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
				}, t.to = function (e) {
					var t = this;
					this._activeElement = this._element.querySelector(S.ACTIVE_ITEM);
					var i = this._getItemIndex(this._activeElement);
					if (!(e > this._items.length - 1 || e < 0))
						if (this._isSliding) n(this._element).one(T.SLID, function () {
							return t.to(e)
						});
						else {
							if (i === e) return this.pause(), void this.cycle();
							var r = e > i ? D.NEXT : D.PREV;
							this._slide(r, this._items[e])
						}
				}, t.dispose = function () {
					n(this._element).off(M), n.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
				}, t._getConfig = function (e) {
					return e = o({}, w, e), d.typeCheckConfig(v, e, L), e
				}, t._handleSwipe = function () {
					var e = Math.abs(this.touchDeltaX);
					if (!(e <= 40)) {
						var t = e / this.touchDeltaX;
						t > 0 && this.prev(), t < 0 && this.next()
					}
				}, t._addEventListeners = function () {
					var e = this;
					this._config.keyboard && n(this._element).on(T.KEYDOWN, function (t) {
						return e._keydown(t)
					}), "hover" === this._config.pause && n(this._element).on(T.MOUSEENTER, function (t) {
						return e.pause(t)
					}).on(T.MOUSELEAVE, function (t) {
						return e.cycle(t)
					}), this._addTouchEventListeners()
				}, t._addTouchEventListeners = function () {
					var e = this;
					if (this._touchSupported) {
						var t = function (t) {
								e._pointerEvent && x[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
							},
							i = function (t) {
								e._pointerEvent && x[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
									return e.cycle(t)
								}, 500 + e._config.interval))
							};
						n(this._element.querySelectorAll(S.ITEM_IMG)).on(T.DRAG_START, function (e) {
							return e.preventDefault()
						}), this._pointerEvent ? (n(this._element).on(T.POINTERDOWN, function (e) {
							return t(e)
						}), n(this._element).on(T.POINTERUP, function (e) {
							return i(e)
						}), this._element.classList.add(k.POINTER_EVENT)) : (n(this._element).on(T.TOUCHSTART, function (e) {
							return t(e)
						}), n(this._element).on(T.TOUCHMOVE, function (t) {
							return function (t) {
								t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
							}(t)
						}), n(this._element).on(T.TOUCHEND, function (e) {
							return i(e)
						}))
					}
				}, t._keydown = function (e) {
					if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
						case 37:
							e.preventDefault(), this.prev();
							break;
						case 39:
							e.preventDefault(), this.next()
					}
				}, t._getItemIndex = function (e) {
					return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(S.ITEM)) : [], this._items.indexOf(e)
				}, t._getItemByDirection = function (e, t) {
					var n = e === D.NEXT,
						i = e === D.PREV,
						r = this._getItemIndex(t),
						a = this._items.length - 1,
						o = i && 0 === r || n && r === a;
					if (o && !this._config.wrap) return t;
					var l = e === D.PREV ? -1 : 1,
						s = (r + l) % this._items.length;
					return -1 === s ? this._items[this._items.length - 1] : this._items[s]
				}, t._triggerSlideEvent = function (e, t) {
					var i = this._getItemIndex(e),
						r = this._getItemIndex(this._element.querySelector(S.ACTIVE_ITEM)),
						a = n.Event(T.SLIDE, {
							relatedTarget: e,
							direction: t,
							from: r,
							to: i
						});
					return n(this._element).trigger(a), a
				}, t._setActiveIndicatorElement = function (e) {
					if (this._indicatorsElement) {
						var t = [].slice.call(this._indicatorsElement.querySelectorAll(S.ACTIVE));
						n(t).removeClass(k.ACTIVE);
						var i = this._indicatorsElement.children[this._getItemIndex(e)];
						i && n(i).addClass(k.ACTIVE)
					}
				}, t._slide = function (e, t) {
					var i, r, a, o = this,
						l = this._element.querySelector(S.ACTIVE_ITEM),
						s = this._getItemIndex(l),
						u = t || l && this._getItemByDirection(e, l),
						c = this._getItemIndex(u),
						h = Boolean(this._interval);
					if (e === D.NEXT ? (i = k.LEFT, r = k.NEXT, a = D.LEFT) : (i = k.RIGHT, r = k.PREV, a = D.RIGHT), u && n(u).hasClass(k.ACTIVE)) this._isSliding = !1;
					else {
						var p = this._triggerSlideEvent(u, a);
						if (!p.isDefaultPrevented() && l && u) {
							this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
							var f = n.Event(T.SLID, {
								relatedTarget: u,
								direction: a,
								from: s,
								to: c
							});
							if (n(this._element).hasClass(k.SLIDE)) {
								n(u).addClass(r), d.reflow(u), n(l).addClass(i), n(u).addClass(i);
								var m = parseInt(u.getAttribute("data-interval"), 10);
								m ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = m) : this._config.interval = this._config.defaultInterval || this._config.interval;
								var g = d.getTransitionDurationFromElement(l);
								n(l).one(d.TRANSITION_END, function () {
									n(u).removeClass(i + " " + r).addClass(k.ACTIVE), n(l).removeClass(k.ACTIVE + " " + r + " " + i), o._isSliding = !1, setTimeout(function () {
										return n(o._element).trigger(f)
									}, 0)
								}).emulateTransitionEnd(g)
							} else n(l).removeClass(k.ACTIVE), n(u).addClass(k.ACTIVE), this._isSliding = !1, n(this._element).trigger(f);
							h && this.cycle()
						}
					}
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this).data("bs.carousel"),
							r = o({}, w, n(this).data());
						"object" == typeof t && (r = o({}, r, t));
						var a = "string" == typeof t ? t : r.slide;
						if (i || (i = new e(this, r), n(this).data("bs.carousel", i)), "number" == typeof t) i.to(t);
						else if ("string" == typeof a) {
							if (void 0 === i[a]) throw new TypeError('No method named "' + a + '"');
							i[a]()
						} else r.interval && (i.pause(), i.cycle())
					})
				}, e._dataApiClickHandler = function (t) {
					var i = d.getSelectorFromElement(this);
					if (i) {
						var r = n(i)[0];
						if (r && n(r).hasClass(k.CAROUSEL)) {
							var a = o({}, n(r).data(), n(this).data()),
								l = this.getAttribute("data-slide-to");
							l && (a.interval = !1), e._jQueryInterface.call(n(r), a), l && n(r).data("bs.carousel").to(l), t.preventDefault()
						}
					}
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return w
					}
				}]), e
			}();
		n(document).on(T.CLICK_DATA_API, S.DATA_SLIDE, Y._dataApiClickHandler), n(window).on(T.LOAD_DATA_API, function () {
			for (var e = [].slice.call(document.querySelectorAll(S.DATA_RIDE)), t = 0, i = e.length; t < i; t++) {
				var r = n(e[t]);
				Y._jQueryInterface.call(r, r.data())
			}
		}), n.fn[v] = Y._jQueryInterface, n.fn[v].Constructor = Y, n.fn[v].noConflict = function () {
			return n.fn[v] = b, Y._jQueryInterface
		};
		var E = "collapse",
			C = n.fn[E],
			H = {
				toggle: !0,
				parent: ""
			},
			P = {
				toggle: "boolean",
				parent: "(string|element)"
			},
			O = {
				SHOW: "show.bs.collapse",
				SHOWN: "shown.bs.collapse",
				HIDE: "hide.bs.collapse",
				HIDDEN: "hidden.bs.collapse",
				CLICK_DATA_API: "click.bs.collapse.data-api"
			},
			A = {
				SHOW: "show",
				COLLAPSE: "collapse",
				COLLAPSING: "collapsing",
				COLLAPSED: "collapsed"
			},
			I = {
				WIDTH: "width",
				HEIGHT: "height"
			},
			R = {
				ACTIVES: ".show, .collapsing",
				DATA_TOGGLE: '[data-toggle="collapse"]'
			},
			j = function () {
				function e(e, t) {
					this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
					for (var n = [].slice.call(document.querySelectorAll(R.DATA_TOGGLE)), i = 0, r = n.length; i < r; i++) {
						var a = n[i],
							o = d.getSelectorFromElement(a),
							l = [].slice.call(document.querySelectorAll(o)).filter(function (t) {
								return t === e
							});
						null !== o && l.length > 0 && (this._selector = o, this._triggerArray.push(a))
					}
					this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
				}
				var t = e.prototype;
				return t.toggle = function () {
					n(this._element).hasClass(A.SHOW) ? this.hide() : this.show()
				}, t.show = function () {
					var t, i, r = this;
					if (!(this._isTransitioning || n(this._element).hasClass(A.SHOW) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(R.ACTIVES)).filter(function (e) {
							return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(A.COLLAPSE)
						})).length && (t = null), t && (i = n(t).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
						var a = n.Event(O.SHOW);
						if (n(this._element).trigger(a), !a.isDefaultPrevented()) {
							t && (e._jQueryInterface.call(n(t).not(this._selector), "hide"), i || n(t).data("bs.collapse", null));
							var o = this._getDimension();
							n(this._element).removeClass(A.COLLAPSE).addClass(A.COLLAPSING), this._element.style[o] = 0, this._triggerArray.length && n(this._triggerArray).removeClass(A.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
							var l = o[0].toUpperCase() + o.slice(1),
								s = "scroll" + l,
								u = d.getTransitionDurationFromElement(this._element);
							n(this._element).one(d.TRANSITION_END, function () {
								n(r._element).removeClass(A.COLLAPSING).addClass(A.COLLAPSE).addClass(A.SHOW), r._element.style[o] = "", r.setTransitioning(!1), n(r._element).trigger(O.SHOWN)
							}).emulateTransitionEnd(u), this._element.style[o] = this._element[s] + "px"
						}
					}
				}, t.hide = function () {
					var e = this;
					if (!this._isTransitioning && n(this._element).hasClass(A.SHOW)) {
						var t = n.Event(O.HIDE);
						if (n(this._element).trigger(t), !t.isDefaultPrevented()) {
							var i = this._getDimension();
							this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", d.reflow(this._element), n(this._element).addClass(A.COLLAPSING).removeClass(A.COLLAPSE).removeClass(A.SHOW);
							var r = this._triggerArray.length;
							if (r > 0)
								for (var a = 0; a < r; a++) {
									var o = this._triggerArray[a],
										l = d.getSelectorFromElement(o);
									if (null !== l) {
										var s = n([].slice.call(document.querySelectorAll(l)));
										s.hasClass(A.SHOW) || n(o).addClass(A.COLLAPSED).attr("aria-expanded", !1)
									}
								}
							this.setTransitioning(!0), this._element.style[i] = "";
							var u = d.getTransitionDurationFromElement(this._element);
							n(this._element).one(d.TRANSITION_END, function () {
								e.setTransitioning(!1), n(e._element).removeClass(A.COLLAPSING).addClass(A.COLLAPSE).trigger(O.HIDDEN)
							}).emulateTransitionEnd(u)
						}
					}
				}, t.setTransitioning = function (e) {
					this._isTransitioning = e
				}, t.dispose = function () {
					n.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
				}, t._getConfig = function (e) {
					return (e = o({}, H, e)).toggle = Boolean(e.toggle), d.typeCheckConfig(E, e, P), e
				}, t._getDimension = function () {
					var e = n(this._element).hasClass(I.WIDTH);
					return e ? I.WIDTH : I.HEIGHT
				}, t._getParent = function () {
					var t, i = this;
					d.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
					var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
						a = [].slice.call(t.querySelectorAll(r));
					return n(a).each(function (t, n) {
						i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
					}), t
				}, t._addAriaAndCollapsedClass = function (e, t) {
					var i = n(e).hasClass(A.SHOW);
					t.length && n(t).toggleClass(A.COLLAPSED, !i).attr("aria-expanded", i)
				}, e._getTargetFromElement = function (e) {
					var t = d.getSelectorFromElement(e);
					return t ? document.querySelector(t) : null
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this),
							r = i.data("bs.collapse"),
							a = o({}, H, i.data(), "object" == typeof t && t ? t : {});
						if (!r && a.toggle && /show|hide/.test(t) && (a.toggle = !1), r || (r = new e(this, a), i.data("bs.collapse", r)), "string" == typeof t) {
							if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
							r[t]()
						}
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return H
					}
				}]), e
			}();
		n(document).on(O.CLICK_DATA_API, R.DATA_TOGGLE, function (e) {
			"A" === e.currentTarget.tagName && e.preventDefault();
			var t = n(this),
				i = d.getSelectorFromElement(this),
				r = [].slice.call(document.querySelectorAll(i));
			n(r).each(function () {
				var e = n(this),
					i = e.data("bs.collapse"),
					r = i ? "toggle" : t.data();
				j._jQueryInterface.call(e, r)
			})
		}), n.fn[E] = j._jQueryInterface, n.fn[E].Constructor = j, n.fn[E].noConflict = function () {
			return n.fn[E] = C, j._jQueryInterface
		};
		var F = "dropdown",
			N = n.fn[F],
			W = new RegExp("38|40|27"),
			z = {
				HIDE: "hide.bs.dropdown",
				HIDDEN: "hidden.bs.dropdown",
				SHOW: "show.bs.dropdown",
				SHOWN: "shown.bs.dropdown",
				CLICK: "click.bs.dropdown",
				CLICK_DATA_API: "click.bs.dropdown.data-api",
				KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
				KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
			},
			B = {
				DISABLED: "disabled",
				SHOW: "show",
				DROPUP: "dropup",
				DROPRIGHT: "dropright",
				DROPLEFT: "dropleft",
				MENURIGHT: "dropdown-menu-right",
				MENULEFT: "dropdown-menu-left",
				POSITION_STATIC: "position-static"
			},
			V = {
				DATA_TOGGLE: '[data-toggle="dropdown"]',
				FORM_CHILD: ".dropdown form",
				MENU: ".dropdown-menu",
				NAVBAR_NAV: ".navbar-nav",
				VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
			},
			G = {
				TOP: "top-start",
				TOPEND: "top-end",
				BOTTOM: "bottom-start",
				BOTTOMEND: "bottom-end",
				RIGHT: "right-start",
				RIGHTEND: "right-end",
				LEFT: "left-start",
				LEFTEND: "left-end"
			},
			U = {
				offset: 0,
				flip: !0,
				boundary: "scrollParent",
				reference: "toggle",
				display: "dynamic"
			},
			Z = {
				offset: "(number|string|function)",
				flip: "boolean",
				boundary: "(string|element)",
				reference: "(string|element)",
				display: "string"
			},
			q = function () {
				function e(e, t) {
					this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
				}
				var i = e.prototype;
				return i.toggle = function () {
					if (!this._element.disabled && !n(this._element).hasClass(B.DISABLED)) {
						var i = e._getParentFromElement(this._element),
							r = n(this._menu).hasClass(B.SHOW);
						if (e._clearMenus(), !r) {
							var a = {
									relatedTarget: this._element
								},
								o = n.Event(z.SHOW, a);
							if (n(i).trigger(o), !o.isDefaultPrevented()) {
								if (!this._inNavbar) {
									if (void 0 === t) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
									var l = this._element;
									"parent" === this._config.reference ? l = i : d.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && n(i).addClass(B.POSITION_STATIC), this._popper = new t(l, this._menu, this._getPopperConfig())
								}
								"ontouchstart" in document.documentElement && 0 === n(i).closest(V.NAVBAR_NAV).length && n(document.body).children().on("mouseover", null, n.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), n(this._menu).toggleClass(B.SHOW), n(i).toggleClass(B.SHOW).trigger(n.Event(z.SHOWN, a))
							}
						}
					}
				}, i.show = function () {
					if (!(this._element.disabled || n(this._element).hasClass(B.DISABLED) || n(this._menu).hasClass(B.SHOW))) {
						var t = {
								relatedTarget: this._element
							},
							i = n.Event(z.SHOW, t),
							r = e._getParentFromElement(this._element);
						n(r).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(B.SHOW), n(r).toggleClass(B.SHOW).trigger(n.Event(z.SHOWN, t)))
					}
				}, i.hide = function () {
					if (!this._element.disabled && !n(this._element).hasClass(B.DISABLED) && n(this._menu).hasClass(B.SHOW)) {
						var t = {
								relatedTarget: this._element
							},
							i = n.Event(z.HIDE, t),
							r = e._getParentFromElement(this._element);
						n(r).trigger(i), i.isDefaultPrevented() || (n(this._menu).toggleClass(B.SHOW), n(r).toggleClass(B.SHOW).trigger(n.Event(z.HIDDEN, t)))
					}
				}, i.dispose = function () {
					n.removeData(this._element, "bs.dropdown"), n(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
				}, i.update = function () {
					this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
				}, i._addEventListeners = function () {
					var e = this;
					n(this._element).on(z.CLICK, function (t) {
						t.preventDefault(), t.stopPropagation(), e.toggle()
					})
				}, i._getConfig = function (e) {
					return e = o({}, this.constructor.Default, n(this._element).data(), e), d.typeCheckConfig(F, e, this.constructor.DefaultType), e
				}, i._getMenuElement = function () {
					if (!this._menu) {
						var t = e._getParentFromElement(this._element);
						t && (this._menu = t.querySelector(V.MENU))
					}
					return this._menu
				}, i._getPlacement = function () {
					var e = n(this._element.parentNode),
						t = G.BOTTOM;
					return e.hasClass(B.DROPUP) ? (t = G.TOP, n(this._menu).hasClass(B.MENURIGHT) && (t = G.TOPEND)) : e.hasClass(B.DROPRIGHT) ? t = G.RIGHT : e.hasClass(B.DROPLEFT) ? t = G.LEFT : n(this._menu).hasClass(B.MENURIGHT) && (t = G.BOTTOMEND), t
				}, i._detectNavbar = function () {
					return n(this._element).closest(".navbar").length > 0
				}, i._getPopperConfig = function () {
					var e = this,
						t = {};
					"function" == typeof this._config.offset ? t.fn = function (t) {
						return t.offsets = o({}, t.offsets, e._config.offset(t.offsets) || {}), t
					} : t.offset = this._config.offset;
					var n = {
						placement: this._getPlacement(),
						modifiers: {
							offset: t,
							flip: {
								enabled: this._config.flip
							},
							preventOverflow: {
								boundariesElement: this._config.boundary
							}
						}
					};
					return "static" === this._config.display && (n.modifiers.applyStyle = {
						enabled: !1
					}), n
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this).data("bs.dropdown"),
							r = "object" == typeof t ? t : null;
						if (i || (i = new e(this, r), n(this).data("bs.dropdown", i)), "string" == typeof t) {
							if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
							i[t]()
						}
					})
				}, e._clearMenus = function (t) {
					if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
						for (var i = [].slice.call(document.querySelectorAll(V.DATA_TOGGLE)), r = 0, a = i.length; r < a; r++) {
							var o = e._getParentFromElement(i[r]),
								l = n(i[r]).data("bs.dropdown"),
								s = {
									relatedTarget: i[r]
								};
							if (t && "click" === t.type && (s.clickEvent = t), l) {
								var d = l._menu;
								if (n(o).hasClass(B.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && n.contains(o, t.target))) {
									var u = n.Event(z.HIDE, s);
									n(o).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), i[r].setAttribute("aria-expanded", "false"), n(d).removeClass(B.SHOW), n(o).removeClass(B.SHOW).trigger(n.Event(z.HIDDEN, s)))
								}
							}
						}
				}, e._getParentFromElement = function (e) {
					var t, n = d.getSelectorFromElement(e);
					return n && (t = document.querySelector(n)), t || e.parentNode
				}, e._dataApiKeydownHandler = function (t) {
					if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || n(t.target).closest(V.MENU).length)) : W.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !n(this).hasClass(B.DISABLED))) {
						var i = e._getParentFromElement(this),
							r = n(i).hasClass(B.SHOW);
						if (r && (!r || 27 !== t.which && 32 !== t.which)) {
							var a = [].slice.call(i.querySelectorAll(V.VISIBLE_ITEMS));
							if (0 !== a.length) {
								var o = a.indexOf(t.target);
								38 === t.which && o > 0 && o--, 40 === t.which && o < a.length - 1 && o++, o < 0 && (o = 0), a[o].focus()
							}
						} else {
							if (27 === t.which) {
								var l = i.querySelector(V.DATA_TOGGLE);
								n(l).trigger("focus")
							}
							n(this).trigger("click")
						}
					}
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return U
					}
				}, {
					key: "DefaultType",
					get: function () {
						return Z
					}
				}]), e
			}();
		n(document).on(z.KEYDOWN_DATA_API, V.DATA_TOGGLE, q._dataApiKeydownHandler).on(z.KEYDOWN_DATA_API, V.MENU, q._dataApiKeydownHandler).on(z.CLICK_DATA_API + " " + z.KEYUP_DATA_API, q._clearMenus).on(z.CLICK_DATA_API, V.DATA_TOGGLE, function (e) {
			e.preventDefault(), e.stopPropagation(), q._jQueryInterface.call(n(this), "toggle")
		}).on(z.CLICK_DATA_API, V.FORM_CHILD, function (e) {
			e.stopPropagation()
		}), n.fn[F] = q._jQueryInterface, n.fn[F].Constructor = q, n.fn[F].noConflict = function () {
			return n.fn[F] = N, q._jQueryInterface
		};
		var X = n.fn.modal,
			J = {
				backdrop: !0,
				keyboard: !0,
				focus: !0,
				show: !0
			},
			$ = {
				backdrop: "(boolean|string)",
				keyboard: "boolean",
				focus: "boolean",
				show: "boolean"
			},
			K = {
				HIDE: "hide.bs.modal",
				HIDDEN: "hidden.bs.modal",
				SHOW: "show.bs.modal",
				SHOWN: "shown.bs.modal",
				FOCUSIN: "focusin.bs.modal",
				RESIZE: "resize.bs.modal",
				CLICK_DISMISS: "click.dismiss.bs.modal",
				KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
				MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
				MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
				CLICK_DATA_API: "click.bs.modal.data-api"
			},
			Q = {
				SCROLLBAR_MEASURER: "modal-scrollbar-measure",
				BACKDROP: "modal-backdrop",
				OPEN: "modal-open",
				FADE: "fade",
				SHOW: "show"
			},
			ee = {
				DIALOG: ".modal-dialog",
				DATA_TOGGLE: '[data-toggle="modal"]',
				DATA_DISMISS: '[data-dismiss="modal"]',
				FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
				STICKY_CONTENT: ".sticky-top"
			},
			te = function () {
				function e(e, t) {
					this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(ee.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
				}
				var t = e.prototype;
				return t.toggle = function (e) {
					return this._isShown ? this.hide() : this.show(e)
				}, t.show = function (e) {
					var t = this;
					if (!this._isShown && !this._isTransitioning) {
						n(this._element).hasClass(Q.FADE) && (this._isTransitioning = !0);
						var i = n.Event(K.SHOW, {
							relatedTarget: e
						});
						n(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), n(this._element).on(K.CLICK_DISMISS, ee.DATA_DISMISS, function (e) {
							return t.hide(e)
						}), n(this._dialog).on(K.MOUSEDOWN_DISMISS, function () {
							n(t._element).one(K.MOUSEUP_DISMISS, function (e) {
								n(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
							})
						}), this._showBackdrop(function () {
							return t._showElement(e)
						}))
					}
				}, t.hide = function (e) {
					var t = this;
					if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
						var i = n.Event(K.HIDE);
						if (n(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
							this._isShown = !1;
							var r = n(this._element).hasClass(Q.FADE);
							if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), n(document).off(K.FOCUSIN), n(this._element).removeClass(Q.SHOW), n(this._element).off(K.CLICK_DISMISS), n(this._dialog).off(K.MOUSEDOWN_DISMISS), r) {
								var a = d.getTransitionDurationFromElement(this._element);
								n(this._element).one(d.TRANSITION_END, function (e) {
									return t._hideModal(e)
								}).emulateTransitionEnd(a)
							} else this._hideModal()
						}
					}
				}, t.dispose = function () {
					[window, this._element, this._dialog].forEach(function (e) {
						return n(e).off(".bs.modal")
					}), n(document).off(K.FOCUSIN), n.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
				}, t.handleUpdate = function () {
					this._adjustDialog()
				}, t._getConfig = function (e) {
					return e = o({}, J, e), d.typeCheckConfig("modal", e, $), e
				}, t._showElement = function (e) {
					var t = this,
						i = n(this._element).hasClass(Q.FADE);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, i && d.reflow(this._element), n(this._element).addClass(Q.SHOW), this._config.focus && this._enforceFocus();
					var r = n.Event(K.SHOWN, {
							relatedTarget: e
						}),
						a = function () {
							t._config.focus && t._element.focus(), t._isTransitioning = !1, n(t._element).trigger(r)
						};
					if (i) {
						var o = d.getTransitionDurationFromElement(this._dialog);
						n(this._dialog).one(d.TRANSITION_END, a).emulateTransitionEnd(o)
					} else a()
				}, t._enforceFocus = function () {
					var e = this;
					n(document).off(K.FOCUSIN).on(K.FOCUSIN, function (t) {
						document !== t.target && e._element !== t.target && 0 === n(e._element).has(t.target).length && e._element.focus()
					})
				}, t._setEscapeEvent = function () {
					var e = this;
					this._isShown && this._config.keyboard ? n(this._element).on(K.KEYDOWN_DISMISS, function (t) {
						27 === t.which && (t.preventDefault(), e.hide())
					}) : this._isShown || n(this._element).off(K.KEYDOWN_DISMISS)
				}, t._setResizeEvent = function () {
					var e = this;
					this._isShown ? n(window).on(K.RESIZE, function (t) {
						return e.handleUpdate(t)
					}) : n(window).off(K.RESIZE)
				}, t._hideModal = function () {
					var e = this;
					this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
						n(document.body).removeClass(Q.OPEN), e._resetAdjustments(), e._resetScrollbar(), n(e._element).trigger(K.HIDDEN)
					})
				}, t._removeBackdrop = function () {
					this._backdrop && (n(this._backdrop).remove(), this._backdrop = null)
				}, t._showBackdrop = function (e) {
					var t = this,
						i = n(this._element).hasClass(Q.FADE) ? Q.FADE : "";
					if (this._isShown && this._config.backdrop) {
						if (this._backdrop = document.createElement("div"), this._backdrop.className = Q.BACKDROP, i && this._backdrop.classList.add(i), n(this._backdrop).appendTo(document.body), n(this._element).on(K.CLICK_DISMISS, function (e) {
								t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
							}), i && d.reflow(this._backdrop), n(this._backdrop).addClass(Q.SHOW), !e) return;
						if (!i) return void e();
						var r = d.getTransitionDurationFromElement(this._backdrop);
						n(this._backdrop).one(d.TRANSITION_END, e).emulateTransitionEnd(r)
					} else if (!this._isShown && this._backdrop) {
						n(this._backdrop).removeClass(Q.SHOW);
						var a = function () {
							t._removeBackdrop(), e && e()
						};
						if (n(this._element).hasClass(Q.FADE)) {
							var o = d.getTransitionDurationFromElement(this._backdrop);
							n(this._backdrop).one(d.TRANSITION_END, a).emulateTransitionEnd(o)
						} else a()
					} else e && e()
				}, t._adjustDialog = function () {
					var e = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
				}, t._resetAdjustments = function () {
					this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
				}, t._checkScrollbar = function () {
					var e = document.body.getBoundingClientRect();
					this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
				}, t._setScrollbar = function () {
					var e = this;
					if (this._isBodyOverflowing) {
						var t = [].slice.call(document.querySelectorAll(ee.FIXED_CONTENT)),
							i = [].slice.call(document.querySelectorAll(ee.STICKY_CONTENT));
						n(t).each(function (t, i) {
							var r = i.style.paddingRight,
								a = n(i).css("padding-right");
							n(i).data("padding-right", r).css("padding-right", parseFloat(a) + e._scrollbarWidth + "px")
						}), n(i).each(function (t, i) {
							var r = i.style.marginRight,
								a = n(i).css("margin-right");
							n(i).data("margin-right", r).css("margin-right", parseFloat(a) - e._scrollbarWidth + "px")
						});
						var r = document.body.style.paddingRight,
							a = n(document.body).css("padding-right");
						n(document.body).data("padding-right", r).css("padding-right", parseFloat(a) + this._scrollbarWidth + "px")
					}
					n(document.body).addClass(Q.OPEN)
				}, t._resetScrollbar = function () {
					var e = [].slice.call(document.querySelectorAll(ee.FIXED_CONTENT));
					n(e).each(function (e, t) {
						var i = n(t).data("padding-right");
						n(t).removeData("padding-right"), t.style.paddingRight = i || ""
					});
					var t = [].slice.call(document.querySelectorAll("" + ee.STICKY_CONTENT));
					n(t).each(function (e, t) {
						var i = n(t).data("margin-right");
						void 0 !== i && n(t).css("margin-right", i).removeData("margin-right")
					});
					var i = n(document.body).data("padding-right");
					n(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
				}, t._getScrollbarWidth = function () {
					var e = document.createElement("div");
					e.className = Q.SCROLLBAR_MEASURER, document.body.appendChild(e);
					var t = e.getBoundingClientRect().width - e.clientWidth;
					return document.body.removeChild(e), t
				}, e._jQueryInterface = function (t, i) {
					return this.each(function () {
						var r = n(this).data("bs.modal"),
							a = o({}, J, n(this).data(), "object" == typeof t && t ? t : {});
						if (r || (r = new e(this, a), n(this).data("bs.modal", r)), "string" == typeof t) {
							if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
							r[t](i)
						} else a.show && r.show(i)
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return J
					}
				}]), e
			}();
		n(document).on(K.CLICK_DATA_API, ee.DATA_TOGGLE, function (e) {
			var t, i = this,
				r = d.getSelectorFromElement(this);
			r && (t = document.querySelector(r));
			var a = n(t).data("bs.modal") ? "toggle" : o({}, n(t).data(), n(this).data());
			"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
			var l = n(t).one(K.SHOW, function (e) {
				e.isDefaultPrevented() || l.one(K.HIDDEN, function () {
					n(i).is(":visible") && i.focus()
				})
			});
			te._jQueryInterface.call(n(t), a, this)
		}), n.fn.modal = te._jQueryInterface, n.fn.modal.Constructor = te, n.fn.modal.noConflict = function () {
			return n.fn.modal = X, te._jQueryInterface
		};
		var ne = "tooltip",
			ie = n.fn.tooltip,
			re = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
			ae = {
				animation: "boolean",
				template: "string",
				title: "(string|element|function)",
				trigger: "string",
				delay: "(number|object)",
				html: "boolean",
				selector: "(string|boolean)",
				placement: "(string|function)",
				offset: "(number|string)",
				container: "(string|element|boolean)",
				fallbackPlacement: "(string|array)",
				boundary: "(string|element)"
			},
			oe = {
				AUTO: "auto",
				TOP: "top",
				RIGHT: "right",
				BOTTOM: "bottom",
				LEFT: "left"
			},
			le = {
				animation: !0,
				template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
				trigger: "hover focus",
				title: "",
				delay: 0,
				html: !1,
				selector: !1,
				placement: "top",
				offset: 0,
				container: !1,
				fallbackPlacement: "flip",
				boundary: "scrollParent"
			},
			se = {
				SHOW: "show",
				OUT: "out"
			},
			de = {
				HIDE: "hide.bs.tooltip",
				HIDDEN: "hidden.bs.tooltip",
				SHOW: "show.bs.tooltip",
				SHOWN: "shown.bs.tooltip",
				INSERTED: "inserted.bs.tooltip",
				CLICK: "click.bs.tooltip",
				FOCUSIN: "focusin.bs.tooltip",
				FOCUSOUT: "focusout.bs.tooltip",
				MOUSEENTER: "mouseenter.bs.tooltip",
				MOUSELEAVE: "mouseleave.bs.tooltip"
			},
			ue = {
				FADE: "fade",
				SHOW: "show"
			},
			ce = {
				TOOLTIP: ".tooltip",
				TOOLTIP_INNER: ".tooltip-inner",
				ARROW: ".arrow"
			},
			he = {
				HOVER: "hover",
				FOCUS: "focus",
				CLICK: "click",
				MANUAL: "manual"
			},
			pe = function () {
				function e(e, n) {
					if (void 0 === t) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
					this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(n), this.tip = null, this._setListeners()
				}
				var i = e.prototype;
				return i.enable = function () {
					this._isEnabled = !0
				}, i.disable = function () {
					this._isEnabled = !1
				}, i.toggleEnabled = function () {
					this._isEnabled = !this._isEnabled
				}, i.toggle = function (e) {
					if (this._isEnabled)
						if (e) {
							var t = this.constructor.DATA_KEY,
								i = n(e.currentTarget).data(t);
							i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), n(e.currentTarget).data(t, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
						} else {
							if (n(this.getTipElement()).hasClass(ue.SHOW)) return void this._leave(null, this);
							this._enter(null, this)
						}
				}, i.dispose = function () {
					clearTimeout(this._timeout), n.removeData(this.element, this.constructor.DATA_KEY), n(this.element).off(this.constructor.EVENT_KEY), n(this.element).closest(".modal").off("hide.bs.modal"), this.tip && n(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
				}, i.show = function () {
					var e = this;
					if ("none" === n(this.element).css("display")) throw new Error("Please use show on visible elements");
					var i = n.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
						n(this.element).trigger(i);
						var r = d.findShadowRoot(this.element),
							a = n.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
						if (i.isDefaultPrevented() || !a) return;
						var o = this.getTipElement(),
							l = d.getUID(this.constructor.NAME);
						o.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && n(o).addClass(ue.FADE);
						var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
							u = this._getAttachment(s);
						this.addAttachmentClass(u);
						var c = this._getContainer();
						n(o).data(this.constructor.DATA_KEY, this), n.contains(this.element.ownerDocument.documentElement, this.tip) || n(o).appendTo(c), n(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new t(this.element, o, {
							placement: u,
							modifiers: {
								offset: {
									offset: this.config.offset
								},
								flip: {
									behavior: this.config.fallbackPlacement
								},
								arrow: {
									element: ce.ARROW
								},
								preventOverflow: {
									boundariesElement: this.config.boundary
								}
							},
							onCreate: function (t) {
								t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
							},
							onUpdate: function (t) {
								return e._handlePopperPlacementChange(t)
							}
						}), n(o).addClass(ue.SHOW), "ontouchstart" in document.documentElement && n(document.body).children().on("mouseover", null, n.noop);
						var h = function () {
							e.config.animation && e._fixTransition();
							var t = e._hoverState;
							e._hoverState = null, n(e.element).trigger(e.constructor.Event.SHOWN), t === se.OUT && e._leave(null, e)
						};
						if (n(this.tip).hasClass(ue.FADE)) {
							var p = d.getTransitionDurationFromElement(this.tip);
							n(this.tip).one(d.TRANSITION_END, h).emulateTransitionEnd(p)
						} else h()
					}
				}, i.hide = function (e) {
					var t = this,
						i = this.getTipElement(),
						r = n.Event(this.constructor.Event.HIDE),
						a = function () {
							t._hoverState !== se.SHOW && i.parentNode && i.parentNode.removeChild(i), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), n(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
						};
					if (n(this.element).trigger(r), !r.isDefaultPrevented()) {
						if (n(i).removeClass(ue.SHOW), "ontouchstart" in document.documentElement && n(document.body).children().off("mouseover", null, n.noop), this._activeTrigger[he.CLICK] = !1, this._activeTrigger[he.FOCUS] = !1, this._activeTrigger[he.HOVER] = !1, n(this.tip).hasClass(ue.FADE)) {
							var o = d.getTransitionDurationFromElement(i);
							n(i).one(d.TRANSITION_END, a).emulateTransitionEnd(o)
						} else a();
						this._hoverState = ""
					}
				}, i.update = function () {
					null !== this._popper && this._popper.scheduleUpdate()
				}, i.isWithContent = function () {
					return Boolean(this.getTitle())
				}, i.addAttachmentClass = function (e) {
					n(this.getTipElement()).addClass("bs-tooltip-" + e)
				}, i.getTipElement = function () {
					return this.tip = this.tip || n(this.config.template)[0], this.tip
				}, i.setContent = function () {
					var e = this.getTipElement();
					this.setElementContent(n(e.querySelectorAll(ce.TOOLTIP_INNER)), this.getTitle()), n(e).removeClass(ue.FADE + " " + ue.SHOW)
				}, i.setElementContent = function (e, t) {
					var i = this.config.html;
					"object" == typeof t && (t.nodeType || t.jquery) ? i ? n(t).parent().is(e) || e.empty().append(t) : e.text(n(t).text()) : e[i ? "html" : "text"](t)
				}, i.getTitle = function () {
					var e = this.element.getAttribute("data-original-title");
					return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
				}, i._getContainer = function () {
					return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? n(this.config.container) : n(document).find(this.config.container)
				}, i._getAttachment = function (e) {
					return oe[e.toUpperCase()]
				}, i._setListeners = function () {
					var e = this,
						t = this.config.trigger.split(" ");
					t.forEach(function (t) {
						if ("click" === t) n(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
							return e.toggle(t)
						});
						else if (t !== he.MANUAL) {
							var i = t === he.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
								r = t === he.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
							n(e.element).on(i, e.config.selector, function (t) {
								return e._enter(t)
							}).on(r, e.config.selector, function (t) {
								return e._leave(t)
							})
						}
					}), n(this.element).closest(".modal").on("hide.bs.modal", function () {
						e.element && e.hide()
					}), this.config.selector ? this.config = o({}, this.config, {
						trigger: "manual",
						selector: ""
					}) : this._fixTitle()
				}, i._fixTitle = function () {
					var e = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
				}, i._enter = function (e, t) {
					var i = this.constructor.DATA_KEY;
					(t = t || n(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), n(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusin" === e.type ? he.FOCUS : he.HOVER] = !0), n(t.getTipElement()).hasClass(ue.SHOW) || t._hoverState === se.SHOW ? t._hoverState = se.SHOW : (clearTimeout(t._timeout), t._hoverState = se.SHOW, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
						t._hoverState === se.SHOW && t.show()
					}, t.config.delay.show) : t.show())
				}, i._leave = function (e, t) {
					var i = this.constructor.DATA_KEY;
					(t = t || n(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), n(e.currentTarget).data(i, t)), e && (t._activeTrigger["focusout" === e.type ? he.FOCUS : he.HOVER] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = se.OUT, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
						t._hoverState === se.OUT && t.hide()
					}, t.config.delay.hide) : t.hide())
				}, i._isWithActiveTrigger = function () {
					for (var e in this._activeTrigger)
						if (this._activeTrigger[e]) return !0;
					return !1
				}, i._getConfig = function (e) {
					return "number" == typeof (e = o({}, this.constructor.Default, n(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
						show: e.delay,
						hide: e.delay
					}), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), d.typeCheckConfig(ne, e, this.constructor.DefaultType), e
				}, i._getDelegateConfig = function () {
					var e = {};
					if (this.config)
						for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
					return e
				}, i._cleanTipClass = function () {
					var e = n(this.getTipElement()),
						t = e.attr("class").match(re);
					null !== t && t.length && e.removeClass(t.join(""))
				}, i._handlePopperPlacementChange = function (e) {
					var t = e.instance;
					this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
				}, i._fixTransition = function () {
					var e = this.getTipElement(),
						t = this.config.animation;
					null === e.getAttribute("x-placement") && (n(e).removeClass(ue.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this).data("bs.tooltip"),
							r = "object" == typeof t && t;
						if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n(this).data("bs.tooltip", i)), "string" == typeof t)) {
							if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
							i[t]()
						}
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return le
					}
				}, {
					key: "NAME",
					get: function () {
						return ne
					}
				}, {
					key: "DATA_KEY",
					get: function () {
						return "bs.tooltip"
					}
				}, {
					key: "Event",
					get: function () {
						return de
					}
				}, {
					key: "EVENT_KEY",
					get: function () {
						return ".bs.tooltip"
					}
				}, {
					key: "DefaultType",
					get: function () {
						return ae
					}
				}]), e
			}();
		n.fn.tooltip = pe._jQueryInterface, n.fn.tooltip.Constructor = pe, n.fn.tooltip.noConflict = function () {
			return n.fn.tooltip = ie, pe._jQueryInterface
		};
		var fe = "popover",
			me = n.fn.popover,
			ge = new RegExp("(^|\\s)bs-popover\\S+", "g"),
			_e = o({}, pe.Default, {
				placement: "right",
				trigger: "click",
				content: "",
				template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
			}),
			ye = o({}, pe.DefaultType, {
				content: "(string|element|function)"
			}),
			ve = {
				FADE: "fade",
				SHOW: "show"
			},
			Me = {
				TITLE: ".popover-header",
				CONTENT: ".popover-body"
			},
			be = {
				HIDE: "hide.bs.popover",
				HIDDEN: "hidden.bs.popover",
				SHOW: "show.bs.popover",
				SHOWN: "shown.bs.popover",
				INSERTED: "inserted.bs.popover",
				CLICK: "click.bs.popover",
				FOCUSIN: "focusin.bs.popover",
				FOCUSOUT: "focusout.bs.popover",
				MOUSEENTER: "mouseenter.bs.popover",
				MOUSELEAVE: "mouseleave.bs.popover"
			},
			we = function (e) {
				var t, i;

				function a() {
					return e.apply(this, arguments) || this
				}
				i = e, (t = a).prototype = Object.create(i.prototype), t.prototype.constructor = t, t.__proto__ = i;
				var o = a.prototype;
				return o.isWithContent = function () {
					return this.getTitle() || this._getContent()
				}, o.addAttachmentClass = function (e) {
					n(this.getTipElement()).addClass("bs-popover-" + e)
				}, o.getTipElement = function () {
					return this.tip = this.tip || n(this.config.template)[0], this.tip
				}, o.setContent = function () {
					var e = n(this.getTipElement());
					this.setElementContent(e.find(Me.TITLE), this.getTitle());
					var t = this._getContent();
					"function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Me.CONTENT), t), e.removeClass(ve.FADE + " " + ve.SHOW)
				}, o._getContent = function () {
					return this.element.getAttribute("data-content") || this.config.content
				}, o._cleanTipClass = function () {
					var e = n(this.getTipElement()),
						t = e.attr("class").match(ge);
					null !== t && t.length > 0 && e.removeClass(t.join(""))
				}, a._jQueryInterface = function (e) {
					return this.each(function () {
						var t = n(this).data("bs.popover"),
							i = "object" == typeof e ? e : null;
						if ((t || !/dispose|hide/.test(e)) && (t || (t = new a(this, i), n(this).data("bs.popover", t)), "string" == typeof e)) {
							if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
							t[e]()
						}
					})
				}, r(a, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return _e
					}
				}, {
					key: "NAME",
					get: function () {
						return fe
					}
				}, {
					key: "DATA_KEY",
					get: function () {
						return "bs.popover"
					}
				}, {
					key: "Event",
					get: function () {
						return be
					}
				}, {
					key: "EVENT_KEY",
					get: function () {
						return ".bs.popover"
					}
				}, {
					key: "DefaultType",
					get: function () {
						return ye
					}
				}]), a
			}(pe);
		n.fn.popover = we._jQueryInterface, n.fn.popover.Constructor = we, n.fn.popover.noConflict = function () {
			return n.fn.popover = me, we._jQueryInterface
		};
		var Le = "scrollspy",
			De = n.fn[Le],
			Te = {
				offset: 10,
				method: "auto",
				target: ""
			},
			ke = {
				offset: "number",
				method: "string",
				target: "(string|element)"
			},
			Se = {
				ACTIVATE: "activate.bs.scrollspy",
				SCROLL: "scroll.bs.scrollspy",
				LOAD_DATA_API: "load.bs.scrollspy.data-api"
			},
			xe = {
				DROPDOWN_ITEM: "dropdown-item",
				DROPDOWN_MENU: "dropdown-menu",
				ACTIVE: "active"
			},
			Ye = {
				DATA_SPY: '[data-spy="scroll"]',
				ACTIVE: ".active",
				NAV_LIST_GROUP: ".nav, .list-group",
				NAV_LINKS: ".nav-link",
				NAV_ITEMS: ".nav-item",
				LIST_ITEMS: ".list-group-item",
				DROPDOWN: ".dropdown",
				DROPDOWN_ITEMS: ".dropdown-item",
				DROPDOWN_TOGGLE: ".dropdown-toggle"
			},
			Ee = {
				OFFSET: "offset",
				POSITION: "position"
			},
			Ce = function () {
				function e(e, t) {
					var i = this;
					this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Ye.NAV_LINKS + "," + this._config.target + " " + Ye.LIST_ITEMS + "," + this._config.target + " " + Ye.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, n(this._scrollElement).on(Se.SCROLL, function (e) {
						return i._process(e)
					}), this.refresh(), this._process()
				}
				var t = e.prototype;
				return t.refresh = function () {
					var e = this,
						t = this._scrollElement === this._scrollElement.window ? Ee.OFFSET : Ee.POSITION,
						i = "auto" === this._config.method ? t : this._config.method,
						r = i === Ee.POSITION ? this._getScrollTop() : 0;
					this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
					var a = [].slice.call(document.querySelectorAll(this._selector));
					a.map(function (e) {
						var t, a = d.getSelectorFromElement(e);
						if (a && (t = document.querySelector(a)), t) {
							var o = t.getBoundingClientRect();
							if (o.width || o.height) return [n(t)[i]().top + r, a]
						}
						return null
					}).filter(function (e) {
						return e
					}).sort(function (e, t) {
						return e[0] - t[0]
					}).forEach(function (t) {
						e._offsets.push(t[0]), e._targets.push(t[1])
					})
				}, t.dispose = function () {
					n.removeData(this._element, "bs.scrollspy"), n(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
				}, t._getConfig = function (e) {
					if ("string" != typeof (e = o({}, Te, "object" == typeof e && e ? e : {})).target) {
						var t = n(e.target).attr("id");
						t || (t = d.getUID(Le), n(e.target).attr("id", t)), e.target = "#" + t
					}
					return d.typeCheckConfig(Le, e, ke), e
				}, t._getScrollTop = function () {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
				}, t._getScrollHeight = function () {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}, t._getOffsetHeight = function () {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
				}, t._process = function () {
					var e = this._getScrollTop() + this._config.offset,
						t = this._getScrollHeight(),
						n = this._config.offset + t - this._getOffsetHeight();
					if (this._scrollHeight !== t && this.refresh(), e >= n) {
						var i = this._targets[this._targets.length - 1];
						this._activeTarget !== i && this._activate(i)
					} else {
						if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
						for (var r = this._offsets.length, a = r; a--;) {
							var o = this._activeTarget !== this._targets[a] && e >= this._offsets[a] && (void 0 === this._offsets[a + 1] || e < this._offsets[a + 1]);
							o && this._activate(this._targets[a])
						}
					}
				}, t._activate = function (e) {
					this._activeTarget = e, this._clear();
					var t = this._selector.split(",").map(function (t) {
							return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
						}),
						i = n([].slice.call(document.querySelectorAll(t.join(","))));
					i.hasClass(xe.DROPDOWN_ITEM) ? (i.closest(Ye.DROPDOWN).find(Ye.DROPDOWN_TOGGLE).addClass(xe.ACTIVE), i.addClass(xe.ACTIVE)) : (i.addClass(xe.ACTIVE), i.parents(Ye.NAV_LIST_GROUP).prev(Ye.NAV_LINKS + ", " + Ye.LIST_ITEMS).addClass(xe.ACTIVE), i.parents(Ye.NAV_LIST_GROUP).prev(Ye.NAV_ITEMS).children(Ye.NAV_LINKS).addClass(xe.ACTIVE)), n(this._scrollElement).trigger(Se.ACTIVATE, {
						relatedTarget: e
					})
				}, t._clear = function () {
					[].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
						return e.classList.contains(xe.ACTIVE)
					}).forEach(function (e) {
						return e.classList.remove(xe.ACTIVE)
					})
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this).data("bs.scrollspy"),
							r = "object" == typeof t && t;
						if (i || (i = new e(this, r), n(this).data("bs.scrollspy", i)), "string" == typeof t) {
							if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
							i[t]()
						}
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "Default",
					get: function () {
						return Te
					}
				}]), e
			}();
		n(window).on(Se.LOAD_DATA_API, function () {
			for (var e = [].slice.call(document.querySelectorAll(Ye.DATA_SPY)), t = e.length, i = t; i--;) {
				var r = n(e[i]);
				Ce._jQueryInterface.call(r, r.data())
			}
		}), n.fn[Le] = Ce._jQueryInterface, n.fn[Le].Constructor = Ce, n.fn[Le].noConflict = function () {
			return n.fn[Le] = De, Ce._jQueryInterface
		};
		var He = n.fn.tab,
			Pe = {
				HIDE: "hide.bs.tab",
				HIDDEN: "hidden.bs.tab",
				SHOW: "show.bs.tab",
				SHOWN: "shown.bs.tab",
				CLICK_DATA_API: "click.bs.tab.data-api"
			},
			Oe = {
				DROPDOWN_MENU: "dropdown-menu",
				ACTIVE: "active",
				DISABLED: "disabled",
				FADE: "fade",
				SHOW: "show"
			},
			Ae = {
				DROPDOWN: ".dropdown",
				NAV_LIST_GROUP: ".nav, .list-group",
				ACTIVE: ".active",
				ACTIVE_UL: "> li > .active",
				DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
				DROPDOWN_TOGGLE: ".dropdown-toggle",
				DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
			},
			Ie = function () {
				function e(e) {
					this._element = e
				}
				var t = e.prototype;
				return t.show = function () {
					var e = this;
					if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && n(this._element).hasClass(Oe.ACTIVE) || n(this._element).hasClass(Oe.DISABLED))) {
						var t, i, r = n(this._element).closest(Ae.NAV_LIST_GROUP)[0],
							a = d.getSelectorFromElement(this._element);
						if (r) {
							var o = "UL" === r.nodeName || "OL" === r.nodeName ? Ae.ACTIVE_UL : Ae.ACTIVE;
							i = (i = n.makeArray(n(r).find(o)))[i.length - 1]
						}
						var l = n.Event(Pe.HIDE, {
								relatedTarget: this._element
							}),
							s = n.Event(Pe.SHOW, {
								relatedTarget: i
							});
						if (i && n(i).trigger(l), n(this._element).trigger(s), !s.isDefaultPrevented() && !l.isDefaultPrevented()) {
							a && (t = document.querySelector(a)), this._activate(this._element, r);
							var u = function () {
								var t = n.Event(Pe.HIDDEN, {
										relatedTarget: e._element
									}),
									r = n.Event(Pe.SHOWN, {
										relatedTarget: i
									});
								n(i).trigger(t), n(e._element).trigger(r)
							};
							t ? this._activate(t, t.parentNode, u) : u()
						}
					}
				}, t.dispose = function () {
					n.removeData(this._element, "bs.tab"), this._element = null
				}, t._activate = function (e, t, i) {
					var r = this,
						a = !t || "UL" !== t.nodeName && "OL" !== t.nodeName ? n(t).children(Ae.ACTIVE) : n(t).find(Ae.ACTIVE_UL),
						o = a[0],
						l = i && o && n(o).hasClass(Oe.FADE),
						s = function () {
							return r._transitionComplete(e, o, i)
						};
					if (o && l) {
						var u = d.getTransitionDurationFromElement(o);
						n(o).removeClass(Oe.SHOW).one(d.TRANSITION_END, s).emulateTransitionEnd(u)
					} else s()
				}, t._transitionComplete = function (e, t, i) {
					if (t) {
						n(t).removeClass(Oe.ACTIVE);
						var r = n(t.parentNode).find(Ae.DROPDOWN_ACTIVE_CHILD)[0];
						r && n(r).removeClass(Oe.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
					}
					if (n(e).addClass(Oe.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), d.reflow(e), n(e).addClass(Oe.SHOW), e.parentNode && n(e.parentNode).hasClass(Oe.DROPDOWN_MENU)) {
						var a = n(e).closest(Ae.DROPDOWN)[0];
						if (a) {
							var o = [].slice.call(a.querySelectorAll(Ae.DROPDOWN_TOGGLE));
							n(o).addClass(Oe.ACTIVE)
						}
						e.setAttribute("aria-expanded", !0)
					}
					i && i()
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this),
							r = i.data("bs.tab");
						if (r || (r = new e(this), i.data("bs.tab", r)), "string" == typeof t) {
							if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
							r[t]()
						}
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}]), e
			}();
		n(document).on(Pe.CLICK_DATA_API, Ae.DATA_TOGGLE, function (e) {
			e.preventDefault(), Ie._jQueryInterface.call(n(this), "show")
		}), n.fn.tab = Ie._jQueryInterface, n.fn.tab.Constructor = Ie, n.fn.tab.noConflict = function () {
			return n.fn.tab = He, Ie._jQueryInterface
		};
		var Re = n.fn.toast,
			je = {
				CLICK_DISMISS: "click.dismiss.bs.toast",
				HIDE: "hide.bs.toast",
				HIDDEN: "hidden.bs.toast",
				SHOW: "show.bs.toast",
				SHOWN: "shown.bs.toast"
			},
			Fe = {
				FADE: "fade",
				HIDE: "hide",
				SHOW: "show",
				SHOWING: "showing"
			},
			Ne = {
				animation: "boolean",
				autohide: "boolean",
				delay: "number"
			},
			We = {
				animation: !0,
				autohide: !0,
				delay: 500
			},
			ze = {
				DATA_DISMISS: '[data-dismiss="toast"]'
			},
			Be = function () {
				function e(e, t) {
					this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
				}
				var t = e.prototype;
				return t.show = function () {
					var e = this;
					n(this._element).trigger(je.SHOW), this._config.animation && this._element.classList.add(Fe.FADE);
					var t = function () {
						e._element.classList.remove(Fe.SHOWING), e._element.classList.add(Fe.SHOW), n(e._element).trigger(je.SHOWN), e._config.autohide && e.hide()
					};
					if (this._element.classList.remove(Fe.HIDE), this._element.classList.add(Fe.SHOWING), this._config.animation) {
						var i = d.getTransitionDurationFromElement(this._element);
						n(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(i)
					} else t()
				}, t.hide = function (e) {
					var t = this;
					this._element.classList.contains(Fe.SHOW) && (n(this._element).trigger(je.HIDE), e ? this._close() : this._timeout = setTimeout(function () {
						t._close()
					}, this._config.delay))
				}, t.dispose = function () {
					clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Fe.SHOW) && this._element.classList.remove(Fe.SHOW), n(this._element).off(je.CLICK_DISMISS), n.removeData(this._element, "bs.toast"), this._element = null, this._config = null
				}, t._getConfig = function (e) {
					return e = o({}, We, n(this._element).data(), "object" == typeof e && e ? e : {}), d.typeCheckConfig("toast", e, this.constructor.DefaultType), e
				}, t._setListeners = function () {
					var e = this;
					n(this._element).on(je.CLICK_DISMISS, ze.DATA_DISMISS, function () {
						return e.hide(!0)
					})
				}, t._close = function () {
					var e = this,
						t = function () {
							e._element.classList.add(Fe.HIDE), n(e._element).trigger(je.HIDDEN)
						};
					if (this._element.classList.remove(Fe.SHOW), this._config.animation) {
						var i = d.getTransitionDurationFromElement(this._element);
						n(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(i)
					} else t()
				}, e._jQueryInterface = function (t) {
					return this.each(function () {
						var i = n(this),
							r = i.data("bs.toast"),
							a = "object" == typeof t && t;
						if (r || (r = new e(this, a), i.data("bs.toast", r)), "string" == typeof t) {
							if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
							r[t](this)
						}
					})
				}, r(e, null, [{
					key: "VERSION",
					get: function () {
						return "4.2.1"
					}
				}, {
					key: "DefaultType",
					get: function () {
						return Ne
					}
				}]), e
			}();
		n.fn.toast = Be._jQueryInterface, n.fn.toast.Constructor = Be, n.fn.toast.noConflict = function () {
				return n.fn.toast = Re, Be._jQueryInterface
			},
			function () {
				if (void 0 === n) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
				var e = n.fn.jquery.split(" ")[0].split(".");
				if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
			}(), e.Util = d, e.Alert = p, e.Button = y, e.Carousel = Y, e.Collapse = j, e.Dropdown = q, e.Modal = te, e.Popover = we, e.Scrollspy = Ce, e.Tab = Ie, e.Toast = Be, e.Tooltip = pe, Object.defineProperty(e, "__esModule", {
				value: !0
			})
	}(t, n(149), n(1))
}, function (e, t, n) {
	"use strict";
	n.r(t),
		function (e) {
			for (
				/**!
				 * @fileOverview Kickass library to create and place poppers near their reference elements.
				 * @version 1.14.6
				 * @license
				 * Copyright (c) 2016 Federico Zivolo and contributors
				 *
				 * Permission is hereby granted, free of charge, to any person obtaining a copy
				 * of this software and associated documentation files (the "Software"), to deal
				 * in the Software without restriction, including without limitation the rights
				 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
				 * copies of the Software, and to permit persons to whom the Software is
				 * furnished to do so, subject to the following conditions:
				 *
				 * The above copyright notice and this permission notice shall be included in all
				 * copies or substantial portions of the Software.
				 *
				 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
				 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
				 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
				 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
				 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
				 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
				 * SOFTWARE.
				 */
				var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], r = 0, a = 0; a < i.length; a += 1)
				if (n && navigator.userAgent.indexOf(i[a]) >= 0) {
					r = 1;
					break
				}
			var o = n && window.Promise ? function (e) {
				var t = !1;
				return function () {
					t || (t = !0, window.Promise.resolve().then(function () {
						t = !1, e()
					}))
				}
			} : function (e) {
				var t = !1;
				return function () {
					t || (t = !0, setTimeout(function () {
						t = !1, e()
					}, r))
				}
			};

			function l(e) {
				return e && "[object Function]" === {}.toString.call(e)
			}

			function s(e, t) {
				if (1 !== e.nodeType) return [];
				var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
				return t ? n[t] : n
			}

			function d(e) {
				return "HTML" === e.nodeName ? e : e.parentNode || e.host
			}

			function u(e) {
				if (!e) return document.body;
				switch (e.nodeName) {
					case "HTML":
					case "BODY":
						return e.ownerDocument.body;
					case "#document":
						return e.body
				}
				var t = s(e),
					n = t.overflow,
					i = t.overflowX,
					r = t.overflowY;
				return /(auto|scroll|overlay)/.test(n + r + i) ? e : u(d(e))
			}
			var c = n && !(!window.MSInputMethodContext || !document.documentMode),
				h = n && /MSIE 10/.test(navigator.userAgent);

			function p(e) {
				return 11 === e ? c : 10 === e ? h : c || h
			}

			function f(e) {
				if (!e) return document.documentElement;
				for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
				var i = n && n.nodeName;
				return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? f(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
			}

			function m(e) {
				return null !== e.parentNode ? m(e.parentNode) : e
			}

			function g(e, t) {
				if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
				var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
					i = n ? e : t,
					r = n ? t : e,
					a = document.createRange();
				a.setStart(i, 0), a.setEnd(r, 0);
				var o, l, s = a.commonAncestorContainer;
				if (e !== s && t !== s || i.contains(r)) return "BODY" === (l = (o = s).nodeName) || "HTML" !== l && f(o.firstElementChild) !== o ? f(s) : s;
				var d = m(e);
				return d.host ? g(d.host, t) : g(e, m(t).host)
			}

			function _(e) {
				var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
					n = e.nodeName;
				if ("BODY" === n || "HTML" === n) {
					var i = e.ownerDocument.documentElement;
					return (e.ownerDocument.scrollingElement || i)[t]
				}
				return e[t]
			}

			function y(e, t) {
				var n = "x" === t ? "Left" : "Top",
					i = "Left" === n ? "Right" : "Bottom";
				return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
			}

			function v(e, t, n, i) {
				return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
			}

			function M(e) {
				var t = e.body,
					n = e.documentElement,
					i = p(10) && getComputedStyle(n);
				return {
					height: v("Height", t, n, i),
					width: v("Width", t, n, i)
				}
			}
			var b = function (e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				},
				w = function () {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function (t, n, i) {
						return n && e(t.prototype, n), i && e(t, i), t
					}
				}(),
				L = function (e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				},
				D = Object.assign || function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				};

			function T(e) {
				return D({}, e, {
					right: e.left + e.width,
					bottom: e.top + e.height
				})
			}

			function k(e) {
				var t = {};
				try {
					if (p(10)) {
						t = e.getBoundingClientRect();
						var n = _(e, "top"),
							i = _(e, "left");
						t.top += n, t.left += i, t.bottom += n, t.right += i
					} else t = e.getBoundingClientRect()
				} catch (e) {}
				var r = {
						left: t.left,
						top: t.top,
						width: t.right - t.left,
						height: t.bottom - t.top
					},
					a = "HTML" === e.nodeName ? M(e.ownerDocument) : {},
					o = a.width || e.clientWidth || r.right - r.left,
					l = a.height || e.clientHeight || r.bottom - r.top,
					d = e.offsetWidth - o,
					u = e.offsetHeight - l;
				if (d || u) {
					var c = s(e);
					d -= y(c, "x"), u -= y(c, "y"), r.width -= d, r.height -= u
				}
				return T(r)
			}

			function S(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					i = p(10),
					r = "HTML" === t.nodeName,
					a = k(e),
					o = k(t),
					l = u(e),
					d = s(t),
					c = parseFloat(d.borderTopWidth, 10),
					h = parseFloat(d.borderLeftWidth, 10);
				n && r && (o.top = Math.max(o.top, 0), o.left = Math.max(o.left, 0));
				var f = T({
					top: a.top - o.top - c,
					left: a.left - o.left - h,
					width: a.width,
					height: a.height
				});
				if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
					var m = parseFloat(d.marginTop, 10),
						g = parseFloat(d.marginLeft, 10);
					f.top -= c - m, f.bottom -= c - m, f.left -= h - g, f.right -= h - g, f.marginTop = m, f.marginLeft = g
				}
				return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function (e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						i = _(t, "top"),
						r = _(t, "left"),
						a = n ? -1 : 1;
					return e.top += i * a, e.bottom += i * a, e.left += r * a, e.right += r * a, e
				}(f, t)), f
			}

			function x(e) {
				if (!e || !e.parentElement || p()) return document.documentElement;
				for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
				return t || document.documentElement
			}

			function Y(e, t, n, i) {
				var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
					a = {
						top: 0,
						left: 0
					},
					o = r ? x(e) : g(e, t);
				if ("viewport" === i) a = function (e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = e.ownerDocument.documentElement,
						i = S(e, n),
						r = Math.max(n.clientWidth, window.innerWidth || 0),
						a = Math.max(n.clientHeight, window.innerHeight || 0),
						o = t ? 0 : _(n),
						l = t ? 0 : _(n, "left");
					return T({
						top: o - i.top + i.marginTop,
						left: l - i.left + i.marginLeft,
						width: r,
						height: a
					})
				}(o, r);
				else {
					var l = void 0;
					"scrollParent" === i ? "BODY" === (l = u(d(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
					var c = S(l, o, r);
					if ("HTML" !== l.nodeName || function e(t) {
							var n = t.nodeName;
							return "BODY" !== n && "HTML" !== n && ("fixed" === s(t, "position") || e(d(t)))
						}(o)) a = c;
					else {
						var h = M(e.ownerDocument),
							p = h.height,
							f = h.width;
						a.top += c.top - c.marginTop, a.bottom = p + c.top, a.left += c.left - c.marginLeft, a.right = f + c.left
					}
				}
				var m = "number" == typeof (n = n || 0);
				return a.left += m ? n : n.left || 0, a.top += m ? n : n.top || 0, a.right -= m ? n : n.right || 0, a.bottom -= m ? n : n.bottom || 0, a
			}

			function E(e, t, n, i, r) {
				var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
				if (-1 === e.indexOf("auto")) return e;
				var o = Y(n, i, a, r),
					l = {
						top: {
							width: o.width,
							height: t.top - o.top
						},
						right: {
							width: o.right - t.right,
							height: o.height
						},
						bottom: {
							width: o.width,
							height: o.bottom - t.bottom
						},
						left: {
							width: t.left - o.left,
							height: o.height
						}
					},
					s = Object.keys(l).map(function (e) {
						return D({
							key: e
						}, l[e], {
							area: (t = l[e], t.width * t.height)
						});
						var t
					}).sort(function (e, t) {
						return t.area - e.area
					}),
					d = s.filter(function (e) {
						var t = e.width,
							i = e.height;
						return t >= n.clientWidth && i >= n.clientHeight
					}),
					u = d.length > 0 ? d[0].key : s[0].key,
					c = e.split("-")[1];
				return u + (c ? "-" + c : "")
			}

			function C(e, t, n) {
				var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
				return S(n, i ? x(t) : g(t, n), i)
			}

			function H(e) {
				var t = e.ownerDocument.defaultView.getComputedStyle(e),
					n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
					i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
				return {
					width: e.offsetWidth + i,
					height: e.offsetHeight + n
				}
			}

			function P(e) {
				var t = {
					left: "right",
					right: "left",
					bottom: "top",
					top: "bottom"
				};
				return e.replace(/left|right|bottom|top/g, function (e) {
					return t[e]
				})
			}

			function O(e, t, n) {
				n = n.split("-")[0];
				var i = H(e),
					r = {
						width: i.width,
						height: i.height
					},
					a = -1 !== ["right", "left"].indexOf(n),
					o = a ? "top" : "left",
					l = a ? "left" : "top",
					s = a ? "height" : "width",
					d = a ? "width" : "height";
				return r[o] = t[o] + t[s] / 2 - i[s] / 2, r[l] = n === l ? t[l] - i[d] : t[P(l)], r
			}

			function A(e, t) {
				return Array.prototype.find ? e.find(t) : e.filter(t)[0]
			}

			function I(e, t, n) {
				return (void 0 === n ? e : e.slice(0, function (e, t, n) {
					if (Array.prototype.findIndex) return e.findIndex(function (e) {
						return e[t] === n
					});
					var i = A(e, function (e) {
						return e[t] === n
					});
					return e.indexOf(i)
				}(e, "name", n))).forEach(function (e) {
					e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
					var n = e.function || e.fn;
					e.enabled && l(n) && (t.offsets.popper = T(t.offsets.popper), t.offsets.reference = T(t.offsets.reference), t = n(t, e))
				}), t
			}

			function R(e, t) {
				return e.some(function (e) {
					var n = e.name;
					return e.enabled && n === t
				})
			}

			function j(e) {
				for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
					var r = t[i],
						a = r ? "" + r + n : e;
					if (void 0 !== document.body.style[a]) return a
				}
				return null
			}

			function F(e) {
				var t = e.ownerDocument;
				return t ? t.defaultView : window
			}

			function N(e, t, n, i) {
				n.updateBound = i, F(e).addEventListener("resize", n.updateBound, {
					passive: !0
				});
				var r = u(e);
				return function e(t, n, i, r) {
					var a = "BODY" === t.nodeName,
						o = a ? t.ownerDocument.defaultView : t;
					o.addEventListener(n, i, {
						passive: !0
					}), a || e(u(o.parentNode), n, i, r), r.push(o)
				}(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
			}

			function W() {
				var e, t;
				this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, F(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
					e.removeEventListener("scroll", t.updateBound)
				}), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
			}

			function z(e) {
				return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
			}

			function B(e, t) {
				Object.keys(t).forEach(function (n) {
					var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && z(t[n]) && (i = "px"), e.style[n] = t[n] + i
				})
			}
			var V = n && /Firefox/i.test(navigator.userAgent);

			function G(e, t, n) {
				var i = A(e, function (e) {
						return e.name === t
					}),
					r = !!i && e.some(function (e) {
						return e.name === n && e.enabled && e.order < i.order
					});
				if (!r) {
					var a = "`" + t + "`",
						o = "`" + n + "`";
					console.warn(o + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
				}
				return r
			}
			var U = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
				Z = U.slice(3);

			function q(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = Z.indexOf(e),
					i = Z.slice(n + 1).concat(Z.slice(0, n));
				return t ? i.reverse() : i
			}
			var X = {
				FLIP: "flip",
				CLOCKWISE: "clockwise",
				COUNTERCLOCKWISE: "counterclockwise"
			};

			function J(e, t, n, i) {
				var r = [0, 0],
					a = -1 !== ["right", "left"].indexOf(i),
					o = e.split(/(\+|\-)/).map(function (e) {
						return e.trim()
					}),
					l = o.indexOf(A(o, function (e) {
						return -1 !== e.search(/,|\s/)
					}));
				o[l] && -1 === o[l].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
				var s = /\s*,\s*|\s+/,
					d = -1 !== l ? [o.slice(0, l).concat([o[l].split(s)[0]]), [o[l].split(s)[1]].concat(o.slice(l + 1))] : [o];
				return (d = d.map(function (e, i) {
					var r = (1 === i ? !a : a) ? "height" : "width",
						o = !1;
					return e.reduce(function (e, t) {
						return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
					}, []).map(function (e) {
						return function (e, t, n, i) {
							var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
								a = +r[1],
								o = r[2];
							if (!a) return e;
							if (0 === o.indexOf("%")) {
								var l = void 0;
								switch (o) {
									case "%p":
										l = n;
										break;
									case "%":
									case "%r":
									default:
										l = i
								}
								return T(l)[t] / 100 * a
							}
							if ("vh" === o || "vw" === o) return ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
							return a
						}(e, r, t, n)
					})
				})).forEach(function (e, t) {
					e.forEach(function (n, i) {
						z(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
					})
				}), r
			}
			var $ = {
					placement: "bottom",
					positionFixed: !1,
					eventsEnabled: !0,
					removeOnDestroy: !1,
					onCreate: function () {},
					onUpdate: function () {},
					modifiers: {
						shift: {
							order: 100,
							enabled: !0,
							fn: function (e) {
								var t = e.placement,
									n = t.split("-")[0],
									i = t.split("-")[1];
								if (i) {
									var r = e.offsets,
										a = r.reference,
										o = r.popper,
										l = -1 !== ["bottom", "top"].indexOf(n),
										s = l ? "left" : "top",
										d = l ? "width" : "height",
										u = {
											start: L({}, s, a[s]),
											end: L({}, s, a[s] + a[d] - o[d])
										};
									e.offsets.popper = D({}, o, u[i])
								}
								return e
							}
						},
						offset: {
							order: 200,
							enabled: !0,
							fn: function (e, t) {
								var n = t.offset,
									i = e.placement,
									r = e.offsets,
									a = r.popper,
									o = r.reference,
									l = i.split("-")[0],
									s = void 0;
								return s = z(+n) ? [+n, 0] : J(n, a, o, l), "left" === l ? (a.top += s[0], a.left -= s[1]) : "right" === l ? (a.top += s[0], a.left += s[1]) : "top" === l ? (a.left += s[0], a.top -= s[1]) : "bottom" === l && (a.left += s[0], a.top += s[1]), e.popper = a, e
							},
							offset: 0
						},
						preventOverflow: {
							order: 300,
							enabled: !0,
							fn: function (e, t) {
								var n = t.boundariesElement || f(e.instance.popper);
								e.instance.reference === n && (n = f(n));
								var i = j("transform"),
									r = e.instance.popper.style,
									a = r.top,
									o = r.left,
									l = r[i];
								r.top = "", r.left = "", r[i] = "";
								var s = Y(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
								r.top = a, r.left = o, r[i] = l, t.boundaries = s;
								var d = t.priority,
									u = e.offsets.popper,
									c = {
										primary: function (e) {
											var n = u[e];
											return u[e] < s[e] && !t.escapeWithReference && (n = Math.max(u[e], s[e])), L({}, e, n)
										},
										secondary: function (e) {
											var n = "right" === e ? "left" : "top",
												i = u[n];
											return u[e] > s[e] && !t.escapeWithReference && (i = Math.min(u[n], s[e] - ("right" === e ? u.width : u.height))), L({}, n, i)
										}
									};
								return d.forEach(function (e) {
									var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
									u = D({}, u, c[t](e))
								}), e.offsets.popper = u, e
							},
							priority: ["left", "right", "top", "bottom"],
							padding: 5,
							boundariesElement: "scrollParent"
						},
						keepTogether: {
							order: 400,
							enabled: !0,
							fn: function (e) {
								var t = e.offsets,
									n = t.popper,
									i = t.reference,
									r = e.placement.split("-")[0],
									a = Math.floor,
									o = -1 !== ["top", "bottom"].indexOf(r),
									l = o ? "right" : "bottom",
									s = o ? "left" : "top",
									d = o ? "width" : "height";
								return n[l] < a(i[s]) && (e.offsets.popper[s] = a(i[s]) - n[d]), n[s] > a(i[l]) && (e.offsets.popper[s] = a(i[l])), e
							}
						},
						arrow: {
							order: 500,
							enabled: !0,
							fn: function (e, t) {
								var n;
								if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
								var i = t.element;
								if ("string" == typeof i) {
									if (!(i = e.instance.popper.querySelector(i))) return e
								} else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
								var r = e.placement.split("-")[0],
									a = e.offsets,
									o = a.popper,
									l = a.reference,
									d = -1 !== ["left", "right"].indexOf(r),
									u = d ? "height" : "width",
									c = d ? "Top" : "Left",
									h = c.toLowerCase(),
									p = d ? "left" : "top",
									f = d ? "bottom" : "right",
									m = H(i)[u];
								l[f] - m < o[h] && (e.offsets.popper[h] -= o[h] - (l[f] - m)), l[h] + m > o[f] && (e.offsets.popper[h] += l[h] + m - o[f]), e.offsets.popper = T(e.offsets.popper);
								var g = l[h] + l[u] / 2 - m / 2,
									_ = s(e.instance.popper),
									y = parseFloat(_["margin" + c], 10),
									v = parseFloat(_["border" + c + "Width"], 10),
									M = g - e.offsets.popper[h] - y - v;
								return M = Math.max(Math.min(o[u] - m, M), 0), e.arrowElement = i, e.offsets.arrow = (L(n = {}, h, Math.round(M)), L(n, p, ""), n), e
							},
							element: "[x-arrow]"
						},
						flip: {
							order: 600,
							enabled: !0,
							fn: function (e, t) {
								if (R(e.instance.modifiers, "inner")) return e;
								if (e.flipped && e.placement === e.originalPlacement) return e;
								var n = Y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
									i = e.placement.split("-")[0],
									r = P(i),
									a = e.placement.split("-")[1] || "",
									o = [];
								switch (t.behavior) {
									case X.FLIP:
										o = [i, r];
										break;
									case X.CLOCKWISE:
										o = q(i);
										break;
									case X.COUNTERCLOCKWISE:
										o = q(i, !0);
										break;
									default:
										o = t.behavior
								}
								return o.forEach(function (l, s) {
									if (i !== l || o.length === s + 1) return e;
									i = e.placement.split("-")[0], r = P(i);
									var d = e.offsets.popper,
										u = e.offsets.reference,
										c = Math.floor,
										h = "left" === i && c(d.right) > c(u.left) || "right" === i && c(d.left) < c(u.right) || "top" === i && c(d.bottom) > c(u.top) || "bottom" === i && c(d.top) < c(u.bottom),
										p = c(d.left) < c(n.left),
										f = c(d.right) > c(n.right),
										m = c(d.top) < c(n.top),
										g = c(d.bottom) > c(n.bottom),
										_ = "left" === i && p || "right" === i && f || "top" === i && m || "bottom" === i && g,
										y = -1 !== ["top", "bottom"].indexOf(i),
										v = !!t.flipVariations && (y && "start" === a && p || y && "end" === a && f || !y && "start" === a && m || !y && "end" === a && g);
									(h || _ || v) && (e.flipped = !0, (h || _) && (i = o[s + 1]), v && (a = function (e) {
										return "end" === e ? "start" : "start" === e ? "end" : e
									}(a)), e.placement = i + (a ? "-" + a : ""), e.offsets.popper = D({}, e.offsets.popper, O(e.instance.popper, e.offsets.reference, e.placement)), e = I(e.instance.modifiers, e, "flip"))
								}), e
							},
							behavior: "flip",
							padding: 5,
							boundariesElement: "viewport"
						},
						inner: {
							order: 700,
							enabled: !1,
							fn: function (e) {
								var t = e.placement,
									n = t.split("-")[0],
									i = e.offsets,
									r = i.popper,
									a = i.reference,
									o = -1 !== ["left", "right"].indexOf(n),
									l = -1 === ["top", "left"].indexOf(n);
								return r[o ? "left" : "top"] = a[n] - (l ? r[o ? "width" : "height"] : 0), e.placement = P(t), e.offsets.popper = T(r), e
							}
						},
						hide: {
							order: 800,
							enabled: !0,
							fn: function (e) {
								if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
								var t = e.offsets.reference,
									n = A(e.instance.modifiers, function (e) {
										return "preventOverflow" === e.name
									}).boundaries;
								if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
									if (!0 === e.hide) return e;
									e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
								} else {
									if (!1 === e.hide) return e;
									e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
								}
								return e
							}
						},
						computeStyle: {
							order: 850,
							enabled: !0,
							fn: function (e, t) {
								var n = t.x,
									i = t.y,
									r = e.offsets.popper,
									a = A(e.instance.modifiers, function (e) {
										return "applyStyle" === e.name
									}).gpuAcceleration;
								void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
								var o = void 0 !== a ? a : t.gpuAcceleration,
									l = f(e.instance.popper),
									s = k(l),
									d = {
										position: r.position
									},
									u = function (e, t) {
										var n = e.offsets,
											i = n.popper,
											r = n.reference,
											a = -1 !== ["left", "right"].indexOf(e.placement),
											o = -1 !== e.placement.indexOf("-"),
											l = r.width % 2 == i.width % 2,
											s = r.width % 2 == 1 && i.width % 2 == 1,
											d = function (e) {
												return e
											},
											u = t ? a || o || l ? Math.round : Math.floor : d,
											c = t ? Math.round : d;
										return {
											left: u(s && !o && t ? i.left - 1 : i.left),
											top: c(i.top),
											bottom: c(i.bottom),
											right: u(i.right)
										}
									}(e, window.devicePixelRatio < 2 || !V),
									c = "bottom" === n ? "top" : "bottom",
									h = "right" === i ? "left" : "right",
									p = j("transform"),
									m = void 0,
									g = void 0;
								if (g = "bottom" === c ? "HTML" === l.nodeName ? -l.clientHeight + u.bottom : -s.height + u.bottom : u.top, m = "right" === h ? "HTML" === l.nodeName ? -l.clientWidth + u.right : -s.width + u.right : u.left, o && p) d[p] = "translate3d(" + m + "px, " + g + "px, 0)", d[c] = 0, d[h] = 0, d.willChange = "transform";
								else {
									var _ = "bottom" === c ? -1 : 1,
										y = "right" === h ? -1 : 1;
									d[c] = g * _, d[h] = m * y, d.willChange = c + ", " + h
								}
								var v = {
									"x-placement": e.placement
								};
								return e.attributes = D({}, v, e.attributes), e.styles = D({}, d, e.styles), e.arrowStyles = D({}, e.offsets.arrow, e.arrowStyles), e
							},
							gpuAcceleration: !0,
							x: "bottom",
							y: "right"
						},
						applyStyle: {
							order: 900,
							enabled: !0,
							fn: function (e) {
								var t, n;
								return B(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
									!1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
								}), e.arrowElement && Object.keys(e.arrowStyles).length && B(e.arrowElement, e.arrowStyles), e
							},
							onLoad: function (e, t, n, i, r) {
								var a = C(r, t, e, n.positionFixed),
									o = E(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
								return t.setAttribute("x-placement", o), B(t, {
									position: n.positionFixed ? "fixed" : "absolute"
								}), n
							},
							gpuAcceleration: void 0
						}
					}
				},
				K = function () {
					function e(t, n) {
						var i = this,
							r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						b(this, e), this.scheduleUpdate = function () {
							return requestAnimationFrame(i.update)
						}, this.update = o(this.update.bind(this)), this.options = D({}, e.Defaults, r), this.state = {
							isDestroyed: !1,
							isCreated: !1,
							scrollParents: []
						}, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(D({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
							i.options.modifiers[t] = D({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
						}), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
							return D({
								name: e
							}, i.options.modifiers[e])
						}).sort(function (e, t) {
							return e.order - t.order
						}), this.modifiers.forEach(function (e) {
							e.enabled && l(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
						}), this.update();
						var a = this.options.eventsEnabled;
						a && this.enableEventListeners(), this.state.eventsEnabled = a
					}
					return w(e, [{
						key: "update",
						value: function () {
							return function () {
								if (!this.state.isDestroyed) {
									var e = {
										instance: this,
										styles: {},
										arrowStyles: {},
										attributes: {},
										flipped: !1,
										offsets: {}
									};
									e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = E(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = O(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = I(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
								}
							}.call(this)
						}
					}, {
						key: "destroy",
						value: function () {
							return function () {
								return this.state.isDestroyed = !0, R(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
							}.call(this)
						}
					}, {
						key: "enableEventListeners",
						value: function () {
							return function () {
								this.state.eventsEnabled || (this.state = N(this.reference, this.options, this.state, this.scheduleUpdate))
							}.call(this)
						}
					}, {
						key: "disableEventListeners",
						value: function () {
							return W.call(this)
						}
					}]), e
				}();
			K.Utils = ("undefined" != typeof window ? window : e).PopperUtils, K.placements = U, K.Defaults = $, t.default = K
		}.call(this, n(150))
}, function (e, t) {
	var n;
	n = function () {
		return this
	}();
	try {
		n = n || new Function("return this")()
	} catch (e) {
		"object" == typeof window && (n = window)
	}
	e.exports = n
}, function (e, t, n) {
	/*!
	 * metismenu https://github.com/onokumus/metismenu#readme
	 * A jQuery menu plugin
	 * @version 3.0.3
	 * @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
	 * @license: MIT 
	 */
	e.exports = function (e) {
		"use strict";

		function t(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function n(e) {
			for (var n = 1; n < arguments.length; n++) {
				var i = null != arguments[n] ? arguments[n] : {},
					r = Object.keys(i);
				"function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
					return Object.getOwnPropertyDescriptor(i, e).enumerable
				}))), r.forEach(function (n) {
					t(e, n, i[n])
				})
			}
			return e
		}
		var i = function (e) {
				var t = "transitionend",
					n = {
						TRANSITION_END: "mmTransitionEnd",
						triggerTransitionEnd: function (n) {
							e(n).trigger(t)
						},
						supportsTransitionEnd: function () {
							return Boolean(t)
						}
					};

				function i(t) {
					var i = this,
						r = !1;
					return e(this).one(n.TRANSITION_END, function () {
						r = !0
					}), setTimeout(function () {
						r || n.triggerTransitionEnd(i)
					}, t), this
				}
				return e.fn.mmEmulateTransitionEnd = i, e.event.special[n.TRANSITION_END] = {
					bindType: t,
					delegateType: t,
					handle: function (t) {
						if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
					}
				}, n
			}(e = e && e.hasOwnProperty("default") ? e.default : e),
			r = "metisMenu",
			a = e.fn[r],
			o = {
				toggle: !0,
				preventDefault: !0,
				triggerElement: "a",
				parentTrigger: "li",
				subMenu: "ul"
			},
			l = {
				SHOW: "show.metisMenu",
				SHOWN: "shown.metisMenu",
				HIDE: "hide.metisMenu",
				HIDDEN: "hidden.metisMenu",
				CLICK_DATA_API: "click.metisMenu.data-api"
			},
			s = {
				METIS: "metismenu",
				ACTIVE: "mm-active",
				SHOW: "mm-show",
				COLLAPSE: "mm-collapse",
				COLLAPSING: "mm-collapsing",
				COLLAPSED: "mm-collapsed"
			},
			d = function () {
				function t(e, t) {
					this.element = e, this.config = n({}, o, t), this.transitioning = null, this.init()
				}
				var r = t.prototype;
				return r.init = function () {
					var t = this,
						n = this.config;
					e(this.element).addClass(s.METIS), e(this.element).find(n.parentTrigger + "." + s.ACTIVE).children(n.triggerElement).attr("aria-expanded", "true"), e(this.element).find(n.parentTrigger + "." + s.ACTIVE).parents(n.parentTrigger).addClass(s.ACTIVE), e(this.element).find(n.parentTrigger + "." + s.ACTIVE).parents(n.parentTrigger).children(n.triggerElement).attr("aria-expanded", "true"), e(this.element).find(n.parentTrigger + "." + s.ACTIVE).has(n.subMenu).children(n.subMenu).addClass(s.COLLAPSE + " " + s.SHOW), e(this.element).find(n.parentTrigger).not("." + s.ACTIVE).has(n.subMenu).children(n.subMenu).addClass(s.COLLAPSE), e(this.element).find(n.parentTrigger).has(n.subMenu).children(n.triggerElement).on(l.CLICK_DATA_API, function (i) {
						var r = e(this),
							a = r.parent(n.parentTrigger),
							o = a.siblings(n.parentTrigger).children(n.triggerElement),
							l = a.children(n.subMenu);
						n.preventDefault && i.preventDefault(), "true" !== r.attr("aria-disabled") && (a.hasClass(s.ACTIVE) ? (r.attr("aria-expanded", "false"), t.hide(l)) : (t.show(l), r.attr("aria-expanded", "true"), n.toggle && o.attr("aria-expanded", "false")), n.onTransitionStart && n.onTransitionStart(i))
					})
				}, r.show = function (t) {
					var n = this;
					if (!this.transitioning && !e(t).hasClass(s.COLLAPSING)) {
						var r = e(t),
							a = e.Event(l.SHOW);
						if (r.trigger(a), !a.isDefaultPrevented()) {
							if (r.parent(this.config.parentTrigger).addClass(s.ACTIVE), this.config.toggle) {
								var o = r.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + s.SHOW);
								this.hide(o)
							}
							r.removeClass(s.COLLAPSE).addClass(s.COLLAPSING).height(0), this.setTransitioning(!0), r.height(t[0].scrollHeight).one(i.TRANSITION_END, function () {
								n.config && n.element && (r.removeClass(s.COLLAPSING).addClass(s.COLLAPSE + " " + s.SHOW).height(""), n.setTransitioning(!1), r.trigger(l.SHOWN))
							}).mmEmulateTransitionEnd(350)
						}
					}
				}, r.hide = function (t) {
					var n = this;
					if (!this.transitioning && e(t).hasClass(s.SHOW)) {
						var r = e(t),
							a = e.Event(l.HIDE);
						if (r.trigger(a), !a.isDefaultPrevented()) {
							r.parent(this.config.parentTrigger).removeClass(s.ACTIVE), r.height(r.height())[0].offsetHeight, r.addClass(s.COLLAPSING).removeClass(s.COLLAPSE).removeClass(s.SHOW), this.setTransitioning(!0);
							var o = function () {
								n.config && n.element && (n.transitioning && n.config.onTransitionEnd && n.config.onTransitionEnd(), n.setTransitioning(!1), r.trigger(l.HIDDEN), r.removeClass(s.COLLAPSING).addClass(s.COLLAPSE))
							};
							0 === r.height() || "none" === r.css("display") ? o() : r.height(0).one(i.TRANSITION_END, o).mmEmulateTransitionEnd(350)
						}
					}
				}, r.setTransitioning = function (e) {
					this.transitioning = e
				}, r.dispose = function () {
					e.removeData(this.element, "metisMenu"), e(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"), this.transitioning = null, this.config = null, this.element = null
				}, t.jQueryInterface = function (i) {
					return this.each(function () {
						var r = e(this),
							a = r.data("metisMenu"),
							l = n({}, o, r.data(), "object" == typeof i && i ? i : {});
						if (a || (a = new t(this, l), r.data("metisMenu", a)), "string" == typeof i) {
							if (void 0 === a[i]) throw new Error('No method named "' + i + '"');
							a[i]()
						}
					})
				}, t
			}();
		return e.fn[r] = d.jQueryInterface, e.fn[r].Constructor = d, e.fn[r].noConflict = function () {
			return e.fn[r] = a, d.jQueryInterface
		}, d
	}(n(1))
}, function (e, t, n) {
	(function (e) {
		e(document).ready(function () {
			e(".btn-open-options").click(function () {
				e(".ui-theme-settings").toggleClass("settings-open")
			}), e(".close-sidebar-btn").click(function () {
				var t = e(this).attr("data-class");
				e(".app-container").toggleClass(t);
				var n = e(this);
				n.hasClass("is-active") ? n.removeClass("is-active") : n.addClass("is-active")
			}), e(".switch-container-class").on("click", function () {
				var t = e(this).attr("data-class");
				e(".app-container").toggleClass(t), e(this).parent().find(".switch-container-class").removeClass("active"), e(this).addClass("active")
			}), e(".switch-theme-class").on("click", function () {
				var t = e(this).attr("data-class");
				"body-tabs-line" == t && (e(".app-container").removeClass("body-tabs-shadow"), e(".app-container").addClass(t)), "body-tabs-shadow" == t && (e(".app-container").removeClass("body-tabs-line"), e(".app-container").addClass(t)), e(this).parent().find(".switch-theme-class").removeClass("active"), e(this).addClass("active")
			}), e(".switch-header-cs-class").on("click", function () {
				var t = e(this).attr("data-class");
				e(".switch-header-cs-class").removeClass("active"), e(this).addClass("active"), e(".app-header").attr("class", "app-header"), e(".app-header").addClass("header-shadow " + t)
			}), e(".switch-sidebar-cs-class").on("click", function () {
				var t = e(this).attr("data-class");
				e(".switch-sidebar-cs-class").removeClass("active"), e(this).addClass("active"), e(".app-sidebar").attr("class", "app-sidebar"), e(".app-sidebar").addClass("sidebar-shadow " + t)
			})
		})
	}).call(this, n(1))
}, function (e, t, n) {
	"use strict";
	n.r(t),
		function (e) {
			var t = n(4),
				i = n.n(t);
			e(document).ready(function () {
				e(function () {
					var t, n = -1,
						r = 0;
					e("#closeButton").click(function () {
						e(this).is(":checked") ? e("#addBehaviorOnToastCloseClick").prop("disabled", !1) : (e("#addBehaviorOnToastCloseClick").prop("disabled", !0), e("#addBehaviorOnToastCloseClick").prop("checked", !1))
					}), e("#showtoast").click(function () {
						var a, o = e("#toastTypeGroup input:radio:checked").val(),
							l = e("#message").val(),
							s = e("#title").val() || "",
							d = e("#showDuration"),
							u = e("#hideDuration"),
							c = e("#timeOut"),
							h = e("#extendedTimeOut"),
							p = e("#showEasing"),
							f = e("#hideEasing"),
							m = e("#showMethod"),
							g = e("#hideMethod"),
							_ = r++,
							y = e("#addClear").prop("checked");
						i.a.options = {
							closeButton: e("#closeButton").prop("checked"),
							debug: e("#debugInfo").prop("checked"),
							newestOnTop: e("#newestOnTop").prop("checked"),
							progressBar: e("#progressBar").prop("checked"),
							rtl: e("#rtl").prop("checked"),
							positionClass: e("#positionGroup input:radio:checked").val() || "toast-top-right",
							preventDuplicates: e("#preventDuplicates").prop("checked"),
							onclick: null
						}, e("#addBehaviorOnToastClick").prop("checked") && (i.a.options.onclick = function () {
							alert("You can perform some custom action after a toast goes away")
						}), e("#addBehaviorOnToastCloseClick").prop("checked") && (i.a.options.onCloseClick = function () {
							alert("You can perform some custom action when the close button is clicked")
						}), d.val().length && (i.a.options.showDuration = parseInt(d.val())), u.val().length && (i.a.options.hideDuration = parseInt(u.val())), c.val().length && (i.a.options.timeOut = y ? 0 : parseInt(c.val())), h.val().length && (i.a.options.extendedTimeOut = y ? 0 : parseInt(h.val())), p.val().length && (i.a.options.showEasing = p.val()), f.val().length && (i.a.options.hideEasing = f.val()), m.val().length && (i.a.options.showMethod = m.val()), g.val().length && (i.a.options.hideMethod = g.val()), y && (l = function (e) {
							return e = e || "Clear itself?", e += '<br /><br /><button type="button" class="btn clear">Yes</button>'
						}(l), i.a.options.tapToDismiss = !1), l || (++n === (a = ["My name is Inigo Montoya. You killed my father. Prepare to die!", '<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>', "Are you the six fingered man?", "Inconceivable!", "I do not think that means what you think it means.", "Have fun storming the castle!"]).length && (n = 0), l = a[n]), e("#toastrOptions").text('Command: toastr["' + o + '"]("' + l + (s ? '", "' + s : "") + '")\n\ntoastr.options = ' + JSON.stringify(i.a.options, null, 2));
						var v = i.a[o](l, s);
						t = v, void 0 !== v && (v.find("#okBtn").length && v.delegate("#okBtn", "click", function () {
							alert("you clicked me. i was toast #" + _ + ". goodbye!"), v.remove()
						}), v.find("#surpriseBtn").length && v.delegate("#surpriseBtn", "click", function () {
							alert("Surprise! you clicked me. i was toast #" + _ + ". You could perform an action here.")
						}), v.find(".clear").length && v.delegate(".clear", "click", function () {
							i.a.clear(v, {
								force: !0
							})
						}))
					}), e("#clearlasttoast").click(function () {
						i.a.clear(t)
					}), e("#cleartoasts").click(function () {
						i.a.clear()
					})
				}), e(".show-toastr-example").click(function () {
					i.a.options = {
						closeButton: !0,
						debug: !1,
						newestOnTop: !0,
						progressBar: !0,
						positionClass: "toast-bottom-center",
						preventDuplicates: !1,
						onclick: null,
						showDuration: "300",
						hideDuration: "1000",
						timeOut: "5000",
						extendedTimeOut: "1000",
						showEasing: "swing",
						hideEasing: "linear",
						showMethod: "fadeIn",
						hideMethod: "fadeOut"
					}, i.a.info("You don't have any new items in your calendar today!", "Example Toastr")
				})
			})
		}.call(this, n(1))
}, function (e, t) {
	e.exports = function () {
		throw new Error("define cannot be used indirect")
	}
}, function (e, t, n) {
	"use strict";
	n.r(t),
		function (e) {
			var t = n(13);
			e(document).ready(function () {
				setTimeout(function () {
					if (e(".scrollbar-container")[0]) {
						e(".scrollbar-container").each(function () {
							new t.a(e(this)[0], {
								wheelSpeed: 2,
								wheelPropagation: !1,
								minScrollbarLength: 20
							})
						});
						new t.a(".scrollbar-sidebar", {
							wheelSpeed: 2,
							wheelPropagation: !1,
							minScrollbarLength: 20
						})
					}
				}, 1e3)
			})
		}.call(this, n(1))
}, function (e, t, n) {
	"use strict";
	n.r(t),
		function (e) {
			n(157);
			e(document).ready(function () {
				e("#calendar-list").fullCalendar({
					header: {
						left: "prev,next today",
						center: "title",
						right: "listDay,listWeek,month"
					},
					themeSystem: "bootstrap4",
					bootstrapFontAwesome: !0,
					views: {
						listDay: {
							buttonText: "list day"
						},
						listWeek: {
							buttonText: "list week"
						}
					},
					defaultView: "listWeek",
					defaultDate: "2018-03-12",
					navLinks: !0,
					editable: !0,
					eventLimit: !0,
					events: [{
						title: "All Day Event",
						start: "2018-03-01"
					}, {
						title: "Long Event",
						start: "2018-03-07",
						end: "2018-03-10"
					}, {
						id: 999,
						title: "Repeating Event",
						start: "2018-03-09T16:00:00"
					}, {
						id: 999,
						title: "Repeating Event",
						start: "2018-03-16T16:00:00"
					}, {
						title: "Conference",
						start: "2018-03-11",
						end: "2018-03-13"
					}, {
						title: "Meeting",
						start: "2018-03-12T10:30:00",
						end: "2018-03-12T12:30:00"
					}, {
						title: "Lunch",
						start: "2018-03-12T12:00:00"
					}, {
						title: "Meeting",
						start: "2018-03-12T14:30:00"
					}, {
						title: "Happy Hour",
						start: "2018-03-12T17:30:00"
					}, {
						title: "Dinner",
						start: "2018-03-12T20:00:00"
					}, {
						title: "Birthday Party",
						start: "2018-03-13T07:00:00"
					}, {
						title: "Click for Google",
						url: "http://google.com/",
						start: "2018-03-28"
					}]
				}), e("#calendar").fullCalendar({
					header: {
						left: "prev,next today",
						center: "title",
						right: "month,basicWeek,basicDay"
					},
					themeSystem: "bootstrap4",
					bootstrapFontAwesome: !0,
					defaultDate: "2018-03-12",
					navLinks: !0,
					editable: !0,
					eventLimit: !0,
					events: [{
						title: "All Day Event",
						start: "2018-03-01"
					}, {
						title: "Long Event",
						start: "2018-03-07",
						end: "2018-03-10"
					}, {
						id: 999,
						title: "Repeating Event",
						start: "2018-03-09T16:00:00"
					}, {
						id: 999,
						title: "Repeating Event",
						start: "2018-03-16T16:00:00"
					}, {
						title: "Conference",
						start: "2018-03-11",
						end: "2018-03-13"
					}, {
						title: "Meeting",
						start: "2018-03-12T10:30:00",
						end: "2018-03-12T12:30:00"
					}, {
						title: "Lunch",
						start: "2018-03-12T12:00:00"
					}, {
						title: "Meeting",
						start: "2018-03-12T14:30:00"
					}, {
						title: "Happy Hour",
						start: "2018-03-12T17:30:00"
					}, {
						title: "Dinner",
						start: "2018-03-12T20:00:00"
					}, {
						title: "Birthday Party",
						start: "2018-03-13T07:00:00"
					}, {
						title: "Click for Google",
						url: "http://google.com/",
						start: "2018-03-28"
					}]
				}), e("#calendar-bg-events").fullCalendar({
					header: {
						left: "prev,next today",
						center: "title",
						right: "month,agendaWeek,agendaDay,listMonth"
					},
					themeSystem: "bootstrap4",
					bootstrapFontAwesome: !0,
					defaultDate: "2018-03-12",
					navLinks: !0,
					businessHours: !0,
					editable: !0,
					events: [{
						title: "Business Lunch",
						start: "2018-03-03T13:00:00",
						constraint: "businessHours"
					}, {
						title: "Meeting",
						start: "2018-03-13T11:00:00",
						constraint: "availableForMeeting",
						color: "#257e4a"
					}, {
						title: "Conference",
						start: "2018-03-18",
						end: "2018-03-20"
					}, {
						title: "Party",
						start: "2018-03-29T20:00:00"
					}, {
						id: "availableForMeeting",
						start: "2018-03-11T10:00:00",
						end: "2018-03-11T16:00:00",
						rendering: "background"
					}, {
						id: "availableForMeeting",
						start: "2018-03-13T10:00:00",
						end: "2018-03-13T16:00:00",
						rendering: "background"
					}, {
						start: "2018-03-24",
						end: "2018-03-28",
						overlap: !1,
						rendering: "background",
						color: "var(--danger)"
					}, {
						start: "2018-03-06",
						end: "2018-03-08",
						overlap: !1,
						rendering: "background",
						color: "var(--success)"
					}]
				})
			})
		}.call(this, n(1))
}, function (e, t, n) {
	/*!
	 * FullCalendar v3.10.0
	 * Docs & License: https://fullcalendar.io/
	 * (c) 2018 Adam Shaw
	 */
	var i;
	"undefined" != typeof self && self, i = function (e, t) {
		return function (e) {
			var t = {};

			function n(i) {
				if (t[i]) return t[i].exports;
				var r = t[i] = {
					i: i,
					l: !1,
					exports: {}
				};
				return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
			}
			return n.m = e, n.c = t, n.d = function (e, t, i) {
				n.o(e, t) || Object.defineProperty(e, t, {
					configurable: !1,
					enumerable: !0,
					get: i
				})
			}, n.n = function (e) {
				var t = e && e.__esModule ? function () {
					return e.default
				} : function () {
					return e
				};
				return n.d(t, "a", t), t
			}, n.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, n.p = "", n(n.s = 256)
		}([function (t, n) {
			t.exports = e
		}, , function (e, t) {
			var n = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function (e, t) {
				e.__proto__ = t
			} || function (e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			t.__extends = function (e, t) {
				function i() {
					this.constructor = e
				}
				n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
			}
		}, function (e, n) {
			e.exports = t
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(0),
				r = n(3);

			function a(e) {
				e.height("")
			}

			function o(e) {
				var t, n = e[0].offsetWidth - e[0].clientWidth,
					i = e[0].offsetHeight - e[0].clientHeight;
				return n = l(n), t = {
					left: 0,
					right: 0,
					top: 0,
					bottom: i = l(i)
				}, ! function () {
					null === s && (e = r("<div><div/></div>").css({
						position: "absolute",
						top: -1e3,
						left: 0,
						border: 0,
						padding: 0,
						overflow: "scroll",
						direction: "rtl"
					}).appendTo("body"), t = e.children().offset().left > e.offset().left, e.remove(), s = t);
					var e, t;
					return s
				}() || "rtl" !== e.css("direction") ? t.right = n : t.left = n, t
			}

			function l(e) {
				return e = Math.max(0, e), e = Math.round(e)
			}
			t.compensateScroll = function (e, t) {
				t.left && e.css({
					"border-left-width": 1,
					"margin-left": t.left - 1
				}), t.right && e.css({
					"border-right-width": 1,
					"margin-right": t.right - 1
				})
			}, t.uncompensateScroll = function (e) {
				e.css({
					"margin-left": "",
					"margin-right": "",
					"border-left-width": "",
					"border-right-width": ""
				})
			}, t.disableCursor = function () {
				r("body").addClass("fc-not-allowed")
			}, t.enableCursor = function () {
				r("body").removeClass("fc-not-allowed")
			}, t.distributeHeight = function (e, t, n) {
				var i = Math.floor(t / e.length),
					o = Math.floor(t - i * (e.length - 1)),
					l = [],
					s = [],
					d = [],
					u = 0;
				a(e), e.each(function (t, n) {
					var a = t === e.length - 1 ? o : i,
						c = r(n).outerHeight(!0);
					c < a ? (l.push(n), s.push(c), d.push(r(n).height())) : u += c
				}), n && (t -= u, i = Math.floor(t / l.length), o = Math.floor(t - i * (l.length - 1))), r(l).each(function (e, t) {
					var n = e === l.length - 1 ? o : i,
						a = s[e],
						u = n - (a - d[e]);
					a < n && r(t).height(u)
				})
			}, t.undistributeHeight = a, t.matchCellWidths = function (e) {
				var t = 0;
				return e.find("> *").each(function (e, n) {
					var i = r(n).outerWidth();
					i > t && (t = i)
				}), t++, e.width(t), t
			}, t.subtractInnerElHeight = function (e, t) {
				var n, i = e.add(t);
				return i.css({
					position: "relative",
					left: -1
				}), n = e.outerHeight() - t.outerHeight(), i.css({
					position: "",
					left: ""
				}), n
			}, t.getScrollParent = function (e) {
				var t = e.css("position"),
					n = e.parents().filter(function () {
						var e = r(this);
						return /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
					}).eq(0);
				return "fixed" !== t && n.length ? n : r(e[0].ownerDocument || document)
			}, t.getOuterRect = function (e, t) {
				var n = e.offset(),
					i = n.left - (t ? t.left : 0),
					r = n.top - (t ? t.top : 0);
				return {
					left: i,
					right: i + e.outerWidth(),
					top: r,
					bottom: r + e.outerHeight()
				}
			}, t.getClientRect = function (e, t) {
				var n = e.offset(),
					i = o(e),
					r = n.left + d(e, "border-left-width") + i.left - (t ? t.left : 0),
					a = n.top + d(e, "border-top-width") + i.top - (t ? t.top : 0);
				return {
					left: r,
					right: r + e[0].clientWidth,
					top: a,
					bottom: a + e[0].clientHeight
				}
			}, t.getContentRect = function (e, t) {
				var n = e.offset(),
					i = n.left + d(e, "border-left-width") + d(e, "padding-left") - (t ? t.left : 0),
					r = n.top + d(e, "border-top-width") + d(e, "padding-top") - (t ? t.top : 0);
				return {
					left: i,
					right: i + e.width(),
					top: r,
					bottom: r + e.height()
				}
			}, t.getScrollbarWidths = o;
			var s = null;

			function d(e, t) {
				return parseFloat(e.css(t)) || 0
			}

			function u(e) {
				e.preventDefault()
			}

			function c(e, t, n, i, r) {
				if (n.func) return n.func(e, t);
				var a = e[n.field],
					o = t[n.field];
				return null == a && i && (a = i[n.field]), null == o && r && (o = r[n.field]), h(a, o) * (n.order || 1)
			}

			function h(e, t) {
				return e || t ? null == t ? -1 : null == e ? 1 : "string" === r.type(e) || "string" === r.type(t) ? String(e).localeCompare(String(t)) : e - t : 0
			}

			function p(e, n) {
				var i, r, a;
				for (i = 0; i < t.unitsDesc.length && !((a = f(r = t.unitsDesc[i], e, n)) >= 1 && M(a)); i++);
				return r
			}

			function f(e, t, n) {
				return null != n ? n.diff(t, e, !0) : i.isDuration(t) ? t.as(e) : t.end.diff(t.start, e, !0)
			}

			function m(e) {
				return Boolean(e.hours() || e.minutes() || e.seconds() || e.milliseconds())
			}

			function g() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var n = window.console;
				if (n && n.log) return n.log.apply(n, e)
			}
			t.isPrimaryMouseButton = function (e) {
				return 1 === e.which && !e.ctrlKey
			}, t.getEvX = function (e) {
				var t = e.originalEvent.touches;
				return t && t.length ? t[0].pageX : e.pageX
			}, t.getEvY = function (e) {
				var t = e.originalEvent.touches;
				return t && t.length ? t[0].pageY : e.pageY
			}, t.getEvIsTouch = function (e) {
				return /^touch/.test(e.type)
			}, t.preventSelection = function (e) {
				e.addClass("fc-unselectable").on("selectstart", u)
			}, t.allowSelection = function (e) {
				e.removeClass("fc-unselectable").off("selectstart", u)
			}, t.preventDefault = u, t.intersectRects = function (e, t) {
				var n = {
					left: Math.max(e.left, t.left),
					right: Math.min(e.right, t.right),
					top: Math.max(e.top, t.top),
					bottom: Math.min(e.bottom, t.bottom)
				};
				return n.left < n.right && n.top < n.bottom && n
			}, t.constrainPoint = function (e, t) {
				return {
					left: Math.min(Math.max(e.left, t.left), t.right),
					top: Math.min(Math.max(e.top, t.top), t.bottom)
				}
			}, t.getRectCenter = function (e) {
				return {
					left: (e.left + e.right) / 2,
					top: (e.top + e.bottom) / 2
				}
			}, t.diffPoints = function (e, t) {
				return {
					left: e.left - t.left,
					top: e.top - t.top
				}
			}, t.parseFieldSpecs = function (e) {
				var t, n, i = [],
					a = [];
				for ("string" == typeof e ? a = e.split(/\s*,\s*/) : "function" == typeof e ? a = [e] : r.isArray(e) && (a = e), t = 0; t < a.length; t++) "string" == typeof (n = a[t]) ? i.push("-" === n.charAt(0) ? {
					field: n.substring(1),
					order: -1
				} : {
					field: n,
					order: 1
				}) : "function" == typeof n && i.push({
					func: n
				});
				return i
			}, t.compareByFieldSpecs = function (e, t, n, i, r) {
				var a, o;
				for (a = 0; a < n.length; a++)
					if (o = c(e, t, n[a], i, r)) return o;
				return 0
			}, t.compareByFieldSpec = c, t.flexibleCompare = h, t.dayIDs = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], t.unitsDesc = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"], t.diffDayTime = function (e, t) {
				return i.duration({
					days: e.clone().stripTime().diff(t.clone().stripTime(), "days"),
					ms: e.time() - t.time()
				})
			}, t.diffDay = function (e, t) {
				return i.duration({
					days: e.clone().stripTime().diff(t.clone().stripTime(), "days")
				})
			}, t.diffByUnit = function (e, t, n) {
				return i.duration(Math.round(e.diff(t, n, !0)), n)
			}, t.computeGreatestUnit = p, t.computeDurationGreatestUnit = function (e, t) {
				var n = p(e);
				return "week" === n && "object" == typeof t && t.days && (n = "day"), n
			}, t.divideRangeByDuration = function (e, t, n) {
				var i;
				return m(n) ? (t - e) / n : (i = n.asMonths(), Math.abs(i) >= 1 && M(i) ? t.diff(e, "months", !0) / i : t.diff(e, "days", !0) / n.asDays())
			}, t.divideDurationByDuration = function (e, t) {
				var n, i;
				return m(e) || m(t) ? e / t : (n = e.asMonths(), i = t.asMonths(), Math.abs(n) >= 1 && M(n) && Math.abs(i) >= 1 && M(i) ? n / i : e.asDays() / t.asDays())
			}, t.multiplyDuration = function (e, t) {
				var n;
				return m(e) ? i.duration(e * t) : (n = e.asMonths(), Math.abs(n) >= 1 && M(n) ? i.duration({
					months: n * t
				}) : i.duration({
					days: e.asDays() * t
				}))
			}, t.durationHasTime = m, t.isNativeDate = function (e) {
				return "[object Date]" === Object.prototype.toString.call(e) || e instanceof Date
			}, t.isTimeString = function (e) {
				return "string" == typeof e && /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(e)
			}, t.log = g, t.warn = function () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				var n = window.console;
				return n && n.warn ? n.warn.apply(n, e) : g.apply(null, e)
			};
			var _ = {}.hasOwnProperty;

			function y(e, t) {
				return _.call(e, t)
			}

			function v(e) {
				return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
			}

			function M(e) {
				return e % 1 == 0
			}
			t.mergeProps = function e(t, n) {
				var i, r, a, o, l, s, d = {};
				if (n)
					for (i = 0; i < n.length; i++) {
						for (r = n[i], a = [], o = t.length - 1; o >= 0; o--)
							if ("object" == typeof (l = t[o][r])) a.unshift(l);
							else if (void 0 !== l) {
							d[r] = l;
							break
						}
						a.length && (d[r] = e(a))
					}
				for (i = t.length - 1; i >= 0; i--)
					for (r in s = t[i]) r in d || (d[r] = s[r]);
				return d
			}, t.copyOwnProps = function (e, t) {
				for (var n in e) y(e, n) && (t[n] = e[n])
			}, t.hasOwnProp = y, t.applyAll = function (e, t, n) {
				if (r.isFunction(e) && (e = [e]), e) {
					var i = void 0,
						a = void 0;
					for (i = 0; i < e.length; i++) a = e[i].apply(t, n) || a;
					return a
				}
			}, t.removeMatching = function (e, t) {
				for (var n = 0, i = 0; i < e.length;) t(e[i]) ? (e.splice(i, 1), n++) : i++;
				return n
			}, t.removeExact = function (e, t) {
				for (var n = 0, i = 0; i < e.length;) e[i] === t ? (e.splice(i, 1), n++) : i++;
				return n
			}, t.isArraysEqual = function (e, t) {
				var n, i = e.length;
				if (null == i || i !== t.length) return !1;
				for (n = 0; n < i; n++)
					if (e[n] !== t[n]) return !1;
				return !0
			}, t.firstDefined = function () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				for (var n = 0; n < e.length; n++)
					if (void 0 !== e[n]) return e[n]
			}, t.htmlEscape = v, t.stripHtmlEntities = function (e) {
				return e.replace(/&.*?;/g, "")
			}, t.cssToStr = function (e) {
				var t = [];
				return r.each(e, function (e, n) {
					null != n && t.push(e + ":" + n)
				}), t.join(";")
			}, t.attrsToStr = function (e) {
				var t = [];
				return r.each(e, function (e, n) {
					null != n && t.push(e + '="' + v(n) + '"')
				}), t.join(" ")
			}, t.capitaliseFirstLetter = function (e) {
				return e.charAt(0).toUpperCase() + e.slice(1)
			}, t.compareNumbers = function (e, t) {
				return e - t
			}, t.isInt = M, t.proxy = function (e, t) {
				var n = e[t];
				return function () {
					return n.apply(e, arguments)
				}
			}, t.debounce = function (e, t, n) {
				var i, r, a, o, l;
				void 0 === n && (n = !1);
				var s = function () {
					var d = +new Date - o;
					d < t ? i = setTimeout(s, t - d) : (i = null, n || (l = e.apply(a, r), a = r = null))
				};
				return function () {
					a = this, r = arguments, o = +new Date;
					var d = n && !i;
					return i || (i = setTimeout(s, t)), d && (l = e.apply(a, r), a = r = null), l
				}
			}
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(0),
				r = n(11),
				a = function () {
					function e(e, t) {
						this.isStart = !0, this.isEnd = !0, i.isMoment(e) && (e = e.clone().stripZone()), i.isMoment(t) && (t = t.clone().stripZone()), e && (this.startMs = e.valueOf()), t && (this.endMs = t.valueOf())
					}
					return e.invertRanges = function (t, n) {
						var i, r, a = [],
							l = n.startMs;
						for (t.sort(o), i = 0; i < t.length; i++)(r = t[i]).startMs > l && a.push(new e(l, r.startMs)), r.endMs > l && (l = r.endMs);
						return l < n.endMs && a.push(new e(l, n.endMs)), a
					}, e.prototype.intersect = function (t) {
						var n = this.startMs,
							i = this.endMs,
							r = null;
						return null != t.startMs && (n = null == n ? t.startMs : Math.max(n, t.startMs)), null != t.endMs && (i = null == i ? t.endMs : Math.min(i, t.endMs)), (null == n || null == i || n < i) && ((r = new e(n, i)).isStart = this.isStart && n === this.startMs, r.isEnd = this.isEnd && i === this.endMs), r
					}, e.prototype.intersectsWith = function (e) {
						return (null == this.endMs || null == e.startMs || this.endMs > e.startMs) && (null == this.startMs || null == e.endMs || this.startMs < e.endMs)
					}, e.prototype.containsRange = function (e) {
						return (null == this.startMs || null != e.startMs && e.startMs >= this.startMs) && (null == this.endMs || null != e.endMs && e.endMs <= this.endMs)
					}, e.prototype.containsDate = function (e) {
						var t = e.valueOf();
						return (null == this.startMs || t >= this.startMs) && (null == this.endMs || t < this.endMs)
					}, e.prototype.constrainDate = function (e) {
						var t = e.valueOf();
						return null != this.startMs && t < this.startMs && (t = this.startMs), null != this.endMs && t >= this.endMs && (t = this.endMs - 1), t
					}, e.prototype.equals = function (e) {
						return this.startMs === e.startMs && this.endMs === e.endMs
					}, e.prototype.clone = function () {
						var t = new e(this.startMs, this.endMs);
						return t.isStart = this.isStart, t.isEnd = this.isEnd, t
					}, e.prototype.getStart = function () {
						return null != this.startMs ? r.default.utc(this.startMs).stripZone() : null
					}, e.prototype.getEnd = function () {
						return null != this.endMs ? r.default.utc(this.endMs).stripZone() : null
					}, e.prototype.as = function (e) {
						return i.utc(this.endMs).diff(i.utc(this.startMs), e, !0)
					}, e
				}();

			function o(e, t) {
				return e.startMs - t.startMs
			}
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(52),
				o = n(35),
				l = n(36),
				s = function (e) {
					function t(n) {
						var i = e.call(this) || this;
						return i.calendar = n, i.className = [], i.uid = String(t.uuid++), i
					}
					return i.__extends(t, e), t.parse = function (e, t) {
						var n = new this(t);
						return !("object" != typeof e || !n.applyProps(e)) && n
					}, t.normalizeId = function (e) {
						return e ? String(e) : null
					}, t.prototype.fetch = function (e, t, n) {}, t.prototype.removeEventDefsById = function (e) {}, t.prototype.removeAllEventDefs = function () {}, t.prototype.getPrimitive = function (e) {}, t.prototype.parseEventDefs = function (e) {
						var t, n, i = [];
						for (t = 0; t < e.length; t++)(n = this.parseEventDef(e[t])) && i.push(n);
						return i
					}, t.prototype.parseEventDef = function (e) {
						var t = this.calendar.opt("eventDataTransform"),
							n = this.eventDataTransform;
						return t && (e = t(e, this.calendar)), n && (e = n(e, this.calendar)), l.default.parse(e, this)
					}, t.prototype.applyManualStandardProps = function (e) {
						return null != e.id && (this.id = t.normalizeId(e.id)), r.isArray(e.className) ? this.className = e.className : "string" == typeof e.className && (this.className = e.className.split(/\s+/)), !0
					}, t.uuid = 0, t.defineStandardProps = a.default.defineStandardProps, t.copyVerbatimStandardProps = a.default.copyVerbatimStandardProps, t
				}(o.default);
			t.default = s, a.default.mixInto(s), s.defineStandardProps({
				id: !1,
				className: !1,
				color: !0,
				backgroundColor: !0,
				borderColor: !0,
				textColor: !0,
				editable: !0,
				startEditable: !0,
				durationEditable: !0,
				rendering: !0,
				overlap: !0,
				constraint: !0,
				allDayDefault: !0,
				eventDataTransform: !0
			})
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(15),
				o = 0,
				l = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.prototype.listenTo = function (e, t, n) {
						if ("object" == typeof t)
							for (var i in t) t.hasOwnProperty(i) && this.listenTo(e, i, t[i]);
						else "string" == typeof t && e.on(t + "." + this.getListenerNamespace(), r.proxy(n, this))
					}, t.prototype.stopListeningTo = function (e, t) {
						e.off((t || "") + "." + this.getListenerNamespace())
					}, t.prototype.getListenerNamespace = function () {
						return null == this.listenerId && (this.listenerId = o++), "_listener" + this.listenerId
					}, t
				}(a.default);
			t.default = l
		}, , function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(37),
				a = n(53),
				o = n(16),
				l = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.prototype.buildInstances = function () {
						return [this.buildInstance()]
					}, t.prototype.buildInstance = function () {
						return new a.default(this, this.dateProfile)
					}, t.prototype.isAllDay = function () {
						return this.dateProfile.isAllDay()
					}, t.prototype.clone = function () {
						var t = e.prototype.clone.call(this);
						return t.dateProfile = this.dateProfile, t
					}, t.prototype.rezone = function () {
						var e = this.source.calendar,
							t = this.dateProfile;
						this.dateProfile = new o.default(e.moment(t.start), t.end ? e.moment(t.end) : null, e)
					}, t.prototype.applyManualStandardProps = function (t) {
						var n = e.prototype.applyManualStandardProps.call(this, t),
							i = o.default.parse(t, this.source);
						return !!i && (this.dateProfile = i, null != t.date && (this.miscProps.date = t.date), n)
					}, t
				}(r.default);
			t.default = l, l.defineStandardProps({
				start: !1,
				date: !1,
				end: !1,
				allDay: !1
			})
		}, , function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(0),
				r = n(3),
				a = n(4),
				o = /^\s*\d{4}-\d\d$/,
				l = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
				s = i.fn;
			t.newMomentProto = s;
			var d = r.extend({}, s);
			t.oldMomentProto = d;
			var u = i.momentProperties;
			u.push("_fullCalendar"), u.push("_ambigTime"), u.push("_ambigZone"), t.oldMomentFormat = function (e, t) {
				return d.format.call(e, t)
			};
			var c = function () {
				return h(arguments)
			};

			function h(e, t, n) {
				void 0 === t && (t = !1), void 0 === n && (n = !1);
				var s, d, u, c, h = e[0],
					p = 1 === e.length && "string" == typeof h;
				return i.isMoment(h) || a.isNativeDate(h) || void 0 === h ? c = i.apply(null, e) : (s = !1, d = !1, p ? o.test(h) ? (e = [h += "-01"], s = !0, d = !0) : (u = l.exec(h)) && (s = !u[5], d = !0) : r.isArray(h) && (d = !0), c = t || s ? i.utc.apply(i, e) : i.apply(null, e), s ? (c._ambigTime = !0, c._ambigZone = !0) : n && (d ? c._ambigZone = !0 : p && c.utcOffset(h))), c._fullCalendar = !0, c
			}
			t.default = c, c.utc = function () {
				var e = h(arguments, !0);
				return e.hasTime() && e.utc(), e
			}, c.parseZone = function () {
				return h(arguments, !0, !0)
			}, s.week = s.weeks = function (e) {
				var t = this._locale._fullCalendar_weekCalc;
				return null == e && "function" == typeof t ? t(this) : "ISO" === t ? d.isoWeek.apply(this, arguments) : d.week.apply(this, arguments)
			}, s.time = function (e) {
				if (!this._fullCalendar) return d.time.apply(this, arguments);
				if (null == e) return i.duration({
					hours: this.hours(),
					minutes: this.minutes(),
					seconds: this.seconds(),
					milliseconds: this.milliseconds()
				});
				this._ambigTime = !1, i.isDuration(e) || i.isMoment(e) || (e = i.duration(e));
				var t = 0;
				return i.isDuration(e) && (t = 24 * Math.floor(e.asDays())), this.hours(t + e.hours()).minutes(e.minutes()).seconds(e.seconds()).milliseconds(e.milliseconds())
			}, s.stripTime = function () {
				return this._ambigTime || (this.utc(!0), this.set({
					hours: 0,
					minutes: 0,
					seconds: 0,
					ms: 0
				}), this._ambigTime = !0, this._ambigZone = !0), this
			}, s.hasTime = function () {
				return !this._ambigTime
			}, s.stripZone = function () {
				var e;
				return this._ambigZone || (e = this._ambigTime, this.utc(!0), this._ambigTime = e || !1, this._ambigZone = !0), this
			}, s.hasZone = function () {
				return !this._ambigZone
			}, s.local = function (e) {
				return d.local.call(this, this._ambigZone || e), this._ambigTime = !1, this._ambigZone = !1, this
			}, s.utc = function (e) {
				return d.utc.call(this, e), this._ambigTime = !1, this._ambigZone = !1, this
			}, s.utcOffset = function (e) {
				return null != e && (this._ambigTime = !1, this._ambigZone = !1), d.utcOffset.apply(this, arguments)
			}
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				function e(e, t) {
					this.isAllDay = !1, this.unzonedRange = e, this.isAllDay = t
				}
				return e.prototype.toLegacy = function (e) {
					return {
						start: e.msToMoment(this.unzonedRange.startMs, this.isAllDay),
						end: e.msToMoment(this.unzonedRange.endMs, this.isAllDay)
					}
				}, e
			}();
			t.default = n
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.prototype.on = function (e, t) {
						return r(this).on(e, this._prepareIntercept(t)), this
					}, t.prototype.one = function (e, t) {
						return r(this).one(e, this._prepareIntercept(t)), this
					}, t.prototype._prepareIntercept = function (e) {
						var t = function (t, n) {
							return e.apply(n.context || this, n.args || [])
						};
						return e.guid || (e.guid = r.guid++), t.guid = e.guid, t
					}, t.prototype.off = function (e, t) {
						return r(this).off(e, t), this
					}, t.prototype.trigger = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						return r(this).triggerHandler(e, {
							args: t
						}), this
					}, t.prototype.triggerWith = function (e, t, n) {
						return r(this).triggerHandler(e, {
							context: t,
							args: n
						}), this
					}, t.prototype.hasHandlers = function (e) {
						var t = r._data(this, "events");
						return t && t[e] && t[e].length > 0
					}, t
				}(n(15).default);
			t.default = a
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				function e(e) {
					this.view = e._getView(), this.component = e
				}
				return e.prototype.opt = function (e) {
					return this.view.opt(e)
				}, e.prototype.end = function () {}, e
			}();
			t.default = n
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				function e() {}
				return e.mixInto = function (e) {
					var t = this;
					Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
						e.prototype[n] || (e.prototype[n] = t.prototype[n])
					})
				}, e.mixOver = function (e) {
					var t = this;
					Object.getOwnPropertyNames(this.prototype).forEach(function (n) {
						e.prototype[n] = t.prototype[n]
					})
				}, e
			}();
			t.default = n
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(5),
				r = function () {
					function e(e, t, n) {
						this.start = e, this.end = t || null, this.unzonedRange = this.buildUnzonedRange(n)
					}
					return e.parse = function (t, n) {
						var i = t.start || t.date,
							r = t.end;
						if (!i) return !1;
						var a = n.calendar,
							o = a.moment(i),
							l = r ? a.moment(r) : null,
							s = t.allDay,
							d = a.opt("forceEventDuration");
						return !!o.isValid() && (null == s && null == (s = n.allDayDefault) && (s = a.opt("allDayDefault")), !0 === s ? (o.stripTime(), l && l.stripTime()) : !1 === s && (o.hasTime() || o.time(0), l && !l.hasTime() && l.time(0)), !l || l.isValid() && l.isAfter(o) || (l = null), !l && d && (l = a.getDefaultEventEnd(!o.hasTime(), o)), new e(o, l, a))
					}, e.isStandardProp = function (e) {
						return "start" === e || "date" === e || "end" === e || "allDay" === e
					}, e.prototype.isAllDay = function () {
						return !(this.start.hasTime() || this.end && this.end.hasTime())
					}, e.prototype.buildUnzonedRange = function (e) {
						var t = this.start.clone().stripZone().valueOf(),
							n = this.getEnd(e).stripZone().valueOf();
						return new i.default(t, n)
					}, e.prototype.getEnd = function (e) {
						return this.end ? this.end.clone() : e.getDefaultEventEnd(this.isAllDay(), this.start)
					}, e
				}();
			t.default = r
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(4),
				a = function (e) {
					function t(t, n) {
						var i = e.call(this, n) || this;
						return i.component = t, i
					}
					return i.__extends(t, e), t.prototype.handleInteractionStart = function (t) {
						var n, i, a, o = this.subjectEl;
						this.component.hitsNeeded(), this.computeScrollBounds(), t ? (a = i = {
							left: r.getEvX(t),
							top: r.getEvY(t)
						}, o && (n = r.getOuterRect(o), a = r.constrainPoint(a, n)), this.origHit = this.queryHit(a.left, a.top), o && this.options.subjectCenter && (this.origHit && (n = r.intersectRects(this.origHit, n) || n), a = r.getRectCenter(n)), this.coordAdjust = r.diffPoints(a, i)) : (this.origHit = null, this.coordAdjust = null), e.prototype.handleInteractionStart.call(this, t)
					}, t.prototype.handleDragStart = function (t) {
						var n;
						e.prototype.handleDragStart.call(this, t), (n = this.queryHit(r.getEvX(t), r.getEvY(t))) && this.handleHitOver(n)
					}, t.prototype.handleDrag = function (t, n, i) {
						var a;
						e.prototype.handleDrag.call(this, t, n, i), o(a = this.queryHit(r.getEvX(i), r.getEvY(i)), this.hit) || (this.hit && this.handleHitOut(), a && this.handleHitOver(a))
					}, t.prototype.handleDragEnd = function (t) {
						this.handleHitDone(), e.prototype.handleDragEnd.call(this, t)
					}, t.prototype.handleHitOver = function (e) {
						var t = o(e, this.origHit);
						this.hit = e, this.trigger("hitOver", this.hit, t, this.origHit)
					}, t.prototype.handleHitOut = function () {
						this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
					}, t.prototype.handleHitDone = function () {
						this.hit && this.trigger("hitDone", this.hit)
					}, t.prototype.handleInteractionEnd = function (t, n) {
						e.prototype.handleInteractionEnd.call(this, t, n), this.origHit = null, this.hit = null, this.component.hitsNotNeeded()
					}, t.prototype.handleScrollEnd = function () {
						e.prototype.handleScrollEnd.call(this), this.isDragging && (this.component.releaseHits(), this.component.prepareHits())
					}, t.prototype.queryHit = function (e, t) {
						return this.coordAdjust && (e += this.coordAdjust.left, t += this.coordAdjust.top), this.component.queryHit(e, t)
					}, t
				}(n(59).default);

			function o(e, t) {
				return !e && !t || !(!e || !t) && (e.component === t.component && l(e, t) && l(t, e))
			}

			function l(e, t) {
				for (var n in e)
					if (!/^(component|left|right|top|bottom)$/.test(n) && e[n] !== t[n]) return !1;
				return !0
			}
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.version = "3.10.0", t.internalApiVersion = 12;
			var i = n(4);
			t.applyAll = i.applyAll, t.debounce = i.debounce, t.isInt = i.isInt, t.htmlEscape = i.htmlEscape, t.cssToStr = i.cssToStr, t.proxy = i.proxy, t.capitaliseFirstLetter = i.capitaliseFirstLetter, t.getOuterRect = i.getOuterRect, t.getClientRect = i.getClientRect, t.getContentRect = i.getContentRect, t.getScrollbarWidths = i.getScrollbarWidths, t.preventDefault = i.preventDefault, t.parseFieldSpecs = i.parseFieldSpecs, t.compareByFieldSpecs = i.compareByFieldSpecs, t.compareByFieldSpec = i.compareByFieldSpec, t.flexibleCompare = i.flexibleCompare, t.computeGreatestUnit = i.computeGreatestUnit, t.divideRangeByDuration = i.divideRangeByDuration, t.divideDurationByDuration = i.divideDurationByDuration, t.multiplyDuration = i.multiplyDuration, t.durationHasTime = i.durationHasTime, t.log = i.log, t.warn = i.warn, t.removeExact = i.removeExact, t.intersectRects = i.intersectRects, t.allowSelection = i.allowSelection, t.attrsToStr = i.attrsToStr, t.compareNumbers = i.compareNumbers, t.compensateScroll = i.compensateScroll, t.computeDurationGreatestUnit = i.computeDurationGreatestUnit, t.constrainPoint = i.constrainPoint, t.copyOwnProps = i.copyOwnProps, t.diffByUnit = i.diffByUnit, t.diffDay = i.diffDay, t.diffDayTime = i.diffDayTime, t.diffPoints = i.diffPoints, t.disableCursor = i.disableCursor, t.distributeHeight = i.distributeHeight, t.enableCursor = i.enableCursor, t.firstDefined = i.firstDefined, t.getEvIsTouch = i.getEvIsTouch, t.getEvX = i.getEvX, t.getEvY = i.getEvY, t.getRectCenter = i.getRectCenter, t.getScrollParent = i.getScrollParent, t.hasOwnProp = i.hasOwnProp, t.isArraysEqual = i.isArraysEqual, t.isNativeDate = i.isNativeDate, t.isPrimaryMouseButton = i.isPrimaryMouseButton, t.isTimeString = i.isTimeString, t.matchCellWidths = i.matchCellWidths, t.mergeProps = i.mergeProps, t.preventSelection = i.preventSelection, t.removeMatching = i.removeMatching, t.stripHtmlEntities = i.stripHtmlEntities, t.subtractInnerElHeight = i.subtractInnerElHeight, t.uncompensateScroll = i.uncompensateScroll, t.undistributeHeight = i.undistributeHeight, t.dayIDs = i.dayIDs, t.unitsDesc = i.unitsDesc;
			var r = n(49);
			t.formatDate = r.formatDate, t.formatRange = r.formatRange, t.queryMostGranularFormatUnit = r.queryMostGranularFormatUnit;
			var a = n(32);
			t.datepickerLocale = a.datepickerLocale, t.locale = a.locale, t.getMomentLocaleData = a.getMomentLocaleData, t.populateInstanceComputableOptions = a.populateInstanceComputableOptions;
			var o = n(19);
			t.eventDefsToEventInstances = o.eventDefsToEventInstances, t.eventFootprintToComponentFootprint = o.eventFootprintToComponentFootprint, t.eventInstanceToEventRange = o.eventInstanceToEventRange, t.eventInstanceToUnzonedRange = o.eventInstanceToUnzonedRange, t.eventRangeToEventFootprint = o.eventRangeToEventFootprint;
			var l = n(11);
			t.moment = l.default;
			var s = n(13);
			t.EmitterMixin = s.default;
			var d = n(7);
			t.ListenerMixin = d.default;
			var u = n(51);
			t.Model = u.default;
			var c = n(217);
			t.Constraints = c.default;
			var h = n(55);
			t.DateProfileGenerator = h.default;
			var p = n(5);
			t.UnzonedRange = p.default;
			var f = n(12);
			t.ComponentFootprint = f.default;
			var m = n(218);
			t.BusinessHourGenerator = m.default;
			var g = n(219);
			t.EventPeriod = g.default;
			var _ = n(220);
			t.EventManager = _.default;
			var y = n(37);
			t.EventDef = y.default;
			var v = n(39);
			t.EventDefMutation = v.default;
			var M = n(36);
			t.EventDefParser = M.default;
			var b = n(53);
			t.EventInstance = b.default;
			var w = n(50);
			t.EventRange = w.default;
			var L = n(54);
			t.RecurringEventDef = L.default;
			var D = n(9);
			t.SingleEventDef = D.default;
			var T = n(40);
			t.EventDefDateMutation = T.default;
			var k = n(16);
			t.EventDateProfile = k.default;
			var S = n(38);
			t.EventSourceParser = S.default;
			var x = n(6);
			t.EventSource = x.default;
			var Y = n(57);
			t.defineThemeSystem = Y.defineThemeSystem, t.getThemeSystemClass = Y.getThemeSystemClass;
			var E = n(20);
			t.EventInstanceGroup = E.default;
			var C = n(56);
			t.ArrayEventSource = C.default;
			var H = n(223);
			t.FuncEventSource = H.default;
			var P = n(224);
			t.JsonFeedEventSource = P.default;
			var O = n(34);
			t.EventFootprint = O.default;
			var A = n(35);
			t.Class = A.default;
			var I = n(15);
			t.Mixin = I.default;
			var R = n(58);
			t.CoordCache = R.default;
			var j = n(225);
			t.Iterator = j.default;
			var F = n(59);
			t.DragListener = F.default;
			var N = n(17);
			t.HitDragListener = N.default;
			var W = n(226);
			t.MouseFollower = W.default;
			var z = n(52);
			t.ParsableModelMixin = z.default;
			var B = n(227);
			t.Popover = B.default;
			var V = n(21);
			t.Promise = V.default;
			var G = n(228);
			t.TaskQueue = G.default;
			var U = n(229);
			t.RenderQueue = U.default;
			var Z = n(41);
			t.Scroller = Z.default;
			var q = n(22);
			t.Theme = q.default;
			var X = n(230);
			t.Component = X.default;
			var J = n(231);
			t.DateComponent = J.default;
			var $ = n(42);
			t.InteractiveDateComponent = $.default;
			var K = n(232);
			t.Calendar = K.default;
			var Q = n(43);
			t.View = Q.default;
			var ee = n(24);
			t.defineView = ee.defineView, t.getViewConfig = ee.getViewConfig;
			var te = n(60);
			t.DayTableMixin = te.default;
			var ne = n(61);
			t.BusinessHourRenderer = ne.default;
			var ie = n(44);
			t.EventRenderer = ie.default;
			var re = n(62);
			t.FillRenderer = re.default;
			var ae = n(63);
			t.HelperRenderer = ae.default;
			var oe = n(233);
			t.ExternalDropping = oe.default;
			var le = n(234);
			t.EventResizing = le.default;
			var se = n(64);
			t.EventPointing = se.default;
			var de = n(235);
			t.EventDragging = de.default;
			var ue = n(236);
			t.DateSelecting = ue.default;
			var ce = n(237);
			t.DateClicking = ce.default;
			var he = n(14);
			t.Interaction = he.default;
			var pe = n(65);
			t.StandardInteractionsMixin = pe.default;
			var fe = n(238);
			t.AgendaView = fe.default;
			var me = n(239);
			t.TimeGrid = me.default;
			var ge = n(240);
			t.TimeGridEventRenderer = ge.default;
			var _e = n(242);
			t.TimeGridFillRenderer = _e.default;
			var ye = n(241);
			t.TimeGridHelperRenderer = ye.default;
			var ve = n(66);
			t.DayGrid = ve.default;
			var Me = n(243);
			t.DayGridEventRenderer = Me.default;
			var be = n(245);
			t.DayGridFillRenderer = be.default;
			var we = n(244);
			t.DayGridHelperRenderer = we.default;
			var Le = n(67);
			t.BasicView = Le.default;
			var De = n(68);
			t.BasicViewDateProfileGenerator = De.default;
			var Te = n(246);
			t.MonthView = Te.default;
			var ke = n(247);
			t.MonthViewDateProfileGenerator = ke.default;
			var Se = n(248);
			t.ListView = Se.default;
			var xe = n(250);
			t.ListEventPointing = xe.default;
			var Ye = n(249);
			t.ListEventRenderer = Ye.default
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(50),
				r = n(34),
				a = n(12);
			t.eventDefsToEventInstances = function (e, t) {
				var n, i = [];
				for (n = 0; n < e.length; n++) i.push.apply(i, e[n].buildInstances(t));
				return i
			}, t.eventInstanceToEventRange = function (e) {
				return new i.default(e.dateProfile.unzonedRange, e.def, e)
			}, t.eventRangeToEventFootprint = function (e) {
				return new r.default(new a.default(e.unzonedRange, e.eventDef.isAllDay()), e.eventDef, e.eventInstance)
			}, t.eventInstanceToUnzonedRange = function (e) {
				return e.dateProfile.unzonedRange
			}, t.eventFootprintToComponentFootprint = function (e) {
				return e.componentFootprint
			}
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(5),
				r = n(19),
				a = n(50),
				o = function () {
					function e(e) {
						this.eventInstances = e || []
					}
					return e.prototype.getAllEventRanges = function (e) {
						return e ? this.sliceNormalRenderRanges(e) : this.eventInstances.map(r.eventInstanceToEventRange)
					}, e.prototype.sliceRenderRanges = function (e) {
						return this.isInverse() ? this.sliceInverseRenderRanges(e) : this.sliceNormalRenderRanges(e)
					}, e.prototype.sliceNormalRenderRanges = function (e) {
						var t, n, i, r = this.eventInstances,
							o = [];
						for (t = 0; t < r.length; t++)(i = (n = r[t]).dateProfile.unzonedRange.intersect(e)) && o.push(new a.default(i, n.def, n));
						return o
					}, e.prototype.sliceInverseRenderRanges = function (e) {
						var t = this.eventInstances.map(r.eventInstanceToUnzonedRange),
							n = this.getEventDef();
						return (t = i.default.invertRanges(t, e)).map(function (e) {
							return new a.default(e, n)
						})
					}, e.prototype.isInverse = function () {
						return this.getEventDef().hasInverseRendering()
					}, e.prototype.getEventDef = function () {
						return this.explicitEventDef || this.eventInstances[0].def
					}, e
				}();
			t.default = o
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = {
					construct: function (e) {
						var t = i.Deferred(),
							n = t.promise();
						return "function" == typeof e && e(function (e) {
							t.resolve(e), a(n, e)
						}, function () {
							t.reject(), o(n)
						}), n
					},
					resolve: function (e) {
						var t = i.Deferred().resolve(e).promise();
						return a(t, e), t
					},
					reject: function () {
						var e = i.Deferred().reject().promise();
						return o(e), e
					}
				};

			function a(e, t) {
				e.then = function (n) {
					return "function" == typeof n ? r.resolve(n(t)) : e
				}
			}

			function o(e) {
				e.then = function (t, n) {
					return "function" == typeof n && n(), e
				}
			}
			t.default = r
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = function () {
					function e(e) {
						this.optionsManager = e, this.processIconOverride()
					}
					return e.prototype.processIconOverride = function () {
						this.iconOverrideOption && this.setIconOverride(this.optionsManager.get(this.iconOverrideOption))
					}, e.prototype.setIconOverride = function (e) {
						var t, n;
						if (i.isPlainObject(e)) {
							for (n in t = i.extend({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
							this.iconClasses = t
						} else !1 === e && (this.iconClasses = {})
					}, e.prototype.applyIconOverridePrefix = function (e) {
						var t = this.iconOverridePrefix;
						return t && 0 !== e.indexOf(t) && (e = t + e), e
					}, e.prototype.getClass = function (e) {
						return this.classes[e] || ""
					}, e.prototype.getIconClass = function (e) {
						var t = this.iconClasses[e];
						return t ? this.baseIconClass + " " + t : ""
					}, e.prototype.getCustomButtonIconClass = function (e) {
						var t;
						return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption]) ? this.baseIconClass + " " + this.applyIconOverridePrefix(t) : ""
					}, e
				}();
			t.default = r, r.prototype.classes = {}, r.prototype.iconClasses = {}, r.prototype.baseIconClass = "", r.prototype.iconOverridePrefix = ""
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(18),
				a = n(13),
				o = n(7);
			r.touchMouseIgnoreWait = 500;
			var l = null,
				s = 0,
				d = function () {
					function e() {
						this.isTouching = !1, this.mouseIgnoreDepth = 0
					}
					return e.get = function () {
						return l || (l = new e).bind(), l
					}, e.needed = function () {
						e.get(), s++
					}, e.unneeded = function () {
						--s || (l.unbind(), l = null)
					}, e.prototype.bind = function () {
						var e = this;
						this.listenTo(i(document), {
							touchstart: this.handleTouchStart,
							touchcancel: this.handleTouchCancel,
							touchend: this.handleTouchEnd,
							mousedown: this.handleMouseDown,
							mousemove: this.handleMouseMove,
							mouseup: this.handleMouseUp,
							click: this.handleClick,
							selectstart: this.handleSelectStart,
							contextmenu: this.handleContextMenu
						}), window.addEventListener("touchmove", this.handleTouchMoveProxy = function (t) {
							e.handleTouchMove(i.Event(t))
						}, {
							passive: !1
						}), window.addEventListener("scroll", this.handleScrollProxy = function (t) {
							e.handleScroll(i.Event(t))
						}, !0)
					}, e.prototype.unbind = function () {
						this.stopListeningTo(i(document)), window.removeEventListener("touchmove", this.handleTouchMoveProxy, {
							passive: !1
						}), window.removeEventListener("scroll", this.handleScrollProxy, !0)
					}, e.prototype.handleTouchStart = function (e) {
						this.stopTouch(e, !0), this.isTouching = !0, this.trigger("touchstart", e)
					}, e.prototype.handleTouchMove = function (e) {
						this.isTouching && this.trigger("touchmove", e)
					}, e.prototype.handleTouchCancel = function (e) {
						this.isTouching && (this.trigger("touchcancel", e), this.stopTouch(e))
					}, e.prototype.handleTouchEnd = function (e) {
						this.stopTouch(e)
					}, e.prototype.handleMouseDown = function (e) {
						this.shouldIgnoreMouse() || this.trigger("mousedown", e)
					}, e.prototype.handleMouseMove = function (e) {
						this.shouldIgnoreMouse() || this.trigger("mousemove", e)
					}, e.prototype.handleMouseUp = function (e) {
						this.shouldIgnoreMouse() || this.trigger("mouseup", e)
					}, e.prototype.handleClick = function (e) {
						this.shouldIgnoreMouse() || this.trigger("click", e)
					}, e.prototype.handleSelectStart = function (e) {
						this.trigger("selectstart", e)
					}, e.prototype.handleContextMenu = function (e) {
						this.trigger("contextmenu", e)
					}, e.prototype.handleScroll = function (e) {
						this.trigger("scroll", e)
					}, e.prototype.stopTouch = function (e, t) {
						void 0 === t && (t = !1), this.isTouching && (this.isTouching = !1, this.trigger("touchend", e), t || this.startTouchMouseIgnore())
					}, e.prototype.startTouchMouseIgnore = function () {
						var e = this,
							t = r.touchMouseIgnoreWait;
						t && (this.mouseIgnoreDepth++, setTimeout(function () {
							e.mouseIgnoreDepth--
						}, t))
					}, e.prototype.shouldIgnoreMouse = function () {
						return this.isTouching || Boolean(this.mouseIgnoreDepth)
					}, e
				}();
			t.default = d, o.default.mixInto(d), a.default.mixInto(d)
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(18);
			t.viewHash = {}, i.views = t.viewHash, t.defineView = function (e, n) {
				t.viewHash[e] = n
			}, t.getViewConfig = function (e) {
				return t.viewHash[e]
			}
		}, , , , , , , , function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(0),
				a = n(18),
				o = n(33),
				l = n(4);
			t.localeOptionHash = {}, a.locales = t.localeOptionHash;
			var s = {
					buttonText: function (e) {
						return {
							prev: l.stripHtmlEntities(e.prevText),
							next: l.stripHtmlEntities(e.nextText),
							today: l.stripHtmlEntities(e.currentText)
						}
					},
					monthYearFormat: function (e) {
						return e.showMonthAfterYear ? "YYYY[" + e.yearSuffix + "] MMMM" : "MMMM YYYY[" + e.yearSuffix + "]"
					}
				},
				d = {
					dayOfMonthFormat: function (e, t) {
						var n = e.longDateFormat("l");
						return n = n.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), t.isRTL ? n += " ddd" : n = "ddd " + n, n
					},
					mediumTimeFormat: function (e) {
						return e.longDateFormat("LT").replace(/\s*a$/i, "a")
					},
					smallTimeFormat: function (e) {
						return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
					},
					extraSmallTimeFormat: function (e) {
						return e.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
					},
					hourFormat: function (e) {
						return e.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
					},
					noMeridiemTimeFormat: function (e) {
						return e.longDateFormat("LT").replace(/\s*a$/i, "")
					}
				},
				u = {
					smallDayDateFormat: function (e) {
						return e.isRTL ? "D dd" : "dd D"
					},
					weekFormat: function (e) {
						return e.isRTL ? "w[ " + e.weekNumberTitle + "]" : "[" + e.weekNumberTitle + " ]w"
					},
					smallWeekFormat: function (e) {
						return e.isRTL ? "w[" + e.weekNumberTitle + "]" : "[" + e.weekNumberTitle + "]w"
					}
				};

			function c(e, n) {
				var r, a;
				r = t.localeOptionHash[e] || (t.localeOptionHash[e] = {}), n && (r = t.localeOptionHash[e] = o.mergeOptions([r, n])), a = h(e), i.each(d, function (e, t) {
					null == r[e] && (r[e] = t(a, r))
				}), o.globalDefaults.locale = e
			}

			function h(e) {
				return r.localeData(e) || r.localeData("en")
			}
			t.populateInstanceComputableOptions = function (e) {
				i.each(u, function (t, n) {
					null == e[t] && (e[t] = n(e))
				})
			}, t.datepickerLocale = function (e, n, r) {
				var a = t.localeOptionHash[e] || (t.localeOptionHash[e] = {});
				a.isRTL = r.isRTL, a.weekNumberTitle = r.weekHeader, i.each(s, function (e, t) {
					a[e] = t(r)
				});
				var o = i.datepicker;
				o && (o.regional[n] = o.regional[e] = r, o.regional.en = o.regional[""], o.setDefaults(r))
			}, t.locale = c, t.getMomentLocaleData = h, c("en", o.englishDefaults)
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(4);
			t.globalDefaults = {
				titleRangeSeparator: " – ",
				monthYearFormat: "MMMM YYYY",
				defaultTimedEventDuration: "02:00:00",
				defaultAllDayEventDuration: {
					days: 1
				},
				forceEventDuration: !1,
				nextDayThreshold: "09:00:00",
				columnHeader: !0,
				defaultView: "month",
				aspectRatio: 1.35,
				header: {
					left: "title",
					center: "",
					right: "today prev,next"
				},
				weekends: !0,
				weekNumbers: !1,
				weekNumberTitle: "W",
				weekNumberCalculation: "local",
				scrollTime: "06:00:00",
				minTime: "00:00:00",
				maxTime: "24:00:00",
				showNonCurrentDates: !0,
				lazyFetching: !0,
				startParam: "start",
				endParam: "end",
				timezoneParam: "timezone",
				timezone: !1,
				locale: null,
				isRTL: !1,
				buttonText: {
					prev: "prev",
					next: "next",
					prevYear: "prev year",
					nextYear: "next year",
					year: "year",
					today: "today",
					month: "month",
					week: "week",
					day: "day"
				},
				allDayText: "all-day",
				agendaEventMinHeight: 0,
				theme: !1,
				dragOpacity: .75,
				dragRevertDuration: 500,
				dragScroll: !0,
				unselectAuto: !0,
				dropAccept: "*",
				eventOrder: "title",
				eventLimit: !1,
				eventLimitText: "more",
				eventLimitClick: "popover",
				dayPopoverFormat: "LL",
				handleWindowResize: !0,
				windowResizeDelay: 100,
				longPressDelay: 1e3
			}, t.englishDefaults = {
				dayPopoverFormat: "dddd, MMMM D"
			}, t.rtlDefaults = {
				header: {
					left: "next,prev today",
					center: "",
					right: "title"
				},
				buttonIcons: {
					prev: "right-single-arrow",
					next: "left-single-arrow",
					prevYear: "right-double-arrow",
					nextYear: "left-double-arrow"
				},
				themeButtonIcons: {
					prev: "circle-triangle-e",
					next: "circle-triangle-w",
					nextYear: "seek-prev",
					prevYear: "seek-next"
				}
			};
			var r = ["header", "footer", "buttonText", "buttonIcons", "themeButtonIcons"];
			t.mergeOptions = function (e) {
				return i.mergeProps(e, r)
			}
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				function e(e, t, n) {
					this.componentFootprint = e, this.eventDef = t, n && (this.eventInstance = n)
				}
				return e.prototype.getEventLegacy = function () {
					return (this.eventInstance || this.eventDef).toLegacy()
				}, e
			}();
			t.default = n
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(4),
				a = function () {
					function e() {}
					return e.extend = function (e) {
						var t = function (e) {
							function t() {
								return null !== e && e.apply(this, arguments) || this
							}
							return i.__extends(t, e), t
						}(this);
						return r.copyOwnProps(e, t.prototype), t
					}, e.mixin = function (e) {
						r.copyOwnProps(e, this.prototype)
					}, e
				}();
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(0),
				r = n(4),
				a = n(9),
				o = n(54);
			t.default = {
				parse: function (e, t) {
					return r.isTimeString(e.start) || i.isDuration(e.start) || r.isTimeString(e.end) || i.isDuration(e.end) ? o.default.parse(e, t) : a.default.parse(e, t)
				}
			}
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(52),
				a = function () {
					function e(e) {
						this.source = e, this.className = [], this.miscProps = {}
					}
					return e.parse = function (e, t) {
						var n = new this(t);
						return !!n.applyProps(e) && n
					}, e.normalizeId = function (e) {
						return String(e)
					}, e.generateId = function () {
						return "_fc" + e.uuid++
					}, e.prototype.clone = function () {
						var t = new this.constructor(this.source);
						return t.id = this.id, t.rawId = this.rawId, t.uid = this.uid, e.copyVerbatimStandardProps(this, t), t.className = this.className.slice(), t.miscProps = i.extend({}, this.miscProps), t
					}, e.prototype.hasInverseRendering = function () {
						return "inverse-background" === this.getRendering()
					}, e.prototype.hasBgRendering = function () {
						var e = this.getRendering();
						return "inverse-background" === e || "background" === e
					}, e.prototype.getRendering = function () {
						return null != this.rendering ? this.rendering : this.source.rendering
					}, e.prototype.getConstraint = function () {
						return null != this.constraint ? this.constraint : null != this.source.constraint ? this.source.constraint : this.source.calendar.opt("eventConstraint")
					}, e.prototype.getOverlap = function () {
						return null != this.overlap ? this.overlap : null != this.source.overlap ? this.source.overlap : this.source.calendar.opt("eventOverlap")
					}, e.prototype.isStartExplicitlyEditable = function () {
						return null != this.startEditable ? this.startEditable : this.source.startEditable
					}, e.prototype.isDurationExplicitlyEditable = function () {
						return null != this.durationEditable ? this.durationEditable : this.source.durationEditable
					}, e.prototype.isExplicitlyEditable = function () {
						return null != this.editable ? this.editable : this.source.editable
					}, e.prototype.toLegacy = function () {
						var t = i.extend({}, this.miscProps);
						return t._id = this.uid, t.source = this.source, t.className = this.className.slice(), t.allDay = this.isAllDay(), null != this.rawId && (t.id = this.rawId), e.copyVerbatimStandardProps(this, t), t
					}, e.prototype.applyManualStandardProps = function (t) {
						return null != t.id ? this.id = e.normalizeId(this.rawId = t.id) : this.id = e.generateId(), null != t._id ? this.uid = String(t._id) : this.uid = e.generateId(), i.isArray(t.className) && (this.className = t.className), "string" == typeof t.className && (this.className = t.className.split(/\s+/)), !0
					}, e.prototype.applyMiscProps = function (e) {
						i.extend(this.miscProps, e)
					}, e.uuid = 0, e.defineStandardProps = r.default.defineStandardProps, e.copyVerbatimStandardProps = r.default.copyVerbatimStandardProps, e
				}();
			t.default = a, r.default.mixInto(a), a.defineStandardProps({
				_id: !1,
				id: !1,
				className: !1,
				source: !1,
				title: !0,
				url: !0,
				rendering: !0,
				constraint: !0,
				overlap: !0,
				editable: !0,
				startEditable: !0,
				durationEditable: !0,
				color: !0,
				backgroundColor: !0,
				borderColor: !0,
				textColor: !0
			})
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = {
				sourceClasses: [],
				registerClass: function (e) {
					this.sourceClasses.unshift(e)
				},
				parse: function (e, t) {
					var n, i, r = this.sourceClasses;
					for (n = 0; n < r.length; n++)
						if (i = r[n].parse(e, t)) return i
				}
			}
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(4),
				r = n(16),
				a = n(37),
				o = n(40),
				l = n(9),
				s = function () {
					function e() {}
					return e.createFromRawProps = function (t, n, l) {
						var s, d, u, c, h = t.def,
							p = {},
							f = {},
							m = {},
							g = {},
							_ = null,
							y = null;
						for (s in n) r.default.isStandardProp(s) ? p[s] = n[s] : h.isStandardProp(s) ? f[s] = n[s] : h.miscProps[s] !== n[s] && (m[s] = n[s]);
						return (d = r.default.parse(p, h.source)) && (u = o.default.createFromDiff(t.dateProfile, d, l)), f.id !== h.id && (_ = f.id), i.isArraysEqual(f.className, h.className) || (y = f.className), a.default.copyVerbatimStandardProps(f, g), (c = new e).eventDefId = _, c.className = y, c.verbatimStandardProps = g, c.miscProps = m, u && (c.dateMutation = u), c
					}, e.prototype.mutateSingle = function (e) {
						var t;
						return this.dateMutation && (t = e.dateProfile, e.dateProfile = this.dateMutation.buildNewDateProfile(t, e.source.calendar)), null != this.eventDefId && (e.id = a.default.normalizeId(e.rawId = this.eventDefId)), this.className && (e.className = this.className), this.verbatimStandardProps && l.default.copyVerbatimStandardProps(this.verbatimStandardProps, e), this.miscProps && e.applyMiscProps(this.miscProps), t ? function () {
							e.dateProfile = t
						} : function () {}
					}, e.prototype.setDateMutation = function (e) {
						e && !e.isEmpty() ? this.dateMutation = e : this.dateMutation = null
					}, e.prototype.isEmpty = function () {
						return !this.dateMutation
					}, e
				}();
			t.default = s
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(4),
				r = n(16),
				a = function () {
					function e() {
						this.clearEnd = !1, this.forceTimed = !1, this.forceAllDay = !1
					}
					return e.createFromDiff = function (t, n, r) {
						var a, o, l, s = t.end && !n.end,
							d = t.isAllDay() && !n.isAllDay(),
							u = !t.isAllDay() && n.isAllDay();

						function c(e, t) {
							return r ? i.diffByUnit(e, t, r) : n.isAllDay() ? i.diffDay(e, t) : i.diffDayTime(e, t)
						}
						return a = c(n.start, t.start), n.end && (o = c(n.unzonedRange.getEnd(), t.unzonedRange.getEnd()).subtract(a)), (l = new e).clearEnd = s, l.forceTimed = d, l.forceAllDay = u, l.setDateDelta(a), l.setEndDelta(o), l
					}, e.prototype.buildNewDateProfile = function (e, t) {
						var n = e.start.clone(),
							i = null,
							a = !1;
						return e.end && !this.clearEnd ? i = e.end.clone() : this.endDelta && !i && (i = t.getDefaultEventEnd(e.isAllDay(), n)), this.forceTimed ? (a = !0, n.hasTime() || n.time(0), i && !i.hasTime() && i.time(0)) : this.forceAllDay && (n.hasTime() && n.stripTime(), i && i.hasTime() && i.stripTime()), this.dateDelta && (a = !0, n.add(this.dateDelta), i && i.add(this.dateDelta)), this.endDelta && (a = !0, i.add(this.endDelta)), this.startDelta && (a = !0, n.add(this.startDelta)), a && (n = t.applyTimezone(n), i && (i = t.applyTimezone(i))), !i && t.opt("forceEventDuration") && (i = t.getDefaultEventEnd(e.isAllDay(), n)), new r.default(n, i, t)
					}, e.prototype.setDateDelta = function (e) {
						e && e.valueOf() ? this.dateDelta = e : this.dateDelta = null
					}, e.prototype.setStartDelta = function (e) {
						e && e.valueOf() ? this.startDelta = e : this.startDelta = null
					}, e.prototype.setEndDelta = function (e) {
						e && e.valueOf() ? this.endDelta = e : this.endDelta = null
					}, e.prototype.isEmpty = function () {
						return !(this.clearEnd || this.forceTimed || this.forceAllDay || this.dateDelta || this.startDelta || this.endDelta)
					}, e
				}();
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(4),
				o = function (e) {
					function t(t) {
						var n = e.call(this) || this;
						return t = t || {}, n.overflowX = t.overflowX || t.overflow || "auto", n.overflowY = t.overflowY || t.overflow || "auto", n
					}
					return i.__extends(t, e), t.prototype.render = function () {
						this.el = this.renderEl(), this.applyOverflow()
					}, t.prototype.renderEl = function () {
						return this.scrollEl = r('<div class="fc-scroller"></div>')
					}, t.prototype.clear = function () {
						this.setHeight("auto"), this.applyOverflow()
					}, t.prototype.destroy = function () {
						this.el.remove()
					}, t.prototype.applyOverflow = function () {
						this.scrollEl.css({
							"overflow-x": this.overflowX,
							"overflow-y": this.overflowY
						})
					}, t.prototype.lockOverflow = function (e) {
						var t = this.overflowX,
							n = this.overflowY;
						e = e || this.getScrollbarWidths(), "auto" === t && (t = e.top || e.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === n && (n = e.left || e.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
							"overflow-x": t,
							"overflow-y": n
						})
					}, t.prototype.setHeight = function (e) {
						this.scrollEl.height(e)
					}, t.prototype.getScrollTop = function () {
						return this.scrollEl.scrollTop()
					}, t.prototype.setScrollTop = function (e) {
						this.scrollEl.scrollTop(e)
					}, t.prototype.getClientWidth = function () {
						return this.scrollEl[0].clientWidth
					}, t.prototype.getClientHeight = function () {
						return this.scrollEl[0].clientHeight
					}, t.prototype.getScrollbarWidths = function () {
						return a.getScrollbarWidths(this.scrollEl)
					}, t
				}(n(35).default);
			t.default = o
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(4),
				o = n(231),
				l = n(23),
				s = function (e) {
					function t(t, n) {
						var i = e.call(this, t, n) || this;
						return i.segSelector = ".fc-event-container > *", i.dateSelectingClass && (i.dateClicking = new i.dateClickingClass(i)), i.dateSelectingClass && (i.dateSelecting = new i.dateSelectingClass(i)), i.eventPointingClass && (i.eventPointing = new i.eventPointingClass(i)), i.eventDraggingClass && i.eventPointing && (i.eventDragging = new i.eventDraggingClass(i, i.eventPointing)), i.eventResizingClass && i.eventPointing && (i.eventResizing = new i.eventResizingClass(i, i.eventPointing)), i.externalDroppingClass && (i.externalDropping = new i.externalDroppingClass(i)), i
					}
					return i.__extends(t, e), t.prototype.setElement = function (t) {
						e.prototype.setElement.call(this, t), this.dateClicking && this.dateClicking.bindToEl(t), this.dateSelecting && this.dateSelecting.bindToEl(t), this.bindAllSegHandlersToEl(t)
					}, t.prototype.removeElement = function () {
						this.endInteractions(), e.prototype.removeElement.call(this)
					}, t.prototype.executeEventUnrender = function () {
						this.endInteractions(), e.prototype.executeEventUnrender.call(this)
					}, t.prototype.bindGlobalHandlers = function () {
						e.prototype.bindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.bindToDocument()
					}, t.prototype.unbindGlobalHandlers = function () {
						e.prototype.unbindGlobalHandlers.call(this), this.externalDropping && this.externalDropping.unbindFromDocument()
					}, t.prototype.bindDateHandlerToEl = function (e, t, n) {
						var i = this;
						this.el.on(t, function (e) {
							if (!r(e.target).is(i.segSelector + ":not(.fc-helper)," + i.segSelector + ":not(.fc-helper) *,.fc-more,a[data-goto]")) return n.call(i, e)
						})
					}, t.prototype.bindAllSegHandlersToEl = function (e) {
						[this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (t) {
							t && t.bindToEl(e)
						})
					}, t.prototype.bindSegHandlerToEl = function (e, t, n) {
						var i = this;
						e.on(t, this.segSelector, function (e) {
							var t = r(e.currentTarget);
							if (!t.is(".fc-helper")) {
								var a = t.data("fc-seg");
								if (a && !i.shouldIgnoreEventPointing()) return n.call(i, a, e)
							}
						})
					}, t.prototype.shouldIgnoreMouse = function () {
						return l.default.get().shouldIgnoreMouse()
					}, t.prototype.shouldIgnoreTouch = function () {
						var e = this._getView();
						return e.isSelected || e.selectedEvent
					}, t.prototype.shouldIgnoreEventPointing = function () {
						return this.eventDragging && this.eventDragging.isDragging || this.eventResizing && this.eventResizing.isResizing
					}, t.prototype.canStartSelection = function (e, t) {
						return a.getEvIsTouch(t) && !this.canStartResize(e, t) && (this.isEventDefDraggable(e.footprint.eventDef) || this.isEventDefResizable(e.footprint.eventDef))
					}, t.prototype.canStartDrag = function (e, t) {
						return !this.canStartResize(e, t) && this.isEventDefDraggable(e.footprint.eventDef)
					}, t.prototype.canStartResize = function (e, t) {
						var n = this._getView(),
							i = e.footprint.eventDef;
						return (!a.getEvIsTouch(t) || n.isEventDefSelected(i)) && this.isEventDefResizable(i) && r(t.target).is(".fc-resizer")
					}, t.prototype.endInteractions = function () {
						[this.dateClicking, this.dateSelecting, this.eventPointing, this.eventDragging, this.eventResizing].forEach(function (e) {
							e && e.end()
						})
					}, t.prototype.isEventDefDraggable = function (e) {
						return this.isEventDefStartEditable(e)
					}, t.prototype.isEventDefStartEditable = function (e) {
						var t = e.isStartExplicitlyEditable();
						return null == t && null == (t = this.opt("eventStartEditable")) && (t = this.isEventDefGenerallyEditable(e)), t
					}, t.prototype.isEventDefGenerallyEditable = function (e) {
						var t = e.isExplicitlyEditable();
						return null == t && (t = this.opt("editable")), t
					}, t.prototype.isEventDefResizableFromStart = function (e) {
						return this.opt("eventResizableFromStart") && this.isEventDefResizable(e)
					}, t.prototype.isEventDefResizableFromEnd = function (e) {
						return this.isEventDefResizable(e)
					}, t.prototype.isEventDefResizable = function (e) {
						var t = e.isDurationExplicitlyEditable();
						return null == t && null == (t = this.opt("eventDurationEditable")) && (t = this.isEventDefGenerallyEditable(e)), t
					}, t.prototype.diffDates = function (e, t) {
						return this.largeUnit ? a.diffByUnit(e, t, this.largeUnit) : a.diffDayTime(e, t)
					}, t.prototype.isEventInstanceGroupAllowed = function (e) {
						var t, n = this._getView(),
							i = this.dateProfile,
							r = this.eventRangesToEventFootprints(e.getAllEventRanges());
						for (t = 0; t < r.length; t++)
							if (!i.validUnzonedRange.containsRange(r[t].componentFootprint.unzonedRange)) return !1;
						return n.calendar.constraints.isEventInstanceGroupAllowed(e)
					}, t.prototype.isExternalInstanceGroupAllowed = function (e) {
						var t, n = this._getView(),
							i = this.dateProfile,
							r = this.eventRangesToEventFootprints(e.getAllEventRanges());
						for (t = 0; t < r.length; t++)
							if (!i.validUnzonedRange.containsRange(r[t].componentFootprint.unzonedRange)) return !1;
						for (t = 0; t < r.length; t++)
							if (!n.calendar.constraints.isSelectionFootprintAllowed(r[t].componentFootprint)) return !1;
						return !0
					}, t
				}(o.default);
			t.default = s
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(0),
				o = n(4),
				l = n(229),
				s = n(55),
				d = n(42),
				u = n(23),
				c = n(5),
				h = function (e) {
					function t(t, n) {
						var i = e.call(this, null, n.options) || this;
						return i.batchRenderDepth = 0, i.isSelected = !1, i.calendar = t, i.viewSpec = n, i.type = n.type, i.name = i.type, i.initRenderQueue(), i.initHiddenDays(), i.dateProfileGenerator = new i.dateProfileGeneratorClass(i), i.bindBaseRenderHandlers(), i.eventOrderSpecs = o.parseFieldSpecs(i.opt("eventOrder")), i.initialize && i.initialize(), i
					}
					return i.__extends(t, e), t.prototype._getView = function () {
						return this
					}, t.prototype.opt = function (e) {
						return this.options[e]
					}, t.prototype.initRenderQueue = function () {
						this.renderQueue = new l.default({
							event: this.opt("eventRenderWait")
						}), this.renderQueue.on("start", this.onRenderQueueStart.bind(this)), this.renderQueue.on("stop", this.onRenderQueueStop.bind(this)), this.on("before:change", this.startBatchRender), this.on("change", this.stopBatchRender)
					}, t.prototype.onRenderQueueStart = function () {
						this.calendar.freezeContentHeight(), this.addScroll(this.queryScroll())
					}, t.prototype.onRenderQueueStop = function () {
						this.calendar.updateViewSize() && this.popScroll(), this.calendar.thawContentHeight()
					}, t.prototype.startBatchRender = function () {
						this.batchRenderDepth++ || this.renderQueue.pause()
					}, t.prototype.stopBatchRender = function () {
						--this.batchRenderDepth || this.renderQueue.resume()
					}, t.prototype.requestRender = function (e, t, n) {
						this.renderQueue.queue(e, t, n)
					}, t.prototype.whenSizeUpdated = function (e) {
						this.renderQueue.isRunning ? this.renderQueue.one("stop", e.bind(this)) : e.call(this)
					}, t.prototype.computeTitle = function (e) {
						var t;
						return t = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentUnzonedRange : e.activeUnzonedRange, this.formatRange({
							start: this.calendar.msToMoment(t.startMs, e.isRangeAllDay),
							end: this.calendar.msToMoment(t.endMs, e.isRangeAllDay)
						}, e.isRangeAllDay, this.opt("titleFormat") || this.computeTitleFormat(e), this.opt("titleRangeSeparator"))
					}, t.prototype.computeTitleFormat = function (e) {
						var t = e.currentRangeUnit;
						return "year" === t ? "YYYY" : "month" === t ? this.opt("monthYearFormat") : e.currentUnzonedRange.as("days") > 1 ? "ll" : "LL"
					}, t.prototype.setDate = function (e) {
						var t = this.get("dateProfile"),
							n = this.dateProfileGenerator.build(e, void 0, !0);
						t && t.activeUnzonedRange.equals(n.activeUnzonedRange) || this.set("dateProfile", n)
					}, t.prototype.unsetDate = function () {
						this.unset("dateProfile")
					}, t.prototype.fetchInitialEvents = function (e) {
						var t = this.calendar,
							n = e.isRangeAllDay && !this.usesMinMaxTime;
						return t.requestEvents(t.msToMoment(e.activeUnzonedRange.startMs, n), t.msToMoment(e.activeUnzonedRange.endMs, n))
					}, t.prototype.bindEventChanges = function () {
						this.listenTo(this.calendar, "eventsReset", this.resetEvents)
					}, t.prototype.unbindEventChanges = function () {
						this.stopListeningTo(this.calendar, "eventsReset")
					}, t.prototype.setEvents = function (e) {
						this.set("currentEvents", e), this.set("hasEvents", !0)
					}, t.prototype.unsetEvents = function () {
						this.unset("currentEvents"), this.unset("hasEvents")
					}, t.prototype.resetEvents = function (e) {
						this.startBatchRender(), this.unsetEvents(), this.setEvents(e), this.stopBatchRender()
					}, t.prototype.requestDateRender = function (e) {
						var t = this;
						this.requestRender(function () {
							t.executeDateRender(e)
						}, "date", "init")
					}, t.prototype.requestDateUnrender = function () {
						var e = this;
						this.requestRender(function () {
							e.executeDateUnrender()
						}, "date", "destroy")
					}, t.prototype.executeDateRender = function (t) {
						e.prototype.executeDateRender.call(this, t), this.render && this.render(), this.trigger("datesRendered"), this.addScroll({
							isDateInit: !0
						}), this.startNowIndicator()
					}, t.prototype.executeDateUnrender = function () {
						this.unselect(), this.stopNowIndicator(), this.trigger("before:datesUnrendered"), this.destroy && this.destroy(), e.prototype.executeDateUnrender.call(this)
					}, t.prototype.bindBaseRenderHandlers = function () {
						var e = this;
						this.on("datesRendered", function () {
							e.whenSizeUpdated(e.triggerViewRender)
						}), this.on("before:datesUnrendered", function () {
							e.triggerViewDestroy()
						})
					}, t.prototype.triggerViewRender = function () {
						this.publiclyTrigger("viewRender", {
							context: this,
							args: [this, this.el]
						})
					}, t.prototype.triggerViewDestroy = function () {
						this.publiclyTrigger("viewDestroy", {
							context: this,
							args: [this, this.el]
						})
					}, t.prototype.requestEventsRender = function (e) {
						var t = this;
						this.requestRender(function () {
							t.executeEventRender(e), t.whenSizeUpdated(t.triggerAfterEventsRendered)
						}, "event", "init")
					}, t.prototype.requestEventsUnrender = function () {
						var e = this;
						this.requestRender(function () {
							e.triggerBeforeEventsDestroyed(), e.executeEventUnrender()
						}, "event", "destroy")
					}, t.prototype.requestBusinessHoursRender = function (e) {
						var t = this;
						this.requestRender(function () {
							t.renderBusinessHours(e)
						}, "businessHours", "init")
					}, t.prototype.requestBusinessHoursUnrender = function () {
						var e = this;
						this.requestRender(function () {
							e.unrenderBusinessHours()
						}, "businessHours", "destroy")
					}, t.prototype.bindGlobalHandlers = function () {
						e.prototype.bindGlobalHandlers.call(this), this.listenTo(u.default.get(), {
							touchstart: this.processUnselect,
							mousedown: this.handleDocumentMousedown
						})
					}, t.prototype.unbindGlobalHandlers = function () {
						e.prototype.unbindGlobalHandlers.call(this), this.stopListeningTo(u.default.get())
					}, t.prototype.startNowIndicator = function () {
						var e, t, n, i = this;
						this.opt("nowIndicator") && (e = this.getNowIndicatorUnit()) && (t = o.proxy(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = (new Date).valueOf(), n = this.initialNowDate.clone().startOf(e).add(1, e).valueOf() - this.initialNowDate.valueOf(), this.nowIndicatorTimeoutID = setTimeout(function () {
							i.nowIndicatorTimeoutID = null, t(), n = +a.duration(1, e), n = Math.max(100, n), i.nowIndicatorIntervalID = setInterval(t, n)
						}, n))
					}, t.prototype.updateNowIndicator = function () {
						this.isDatesRendered && this.initialNowDate && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add((new Date).valueOf() - this.initialNowQueriedMs)), this.isNowIndicatorRendered = !0)
					}, t.prototype.stopNowIndicator = function () {
						this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearInterval(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
					}, t.prototype.updateSize = function (t, n, i) {
						this.setHeight ? this.setHeight(t, n) : e.prototype.updateSize.call(this, t, n, i), this.updateNowIndicator()
					}, t.prototype.addScroll = function (e) {
						var t = this.queuedScroll || (this.queuedScroll = {});
						r.extend(t, e)
					}, t.prototype.popScroll = function () {
						this.applyQueuedScroll(), this.queuedScroll = null
					}, t.prototype.applyQueuedScroll = function () {
						this.queuedScroll && this.applyScroll(this.queuedScroll)
					}, t.prototype.queryScroll = function () {
						var e = {};
						return this.isDatesRendered && r.extend(e, this.queryDateScroll()), e
					}, t.prototype.applyScroll = function (e) {
						e.isDateInit && this.isDatesRendered && r.extend(e, this.computeInitialDateScroll()), this.isDatesRendered && this.applyDateScroll(e)
					}, t.prototype.computeInitialDateScroll = function () {
						return {}
					}, t.prototype.queryDateScroll = function () {
						return {}
					}, t.prototype.applyDateScroll = function (e) {}, t.prototype.reportEventDrop = function (e, t, n, i) {
						var r = this.calendar.eventManager.mutateEventsWithId(e.def.id, t),
							o = t.dateMutation;
						o && (e.dateProfile = o.buildNewDateProfile(e.dateProfile, this.calendar)), this.triggerEventDrop(e, o && o.dateDelta || a.duration(), r, n, i)
					}, t.prototype.triggerEventDrop = function (e, t, n, i, r) {
						this.publiclyTrigger("eventDrop", {
							context: i[0],
							args: [e.toLegacy(), t, n, r, {}, this]
						})
					}, t.prototype.reportExternalDrop = function (e, t, n, i, r, a) {
						t && this.calendar.eventManager.addEventDef(e, n), this.triggerExternalDrop(e, t, i, r, a)
					}, t.prototype.triggerExternalDrop = function (e, t, n, i, r) {
						this.publiclyTrigger("drop", {
							context: n[0],
							args: [e.dateProfile.start.clone(), i, r, this]
						}), t && this.publiclyTrigger("eventReceive", {
							context: this,
							args: [e.buildInstance().toLegacy(), this]
						})
					}, t.prototype.reportEventResize = function (e, t, n, i) {
						var r = this.calendar.eventManager.mutateEventsWithId(e.def.id, t);
						e.dateProfile = t.dateMutation.buildNewDateProfile(e.dateProfile, this.calendar);
						var a = t.dateMutation.endDelta || t.dateMutation.startDelta;
						this.triggerEventResize(e, a, r, n, i)
					}, t.prototype.triggerEventResize = function (e, t, n, i, r) {
						this.publiclyTrigger("eventResize", {
							context: i[0],
							args: [e.toLegacy(), t, n, r, {}, this]
						})
					}, t.prototype.select = function (e, t) {
						this.unselect(t), this.renderSelectionFootprint(e), this.reportSelection(e, t)
					}, t.prototype.renderSelectionFootprint = function (t) {
						this.renderSelection ? this.renderSelection(t.toLegacy(this.calendar)) : e.prototype.renderSelectionFootprint.call(this, t)
					}, t.prototype.reportSelection = function (e, t) {
						this.isSelected = !0, this.triggerSelect(e, t)
					}, t.prototype.triggerSelect = function (e, t) {
						var n = this.calendar.footprintToDateProfile(e);
						this.publiclyTrigger("select", {
							context: this,
							args: [n.start, n.end, t, this]
						})
					}, t.prototype.unselect = function (e) {
						this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.publiclyTrigger("unselect", {
							context: this,
							args: [e, this]
						}))
					}, t.prototype.selectEventInstance = function (e) {
						this.selectedEventInstance && this.selectedEventInstance === e || (this.unselectEventInstance(), this.getEventSegs().forEach(function (t) {
							t.footprint.eventInstance === e && t.el && t.el.addClass("fc-selected")
						}), this.selectedEventInstance = e)
					}, t.prototype.unselectEventInstance = function () {
						this.selectedEventInstance && (this.getEventSegs().forEach(function (e) {
							e.el && e.el.removeClass("fc-selected")
						}), this.selectedEventInstance = null)
					}, t.prototype.isEventDefSelected = function (e) {
						return this.selectedEventInstance && this.selectedEventInstance.def.id === e.id
					}, t.prototype.handleDocumentMousedown = function (e) {
						o.isPrimaryMouseButton(e) && this.processUnselect(e)
					}, t.prototype.processUnselect = function (e) {
						this.processRangeUnselect(e), this.processEventUnselect(e)
					}, t.prototype.processRangeUnselect = function (e) {
						var t;
						this.isSelected && this.opt("unselectAuto") && ((t = this.opt("unselectCancel")) && r(e.target).closest(t).length || this.unselect(e))
					}, t.prototype.processEventUnselect = function (e) {
						this.selectedEventInstance && (r(e.target).closest(".fc-selected").length || this.unselectEventInstance())
					}, t.prototype.triggerBaseRendered = function () {
						this.publiclyTrigger("viewRender", {
							context: this,
							args: [this, this.el]
						})
					}, t.prototype.triggerBaseUnrendered = function () {
						this.publiclyTrigger("viewDestroy", {
							context: this,
							args: [this, this.el]
						})
					}, t.prototype.triggerDayClick = function (e, t, n) {
						var i = this.calendar.footprintToDateProfile(e);
						this.publiclyTrigger("dayClick", {
							context: t,
							args: [i.start, n, this]
						})
					}, t.prototype.isDateInOtherMonth = function (e, t) {
						return !1
					}, t.prototype.getUnzonedRangeOption = function (e) {
						var t = this.opt(e);
						if ("function" == typeof t && (t = t.apply(null, Array.prototype.slice.call(arguments, 1))), t) return this.calendar.parseUnzonedRange(t)
					}, t.prototype.initHiddenDays = function () {
						var e, t = this.opt("hiddenDays") || [],
							n = [],
							i = 0;
						for (!1 === this.opt("weekends") && t.push(0, 6), e = 0; e < 7; e++)(n[e] = -1 !== r.inArray(e, t)) || i++;
						if (!i) throw new Error("invalid hiddenDays");
						this.isHiddenDayHash = n
					}, t.prototype.trimHiddenDays = function (e) {
						var t = e.getStart(),
							n = e.getEnd();
						return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null === t || null === n || t < n ? new c.default(t, n) : null
					}, t.prototype.isHiddenDay = function (e) {
						return a.isMoment(e) && (e = e.day()), this.isHiddenDayHash[e]
					}, t.prototype.skipHiddenDays = function (e, t, n) {
						void 0 === t && (t = 1), void 0 === n && (n = !1);
						for (var i = e.clone(); this.isHiddenDayHash[(i.day() + (n ? t : 0) + 7) % 7];) i.add(t, "days");
						return i
					}, t
				}(d.default);
			t.default = h, h.prototype.usesMinMaxTime = !1, h.prototype.dateProfileGeneratorClass = s.default, h.watch("displayingDates", ["isInDom", "dateProfile"], function (e) {
				this.requestDateRender(e.dateProfile)
			}, function () {
				this.requestDateUnrender()
			}), h.watch("displayingBusinessHours", ["displayingDates", "businessHourGenerator"], function (e) {
				this.requestBusinessHoursRender(e.businessHourGenerator)
			}, function () {
				this.requestBusinessHoursUnrender()
			}), h.watch("initialEvents", ["dateProfile"], function (e) {
				return this.fetchInitialEvents(e.dateProfile)
			}), h.watch("bindingEvents", ["initialEvents"], function (e) {
				this.setEvents(e.initialEvents), this.bindEventChanges()
			}, function () {
				this.unbindEventChanges(), this.unsetEvents()
			}), h.watch("displayingEvents", ["displayingDates", "hasEvents"], function () {
				this.requestEventsRender(this.get("currentEvents"))
			}, function () {
				this.requestEventsUnrender()
			}), h.watch("title", ["dateProfile"], function (e) {
				return this.title = this.computeTitle(e.dateProfile)
			}), h.watch("legacyDateProps", ["dateProfile"], function (e) {
				var t = this.calendar,
					n = e.dateProfile;
				this.start = t.msToMoment(n.activeUnzonedRange.startMs, n.isRangeAllDay), this.end = t.msToMoment(n.activeUnzonedRange.endMs, n.isRangeAllDay), this.intervalStart = t.msToMoment(n.currentUnzonedRange.startMs, n.isRangeAllDay), this.intervalEnd = t.msToMoment(n.currentUnzonedRange.endMs, n.isRangeAllDay)
			})
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(4),
				a = function () {
					function e(e, t) {
						this.view = e._getView(), this.component = e, this.fillRenderer = t
					}
					return e.prototype.opt = function (e) {
						return this.view.opt(e)
					}, e.prototype.rangeUpdated = function () {
						var e, t;
						this.eventTimeFormat = this.opt("eventTimeFormat") || this.opt("timeFormat") || this.computeEventTimeFormat(), null == (e = this.opt("displayEventTime")) && (e = this.computeDisplayEventTime()), null == (t = this.opt("displayEventEnd")) && (t = this.computeDisplayEventEnd()), this.displayEventTime = e, this.displayEventEnd = t
					}, e.prototype.render = function (e) {
						var t, n, i, r = this.component._getDateProfile(),
							a = [],
							o = [];
						for (t in e) i = (n = e[t]).sliceRenderRanges(r.activeUnzonedRange), n.getEventDef().hasBgRendering() ? a.push.apply(a, i) : o.push.apply(o, i);
						this.renderBgRanges(a), this.renderFgRanges(o)
					}, e.prototype.unrender = function () {
						this.unrenderBgRanges(), this.unrenderFgRanges()
					}, e.prototype.renderFgRanges = function (e) {
						var t = this.component.eventRangesToEventFootprints(e),
							n = this.component.eventFootprintsToSegs(t);
						n = this.renderFgSegEls(n), !1 !== this.renderFgSegs(n) && (this.fgSegs = n)
					}, e.prototype.unrenderFgRanges = function () {
						this.unrenderFgSegs(this.fgSegs || []), this.fgSegs = null
					}, e.prototype.renderBgRanges = function (e) {
						var t = this.component.eventRangesToEventFootprints(e),
							n = this.component.eventFootprintsToSegs(t);
						!1 !== this.renderBgSegs(n) && (this.bgSegs = n)
					}, e.prototype.unrenderBgRanges = function () {
						this.unrenderBgSegs(), this.bgSegs = null
					}, e.prototype.getSegs = function () {
						return (this.bgSegs || []).concat(this.fgSegs || [])
					}, e.prototype.renderFgSegs = function (e) {
						return !1
					}, e.prototype.unrenderFgSegs = function (e) {}, e.prototype.renderBgSegs = function (e) {
						var t = this;
						if (!this.fillRenderer) return !1;
						this.fillRenderer.renderSegs("bgEvent", e, {
							getClasses: function (e) {
								return t.getBgClasses(e.footprint.eventDef)
							},
							getCss: function (e) {
								return {
									"background-color": t.getBgColor(e.footprint.eventDef)
								}
							},
							filterEl: function (e, n) {
								return t.filterEventRenderEl(e.footprint, n)
							}
						})
					}, e.prototype.unrenderBgSegs = function () {
						this.fillRenderer && this.fillRenderer.unrender("bgEvent")
					}, e.prototype.renderFgSegEls = function (e, t) {
						var n = this;
						void 0 === t && (t = !1);
						var r, a = this.view.hasPublicHandlers("eventRender"),
							o = "",
							l = [];
						if (e.length) {
							for (r = 0; r < e.length; r++) this.beforeFgSegHtml(e[r]), o += this.fgSegHtml(e[r], t);
							i(o).each(function (t, r) {
								var o = e[t],
									s = i(r);
								a && (s = n.filterEventRenderEl(o.footprint, s)), s && (s.data("fc-seg", o), o.el = s, l.push(o))
							})
						}
						return l
					}, e.prototype.beforeFgSegHtml = function (e) {}, e.prototype.fgSegHtml = function (e, t) {}, e.prototype.getSegClasses = function (e, t, n) {
						var i = ["fc-event", e.isStart ? "fc-start" : "fc-not-start", e.isEnd ? "fc-end" : "fc-not-end"].concat(this.getClasses(e.footprint.eventDef));
						return t && i.push("fc-draggable"), n && i.push("fc-resizable"), this.view.isEventDefSelected(e.footprint.eventDef) && i.push("fc-selected"), i
					}, e.prototype.filterEventRenderEl = function (e, t) {
						var n = e.getEventLegacy(),
							r = this.view.publiclyTrigger("eventRender", {
								context: n,
								args: [n, t, this.view]
							});
						return !1 === r ? t = null : r && !0 !== r && (t = i(r)), t
					}, e.prototype.getTimeText = function (e, t, n) {
						return this._getTimeText(e.eventInstance.dateProfile.start, e.eventInstance.dateProfile.end, e.componentFootprint.isAllDay, t, n)
					}, e.prototype._getTimeText = function (e, t, n, i, r) {
						return null == i && (i = this.eventTimeFormat), null == r && (r = this.displayEventEnd), this.displayEventTime && !n ? r && t ? this.view.formatRange({
							start: e,
							end: t
						}, !1, i) : e.format(i) : ""
					}, e.prototype.computeEventTimeFormat = function () {
						return this.opt("smallTimeFormat")
					}, e.prototype.computeDisplayEventTime = function () {
						return !0
					}, e.prototype.computeDisplayEventEnd = function () {
						return !0
					}, e.prototype.getBgClasses = function (e) {
						var t = this.getClasses(e);
						return t.push("fc-bgevent"), t
					}, e.prototype.getClasses = function (e) {
						var t, n = this.getStylingObjs(e),
							i = [];
						for (t = 0; t < n.length; t++) i.push.apply(i, n[t].eventClassName || n[t].className || []);
						return i
					}, e.prototype.getSkinCss = function (e) {
						return {
							"background-color": this.getBgColor(e),
							"border-color": this.getBorderColor(e),
							color: this.getTextColor(e)
						}
					}, e.prototype.getBgColor = function (e) {
						var t, n, i = this.getStylingObjs(e);
						for (t = 0; t < i.length && !n; t++) n = i[t].eventBackgroundColor || i[t].eventColor || i[t].backgroundColor || i[t].color;
						return n || (n = this.opt("eventBackgroundColor") || this.opt("eventColor")), n
					}, e.prototype.getBorderColor = function (e) {
						var t, n, i = this.getStylingObjs(e);
						for (t = 0; t < i.length && !n; t++) n = i[t].eventBorderColor || i[t].eventColor || i[t].borderColor || i[t].color;
						return n || (n = this.opt("eventBorderColor") || this.opt("eventColor")), n
					}, e.prototype.getTextColor = function (e) {
						var t, n, i = this.getStylingObjs(e);
						for (t = 0; t < i.length && !n; t++) n = i[t].eventTextColor || i[t].textColor;
						return n || (n = this.opt("eventTextColor")), n
					}, e.prototype.getStylingObjs = function (e) {
						var t = this.getFallbackStylingObjs(e);
						return t.unshift(e), t
					}, e.prototype.getFallbackStylingObjs = function (e) {
						return [e.source]
					}, e.prototype.sortEventSegs = function (e) {
						e.sort(r.proxy(this, "compareEventSegs"))
					}, e.prototype.compareEventSegs = function (e, t) {
						var n = e.footprint,
							i = t.footprint,
							a = n.componentFootprint,
							o = i.componentFootprint,
							l = a.unzonedRange,
							s = o.unzonedRange;
						return l.startMs - s.startMs || s.endMs - s.startMs - (l.endMs - l.startMs) || o.isAllDay - a.isAllDay || r.compareByFieldSpecs(n.eventDef, i.eventDef, this.view.eventOrderSpecs, n.eventDef.miscProps, i.eventDef.miscProps)
					}, e
				}();
			t.default = a
		}, , , , , function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(11);

			function r(e) {
				return "en" !== e.locale() ? e.clone().locale("en") : e
			}
			i.newMomentProto.format = function () {
				return this._fullCalendar && arguments[0] ? c(this, arguments[0]) : this._ambigTime ? i.oldMomentFormat(r(this), "YYYY-MM-DD") : this._ambigZone ? i.oldMomentFormat(r(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? i.oldMomentFormat(r(this)) : i.oldMomentProto.format.apply(this, arguments)
			}, i.newMomentProto.toISOString = function () {
				return this._ambigTime ? i.oldMomentFormat(r(this), "YYYY-MM-DD") : this._ambigZone ? i.oldMomentFormat(r(this), "YYYY-MM-DD[T]HH:mm:ss") : this._fullCalendar ? i.oldMomentProto.toISOString.apply(r(this), arguments) : i.oldMomentProto.toISOString.apply(this, arguments)
			};
			var a = "\v",
				o = "",
				l = "",
				s = new RegExp(l + "([^" + l + "]*)" + l, "g"),
				d = {
					t: function (e) {
						return i.oldMomentFormat(e, "a").charAt(0)
					},
					T: function (e) {
						return i.oldMomentFormat(e, "A").charAt(0)
					}
				},
				u = {
					Y: {
						value: 1,
						unit: "year"
					},
					M: {
						value: 2,
						unit: "month"
					},
					W: {
						value: 3,
						unit: "week"
					},
					w: {
						value: 3,
						unit: "week"
					},
					D: {
						value: 4,
						unit: "day"
					},
					d: {
						value: 4,
						unit: "day"
					}
				};

			function c(e, t) {
				return function (e, t) {
					return v(y(e, t).join(""))
				}(p(t).fakeFormatString, e)
			}
			t.formatDate = c, t.formatRange = function (e, t, n, r, a) {
				return e = i.default.parseZone(e), t = i.default.parseZone(t),
					function (e, t, n, i, r) {
						var a, o, l, s = e.sameUnits,
							d = t.clone().stripZone(),
							u = n.clone().stripZone(),
							c = y(e.fakeFormatString, t),
							h = y(e.fakeFormatString, n),
							p = "",
							f = "",
							m = "",
							g = "",
							_ = "";
						for (a = 0; a < s.length && (!s[a] || d.isSame(u, s[a])); a++) p += c[a];
						for (o = s.length - 1; o > a && (!s[o] || d.isSame(u, s[o])) && (o - 1 !== a || "." !== c[o]); o--) f = c[o] + f;
						for (l = a; l <= o; l++) m += c[l], g += h[l];
						return (m || g) && (_ = r ? g + i + m : m + i + g), v(p + _ + f)
					}(p(n = e.localeData().longDateFormat(n) || n), e, t, r || " - ", a)
			};
			var h = {};

			function p(e) {
				return h[e] || (h[e] = function (e) {
					var t = f(e);
					return {
						fakeFormatString: g(t),
						sameUnits: _(t)
					}
				}(e))
			}

			function f(e) {
				for (var t, n = [], i = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; t = i.exec(e);) t[1] ? n.push.apply(n, m(t[1])) : t[2] ? n.push({
					maybe: f(t[2])
				}) : t[3] ? n.push({
					token: t[3]
				}) : t[5] && n.push.apply(n, m(t[5]));
				return n
			}

			function m(e) {
				return ". " === e ? [".", " "] : [e]
			}

			function g(e) {
				var t, n, i = [];
				for (t = 0; t < e.length; t++) "string" == typeof (n = e[t]) ? i.push("[" + n + "]") : n.token ? n.token in d ? i.push(o + "[" + n.token + "]") : i.push(n.token) : n.maybe && i.push(l + g(n.maybe) + l);
				return i.join(a)
			}

			function _(e) {
				var t, n, i, r = [];
				for (t = 0; t < e.length; t++)(n = e[t]).token ? (i = u[n.token.charAt(0)], r.push(i ? i.unit : "second")) : n.maybe ? r.push.apply(r, _(n.maybe)) : r.push(null);
				return r
			}

			function y(e, t) {
				var n, r, l = [],
					s = i.oldMomentFormat(t, e).split(a);
				for (n = 0; n < s.length; n++)(r = s[n]).charAt(0) === o ? l.push(d[r.substring(1)](t)) : l.push(r);
				return l
			}

			function v(e) {
				return e.replace(s, function (e, t) {
					return t.match(/[1-9]/) ? t : ""
				})
			}
			t.queryMostGranularFormatUnit = function (e) {
				var t, n, i, r, a = f(e);
				for (t = 0; t < a.length; t++)(n = a[t]).token && (i = u[n.token.charAt(0)]) && (!r || i.value > r.value) && (r = i);
				return r ? r.unit : null
			}
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				return function (e, t, n) {
					this.unzonedRange = e, this.eventDef = t, n && (this.eventInstance = n)
				}
			}();
			t.default = n
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(35),
				a = n(13),
				o = n(7),
				l = function (e) {
					function t() {
						var t = e.call(this) || this;
						return t._watchers = {}, t._props = {}, t.applyGlobalWatchers(), t.constructed(), t
					}
					return i.__extends(t, e), t.watch = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						this.prototype.hasOwnProperty("_globalWatchArgs") || (this.prototype._globalWatchArgs = Object.create(this.prototype._globalWatchArgs)), this.prototype._globalWatchArgs[e] = t
					}, t.prototype.constructed = function () {}, t.prototype.applyGlobalWatchers = function () {
						var e, t = this._globalWatchArgs;
						for (e in t) this.watch.apply(this, [e].concat(t[e]))
					}, t.prototype.has = function (e) {
						return e in this._props
					}, t.prototype.get = function (e) {
						return void 0 === e ? this._props : this._props[e]
					}, t.prototype.set = function (e, t) {
						var n;
						"string" == typeof e ? (n = {})[e] = void 0 === t ? null : t : n = e, this.setProps(n)
					}, t.prototype.reset = function (e) {
						var t, n = this._props,
							i = {};
						for (t in n) i[t] = void 0;
						for (t in e) i[t] = e[t];
						this.setProps(i)
					}, t.prototype.unset = function (e) {
						var t, n, i = {};
						for (t = "string" == typeof e ? [e] : e, n = 0; n < t.length; n++) i[t[n]] = void 0;
						this.setProps(i)
					}, t.prototype.setProps = function (e) {
						var t, n, i = {},
							r = 0;
						for (t in e) "object" != typeof (n = e[t]) && n === this._props[t] || (i[t] = n, r++);
						if (r) {
							for (t in this.trigger("before:batchChange", i), i) n = i[t], this.trigger("before:change", t, n), this.trigger("before:change:" + t, n);
							for (t in i) void 0 === (n = i[t]) ? delete this._props[t] : this._props[t] = n, this.trigger("change:" + t, n), this.trigger("change", t, n);
							this.trigger("batchChange", i)
						}
					}, t.prototype.watch = function (e, t, n, i) {
						var r = this;
						this.unwatch(e), this._watchers[e] = this._watchDeps(t, function (t) {
							var i = n.call(r, t);
							i && i.then ? (r.unset(e), i.then(function (t) {
								r.set(e, t)
							})) : r.set(e, i)
						}, function (t) {
							r.unset(e), i && i.call(r, t)
						})
					}, t.prototype.unwatch = function (e) {
						var t = this._watchers[e];
						t && (delete this._watchers[e], t.teardown())
					}, t.prototype._watchDeps = function (e, t, n) {
						var i = this,
							r = 0,
							a = e.length,
							o = 0,
							l = {},
							s = [],
							d = !1,
							u = function (e, t) {
								i.on(e, t), s.push([e, t])
							};
						return e.forEach(function (e) {
							var i = !1;
							"?" === e.charAt(0) && (e = e.substring(1), i = !0), u("before:change:" + e, function (e) {
								1 == ++r && o === a && (d = !0, n(l), d = !1)
							}), u("change:" + e, function (n) {
								! function (e, n, i) {
									void 0 === n ? (i || void 0 === l[e] || o--, delete l[e]) : (i || void 0 !== l[e] || o++, l[e] = n), --r || o === a && (d || t(l))
								}(e, n, i)
							})
						}), e.forEach(function (e) {
							var t = !1;
							"?" === e.charAt(0) && (e = e.substring(1), t = !0), i.has(e) ? (l[e] = i.get(e), o++) : t && o++
						}), o === a && t(l), {
							teardown: function () {
								for (var e = 0; e < s.length; e++) i.off(s[e][0], s[e][1]);
								s = null, o === a && n()
							},
							flash: function () {
								o === a && (n(), t(l))
							}
						}
					}, t.prototype.flash = function (e) {
						var t = this._watchers[e];
						t && t.flash()
					}, t
				}(r.default);
			t.default = l, l.prototype._globalWatchArgs = {}, a.default.mixInto(l), o.default.mixInto(l)
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(4),
				a = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.defineStandardProps = function (e) {
						var t = this.prototype;
						t.hasOwnProperty("standardPropMap") || (t.standardPropMap = Object.create(t.standardPropMap)), r.copyOwnProps(e, t.standardPropMap)
					}, t.copyVerbatimStandardProps = function (e, t) {
						var n, i = this.prototype.standardPropMap;
						for (n in i) null != e[n] && !0 === i[n] && (t[n] = e[n])
					}, t.prototype.applyProps = function (e) {
						var t, n = this.standardPropMap,
							i = {},
							r = {};
						for (t in e) !0 === n[t] ? this[t] = e[t] : !1 === n[t] ? i[t] = e[t] : r[t] = e[t];
						return this.applyMiscProps(r), this.applyManualStandardProps(i)
					}, t.prototype.applyManualStandardProps = function (e) {
						return !0
					}, t.prototype.applyMiscProps = function (e) {}, t.prototype.isStandardProp = function (e) {
						return e in this.standardPropMap
					}, t
				}(n(15).default);
			t.default = a, a.prototype.standardPropMap = {}
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				function e(e, t) {
					this.def = e, this.dateProfile = t
				}
				return e.prototype.toLegacy = function () {
					var e = this.dateProfile,
						t = this.def.toLegacy();
					return t.start = e.start.clone(), t.end = e.end ? e.end.clone() : null, t
				}, e
			}();
			t.default = n
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(0),
				o = n(37),
				l = n(53),
				s = n(16),
				d = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.prototype.isAllDay = function () {
						return !this.startTime && !this.endTime
					}, t.prototype.buildInstances = function (e) {
						for (var t, n, i, r = this.source.calendar, a = e.getStart(), o = e.getEnd(), d = []; a.isBefore(o);) this.dowHash && !this.dowHash[a.day()] || (n = (t = r.applyTimezone(a)).clone(), i = null, this.startTime ? n.time(this.startTime) : n.stripTime(), this.endTime && (i = t.clone().time(this.endTime)), d.push(new l.default(this, new s.default(n, i, r)))), a.add(1, "days");
						return d
					}, t.prototype.setDow = function (e) {
						this.dowHash || (this.dowHash = {});
						for (var t = 0; t < e.length; t++) this.dowHash[e[t]] = !0
					}, t.prototype.clone = function () {
						var t = e.prototype.clone.call(this);
						return t.startTime && (t.startTime = a.duration(this.startTime)), t.endTime && (t.endTime = a.duration(this.endTime)), this.dowHash && (t.dowHash = r.extend({}, this.dowHash)), t
					}, t
				}(o.default);
			t.default = d, d.prototype.applyProps = function (e) {
				var t = o.default.prototype.applyProps.call(this, e);
				return e.start && (this.startTime = a.duration(e.start)), e.end && (this.endTime = a.duration(e.end)), e.dow && this.setDow(e.dow), t
			}, d.defineStandardProps({
				start: !1,
				end: !1,
				dow: !1
			})
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(0),
				r = n(4),
				a = n(5),
				o = function () {
					function e(e) {
						this._view = e
					}
					return e.prototype.opt = function (e) {
						return this._view.opt(e)
					}, e.prototype.trimHiddenDays = function (e) {
						return this._view.trimHiddenDays(e)
					}, e.prototype.msToUtcMoment = function (e, t) {
						return this._view.calendar.msToUtcMoment(e, t)
					}, e.prototype.buildPrev = function (e) {
						var t = e.date.clone().startOf(e.currentRangeUnit).subtract(e.dateIncrement);
						return this.build(t, -1)
					}, e.prototype.buildNext = function (e) {
						var t = e.date.clone().startOf(e.currentRangeUnit).add(e.dateIncrement);
						return this.build(t, 1)
					}, e.prototype.build = function (e, t, n) {
						void 0 === n && (n = !1);
						var r, a, o, l, s, d, u, c, h = !e.hasTime();
						return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (e = this.msToUtcMoment(r.constrainDate(e), h)), l = this.buildCurrentRangeInfo(e, t), s = /^(year|month|week|day)$/.test(l.unit), d = this.buildRenderRange(this.trimHiddenDays(l.unzonedRange), l.unit, s), u = (d = this.trimHiddenDays(d)).clone(), this.opt("showNonCurrentDates") || (u = u.intersect(l.unzonedRange)), a = i.duration(this.opt("minTime")), o = i.duration(this.opt("maxTime")), (u = (u = this.adjustActiveRange(u, a, o)).intersect(r)) && (e = this.msToUtcMoment(u.constrainDate(e), h)), c = l.unzonedRange.intersectsWith(r), {
							validUnzonedRange: r,
							currentUnzonedRange: l.unzonedRange,
							currentRangeUnit: l.unit,
							isRangeAllDay: s,
							activeUnzonedRange: u,
							renderUnzonedRange: d,
							minTime: a,
							maxTime: o,
							isValid: c,
							date: e,
							dateIncrement: this.buildDateIncrement(l.duration)
						}
					}, e.prototype.buildValidRange = function () {
						return this._view.getUnzonedRangeOption("validRange", this._view.calendar.getNow()) || new a.default
					}, e.prototype.buildCurrentRangeInfo = function (e, t) {
						var n, i = this._view.viewSpec,
							a = null,
							o = null,
							l = null;
						return i.duration ? (a = i.duration, o = i.durationUnit, l = this.buildRangeFromDuration(e, t, a, o)) : (n = this.opt("dayCount")) ? (o = "day", l = this.buildRangeFromDayCount(e, t, n)) : (l = this.buildCustomVisibleRange(e)) ? o = r.computeGreatestUnit(l.getStart(), l.getEnd()) : (a = this.getFallbackDuration(), o = r.computeGreatestUnit(a), l = this.buildRangeFromDuration(e, t, a, o)), {
							duration: a,
							unit: o,
							unzonedRange: l
						}
					}, e.prototype.getFallbackDuration = function () {
						return i.duration({
							days: 1
						})
					}, e.prototype.adjustActiveRange = function (e, t, n) {
						var i = e.getStart(),
							r = e.getEnd();
						return this._view.usesMinMaxTime && (t < 0 && i.time(0).add(t), n > 864e5 && r.time(n - 864e5)), new a.default(i, r)
					}, e.prototype.buildRangeFromDuration = function (e, t, n, o) {
						var l, s, d, u, c, h = this.opt("dateAlignment");

						function p() {
							d = e.clone().startOf(h), u = d.clone().add(n), c = new a.default(d, u)
						}
						return h || ((l = this.opt("dateIncrement")) ? (s = i.duration(l), h = s < n ? r.computeDurationGreatestUnit(s, l) : o) : h = o), n.as("days") <= 1 && this._view.isHiddenDay(d) && (d = this._view.skipHiddenDays(d, t)).startOf("day"), p(), this.trimHiddenDays(c) || (e = this._view.skipHiddenDays(e, t), p()), c
					}, e.prototype.buildRangeFromDayCount = function (e, t, n) {
						var i, r, o = this.opt("dateAlignment"),
							l = 0;
						if (o || -1 !== t) {
							i = e.clone(), o && i.startOf(o), i.startOf("day"), r = (i = this._view.skipHiddenDays(i)).clone();
							do {
								r.add(1, "day"), this._view.isHiddenDay(r) || l++
							} while (l < n)
						} else {
							r = e.clone().startOf("day").add(1, "day"), i = (r = this._view.skipHiddenDays(r, -1, !0)).clone();
							do {
								i.add(-1, "day"), this._view.isHiddenDay(i) || l++
							} while (l < n)
						}
						return new a.default(i, r)
					}, e.prototype.buildCustomVisibleRange = function (e) {
						var t = this._view.getUnzonedRangeOption("visibleRange", this._view.calendar.applyTimezone(e));
						return !t || null != t.startMs && null != t.endMs ? t : null
					}, e.prototype.buildRenderRange = function (e, t, n) {
						return e.clone()
					}, e.prototype.buildDateIncrement = function (e) {
						var t, n = this.opt("dateIncrement");
						return n ? i.duration(n) : (t = this.opt("dateAlignment")) ? i.duration(1, t) : e || i.duration({
							days: 1
						})
					}, e
				}();
			t.default = o
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(4),
				o = n(21),
				l = n(6),
				s = n(9),
				d = function (e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.eventDefs = [], n
					}
					return i.__extends(t, e), t.parse = function (e, t) {
						var n;
						return r.isArray(e.events) ? n = e : r.isArray(e) && (n = {
							events: e
						}), !!n && l.default.parse.call(this, n, t)
					}, t.prototype.setRawEventDefs = function (e) {
						this.rawEventDefs = e, this.eventDefs = this.parseEventDefs(e)
					}, t.prototype.fetch = function (e, t, n) {
						var i, r = this.eventDefs;
						if (null != this.currentTimezone && this.currentTimezone !== n)
							for (i = 0; i < r.length; i++) r[i] instanceof s.default && r[i].rezone();
						return this.currentTimezone = n, o.default.resolve(r)
					}, t.prototype.addEventDef = function (e) {
						this.eventDefs.push(e)
					}, t.prototype.removeEventDefsById = function (e) {
						return a.removeMatching(this.eventDefs, function (t) {
							return t.id === e
						})
					}, t.prototype.removeAllEventDefs = function () {
						this.eventDefs = []
					}, t.prototype.getPrimitive = function () {
						return this.rawEventDefs
					}, t.prototype.applyManualStandardProps = function (t) {
						var n = e.prototype.applyManualStandardProps.call(this, t);
						return this.setRawEventDefs(t.events), n
					}, t
				}(l.default);
			t.default = d, d.defineStandardProps({
				events: !1
			})
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(221),
				r = n(222),
				a = {};
			t.defineThemeSystem = function (e, t) {
				a[e] = t
			}, t.getThemeSystemClass = function (e) {
				return e ? !0 === e ? r.default : a[e] : i.default
			}
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(4),
				a = function () {
					function e(e) {
						this.isHorizontal = !1, this.isVertical = !1, this.els = i(e.els), this.isHorizontal = e.isHorizontal, this.isVertical = e.isVertical, this.forcedOffsetParentEl = e.offsetParent ? i(e.offsetParent) : null
					}
					return e.prototype.build = function () {
						var e = this.forcedOffsetParentEl;
						!e && this.els.length > 0 && (e = this.els.eq(0).offsetParent()), this.origin = e ? e.offset() : null, this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
					}, e.prototype.clear = function () {
						this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
					}, e.prototype.ensureBuilt = function () {
						this.origin || this.build()
					}, e.prototype.buildElHorizontals = function () {
						var e = [],
							t = [];
						this.els.each(function (n, r) {
							var a = i(r),
								o = a.offset().left,
								l = a.outerWidth();
							e.push(o), t.push(o + l)
						}), this.lefts = e, this.rights = t
					}, e.prototype.buildElVerticals = function () {
						var e = [],
							t = [];
						this.els.each(function (n, r) {
							var a = i(r),
								o = a.offset().top,
								l = a.outerHeight();
							e.push(o), t.push(o + l)
						}), this.tops = e, this.bottoms = t
					}, e.prototype.getHorizontalIndex = function (e) {
						this.ensureBuilt();
						var t, n = this.lefts,
							i = this.rights,
							r = n.length;
						for (t = 0; t < r; t++)
							if (e >= n[t] && e < i[t]) return t
					}, e.prototype.getVerticalIndex = function (e) {
						this.ensureBuilt();
						var t, n = this.tops,
							i = this.bottoms,
							r = n.length;
						for (t = 0; t < r; t++)
							if (e >= n[t] && e < i[t]) return t
					}, e.prototype.getLeftOffset = function (e) {
						return this.ensureBuilt(), this.lefts[e]
					}, e.prototype.getLeftPosition = function (e) {
						return this.ensureBuilt(), this.lefts[e] - this.origin.left
					}, e.prototype.getRightOffset = function (e) {
						return this.ensureBuilt(), this.rights[e]
					}, e.prototype.getRightPosition = function (e) {
						return this.ensureBuilt(), this.rights[e] - this.origin.left
					}, e.prototype.getWidth = function (e) {
						return this.ensureBuilt(), this.rights[e] - this.lefts[e]
					}, e.prototype.getTopOffset = function (e) {
						return this.ensureBuilt(), this.tops[e]
					}, e.prototype.getTopPosition = function (e) {
						return this.ensureBuilt(), this.tops[e] - this.origin.top
					}, e.prototype.getBottomOffset = function (e) {
						return this.ensureBuilt(), this.bottoms[e]
					}, e.prototype.getBottomPosition = function (e) {
						return this.ensureBuilt(), this.bottoms[e] - this.origin.top
					}, e.prototype.getHeight = function (e) {
						return this.ensureBuilt(), this.bottoms[e] - this.tops[e]
					}, e.prototype.queryBoundingRect = function () {
						var e;
						return this.els.length > 0 && !(e = r.getScrollParent(this.els.eq(0))).is(document) && !e.is("html,body") ? r.getClientRect(e) : null
					}, e.prototype.isPointInBounds = function (e, t) {
						return this.isLeftInBounds(e) && this.isTopInBounds(t)
					}, e.prototype.isLeftInBounds = function (e) {
						return !this.boundingRect || e >= this.boundingRect.left && e < this.boundingRect.right
					}, e.prototype.isTopInBounds = function (e) {
						return !this.boundingRect || e >= this.boundingRect.top && e < this.boundingRect.bottom
					}, e
				}();
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(4),
				a = n(7),
				o = n(23),
				l = function () {
					function e(e) {
						this.isInteracting = !1, this.isDistanceSurpassed = !1, this.isDelayEnded = !1, this.isDragging = !1, this.isTouch = !1, this.isGeneric = !1, this.shouldCancelTouchScroll = !0, this.scrollAlwaysKills = !1, this.isAutoScroll = !1, this.scrollSensitivity = 30, this.scrollSpeed = 200, this.scrollIntervalMs = 50, this.options = e || {}
					}
					return e.prototype.startInteraction = function (e, t) {
						if (void 0 === t && (t = {}), "mousedown" === e.type) {
							if (o.default.get().shouldIgnoreMouse()) return;
							if (!r.isPrimaryMouseButton(e)) return;
							e.preventDefault()
						}
						this.isInteracting || (this.delay = r.firstDefined(t.delay, this.options.delay, 0), this.minDistance = r.firstDefined(t.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, r.preventSelection(i("body")), this.isInteracting = !0, this.isTouch = r.getEvIsTouch(e), this.isGeneric = "dragstart" === e.type, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = r.getEvX(e), this.originY = r.getEvY(e), this.scrollEl = r.getScrollParent(i(e.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(e), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e))
					}, e.prototype.handleInteractionStart = function (e) {
						this.trigger("interactionStart", e)
					}, e.prototype.endInteraction = function (e, t) {
						this.isInteracting && (this.endDrag(e), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(e, t), r.allowSelection(i("body")))
					}, e.prototype.handleInteractionEnd = function (e, t) {
						this.trigger("interactionEnd", e, t || !1)
					}, e.prototype.bindHandlers = function () {
						var e = o.default.get();
						this.isGeneric ? this.listenTo(i(document), {
							drag: this.handleMove,
							dragstop: this.endInteraction
						}) : this.isTouch ? this.listenTo(e, {
							touchmove: this.handleTouchMove,
							touchend: this.endInteraction,
							scroll: this.handleTouchScroll
						}) : this.listenTo(e, {
							mousemove: this.handleMouseMove,
							mouseup: this.endInteraction
						}), this.listenTo(e, {
							selectstart: r.preventDefault,
							contextmenu: r.preventDefault
						})
					}, e.prototype.unbindHandlers = function () {
						this.stopListeningTo(o.default.get()), this.stopListeningTo(i(document))
					}, e.prototype.startDrag = function (e, t) {
						this.startInteraction(e, t), this.isDragging || (this.isDragging = !0, this.handleDragStart(e))
					}, e.prototype.handleDragStart = function (e) {
						this.trigger("dragStart", e)
					}, e.prototype.handleMove = function (e) {
						var t = r.getEvX(e) - this.originX,
							n = r.getEvY(e) - this.originY,
							i = this.minDistance;
						this.isDistanceSurpassed || t * t + n * n >= i * i && this.handleDistanceSurpassed(e), this.isDragging && this.handleDrag(t, n, e)
					}, e.prototype.handleDrag = function (e, t, n) {
						this.trigger("drag", e, t, n), this.updateAutoScroll(n)
					}, e.prototype.endDrag = function (e) {
						this.isDragging && (this.isDragging = !1, this.handleDragEnd(e))
					}, e.prototype.handleDragEnd = function (e) {
						this.trigger("dragEnd", e)
					}, e.prototype.startDelay = function (e) {
						var t = this;
						this.delay ? this.delayTimeoutId = setTimeout(function () {
							t.handleDelayEnd(e)
						}, this.delay) : this.handleDelayEnd(e)
					}, e.prototype.handleDelayEnd = function (e) {
						this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(e)
					}, e.prototype.handleDistanceSurpassed = function (e) {
						this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(e)
					}, e.prototype.handleTouchMove = function (e) {
						this.isDragging && this.shouldCancelTouchScroll && e.preventDefault(), this.handleMove(e)
					}, e.prototype.handleMouseMove = function (e) {
						this.handleMove(e)
					}, e.prototype.handleTouchScroll = function (e) {
						this.isDragging && !this.scrollAlwaysKills || this.endInteraction(e, !0)
					}, e.prototype.trigger = function (e) {
						for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
						this.options[e] && this.options[e].apply(this, t), this["_" + e] && this["_" + e].apply(this, t)
					}, e.prototype.initAutoScroll = function () {
						var e = this.scrollEl;
						this.isAutoScroll = this.options.scroll && e && !e.is(window) && !e.is(document), this.isAutoScroll && this.listenTo(e, "scroll", r.debounce(this.handleDebouncedScroll, 100))
					}, e.prototype.destroyAutoScroll = function () {
						this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
					}, e.prototype.computeScrollBounds = function () {
						this.isAutoScroll && (this.scrollBounds = r.getOuterRect(this.scrollEl))
					}, e.prototype.updateAutoScroll = function (e) {
						var t, n, i, a, o = this.scrollSensitivity,
							l = this.scrollBounds,
							s = 0,
							d = 0;
						l && (t = (o - (r.getEvY(e) - l.top)) / o, n = (o - (l.bottom - r.getEvY(e))) / o, i = (o - (r.getEvX(e) - l.left)) / o, a = (o - (l.right - r.getEvX(e))) / o, t >= 0 && t <= 1 ? s = t * this.scrollSpeed * -1 : n >= 0 && n <= 1 && (s = n * this.scrollSpeed), i >= 0 && i <= 1 ? d = i * this.scrollSpeed * -1 : a >= 0 && a <= 1 && (d = a * this.scrollSpeed)), this.setScrollVel(s, d)
					}, e.prototype.setScrollVel = function (e, t) {
						this.scrollTopVel = e, this.scrollLeftVel = t, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(r.proxy(this, "scrollIntervalFunc"), this.scrollIntervalMs))
					}, e.prototype.constrainScrollVel = function () {
						var e = this.scrollEl;
						this.scrollTopVel < 0 ? e.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && e.scrollTop() + e[0].clientHeight >= e[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? e.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && e.scrollLeft() + e[0].clientWidth >= e[0].scrollWidth && (this.scrollLeftVel = 0)
					}, e.prototype.scrollIntervalFunc = function () {
						var e = this.scrollEl,
							t = this.scrollIntervalMs / 1e3;
						this.scrollTopVel && e.scrollTop(e.scrollTop() + this.scrollTopVel * t), this.scrollLeftVel && e.scrollLeft(e.scrollLeft() + this.scrollLeftVel * t), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
					}, e.prototype.endAutoScroll = function () {
						this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
					}, e.prototype.handleDebouncedScroll = function () {
						this.scrollIntervalId || this.handleScrollEnd()
					}, e.prototype.handleScrollEnd = function () {}, e
				}();
			t.default = l, a.default.mixInto(l)
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(4),
				a = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.prototype.updateDayTable = function () {
						for (var e, t, n, i = this, r = i.view, a = r.calendar, o = a.msToUtcMoment(i.dateProfile.renderUnzonedRange.startMs, !0), l = a.msToUtcMoment(i.dateProfile.renderUnzonedRange.endMs, !0), s = -1, d = [], u = []; o.isBefore(l);) r.isHiddenDay(o) ? d.push(s + .5) : (s++, d.push(s), u.push(o.clone())), o.add(1, "days");
						if (this.breakOnWeeks) {
							for (t = u[0].day(), e = 1; e < u.length && u[e].day() !== t; e++);
							n = Math.ceil(u.length / e)
						} else n = 1, e = u.length;
						this.dayDates = u, this.dayIndices = d, this.daysPerRow = e, this.rowCnt = n, this.updateDayTableCols()
					}, t.prototype.updateDayTableCols = function () {
						this.colCnt = this.computeColCnt(), this.colHeadFormat = this.opt("columnHeaderFormat") || this.opt("columnFormat") || this.computeColHeadFormat()
					}, t.prototype.computeColCnt = function () {
						return this.daysPerRow
					}, t.prototype.getCellDate = function (e, t) {
						return this.dayDates[this.getCellDayIndex(e, t)].clone()
					}, t.prototype.getCellRange = function (e, t) {
						var n = this.getCellDate(e, t),
							i = n.clone().add(1, "days");
						return {
							start: n,
							end: i
						}
					}, t.prototype.getCellDayIndex = function (e, t) {
						return e * this.daysPerRow + this.getColDayIndex(t)
					}, t.prototype.getColDayIndex = function (e) {
						return this.isRTL ? this.colCnt - 1 - e : e
					}, t.prototype.getDateDayIndex = function (e) {
						var t = this.dayIndices,
							n = e.diff(this.dayDates[0], "days");
						return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
					}, t.prototype.computeColHeadFormat = function () {
						return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.opt("dayOfMonthFormat") : "dddd"
					}, t.prototype.sliceRangeByRow = function (e) {
						var t, n, i, r, a, o = this.daysPerRow,
							l = this.view.computeDayRange(e),
							s = this.getDateDayIndex(l.start),
							d = this.getDateDayIndex(l.end.clone().subtract(1, "days")),
							u = [];
						for (t = 0; t < this.rowCnt; t++) i = (n = t * o) + o - 1, r = Math.max(s, n), a = Math.min(d, i), (r = Math.ceil(r)) <= (a = Math.floor(a)) && u.push({
							row: t,
							firstRowDayIndex: r - n,
							lastRowDayIndex: a - n,
							isStart: r === s,
							isEnd: a === d
						});
						return u
					}, t.prototype.sliceRangeByDay = function (e) {
						var t, n, i, r, a, o, l = this.daysPerRow,
							s = this.view.computeDayRange(e),
							d = this.getDateDayIndex(s.start),
							u = this.getDateDayIndex(s.end.clone().subtract(1, "days")),
							c = [];
						for (t = 0; t < this.rowCnt; t++)
							for (i = (n = t * l) + l - 1, r = n; r <= i; r++) a = Math.max(d, r), o = Math.min(u, r), (a = Math.ceil(a)) <= (o = Math.floor(o)) && c.push({
								row: t,
								firstRowDayIndex: a - n,
								lastRowDayIndex: o - n,
								isStart: a === d,
								isEnd: o === u
							});
						return c
					}, t.prototype.renderHeadHtml = function () {
						var e = this.view.calendar.theme;
						return '<div class="fc-row ' + e.getClass("headerRow") + '"><table class="' + e.getClass("tableGrid") + '"><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
					}, t.prototype.renderHeadIntroHtml = function () {
						return this.renderIntroHtml()
					}, t.prototype.renderHeadTrHtml = function () {
						return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
					}, t.prototype.renderHeadDateCellsHtml = function () {
						var e, t, n = [];
						for (e = 0; e < this.colCnt; e++) t = this.getCellDate(0, e), n.push(this.renderHeadDateCellHtml(t));
						return n.join("")
					}, t.prototype.renderHeadDateCellHtml = function (e, t, n) {
						var i, a = this,
							o = a.view,
							l = a.dateProfile.activeUnzonedRange.containsDate(e),
							s = ["fc-day-header", o.calendar.theme.getClass("widgetHeader")];
						return i = "function" == typeof a.opt("columnHeaderHtml") ? a.opt("columnHeaderHtml")(e) : "function" == typeof a.opt("columnHeaderText") ? r.htmlEscape(a.opt("columnHeaderText")(e)) : r.htmlEscape(e.format(a.colHeadFormat)), 1 === a.rowCnt ? s = s.concat(a.getDayClasses(e, !0)) : s.push("fc-" + r.dayIDs[e.day()]), '<th class="' + s.join(" ") + '"' + (1 === (l && a.rowCnt) ? ' data-date="' + e.format("YYYY-MM-DD") + '"' : "") + (t > 1 ? ' colspan="' + t + '"' : "") + (n ? " " + n : "") + ">" + (l ? o.buildGotoAnchorHtml({
							date: e,
							forceOff: a.rowCnt > 1 || 1 === a.colCnt
						}, i) : i) + "</th>"
					}, t.prototype.renderBgTrHtml = function (e) {
						return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(e)) + this.renderBgCellsHtml(e) + (this.isRTL ? this.renderBgIntroHtml(e) : "") + "</tr>"
					}, t.prototype.renderBgIntroHtml = function (e) {
						return this.renderIntroHtml()
					}, t.prototype.renderBgCellsHtml = function (e) {
						var t, n, i = [];
						for (t = 0; t < this.colCnt; t++) n = this.getCellDate(e, t), i.push(this.renderBgCellHtml(n));
						return i.join("")
					}, t.prototype.renderBgCellHtml = function (e, t) {
						var n = this,
							i = n.view,
							r = n.dateProfile.activeUnzonedRange.containsDate(e),
							a = n.getDayClasses(e);
						return a.unshift("fc-day", i.calendar.theme.getClass("widgetContent")), '<td class="' + a.join(" ") + '"' + (r ? ' data-date="' + e.format("YYYY-MM-DD") + '"' : "") + (t ? " " + t : "") + "></td>"
					}, t.prototype.renderIntroHtml = function () {}, t.prototype.bookendCells = function (e) {
						var t = this.renderIntroHtml();
						t && (this.isRTL ? e.append(t) : e.prepend(t))
					}, t
				}(n(15).default);
			t.default = a
		}, function (e, t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = function () {
				function e(e, t) {
					this.component = e, this.fillRenderer = t
				}
				return e.prototype.render = function (e) {
					var t = this.component,
						n = t._getDateProfile().activeUnzonedRange,
						i = e.buildEventInstanceGroup(t.hasAllDayBusinessHours, n),
						r = i ? t.eventRangesToEventFootprints(i.sliceRenderRanges(n)) : [];
					this.renderEventFootprints(r)
				}, e.prototype.renderEventFootprints = function (e) {
					var t = this.component.eventFootprintsToSegs(e);
					this.renderSegs(t), this.segs = t
				}, e.prototype.renderSegs = function (e) {
					this.fillRenderer && this.fillRenderer.renderSegs("businessHours", e, {
						getClasses: function (e) {
							return ["fc-nonbusiness", "fc-bgevent"]
						}
					})
				}, e.prototype.unrender = function () {
					this.fillRenderer && this.fillRenderer.unrender("businessHours"), this.segs = null
				}, e.prototype.getSegs = function () {
					return this.segs || []
				}, e
			}();
			t.default = n
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(3),
				r = n(4),
				a = function () {
					function e(e) {
						this.fillSegTag = "div", this.component = e, this.elsByFill = {}
					}
					return e.prototype.renderFootprint = function (e, t, n) {
						this.renderSegs(e, this.component.componentFootprintToSegs(t), n)
					}, e.prototype.renderSegs = function (e, t, n) {
						var i;
						return t = this.buildSegEls(e, t, n), (i = this.attachSegEls(e, t)) && this.reportEls(e, i), t
					}, e.prototype.unrender = function (e) {
						var t = this.elsByFill[e];
						t && (t.remove(), delete this.elsByFill[e])
					}, e.prototype.buildSegEls = function (e, t, n) {
						var r, a = this,
							o = "",
							l = [];
						if (t.length) {
							for (r = 0; r < t.length; r++) o += this.buildSegHtml(e, t[r], n);
							i(o).each(function (e, r) {
								var o = t[e],
									s = i(r);
								n.filterEl && (s = n.filterEl(o, s)), s && (s = i(s)).is(a.fillSegTag) && (o.el = s, l.push(o))
							})
						}
						return l
					}, e.prototype.buildSegHtml = function (e, t, n) {
						var i = n.getClasses ? n.getClasses(t) : [],
							a = r.cssToStr(n.getCss ? n.getCss(t) : {});
						return "<" + this.fillSegTag + (i.length ? ' class="' + i.join(" ") + '"' : "") + (a ? ' style="' + a + '"' : "") + " />"
					}, e.prototype.attachSegEls = function (e, t) {}, e.prototype.reportEls = function (e, t) {
						this.elsByFill[e] ? this.elsByFill[e] = this.elsByFill[e].add(t) : this.elsByFill[e] = i(t)
					}, e
				}();
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(9),
				r = n(34),
				a = n(6),
				o = function () {
					function e(e, t) {
						this.view = e._getView(), this.component = e, this.eventRenderer = t
					}
					return e.prototype.renderComponentFootprint = function (e) {
						this.renderEventFootprints([this.fabricateEventFootprint(e)])
					}, e.prototype.renderEventDraggingFootprints = function (e, t, n) {
						this.renderEventFootprints(e, t, "fc-dragging", n ? null : this.view.opt("dragOpacity"))
					}, e.prototype.renderEventResizingFootprints = function (e, t, n) {
						this.renderEventFootprints(e, t, "fc-resizing")
					}, e.prototype.renderEventFootprints = function (e, t, n, i) {
						var r, a = this.component.eventFootprintsToSegs(e),
							o = "fc-helper " + (n || "");
						for (a = this.eventRenderer.renderFgSegEls(a), r = 0; r < a.length; r++) a[r].el.addClass(o);
						if (null != i)
							for (r = 0; r < a.length; r++) a[r].el.css("opacity", i);
						this.helperEls = this.renderSegs(a, t)
					}, e.prototype.renderSegs = function (e, t) {}, e.prototype.unrender = function () {
						this.helperEls && (this.helperEls.remove(), this.helperEls = null)
					}, e.prototype.fabricateEventFootprint = function (e) {
						var t, n = this.view.calendar,
							o = n.footprintToDateProfile(e),
							l = new i.default(new a.default(n));
						return l.dateProfile = o, t = l.buildInstance(), new r.default(e, l, t)
					}, e
				}();
			t.default = o
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(23),
				a = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t.prototype.bindToEl = function (e) {
						var t = this.component;
						t.bindSegHandlerToEl(e, "click", this.handleClick.bind(this)), t.bindSegHandlerToEl(e, "mouseenter", this.handleMouseover.bind(this)), t.bindSegHandlerToEl(e, "mouseleave", this.handleMouseout.bind(this))
					}, t.prototype.handleClick = function (e, t) {
						!1 === this.component.publiclyTrigger("eventClick", {
							context: e.el[0],
							args: [e.footprint.getEventLegacy(), t, this.view]
						}) && t.preventDefault()
					}, t.prototype.handleMouseover = function (e, t) {
						r.default.get().shouldIgnoreMouse() || this.mousedOverSeg || (this.mousedOverSeg = e, this.view.isEventDefResizable(e.footprint.eventDef) && e.el.addClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseover", {
							context: e.el[0],
							args: [e.footprint.getEventLegacy(), t, this.view]
						}))
					}, t.prototype.handleMouseout = function (e, t) {
						this.mousedOverSeg && (this.mousedOverSeg = null, this.view.isEventDefResizable(e.footprint.eventDef) && e.el.removeClass("fc-allow-mouse-resize"), this.component.publiclyTrigger("eventMouseout", {
							context: e.el[0],
							args: [e.footprint.getEventLegacy(), t || {}, this.view]
						}))
					}, t.prototype.end = function () {
						this.mousedOverSeg && this.handleMouseout(this.mousedOverSeg)
					}, t
				}(n(14).default);
			t.default = a
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(15),
				a = n(237),
				o = n(236),
				l = n(64),
				s = n(235),
				d = n(234),
				u = n(233),
				c = function (e) {
					function t() {
						return null !== e && e.apply(this, arguments) || this
					}
					return i.__extends(t, e), t
				}(r.default);
			t.default = c, c.prototype.dateClickingClass = a.default, c.prototype.dateSelectingClass = o.default, c.prototype.eventPointingClass = l.default, c.prototype.eventDraggingClass = s.default, c.prototype.eventResizingClass = d.default, c.prototype.externalDroppingClass = u.default
		}, function (e, t, n) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i = n(2),
				r = n(3),
				a = n(4),
				o = n(58),
				l = n(227),
				s = n(5),
				d = n(12),
				u = n(34),
				c = n(61),
				h = n(65),
				p = n(42),
				f = n(60),
				m = n(243),
				g = n(244),
				_ = n(245),
				y = function (e) {
					function t(t) {
						var n = e.call(this, t) || this;
						return n.cellWeekNumbersVisible = !1, n.bottomCoordPadding = 0, n.isRigid = !1, n.hasAllDayBusinessHours = !0, n
					}
					return i.__extends(t, e), t.prototype.componentFootprintToSegs = function (e) {
						var t, n, i = this.sliceRangeByRow(e.unzonedRange);
						for (t = 0; t < i.length; t++) n = i[t], this.isRTL ? (n.leftCol = this.daysPerRow - 1 - n.lastRowDayIndex, n.rightCol = this.daysPerRow - 1 - n.firstRowDayIndex) : (n.leftCol = n.firstRowDayIndex, n.rightCol = n.lastRowDayIndex);
						return i
					}, t.prototype.renderDates = function (e) {
						this.dateProfile = e, this.updateDayTable(), this.renderGrid()
					}, t.prototype.unrenderDates = function () {
						this.removeSegPopover()
					}, t.prototype.renderGrid = function () {
						var e, t, n = this.view,
							i = this.rowCnt,
							r = this.colCnt,
							a = "";
						for (this.headContainerEl && this.headContainerEl.html(this.renderHeadHtml()), e = 0; e < i; e++) a += this.renderDayRowHtml(e, this.isRigid);
						for (this.el.html(a), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day, .fc-disabled-day"), this.rowCoordCache = new o.default({
								els: this.rowEls,
								isVertical: !0
							}), this.colCoordCache = new o.default({
								els: this.cellEls.slice(0, this.colCnt),
								isHorizontal: !0
							}), e = 0; e < i; e++)
							for (t = 0; t < r; t++) this.publiclyTrigger("dayRender", {
								context: n,
								args: [this.getCellDate(e, t), this.getCellEl(e, t), n]
							})
					}, t.prototype.renderDayRowHtml = function (e, t) {
						var n = this.view.calendar.theme,
							i = ["fc-row", "fc-week", n.getClass("dayRow")];
						return t && i.push("fc-rigid"), '<div class="' + i.join(" ") + '"><div class="fc-bg"><table class="' + n.getClass("tableGrid") + '">' + this.renderBgTrHtml(e) + '</table></div><div class="fc-content-skeleton"><table>' + (this.getIsNumbersVisible() ? "<thead>" + this.renderNumberTrHtml(e) + "</thead>" : "") + "</table></div></div>"
					}, t.prototype.getIsNumbersVisible = function () {
						return this.getIsDayNumbersVisible() || this.cellWeekNumbersVisible
					}, t.prototype.getIsDayNumbersVisible = function () {
						return this.rowCnt > 1
					}, t.prototype.renderNumberTrHtml = function (e) {
						return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(e)) + this.renderNumberCellsHtml(e) + (this.isRTL ? this.renderNumberIntroHtml(e) : "") + "</tr>"
					}, t.prototype.renderNumberIntroHtml = function (e) {
						return this.renderIntroHtml()
					}, t.prototype.renderNumberCellsHtml = function (e) {
						var t, n, i = [];
						for (t = 0; t < this.colCnt; t++) n = this.getCellDate(e, t), i.push(this.renderNumberCellHtml(n));
						return i.join("")
					}, t.prototype.renderNumberCellHtml = function (e) {
						var t, n, i = this.view,
							r = "",
							a = this.dateProfile.activeUnzonedRange.containsDate(e),
							o = this.getIsDayNumbersVisible() && a;
						return o || this.cellWeekNumbersVisible ? ((t = this.getDayClasses(e)).unshift("fc-day-top"), this.cellWeekNumbersVisible && (n = "ISO" === e._locale._fullCalendar_weekCalc ? 1 : e._locale.firstDayOfWeek()), r += '<td class="' + t.join(" ") + '"' + (a ? ' data-date="' + e.format() + '"' : "") + ">", this.cellWeekNumbersVisible && e.day() === n && (r += i.buildGotoAnchorHtml({
							date: e,
							type: "week"
						}, {
							class: "fc-week-number"
						}, e.format("w"))), o && (r += i.buildGotoAnchorHtml(e, {
							class: "fc-day-number"
						}, e.format("D"))), r += "</td>") : "<td/>"
					}, t.prototype.prepareHits = function () {
						this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
					}, t.prototype.releaseHits = function () {
						this.colCoordCache.clear(), this.rowCoordCache.clear()
					}, t.prototype.queryHit = function (e, t) {
						if (this.colCoordCache.isLeftInBounds(e) && this.rowCoordCache.isTopInBounds(t)) {
							var n = this.colCoordCache.getHorizontalIndex(e),
								i = this.rowCoordCache.getVerticalIndex(t);
							if (null != i && null != n) return this.getCellHit(i, n)
						}
					}, t.prototype.getHitFootprint = function (e) {
						var t = this.getCellRange(e.row, e.col);
						return new d.default(new s.default(t.start, t.end), !0)
					}, t.prototype.getHitEl = function (e) {
						return this.getCellEl(e.row, e.col)
					}, t.prototype.getCellHit = function (e, t) {
						return {
							row: e,
							col: t,
							component: this,
							left: this.colCoordCache.getLeftOffset(t),
							right: this.colCoordCache.getRightOffset(t),
							top: this.rowCoordCache.getTopOffset(e),
							bottom: this.rowCoordCache.getBottomOffset(e)
						}
					}, t.prototype.getCellEl = function (e, t) {
						return this.cellEls.eq(e * this.colCnt + t)
					}, t.prototype.executeEventUnrender = function () {
						this.removeSegPopover(), e.prototype.executeEventUnrender.call(this)
					}, t.prototype.getOwnEventSegs = function () {
						return e.prototype.getOwnEventSegs.call(this).concat(this.popoverSegs || [])
					}, t.prototype.renderDrag = function (e, t, n) {
						var i;
						for (i = 0; i < e.length; i++) this.renderHighlight(e[i].componentFootprint);
						if (e.length && t && t.component !== this) return this.helperRenderer.renderEventDraggingFootprints(e, t, n), !0
					}, t.prototype.unrenderDrag = function () {
						this.unrenderHighlight(), this.helperRenderer.unrender()
					}, t.prototype.renderEventResize = function (e, t, n) {
						var i;
						for (i = 0; i < e.length; i++) this.renderHighlight(e[i].componentFootprint);
						this.helperRenderer.renderEventResizingFootprints(e, t, n)
					}, t.prototype.unrenderEventResize = function () {
						this.unrenderHighlight(), this.helperRenderer.unrender()
					}, t.prototype.removeSegPopover = function () {
						this.segPopover && this.segPopover.hide()
					}, t.prototype.limitRows = function (e) {
						var t, n, i = this.eventRenderer.rowStructs || [];
						for (t = 0; t < i.length; t++) this.unlimitRow(t), !1 !== (n = !!e && ("number" == typeof e ? e : this.computeRowLevelLimit(t))) && this.limitRow(t, n)
					}, t.prototype.computeRowLevelLimit = function (e) {
						var t, n, i, a = this.rowEls.eq(e).height(),
							o = this.eventRenderer.rowStructs[e].tbodyEl.children();

						function l(e, t) {
							i = Math.max(i, r(t).outerHeight())
						}
						for (t = 0; t < o.length; t++)
							if (n = o.eq(t).removeClass("fc-limited"), i = 0, n.find("> td > :first-child").each(l), n.position().top + i > a) return t;
						return !1
					}, t.prototype.limitRow = function (e, t) {
						var n, i, a, o, l, s, d, u, c, h, p, f, m, g, _, y = this,
							v = this.eventRenderer.rowStructs[e],
							M = [],
							b