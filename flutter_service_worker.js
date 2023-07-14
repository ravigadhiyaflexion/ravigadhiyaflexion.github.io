'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a17fac7a1ba7b5879f73019d57fab115",
"index.html": "ab884c79f91397c5db24a3bf072c4ea8",
"/": "ab884c79f91397c5db24a3bf072c4ea8",
"main.dart.js": "688950ae8ffaf715e5b697e04cbcfafb",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c1a0e1e5ff9cdf3af3bc8afc991fd2b2",
"assets/AssetManifest.json": "5e674ee655a512df5c343d43661ef03d",
"assets/NOTICES": "0a68d1ab6a3bb2148a5a5d3b353beed2",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "47549e407335238744eb3c91c0f69215",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5705e37354dcb6ff4950c6dbed9444aa",
"assets/fonts/MaterialIcons-Regular.otf": "001c88cc4a31d1316b8dc3e730619cc8",
"assets/assets/images/svg/dashboard.svg": "d5cf4c47bc6cb082adacbf0ecf557f22",
"assets/assets/images/svg/status.svg": "66c74fdb1ed5a36ba9368e679eba61fc",
"assets/assets/images/png/code.png": "cdd8a92d006717e902e4755cff5d217b",
"assets/assets/images/png/dashboard.png": "42b3eeceb4051e27c63cc7ec6bba73d3",
"assets/assets/images/png/layers.png": "fbb1304a2ac94ab50b1a6aec8db20258",
"assets/assets/images/png/dark.png": "c873a60a4037fea539b0389435d3868a",
"assets/assets/images/png/clipboard.png": "5bc1672eb3f1bf7f8266e294e1988f4f",
"assets/assets/images/png/plane.png": "93d09e9496d1bb7c57ac204b15988d3d",
"assets/assets/images/png/shopping-bag.png": "a51fd91d4dd69040c73181712d227c70",
"assets/assets/images/png/tab.png": "be19ffc5b7c265b3309c3ee2b2909a43",
"assets/assets/images/png/umbrella.png": "3d38b4de2129d9dd7d3a2ca85eab3aff",
"assets/assets/images/png/hourglass.png": "1624fa5a85a5d978433ac355b59404ca",
"assets/assets/images/png/house.png": "13f19f59aec97df87dda1ba582685ce7",
"assets/assets/images/png/secured.png": "95525dd98e543164052020dfd4ff66b7",
"assets/assets/images/png/weather.png": "aeab357bc1e51eee3c8ed57a3e04cb84",
"assets/assets/images/png/light.png": "8f03162d00cd715eb2bc444971de2ff7",
"assets/assets/images/png/moon.png": "c5e6fc4ca982b7fda46b6a9a79048331",
"assets/assets/images/png/greengift.png": "3890e3577e38179b90a174a261bd819d",
"assets/assets/images/png/tablet.png": "771d94315dfd69534967ffc6642f43eb",
"assets/assets/images/png/rocket.png": "5c63050a075284e317f516eb53efe16d",
"assets/assets/images/png/foam-hand.png": "bc78f8572c5d4f855b951e5ac29c03e6",
"assets/assets/images/png/circular.png": "e34b2738f7ab1213343fe4655f6838f7",
"assets/assets/images/png/remove.png": "560b00c44135af557d597a02e68f34d7",
"assets/assets/images/png/car.png": "7df2ede77629687e6ff40825bf5c1c8b",
"assets/assets/images/png/star.png": "e0379d2c9d9e7b4e7729c173c6c7de8a",
"assets/assets/images/png/settings-gear-icon.png": "fea44c532055375c508ad2c168574e25",
"assets/assets/images/png/cycle.png": "cbf246b5250d2a327a19ff2494825dd8",
"assets/assets/images/png/phone-call.png": "b65f4d41868656a034df6d641a8753d1",
"assets/assets/images/png/play.png": "dc7693214a23ff94c6fd03d924da6792",
"assets/assets/images/png/favorite.png": "2f077749f7a34fa4ee7f5309bd7e00e2",
"assets/assets/images/png/padlock.png": "4cf9facea05af6895ffd3024282f0458",
"assets/assets/images/jpg/darkbackground.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/images/font_awesome/code-solid.svg": "679907770a775c8cee75b2d39c800dbc",
"assets/assets/images/font_awesome/chevron-down-solid.svg": "80c4baee60d7601effc6f90e85fea249",
"assets/assets/images/font_awesome/right-to-bracket-solid.svg": "2591d5d2003c1d29479ef125a0f3b095",
"assets/assets/images/font_awesome/cloud-solid.svg": "406e241352e46c0c799210f347e086e8",
"assets/assets/images/font_awesome/chevron-left-solid.svg": "7076bc47cb9315ac08104478655a2f37",
"assets/assets/images/font_awesome/chevron-right-solid.svg": "44f387e20bfd75b60fb7137e4e6e86e0",
"assets/assets/images/font_awesome/arrow-left-long-solid.svg": "4ac37a5fa0d7ce3ff9054bd7125e7600",
"assets/assets/images/font_awesome/hourglass-end-solid.svg": "72318366e2cdc8d9a796996dec96a8f4",
"assets/assets/images/font_awesome/unlock-solid.svg": "15867689594fbda87b35fdf772e6c2aa",
"assets/assets/images/font_awesome/chevron-up-solid.svg": "ca75445800c36b52ef3521579e20bf32",
"assets/assets/images/font_awesome/gift-solid.svg": "2d8700bde1a759caf924c9034440433c",
"assets/assets/images/font_awesome/volume-low-solid.svg": "a63f1b023b94d92316027dcc91e853b6",
"assets/assets/images/font_awesome/award-solid.svg": "746755382473a75de2242f15f284bd9e",
"assets/assets/images/font_awesome/arrow-right-long-solid.svg": "ce1be78a9aa37553bb6e219ab05bed20",
"assets/assets/images/icons/config.svg": "6ec47eb0eff2d5ac17f94e8806c55ffb",
"assets/assets/images/icons/note2.svg": "90ddb4aac7d6b45c4cde45f7771a247e",
"assets/assets/images/icons/map-2.svg": "a90f9548939b186636c2e94658d344da",
"assets/assets/images/icons/like2.svg": "99214717d895b2e93bec66d6fec10ff2",
"assets/assets/images/icons/like.svg": "588cec818c9aee939681de32bd4cf2fe",
"assets/assets/images/icons/display1.svg": "7308a0d9ae2e30dcda6a9ff2733908ec",
"assets/assets/images/icons/mail-open-file.svg": "b7e9184693b16080cb55d5fd1bf6eb84",
"assets/assets/images/icons/airplay.svg": "769309673bde2e6cec5196dca67219b9",
"assets/assets/images/icons/repeat.svg": "efd1d6caa2cbb79351e9e6ef5551301b",
"assets/assets/images/icons/hourglass.svg": "5f733680a2cfd3c7bf4fe5ba07c7f211",
"assets/assets/images/icons/display2.svg": "4c10817ee3b4043ae47bcbbfaa5eb6d9",
"assets/assets/images/icons/right-arrow.svg": "2247f26f9e052a9733cc552a8d199d05",
"assets/assets/images/icons/gym.svg": "332e21dc8353eb725b9b9b5df5e35510",
"assets/assets/images/icons/home.svg": "9919fdf5de9459658e4092f46fd887de",
"assets/assets/images/icons/music.svg": "fc6de83605c09ceca430e27c0893e04f",
"assets/assets/images/icons/crop.svg": "2ee4dad1d8f841003fa54795de734750",
"assets/assets/images/icons/plugin.svg": "956dad3d349027c2acba5b154205a57c",
"assets/assets/images/icons/map.svg": "4097a36e769466fc2b490b327cbe502c",
"assets/assets/images/icons/power.svg": "8b81c5a7534348419cddbba86fa30b7f",
"assets/assets/images/icons/paint.svg": "eecacf7108568f546e4197c7ac93bbc4",
"assets/assets/images/icons/angle-down.svg": "3d0c439be937aa91c0a88be745805531",
"assets/assets/images/icons/helm.svg": "b3c9daba6add00b059dcdc94b0c2f486",
"assets/assets/images/icons/file.svg": "2b884021163f6c82a9b885b83e1ce828",
"assets/assets/images/icons/male.svg": "e22602d7eef12c49a170d104cbb71dfc",
"assets/assets/images/icons/gleam.svg": "c22f67f3a55609376175826a79436fe4",
"assets/assets/images/icons/drawer.svg": "23d99c17c59ecee63cc625f42aba2854",
"assets/assets/images/icons/box2.svg": "5e32cffcf853986d52cf16a3cddeb2d9",
"assets/assets/images/icons/angle-up.svg": "a483e6c40bd763304bf803ca90f5e3a3",
"assets/assets/images/icons/map-marker.svg": "53a0d859ec80dc16ad2d30a43e8aee81",
"assets/assets/images/icons/lock.svg": "660e3f6ac1e92d2a2672c39e5e96ee3b",
"assets/assets/images/icons/cloud-upload.svg": "3b370bad6544cfd2b27d0af5bcd10342",
"assets/assets/images/icons/pen.svg": "bc0d45923c9fc9293f2dc1a4caca291a",
"assets/assets/images/icons/plane.svg": "61084e4858dd6a34bc636339793bb6a0",
"assets/assets/images/icons/link.svg": "a8fe84eb921f6dfdba70aa17749c1f8a",
"assets/assets/images/icons/key.svg": "43261c21594f90671583d1f756a5d899",
"assets/assets/images/icons/attention.svg": "6f68cfc9aab775b8158c425b69888bde",
"assets/assets/images/icons/box1.svg": "15a0cdf320abfcae508f0a37d13e6586",
"assets/assets/images/icons/look.svg": "1c9f47016fc48111a62cb3faefec4095",
"assets/assets/images/icons/cart.svg": "65c313c8709e911e2eb880283a0594e4",
"assets/assets/images/icons/close-circle.svg": "00f320224d82a262f04135df8f6fbe62",
"assets/assets/images/icons/magnet.svg": "17ef3dcc9cbd04861dacb2e5ac9d491c",
"assets/assets/images/icons/mail.svg": "0f7396b8a11e7071fbc845e4aa66de40",
"assets/assets/images/icons/download.svg": "630ff1b101b40d51c52dc0200aa287b4",
"assets/assets/images/icons/note.svg": "1fb53a7a9543fdbf9cc56429a4dcdac9",
"assets/assets/images/icons/pin.svg": "2438ae52cdfe3b7a54cc027ab027481c",
"assets/assets/images/icons/magic-wand.svg": "66774ccfdb9e92a6b75af037cd00a1a1",
"assets/assets/images/icons/musiclist.svg": "6ac87b4ea348967d0f0acdb35a422407",
"assets/assets/images/icons/ball.svg": "470c9b6c5ebdfa9832b3e2664dad641d",
"assets/assets/images/icons/joy.svg": "49f5c329f3f77a637b5a6ff63496ac78",
"assets/assets/images/icons/copy-file.svg": "bd3b049de2d4a366c06926364d4cd6f3",
"assets/assets/images/icons/radio.svg": "4b5381a1ab098cc90ba77206922b0076",
"assets/assets/images/icons/junk.svg": "0ee155cfe589609f135b3abecdd450b0",
"assets/assets/images/icons/photo-gallery.svg": "ddea141399263eea6f49cf32800e3430",
"assets/assets/images/icons/angle-left-circle.svg": "37a692e892c0b6c9317f64a7a97d05af",
"assets/assets/images/icons/plug.svg": "2f56f556d2e737755db12448a8448d6f",
"assets/assets/images/icons/eyedropper.svg": "3a4b0f73c5907326886e6f240e45c09e",
"assets/assets/images/icons/bell.svg": "196e3c5a39a083c936815133d71b6942",
"assets/assets/images/icons/coffee.svg": "02b3370fa23c877c5ed5287f1b475f71",
"assets/assets/images/icons/flag.svg": "3064e400548147958267037eb2591761",
"assets/assets/images/icons/left-arrow.svg": "df79271eadd9b9e852e6ee607f5b6406",
"assets/assets/images/icons/battery.svg": "c089e799f7b46f0463f5c8ae954f134a",
"assets/assets/images/icons/plus.svg": "016a770b67786eddac6ec3219a15ac0f",
"assets/assets/images/icons/check.svg": "5b9d25e7cbecad927b466ff8c721f30b",
"assets/assets/images/icons/bottom-arrow.svg": "9eec6ca4563a82423b8e377e0c0e6f21",
"assets/assets/images/icons/keypad.svg": "cbf6351b1aed90854c128f48aeec1ef5",
"assets/assets/images/icons/bluetooth.svg": "9e25893fb9a3b67f9c6b5b35c8af89af",
"assets/assets/images/icons/global.svg": "273237ad521876ffb38ffbc1d6696b04",
"assets/assets/images/icons/headphones.svg": "1b55440ce572b3ec1700084a964437be",
"assets/assets/images/icons/angle-right.svg": "3068766b3253246e99acb5c04930257b",
"assets/assets/images/icons/info.svg": "586e699878b0e3b4a6e55dcbe6841198",
"assets/assets/images/icons/close.svg": "521bd1f1e5b9a1332ca6b0ec4b516460",
"assets/assets/images/icons/glasses.svg": "1421841f2d4ca893078d06ca56769d24",
"assets/assets/images/icons/prev.svg": "074c22a89274e8bb57ee260c2ba71479",
"assets/assets/images/icons/refresh.svg": "34bf64ee8235c347aea6faa6e21bb0b9",
"assets/assets/images/icons/culture.svg": "64d5163845202ed15a5c44945e24ad54",
"assets/assets/images/icons/bandaid.svg": "a0f33778f9f150a7fec403df47c0fb8f",
"assets/assets/images/icons/bookmarks.svg": "63d645c9c28a09b888252b9c5ccaf70e",
"assets/assets/images/icons/paperclip.svg": "7c67b976a546d4aa63d08fc43a162413",
"assets/assets/images/icons/back.svg": "f7451b5b2d22ea08d74773d5bc1915ef",
"assets/assets/images/icons/exapnd2.svg": "6def604ccaa2aad2b1c100ac183ec360",
"assets/assets/images/icons/play.svg": "3eeddeb7885b94d5e72fb820d161929c",
"assets/assets/images/icons/paper-plane.svg": "1a30b57c518bdbc03d6cd79601880723",
"assets/assets/images/icons/chat.svg": "d5077064288b6715f41f86335806053d",
"assets/assets/images/icons/camera.svg": "2deb0abf1c0f97587ea82ac014254205",
"assets/assets/images/icons/mute.svg": "307bd85764bbf21d60c788aa588a638f",
"assets/assets/images/icons/loop.svg": "c628f4f1b25d42539c318011f388a28b",
"assets/assets/images/icons/disk.svg": "0fe19e293104a5b17666b88a5137eece",
"assets/assets/images/icons/more.svg": "6b098125204bc0c10104a58894c9b974",
"assets/assets/images/icons/help1.svg": "d65543019a14a3153e09c9721023a531",
"assets/assets/images/icons/angle-up-circle.svg": "7d2d66f073768311a4c4c5ae12bb5b88",
"assets/assets/images/icons/diskette.svg": "630eae119fbaab9a77cc46f675afd6a8",
"assets/assets/images/icons/albums.svg": "fdd75cee6fe602ca4564a240c00da6f4",
"assets/assets/images/icons/leaf.svg": "b9a225d8a4e328010a56634a3243a089",
"assets/assets/images/icons/network.svg": "68a1613fae47ec11c4911006a72d6e2e",
"assets/assets/images/icons/arc.svg": "595e3cac521ad4a9415b4ca1d670d061",
"assets/assets/images/icons/lintern.svg": "5dd8da7966a1bb46f6a724a4d2a448f8",
"assets/assets/images/icons/edit.svg": "4ab7cb74057b3a0a4d41744e3a3764b7",
"assets/assets/images/icons/browser.svg": "62b055611b164c9e1f46a8839f093708",
"assets/assets/images/icons/next.svg": "b8652d06355b39bb5b3a24861d9bd72d",
"assets/assets/images/icons/anchor.svg": "9a7959242f3217cff4cc99e432422fbd",
"assets/assets/images/icons/hammer.svg": "93eecc2c38eb45666b0ba38b614befcd",
"assets/assets/images/icons/help2.svg": "1af4aedb745db9e9868b5f8c975f23d4",
"assets/assets/images/icons/expand1.svg": "31e3bbe07e3edae603acd13277622211",
"assets/assets/images/icons/cash.svg": "0f2a5dec4702f471da9eb90dcf2dea56",
"assets/assets/images/icons/mail-open.svg": "b9a98477a0cb3a7ab80c70766b0af4c3",
"assets/assets/images/icons/door-lock.svg": "17570875ffd872564ff4249906092905",
"assets/assets/images/icons/compass.svg": "174dbcc3069499799073bcd558e5a050",
"assets/assets/images/icons/bicycle.svg": "a66df3f02b19eaa415628108f4079f0b",
"assets/assets/images/icons/diamond.svg": "e5b6c3ba9c2ce7f547022b9a2912b259",
"assets/assets/images/icons/clock.svg": "5d9a9491cae6247d4cfc43aa409cdb07",
"assets/assets/images/icons/phone.svg": "41478a116bf48d9317a3a8ee34bea482",
"assets/assets/images/icons/credit.svg": "fb13d41d212c346f2cd069168b9e340a",
"assets/assets/images/icons/call.svg": "4863b44b145ef22b25c5c15c12e2c402",
"assets/assets/images/icons/next-2.svg": "3d44d91bb6285707956c0471ed41ee68",
"assets/assets/images/icons/add-user.svg": "863442e75fa0476cf8895a8daa292794",
"assets/assets/images/icons/gift.svg": "f94cf8a23c4ace0cb9857d52e25c680d",
"assets/assets/images/icons/car.svg": "8a51daa867cda74c86e69bf020acc5d7",
"assets/assets/images/icons/angle-down-circle.svg": "495847e378a996a5fa99a9c5c0644ce6",
"assets/assets/images/icons/graph1.svg": "056747c59391bce2a5348b55bb01c8dd",
"assets/assets/images/icons/album.svg": "ceaa6aae440d094d3325ed7461ee01fa",
"assets/assets/images/icons/graph3.svg": "39a05474eea7685f05a1a1bed3c52d95",
"assets/assets/images/icons/less.svg": "95c8bec1e744ecc031aa9754008b65af",
"assets/assets/images/icons/filter.svg": "ac4f19560fd6cae5bf46576d163a8377",
"assets/assets/images/icons/medal.svg": "dff8a22cd95feeee1f3590b11247f121",
"assets/assets/images/icons/comment.svg": "3503261fc9d2d3e9d648381b31deb66b",
"assets/assets/images/icons/news-paper.svg": "aa440c998d2cef4c753edd06c4919802",
"assets/assets/images/icons/delete-user.svg": "a54d098c1fefb0179dbbd857be701b68",
"assets/assets/images/icons/refresh-cloud.svg": "6fc614f4cad1a44e035bd9ac6e15c195",
"assets/assets/images/icons/graph2.svg": "91962f383eabe12e9a55f7fb86c62d67",
"assets/assets/images/icons/cloud.svg": "351c1b144489360524db11e469aad462",
"assets/assets/images/icons/cup.svg": "58be8b17ffe50bd2c1071b5409fca5fd",
"assets/assets/images/icons/portfolio.svg": "d1752e5f6cb20eaba7fa679de6445859",
"assets/assets/images/icons/back-2.svg": "2d47f30e554e861539dca76b4b64ca05",
"assets/assets/images/icons/pendrive.svg": "3f350e118b967fc81f354d4539a16e73",
"assets/assets/images/icons/date.svg": "7924fbfb2e51afdc13ae07f774429d35",
"assets/assets/images/icons/rocket.svg": "8c70a87b6b98fcfb017673cfec0da794",
"assets/assets/images/icons/cloud-download.svg": "c7dfc17f18e6a89cb19d9d036daaa5cc",
"assets/assets/images/icons/drop.svg": "068a005b8cfef9579a91f8453ab22dde",
"assets/assets/images/icons/menu.svg": "2b8305eb02dc79018986757c46b89920",
"assets/assets/images/icons/micro.svg": "2788e3bc35e8d489341c599b8f902815",
"assets/assets/images/icons/angle-left.svg": "8e58a297e7ba1d41dc165f52213215b5",
"assets/assets/images/icons/angle-right-circle.svg": "b21c57ea09df41bfc69bccca1fcc2fe7",
"assets/assets/images/icons/id.svg": "675f17aff69216cb73d430f585bc9f88",
"assets/assets/images/icons/calculator.svg": "8327bbdbe254cb800ff07324c75d1f41",
"assets/assets/images/icons/mouse.svg": "912af87fa440512ac23321811d46aa22",
"assets/assets/images/icons/female.svg": "54f9fede15dad908a5f83d2062fa400b",
"assets/assets/images/icons/graph.svg": "9830f207883ff3934b1e2142ac0ddbfa",
"assets/assets/images/icons/folder.svg": "47bb98935005a99e5de26fb24d44bc6b",
"assets/assets/images/icons/alarm.svg": "492be1d27c192eba9853d6c68f7d0f81",
"assets/assets/images/icons/piggy.svg": "d07960892feb4e0c6d6d29bb4f934501",
"assets/assets/images/icons/monitor.svg": "5a1d56ae847b50c065110e6626911f1f",
"assets/assets/images/icons/photo.svg": "d0c498669b8f1481efc994c6146ab54a",
"assets/assets/images/icons/paint-bucket.svg": "81c5d81718840729d5021cdc1da06568",
"assets/assets/images/icons/film.svg": "a9f8a7aadb93da1980d9f4bc569932bc",
"assets/assets/images/icons/print.svg": "d0cea24b2e4b0405691b441798708d5e",
"assets/assets/images/icons/moon.svg": "3d6f5cbe97c3de6f6d2355addc472a1c",
"assets/assets/images/icons/light.svg": "5501b254bb5f33883c04c470fb03bd86",
"assets/assets/images/icons/ribbon.svg": "b427e6a773c61470fe2d5d9c0ffaf577",
"assets/assets/images/icons/notebook.svg": "b8b87f5c164749be0656811f17616679",
"assets/assets/images/icons/refresh-2.svg": "87ac41c07465e559592287c4eb8bc2bf",
"assets/assets/images/gif/icons8-services.gif": "e69443ada9964545ab1476e6cd316d5d",
"assets/assets/images/gif/loader.gif": "e8319a6d18df6270b69e1dcfdef2da32",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
