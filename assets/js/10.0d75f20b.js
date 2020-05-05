(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{333:function(e,t,r){"use strict";r.r(t);var s=r(18),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"rate-limiting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rate-limiting"}},[e._v("#")]),e._v(" Rate Limiting")]),e._v(" "),r("p",[e._v("Rate limiting of the API is primarily on a per-user basis — or more accurately described, per user API token. It allows "),r("strong",[e._v("60 requests per minute per API token")]),e._v(". On each request, your current rate limit status is returned in the response headers:")]),e._v(" "),r("div",{staticClass:"language-http extra-class"},[r("pre",{pre:!0,attrs:{class:"language-http"}},[r("code",[r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("X-RateLimit-Limit:")]),e._v(" 60\n"),r("span",{pre:!0,attrs:{class:"token header-name keyword"}},[e._v("X-RateLimit-Remaining:")]),e._v(" 55\n")])])]),r("p",[e._v("If you get "),r("a",{attrs:{href:"http://tools.ietf.org/html/rfc6585",target:"_blank",rel:"noopener noreferrer"}},[e._v("response code 429"),r("OutboundLink")],1),e._v(", it means that you have sent too many requests. If this happens, have a look in the "),r("strong",[e._v("Retry-After")]),e._v(" header, where you will see a number displayed. This is the amount of "),r("strong",[e._v("seconds that you need to wait")]),e._v(", before you can retry sending your requests.")])])}),[],!1,null,null,null);t.default=a.exports}}]);