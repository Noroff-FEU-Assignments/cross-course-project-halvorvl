const form = document.querySelector("#checkOutForm");
const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const country = document.querySelector("#country");
const countryError = document.querySelector("#countryError");
const streetAdress = document.querySelector("#street_adresse");
const streetError = document.querySelector("#streetError");
const postalCode = document.querySelector("#postcode");
const postalCodeError = document.querySelector("#postCodeError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

console.log(postalCode.value);
function validateCheckout(event) {
  event.preventDefault();

  if (checkLen(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLen(country.value, 3) === true) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }

  if (checkLen(streetAdress.value, 5) === true) {
    streetError.style.display = "none";
  } else {
    streetError.style.display = "block";
  }

  if (checkPostalCode(postalCode.value) === true) {
    postalCodeError.style.display = "none";
  } else {
    postalCodeError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (
    (checkLen(fullName.value, 0) === true) &
    (checkLen(country.value, 3) === true) &
    (validateEmail(email.value) === true) &
    (checkLen(streetAdress.value, 5) === true) &
    (checkPostalCode(postalCode.value) === true)
  )
    open("confirmation.html", "_self");
}

form.addEventListener("submit", validateCheckout);

function checkPostalCode(postalCode) {
  const regExNumbers = /^\d+$/;
  const checkForNumbers = regExNumbers.test(postalCode);
  return checkForNumbers;
}

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
