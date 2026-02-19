let backgroundContainer = document.getElementById("colorPickerContainer");
let spanEl = document.getElementById("selectedColorHexCode");

function onclickbutton1(){
    backgroundContainer.style.backgroundColor = "#e0e0e0"
    spanEl.textContent = "#e0e0e0";
}

function onclickbutton2(){
    backgroundContainer.style.backgroundColor = "#6fcf97"
    spanEl.textContent = "#6fcf97";
}

function onclickbutton3(){
    backgroundContainer.style.backgroundColor = "#56ccf2"
    spanEl.textContent = "#56ccf2";
}

function onclickbutton4(){
    backgroundContainer.style.backgroundColor = "#bb6bd9"
    spanEl.textContent = "#bb6bd9";
}
