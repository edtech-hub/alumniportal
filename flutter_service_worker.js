'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "3d32d8850131ef0139035af396d51260",
"flutter_bootstrap.js": "11a912f156e4c1333cd104f933daa6d0",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"index.html": "e9b217982f7bcdb19d8117058da178fe",
"/": "e9b217982f7bcdb19d8117058da178fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "8940474294489ed2e73767790d941ff5",
"assets/NOTICES": "399f4b1519393b7a188dd112d6e09e62",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "31b846a9405d3e5eff271b6cf897e149",
"assets/assets/apple.jpeg": "9ac23dfedfe26ddc215af019e33383cb",
"assets/assets/meta.png": "fc44838adda3bc99e4aa13f8d884c8e1",
"assets/assets/microsoft.jpeg": "4e1d116413f10ca9a0cbdd240a3086f1",
"assets/assets/google.jpeg": "60e66bf8231a564f3f93a806391f6cf3",
"assets/assets/event_banner_3.jpeg": "aed608b8d564731c03d740bc6a087d77",
"assets/assets/3.jpg": "afb357119b7373bffeb8de607f3572c3",
"assets/assets/IBM.png": "426cb9408244883eb255a17cc68d637c",
"assets/assets/ed_astra_dkt.png": "0ac44f68e8e71fba058ea76e425603c7",
"assets/assets/ed_astra_lt.png": "302e7523b3b5a339b2000c8a3c6e5614",
"assets/assets/openAI.jpeg": "aade9d3255c050adf477a2ae2d3b0e39",
"assets/assets/4.jpg": "cd365c7e24b25dd095f524e6cabc5f57",
"assets/assets/tesla.jpeg": "8d1d07df7a097ac1dadf8fc4afef809c",
"assets/assets/1.jpg": "85270aa87a7291c6a6d71bed37f92f83",
"assets/assets/background_light.jpg": "07fa676921ba3bdc67a94919cdb13b12",
"assets/assets/event_banner_1.png": "88a9c69ef3886c38939616134e7b8208",
"assets/assets/event_banner_4.jpeg": "1f8db8536d347f6b7db02c073951228b",
"assets/assets/amazon.jpeg": "0422df9b7da3cfe7c44be5c117a753ed",
"assets/assets/event_banner_2.jpeg": "07f711ed6b586dd94dd6df8152c6799b",
"assets/assets/person_outlined.png": "072166b07decc640cd88a428e3412513",
"assets/assets/2.jpg": "6a2e158bbefc4d9d47205eda12cbc5ca",
"assets/assets/404.png": "046670ceac1b546e9e6e3d2a76221bce",
"assets/AssetManifest.json": "db88ceec13ff37b2eb45e312491aa4f4",
"assets/AssetManifest.bin": "d45304c48a0a628a0d1867f0ec1510ca",
"manifest.json": "2c0e9ac8311e0af565050017c1828fd2",
"version.json": "3a1ce95514fddd9a4aaae544eaedf897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "fc22a71105ab0c0d26744e6fc1aec894",
".git/objects/13/a32812b5e59953f096d63ac6a2869bfc627fa9": "3855bdd2eb1e987671cbf10cf6f4268f",
".git/objects/c2/fd1d38cb504dfe70487a906ac6cb76ca6a91a6": "32febf1b18effefcaf5be89ab417d191",
".git/objects/7c/d709d852df7f69806d0f86aecb097223a1836e": "9ef464eaf48445cff883df25dd49f479",
".git/objects/e6/22c94afa796e75069aed610fa782456edf1c2d": "918bf56e0a80a42c86bb5bf6b6ceba94",
".git/objects/01/163750ae44fbf749f0ad3c3abd933dc37371f3": "51a28252909cf260e029ec3072f55f85",
".git/objects/01/f72cdb69c7bac6aa41ebe38b826f0bd74edb79": "6403e199512f52591269a63a94c83b9f",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8f/56b0ee71c0b3e7ab61d4a11332dcbeb7115ad4": "4b9cf8786630e8da60fca82587ae37af",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/14/7cdd0d7bbd9ca4cd1980e514ae592a4882f8ab": "530c383b05ac30001182b3828dffa081",
".git/objects/14/8930b4d381e1cb5b4da37bfe96778f87604347": "d6cdbec275fd98a6b877dc34fed573ae",
".git/objects/7a/30a26be04dac9c69e3da59df10847c2f185260": "14e0465e9b17257019267a25423fd065",
".git/objects/72/6109c369629e7996753dd781987549636d706e": "42d801ce5cf4a4c5f26162498b6fbeef",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/41/56cdf4c52e87887e617e38cf1b47a473d67fd7": "a8a9ba93a29d2e4c7b0258eb54fb9ba5",
".git/objects/41/3e3fd333292ad16df411e8bb5042480f552dc6": "c49d4fd2a8e0d4e80a6b1a3226b6aed7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/215ae9b1a0784612df0ad46d44e4faf100323e": "59b6e6e89b73db411b70a0bb6cda1c6a",
".git/objects/d1/c3cbc70ab28dcf5f2f68cd5d2515f02a8eb844": "552f787453e63983348f731d89145274",
".git/objects/e3/ac11ce240b95d7657c5ba91cacf4c66bcdcb40": "d7fd2fd54545783d87ffb93cdd6a1376",
".git/objects/ef/efb636980d1b95e59a6c6bdfe222343c4703f1": "c702d1a848a876a29551f5eb4d9d382d",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/e583ffa1319ba5c4bd72ecd2492e726a61fdc3": "633941e98911d3db6a246fb2451d10ef",
".git/objects/a6/a159d153b41c910806ed80e48b26df012e07af": "584f523ed675f8e85742f018264d9e73",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/be/8277dae38cbf0d83551b46bc0c20d0c433d40c": "31b33b34e33afbeaeffc9d0b65019085",
".git/objects/4d/fd19f608c50038e7fc25b47c2a0f50dcb06766": "29d0cdf695b97ccc2d5282631a2d6609",
".git/objects/9b/09b20f06a9521e9b622cd98fae890df2597c03": "ef65f0b94bc8eac9ffbf90c1cfbfba54",
".git/objects/05/555588d044fbc628344a632afeaf1dea9e318b": "344c30e36a671242c8bf87ef82c02e6e",
".git/objects/21/84b90b93403263f850fcfef6079913100af2ef": "4c1c1d1c76d66d74ee42df2d6259cc53",
".git/objects/c0/0a241481fa5b2a4d0913c2fa09157c2e83598a": "80e713d27af061925e5231c045188a05",
".git/objects/2e/906ae58c0e4c7c06b14818a93426cf24e974bd": "17eef37640e99400931cc4345e42aa4a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/771cf6a084cb183390331b53a1299713fe2d7e": "2c74f98b8a0f7c04ec05b852f82c3bd5",
".git/objects/2d/cd5eee86cd2e57ff0bc0b954166682661f9015": "9765810f643e3beee8a29cc30008a941",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/ec/e97d07b5c84d32a028d00e4bfd5add95b24773": "9f41b1f2be79a4a5811694d09bb14fee",
".git/objects/32/c4264ac37b85f10f57bf43d7d1804b81763992": "f62f91360e55f841e8e928cab4fc3599",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/5b/461f5ff35a1980609d7575d86a0e37033d0db7": "b7b0ef82bdfb93a5bf086d4010584ceb",
".git/objects/5b/ce6380e66f8972b9a7c94310a4157dc20903aa": "4d249d464390625d5d58051d578bb4dd",
".git/objects/62/d565394bc4150b18312d9627b9d35ee64b63d3": "20c809cb593b0f4c3e1419b2b8d69375",
".git/objects/20/f8b39e3c4ff69d99212fa812e5295ca3f12ba5": "1e0ab4585607922ca2842b46460074c4",
".git/objects/20/f3e8d6f41724965bd6deee26d45cfcc976a29b": "0fcb705306cd590f28abf62879a5285a",
".git/objects/8b/4feb1def4cb8afe89af1c13b43efe9da54db38": "c6085937461cdbb4040222f15843759c",
".git/objects/8b/23505bae4fcb5658b5c2b29280a54b0e902e8b": "3056d7121cc6d394a8b83510d45ac470",
".git/objects/3d/5e80f7a9519aacc4097653004e478cbc2827a0": "048c3e5a787cb2343a846a0076e145cf",
".git/objects/3d/eb24b0103a1c3f048419d3b45e5ddcb0da7187": "481128d53c2a14ec08f026f78f3365be",
".git/objects/86/cbf650cd8fdd77ad17ab13ea09f9b76830cb98": "33cd988bcccd94fc3c1459604c146e7a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/8d/6fb34866d0f9a5a7209cd1408b3837ab1c3b30": "0a3471e7f332a2480c5a551e2fa5cf2a",
".git/objects/6a/ab01a010338f46b401b73c3c366e072bd00b83": "8043c686ae1450521af6b5436275805d",
".git/objects/79/90b152796aca2d7e0d82756a47df753bf4e528": "2ecc3e397bbb74512a307cb176cc87e4",
".git/objects/a7/da160854d28c79c92e6df963342d44966da0c0": "c02727eae90af6ca33c67d173ca4c6ab",
".git/objects/2a/df5502e82b42baa470d1f362c86e55e98e7a06": "971140ddd2993be79a8cf100d8baa218",
".git/objects/51/74f9e42ecdba37ee1b6c5d575ab176b915e9e9": "fb2a07d0e8b4477aac5b76a8a9cb22fe",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/d6/97514778f751c2362a5a517420325c3ffc6511": "5b5a026337ee8fa6fbbef2eb5f3fc744",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/7b/993c37527a237d11ad5b52fd30aea1c19818a0": "fc208bce1685b36f0b02a555c30241a7",
".git/objects/07/3ef9d03e683743d2f3b89afb4b12954f90aad0": "06193bcebd0c414d66626028c4039d16",
".git/objects/e2/c4f24f64817be2ef4936a63bef0028d3bcd0e3": "307cf046f83a82aa9d1f5822cc71175b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/87/fb8e0e5afca4559e3f50790a4b5a6f71e3b62f": "e6e0832148d0699beb22eac4f6a05afc",
".git/objects/22/96b193e2cc2daa3695c626cd51a004527659a3": "04b0b62827c1cb3320e63e3ff45e32f5",
".git/objects/22/c2e0d934277835a3d62d5c2d056b366929c0c6": "d0f1daa0e6ef60a42622af93536be3c6",
".git/objects/22/4780103b70b1a18f8a18920632fe3cb259d455": "74dd0408d65bdaded10f77a306219e79",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/68/72783cf6a60d09e0f275a992f887f0981f041c": "4836a5a73cc31376a045594cf03e4d39",
".git/objects/68/7c6be92ad33fb5693f0accc55a7d3207947273": "cf9daec02b07067ed9982478b338cec6",
".git/objects/68/85796d1f19ba088a4bbc2265333d8eb23c277c": "4086e5531aed3aef635e560bedb6d232",
".git/objects/68/241ebaae310faff3af3df039e06f1ba49e5ace": "92fdee9401cfeb71231974ad11ed0265",
".git/objects/93/17826565b943bf6348ed46cae3548b852f49ab": "d494a7adc594769e0bf58a5d7efe412b",
".git/objects/66/996e6f858671c6ba3e9f20b6ed1d0518c61c17": "f04c532fea2bdd626f715e906d45cf67",
".git/objects/4c/e4d1959439461b5b9e196309113b8664b89050": "3f9e4db2475129748213718255d2b376",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/17/48b48975cf2f12ea4eb9cb22a2f35f8cfec099": "3ed05f70435f543ed7b9697778372d4d",
".git/objects/0a/a323fcb420bfb695c27ae266738f5d909f0f99": "62182cca77c31f22efcf82004e4ebb7c",
".git/objects/3e/8e5b80d335b05ef3ea5e567835f1a5b821fe15": "da744a4f597ddc17f1dd6a36bbad37b9",
".git/objects/c8/f6f10028921b1e010b72ba567ba7d3904fcb30": "fec1827c1b443ee24fceccde25369992",
".git/objects/56/3cfb566b809d2502d036bc53c4c388228b56d3": "d6c9f25839e1f93e67f7969b80cc143d",
".git/objects/56/720ecc5a26be350a332bdfaab67d1934e10be4": "38089a882979141e7d353478c416daa9",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/d2/f7b5221f7c2262aa9f6763b318645db8292604": "6cc0d8eeb036b32ad60af4bb07d7c0dc",
".git/objects/54/87393668eefed893a733aae428d76b00746cef": "732577db2e3730654df877b7050e1cce",
".git/objects/16/cc014cc5f31cb2db2e4cd4dfeff1f8450b3e2f": "d509384c4041380fe5c06466d010ffbc",
".git/objects/16/ae3695ae063988871ebcb212e9c905a7217d5f": "5a7b0919648e789ac8a137880debe2f9",
".git/objects/f4/b58a45427bb68269797501f0d86a6f47c8dd2a": "97a90c4b1d2dc0ecd6eb2e585590a0c9",
".git/objects/f4/ccbbf8f03b17ac2d23e595f8b307f6cbef888d": "2fe7b56fc5d5b8e0673492aab7e30d94",
".git/objects/f4/37b3bbd207b8da4d3641391e6dd3eeca242fc9": "42b4c24c5a78aca8caafdda144e42116",
".git/objects/b9/929dd6002e82d9ab063722a65e81c3ce2760ec": "614d056ebbdfeb635d7e0ecee262d99b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/0e/0c8a788b72dfdeaf84a0d4b87c83ee5f4a89b5": "7bc0fc3c4793edcc889d0c9fca44df39",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/44/bbf0b24da88a0d3c0da37aee300d203ef611bb": "dd043a16c6e488051b3d02dd86e8dc69",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/b3/8d460f960e6d87b158c148e5bbf271f493f43b": "4882a1bbde7a4d5a55bc80442fd713c8",
".git/objects/b3/96bd0b2b0d9355a3c95c5718c43bdec944cb31": "618a9a18f2094ce68cda61bd82062855",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/a2/ae044101c06775fd1ca4cc83d5db41e684ccd4": "83a49f6c9a3a9d1b1f7568099b39c26a",
".git/objects/c4/1571532ea4c08dfdae6b99b412d8df565a2466": "b5b3087fb86a948571b0259a72b57c1d",
".git/objects/19/aced70a44a92c9150ff7440436675a666047f1": "1e27ed325d4c8c1715eafae59011fe59",
".git/objects/69/3bdb2853580527f46b6bb6cd667ba7cb115006": "a503a3b642e9d6b1f593ebb7e7e43894",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/bb/a98f108bb00092505f434cce96b8a14df8e819": "520425120a53971c257eeaf81c6eeb91",
".git/objects/63/7169e058b0dd037c6e81ef5e1ef4649fd99bd4": "08d419bae2654ca1f894539ec7384eb7",
".git/objects/63/5dd5ed6706aaf4a26ed27748efa07ba5f6eab2": "1d6cd5f9a480fbfb0d6ba3c264397269",
".git/objects/65/f27a1b055085ce1ffa63964281fbc64e042010": "d1d499fe5db901f0fc485c40d08d7ad6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/1c/13b91239fc416c85394c073d97fd16f9ad3c09": "f7e6ab9fc644f85503320558f89139db",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/d9df9deddcb7de27f8da666f5bdf2b07b338e5": "39f41c08f850f77223003a421f6cd305",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/97/bc25b732e660dc3084f48e0437670caa062b28": "c9bceee6df4a5f8d5486e5f49c129de5",
".git/objects/97/64d6b26769f80c7a7d7a3b3d6d0184d7fa91aa": "dde0c8aa95e6f736bdd2f0e0f7c41ff3",
".git/objects/d7/30789f2251f9f7896452f9dec07bf7385df69e": "be5d67da32f6b0d66176f3636e68882d",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/97f4009e559f0ab0c20447dcb086cc10e9c9c1": "2c4776a291340665d526dd68375e1c49",
".git/objects/1d/76e2820a739c03ec99d952ea2b83419be3ada2": "c3a330cb69d90a5b8bb56337b6510adc",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/ab/9996b800136a6c85d2073ba015ed8f9e8c8043": "47b26b41647d1912009c111660975883",
".git/objects/cc/e43a5964eed249305cd620e0aaaf1e6cfa740e": "aa9a8678cc5394887a7bfe186da909a4",
".git/objects/30/9ddcdb7d5133142493d04c4d2ac25e9337fe0b": "b482c389714799b58d4324d752bc7b88",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/4f/36d6c6684b8cce85fe82f2655a30aaba64373f": "1e95c3d20fc65a9ef4c5656d5de60d68",
".git/objects/73/994f61cf72ece92cbf237c4fbde73c3f2638b5": "b0f238193a6e0f6dc9ba556646e1facc",
".git/objects/59/a50d3be6da4dae9b97ebd3aecb0c965f82fa88": "83f709733ffeda02524409c525796286",
".git/objects/e0/bedee014db545e0bdff5b7084d64c614670bb2": "3a81b4bf5b32a2aa71f94bc06cdcdfaf",
".git/objects/5c/3ea2fb1da8df635ffe92ddfc99896f23fd250b": "64adfcc0bc584a7e9cf417606c9529e2",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/f1f60521060df980f3d445413417c7deac9869": "9eb6776208c4f5fabe29f163abac657f",
".git/objects/84/3642e628e9c171c8bea63ae71180f9f700322c": "ad9c9a4ef6d9fc611ee34fba43d58153",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/7f/3026bd39922a0582c29738732abbdd86c291f6": "d146b14efa64552e9ceb96af84c87515",
".git/refs/remotes/origins/main": "d3010007c6f6b4fadab7ad92794904c5",
".git/refs/remotes/origin/main": "13e40dc7718b07a1adfab1b199ef8348",
".git/refs/heads/main": "13e40dc7718b07a1adfab1b199ef8348",
".git/index": "6674b710e5e8e69d52c1d663a8a0bea7",
".git/COMMIT_EDITMSG": "7357af5d29d6d0d6548d0a54749b0cfd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origins/main": "68dcb43db0acdd30f67025cbb8e6903f",
".git/logs/refs/remotes/origin/main": "093e8423bff662a980361dc63103bd2c",
".git/logs/refs/heads/main": "e27e9901bd84719b1362614dcf7d0ecb",
".git/logs/HEAD": "8cd53c467db07c832c86c21a0889ac75",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
