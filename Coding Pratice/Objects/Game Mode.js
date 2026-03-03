function getPreferredGameMode(arr){
    arr_length = arr.length 
    if (arr_length ==0){
        console.log("Solo")
    }
    else if(arr_length==1){
        console.log("Dual")
    }
    else {
        console.log("Squad")
    }
}

getPreferredGameMode([])
getPreferredGameMode(['Bhargav'])
getPreferredGameMode(['Ganesh','Bhargav'])