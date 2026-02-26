let bgContainerElement = document.getElementById("bgContainer");
let themeUserInputElement = document.getElementById("themeUserInput");
let headingElement = document.getElementById("heading");

function changeTheme() {
    let themeUserInputValue = themeUserInputElement.value;
    if (themeUserInputValue === "Dark") {
        bgContainerElement.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        headingElement.style.color = "White";
    } else {
        bgContainerElement.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        headingElement.style.color = "#014d40";
    }
}