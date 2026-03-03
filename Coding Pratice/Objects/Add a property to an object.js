let meals ={
  breakfast: 'Oatmeal',
  lunch: 'Burrito',
  dinner: 'Chapathi',
  snack: 'Biscuits'
}

function addKeyAndValue(key,value){
    meals[key] = value
    console.log(meals)

}
addKeyAndValue("snack","Noodles")