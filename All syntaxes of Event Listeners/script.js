let weatherStatusEl = document.getElementById("weatherStatus");
let sunnyBtnEl = document.getElementById("sunnyBtn");
let rainyBtnEl = document.getElementById("rainyBtn");
let cloudyBtnEl = document.getElementById("cloudyBtn");

function onSunny(){
    weatherStatusEl.textContent = "Sunny";
}

rainyBtnEl.onclick = function(){
    weatherStatusEl.textContent = "Rainy";
}

cloudyBtnEl.addEventListener('click',()=>{
    weatherStatusEl.textContent = "Cloudy"
})