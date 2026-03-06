

fetch("https://reqres.in/api/users?page=2",{
    method: "GET",
    headers : {
        "x-api-key": "apikey"
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