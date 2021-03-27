(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{582:function(t,e,r){"use strict";r.r(e);var i=r(31),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",[t._v("通用参数")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),r("p",[t._v("所有通用参数可以使用 "),r("code",[t._v("&")]),t._v(" 连接组合使用，效果叠加")])]),t._v(" "),r("h2",{attrs:{id:"nei-rong-guo-lv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nei-rong-guo-lv"}},[t._v("#")]),t._v(" 内容过滤")]),t._v(" "),r("p",[t._v("可以使用以下 URL query 过滤内容，支持正则")]),t._v(" "),r("p",[t._v("filter 选出想要的内容")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("filter: 过滤标题和描述")])]),t._v(" "),r("li",[r("p",[t._v("filter_title: 过滤标题")])]),t._v(" "),r("li",[r("p",[t._v("filter_description: 过滤描述")])]),t._v(" "),r("li",[r("p",[t._v("filter_author: 过滤作者")])]),t._v(" "),r("li",[r("p",[t._v("filter_time: 过滤时间，仅支持数字，单位为秒。返回指定时间范围内的内容。如果条目没有输出"),r("code",[t._v("pubDate")]),t._v("或者格式不正确将不会被过滤")])])]),t._v(" "),r("p",[t._v("举例 1: "),r("code",[t._v("https://rsshub.app/bilibili/fav/2267573/801952073?filter=编曲|摄影")]),r("br"),t._v("\n举例 2: "),r("a",{attrs:{href:"https://rsshub.app/nga/forum/489?filter_time=600",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/nga/forum/489?filter_time=600"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("filterout 去掉不要的内容")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("filterout: 过滤标题和描述")])]),t._v(" "),r("li",[r("p",[t._v("filterout_title: 过滤标题")])]),t._v(" "),r("li",[r("p",[t._v("filterout_description: 过滤描述")])]),t._v(" "),r("li",[r("p",[t._v("filterout_author: 过滤作者")])])]),t._v(" "),r("p",[t._v("举例: "),r("code",[t._v("https://rsshub.app/bilibili/fav/2267573/801952073?filterout=编曲|摄影")])]),t._v(" "),r("p",[r("code",[t._v("filter_case_sensitive")]),t._v(" 过滤是否区分大小写，"),r("code",[t._v("filter")]),t._v(" 和 "),r("code",[t._v("filterout")]),t._v("同时适用")]),t._v(" "),r("p",[t._v("默认为 true，区分大小写")]),t._v(" "),r("p",[t._v("举例 1: "),r("a",{attrs:{href:"https://rsshub.app/bilibili/user/coin/2267573?filter=diyGOD%7CRSShub&filter_case_sensitive=false",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/coin/2267573?filter=diyGOD|RSShub&filter_case_sensitive=false"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"tiao-shu-xian-zhi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tiao-shu-xian-zhi"}},[t._v("#")]),t._v(" 条数限制")]),t._v(" "),r("p",[t._v("可以使用 "),r("code",[t._v("limit")]),t._v(" 参数限制最大条数，主要用于排行榜类 RSS")]),t._v(" "),r("p",[t._v("举例: bilibili 排行榜前 10 "),r("a",{attrs:{href:"https://rsshub.app/bilibili/ranking/0/3?limit=10",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/ranking/0/3?limit=10"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"quan-wen-shu-chu"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#quan-wen-shu-chu"}},[t._v("#")]),t._v(" 全文输出")]),t._v(" "),r("p",[t._v("可以使用 "),r("code",[t._v("mode")]),t._v(" 参数来开启自动提取全文内容功能")]),t._v(" "),r("p",[t._v("举例: bilibili 专栏全文输出 "),r("a",{attrs:{href:"https://rsshub.app/bilibili/user/article/334958638?mode=fulltext",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/bilibili/user/article/334958638?mode=fulltext"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"fang-wen-kong-zhi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fang-wen-kong-zhi"}},[t._v("#")]),t._v(" 访问控制")]),t._v(" "),r("p",[t._v("可以使用 "),r("code",[t._v("code")]),t._v(" 或 "),r("code",[t._v("key")]),t._v(" 进行访问控制。参考"),r("RouterLink",{attrs:{to:"/install/#pei-zhi-fang-wen-kong-zhi-pei-zhi-fang-wen-mi-yue-ma"}},[t._v("访问控制配置")]),t._v("。")],1),t._v(" "),r("h2",{attrs:{id:"shu-chu-telegram-ji-shi-yu-lan-lian-jie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shu-chu-telegram-ji-shi-yu-lan-lian-jie"}},[t._v("#")]),t._v(" 输出 Telegram 即时预览链接")]),t._v(" "),r("p",[t._v("可以输出 Telegram 可识别的即时预览链接，主要用于文章类 RSS")]),t._v(" "),r("p",[t._v("Telegram 即时预览模式需要在官网制作页面处理模板，请前往"),r("a",{attrs:{href:"https://instantview.telegram.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),r("OutboundLink")],1),t._v("了解更多")]),t._v(" "),r("ul",[r("li",[t._v("tgiv: 模板 hash，可从模板制作页面分享出来的链接末尾获取（"),r("code",[t._v("&rhash=")]),t._v("后面跟着的字符串）")])]),t._v(" "),r("p",[t._v("举例: "),r("a",{attrs:{href:"https://rsshub.app/novel/biquge/94_94525?tgiv=bd3c42818a7f7e",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/novel/biquge/94_94525?tgiv=bd3c42818a7f7e"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"shu-chu-sci-hub-lian-jie"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shu-chu-sci-hub-lian-jie"}},[t._v("#")]),t._v(" 输出 Sci-hub 链接")]),t._v(" "),r("p",[t._v("可以输出 Sci-hub 链接，用于知名期刊或输出 DOI 的科学期刊类 RSS。")]),t._v(" "),r("ul",[r("li",[t._v("scihub: 任意值开启")])]),t._v(" "),r("p",[t._v("举例: "),r("a",{attrs:{href:"https://rsshub.app/pnas/latest?scihub=1",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/pnas/latest?scihub=1"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"zhong-wen-jian-fan-ti-zhuan-huan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zhong-wen-jian-fan-ti-zhuan-huan"}},[t._v("#")]),t._v(" 中文简繁体转换")]),t._v(" "),r("ul",[r("li",[t._v("opencc: s2t 简体转繁体、t2s 繁体转简体，其它可选值见 "),r("a",{attrs:{href:"https://github.com/fengkx/simplecc-wasm#%E9%85%8D%E7%BD%AE-configurations",target:"_blank",rel:"noopener noreferrer"}},[t._v("simple-wasm - Configurations"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("举例: "),r("a",{attrs:{href:"https://rsshub.app/dcard/posts/popular?opencc=t2s",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/dcard/posts/popular?opencc=t2s"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"shu-chu-ge-shi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#shu-chu-ge-shi"}},[t._v("#")]),t._v(" 输出格式")]),t._v(" "),r("p",[t._v("RSSHub 同时支持 RSS 2.0 和 Atom 输出格式，在路由末尾添加 "),r("code",[t._v(".rss")]),t._v(" 或 "),r("code",[t._v(".atom")]),t._v(" 即可请求对应输出格式，缺省为 RSS 2.0")]),t._v(" "),r("p",[t._v("举例:")]),t._v(" "),r("ul",[r("li",[t._v("缺省 RSS 2.0 - "),r("a",{attrs:{href:"https://rsshub.app/jianshu/home",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/home"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("RSS 2.0 - "),r("a",{attrs:{href:"https://rsshub.app/jianshu/home.rss",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/home.rss"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("Atom - "),r("a",{attrs:{href:"https://rsshub.app/jianshu/home.atom",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://rsshub.app/jianshu/home.atom"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("和 filter 或其他 URL query 一起使用 "),r("code",[t._v("https://rsshub.app/bilibili/user/coin/2267573.atom?filter=微小微|赤九玖|暴走大事件")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);