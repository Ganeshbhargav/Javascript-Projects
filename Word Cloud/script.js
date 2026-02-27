let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let addbtnElement = document.getElementById("addbtn");


function cloud(word){
    let randomSize = Math.ceil(Math.random() * 40) + 'px';
    
    let spanEl = document.createElement("span");
    spanEl.textContent = word; 
    spanEl.style.fontSize = randomSize;
    wordsContainerEl.appendChild(spanEl);
}

for (let each_word of wordCloud){
    cloud(each_word);
}

function onAddWordToWordCloud(){
    let userInputValue = userInputEl.value;
    if (userInputValue===""){
        errorMsgEl.textContent = "Please Enter a Word";
    }
    else{
        cloud(userInputValue);
        userInputEl.value ="";
        errorMsgEl.textContent = "";
    }
    
}
