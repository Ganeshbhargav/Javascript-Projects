let warningMessageEl = document.getElementById("warningMessage");
let imageWidthText = document.getElementById("imageWidth");
let image = document.getElementById("image");
let int_image_width = image.clientWidth
imageWidthText.textContent = int_image_width + "px"

function onIncrement() {
    if (int_image_width < 300) {
        int_image_width += 5;
        image.style.width = int_image_width + "px";
        imageWidthText.textContent = int_image_width + "px";
        warningMessageEl.textContent = "";
    } else {
        warningMessageEl.textContent = "Too big. Decrease the size of the image";
        warningMessageEl.style.color = "Red";
    }
}

function onDecrement() {
    if (int_image_width > 100) {
        int_image_width -= 5;
        image.style.width = int_image_width + "px";
        imageWidthText.textContent = int_image_width + "px";
        warningMessageEl.textContent = "";
    } else {
        warningMessageEl.textContent = "Can't Visibile, Increase the size of image";
        warningMessageEl.style.color = "Red";
    }

}