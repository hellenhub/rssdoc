(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{535:function(t,s,n){"use strict";n.r(s);var a=n(31),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",[t._v("API 接口")]),t._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),n("p",[t._v("API 仍处于开发状态中，\b 并可能会有改动。欢迎提供建议！")])]),t._v(" "),n("p",[t._v("RSSHub 提供下列 API 接口:")]),t._v(" "),n("h3",{attrs:{id:"ke-yong-gong-gong-lu-you-lie-biao"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ke-yong-gong-gong-lu-you-lie-biao"}},[t._v("#")]),t._v(" 可用公共路由列表")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[n("code",[t._v("protected_router.js")]),t._v("下的路由"),n("strong",[t._v("不会被")]),t._v("包含在此 API 返回的结果当中.")])]),t._v(" "),n("p",[t._v("举例: "),n("a",{attrs:{href:"https://rsshub.app/api/routes/bilibili",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/api/routes/bilibili"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("路由: "),n("code",[t._v("/api/routes/:name?")])]),t._v(" "),n("p",[t._v("参数:")]),t._v(" "),n("ul",[n("li",[t._v("name, 路由一级名称，对应 "),n("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/tree/master/lib/routes",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/DIYgod/RSSHub/tree/master/lib/routes"),n("OutboundLink")],1),t._v(" 中的文件夹名称。可选，"),n("strong",[t._v("缺省则返回所有可用路由")]),t._v(".")])]),t._v(" "),n("p",[t._v("成功请求将会返回 HTTP 状态码 "),n("code",[t._v("200 OK")]),t._v(" 与 JSON 结果，格式如下:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bilibili"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"routes"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/video/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/article/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/fav/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/coin/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/dynamic/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/followers/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/followings/:uid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/user/channel/:uid/:cid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/partion/:tid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/partion/ranking/:tid/:days?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/bangumi/:seasonid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/video/page/:aid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/video/reply/:aid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/link/news/:product"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/live/room/:roomID"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/live/search/:key/:order"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/live/area/:areaID/:order"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/fav/:uid/:fid"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/blackboard"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/mall/new"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/mall/ip/:id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/ranking/:rid?/:day?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/bilibili/topic/:topic"')]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"request returned 22 routes"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("若无符合请求路由，请求将会返回 HTTP 状态码 "),n("code",[t._v("204 No Content")]),t._v(".")])])},[],!1,null,null,null);s.default=r.exports}}]);