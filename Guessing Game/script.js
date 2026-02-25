let userInputElement  = document.getElementById('userInput');
let gameResultElement = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random()*100);
function checkGuess() {
    let userInputValue = parseInt(userInputElement.value);
    if (userInputValue === randomNumber){
        gameResultElement.textContent = "Congratulations! You got it right.";
        gameResultElement.style.backgroundColor = "Green";
    }
    else if(userInputValue > randomNumber){
        gameResultElement.textContent = "Too High! Try Again.";
        gameResultElement.style.backgroundColor = "orange";
    }
    else if(userInputValue < randomNumber){
        gameResultElement.textContent = "Too Low! Try Again";
        gameResultElement.style.backgroundColor = "orange";
    }
    else{
        gameResultElement.textContent = "Please provide a valid input.";
        gameResultElement.style.backgroundColor = "red";
    }
}