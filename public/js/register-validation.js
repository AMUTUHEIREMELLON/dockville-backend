const Validate=()=>{
// picking input fields with their names
let firstName = document.register.firstname
let lastName = document.register.lastname
let sex = document.register.Sex;
let carNumberPlate = document.register.CarNumberPlate;
let phoneNumber = document.register.phonenumber 






// picking error fields
let firstNameError = document.getElementById("firstnameError");
let lastNameError = document.getElementById("lastnameError");
let erroSex = document.getElementById("qnameError");
let errorCarNumberPlate = document.getElementById("gnameError");
let PhoneNumberError = document.getElementById("phonenumberError");

  
// validating  firstname input
// validating for emptiness
if(firstName.value ==""){
  firstName.style.border = "2px solid red";
  firstNameError.textContent = "please provide your firstname";
  firstNameError.style = "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
  firstName.focus();
  return false;
}
else if (firstName.value.length <2){
  firstName.style.border = "2px solid red";
  firstNameError.textContent = "first name must be at least 2 characters";
  firstNameError.style = "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
  firstName.focus();
  return false;
}
else if (firstName.value.length > 15) {
  firstName.style.border = "2px solid red";
  firstNameError.textContent = "first name must not be greate than 15 characters";
  firstNameError.style = "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
  firstName.focus();
  return false;
}
else {
  firstName.style.border = "2px solid green";
  firstNameError.textContent = "";
  lastName.focus();
  
}



// vaidating phone number
// if(phone.value == ";"){
//   phone.style.border = "2px solid red";
//   PhoneError.textContent = "please provide your phone number";
//   phoneError.style = "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
//   phone.focus();
//   return false;
// }




// let phoneRegex = /^+256\d{9}$/;

// if(!phoneRegex.test(phone.value)){
//   phone.style.border = "2px solid red";
//   PhoneError.textContent = "please provide a valid phone number";
//   phoneError.style = "color: red; fontsize:11px; font-size:Helvetical, Arial,sans-serif";
//   phone.focus();
//   return false;
// }

// // email address validation
// let emailRegex = 
// if (email.value){

// }





}
