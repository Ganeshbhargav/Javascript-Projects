let bulbImageEl = document.getElementById("bulbImage");
let catImageEl  = document.getElementById("catImage");
let switchStatusEl = document.getElementById("switchStatus");
let onSwitchEl = document.getElementById("onSwitch");
let offSwitchEl = document.getElementById("offSwitch");


function switchOff(){
    bulbImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatusEl.textContent = "Switched Off";
    onSwitchEl.style.backgroundColor = "#22c55e";
    offSwitchEl.style.backgroundColor =  "#cbd2d9";
}

function switchOn(){
    bulbImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImageEl.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatusEl.textContent = "Switched On";
    onSwitchEl.style.backgroundColor = "#cbd2d9";
    offSwitchEl.style.backgroundColor =  "#e12d39";
}