function makeObject(id,name,email){
    let person = {
    id : id,
    name : name,
    email :email
    }
    return person
}

res = makeObject(1,"Bhargav","Bhargav@gmail.com")
console.log(res)