let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function randomJokeGenerator() {
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
 
    fetch("https://apis.ccbp.in/jokes/random", {
            method: "GET"
        })
        .then(res => res.json())
        .then(jsonData => {
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            let randomJoke = jsonData.value;
            jokeTextEl.textContent = randomJoke;
        });
}

jokeBtnEl.addEventListener('click', randomJokeGenerator);