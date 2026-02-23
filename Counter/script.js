let counterValueEl = document.getElementById("counterValue");
let counterValueNumber = parseInt(counterValueEl.textContent);

function onDecrease(){
    counterValueNumber -= 1;
    counterValueEl.textContent = counterValueNumber;
    counterValueEl.style.color = "Red";
}
function onReset(){
    counterValueEl.textContent = "0";
    counterValueEl.style.color = "Black";
}
function onIncrease(){
    counterValueNumber +=1;
    counterValueEl.textContent = counterValueNumber;
    counterValueEl.style.color = "Green";
}