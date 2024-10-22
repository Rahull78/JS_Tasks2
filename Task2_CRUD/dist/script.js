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

// Error elements
const nameError = document.getElementById("nameError");
const lastNameError = document.getElementById("lastNameError");
const Emailerror = document.getElementById("emailError");
const phoneerror = document.getElementById("phoneError");
const gendererror = document.getElementById("genderError");
const cityError = document.getElementById("cityError");

let userData = [];
let editIndex = null;
let deleteIndex = null;

// Validation Functions
function validateName(name) {
  const namePattern = /^[A-Za-z]+$/;
  return namePattern.test(name);
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePhoneNumber(phone) {
  return /^\d{10}$/.test(phone);
}

function validateForm() {
  let isValid = true;

  // Clear previous errors
  nameError.innerHTML = "";
  lastNameError.innerHTML = "";
  Emailerror.innerHTML = "";
  phoneerror.innerHTML = "";
  gendererror.innerHTML = "";
  cityError.innerHTML = ""; // Clear city error

  if (firstName.value.trim() === "") {
    nameError.innerHTML = "First name is required";
    isValid = false;
  } else if (!validateName(firstName.value)) {
    nameError.innerHTML = "First name can only contain alphabets, not numbers";
    isValid = false;
  }

  if (lastName.value.trim() === "") {
    lastNameError.innerHTML = "Last name is required";
    isValid = false;
  } else if (!validateName(lastName.value)) {
    lastNameError.innerHTML =
      "Last name can only contain alphabets, not numbers";
    isValid = false;
  }

  if (email.value.trim() === "") {
    Emailerror.innerHTML = "Email is required";
    isValid = false;
  } else if (!validateEmail(email.value)) {
    Emailerror.innerHTML = "Please enter a valid email address";
    isValid = false;
  }

  if (phoneNumber.value.trim() === "") {
    phoneerror.innerHTML = "Phone number is required";
    isValid = false;
  } else if (!validatePhoneNumber(phoneNumber.value)) {
    phoneerror.innerHTML = "Please enter a valid phone number (10 digits)";
    isValid = false;
  }

  // Gender validation for dropdown
  if (gender.value === "") {
    gendererror.innerHTML = "Gender is required";
    isValid = false;
  }

  // City validation for dropdown
  if (city.value === "") {
    cityError.innerHTML = "City is required";
    isValid = false;
  }

  return isValid;
}

// Show Delete Confirmation Modal
function showDeleteModal(index) {
  deleteIndex = index; // Store the index to delete
  document.getElementById("deleteModal").classList.remove("hidden");
}

// Hide Delete Confirmation Modal
function hideDeleteModal() {
  document.getElementById("deleteModal").classList.add("hidden");
}

// Confirm Delete Action
document.getElementById("confirmDelete").addEventListener("click", function () {
  deleteRow(deleteIndex); // Call deleteRow with the stored index
  hideDeleteModal(); // Hide modal after deletion
});

// Cancel Delete Action
document
  .getElementById("cancelDelete")
  .addEventListener("click", hideDeleteModal);

// Form Submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
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
      toggleEditMode(false);
    }
    form.reset();
    updateTable();
  }
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
    deleteButton.onclick = () => showDeleteModal(index);
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

  toggleEditMode(true);
}

function toggleEditMode(isEditing) {
  if (isEditing) {
    // Hide submit button and show update/cancel buttons
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("update-btn").style.display = "inline";
    document.getElementById("cancel-btn").style.display = "inline";
  } else {
    document.getElementById("submit-btn").style.display = "inline";
    document.getElementById("update-btn").style.display = "none";
    document.getElementById("cancel-btn").style.display = "none";
  }
}

document.getElementById("update-btn").onclick = function () {
  form.dispatchEvent(new Event("submit"));
};

document.getElementById("cancel-btn").onclick = function () {
  editIndex = null;
  form.reset();
  toggleEditMode(false);
};
