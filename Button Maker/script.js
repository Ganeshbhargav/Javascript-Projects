let bgColorInputElement = document.getElementById('bgColorInput');
let fontColorInputElement = document.getElementById('fontColorInput');
let fontSizeInputElement = document.getElementById('fontSizeInput');
let fontWeightInputElement = document.getElementById('fontWeightInput');
let paddingInputElement = document.getElementById('paddingInput');
let borderRadiusInputElement = document.getElementById('borderRadiusInput');
let customButtonElement = document.getElementById('customButton');

function apply() {
    customButtonElement.style.backgroundColor = bgColorInputElement.value;
    customButtonElement.style.color = fontColorInputElement.value;
    customButtonElement.style.fontSize = fontSizeInputElement.value+"px";
    customButtonElement.style.fontWeight = fontWeightInputElement.value;
    customButtonElement.style.padding = paddingInputElement.value+"px";
    customButtonElement.style.borderRadius = borderRadiusInputElement.value;

}