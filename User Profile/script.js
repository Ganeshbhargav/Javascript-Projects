let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Ganesh Bhargav",
    age: 22,
};

let profileContainerEl = document.getElementById("profileContainer");
let imgContainerEl = document.getElementById("imgContainer");

let imageEl = document.createElement("img");
imageEl.src = profileDetails.imgSrc;
imgContainerEl.appendChild(imageEl);

let headingEl  = document.createElement("h1");
headingEl.classList.add("font-bold","text-white","mt-2");
headingEl.textContent = profileDetails.name;
profileContainerEl.appendChild(headingEl);

let ageEl = document.createElement("p");
ageEl.classList.add("font-bold","text-white");
ageEl.textContent = "Age: "+profileDetails.age;
profileContainerEl.appendChild(ageEl)