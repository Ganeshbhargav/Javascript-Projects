

fetch("https://reqres.in/api/users?page=2",{
    method: "GET",
    headers : {
        "x-api-key": "reqres_b6ef0dbf53b9482fb5c8029ccce7b418"
    }
})
.then(res => res.json())
.then(jsonData => displayEmployees(jsonData.data))

function displayEmployees(employees){
    employees.map((i)=>{
        document.getElementById("employees").
        innerHTML+=
        `
            <div class="employee-item">
                 <p>Name: ${i.first_name} ${i.last_name}</p>
                 <p>Email: ${i.email}</p>
                 <div class="img-container">
                 <img src="${i.avatar}"></img>
                 </div>
            </div>
        `
    })
}