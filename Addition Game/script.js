let firstNumberEl = document.getElementById('firstNumber');
let secondNumberEl = document.getElementById('secondNumber');
let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");


function restartGame(){
    let randomNumber1 = Math.ceil(Math.random()*100);
    let randomNumber2 = Math.ceil(Math.random()*100);
    firstNumberEl.textContent = randomNumber1;
    secondNumberEl.textContent = randomNumber2;
    gameResultEl.textContent = "";
    userInputEl.value = "";
}
restartGame();

function checkResult(){
    let firstNumberValue = parseInt(firstNumberEl.textContent);
    let secondNumberValue = parseInt(secondNumberEl.textContent);
    let userInputValue = parseInt(userInputEl.value);
    
    if (firstNumberValue+secondNumberValue === userInputValue){
        gameResultEl.textContent = "Congratulations! You got it right";
        gameResultEl.style.backgroundColor = "Green";
    }
    else{
        gameResultEl.textContent = "Please Try Again!";
        gameResultEl.style.backgroundColor = "Blue";
    }
}

