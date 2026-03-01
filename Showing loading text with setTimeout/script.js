let buttonEl = document.getElementById("button");

buttonEl.addEventListener('click',()=>{
    buttonEl.textContent = "Refreshing Weather...";
    
    setTimeout(()=>{
        buttonEl.textContent = "Refresh Weather";
    },1000);
});