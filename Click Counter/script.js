let counterValueEl = document.getElementById("counterValue");
let incrementButtonEl = document.getElementById("incrementButton");
let resetButtonEl = document.getElementById("resetButton");
let count = 0;

incrementButtonEl.onclick = function(){
    count++;
    counterValueEl.textContent = count;
   
}

resetButtonEl.onclick = function(){
    count =0;
    counterValueEl.textContent = count;
}