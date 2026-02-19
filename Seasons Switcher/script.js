// images
let seasonSmallImageEl = document.getElementById("seasonSmallImage");
let seasonMediumImageEl = document.getElementById("seasonMediumImage");

// buttons
let springBtnEl = document.getElementById("springBtn")
let summerBtnEl = document.getElementById("summerBtn")
let autumnBtnEl = document.getElementById("autumnBtn")
let winterBtnEl = document.getElementById("winterBtn")

function onclickSpringBtn() {
    seasonSmallImageEl.src = 'https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-spring-xs-img.png';
    seasonMediumImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-spring-md-img.png";
}

function onclickSummerBtn() {
    seasonSmallImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-summer-xs-img.png";
    seasonMediumImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-summer-md-img.png";
}

function onclickAutumnBtn() {
    seasonSmallImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-autumn-xs-img.png";
    seasonMediumImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-autumn-md-img.png";
}


function onclickWinterBtn() {
    seasonSmallImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-winter-xs-img.png"
    seasonMediumImageEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-winter-md-img.png";
}