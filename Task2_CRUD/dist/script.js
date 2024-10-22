/////////////////////////////////////////////////////////SELECTING THE ELEMENTS/////////////////////////////////////////////////////////////
const form = document.getElementById("formValues");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const email = document.getElementById("Email");
const phoneNumber = document.getElementById("phoneNumber");
const gender = document.getElementById("gender");
const city = document.getElementById("city");
const dataTable = document
  .getElementById("data-table")
  .getElementsByTagName("tbody")[0];

let userData = [];
let editIndex = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const selectedGender = gender.value;
  const selectCity = city.value;

  const userInfo = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    gender: selectedGender,
    city: selectCity,
  };

  if (editIndex === null) {
    userData.push(userInfo);
  } else {
    userData[editIndex] = userInfo;
    editIndex = null;
  }
  form.reset();
  updateTable();
});

function updateTable() {
  dataTable.innerHTML = "";
  userData.forEach((data, index) => {
    const row = dataTable.insertRow();
    row.insertCell(0).innerText = data.firstName;
    row.insertCell(1).innerText = data.lastName;
    row.insertCell(2).innerText = data.email;
    row.insertCell(3).innerText = data.phoneNumber;
    row.insertCell(4).innerText = data.gender;
    row.insertCell(5).innerText = data.city;

    const actionsCell = row.insertCell();
    const deleteButton = document.createElement("button");
    deleteButton.className =
      "bg-red-500 hover:bg-red-600 text-red font-semibold text-xs rounded";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteRow(index);
    actionsCell.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.className =
      "bg-yellow-400 hover:bg-yellow-500 text-yellow font-semibold py-1 px-2 text-xs rounded ml-2";
    editButton.innerText = "Edit";
    editButton.onclick = () => editRow(index);
    actionsCell.appendChild(editButton);
  });
}

function deleteRow(index) {
  userData.splice(index, 1);
  updateTable();
}

function editRow(index) {
  const data = userData[index];
  firstName.value = data.firstName;
  lastName.value = data.lastName;
  email.value = data.email;
  phoneNumber.value = data.phoneNumber;
  gender.value = data.gender;
  city.value = data.city;
  editIndex = index;
}
