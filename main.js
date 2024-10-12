var nameInput = document.getElementById("name-input");
var ageInput = document.getElementById("age-input");
var genderInput = document.getElementById("gender-input");
var courseInput = document.getElementById("course-input");
var emailInput = document.getElementById("email-input");
var submitBtn = document.getElementById("submit-btn");
var displayTable = document.getElementById("display-table");

function handleSubmit() {
    var name = nameInput.value;
    var age = ageInput.value;
    var gender = genderInput.value;
    var course = courseInput.value;
    var email = emailInput.value;

    var table = document.createElement("tr");
    table.innerHTML = `<td>${name}</td><td>${age}</td><td>${gender}</td><td>${course}</td><td>${email}</td> <td><button id="delete-btn" onclick="handleDelete(event)">Delete</button></td>`;
    displayTable.appendChild(table);
    nameInput.value = "";
    ageInput.value = "";
    genderInput.value = "";
    courseInput.value = "";
    emailInput.value = "";
}


function handleDelete(event) {
    event.target.parentElement.parentElement.remove();
}

