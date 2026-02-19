// Buttons
let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

// Lights
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

// Default Colors
let defaultButtonColor = "#1f1d41";
let defaultLightColor = "#4b5069";


function resetAll() {
    // Reset Buttons
    stopButton.style.backgroundColor = defaultButtonColor;
    readyButton.style.backgroundColor = defaultButtonColor;
    goButton.style.backgroundColor = defaultButtonColor;

    // Reset Lights
    stopLight.style.backgroundColor = defaultLightColor;
    readyLight.style.backgroundColor = defaultLightColor;
    goLight.style.backgroundColor = defaultLightColor;
}

// STOP
function onClickStop() {
    resetAll();
    stopButton.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
}

// READY
function onClickReady() {
    resetAll();
    readyButton.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
}

// GO
function onClickGo() {
    resetAll();
    goButton.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";
}