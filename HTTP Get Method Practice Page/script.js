let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusParaEl = document.getElementById("requestStatus");
let httpResponseParaEl = document.getElementById("httpResponse");

function getFetchRequest() {
    requestStatusParaEl.textContent = "Loading...";
    fetch("https://dummyjson.com/products", {
        method: "GET"
    }).then(res => {
        requestStatusParaEl.textContent = res.status;
        return res.json();
    }).then(data => {
        // console.log(data)
        httpResponseParaEl.textContent = JSON.stringify(data);
    })

}


sendGetRequestBtnEl.addEventListener('click', getFetchRequest)