const form = document.getElementById("formValues");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const email = document.getElementById("Email");
const phone = document.getElementById("phoneNumber");
const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");
const city = document.getElementById("city");

const nameError = document.getElementById("nameError");
const lastNameError = document.getElementById("lastNameError");
const Emailerror = document.getElementById("emailError");
const phoneerror = document.getElementById("phoneError");
const gendererror = document.getElementById("genderError");

// Validation for Names
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

  nameError.innerHTML = "";
  lastNameError.innerHTML = "";
  Emailerror.innerHTML = "";
  phoneerror.innerHTML = "";
  gendererror.innerHTML = "";

  if (firstName.value.trim() === "") {
    nameError.innerHTML = "First name is required";
    isValid = false;
  } else if (!validateName(firstName.value)) {
    nameError.innerHTML = "First name can only contain alphabets not numbers";
    isValid = false;
  }

  if (lastName.value === "") {
    lastNameError.innerHTML = "Last name is required";
    isValid = false;
  } else if (!validateName(lastName.value)) {
    lastNameError.innerHTML =
      "Last name can only contain alphabets not numbers";
    isValid = false;
  }

  if (email.value === "") {
    Emailerror.innerHTML = "Email is required";
    isValid = false;
  } else if (!validateEmail(email.value)) {
    Emailerror.innerHTML = "Please enter a valid email address";
    isValid = false;
  }

  if (phone.value === "") {
    phoneerror.innerHTML = "Phone number is required";
    isValid = false;
  } else if (!validatePhoneNumber(phone.value)) {
    phoneerror.innerHTML = "Please enter a valid phone number (10 digits)";
    isValid = false;
  }

  if (!genderMale.checked && !genderFemale.checked) {
    gendererror.innerHTML = "Gender is required";
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validateForm()) {
    const gender = genderMale.checked ? "Male" : "Female";
    const log = `${firstName.value} 
    ${lastName.value} 
    ${email.value} 
    ${phone.value} 
    ${gender}`;
    console.log(log);
    console.log("Form submitted successfully");
  }
});
