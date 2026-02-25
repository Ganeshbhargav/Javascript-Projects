let messageElement = document.getElementById('message');
 let randomNumber = Math.ceil(Math.random() * 500);
let revealButtonEl = document.getElementById("button1");
let rewardAmtEl = document.getElementById("rewardAmt");

function onReveal(){
    messageElement.textContent = "Congratulations! You won a tech prize worth";
    revealButtonEl.style.display = "none";
    rewardAmtEl.textContent = randomNumber+" ₹";
}