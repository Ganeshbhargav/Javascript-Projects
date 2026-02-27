let myArray = [25, 50, "center", 75, 100];
console.log(`Before Updating the Array: ${myArray}`)
//updating the value
let updatedValue = (index,value)=>{
    myArray[index] = value
    console.log(myArray)
}
updatedValue(0,5)