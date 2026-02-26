let chatbotMsgList = [
    "Hi",
    "Hey",
    "Good Morning",
    "Good Evening",
    "How can I help you?",
    "Thank You"
];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatbot() {
    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("text-right", "mt-2", "mb-2");
    chatContainerEl.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add(
        "bg-[#cbd2d9]",
        "font-roboto",
        "font-extrabold",
        "rounded-xl",
        "p-3",
        "inline-block",
    );
    msgContainerEl.appendChild(userMsgEl);
    userInputEl.value = "";
    getReplyFromChatbot()
}

function getReplyFromChatbot() {
    let chatBotMessage = chatbotMsgList[Math.ceil(Math.random() * chatbotMsgList.length - 1)];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("mt-2", "mb-2");
    chatContainerEl.appendChild(msgContainerEl);

    let chatbotMsgEl = document.createElement("span");
    chatbotMsgEl.textContent = chatBotMessage;
    chatbotMsgEl.classList.add(
        "text-white",
        "bg-[#e57742]",
        "font-roboto",
        "font-extrabold",
        "rounded-xl",
        "p-3",
        "inline-block"
    );
    msgContainerEl.appendChild(chatbotMsgEl)
}