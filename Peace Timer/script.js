let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let uniqueId = null;

function startTimer(seconds) {
    // Stop previous timer if running
    if (uniqueId !== null) {
        clearInterval(uniqueId);
    }

    let count = seconds;
    timerTextEl.textContent = count + " seconds left";

    uniqueId = setInterval(() => {
        count -= 1;
        timerTextEl.textContent = count + " seconds left";

        if (count === 0) {
            clearInterval(uniqueId);
            uniqueId = null;
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);
}

twentySecondsBtnEl.onclick = () => startTimer(20);
thirtySecondsBtnEl.onclick = () => startTimer(30);
fortySecondsBtnEl.onclick = () => startTimer(40);
oneMinuteBtnEl.onclick = () => startTimer(60);