let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;

timerEl.textContent = countdown
let intervalId = setInterval(()=>{
    countdown-=1;
    timerEl.textContent = countdown;
    if (countdown===0){
        timerEl.textContent = "Boom 🎆🎆";
        clearInterval(intervalId);
    }
},1000);

defuserEl.addEventListener('keydown',(e)=>{
    let defuserValue = defuserEl.value;
    if(e.key==="Enter" &&  defuserValue.toLowerCase() === "defuse" && countdown!==0){
        timerEl.textContent = "You did it 🥳🥳";
        clearInterval(intervalId);
    }
})