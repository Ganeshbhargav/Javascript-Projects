let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: [
        "Pasta",
        "Oil",
        "Onions",
        "Salt",
        "Tomato Pasta Sauce",
        "Cheese",
    ],
};

let recipeTitleEl = document.getElementById("recipeTitle");
let imgEl = document.getElementById("img");
let ingredientListContainerEl = document.getElementById("ingredientListContainer");
let imgContainerEl = document.getElementById("imgContainer");

recipeTitleEl.textContent = recipeObj.title;
imgEl.src = recipeObj.imgSrc;
imgEl.classList.add("w-full");
imgContainerEl.appendChild(imgEl);


for (let each_item of recipeObj.ingredients){
    let item1 = document.createElement("li");
    item1.textContent = each_item;
    item1.classList.add("text-white","font-roboto","text-[24px]");
    ingredientListContainerEl.appendChild(item1);
}