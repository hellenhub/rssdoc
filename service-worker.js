/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0921b1fc024e9569ad499ed793a120d4"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "4c879a53204a2647b88c765e55d8e5fc"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "072243764455713dc94f59c645f7d69d"
  },
  {
    "url": "anime.html",
    "revision": "cbe5a5beb4bc168efec4379cf5612a54"
  },
  {
    "url": "api.html",
    "revision": "8e98d08aba085697a2ed5b62b9018f16"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "240f63e7e2a2d038d41ec0b1177fd7d7"
  },
  {
    "url": "assets/css/0.styles.c8005777.css",
    "revision": "e8e0e4d6230a105b7ce1ee6dec85e253"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.86847e20.js",
    "revision": "c48469b300d77d625d2d270754f7b7e1"
  },
  {
    "url": "assets/js/10.ee9c58ed.js",
    "revision": "0d8af82571d5f79a25db35ed66e5e1eb"
  },
  {
    "url": "assets/js/11.4241fc75.js",
    "revision": "cbaaf856dd7da614700bd799c22f04e7"
  },
  {
    "url": "assets/js/12.5c9830f5.js",
    "revision": "887b73c7440d43c74a87e346ef99059f"
  },
  {
    "url": "assets/js/13.b0c12568.js",
    "revision": "213efc622993be2b3e205f068ec57f27"
  },
  {
    "url": "assets/js/14.cdb73f72.js",
    "revision": "aa2ac6a10f428d2ffded86df8673f5b3"
  },
  {
    "url": "assets/js/15.5f2c15b9.js",
    "revision": "f97998976b5d0eb2878a9a54d5c70bd0"
  },
  {
    "url": "assets/js/16.faa6e1db.js",
    "revision": "b73e0982f1ae93fdd0a7ef4a22af167e"
  },
  {
    "url": "assets/js/17.767342b2.js",
    "revision": "7b40fcdac55ad3ef931a7dd56dfd3891"
  },
  {
    "url": "assets/js/18.63bee526.js",
    "revision": "471ad10d1b6fd8fc2fb9f0997d81629b"
  },
  {
    "url": "assets/js/19.46ab1f7e.js",
    "revision": "f74b19b4b670cef99a13ee99def911de"
  },
  {
    "url": "assets/js/20.3c19b9db.js",
    "revision": "6b40a4df85d68b182a209334917752f8"
  },
  {
    "url": "assets/js/21.5e4925a9.js",
    "revision": "92f85f308037e037276ba5b1a9b4ca43"
  },
  {
    "url": "assets/js/22.297688a8.js",
    "revision": "9f5ae5d422bf38e12bf2798d64ef5dda"
  },
  {
    "url": "assets/js/23.7921955d.js",
    "revision": "942e8d2149247ebcd1e5cc7835459cb6"
  },
  {
    "url": "assets/js/24.9565ac94.js",
    "revision": "8c1b1df9b26995c8ae6b31407f088a5a"
  },
  {
    "url": "assets/js/25.463ccda0.js",
    "revision": "fa8bcdd4c0e264d099ddecc81d539375"
  },
  {
    "url": "assets/js/26.26eabb7a.js",
    "revision": "91f806e1b1eaef5aacb308a5aabcc3b4"
  },
  {
    "url": "assets/js/27.d5817de5.js",
    "revision": "b107dd39eaf8063a262590ea2e7635dd"
  },
  {
    "url": "assets/js/28.4834dd5b.js",
    "revision": "60c7905c8f1a13a1f5413e301c58bf69"
  },
  {
    "url": "assets/js/29.d50e7aeb.js",
    "revision": "f59116be755864876da21d40b9d80839"
  },
  {
    "url": "assets/js/30.56e48fc0.js",
    "revision": "c2f7e76e7e2436fa262e5bda8f8d56d5"
  },
  {
    "url": "assets/js/31.22435a3d.js",
    "revision": "3f1b7e51ef0412b77de1d1b68b9892a4"
  },
  {
    "url": "assets/js/32.eb290a12.js",
    "revision": "326e0c011224b325e069eee955dabb90"
  },
  {
    "url": "assets/js/33.cfe9faee.js",
    "revision": "37c92552974cfb3e78b3cb33fd57e595"
  },
  {
    "url": "assets/js/34.b9ec06b3.js",
    "revision": "fb83c04d22bb4d31b542c8f69c252f41"
  },
  {
    "url": "assets/js/35.c5c9bca7.js",
    "revision": "7e2b719d52f3dfc5f3d3411286899507"
  },
  {
    "url": "assets/js/36.488e5d55.js",
    "revision": "3f8e875eb4d26132c0c1d1e48bcf6930"
  },
  {
    "url": "assets/js/37.6900ac04.js",
    "revision": "f520fde1e017e61507fd146a86b55538"
  },
  {
    "url": "assets/js/38.44ffa7fa.js",
    "revision": "39a9d1b87a0de64b5561a98b705702e0"
  },
  {
    "url": "assets/js/39.b1116946.js",
    "revision": "a16495fdaf6858fc8e14e492e839f16c"
  },
  {
    "url": "assets/js/4.638f9464.js",
    "revision": "beea6746f5e76f37bfe2f438a5fa1a53"
  },
  {
    "url": "assets/js/40.5d5e4394.js",
    "revision": "8c1cac70469481c352e5bf55fa6cef43"
  },
  {
    "url": "assets/js/41.0e9a1f2b.js",
    "revision": "1448ed700d43fa723fe7e584816f3898"
  },
  {
    "url": "assets/js/42.beed1020.js",
    "revision": "1987835841ae8e966a66dd1158b6db8b"
  },
  {
    "url": "assets/js/43.7d72d257.js",
    "revision": "5db83e18eeafb23ae480e682df70558f"
  },
  {
    "url": "assets/js/44.23aa95ff.js",
    "revision": "fa3fa563b5874ba3a234b329fe5f761c"
  },
  {
    "url": "assets/js/45.0994b79c.js",
    "revision": "c972bf190396913868dfca2d405f2142"
  },
  {
    "url": "assets/js/46.4a13650f.js",
    "revision": "5a6583418e29a7daa3367999209a6a7a"
  },
  {
    "url": "assets/js/47.00ca2e62.js",
    "revision": "49cf4c1b9af3ac8bc88673d2ec88879e"
  },
  {
    "url": "assets/js/48.dcf5b4d0.js",
    "revision": "76ebd5203f883715cb59cc697bdac194"
  },
  {
    "url": "assets/js/49.4b22e8a1.js",
    "revision": "c6ef00b988ad156c57ed043ab2608561"
  },
  {
    "url": "assets/js/5.3e167207.js",
    "revision": "59fad5c53f8d432c0262eea80bc06eaf"
  },
  {
    "url": "assets/js/50.fe2bb340.js",
    "revision": "e484aebe05356c33141d06e9efff8857"
  },
  {
    "url": "assets/js/51.d40185a0.js",
    "revision": "a69b786b20479550dcbe112ff5518ea5"
  },
  {
    "url": "assets/js/52.8185f870.js",
    "revision": "74eb1bb0c5b59407d16efd12b9d083ae"
  },
  {
    "url": "assets/js/53.3764f348.js",
    "revision": "adad5840c0c90a58b89f53e1ebad93c5"
  },
  {
    "url": "assets/js/54.e6e1cd70.js",
    "revision": "fd53fd96575165b9388aee97aec4b2ca"
  },
  {
    "url": "assets/js/55.1b745010.js",
    "revision": "5ae247c3b597113dfa2c25e0d3d4c9f8"
  },
  {
    "url": "assets/js/56.a87cbdb8.js",
    "revision": "8450377e5d9604164bc489768bf20a63"
  },
  {
    "url": "assets/js/57.94d48ef9.js",
    "revision": "3b1caa38ebeb566dd4fb74eaa648c1a6"
  },
  {
    "url": "assets/js/58.9bb1e96a.js",
    "revision": "940f29b46387bb89bab8bdd267508c45"
  },
  {
    "url": "assets/js/59.601474e5.js",
    "revision": "7ade7a53d871c889b5fd18f0ee714893"
  },
  {
    "url": "assets/js/6.94757573.js",
    "revision": "e9e640263d4f1f25770c57c3e65a39d3"
  },
  {
    "url": "assets/js/60.a8f2f390.js",
    "revision": "18c7d66d4032cb2d687274c116ee336d"
  },
  {
    "url": "assets/js/61.cb06c39e.js",
    "revision": "53bdfb4f6f00d04e89e3508157a521d4"
  },
  {
    "url": "assets/js/62.11dcff77.js",
    "revision": "72fb82a28c6cd614628a5f9a3966d851"
  },
  {
    "url": "assets/js/63.48999aca.js",
    "revision": "1afd5f8f1466a6c992ea83b8840d5c78"
  },
  {
    "url": "assets/js/64.de1b5efe.js",
    "revision": "f8f0b893fc67fff35b5663d4d89b19f9"
  },
  {
    "url": "assets/js/65.a085d1b2.js",
    "revision": "c0241d8ac8c99c5ca5a51bbbd4ff257a"
  },
  {
    "url": "assets/js/66.432f57c9.js",
    "revision": "70b0ac84016d38a271792a8559382500"
  },
  {
    "url": "assets/js/67.e6387c22.js",
    "revision": "8b2544f23b2ad51f526b094d887e1de5"
  },
  {
    "url": "assets/js/68.af8fad65.js",
    "revision": "6b52a7149937db07330ccd7b5bba6ca5"
  },
  {
    "url": "assets/js/69.0745282c.js",
    "revision": "47c8f9442fecde71b19dfb4e3350693d"
  },
  {
    "url": "assets/js/7.8279a792.js",
    "revision": "d88e39c45a553301415c2c92cdbdf340"
  },
  {
    "url": "assets/js/70.0c8ef4f1.js",
    "revision": "50064450cc971695672b3e7dee1c888f"
  },
  {
    "url": "assets/js/71.bc6f7426.js",
    "revision": "bd6fcfe24e6df0a80de17dbbd996990a"
  },
  {
    "url": "assets/js/72.aff58357.js",
    "revision": "28d567a1e2627b2ac2a935aab71d156a"
  },
  {
    "url": "assets/js/73.5b13f8f6.js",
    "revision": "8fefbf2046ecaddd5e282401569b88f3"
  },
  {
    "url": "assets/js/74.e4ff148c.js",
    "revision": "ab9edb3ac9e1485b8e6a3742db459980"
  },
  {
    "url": "assets/js/8.e651c63f.js",
    "revision": "6db20b4e9524352eac68b48f8e9caa53"
  },
  {
    "url": "assets/js/9.7383d7ab.js",
    "revision": "3de79fe8768f311212ce1c9cf7bdadd8"
  },
  {
    "url": "assets/js/app.85a5796e.js",
    "revision": "48320d18fbd400dd4b43ba80d2883d2c"
  },
  {
    "url": "assets/js/vendors~docsearch.66604c02.js",
    "revision": "d5a7ee5bce604924bf33805346d00fca"
  },
  {
    "url": "bbs.html",
    "revision": "d01a345a3bd2772ac33c57710b82b901"
  },
  {
    "url": "blog.html",
    "revision": "bb394508d5c7737fc78fb9e07eab2322"
  },
  {
    "url": "design.html",
    "revision": "92fcd61d330a4609c8c23af9de053c5c"
  },
  {
    "url": "en/anime.html",
    "revision": "aea43442fe82cfbd7c5da359fb209941"
  },
  {
    "url": "en/api.html",
    "revision": "df832f836051a83fa9e674d25b07d3b0"
  },
  {
    "url": "en/bbs.html",
    "revision": "c4b9e8aeb42b5770e8779fc37db67aa7"
  },
  {
    "url": "en/blog.html",
    "revision": "8d4427343ee4bf4c3c3fb44d8bdf7da4"
  },
  {
    "url": "en/design.html",
    "revision": "e7c417bfa99f8cb5f2e0f3eeebccabf0"
  },
  {
    "url": "en/faq.html",
    "revision": "606be024fc84bf69e12826322581085e"
  },
  {
    "url": "en/finance.html",
    "revision": "2b7abbcb237d483be3b9a35a9e563d2b"
  },
  {
    "url": "en/forecast.html",
    "revision": "e1b7ba7ed15728375e87fd7689685959"
  },
  {
    "url": "en/game.html",
    "revision": "791fc2f94f6de462c7e42e52daafa70e"
  },
  {
    "url": "en/government.html",
    "revision": "4ac6cd9a13cb99ec433834f218ee9c2a"
  },
  {
    "url": "en/index.html",
    "revision": "c0f12abbeaad3196c1a70baea7012e64"
  },
  {
    "url": "en/install/index.html",
    "revision": "95f3b817b17343804e70359d5c3b6a70"
  },
  {
    "url": "en/joinus/index.html",
    "revision": "43a66e9c0f0f13bcee309d09aa953b0d"
  },
  {
    "url": "en/journal.html",
    "revision": "f099d4fb07af3aca47d0bc9734144eed"
  },
  {
    "url": "en/live.html",
    "revision": "276441661f75b3bc5822303d70e17712"
  },
  {
    "url": "en/multimedia.html",
    "revision": "3d047ddf445c14eeb1f742908f1b334d"
  },
  {
    "url": "en/new-media.html",
    "revision": "531f3a7367115e61fb1df18e26239f6f"
  },
  {
    "url": "en/other.html",
    "revision": "f15226faa8c0edda1fa4e0b791810566"
  },
  {
    "url": "en/parameter.html",
    "revision": "8444e5fdd4caa53e27bcfdc73eeee96b"
  },
  {
    "url": "en/picture.html",
    "revision": "e2e0303189b7bac5c973a2ad4ee273b7"
  },
  {
    "url": "en/program-update.html",
    "revision": "30ae81e1d098e2732e8917a9ab2d7500"
  },
  {
    "url": "en/programming.html",
    "revision": "fbcadbb23e1700df13dbd56fcecc7ade"
  },
  {
    "url": "en/reading.html",
    "revision": "e6f5fe8c2bedd202d8fe704ba971b369"
  },
  {
    "url": "en/shopping.html",
    "revision": "e87a85fb2d57087890281e848f362c08"
  },
  {
    "url": "en/social-media.html",
    "revision": "c34ffee1f81d2a4d0805c4cf973b1ee5"
  },
  {
    "url": "en/study.html",
    "revision": "f7d8618f2de00f9eb0a1bdef7a2cacbb"
  },
  {
    "url": "en/support/index.html",
    "revision": "4694128d2d827e89d6a617301c0c97d1"
  },
  {
    "url": "en/traditional-media.html",
    "revision": "114a00c9b380b57bbabba88a98a94805"
  },
  {
    "url": "en/travel.html",
    "revision": "a859ee5c6f0d1ad4c3ff45a857419d1f"
  },
  {
    "url": "en/university.html",
    "revision": "fa262a4635be2e61b4e56712e02b8447"
  },
  {
    "url": "en/usage.html",
    "revision": "9144a296c3889a2ee9868e62f3433712"
  },
  {
    "url": "faq.html",
    "revision": "353c0f7f4ec0f4dfbabff686a445110c"
  },
  {
    "url": "finance.html",
    "revision": "b478265d90bc5925d089f56c3a68349e"
  },
  {
    "url": "forecast.html",
    "revision": "6852c7d68b6d3a5061550e36db77046f"
  },
  {
    "url": "game.html",
    "revision": "2d14bc1e1e0c0580f9a6ee594a5cb7cc"
  },
  {
    "url": "government.html",
    "revision": "26509f88d2a380b12ef9d057c4aaf46f"
  },
  {
    "url": "index.html",
    "revision": "2e01f73238fc60641cb00d0c1765f74d"
  },
  {
    "url": "install/index.html",
    "revision": "d9d4930a6d5c55c7793cdcf8c322cf27"
  },
  {
    "url": "joinus/index.html",
    "revision": "ee324f7f1c6618e8ac5c17c4886fcfe3"
  },
  {
    "url": "journal.html",
    "revision": "a48aca5fec3408d3d931531f01a948d3"
  },
  {
    "url": "live.html",
    "revision": "caad8b1d819065d41a526dca2dbd6f4a"
  },
  {
    "url": "logo.png",
    "revision": "4355db81d7f579db17a594c4404f44f5"
  },
  {
    "url": "multimedia.html",
    "revision": "b2215b2d0837e64aa4d2068f91ac0ec7"
  },
  {
    "url": "new-media.html",
    "revision": "d53698cb8a04bf42b304ab9ec6341db6"
  },
  {
    "url": "other.html",
    "revision": "2d5cbd72ec768c1d316fba5b7de1ebd5"
  },
  {
    "url": "parameter.html",
    "revision": "e599c1f0fc178e8ffc18be794656b843"
  },
  {
    "url": "picture.html",
    "revision": "86c2468a141c05ca3c6250b0f8991960"
  },
  {
    "url": "program-update.html",
    "revision": "189b9c734da5c4a69f215b6acb62bdd3"
  },
  {
    "url": "programming.html",
    "revision": "4e3adc0430a82ca19ed656844d1cc6dd"
  },
  {
    "url": "readable-douban.png",
    "revision": "1c004bfaefadde96db8d50e82f24340d"
  },
  {
    "url": "readable-twitter.png",
    "revision": "942d7de2ed598bb6b00f29a85efb0c67"
  },
  {
    "url": "readable-weibo.png",
    "revision": "fa8e24e7303830815c6385c3f17fd5d2"
  },
  {
    "url": "reading.html",
    "revision": "03cc14b88581b979e247eebc1f01c844"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "shopping.html",
    "revision": "f3ea8cc26ed29f393468aee33f7d956e"
  },
  {
    "url": "social-media.html",
    "revision": "7037454a22e8eb1cb5eff995c86f1a8b"
  },
  {
    "url": "study.html",
    "revision": "7d91159530a71f194552f43e2a498b98"
  },
  {
    "url": "support/index.html",
    "revision": "0702a822dee22023943080e94fb97200"
  },
  {
    "url": "traditional-media.html",
    "revision": "4fcbe034aab264864d53182f56777feb"
  },
  {
    "url": "travel.html",
    "revision": "b1c996f5e53e5ec20c7c4d68174b5c6c"
  },
  {
    "url": "university.html",
    "revision": "5a87774937a8a8a519bfc4fe2b93894e"
  },
  {
    "url": "usage.html",
    "revision": "0b503c0eb111660e7ea2a8dcb3c2e17f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
