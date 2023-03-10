const form = document.querySelector("#contactform");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");

function validateForm(event) {
  event.preventDefault();

  if (checkLen(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLen(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLen(adress.value, 24) === true) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLen(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const checkPattern = regEx.test(email);
  return checkPattern;
}

validateEmail();
