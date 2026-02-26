let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");
let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");

function onClickAboutTab() {
    //content
    aboutTabEl.classList.remove("hidden");
    timeToVisitTabEl.classList.add("hidden");
    attractionsTabEl.classList.add("hidden");
    //buttons
    aboutButtonEl.classList.add("bg-white");
    timeToVisitButtonEl.classList.remove("bg-white");
    attractionsButtonEl.classList.remove("bg-white");
}

function onClickTimeToVisitTab() {
    //content
    aboutTabEl.classList.add("hidden");
    timeToVisitTabEl.classList.remove("hidden");
    attractionsTabEl.classList.add("hidden");
    //buttons
    aboutButtonEl.classList.remove("bg-white");
    timeToVisitButtonEl.classList.add("bg-white");
    attractionsButtonEl.classList.remove("bg-white");
}

function onClickAttractionsTab() {
    //content
    aboutTabEl.classList.add("hidden");
    timeToVisitTabEl.classList.add("hidden");
    attractionsTabEl.classList.remove("hidden");
    //buttons
    aboutButtonEl.classList.remove("bg-white");
    timeToVisitButtonEl.classList.remove("bg-white");
    attractionsButtonEl.classList.add("bg-white");
}