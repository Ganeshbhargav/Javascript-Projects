let fuelLevelEl = document.getElementById("fuelLevel");
let currentvalue  = parseInt(fuelLevelEl.textContent)
function onReduce(){
    if (currentvalue > 500){
        currentvalue-=75;
        fuelLevelEl.textContent = currentvalue;
    }
    else{
        currentvalue-=35
        fuelLevelEl.textContent = currentvalue;
    }
}
function onReset(){
    currentvalue = 0 ;
    fuelLevelEl.textContent = currentvalue;
}
function onIncrease(){
    if (currentvalue < 300){
        currentvalue+=100;
        fuelLevelEl.textContent = currentvalue;
    }
    else{
        currentvalue+=50;
        fuelLevelEl.textContent = currentvalue;
    }
}