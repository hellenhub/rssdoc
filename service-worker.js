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
    "revision": "c279a50646fbdf29b26d16628f33d98b"
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
    "revision": "0769c70875259d0517505e8511f41249"
  },
  {
    "url": "api.html",
    "revision": "e4cf17f57386c8653c60ab046c6c8ed0"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "240f63e7e2a2d038d41ec0b1177fd7d7"
  },
  {
    "url": "assets/css/0.styles.08a30f3e.css",
    "revision": "468294fab6527e8ce233d5977e1e972b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.01c1a840.js",
    "revision": "145afccc7946b6098e68577e96eb445a"
  },
  {
    "url": "assets/js/10.cc54c48d.js",
    "revision": "ecaa3975ca2696303428cb518894efc4"
  },
  {
    "url": "assets/js/11.163b9b79.js",
    "revision": "861367faf828d84868e9d09273243a25"
  },
  {
    "url": "assets/js/12.7f49affb.js",
    "revision": "d5bf9c37b0b34ab30bfd34bbb7c00071"
  },
  {
    "url": "assets/js/13.37475059.js",
    "revision": "3c6c5272006963f7363a0235e49d5682"
  },
  {
    "url": "assets/js/14.d674a436.js",
    "revision": "aa627ec989754fa04a85d45cd51587b2"
  },
  {
    "url": "assets/js/15.5eaa5792.js",
    "revision": "f9fe902e5a70e1c38ec1fc1648ba5c0d"
  },
  {
    "url": "assets/js/16.8cd0a356.js",
    "revision": "3674dee00e9d9133b64451ac6708761b"
  },
  {
    "url": "assets/js/17.72e99fa7.js",
    "revision": "0b08f389585faa57f2493a9538266ff2"
  },
  {
    "url": "assets/js/18.aab4cce7.js",
    "revision": "7c9d813e7a8d0d5ef661af77d5ba4f81"
  },
  {
    "url": "assets/js/19.e341b88f.js",
    "revision": "2de674c59935c994f8bc9259b6119104"
  },
  {
    "url": "assets/js/20.c19c564e.js",
    "revision": "16363d2f094784fdcd10e3c0cf142954"
  },
  {
    "url": "assets/js/21.bc277a4a.js",
    "revision": "233db222e064a3a1c62af4f3adf2d2c4"
  },
  {
    "url": "assets/js/22.edd1e5e2.js",
    "revision": "3d6f79c8e9d0f2cd748695a070589e5c"
  },
  {
    "url": "assets/js/23.7c1fe2b6.js",
    "revision": "5e822bed60b9869f3c82d9c33acf78aa"
  },
  {
    "url": "assets/js/24.c9f5e28b.js",
    "revision": "da1c125495982083a7b5c16d65d66511"
  },
  {
    "url": "assets/js/25.84f330ef.js",
    "revision": "3c219631ea6d0e13b777f5438c9735ca"
  },
  {
    "url": "assets/js/26.5a416922.js",
    "revision": "220bb0e9f35a74405c2392665adefd95"
  },
  {
    "url": "assets/js/27.0fd65e69.js",
    "revision": "8c637791873c40d8df57b0d897891276"
  },
  {
    "url": "assets/js/28.a0ed42ac.js",
    "revision": "9bc66cd3bf538d94a22baa7f2ecb49f2"
  },
  {
    "url": "assets/js/29.42deadda.js",
    "revision": "c40e4dfcfade2187e8ef298cb196d78a"
  },
  {
    "url": "assets/js/30.a9041f4d.js",
    "revision": "a19e21f2105d8686b8d6f36815c49cc4"
  },
  {
    "url": "assets/js/31.6870108c.js",
    "revision": "98db91b4e8ffe02e039f35b980c10413"
  },
  {
    "url": "assets/js/32.c2501ae3.js",
    "revision": "0520ab9462d0950ecb979c5d015f929f"
  },
  {
    "url": "assets/js/33.72996b6b.js",
    "revision": "601815ebcdcac2ca7d866a7c56330806"
  },
  {
    "url": "assets/js/34.a4520322.js",
    "revision": "a857ede99dc0e0374c7849ec6c031fc3"
  },
  {
    "url": "assets/js/35.a647505e.js",
    "revision": "ece947aca74ad2ed718626b7b42e432b"
  },
  {
    "url": "assets/js/36.307e6c89.js",
    "revision": "aa04f4f44f53864cccec6bcd76edea66"
  },
  {
    "url": "assets/js/37.6e558225.js",
    "revision": "63a26a0cc7e695ca6086828e7a58a8c8"
  },
  {
    "url": "assets/js/38.89028f18.js",
    "revision": "cc3254f17f0c8440c848641c098ae1c6"
  },
  {
    "url": "assets/js/39.0e6e7eae.js",
    "revision": "0a0c4952be9d7999de0eb6c8e30b8a0d"
  },
  {
    "url": "assets/js/4.7e00e1d6.js",
    "revision": "51398fb30b321d64a827f8e07647dc2f"
  },
  {
    "url": "assets/js/40.7e97b4cb.js",
    "revision": "abf295c49cbd69ccf51f13ec43793574"
  },
  {
    "url": "assets/js/41.f1741c94.js",
    "revision": "8a1309a380b2000121620ff303163388"
  },
  {
    "url": "assets/js/42.e39823d5.js",
    "revision": "4f5e9c3e46c86cc9bba6cdb2a4cdbd76"
  },
  {
    "url": "assets/js/43.3aab0084.js",
    "revision": "8b276db0db9a900b840e2304805d7468"
  },
  {
    "url": "assets/js/44.43dc4fed.js",
    "revision": "d10666779be088169d4a1895279da66d"
  },
  {
    "url": "assets/js/45.aef33e31.js",
    "revision": "060c5ca195c8db4bcada06d568b0c8ac"
  },
  {
    "url": "assets/js/46.f32f45ff.js",
    "revision": "698179a9f9e3f3874cfd682ab71c82e3"
  },
  {
    "url": "assets/js/47.8d8537d1.js",
    "revision": "12befa470884277e815a8f962316a767"
  },
  {
    "url": "assets/js/48.4fd17982.js",
    "revision": "39113c01a5b938274951224955eb6783"
  },
  {
    "url": "assets/js/49.41f252f8.js",
    "revision": "8e62a8ec37348f4dc422f5b9e886fb5e"
  },
  {
    "url": "assets/js/5.e3683046.js",
    "revision": "76ef251af7f99900a4f5218157dfb021"
  },
  {
    "url": "assets/js/50.7454b027.js",
    "revision": "7943e1fc3bed1cd89cccb521433e54b8"
  },
  {
    "url": "assets/js/51.35beff93.js",
    "revision": "b36c33a2b6f13994f71476bdcf91bc74"
  },
  {
    "url": "assets/js/52.814f8e7d.js",
    "revision": "7e5a1005f4c68c00355c3e67137a3f08"
  },
  {
    "url": "assets/js/53.55990165.js",
    "revision": "db8e95d45e62d512f3463dfeee244387"
  },
  {
    "url": "assets/js/54.aaa38339.js",
    "revision": "671854b9c3841c481dcb28204d0b5e30"
  },
  {
    "url": "assets/js/55.03826de0.js",
    "revision": "da8cd77c84e492b98dfecff748843f26"
  },
  {
    "url": "assets/js/56.f18aa3a1.js",
    "revision": "238d5135625d1037cfdeb333b355c176"
  },
  {
    "url": "assets/js/57.62ca241f.js",
    "revision": "44e8e9756ef88484bb15d5aad60605e9"
  },
  {
    "url": "assets/js/58.77bb30c5.js",
    "revision": "53eaf89f54b82c0ff9e3e8109675d24f"
  },
  {
    "url": "assets/js/59.24e2aaad.js",
    "revision": "031f5e06c29c7cbfdee7b08017820201"
  },
  {
    "url": "assets/js/6.e0b96f8a.js",
    "revision": "c2c99fd078a60a5773450ce0d8f4aa29"
  },
  {
    "url": "assets/js/60.4095a610.js",
    "revision": "da673b42785bb30b291ec9083e6c5aad"
  },
  {
    "url": "assets/js/61.c8fe1f0c.js",
    "revision": "658d9df21f223cb329c4461c44750ca9"
  },
  {
    "url": "assets/js/62.b2734212.js",
    "revision": "acf5d5f144a323cfda8192d0ed8d0a78"
  },
  {
    "url": "assets/js/63.66ef73db.js",
    "revision": "9a012a3b1681e695d3c18b11bec8f630"
  },
  {
    "url": "assets/js/64.51888ff0.js",
    "revision": "66c31f647137034fb2db18bbf350e3cb"
  },
  {
    "url": "assets/js/65.b1510af6.js",
    "revision": "98fb86cef879bd8cca27015b90931a41"
  },
  {
    "url": "assets/js/66.edff1723.js",
    "revision": "eda909b4cabd3f2569154aee2614f7f5"
  },
  {
    "url": "assets/js/67.c3029815.js",
    "revision": "f544926a5ec0abc1ffc741798d67c5ab"
  },
  {
    "url": "assets/js/68.f1bbfa0e.js",
    "revision": "d631fa8c4c2f32543dcbf393565a3178"
  },
  {
    "url": "assets/js/69.1c723f20.js",
    "revision": "0fc0c5126332ae03046ae6eb14d3de31"
  },
  {
    "url": "assets/js/7.ea0c3966.js",
    "revision": "182c2ef10328df85a32242a862c2567a"
  },
  {
    "url": "assets/js/70.63cc1a12.js",
    "revision": "333d21db6f4f10ba4afac7be81e3d720"
  },
  {
    "url": "assets/js/71.7c8bc6dd.js",
    "revision": "1bbecb32a34abcef0409461d355b3f84"
  },
  {
    "url": "assets/js/72.9076e206.js",
    "revision": "70f383d909587a0e13c52c2204e2d9e7"
  },
  {
    "url": "assets/js/73.e483ddb3.js",
    "revision": "318f2b6420fde0edf63fab48bb350bd8"
  },
  {
    "url": "assets/js/74.a6cc0b35.js",
    "revision": "a1e8c2e165fb8cfdc38013e29d120bdd"
  },
  {
    "url": "assets/js/8.125bf902.js",
    "revision": "0d0ddd5855d4a56f347c212d11f703d5"
  },
  {
    "url": "assets/js/9.b0a34855.js",
    "revision": "72abd3e3eea2e093d49984fae627fad2"
  },
  {
    "url": "assets/js/app.3478587c.js",
    "revision": "eaed44588d0ba7492f91dfb239c965a5"
  },
  {
    "url": "assets/js/vendors~docsearch.d2abf963.js",
    "revision": "3e04b4482b1ff2b52febe82a9368900f"
  },
  {
    "url": "bbs.html",
    "revision": "1c12737dd887ff225868c8aa47be6be9"
  },
  {
    "url": "blog.html",
    "revision": "c0c2cd9caef28533dad3ed2180299d68"
  },
  {
    "url": "design.html",
    "revision": "b8cea384f7a42730daffc6d6a5ae453e"
  },
  {
    "url": "en/anime.html",
    "revision": "3eeccaafa1cf1e3d5a2169edb9f3c71f"
  },
  {
    "url": "en/api.html",
    "revision": "6db49d8034804d67c56f77dae117ebb3"
  },
  {
    "url": "en/bbs.html",
    "revision": "a50711026f41c0e9a2dd8dbff35da6fe"
  },
  {
    "url": "en/blog.html",
    "revision": "a60076bfa2b74cb3525d91f10588eaa4"
  },
  {
    "url": "en/design.html",
    "revision": "bc8c4a601a2aab82f0660cfbee9e9068"
  },
  {
    "url": "en/faq.html",
    "revision": "c9357bd0b4629dcccdd83a52cbd4866e"
  },
  {
    "url": "en/finance.html",
    "revision": "7eb8e688570b12a880c40e587440eb33"
  },
  {
    "url": "en/forecast.html",
    "revision": "3e6b287e3159fb5a5f1eadcbb3264a7a"
  },
  {
    "url": "en/game.html",
    "revision": "34f99dec5aef39a2d56d30330dc48d34"
  },
  {
    "url": "en/government.html",
    "revision": "605e09d5046266998bc214b9a6b0392c"
  },
  {
    "url": "en/index.html",
    "revision": "ceada2fb85ee041de56d3b22d5447ffd"
  },
  {
    "url": "en/install/index.html",
    "revision": "8922e808f1b1d76a48d75416ce685848"
  },
  {
    "url": "en/joinus/index.html",
    "revision": "e94accb105c4be82c8aa18539adb4509"
  },
  {
    "url": "en/journal.html",
    "revision": "1d97cdae48bc9f4e24f2fd59314c15b3"
  },
  {
    "url": "en/live.html",
    "revision": "b1aa7f59d34fab7805e6b20e2a899628"
  },
  {
    "url": "en/multimedia.html",
    "revision": "f64ca3e6e0a66d1b21b65f8c51a3e4e8"
  },
  {
    "url": "en/new-media.html",
    "revision": "cf67d1e697ae4e36f720fdbac53f4c5b"
  },
  {
    "url": "en/other.html",
    "revision": "9426629c8248a71fb3356e2feeb846ff"
  },
  {
    "url": "en/parameter.html",
    "revision": "6065b5387e2a33f6fbd877eb518db7be"
  },
  {
    "url": "en/picture.html",
    "revision": "e2027d232307a18350bc565f210abc40"
  },
  {
    "url": "en/program-update.html",
    "revision": "4fac49f9a0a109ee0f7bd2d5a70006ff"
  },
  {
    "url": "en/programming.html",
    "revision": "592014c91a19ae7d88db1a1acdbd2738"
  },
  {
    "url": "en/reading.html",
    "revision": "c6026ef7f72813bfc55213921a490855"
  },
  {
    "url": "en/shopping.html",
    "revision": "1a4c7628c44c577b6946769d88c5abf8"
  },
  {
    "url": "en/social-media.html",
    "revision": "6e0fd9932c06bd7d4f5e41ba2b3f6586"
  },
  {
    "url": "en/study.html",
    "revision": "bea277bd6483f8675592714d9cfc25e9"
  },
  {
    "url": "en/support/index.html",
    "revision": "fb702bc5d6adb00e5042c2f57efff0e9"
  },
  {
    "url": "en/traditional-media.html",
    "revision": "3abdf22447c0b90ebd0cec16fe767c48"
  },
  {
    "url": "en/travel.html",
    "revision": "3e706fab41e90103ec1b4bedb72f1231"
  },
  {
    "url": "en/university.html",
    "revision": "232a6c9880d2f4e935c40d5ef7af2f74"
  },
  {
    "url": "en/usage.html",
    "revision": "8a88768f513b4505327f028fe67ace3f"
  },
  {
    "url": "faq.html",
    "revision": "6f45c92dec924966a418a4a4cd9276e4"
  },
  {
    "url": "finance.html",
    "revision": "6a83ebb96712644fa9eb084282b834cb"
  },
  {
    "url": "forecast.html",
    "revision": "c55793111251b560859de6c6ac37d204"
  },
  {
    "url": "game.html",
    "revision": "b9333d5e654bea213692575013b37339"
  },
  {
    "url": "government.html",
    "revision": "3878e6ff0ba90d536c08fc1d4a57531c"
  },
  {
    "url": "index.html",
    "revision": "c4e390f214fb6b1d5372cc015586fb14"
  },
  {
    "url": "install/index.html",
    "revision": "29432dcaff9144e459656098c744ec5c"
  },
  {
    "url": "joinus/index.html",
    "revision": "4125b613ed409269fb1f520d6ac569ce"
  },
  {
    "url": "journal.html",
    "revision": "76f30367d6dd7ea4f30dbdd2532785e8"
  },
  {
    "url": "live.html",
    "revision": "903abf22493c9869842ae14755a9de39"
  },
  {
    "url": "logo.png",
    "revision": "4355db81d7f579db17a594c4404f44f5"
  },
  {
    "url": "multimedia.html",
    "revision": "5f8512ed9a142c1ad70e7970753954cd"
  },
  {
    "url": "new-media.html",
    "revision": "4a96fb818dc4c441a73d013755044212"
  },
  {
    "url": "other.html",
    "revision": "1e2daada7fed224633f17bde5c242b2e"
  },
  {
    "url": "parameter.html",
    "revision": "610b2874a68d6a99a37f39c1ffdabd56"
  },
  {
    "url": "picture.html",
    "revision": "6f138b184b2c50026cfa7f46dca71d89"
  },
  {
    "url": "program-update.html",
    "revision": "a9be0fa325879d9a21fd0232a786a934"
  },
  {
    "url": "programming.html",
    "revision": "b27d2f892adb26caf32f34c6ffe57fec"
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
    "revision": "aef6c09c3907dd18ad9607d59725d667"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "246b9edf98d4f8956115856439a650b4"
  },
  {
    "url": "shopping.html",
    "revision": "daa4270fff3b39b40d9e66eb41290021"
  },
  {
    "url": "social-media.html",
    "revision": "3fc7dfd974b3b3c219dff42c63d650bc"
  },
  {
    "url": "study.html",
    "revision": "7653e1580fba4a422404e56e17d0bbff"
  },
  {
    "url": "support/index.html",
    "revision": "a5db428a6c4b9ec224e79c87d1afffdf"
  },
  {
    "url": "traditional-media.html",
    "revision": "0b2d548f412bca1d8c1cc781c632bd11"
  },
  {
    "url": "travel.html",
    "revision": "54dd93dc57e714455efa124bf1c85c86"
  },
  {
    "url": "university.html",
    "revision": "35e923a71d1a5b1362ef5d1b6ed1d4db"
  },
  {
    "url": "usage.html",
    "revision": "1b6867f4da9cf67602092f212bd23031"
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
