let recipeSearchInputEl = document.getElementById("recipeSearchInput");
let keyPressCountEl = document.getElementById("keyPressCount");
let recipeKeyEl = document.getElementById("recipeKey");
let count =0;
recipeSearchInputEl.addEventListener('keydown',(e)=>{
    count+=1;
    keyPressCountEl.textContent = count;
    recipeKeyEl.textContent = e.key;
});