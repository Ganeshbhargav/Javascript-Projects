fetch("https://reqres.in/api/users?page=2")
.then(function(res){
    return res.json();
})
.then(function(data){
    displayEmployees(data.data);
})
.catch(function(error){
    console.log("Fetch Error:", error);
});

function displayEmployees(employees){
    let container = document.getElementById("employees");

    employees.forEach(function(emp){
        container.innerHTML += `
            <div class="employee-item">
                <p>Name: ${emp.first_name} ${emp.last_name}</p>
                <p>Email: ${emp.email}</p>
                <div class="img-container">
                    <img src="${emp.avatar}">
                </div>
            </div>
        `;
    });
}