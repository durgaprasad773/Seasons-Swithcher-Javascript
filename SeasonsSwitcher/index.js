let smallImg = document.getElementById("seasonSmallImage");
let MediumImg = document.getElementById("seasonMediumImage");


let springSm = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

let summerSm = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

let AutumnSm = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let AutumnMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

let wintwerSm = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMd = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springbtn() {
    smallImg.src = springSm;
    MediumImg.src = springMd;
}

function summerbtn() {
    smallImg.src = summerSm;
    MediumImg.src = summerMd;
}

function autumnbtn() {
    smallImg.src = AutumnSm;
    MediumImg.src = AutumnMd;
}

function winterbtn() {
    smallImg.src = wintwerSm;
    MediumImg.src = winterMd;
}