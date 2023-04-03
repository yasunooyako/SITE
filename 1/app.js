//alert('こんにちは');
// アルバムデータの作成
let album = [
    {src: 'doraikare.jpg',msg: 'ドライカレー'},
    {src: 'punpkin.jpg',msg: 'カボチャのスープ'},
    {src: 'tonjiru.jpg',msg: '豚汁'},
];

// 最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

// サムネイル写真画像の表示
let thumbFlame = document.querySelector('#gallery .thumb');
for (let i = 0; i < album.length; i++) {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage,null);
}

//クリックした画像をメインにする
thumbFlame.addEventListener('click',function(event) {
    if (event.target.src) {
        mainImage.src = event.target.src;
        mainMsg.innerText = event.target.alt;
    }
});


// アルバムデータの作成
let albume = [
    {src: 'tamago.jpg',msg: '村井養鶏場のたまごM'},
    {src: 'natto.jpg',msg: '納豆'},
];

// 最初のデータを表示しておく
let mainImager = document.createElement('img');
mainImager.setAttribute('src', albume[0].src);
mainImager.setAttribute('alt', albume[0].msg);

let mainMsgi = document.createElement('p');
mainMsgi.innerText = mainImager.alt;

let mainFlamer = document.querySelector('#galleryn .main');
mainFlamer.insertBefore(mainImager, null);
mainFlamer.insertBefore(mainMsgi, null);



const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");

setInterval(() => {
  $target.addClass(CLASSNAME);

  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT*2);