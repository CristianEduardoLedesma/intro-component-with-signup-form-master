const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

var textfirstNameValid = document.getElementById("first-name-valid");
var textLastNameValid = document.getElementById("last-name-valid");
var textemailValid = document.getElementById("email-valid");
var textpasswordValid = document.getElementById("password-valid");

const btnClaim = document.querySelector(".btn-claim");

btnClaim.addEventListener("click", () => {
    if(firstName.value === ""){
		textfirstNameValid.classList.remove("hidden");
		firstName.style.backgroundImage = "url('images/icon-error.svg')";
		firstName.placeholder='';
	}
	if(lastName.value === ""){
		textLastNameValid.classList.remove("hidden");
		lastName.style.backgroundImage = "url('images/icon-error.svg')";
		lastName.placeholder='';
	}
	if(email.value === ""){
		textemailValid.classList.remove("hidden");
		email.style.backgroundImage = "url('images/icon-error.svg')";
		email.placeholder='email@example/com';
		email.classList.add("custom-placeholder");
	}
	if(password.value === ""){
		textpasswordValid.classList.remove("hidden");
		password.style.backgroundImage = "url('images/icon-error.svg')";
		password.placeholder='';
	}
		
})

firstName.addEventListener("focus", () => {
	firstName.style.backgroundImage = "none";
	textfirstNameValid.classList.add("hidden");
	firstName.placeholder='First Name';
})

lastName.addEventListener("focus", () => {
	lastName.style.backgroundImage = "none";
	textLastNameValid.classList.add("hidden");
	lastName.placeholder='Last Name';
})

email.addEventListener("focus", () => {
	email.style.backgroundImage = "none";
	textemailValid.classList.add("hidden");
	email.placeholder='Email Adress';
	email.classList.remove("custom-placeholder");
})

password.addEventListener("focus", () => {
	password.style.backgroundImage = "none";
	textpasswordValid.classList.add("hidden");
	password.placeholder='Password';
})
 
