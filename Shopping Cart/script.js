let item1Element = document.getElementById('item1');
let item2Element = document.getElementById('item2');
let totalQuantityElement = document.getElementById("totalQuantity");
let totalPriceElement = document.getElementById("totalPrice");
let feedbackElement = document.getElementById("feedback")

let totalQuantityValue = parseInt(totalQuantityElement.textContent)
let totalPriceValue = parseInt(totalPriceElement.textContent)

function increaseItem1(){
    let item1ElementValue = parseInt(item1Element.textContent)
    item1Element.textContent = item1ElementValue+1;
    // items
    totalQuantityValue+=1 
    totalQuantityElement.textContent = totalQuantityValue
    //bill 
    totalPriceValue+=18
    totalPriceElement.textContent = totalPriceValue
}

function decreaseItem1(){
    if (totalQuantityValue > 0){
        let item1ElementValue = parseInt(item1Element.textContent)
        item1Element.textContent = item1ElementValue-1;
        // items
        totalQuantityValue-=1 
        totalQuantityElement.textContent = totalQuantityValue
        //bill 
        totalPriceValue-=18
        totalPriceElement.textContent = totalPriceValue
    }
}

function increaseItem2(){
    let item2ElementValue = parseInt(item2Element.textContent)
    item2Element.textContent = item2ElementValue+1;
    // items
    totalQuantityValue+=1 
    totalQuantityElement.textContent = totalQuantityValue
    //bill 
    totalPriceValue+=15
    totalPriceElement.textContent = totalPriceValue
}

function decreaseItem2(){
    if (totalQuantityValue > 0){
        let item2ElementValue = parseInt(item2Element.textContent)
        item2Element.textContent = item2ElementValue-1;
        // items
        totalQuantityValue-=1 
        totalQuantityElement.textContent = totalQuantityValue
        //bill 
        totalPriceValue-=15
        totalPriceElement.textContent = totalPriceValue
    }
}

function purchaseItems(){
    if (totalQuantityValue>0){
        feedbackElement.textContent = "Order Confirmed! You've ordered"
    }
    else{
        feedbackElement.textContent = "Cart is empty. Please add items"
    }
}