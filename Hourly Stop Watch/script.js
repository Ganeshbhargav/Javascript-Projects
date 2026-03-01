let startBtnEl = document.getElementById("startBtn");
let stopBtnEl = document.getElementById("stopBtn");
let minutesEl = document.getElementById("minutes");
let secsEl = document.getElementById("seconds");

let timerId = null;
let totalSeconds = 0;

function updateTimer(){
    totalSeconds+=1;
    
    let mins = Math.floor(totalSeconds/60);
    let secs = totalSeconds % 60;
    
    if(mins===60){
        totalSeconds = 0;
        mins = 0;
        secs = 0;
    }
    minutesEl.textContent = (mins < 10 ? "0" : "") + mins;
    secsEl.textContent = (secs < 10 ? "0" : "") + secs;
}


startBtnEl.addEventListener("click", () => {
    if (!timerId) {
        timerId = setInterval(updateTimer, 1000);
    }
});

stopBtnEl.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = null;
});