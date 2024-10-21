const form = document.getElementById("formValues");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const email = document.getElementById("Email");
const phone = document.getElementById("phoneNumber");
const gender = document.getElementById("gender");
const city = document.getElementById("city");
const dataTable = document
  .getElementById("data-table")
  .getElementsByTagName("tbody")[0];

let userInfo = [];
// Sample userInfo array (replace this with the actual array from your form page)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userPersonalInfo = [
    {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      gender: gender.value,
      city: city.value,
    },
  ];

  userInfo.push(userPersonalInfo);
});

console.log(userPersonalInfo);

function displayData() {
  const tableBody = document.getElementById("userTableBody");
  tableBody.innerHTML = ""; // Clear existing data

  userPersonalInfo.forEach((user, index) => {
    const row = dataTable.insertRow();
    row.insertCell(0).innerText = user.firstName; //inercell insert new array to the new user eveytime
    row.insertCell(1).innerText = user.lastName;
    row.insertCell(2).innerText = user.email;
    row.insertCell(3).innerText = user.phoneNumber;
    row.insertCell(4).innerText = user.gender;
    row.insertCell(5).innerText = user.city;
  });
}

function editUser(index) {
  const user = userPersonalInfo[index];
  // Prompt for new values (you can replace this with a better UI)
  const newFirstName = prompt("Edit First Name", user.firstName);
  const newLastName = prompt("Edit Last Name", user.lastName);
  const newEmail = prompt("Edit Email", user.email);
  const newPhone = prompt("Edit Phone", user.phone);
  const newGender = prompt("Edit Gender", user.gender);
  const newCity = prompt("Edit City", user.city);

  // Update the user info
  userPersonalInfo[index] = {
    firstName: newFirstName || user.firstName,
    lastName: newLastName || user.lastName,
    email: newEmail || user.email,
    phone: newPhone || user.phone,
    gender: newGender || user.gender,
    city: newCity || user.city,
  };

  displayData(); // Refresh the table
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    userPersonalInfo.splice(index, 1); // Remove user from array
    displayData(); // Refresh the table
  }
}

// Initial call to display data
displayData();

// `<tr>
//             <td class="border px-4 py-2">${user.firstName}</td>
//             <td class="border px-4 py-2">${user.lastName}</td>
//             <td class="border px-4 py-2">${user.email}</td>
//             <td class="border px-4 py-2">${user.phone}</td>
//             <td class="border px-4 py-2">${user.gender}</td>
//             <td class="border px-4 py-2">${user.city}</td>
//             <td class="border px-4 py-2">
//                 <button onclick="editUser(${index})" class="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
//                 <button onclick="deleteUser(${index})" class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
//             </td>
//         </tr>`;
