function totalScore(arr){
    let sum =0
    for(let each_score of arr){
        sum+=each_score
    }
    return sum
}

// res = totalScore([25,55,30])
// console.log(res)

res = totalScore([50,63,101])
console.log(res)