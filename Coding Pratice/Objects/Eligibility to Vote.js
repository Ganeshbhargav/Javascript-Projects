function arrayOfPersons(arr){
    for(let each_items of arr){
        if(each_items.age>=18){
            console.log(each_items.name)
        }
    }

}

arrayOfPersons([{'name': 'Rahul', 'age': 25 },{'name': 'Vinod', 'age': 18 }, {'name':'Pavan', 'age': 15 },{'name': 'Geetha', 'age': 11 }])