(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),s("p",[e._v("If you get "),s("a",{attrs:{href:"http://tools.ietf.org/html/rfc6585",target:"_blank",rel:"noopener noreferrer"}},[e._v("response code 429"),s("OutboundLink")],1),e._v(", it means that you have sent too many requests. If this happens, have a look in the "),s("strong",[e._v("Retry-After")]),e._v(" header, where you will see a number displayed. This is the amount of "),s("strong",[e._v("seconds that you need to wait")]),e._v(", before you can retry sending your requests.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"rate-limiting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rate-limiting","aria-hidden":"true"}},[this._v("#")]),this._v(" Rate Limiting")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Rate limiting of the API is primarily on a per-user basis — or more accurately described, per user API token. It allows "),t("strong",[this._v("60 requests per minute per API token")]),this._v(". On each request, your current rate limit status is returned in the response headers:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-http extra-class"},[t("pre",{pre:!0,attrs:{class:"language-http"}},[t("code",[t("span",{attrs:{class:"token header-name keyword"}},[this._v("X-RateLimit-Limit:")]),this._v(" 60\n"),t("span",{attrs:{class:"token header-name keyword"}},[this._v("X-RateLimit-Remaining:")]),this._v(" 55\n")])])])}],!1,null,null,null);t.default=a.exports}}]);