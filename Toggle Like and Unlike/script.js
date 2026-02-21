let puppyImageEl = document.getElementById("puppyImage");
let likeIconEl = document.getElementById("likeIcon");
let likeButtonEl = document.getElementById("likeButton");
let isLiked = false;

function onClickLikeButton() {
    if (!isLiked) {
        puppyImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/liked.png";
        likeButtonEl.style.backgroundColor = "#2563eb";
        likeButtonEl.style.color = "#ffffff"
        isLiked = true
    } else {
        puppyImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/hit_like.png";
        likeButtonEl.style.backgroundColor = "#d1d5db";
        likeButtonEl.style.color = "#4b5563"
        isLiked = false
    }

}