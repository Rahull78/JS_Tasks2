const form = document.getElementById("formValues");
const firstName = document.getElementById("FirstName");
const lastName = document.getElementById("LastName");
const email = document.getElementById("Email");
const phone = document.getElementById("phoneNumber");
const gender = document.getElementById("gender");
const city = document.getElementById("city");

const nameError = document.getElementById("nameError");
const lastNameError = document.getElementById("lastNameError");
const Emailerror = document.getElementById("emailError");
const phoneerror = document.getElementById("phoneError");
const gendererror = document.getElementById("genderError");
const cityError = document.getElementById("cityError");

// User Data Array for storing User INformation

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
  cityError.innerHTML = "";

  if (firstName.value.trim() === "") {
    nameError.innerHTML = "First name is required";
    isValid = false;
  } else if (!validateName(firstName.value)) {
    nameError.innerHTML = "First name can only contain alphabets not numbers";
    isValid = false;
  }

  if (lastName.value.trim() === "") {
    lastNameError.innerHTML = "Last name is required";
    isValid = false;
  }

  if (email.value.trim() === "") {
    Emailerror.innerHTML = "Email is required";
    isValid = false;
  } else if (!validateEmail(email.value)) {
    Emailerror.innerHTML = "Please enter a valid email address";
    isValid = false;
  }

  if (phone.value.trim() === "") {
    phoneerror.innerHTML = "Phone number is required";
    isValid = false;
  } else if (!validatePhoneNumber(phone.value)) {
    phoneerror.innerHTML = "Please enter a valid phone number (10 digits)";
    isValid = false;
  }

  if (gender.value === "") {
    gendererror.innerHTML = "Gender is required";
    isValid = false;
  }

  if (city.value === "") {
    cityError.innerHTML = "Please select your city";
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userData = `${firstName.value} 
    ${lastName.value} 
    ${email.value} 
    ${phone.value} 
    ${gender.value},
    ${city.value}`;
  console.log(userData);
  console.log("Form submitted successfully");
  //   userInfo.push(userPersonalInfo); //add the userData values into the userInfo Array
  console.log(userInfo); //log the userInfo array

  form.reset();
  displayData();
});
