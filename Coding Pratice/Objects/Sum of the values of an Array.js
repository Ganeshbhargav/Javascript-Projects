function arraySum(arr){
    sum = 0
    for(let num of arr){
        sum+=num
    }
    return sum
}
sum_array = arraySum([12,1,2,4,1])
console.log(sum_array)
